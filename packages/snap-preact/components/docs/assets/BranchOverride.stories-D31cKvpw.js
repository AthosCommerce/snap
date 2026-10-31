import { j as o } from './iframe-Bc4KSH0T.js';
import { BranchOverride as a } from './index-B9DXJOwo.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
const c = `# BranchOverride

Renders a popup to show when a branch override is in place.
Executes \`onRemoveClick\` prop when the remove button is clicked.
Must have \`name\` and either \`details\` or \`error\` props to render.

## Components Used
- Icon

## Usage
\`\`\`tsx
import { BranchOverride } from '@athoscommerce/snap-preact/components';
\`\`\`

### name
The required \`name\` prop expects a string containing the name of the override branch.

\`\`\`tsx
<BranchOverride name="testing" />
\`\`\`

### details
The \`details\` prop expects an object containing strings for the \`url\` and \`lastModified\` date of the override branch bundle.

\`\`\`tsx
const details = {
	url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride name="testing" details={details} />
\`\`\`

### error
The \`error\` prop expects an object containing strings for the \`message\` and \`description\` of the error.

\`\`\`tsx
const error = {
	message: 'Branch not found!',
	description: 'Incorrect branch name or branch no longer exists.'
};

<BranchOverride name="next" error={error} />
\`\`\`

### onRemoveClick
The \`onRemoveClick\` prop is a function to be called when the 'remove' button is clicked

\`\`\`tsx
const whenRemoved = (e, name) => {
	console.log(\`remove clicked in the override for the '\${name}' branch\`);
};

<BranchOverride name="testing" onRemoveClick={whenRemoved} />
\`\`\`

### darkMode
The \`darkMode\` prop is used to set the component styling to prefer (or not to prefer) dark mode. By default the component will auto detect the browser preference.

\`\`\`tsx
const details = {
	url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride next="testing" details={details} darkMode={false} />
\`\`\``,
	{ fn: d } = __STORYBOOK_MODULE_TEST__,
	b = {
		title: 'Organisms/BranchOverride',
		component: a,
		parameters: { docs: { description: { component: c } } },
		decorators: [(s) => o('div', { style: { maxWidth: '900px', position: 'relative' }, children: o(s, {}) })],
		args: { onRemoveClick: d() },
		argTypes: {
			branch: { description: 'bundle branch name', type: { required: !0 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
			details: {
				description: 'Object containing details for branch override',
				type: { required: !1 },
				table: { type: { summary: '{ url: string; lastModified: string }' } },
				control: { type: 'object' },
			},
			error: {
				description: 'Object containing error message and description',
				type: { required: !1 },
				table: { type: { summary: '{ message: string; description: string }' } },
				control: { type: 'object' },
			},
			onRemoveClick: {
				description: 'optional function to run on remove button click',
				table: { type: { summary: '(e: Event, name: string) => void' } },
				control: !1,
			},
			darkMode: { description: 'enable darkMode', type: { required: !1 }, table: { type: { summary: 'boolean' } }, control: { type: 'boolean' } },
			...i,
		},
	},
	e = { args: { branch: 'next', details: { url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' } } },
	n = {
		args: {
			branch: 'next',
			details: { url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
			darkMode: !0,
		},
	},
	r = { args: { branch: 'testing', error: { message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' } } },
	t = {
		args: {
			branch: 'next',
			details: { url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
			darkMode: !1,
		},
	};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    branch: 'next',
    details: {
      url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
      lastModified: '1 Feb 2022 1:02:03 GMT'
    }
  }
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
    branch: 'next',
    details: {
      url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
      lastModified: '1 Feb 2022 1:02:03 GMT'
    },
    darkMode: true
  }
}`,
			...n.parameters?.docs?.source,
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
    branch: 'testing',
    error: {
      message: 'Branch not found!',
      description: 'Incorrect branch name or branch no longer exists.'
    }
  }
}`,
			...r.parameters?.docs?.source,
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
    branch: 'next',
    details: {
      url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
      lastModified: '1 Feb 2022 1:02:03 GMT'
    },
    darkMode: false
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const g = ['Auto', 'Dark', 'Error', 'Light'];
export { e as Auto, n as Dark, r as Error, t as Light, g as __namedExportsOrder, b as default };
