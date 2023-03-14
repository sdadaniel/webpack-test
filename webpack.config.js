const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: { src1: "./source1/index.js", src2: "./source2/index.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // plugins: [
  //   // extract css to external stylesheet file
  //   new MiniCssExtractPlugin({
  //     filename: "build/styles.css",
  //   }),
  // ],
};
