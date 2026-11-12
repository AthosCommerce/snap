import { j as n } from './iframe-0uTqSs9S.js';
import { S as p } from './snapify-B992lD8l.js';
import { P as l } from './PerPage-D8pMV3P2.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
import './defined-CdKp_MB-.js';
import './Select-BGmz8t2_.js';
import './useA11y-BuGQuOJb.js';
import './selectionKey-CmN2KTR5.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './Button-CmsiLEAv.js';
import './List-PZ5HrgK2.js';
import './Checkbox-7fOTHZL3.js';
import './handleize-xLHhB8k5.js';
import './RadioList-DsDAvIw3.js';
import './Radio-Cqas9W8s.js';
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
The \`type\` prop specifies which type of PerPage component to render. You can choose from 1 of 3 options - "dropdown" | "list" | "radio".
By default "dropdown" is used. and will render a dropdown using the Select component. "radio" will render a RadioList component, and "list" will render a List component.

\`\`\`tsx
<PerPage controller={controller} type={'radio'} label={'Sort By'}/>
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
	D = {
		title: 'Molecules/PerPage',
		component: l,
		parameters: { docs: { description: { component: d } } },
		argTypes: {
			pagination: {
				description: 'reference to the SearchPaginationStore',
				type: { required: !1 },
				table: { type: { summary: 'reference to the SearchPaginationStore' } },
				control: !1,
			},
			controller: {
				description: 'reference to the Search Controller',
				table: { type: { summary: 'reference to the Search Controller' } },
				control: !1,
			},
			label: {
				description: 'Header label text to render.',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Per Page' } },
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
export { t as Default, a as List, o as Radio, B as __namedExportsOrder, D as default };
