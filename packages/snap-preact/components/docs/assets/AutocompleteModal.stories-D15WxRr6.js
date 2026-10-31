import { s, y as m, j as n, F as d, l } from './iframe-Bc4KSH0T.js';
import { AutocompleteModal as i } from './AutocompleteModal-DOldQtr2.js';
import { S as h } from './snapify-DBnzfZp8.js';
import { c as y } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useAcRenderedInput-DO3-amzD.js';
import './types-DqusP3LW.js';
import './useCreateController-DqNcG6uZ.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './useA11y-BuGQuOJb.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-B1GwaprV.js';
import './Terms-DheA4fhR.js';
import './Facets-DXg3Av-H.js';
import './Facet-JzgYSJ_F.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './Button-C4cTOUHA.js';
import './SearchInput-BPIgwblk.js';
import './FacetListOptions-BRsZOoKo.js';
import './Checkbox-4N2aMGfq.js';
import './Radio-CEEJysGh.js';
import './FacetHierarchyOptions-sMDWNmLW.js';
import './FacetPaletteOptions-D2DLl7t9.js';
import './names-Cka5BSlk.js';
import './Image-9Pub_w4s.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-B4YG6F_c.js';
import './FacetSlider-Cclsjvzk.js';
import './Banner-CMX4Y7Vh.js';
import './withTracking-D6kix-j7.js';
import './createImpressionObserver-m2TNXj0r.js';
import './FacetsHorizontal-DD9MOQMC.js';
import './Slideout-DA0XdRZT.js';
import './Overlay-d1j9-VxC.js';
import './PaginationInfo-K-nKWsAd.js';
import './SearchHeader-CxEO9llg.js';
import './Breadcrumbs-DmxOMnRy.js';
import './LoadMore-tgvuskFW.js';
import './useIntersection-C53zN6Qj.js';
import './Pagination-CdrYtlrh.js';
import './PerPage-DHlasSSl.js';
import './Select-C5jrZYxP.js';
import './selectionKey-CmN2KTR5.js';
import './List-DGhbbLEi.js';
import './RadioList-mYVU-cPs.js';
import './SortBy-B6sDet1z.js';
import './LayoutSelector-CMNTfShJ.js';
import './FilterSummary-CmmIwfAj.js';
import './Filter-CBA1sOCL.js';
import './TabSelection-By3kzuho.js';
import './Results-xmDCY8C2.js';
import './useDisplaySettings-7OChHsa4.js';
import './ResultTracker-COjEKXyJ.js';
import './InlineBanner-BArbY9cG.js';
import './Result-BzjtDAC1.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './CalloutBadge-DSmlH766.js';
import './Rating-B-yVUDqy.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './Slideshow-ChO0chUe.js';
import './Grid-BgRdvrCD.js';
import './truncate-CqAvmyZI.js';
import './Modal-Bb71CFe8.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const f =
		"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only — no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `no-results`, `tabSelection`, `searchInput`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`\n\nThe `searchInput` module positions the rendered search input (see `renderInput` below).\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['terms.history', 'terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['tabSelection'], ['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['content'], ['_', 'button.see-more', '_']]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n#### Positioning the search input\nBy default the rendered search input sits above the layout. Add the `searchInput` module to the `layout` prop (or to one of the column layouts) to render the input at that position instead. The layout stays rendered while the component is open so the input is never lost, while the other modules still only render once the input is focused and there are terms or results to show. `renderInput={false}` disables the rendered input in both cases.\n\n```tsx\n<AutocompleteModal\n	controller={controller}\n	input={'#searchInput'}\n	layout={[['c1', 'c3']]}\n	column1={{ width: '40%', layout: [['searchInput'], ['terms.history', 'terms.trending']] }}\n	column3={{ width: 'auto', layout: ['content'] }}\n/>\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n",
	De = {
		title: 'Templates/AutocompleteModal',
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
			buttonSelector: {
				description: 'Modal button selector. (defaults to input)',
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
			width: {
				defaultValue: '500px',
				description: 'Change width of the component',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '500px' } },
				control: { type: 'text' },
			},
			height: {
				description: 'set the height of the component',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
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
			overlayColor: {
				description: 'specifies the color of the overlay',
				defaultValue: 'rgba(0, 0, 0, 0.8)',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0, 0, 0, 0.8)' } },
				control: { type: 'color' },
			},
			resultComponent: {
				description: 'Custom result component for the autocomplete',
				table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
				control: { type: 'object' },
			},
			...y,
		},
	},
	g = h.autocomplete({ id: 'AutocompleteModal', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
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
		loaders: [async () => ({ controller: await g })],
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: AutocompleteModalProps, {
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
    return inputFound ? <AutocompleteModal {...args} controller={controller} input={controller?.config.selector} /> : <></>;
  },
  loaders: [async () => ({
    controller: await snapInstance
  })]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const He = ['Default'];
export { o as Default, He as __namedExportsOrder, De as default };
