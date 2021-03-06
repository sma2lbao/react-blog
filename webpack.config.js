const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const config = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],

  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/react-blog/'
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        },
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[loacl]_[hash:base64:5]',
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => {
                require('autoprefixer')({
                  browsers: 'last 2 versions'
                })
              }
            }
          },
        ]
      },
      {
        test: /\.(gif|jpe?g|png|svg|eot|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 2000,
    hot: true
  }
}

module.exports = config;
