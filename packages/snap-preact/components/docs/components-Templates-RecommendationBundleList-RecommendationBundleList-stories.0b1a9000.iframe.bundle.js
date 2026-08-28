(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9797],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx'(A, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => u, __namedExportsOrder: () => c, default: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
					T = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/snapify.ts');
				const f =
					"# RecommendationBundleList\n\nRenders a recommended bundle of products with seed, recommendations in list form, and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed result text should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onAddToCart: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### limit\nThe `limit` prop limits the number of results rendered\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var h = e('./components/src/components/Atoms/Icon/paths.tsx');
				const v = {
						title: 'Templates/RecommendationBundleList',
						component: r.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(_.oz, { options: { overrides: { code: T.Z } }, children: f }), (0, t.Y)(_.uY, { story: _.h1 })],
									}),
							},
						},
						decorators: [(P) => (0, t.Y)('div', { style: { maxWidth: '500px' }, children: (0, t.Y)(P, {}) })],
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
							limit: {
								description: 'limit the number of results rendered',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideSeed: {
								description: 'Hide/show seed result',
								defaultValue: !1,
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSeedText: {
								description: 'hide the seed text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							hideCheckboxes: {
								description: 'hide the checkboxes',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							separatorIconSeedOnly: {
								description: 'boolean to only have seperator Icon for the seed product',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIcon: {
								defaultValue: 'plus',
								description: 'Icon to render between results',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
								control: { type: 'select', options: [...Object.keys(h.c)] },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
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
							...n.F,
						},
					},
					M = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					y = p.p.recommendation(M),
					u = (P, { loaded: { controller: O } }) => (0, t.Y)(r.a, { ...P, controller: O, results: O.store.results });
				(u.loaders = [
					async () => (
						y.on('afterStore', async ({ controller: P }, O) => {
							P.store.results.forEach((g) => (g.mappings.core.url = 'javascript:void(0);')), await O();
						}),
						await y.search(),
						{ controller: y }
					),
				]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleListProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleList {...props} controller={controller} results={controller.store.results} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const c = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(A, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					p = e.n(n),
					f = e('./components/src/components/Atoms/Image/Image.tsx'),
					h = e('./components/src/components/Atoms/Price/Price.tsx'),
					v = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					R = e('./components/src/types.ts'),
					E = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					x = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					D = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					I = e('./components/src/components/Atoms/Button/Button.tsx'),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(a),
					o = e('./components/src/hooks/useLang.tsx'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					s = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const b = () =>
						(0, T.AH)({
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
					N = (0, r.PA)((U) => {
						const k = (0, M.u)(),
							Y = (0, y.LU)(),
							W = {
								layout: R.V.grid,
								treePath: Y,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							d = (0, P.v6)('result', k, W, U),
							{
								result: B,
								hideBadge: V,
								hideTitle: z,
								hidePricing: J,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: w,
								className: oe,
								internalClassName: se,
								layout: ne,
								onClick: $,
								controller: j,
								hideVariantSelections: re,
								hideAddToCartButton: ae,
								onAddToCartClick: F,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ce,
								addToCartButtonSuccessTimeout: ie,
								hideRating: me,
								hideQuickviewButton: de,
								onQuickviewClick: H,
								trackingRef: _e,
								treePath: K,
							} = d,
							{ overrideElement: ue, shouldRenderDefault: pe } = (0, m._)('result', {
								...d,
								customComponent: d.customComponent && d.customComponent !== 'Result' ? d.customComponent : void 0,
							});
						if (!pe) return ue;
						const C = B?.display?.mappings.core || B?.mappings?.core,
							[he, Q] = (0, _.J0)(!1),
							L = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, c.s)({ disableStyles: w }),
									theme: d.theme,
									treePath: K,
								},
								price: { internalClassName: 'ss__result__price', ...(0, c.s)({ disableStyles: w }), theme: d.theme, treePath: K },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: B,
									...(0, c.s)({ disableStyles: w }),
									theme: d.theme,
									treePath: K,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: B,
									controller: j,
									...(0, c.s)({ disableStyles: w }),
									theme: d.theme,
									treePath: K,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: C?.name || '',
									src: C?.imageUrl || '',
									...(0, c.s)({ disableStyles: w, fallback: te }),
									theme: d.theme,
									treePath: K,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: C?.rating || 0,
									count: Number(C?.ratingCount || 0),
									...(0, c.s)({ disableStyles: w }),
									theme: d.theme,
									treePath: K,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (S) => {
										H && H(S, B), j?.quickview(B);
									},
									...(0, c.s)({ disableStyles: w }),
									theme: d.theme,
									treePath: K,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (S) => {
										Q(!0), F && F(S, B), j?.addToCart([B]), setTimeout(() => Q(!1), ie);
									},
									...(0, c.s)({ disableStyles: w }),
									theme: d.theme,
									treePath: K,
								},
							};
						let Z = C?.name;
						d.truncateTitle && (Z = g.x(C?.name || '', d.truncateTitle.limit, d.truncateTitle.append));
						const ge = (0, O.Z)(d, b),
							Ee = { addToCartButtonText: { value: he ? ce : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Te = i()(Ee, d.lang || {}),
							G = (0, o.u)(Te, { result: B, controller: j }, { activeBreakpoint: k?.activeBreakpoint }),
							X = !!(C?.msrp && C?.price && C?.price < C?.msrp),
							ve = j?.store?.config?.asyncState?.product?.price ? B.state.priceFetched : !0;
						return C
							? (0, t.Y)(v._, {
									children: (0, t.FD)('article', {
										...ge,
										className: p()('ss__result', `ss__result--${ne}`, { 'ss__result--sale': X }, oe, se),
										ref: _e,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: C.url,
															onClick: (S) => {
																$ && $(S);
															},
															children: V
																? (0, t.Y)(f._, { ...L.image })
																: (0, t.Y)(x.Q, { ...L.overlayBadge, controller: j, children: (0, t.Y)(f._, { ...L.image }) }),
														}),
														!de && j?.quickviewManager && (0, t.Y)(I.$, { ...L.quickviewButton, ...G.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!V && (0, t.Y)(E.W, { ...L.calloutBadge, controller: j }),
													!z &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: C.url,
																onClick: (S) => {
																	$ && $(S);
																},
																dangerouslySetInnerHTML: { __html: Z || '' },
															}),
														}),
													!me && (0, t.Y)(D.G, { ...L.rating }),
													!J && ve && C.price && C.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: X
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(h.g, { ...L.price, value: C.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(h.g, { ...L.price, value: C.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(h.g, { ...L.price, value: C.price }),
														  })
														: null,
													(0, u.Y)(ee, { result: B, treePath: K }),
													!re && B.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: B.variants?.selections.map((S) => (0, t.Y)(s.m, { ...L.variantSelection, type: S.type, selection: S })),
														  })
														: null,
													!ae &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(I.$, { ...L.button, ...G.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(l, ['Q', 0, N]);
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(A, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					v = e('./components/src/components/Atoms/Price/Price.tsx'),
					M = e('./components/src/components/Atoms/Button/Button.tsx'),
					y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/utilities/componentNameToClassName.ts'),
					P = e('../../node_modules/classnames/index.js'),
					O = e.n(P),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					R = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(R),
					x = e('./components/src/hooks/useLang.tsx');
				const D = () =>
						(0, _.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					I = 'recommendationBundleList',
					a = (0, T.PA)((o) => {
						const m = (0, r.u)(),
							s = { name: o.controller?.store?.profile?.tag?.toLowerCase(), ...o },
							{ treePath: b, disableStyles: N, controller: U, style: k, styleScript: Y, themeStyleScript: W, ...d } = s,
							B = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (J) => (0, t.Y)(i, { ...J }),
									vertical: !0,
									separatorIcon: !1,
									alias: I,
									...(0, n.s)({ disableStyles: N }),
									theme: s?.theme,
									treePath: b,
								},
							},
							V = (0, p.v6)(I, m, {}, s),
							z = (0, f.Z)(V, D);
						return (0, t.Y)(h.g, { controller: U, ...z, ...B.recommendationBundle, ...d });
					}),
					i = (0, T.PA)((o) => {
						const m = o.cartStore,
							s = `ss__${(0, c.b)(I)}`;
						o.onAddToCart = (W) => {
							N(!0), o.onAddToCart(W), setTimeout(() => N(!1), o.ctaButtonSuccessTimeout);
						};
						const [b, N] = (0, g.J0)(!1);
						o.addedToCart = b;
						const U = {
								image: { className: `${s}__wrapper__cta__image`, theme: o?.theme, treePath: o.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${s}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: o?.theme,
									treePath: o.treePath,
								},
								icon: { name: 'bundle-cart', className: `${s}__wrapper__cta__icon`, size: 50, theme: o?.theme, treePath: o.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${s}__wrapper__cta__price--strike`, theme: o?.theme, treePath: o.treePath },
								subtotalPrice: { className: `${s}__wrapper__cta__price`, name: 'bundle-price', theme: o?.theme, treePath: o.treePath },
								button: { className: `${s}__wrapper__cta__button`, theme: o?.theme, treePath: o.treePath },
							},
							k = E()({}, o.lang || {}),
							Y = (0, x.u)(k, {}, { activeBreakpoint: o?.theme?.activeBreakpoint });
						return (0, t.FD)(t.FK, {
							children: [
								(0, t.FD)('div', {
									className: `${s}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${s}__wrapper__cta__inner__images`,
											children: m.items.map((W) => {
												const d = W.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${s}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: d.url, children: (0, t.Y)(u._, { src: d.thumbnailImageUrl, alt: d.name, lazy: !1 }) }),
														(0, t.Y)(y.I, { ...U.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${s}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												o.ctaIcon
													? (0, t.Y)('div', {
															className: `${s}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(y.I, { ...U.icon, ...(typeof o.ctaIcon == 'string' ? { icon: o.ctaIcon } : o.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${s}__wrapper__cta__subtotal__title`, children: `Subtotal for ${m.count} items` }),
												(0, t.FD)('div', {
													className: `${s}__wrapper__cta__subtotal__prices`,
													children: [
														m.msrp && m.msrp !== m.price
															? (0, t.FD)('label', {
																	className: `${s}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(v.g, { ...U.subtotalStrike, lineThrough: !0, value: m.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${s}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(v.g, { ...U.subtotalPrice, value: m.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									className: `${s}__cta__button__wrapper`,
									children: (0, t.Y)(M.$, {
										...U.button,
										disabled: m.items.length == 0,
										disableStyles: !0,
										internalClassName: O()(`${s}__cta__button`, { [`${s}__cta__button--added`]: b }),
										'aria-live': b,
										onClick: (W) => o.onAddToCart(W),
										...(b ? Y.ctaButtonSuccessText?.all : Y.ctaButtonText?.all),
										children: o.addedToCart ? o.ctaButtonSuccessText : o.ctaButtonText,
									}),
								}),
							],
						});
					});
				e.d(l, ['X', 0, i, 'a', 0, a]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(A, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/classnames/index.js'),
					n = e.n(T),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/createImpressionObserver.ts');
				const v = { ResultTracker: () => (0, _.AH)({}) },
					M = (0, r.PA)((y) => {
						const u = (0, p.u)(),
							c = (0, f.v6)('resultTracker', u, {}, y),
							P = { impression: !0, click: !0 },
							{ children: O, result: g, track: R, controller: E, className: x, internalClassName: D, disableStyles: I, style: a } = c,
							i = { ...P, ...R },
							{ ref: o, inViewport: m } = (0, h.Q)();
						m && i.impression && E?.track.product.impression(g);
						const s = {};
						return (
							I ? a && (s.css = [a]) : (s.css = [v.ResultTracker(), a]),
							(0, t.Y)('div', {
								className: n()('ss__result-tracker', `ss__${E?.type}-result-tracker`, x, D),
								onClick: (b) => {
									i.click && E?.track.product.click(b, g);
								},
								ref: o,
								...s,
								children: O,
							})
						);
					});
				e.d(l, ['o', 0, M]);
			},
			'./components/src/hooks/useIntersection.tsx'(A, l, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = (r, T = '0px', n = !1) => {
					const [p, f] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const h = new IntersectionObserver(
								([v]) => {
									f(v.isIntersecting), n && v.isIntersecting && h.unobserve(r.current);
								},
								{ rootMargin: T }
							);
							return (
								r.current && h.observe(r.current),
								() => {
									h.unobserve(r.current);
								}
							);
						}, []),
						p
					);
				};
				e.d(l, ['v', 0, _]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(A, l, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 250,
					r = (n, p = {}) => {
						const { rootMargin: f = '0px', fireOnce: h = !1, threshold: v = 0, minVisibleTime: M = 0 } = p,
							[y, u] = (0, t.J0)(!1),
							c = (0, t.li)(null),
							P = (0, t.li)(null),
							[O, g] = (0, t.J0)(0),
							R = (0, t.hb)((E) => {
								(n.current = E), g((x) => x + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								u(!1);
								let E = null,
									x = null;
								if (!window.IntersectionObserver || !n.current) return;
								const D = () => {
										x && (window.clearInterval(x), (x = null));
									},
									I = () => {
										M > 0
											? ((P.current = Date.now()),
											  c.current && window.clearTimeout(c.current),
											  (c.current = window.setTimeout(() => {
													u(!0), h && n.current && E && E.unobserve(n.current);
											  }, M)))
											: (u(!0), h && n.current && E && E.unobserve(n.current));
									},
									a = () => {
										c.current && window.clearTimeout(c.current), (c.current = null), (P.current = null), u(!1);
									};
								return (
									(E = new IntersectionObserver(
										([i]) => {
											i.isIntersecting
												? n.current && T(n.current)
													? (D(), I())
													: (a(),
													  x ||
															(x = window.setInterval(() => {
																if (!n.current) {
																	D();
																	return;
																}
																T(n.current) && (D(), I());
															}, _)))
												: (D(), a());
										},
										{ rootMargin: f, threshold: v }
									)),
									n.current && E.observe(n.current),
									() => {
										u(!1), D(), c.current && window.clearTimeout(c.current), E && n.current && E.unobserve(n.current);
									}
								);
							}, [n, O]),
							{ inViewport: y, updateRef: R }
						);
					};
				function T(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(l, ['v', 0, r]);
			},
			'./components/src/types.ts'(A, l, e) {
				'use strict';
				e.d(l, { Q: () => _, V: () => t });
				var t = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(t || {}),
					_ = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(_ || {});
			},
			'./components/src/utilities/componentArgs.ts'(A, l, e) {
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
				e.d(l, ['F', 0, t]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(A, l, e) {
				'use strict';
				e.d(l, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					T = 1e3;
				function n(p) {
					const f = (0, t.li)(null),
						{ inViewport: h, updateRef: v } = (0, _.v)(f, { fireOnce: !0, threshold: r, minVisibleTime: T, ...p });
					return { ref: f, inViewport: h, updateRef: v };
				}
			},
			'./components/src/utilities/snapify.ts'(A, l, e) {
				'use strict';
				e.d(l, { p: () => E });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					u = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					O = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					R = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(i) {
						const o = i.id;
						if (g[o]) return g[o];
						const m = (g[o] = D({ client: R, controller: i }));
						return (
							m.on('afterStore', async ({ controller: s }, b) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await b();
							}),
							m.init(),
							m
						);
					}
					static autocomplete(i) {
						const o = i.id;
						if (g[o]) return g[o];
						const m = (g[o] = I({ client: R, controller: i }));
						return (
							m.on('afterStore', async ({ controller: s }, b) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await b();
							}),
							m.init(),
							m
						);
					}
					static search(i) {
						const o = i.id;
						if (g[o]) return g[o];
						const m = (g[o] = x({ client: R, controller: i }));
						return (
							m.on('afterStore', async ({ controller: s }, b) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await b();
							}),
							m.init(),
							m
						);
					}
				}
				function x(a) {
					const i = new v.V(new y.E({ settings: { coreType: 'query', corePrefix: a.controller.id } }), M.X);
					return new _.Tp(a.controller, {
						client: new n.K(a.client.globals, a.client.config),
						store: new f.U(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new u.E(),
						profiler: new c.U(),
						logger: new P.V(),
						tracker: new O.J(a.client.globals),
					});
				}
				function D(a) {
					const i = new v.V(new y.E(), M.X).detach(!0);
					return new T.c(a.controller, {
						client: new n.K(a.client.globals, a.client.config),
						store: new h.t(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new u.E(),
						profiler: new c.U(),
						logger: new P.V(),
						tracker: new O.J(a.client.globals),
					});
				}
				function I(a) {
					const i = new v.V(new y.E(), M.X).detach();
					return new r.Z(a.controller, {
						client: new n.K(a.client.globals, a.client.config),
						store: new p.Y(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new u.E(),
						profiler: new c.U(),
						logger: new P.V(),
						tracker: new O.J(a.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(A, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					T = (n) => {
						const p = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								p.current && n.className?.includes('lang-') && !n.className?.includes(r) && window?.Prism?.highlightElement(p.current);
							}, [n.className, n.children, p]),
							(0, t.Y)('code', { ...n, ref: p, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, T]);
			},
			'../../node_modules/memoizerific sync recursive'(A) {
				function l(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (A.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleList-RecommendationBundleList-stories.0b1a9000.iframe.bundle.js.map
