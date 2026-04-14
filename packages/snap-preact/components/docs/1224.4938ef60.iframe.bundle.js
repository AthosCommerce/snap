'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(et, me, n) {
				n.d(me, { b: () => ye });
				var s = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ge = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					pe = n('../../node_modules/classnames/index.js'),
					W = n.n(pe),
					fe = n('./components/src/providers/cache.tsx'),
					ve = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Pe = n('./components/src/providers/snap.tsx'),
					be = n('./components/src/providers/treePath.tsx'),
					E = n('./components/src/utilities/defined.ts'),
					Ee = n('./components/src/utilities/mergeProps.ts'),
					we = n('./components/src/utilities/mergeStyles.ts'),
					De = n('./components/src/components/Atoms/Image/Image.tsx'),
					A = n('./components/src/components/Atoms/Button/Button.tsx'),
					j = n('./components/src/hooks/useLang.tsx'),
					xe = n('./components/src/hooks/useComponent.tsx'),
					Me = n('../../node_modules/deepmerge/dist/cjs.js'),
					Y = n.n(Me);
				const Ie = ({ theme: R, slidesToShow: w = 1, slideWidth: y, gap: C = 16, overlayNavigation: O = !1, showNavigation: a }) =>
					(0, ge.AH)({
						position: 'relative',
						overflow: 'hidden',
						'.ss__slideshow__container': {
							position: 'relative',
							width: `calc(100% - ${O || !a ? 0 : 60}px)`,
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
							...(y
								? { maxWidth: `${y}px`, minWidth: `${y}px` }
								: { maxWidth: `calc((100% - ${w * C}px) / ${w})`, minWidth: `calc((100% - ${w * C}px) / ${w})` }),
							marginLeft: `calc(${C}px / 2)`,
							marginRight: `calc(${C}px / 2)`,
							position: 'relative',
							userSelect: 'none',
							img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' },
						},
						'.ss__slideshow__slide--content': { display: 'flex', alignItems: 'center', justifyContent: 'center', '> *': { width: '100%' } },
						'.ss__slideshow__slide--clickable': {
							cursor: 'pointer',
							'&:hover img': { opacity: 0.9, transition: 'opacity 0.2s ease' },
							'&:focus-visible': { outline: '2px solid #005fcc', outlineOffset: '2px' },
						},
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
							'&--prev': { left: `${O ? 10 : 0}px` },
							'&--next': { right: `${O ? 10 : 0}px` },
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
								'&.ss__slideshow__dot--active': { opacity: '0.8', background: R?.variables?.colors?.primary || '#000' },
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
					});
				function ye(R) {
					const w = (0, ve.u)(),
						y = (0, Pe.uk)(),
						O = {
							treePath: (0, be.LU)(),
							fallbackImage: '//cdn.athoscommerce.net/snap/images/fallback.png',
							autoPlay: !1,
							autoPlayInterval: 3e3,
							showNavigation: !0,
							showPagination: !0,
							centerInsufficientSlides: !0,
							slidesToShow: R.slideWidth ? void 0 : 4,
							slidesToMove: 1,
							gap: 10,
							ariaLabel: 'slideshow',
							touchDragging: !0,
							dragThreshold: 50,
						},
						a = (0, Ee.v6)('slideshow', w, O, R),
						{
							className: Ce,
							slides: Oe,
							fallbackImage: Q,
							autoPlay: q,
							autoPlayInterval: S,
							showNavigation: Be,
							showPagination: Le,
							loop: p,
							alwaysShowNavigation: ke,
							slidesToShow: Te,
							slideImageAlt: $e,
							centerInsufficientSlides: We,
							ariaLabel: Ae,
							ariaLabelledBy: Re,
							disableStyles: D,
							slideWidth: K,
							gap: ee,
							treePath: x,
							overlayNavigation: te,
							dragThreshold: Se,
							customComponent: se,
						} = a;
					if (se) {
						const e = (0, xe.x)(y?.templates?.library.import.component.slideshow || {}, se);
						if (e) return (0, s.Y)(e, { ...a });
					}
					let l = a.touchDragging;
					const M = {
						Image: { fallback: Q, ...(0, E.s)({ disableStyles: D }), theme: a.theme, treePath: x },
						NextButton: {
							backgroundColor: te ? 'rgba(255, 255, 255, 0.9)' : void 0,
							name: 'next',
							...(0, E.s)({ disableStyles: D }),
							theme: a.theme,
							treePath: x,
						},
						PrevButton: {
							backgroundColor: te ? 'rgba(255, 255, 255, 0.9)' : void 0,
							name: 'prev',
							...(0, E.s)({ disableStyles: D }),
							theme: a.theme,
							treePath: x,
						},
						PauseButton: { name: 'pause', ...(0, E.s)({ disableStyles: D }), theme: a.theme, treePath: x },
						PaginationButton: { name: 'pagination', ...(0, E.s)({ disableStyles: D }), theme: a.theme, treePath: x },
						PaginationCurrentButton: { name: 'pagination-current', ...(0, E.s)({ disableStyles: D }), theme: a.theme, treePath: x },
					};
					let i = a.slidesToMove;
					i || (i = 1);
					const [h, v] = (0, r.J0)(0),
						[f, I] = (0, r.J0)(q),
						[ne, oe] = (0, r.J0)(0),
						m = (0, r.li)(null),
						Ke = (0, r.li)(null),
						B = (0, r.li)(null);
					(0, r.vJ)(() => {
						const e = B.current?.parentElement;
						if (!e) return;
						const t = new ResizeObserver((d) => {
							for (const u of d) oe(u.contentRect.width);
						});
						return t.observe(e), oe(e.offsetWidth), () => t.disconnect();
					}, []);
					const [c, ae] = (0, r.J0)(!1),
						[ie, Ue] = (0, r.J0)(0),
						[Ne, re] = (0, r.J0)(0),
						[le, ce] = (0, r.J0)(0),
						g = Oe.map((e, t) =>
							typeof e == 'string'
								? { src: e }
								: e && typeof e == 'object' && 'props' in e && 'type' in e
								? { content: e, alt: `Slide ${t + 1}` }
								: e && typeof e == 'object'
								? e
								: { content: e, alt: `Slide ${t + 1}` }
						),
						L = g.length,
						P = K && ne > 0 ? Math.max(1, Math.floor(ne / (K + (ee ?? 0)))) : Te ?? 4,
						k = Math.min(P, L),
						o = Math.max(0, L - k),
						T = [];
					for (let e = 0; e <= o; e += i) T.push(e);
					const J = T.length,
						je = T.findIndex((e) => h >= e && h < e + i);
					(0, r.vJ)(() => {
						if (f && g.length > P && !c)
							return (
								(m.current = setInterval(() => {
									v((e) => {
										const t = e + i;
										return p ? (t > o ? 0 : t) : t >= o ? (I(!1), o) : t;
									});
								}, S)),
								() => {
									m.current && clearInterval(m.current);
								}
							);
						m.current && clearInterval(m.current);
					}, [f, S, g.length, P, i, p, o, c]),
						L <= k && (l = !1);
					const de = (e) => {
							l && (I(!1), ae(!0), Ue(e), re(e), m.current && clearInterval(m.current));
						},
						ue = (e) => {
							if (!c || !l) return;
							re(e);
							const t = e - ie;
							ce(t);
						},
						U = () => {
							if (!c || !l) return;
							const e = Ne - ie,
								d = (B.current?.parentElement?.offsetWidth || 0) / k,
								u = Math.min(Se, d * 0.3);
							Math.abs(e) > u && (e > 0 && (p || h > 0) ? F() : e < 0 && (p || h < o) && z()),
								ae(!1),
								ce(0),
								f &&
									g.length > P &&
									(m.current = setInterval(() => {
										v((b) => {
											const _ = b + i;
											return p ? (_ > o ? 0 : _) : _ >= o ? (I(!1), o) : _;
										});
									}, S));
						},
						X = (e) => {
							ue(e.clientX);
						};
					(0, r.vJ)(() => {
						if (c && l)
							return (
								document.addEventListener('mousemove', X),
								document.addEventListener('mouseup', U),
								() => {
									document.removeEventListener('mousemove', X), document.removeEventListener('mouseup', U);
								}
							);
					}, [c, l]);
					const Ye = () => {
							f && m.current && !c && clearInterval(m.current);
						},
						Je = () => {
							f &&
								g.length > P &&
								!c &&
								(m.current = setInterval(() => {
									v((e) => {
										const t = e + i;
										return p ? (t > o ? 0 : t) : t >= o ? (I(!1), o) : t;
									});
								}, S));
						},
						_e = (e, t) => {
							e.onClick && !c && e.onClick(e, t);
						},
						Xe = (e, t, d) => {
							(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), _e(t, d));
						},
						Fe = (e) => {
							switch (e.key) {
								case 'ArrowLeft':
									e.preventDefault(), F();
									break;
								case 'ArrowRight':
									e.preventDefault(), z();
									break;
								case 'Home':
									e.preventDefault(), v(0);
									break;
								case 'End':
									e.preventDefault(), v(o);
									break;
								case ' ':
								case 'Spacebar':
									e.preventDefault(), he();
									break;
								case 'Escape':
									e.preventDefault(), I(!1);
									break;
							}
						},
						F = () => {
							v((e) => {
								let t;
								return p ? (t = e - i < 0 ? o : e - i) : (t = Math.max(0, e - i)), t;
							});
						},
						z = () => {
							v((e) => {
								let t;
								return p ? (t = e + i > o ? 0 : e + i) : (t = Math.min(o, e + i)), t;
							});
						},
						ze = (e) => {
							const t = T[e] || 0;
							v(t);
						},
						he = () => {
							I(!f);
						},
						He = (0, we.Z)(a, Ie);
					if (!g || g.length === 0) return (0, s.Y)(s.FK, {});
					let $, H;
					if (K) {
						const e = K + (ee ?? 0);
						($ = -(h * e)), (H = 'px'), c && ($ += le);
					} else {
						const e = 100 / k;
						if ((($ = -(h * e)), (H = '%'), c && B.current)) {
							const t = B.current.parentElement?.offsetWidth || 0,
								d = (le / t) * 100;
							$ += d;
						}
					}
					const G = !p && h === 0,
						V = !p && h >= o,
						Ge = {
							pauseButton: { value: f ? 'Pause' : 'Play', attributes: { 'aria-label': f ? 'Pause slideshow' : 'Resume slideshow' } },
							nextButton: { attributes: { 'aria-label': `Next slides${V ? ' (disabled)' : ''}` } },
							prevButton: { attributes: { 'aria-label': `Previous slides${G ? ' (disabled)' : ''}` } },
							srInstructions: {
								value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
									l && 'Swipe left or right to navigate on touch devices.'
								}`,
							},
						},
						Ve = Y()(Ge, a.lang || {}),
						N = (0, j.u)(Ve, { isPlaying: f, isNextDisabled: V, isPrevDisabled: G });
					return (0, s.Y)(fe._, {
						children: (0, s.FD)('div', {
							...He,
							className: W()('ss__slideshow', Ce),
							ref: Ke,
							role: 'region',
							'aria-label': Ae,
							'aria-labelledby': Re,
							'aria-roledescription': 'slideshow',
							onMouseEnter: Ye,
							onMouseLeave: Je,
							onKeyDown: Fe,
							tabIndex: 0,
							children: [
								(0, s.Y)('div', { className: 'ss__slideshow__sr-only', ...N.srInstructions.all }),
								(0, s.Y)('div', {
									className: 'ss__slideshow__container',
									children: (0, s.Y)('div', {
										ref: B,
										className: W()('ss__slideshow__track', { 'ss__slideshow__track--dragging': c, 'ss__slideshow__track--centered': We && L <= P }),
										style: { transform: `translateX(${$}${H})` },
										role: 'group',
										'aria-label': `Slide group ${h} of ${J}`,
										onTouchStart: l ? (e) => de(e.touches[0]) : void 0,
										onTouchMove: l
											? (e) => {
													c && e.preventDefault();
													const t = e.touches[0];
													ue(t.clientX);
											  }
											: void 0,
										onTouchEnd: l ? U : void 0,
										onMouseDown: l
											? (e) => {
													e.preventDefault(), de(e.clientX);
											  }
											: void 0,
										onMouseUp: l ? U : void 0,
										onMouseMove: l ? X : void 0,
										children: g.map((e, t) => {
											const d = t >= h && t < h + P,
												u = !!e.onClick,
												b = !!e.content,
												_ = e.alt || $e || `Image ${t + 1}`,
												Z = { slide: { attributes: { 'aria-label': u ? `Click to view ${_}` : `${_} ${t + 1} of ${g.length}` } } },
												Ze = Y()(Z, a.lang || {}),
												Qe = (0, j.u)(Ze, { hasClickHandler: u, imageAlt: _, index: t, slidesLength: g.length });
											return (0, s.Y)(
												'div',
												{
													...Qe.slide.all,
													className: W()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': u, 'ss__slideshow__slide--content': b }),
													role: u ? 'button' : b ? 'presentation' : 'img',
													'aria-hidden': !d,
													tabIndex: u && d ? 0 : -1,
													onClick: u ? () => _e(e, t) : void 0,
													onKeyDown: u ? (qe) => Xe(qe, e, t) : void 0,
													children: b ? e.content : (0, s.Y)(De._, { ...M.Image, src: e.src || Q, alt: d ? _ : '' }),
												},
												t
											);
										}),
									}),
								}),
								!!(ke || (Be && g.length > P)) &&
									(0, s.FD)(s.FK, {
										children: [
											(0, s.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
												children: (0, s.Y)(A.$, {
													icon: 'angle-left',
													className: 'ss__slideshow__prev',
													disabled: G,
													...N.prevButton.all,
													...M.PrevButton,
													onClick: F,
												}),
											}),
											(0, s.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
												children: (0, s.Y)(A.$, {
													className: 'ss__slideshow__next',
													icon: 'angle-right',
													disabled: V,
													...N.nextButton.all,
													...M.NextButton,
													onClick: z,
												}),
											}),
										],
									}),
								Le &&
									L > k &&
									(0, s.Y)('div', {
										className: 'ss__slideshow__pagination',
										role: 'tablist',
										'aria-label': 'Slide navigation',
										children: T.map((e, t) => {
											const d = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${t + 1} of ${J}` } } },
												u = Y()(d, a.lang || {}),
												b = (0, j.u)(u, { index: t, totalDots: J }),
												_ = je === t,
												Z = _ ? M.PaginationCurrentButton : M.PaginationButton;
											return (0, s.Y)(
												A.$,
												{
													className: W()('ss__slideshow__dot', { 'ss__slideshow__dot--active': _ }),
													onClick: () => ze(t),
													'aria-selected': _,
													...b.paginationButton.all,
													...Z,
													children: (0, s.Y)('span', { className: 'ss__slideshow__dot-inner' }),
												},
												t
											);
										}),
									}),
								q && (0, s.Y)(A.$, { className: 'ss__slideshow__sr-only', ...M.PauseButton, onClick: he, ...N.pauseButton.all }),
							],
						}),
					});
				}
			},
		},
	]);
})();
