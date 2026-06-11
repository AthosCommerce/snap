'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[307],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(O, l, e) {
				e.d(l, { Q: () => Q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					B = e.n(h),
					C = e('./components/src/components/Atoms/Image/Image.tsx'),
					u = e('./components/src/components/Atoms/Price/Price.tsx'),
					A = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/utilities/cloneWithProps.tsx'),
					r = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					U = e('./components/src/types.ts'),
					E = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					W = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					K = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					S = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(p),
					y = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					P = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const j = () =>
						(0, v.AH)({
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
					Q = (0, d.PA)(($) => {
						const z = (0, x.u)(),
							Z = (0, R.LU)(),
							G = {
								layout: U.V.grid,
								treePath: Z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							o = (0, I.v6)('result', z, G, $),
							{
								result: n,
								hideBadge: Y,
								hideTitle: J,
								hidePricing: b,
								hideImage: X,
								detailSlot: w,
								fallback: q,
								disableStyles: c,
								className: ee,
								internalClassName: se,
								layout: te,
								onClick: D,
								controller: T,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: V,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: le,
								hideRating: _e,
								trackingRef: ie,
								treePath: _,
							} = o,
							{ overrideElement: ce, shouldRenderDefault: me } = (0, N._)('result', {
								...o,
								customComponent: o.customComponent && o.customComponent !== 'Result' ? o.customComponent : void 0,
							});
						if (!me) return ce;
						const t = n?.display?.mappings.core || n?.mappings?.core,
							[de, k] = (0, m.J0)(!1),
							a = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, r.s)({ disableStyles: c }),
									theme: o.theme,
									treePath: _,
								},
								price: { internalClassName: 'ss__result__price', ...(0, r.s)({ disableStyles: c }), theme: o.theme, treePath: _ },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: n,
									...(0, r.s)({ disableStyles: c }),
									theme: o.theme,
									treePath: _,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: n,
									controller: T,
									...(0, r.s)({ disableStyles: c }),
									theme: o.theme,
									treePath: _,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: t?.name || '',
									src: t?.imageUrl || '',
									...(0, r.s)({ disableStyles: c, fallback: q }),
									theme: o.theme,
									treePath: _,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: t?.rating || 0,
									count: Number(t?.ratingCount || 0),
									...(0, r.s)({ disableStyles: c }),
									theme: o.theme,
									treePath: _,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (i) => {
										k(!0), V && V(i, n), T?.addToCart([n]), setTimeout(() => k(!1), le);
									},
									...(0, r.s)({ disableStyles: c }),
									theme: o.theme,
									treePath: _,
								},
							};
						let F = t?.name;
						o.truncateTitle && (F = g.x(t?.name || '', o.truncateTitle.limit, o.truncateTitle.append));
						const ue = (0, f.Z)(o, j),
							Ee = { addToCartButtonText: { value: de ? re : ae } },
							pe = M()(Ee, o.lang || {}),
							Pe = (0, y.u)(pe, { result: n, controller: T }),
							H = !!(t?.msrp && t?.price && t?.price < t?.msrp);
						return t
							? (0, s.Y)(A._, {
									children: (0, s.FD)('article', {
										...ue,
										className: B()('ss__result', `ss__result--${te}`, { 'ss__result--sale': H }, ee, se),
										ref: ie,
										children: [
											!X &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: t.url,
														onClick: (i) => {
															D && D(i);
														},
														children: Y
															? (0, s.Y)(C._, { ...a.image })
															: (0, s.Y)(W.Q, { ...a.overlayBadge, controller: T, children: (0, s.Y)(C._, { ...a.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Y && (0, s.Y)(E.W, { ...a.calloutBadge, controller: T }),
													!J &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: t.url,
																onClick: (i) => {
																	D && D(i);
																},
																dangerouslySetInnerHTML: { __html: F || '' },
															}),
														}),
													!_e && (0, s.Y)(K.G, { ...a.rating }),
													!b && t.price && t.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: H
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(u.g, { ...a.price, value: t.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(u.g, { ...a.price, value: t.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(u.g, { ...a.price, value: t.price }),
														  })
														: null,
													(0, L.Y)(w, { result: n, treePath: _ }),
													!oe && n.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: n.variants?.selections.map((i) => (0, s.Y)(P.m, { ...a.variantSelection, type: i.type, selection: i })),
														  })
														: null,
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(S.$, { ...a.button, ...Pe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(O, l, e) {
				e.d(l, { o: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/classnames/index.js'),
					h = e.n(v),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/createImpressionObserver.ts');
				const A = { ResultTracker: () => (0, m.AH)({}) },
					x = (0, d.PA)((R) => {
						const L = (0, B.u)(),
							r = (0, C.v6)('resultTracker', L, {}, R),
							I = { impression: !0, click: !0 },
							{ children: f, result: g, track: U, controller: E, className: W, internalClassName: K, disableStyles: S, style: p } = r,
							M = { ...I, ...U },
							{ ref: y, inViewport: N } = (0, u.Q)();
						N && M.impression && E?.track.product.impression(g);
						const P = {};
						return (
							S ? p && (P.css = [p]) : (P.css = [A.ResultTracker(), p]),
							(0, s.Y)('div', {
								className: h()('ss__result-tracker', `ss__${E?.type}-result-tracker`, W, K),
								onClick: (j) => {
									M.click && E?.track.product.click(j, g);
								},
								ref: y,
								...P,
								children: f,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(O, l, e) {
				e.d(l, { b: () => s });
				const s = (m) => m.replace(/([A-Z])/g, (d) => '-' + d.toLowerCase());
			},
			'./src/Templates/Stores/library/components/Search.ts'(O, l, e) {
				e.r(l), e.d(l, { Search: () => s.v });
				var s = e('./components/src/components/Templates/Search/Search.tsx');
			},
		},
	]);
})();
