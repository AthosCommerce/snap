const rootConfig = require('../../jest.base.config.json');
module.exports = {
	...rootConfig,
	displayName: 'snap-logger',
	// keeps jsdom: Logger has no direct DOM usage, but it pulls in snap-toolbox,
	// which touches `window` (verified — the node env fails 3 profile tests)
};
