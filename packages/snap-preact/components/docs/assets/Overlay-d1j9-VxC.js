import { o as f, u as h, a as g, m as y, b, c as p, j as l, d as C, C as P, e as _ } from './iframe-Bc4KSH0T.js';
import { u as k } from './useA11y-BuGQuOJb.js';
const T = ({ transitionSpeed: e, color: s }) =>
		_({
			transition: `background ${e} ease 0s, left 0s ease ${e}`,
			position: 'fixed',
			zIndex: '10003',
			height: '100%',
			width: '100%',
			top: '0',
			left: '-100%',
			'&.ss__overlay--active': { transition: `background ${e} ease, left 0s ease`, background: s, left: '0' },
		}),
	$ = f((e) => {
		const s = h(),
			n = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: g() },
			a = y('overlay', s, n, e),
			{ active: o, onClick: t, disableA11y: c, className: i, internalClassName: u } = a,
			{ overrideElement: d, shouldRenderDefault: m } = b('overlay', a);
		if (!m) return d;
		const v = p(a, T);
		return l(P, {
			children: l('div', {
				onClick: (r) => t && o && t(r),
				ref: (r) => (c ? null : k(r, o ? 0 : -1)),
				className: C('ss__overlay', { 'ss__overlay--active': o }, i, u),
				...v,
			}),
		});
	});
export { $ as O };
