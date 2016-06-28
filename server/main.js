import webpack from 'webpack';
import webpackConfig from '../build/webpack.config';
import _debug from 'debug';
import config from '../config';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const debug = _debug('app:server');
const paths = config.utils_paths;
const app = express();

if (config.env === 'development') {
	debug('Server is running in development environment');

	const compiler = webpack(webpackConfig);
	const {publicPath} = webpackConfig.output;

	app.use(webpackDevMiddleware(compiler, {
		publicPath,
		contentBase: paths.src(),
		hot: true,
		quiet: config.compiler_quiet,
		noInfo: config.compiler_quiet,
		lazy: false,
		stats: config.compiler_stats
	}));
	app.use(webpackHotMiddleware(compiler));

	app.use(express.static(paths.src('static')));
	app.get('/infoData.json', (req, res) => {
		res.sendfile(paths.base('infoData.json'));
	})
} else {
	debug('Server is running in production environment');

	app.use(express.static(paths.dist()));
}

export default app;
