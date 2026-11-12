import {
	o as re,
	u as ne,
	a as ae,
	m as se,
	s as I,
	A as m,
	n as le,
	y as N,
	b as ce,
	c as ie,
	$ as ue,
	j as l,
	l as y,
	d as ge,
	C as de,
	e as me,
} from './iframe-0uTqSs9S.js';
import { u as _e } from './useLang-Dx66cFD0.js';
import { B as _ } from './Button-CmsiLEAv.js';
import { d as g } from './defined-CdKp_MB-.js';
import { I as be } from './Image-C3O8T0nj.js';
import { u as he } from './useA11y-BuGQuOJb.js';
const fe = () =>
		me({
			position: 'fixed',
			inset: 0,
			zIndex: 10010,
			display: 'flex',
			flexDirection: 'column',
			background: 'rgba(0, 0, 0, 0.9)',
			'& .ss__gallery__toolbar': { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', padding: '12px 16px' },
			'& .ss__gallery__button': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 0,
				boxSizing: 'border-box',
				borderRadius: '4px',
				width: '40px',
				height: '40px',
				fontSize: '1.3em',
				lineHeight: 1,
				cursor: 'pointer',
				'&.ss__button--disabled': { opacity: 0.4, cursor: 'default' },
			},
			'& .ss__gallery__counter': { color: '#fff', marginRight: 'auto', padding: '0 8px', fontSize: '0.9em' },
			'& .ss__gallery__stage': {
				position: 'relative',
				flex: '1 1 auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
			},
			'& .ss__gallery__image': {
				maxWidth: '90vw',
				maxHeight: '80vh',
				objectFit: 'contain',
				userSelect: 'none',
				touchAction: 'none',
				transformOrigin: 'center center',
				transition: 'transform 0.05s linear',
			},
			'& .ss__gallery__nav': {
				position: 'absolute',
				top: 0,
				bottom: 0,
				height: '100%',
				width: '64px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 0,
				boxSizing: 'border-box',
				borderRadius: 0,
				fontSize: '2em',
				lineHeight: 1,
				cursor: 'pointer',
				zIndex: 1,
				'&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.085))' },
			},
			'& .ss__gallery__nav--prev': { left: 0 },
			'& .ss__gallery__nav--next': { right: 0 },
		}),
	ke = re((A) => {
		const D = ne(),
			Z = { treePath: ae(), startIndex: 0, zoomMin: 1, zoomMax: 4, zoomStep: 0.5, swipeThreshold: 40 },
			t = se('gallery', D, Z, A),
			{ images: M, open: c, startIndex: p, onClose: a, alt: $, className: H, internalClassName: F } = t,
			n = t.zoomMin,
			T = t.zoomMax,
			B = t.zoomStep,
			G = t.swipeThreshold,
			R = (e) => Math.min(T, Math.max(n, e)),
			[d, j] = I(p || 0),
			[i, b] = I(n),
			[h, f] = I({ x: 0, y: 0 }),
			s = m(null),
			x = m(null),
			o = M?.length || 0,
			u = le(
				{
					gallery: { attributes: { 'aria-label': 'Image gallery' } },
					zoomOutButton: { attributes: { 'aria-label': 'Zoom out' } },
					zoomInButton: { attributes: { 'aria-label': 'Zoom in' } },
					closeButton: { attributes: { 'aria-label': 'Close gallery' } },
					prevButton: { attributes: { 'aria-label': 'Previous image' } },
					nextButton: { attributes: { 'aria-label': 'Next image' } },
				},
				t.lang || {}
			),
			q = _e(u, {});
		N(() => {
			c && (j(Math.min(Math.max(p || 0, 0), Math.max(o - 1, 0))), b(n), f({ x: 0, y: 0 }));
		}, [c, p, o]);
		const E = (e) => {
				if (o === 0) return;
				const r = (e + o) % o;
				j(r), b(n), f({ x: 0, y: 0 });
			},
			C = () => E(d - 1),
			v = () => E(d + 1),
			L = () => b((e) => R(e + B)),
			X = () =>
				b((e) => {
					const r = R(e - B);
					return r === n && f({ x: 0, y: 0 }), r;
				});
		N(() => {
			if (!c) return;
			const e = (r) => {
				switch (r.key) {
					case 'Escape':
						a && a();
						break;
					case 'ArrowRight':
						v();
						break;
					case 'ArrowLeft':
						C();
						break;
					case '+':
					case '=':
						L();
						break;
					case '-':
					case '_':
						X();
						break;
				}
			};
			return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
		}, [c, d, o]);
		const z = m(null),
			P = m(null),
			S = m(!1);
		N(() => {
			const e = !!(c && o > 0);
			e && !S.current
				? ((P.current = document.activeElement || null), (z.current?.querySelector('.ss__gallery__close') || z.current)?.focus())
				: !e && S.current && (P.current?.focus?.(), (P.current = null)),
				(S.current = e);
		});
		const { overrideElement: K, shouldRenderDefault: U } = ce('gallery', t);
		if (!U) return K;
		const W = ie(t, fe);
		if (!c || o === 0) return null;
		const J = (e) => {
				i <= n ||
					(e.preventDefault(),
					e.currentTarget?.setPointerCapture?.(e.pointerId),
					(s.current = { startX: e.clientX, startY: e.clientY, baseX: h.x, baseY: h.y }));
			},
			Q = (e) => {
				s.current && f({ x: s.current.baseX + (e.clientX - s.current.startX), y: s.current.baseY + (e.clientY - s.current.startY) });
			},
			Y = () => {
				s.current = null;
			},
			O = (e) => {
				e.target === e.currentTarget && a && a();
			},
			V = (e) => {
				e.touches && e.touches.length === 1 && (x.current = { x: e.touches[0].clientX, y: e.touches[0].clientY });
			},
			ee = (e) => {
				const r = x.current;
				if (((x.current = null), !r || i > n || o <= 1)) return;
				const k = e.changedTouches && e.changedTouches[0];
				if (!k) return;
				const w = k.clientX - r.x,
					oe = k.clientY - r.y;
				Math.abs(w) > G && Math.abs(w) > Math.abs(oe) && (w < 0 ? v() : C());
			},
			te = M[d];
		return ue(
			l(de, {
				children: y('div', {
					...W,
					className: ge('ss__gallery', H, F),
					role: 'dialog',
					'aria-modal': 'true',
					...q.gallery?.attributes,
					ref: (e) => {
						(z.current = e), he(e, 0, !0, () => a && a());
					},
					onClick: O,
					children: [
						y('div', {
							className: 'ss__gallery__toolbar',
							children: [
								o > 1 && y('span', { className: 'ss__gallery__counter', children: [d + 1, ' / ', o] }),
								l(_, {
									name: 'zoom-out',
									internalClassName: 'ss__gallery__button ss__gallery__zoom-out',
									color: '#fff',
									backgroundColor: 'rgba(255, 255, 255, 0.12)',
									borderColor: 'transparent',
									icon: { icon: 'minus', color: 'currentColor' },
									lang: { button: u.zoomOutButton },
									disabled: i <= n,
									onClick: X,
									theme: t.theme,
									treePath: t.treePath,
									...g({ disableStyles: t.disableStyles }),
								}),
								l(_, {
									name: 'zoom-in',
									internalClassName: 'ss__gallery__button ss__gallery__zoom-in',
									color: '#fff',
									backgroundColor: 'rgba(255, 255, 255, 0.12)',
									borderColor: 'transparent',
									icon: { icon: 'plus', color: 'currentColor' },
									lang: { button: u.zoomInButton },
									disabled: i >= T,
									onClick: L,
									theme: t.theme,
									treePath: t.treePath,
									...g({ disableStyles: t.disableStyles }),
								}),
								l(_, {
									name: 'close',
									internalClassName: 'ss__gallery__button ss__gallery__close',
									color: '#fff',
									backgroundColor: 'rgba(255, 255, 255, 0.12)',
									borderColor: 'transparent',
									icon: { icon: 'close', color: 'currentColor' },
									lang: { button: u.closeButton },
									onClick: () => a && a(),
									theme: t.theme,
									treePath: t.treePath,
									...g({ disableStyles: t.disableStyles }),
								}),
							],
						}),
						y('div', {
							className: 'ss__gallery__stage',
							onClick: O,
							onTouchStart: V,
							onTouchEnd: ee,
							children: [
								o > 1 &&
									l(_, {
										name: 'prev',
										internalClassName: 'ss__gallery__nav ss__gallery__nav--prev',
										color: '#fff',
										backgroundColor: 'rgba(255, 255, 255, 0.06)',
										borderColor: 'transparent',
										icon: { icon: 'angle-left', color: 'currentColor' },
										lang: { button: u.prevButton },
										onClick: C,
										theme: t.theme,
										treePath: t.treePath,
										...g({ disableStyles: t.disableStyles }),
									}),
								l(be, {
									internalClassName: 'ss__gallery__image',
									src: te,
									alt: $ || '',
									draggable: !1,
									style: { transform: `translate(${h.x}px, ${h.y}px) scale(${i})`, cursor: i > n ? (s.current ? 'grabbing' : 'grab') : 'default' },
									onPointerDown: J,
									onPointerMove: Q,
									onPointerUp: Y,
									onPointerLeave: Y,
									theme: t.theme,
									treePath: t.treePath,
									...g({ disableStyles: t.disableStyles }),
								}),
								o > 1 &&
									l(_, {
										name: 'next',
										internalClassName: 'ss__gallery__nav ss__gallery__nav--next',
										color: '#fff',
										backgroundColor: 'rgba(255, 255, 255, 0.06)',
										borderColor: 'transparent',
										icon: { icon: 'angle-right', color: 'currentColor' },
										lang: { button: u.nextButton },
										onClick: v,
										theme: t.theme,
										treePath: t.treePath,
										...g({ disableStyles: t.disableStyles }),
									}),
							],
						}),
					],
				}),
			}),
			document.body
		);
	});
export { ke as G };
