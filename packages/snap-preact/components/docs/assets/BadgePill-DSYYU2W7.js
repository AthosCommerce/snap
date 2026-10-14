import { o as b, u as g, a as u, m as p, b as h, c as f, j as l, d as P, C as v, e as _ } from './iframe-CXSVAHru.js';
const x = ({ color: e, colorText: s }) =>
		_({
			display: 'inline-block',
			boxSizing: 'border-box',
			padding: '0.3em 0.9em',
			background: e,
			color: s,
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			maxWidth: '100%',
			borderRadius: '1em',
		}),
	N = b((e) => {
		const s = g(),
			o = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: u() },
			a = p('badgePill', s, o, e),
			{ value: r, tag: t, className: n, internalClassName: i } = a,
			{ overrideElement: d, shouldRenderDefault: c } = h('badgePill', a);
		if (!c) return d;
		const m = f(a, x);
		return r
			? l(v, {
					children: l('div', {
						...m,
						className: P('ss__badge-pill', `ss__badge-pill--${t}`, n, i),
						children: l('span', { className: 'ss__badge-pill__value', children: r }),
					}),
			  })
			: null;
	});
export { N as B };
