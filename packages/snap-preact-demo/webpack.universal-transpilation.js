export const universalTranspilationRule = {
	test: /\.[cm]?[jt]sx?$/,
	include: [
		/[\\/]packages[\\/]/,
		/[\\/]node_modules[\\/]@athoscommerce[\\/]beacon[\\/]/,
		/[\\/]node_modules[\\/]dequal[\\/]/,
		/[\\/]node_modules[\\/]swiper[\\/]/,
		/[\\/]node_modules[\\/]uuid[\\/]/,
	],
	enforce: 'post',
	use: {
		loader: 'babel-loader',
		options: {
			babelrc: false,
			configFile: false,
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
};
