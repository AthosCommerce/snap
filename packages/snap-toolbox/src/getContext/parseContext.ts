export const JAVASCRIPT_KEYWORDS = new Set([
	'break',
	'case',
	'catch',
	'class',
	'const',
	'continue',
	'debugger',
	'default',
	'delete',
	'do',
	'else',
	'export',
	'extends',
	'finally',
	'for',
	'function',
	'if',
	'import',
	'in',
	'instanceof',
	'new',
	'return',
	'super',
	'switch',
	'this',
	'throw',
	'try',
	'typeof',
	'var',
	'void',
	'while',
	'with',
	'yield',
	'let',
	'static',
	'enum',
	'await',
	'implements',
	'package',
	'protected',
	'interface',
	'private',
	'public',
]);

const LITERAL_KEYWORDS = new Set(['true', 'false', 'null', 'undefined']);

class ParseError extends Error {}

type Token = {
	type: 'ident' | 'string' | 'number' | 'punct' | 'unknown';
	value: any;
	hasInterpolation?: boolean;
	pos: number;
};

const PUNCTUATION = new Set(['{', '}', '[', ']', '(', ')', ',', ':', ';', '=', '.', '+', '-']);
const OPENERS = new Set(['{', '[', '(']);
const CLOSERS = new Set(['}', ']', ')']);

export type ParseContextResult = { success: true; variables: Map<string, any> } | { success: false };

/**
 * Statically parses a context script's innerHTML without any evaluation (CSP safe).
 * Supports the documented context syntax only: statements of variable assignments
 * (no `var`/`let`/`const`) where values are literals - strings, numbers, booleans,
 * null, undefined, arrays and object literals - plus references to previously
 * assigned variables. Comments and extra semicolons are allowed.
 *
 * Returns `{ success: false }` if the script contains anything else (functions,
 * expressions, member access, etc.) - callers should fall back to evaluation.
 */
export function parseContext(input: string): ParseContextResult {
	try {
		const variables = parseStatements(tokenize(input), true);
		return { success: true, variables };
	} catch (err) {
		if (err instanceof ParseError) {
			return { success: false };
		}
		throw err;
	}
}

/**
 * Lenient variant of `parseContext` used for salvage - parses statement by statement,
 * keeping the assignments it can parse and skipping the ones it cannot.
 */
export function parseContextStatements(input: string): Map<string, any> {
	try {
		return parseStatements(tokenize(input), false);
	} catch (err) {
		if (err instanceof ParseError) {
			return new Map();
		}
		throw err;
	}
}

function tokenize(input: string): Token[] {
	const tokens: Token[] = [];
	let i = 0;

	while (i < input.length) {
		const ch = input[i];

		// whitespace
		if (/\s/.test(ch)) {
			i++;
			continue;
		}

		// line comment
		if (ch === '/' && input[i + 1] === '/') {
			while (i < input.length && input[i] !== '\n') i++;
			continue;
		}

		// block comment
		if (ch === '/' && input[i + 1] === '*') {
			const end = input.indexOf('*/', i + 2);
			if (end === -1) throw new ParseError(`unterminated block comment at position ${i}`);
			i = end + 2;
			continue;
		}

		// string literals (single, double and template)
		if (ch === "'" || ch === '"' || ch === '`') {
			const pos = i;
			let raw = '';
			let hasInterpolation = false;
			let j = i + 1;
			let terminated = false;
			while (j < input.length) {
				const c = input[j];
				if (c === '\\') {
					raw += input.substr(j, 2);
					j += 2;
					continue;
				}
				if (c === ch) {
					terminated = true;
					break;
				}
				if (ch !== '`' && (c === '\n' || c === '\r')) {
					throw new ParseError(`unterminated string at position ${pos}`);
				}
				if (ch === '`' && c === '$' && input[j + 1] === '{') {
					hasInterpolation = true;
				}
				raw += c;
				j++;
			}
			if (!terminated) throw new ParseError(`unterminated string at position ${pos}`);
			tokens.push({ type: 'string', value: decodeStringEscapes(raw), hasInterpolation, pos });
			i = j + 1;
			continue;
		}

		// number literals
		if (/[0-9]/.test(ch) || (ch === '.' && /[0-9]/.test(input[i + 1]))) {
			const pos = i;
			let j = i;
			if (input[j] === '0' && (input[j + 1] === 'x' || input[j + 1] === 'X')) {
				j += 2;
				while (j < input.length && /[0-9a-fA-F]/.test(input[j])) j++;
			} else {
				while (j < input.length && /[0-9]/.test(input[j])) j++;
				if (input[j] === '.') {
					j++;
					while (j < input.length && /[0-9]/.test(input[j])) j++;
				}
				if (input[j] === 'e' || input[j] === 'E') {
					j++;
					if (input[j] === '+' || input[j] === '-') j++;
					while (j < input.length && /[0-9]/.test(input[j])) j++;
				}
			}
			const value = Number(input.slice(i, j));
			if (Number.isNaN(value)) throw new ParseError(`invalid number at position ${pos}`);
			tokens.push({ type: 'number', value, pos });
			i = j;
			continue;
		}

		// identifiers and keywords
		if (/[a-zA-Z_$]/.test(ch)) {
			let j = i;
			while (j < input.length && /[a-zA-Z0-9_$]/.test(input[j])) j++;
			tokens.push({ type: 'ident', value: input.slice(i, j), pos: i });
			i = j;
			continue;
		}

		if (PUNCTUATION.has(ch)) {
			tokens.push({ type: 'punct', value: ch, pos: i });
			i++;
			continue;
		}

		tokens.push({ type: 'unknown', value: ch, pos: i });
		i++;
	}

	return tokens;
}

