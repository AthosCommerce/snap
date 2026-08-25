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
			name: 'matching param within the same feature requires matching siteId',
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
			errors: [{ messageId: 'mismatchedTabSiteId' }],
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
