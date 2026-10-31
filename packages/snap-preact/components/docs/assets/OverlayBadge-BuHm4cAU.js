import { o as O, u as M, x as z, a as E, m as R, b as A, j as l, c as D, l as F, d as f, C as I, e as y, z as L, F as v } from './iframe-Bc4KSH0T.js';
import { d as k } from './defaultBadgeComponentMap-B7jXcfLJ.js';
const q = ({ section: t, top: o, bottom: e, index: r, tag: g }) =>
		y({
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: t == 'right' ? 'flex-end' : 'flex-start',
			justifyContent: !o && !e ? 'center' : e && !o ? 'flex-end' : 'flex-start',
			gap: '0.5em',
			gridArea: g,
			boxSizing: 'border-box',
			zIndex: Math.max(100 - r, 1),
			width: '100%',
			height: '100%',
		}),
	G = ({ controller: t }) => {
		const e = t?.store?.meta?.badges?.groups?.['overlay']?.grid;
		let r = {};
		if (e?.length && e[0]?.length) {
			const g = e.map((c) => `"${c.join(' ')}"`).join(' ');
			r = {
				gridTemplateColumns: `repeat(${e[0].length}, minmax(0, 1fr))`,
				gridTemplateRows: `repeat(${e.length}, minmax(0, 1fr))`,
				gridTemplateAreas: g,
			};
		}
		return y({
			position: 'relative',
			'& .ss__overlay-badge__grid-wrapper': {
				pointerEvents: 'none',
				display: 'grid',
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				...r,
			},
		});
	},
	H = ({ badge: t, badgeComponentMap: o, treePath: e }) => {
		const { ComponentOverride: r } = L(o, t.component);
		return r ? l(r, { ...t, ...t.parameters, treePath: e }) : null;
	},
	U = O((t) => {
		const o = M(),
			e = z(),
			g = { limit: 1, treePath: E() },
			i = R('overlayBadge', o, g, t),
			{ result: c, children: d, controller: u, renderEmpty: _, limit: x, className: C, internalClassName: $, treePath: P } = i,
			{ overrideElement: w, shouldRenderDefault: B } = A('overlayBadge', i);
		if (!B) return w;
		if (!d) return u?.log?.warn('OverlayBadge component must have children'), null;
		const h = u?.store?.meta;
		if (!h) return u?.log?.warn('Controller must have a meta store'), l(v, { children: d });
		const T = 'overlay',
			S = { ...k, ...(e?.templates?.library.import.component.badge || {}), ...i.componentMap },
			b = h?.badges?.groups?.[T]?.sections
				?.map((a) => {
					const p = h?.data?.badges?.locations[a],
						s = p
							?.map((n, m) => ({
								tag: n.tag,
								name: n.name,
								top: m == 0,
								bottom: m == p.length - 1,
								badges: c?.display?.badges?.atLocation(`${a}/${n.tag}`).slice(0, x),
							}))
							.filter((n) => n.badges?.length);
					return { section: a, slots: s };
				})
				.filter((a) => a.slots?.length),
			j = D(i, G);
		return _ || b?.length
			? l(I, {
					children: F('div', {
						...j,
						className: f('ss__overlay-badge', C, $),
						children: [
							l('div', {
								className: 'ss__overlay-badge__grid-wrapper',
								children: b.map((a, p) =>
									a.slots?.map((s) => {
										const n = q({ ...i, tag: s.tag, section: a.section, index: p, top: s.top, bottom: s.bottom });
										return l(
											'div',
											{
												className: f('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${s.tag}`),
												css: [n],
												children: s.badges.map((m, N) => l(H, { badge: m, badgeComponentMap: S, treePath: P }, `${s.tag}-${m.component}-${N}`)),
											},
											`${a.section}-${s.tag}`
										);
									})
								),
							}),
							d,
						],
					}),
			  })
			: l(v, { children: d });
	});
export { U as O };
