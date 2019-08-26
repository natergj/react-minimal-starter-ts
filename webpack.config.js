const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "[name].[chunkhash].js",
    path: __dirname + "/dist",
  },
  plugins: [new HtmlWebpackPlugin({ filename: "index.html", template: "src/index.ejs" })],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
