import { j as r } from './iframe-U9T2Y9ZS.js';
import { S as s } from './SortBy-Blw6YrBp.js';
import { S as i } from './snapify-Df13VkEj.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Select-HVXhT1EH.js';
import './useA11y-BuGQuOJb.js';
import './selectionKey-CmN2KTR5.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './Button-rwG4FGUK.js';
import './List-9eXTq04g.js';
import './Checkbox-Dsv4fCi7.js';
import './handleize-xLHhB8k5.js';
import './RadioList-Dpb6I9cR.js';
import './Radio-CBQqiZ56.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const c = `# SortBy

Renders a Select dropdown or a RadioSelect, to be used with the SearchSortingStore for setting the current sorting. 

## Sub-components
- Select
- List
- RadioList

## Usage

### sorting
The \`sorting\` prop specifies an reference to the SearchSortingStore.

\`\`\`tsx
<SortBy sorting={controller.store.sorting} />
\`\`\`

### controller
The \`controller\` prop specifies an reference to the Search Controller.

\`\`\`tsx
<SortBy controller={controller} />
\`\`\`

### label
The \`label\` prop specifies an label to render as the title.

\`\`\`tsx
<SortBy controller={controller} label={'Sort By'}/>
\`\`\`

### hideLabel
The \`hideLabel\` prop hides the header title label

\`\`\`tsx
<SortBy controller={controller} label={'Sort By'} hideLabel={true} />
\`\`\`

### type
The \`type\` prop specifies which type of SortBy component to render. You can choose from 1 of 3 options - "Dropdown" | "List" | "Radio".
By default "Dropdown" is used. and will render a dropdown using the Select component. "Radio" will render a RadioSelect component, and "List" will render a RadioSelect component with radios disabled.

\`\`\`tsx
<SortBy controller={controller} type={'Radio'} label={'Sort By'}/>
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the SortBy component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`label\` | The sort selector label text | \`options\` (ListOption[]), \`selectedOptions\` (ListOption[]) |

### Example

\`\`\`tsx
<SortBy
	controller={controller}
	lang={{
		label: {
			value: 'Sort Results',
		},
	}}
/>
\`\`\`
`,
	O = {
		title: 'Molecules/SortBy',
		component: s,
		parameters: { docs: { description: { component: c } } },
		argTypes: {
			sorting: {
				description: 'reference to the SearchSortingStore',
				type: { required: !0 },
				table: { type: { summary: 'reference to the SearchSortingStore' } },
				control: !1,
			},
			controller: {
				description: 'reference to the Search Controller',
				table: { type: { summary: 'reference to the Search Controller' } },
				control: !1,
			},
			label: {
				description: 'Header label text to render.',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			hideLabel: {
				description: 'hide header label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			type: {
				description: 'type of Select to render.',
				table: { category: 'Templates Legal', type: { summary: '"dropdown" | "list" | "radio"' }, defaultValue: { summary: 'dropdown' } },
				options: ['dropdown', 'list', 'radio'],
				control: { type: 'select' },
			},
			...p,
		},
	},
	t = i.search({ id: 'SortBy', globals: { siteId: 'atkzs2' } }),
	o = {
		render: (e, { loaded: { controller: n } }) =>
			r('div', {
				style: { maxWidth: e?.type == 'list' || e?.type == 'radio' ? '500px' : '300px' },
				children: r(s, { ...e, sorting: n?.store?.sorting }),
			}),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { label: 'Sort By' },
	},
	a = {
		render: (e, { loaded: { controller: n } }) =>
			r('div', {
				style: { maxWidth: e?.type == 'list' || e?.type == 'radio' ? '500px' : '300px' },
				children: r(s, { ...e, sorting: n?.store?.sorting }),
			}),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { label: '', type: 'list' },
	},
	l = {
		render: (e, { loaded: { controller: n } }) =>
			r('div', {
				style: { maxWidth: e?.type == 'list' || e?.type == 'radio' ? '500px' : '300px' },
				children: r(s, { ...e, sorting: n?.store?.sorting }),
			}),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { label: 'Sort By', type: 'radio' },
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SortByProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.type == 'list' || args?.type == 'radio' ? '500px' : '300px'
    }}>
                <SortBy {...args} sorting={controller?.store?.sorting} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    label: 'Sort By'
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SortByProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.type == 'list' || args?.type == 'radio' ? '500px' : '300px'
    }}>
                <SortBy {...args} sorting={controller?.store?.sorting} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    label: '',
    type: 'list'
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SortByProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.type == 'list' || args?.type == 'radio' ? '500px' : '300px'
    }}>
                <SortBy {...args} sorting={controller?.store?.sorting} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    label: 'Sort By',
    type: 'radio'
  }
}`,
			...l.parameters?.docs?.source,
		},
	},
};
const P = ['Default', 'List', 'Radio'];
export { o as Default, a as List, l as Radio, P as __namedExportsOrder, O as default };
