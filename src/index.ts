// credits: https://github.com/andywer/puppet-run/blob/40a7eb06ccd8b2b9dcfdeeac273ec27dce6d3c54/src/host-bindings.ts

import chalk from '@stagas/chalk'
import type { Page } from 'puppeteer'

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
export function puppeteerPrettyConsole(page: Page) {
  page.on('console', async message => {
    const type = message.type()
    const text = message.text()
    const messageArgs = message.args()
    let args = await Promise.all(messageArgs.map(arg => arg.jsonValue()))
    messageArgs.forEach(arg => arg.dispose()) // gc
    if (text.length) args = [text]

    if (type === 'clear') {
      return console.clear()
    } else if (type === 'startGroupCollapsed') {
      return console.groupCollapsed()
    } else if (type === 'endGroup') {
      return console.groupEnd()
    }

    if (type === 'error') {
      console.error(...args)
    } else if (type === 'warning') {
      console.warn(...args)
    } else if (type === 'debug') {
      console.debug(...args)
    } else if (type === 'startGroup') {
      console.group(...args)
    } else {
      console.log(...args)
    }
  })

  page.on('requestfailed', request => {
    const failure = request.failure()
    console.error(
      chalk.redBright(`Request failed: ${request.method()} ${request.url()}`)
    )
    console.error(
      chalk.gray(`  ${failure ? failure.errorText : 'Unknown error'}`)
    )
  })

  page.on('requestfinished', request => {
    const response = request.response()
    if (response && response.status() >= 400) {
      console.error(
        chalk.redBright(
          `HTTP ${response.status()} ${request.method()} ${request.url()}`
        )
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
