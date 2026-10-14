import { ah as i, j as l } from './iframe-CXSVAHru.js';
import { F as s } from './FilterSummary-D-y17uWR.js';
import { S as p } from './snapify-CnhKBMyG.js';
import { c as m } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Filter-DHh9Ae_k.js';
import './Button-YZishUF-.js';
import './useA11y-BuGQuOJb.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const u =
		"# Filter Summary\n\nRenders all selected filters including a wrapper with a title and a 'clear all' button. \n\n## Components Used\n- Filter\n## Usage\n```tsx\nimport { FilterSummary } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FilterSummary controller={controller} />\n```\n\n### filters\nThe `filters` prop specifies a reference to the filters store array. If no filters prop is passed in, the component will default to using the filters in controller.store. \n\n```tsx\n<FilterSummary filters={controller.store.filters} />\n```\n\n### title\nThe `title` prop specifies the title of the filter summary wrapper. The default is `'Current Filters'`.\n\n```tsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} />\n```\n\n### hideTitle\nThe `hideTitle` prop will hide the title element.\n\n```tsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} hideTitle={true}/>\n```\n### filterIcon\n The `filterIcon` prop specifies the icon to render for each filter. It can be an icon name string, a `Partial<IconProps>` object to override icon props such as `size` and `color`, or `false` to disable the icon.\n\n```tsx\n<FilterSummary filters={controller.store.filters} filterIcon={'close-thin'} />\n```\nor \n```tsx\n<FilterSummary filters={controller.store.filters} filterIcon={{ icon: 'close-thin', size: 14, color: '#eee' }} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon for the 'clear all' button. It can be a string icon name, a `Partial<IconProps>` object to override icon props, or `false` to disable the icon. \n\n```tsx\n<FilterSummary filters={controller.store.filters} clearAllIcon={'close-thin'} />\n```\nor\n```tsx\n<FilterSummary filters={controller.store.filters} clearAllIcon={{ icon: 'close-thin', size: 14, color: '#eee' }} />\n```\n\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel` of the `<Filter />` sub-component.\n\n```tsx\n<FilterSummary filters={controller.store.filters} separator={': '} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop prevents the filter label (selected facet name) from displaying. Only the value selected will be displayed. Use of this prop will nullify the `separator` prop.\n\n```tsx\n<FilterSummary filters={controller.store.filters} hideFacetLabel={true} />\n```\n\n### clearAllLabel\nThe `clearAllLabel` prop is the 'clear all' button text. This is passed to the `<Filter />` sub-component `valueLabel` prop. The default value is `'Clear All'`.\n\n```tsx\n<FilterSummary filters={controller.store.filters} clearAllLabel={'Clear All'} />\n```\n\n### hideClearAll\nThe `hideClearAll` prop prevents the 'clear all' button from rendering.\n\n```tsx\n<FilterSummary filters={controller.store.filters} hideClearAll={true} />\n```\n\n### hideNoFiltersText\nThe `hideNoFiltersText` prop prevents the component from rendering when there are no filters applied. The default value is `true`. Set it to `false` to render the `noFiltersText` when there are no filters.\n\n```tsx\n<FilterSummary filters={controller.store.filters} hideNoFiltersText={false} />\n```\n\n### noFiltersText\nThe `noFiltersText` prop specifies the text to show when there are no filters applied. Only rendered when `hideNoFiltersText` is `false`. The default value is `'No filters applied'`.\n\n```tsx\n<FilterSummary filters={controller.store.filters} hideNoFiltersText={false} noFiltersText={'No filters applied'} />\n```\n\n### type\nThe `type` prop determines what layout the filters should be rendered as. Options are `list` or `inline`. `inline` is default.\n\n```tsx\n<FilterSummary filters={controller.store.filters} type={'list'} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when any of the selected filters are clicked.\n\n```tsx\n<FilterSummary filters={controller.store.filters} onClick={(e, filter) => {console.log(e, filter)}} />\n```\n\n#### onClearAllClick\nThe `onClearAllClick` prop allows for a custom callback function for when the 'clear all' button is clicked.\n\n```tsx\n<FilterSummary filters={controller.store.filters} onClearAllClick={(e) => {console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FilterSummary component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Filter summary section title | `filters` (FilterType[]) |\n| `clearAllLabel` | Clear all filters button text | `label` (string), `value` (string) |\n| `noFiltersText` | Text shown when no filters are applied (requires `hideNoFiltersText` to be `false`) | `controller` (SearchController \\| AutocompleteController) |\n\n### Example\n\n```tsx\n<FilterSummary\n	filters={controller.store.filters}\n	lang={{\n		title: {\n			value: 'Active Filters',\n		},\n		clearAllLabel: {\n			value: 'Clear All Filters',\n		},\n	}}\n/>\n```\n",
	{ fn: c } = __STORYBOOK_MODULE_TEST__,
	w = {
		title: 'Organisms/FilterSummary',
		component: s,
		parameters: { docs: { description: { component: u } } },
		decorators: [(e) => l('div', { style: { maxWidth: '300px' }, children: l(e, {}) })],
		args: { onClick: c(), onClearAllClick: c() },
		argTypes: {
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller object' } }, control: !1 },
			filters: { description: 'Filters object', type: { required: !1 }, table: { type: { summary: 'object' } }, control: !1 },
			title: {
				defaultValue: 'Current Filters',
				description: 'Filters object',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Current Filters' } },
				control: { type: 'text' },
			},
			hideTitle: {
				description: 'Hide title',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: 'boolean',
			},
			hideFacetLabel: {
				description: 'Hide filter facet label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: 'boolean',
			},
			separator: {
				defaultValue: ':',
				description: 'Filter delimiter',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			hideClearAll: {
				description: 'Hide filter clear all button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: 'boolean',
			},
			clearAllLabel: {
				defaultValue: 'Clear All',
				description: 'Text to show on clear all filters',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
				control: 'text',
			},
			hideNoFiltersText: {
				description: 'Prevents the no filters text from rendering when there are no filters applied',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: 'boolean',
			},
			noFiltersText: {
				defaultValue: 'No filters applied',
				description: 'Text to show when there are no filters applied (requires hideNoFiltersText to be false)',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'No filters applied' } },
				control: 'text',
			},
			clearAllIcon: {
				defaultValue: 'close-thin',
				description: 'Icon name',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
				options: [...Object.keys(i)],
				control: { type: 'select' },
			},
			filterIcon: {
				defaultValue: 'close-thin',
				description: 'Icon name',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
				options: [...Object.keys(i)],
				control: { type: 'select' },
			},
			onClick: { description: 'Filter click event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			type: {
				defaultValue: 'inline',
				description: 'display type',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'inline' } },
				options: ['inline', 'list'],
				control: { type: 'select' },
			},
			onClearAllClick: {
				description: 'Filter clear click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			...m,
		},
	},
	t = p.search({
		id: 'FilterSummary',
		globals: {
			siteId: 'atkzs2',
			filters: [
				{ type: 'value', field: 'color', value: 'Blue' },
				{ type: 'value', field: 'size', value: 'Small' },
			],
		},
	}),
	n = { render: (e, { loaded: { controller: r } }) => l(s, { ...e, controller: r }), loaders: [async () => (await t.search(), { controller: t })] },
	o = {
		render: (e, { loaded: { controller: r } }) => l(s, { ...e, controller: r }),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { hideFacetLabel: !0 },
	},
	a = {
		render: (e, { loaded: { controller: r } }) => l(s, { ...e, controller: r }),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { title: 'Selected Filters' },
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FilterSummaryProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <FilterSummary {...args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...n.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FilterSummaryProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <FilterSummary {...args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    hideFacetLabel: true
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FilterSummaryProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <FilterSummary {...args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    title: 'Selected Filters'
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
const A = ['Regular', 'noFacetLabel', 'customTitle'];
export { n as Regular, A as __namedExportsOrder, a as customTitle, w as default, o as noFacetLabel };
