import {
	o as G,
	u as J,
	a as K,
	m as Q,
	b as U,
	s as V,
	c as X,
	y as S,
	A as T,
	j as m,
	l as N,
	p as f,
	d as Y,
	C as Z,
	H as $,
	e as ee,
} from './iframe-U9T2Y9ZS.js';
import { u as x } from './useA11y-BuGQuOJb.js';
import { d as oe } from './defined-CdKp_MB-.js';
import { u as te } from './useClickOutside-DeMSpwd-.js';
import { O as se } from './Overlay-BH_wZt84.js';
const le = () =>
		ee({
			position: 'relative',
			'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
			'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
			'.ss__modal__button': { cursor: 'pointer' },
			'.ss__modal__content': {
				backgroundColor: '#fff',
				position: 'absolute',
				minWidth: '100%',
				visibility: 'hidden',
				opacity: 0,
				top: 'auto',
				left: 0,
				zIndex: 10004,
			},
		}),
	ue = G((E) => {
		const L = J(),
			R = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: K() },
			n = Q('modal', L, R, E),
			{
				button: _,
				content: p,
				buttonSelector: s,
				children: b,
				disabled: r,
				open: v,
				onClick: a,
				lockScroll: i,
				startOpen: z,
				disableClickOutside: A,
				disableA11y: y,
				className: j,
				internalClassName: B,
				disableStyles: H,
				overlayColor: M,
				onOverlayClick: h,
				treePath: d,
			} = n,
			{ overrideElement: W, shouldRenderDefault: q } = U('modal', n);
		if (!q) return W;
		const D = {
			overlay: {
				internalClassName: 'ss__modal__overlay',
				onClick: (o) => {
					h && h(o), t();
				},
				...oe({ disableStyles: H, color: M }),
				theme: n?.theme,
				treePath: d,
			},
		};
		let e, l;
		const c = v === void 0;
		c ? ([e, l] = V(z)) : (e = v);
		let C;
		A ||
			(C = te(() => {
				e && (r || (c && l && l(!1)));
			}));
		const t = () => {
				c && l && l((o) => !o);
			},
			I = X(n, le);
		S(
			() => (
				e && i ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
				() => {
					document.body.style.overflow = '';
				}
			),
			[e, i]
		);
		const g = T(e),
			w = T(i);
		return (
			(g.current = e),
			(w.current = i),
			S(() => {
				const o = s ? (typeof s == 'string' ? document.querySelector(s) : s) : null;
				let k = !1,
					u;
				const O = $(() => {
						clearTimeout(u),
							(u = setTimeout(() => {
								k || (g.current && w.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
							}, 100));
					}, 10),
					P = (F) => {
						t(), a && a(F);
					};
				return (
					o && (r || o.addEventListener('click', P)),
					window.addEventListener('resize', O),
					() => {
						(k = !0), clearTimeout(u), window.removeEventListener('resize', O), o && o.removeEventListener('click', P);
					}
				);
			}, []),
			m(Z, {
				children: N('div', {
					...I,
					className: Y('ss__modal', { 'ss__modal--open': e }, { 'ss__modal--disabled': r }, j, B),
					ref: C,
					children: [
						!s &&
							_ &&
							m('div', {
								className: 'ss__modal__button',
								ref: (o) => (y ? null : x(o)),
								'aria-expanded': e,
								role: 'button',
								onClick: (o) => {
									r || (t(), a && a(o));
								},
								children: f(_, { open: e, toggleOpen: t, treePath: d }),
							}),
						(p || b) &&
							e &&
							N('div', {
								className: 'ss__modal__content',
								ref: (o) => (y ? null : x(o)),
								children: [f(p, { open: e, toggleOpen: t, treePath: d }), f(b, { open: e, toggleOpen: t, treePath: d })],
							}),
						m(se, { ...D.overlay, active: !!e }),
					],
				}),
			})
		);
	});
export { ue as M };
