// Jest mock for `marked` — the real package ships as ESM only and Jest
// cannot parse it. Return the input string verbatim so test assertions on
// substring content (e.g. "Hello world") still pass.
const marked = {
	parse: (input) => (typeof input === 'string' ? input : String(input ?? '')),
};

module.exports = { marked };
module.exports.marked = marked;
