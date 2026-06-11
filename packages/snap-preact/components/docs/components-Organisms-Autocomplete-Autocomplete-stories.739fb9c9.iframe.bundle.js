(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9885],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx'(W, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => i, __namedExportsOrder: () => s, default: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts');
				const M =
					"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n```tsx\nimport { Autocomplete } from '@athoscommerce/snap-preact/components';\n```\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonIcon\nThe `seeMoreButtonIcon` prop will display the given icon in the see more button.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonIcon={'angle-right'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button. It can also take a function returning a string. The function is passed the Autocomplete controller. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```tsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```tsx\n\nconst CustomResult = ({\n	controller \n	result\n	theme\n}) => {\n	return <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```js\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```js\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```js\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```tsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```";
				var C = e('./components/src/components/Atoms/Icon/paths.tsx'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = {
						title: 'Organisms/Autocomplete',
						component: _.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(T.oz, { options: { overrides: { code: O.Z } }, children: M }), (0, t.Y)(T.uY, { story: T.h1 })],
									}),
							},
						},
						decorators: [
							(p) =>
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
										(0, t.Y)(p, {}),
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
								options: [...Object.keys(C.c)],
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
							...o.F,
						},
					},
					E = y.p.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
					i = (p, { loaded: { controller: D } }) => {
						const [c, f] = (0, P.J0)(!1),
							l = [
								{ active: c === 'dress', preview: () => f('dress'), value: 'dress', url: { href: '#' } },
								{ active: c === 'shirt', preview: () => f('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: c === 'shoes', preview: () => f('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: c === 'hat', preview: () => f('hat'), value: 'hat', url: { href: '#' } },
								{ active: c === 'pants', preview: () => f('pants'), value: 'pants', url: { href: '#' } },
								{ active: c === 'socks', preview: () => f('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							(D.store.history = l),
							setTimeout(() => {
								D.bind();
							}),
							(0, t.Y)(_.j, { ...p, controller: D, input: D?.config.selector })
						);
					};
				(i.loaders = [async () => ({ controller: await E })]),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
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
								...i.parameters?.docs?.source,
							},
						},
					});
				const s = ['Default'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(W, d, e) {
				'use strict';
				e.d(d, { l: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					o = e.n(O),
					y = e('./components/src/providers/cache.tsx'),
					M = e('./components/src/providers/controller.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/withTracking.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					s = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = () => (0, _.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					f = (0, M.Bk)(
						(0, T.PA)((l) => {
							const v = (0, C.u)(),
								B = { treePath: (0, h.LU)() },
								n = (0, E.v6)('banner', v, B, l),
								{ controller: r, type: m, className: u, internalClassName: g } = n,
								S = n.content || r?.store?.merchandising.content,
								{ overrideElement: I, shouldRenderDefault: U } = (0, s._)('banner', n);
							if (!U) return I;
							if (m === p.c.INLINE) return console.warn(`BannerType '${p.c.INLINE}' is not supported in <Banner /> component`), null;
							const V = (0, i.Z)(n, c),
								L = S?.[m]?.[0]?.value;
							if (!m || !L) return null;
							const x = (0, D.hb)(
								(0, P.W)((a) =>
									(0, t.Y)('div', {
										className: o()('ss__banner', `ss__banner--${m}`, u, g),
										...V,
										ref: a.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof L == 'string' ? L : L.join('') },
									})
								),
								[L, m]
							);
							return (0, t.Y)(y._, { children: (0, t.Y)(x, { ...n }) });
						})
					);
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(W, d, e) {
				'use strict';
				e.d(d, { _: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					O = e.n(_),
					o = e('./components/src/providers/cache.tsx'),
					y = e('./components/src/providers/controller.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/withTracking.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/types.ts'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const c = ({ width: l }) =>
						(0, T.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: l,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					f = (0, y.Bk)(
						(0, C.W)(
							(0, p.PA)((l) => {
								const v = (0, M.u)(),
									A = (0, P.LU)(),
									B = { layout: s.V.grid, width: 'auto', treePath: A },
									n = (0, h.v6)('inlineBanner', v, B, l),
									{ banner: r, className: m, internalClassName: u, disableA11y: g, layout: S, onClick: I } = n,
									{ overrideElement: U, shouldRenderDefault: V } = (0, D._)('inlineBanner', n);
								if (!V) return U;
								const Y = (0, E.Z)(n, c);
								return r && r.value
									? (0, t.Y)(o._, {
											children: (0, t.Y)('div', {
												onClick: (L) => {
													I && I(L, r);
												},
												role: 'article',
												ref: (L) => {
													g || (0, i.iy)(L), l.trackingRef(L);
												},
												className: O()('ss__inline-banner', `ss__inline-banner--${S}`, m, u),
												...Y,
												dangerouslySetInnerHTML: { __html: r.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(W, d, e) {
				'use strict';
				e.d(d, { Q: () => I });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					y = e.n(o),
					M = e('./components/src/components/Atoms/Image/Image.tsx'),
					C = e('./components/src/components/Atoms/Price/Price.tsx'),
					P = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/cloneWithProps.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					c = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					f = e('./components/src/types.ts'),
					l = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					v = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					A = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					B = e('./components/src/components/Atoms/Button/Button.tsx'),
					n = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(n),
					m = e('./components/src/hooks/useLang.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const S = () =>
						(0, O.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					I = (0, _.PA)((U) => {
						const V = (0, h.u)(),
							Y = (0, E.LU)(),
							L = {
								layout: f.V.grid,
								treePath: Y,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							x = (0, p.v6)('result', V, L, U),
							{
								result: a,
								hideBadge: j,
								hideTitle: $,
								hidePricing: z,
								hideImage: w,
								detailSlot: X,
								fallback: te,
								disableStyles: K,
								className: Z,
								internalClassName: Q,
								layout: ne,
								onClick: H,
								controller: N,
								hideVariantSelections: oe,
								hideAddToCartButton: se,
								onAddToCartClick: G,
								addToCartButtonText: re,
								addToCartButtonSuccessText: q,
								addToCartButtonSuccessTimeout: ee,
								hideRating: J,
								trackingRef: le,
								treePath: R,
							} = x,
							{ overrideElement: ae, shouldRenderDefault: ie } = (0, u._)('result', {
								...x,
								customComponent: x.customComponent && x.customComponent !== 'Result' ? x.customComponent : void 0,
							});
						if (!ie) return ae;
						const b = a?.display?.mappings.core || a?.mappings?.core,
							[de, ce] = (0, T.J0)(!1),
							k = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, s.s)({ disableStyles: K }),
									theme: x.theme,
									treePath: R,
								},
								price: { internalClassName: 'ss__result__price', ...(0, s.s)({ disableStyles: K }), theme: x.theme, treePath: R },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: a,
									...(0, s.s)({ disableStyles: K }),
									theme: x.theme,
									treePath: R,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: a,
									controller: N,
									...(0, s.s)({ disableStyles: K }),
									theme: x.theme,
									treePath: R,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: b?.name || '',
									src: b?.imageUrl || '',
									...(0, s.s)({ disableStyles: K, fallback: te }),
									theme: x.theme,
									treePath: R,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: b?.rating || 0,
									count: Number(b?.ratingCount || 0),
									...(0, s.s)({ disableStyles: K }),
									theme: x.theme,
									treePath: R,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (F) => {
										ce(!0), G && G(F, a), N?.addToCart([a]), setTimeout(() => ce(!1), ee);
									},
									...(0, s.s)({ disableStyles: K }),
									theme: x.theme,
									treePath: R,
								},
							};
						let me = b?.name;
						x.truncateTitle && (me = c.x(b?.name || '', x.truncateTitle.limit, x.truncateTitle.append));
						const pe = (0, D.Z)(x, S),
							_e = { addToCartButtonText: { value: de ? q : re } },
							he = r()(_e, x.lang || {}),
							Ee = (0, m.u)(he, { result: a, controller: N }),
							ue = !!(b?.msrp && b?.price && b?.price < b?.msrp);
						return b
							? (0, t.Y)(P._, {
									children: (0, t.FD)('article', {
										...pe,
										className: y()('ss__result', `ss__result--${ne}`, { 'ss__result--sale': ue }, Z, Q),
										ref: le,
										children: [
											!w &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: b.url,
														onClick: (F) => {
															H && H(F);
														},
														children: j
															? (0, t.Y)(M._, { ...k.image })
															: (0, t.Y)(v.Q, { ...k.overlayBadge, controller: N, children: (0, t.Y)(M._, { ...k.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!j && (0, t.Y)(l.W, { ...k.calloutBadge, controller: N }),
													!$ &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: b.url,
																onClick: (F) => {
																	H && H(F);
																},
																dangerouslySetInnerHTML: { __html: me || '' },
															}),
														}),
													!J && (0, t.Y)(A.G, { ...k.rating }),
													!z && b.price && b.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ue
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(C.g, { ...k.price, value: b.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(C.g, { ...k.price, value: b.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(C.g, { ...k.price, value: b.price }),
														  })
														: null,
													(0, i.Y)(X, { result: a, treePath: R }),
													!oe && a.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: a.variants?.selections.map((F) => (0, t.Y)(g.m, { ...k.variantSelection, type: F.type, selection: F })),
														  })
														: null,
													!se &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(B.$, { ...k.button, ...Ee.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(W, d, e) {
				'use strict';
				e.d(d, { J: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					O = e.n(_),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(o),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					P = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts');
				const c = () => (0, T.AH)({}),
					f = (0, M.PA)((l) => {
						const v = (0, h.u)(),
							A = (0, E.LU)(),
							B = { facets: l.controller?.store?.facets, treePath: A };
						let n = (0, p.v6)('facets', v, B, l);
						const { limit: r, onFacetOptionClick: m, disableStyles: u, className: g, internalClassName: S, controller: I, treePath: U } = n,
							{ overrideElement: V, shouldRenderDefault: Y } = (0, i._)('facets', n);
						if (!Y) return V;
						const L = (w) => {
								m && m(w), I?.setFocused && I?.setFocused();
							},
							x = {
								components: {
									facetGridOptions: { onClick: L },
									facetHierarchyOptions: { onClick: L },
									facetListOptions: { onClick: L },
									facetPaletteOptions: { onClick: L },
								},
							},
							a = y()(x, n?.theme || {}, { arrayMerge: (w, X) => X });
						n = { ...n, theme: a };
						let { facets: j } = n;
						r && j && r > 0 && (j = j.slice(0, +r));
						const $ = { facet: { internalClassName: 'ss__facets__facet', ...(0, s.s)({ disableStyles: u }), theme: n.theme, treePath: U } },
							z = (0, D.Z)(n, c);
						return j && j?.length > 0
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										className: O()('ss__facets', g, S),
										...z,
										children: j.map((w) => (0, t.Y)(C.s, { ...$.facet, facet: w }, w.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(W, d, e) {
				'use strict';
				e.d(d, { n: () => S });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/classnames/index.js'),
					o = e.n(O),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(y),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					P = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					h = e('./components/src/components/Molecules/Result/Result.tsx'),
					E = e('./components/src/types.ts'),
					i = e('./components/src/utilities/cloneWithProps.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/providers/withTracking.tsx'),
					v = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					B = e('./components/src/hooks/useDisplaySettings.tsx'),
					n = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					r = e('./components/src/hooks/useComponent.tsx'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const u = ({ gapSize: I, columns: U }) =>
						(0, T.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: I,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${U}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / U}% - (${U - 1} * ${I} / ${U} ) )`,
								marginRight: I,
								marginBottom: I,
								[`&:nth-of-type(${U}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${U})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					g = (0, l.W)(h.Q),
					S = (0, _.PA)((I) => {
						const U = (0, f.u)(),
							V = (0, v.uk)(),
							Y = (0, A.LU)(),
							L = {
								0: { columns: I.columns || 1 },
								540: { columns: I.columns || 2 },
								768: { columns: I.columns || 3 },
								991: { columns: I.columns || 4 },
							},
							x = { results: I.controller?.store?.results, columns: 4, gapSize: '20px', layout: E.V.grid, breakpoints: L, treePath: Y };
						let a = (0, p.v6)('results', U, x, I);
						if (!(I.theme?.type == 'templates' || U?.type == 'templates')) {
							const R = (0, B.X)(a?.breakpoints || {}),
								ae = M()(a?.theme || {}, R?.theme || {}, { arrayMerge: (ie, b) => b });
							a = { ...a, ...R, theme: ae };
						}
						const { disableStyles: j, className: $, internalClassName: z, layout: w, theme: X, excludeBanners: te, controller: K, treePath: Z } = a,
							Q = a.resultComponent,
							{ overrideElement: ne, shouldRenderDefault: H } = (0, m._)('results', a);
						if (!H) return ne;
						const N = typeof Q == 'string',
							oe = N ? Q : '',
							se = V?.templates?.library.import.component.result || {},
							{ ComponentOverride: G, shouldWaitForNamedOverride: re } = (0, r.x)(se, N ? oe : void 0),
							q = N ? G : Q,
							ee = {
								result: { internalClassName: 'ss__results__result', ...(0, s.s)({ disableStyles: j }), theme: a?.theme, treePath: Z },
								inlineBanner: {
									controller: K,
									internalClassName: 'ss__results__inline-banner',
									...(0, s.s)({ disableStyles: j }),
									theme: a?.theme,
									treePath: Z,
								},
							};
						let J = te ? a.results?.filter((R) => R.type !== C.c.BANNER) : a.results;
						a?.columns && a?.rows && a.columns > 0 && a.rows > 0 && (J = J?.slice(0, a.columns * a.rows));
						const le = (0, D.Z)({ ...a, columns: w == E.V.list ? 1 : a.columns }, u);
						return J?.length
							? (0, t.Y)(c._, {
									children: (0, t.Y)('div', {
										...le,
										className: o()('ss__results', `ss__results-${a.layout}`, $, z),
										children: J.map((R) =>
											R.type === C.c.BANNER
												? (0, T.n)(P._, { ...ee.inlineBanner, key: R.id, banner: R, layout: a.layout })
												: re
												? null
												: q && K
												? (0, t.Y)(n.o, {
														result: R,
														controller: K,
														children: (0, i.Y)(q, { key: R.id, controller: K, result: R, theme: X, treePath: Z }),
												  })
												: (0, t.Y)(g, { ...ee.result, result: R, layout: a.layout, controller: K }, R.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(W, d, e) {
				'use strict';
				e.d(d, { o: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/classnames/index.js'),
					o = e.n(O),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/createImpressionObserver.ts');
				const P = { ResultTracker: () => (0, T.AH)({}) },
					h = (0, _.PA)((E) => {
						const i = (0, y.u)(),
							s = (0, M.v6)('resultTracker', i, {}, E),
							p = { impression: !0, click: !0 },
							{ children: D, result: c, track: f, controller: l, className: v, internalClassName: A, disableStyles: B, style: n } = s,
							r = { ...p, ...f },
							{ ref: m, inViewport: u } = (0, C.Q)();
						u && r.impression && l?.track.product.impression(c);
						const g = {};
						return (
							B ? n && (g.css = [n]) : (g.css = [P.ResultTracker(), n]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${l?.type}-result-tracker`, v, A),
								onClick: (S) => {
									r.click && l?.track.product.click(S, c);
								},
								ref: m,
								...g,
								children: D,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(W, d, e) {
				'use strict';
				e.d(d, { v: () => _ });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = 250,
					_ = (o, y = {}) => {
						const { rootMargin: M = '0px', fireOnce: C = !1, threshold: P = 0, minVisibleTime: h = 0 } = y,
							[E, i] = (0, t.J0)(!1),
							s = (0, t.li)(null),
							p = (0, t.li)(null),
							[D, c] = (0, t.J0)(0),
							f = (0, t.hb)((l) => {
								(o.current = l), c((v) => v + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								i(!1);
								let l = null,
									v = null;
								if (!window.IntersectionObserver || !o.current) return;
								const A = () => {
										v && (window.clearInterval(v), (v = null));
									},
									B = () => {
										h > 0
											? ((p.current = Date.now()),
											  s.current && window.clearTimeout(s.current),
											  (s.current = window.setTimeout(() => {
													i(!0), C && o.current && l && l.unobserve(o.current);
											  }, h)))
											: (i(!0), C && o.current && l && l.unobserve(o.current));
									},
									n = () => {
										s.current && window.clearTimeout(s.current), (s.current = null), (p.current = null), i(!1);
									};
								return (
									(l = new IntersectionObserver(
										([r]) => {
											r.isIntersecting
												? o.current && O(o.current)
													? (A(), B())
													: (n(),
													  v ||
															(v = window.setInterval(() => {
																if (!o.current) {
																	A();
																	return;
																}
																O(o.current) && (A(), B());
															}, T)))
												: (A(), n());
										},
										{ rootMargin: M, threshold: P }
									)),
									o.current && l.observe(o.current),
									() => {
										i(!1), A(), s.current && window.clearTimeout(s.current), l && o.current && l.unobserve(o.current);
									}
								);
							}, [o, D]),
							{ inViewport: E, updateRef: f }
						);
					};
				function O(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(W, d, e) {
				'use strict';
				e.d(d, { N: () => O, W: () => o });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('./components/src/utilities/createImpressionObserver.ts'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = 'sstracking';
				function o(y) {
					const M = y;
					return (P) => {
						const { controller: h, result: E, banner: i, type: s, content: p, ...D } = P;
						if (P.trackingRef) return (0, t.Y)(M, { ...P });
						!h && (!s || !p) && console.warn('Warning: No controller provided to withTracking', P),
							!E && !i && (!s || !p) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: c, inViewport: f, updateRef: l } = (0, T.Q)(),
							v = (E || i || (s && p?.[s]?.[0]))?.responseId,
							A = (0, _.li)(v),
							B = (0, _.li)(!1);
						A.current !== v && (B.current = !0),
							(0, _.vJ)(() => {
								A.current !== v && ((A.current = v), l(c.current));
							}, [v, l]),
							(0, _.vJ)(() => {
								B.current && !f && (B.current = !1);
							}, [f, v]);
						const n = s && p && !E && ['search', 'autocomplete'].includes(h?.type || '');
						f && !B.current && (n ? h?.track.banner.impression(p[s][0]) : E?.bundleSeed || h?.track.product.impression(E || i));
						const r = (0, _.hb)(
							(u) => {
								n ? h?.track.banner.click(u, p[s][0]) : h?.track.product.click(u, E || i);
							},
							[h, E, i, s, p]
						);
						(0, _.vJ)(() => {
							const u = c.current;
							if (u)
								return (
									u.setAttribute(O, 'true'),
									u.addEventListener('click', r, !0),
									() => {
										u.removeEventListener('click', r, !0);
									}
								);
						}, [r]);
						const m = {
							...D,
							controller: h,
							result: E,
							banner: i,
							type: s,
							content: p,
							trackingRef: (0, _.hb)(
								(u) => {
									l(u);
								},
								[l]
							),
						};
						return (0, t.Y)(M, { ...m });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(W, d, e) {
				'use strict';
				e.d(d, { F: () => t });
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
			'./components/src/utilities/createImpressionObserver.ts'(W, d, e) {
				'use strict';
				e.d(d, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const _ = 0.7,
					O = 1e3;
				function o(y) {
					const M = (0, t.li)(null),
						{ inViewport: C, updateRef: P } = (0, T.v)(M, { ...y, fireOnce: !0, threshold: _, minVisibleTime: O });
					return { ref: M, inViewport: C, updateRef: P };
				}
			},
			'./components/src/utilities/snapify.ts'(W, d, e) {
				'use strict';
				e.d(d, { p: () => l });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					i = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					s = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const c = {},
					f = { globals: { siteId: 'atkzs2' } };
				class l {
					static recommendation(r) {
						const m = r.id;
						if (c[m]) return c[m];
						const u = (c[m] = A({ client: f, controller: r }));
						return (
							u.on('afterStore', async ({ controller: g }, S) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await S();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(r) {
						const m = r.id;
						if (c[m]) return c[m];
						const u = (c[m] = B({ client: f, controller: r }));
						return (
							u.on('afterStore', async ({ controller: g }, S) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await S();
							}),
							u.init(),
							u
						);
					}
					static search(r) {
						const m = r.id;
						if (c[m]) return c[m];
						const u = (c[m] = v({ client: f, controller: r }));
						return (
							u.on('afterStore', async ({ controller: g }, S) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await S();
							}),
							u.init(),
							u
						);
					}
				}
				function v(n) {
					const r = new P.V(new E.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), h.X);
					return new T.Tp(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new M.U(n.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new i.E(),
						profiler: new s.U(),
						logger: new p.V(),
						tracker: new D.J(n.client.globals),
					});
				}
				function A(n) {
					const r = new P.V(new E.E(), h.X).detach(!0);
					return new O.c(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new C.t(n.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new i.E(),
						profiler: new s.U(),
						logger: new p.V(),
						tracker: new D.J(n.client.globals),
					});
				}
				function B(n) {
					const r = new P.V(new E.E(), h.X).detach();
					return new _.Z(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new y.Y(n.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new i.E(),
						profiler: new s.U(),
						logger: new p.V(),
						tracker: new D.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(W, d, e) {
				'use strict';
				e.d(d, { Z: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					O = (o) => {
						const y = (0, T.li)(null);
						return (
							(0, T.vJ)(() => {
								y.current && o.className?.includes('lang-') && !o.className?.includes(_) && window?.Prism?.highlightElement(y.current);
							}, [o.className, o.children, y]),
							(0, t.Y)('code', { ...o, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(W) {
				function d(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (W.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Autocomplete-Autocomplete-stories.739fb9c9.iframe.bundle.js.map
