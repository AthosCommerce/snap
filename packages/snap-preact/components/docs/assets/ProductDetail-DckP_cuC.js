import { o as _, u as C, a as v, m as S, b as T, c as j, d as D, j as i, C as O, v as A, e as E } from './iframe-Bc4KSH0T.js';
import { f as x } from './fieldNameToComponentName-CjebIDZG.js';
import { P as F } from './Price-BreE7qNQ.js';
const I = ['price', 'msrp'],
	R = (e) => {
		if (!e) return !1;
		const t = e.split('.'),
			o = t[t.length - 1];
		return I.includes(o) ? (t.length === 1 ? !0 : t[t.length - 2] === 'core' && t[t.length - 3] === 'mappings') : !1;
	},
	V = (e, t) => {
		if (!e || !t) return;
		const o = (r) => t.split('.').reduce((s, n) => (s && typeof s == 'object' ? s[n] : void 0), r),
			a = o(e?.display) ?? o(e);
		if (a !== void 0) return a;
		if (!t.includes('.')) {
			const r = e?.display?.mappings?.core || e?.mappings?.core,
				s = e?.display?.attributes || e?.attributes;
			return r?.[t] ?? s?.[t];
		}
	},
	$ = (e) =>
		e == null
			? ''
			: Array.isArray(e) || A(e)
			? Array.from(e)
					.map((t) => (typeof t == 'object' ? JSON.stringify(t) : String(t)))
					.join(', ')
			: typeof e == 'object'
			? JSON.stringify(e)
			: String(e),
	J = () => E({}),
	M = _((e) => {
		const t = C(),
			a = { treePath: v(), name: e.field ? x(e.field.split('.').pop() || '') : void 0 },
			r = S('productDetail', t, a, e),
			{ result: s, field: n, name: f, html: g, tag: d, className: h, internalClassName: P } = r,
			{ overrideElement: y, shouldRenderDefault: b } = T('productDetail', r);
		if (!b) return y;
		const m = j(r, J),
			c = V(s, n),
			l = $(c);
		if (!l) return null;
		const N = R(n) && typeof c == 'number',
			p = f || n.split('.').pop(),
			u = D('ss__product-detail', p && `ss__product-detail--${p}`, d && `ss__product-detail--${d}`, h, P);
		return i(O, {
			children: g
				? i('div', { ...m, className: u, dangerouslySetInnerHTML: { __html: l } })
				: i('div', { ...m, className: u, children: N ? i(F, { value: c, treePath: r.treePath }) : l }),
		});
	});
export { M as P, V as g, $ as r };
