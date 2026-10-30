import { o as v, u as P, a as b, m as T, b as x, c as y, n as R, j as r, d as C, C as N, e as I } from './iframe-U9T2Y9ZS.js';
import { u as L } from './useLang-Dx66cFD0.js';
const j = ({}) => I({}),
	B = v((a) => {
		const n = P(),
			l = b(),
			e = a.controller?.store.pagination || a.pagination,
			i = {
				infoText: `${e?.multiplePages ? `${e?.begin} - ${e?.end} of` : ''} ${`${e?.totalResults} result${e?.totalResults == 1 ? '' : 's'}`}`,
				treePath: l,
			},
			t = T('paginationInfo', n, i, a),
			{ controller: s, infoText: u, className: c, internalClassName: g } = t,
			{ overrideElement: m, shouldRenderDefault: f } = x('paginationInfo', t);
		if (!f) return m;
		const o = e || s?.store?.pagination,
			p = y(t, j),
			d = {
				infoText: {
					value: u,
					attributes: {
						'aria-label': `displaying ${e?.multiplePages ? `${e?.begin} - ${e?.end} of` : ''} ${e?.totalResults} result${
							e?.totalResults == 1 ? '' : 's'
						} ${s?.store?.search.query ? `for "${s?.store?.search.query.string}"` : ''}`,
					},
				},
			},
			$ = R(d, t.lang || {}),
			h = L($, { pagination: o }, { activeBreakpoint: n?.activeBreakpoint });
		return o?.totalResults
			? r(N, {
					children: r('div', { ...p, 'aria-atomic': !0, 'aria-live': 'assertive', className: C('ss__pagination-info', c, g), ...h.infoText?.all }),
			  })
			: null;
	});
export { B as P };
