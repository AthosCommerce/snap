(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2134],
		{
			'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx'(P, i, e) {
				'use strict';
				e.r(i),
					e.d(i, {
						CorrectedResults: () => T,
						Default: () => o,
						DidYouMeanResults: () => d,
						NoResults: () => x,
						__namedExportsOrder: () => g,
						default: () => a,
					});
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					S = e('./components/src/utilities/storybook.tsx'),
					b = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const _ =
					'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `query` prop specifies a reference to the SearchQueryStore, the `pagination` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```tsx\n<SearchHeader query={SearchQueryStore} pagination={SearchPaginationStore} merchandising={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```tsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```tsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\nconst getCorrected = (controller) => {\n	const { pagination, search } = controller.store;\n	return `<div class="ss__search-header__corrected">No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\nconst getDym = (controller) => {\n	const { search } = controller.store;\n	return `<div class="ss__search-header__dym">Sorry, but did you mean "<em><a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a></em>"</div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n### expandedSearchText\nThe `expandedSearchText` prop specifies the text to show when the search matchType equals \'expanded\'.\n```tsx\n<SearchHeader controller={controller} expandedSearchText={"We couldn\'t find an exact match for that, but heres something similar:"} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop hides the title text.\n\n```tsx\n<SearchHeader controller={controller} hideTitleText={true} />\n```\n\n### hideSubtitleText\nThe `hideSubtitleText` prop hides the subtitle text.\n\n```tsx\n<SearchHeader controller={controller} hideSubtitleText={true} />\n```\n\n### hideCorrectedQueryText\nThe `hideCorrectedQueryText` prop hides the corrected query text.\n\n```tsx\n<SearchHeader controller={controller} hideCorrectedQueryText={true} />\n```\n\n### hideNoResultsText\nThe `hideNoResultsText` prop hides the no results text.\n\n```tsx\n<SearchHeader controller={controller} hideNoResultsText={true} />\n```\n\n### hideDidYouMeanText\nThe `hideDidYouMeanText` prop hides did you mean text.\n\n```tsx\n<SearchHeader controller={controller} hideDidYouMeanText={true} />\n```\n\n### hideExpandedSearchText\nThe `hideExpandedSearchText` prop hides the expanded search text.\n\n```tsx\n<SearchHeader controller={controller} hideExpandedSearchText={true} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the SearchHeader component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `titleText` | The main search heading text | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `correctedQueryText` | Text shown when query was auto-corrected | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `noResultsText` | Text shown when no results are found | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `didYouMeanText` | "Did you mean" suggestion text | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `expandedSearchText` | Text shown when search was expanded | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `subtitleText` | Optional subtitle text | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n\n### Example\n\n```tsx\n<SearchHeader\n	controller={controller}\n	lang={{\n		titleText: {\n			value: (data) => `Results for "${data.search?.query?.string}"`,\n		},\n		noResultsText: {\n			value: (data) => `No results found for "${data.search?.query?.string}"`,\n		},\n	}}\n/>\n```\n';
				var h = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
				const a = {
						title: 'Atoms/SearchHeader',
						component: h.w,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(p.oz, { options: { overrides: { code: S.Z } }, children: _ }), (0, t.Y)(p.uY, { story: p.h1 })],
									}),
								actions: { disabled: !0 },
							},
						},
						decorators: [(u) => (0, t.Y)(u, {})],
						argTypes: {
							controller: {
								description: 'Search Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							query: {
								description: 'Search Query Store reference',
								type: { required: !1 },
								table: { type: { summary: 'Search Query Store object' } },
								control: { type: 'none' },
							},
							pagination: {
								description: 'Search Pagination Store reference',
								type: { required: !1 },
								table: { type: { summary: 'Search Pagination Store object' } },
								control: { type: 'none' },
							},
							merchandising: {
								description: 'Search Merchandising Store reference',
								type: { required: !1 },
								table: { type: { summary: 'Search Merchandising Store object' } },
								control: { type: 'none' },
							},
							titleText: {
								description: 'Search Title Text',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'Search results' } },
								control: { type: 'text' },
							},
							subtitleText: {
								description: 'Search Subtitle Text',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							correctedQueryText: {
								description: 'Original query redirect text',
								table: {
									type: { summary: 'string' },
									category: 'Templates Legal',
									defaultValue: {
										summary:
											'No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.',
									},
								},
								control: { type: 'text' },
							},
							noResultsText: {
								description: 'no results found text',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '<span>No results found.</span>' } },
								control: { type: 'text' },
							},
							didYouMeanText: {
								description: '"Did you mean" text',
								table: {
									type: { summary: 'string' },
									category: 'Templates Legal',
									defaultValue: { summary: 'Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?' },
								},
								control: { type: 'text' },
							},
							expandedSearchText: {
								description: 'Expanded search text',
								table: {
									type: { summary: 'string' },
									category: 'Templates Legal',
									defaultValue: {
										summary: `We couldn't find an exact match for "<span className="ss__search-header__results-query">\${search?.query?.string}</span>", but here's something similar:`,
									},
								},
								control: { type: 'text' },
							},
							hideTitleText: {
								description: 'Hide title title',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSubtitleText: {
								description: 'Hide subtitle',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCorrectedQueryText: {
								description: 'Hide CorrectedQuery Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideExpandedSearchText: {
								description: 'Hide Expanded Search Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideNoResultsText: {
								description: 'Hide No Results Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideDidYouMeanText: {
								description: 'Hide Did You Mean Text',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...b.F,
						},
					},
					s = n.p.search({ id: 'SearchHeader', globals: { siteId: 'atkzs2', search: { query: { string: 'dress' } } } }),
					o = (u, { loaded: { controller: f } }) => (0, t.Y)(h.w, { ...u, controller: f });
				o.loaders = [async () => (await s.search(), { controller: s })];
				const M = n.p.search({ id: 'SearchHeader-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } } }),
					x = (u, { loaded: { controller: f } }) => (0, t.Y)(h.w, { ...u, controller: f });
				x.loaders = [async () => (await M.search(), { controller: M })];
				const v = n.p.search({ id: 'SearchHeader-correctedResults', globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } } }),
					T = (u, { loaded: { controller: f } }) => (0, t.Y)(h.w, { ...u, controller: f });
				T.loaders = [async () => (await v.search(), { controller: v })];
				const E = n.p.search({ id: 'SearchHeader-dymResults', globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } } }),
					d = (u, { loaded: { controller: f } }) => (0, t.Y)(h.w, { ...u, controller: f });
				(d.loaders = [
					async () => (
						E.on('afterSearch', ({ response: u }) => {
							(u.search.search.query = 'redd dress'), (u.search.search.didYouMean = 'red dress');
						}),
						await E.search(),
						{ controller: E }
					),
				]),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...o.parameters?.docs?.source,
							},
						},
					}),
					(x.parameters = {
						...x.parameters,
						docs: {
							...x.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...x.parameters?.docs?.source,
							},
						},
					}),
					(T.parameters = {
						...T.parameters,
						docs: {
							...T.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...T.parameters?.docs?.source,
							},
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: SearchHeaderProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHeader {...args} controller={controller} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default', 'NoResults', 'CorrectedResults', 'DidYouMeanResults'];
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(P, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					S = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					s = e('../../node_modules/classnames/index.js'),
					o = e.n(s),
					M = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(v);
				const E = () => (0, p.AH)({}),
					d = (0, S.PA)((g) => {
						const u = (0, n.u)(),
							f = (0, _.LU)(),
							C = g.controller?.store.merchandising.landingPage || g.merchandising?.landingPage,
							O = g.controller?.store.pagination || g.pagination,
							r = g.controller?.store.search || g.query,
							l = {
								titleText: `Search result${O?.totalResults == 1 ? '' : 's'} ${
									r?.query ? `for "<span class="ss__search-header__results-query">${r.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${r?.originalQuery?.string}</em>", showing results for "<em>${r?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${r?.didYouMean?.url.href}>${r?.didYouMean?.string}</a>?`,
								noResultsText: `${
									r?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${r.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${r?.query?.string}</span>", but here's something similar:`,
								treePath: f,
							},
							c = (0, h.v6)('searchHeader', u, l, g),
							{
								className: y,
								internalClassName: m,
								titleText: D,
								subtitleText: L,
								correctedQueryText: j,
								noResultsText: Y,
								didYouMeanText: w,
								expandedSearchText: I,
								hideTitleText: U,
								hideSubtitleText: N,
								hideCorrectedQueryText: K,
								hideNoResultsText: W,
								hideExpandedSearchText: H,
								hideDidYouMeanText: B,
							} = c,
							{ overrideElement: Q, shouldRenderDefault: $ } = (0, x._)('searchHeader', c);
						if (!$) return Q;
						const V = (0, a.Z)(c, E),
							F = {
								titleText: { value: D },
								subtitleText: { value: L },
								correctedQueryText: { value: j },
								noResultsText: { value: Y },
								didYouMeanText: { value: w },
								expandedSearchText: { value: I },
							},
							A = T()(F, c.lang || {}),
							R = (0, M.u)(A, { pagination: O, search: r }, { activeBreakpoint: u?.activeBreakpoint });
						return (0, t.Y)(b._, {
							children: (0, t.Y)('header', {
								...V,
								className: o()('ss__search-header', y, m),
								children: C
									? (0, t.Y)('h3', { className: o()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: C.title })
									: (0, t.FD)(t.FK, {
											children: [
												O?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!H && r?.matchType && r.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: o()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...R.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!U &&
																	(r?.matchType !== 'expanded' || H) &&
																	(0, t.Y)('h3', {
																		className: o()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.titleText?.all,
																	}),
																r?.originalQuery &&
																	!K &&
																	(0, t.Y)('h5', {
																		className: o()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.correctedQueryText?.all,
																	}),
															],
													  })
													: O?.totalResults === 0 &&
													  (0, t.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!W &&
																	(0, t.Y)('h3', {
																		className: o()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.noResultsText?.all,
																	}),
																r?.didYouMean &&
																	!B &&
																	(0, t.Y)('h5', {
																		className: o()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...R.didYouMeanText?.all,
																	}),
															],
													  }),
												(L || A.subtitleText.value) &&
													!N &&
													(0, t.Y)('h5', {
														className: o()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...R.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
				e.d(i, ['w', 0, d]);
			},
			'./components/src/hooks/useLang.tsx'(P, i, e) {
				'use strict';
				const t = (p, S, b) => {
					const n = b ? { ...S, ...b } : S,
						_ = {};
					return (
						Object.keys(p).forEach((h) => {
							const a = p && p[h],
								s = {};
							a &&
								(a?.value &&
									(typeof a.value == 'function'
										? (s.value = { 'ss-lang': h, dangerouslySetInnerHTML: { __html: a.value(n) } })
										: (s.value = { 'ss-lang': h, dangerouslySetInnerHTML: { __html: a.value } })),
								a?.attributes &&
									Object.keys(a?.attributes).length &&
									((s.attributes = { 'ss-lang': h }),
									a?.attributes?.['aria-label'] &&
										(typeof a.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = a.attributes['aria-label'](n))
											: (s.attributes['aria-label'] = a.attributes['aria-label'])),
									a?.attributes?.['aria-valuetext'] &&
										(typeof a.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = a.attributes['aria-valuetext'](n))
											: (s.attributes['aria-valuetext'] = a.attributes['aria-valuetext'])),
									a?.attributes?.title &&
										(typeof a.attributes?.title == 'function'
											? (s.attributes.title = a.attributes.title(n))
											: (s.attributes.title = a.attributes.title)),
									a?.attributes?.alt &&
										(typeof a.attributes?.alt == 'function' ? (s.attributes.alt = a.attributes.alt(n)) : (s.attributes.alt = a.attributes.alt)),
									a?.attributes?.placeholder &&
										(typeof a.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = a.attributes.placeholder(n))
											: (s.attributes.placeholder = a.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': h })),
								(_[h] = s);
						}),
						_
					);
				};
				e.d(i, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(P, i, e) {
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
				e.d(i, ['F', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(P, i, e) {
				'use strict';
				e.d(i, { p: () => u });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					S = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					_ = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					o = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					g = { globals: { siteId: 'atkzs2' } };
				class u {
					static recommendation(l) {
						const c = l.id;
						if (d[c]) return d[c];
						const y = (d[c] = C({ client: g, controller: l }));
						return (
							y.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							y.init(),
							y
						);
					}
					static autocomplete(l) {
						const c = l.id;
						if (d[c]) return d[c];
						const y = (d[c] = O({ client: g, controller: l }));
						return (
							y.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							y.init(),
							y
						);
					}
					static search(l) {
						const c = l.id;
						if (d[c]) return d[c];
						const y = (d[c] = f({ client: g, controller: l }));
						return (
							y.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							y.init(),
							y
						);
					}
				}
				function f(r) {
					const l = new s.V(new M.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), o.X);
					return new p.Tp(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new h.U(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new x.E(),
						profiler: new v.U(),
						logger: new T.V(),
						tracker: new E.J(r.client.globals),
					});
				}
				function C(r) {
					const l = new s.V(new M.E(), o.X).detach(!0);
					return new b.c(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new a.t(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new x.E(),
						profiler: new v.U(),
						logger: new T.V(),
						tracker: new E.J(r.client.globals),
					});
				}
				function O(r) {
					const l = new s.V(new M.E(), o.X).detach();
					return new S.Z(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new _.Y(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new x.E(),
						profiler: new v.U(),
						logger: new T.V(),
						tracker: new E.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const S = 'prism-block',
					b = (n) => {
						const _ = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								_.current && n.className?.includes('lang-') && !n.className?.includes(S) && window?.Prism?.highlightElement(_.current);
							}, [n.className, n.children, _]),
							(0, t.Y)('code', { ...n, ref: _, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, b]);
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function i(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (P.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-SearchHeader-SearchHeader-stories.c0e3b460.iframe.bundle.js.map
