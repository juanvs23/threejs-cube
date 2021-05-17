const path = require('path');

const babelConfig= {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
const scss = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
}
module.exports = {
  module:{
    rules:[
     babelConfig,scss
    ]
  },
    mode: 'development',
  
    watchOptions: {
        ignored: ['node_modules'],
      },
  entry: './src/js/index.js',
  output: {
    filename: 'assets/js/index.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  
};