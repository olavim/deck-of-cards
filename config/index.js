import path from 'path';
import _debug from 'debug';
import {argv} from 'yargs';
import ip from 'ip';

const localip = ip.address();
const debug = _debug('app:config');
debug('Creating default configuration.');

const config = {
	env: process.env.NODE_ENV || 'development',

	path_base: path.resolve(__dirname, '..'),
	dir_src: 'src',
	dir_static: 'static',
	dir_dist: 'dist',

	server_host : localip,
	server_port: process.env.PORT || 8888,

	compiler_css_modules : true,
	compiler_devtool: 'source-map',
	compiler_hash_type: 'hash',
	compiler_fail_on_warning: false,
	compiler_quiet : false,
	compiler_public_path: '/',
	compiler_stats: {
		chunks: false,
		chunkModules: false,
		colors: true
	}
};

config.globals = {
	'__DEV__': config.env === 'development',
	'__PROD__': config.env === 'production',
	'__TEST__': config.env === 'test',
	'__DEBUG__': config.env === 'development' && !argv.no_debug
};

const base = (...args) => Reflect.apply(path.resolve, null, [config.path_base, ...args]);

config.utils_paths = {
	base,
	src: base.bind(null, config.dir_src),
	static: base.bind(null, config.dir_static),
	dist: base.bind(null, config.dir_dist)
};

export default config;
