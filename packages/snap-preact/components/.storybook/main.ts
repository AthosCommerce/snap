import type { StorybookConfig } from '@storybook/preact-webpack5';

const config: StorybookConfig = {
	framework: '@storybook/preact-webpack5',
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-viewport',
		'@storybook/addon-links',
		'@storybook/addon-themes',
	],
	// altering webpack config
	webpackFinal: async (config) => {
		// typescript - use esbuild-loader for much faster compilation
		config.module?.rules?.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('esbuild-loader'),
					options: {
						loader: 'tsx',
						target: 'es2020',
						jsx: 'automatic',
						jsxImportSource: '@emotion/react',
					},
				},
			],
		});

		config.resolve?.extensions?.push('.ts', '.tsx');

		// sass support
		config.module?.rules?.push({
			test: /\.(css|scss)$/,
			sideEffects: true,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		});

		// optimize webpack for faster rebuilds
		if (config.cache) {
			config.cache = {
				type: 'filesystem',
				buildDependencies: {
					config: [__filename],
				},
			};
		}

		// optimize module resolution
		if (config.resolve) {
			config.resolve.symlinks = false;
		}

		// use esbuild for minification (faster than terser)
		if (config.optimization) {
			const { EsbuildPlugin } = require('esbuild-loader');
			config.optimization.minimizer = [
				new EsbuildPlugin({
					target: 'es2020',
					minify: true,
					css: true,
				}),
			];
		}

		return config;
	},
};

export default config;
