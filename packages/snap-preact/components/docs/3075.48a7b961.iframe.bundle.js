'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3075],
		{
			'./src/Templates/Stores/library/languages/ja.ts'(a, e, t) {
				t.r(e);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: {
							value: '\u30AA\u30FC\u30C8\u30B3\u30F3\u30D7\u30EA\u30FC\u30C8\u3092\u9589\u3058\u308B',
							attributes: { 'aria-label': '\u30AA\u30FC\u30C8\u30B3\u30F3\u30D7\u30EA\u30FC\u30C8\u3092\u9589\u3058\u308B' },
						},
						noResultsText: {
							value: (u) =>
								`<p>"${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}"\u306E\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002</p><p>\u5225\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`"${u?.controller?.store?.search?.query?.string}"\u306E${
									u?.controller?.store?.filters.length > 0 ? '\u7D5E\u308A\u8FBC\u307F' : ''
								}\u691C\u7D22\u7D50\u679C ${u?.controller?.store?.pagination.totalResults} \u4EF6\u3092\u8868\u793A`,
						},
					},
					'terms.history': {
						title: { value: '\u5C65\u6B74' },
						term: { attributes: { 'aria-label': (u) => `${u.numberOfTerms}\u4EF6\u4E2D${u.index + 1}\u4EF6\u76EE\u3001${u.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: '\u5019\u88DC' },
						term: { attributes: { 'aria-label': (u) => `${u.numberOfTerms}\u4EF6\u4E2D${u.index + 1}\u4EF6\u76EE\u3001${u.term.value}` } },
					},
					'terms.trending': {
						title: { value: '\u30C8\u30EC\u30F3\u30C9' },
						term: { attributes: { 'aria-label': (u) => `${u.numberOfTerms}\u4EF6\u4E2D${u.index + 1}\u4EF6\u76EE\u3001${u.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: '\u7D5E\u308A\u8FBC\u307F' },
						applyButtonText: { value: '\u9069\u7528' },
						clearButtonText: { value: '\u3059\u3079\u3066\u30AF\u30EA\u30A2' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: '\u691C\u7D22' } },
						closeSearchButton: { attributes: { 'aria-label': '\u691C\u7D22\u3092\u9589\u3058\u308B' } },
						clearSearchButton: { attributes: { 'aria-label': '\u691C\u7D22\u3092\u30AF\u30EA\u30A2' } },
						submitSearchButton: { attributes: { 'aria-label': '\u691C\u7D22\u3092\u5B9F\u884C' } },
					},
					recommendationBundle: {
						seedText: { value: '\u3053\u306E\u5546\u54C1' },
						ctaButtonText: { value: '\u3059\u3079\u3066\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0' },
						ctaButtonSuccessText: { value: '\u30BB\u30C3\u30C8\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\uFF01' },
						ctaSubtotalTitle: { value: (u) => `${u.cartStore.count} \u70B9\u306E\u5C0F\u8A08` },
					},
					slideshow: {
						pauseButton: {
							value: (u) => (u.isPlaying ? '\u4E00\u6642\u505C\u6B62' : '\u518D\u751F'),
							attributes: {
								'aria-label': (u) =>
									u.isPlaying
										? '\u30B9\u30E9\u30A4\u30C9\u30B7\u30E7\u30FC\u3092\u4E00\u6642\u505C\u6B62'
										: '\u30B9\u30E9\u30A4\u30C9\u30B7\u30E7\u30FC\u3092\u518D\u958B',
							},
						},
						paginationButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.totalDots}\u30B0\u30EB\u30FC\u30D7\u4E2D${
										u.index + 1
									}\u756A\u76EE\u306E\u30B9\u30E9\u30A4\u30C9\u30B0\u30EB\u30FC\u30D7\u306B\u79FB\u52D5`,
							},
						},
						nextButton: {
							attributes: { 'aria-label': (u) => `\u6B21\u306E\u30B9\u30E9\u30A4\u30C9${u.isNextDisabled ? '\uFF08\u7121\u52B9\uFF09' : ''}` },
						},
						prevButton: {
							attributes: { 'aria-label': (u) => `\u524D\u306E\u30B9\u30E9\u30A4\u30C9${u.isPrevDisabled ? '\uFF08\u7121\u52B9\uFF09' : ''}` },
						},
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler
										? `\u30AF\u30EA\u30C3\u30AF\u3057\u3066${u.imageAlt}\u3092\u8868\u793A`
										: `${u.imageAlt} ${u.slidesLength}\u679A\u4E2D${u.index + 1}\u679A\u76EE`,
							},
						},
						srInstructions: {
							value: (u) =>
								`\u77E2\u5370\u30AD\u30FC\u3067\u30B9\u30E9\u30A4\u30C9\u9593\u3092\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002\u30B9\u30DA\u30FC\u30B9\u30AD\u30FC\u3067\u81EA\u52D5\u518D\u751F\u3092\u4E00\u6642\u505C\u6B62\u3057\u307E\u3059\u3002Home \u30AD\u30FC\u307E\u305F\u306F End \u30AD\u30FC\u3067\u6700\u521D\u307E\u305F\u306F\u6700\u5F8C\u306E\u30B9\u30E9\u30A4\u30C9\u30B0\u30EB\u30FC\u30D7\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002 ${
									u.touchDragging &&
									'\u30BF\u30C3\u30C1\u30C7\u30D0\u30A4\u30B9\u3067\u306F\u3001\u5DE6\u53F3\u306B\u30B9\u30EF\u30A4\u30D7\u3057\u3066\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002'
								}`,
						},
					},
					sortBy: { label: { value: '\u4E26\u3073\u66FF\u3048' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': '\u7D50\u679C\u30BF\u30D6' } },
						tabButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.tab.label || u.tab.id}${typeof u.resultCount == 'number' ? `\u3001${u.resultCount}\u4EF6\u306E\u7D50\u679C` : ''}`,
							},
						},
					},
					perPage: { label: { value: '\u8868\u793A\u4EF6\u6570' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.field}\u30D5\u30A3\u30EB\u30BF\u30FC\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3001\u73FE\u5728${
										u?.selectedFacet?.field === u?.facet?.field ? '\u6298\u308A\u305F\u305F\u307F' : '\u5C55\u958B'
									}\u4E2D ${u?.facet?.values?.length ? u?.facet?.values?.length + '\u500B\u306E\u9078\u629E\u80A2' : ''}`,
							},
						},
					},
					filterSummary: {
						title: { value: '\u73FE\u5728\u306E\u30D5\u30A3\u30EB\u30BF\u30FC' },
						clearAllLabel: { value: '\u3059\u3079\u3066\u30AF\u30EA\u30A2' },
					},
					facet: {
						showMoreText: { value: '\u3082\u3063\u3068\u898B\u308B' },
						showLessText: { value: '\u8868\u793A\u3092\u6E1B\u3089\u3059' },
						clearAllText: { value: '\u3059\u3079\u3066\u30AF\u30EA\u30A2' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.label}\u30D5\u30A3\u30EB\u30BF\u30FC\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3001\u73FE\u5728${
										u?.facet?.collapsed ? '\u6298\u308A\u305F\u305F\u307F' : '\u5C55\u958B'
									}\u4E2D ${u?.facet?.values?.length ? u?.facet?.values?.length + '\u500B\u306E\u9078\u629E\u80A2' : ''}`,
							},
						},
						submitRangeButton: { value: '\u9001\u4FE1' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`${u?.label}\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3001${u?.options?.length}\u500B\u306E\u9078\u629E\u80A2${
										u?.selectedOptions?.length
											? `\u3001\u73FE\u5728\u9078\u629E\u4E2D\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F${u?.selectedOptions[0].label}`
											: ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u7121\u52B9\u5316\u3055\u308C\u305F' : ''}${
										u?.checkedState ? '\u9078\u629E\u6E08\u307F\u306E' : '\u672A\u9078\u629E\u306E'
									}\u30E9\u30B8\u30AA\u30DC\u30BF\u30F3`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': '\u524D\u306E\u30DA\u30FC\u30B8\u306B\u79FB\u52D5' } },
						next: { attributes: { 'aria-label': '\u6B21\u306E\u30DA\u30FC\u30B8\u306B\u79FB\u52D5' } },
						first: { attributes: { 'aria-label': '\u6700\u521D\u306E\u30DA\u30FC\u30B8\u306B\u79FB\u52D5' } },
						last: { attributes: { 'aria-label': (u) => `\u6700\u5F8C\u306E\u30DA\u30FC\u30B8 ${u?.pagination?.last?.number} \u306B\u79FB\u52D5` } },
						page: { attributes: { 'aria-label': (u) => `${u?.page?.number}\u30DA\u30FC\u30B8\u76EE\u306B\u79FB\u52D5` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `${u?.totalResults} \u4EF6\u306E\u5546\u54C1` } },
					result: {
						addToCartButtonText: {
							value: '\u3059\u3079\u3066\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0',
							attributes: { 'aria-label': '\u3059\u3079\u3066\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0' },
						},
						addToCartButtonSuccessText: { value: '\u8FFD\u52A0\u3057\u307E\u3057\u305F\uFF01' },
						quickviewButtonText: {
							value: '\u30AF\u30A4\u30C3\u30AF\u30D3\u30E5\u30FC',
							attributes: { 'aria-label': '\u30AF\u30A4\u30C3\u30AF\u30D3\u30E5\u30FC' },
						},
					},
					overlayResult: {
						addToCartButtonText: {
							value: '\u3059\u3079\u3066\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0',
							attributes: { 'aria-label': '\u3059\u3079\u3066\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0' },
						},
						addToCartButtonSuccessText: { value: '\u8FFD\u52A0\u3057\u307E\u3057\u305F\uFF01' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': '\u3082\u3063\u3068\u8AAD\u307F\u8FBC\u3080' } },
						progressText: { value: (u) => `${u?.pagination?.totalResults} \u4EF6\u4E2D ${u?.pagination?.end} \u4EF6\u3092\u8868\u793A\u6E08\u307F` },
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: '\u9589\u3058\u308B' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.label ? `\u9078\u629E\u4E2D\u306E\u30D5\u30A3\u30EB\u30BF\u30FC ${u?.label} ${u?.value} \u3092\u524A\u9664` : u?.value || ''
									}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.label}\u30B9\u30E9\u30A4\u30C0\u30FC\u30CF\u30F3\u30C9\u30EB\u3001\u73FE\u5728\u306E\u5024 ${u?.value}\u3001${
										u?.facet?.range?.low ? `\u6700\u5C0F\u5024 ${u?.facet?.range?.low}\u3001` : ''
									} ${u?.facet?.range?.high ? `\u6700\u5927\u5024 ${u?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u9078\u629E\u4E2D\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u524A\u9664 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
											: `${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
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
											? `\u9078\u629E\u4E2D\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u524A\u9664 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
											: `${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
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
											? `\u9078\u629E\u4E2D\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u524A\u9664 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
											: `${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
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
											? `\u9078\u629E\u4E2D\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u524A\u9664 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
											: `${u?.value?.label} \u3067\u7D5E\u308A\u8FBC\u3080`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>\u8B66\u544A\uFF1A&nbsp;</b>' },
						infoText: { value: '<b>\u60C5\u5831\uFF1A&nbsp;</b>' },
						errorText: { value: '<b>\u30A8\u30E9\u30FC\uFF1A&nbsp;</b>' },
						reloadText: { value: '\u518D\u8AAD\u307F\u8FBC\u307F' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u7121\u52B9\u5316\u3055\u308C\u305F' : ''}${
										u?.checkedState ? '\u9078\u629E\u6E08\u307F\u306E' : '\u672A\u9078\u629E\u306E'
									}\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': '\u6570\u91CF' } },
						decrementButton: { attributes: { 'aria-label': '\u6570\u91CF\u3092\u6E1B\u3089\u3059' } },
						incrementButton: { attributes: { 'aria-label': '\u6570\u91CF\u3092\u5897\u3084\u3059' } },
					},
					searchHeader: {
						titleText: {
							value: (u) => `${u?.pagination?.totalResults} \u4EF6\u306E\u7D50\u679C\u3092\u8868\u793A
                ${
									u?.search?.query
										? `<span class="ss__search-header__results-query">"${u?.search?.query.string}"</span>\u306E\u691C\u7D22\u7D50\u679C`
										: ''
								}`,
							attributes: {
								'aria-label': (u) =>
									`\u5546\u54C1\u30B0\u30EA\u30C3\u30C9\u306B ${u?.pagination?.totalResults} \u4EF6\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u8868\u793A\u4E2D`,
							},
						},
						correctedQueryText: {
							value: (u) =>
								`<em>"${u?.search?.originalQuery?.string}"</em>\u306E\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u4EE3\u308F\u308A\u306B<em>"${u?.search?.query?.string}"</em>\u306E\u691C\u7D22\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002`,
							attributes: {
								'aria-label': (u) =>
									`${u?.search?.originalQuery?.string}\u306E\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u4EE3\u308F\u308A\u306B${u?.search?.query?.string}\u306E\u691C\u7D22\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span>\u306E\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002
                </span>`
										: '<span>\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002</span>'
								}`,
							attributes: {
								'aria-label': (u) =>
									`${u?.search?.query?.string}\u306E\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F`,
							},
						},
						didYouMeanText: {
							value: (u) =>
								`\u3082\u3057\u304B\u3057\u3066<a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a>\u3067\u3059\u304B\uFF1F`,
						},
						expandedSearchText: {
							value: (u) =>
								`"<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>"\u306B\u5B8C\u5168\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u304C\u3001\u985E\u4F3C\u306E\u7D50\u679C\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\uFF1A`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\u5019\u88DC' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\u30B9\u30DA\u30EB\u30DF\u30B9\u304C\u306A\u3044\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002</li><li class="ss__no-results__suggestions__list__option">\u4F59\u5206\u306A\u30AD\u30FC\u30EF\u30FC\u30C9\uFF08\u4F8B\uFF1A"\u5546\u54C1"\uFF09\u3092\u524A\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002</li><li class="ss__no-results__suggestions__list__option">\u5225\u306E\u8A00\u8449\u3067\u304A\u63A2\u3057\u306E\u5185\u5BB9\u3092\u8868\u73FE\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': '\u753B\u50CF\u30AE\u30E3\u30E9\u30EA\u30FC' } },
						zoomOutButton: { attributes: { 'aria-label': '\u7E2E\u5C0F' } },
						zoomInButton: { attributes: { 'aria-label': '\u62E1\u5927' } },
						closeButton: { attributes: { 'aria-label': '\u30AE\u30E3\u30E9\u30EA\u30FC\u3092\u9589\u3058\u308B' } },
						prevButton: { attributes: { 'aria-label': '\u524D\u306E\u753B\u50CF' } },
						nextButton: { attributes: { 'aria-label': '\u6B21\u306E\u753B\u50CF' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': '\u30AF\u30A4\u30C3\u30AF\u30D3\u30E5\u30FC' } },
						closeButton: { attributes: { 'aria-label': '\u30AF\u30A4\u30C3\u30AF\u30D3\u30E5\u30FC\u3092\u9589\u3058\u308B' } },
						addToCartButton: { value: '\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0' },
						moreInfoButton: { value: '\u8A73\u7D30\u60C5\u5831' },
						loadingText: { value: '\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026' },
					},
				};
				t.d(e, ['ja', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=3075.48a7b961.iframe.bundle.js.map
