'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(qe, he, n) {
				n.d(he, { b: () => Me });
				var s = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					me = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					ge = n('../../node_modules/classnames/index.js'),
					T = n.n(ge),
					fe = n('./components/src/providers/cache.tsx'),
					pe = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ve = n('./components/src/providers/treePath.tsx'),
					w = n('./components/src/utilities/defined.ts'),
					Pe = n('./components/src/utilities/mergeProps.ts'),
					be = n('./components/src/utilities/mergeStyles.ts'),
					we = n('./components/src/components/Atoms/Image/Image.tsx'),
					$ = n('./components/src/components/Atoms/Button/Button.tsx'),
					N = n('./components/src/hooks/useLang.tsx'),
					Ee = n('./components/src/hooks/useCustomComponentOverride.tsx'),
					De = n('../../node_modules/deepmerge/dist/cjs.js'),
					j = n.n(De);
				const xe = ({ theme: W, slidesToShow: E = 1, slideWidth: A, gap: D = 16, overlayNavigation: o = !1, showNavigation: Y }) =>
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
								: { maxWidth: `calc((100% - ${E * D}px) / ${E})`, minWidth: `calc((100% - ${E * D}px) / ${E})` }),
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
					});
				function Me(W) {
					const E = (0, pe.u)(),
						D = {
							treePath: (0, ve.LU)(),
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
						o = (0, Pe.v6)('slideshow', E, D, W),
						{
							className: Y,
							slides: Ie,
							fallbackImage: Q,
							autoPlay: q,
							autoPlayInterval: R,
							showNavigation: ye,
							showPagination: Ce,
							loop: f,
							alwaysShowNavigation: Oe,
							slidesToShow: Be,
							slideImageAlt: Le,
							centerInsufficientSlides: ke,
							ariaLabel: Te,
							ariaLabelledBy: $e,
							disableStyles: x,
							slideWidth: S,
							gap: ee,
							treePath: M,
							overlayNavigation: te,
							dragThreshold: We,
						} = o,
						{ overrideElement: Ae, shouldRenderDefault: Re } = (0, Ee._)('slideshow', o);
					if (!Re) return Ae;
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
					const [h, v] = (0, r.J0)(0),
						[p, y] = (0, r.J0)(q),
						[se, ne] = (0, r.J0)(0),
						m = (0, r.li)(null),
						Se = (0, r.li)(null),
						C = (0, r.li)(null);
					(0, r.vJ)(() => {
						const e = C.current?.parentElement;
						if (!e) return;
						const t = new ResizeObserver((d) => {
							for (const u of d) ne(u.contentRect.width);
						});
						return t.observe(e), ne(e.offsetWidth), () => t.disconnect();
					}, []);
					const [c, oe] = (0, r.J0)(!1),
						[ae, Ke] = (0, r.J0)(0),
						[Ue, ie] = (0, r.J0)(0),
						[re, le] = (0, r.J0)(0),
						g = Ie.map((e, t) =>
							typeof e == 'string'
								? { src: e }
								: e && typeof e == 'object' && 'props' in e && 'type' in e
								? { content: e, alt: `Slide ${t + 1}` }
								: e && typeof e == 'object'
								? e
								: { content: e, alt: `Slide ${t + 1}` }
						),
						O = g.length,
						P = S && se > 0 ? Math.max(1, Math.floor(se / (S + (ee ?? 0)))) : Be ?? 4,
						B = Math.min(P, O),
						a = Math.max(0, O - B),
						L = [];
					for (let e = 0; e <= a; e += i) L.push(e);
					const J = L.length,
						Ne = L.findIndex((e) => h >= e && h < e + i);
					(0, r.vJ)(() => {
						if (p && g.length > P && !c)
							return (
								(m.current = setInterval(() => {
									v((e) => {
										const t = e + i;
										return f ? (t > a ? 0 : t) : t >= a ? (y(!1), a) : t;
									});
								}, R)),
								() => {
									m.current && clearInterval(m.current);
								}
							);
						m.current && clearInterval(m.current);
					}, [p, R, g.length, P, i, f, a, c]),
						O <= B && (l = !1);
					const ce = (e) => {
							l && (y(!1), oe(!0), Ke(e), ie(e), m.current && clearInterval(m.current));
						},
						de = (e) => {
							if (!c || !l) return;
							ie(e);
							const t = e - ae;
							le(t);
						},
						K = () => {
							if (!c || !l) return;
							const e = Ue - ae,
								d = (C.current?.parentElement?.offsetWidth || 0) / B,
								u = Math.min(We, d * 0.3);
							Math.abs(e) > u && (e > 0 && (f || h > 0) ? F() : e < 0 && (f || h < a) && z()),
								oe(!1),
								le(0),
								p &&
									g.length > P &&
									(m.current = setInterval(() => {
										v((b) => {
											const _ = b + i;
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
					const je = () => {
							p && m.current && !c && clearInterval(m.current);
						},
						Ye = () => {
							p &&
								g.length > P &&
								!c &&
								(m.current = setInterval(() => {
									v((e) => {
										const t = e + i;
										return f ? (t > a ? 0 : t) : t >= a ? (y(!1), a) : t;
									});
								}, R));
						},
						ue = (e, t) => {
							e.onClick && !c && e.onClick(e, t);
						},
						Je = (e, t, d) => {
							(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), ue(t, d));
						},
						Xe = (e) => {
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
									e.preventDefault(), v(a);
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
							v((e) => {
								let t;
								return f ? (t = e - i < 0 ? a : e - i) : (t = Math.max(0, e - i)), t;
							});
						},
						z = () => {
							v((e) => {
								let t;
								return f ? (t = e + i > a ? 0 : e + i) : (t = Math.min(a, e + i)), t;
							});
						},
						Fe = (e) => {
							const t = L[e] || 0;
							v(t);
						},
						_e = () => {
							y(!p);
						},
						ze = (0, be.Z)(o, xe);
					if (!g || g.length === 0) return (0, s.Y)(s.FK, {});
					let k, H;
					if (S) {
						const e = S + (ee ?? 0);
						(k = -(h * e)), (H = 'px'), c && (k += re);
					} else {
						const e = 100 / B;
						if (((k = -(h * e)), (H = '%'), c && C.current)) {
							const t = C.current.parentElement?.offsetWidth || 0,
								d = (re / t) * 100;
							k += d;
						}
					}
					const G = !f && h === 0,
						V = !f && h >= a,
						He = {
							pauseButton: { value: p ? 'Pause' : 'Play', attributes: { 'aria-label': p ? 'Pause slideshow' : 'Resume slideshow' } },
							nextButton: { attributes: { 'aria-label': `Next slides${V ? ' (disabled)' : ''}` } },
							prevButton: { attributes: { 'aria-label': `Previous slides${G ? ' (disabled)' : ''}` } },
							srInstructions: {
								value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
									l && 'Swipe left or right to navigate on touch devices.'
								}`,
							},
						},
						Ge = j()(He, o.lang || {}),
						U = (0, N.u)(Ge, { isPlaying: p, isNextDisabled: V, isPrevDisabled: G });
					return (0, s.Y)(fe._, {
						children: (0, s.FD)('div', {
							...ze,
							className: T()('ss__slideshow', Y),
							ref: Se,
							role: 'region',
							'aria-label': Te,
							'aria-labelledby': $e,
							'aria-roledescription': 'slideshow',
							onMouseEnter: je,
							onMouseLeave: Ye,
							onKeyDown: Xe,
							tabIndex: 0,
							children: [
								(0, s.Y)('div', { className: 'ss__slideshow__sr-only', ...U.srInstructions.all }),
								(0, s.Y)('div', {
									className: 'ss__slideshow__container',
									children: (0, s.Y)('div', {
										ref: C,
										className: T()('ss__slideshow__track', { 'ss__slideshow__track--dragging': c, 'ss__slideshow__track--centered': ke && O <= P }),
										style: { transform: `translateX(${k}${H})` },
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
											const d = t >= h && t < h + P,
												u = !!e.onClick,
												b = !!e.content,
												_ = e.alt || Le || `Image ${t + 1}`,
												Z = { slide: { attributes: { 'aria-label': u ? `Click to view ${_}` : `${_} ${t + 1} of ${g.length}` } } },
												Ve = j()(Z, o.lang || {}),
												Ze = (0, N.u)(Ve, { hasClickHandler: u, imageAlt: _, index: t, slidesLength: g.length });
											return (0, s.Y)(
												'div',
												{
													...Ze.slide.all,
													className: T()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': u, 'ss__slideshow__slide--content': b }),
													role: u ? 'button' : b ? 'presentation' : 'img',
													'aria-hidden': !d,
													tabIndex: u && d ? 0 : -1,
													onClick: u ? () => ue(e, t) : void 0,
													onKeyDown: u ? (Qe) => Je(Qe, e, t) : void 0,
													children: b ? e.content : (0, s.Y)(we._, { ...I.Image, src: e.src || Q, alt: d ? _ : '' }),
												},
												t
											);
										}),
									}),
								}),
								!!(Oe || (ye && g.length > P)) &&
									(0, s.FD)(s.FK, {
										children: [
											(0, s.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
												children: (0, s.Y)($.$, {
													icon: 'angle-left',
													className: 'ss__slideshow__prev',
													disabled: G,
													...U.prevButton.all,
													...I.PrevButton,
													onClick: F,
												}),
											}),
											(0, s.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
												children: (0, s.Y)($.$, {
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
									O > B &&
									(0, s.Y)('div', {
										className: 'ss__slideshow__pagination',
										role: 'tablist',
										'aria-label': 'Slide navigation',
										children: L.map((e, t) => {
											const d = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${t + 1} of ${J}` } } },
												u = j()(d, o.lang || {}),
												b = (0, N.u)(u, { index: t, totalDots: J }),
												_ = Ne === t,
												Z = _ ? I.PaginationCurrentButton : I.PaginationButton;
											return (0, s.Y)(
												$.$,
												{
													className: T()('ss__slideshow__dot', { 'ss__slideshow__dot--active': _ }),
													onClick: () => Fe(t),
													'aria-selected': _,
													...b.paginationButton.all,
													...Z,
													children: (0, s.Y)('span', { className: 'ss__slideshow__dot-inner' }),
												},
												t
											);
										}),
									}),
								q && (0, s.Y)($.$, { className: 'ss__slideshow__sr-only', ...I.PauseButton, onClick: _e, ...U.pauseButton.all }),
							],
						}),
					});
				}
			},
		},
	]);
})();
