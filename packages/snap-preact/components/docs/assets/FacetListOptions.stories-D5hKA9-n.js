import { j as n, o as i } from './iframe-0uTqSs9S.js';
import { F as s } from './FacetListOptions-BKcb2oXB.js';
import { S as c } from './snapify-B992lD8l.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './Checkbox-7fOTHZL3.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Radio-Cqas9W8s.js';
import './createHoverProps-B_zlUBHN.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
const u =
		"# Facet List Options\n\nRenders a list of facet options.\n\n## Sub-components\n- Checkbox\n- Radio\n\n## Usage\n```tsx\nimport { FacetListOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'list'. Overrides values passed via the facet prop. \n\n```tsx\n<FacetListOptions values={listFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```tsx\n<FacetListOptions facet={listFacet} />\n```\n\n### hideCheckbox\nThe `hideCheckbox` prop will disable the facet checkbox. Typically used if the facet can only have a single value selected at a time. Defaults to `true` when the `horizontal` prop is set.\n\n```tsx\n<FacetListOptions values={listFacet.values} hideCheckbox={true} />\n```\n\n### respectSingleSelect\nThe `respectSingleSelect` prop will render radios instead of checkboxes if `facet.multiple == single`\n\n```tsx\n<FacetListOptions facet={listFacet} respectSingleSelect={true} />\n```\n\n### hideCount\nThe `hideCount` prop will disable the facet count values.\n\n```tsx\n<FacetListOptions values={listFacet.values} hideCount={true} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```tsx\n<FacetListOptions values={listFacet.values} horizontal={true} />\n```\n\n### hideCountParenthesis\nThe `hideCountParenthesis` prop will disable the facet count parenthesis from rendering.\n\n```tsx\n<FacetListOptions values={listFacet.values} hideCountParenthesis={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over.\n\n```tsx\n<Autocomplete>\n	...\n	<FacetListOptions values={listFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<FacetListOptions values={listFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when a facet value is clicked.\n\n```tsx\n<FacetListOptions values={listFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FacetListOptions component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `listOption` | List option element text/attributes | `facet` (ValueFacet), `value` (FacetValue) |\n\n### Example\n\n```tsx\n<FacetListOptions\n	values={facet.values}\n	lang={{\n		listOption: {\n			attributes: {\n				'aria-label': (data) => `${data.value.filtered ? 'remove' : 'apply'} filter ${data.facet?.label} - ${data.value.label}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: d } = __STORYBOOK_MODULE_TEST__,
	C = {
		title: 'Molecules/FacetListOptions',
		component: s,
		parameters: { docs: { description: { component: u } } },
		args: { onClick: d() },
		argTypes: {
			values: {
				description: 'Facet.values store reference',
				type: { required: !1 },
				table: { type: { summary: 'facet values store array' } },
				control: !1,
			},
			facet: { description: 'Facet store reference', type: { required: !1 }, table: { type: { summary: 'facet store object' } }, control: !1 },
			hideCheckbox: {
				description: 'Hide facet option checkbox',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false (true when horizontal)' } },
				control: { type: 'boolean' },
			},
			respectSingleSelect: {
				defaultValue: !1,
				description: 'will render radios instead of checkboxes if facet.multiple == "single"',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideCount: {
				defaultValue: !1,
				description: 'Hide facet option count',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			horizontal: {
				defaultValue: !1,
				description: 'Render facet options horizontally',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideCountParenthesis: {
				defaultValue: !1,
				description: 'Hide facet option count parenthesis',
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
	o = c.search({ id: 'FacetListOptions', globals: { siteId: 'atkzs2' } }),
	m = i(({ args: e, controller: a }) => {
		const l = a?.store?.facets.filter((r) => r.field == 'color').pop();
		return n('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: n(s, { ...e, values: l.values }) });
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
  render: (args: FacetListOptionsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableFacetListOptions args={args} controller={controller} />;
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
const S = ['Default'];
export { t as Default, S as __namedExportsOrder, C as default };
