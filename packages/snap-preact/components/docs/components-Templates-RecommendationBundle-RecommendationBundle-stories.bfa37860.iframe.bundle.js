(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6225],
		{
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx'(v, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => c, __namedExportsOrder: () => d, default: () => g });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					b = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const _ = `# RecommendationBundle

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
		onclick: (e:any) => void
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
				var p = e('./components/src/components/Atoms/Icon/paths.tsx');
				const g = {
						title: 'Templates/RecommendationBundle',
						component: n.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(a.oz, { options: { overrides: { code: b.Z } }, children: _ }), (0, o.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, o.Y)('div', { style: { maxWidth: '1200px' }, children: (0, o.Y)(y, {}) })],
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
								control: { type: 'select', options: [...Object.keys(p.c)] },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(p.c)] },
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
							...t.F,
						},
					},
					w = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					C = i.p.recommendation(w),
					c = (y, { loaded: { controller: x } }) => (0, o.Y)(n.g, { ...y, controller: x, results: x.store.results });
				(c.loaders = [
					async () => (
						C.on('afterStore', async ({ controller: y }, x) => {
							y.store.results.forEach((h) => (h.mappings.core.url = 'javascript:void(0);')), await x();
						}),
						await C.search(),
						{ controller: C }
					),
				]),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
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
								...c.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/hooks/useIntersection.tsx'(v, r, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = (n, b = '0px', t = !1) => {
					const [i, _] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const p = new IntersectionObserver(
								([g]) => {
									_(g.isIntersecting), t && g.isIntersecting && p.unobserve(n.current);
								},
								{ rootMargin: b }
							);
							return (
								n.current && p.observe(n.current),
								() => {
									p.unobserve(n.current);
								}
							);
						}, []),
						i
					);
				};
				e.d(r, ['v', 0, a]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, r, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					n = (t, i = {}) => {
						const { rootMargin: _ = '0px', fireOnce: p = !1, threshold: g = 0, minVisibleTime: w = 0 } = i,
							[C, c] = (0, o.J0)(!1),
							d = (0, o.li)(null),
							y = (0, o.li)(null),
							[x, h] = (0, o.J0)(0),
							R = (0, o.hb)((f) => {
								(t.current = f), h((B) => B + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								c(!1);
								let f = null,
									B = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										B && (window.clearInterval(B), (B = null));
									},
									E = () => {
										w > 0
											? ((y.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													c(!0), p && t.current && f && f.unobserve(t.current);
											  }, w)))
											: (c(!0), p && t.current && f && f.unobserve(t.current));
									},
									s = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (y.current = null), c(!1);
									};
								return (
									(f = new IntersectionObserver(
										([l]) => {
											l.isIntersecting
												? t.current && b(t.current)
													? (I(), E())
													: (s(),
													  B ||
															(B = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																b(t.current) && (I(), E());
															}, a)))
												: (I(), s());
										},
										{ rootMargin: _, threshold: g }
									)),
									t.current && f.observe(t.current),
									() => {
										c(!1), I(), d.current && window.clearTimeout(d.current), f && t.current && f.unobserve(t.current);
									}
								);
							}, [t, x]),
							{ inViewport: C, updateRef: R }
						);
					};
				function b(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(r, ['v', 0, n]);
			},
			'./components/src/types.ts'(v, r, e) {
				'use strict';
				e.d(r, { Q: () => a, V: () => o });
				var o = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(o || {}),
					a = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(a || {});
			},
			'./components/src/utilities/componentArgs.ts'(v, r, e) {
				'use strict';
				const o = {
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
				e.d(r, ['F', 0, o]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, r, e) {
				'use strict';
				e.d(r, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					b = 1e3;
				function t(i) {
					const _ = (0, o.li)(null),
						{ inViewport: p, updateRef: g } = (0, a.v)(_, { ...i, fireOnce: !0, threshold: n, minVisibleTime: b });
					return { ref: _, inViewport: p, updateRef: g };
				}
			},
			'./components/src/utilities/snapify.ts'(v, r, e) {
				'use strict';
				e.d(r, { p: () => f });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					_ = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					w = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					c = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					R = { globals: { siteId: 'atkzs2' } };
				class f {
					static recommendation(l) {
						const u = l.id;
						if (h[u]) return h[u];
						const T = (h[u] = I({ client: R, controller: l }));
						return (
							T.on('afterStore', async ({ controller: m }, A) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await A();
							}),
							T.init(),
							T
						);
					}
					static autocomplete(l) {
						const u = l.id;
						if (h[u]) return h[u];
						const T = (h[u] = E({ client: R, controller: l }));
						return (
							T.on('afterStore', async ({ controller: m }, A) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await A();
							}),
							T.init(),
							T
						);
					}
					static search(l) {
						const u = l.id;
						if (h[u]) return h[u];
						const T = (h[u] = B({ client: R, controller: l }));
						return (
							T.on('afterStore', async ({ controller: m }, A) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await A();
							}),
							T.init(),
							T
						);
					}
				}
				function B(s) {
					const l = new g.V(new C.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), w.X);
					return new a.Tp(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new _.U(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new c.E(),
						profiler: new d.U(),
						logger: new y.V(),
						tracker: new x.J(s.client.globals),
					});
				}
				function I(s) {
					const l = new g.V(new C.E(), w.X).detach(!0);
					return new b.c(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new p.t(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new c.E(),
						profiler: new d.U(),
						logger: new y.V(),
						tracker: new x.J(s.client.globals),
					});
				}
				function E(s) {
					const l = new g.V(new C.E(), w.X).detach();
					return new n.Z(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new i.Y(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new c.E(),
						profiler: new d.U(),
						logger: new y.V(),
						tracker: new x.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, r, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					b = (t) => {
						const i = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								i.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(i.current);
							}, [t.className, t.children, i]),
							(0, o.Y)('code', { ...t, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, b]);
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function r(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (v.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundle-RecommendationBundle-stories.bfa37860.iframe.bundle.js.map
