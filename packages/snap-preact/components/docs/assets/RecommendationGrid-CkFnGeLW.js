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
} from './iframe-U9T2Y9ZS.js';
import { u as Z } from './useDisplaySettings-9sk5Dt1c.js';
import { d as ee } from './defined-CdKp_MB-.js';
import { u as te } from './useIntersection-D52kaMEq.js';
import { l as C, R as _ } from './RecommendationProfileTracker-1483CJFp.js';
import { R as w } from './ResultTracker-D-Jc6Lj4.js';
import { Result as se } from './Result-Dham3Ici.js';
import './preload-helper-PPVm8Dsz.js';
import './createImpressionObserver-B76-2cq4.js';
import './types-DqusP3LW.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './Image-C5uuJXju.js';
import './Button-rwG4FGUK.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-hFFhia-q.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-DUxc2ffg.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './names-Cka5BSlk.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-9eXTq04g.js';
import './Checkbox-Dsv4fCi7.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
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
