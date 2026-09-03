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
const OPEN_NAMED_COMPONENT_PROPS_TYPE = {
	facet: 'FacetTemplatesLegalProps',
	variantSelection: 'VariantSelectionTemplatesLegalProps',
	recommendation: 'RecommendationTemplatesLegalProps',
	recommendationBundle: 'RecommendationBundleTemplatesLegalProps',
	recommendationBundleEasyAdd: 'RecommendationBundleEasyAddTemplatesLegalProps',
	recommendationBundleList: 'RecommendationBundleListTemplatesLegalProps',
	recommendationBundleVertical: 'RecommendationBundleVerticalTemplatesLegalProps',
	recommendationGrid: 'RecommendationGridTemplatesLegalProps',
};

// allowed on every override regardless of component - see ThemeComponentCascade/ThemeComponentAllowedProps
const ALWAYS_ALLOWED_OVERRIDE_PROPS = new Set(['$children', 'themeStyleScript']);

const openNamedPropsCacheByProgram = new WeakMap();

/*
	Test/debug instrumentation: records failures of the typed-check INFRASTRUCTURE
	(module resolution, constraint acquisition) - the situations where the rule fails
	open by design. The test suite reads this to distinguish "the environment lost type
	information" (a known CI-only ts.Program issue - see the typed test file's header)
	from a real regression (type info available but no report). Deliberately NOT
	recorded: a type name missing from the components module's exports, so map/type
	drift still fails tests instead of skipping them. Not part of the rule's public API.
*/
const typedCheckInfraFailures = [];
function recordInfraFailure(kind, detail) {
	if (typedCheckInfraFailures.length < 100) typedCheckInfraFailures.push({ kind, detail: String(detail) });
}

