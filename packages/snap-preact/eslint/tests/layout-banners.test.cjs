const { RuleTester } = require('eslint');
const layoutBanners = require('../src/rules/layout-banners.cjs');
const hiddenLayoutBanners = require('../src/rules/hidden-layout-banners.cjs');

const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
});

// a config targeting the given templates, with `overrides` as theme.overrides
const config = ({ search, autocomplete, overrides, theme = 'base' }) => `
	const config: SnapTemplatesConfig = {
		theme: { extends: '${theme}', overrides: ${overrides} },
		${search ? `search: { targets: [{ selector: '#search', component: '${search}' }] },` : ''}
		${autocomplete ? `autocomplete: { targets: [{ inputSelector: 'input', component: '${autocomplete}' }] },` : ''}
	};
`;

ruleTester.run('layout-banners', layoutBanners, {
	valid: [
		{
			name: 'no overrides',
			code: config({ search: 'Search', autocomplete: 'AutocompleteModal', overrides: '{}' }),
		},
		{
			name: 'toolbar layout that keeps its banner',
			code: config({ search: 'Search', overrides: `{ default: { 'toolbar.top': { layout: [['searchHeader'], ['banner.header']] } } }` }),
		},
		{
			name: 'banner moved to another toolbar of the same template',
			code: config({
				search: 'Search',
				overrides: `{
					default: {
						'toolbar.top': { layout: [['searchHeader']] },
						'toolbar.bottom': { layout: [['banner.header'], ['banner.footer'], ['pagination']] },
					},
				}`,
			}),
		},
		{
			name: 'overrides for templates that are not targeted are ignored',
			code: config({ search: 'Search', overrides: `{ default: { 'searchCollapsible toolbar.top': { layout: [['searchHeader']] } } }` }),
		},
		{
			// SearchCollapsible keeps banner.banner in its top toolbar on desktop, but Search does not
			name: 'a top toolbar without banner.banner is fine for Search',
			code: config({ search: 'Search', overrides: `{ default: { 'toolbar.top': { layout: [['banner.header'], ['searchHeader']] } } }` }),
		},
		{
			name: 'a more specific override that keeps the banner beats a general one that drops it',
			code: config({
				search: 'Search',
				overrides: `{
					default: {
						'toolbar.top': { layout: [['searchHeader']] },
						'search toolbar.top': { layout: [['banner.header'], ['searchHeader']] },
					},
				}`,
			}),
		},
		{
			// SearchHorizontal hides its sidebar everywhere but mobile, so it never renders the left banner there
			name: 'sidebar layout without banner.left at a breakpoint where the sidebar is hidden',
			code: config({ search: 'SearchHorizontal', overrides: `{ desktop: { sidebar: { layout: [['facets']] } } }` }),
		},
		{
			name: '$children nested override that keeps its banner',
			code: config({
				search: 'Search',
				overrides: `{ default: { search: { $children: { 'toolbar.bottom': { layout: [['banner.footer'], ['pagination']] } } } } }`,
			}),
		},
		{
			name: 'autocomplete layout with explicit banner modules',
			code: config({
				autocomplete: 'AutocompleteModal',
				overrides: `{ default: { autocompleteModal: { layout: [['c1', 'c3'], ['banner.left']] } } }`,
			}),
		},
		{
			name: 'autocomplete facets moved into another column still render the left banner',
			code: config({
				autocomplete: 'AutocompleteModal',
				overrides: `{
					default: {
						autocompleteModal: {
							layout: [['c1', 'c3']],
							column3: { layout: [['facets'], ['content']], width: 'auto' },
						},
					},
				}`,
			}),
		},
		{
			// the default 'mobile' layout has no facets, so it never rendered the left banner either
			name: 'autocomplete mobile layout without facets',
			code: config({ autocomplete: 'AutocompleteModal', overrides: `{ mobile: { autocompleteModal: { layout: [['content'], ['termsList']] } } }` }),
		},
		{
			name: 'excludeBanners with every banner placed explicitly',
			code: config({
				autocomplete: 'AutocompleteFixed',
				overrides: `{
					default: {
						autocompleteFixed: {
							excludeBanners: true,
							layout: [['banner.header'], ['banner.banner'], ['c1', 'c2', 'c3'], ['banner.footer'], ['banner.left']],
						},
					},
				}`,
			}),
		},
		{
			name: 'layout from a variable is not checked',
			code: config({ search: 'Search', overrides: `{ default: { 'toolbar.top': { layout: topLayout } } }` }),
		},
		{
			name: 'spread in a selector map is not checked',
			code: config({ search: 'Search', overrides: `{ default: { ...sharedOverrides, 'toolbar.top': { layout: [['searchHeader']] } } }` }),
		},
		{
			name: 'spread after an explicit layout may replace it',
			code: config({ search: 'Search', overrides: `{ default: { 'toolbar.top': { layout: [['searchHeader']], ...topToolbar } } }` }),
		},
		{
			name: 'non-literal target component is not checked',
			code: `
				const config: SnapTemplatesConfig = {
					theme: { extends: 'base', overrides: { default: { 'toolbar.top': { layout: [['searchHeader']] } } } },
					search: { targets: [{ selector: '#search', component: searchComponent }] },
				};
			`,
		},
		{
			// the default layouts differ per theme, so an unknown theme leaves nothing to compare against
			name: 'theme extends from a variable is not checked',
			code: `
				const config: SnapTemplatesConfig = {
					theme: { extends: themeName, overrides: { default: { 'toolbar.top': { layout: [['searchHeader']] } } } },
					search: { targets: [{ selector: '#search', component: 'Search' }] },
				};
			`,
		},
		{
			name: 'spread in theme after extends may replace it',
			code: `
				const config: SnapTemplatesConfig = {
					theme: { extends: 'base', ...sharedTheme, overrides: { default: { 'toolbar.top': { layout: [['searchHeader']] } } } },
					search: { targets: [{ selector: '#search', component: 'Search' }] },
				};
			`,
		},
		{
			name: 'customComponent toolbar is not checked',
			code: `
				const config: SnapTemplatesConfig = {
					components: { toolbar: { CustomToolbar: async () => CustomToolbar } },
					theme: { extends: 'base', overrides: { default: { 'toolbar.top': { customComponent: 'CustomToolbar', layout: [['searchHeader']] } } } },
					search: { targets: [{ selector: '#search', component: 'Search' }] },
				};
			`,
		},
		{
			// hide props are reported by hidden-layout-banners, which projects run as a warning
			name: 'hide props are left to hidden-layout-banners',
			code: config({
				search: 'Search',
				autocomplete: 'AutocompleteModal',
				overrides: `{ default: { search: { hideSidebar: true, hideTopToolbar: true }, autocompleteModal: { excludeBanners: true } } }`,
			}),
		},
		{
			// base renders [['c1', 'c3']] on tablet (no left banner), pike renders 'desktop' (with facets)
			name: 'tablet autocomplete layout without facets on the base theme',
			code: config({ autocomplete: 'AutocompleteModal', overrides: `{ tablet: { autocompleteModal: { layout: [['c1', 'c3']] } } }` }),
		},
	],
	invalid: [
		{
			name: 'toolbar layout that drops its banner',
			code: config({ search: 'Search', overrides: `{ default: { 'toolbar.top': { layout: [['searchHeader']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'toolbar.top', banners: "'banner.header'", where: 'Search (all breakpoints)' },
				},
			],
		},
		{
			name: 'sidebar layout that drops banner.left',
			code: config({ search: 'Search', overrides: `{ default: { sidebar: { layout: [['filterSummary'], ['facets']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'sidebar', banners: "'banner.left'", where: 'Search (all breakpoints)' },
				},
			],
		},
		{
			// SearchCollapsible's default/desktop layouts keep banner.banner in the top toolbar (the middle toolbar is empty)
			name: 'a top toolbar without banner.banner drops it from SearchCollapsible on desktop',
			code: config({ search: 'SearchCollapsible', overrides: `{ default: { 'toolbar.top': { layout: [['banner.header'], ['searchHeader']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'toolbar.top', banners: "'banner.banner'", where: 'SearchCollapsible (default, desktop)' },
				},
			],
		},
		{
			name: 'one selector that drops several banners is reported once',
			code: config({ search: 'Search', overrides: `{ default: { toolbar: { layout: [['searchHeader'], ['pagination']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: {
						prop: 'layout',
						selector: 'toolbar',
						banners: "'banner.header', 'banner.banner', 'banner.footer'",
						where: 'Search (all breakpoints)',
					},
				},
			],
		},
		{
			name: 'a more specific override that drops the banner beats a general one that keeps it',
			code: config({
				search: 'Search',
				overrides: `{
					default: {
						'toolbar.top': { layout: [['banner.header'], ['searchHeader']] },
						'search toolbar.top': { layout: [['searchHeader']] },
					},
				}`,
			}),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'search toolbar.top', banners: "'banner.header'", where: 'Search (all breakpoints)' },
				},
			],
		},
		{
			name: 'a breakpoint override only affects its breakpoint',
			code: config({ search: 'Search', overrides: `{ mobile: { 'toolbar.middle': { layout: [['sortBy']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'toolbar.middle', banners: "'banner.banner'", where: 'Search (mobile)' },
				},
			],
		},
		{
			name: 'a breakpoint override that keeps the banner beats a default override that drops it',
			code: config({
				search: 'Search',
				overrides: `{
					default: { 'toolbar.top': { layout: [['searchHeader']] } },
					mobile: { 'toolbar.top': { layout: [['banner.header']] } },
				}`,
			}),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'toolbar.top', banners: "'banner.header'", where: 'Search (default, tablet, desktop)' },
				},
			],
		},
		{
			name: '$children nested override that drops its banner',
			code: config({ search: 'Search', overrides: `{ default: { search: { $children: { 'toolbar.bottom': { layout: [['pagination']] } } } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'search toolbar.bottom', banners: "'banner.footer'", where: 'Search (all breakpoints)' },
				},
			],
		},
		{
			name: 'comma group that drops banners from two templates',
			code: `
				const config: SnapTemplatesConfig = {
					theme: { extends: 'base', overrides: { default: { 'search sidebar, searchCollapsible sidebar': { layout: [['facets']] } } } },
					search: { targets: [{ selector: '#a', component: 'Search' }, { selector: '#b', component: 'SearchCollapsible' }] },
				};
			`,
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: {
						prop: 'layout',
						selector: 'search sidebar, searchCollapsible sidebar',
						banners: "'banner.left'",
						where: 'Search (all breakpoints), SearchCollapsible (all breakpoints)',
					},
				},
			],
		},
		{
			name: 'autocomplete layout without the facets column drops the left banner',
			code: config({ autocomplete: 'AutocompleteModal', overrides: `{ default: { autocompleteModal: { layout: [['c1', 'c3']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'autocompleteModal', banners: "'banner.left'", where: 'AutocompleteModal (default, desktop)' },
				},
			],
		},
		{
			// override props replace the whole column object, so column2 loses its default layout
			name: 'autocomplete column override without a layout',
			code: config({ autocomplete: 'AutocompleteFixed', overrides: `{ default: { autocompleteFixed: { column2: { width: '200px' } } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'column2', selector: 'autocompleteFixed', banners: "'banner.left'", where: 'AutocompleteFixed (default, desktop)' },
				},
			],
		},
		{
			name: 'autocomplete prebuilt terms layout set on AutocompleteLayout',
			code: config({ autocomplete: 'AutocompleteSlideout', overrides: `{ default: { autocompleteLayout: { layout: 'terms' } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: {
						prop: 'layout',
						selector: 'autocompleteLayout',
						banners: "'banner.header', 'banner.banner', 'banner.footer'",
						where: 'AutocompleteSlideout (all breakpoints)',
					},
				},
			],
		},
		{
			name: 'tablet autocomplete layout without facets on pike, whose tablet default has them',
			code: config({ theme: 'pike', autocomplete: 'AutocompleteModal', overrides: `{ tablet: { autocompleteModal: { layout: [['c1', 'c3']] } } }` }),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'autocompleteModal', banners: "'banner.left'", where: 'AutocompleteModal (tablet)' },
				},
			],
		},
		{
			// base renders [['c1', 'c3']] on tablet too, so this is only reported if pike is the theme compared against
			name: 'theme extends set after a spread is still read',
			code: `
				const config: SnapTemplatesConfig = {
					theme: { ...sharedTheme, extends: 'pike', overrides: { tablet: { autocompleteModal: { layout: [['c1', 'c3']] } } } },
					autocomplete: { targets: [{ inputSelector: 'input', component: 'AutocompleteModal' }] },
				};
			`,
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'autocompleteModal', banners: "'banner.left'", where: 'AutocompleteModal (tablet)' },
				},
			],
		},
		{
			name: 'the override responsible is blamed, not one that only moved banners around',
			code: config({
				search: 'Search',
				overrides: `{
					default: {
						'toolbar.top': { layout: [['banner.header'], ['banner.banner']] },
						'toolbar.middle': { layout: [['sortBy']] },
						'toolbar.bottom': { layout: [['pagination']] },
					},
				}`,
			}),
			errors: [
				{
					messageId: 'missingLayoutBanners',
					data: { prop: 'layout', selector: 'toolbar.bottom', banners: "'banner.footer'", where: 'Search (all breakpoints)' },
				},
			],
		},
	],
});

ruleTester.run('hidden-layout-banners', hiddenLayoutBanners, {
	valid: [
		{
			name: 'no overrides',
			code: config({ search: 'Search', autocomplete: 'AutocompleteModal', overrides: '{}' }),
		},
		{
			// layouts that leave a banner out are layout-banners' error, not this rule's warning
			name: 'layouts that drop banners are left to layout-banners',
			code: config({
				search: 'Search',
				overrides: `{ default: { 'toolbar.top': { layout: [['searchHeader']] }, sidebar: { layout: [['facets']] } } }`,
			}),
		},
		{
			// SearchHorizontal already hides its sidebar outside mobile, so hiding it there loses nothing
			name: 'hiding a sidebar the defaults already hide',
			code: config({ search: 'SearchHorizontal', overrides: `{ desktop: { searchHorizontal: { hideSidebar: true } } }` }),
		},
		{
			name: 'hiding a toolbar after moving its banner to another toolbar',
			code: config({
				search: 'Search',
				overrides: `{
					default: {
						search: { hideTopToolbar: true },
						'toolbar.middle': { layout: [['banner.header'], ['sortBy'], ['banner.banner']] },
					},
				}`,
			}),
		},
		{
			name: 'excludeBanners with every banner placed explicitly',
			code: config({
				autocomplete: 'AutocompleteFixed',
				overrides: `{
					default: {
						autocompleteFixed: {
							excludeBanners: true,
							layout: [['banner.header'], ['banner.banner'], ['c1', 'c2', 'c3'], ['banner.footer'], ['banner.left']],
						},
					},
				}`,
			}),
		},
	],
	invalid: [
		{
			name: 'hiding the sidebar hides banner.left',
			code: config({ search: 'Search', overrides: `{ default: { search: { hideSidebar: true } } }` }),
			errors: [
				{
					messageId: 'hiddenLayoutBanners',
					data: { prop: 'hideSidebar', selector: 'search', banners: "'banner.left'", where: 'Search (all breakpoints)' },
				},
			],
		},
		{
			name: 'hiding a toolbar at one breakpoint hides its banner there',
			code: config({ search: 'SearchCollapsible', overrides: `{ mobile: { searchCollapsible: { hideMiddleToolbar: true } } }` }),
			errors: [
				{
					messageId: 'hiddenLayoutBanners',
					data: { prop: 'hideMiddleToolbar', selector: 'searchCollapsible', banners: "'banner.banner'", where: 'SearchCollapsible (mobile)' },
				},
			],
		},
		{
			name: 'autocomplete excludeBanners without explicit banner modules',
			code: config({ autocomplete: 'AutocompleteModal', overrides: `{ default: { autocompleteModal: { excludeBanners: true } } }` }),
			errors: [
				{
					messageId: 'hiddenLayoutBanners',
					data: {
						prop: 'excludeBanners',
						selector: 'autocompleteModal',
						banners: "'banner.header', 'banner.banner', 'banner.footer', 'banner.left'",
						where: 'AutocompleteModal (all breakpoints)',
					},
				},
			],
		},
		{
			name: 'inline config passed to new SnapTemplates',
			code: `
				new SnapTemplates({
					theme: { extends: 'base', overrides: { default: { search: { hideBottomToolbar: true } } } },
					search: { targets: [{ selector: '#search', component: 'Search' }] },
				});
			`,
			errors: [
				{
					messageId: 'hiddenLayoutBanners',
					data: { prop: 'hideBottomToolbar', selector: 'search', banners: "'banner.footer'", where: 'Search (all breakpoints)' },
				},
			],
		},
	],
});
