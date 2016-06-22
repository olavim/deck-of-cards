const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css loaders
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'source-map',
	entry: ['./src/app.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'app.[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /bower_components/],
				query: {
					presets: ['es2015', 'stage-1', 'babel-preset-react']
				}
			},
			{
				test: /\.scss/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
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
	sassLoader: {
		includePaths: [path.resolve(__dirname, './assets')]
	},
	postcss: () => {
		return [precss(), autoprefixer({browsers: ['last 2 versions']})];
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components'],
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'Deck of Cards',
			template: 'web/index.prod.html',
			favicon: 'web/favicon.png',
			inject: 'body'
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			compress: {
				/* eslint-disable camelcase */
				dead_code: true,  // discard unreachable code
				unsafe: false, // some unsafe optimizations (see below)
				unused: false, // drop unused constiables/functions
				hoist_consts: false, // hoist constiable declarations
				side_effects: false, // drop side-effect-free statements
				global_defs: {} // glob
				/* eslint-enable camelcase */
			}
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			__DEVELOPMENT__: process.env.NODE_ENV === 'development',
			__DEVTOOLS__: false
		})
	]
};
