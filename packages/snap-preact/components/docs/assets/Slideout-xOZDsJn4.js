import {
	s as g,
	y as C,
	o as j,
	u as L,
	a as z,
	m as E,
	b as I,
	_ as O,
	c as Q,
	l as R,
	p as b,
	j as y,
	d as F,
	C as V,
	e as Y,
} from './iframe-U9T2Y9ZS.js';
import { d as q } from './defined-CdKp_MB-.js';
import { O as G } from './Overlay-BH_wZt84.js';
function H(e, n) {
	if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
	const t = window.matchMedia(e),
		[u, s] = g(!!t.matches);
	return (
		C(() => {
			s(!!t.matches);
			const r = () => s(!!t.matches);
			return (
				t.addListener(r),
				() => {
					n instanceof Function && n(), t.removeListener(r);
				}
			);
		}, [e]),
		u
	);
}
const J = ({ slideDirection: e, transitionSpeed: n, width: t }) =>
		Y({
			display: 'block',
			position: 'fixed',
			transition: `${e || 'left'} ${n}`,
			left: e == 'left' ? `-${t}` : e != 'right' ? '0' : 'initial',
			right: e == 'right' ? `-${t}` : 'initial',
			bottom: e == 'bottom' ? '-100vh' : 'initial',
			top: e == 'top' ? '-100vh' : e == 'bottom' ? 'initial' : '0',
			height: '100%',
			zIndex: '10004',
			width: t?.endsWith('%') && parseInt(t.split('%')[0]) > 90 ? t : '90%',
			maxWidth: t,
			padding: '10px',
			background: '#fff',
			boxSizing: 'border-box',
			overflowY: 'auto',
			'&.ss__slideout--active': {
				left: e == 'left' || e != 'right' ? '0' : 'initial',
				right: e == 'right' ? '0' : 'initial',
				bottom: e == 'bottom' ? '0' : 'initial',
				top: e == 'top' ? '0' : e == 'bottom' ? 'initial' : '0',
			},
		}),
	Z = j((e) => {
		const n = L(),
			u = {
				active: !1,
				displayAt: '',
				slideDirection: 'left',
				width: '300px',
				overlayColor: 'rgba(0,0,0,0.8)',
				transitionSpeed: '0.25s',
				treePath: z(),
				rerender: !0,
			},
			s = E('slideout', n, u, e),
			{
				children: r,
				active: i,
				rerender: m,
				buttonContent: f,
				buttonSelector: d,
				noButtonWrapper: x,
				displayAt: P,
				transitionSpeed: S,
				overlayColor: w,
				onChange: _,
				disableStyles: A,
				className: N,
				internalClassName: T,
				treePath: c,
			} = s,
			{ overrideElement: k, shouldRenderDefault: B } = I('slideout', s);
		if (!B) return k;
		const M = {
				overlay: {
					internalClassName: 'ss__slideout__overlay',
					...q({ disableStyles: A, color: w, transitionSpeed: S }),
					theme: s?.theme,
					treePath: c,
				},
			},
			[o, h] = g(!!i),
			[W, v] = g(!!i),
			l = () => {
				const a = !o;
				o
					? (h(!1),
					  m &&
							setTimeout(() => {
								v(!1);
							}, 250))
					: (h(!0), v(!0)),
					(document.body.style.overflow = a ? 'hidden' : ''),
					_ && _(a);
			};
		O(() => {
			v(!!i), h(!!i);
		}, [i]);
		const p = H(P, () => {
			document.body.style.overflow = '';
		});
		document.body.style.overflow = p && o ? 'hidden' : '';
		const $ = Q(s, J);
		return (
			C(() => {
				if (d) {
					let a;
					typeof d == 'string' ? (a = document.querySelector(d)) : (a = d), a && a.addEventListener('click', () => l());
				}
			}, []),
			p || !m
				? R(V, {
						children: [
							f &&
								(x
									? b(f, { toggleActive: l, active: o, treePath: c })
									: y('div', { className: 'ss__slideout__button', onClick: () => l(), children: b(f, { active: o, treePath: c }) })),
							y('div', {
								className: F('ss__slideout', N, T, { 'ss__slideout--active': o }),
								style: { visibility: m || p ? 'visible' : 'hidden' },
								...$,
								children: W && b(r, { toggleActive: l, active: o, treePath: c }),
							}),
							y(G, { ...M.overlay, active: o, onClick: l }),
						],
				  })
				: null
		);
	});
export { Z as S, H as u };
