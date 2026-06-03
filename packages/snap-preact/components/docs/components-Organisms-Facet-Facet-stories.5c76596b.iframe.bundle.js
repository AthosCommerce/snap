(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1555],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(D, T, t) {
				'use strict';
				t.d(T, { P: () => e });
				const e = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(D, T, t) {
				'use strict';
				t.d(T, { p: () => e });
				function e(l) {
					if (typeof l != 'string') return l;
					let p = l.toLowerCase();
					return (p = p.replace(/[^\w\s]/g, '').trim()), (p = p.replace(/\s/g, '-')), p;
				}
			},
			'./components/src/components/Organisms/Facet/Facet.stories.tsx'(D, T, t) {
				'use strict';
				t.r(T),
					t.d(T, {
						Grid: () => j,
						Hierarchy: () => h,
						List: () => m,
						Palette: () => L,
						Slider: () => r,
						__namedExportsOrder: () => w,
						default: () => c,
					});
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					p = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					C = t('./components/src/components/Organisms/Facet/Facet.tsx'),
					x = t('./components/src/components/Atoms/Icon/paths.tsx'),
					E = t('./components/src/types.ts'),
					K = t('./components/src/utilities/storybook.tsx'),
					V = t('./components/src/utilities/componentArgs.ts'),
					s = t('./components/src/utilities/snapify.ts');
				const d = `# Facet

Renders a single complete facet. This includes determining the correct options type, a collapsable header, and overflow options. 

## Sub-components
- Dropdown
- FacetHierarchyOptions
- FacetGridOptions
- FacetListOptions
- FacetPaletteOptions
- FacetToggle
- FacetSlider
- Icon
- SearchInput
- Button


## Usage
\`\`\`tsx
import { Facet } from '@athoscommerce/snap-preact/components';
\`\`\`

### facet
The required \`facet\` prop specifies a reference to any single facet object within the facets store array. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} />
\`\`\`

### disableCollapse
The \`disableCollapse\` prop prevents the facet from toggling its collapse state. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} disableCollapse={true} />
\`\`\`

### color
The \`color\` prop sets the facet name and icon color.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} color={'#222222'} />
\`\`\`

### limit
The \`limit\` prop sets the number of options to display before the remaining options overflow and a show more/less button is displayed. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} limit={10} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} previewOnFocus={true} />
\`\`\`

### valueProps
The \`valueProps\` prop will be spread onto each value's \`<a>\` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

\`\`\`js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
\`\`\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} valueProps={valueProps} />
\`\`\`

### iconExpand
The \`iconExpand\` prop is the name of the icon to render when the facet is in its collapsed state.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} iconExpand={'angle-down'} />
\`\`\`

### iconCollapse
The \`iconCollapse\` prop is the name of the icon to render when the facet is in its open state.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} iconCollapse={'angle-up'} />
\`\`\`

### showMoreText
The \`showMoreText\` prop contains the text to display in the facet overflow button when collapsed. Default is \`'Show More'\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} showMoreText={'Show More'} />
\`\`\`

### showLessText
The \`showLessText\` prop contains the text to display in the facet overflow button when expanded. Default is \`'Show Less'\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} showLessText={'Show Less'} />
\`\`\`

## hideShowMoreLessText
The \`hideShowMoreLessText\` prop hides the show more / show less text.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} hideShowMoreLessText={true} />
\`\`\`

### showSelectedCount
The \`showSelectedCount\` prop shows the number of selected options within the facet in the facet header. NOTE: this prop will not work if \`justContent\` prop enabled. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} showSelectedCount={true} />
\`\`\`

### hideSelectedCountParenthesis
The \`hideSelectedCountParenthesis\` prop specifies if the parenthesis should render around the selected count in the facet header. NOTE: this prop will not work if \`justContent\` prop enabled. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} hideSelectedCountParenthesis={true} />
\`\`\`

### rangeInputs
The \`rangeInputs\` prop specifies if the range inputs should render. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} />
\`\`\`

### rangeInputsSubmitButtonText
The \`rangeInputsSubmitButtonText\` prop specifies the text to be rendered in the range input submit button. 

\`\`\`tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitButtonText={'Filter by Price'}/>
\`\`\`

### rangeInputsPrefix
The \`rangeInputsPrefix\` prop specifies the prefix to render next to the range inputs.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsPrefix={'$'}/>
\`\`\`

### rangeInputsSeparatorText
The \`rangeInputsSeparatorText\` prop specifies the separator text to render between the range inputs.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSeparatorText={' to '}/>
\`\`\`

### rangeInputsInheritDefaultValues
The \`rangeInputsInheritDefaultValues\` prop enables the facet range input values to default to the facet low and high limits.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsInheritDefaultValues={true}/>
\`\`\`

### showClearAllText
The \`showClearAllText\` prop specifies if the clear all text should render.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} showSelectedCount={true} showClearAllText={true} />
\`\`\`


### clearAllText
The \`clearAllText\` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'

\`\`\`tsx
<Facet facet={controller.store.facets[0]} clearAllText={'Clear All'} />
\`\`\`


### clearAllIcon
The \`clearAllIcon\` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} clearAllIcon={'ban'} />
\`\`\`


### iconOverflowMore
The \`iconOverflowMore\` prop contains the icon name of the facet overflow button when collapsed. Default is \`'plus'\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} iconOverflowMore={'plus'} />
\`\`\`

### iconOverflowLess
The \`iconOverflowLess\` prop contains the icon name of the facet overflow button when expanded. Default is \`'minus'\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} iconOverflowLess={'minus'} />
\`\`\`

### overflowSlot
The \`overflowSlot\` prop is a JSX element used to change the display of the show more/less toggle.

\`\`\`js
const Overflow = (props) => {
	const facet = props.facet;
	return (
		<div>Show { facet.overflow.remaining > 0 ? \`\${facet.overflow.remaining} \` : ''}{facet.overflow.remaining > 0 ? 'more' : 'less'}...</div>
	)
}
\`\`\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} overflowSlot={<Overflow/>} />
\`\`\`


### fields
The \`fields\` prop allows you to manually change prop values on a per-facet level, sorted by the facet field.

\`\`\`js
const fieldsProp = {
	Color: {
		limit: 6,
	},
	Size: { 
		disableOverflow: true,
		disableCollapse: true,
	}
},
\`\`\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} fields={fieldsProp} />
\`\`\`


### display
The \`display\` prop allows you to manually change prop values on a per-facet display type level

\`\`\`typescript
const displayProp = {
	display: {
		list: {
			limit: 5,
		},
		hierarchy: {
			limit: 3
		},
		grid: {
			limit: 10
		},
		palette: {
			limit: 20
		}
	}
},
\`\`\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} display={displayProp} />
\`\`\`

### optionsSlot
The \`optionsSlot\` prop is a JSX element used to manually set the options component used, regardless of the facet.display type. Returns the facet,valueProps, limit, & previewOnFocus prop values.

\`\`\`js
const CustomFacetOptions = (props) => {
	const facet = props.facet;
	return (
		<div>
			{facet && facet.values.map(value => <span>{value.label}</span>)}
		</div>
	)
}
\`\`\`

\`\`\`tsx
<Facet facet={controller.store.facets[0]} optionsSlot={<CustomFacetOptions/>} />
\`\`\`


### iconColor
The \`iconColor\` prop sets the facet icon color.

\`\`\`tsx
<Facet facet={controller.store.facets[0]} iconColor={'#222222'} />
\`\`\`

### justContent
The \`justContent\` prop renders just the facet options. Excludes rendering of the Dropdown sub-component.

\`\`\`tsx
<Facet facet={controller.store.facets[0]}  justContent={true} />
\`\`\`

### horizontal
The \`horizontal\` prop renders the facet horizontally.

\`\`\`tsx
<Facet facet={controller.store.facets[0]}  horizontal={true} />
\`\`\`
`,
					c = {
						title: 'Organisms/Facet',
						component: C.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(p.oz, { options: { overrides: { code: K.Z } }, children: d }), (0, e.Y)(p.uY, { story: p.h1 })],
									}),
							},
						},
						decorators: [(o) => (0, e.Y)('div', { style: { maxWidth: '300px' }, children: (0, e.Y)(o, {}) })],
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
								options: [...Object.keys(x.c)],
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
								options: [...Object.keys(x.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								defaultValue: 'angle-up',
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(x.c)],
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
								options: [...Object.keys(x.c)],
								control: { type: 'select' },
							},
							iconOverflowLess: {
								defaultValue: 'minus',
								description: 'Icon for when facet can show less',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'minus' } },
								options: [...Object.keys(x.c)],
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
							...V.F,
						},
					},
					f = s.p.search({ id: 'Facet', globals: { siteId: 'atkzs2' } }),
					S = (0, l.PA)(({ args: o, controller: i }) =>
						(0, e.Y)(C.s, { ...o, facet: i?.store?.facets.filter((u) => u.display === E.Q.LIST).shift() })
					),
					m = (o, { loaded: { controller: i } }) => (0, e.Y)(S, { args: o, controller: i });
				m.loaders = [async () => (await f.search(), { controller: f })];
				const v = (0, l.PA)(({ args: o, controller: i }) => {
						const u = i?.store?.facets.filter((P) => P.display === E.Q.SLIDER).shift();
						return u ? (0, e.Y)(C.s, { ...o, facet: u }) : (0, e.Y)('div', {});
					}),
					r = (o, { loaded: { controller: i } }) => (0, e.Y)(v, { args: o, controller: i });
				r.loaders = [async () => (await f.search(), { controller: f })];
				const M = (0, l.PA)(({ args: o, controller: i }) => {
						const u = i?.store?.facets.filter((P) => P.display === E.Q.PALETTE).shift();
						return u ? (0, e.Y)(C.s, { ...o, facet: u }) : (0, e.Y)('div', {});
					}),
					L = (o, { loaded: { controller: i } }) => (0, e.Y)(M, { args: o, controller: i });
				L.loaders = [async () => (await f.search(), { controller: f })];
				const W = (0, l.PA)(({ args: o, controller: i }) => {
						const u = i?.store?.facets.filter((P) => P.display === E.Q.GRID).shift();
						return u ? (0, e.Y)(C.s, { ...o, facet: u }) : (0, e.Y)('div', {});
					}),
					j = (o, { loaded: { controller: i } }) => (0, e.Y)(W, { args: o, controller: i });
				j.loaders = [async () => (await f.search(), { controller: f })];
				const A = (0, l.PA)(({ args: o, controller: i }) => {
						const u = i?.store?.facets.filter((P) => P.display === E.Q.HIERARCHY).shift();
						return u ? (0, e.Y)(C.s, { ...o, facet: u }) : (0, e.Y)('div', {});
					}),
					h = (o, { loaded: { controller: i } }) => (0, e.Y)(A, { args: o, controller: i });
				(h.loaders = [async () => (await f.search(), { controller: f })]),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
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
								...m.parameters?.docs?.source,
							},
						},
					}),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
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
								...r.parameters?.docs?.source,
							},
						},
					}),
					(L.parameters = {
						...L.parameters,
						docs: {
							...L.parameters?.docs,
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
								...L.parameters?.docs?.source,
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
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					});
				const w = ['List', 'Slider', 'Palette', 'Grid', 'Hierarchy'];
			},
			'./components/src/types.ts'(D, T, t) {
				'use strict';
				t.d(T, { Q: () => l, V: () => e });
				var e = ((p) => ((p.grid = 'grid'), (p.list = 'list'), p))(e || {}),
					l = ((p) => (
						(p.GRID = 'grid'),
						(p.PALETTE = 'palette'),
						(p.LIST = 'list'),
						(p.SLIDER = 'slider'),
						(p.HIERARCHY = 'hierarchy'),
						(p.TOGGLE = 'toggle'),
						p
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(D, T, t) {
				'use strict';
				t.d(T, { F: () => e });
				const e = {
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
			},
			'./components/src/utilities/snapify.ts'(D, T, t) {
				'use strict';
				t.d(T, { p: () => L });
				var e = t('../../node_modules/mobx/dist/mobx.esm.js'),
					l = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					p = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					C = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					x = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					E = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					K = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					V = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					c = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					S = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					m = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, e.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const r = {},
					M = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(w) {
						const o = w.id;
						if (r[o]) return r[o];
						const i = (r[o] = j({ client: M, controller: w }));
						return (
							i.on('afterStore', async ({ controller: u }, P) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(w) {
						const o = w.id;
						if (r[o]) return r[o];
						const i = (r[o] = A({ client: M, controller: w }));
						return (
							i.on('afterStore', async ({ controller: u }, P) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
					static search(w) {
						const o = w.id;
						if (r[o]) return r[o];
						const i = (r[o] = W({ client: M, controller: w }));
						return (
							i.on('afterStore', async ({ controller: u }, P) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
				}
				function W(h) {
					const w = new s.V(new c.E({ settings: { coreType: 'query', corePrefix: h.controller.id } }), d.X);
					return new l.Tp(h.controller, {
						client: new x.K(h.client.globals, h.client.config),
						store: new K.U(h.controller, { urlManager: w }),
						urlManager: w,
						eventManager: new f.E(),
						profiler: new S.U(),
						logger: new m.V(),
						tracker: new v.J(h.client.globals),
					});
				}
				function j(h) {
					const w = new s.V(new c.E(), d.X).detach(!0);
					return new C.c(h.controller, {
						client: new x.K(h.client.globals, h.client.config),
						store: new V.t(h.controller, { urlManager: w }),
						urlManager: w,
						eventManager: new f.E(),
						profiler: new S.U(),
						logger: new m.V(),
						tracker: new v.J(h.client.globals),
					});
				}
				function A(h) {
					const w = new s.V(new c.E(), d.X).detach();
					return new p.Z(h.controller, {
						client: new x.K(h.client.globals, h.client.config),
						store: new E.Y(h.controller, { urlManager: w }),
						urlManager: w,
						eventManager: new f.E(),
						profiler: new S.U(),
						logger: new m.V(),
						tracker: new v.J(h.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, T, t) {
				'use strict';
				t.d(T, { Z: () => C });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'prism-block',
					C = (x) => {
						const E = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								E.current && x.className?.includes('lang-') && !x.className?.includes(p) && window?.Prism?.highlightElement(E.current);
							}, [x.className, x.children, E]),
							(0, e.Y)('code', { ...x, ref: E, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(D, T, t) {
				'use strict';
				t.d(T, { A: () => e }), Object.defineProperty(e, 'name', { value: 'default', configurable: !0 });
				function e(l, p) {
					var C = {
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
						x = {};
					for (var E in C) x[C[E]] = E;
					var K = {};
					(l.prototype.toName = function (V) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var s,
							d,
							c = x[this.toHex()];
						if (c) return c;
						if (V?.closest) {
							var f = this.toRgb(),
								S = 1 / 0,
								m = 'black';
							if (!K.length) for (var v in C) K[v] = new l(C[v]).toRgb();
							for (var r in C) {
								var M = ((s = f), (d = K[r]), Math.pow(s.r - d.r, 2) + Math.pow(s.g - d.g, 2) + Math.pow(s.b - d.b, 2));
								M < S && ((S = M), (m = r));
							}
							return m;
						}
					}),
						p.string.push([
							function (V) {
								var s = V.toLowerCase(),
									d = s === 'transparent' ? '#0000' : C[s];
								return d ? new l(d).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function T(t) {
					var e = new Error("Cannot find module '" + t + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(T.keys = () => []), (T.resolve = T), (T.id = '../../node_modules/memoizerific sync recursive'), (D.exports = T);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(D, T, t) {
				'use strict';
				t.d(T, { d: () => V });
				var e = t('../../node_modules/preact/compat/dist/compat.module.js');
				function l() {
					return (
						(l =
							Object.assign ||
							function (s) {
								for (var d = 1; d < arguments.length; d++) {
									var c = arguments[d];
									for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (s[f] = c[f]);
								}
								return s;
							}),
						l.apply(this, arguments)
					);
				}
				function p(s, d) {
					if (s == null) return {};
					var c = {},
						f = Object.keys(s),
						S,
						m;
					for (m = 0; m < f.length; m++) (S = f[m]), !(d.indexOf(S) >= 0) && (c[S] = s[S]);
					return c;
				}
				var C = function (d) {
						var c = d.getBoundingClientRect();
						return { left: Math.ceil(c.left), width: Math.ceil(c.width) };
					},
					x = function (d) {
						return [].concat(d).sort(function (c, f) {
							return Number(c) - Number(f);
						});
					},
					E = function (d) {
						var c = e.default.useRef(d);
						return (
							(c.current = d),
							e.default.useCallback(function () {
								return c.current;
							}, [])
						);
					},
					K = {
						getPercentageForValue: function (d, c, f) {
							return Math.max(0, Math.min(100, ((d - c) / (f - c)) * 100));
						},
						getValueForClientX: function (d, c, f, S) {
							var m = c.left,
								v = c.width,
								r = (d - m) / v,
								M = (S - f) * r;
							return M + f;
						},
					};
				function V(s) {
					var d = s.interpolator,
						c = d === void 0 ? K : d,
						f = s.tickSize,
						S = f === void 0 ? 10 : f,
						m = s.values,
						v = s.min,
						r = s.max,
						M = s.ticks,
						L = s.steps,
						W = s.onChange,
						j = s.onDrag,
						A = s.stepSize,
						h = e.default.useState(null),
						w = h[0],
						o = h[1],
						i = e.default.useState(),
						u = i[0],
						P = i[1],
						z = E({ activeHandleIndex: w, onChange: W, onDrag: j, values: m, tempValues: u }),
						X = e.default.useRef(),
						G = e.default.useCallback(
							function (n) {
								var a = C(X.current);
								return c.getValueForClientX(n, a, v, r);
							},
							[c, r, v]
						),
						J = e.default.useCallback(
							function (n, a) {
								if (L) {
									var y = L.indexOf(n),
										g = y + a;
									return g >= 0 && g < L.length ? L[g] : n;
								} else {
									var b = n + A * a;
									return b >= v && b <= r ? b : n;
								}
							},
							[r, v, A, L]
						),
						Q = e.default.useCallback(
							function (n) {
								var a = v,
									y = r;
								if (L)
									L.forEach(function (g) {
										g <= n && g > a && (a = g), g >= n && g < y && (y = g);
									});
								else {
									for (; a < n && a + A < n; ) a += A;
									y = Math.min(a + A, r);
								}
								return n - a < y - n ? a : y;
							},
							[r, v, A, L]
						),
						H = e.default.useCallback(
							function (n) {
								var a = z(),
									y = a.activeHandleIndex,
									g = a.onDrag,
									b = n.type === 'touchmove' ? n.changedTouches[0].clientX : n.clientX,
									_ = G(b),
									O = Q(_),
									F = [].concat(m.slice(0, y), [O], m.slice(y + 1));
								g ? g(F) : P(F);
							},
							[z, G, Q, m]
						),
						Z = e.default.useCallback(
							function (n, a) {
								var y = z(),
									g = y.values,
									b = y.onChange,
									_ = b === void 0 ? function () {} : b;
								if (n.keyCode === 37 || n.keyCode === 39) {
									o(a);
									var O = n.keyCode === 37 ? -1 : 1,
										F = J(g[a], O),
										k = [].concat(g.slice(0, a), [F], g.slice(a + 1)),
										R = x(k);
									_(R);
								}
							},
							[z, J]
						),
						$ = e.default.useCallback(
							function (n, a) {
								o(a);
								var y = function g(b) {
									var _ = z(),
										O = _.tempValues,
										F = _.values,
										k = _.onChange,
										R = k === void 0 ? function () {} : k,
										U = _.onDrag,
										N = U === void 0 ? function () {} : U;
									document.removeEventListener('mousemove', H),
										document.removeEventListener('touchmove', H),
										document.removeEventListener('mouseup', g),
										document.removeEventListener('touchend', g);
									var Y = x(O || F);
									R(Y), N(Y), o(null), P();
								};
								document.addEventListener('mousemove', H),
									document.addEventListener('touchmove', H),
									document.addEventListener('mouseup', y),
									document.addEventListener('touchend', y);
							},
							[z, H]
						),
						B = e.default.useCallback(
							function (n) {
								return c.getPercentageForValue(n, v, r);
							},
							[c, r, v]
						),
						ee = e.default.useMemo(
							function () {
								var n = M || L;
								if (!n) {
									for (n = [v]; n[n.length - 1] < r - S; ) n.push(n[n.length - 1] + S);
									n.push(r);
								}
								return n.map(function (a, y) {
									return {
										value: a,
										getTickProps: function (b) {
											var _ = b === void 0 ? {} : b,
												O = _.key,
												F = O === void 0 ? y : O,
												k = _.style,
												R = k === void 0 ? {} : k,
												U = p(_, ['key', 'style']);
											return l({ key: F, style: l({ position: 'absolute', width: 0, left: B(a) + '%', transform: 'translateX(-50%)' }, R) }, U);
										},
									};
								});
							},
							[M, B, r, v, L, S]
						),
						te = e.default.useMemo(
							function () {
								var n = x(u || m);
								return [].concat(n, [r]).map(function (a, y) {
									return {
										value: a,
										getSegmentProps: function (b) {
											var _ = b === void 0 ? {} : b,
												O = _.key,
												F = O === void 0 ? y : O,
												k = _.style,
												R = k === void 0 ? {} : k,
												U = p(_, ['key', 'style']),
												N = B(n[y - 1] ? n[y - 1] : v),
												Y = B(a) - N;
											return l({ key: F, style: l({ position: 'absolute', left: N + '%', width: Y + '%' }, R) }, U);
										},
									};
								});
							},
							[B, r, v, u, m]
						),
						ne = e.default.useMemo(
							function () {
								return (u || m).map(function (n, a) {
									return {
										value: n,
										active: a === w,
										getHandleProps: function (g) {
											var b = g === void 0 ? {} : g,
												_ = b.key,
												O = _ === void 0 ? a : _,
												F = b.ref,
												k = b.innerRef,
												R = b.onKeyDown,
												U = b.onMouseDown,
												N = b.onTouchStart,
												Y = b.style,
												ae = Y === void 0 ? {} : Y,
												re = p(b, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return l(
												{
													key: O,
													onKeyDown: function (I) {
														I.persist(), Z(I, a), R && R(I);
													},
													onMouseDown: function (I) {
														I.persist(), $(I, a), U && U(I);
													},
													onTouchStart: function (I) {
														I.persist(), $(I, a), N && N(I);
													},
													role: 'slider',
													'aria-valuemin': v,
													'aria-valuemax': r,
													'aria-valuenow': n,
													style: l(
														{ position: 'absolute', top: '50%', left: B(n) + '%', zIndex: a === w ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ae
													),
												},
												re
											);
										},
									};
								});
							},
							[w, B, Z, $, v, r, u, m]
						),
						oe = function (a) {
							var y = a === void 0 ? {} : a,
								g = y.style,
								b = g === void 0 ? {} : g,
								_ = y.ref,
								O = p(y, ['style', 'ref']);
							return l(
								{
									ref: function (k) {
										(X.current = k), _ && (typeof _ == 'function' ? _(k) : (_.current = k));
									},
									style: l({ position: 'relative', userSelect: 'none' }, b),
								},
								O
							);
						};
					return { activeHandleIndex: w, getTrackProps: oe, ticks: ee, segments: te, handles: ne };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facet-Facet-stories.5c76596b.iframe.bundle.js.map
