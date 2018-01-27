var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js', 'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
          { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?name=images/[name].[ext]', exclude: /node_modules/ },
          { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],
    singleRun: true,
    concurrency: 1
  })
}
