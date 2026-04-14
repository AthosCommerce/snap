(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2134],
		{
			'./components/src/components/Atoms/SearchHeader/SearchHeader.stories.tsx'(M, d, e) {
				'use strict';
				e.r(d),
					e.d(d, {
						CorrectedResults: () => x,
						Default: () => g,
						DidYouMeanResults: () => u,
						NoResults: () => y,
						__namedExportsOrder: () => v,
						default: () => O,
					});
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/utilities/storybook.tsx'),
					f = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const t =
					'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `query` prop specifies a reference to the SearchQueryStore, the `pagination` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```jsx\n<SearchHeader query={SearchQueryStore} pagination={SearchPaginationStore} merchandising={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```jsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\nconst getCorrected = (controller) => {\n	const { pagination, search } = controller.store;\n	return `<div class="ss__search-header__corrected">No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```jsx\nconst getDym = (controller) => {\n	const { search } = controller.store;\n	return `<div class="ss__search-header__dym">Sorry, but did you mean "<em><a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a></em>"</div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n### expandedSearchText\nThe `expandedSearchText` prop specifies the text to show when the search matchType equals \'expanded\'.\n```jsx\n<SearchHeader controller={controller} expandedSearchText={"We couldn\'t find an exact match for that, but heres something similar:"} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop hides the title text.\n\n```jsx\n<SearchHeader controller={controller} hideTitleText={true} />\n```\n\n### hideSubtitleText\nThe `hideSubtitleText` prop hides the subtitle text.\n\n```jsx\n<SearchHeader controller={controller} hideSubtitleText={true} />\n```\n\n### hideCorrectedQueryText\nThe `hideCorrectedQueryText` prop hides the corrected query text.\n\n```jsx\n<SearchHeader controller={controller} hideCorrectedQueryText={true} />\n```\n\n### hideNoResultsText\nThe `hideNoResultsText` prop hides the no results text.\n\n```jsx\n<SearchHeader controller={controller} hideNoResultsText={true} />\n```\n\n### hideDidYouMeanText\nThe `hideDidYouMeanText` prop hides did you mean text.\n\n```jsx\n<SearchHeader controller={controller} hideDidYouMeanText={true} />\n```\n\n### hideExpandedSearchText\nThe `hideExpandedSearchText` prop hides the expanded search text.\n\n```jsx\n<SearchHeader controller={controller} hideExpandedSearchText={true} />\n```';
				var a = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
				const O = {
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
						decorators: [(n) => (0, r.Y)(n, {})],
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
					g = (n, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...n, controller: T });
				g.loaders = [async () => (await S.search(), { controller: S })];
				const m = o.p.search({ id: 'SearchHeader-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } } }),
					y = (n, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...n, controller: T });
				y.loaders = [async () => (await m.search(), { controller: m })];
				const E = o.p.search({ id: 'SearchHeader-correctedResults', globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } } }),
					x = (n, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...n, controller: T });
				x.loaders = [async () => (await E.search(), { controller: E })];
				const b = o.p.search({ id: 'SearchHeader-dymResults', globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } } }),
					u = (n, { loaded: { controller: T } }) => (0, r.Y)(a.w, { ...n, controller: T });
				(u.loaders = [
					async () => (
						b.on('afterSearch', ({ response: n }) => {
							(n.search.search.query = 'redd dress'), (n.search.search.didYouMean = 'red dress');
						}),
						await b.search(),
						{ controller: b }
					),
				]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
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
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
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
								...u.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default', 'NoResults', 'CorrectedResults', 'DidYouMeanResults'];
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(M, d, e) {
				'use strict';
				e.d(d, { w: () => v });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/snap.tsx'),
					a = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/classnames/index.js'),
					m = e.n(g),
					y = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useComponent.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(x);
				const u = () => (0, h.AH)({}),
					v = (0, p.PA)((n) => {
						const T = (0, o.u)(),
							R = (0, t.uk)(),
							C = (0, a.LU)(),
							l = n.controller?.store.merchandising.landingPage || n.merchandising?.landingPage,
							c = n.controller?.store.pagination || n.pagination,
							s = n.controller?.store.search || n.query,
							_ = {
								titleText: `Search result${c?.totalResults == 1 ? '' : 's'} ${
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
								treePath: C,
							},
							i = (0, O.v6)('searchHeader', T, _, n),
							{
								className: P,
								internalClassName: I,
								titleText: U,
								subtitleText: j,
								correctedQueryText: K,
								noResultsText: N,
								didYouMeanText: W,
								expandedSearchText: w,
								hideTitleText: B,
								hideSubtitleText: Q,
								hideCorrectedQueryText: V,
								hideNoResultsText: $,
								hideExpandedSearchText: L,
								hideDidYouMeanText: F,
								customComponent: A,
							} = i;
						if (A) {
							const Y = (0, E.x)(R?.templates?.library.import.component.searchHeader || {}, A);
							if (Y) return (0, r.Y)(Y, { ...i });
						}
						const z = (0, S.Z)(i, u),
							J = {
								titleText: { value: U },
								subtitleText: { value: j },
								correctedQueryText: { value: K },
								noResultsText: { value: N },
								didYouMeanText: { value: W },
								expandedSearchText: { value: w },
							},
							H = b()(J, i.lang || {}),
							D = (0, y.u)(H, { pagination: c, search: s });
						return (0, r.Y)(f._, {
							children: (0, r.Y)('header', {
								...z,
								className: m()('ss__search-header', P, I),
								children: l
									? (0, r.Y)('h3', { className: m()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: l.title })
									: (0, r.FD)(r.FK, {
											children: [
												c?.totalResults
													? (0, r.FD)(r.FK, {
															children: [
																!L && s?.matchType && s.matchType == 'expanded'
																	? (0, r.Y)('h3', {
																			className: m()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...D.expandedSearchText?.all,
																	  })
																	: (0, r.Y)(r.FK, {}),
																!B &&
																	(s?.matchType !== 'expanded' || L) &&
																	(0, r.Y)('h3', {
																		className: m()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...D.titleText?.all,
																	}),
																s?.originalQuery &&
																	!V &&
																	(0, r.Y)('h5', {
																		className: m()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...D.correctedQueryText?.all,
																	}),
															],
													  })
													: c?.totalResults === 0 &&
													  (0, r.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!$ &&
																	(0, r.Y)('h3', {
																		className: m()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...D.noResultsText?.all,
																	}),
																s?.didYouMean &&
																	!F &&
																	(0, r.Y)('h5', {
																		className: m()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...D.didYouMeanText?.all,
																	}),
															],
													  }),
												(j || H.subtitleText.value) &&
													!Q &&
													(0, r.Y)('h5', {
														className: m()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...D.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
			},
			'./components/src/hooks/useLang.tsx'(M, d, e) {
				'use strict';
				e.d(d, { u: () => r });
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
			},
			'./components/src/utilities/componentArgs.ts'(M, d, e) {
				'use strict';
				e.d(d, { F: () => r });
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
			},
			'./components/src/utilities/snapify.ts'(M, d, e) {
				'use strict';
				e.d(d, { p: () => n });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					m = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					v = { globals: { siteId: 'atkzs2' } };
				class n {
					static recommendation(c) {
						const s = c.id;
						if (u[s]) return u[s];
						const _ = (u[s] = R({ client: v, controller: c }));
						return (
							_.on('afterStore', async ({ controller: i }, P) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await P();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(c) {
						const s = c.id;
						if (u[s]) return u[s];
						const _ = (u[s] = C({ client: v, controller: c }));
						return (
							_.on('afterStore', async ({ controller: i }, P) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await P();
							}),
							_.init(),
							_
						);
					}
					static search(c) {
						const s = c.id;
						if (u[s]) return u[s];
						const _ = (u[s] = T({ client: v, controller: c }));
						return (
							_.on('afterStore', async ({ controller: i }, P) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await P();
							}),
							_.init(),
							_
						);
					}
				}
				function T(l) {
					const c = new S.V(new m.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), g.X);
					return new h.Tp(l.controller, {
						client: new o.K(l.client.globals, l.client.config),
						store: new a.U(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new y.E(),
						profiler: new E.U(),
						logger: new x.V(),
						tracker: new b.J(l.client.globals),
					});
				}
				function R(l) {
					const c = new S.V(new m.E(), g.X).detach(!0);
					return new f.c(l.controller, {
						client: new o.K(l.client.globals, l.client.config),
						store: new O.t(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new y.E(),
						profiler: new E.U(),
						logger: new x.V(),
						tracker: new b.J(l.client.globals),
					});
				}
				function C(l) {
					const c = new S.V(new m.E(), g.X).detach();
					return new p.Z(l.controller, {
						client: new o.K(l.client.globals, l.client.config),
						store: new t.Y(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new y.E(),
						profiler: new E.U(),
						logger: new x.V(),
						tracker: new b.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, d, e) {
				'use strict';
				e.d(d, { Z: () => f });
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
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function d(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (M.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-SearchHeader-SearchHeader-stories.a4233cd4.iframe.bundle.js.map
