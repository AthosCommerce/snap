import {
	o as F,
	u as W,
	x as D,
	a as I,
	m as M,
	n as h,
	b as J,
	z as L,
	f as y,
	c as q,
	j as m,
	p as z,
	J as G,
	d as H,
	C as K,
	e as Q,
} from './iframe-CXSVAHru.js';
import { R as f } from './types-DqusP3LW.js';
import { u as U } from './useDisplaySettings-D0_uZPs4.js';
import { d as g } from './defined-CdKp_MB-.js';
import { R as V } from './ResultTracker-D4h_hXCO.js';
import { I as X } from './InlineBanner-DsZBvWCz.js';
import { w as Y } from './withTracking-DWvVsRqK.js';
import { Result as Z } from './Result-BacvSyPr.js';
const ee = ({ gapSize: t, columns: n }) =>
		Q({
			display: 'flex',
			flexFlow: 'row wrap',
			gap: t,
			gridTemplateRows: 'auto',
			gridTemplateColumns: `repeat(${n}, 1fr)`,
			'& .ss__result, & .ss__result-layout': {
				boxSizing: 'border-box',
				flex: '0 1 auto',
				width: `calc(${100 / n}% - (${n - 1} * ${t} / ${n} ) )`,
				marginRight: t,
				marginBottom: t,
				[`&:nth-of-type(${n}n)`]: { marginRight: '0' },
				[`&:nth-last-of-type(-n+${n})`]: { marginBottom: '0' },
			},
			'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
		}),
	se = Y(Z),
	de = F((t) => {
		const n = W(),
			C = D(),
			_ = I(),
			R = { 0: { columns: t.columns || 1 }, 540: { columns: t.columns || 2 }, 768: { columns: t.columns || 3 }, 991: { columns: t.columns || 4 } },
			$ = { results: t.controller?.store?.results, columns: 4, gapSize: '20px', layout: f.grid, breakpoints: R, treePath: _ };
		let e = M('results', n, $, t);
		if (!(t.theme?.type == 'templates' || n?.type == 'templates')) {
			const s = U(e?.breakpoints || {}),
				A = h(e?.theme || {}, s?.theme || {}, { arrayMerge: (te, E) => E });
			e = { ...e, ...s, theme: A };
		}
		const { disableStyles: u, className: b, internalClassName: N, layout: w, theme: d, excludeBanners: x, controller: o, treePath: i } = e,
			r = e.resultComponent,
			{ overrideElement: v, shouldRenderDefault: T } = J('results', e);
		if (!T) return v;
		const l = typeof r == 'string',
			P = l ? r : '',
			B = C?.templates?.library.import.component.result || {},
			{ ComponentOverride: k, shouldWaitForNamedOverride: S } = L(B, l ? P : void 0),
			c = l ? k : r,
			p = {
				result: { internalClassName: 'ss__results__result', ...g({ disableStyles: u }), theme: e?.theme, treePath: i },
				inlineBanner: { controller: o, internalClassName: 'ss__results__inline-banner', ...g({ disableStyles: u }), theme: e?.theme, treePath: i },
			};
		let a = x ? e.results?.filter((s) => s.type !== y.BANNER) : e.results;
		e?.columns && e?.rows && e.columns > 0 && e.rows > 0 && (a = a?.slice(0, e.columns * e.rows));
		const O = q({ ...e, columns: w == f.list ? 1 : e.columns }, ee),
			j = l ? h(d || {}, { components: { result: { customComponent: r } } }) : d;
		return a?.length
			? m(K, {
					children: m('div', {
						...O,
						className: H('ss__results', `ss__results-${e.layout}`, b, N),
						children: a.map((s) =>
							s.type === y.BANNER
								? G(X, { ...p.inlineBanner, key: `${o?.id ? `${o?.id}-` : ''}${s.id}`, banner: s, layout: e.layout })
								: S
								? null
								: c && o
								? m(V, {
										result: s,
										controller: o,
										children: z(c, { key: `${o?.id ? `${o?.id}-` : ''}${s.id}`, controller: o, result: s, theme: j, treePath: i }),
								  })
								: m(se, { ...p.result, result: s, layout: e.layout, controller: o }, `${o?.id ? `${o?.id}-` : ''}${s.id}`)
						),
					}),
			  })
			: null;
	});
export { de as R };
