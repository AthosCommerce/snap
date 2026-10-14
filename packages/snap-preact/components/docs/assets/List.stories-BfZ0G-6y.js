import { j as t } from './iframe-CXSVAHru.js';
import { L as n } from './List-DGhdnIhb.js';
import { S as d } from './snapify-CnhKBMyG.js';
import { c as u } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './selectionKey-CmN2KTR5.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-CXNoFSPC.js';
import './useA11y-BuGQuOJb.js';
import './handleize-xLHhB8k5.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const m =
		"# List\n\nRenders a list of options.\n\n## Sub-components\n- Checkbox\n\n## Usage\n```tsx\nimport { List } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<List options={store.options} />\n```\n\n### hideOptionCheckboxes\nThe `hideOptionCheckboxes` prop will disable the checkbox elements from rendering.\n\n```tsx\n<List options={store.options} hideOptionCheckboxes={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will disable the option label elements from rendering.\n\n```tsx\n<List options={store.options} hideOptionLabels={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will disable the option icon elements from rendering.\n\n```tsx\n<List options={store.options} hideOptionIcons={true} />\n```\n\n### requireSelection\nThe `requireSelection` prop will enable/disable the ability to have no options selected.\n\n```tsx\n<List options={store.options} requireSelection={false} />\n```\n\n### multiSelect\nThe `multiSelect` prop will enable/disable the ability to select more than one option at a time.\n\n```tsx\n<List options={store.options} multiSelect={true} />\n```\n\n### horizontal\nThe `horizontal` prop will render the list options horizontally.\n\n```tsx\n<List options={store.options} horizontal={true} />\n```\n\n### native\nThe `native` prop is a boolean to render unstyled native checkbox elements\n\n```tsx\n<List options={store.options} native={true} />\n```\n\n### titleText\nThe `titleText` prop is will render a title element\n\n```tsx\n<List options={store.options} titleText={'Per Page'} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop is will hide the title element\n\n```tsx\n<List options={store.options} titleText={'Per Page'} hideTitleText={true} />\n```\n\n### disabled\nThe `disabled` prop will put the inputs in a disabled state.\n\n```tsx\n<List options={store.options} disabled={true} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected option. It accepts either a single Option object (for single-select lists) or, when `multiSelect` is enabled, an array of Option objects representing the selected options.\n```tsx\n<List options={store.pagination.pageSizeOptions} selected={store.pagination.pageSizeOptions[0]} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<List options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the List component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Optional title text above the list | `options` (ListOption[]), `selectedOptions` (ListOption[]) |\n\n### Example\n\n```tsx\n<List\n	options={options}\n	lang={{\n		title: {\n			value: 'Select an option',\n		},\n	}}\n/>\n```",
	{ fn: h } = __STORYBOOK_MODULE_TEST__,
	q = {
		title: 'Molecules/List',
		component: n,
		parameters: { docs: { description: { component: m } } },
		decorators: [(e) => t(e, {})],
		args: { onSelect: h() },
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
			hideTitleText: {
				description: 'hide title text',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionCheckboxes: {
				description: 'enable/disable checkboxes',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionIcons: {
				description: 'enable/disable option icons',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionLabels: {
				description: 'enable/disable option labels',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			requireSelection: {
				description: 'enable/disable requireSelection',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			multiSelect: {
				description: 'enable/disable multiselect',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			horizontal: {
				defaultValue: !1,
				description: 'render the list options horizontally',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onSelect: { description: 'option onSelect event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			disabled: {
				description: 'boolean to set the select in a disabled state',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			native: {
				description: 'boolean to render unstyled native checkbox elements',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			selected: { description: 'Current selected option', table: { category: 'Templates Legal', type: { summary: 'string | number' } }, control: !1 },
			...u,
		},
	},
	p = d.search({ id: 'List', globals: { siteId: 'atkzs2' } }),
	s = {
		render: (e) => t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(n, { ...e }) }),
		args: { options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }] },
	},
	r = {
		render: (e) => t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(n, { ...e }) }),
		args: { options: [{ value: 'one', disabled: !0 }, { value: 'two' }, { value: 'three' }, { value: 'four' }] },
	},
	c = [
		{ label: '1 wide', value: '1 wide', icon: 'square' },
		{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
		{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
	],
	a = {
		render: (e) => t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(n, { ...e }) }),
		args: { requireSelection: !0, options: c, selected: c[0] },
	},
	i = {
		render: (e, { loaded: { controller: o } }) =>
			t('div', {
				style: { maxWidth: e?.horizontal ? '1200px' : '500px' },
				children: t(n, { ...e, options: o.store.pagination.pageSizeOptions, selected: o.store.pagination.pageSizeOptions[0] }),
			}),
		loaders: [async () => (await p.search(), { controller: p })],
		args: { titleText: 'Per Page', requireSelection: !0 },
	},
	l = {
		render: (e, { loaded: { controller: o } }) =>
			t('div', {
				style: { maxWidth: e?.horizontal ? '1200px' : '500px' },
				children: t(n, { ...e, options: o?.store?.sorting.options, selected: o?.store?.sorting.current }),
			}),
		loaders: [async () => (await p.search(), { controller: p })],
		args: { titleText: 'Sort By', requireSelection: !0 },
	};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ListProps) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <List {...args} />
            </div>;
  },
  args: {
    options: [{
      value: 'one'
    }, {
      value: 'two'
    }, {
      value: 'three'
    }, {
      value: 'four'
    }]
  } as ListProps
}`,
			...s.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ListProps) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <List {...args} />
            </div>;
  },
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
    }]
  } as ListProps
}`,
			...r.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ListProps) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <List {...args} />
            </div>;
  },
  args: {
    requireSelection: true,
    options: viewOptions,
    selected: viewOptions[0]
  } as ListProps
}`,
			...a.parameters?.docs?.source,
		},
	},
};
i.parameters = {
	...i.parameters,
	docs: {
		...i.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ListProps, {
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
                <List {...args} options={controller.store.pagination.pageSizeOptions} selected={controller.store.pagination.pageSizeOptions[0]} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    titleText: 'Per Page',
    requireSelection: true
  } as Partial<ListProps>
}`,
			...i.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ListProps, {
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
                <List {...args} options={controller?.store?.sorting.options} selected={controller?.store?.sorting.current} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    titleText: 'Sort By',
    requireSelection: true
  } as Partial<ListProps>
}`,
			...l.parameters?.docs?.source,
		},
	},
};
const I = ['Default', 'DisabledOption', 'Icons', 'PerPage', 'SortBy'];
export { s as Default, r as DisabledOption, a as Icons, i as PerPage, l as SortBy, I as __namedExportsOrder, q as default };
