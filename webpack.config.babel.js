import BabiliPlugin from 'babili-webpack-plugin';
import path from 'path';

export default {
  context: __dirname,
  target: 'node',
  externals: {
    'prop-types': 'PropTypes',
    'react-redux': 'ReactRedux',
    recompose: 'Recompose',
  },
  entry: {
    'react-jPlayer-utils.js': './src/index.js',
    'react-jPlayer-utils.min.js': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
    libraryTarget: 'var',
    library: 'ReactJPlayerUtils',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new BabiliPlugin({}, {
      test: /\.min\.js$/,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
