const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    config.plugins.push(new PreloadWebpackPlugin({
      rel: 'preload',
      as : 'font',
      include: 'allAssets',
      fileWhitelist: [/(.woff2?)/i]
    }))
    // ...add your webpack config
    return config;
  },
}