import { merge } from 'webpack-merge';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This is used to create the initial dist directory in the virtual dev server
// Other builds require that the dist directory already exists before creating the subdirectories 'snap' and 'templates'
const devServer = {
	mode: 'development',
	entry: './server.js',
	output: {
		filename: 'server.js',
	},
	devtool: 'source-map',
	devServer: {
		server: 'https',
		port: 2222,
		hot: true,
		allowedHosts: 'all',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		static: [
			{
				directory: path.join(__dirname, 'public'),
				publicPath: '/',
				watch: true,
			},
			{
				directory: path.join(__dirname, 'public/shared'),
				publicPath: '/snap',
				watch: true,
			},
			{
				directory: path.join(__dirname, 'public/shared'),
				publicPath: '/hybrid',
				watch: true,
			},
			{
				directory: path.join(__dirname, 'public/shared'),
				publicPath: '/templates',
				watch: true,
			},
		],
		devMiddleware: {
			publicPath: '/',
		},
		client: {
			logging: 'error',
			overlay: {
				errors: true,
				warnings: false,
				runtimeErrors: false,
			},
		},
	},
};

import modernProd from './snap/webpack.modern.js';
const modern = {
	...merge(modernProd, {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										browserslistEnv: 'modern',
									},
								],
							],
						},
					},
				},
			],
		},
	}),
	// development overrides
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist/snap'),
		filename: 'bundle.js',
		chunkFilename: 'bundle.chunk.[fullhash:8].[id].js',
	},
	devtool: 'source-map',
};

import modernTemplatesProd from './templates/webpack.modern.js';
const modernTemplates = {
	...merge(modernTemplatesProd, {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										browserslistEnv: 'modern',
									},
								],
							],
						},
					},
				},
			],
		},
	}),
	// development overrides
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist/templates'),
		filename: 'bundle.js',
		chunkFilename: 'bundle.chunk.[fullhash:8].[id].js',
	},
	devtool: 'source-map',
};

import universalProd from './snap/webpack.universal.js';
const universal = {
	...merge(universalProd, {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: [/node_modules\/\@athoscommerce/, path.resolve(__dirname, 'src'), path.resolve(__dirname, '../')],
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										browserslistEnv: 'universal',
									},
								],
							],
						},
					},
				},
			],
		},
	}),
	// development overrides
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist/snap'),
		filename: 'universal.bundle.js',
		chunkFilename: 'universal.bundle.chunk.[fullhash:8].[id].js',
	},
	devtool: 'source-map',
};

import universalTemplatesProd from './templates/webpack.universal.js';
const universalTemplates = {
	...merge(universalTemplatesProd, {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: [/node_modules\/\@athoscommerce/, path.resolve(__dirname, 'src'), path.resolve(__dirname, '../')],
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										browserslistEnv: 'universal',
									},
								],
							],
						},
					},
				},
			],
		},
	}),
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist/templates'),
		filename: 'universal.bundle.js',
		chunkFilename: 'universal.bundle.chunk.[fullhash:8].[id].js',
	},
	devtool: 'source-map',
};

import universalHybridProd from './hybrid/webpack.universal.js';
const universalHybrid = {
	...merge(universalHybridProd, {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: [/node_modules\/\@athoscommerce/, path.resolve(__dirname, 'src'), path.resolve(__dirname, '../')],
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										browserslistEnv: 'universal',
									},
								],
							],
						},
					},
				},
			],
		},
	}),
	// development overrides
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist/hybrid'),
		filename: 'universal.bundle.js',
		chunkFilename: 'universal.bundle.chunk.[fullhash:8].[id].js',
	},
	devtool: 'source-map',
};

import modernHybridProd from './hybrid/webpack.modern.js';
const modernHybrid = {
	...merge(modernHybridProd, {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										browserslistEnv: 'modern',
									},
								],
							],
						},
					},
				},
			],
		},
	}),
	// development overrides
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist/hybrid'),
		filename: 'bundle.js',
		chunkFilename: 'bundle.chunk.[fullhash:8].[id].js',
	},
	devtool: 'source-map',
};

export default [devServer, modern, modernTemplates, universal, universalTemplates, modernHybrid, universalHybrid];
