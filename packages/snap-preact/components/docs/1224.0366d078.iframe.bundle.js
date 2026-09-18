'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Atoms/Button/Button.tsx'(dt, x, e) {
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					E = e.n(f),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useA11y.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					w = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Q = e('./components/src/hooks/useLang.tsx'),
					H = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ut = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(ut);
				const _t = ({ native: L, color: _, backgroundColor: R, borderColor: y, theme: i }) =>
						L
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: _ || i?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: R || '#fff',
									border: `1px solid ${y || _ || i?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					tt = (0, h.PA)((L) => {
						const _ = (0, D.u)(),
							y = { disableA11y: !1, treePath: (0, a.LU)() },
							i = (0, w.v6)('button', _, y, L),
							{
								content: W,
								children: k,
								disabled: U,
								native: J,
								onClick: K,
								disableA11y: st,
								disableStyles: nt,
								className: b,
								internalClassName: ot,
								icon: M,
								lang: at,
								treePath: j,
								style: vt,
								styleScript: Et,
								themeStyleScript: $,
								...N
							} = i,
							{ overrideElement: z, shouldRenderDefault: it } = (0, H._)('button', i);
						if (!it) return z;
						const C = { icon: { internalClassName: 'ss__button__icon', ...(0, l.s)({ disableStyles: nt }), theme: i?.theme, treePath: j } },
							rt = {
								...(0, S.Z)(i, _t),
								className: E()('ss__button', { 'ss__button--native': J, 'ss__button--disabled': U }, b, ot),
								disabled: U,
								onClick: (m) => !U && K && K(m),
								...N,
							},
							c = { ref: (m) => (0, r.iy)(m) },
							Dt = {},
							Mt = q()(Dt, at || {}),
							p = (0, Q.u)(Mt, {}, { activeBreakpoint: _?.activeBreakpoint }),
							X = !!N.dangerouslySetInnerHTML;
						return W || k || M || at?.button?.value || X
							? (0, n.Y)(u._, {
									children: J
										? (0, n.FD)('button', {
												...rt,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...p.button?.all,
														children: [(0, g.Y)(W, { treePath: j }), (0, g.Y)(k, { treePath: j })],
													}),
													M && (0, n.Y)(I.I, { ...C.icon, ...(typeof M == 'string' ? { icon: M } : M) }),
												],
										  })
										: (0, n.FD)('div', {
												...(st ? {} : c),
												role: 'button',
												'aria-disabled': U,
												...rt,
												...p.button?.attributes,
												children: [
													W || k || p.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...p.button?.value,
																children: [(0, g.Y)(W, { treePath: j }), (0, g.Y)(k, { treePath: j })],
														  })
														: void 0,
													M && (0, n.Y)(I.I, { ...C.icon, ...(typeof M == 'string' ? { icon: M } : M) }),
												],
										  }),
							  })
							: null;
					});
				e.d(x, ['$', 0, tt]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(dt, x, e) {
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					h = e.n(E),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					w = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const S = '//cdn.athoscommerce.net/snap/images/fallback.png',
					I = ({ height: H }) =>
						(0, f.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: H || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					Q = (0, u.PA)((H) => {
						const ut = (0, a.u)(),
							q = (0, r.LU)(),
							_t = { fallback: S, lazy: !0, treePath: q },
							tt = (0, g.v6)('image', ut, _t, H),
							{
								alt: L,
								src: _,
								fallback: R,
								title: y,
								hoverSrc: i,
								lazy: W,
								onMouseOver: k,
								onMouseOut: U,
								onError: J,
								onLoad: K,
								onClick: st,
								onPointerDown: nt,
								onPointerMove: b,
								onPointerUp: ot,
								onPointerLeave: M,
								className: at,
								internalClassName: j,
								draggable: vt,
							} = tt,
							{ overrideElement: Et, shouldRenderDefault: $ } = (0, w._)('image', tt);
						if (!$) return Et;
						const [N, z] = (0, o.J0)(!1),
							[it, C] = (0, o.J0)(!1),
							et = (0, o.li)('');
						(0, o.vJ)(() => {
							et.current = _;
						}),
							et.current && et.current != _ && z(!1);
						const rt = (0, l.Z)(tt, I);
						return (0, n.Y)(D._, {
							children: (0, n.Y)('div', {
								...rt,
								className: h()('ss__image', { 'ss__image--hidden': !N }, at, j),
								children: (0, n.Y)('img', {
									src: (it ? i : _) || R,
									alt: L,
									title: y || L,
									loading: W ? 'lazy' : void 0,
									onLoad: (c) => {
										z(!0), K && K(c);
									},
									onClick: (c) => st && st(c),
									onError: (c) => {
										(c.target.src = R || ''), J && J(c);
									},
									onMouseOver: (c) => {
										i && C(!0), k && k(c);
									},
									onMouseOut: (c) => {
										i && C(!1), U && U(c);
									},
									onPointerDown: (c) => {
										nt && nt(c);
									},
									onPointerMove: (c) => {
										b && b(c);
									},
									onPointerUp: (c) => {
										ot && ot(c);
									},
									onPointerLeave: (c) => {
										M && M(c);
									},
									draggable: vt,
								}),
							}),
						});
					});
				e.d(x, ['_', 0, Q, 't', 0, S]);
			},
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(dt, x, e) {
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					h = e.n(E),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					w = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/components/Atoms/Image/Image.tsx'),
					I = e('./components/src/components/Atoms/Button/Button.tsx'),
					Q = e('./components/src/hooks/useLang.tsx'),
					H = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ut = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(ut);
				const _t = ({ theme: L, slidesToShow: _ = 1, slideWidth: R, gap: y = 16, overlayNavigation: i = !1, showNavigation: W }) =>
						(0, f.AH)({
							position: 'relative',
							overflow: 'hidden',
							'.ss__slideshow__container': {
								position: 'relative',
								width: `calc(100% - ${i || !W ? 0 : 60}px)`,
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
								...(R
									? { maxWidth: `${R}px`, minWidth: `${R}px` }
									: { maxWidth: `calc((100% - ${_ * y}px) / ${_})`, minWidth: `calc((100% - ${_ * y}px) / ${_})` }),
								marginLeft: `calc(${y}px / 2)`,
								marginRight: `calc(${y}px / 2)`,
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
								'&--prev': { left: `${i ? 10 : 0}px` },
								'&--next': { right: `${i ? 10 : 0}px` },
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
									'&.ss__slideshow__dot--active': { opacity: '0.8', background: L?.variables?.colors?.primary || '#000' },
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
					tt = (0, u.PA)((L) => {
						const _ = (0, a.u)(),
							y = {
								treePath: (0, r.LU)(),
								fallbackImage: '//cdn.athoscommerce.net/snap/images/fallback.png',
								autoPlay: !1,
								autoPlayInterval: 3e3,
								showNavigation: !0,
								showPagination: !0,
								centerInsufficientSlides: !0,
								slidesToShow: L.slideWidth ? void 0 : 4,
								slidesToMove: 1,
								startIndex: 0,
								gap: 10,
								ariaLabel: 'slideshow',
								touchDragging: !0,
								dragThreshold: 50,
								dragClickThreshold: 10,
							},
							i = (0, l.v6)('slideshow', _, y, L),
							{
								className: W,
								slides: k,
								fallbackImage: U,
								autoPlay: J,
								autoPlayInterval: K,
								showNavigation: st,
								showPagination: nt,
								loop: b,
								alwaysShowNavigation: ot,
								slidesToShow: M,
								slideImageAlt: at,
								centerInsufficientSlides: j,
								ariaLabel: vt,
								ariaLabelledBy: Et,
								disableStyles: $,
								slideWidth: N,
								startIndex: z,
								gap: it,
								treePath: C,
								overlayNavigation: et,
								dragThreshold: rt,
								dragClickThreshold: c,
							} = i,
							{ overrideElement: Dt, shouldRenderDefault: Mt } = (0, H._)('slideshow', i);
						if (!Mt) return Dt;
						let p = i.touchDragging;
						const X = {
							Image: { fallback: U, draggable: !1, ...(0, g.s)({ disableStyles: $ }), theme: i.theme, treePath: C },
							NextButton: {
								backgroundColor: et ? 'rgba(255, 255, 255, 0.9)' : void 0,
								name: 'next',
								...(0, g.s)({ disableStyles: $ }),
								theme: i.theme,
								treePath: C,
							},
							PrevButton: {
								backgroundColor: et ? 'rgba(255, 255, 255, 0.9)' : void 0,
								name: 'prev',
								...(0, g.s)({ disableStyles: $ }),
								theme: i.theme,
								treePath: C,
							},
							PauseButton: { name: 'pause', ...(0, g.s)({ disableStyles: $ }), theme: i.theme, treePath: C },
							PaginationButton: { name: 'pagination', ...(0, g.s)({ disableStyles: $ }), theme: i.theme, treePath: C },
							PaginationCurrentButton: { name: 'pagination-current', ...(0, g.s)({ disableStyles: $ }), theme: i.theme, treePath: C },
						};
						let m = i.slidesToMove;
						m || (m = 1);
						const [B, Y] = (0, o.J0)(z ?? 0),
							[F, lt] = (0, o.J0)(J),
							[Kt, wt] = (0, o.J0)(0),
							A = (0, o.li)(null),
							Ht = (0, o.li)(null),
							Z = (0, o.li)(null),
							Ot = (0, o.li)(!1);
						(0, o.vJ)(() => {
							const t = Z.current?.parentElement;
							if (!t) return;
							const s = new ResizeObserver((O) => {
								for (const v of O) wt(v.contentRect.width);
							});
							return s.observe(t), wt(t.offsetWidth), () => s.disconnect();
						}, []);
						const [P, St] = (0, o.J0)(!1),
							xt = (0, o.li)(0),
							It = (0, o.li)(0),
							[yt, Ct] = (0, o.J0)(0),
							mt = (0, o.li)(null),
							T = k.map((t, s) =>
								typeof t == 'string'
									? { src: t }
									: t && typeof t == 'object' && 'props' in t && 'type' in t
									? { content: t, alt: `Slide ${s + 1}` }
									: t && typeof t == 'object'
									? t
									: { content: t, alt: `Slide ${s + 1}` }
							),
							ht = T.length,
							G = N && Kt > 0 ? Math.max(1, Math.floor(Kt / (N + (it ?? 0)))) : M ?? 4,
							ft = Math.min(G, ht),
							d = Math.max(0, ht - ft),
							kt = (0, o.li)(void 0);
						(0, o.vJ)(() => {
							const t = Math.max(0, z ?? 0);
							kt.current !== t && (Y(Math.min(t, d)), t <= d && (kt.current = t));
						}, [z, d]);
						const gt = [];
						for (let t = 0; t <= d; t += m) gt.push(t);
						const Lt = gt.length,
							Jt = gt.findIndex((t) => B >= t && B < t + m);
						(0, o.vJ)(() => {
							if (F && T.length > G && !P)
								return (
									(A.current = setInterval(() => {
										Y((t) => {
											const s = t + m;
											return b ? (s > d ? 0 : s) : s >= d ? (lt(!1), d) : s;
										});
									}, K)),
									() => {
										A.current && clearInterval(A.current);
									}
								);
							A.current && clearInterval(A.current);
						}, [F, K, T.length, G, m, b, d, P]),
							ht <= ft && (p = !1);
						const jt = () => {
								const s = (Z.current?.parentElement?.offsetWidth || 0) / ft;
								return Math.min(rt, s * 0.3);
							},
							$t = (t) => {
								p &&
									((mt.current = null),
									Z.current?.parentElement &&
										(mt.current = Z.current.getBoundingClientRect().left - Z.current.parentElement.getBoundingClientRect().left),
									(Ot.current = !1),
									lt(!1),
									St(!0),
									Ct(0),
									(xt.current = t),
									(It.current = t),
									A.current && clearInterval(A.current));
							},
							Nt = (t) => {
								if (!P || !p) return;
								It.current = t;
								const s = t - xt.current;
								Math.abs(s) > Math.min(c, jt()) && (Ot.current = !0), Ct(s);
							},
							Bt = () => {
								if (!P || !p) return;
								const t = It.current - xt.current,
									s = jt();
								Math.abs(t) > s && (t > 0 && (b || B > 0) ? At() : t < 0 && (b || B < d) && Tt()),
									St(!1),
									Ct(0),
									(mt.current = null),
									F &&
										T.length > G &&
										(A.current = setInterval(() => {
											Y((O) => {
												const v = O + m;
												return b ? (v > d ? 0 : v) : v >= d ? (lt(!1), d) : v;
											});
										}, K));
							},
							Yt = (t) => {
								Nt(t.clientX);
							};
						(0, o.vJ)(() => {
							if (P && p)
								return (
									document.addEventListener('mousemove', Yt),
									document.addEventListener('mouseup', Bt),
									() => {
										document.removeEventListener('mousemove', Yt), document.removeEventListener('mouseup', Bt);
									}
								);
						}, [P, p]);
						const zt = () => {
								F && A.current && !P && clearInterval(A.current);
							},
							Xt = () => {
								F &&
									T.length > G &&
									!P &&
									(A.current = setInterval(() => {
										Y((t) => {
											const s = t + m;
											return b ? (s > d ? 0 : s) : s >= d ? (lt(!1), d) : s;
										});
									}, K));
							},
							Zt = (t, s) => {
								t.onClick && !P && !Ot.current && t.onClick(t, s);
							},
							Gt = (t, s, O) => {
								(t.key === 'Enter' || t.key === ' ') && (t.preventDefault(), s.onClick && !P && s.onClick(s, O));
							},
							Vt = (t) => {
								switch (t.key) {
									case 'ArrowLeft':
										t.preventDefault(), At();
										break;
									case 'ArrowRight':
										t.preventDefault(), Tt();
										break;
									case 'Home':
										t.preventDefault(), Y(0);
										break;
									case 'End':
										t.preventDefault(), Y(d);
										break;
									case ' ':
									case 'Spacebar':
										t.preventDefault(), Ft();
										break;
									case 'Escape':
										t.preventDefault(), lt(!1);
										break;
								}
							},
							At = () => {
								Y((t) => {
									let s;
									return b ? (s = t - m < 0 ? d : t - m) : (s = Math.max(0, t - m)), s;
								});
							},
							Tt = () => {
								Y((t) => {
									let s;
									return b ? (s = t + m > d ? 0 : t + m) : (s = Math.min(d, t + m)), s;
								});
							},
							Qt = (t) => {
								const s = gt[t] || 0;
								Y(s);
							},
							Ft = () => {
								lt(!F);
							},
							qt = (0, w.Z)(i, _t);
						if (!T || T.length === 0) return (0, n.Y)(n.FK, {});
						let ct, bt;
						if (P && mt.current !== null) (ct = mt.current + yt), (bt = 'px');
						else if (N) {
							const t = N + (it ?? 0);
							(ct = -(B * t)), (bt = 'px'), P && (ct += yt);
						} else {
							const t = 100 / ft;
							if (((ct = -(B * t)), (bt = '%'), P && Z.current)) {
								const s = Z.current.parentElement?.offsetWidth || 0,
									O = (yt / s) * 100;
								ct += O;
							}
						}
						const Rt = !b && B === 0,
							Wt = !b && B >= d,
							te = {
								pauseButton: { value: F ? 'Pause' : 'Play', attributes: { 'aria-label': F ? 'Pause slideshow' : 'Resume slideshow' } },
								nextButton: { attributes: { 'aria-label': `Next slides${Wt ? ' (disabled)' : ''}` } },
								prevButton: { attributes: { 'aria-label': `Previous slides${Rt ? ' (disabled)' : ''}` } },
								srInstructions: {
									value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
										p && 'Swipe left or right to navigate on touch devices.'
									}`,
								},
							},
							ee = q()(te, i.lang || {}),
							Pt = (0, Q.u)(ee, { isPlaying: F, isNextDisabled: Wt, isPrevDisabled: Rt }, { activeBreakpoint: _?.activeBreakpoint });
						return (0, n.Y)(D._, {
							children: (0, n.FD)('div', {
								...qt,
								className: h()('ss__slideshow', W),
								ref: Ht,
								role: 'region',
								'aria-label': vt,
								'aria-labelledby': Et,
								'aria-roledescription': 'slideshow',
								onMouseEnter: zt,
								onMouseLeave: Xt,
								onKeyDown: Vt,
								tabIndex: 0,
								children: [
									(0, n.Y)('div', { className: 'ss__slideshow__sr-only', ...Pt.srInstructions.all }),
									(0, n.Y)('div', {
										className: 'ss__slideshow__container',
										children: (0, n.Y)('div', {
											ref: Z,
											className: h()('ss__slideshow__track', { 'ss__slideshow__track--dragging': P, 'ss__slideshow__track--centered': j && ht <= G }),
											style: { transform: `translateX(${ct}${bt})` },
											role: 'group',
											'aria-label': `Slide group ${B} of ${Lt}`,
											onTouchStart: p ? (t) => $t(t.touches[0].clientX) : void 0,
											onTouchMove: p
												? (t) => {
														P && t.preventDefault();
														const s = t.touches[0];
														Nt(s.clientX);
												  }
												: void 0,
											onTouchEnd: p ? Bt : void 0,
											onMouseDown: p
												? (t) => {
														t.preventDefault(), $t(t.clientX);
												  }
												: void 0,
											children: T.map((t, s) => {
												const O = s >= B && s < B + G,
													v = !!t.onClick,
													pt = !!t.content,
													V = t.alt || at || `Image ${s + 1}`,
													Ut = { slide: { attributes: { 'aria-label': v ? `Click to view ${V}` : `${V} ${s + 1} of ${T.length}` } } },
													se = q()(Ut, i.lang || {}),
													ne = (0, Q.u)(
														se,
														{ hasClickHandler: v, imageAlt: V, index: s, slidesLength: T.length },
														{ activeBreakpoint: _?.activeBreakpoint }
													);
												return (0, n.Y)(
													'div',
													{
														...ne.slide.all,
														className: h()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': v, 'ss__slideshow__slide--content': pt }),
														role: v ? 'button' : pt ? 'presentation' : 'img',
														'aria-hidden': !O,
														tabIndex: v && O ? 0 : -1,
														onClick: v ? () => Zt(t, s) : void 0,
														onKeyDown: v ? (oe) => Gt(oe, t, s) : void 0,
														children: pt ? t.content : (0, n.Y)(S._, { ...X.Image, src: t.src || U, alt: O ? V : '' }),
													},
													s
												);
											}),
										}),
									}),
									!!(ot || (st && T.length > G)) &&
										(0, n.FD)(n.FK, {
											children: [
												(0, n.Y)('div', {
													className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
													children: (0, n.Y)(I.$, {
														icon: 'angle-left',
														className: 'ss__slideshow__prev',
														disabled: Rt,
														...Pt.prevButton.all,
														...X.PrevButton,
														onClick: At,
													}),
												}),
												(0, n.Y)('div', {
													className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
													children: (0, n.Y)(I.$, {
														className: 'ss__slideshow__next',
														icon: 'angle-right',
														disabled: Wt,
														...Pt.nextButton.all,
														...X.NextButton,
														onClick: Tt,
													}),
												}),
											],
										}),
									nt &&
										ht > ft &&
										(0, n.Y)('div', {
											className: 'ss__slideshow__pagination',
											role: 'tablist',
											'aria-label': 'Slide navigation',
											children: gt.map((t, s) => {
												const O = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${s + 1} of ${Lt}` } } },
													v = q()(O, i.lang || {}),
													pt = (0, Q.u)(v, { index: s, totalDots: Lt }, { activeBreakpoint: _?.activeBreakpoint }),
													V = Jt === s,
													Ut = V ? X.PaginationCurrentButton : X.PaginationButton;
												return (0, n.Y)(
													I.$,
													{
														className: h()('ss__slideshow__dot', { 'ss__slideshow__dot--active': V }),
														onClick: () => Qt(s),
														'aria-selected': V,
														...pt.paginationButton.all,
														...Ut,
														children: (0, n.Y)('span', { className: 'ss__slideshow__dot-inner' }),
													},
													s
												);
											}),
										}),
									J && (0, n.Y)(I.$, { className: 'ss__slideshow__sr-only', ...X.PauseButton, onClick: Ft, ...Pt.pauseButton.all }),
								],
							}),
						});
					});
				e.d(x, ['b', 0, tt]);
			},
			'./components/src/hooks/useA11y.tsx'(dt, x, e) {
				e.d(x, { iy: () => h });
				const n = 9,
					o = 27,
					f = 'ss-a11y',
					E =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function h(u, D, a, r) {
					const g = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${g}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = g),
							(l.innerHTML = `[${f}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					u &&
						!u.attributes?.[f] &&
						(u.setAttribute(f, !0),
						u.setAttribute('tabIndex', `${D || 0}`),
						u.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && l.target === u && u.click();
						}),
						a &&
							u.addEventListener('keydown', function (l) {
								const w = u.querySelectorAll(E),
									S = w[0],
									I = w[w.length - 1];
								if (l.keyCode == o) {
									u.focus(), r && r(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === n) &&
									(l.shiftKey
										? document.activeElement === S && (I.focus(), l.preventDefault())
										: document.activeElement === I && (S.focus(), l.preventDefault()));
							}));
				}
				e.d(x, ['DH', 0, E, 'aZ', 0, f]);
			},
			'./components/src/hooks/useLang.tsx'(dt, x, e) {
				const n = (o, f, E) => {
					const h = E ? { ...f, ...E } : f,
						u = {};
					return (
						Object.keys(o).forEach((D) => {
							const a = o && o[D],
								r = {};
							a &&
								(a?.value &&
									(typeof a.value == 'function'
										? (r.value = { 'ss-lang': D, dangerouslySetInnerHTML: { __html: a.value(h) } })
										: (r.value = { 'ss-lang': D, dangerouslySetInnerHTML: { __html: a.value } })),
								a?.attributes &&
									Object.keys(a?.attributes).length &&
									((r.attributes = { 'ss-lang': D }),
									a?.attributes?.['aria-label'] &&
										(typeof a.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = a.attributes['aria-label'](h))
											: (r.attributes['aria-label'] = a.attributes['aria-label'])),
									a?.attributes?.['aria-valuetext'] &&
										(typeof a.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = a.attributes['aria-valuetext'](h))
											: (r.attributes['aria-valuetext'] = a.attributes['aria-valuetext'])),
									a?.attributes?.title &&
										(typeof a.attributes?.title == 'function'
											? (r.attributes.title = a.attributes.title(h))
											: (r.attributes.title = a.attributes.title)),
									a?.attributes?.alt &&
										(typeof a.attributes?.alt == 'function' ? (r.attributes.alt = a.attributes.alt(h)) : (r.attributes.alt = a.attributes.alt)),
									a?.attributes?.placeholder &&
										(typeof a.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = a.attributes.placeholder(h))
											: (r.attributes.placeholder = a.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': D })),
								(u[D] = r);
						}),
						u
					);
				};
				e.d(x, ['u', 0, n]);
			},
			'./components/src/utilities/defined.ts'(dt, x, e) {
				e.d(x, { s: () => n });
				function n(o) {
					const f = {};
					return (
						Object.keys(o).map((E) => {
							o[E] !== void 0 && (f[E] = o[E]);
						}),
						f
					);
				}
			},
		},
	]);
})();
