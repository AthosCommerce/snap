import { o as I, u as R, a as U, m as w, b as B, s as i, A as G, y as K, c as V, j as l, d as W, C as q, e as J } from './iframe-0uTqSs9S.js';
const Q = '//cdn.athoscommerce.net/snap/images/fallback.png',
	X = ({ height: s }) =>
		J({
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			height: s || 'auto',
			'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
			'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
		}),
	ee = I((s) => {
		const o = R(),
			M = U(),
			r = w('image', o, { fallback: Q, lazy: !0, treePath: M }, s),
			{
				alt: c,
				src: t,
				srcset: u,
				sizes: k,
				fallback: d,
				title: A,
				hoverSrc: n,
				lazy: F,
				onMouseOver: m,
				onMouseOut: f,
				onError: g,
				onLoad: v,
				onClick: h,
				onPointerDown: p,
				onPointerMove: P,
				onPointerUp: b,
				onPointerLeave: y,
				className: O,
				internalClassName: j,
				draggable: z,
			} = r,
			{ overrideElement: D, shouldRenderDefault: E } = B('image', r);
		if (!E) return D;
		const [N, C] = i(!1),
			[a, S] = i(!1),
			[T, _] = i(!1),
			x = G(t);
		K(() => {
			x.current = t;
		}),
			x.current != t && (C(!1), _(!1));
		const H = V(r, X),
			L = T || (a && typeof u != 'function') ? void 0 : Y(a ? n : t, u);
		return l(q, {
			children: l('div', {
				...H,
				className: W('ss__image', { 'ss__image--hidden': !N }, O, j),
				children: l('img', {
					loading: F ? 'lazy' : void 0,
					src: (a ? n : t) || d,
					srcSet: L,
					sizes: k,
					alt: c,
					title: A || c,
					onLoad: (e) => {
						C(!0), v && v(e);
					},
					onClick: (e) => h && h(e),
					onError: (e) => {
						L ? _(!0) : (e.target.src = d || ''), g && g(e);
					},
					onMouseOver: (e) => {
						n && S(!0), m && m(e);
					},
					onMouseOut: (e) => {
						n && S(!1), f && f(e);
					},
					onPointerDown: (e) => {
						p && p(e);
					},
					onPointerMove: (e) => {
						P && P(e);
					},
					onPointerUp: (e) => {
						b && b(e);
					},
					onPointerLeave: (e) => {
						y && y(e);
					},
					draggable: z,
				}),
			}),
		});
	}),
	Y = (s, o) => (typeof o == 'function' ? (s && o(s)) || void 0 : o);
export { Q as F, ee as I };
