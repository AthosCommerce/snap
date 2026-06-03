(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9885],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx'(S, p, e) {
				'use strict';
				e.r(p), e.d(p, { Default: () => c, __namedExportsOrder: () => a, default: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					f = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					M = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					P = e('./components/src/utilities/snapify.ts');
				const C =
					"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n```tsx\nimport { Autocomplete } from '@athoscommerce/snap-preact/components';\n```\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonIcon\nThe `seeMoreButtonIcon` prop will display the given icon in the see more button.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonIcon={'angle-right'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button. It can also take a function returning a string. The function is passed the Autocomplete controller. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```tsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```tsx\n\nconst CustomResult = ({\n	controller \n	result\n	theme\n}) => {\n	return <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```js\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```js\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```js\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```";
				var x = e('./components/src/components/Atoms/Icon/paths.tsx'),
					O = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = {
						title: 'Organisms/Autocomplete',
						component: f.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(g.oz, { options: { overrides: { code: M.Z } }, children: C }), (0, t.Y)(g.uY, { story: g.h1 })],
									}),
							},
						},
						decorators: [
							(h) =>
								(0, t.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
										}),
										(0, t.Y)(h, {}),
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
								options: [...Object.keys(x.c)],
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
					v = P.p.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
					c = (h, { loaded: { controller: D } }) => {
						const [m, y] = (0, O.J0)(!1),
							u = [
								{ active: m === 'dress', preview: () => y('dress'), value: 'dress', url: { href: '#' } },
								{ active: m === 'shirt', preview: () => y('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: m === 'shoes', preview: () => y('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: m === 'hat', preview: () => y('hat'), value: 'hat', url: { href: '#' } },
								{ active: m === 'pants', preview: () => y('pants'), value: 'pants', url: { href: '#' } },
								{ active: m === 'socks', preview: () => y('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							(D.store.history = u),
							setTimeout(() => {
								D.bind();
							}),
							(0, t.Y)(f.j, { ...h, controller: D, input: D?.config.selector })
						);
					};
				(c.loaders = [async () => ({ controller: await v })]),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
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
								...c.parameters?.docs?.source,
							},
						},
					});
				const a = ['Default'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(S, p, e) {
				'use strict';
				e.d(p, { l: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					n = e.n(M),
					P = e('./components/src/providers/cache.tsx'),
					C = e('./components/src/providers/controller.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/withTracking.tsx'),
					E = e('./components/src/providers/snap.tsx'),
					v = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useComponent.tsx'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const y = () => (0, f.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					u = (0, C.Bk)(
						(0, g.PA)((_) => {
							const I = (0, x.u)(),
								A = (0, E.uk)(),
								i = { treePath: (0, v.LU)() },
								s = (0, c.v6)('banner', I, i, _),
								{ controller: l, type: d, className: T, internalClassName: b, customComponent: U } = s,
								L = s.content || l?.store?.merchandising.content;
							if (U) {
								const K = (0, h.x)(A?.templates?.library.import.component.banner || {}, U);
								if (K) return (0, t.Y)(K, { ...s });
							}
							if (d === D.c.INLINE) return console.warn(`BannerType '${D.c.INLINE}' is not supported in <Banner /> component`), null;
							const W = (0, a.Z)(s, y),
								o = L?.[d]?.[0]?.value;
							if (!d || !o) return null;
							const w = (0, m.hb)(
								(0, O.W)((K) =>
									(0, t.Y)('div', {
										className: n()('ss__banner', `ss__banner--${d}`, T, b),
										...W,
										ref: K.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof o == 'string' ? o : o.join('') },
									})
								),
								[o, d]
							);
							return (0, t.Y)(P._, { children: (0, t.Y)(w, { ...s }) });
						})
					);
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(S, p, e) {
				'use strict';
				e.d(p, { _: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					M = e.n(f),
					n = e('./components/src/providers/cache.tsx'),
					P = e('./components/src/providers/controller.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/withTracking.tsx'),
					O = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					a = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/types.ts'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/hooks/useComponent.tsx');
				const y = ({ width: _ }) =>
						(0, g.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: _,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					u = (0, P.Bk)(
						(0, x.W)(
							(0, D.PA)((_) => {
								const I = (0, C.u)(),
									A = (0, O.uk)(),
									r = (0, E.LU)(),
									i = { layout: h.V.grid, width: 'auto', treePath: r },
									s = (0, v.v6)('inlineBanner', I, i, _),
									{ banner: l, className: d, internalClassName: T, disableA11y: b, layout: U, onClick: L, customComponent: W } = s;
								if (W) {
									const o = (0, m.x)(A?.templates?.library.import.component.inlineBanner || {}, W);
									if (o) return (0, t.Y)(o, { ...s });
								}
								const k = (0, c.Z)(s, y);
								return l && l.value
									? (0, t.Y)(n._, {
											children: (0, t.Y)('div', {
												onClick: (o) => {
													L && L(o, l);
												},
												role: 'article',
												ref: (o) => {
													b || (0, a.iy)(o), _.trackingRef(o);
												},
												className: M()('ss__inline-banner', `ss__inline-banner--${U}`, d, T),
												...k,
												dangerouslySetInnerHTML: { __html: l.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(S, p, e) {
				'use strict';
				e.d(p, { J: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					M = e.n(f),
					n = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(n),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					O = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/snap.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/hooks/useComponent.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts');
				const y = () => (0, g.AH)({}),
					u = (0, C.PA)((_) => {
						const I = (0, E.u)(),
							A = (0, v.uk)(),
							r = (0, c.LU)(),
							i = { facets: _.controller?.store?.facets, treePath: r };
						let s = (0, D.v6)('facets', I, i, _);
						const {
							limit: l,
							onFacetOptionClick: d,
							disableStyles: T,
							className: b,
							internalClassName: U,
							controller: L,
							treePath: W,
							customComponent: k,
						} = s;
						if (k) {
							const R = (0, a.x)(A?.templates?.library.import.component.facets || {}, k);
							if (R) return (0, t.Y)(R, { ...s });
						}
						const o = (R) => {
								d && d(R), L?.setFocused && L?.setFocused();
							},
							w = {
								components: {
									facetGridOptions: { onClick: o },
									facetHierarchyOptions: { onClick: o },
									facetListOptions: { onClick: o },
									facetPaletteOptions: { onClick: o },
								},
							},
							K = P()(w, s?.theme || {}, { arrayMerge: (R, V) => V });
						s = { ...s, theme: K };
						let { facets: j } = s;
						l && j && l > 0 && (j = j.slice(0, +l));
						const N = { facet: { internalClassName: 'ss__facets__facet', ...(0, h.s)({ disableStyles: T }), theme: s.theme, treePath: W } },
							F = (0, m.Z)(s, y);
						return j && j?.length > 0
							? (0, t.Y)(O._, {
									children: (0, t.Y)('div', {
										className: M()('ss__facets', b, U),
										...F,
										children: j.map((R) => (0, t.Y)(x.s, { ...N.facet, facet: R }, R.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(S, p, e) {
				'use strict';
				e.d(p, { n: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('../../node_modules/classnames/index.js'),
					n = e.n(M),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(P),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					O = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					E = e('./components/src/components/Molecules/Result/Result.tsx'),
					v = e('./components/src/types.ts'),
					c = e('./components/src/utilities/cloneWithProps.tsx'),
					a = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/withTracking.tsx'),
					_ = e('./components/src/providers/snap.tsx'),
					I = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useDisplaySettings.tsx'),
					r = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					i = e('./components/src/hooks/useComponent.tsx');
				const s = ({ gapSize: T, columns: b }) =>
						(0, g.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: T,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${b}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / b}% - (${b - 1} * ${T} / ${b} ) )`,
								marginRight: T,
								marginBottom: T,
								[`&:nth-of-type(${b}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${b})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					l = (0, u.W)(E.Q),
					d = (0, f.PA)((T) => {
						const b = (0, y.u)(),
							U = (0, _.uk)(),
							L = (0, I.LU)(),
							W = {
								0: { columns: T.columns || 1 },
								540: { columns: T.columns || 2 },
								768: { columns: T.columns || 3 },
								991: { columns: T.columns || 4 },
							},
							k = { results: T.controller?.store?.results, columns: 4, gapSize: '20px', layout: v.V.grid, breakpoints: W, treePath: L };
						let o = (0, h.v6)('results', b, k, T);
						if (!(T.theme?.type == 'templates' || b?.type == 'templates')) {
							const B = (0, A.X)(o?.breakpoints || {}),
								X = C()(o?.theme || {}, B?.theme || {}, { arrayMerge: (Q, Z) => Z });
							o = { ...o, ...B, theme: X };
						}
						const {
							disableStyles: w,
							className: K,
							internalClassName: j,
							layout: N,
							theme: F,
							controller: R,
							treePath: V,
							customComponent: H,
							resultComponent: J,
						} = o;
						if (H) {
							const B = (0, i.x)(U?.templates?.library.import.component.results || {}, H);
							if (B) return (0, t.Y)(B, { ...o });
						}
						const $ = {
							result: { internalClassName: 'ss__results__result', ...(0, a.s)({ disableStyles: w }), theme: o?.theme, treePath: V },
							inlineBanner: {
								controller: R,
								internalClassName: 'ss__results__inline-banner',
								...(0, a.s)({ disableStyles: w }),
								theme: o?.theme,
								treePath: V,
							},
						};
						let Y = o.results;
						o?.columns && o?.rows && o.columns > 0 && o.rows > 0 && (Y = o.results?.slice(0, o.columns * o.rows));
						const z = (0, D.Z)({ ...o, columns: N == v.V.list ? 1 : o.columns }, s);
						return Y?.length
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										...z,
										className: n()('ss__results', `ss__results-${o.layout}`, K, j),
										children: Y.map((B) =>
											B.type === x.c.BANNER
												? (0, g.n)(O._, { ...$.inlineBanner, key: B.id, banner: B, layout: o.layout })
												: J && R
												? (0, t.Y)(r.o, {
														result: B,
														controller: R,
														children: (0, c.Y)(J, { key: B.id, controller: R, result: B, theme: F, treePath: V }),
												  })
												: (0, t.Y)(l, { ...$.result, result: B, layout: o.layout, controller: R }, B.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(S, p, e) {
				'use strict';
				e.d(p, { o: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('../../node_modules/classnames/index.js'),
					n = e.n(M),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/createImpressionObserver.ts');
				const O = { ResultTracker: () => (0, g.AH)({}) },
					E = (0, f.PA)((v) => {
						const c = (0, P.u)(),
							a = (0, C.v6)('resultTracker', c, {}, v),
							h = { impression: !0, click: !0 },
							{ children: D, result: m, track: y, controller: u, className: _, internalClassName: I, disableStyles: A, style: r } = a,
							i = { ...h, ...y },
							{ ref: s, inViewport: l } = (0, x.Q)();
						l && i.impression && u?.track.product.impression(m);
						const d = {};
						return (
							A ? r && (d.css = [r]) : (d.css = [O.ResultTracker(), r]),
							(0, t.Y)('div', {
								className: n()('ss__result-tracker', `ss__${u?.type}-result-tracker`, _, I),
								onClick: (T) => {
									i.click && u?.track.product.click(T, m);
								},
								ref: s,
								...d,
								children: D,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(S, p, e) {
				'use strict';
				e.d(p, { v: () => f });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 250,
					f = (n, P = {}) => {
						const { rootMargin: C = '0px', fireOnce: x = !1, threshold: O = 0, minVisibleTime: E = 0 } = P,
							[v, c] = (0, t.J0)(!1),
							a = (0, t.li)(null),
							h = (0, t.li)(null),
							[D, m] = (0, t.J0)(0),
							y = (0, t.hb)((u) => {
								(n.current = u), m((_) => _ + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								c(!1);
								let u = null,
									_ = null;
								if (!window.IntersectionObserver || !n.current) return;
								const I = () => {
										_ && (window.clearInterval(_), (_ = null));
									},
									A = () => {
										E > 0
											? ((h.current = Date.now()),
											  a.current && window.clearTimeout(a.current),
											  (a.current = window.setTimeout(() => {
													c(!0), x && n.current && u && u.unobserve(n.current);
											  }, E)))
											: (c(!0), x && n.current && u && u.unobserve(n.current));
									},
									r = () => {
										a.current && window.clearTimeout(a.current), (a.current = null), (h.current = null), c(!1);
									};
								return (
									(u = new IntersectionObserver(
										([i]) => {
											i.isIntersecting
												? n.current && M(n.current)
													? (I(), A())
													: (r(),
													  _ ||
															(_ = window.setInterval(() => {
																if (!n.current) {
																	I();
																	return;
																}
																M(n.current) && (I(), A());
															}, g)))
												: (I(), r());
										},
										{ rootMargin: C, threshold: O }
									)),
									n.current && u.observe(n.current),
									() => {
										c(!1), I(), a.current && window.clearTimeout(a.current), u && n.current && u.unobserve(n.current);
									}
								);
							}, [n, D]),
							{ inViewport: v, updateRef: y }
						);
					};
				function M(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(S, p, e) {
				'use strict';
				e.d(p, { N: () => M, W: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('./components/src/utilities/createImpressionObserver.ts'),
					f = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = 'sstracking';
				function n(P) {
					const C = P;
					return (O) => {
						const { controller: E, result: v, banner: c, type: a, content: h, ...D } = O;
						if (O.trackingRef) return (0, t.Y)(C, { ...O });
						!E && (!a || !h) && console.warn('Warning: No controller provided to withTracking', O),
							!v && !c && (!a || !h) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: m, inViewport: y, updateRef: u } = (0, g.Q)(),
							_ = (v || c || (a && h?.[a]?.[0]))?.responseId,
							I = (0, f.li)(_),
							A = (0, f.li)(!1);
						I.current !== _ && (A.current = !0),
							(0, f.vJ)(() => {
								I.current !== _ && ((I.current = _), u(m.current));
							}, [_, u]),
							(0, f.vJ)(() => {
								A.current && !y && (A.current = !1);
							}, [y, _]);
						const r = a && h && !v && ['search', 'autocomplete'].includes(E?.type || '');
						y && !A.current && (r ? E?.track.banner.impression(h[a][0]) : v?.bundleSeed || E?.track.product.impression(v || c));
						const i = (0, f.hb)(
							(l) => {
								r ? E?.track.banner.click(l, h[a][0]) : E?.track.product.click(l, v || c);
							},
							[E, v, c, a, h]
						);
						(0, f.vJ)(() => {
							const l = m.current;
							if (l)
								return (
									l.setAttribute(M, 'true'),
									l.addEventListener('click', i, !0),
									() => {
										l.removeEventListener('click', i, !0);
									}
								);
						}, [i]);
						const s = {
							...D,
							controller: E,
							result: v,
							banner: c,
							type: a,
							content: h,
							trackingRef: (0, f.hb)(
								(l) => {
									u(l);
								},
								[u]
							),
						};
						return (0, t.Y)(C, { ...s });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(S, p, e) {
				'use strict';
				e.d(p, { F: () => t });
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
			},
			'./components/src/utilities/createImpressionObserver.ts'(S, p, e) {
				'use strict';
				e.d(p, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const f = 0.7,
					M = 1e3;
				function n(P) {
					const C = (0, t.li)(null),
						{ inViewport: x, updateRef: O } = (0, g.v)(C, { ...P, fireOnce: !0, threshold: f, minVisibleTime: M });
					return { ref: C, inViewport: x, updateRef: O };
				}
			},
			'./components/src/utilities/snapify.ts'(S, p, e) {
				'use strict';
				e.d(p, { p: () => u });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					M = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					c = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					a = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					y = { globals: { siteId: 'atkzs2' } };
				class u {
					static recommendation(i) {
						const s = i.id;
						if (m[s]) return m[s];
						const l = (m[s] = I({ client: y, controller: i }));
						return (
							l.on('afterStore', async ({ controller: d }, T) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await T();
							}),
							l.init(),
							l
						);
					}
					static autocomplete(i) {
						const s = i.id;
						if (m[s]) return m[s];
						const l = (m[s] = A({ client: y, controller: i }));
						return (
							l.on('afterStore', async ({ controller: d }, T) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await T();
							}),
							l.init(),
							l
						);
					}
					static search(i) {
						const s = i.id;
						if (m[s]) return m[s];
						const l = (m[s] = _({ client: y, controller: i }));
						return (
							l.on('afterStore', async ({ controller: d }, T) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await T();
							}),
							l.init(),
							l
						);
					}
				}
				function _(r) {
					const i = new O.V(new v.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), E.X);
					return new g.Tp(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new C.U(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new c.E(),
						profiler: new a.U(),
						logger: new h.V(),
						tracker: new D.J(r.client.globals),
					});
				}
				function I(r) {
					const i = new O.V(new v.E(), E.X).detach(!0);
					return new M.c(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new x.t(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new c.E(),
						profiler: new a.U(),
						logger: new h.V(),
						tracker: new D.J(r.client.globals),
					});
				}
				function A(r) {
					const i = new O.V(new v.E(), E.X).detach();
					return new f.Z(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new P.Y(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new c.E(),
						profiler: new a.U(),
						logger: new h.V(),
						tracker: new D.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(S, p, e) {
				'use strict';
				e.d(p, { Z: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const f = 'prism-block',
					M = (n) => {
						const P = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								P.current && n.className?.includes('lang-') && !n.className?.includes(f) && window?.Prism?.highlightElement(P.current);
							}, [n.className, n.children, P]),
							(0, t.Y)('code', { ...n, ref: P, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(S) {
				function p(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (S.exports = p);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Autocomplete-Autocomplete-stories.4883d4c5.iframe.bundle.js.map
