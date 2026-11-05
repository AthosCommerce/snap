/**
 * ESLint rule: tabs
 *
 * Validates that search/autocomplete tab controllers are configured consistently.
 */

const { createConfigVisitors } = require('../utils/config-visitors.cjs');
const { findProperty } = require('../utils/ast.cjs');

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Validate that search and autocomplete tab controllers are configured consistently',
		},
		messages: {
			// tab values are rendered by `staticValue` - literals quoted, references in backticks
			duplicateTabId:
				'Tab id {{ id }} is used by more than one tab controller. Every search/autocomplete tab id must be unique, since it becomes the controller id.',
			duplicateSiteIdInFeature:
				'Tab {{ id }} uses siteId {{ siteId }}, which is already used by another tab in {{ feature }}.tabs. Tabs within the same feature must target unique siteIds.',
			duplicateParamInFeature:
				'Tab {{ id }} uses param {{ param }}, which is already used by another tab in {{ feature }}.tabs. Tabs within the same feature must use unique params, since the param identifies the tab in the URL and namespaces its URL state.',
			mismatchedTabParam:
				'Tab {{ id }} (siteId {{ siteId }}) uses param {{ param }}, but other tabs sharing siteId {{ siteId }} use param {{ expectedParam }}. Tab controllers across search and autocomplete that share a siteId must use the same param.',
			mismatchedTabSiteId:
				'Tab {{ id }} (param {{ param }}) uses siteId {{ siteId }}, but other tabs sharing param {{ param }} use siteId {{ expectedSiteId }}. Tab controllers across search and autocomplete that share a param must use the same siteId.',
		},
		schema: [],
	},
	create(context) {
		return createConfigVisitors((config) => validateTabs(config, context));
	},
};

/**
 * Validate the search/autocomplete tab controller configs:
 *
 *  - every tab id is unique across the whole config (it becomes the controller id)
 *  - within a feature, every tab has its own siteId and its own param - the param is the
 *    tab's identity in the url and namespaces its url state, so two tabs sharing one
 *    collide, and selecting the second writes a url that resolves back to the first
 *  - across search and autocomplete, tabs sharing a siteId or a param agree on the other
 *    value too - a siteId and its param identify the same catalog, so they must move
 *    together
 *
 * Values are compared statically (see `staticValue`): string literals by value, and
 * identifiers or member chains (`siteId`, `config.siteId`) by source text, since the same
 * expression reads the same value. Two DIFFERENT expressions are never assumed to differ,
 * so the mismatch checks only ever compare literals.
 */
function validateTabs(configObjectExpression, context) {
	const tabs = collectTabs(configObjectExpression, context);
	if (tabs.length === 0) return;

	// duplicate ids anywhere in the config
	for (const group of groupTabs(tabs, (tab) => tab.id?.key)) {
		if (group.length < 2) continue;
		for (const tab of group) {
			context.report({
				node: tab.id.node,
				messageId: 'duplicateTabId',
				data: { id: tab.id.display },
			});
		}
	}

	// duplicate siteIds and params within a feature
	for (const group of groupTabs(tabs, (tab) => tab.siteId && `${tab.feature} ${tab.siteId.key}`)) {
		if (group.length < 2) continue;
		for (const tab of group) {
			context.report({
				node: tab.siteId.node,
				messageId: 'duplicateSiteIdInFeature',
				data: { id: displayOf(tab.id), siteId: tab.siteId.display, feature: tab.feature },
			});
		}
	}
	for (const group of groupTabs(tabs, (tab) => tab.param && `${tab.feature} ${tab.param.key}`)) {
		if (group.length < 2) continue;
		for (const tab of group) {
			context.report({
				node: tab.param.node,
				messageId: 'duplicateParamInFeature',
				data: { id: displayOf(tab.id), param: tab.param.display, feature: tab.feature },
			});
		}
	}

	// tabs sharing a siteId across features must share a param, and vice versa. within a
	// feature the duplicate checks above already own the collision, so only groups that span
	// both features are compared here - otherwise a duplicate param would also be reported as
	// a siteId mismatch
	reportMismatches(tabs, { shared: 'siteId', compared: 'param', messageId: 'mismatchedTabParam', expectedKey: 'expectedParam' }, context);
	reportMismatches(tabs, { shared: 'param', compared: 'siteId', messageId: 'mismatchedTabSiteId', expectedKey: 'expectedSiteId' }, context);
}

