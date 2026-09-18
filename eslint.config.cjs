const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');
const snapConfigPlugin = require('@athoscommerce/snap-preact/eslintplugin');

module.exports = [
	{
		ignores: [
			'**/.*',
			'**/.*/**',
			'**/docs',
			'**/dist/**',
			'**/*.test.ts',
			'**/*.test.tsx',
			'packages/snapps/**',
			'**/coverage/**',
			'**/test/**',
			'**/tests/**',
			'**/mocks/**',
			'**/__tests__/**',
			'**/__mocks__/**',
			'**/jest.config.js',
		],
	},
	...tsPlugin.configs['flat/recommended'],
	{
		languageOptions: {
			ecmaVersion: 2020,
		},
		settings: {
			preact: {
				pragma: 'h',
			},
		},
		rules: {
			'no-debugger': 'error',
			'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
			'@typescript-eslint/no-explicit-any': 'off',

			// todo turn these on
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

			'@typescript-eslint/no-empty-function': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					varsIgnorePattern: '^(h|jsx|_+)$',
					// typescript-eslint v8 changed the default to 'all'
					caughtErrors: 'none',
				},
			],
			// added to recommended in typescript-eslint v8; codebase relies on short-circuit expression statements
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
	{
		// disables ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier —
		// applied after the base rules above so it wins the cascade for any overlapping rule
		rules: prettierConfig.rules,
	},
	{
		files: ['**/index.ts', '**/index.tsx'],
		plugins: {
			'@athoscommerce/snap-config': snapConfigPlugin,
		},
		rules: {
			'@athoscommerce/snap-config/validate-config': 'error',
		},
	},
	{
		// Only these files actually author `theme.overrides` config today. Typed linting
		// (parserOptions.project) is scoped narrowly here, not onto the broad **/index.ts
		// glob above, since it requires building a real ts.Program for every matching file -
		// fine for a couple of app entry points, wasteful across the whole monorepo's ~150
		// index.ts/tsx barrel files. It powers validate-config's ADVISORY typed checks
		// (inline squiggles on bad theme-override selectors/props at the exact location);
		// correctness does not depend on it - the compiler enforces the same rules through
		// validateTemplatesConfig's conditional return type. Without typed linting those
		// squiggles silently no-op - see eslint/src/validate-config.cjs.
		files: ['packages/snap-preact-demo/*/src/index.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				project: './packages/snap-preact-demo/tsconfig.json',
				tsconfigRootDir: __dirname,
			},
		},
	},
	{
		// build-time webpack helpers consumed via require() by project webpack configs — must remain CommonJS
		files: ['packages/snap-preact/webpack/**/*.js'],
		languageOptions: {
			sourceType: 'script',
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		// .cjs files are CommonJS by definition — require() is their import mechanism
		files: ['**/*.cjs'],
		languageOptions: {
			sourceType: 'commonjs',
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
];
