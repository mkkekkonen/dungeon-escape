const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const base = require('./base');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.png'],
  },
  output: {
    filename: 'bundle.min.js',
    library: 'mkkekkonenPhaserStories',
    libraryTarget: 'umd',
  },
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'node_modules/mkkekkonen-phaser-stories/dist',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
