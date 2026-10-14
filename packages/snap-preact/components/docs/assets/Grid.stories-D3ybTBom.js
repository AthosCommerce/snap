import { j as s } from './iframe-CXSVAHru.js';
import { G as i } from './Grid-gPB0UN_F.js';
import { c as d } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './names-Cka5BSlk.js';
import './defined-CdKp_MB-.js';
import './selectionKey-CmN2KTR5.js';
import './Image-BTbXUZuZ.js';
import './useA11y-BuGQuOJb.js';
import './useLang-Dx66cFD0.js';
import './handleize-xLHhB8k5.js';
const c = `# Grid

Renders an Grid of options

## Components Used
- image

## Usage
\`\`\`tsx
import { Grid } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render.

\`\`\`tsx
const options: SwatchOption = [
		{
			value: 'one',
			disabled: true,
		},
		{
			value: 'two',
		},
		{
			value: 'three',
		},
	],

<Grid options={options} />
\`\`\`

### gapSize
The optional \`gapsize\` props specifies the gap size between rows and columns.

\`\`\`tsx
<Grid options={options} gapsize={'15px'} />
\`\`\`

### columns
The optional \`columns\` prop specifies the number of columns to show in the grid. (defaults to 4)

\`\`\`tsx
<Grid options={options} columns={3} />
\`\`\`

### rows
The optional \`rows\` prop specifies the number of rows to show in the grid. Should be noted that if more \`options\` are passed than are allowed via \`columns\` and \`rows\` props, then the component will hide the overflow options behind a \`+ 4 more\` overflow button. 

\`\`\`tsx
<Grid options={options} rows={2} />
\`\`\`

### disableOverflowAction
The optional \`disableOverflowAction\` prop will disable the overflow action from the overflow button (\`+ 4 more\`s). This is to be used when you want the overflow button to show render but you do not want the grid to expand and show all options onclick of the overflow button. 

\`\`\`tsx
<Grid options={options} rows={2} disableOverflowAction={true}/>
\`\`\`

### overflowButton
The optional \`overflowButton\` prop accepts a custom JSX element to render instead of the default overflow button. The custom component will be passed the current expanded state of the grid, as well as the number of options hidden 

\`\`\`tsx

const overflowButton = (expanded, remainder) => {
    return (
       expanded ? (
            <span>
                show {remainder} more
            </span>
        ) : (
            <span>
                Show Less
            </span>
        )
    )
}

<Grid options={options} rows={2} overflowButton={overflowButton}/>
\`\`\`

### overflowButtonInGrid
The optional \`overflowButtonInGrid\` prop specifies if the overflow button should be rendered in the grid or below. 

\`\`\`tsx
<Grid options={options} overflowButtonInGrid={true} />
\`\`\`

### onOverflowButtonClick
The optional \`onOverflowButtonClick\` prop specifies to custom function to call onClick of the overflow button. 

\`\`\`tsx
const onOverflowButtonClick = (expandedState: boolean, remainder: number) => {
    console.log(expandedState, remainder);
}

<Grid options={options} onOverflowButtonClick={onOverflowButtonClick} />
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`tsx
<Grid options={options} hideLabels={true} />
\`\`\`

### hideShowLess
The optional \`hideShowLess\` prop specifies if show less button should be hidden. 

\`\`\`tsx
<Grid options={options} hideShowLess={true} />
\`\`\`

### multiselect
The optional \`multiselect\` prop specifies if more than a single option can be selected at once. 

\`\`\`tsx
<Grid options={options} multiselect={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`tsx
const onSelectFunc = (event, clickedOption, currenctlySelectedOptionArray) => {
    console.log(event, clickedOption, currenctlySelectedOptionArray)
}

<Grid options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the grid title. 

