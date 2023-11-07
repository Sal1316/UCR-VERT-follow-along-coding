const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',// specifying the name of output
    path: path.resolve(__dirname, 'dist'),
  },
};
