const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const prodConfig = {
	mode: 'production',

	// devServer: {
	//   contentBase: './dist', // 运行dist文件
	//   open: true,
	//   hot: true, // 修改代码时防止页面刷新
	//   hotOnly: true // 修改代码时防止页面刷新
	// },
	devtool: 'cheap-module-eval-source-map'//出错文件映射
}
module.exports = merge(commonConfig, prodConfig)