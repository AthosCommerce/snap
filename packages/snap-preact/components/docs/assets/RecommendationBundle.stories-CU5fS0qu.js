import { ah as s, j as r } from './iframe-U9T2Y9ZS.js';
import { S as c } from './snapify-Df13VkEj.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import { RecommendationBundle as l } from './RecommendationBundle-Yp4uL5EJ.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
import './useDisplaySettings-9sk5Dt1c.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-Dsv4fCi7.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './Button-rwG4FGUK.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection-D52kaMEq.js';
import './Result-Dham3Ici.js';
import './types-DqusP3LW.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './Image-C5uuJXju.js';
import './CalloutBadge-hFFhia-q.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-DUxc2ffg.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './names-Cka5BSlk.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-9eXTq04g.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-D-Jc6Lj4.js';
import './createImpressionObserver-B76-2cq4.js';
import './RecommendationProfileTracker-1483CJFp.js';
import './Carousel-bRyEtExy.js';
const d = `# RecommendationBundle

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
`,
	{ fn: p } = __STORYBOOK_MODULE_TEST__,
	ne = {
		title: 'Templates/RecommendationBundle',
		component: l,
		parameters: { docs: { description: { component: d } } },
		decorators: [(e) => r('div', { style: { maxWidth: '1200px' }, children: r(e, {}) })],
		args: { onAddToCart: p() },
		argTypes: {
			controller: { description: 'Controller reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			results: {
				description: 'Results store reference, overrides controller.store.results',
				type: { required: !1 },
				table: { type: { summary: 'Results store object' } },
				control: !1,
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
				control: { type: 'select', options: [...Object.keys(s)] },
			},
			ctaButtonText: {
				description: 'text to render in add to cart button',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
				control: { type: 'text' },
			},
			ctaIcon: {
				desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
				control: { type: 'select', options: [...Object.keys(s)] },
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
			ctaSlot: { description: 'Slot for custom add to cart component', table: { category: 'Templates Legal', type: { summary: 'component' } } },
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
			...i,
		},
	},
	u = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
	n = c.recommendation(u),
	o = {
		render: (e, { loaded: { controller: t } }) => r(l, { ...e, controller: t, results: t.store.results }),
		loaders: [
			async () => (
				n.on('afterStore', async ({ controller: e }, t) => {
					e.store.results.forEach((a) => (a.mappings.core.url = '#')), await t();
				}),
				await n.search(),
				{ controller: n }
			),
		],
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (props: RecommendationBundleProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: RecommendationController;
    };
  }) => {
    return <RecommendationBundle {...props} controller={controller} results={controller.store.results} />;
  },
  loaders: [async () => {
    snapInstance.on('afterStore', async ({
      controller
    }: {
      controller: RecommendationController;
    }, next: Next) => {
      // neutralize mock links. '#' is safe here because recommendations hold no UrlManager state —
      // in a Search or Autocomplete story it would clear the hash-stored filter/sort/pageSize params.
      controller.store.results.forEach((result: Product) => result.mappings.core!.url = '#');
      await next();
    });
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const re = ['Default'];
export { o as Default, re as __namedExportsOrder, ne as default };
