import { validateTemplatesConfig, validateTemplatesConfigUnlocked } from './SnapTemplates';
import type { SnapTemplatesConfig, SnapTemplatesConfigUnlocked } from './SnapTemplates';

/*
 * `validateTemplatesConfig` / `validateTemplatesConfigUnlocked` check a config in three
 * places, chosen so the editor stays fast AND the compiler stays precise:
 *
 *  - Everything OUTSIDE the four breakpoint maps is a concrete parameter type, so
 *    TypeScript's own excess property checking rejects unknown config keys, theme keys and
 *    breakpoint names right at the literal, with the standard message.
 *
 *  - Each breakpoint map (`theme.overrides.default` etc.) is an inferred type parameter
 *    constrained by the plain, non-generic `ThemeComponentOverrides` shape. Completions come
 *    from that constraint (see `themeOverridesCompletions.test.ts`) and constraint
 *    assignability rejects wrong VALUE types on known props, at the literal. Being inferred,
 *    a map gets no excess property checking - a typo'd selector or prop next to a valid
 *    sibling passes here (the weak-type rule only fires when a literal shares NO props with
 *    its target).
 *
 *  - The RETURN type closes that gap: selector keys and prop keys across the maps, and full
 *    prop checking under open-named dotted selectors (typed `unknown` in the constraint).
 *    Valid overrides return `SnapTemplatesConfig`; invalid ones return an error carrier that
 *    is not assignable to it, so the config errors where it is USED
 *    (`new SnapTemplates(config)`) with the failing entries embedded in the reported type.
 *    Return types are only computed when the call is checked - never on the editor's
 *    synchronous completion path, which is what keeps authoring fast.
 *
 * An earlier version resolved every selector precisely IN the parameter (a generic mapped
 * type as the literal's contextual type). It cost ~1.5s of editor completion latency per
 * keystroke, re-measured at ~10s on TS 6 with a realistic 40-selector config, and offered no
 * selector-key completions at all.
 *
 * These callbacks are never invoked - only ever type-checked. `npm run typecheck:tests`
 * (`tsc --noEmit -p tsconfig.test.json`) is the gate that runs this, since ts-jest runs
 * transpile-only (isolatedModules) and never sees these errors.
 */
function typeOnly(_fn: () => void) {}

