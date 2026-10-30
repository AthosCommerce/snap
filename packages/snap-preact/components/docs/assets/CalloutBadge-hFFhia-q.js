import { o as P, u as B, x as N, a as x, m as T, b as _, c as j, j as s, d as M, C as S, z as $, e as E } from './iframe-U9T2Y9ZS.js';
import { f as O } from './fieldNameToComponentName-CjebIDZG.js';
import { d as R } from './defaultBadgeComponentMap-tdX2yVU2.js';
const z = () => E({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
	D = ({ badge: e, badgeComponentMap: o, treePath: n }) => {
		const { ComponentOverride: t } = $(o, e.component);
		return t ? s(t, { ...e, ...e.parameters, treePath: n }) : null;
	},
	q = P((e) => {
		const o = B(),
			n = N(),
			t = x(),
			c = { name: e.tag ? O(e.tag) : void 0, tag: 'callout', limit: 1, treePath: t },
			a = T('calloutBadge', o, c, e),
			{ result: p, tag: r, renderEmpty: d, limit: u, className: i, internalClassName: g, treePath: f } = a,
			{ overrideElement: C, shouldRenderDefault: h } = _('calloutBadge', a);
		if (!h) return C;
		const b = { ...R, ...(n?.templates?.library.import.component.badge || {}), ...a.componentMap },
			y = j(a, z),
			l = p?.display?.badges?.atLocation(r).slice(0, u);
		return d || l?.length
			? s(S, {
					children: s('div', {
						...y,
						className: M('ss__callout-badge', `ss__callout-badge--${r?.replace('/', '-')}`, i, g),
						children: l.map((m, v) => s(D, { badge: m, badgeComponentMap: b, treePath: f }, `${m.component}-${v}`)),
					}),
			  })
			: null;
	});
export { q as C };
