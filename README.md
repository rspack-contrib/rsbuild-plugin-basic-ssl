# @rsbuild/plugin-basic-ssl

Generate an untrusted, self-signed certificate for the HTTPS server.

The Basic SSL plugin will automatically generate a self-signed certificate and set the [server.https](https://rsbuild.dev/config/server/https) option. When you visit the page, your browser will indicate that the certificate is not trusted. You can access the HTTPS page after manually confirming this.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-basic-ssl">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-basic-ssl?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-basic-ssl -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";

export default {
  plugins: [pluginBasicSsl()],
};
```

Then visit the https URL of the page, and confirm in your browser.

## License

[MIT](./LICENSE).
