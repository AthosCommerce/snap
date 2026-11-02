import { base, bocachica, pike, snapnco, snappy } from './index';
import type { ThemeComplete } from '../providers';

// The layout banner lint rules can't load themes, so they mirror the layout-relevant parts of
// them in static tables (eslint/src/utils/banners.cjs) to know which banners the default
// layouts render. This keeps those tables honest: change a theme's layouts without updating the
// tables and this fails.
const { buildBaseLayers, BANNER_LAYOUT_COMPONENTS, BANNER_LAYOUT_PROPS } = require('../../../eslint/src/utils/banners.cjs') as {
	buildBaseLayers: (theme: string) => Record<Breakpoint, { selector: string; props: Record<string, unknown> }[]>;
	BANNER_LAYOUT_COMPONENTS: string[];
	BANNER_LAYOUT_PROPS: string[];
};

type Breakpoint = 'default' | 'mobile' | 'tablet' | 'desktop';
type SelectorMap = Record<string, Record<string, unknown>>;

const themes: Record<string, ThemeComplete> = { base, bocachica, pike, snapnco, snappy };
const breakpoints: Breakpoint[] = ['default', 'mobile', 'tablet', 'desktop'];

/** The layout-relevant props of every selector targeting a layout-relevant component, with `$children` flattened. */
function layoutProps(selectors: SelectorMap | undefined, prefix = ''): SelectorMap {
	const result: SelectorMap = {};
	Object.entries(selectors || {}).forEach(([key, props]) => {
		const selector = prefix ? `${prefix} ${key}` : key;
		const { $children, ...ownProps } = props || {};
		const targets = selector.split(/\s*,\s*/).some((part) => {
			const segments = part.split(' ');
			// FacetsHorizontal's overflow sidebar only renders when facets overflow, so the rule doesn't count it as a banner slot
			if (segments.slice(0, -1).some((segment) => segment.split('.')[0] === 'facetsHorizontal')) return false;
			return BANNER_LAYOUT_COMPONENTS.includes(segments.pop()!.split('.')[0]);
		});
		const picked = Object.fromEntries(BANNER_LAYOUT_PROPS.filter((prop) => ownProps[prop] !== undefined).map((prop) => [prop, ownProps[prop]]));
		if (targets && Object.keys(picked).length) result[selector] = picked;
		Object.assign(result, layoutProps($children as SelectorMap, selector));
	});
	return result;
}

describe('layout banner lint rule defaults', () => {
	Object.entries(themes).forEach(([name, theme]) => {
		breakpoints.forEach((breakpoint) => {
			it(`mirrors the ${name} theme's ${breakpoint} layouts`, () => {
				const themeSelectors = (breakpoint === 'default' ? theme.components : theme.responsive?.[breakpoint]) as SelectorMap;

				const ruleSelectors: SelectorMap = {};
				buildBaseLayers(name)[breakpoint].forEach(({ selector, props }) => {
					const { mobileDisplayAt, ...rest } = props as { mobileDisplayAt?: { upTo: 'mobile' | 'tablet' | 'desktop' } };
					// the rule stores mobileDisplayAt as the breakpoint it reaches up to, the theme as a width
					ruleSelectors[selector] = mobileDisplayAt ? { ...rest, mobileDisplayAt: `${theme.variables.breakpoints[mobileDisplayAt.upTo]}px` } : rest;
				});

				expect(layoutProps(ruleSelectors)).toStrictEqual(layoutProps(themeSelectors));
			});
		});
	});
});
