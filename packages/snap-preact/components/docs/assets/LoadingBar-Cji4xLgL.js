import { o as f, u as g, a as b, m as h, b as p, c as u, j as o, d as v, C as _, t as y, e as x } from './iframe-CXSVAHru.js';
const P = ({ color: s, height: t, backgroundColor: r, theme: e }) => {
		const a = y({
			from: { left: '-200px', width: '30%' },
			'50%': { width: '30%' },
			'70%': { width: '70%' },
			'80%': { left: '50%' },
			'95%': { left: '120%' },
			to: { left: '100%' },
		});
		return x({
			height: t,
			position: 'fixed',
			top: '0',
			left: '0',
			right: '0',
			margin: 'auto',
			transition: 'opacity 0.3s ease',
			opacity: '1',
			visibility: 'visible',
			zIndex: '10000',
			background: r || e?.variables?.colors?.secondary || '#f8f8f8',
			'& .ss__loading-bar__bar': {
				position: 'absolute',
				top: '0',
				left: '-200px',
				height: '100%',
				background: `${s || e?.variables?.colors?.primary || '#ccc'}`,
				animation: `${a} 2s linear infinite`,
			},
		});
	},
	N = f((s) => {
		const t = g(),
			e = { height: '5px', treePath: b() },
			a = h('loadingBar', t, e, s),
			{ active: i, className: n, internalClassName: l } = a,
			{ overrideElement: c, shouldRenderDefault: d } = p('loadingBar', a);
		if (!d) return c;
		const m = u(a, P);
		return i
			? o(_, { children: o('div', { ...m, className: v('ss__loading-bar', n, l), children: o('div', { className: 'ss__loading-bar__bar' }) }) })
			: null;
	});
export { N as L };
