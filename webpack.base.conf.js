const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
}



const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,

  },
  output: {
    filename: `js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
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
    }, {
      test: /\.(svg|png|ico|xml|json)$/,
      exclude: [/fonts/, /blocks/, /img/, /node_modules/],
      use: [{
        loader: 'file-loader',
        options: {
          name: './favicons/[name].[ext]',
          publicPath: '../',
        },
      }],
    },{
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
            data: '@import \'./src/styles/vars\';',
            includePaths: [path.join(__dirname, 'src')],
          },
        }]

    }]
  },

  
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      './dependencyLibs/inputmask.dependencyLib': './dependencyLibs/inputmask.dependencyLib.jquery',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[hash].css`,
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.pug`,
      filename: './index.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/colors-and-types/colors-and-types.pug`,
      filename: './colors-and-types.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/cards/cards.pug`,
      filename: './cards.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/form-elements/form-elements.pug`,
      filename: './form-elements.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/headers-footers/headers-footers.pug`,
      filename: './headers-footers.html',
    }),


    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/landing-page/landing-page.pug`,
      filename: './landing-page.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/search-room/search-room.pug`,
      filename: './search-room.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/sign-in-page/sign-in-page.pug`,
      filename: './sign-in-page.html',
    }),

   
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/login-page/login-page.pug`,
      filename: './login-page.html',
    }), 

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/room-details/room-details.pug`,
      filename: './room-details.html',
    }), 


  ],
}
