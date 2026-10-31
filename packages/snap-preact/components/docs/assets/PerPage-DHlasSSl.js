import { o as v, u as C, a as y, m as x, b as T, c as N, n as w, l as R, j as d, d as u, C as j, e as k } from './iframe-Bc4KSH0T.js';
import { d as S } from './defined-CdKp_MB-.js';
import { S as q } from './Select-C5jrZYxP.js';
import { L as D } from './List-DGhbbLEi.js';
import { R as E } from './RadioList-mYVU-cPs.js';
const I = () => k({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
	M = v((_) => {
		const h = C(),
			P = { label: 'Per Page', type: 'dropdown', treePath: y() },
			t = x('perPage', h, P, _),
			{ pagination: b, type: l, controller: f, label: a, disableStyles: i, className: n, internalClassName: r, treePath: p } = t,
			{ overrideElement: z, shouldRenderDefault: L } = T('perPage', t);
		if (!L) return z;
		const e = b || f?.store?.pagination,
			c = {
				select: { ...S({ disableStyles: i }), theme: t?.theme, treePath: p },
				RadioList: { ...S({ disableStyles: i }), theme: t?.theme, treePath: p },
				List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...S({ disableStyles: i }), theme: t?.theme, treePath: p },
			},
			g = N(t, I),
			O = e && e?.pageSizeOptions?.find((o) => o.value == e?.pageSize),
			m = w({ label: { value: a } }, t.lang || {});
		return e?.pageSize && typeof e?.pageSizeOptions == 'object' && e.pageSizeOptions?.length
			? R(j, {
					children: [
						l?.toLowerCase() == 'dropdown' &&
							d(q, {
								...g,
								className: u('ss__per-page', 'ss__per-page__select', n, r),
								...c.select,
								label: a,
								options: e.pageSizeOptions,
								selected: O,
								onSelect: (o, s) => {
									e.setPageSize(+s.value);
								},
								lang: { buttonLabel: m.label },
							}),
						l?.toLowerCase() == 'list' &&
							d(D, {
								...g,
								className: u('ss__per-page', 'ss__per-page__list', n, r),
								...c.List,
								onSelect: (o, s) => {
									e.setPageSize(+s.value);
								},
								requireSelection: !0,
								options: e.pageSizeOptions,
								selected: e.pageSizeOption,
								titleText: a,
								lang: { title: m.label },
							}),
						l?.toLowerCase() == 'radio' &&
							d(E, {
								...g,
								className: u('ss__per-page', 'ss__per-page__radioList', n, r),
								...c.RadioList,
								onSelect: (o, s) => {
									e.setPageSize(+s.value);
								},
								options: e.pageSizeOptions,
								selected: e.pageSizeOption,
								titleText: a,
								lang: { title: m.label },
							}),
					],
			  })
			: null;
	});
export { M as P };