// stable per-Program identity, to tell "same program with mutated options" apart from
// "typescript-eslint rebuilt the program" in the forensics above
const programIds = new WeakMap();
let nextProgramId = 1;
function programIdOf(program) {
	if (!programIds.has(program)) programIds.set(program, nextProgramId++);
	return programIds.get(program);
}

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
			invalidOpenNamedSelectorProp:
				'"{{ value }}" is not a valid prop for the "{{ selector }}" override ({{ componentType }} resolves to {{ typeName }}). Must be one of: {{ validKeys }}.',
			invalidOpenNamedSelectorPropType:
				'"{{ value }}" on the "{{ selector }}" override ({{ typeName }}) expects type {{ expectedType }}, but got {{ actualType }}.',
			unknownOverrideSelector: '"{{ selector }}" is not a valid theme override selector ("{{ segment }}" does not resolve to any component).',
			unknownOverrideBreakpoint: '"{{ value }}" is not a theme override breakpoint. Must be one of: default, mobile, tablet, desktop.',
			unknownConfigKey: '"{{ value }}" is not a valid config key at "{{ path }}". Valid keys: {{ validKeys }}.',
			mixedSelectorGroup:
				'"{{ selector }}" mixes component types ({{ kinds }}). Comma-separated selectors must all target the same component type, since the override props resolve against that component.',
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

				// unknown-key squiggles for the rest of the config (excess property checking
				// does not survive the generic call, so the compiler only reports these at the
				// config's use site - this pinpoints the offending key). Typed linting only.
				validateConfigKeys(node, configArg, context);
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

			// Comma-separated selector groups must target one component type - pure syntax,
			// so this runs even without typed linting
			validateSelectorGroupKinds(init, context);

			// ADVISORY typed checks: inline squiggles for bad theme-override selectors and for
			// bad props under open-named dotted selectors (facet.price, ...). Best-effort - only
			// runs under typed linting (see getProgramAndChecker) and fails open. Correctness
			// does not depend on this: the compiler enforces the same rules through
			// validateTemplatesConfig's conditional return type (see SnapTemplates.tsx), which
			// errors at the config's use site; these squiggles exist to pinpoint the exact
			// offending key at its source location.
			validateOverrideSelectors(init, context);
		}

		/**
		 * A comma-separated selector applies ONE override object to several tree paths, so
		 * every part must target the same component type (its final segment's component
		 * name) - otherwise no single props type could validate the override. Mirrors the
		 * compiler-side ThemeSelectorGroupKinds check (themeComponents.ts); this squiggle is
		 * the pinpoint version, and needs no type information.
		 */
		function validateSelectorGroupKinds(configObjectExpression, context) {
			const overridesContainer = findOverridesObject(configObjectExpression);
			if (!overridesContainer) return;

			const walkGroups = (selectorMapObjectExpression) => {
				for (const prop of selectorMapObjectExpression.properties) {
					if (prop.type !== 'Property') continue;
					const selector = getPropertyName(prop);

					if (selector && selector.includes(',')) {
						const kinds = Array.from(
							new Set(
								selector.split(',').map((part) => {
									const segment = part.trim().split(' ').pop();
									return segment.split('.')[0];
								})
							)
						);
						if (kinds.length > 1) {
							context.report({
								node: prop.key,
								messageId: 'mixedSelectorGroup',
								data: { selector, kinds: kinds.join(' vs ') },
							});
						}
					}

					if (prop.value.type === 'ObjectExpression') {
						const childrenProp = prop.value.properties.find(
							(p) => p.type === 'Property' && getPropertyName(p) === '$children' && p.value.type === 'ObjectExpression'
						);
						if (childrenProp) walkGroups(childrenProp.value);
					}
				}
			};

			for (const breakpointProp of overridesContainer.properties) {
				if (breakpointProp.type === 'Property' && breakpointProp.value.type === 'ObjectExpression') {
					walkGroups(breakpointProp.value);
				}
			}
		}

		/**
		 * Unknown-key squiggles across the config, mirroring the compiler-side
		 * `ConfigUnknownKeyErrors` walk (see SnapTemplates.tsx) with the same conservative,
		 * fail-open guards: only descend where the EXPECTED type is a single, finite-keyed,
		 * non-callable object shape (or an array of one); skip unions, index-signed types,
		 * functions and any/unknown. `theme.overrides` is skipped - the selector-aware walk
		 * below owns it.
		 */
		function validateConfigKeys(callNode, configObjectExpression, context) {
			const programAndChecker = getProgramAndChecker(context);
			if (!programAndChecker || !programAndChecker.esTreeNodeToTSNodeMap) return;
			const { checker, esTreeNodeToTSNodeMap } = programAndChecker;

			try {
				const ts = require('typescript');
				const tsCall = esTreeNodeToTSNodeMap.get(callNode);
				if (!tsCall) return;
				const calleeType = checker.getTypeAtLocation(tsCall.expression);
				const sig = calleeType.getCallSignatures && calleeType.getCallSignatures()[0];
				const typeParams = sig && sig.getTypeParameters && sig.getTypeParameters();
				const constraint = typeParams && typeParams[0] && typeParams[0].getConstraint();
				if (!constraint) {
					recordInfraFailure('constraint-unavailable', callNode.callee && callNode.callee.name);
					return;
				}

				const isCheckableShape = (t) => {
					if (!t || t.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) return false;
					if (t.flags & ts.TypeFlags.Union) return false;
					if (!(t.flags & (ts.TypeFlags.Object | ts.TypeFlags.Intersection))) return false;
					if (t.getCallSignatures && t.getCallSignatures().length > 0) return false;
					if (checker.getIndexTypeOfType(t, ts.IndexKind.String)) return false;
					if (checker.getIndexTypeOfType(t, ts.IndexKind.Number)) return false; // arrays/tuples handled separately
					return true;
				};
				const arrayElement = (t) => {
					if (!t || !(t.flags & ts.TypeFlags.Object)) return null;
					if (!(t.symbol && t.symbol.name === 'Array')) return null;
					return checker.getIndexTypeOfType(t, ts.IndexKind.Number) || null;
				};

				const walkObject = (objectExpression, expectedType, pathLabel, skipKeys) => {
					if (!isCheckableShape(expectedType)) return;
					const validNames = (checker.getPropertiesOfType(expectedType) || []).map((p) => p.name);
					for (const prop of objectExpression.properties) {
						if (prop.type !== 'Property') continue; // spreads: fail open
						const name = getPropertyName(prop);
						if (!name || (skipKeys && skipKeys.includes(name))) continue;

						const memberSymbol = checker.getPropertyOfType(expectedType, name);
						if (!memberSymbol) {
							context.report({
								node: prop.key,
								messageId: 'unknownConfigKey',
								data: { value: name, path: pathLabel, validKeys: validNames.slice(0, 30).join(', ') },
							});
							continue;
						}

						const memberType = checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(memberSymbol, tsCall));
						const childPath = pathLabel === 'config root' ? name : `${pathLabel}.${name}`;
						if (prop.value.type === 'ObjectExpression') {
							// theme.overrides belongs to the selector-aware walk
							const childSkip = name === 'theme' && pathLabel === 'config root' ? ['overrides'] : undefined;
							walkObject(prop.value, memberType, childPath, childSkip);
						} else if (prop.value.type === 'ArrayExpression') {
							const el = arrayElement(memberType);
							if (el) {
								prop.value.elements.forEach((element, index) => {
									if (element && element.type === 'ObjectExpression') {
										walkObject(element, checker.getNonNullableType(el), `${childPath}[${index}]`);
									}
								});
							}
						}
					}
				};

				walkObject(configObjectExpression, constraint, 'config root');
			} catch (err) {
				// advisory layer: never let a resolution hiccup break linting
				recordInfraFailure('exception', err);
			}
		}

		/**
		 * Walk every selector map in `theme.overrides.default/mobile/tablet/desktop`, mirroring
		 * the compiler-side `ThemeOverrideCheckMode` split (see themeComponents.ts):
		 *
		 *  - Selector KEYS are validated everywhere (top level and every `$children` map):
		 *    excess property checking does not fire against these pattern-keyed types through
		 *    the generic `validateTemplatesConfig` call, so a typo'd selector only errors via
		 *    the conditional return type - at the use site. The squiggle reported here is the
		 *    pinpoint version of that same error.
		 *
		 *  - Under a NAMED selector ('ts-visible'), prop KEY existence is checked and
		 *    `$children` is descended into. Prop VALUE types are left to TS (constraint
		 *    assignability reports those at the literal already - re-reporting would
		 *    duplicate) - but unknown prop keys are NOT caught by TS through the generic
		 *    `validateTemplatesConfig` call (excess property checking does not survive it),
		 *    so the key squiggle here is the only inline signal.
		 *
		 *  - Under an open-named dotted selector like `facet.price` ('ts-blind'), the whole
		 *    value is `unknown` to TS, so props are fully checked too: existence and value
		 *    types against the REAL props type for the targeted component, resolved live via
		 *    the type checker, recursing through `$children`.
		 *
		 * Silently does nothing when typed linting isn't configured (no parserServices.program),
		 * and fails open on any resolution hiccup - this is an advisory squiggle layer; the
		 * compiler's return-type check is the authority.
		 */
		function validateOverrideSelectors(configObjectExpression, context) {
			const programAndChecker = getProgramAndChecker(context);
			if (!programAndChecker) return;

			const overridesContainer = findOverridesObject(configObjectExpression);
			if (!overridesContainer) return;

			// breakpoint-level keys: only these four are meaningful to ThemeStore
			for (const prop of overridesContainer.properties) {
				if (prop.type !== 'Property') continue;
				const breakpoint = getPropertyName(prop);
				if (breakpoint && !['default', 'mobile', 'tablet', 'desktop'].includes(breakpoint)) {
					context.report({ node: prop.key, messageId: 'unknownOverrideBreakpoint', data: { value: breakpoint } });
				}
			}

			const overridesObjects = collectOverridesObjects(configObjectExpression);
			if (overridesObjects.length === 0) return;

			const filename = context.filename ?? context.getFilename();

			for (const overridesObject of overridesObjects) {
				walkSelectorMap(overridesObject, programAndChecker, filename, context);
			}
		}

		/**
		 * The 'ts-visible' walk: validate each selector key, hand open-named dotted selectors
		 * to the full ('ts-blind') prop checking, and recurse through named selectors' $children.
		 */
		function walkSelectorMap(selectorMapObjectExpression, programAndChecker, filename, context) {
			for (const prop of selectorMapObjectExpression.properties) {
				if (prop.type !== 'Property' || prop.value.type !== 'ObjectExpression') continue;

				const selector = getPropertyName(prop);
				if (!selector) continue;

				// only the selector's final (space-separated) segment determines its component -
				// e.g. 'search facet.price' targets the same 'facet.price' as a bare selector
				const finalSegment = selector.includes(' ') ? selector.split(' ').pop() : selector;
				const dotIndex = finalSegment.indexOf('.');
				const componentType = dotIndex === -1 ? null : finalSegment.slice(0, dotIndex);

				if (componentType && OPEN_NAMED_COMPONENT_PROPS_TYPE[componentType]) {
					// TS is blind to this whole subtree - full prop checking
					walkUnknownRegionEntry(prop.value, selector, programAndChecker, filename, context);
					continue;
				}

				if (isKnownSelectorSegment(programAndChecker, filename, finalSegment) === false) {
					context.report({
						node: prop.key,
						messageId: 'unknownOverrideSelector',
						data: { selector, segment: finalSegment },
					});
					continue;
				}

				// known (or unresolvable - fail open): check this named selector's prop KEYS
				// (TS covers their value types, but not unknown keys - see the doc above) and
				// walk its $children selector map. A customComponent swaps in a component
				// whose subtree isn't known - skip it, same as the ts-blind walk does.
				const hasCustomComponent = prop.value.properties.some(
					(valueProp) => valueProp.type === 'Property' && getPropertyName(valueProp) === 'customComponent'
				);
				if (hasCustomComponent) continue;

				const resolved = resolveSelectorPropsType(programAndChecker, filename, finalSegment);
				if (resolved) {
					for (const valueProp of prop.value.properties) {
						if (valueProp.type !== 'Property') continue;
						const propName = getPropertyName(valueProp);
						if (!propName || ALWAYS_ALLOWED_OVERRIDE_PROPS.has(propName)) continue;
						if (!resolved.propNames.has(propName)) {
							context.report({
								node: valueProp.key,
								messageId: 'invalidOpenNamedSelectorProp',
								data: {
									value: propName,
									selector,
									componentType: finalSegment,
									typeName: safeTypeToString(programAndChecker, resolved.type),
									// structural keys ($children etc.) aren't component props - keep them out of the suggestion list
									validKeys: Array.from(resolved.propNames)
										.filter((name) => !ALWAYS_ALLOWED_OVERRIDE_PROPS.has(name))
										.join(', '),
								},
							});
						}
					}
				}

				const childrenProp = prop.value.properties.find(
					(p) => p.type === 'Property' && getPropertyName(p) === '$children' && p.value.type === 'ObjectExpression'
				);
				if (childrenProp) {
					walkSelectorMap(childrenProp.value, programAndChecker, filename, context);
				}
			}
		}

		/**
		 * Whether a selector's final segment resolves to anything in `ThemeComponentsRestricted`:
		 * a literal property (named selectors and finite named-dotted forms), or a pattern index
		 * signature (template open-named forms like `search.${string}` and the tree-path
		 * patterns). Returns true/false, or null when it cannot tell (fail open - never report
		 * off a guess).
		 */
		function isKnownSelectorSegment(programAndChecker, filename, segment) {
			try {
				const anchor = resolveNamedTypeFromComponentsModule(programAndChecker, 'ThemeComponentsRestricted', filename);
				if (!anchor) return null;

				const { checker } = programAndChecker;
				if (checker.getPropertyOfType(anchor.type, segment)) return true;

				const ts = require('typescript');
				const indexInfos = checker.getIndexInfosOfType(anchor.type) || [];
				for (const info of indexInfos) {
					if (keyTypeMatchesName(ts, info.keyType, segment)) return true;
				}
				return false;
			} catch {
				return null;
			}
		}

		/**
		 * Whether a concrete property name matches an index signature's key type. The selector
		 * pattern families only ever use `${string}` placeholders, so template literal keys are
		 * matched by locating their static text chunks in order (permissive on ambiguity - a
		 * false "match" just means no squiggle, never a wrong one).
		 */
		function keyTypeMatchesName(ts, keyType, name) {
			if (keyType.flags & ts.TypeFlags.String) return true;
			if (keyType.flags & ts.TypeFlags.StringLiteral) return keyType.value === name;
			if (keyType.flags & ts.TypeFlags.Union) return keyType.types.some((member) => keyTypeMatchesName(ts, member, name));
			if (!(keyType.flags & ts.TypeFlags.TemplateLiteral)) return false;

			const texts = keyType.texts;
			if (!name.startsWith(texts[0])) return false;
			let pos = texts[0].length;
			for (let i = 1; i < texts.length; i++) {
				const chunk = texts[i];
				if (i === texts.length - 1) {
					if (chunk === '') return name.length >= pos;
					const at = name.lastIndexOf(chunk);
					return at >= pos && at + chunk.length === name.length;
				}
				if (chunk === '') continue;
				const at = name.indexOf(chunk, pos);
				if (at === -1) return false;
				pos = at + chunk.length;
			}
			return true;
		}

		/**
		 * Validate one selector's authored value against its resolved type (props existing +
		 * value types), then - unless a customComponent escape hatch is present - recurse into
		 * its `$children`, if any, with the same treatment. Used both for the top-level
		 * open-named-dotted selector that got us into "unknown" territory, and for every
		 * selector found while walking inside it.
		 */
		function walkUnknownRegionEntry(valueObjectExpression, selector, programAndChecker, filename, context) {
			// a customComponent swaps in a component whose props aren't known - already
			// unchecked at the type level too (its whole subtree resolves to `unknown`
			// regardless), left unchecked here for the same reason
			const hasCustomComponent = valueObjectExpression.properties.some(
				(valueProp) => valueProp.type === 'Property' && getPropertyName(valueProp) === 'customComponent'
			);
			if (hasCustomComponent) return;

			const finalSegment = selector.includes(' ') ? selector.split(' ').pop() : selector;
			const resolved = resolveSelectorPropsType(programAndChecker, filename, finalSegment);
			if (resolved) {
				const { propNames: validPropNames, type: resolvedType, sourceFile } = resolved;

				for (const valueProp of valueObjectExpression.properties) {
					if (valueProp.type !== 'Property') continue;
					const propName = getPropertyName(valueProp);
					if (!propName || ALWAYS_ALLOWED_OVERRIDE_PROPS.has(propName)) continue;

					if (!validPropNames.has(propName)) {
						context.report({
							node: valueProp.key,
							messageId: 'invalidOpenNamedSelectorProp',
							data: {
								value: propName,
								selector,
								componentType: finalSegment.split('.')[0],
								typeName: safeTypeToString(programAndChecker, resolvedType),
								validKeys: Array.from(validPropNames).join(', '),
							},
						});
						continue;
					}

					// the key is valid - also check the authored value's type against the
					// real prop type (key existence alone doesn't catch e.g. `color: 5`
					// where `color` is real but expects a string)
					const typeMismatch = checkPropValueType(programAndChecker, resolvedType, sourceFile, propName, valueProp.value);
					if (typeMismatch) {
						context.report({
							node: valueProp.value,
							messageId: 'invalidOpenNamedSelectorPropType',
							data: {
								value: propName,
								selector,
								componentType: finalSegment.split('.')[0],
								typeName: safeTypeToString(programAndChecker, resolvedType),
								expectedType: typeMismatch.expectedType,
								actualType: typeMismatch.actualType,
							},
						});
					}
				}
			}
			// couldn't resolve (e.g. renamed/unrecognized selector) - fail open, never
			// false-positive, but still recurse into $children below since that part is
			// independent of whether we could name this particular selector's own type

			const childrenProp = valueObjectExpression.properties.find(
				(p) => p.type === 'Property' && getPropertyName(p) === '$children' && p.value.type === 'ObjectExpression'
			);
			if (!childrenProp) return;

			for (const childProp of childrenProp.value.properties) {
				if (childProp.type !== 'Property' || childProp.value.type !== 'ObjectExpression') continue;
				const childSelector = getPropertyName(childProp);
				if (!childSelector) continue;

				// selector keys inside this blind region get no checking from TS at all -
				// squiggle unresolvable ones (the compiler-side check errors on them too)
				const childSegment = childSelector.includes(' ') ? childSelector.split(' ').pop() : childSelector;
				const childDotIndex = childSegment.indexOf('.');
				const childComponentType = childDotIndex === -1 ? null : childSegment.slice(0, childDotIndex);
				if (!(childComponentType && OPEN_NAMED_COMPONENT_PROPS_TYPE[childComponentType])) {
					if (isKnownSelectorSegment(programAndChecker, filename, childSegment) === false) {
						context.report({
							node: childProp.key,
							messageId: 'unknownOverrideSelector',
							data: { selector: childSelector, segment: childSegment },
						});
						continue;
					}
				}

				walkUnknownRegionEntry(childProp.value, childSelector, programAndChecker, filename, context);
			}
		}

		/**
		 * Resolve a selector's final segment to its real props type, live via the type checker:
		 * first as a literal property of `ThemeComponentsRestricted` (covers every bare selector
		 * and every named-dotted selector with a finite suffix union, e.g. `icon.next` - i.e.
		 * everything TypeScript itself would resolve precisely at the top level), falling back
		 * to OPEN_NAMED_COMPONENT_PROPS_TYPE only for the open-named-dotted form that isn't a
		 * literal property on that type (e.g. `facet.custom`).
		 */
		function resolveSelectorPropsType(programAndChecker, filename, finalSegment) {
			const { checker } = programAndChecker;
			const anchor = resolveNamedTypeFromComponentsModule(programAndChecker, 'ThemeComponentsRestricted', filename);

			if (anchor) {
				try {
					const propSymbol = checker.getPropertyOfType(anchor.type, finalSegment);
					if (propSymbol) {
						// the property is optional (`prop?: X`), so its declared type is `X | undefined` -
						// getPropertiesOfType on that union intersects across members and returns nothing,
						// since `undefined` has no properties, so unwrap it first
						const propType = checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(propSymbol, anchor.sourceFile));
						return {
							propNames: new Set(checker.getPropertiesOfType(propType).map((p) => p.name)),
							type: propType,
							sourceFile: anchor.sourceFile,
						};
					}
				} catch {
					// fall through to the open-named fallback below
				}
			}

			const componentType = finalSegment.split('.')[0];
			const typeName = OPEN_NAMED_COMPONENT_PROPS_TYPE[componentType];
			if (!typeName) return null;
			return resolveNamedTypeFromComponentsModule(programAndChecker, typeName, filename);
		}

		/** `checker.typeToString`, defensively - only used to format a message, never gates behavior. */
		function safeTypeToString(programAndChecker, type) {
			try {
				return programAndChecker.checker.typeToString(type);
			} catch {
				return '(unresolved)';
			}
		}

		/**
		 * Collect the ObjectExpression for each of theme.overrides.default/mobile/tablet/desktop
		 * that's present as a plain object literal (a spread can't be statically resolved here).
		 */
		/**
		 * The theme.overrides ObjectExpression itself, or null when absent/not a literal.
		 */
		function findOverridesObject(configObjectExpression) {
			const themeProp = findProperty(configObjectExpression, 'theme');
			if (!themeProp || themeProp.value.type !== 'ObjectExpression') return null;

			const overridesProp = findProperty(themeProp.value, 'overrides');
			if (!overridesProp || overridesProp.value.type !== 'ObjectExpression') return null;

			return overridesProp.value;
		}

		function collectOverridesObjects(configObjectExpression) {
			const themeProp = findProperty(configObjectExpression, 'theme');
			if (!themeProp || themeProp.value.type !== 'ObjectExpression') return [];

			const overridesProp = findProperty(themeProp.value, 'overrides');
			if (!overridesProp || overridesProp.value.type !== 'ObjectExpression') return [];

			const results = [];
			for (const breakpoint of ['default', 'mobile', 'tablet', 'desktop']) {
				const breakpointProp = findProperty(overridesProp.value, breakpoint);
				if (breakpointProp && breakpointProp.value.type === 'ObjectExpression') {
					results.push(breakpointProp.value);
				}
			}
			return results;
		}

		/**
		 * Get { program, checker, esTreeNodeToTSNodeMap } from typed-linting parser services,
		 * or null if this rule is running without type information (e.g. no
		 * `parserOptions.project` configured).
		 */
		function getProgramAndChecker(context) {
			const services = context.sourceCode?.parserServices ?? context.parserServices;
			if (!services || !services.program) return null;
			return {
				program: services.program,
				checker: services.program.getTypeChecker(),
				esTreeNodeToTSNodeMap: services.esTreeNodeToTSNodeMap,
			};
		}

		/**
		 * Check an authored prop value's type against the real prop's declared type. Returns
		 * { expectedType, actualType } (as display strings) if they're incompatible, or null if
		 * they're compatible or couldn't be checked (fail open - never false-positive).
		 */
		function checkPropValueType(programAndChecker, resolvedType, sourceFile, propName, valueNode) {
			const { checker, esTreeNodeToTSNodeMap } = programAndChecker;
			if (!esTreeNodeToTSNodeMap) return null;

			try {
				const propSymbol = checker.getPropertyOfType(resolvedType, propName);
				const tsValueNode = esTreeNodeToTSNodeMap.get(valueNode);
				if (!propSymbol || !tsValueNode) return null;

				const expectedType = checker.getTypeOfSymbolAtLocation(propSymbol, sourceFile);
				const actualType = checker.getTypeAtLocation(tsValueNode);
				if (checker.isTypeAssignableTo(actualType, expectedType)) return null;

				return {
					expectedType: checker.typeToString(expectedType),
					actualType: checker.typeToString(actualType),
				};
			} catch {
				return null;
			}
		}

		/**
		 * Resolve the real property names of an exported type from
		 * '@athoscommerce/snap-preact/components', by name, live from the type checker.
		 * Cached per Program so each type is only resolved once per lint run - but only
		 * successful resolutions are cached. A failure (thrown error, or a symbol/type
		 * genuinely not found) is never memoized: the Program this is keyed on outlives a
		 * single lint run (typescript-eslint reuses it across calls with an unchanged
		 * tsconfig+file), so caching a one-off failure would silently and permanently
		 * disable this check for that type for the rest of the Program's lifetime instead
		 * of just this one call.
		 */
		function resolveNamedTypeFromComponentsModule(programAndChecker, typeName, containingFileName) {
			const { program, checker } = programAndChecker;

			let cache = openNamedPropsCacheByProgram.get(program);
			if (!cache) {
				cache = new Map();
				openNamedPropsCacheByProgram.set(program, cache);
			}
			if (cache.has(typeName)) return cache.get(typeName);

			let result = null;
			try {
				const ts = require('typescript');
				const resolved = ts.resolveModuleName('@athoscommerce/snap-preact/components', containingFileName, program.getCompilerOptions(), ts.sys);
				const resolvedFileName = resolved.resolvedModule && resolved.resolvedModule.resolvedFileName;
				if (!resolvedFileName) {
					// forensics for the CI-only paths-loss issue: program identity distinguishes
					// in-place option mutation from a rebuilt program; the options snapshot shows
					// whether `paths` is empty or gone; failedLookupLocations show where resolution
					// actually looked
					const options = program.getCompilerOptions();
					recordInfraFailure(
						'module-resolution',
						`@athoscommerce/snap-preact/components | program#${programIdOf(program)} | ` +
							`paths=${options.paths ? Object.keys(options.paths).length + ' entries' : String(options.paths)} | ` +
							`configFilePath=${options.configFilePath} | ` +
							`lookedIn=${(resolved.failedLookupLocations || []).slice(0, 3).join(', ') || '(none reported)'}`
					);
				}
				const sourceFile = resolvedFileName && program.getSourceFile(resolvedFileName);
				if (resolvedFileName && !sourceFile) recordInfraFailure('source-file-missing', resolvedFileName);
				const moduleSymbol = sourceFile && checker.getSymbolAtLocation(sourceFile);
				if (sourceFile && !moduleSymbol) recordInfraFailure('module-symbol-missing', resolvedFileName);
				const exportSymbol = moduleSymbol && checker.getExportsOfModule(moduleSymbol).find((s) => s.name === typeName);

				if (exportSymbol) {
					const type = checker.getDeclaredTypeOfSymbol(exportSymbol);
					result = {
						propNames: new Set(checker.getPropertiesOfType(type).map((p) => p.name)),
						type,
						sourceFile,
					};
				}
			} catch (err) {
				recordInfraFailure('exception', err);
				result = null;
			}

			if (result) cache.set(typeName, result);
			return result;
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

module.exports.__typedCheckInfraFailures = typedCheckInfraFailures;
