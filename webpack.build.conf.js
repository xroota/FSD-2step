const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const publicDir = 'https://xroota.github.io/FSD-2step/';
const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [],

  output: {
    filename: 'js/[name].[hash].js',
    publicPath: publicDir,
  },

});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
