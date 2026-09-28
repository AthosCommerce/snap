import { parseContext, parseContextStatements, scanIdentifiers, JAVASCRIPT_KEYWORDS } from './parseContext';

/**
 * Differential test: whenever the static parser claims success, evaluating the same script the way
 * `getContext` does (`new Function`) must succeed and produce identical values. Any divergence is a
 * regression for every integration, since the parser is the primary path for all context scripts.
 * Likewise every value the lenient parser salvages (used when a CSP blocks evaluation) must equal what
 * evaluation produces whenever the script evaluates without error.
 *
 * Deterministic - tune with `FUZZ_ITERATIONS` (per phase) and `FUZZ_SEED` for longer local runs.
 */

const ITERATIONS = Number(process.env.FUZZ_ITERATIONS) || 1500;
const SEED = process.env.FUZZ_SEED ? Number(process.env.FUZZ_SEED) : 1;

type Evaluated = { syntaxError?: string; failed: boolean; values: Record<string, any> };

// mirrors the evaluation branch of getContext: caller names + detected assignments, de-duped, keywords dropped
function evaluateLikeGetContext(script: string, requested: string[]): Evaluated {
	const combined = requested.concat(Array.from(scanIdentifiers(script).assigned));
	const evaluateVars = combined.filter((item, index) => combined.indexOf(item) === index && !JAVASCRIPT_KEYWORDS.has(item));

	const values: Record<string, any> = {};
	let syntaxError: string | undefined;
	let failed = false;
	evaluateVars.forEach((name) => {
		try {
			const fn = new Function(`
					var ${evaluateVars.join(', ')};
					${script}
					return ${name};
				`);
			values[name] = fn();
		} catch (err) {
			// compared by name: errors thrown by `new Function` code come from the jest sandbox realm
			if ((err as Error)?.name === 'SyntaxError') syntaxError = (err as Error).message;
			failed = true;
			values[name] = { __error: (err as Error)?.name };
		}
	});
	return { values, syntaxError, failed };
}

// canonical representation for comparison - values evaluated via `new Function` come from the jest sandbox realm, so
// `toStrictEqual` rejects them on prototype identity; this keeps the strictness that matters (undefined, -0, NaN, key order)
function canonical(value: any): string {
	if (typeof value === 'number') return Object.is(value, -0) ? '-0' : `${typeof value}:${value}`;
	if (value === null || typeof value !== 'object') return `${typeof value}:${String(value)}`;
	if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
	return `{${Object.keys(value)
		.map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`)
		.join(',')}}`;
}

// deterministic PRNG (mulberry32)
let seed = SEED;
const rnd = (): number => {
	seed = (seed + 0x6d2b79f5) | 0;
	let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
	t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
	return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const pick = <T>(list: T[]): T => list[Math.floor(rnd() * list.length)];

const NEWLINES = ['\n', '\r\n', '\r', '\u2028', '\u2029', '\n\n'];
const SPACES = ['', ' ', '  ', '\t', ' \t '];
const NAMES = ['siteId', 'shopper', 'merchandising', 'currency', 'a', '_b', '$c', 'd1', 'items', 'config', 'x', 'y'];
// generated scripts use only the supported grammar; unsupported forms live in EXOTIC and are injected by mutation
const STRING_PARTS = [
	'a',
	'z',
	' ',
	'0',
	'-',
	'_',
	'/',
	':',
	'.',
	'&amp;',
	'<',
	'>',
	'{',
	'}',
	'$',
	'{}',
	'${',
	'\\n',
	'\\t',
	'\\r',
	'\\b',
	'\\f',
	'\\v',
	'\\\\',
	"\\'",
	'\\"',
	'\\`',
	'\\$',
	'\\u00e9',
	'\\a',
	'é',
	'\u2028',
	'\u2029',
	'//',
	'/*',
	'*/',
	';',
	'=',
	'μ',
];
const KEYS = ['1', '2.5', '1.50', '2.0', 'default', 'class', 'constructor', 'toString', 'hasOwnProperty', "'quoted key'", '"other-key"'];
const NUMBERS = ['0', '1', '42', '3.14', '9007199254740993', '-1', '-0', '0.0', '0.5'];
// unsupported forms the parser must reject (evaluation handles them): template literals, exotic numbers and escapes,
// computed keys, variable references - some are syntax errors when evaluated, which the parser must also not accept
const EXOTIC = [
	'`tpl`',
	'`t${x}`',
	'0x1F',
	'0XfF',
	'1e3',
	'2.5E-2',
	'1e400',
	'.5',
	'1.',
	'+7',
	'- 2',
	'010',
	'1_000',
	'10n',
	'\\x41',
	'\\u{1F600}',
	'\\0',
	'\\1',
	'\\\n',
	'[x]',
	'siteId',
	'a',
];
const COMMENTS = ['// c\n', '// c = 1\n', '/* b */', '/* multi\n line = 2 */', "// it's\n", '/* "q */', ''];
const JUNK = [
	'(',
	')',
	'.',
	'+',
	'-',
	'=',
	';',
	',',
	':',
	'{',
	'}',
	'[',
	']',
	"'",
	'"',
	'`',
	'\\',
	'/',
	'*',
	'x',
	'1',
	' ',
	'\n',
	'$',
	'new ',
	'this',
	'window.',
	'()',
	'=>',
	'${',
	'0',
	'n',
	'_',
	// statement shapes the lenient parser has to skip without misreading what follows
	'if (a)\n',
	'else\n',
	'() =>\n',
	'.push(1)',
	'+= 1',
	"'use strict';",
	'/x/',
	'`${a}`',
	'a.b = 1;',
];

