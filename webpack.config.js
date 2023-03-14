const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: { src1: "./source1/index.js", src2: "./source2/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      // css 로더
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // scss,sass
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets",
          },
        },
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
