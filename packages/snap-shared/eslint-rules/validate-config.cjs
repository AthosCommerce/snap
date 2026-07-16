/**
 * ESLint rule: validate-config
 *
 * Validates component reference props against the appropriate
 * section in `components` based on the property path context.
 */

const PROVIDED_COMPONENT_KEYS = {
	result: ['Result', 'OverlayResult'],
};

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Validate that customComponent and resultComponent values match keys in components',
		},
		messages: {
			invalidCustomComponent:
				'"{{ value }}" is not a valid customComponent for "{{ componentType }}". Must be one of: {{ validKeys }}.',
			noCustomComponents:
				'"{{ value }}" is not a valid customComponent. No keys found in components.{{ componentType }}.',
			invalidResultComponent:
				'"{{ value }}" is not a valid resultComponent. Must be one of: {{ validKeys }}.',
			noResultComponents:
				'"{{ value }}" is not a valid resultComponent. No keys found in components.result.',
			commaSeparatedComponentMismatch:
				'Comma-separated selector "{{ key }}" has mismatched component types: {{ types }}. All selectors must target the same component type.',
		},
		schema: [],
	},
	create(context) {
		return {
			// Find variable declarations typed as SnapTemplatesConfig
			VariableDeclarator(node) {
				const typeAnnotation = node.id?.typeAnnotation?.typeAnnotation;
				if (!typeAnnotation) return;

				const typeName =
					typeAnnotation.typeName?.name ||
					typeAnnotation.typeName?.right?.name;

				if (
					typeName === 'SnapTemplatesConfig' ||
					typeName === 'SnapTemplatesConfigUnlocked' ||
					typeName === 'SnapTemplatesConfigLocked') {
					const init = node.init;
					if (!init || init.type !== 'ObjectExpression') return;

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
					const validResultKeys = Array.from(
						new Set([...(PROVIDED_COMPONENT_KEYS.result || []), ...(registeredComponentKeys.result || [])])
					);
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

					// Validate comma-separated component override selectors
					const commaSeparatedNodes = collectCommaSeparatedSelectorNodes(init);
					for (const { node: selectorNode, key } of commaSeparatedNodes) {
						const parts = key.split(',').map((p) => p.trim());
						const componentTypes = parts.map(extractComponentTypeFromSelector);
						const uniqueTypes = [...new Set(componentTypes)];
						if (uniqueTypes.length > 1) {
							context.report({
								node: selectorNode,
								messageId: 'commaSeparatedComponentMismatch',
								data: {
									key,
									types: uniqueTypes.join(', '),
								},
							});
						}
					}
				}
			},
		};

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
						new Set([
							...(result[sectionName] || []),
							...prop.value.properties
						.filter((p) => p.type === 'Property')
						.map((p) => getPropertyName(p)),
						])
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
						if (
							name === 'customComponent' &&
							prop.value.type === 'Literal' &&
							typeof prop.value.value === 'string'
						) {
							const componentType = extractComponentTypeFromPath(parentPath);
							results.push({
								node: prop.value,
								value: prop.value.value,
								componentType,
							});
						} else {
							results.push(
								...collectCustomComponentNodes(prop.value, [...parentPath, name])
							);
						}
					} else if (prop.type === 'SpreadElement') {
						results.push(
							...collectCustomComponentNodes(prop.argument, parentPath)
						);
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
						if (
							name === 'resultComponent' &&
							prop.value.type === 'Literal' &&
							typeof prop.value.value === 'string'
						) {
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

		/**
		 * Find a property by name in an ObjectExpression
		 */
		function findProperty(objectExpression, name) {
			return objectExpression.properties.find(
				(p) => p.type === 'Property' && getPropertyName(p) === name
			);
		}

		/**
		 * Get the name of a property key (handles Identifier and Literal keys)
		 */
		function getPropertyName(property) {
			if (property.key.type === 'Identifier') return property.key.name;
			if (property.key.type === 'Literal') return String(property.key.value);
			return null;
		}

		/**
		 * Extract the component type from a single selector string.
		 * The component type is the last space-separated segment, with any dot-name suffix stripped.
		 * e.g., 'recommendation.crosssell icon.prev' -> 'icon'
		 * e.g., 'search results' -> 'results'
		 * e.g., 'icon' -> 'icon'
		 */
		function extractComponentTypeFromSelector(selector) {
			const trimmed = selector.trim();
			const parts = trimmed.split(' ');
			const lastPart = parts[parts.length - 1];
			// Strip dot-name suffix: 'icon.prev' -> 'icon'
			return lastPart.split('.')[0];
		}

		/**
		 * Recursively collect all property nodes whose key is a string containing ', '
		 * within theme.overrides (component override sections).
		 */
		function collectCommaSeparatedSelectorNodes(node, parentPath = []) {
			const results = [];

			if (node.type === 'ObjectExpression') {
				for (const prop of node.properties) {
					if (prop.type === 'Property') {
						const name = getPropertyName(prop);
						// Check if this key contains a comma-separated selector
						if (
							typeof name === 'string' &&
							name.includes(', ') &&
							isInOverridesContext(parentPath)
						) {
							results.push({
								node: prop.key,
								key: name,
							});
						}
						// Recurse into child objects
						if (prop.value.type === 'ObjectExpression') {
							results.push(
								...collectCommaSeparatedSelectorNodes(prop.value, [...parentPath, name])
							);
						}
					} else if (prop.type === 'SpreadElement') {
						results.push(
							...collectCommaSeparatedSelectorNodes(prop.argument, parentPath)
						);
					}
				}
			}

			return results;
		}

		/**
		 * Check if the property path indicates we are inside a theme overrides context
		 * where component selector keys are expected.
		 * Valid contexts: theme.overrides.default, theme.overrides.responsive.mobile, etc.
		 */
		function isInOverridesContext(path) {
			for (let i = 0; i < path.length; i++) {
				if (path[i] === 'overrides' || path[i] === 'components') {
					return true;
				}
			}
			return false;
		}
	},
};
