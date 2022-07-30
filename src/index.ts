// credits: https://github.com/andywer/puppet-run/blob/40a7eb06ccd8b2b9dcfdeeac273ec27dce6d3c54/src/host-bindings.ts

import chalk from '@stagas/chalk'
import { applySourceMaps } from 'apply-sourcemaps'
import { queue } from 'event-toolkit'
import { getStringLength } from 'everyday-utils'
import type { Page } from 'puppeteer'

const transformLocations = async (args: any[], root = process.cwd(), href: string) => {
  for (const [i, x] of args.entries()) {
    if (typeof x !== 'string') continue
    args[i] = await applySourceMaps(args[i], root, href)
  }
  return args
}

export const print: any = queue.atomic(async (fn: () => Promise<void>) => {
  await fn()
})

/**
 * Setups console output for a puppeteer page.
 *
 * ```ts
 * const page = await browser.newPage()
 * puppeteerPrettyConsole(page)
 * ```
 *
 * @param page A puppeteer page instance created by browser.newPage()
 */
export function puppeteerPrettyConsole(
  page: Page,
  filter = (args: any[]): any[] => args,
) {
  // observe stdout for last line length
  let lastLineLength = 0
  const stderrWrite = process.stderr.write
  process.stderr.write = chunk => {
    lastLineLength = getStringLength(chunk.toString().split('\n').at(-2) ?? '')
    return stderrWrite.call(process.stderr, chunk)
  }

  page.on('console', async message => {
    const href = new URL(page.url()).href
    const root = process.cwd()

    const location = message.location()

    // cleanup vite's dynamic ?import suffix
    if (location.url) location.url = location.url.replace('?import', '')

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
          await transformLocations(args, root, href)
          args = filter(args)
          console.error(...args)
        }

        const loc = (await transformLocations(
          [location.url + `:${(location.lineNumber || 0) + 1}:${(location.columnNumber || 0) + 1}`],
          root,
          href
        ))[0]

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
    console.error(chalk.redBright(`Request failed: ${request.method()} ${request.url()}`))
    console.error(chalk.gray(`  ${failure ? failure.errorText : 'Unknown error'}`))
  })

  page.on('requestfinished', request => {
    const response = request.response()
    if (response && response.status() >= 400) {
      console.error(
        chalk.redBright(`HTTP ${response.status()} ${request.method()} ${request.url()}`)
      )
    }
  })

  page.on('error', error => {
    console.error(chalk.redBright('Page crashed:'))
    console.error(chalk.redBright(error.message + error.stack))
  })

  page.on('pageerror', error => {
    console.error(chalk.redBright('Uncaught exception:'))
    console.error(chalk.redBright(error.message + error.stack))
  })
}

export default puppeteerPrettyConsole
