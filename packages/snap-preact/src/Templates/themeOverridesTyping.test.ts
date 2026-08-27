import { validateTemplatesConfig, validateTemplatesConfigUnlocked } from './SnapTemplates';

/*
 * `theme.overrides.default/mobile/tablet/desktop` on `validateTemplatesConfig` /
 * `validateTemplatesConfigUnlocked` is typed as an intersection:
 *
 *   ThemeComponentsRestrictedSelectors<Selectors> & ThemeComponentOverrides
 *
 * Both halves are load-bearing and this file exists to keep them from silently
 * regressing back to only one of them:
 *
 *  - the generic `Selectors`-inferred half resolves a selector to the props of the
 *    exact single component it targets, even for a dotted/nested selector like
 *    `facet.price` - drop it and prop typos on those selectors stop being caught
 *    (they fall back to an unchecked `unknown`).
 *  - the concrete `ThemeComponentOverrides` half is a plain, non-generic type the
 *    language service can offer completions against immediately - the generic half
 *    alone can't, since `Selectors` is unresolved until a key is fully typed. That
 *    half of the regression can't be observed by a type check, so it has its own
 *    companion test: `themeOverridesCompletions.test.ts`.
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

	// bare-key selector: bad prop value is still rejected
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

	// dotted/open-named selector: bad prop is still rejected - this is exactly the
	// precision the generic half of the intersection exists to preserve
	validateTemplatesConfig({
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					// @ts-expect-error - 'facet.price' resolves to Facet's props, this isn't one of them
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

	// unlocked: same dotted-selector precision
	validateTemplatesConfigUnlocked({
		unlocked: true,
		config: { platform: 'other' },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					// @ts-expect-error - 'facet.price' resolves to Facet's props, this isn't one of them
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
