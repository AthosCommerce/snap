'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6284],
		{
			'./src/Templates/Stores/library/languages/zh.ts'(a, e, t) {
				t.r(e);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: '\u5173\u95ED\u81EA\u52A8\u5B8C\u6210', attributes: { 'aria-label': '\u5173\u95ED\u81EA\u52A8\u5B8C\u6210' } },
						noResultsText: {
							value: (u) =>
								`<p>\u672A\u627E\u5230"${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}"\u7684\u7ED3\u679C\u3002</p><p>\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u641C\u7D22\u3002</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`\u67E5\u770B ${u?.controller?.store?.pagination.totalResults} \u6761${
									u?.controller?.store?.filters.length > 0 ? '\u5DF2\u7B5B\u9009' : ''
								}\u7ED3\u679C\uFF0C\u5173\u4E8E"${u?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: '\u5386\u53F2\u8BB0\u5F55' },
						term: { attributes: { 'aria-label': (u) => `\u7B2C ${u.index + 1} \u9879\uFF0C\u5171 ${u.numberOfTerms} \u9879\uFF0C${u.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: '\u5EFA\u8BAE' },
						term: { attributes: { 'aria-label': (u) => `\u7B2C ${u.index + 1} \u9879\uFF0C\u5171 ${u.numberOfTerms} \u9879\uFF0C${u.term.value}` } },
					},
					'terms.trending': {
						title: { value: '\u70ED\u95E8' },
						term: { attributes: { 'aria-label': (u) => `\u7B2C ${u.index + 1} \u9879\uFF0C\u5171 ${u.numberOfTerms} \u9879\uFF0C${u.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: '\u7B5B\u9009\u6761\u4EF6' },
						applyButtonText: { value: '\u5E94\u7528' },
						clearButtonText: { value: '\u6E05\u9664\u5168\u90E8' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: '\u641C\u7D22' } },
						closeSearchButton: { attributes: { 'aria-label': '\u5173\u95ED\u641C\u7D22' } },
						clearSearchButton: { attributes: { 'aria-label': '\u6E05\u9664\u641C\u7D22' } },
						submitSearchButton: { attributes: { 'aria-label': '\u63D0\u4EA4\u641C\u7D22' } },
					},
					recommendationBundle: {
						seedText: { value: '\u6B64\u4EA7\u54C1' },
						ctaButtonText: { value: '\u5168\u90E8\u52A0\u5165\u8D2D\u7269\u8F66' },
						ctaButtonSuccessText: { value: '\u5957\u88C5\u5DF2\u6DFB\u52A0\uFF01' },
						ctaSubtotalTitle: { value: (u) => `${u.cartStore.count} \u4EF6\u5546\u54C1\u7684\u5C0F\u8BA1` },
					},
					slideshow: {
						pauseButton: {
							value: (u) => (u.isPlaying ? '\u6682\u505C' : '\u64AD\u653E'),
							attributes: {
								'aria-label': (u) => (u.isPlaying ? '\u6682\u505C\u5E7B\u706F\u7247\u653E\u6620' : '\u7EE7\u7EED\u5E7B\u706F\u7247\u653E\u6620'),
							},
						},
						paginationButton: {
							attributes: { 'aria-label': (u) => `\u8F6C\u5230\u7B2C ${u.index + 1} \u7EC4\u5E7B\u706F\u7247\uFF0C\u5171 ${u.totalDots} \u7EC4` },
						},
						nextButton: {
							attributes: { 'aria-label': (u) => `\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247${u.isNextDisabled ? '\uFF08\u5DF2\u7981\u7528\uFF09' : ''}` },
						},
						prevButton: {
							attributes: { 'aria-label': (u) => `\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247${u.isPrevDisabled ? '\uFF08\u5DF2\u7981\u7528\uFF09' : ''}` },
						},
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler
										? `\u70B9\u51FB\u67E5\u770B ${u.imageAlt}`
										: `${u.imageAlt} \u7B2C ${u.index + 1} \u5F20\uFF0C\u5171 ${u.slidesLength} \u5F20`,
							},
						},
						srInstructions: {
							value: (u) =>
								`\u4F7F\u7528\u65B9\u5411\u952E\u5728\u5E7B\u706F\u7247\u4E4B\u95F4\u5BFC\u822A\u3002\u6309\u7A7A\u683C\u952E\u6682\u505C\u81EA\u52A8\u64AD\u653E\u3002\u6309 Home \u6216 End \u952E\u8DF3\u8F6C\u5230\u7B2C\u4E00\u7EC4\u6216\u6700\u540E\u4E00\u7EC4\u5E7B\u706F\u7247\u3002 ${
									u.touchDragging &&
									'\u5728\u89E6\u6478\u8BBE\u5907\u4E0A\uFF0C\u5411\u5DE6\u6216\u5411\u53F3\u6ED1\u52A8\u5373\u53EF\u5BFC\u822A\u3002'
								}`,
						},
					},
					sortBy: { label: { value: '\u6392\u5E8F\u65B9\u5F0F' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': '\u7ED3\u679C\u6807\u7B7E\u9875' } },
						tabButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.tab.label || u.tab.id}${typeof u.resultCount == 'number' ? `\uFF0C${u.resultCount} \u6761\u7ED3\u679C` : ''}`,
							},
						},
					},
					perPage: { label: { value: '\u6BCF\u9875\u663E\u793A' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.field} \u7B5B\u9009\u4E0B\u62C9\u83DC\u5355\uFF0C\u5F53\u524D${
										u?.selectedFacet?.field === u?.facet?.field ? '\u5DF2\u6536\u8D77' : '\u5DF2\u5C55\u5F00'
									}\uFF0C${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u4E2A\u9009\u9879' : ''}`,
							},
						},
					},
					filterSummary: { title: { value: '\u5F53\u524D\u7B5B\u9009\u6761\u4EF6' }, clearAllLabel: { value: '\u6E05\u9664\u5168\u90E8' } },
					facet: {
						showMoreText: { value: '\u663E\u793A\u66F4\u591A' },
						showLessText: { value: '\u663E\u793A\u8F83\u5C11' },
						clearAllText: { value: '\u6E05\u9664\u5168\u90E8' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.label} \u7B5B\u9009\u4E0B\u62C9\u83DC\u5355\uFF0C\u5F53\u524D${
										u?.facet?.collapsed ? '\u5DF2\u6536\u8D77' : '\u5DF2\u5C55\u5F00'
									}\uFF0C${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u4E2A\u9009\u9879' : ''}`,
							},
						},
						submitRangeButton: { value: '\u63D0\u4EA4' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`${u?.label} \u4E0B\u62C9\u83DC\u5355\uFF0C${u?.options?.length} \u4E2A\u9009\u9879${
										u?.selectedOptions?.length ? `\uFF0C\u5F53\u524D\u9009\u4E2D\u7684\u9009\u9879\u662F ${u?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u5DF2\u7981\u7528' : ''} ${
										u?.checkedState ? '\u5DF2\u9009\u4E2D' : '\u672A\u9009\u4E2D'
									}\u7684\u5355\u9009\u6309\u94AE`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': '\u8F6C\u5230\u4E0A\u4E00\u9875' } },
						next: { attributes: { 'aria-label': '\u8F6C\u5230\u4E0B\u4E00\u9875' } },
						first: { attributes: { 'aria-label': '\u8F6C\u5230\u7B2C\u4E00\u9875' } },
						last: { attributes: { 'aria-label': (u) => `\u8F6C\u5230\u6700\u540E\u4E00\u9875 ${u?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (u) => `\u8F6C\u5230\u7B2C ${u?.page?.number} \u9875` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `${u?.totalResults} \u4EF6\u4EA7\u54C1` } },
					result: {
						addToCartButtonText: {
							value: '\u5168\u90E8\u52A0\u5165\u8D2D\u7269\u8F66',
							attributes: { 'aria-label': '\u5168\u90E8\u52A0\u5165\u8D2D\u7269\u8F66' },
						},
						addToCartButtonSuccessText: { value: '\u5DF2\u6DFB\u52A0\uFF01' },
						quickviewButtonText: { value: '\u5FEB\u901F\u9884\u89C8', attributes: { 'aria-label': '\u5FEB\u901F\u9884\u89C8' } },
					},
					overlayResult: {
						addToCartButtonText: {
							value: '\u5168\u90E8\u52A0\u5165\u8D2D\u7269\u8F66',
							attributes: { 'aria-label': '\u5168\u90E8\u52A0\u5165\u8D2D\u7269\u8F66' },
						},
						addToCartButtonSuccessText: { value: '\u5DF2\u6DFB\u52A0\uFF01' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': '\u52A0\u8F7D\u66F4\u591A' } },
						progressText: {
							value: (u) => `\u60A8\u5DF2\u6D4F\u89C8 ${u?.pagination?.end} \u4EF6\uFF0C\u5171 ${u?.pagination?.totalResults} \u4EF6\u4EA7\u54C1`,
						},
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: '\u6536\u8D77' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) => `${u?.label ? `\u79FB\u9664\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6 ${u?.label} ${u?.value}` : u?.value || ''}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.label} \u6ED1\u5757\uFF0C\u5F53\u524D\u503C ${u?.value}\uFF0C${
										u?.facet?.range?.low ? `\u6700\u5C0F\u503C ${u?.facet?.range?.low}\uFF0C` : ''
									} ${u?.facet?.range?.high ? `\u6700\u5927\u503C ${u?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u79FB\u9664\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `\u6309 ${u?.facet?.label} - ${u?.value?.label} \u7B5B\u9009`
											: `\u6309 ${u?.value?.label} \u7B5B\u9009`
									}`,
							},
						},
					},
					facetListOptions: {
						listOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u79FB\u9664\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `\u6309 ${u?.facet?.label} - ${u?.value?.label} \u7B5B\u9009`
											: `\u6309 ${u?.value?.label} \u7B5B\u9009`
									}`,
							},
						},
					},
					facetHierarchyOptions: {
						hierarchyOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u79FB\u9664\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `\u6309 ${u?.facet?.label} - ${u?.value?.label} \u7B5B\u9009`
											: `\u6309 ${u?.value?.label} \u7B5B\u9009`
									}`,
							},
						},
					},
					facetGridOptions: {
						gridOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u79FB\u9664\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `\u6309 ${u?.facet?.label} - ${u?.value?.label} \u7B5B\u9009`
											: `\u6309 ${u?.value?.label} \u7B5B\u9009`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>\u8B66\u544A\uFF1A&nbsp;</b>' },
						infoText: { value: '<b>\u4FE1\u606F\uFF1A&nbsp;</b>' },
						errorText: { value: '<b>\u9519\u8BEF\uFF1A&nbsp;</b>' },
						reloadText: { value: '\u91CD\u65B0\u52A0\u8F7D' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u5DF2\u7981\u7528' : ''} ${
										u?.checkedState ? '\u5DF2\u9009\u4E2D' : '\u672A\u9009\u4E2D'
									}\u7684\u590D\u9009\u6846`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': '\u6570\u91CF' } },
						decrementButton: { attributes: { 'aria-label': '\u51CF\u5C11\u6570\u91CF' } },
						incrementButton: { attributes: { 'aria-label': '\u589E\u52A0\u6570\u91CF' } },
					},
					searchHeader: {
						titleText: {
							value: (u) => `\u663E\u793A ${u?.pagination?.totalResults} \u6761\u7ED3\u679C
                ${u?.search?.query ? `\uFF0C\u5173\u4E8E <span class="ss__search-header__results-query">"${u?.search?.query.string}"</span>` : ''}`,
							attributes: { 'aria-label': (u) => `\u4EA7\u54C1\u7F51\u683C\u4E2D\u5F53\u524D\u663E\u793A ${u?.pagination?.totalResults} \u9879` },
						},
						correctedQueryText: {
							value: (u) =>
								`\u672A\u627E\u5230 <em>"${u?.search?.originalQuery?.string}"</em> \u7684\u7ED3\u679C\uFF0C\u73B0\u6539\u4E3A\u663E\u793A <em>"${u?.search?.query?.string}"</em> \u7684\u7ED3\u679C\u3002`,
							attributes: {
								'aria-label': (u) =>
									`\u672A\u627E\u5230 ${u?.search?.originalQuery?.string} \u7684\u7ED3\u679C\uFF0C\u73B0\u6539\u4E3A\u663E\u793A ${u?.search?.query?.string} \u7684\u7ED3\u679C`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    \u672A\u627E\u5230 <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span> \u7684\u7ED3\u679C\u3002
                </span>`
										: '<span>\u672A\u627E\u5230\u7ED3\u679C\u3002</span>'
								}`,
							attributes: { 'aria-label': (u) => `\u672A\u627E\u5230 ${u?.search?.query?.string} \u7684\u7ED3\u679C` },
						},
						didYouMeanText: {
							value: (u) => `\u60A8\u662F\u6307 <a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a>\uFF1F`,
						},
						expandedSearchText: {
							value: (u) =>
								`\u6211\u4EEC\u672A\u80FD\u627E\u5230\u4E0E"<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>"\u5B8C\u5168\u5339\u914D\u7684\u7ED3\u679C\uFF0C\u4F46\u4EE5\u4E0B\u662F\u4E00\u4E9B\u76F8\u4F3C\u5185\u5BB9\uFF1A`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\u5EFA\u8BAE' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\u68C0\u67E5\u62FC\u5199\u9519\u8BEF\u3002</li><li class="ss__no-results__suggestions__list__option">\u5220\u9664\u4EFB\u4F55\u591A\u4F59\u7684\u5173\u952E\u8BCD\uFF08\u4F8B\u5982\uFF1A"\u4EA7\u54C1"\uFF09\u3002</li><li class="ss__no-results__suggestions__list__option">\u4F7F\u7528\u5176\u4ED6\u8BCD\u8BED\u63CF\u8FF0\u60A8\u8981\u67E5\u627E\u7684\u5185\u5BB9\u3002</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': '\u56FE\u7247\u5E93' } },
						zoomOutButton: { attributes: { 'aria-label': '\u7F29\u5C0F' } },
						zoomInButton: { attributes: { 'aria-label': '\u653E\u5927' } },
						closeButton: { attributes: { 'aria-label': '\u5173\u95ED\u56FE\u7247\u5E93' } },
						prevButton: { attributes: { 'aria-label': '\u4E0A\u4E00\u5F20\u56FE\u7247' } },
						nextButton: { attributes: { 'aria-label': '\u4E0B\u4E00\u5F20\u56FE\u7247' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': '\u5FEB\u901F\u9884\u89C8' } },
						closeButton: { attributes: { 'aria-label': '\u5173\u95ED\u5FEB\u901F\u9884\u89C8' } },
						addToCartButton: { value: '\u52A0\u5165\u8D2D\u7269\u8F66' },
						moreInfoButton: { value: '\u66F4\u591A\u4FE1\u606F' },
						loadingText: { value: '\u52A0\u8F7D\u4E2D\u2026' },
					},
				};
				t.d(e, ['zh', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=6284.e7b23dd1.iframe.bundle.js.map
