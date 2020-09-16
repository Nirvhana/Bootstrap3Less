const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')

  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({ template: './src/index.html' }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })]
};