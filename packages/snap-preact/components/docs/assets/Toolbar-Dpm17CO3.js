import { o as y, u as f, a as P, m as T, b as C, c as _, j as a, d as v, C as N, e as S, F as L } from './iframe-CXSVAHru.js';
import { d as B } from './defined-CdKp_MB-.js';
import { L as R } from './FacetsHorizontal-CIi7o8UB.js';
const j = ({}) => S({}),
	M = y((t) => {
		const o = f(),
			r = { treePath: P(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
			e = T('toolbar', o, r, t),
			{ controller: l, toggleSideBarButton: n, disableStyles: i, className: m, internalClassName: u, treePath: d, layout: s, tabManager: c } = e,
			{ overrideElement: h, shouldRenderDefault: g } = C('toolbar', e);
		if (!g) return h;
		const b = _(e, j),
			p = {
				Layout: {
					internalClassName: 'ss__toolbar__layout',
					tabManager: c,
					...B({ toggleSideBarButton: n, disableStyles: i }),
					theme: e?.theme,
					treePath: d,
				},
			};
		return s?.length
			? a(N, { children: a('div', { ...b, className: v('ss__toolbar', m, u), children: a(R, { controller: l, layout: s, ...p.Layout }) }) })
			: a(L, {});
	});
export { M as T };
