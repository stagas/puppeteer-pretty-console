// credits: https://github.com/andywer/puppet-run/blob/40a7eb06ccd8b2b9dcfdeeac273ec27dce6d3c54/src/host-bindings.ts

import chalk from '@stagas/chalk'
import { queue } from 'event-toolkit'
import { getStringLength } from 'everyday-utils'
import type { Page } from 'puppeteer'

export const print: any = queue.atomic(async (fn: () => Promise<void>) => {
  await fn()
})

/**
 * Setups console output for a puppeteer page.
 *
 * ```ts
 * const page = await browser.newPage()
 * pretty(page)
 * ```
 *
 * @param page A puppeteer page instance created by browser.newPage()
 */
export function puppeteerPrettyConsole(
  page: Page,
  transformArgs = (args: any[], _originUrl: string): Promise<any[]> => Promise.resolve(args),
  failedRequestFilter: (x: string) => boolean = () => true,
  silent = false,
) {
  // observe stderr for last line length
  let lastLineLength = 0
  const stderrWrite = process.stderr.write
  process.stderr.write = chunk => {
    lastLineLength = getStringLength(chunk.toString().split('\n').at(-2) ?? '')
    return stderrWrite.call(process.stderr, chunk)
  }

  const console: any = silent
    ? {
      clear() {},
      groupCollapsed() {},
      groupEnd() {},
      group() {},
      error() {},
      table() {},
      log() {},
      warn() {},
    }
    : global.console

  page.on('console', async message => {
    const href = new URL(page.url()).href
    const location = message.location()
    const type = message.type()

    try {
      if (type === 'clear') {
        return console.clear()
      } else if (type === 'startGroupCollapsed') {
        return console.groupCollapsed()
      } else if (type === 'endGroup') {
        return console.groupEnd()
      }

      const fn = async () => {
        const messageArgs = message.args()

        let args: any[] = []

        for (const m of messageArgs) {
          try {
            const result = await m.executionContext().evaluate(arg => {
              if (arg instanceof Error) {
                return {
                  message: arg.message,
                  stack: arg.stack,
                  matcherResult: (arg as any).matcherResult,
                }
              }
              return arg
            }, m)
            args.push(result)
          } catch {
            args.push(chalk.dim('(failed)'))
          }
        }

        messageArgs.forEach(arg => arg.dispose()) // gc

        if (type === 'startGroup') {
          console.group(...args)
        } else {
          args = await transformArgs(args, href)
          if (type === 'table') {
            console.table(...args)
          } else {
            console.error(...args)
          }
        }

        const [loc] = await transformArgs([
          `${location.url}:${(location.lineNumber || 0) + 1}:${(location.columnNumber || 0) + 1}`,
        ], href)

        const col = process.stdout.columns - getStringLength(loc) - 1

        console.error(
          `${lastLineLength <= col ? `\x1B[1A` : ''}\x1B[${col}C\x1B[2m`
            + ' ' + loc
            + '\x1B[0m'
        )
      }

      print(fn)
    } catch {}
  })

  page.on('requestfailed', request => {
    const failure = request.failure()
    const msg = `Request failed: ${request.method()} ${request.url()}`
    if (failedRequestFilter(msg)) {
      console.error(chalk.redBright(msg))
      console.error(chalk.gray(`  ${failure ? failure.errorText : 'Unknown error'}`))
    }
  })

  page.on('requestfinished', request => {
    const response = request.response()
    if (response && response.status() >= 400) {
      console.error(
        chalk.redBright(`HTTP ${response.status()} ${request.method()} ${request.url()}`)
      )
    }
  })

  page.on('error', async error => {
    const fn = async () => {
      const href = new URL(page.url()).href
      const [msg] = await transformArgs([error.message + error.stack], href)
      console.error(chalk.redBright('Page crashed:'))
      console.error(chalk.redBright(msg))
    }
    print(fn)
  })

  page.on('pageerror', error => {
    const fn = async () => {
      const href = new URL(page.url()).href
      const [msg] = await transformArgs([error.message + error.stack], href)
      console.error(chalk.redBright('Uncaught exception:'))
      console.error(chalk.redBright(msg))
    }
    print(fn)
  })
}

export default puppeteerPrettyConsole
