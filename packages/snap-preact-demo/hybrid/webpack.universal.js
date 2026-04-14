import { merge } from 'webpack-merge';
import common from '../webpack.common.js';
import path from 'path';
import childProcess from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const branchName = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

export default merge(common, {
	mode: 'production',
	entry: './hybrid/src/universal.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'universal.bundle.js',
		chunkFilename: 'universal.bundle.chunk.[fullhash:8].[id].js',
		chunkLoadingGlobal: `${branchName}BundleChunks`,
	},
	target: 'browserslist:universal',
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
});
