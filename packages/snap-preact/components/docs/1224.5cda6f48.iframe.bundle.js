'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(et, he, s) {
				var n = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					me = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					ge = s('../../node_modules/classnames/index.js'),
					T = s.n(ge),
					fe = s('../../node_modules/mobx-react-lite/es/index.js'),
					pe = s('./components/src/providers/cache.tsx'),
					ve = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Pe = s('./components/src/providers/treePath.tsx'),
					w = s('./components/src/utilities/defined.ts'),
					be = s('./components/src/utilities/mergeProps.ts'),
					Ee = s('./components/src/utilities/mergeStyles.ts'),
					we = s('./components/src/components/Atoms/Image/Image.tsx'),
					$ = s('./components/src/components/Atoms/Button/Button.tsx'),
					N = s('./components/src/hooks/useLang.tsx'),
					De = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					xe = s('../../node_modules/deepmerge/dist/cjs.js'),
					j = s.n(xe);
				const Me = ({ theme: W, slidesToShow: p = 1, slideWidth: A, gap: D = 16, overlayNavigation: o = !1, showNavigation: Y }) =>
						(0, me.AH)({
							position: 'relative',
							overflow: 'hidden',
							'.ss__slideshow__container': {
								position: 'relative',
								width: `calc(100% - ${o || !Y ? 0 : 60}px)`,
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
								...(A
									? { maxWidth: `${A}px`, minWidth: `${A}px` }
									: { maxWidth: `calc((100% - ${p * D}px) / ${p})`, minWidth: `calc((100% - ${p * D}px) / ${p})` }),
								marginLeft: `calc(${D}px / 2)`,
								marginRight: `calc(${D}px / 2)`,
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
								'&--prev': { left: `${o ? 10 : 0}px` },
								'&--next': { right: `${o ? 10 : 0}px` },
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
									'&.ss__slideshow__dot--active': { opacity: '0.8', background: W?.variables?.colors?.primary || '#000' },
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
					Ie = (0, fe.PA)((W) => {
						const p = (0, ve.u)(),
							D = {
								treePath: (0, Pe.LU)(),
								fallbackImage: '//cdn.athoscommerce.net/snap/images/fallback.png',
								autoPlay: !1,
								autoPlayInterval: 3e3,
								showNavigation: !0,
								showPagination: !0,
								centerInsufficientSlides: !0,
								slidesToShow: W.slideWidth ? void 0 : 4,
								slidesToMove: 1,
								gap: 10,
								ariaLabel: 'slideshow',
								touchDragging: !0,
								dragThreshold: 50,
							},
							o = (0, be.v6)('slideshow', p, D, W),
							{
								className: Y,
								slides: ye,
								fallbackImage: Q,
								autoPlay: q,
								autoPlayInterval: R,
								showNavigation: Be,
								showPagination: Ce,
								loop: f,
								alwaysShowNavigation: Oe,
								slidesToShow: ke,
								slideImageAlt: Le,
								centerInsufficientSlides: Te,
								ariaLabel: $e,
								ariaLabelledBy: We,
								disableStyles: x,
								slideWidth: S,
								gap: ee,
								treePath: M,
								overlayNavigation: te,
								dragThreshold: Ae,
							} = o,
							{ overrideElement: Re, shouldRenderDefault: Se } = (0, De._)('slideshow', o);
						if (!Se) return Re;
						let l = o.touchDragging;
						const I = {
							Image: { fallback: Q, ...(0, w.s)({ disableStyles: x }), theme: o.theme, treePath: M },
							NextButton: {
								backgroundColor: te ? 'rgba(255, 255, 255, 0.9)' : void 0,
								name: 'next',
								...(0, w.s)({ disableStyles: x }),
								theme: o.theme,
								treePath: M,
							},
							PrevButton: {
								backgroundColor: te ? 'rgba(255, 255, 255, 0.9)' : void 0,
								name: 'prev',
								...(0, w.s)({ disableStyles: x }),
								theme: o.theme,
								treePath: M,
							},
							PauseButton: { name: 'pause', ...(0, w.s)({ disableStyles: x }), theme: o.theme, treePath: M },
							PaginationButton: { name: 'pagination', ...(0, w.s)({ disableStyles: x }), theme: o.theme, treePath: M },
							PaginationCurrentButton: { name: 'pagination-current', ...(0, w.s)({ disableStyles: x }), theme: o.theme, treePath: M },
						};
						let i = o.slidesToMove;
						i || (i = 1);
						const [h, P] = (0, r.J0)(0),
							[v, y] = (0, r.J0)(q),
							[se, ne] = (0, r.J0)(0),
							m = (0, r.li)(null),
							Ke = (0, r.li)(null),
							B = (0, r.li)(null);
						(0, r.vJ)(() => {
							const e = B.current?.parentElement;
							if (!e) return;
							const t = new ResizeObserver((d) => {
								for (const u of d) ne(u.contentRect.width);
							});
							return t.observe(e), ne(e.offsetWidth), () => t.disconnect();
						}, []);
						const [c, oe] = (0, r.J0)(!1),
							[ae, Ue] = (0, r.J0)(0),
							[Ne, ie] = (0, r.J0)(0),
							[re, le] = (0, r.J0)(0),
							g = ye.map((e, t) =>
								typeof e == 'string'
									? { src: e }
									: e && typeof e == 'object' && 'props' in e && 'type' in e
									? { content: e, alt: `Slide ${t + 1}` }
									: e && typeof e == 'object'
									? e
									: { content: e, alt: `Slide ${t + 1}` }
							),
							C = g.length,
							b = S && se > 0 ? Math.max(1, Math.floor(se / (S + (ee ?? 0)))) : ke ?? 4,
							O = Math.min(b, C),
							a = Math.max(0, C - O),
							k = [];
						for (let e = 0; e <= a; e += i) k.push(e);
						const J = k.length,
							je = k.findIndex((e) => h >= e && h < e + i);
						(0, r.vJ)(() => {
							if (v && g.length > b && !c)
								return (
									(m.current = setInterval(() => {
										P((e) => {
											const t = e + i;
											return f ? (t > a ? 0 : t) : t >= a ? (y(!1), a) : t;
										});
									}, R)),
									() => {
										m.current && clearInterval(m.current);
									}
								);
							m.current && clearInterval(m.current);
						}, [v, R, g.length, b, i, f, a, c]),
							C <= O && (l = !1);
						const ce = (e) => {
								l && (y(!1), oe(!0), Ue(e), ie(e), m.current && clearInterval(m.current));
							},
							de = (e) => {
								if (!c || !l) return;
								ie(e);
								const t = e - ae;
								le(t);
							},
							K = () => {
								if (!c || !l) return;
								const e = Ne - ae,
									d = (B.current?.parentElement?.offsetWidth || 0) / O,
									u = Math.min(Ae, d * 0.3);
								Math.abs(e) > u && (e > 0 && (f || h > 0) ? F() : e < 0 && (f || h < a) && z()),
									oe(!1),
									le(0),
									v &&
										g.length > b &&
										(m.current = setInterval(() => {
											P((E) => {
												const _ = E + i;
												return f ? (_ > a ? 0 : _) : _ >= a ? (y(!1), a) : _;
											});
										}, R));
							},
							X = (e) => {
								de(e.clientX);
							};
						(0, r.vJ)(() => {
							if (c && l)
								return (
									document.addEventListener('mousemove', X),
									document.addEventListener('mouseup', K),
									() => {
										document.removeEventListener('mousemove', X), document.removeEventListener('mouseup', K);
									}
								);
						}, [c, l]);
						const Ye = () => {
								v && m.current && !c && clearInterval(m.current);
							},
							Je = () => {
								v &&
									g.length > b &&
									!c &&
									(m.current = setInterval(() => {
										P((e) => {
											const t = e + i;
											return f ? (t > a ? 0 : t) : t >= a ? (y(!1), a) : t;
										});
									}, R));
							},
							ue = (e, t) => {
								e.onClick && !c && e.onClick(e, t);
							},
							Xe = (e, t, d) => {
								(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), ue(t, d));
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
										e.preventDefault(), P(0);
										break;
									case 'End':
										e.preventDefault(), P(a);
										break;
									case ' ':
									case 'Spacebar':
										e.preventDefault(), _e();
										break;
									case 'Escape':
										e.preventDefault(), y(!1);
										break;
								}
							},
							F = () => {
								P((e) => {
									let t;
									return f ? (t = e - i < 0 ? a : e - i) : (t = Math.max(0, e - i)), t;
								});
							},
							z = () => {
								P((e) => {
									let t;
									return f ? (t = e + i > a ? 0 : e + i) : (t = Math.min(a, e + i)), t;
								});
							},
							ze = (e) => {
								const t = k[e] || 0;
								P(t);
							},
							_e = () => {
								y(!v);
							},
							He = (0, Ee.Z)(o, Me);
						if (!g || g.length === 0) return (0, n.Y)(n.FK, {});
						let L, H;
						if (S) {
							const e = S + (ee ?? 0);
							(L = -(h * e)), (H = 'px'), c && (L += re);
						} else {
							const e = 100 / O;
							if (((L = -(h * e)), (H = '%'), c && B.current)) {
								const t = B.current.parentElement?.offsetWidth || 0,
									d = (re / t) * 100;
								L += d;
							}
						}
						const G = !f && h === 0,
							V = !f && h >= a,
							Ge = {
								pauseButton: { value: v ? 'Pause' : 'Play', attributes: { 'aria-label': v ? 'Pause slideshow' : 'Resume slideshow' } },
								nextButton: { attributes: { 'aria-label': `Next slides${V ? ' (disabled)' : ''}` } },
								prevButton: { attributes: { 'aria-label': `Previous slides${G ? ' (disabled)' : ''}` } },
								srInstructions: {
									value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
										l && 'Swipe left or right to navigate on touch devices.'
									}`,
								},
							},
							Ve = j()(Ge, o.lang || {}),
							U = (0, N.u)(Ve, { isPlaying: v, isNextDisabled: V, isPrevDisabled: G }, { activeBreakpoint: p?.activeBreakpoint });
						return (0, n.Y)(pe._, {
							children: (0, n.FD)('div', {
								...He,
								className: T()('ss__slideshow', Y),
								ref: Ke,
								role: 'region',
								'aria-label': $e,
								'aria-labelledby': We,
								'aria-roledescription': 'slideshow',
								onMouseEnter: Ye,
								onMouseLeave: Je,
								onKeyDown: Fe,
								tabIndex: 0,
								children: [
									(0, n.Y)('div', { className: 'ss__slideshow__sr-only', ...U.srInstructions.all }),
									(0, n.Y)('div', {
										className: 'ss__slideshow__container',
										children: (0, n.Y)('div', {
											ref: B,
											className: T()('ss__slideshow__track', { 'ss__slideshow__track--dragging': c, 'ss__slideshow__track--centered': Te && C <= b }),
											style: { transform: `translateX(${L}${H})` },
											role: 'group',
											'aria-label': `Slide group ${h} of ${J}`,
											onTouchStart: l ? (e) => ce(e.touches[0]) : void 0,
											onTouchMove: l
												? (e) => {
														c && e.preventDefault();
														const t = e.touches[0];
														de(t.clientX);
												  }
												: void 0,
											onTouchEnd: l ? K : void 0,
											onMouseDown: l
												? (e) => {
														e.preventDefault(), ce(e.clientX);
												  }
												: void 0,
											onMouseUp: l ? K : void 0,
											onMouseMove: l ? X : void 0,
											children: g.map((e, t) => {
												const d = t >= h && t < h + b,
													u = !!e.onClick,
													E = !!e.content,
													_ = e.alt || Le || `Image ${t + 1}`,
													Z = { slide: { attributes: { 'aria-label': u ? `Click to view ${_}` : `${_} ${t + 1} of ${g.length}` } } },
													Ze = j()(Z, o.lang || {}),
													Qe = (0, N.u)(
														Ze,
														{ hasClickHandler: u, imageAlt: _, index: t, slidesLength: g.length },
														{ activeBreakpoint: p?.activeBreakpoint }
													);
												return (0, n.Y)(
													'div',
													{
														...Qe.slide.all,
														className: T()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': u, 'ss__slideshow__slide--content': E }),
														role: u ? 'button' : E ? 'presentation' : 'img',
														'aria-hidden': !d,
														tabIndex: u && d ? 0 : -1,
														onClick: u ? () => ue(e, t) : void 0,
														onKeyDown: u ? (qe) => Xe(qe, e, t) : void 0,
														children: E ? e.content : (0, n.Y)(we._, { ...I.Image, src: e.src || Q, alt: d ? _ : '' }),
													},
													t
												);
											}),
										}),
									}),
									!!(Oe || (Be && g.length > b)) &&
										(0, n.FD)(n.FK, {
											children: [
												(0, n.Y)('div', {
													className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
													children: (0, n.Y)($.$, {
														icon: 'angle-left',
														className: 'ss__slideshow__prev',
														disabled: G,
														...U.prevButton.all,
														...I.PrevButton,
														onClick: F,
													}),
												}),
												(0, n.Y)('div', {
													className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
													children: (0, n.Y)($.$, {
														className: 'ss__slideshow__next',
														icon: 'angle-right',
														disabled: V,
														...U.nextButton.all,
														...I.NextButton,
														onClick: z,
													}),
												}),
											],
										}),
									Ce &&
										C > O &&
										(0, n.Y)('div', {
											className: 'ss__slideshow__pagination',
											role: 'tablist',
											'aria-label': 'Slide navigation',
											children: k.map((e, t) => {
												const d = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${t + 1} of ${J}` } } },
													u = j()(d, o.lang || {}),
													E = (0, N.u)(u, { index: t, totalDots: J }, { activeBreakpoint: p?.activeBreakpoint }),
													_ = je === t,
													Z = _ ? I.PaginationCurrentButton : I.PaginationButton;
												return (0, n.Y)(
													$.$,
													{
														className: T()('ss__slideshow__dot', { 'ss__slideshow__dot--active': _ }),
														onClick: () => ze(t),
														'aria-selected': _,
														...E.paginationButton.all,
														...Z,
														children: (0, n.Y)('span', { className: 'ss__slideshow__dot-inner' }),
													},
													t
												);
											}),
										}),
									q && (0, n.Y)($.$, { className: 'ss__slideshow__sr-only', ...I.PauseButton, onClick: _e, ...U.pauseButton.all }),
								],
							}),
						});
					});
				s.d(he, ['b', 0, Ie]);
			},
		},
	]);
})();
