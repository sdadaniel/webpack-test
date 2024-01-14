const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
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
        use: ["css-loader"],
      },
      // scss,sass
      {
        test: /\.s[ac]ss$/i,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets",
            name: "[name].[contenthash].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    // extract css to external stylesheet file
    new htmlWebpackPlugin({
      template: "./source1/index.html",
      filename: "./main.html",
      chunks: ["src1"],
    }),
    new htmlWebpackPlugin({
      template: "./source2/about.html",
      filename: "./about.html",
      chunks: ["src2"],
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map", // 소스 맵 파일명 설정
      exclude: ["vendor.js"], // 특정 파일 제외 설정 (예시)
      // 추가적인 옵션 설정 가능
    }),
  ],
};
