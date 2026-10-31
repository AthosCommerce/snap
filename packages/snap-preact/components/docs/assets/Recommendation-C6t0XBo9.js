import {
	o as Y,
	u as Z,
	a as ee,
	m as te,
	x as re,
	z as oe,
	c as se,
	s as ne,
	A as ie,
	n as N,
	j as e,
	l as ae,
	p as le,
	F as y,
	d as me,
	C as pe,
	e as ce,
} from './iframe-Bc4KSH0T.js';
import { u as de } from './useDisplaySettings-7OChHsa4.js';
import { a as ue, d as he, C as fe } from './Carousel-C5sbdqFl.js';
import { d as b } from './defined-CdKp_MB-.js';
import { u as ge } from './useIntersection-C53zN6Qj.js';
import { u as ye } from './useLang-Dx66cFD0.js';
import { l as S, R as P } from './RecommendationProfileTracker-D9NFNSF6.js';
import { R as p } from './ResultTracker-COjEKXyJ.js';
import { Result as _e } from './Result-BzjtDAC1.js';
import './preload-helper-PPVm8Dsz.js';
import './createImpressionObserver-m2TNXj0r.js';
import './types-DqusP3LW.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './Image-9Pub_w4s.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-DSmlH766.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-B-yVUDqy.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './names-Cka5BSlk.js';
import './Slideshow-ChO0chUe.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhbbLEi.js';
import './Checkbox-4N2aMGfq.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './truncate-CqAvmyZI.js';
const Ce = ({ vertical: s }) => ce({ ...S, height: s ? '100%' : void 0, '.ss__result__image-wrapper': { height: s ? '85%' : void 0 } }),
	lt = Y((s) => {
		const c = Z(),
			k = ee(),
			T = {
				breakpoints: s.vertical ? JSON.parse(JSON.stringify(ue)) : JSON.parse(JSON.stringify(he)),
				pagination: !1,
				loop: !0,
				title: s.controller?.store?.profile?.display?.templateParameters?.title,
				description: s.controller?.store?.profile?.display?.templateParameters?.description,
				treePath: k,
			},
			x = { name: s.controller?.store?.profile?.tag?.toLowerCase(), ...s };
		let r = te('recommendation', c, T, x),
			a;
		!(s.theme?.type == 'templates' || c?.type == 'templates') &&
			r.breakpoints &&
			((a = de(r.breakpoints)), a && Object.keys(a).length && (r = { ...r, ...a }));
		const {
				title: d,
				description: _,
				controller: t,
				children: o,
				loop: A,
				results: O,
				pagination: w,
				nextButton: B,
				prevButton: z,
				hideButtons: V,
				disableStyles: u,
				className: j,
				internalClassName: F,
				style: ve,
				styleScript: Re,
				themeStyleScript: Ne,
				lazyRender: J,
				vertical: L,
				hideTitle: M,
				treePath: C,
				...W
			} = r,
			l = r.resultComponent,
			$ = re(),
			m = typeof l == 'string',
			I = m ? l : '',
			q = $?.templates?.library.import.component.result || {},
			{ ComponentOverride: D, shouldWaitForNamedOverride: E } = oe(q, m ? I : void 0),
			v = m ? D : l,
			h = { enabled: !0, offset: '10%', ...J };
		if (!t || t.type !== 'recommendation')
			throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
		const i = O || t.store?.results;
		if (Array.isArray(o) && o.length !== i.length)
			return (
				t.log.error(
					"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
				),
				null
			);
		const f = {
				carousel: { internalClassName: 'ss__recommendation__Carousel', ...b({ disableStyles: u, vertical: L }), theme: r?.theme, treePath: C },
				result: { internalClassName: 'ss__recommendation__result', ...b({ disableStyles: u }), theme: r?.theme, treePath: C },
			},
			G = se(r, Ce),
			[H, K] = ne(!1),
			R = ie(null);
		(!h?.enabled || ge(R, `${h.offset} 0px ${h.offset} 0px`, !0)) && K(!0);
		const Q = { titleText: { value: `${d}` } },
			U = N(Q, r.lang || {}),
			X = ye(U, {}, { activeBreakpoint: c?.activeBreakpoint });
		return (Array.isArray(o) && o.length) || i?.length
			? e(pe, {
					children: e('div', {
						...G,
						style: u ? S : void 0,
						className: me('ss__recommendation', j, F),
						ref: R,
						children: H
							? ae(P, {
									controller: t,
									children: [
										d && !M && e('h3', { className: 'ss__recommendation__title', ...X.titleText?.all, children: d }),
										_ && e('p', { className: 'ss__recommendation__description', children: _ }),
										e(fe, {
											prevButton: z,
											nextButton: B,
											hideButtons: V,
											loop: A,
											pagination: w,
											...f.carousel,
											...W,
											children:
												Array.isArray(o) && o.length
													? o.map((n, g) => e(p, { controller: t, result: i[g], children: n }))
													: i.map((n) =>
															e(p, {
																controller: t,
																result: n,
																children:
																	v && t
																		? le(v, {
																				controller: t,
																				result: n,
																				treePath: f.result.treePath,
																				theme: m ? N(r.theme || {}, { components: { result: { customComponent: l } } }) : r.theme,
																		  })
																		: E
																		? null
																		: e(_e, { ...f.result, controller: t, result: n }, n.id),
															})
													  ),
										}),
									],
							  })
							: e(P, {
									controller: t,
									children:
										Array.isArray(o) && o.length
											? o.map((n, g) => e(p, { controller: t, result: i[g], children: e(y, {}) }))
											: i.map((n) => e(p, { controller: t, result: n, children: e(y, {}) })),
							  }),
					}),
			  })
			: e(y, {});
	});
export { lt as Recommendation };
