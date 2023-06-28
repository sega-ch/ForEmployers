const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new CleanPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CopyPlugin({
            patterns: [{ from: "./static", to: "./static" }],
         }),
         new MiniCssExtractPlugin(),
    ],

    optimization: {
        minimizer: [new UglifyWebpackPlugin()],
      },
    
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          }
        ],
      },

  };