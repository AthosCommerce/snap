import { o as i, u as b, a as h, m as p, b as P, c as f, j as t, d as C, C as T, e as v } from './iframe-U9T2Y9ZS.js';
const x = () => v({ maxHeight: '100%', maxWidth: '100%' }),
	y = i((r) => {
		const l = b(),
			o = { treePath: h() },
			e = p('badgeImage', l, o, r),
			{ label: m, url: s, tag: a, className: n, internalClassName: g } = e,
			{ overrideElement: c, shouldRenderDefault: d } = P('badgeImage', e);
		if (!d) return c;
		const u = f(e, x);
		return s
			? t(T, { children: t('img', { ...u, className: C('ss__badge-image', `ss__badge-image--${a}`, n, g), alt: m || `${a} badge`, src: s }) })
			: null;
	});
export { y as B };
