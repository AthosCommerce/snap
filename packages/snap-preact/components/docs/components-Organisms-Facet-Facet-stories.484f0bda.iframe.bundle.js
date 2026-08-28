(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1555],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(Y, P, e) {
				'use strict';
				const t = (a) => a.replace(/_/g, '-').toLowerCase();
				e.d(P, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(Y, P, e) {
				'use strict';
				e.d(P, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let m = a.toLowerCase();
					return (m = m.replace(/[^\w\s]/g, '').trim()), (m = m.replace(/\s/g, '-')), m;
				}
			},
			'./components/src/components/Organisms/Facet/Facet.stories.tsx'(Y, P, e) {
				'use strict';
				e.r(P),
					e.d(P, {
						Grid: () => j,
						Hierarchy: () => f,
						List: () => v,
						Palette: () => A,
						Slider: () => i,
						__namedExportsOrder: () => x,
						default: () => n,
					});
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					_ = e('./components/src/components/Atoms/Icon/paths.tsx'),
					y = e('./components/src/types.ts'),
					I = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const p =
						"# Facet\n\nRenders a single complete facet. This includes determining the correct options type, a collapsable header, and overflow options. \n\n## Sub-components\n- Dropdown\n- FacetHierarchyOptions\n- FacetGridOptions\n- FacetListOptions\n- FacetPaletteOptions\n- FacetToggle\n- FacetSlider\n- Icon\n- SearchInput\n- Button\n\n\n## Usage\n```tsx\nimport { Facet } from '@athoscommerce/snap-preact/components';\n```\n\n### facet\nThe required `facet` prop specifies a reference to any single facet object within the facets store array. \n\n```tsx\n<Facet facet={controller.store.facets[0]} />\n```\n\n### disableCollapse\nThe `disableCollapse` prop prevents the facet from toggling its collapse state. \n\n```tsx\n<Facet facet={controller.store.facets[0]} disableCollapse={true} />\n```\n\n### color\nThe `color` prop sets the facet name and icon color.\n\n```tsx\n<Facet facet={controller.store.facets[0]} color={'#222222'} />\n```\n\n### limit\nThe `limit` prop sets the number of options to display before the remaining options overflow and a show more/less button is displayed. \n\n```tsx\n<Facet facet={controller.store.facets[0]} limit={10} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```tsx\n<Facet facet={controller.store.facets[0]} previewOnFocus={true} />\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} valueProps={valueProps} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconCollapse={'angle-up'} />\n```\n\n### showMoreText\nThe `showMoreText` prop contains the text to display in the facet overflow button when collapsed. Default is `'Show More'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} showMoreText={'Show More'} />\n```\n\n### showLessText\nThe `showLessText` prop contains the text to display in the facet overflow button when expanded. Default is `'Show Less'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} showLessText={'Show Less'} />\n```\n\n## hideShowMoreLessText\nThe `hideShowMoreLessText` prop hides the show more / show less text.\n\n```tsx\n<Facet facet={controller.store.facets[0]} hideShowMoreLessText={true} />\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet in the facet header. NOTE: this prop will not work if `justContent` prop enabled. \n\n```tsx\n<Facet facet={controller.store.facets[0]} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header. NOTE: this prop will not work if `justContent` prop enabled. \n\n```tsx\n<Facet facet={controller.store.facets[0]} hideSelectedCountParenthesis={true} />\n```\n\n### rangeInputs\nThe `rangeInputs` prop specifies if the range inputs should render. \n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} />\n```\n\n### rangeInputsSubmitButtonText\nThe `rangeInputsSubmitButtonText` prop specifies the text to be rendered in the range input submit button. \n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitButtonText={'Filter by Price'}/>\n```\n\n### rangeInputsPrefix\nThe `rangeInputsPrefix` prop specifies the prefix to render next to the range inputs.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsPrefix={'$'}/>\n```\n\n### rangeInputsSeparatorText\nThe `rangeInputsSeparatorText` prop specifies the separator text to render between the range inputs.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSeparatorText={' to '}/>\n```\n\n### rangeInputsInheritDefaultValues\nThe `rangeInputsInheritDefaultValues` prop enables the facet range input values to default to the facet low and high limits.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsInheritDefaultValues={true}/>\n```\n\n### rangeInputsSubmitOnBlur\nThe `rangeInputsSubmitOnBlur` prop submits the range inputs when either input loses focus (blur).\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitOnBlur={true}/>\n```\n\n### hideRangeInputsSubmitButton\nThe `hideRangeInputsSubmitButton` prop hides the range inputs submit button.\n\n```tsx\n<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitOnBlur={true} hideRangeInputsSubmitButton={true}/>\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<Facet facet={controller.store.facets[0]} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<Facet facet={controller.store.facets[0]} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<Facet facet={controller.store.facets[0]} clearAllIcon={'ban'} />\n```\n\n\n### iconOverflowMore\nThe `iconOverflowMore` prop contains the icon name of the facet overflow button when collapsed. Default is `'plus'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconOverflowMore={'plus'} />\n```\n\n### iconOverflowLess\nThe `iconOverflowLess` prop contains the icon name of the facet overflow button when expanded. Default is `'minus'`\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconOverflowLess={'minus'} />\n```\n\n### overflowSlot\nThe `overflowSlot` prop is a JSX element used to change the display of the show more/less toggle.\n\n```js\nconst Overflow = (props) => {\n	const facet = props.facet;\n	return (\n		<div>Show { facet.overflow.remaining > 0 ? `${facet.overflow.remaining} ` : ''}{facet.overflow.remaining > 0 ? 'more' : 'less'}...</div>\n	)\n}\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} overflowSlot={<Overflow/>} />\n```\n\n\n### fields\nThe `fields` prop allows you to manually change prop values on a per-facet level, sorted by the facet field.\n\n```js\nconst fieldsProp = {\n	Color: {\n		limit: 6,\n	},\n	Size: { \n		disableOverflow: true,\n		disableCollapse: true,\n	}\n},\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} fields={fieldsProp} />\n```\n\n\n### display\nThe `display` prop allows you to manually change prop values on a per-facet display type level\n\n```typescript\nconst displayProp = {\n	display: {\n		list: {\n			limit: 5,\n		},\n		hierarchy: {\n			limit: 3\n		},\n		grid: {\n			limit: 10\n		},\n		palette: {\n			limit: 20\n		}\n	}\n},\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} display={displayProp} />\n```\n\n### displayType\nThe `displayType` prop overrides the display type provided by the meta API, changing which options component the facet renders with. Accepts `'list'`, `'grid'`, or `'palette'` \u2014 only these display types are interchangeable. If the facet's API display type is not one of these (eg. `'slider'`, `'hierarchy'`), or the override value is not one of these, the prop is ignored and the API display type is used. Note that while a `'palette'` facet can be displayed as any of the other types, fields not intended for palette display may not render well as a palette (option values are used as swatch colors).\n\n```tsx\n<Facet facet={controller.store.facets[0]} displayType={'list'} />\n```\n\nWhen using Snap Templates, `displayType` can be set via theme overrides \u2014 including responsively per breakpoint and scoped to a specific component tree. For example, to render autocomplete facets as a list across all breakpoints while keeping the API display type (eg. `palette`) on desktop and everywhere in search:\n\n```typescript\nnew SnapTemplates({\n	config: {\n		theme: {\n			extends: 'pike',\n			overrides: {\n				default: {\n					'autocompleteFixed facet': {\n						displayType: 'list',\n					},\n				},\n			},\n		},\n	},\n	// ...\n});\n```\n\n### optionsSlot\nThe `optionsSlot` prop is a JSX element used to manually set the options component used, regardless of the facet.display type. Returns the facet,valueProps, limit, & previewOnFocus prop values.\n\n```js\nconst CustomFacetOptions = (props) => {\n	const facet = props.facet;\n	return (\n		<div>\n			{facet && facet.values.map(value => <span>{value.label}</span>)}\n		</div>\n	)\n}\n```\n\n```tsx\n<Facet facet={controller.store.facets[0]} optionsSlot={<CustomFacetOptions/>} />\n```\n\n\n### iconColor\nThe `iconColor` prop sets the facet icon color.\n\n```tsx\n<Facet facet={controller.store.facets[0]} iconColor={'#222222'} />\n```\n\n### justContent\nThe `justContent` prop renders just the facet options. Excludes rendering of the Dropdown sub-component.\n\n```tsx\n<Facet facet={controller.store.facets[0]}  justContent={true} />\n```\n\n### horizontal\nThe `horizontal` prop renders the facet horizontally.\n\n```tsx\n<Facet facet={controller.store.facets[0]}  horizontal={true} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Facet component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `showMoreText` | Show more options button text | `facet` (ValueFacet \\| RangeFacet) |\n| `showLessText` | Show less options button text | `facet` (ValueFacet \\| RangeFacet) |\n| `dropdownButton` | Facet dropdown toggle button attributes | `facet` (ValueFacet \\| RangeFacet) |\n| `clearAllText` | Clear all selections button text | `facet` (ValueFacet \\| RangeFacet) |\n| `submitRangeButton` | Range input submit button text | `facet` (ValueFacet \\| RangeFacet) |\n\n### Example\n\n```tsx\n<Facet\n	facet={controller.store.facets[0]}\n	lang={{\n		showMoreText: {\n			value: (data) => `Show more ${data.facet.label} options`,\n		},\n		showLessText: {\n			value: 'Show fewer options',\n		},\n		dropdownButton: {\n			attributes: {\n				'aria-label': (data) => `${data.facet.collapsed ? 'expand' : 'collapse'} ${data.facet.label} filter`,\n			},\n		},\n		clearAllText: {\n			value: 'Clear filters',\n		},\n	}}\n/>\n```\n",
					n = {
						title: 'Organisms/Facet',
						component: E.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: I.Z } }, children: p }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(l) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(l, {}) })],
						argTypes: {
							facet: {
								description: 'Facet store reference',
								type: { required: !0 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
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
								options: [...Object.keys(_.c)],
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
								options: [...Object.keys(_.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								defaultValue: 'angle-up',
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(_.c)],
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
								options: [...Object.keys(_.c)],
								control: { type: 'select' },
							},
							iconOverflowLess: {
								defaultValue: 'minus',
								description: 'Icon for when facet can show less',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'minus' } },
								options: [...Object.keys(_.c)],
								control: { type: 'select' },
							},
							overflowSlot: {
								description: 'Slot for custom overflow (show more/less) button',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
								control: { type: 'none' },
							},
							optionsSlot: {
								description: 'Slot for custom facet option components',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
								control: { type: 'none' },
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
							...c.F,
						},
					},
					h = o.p.search({ id: 'Facet', globals: { siteId: 'atkzs2' } }),
					D = (0, a.PA)(({ args: l, controller: s }) =>
						(0, t.Y)(E.s, { ...l, facet: s?.store?.facets.filter((u) => u.display === y.Q.LIST).shift() })
					),
					v = (l, { loaded: { controller: s } }) => (0, t.Y)(D, { args: l, controller: s });
				v.loaders = [async () => (await h.search(), { controller: h })];
				const M = (0, a.PA)(({ args: l, controller: s }) => {
						const u = s?.store?.facets.filter((L) => L.display === y.Q.SLIDER).shift();
						return u ? (0, t.Y)(E.s, { ...l, facet: u }) : (0, t.Y)('div', {});
					}),
					i = (l, { loaded: { controller: s } }) => (0, t.Y)(M, { args: l, controller: s });
				i.loaders = [async () => (await h.search(), { controller: h })];
				const F = (0, a.PA)(({ args: l, controller: s }) => {
						const u = s?.store?.facets.filter((L) => L.display === y.Q.PALETTE).shift();
						return u ? (0, t.Y)(E.s, { ...l, facet: u }) : (0, t.Y)('div', {});
					}),
					A = (l, { loaded: { controller: s } }) => (0, t.Y)(F, { args: l, controller: s });
				A.loaders = [async () => (await h.search(), { controller: h })];
				const $ = (0, a.PA)(({ args: l, controller: s }) => {
						const u = s?.store?.facets.filter((L) => L.display === y.Q.GRID).shift();
						return u ? (0, t.Y)(E.s, { ...l, facet: u }) : (0, t.Y)('div', {});
					}),
					j = (l, { loaded: { controller: s } }) => (0, t.Y)($, { args: l, controller: s });
				j.loaders = [async () => (await h.search(), { controller: h })];
				const S = (0, a.PA)(({ args: l, controller: s }) => {
						const u = s?.store?.facets.filter((L) => L.display === y.Q.HIERARCHY).shift();
						return u ? (0, t.Y)(E.s, { ...l, facet: u }) : (0, t.Y)('div', {});
					}),
					f = (l, { loaded: { controller: s } }) => (0, t.Y)(S, { args: l, controller: s });
				(f.loaders = [async () => (await h.search(), { controller: h })]),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
							source: {
								originalSource: `(args: FacetProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <ObservableListFacet args={args} controller={controller} />`,
								...v.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(args: FacetProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <ObservableSliderFacet args={args} controller={controller} />`,
								...i.parameters?.docs?.source,
							},
						},
					}),
					(A.parameters = {
						...A.parameters,
						docs: {
							...A.parameters?.docs,
							source: {
								originalSource: `(args: FacetProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <ObservablePaletteFacet args={args} controller={controller} />`,
								...A.parameters?.docs?.source,
							},
						},
					}),
					(j.parameters = {
						...j.parameters,
						docs: {
							...j.parameters?.docs,
							source: {
								originalSource: `(args: FacetProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <ObservableGridFacet args={args} controller={controller} />`,
								...j.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: FacetProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <ObservableHierarchyFacet args={args} controller={controller} />`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const x = ['List', 'Slider', 'Palette', 'Grid', 'Hierarchy'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(Y, P, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					E = e.n(m),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					o = e('./components/src/hooks/useA11y.tsx'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = e('./components/src/hooks/useLang.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					F = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(F);
				const $ = ({ native: S, color: f, backgroundColor: x, borderColor: l, theme: s }) =>
						S
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: f || s?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: x || '#fff',
									border: `1px solid ${l || f || s?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					j = (0, _.PA)((S) => {
						const f = (0, I.u)(),
							l = { disableA11y: !1, treePath: (0, c.LU)() },
							s = (0, h.v6)('button', f, l, S),
							{
								content: u,
								children: L,
								disabled: k,
								native: N,
								onClick: X,
								disableA11y: G,
								disableStyles: q,
								className: H,
								internalClassName: Z,
								icon: K,
								lang: z,
								treePath: Q,
								style: oe,
								styleScript: se,
								themeStyleScript: ae,
								...r
							} = s,
							{ overrideElement: d, shouldRenderDefault: C } = (0, i._)('button', s);
						if (!C) return d;
						const T = { icon: { internalClassName: 'ss__button__icon', ...(0, n.s)({ disableStyles: q }), theme: s?.theme, treePath: Q } },
							O = {
								...(0, D.Z)(s, $),
								className: E()('ss__button', { 'ss__button--native': N, 'ss__button--disabled': k }, H, Z),
								disabled: k,
								onClick: (V) => !k && X && X(V),
								...r,
							},
							b = { ref: (V) => (0, o.iy)(V) },
							W = {},
							B = A()(W, z || {}),
							U = (0, M.u)(B, {}, { activeBreakpoint: f?.activeBreakpoint }),
							R = !!r.dangerouslySetInnerHTML;
						return u || L || K || z?.button?.value || R
							? (0, t.Y)(y._, {
									children: N
										? (0, t.FD)('button', {
												...O,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...U.button?.all,
														children: [(0, p.Y)(u, { treePath: Q }), (0, p.Y)(L, { treePath: Q })],
													}),
													K && (0, t.Y)(v.I, { ...T.icon, ...(typeof K == 'string' ? { icon: K } : K) }),
												],
										  })
										: (0, t.FD)('div', {
												...(G ? {} : b),
												role: 'button',
												'aria-disabled': k,
												...O,
												...U.button?.attributes,
												children: [
													u || L || U.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...U.button?.value,
																children: [(0, p.Y)(u, { treePath: Q }), (0, p.Y)(L, { treePath: Q })],
														  })
														: void 0,
													K && (0, t.Y)(v.I, { ...T.icon, ...(typeof K == 'string' ? { icon: K } : K) }),
												],
										  }),
							  })
							: null;
					});
				e.d(P, ['$', 0, j]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(Y, P, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/compat/dist/compat.module.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					y = e.n(_),
					I = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/hooks/useClickOutside.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/hooks/useA11y.tsx');
				const F = ({ disableOverlay: $ }) =>
						(0, E.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: $ ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${$ ? 'default' : 'pointer'}` },
							'.ss__dropdown__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
					A = (0, I.PA)(($) => {
						const j = (0, o.u)(),
							f = { startOpen: !1, disableA11y: !1, treePath: (0, p.LU)() },
							x = (0, v.v6)('dropdown', j, f, $),
							{
								button: l,
								content: s,
								children: u,
								disabled: L,
								open: k,
								toggleOnHover: N,
								onMouseEnter: X,
								onMouseLeave: G,
								disableClick: q,
								onClick: H,
								onToggle: Z,
								focusTrapContent: K,
								startOpen: z,
								disableClickOutside: Q,
								disableA11y: oe,
								className: se,
								internalClassName: ae,
								treePath: r,
								usePortal: d,
							} = x,
							{ overrideElement: C, shouldRenderDefault: T } = (0, h._)('dropdown', x);
						if (!T) return C;
						let g, O;
						const b = k === void 0;
						b ? ([g, O] = (0, m.J0)(z)) : (g = k);
						const [W, B] = (0, m.J0)(!1),
							U = (0, m.li)(null),
							R = (0, m.li)(null),
							[V, ee] = (0, m.J0)({ top: 0, left: 0, width: 0 });
						let re;
						Q ||
							(re = (0, n.L)((w) => {
								(d && R.current && R.current.contains(w.target)) || (g && (L || (b && O && O(!1), Z && Z(w, !1))));
							}, !0)),
							(0, m.Nf)(() => {
								if (d && g) {
									const w = () => {
										if (U.current) {
											const ne = U.current.getBoundingClientRect();
											ee({ top: ne.bottom + window.scrollY, left: ne.left + window.scrollX, width: ne.width });
										}
									};
									return (
										w(),
										window.addEventListener('resize', w),
										window.addEventListener('scroll', w, !0),
										() => {
											window.removeEventListener('resize', w), window.removeEventListener('scroll', w, !0);
										}
									);
								}
							}, [d, g]);
						const te = (w, ne) => {
								b &&
									O &&
									O((de) => {
										const ie = ne ?? !de;
										return ie != de && Z && Z(w, ie), ie;
									});
							},
							le = (0, M.Z)(x, F),
							J = {
								onMouseEnter:
									(N || X) &&
									((w) => {
										W || (N && !L && te(w, !0), X && X(w));
									}),
								onMouseLeave:
									(N || G) &&
									((w) => {
										W || (N && !L && te(w, !1), G && G(w));
									}),
							},
							ce = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (w) => {
									(R.current = w),
										oe ||
											(0, i.iy)(w, 0, !!K, (ne) => {
												b ? te(ne) : H && H(ne);
											});
								},
								children: [(0, D.Y)(s, { open: g, toggleOpen: te, treePath: r }), (0, D.Y)(u, { open: g, toggleOpen: te, treePath: r })],
							});
						return (0, t.Y)(c._, {
							children: (0, t.FD)('div', {
								...le,
								className: y()('ss__dropdown', { 'ss__dropdown--open': g }, se, ae),
								ref: re,
								...J,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (w) => {
											(U.current = w), oe || (0, i.iy)(w);
										},
										'aria-expanded': g,
										role: 'button',
										onTouchStart: () => {
											B(!0);
										},
										onClick: (w) => {
											!L && !q && (te(w), H && H(w)),
												setTimeout(() => {
													B(!1);
												}, 300);
										},
										children: (0, D.Y)(l, { open: g, toggleOpen: te, treePath: r }),
									}),
									d
										? (s || u) &&
										  (0, a.createPortal)(
												(0, t.Y)('div', {
													className: j.name ? `ss__theme__${j.name}` : 'ss__theme__global',
													children: (0, t.Y)('div', {
														className: y()('ss__dropdown__portal', se, ae, { 'ss__dropdown__portal--open': g }),
														css: le.css,
														style: {
															position: 'absolute',
															top: V.top,
															left: V.left,
															width: V.width,
															zIndex: 10007,
															pointerEvents: g ? 'auto' : 'none',
														},
														children: ce,
													}),
												}),
												document.body
										  )
										: (s || u) && ce,
								],
							}),
						});
					});
				e.d(P, ['m', 0, A]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(Y, P, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					_ = e.n(E),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = '//cdn.athoscommerce.net/snap/images/fallback.png',
					v = ({ height: i }) =>
						(0, m.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: i || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					M = (0, y.PA)((i) => {
						const F = (0, c.u)(),
							A = (0, o.LU)(),
							$ = { fallback: D, lazy: !0, treePath: A },
							j = (0, p.v6)('image', F, $, i),
							{
								alt: S,
								src: f,
								fallback: x,
								title: l,
								hoverSrc: s,
								lazy: u,
								onMouseOver: L,
								onMouseOut: k,
								onError: N,
								onLoad: X,
								onClick: G,
								onPointerDown: q,
								onPointerMove: H,
								onPointerUp: Z,
								onPointerLeave: K,
								className: z,
								internalClassName: Q,
								draggable: oe,
							} = j,
							{ overrideElement: se, shouldRenderDefault: ae } = (0, h._)('image', j);
						if (!ae) return se;
						const [r, d] = (0, a.J0)(!1),
							[C, T] = (0, a.J0)(!1),
							g = (0, a.li)('');
						(0, a.vJ)(() => {
							g.current = f;
						}),
							g.current && g.current != f && d(!1);
						const O = (0, n.Z)(j, v);
						return (0, t.Y)(I._, {
							children: (0, t.Y)('div', {
								...O,
								className: _()('ss__image', { 'ss__image--hidden': !r }, z, Q),
								children: (0, t.Y)('img', {
									src: (C ? s : f) || x,
									alt: S,
									title: l || S,
									loading: u ? 'lazy' : void 0,
									onLoad: (b) => {
										d(!0), X && X(b);
									},
									onClick: (b) => G && G(b),
									onError: (b) => {
										(b.target.src = x || ''), N && N(b);
									},
									onMouseOver: (b) => {
										s && T(!0), L && L(b);
									},
									onMouseOut: (b) => {
										s && T(!1), k && k(b);
									},
									onPointerDown: (b) => {
										q && q(b);
									},
									onPointerMove: (b) => {
										H && H(b);
									},
									onPointerUp: (b) => {
										Z && Z(b);
									},
									onPointerLeave: (b) => {
										K && K(b);
									},
									draggable: oe,
								}),
							}),
						});
					});
				e.d(P, ['_', 0, M, 't', 0, D]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(Y, P, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					_ = e.n(E),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/utilities/defined.ts'),
					c = e('./components/src/utilities/mergeProps.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('./components/src/hooks/useA11y.tsx'),
					M = e('./components/src/hooks/useLang.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					F = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(F);
				const $ = ({ size: S, color: f, theme: x, native: l }) => {
						const s = isNaN(Number(S)) ? S : `${S}px`;
						return l
							? (0, m.AH)({})
							: (0, m.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: s,
									width: s,
									border: `1px solid ${f || x?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${S} - 30%)`, height: `calc(${S} - 30%)` },
							  });
					},
					j = (0, y.PA)((S) => {
						const f = (0, n.u)(),
							l = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, h.LU)() },
							s = (0, c.v6)('checkbox', f, l, S),
							{
								checked: u,
								color: L,
								disabled: k,
								icon: N,
								iconColor: X,
								onClick: G,
								size: q,
								startChecked: H,
								native: Z,
								disableA11y: K,
								disableStyles: z,
								className: Q,
								internalClassName: oe,
								theme: se,
								treePath: ae,
								lang: r,
								style: d,
								styleScript: C,
								themeStyleScript: T,
								name: g,
								...O
							} = s,
							{ overrideElement: b, shouldRenderDefault: W } = (0, i._)('checkbox', s);
						if (!W) return b;
						const B = isNaN(Number(q)) ? q : `${q}px`,
							U = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, I.s)({ color: X || L || se?.variables?.colors?.primary, disableStyles: z, icon: N, size: B && `calc(${B} - 30%)` }),
									theme: s.theme,
									treePath: ae,
								},
							};
						let R, V;
						const ee = u === void 0;
						ee ? ([R, V] = (0, a.J0)(H)) : (R = u);
						const re = (w) => {
								k || (ee && V && V((ne) => !ne), G && G(w));
							},
							te = (0, o.Z)(s, $),
							le = { checkbox: {} },
							J = A()(le, r || {}),
							ce = (0, M.u)(J, { checkedState: R, disabled: k }, { activeBreakpoint: f?.activeBreakpoint });
						return (0, t.Y)(p._, {
							children: Z
								? (0, t.Y)('input', {
										...te,
										className: _()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': R }, Q, oe),
										type: 'checkbox',
										'aria-checked': R,
										onClick: (w) => re(w),
										disabled: k,
										checked: R,
								  })
								: (0, t.Y)('span', {
										...te,
										className: _()('ss__checkbox', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': R }, Q, oe),
										onClick: (w) => re(w),
										ref: (w) => (K ? null : (0, v.iy)(w)),
										'aria-disabled': k,
										role: 'checkbox',
										'aria-checked': R,
										...O,
										...ce.checkbox.all,
										children: R
											? (0, t.Y)(D.I, { ...U.icon, ...(typeof N == 'string' ? { icon: N } : N) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(P, ['S', 0, j]);
			},
			'./components/src/hooks/useA11y.tsx'(Y, P, e) {
				'use strict';
				e.d(P, { iy: () => _ });
				const t = 9,
					a = 27,
					m = 'ss-a11y',
					E =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function _(y, I, c, o) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = p),
							(n.innerHTML = `[${m}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					y &&
						!y.attributes?.[m] &&
						(y.setAttribute(m, !0),
						y.setAttribute('tabIndex', `${I || 0}`),
						y.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && n.target === y && y.click();
						}),
						c &&
							y.addEventListener('keydown', function (n) {
								const h = y.querySelectorAll(E),
									D = h[0],
									v = h[h.length - 1];
								if (n.keyCode == a) {
									y.focus(), o && o(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === t) &&
									(n.shiftKey
										? document.activeElement === D && (v.focus(), n.preventDefault())
										: document.activeElement === v && (D.focus(), n.preventDefault()));
							}));
				}
				e.d(P, ['DH', 0, E, 'aZ', 0, m]);
			},
			'./components/src/hooks/useClickOutside.tsx'(Y, P, e) {
				'use strict';
				e.d(P, { L: () => a });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(m, E = !1) {
					const _ = (0, t.li)(),
						y = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							_.current = m;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', I, E), () => document.removeEventListener('click', I, E);
							function I(c) {
								y.current && _.current && !y.current.contains(c.target) && _.current(c);
							}
						}, []),
						y
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(Y, P, e) {
				'use strict';
				const t = (a, m, E) => {
					const _ = E ? { ...m, ...E } : m,
						y = {};
					return (
						Object.keys(a).forEach((I) => {
							const c = a && a[I],
								o = {};
							c &&
								(c?.value &&
									(typeof c.value == 'function'
										? (o.value = { 'ss-lang': I, dangerouslySetInnerHTML: { __html: c.value(_) } })
										: (o.value = { 'ss-lang': I, dangerouslySetInnerHTML: { __html: c.value } })),
								c?.attributes &&
									Object.keys(c?.attributes).length &&
									((o.attributes = { 'ss-lang': I }),
									c?.attributes?.['aria-label'] &&
										(typeof c.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = c.attributes['aria-label'](_))
											: (o.attributes['aria-label'] = c.attributes['aria-label'])),
									c?.attributes?.['aria-valuetext'] &&
										(typeof c.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = c.attributes['aria-valuetext'](_))
											: (o.attributes['aria-valuetext'] = c.attributes['aria-valuetext'])),
									c?.attributes?.title &&
										(typeof c.attributes?.title == 'function'
											? (o.attributes.title = c.attributes.title(_))
											: (o.attributes.title = c.attributes.title)),
									c?.attributes?.alt &&
										(typeof c.attributes?.alt == 'function' ? (o.attributes.alt = c.attributes.alt(_)) : (o.attributes.alt = c.attributes.alt)),
									c?.attributes?.placeholder &&
										(typeof c.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = c.attributes.placeholder(_))
											: (o.attributes.placeholder = c.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': I })),
								(y[I] = o);
						}),
						y
					);
				};
				e.d(P, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(Y, P, e) {
				'use strict';
				const t = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				e.d(P, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(Y, P, e) {
				'use strict';
				e.d(P, { s: () => t });
				function t(a) {
					const m = {};
					return (
						Object.keys(a).map((E) => {
							a[E] !== void 0 && (m[E] = a[E]);
						}),
						m
					);
				}
			},
			'./components/src/utilities/snapify.ts'(Y, P, e) {
				'use strict';
				e.d(P, { p: () => A });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					F = { globals: { siteId: 'atkzs2' } };
				class A {
					static recommendation(x) {
						const l = x.id;
						if (i[l]) return i[l];
						const s = (i[l] = j({ client: F, controller: x }));
						return (
							s.on('afterStore', async ({ controller: u }, L) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await L();
							}),
							s.init(),
							s
						);
					}
					static autocomplete(x) {
						const l = x.id;
						if (i[l]) return i[l];
						const s = (i[l] = S({ client: F, controller: x }));
						return (
							s.on('afterStore', async ({ controller: u }, L) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await L();
							}),
							s.init(),
							s
						);
					}
					static search(x) {
						const l = x.id;
						if (i[l]) return i[l];
						const s = (i[l] = $({ client: F, controller: x }));
						return (
							s.on('afterStore', async ({ controller: u }, L) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await L();
							}),
							s.init(),
							s
						);
					}
				}
				function $(f) {
					const x = new o.V(new n.E({ settings: { coreType: 'query', corePrefix: f.controller.id } }), p.X);
					return new a.Tp(f.controller, {
						client: new _.K(f.client.globals, f.client.config),
						store: new I.U(f.controller, { urlManager: x }),
						urlManager: x,
						eventManager: new h.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new M.J(f.client.globals),
					});
				}
				function j(f) {
					const x = new o.V(new n.E(), p.X).detach(!0);
					return new E.c(f.controller, {
						client: new _.K(f.client.globals, f.client.config),
						store: new c.t(f.controller, { urlManager: x }),
						urlManager: x,
						eventManager: new h.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new M.J(f.client.globals),
					});
				}
				function S(f) {
					const x = new o.V(new n.E(), p.X).detach();
					return new m.Z(f.controller, {
						client: new _.K(f.client.globals, f.client.config),
						store: new y.Y(f.controller, { urlManager: x }),
						urlManager: x,
						eventManager: new h.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new M.J(f.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(Y, P, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					E = (_) => {
						const y = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								y.current && _.className?.includes('lang-') && !_.className?.includes(m) && window?.Prism?.highlightElement(y.current);
							}, [_.className, _.children, y]),
							(0, t.Y)('code', { ..._, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(P, ['Z', 0, E]);
			},
			'../../node_modules/colord/plugins/names.mjs'(Y, P, e) {
				'use strict';
				e.d(P, { A: () => t }), e.dn(t);
				function t(a, m) {
					var E = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						_ = {};
					for (var y in E) _[E[y]] = y;
					var I = {};
					(a.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var o,
							p,
							n = _[this.toHex()];
						if (n) return n;
						if (c?.closest) {
							var h = this.toRgb(),
								D = 1 / 0,
								v = 'black';
							if (!I.length) for (var M in E) I[M] = new a(E[M]).toRgb();
							for (var i in E) {
								var F = ((o = h), (p = I[i]), Math.pow(o.r - p.r, 2) + Math.pow(o.g - p.g, 2) + Math.pow(o.b - p.b, 2));
								F < D && ((D = F), (v = i));
							}
							return v;
						}
					}),
						m.string.push([
							function (c) {
								var o = c.toLowerCase(),
									p = o === 'transparent' ? '#0000' : E[o];
								return p ? new a(p).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(Y) {
				function P(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(P.keys = () => []), (P.resolve = P), (P.id = '../../node_modules/memoizerific sync recursive'), (Y.exports = P);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(Y, P, e) {
				'use strict';
				e.d(P, { d: () => c });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function a() {
					return (
						(a =
							Object.assign ||
							function (o) {
								for (var p = 1; p < arguments.length; p++) {
									var n = arguments[p];
									for (var h in n) Object.prototype.hasOwnProperty.call(n, h) && (o[h] = n[h]);
								}
								return o;
							}),
						a.apply(this, arguments)
					);
				}
				function m(o, p) {
					if (o == null) return {};
					var n = {},
						h = Object.keys(o),
						D,
						v;
					for (v = 0; v < h.length; v++) (D = h[v]), !(p.indexOf(D) >= 0) && (n[D] = o[D]);
					return n;
				}
				var E = function (p) {
						var n = p.getBoundingClientRect();
						return { left: Math.ceil(n.left), width: Math.ceil(n.width) };
					},
					_ = function (p) {
						return [].concat(p).sort(function (n, h) {
							return Number(n) - Number(h);
						});
					},
					y = function (p) {
						var n = t.default.useRef(p);
						return (
							(n.current = p),
							t.default.useCallback(function () {
								return n.current;
							}, [])
						);
					},
					I = {
						getPercentageForValue: function (p, n, h) {
							return Math.max(0, Math.min(100, ((p - n) / (h - n)) * 100));
						},
						getValueForClientX: function (p, n, h, D) {
							var v = n.left,
								M = n.width,
								i = (p - v) / M,
								F = (D - h) * i;
							return F + h;
						},
					};
				function c(o) {
					var p = o.interpolator,
						n = p === void 0 ? I : p,
						h = o.tickSize,
						D = h === void 0 ? 10 : h,
						v = o.values,
						M = o.min,
						i = o.max,
						F = o.ticks,
						A = o.steps,
						$ = o.onChange,
						j = o.onDrag,
						S = o.stepSize,
						f = t.default.useState(null),
						x = f[0],
						l = f[1],
						s = t.default.useState(),
						u = s[0],
						L = s[1],
						k = y({ activeHandleIndex: x, onChange: $, onDrag: j, values: v, tempValues: u }),
						N = t.default.useRef(),
						X = t.default.useCallback(
							function (r) {
								var d = E(N.current);
								return n.getValueForClientX(r, d, M, i);
							},
							[n, i, M]
						),
						G = t.default.useCallback(
							function (r, d) {
								if (A) {
									var C = A.indexOf(r),
										T = C + d;
									return T >= 0 && T < A.length ? A[T] : r;
								} else {
									var g = r + S * d;
									return g >= M && g <= i ? g : r;
								}
							},
							[i, M, S, A]
						),
						q = t.default.useCallback(
							function (r) {
								var d = M,
									C = i;
								if (A)
									A.forEach(function (T) {
										T <= r && T > d && (d = T), T >= r && T < C && (C = T);
									});
								else {
									for (; d < r && d + S < r; ) d += S;
									C = Math.min(d + S, i);
								}
								return r - d < C - r ? d : C;
							},
							[i, M, S, A]
						),
						H = t.default.useCallback(
							function (r) {
								var d = k(),
									C = d.activeHandleIndex,
									T = d.onDrag,
									g = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
									O = X(g),
									b = q(O),
									W = [].concat(v.slice(0, C), [b], v.slice(C + 1));
								T ? T(W) : L(W);
							},
							[k, X, q, v]
						),
						Z = t.default.useCallback(
							function (r, d) {
								var C = k(),
									T = C.values,
									g = C.onChange,
									O = g === void 0 ? function () {} : g;
								if (r.keyCode === 37 || r.keyCode === 39) {
									l(d);
									var b = r.keyCode === 37 ? -1 : 1,
										W = G(T[d], b),
										B = [].concat(T.slice(0, d), [W], T.slice(d + 1)),
										U = _(B);
									O(U);
								}
							},
							[k, G]
						),
						K = t.default.useCallback(
							function (r, d) {
								l(d);
								var C = function T(g) {
									var O = k(),
										b = O.tempValues,
										W = O.values,
										B = O.onChange,
										U = B === void 0 ? function () {} : B,
										R = O.onDrag,
										V = R === void 0 ? function () {} : R;
									document.removeEventListener('mousemove', H),
										document.removeEventListener('touchmove', H),
										document.removeEventListener('mouseup', T),
										document.removeEventListener('touchend', T);
									var ee = _(b || W);
									U(ee), V(ee), l(null), L();
								};
								document.addEventListener('mousemove', H),
									document.addEventListener('touchmove', H),
									document.addEventListener('mouseup', C),
									document.addEventListener('touchend', C);
							},
							[k, H]
						),
						z = t.default.useCallback(
							function (r) {
								return n.getPercentageForValue(r, M, i);
							},
							[n, i, M]
						),
						Q = t.default.useMemo(
							function () {
								var r = F || A;
								if (!r) {
									for (r = [M]; r[r.length - 1] < i - D; ) r.push(r[r.length - 1] + D);
									r.push(i);
								}
								return r.map(function (d, C) {
									return {
										value: d,
										getTickProps: function (g) {
											var O = g === void 0 ? {} : g,
												b = O.key,
												W = b === void 0 ? C : b,
												B = O.style,
												U = B === void 0 ? {} : B,
												R = m(O, ['key', 'style']);
											return a({ key: W, style: a({ position: 'absolute', width: 0, left: z(d) + '%', transform: 'translateX(-50%)' }, U) }, R);
										},
									};
								});
							},
							[F, z, i, M, A, D]
						),
						oe = t.default.useMemo(
							function () {
								var r = _(u || v);
								return [].concat(r, [i]).map(function (d, C) {
									return {
										value: d,
										getSegmentProps: function (g) {
											var O = g === void 0 ? {} : g,
												b = O.key,
												W = b === void 0 ? C : b,
												B = O.style,
												U = B === void 0 ? {} : B,
												R = m(O, ['key', 'style']),
												V = z(r[C - 1] ? r[C - 1] : M),
												ee = z(d) - V;
											return a({ key: W, style: a({ position: 'absolute', left: V + '%', width: ee + '%' }, U) }, R);
										},
									};
								});
							},
							[z, i, M, u, v]
						),
						se = t.default.useMemo(
							function () {
								return (u || v).map(function (r, d) {
									return {
										value: r,
										active: d === x,
										getHandleProps: function (T) {
											var g = T === void 0 ? {} : T,
												O = g.key,
												b = O === void 0 ? d : O,
												W = g.ref,
												B = g.innerRef,
												U = g.onKeyDown,
												R = g.onMouseDown,
												V = g.onTouchStart,
												ee = g.style,
												re = ee === void 0 ? {} : ee,
												te = m(g, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return a(
												{
													key: b,
													onKeyDown: function (J) {
														J.persist(), Z(J, d), U && U(J);
													},
													onMouseDown: function (J) {
														J.persist(), K(J, d), R && R(J);
													},
													onTouchStart: function (J) {
														J.persist(), K(J, d), V && V(J);
													},
													role: 'slider',
													'aria-valuemin': M,
													'aria-valuemax': i,
													'aria-valuenow': r,
													style: a(
														{ position: 'absolute', top: '50%', left: z(r) + '%', zIndex: d === x ? '1' : '0', transform: 'translate(-50%, -50%)' },
														re
													),
												},
												te
											);
										},
									};
								});
							},
							[x, z, Z, K, M, i, u, v]
						),
						ae = function (d) {
							var C = d === void 0 ? {} : d,
								T = C.style,
								g = T === void 0 ? {} : T,
								O = C.ref,
								b = m(C, ['style', 'ref']);
							return a(
								{
									ref: function (B) {
										(N.current = B), O && (typeof O == 'function' ? O(B) : (O.current = B));
									},
									style: a({ position: 'relative', userSelect: 'none' }, g),
								},
								b
							);
						};
					return { activeHandleIndex: x, getTrackProps: ae, ticks: Q, segments: oe, handles: se };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facet-Facet-stories.484f0bda.iframe.bundle.js.map
