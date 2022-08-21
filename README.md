<h1>
puppeteer-pretty-console <a href="https://npmjs.org/package/puppeteer-pretty-console"><img src="https://img.shields.io/badge/npm-v1.1.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-123-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/puppeteer-pretty-console@1.1.0/dist/puppeteer-pretty-console.min.js"><img src="https://img.shields.io/badge/brotli-3.7K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
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

<p>  <details id="puppeteerPrettyConsole$1" title="Function" ><summary><span><a href="#puppeteerPrettyConsole$1">#</a></span>  <code><strong>puppeteerPrettyConsole</strong></code><em>(page, transformArgs, failedRequestFilter, silent)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="page$3" title="Parameter" ><summary><span><a href="#page$3">#</a></span>  <code><strong>page</strong></code>    </summary>    <ul><p><span>Page</span></p>        </ul></details><details id="transformArgs$4" title="Function" ><summary><span><a href="#transformArgs$4">#</a></span>  <code><strong>transformArgs</strong></code><em>(args, _originUrl)</em>    </summary>    <ul>    <p>    <details id="args$7" title="Parameter" ><summary><span><a href="#args$7">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details><details id="_originUrl$8" title="Parameter" ><summary><span><a href="#_originUrl$8">#</a></span>  <code><strong>_originUrl</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>transformArgs</strong><em>(args, _originUrl)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any  []&gt;</ul></p></p>    </ul></details><details id="failedRequestFilter$9" title="Function" ><summary><span><a href="#failedRequestFilter$9">#</a></span>  <code><strong>failedRequestFilter</strong></code><em>(x)</em>    </summary>    <ul>    <p>    <details id="x$12" title="Parameter" ><summary><span><a href="#x$12">#</a></span>  <code><strong>x</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>failedRequestFilter</strong><em>(x)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details><details id="silent$13" title="Parameter" ><summary><span><a href="#silent$13">#</a></span>  <code><strong>silent</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>false</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong>puppeteerPrettyConsole</strong><em>(page, transformArgs, failedRequestFilter, silent)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details><details id="print$14" title="Variable" ><summary><span><a href="#print$14">#</a></span>  <code><strong>print</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p>any</p>        </ul></details><details id="puppeteerPrettyConsole$1" title="Function" ><summary><span><a href="#puppeteerPrettyConsole$1">#</a></span>  <code><strong>puppeteerPrettyConsole</strong></code><em>(page, transformArgs, failedRequestFilter, silent)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="page$3" title="Parameter" ><summary><span><a href="#page$3">#</a></span>  <code><strong>page</strong></code>    </summary>    <ul><p><span>Page</span></p>        </ul></details><details id="transformArgs$4" title="Function" ><summary><span><a href="#transformArgs$4">#</a></span>  <code><strong>transformArgs</strong></code><em>(args, _originUrl)</em>    </summary>    <ul>    <p>    <details id="args$7" title="Parameter" ><summary><span><a href="#args$7">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details><details id="_originUrl$8" title="Parameter" ><summary><span><a href="#_originUrl$8">#</a></span>  <code><strong>_originUrl</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>transformArgs</strong><em>(args, _originUrl)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any  []&gt;</ul></p></p>    </ul></details><details id="failedRequestFilter$9" title="Function" ><summary><span><a href="#failedRequestFilter$9">#</a></span>  <code><strong>failedRequestFilter</strong></code><em>(x)</em>    </summary>    <ul>    <p>    <details id="x$12" title="Parameter" ><summary><span><a href="#x$12">#</a></span>  <code><strong>x</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>failedRequestFilter</strong><em>(x)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details><details id="silent$13" title="Parameter" ><summary><span><a href="#silent$13">#</a></span>  <code><strong>silent</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>false</code></span>  </summary>    <ul><p>boolean</p>        </ul></details>  <p><strong>puppeteerPrettyConsole</strong><em>(page, transformArgs, failedRequestFilter, silent)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>

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
