import { o as k, u as v, a as O, m as _, b as N, n as T, c as D, j as c, d as S, C as j, e as x } from './iframe-CXSVAHru.js';
import { d as E } from './defined-CdKp_MB-.js';
import { F as A } from './Facet-BmQbVpPT.js';
const G = () => x({}),
	q = k((r) => {
		const i = v(),
			m = O(),
			f = { facets: r.controller?.store?.facets, treePath: m };
		let e = _('facets', i, f, r);
		const { limit: o, onFacetOptionClick: n, disableStyles: d, className: h, internalClassName: u, controller: l, treePath: p } = e,
			{ overrideElement: C, shouldRenderDefault: P } = N('facets', e);
		if (!P) return C;
		const a = (t) => {
				n && n(t), l?.setFocused && l?.setFocused();
			},
			g = T(
				{
					components: {
						facetGridOptions: { onClick: a },
						facetHierarchyOptions: { onClick: a },
						facetListOptions: { onClick: a },
						facetPaletteOptions: { onClick: a },
					},
				},
				e?.theme || {},
				{ arrayMerge: (t, b) => b }
			);
		e = { ...e, theme: g };
		let { facets: s } = e;
		o && s && o > 0 && (s = s.slice(0, +o));
		const y = { facet: { internalClassName: 'ss__facets__facet', ...E({ disableStyles: d }), theme: e.theme, treePath: p } },
			F = D(e, G);
		return s && s?.length > 0
			? c(j, { children: c('div', { className: S('ss__facets', h, u), ...F, children: s.map((t) => c(A, { ...y.facet, facet: t }, t.field)) }) })
			: null;
	});
export { q as F };
