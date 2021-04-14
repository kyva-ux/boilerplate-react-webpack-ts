const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
	entry: [paths.src + '/index.tsx'],
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /].(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] }
			},
			{
				test: /\.tsx?$/,
				include: paths.src,
				loader: 'awesome-typescript-loader',
				options: {
					transpileOnly: true
				}
			}
		]
	},
	resolve: {
		alias: {
			'@src': paths.src,
			'@app': paths.src + '/app'
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	plugins: [
		new CleanWebpackPlugin(),
		new copyWebpackPlugin({
			patterns: [
				{
					from: paths.src + '/assets',
					to: 'assets'
				}
			]
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack Boilerplate',
			favicon: paths.src + '/assets/icons/favicon.ico',
			template: paths.public + '/index.html', // template file
			filename: 'index.html' // output file
		}),
		new ForkTsCheckerWebpackPlugin()
	]
}
