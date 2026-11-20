import {
	o as A,
	u as G,
	a as I,
	m as D,
	n as y,
	x as H,
	z as L,
	c as q,
	s as B,
	A as E,
	j as o,
	l as J,
	p as K,
	F as Q,
	d as U,
	C as X,
	e as Y,
} from './iframe-CBMP6iq3.js';
import { u as Z } from './useDisplaySettings-DCCuBpZP.js';
import { d as ee } from './defined-CdKp_MB-.js';
import { u as te } from './useIntersection-1a9oca-F.js';
import { l as C, R as _ } from './RecommendationProfileTracker-BWihLUwH.js';
import { R as w } from './ResultTracker-CBy-MeUe.js';
import { Result as se } from './Result-C3mmRPuX.js';
import './preload-helper-PPVm8Dsz.js';
import './createImpressionObserver-BETervzW.js';
import './types-DqusP3LW.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-ByZlAQ-V.js';
import './defaultBadgeComponentMap-ByRaqHv1.js';
import './BadgeImage-qABHGrVa.js';
import './BadgeRectangle-D-DJ5cYF.js';
import './BadgePill-DZ4Tt_po.js';
import './BadgeText-DWl6wYDE.js';
import './Image-DCYn0aso.js';
import './Button-CDadhUc9.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-DoxQ9c-v.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-Bwb5vRVd.js';
import './Price-b0F4x_FF.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxzFXcsF.js';
import './Swatches-ik7K4L0U.js';
import './names-EhrrLUyQ.js';
import './Slideshow-DT_s099s.js';
import './Grid-BA6Sqccj.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-Bltyzt-T.js';
import './Checkbox-Bf1jD8rh.js';
import './Dropdown-DmIQwaKA.js';
import './useClickOutside-CYgcb6yY.js';
import './truncate-CqAvmyZI.js';
const oe = ({ gapSize: n, columns: i }) =>
		Y({
			...C,
			maxWidth: '100%',
			maxHeight: '100%',
			'.ss__recommendation-grid__results': {
				display: 'flex',
				flexFlow: 'row wrap',
				gap: n,
				gridTemplateRows: 'auto',
				gridTemplateColumns: `repeat(${i}, 1fr)`,
				overflow: 'auto',
				'@supports (display: grid)': { display: 'grid' },
			},
		}),
	Le = A((n) => {
		const i = G(),
			R = I(),
			b = {
				results: n.controller?.store?.results,
				gapSize: '20px',
				title: n.controller?.store?.profile?.display?.templateParameters?.title,
				treePath: R,
			},
			v = { name: n.controller?.store?.profile?.tag?.toLowerCase(), ...n };
		let e = D('recommendationGrid', i, b, v);
		if (!(n.theme?.type == 'templates' || i?.type == 'templates')) {
			const s = Z(e?.breakpoints || {}),
				O = y(e?.theme || {}, s?.theme || {}, { arrayMerge: (ne, $) => $ });
			e = { ...e, ...s, theme: O };
		}
		const { disableStyles: p, title: c, trim: d, lazyRender: x, className: N, internalClassName: P, treePath: u, theme: h, controller: r } = e,
			l = e.resultComponent,
			S = H(),
			m = typeof l == 'string',
			T = m ? l : '',
			z = S?.templates?.library.import.component.result || {},
			{ ComponentOverride: F, shouldWaitForNamedOverride: M } = L(z, m ? T : void 0),
			f = m ? F : l,
			a = { enabled: !0, offset: '10%', ...x },
			V = { result: { internalClassName: 'ss__recommendation-grid__result', ...ee({ disableStyles: p }), theme: e?.theme } };
		let t = e.results || r.store.results;
		if (!e.columns && !e.rows) (e.rows = 1), (e.columns = t.length);
		else if (e.columns && !e.rows) {
			if (((e.rows = Math.floor(t.length / e.columns)), d)) {
				const s = t.length % e.columns;
				t = t.slice(0, t.length - s);
			}
		} else if (e.rows && !e.columns) {
			if (d) {
				const s = t.length % e.rows;
				t = t.slice(0, t.length - s);
			}
			e.columns = Math.ceil(t.length / e.rows);
		} else e?.columns && e?.rows && e.columns > 0 && e.rows > 0 && (t = t?.slice(0, e.columns * e.rows));
		const W = q(e, oe),
			[j, k] = B(!1),
			g = E(null);
		return (
			(!a?.enabled || te(g, `${a.offset} 0px ${a.offset} 0px`, !0)) && k(!0),
			t?.length
				? o(X, {
						children: o('div', {
							...W,
							style: p ? C : void 0,
							ref: g,
							className: U('ss__recommendation-grid', N, P),
							children: j
								? J(_, {
										controller: r,
										children: [
											c && o('h3', { className: 'ss__recommendation-grid__title', children: c }),
											o('div', {
												className: 'ss__recommendation-grid__results',
												children: t.map((s) =>
													f && r
														? K(f, {
																controller: r,
																result: s,
																theme: m ? y(h || {}, { components: { result: { customComponent: l } } }) : h,
																treePath: u,
														  })
														: M
														? null
														: o(w, { result: s, controller: r, children: o(se, { ...V.result, result: s, controller: r, treePath: u }, s.id) })
												),
											}),
										],
								  })
								: o(_, { controller: r, children: t.map((s) => o(w, { controller: r, result: s, children: o(Q, {}) })) }),
						}),
				  })
				: null
		);
	});
export { Le as RecommendationGrid };
