import { j as t, o as p } from './iframe-U9T2Y9ZS.js';
import { F as r } from './FacetPaletteOptions-8YWwPWlW.js';
import { S as u } from './snapify-Df13VkEj.js';
import { c as d } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './names-Cka5BSlk.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-Dsv4fCi7.js';
import './useA11y-BuGQuOJb.js';
import './Image-C5uuJXju.js';
import './createHoverProps-B_zlUBHN.js';
import './handleize-xLHhB8k5.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const m = `# Facet Palette Options

Renders a grid of facet palette options. 

## Sub-components
- Icon

## Usage
\`\`\`tsx
import { FacetPaletteOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'palette'. Overrides values passed via the facet prop. 

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`tsx
<FacetPaletteOptions facet={paletteFacet} />
\`\`\`

### hideLabel
The \`hideLabel\` prop will disable the facet label.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideLabel={true} />
\`\`\`

### columns
The \`columns\` prop is the number of columns the grid should contain. Not applicable if using \`horizontal\` prop'.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} columns={3} />
\`\`\`

### gridSize
The \`gridSize\` prop is the size of each palette item. Does not apply if using \`columns\` prop.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} gridSize={'45px'} columns={0} />
\`\`\`

### gapSize
The \`gapSize\` prop is the gap size between rows and columns.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} gapSize={'10px'} />
\`\`\`

### hideIcon
The \`hideIcon\` prop will disable the facet icon from being rendered.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideIcon={true} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet option counts from being rendered.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideCount={true} />
\`\`\`

### hideCheckbox
The \`hideCheckbox\` prop will disable the facet option checkboxes from being rendered.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### layout
The \`layout\` prop determines if the options should render as a \`list\` or \`grid\`. By default \`grid\` will be used.
\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`tsx
<Autocomplete>
	...
	<FacetPaletteOptions values={paletteFacet.values} previewOnFocus={true} />
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
<FacetPaletteOptions values={paletteFacet.values} valueProps={valueProps} />
\`\`\`

### icon
The \`icon\` prop specifiesan object with \`Icon\` component props. 

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`


#### colorMapping
The colorMapping prop allows for custom color mapping overrides. The object used is keyed by a color label, and can take background, backgroundImageUrl and label properties. 
The color label can be any accepted CSS background property value. So a color, string, hash, RGB, gradiant, or an image URL could be used. 
The label takes a string value and replaces the color's original label for display.
The backgroundImageUrl will render an actual HTML Image element rather than css background url. 

\`\`\`tsx
const colorMapping = {
	'Camo': {
		background: 'brown',
		label: 'Army'
	},
	'Red': {
		backgroundImageUrl: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/bfbec80cfd07b650c2f02b5f8a8c29b3c726e9da',
		label: 'Red'
	},
	'Striped': {
		background: "url(https://mysite.com/cdn/shop/files/candy-stripe-square_small.jpg)",
		label: "stripy"
	},
	'rainbow': {
		background: \`linear-gradient(
			90deg,
			rgba(255, 0, 0, 1) 0%,
			rgba(255, 154, 0, 1) 10%,
			rgba(208, 222, 33, 1) 20%,
			rgba(79, 220, 74, 1) 30%,
			rgba(63, 218, 216, 1) 40%,
			rgba(47, 201, 226, 1) 50%,
			rgba(28, 127, 238, 1) 60%,
			rgba(95, 21, 242, 1) 70%,
			rgba(186, 12, 248, 1) 80%,
			rgba(251, 7, 217, 1) 90%,
			rgba(255, 0, 0, 1) 100%
		)\`,
	}
}
<FacetPaletteOptions values={paletteFacet.values} colorMapping={colorMapping} />
\`\`\`



## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetPaletteOptions component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`paletteOption\` | Palette option element text/attributes | \`facet\` (ValueFacet), \`value\` (FacetValue) |

### Example

\`\`\`tsx
<FacetPaletteOptions
	values={facet.values}
	lang={{
		paletteOption: {
			attributes: {
				'aria-label': (data) => \`\${data.value.filtered ? 'remove' : 'apply'} filter \${data.facet?.label} - \${data.value.label}\`,
			},
		},
	}}
/>
\`\`\`
`,
	{ fn: b } = __STORYBOOK_MODULE_TEST__,
	S = {
		title: 'Molecules/FacetPaletteOptions',
		component: r,
		parameters: { docs: { description: { component: m } } },
		decorators: [(e) => t(e, {})],
		args: { onClick: b() },
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
				description: 'Number of columns in palette. Not applicable if using horizontal prop',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
				control: { type: 'number' },
			},
			gridSize: {
				defaultValue: '45px',
				description: 'Size of each palette item. Does not apply if using `columns` prop',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '45px' } },
				control: { type: 'text' },
			},
			gapSize: {
				defaultValue: '8px',
				description: 'Gap size between rows and columns',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
				control: { type: 'text' },
			},
			hideLabel: {
				description: 'Hide facet option label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideCount: {
				description: 'Hide facet option count',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			hideCheckbox: {
				description: 'Hide facet option checkbox',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			layout: {
				description: 'facet option layout',
				defaultValue: 'grid',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				options: ['grid', 'list'],
				control: { type: 'select' },
			},
			hideIcon: {
				description: 'Hide facet option icon',
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
			colorMapping: {
				description: 'Object of color mapping values',
				table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
				control: { type: 'object' },
			},
			...d,
		},
	},
	l = u.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
	s = p(({ args: e, controller: a }) => {
		const c = a?.store?.facets.filter((i) => i.field == 'color').pop();
		return t(r, { ...e, values: c.values });
	}),
	n = {
		render: (e, { loaded: { controller: a } }) =>
			t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(s, { args: e, controller: a }) }),
		loaders: [async () => (await l.search(), { controller: l })],
	},
	o = {
		render: (e, { loaded: { controller: a } }) =>
			t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(s, { args: e, controller: a }) }),
		args: { layout: 'list', hideCount: !1, hideCheckbox: !1 },
		loaders: [async () => (await l.search(), { controller: l })],
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetPaletteOptionsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <ObservableFacetPaletteOptions args={args} controller={controller} />
            </div>;
  },
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
  render: (args: FacetPaletteOptionsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <ObservableFacetPaletteOptions args={args} controller={controller} />
            </div>;
  },
  args: {
    layout: 'list',
    hideCount: false,
    hideCheckbox: false
  },
  loaders: [async () => {
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
const I = ['Default', 'List'];
export { n as Default, o as List, I as __namedExportsOrder, S as default };
