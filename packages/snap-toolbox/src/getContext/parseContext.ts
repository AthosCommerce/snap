/**
 * Static parser for context scripts: reads variable assignments of literal values without evaluating JavaScript,
 * so `getContext` works (and triggers no violations) under a Content Security Policy without 'unsafe-eval'.
 *
 * A single pass scanner in the style of a hand written JSON parser. Grammar:
 *
 *   script    := ( ';' | statement )*
 *   statement := name '=' value ( ';' | end-of-script | newline-before-next-statement )
 *   value     := string | number | 'true' | 'false' | 'null' | 'undefined' | array | object
 *   array     := '[' ( value ( ',' value )* ','? )? ']'
 *   object    := '{' ( key ':' value ( ',' key ':' value )* ','? )? '}'   key := name | string | number
 *   string    := single or double quoted with JSON style escapes (\n \t \r \b \f \v \uXXXX \" \' \\ \/)
 *   number    := decimal digits, optional fraction, optional leading '-'
 *
 * Comments (`//` and `/* ... *\/`) may appear wherever whitespace may.
 *
 * The one rule that matters: whenever this parser succeeds, its result must equal what evaluating the script would
 * produce. Anything it does not understand (functions, expressions, member access, template literals, references to
 * other variables, less common literal forms) throws a ParseError so the caller falls back to evaluation. When in
 * doubt, throw. `parseContext.fuzz.test.ts` checks this equivalence against `new Function`.
 *
 * The lenient variant (salvage when evaluation is blocked) holds to the same rule for every value it returns: it skips
 * each unsupported statement whole and drops any variable that skipped code uses, since that code may change it.
 */

export const JAVASCRIPT_KEYWORDS = new Set(
	`break case catch class const continue debugger default delete do else export extends finally for function if import
	in instanceof new return super switch this throw try typeof var void while with yield let static enum await
	implements package protected interface private public true false null`.split(/\s+/)
);

const LITERAL_VALUES = new Map<string, any>(Object.entries({ true: true, false: false, null: null, undefined: undefined }));
const ESCAPES = new Map(Object.entries({ n: '\n', t: '\t', r: '\r', b: '\b', f: '\f', v: '\v' }));

const LINE_TERMINATOR = /[\n\r\u2028\u2029]/;
// sticky patterns, matched at the current position
const TRIVIA = /\s+|\/\/[^\n\r\u2028\u2029]*|\/\*[\s\S]*?\*\//y;
const NAME = /[A-Za-z_$][\w$]*/y;
const ASSIGNMENT_START = /[A-Za-z_$][\w$]*\s*=(?![=>])/y;
const DECIMAL = /\d+(\.\d+)?/y;
const HEX4 = /[0-9a-fA-F]{4}/y;
const NUMBER_TOKEN = /\.?\d[\w$.]*/y;
const IDENTIFIER_PART = /[\w$]*/y;

// keywords whose statement body may follow on the next line, after a parenthesized head
const HEAD_KEYWORDS = new Set(['if', 'for', 'while', 'with']);
// keywords that are complete values, so a following '/' divides
const VALUE_KEYWORDS = new Set(['this', 'super', 'true', 'false', 'null']);
// tokens that can end a statement, so a line break after them may end it (anything else continues onto the next line)
const STATEMENT_ENDINGS = ['name', 'value', ')', ']', '}'];

type IdentifierVisitor = (name: string, assigned: boolean) => void;

export type ParseContextResult = { success: true; variables: Map<string, any> } | { success: false };

/** Parses a context script, returning `{ success: false }` if any part of it is unsupported. */
export function parseContext(script: string): ParseContextResult {
	try {
		return { success: true, variables: new ContextParser(script).parseScript() };
	} catch (_err) {
		// unsupported syntax, or anything unexpected (e.g. a stack overflow on absurd nesting): fall back to evaluation
		return { success: false };
	}
}

/** Lenient variant used for salvage when evaluation is blocked: keeps the assignments it can parse, skips the rest. */
export function parseContextStatements(script: string): Map<string, any> {
	try {
		return new ContextParser(script).parseScript({ lenient: true });
	} catch (_err) {
		return new Map();
	}
}

