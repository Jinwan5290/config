import { Configuration } from 'webpack'
import { ConfigFunctionParams } from '@fbi-js/webpack-config-base'

import { merge } from 'webpack-merge'
import ESLintPlugin from 'eslint-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'

export default ({ webpackConfig }: ConfigFunctionParams): Configuration => {
  const config = {
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'ts', 'jsx', 'tsx'],
        files: 'src',
        baseConfig: {
          extends: ['@fbi-js/react-typescript']
        }
      }),

      new StyleLintPlugin({
        files: 'src/**/*.{css,scss,tsx,jsx}',
        configFile: require.resolve('@fbi-js/stylelint-config')
      })
    ]
  }

  return merge(webpackConfig, config)
}
