const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

const PAGES_DIR = `${PATHS.src}/pages/`;

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    colors: [`${PATHS.src}/pages/colors-and-types/colors-and-types.scss`],
    elements: [`${PATHS.src}/pages/form-elements/form-elements.js`, `${PATHS.src}/pages/form-elements/form-elements.scss`],
    cards: [`${PATHS.src}/pages/cards/cards.js`, `${PATHS.src}/pages/cards/cards.scss`],
    headers: [`${PATHS.src}/pages/headers-footers/headers-footers.js`, `${PATHS.src}/pages/headers-footers/headers-footers.scss`],
    landing: [`${PATHS.src}/pages/landing-page/landing-page.js`, `${PATHS.src}/pages/landing-page/landing-page.scss`],
    login: [`${PATHS.src}/pages/login-page/login-page.js`, `${PATHS.src}/pages/login-page/login-page.scss`],
    details: [`${PATHS.src}/pages/room-details/room-details.js`, `${PATHS.src}/pages/room-details/room-details.scss`],
    search: [`${PATHS.src}/pages/search-room/search-room.js`, `${PATHS.src}/pages/search-room/search-room.scss`],
    sign: [`${PATHS.src}/pages/sign-in-page/sign-in-page.js`, `${PATHS.src}/pages/sign-in-page/sign-in-page.scss`],
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: PATHS.dist,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: [/blocks/, /img/, /static/],
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
            publicPath: '../',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        exclude: [/fonts/, /static/],
        options: {
          context: './src/img/',
          name: './img/[path][name].[ext]',
          publicPath: '../',
        },
      },
      {
        test: /\.(svg|png|ico|xml|json)$/,
        exclude: [/fonts/, /blocks/, /img/, /node_modules/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './favicons/[name].[ext]',
              publicPath: '../',
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,

          },
          {
            loader: 'css-loader',

          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: "@import './src/styles/vars';",
              includePaths: [path.join(__dirname, 'src')],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      './dependencyLibs/inputmask.dependencyLib':
        './dependencyLibs/inputmask.dependencyLib.jquery',
    },
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.pug`,
      filename: './index.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/colors-and-types/colors-and-types.pug`,
      filename: './colors-and-types.html',
      chunks: ['colors', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/cards/cards.pug`,
      filename: './cards.html',
      chunks: ['cards', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/form-elements/form-elements.pug`,
      filename: './form-elements.html',
      chunks: ['elements', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/headers-footers/headers-footers.pug`,
      filename: './headers-footers.html',
      chunks: ['headers', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/landing-page/landing-page.pug`,
      filename: './landing-page.html',
      chunks: ['landing', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/search-room/search-room.pug`,
      filename: './search-room.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/sign-in-page/sign-in-page.pug`,
      filename: './sign-in-page.html',
      chunks: ['search', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/login-page/login-page.pug`,
      filename: './login-page.html',
      chunks: ['login', 'vendors'],
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/room-details/room-details.pug`,
      filename: './room-details.html',
      chunks: ['sign', 'vendors'],
    }),
  ],
};