typeOnly(() => {
	// ---- at the literal: named selectors are checked by EPC against the constraint ----

	// bare-key selector: valid value compiles
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					icon: { icon: 'cog' },
				},
			},
		},
	});

	// bare-key selector: bad prop VALUE is rejected at the literal (constraint assignability
	// on a known prop - this is what the bare generic parameter must preserve)
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					// @ts-expect-error - 'not-a-real-icon' isn't a valid IconType
					icon: { icon: 'not-a-real-icon' },
				},
			},
		},
	});

	// ---- via the conditional return type: open-named dotted selectors ----

	// valid config: the return type stays `T` and remains assignable to SnapTemplatesConfig
	const validConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					result: { hideQuickviewButton: true },
					'facet.price': {
						disableCollapse: true,
						$children: {
							icon: { color: 'red' },
							'facet.color': { limit: 5 },
						},
					},
				},
			},
		},
	});
	const _validUse: SnapTemplatesConfig = validConfig;

	// dotted/open-named selector: a bad prop makes the config unusable at its use site
	const badPropConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.price': { thisIsNotARealProp: 'nonsense' },
				},
			},
		},
	});
	// @ts-expect-error - 'facet.price' resolves to Facet's props; thisIsNotARealProp isn't one of them
	const _badPropUse: SnapTemplatesConfig = badPropConfig;

	// dotted/open-named selector: a real prop with a wrong value type is rejected too
	const badValueTypeConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.price': { color: 5 },
				},
			},
		},
	});
	// @ts-expect-error - Facet's `color` expects a string
	const _badValueTypeUse: SnapTemplatesConfig = badValueTypeConfig;

	// a VALID literal-union prop under an open-named selector must pass: the authoring type has
	// no prop types here, so it must still keep `'grid'` narrow (see ThemeOverrideOpenNamedValue)
	// or the deferred check sees `string` and rejects every literal, valid or not
	const validLiteralUnderOpenNamedConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facets facet.size': { displayType: 'grid' },
					'facet.price': { $children: { icon: { icon: 'cog' } } },
				},
			},
		},
	});
	const _validLiteralUnderOpenNamedUse: SnapTemplatesConfig = validLiteralUnderOpenNamedConfig;

	// ...while an INVALID literal on the same prop is still rejected
	const invalidLiteralUnderOpenNamedConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facets facet.size': { displayType: 'not-a-display-type' },
				},
			},
		},
	});
	// @ts-expect-error - 'not-a-display-type' is not a Facet displayType
	const _invalidLiteralUnderOpenNamedUse: SnapTemplatesConfig = invalidLiteralUnderOpenNamedConfig;

	// ...and a plain `string` VARIABLE is still accepted where the prop is a string
	const someColor: string = 'red' as string;
	const stringVariableUnderOpenNamedConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.price': { color: someColor },
				},
			},
		},
	});
	const _stringVariableUnderOpenNamedUse: SnapTemplatesConfig = stringVariableUnderOpenNamedConfig;

	// $children under an open-named selector: the constraint has no prop types for the whole
	// subtree, so the return-type check must catch bad props on nested selectors - even named ones
	const badNestedChildConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.price': {
						$children: {
							icon: { icon: 'not-a-real-icon' },
						},
					},
				},
			},
		},
	});
	// @ts-expect-error - nested `icon` under 'facet.price' resolves to Icon's props; 'not-a-real-icon' isn't a valid IconType
	const _badNestedChildUse: SnapTemplatesConfig = badNestedChildConfig;

	// ---- key checking inside a breakpoint map: the map is an inferred type parameter, so it
	// gets no excess property checking - unknown selector keys AND unknown prop keys MUST be
	// caught by the return-type check instead ----

	// unknown selector key at the top of a breakpoint
	const unknownTopSelectorConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					nope: { hi: 'mom' },
				},
			},
		},
	});
	// @ts-expect-error - 'nope' is not a theme override selector
	const _unknownTopSelectorUse: SnapTemplatesConfig = unknownTopSelectorConfig;

	// unknown selector key inside a NAMED selector's $children
	const unknownChildSelectorConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					badgeImage: {
						$children: {
							nope: { hi: 'mom' },
						},
					},
				},
			},
		},
	});
	// @ts-expect-error - 'nope' is not a theme override selector
	const _unknownChildSelectorUse: SnapTemplatesConfig = unknownChildSelectorConfig;

	// valid named-under-named children must NOT be flagged (under named selectors only KEYS are checked)
	const validNamedChildrenConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					badgeImage: {
						$children: {
							badgeRectangle: {
								$children: {
									icon: { color: 'red' },
									'toolbar.middle': { toggleSideBarButton: {} },
								},
							},
						},
					},
				},
			},
		},
	});
	const _validNamedChildrenUse: SnapTemplatesConfig = validNamedChildrenConfig;

	// a LONE unknown prop on a named child: TS happens to reject this at the literal via the
	// weak-type rule (the literal shares no props with its all-optional target); the
	// return-type check also catches it, so removing the sibling-less accident stays covered
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					badgeImage: {
						$children: {
							// @ts-expect-error - 'thisIsNotARealProp' does not exist on Icon's override props
							icon: { thisIsNotARealProp: 1 },
						},
					},
				},
			},
		},
	});

	// unknown prop KEY on a named selector, next to a valid sibling: TS cannot catch this at
	// the literal (the map is inferred; the weak-type rule needs the literal to share NO props
	// with its target), so the return-type check must
	const unknownNamedPropConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					result: { hideQuickviewButton: false, thisIsNotARealProp: 'nonsense' },
				},
			},
		},
	});
	// @ts-expect-error - 'thisIsNotARealProp' does not exist on Result's override props
	const _unknownNamedPropUse: SnapTemplatesConfig = unknownNamedPropConfig;

	// ---- key checking OUTSIDE the breakpoint maps: the rest of the parameter is a concrete
	// type, so TypeScript's own excess property checking reports these on the exact line ----

	// unknown config key, next to valid siblings
	validateTemplatesConfig({
		// @ts-expect-error - 'thisIsNotARealConfigKey' is not a config key
		config: { platform: 'other', thisIsNotARealConfigKey: 1 },
		theme: { extends: 'base' },
	});

	// valid config WITHOUT theme.overrides: each unauthored breakpoint infers as its constraint
	// (the parameters have no defaults - see AuthoredBreakpoint in SnapTemplates.tsx), which is
	// nothing to check, so the config stays usable
	const noOverridesConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: { extends: 'base' },
	});
	const _noOverridesUse: SnapTemplatesConfig = noOverridesConfig;

	// unknown BREAKPOINT key, next to a valid one: the breakpoint map's container is concrete
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: { result: { hideQuickviewButton: true } },
				// @ts-expect-error - 'nopeBreakpoint' is not a breakpoint (default/mobile/tablet/desktop)
				nopeBreakpoint: { result: {} },
			},
		},
	});

	// unknown key deeper in the config (inside a search target element), next to valid siblings
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: { extends: 'base' },
		// @ts-expect-error - 'thisIsNotATargetKey' is not a search target key
		search: { targets: [{ selector: '#x', component: 'Search', thisIsNotATargetKey: 1 }] },
	});

	// an `any`-typed value anywhere in the config is accepted - there is nothing to check
	const anyValueConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: { extends: 'base' },
		search: 0 as any,
	});
	const _anyValueUse: SnapTemplatesConfig = anyValueConfig;

	// comma-separated selector group targeting ONE component type (facets via two tree
	// paths, icon via bare + named-dotted): valid
	const sameKindGroupConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'search facets, searchHorizontal facets': { limit: 4 },
					'icon, icon.next': { color: 'red' },
				},
			},
		},
	});
	const _sameKindGroupUse: SnapTemplatesConfig = sameKindGroupConfig;

	// comma-separated selector group MIXING component types: there is no single props type
	// such an override could check against - rejected
	const mixedKindGroupConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'search, searchHorizontal': { hideBottomToolbar: true },
				},
			},
		},
	});
	// @ts-expect-error - the group mixes 'search' and 'searchHorizontal'
	const _mixedKindGroupUse: SnapTemplatesConfig = mixedKindGroupConfig;

	// ---- unlocked family: same contract ----

	// unlocked: same bare-key precision at the literal
	validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					// @ts-expect-error - 'not-a-real-icon' isn't a valid IconType
					icon: { icon: 'not-a-real-icon' },
				},
			},
		},
	});

	// unlocked: dotted-selector bad prop caught by the return-type check
	const unlockedBadPropConfig = validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.price': { thisIsNotARealProp: 'nonsense' },
				},
			},
		},
	});
	// @ts-expect-error - 'facet.price' resolves to Facet's props; thisIsNotARealProp isn't one of them
	const _unlockedBadPropUse: SnapTemplatesConfigUnlocked = unlockedBadPropConfig;

	// unlocked: a valid literal-union prop under an open-named selector passes too
	const unlockedValidLiteralConfig = validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facets facet.size': { displayType: 'grid' },
				},
			},
		},
	});
	const _unlockedValidLiteralUse: SnapTemplatesConfigUnlocked = unlockedValidLiteralConfig;

	// unlocked: an open-named selector with `customComponent` set unlocks an arbitrary prop
	// bag (the swapped-in component's props aren't known) - stays fully usable
	const unlockedCustomComponentConfig = validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.myCustomFacet': { customComponent: 'MyCustomFacet', anyPropAtAll: 'is fine here' },
				},
			},
		},
	});
	const _unlockedCustomComponentUse: SnapTemplatesConfigUnlocked = unlockedCustomComponentConfig;

	// locked: `customComponent` is NOT a legal prop, so the same override fails the locked check
	const lockedCustomComponentConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.myCustomFacet': { customComponent: 'MyCustomFacet' },
				},
			},
		},
	});
	// @ts-expect-error - customComponent is only legal on the unlocked config family
	const _lockedCustomComponentUse: SnapTemplatesConfig = lockedCustomComponentConfig;

	// ---- layoutOptions: each option and its overrides.components are checked like the overrides themselves ----

	// valid layoutOptions stay usable
	const validLayoutOptionsConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					search: {
						layoutOptions: [
							{ value: 1, label: '4 Wide', icon: 'layout-grid-4', default: true, overrides: { components: { 'search results': { columns: 4 } } } },
							{ value: 2, label: '2 Wide', overrides: { components: { 'search results': { columns: 2 }, 'facet.color': { limit: 4 } } } },
						],
					},
				},
			},
		},
	});
	const _validLayoutOptionsUse: SnapTemplatesConfig = validLayoutOptionsConfig;

	// a misspelled option key next to valid ones
	const badLayoutOptionKeyConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					search: { layoutOptions: [{ value: 1, label: '4 Wide', defualt: true }] },
				},
			},
		},
	});
	// @ts-expect-error - 'defualt' is not a layout option key
	const _badLayoutOptionKeyUse: SnapTemplatesConfig = badLayoutOptionKeyConfig;

	// a misspelled selector inside an option's overrides.components (only the final segment resolves a
	// component, same as for theme.overrides - a typo in an earlier segment is not caught)
	const badLayoutOptionSelectorConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					search: {
						layoutOptions: [{ value: 1, overrides: { components: { 'search results': { columns: 4 }, 'search resultz': { columns: 3 } } } }],
					},
				},
			},
		},
	});
	// @ts-expect-error - 'resultz' does not resolve to a component
	const _badLayoutOptionSelectorUse: SnapTemplatesConfig = badLayoutOptionSelectorConfig;

	// a misspelled prop next to a valid one inside an option's overrides.components
	const badLayoutOptionPropConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					searchHorizontal: {
						layoutOptions: [{ value: 1, overrides: { components: { 'searchHorizontal results': { columns: 4, columnz: 3 } } } }],
					},
				},
			},
		},
	});
	// @ts-expect-error - 'columnz' is not a Results prop
	const _badLayoutOptionPropUse: SnapTemplatesConfig = badLayoutOptionPropConfig;

	// ---- quickview: the containers render outside any template, so their selectors are unscoped ----

	// the containers take the layout props and pass them to QuickviewLayout (every column needs a `width`)
	const validQuickviewConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		quickview: { targets: [{ component: 'QuickviewSlideout' }] },
		theme: {
			extends: 'pike',
			overrides: {
				default: {
					quickviewSlideout: { slideDirection: 'right', width: '500px' },
					quickviewModal: {
						layout: [['c1', 'c2']],
						column1: { layout: ['slideshow'], width: '50%' },
						column2: {
							layout: [
								['productDetail.mappings.core.name'],
								['variantSelections'],
								['button.add-to-cart', 'quantityPicker'],
								['productDetailTable'],
								['recommendation.similar'],
							],
							width: 'auto',
						},
					},
				},
			},
		},
	});
	const _validQuickviewUse: SnapTemplatesConfig = validQuickviewConfig;

	// a misspelled prop next to a valid one on each quickview selector
	const badQuickviewSlideoutPropConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'pike',
			overrides: {
				default: {
					quickviewSlideout: { slideDirection: 'right', widht: '500px' },
				},
			},
		},
	});
	// @ts-expect-error - 'widht' is not a QuickviewSlideout prop
	const _badQuickviewSlideoutPropUse: SnapTemplatesConfig = badQuickviewSlideoutPropConfig;

	const badQuickviewModalPropConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'pike',
			overrides: {
				default: {
					quickviewModal: { layout: [['c1', 'c2']], colum1: { layout: ['slideshow'], width: '50%' } },
				},
			},
		},
	});
	// @ts-expect-error - 'colum1' is not a QuickviewModal prop
	const _badQuickviewModalPropUse: SnapTemplatesConfig = badQuickviewModalPropConfig;

	// QuickviewLayout is rendered BY the containers, so like AutocompleteLayout it has no selector of its own
	const quickviewLayoutSelectorConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'pike',
			overrides: {
				default: {
					quickviewModal: { hideBadge: true },
					quickviewLayout: { layout: [['c1', 'c2']] },
				},
			},
		},
	});
	// @ts-expect-error - 'quickviewLayout' is not a theme override selector
	const _quickviewLayoutSelectorUse: SnapTemplatesConfig = quickviewLayoutSelectorConfig;

	// unlocked: the quickview selectors are legal there too
	const unlockedQuickviewConfig = validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'pike',
			overrides: {
				default: {
					quickviewModal: { hideBadge: true },
					quickviewSlideout: { slideDirection: 'left', width: '400px' },
				},
			},
		},
	});
	const _unlockedQuickviewUse: SnapTemplatesConfigUnlocked = unlockedQuickviewConfig;

	const unlockedBadQuickviewPropConfig = validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'pike',
			overrides: {
				default: {
					quickviewSlideout: { slideDirection: 'left', widht: '400px' },
				},
			},
		},
	});
	// @ts-expect-error - 'widht' is not a QuickviewSlideout prop
	const _unlockedBadQuickviewPropUse: SnapTemplatesConfigUnlocked = unlockedBadQuickviewPropConfig;
});

describe('theme.overrides typing regression guards', () => {
	it('is a compile-time-only check - see typeOnly() above; run via `npm run typecheck:tests`', () => {
		expect(true).toBe(true);
	});
});
