/**
 * ESLint rule: override-selectors
 *
 * Validates theme override selectors: comma-separated selector groups must target one component
 * type (pure syntax), and - under typed linting - selectors must resolve to a component and their
 * props must exist on it with the right value types.
 */

const { createConfigVisitors } = require('../utils/config-visitors.cjs');
const { findProperty, getPropertyName } = require('../utils/ast.cjs');

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

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Validate theme override selectors and the props set under them',
		},
		messages: {
			invalidOpenNamedSelectorProp:
				'"{{ value }}" is not a valid prop for the "{{ selector }}" override ({{ componentType }} resolves to {{ typeName }}). Must be one of: {{ validKeys }}.',
			invalidOpenNamedSelectorPropType:
				'"{{ value }}" on the "{{ selector }}" override ({{ typeName }}) expects type {{ expectedType }}, but got {{ actualType }}.',
			unknownOverrideSelector: '"{{ selector }}" is not a valid theme override selector ("{{ segment }}" does not resolve to any component).',
			mixedSelectorGroup:
				'"{{ selector }}" mixes component types ({{ kinds }}). Comma-separated selectors must all target the same component type, since the override props resolve against that component.',
		},
		schema: [],
	},
	create(context) {
		return createConfigVisitors((config) => {
			// Comma-separated selector groups must target one component type - pure syntax,
			// so this runs even without typed linting
			validateSelectorGroupKinds(config, context);

			// ADVISORY typed checks: inline squiggles for bad theme-override selectors and for
			// bad props under open-named dotted selectors (facet.price, ...). Best-effort - only
			// runs under typed linting (see getProgramAndChecker) and fails open. Correctness
			// does not depend on this: the compiler enforces the same rules through
			// validateTemplatesConfig's conditional return type (see SnapTemplates.tsx), which
			// errors at the config's use site; these squiggles exist to pinpoint the exact
			// offending key at its source location.
			validateOverrideSelectors(config, context);
		});
	},
};

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
 * Walk every selector map in `theme.overrides.default/mobile/tablet/desktop`, mirroring
 * the compiler-side `ThemeOverridesErrors` walk (see themeComponents.ts). The compiler
 * reports these problems at the config's USE site (`new SnapTemplates(config)`), because
 * the breakpoint maps are inferred type parameters; the squiggles here are the pinpoint
 * version of the same errors:
 *
 *  - Selector KEYS are validated everywhere (top level and every `$children` map).
 *
 *  - Under a NAMED selector, prop KEY existence is checked and `$children` is descended
 *    into. Prop VALUE types are left to TS, which reports them at the literal already.
 *
 *  - Under an open-named dotted selector like `facet.price`, the whole value is
 *    `unknown` to TS, so props are fully checked: existence and value types against the
 *    REAL props type of the targeted component, resolved live via the type checker,
 *    recursing through `$children`.
 *
 * Unknown config keys and breakpoint names are NOT reported here: the rest of the config
 * is a concrete type, so the compiler already reports those on the exact line.
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

	const overridesObjects = collectOverridesObjects(configObjectExpression);
	if (overridesObjects.length === 0) return;

	const filename = context.filename ?? context.getFilename();

	for (const overridesObject of overridesObjects) {
		walkSelectorMap(overridesObject, programAndChecker, filename, context);
	}
}

/**
 * Validate each selector key, hand open-named dotted selectors to full prop checking, and
 * recurse through named selectors' $children.
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
		// whose subtree isn't known - skip it, same as the compiler-side walk does.
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
 * The theme.overrides ObjectExpression itself, or null when absent/not a literal.
 */
function findOverridesObject(configObjectExpression) {
	const themeProp = findProperty(configObjectExpression, 'theme');
	if (!themeProp || themeProp.value.type !== 'ObjectExpression') return null;

	const overridesProp = findProperty(themeProp.value, 'overrides');
	if (!overridesProp || overridesProp.value.type !== 'ObjectExpression') return null;

	return overridesProp.value;
}

/**
 * Collect the ObjectExpression for each of theme.overrides.default/mobile/tablet/desktop
 * that's present as a plain object literal (a spread can't be statically resolved here).
 */
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
		const sourceFile = resolvedFileName && program.getSourceFile(resolvedFileName);
		const moduleSymbol = sourceFile && checker.getSymbolAtLocation(sourceFile);
		const exportSymbol = moduleSymbol && checker.getExportsOfModule(moduleSymbol).find((s) => s.name === typeName);

		if (exportSymbol) {
			const type = checker.getDeclaredTypeOfSymbol(exportSymbol);
			result = {
				propNames: new Set(checker.getPropertiesOfType(type).map((p) => p.name)),
				type,
				sourceFile,
			};
		}
	} catch {
		result = null;
	}

	if (result) cache.set(typeName, result);
	return result;
}
