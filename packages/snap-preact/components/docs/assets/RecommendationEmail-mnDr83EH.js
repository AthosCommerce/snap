import { o as E, u as O, a as W, m as j, x as z, z as F, c as w, j as o, p as x, n as k, d as u, F as M, e as $ } from './iframe-CXSVAHru.js';
import { d as B } from './defined-CdKp_MB-.js';
import { Result as L } from './Result-BacvSyPr.js';
const I = { default: {}, mobile: {}, tablet: {}, desktop: {} },
	q = () => $({}),
	A = E((n) => {
		const d = O(),
			p = W(),
			h = { resultWidth: '240px', name: n.controller?.store?.profile?.tag?.toLowerCase(), treePath: p },
			e = j('recommendationEmail', d, h, n),
			{ controller: a, results: f, resultWidth: g, treePath: r, disableStyles: C, internalClassName: _, className: b } = e,
			t = e.resultComponent,
			y = z(),
			s = typeof t == 'string',
			N = s ? t : '',
			P = y?.templates?.library.import.component.result || {},
			{ ComponentOverride: v, shouldWaitForNamedOverride: R } = F(P, s ? N : void 0),
			l = s ? v : t,
			T = { result: { internalClassName: 'ss__recommendation-email__result', ...B({ disableStyles: C }), theme: e?.theme, treePath: r } },
			S = w(e, q),
			m = f || a?.store?.results || [];
		return m.length > 0
			? o('div', {
					className: u('ss__recommendation-email', b, _),
					...S,
					children: m.map((i, c) =>
						o(
							'div',
							{
								id: `ss-emailrec${c}`,
								className: u('ss__recommendation-email__result-wrapper'),
								style: { display: 'block', width: g },
								children: l
									? x(l, {
											controller: a,
											result: i,
											email: !0,
											theme: s ? k(e.theme || {}, { components: { result: { customComponent: t }, image: { lazy: !1 } } }) : e.theme,
											treePath: r,
									  })
									: R
									? null
									: o(L, { result: i, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...T.result }),
							},
							c
						)
					),
			  })
			: o(M, {});
	}),
	J = Object.freeze(Object.defineProperty({ __proto__: null, RecommendationEmail: A }, Symbol.toStringTag, { value: 'Module' }));
export { A as R, J as a, I as r };
