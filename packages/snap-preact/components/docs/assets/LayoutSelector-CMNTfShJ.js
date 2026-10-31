import { o as N, u as T, a as O, m as R, b as j, c as I, n as W, l as k, j as f, d as L, C as q, e as z } from './iframe-Bc4KSH0T.js';
import { d as S } from './defined-CdKp_MB-.js';
import { S as D } from './Select-C5jrZYxP.js';
import { L as E } from './List-DGhbbLEi.js';
import { R as A } from './RadioList-mYVU-cPs.js';
const B = ({}) => z({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
	Q = N((n) => {
		const _ = T(),
			y = O(),
			v = { label: 'Layout', type: 'dropdown', showSingleOption: !1, selected: n.options && n.options.length ? n.options[0] : void 0, treePath: y },
			e = R('layoutSelector', _, v, n),
			{
				options: o,
				selected: c,
				type: d,
				onSelect: l,
				showSingleOption: w,
				hideLabel: C,
				hideOptionLabels: i,
				disableStyles: u,
				className: m,
				internalClassName: h,
				treePath: b,
			} = e;
		let a = e.label;
		const { overrideElement: P, shouldRenderDefault: x } = j('layoutSelector', e);
		if (!x) return P;
		const p = {
				Select: { hideOptionLabels: i, ...S({ disableStyles: u }), theme: e?.theme, treePath: b },
				RadioList: { hideOptionLabels: i, ...S({ disableStyles: u }), theme: e?.theme, treePath: b },
				List: {
					multiSelect: !1,
					horizontal: !0,
					hideOptionCheckboxes: !0,
					hideOptionLabels: i,
					requireSelection: !0,
					...S({ disableStyles: u }),
					theme: e?.theme,
					treePath: b,
				},
			},
			g = I(e, B),
			r = W({ label: { value: a } }, e.lang || {});
		if ((C && (delete r.label.value, (a = void 0)), i)) {
			const t = o?.filter((s) => !s.icon);
			t?.length && console.warn('Warning - found layout options with no visible label or icon', t);
		}
		return (o && o.length > 1) || (o?.length === 1 && w)
			? k(q, {
					children: [
						d?.toLowerCase() == 'dropdown' &&
							f(D, {
								...g,
								className: L('ss__layout__select', m, h),
								...p.Select,
								label: a,
								options: o,
								selected: c,
								onSelect: (t, s) => {
									l && l(t, s);
								},
								lang: { buttonLabel: r.label },
							}),
						d?.toLowerCase() == 'list' &&
							f(E, {
								...g,
								className: L('ss__layout__list', m, h),
								...p.List,
								onSelect: (t, s) => {
									l && l(t, s);
								},
								options: o,
								selected: c,
								titleText: a,
								lang: { title: r.label },
							}),
						d?.toLowerCase() == 'radio' &&
							f(A, {
								...g,
								className: L('ss__layout__radioList', m, h),
								...p.RadioList,
								onSelect: (t, s) => {
									l && l(t, s);
								},
								options: o,
								selected: c,
								titleText: a,
								lang: { title: r.label },
							}),
					],
			  })
			: null;
	});
export { Q as L };
