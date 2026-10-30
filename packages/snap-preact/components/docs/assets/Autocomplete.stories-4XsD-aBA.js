import { ah as c, s as u, j as l, l as p } from './iframe-U9T2Y9ZS.js';
import { A as a } from './Autocomplete-2M3ST84u.js';
import { S as m } from './snapify-Df13VkEj.js';
import { c as d } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './types-DqusP3LW.js';
import './useDisplaySettings-9sk5Dt1c.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './useA11y-BuGQuOJb.js';
import './createHoverProps-B_zlUBHN.js';
import './Facets-B-EVV1pK.js';
import './Facet-HxPfd-CW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './Button-rwG4FGUK.js';
import './SearchInput-CBuvCU_0.js';
import './FacetListOptions-DXiMkJ6r.js';
import './Checkbox-Dsv4fCi7.js';
import './Radio-CBQqiZ56.js';
import './FacetHierarchyOptions-DNUnpz6e.js';
import './FacetPaletteOptions-8YWwPWlW.js';
import './names-Cka5BSlk.js';
import './Image-C5uuJXju.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions--7mFlBiQ.js';
import './FacetSlider-FfvPprOV.js';
import './Banner-D10o1Oav.js';
import './withTracking-B-gE0m0K.js';
import './createImpressionObserver-B76-2cq4.js';
import './Results-3aWkZgbC.js';
import './ResultTracker-D-Jc6Lj4.js';
import './InlineBanner-07q-1VCg.js';
import './Result-Dham3Ici.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './CalloutBadge-hFFhia-q.js';
import './Rating-DUxc2ffg.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './List-9eXTq04g.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const h =
		"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n```tsx\nimport { Autocomplete } from '@athoscommerce/snap-preact/components';\n```\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonIcon\nThe `seeMoreButtonIcon` prop will display the given icon in the see more button.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonIcon={'angle-right'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button. It can also take a function returning a string. The function is passed the Autocomplete controller. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```tsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```tsx\n\nconst CustomResult = ({\n	controller \n	result\n	theme\n}) => {\n	return <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```js\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```js\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```js\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Autocomplete component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `termsTitle` | Suggestion terms section title | `controller` (AutocompleteController) |\n| `trendingTitle` | Trending terms section title | `controller` (AutocompleteController) |\n| `historyTitle` | Search history section title | `controller` (AutocompleteController) |\n| `facetsTitle` | Facets section title | `controller` (AutocompleteController) |\n| `contentTitle` | Content/results section title | `controller` (AutocompleteController) |\n| `closeButton` | Close button text | `controller` (AutocompleteController) |\n| `trendingTerm` | Individual trending term text/attributes | `controller` (AutocompleteController), `term` (Term), `index` (number) |\n| `suggestionsTerm` | Individual suggestion term text/attributes | `controller` (AutocompleteController), `term` (Term), `index` (number) |\n| `historyTerm` | Individual history term text/attributes | `controller` (AutocompleteController), `term` (Term), `index` (number) |\n| `noResultsText` | No results message | `controller` (AutocompleteController) |\n| `seeMoreButton` | See more results button text | `controller` (AutocompleteController) |\n\n### Example\n\n```tsx\n<Autocomplete\n	controller={controller}\n	input={'#searchInput'}\n	lang={{\n		termsTitle: {\n			value: 'Suggestions',\n		},\n		trendingTitle: {\n			value: 'Popular Searches',\n		},\n		historyTitle: {\n			value: 'Recent Searches',\n		},\n		closeButton: {\n			value: 'Close',\n			attributes: {\n				'aria-label': 'close autocomplete',\n			},\n		},\n		noResultsText: {\n			value: (data) => `<p>No results found for \"${data.controller?.store?.search?.query?.string}\".</p>`,\n		},\n		seeMoreButton: {\n			value: (data) => `See all ${data.controller?.store?.pagination.totalResults} results`,\n		},\n	}}\n/>\n```\n",
	{ fn: s } = __STORYBOOK_MODULE_TEST__,
	ye = {
		title: 'Organisms/Autocomplete',
		component: a,
		parameters: { docs: { description: { component: h } } },
		decorators: [
			(r) =>
				p('div', {
					style: { maxWidth: '1200px', position: 'relative' },
					children: [
						l('input', {
							type: 'text',
							id: 'searchInput',
							placeholder: 'try me!',
							autoComplete: 'off',
							style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
						}),
						l(r, {}),
					],
				}),
		],
		args: { onFacetOptionClick: s(), onTermClick: s() },
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
			width: {
				defaultValue: '100%',
				description: 'Change width of the component',
				table: { type: { summary: 'string' }, defaultValue: { summary: '100%' } },
				control: { type: 'text' },
			},
			hideTerms: {
				defaultValue: !1,
				description: 'prevent all terms from rendering (also applicable to trending and history terms)',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideHistory: {
				defaultValue: !1,
				description: 'prevent historical terms and results from rendering',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideTrending: {
				defaultValue: !1,
				description: 'prevent trending terms and results from rendering',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			retainHistory: {
				defaultValue: !1,
				description: 'allow history terms to render even when there is a query in the input',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			retainTrending: {
				defaultValue: !1,
				description: 'allow trending terms to render even when there is a query in the input',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideFacets: {
				defaultValue: !1,
				description: 'prevent facets from rendering',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideContent: {
				defaultValue: !1,
				description: 'prevent content area from rendering',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideBanners: {
				defaultValue: !1,
				description: 'prevent merchandising banners from rendering (inline banners not affected)',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideLink: {
				defaultValue: !1,
				description: 'prevent the "see n results for keyword" link from rendering (hideContent will also hide this)',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			horizontalTerms: {
				defaultValue: !1,
				description: 'display terms horizontally, (not required if vertical prop is true)',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			vertical: {
				defaultValue: !1,
				description: 'use a vertical (single column) layout',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			termsTitle: {
				defaultValue: '',
				description: 'Change terms header title',
				table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			trendingTitle: {
				defaultValue: 'Popular Searches',
				description: 'Change trending terms header title',
				table: { type: { summary: 'string' }, defaultValue: { summary: 'Popular Searches' } },
				control: { type: 'text' },
			},
			historyTitle: {
				defaultValue: 'Previously Searched',
				description: 'Change historical terms header title',
				table: { type: { summary: 'string' }, defaultValue: { summary: 'Previously Searched' } },
				control: { type: 'text' },
			},
			facetsTitle: {
				defaultValue: '',
				description: 'Change facets header title',
				table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			contentTitle: {
				defaultValue: '',
				description: 'Change content header title',
				table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			seeMoreButtonText: {
				defaultValue: 'See ${pagination.totalResults} results for "${search.query?.string}"',
				description: 'Text to render in the see more button',
				table: { type: { summary: 'string || function' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			seeMoreButtonIcon: {
				description: 'See more button Icon',
				table: { type: { summary: 'string' } },
				options: [...Object.keys(c)],
				control: { type: 'select' },
			},
			viewportMaxHeight: {
				defaultValue: !1,
				description: 'Autocomplete fully visible in viewport',
				table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			termsSlot: { description: 'Slot for custom terms component', table: { type: { summary: 'component' } }, control: !1 },
			facetsSlot: { description: 'Slot for custom facets component', table: { type: { summary: 'component' } }, control: !1 },
			contentSlot: { description: 'Slot for custom content component', table: { type: { summary: 'component' } }, control: !1 },
			linkSlot: { description: 'Slot for custom "see n results for keyword" link component', table: { type: { summary: 'component' } }, control: !1 },
			resultsSlot: { description: 'Slot for custom results component & title.', table: { type: { summary: 'component' } }, control: !1 },
			resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
			noResultsSlot: { description: 'Slot for custom no-results component.', table: { type: { summary: 'component' } }, control: !1 },
			breakpoints: {
				description: 'Breakpoints options object',
				table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
				control: !1,
			},
			onFacetOptionClick: { description: 'Custom onClick event handler for facet options.', table: { type: { summary: 'function' } }, control: !1 },
			onTermClick: {
				description: 'Custom onClick event handler for Suggested & Trending Terms',
				table: { type: { summary: 'function' } },
				control: !1,
			},
			...d,
		},
	},
	f = m.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
	o = {
		render: (r, { loaded: { controller: n } }) => {
			const [e, t] = u(''),
				i = [
					{ active: e === 'dress', preview: () => t('dress'), value: 'dress', type: 'suggested', url: { href: '#' } },
					{ active: e === 'shirt', preview: () => t('shirt'), value: 'shirt', type: 'suggested', url: { href: '#' } },
					{ active: e === 'shoes', preview: () => t('shoes'), value: 'shoes', type: 'suggested', url: { href: '#' } },
					{ active: e === 'hat', preview: () => t('hat'), value: 'hat', type: 'suggested', url: { href: '#' } },
					{ active: e === 'pants', preview: () => t('pants'), value: 'pants', type: 'suggested', url: { href: '#' } },
					{ active: e === 'socks', preview: () => t('socks'), value: 'socks', type: 'suggested', url: { href: '#' } },
				];
			return (
				(n.store.history = i),
				setTimeout(() => {
					n.bind();
				}),
				l(a, { ...r, controller: n, input: n?.config.selector })
			);
		},
		loaders: [async () => ({ controller: await f })],
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: AutocompleteProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: AutocompleteController;
    };
  }) => {
    // bind after input exists
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
    setTimeout(() => {
      controller.bind();
    });
    return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;
  },
  loaders: [async () => ({
    controller: await snapInstance
  })]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const ge = ['Default'];
export { o as Default, ge as __namedExportsOrder, ye as default };
