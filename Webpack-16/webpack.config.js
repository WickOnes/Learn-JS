const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ['style-loader','css-loader']},
      {test: /\.(jpg|png|gif)$/,
      use:{
      loader: "url-loader", // вывод менее 100 КБ в формате base64
                         // Если он больше 100 КБ, вызвать файл-загрузчик как файл вывода
      options:{
         limit: 100 * 1024, // 100 КБ При установке атрибута publicPath рекомендуется установить его в 1-10 КБ		
         outputPath: "img", // Когда изображение большое, каталог вывода - img
         publicPath: "http://www.xxx.com" // Автоматически добавлять префикс к картинке. Этот метод не подходит для base64, поэтому при установке этого атрибута нужно быть внимательным. Здесь мы пока не устанавливаем это свойство.
      }
    }  
  }             

  ],
    
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "My Test",
    })
  ],
  mode: 'development',
};
