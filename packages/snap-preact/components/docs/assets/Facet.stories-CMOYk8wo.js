import { ah as l, j as n, o as c } from './iframe-Bc4KSH0T.js';
import { F as s } from './Facet-JzgYSJ_F.js';
import { F as i } from './types-DqusP3LW.js';
import { S as h } from './snapify-DBnzfZp8.js';
import { c as y } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './Button-C4cTOUHA.js';
import './SearchInput-BPIgwblk.js';
import './FacetListOptions-BRsZOoKo.js';
import './Checkbox-4N2aMGfq.js';
import './Radio-CEEJysGh.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-sMDWNmLW.js';
import './FacetPaletteOptions-D2DLl7t9.js';
import './names-Cka5BSlk.js';
import './Image-9Pub_w4s.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-B4YG6F_c.js';
import './FacetSlider-Cclsjvzk.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const g =
		"# Facet\n\nRenders a single complete facet. This includes determining the correct options type, a collapsable header, and overflow options. \n\n## Sub-components\n- Dropdown\n- FacetHierarchyOptions\n- FacetGridOptions\n- FacetListOptions\n- FacetPaletteOptions\n- FacetToggle\n- FacetSlider\n- Icon\n- SearchInput\n- Button\n\n\n## Usage\n```tsx\nimport { Facet } from '@athoscommerce/snap-preact/components';\n```\n\n### facet\nThe required `facet` prop specifies a reference to any single facet object within the facets store array. \n\n```tsx\n<Facet facet={controller.store.facets[0]} />\n```\n\n### disableCollapse\nThe `disableCollapse` prop prevents the facet from toggling its collapse state. \n\n```tsx\n<Facet facet={controller.store.facets[0]} disableCollapse={true} />\n```\n\n### color\nThe `color` prop sets the facet name and icon color.\n\n```tsx\n<Facet facet={controller.store.facets[0]} color={'#222222'} />\n```\n\n### limit\nThe `limit` prop sets the number of options to display before the remaining options overflow and a show more/less button is displayed. \n\n```tsx\n<Facet facet={controller.store.facets[0]} limit={10} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```tsx\n<Facet facet={controller.store.facets[0]} previewOnFocus={true} />\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} valueProps={valueProps} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconCollapse={'angle-up'} />\n```\n\n### showMoreText\nThe `showMoreText` prop contains the text to display in the facet overflow button when collapsed. Default is `'Show More'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} showMoreText={'Show More'} />\n```\n\n### showLessText\nThe `showLessText` prop contains the text to display in the facet overflow button when expanded. Default is `'Show Less'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} showLessText={'Show Less'} />\n```\n\n## hideShowMoreLessText\nThe `hideShowMoreLessText` prop hides the show more / show less text.\n\n```tsx\n<Facet facet={controller.store.facets[0]} hideShowMoreLessText={true} />\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet in the facet header. NOTE: this prop will not work if `justContent` prop enabled. \n\n```tsx\n<Facet facet={controller.store.facets[0]} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header. NOTE: this prop will not work if `justContent` prop enabled. \n\n```tsx\n<Facet facet={controller.store.facets[0]} hideSelectedCountParenthesis={true} />\n```\n\n### rangeInputs\nThe `rangeInputs` prop specifies if the range inputs should render. \n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} />\n```\n\n### rangeInputsSubmitButtonText\nThe `rangeInputsSubmitButtonText` prop specifies the text to be rendered in the range input submit button. \n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitButtonText={'Filter by Price'}/>\n```\n\n### rangeInputsPrefix\nThe `rangeInputsPrefix` prop specifies the prefix to render next to the range inputs.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsPrefix={'$'}/>\n```\n\n### rangeInputsSeparatorText\nThe `rangeInputsSeparatorText` prop specifies the separator text to render between the range inputs.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSeparatorText={' to '}/>\n```\n\n### rangeInputsInheritDefaultValues\nThe `rangeInputsInheritDefaultValues` prop enables the facet range input values to default to the facet low and high limits.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsInheritDefaultValues={true}/>\n```\n\n### rangeInputsSubmitOnBlur\nThe `rangeInputsSubmitOnBlur` prop submits the range inputs when either input loses focus (blur).\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitOnBlur={true}/>\n```\n\n### hideRangeInputsSubmitButton\nThe `hideRangeInputsSubmitButton` prop hides the range inputs submit button.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitOnBlur={true} hideRangeInputsSubmitButton={true}/>\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<Facet facet={controller.store.facets[0]} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<Facet facet={controller.store.facets[0]} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<Facet facet={controller.store.facets[0]} clearAllIcon={'ban'} />\n```\n\n\n### iconOverflowMore\nThe `iconOverflowMore` prop contains the icon name of the facet overflow button when collapsed. Default is `'plus'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconOverflowMore={'plus'} />\n```\n\n### iconOverflowLess\nThe `iconOverflowLess` prop contains the icon name of the facet overflow button when expanded. Default is `'minus'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconOverflowLess={'minus'} />\n```\n\n### overflowSlot\nThe `overflowSlot` prop is a JSX element used to change the display of the show more/less toggle.\n\n```js\nconst Overflow = (props) => {\n	const facet = props.facet;\n	return (\n		<div>Show { facet.overflow.remaining > 0 ? `${facet.overflow.remaining} ` : ''}{facet.overflow.remaining > 0 ? 'more' : 'less'}...</div>\n	)\n}\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} overflowSlot={<Overflow/>} />\n```\n\n\n### fields\nThe `fields` prop allows you to manually change prop values on a per-facet level, sorted by the facet field.\n\n```js\nconst fieldsProp = {\n	Color: {\n		limit: 6,\n	},\n	Size: { \n		disableOverflow: true,\n		disableCollapse: true,\n	}\n},\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} fields={fieldsProp} />\n```\n\n\n### display\nThe `display` prop allows you to manually change prop values on a per-facet display type level\n\n```typescript\nconst displayProp = {\n	display: {\n		list: {\n			limit: 5,\n		},\n		hierarchy: {\n			limit: 3\n		},\n		grid: {\n			limit: 10\n		},\n		palette: {\n			limit: 20\n		}\n	}\n},\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} display={displayProp} />\n```\n\n### displayType\nThe `displayType` prop overrides the display type provided by the meta API, changing which options component the facet renders with. Accepts `'list'`, `'grid'`, or `'palette'` — only these display types are interchangeable. If the facet's API display type is not one of these (eg. `'slider'`, `'hierarchy'`), or the override value is not one of these, the prop is ignored and the API display type is used. Note that while a `'palette'` facet can be displayed as any of the other types, fields not intended for palette display may not render well as a palette (option values are used as swatch colors).\n\n```tsx\n<Facet facet={controller.store.facets[0]} displayType={'list'} />\n```\n\nWhen using Snap Templates, `displayType` can be set via theme overrides — including responsively per breakpoint and scoped to a specific component tree. For example, to render autocomplete facets as a list across all breakpoints while keeping the API display type (eg. `palette`) on desktop and everywhere in search:\n\n```typescript\nnew SnapTemplates({\n	config: {\n		theme: {\n			extends: 'pike',\n			overrides: {\n				default: {\n					'autocompleteFixed facet': {\n						displayType: 'list',\n					},\n				},\n			},\n		},\n	},\n	// ...\n});\n```\n\n### optionsSlot\nThe `optionsSlot` prop is a JSX element used to manually set the options component used, regardless of the facet.display type. Returns the facet,valueProps, limit, & previewOnFocus prop values.\n\n```js\nconst CustomFacetOptions = (props) => {\n	const facet = props.facet;\n	return (\n		<div>\n			{facet && facet.values.map(value => <span>{value.label}</span>)}\n		</div>\n	)\n}\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} optionsSlot={<CustomFacetOptions/>} />\n```\n\n\n### iconColor\nThe `iconColor` prop sets the facet icon color.\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconColor={'#222222'} />\n```\n\n### justContent\nThe `justContent` prop renders just the facet options. Excludes rendering of the Dropdown sub-component.\n\n```tsx\n<Facet facet={controller.store.facets[0]}  justContent={true} />\n```\n\n### horizontal\nThe `horizontal` prop renders the facet horizontally.\n\n```tsx\n<Facet facet={controller.store.facets[0]}  horizontal={true} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Facet component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `showMoreText` | Show more options button text | `facet` (ValueFacet \\| RangeFacet) |\n| `showLessText` | Show less options button text | `facet` (ValueFacet \\| RangeFacet) |\n| `dropdownButton` | Facet dropdown toggle button attributes | `facet` (ValueFacet \\| RangeFacet) |\n| `clearAllText` | Clear all selections button text | `facet` (ValueFacet \\| RangeFacet) |\n| `submitRangeButton` | Range input submit button text | `facet` (ValueFacet \\| RangeFacet) |\n\n### Example\n\n```tsx\n<Facet\n	facet={controller.store.facets[0]}\n	lang={{\n		showMoreText: {\n			value: (data) => `Show more ${data.facet.label} options`,\n		},\n		showLessText: {\n			value: 'Show fewer options',\n		},\n		dropdownButton: {\n			attributes: {\n				'aria-label': (data) => `${data.facet.collapsed ? 'expand' : 'collapse'} ${data.facet.label} filter`,\n			},\n		},\n		clearAllText: {\n			value: 'Clear filters',\n		},\n	}}\n/>\n```\n",
	U = {
		title: 'Organisms/Facet',
		component: s,
		parameters: { docs: { description: { component: g } } },
		decorators: [(e) => n('div', { style: { maxWidth: '300px' }, children: n(e, {}) })],
		argTypes: {
			facet: { description: 'Facet store reference', type: { required: !0 }, table: { type: { summary: 'facet store object' } }, control: !1 },
			limit: {
				defaultValue: 12,
				description: 'Number of facet options to display',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 12 } },
				control: { type: 'number' },
			},
			disableOverflow: {
				defaultValue: !1,
				description: 'Enable the use of an overflow (show more/less)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			searchable: {
				defaultValue: !1,
				description: 'Enables facet search within functionality',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			rangeInputs: {
				defaultValue: !1,
				description: 'Enables facet range inputs',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			rangeInputsSubmitButtonText: {
				defaultValue: 'Submit',
				description: 'Range input submit button text',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Submit' } },
				control: { type: 'text' },
			},
			rangeInputsPrefix: {
				description: 'Range inputs prefix text',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			rangeInputsInheritDefaultValues: {
				defaultValue: !1,
				description: 'Enables facet range input values to default to the facet low and high limits',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			rangeInputsSeparatorText: {
				description: 'Range inputs separator text',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: ' - ' } },
				control: { type: 'text' },
			},
			rangeInputsSubmitOnBlur: {
				defaultValue: !1,
				description: 'Submits the range inputs on blur.',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideRangeInputsSubmitButton: {
				defaultValue: !1,
				description: 'Hides the range inputs submit button.',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			color: { description: 'Select color', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'color' } },
			iconColor: {
				description: 'Select icon color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#333' } },
				control: { type: 'color' },
			},
			showSelectedCount: {
				description: 'shows the number of selected options within this facet in the facet header',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideSelectedCountParenthesis: {
				description: 'specifies if the parenthesis should render around the selected count',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			showClearAllText: {
				description: 'specifies if the clear all text should render',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			clearAllText: {
				description: 'text to show in the clear all link',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
				control: { type: 'text' },
			},
			clearAllIcon: {
				description: 'Icon to show in the clear all link',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				options: [...Object.keys(l)],
				control: { type: 'select' },
			},
			disableCollapse: {
				description: 'Disable collapse - used with internal state only',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			iconExpand: {
				defaultValue: 'angle-down',
				description: 'Icon for when facet is collapsed',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
				options: [...Object.keys(l)],
				control: { type: 'select' },
			},
			iconCollapse: {
				defaultValue: 'angle-up',
				description: 'Icon for when facet is expanded',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
				options: [...Object.keys(l)],
				control: { type: 'select' },
			},
			showMoreText: {
				defaultValue: 'Show More',
				description: "Change 'Show More' button text",
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Show More' } },
				control: { type: 'text' },
			},
			showLessText: {
				defaultValue: 'Show Less',
				description: "Change 'Show Less' button text",
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Show Less' } },
				control: { type: 'text' },
			},
			hideShowMoreLessText: {
				defaultValue: !1,
				description: 'hide show more / show less text',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			iconOverflowMore: {
				defaultValue: 'plus',
				description: 'Icon for when facet can show more',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
				options: [...Object.keys(l)],
				control: { type: 'select' },
			},
			iconOverflowLess: {
				defaultValue: 'minus',
				description: 'Icon for when facet can show less',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'minus' } },
				options: [...Object.keys(l)],
				control: { type: 'select' },
			},
			overflowSlot: {
				description: 'Slot for custom overflow (show more/less) button',
				table: { category: 'Templates Legal', type: { summary: 'component' } },
				control: !1,
			},
			optionsSlot: {
				description: 'Slot for custom facet option components',
				table: { category: 'Templates Legal', type: { summary: 'component' } },
				control: !1,
			},
			justContent: {
				defaultValue: !1,
				description: 'Render just the facet options. Excludes rendering of the Dropdown sub-component.',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			horizontal: {
				defaultValue: !1,
				description: 'Render facet options horizontally',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			previewOnFocus: {
				description: 'Invoke facet value preview upon focus',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			valueProps: {
				description: 'Object of facet value props',
				table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
				control: { type: 'object' },
			},
			fields: {
				defaultValue: {},
				description: 'Change props per facet',
				table: { category: 'Templates Legal', type: { summary: 'object' } },
				control: { type: 'object' },
			},
			display: {
				defaultValue: {},
				description: 'Change props per facet display type',
				table: { category: 'Templates Legal', type: { summary: 'object' } },
				control: { type: 'object' },
			},
			displayType: {
				description:
					'Override the API display type used to render the facet options - only list, grid and palette are interchangeable; misaligned overrides fall back to the API display type',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'select' },
				options: ['list', 'grid', 'palette'],
			},
			...y,
		},
	},
	o = h.search({ id: 'Facet', globals: { siteId: 'atkzs2' } }),
	b = c(({ args: e, controller: t }) => n(s, { ...e, facet: t?.store?.facets.filter((a) => a.display === i.LIST).shift() })),
	p = {
		render: (e, { loaded: { controller: t } }) => n(b, { args: e, controller: t }),
		loaders: [async () => (await o.search(), { controller: o })],
	},
	w = c(({ args: e, controller: t }) => {
		const a = t?.store?.facets.filter((r) => r.display === i.SLIDER).shift();
		return a ? n(s, { ...e, facet: a }) : n('div', {});
	}),
	u = {
		render: (e, { loaded: { controller: t } }) => n(w, { args: e, controller: t }),
		loaders: [async () => (await o.search(), { controller: o })],
	},
	T = c(({ args: e, controller: t }) => {
		const a = t?.store?.facets.filter((r) => r.display === i.PALETTE).shift();
		return a ? n(s, { ...e, facet: a }) : n('div', {});
	}),
	d = {
		render: (e, { loaded: { controller: t } }) => n(T, { args: e, controller: t }),
		loaders: [async () => (await o.search(), { controller: o })],
	},
	x = c(({ args: e, controller: t }) => {
		const a = t?.store?.facets.filter((r) => r.display === i.GRID).shift();
		return a ? n(s, { ...e, facet: a }) : n('div', {});
	}),
	f = {
		render: (e, { loaded: { controller: t } }) => n(x, { args: e, controller: t }),
		loaders: [async () => (await o.search(), { controller: o })],
	},
	v = c(({ args: e, controller: t }) => {
		const a = t?.store?.facets.filter((r) => r.display === i.HIERARCHY).shift();
		return a ? n(s, { ...e, facet: a }) : n('div', {});
	}),
	m = {
		render: (e, { loaded: { controller: t } }) => n(v, { args: e, controller: t }),
		loaders: [async () => (await o.search(), { controller: o })],
	};
p.parameters = {
	...p.parameters,
	docs: {
		...p.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <ObservableListFacet args={args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...p.parameters?.docs?.source,
		},
	},
};
u.parameters = {
	...u.parameters,
	docs: {
		...u.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <ObservableSliderFacet args={args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...u.parameters?.docs?.source,
		},
	},
};
d.parameters = {
	...d.parameters,
	docs: {
		...d.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <ObservablePaletteFacet args={args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...d.parameters?.docs?.source,
		},
	},
};
f.parameters = {
	...f.parameters,
	docs: {
		...f.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <ObservableGridFacet args={args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...f.parameters?.docs?.source,
		},
	},
};
m.parameters = {
	...m.parameters,
	docs: {
		...m.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <ObservableHierarchyFacet args={args} controller={controller} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...m.parameters?.docs?.source,
		},
	},
};
const Y = ['List', 'Slider', 'Palette', 'Grid', 'Hierarchy'];
export { f as Grid, m as Hierarchy, p as List, d as Palette, u as Slider, Y as __namedExportsOrder, U as default };
