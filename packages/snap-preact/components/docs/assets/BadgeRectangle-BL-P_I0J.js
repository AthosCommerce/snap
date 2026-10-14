import { o as m, u as b, a as u, m as h, b as p, c as f, j as r, d as v, C as _, e as x } from './iframe-CXSVAHru.js';
const P = ({ color: e, colorText: a }) =>
		x({
			display: 'inline-block',
			boxSizing: 'border-box',
			padding: '0.3em 0.9em',
			background: e,
			color: a,
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			maxWidth: '100%',
		}),
	N = m((e) => {
		const a = b(),
			o = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: u() },
			s = h('badgeRectangle', a, o, e),
			{ value: l, tag: t, className: n, internalClassName: c } = s,
			{ overrideElement: d, shouldRenderDefault: g } = p('badgeRectangle', s);
		if (!g) return d;
		const i = f(s, P);
		return l
			? r(_, {
					children: r('div', {
						...i,
						className: v('ss__badge-rectangle', `ss__badge-rectangle--${t}`, n, c),
						children: r('span', { className: 'ss__badge-rectangle__value', children: l }),
					}),
			  })
			: null;
	});
export { N as B };
