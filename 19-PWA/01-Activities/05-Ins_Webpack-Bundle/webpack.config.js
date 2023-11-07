const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

module: {
  rules: [
    {
      test: /\.css$/i, // anytime it runs into something that ends in .css, it handles it with the use.
      use: ['style-loader', 'css-loader'],
    },
  ],
},
};
