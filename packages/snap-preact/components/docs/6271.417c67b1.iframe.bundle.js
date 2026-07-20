'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6271],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(O, a, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					C = e.n(E),
					g = e('./components/src/components/Atoms/Image/Image.tsx'),
					P = e('./components/src/components/Atoms/Price/Price.tsx'),
					x = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					W = e('./components/src/types.ts'),
					T = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					K = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					f = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					S = e('./components/src/components/Atoms/Button/Button.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(M),
					y = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const N = () =>
						(0, p.AH)({
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
					Q = (0, m.PA)(($) => {
						const k = (0, A.u)(),
							z = (0, R.LU)(),
							Z = {
								layout: W.V.grid,
								treePath: z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							o = (0, I.v6)('result', k, Z, $),
							{
								result: n,
								hideBadge: Y,
								hideTitle: G,
								hidePricing: J,
								hideImage: X,
								detailSlot: w,
								fallback: q,
								disableStyles: d,
								className: ee,
								internalClassName: se,
								layout: te,
								onClick: B,
								controller: u,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: b,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: le,
								hideRating: _e,
								trackingRef: ce,
								treePath: _,
							} = o,
							{ overrideElement: ie, shouldRenderDefault: me } = (0, j._)('result', {
								...o,
								customComponent: o.customComponent && o.customComponent !== 'Result' ? o.customComponent : void 0,
							});
						if (!me) return ie;
						const t = n?.display?.mappings.core || n?.mappings?.core,
							[de, V] = (0, i.J0)(!1),
							r = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								price: { internalClassName: 'ss__result__price', ...(0, l.s)({ disableStyles: d }), theme: o.theme, treePath: _ },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: n,
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: n,
									controller: u,
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: t?.name || '',
									src: t?.imageUrl || '',
									...(0, l.s)({ disableStyles: d, fallback: q }),
									theme: o.theme,
									treePath: _,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: t?.rating || 0,
									count: Number(t?.ratingCount || 0),
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (c) => {
										V(!0), b && b(c, n), u?.addToCart([n]), setTimeout(() => V(!1), le);
									},
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
							};
						let F = t?.name;
						o.truncateTitle && (F = h.x(t?.name || '', o.truncateTitle.limit, o.truncateTitle.append));
						const ue = (0, U.Z)(o, N),
							pe = { addToCartButtonText: { value: de ? re : ae } },
							Ee = v()(pe, o.lang || {}),
							Ce = (0, y.u)(Ee, { result: n, controller: u }),
							H = !!(t?.msrp && t?.price && t?.price < t?.msrp),
							Pe = u?.store?.config?.asyncState?.product?.price ? n.state.priceFetched : !0;
						return t
							? (0, s.Y)(x._, {
									children: (0, s.FD)('article', {
										...ue,
										className: C()('ss__result', `ss__result--${te}`, { 'ss__result--sale': H }, ee, se),
										ref: ce,
										children: [
											!X &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: t.url,
														onClick: (c) => {
															B && B(c);
														},
														children: Y
															? (0, s.Y)(g._, { ...r.image })
															: (0, s.Y)(K.Q, { ...r.overlayBadge, controller: u, children: (0, s.Y)(g._, { ...r.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Y && (0, s.Y)(T.W, { ...r.calloutBadge, controller: u }),
													!G &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: t.url,
																onClick: (c) => {
																	B && B(c);
																},
																dangerouslySetInnerHTML: { __html: F || '' },
															}),
														}),
													!_e && (0, s.Y)(f.G, { ...r.rating }),
													!J && Pe && t.price && t.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: H
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(P.g, { ...r.price, value: t.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(P.g, { ...r.price, value: t.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(P.g, { ...r.price, value: t.price }),
														  })
														: null,
													(0, L.Y)(w, { result: n, treePath: _ }),
													!oe && n.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: n.variants?.selections.map((c) => (0, s.Y)(D.m, { ...r.variantSelection, type: c.type, selection: c })),
														  })
														: null,
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(S.$, { ...r.button, ...Ce.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(a, ['Q', 0, Q]);
			},
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(O, a, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/providers/cache.tsx'),
					p = e('./components/src/components/Templates/Search/Search.tsx');
				const E = (0, i.PA)((C) => (0, s.Y)(m._, { children: (0, s.Y)(p.v, { ...C, alias: 'searchCollapsible' }) }));
				e.d(a, ['x', 0, E]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(O, a, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/classnames/index.js'),
					E = e.n(p),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/createImpressionObserver.ts');
				const x = { ResultTracker: () => (0, i.AH)({}) },
					A = (0, m.PA)((R) => {
						const L = (0, C.u)(),
							l = (0, g.v6)('resultTracker', L, {}, R),
							I = { impression: !0, click: !0 },
							{ children: U, result: h, track: W, controller: T, className: K, internalClassName: f, disableStyles: S, style: M } = l,
							v = { ...I, ...W },
							{ ref: y, inViewport: j } = (0, P.Q)();
						j && v.impression && T?.track.product.impression(h);
						const D = {};
						return (
							S ? M && (D.css = [M]) : (D.css = [x.ResultTracker(), M]),
							(0, s.Y)('div', {
								className: E()('ss__result-tracker', `ss__${T?.type}-result-tracker`, K, f),
								onClick: (N) => {
									v.click && T?.track.product.click(N, h);
								},
								ref: y,
								...D,
								children: U,
							})
						);
					});
				e.d(a, ['o', 0, A]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(O, a, e) {
				const s = (i) => i.replace(/([A-Z])/g, (m) => '-' + m.toLowerCase());
				e.d(a, ['b', 0, s]);
			},
			'./src/Templates/Stores/library/components/SearchCollapsible.ts'(O, a, e) {
				e.r(a), e.d(a, { SearchCollapsible: () => s.x });
				var s = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
			},
		},
	]);
})();
