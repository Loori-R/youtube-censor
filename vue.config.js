const path = require('path');

const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
  runtimeCompiler: true,
  css: {
    requireModuleExtension: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        styles: path.resolve('src/sass')
      },
      extensions: ['.js', '.vue', '.json']
    },
    plugins: [
      new PreloadWebpackPlugin({
        rel: 'preload',
        fileBlacklist: [/\.js/, /\.map/]
      })
    ]
  }
}
;
/* eslint-enable */
