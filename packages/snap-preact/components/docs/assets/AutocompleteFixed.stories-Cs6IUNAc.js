import { s, y as m, j as n, F as d, l } from './iframe-CXSVAHru.js';
import { AutocompleteFixed as i } from './AutocompleteFixed-Bgs2PTZn.js';
import { S as h } from './snapify-CnhKBMyG.js';
import { c as y } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useAcRenderedInput-NCzhM3Io.js';
import './types-DqusP3LW.js';
import './useCreateController-CPUKSfyE.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './useA11y-BuGQuOJb.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-CE2cSemc.js';
import './Terms-irMOQ8EP.js';
import './Facets-DPwV1I2W.js';
import './Facet-BmQbVpPT.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-WSImKrUZ.js';
import './useClickOutside-G4DBoznB.js';
import './Button-YZishUF-.js';
import './SearchInput-DJ-VPu5W.js';
import './FacetListOptions-DvX14VIV.js';
import './Checkbox-CXNoFSPC.js';
import './Radio-DY75CPxX.js';
import './FacetHierarchyOptions-Bu5fpnu_.js';
import './FacetPaletteOptions-DW1gB9zo.js';
import './names-Cka5BSlk.js';
import './Image-BTbXUZuZ.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-C5dERDt2.js';
import './FacetSlider-AhnUnnRl.js';
import './Banner-DD7UuHM6.js';
import './withTracking-DWvVsRqK.js';
import './createImpressionObserver-DI1SU3AN.js';
import './FacetsHorizontal-CIi7o8UB.js';
import './Slideout-OFSsF92G.js';
import './Overlay-BCtuQj-C.js';
import './PaginationInfo-BGW1CMBu.js';
import './SearchHeader-BsYBThrg.js';
import './Breadcrumbs-C6qMSVRy.js';
import './LoadMore-U8fNXCqg.js';
import './useIntersection-Dwh_PZ6E.js';
import './Pagination-Dp3xsKuj.js';
import './PerPage-COcGnyzN.js';
import './Select-DAPmdZ4V.js';
import './selectionKey-CmN2KTR5.js';
import './List-DGhdnIhb.js';
import './RadioList-uOtV-0O8.js';
import './SortBy-Ax3RG03i.js';
import './LayoutSelector-C9dw2cSG.js';
import './FilterSummary-D-y17uWR.js';
import './Filter-DHh9Ae_k.js';
import './TabSelection-IWPsXkgZ.js';
import './Results-Hox3H_zi.js';
import './useDisplaySettings-D0_uZPs4.js';
import './ResultTracker-D4h_hXCO.js';
import './InlineBanner-DsZBvWCz.js';
import './Result-BacvSyPr.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './CalloutBadge-CahbTmzQ.js';
import './Rating-Bdkm_1kb.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
import './truncate-CqAvmyZI.js';
import './Modal-4V85zi-h.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const f =
		"# AutocompleteFixed\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteFixed component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteFixed components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n- Overlay\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only — no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `no-results`, `tabSelection`, `searchInput`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`\n\nThe `searchInput` module positions the rendered search input (see `renderInput` below).\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['terms.history', 'terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['tabSelection'], ['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['content'], ['_', 'button.see-more', '_']]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['facets']\n}}/>\n```\n\n### offset\nThe `offset` prop accepts an object to fine-tune the position of the autocomplete modal. It can include `top`, `left`, and `width` properties, each specified as numbers representing pixel adjustments.\n\n```tsx\nconst offset = {\n    top: 10;\n	left: 15;\n	width: 500;\n}\n<AutocompleteFixed controller={controller} input={'#searchInput'} offset={offset} />\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n#### Positioning the search input\nBy default the rendered search input sits above the layout. Add the `searchInput` module to the `layout` prop (or to one of the column layouts) to render the input at that position instead. The layout stays rendered while the component is open so the input is never lost, while the other modules still only render once the input is focused and there are terms or results to show. `renderInput={false}` disables the rendered input in both cases.\n\n```tsx\n<AutocompleteFixed\n	controller={controller}\n	input={'#searchInput'}\n	layout={[['c1', 'c3']]}\n	column1={{ width: '300px', layout: [['searchInput'], ['termsList']] }}\n	column3={{ width: 'auto', layout: [['content'], ['_', 'button.see-more']] }}\n/>\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n",
	Be = {
		title: 'Templates/AutocompleteFixed',
		component: i,
		parameters: { docs: { description: { component: f } } },
		decorators: [
			(r) =>
				l('div', {
					style: { maxWidth: '1200px', position: 'relative' },
					children: [
						n('input', {
							type: 'text',
							id: 'searchInput',
							placeholder: 'try me!',
							autoComplete: 'off',
							style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
						}),
						l('span', {
							style: { margin: '15px', textAlign: 'center', display: 'block' },
							children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
						}),
						n(r, {}),
					],
				}),
		],
		argTypes: {
			controller: {
				description: 'Autocomplete controller reference',
				type: { required: !0 },
				table: { type: { summary: 'Autocomplete controller object' } },
				control: !1,
			},
			input: {
				description: 'input element reference',
				type: { required: !0 },
				table: { type: { summary: 'Element or String as CSS Selector' } },
				control: !1,
			},
			overlayColor: {
				defaultValue: 'rgba(0,0,0,0.0)',
				description: 'Autocomplete overlay color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
				control: { type: 'color' },
			},
			buttonSelector: {
				description: 'Autocomplete button selector. (defaults to input)',
				table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
				control: { type: 'text' },
			},
			renderInput: {
				defaultValue: !0,
				description: 'render a second input inside autocomplete window that gets auto focused on open.',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			layout: {
				description: 'array of modules to render in specified layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							"['c1' | 'c2' | 'c3' | 'c4' | 'termsList' | 'terms.history' | 'terms.trending' | 'terms.suggestions' | 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | 'no-results' | 'tabSelection' | 'searchInput' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header'] | 'terms' | 'mobile' | 'tablet' | 'desktop'",
					},
					defaultValue: { summary: "[['c1', 'c2', 'c3']]" },
				},
				control: 'none',
			},
			column1: {
				description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending' | 'terms.suggestions' | 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | 'no-results' | 'tabSelection' | 'searchInput' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
					},
					defaultValue: {
						summary: `{
                    layout: ['termsList'],
                    width: '150px'
                }`,
					},
				},
				control: 'none',
			},
			column2: {
				description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending' | 'terms.suggestions' | 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | 'no-results' | 'tabSelection' | 'searchInput' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
					},
					defaultValue: {
						summary: `{
                    layout: ['facets'],
                    width: '150px'
                }`,
					},
				},
				control: 'none',
			},
			column3: {
				description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending' | 'terms.suggestions' | 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | 'no-results' | 'tabSelection' | 'searchInput' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
					},
					defaultValue: {
						summary: `{
                    layout: [['tabSelection'], ['content'], ['_', 'button.see-more']],
                    width: 'auto'
                }`,
					},
				},
				control: 'none',
			},
			column4: {
				description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending' | 'terms.suggestions' | 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | 'no-results' | 'tabSelection' | 'searchInput' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
					},
				},
				control: 'none',
			},
			offset: {
				description: 'specifies the offset of the autocomplete',
				table: { category: 'Templates Legal', type: { summary: 'object' } },
				control: { type: 'object' },
			},
			width: {
				defaultValue: '500px',
				description: 'Change width of the component',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '500px' } },
				control: { type: 'text' },
			},
			excludeBanners: {
				defaultValue: !1,
				description: 'automatically add merchandising banners',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			facetsTitle: {
				defaultValue: '',
				description: 'Change facets header title',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			contentTitle: {
				defaultValue: '',
				description: 'Change content header title',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			viewportMaxHeight: {
				defaultValue: !1,
				description: 'Autocomplete fully visible in viewport',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			resultComponent: {
				description: 'Custom result component for the autocomplete',
				table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
				control: { type: 'object' },
			},
			...y,
		},
	},
	b = h.autocomplete({ id: 'AutocompleteModal', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
	o = {
		render: (r, { loaded: { controller: a } }) => {
			const [e, t] = s(''),
				u = [
					{ active: e === 'dress', preview: () => t('dress'), value: 'dress', type: 'suggested', url: { href: '#' } },
					{ active: e === 'shirt', preview: () => t('shirt'), value: 'shirt', type: 'suggested', url: { href: '#' } },
					{ active: e === 'shoes', preview: () => t('shoes'), value: 'shoes', type: 'suggested', url: { href: '#' } },
					{ active: e === 'hat', preview: () => t('hat'), value: 'hat', type: 'suggested', url: { href: '#' } },
					{ active: e === 'pants', preview: () => t('pants'), value: 'pants', type: 'suggested', url: { href: '#' } },
					{ active: e === 'socks', preview: () => t('socks'), value: 'socks', type: 'suggested', url: { href: '#' } },
				];
			a.store.history = u;
			const [c, p] = s(!1);
			return (
				m(() => {
					document.querySelector('#searchInput') && p(!0);
				}, []),
				c ? n(i, { ...r, controller: a, input: a?.config.selector }) : n(d, {})
			);
		},
		loaders: [async () => ({ controller: await b })],
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: AutocompleteFixedProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: AutocompleteController;
    };
  }) => {
    const [termState, setTermState] = useState('');
    const mockTerms: AutocompleteTermStore = [{
      active: termState === 'dress',
      preview: () => setTermState('dress'),
      value: 'dress',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'shirt',
      preview: () => setTermState('shirt'),
      value: 'shirt',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'shoes',
      preview: () => setTermState('shoes'),
      value: 'shoes',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'hat',
      preview: () => setTermState('hat'),
      value: 'hat',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'pants',
      preview: () => setTermState('pants'),
      value: 'pants',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'socks',
      preview: () => setTermState('socks'),
      value: 'socks',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }];
    controller.store.history = mockTerms;
    const [inputFound, setInputFound] = useState(false);
    useEffect(() => {
      if (document.querySelector('#searchInput')) {
        setInputFound(true);
      }
    }, []);
    return inputFound ? <AutocompleteFixed {...args} controller={controller} input={controller?.config.selector} /> : <></>;
  },
  loaders: [async () => ({
    controller: await snapInstance
  })]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const De = ['Default'];
export { o as Default, De as __namedExportsOrder, Be as default };
