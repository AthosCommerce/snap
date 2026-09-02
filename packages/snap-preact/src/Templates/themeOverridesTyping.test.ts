import { validateTemplatesConfig, validateTemplatesConfigUnlocked } from './SnapTemplates';

/*
 * `theme.overrides.default/mobile/tablet/desktop` on `validateTemplatesConfig` /
 * `validateTemplatesConfigUnlocked` is typed against the plain, non-generic
 * `ThemeComponentOverrides`/`ThemeComponentOverridesUnlocked` alias - fast for the editor
 * (real-time key/prop completions, no generic inference - see `themeOverridesCompletions.test.ts`),
 * and precise for every selector EXCEPT the dotted/open-named form of a handful of
 * component types (`facet.<custom>`, `variantSelection.<custom>`, `recommendation.<custom>`,
 * and the `recommendationBundle*`/`recommendationGrid` variants) - those resolve to an
 * unchecked `unknown` here, because their suffix is a genuinely arbitrary user-supplied
 * string rather than a known finite union. Bad props on THOSE specific selectors are
 * instead caught by the `validate-config` ESLint rule's typed-linting check, not the TS
 * compiler - see eslint/src/validate-config.cjs.
 *
 * An earlier version of this typing intersected in a second, generic
 * `ThemeComponentsRestrictedSelectors<Selectors>` type to also catch bad props on those
 * dotted selectors at the TS level. It worked, but cost ~1.5s of editor completion latency
 * per keystroke (profiled: dominated by generic inference over the large,
 * template-literal-heavy selector pattern types in themeComponents.ts). This file exists
 * to keep the CURRENT, intentionally narrower guarantee from silently regressing further -
 * every case below should keep behaving exactly as asserted.
 *
 * These callbacks are never invoked - only ever type-checked. `npm run typecheck:tests`
 * (`tsc --noEmit -p tsconfig.test.json`) is the gate that runs this, since ts-jest runs
 * transpile-only (isolatedModules) and never sees these errors.
 */
function typeOnly(_fn: () => void) {}

typeOnly(() => {
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

	// bare-key selector: bad prop value is still rejected - unaffected by the open-named
	// trade-off above, bare keys were always resolved precisely without any generic inference
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

	// dotted/open-named selector: valid Facet prop compiles
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'facet.price': { disableCollapse: true },
				},
			},
		},
	});

	// dotted/open-named selector: a bad prop is INTENTIONALLY not caught by TS here - this
	// is the narrow, deliberate gap the `validate-config` ESLint rule fills instead. If this
	// starts erroring, the type has regained precision here (fine) but this assertion needs
	// updating to match; if a *different* selector below stops erroring, something regressed.
	validateTemplatesConfig({
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

	// unlocked: same bare-key precision
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

	// unlocked: same dotted-selector gap as locked, intentionally unchecked by TS
	validateTemplatesConfigUnlocked({
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

	// unlocked: an open-named selector (e.g. `facet.<custom>`) with `customComponent`
	// set unlocks an arbitrary prop bag, since the swapped-in component's props aren't known
	validateTemplatesConfigUnlocked({
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
});

describe('theme.overrides typing regression guards', () => {
	it('is a compile-time-only check - see typeOnly() above; run via `npm run typecheck:tests`', () => {
		expect(true).toBe(true);
	});
});
