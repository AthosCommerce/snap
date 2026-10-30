/**
 * ESLint rule: component-references
 *
 * Validates that customComponent, resultComponent and theme.globalResultComponent values name a
 * component registered in the matching `components` section (or a built-in result component).
 */

const { createConfigVisitors } = require('../utils/config-visitors.cjs');
const { findProperty, getPropertyName } = require('../utils/ast.cjs');

const PROVIDED_COMPONENT_KEYS = {
	result: ['Result', 'OverlayResult'],
};

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Validate that customComponent, resultComponent and globalResultComponent values match keys in components',
		},
		messages: {
			invalidCustomComponent: '"{{ value }}" is not a valid customComponent for "{{ componentType }}". Must be one of: {{ validKeys }}.',
			noCustomComponents: '"{{ value }}" is not a valid customComponent. No keys found in components.{{ componentType }}.',
			invalidResultComponent: '"{{ value }}" is not a valid resultComponent. Must be one of: {{ validKeys }}.',
			noResultComponents: '"{{ value }}" is not a valid resultComponent. No keys found in components.result.',
			invalidGlobalResultComponent: '"{{ value }}" is not a valid globalResultComponent. Must be one of: {{ validKeys }}.',
			noGlobalResultComponents: '"{{ value }}" is not a valid globalResultComponent. No keys found in components.result.',
		},
		schema: [],
	},
	create(context) {
		return createConfigVisitors((config) => validateComponentReferences(config, context));
	},
};

/**
 * Validate customComponent, resultComponent and globalResultComponent values against a config
 * ObjectExpression, reporting any violations via context.report.
 */
function validateComponentReferences(init, context) {
	// Extract explicitly registered component keys from components.*
	const registeredComponentKeys = extractRegisteredComponentKeys(init);

	// Validate customComponent nodes using the original path-based lookup
	const customComponentNodes = collectCustomComponentNodes(init);
	for (const { node: ccNode, value, componentType } of customComponentNodes) {
		const validKeys = registeredComponentKeys[componentType] || [];
		if (validKeys.length === 0) {
			context.report({
				node: ccNode,
				messageId: 'noCustomComponents',
				data: { value, componentType },
			});
		} else if (!validKeys.includes(value)) {
			context.report({
				node: ccNode,
				messageId: 'invalidCustomComponent',
				data: {
					value,
					componentType,
					validKeys: validKeys.join(', '),
				},
			});
		}
	}

	// Validate resultComponent nodes against components.result
	const resultComponentNodes = collectResultComponentNodes(init);
	const validResultKeys = Array.from(new Set([...(PROVIDED_COMPONENT_KEYS.result || []), ...(registeredComponentKeys.result || [])]));
	for (const { node: resultNode, value } of resultComponentNodes) {
		if (validResultKeys.length === 0) {
			context.report({
				node: resultNode,
				messageId: 'noResultComponents',
				data: { value },
			});
		} else if (!validResultKeys.includes(value)) {
			context.report({
				node: resultNode,
				messageId: 'invalidResultComponent',
				data: {
					value,
					validKeys: validResultKeys.join(', '),
				},
			});
		}
	}

	// Validate theme.globalResultComponent against components.result, same as resultComponent
	const globalResultComponentNode = collectGlobalResultComponentNode(init);
	if (globalResultComponentNode) {
		const { node: globalResultNode, value } = globalResultComponentNode;
		if (validResultKeys.length === 0) {
			context.report({
				node: globalResultNode,
				messageId: 'noGlobalResultComponents',
				data: { value },
			});
		} else if (!validResultKeys.includes(value)) {
			context.report({
				node: globalResultNode,
				messageId: 'invalidGlobalResultComponent',
				data: {
					value,
					validKeys: validResultKeys.join(', '),
				},
			});
		}
	}
}

/**
 * Extract all explicitly registered keys from all sections in components.*
 * Returns an object like { result: [...], facet: [...], ... }
 */
