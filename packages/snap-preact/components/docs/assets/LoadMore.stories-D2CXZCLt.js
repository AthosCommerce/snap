import { ah as a, j as i } from './iframe-Bc4KSH0T.js';
import { L as t } from './LoadMore-tgvuskFW.js';
import { S as s } from './snapify-DBnzfZp8.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useIntersection-C53zN6Qj.js';
import './useLang-Dx66cFD0.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const c =
		"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```tsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the LoadMore component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `loadMoreButton` | Load more button text | `pagination` (SearchPaginationStore) |\n| `progressText` | Progress indicator text | `pagination` (SearchPaginationStore) |\n\n### Example\n\n```tsx\n<LoadMore\n	pagination={controller.store.pagination}\n	lang={{\n		loadMoreButton: {\n			value: 'Load More Products',\n			attributes: {\n				'aria-label': 'Load more products',\n			},\n		},\n		progressText: {\n			value: (data) => `You've viewed ${data.pagination?.end} of ${data.pagination?.totalResults} products`,\n		},\n	}}\n/>\n```\n",
	{ fn: d } = __STORYBOOK_MODULE_TEST__,
	v = {
		title: 'Molecules/LoadMore',
		component: t,
		parameters: { docs: { description: { component: c } } },
		args: { onClick: d() },
		argTypes: {
			controller: { description: 'Search Controller reference', table: { type: { summary: 'Search controller object' } }, control: !1 },
			pagination: { description: 'Pagination store reference', table: { type: { summary: 'pagination store object' } }, control: !1 },
			autoFetch: {
				description: 'Automatically load more results when component comes into viewport',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			intersectionOffset: {
				defaultValue: '0px',
				description: 'Defines the IntersectionObserver rootMargin',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '0px' } },
				control: { type: 'text' },
			},
			loading: {
				description: 'Loading state',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			loadMoreText: {
				defaultValue: 'Load More',
				description: 'Load more button text',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Load More' } },
				control: { type: 'text' },
			},
			color: {
				description: 'Color of the indicator active state',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#cccccc' } },
				control: { type: 'color' },
			},
			backgroundColor: {
				description: 'Background color of the indicator',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#f8f8f8' } },
				control: { type: 'color' },
			},
			progressIndicatorWidth: {
				description: 'Progress indicator width in pixels',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '300px' } },
				control: { type: 'text' },
			},
			progressIndicatorSize: {
				description: 'Progress indicator size in pixels',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '5px' } },
				control: { type: 'text' },
			},
			hideProgressIndicator: {
				description: 'Hide progress indicator',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideProgressText: {
				description: 'Hide progress text',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			loadingIcon: {
				description: 'Loading icon',
				defaultValue: 'spinner',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'spinner' } },
				options: [...Object.keys(a)],
				control: { type: 'select' },
			},
			loadingLocation: {
				description: 'Location of loading indicator',
				defaultValue: 'button',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'button' } },
				options: ['button', 'outside'],
				control: { type: 'select' },
			},
			onClick: {
				description: 'Button click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
				control: !1,
			},
			...l,
		},
	},
	o = s.search({
		id: 'LoadMore',
		globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
	}),
	e = { render: (n, { loaded: { controller: r } }) => i(t, { ...n, controller: r }), loaders: [async () => (await o.search(), { controller: o })] };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: LoadMoreProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <LoadMore {...args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const w = ['Default'];
export { e as Default, w as __namedExportsOrder, v as default };