/**
 * Names used as variables in a script, outside strings, comments, regular expressions, property names and object keys:
 * `mentioned` holds all of them, `assigned` those followed by `=` (including keywords, so they can be reported).
 */
export function scanIdentifiers(script: string): { assigned: Set<string>; mentioned: Set<string> } {
	const assigned = new Set<string>();
	const mentioned = new Set<string>();
	new ContextParser(script).walkCode('script', (name, isAssigned) => {
		if (isAssigned) assigned.add(name);
		if (!JAVASCRIPT_KEYWORDS.has(name) && !LITERAL_VALUES.has(name)) mentioned.add(name);
	});
	return { assigned, mentioned };
}

// after a value a '/' divides; anywhere else (after an operator or keyword, or at the start) it begins a regular expression
function regexMayFollow(previous: string): boolean {
	return !['name', 'value', ')', ']'].includes(previous);
}

class ParseError extends Error {}

class ContextParser {
	private pos = 0;

	constructor(private readonly src: string) {}

	parseScript({ lenient = false } = {}): Map<string, any> {
		const variables = new Map<string, any>();
		// names used by skipped code, which may reassign or mutate them - their parsed values cannot be trusted
		const tainted = new Set<string>();
		for (this.skipTrivia(lenient); !this.atEnd(); this.skipTrivia(lenient)) {
			if (this.tryConsume(';')) continue;
			const start = this.pos;
			try {
				const [name, value] = this.parseStatement();
				variables.set(name, value);
			} catch (err) {
				if (!lenient || !(err instanceof ParseError)) throw err;
				// skip from the statement start, so a failure inside a string never resumes in the middle of it
				this.pos = start;
				this.walkCode('statement', (name) => tainted.add(name));
			}
		}
		tainted.forEach((name) => variables.delete(name));
		return variables;
	}

	/**
	 * Walks code the parser does not support, stepping over strings, templates, comments and regular expressions, and
	 * reports each name used as a variable. 'statement' stops after the end of the current statement: a ';' outside
	 * brackets, or a line break followed by another assignment (automatic semicolon insertion) when the line ends in a
	 * token that can end a statement - so not after an operator, a '.', `else`, `do`, `=>`, or the head of an `if (...)`,
	 * `for (...)`, `while (...)` or `with (...)` whose body may be on the next line.
	 * 'template' stops after the '}' closing a `${` expression. Never throws, and always advances.
	 */
	walkCode(mode: 'script' | 'statement' | 'template', visit: IdentifierVisitor): void {
		const headDepths: number[] = [];
		let depth = 0;
		let previous = ''; // the last token: a punctuator, a keyword, 'name' or 'value'
		let expectHead = false;
		let afterHead = false;
		for (;;) {
			const crossedNewline = this.skipTrivia(true);
			if (this.atEnd()) return;
			const canEnd = STATEMENT_ENDINGS.includes(previous) && !afterHead;
			if (mode === 'statement' && crossedNewline && depth === 0 && canEnd && this.atAssignmentStart()) return;
			const startsHead = expectHead;
			expectHead = afterHead = false;
			const ch = this.peek();

			if (ch === '"' || ch === "'") {
				this.skipQuoted();
				previous = 'value';
			} else if (ch === '`') {
				this.skipTemplate(visit);
				previous = 'value';
			} else if (ch === '/' && regexMayFollow(previous)) {
				this.skipRegex();
				previous = 'value';
			} else if (/[A-Za-z_$]/.test(ch)) {
				const word = this.match(NAME) as string;
				const isProperty = previous === '.';
				if (!isProperty) {
					const [next, afterNext] = this.peekPastTrivia();
					const isKey = (previous === '{' || previous === ',') && next === ':';
					if (!isKey) visit(word, next === '=' && afterNext !== '=' && afterNext !== '>');
					expectHead = HEAD_KEYWORDS.has(word);
				}
				previous = !isProperty && JAVASCRIPT_KEYWORDS.has(word) && !VALUE_KEYWORDS.has(word) ? word : 'name';
			} else if (this.match(NUMBER_TOKEN) !== undefined) {
				previous = 'value';
			} else if (this.src.startsWith('...', this.pos)) {
				this.pos += 3;
				previous = '...';
			} else if (this.src.startsWith('=>', this.pos)) {
				this.pos += 2;
				previous = '=>';
			} else {
				this.pos++;
				if (ch === '(' || ch === '[' || ch === '{') {
					depth++;
					if (ch === '(' && startsHead) headDepths.push(depth);
				} else if (ch === ')' || ch === ']' || ch === '}') {
					if (mode === 'template' && ch === '}' && depth === 0) return;
					if (ch === ')' && headDepths[headDepths.length - 1] === depth) {
						headDepths.pop();
						afterHead = true;
					}
					depth = Math.max(0, depth - 1);
				} else if (ch === ';' && depth === 0 && mode === 'statement') {
					return;
				}
				previous = ch;
			}
		}
	}

