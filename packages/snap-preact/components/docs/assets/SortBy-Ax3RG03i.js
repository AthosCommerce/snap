import { o as v, u as x, a as T, m as N, b as w, c as R, n as j, l as B, j as u, d as p, C as O, e as k } from './iframe-CXSVAHru.js';
import { d as b } from './defined-CdKp_MB-.js';
import { S as z } from './Select-DAPmdZ4V.js';
import { L as D } from './List-DGhdnIhb.js';
import { R as E } from './RadioList-uOtV-0O8.js';
const I = () => k({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
	M = v((g) => {
		const h = x(),
			y = { label: 'Sort By', type: 'dropdown', treePath: T() },
			t = N('sortBy', h, y, g),
			{ sorting: f, type: r, controller: L, hideLabel: S, disableStyles: a, className: n, internalClassName: i, treePath: c } = t;
		let s = t.label;
		const { overrideElement: C, shouldRenderDefault: P } = w('sortBy', t);
		if (!P) return C;
		const e = f || L?.store?.sorting,
			d = {
				Select: { ...b({ disableStyles: a }), theme: t?.theme, treePath: c },
				RadioList: { ...b({ disableStyles: a }), theme: t?.theme, treePath: c },
				List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...b({ disableStyles: a }), theme: t?.theme, treePath: c },
			},
			m = R(t, I),
			l = j({ label: { value: s } }, t.lang || {});
		return (
			S && (delete l.label.value, (s = void 0)),
			e?.current && typeof e?.options == 'object' && e.options?.length
				? B(O, {
						children: [
							r?.toLowerCase() == 'dropdown' &&
								u(z, {
									...m,
									className: p('ss__sortby', 'ss__sortby__select', n, i),
									...d.Select,
									label: s,
									options: e.options,
									selected: e.current,
									onSelect: (_, o) => {
										o?.url?.go();
									},
									lang: { buttonLabel: l.label },
								}),
							r?.toLowerCase() == 'list' &&
								u(D, {
									...m,
									className: p('ss__sortby', 'ss__sortby__list', n, i),
									...d.List,
									options: e.options,
									selected: e.current,
									titleText: s,
									onSelect: (_, o) => {
										o?.url?.go();
									},
									lang: { title: l.label },
								}),
							r?.toLowerCase() == 'radio' &&
								u(E, {
									...m,
									className: p('ss__sortby', 'ss__sortby__radioList', n, i),
									...d.RadioList,
									options: e.options,
									selected: e.current,
									titleText: s,
									onSelect: (_, o) => {
										o?.url?.go();
									},
									lang: { title: l.label },
								}),
						],
				  })
				: null
		);
	});
export { M as S };
