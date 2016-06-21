var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/app.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /bower_components/],
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'stage-1', 'babel-preset-react']
				}
			},
			{
				test: /\.scss/,
				loaders: [
					'style-loader',
					'css-loader',
					'autoprefixer-loader?browsers=last 2 version',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=assets/images/[hash:base58:8].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.svg$/,
				loader: 'file-loader?name=assets/images/[name].[ext]'
			}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components'],
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'Tuup',
			template: 'web/index.dev.html',
			favicon: 'web/favicon.png'
		}),
		new webpack.DefinePlugin({
			__DEVELOPMENT__: process.env.NODE_ENV === 'development',
			__DEVTOOLS__: true
		})
	]
};
