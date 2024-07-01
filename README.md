# @rsbuild/plugin-basic-ssl

@rsbuild/plugin-basic-ssl is a Rsbuild plugin to do something.

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

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginBasicSsl({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
