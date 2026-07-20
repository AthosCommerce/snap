(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2134],
		{
			'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx'(v, i, e) {
				'use strict';
				e.r(i),
					e.d(i, {
						CorrectedResults: () => x,
						Default: () => n,
						DidYouMeanResults: () => d,
						NoResults: () => y,
						__namedExportsOrder: () => _,
						default: () => R,
					});
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/utilities/storybook.tsx'),
					f = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const t =
					'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `query` prop specifies a reference to the SearchQueryStore, the `pagination` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```tsx\n<SearchHeader query={SearchQueryStore} pagination={SearchPaginationStore} merchandising={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```tsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```tsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\nconst getCorrected = (controller) => {\n	const { pagination, search } = controller.store;\n	return `<div class="ss__search-header__corrected">No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\nconst getDym = (controller) => {\n	const { search } = controller.store;\n	return `<div class="ss__search-header__dym">Sorry, but did you mean "<em><a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a></em>"</div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n### expandedSearchText\nThe `expandedSearchText` prop specifies the text to show when the search matchType equals \'expanded\'.\n```tsx\n<SearchHeader controller={controller} expandedSearchText={"We couldn\'t find an exact match for that, but heres something similar:"} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop hides the title text.\n\n```tsx\n<SearchHeader controller={controller} hideTitleText={true} />\n```\n\n### hideSubtitleText\nThe `hideSubtitleText` prop hides the subtitle text.\n\n```tsx\n<SearchHeader controller={controller} hideSubtitleText={true} />\n```\n\n### hideCorrectedQueryText\nThe `hideCorrectedQueryText` prop hides the corrected query text.\n\n```tsx\n<SearchHeader controller={controller} hideCorrectedQueryText={true} />\n```\n\n### hideNoResultsText\nThe `hideNoResultsText` prop hides the no results text.\n\n```tsx\n<SearchHeader controller={controller} hideNoResultsText={true} />\n```\n\n### hideDidYouMeanText\nThe `hideDidYouMeanText` prop hides did you mean text.\n\n```tsx\n<SearchHeader controller={controller} hideDidYouMeanText={true} />\n```\n\n### hideExpandedSearchText\nThe `hideExpandedSearchText` prop hides the expanded search text.\n\n```tsx\n<SearchHeader controller={controller} hideExpandedSearchText={true} />\n```';
				var a = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
				const R = {
						title: 'Atoms/SearchHeader',
						component: a.w,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(h.oz, { options: { overrides: { code: p.Z } }, children: t }), (0, r.Y)(h.uY, { story: h.h1 })],
									}),
								actions: { disabled: !0 },
							},
						},
						decorators: [(u) => (0, r.Y)(u, {})],
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
							...f.F,
						},
					},
					S = o.p.search({ id: 'SearchHeader', globals: { siteId: 'atkzs2', search: { query: { string: 'dress' } } } }),
					n = (u, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...u, controller: T });
				n.loaders = [async () => (await S.search(), { controller: S })];
				const E = o.p.search({ id: 'SearchHeader-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } } }),
					y = (u, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...u, controller: T });
				y.loaders = [async () => (await E.search(), { controller: E })];
				const M = o.p.search({ id: 'SearchHeader-correctedResults', globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } } }),
					x = (u, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...u, controller: T });
				x.loaders = [async () => (await M.search(), { controller: M })];
				const b = o.p.search({ id: 'SearchHeader-dymResults', globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } } }),
					d = (u, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...u, controller: T });
				(d.loaders = [
					async () => (
						b.on('afterSearch', ({ response: u }) => {
							(u.search.search.query = 'redd dress'), (u.search.search.didYouMean = 'red dress');
						}),
						await b.search(),
						{ controller: b }
					),
				]),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
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
								...n.parameters?.docs?.source,
							},
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
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
								...y.parameters?.docs?.source,
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
				const _ = ['Default', 'NoResults', 'CorrectedResults', 'DidYouMeanResults'];
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(v, i, e) {
				'use strict';
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					S = e('../../node_modules/classnames/index.js'),
					n = e.n(S),
					E = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(M);
				const b = () => (0, h.AH)({}),
					d = (0, p.PA)((_) => {
						const u = (0, o.u)(),
							T = (0, t.LU)(),
							C = _.controller?.store.merchandising.landingPage || _.merchandising?.landingPage,
							D = _.controller?.store.pagination || _.pagination,
							s = _.controller?.store.search || _.query,
							l = {
								titleText: `Search result${D?.totalResults == 1 ? '' : 's'} ${
									s?.query ? `for "<span class="ss__search-header__results-query">${s.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${s?.originalQuery?.string}</em>", showing results for "<em>${s?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${s?.didYouMean?.url.href}>${s?.didYouMean?.string}</a>?`,
								noResultsText: `${
									s?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${s.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${s?.query?.string}</span>", but here's something similar:`,
								treePath: T,
							},
							c = (0, a.v6)('searchHeader', u, l, _),
							{
								className: g,
								internalClassName: m,
								titleText: P,
								subtitleText: L,
								correctedQueryText: H,
								noResultsText: Y,
								didYouMeanText: I,
								expandedSearchText: U,
								hideTitleText: N,
								hideSubtitleText: K,
								hideCorrectedQueryText: w,
								hideNoResultsText: W,
								hideExpandedSearchText: j,
								hideDidYouMeanText: B,
							} = c,
							{ overrideElement: Q, shouldRenderDefault: V } = (0, y._)('searchHeader', c);
						if (!V) return Q;
						const $ = (0, R.Z)(c, b),
							F = {
								titleText: { value: P },
								subtitleText: { value: L },
								correctedQueryText: { value: H },
								noResultsText: { value: Y },
								didYouMeanText: { value: I },
								expandedSearchText: { value: U },
							},
							A = x()(F, c.lang || {}),
							O = (0, E.u)(A, { pagination: D, search: s });
						return (0, r.Y)(f._, {
							children: (0, r.Y)('header', {
								...$,
								className: n()('ss__search-header', g, m),
								children: C
									? (0, r.Y)('h3', { className: n()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: C.title })
									: (0, r.FD)(r.FK, {
											children: [
												D?.totalResults
													? (0, r.FD)(r.FK, {
															children: [
																!j && s?.matchType && s.matchType == 'expanded'
																	? (0, r.Y)('h3', {
																			className: n()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...O.expandedSearchText?.all,
																	  })
																	: (0, r.Y)(r.FK, {}),
																!N &&
																	(s?.matchType !== 'expanded' || j) &&
																	(0, r.Y)('h3', {
																		className: n()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.titleText?.all,
																	}),
																s?.originalQuery &&
																	!w &&
																	(0, r.Y)('h5', {
																		className: n()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.correctedQueryText?.all,
																	}),
															],
													  })
													: D?.totalResults === 0 &&
													  (0, r.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!W &&
																	(0, r.Y)('h3', {
																		className: n()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.noResultsText?.all,
																	}),
																s?.didYouMean &&
																	!B &&
																	(0, r.Y)('h5', {
																		className: n()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...O.didYouMeanText?.all,
																	}),
															],
													  }),
												(L || A.subtitleText.value) &&
													!K &&
													(0, r.Y)('h5', {
														className: n()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...O.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
				e.d(i, ['w', 0, d]);
			},
			'./components/src/hooks/useLang.tsx'(v, i, e) {
				'use strict';
				const r = (h, p) => {
					const f = {};
					return (
						Object.keys(h).forEach((o) => {
							const t = h && h[o],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(p) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](p))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](p))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(p))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(p)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(p))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(f[o] = a);
						}),
						f
					);
				};
				e.d(i, ['u', 0, r]);
			},
			'./components/src/utilities/componentArgs.ts'(v, i, e) {
				'use strict';
				const r = {
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
				e.d(i, ['F', 0, r]);
			},
			'./components/src/utilities/snapify.ts'(v, i, e) {
				'use strict';
				e.d(i, { p: () => u });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					R = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					_ = { globals: { siteId: 'atkzs2' } };
				class u {
					static recommendation(l) {
						const c = l.id;
						if (d[c]) return d[c];
						const g = (d[c] = C({ client: _, controller: l }));
						return (
							g.on('afterStore', async ({ controller: m }, P) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await P();
							}),
							g.init(),
							g
						);
					}
					static autocomplete(l) {
						const c = l.id;
						if (d[c]) return d[c];
						const g = (d[c] = D({ client: _, controller: l }));
						return (
							g.on('afterStore', async ({ controller: m }, P) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await P();
							}),
							g.init(),
							g
						);
					}
					static search(l) {
						const c = l.id;
						if (d[c]) return d[c];
						const g = (d[c] = T({ client: _, controller: l }));
						return (
							g.on('afterStore', async ({ controller: m }, P) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await P();
							}),
							g.init(),
							g
						);
					}
				}
				function T(s) {
					const l = new S.V(new E.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), n.X);
					return new h.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new a.U(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function C(s) {
					const l = new S.V(new E.E(), n.X).detach(!0);
					return new f.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new R.t(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function D(s) {
					const l = new S.V(new E.E(), n.X).detach();
					return new p.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new y.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new b.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, i, e) {
				'use strict';
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'prism-block',
					f = (o) => {
						const t = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(p) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, r.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, f]);
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function i(e) {
					const r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (v.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-SearchHeader-SearchHeader-stories.db393b4c.iframe.bundle.js.map