\`\`\`tsx
<Grid options={options} titleText={"Grid Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option(s) if the selected state is handled outside of the component. 

\`\`\`tsx

const selectedOption: SwatchOption = [
    {
        value: 'two',
    },
]

<Grid options={options} selected={selectedOption} />
\`\`\`



## Lang

The \`lang\` prop allows you to override translatable text strings used by the Grid component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`showMoreText\` | Show more button text | \`limited\` (boolean), \`remainder\` (number), \`overflowButtonInGrid\` (boolean) |
| \`showLessText\` | Show less button text | \`limited\` (boolean), \`remainder\` (number), \`overflowButtonInGrid\` (boolean) |

### Example

\`\`\`tsx
<Grid
	options={options}
	lang={{
		showMoreText: {
			value: (data) => data.overflowButtonInGrid ? \`+ \${data.remainder}\` : 'Show More',
		},
		showLessText: {
			value: (data) => data.overflowButtonInGrid ? \`- \${data.remainder}\` : 'Show Less',
		},
	}}
/>
\`\`\`
`,
	{ fn: r } = __STORYBOOK_MODULE_TEST__,
	T = {
		title: 'Molecules/Grid',
		component: i,
		parameters: { docs: { description: { component: c } } },
		decorators: [(l) => s('div', { style: { maxWidth: '500px' }, children: s(l, {}) })],
		args: { onSelect: r(), onOverflowButtonClick: r() },
		argTypes: {
			options: {
				description: 'list of options to display',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'option[]' } },
				control: { type: 'object' },
			},
			titleText: {
				defaultValue: '',
				description: 'optional title to render',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			multiSelect: {
				description: 'enable/disable multiselect',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onSelect: { description: 'option onSelect event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			selected: { description: 'Current selected option', table: { category: 'Templates Legal', type: { summary: 'string | number' } }, control: !1 },
			hideLabels: {
				description: 'enable/disable option labels from rendering',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideShowLess: {
				description: 'hide show less button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			columns: {
				defaultValue: 4,
				description: 'Number of columns in grid',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
				control: { type: 'number' },
			},
			rows: {
				description: 'Number of rows in grid',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			gapSize: {
				defaultValue: '8px',
				description: 'Gap size between rows and columns',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
				control: { type: 'text' },
			},
			disableOverflowAction: {
				description: 'enable/disable show more click functionality',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			overflowButtonInGrid: {
				description: 'render overflow button in the grid or below',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			overflowButton: {
				description: 'Slot for custom overflow button component.',
				table: { category: 'Templates Legal', type: { summary: 'component' } },
			},
			onOverflowButtonClick: {
				description: 'Custom onClick event handler for overflow button',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
			},
			...d,
		},
	},
	e = {
		args: {
			options: [
				{ value: 'one' },
				{ value: 'two' },
				{ value: 'three' },
				{ value: 'four' },
				{ value: 'five' },
				{ value: 'six' },
				{ value: 'seven' },
				{ value: 'eight' },
			],
		},
	},
	n = {
		args: {
			options: [
				{ value: 'one', disabled: !0 },
				{ value: 'two' },
				{ value: 'three' },
				{ value: 'four' },
				{ value: 'five' },
				{ value: 'six' },
				{ value: 'seven' },
				{ value: 'eight' },
			],
		},
	},
	o = {
		args: {
			options: [
				{
					value: 'Faded Khaki',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7.jpg?v=1706125264',
				},
				{
					value: 'Indigo',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb.jpg?v=1706125265https://cdn.shopify.com/s/files/1/0677/2424/7298/files/11136413-I_OK_x_Arvin_Gds_Wool_Boot_Socks_CBM_1_0e3b5702-49e2-4608-acb6-7c131891fc18_450x.jpg?v=1706124808',
				},
				{
					value: 'Mirage',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b.jpg?v=1706125265',
				},
				{
					value: 'Toasted',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb.jpg?v=1706125264',
				},
			],
			overflowButtonInGrid: !0,
			hideLabels: !0,
			rows: 1,
			columns: 4,
		},
	},
	t = {
		args: {
			options: [
				{ value: 'red', background: 'red' },
				{ value: 'blue', background: 'blue' },
				{ value: 'white', background: 'white', disabled: !0 },
				{ value: 'black', background: 'black' },
				{ value: 'green', background: 'green' },
				{ value: 'yellow', background: 'yellow' },
			],
			hideLabels: !0,
			columns: 5,
			overflowButtonInGrid: !0,
			rows: 1,
		},
	},
	a = {
		args: {
			options: [
				{ value: 'one' },
				{ value: 'two' },
				{ value: 'three' },
				{ value: 'four' },
				{ value: 'five' },
				{ value: 'six' },
				{ value: 'seven' },
				{ value: 'eight' },
			],
			rows: 2,
			columns: 3,
		},
	};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    options: [{
      value: 'one'
    }, {
      value: 'two'
    }, {
      value: 'three'
    }, {
      value: 'four'
    }, {
      value: 'five'
    }, {
      value: 'six'
    }, {
      value: 'seven'
    }, {
      value: 'eight'
    }]
  } as GridProps
}`,
			...e.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    options: [{
      value: 'one',
      disabled: true
    }, {
      value: 'two'
    }, {
      value: 'three'
    }, {
      value: 'four'
    }, {
      value: 'five'
    }, {
      value: 'six'
    }, {
      value: 'seven'
    }, {
      value: 'eight'
    }]
  } as GridProps
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
  args: {
    options: [{
      value: 'Faded Khaki',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7.jpg?v=1706125264'
    }, {
      value: 'Indigo',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb.jpg?v=1706125265https://cdn.shopify.com/s/files/1/0677/2424/7298/files/11136413-I_OK_x_Arvin_Gds_Wool_Boot_Socks_CBM_1_0e3b5702-49e2-4608-acb6-7c131891fc18_450x.jpg?v=1706124808'
    }, {
      value: 'Mirage',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b.jpg?v=1706125265'
    }, {
      value: 'Toasted',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb.jpg?v=1706125264'
    }],
    overflowButtonInGrid: true,
    hideLabels: true,
    rows: 1,
    columns: 4
  } as GridProps
}`,
			...o.parameters?.docs?.source,
		},
	},
};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    options: [{
      value: 'red',
      background: 'red'
    }, {
      value: 'blue',
      background: 'blue'
    }, {
      value: 'white',
      background: 'white',
      disabled: true
    }, {
      value: 'black',
      background: 'black'
    }, {
      value: 'green',
      background: 'green'
    }, {
      value: 'yellow',
      background: 'yellow'
    }],
    hideLabels: true,
    columns: 5,
    overflowButtonInGrid: true,
    rows: 1
  } as GridProps
}`,
			...t.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    options: [{
      value: 'one'
    }, {
      value: 'two'
    }, {
      value: 'three'
    }, {
      value: 'four'
    }, {
      value: 'five'
    }, {
      value: 'six'
    }, {
      value: 'seven'
    }, {
      value: 'eight'
    }],
    rows: 2,
    columns: 3
  } as GridProps
}`,
			...a.parameters?.docs?.source,
		},
	},
};
const k = ['Default', 'DisabledOption', 'Images', 'backgroundColors', 'overflow'];
export { e as Default, n as DisabledOption, o as Images, k as __namedExportsOrder, t as backgroundColors, T as default, a as overflow };
