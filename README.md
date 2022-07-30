<h1>
puppeteer-pretty-console <a href="https://npmjs.org/package/puppeteer-pretty-console"><img src="https://img.shields.io/badge/npm-v1.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-105-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

helper that setups console output for puppeteer

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i puppeteer-pretty-console </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add puppeteer-pretty-console </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add puppeteer-pretty-console</code>
</td></tr></table>
</h4>

## API

<p>  <details id="puppeteerPrettyConsole$1" title="Function" ><summary><span><a href="#puppeteerPrettyConsole$1">#</a></span>  <code><strong>puppeteerPrettyConsole</strong></code><em>(page, filter)</em>     &ndash; Setups console output for a puppeteer page.</summary>  <a href="src/index.ts#L31">src/index.ts#L31</a>  <ul>    <p>  <p>

```ts
const page = await browser.newPage()
puppeteerPrettyConsole(page)
```

</p>
  <details id="page$3" title="Parameter" ><summary><span><a href="#page$3">#</a></span>  <code><strong>page</strong></code>     &ndash; A puppeteer page instance created by browser.newPage()
</summary>    <ul><p><span>Page</span></p>        </ul></details><details id="filter$4" title="Function" ><summary><span><a href="#filter$4">#</a></span>  <code><strong>filter</strong></code><em>(args)</em>    </summary>    <ul>    <p>    <details id="args$7" title="Parameter" ><summary><span><a href="#args$7">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong>filter</strong><em>(args)</em>  &nbsp;=&gt;  <ul>any  []</ul></p></p>    </ul></details>  <p><strong>puppeteerPrettyConsole</strong><em>(page, filter)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details><details id="print$8" title="Variable" ><summary><span><a href="#print$8">#</a></span>  <code><strong>print</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href="src/index.ts#L17">src/index.ts#L17</a>  <ul><p>any</p>        </ul></details><details id="puppeteerPrettyConsole$1" title="Function" ><summary><span><a href="#puppeteerPrettyConsole$1">#</a></span>  <code><strong>puppeteerPrettyConsole</strong></code><em>(page, filter)</em>     &ndash; Setups console output for a puppeteer page.</summary>  <a href="src/index.ts#L31">src/index.ts#L31</a>  <ul>    <p>  <p>

```ts
const page = await browser.newPage()
puppeteerPrettyConsole(page)
```

</p>
  <details id="page$3" title="Parameter" ><summary><span><a href="#page$3">#</a></span>  <code><strong>page</strong></code>     &ndash; A puppeteer page instance created by browser.newPage()
</summary>    <ul><p><span>Page</span></p>        </ul></details><details id="filter$4" title="Function" ><summary><span><a href="#filter$4">#</a></span>  <code><strong>filter</strong></code><em>(args)</em>    </summary>    <ul>    <p>    <details id="args$7" title="Parameter" ><summary><span><a href="#args$7">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong>filter</strong><em>(args)</em>  &nbsp;=&gt;  <ul>any  []</ul></p></p>    </ul></details>  <p><strong>puppeteerPrettyConsole</strong><em>(page, filter)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>

## Credits

- [@stagas/chalk](https://npmjs.org/package/@stagas/chalk) by [stagas](https://github.com/stagas) &ndash; Terminal string styling done right (+ CommonJS build)
- [apply-sourcemaps](https://npmjs.org/package/apply-sourcemaps) by [stagas](https://github.com/stagas) &ndash; Fetch and apply sourcemaps in logs and stack traces originating from the browser or puppeteer.
- [event-toolkit](https://npmjs.org/package/event-toolkit) by [stagas](https://github.com/stagas) &ndash; Toolkit for DOM events.
- [everyday-utils](https://npmjs.org/package/everyday-utils) by [stagas](https://github.com/stagas) &ndash; Everyday utilities
- [puppeteer](https://npmjs.org/package/puppeteer) by [The Chromium Authors](https://github.com/puppeteer) &ndash; A high-level API to control headless Chrome over the DevTools Protocol

## Contributing

[Fork](https://github.com/stagas/puppeteer-pretty-console/fork) or [edit](https://github.dev/stagas/puppeteer-pretty-console) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
