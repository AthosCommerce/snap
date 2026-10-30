const { Linter, RuleTester } = require('eslint');
const tsParser = require('@typescript-eslint/parser');
const plugin = require('../src/index.cjs');

// one problem for each rule, each on its own line so the reports come back in a known order
const code = `
	const config: SnapTemplatesConfig = {
		components: { facet: { CustomFacet: { component: 'CustomFacet' } } },
		overrides: { default: { 'facet.size': { customComponent: 'WrongName' } } },
		theme: {
			extends: 'base',
			overrides: {
				default: {
					'search, searchHorizontal': {},
					'toolbar.top': { layout: [['searchHeader']] },
					search: { hideSidebar: true },
				},
			},
		},
		search: { targets: [{ selector: '#search', component: 'Search' }], tabs: [{ id: 'dup', siteId: 's1', param: 'p1' }] },
		autocomplete: { tabs: [{ id: 'dup', siteId: 's2', param: 'p2' }] },
	};
`;

describe('configs.recommended', () => {
	const { rules } = plugin.configs.recommended;

	it('enables every rule except the deprecated validate-config', () => {
		const ruleNames = Object.keys(plugin.rules).filter((name) => !plugin.rules[name].meta.deprecated);
		expect(Object.keys(rules).sort()).toEqual(ruleNames.map((name) => `snap-config/${name}`).sort());
		expect(rules['snap-config/validate-config']).toBeUndefined();
	});

	it('warns for hidden banners and errors for everything else', () => {
		expect(rules['snap-config/hidden-layout-banners']).toBe('warn');
		Object.entries(rules)
			.filter(([name]) => name !== 'snap-config/hidden-layout-banners')
			.forEach(([, severity]) => expect(severity).toBe('error'));
	});

	it('works as a flat config, reporting each rule once at its severity', () => {
		const linter = new Linter({ configType: 'flat' });
		const messages = linter.verify(code, [{ files: ['**/*.ts'], languageOptions: { parser: tsParser }, ...plugin.configs.recommended }], 'config.ts');

		expect(messages.map(({ ruleId, severity }) => [ruleId, severity])).toEqual([
			['snap-config/component-references', 2],
			['snap-config/override-selectors', 2],
			['snap-config/layout-banners', 2],
			['snap-config/hidden-layout-banners', 1],
			['snap-config/tabs', 2],
			['snap-config/tabs', 2],
		]);
	});
});

describe('validate-config (deprecated)', () => {
	it('is marked deprecated in favor of the split rules', () => {
		expect(plugin.rules['validate-config'].meta.deprecated).toBe(true);
		expect(plugin.rules['validate-config'].meta.replacedBy).toEqual(['component-references', 'tabs', 'override-selectors']);
	});

	new RuleTester({
		parser: require.resolve('@typescript-eslint/parser'),
		parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
	}).run('validate-config', plugin.rules['validate-config'], {
		valid: [],
		invalid: [
			{
				// the banner checks are newer than validate-config - an upgrade alone must not add errors
				// to projects still enabling it, so they come only from configs.recommended
				name: 'runs only the checks validate-config always had, not the banner checks',
				code,
				errors: [
					{ messageId: 'invalidCustomComponent' },
					{ messageId: 'mixedSelectorGroup' },
					{ messageId: 'duplicateTabId' },
					{ messageId: 'duplicateTabId' },
				],
			},
		],
	});
});
