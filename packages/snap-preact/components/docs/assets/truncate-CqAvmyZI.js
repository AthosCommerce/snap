function c(t, r, e) {
	if (typeof t != 'string' || t.length <= r) return t;
	const s = t.lastIndexOf(' ', r),
		n = s != -1 ? s : r - 1;
	return t.substr(0, n) + (e || '');
}
export { c as t };
