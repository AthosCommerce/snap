import { j as a } from './iframe-CXSVAHru.js';
import { F as n } from './FacetSlider-AhnUnnRl.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './useA11y-BuGQuOJb.js';
const o = `# Facet Slider

Renders a slider to be used with any slider facet. Built using <a target="_blank" rel="noopener noreferrer" href="https://github.com/tannerlinsley/react-ranger">react-ranger</a>.

## Usage
\`\`\`tsx
import { FacetSlider } from '@athoscommerce/snap-preact/components';
\`\`\`

### facet
The required \`facet\` prop specifies a reference to a facet within the facets store array. The facet must be a range facet (\`display\` type of \`'slider'\`).

\`\`\`tsx
<FacetSlider facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} />
\`\`\`

### showTicks
The \`showTicks\` prop will render reference ticks below the slider track.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
/>
\`\`\`

### tickSize
The \`tickSize\` prop specifies the unit number between ticks. Must be used with \`showTicks\` prop.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickSize={20}
/>
\`\`\`

### tickTextColor
The \`tickTextColor\` prop specifies ticks text color. Must be used with \`showTicks\` prop.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickTextColor={'#cccccc'}
/>
\`\`\`

### handleColor
The \`handleColor\` prop specifies the handle color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleColor={'#0000ff'}
/>
\`\`\`

### stickyHandleLabel
The \`stickyHandleLabel\` prop specifies if the handle value text should display above each handle.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	stickyHandleLabel={true}
/>
\`\`\`

### separateHandles
The \`separateHandles\` prop prevents the minimum and maximum slider values from being equal. When enabled, if a user attempts to set both handles to the same value, they will be automatically separated by one step value. The component intelligently determines whether to adjust the min or max value based on the available range.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	separateHandles={true}
/>
\`\`\`

### handleDraggingColor
The \`handleDraggingColor\` prop specifies the handle color while dragging.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleDraggingColor={'0000ff'}
/>
\`\`\`

### valueTextColor
The \`valueTextColor\` prop specifies the value text color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	valueTextColor={'#222222'}
/>
\`\`\`

### trackColor
The \`trackColor\` prop specifies the slider track (background) color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	trackColor={'#cccccc'}
/>
\`\`\`

### railColor
The \`railColor\` prop specifies the slider rail (foreground) color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	railColor={'#0000ff'}
/>
\`\`\`

### Events

#### onChange
The \`onChange\` prop allows for a custom callback function for when a slider handle has been changed. This callback is invoked **before** the URL manager updates occur, allowing for mutation of values or other operations prior to API request.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onChange={(values)=>{ console.log(\`low: \${values[0]} high: \${values[1]}\`) }}
/>
\`\`\`

#### onDrag
The \`onDrag\` prop allows for a custom callback function for when a slider handle is being dragged.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onDrag={(values)=>{ console.log(\`low: \${values[0]} high: \${values[1]}\`) }}
/>
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetSlider component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`sliderHandle\` | Slider handle element text/attributes | \`facet\` (RangeFacet), \`value\` (number) |

### Example

\`\`\`tsx
<FacetSlider
	facet={rangeFacet}
	lang={{
		sliderHandle: {
			attributes: {
				'aria-label': (data) => \`\${data.facet.label} slider handle, current value \${data.value}\`,
			},
		},
	}}
/>
\`\`\`
`,
	{ fn: r } = __STORYBOOK_MODULE_TEST__,
	s = {
		field: 'price',
		label: 'Price',
		type: 'range',
		display: 'slider',
		filtered: !1,
		collapsed: !1,
		range: { low: 0, high: 120 },
		active: { low: 0, high: 120 },
		step: 1,
		formatValue: '$%01.2f',
	},
	g = {
		title: 'Molecules/FacetSlider',
		component: n,
		parameters: { docs: { description: { component: o } } },
		decorators: [(t) => a('div', { style: { maxWidth: '300px' }, children: a(t, {}) })],
		args: { onDrag: r(), onChange: r() },
		argTypes: {
			facet: { description: 'Facet store reference', type: { required: !0 }, table: { type: { summary: 'facet store object' } }, control: !1 },
			showTicks: {
				description: 'enables/disables ticks',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			tickSize: {
				defaultValue: 20,
				description: 'distance between ticks',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 20 } },
				control: { type: 'number' },
			},
			tickTextColor: { description: 'ticks color', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'color' } },
			trackColor: {
				description: 'Slider track color',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			railColor: {
				description: 'Slider rail Color',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			valueTextColor: {
				description: 'Slider value Text Color',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			handleColor: {
				description: 'Slider handle color',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			stickyHandleLabel: {
				description: 'enables/disables sticky handle labels',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			separateHandles: {
				description: 'separates slider handles by one step value to prevent min and max from being equal',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			handleDraggingColor: {
				description: 'Slider handle color when dragging',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			onDrag: {
				description: 'Slider onDrag event handler - fires as the slider is dragged (should not be used to trigger searches)',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			onChange: {
				description:
					'Slider onChange event handler - fires after touchEnd and before URL manager updates (used to trigger search and allows for value mutation)',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			...l,
		},
	},
	e = { render: (t) => a(n, { ...t, facet: s }) };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetSliderProps) => <FacetSlider {...args} facet={sliderFacetMock as RangeFacet} />
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const h = ['Price'];
export { e as Price, h as __namedExportsOrder, g as default };
