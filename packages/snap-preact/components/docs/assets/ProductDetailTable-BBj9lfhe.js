import { o as v, u as T, a as C, m as A, b as D, c as S, j as t, l as _, d as w, C as j, v as R, e as V } from './iframe-U9T2Y9ZS.js';
import { r as k, g as n, P as c } from './ProductDetail-CHIUhkMw.js';
import { d as F } from './defined-CdKp_MB-.js';
import { I } from './Image-C5uuJXju.js';
import { R as z } from './Rating-DUxc2ffg.js';
import { P as B } from './Price-BlC0Ukx2.js';
const O = () =>
		V({
			width: '100%',
			borderCollapse: 'collapse',
			fontSize: '0.9em',
			'& tr': { borderBottom: '1px solid #eee' },
			'& tr:last-of-type': { borderBottom: 'none' },
			'& th, & td': { padding: '10px 0', textAlign: 'left', verticalAlign: 'top' },
			'& th': {
				width: '40%',
				paddingRight: '16px',
				fontWeight: 500,
				color: '#666',
				textTransform: 'uppercase',
				fontSize: '0.85em',
				letterSpacing: '0.02em',
			},
			'& td': {
				color: '#1a1a1a',
				'& .ss__rating': { justifyContent: 'flex-start' },
				'& .ss__image': { alignItems: 'flex-start', '& img': { maxHeight: '100px' } },
			},
		}),
	K = v((d) => {
		const m = T(),
			p = { treePath: C() },
			l = A('productDetailTable', m, p, d),
			{ result: o, displayFields: u, disableStyles: f, className: h, internalClassName: g, treePath: b } = l,
			{ overrideElement: P, shouldRenderDefault: y } = D('productDetailTable', l);
		if (!y) return P;
		const x = S(l, O),
			i = (u || []).filter((e) => k(n(o, e.field)) !== '');
		if (i.length === 0) return null;
		const N = (e) => {
			const s = n(o, e.field),
				a = { theme: l.theme, treePath: b, ...F({ disableStyles: f }) };
			switch (e.type) {
				case 'price': {
					const r = Number(s);
					if (!isNaN(r)) return t(B, { value: r, ...a });
					break;
				}
				case 'rating': {
					const r = Number(s);
					if (!isNaN(r)) return t(z, { value: r, ...a });
					break;
				}
				case 'image': {
					const r = Array.isArray(s) || R(s) ? Array.from(s)[0] : s;
					if (typeof r == 'string' && r) return t(I, { src: r, alt: e.label || e.field, ...a });
					break;
				}
				case 'html':
					return t(c, { result: o, field: e.field, html: !0, ...a });
			}
			return t(c, { result: o, field: e.field, ...a });
		};
		return t(j, {
			children: t('table', {
				...x,
				className: w('ss__product-detail-table', h, g),
				children: t('tbody', {
					children: i.map((e, s) =>
						_('tr', { children: [t('th', { scope: 'row', children: e.label ?? e.field }), t('td', { children: N(e) })] }, `${e.field}-${s}`)
					),
				}),
			}),
		});
	});
export { K as P };
