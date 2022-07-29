// development config
const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		static: {
			directory: paths.build,
		},
		historyApiFallback: true,
		open: false,
		compress: true,
		hot: true,
		port: 8080,
	},
})
