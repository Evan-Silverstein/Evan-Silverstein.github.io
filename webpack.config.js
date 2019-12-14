
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env"],
          plugins: ["@babel/plugin-transform-object-assign"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Src: path.resolve(__dirname, 'src/'),
      Components: path.resolve(__dirname, 'src/components/'),
      // Templates: path.resolve(__dirname, 'src/templates/')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    //contentBase: path.join(__dirname, "public/"),
    contentBase: path.join(__dirname, ""),
    port: 3001,
    publicPath: "http://localhost:3000/dist/",
    historyApiFallback: true,
    disableHostCheck: true,
    //hot: true
    },
//     plugins: [
//         // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//           title: 'Hot Module Replacement'
//         }),
//   +     new webpack.HotModuleReplacementPlugin()
//       ],

}