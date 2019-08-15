const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	mode: 'production',
	entry: {
	   main: './src/index.js',
	},
	module: {
		rules: [
		  {
            test: /\.(png|jpg|gif)$/,
            use: {
               loader: 'url-loader',  //和file-loader相似
               options: {
               	// placeholder  占位符
               	 name: '[name]_[hash].[ext]',
               	 outputPath: 'images/',
               	 limit: 204800  // 文件大于200kb时 打包到图片文件 否则打包到bundle.js内
               }
            }
		  },
		  {
            test: /\.(eot|ttf|svg)$/, // 打包字体图标文件
            use: {
               loader: 'file-loader'
            }
		  },
		  {
            test: /\.scss$/,
            use: [
            'style-loader', 
            {
              loader:'css-loader',
              options: {
              	importLoaders: 2, // 引入的scss文件以此执行所有loader
              	modules: true // 局部打包并引入css
              }
            },
            'sass-loader',
            'postcss-loader'
            ]
		  }
		]
	},
	plugins:[new HtmlWebpackPlugin({
		template: 'src/index.html'
	})],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}