function decodeStringEscapes(raw: string): string {
	let out = '';
	let i = 0;
	while (i < raw.length) {
		const c = raw[i];
		if (c !== '\\') {
			out += c;
			i++;
			continue;
		}
		const next = raw[i + 1];
		switch (next) {
			case 'n':
				out += '\n';
				i += 2;
				break;
			case 't':
				out += '\t';
				i += 2;
				break;
			case 'r':
				out += '\r';
				i += 2;
				break;
			case 'b':
				out += '\b';
				i += 2;
				break;
			case 'f':
				out += '\f';
				i += 2;
				break;
			case 'v':
				out += '\v';
				i += 2;
				break;
			case '0':
				out += '\0';
				i += 2;
				break;
			case 'x': {
				const hex = raw.substr(i + 2, 2);
				if (!/^[0-9a-fA-F]{2}$/.test(hex)) throw new ParseError('invalid \\x escape sequence');
				out += String.fromCharCode(parseInt(hex, 16));
				i += 4;
				break;
			}
			case 'u': {
				if (raw[i + 2] === '{') {
					const end = raw.indexOf('}', i + 3);
					const hex = raw.slice(i + 3, end);
					if (end === -1 || !/^[0-9a-fA-F]+$/.test(hex)) throw new ParseError('invalid \\u escape sequence');
					out += String.fromCodePoint(parseInt(hex, 16));
					i = end + 1;
				} else {
					const hex = raw.substr(i + 2, 4);
					if (!/^[0-9a-fA-F]{4}$/.test(hex)) throw new ParseError('invalid \\u escape sequence');
					out += String.fromCharCode(parseInt(hex, 16));
					i += 6;
				}
				break;
			}
			case '\n':
				// line continuation
				i += 2;
				break;
			case '\r':
				i += raw[i + 2] === '\n' ? 3 : 2;
				break;
			case undefined:
				throw new ParseError('invalid trailing escape');
			default:
				out += next;
				i += 2;
				break;
		}
	}
	return out;
}

