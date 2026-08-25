import { parseContext, parseContextStatements } from './parseContext';

const parse = (input: string): { [key: string]: any } => {
	const result = parseContext(input);
	if (!result.success) throw new Error('expected parse to succeed');
	return Object.fromEntries(result.variables);
};

describe('parseContext', () => {
	it('parses an empty script', () => {
		expect(parse('')).toStrictEqual({});
		expect(parse('   \n\t  ')).toStrictEqual({});
	});

	it('parses string assignments with single, double and template quotes', () => {
		const vars = parse(`
			single = 'one';
			double = "two";
			template = \`three\`;
		`);
		expect(vars).toStrictEqual({ single: 'one', double: 'two', template: 'three' });
	});

	it('decodes string escape sequences like evaluation would', () => {
		const vars = parse(`
			escapes = "line1\\nline2\\ttabbed \\"quoted\\" \\\\backslash";
			unicode = "\\u0041\\x42\\u{1F600}";
			identity = "\\a\\q";
		`);
		expect(vars.escapes).toBe('line1\nline2\ttabbed "quoted" \\backslash');
		expect(vars.unicode).toBe('AB😀');
		expect(vars.identity).toBe('aq');
	});

	it('parses number assignments', () => {
		const vars = parse(`
			int = 42;
			float = 99.99;
			negative = -7;
			positive = +7;
			exponent = 1.5e3;
			negativeExponent = 2e-2;
			hex = 0xff;
			leadingDot = .5;
		`);
		expect(vars).toStrictEqual({
			int: 42,
			float: 99.99,
			negative: -7,
			positive: 7,
			exponent: 1500,
			negativeExponent: 0.02,
			hex: 255,
			leadingDot: 0.5,
		});
	});

	it('parses booleans, null and undefined', () => {
		const vars = parse(`
			yes = true;
			no = false;
			nothing = null;
			missing = undefined;
		`);
		expect(vars.yes).toBe(true);
		expect(vars.no).toBe(false);
		expect(vars.nothing).toBeNull();
		expect(vars.missing).toBeUndefined();
		expect(Object.keys(vars)).toHaveLength(4);
	});

	it('parses nested arrays and objects with trailing commas', () => {
		const vars = parse(`
			options = {
				siteId: 'abc123',
				categories: ['righteous', 'awesome', 'radical',],
				nested: {
					deep: [1, [2, 3], { four: 4 }],
				},
			};
			list = [];
			empty = {};
		`);
		expect(vars.options).toStrictEqual({
			siteId: 'abc123',
			categories: ['righteous', 'awesome', 'radical'],
			nested: { deep: [1, [2, 3], { four: 4 }] },
		});
		expect(vars.list).toStrictEqual([]);
		expect(vars.empty).toStrictEqual({});
	});

	it('allows javascript keywords, strings and numbers as object keys', () => {
		const vars = parse(`
			config = {
				class: "class",
				const: "const",
				if: true,
				"string key": 'value',
				42: 'numeric',
			};
		`);
		expect(vars.config).toStrictEqual({
			class: 'class',
			const: 'const',
			if: true,
			'string key': 'value',
			42: 'numeric',
		});
	});

	it('does not pollute the object prototype via __proto__ keys', () => {
		const vars = parse(`obj = { __proto__: { polluted: true } };`);
		expect(({} as any).polluted).toBeUndefined();
		expect(Object.getPrototypeOf(vars.obj)).toBe(Object.prototype);
		expect(vars.obj.__proto__).toStrictEqual({ polluted: true });
	});

	it('supports line and block comments', () => {
		const vars = parse(`
			// context variables go here
			siteId = 'abc123'; // trailing comment
			/* block
			   comment */
			shopper = { id: 'snapdev' /* inline */ };
		`);
		expect(vars).toStrictEqual({ siteId: 'abc123', shopper: { id: 'snapdev' } });
	});

	it('parses a comment-only script as empty', () => {
		expect(parse('// context variables go here')).toStrictEqual({});
	});

	it('tolerates missing final semicolons and newline separated statements', () => {
		const vars = parse(`
			first = 'one'
			second = 'two';;;
			third = 'three'
		`);
		expect(vars).toStrictEqual({ first: 'one', second: 'two', third: 'three' });
	});

	it('tolerates stray leading semicolons', () => {
		expect(parse(`; siteId = 'abc123';`)).toStrictEqual({ siteId: 'abc123' });
	});

	it('resolves references to previously assigned variables', () => {
		const vars = parse(`
			handle = 'shirts';
			options = { collection: handle };
		`);
		expect(vars.options).toStrictEqual({ collection: 'shirts' });
	});

	it('passes through HTML entities in strings untouched', () => {
		// platform templates encode quotes as &quot; within innerHTML - it is not entity-decoded
		const vars = parse(`category = { name : "Some &quot;Quoted&quot; Category", path : "Kitchen>Sinks" };`);
		expect(vars.category.name).toBe('Some &quot;Quoted&quot; Category');
		expect(vars.category.path).toBe('Kitchen>Sinks');
	});

	it('parses the shopify money format string', () => {
		const vars = parse(`format = '\${{amount}}';`);
		expect(vars.format).toBe('${{amount}}');
	});

	it('fails on functions', () => {
		expect(parseContext(`func = () => 'returned value';`).success).toBe(false);
		expect(parseContext(`func = function () { return 1; };`).success).toBe(false);
	});

	it('fails on member access and calls', () => {
		expect(parseContext(`value = window.dne.property;`).success).toBe(false);
		expect(parseContext(`value = getValue();`).success).toBe(false);
		expect(parseContext(`value = list[0];`).success).toBe(false);
	});

	it('fails on expressions and operators', () => {
		expect(parseContext(`value = 1 + 2;`).success).toBe(false);
		expect(parseContext(`value = 'a' + 'b';`).success).toBe(false);
		expect(parseContext(`value = condition ? 1 : 2;`).success).toBe(false);
	});

	it('fails on template literal interpolation', () => {
		expect(parseContext('value = `has ${interpolation}`;').success).toBe(false);
	});

	it('fails on var, let and const declarations', () => {
		expect(parseContext(`var value = 1;`).success).toBe(false);
		expect(parseContext(`let value = 1;`).success).toBe(false);
		expect(parseContext(`const value = 1;`).success).toBe(false);
	});

	it('fails on javascript keywords as variable names', () => {
		expect(parseContext(`class = 'nope';`).success).toBe(false);
	});

	it('fails on references to unassigned variables', () => {
		expect(parseContext(`value = somethingElse;`).success).toBe(false);
	});

	it('fails on unterminated strings and syntax errors', () => {
		expect(parseContext(`value = 'unterminated;`).success).toBe(false);
		expect(parseContext(`invalid = syntax error;`).success).toBe(false);
		expect(parseContext(`value = { broken: ;`).success).toBe(false);
	});
});

describe('parseContextStatements', () => {
	it('salvages parsable assignments from a script with unsupported code', () => {
		const vars = parseContextStatements(`
			siteId = 'abc123';
			func = () => { first(); second(); };
			shopper = { id: 'snapdev' };
			computed = window.location.href;
			currency = { code: 'EUR' };
		`);
		expect(Object.fromEntries(vars)).toStrictEqual({
			siteId: 'abc123',
			shopper: { id: 'snapdev' },
			currency: { code: 'EUR' },
		});
	});

	it('returns an empty result for a completely unparsable script', () => {
		expect(parseContextStatements(`value = 'unterminated`).size).toBe(0);
	});
});
