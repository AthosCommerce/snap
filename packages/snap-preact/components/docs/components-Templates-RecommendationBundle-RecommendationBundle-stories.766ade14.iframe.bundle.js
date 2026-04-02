(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6225],
		{
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx'(w, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => l, __namedExportsOrder: () => d, default: () => y });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					b = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const _ = `# RecommendationBundle

Renders a recommended bundle of products with seed, carousel of recommendations and add to cart display.

## Sub-components
- Carousel
- Result (default)

## Usage
\`\`\`jsx
import { RecommendationBundle } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### onAddToCart 
the \`onAddToCart\` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`. Note the first result will be displayed as the \`seed\` product. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />
\`\`\`

### carousel 
The \`carousel\` prop specifies an object of carousel settings. These settings will be merged with the default settings (listed below). All valid Carousel component props (and any non-documented SwiperJS props) can be used here. The below example uses the \`prevButton\`, \`nextButton\` and \`loop\` props from the Carousel:

\`\`\`jsx
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

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ enabled:false } />
\`\`\`

### hideSeed
The \`hideSeed\` prop specifies if the seed result should be rendered or not.  

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />
\`\`\`

### seedInCarousel
The \`seedInCarousel\` prop is a sub prop under the \`carousel\` prop. It specifies if the seed product should be included in the carousel or not.  

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ seedInCarousel:true } />
\`\`\`

### pagination
The \`pagination\` prop is a sub prop under the \`carousel\` prop. It specifies if the carousel should display pagination dots. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ pagination:true } />
\`\`\`

### hideButtons
The \`hideButtons\` is a sub prop under the \`carousel\` prop. It specifies if the carousel should hide prev/next buttons.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ hideButtons:true }><Recommendation/>
\`\`\`

### prevButton
The \`prevButton\` prop is a sub prop under the \`carousel\` prop. It specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ prevButton: '<' } />
\`\`\`

### nextButton
The \`nextButton\` prop  is a sub prop under the \`carousel\` prop. It specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ nextButton: '>' } />
\`\`\`

### title
The \`title\` prop specifies the bundle title

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />
\`\`\`

### description
The \`description\` prop specifies the bundle description

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />
\`\`\`

### resultComponent
The \`resultComponent\` prop allows for a custom result component to be rendered. This component will be passed the following props -

\`\`\`jsx
	{ 
		result: Product, 
		seed: boolean, 
		selected: boolean, 
		onProductSelect: (result:Product) => void
	}
\`\`\`

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />
\`\`\`

### ctaButtonText
The \`ctaButtonText\` prop specifies the inner text to render in the add to cart button.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />
\`\`\`

### ctaButtonSuccessText
The \`ctaButtonSuccessText\` prop specifies text to temporarily render in the add to cart button after it is clicked.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />
\`\`\`

### ctaButtonSuccessTimeout
The \`ctaButtonSuccessTimeout\` prop specifies number of ms to show success text in add to cart button before reverting back to normal text

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />
\`\`\`

### ctaIcon
The \`ctaIcon\` prop specifies the icon to render in the CTA. Takes an object with \`Icon\` component props or a string.     

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />
\`\`\`

### ctaInline
The \`ctaInline\` prop specifies if the add to cart display should be block or inline witht the carousel.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />
\`\`\`

### ctaSlot
The \`ctaSlot\` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -

\`\`\`jsx	
	{ 
		cartStore: CartStore;
		onclick: (e:any) => void
	}
\`\`\`

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />
\`\`\`

### preselectedCount
The \`preselectedCount\` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example \`preselectedCount={3}\` would be \`seed\` + 2 preselected items. If not provided, this will default to however many products are initially visible. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />
\`\`\`

### seedText
The \`seedText\` prop specifies text to be rendered as a badge in the seed product.   

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={"Main Product"} />
\`\`\`

### separatorIcon
The \`separatorIcon\` prop specifies the icon to render between products. Takes an object with \`Icon\` component props or a string.     

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />
\`\`\`

### separatorIconSeedOnly
The \`separatorIconSeedOnly\` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />
\`\`\`


### hideCheckboxes
The \`hideCheckboxes\` prop specifies if the bundle checkboxes should be rendered. 

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />
\`\`\`

### vertical
The \`vertical\` prop sets the carousel scroll direction to vertical.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />
\`\`\`

### hideSeedText
The \`hideSeedText\` prop sets determines if the seed text should render.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />
\`\`\`


### limit
The \`limit\` prop limits the number of products rendered.

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} limit={5} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\` and \`Pagination\` modules by default.

\`\`\`jsx
import { Scrollbar } from 'swiper';
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`jsx
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

\`\`\`jsx
<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={defaultRecommendationBreakpoints} />
\`\`\`

`;
				var p = e('./components/src/components/Atoms/Icon/paths.tsx');
				const y = {
						title: 'Templates/RecommendationBundle',
						component: a.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: b.Z } }, children: _ }), (0, o.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(f) => (0, o.Y)('div', { style: { maxWidth: '900px', height: '500px' }, children: (0, o.Y)(f, {}) })],
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
					B = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					v = i.p.recommendation(B),
					l = (f, { loaded: { controller: x } }) => (0, o.Y)(a.g, { ...f, controller: x, results: x.store.results });
				(l.loaders = [
					async () => (
						v.on('afterStore', async ({ controller: f }, x) => {
							f.store.results.forEach((h) => (h.mappings.core.url = 'javascript:void(0);')), await x();
						}),
						await v.search(),
						{ controller: v }
					),
				]),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
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
								...l.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/hooks/useIntersection.tsx'(w, r, e) {
				'use strict';
				e.d(r, { v: () => c });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (a, b = '0px', t = !1) => {
					const [i, _] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const p = new IntersectionObserver(
								([y]) => {
									_(y.isIntersecting), t && y.isIntersecting && p.unobserve(a.current);
								},
								{ rootMargin: b }
							);
							return (
								a.current && p.observe(a.current),
								() => {
									p.unobserve(a.current);
								}
							);
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, r, e) {
				'use strict';
				e.d(r, { v: () => a });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					a = (t, i = {}) => {
						const { rootMargin: _ = '0px', fireOnce: p = !1, threshold: y = 0, minVisibleTime: B = 0 } = i,
							[v, l] = (0, o.J0)(!1),
							d = (0, o.li)(null),
							f = (0, o.li)(null),
							[x, h] = (0, o.J0)(0),
							R = (0, o.hb)((g) => {
								(t.current = g), h((C) => C + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								l(!1);
								let g = null,
									C = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										C && (window.clearInterval(C), (C = null));
									},
									A = () => {
										B > 0
											? ((f.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													l(!0), p && t.current && g && g.unobserve(t.current);
											  }, B)))
											: (l(!0), p && t.current && g && g.unobserve(t.current));
									},
									n = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (f.current = null), l(!1);
									};
								return (
									(g = new IntersectionObserver(
										([s]) => {
											s.isIntersecting
												? t.current && b(t.current)
													? (I(), A())
													: (n(),
													  C ||
															(C = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																b(t.current) && (I(), A());
															}, c)))
												: (I(), n());
										},
										{ rootMargin: _, threshold: y }
									)),
									t.current && g.observe(t.current),
									() => {
										l(!1), I(), d.current && window.clearTimeout(d.current), g && t.current && g.unobserve(t.current);
									}
								);
							}, [t, x]),
							{ inViewport: v, updateRef: R }
						);
					};
				function b(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(w, r, e) {
				'use strict';
				e.d(r, { F: () => o });
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
			},
			'./components/src/utilities/createImpressionObserver.ts'(w, r, e) {
				'use strict';
				e.d(r, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					b = 1e3;
				function t(i) {
					const _ = (0, o.li)(null),
						{ inViewport: p, updateRef: y } = (0, c.v)(_, { ...i, fireOnce: !0, threshold: a, minVisibleTime: b });
					return { ref: _, inViewport: p, updateRef: y };
				}
			},
			'./components/src/utilities/snapify.ts'(w, r, e) {
				'use strict';
				e.d(r, { p: () => g });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					_ = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					B = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					l = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					R = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(s) {
						const m = s.id;
						if (h[m]) return h[m];
						const T = (h[m] = I({ client: R, controller: s }));
						return (
							T.on('afterStore', async ({ controller: u }, j) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await j();
							}),
							T.init(),
							T
						);
					}
					static autocomplete(s) {
						const m = s.id;
						if (h[m]) return h[m];
						const T = (h[m] = A({ client: R, controller: s }));
						return (
							T.on('afterStore', async ({ controller: u }, j) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await j();
							}),
							T.init(),
							T
						);
					}
					static search(s) {
						const m = s.id;
						if (h[m]) return h[m];
						const T = (h[m] = C({ client: R, controller: s }));
						return (
							T.on('afterStore', async ({ controller: u }, j) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await j();
							}),
							T.init(),
							T
						);
					}
				}
				function C(n) {
					const s = new y.V(new v.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), B.X);
					return new c.Tp(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new _.U(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new f.V(),
						tracker: new x.J(n.client.globals),
					});
				}
				function I(n) {
					const s = new y.V(new v.E(), B.X).detach(!0);
					return new b.c(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new p.t(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new f.V(),
						tracker: new x.J(n.client.globals),
					});
				}
				function A(n) {
					const s = new y.V(new v.E(), B.X).detach();
					return new a.Z(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new i.Y(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new f.V(),
						tracker: new x.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, r, e) {
				'use strict';
				e.d(r, { Z: () => b });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					b = (t) => {
						const i = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								i.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(i.current);
							}, [t.className, t.children, i]),
							(0, o.Y)('code', { ...t, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function r(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (w.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundle-RecommendationBundle-stories.766ade14.iframe.bundle.js.map
