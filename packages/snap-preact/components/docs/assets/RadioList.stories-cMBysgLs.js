import { j as t } from './iframe-U9T2Y9ZS.js';
import { R as n } from './RadioList-Dpb6I9cR.js';
import { S as d } from './snapify-Df13VkEj.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './Radio-CBQqiZ56.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './selectionKey-CmN2KTR5.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const u =
		"# RadioList\n\nRenders a list of options with radio inputs.\n\n## Sub-components\n- Radio\n\n## Usage\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<RadioList options={store.options} />\n```\n\n### native\nThe `native` prop will use native html `<input type='radio'>` elements.\n\n```tsx\n<RadioList options={store.options} native={true} />\n```\n\n### hideOptionRadios\nThe `hideOptionRadios` prop will disable the option radio elements from rendering.\n\n```tsx\n<RadioList options={store.options} hideOptionRadios={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will disable the option label elements from rendering.\n\n```tsx\n<RadioList options={store.options} hideOptionLabels={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will disable the option icon elements from rendering.\n\n```tsx\n<RadioList options={store.options} hideOptionIcons={true} />\n```\n\n### titleText\nThe `titleText` prop is will render a title element\n\n```tsx\n<RadioList options={store.options} titleText={'Per Page'} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop is will hide the title text.\n\n```tsx\n<RadioList options={store.options} titleText={'Per Page'} hideTitleText={true} />\n```\n\n### disabled\nThe `disabled` prop will put the inputs in a disabled state.\n\n```tsx\n<RadioList options={store.options} disabled={true} />\n```\n\n### horizontal\nThe `horizontal` prop will determine if the radio list options should render horizontally.\n\n```tsx\n<RadioList options={store.options} horizontal={true} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. \n\n```tsx\n<RadioList options={store.pagination.pageSizeOptions} selected={store.pagination.pageSizeOptions[0]} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<RadioList options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the RadioList component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Optional title text above the radio list | `options` (ListOption[]), `selectedOptions` (ListOption[]) |\n\n### Example\n\n```tsx\n<RadioList\n	options={options}\n	lang={{\n		title: {\n			value: 'Choose an option',\n		},\n	}}\n/>\n```\n",
	{ fn: m } = __STORYBOOK_MODULE_TEST__,
	S = {
		title: 'Molecules/RadioList',
		component: n,
		parameters: { docs: { description: { component: u } } },
		decorators: [(e) => t(e, {})],
		args: { onSelect: m() },
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
			native: {
				description: 'use native HTML radio inputs',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionRadios: {
				description: 'enable/disable radio icons',
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
			onSelect: { description: 'option onSelect event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			horizontal: {
				description: 'boolean to set the radio list in a horizontal layout',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disabled: {
				description: 'boolean to set the select in a disabled state',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			selected: { description: 'Current selected option', table: { category: 'Templates Legal', type: { summary: 'string | number' } }, control: !1 },
			...c,
		},
	},
	p = d.search({ id: 'RadioList', globals: { siteId: 'atkzs2' } }),
	a = {
		render: (e) => t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(n, { ...e }) }),
		args: { options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }] },
	},
	i = {
		render: (e) => t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(n, { ...e }) }),
		args: {
			options: [
				{ label: '1 wide', value: '1 wide', icon: 'square' },
				{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
				{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
			],
		},
	},
	s = {
		render: (e) => t('div', { style: { maxWidth: e?.horizontal ? '1200px' : '500px' }, children: t(n, { ...e }) }),
		args: { native: !0, options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }] },
	},
	r = {
		render: (e, { loaded: { controller: o } }) =>
			t('div', {
				style: { maxWidth: e?.horizontal ? '1200px' : '500px' },
				children: t(n, { ...e, options: o.store.pagination.pageSizeOptions, selected: o.store.pagination.pageSizeOptions[0] }),
			}),
		loaders: [async () => (await p.search(), { controller: p })],
		args: { titleText: 'Per Page' },
	},
	l = {
		render: (e, { loaded: { controller: o } }) =>
			t('div', {
				style: { maxWidth: e?.horizontal ? '1200px' : '500px' },
				children: t(n, { ...e, options: o?.store?.sorting.options, selected: o?.store?.sorting.current }),
			}),
		loaders: [async () => (await p.search(), { controller: p })],
		args: { titleText: 'Sort By' },
	};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: RadioListProps) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <RadioList {...args} />
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
  } as RadioListProps
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
  render: (args: RadioListProps) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <RadioList {...args} />
            </div>;
  },
  args: {
    options: [{
      label: '1 wide',
      value: '1 wide',
      icon: 'square'
    }, {
      label: '2 wide',
      value: '2 wide',
      icon: {
        icon: 'layout-large'
      }
    }, {
      label: '3 wide',
      value: '3 wide',
      icon: {
        icon: 'layout-grid'
      }
    }]
  } as RadioListProps
}`,
			...i.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: RadioListProps) => {
    return <div style={{
      maxWidth: args?.horizontal ? '1200px' : '500px'
    }}>
                <RadioList {...args} />
            </div>;
  },
  args: {
    native: true,
    options: [{
      value: 'one'
    }, {
      value: 'two'
    }, {
      value: 'three'
    }, {
      value: 'four'
    }]
  } as RadioListProps
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
  render: (args: RadioListProps, {
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
                <RadioList {...args} options={controller.store.pagination.pageSizeOptions} selected={controller.store.pagination.pageSizeOptions[0]} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    titleText: 'Per Page'
  } as RadioListProps
}`,
			...r.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: RadioListProps, {
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
                <RadioList {...args} options={controller?.store?.sorting.options} selected={controller?.store?.sorting.current} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    titleText: 'Sort By'
  } as RadioListProps
}`,
			...l.parameters?.docs?.source,
		},
	},
};
const z = ['Default', 'Icons', 'Native', 'PerPage', 'SortBy'];
export { a as Default, i as Icons, s as Native, r as PerPage, l as SortBy, z as __namedExportsOrder, S as default };
