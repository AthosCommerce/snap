function t(r) {
	if (typeof r != 'string') return r;
	let e = r.toLowerCase();
	return (e = e.replace(/[^\w\s]/g, '').trim()), (e = e.replace(/\s/g, '-')), e;
}
export { t as h };
