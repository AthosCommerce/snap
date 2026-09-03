import { validateTemplatesConfig, validateTemplatesConfigUnlocked } from './SnapTemplates';
import type { SnapTemplatesConfig, SnapTemplatesConfigUnlocked } from './SnapTemplates';

/*
 * `validateTemplatesConfig` / `validateTemplatesConfigUnlocked` check theme overrides in two
 * places, chosen so the editor stays fast AND the compiler stays precise:
 *
 *  - The PARAMETER is a bare generic `T` whose constraint is the plain, non-generic
 *    `ThemeComponentOverrides`/`ThemeComponentOverridesUnlocked` shape. Completions while
 *    typing the literal come from that constraint (no generic inference - see
 *    `themeOverridesCompletions.test.ts`), and constraint assignability rejects wrong VALUE
 *    types on known props at any depth, right at the literal. It does NOT reject unknown
 *    KEYS: excess property checking does not survive a generic call (inference hands the
 *    constraint check a non-fresh type), and TS's weak-type rule only fires when a literal
 *    shares NO props with its target - one valid sibling and a typo'd key passes silently.
 *
 *  - The RETURN type is conditional and owns ALL key checking: full prop checking under
 *    open-named dotted selectors (typed `unknown` in the constraint), selector-key and
 *    prop-KEY existence across theme.overrides, and unknown keys across the rest of the
 *    config (conservative walk). A valid config keeps its own type `T`; an invalid one
 *    collapses to an error carrier that is not assignable to `SnapTemplatesConfig`, so it
 *    errors where it is USED (`new SnapTemplates(config)`) with the failing entries embedded
 *    in the reported type. Return types are only computed when the call is checked
 *    (diagnostics) - never on the editor's synchronous completion path, which is what keeps
 *    authoring fast.
 *
 * An earlier version intersected a generic `ThemeComponentsRestrictedSelectors<Selectors>`
 * type into the PARAMETER. It checked everything in one place, but cost ~1.5s of editor
 * completion latency per keystroke: the expensive generic was the literal's contextual
 * type, so the language service re-instantiated it on every completion request. Moving the
 * check to the parameter intersection form (`T & Checked<T>`) was also measured and
 * rejected: ~1240ms vs ~445ms per keystroke on a realistic ~40-selector config.
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

	// $children under an open-named selector: the constraint sees `unknown` for the whole
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

	// ---- key checking: excess property checking does not survive the generic call at all
	// (verified), so unknown selector keys AND unknown prop keys anywhere MUST be caught by
	// the return-type check instead ----

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

	// unknown selector key inside a NAMED selector's $children (ts-visible region)
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

	// valid named-under-named children must NOT be flagged (ts-visible walk is key-only)
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
	// the literal (EPC does not survive the generic call; the weak-type rule needs the literal
	// to share NO props with its target), so the return-type check must
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

	// unknown key OUTSIDE theme.overrides, next to valid siblings: same TS gap, caught by the
	// conservative config-key walk in the return type
	const unknownConfigKeyConfig = validateTemplatesConfig({
		config: { platform: 'other', thisIsNotARealConfigKey: 1 },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					result: { hideQuickviewButton: true },
				},
			},
		},
	});
	// @ts-expect-error - 'thisIsNotARealConfigKey' is not a config key
	const _unknownConfigKeyUse: SnapTemplatesConfig = unknownConfigKeyConfig;

	// valid config WITHOUT theme.overrides: `T['theme']['overrides']` resolves to `unknown`
	// through the constraint when the key is absent (not `undefined`) - the validity test
	// must treat that as "nothing to check", not as invalid (audit-found false positive)
	const noOverridesConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: { extends: 'base' },
	});
	const _noOverridesUse: SnapTemplatesConfig = noOverridesConfig;

	// unknown BREAKPOINT key, next to a valid one
	const unknownBreakpointConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: { result: { hideQuickviewButton: true } },
				nopeBreakpoint: { result: {} },
			},
		},
	});
	// @ts-expect-error - 'nopeBreakpoint' is not a breakpoint (default/mobile/tablet/desktop)
	const _unknownBreakpointUse: SnapTemplatesConfig = unknownBreakpointConfig;

	// unknown key deeper in the config (inside a search target element), next to valid siblings
	const unknownTargetKeyConfig = validateTemplatesConfig({
		config: { platform: 'other' },
		theme: { extends: 'base' },
		search: { targets: [{ selector: '#x', component: 'Search', thisIsNotATargetKey: 1 }] },
	});
	// @ts-expect-error - 'thisIsNotATargetKey' is not a search target key
	const _unknownTargetKeyUse: SnapTemplatesConfig = unknownTargetKeyConfig;

	// an `any`-typed value anywhere in the config must NOT trip the config-key walk
	// (mapping over `any`'s keys would flag everything - audit-found false positive)
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
});

describe('theme.overrides typing regression guards', () => {
	it('is a compile-time-only check - see typeOnly() above; run via `npm run typecheck:tests`', () => {
		expect(true).toBe(true);
	});
});
