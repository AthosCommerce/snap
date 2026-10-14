import { j as m, A as R, y as d, q as b } from './iframe-CXSVAHru.js';
import { c as I } from './createImpressionObserver-DI1SU3AN.js';
const y = 'sstracking';
function E(v) {
	const p = v;
	return (s) => {
		const { controller: t, result: n, banner: i, type: r, content: c, ...w } = s;
		if (s.trackingRef) return m(p, { ...s });
		!t && (!r || !c) && console.warn('Warning: No controller provided to withTracking', s),
			!n && !i && (!r || !c) && console.warn('Warning: No result or banner provided to withTracking');
		const { ref: g, inViewport: f, updateRef: a } = I(),
			o = (n || i || (r && c?.[r]?.[0]))?.responseId,
			l = R(o),
			u = R(!1);
		l.current !== o && (u.current = !0),
			d(() => {
				l.current !== o && ((l.current = o), a(g.current));
			}, [o, a]),
			d(() => {
				u.current && !f && (u.current = !1);
			}, [f, o]);
		const T = r && c && !n && ['search', 'autocomplete'].includes(t?.type || '');
		f && !u.current && (T ? t?.track.banner.impression(c[r][0]) : n?.bundleSeed || t?.track.product.impression(n || i));
		const k = b(
			(e) => {
				T ? t?.track.banner.click(e, c[r][0]) : t?.track.product.click(e, n || i);
			},
			[t, n, i, r, c]
		);
		d(() => {
			const e = g.current;
			if (e)
				return (
					e.setAttribute(y, 'true'),
					e.addEventListener('click', k, !0),
					() => {
						e.removeEventListener('click', k, !0);
					}
				);
		}, [k]);
		const h = {
			...w,
			controller: t,
			result: n,
			banner: i,
			type: r,
			content: c,
			trackingRef: b(
				(e) => {
					a(e);
				},
				[a]
			),
		};
		return m(p, { ...h });
	};
}
export { y as T, E as w };
