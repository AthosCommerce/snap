'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6323],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(de, w, e) {
				e.d(w, { _: () => z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					$ = e.n(d),
					H = e('./components/src/providers/cache.tsx'),
					v = e('./components/src/providers/controller.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/withTracking.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					ee = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/types.ts'),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = ({ width: O }) =>
						(0, N.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: O,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					z = (0, v.Bk)(
						(0, i.W)(
							(0, C.PA)((O) => {
								const J = (0, Y.u)(),
									l = (0, c.LU)(),
									x = { layout: h.V.grid, width: 'auto', treePath: l },
									A = (0, ee.v6)('inlineBanner', J, x, O),
									{ banner: j, className: R, internalClassName: X, disableA11y: q, layout: te, onClick: B } = A,
									{ overrideElement: S, shouldRenderDefault: re } = (0, E._)('inlineBanner', A);
								if (!re) return S;
								const le = (0, k.Z)(A, m);
								return j && j.value
									? (0, t.Y)(H._, {
											children: (0, t.Y)('div', {
												onClick: (f) => {
													B && B(f, j);
												},
												role: 'article',
												ref: (f) => {
													q || (0, P.iy)(f), O.trackingRef(f);
												},
												className: $()('ss__inline-banner', `ss__inline-banner--${te}`, R, X),
												...le,
												dangerouslySetInnerHTML: { __html: j.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(de, w, e) {
				e.d(w, { Q: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					H = e('../../node_modules/classnames/index.js'),
					v = e.n(H),
					Y = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					c = e('./components/src/providers/cache.tsx'),
					ee = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					k = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					m = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					z = e('./components/src/types.ts'),
					O = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					J = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					l = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					x = e('./components/src/components/Atoms/Button/Button.tsx'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(A),
					R = e('./components/src/hooks/useLang.tsx'),
					X = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					q = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const te = () =>
						(0, $.AH)({
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
					B = (0, d.PA)((S) => {
						const re = (0, ee.u)(),
							le = (0, k.LU)(),
							f = {
								layout: z.V.grid,
								treePath: le,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							n = (0, C.v6)('result', re, f, S),
							{
								result: o,
								hideBadge: Z,
								hideTitle: s,
								hidePricing: V,
								hideImage: L,
								detailSlot: D,
								fallback: T,
								disableStyles: _,
								className: G,
								internalClassName: p,
								layout: W,
								onClick: Q,
								controller: U,
								hideVariantSelections: ae,
								hideAddToCartButton: b,
								onAddToCartClick: F,
								addToCartButtonText: _e,
								addToCartButtonSuccessText: se,
								addToCartButtonSuccessTimeout: ie,
								hideRating: ce,
								trackingRef: u,
								treePath: a,
							} = n,
							{ overrideElement: I, shouldRenderDefault: pe } = (0, X._)('result', {
								...n,
								customComponent: n.customComponent && n.customComponent !== 'Result' ? n.customComponent : void 0,
							});
						if (!pe) return I;
						const M = o?.display?.mappings.core || o?.mappings?.core,
							[Ee, me] = (0, N.J0)(!1),
							K = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: a,
								},
								price: { internalClassName: 'ss__result__price', ...(0, h.s)({ disableStyles: _ }), theme: n.theme, treePath: a },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: o,
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: a,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: o,
									controller: U,
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: a,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: M?.name || '',
									src: M?.imageUrl || '',
									...(0, h.s)({ disableStyles: _, fallback: T }),
									theme: n.theme,
									treePath: a,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: M?.rating || 0,
									count: Number(M?.ratingCount || 0),
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: a,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (oe) => {
										me(!0), F && F(oe, o), U?.addToCart([o]), setTimeout(() => me(!1), ie);
									},
									...(0, h.s)({ disableStyles: _ }),
									theme: n.theme,
									treePath: a,
								},
							};
						let ge = M?.name;
						n.truncateTitle && (ge = m.x(M?.name || '', n.truncateTitle.limit, n.truncateTitle.append));
						const xe = (0, E.Z)(n, te),
							De = { addToCartButtonText: { value: Ee ? se : _e } },
							Pe = j()(De, n.lang || {}),
							Te = (0, R.u)(Pe, { result: o, controller: U }),
							Ce = !!(M?.msrp && M?.price && M?.price < M?.msrp);
						return M
							? (0, t.Y)(c._, {
									children: (0, t.FD)('article', {
										...xe,
										className: v()('ss__result', `ss__result--${W}`, { 'ss__result--sale': Ce }, G, p),
										ref: u,
										children: [
											!L &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: M.url,
														onClick: (oe) => {
															Q && Q(oe);
														},
														children: Z
															? (0, t.Y)(Y._, { ...K.image })
															: (0, t.Y)(J.Q, { ...K.overlayBadge, controller: U, children: (0, t.Y)(Y._, { ...K.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Z && (0, t.Y)(O.W, { ...K.calloutBadge, controller: U }),
													!s &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: M.url,
																onClick: (oe) => {
																	Q && Q(oe);
																},
																dangerouslySetInnerHTML: { __html: ge || '' },
															}),
														}),
													!ce && (0, t.Y)(l.G, { ...K.rating }),
													!V && M.price && M.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: Ce
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(i.g, { ...K.price, value: M.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(i.g, { ...K.price, value: M.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(i.g, { ...K.price, value: M.price }),
														  })
														: null,
													(0, P.Y)(D, { result: o, treePath: a }),
													!ae && o.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: o.variants?.selections.map((oe) => (0, t.Y)(q.m, { ...K.variantSelection, type: oe.type, selection: oe })),
														  })
														: null,
													!b &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(x.$, { ...K.button, ...Te.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(de, w, e) {
				e.d(w, { i: () => J });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					H = e.n($),
					v = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					ee = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(C);
				const m = ({ vertical: l, theme: x }) =>
						(0, d.AH)({
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
								flexDirection: l ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: x?.variables?.colors?.primary } },
								},
							},
						}),
					z = (l) => l?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					O = (l, x) => {
						if (l && x) {
							const A = l.match(z(x));
							if (x && l && A && typeof A.index == 'number') {
								const j = l.slice(0, A.index),
									R = l.slice(A.index + x.length, l.length);
								return `${j ? `<em>${j}</em>` : ''}${x}${R ? `<em>${R}</em>` : ''}`;
							}
						}
						return `<em>${l}</em>`;
					},
					J = (0, N.PA)((l) => {
						const x = (0, Y.u)(),
							j = { vertical: !0, previewOnHover: !0, treePath: (0, i.LU)() },
							R = (0, ee.v6)('terms', x, j, l),
							{ title: X, onTermClick: q, limit: te, previewOnHover: B, emIfy: S, className: re, internalClassName: le, controller: f } = R,
							n = f?.store?.state?.input,
							o = R.terms,
							{ overrideElement: Z, shouldRenderDefault: s } = (0, h._)('terms', R);
						if (!s) return Z;
						const V = (0, k.Z)(R, m),
							L = (p, W) => {
								q && q(p, W), f?.setFocused && f?.setFocused();
							},
							D = te ? o?.slice(0, te) : o,
							T = { title: { value: X } },
							_ = E()(T, R.lang || {}),
							G = (0, P.u)({ title: _.title }, { controller: f });
						return D?.length
							? (0, t.Y)(v._, {
									children: (0, t.FD)('div', {
										...V,
										className: H()('ss__terms', re, le),
										children: [
											X ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...G.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': X,
												children: D?.map((p, W) => {
													const Q = {
															term: {
																value: `${S ? O(p.value, n || '') : p.value}`,
																attributes: { 'aria-label': `${X || ''} item ${W + 1} of ${D.length}, ${p.value}` },
															},
														},
														U = E()(Q, R.lang || {}),
														ae = (0, P.u)({ term: U.term }, { index: W, numberOfTerms: D.length, term: p });
													return (0, t.Y)('li', {
														className: H()('ss__terms__option', { 'ss__terms__option--active': p.active }),
														children: (0, t.Y)('a', {
															onClick: (b) => L(b, p),
															href: p.url.href,
															...(B ? (0, c.l)(p.preview) : {}),
															...ae.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(de, w, e) {
				e.d(w, { h: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					H = e('../../node_modules/classnames/index.js'),
					v = e.n(H),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(Y),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					ee = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/components/Organisms/Results/Results.tsx'),
					P = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					h = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					C = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					z = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					J = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/types.ts'),
					x = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/hooks/useA11y.tsx'),
					j = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					R = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					X = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					q = e('./components/src/components/Atoms/Button/Button.tsx'),
					te = e('./components/src/providers/snap.tsx'),
					B = e('./components/src/hooks/useCreateController.tsx'),
					S = e('./components/src/hooks/useComponent.tsx');
				function re(n) {
					let o, Z, s;
					const V = (0, te.uk)(),
						L = !!n?.recommendation?.enabled,
						D = L ? n?.recommendation?.component || 'RecommendationGrid' : void 0,
						T = L ? n?.recommendation?.resultComponent || 'Result' : void 0,
						_ = V?.templates?.library.import.component.recommendation.default || {},
						G = V?.templates?.library.import.component.result || {},
						{ ComponentOverride: p, shouldWaitForNamedOverride: W } = (0, S.x)(_, D),
						{ ComponentOverride: Q, shouldWaitForNamedOverride: U } = (0, S.x)(G, T);
					if (L && ((o = W ? void 0 : p), (Z = U ? void 0 : Q), V?.templates)) {
						const b = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, n.recommendation.config);
						(b.id = b.id || `search-${b.tag}`),
							(s = (0, B.i)(V, 'recommendation', b)),
							!s?.store?.loaded && !s?.store?.loading && s?.store.error?.type !== 'error' && s?.search();
					}
					return { RecommendationTemplateComponent: o, RecommendationTemplateResultComponent: Z, recsController: s };
				}
				const le = ({ controller: n, input: o, viewportMaxHeight: Z, width: s, theme: V, column1: L, column2: D, column3: T, column4: _ }) => {
						let G = 0;
						if (o) {
							let W;
							typeof o == 'string' ? (W = document.querySelector(o)) : (W = o), (G = W?.getBoundingClientRect()?.bottom || 0);
						}
						const p = !!(n.store.search?.query?.string && n.store.results.length === 0);
						return (0, $.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: L?.width == 'auto' ? '1 1 auto' : `1 0 ${L?.width}`,
								maxWidth: L?.width == 'auto' ? 'auto' : L?.width,
								alignContent: L?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: D?.width == 'auto' ? '1 1 auto' : `1 0 ${D?.width}`,
								maxWidth: D?.width == 'auto' ? 'auto' : D?.width,
								alignContent: D?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: T?.width == 'auto' ? '1 1 auto' : `1 0 ${T?.width}`,
								maxWidth: T?.width == 'auto' ? 'auto' : T?.width,
								alignContent: T?.alignContent,
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
							maxHeight: Z && G ? `calc(100vh - ${G + 10}px)` : void 0,
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
								margin: p ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: p ? 'center' : 'right',
								a: { fontWeight: 'bold', color: V?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					f = (0, d.PA)((n) => {
						const o = (0, O.u)(),
							Z = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let s = (0, C.v6)('autocompleteLayout', o, Z, n);
						delete s.treePath, s.layout == 'terms' && (s.templates = { recommendation: { enabled: !1 } });
						const V = (0, z.l)(),
							L = () => {
								u?.setFocused && u?.setFocused();
							},
							D = {
								components: {
									facet: { valueProps: V },
									facetGridOptions: { onClick: L },
									facetHierarchyOptions: { onClick: L },
									facetListOptions: { onClick: L },
									facetPaletteOptions: { onClick: L },
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
								y = i().all([r, D, s?.theme || {}], { arrayMerge: (ue, g) => g });
							s = { ...s, theme: y };
						} else s.theme = i().all([D, s?.theme || {}], { arrayMerge: (r, y) => y });
						let T = s.input;
						T && typeof T == 'string' && (T = document.querySelector(T));
						const {
							facetsTitle: _,
							contentTitle: G,
							column1: p,
							column2: W,
							column3: Q,
							column4: U,
							onReset: ae,
							excludeBanners: b,
							resultComponent: F,
							templates: _e,
							disableStyles: se,
							className: ie,
							internalClassName: ce,
							controller: u,
						} = s;
						let a = s.layout;
						const I = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										u?.setFocused && u.setFocused(), (window.location.href = Pe.url.href);
									},
									name: 'see-more',
									...(0, E.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(s.layout == 'terms' || s.layout == 'mobile'),
									controller: u,
									...(0, E.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(s.layout == 'terms' || s.layout == 'mobile'),
									controller: u,
									...(0, E.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, E.s)({ disableStyles: se }), theme: s.theme, treePath: n.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, E.s)({ disableStyles: se }), theme: s.theme, treePath: n.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, E.s)({ disableStyles: se }), theme: s.theme, treePath: n.treePath },
								results: {
									columns: 3,
									rows: 2,
									excludeBanners: b,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: F,
									...(0, E.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, E.s)({ disableStyles: se }),
									theme: s.theme,
									treePath: n.treePath,
								},
							},
							{
								search: pe,
								terms: M,
								trending: Ee,
								results: me,
								merchandising: K,
								pagination: ge,
								filters: xe,
								facets: De,
								state: Pe,
								loading: Te,
								loaded: Ce,
							} = u.store,
							oe = u.store.history || [];
						u &&
							typeof T == 'string' &&
							((T = document.querySelector(T)),
							(0, N.vJ)(() => {
								u.bind();
							}, []));
						const We = T === Pe.focusedInput && (M.length > 0 || Ee?.length > 0 || oe?.length > 0 || (Pe.input && u.store.loaded)),
							Le = () => !!(me.length > 0 || Object.keys(K.content).length > 0 || pe?.query?.string || Te),
							[Re, Ae] = (0, N.J0)(Le()),
							Ie = () => {
								const r = Ee?.filter((ue) => ue.active).pop(),
									y = oe?.filter((ue) => ue.active).pop();
								r || y || Le() ? Ae(!0) : Ae(!1);
							};
						(0, N.vJ)(() => {
							Ie();
						}, [Ee, oe]);
						const Me = De.length ? De.filter((r) => r.display !== l.Q.SLIDER) : [];
						Ie();
						const Ue = (0, m.Z)(s, le),
							Ke = {
								contentTitle: { value: G },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: _ },
								noResultsText: {
									value: `<p>No results found for "${pe.originalQuery?.string || pe.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${ge.totalResults} ${xe.length > 0 ? 'filtered' : ''} result${ge.totalResults == 1 ? '' : 's'} for "${
										pe.query?.string
									}"`,
								},
							},
							ye = i()(Ke, s.lang || {}),
							he = (0, x.u)(ye, { controller: u });
						let fe, Oe, Be;
						const Ne = !!(u.store.search?.query?.string && u.store.results.length === 0);
						if (_e?.recommendation?.enabled && Ne) {
							const r = re(_e);
							(Oe = r.RecommendationTemplateComponent), (Be = r.RecommendationTemplateResultComponent), (fe = r.recsController);
						}
						const ve = (r) => {
							if (typeof r != 'string') {
								const y = r?.map((g) => ve(g));
								return r.some((g, ne) => g !== '_' && y[ne]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: y }) : null;
							}
							if (r == 'c1' && p?.layout?.length) {
								const y = p.layout.map((g) => ve(g));
								return p.layout.some((g, ne) => (Array.isArray(g) || g !== '_') && !!y[ne])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: y })
									: null;
							}
							if (r == 'c2' && W?.layout?.length) {
								const y = W.layout.map((g) => ve(g));
								return W.layout.some((g, ne) => (Array.isArray(g) || g !== '_') && !!y[ne])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: y })
									: null;
							}
							if (r == 'c3' && Q?.layout?.length) {
								const y = Q.layout.map((g) => ve(g));
								return Q.layout.some((g, ne) => (Array.isArray(g) || g !== '_') && !!y[ne])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: y })
									: null;
							}
							if (r == 'c4' && U?.layout?.length) {
								const y = U.layout.map((g) => ve(g));
								return U.layout.some((g, ne) => (Array.isArray(g) || g !== '_') && !!y[ne])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: y })
									: null;
							}
							if (r == 'termsList')
								return !M?.length && !oe?.length && !Ee?.length
									? null
									: (0, t.Y)('div', {
											className: v()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(j.G, { controller: u, ...I.termsList }),
									  });
							if (r == 'terms.history')
								return oe?.length
									? (0, t.Y)(R.i, {
											controller: u,
											terms: u.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: u.config.settings?.history?.limit,
											...I.terms,
											title: 'History',
									  })
									: null;
							if (r == 'terms.trending')
								return Ee?.length
									? (0, t.Y)(R.i, {
											controller: u,
											terms: u.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: u.config.settings?.trending?.limit,
											...I.terms,
											title: 'Trending',
									  })
									: null;
							if (r == 'terms.suggestions')
								return M?.length
									? (0, t.Y)(R.i, {
											controller: u,
											terms: u.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...I.terms,
											title: 'Suggestions',
									  })
									: null;
							if (r == 'facets')
								return Me.length
									? (0, t.FD)('div', {
											className: v()('ss__autocomplete__facets-wrapper'),
											children: [
												_ || ye.facetsTitle.value
													? (0, t.Y)('div', {
															className: v()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...he.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(h.J, { ...I.facets, facets: Me }),
														b ? null : (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (r == 'facetsHorizontal')
								return Me.length
									? (0, t.FD)(t.FK, {
											children: [
												_ || ye.facetsTitle.value
													? (0, t.Y)('div', {
															className: v()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...he.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(X.b, { ...I.facetsHorizontal, facets: Me }),
														b ? null : (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (r == 'content' && Re)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										me.length > 0 || Ce
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														b ? null : (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.HEADER, name: 'header' }),
														b ? null : (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.BANNER, name: 'banner' }),
														me.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(G || ye.contentTitle.value) && me.length > 0
																			? (0, t.Y)('div', {
																					className: v()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...he.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(k.n, { results: me, ...I.results, controller: u }),
																	],
															  })
															: Ce
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...he.noResultsText?.all }),
																		Oe && fe?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(Oe, {
																						controller: fe,
																						title: fe.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Be,
																						name: 'noResultsRecommendations',
																						treePath: n.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														b ? null : (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (r == 'no-results' && Re)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										me.length == 0 && !Te
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...he.noResultsText?.all }),
														Oe && fe?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(Oe, {
																		controller: fe,
																		title: fe.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Be,
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
							if (r == 'banner.banner') return (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.BANNER, name: 'banner' });
							if (r == 'banner.footer') return (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.FOOTER, name: 'footer' });
							if (r == 'banner.header') return (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.HEADER, name: 'header' });
							if (r == 'banner.left') return (0, t.Y)(P.l, { ...I.banner, content: K.content, type: c.c.LEFT, name: 'left' });
							if (r == 'button.see-more' && Re && pe?.query?.string && me.length > 0)
								return (0, t.FD)(q.$, {
									...I.button,
									...he.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...he.seeMoreButton.value }), (0, t.Y)(ee.I, { ...I.icon })],
								});
						};
						return (
							typeof s.layout == 'string' &&
								(s.layout === 'terms' && (a = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								s.layout === 'mobile' && (a = [['termsList'], ['content'], ['_', 'button.see-more']]),
								s.layout === 'tablet' && (a = [['c1', 'c3']]),
								s.layout === 'desktop' && (a = [['c1', 'c2', 'c3']])),
							typeof a == 'string' && (u.log.warn(`unsupported layout found. ${s.layout}`), (a = [])),
							We && a?.length
								? (0, t.Y)(J._, {
										children: (0, t.FD)('div', {
											...Ue,
											className: v()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': s.layout === 'terms' },
												{ 'ss__autocomplete--mobile': s.layout === 'mobile' },
												{ 'ss__autocomplete--desktop': s.layout === 'desktop' },
												{ 'ss__autocomplete--tablet': s.layout === 'tablet' },
												ie,
												ce
											),
											onClick: (r) => r.stopPropagation(),
											ref: (r) => (0, A.iy)(r, 0, !1, ae),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (r) => (0, A.iy)(r),
													onClick: () => s.onReset && s.onReset(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...he.closeButton?.all,
												}),
												a?.map((r) => ve(r)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(de, w, e) {
				e.d(w, { n: () => te });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('../../node_modules/classnames/index.js'),
					H = e.n($),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(v),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					c = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					ee = e('./components/src/components/Molecules/Result/Result.tsx'),
					k = e('./components/src/types.ts'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/withTracking.tsx'),
					J = e('./components/src/providers/snap.tsx'),
					l = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					A = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const X = ({ gapSize: B, columns: S }) =>
						(0, N.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: B,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${S}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / S}% - (${S - 1} * ${B} / ${S} ) )`,
								marginRight: B,
								marginBottom: B,
								[`&:nth-of-type(${S}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${S})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					q = (0, O.W)(ee.Q),
					te = (0, d.PA)((B) => {
						const S = (0, z.u)(),
							re = (0, J.uk)(),
							le = (0, l.LU)(),
							f = {
								0: { columns: B.columns || 1 },
								540: { columns: B.columns || 2 },
								768: { columns: B.columns || 3 },
								991: { columns: B.columns || 4 },
							},
							n = { results: B.controller?.store?.results, columns: 4, gapSize: '20px', layout: k.V.grid, breakpoints: f, treePath: le };
						let o = (0, C.v6)('results', S, n, B);
						if (!(B.theme?.type == 'templates' || S?.type == 'templates')) {
							const a = (0, x.X)(o?.breakpoints || {}),
								I = Y()(o?.theme || {}, a?.theme || {}, { arrayMerge: (pe, M) => M });
							o = { ...o, ...a, theme: I };
						}
						const { disableStyles: Z, className: s, internalClassName: V, layout: L, theme: D, excludeBanners: T, controller: _, treePath: G } = o,
							p = o.resultComponent,
							{ overrideElement: W, shouldRenderDefault: Q } = (0, R._)('results', o);
						if (!Q) return W;
						const U = typeof p == 'string',
							ae = U ? p : '',
							b = re?.templates?.library.import.component.result || {},
							{ ComponentOverride: F, shouldWaitForNamedOverride: _e } = (0, j.x)(b, U ? ae : void 0),
							se = U ? F : p,
							ie = {
								result: { internalClassName: 'ss__results__result', ...(0, h.s)({ disableStyles: Z }), theme: o?.theme, treePath: G },
								inlineBanner: {
									controller: _,
									internalClassName: 'ss__results__inline-banner',
									...(0, h.s)({ disableStyles: Z }),
									theme: o?.theme,
									treePath: G,
								},
							};
						let ce = T ? o.results?.filter((a) => a.type !== i.c.BANNER) : o.results;
						o?.columns && o?.rows && o.columns > 0 && o.rows > 0 && (ce = ce?.slice(0, o.columns * o.rows));
						const u = (0, E.Z)({ ...o, columns: L == k.V.list ? 1 : o.columns }, X);
						return ce?.length
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										...u,
										className: H()('ss__results', `ss__results-${o.layout}`, s, V),
										children: ce.map((a) =>
											a.type === i.c.BANNER
												? (0, N.n)(c._, { ...ie.inlineBanner, key: a.id, banner: a, layout: o.layout })
												: _e
												? null
												: se && _
												? (0, t.Y)(A.o, {
														result: a,
														controller: _,
														children: (0, P.Y)(se, { key: a.id, controller: _, result: a, theme: D, treePath: G }),
												  })
												: (0, t.Y)(q, { ...ie.result, result: a, layout: o.layout, controller: _ }, a.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(de, w, e) {
				e.d(w, { G: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					H = e.n($),
					v = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ee = e('./components/src/utilities/defined.ts'),
					k = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const C = ({}) =>
						(0, d.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					E = (0, N.PA)((m) => {
						const z = (0, Y.u)(),
							O = (0, i.LU)(),
							J = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: O,
							},
							l = (0, k.v6)('termsList', z, J, m),
							{
								layout: x,
								historyTitle: A,
								verticalOptions: j,
								trendingTitle: R,
								suggestionTitle: X,
								retainHistory: q,
								retainTrending: te,
								treePath: B,
								disableStyles: S,
								className: re,
								internalClassName: le,
								controller: f,
							} = l,
							{ overrideElement: n, shouldRenderDefault: o } = (0, c._)('termsList', l);
						if (!o) return n;
						const Z = { terms: { vertical: !!j, ...(0, ee.s)({ disableStyles: S }), theme: l.theme, treePath: B } },
							s = (0, P.Z)(l, C),
							V = f?.store.history || [],
							L = f?.store.terms || [],
							D = f?.store.trending || [],
							T = D?.filter((F) => F.active).pop(),
							_ = V?.filter((F) => F.active).pop(),
							{ loaded: G, results: p, state: W } = f?.store;
						let Q = !1;
						D?.length && ((te && G) || (!p.length && !W.input)) && (Q = !0);
						let U = !1;
						V?.length && ((q && G) || (!p.length && !W.input)) && (U = !0),
							!f.store.state.input && (_ || T) && (V?.length && (U = !0), D?.length && (Q = !0));
						const ae = (F) => {
								if (typeof F != 'string') {
									const _e = F?.map((ie) => ae(ie));
									return F?.some((ie, ce) => ie !== '_' && _e[ce]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: _e }) : null;
								}
								if (F == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (F == 'History' && U)
									return (0, t.Y)(h.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: A,
										terms: V,
										controller: f,
										name: 'history',
										limit: f.config.settings?.history?.limit,
										...Z.terms,
									});
								if (F == 'Trending' && Q)
									return (0, t.Y)(h.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: R,
										terms: D,
										controller: f,
										name: 'trending',
										limit: f.config.settings?.trending?.limit,
										...Z.terms,
									});
								if (F == 'Suggestions')
									return L.length
										? (0, t.Y)(h.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: X,
												terms: L,
												controller: f,
												name: 'suggestions',
												...Z.terms,
										  })
										: null;
							},
							b = x?.map((F) => ae(F));
						return b?.some(Boolean)
							? (0, t.Y)(v._, { children: (0, t.Y)('div', { ...s, className: H()('ss__terms-list', re, le), children: b }) })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(de, w, e) {
				e.d(w, { o: () => ee });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('../../node_modules/classnames/index.js'),
					H = e.n($),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const c = { ResultTracker: () => (0, N.AH)({}) },
					ee = (0, d.PA)((k) => {
						const P = (0, v.u)(),
							h = (0, Y.v6)('resultTracker', P, {}, k),
							C = { impression: !0, click: !0 },
							{ children: E, result: m, track: z, controller: O, className: J, internalClassName: l, disableStyles: x, style: A } = h,
							j = { ...C, ...z },
							{ ref: R, inViewport: X } = (0, i.Q)();
						X && j.impression && O?.track.product.impression(m);
						const q = {};
						return (
							x ? A && (q.css = [A]) : (q.css = [c.ResultTracker(), A]),
							(0, t.Y)('div', {
								className: H()('ss__result-tracker', `ss__${O?.type}-result-tracker`, J, l),
								onClick: (te) => {
									j.click && O?.track.product.click(te, m);
								},
								ref: R,
								...q,
								children: E,
							})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(de, w, e) {
				e.d(w, { x: () => N });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function N({ input: d, controller: $, renderInput: H, buttonSelector: v, renderedInputRef: Y, setActive: i }) {
					const [c, ee] = (0, t.J0)(d),
						[k, P] = (0, t.J0)(!1),
						h = () => {
							i && i(!0),
								setTimeout(async () => {
									k ||
										(ee(Y.current),
										($.config.selector = `${$.config.selector}, .autocomplete__search-input input`),
										await $.bind(),
										Y?.current?.focus()),
										P(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							let C = !1;
							const E = () => {
								C = !1;
							};
							if (H && v) {
								let m;
								if ((typeof v == 'string' ? (m = document.querySelector(v)) : (m = v), m)) {
									const z = () => {
											C = !0;
										},
										O = (x) => {
											(C = !1), x.stopPropagation(), h();
										},
										J = () => {
											C || h();
										},
										l = () => h();
									return (
										m.addEventListener('mousedown', z),
										document.addEventListener('mouseup', E, !0),
										m.addEventListener('click', O),
										m.addEventListener('focus', J),
										m.addEventListener('select', l),
										() => {
											m.removeEventListener('mousedown', z),
												document.removeEventListener('mouseup', E, !0),
												m.removeEventListener('click', O),
												m.removeEventListener('focus', J),
												m.removeEventListener('select', l);
										}
									);
								}
							} else if (i) {
								const m = () => {
										C = !0;
									},
									z = (l) => {
										(C = !1), l.stopPropagation(), i(!0);
									},
									O = () => {
										C || i(!0);
									},
									J = () => i(!0);
								return (
									d.addEventListener('mousedown', m),
									document.addEventListener('mouseup', E, !0),
									d.addEventListener('click', z),
									d.addEventListener('focus', O),
									d.addEventListener('select', J),
									() => {
										d.removeEventListener('mousedown', m),
											document.removeEventListener('mouseup', E, !0),
											d.removeEventListener('click', z),
											d.removeEventListener('focus', O),
											d.removeEventListener('select', J);
									}
								);
							}
						}, []),
						(0, t.vJ)(() => {
							if (d !== c && c) {
								const C = () => {
									d.value = c.value;
								};
								return (
									c.addEventListener('input', C),
									() => {
										c.removeEventListener('input', C);
									}
								);
							}
						}, [c]),
						c
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(de, w, e) {
				e.d(w, { i: () => N });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const N = (d, $, H) => {
					const [v, Y] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							d.getController(H.id)
								.then((i) => {
									Y(i);
								})
								.catch(() => {
									d.createController($, H).then((i) => {
										Y(i);
									});
								});
						}, []),
						v
					);
				};
			},
		},
	]);
})();
