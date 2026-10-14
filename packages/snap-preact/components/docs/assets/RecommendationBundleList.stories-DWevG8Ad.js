import { ah as a, j as r } from './iframe-CXSVAHru.js';
import { R as s } from './RecommendationBundleList-dRMiWvzm.js';
import { S as i } from './snapify-CnhKBMyG.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './componentNameToClassName-btPHBToT.js';
import './useLang-Dx66cFD0.js';
import './Image-BTbXUZuZ.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './Button-YZishUF-.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './RecommendationBundle-0wDv-fmh.js';
import './useDisplaySettings-D0_uZPs4.js';
import './Checkbox-CXNoFSPC.js';
import './useIntersection-Dwh_PZ6E.js';
import './Result-BacvSyPr.js';
import './types-DqusP3LW.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './CalloutBadge-CahbTmzQ.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-Bdkm_1kb.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './names-Cka5BSlk.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhdnIhb.js';
import './Dropdown-WSImKrUZ.js';
import './useClickOutside-G4DBoznB.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-D4h_hXCO.js';
import './createImpressionObserver-DI1SU3AN.js';
import './RecommendationProfileTracker-CJc76sRj.js';
import './Carousel-cDEo0lz5.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const d =
		"# RecommendationBundleList\n\nRenders a recommended bundle of products with seed, recommendations in list form, and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed result text should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onAddToCart: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### limit\nThe `limit` prop limits the number of results rendered\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n",
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
				control: { type: 'select', options: [...Object.keys(a)] },
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
			ctaSlot: { description: 'Slot for custom add to cart component', table: { category: 'Templates Legal', type: { summary: 'component' } } },
			lazyRender: {
				description: 'Lazy render settings object',
				defaultValue: { enabled: !0, offset: '10%' },
				table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
				control: { type: 'object' },
			},
			...c,
		},
	},
	p = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
	n = i.recommendation(p),
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
