import { j as n, o as i } from './iframe-Bc4KSH0T.js';
import { F as s } from './FacetGridOptions-B4YG6F_c.js';
import { S as c } from './snapify-DBnzfZp8.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const u =
		"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```tsx\nimport { FacetGridOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```tsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```tsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```tsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FacetGridOptions component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `gridOption` | Grid option element text/attributes | `facet` (ValueFacet), `value` (FacetValue) |\n\n### Example\n\n```tsx\n<FacetGridOptions\n	values={facet.values}\n	lang={{\n		gridOption: {\n			attributes: {\n				'aria-label': (data) => `${data.value.filtered ? 'remove' : 'apply'} filter ${data.facet?.label} - ${data.value.label}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: d } = __STORYBOOK_MODULE_TEST__,
	x = {
		title: 'Molecules/FacetGridOptions',
		component: s,
		parameters: { docs: { description: { component: u } } },
		decorators: [(e) => n(e, {})],
		args: { onClick: d() },
		argTypes: {
			values: {
				description: 'Facet.values store reference',
				type: { required: !1 },
				table: { type: { summary: 'facet values store array' } },
				control: !1,
			},
			facet: { description: 'Facet store reference', type: { required: !1 }, table: { type: { summary: 'facet store object' } }, control: !1 },
			columns: {
				defaultValue: 4,
				description: 'Number of columns in grid. Not applicable if using horizontal prop',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
				control: { type: 'number' },
			},
			gridSize: {
				defaultValue: '45px',
				description: 'Size of each grid item. Does not apply if using `columns` prop',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '45px' } },
				control: { type: 'text' },
			},
			gapSize: {
				defaultValue: '8px',
				description: 'Gap size between rows and columns',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
				control: { type: 'text' },
			},
			horizontal: {
				defaultValue: !1,
				description: 'Render facet options horizontally',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			previewOnFocus: {
				description: 'Invoke facet value preview upon focus',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			valueProps: {
				description: 'Object of facet value props',
				table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
				control: !1,
			},
			onClick: {
				description: 'Facet option click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			...p,
		},
	},
	o = c.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
	m = i(({ args: e, controller: a }) => {
		const r = a?.store?.facets.filter((l) => l.field == 'size').pop();
		return n('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: n(s, { ...e, values: r.values }) });
	}),
	t = {
		render: (e, { loaded: { controller: a } }) => n(m, { args: e, controller: a }),
		loaders: [async () => (await o.search(), { controller: o })],
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetGridOptionsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableFacetGridOptions args={args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const T = ['Default'];
export { t as Default, T as __namedExportsOrder, x as default };
