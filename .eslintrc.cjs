module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended', // uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier', // disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
	],
	ignorePatterns: ["**/docs", "**/dist", "*.test.ts", "*.test.tsx", "./packages/snapps"],
	overrides: [
		{
			files: ['**/index.ts', '**/index.tsx'],
			plugins: ['snap-config'],
			rules: {
				'snap-config/validate-config': 'error',
			},
		},
	],
	rules: {
		// add rules... or dont...
		'no-debugger': 'error',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{'ts-ignore': 'allow-with-description'},
		  ],		
		'@typescript-eslint/no-explicit-any': 'off',

		// todo turn these on
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		
		'@typescript-eslint/no-empty-function': 'error',
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"varsIgnorePattern": "^(h|jsx|_+)$",
				// typescript-eslint v8 changed the default to 'all'
				"caughtErrors": "none"
			}
		],
		// added to recommended in typescript-eslint v8; codebase relies on short-circuit expression statements
		"@typescript-eslint/no-unused-expressions": "off",
	},
	settings: {
		"preact": {
			"pragma": "h"
		}
	}
};

