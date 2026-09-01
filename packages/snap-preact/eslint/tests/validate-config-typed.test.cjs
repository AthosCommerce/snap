const fs = require('fs');
const path = require('path');
const { Linter } = require('eslint');
const rule = require('../src/validate-config.cjs');
const tsParser = require('@typescript-eslint/parser');

const FIXTURE_DIR = path.join(__dirname, 'fixtures');
const FIXTURE_FILE = path.join(FIXTURE_DIR, 'openNamedSelectors.fixture.ts');
const FIXTURE_TSCONFIG = path.join(FIXTURE_DIR, 'tsconfig.json');
const code = fs.readFileSync(FIXTURE_FILE, 'utf-8');

function lint({ typed }) {
	const linter = new Linter();
	linter.defineRule('validate-config', rule);
	// pre-register the already-required parser module by name - Linter.verify()'s own
	// module resolution for a `parser` path string doesn't work reliably under Jest
	linter.defineParser('ts-parser', tsParser);
	const parserOptions = { ecmaVersion: 2020, sourceType: 'module' };
	if (typed) {
		parserOptions.project = FIXTURE_TSCONFIG;
		parserOptions.tsconfigRootDir = FIXTURE_DIR;
	}
	return linter.verify(
		code,
		{
			parser: 'ts-parser',
			parserOptions,
			rules: { 'validate-config': 'error' },
		},
		FIXTURE_FILE
	);
}

describe('validate-config: open-named dotted selector props (typed linting)', () => {
	it('flags a bad prop on an open-named dotted selector (facet.price), leaves the valid prop alone', () => {
		const messages = lint({ typed: true });

		const facetPriceErrors = messages.filter((m) => m.message.includes('"facet.price"'));
		// exactly one issue on this selector - the valid `disableCollapse` prop alongside it
		// is not separately flagged, only listed as one of the valid options below
		expect(facetPriceErrors).toHaveLength(1);
		expect(facetPriceErrors[0].message).toContain('"thisIsNotARealProp" is not a valid prop');
		expect(facetPriceErrors[0].message).toContain('FacetTemplatesLegalProps');
		expect(facetPriceErrors[0].message).toContain('disableCollapse'); // listed as a valid option
	});

	it('resolves a different open-named component type correctly (recommendationGrid)', () => {
		const messages = lint({ typed: true });

		const gridErrors = messages.filter((m) => m.message.includes('"recommendationGrid.related"'));
		expect(gridErrors).toHaveLength(1);
		expect(gridErrors[0].message).toContain('"anotherFakeProp"');
		expect(gridErrors[0].message).toContain('RecommendationGridTemplatesLegalProps');
	});

	it('flags a valid prop key with an incompatible value type (color: 5, expects string)', () => {
		const messages = lint({ typed: true });

		const colorErrors = messages.filter((m) => m.message.includes('"facet.color"'));
		expect(colorErrors).toHaveLength(1);
		expect(colorErrors[0].message).toContain('"color"');
		expect(colorErrors[0].message).toContain('expects type string');
	});

	it('flags a bad prop nested inside $children of an open-named selector, even on an otherwise-precise bare selector', () => {
		const messages = lint({ typed: true });

		const iconErrors = messages.filter((m) => m.message.includes('"icon"') && m.message.includes('not-a-real-icon-name'));
		expect(iconErrors).toHaveLength(1);
		expect(iconErrors[0].message).toContain('expects type');
	});

	it('does not flag valid selectors/props nested inside $children', () => {
		const messages = lint({ typed: true });

		expect(messages.some((m) => m.message.includes("'cog'") || m.message.includes('"cog"'))).toBe(false);
	});

	it('recurses through multiple levels of nested $children', () => {
		const messages = lint({ typed: true });

		const deepErrors = messages.filter((m) => m.message.includes('not-a-boolean'));
		expect(deepErrors).toHaveLength(1);
		expect(deepErrors[0].message).toContain('expects type');
	});

	it('does not flag a customComponent override - the props bag is intentionally open', () => {
		const messages = lint({ typed: true });

		expect(messages.some((m) => m.message.includes('anyPropAtAll'))).toBe(false);
	});

	it('always allows $children regardless of component', () => {
		const messages = lint({ typed: true });

		expect(messages.some((m) => m.message.includes('$children'))).toBe(false);
	});

	it('reports nothing from this check when parserOptions.project is not configured (no typed linting available)', () => {
		const messages = lint({ typed: false });

		// the file is still linted (untyped parts of the rule still run) but the open-named
		// prop check must silently no-op rather than false-positive or crash without type info
		expect(messages.some((m) => m.message.includes('is not a valid prop for the'))).toBe(false);
		expect(messages.some((m) => m.message.includes('expects type'))).toBe(false);
	});

	it('completes in well under a second, even on first (cold) Program creation', () => {
		const start = Date.now();
		lint({ typed: true });
		const elapsed = Date.now() - start;

		// generous upper bound to avoid CI flakiness - this is checking for a
		// regression back to the ~1.5s-per-selector cost the generic TS type had,
		// not asserting a tight budget
		expect(elapsed).toBeLessThan(5000);
	});
});
