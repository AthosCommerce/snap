import webpack from 'webpack';
import childProcess from 'child_process';

// determine branch name for branch override usage
const branchName = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

// class name for for branch override usage
const styleClass = 'athos-snap-bundle-styles';
const transpileOnly = process.env.SNAP_WEBPACK_TRANSPILE_ONLY === '1';
const typescriptRules = transpileOnly
	? [
			{
				test: /\.ts$/,
				use: {
					loader: 'esbuild-loader',
					options: {
						loader: 'ts',
						target: 'es2020',
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.tsx$/,
				use: {
					loader: 'esbuild-loader',
					options: {
						loader: 'tsx',
						target: 'es2020',
					},
				},
				exclude: /node_modules/,
			},
	  ]
	: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
	  ];

export default {
	stats: {
		modulesSort: 'size',
		modulesSpace: 70,
	},
	plugins: [
		new webpack.DefinePlugin({
			BRANCHNAME: `"${branchName}"`,
		}),
		new webpack.BannerPlugin({
			banner: 'window.athos = window.athos || {};\nwindow.athos.managed = true;',
			raw: true,
			entryOnly: true,
		}),
		// to disable code splitting, include the following:
		// new webpack.optimize.LimitChunkCountPlugin({
		// 	maxChunks: 1,
		// }),
	],
	module: {
		rules: [
			...typescriptRules,
			{
				test: /\.(css|scss)$/,
				exclude: /\.module\.(css|scss)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							attributes: { class: styleClass },
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.module\.(css|scss)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							attributes: { class: styleClass },
						},
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]--[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg)$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
		},
	},
};
