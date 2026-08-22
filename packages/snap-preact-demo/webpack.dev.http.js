// Temporary HTTP variant of webpack.dev.js for headless preview inspection
// (the headless browser rejects the dev server's self-signed HTTPS cert).
import configs from './webpack.dev.js';

const [devServer, ...rest] = configs;

export default [
	{
		...devServer,
		devServer: {
			...devServer.devServer,
			server: 'http',
			port: 3333,
		},
	},
	...rest,
];
