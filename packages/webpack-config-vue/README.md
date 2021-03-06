# @fbi-js/webpack-config-vue

Webpack config for Vue.js project. Extends [@fbi-js/webpack-config-base](https://github.com/fbi-js/config/blob/main/packages/webpack-config-base)

## Usage

```bash
npm i -D @fbi-js/webpack-config-vue webpack@5 webpack-dev-server@next
```

- `./webpack.config.js`

  ```js
  const config = require('@fbi-js/webpack-config-vue').default

  // default
  module.exports = config()

  // extends
  module.exports = {
    ...config(),
    entry: './index.js'
  }

  // with options
  module.exports = config({
    options: {
      isTs: true
    }
  })
  ```

- or `./webpack.config.ts`

  ```ts
  import config from '@fbi-js/webpack-config-vue'

  // default
  export default config()

  // extends
  export default {
    ...config(),
    entry: './index.js'
  }

  // with options
  export default config({
    options: {
      isTs: true
    }
  })
  ```

## [Options](https://github.com/fbi-js/config/blob/main/packages/webpack-config-base/README.md#options)

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
