/**
 * ESLint plugin for Snap Templates configs, exported as '@athoscommerce/snap-preact/eslintplugin'.
 *
 * Projects spread `configs.recommended.rules` into their flat config rather than listing rules,
 * so adding a rule or changing a severity here ships with snap-preact alone - no project config
 * change, and no window where a project enables a rule its installed snap-preact doesn't have.
 */

const { version } = require('../../package.json');

const plugin = {
	meta: { name: '@athoscommerce/snap-preact/eslintplugin', version },
	rules: {
		'component-references': require('./rules/component-references.cjs'),
		tabs: require('./rules/tabs.cjs'),
		'override-selectors': require('./rules/override-selectors.cjs'),
		'layout-banners': require('./rules/layout-banners.cjs'),
		'hidden-layout-banners': require('./rules/hidden-layout-banners.cjs'),
		// deprecated - runs the checks it always had (component-references, tabs, override-selectors) for configs that still enable it by name
		'validate-config': require('./rules/validate-config.cjs'),
	},
};

plugin.configs = {
	recommended: {
		plugins: { 'snap-config': plugin },
		rules: {
			'snap-config/component-references': 'error',
			'snap-config/tabs': 'error',
			'snap-config/override-selectors': 'error',
			'snap-config/layout-banners': 'error',
			// hiding a toolbar or the sidebar is often deliberate - flag the lost banners without blocking commits
			'snap-config/hidden-layout-banners': 'warn',
		},
	},
};

module.exports = plugin;
