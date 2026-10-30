import { w as y, o as b, u as p, a as _, m as C, b as v, c as w, j as t, d as x, C as P, e as T } from './iframe-U9T2Y9ZS.js';
import { u as k } from './useA11y-BuGQuOJb.js';
import { R as D } from './types-DqusP3LW.js';
import { w as I } from './withTracking-B-gE0m0K.js';
const N = ({ width: e }) =>
		T({
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: e,
			'&.ss__inline-banner--grid': { flexDirection: 'column' },
			'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
			'& iframe': { maxWidth: '100%' },
		}),
	A = y(
		I(
			b((e) => {
				const l = p(),
					i = _(),
					o = { layout: D.grid, width: 'auto', treePath: i },
					a = C('inlineBanner', l, o, e),
					{ banner: n, className: c, internalClassName: u, disableA11y: m, layout: d, onClick: r } = a,
					{ overrideElement: f, shouldRenderDefault: h } = v('inlineBanner', a);
				if (!h) return f;
				const g = w(a, N);
				return n && n.value
					? t(P, {
							children: t('div', {
								onClick: (s) => {
									r && r(s, n);
								},
								role: 'article',
								ref: (s) => {
									m || k(s), e.trackingRef(s);
								},
								className: x('ss__inline-banner', `ss__inline-banner--${d}`, c, u),
								...g,
								dangerouslySetInnerHTML: { __html: n.value },
							}),
					  })
					: null;
			})
		)
	);
export { A as I };
