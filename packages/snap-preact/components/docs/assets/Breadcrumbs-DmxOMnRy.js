import { o as N, u as C, a as v, m as x, b as S, c as T, j as e, l as j, F as n, I, d as q, C as B, e as F } from './iframe-Bc4KSH0T.js';
import { d as R } from './defined-CdKp_MB-.js';
const $ = () =>
		F({
			'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
			'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
		}),
	O = N((c) => {
		const _ = C(),
			d = {
				separator: '>',
				treePath: v(),
				data: c.controller
					? (s) => [{ label: 'Search' }, { label: `Results ${s?.store.search?.query?.string ? `for "${s?.store.search?.query?.string}"` : ''}` }]
					: [{ label: 'Search' }],
			},
			r = x('breadcrumbs', _, d, c),
			{ data: t, separator: o, separatorIcon: a, className: m, internalClassName: b, controller: u, disableStyles: i, treePath: h } = r,
			{ overrideElement: p, shouldRenderDefault: f } = S('breadcrumbs', r);
		if (!f) return p;
		const g = { icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...R({ disableStyles: i }), theme: r?.theme, treePath: h } },
			y = T(r, $);
		let l;
		return (
			typeof t == 'function' ? (l = t(u)) : (l = t),
			l
				? e(B, {
						children: e('div', {
							...y,
							className: q('ss__breadcrumbs', m, b),
							children: e('ul', {
								className: 'ss__breadcrumbs__crumbs',
								children: l
									.map((s) =>
										e('li', { className: 'ss__breadcrumbs__crumbs__crumb', children: s.url ? e('a', { href: s.url, children: s.label }) : s.label })
									)
									.reduce((s, P) => [
										s,
										j('li', {
											className: 'ss__breadcrumbs__crumbs__separator',
											children: [o !== !1 ? o : e(n, {}), a && e(I, { ...g.icon, ...(typeof a == 'string' ? { icon: a } : a) })],
										}),
										P,
									]),
							}),
						}),
				  })
				: e(n, {})
		);
	});
export { O as B };
