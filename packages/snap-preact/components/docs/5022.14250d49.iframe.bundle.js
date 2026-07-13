'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5022],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(Z, h, e) {
				e.d(h, { P: () => t });
				const t = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(Z, h, e) {
				e.d(h, { G: () => l });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(d, u) {
					const r = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...u };
					return (0, t.Z)(d, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(Z, h, e) {
				e.d(h, { Z: () => t });
				function t(d, u) {
					const r = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...u };
					if (typeof d != 'number' || Number.isNaN(d)) return;
					const f = l(d, r.decimalPlaces).split('.');
					(f[0] = f[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + r.thousandsSeparator)),
						r.decimalPlaces > 0 && r.padDecimalPlaces && (f[1] = (f[1] || '').padEnd(r.decimalPlaces, '0'));
					let P = f.join(r.decimalSeparator);
					return r.symbolAfter ? (P = P + r.symbol) : (P = r.symbol + P), P;
				}
				function l(d, u) {
					const r = d.toString(),
						f = r.indexOf('.'),
						P = f == -1 ? r.length : 1 + f + (u || -1);
					return r.substr(0, P);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(Z, h, e) {
				e.d(h, { p: () => t });
				function t(l) {
					if (typeof l != 'string') return l;
					let d = l.toLowerCase();
					return (d = d.replace(/[^\w\s]/g, '').trim()), (d = d.replace(/\s/g, '-')), d;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(Z, h, e) {
				e.d(h, { x: () => t });
				function t(l, d, u) {
					if (typeof l != 'string' || l.length <= d) return l;
					const r = l.lastIndexOf(' ', d),
						f = r != -1 ? r : d - 1;
					return l.substr(0, f) + (u || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(Z, h, e) {
				e.d(h, { FN: () => ge, K: () => se, og: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					r = e.n(u),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(P),
					w = e('../../node_modules/swiper/swiper-react.mjs'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					K = e('./components/src/utilities/defined.ts'),
					F = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					T = e('../../node_modules/swiper/modules/index.mjs'),
					$ = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Q = e('./components/src/providers/cache.tsx'),
					te = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ce = e('./components/src/providers/treePath.tsx'),
					be = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const de = ({ vertical: I, theme: U }) =>
						(0, d.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: I ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: U?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: U?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: U?.variables?.colors?.primary || '#000' },
							},
						}),
					se = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					oe = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					ge = (0, f.PA)((I) => {
						const U = (0, te.u)(),
							ve = (0, ce.LU)(),
							Oe = {
								breakpoints: I.vertical ? JSON.parse(JSON.stringify(oe)) : JSON.parse(JSON.stringify(se)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !I.breakpoints || !Object.keys(I.breakpoints).length ? 5 : void 0,
								slidesPerView: !I.breakpoints || !Object.keys(I.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ve,
							};
						let b = (0, F.v6)('carousel', U, Oe, I),
							G;
						if (
							!(I.theme?.type == 'templates' || U?.type == 'templates') &&
							b.breakpoints &&
							(Object.keys(b.breakpoints).forEach((s) => {
								const _ = b.breakpoints[s];
								_.slidesPerView && (_.slidesPerView = Number(_.slidesPerView) || 1),
									_.slidesPerGroup && (_.slidesPerGroup = Number(_.slidesPerGroup) || 1);
							}),
							(G = (0, be.X)(b.breakpoints)),
							G && Object.keys(G).length)
						) {
							const s = C()(b?.theme || {}, G?.theme || {}, { arrayMerge: (_, ue) => ue });
							b.autoAdjustSlides &&
								b.children.length < G.slidesPerView &&
								((G.slidesPerView = b.children.length), (G.slidesPerGroup = b.children.length)),
								(b = { ...b, ...G, theme: s });
						}
						const {
								children: xe,
								loop: Me,
								nextButton: y,
								prevButton: i,
								hideButtons: g,
								vertical: D,
								onInit: v,
								onBeforeInit: J,
								onAfterInit: S,
								onNextButtonClick: a,
								onPrevButtonClick: c,
								onClick: x,
								disableStyles: n,
								style: A,
								styleScript: m,
								themeStyleScript: L,
								modules: Y,
								className: V,
								internalClassName: O,
								treePath: H,
								...W
							} = b,
							{ overrideElement: ne, shouldRenderDefault: re } = (0, he._)('carousel', b);
						if (!re) return ne;
						let z = b.pagination,
							E = b.navigation,
							X = b.scrollbar;
						const Ee = { icon: { internalClassName: 'ss__carousel__icon', ...(0, K.s)({ disableStyles: n }), theme: b.theme, treePath: H } },
							p = Array.isArray(Y) ? [T.Vx, T.dK, T.Ze, T.Jq].concat(Y) : [T.Vx, T.dK, T.Ze, T.Jq],
							Ce = p.filter((s, _) => p.indexOf(s) === _),
							ae = (0, l.li)(null),
							N = (0, l.li)(null),
							q = (0, l.li)(null),
							we = (0, M.Z)(b, de);
						(0, l.vJ)(() => {
							if (q.current) {
								const _ = q.current.querySelector('.swiper');
								_?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									_?.classList.contains('swiper-vertical') && _.classList.add('swiper-container-vertical'),
									_?.classList.contains('swiper-horizontal') && _.classList.add('swiper-container-horizontal');
							}
							me();
						}, [I]),
							z && (typeof z == 'object' ? (z = { clickable: !0, ...z }) : (z = { clickable: !0 })),
							E &&
								(typeof E == 'object'
									? (E = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...E })
									: (E = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							X && (typeof X == 'object' ? (X = { enabled: !0, ...X }) : (X = { enabled: !0 }));
						const me = () => {
							if (q.current) {
								const _ = q.current?.querySelectorAll('.swiper-slide-visible');
								_.forEach((ue, Se) => {
									ue.classList.remove('swiper-last-visible-slide'), Se == _.length - 1 && ue.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete W.breakpoints,
							xe?.length
								? (0, t.Y)(Q._, {
										children: (0, t.FD)('div', {
											ref: q,
											...we,
											className: r()('ss__carousel', D ? 'ss__carousel-vertical' : '', V, O),
											children: [
												E !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': g }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: ae,
															onClick: c && ((s) => c(s)),
															children: i || (0, t.Y)($.I, { icon: D ? 'angle-up' : 'angle-left', ...Ee.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(w.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (s) => {
														E &&
															s.params.navigation &&
															((s.params.navigation.prevEl = ae.current ? ae.current : void 0),
															(s.params.navigation.nextEl = N.current ? N.current : void 0)),
															J && J(s);
													},
													onInit: (s) => {
														v && v(s);
													},
													onAfterInit: (s) => {
														E &&
															s.navigation &&
															((s.navigation.onPrevClick = (_) => {
																_.preventDefault(),
																	!(s.isBeginning && !s.params.loop && !s.params.rewind) && (s.slidePrev(), s.emit('navigationPrev'));
															}),
															(s.navigation.onNextClick = (_) => {
																_.preventDefault(), !(s.isEnd && !s.params.loop && !s.params.rewind) && (s.slideNext(), s.emit('navigationNext'));
															})),
															S && S(s);
													},
													onClick: (s, _) => {
														x && x(s, _);
													},
													direction: D ? 'vertical' : 'horizontal',
													loop: Me,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Ce,
													...W,
													...G,
													controller: void 0,
													navigation: E,
													pagination: z,
													scrollbar: X,
													onResize: (s) => {
														W.onResize && W.onResize(), s.updateSlidesClasses(), me();
													},
													onTransitionEnd: () => {
														W.onTransitionEnd && W.onTransitionEnd(), me();
													},
													children: xe.map((s) => (s != null ? (0, t.Y)(w.qr, { children: (0, B.Y)(s, { treePath: H }) }) : null)),
												}),
												E !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': g }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: N,
															onClick: a && ((s) => a(s)),
															children: y || (0, t.Y)($.I, { icon: D ? 'angle-down' : 'angle-right', ...Ee.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Molecules/Result/Result.tsx'(Z, h, e) {
				e.d(h, { Q: () => Oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					f = e.n(r),
					P = e('./components/src/components/Atoms/Image/Image.tsx'),
					C = e('./components/src/components/Atoms/Price/Price.tsx'),
					w = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					F = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					te = e('./components/src/types.ts'),
					ce = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					be = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					he = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					de = e('./components/src/components/Atoms/Button/Button.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se),
					ge = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					U = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const ve = () =>
						(0, u.AH)({
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
					Oe = (0, d.PA)((b) => {
						const G = (0, B.u)(),
							xe = (0, K.LU)(),
							Me = {
								layout: te.V.grid,
								treePath: xe,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							y = (0, T.v6)('result', G, Me, b),
							{
								result: i,
								hideBadge: g,
								hideTitle: D,
								hidePricing: v,
								hideImage: J,
								detailSlot: S,
								fallback: a,
								disableStyles: c,
								className: x,
								internalClassName: n,
								layout: A,
								onClick: m,
								controller: L,
								hideVariantSelections: Y,
								hideAddToCartButton: V,
								onAddToCartClick: O,
								addToCartButtonText: H,
								addToCartButtonSuccessText: W,
								addToCartButtonSuccessTimeout: ne,
								hideRating: re,
								trackingRef: z,
								treePath: E,
							} = y,
							{ overrideElement: X, shouldRenderDefault: Ee } = (0, I._)('result', {
								...y,
								customComponent: y.customComponent && y.customComponent !== 'Result' ? y.customComponent : void 0,
							});
						if (!Ee) return X;
						const p = i?.display?.mappings.core || i?.mappings?.core,
							[Ce, ae] = (0, l.J0)(!1),
							N = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, M.s)({ disableStyles: c }),
									theme: y.theme,
									treePath: E,
								},
								price: { internalClassName: 'ss__result__price', ...(0, M.s)({ disableStyles: c }), theme: y.theme, treePath: E },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: i,
									...(0, M.s)({ disableStyles: c }),
									theme: y.theme,
									treePath: E,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: i,
									controller: L,
									...(0, M.s)({ disableStyles: c }),
									theme: y.theme,
									treePath: E,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: p?.name || '',
									src: p?.imageUrl || '',
									...(0, M.s)({ disableStyles: c, fallback: a }),
									theme: y.theme,
									treePath: E,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: p?.rating || 0,
									count: Number(p?.ratingCount || 0),
									...(0, M.s)({ disableStyles: c }),
									theme: y.theme,
									treePath: E,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (le) => {
										ae(!0), O && O(le, i), L?.addToCart([i]), setTimeout(() => ae(!1), ne);
									},
									...(0, M.s)({ disableStyles: c }),
									theme: y.theme,
									treePath: E,
								},
							};
						let q = p?.name;
						y.truncateTitle && (q = Q.x(p?.name || '', y.truncateTitle.limit, y.truncateTitle.append));
						const we = (0, $.Z)(y, ve),
							me = { addToCartButtonText: { value: Ce ? W : H } },
							s = oe()(me, y.lang || {}),
							_ = (0, ge.u)(s, { result: i, controller: L }),
							ue = !!(p?.msrp && p?.price && p?.price < p?.msrp),
							Se = L?.store?.config?.asyncState?.product?.price ? i.state.priceFetched : !0;
						return p
							? (0, t.Y)(w._, {
									children: (0, t.FD)('article', {
										...we,
										className: f()('ss__result', `ss__result--${A}`, { 'ss__result--sale': ue }, x, n),
										ref: z,
										children: [
											!J &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: p.url,
														onClick: (le) => {
															m && m(le);
														},
														children: g
															? (0, t.Y)(P._, { ...N.image })
															: (0, t.Y)(be.Q, { ...N.overlayBadge, controller: L, children: (0, t.Y)(P._, { ...N.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!g && (0, t.Y)(ce.W, { ...N.calloutBadge, controller: L }),
													!D &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: p.url,
																onClick: (le) => {
																	m && m(le);
																},
																dangerouslySetInnerHTML: { __html: q || '' },
															}),
														}),
													!re && (0, t.Y)(he.G, { ...N.rating }),
													!v && Se && p.price && p.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ue
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(C.g, { ...N.price, value: p.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(C.g, { ...N.price, value: p.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(C.g, { ...N.price, value: p.price }),
														  })
														: null,
													(0, F.Y)(S, { result: i, treePath: E }),
													!Y && i.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: i.variants?.selections.map((le) => (0, t.Y)(U.m, { ...N.variantSelection, type: le.type, selection: le })),
														  })
														: null,
													!V &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(de.$, { ...N.button, ..._.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(Z, h, e) {
				e.d(h, { g: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					u = e.n(d),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(P),
					w = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					B = e('./components/src/components/Molecules/Result/Result.tsx'),
					K = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Q = e('./components/src/providers/treePath.tsx'),
					te = e('./components/src/providers/snap.tsx'),
					ce = e('./components/src/providers/cache.tsx'),
					be = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					de = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					se = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					oe = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ge = e('./components/src/hooks/useLang.tsx');
				const I = (0, f.PA)((i) => {
					const g = (0, $.u)(),
						D = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						v = (0, K.v6)('bundleSelector', g, D, i),
						{
							children: J,
							checked: S,
							icon: a,
							seedText: c,
							seed: x,
							hideCheckboxes: n,
							onCheck: A,
							title: m,
							className: L,
							internalClassName: Y,
							treePath: V,
							classNamePrefix: O,
						} = v,
						H = V?.lastIndexOf(' '),
						W = H !== -1 ? V?.slice(0, H) : V,
						ne = {
							icon: { name: 'bundle-selector', internalClassName: `${O}__wrapper__selector__icon`, size: 15, theme: v?.theme, treePath: W },
							checkbox: {
								internalClassName: `${O}__wrapper__selector__result-wrapper__checkbox`,
								checked: S,
								size: '18px',
								onClick: A,
								lang: { checkbox: { attributes: { 'aria-label': S ? `remove product from bundle ${m}` : `add product to bundle ${m}` } } },
								theme: v?.theme,
								treePath: W,
							},
						},
						re = C()({}, v.lang || {}),
						z = (0, ge.u)(re, {});
					return (0, t.FD)('div', {
						className: u()(
							`${O}__wrapper__selector`,
							S ? `${O}__wrapper__selector--selected` : '',
							c || x ? `${O}__wrapper__selector--seed` : '',
							L,
							Y
						),
						children: [
							(0, t.FD)('div', {
								className: `${O}__wrapper__selector__result-wrapper`,
								children: [
									!n && (0, t.Y)(se.S, { ...ne.checkbox }),
									c && (0, t.Y)('div', { className: `${O}__wrapper__selector__result-wrapper__seed-badge`, ...z.seedText?.all }),
									J,
								],
							}),
							a ? (0, t.Y)(oe.I, { ...ne.icon, ...(typeof a == 'string' ? { icon: a } : a) }) : void 0,
						],
					});
				});
				var U = e('./components/src/components/Atoms/Button/Button.tsx'),
					ve = e('./components/src/components/Atoms/Price/Price.tsx');
				const Oe = (0, f.PA)((i) => {
					const g = { ...i };
					g.onAddToCart = async (O) => {
						await i.onAddToCart(O), m(!0), setTimeout(() => m(!1), i.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: D,
							cartStore: v,
							onAddToCart: J,
							ctaIcon: S,
							ctaButtonText: a,
							ctaButtonSuccessText: c,
							treePath: x,
							classNamePrefix: n,
						} = g,
						[A, m] = (0, r.J0)(!1);
					g.addedToCart = A;
					const L = {
							icon: { name: 'bundle-cart', internalClassName: `${n}__wrapper__cta__icon`, size: 50, theme: g?.theme, treePath: x },
							subtotalStrike: { name: 'bundle-msrp', theme: g?.theme, treePath: x },
							subtotalPrice: { name: 'bundle-price', theme: g?.theme, treePath: x },
							button: { theme: g?.theme, treePath: x },
						},
						Y = C()({}, g.lang || {}),
						V = (0, ge.u)(Y, { cartStore: v });
					return (0, t.Y)('div', {
						className: `${n}__wrapper__cta`,
						children: D
							? (0, T.Y)(D, g)
							: (0, t.FD)(t.FK, {
									children: [
										(0, t.FD)('div', {
											className: `${n}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												S
													? (0, t.Y)('div', {
															className: `${n}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(oe.I, { ...L.icon, ...(typeof S == 'string' ? { icon: S } : S) }),
													  })
													: null,
												(0, t.Y)('span', { className: `${n}__wrapper__cta__subtotal__title`, ...V.ctaSubtotalTitle?.all }),
												(0, t.FD)('div', {
													className: `${n}__wrapper__cta__subtotal__prices`,
													children: [
														v.msrp && v.msrp !== v.price
															? (0, t.FD)('label', {
																	className: `${n}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(ve.g, { ...L.subtotalStrike, lineThrough: !0, value: v.msrp })],
															  })
															: null,
														(0, t.Y)('label', {
															className: `${n}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(ve.g, { ...L.subtotalPrice, value: v.price }),
														}),
													],
												}),
											],
										}),
										(0, t.Y)(U.$, {
											...L.button,
											internalClassName: u()(`${n}__wrapper__cta__button`, { [`${n}__wrapper__cta__button--added`]: A }),
											'aria-live': A,
											onClick: (O) => J(O),
											...(A ? V.ctaButtonSuccessText?.all : V.ctaButtonText?.all),
											children: A ? c : a,
										}),
									],
							  }),
					});
				});
				var b = e('./components/src/hooks/useComponent.tsx'),
					G = e('./components/src/hooks/useIntersection.tsx'),
					xe = e('./components/src/utilities/componentNameToClassName.ts');
				const Me = ({
						vertical: i,
						separatorIcon: g,
						carousel: D,
						ctaInline: v,
						hasSeed: J,
						hideSeed: S,
						carouselEnabled: a,
						limit: c,
						alias: x,
					}) => {
						let n = 'ss__recommendation-bundle';
						x && (n = `ss__${(0, xe.b)(x)}`);
						const A = D?.slidesPerView;
						return (0, l.AH)({
							[`.${n}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${n}__wrapper__selector--seed`]: { width: `${i ? '100%' : 'auto'}`, margin: `${g ? 'initial' : 'auto !important'}` },
							[`.${n}__wrapper__seed-container`]: { width: i ? '100%' : `calc(100% / ${A + (v ? 1 : 0)})` },
							[`.${n}__wrapper__cta`]: {
								width: i ? '100%' : `${v ? `calc(100% / ${(a ? A : c || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${n}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${n}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${n}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: i ? '100%' : `calc(calc(100% / ${A + (v ? 1 : 0)}) * ${A - (J && !S ? 1 : 0)})`,
							},
							[`.${n}__wrapper--seed-in-carousel`]: {
								[`.${n}__wrapper__cta`]: { width: i ? '100%' : `calc(100% / ${D?.slidesPerView + (v ? 1 : 0)})` },
								[`.${n}__wrapper__carousel`]: {
									width: i ? '100%' : `calc(calc(100% / ${D?.slidesPerView + (v ? 1 : 0)}) * ${D?.slidesPerView})`,
									padding: '0',
								},
							},
							'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': { [`.${n}__wrapper__selector__icon`]: { display: 'none' } },
							'.swiper-slide-visible': { [`.${n}__wrapper__selector__icon`]: { display: 'block' } },
							[`.${n}__wrapper--vertical`]: { flexDirection: 'column' },
							[`.${n}__wrapper__selector`]: {
								alignItems: 'baseline',
								position: 'relative',
								[`&.${n}__wrapper__selector--last`]: { [`.${n}__wrapper__selector__icon`]: { display: 'none' } },
								[`.${n}__wrapper__selector__result-wrapper__seed-badge`]: { position: 'absolute', top: '0', left: '0', zIndex: '1' },
								[`.${n}__wrapper__selector__icon`]: { position: 'absolute', right: '-1em', top: '140px' },
								[`.${n}__wrapper__selector__result-wrapper`]: {
									alignItems: 'center',
									position: 'relative',
									margin: `0px ${5 + (Number(D?.spaceBetween) || 0)}px`,
								},
								[`.${n}__wrapper__selector__result-wrapper__checkbox`]: {
									position: 'absolute',
									top: '0',
									right: '0',
									zIndex: '101',
									cursor: 'pointer',
								},
							},
						});
					},
					y = (0, f.PA)((i) => {
						const g = (0, $.u)(),
							D = (0, Q.LU)(),
							J = {
								breakpoints: JSON.parse(
									JSON.stringify({
										0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10, ctaInline: !1 },
										768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
										1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
									})
								),
								hideCheckboxes: !1,
								separatorIcon: 'plus-thin',
								seedText: 'This Product',
								separatorIconSeedOnly: !0,
								ctaIcon: 'bag',
								ctaButtonText: 'Add All To Cart',
								ctaButtonSuccessText: 'Bundle Added!',
								ctaButtonSuccessTimeout: 2e3,
								ctaInline: !0,
								title: i.controller?.store?.profile?.display?.templateParameters?.title,
								description: i.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: D,
							},
							S = { name: i.controller?.store?.profile?.tag?.toLowerCase(), ...i };
						let a = (0, K.v6)(S.alias || 'recommendationBundle', g, J, S),
							c = 'ss__recommendation-bundle';
						a.alias && (c = `ss__${(0, xe.b)(a.alias)}`);
						let x;
						if (!(i.theme?.type == 'templates' || g?.type == 'templates') && ((x = (0, be.X)(a.breakpoints)), x && Object.keys(x).length)) {
							const o = C()(a?.theme || {}, x?.theme || {}, { arrayMerge: (k, R) => R });
							a = { ...a, ...x, theme: o };
						}
						const {
								title: n,
								description: A,
								controller: m,
								breakpoints: L,
								results: Y,
								carousel: V,
								preselectedCount: O,
								separatorIcon: H,
								hideCheckboxes: W,
								limit: ne,
								seedText: re,
								vertical: z,
								onAddToCart: E,
								separatorIconSeedOnly: X,
								ctaSlot: Ee,
								hideSeed: p,
								ctaButtonText: Ce,
								ctaButtonSuccessText: ae,
								ctaButtonSuccessTimeout: N,
								disableStyles: q,
								ctaIcon: we,
								ctaInline: me,
								hideSeedText: s,
								lazyRender: _,
								className: ue,
								internalClassName: Se,
								alias: le,
								style: _t,
								styleScript: pt,
								themeStyleScript: ft,
								treePath: Pe,
								...Qe
							} = a,
							Ae = a.resultComponent,
							Xe = (0, te.uk)(),
							Re = typeof Ae == 'string',
							qe = Re ? Ae : '',
							et = Xe?.templates?.library.import.component.result || {},
							{ ComponentOverride: tt, shouldWaitForNamedOverride: We } = (0, b.x)(et, Re ? qe : void 0),
							Ie = Re ? tt : Ae,
							Ke = { enabled: !0, offset: '10%', ..._ },
							Ne = { enabled: !0, loop: !1, spaceBetween: 10, ...V },
							{ seedInCarousel: Te, prevButton: st, nextButton: ot, hideButtons: nt, loop: Ge, spaceBetween: rt, pagination: at } = Ne,
							ke = Ne.enabled;
						if (!m || m.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let j = Y || m.store?.results;
						ne && (j = j.slice(0, p && j.filter((o) => o.bundleSeed == !0).length ? ne + 1 : ne));
						const ee = m.store.cart;
						if (!ee) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(Y && Y.length) && !m.store?.results?.length) return m.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const ie = Y ? Y.filter((o) => o.bundleSeed == !0).pop() : m.store?.results?.filter((o) => o.bundleSeed == !0).pop(),
							lt = le == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
							$e = {
								carousel: {
									loop: Ge,
									internalClassName: 'ss__recommendation__carousel',
									...(0, F.s)({ disableStyles: q }),
									theme: a?.theme,
									treePath: Pe,
								},
								result: { internalClassName: 'ss__recommendation__result', ...lt, ...(0, F.s)({ disableStyles: q }), theme: a?.theme, treePath: Pe },
							},
							Ue = !!j.filter((o) => o.bundleSeed == !0).length;
						let ye = a.carousel?.slidesPerView || a.slidesPerView;
						ye ? j.length < Number(ye) && (ye = j.length) : (ye = 2);
						const it = (0, M.Z)({ ...a, carousel: { ...Ne, slidesPerView: ye }, hasSeed: Ue, carouselEnabled: ke }, Me),
							ze = typeof O == 'number' ? O : ke ? ye : j.length;
						(0, r.vJ)(() => {
							ee.reset(),
								ze &&
									j?.forEach((o, k) => {
										k < Number(ze) && ee.addItems([o]);
									});
						}, [j.length]);
						const Be = ee.items,
							Ye = { ...L };
						if (ke) {
							const o = (k) => {
								const R = k?.slidesPerView || k.slidesPerView || 2,
									pe = k?.slidesPerGroup || k.slidesPerGroup || 2;
								let fe = R,
									De = pe;
								const je = !Ue || Te ? j.length : j.length - 1;
								return (
									je && (je >= R ? ((fe = R - (!Te && Ue ? 1 : 0)), Te || (De = pe - 1 || 1)) : ((fe = je), (De = je))),
									{ slidesPerView: fe, slidesPerGroup: De }
								);
							};
							if (!(i.theme?.type == 'templates' || g?.type == 'templates'))
								Object.keys(a.breakpoints).forEach((k) => {
									const R = a.breakpoints[k],
										{ slidesPerView: pe, slidesPerGroup: fe } = o(R);
									Ye[k] = { ...Ye[k], slidesPerView: pe, slidesPerGroup: fe };
								});
							else {
								const { slidesPerView: k, slidesPerGroup: R } = o({ ...Ne, slidesPerView: ye });
								x = { ...Ne, slidesPerView: k, slidesPerGroup: R };
							}
						}
						const Le = (o) => {
								o &&
									(Be.findIndex((R) => R.id == o.id) > -1
										? (ee.removeItems([o]), ee.items.length == 0 && ie && ee.items.push(ie))
										: ee.addItems([o]));
							},
							Fe = async (o) => {
								await m.addToCart(Be), E && (await E(o, Be));
							},
							ct = () => {
								if (Ve.current) {
									const o = Ve.current?.base,
										pe = Je.current?.base?.querySelector(`.swiper-slide-visible .${c}__wrapper__selector`)?.offsetWidth;
									o && (o.style.width = `${pe}px`);
								}
							},
							Ve = (0, r.li)(),
							Je = (0, r.li)(),
							[dt, mt] = (0, r.J0)(!1),
							He = (0, r.li)(null);
						(!Ke?.enabled || (0, G.v)(He, `${Ke.offset} 0px ${Ke.offset} 0px`, !0)) && mt(!0);
						const ut = {
								seedText: { value: re },
								ctaButtonText: { value: Ce },
								ctaButtonSuccessText: { value: ae },
								ctaSubtotalTitle: { value: `Subtotal for ${ee.count} items` },
							},
							_e = C()(ut, a.lang || {}),
							Ze = (0, r.Kr)(
								() =>
									j.map((o, k) => {
										const R = !!o.bundleSeed,
											pe = Be.findIndex((De) => De.id == o.id) > -1;
										let fe = {
											onCheck: (De) => {
												De.stopPropagation(), Le(o);
											},
											checked: pe,
											hideCheckboxes: W,
											theme: a.theme,
											icon: X ? !1 : H,
											className: k + 1 == j.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: c,
											treePath: Pe,
										};
										return (
											R && (fe = { ...fe, seedText: re, seed: !0, icon: H, lang: { seedText: _e.seedText } }),
											!R || ((Te || V?.enabled == !1) && R && !p)
												? (0, t.Y)(
														de.o,
														{
															controller: m,
															result: o,
															track: { impression: !R },
															children: (0, t.Y)(I, {
																...fe,
																children: Ie
																	? (0, T.Y)(Ie, {
																			controller: m,
																			theme: Re ? C()(a.theme || {}, { components: { result: { customComponent: Ae } } }) : a.theme,
																			treePath: Pe,
																			result: o,
																			seed: R,
																			selected: pe,
																			onProductSelect: Le,
																	  })
																	: We
																	? null
																	: (0, t.Y)(B.Q, { ...$e.result, controller: m, result: o }),
															}),
														},
														o.id
												  )
												: null
										);
									}),
								[j, Be, W, X, H, Te, p, We, Ie, a.theme, re]
							);
						return (
							s && delete _e.seedText.value,
							j?.length
								? (0, t.Y)(ce._, {
										children: (0, t.Y)('div', {
											...it,
											ref: He,
											className: u()(c, { [`${c}--stacked`]: !me }, ue, Se),
											children: dt
												? (0, t.FD)(he.l, {
														controller: m,
														children: [
															n && (0, t.Y)('h3', { className: `${c}__title`, children: (0, t.Y)('span', { children: n }) }),
															A &&
																(0, t.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, t.Y)('span', { children: A }) }),
															(0, t.FD)('div', {
																className: u()(`${c}__wrapper`, { [`${c}__wrapper--seed-in-carousel`]: Te, [`${c}__wrapper--vertical`]: z }),
																children: [
																	ke
																		? (0, t.FD)(t.FK, {
																				children: [
																					!Te &&
																						!p &&
																						ie &&
																						(0, t.Y)('div', {
																							className: `${c}__wrapper__seed-container`,
																							children: (0, t.Y)(de.o, {
																								controller: m,
																								result: ie,
																								track: { impression: !1 },
																								children: (0, t.Y)(I, {
																									seedText: re,
																									seed: !0,
																									title: ie.display.mappings.core?.name,
																									onCheck: (o) => {
																										o.stopPropagation(), Le(ie);
																									},
																									checked: Be.findIndex((o) => o.id == ie.id) > -1,
																									icon: H,
																									hideCheckboxes: W,
																									theme: a.theme,
																									ref: Ve,
																									treePath: Pe,
																									classNamePrefix: c,
																									lang: { seedText: _e.seedText },
																									children:
																										Ie && m
																											? (0, T.Y)(Ie, {
																													controller: m,
																													seed: !0,
																													selected: Be.findIndex((o) => o.id == ie.id) > -1,
																													onProductSelect: Le,
																													result: ie,
																													treePath: Pe,
																													theme: Re
																														? C()(a.theme || {}, { components: { result: { customComponent: Ae } } })
																														: a.theme,
																											  })
																											: We
																											? null
																											: (0, t.Y)(B.Q, { ...$e.result, controller: m, result: ie }),
																								}),
																							}),
																						}),
																					(0, t.Y)('div', {
																						className: `${c}__wrapper__carousel`,
																						children: (0, t.Y)(w.FN, {
																							prevButton: st,
																							nextButton: ot,
																							hideButtons: nt,
																							loop: Ge,
																							spaceBetween: rt,
																							pagination: at,
																							breakpoints: Ye,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: z,
																							onResize: () => ct(),
																							...$e.carousel,
																							...Qe,
																							...x,
																							ref: Je,
																							children: Ze,
																						}),
																					}),
																				],
																		  })
																		: (0, t.Y)(t.FK, { children: Ze }),
																	me &&
																		(0, t.Y)(Oe, {
																			ctaSlot: Ee,
																			cartStore: ee,
																			onAddToCart: (o) => Fe(o),
																			ctaButtonText: Ce,
																			ctaButtonSuccessText: ae,
																			ctaButtonSuccessTimeout: N,
																			ctaIcon: we,
																			treePath: Pe,
																			classNamePrefix: c,
																			lang: {
																				ctaButtonSuccessText: _e.ctaButtonSuccessText,
																				ctaButtonText: _e.ctaButtonText,
																				ctaSubtotalTitle: _e.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!me &&
																(0, t.Y)(Oe, {
																	ctaSlot: Ee,
																	cartStore: ee,
																	onAddToCart: (o) => Fe(o),
																	ctaButtonText: Ce,
																	ctaButtonSuccessText: ae,
																	ctaButtonSuccessTimeout: N,
																	ctaIcon: we,
																	treePath: Pe,
																	classNamePrefix: c,
																	lang: {
																		ctaButtonSuccessText: _e.ctaButtonSuccessText,
																		ctaButtonText: _e.ctaButtonText,
																		ctaSubtotalTitle: _e.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, t.Y)(he.l, {
														controller: m,
														children: j.map((o) => (0, t.Y)(de.o, { controller: m, result: o, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(Z, h, e) {
				e.d(h, { l: () => w });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					f = e.n(r),
					P = e('./components/src/utilities/mergeStyles.ts');
				const C = () => (0, d.AH)({}),
					w = (0, u.PA)((B) => {
						const { children: K, className: F, internalClassName: M } = B,
							T = (0, l.v2)(K),
							$ = (0, P.Z)(B, C);
						return T.length ? (0, t.Y)('div', { className: f()('ss__recommendation-profile-tracker', F, M), ...$, children: K }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(Z, h, e) {
				e.d(h, { o: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/classnames/index.js'),
					r = e.n(u),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/createImpressionObserver.ts');
				const w = { ResultTracker: () => (0, l.AH)({}) },
					B = (0, d.PA)((K) => {
						const F = (0, f.u)(),
							M = (0, P.v6)('resultTracker', F, {}, K),
							T = { impression: !0, click: !0 },
							{ children: $, result: Q, track: te, controller: ce, className: be, internalClassName: he, disableStyles: de, style: se } = M,
							oe = { ...T, ...te },
							{ ref: ge, inViewport: I } = (0, C.Q)();
						I && oe.impression && ce?.track.product.impression(Q);
						const U = {};
						return (
							de ? se && (U.css = [se]) : (U.css = [w.ResultTracker(), se]),
							(0, t.Y)('div', {
								className: r()('ss__result-tracker', `ss__${ce?.type}-result-tracker`, be, he),
								onClick: (ve) => {
									oe.click && ce?.track.product.click(ve, Q);
								},
								ref: ge,
								...U,
								children: $,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(Z, h, e) {
				e.d(h, { b: () => t });
				const t = (l) => l.replace(/([A-Z])/g, (d) => '-' + d.toLowerCase());
			},
			'../../node_modules/colord/plugins/names.mjs'(Z, h, e) {
				e.d(h, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(l, d) {
					var u = {
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
						r = {};
					for (var f in u) r[u[f]] = f;
					var P = {};
					(l.prototype.toName = function (C) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var w,
							B,
							K = r[this.toHex()];
						if (K) return K;
						if (C?.closest) {
							var F = this.toRgb(),
								M = 1 / 0,
								T = 'black';
							if (!P.length) for (var $ in u) P[$] = new l(u[$]).toRgb();
							for (var Q in u) {
								var te = ((w = F), (B = P[Q]), Math.pow(w.r - B.r, 2) + Math.pow(w.g - B.g, 2) + Math.pow(w.b - B.b, 2));
								te < M && ((M = te), (T = Q));
							}
							return T;
						}
					}),
						d.string.push([
							function (C) {
								var w = C.toLowerCase(),
									B = w === 'transparent' ? '#0000' : u[w];
								return B ? new l(B).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