function genString(): string {
	const quote = pick(["'", '"']);
	let body = '';
	const length = Math.floor(rnd() * 8);
	for (let i = 0; i < length; i++) {
		const part = pick(STRING_PARTS);
		body += part === quote ? '\\' + part : part;
	}
	return quote + body + quote;
}

function genValue(depth: number): string {
	const roll = rnd();
	if (depth > 3 || roll < 0.35) return genString();
	if (roll < 0.5) return pick(NUMBERS);
	if (roll < 0.62) return pick(['true', 'false', 'null', 'undefined']);
	const length = Math.floor(rnd() * 4);
	const parts: string[] = [];
	if (roll < 0.82) {
		for (let i = 0; i < length; i++) parts.push(genValue(depth + 1));
		return '[' + pick(SPACES) + parts.join(',' + pick(SPACES) + pick(['', pick(NEWLINES)])) + (length && rnd() < 0.3 ? ',' : '') + pick(SPACES) + ']';
	}
	for (let i = 0; i < length; i++) {
		parts.push(pick(NAMES.concat(KEYS)) + pick(SPACES) + ':' + pick(SPACES) + genValue(depth + 1));
	}
	return (
		'{' +
		pick(['', pick(NEWLINES)]) +
		parts.join(',' + pick(['', pick(NEWLINES), pick(SPACES)])) +
		(length && rnd() < 0.3 ? ',' : '') +
		pick(['', pick(NEWLINES)]) +
		'}'
	);
}

function genScript(): string {
	const statements = 1 + Math.floor(rnd() * 6);
	let script = pick(['', pick(NEWLINES), pick(COMMENTS)]);
	for (let i = 0; i < statements; i++) {
		script += pick(COMMENTS) + pick(SPACES) + pick(NAMES) + pick(SPACES) + '=' + pick(SPACES) + genValue(0);
		script += pick([';', ';', ';' + pick(NEWLINES), pick(NEWLINES), ' ;', pick(NEWLINES) + ';', '']) + pick(COMMENTS);
	}
	return script + pick(['', ';', pick(NEWLINES)]);
}

function mutate(script: string): string {
	const edits = 1 + Math.floor(rnd() * 3);
	for (let i = 0; i < edits; i++) {
		const at = Math.floor(rnd() * (script.length + 1));
		const roll = rnd();
		const insert = rnd() < 0.3 ? pick(EXOTIC) : pick(JUNK);
		if (roll < 0.5) script = script.slice(0, at) + insert + script.slice(at);
		else if (roll < 0.8) script = script.slice(0, at) + script.slice(at + 1);
		else script = script.slice(0, at) + insert + script.slice(at + 1);
	}
	return script;
}

function expectEquivalence(script: string): void {
	const parsed = parseContext(script);
	const salvaged = parseContextStatements(script);
	if (!parsed.success) return expectSalvageMatchesEvaluation(script, salvaged);

	const names = Array.from(parsed.variables.keys());
	const evaluated = evaluateLikeGetContext(script, names);
	if (evaluated.syntaxError) {
		throw new Error(`parser accepted a script that evaluation rejects (${evaluated.syntaxError}):\n${JSON.stringify(script)}`);
	}

	const parsedValues: Record<string, any> = {};
	Object.keys(evaluated.values).forEach((name) => {
		parsedValues[name] = parsed.variables.has(name) ? parsed.variables.get(name) : undefined;
	});
	// eslint-disable-next-line jest/no-standalone-expect
	expect({ script, values: canonical(parsedValues) }).toStrictEqual({ script, values: canonical(evaluated.values) });
	// the lenient variant must agree with the strict one on a fully parsable script
	// eslint-disable-next-line jest/no-standalone-expect
	expect(canonical(Object.fromEntries(salvaged))).toBe(canonical(Object.fromEntries(parsed.variables)));
}

function expectSalvageMatchesEvaluation(script: string, salvaged: Map<string, any>): void {
	if (!salvaged.size) return;
	const names = Array.from(salvaged.keys());
	const evaluated = evaluateLikeGetContext(script, names);
	// a script that fails to evaluate has no values to compare with; salvage still returns its literals by design
	if (evaluated.failed) return;

	const salvagedValues = Object.fromEntries(names.map((name) => [name, salvaged.get(name)]));
	const evaluatedValues = Object.fromEntries(names.map((name) => [name, evaluated.values[name]]));
	expect({ script, values: canonical(salvagedValues) }).toStrictEqual({ script, values: canonical(evaluatedValues) });
}

describe(`parseContext equivalence with evaluation (seed ${SEED}, ${ITERATIONS} iterations per phase)`, () => {
	beforeEach(() => {
		seed = SEED;
	});

	it('matches evaluation on generated declarative scripts', () => {
		let parsedCount = 0;
		for (let i = 0; i < ITERATIONS; i++) {
			const script = genScript();
			expectEquivalence(script);
			if (parseContext(script).success) parsedCount++;
		}
		// sanity check that the generator mostly produces scripts the parser handles (the rest lack statement separators)
		expect(parsedCount).toBeGreaterThan(ITERATIONS * 0.7);
	});

	it('never crashes or diverges on corrupted scripts', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			expectEquivalence(mutate(genScript()));
		}
	});
});
