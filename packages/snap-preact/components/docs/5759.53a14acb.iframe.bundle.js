'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5759],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(b, a, e) {
				e.d(a, { P: () => t });
				const t = (r) => r.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(b, a, e) {
				e.d(a, { G: () => r });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function r(o, i) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...i };
					return (0, t.Z)(o, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(b, a, e) {
				e.d(a, { Z: () => t });
				function t(o, i) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...i };
					if (typeof o != 'number' || Number.isNaN(o)) return;
					const l = r(o, s.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(s.decimalPlaces, '0'));
					let c = l.join(s.decimalSeparator);
					return s.symbolAfter ? (c = c + s.symbol) : (c = s.symbol + c), c;
				}
				function r(o, i) {
					const s = o.toString(),
						l = s.indexOf('.'),
						c = l == -1 ? s.length : 1 + l + (i || -1);
					return s.substr(0, c);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(b, a, e) {
				e.d(a, { p: () => t });
				function t(r) {
					if (typeof r != 'string') return r;
					let o = r.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(b, a, e) {
				e.d(a, { x: () => t });
				function t(r, o, i) {
					if (typeof r != 'string' || r.length <= o) return r;
					const s = r.lastIndexOf(' ', o),
						l = s != -1 ? s : o - 1;
					return r.substr(0, l) + (i || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(b, a, e) {
				e.d(a, { FN: () => J, K: () => B, og: () => Y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					s = e.n(i),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(c),
					_ = e('../../node_modules/swiper/swiper-react.mjs'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					h = e('../../node_modules/swiper/modules/index.mjs'),
					R = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					W = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/hooks/useDisplaySettings.tsx'),
					U = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const z = ({ vertical: M, theme: L }) =>
						(0, o.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: M ? '100%' : void 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
							'&.ss__carousel-vertical': {
								flexDirection: 'column',
								'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
								'.swiper-container': { flexDirection: 'row' },
								'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
								'.swiper-pagination-bullet': { margin: '4px' },
							},
							'.swiper-pagination-bullet-active': { background: L?.variables?.colors?.primary || 'inherit' },
							'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
							},
							'.ss__carousel__next, .ss__carousel__prev': {
								padding: '5px',
								cursor: 'pointer',
								lineHeight: 0,
								'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
							},
							'.swiper': {
								display: 'flex',
								flexDirection: 'column',
								marginLeft: 'auto',
								marginRight: 'auto',
								position: 'relative',
								overflow: 'hidden',
								listStyle: 'none',
								padding: 0,
								zIndex: '1',
								width: '100%',
							},
							'.swiper-vertical > .swiper-wrapper': { flexDirection: 'column' },
							'.swiper-wrapper': {
								order: 0,
								position: 'relative',
								width: '100%',
								height: '100%',
								zIndex: '1',
								display: 'flex',
								transitionProperty: 'transform',
								boxSizing: 'content-box',
							},
							'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
							'.swiper-pagination': {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
								width: '100%',
								order: 1,
								transition: '.3s opacity',
							},
							'.swiper-pagination-bullet': {
								width: '8px',
								height: '8px',
								display: 'inline-block',
								borderRadius: '50%',
								background: '#000',
								opacity: '.2',
								cursor: 'pointer',
								margin: '0 4px',
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: L?.variables?.colors?.primary || '#000' },
							},
							'.swiper-slide-invisible-blank': { visibility: 'hidden' },
							'.swiper-horizontal': { touchAction: 'pan-y' },
							'.swiper-vertical': { touchAction: 'pan-x' },
							'.swiper-scrollbar': {
								position: 'absolute',
								bottom: '0',
								left: '0',
								width: '100%',
								height: '2px',
								backgroundColor: '#d9d9d9',
								'&:empty': { display: 'none' },
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: L?.variables?.colors?.primary || '#000' },
							},
						}),
					B = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					Y = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					J = (0, l.PA)((M) => {
						const L = (0, N.u)(),
							I = (0, P.LU)(),
							oe = {
								breakpoints: M.vertical ? JSON.parse(JSON.stringify(Y)) : JSON.parse(JSON.stringify(B)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !M.breakpoints || !Object.keys(M.breakpoints).length ? 5 : void 0,
								slidesPerView: !M.breakpoints || !Object.keys(M.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: I,
							};
						let g = (0, D.v6)('carousel', L, oe, M),
							k;
						if (
							!(M.theme?.type == 'templates' || L?.type == 'templates') &&
							g.breakpoints &&
							(Object.keys(g.breakpoints).forEach((n) => {
								const d = g.breakpoints[n];
								d.slidesPerView && (d.slidesPerView = Number(d.slidesPerView) || 1),
									d.slidesPerGroup && (d.slidesPerGroup = Number(d.slidesPerGroup) || 1);
							}),
							(k = (0, y.X)(g.breakpoints)),
							k && Object.keys(k).length)
						) {
							const n = u()(g?.theme || {}, k?.theme || {}, { arrayMerge: (d, Z) => Z });
							g.autoAdjustSlides &&
								g.children.length < k.slidesPerView &&
								((k.slidesPerView = g.children.length), (k.slidesPerGroup = g.children.length)),
								(g = { ...g, ...k, theme: n });
						}
						const {
								children: ne,
								loop: K,
								nextButton: p,
								prevButton: C,
								hideButtons: Q,
								vertical: O,
								onInit: A,
								onBeforeInit: re,
								onAfterInit: ae,
								onNextButtonClick: ie,
								onPrevButtonClick: S,
								onClick: le,
								disableStyles: _e,
								style: me,
								styleScript: te,
								themeStyleScript: X,
								modules: ue,
								className: he,
								internalClassName: pe,
								treePath: ce,
								...G
							} = g,
							{ overrideElement: fe, shouldRenderDefault: de } = (0, U._)('carousel', g);
						if (!de) return fe;
						let H = g.pagination,
							f = g.navigation,
							F = g.scrollbar;
						const q = { icon: { internalClassName: 'ss__carousel__icon', ...(0, x.s)({ disableStyles: _e }), theme: g.theme, treePath: ce } },
							E = Array.isArray(ue) ? [h.Vx, h.dK, h.Ze, h.Jq].concat(ue) : [h.Vx, h.dK, h.Ze, h.Jq],
							Ee = E.filter((n, d) => E.indexOf(n) === d),
							ee = (0, r.li)(null),
							T = (0, r.li)(null),
							V = (0, r.li)(null),
							se = (0, m.Z)(g, z);
						(0, r.vJ)(() => {
							if (V.current) {
								const d = V.current.querySelector('.swiper');
								d?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									d?.classList.contains('swiper-vertical') && d.classList.add('swiper-container-vertical'),
									d?.classList.contains('swiper-horizontal') && d.classList.add('swiper-container-horizontal');
							}
							j();
						}, [M]),
							H && (typeof H == 'object' ? (H = { clickable: !0, ...H }) : (H = { clickable: !0 })),
							f &&
								(typeof f == 'object'
									? (f = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...f })
									: (f = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							F && (typeof F == 'object' ? (F = { enabled: !0, ...F }) : (F = { enabled: !0 }));
						const j = () => {
							if (V.current) {
								const d = V.current?.querySelectorAll('.swiper-slide-visible');
								d.forEach((Z, w) => {
									Z.classList.remove('swiper-last-visible-slide'), w == d.length - 1 && Z.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete G.breakpoints,
							ne?.length
								? (0, t.Y)(W._, {
										children: (0, t.FD)('div', {
											ref: V,
											...se,
											className: s()('ss__carousel', O ? 'ss__carousel-vertical' : '', he, pe),
											children: [
												f !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': Q }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: ee,
															onClick: S && ((n) => S(n)),
															children: C || (0, t.Y)(R.I, { icon: O ? 'angle-up' : 'angle-left', ...q.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(_.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (n) => {
														f &&
															n.params.navigation &&
															((n.params.navigation.prevEl = ee.current ? ee.current : void 0),
															(n.params.navigation.nextEl = T.current ? T.current : void 0)),
															re && re(n);
													},
													onInit: (n) => {
														A && A(n);
													},
													onAfterInit: (n) => {
														f &&
															n.navigation &&
															((n.navigation.onPrevClick = (d) => {
																d.preventDefault(),
																	!(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), n.emit('navigationPrev'));
															}),
															(n.navigation.onNextClick = (d) => {
																d.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), n.emit('navigationNext'));
															})),
															ae && ae(n);
													},
													onClick: (n, d) => {
														le && le(n, d);
													},
													direction: O ? 'vertical' : 'horizontal',
													loop: K,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Ee,
													...G,
													...k,
													controller: void 0,
													navigation: f,
													pagination: H,
													scrollbar: F,
													onResize: (n) => {
														G.onResize && G.onResize(), n.updateSlidesClasses(), j();
													},
													onTransitionEnd: () => {
														G.onTransitionEnd && G.onTransitionEnd(), j();
													},
													children: ne.map((n) => (n != null ? (0, t.Y)(_.qr, { children: (0, v.Y)(n, { treePath: ce }) }) : null)),
												}),
												f !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': Q }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: T,
															onClick: ie && ((n) => ie(n)),
															children: p || (0, t.Y)(R.I, { icon: O ? 'angle-down' : 'angle-right', ...q.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Molecules/Result/Result.tsx'(b, a, e) {
				e.d(a, { Q: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					l = e.n(s),
					c = e('./components/src/components/Atoms/Image/Image.tsx'),
					u = e('./components/src/components/Atoms/Price/Price.tsx'),
					_ = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					W = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					N = e('./components/src/types.ts'),
					P = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					y = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					U = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					z = e('./components/src/components/Atoms/Button/Button.tsx'),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(B),
					J = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const I = () =>
						(0, i.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					oe = (0, o.PA)((g) => {
						const k = (0, v.u)(),
							ne = (0, x.LU)(),
							K = {
								layout: N.V.grid,
								treePath: ne,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							p = (0, h.v6)('result', k, K, g),
							{
								result: C,
								hideBadge: Q,
								hideTitle: O,
								hidePricing: A,
								hideImage: re,
								detailSlot: ae,
								fallback: ie,
								disableStyles: S,
								className: le,
								internalClassName: _e,
								layout: me,
								onClick: te,
								controller: X,
								hideVariantSelections: ue,
								hideAddToCartButton: he,
								onAddToCartClick: pe,
								addToCartButtonText: ce,
								addToCartButtonSuccessText: G,
								addToCartButtonSuccessTimeout: fe,
								hideRating: de,
								trackingRef: H,
								treePath: f,
							} = p,
							{ overrideElement: F, shouldRenderDefault: q } = (0, M._)('result', {
								...p,
								customComponent: p.customComponent && p.customComponent !== 'Result' ? p.customComponent : void 0,
							});
						if (!q) return F;
						const E = C?.display?.mappings.core || C?.mappings?.core,
							[Ee, ee] = (0, r.J0)(!1),
							T = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: S }),
									theme: p.theme,
									treePath: f,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: S }), theme: p.theme, treePath: f },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: C,
									...(0, m.s)({ disableStyles: S }),
									theme: p.theme,
									treePath: f,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: C,
									controller: X,
									...(0, m.s)({ disableStyles: S }),
									theme: p.theme,
									treePath: f,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: E?.name || '',
									src: E?.imageUrl || '',
									...(0, m.s)({ disableStyles: S, fallback: ie }),
									theme: p.theme,
									treePath: f,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: E?.rating || 0,
									count: Number(E?.ratingCount || 0),
									...(0, m.s)({ disableStyles: S }),
									theme: p.theme,
									treePath: f,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (w) => {
										ee(!0), pe && pe(w, C), X?.addToCart([C]), setTimeout(() => ee(!1), fe);
									},
									...(0, m.s)({ disableStyles: S }),
									theme: p.theme,
									treePath: f,
								},
							};
						let V = E?.name;
						p.truncateTitle && (V = W.x(E?.name || '', p.truncateTitle.limit, p.truncateTitle.append));
						const se = (0, R.Z)(p, I),
							j = { addToCartButtonText: { value: Ee ? G : ce } },
							n = Y()(j, p.lang || {}),
							d = (0, J.u)(n, { result: C, controller: X }),
							Z = !!(E?.msrp && E?.price && E?.price < E?.msrp);
						return E
							? (0, t.Y)(_._, {
									children: (0, t.FD)('article', {
										...se,
										className: l()('ss__result', `ss__result--${me}`, { 'ss__result--sale': Z }, le, _e),
										ref: H,
										children: [
											!re &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: E.url,
														onClick: (w) => {
															te && te(w);
														},
														children: Q
															? (0, t.Y)(c._, { ...T.image })
															: (0, t.Y)(y.Q, { ...T.overlayBadge, controller: X, children: (0, t.Y)(c._, { ...T.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Q && (0, t.Y)(P.W, { ...T.calloutBadge, controller: X }),
													!O &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: E.url,
																onClick: (w) => {
																	te && te(w);
																},
																dangerouslySetInnerHTML: { __html: V || '' },
															}),
														}),
													!de && (0, t.Y)(U.G, { ...T.rating }),
													!A && E.price && E.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: Z
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(u.g, { ...T.price, value: E.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(u.g, { ...T.price, value: E.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(u.g, { ...T.price, value: E.price }),
														  })
														: null,
													(0, D.Y)(ae, { result: C, treePath: f }),
													!ue && C.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: C.variants?.selections.map((w) => (0, t.Y)(L.m, { ...T.variantSelection, type: w.type, selection: w })),
														  })
														: null,
													!he &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(z.$, { ...T.button, ...d.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(b, a, e) {
				e.d(a, { A: () => L });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					s = e.n(i),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(c),
					_ = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					v = e('./components/src/components/Molecules/Result/Result.tsx'),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/hooks/useIntersection.tsx'),
					W = e('./components/src/hooks/useComponent.tsx'),
					N = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					U = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/hooks/useDisplaySettings.tsx'),
					B = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					Y = e('./components/src/hooks/useLang.tsx'),
					J = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const M = ({ vertical: I }) => (0, o.AH)({ height: I ? '100%' : void 0, '.ss__result__image-wrapper': { height: I ? '85%' : void 0 } }),
					L = (0, l.PA)((I) => {
						const oe = (0, P.u)(),
							g = (0, U.LU)(),
							k = {
								breakpoints: I.vertical ? JSON.parse(JSON.stringify(_.og)) : JSON.parse(JSON.stringify(_.K)),
								pagination: !1,
								loop: !0,
								title: I.controller?.store?.profile?.display?.templateParameters?.title,
								description: I.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: g,
							},
							ne = { name: I.controller?.store?.profile?.tag?.toLowerCase(), ...I };
						let K = (0, m.v6)('recommendation', oe, k, ne),
							p;
						!(I.theme?.type == 'templates' || oe?.type == 'templates') &&
							K.breakpoints &&
							((p = (0, z.X)(K.breakpoints)), p && Object.keys(p).length && (K = { ...K, ...p }));
						const {
								title: C,
								description: Q,
								controller: O,
								children: A,
								loop: re,
								results: ae,
								pagination: ie,
								nextButton: S,
								prevButton: le,
								hideButtons: _e,
								disableStyles: me,
								className: te,
								internalClassName: X,
								style: ue,
								styleScript: he,
								themeStyleScript: pe,
								lazyRender: ce,
								vertical: G,
								hideTitle: fe,
								treePath: de,
								...H
							} = K,
							f = K.resultComponent,
							F = (0, y.uk)(),
							q = typeof f == 'string',
							E = q ? f : '',
							Ee = F?.templates?.library.import.component.result || {},
							{ ComponentOverride: ee, shouldWaitForNamedOverride: T } = (0, W.x)(Ee, q ? E : void 0),
							V = q ? ee : f,
							se = { enabled: !0, offset: '10%', ...ce };
						if (!O || O.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const j = ae || O.store?.results;
						if (Array.isArray(A) && A.length !== j.length)
							return (
								O.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const n = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, D.s)({ disableStyles: me, vertical: G }),
									theme: K?.theme,
									treePath: de,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, D.s)({ disableStyles: me }), theme: K?.theme, treePath: de },
							},
							d = (0, h.Z)(K, M),
							[Z, w] = (0, r.J0)(!1),
							ve = (0, r.li)(null);
						(!se?.enabled || (0, R.v)(ve, `${se.offset} 0px ${se.offset} 0px`, !0)) && w(!0);
						const Pe = { titleText: { value: `${C}` } },
							Oe = u()(Pe, K.lang || {}),
							De = (0, Y.u)(Oe, {});
						return (Array.isArray(A) && A.length) || j?.length
							? (0, t.Y)(N._, {
									children: (0, t.Y)('div', {
										...d,
										className: s()('ss__recommendation', te, X),
										ref: ve,
										children: Z
											? (0, t.FD)(B.l, {
													controller: O,
													children: [
														C && !fe && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...De.titleText?.all, children: C }),
														Q && (0, t.Y)('p', { className: 'ss__recommendation__description', children: Q }),
														(0, t.Y)(_.FN, {
															prevButton: le,
															nextButton: S,
															hideButtons: _e,
															loop: re,
															pagination: ie,
															...n.carousel,
															...H,
															children:
																Array.isArray(A) && A.length
																	? A.map(($, ge) => (0, t.Y)(J.o, { controller: O, result: j[ge], children: $ }))
																	: j.map(($) =>
																			(0, t.Y)(J.o, {
																				controller: O,
																				result: $,
																				children:
																					V && O
																						? (0, x.Y)(V, { controller: O, result: $, treePath: n.result.treePath })
																						: T
																						? null
																						: (0, t.Y)(v.Q, { ...n.result, controller: O, result: $ }, $.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(B.l, {
													controller: O,
													children:
														Array.isArray(A) && A.length
															? A.map(($, ge) => (0, t.Y)(J.o, { controller: O, result: j[ge], children: (0, t.Y)(t.FK, {}) }))
															: j.map(($) => (0, t.Y)(J.o, { controller: O, result: $, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(b, a, e) {
				e.d(a, { l: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					l = e.n(s),
					c = e('./components/src/utilities/mergeStyles.ts');
				const u = () => (0, o.AH)({}),
					_ = (0, i.PA)((v) => {
						const { children: x, className: D, internalClassName: m } = v,
							h = (0, r.v2)(x),
							R = (0, c.Z)(v, u);
						return h.length ? (0, t.Y)('div', { className: l()('ss__recommendation-profile-tracker', D, m), ...R, children: x }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(b, a, e) {
				e.d(a, { o: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/classnames/index.js'),
					s = e.n(i),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/createImpressionObserver.ts');
				const _ = { ResultTracker: () => (0, r.AH)({}) },
					v = (0, o.PA)((x) => {
						const D = (0, l.u)(),
							m = (0, c.v6)('resultTracker', D, {}, x),
							h = { impression: !0, click: !0 },
							{ children: R, result: W, track: N, controller: P, className: y, internalClassName: U, disableStyles: z, style: B } = m,
							Y = { ...h, ...N },
							{ ref: J, inViewport: M } = (0, u.Q)();
						M && Y.impression && P?.track.product.impression(W);
						const L = {};
						return (
							z ? B && (L.css = [B]) : (L.css = [_.ResultTracker(), B]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${P?.type}-result-tracker`, y, U),
								onClick: (I) => {
									Y.click && P?.track.product.click(I, W);
								},
								ref: J,
								...L,
								children: R,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(b, a, e) {
				e.d(a, { v: () => r });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (o, i = '0px', s = !1) => {
					const [l, c] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const u = new IntersectionObserver(
								([_]) => {
									c(_.isIntersecting), s && _.isIntersecting && u.unobserve(o.current);
								},
								{ rootMargin: i }
							);
							return (
								o.current && u.observe(o.current),
								() => {
									u.unobserve(o.current);
								}
							);
						}, []),
						l
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(b, a, e) {
				e.d(a, { v: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 250,
					o = (s, l = {}) => {
						const { rootMargin: c = '0px', fireOnce: u = !1, threshold: _ = 0, minVisibleTime: v = 0 } = l,
							[x, D] = (0, t.J0)(!1),
							m = (0, t.li)(null),
							h = (0, t.li)(null),
							[R, W] = (0, t.J0)(0),
							N = (0, t.hb)((P) => {
								(s.current = P), W((y) => y + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								D(!1);
								let P = null,
									y = null;
								if (!window.IntersectionObserver || !s.current) return;
								const U = () => {
										y && (window.clearInterval(y), (y = null));
									},
									z = () => {
										v > 0
											? ((h.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													D(!0), u && s.current && P && P.unobserve(s.current);
											  }, v)))
											: (D(!0), u && s.current && P && P.unobserve(s.current));
									},
									B = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (h.current = null), D(!1);
									};
								return (
									(P = new IntersectionObserver(
										([Y]) => {
											Y.isIntersecting
												? s.current && i(s.current)
													? (U(), z())
													: (B(),
													  y ||
															(y = window.setInterval(() => {
																if (!s.current) {
																	U();
																	return;
																}
																i(s.current) && (U(), z());
															}, r)))
												: (U(), B());
										},
										{ rootMargin: c, threshold: _ }
									)),
									s.current && P.observe(s.current),
									() => {
										D(!1), U(), m.current && window.clearTimeout(m.current), P && s.current && P.unobserve(s.current);
									}
								);
							}, [s, R]),
							{ inViewport: x, updateRef: N }
						);
					};
				function i(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/types.ts'(b, a, e) {
				e.d(a, { Q: () => r, V: () => t });
				var t = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(t || {}),
					r = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(r || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(b, a, e) {
				e.d(a, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					i = 1e3;
				function s(l) {
					const c = (0, t.li)(null),
						{ inViewport: u, updateRef: _ } = (0, r.v)(c, { ...l, fireOnce: !0, threshold: o, minVisibleTime: i });
					return { ref: c, inViewport: u, updateRef: _ };
				}
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(b, a, e) {
				e.r(a), e.d(a, { Recommendation: () => t.A });
				var t = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(b, a, e) {
				e.d(a, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(r, o) {
					var i = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						s = {};
					for (var l in i) s[i[l]] = l;
					var c = {};
					(r.prototype.toName = function (u) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var _,
							v,
							x = s[this.toHex()];
						if (x) return x;
						if (u?.closest) {
							var D = this.toRgb(),
								m = 1 / 0,
								h = 'black';
							if (!c.length) for (var R in i) c[R] = new r(i[R]).toRgb();
							for (var W in i) {
								var N = ((_ = D), (v = c[W]), Math.pow(_.r - v.r, 2) + Math.pow(_.g - v.g, 2) + Math.pow(_.b - v.b, 2));
								N < m && ((m = N), (h = W));
							}
							return h;
						}
					}),
						o.string.push([
							function (u) {
								var _ = u.toLowerCase(),
									v = _ === 'transparent' ? '#0000' : i[_];
								return v ? new r(v).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
