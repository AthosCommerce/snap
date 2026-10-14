const { RuleTester } = require('eslint');
const rule = require('../src/rules/tabs.cjs');

const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
});

ruleTester.run('tabs', rule, {
	valid: [
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
	],
	invalid: [
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
			name: 'inline new SnapHybrid config with duplicate tab ids',
			code: `
				new SnapHybrid({
					search: { tabs: [{ id: 'main', siteId: 'aaa111' }, { id: 'main', siteId: 'bbb222' }] },
				});
			`,
			errors: [{ messageId: 'duplicateTabId' }, { messageId: 'duplicateTabId' }],
		},
	],
});
