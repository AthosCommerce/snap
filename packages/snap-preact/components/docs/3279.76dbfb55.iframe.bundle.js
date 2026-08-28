'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3279],
		{
			'./src/Templates/Stores/library/languages/vi.ts'(a, e, t) {
				t.r(e);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: {
							value: '\u0110\xF3ng t\u1EF1 \u0111\u1ED9ng ho\xE0n th\xE0nh',
							attributes: { 'aria-label': '\u0110\xF3ng t\u1EF1 \u0111\u1ED9ng ho\xE0n th\xE0nh' },
						},
						noResultsText: {
							value: (u) =>
								`<p>Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o cho "${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}".</p><p>Vui l\xF2ng th\u1EED t\xECm ki\u1EBFm kh\xE1c.</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`Xem ${u?.controller?.store?.pagination.totalResults} k\u1EBFt qu\u1EA3${
									u?.controller?.store?.filters.length > 0 ? ' \u0111\xE3 l\u1ECDc' : ''
								} cho "${u?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: 'L\u1ECBch s\u1EED' },
						term: { attributes: { 'aria-label': (u) => `m\u1EE5c ${u.index + 1} trong ${u.numberOfTerms}, ${u.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: 'G\u1EE3i \xFD' },
						term: { attributes: { 'aria-label': (u) => `m\u1EE5c ${u.index + 1} trong ${u.numberOfTerms}, ${u.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Xu h\u01B0\u1EDBng' },
						term: { attributes: { 'aria-label': (u) => `m\u1EE5c ${u.index + 1} trong ${u.numberOfTerms}, ${u.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: 'B\u1ED9 l\u1ECDc' },
						applyButtonText: { value: '\xC1p d\u1EE5ng' },
						clearButtonText: { value: 'X\xF3a t\u1EA5t c\u1EA3' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: 'T\xECm ki\u1EBFm' } },
						closeSearchButton: { attributes: { 'aria-label': '\u0110\xF3ng t\xECm ki\u1EBFm' } },
						clearSearchButton: { attributes: { 'aria-label': 'X\xF3a t\xECm ki\u1EBFm' } },
						submitSearchButton: { attributes: { 'aria-label': 'G\u1EEDi t\xECm ki\u1EBFm' } },
					},
					recommendationBundle: {
						seedText: { value: 'S\u1EA3n ph\u1EA9m n\xE0y' },
						ctaButtonText: { value: 'Th\xEAm t\u1EA5t c\u1EA3 v\xE0o gi\u1ECF h\xE0ng' },
						ctaButtonSuccessText: { value: '\u0110\xE3 th\xEAm combo!' },
						ctaSubtotalTitle: { value: (u) => `T\u1EA1m t\xEDnh cho ${u.cartStore.count} s\u1EA3n ph\u1EA9m` },
					},
					slideshow: {
						pauseButton: {
							value: (u) => (u.isPlaying ? 'T\u1EA1m d\u1EEBng' : 'Ph\xE1t'),
							attributes: {
								'aria-label': (u) => (u.isPlaying ? 'T\u1EA1m d\u1EEBng tr\xECnh chi\u1EBFu' : 'Ti\u1EBFp t\u1EE5c tr\xECnh chi\u1EBFu'),
							},
						},
						paginationButton: { attributes: { 'aria-label': (u) => `\u0110i t\u1EDBi nh\xF3m slide ${u.index + 1} trong ${u.totalDots}` } },
						nextButton: { attributes: { 'aria-label': (u) => `Slide ti\u1EBFp theo${u.isNextDisabled ? ' (\u0111\xE3 t\u1EAFt)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (u) => `Slide tr\u01B0\u1EDBc${u.isPrevDisabled ? ' (\u0111\xE3 t\u1EAFt)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler ? `Nh\u1EA5p \u0111\u1EC3 xem ${u.imageAlt}` : `${u.imageAlt} ${u.index + 1} trong ${u.slidesLength}`,
							},
						},
						srInstructions: {
							value: (u) =>
								`S\u1EED d\u1EE5ng c\xE1c ph\xEDm m\u0169i t\xEAn \u0111\u1EC3 di chuy\u1EC3n gi\u1EEFa c\xE1c slide. Nh\u1EA5n ph\xEDm c\xE1ch \u0111\u1EC3 t\u1EA1m d\u1EEBng t\u1EF1 \u0111\u1ED9ng ph\xE1t. Nh\u1EA5n Home ho\u1EB7c End \u0111\u1EC3 \u0111i t\u1EDBi nh\xF3m slide \u0111\u1EA7u ti\xEAn ho\u1EB7c cu\u1ED1i c\xF9ng. ${
									u.touchDragging &&
									'Tr\xEAn thi\u1EBFt b\u1ECB c\u1EA3m \u1EE9ng, vu\u1ED1t sang tr\xE1i ho\u1EB7c ph\u1EA3i \u0111\u1EC3 di chuy\u1EC3n.'
								}`,
						},
					},
					sortBy: { label: { value: 'S\u1EAFp x\u1EBFp theo' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': 'C\xE1c tab k\u1EBFt qu\u1EA3' } },
						tabButton: {
							attributes: {
								'aria-label': (u) => `${u.tab.label || u.tab.id}${typeof u.resultCount == 'number' ? `, ${u.resultCount} k\u1EBFt qu\u1EA3` : ''}`,
							},
						},
					},
					perPage: { label: { value: 'M\u1ED7i trang' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`menu th\u1EA3 xu\u1ED1ng b\u1ED9 l\u1ECDc ${u?.facet?.field}, hi\u1EC7n \u0111ang ${
										u?.selectedFacet?.field === u?.facet?.field ? 'thu g\u1ECDn' : 'm\u1EDF'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' l\u1EF1a ch\u1ECDn' : ''}`,
							},
						},
					},
					filterSummary: { title: { value: 'B\u1ED9 l\u1ECDc hi\u1EC7n t\u1EA1i' }, clearAllLabel: { value: 'X\xF3a t\u1EA5t c\u1EA3' } },
					facet: {
						showMoreText: { value: 'Xem th\xEAm' },
						showLessText: { value: 'Thu g\u1ECDn' },
						clearAllText: { value: 'X\xF3a t\u1EA5t c\u1EA3' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`menu th\u1EA3 xu\u1ED1ng b\u1ED9 l\u1ECDc ${u?.facet?.label}, hi\u1EC7n \u0111ang ${
										u?.facet?.collapsed ? 'thu g\u1ECDn' : 'm\u1EDF'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' l\u1EF1a ch\u1ECDn' : ''}`,
							},
						},
						submitRangeButton: { value: 'G\u1EEDi' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`menu th\u1EA3 xu\u1ED1ng ${u?.label}, ${u?.options?.length} l\u1EF1a ch\u1ECDn ${
										u?.selectedOptions?.length
											? `, t\xF9y ch\u1ECDn \u0111ang \u0111\u01B0\u1EE3c ch\u1ECDn l\xE0 ${u?.selectedOptions[0].label}`
											: ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`n\xFAt ch\u1ECDn ${u?.disabled ? '\u0111\xE3 t\u1EAFt' : ''} ${u?.checkedState ? '\u0111\xE3 ch\u1ECDn' : 'ch\u01B0a ch\u1ECDn'}`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': '\u0111\u1EBFn trang tr\u01B0\u1EDBc' } },
						next: { attributes: { 'aria-label': '\u0111\u1EBFn trang sau' } },
						first: { attributes: { 'aria-label': '\u0111\u1EBFn trang \u0111\u1EA7u ti\xEAn' } },
						last: { attributes: { 'aria-label': (u) => `\u0111\u1EBFn trang cu\u1ED1i c\xF9ng ${u?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (u) => `\u0111\u1EBFn trang ${u?.page?.number}` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `${u?.totalResults} s\u1EA3n ph\u1EA9m` } },
					result: {
						addToCartButtonText: {
							value: 'Th\xEAm t\u1EA5t c\u1EA3 v\xE0o gi\u1ECF h\xE0ng',
							attributes: { 'aria-label': 'Th\xEAm t\u1EA5t c\u1EA3 v\xE0o gi\u1ECF h\xE0ng' },
						},
						addToCartButtonSuccessText: { value: '\u0110\xE3 th\xEAm!' },
						quickviewButtonText: { value: 'Xem nhanh', attributes: { 'aria-label': 'Xem nhanh' } },
					},
					overlayResult: {
						addToCartButtonText: {
							value: 'Th\xEAm t\u1EA5t c\u1EA3 v\xE0o gi\u1ECF h\xE0ng',
							attributes: { 'aria-label': 'Th\xEAm t\u1EA5t c\u1EA3 v\xE0o gi\u1ECF h\xE0ng' },
						},
						addToCartButtonSuccessText: { value: '\u0110\xE3 th\xEAm!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'T\u1EA3i th\xEAm' } },
						progressText: { value: (u) => `B\u1EA1n \u0111\xE3 xem ${u?.pagination?.end} trong ${u?.pagination?.totalResults} s\u1EA3n ph\u1EA9m` },
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: 'Thu g\u1ECDn' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) => `${u?.label ? `x\xF3a b\u1ED9 l\u1ECDc \u0111\xE3 ch\u1ECDn ${u?.label} ${u?.value}` : u?.value || ''}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`thanh tr\u01B0\u1EE3t ${u?.facet?.label}, gi\xE1 tr\u1ECB hi\u1EC7n t\u1EA1i ${u?.value}, ${
										u?.facet?.range?.low ? `gi\xE1 tr\u1ECB t\u1ED1i thi\u1EC3u ${u?.facet?.range?.low},` : ''
									} ${u?.facet?.range?.high ? `gi\xE1 tr\u1ECB t\u1ED1i \u0111a ${u?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `x\xF3a b\u1ED9 l\u1ECDc \u0111\xE3 ch\u1ECDn ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `l\u1ECDc theo ${u?.facet?.label} - ${u?.value?.label}`
											: `l\u1ECDc theo ${u?.value?.label}`
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
											? `x\xF3a b\u1ED9 l\u1ECDc \u0111\xE3 ch\u1ECDn ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `l\u1ECDc theo ${u?.facet?.label} - ${u?.value?.label}`
											: `l\u1ECDc theo ${u?.value?.label}`
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
											? `x\xF3a b\u1ED9 l\u1ECDc \u0111\xE3 ch\u1ECDn ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `l\u1ECDc theo ${u?.facet?.label} - ${u?.value?.label}`
											: `l\u1ECDc theo ${u?.value?.label}`
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
											? `x\xF3a b\u1ED9 l\u1ECDc \u0111\xE3 ch\u1ECDn ${u?.facet?.label || ''} - ${u?.value?.label}`
											: u?.facet?.label
											? `l\u1ECDc theo ${u?.facet?.label} - ${u?.value?.label}`
											: `l\u1ECDc theo ${u?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>C\u1EA3nh b\xE1o:&nbsp;</b>' },
						infoText: { value: '<b>Th\xF4ng tin:&nbsp;</b>' },
						errorText: { value: '<b>L\u1ED7i:&nbsp;</b>' },
						reloadText: { value: 'T\u1EA3i l\u1EA1i' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`h\u1ED9p ki\u1EC3m ${u?.disabled ? '\u0111\xE3 t\u1EAFt' : ''} ${
										u?.checkedState ? '\u0111\xE3 ch\u1ECDn' : 'ch\u01B0a ch\u1ECDn'
									}`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': 's\u1ED1 l\u01B0\u1EE3ng' } },
						decrementButton: { attributes: { 'aria-label': 'gi\u1EA3m s\u1ED1 l\u01B0\u1EE3ng' } },
						incrementButton: { attributes: { 'aria-label': 't\u0103ng s\u1ED1 l\u01B0\u1EE3ng' } },
					},
					searchHeader: {
						titleText: {
							value: (u) => `\u0110ang hi\u1EC3n th\u1ECB ${u?.pagination?.totalResults} k\u1EBFt qu\u1EA3
                ${u?.search?.query ? `cho <span class="ss__search-header__results-query">"${u?.search?.query.string}"</span>` : ''}`,
							attributes: {
								'aria-label': (u) =>
									`Hi\u1EC7n \u0111ang hi\u1EC3n th\u1ECB ${u?.pagination?.totalResults} m\u1EE5c trong l\u01B0\u1EDBi s\u1EA3n ph\u1EA9m`,
							},
						},
						correctedQueryText: {
							value: (u) =>
								`Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o cho <em>"${u?.search?.originalQuery?.string}"</em>, thay v\xE0o \u0111\xF3 \u0111ang hi\u1EC3n th\u1ECB k\u1EBFt qu\u1EA3 cho <em>"${u?.search?.query?.string}"</em>.`,
							attributes: {
								'aria-label': (u) =>
									`Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o cho ${u?.search?.originalQuery?.string}, thay v\xE0o \u0111\xF3 \u0111ang hi\u1EC3n th\u1ECB k\u1EBFt qu\u1EA3 cho ${u?.search?.query?.string}`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o cho <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span>.
                </span>`
										: '<span>Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o.</span>'
								}`,
							attributes: { 'aria-label': (u) => `Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o cho ${u?.search?.query?.string}` },
						},
						didYouMeanText: {
							value: (u) =>
								`C\xF3 ph\u1EA3i b\u1EA1n mu\u1ED1n t\xECm <a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a>?`,
						},
						expandedSearchText: {
							value: (u) =>
								`Ch\xFAng t\xF4i kh\xF4ng th\u1EC3 t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 kh\u1EDBp ch\xEDnh x\xE1c cho "<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>", nh\u01B0ng \u0111\xE2y l\xE0 m\u1ED9t s\u1ED1 k\u1EBFt qu\u1EA3 t\u01B0\u01A1ng t\u1EF1:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'G\u1EE3i \xFD' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Ki\u1EC3m tra l\u1ED7i ch\xEDnh t\u1EA3.</li><li class="ss__no-results__suggestions__list__option">X\xF3a c\xE1c t\u1EEB kh\xF3a d\u01B0 th\u1EEBa (v\xED d\u1EE5: "s\u1EA3n ph\u1EA9m").</li><li class="ss__no-results__suggestions__list__option">D\xF9ng t\u1EEB kh\xE1c \u0111\u1EC3 m\xF4 t\u1EA3 nh\u1EEFng g\xEC b\u1EA1n \u0111ang t\xECm ki\u1EBFm.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': 'Th\u01B0 vi\u1EC7n \u1EA3nh' } },
						zoomOutButton: { attributes: { 'aria-label': 'Thu nh\u1ECF' } },
						zoomInButton: { attributes: { 'aria-label': 'Ph\xF3ng to' } },
						closeButton: { attributes: { 'aria-label': '\u0110\xF3ng th\u01B0 vi\u1EC7n' } },
						prevButton: { attributes: { 'aria-label': '\u1EA2nh tr\u01B0\u1EDBc' } },
						nextButton: { attributes: { 'aria-label': '\u1EA2nh ti\u1EBFp theo' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': 'Xem nhanh' } },
						closeButton: { attributes: { 'aria-label': '\u0110\xF3ng xem nhanh' } },
						addToCartButton: { value: 'Th\xEAm v\xE0o gi\u1ECF h\xE0ng' },
						moreInfoButton: { value: 'Th\xEAm th\xF4ng tin' },
						loadingText: { value: '\u0110ang t\u1EA3i\u2026' },
					},
				};
				t.d(e, ['vi', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=3279.76dbfb55.iframe.bundle.js.map
