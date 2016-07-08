import webpack from 'webpack';
import cssnano from 'cssnano';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from '../config';
import _debug from 'debug';

const debug = _debug('app:webpack:config');
const paths = config.utils_paths;
const {__DEV__, __PROD__} = config.globals;

debug('Create configuration.');
const webpackConfig = {
	name: 'client',
	target: 'web',
	devtool: config.compiler_devtool,
	resolve: {
		root: paths.src(),
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {}
};

webpackConfig.entry = [
	'babel-polyfill',
	paths.src('index.js')
];

if (__DEV__) {
	// add HMR entry
	webpackConfig.entry.push(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`);
}

webpackConfig.output = {
	filename: `[name].[${config.compiler_hash_type}].js`,
	path: paths.dist(),
	publicPath: config.compiler_public_path
};

webpackConfig.plugins = [
	new webpack.DefinePlugin(config.globals),
	new HtmlWebpackPlugin({
		template: paths.src('index.html'),
		hash: false,
		favicon: paths.src('static/favicon.png'),
		filename: 'index.html',
		inject: 'body',
		minify: {collapseWhitespace: true}
	})
];

if (__DEV__) {
	debug('Enable plugins for live development (HMR, NoErrors).');
	webpackConfig.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	)
} else if (__PROD__) {
	debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).');
	webpackConfig.plugins.push(
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				unused: true,
				dead_code: true,
				warnings: false
			}
		})
	)
}

webpackConfig.module.loaders = [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel',
		query: {
			cacheDirectory: true,
			plugins: ['transform-runtime'],
			presets: ['es2015', 'react', 'stage-1'],
			env: {production: {presets: ['react-optimize']}}
		}
	}
];

const BASE_CSS_LOADER = 'css?sourceMap&-minimize';

const CSS_MODULE_PATHS = [];

if (config.compiler_css_modules) {
	CSS_MODULE_PATHS.push(
		paths.src().replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&')
	)
}

const isUsingCSSModules = !!CSS_MODULE_PATHS.length;
const cssModulesRegex = new RegExp(`(${CSS_MODULE_PATHS.join('|')})`);

if (isUsingCSSModules) {
	const cssModulesLoader = [
		BASE_CSS_LOADER,
		'modules',
		'importLoaders=1',
		'localIdentName=[name]__[local]___[hash:base64:5]'
	].join('&');

	webpackConfig.module.loaders.push({
		test: /\.scss$/,
		include: cssModulesRegex,
		loaders: [
			'style',
			cssModulesLoader,
			'postcss',
			'sass?sourceMap'
		]
	});

	webpackConfig.module.loaders.push({
		test: /\.css$/,
		include: cssModulesRegex,
		loaders: [
			'style',
			cssModulesLoader,
			'postcss'
		]
	})
}

const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false;
webpackConfig.module.loaders.push({
	test: /\.scss$/,
	exclude: excludeCSSModules,
	loaders: [
		'style',
		BASE_CSS_LOADER,
		'postcss',
		'sass?sourceMap'
	]
});

webpackConfig.module.loaders.push({
	test: /\.css$/,
	exclude: excludeCSSModules,
	loaders: [
		'style',
		BASE_CSS_LOADER,
		'postcss'
	]
});

webpackConfig.sassLoader = {
	includePaths: paths.src('styles')
};

webpackConfig.postcss = [
	cssnano({
		autoprefixer: {
			add: true,
			remove: true,
			browsers: ['last 2 versions']
		},
		discardComments: {removeAll: true},
		discardUnused: false,
		mergeIdents: false,
		reduceIdents: false,
		safe: true,
		sourcemap: true
	})
];

webpackConfig.module.loaders.push(
	{test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'},
	{test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
);

export default webpackConfig;
