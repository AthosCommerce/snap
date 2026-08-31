/**
 * ESLint rule: validate-config
 *
 * Validates component reference props against the appropriate
 * section in `components` based on the property path context, and
 * validates search/autocomplete tab controller configs.
 */

const PROVIDED_COMPONENT_KEYS = {
	result: ['Result', 'OverlayResult'],
};

const VALIDATE_CONFIG_FUNCTION_NAMES = ['validateTemplatesConfig', 'validateTemplatesConfigUnlocked'];
const TEMPLATES_CONSTRUCTOR_NAMES = ['SnapTemplates', 'SnapHybrid'];

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Validate that customComponent and resultComponent values match keys in components, and that tab controllers are configured consistently',
		},
		messages: {
			invalidCustomComponent: '"{{ value }}" is not a valid customComponent for "{{ componentType }}". Must be one of: {{ validKeys }}.',
			noCustomComponents: '"{{ value }}" is not a valid customComponent. No keys found in components.{{ componentType }}.',
			invalidResultComponent: '"{{ value }}" is not a valid resultComponent. Must be one of: {{ validKeys }}.',
			noResultComponents: '"{{ value }}" is not a valid resultComponent. No keys found in components.result.',
			invalidGlobalResultComponent: '"{{ value }}" is not a valid globalResultComponent. Must be one of: {{ validKeys }}.',
			noGlobalResultComponents: '"{{ value }}" is not a valid globalResultComponent. No keys found in components.result.',
			duplicateTabId:
				'Tab id "{{ id }}" is used by more than one tab controller. Every search/autocomplete tab id must be unique, since it becomes the controller id.',
			mismatchedTabParam:
				'Tab "{{ id }}" (siteId "{{ siteId }}") uses param "{{ param }}", but other tabs sharing siteId "{{ siteId }}" use param "{{ expectedParam }}". Tab controllers across search and autocomplete that share a siteId must use the same param.',
			duplicateSiteIdInFeature:
				'Tab "{{ id }}" uses siteId "{{ siteId }}", which is already used by another tab in {{ feature }}.tabs. Tabs within the same feature must target unique siteIds.',
			mismatchedTabSiteId:
				'Tab "{{ id }}" (param "{{ param }}") uses siteId "{{ siteId }}", but other tabs sharing param "{{ param }}" use siteId "{{ expectedSiteId }}". Tab controllers that share a param must use the same siteId.',
		},
		schema: [],
	},
	create(context) {
		return {
			// Find variable declarations typed as SnapTemplatesConfig
			VariableDeclarator(node) {
				const typeAnnotation = node.id?.typeAnnotation?.typeAnnotation;
				if (!typeAnnotation) return;

				const typeName = typeAnnotation.typeName?.name || typeAnnotation.typeName?.right?.name;

				if (typeName === 'SnapTemplatesConfig' || typeName === 'SnapTemplatesConfigUnlocked' || typeName === 'SnapTemplatesConfigLocked') {
					const init = node.init;
					if (!init || init.type !== 'ObjectExpression') return;

					validateConfigObject(init, context);
				}
			},

			// Find calls to validateTemplatesConfig/validateTemplatesConfigUnlocked
			CallExpression(node) {
				const calleeName = node.callee?.name;
				if (!VALIDATE_CONFIG_FUNCTION_NAMES.includes(calleeName)) return;

				const [configArg] = node.arguments;
				if (!configArg || configArg.type !== 'ObjectExpression') return;

				validateConfigObject(configArg, context);
			},

			// Find inline configs passed directly to new SnapTemplates({...}) / new SnapHybrid({...})
			NewExpression(node) {
				const calleeName = node.callee?.name;
				if (!TEMPLATES_CONSTRUCTOR_NAMES.includes(calleeName)) return;

				let [configArg] = node.arguments;
				// Unwrap a single-argument wrapper call (e.g. an aliased validateTemplatesConfig import)
				// around the inline config. Calls named validateTemplatesConfig* are skipped here since
				// the CallExpression path already reports on them.
				if (
					configArg &&
					configArg.type === 'CallExpression' &&
					configArg.arguments.length === 1 &&
					!VALIDATE_CONFIG_FUNCTION_NAMES.includes(configArg.callee?.name)
				) {
					[configArg] = configArg.arguments;
				}
				if (!configArg || configArg.type !== 'ObjectExpression') return;

				validateConfigObject(configArg, context);
			},
		};

		/**
		 * Run all config validations (customComponent, resultComponent,
		 * globalResultComponent, and tab controllers) against a config
		 * ObjectExpression, reporting any violations via context.report.
		 */
		function validateConfigObject(init, context) {
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

			// Validate search/autocomplete tab controller configs
			validateTabs(init, context);
		}

		/**
		 * Validate that every search/autocomplete tab id is unique (it becomes the
		 * controller id), that siteIds are unique within a feature's tabs, and that
		 * tabs sharing a siteId or a param (across search and autocomplete, or
		 * within a feature) agree on the other value too — a siteId and its param
		 * identify the same catalog, so they must move together.
		 */
		function validateTabs(configObjectExpression, context) {
			const tabs = collectTabs(configObjectExpression);
			if (tabs.length === 0) return;

			const tabsById = new Map();
			for (const tab of tabs) {
				if (tab.id === undefined) continue;
				if (!tabsById.has(tab.id)) tabsById.set(tab.id, []);
				tabsById.get(tab.id).push(tab);
			}
			for (const [id, group] of tabsById) {
				if (group.length > 1) {
					for (const tab of group) {
						context.report({
							node: tab.idNode,
							messageId: 'duplicateTabId',
							data: { id },
						});
					}
				}
			}

			const tabsByFeatureAndSiteId = new Map();
			for (const tab of tabs) {
				if (tab.siteId === undefined) continue;
				const key = `${tab.feature} ${tab.siteId}`;
				if (!tabsByFeatureAndSiteId.has(key)) tabsByFeatureAndSiteId.set(key, []);
				tabsByFeatureAndSiteId.get(key).push(tab);
			}
			for (const group of tabsByFeatureAndSiteId.values()) {
				if (group.length > 1) {
					for (const tab of group) {
						context.report({
							node: tab.siteIdNode,
							messageId: 'duplicateSiteIdInFeature',
							data: { id: tab.id, siteId: tab.siteId, feature: tab.feature },
						});
					}
				}
			}

			const tabsBySiteId = new Map();
			for (const tab of tabs) {
				if (tab.siteId === undefined || tab.param === undefined) continue;
				if (!tabsBySiteId.has(tab.siteId)) tabsBySiteId.set(tab.siteId, []);
				tabsBySiteId.get(tab.siteId).push(tab);
			}
			for (const [siteId, group] of tabsBySiteId) {
				// only enforce when the siteId is shared across both search and autocomplete tabs
				if (!group.some((tab) => tab.feature === 'search') || !group.some((tab) => tab.feature === 'autocomplete')) {
					continue;
				}

				const expectedParam = group[0].param;
				for (const tab of group) {
					if (tab.param !== expectedParam) {
						context.report({
							node: tab.paramNode,
							messageId: 'mismatchedTabParam',
							data: { id: tab.id, siteId, param: tab.param, expectedParam },
						});
					}
				}
			}

			const tabsByParam = new Map();
			for (const tab of tabs) {
				if (tab.param === undefined || tab.siteId === undefined) continue;
				if (!tabsByParam.has(tab.param)) tabsByParam.set(tab.param, []);
				tabsByParam.get(tab.param).push(tab);
			}
			for (const [param, group] of tabsByParam) {
				const expectedSiteId = group[0].siteId;
				for (const tab of group) {
					if (tab.siteId !== expectedSiteId) {
						context.report({
							node: tab.siteIdNode,
							messageId: 'mismatchedTabSiteId',
							data: { id: tab.id, param, siteId: tab.siteId, expectedSiteId },
						});
					}
				}
			}
		}

		/**
		 * Collect { feature, id, idNode, siteId, siteIdNode, param, paramNode } for
		 * every tab in config.search.tabs and config.autocomplete.tabs.
		 */
		function collectTabs(configObjectExpression) {
			const tabs = [];

			for (const feature of ['search', 'autocomplete']) {
				const featureProp = findProperty(configObjectExpression, feature);
				if (!featureProp || featureProp.value.type !== 'ObjectExpression') continue;

				const tabsProp = findProperty(featureProp.value, 'tabs');
				if (!tabsProp || tabsProp.value.type !== 'ArrayExpression') continue;

				for (const element of tabsProp.value.elements) {
					if (!element || element.type !== 'ObjectExpression') continue;

					const idProp = findProperty(element, 'id');
					const siteIdProp = findProperty(element, 'siteId');
					const paramProp = findProperty(element, 'param');

					tabs.push({
						feature,
						id: literalStringValue(idProp),
						idNode: idProp?.value,
						siteId: literalStringValue(siteIdProp),
						siteIdNode: siteIdProp?.value,
						param: literalStringValue(paramProp),
						paramNode: paramProp?.value,
					});
				}
			}

			return tabs;
		}

		/**
		 * Get the string value of a property whose value is a string literal,
		 * or undefined if the property is missing or not a string literal
		 * (e.g. a computed/spread value we can't statically check).
		 */
		function literalStringValue(property) {
			if (!property || property.value.type !== 'Literal' || typeof property.value.value !== 'string') {
				return undefined;
			}
			return property.value.value;
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
			if (
				!globalResultComponentProp ||
				globalResultComponentProp.value.type !== 'Literal' ||
				typeof globalResultComponentProp.value.value !== 'string'
			) {
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

		/**
		 * Find a property by name in an ObjectExpression
		 */
		function findProperty(objectExpression, name) {
			return objectExpression.properties.find((p) => p.type === 'Property' && getPropertyName(p) === name);
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
