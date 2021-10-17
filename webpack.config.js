const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log('current mode ', mode);

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HTMLWebpackPlugin({
    template: './src/index.html',
  }),
];

//in prod to support older browsers, using browserslist to add verdor prefixes
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
  mode: mode,
  entry: ['regenerator-runtime/runtime.js', './src/index.js'],
  target: target,
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