	private parseStatement(): [name: string, value: any] {
		const name = this.parseName();
		if (JAVASCRIPT_KEYWORDS.has(name) || LITERAL_VALUES.has(name)) this.fail(`'${name}' cannot be assigned`);
		this.skipTrivia();
		this.consume('=');
		this.skipTrivia();
		const value = this.parseValue();
		// a statement ends with ';', the end of the script, or (automatic semicolon insertion) another assignment on a new line
		const crossedNewline = this.skipTrivia();
		if (!this.atEnd() && !this.tryConsume(';') && !(crossedNewline && this.atAssignmentStart())) this.fail(`expected ';'`);
		return [name, value];
	}

	private parseValue(): any {
		const ch = this.peek();
		if (ch === '"' || ch === "'") return this.parseString();
		if (ch === '[') return this.parseArray();
		if (ch === '{') return this.parseObject();
		if (ch === '-' || /\d/.test(ch)) return this.parseNumber();
		if (/[A-Za-z_$]/.test(ch)) {
			const word = this.parseName();
			if (LITERAL_VALUES.has(word)) return LITERAL_VALUES.get(word);
			this.fail(`unsupported value '${word}'`); // a variable, global or function: needs evaluation
		}
		this.fail(`unexpected '${ch}'`);
	}

	private parseString(): string {
		const quote = this.next();
		let value = '';
		for (;;) {
			const ch = this.next();
			if (ch === '' || ch === '\n' || ch === '\r') this.fail('unterminated string');
			if (ch === quote) return value;
			value += ch === '\\' ? this.parseEscape() : ch;
		}
	}

	private parseEscape(): string {
		const ch = this.next();
		if (ch === 'u') return String.fromCharCode(parseInt(this.match(HEX4) ?? this.fail('invalid \\u escape'), 16));
		if (ESCAPES.has(ch)) return ESCAPES.get(ch) as string;
		// legacy octal (\0-\9), \x, \u{...} and line continuations are left to evaluation
		if (ch === '' || ch === 'x' || /\d/.test(ch) || LINE_TERMINATOR.test(ch)) this.fail('unsupported escape sequence');
		return ch; // any other escaped character stands for itself: \\ \' \" \/ ...
	}

	private parseNumber(): number {
		const negative = this.tryConsume('-');
		const digits = this.match(DECIMAL) ?? this.fail('expected a number');
		// leading zeros (legacy octal) and anything glued to the digits (hex, exponents, bigint, separators, `1.`) are left to evaluation
		if (/^0\d/.test(digits) || /[\w$.]/.test(this.peek())) this.fail('unsupported number');
		return negative ? -Number(digits) : Number(digits);
	}

	private parseArray(): any[] {
		this.consume('[');
		const items: any[] = [];
		for (this.skipTrivia(); !this.tryConsume(']'); this.skipTrivia()) {
			items.push(this.parseValue());
			this.skipTrivia();
			if (!this.tryConsume(',') && this.peek() !== ']') this.fail(`expected ',' or ']'`);
		}
		return items;
	}

