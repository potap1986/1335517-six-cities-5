const path = require('path');
const webpack = require('webpack');
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif|woff2?|ttf|eot)$/,
        use: [ 'file-loader' ]
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types',
      cx: `classnames`,
    }),
    new MomentLocalesPlugin(),
  ],
  resolve: {
    modules: [
      `node_modules`,
      path.resolve(path.join(__dirname, `public`))
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
};
