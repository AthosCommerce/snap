import { B as a } from './Breadcrumbs-DmxOMnRy.js';
import { ah as n } from './iframe-Bc4KSH0T.js';
import { c as t } from './componentArgs-DfBuq-N1.js';
import './defined-CdKp_MB-.js';
import './preload-helper-PPVm8Dsz.js';
const o = `# Breadcrumbs

Renders a list of breadcrumbs. 

## Usage
\`\`\`tsx
import { Breadcrumbs } from '@athoscommerce/snap-preact/components';
\`\`\`

### data
The \`data\` prop specifies an array of breadcrumb objects, or a function that returns an array of breadcrumb objects. The function is passed the controller if available.

#### breadcrumb object 

\`label\` - required, the breadcrumb label
 
\`url\` - optional, the URL of this breadcrumb

\`\`\`js
const breadcrumbs = [
	{ url: '/', label: 'Home' },
	{ url: '/', label: 'Collections' },
	{ url: '/', label: 'Appliances' },
	{ label: 'Fridge' }
]

or 

const breadcrumbsFunction = (controller) => {
	const term = (controller as SearchController).store?.search?.query?.string;
	return [
		{ url: '/', label: 'Home' },
		{ url: '/', label: 'Search' },
		{ label: term }
	]
}

\`\`\`

\`\`\`tsx
<Breadcrumbs separator={'/'} data={breadcrumbs} />
\`\`\`

### separator
The \`separator\` prop spcifies a custom delimiter between each breadcrumb. The default separator is \`'/'\`. This can be a string or a JSX element.

\`\`\`tsx
<Breadcrumbs separator={'>'} data={breadcrumbs} />
\`\`\`


### separatorIcon
The \`separatorIcon\` prop spcifies an icon to render between each breadcrumb. 

\`\`\`tsx
<Breadcrumbs separatorIcon={'angle-right'} data={breadcrumbs} />
\`\`\`
`,
	p = {
		title: 'Atoms/Breadcrumbs',
		component: a,
		parameters: { docs: { description: { component: o } } },
		argTypes: {
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: !1 },
			data: {
				description: 'Breadcrumb data object',
				table: { type: { summary: 'object | function' }, category: 'Templates Legal' },
				control: { type: 'object' },
			},
			separator: {
				description: 'Breadcrumb delimiter',
				table: { type: { summary: 'string, JSX, or false' }, category: 'Templates Legal', defaultValue: { summary: '>' } },
				control: { type: 'text' },
			},
			separatorIcon: {
				description: 'Separator Icon name',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				options: [...Object.keys(n)],
				control: { type: 'select' },
			},
			...t,
		},
	},
	e = { args: { data: [{ url: '/', label: 'Home' }, { url: '/', label: 'Collections' }, { url: '/', label: 'Appliances' }, { label: 'Fridge' }] } },
	r = { args: { data: [{ url: '/', label: 'Home' }, { label: 'Search' }] } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    data: [{
      url: '/',
      label: 'Home'
    }, {
      url: '/',
      label: 'Collections'
    }, {
      url: '/',
      label: 'Appliances'
    }, {
      label: 'Fridge'
    }]
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    data: [{
      url: '/',
      label: 'Home'
    }, {
      label: 'Search'
    }]
  }
}`,
			...r.parameters?.docs?.source,
		},
	},
};
const i = ['categoryPage', 'SearchPage'];
export { r as SearchPage, i as __namedExportsOrder, e as categoryPage, p as default };
