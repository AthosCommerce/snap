function r(s, l) {
	const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
	if (typeof s != 'number' || Number.isNaN(s)) return;
	const t = o(s, e.decimalPlaces).split('.');
	(t[0] = t[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
		e.decimalPlaces > 0 && e.padDecimalPlaces && (t[1] = (t[1] || '').padEnd(e.decimalPlaces, '0'));
	let a = t.join(e.decimalSeparator);
	return e.symbolAfter ? (a = a + e.symbol) : (a = e.symbol + a), a;
}
function o(s, l) {
	const e = s.toString(),
		t = e.indexOf('.'),
		a = t == -1 ? e.length : 1 + t + (l || -1);
	return e.substr(0, a);
}
export { r as f };
