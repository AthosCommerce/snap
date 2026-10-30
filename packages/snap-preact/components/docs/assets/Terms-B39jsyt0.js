import { o as j, u as O, a as E, m as H, b as I, c as W, n as _, j as r, l as D, d as g, C as F, e as M } from './iframe-U9T2Y9ZS.js';
import { u as f } from './useLang-Dx66cFD0.js';
import { c as R } from './createHoverProps-B_zlUBHN.js';
const z = ({ vertical: e, theme: t }) =>
		M({
			'.ss__terms__title': { fontWeight: 'normal', margin: 0, textTransform: 'uppercase', padding: '10px', h5: { fontSize: '.8em', margin: 0 } },
			'.ss__terms__options': {
				display: 'flex',
				justifyContent: 'space-evenly',
				flexDirection: e ? 'column' : 'row',
				flexWrap: 'wrap',
				padding: '0px',
				'.ss__terms__option': {
					listStyle: 'none',
					padding: '10px',
					wordBreak: 'break-all',
					a: { display: 'block', em: { fontStyle: 'normal' } },
					'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: t?.variables?.colors?.primary } },
				},
			},
		}),
	q = (e) => e?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
	A = (e, t) => {
		if (e && t) {
			const n = e.match(q(t));
			if (t && e && n && typeof n.index == 'number') {
				const o = e.slice(0, n.index),
					a = e.slice(n.index + t.length, e.length);
				return `${o ? `<em>${o}</em>` : ''}${t}${a ? `<em>${a}</em>` : ''}`;
			}
		}
		return `<em>${e}</em>`;
	},
	U = j((e) => {
		const t = O(),
			o = { vertical: !0, previewOnHover: !0, treePath: E() },
			a = H('terms', t, o, e),
			{ title: l, onTermClick: p, limit: u, previewOnHover: v, emIfy: h, className: b, internalClassName: T, controller: i } = a,
			x = i?.store?.state?.input,
			d = a.terms,
			{ overrideElement: y, shouldRenderDefault: $ } = I('terms', a);
		if (!$) return y;
		const k = W(a, z),
			C = (s, m) => {
				p && p(s, m), i?.setFocused && i?.setFocused();
			},
			c = u ? d?.slice(0, u) : d,
			P = _({ title: { value: l } }, a.lang || {}),
			w = f({ title: P.title }, { controller: i }, { activeBreakpoint: t?.activeBreakpoint });
		return c?.length
			? r(F, {
					children: D('div', {
						...k,
						className: g('ss__terms', b, T),
						children: [
							l ? r('div', { className: 'ss__terms__title', children: r('h5', { ...w.title.all }) }) : null,
							r('ul', {
								className: 'ss__terms__options',
								'aria-label': l,
								children: c?.map((s, m) => {
									const L = {
											term: {
												value: `${h ? A(s.value, x || '') : s.value}`,
												attributes: { 'aria-label': `${l || ''} item ${m + 1} of ${c.length}, ${s.value}` },
											},
										},
										N = _(L, a.lang || {}),
										S = f({ term: N.term }, { index: m, numberOfTerms: c.length, term: s }, { activeBreakpoint: t?.activeBreakpoint });
									return r('li', {
										className: g('ss__terms__option', { 'ss__terms__option--active': s.active }),
										children: r('a', { onClick: (B) => C(B, s), href: s.url.href, ...(v ? R(s.preview) : {}), ...S.term?.all }),
									});
								}),
							}),
						],
					}),
			  })
			: null;
	});
export { U as T };
