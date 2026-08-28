(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6225],
		{
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx'(A, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => i, __namedExportsOrder: () => l, default: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					b = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					u = e('./components/src/utilities/snapify.ts');
				const v = `# RecommendationBundle

Renders a recommended bundle of products with seed, carousel of recommendations and add to cart display.

## Sub-components
- Carousel
- Result (default)

## Usage
\`\`\`tsx
import { RecommendationBundle } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### onAddToCart 
the \`onAddToCart\` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`. Note the first result will be displayed as the \`seed\` product. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />
\`\`\`

### carousel 
The \`carousel\` prop specifies an object of carousel settings. These settings will be merged with the default settings (listed below). All valid Carousel component props (and any non-documented SwiperJS props) can be used here. The below example uses the \`prevButton\`, \`nextButton\` and \`loop\` props from the Carousel:

\`\`\`tsx
type BundleCarouselProps = {
	enabled: boolean;
	seedInCarousel?: boolean;
} & CarouselProps

const customCarouselProps = {
	enabled: true,
	loop: false,
	prevButton: 'Previous',
	nextButton: 'Next'
}
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ customCarouselProps } />
\`\`\`

### enabled
The \`enabled\` prop is a sub prop under the \`carousel\` prop. It specifies weather the bundle should render as a carousel or not.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ enabled:false } />
\`\`\`

### hideSeed
The \`hideSeed\` prop specifies if the seed result should be rendered or not.  

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />
\`\`\`

### seedInCarousel
The \`seedInCarousel\` prop is a sub prop under the \`carousel\` prop. It specifies if the seed product should be included in the carousel or not.  

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ seedInCarousel:true } />
\`\`\`

### pagination
The \`pagination\` prop is a sub prop under the \`carousel\` prop. It specifies if the carousel should display pagination dots. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ pagination:true } />
\`\`\`

### hideButtons
The \`hideButtons\` is a sub prop under the \`carousel\` prop. It specifies if the carousel should hide prev/next buttons.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ hideButtons:true }><Recommendation/>
\`\`\`

### prevButton
The \`prevButton\` prop is a sub prop under the \`carousel\` prop. It specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ prevButton: '<' } />
\`\`\`

### nextButton
The \`nextButton\` prop  is a sub prop under the \`carousel\` prop. It specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ nextButton: '>' } />
\`\`\`

### title
The \`title\` prop specifies the bundle title

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />
\`\`\`

### description
The \`description\` prop specifies the bundle description

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />
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
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />
\`\`\`

### ctaButtonText
The \`ctaButtonText\` prop specifies the inner text to render in the add to cart button.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />
\`\`\`

### ctaButtonSuccessText
The \`ctaButtonSuccessText\` prop specifies text to temporarily render in the add to cart button after it is clicked.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />
\`\`\`

### ctaButtonSuccessTimeout
The \`ctaButtonSuccessTimeout\` prop specifies number of ms to show success text in add to cart button before reverting back to normal text

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />
\`\`\`

### ctaIcon
The \`ctaIcon\` prop specifies the icon to render in the CTA. Takes an object with \`Icon\` component props or a string.     

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />
\`\`\`

### ctaInline
The \`ctaInline\` prop specifies if the add to cart display should be block or inline witht the carousel.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />
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
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />
\`\`\`

### preselectedCount
The \`preselectedCount\` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example \`preselectedCount={3}\` would be \`seed\` + 2 preselected items. If not provided, this will default to however many products are initially visible. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />
\`\`\`

### seedText
The \`seedText\` prop specifies text to be rendered as a badge in the seed product.   

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={"Main Product"} />
\`\`\`

### separatorIcon
The \`separatorIcon\` prop specifies the icon to render between products. Takes an object with \`Icon\` component props or a string.     

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />
\`\`\`

### separatorIconSeedOnly
The \`separatorIconSeedOnly\` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />
\`\`\`


### hideCheckboxes
The \`hideCheckboxes\` prop specifies if the bundle checkboxes should be rendered. 

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />
\`\`\`

### vertical
The \`vertical\` prop sets the carousel scroll direction to vertical.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />
\`\`\`

### hideSeedText
The \`hideSeedText\` prop sets determines if the seed text should render.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />
\`\`\`


### limit
The \`limit\` prop limits the number of products rendered.

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} limit={5} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\` and \`Pagination\` modules by default.

\`\`\`tsx
import { Scrollbar } from 'swiper';
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationBundle controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **\`any BundleRecommendation props\`**, or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. 

\`slidesPerView\` - number of products to display per page

\`slidesPerGroup\` - number of products to scroll by when next/previous button is clicked

\`spaceBetween\` - spacing between each product

\`\`\`js
const defaultRecommendationBreakpoints = {
	0: {
		carousel: {
			enabled: false,
		},
		limit: 2
	},
	768: {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 10,
	},
};
\`\`\`

\`\`\`tsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={defaultRecommendationBreakpoints} />
\`\`\`


## Lang

The \`lang\` prop allows you to override translatable text strings used by the RecommendationBundle component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`seedText\` | Seed product label text | _(none)_ |
| \`ctaButtonText\` | Add to cart CTA button text | _(none)_ |
| \`ctaButtonSuccessText\` | CTA button text after successful add | _(none)_ |
| \`ctaSubtotalTitle\` | Subtotal section title | \`cartStore\` (CartStore) |

### Example

\`\`\`tsx
<RecommendationBundle
	controller={controller}
	lang={{
		seedText: {
			value: 'This Product',
		},
		ctaButtonText: {
			value: 'Add Bundle to Cart',
		},
		ctaButtonSuccessText: {
			value: 'Bundle Added!',
		},
		ctaSubtotalTitle: {
			value: (data) => \`Subtotal for \${data.cartStore.count} items\`,
		},
	}}
/>
\`\`\`
`;
				var m = e('./components/src/components/Atoms/Icon/paths.tsx');
				const f = {
						title: 'Templates/RecommendationBundle',
						component: n.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: b.Z } }, children: v }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(y, {}) })],
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
								description: 'recommendation bundle title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							description: {
								description: 'recommendation bundle description',
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
							carousel: {
								description: 'Carousel settings object',
								defaultValue: { enabled: !0, loop: !1 },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Carousel settings object' } },
								control: { type: 'object' },
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
							hideSeedText: {
								description: 'Hide seed product badge text',
								defaultValue: !1,
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSeed: {
								description: 'Hide/show seed result',
								defaultValue: !1,
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
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
								control: { type: 'select', options: [...Object.keys(m.c)] },
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
							breakpoints: {
								defaultValue: void 0,
								description: 'Recommendation title',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							modules: { description: 'additional swiper modules to use', table: { type: { summary: 'object' } }, control: { type: 'object' } },
							...o.F,
						},
					},
					R = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					x = u.p.recommendation(R),
					i = (y, { loaded: { controller: E } }) => (0, t.Y)(n.g, { ...y, controller: E, results: E.store.results });
				(i.loaders = [
					async () => (
						x.on('afterStore', async ({ controller: y }, E) => {
							y.store.results.forEach((p) => (p.mappings.core.url = 'javascript:void(0);')), await E();
						}),
						await x.search(),
						{ controller: x }
					),
				]),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundle {...props} controller={controller} results={controller.store.results} />;
}`,
								...i.parameters?.docs?.source,
							},
						},
					});
				const l = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(A, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					u = e.n(o),
					v = e('./components/src/components/Atoms/Image/Image.tsx'),
					m = e('./components/src/components/Atoms/Price/Price.tsx'),
					f = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					p = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					D = e('./components/src/types.ts'),
					_ = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					B = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					I = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					S = e('./components/src/components/Atoms/Button/Button.tsx'),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(s),
					h = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					d = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const w = () =>
						(0, b.AH)({
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
					Q = (0, n.PA)((G) => {
						const K = (0, R.u)(),
							X = (0, x.LU)(),
							$ = {
								layout: D.V.grid,
								treePath: X,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							g = (0, y.v6)('result', K, $, G),
							{
								result: P,
								hideBadge: W,
								hideTitle: F,
								hidePricing: Z,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: j,
								className: oe,
								internalClassName: ne,
								layout: se,
								onClick: U,
								controller: k,
								hideVariantSelections: re,
								hideAddToCartButton: le,
								onAddToCartClick: V,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: ce,
								addToCartButtonSuccessTimeout: ie,
								hideRating: de,
								hideQuickviewButton: me,
								onQuickviewClick: N,
								trackingRef: ue,
								treePath: L,
							} = g,
							{ overrideElement: pe, shouldRenderDefault: _e } = (0, C._)('result', {
								...g,
								customComponent: g.customComponent && g.customComponent !== 'Result' ? g.customComponent : void 0,
							});
						if (!_e) return pe;
						const T = P?.display?.mappings.core || P?.mappings?.core,
							[he, Y] = (0, c.J0)(!1),
							O = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, l.s)({ disableStyles: j }),
									theme: g.theme,
									treePath: L,
								},
								price: { internalClassName: 'ss__result__price', ...(0, l.s)({ disableStyles: j }), theme: g.theme, treePath: L },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: P,
									...(0, l.s)({ disableStyles: j }),
									theme: g.theme,
									treePath: L,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: P,
									controller: k,
									...(0, l.s)({ disableStyles: j }),
									theme: g.theme,
									treePath: L,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: T?.name || '',
									src: T?.imageUrl || '',
									...(0, l.s)({ disableStyles: j, fallback: te }),
									theme: g.theme,
									treePath: L,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: T?.rating || 0,
									count: Number(T?.ratingCount || 0),
									...(0, l.s)({ disableStyles: j }),
									theme: g.theme,
									treePath: L,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (M) => {
										N && N(M, P), k?.quickview(P);
									},
									...(0, l.s)({ disableStyles: j }),
									theme: g.theme,
									treePath: L,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (M) => {
										Y(!0), V && V(M, P), k?.addToCart([P]), setTimeout(() => Y(!1), ie);
									},
									...(0, l.s)({ disableStyles: j }),
									theme: g.theme,
									treePath: L,
								},
							};
						let J = T?.name;
						g.truncateTitle && (J = p.x(T?.name || '', g.truncateTitle.limit, g.truncateTitle.append));
						const ge = (0, E.Z)(g, w),
							Te = { addToCartButtonText: { value: he ? ce : ae }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							be = a()(Te, g.lang || {}),
							z = (0, h.u)(be, { result: P, controller: k }, { activeBreakpoint: K?.activeBreakpoint }),
							H = !!(T?.msrp && T?.price && T?.price < T?.msrp),
							fe = k?.store?.config?.asyncState?.product?.price ? P.state.priceFetched : !0;
						return T
							? (0, t.Y)(f._, {
									children: (0, t.FD)('article', {
										...ge,
										className: u()('ss__result', `ss__result--${se}`, { 'ss__result--sale': H }, oe, ne),
										ref: ue,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: T.url,
															onClick: (M) => {
																U && U(M);
															},
															children: W
																? (0, t.Y)(v._, { ...O.image })
																: (0, t.Y)(B.Q, { ...O.overlayBadge, controller: k, children: (0, t.Y)(v._, { ...O.image }) }),
														}),
														!me && k?.quickviewManager && (0, t.Y)(S.$, { ...O.quickviewButton, ...z.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!W && (0, t.Y)(_.W, { ...O.calloutBadge, controller: k }),
													!F &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: T.url,
																onClick: (M) => {
																	U && U(M);
																},
																dangerouslySetInnerHTML: { __html: J || '' },
															}),
														}),
													!de && (0, t.Y)(I.G, { ...O.rating }),
													!Z && fe && T.price && T.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: H
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(m.g, { ...O.price, value: T.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(m.g, { ...O.price, value: T.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(m.g, { ...O.price, value: T.price }),
														  })
														: null,
													(0, i.Y)(ee, { result: P, treePath: L }),
													!re && P.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: P.variants?.selections.map((M) => (0, t.Y)(d.m, { ...O.variantSelection, type: M.type, selection: M })),
														  })
														: null,
													!le &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(S.$, { ...O.button, ...z.addToCartButtonText.all }),
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
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(A, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/classnames/index.js'),
					o = e.n(b),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/createImpressionObserver.ts');
				const f = { ResultTracker: () => (0, c.AH)({}) },
					R = (0, n.PA)((x) => {
						const i = (0, u.u)(),
							l = (0, v.v6)('resultTracker', i, {}, x),
							y = { impression: !0, click: !0 },
							{ children: E, result: p, track: D, controller: _, className: B, internalClassName: I, disableStyles: S, style: s } = l,
							a = { ...y, ...D },
							{ ref: h, inViewport: C } = (0, m.Q)();
						C && a.impression && _?.track.product.impression(p);
						const d = {};
						return (
							S ? s && (d.css = [s]) : (d.css = [f.ResultTracker(), s]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${_?.type}-result-tracker`, B, I),
								onClick: (w) => {
									a.click && _?.track.product.click(w, p);
								},
								ref: h,
								...d,
								children: E,
							})
						);
					});
				e.d(r, ['o', 0, R]);
			},
			'./components/src/hooks/useIntersection.tsx'(A, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (n, b = '0px', o = !1) => {
					const [u, v] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const m = new IntersectionObserver(
								([f]) => {
									v(f.isIntersecting), o && f.isIntersecting && m.unobserve(n.current);
								},
								{ rootMargin: b }
							);
							return (
								n.current && m.observe(n.current),
								() => {
									m.unobserve(n.current);
								}
							);
						}, []),
						u
					);
				};
				e.d(r, ['v', 0, c]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(A, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					n = (o, u = {}) => {
						const { rootMargin: v = '0px', fireOnce: m = !1, threshold: f = 0, minVisibleTime: R = 0 } = u,
							[x, i] = (0, t.J0)(!1),
							l = (0, t.li)(null),
							y = (0, t.li)(null),
							[E, p] = (0, t.J0)(0),
							D = (0, t.hb)((_) => {
								(o.current = _), p((B) => B + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								i(!1);
								let _ = null,
									B = null;
								if (!window.IntersectionObserver || !o.current) return;
								const I = () => {
										B && (window.clearInterval(B), (B = null));
									},
									S = () => {
										R > 0
											? ((y.current = Date.now()),
											  l.current && window.clearTimeout(l.current),
											  (l.current = window.setTimeout(() => {
													i(!0), m && o.current && _ && _.unobserve(o.current);
											  }, R)))
											: (i(!0), m && o.current && _ && _.unobserve(o.current));
									},
									s = () => {
										l.current && window.clearTimeout(l.current), (l.current = null), (y.current = null), i(!1);
									};
								return (
									(_ = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? o.current && b(o.current)
													? (I(), S())
													: (s(),
													  B ||
															(B = window.setInterval(() => {
																if (!o.current) {
																	I();
																	return;
																}
																b(o.current) && (I(), S());
															}, c)))
												: (I(), s());
										},
										{ rootMargin: v, threshold: f }
									)),
									o.current && _.observe(o.current),
									() => {
										i(!1), I(), l.current && window.clearTimeout(l.current), _ && o.current && _.unobserve(o.current);
									}
								);
							}, [o, E]),
							{ inViewport: x, updateRef: D }
						);
					};
				function b(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(r, ['v', 0, n]);
			},
			'./components/src/types.ts'(A, r, e) {
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
			'./components/src/utilities/componentArgs.ts'(A, r, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(A, r, e) {
				'use strict';
				e.d(r, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					b = 1e3;
				function o(u) {
					const v = (0, t.li)(null),
						{ inViewport: m, updateRef: f } = (0, c.v)(v, { fireOnce: !0, threshold: n, minVisibleTime: b, ...u });
					return { ref: v, inViewport: m, updateRef: f };
				}
			},
			'./components/src/utilities/snapify.ts'(A, r, e) {
				'use strict';
				e.d(r, { p: () => _ });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					R = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					i = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					l = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					D = { globals: { siteId: 'atkzs2' } };
				class _ {
					static recommendation(a) {
						const h = a.id;
						if (p[h]) return p[h];
						const C = (p[h] = I({ client: D, controller: a }));
						return (
							C.on('afterStore', async ({ controller: d }, w) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await w();
							}),
							C.init(),
							C
						);
					}
					static autocomplete(a) {
						const h = a.id;
						if (p[h]) return p[h];
						const C = (p[h] = S({ client: D, controller: a }));
						return (
							C.on('afterStore', async ({ controller: d }, w) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await w();
							}),
							C.init(),
							C
						);
					}
					static search(a) {
						const h = a.id;
						if (p[h]) return p[h];
						const C = (p[h] = B({ client: D, controller: a }));
						return (
							C.on('afterStore', async ({ controller: d }, w) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await w();
							}),
							C.init(),
							C
						);
					}
				}
				function B(s) {
					const a = new f.V(new x.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), R.X);
					return new c.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new v.U(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new i.E(),
						profiler: new l.U(),
						logger: new y.V(),
						tracker: new E.J(s.client.globals),
					});
				}
				function I(s) {
					const a = new f.V(new x.E(), R.X).detach(!0);
					return new b.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new m.t(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new i.E(),
						profiler: new l.U(),
						logger: new y.V(),
						tracker: new E.J(s.client.globals),
					});
				}
				function S(s) {
					const a = new f.V(new x.E(), R.X).detach();
					return new n.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new u.Y(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new i.E(),
						profiler: new l.U(),
						logger: new y.V(),
						tracker: new E.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(A, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					b = (o) => {
						const u = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								u.current && o.className?.includes('lang-') && !o.className?.includes(n) && window?.Prism?.highlightElement(u.current);
							}, [o.className, o.children, u]),
							(0, t.Y)('code', { ...o, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, b]);
			},
			'../../node_modules/memoizerific sync recursive'(A) {
				function r(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (A.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundle-RecommendationBundle-stories.fd9dcdf9.iframe.bundle.js.map
