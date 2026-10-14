function c(d) {
	const f = {};
	return (
		Object.keys(d).map((n) => {
			d[n] !== void 0 && (f[n] = d[n]);
		}),
		f
	);
}
export { c as d };
