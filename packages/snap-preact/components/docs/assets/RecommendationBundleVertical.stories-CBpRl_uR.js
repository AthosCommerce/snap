import { ah as l, j as r } from './iframe-0uTqSs9S.js';
import { RecommendationBundleVertical as a } from './RecommendationBundleVertical-DTVwS4ss.js';
import { S as c } from './snapify-B992lD8l.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './RecommendationBundle-CIaWZLgO.js';
import './useDisplaySettings-CrQOlxmk.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-7fOTHZL3.js';
import './useA11y-BuGQuOJb.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './Button-CmsiLEAv.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection--tMWEcR1.js';
import './Result-DV0wVcu6.js';
import './types-DqusP3LW.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './Image-C3O8T0nj.js';
import './CalloutBadge-DXapTNdX.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-ERPkfVOZ.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './names-Cka5BSlk.js';
import './Slideshow-zOCrnuUn.js';
import './Grid-BRtXjrhJ.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-PZ5HrgK2.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-Cu6M_iF6.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './RecommendationProfileTracker-BY3nS6Ea.js';
import './Carousel-CwyRxZ5C.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
const d =
		"# RecommendationBundleVertical\n\nVertically renders a recommended bundle of products with seed, recommendations and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed the click event and an array of the selected products. \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### description\nThe `description` prop specifies the bundle description\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onAddToCart: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, all products will be preselected.\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed product badge text should be rendered or not.\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n### limit\nThe `limit` prop limits the number of products rendered.\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={3} />\n```\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the bundle checkboxes should be rendered. \n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enabled` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleVertical controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the bundle at various viewports. \n\nThe object key specified the viewport for when the parameters will be applied. \n\nThe configuration can take any **`RecommendationBundleVertical props`**, \n\n```typescript\nconst customRecommendationBreakpoints = {\n	0: {\n		limit: 2\n	},\n	768: {\n		limit: 3\n	},\n	1024: {\n		limit: 4\n	},\n	1200: {\n		limit: 5\n	},\n};\n```\n\n```tsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={customRecommendationBreakpoints} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the RecommendationBundleVertical component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `seedText` | Seed product label text | _(none)_ |\n| `ctaButtonText` | Add to cart CTA button text | _(none)_ |\n| `ctaButtonSuccessText` | CTA button text after successful add | _(none)_ |\n| `ctaSubtotalTitle` | Subtotal section title | `cartStore` (CartStore) |\n\n### Example\n\n```tsx\n<RecommendationBundleVertical\n	controller={controller}\n	lang={{\n		ctaButtonText: {\n			value: 'Add Bundle to Cart',\n		},\n	}}\n/>\n```\n",
	{ fn: m } = __STORYBOOK_MODULE_TEST__,
	re = {
		title: 'Templates/RecommendationBundleVertical',
		component: a,
		parameters: { docs: { description: { component: d } } },
		decorators: [(e) => r('div', { style: { maxWidth: '500px' }, children: r(e, {}) })],
		args: { onAddToCart: m() },
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
				description: 'recommendation title',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string | JSX Element' },
					defaultValue: { summary: 'controller.store.profile.display.templateParameters.title' },
				},
				control: { type: 'text' },
			},
			description: {
				description: 'recommendation bundle description',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string | JSX Element' },
					defaultValue: { summary: 'controller.store.profile.display.templateParameters.description' },
				},
				control: { type: 'text' },
			},
			onAddToCart: {
				description: 'onClick event handler for add bundle to cart button in CTA',
				table: { category: 'Templates Legal', type: { summary: '(e: MouseEvent, items: Product[]) => void | Promise<void>' } },
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
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'This Product' } },
				control: { type: 'text' },
			},
			hideSeed: {
				description: 'Hide/show seed result',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideSeedText: {
				description: 'Hide seed product badge text',
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
				description: 'Icon to render between results',
				table: { category: 'Templates Legal', type: { summary: 'IconType | Partial<IconProps> | false' }, defaultValue: { summary: !1 } },
				control: { type: 'select', options: [...Object.keys(l)] },
			},
			ctaButtonText: {
				description: 'text to render in add to cart button',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
				control: { type: 'text' },
			},
			ctaIcon: {
				description: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
				table: { category: 'Templates Legal', type: { summary: 'IconType | Partial<IconProps> | false' }, defaultValue: { summary: 'bag' } },
				control: { type: 'select', options: [...Object.keys(l)] },
			},
			ctaButtonSuccessText: {
				description: 'text to temporarily render in the add to cart button after it is clicked',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
				control: { type: 'text' },
			},
			ctaButtonSuccessTimeout: {
				description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
				defaultValue: 2e3,
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 2e3 } },
				control: { type: 'number' },
			},
			ctaSlot: { description: 'Slot for custom add to cart component', table: { category: 'Templates Legal', type: { summary: 'component' } } },
			lazyRender: {
				description: 'Lazy render settings object',
				defaultValue: { enabled: !0, offset: '10%' },
				table: {
					category: 'Templates Legal',
					type: { summary: '{ enabled: boolean, offset?: string }' },
					defaultValue: { summary: "{ enabled: true, offset: '10%' }" },
				},
				control: { type: 'object' },
			},
			breakpoints: {
				defaultValue: void 0,
				description: 'Responsive props keyed by viewport width',
				table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
				control: { type: 'object' },
			},
			lang: {
				description: 'Custom language keys (`seedText`, `ctaButtonText`, `ctaButtonSuccessText`, `ctaSubtotalTitle`)',
				table: { type: { summary: 'Partial<RecommendationBundleLang>' } },
				control: { type: 'object' },
			},
			...i,
		},
	},
	p = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
	n = c.recommendation(p),
	o = {
		render: (e, { loaded: { controller: t } }) => r(a, { ...e, controller: t, results: t.store.results }),
		loaders: [
			async () => (
				n.on('afterStore', async ({ controller: e }, t) => {
					e.store.results.forEach((s) => (s.mappings.core.url = '#')), await t();
				}),
				await n.search(),
				{ controller: n }
			),
		],
		args: { limit: 3 },
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (props: RecommendationBundleVerticalProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: RecommendationController;
    };
  }) => {
    return <RecommendationBundleVertical {...props} controller={controller} results={controller.store.results} />;
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
  }],
  args: {
    limit: 3
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const le = ['Default'];
export { o as Default, le as __namedExportsOrder, re as default };
