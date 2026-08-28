(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6969],
		{
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories.tsx'(M, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => c, __namedExportsOrder: () => l, default: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'),
					T = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					m = e('./components/src/utilities/snapify.ts');
				const v = `# RecommendationBundleVertical

Vertically renders a recommended bundle of products with seed, recommendations and add to cart display.

## Sub-components
- RecommendationBundle

## Usage

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### onAddToCart 
the \`onAddToCart\` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. 

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`. Note the first result will be displayed as the \`seed\` product. 

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />
\`\`\`


### hideSeed
The \`hideSeed\` prop specifies if the seed result should be rendered or not.  

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />
\`\`\`

### title
The \`title\` prop specifies the bundle title

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />
\`\`\`

### resultComponent
The \`resultComponent\` prop allows for a custom result component to be rendered. This component will be passed the following props -

\`\`\`tsx
	{ 
		result: Product, 
		seed: boolean, 
		selected: boolean, 
		onProductSelect: (result:Product) => void
	}
\`\`\`

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />
\`\`\`

### ctaButtonText
The \`ctaButtonText\` prop specifies the inner text to render in the add to cart button.

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />
\`\`\`

### ctaButtonSuccessText
The \`ctaButtonSuccessText\` prop specifies text to temporarily render in the add to cart button after it is clicked.

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />
\`\`\`

### ctaButtonSuccessTimeout
The \`ctaButtonSuccessTimeout\` prop specifies number of ms to show success text in add to cart button before reverting back to normal text

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />
\`\`\`

### ctaIcon
The \`ctaIcon\` prop specifies the icon to render in the CTA. Takes an object with \`Icon\` component props or a string.     

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />
\`\`\`

### ctaSlot
The \`ctaSlot\` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -

\`\`\`tsx	
	{ 
		cartStore: CartStore;
		onAddToCart: (e:any) => void
	}
\`\`\`

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />
\`\`\`

### preselectedCount
The \`preselectedCount\` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example \`preselectedCount={3}\` would be \`seed\` + 2 preselected items. If not provided, this will default to however many products are initially visible. 

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />
\`\`\`

### seedText
The \`seedText\` prop specifies text to be rendered as a badge in the seed product.   

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={"Main Product"} />
\`\`\`

### separatorIcon
The \`separatorIcon\` prop specifies the icon to render between products. Takes an object with \`Icon\` component props or a string.     

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />
\`\`\`

### separatorIconSeedOnly
The \`separatorIconSeedOnly\` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />
\`\`\`


### hideCheckboxes
The \`hideCheckboxes\` prop specifies if the bundle checkboxes should be rendered. 

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\` and \`Pagination\` modules by default.

\`\`\`tsx
import { Scrollbar } from 'swiper';
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationBundleVertical controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the bundle at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The configuration can take any **\`RecommendationBundleVertical props\`**, 

\`\`\`typescript
const customRecommendationBreakpoints = {
	0: {
		limit: 2
	},
	768: {
		limit: 3
	},
	1024: {
		limit: 4
	},
	1200: {
		limit: 5
	},
};
\`\`\`

\`\`\`tsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={customRecommendationBreakpoints} />
\`\`\`

`;
				var d = e('./components/src/components/Atoms/Icon/paths.tsx');
				const E = {
						title: 'Templates/RecommendationBundleVertical',
						component: n.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: T.Z } }, children: v }), (0, t.Y)(i.uY, { story: i.h1 })],
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
							limit: {
								description: 'limit the number of results rendered',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideCheckboxes: {
								defaultValue: !1,
								description: 'Hide/show bundle checkboxes in results',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							seedText: {
								description: 'Text to render in seed product badge',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
								control: { type: 'text' },
							},
							hideSeed: {
								description: 'Hide/show seed result',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
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
								control: { type: 'select', options: [...Object.keys(d.c)] },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(d.c)] },
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
							breakpoints: {
								defaultValue: void 0,
								description: 'Recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							...o.F,
						},
					},
					C = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					P = m.p.recommendation(C),
					c = (u, { loaded: { controller: b } }) => (0, t.Y)(n.a, { ...u, controller: b, results: b.store.results });
				(c.loaders = [
					async () => (
						P.on('afterStore', async ({ controller: u }, b) => {
							u.store.results.forEach((p) => (p.mappings.core.url = 'javascript:void(0);')), await b();
						}),
						await P.search(),
						{ controller: P }
					),
				]),
					(c.args = { limit: 3 }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleVerticalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleVertical {...props} controller={controller} results={controller.store.results} />;
}`,
								...c.parameters?.docs?.source,
							},
						},
					});
				const l = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					m = e.n(o),
					v = e('./components/src/components/Atoms/Image/Image.tsx'),
					d = e('./components/src/components/Atoms/Price/Price.tsx'),
					E = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					p = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					D = e('./components/src/types.ts'),
					g = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					B = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					R = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					A = e('./components/src/components/Atoms/Button/Button.tsx'),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(s),
					_ = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					h = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const S = () =>
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
					Q = (0, n.PA)((Z) => {
						const K = (0, C.u)(),
							F = (0, P.LU)(),
							G = {
								layout: D.V.grid,
								treePath: F,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							y = (0, u.v6)('result', K, G, Z),
							{
								result: O,
								hideBadge: W,
								hideTitle: $,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: j,
								className: oe,
								internalClassName: ne,
								layout: se,
								onClick: U,
								controller: w,
								hideVariantSelections: re,
								hideAddToCartButton: le,
								onAddToCartClick: k,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: ce,
								addToCartButtonSuccessTimeout: ie,
								hideRating: de,
								hideQuickviewButton: me,
								onQuickviewClick: N,
								trackingRef: ue,
								treePath: V,
							} = y,
							{ overrideElement: pe, shouldRenderDefault: _e } = (0, x._)('result', {
								...y,
								customComponent: y.customComponent && y.customComponent !== 'Result' ? y.customComponent : void 0,
							});
						if (!_e) return pe;
						const f = O?.display?.mappings.core || O?.mappings?.core,
							[he, Y] = (0, i.J0)(!1),
							I = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, l.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: V,
								},
								price: { internalClassName: 'ss__result__price', ...(0, l.s)({ disableStyles: j }), theme: y.theme, treePath: V },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: O,
									...(0, l.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: V,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: O,
									controller: w,
									...(0, l.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: V,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: f?.name || '',
									src: f?.imageUrl || '',
									...(0, l.s)({ disableStyles: j, fallback: te }),
									theme: y.theme,
									treePath: V,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: f?.rating || 0,
									count: Number(f?.ratingCount || 0),
									...(0, l.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: V,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (L) => {
										N && N(L, O), w?.quickview(O);
									},
									...(0, l.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: V,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (L) => {
										Y(!0), k && k(L, O), w?.addToCart([O]), setTimeout(() => Y(!1), ie);
									},
									...(0, l.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: V,
								},
							};
						let z = f?.name;
						y.truncateTitle && (z = p.x(f?.name || '', y.truncateTitle.limit, y.truncateTitle.append));
						const ge = (0, b.Z)(y, S),
							Te = { addToCartButtonText: { value: he ? ce : ae }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Ee = a()(Te, y.lang || {}),
							J = (0, _.u)(Ee, { result: O, controller: w }, { activeBreakpoint: K?.activeBreakpoint }),
							H = !!(f?.msrp && f?.price && f?.price < f?.msrp),
							ye = w?.store?.config?.asyncState?.product?.price ? O.state.priceFetched : !0;
						return f
							? (0, t.Y)(E._, {
									children: (0, t.FD)('article', {
										...ge,
										className: m()('ss__result', `ss__result--${se}`, { 'ss__result--sale': H }, oe, ne),
										ref: ue,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: f.url,
															onClick: (L) => {
																U && U(L);
															},
															children: W
																? (0, t.Y)(v._, { ...I.image })
																: (0, t.Y)(B.Q, { ...I.overlayBadge, controller: w, children: (0, t.Y)(v._, { ...I.image }) }),
														}),
														!me && w?.quickviewManager && (0, t.Y)(A.$, { ...I.quickviewButton, ...J.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!W && (0, t.Y)(g.W, { ...I.calloutBadge, controller: w }),
													!$ &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: f.url,
																onClick: (L) => {
																	U && U(L);
																},
																dangerouslySetInnerHTML: { __html: z || '' },
															}),
														}),
													!de && (0, t.Y)(R.G, { ...I.rating }),
													!X && ye && f.price && f.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: H
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(d.g, { ...I.price, value: f.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(d.g, { ...I.price, value: f.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(d.g, { ...I.price, value: f.price }),
														  })
														: null,
													(0, c.Y)(ee, { result: O, treePath: V }),
													!re && O.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: O.variants?.selections.map((L) => (0, t.Y)(h.m, { ...I.variantSelection, type: L.type, selection: L })),
														  })
														: null,
													!le &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(A.$, { ...I.button, ...J.addToCartButtonText.all }),
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
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const E = () =>
						(0, i.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					C = 'recommendationBundleVertical',
					P = (0, T.PA)((c) => {
						const l = (0, n.u)(),
							u = { name: c.controller?.store?.profile?.tag?.toLowerCase(), ...c },
							{ treePath: b, disableStyles: p, controller: D, style: g, styleScript: B, themeStyleScript: R, ...A } = u,
							s = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: C,
									...(0, o.s)({ disableStyles: p }),
									theme: u?.theme,
									treePath: b,
								},
							},
							a = (0, m.v6)(C, l, {}, u),
							_ = (0, v.Z)(a, E);
						return (0, t.Y)(d.g, { controller: D, ..._, ...s.recommendationBundle, ...A });
					});
				e.d(r, ['a', 0, P]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/classnames/index.js'),
					o = e.n(T),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, i.AH)({}) },
					C = (0, n.PA)((P) => {
						const c = (0, m.u)(),
							l = (0, v.v6)('resultTracker', c, {}, P),
							u = { impression: !0, click: !0 },
							{ children: b, result: p, track: D, controller: g, className: B, internalClassName: R, disableStyles: A, style: s } = l,
							a = { ...u, ...D },
							{ ref: _, inViewport: x } = (0, d.Q)();
						x && a.impression && g?.track.product.impression(p);
						const h = {};
						return (
							A ? s && (h.css = [s]) : (h.css = [E.ResultTracker(), s]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${g?.type}-result-tracker`, B, R),
								onClick: (S) => {
									a.click && g?.track.product.click(S, p);
								},
								ref: _,
								...h,
								children: b,
							})
						);
					});
				e.d(r, ['o', 0, C]);
			},
			'./components/src/hooks/useIntersection.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, T = '0px', o = !1) => {
					const [m, v] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const d = new IntersectionObserver(
								([E]) => {
									v(E.isIntersecting), o && E.isIntersecting && d.unobserve(n.current);
								},
								{ rootMargin: T }
							);
							return (
								n.current && d.observe(n.current),
								() => {
									d.unobserve(n.current);
								}
							);
						}, []),
						m
					);
				};
				e.d(r, ['v', 0, i]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 250,
					n = (o, m = {}) => {
						const { rootMargin: v = '0px', fireOnce: d = !1, threshold: E = 0, minVisibleTime: C = 0 } = m,
							[P, c] = (0, t.J0)(!1),
							l = (0, t.li)(null),
							u = (0, t.li)(null),
							[b, p] = (0, t.J0)(0),
							D = (0, t.hb)((g) => {
								(o.current = g), p((B) => B + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								c(!1);
								let g = null,
									B = null;
								if (!window.IntersectionObserver || !o.current) return;
								const R = () => {
										B && (window.clearInterval(B), (B = null));
									},
									A = () => {
										C > 0
											? ((u.current = Date.now()),
											  l.current && window.clearTimeout(l.current),
											  (l.current = window.setTimeout(() => {
													c(!0), d && o.current && g && g.unobserve(o.current);
											  }, C)))
											: (c(!0), d && o.current && g && g.unobserve(o.current));
									},
									s = () => {
										l.current && window.clearTimeout(l.current), (l.current = null), (u.current = null), c(!1);
									};
								return (
									(g = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? o.current && T(o.current)
													? (R(), A())
													: (s(),
													  B ||
															(B = window.setInterval(() => {
																if (!o.current) {
																	R();
																	return;
																}
																T(o.current) && (R(), A());
															}, i)))
												: (R(), s());
										},
										{ rootMargin: v, threshold: E }
									)),
									o.current && g.observe(o.current),
									() => {
										c(!1), R(), l.current && window.clearTimeout(l.current), g && o.current && g.unobserve(o.current);
									}
								);
							}, [o, b]),
							{ inViewport: P, updateRef: D }
						);
					};
				function T(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(r, ['v', 0, n]);
			},
			'./components/src/types.ts'(M, r, e) {
				'use strict';
				e.d(r, { Q: () => i, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
					i = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(i || {});
			},
			'./components/src/utilities/componentArgs.ts'(M, r, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(M, r, e) {
				'use strict';
				e.d(r, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					T = 1e3;
				function o(m) {
					const v = (0, t.li)(null),
						{ inViewport: d, updateRef: E } = (0, i.v)(v, { fireOnce: !0, threshold: n, minVisibleTime: T, ...m });
					return { ref: v, inViewport: d, updateRef: E };
				}
			},
			'./components/src/utilities/snapify.ts'(M, r, e) {
				'use strict';
				e.d(r, { p: () => g });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					c = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					l = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					u = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					D = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(a) {
						const _ = a.id;
						if (p[_]) return p[_];
						const x = (p[_] = R({ client: D, controller: a }));
						return (
							x.on('afterStore', async ({ controller: h }, S) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await S();
							}),
							x.init(),
							x
						);
					}
					static autocomplete(a) {
						const _ = a.id;
						if (p[_]) return p[_];
						const x = (p[_] = A({ client: D, controller: a }));
						return (
							x.on('afterStore', async ({ controller: h }, S) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await S();
							}),
							x.init(),
							x
						);
					}
					static search(a) {
						const _ = a.id;
						if (p[_]) return p[_];
						const x = (p[_] = B({ client: D, controller: a }));
						return (
							x.on('afterStore', async ({ controller: h }, S) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await S();
							}),
							x.init(),
							x
						);
					}
				}
				function B(s) {
					const a = new E.V(new P.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), C.X);
					return new i.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new v.U(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new c.E(),
						profiler: new l.U(),
						logger: new u.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function R(s) {
					const a = new E.V(new P.E(), C.X).detach(!0);
					return new T.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new d.t(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new c.E(),
						profiler: new l.U(),
						logger: new u.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function A(s) {
					const a = new E.V(new P.E(), C.X).detach();
					return new n.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new m.Y(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new c.E(),
						profiler: new l.U(),
						logger: new u.V(),
						tracker: new b.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					T = (o) => {
						const m = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								m.current && o.className?.includes('lang-') && !o.className?.includes(n) && window?.Prism?.highlightElement(m.current);
							}, [o.className, o.children, m]),
							(0, t.Y)('code', { ...o, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, T]);
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function r(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (M.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleVertical-RecommendationBundleVertical-stories.4c5b4e5a.iframe.bundle.js.map
