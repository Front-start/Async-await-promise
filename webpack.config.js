var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var CopyWebpackPlugin = require("copy-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");

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
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: ["> 1%", "last 2 versions", "IE 10"]
                  }
                }
              ]
            ],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread",
              "syntax-async-functions",
              "transform-regenerator"
            ]
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: false
              }
            },
            { loader: "postcss-loader" },
            { loader: "less-loader" }
          ]
        })
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new ExtractTextPlugin("./styles.css"),
    new CopyWebpackPlugin([
      {
        from: "./images/",
        to: "../images/"
      }
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    }),
    new UglifyJsPlugin()
  ]
};
