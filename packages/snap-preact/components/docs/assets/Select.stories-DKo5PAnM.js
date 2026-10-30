import { ah as c, j as o, o as d } from './iframe-U9T2Y9ZS.js';
import { S as s } from './Select-HVXhT1EH.js';
import { S as u } from './snapify-Df13VkEj.js';
import { c as m } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './selectionKey-CmN2KTR5.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './Button-rwG4FGUK.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const b =
		"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```tsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```tsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```tsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```tsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```tsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```tsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```tsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```tsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```tsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```tsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Select component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `buttonLabel` | The select dropdown button label | `options` (ListOption[]), `selectedOptions` (ListOption[]), `label` (string), `open` (boolean) |\n\n### Example\n\n```tsx\n<Select\n	options={options}\n	lang={{\n		buttonLabel: {\n			value: 'Select an option',\n			attributes: {\n				'aria-label': (data) => `${data.label} dropdown, ${data.options.length} options${data.selectedOptions.length ? `, selected: ${data.selectedOptions[0].label}` : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: y } = __STORYBOOK_MODULE_TEST__,
	j = {
		title: 'Molecules/Select',
		component: s,
		parameters: { docs: { description: { component: b } } },
		decorators: [(e) => o('div', { style: { maxWidth: '300px' }, children: o(e, {}) })],
		args: { onSelect: y() },
		argTypes: {
			options: {
				description: 'Select options from store reference',
				type: { required: !0 },
				table: { category: 'Templates Legal', type: { summary: 'Array of Option objects' } },
				control: !1,
			},
			selected: {
				description: 'Current selected options from store reference',
				table: { category: 'Templates Legal', type: { summary: 'Option object' } },
				control: !1,
			},
			disabled: {
				description: 'Disable select',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			label: { description: 'Header label', table: { category: 'Templates Legal', type: { summary: 'string, JSX' } }, control: { type: 'text' } },
			hideLabel: {
				description: 'hide the Header label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			clearSelection: {
				description: 'Unselect label',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			hideLabelOnSelection: {
				description: 'Hide label when selection has been made (non-native only)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideSelection: {
				description: 'Hide the current selection in the dropdown button (non-native only)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideIcon: {
				description: 'Hide the icon in the dropdown button (non-native only)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionIcons: {
				description: 'Hide the icon in the options (non-native only)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionLabels: {
				description: 'Hide the label in the options (non-native only)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			separator: {
				defaultValue: ': ',
				description: 'Select delimiter',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: ': ' } },
				control: { type: 'text' },
			},
			color: { description: 'Select color', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'color' } },
			borderColor: {
				description: 'Select border color',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			backgroundColor: {
				description: 'Select background color',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'color' },
			},
			iconColor: {
				description: 'Select icon color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#333' } },
				control: { type: 'color' },
			},
			iconOpen: {
				defaultValue: 'angle-down',
				description: 'Icon for when select is closed',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
				options: [...Object.keys(c)],
				control: { type: 'select' },
			},
			iconClose: {
				defaultValue: 'angle-up',
				description: 'Icon for when select is open',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
				options: [...Object.keys(c)],
				control: { type: 'select' },
			},
			stayOpenOnSelection: {
				defaultValue: !1,
				description: 'Keep dropdown open when an option is selected',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			startOpen: {
				defaultValue: !1,
				description: 'Open on initial render',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			native: {
				defaultValue: !1,
				description: 'Use native select element',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disableClickOutside: {
				defaultValue: !1,
				description: 'Ignore clicks outside of element',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onSelect: { description: 'Select onSelect event handler', table: { category: 'Templates Legal', type: { summary: 'function' } } },
			...m,
		},
	},
	a = u.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
	p = d(({ args: e, controller: n }) =>
		o(s, {
			...e,
			options: n?.store?.sorting?.options,
			selected: n?.store?.sorting?.current,
			onSelect: (g, i) => {
				i && i?.url?.go();
			},
		})
	),
	t = {
		render: (e, { loaded: { controller: n } }) => o(p, { args: e, controller: n }),
		loaders: [async () => (await a.search(), { controller: a })],
		args: { label: 'Sort By' },
	},
	r = {
		render: (e, { loaded: { controller: n } }) => o(p, { args: e, controller: n }),
		loaders: [async () => (await a.search(), { controller: a })],
		args: { label: 'Sort By', native: !0 },
	},
	l = {
		render: (e) =>
			o(s, {
				...e,
				options: [
					{ label: '1 wide', value: '1 wide', icon: 'square' },
					{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
					{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
				],
			}),
		args: { label: 'Layout' },
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SelectProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableSelect args={args} controller={controller} />;
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
			...t.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SelectProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableSelect args={args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    label: 'Sort By',
    native: true
  }
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
  render: (args: SelectProps) => {
    const iconOptions: ListOption[] = [{
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
    }];
    return <Select {...args} options={iconOptions} />;
  },
  args: {
    label: 'Layout'
  }
}`,
			...l.parameters?.docs?.source,
		},
	},
};
const _ = ['Default', 'Native', 'IconOptions'];
export { t as Default, l as IconOptions, r as Native, _ as __namedExportsOrder, j as default };
