const { RuleTester } = require('eslint');
const rule = require('../src/validate-config.cjs');

const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
});

ruleTester.run('validate-config', rule, {
	valid: [
		{
			// only SnapTemplatesConfig(-Locked/Unlocked)-typed variable declarations are inspected
			name: 'ignores untyped/other-typed object literals',
			code: `
				const config = {
					components: { result: { Result: { component: 'Result' } } },
				};
				const other: SomeOtherType = {
					customComponent: 'NotRegistered',
				};
			`,
		},
		{
			name: 'customComponent/resultComponent matching registered components keys',
			code: `
				const config: SnapTemplatesConfig = {
					components: {
						result: { Result: { component: 'Result' }, CustomResult: { component: 'CustomResult' } },
						facet: { CustomFacet: { component: 'CustomFacet' } },
					},
					overrides: {
						default: {
							'facet.size': { customComponent: 'CustomFacet' },
							result: { resultComponent: 'CustomResult' },
						},
					},
				};
			`,
		},
		{
			name: 'resultComponent may use the built-in provided keys with no components.result registered',
			code: `
				const config: SnapTemplatesConfigUnlocked = {
					overrides: { default: { result: { resultComponent: 'OverlayResult' } } },
				};
			`,
		},
		{
			name: 'globalResultComponent matching registered/provided result keys',
			code: `
				const config: SnapTemplatesConfig = {
					components: { result: { CustomResult: { component: 'CustomResult' } } },
					theme: { extends: 'base', globalResultComponent: 'CustomResult' },
				};
			`,
		},
		{
			name: 'no tabs configured',
			code: `
				const config: SnapTemplatesConfigLocked = {
					search: { targets: [{ selector: '#search' }] },
					autocomplete: { targets: [{ inputSelector: '#autocomplete' }] },
				};
			`,
		},
		{
			name: 'unique ids, unique siteIds per feature, matching params across shared siteIds',
			code: `
				const config: SnapTemplatesConfig = {
					search: {
						tabs: [
							{ id: 'products', siteId: 'abc123', param: 'prod' },
							{ id: 'blog', siteId: 'xyz789', param: 'blog' },
						],
					},
					autocomplete: {
						tabs: [
							{ id: 'acProducts', siteId: 'abc123', param: 'prod' },
							{ id: 'acBlog', siteId: 'xyz789', param: 'blog' },
						],
					},
				};
			`,
		},
		{
			// `prodSiteId` and `blogSiteId` may well hold the same value, but two different
			// references are never assumed equal - only the same reference is
			name: 'different siteId references are not assumed to match',
			code: `
				const config: SnapTemplatesConfig = {
					search: {
						tabs: [
							{ id: 'products', siteId: prodSiteId, param: 'prod' },
							{ id: 'blog', siteId: blogSiteId, param: 'blog' },
						],
					},
				};
			`,
		},
		{
			// the reference might resolve to 'abc123', so the mismatch check cannot fire
			name: 'a siteId reference is never compared against a literal',
			code: `
				const config: SnapTemplatesConfig = {
					search: { tabs: [{ id: 'a', siteId: siteId, param: 'p1' }] },
					autocomplete: { tabs: [{ id: 'ac', siteId: 'abc123', param: 'p1' }] },
				};
			`,
		},
		{
			name: 'values that cannot be read statically are skipped',
			code: `
				const config: SnapTemplatesConfig = {
					search: {
						tabs: [
							{ id: 'a', siteId: getSiteId(), param: flag ? 'p1' : 'p2' },
							{ id: 'b', siteId: getSiteId(), param: flag ? 'p1' : 'p2' },
						],
					},
				};
			`,
		},
		{
			name: 'validateTemplatesConfig call with matching registered components',
			code: `
				let templatesConfig = validateTemplatesConfig({
					components: {
						result: { CustomResult: { component: 'CustomResult' } },
					},
					theme: {
						overrides: { default: { result: { resultComponent: 'CustomResult' } } },
					},
				});
			`,
		},
		{
			name: 'validateTemplatesConfigUnlocked call with matching registered components',
			code: `
				let templatesConfig = validateTemplatesConfigUnlocked({
					components: {
						facet: { CustomFacet: { component: 'CustomFacet' } },
					},
					overrides: { default: { 'facet.size': { customComponent: 'CustomFacet' } } },
				});
			`,
		},
		{
			name: 'unrelated function calls with object arguments are ignored',
			code: `
				someOtherFunction({
					overrides: { default: { 'facet.size': { customComponent: 'NotRegistered' } } },
				});
			`,
		},
		{
			name: 'inline new SnapTemplates config with matching registered components',
			code: `
				new SnapTemplates({
					components: {
						result: { CustomResult: { component: 'CustomResult' } },
					},
					theme: {
						overrides: { default: { search: { resultComponent: 'CustomResult' } } },
					},
				});
			`,
		},
		{
			name: 'unrelated constructors with object arguments are ignored',
			code: `
				new SomeOtherThing({
					overrides: { default: { 'facet.size': { customComponent: 'NotRegistered' } } },
				});
			`,
		},
		{
			name: 'multi-argument calls inside new SnapTemplates are not unwrapped',
			code: `
				new SnapTemplates(deepmerge({
					overrides: { default: { 'facet.size': { customComponent: 'NotRegistered' } } },
				}, extraConfig));
			`,
		},
	],
	invalid: [
		{
			name: 'customComponent not registered under the matching components section',
			code: `
				const config: SnapTemplatesConfig = {
					components: { facet: { CustomFacet: { component: 'CustomFacet' } } },
					overrides: { default: { 'facet.size': { customComponent: 'WrongName' } } },
				};
			`,
			errors: [{ messageId: 'invalidCustomComponent' }],
		},
		{
			name: 'customComponent used but no keys registered for that section at all',
			code: `
				const config: SnapTemplatesConfig = {
					overrides: { default: { 'facet.size': { customComponent: 'CustomFacet' } } },
				};
			`,
			errors: [{ messageId: 'noCustomComponents' }],
		},
		{
			name: 'resultComponent not among registered/provided result keys',
			code: `
				const config: SnapTemplatesConfig = {
					components: { result: { CustomResult: { component: 'CustomResult' } } },
					overrides: { default: { result: { resultComponent: 'TypoResult' } } },
				};
			`,
			errors: [{ messageId: 'invalidResultComponent' }],
		},
		{
			name: 'globalResultComponent not among registered/provided result keys',
			code: `
				const config: SnapTemplatesConfig = {
					components: { result: { CustomResult: { component: 'CustomResult' } } },
					theme: { extends: 'base', globalResultComponent: 'CustomResuelt' },
				};
			`,
			errors: [{ messageId: 'invalidGlobalResultComponent' }],
		},
		{
			name: 'duplicate tab id across search and autocomplete',
			code: `
				const config: SnapTemplatesConfig = {
					search: { tabs: [{ id: 'dup', siteId: 's1', param: 'p1' }] },
					autocomplete: { tabs: [{ id: 'dup', siteId: 's2', param: 'p2' }] },
				};
			`,
			errors: [{ messageId: 'duplicateTabId' }, { messageId: 'duplicateTabId' }],
		},
		{
			name: 'duplicate siteId within the same feature',
			code: `
				const config: SnapTemplatesConfig = {
					search: {
						tabs: [
							{ id: 'a', siteId: 's1', param: 'p1' },
							{ id: 'b', siteId: 's1', param: 'p2' },
						],
					},
				};
			`,
			errors: [{ messageId: 'duplicateSiteIdInFeature' }, { messageId: 'duplicateSiteIdInFeature' }],
		},
		{
			name: 'matching siteId across features requires matching param',
			code: `
				const config: SnapTemplatesConfig = {
					search: { tabs: [{ id: 'a', siteId: 's1', param: 'p1' }] },
					autocomplete: { tabs: [{ id: 'ac', siteId: 's1', param: 'p2' }] },
				};
			`,
			errors: [{ messageId: 'mismatchedTabParam' }],
		},
		{
			name: 'matching param across features requires matching siteId',
			code: `
				const config: SnapTemplatesConfig = {
					search: { tabs: [{ id: 'a', siteId: 's1', param: 'p1' }] },
					autocomplete: { tabs: [{ id: 'ac', siteId: 's2', param: 'p1' }] },
				};
			`,
			errors: [{ messageId: 'mismatchedTabSiteId' }],
		},
		{
			// within a feature the collision is the duplicate param itself - it is not also
			// reported as a siteId mismatch
			name: 'duplicate param within the same feature',
			code: `
				const config: SnapTemplatesConfig = {
					search: {
						tabs: [
							{ id: 'a', siteId: 's1', param: 'p1' },
							{ id: 'b', siteId: 's2', param: 'p1' },
						],
					},
				};
			`,
			errors: [
				{ messageId: 'duplicateParamInFeature', line: 5, data: { id: '"a"', param: '"p1"', feature: 'search' } },
				{ messageId: 'duplicateParamInFeature', line: 6, data: { id: '"b"', param: '"p1"', feature: 'search' } },
			],
		},
		{
			// the same reference reads the same value, so `siteId: siteId` on two tabs is a duplicate
			name: 'duplicate siteId reference and duplicate param within the same feature',
			code: `
				const config: SnapTemplatesConfig = {
					search: {
						tabs: [
							{ id: 'prod', siteId: siteId, param: 'value' },
							{ id: 'prod2', siteId: siteId, param: 'value' },
						],
					},
				};
			`,
			errors: [
				{ messageId: 'duplicateSiteIdInFeature', line: 5, data: { id: '"prod"', siteId: '`siteId`', feature: 'search' } },
				{ messageId: 'duplicateParamInFeature', line: 5 },
				{ messageId: 'duplicateSiteIdInFeature', line: 6, data: { id: '"prod2"', siteId: '`siteId`', feature: 'search' } },
				{ messageId: 'duplicateParamInFeature', line: 6 },
			],
		},
		{
			name: 'member chains and expression-free template literals are compared statically',
			code: `
				const config: SnapTemplatesConfig = {
					autocomplete: {
						tabs: [
							{ id: 'a', siteId: sites.main, param: \`prod\` },
							{ id: 'b', siteId: sites.main, param: 'prod' },
						],
					},
				};
			`,
			errors: [
				{ messageId: 'duplicateSiteIdInFeature', line: 5, data: { id: '"a"', siteId: '`sites.main`', feature: 'autocomplete' } },
				{ messageId: 'duplicateParamInFeature', line: 5, data: { id: '"a"', param: '"prod"', feature: 'autocomplete' } },
				{ messageId: 'duplicateSiteIdInFeature', line: 6 },
				{ messageId: 'duplicateParamInFeature', line: 6 },
			],
		},
		{
			name: 'matching siteId reference across features requires matching param',
			code: `
				const config: SnapTemplatesConfig = {
					search: { tabs: [{ id: 'a', siteId: siteId, param: 'prod' }] },
					autocomplete: { tabs: [{ id: 'ac', siteId: siteId, param: 'blog' }] },
				};
			`,
			errors: [{ messageId: 'mismatchedTabParam', line: 4, data: { id: '"ac"', siteId: '`siteId`', param: '"blog"', expectedParam: '"prod"' } }],
		},
		{
			name: 'validateTemplatesConfig call with an unregistered customComponent',
			code: `
				let templatesConfig = validateTemplatesConfig({
					components: { facet: { CustomFacet: { component: 'CustomFacet' } } },
					overrides: { default: { 'facet.size': { customComponent: 'WrongName' } } },
				});
			`,
			errors: [{ messageId: 'invalidCustomComponent' }],
		},
		{
			name: 'validateTemplatesConfigUnlocked call with an unregistered resultComponent',
			code: `
				let templatesConfig = validateTemplatesConfigUnlocked({
					components: { result: { CustomResult: { component: 'CustomResult' } } },
					overrides: { default: { result: { resultComponent: 'TypoResult' } } },
				});
			`,
			errors: [{ messageId: 'invalidResultComponent' }],
		},
		{
			name: 'inline new SnapTemplates config with an unregistered customComponent',
			code: `
				new SnapTemplates({
					components: { facet: { CustomFacet: { component: 'CustomFacet' } } },
					overrides: { default: { 'facet.size': { customComponent: 'WrongName' } } },
				});
			`,
			errors: [{ messageId: 'invalidCustomComponent' }],
		},
		{
			name: 'inline new SnapHybrid config with duplicate tab ids',
			code: `
				new SnapHybrid({
					search: { tabs: [{ id: 'main', siteId: 'aaa111' }, { id: 'main', siteId: 'bbb222' }] },
				});
			`,
			errors: [{ messageId: 'duplicateTabId' }, { messageId: 'duplicateTabId' }],
		},
		{
			name: 'wrapped config inside new SnapTemplates reports exactly once',
			code: `
				new SnapTemplates(validateTemplatesConfig({
					components: { facet: { CustomFacet: { component: 'CustomFacet' } } },
					overrides: { default: { 'facet.size': { customComponent: 'WrongName' } } },
				}));
			`,
			errors: [{ messageId: 'invalidCustomComponent' }],
		},
		{
			name: 'aliased wrapper call inside new SnapTemplates is unwrapped and validated',
			code: `
				new SnapTemplates(vtc({
					components: { facet: { CustomFacet: { component: 'CustomFacet' } } },
					overrides: { default: { 'facet.size': { customComponent: 'WrongName' } } },
				}));
			`,
			errors: [{ messageId: 'invalidCustomComponent' }],
		},
	],
});
