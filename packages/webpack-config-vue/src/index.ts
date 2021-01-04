import { Configuration } from 'webpack'
import webpackConfigBase, {
  ConfigFunctionParams
} from '@fbi-js/webpack-config-base'

import { resolve } from 'path'
import { merge } from 'webpack-merge'
import { VueLoaderPlugin } from 'vue-loader'
import ESLintPlugin from 'eslint-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'

export default ({
  webpackConfig,
  options
}: ConfigFunctionParams): Configuration => {
  const baseConfig = webpackConfigBase({ options })

  const config = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: resolve('node_modules'),
          loader: 'vue-loader',
          options: {
            shadowMode: true
          }
        }
      ]
    },
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'ts', 'jsx', 'tsx', 'vue'],
        files: 'src',
        allowInlineConfig: false,
        baseConfig: {
          extends: ['@fbi-js/vue-typescript']
        }
      }),

      new StyleLintPlugin({
        files: '**/*.{css,scss,vue}',
        configFile: require.resolve('@fbi-js/stylelint-config')
      }),

      new VueLoaderPlugin()
    ],
    resolve: {
      extensions: ['.vue'],
      alias: {
        vue: 'vue/dist/vue.esm.js'
      }
    }
  }

  return merge(baseConfig, webpackConfig || {}, config as Configuration)
}
