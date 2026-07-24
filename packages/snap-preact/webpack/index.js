const { parse } = require('acorn');

// Down-levels every module in a "universal" webpack bundle to the browserslist
// `universal` target. Exclude-based rather than a curated include list so it
// cannot be silently bypassed by workspace-symlink realpaths or a newly added
// ESM dependency (both of which broke the previous include-list approach).
// Runs as an enforce: 'post' pass so it also down-levels the output of ts-loader
// / project babel rules that ran earlier in the pipeline.
const universalTranspilationRule = (options = {}) => ({
	test: /\.[cm]?[jt]sx?$/,
	enforce: 'post',
	exclude: [
		// core-js and the babel runtime helpers are already ES5 — reprocessing them is wasted work.
		/[\\/]node_modules[\\/]core-js[\\/]/,
		/[\\/]node_modules[\\/]@babel[\\/]runtime(?:-corejs\d+)?[\\/]/,
		...(options.exclude || []),
	],
	use: {
		loader: 'babel-loader',
		options: {
			// Isolated config: ignore the project babel.config.js/.babelrc so vendor code
			// is only syntax-lowered, not given the project's JSX pragma / polyfill injection.
			babelrc: false,
			configFile: false,
			// Required for the mix of ESM, CJS and UMD vendor modules this rule covers.
			sourceType: 'unambiguous',
			compact: false,
			cacheDirectory: true,
			presets: [['@babel/preset-env', { browserslistEnv: options.browserslistEnv || 'universal' }]],
		},
	},
});

const findArrowFunction = (tree) => {
	const nodes = [tree];
	while (nodes.length > 0) {
		const node = nodes.pop();
		if (node.type === 'ArrowFunctionExpression') return node;
		for (const value of Object.values(node)) {
			if (Array.isArray(value)) {
				nodes.push(...value.filter((item) => item && typeof item.type === 'string'));
			} else if (value && typeof value.type === 'string') {
				nodes.push(value);
			}
		}
	}
	return null;
};

// Fails the webpack build (and therefore the deploy) if any emitted JS asset
// contains syntax newer than the configured target. Runs after minification so
// it inspects exactly what ships. ecmaVersion is configurable so the eventual
// IE11 drop is a one-line change (ecmaVersion: 2015) rather than a rewrite.
class UniversalSyntaxCheckPlugin {
	constructor(options = {}) {
		this.ecmaVersion = options.ecmaVersion || 5;
		this.pluginName = 'UniversalSyntaxCheckPlugin';
	}

	apply(compiler) {
		const { webpack } = compiler;
		compiler.hooks.compilation.tap(this.pluginName, (compilation) => {
			compilation.hooks.processAssets.tap({ name: this.pluginName, stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT }, (assets) => {
				let inspected = 0;
				for (const filename of Object.keys(assets)) {
					if (!/\.[cm]?js$/.test(filename)) continue;
					inspected++;
					const source = compilation.getAsset(filename).source.source().toString();
					const failure = this.inspect(source, filename);
					if (failure) {
						compilation.errors.push(new webpack.WebpackError(`${this.pluginName}: ${failure}`));
					}
				}
				// Guard against the check silently passing when it inspected nothing —
				// a misconfigured output path or renamed entry must fail loudly, not go green vacuously.
				if (inspected === 0) {
					compilation.errors.push(
						new webpack.WebpackError(
							`${this.pluginName}: no JavaScript assets were emitted to verify — the syntax gate ran against nothing (check the webpack output configuration)`
						)
					);
				}
			});
		});
	}

	inspect(source, filename) {
		// Arrow functions are the most common ES5 leak; pinpoint the location when targeting ES5.
		if (this.ecmaVersion <= 5) {
			try {
				const tree = parse(source, { ecmaVersion: 'latest', locations: true, sourceType: 'script', allowHashBang: true });
				const arrow = findArrowFunction(tree);
				if (arrow) {
					const { line, column } = arrow.loc.start;
					return `${filename}: arrow function at ${line}:${column} — bundle is not ES5`;
				}
			} catch (error) {
				// Ignore: the strict parse below yields the actionable syntax error.
			}
		}
		try {
			parse(source, { ecmaVersion: this.ecmaVersion, sourceType: 'script', allowHashBang: true });
		} catch (error) {
			return `${filename}: ${error.message}`;
		}
		return null;
	}
}

module.exports = { universalTranspilationRule, UniversalSyntaxCheckPlugin };
