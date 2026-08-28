(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9885],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx'(A, u, e) {
				'use strict';
				e.r(u), e.d(u, { Default: () => l, __namedExportsOrder: () => s, default: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					E = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					v = e('./components/src/utilities/snapify.ts');
				const x =
					"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n```tsx\nimport { Autocomplete } from '@athoscommerce/snap-preact/components';\n```\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonIcon\nThe `seeMoreButtonIcon` prop will display the given icon in the see more button.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonIcon={'angle-right'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button. It can also take a function returning a string. The function is passed the Autocomplete controller. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```tsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```tsx\n\nconst CustomResult = ({\n	controller \n	result\n	theme\n}) => {\n	return <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```js\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```js\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```js\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Autocomplete component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `termsTitle` | Suggestion terms section title | `controller` (AutocompleteController) |\n| `trendingTitle` | Trending terms section title | `controller` (AutocompleteController) |\n| `historyTitle` | Search history section title | `controller` (AutocompleteController) |\n| `facetsTitle` | Facets section title | `controller` (AutocompleteController) |\n| `contentTitle` | Content/results section title | `controller` (AutocompleteController) |\n| `closeButton` | Close button text | `controller` (AutocompleteController) |\n| `trendingTerm` | Individual trending term text/attributes | `controller` (AutocompleteController), `term` (Term), `index` (number) |\n| `suggestionsTerm` | Individual suggestion term text/attributes | `controller` (AutocompleteController), `term` (Term), `index` (number) |\n| `historyTerm` | Individual history term text/attributes | `controller` (AutocompleteController), `term` (Term), `index` (number) |\n| `noResultsText` | No results message | `controller` (AutocompleteController) |\n| `seeMoreButton` | See more results button text | `controller` (AutocompleteController) |\n\n### Example\n\n```tsx\n<Autocomplete\n	controller={controller}\n	input={'#searchInput'}\n	lang={{\n		termsTitle: {\n			value: 'Suggestions',\n		},\n		trendingTitle: {\n			value: 'Popular Searches',\n		},\n		historyTitle: {\n			value: 'Recent Searches',\n		},\n		closeButton: {\n			value: 'Close',\n			attributes: {\n				'aria-label': 'close autocomplete',\n			},\n		},\n		noResultsText: {\n			value: (data) => `<p>No results found for \"${data.controller?.store?.search?.query?.string}\".</p>`,\n		},\n		seeMoreButton: {\n			value: (data) => `See all ${data.controller?.store?.pagination.totalResults} results`,\n		},\n	}}\n/>\n```\n";
				var M = e('./components/src/components/Atoms/Icon/paths.tsx'),
					T = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = {
						title: 'Organisms/Autocomplete',
						component: d.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(g.oz, { options: { overrides: { code: E.Z } }, children: x }), (0, o.Y)(g.uY, { story: g.h1 })],
									}),
							},
						},
						decorators: [
							(m) =>
								(0, o.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, o.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
										}),
										(0, o.Y)(m, {}),
									],
								}),
						],
						argTypes: {
							controller: {
								description: 'Autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Autocomplete controller object' } },
								control: { type: 'none' },
							},
							input: {
								description: 'input element reference',
								type: { required: !0 },
								table: { type: { summary: 'Element or String as CSS Selector' } },
								control: { type: 'none' },
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
								options: [...Object.keys(M.c)],
								control: { type: 'select' },
							},
							viewportMaxHeight: {
								defaultValue: !1,
								description: 'Autocomplete fully visible in viewport',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							termsSlot: { description: 'Slot for custom terms component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
							facetsSlot: { description: 'Slot for custom facets component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
							contentSlot: { description: 'Slot for custom content component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
							linkSlot: {
								description: 'Slot for custom "see n results for keyword" link component',
								table: { type: { summary: 'component' } },
								control: { type: 'none' },
							},
							resultsSlot: {
								description: 'Slot for custom results component & title.',
								table: { type: { summary: 'component' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							noResultsSlot: {
								description: 'Slot for custom no-results component.',
								table: { type: { summary: 'component' } },
								control: { type: 'none' },
							},
							breakpoints: {
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'none' },
							},
							onFacetOptionClick: {
								description: 'Custom onClick event handler for facet options.',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onFacetOptionClick',
							},
							onTermClick: {
								description: 'Custom onClick event handler for Suggested & Trending Terms',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onTermClick',
							},
							...n.F,
						},
					},
					f = v.p.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
					l = (m, { loaded: { controller: C } }) => {
						const [a, _] = (0, T.J0)(!1),
							p = [
								{ active: a === 'dress', preview: () => _('dress'), value: 'dress', url: { href: '#' } },
								{ active: a === 'shirt', preview: () => _('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: a === 'shoes', preview: () => _('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: a === 'hat', preview: () => _('hat'), value: 'hat', url: { href: '#' } },
								{ active: a === 'pants', preview: () => _('pants'), value: 'pants', url: { href: '#' } },
								{ active: a === 'socks', preview: () => _('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							(C.store.history = p),
							setTimeout(() => {
								C.bind();
							}),
							(0, o.Y)(d.j, { ...m, controller: C, input: C?.config.selector })
						);
					};
				(l.loaders = [async () => ({ controller: await f })]),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  // bind after input exists
  const [termState, setTermState] = useState(false);
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
    url: {
      href: '#'
    } as UrlManager
  }];
  controller.store.history = mockTerms;
  setTimeout(() => {
    controller.bind();
  });
  return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;
}`,
								...l.parameters?.docs?.source,
							},
						},
					});
				const s = ['Default'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(A, u, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					n = e.n(E),
					v = e('./components/src/providers/cache.tsx'),
					x = e('./components/src/providers/controller.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/withTracking.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					s = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = () => (0, d.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					_ = (0, x.Bk)(
						(0, g.PA)((p) => {
							const y = (0, M.u)(),
								P = { treePath: (0, h.LU)() },
								t = (0, f.v6)('banner', y, P, p),
								{ controller: r, type: i, className: c, internalClassName: b } = t,
								S = t.content || r?.store?.merchandising.content,
								{ overrideElement: R, shouldRenderDefault: B } = (0, s._)('banner', t);
							if (!B) return R;
							if (i === m.c.INLINE) return console.warn(`BannerType '${m.c.INLINE}' is not supported in <Banner /> component`), null;
							const k = (0, l.Z)(t, a),
								I = S?.[i]?.[0]?.value;
							if (!i || !I) return null;
							const L = (0, C.hb)(
								(0, T.W)((U) =>
									(0, o.Y)('div', {
										className: n()('ss__banner', `ss__banner--${i}`, c, b),
										...k,
										ref: U.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof I == 'string' ? I : I.join('') },
									})
								),
								[I, i]
							);
							return (0, o.Y)(v._, { children: (0, o.Y)(L, { ...t }) });
						})
					);
				e.d(u, ['l', 0, _]);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(A, u, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					E = e.n(d),
					n = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(n),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					T = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts');
				const a = () => (0, g.AH)({}),
					_ = (0, x.PA)((p) => {
						const y = (0, h.u)(),
							O = (0, f.LU)(),
							P = { facets: p.controller?.store?.facets, treePath: O };
						let t = (0, m.v6)('facets', y, P, p);
						const { limit: r, onFacetOptionClick: i, disableStyles: c, className: b, internalClassName: S, controller: R, treePath: B } = t,
							{ overrideElement: k, shouldRenderDefault: j } = (0, l._)('facets', t);
						if (!j) return k;
						const I = (w) => {
								i && i(w), R?.setFocused && R?.setFocused();
							},
							L = {
								components: {
									facetGridOptions: { onClick: I },
									facetHierarchyOptions: { onClick: I },
									facetListOptions: { onClick: I },
									facetPaletteOptions: { onClick: I },
								},
							},
							U = v()(L, t?.theme || {}, { arrayMerge: (w, K) => K });
						t = { ...t, theme: U };
						let { facets: D } = t;
						r && D && r > 0 && (D = D.slice(0, +r));
						const W = { facet: { internalClassName: 'ss__facets__facet', ...(0, s.s)({ disableStyles: c }), theme: t.theme, treePath: B } },
							V = (0, C.Z)(t, a);
						return D && D?.length > 0
							? (0, o.Y)(T._, {
									children: (0, o.Y)('div', {
										className: E()('ss__facets', b, S),
										...V,
										children: D.map((w) => (0, o.Y)(M.s, { ...W.facet, facet: w }, w.field)),
									}),
							  })
							: null;
					});
				e.d(u, ['J', 0, _]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(A, u, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 250,
					d = (n, v = {}) => {
						const { rootMargin: x = '0px', fireOnce: M = !1, threshold: T = 0, minVisibleTime: h = 0 } = v,
							[f, l] = (0, o.J0)(!1),
							s = (0, o.li)(null),
							m = (0, o.li)(null),
							[C, a] = (0, o.J0)(0),
							_ = (0, o.hb)((p) => {
								(n.current = p), a((y) => y + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								l(!1);
								let p = null,
									y = null;
								if (!window.IntersectionObserver || !n.current) return;
								const O = () => {
										y && (window.clearInterval(y), (y = null));
									},
									P = () => {
										h > 0
											? ((m.current = Date.now()),
											  s.current && window.clearTimeout(s.current),
											  (s.current = window.setTimeout(() => {
													l(!0), M && n.current && p && p.unobserve(n.current);
											  }, h)))
											: (l(!0), M && n.current && p && p.unobserve(n.current));
									},
									t = () => {
										s.current && window.clearTimeout(s.current), (s.current = null), (m.current = null), l(!1);
									};
								return (
									(p = new IntersectionObserver(
										([r]) => {
											r.isIntersecting
												? n.current && E(n.current)
													? (O(), P())
													: (t(),
													  y ||
															(y = window.setInterval(() => {
																if (!n.current) {
																	O();
																	return;
																}
																E(n.current) && (O(), P());
															}, g)))
												: (O(), t());
										},
										{ rootMargin: x, threshold: T }
									)),
									n.current && p.observe(n.current),
									() => {
										l(!1), O(), s.current && window.clearTimeout(s.current), p && n.current && p.unobserve(n.current);
									}
								);
							}, [n, C]),
							{ inViewport: f, updateRef: _ }
						);
					};
				function E(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(u, ['v', 0, d]);
			},
			'./components/src/providers/withTracking.tsx'(A, u, e) {
				'use strict';
				e.d(u, { N: () => E, W: () => n });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('./components/src/utilities/createImpressionObserver.ts'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 'sstracking';
				function n(v) {
					const x = v;
					return (T) => {
						const { controller: h, result: f, banner: l, type: s, content: m, ...C } = T;
						if (T.trackingRef) return (0, o.Y)(x, { ...T });
						!h && (!s || !m) && console.warn('Warning: No controller provided to withTracking', T),
							!f && !l && (!s || !m) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: a, inViewport: _, updateRef: p } = (0, g.Q)(),
							y = (f || l || (s && m?.[s]?.[0]))?.responseId,
							O = (0, d.li)(y),
							P = (0, d.li)(!1);
						O.current !== y && (P.current = !0),
							(0, d.vJ)(() => {
								O.current !== y && ((O.current = y), p(a.current));
							}, [y, p]),
							(0, d.vJ)(() => {
								P.current && !_ && (P.current = !1);
							}, [_, y]);
						const t = s && m && !f && ['search', 'autocomplete'].includes(h?.type || '');
						_ && !P.current && (t ? h?.track.banner.impression(m[s][0]) : f?.bundleSeed || h?.track.product.impression(f || l));
						const r = (0, d.hb)(
							(c) => {
								t ? h?.track.banner.click(c, m[s][0]) : h?.track.product.click(c, f || l);
							},
							[h, f, l, s, m]
						);
						(0, d.vJ)(() => {
							const c = a.current;
							if (c)
								return (
									c.setAttribute(E, 'true'),
									c.addEventListener('click', r, !0),
									() => {
										c.removeEventListener('click', r, !0);
									}
								);
						}, [r]);
						const i = {
							...C,
							controller: h,
							result: f,
							banner: l,
							type: s,
							content: m,
							trackingRef: (0, d.hb)(
								(c) => {
									p(c);
								},
								[p]
							),
						};
						return (0, o.Y)(x, { ...i });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(A, u, e) {
				'use strict';
				const o = {
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
				e.d(u, ['F', 0, o]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(A, u, e) {
				'use strict';
				e.d(u, { Q: () => n });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const d = 0.7,
					E = 1e3;
				function n(v) {
					const x = (0, o.li)(null),
						{ inViewport: M, updateRef: T } = (0, g.v)(x, { fireOnce: !0, threshold: d, minVisibleTime: E, ...v });
					return { ref: x, inViewport: M, updateRef: T };
				}
			},
			'./components/src/utilities/snapify.ts'(A, u, e) {
				'use strict';
				e.d(u, { p: () => p });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					l = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					s = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					m = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const a = {},
					_ = { globals: { siteId: 'atkzs2' } };
				class p {
					static recommendation(r) {
						const i = r.id;
						if (a[i]) return a[i];
						const c = (a[i] = O({ client: _, controller: r }));
						return (
							c.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(r) {
						const i = r.id;
						if (a[i]) return a[i];
						const c = (a[i] = P({ client: _, controller: r }));
						return (
							c.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							c.init(),
							c
						);
					}
					static search(r) {
						const i = r.id;
						if (a[i]) return a[i];
						const c = (a[i] = y({ client: _, controller: r }));
						return (
							c.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							c.init(),
							c
						);
					}
				}
				function y(t) {
					const r = new T.V(new f.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), h.X);
					return new g.Tp(t.controller, {
						client: new n.K(t.client.globals, t.client.config),
						store: new x.U(t.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new s.U(),
						logger: new m.V(),
						tracker: new C.J(t.client.globals),
					});
				}
				function O(t) {
					const r = new T.V(new f.E(), h.X).detach(!0);
					return new E.c(t.controller, {
						client: new n.K(t.client.globals, t.client.config),
						store: new M.t(t.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new s.U(),
						logger: new m.V(),
						tracker: new C.J(t.client.globals),
					});
				}
				function P(t) {
					const r = new T.V(new f.E(), h.X).detach();
					return new d.Z(t.controller, {
						client: new n.K(t.client.globals, t.client.config),
						store: new v.Y(t.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new s.U(),
						logger: new m.V(),
						tracker: new C.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(A, u, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					E = (n) => {
						const v = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								v.current && n.className?.includes('lang-') && !n.className?.includes(d) && window?.Prism?.highlightElement(v.current);
							}, [n.className, n.children, v]),
							(0, o.Y)('code', { ...n, ref: v, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(u, ['Z', 0, E]);
			},
			'../../node_modules/memoizerific sync recursive'(A) {
				function u(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(u.keys = () => []), (u.resolve = u), (u.id = '../../node_modules/memoizerific sync recursive'), (A.exports = u);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Autocomplete-Autocomplete-stories.ae9d8ee8.iframe.bundle.js.map
