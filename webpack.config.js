const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    proxy: {
      '/**': {
        target: 'http://localhost:8086/',
      },
    }
  },
  plugins: [htmlWebpackPlugin]
}