import { w as f, o as T, u as y, a as C, m as N, b as v, f as s, c as P, q as _, j as r, C as w, d as x, e as I } from './iframe-CXSVAHru.js';
import { w as B } from './withTracking-DWvVsRqK.js';
const S = () => I({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
	R = f(
		T((o) => {
			const a = y(),
				l = { treePath: C() },
				e = N('banner', a, l, o),
				{ controller: c, type: n, className: i, internalClassName: m } = e,
				u = e.content || c?.store?.merchandising.content,
				{ overrideElement: h, shouldRenderDefault: d } = v('banner', e);
			if (!d) return h;
			if (n === s.INLINE) return console.warn(`BannerType '${s.INLINE}' is not supported in <Banner /> component`), null;
			const p = P(e, S),
				t = u?.[n]?.[0]?.value;
			if (!n || !t) return null;
			const b = _(
				B((g) =>
					r('div', {
						className: x('ss__banner', `ss__banner--${n}`, i, m),
						...p,
						ref: g.trackingRef,
						dangerouslySetInnerHTML: { __html: typeof t == 'string' ? t : t.join('') },
					})
				),
				[t, n]
			);
			return r(w, { children: r(b, { ...e }) });
		})
	);
export { R as B };
