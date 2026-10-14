import { o as N, u as T, a as z, m as F, b as H, s as y, A as I, y as R, c as U, j as a, d as w, C as B, e as G } from './iframe-CXSVAHru.js';
const K = '//cdn.athoscommerce.net/snap/images/fallback.png',
	V = ({ height: o }) =>
		G({
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			height: o || 'auto',
			'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
			'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
		}),
	J = N((o) => {
		const C = T(),
			_ = z(),
			s = F('image', C, { fallback: K, lazy: !0, treePath: _ }, o),
			{
				alt: i,
				src: n,
				fallback: l,
				title: x,
				hoverSrc: t,
				lazy: L,
				onMouseOver: c,
				onMouseOut: m,
				onError: u,
				onLoad: d,
				onClick: g,
				onPointerDown: f,
				onPointerMove: v,
				onPointerUp: h,
				onPointerLeave: P,
				className: M,
				internalClassName: k,
				draggable: O,
			} = s,
			{ overrideElement: S, shouldRenderDefault: j } = H('image', s);
		if (!j) return S;
		const [A, p] = y(!1),
			[D, b] = y(!1),
			r = I('');
		R(() => {
			r.current = n;
		}),
			r.current && r.current != n && p(!1);
		const E = U(s, V);
		return a(B, {
			children: a('div', {
				...E,
				className: w('ss__image', { 'ss__image--hidden': !A }, M, k),
				children: a('img', {
					src: (D ? t : n) || l,
					alt: i,
					title: x || i,
					loading: L ? 'lazy' : void 0,
					onLoad: (e) => {
						p(!0), d && d(e);
					},
					onClick: (e) => g && g(e),
					onError: (e) => {
						(e.target.src = l || ''), u && u(e);
					},
					onMouseOver: (e) => {
						t && b(!0), c && c(e);
					},
					onMouseOut: (e) => {
						t && b(!1), m && m(e);
					},
					onPointerDown: (e) => {
						f && f(e);
					},
					onPointerMove: (e) => {
						v && v(e);
					},
					onPointerUp: (e) => {
						h && h(e);
					},
					onPointerLeave: (e) => {
						P && P(e);
					},
					draggable: O,
				}),
			}),
		});
	});
export { K as F, J as I };
