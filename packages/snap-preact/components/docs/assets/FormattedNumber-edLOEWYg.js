import { o as g, u as y, a as S, m as v, b as C, c as T, j as a, d as F, C as D, e as j, F as x } from './iframe-CXSVAHru.js';
import { f as A } from './formatNumber-C6zKvI-v.js';
const _ = () => j({}),
	R = g((r) => {
		const t = y(),
			o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !0, treePath: S() },
			e = v('formattedNumber', t, o, r),
			{
				value: m,
				symbol: l,
				decimalPlaces: c,
				padDecimalPlaces: n,
				thousandsSeparator: d,
				decimalSeparator: u,
				symbolAfter: i,
				className: b,
				internalClassName: p,
				raw: f,
			} = e,
			{ overrideElement: h, shouldRenderDefault: P } = C('formattedNumber', e);
		if (!P) return h;
		const s = A(m, { symbol: l, decimalPlaces: c, padDecimalPlaces: n, thousandsSeparator: d, decimalSeparator: u, symbolAfter: i }),
			N = T(e, _);
		return f ? a(x, { children: s }) : a(D, { children: a('span', { className: F('ss__formatted-number', b, p), ...N, children: s }) });
	});
export { R as F };