function parseStatements(tokens: Token[], strict: boolean): Map<string, any> {
	const variables = new Map<string, any>();
	let i = 0;

	const peek = (offset = 0): Token | undefined => tokens[i + offset];
	const punctIs = (value: string): boolean => {
		const tok = peek();
		return !!tok && tok.type === 'punct' && tok.value === value;
	};
	const expectPunct = (value: string): void => {
		if (!punctIs(value)) throw new ParseError(`expected '${value}' at position ${peek()?.pos ?? 'end'}`);
		i++;
	};

	while (i < tokens.length) {
		// allow stray semicolons between statements
		if (punctIs(';')) {
			i++;
			continue;
		}

		const start = i;
		try {
			parseStatement();
		} catch (err) {
			if (strict || !(err instanceof ParseError)) throw err;
			// lenient mode - skip the unparsable statement and continue with the next one
			if (i === start) i++;
			skipToStatementEnd();
		}
	}

	return variables;

	function parseStatement(): void {
		const nameToken = peek();
		if (!nameToken || nameToken.type !== 'ident' || JAVASCRIPT_KEYWORDS.has(nameToken.value) || LITERAL_KEYWORDS.has(nameToken.value)) {
			throw new ParseError(`expected variable assignment at position ${nameToken?.pos ?? 'end'}`);
		}
		const equals = peek(1);
		if (!equals || equals.type !== 'punct' || equals.value !== '=') {
			throw new ParseError(`expected '=' at position ${equals?.pos ?? 'end'}`);
		}
		i += 2;

		const value = parseExpression();

		// statement must end with a semicolon, the end of the script, or the start of another assignment
		const next = peek();
		if (next) {
			if (next.type === 'punct' && next.value === ';') {
				i++;
			} else if (next.type === 'ident' && peek(1)?.type === 'punct' && peek(1)?.value === '=') {
				// automatic semicolon insertion between assignments
			} else {
				throw new ParseError(`unexpected token at position ${next.pos}`);
			}
		}

		variables.set(nameToken.value, value);
	}

	function parseExpression(): any {
		const tok = peek();
		if (!tok) throw new ParseError('unexpected end of script');

		if (tok.type === 'string') {
			if (tok.hasInterpolation) throw new ParseError(`template literal interpolation at position ${tok.pos}`);
			i++;
			return tok.value;
		}

		if (tok.type === 'number') {
			i++;
			return tok.value;
		}

		// signed numbers
		if (tok.type === 'punct' && (tok.value === '-' || tok.value === '+')) {
			const next = peek(1);
			if (next?.type === 'number') {
				i += 2;
				return tok.value === '-' ? -next.value : next.value;
			}
			throw new ParseError(`unexpected '${tok.value}' at position ${tok.pos}`);
		}

		if (tok.type === 'ident') {
			switch (tok.value) {
				case 'true':
					i++;
					return true;
				case 'false':
					i++;
					return false;
				case 'null':
					i++;
					return null;
				case 'undefined':
					i++;
					return undefined;
			}
			// reference to a previously assigned variable (but not member access or a call)
			const next = peek(1);
			const isAccess = next?.type === 'punct' && (next.value === '.' || next.value === '(' || next.value === '[');
			if (!isAccess && variables.has(tok.value)) {
				i++;
				return variables.get(tok.value);
			}
			throw new ParseError(`unexpected identifier '${tok.value}' at position ${tok.pos}`);
		}

		if (tok.type === 'punct' && tok.value === '[') return parseArray();
		if (tok.type === 'punct' && tok.value === '{') return parseObject();

		throw new ParseError(`unexpected token at position ${tok.pos}`);
	}

	function parseArray(): any[] {
		expectPunct('[');
		const arr: any[] = [];
		for (;;) {
			if (punctIs(']')) {
				i++;
				break;
			}
			arr.push(parseExpression());
			if (punctIs(',')) {
				i++;
				continue;
			}
			if (punctIs(']')) {
				i++;
				break;
			}
			throw new ParseError(`expected ',' or ']' at position ${peek()?.pos ?? 'end'}`);
		}
		return arr;
	}

	function parseObject(): { [key: string]: any } {
		expectPunct('{');
		const obj: { [key: string]: any } = {};
		for (;;) {
			if (punctIs('}')) {
				i++;
				break;
			}
			const keyToken = peek();
			let key: string;
			if (keyToken?.type === 'ident') {
				key = keyToken.value;
			} else if (keyToken?.type === 'string' && !keyToken.hasInterpolation) {
				key = keyToken.value;
			} else if (keyToken?.type === 'number') {
				key = String(keyToken.value);
			} else {
				throw new ParseError(`expected object key at position ${keyToken?.pos ?? 'end'}`);
			}
			i++;
			expectPunct(':');
			const value = parseExpression();

			// define as an own property to avoid '__proto__' setter side effects
			Object.defineProperty(obj, key, { value, enumerable: true, writable: true, configurable: true });

			if (punctIs(',')) {
				i++;
				continue;
			}
			if (punctIs('}')) {
				i++;
				break;
			}
			throw new ParseError(`expected ',' or '}' at position ${peek()?.pos ?? 'end'}`);
		}
		return obj;
	}

	function skipToStatementEnd(): void {
		let depth = 0;
		while (i < tokens.length) {
			const tok = tokens[i];
			if (tok.type === 'punct') {
				if (OPENERS.has(tok.value)) depth++;
				else if (CLOSERS.has(tok.value)) depth = Math.max(0, depth - 1);
				else if (tok.value === ';' && depth === 0) {
					i++;
					return;
				}
			}
			i++;
		}
	}
}
