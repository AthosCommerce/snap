'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6323],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(he, Z, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					F = e.n(p),
					$ = e('./components/src/providers/cache.tsx'),
					E = e('./components/src/providers/controller.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/withTracking.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					ee = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/types.ts'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = ({ width: T }) =>
						(0, N.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: T,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					H = (0, E.Bk)(
						(0, i.W)(
							(0, D.PA)((T) => {
								const z = (0, W.u)(),
									a = (0, c.LU)(),
									g = { layout: h.V.grid, width: 'auto', treePath: a },
									I = (0, ee.v6)('inlineBanner', z, g, T),
									{ banner: Y, className: x, internalClassName: w, disableA11y: q, layout: te, onClick: R } = I,
									{ overrideElement: j, shouldRenderDefault: ne } = (0, v._)('inlineBanner', I);
								if (!ne) return j;
								const re = (0, X.Z)(I, m);
								return Y && Y.value
									? (0, t.Y)($._, {
											children: (0, t.Y)('div', {
												onClick: (f) => {
													R && R(f, Y);
												},
												role: 'article',
												ref: (f) => {
													q || (0, O.iy)(f), T.trackingRef(f);
												},
												className: F()('ss__inline-banner', `ss__inline-banner--${te}`, x, w),
												...re,
												dangerouslySetInnerHTML: { __html: Y.value },
											}),
									  })
									: null;
							})
						)
					);
				e.d(Z, ['_', 0, H]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(he, Z, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					F = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					E = e.n($),
					W = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					c = e('./components/src/providers/cache.tsx'),
					ee = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					X = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					m = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					H = e('./components/src/types.ts'),
					T = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					z = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					a = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx'),
					I = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(I),
					x = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					q = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const te = () =>
						(0, F.AH)({
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
					R = (0, p.PA)((j) => {
						const ne = (0, ee.u)(),
							re = (0, X.LU)(),
							f = {
								layout: H.V.grid,
								treePath: re,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							n = (0, D.v6)('result', ne, f, j),
							{
								result: o,
								hideBadge: Q,
								hideTitle: s,
								hidePricing: J,
								hideImage: B,
								detailSlot: P,
								fallback: y,
								disableStyles: _,
								className: V,
								internalClassName: u,
								layout: U,
								onClick: G,
								controller: L,
								hideVariantSelections: le,
								hideAddToCartButton: S,
								onAddToCartClick: b,
								addToCartButtonText: _e,
								addToCartButtonSuccessText: se,
								addToCartButtonSuccessTimeout: ae,
								hideRating: ie,
								trackingRef: d,
								treePath: k,
							} = n,
							{ overrideElement: l, shouldRenderDefault: ue } = (0, w._)('result', {
								...n,
								customComponent: n.customComponent && n.customComponent !== 'Result' ? n.customComponent : void 0,
							});
						if (!ue) return l;
						const A = o?.display?.mappings.core || o?.mappings?.core,
							[de, ce] = (0, N.J0)(!1),
							K = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: k,
								},
								price: { internalClassName: 'ss__result__price', ...(0, h.s)({ disableStyles: _ }), theme: n.theme, treePath: k },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: o,
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: k,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: o,
									controller: L,
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: k,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: A?.name || '',
									src: A?.imageUrl || '',
									...(0, h.s)({ disableStyles: _, fallback: y }),
									theme: n.theme,
									treePath: k,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: A?.rating || 0,
									count: Number(A?.ratingCount || 0),
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: k,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (me) => {
										ce(!0), b && b(me, o), L?.addToCart([o]), setTimeout(() => ce(!1), ae);
									},
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: k,
								},
							};
						let Pe = A?.name;
						n.truncateTitle && (Pe = m.x(A?.name || '', n.truncateTitle.limit, n.truncateTitle.append));
						const Re = (0, v.Z)(n, te),
							Te = { addToCartButtonText: { value: de ? se : _e } },
							Ce = Y()(Te, n.lang || {}),
							ye = (0, x.u)(Ce, { result: o, controller: L }, { activeBreakpoint: ne?.activeBreakpoint }),
							Oe = !!(A?.msrp && A?.price && A?.price < A?.msrp),
							fe = L?.store?.config?.asyncState?.product?.price ? o.state.priceFetched : !0;
						return A
							? (0, t.Y)(c._, {
									children: (0, t.FD)('article', {
										...Re,
										className: E()('ss__result', `ss__result--${U}`, { 'ss__result--sale': Oe }, V, u),
										ref: d,
										children: [
											!B &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: A.url,
														onClick: (me) => {
															G && G(me);
														},
														children: Q
															? (0, t.Y)(W._, { ...K.image })
															: (0, t.Y)(z.Q, { ...K.overlayBadge, controller: L, children: (0, t.Y)(W._, { ...K.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Q && (0, t.Y)(T.W, { ...K.calloutBadge, controller: L }),
													!s &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: A.url,
																onClick: (me) => {
																	G && G(me);
																},
																dangerouslySetInnerHTML: { __html: Pe || '' },
															}),
														}),
													!ie && (0, t.Y)(a.G, { ...K.rating }),
													!J && fe && A.price && A.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: Oe
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(i.g, { ...K.price, value: A.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(i.g, { ...K.price, value: A.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(i.g, { ...K.price, value: A.price }),
														  })
														: null,
													(0, O.Y)(P, { result: o, treePath: k }),
													!le && o.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: o.variants?.selections.map((me) => (0, t.Y)(q.m, { ...K.variantSelection, type: me.type, selection: me })),
														  })
														: null,
													!S &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(g.$, { ...K.button, ...ye.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(Z, ['Q', 0, R]);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(he, Z, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					F = e('../../node_modules/classnames/index.js'),
					$ = e.n(F),
					E = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					ee = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(D);
				const m = ({ vertical: a, theme: g }) =>
						(0, p.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: a ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: g?.variables?.colors?.primary } },
								},
							},
						}),
					H = (a) => a?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					T = (a, g) => {
						if (a && g) {
							const I = a.match(H(g));
							if (g && a && I && typeof I.index == 'number') {
								const Y = a.slice(0, I.index),
									x = a.slice(I.index + g.length, a.length);
								return `${Y ? `<em>${Y}</em>` : ''}${g}${x ? `<em>${x}</em>` : ''}`;
							}
						}
						return `<em>${a}</em>`;
					},
					z = (0, N.PA)((a) => {
						const g = (0, W.u)(),
							Y = { vertical: !0, previewOnHover: !0, treePath: (0, i.LU)() },
							x = (0, ee.v6)('terms', g, Y, a),
							{ title: w, onTermClick: q, limit: te, previewOnHover: R, emIfy: j, className: ne, internalClassName: re, controller: f } = x,
							n = f?.store?.state?.input,
							o = x.terms,
							{ overrideElement: Q, shouldRenderDefault: s } = (0, h._)('terms', x);
						if (!s) return Q;
						const J = (0, X.Z)(x, m),
							B = (u, U) => {
								q && q(u, U), f?.setFocused && f?.setFocused();
							},
							P = te ? o?.slice(0, te) : o,
							y = { title: { value: w } },
							_ = v()(y, x.lang || {}),
							V = (0, O.u)({ title: _.title }, { controller: f }, { activeBreakpoint: g?.activeBreakpoint });
						return P?.length
							? (0, t.Y)(E._, {
									children: (0, t.FD)('div', {
										...J,
										className: $()('ss__terms', ne, re),
										children: [
											w ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...V.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': w,
												children: P?.map((u, U) => {
													const G = {
															term: {
																value: `${j ? T(u.value, n || '') : u.value}`,
																attributes: { 'aria-label': `${w || ''} item ${U + 1} of ${P.length}, ${u.value}` },
															},
														},
														L = v()(G, x.lang || {}),
														le = (0, O.u)(
															{ term: L.term },
															{ index: U, numberOfTerms: P.length, term: u },
															{ activeBreakpoint: g?.activeBreakpoint }
														);
													return (0, t.Y)('li', {
														className: $()('ss__terms__option', { 'ss__terms__option--active': u.active }),
														children: (0, t.Y)('a', {
															onClick: (S) => B(S, u),
															href: u.url.href,
															...(R ? (0, c.l)(u.preview) : {}),
															...le.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(Z, ['i', 0, z]);
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(he, Z, e) {
				e.d(Z, { h: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					F = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					E = e.n($),
					W = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(W),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					ee = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					X = e('./components/src/components/Organisms/Results/Results.tsx'),
					O = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					h = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					H = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/cache.tsx'),
					a = e('./components/src/types.ts'),
					g = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useA11y.tsx'),
					Y = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					x = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					w = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					q = e('./components/src/components/Atoms/Button/Button.tsx'),
					te = e('./components/src/providers/snap.tsx'),
					R = e('./components/src/hooks/useCreateController.tsx'),
					j = e('./components/src/hooks/useComponent.tsx');
				function ne(n) {
					let o, Q, s;
					const J = (0, te.uk)(),
						B = !!n?.recommendation?.enabled,
						P = B ? n?.recommendation?.component || 'RecommendationGrid' : void 0,
						y = B ? n?.recommendation?.resultComponent || 'Result' : void 0,
						_ = J?.templates?.library.import.component.recommendation.default || {},
						V = J?.templates?.library.import.component.result || {},
						{ ComponentOverride: u, shouldWaitForNamedOverride: U } = (0, j.x)(_, P),
						{ ComponentOverride: G, shouldWaitForNamedOverride: L } = (0, j.x)(V, y);
					if (B && ((o = U ? void 0 : u), (Q = L ? void 0 : G), J?.templates)) {
						const S = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, n.recommendation.config);
						(S.id = S.id || `search-${S.tag}`),
							(s = (0, R.i)(J, 'recommendation', S)),
							!s?.store?.loaded && !s?.store?.loading && s?.store.error?.type !== 'error' && s?.search();
					}
					return { RecommendationTemplateComponent: o, RecommendationTemplateResultComponent: Q, recsController: s };
				}
				const re = ({ controller: n, input: o, viewportMaxHeight: Q, width: s, theme: J, column1: B, column2: P, column3: y, column4: _ }) => {
						let V = 0;
						if (o) {
							let U;
							typeof o == 'string' ? (U = document.querySelector(o)) : (U = o), (V = U?.getBoundingClientRect()?.bottom || 0);
						}
						const u = !!(n.store.search?.query?.string && n.store.results.length === 0);
						return (0, F.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: B?.width == 'auto' ? '1 1 auto' : `1 0 ${B?.width}`,
								maxWidth: B?.width == 'auto' ? 'auto' : B?.width,
								alignContent: B?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: P?.width == 'auto' ? '1 1 auto' : `1 0 ${P?.width}`,
								maxWidth: P?.width == 'auto' ? 'auto' : P?.width,
								alignContent: P?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: y?.width == 'auto' ? '1 1 auto' : `1 0 ${y?.width}`,
								maxWidth: y?.width == 'auto' ? 'auto' : y?.width,
								alignContent: y?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: _?.width == 'auto' ? '1 1 auto' : `1 0 ${_?.width}`,
								maxWidth: _?.width == 'auto' ? 'auto' : _?.width,
								alignContent: _?.alignContent,
							},
							'.ss__autocomplete__column, .ss__autocomplete__row': { minWidth: 0 },
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							flexWrap: 'wrap',
							display: 'flex',
							flexDirection: 'row',
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							maxWidth: s,
							maxHeight: Q && V ? `calc(100vh - ${V + 10}px)` : void 0,
							overflowY: 'scroll',
							'.ss__autocomplete__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__autocomplete__column': { display: 'flex', flexDirection: 'column', flexFlow: 'wrap' },
							'.ss__autocomplete__column:empty, .ss__autocomplete__row:empty': { display: 'none' },
							'.ss__autocomplete__separator': { flexGrow: 1, flexShrink: 1 },
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'.ss__autocomplete__terms-wrapper': { background: '#f8f8f8', width: '100%' },
							'.ss__autocomplete__facets': {
								display: 'flex',
								width: 'auto',
								flexDirection: 'column',
								columnGap: '20px',
								padding: '10px',
								overflowY: 'auto',
								'.ss__facets': { display: 'flex', flexDirection: 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__facets-wrapper': { width: '100%' },
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: '1 1 0%',
								flexDirection: 'column',
								justifyContent: 'space-between',
								overflowY: 'auto',
								margin: u ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner': { 'iframe, img': { maxWidth: '100%', height: 'auto' } },
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: u ? 'center' : 'right',
								a: { fontWeight: 'bold', color: J?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					f = (0, p.PA)((n) => {
						const o = (0, T.u)(),
							Q = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let s = (0, D.v6)('autocompleteLayout', o, Q, n);
						delete s.treePath, s.layout == 'terms' && (s.templates = { recommendation: { enabled: !1 } });
						const J = (0, H.l)(),
							B = () => {
								d?.setFocused && d?.setFocused();
							},
							P = {
								components: {
									facet: { valueProps: J },
									facetGridOptions: { onClick: B },
									facetHierarchyOptions: { onClick: B },
									facetListOptions: { onClick: B },
									facetPaletteOptions: { onClick: B },
								},
							};
						if (o?.type !== 'templates') {
							const r = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								M = i().all([r, P, s?.theme || {}], { arrayMerge: (pe, C) => C });
							s = { ...s, theme: M };
						} else s.theme = i().all([P, s?.theme || {}], { arrayMerge: (r, M) => M });
						let y = s.input;
						y && typeof y == 'string' && (y = document.querySelector(y));
						const {
							facetsTitle: _,
							contentTitle: V,
							column1: u,
							column2: U,
							column3: G,
							column4: L,
							onReset: le,
							excludeBanners: S,
							resultComponent: b,
							templates: _e,
							disableStyles: se,
							className: ae,
							internalClassName: ie,
							controller: d,
						} = s;
						let k = s.layout;
						const l = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										d?.setFocused && d.setFocused(), (window.location.href = Ce.url.href);
									},
									name: 'see-more',
									...(0, v.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(s.layout == 'terms' || s.layout == 'mobile'),
									controller: d,
									...(0, v.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(s.layout == 'terms' || s.layout == 'mobile'),
									controller: d,
									...(0, v.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, v.s)({ disableStyles: se }), theme: s.theme, treePath: n.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, v.s)({ disableStyles: se }), theme: s.theme, treePath: n.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, v.s)({ disableStyles: se }), theme: s.theme, treePath: n.treePath },
								results: {
									columns: 3,
									rows: 2,
									excludeBanners: S,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: b,
									...(0, v.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, v.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
							},
							{
								search: ue,
								terms: A,
								trending: de,
								results: ce,
								merchandising: K,
								pagination: Pe,
								filters: Re,
								facets: Te,
								state: Ce,
								loading: ye,
								loaded: Oe,
							} = d.store,
							fe = d.store.history || [];
						d &&
							typeof y == 'string' &&
							((y = document.querySelector(y)),
							(0, N.vJ)(() => {
								d.bind();
							}, []));
						const me = y === Ce.focusedInput && (A.length > 0 || de?.length > 0 || fe?.length > 0 || (Ce.input && d.store.loaded)),
							Ae = () => !!(ce.length > 0 || Object.keys(K.content).length > 0 || ue?.query?.string || ye),
							[Be, Ie] = (0, N.J0)(Ae()),
							We = () => {
								const r = de?.filter((pe) => pe.active).pop(),
									M = fe?.filter((pe) => pe.active).pop();
								r || M || Ae() ? Ie(!0) : Ie(!1);
							};
						(0, N.vJ)(() => {
							We();
						}, [de, fe]);
						const Me = Te.length ? Te.filter((r) => r.display !== a.Q.SLIDER) : [];
						We();
						const Ue = (0, m.Z)(s, re),
							Ke = {
								contentTitle: { value: V },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: _ },
								noResultsText: {
									value: `<p>No results found for "${ue.originalQuery?.string || ue.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${Pe.totalResults} ${Re.length > 0 ? 'filtered' : ''} result${Pe.totalResults == 1 ? '' : 's'} for "${
										ue.query?.string
									}"`,
								},
							},
							xe = i()(Ke, s.lang || {}),
							ve = (0, g.u)(xe, { controller: d }, { activeBreakpoint: o?.activeBreakpoint });
						let Ee, De, Le;
						const Ne = !!(d.store.search?.query?.string && d.store.results.length === 0);
						if (_e?.recommendation?.enabled && Ne) {
							const r = ne(_e);
							(De = r.RecommendationTemplateComponent), (Le = r.RecommendationTemplateResultComponent), (Ee = r.recsController);
						}
						const ge = (r) => {
							if (typeof r != 'string') {
								const M = r?.map((C) => ge(C));
								return r.some((C, oe) => C !== '_' && M[oe]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: M }) : null;
							}
							if (r == 'c1' && u?.layout?.length) {
								const M = u.layout.map((C) => ge(C));
								return u.layout.some((C, oe) => (Array.isArray(C) || C !== '_') && !!M[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: M })
									: null;
							}
							if (r == 'c2' && U?.layout?.length) {
								const M = U.layout.map((C) => ge(C));
								return U.layout.some((C, oe) => (Array.isArray(C) || C !== '_') && !!M[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: M })
									: null;
							}
							if (r == 'c3' && G?.layout?.length) {
								const M = G.layout.map((C) => ge(C));
								return G.layout.some((C, oe) => (Array.isArray(C) || C !== '_') && !!M[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: M })
									: null;
							}
							if (r == 'c4' && L?.layout?.length) {
								const M = L.layout.map((C) => ge(C));
								return L.layout.some((C, oe) => (Array.isArray(C) || C !== '_') && !!M[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: M })
									: null;
							}
							if (r == 'termsList')
								return !A?.length && !fe?.length && !de?.length
									? null
									: (0, t.Y)('div', {
											className: E()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(Y.G, { controller: d, ...l.termsList }),
									  });
							if (r == 'terms.history')
								return fe?.length
									? (0, t.Y)(x.i, {
											controller: d,
											terms: d.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: d.config.settings?.history?.limit,
											...l.terms,
											title: 'History',
									  })
									: null;
							if (r == 'terms.trending')
								return de?.length
									? (0, t.Y)(x.i, {
											controller: d,
											terms: d.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: d.config.settings?.trending?.limit,
											...l.terms,
											title: 'Trending',
									  })
									: null;
							if (r == 'terms.suggestions')
								return A?.length
									? (0, t.Y)(x.i, {
											controller: d,
											terms: d.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...l.terms,
											title: 'Suggestions',
									  })
									: null;
							if (r == 'facets')
								return Me.length
									? (0, t.FD)('div', {
											className: E()('ss__autocomplete__facets-wrapper'),
											children: [
												_ || xe.facetsTitle.value
													? (0, t.Y)('div', {
															className: E()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ve.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(h.J, { ...l.facets, facets: Me }),
														S ? null : (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (r == 'facetsHorizontal')
								return Me.length
									? (0, t.FD)(t.FK, {
											children: [
												_ || xe.facetsTitle.value
													? (0, t.Y)('div', {
															className: E()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ve.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(w.b, { ...l.facetsHorizontal, facets: Me }),
														S ? null : (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (r == 'content' && Be)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length > 0 || Oe
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														S ? null : (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.HEADER, name: 'header' }),
														S ? null : (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.BANNER, name: 'banner' }),
														ce.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(V || xe.contentTitle.value) && ce.length > 0
																			? (0, t.Y)('div', {
																					className: E()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...ve.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(X.n, { results: ce, ...l.results, controller: d }),
																	],
															  })
															: Oe
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ve.noResultsText?.all }),
																		De && Ee?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(De, {
																						controller: Ee,
																						title: Ee.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Le,
																						name: 'noResultsRecommendations',
																						treePath: n.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														S ? null : (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (r == 'no-results' && Be)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length == 0 && !ye
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ve.noResultsText?.all }),
														De && Ee?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(De, {
																		controller: Ee,
																		title: Ee.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Le,
																		name: 'noResultsRecommendations',
																		treePath: n.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, t.Y)(t.FK, {}),
								});
							if (r == '_') return (0, t.Y)('div', { className: 'ss__autocomplete__separator' });
							if (r == 'banner.banner') return (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.BANNER, name: 'banner' });
							if (r == 'banner.footer') return (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.FOOTER, name: 'footer' });
							if (r == 'banner.header') return (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.HEADER, name: 'header' });
							if (r == 'banner.left') return (0, t.Y)(O.l, { ...l.banner, content: K.content, type: c.c.LEFT, name: 'left' });
							if (r == 'button.see-more' && Be && ue?.query?.string && ce.length > 0)
								return (0, t.FD)(q.$, {
									...l.button,
									...ve.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...ve.seeMoreButton.value }), (0, t.Y)(ee.I, { ...l.icon })],
								});
						};
						return (
							typeof s.layout == 'string' &&
								(s.layout === 'terms' && (k = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								s.layout === 'mobile' && (k = [['termsList'], ['content'], ['_', 'button.see-more']]),
								s.layout === 'tablet' && (k = [['c1', 'c3']]),
								s.layout === 'desktop' && (k = [['c1', 'c2', 'c3']])),
							typeof k == 'string' && (d.log.warn(`unsupported layout found. ${s.layout}`), (k = [])),
							me && k?.length
								? (0, t.Y)(z._, {
										children: (0, t.FD)('div', {
											...Ue,
											className: E()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': s.layout === 'terms' },
												{ 'ss__autocomplete--mobile': s.layout === 'mobile' },
												{ 'ss__autocomplete--desktop': s.layout === 'desktop' },
												{ 'ss__autocomplete--tablet': s.layout === 'tablet' },
												ae,
												ie
											),
											onClick: (r) => r.stopPropagation(),
											ref: (r) => (0, I.iy)(r, 0, !1, le),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (r) => (0, I.iy)(r),
													onClick: () => s.onReset && s.onReset(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...ve.closeButton?.all,
												}),
												k?.map((r) => ge(r)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(he, Z, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					F = e('../../node_modules/classnames/index.js'),
					$ = e.n(F),
					E = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(E),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					c = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					ee = e('./components/src/components/Molecules/Result/Result.tsx'),
					X = e('./components/src/types.ts'),
					O = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					H = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/withTracking.tsx'),
					z = e('./components/src/providers/snap.tsx'),
					a = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/hooks/useDisplaySettings.tsx'),
					I = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					Y = e('./components/src/hooks/useComponent.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = ({ gapSize: R, columns: j }) =>
						(0, N.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: R,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${j}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / j}% - (${j - 1} * ${R} / ${j} ) )`,
								marginRight: R,
								marginBottom: R,
								[`&:nth-of-type(${j}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${j})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					q = (0, T.W)(ee.Q),
					te = (0, p.PA)((R) => {
						const j = (0, H.u)(),
							ne = (0, z.uk)(),
							re = (0, a.LU)(),
							f = {
								0: { columns: R.columns || 1 },
								540: { columns: R.columns || 2 },
								768: { columns: R.columns || 3 },
								991: { columns: R.columns || 4 },
							},
							n = { results: R.controller?.store?.results, columns: 4, gapSize: '20px', layout: X.V.grid, breakpoints: f, treePath: re };
						let o = (0, D.v6)('results', j, n, R);
						if (!(R.theme?.type == 'templates' || j?.type == 'templates')) {
							const l = (0, g.X)(o?.breakpoints || {}),
								ue = W()(o?.theme || {}, l?.theme || {}, { arrayMerge: (A, de) => de });
							o = { ...o, ...l, theme: ue };
						}
						const { disableStyles: Q, className: s, internalClassName: J, layout: B, theme: P, excludeBanners: y, controller: _, treePath: V } = o,
							u = o.resultComponent,
							{ overrideElement: U, shouldRenderDefault: G } = (0, x._)('results', o);
						if (!G) return U;
						const L = typeof u == 'string',
							le = L ? u : '',
							S = ne?.templates?.library.import.component.result || {},
							{ ComponentOverride: b, shouldWaitForNamedOverride: _e } = (0, Y.x)(S, L ? le : void 0),
							se = L ? b : u,
							ae = {
								result: { internalClassName: 'ss__results__result', ...(0, h.s)({ disableStyles: Q }), theme: o?.theme, treePath: V },
								inlineBanner: {
									controller: _,
									internalClassName: 'ss__results__inline-banner',
									...(0, h.s)({ disableStyles: Q }),
									theme: o?.theme,
									treePath: V,
								},
							};
						let ie = y ? o.results?.filter((l) => l.type !== i.c.BANNER) : o.results;
						o?.columns && o?.rows && o.columns > 0 && o.rows > 0 && (ie = ie?.slice(0, o.columns * o.rows));
						const d = (0, v.Z)({ ...o, columns: B == X.V.list ? 1 : o.columns }, w),
							k = L ? W()(P || {}, { components: { result: { customComponent: u } } }) : P;
						return ie?.length
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										...d,
										className: $()('ss__results', `ss__results-${o.layout}`, s, J),
										children: ie.map((l) =>
											l.type === i.c.BANNER
												? (0, N.n)(c._, { ...ae.inlineBanner, key: l.id, banner: l, layout: o.layout })
												: _e
												? null
												: se && _
												? (0, t.Y)(I.o, {
														result: l,
														controller: _,
														children: (0, O.Y)(se, { key: l.id, controller: _, result: l, theme: k, treePath: V }),
												  })
												: (0, t.Y)(q, { ...ae.result, result: l, layout: o.layout, controller: _ }, l.id)
										),
									}),
							  })
							: null;
					});
				e.d(Z, ['n', 0, te]);
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(he, Z, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					F = e('../../node_modules/classnames/index.js'),
					$ = e.n(F),
					E = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ee = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const D = ({}) =>
						(0, p.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					v = (0, N.PA)((m) => {
						const H = (0, W.u)(),
							T = (0, i.LU)(),
							z = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: T,
							},
							a = (0, X.v6)('termsList', H, z, m),
							{
								layout: g,
								historyTitle: I,
								verticalOptions: Y,
								trendingTitle: x,
								suggestionTitle: w,
								retainHistory: q,
								retainTrending: te,
								treePath: R,
								disableStyles: j,
								className: ne,
								internalClassName: re,
								controller: f,
							} = a,
							{ overrideElement: n, shouldRenderDefault: o } = (0, c._)('termsList', a);
						if (!o) return n;
						const Q = { terms: { vertical: !!Y, ...(0, ee.s)({ disableStyles: j }), theme: a.theme, treePath: R } },
							s = (0, O.Z)(a, D),
							J = f?.store.history || [],
							B = f?.store.terms || [],
							P = f?.store.trending || [],
							y = P?.filter((b) => b.active).pop(),
							_ = J?.filter((b) => b.active).pop(),
							{ loaded: V, results: u, state: U } = f?.store;
						let G = !1;
						P?.length && ((te && V) || (!u.length && !U.input)) && (G = !0);
						let L = !1;
						J?.length && ((q && V) || (!u.length && !U.input)) && (L = !0),
							!f.store.state.input && (_ || y) && (J?.length && (L = !0), P?.length && (G = !0));
						const le = (b) => {
								if (typeof b != 'string') {
									const _e = b?.map((ae) => le(ae));
									return b?.some((ae, ie) => ae !== '_' && _e[ie]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: _e }) : null;
								}
								if (b == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (b == 'History' && L)
									return (0, t.Y)(h.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: I,
										terms: J,
										controller: f,
										name: 'history',
										limit: f.config.settings?.history?.limit,
										...Q.terms,
									});
								if (b == 'Trending' && G)
									return (0, t.Y)(h.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: x,
										terms: P,
										controller: f,
										name: 'trending',
										limit: f.config.settings?.trending?.limit,
										...Q.terms,
									});
								if (b == 'Suggestions')
									return B.length
										? (0, t.Y)(h.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: w,
												terms: B,
												controller: f,
												name: 'suggestions',
												...Q.terms,
										  })
										: null;
							},
							S = g?.map((b) => le(b));
						return S?.some(Boolean)
							? (0, t.Y)(E._, { children: (0, t.Y)('div', { ...s, className: $()('ss__terms-list', ne, re), children: S }) })
							: null;
					});
				e.d(Z, ['G', 0, v]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(he, Z, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					F = e('../../node_modules/classnames/index.js'),
					$ = e.n(F),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const c = { ResultTracker: () => (0, N.AH)({}) },
					ee = (0, p.PA)((X) => {
						const O = (0, E.u)(),
							h = (0, W.v6)('resultTracker', O, {}, X),
							D = { impression: !0, click: !0 },
							{ children: v, result: m, track: H, controller: T, className: z, internalClassName: a, disableStyles: g, style: I } = h,
							Y = { ...D, ...H },
							{ ref: x, inViewport: w } = (0, i.Q)();
						w && Y.impression && T?.track.product.impression(m);
						const q = {};
						return (
							g ? I && (q.css = [I]) : (q.css = [c.ResultTracker(), I]),
							(0, t.Y)('div', {
								className: $()('ss__result-tracker', `ss__${T?.type}-result-tracker`, z, a),
								onClick: (te) => {
									Y.click && T?.track.product.click(te, m);
								},
								ref: x,
								...q,
								children: v,
							})
						);
					});
				e.d(Z, ['o', 0, ee]);
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(he, Z, e) {
				e.d(Z, { x: () => N });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function N({ input: p, controller: F, renderInput: $, buttonSelector: E, renderedInputRef: W, setActive: i }) {
					const [c, ee] = (0, t.J0)(p),
						[X, O] = (0, t.J0)(!1),
						h = () => {
							i && i(!0),
								setTimeout(async () => {
									X ||
										(ee(W.current),
										(F.config.selector = `${F.config.selector}, .autocomplete__search-input input`),
										await F.bind(),
										W?.current?.focus()),
										O(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							let D = !1;
							const v = () => {
								D = !1;
							};
							if ($ && E) {
								let m;
								if ((typeof E == 'string' ? (m = document.querySelector(E)) : (m = E), m)) {
									const H = () => {
											D = !0;
										},
										T = (g) => {
											(D = !1), g.stopPropagation(), h();
										},
										z = () => {
											D || h();
										},
										a = () => h();
									return (
										m.addEventListener('mousedown', H),
										document.addEventListener('mouseup', v, !0),
										m.addEventListener('click', T),
										m.addEventListener('focus', z),
										m.addEventListener('select', a),
										() => {
											m.removeEventListener('mousedown', H),
												document.removeEventListener('mouseup', v, !0),
												m.removeEventListener('click', T),
												m.removeEventListener('focus', z),
												m.removeEventListener('select', a);
										}
									);
								}
							} else if (i) {
								const m = () => {
										D = !0;
									},
									H = (a) => {
										(D = !1), a.stopPropagation(), i(!0);
									},
									T = () => {
										D || i(!0);
									},
									z = () => i(!0);
								return (
									p.addEventListener('mousedown', m),
									document.addEventListener('mouseup', v, !0),
									p.addEventListener('click', H),
									p.addEventListener('focus', T),
									p.addEventListener('select', z),
									() => {
										p.removeEventListener('mousedown', m),
											document.removeEventListener('mouseup', v, !0),
											p.removeEventListener('click', H),
											p.removeEventListener('focus', T),
											p.removeEventListener('select', z);
									}
								);
							}
						}, []),
						(0, t.vJ)(() => {
							if (p !== c && c) {
								const D = () => {
									p.value = c.value;
								};
								return (
									c.addEventListener('input', D),
									() => {
										c.removeEventListener('input', D);
									}
								);
							}
						}, [c]),
						c
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(he, Z, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const N = (p, F, $) => {
					const [E, W] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							p.getController($.id)
								.then((i) => {
									W(i);
								})
								.catch(() => {
									p.createController(F, $).then((i) => {
										W(i);
									});
								});
						}, []),
						E
					);
				};
				e.d(Z, ['i', 0, N]);
			},
		},
	]);
})();
