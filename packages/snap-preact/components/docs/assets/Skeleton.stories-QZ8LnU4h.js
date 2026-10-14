import { j as o } from './iframe-CXSVAHru.js';
import { S as r } from './Skeleton-S9f0mbQ4.js';
import { c as a } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const s = `# Skeleton

Renders a div with a animation for use when building loading skeletons. 

## Usage
\`\`\`tsx
import { Skeleton } from '@athoscommerce/snap-preact/components';
\`\`\`

### Height
The \`height\` prop specifies the css height of the skeleton div.

\`\`\`tsx
<Skeleton height='200px' width='150px'/>
\`\`\`

### Width

The \`width\` prop specifies the css width of the skeleton div.

\`\`\`tsx
<Skeleton height='200px' width='150px'/>
\`\`\`

### Round

The \`round\` prop is used for when you are wanting to render a circle instead of a block.

\`\`\`tsx
<Skeleton height='200px' width='150px' round="true"/>
\`\`\`

### backgroundColor

The \`backgroundColor\` prop is used for changing the background color of the skeleton.

\`\`\`tsx
<Skeleton height='200px' width='150px' backgroundColor='#333333'/>
\`\`\`

### animatedColor

The \`animatedColor\` prop is used for changing the color of the moving vertical loading bar.

\`\`\`tsx
<Skeleton height='200px' width='150px' backgroundColor='#333333' animatedColor="#000000" />
\`\`\``,
	d = {
		title: 'Atoms/Skeleton',
		component: r,
		parameters: { docs: { description: { component: s } } },
		decorators: [(n) => o('div', { style: { width: '200px', height: '200px', position: 'relative' }, children: o(n, { height: '200px' }) })],
		argTypes: {
			height: {
				description: 'CSS sizing to set the height of the Skeleton',
				defaultValue: '100px',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			width: {
				description: 'CSS sizing to set the width of the Skeleton',
				defaultValue: '100px',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			round: { table: { type: { summary: 'boolean' }, category: 'Templates Legal' }, control: { type: 'boolean' } },
			backgroundColor: {
				description: 'Background color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#ebebeb' } },
				control: { type: 'color' },
			},
			animatedColor: {
				description: 'Color setting for the vertical animated bar',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#f5f5f5' } },
				control: { type: 'color' },
			},
			...a,
		},
	},
	e = { args: { width: '100px', height: '100px' } },
	t = { args: { width: '100px', height: '100px', round: !0 } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    width: '100px',
    height: '100px'
  }
}`,
			...e.parameters?.docs?.source,
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
    width: '100px',
    height: '100px',
    round: true
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const c = ['Default', 'Circle'];
export { t as Circle, e as Default, c as __namedExportsOrder, d as default };
