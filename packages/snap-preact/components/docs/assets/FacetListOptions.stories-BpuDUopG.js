import { j as n, o as i } from './iframe-U9T2Y9ZS.js';
import { F as s } from './FacetListOptions-DXiMkJ6r.js';
import { S as c } from './snapify-Df13VkEj.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './Checkbox-Dsv4fCi7.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Radio-CBQqiZ56.js';
import './createHoverProps-B_zlUBHN.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const u = `# Facet List Options

Renders a list of facet options.

## Sub-components
- Checkbox
- Radio

## Usage
\`\`\`tsx
import { FacetListOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'list'. Overrides values passed via the facet prop. 

\`\`\`tsx
<FacetListOptions values={listFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`tsx
<FacetListOptions facet={listFacet} />
\`\`\`

### hideCheckbox
The \`hideCheckbox\` prop will disable the facet checkbox. Typically used if the facet can only have a single value selected at a time.

\`\`\`tsx
<FacetListOptions values={listFacet.values} hideCheckbox={true} />
\`\`\`

### respectSingleSelect
The \`respectSingleSelect\` prop will render radios instead of checkboxes if \`facet.multiple == single\`

\`\`\`tsx
<FacetListOptions values={listFacet.values} respectSingleSelect={true} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet count values.

\`\`\`tsx
<FacetListOptions values={listFacet.values} hideCount={true} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`tsx
<FacetListOptions values={listFacet.values} horizontal={true} />
\`\`\`

### hideCountParenthesis
The \`hideCountParenthesis\` prop will disable the facet count parenthesis from rendering.

\`\`\`tsx
<FacetListOptions values={listFacet.values} hideCountParenthesis={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`tsx
<Autocomplete>
	...
	<FacetListOptions values={listFacet.values} previewOnFocus={true} />
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
<FacetListOptions values={listFacet.values} valueProps={valueProps} />
\`\`\`

### checkbox
The \`checkbox\` prop specifies an object with \`Checkbox\` component props. See \`Checkbox\` component documentation for further details.


### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`tsx
<FacetListOptions values={listFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetListOptions component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`listOption\` | List option element text/attributes | \`facet\` (ValueFacet), \`value\` (FacetValue) |

### Example

\`\`\`tsx
<FacetListOptions
	values={facet.values}
	lang={{
		listOption: {
			attributes: {
				'aria-label': (data) => \`\${data.value.filtered ? 'remove' : 'apply'} filter \${data.facet?.label} - \${data.value.label}\`,
			},
		},
	}}
/>
\`\`\`
`,
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
				defaultValue: !1,
				description: 'Hide facet option checkbox',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
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
