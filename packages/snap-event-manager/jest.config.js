const rootConfig = require('../../jest.base.config.json');
module.exports = {
	...rootConfig,
	displayName: 'snap-event-manager',
	// no DOM usage in src or tests; the node env avoids jsdom setup per test file
	testEnvironment: 'node',
};
