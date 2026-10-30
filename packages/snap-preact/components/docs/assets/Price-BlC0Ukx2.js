import { o as x, u as D, a as j, m as k, b as w, c as A, j as e, l as p, d as F, C as O, F as r, e as $ } from './iframe-U9T2Y9ZS.js';
import { f as E } from './formatNumber-C6zKvI-v.js';
function R(s, c) {
	const n = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...c };
	return E(s, n);
}
const q = ({ theme: s }) => $({ color: s?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
	G = x((s) => {
		const c = D(),
			u = {
				symbol: '$',
				decimalPlaces: 2,
				padDecimalPlaces: !0,
				thousandsSeparator: ',',
				decimalSeparator: '.',
				symbolAfter: !1,
				lineThrough: !1,
				treePath: j(),
			},
			t = k('price', c, u, s),
			{
				lineThrough: h,
				value: i,
				format: a,
				symbol: l,
				decimalPlaces: _,
				padDecimalPlaces: f,
				thousandsSeparator: b,
				decimalSeparator: P,
				symbolAfter: m,
				code: d,
				showCode: y,
				raw: g,
				className: N,
				internalClassName: v,
			} = t,
			{ overrideElement: S, shouldRenderDefault: T } = w('price', t);
		if (!T) return S;
		let o;
		i && (o = a ? a(i) : R(i, { symbol: '', decimalPlaces: _, padDecimalPlaces: f, thousandsSeparator: b, decimalSeparator: P }));
		const C = A(t, q);
		return o
			? g
				? e(r, { children: o })
				: e(O, {
						children: p('span', {
							...C,
							className: F('ss__price', { 'ss__price--strike': h }, N, v),
							children: [
								!a && l && !m ? e('span', { className: 'ss__price__symbol', children: l }) : e(r, {}),
								e('span', { className: 'ss__price__value', children: o }),
								!a && l && m ? e('span', { className: 'ss__price__symbol', children: l }) : e(r, {}),
								!a && y && d ? p(r, { children: [' ', e('span', { className: 'ss__price__code', children: d })] }) : e(r, {}),
							],
						}),
				  })
			: null;
	});
export { G as P };
