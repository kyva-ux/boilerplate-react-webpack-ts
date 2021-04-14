// production config
const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		filename: 'js/bundle.[contenthash].min.js',
		path: paths.build,
		publicPath: '/'
	},
	devtool: 'source-map',
	plugins: []
})
