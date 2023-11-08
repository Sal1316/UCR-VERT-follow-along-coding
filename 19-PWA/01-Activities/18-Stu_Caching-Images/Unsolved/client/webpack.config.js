const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Require the GenerateSW class of the WorkBoxPlugin
const WorkboxPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Webpack Plugin",
    }),
    new MiniCssExtractPlugin(),
    // TODO: Add parameters to GenerateSW class to configure runtime caching
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg)$/], // exlcuded from being included in the precashed assets
      runtimeCaching: [
        {
          urlPattern: [/\.(?:png|jpg|jpeg|svg)$/],
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 2,
            },
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