	private parseObject(): { [key: string]: any } {
		this.consume('{');
		const obj: { [key: string]: any } = {};
		for (this.skipTrivia(); !this.tryConsume('}'); this.skipTrivia()) {
			const key = this.parseObjectKey();
			if (key === '__proto__') this.fail(`unsupported key '__proto__'`); // would set the prototype when evaluated
			this.skipTrivia();
			this.consume(':');
			this.skipTrivia();
			// an own property, never a setter
			Object.defineProperty(obj, key, { value: this.parseValue(), enumerable: true, writable: true, configurable: true });
			this.skipTrivia();
			if (!this.tryConsume(',') && this.peek() !== '}') this.fail(`expected ',' or '}'`);
		}
		return obj;
	}

	private parseObjectKey(): string {
		const ch = this.peek();
		if (ch === '"' || ch === "'") return this.parseString();
		if (/\d/.test(ch)) return String(this.parseNumber());
		return this.parseName(); // keywords are valid keys
	}

	private parseName(): string {
		return this.match(NAME) ?? this.fail('expected a name');
	}

	/** Skips whitespace and comments; returns whether a line terminator was crossed (including inside a comment). */
	private skipTrivia(tolerateUnterminatedComment = false): boolean {
		let crossedNewline = false;
		for (let skipped = this.match(TRIVIA); skipped !== undefined; skipped = this.match(TRIVIA)) {
			if (LINE_TERMINATOR.test(skipped)) crossedNewline = true;
		}
		if (this.src.startsWith('/*', this.pos)) {
			if (!tolerateUnterminatedComment) this.fail('unterminated comment');
			this.pos = this.src.length;
		}
		return crossedNewline;
	}

	private peekPastTrivia(): [next: string, afterNext: string] {
		const start = this.pos;
		this.skipTrivia(true);
		const next: [string, string] = [this.peek(), this.src[this.pos + 1] ?? ''];
		this.pos = start;
		return next;
	}

	private atAssignmentStart(): boolean {
		ASSIGNMENT_START.lastIndex = this.pos;
		return ASSIGNMENT_START.test(this.src);
	}

	/** Skips a quoted string, stopping before the line break that ends an unterminated one. */
	private skipQuoted(): void {
		const quote = this.next();
		for (let ch = this.peek(); ch !== '' && ch !== '\n' && ch !== '\r'; ch = this.peek()) {
			this.pos++;
			if (ch === quote) return;
			if (ch === '\\') this.pos += this.src.startsWith('\r\n', this.pos) ? 2 : 1;
		}
	}

	private skipTemplate(visit: IdentifierVisitor): void {
		this.pos++;
		for (let ch = this.next(); ch !== '' && ch !== '`'; ch = this.next()) {
			if (ch === '\\') this.pos++;
			else if (ch === '$' && this.peek() === '{') {
				this.pos++;
				this.walkCode('template', visit);
			}
		}
	}

	private skipRegex(): void {
		this.pos++;
		for (let inClass = false, ch = this.peek(); ch !== '' && !LINE_TERMINATOR.test(ch); ch = this.peek()) {
			this.pos++;
			if (ch === '\\') this.pos++;
			else if (ch === '[') inClass = true;
			else if (ch === ']') inClass = false;
			else if (ch === '/' && !inClass) {
				this.match(IDENTIFIER_PART);
				return;
			}
		}
	}

	private atEnd(): boolean {
		return this.pos >= this.src.length;
	}

	private peek(): string {
		return this.src[this.pos] ?? '';
	}

	private next(): string {
		return this.src[this.pos++] ?? '';
	}

	private tryConsume(ch: string): boolean {
		return this.peek() === ch && ++this.pos > 0;
	}

	private consume(ch: string): void {
		if (!this.tryConsume(ch)) this.fail(`expected '${ch}'`);
	}

	/** Matches a sticky pattern at the current position and advances past it. */
	private match(pattern: RegExp): string | undefined {
		pattern.lastIndex = this.pos;
		const found = pattern.exec(this.src);
		if (found) this.pos = pattern.lastIndex;
		return found?.[0];
	}

	private fail(message: string): never {
		throw new ParseError(`${message} at position ${this.pos}`);
	}
}
