import {
	o as Q,
	u as U,
	a as V,
	m as Z,
	b as ee,
	s as P,
	A as S,
	_ as oe,
	c as te,
	l as j,
	p as T,
	j as u,
	$ as se,
	d as z,
	C as ne,
	e as re,
} from './iframe-U9T2Y9ZS.js';
import { u as $ } from './useA11y-BuGQuOJb.js';
import { u as ie } from './useClickOutside-DeMSpwd-.js';
const le = ({ disableOverlay: r }) =>
		re({
			position: 'relative',
			'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
				'& .ss__dropdown__content': { position: r ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
			},
			'.ss__dropdown__button': { cursor: `${r ? 'default' : 'pointer'}` },
			'.ss__dropdown__content': {
				backgroundColor: '#fff',
				position: 'absolute',
				minWidth: '100%',
				visibility: 'hidden',
				opacity: 0,
				top: 'auto',
				left: 0,
			},
		}),
	ue = Q((r) => {
		const f = U(),
			B = { startOpen: !1, disableA11y: !1, treePath: V() },
			_ = Z('dropdown', f, B, r),
			{
				button: W,
				content: w,
				children: m,
				disabled: i,
				open: E,
				toggleOnHover: l,
				onMouseEnter: h,
				onMouseLeave: v,
				disableClick: H,
				onClick: a,
				onToggle: d,
				focusTrapContent: X,
				startOpen: Y,
				disableClickOutside: q,
				disableA11y: N,
				className: k,
				internalClassName: L,
				treePath: b,
				usePortal: c,
			} = _,
			{ overrideElement: F, shouldRenderDefault: G } = ee('dropdown', _);
		if (!G) return F;
		let o, n;
		const p = E === void 0;
		p ? ([o, n] = P(Y)) : (o = E);
		const [x, D] = P(!1),
			g = S(null),
			C = S(null),
			[y, J] = P({ top: 0, left: 0, width: 0 });
		let R;
		q ||
			(R = ie((e) => {
				(c && C.current && C.current.contains(e.target)) || (o && (i || (p && n && n(!1), d && d(e, !1))));
			}, !0)),
			oe(() => {
				if (c && o) {
					const e = () => {
						if (g.current) {
							const t = g.current.getBoundingClientRect();
							J({ top: t.bottom + window.scrollY, left: t.left + window.scrollX, width: t.width });
						}
					};
					return (
						e(),
						window.addEventListener('resize', e),
						window.addEventListener('scroll', e, !0),
						() => {
							window.removeEventListener('resize', e), window.removeEventListener('scroll', e, !0);
						}
					);
				}
			}, [c, o]);
		const s = (e, t) => {
				p &&
					n &&
					n((M) => {
						const O = t ?? !M;
						return O != M && d && d(e, O), O;
					});
			},
			A = te(_, le),
			K = {
				onMouseEnter:
					(l || h) &&
					((e) => {
						x || (l && !i && s(e, !0), h && h(e));
					}),
				onMouseLeave:
					(l || v) &&
					((e) => {
						x || (l && !i && s(e, !1), v && v(e));
					}),
			},
			I = j('div', {
				className: 'ss__dropdown__content',
				ref: (e) => {
					(C.current = e),
						N ||
							$(e, 0, !!X, (t) => {
								p ? s(t) : a && a(t);
							});
				},
				children: [T(w, { open: o, toggleOpen: s, treePath: b }), T(m, { open: o, toggleOpen: s, treePath: b })],
			});
		return u(ne, {
			children: j('div', {
				...A,
				className: z('ss__dropdown', { 'ss__dropdown--open': o }, k, L),
				ref: R,
				...K,
				children: [
					u('div', {
						className: 'ss__dropdown__button',
						ref: (e) => {
							(g.current = e), N || $(e);
						},
						'aria-expanded': o,
						role: 'button',
						onTouchStart: () => {
							D(!0);
						},
						onClick: (e) => {
							!i && !H && (s(e), a && a(e)),
								setTimeout(() => {
									D(!1);
								}, 300);
						},
						children: T(W, { open: o, toggleOpen: s, treePath: b }),
					}),
					c
						? (w || m) &&
						  se(
								u('div', {
									className: f.name ? `ss__theme__${f.name}` : 'ss__theme__global',
									children: u('div', {
										className: z('ss__dropdown__portal', k, L, { 'ss__dropdown__portal--open': o }),
										css: A.css,
										style: { position: 'absolute', top: y.top, left: y.left, width: y.width, zIndex: 10007, pointerEvents: o ? 'auto' : 'none' },
										children: I,
									}),
								}),
								document.body
						  )
						: (w || m) && I,
				],
			}),
		});
	});
export { ue as D };
