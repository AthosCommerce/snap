import { ah as c, j as n, o as i } from './iframe-Bc4KSH0T.js';
import { F as o } from './FacetHierarchyOptions-sMDWNmLW.js';
import { S as p } from './snapify-DBnzfZp8.js';
import { F as u } from './types-DqusP3LW.js';
import { c as h } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const y = `# Facet Hierarchy Options

Renders a list of hierarchy options.

## Sub-components
- Icon

## Usage
\`\`\`tsx
import { FacetHierarchyOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'hierarchy'. Overrides values passed via the facet prop. 

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`tsx
<FacetHierarchyOptions facet={hierarchyFacet} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet count values.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} hideCount={true} />
\`\`\`

### returnIcon
The \`returnIcon\` prop will set the icon to render for the return levels / options.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} returnIcon={'angle-left'} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`tsx
<Autocomplete>
    ...
	<FacetHierarchyOptions values={hierarchyFacet.values} previewOnFocus={true} />
    ...
</Autocomplete>
\`\`\`


### valueProps
The \`valueProps\` prop will be spread onto each value's \`<a>\` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

\`\`\`js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
\`\`\`

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} valueProps={valueProps} />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetHierarchyOptions component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`hierarchyOption\` | Hierarchy option element text/attributes | \`facet\` (ValueFacet), \`value\` (FacetHierarchyValue) |

### Example

\`\`\`tsx
<FacetHierarchyOptions
	values={facet.values}
	lang={{
		hierarchyOption: {
			attributes: {
				'aria-label': (data) => \`\${data.value.filtered ? 'selected' : 'filter by'} \${data.facet?.label} - \${data.value.label}\`,
			},
		},
	}}
/>
\`\`\`
`,
	{ fn: m } = __STORYBOOK_MODULE_TEST__,
	I = {
		title: 'Molecules/FacetHierarchyOptions',
		component: o,
		parameters: { docs: { description: { component: y } } },
		args: { onClick: m() },
		argTypes: {
			values: { description: 'Facet.values store reference', type: { required: !1 }, table: { type: { summary: 'object' } }, control: !1 },
			facet: { description: 'Facet store reference', type: { required: !1 }, table: { type: { summary: 'facet store object' } }, control: !1 },
			returnIcon: {
				description: 'return Icon name',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				options: [...Object.keys(c)],
				control: { type: 'select' },
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
			...h,
		},
	},
	r = p.search({ id: 'FacetHierarchyOptions', globals: { siteId: 'atkzs2' } }),
	d = i(({ args: e, controller: a }) => {
		const s = a?.store?.facets
			.filter((l) => l.display === u.HIERARCHY)
			.shift()
			.values.slice(0, 12);
		return n('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: n(o, { ...e, values: s }) });
	}),
	t = {
		render: (e, { loaded: { controller: a } }) => n(d, { args: e, controller: a }),
		loaders: [async () => (await r.search(), { controller: r })],
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetHierarchyOptionsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableFacetHierarchyOptions args={args} controller={controller} />;
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
const C = ['Default'];
export { t as Default, C as __namedExportsOrder, I as default };
