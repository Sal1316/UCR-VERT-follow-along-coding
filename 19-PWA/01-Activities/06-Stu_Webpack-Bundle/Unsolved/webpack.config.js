const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // TODO: Add a new set of rules to handle images
  module: {
    rules: [
      {
        test: /\.css$/i, // specifying the types of files we are going to be looking at.
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // specifies the image files we will be looking at.
        type: 'asset/resource', 
      },
    ],
  },
};
