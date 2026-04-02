import webpack from 'webpack';
import childProcess from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// determine branch name for branch override usage
const branchName = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

// class name for for branch override usage
const styleClass = 'athos-snap-bundle-styles';

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
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
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
			preact: path.resolve(__dirname, '../../node_modules/preact'),
		},
	},
};
