const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin()],
  module:{
    rules:[
      {
        test:/\.js$/,
        loader: "babel-loader",
        options: {
                  presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,
          {
              loader:'css-loader',
              options: {
                  modules: {
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
                },
          },
          'sass-loader'
        ]
        }
    ]
  },
};
