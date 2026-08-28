'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9888],
		{
			'./src/Templates/Stores/library/languages/ko.ts'(l, C, e) {
				e.r(C);
				const t = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: '\uC790\uB3D9\uC644\uC131 \uB2EB\uAE30', attributes: { 'aria-label': '\uC790\uB3D9\uC644\uC131 \uB2EB\uAE30' } },
						noResultsText: {
							value: (u) =>
								`<p>"${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}"\uC5D0 \uB300\uD55C \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p><p>\uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB97C \uC2DC\uB3C4\uD574 \uBCF4\uC138\uC694.</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`"${u?.controller?.store?.search?.query?.string}"\uC5D0 \uB300\uD55C ${
									u?.controller?.store?.filters.length > 0 ? '\uD544\uD130\uB9C1\uB41C ' : ''
								}\uACB0\uACFC ${u?.controller?.store?.pagination.totalResults}\uAC1C \uBCF4\uAE30`,
						},
					},
					'terms.history': {
						title: { value: '\uAE30\uB85D' },
						term: { attributes: { 'aria-label': (u) => `${u.numberOfTerms}\uAC1C \uC911 ${u.index + 1}\uBC88\uC9F8 \uD56D\uBAA9, ${u.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: '\uCD94\uCC9C \uAC80\uC0C9\uC5B4' },
						term: { attributes: { 'aria-label': (u) => `${u.numberOfTerms}\uAC1C \uC911 ${u.index + 1}\uBC88\uC9F8 \uD56D\uBAA9, ${u.term.value}` } },
					},
					'terms.trending': {
						title: { value: '\uC778\uAE30 \uAC80\uC0C9\uC5B4' },
						term: { attributes: { 'aria-label': (u) => `${u.numberOfTerms}\uAC1C \uC911 ${u.index + 1}\uBC88\uC9F8 \uD56D\uBAA9, ${u.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: '\uD544\uD130' },
						applyButtonText: { value: '\uC801\uC6A9' },
						clearButtonText: { value: '\uBAA8\uB450 \uC9C0\uC6B0\uAE30' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: '\uAC80\uC0C9' } },
						closeSearchButton: { attributes: { 'aria-label': '\uAC80\uC0C9 \uB2EB\uAE30' } },
						clearSearchButton: { attributes: { 'aria-label': '\uAC80\uC0C9\uC5B4 \uC9C0\uC6B0\uAE30' } },
						submitSearchButton: { attributes: { 'aria-label': '\uAC80\uC0C9 \uC81C\uCD9C' } },
					},
					recommendationBundle: {
						seedText: { value: '\uC774 \uC81C\uD488' },
						ctaButtonText: { value: '\uBAA8\uB450 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30' },
						ctaButtonSuccessText: { value: '\uBC88\uB4E4\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4!' },
						ctaSubtotalTitle: { value: (u) => `${u.cartStore.count}\uAC1C \uD56D\uBAA9 \uC18C\uACC4` },
					},
					slideshow: {
						pauseButton: {
							value: (u) => (u.isPlaying ? '\uC77C\uC2DC\uC815\uC9C0' : '\uC7AC\uC0DD'),
							attributes: {
								'aria-label': (u) =>
									u.isPlaying ? '\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC77C\uC2DC\uC815\uC9C0' : '\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC7AC\uAC1C',
							},
						},
						paginationButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.totalDots}\uAC1C \uC911 ${u.index + 1}\uBC88\uC9F8 \uC2AC\uB77C\uC774\uB4DC \uADF8\uB8F9\uC73C\uB85C \uC774\uB3D9`,
							},
						},
						nextButton: {
							attributes: {
								'aria-label': (u) => `\uB2E4\uC74C \uC2AC\uB77C\uC774\uB4DC${u.isNextDisabled ? ' (\uBE44\uD65C\uC131\uD654\uB428)' : ''}`,
							},
						},
						prevButton: {
							attributes: {
								'aria-label': (u) => `\uC774\uC804 \uC2AC\uB77C\uC774\uB4DC${u.isPrevDisabled ? ' (\uBE44\uD65C\uC131\uD654\uB428)' : ''}`,
							},
						},
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler
										? `\uD074\uB9AD\uD558\uC5EC ${u.imageAlt} \uBCF4\uAE30`
										: `${u.imageAlt} ${u.slidesLength}\uAC1C \uC911 ${u.index + 1}\uBC88\uC9F8`,
							},
						},
						srInstructions: {
							value: (u) =>
								`\uD654\uC0B4\uD45C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2AC\uB77C\uC774\uB4DC \uAC04\uC744 \uC774\uB3D9\uD558\uC138\uC694. \uC2A4\uD398\uC774\uC2A4\uBC14\uB97C \uB20C\uB7EC \uC790\uB3D9 \uC7AC\uC0DD\uC744 \uC77C\uC2DC\uC815\uC9C0\uD569\uB2C8\uB2E4. Home \uB610\uB294 End \uD0A4\uB97C \uB20C\uB7EC \uCCAB \uBC88\uC9F8 \uB610\uB294 \uB9C8\uC9C0\uB9C9 \uC2AC\uB77C\uC774\uB4DC \uADF8\uB8F9\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. ${
									u.touchDragging &&
									'\uD130\uCE58 \uAE30\uAE30\uC5D0\uC11C\uB294 \uC67C\uCABD \uB610\uB294 \uC624\uB978\uCABD\uC73C\uB85C \uC2A4\uC640\uC774\uD504\uD558\uC5EC \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.'
								}`,
						},
					},
					sortBy: { label: { value: '\uC815\uB82C \uAE30\uC900' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': '\uACB0\uACFC \uD0ED' } },
						tabButton: {
							attributes: {
								'aria-label': (u) => `${u.tab.label || u.tab.id}${typeof u.resultCount == 'number' ? `, \uACB0\uACFC ${u.resultCount}\uAC1C` : ''}`,
							},
						},
					},
					perPage: { label: { value: '\uD398\uC774\uC9C0\uB2F9 \uD45C\uC2DC \uAC1C\uC218' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.field} \uD544\uD130 \uB4DC\uB86D\uB2E4\uC6B4, \uD604\uC7AC ${
										u?.selectedFacet?.field === u?.facet?.field ? '\uC811\uD798' : '\uD3BC\uCCD0\uC9D0'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + '\uAC1C \uC120\uD0DD \uD56D\uBAA9' : ''}`,
							},
						},
					},
					filterSummary: { title: { value: '\uD604\uC7AC \uD544\uD130' }, clearAllLabel: { value: '\uBAA8\uB450 \uC9C0\uC6B0\uAE30' } },
					facet: {
						showMoreText: { value: '\uB354 \uBCF4\uAE30' },
						showLessText: { value: '\uAC04\uB7B5\uD788 \uBCF4\uAE30' },
						clearAllText: { value: '\uBAA8\uB450 \uC9C0\uC6B0\uAE30' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.label} \uD544\uD130 \uB4DC\uB86D\uB2E4\uC6B4, \uD604\uC7AC ${
										u?.facet?.collapsed ? '\uC811\uD798' : '\uD3BC\uCCD0\uC9D0'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + '\uAC1C \uC120\uD0DD \uD56D\uBAA9' : ''}`,
							},
						},
						submitRangeButton: { value: '\uC81C\uCD9C' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`${u?.label} \uB4DC\uB86D\uB2E4\uC6B4, \uC120\uD0DD \uD56D\uBAA9 ${u?.options?.length}\uAC1C ${
										u?.selectedOptions?.length
											? `, \uD604\uC7AC \uC120\uD0DD\uB41C \uC635\uC158\uC740 ${u?.selectedOptions[0].label}\uC785\uB2C8\uB2E4`
											: ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\uBE44\uD65C\uC131\uD654\uB41C' : ''} ${
										u?.checkedState ? '\uC120\uD0DD\uB41C' : '\uC120\uD0DD\uB418\uC9C0 \uC54A\uC740'
									} \uB77C\uB514\uC624 \uBC84\uD2BC`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': '\uC774\uC804 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9' } },
						next: { attributes: { 'aria-label': '\uB2E4\uC74C \uD398\uC774\uC9C0\uB85C \uC774\uB3D9' } },
						first: { attributes: { 'aria-label': '\uCCAB \uD398\uC774\uC9C0\uB85C \uC774\uB3D9' } },
						last: { attributes: { 'aria-label': (u) => `\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0 ${u?.pagination?.last?.number}\uB85C \uC774\uB3D9` } },
						page: { attributes: { 'aria-label': (u) => `${u?.page?.number}\uD398\uC774\uC9C0\uB85C \uC774\uB3D9` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `\uC81C\uD488 ${u?.totalResults}\uAC1C` } },
					result: {
						addToCartButtonText: {
							value: '\uBAA8\uB450 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30',
							attributes: { 'aria-label': '\uBAA8\uB450 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30' },
						},
						addToCartButtonSuccessText: { value: '\uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4!' },
						quickviewButtonText: { value: '\uBE60\uB978 \uBCF4\uAE30', attributes: { 'aria-label': '\uBE60\uB978 \uBCF4\uAE30' } },
					},
					overlayResult: {
						addToCartButtonText: {
							value: '\uBAA8\uB450 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30',
							attributes: { 'aria-label': '\uBAA8\uB450 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30' },
						},
						addToCartButtonSuccessText: { value: '\uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': '\uB354 \uBD88\uB7EC\uC624\uAE30' } },
						progressText: {
							value: (u) => `${u?.pagination?.totalResults}\uAC1C \uC911 ${u?.pagination?.end}\uAC1C\uB97C \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4`,
						},
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: '\uC811\uAE30' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) => `${u?.label ? `\uC120\uD0DD\uB41C \uD544\uD130 ${u?.label} ${u?.value} \uC81C\uAC70` : u?.value || ''}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`${u?.facet?.label} \uC2AC\uB77C\uC774\uB354 \uD578\uB4E4, \uD604\uC7AC \uAC12 ${u?.value}, ${
										u?.facet?.range?.low ? `\uCD5C\uC19F\uAC12 ${u?.facet?.range?.low},` : ''
									} ${u?.facet?.range?.high ? `\uCD5C\uB313\uAC12 ${u?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\uC120\uD0DD\uB41C \uD544\uD130 \uC81C\uAC70 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
											: `${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
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
											? `\uC120\uD0DD\uB41C \uD544\uD130 \uC81C\uAC70 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
											: `${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
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
											? `\uC120\uD0DD\uB41C \uD544\uD130 \uC81C\uAC70 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
											: `${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
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
											? `\uC120\uD0DD\uB41C \uD544\uD130 \uC81C\uAC70 ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
											: `${u?.value?.label}\uB85C \uD544\uD130\uB9C1`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>\uACBD\uACE0:&nbsp;</b>' },
						infoText: { value: '<b>\uC815\uBCF4:&nbsp;</b>' },
						errorText: { value: '<b>\uC624\uB958:&nbsp;</b>' },
						reloadText: { value: '\uB2E4\uC2DC \uBD88\uB7EC\uC624\uAE30' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\uBE44\uD65C\uC131\uD654\uB41C' : ''} ${
										u?.checkedState ? '\uC120\uD0DD\uB41C' : '\uC120\uD0DD\uB418\uC9C0 \uC54A\uC740'
									} \uCCB4\uD06C\uBC15\uC2A4`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': '\uC218\uB7C9' } },
						decrementButton: { attributes: { 'aria-label': '\uC218\uB7C9 \uAC10\uC18C' } },
						incrementButton: { attributes: { 'aria-label': '\uC218\uB7C9 \uC99D\uAC00' } },
					},
					searchHeader: {
						titleText: {
							value: (u) => `\uACB0\uACFC ${u?.pagination?.totalResults}\uAC1C \uD45C\uC2DC \uC911
                ${u?.search?.query ? `<span class="ss__search-header__results-query">"${u?.search?.query.string}"</span>\uC5D0 \uB300\uD55C` : ''}`,
							attributes: {
								'aria-label': (u) =>
									`\uC81C\uD488 \uADF8\uB9AC\uB4DC\uC5D0 ${u?.pagination?.totalResults}\uAC1C \uD56D\uBAA9\uC744 \uD45C\uC2DC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4`,
							},
						},
						correctedQueryText: {
							value: (u) =>
								`<em>"${u?.search?.originalQuery?.string}"</em>\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC5B4 \uB300\uC2E0 <em>"${u?.search?.query?.string}"</em>\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.`,
							attributes: {
								'aria-label': (u) =>
									`${u?.search?.originalQuery?.string}\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC5B4 \uB300\uC2E0 ${u?.search?.query?.string}\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span>\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
                </span>`
										: '<span>\uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</span>'
								}`,
							attributes: {
								'aria-label': (u) => `${u?.search?.query?.string}\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4`,
							},
						},
						didYouMeanText: {
							value: (u) =>
								`\uD639\uC2DC <a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a>\uC744(\uB97C) \uCC3E\uC73C\uC168\uB098\uC694?`,
						},
						expandedSearchText: {
							value: (u) =>
								`"<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>"\uC5D0 \uB300\uD55C \uC815\uD655\uD788 \uC77C\uCE58\uD558\uB294 \uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC5C8\uC9C0\uB9CC, \uBE44\uC2B7\uD55C \uACB0\uACFC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\uCD94\uCC9C \uAC80\uC0C9\uC5B4' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\uCCA0\uC790\uAC00 \uD2C0\uB9AC\uC9C0 \uC54A\uC558\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.</li><li class="ss__no-results__suggestions__list__option">\uBD88\uD544\uC694\uD55C \uD0A4\uC6CC\uB4DC(\uC608: "\uC81C\uD488")\uB97C \uC81C\uAC70\uD558\uC138\uC694.</li><li class="ss__no-results__suggestions__list__option">\uCC3E\uC73C\uC2DC\uB294 \uB0B4\uC6A9\uC744 \uB2E4\uB978 \uB2E8\uC5B4\uB85C \uD45C\uD604\uD574 \uBCF4\uC138\uC694.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': '\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC' } },
						zoomOutButton: { attributes: { 'aria-label': '\uCD95\uC18C' } },
						zoomInButton: { attributes: { 'aria-label': '\uD655\uB300' } },
						closeButton: { attributes: { 'aria-label': '\uAC24\uB7EC\uB9AC \uB2EB\uAE30' } },
						prevButton: { attributes: { 'aria-label': '\uC774\uC804 \uC774\uBBF8\uC9C0' } },
						nextButton: { attributes: { 'aria-label': '\uB2E4\uC74C \uC774\uBBF8\uC9C0' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': '\uBE60\uB978 \uBCF4\uAE30' } },
						closeButton: { attributes: { 'aria-label': '\uBE60\uB978 \uBCF4\uAE30 \uB2EB\uAE30' } },
						addToCartButton: { value: '\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30' },
						moreInfoButton: { value: '\uC790\uC138\uD788 \uBCF4\uAE30' },
						loadingText: { value: '\uB85C\uB529 \uC911\u2026' },
					},
				};
				e.d(C, ['ko', 0, t]);
			},
		},
	]);
})();

//# sourceMappingURL=9888.27024d6d.iframe.bundle.js.map
