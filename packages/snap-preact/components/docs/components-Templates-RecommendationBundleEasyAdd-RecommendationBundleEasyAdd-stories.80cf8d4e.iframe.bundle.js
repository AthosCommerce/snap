(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4901],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx'(x, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => i, __namedExportsOrder: () => a, default: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					d = e('./components/src/utilities/snapify.ts');
				const P =
					"# RecommendationBundleEasyAdd\n\nRenders a single recommended product and bundle CTA section that includes a visually hidden seed product. Like all of the bundle components, the first result passed will be treated as the seed. The Seed will not be rendered, but will be included in the cartstore, bundle pricing, and items included when adding to the cart. \n\n## Sub-components\n- RecommendationBundle\n\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaInline\nThe `ctaInline` prop specifies if the add to cart display should be block or inline with the bundle.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onAddToCart: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleEasyAdd controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var m = e('./components/src/components/Atoms/Icon/paths.tsx');
				const T = {
						title: 'Templates/RecommendationBundleEasyAdd',
						component: n.F,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: h.Z } }, children: P }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, t.Y)('div', { style: { maxWidth: '500px' }, children: (0, t.Y)(u, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							results: {
								description: 'Results store reference, overrides controller.store.results',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							title: {
								description: 'recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onAddToCart: {
								description: 'onClick event handler for add bundle to cart button in CTA',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onAddToCart',
							},
							seedText: {
								description: 'Text to render in seed product badge',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
								control: { type: 'text' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(m.c)] },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaInline: {
								description: 'boolean to enable the stacked add to cart button display',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							ctaSlot: {
								description: 'Slot for custom add to cart component',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							...o.F,
						},
					},
					A = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					f = d.p.recommendation(A),
					i = (u, { loaded: { controller: C } }) => (0, t.Y)(n.F, { ...u, controller: C, results: C.store.results });
				(i.loaders = [
					async () => (
						f.on('afterStore', async ({ controller: u }, C) => {
							u.store.results.forEach((_) => (_.mappings.core.url = 'javascript:void(0);')), await C();
						}),
						await f.search(),
						{ controller: f }
					),
				]),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleEasyAddProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleEasyAdd {...props} controller={controller} results={controller.store.results} />;
}`,
								...i.parameters?.docs?.source,
							},
						},
					});
				const a = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(x, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					d = e.n(o),
					P = e('./components/src/components/Atoms/Image/Image.tsx'),
					m = e('./components/src/components/Atoms/Price/Price.tsx'),
					T = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/cloneWithProps.tsx'),
					a = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					D = e('./components/src/types.ts'),
					g = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					B = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					R = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					b = e('./components/src/components/Atoms/Button/Button.tsx'),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(s),
					p = e('./components/src/hooks/useLang.tsx'),
					O = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					E = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const S = () =>
						(0, h.AH)({
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
								'& .ss__result__quickview': {
									position: 'absolute',
									bottom: '10px',
									right: '10px',
									display: 'flex',
									background: 'transparent',
									border: 0,
									padding: '5px',
									cursor: 'pointer',
								},
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
					Q = (0, n.PA)((F) => {
						const w = (0, A.u)(),
							Z = (0, f.LU)(),
							G = {
								layout: D.V.grid,
								treePath: Z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							y = (0, u.v6)('result', w, G, F),
							{
								result: M,
								hideBadge: k,
								hideTitle: $,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: j,
								className: oe,
								internalClassName: ne,
								layout: se,
								onClick: W,
								controller: K,
								hideVariantSelections: re,
								hideAddToCartButton: ae,
								onAddToCartClick: V,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ce,
								addToCartButtonSuccessTimeout: ie,
								hideRating: de,
								hideQuickviewButton: me,
								onQuickviewClick: N,
								trackingRef: ue,
								treePath: U,
							} = y,
							{ overrideElement: _e, shouldRenderDefault: pe } = (0, O._)('result', {
								...y,
								customComponent: y.customComponent && y.customComponent !== 'Result' ? y.customComponent : void 0,
							});
						if (!pe) return _e;
						const v = M?.display?.mappings.core || M?.mappings?.core,
							[Ee, Y] = (0, c.J0)(!1),
							I = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, a.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: U,
								},
								price: { internalClassName: 'ss__result__price', ...(0, a.s)({ disableStyles: j }), theme: y.theme, treePath: U },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: M,
									...(0, a.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: U,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: M,
									controller: K,
									...(0, a.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: U,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: v?.name || '',
									src: v?.imageUrl || '',
									...(0, a.s)({ disableStyles: j, fallback: te }),
									theme: y.theme,
									treePath: U,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: v?.rating || 0,
									count: Number(v?.ratingCount || 0),
									...(0, a.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: U,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (L) => {
										N && N(L, M), K?.quickview(M);
									},
									...(0, a.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: U,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (L) => {
										Y(!0), V && V(L, M), K?.addToCart([M]), setTimeout(() => Y(!1), ie);
									},
									...(0, a.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: U,
								},
							};
						let z = v?.name;
						y.truncateTitle && (z = _.x(v?.name || '', y.truncateTitle.limit, y.truncateTitle.append));
						const ge = (0, C.Z)(y, S),
							he = { addToCartButtonText: { value: Ee ? ce : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Te = l()(he, y.lang || {}),
							J = (0, p.u)(Te, { result: M, controller: K }, { activeBreakpoint: w?.activeBreakpoint }),
							H = !!(v?.msrp && v?.price && v?.price < v?.msrp),
							ye = K?.store?.config?.asyncState?.product?.price ? M.state.priceFetched : !0;
						return v
							? (0, t.Y)(T._, {
									children: (0, t.FD)('article', {
										...ge,
										className: d()('ss__result', `ss__result--${se}`, { 'ss__result--sale': H }, oe, ne),
										ref: ue,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: v.url,
															onClick: (L) => {
																W && W(L);
															},
															children: k
																? (0, t.Y)(P._, { ...I.image })
																: (0, t.Y)(B.Q, { ...I.overlayBadge, controller: K, children: (0, t.Y)(P._, { ...I.image }) }),
														}),
														!me && K?.quickviewManager && (0, t.Y)(b.$, { ...I.quickviewButton, ...J.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!k && (0, t.Y)(g.W, { ...I.calloutBadge, controller: K }),
													!$ &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: v.url,
																onClick: (L) => {
																	W && W(L);
																},
																dangerouslySetInnerHTML: { __html: z || '' },
															}),
														}),
													!de && (0, t.Y)(R.G, { ...I.rating }),
													!X && ye && v.price && v.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: H
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(m.g, { ...I.price, value: v.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(m.g, { ...I.price, value: v.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(m.g, { ...I.price, value: v.price }),
														  })
														: null,
													(0, i.Y)(ee, { result: M, treePath: U }),
													!re && M.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: M.variants?.selections.map((L) => (0, t.Y)(E.m, { ...I.variantSelection, type: L.type, selection: L })),
														  })
														: null,
													!ae &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(b.$, { ...I.button, ...J.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(r, ['Q', 0, Q]);
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(x, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const T = () => (0, c.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					A = 'recommendationBundleEasyAdd',
					f = (0, h.PA)((i) => {
						const a = (0, n.u)(),
							u = { name: i.controller?.store?.profile?.tag?.toLowerCase(), ...i },
							{ treePath: C, disableStyles: _, controller: D, style: g, styleScript: B, themeStyleScript: R, ...b } = u,
							s = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: A,
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, o.s)({ disableStyles: _ }),
									theme: u?.theme,
									treePath: C,
								},
							},
							l = (0, d.v6)(A, a, {}, u),
							p = (0, P.Z)(l, T);
						return (0, t.Y)(m.g, { controller: D, ...p, ...s.recommendationBundle, ...b });
					});
				e.d(r, ['F', 0, f]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(x, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/classnames/index.js'),
					o = e.n(h),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/createImpressionObserver.ts');
				const T = { ResultTracker: () => (0, c.AH)({}) },
					A = (0, n.PA)((f) => {
						const i = (0, d.u)(),
							a = (0, P.v6)('resultTracker', i, {}, f),
							u = { impression: !0, click: !0 },
							{ children: C, result: _, track: D, controller: g, className: B, internalClassName: R, disableStyles: b, style: s } = a,
							l = { ...u, ...D },
							{ ref: p, inViewport: O } = (0, m.Q)();
						O && l.impression && g?.track.product.impression(_);
						const E = {};
						return (
							b ? s && (E.css = [s]) : (E.css = [T.ResultTracker(), s]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${g?.type}-result-tracker`, B, R),
								onClick: (S) => {
									l.click && g?.track.product.click(S, _);
								},
								ref: p,
								...E,
								children: C,
							})
						);
					});
				e.d(r, ['o', 0, A]);
			},
			'./components/src/hooks/useIntersection.tsx'(x, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (n, h = '0px', o = !1) => {
					const [d, P] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const m = new IntersectionObserver(
								([T]) => {
									P(T.isIntersecting), o && T.isIntersecting && m.unobserve(n.current);
								},
								{ rootMargin: h }
							);
							return (
								n.current && m.observe(n.current),
								() => {
									m.unobserve(n.current);
								}
							);
						}, []),
						d
					);
				};
				e.d(r, ['v', 0, c]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(x, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					n = (o, d = {}) => {
						const { rootMargin: P = '0px', fireOnce: m = !1, threshold: T = 0, minVisibleTime: A = 0 } = d,
							[f, i] = (0, t.J0)(!1),
							a = (0, t.li)(null),
							u = (0, t.li)(null),
							[C, _] = (0, t.J0)(0),
							D = (0, t.hb)((g) => {
								(o.current = g), _((B) => B + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								i(!1);
								let g = null,
									B = null;
								if (!window.IntersectionObserver || !o.current) return;
								const R = () => {
										B && (window.clearInterval(B), (B = null));
									},
									b = () => {
										A > 0
											? ((u.current = Date.now()),
											  a.current && window.clearTimeout(a.current),
											  (a.current = window.setTimeout(() => {
													i(!0), m && o.current && g && g.unobserve(o.current);
											  }, A)))
											: (i(!0), m && o.current && g && g.unobserve(o.current));
									},
									s = () => {
										a.current && window.clearTimeout(a.current), (a.current = null), (u.current = null), i(!1);
									};
								return (
									(g = new IntersectionObserver(
										([l]) => {
											l.isIntersecting
												? o.current && h(o.current)
													? (R(), b())
													: (s(),
													  B ||
															(B = window.setInterval(() => {
																if (!o.current) {
																	R();
																	return;
																}
																h(o.current) && (R(), b());
															}, c)))
												: (R(), s());
										},
										{ rootMargin: P, threshold: T }
									)),
									o.current && g.observe(o.current),
									() => {
										i(!1), R(), a.current && window.clearTimeout(a.current), g && o.current && g.unobserve(o.current);
									}
								);
							}, [o, C]),
							{ inViewport: f, updateRef: D }
						);
					};
				function h(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(r, ['v', 0, n]);
			},
			'./components/src/types.ts'(x, r, e) {
				'use strict';
				e.d(r, { Q: () => c, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
					c = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(c || {});
			},
			'./components/src/utilities/componentArgs.ts'(x, r, e) {
				'use strict';
				const t = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				e.d(r, ['F', 0, t]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(x, r, e) {
				'use strict';
				e.d(r, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					h = 1e3;
				function o(d) {
					const P = (0, t.li)(null),
						{ inViewport: m, updateRef: T } = (0, c.v)(P, { fireOnce: !0, threshold: n, minVisibleTime: h, ...d });
					return { ref: P, inViewport: m, updateRef: T };
				}
			},
			'./components/src/utilities/snapify.ts'(x, r, e) {
				'use strict';
				e.d(r, { p: () => g });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					d = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					i = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					a = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					u = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					D = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(l) {
						const p = l.id;
						if (_[p]) return _[p];
						const O = (_[p] = R({ client: D, controller: l }));
						return (
							O.on('afterStore', async ({ controller: E }, S) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await S();
							}),
							O.init(),
							O
						);
					}
					static autocomplete(l) {
						const p = l.id;
						if (_[p]) return _[p];
						const O = (_[p] = b({ client: D, controller: l }));
						return (
							O.on('afterStore', async ({ controller: E }, S) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await S();
							}),
							O.init(),
							O
						);
					}
					static search(l) {
						const p = l.id;
						if (_[p]) return _[p];
						const O = (_[p] = B({ client: D, controller: l }));
						return (
							O.on('afterStore', async ({ controller: E }, S) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await S();
							}),
							O.init(),
							O
						);
					}
				}
				function B(s) {
					const l = new T.V(new f.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), A.X);
					return new c.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new P.U(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new i.E(),
						profiler: new a.U(),
						logger: new u.V(),
						tracker: new C.J(s.client.globals),
					});
				}
				function R(s) {
					const l = new T.V(new f.E(), A.X).detach(!0);
					return new h.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new m.t(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new i.E(),
						profiler: new a.U(),
						logger: new u.V(),
						tracker: new C.J(s.client.globals),
					});
				}
				function b(s) {
					const l = new T.V(new f.E(), A.X).detach();
					return new n.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new d.Y(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new i.E(),
						profiler: new a.U(),
						logger: new u.V(),
						tracker: new C.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					h = (o) => {
						const d = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								d.current && o.className?.includes('lang-') && !o.className?.includes(n) && window?.Prism?.highlightElement(d.current);
							}, [o.className, o.children, d]),
							(0, t.Y)('code', { ...o, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, h]);
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function r(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (x.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleEasyAdd-RecommendationBundleEasyAdd-stories.80cf8d4e.iframe.bundle.js.map
