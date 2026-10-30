/**
 * ESLint rule: validate-config (deprecated)
 *
 * The original all-in-one rule, since split into component-references, tabs and
 * override-selectors. Kept so projects whose eslint.config.js still enables it by name keep
 * working after a snap-preact upgrade: it runs exactly the checks it always ran, reporting under
 * this rule's name. Checks added since (layout-banners, hidden-layout-banners) are deliberately
 * left out, so an upgrade alone never adds errors - projects get them from `configs.recommended`.
 * Enabling both would report everything twice.
 */

const componentReferences = require('./component-references.cjs');
const tabs = require('./tabs.cjs');
const overrideSelectors = require('./override-selectors.cjs');

const REPLACED_BY = { 'component-references': componentReferences, tabs, 'override-selectors': overrideSelectors };

module.exports = {
	meta: {
		type: 'problem',
		deprecated: true,
		replacedBy: Object.keys(REPLACED_BY),
		docs: {
			description: 'Deprecated: runs component-references, tabs and override-selectors together',
		},
		// the rules report through this rule's context, so every messageId they use must exist here
		messages: Object.assign({}, ...Object.values(REPLACED_BY).map((rule) => rule.meta.messages)),
		schema: [],
	},
	create(context) {
		// each rule visits the same node types - chain their handlers so all of them run
		const visitors = {};
		for (const rule of Object.values(REPLACED_BY)) {
			for (const [nodeType, handler] of Object.entries(rule.create(context))) {
				const previous = visitors[nodeType];
				visitors[nodeType] = previous
					? (node) => {
							previous(node);
							handler(node);
					  }
					: handler;
			}
		}
		return visitors;
	},
};
