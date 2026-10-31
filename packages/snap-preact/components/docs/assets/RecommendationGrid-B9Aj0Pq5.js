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
} from './iframe-Bc4KSH0T.js';
import { u as Z } from './useDisplaySettings-7OChHsa4.js';
import { d as ee } from './defined-CdKp_MB-.js';
import { u as te } from './useIntersection-C53zN6Qj.js';
import { l as C, R as _ } from './RecommendationProfileTracker-D9NFNSF6.js';
import { R as w } from './ResultTracker-COjEKXyJ.js';
import { Result as se } from './Result-BzjtDAC1.js';
import './preload-helper-PPVm8Dsz.js';
import './createImpressionObserver-m2TNXj0r.js';
import './types-DqusP3LW.js';
import './useLang-Dx66cFD0.js';
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
