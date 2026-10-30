import {
	o as Qe,
	u as Ze,
	a as et,
	m as tt,
	b as nt,
	s as R,
	A as l,
	y as U,
	c as st,
	j as r,
	n as re,
	l as xe,
	d as z,
	F as ke,
	C as at,
	e as ot,
} from './iframe-U9T2Y9ZS.js';
import { d as D } from './defined-CdKp_MB-.js';
import { u as ie } from './useLang-Dx66cFD0.js';
import { I as rt } from './Image-C5uuJXju.js';
import { B as K } from './Button-rwG4FGUK.js';
const it = ({ theme: T, slidesToShow: f = 1, slideWidth: E, gap: x = 16, overlayNavigation: s = !1, showNavigation: F }) =>
		ot({
			position: 'relative',
			overflow: 'hidden',
			'.ss__slideshow__container': {
				position: 'relative',
				width: `calc(100% - ${s || !F ? 0 : 60}px)`,
				margin: 'auto',
				overflow: 'hidden',
				touchAction: 'pan-y pinch-zoom',
			},
			'.ss__slideshow__track': {
				display: 'flex',
				width: '100%',
				transition: 'transform 0.3s ease-in-out',
				'&.ss__slideshow__track--dragging': { transition: 'none' },
				'&.ss__slideshow__track--centered': { justifyContent: 'center' },
			},
			'.ss__slideshow__slide': {
				...(E
					? { maxWidth: `${E}px`, minWidth: `${E}px` }
					: { maxWidth: `calc((100% - ${f * x}px) / ${f})`, minWidth: `calc((100% - ${f * x}px) / ${f})` }),
				marginLeft: `calc(${x}px / 2)`,
				marginRight: `calc(${x}px / 2)`,
				position: 'relative',
				userSelect: 'none',
				img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none', WebkitUserDrag: 'none' },
			},
			'.ss__slideshow__slide--content': { display: 'flex', alignItems: 'center', justifyContent: 'center', '> *': { width: '100%' } },
			'.ss__slideshow__slide--clickable': { cursor: 'pointer', '&:focus-visible': { outline: '2px solid #005fcc', outlineOffset: '2px' } },
			'.ss__slideshow__navigation': {
				position: 'absolute',
				top: '50%',
				transform: 'translateY(-50%)',
				zIndex: 10,
				'.ss__button': {
					border: 'none',
					width: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					'&:disabled': { cursor: 'not-allowed' },
					'&:focus-visible': { outline: '2px solid #005fcc', outlineOffset: '2px' },
				},
				'&--prev': { left: `${s ? 10 : 0}px` },
				'&--next': { right: `${s ? 10 : 0}px` },
			},
			'.ss__slideshow__pagination': {
				position: 'relative',
				margin: '10px auto',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '8px',
				'.ss__slideshow__dot': {
					width: '8px',
					height: '8px',
					borderRadius: '50%',
					background: '#000',
					opacity: '.2',
					border: 'none',
					cursor: 'pointer',
					padding: 0,
					'&.ss__slideshow__dot--active': { opacity: '0.8', background: T?.variables?.colors?.primary || '#000' },
					'&:focus-visible': { outline: '-webkit-focus-ring-color auto 1px !important' },
				},
			},
			'.ss__slideshow__sr-only': {
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: 0,
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				whiteSpace: 'nowrap',
				border: 0,
			},
		}),
	gt = Qe((T) => {
		const f = Ze(),
			x = {
				treePath: et(),
				fallbackImage: '//cdn.athoscommerce.net/snap/images/fallback.png',
				autoPlay: !1,
				autoPlayInterval: 3e3,
				showNavigation: !0,
				showPagination: !0,
				centerInsufficientSlides: !0,
				slidesToShow: T.slideWidth ? void 0 : 4,
				slidesToMove: 1,
				startIndex: 0,
				gap: 10,
				ariaLabel: 'slideshow',
				touchDragging: !0,
				dragThreshold: 50,
				dragClickThreshold: 10,
			},
			s = tt('slideshow', f, x, T),
			{
				className: F,
				slides: ye,
				fallbackImage: le,
				autoPlay: ce,
				autoPlayInterval: W,
				showNavigation: Pe,
				showPagination: Ie,
				loop: h,
				alwaysShowNavigation: Ce,
				slidesToShow: De,
				slideImageAlt: Be,
				centerInsufficientSlides: Me,
				ariaLabel: $e,
				ariaLabelledBy: Se,
				disableStyles: k,
				slideWidth: j,
				startIndex: G,
				gap: ue,
				treePath: y,
				overlayNavigation: de,
				dragThreshold: Ne,
				dragClickThreshold: Le,
			} = s,
			{ overrideElement: Re, shouldRenderDefault: Te } = nt('slideshow', s);
		if (!Te) return Re;
		let p = s.touchDragging;
		const P = {
			Image: { fallback: le, draggable: !1, ...D({ disableStyles: k }), theme: s.theme, treePath: y },
			NextButton: {
				backgroundColor: de ? 'rgba(255, 255, 255, 0.9)' : void 0,
				name: 'next',
				...D({ disableStyles: k }),
				theme: s.theme,
				treePath: y,
			},
			PrevButton: {
				backgroundColor: de ? 'rgba(255, 255, 255, 0.9)' : void 0,
				name: 'prev',
				...D({ disableStyles: k }),
				theme: s.theme,
				treePath: y,
			},
			PauseButton: { name: 'pause', ...D({ disableStyles: k }), theme: s.theme, treePath: y },
			PaginationButton: { name: 'pagination', ...D({ disableStyles: k }), theme: s.theme, treePath: y },
			PaginationCurrentButton: { name: 'pagination-current', ...D({ disableStyles: k }), theme: s.theme, treePath: y },
		};
		let i = s.slidesToMove;
		i || (i = 1);
		const [c, _] = R(G ?? 0),
			[m, I] = R(ce),
			[he, ge] = R(0),
			u = l(null),
			Ee = l(null),
			v = l(null),
			H = l(!1);
		U(() => {
			const e = v.current?.parentElement;
			if (!e) return;
			const t = new ResizeObserver((o) => {
				for (const a of o) ge(a.contentRect.width);
			});
			return t.observe(e), ge(e.offsetWidth), () => t.disconnect();
		}, []);
		const [g, We] = R(!1),
			O = l(!1),
			fe = (e) => {
				(O.current = e), We(e);
			},
			V = l(0),
			Y = l(0),
			[q, J] = R(0),
			B = l(null),
			d = ye.map((e, t) =>
				typeof e == 'string'
					? { src: e }
					: e && typeof e == 'object' && 'props' in e && 'type' in e
					? { content: e, alt: `Slide ${t + 1}` }
					: e && typeof e == 'object'
					? e
					: { content: e, alt: `Slide ${t + 1}` }
			),
			M = d.length,
			b = j && he > 0 ? Math.max(1, Math.floor(he / (j + (ue ?? 0)))) : De ?? 4,
			$ = Math.min(b, M),
			n = Math.max(0, M - $),
			pe = l(void 0);
		U(() => {
			const e = Math.max(0, G ?? 0);
			pe.current !== e && (_(Math.min(e, n)), e <= n && (pe.current = e));
		}, [G, n]);
		const S = [];
		for (let e = 0; e <= n; e += i) S.push(e);
		const Q = S.length,
			je = S.findIndex((e) => c >= e && c < e + i);
		U(() => {
			if (m && d.length > b && !g)
				return (
					(u.current = setInterval(() => {
						_((e) => {
							const t = e + i;
							return h ? (t > n ? 0 : t) : t >= n ? (I(!1), n) : t;
						});
					}, W)),
					() => {
						u.current && clearInterval(u.current);
					}
				);
			u.current && clearInterval(u.current);
		}, [m, W, d.length, b, i, h, n, g]),
			M <= $ && (p = !1);
		const _e = () => {
				const t = (v.current?.parentElement?.offsetWidth || 0) / $;
				return Math.min(Ne, t * 0.3);
			},
			me = (e) => {
				p &&
					((B.current = null),
					v.current?.parentElement && (B.current = v.current.getBoundingClientRect().left - v.current.parentElement.getBoundingClientRect().left),
					(H.current = !1),
					I(!1),
					fe(!0),
					J(0),
					(V.current = e),
					(Y.current = e),
					u.current && clearInterval(u.current));
			},
			Z = (e) => {
				if (!O.current || !p) return;
				Y.current = e;
				const t = e - V.current;
				Math.abs(t) > Math.min(Le, _e()) && (H.current = !0), J(t);
			},
			ee = () => {
				if (!O.current || !p) return;
				const e = Y.current - V.current,
					t = _e();
				Math.abs(e) > t && (e > 0 && (h || c > 0) ? te() : e < 0 && (h || c < n) && ne()),
					fe(!1),
					J(0),
					(B.current = null),
					m &&
						d.length > b &&
						(u.current = setInterval(() => {
							_((o) => {
								const a = o + i;
								return h ? (a > n ? 0 : a) : a >= n ? (I(!1), n) : a;
							});
						}, W));
			},
			ve = l(Z),
			be = l(ee);
		(ve.current = Z), (be.current = ee);
		const N = l(null),
			Oe = (e) => {
				e.preventDefault(), me(e.clientX);
				const t = (a) => ve.current(a.clientX),
					o = () => {
						N.current?.(), be.current();
					};
				N.current?.(),
					(N.current = () => {
						document.removeEventListener('mousemove', t), document.removeEventListener('mouseup', o), (N.current = null);
					}),
					document.addEventListener('mousemove', t),
					document.addEventListener('mouseup', o);
			};
		U(() => () => N.current?.(), []);
		const Ae = () => {
				m && u.current && !g && clearInterval(u.current);
			},
			Xe = () => {
				m &&
					d.length > b &&
					!g &&
					(u.current = setInterval(() => {
						_((e) => {
							const t = e + i;
							return h ? (t > n ? 0 : t) : t >= n ? (I(!1), n) : t;
						});
					}, W));
			},
			Ue = (e, t) => {
				e.onClick && !g && !H.current && e.onClick(e, t);
			},
			ze = (e, t, o) => {
				(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), t.onClick && !g && t.onClick(t, o));
			},
			Ke = (e) => {
				switch (e.key) {
					case 'ArrowLeft':
						e.preventDefault(), te();
						break;
					case 'ArrowRight':
						e.preventDefault(), ne();
						break;
					case 'Home':
						e.preventDefault(), _(0);
						break;
					case 'End':
						e.preventDefault(), _(n);
						break;
					case ' ':
					case 'Spacebar':
						e.preventDefault(), we();
						break;
					case 'Escape':
						e.preventDefault(), I(!1);
						break;
				}
			},
			te = () => {
				_((e) => {
					let t;
					return h ? (t = e - i < 0 ? n : e - i) : (t = Math.max(0, e - i)), t;
				});
			},
			ne = () => {
				_((e) => {
					let t;
					return h ? (t = e + i > n ? 0 : e + i) : (t = Math.min(n, e + i)), t;
				});
			},
			Fe = (e) => {
				const t = S[e] || 0;
				_(t);
			},
			we = () => {
				I(!m);
			},
			Ge = st(s, it);
		if (!d || d.length === 0) return r(ke, {});
		let C, A;
		if (g && B.current !== null) (C = B.current + q), (A = 'px');
		else if (j) {
			const e = j + (ue ?? 0);
			(C = -(c * e)), (A = 'px'), g && (C += q);
		} else {
			const e = 100 / $;
			if (((C = -(c * e)), (A = '%'), g && v.current)) {
				const t = v.current.parentElement?.offsetWidth || 0,
					o = (q / t) * 100;
				C += o;
			}
		}
		const se = !h && c === 0,
			ae = !h && c >= n,
			He = {
				pauseButton: { value: m ? 'Pause' : 'Play', attributes: { 'aria-label': m ? 'Pause slideshow' : 'Resume slideshow' } },
				nextButton: { attributes: { 'aria-label': `Next slides${ae ? ' (disabled)' : ''}` } },
				prevButton: { attributes: { 'aria-label': `Previous slides${se ? ' (disabled)' : ''}` } },
				srInstructions: {
					value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
						p && 'Swipe left or right to navigate on touch devices.'
					}`,
				},
			},
			Ve = re(He, s.lang || {}),
			X = ie(Ve, { isPlaying: m, isNextDisabled: ae, isPrevDisabled: se }, { activeBreakpoint: f?.activeBreakpoint });
		return r(at, {
			children: xe('div', {
				...Ge,
				className: z('ss__slideshow', F),
				ref: Ee,
				role: 'region',
				'aria-label': $e,
				'aria-labelledby': Se,
				'aria-roledescription': 'slideshow',
				onMouseEnter: Ae,
				onMouseLeave: Xe,
				onKeyDown: Ke,
				tabIndex: 0,
				children: [
					r('div', { className: 'ss__slideshow__sr-only', ...X.srInstructions.all }),
					r('div', {
						className: 'ss__slideshow__container',
						children: r('div', {
							ref: v,
							className: z('ss__slideshow__track', { 'ss__slideshow__track--dragging': g, 'ss__slideshow__track--centered': Me && M <= b }),
							style: { transform: `translateX(${C}${A})` },
							role: 'group',
							'aria-label': `Slide group ${c} of ${Q}`,
							onTouchStart: p ? (e) => me(e.touches[0].clientX) : void 0,
							onTouchMove: p
								? (e) => {
										O.current && e.preventDefault();
										const t = e.touches[0];
										Z(t.clientX);
								  }
								: void 0,
							onTouchEnd: p ? ee : void 0,
							onMouseDown: p ? Oe : void 0,
							children: d.map((e, t) => {
								const o = t >= c && t < c + b,
									a = !!e.onClick,
									L = !!e.content,
									w = e.alt || Be || `Image ${t + 1}`,
									oe = { slide: { attributes: { 'aria-label': a ? `Click to view ${w}` : `${w} ${t + 1} of ${d.length}` } } },
									Ye = re(oe, s.lang || {}),
									qe = ie(Ye, { hasClickHandler: a, imageAlt: w, index: t, slidesLength: d.length }, { activeBreakpoint: f?.activeBreakpoint });
								return r(
									'div',
									{
										...qe.slide.all,
										className: z('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': a, 'ss__slideshow__slide--content': L }),
										role: a ? 'button' : L ? 'presentation' : 'img',
										'aria-hidden': !o,
										tabIndex: a && o ? 0 : -1,
										onClick: a ? () => Ue(e, t) : void 0,
										onKeyDown: a ? (Je) => ze(Je, e, t) : void 0,
										children: L ? e.content : r(rt, { ...P.Image, src: e.src || le, alt: o ? w : '' }),
									},
									t
								);
							}),
						}),
					}),
					!!(Ce || (Pe && d.length > b)) &&
						xe(ke, {
							children: [
								r('div', {
									className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
									children: r(K, {
										icon: 'angle-left',
										className: 'ss__slideshow__prev',
										disabled: se,
										...X.prevButton.all,
										...P.PrevButton,
										onClick: te,
									}),
								}),
								r('div', {
									className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
									children: r(K, {
										className: 'ss__slideshow__next',
										icon: 'angle-right',
										disabled: ae,
										...X.nextButton.all,
										...P.NextButton,
										onClick: ne,
									}),
								}),
							],
						}),
					Ie &&
						M > $ &&
						r('div', {
							className: 'ss__slideshow__pagination',
							role: 'tablist',
							'aria-label': 'Slide navigation',
							children: S.map((e, t) => {
								const o = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${t + 1} of ${Q}` } } },
									a = re(o, s.lang || {}),
									L = ie(a, { index: t, totalDots: Q }, { activeBreakpoint: f?.activeBreakpoint }),
									w = je === t,
									oe = w ? P.PaginationCurrentButton : P.PaginationButton;
								return r(
									K,
									{
										className: z('ss__slideshow__dot', { 'ss__slideshow__dot--active': w }),
										onClick: () => Fe(t),
										'aria-selected': w,
										...L.paginationButton.all,
										...oe,
										children: r('span', { className: 'ss__slideshow__dot-inner' }),
									},
									t
								);
							}),
						}),
					ce && r(K, { className: 'ss__slideshow__sr-only', ...P.PauseButton, onClick: we, ...X.pauseButton.all }),
				],
			}),
		});
	});
export { gt as S };
