const rootConfig = require('../../jest.base.config.json');
module.exports = {
	...rootConfig,
	displayName: 'snap-preact',
	roots: ['<rootDir>/src', '<rootDir>/components/src'],
	moduleNameMapper: {
		// spread first so the workspace source mappings in the base config survive
		...rootConfig.moduleNameMapper,
		'^react$': 'preact/compat',
		'^react-dom/test-utils$': 'preact/test-utils',
		'^react-dom$': 'preact/compat',
		'^react/jsx-runtime$': 'preact/jsx-runtime',
		'\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'^@testing-library/preact$': '<rootDir>/../../node_modules/@testing-library/preact/dist/cjs/index.js',
		'^preact$': '<rootDir>/../../node_modules/preact/dist/preact.js',
		'^preact/compat$': '<rootDir>/../../node_modules/preact/compat/dist/compat.js',
		'^preact/hooks$': '<rootDir>/../../node_modules/preact/hooks/dist/hooks.js',
		'^preact/test-utils$': '<rootDir>/../../node_modules/preact/test-utils/dist/testUtils.js',
		'^preact/jsx-runtime$': '<rootDir>/../../node_modules/preact/jsx-runtime/dist/jsxRuntime.js',
	},
	setupFilesAfterEnv: ['<rootDir>/components/src/setupTests.ts'],
	// No testTimeout here on purpose: it is a global-only Jest option, silently
	// ignored in project config (jest warns "Unknown option"). Suites needing more
	// than the 5s default call jest.setTimeout(10000) in-file.
};
