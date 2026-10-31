import { o as d, u as f, a as u, m as g, b as h, c as p, j as r, d as b, C as k, t as v, e as P } from './iframe-Bc4KSH0T.js';
const y = ({ width: a, height: t, round: o, backgroundColor: e, animatedColor: s }) => {
		const n = v({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
		return P({
			width: a,
			height: t,
			borderRadius: o ? a : '0.25rem',
			backgroundColor: e,
			display: 'inline-flex',
			lineHeight: '1',
			position: 'relative',
			overflow: 'hidden',
			zIndex: '1',
			'&:after': {
				content: '""',
				display: 'block',
				position: 'absolute',
				left: '0',
				right: '0',
				height: '100%',
				backgroundRepeat: 'no-repeat',
				backgroundImage: `linear-gradient(90deg, ${e}, ${s}, ${e})`,
				transform: 'translateX(-100%)',
				animation: `${n} 1.5s linear infinite`,
				animationTimingFunction: 'ease-in-out',
			},
		});
	},
	C = d((a) => {
		const t = f(),
			e = { backgroundColor: '#ebebeb', animatedColor: '#f5f5f5', treePath: u() },
			s = g('skeleton', t, e, a),
			{ className: n, internalClassName: i } = s,
			{ overrideElement: l, shouldRenderDefault: m } = h('skeleton', s);
		if (!m) return l;
		const c = p(s, y);
		return r(k, { children: r('div', { ...c, className: b('ss__skeleton', n, i) }) });
	});
export { C as S };
