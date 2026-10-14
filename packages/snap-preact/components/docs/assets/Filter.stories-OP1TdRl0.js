import { ah as i, j as s } from './iframe-CXSVAHru.js';
import { F as o } from './Filter-DHh9Ae_k.js';
import { S as c } from './snapify-CnhKBMyG.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Button-YZishUF-.js';
import './useA11y-BuGQuOJb.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const f =
		"# Filter\n\nRenders a facet filter.\n\n## Sub-components\n- Icon\n- Button\n\n## Usage\n```tsx\nimport { Filter } from '@athoscommerce/snap-preact/components';\n```\n\n### facetLabel\nThe `facetLabel` prop specifies the filter label. Typically set to the facet label.\n\n```tsx\n<Filter facetLabel={'Brand'} />\n```\n\n### valueLabel\nThe `valueLabel` prop specifies the filter value. Typically set to the facet value label.\n\n```tsx\n<Filter valueLabel={'Nike'} />\n```\n\n### url\nThe `url` prop specifies a link to clear the filter selection.\n\n```tsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} url={filter.url} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop will disable the filter facet label.\n\n```tsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} hideFacetLabel={true} />\n```\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel`.\n\n```tsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} separator={': '} />\n```\n\n### icon\nThe `icon` prop specifies the icon to render alongside the filter label/value. It can be an icon path/name string from the `Icon` component paths (see Icon Gallery), a `Partial<IconProps>` object to override `Icon` props such as `path`, `size`, and `color`, or `false` to disable the icon.\n\n```tsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} icon={'close-thin'} />\n```\nor \n```tsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} icon={{icon: 'close-thin', size: 12, color: '#eee'}} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when a filter is clicked.\n\n```tsx\n<Filter onClick={(e)=>{console.log(e)}}/>\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Filter component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `filter` | Filter text and attributes. `value` replaces the rendered value text (`.ss__filter__value`), `attributes` are applied to the filter link element | `label` (string), `value` (string) |\n\n### Example\n\n```tsx\n<Filter\n	lang={{\n		filter: {\n			attributes: {\n				'aria-label': (data) => `remove selected ${data.label} filter ${data.value}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: u } = __STORYBOOK_MODULE_TEST__,
	_ = {
		title: 'Molecules/Filter',
		component: o,
		parameters: { docs: { description: { component: f } } },
		args: { onClick: u() },
		argTypes: {
			filter: { description: 'Filter store object', table: { type: { summary: 'object' } }, control: !1 },
			facetLabel: { description: 'Filter field', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'text' } },
			valueLabel: { description: 'Filter value', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'text' } },
			url: { description: 'URL manager object', table: { type: { summary: 'object' } }, control: { type: 'object' } },
			hideFacetLabel: {
				description: 'Hide facet label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: 'boolean',
			},
			separator: { description: 'Filter delimiter', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'text' } },
			icon: {
				defaultValue: 'close-thin',
				description: 'Icon name',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
				options: [...Object.keys(i)],
				control: { type: 'select' },
			},
			onClick: {
				description: 'Facet option click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			...p,
		},
	},
	r = c.search({ id: 'Filter', globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Blue' }] } }),
	a = {
		render: (n, { loaded: { controller: t } }) =>
			s(o, {
				...n,
				facetLabel: t?.store?.facets.filter((e) => e.type === 'value').shift().label,
				valueLabel: t?.store?.facets
					.filter((e) => e.type === 'value')
					.shift()
					.values.shift().value,
			}),
		loaders: [async () => (await r.search(), { controller: r })],
	},
	l = {
		render: (n, { loaded: { controller: t } }) =>
			s(o, {
				...n,
				facetLabel: t?.store?.facets.filter((e) => e.type === 'value').shift().label,
				valueLabel: t?.store?.facets
					.filter((e) => e.type === 'value')
					.shift()
					.values.shift().value,
			}),
		loaders: [async () => (await r.search(), { controller: r })],
		args: { hideFacetLabel: !0 },
	};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FilterProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <Filter {...args} facetLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().label} valueLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().values.shift().value} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...a.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FilterProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <Filter {...args} facetLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().label} valueLabel={controller?.store?.facets.filter(facet => facet.type === 'value').shift().values.shift().value} />,
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
			...l.parameters?.docs?.source,
		},
	},
};
const k = ['Default', 'NoFacetLabel'];
export { a as Default, l as NoFacetLabel, k as __namedExportsOrder, _ as default };
