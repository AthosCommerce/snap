'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Atoms/Button/Button.tsx'(lt, C, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					g = e.n(v),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/hooks/useA11y.tsx'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					w = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Q = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ct = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(ct);
				const dt = ({ native: J, color: D, backgroundColor: E, borderColor: K, theme: _ }) =>
						J
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: D || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: E || '#fff',
									border: `1px solid ${K || D || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					tt = (0, f.PA)((J) => {
						const D = (0, P.u)(),
							K = { disableA11y: !1, treePath: (0, n.LU)() },
							_ = (0, S.v6)('button', D, K, J),
							{
								content: r,
								children: B,
								disabled: j,
								native: X,
								onClick: z,
								disableA11y: k,
								disableStyles: nt,
								className: at,
								internalClassName: b,
								icon: M,
								lang: it,
								treePath: $,
								style: vt,
								styleScript: pt,
								themeStyleScript: gt,
								...A
							} = _,
							{ overrideElement: N, shouldRenderDefault: et } = (0, F._)('button', _);
						if (!et) return N;
						const G = { icon: { internalClassName: 'ss__button__icon', ...(0, l.s)({ disableStyles: nt }), theme: _?.theme, treePath: $ } },
							st = {
								...(0, w.Z)(_, dt),
								className: g()('ss__button', { 'ss__button--native': X, 'ss__button--disabled': j }, at, b),
								disabled: j,
								onClick: (h) => !j && z && z(h),
								...A,
							},
							c = { ref: (h) => (0, i.iy)(h) },
							Pt = {},
							Dt = q()(Pt, it || {}),
							m = (0, Q.u)(Dt, {}, { activeBreakpoint: D?.activeBreakpoint }),
							Z = !!A.dangerouslySetInnerHTML;
						return r || B || M || it?.button?.value || Z
							? (0, o.Y)(u._, {
									children: X
										? (0, o.FD)('button', {
												...st,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...m.button?.all,
														children: [(0, p.Y)(r, { treePath: $ }), (0, p.Y)(B, { treePath: $ })],
													}),
													M && (0, o.Y)(L.I, { ...G.icon, ...(typeof M == 'string' ? { icon: M } : M) }),
												],
										  })
										: (0, o.FD)('div', {
												...(k ? {} : c),
												role: 'button',
												'aria-disabled': j,
												...st,
												...m.button?.attributes,
												children: [
													r || B || m.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...m.button?.value,
																children: [(0, p.Y)(r, { treePath: $ }), (0, p.Y)(B, { treePath: $ })],
														  })
														: void 0,
													M && (0, o.Y)(L.I, { ...G.icon, ...(typeof M == 'string' ? { icon: M } : M) }),
												],
										  }),
							  })
							: null;
					});
				e.d(C, ['$', 0, tt]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(lt, C, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					f = e.n(g),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = '//cdn.athoscommerce.net/snap/images/fallback.png',
					L = ({ height: F }) =>
						(0, v.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: F || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					Q = (0, u.PA)((F) => {
						const ct = (0, n.u)(),
							q = (0, i.LU)(),
							dt = { fallback: w, lazy: !0, treePath: q },
							tt = (0, p.v6)('image', ct, dt, F),
							{
								alt: J,
								src: D,
								fallback: E,
								title: K,
								hoverSrc: _,
								lazy: r,
								onMouseOver: B,
								onMouseOut: j,
								onError: X,
								onLoad: z,
								onClick: k,
								onPointerDown: nt,
								onPointerMove: at,
								onPointerUp: b,
								onPointerLeave: M,
								className: it,
								internalClassName: $,
								draggable: vt,
							} = tt,
							{ overrideElement: pt, shouldRenderDefault: gt } = (0, S._)('image', tt);
						if (!gt) return pt;
						const [A, N] = (0, a.J0)(!1),
							[et, G] = (0, a.J0)(!1),
							T = (0, a.li)('');
						(0, a.vJ)(() => {
							T.current = D;
						}),
							T.current && T.current != D && N(!1);
						const st = (0, l.Z)(tt, L);
						return (0, o.Y)(P._, {
							children: (0, o.Y)('div', {
								...st,
								className: f()('ss__image', { 'ss__image--hidden': !A }, it, $),
								children: (0, o.Y)('img', {
									src: (et ? _ : D) || E,
									alt: J,
									title: K || J,
									loading: r ? 'lazy' : void 0,
									onLoad: (c) => {
										N(!0), z && z(c);
									},
									onClick: (c) => k && k(c),
									onError: (c) => {
										(c.target.src = E || ''), X && X(c);
									},
									onMouseOver: (c) => {
										_ && G(!0), B && B(c);
									},
									onMouseOut: (c) => {
										_ && G(!1), j && j(c);
									},
									onPointerDown: (c) => {
										nt && nt(c);
									},
									onPointerMove: (c) => {
										at && at(c);
									},
									onPointerUp: (c) => {
										b && b(c);
									},
									onPointerLeave: (c) => {
										M && M(c);
									},
									draggable: vt,
								}),
							}),
						});
					});
				e.d(C, ['_', 0, Q, 't', 0, w]);
			},
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(lt, C, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					f = e.n(g),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					w = e('./components/src/components/Atoms/Image/Image.tsx'),
					L = e('./components/src/components/Atoms/Button/Button.tsx'),
					Q = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ct = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(ct);
				const dt = 5,
					tt = ({ theme: D, slidesToShow: E = 1, slideWidth: K, gap: _ = 16, overlayNavigation: r = !1, showNavigation: B }) =>
						(0, v.AH)({
							position: 'relative',
							overflow: 'hidden',
							'.ss__slideshow__container': {
								position: 'relative',
								width: `calc(100% - ${r || !B ? 0 : 60}px)`,
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
								...(K
									? { maxWidth: `${K}px`, minWidth: `${K}px` }
									: { maxWidth: `calc((100% - ${E * _}px) / ${E})`, minWidth: `calc((100% - ${E * _}px) / ${E})` }),
								marginLeft: `calc(${_}px / 2)`,
								marginRight: `calc(${_}px / 2)`,
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
								'&--prev': { left: `${r ? 10 : 0}px` },
								'&--next': { right: `${r ? 10 : 0}px` },
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
									'&.ss__slideshow__dot--active': { opacity: '0.8', background: D?.variables?.colors?.primary || '#000' },
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
					J = (0, u.PA)((D) => {
						const E = (0, n.u)(),
							_ = {
								treePath: (0, i.LU)(),
								fallbackImage: '//cdn.athoscommerce.net/snap/images/fallback.png',
								autoPlay: !1,
								autoPlayInterval: 3e3,
								showNavigation: !0,
								showPagination: !0,
								centerInsufficientSlides: !0,
								slidesToShow: D.slideWidth ? void 0 : 4,
								slidesToMove: 1,
								startIndex: 0,
								gap: 10,
								ariaLabel: 'slideshow',
								touchDragging: !0,
								dragThreshold: 50,
							},
							r = (0, l.v6)('slideshow', E, _, D),
							{
								className: B,
								slides: j,
								fallbackImage: X,
								autoPlay: z,
								autoPlayInterval: k,
								showNavigation: nt,
								showPagination: at,
								loop: b,
								alwaysShowNavigation: M,
								slidesToShow: it,
								slideImageAlt: $,
								centerInsufficientSlides: vt,
								ariaLabel: pt,
								ariaLabelledBy: gt,
								disableStyles: A,
								slideWidth: N,
								startIndex: et,
								gap: G,
								treePath: T,
								overlayNavigation: st,
								dragThreshold: c,
							} = r,
							{ overrideElement: Pt, shouldRenderDefault: Dt } = (0, F._)('slideshow', r);
						if (!Dt) return Pt;
						let m = r.touchDragging;
						const Z = {
							Image: { fallback: X, ...(0, p.s)({ disableStyles: A }), theme: r.theme, treePath: T },
							NextButton: {
								backgroundColor: st ? 'rgba(255, 255, 255, 0.9)' : void 0,
								name: 'next',
								...(0, p.s)({ disableStyles: A }),
								theme: r.theme,
								treePath: T,
							},
							PrevButton: {
								backgroundColor: st ? 'rgba(255, 255, 255, 0.9)' : void 0,
								name: 'prev',
								...(0, p.s)({ disableStyles: A }),
								theme: r.theme,
								treePath: T,
							},
							PauseButton: { name: 'pause', ...(0, p.s)({ disableStyles: A }), theme: r.theme, treePath: T },
							PaginationButton: { name: 'pagination', ...(0, p.s)({ disableStyles: A }), theme: r.theme, treePath: T },
							PaginationCurrentButton: { name: 'pagination-current', ...(0, p.s)({ disableStyles: A }), theme: r.theme, treePath: T },
						};
						let h = r.slidesToMove;
						h || (h = 1);
						const [R, Y] = (0, a.J0)(et ?? 0),
							[H, rt] = (0, a.J0)(z),
							[Tt, Rt] = (0, a.J0)(0),
							W = (0, a.li)(null),
							Yt = (0, a.li)(null),
							ut = (0, a.li)(null),
							Mt = (0, a.li)(!1);
						(0, a.vJ)(() => {
							const t = ut.current?.parentElement;
							if (!t) return;
							const s = new ResizeObserver((x) => {
								for (const I of x) Rt(I.contentRect.width);
							});
							return s.observe(t), Rt(t.offsetWidth), () => s.disconnect();
						}, []);
						const [O, Wt] = (0, a.J0)(!1),
							[Ut, Ht] = (0, a.J0)(0),
							[Ft, Kt] = (0, a.J0)(0),
							[St, wt] = (0, a.J0)(0),
							U = j.map((t, s) =>
								typeof t == 'string'
									? { src: t }
									: t && typeof t == 'object' && 'props' in t && 'type' in t
									? { content: t, alt: `Slide ${s + 1}` }
									: t && typeof t == 'object'
									? t
									: { content: t, alt: `Slide ${s + 1}` }
							),
							_t = U.length,
							V = N && Tt > 0 ? Math.max(1, Math.floor(Tt / (N + (G ?? 0)))) : it ?? 4,
							mt = Math.min(V, _t),
							d = Math.max(0, _t - mt),
							jt = (0, a.li)(void 0);
						(0, a.vJ)(() => {
							const t = Math.max(0, et ?? 0);
							jt.current !== t && (Y(Math.min(t, d)), t <= d && (jt.current = t));
						}, [et, d]);
						const ht = [];
						for (let t = 0; t <= d; t += h) ht.push(t);
						const Ot = ht.length,
							Jt = ht.findIndex((t) => R >= t && R < t + h);
						(0, a.vJ)(() => {
							if (H && U.length > V && !O)
								return (
									(W.current = setInterval(() => {
										Y((t) => {
											const s = t + h;
											return b ? (s > d ? 0 : s) : s >= d ? (rt(!1), d) : s;
										});
									}, k)),
									() => {
										W.current && clearInterval(W.current);
									}
								);
							W.current && clearInterval(W.current);
						}, [H, k, U.length, V, h, b, d, O]),
							_t <= mt && (m = !1);
						const kt = (t) => {
								m && ((Mt.current = !1), rt(!1), Wt(!0), Ht(t), Kt(t), W.current && clearInterval(W.current));
							},
							$t = (t) => {
								if (!O || !m) return;
								Kt(t);
								const s = t - Ut;
								Math.abs(s) > dt && (Mt.current = !0), wt(s);
							},
							Et = () => {
								if (!O || !m) return;
								const t = Ft - Ut,
									x = (ut.current?.parentElement?.offsetWidth || 0) / mt,
									I = Math.min(c, x * 0.3);
								Math.abs(t) > I && (t > 0 && (b || R > 0) ? It() : t < 0 && (b || R < d) && yt()),
									Wt(!1),
									wt(0),
									H &&
										U.length > V &&
										(W.current = setInterval(() => {
											Y((ot) => {
												const y = ot + h;
												return b ? (y > d ? 0 : y) : y >= d ? (rt(!1), d) : y;
											});
										}, k));
							},
							xt = (t) => {
								$t(t.clientX);
							};
						(0, a.vJ)(() => {
							if (O && m)
								return (
									document.addEventListener('mousemove', xt),
									document.addEventListener('mouseup', Et),
									() => {
										document.removeEventListener('mousemove', xt), document.removeEventListener('mouseup', Et);
									}
								);
						}, [O, m]);
						const Xt = () => {
								H && W.current && !O && clearInterval(W.current);
							},
							zt = () => {
								H &&
									U.length > V &&
									!O &&
									(W.current = setInterval(() => {
										Y((t) => {
											const s = t + h;
											return b ? (s > d ? 0 : s) : s >= d ? (rt(!1), d) : s;
										});
									}, k));
							},
							Gt = (t, s) => {
								t.onClick && !O && !Mt.current && t.onClick(t, s);
							},
							Zt = (t, s, x) => {
								(t.key === 'Enter' || t.key === ' ') && (t.preventDefault(), s.onClick && !O && s.onClick(s, x));
							},
							Vt = (t) => {
								switch (t.key) {
									case 'ArrowLeft':
										t.preventDefault(), It();
										break;
									case 'ArrowRight':
										t.preventDefault(), yt();
										break;
									case 'Home':
										t.preventDefault(), Y(0);
										break;
									case 'End':
										t.preventDefault(), Y(d);
										break;
									case ' ':
									case 'Spacebar':
										t.preventDefault(), Nt();
										break;
									case 'Escape':
										t.preventDefault(), rt(!1);
										break;
								}
							},
							It = () => {
								Y((t) => {
									let s;
									return b ? (s = t - h < 0 ? d : t - h) : (s = Math.max(0, t - h)), s;
								});
							},
							yt = () => {
								Y((t) => {
									let s;
									return b ? (s = t + h > d ? 0 : t + h) : (s = Math.min(d, t + h)), s;
								});
							},
							Qt = (t) => {
								const s = ht[t] || 0;
								Y(s);
							},
							Nt = () => {
								rt(!H);
							},
							qt = (0, S.Z)(r, tt);
						if (!U || U.length === 0) return (0, o.Y)(o.FK, {});
						let ft, Ct;
						if (N) {
							const t = N + (G ?? 0);
							(ft = -(R * t)), (Ct = 'px'), O && (ft += St);
						} else {
							const t = 100 / mt;
							if (((ft = -(R * t)), (Ct = '%'), O && ut.current)) {
								const s = ut.current.parentElement?.offsetWidth || 0,
									x = (St / s) * 100;
								ft += x;
							}
						}
						const Lt = !b && R === 0,
							Bt = !b && R >= d,
							te = {
								pauseButton: { value: H ? 'Pause' : 'Play', attributes: { 'aria-label': H ? 'Pause slideshow' : 'Resume slideshow' } },
								nextButton: { attributes: { 'aria-label': `Next slides${Bt ? ' (disabled)' : ''}` } },
								prevButton: { attributes: { 'aria-label': `Previous slides${Lt ? ' (disabled)' : ''}` } },
								srInstructions: {
									value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
										m && 'Swipe left or right to navigate on touch devices.'
									}`,
								},
							},
							ee = q()(te, r.lang || {}),
							bt = (0, Q.u)(ee, { isPlaying: H, isNextDisabled: Bt, isPrevDisabled: Lt }, { activeBreakpoint: E?.activeBreakpoint });
						return (0, o.Y)(P._, {
							children: (0, o.FD)('div', {
								...qt,
								className: f()('ss__slideshow', B),
								ref: Yt,
								role: 'region',
								'aria-label': pt,
								'aria-labelledby': gt,
								'aria-roledescription': 'slideshow',
								onMouseEnter: Xt,
								onMouseLeave: zt,
								onKeyDown: Vt,
								tabIndex: 0,
								children: [
									(0, o.Y)('div', { className: 'ss__slideshow__sr-only', ...bt.srInstructions.all }),
									(0, o.Y)('div', {
										className: 'ss__slideshow__container',
										children: (0, o.Y)('div', {
											ref: ut,
											className: f()('ss__slideshow__track', {
												'ss__slideshow__track--dragging': O,
												'ss__slideshow__track--centered': vt && _t <= V,
											}),
											style: { transform: `translateX(${ft}${Ct})` },
											role: 'group',
											'aria-label': `Slide group ${R} of ${Ot}`,
											onTouchStart: m ? (t) => kt(t.touches[0].clientX) : void 0,
											onTouchMove: m
												? (t) => {
														O && t.preventDefault();
														const s = t.touches[0];
														$t(s.clientX);
												  }
												: void 0,
											onTouchEnd: m ? Et : void 0,
											onMouseDown: m
												? (t) => {
														t.preventDefault(), kt(t.clientX);
												  }
												: void 0,
											onMouseUp: m ? Et : void 0,
											onMouseMove: m ? xt : void 0,
											children: U.map((t, s) => {
												const x = s >= R && s < R + V,
													I = !!t.onClick,
													ot = !!t.content,
													y = t.alt || $ || `Image ${s + 1}`,
													At = { slide: { attributes: { 'aria-label': I ? `Click to view ${y}` : `${y} ${s + 1} of ${U.length}` } } },
													se = q()(At, r.lang || {}),
													oe = (0, Q.u)(
														se,
														{ hasClickHandler: I, imageAlt: y, index: s, slidesLength: U.length },
														{ activeBreakpoint: E?.activeBreakpoint }
													);
												return (0, o.Y)(
													'div',
													{
														...oe.slide.all,
														className: f()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': I, 'ss__slideshow__slide--content': ot }),
														role: I ? 'button' : ot ? 'presentation' : 'img',
														'aria-hidden': !x,
														tabIndex: I && x ? 0 : -1,
														onClick: I ? () => Gt(t, s) : void 0,
														onKeyDown: I ? (ne) => Zt(ne, t, s) : void 0,
														children: ot ? t.content : (0, o.Y)(w._, { ...Z.Image, src: t.src || X, alt: x ? y : '' }),
													},
													s
												);
											}),
										}),
									}),
									!!(M || (nt && U.length > V)) &&
										(0, o.FD)(o.FK, {
											children: [
												(0, o.Y)('div', {
													className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
													children: (0, o.Y)(L.$, {
														icon: 'angle-left',
														className: 'ss__slideshow__prev',
														disabled: Lt,
														...bt.prevButton.all,
														...Z.PrevButton,
														onClick: It,
													}),
												}),
												(0, o.Y)('div', {
													className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
													children: (0, o.Y)(L.$, {
														className: 'ss__slideshow__next',
														icon: 'angle-right',
														disabled: Bt,
														...bt.nextButton.all,
														...Z.NextButton,
														onClick: yt,
													}),
												}),
											],
										}),
									at &&
										_t > mt &&
										(0, o.Y)('div', {
											className: 'ss__slideshow__pagination',
											role: 'tablist',
											'aria-label': 'Slide navigation',
											children: ht.map((t, s) => {
												const x = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${s + 1} of ${Ot}` } } },
													I = q()(x, r.lang || {}),
													ot = (0, Q.u)(I, { index: s, totalDots: Ot }, { activeBreakpoint: E?.activeBreakpoint }),
													y = Jt === s,
													At = y ? Z.PaginationCurrentButton : Z.PaginationButton;
												return (0, o.Y)(
													L.$,
													{
														className: f()('ss__slideshow__dot', { 'ss__slideshow__dot--active': y }),
														onClick: () => Qt(s),
														'aria-selected': y,
														...ot.paginationButton.all,
														...At,
														children: (0, o.Y)('span', { className: 'ss__slideshow__dot-inner' }),
													},
													s
												);
											}),
										}),
									z && (0, o.Y)(L.$, { className: 'ss__slideshow__sr-only', ...Z.PauseButton, onClick: Nt, ...bt.pauseButton.all }),
								],
							}),
						});
					});
				e.d(C, ['b', 0, J]);
			},
			'./components/src/hooks/useA11y.tsx'(lt, C, e) {
				e.d(C, { iy: () => f });
				const o = 9,
					a = 27,
					v = 'ss-a11y',
					g =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function f(u, P, n, i) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = p),
							(l.innerHTML = `[${v}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					u &&
						!u.attributes?.[v] &&
						(u.setAttribute(v, !0),
						u.setAttribute('tabIndex', `${P || 0}`),
						u.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && l.target === u && u.click();
						}),
						n &&
							u.addEventListener('keydown', function (l) {
								const S = u.querySelectorAll(g),
									w = S[0],
									L = S[S.length - 1];
								if (l.keyCode == a) {
									u.focus(), i && i(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === o) &&
									(l.shiftKey
										? document.activeElement === w && (L.focus(), l.preventDefault())
										: document.activeElement === L && (w.focus(), l.preventDefault()));
							}));
				}
				e.d(C, ['DH', 0, g, 'aZ', 0, v]);
			},
			'./components/src/hooks/useLang.tsx'(lt, C, e) {
				const o = (a, v, g) => {
					const f = g ? { ...v, ...g } : v,
						u = {};
					return (
						Object.keys(a).forEach((P) => {
							const n = a && a[P],
								i = {};
							n &&
								(n?.value &&
									(typeof n.value == 'function'
										? (i.value = { 'ss-lang': P, dangerouslySetInnerHTML: { __html: n.value(f) } })
										: (i.value = { 'ss-lang': P, dangerouslySetInnerHTML: { __html: n.value } })),
								n?.attributes &&
									Object.keys(n?.attributes).length &&
									((i.attributes = { 'ss-lang': P }),
									n?.attributes?.['aria-label'] &&
										(typeof n.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = n.attributes['aria-label'](f))
											: (i.attributes['aria-label'] = n.attributes['aria-label'])),
									n?.attributes?.['aria-valuetext'] &&
										(typeof n.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = n.attributes['aria-valuetext'](f))
											: (i.attributes['aria-valuetext'] = n.attributes['aria-valuetext'])),
									n?.attributes?.title &&
										(typeof n.attributes?.title == 'function'
											? (i.attributes.title = n.attributes.title(f))
											: (i.attributes.title = n.attributes.title)),
									n?.attributes?.alt &&
										(typeof n.attributes?.alt == 'function' ? (i.attributes.alt = n.attributes.alt(f)) : (i.attributes.alt = n.attributes.alt)),
									n?.attributes?.placeholder &&
										(typeof n.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = n.attributes.placeholder(f))
											: (i.attributes.placeholder = n.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': P })),
								(u[P] = i);
						}),
						u
					);
				};
				e.d(C, ['u', 0, o]);
			},
			'./components/src/utilities/defined.ts'(lt, C, e) {
				e.d(C, { s: () => o });
				function o(a) {
					const v = {};
					return (
						Object.keys(a).map((g) => {
							a[g] !== void 0 && (v[g] = a[g]);
						}),
						v
					);
				}
			},
		},
	]);
})();
