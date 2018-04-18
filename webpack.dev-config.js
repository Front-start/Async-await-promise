var path = require("path");

module.exports = {
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              minimize: false
            }
          },
          {
            loader: "postcss-loader"
          },
          { loader: "less-loader" }
        ]
      }
    ]
  }
};
