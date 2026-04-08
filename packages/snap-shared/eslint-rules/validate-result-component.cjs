/**
 * ESLint rule: validate-result-component
 *
 * Validates `customComponent` string values against the appropriate
 * section in `components` based on the property path context.
 */

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Validate that customComponent values match keys in components',
		},
		messages: {
			invalidCustomComponent:
				'"{{ value }}" is not a valid customComponent for "{{ componentType }}". Must be one of: {{ validKeys }}.',
			noCustomComponents:
				'"{{ value }}" is not a valid customComponent. No keys found in components.{{ componentType }}.',
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
					typeName === 'SnapTemplatesConfig') {
					const init = node.init;
					if (!init || init.type !== 'ObjectExpression') return;

					// Extract all component keys from components.*
					const allComponentKeys = extractAllComponentKeys(init);

					// Validate customComponent nodes
					const customComponentNodes = collectCustomComponentNodes(init);
					for (const { node: ccNode, value, componentType } of customComponentNodes) {
						const validKeys = allComponentKeys[componentType] || [];
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
				}
			},
		};

		/**
		 * Extract all keys from all sections in components.*
		 * Returns an object like { result: [...], facet: [...], ... }
		 */
		function extractAllComponentKeys(objectExpression) {
			const componentsProp = findProperty(objectExpression, 'components');
			if (!componentsProp || componentsProp.value.type !== 'ObjectExpression')
				return {};

			const result = {};
			for (const prop of componentsProp.value.properties) {
				if (prop.type === 'Property' && prop.value.type === 'ObjectExpression') {
					const sectionName = getPropertyName(prop);
					result[sectionName] = prop.value.properties
						.filter((p) => p.type === 'Property')
						.map((p) => getPropertyName(p));
				}
			}
			return result;
		}

		/**
		 * Recursively collect all customComponent: 'string' nodes in the config
		 * Also tracks the parent property path to determine which component section to validate against
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
							// Determine component type from parent path
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
	},
};