function reportMismatches(tabs, { shared, compared, messageId, expectedKey }, context) {
	for (const group of groupTabs(tabs, (tab) => tab[shared] && tab[compared] && tab[shared].key)) {
		if (!group.some((tab) => tab.feature === 'search') || !group.some((tab) => tab.feature === 'autocomplete')) continue;

		// two different references may still hold the same value, so only literals are compared
		const literals = group.filter((tab) => tab[compared].literal !== undefined);
		const expected = literals[0];
		for (const tab of literals) {
			if (tab[compared].key === expected[compared].key) continue;
			context.report({
				node: tab[compared].node,
				messageId,
				data: {
					id: displayOf(tab.id),
					siteId: tab.siteId.display,
					param: tab.param.display,
					[expectedKey]: expected[compared].display,
				},
			});
		}
	}
}

/**
 * Group tabs by a key; tabs whose key is falsy (missing or unreadable value) are left out.
 */
function groupTabs(tabs, keyOf) {
	const groups = new Map();
	for (const tab of tabs) {
		const key = keyOf(tab);
		if (!key) continue;
		if (!groups.has(key)) groups.set(key, []);
		groups.get(key).push(tab);
	}
	return groups.values();
}

/**
 * Collect { feature, id, siteId, param } for every tab in config.search.tabs and
 * config.autocomplete.tabs, each value described by `staticValue` (or undefined).
 */
function collectTabs(configObjectExpression, context) {
	const tabs = [];

	for (const feature of ['search', 'autocomplete']) {
		const featureProp = findProperty(configObjectExpression, feature);
		if (!featureProp || featureProp.value.type !== 'ObjectExpression') continue;

		const tabsProp = findProperty(featureProp.value, 'tabs');
		if (!tabsProp || tabsProp.value.type !== 'ArrayExpression') continue;

		for (const element of tabsProp.value.elements) {
			if (!element || element.type !== 'ObjectExpression') continue;

			tabs.push({
				feature,
				id: staticValue(findProperty(element, 'id'), context),
				siteId: staticValue(findProperty(element, 'siteId'), context),
				param: staticValue(findProperty(element, 'param'), context),
			});
		}
	}

	return tabs;
}

/**
 * Describe a tab property's value for comparison:
 *  - `key` is equal for two values that are certainly equal at runtime
 *  - `literal` is the string value when it is known statically, else undefined
 *  - `display` is how the value reads in a message: literals quoted, references in backticks
 *
 * Returns undefined when the property is missing or its value cannot be reasoned about
 * statically (a call, a conditional, a spread...), which excludes it from every check.
 */
function staticValue(property, context) {
	if (!property) return undefined;

	let node = property.value;
	// `siteId as string`, `siteId!`, `siteId satisfies string` all read the inner expression
	while (node.type === 'TSAsExpression' || node.type === 'TSNonNullExpression' || node.type === 'TSSatisfiesExpression') {
		node = node.expression;
	}

	if (node.type === 'Literal' && typeof node.value === 'string') {
		return { node: property.value, key: JSON.stringify(node.value), literal: node.value, display: JSON.stringify(node.value) };
	}
	if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
		const value = node.quasis[0].value.cooked;
		return { node: property.value, key: JSON.stringify(value), literal: value, display: JSON.stringify(value) };
	}
	if (isStableReference(node)) {
		const sourceCode = context.sourceCode ?? context.getSourceCode();
		const text = sourceCode.getText(node);
		return { node: property.value, key: `ref ${text}`, literal: undefined, display: `\`${text}\`` };
	}

	return undefined;
}

/**
 * An identifier or a member chain over identifiers (`siteId`, `config.siteId`,
 * `sites['blog']`) - the same text reads the same value, unlike a call or a conditional.
 */
function isStableReference(node) {
	if (node.type === 'Identifier' || node.type === 'ThisExpression') return true;
	if (node.type === 'MemberExpression') {
		const propertyIsStable = node.computed ? node.property.type === 'Literal' : node.property.type === 'Identifier';
		return propertyIsStable && isStableReference(node.object);
	}
	return false;
}

function displayOf(value) {
	return value ? value.display : '<unknown>';
}