function extractRegisteredComponentKeys(objectExpression) {
	const componentsProp = findProperty(objectExpression, 'components');
	if (!componentsProp || componentsProp.value.type !== 'ObjectExpression') {
		return {};
	}

	const result = {};
	for (const prop of componentsProp.value.properties) {
		if (prop.type === 'Property' && prop.value.type === 'ObjectExpression') {
			const sectionName = getPropertyName(prop);
			result[sectionName] = Array.from(
				new Set([...(result[sectionName] || []), ...prop.value.properties.filter((p) => p.type === 'Property').map((p) => getPropertyName(p))])
			);
		}
	}
	return result;
}

/**
 * Recursively collect all customComponent: 'string' nodes in the config.
 * Also tracks the parent property path to determine which component section to validate against.
 */
function collectCustomComponentNodes(node, parentPath = []) {
	const results = [];

	if (node.type === 'ObjectExpression') {
		for (const prop of node.properties) {
			if (prop.type === 'Property') {
				const name = getPropertyName(prop);
				if (name === 'customComponent' && prop.value.type === 'Literal' && typeof prop.value.value === 'string') {
					const componentType = extractComponentTypeFromPath(parentPath);
					results.push({
						node: prop.value,
						value: prop.value.value,
						componentType,
					});
				} else {
					results.push(...collectCustomComponentNodes(prop.value, [...parentPath, name]));
				}
			} else if (prop.type === 'SpreadElement') {
				results.push(...collectCustomComponentNodes(prop.argument, parentPath));
			}
		}
	} else if (node.type === 'ArrayExpression') {
		for (const elem of node.elements) {
			if (elem) {
				results.push(...collectCustomComponentNodes(elem, parentPath));
			}
		}
	}

	return results;
}

/**
 * Recursively collect all resultComponent: 'string' nodes in the config.
 * These always validate against components.result.
 */
function collectResultComponentNodes(node) {
	const results = [];

	if (node.type === 'ObjectExpression') {
		for (const prop of node.properties) {
			if (prop.type === 'Property') {
				const name = getPropertyName(prop);
				if (name === 'resultComponent' && prop.value.type === 'Literal' && typeof prop.value.value === 'string') {
					results.push({
						node: prop.value,
						value: prop.value.value,
					});
				} else {
					results.push(...collectResultComponentNodes(prop.value));
				}
			} else if (prop.type === 'SpreadElement') {
				results.push(...collectResultComponentNodes(prop.argument));
			}
		}
	} else if (node.type === 'ArrayExpression') {
		for (const elem of node.elements) {
			if (elem) {
				results.push(...collectResultComponentNodes(elem));
			}
		}
	}

	return results;
}

/**
 * Find the theme.globalResultComponent string literal node, if present.
 * It renders the same way resultComponent does (default result override),
 * so it validates against the same components.result keys.
 */
function collectGlobalResultComponentNode(configObjectExpression) {
	const themeProp = findProperty(configObjectExpression, 'theme');
	if (!themeProp || themeProp.value.type !== 'ObjectExpression') return null;

	const globalResultComponentProp = findProperty(themeProp.value, 'globalResultComponent');
	if (!globalResultComponentProp || globalResultComponentProp.value.type !== 'Literal' || typeof globalResultComponentProp.value.value !== 'string') {
		return null;
	}

	return {
		node: globalResultComponentProp.value,
		value: globalResultComponentProp.value.value,
	};
}

/**
 * Extract the component type from a property path
 * e.g., ['overrides', 'default', 'facet.size'] -> 'facet'
 * e.g., ['overrides', 'default', 'result'] -> 'result'
 * e.g., ['theme', 'overrides', 'mobile', 'sidebar'] -> 'sidebar'
 * e.g., ['overrides', 'search result'] -> 'result'
 * e.g., ['overrides', 'recommendationBundle result'] -> 'result'
 */
function extractComponentTypeFromPath(path) {
	// Look at the last meaningful segment of the path
	for (let i = path.length - 1; i >= 0; i--) {
		let segment = path[i];
		// Skip common structural keys
		if (['overrides', 'default', 'desktop', 'tablet', 'mobile', 'theme', 'components'].includes(segment)) {
			continue;
		}
		// Handle space-delimited keys like 'search result' -> 'result'
		if (segment.includes(' ')) {
			segment = segment.split(' ').pop();
		}
		// Handle dot-notation like 'facet.size' -> 'facet'
		if (segment.includes('.')) {
			return segment.split('.')[0];
		}
		return segment;
	}
	return 'unknown';
}
