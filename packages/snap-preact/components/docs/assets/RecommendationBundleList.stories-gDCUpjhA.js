import { ah as a, j as r } from './iframe-0uTqSs9S.js';
import { R as s } from './RecommendationBundleList-DYezSYha.js';
import { S as c } from './snapify-B992lD8l.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './componentNameToClassName-btPHBToT.js';
import './useLang-Dx66cFD0.js';
import './Image-C3O8T0nj.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './Button-CmsiLEAv.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './RecommendationBundle-CIaWZLgO.js';
import './useDisplaySettings-CrQOlxmk.js';
import './Checkbox-7fOTHZL3.js';
import './useIntersection--tMWEcR1.js';
import './Result-DV0wVcu6.js';
import './types-DqusP3LW.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
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
		"# RecommendationBundleList\n\nRenders a recommended bundle of products with seed, recommendations in list form, and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed the click event and an array of the selected products. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n\n### description\nThe `description` prop specifies the bundle description\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />\n```\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed result text should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onAddToCart: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### limit\nThe `limit` prop limits the number of results rendered. Defaults to `5`.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string. Defaults to `false` (no icon).\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. Defaults to `2`.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enabled` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the RecommendationBundleList component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `seedText` | Seed product label text | _(none)_ |\n| `ctaButtonText` | Add to cart CTA button text | _(none)_ |\n| `ctaButtonSuccessText` | CTA button text after successful add | _(none)_ |\n| `ctaSubtotalTitle` | Subtotal section title | `cartStore` (CartStore) |\n\n### Example\n\n```tsx\n<RecommendationBundleList\n	controller={controller}\n	lang={{\n		ctaButtonText: {\n			value: 'Add Bundle to Cart',\n		},\n	}}\n/>\n```\n",
	{ fn: m } = __STORYBOOK_MODULE_TEST__,
	re = {
		title: 'Templates/RecommendationBundleList',
		component: s,
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
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 5 } },
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
				control: { type: 'select', options: [...Object.keys(a)] },
			},
			preselectedCount: {
				description: 'Number of results to have selected by default. (seed included)',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 2 } },
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
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 2e3 } },
				control: { type: 'number' },
			},
			ctaButtonSuccessText: {
				description: 'text to temporarily render in the add to cart button after it is clicked',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
				control: { type: 'text' },
			},
			ctaSlot: {
				description: 'Slot for custom add to cart component',
				table: { category: 'Templates Legal', type: { summary: 'component' }, defaultValue: { summary: 'CTASlot' } },
			},
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
			lang: {
				description: 'Custom language keys (`seedText`, `ctaButtonText`, `ctaButtonSuccessText`, `ctaSubtotalTitle`)',
				table: { type: { summary: 'Partial<RecommendationBundleLang>' } },
				control: { type: 'object' },
			},
			...i,
		},
	},
	u = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
	n = c.recommendation(u),
	o = {
		render: (e, { loaded: { controller: t } }) => r(s, { ...e, controller: t, results: t.store.results }),
		loaders: [
			async () => (
				n.on('afterStore', async ({ controller: e }, t) => {
					e.store.results.forEach((l) => (l.mappings.core.url = '#')), await t();
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
  render: (props: RecommendationBundleListProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: RecommendationController;
    };
  }) => {
    return <RecommendationBundleList {...props} controller={controller} results={controller.store.results} />;
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
const se = ['Default'];
export { o as Default, se as __namedExportsOrder, re as default };
