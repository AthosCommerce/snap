import { o as g, u, a as b, m as h, b as p, c as x, j as a, d as v, C as T, e as _ } from './iframe-U9T2Y9ZS.js';
const f = ({ colorText: e }) =>
		_({
			display: 'inline-block',
			boxSizing: 'border-box',
			padding: '0.3em 0.9em',
			color: e,
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			maxWidth: '100%',
		}),
	N = g((e) => {
		const o = u(),
			r = { colorText: '#000000', treePath: b() },
			s = h('badgeText', o, r, e),
			{ value: t, tag: l, className: n, internalClassName: d } = s,
			{ overrideElement: c, shouldRenderDefault: i } = p('badgeText', s);
		if (!i) return c;
		const m = x(s, f);
		return t
			? a(T, {
					children: a('div', {
						...m,
						className: v('ss__badge-text', `ss__badge-text--${l}`, n, d),
						children: a('span', { className: 'ss__badge-text__value', children: t }),
					}),
			  })
			: null;
	});
export { N as B };
