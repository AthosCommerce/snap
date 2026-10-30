import { j as n } from './iframe-U9T2Y9ZS.js';
import { S as p } from './snapify-Df13VkEj.js';
import { P as l } from './PerPage-2HjLiwSz.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
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
const d = `# PerPage

Renders a select dropdown or a RadioSelect to be used with the pagination store, for setting the page size.

## Sub-components
- Select
- List
- RadioList

## Usage

### pagination
The \`pagination\` prop specifies an reference to the SearchPaginationStore.

\`\`\`tsx
<PerPage pagination={controller.store.pagination} />
\`\`\`

### controller
The \`controller\` prop specifies an reference to the Search Controller.

\`\`\`tsx
<PerPage controller={controller} />
\`\`\`

### label
The \`label\` prop specifies an label to render as the title.

\`\`\`tsx
<PerPage controller={controller} label={'Sort By'}/>
\`\`\`

### type
The \`type\` prop specifies which type of PerPage component to render. You can choose from 1 of 3 options - "Dropdown" | "List" | "Radio".
By default "Dropdown" is used. and will render a dropdown using the Select component. "Radio" will render a RadioSelect component, and "List" will render a RadioSelect component with radios disabled.

\`\`\`tsx
<PerPage controller={controller} type={'Radio'} label={'Sort By'}/>
\`\`\`



## Lang

The \`lang\` prop allows you to override translatable text strings used by the PerPage component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`label\` | The per-page selector label text | \`options\` (ListOption[]), \`selectedOptions\` (ListOption[]) |

### Example

\`\`\`tsx
<PerPage
	controller={controller}
	lang={{
		label: {
			value: 'Items per page',
		},
	}}
/>
\`\`\`
`,
	z = {
		title: 'Molecules/PerPage',
		component: l,
		parameters: { docs: { description: { component: d } } },
		argTypes: {
			pagination: {
				description: 'reference to the SearchPaginationStore',
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
			type: {
				description: 'type of Select to render.',
				table: { category: 'Templates Legal', type: { summary: '"dropdown" | "list" | "radio"' }, defaultValue: { summary: 'dropdown' } },
				options: ['dropdown', 'list', 'radio'],
				control: { type: 'select' },
			},
			...c,
		},
	},
	s = p.search({ id: 'PerPage', globals: { siteId: 'atkzs2' } }),
	t = {
		render: (e, { loaded: { controller: r } }) =>
			n('div', {
				style: { maxWidth: e?.type == 'list' || e?.type == 'radio' ? '500px' : '300px' },
				children: n(l, { ...e, pagination: r?.store?.pagination }),
			}),
		loaders: [async () => (await s.search(), { controller: s })],
		args: { label: 'Per Page' },
	},
	i = p.search({
		id: 'PerPage-list',
		globals: { siteId: 'atkzs2' },
		settings: {
			pagination: {
				pageSizeOptions: [
					{ label: '24', value: 12 },
					{ label: '48', value: 24 },
					{ label: '72', value: 48 },
				],
			},
		},
	}),
	a = {
		render: (e, { loaded: { controller: r } }) =>
			n('div', {
				style: { maxWidth: e?.type == 'list' || e?.type == 'radio' ? '500px' : '300px' },
				children: n(l, { ...e, pagination: r?.store?.pagination }),
			}),
		loaders: [async () => (await i.search(), { controller: i })],
		args: { label: '', type: 'list' },
	},
	o = {
		render: (e, { loaded: { controller: r } }) =>
			n('div', {
				style: { maxWidth: e?.type == 'list' || e?.type == 'radio' ? '500px' : '300px' },
				children: n(l, { ...e, pagination: r?.store?.pagination }),
			}),
		loaders: [async () => (await s.search(), { controller: s })],
		args: { label: 'Per Page', type: 'radio' },
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: PerPageProps, {
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
                <PerPage {...args} pagination={controller?.store?.pagination} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    label: 'Per Page'
  }
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
  render: (args: PerPageProps, {
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
                <PerPage {...args} pagination={controller?.store?.pagination} />
            </div>;
  },
  loaders: [async () => {
    await snapInstanceList.search();
    return {
      controller: snapInstanceList
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
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: PerPageProps, {
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
                <PerPage {...args} pagination={controller?.store?.pagination} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    label: 'Per Page',
    type: 'radio'
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const B = ['Default', 'List', 'Radio'];
export { t as Default, a as List, o as Radio, B as __namedExportsOrder, z as default };
