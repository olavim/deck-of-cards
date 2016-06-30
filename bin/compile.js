import fs from 'fs-extra';
import _debug from 'debug';
import webpackCompiler from '../build/webpack-compiler';
import webpackConfig from '../build/webpack.config';
import config from '../config';

const debug = _debug('app:bin:compile');
const paths = config.utils_paths;

async function compile() {
	try {
		debug('Run compiler');
		const stats = await webpackCompiler(webpackConfig);

		if (stats.warnings.length && config.compiler_fail_on_warning) {
			debug('Config set to fail on warning, exiting with status code "1".');
			process.exit(1);
		}

		debug('Copy static assets to dist folder.');
		fs.copySync(paths.src('static'), paths.dist());
		debug('Copy info data to dist folder.');
		fs.copySync(paths.base('infoData.json'), paths.dist('infoData.json'));
	} catch (e) {
		debug('Compiler encountered an error.', e);
		process.exit(1);
	}
}

compile();
