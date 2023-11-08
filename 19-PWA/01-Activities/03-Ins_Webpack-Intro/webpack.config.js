const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
// the mode, can be "development" or "production", but production minifies the files striping away alot of not needed variables names and spaces. retirns a minified string.