(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1555],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(R, T, t) {
				'use strict';
				const e = (f) => f.replace(/_/g, '-').toLowerCase();
				t.d(T, ['P', 0, e]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, T, t) {
				'use strict';
				t.d(T, { p: () => e });
				function e(f) {
					if (typeof f != 'string') return f;
					let _ = f.toLowerCase();
					return (_ = _.replace(/[^\w\s]/g, '').trim()), (_ = _.replace(/\s/g, '-')), _;
				}
			},
			'./components/src/components/Organisms/Facet/Facet.stories.tsx'(R, T, t) {
				'use strict';
				t.r(T),
					t.d(T, {
						Grid: () => V,
						Hierarchy: () => m,
						List: () => p,
						Palette: () => L,
						Slider: () => r,
						__namedExportsOrder: () => v,
						default: () => l,
					});
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = t('../../node_modules/mobx-react-lite/es/index.js'),
					_ = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					C = t('./components/src/components/Organisms/Facet/Facet.tsx'),
					x = t('./components/src/components/Atoms/Icon/paths.tsx'),
					P = t('./components/src/types.ts'),
					K = t('./components/src/utilities/storybook.tsx'),
					I = t('./components/src/utilities/componentArgs.ts'),
					s = t('./components/src/utilities/snapify.ts');
				const u = `# Facet

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
					l = {
						title: 'Organisms/Facet',
						component: C.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(_.oz, { options: { overrides: { code: K.Z } }, children: u }), (0, e.Y)(_.uY, { story: _.h1 })],
									}),
							},
						},
						decorators: [(n) => (0, e.Y)('div', { style: { maxWidth: '300px' }, children: (0, e.Y)(n, {}) })],
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
							...I.F,
						},
					},
					d = s.p.search({ id: 'Facet', globals: { siteId: 'atkzs2' } }),
					S = (0, f.PA)(({ args: n, controller: c }) =>
						(0, e.Y)(C.s, { ...n, facet: c?.store?.facets.filter((i) => i.display === P.Q.LIST).shift() })
					),
					p = (n, { loaded: { controller: c } }) => (0, e.Y)(S, { args: n, controller: c });
				p.loaders = [async () => (await d.search(), { controller: d })];
				const b = (0, f.PA)(({ args: n, controller: c }) => {
						const i = c?.store?.facets.filter((E) => E.display === P.Q.SLIDER).shift();
						return i ? (0, e.Y)(C.s, { ...n, facet: i }) : (0, e.Y)('div', {});
					}),
					r = (n, { loaded: { controller: c } }) => (0, e.Y)(b, { args: n, controller: c });
				r.loaders = [async () => (await d.search(), { controller: d })];
				const F = (0, f.PA)(({ args: n, controller: c }) => {
						const i = c?.store?.facets.filter((E) => E.display === P.Q.PALETTE).shift();
						return i ? (0, e.Y)(C.s, { ...n, facet: i }) : (0, e.Y)('div', {});
					}),
					L = (n, { loaded: { controller: c } }) => (0, e.Y)(F, { args: n, controller: c });
				L.loaders = [async () => (await d.search(), { controller: d })];
				const W = (0, f.PA)(({ args: n, controller: c }) => {
						const i = c?.store?.facets.filter((E) => E.display === P.Q.GRID).shift();
						return i ? (0, e.Y)(C.s, { ...n, facet: i }) : (0, e.Y)('div', {});
					}),
					V = (n, { loaded: { controller: c } }) => (0, e.Y)(W, { args: n, controller: c });
				V.loaders = [async () => (await d.search(), { controller: d })];
				const j = (0, f.PA)(({ args: n, controller: c }) => {
						const i = c?.store?.facets.filter((E) => E.display === P.Q.HIERARCHY).shift();
						return i ? (0, e.Y)(C.s, { ...n, facet: i }) : (0, e.Y)('div', {});
					}),
					m = (n, { loaded: { controller: c } }) => (0, e.Y)(j, { args: n, controller: c });
				(m.loaders = [async () => (await d.search(), { controller: d })]),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
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
								...p.parameters?.docs?.source,
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
					(V.parameters = {
						...V.parameters,
						docs: {
							...V.parameters?.docs,
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
								...V.parameters?.docs?.source,
							},
						},
					}),
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
}) => <ObservableHierarchyFacet args={args} controller={controller} />`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const v = ['List', 'Slider', 'Palette', 'Grid', 'Hierarchy'];
			},
			'./components/src/utilities/componentArgs.ts'(R, T, t) {
				'use strict';
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
				t.d(T, ['F', 0, e]);
			},
			'./components/src/utilities/snapify.ts'(R, T, t) {
				'use strict';
				t.d(T, { p: () => L });
				var e = t('../../node_modules/mobx/dist/mobx.esm.js'),
					f = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					C = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					x = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					P = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					K = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					I = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					S = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, e.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const r = {},
					F = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(v) {
						const n = v.id;
						if (r[n]) return r[n];
						const c = (r[n] = V({ client: F, controller: v }));
						return (
							c.on('afterStore', async ({ controller: i }, E) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await E();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(v) {
						const n = v.id;
						if (r[n]) return r[n];
						const c = (r[n] = j({ client: F, controller: v }));
						return (
							c.on('afterStore', async ({ controller: i }, E) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await E();
							}),
							c.init(),
							c
						);
					}
					static search(v) {
						const n = v.id;
						if (r[n]) return r[n];
						const c = (r[n] = W({ client: F, controller: v }));
						return (
							c.on('afterStore', async ({ controller: i }, E) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await E();
							}),
							c.init(),
							c
						);
					}
				}
				function W(m) {
					const v = new s.V(new l.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), u.X);
					return new f.Tp(m.controller, {
						client: new x.K(m.client.globals, m.client.config),
						store: new K.U(m.controller, { urlManager: v }),
						urlManager: v,
						eventManager: new d.E(),
						profiler: new S.U(),
						logger: new p.V(),
						tracker: new b.J(m.client.globals),
					});
				}
				function V(m) {
					const v = new s.V(new l.E(), u.X).detach(!0);
					return new C.c(m.controller, {
						client: new x.K(m.client.globals, m.client.config),
						store: new I.t(m.controller, { urlManager: v }),
						urlManager: v,
						eventManager: new d.E(),
						profiler: new S.U(),
						logger: new p.V(),
						tracker: new b.J(m.client.globals),
					});
				}
				function j(m) {
					const v = new s.V(new l.E(), u.X).detach();
					return new _.Z(m.controller, {
						client: new x.K(m.client.globals, m.client.config),
						store: new P.Y(m.controller, { urlManager: v }),
						urlManager: v,
						eventManager: new d.E(),
						profiler: new S.U(),
						logger: new p.V(),
						tracker: new b.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, T, t) {
				'use strict';
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					C = (x) => {
						const P = (0, f.li)(null);
						return (
							(0, f.vJ)(() => {
								P.current && x.className?.includes('lang-') && !x.className?.includes(_) && window?.Prism?.highlightElement(P.current);
							}, [x.className, x.children, P]),
							(0, e.Y)('code', { ...x, ref: P, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(T, ['Z', 0, C]);
			},
			'../../node_modules/colord/plugins/names.mjs'(R, T, t) {
				'use strict';
				t.d(T, { A: () => e }), t.dn(e);
				function e(f, _) {
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
					for (var P in C) x[C[P]] = P;
					var K = {};
					(f.prototype.toName = function (I) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var s,
							u,
							l = x[this.toHex()];
						if (l) return l;
						if (I?.closest) {
							var d = this.toRgb(),
								S = 1 / 0,
								p = 'black';
							if (!K.length) for (var b in C) K[b] = new f(C[b]).toRgb();
							for (var r in C) {
								var F = ((s = d), (u = K[r]), Math.pow(s.r - u.r, 2) + Math.pow(s.g - u.g, 2) + Math.pow(s.b - u.b, 2));
								F < S && ((S = F), (p = r));
							}
							return p;
						}
					}),
						_.string.push([
							function (I) {
								var s = I.toLowerCase(),
									u = s === 'transparent' ? '#0000' : C[s];
								return u ? new f(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function T(t) {
					const e = new Error("Cannot find module '" + t + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(T.keys = () => []), (T.resolve = T), (T.id = '../../node_modules/memoizerific sync recursive'), (R.exports = T);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(R, T, t) {
				'use strict';
				t.d(T, { d: () => I });
				var e = t('../../node_modules/preact/compat/dist/compat.module.js');
				function f() {
					return (
						(f =
							Object.assign ||
							function (s) {
								for (var u = 1; u < arguments.length; u++) {
									var l = arguments[u];
									for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && (s[d] = l[d]);
								}
								return s;
							}),
						f.apply(this, arguments)
					);
				}
				function _(s, u) {
					if (s == null) return {};
					var l = {},
						d = Object.keys(s),
						S,
						p;
					for (p = 0; p < d.length; p++) (S = d[p]), !(u.indexOf(S) >= 0) && (l[S] = s[S]);
					return l;
				}
				var C = function (u) {
						var l = u.getBoundingClientRect();
						return { left: Math.ceil(l.left), width: Math.ceil(l.width) };
					},
					x = function (u) {
						return [].concat(u).sort(function (l, d) {
							return Number(l) - Number(d);
						});
					},
					P = function (u) {
						var l = e.default.useRef(u);
						return (
							(l.current = u),
							e.default.useCallback(function () {
								return l.current;
							}, [])
						);
					},
					K = {
						getPercentageForValue: function (u, l, d) {
							return Math.max(0, Math.min(100, ((u - l) / (d - l)) * 100));
						},
						getValueForClientX: function (u, l, d, S) {
							var p = l.left,
								b = l.width,
								r = (u - p) / b,
								F = (S - d) * r;
							return F + d;
						},
					};
				function I(s) {
					var u = s.interpolator,
						l = u === void 0 ? K : u,
						d = s.tickSize,
						S = d === void 0 ? 10 : d,
						p = s.values,
						b = s.min,
						r = s.max,
						F = s.ticks,
						L = s.steps,
						W = s.onChange,
						V = s.onDrag,
						j = s.stepSize,
						m = e.default.useState(null),
						v = m[0],
						n = m[1],
						c = e.default.useState(),
						i = c[0],
						E = c[1],
						Y = P({ activeHandleIndex: v, onChange: W, onDrag: V, values: p, tempValues: i }),
						X = e.default.useRef(),
						G = e.default.useCallback(
							function (o) {
								var a = C(X.current);
								return l.getValueForClientX(o, a, b, r);
							},
							[l, r, b]
						),
						J = e.default.useCallback(
							function (o, a) {
								if (L) {
									var g = L.indexOf(o),
										h = g + a;
									return h >= 0 && h < L.length ? L[h] : o;
								} else {
									var y = o + j * a;
									return y >= b && y <= r ? y : o;
								}
							},
							[r, b, j, L]
						),
						Q = e.default.useCallback(
							function (o) {
								var a = b,
									g = r;
								if (L)
									L.forEach(function (h) {
										h <= o && h > a && (a = h), h >= o && h < g && (g = h);
									});
								else {
									for (; a < o && a + j < o; ) a += j;
									g = Math.min(a + j, r);
								}
								return o - a < g - o ? a : g;
							},
							[r, b, j, L]
						),
						$ = e.default.useCallback(
							function (o) {
								var a = Y(),
									g = a.activeHandleIndex,
									h = a.onDrag,
									y = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									w = G(y),
									O = Q(w),
									M = [].concat(p.slice(0, g), [O], p.slice(g + 1));
								h ? h(M) : E(M);
							},
							[Y, G, Q, p]
						),
						Z = e.default.useCallback(
							function (o, a) {
								var g = Y(),
									h = g.values,
									y = g.onChange,
									w = y === void 0 ? function () {} : y;
								if (o.keyCode === 37 || o.keyCode === 39) {
									n(a);
									var O = o.keyCode === 37 ? -1 : 1,
										M = J(h[a], O),
										k = [].concat(h.slice(0, a), [M], h.slice(a + 1)),
										A = x(k);
									w(A);
								}
							},
							[Y, J]
						),
						H = e.default.useCallback(
							function (o, a) {
								n(a);
								var g = function h(y) {
									var w = Y(),
										O = w.tempValues,
										M = w.values,
										k = w.onChange,
										A = k === void 0 ? function () {} : k,
										U = w.onDrag,
										N = U === void 0 ? function () {} : U;
									document.removeEventListener('mousemove', $),
										document.removeEventListener('touchmove', $),
										document.removeEventListener('mouseup', h),
										document.removeEventListener('touchend', h);
									var z = x(O || M);
									A(z), N(z), n(null), E();
								};
								document.addEventListener('mousemove', $),
									document.addEventListener('touchmove', $),
									document.addEventListener('mouseup', g),
									document.addEventListener('touchend', g);
							},
							[Y, $]
						),
						B = e.default.useCallback(
							function (o) {
								return l.getPercentageForValue(o, b, r);
							},
							[l, r, b]
						),
						ee = e.default.useMemo(
							function () {
								var o = F || L;
								if (!o) {
									for (o = [b]; o[o.length - 1] < r - S; ) o.push(o[o.length - 1] + S);
									o.push(r);
								}
								return o.map(function (a, g) {
									return {
										value: a,
										getTickProps: function (y) {
											var w = y === void 0 ? {} : y,
												O = w.key,
												M = O === void 0 ? g : O,
												k = w.style,
												A = k === void 0 ? {} : k,
												U = _(w, ['key', 'style']);
											return f({ key: M, style: f({ position: 'absolute', width: 0, left: B(a) + '%', transform: 'translateX(-50%)' }, A) }, U);
										},
									};
								});
							},
							[F, B, r, b, L, S]
						),
						te = e.default.useMemo(
							function () {
								var o = x(i || p);
								return [].concat(o, [r]).map(function (a, g) {
									return {
										value: a,
										getSegmentProps: function (y) {
											var w = y === void 0 ? {} : y,
												O = w.key,
												M = O === void 0 ? g : O,
												k = w.style,
												A = k === void 0 ? {} : k,
												U = _(w, ['key', 'style']),
												N = B(o[g - 1] ? o[g - 1] : b),
												z = B(a) - N;
											return f({ key: M, style: f({ position: 'absolute', left: N + '%', width: z + '%' }, A) }, U);
										},
									};
								});
							},
							[B, r, b, i, p]
						),
						oe = e.default.useMemo(
							function () {
								return (i || p).map(function (o, a) {
									return {
										value: o,
										active: a === v,
										getHandleProps: function (h) {
											var y = h === void 0 ? {} : h,
												w = y.key,
												O = w === void 0 ? a : w,
												M = y.ref,
												k = y.innerRef,
												A = y.onKeyDown,
												U = y.onMouseDown,
												N = y.onTouchStart,
												z = y.style,
												ae = z === void 0 ? {} : z,
												re = _(y, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return f(
												{
													key: O,
													onKeyDown: function (D) {
														D.persist(), Z(D, a), A && A(D);
													},
													onMouseDown: function (D) {
														D.persist(), H(D, a), U && U(D);
													},
													onTouchStart: function (D) {
														D.persist(), H(D, a), N && N(D);
													},
													role: 'slider',
													'aria-valuemin': b,
													'aria-valuemax': r,
													'aria-valuenow': o,
													style: f(
														{ position: 'absolute', top: '50%', left: B(o) + '%', zIndex: a === v ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ae
													),
												},
												re
											);
										},
									};
								});
							},
							[v, B, Z, H, b, r, i, p]
						),
						ne = function (a) {
							var g = a === void 0 ? {} : a,
								h = g.style,
								y = h === void 0 ? {} : h,
								w = g.ref,
								O = _(g, ['style', 'ref']);
							return f(
								{
									ref: function (k) {
										(X.current = k), w && (typeof w == 'function' ? w(k) : (w.current = k));
									},
									style: f({ position: 'relative', userSelect: 'none' }, y),
								},
								O
							);
						};
					return { activeHandleIndex: v, getTrackProps: ne, ticks: ee, segments: te, handles: oe };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facet-Facet-stories.a335a8e9.iframe.bundle.js.map
