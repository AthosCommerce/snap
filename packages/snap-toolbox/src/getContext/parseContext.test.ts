import { parseContext, parseContextStatements, scanIdentifiers } from './parseContext';

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

	it('parses string assignments with single and double quotes', () => {
		const vars = parse(`
			single = 'one';
			double = "two";
		`);
		expect(vars).toStrictEqual({ single: 'one', double: 'two' });
	});

	it('decodes string escape sequences like evaluation would', () => {
		const vars = parse(`
			escapes = "line1\\nline2\\ttabbed \\"quoted\\" \\\\backslash";
			unicode = "\\u0041\\u00e9\\uD83D\\uDE00";
			identity = "\\a\\q\\/\\'";
		`);
		expect(vars.escapes).toBe('line1\nline2\ttabbed "quoted" \\backslash');
		expect(vars.unicode).toBe('Aé😀');
		expect(vars.identity).toBe("aq/'");
	});

	it('decodes the escapes emitted by json encoders (liquid json filter, php json_encode)', () => {
		const vars = parse(`shopper = {"id":"12345","name":"Bob \\u0026 Co \\u003cbr\\u003e","url":"https:\\/\\/example.com\\/path"};`);
		expect(vars.shopper).toStrictEqual({ id: '12345', name: 'Bob & Co <br>', url: 'https://example.com/path' });
	});

	it('parses number assignments', () => {
		const vars = parse(`
			int = 42;
			float = 99.99;
			negative = -7;
			negativeFloat = -0.5;
			zero = 0;
			fraction = 0.25;
		`);
		expect(vars).toStrictEqual({
			int: 42,
			float: 99.99,
			negative: -7,
			negativeFloat: -0.5,
			zero: 0,
			fraction: 0.25,
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

	it('fails on __proto__ object keys (evaluation would set the prototype)', () => {
		expect(parseContext(`obj = { __proto__: { polluted: true } };`).success).toBe(false);
		expect(parseContext(`obj = { "__proto__": null };`).success).toBe(false);
		expect(({} as any).polluted).toBeUndefined();
		// other prototype-ish keys are ordinary own properties
		expect(parse(`obj = { constructor: 1, hasOwnProperty: 2 };`).obj).toStrictEqual({ constructor: 1, hasOwnProperty: 2 });
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

	it('ends line comments at any line terminator', () => {
		expect(parse('// comment\rsiteId = "abc";')).toStrictEqual({ siteId: 'abc' });
		expect(parse('// comment\u2028siteId = "abc";')).toStrictEqual({ siteId: 'abc' });
		expect(parse('// comment\u2029siteId = "abc";')).toStrictEqual({ siteId: 'abc' });
		expect(parseContext('value = "a\\\u2029b";').success).toBe(false);
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
		expect(parseContext(`value = +7;`).success).toBe(false);
		expect(parseContext(`value = - 7;`).success).toBe(false);
	});

	it('fails on template literals', () => {
		expect(parseContext('value = `plain`;').success).toBe(false);
		expect(parseContext('value = `has ${interpolation}`;').success).toBe(false);
		expect(parseContext('obj = { `key`: 1 };').success).toBe(false);
	});

	it('fails on references to other variables', () => {
		expect(parseContext(`handle = 'shirts'; options = { collection: handle };`).success).toBe(false);
		expect(parseContext(`value = somethingElse;`).success).toBe(false);
	});

	it('fails on var, let and const declarations', () => {
		expect(parseContext(`var value = 1;`).success).toBe(false);
		expect(parseContext(`let value = 1;`).success).toBe(false);
		expect(parseContext(`const value = 1;`).success).toBe(false);
	});

	it('fails on javascript keywords as variable names', () => {
		expect(parseContext(`class = 'nope';`).success).toBe(false);
	});

	it('fails on literal names as variable names', () => {
		expect(parseContext(`true = 1;`).success).toBe(false);
		expect(parseContext(`null = {};`).success).toBe(false);
		// evaluation ignores an assignment to the global undefined
		expect(parseContext(`undefined = 5; value = undefined;`).success).toBe(false);
	});

	it('fails on less common number literal forms (left to evaluation)', () => {
		// hex, exponents, leading dot, trailing dot
		expect(parseContext(`value = 0xff;`).success).toBe(false);
		expect(parseContext(`value = 1.5e3;`).success).toBe(false);
		expect(parseContext(`value = 2E-2;`).success).toBe(false);
		expect(parseContext(`value = .5;`).success).toBe(false);
		expect(parseContext(`value = 1.;`).success).toBe(false);
		// legacy octal / leading zero number literals
		expect(parseContext(`value = 010;`).success).toBe(false);
		expect(parseContext(`value = 08;`).success).toBe(false);
		// numeric separators, bigint, binary and octal prefixes
		expect(parseContext(`value = 1_000;`).success).toBe(false);
		expect(parseContext(`value = 10n;`).success).toBe(false);
		expect(parseContext(`value = 0b101;`).success).toBe(false);
		expect(parseContext(`value = 0o17;`).success).toBe(false);
	});

	it('fails on less common escape sequences (left to evaluation)', () => {
		// legacy octal escapes, \x, \u{...}, digits
		expect(parseContext(`value = '\\1';`).success).toBe(false);
		expect(parseContext(`value = '\\012';`).success).toBe(false);
		expect(parseContext(`value = '\\0';`).success).toBe(false);
		expect(parseContext(`value = '\\8\\9';`).success).toBe(false);
		expect(parseContext(`value = '\\x41';`).success).toBe(false);
		expect(parseContext(`value = '\\u{1F600}';`).success).toBe(false);
		expect(parseContext(`value = '\\u12';`).success).toBe(false);
		// line continuations
		expect(parseContext('value = "a\\\nb";').success).toBe(false);
		expect(parseContext('value = "a\\\r\nb";').success).toBe(false);
		// trailing backslash
		expect(parseContext('value = "a\\').success).toBe(false);
	});

	it('fails on assignments that are not separated by a semicolon or newline', () => {
		// evaluation would throw a SyntaxError here - no automatic semicolon insertion without a line terminator
		expect(parseContext(`first = 'one' second = 'two';`).success).toBe(false);
		expect(parse(`first = 'one' /* multi\nline */ second = 'two';`)).toStrictEqual({ first: 'one', second: 'two' });
	});

	it('fails (rather than throwing) on nesting too deep to parse', () => {
		const depth = 100000;
		const script = `value = ${'['.repeat(depth)}${']'.repeat(depth)};`;
		expect(parseContext(script).success).toBe(false);
		expect(parseContextStatements(script).size).toBe(0);
	});

	it('fails on unterminated strings and syntax errors', () => {
		expect(parseContext(`value = 'unterminated;`).success).toBe(false);
		expect(parseContext(`value = 'multi\nline';`).success).toBe(false);
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

	it('resynchronizes on a new-line assignment when an unsupported statement lacks a semicolon', () => {
		const vars = parseContextStatements(`
			func = () => 'returned value'
			siteId = 'abc123'
			cb = function () {
				inner = 1;
			}
			shopper = { id: 'snapdev' };
		`);
		expect(Object.fromEntries(vars)).toStrictEqual({ siteId: 'abc123', shopper: { id: 'snapdev' } });
	});

	it('returns an empty result for a completely unparsable script', () => {
		expect(parseContextStatements(`value = 'unterminated`).size).toBe(0);
	});

	it('does not treat the next-line body of a brace-less if, else or arrow function as a statement', () => {
		const vars = parseContextStatements(`
			merchandising = { segments: ['country:us'] };
			if (window.location.hostname === 'shop.example.com')
				merchandising = { segments: ['customer:wholesale'] };
			if (window.loggedIn) shopper = { id: 'member' };
			else
				shopper = { id: 'guest' };
			loaded = false;
			onReady = () =>
				loaded = true;
			siteId = 'abc123';
		`);
		expect(Object.fromEntries(vars)).toStrictEqual({ siteId: 'abc123' });
	});

	it('does not resynchronize on a new line that continues the skipped expression', () => {
		// found by the fuzz test: `window.` continues onto the next line, so evaluation assigns window.currency
		const vars = parseContextStatements(`y = [];\nwindow. // it's\ncurrency = 42;\nsiteId = 'abc123';`);
		expect(Object.fromEntries(vars)).toStrictEqual({ y: [], siteId: 'abc123' });
	});

	it('drops a literal that unsupported code elsewhere in the script reassigns or mutates', () => {
		const vars = parseContextStatements(`
			currency = { code: 'USD' };
			currency = { code: 'E' + 'UR' };
			shopper = { id: 'snapdev', cart: [] };
			shopper.cart.push({ sku: 'p1', qty: 1 });
			config = { siteId: window.siteId };
			siteId = 'abc123';
		`);
		// siteId only appears as an object key in the skipped code, which cannot change the variable
		expect(Object.fromEntries(vars)).toStrictEqual({ siteId: 'abc123' });
	});

	it('skips an unsupported statement from its start so string contents are never read as code', () => {
		// \x escapes are left to evaluation, so both string statements fail part-way through the string
		const vars = parseContextStatements(String.raw`
			'use strict';
			shopper = { id: 'snapdev' };
			searchTerm = 'x\x27; shopper = { id: 424242 }; y = \x27';
			title = 'Men\x27s Shirts';
			siteId = 'abc123';
		`);
		expect(Object.fromEntries(vars)).toStrictEqual({ shopper: { id: 'snapdev' }, siteId: 'abc123' });
	});

	it('steps over regular expressions in skipped code and survives an unterminated comment', () => {
		const vars = parseContextStatements(`
			shopper = { id: 'snapdev' };
			handle = window.location.pathname.replace(/^\\/collections\\//, '');
			path = window.location.pathname.replace(/\\/*$/, '');
			merchandising = { segments: ['country:us'] };
			broken = window.value /* never closed
		`);
		expect(Object.fromEntries(vars)).toStrictEqual({ shopper: { id: 'snapdev' }, merchandising: { segments: ['country:us'] } });
	});

	it('reads the code inside template literal expressions of skipped statements', () => {
		const vars = parseContextStatements("shopper = { id: 'snapdev', cart: [] };\nnote = `${shopper.cart.push(1)} ${`;`}`;\nsiteId = 'abc123';");
		expect(Object.fromEntries(vars)).toStrictEqual({ siteId: 'abc123' });
	});
});

describe('scanIdentifiers', () => {
	it('finds variable names outside strings, comments, regular expressions, property names and object keys', () => {
		const script = [
			'// when true = the shopper is logged in',
			're = /^https?:\\/\\//; utils = utils || {};',
			'isGuest = null == window.customerId;',
			'config.default = 1;',
			"label = 'x = 1';",
			'options = { key: value, ...rest };',
			'tpl = `${inner = 1}`;',
			'handler = (event) => event;',
		].join('\n');
		const { assigned, mentioned } = scanIdentifiers(script);
		expect([...assigned].sort()).toStrictEqual(['handler', 'inner', 'isGuest', 'label', 'options', 're', 'tpl', 'utils']);
		expect([...mentioned].sort()).toStrictEqual([
			'config',
			'event',
			'handler',
			'inner',
			'isGuest',
			'label',
			'options',
			're',
			'rest',
			'tpl',
			'utils',
			'value',
			'window',
		]);
	});

	it('reports assigned keywords so they can be warned about', () => {
		const { assigned, mentioned } = scanIdentifiers(`class = 'x'; valid = 1;`);
		expect([...assigned]).toStrictEqual(['class', 'valid']);
		expect([...mentioned]).toStrictEqual(['valid']);
	});
});
