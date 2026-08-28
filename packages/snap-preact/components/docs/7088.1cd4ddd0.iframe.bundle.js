'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7088],
		{
			'./src/Templates/Stores/library/languages/tr.ts'(u, a, l) {
				l.r(a);
				const t = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'Otomatik tamamlamay\u0131 kapat', attributes: { 'aria-label': 'Otomatik tamamlamay\u0131 kapat' } },
						noResultsText: {
							value: (e) =>
								`<p>"${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}" i\xE7in sonu\xE7 bulunamad\u0131.</p><p>L\xFCtfen ba\u015Fka bir arama deneyin.</p>`,
						},
						seeMoreButton: {
							value: (e) =>
								`"${e?.controller?.store?.search?.query?.string}" i\xE7in ${e?.controller?.store?.pagination.totalResults} ${
									e?.controller?.store?.filters.length > 0 ? 'filtrelenmi\u015F ' : ''
								}sonucu g\xF6r\xFCnt\xFCle`,
						},
					},
					'terms.history': {
						title: { value: 'Ge\xE7mi\u015F' },
						term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms} \xF6\u011Feden ${e.index + 1}., ${e.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: '\xD6neriler' },
						term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms} \xF6\u011Feden ${e.index + 1}., ${e.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Trend' },
						term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms} \xF6\u011Feden ${e.index + 1}., ${e.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: 'Filtreler' },
						applyButtonText: { value: 'Uygula' },
						clearButtonText: { value: 'T\xFCm\xFCn\xFC temizle' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Ara' } },
						closeSearchButton: { attributes: { 'aria-label': 'Aramay\u0131 kapat' } },
						clearSearchButton: { attributes: { 'aria-label': 'Aramay\u0131 temizle' } },
						submitSearchButton: { attributes: { 'aria-label': 'Aramay\u0131 g\xF6nder' } },
					},
					recommendationBundle: {
						seedText: { value: 'Bu \xFCr\xFCn' },
						ctaButtonText: { value: 'T\xFCm\xFCn\xFC sepete ekle' },
						ctaButtonSuccessText: { value: 'Paket eklendi!' },
						ctaSubtotalTitle: { value: (e) => `${e.cartStore.count} \xFCr\xFCn i\xE7in ara toplam` },
					},
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'Duraklat' : 'Oynat'),
							attributes: { 'aria-label': (e) => (e.isPlaying ? 'Slayt g\xF6sterisini duraklat' : 'Slayt g\xF6sterisine devam et') },
						},
						paginationButton: { attributes: { 'aria-label': (e) => `${e.totalDots} gruptan ${e.index + 1}. slayt grubuna git` } },
						nextButton: { attributes: { 'aria-label': (e) => `Sonraki slaytlar${e.isNextDisabled ? ' (devre d\u0131\u015F\u0131)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (e) => `\xD6nceki slaytlar${e.isPrevDisabled ? ' (devre d\u0131\u015F\u0131)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (e) =>
									e.hasClickHandler
										? `${e.imageAlt} g\xF6rmek i\xE7in t\u0131klay\u0131n`
										: `${e.imageAlt} ${e.slidesLength} slayttan ${e.index + 1}.`,
							},
						},
						srInstructions: {
							value: (e) =>
								`Slaytlar aras\u0131nda gezinmek i\xE7in ok tu\u015Flar\u0131n\u0131 kullan\u0131n. Otomatik oynatmay\u0131 duraklatmak i\xE7in bo\u015Fluk tu\u015Funa bas\u0131n. \u0130lk veya son slayt grubuna gitmek i\xE7in Home veya End tu\u015Funa bas\u0131n. ${
									e.touchDragging && 'Dokunmatik cihazlarda gezinmek i\xE7in sola veya sa\u011Fa kayd\u0131r\u0131n.'
								}`,
						},
					},
					sortBy: { label: { value: 'S\u0131ralama \xF6l\xE7\xFCt\xFC' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': 'Sonu\xE7 sekmeleri' } },
						tabButton: {
							attributes: {
								'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} sonu\xE7` : ''}`,
							},
						},
					},
					perPage: { label: { value: 'Sayfa ba\u015F\u0131na' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`${e?.facet?.field} filtre a\xE7\u0131l\u0131r men\xFCs\xFC, \u015Fu anda ${
										e?.selectedFacet?.field === e?.facet?.field ? 'kapal\u0131' : 'a\xE7\u0131k'
									} ${e?.facet?.values?.length ? e?.facet?.values?.length + ' se\xE7enek' : ''}`,
							},
						},
					},
					filterSummary: { title: { value: 'Mevcut filtreler' }, clearAllLabel: { value: 'T\xFCm\xFCn\xFC temizle' } },
					facet: {
						showMoreText: { value: 'Daha fazla g\xF6ster' },
						showLessText: { value: 'Daha az g\xF6ster' },
						clearAllText: { value: 'T\xFCm\xFCn\xFC temizle' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`${e?.facet?.label} filtre a\xE7\u0131l\u0131r men\xFCs\xFC, \u015Fu anda ${e?.facet?.collapsed ? 'kapal\u0131' : 'a\xE7\u0131k'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' se\xE7enek' : ''
									}`,
							},
						},
						submitRangeButton: { value: 'G\xF6nder' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (e) =>
									`${e?.label} a\xE7\u0131l\u0131r men\xFCs\xFC, ${e?.options?.length} se\xE7enek ${
										e?.selectedOptions?.length ? `, \u015Fu anda se\xE7ili se\xE7enek ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'devre d\u0131\u015F\u0131' : ''} ${e?.checkedState ? 'se\xE7ili' : 'se\xE7ili de\u011Fil'} radyo d\xFC\u011Fmesi`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': '\xF6nceki sayfaya git' } },
						next: { attributes: { 'aria-label': 'sonraki sayfaya git' } },
						first: { attributes: { 'aria-label': 'ilk sayfaya git' } },
						last: { attributes: { 'aria-label': (e) => `son sayfaya git ${e?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (e) => `${e?.page?.number}. sayfaya git` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} \xFCr\xFCn` } },
					result: {
						addToCartButtonText: { value: 'T\xFCm\xFCn\xFC sepete ekle', attributes: { 'aria-label': 'T\xFCm\xFCn\xFC sepete ekle' } },
						addToCartButtonSuccessText: { value: 'Eklendi!' },
						quickviewButtonText: { value: 'H\u0131zl\u0131 bak\u0131\u015F', attributes: { 'aria-label': 'H\u0131zl\u0131 bak\u0131\u015F' } },
					},
					overlayResult: {
						addToCartButtonText: { value: 'T\xFCm\xFCn\xFC sepete ekle', attributes: { 'aria-label': 'T\xFCm\xFCn\xFC sepete ekle' } },
						addToCartButtonSuccessText: { value: 'Eklendi!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Daha fazla y\xFCkle' } },
						progressText: { value: (e) => `${e?.pagination?.totalResults} \xFCr\xFCnden ${e?.pagination?.end} tanesini g\xF6r\xFCnt\xFClediniz` },
					},
					grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Daha az' } },
					filter: {
						filter: {
							attributes: { 'aria-label': (e) => `${e?.label ? `se\xE7ili filtreyi kald\u0131r ${e?.label} ${e?.value}` : e?.value || ''}` },
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (e) =>
									`${e?.facet?.label} kayd\u0131r\u0131c\u0131 tutamac\u0131, ge\xE7erli de\u011Fer ${e?.value}, ${
										e?.facet?.range?.low ? `minimum de\u011Fer ${e?.facet?.range?.low},` : ''
									} ${e?.facet?.range?.high ? `maksimum de\u011Fer ${e?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `se\xE7ili filtreyi kald\u0131r ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `${e?.facet?.label} - ${e?.value?.label} ile filtrele`
											: `${e?.value?.label} ile filtrele`
									}`,
							},
						},
					},
					facetListOptions: {
						listOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `se\xE7ili filtreyi kald\u0131r ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `${e?.facet?.label} - ${e?.value?.label} ile filtrele`
											: `${e?.value?.label} ile filtrele`
									}`,
							},
						},
					},
					facetHierarchyOptions: {
						hierarchyOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `se\xE7ili filtreyi kald\u0131r ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `${e?.facet?.label} - ${e?.value?.label} ile filtrele`
											: `${e?.value?.label} ile filtrele`
									}`,
							},
						},
					},
					facetGridOptions: {
						gridOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `se\xE7ili filtreyi kald\u0131r ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `${e?.facet?.label} - ${e?.value?.label} ile filtrele`
											: `${e?.value?.label} ile filtrele`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>Uyar\u0131:&nbsp;</b>' },
						infoText: { value: '<b>Bilgi:&nbsp;</b>' },
						errorText: { value: '<b>Hata:&nbsp;</b>' },
						reloadText: { value: 'Yeniden y\xFCkle' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'devre d\u0131\u015F\u0131' : ''} ${e?.checkedState ? 'i\u015Faretli' : 'i\u015Faretsiz'} onay kutusu`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': 'miktar' } },
						decrementButton: { attributes: { 'aria-label': 'miktar\u0131 azalt' } },
						incrementButton: { attributes: { 'aria-label': 'miktar\u0131 art\u0131r' } },
					},
					searchHeader: {
						titleText: {
							value: (e) => `${e?.pagination?.totalResults} sonu\xE7 g\xF6steriliyor
                ${e?.search?.query ? `<span class="ss__search-header__results-query">"${e?.search?.query.string}"</span> i\xE7in` : ''}`,
							attributes: {
								'aria-label': (e) => `\xDCr\xFCn \u0131zgaras\u0131nda \u015Fu anda ${e?.pagination?.totalResults} \xF6\u011Fe g\xF6steriliyor`,
							},
						},
						correctedQueryText: {
							value: (e) =>
								`<em>"${e?.search?.originalQuery?.string}"</em> i\xE7in sonu\xE7 bulunamad\u0131, bunun yerine <em>"${e?.search?.query?.string}"</em> i\xE7in sonu\xE7lar g\xF6steriliyor.`,
							attributes: {
								'aria-label': (e) =>
									`${e?.search?.originalQuery?.string} i\xE7in sonu\xE7 bulunamad\u0131, bunun yerine ${e?.search?.query?.string} i\xE7in sonu\xE7lar g\xF6steriliyor`,
							},
						},
						noResultsText: {
							value: (e) =>
								`${
									e?.search?.query
										? `<span>
                    <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> i\xE7in sonu\xE7 bulunamad\u0131.
                </span>`
										: '<span>Sonu\xE7 bulunamad\u0131.</span>'
								}`,
							attributes: { 'aria-label': (e) => `${e?.search?.query?.string} i\xE7in sonu\xE7 bulunamad\u0131` },
						},
						didYouMeanText: {
							value: (e) => `\u015Eunu mu demek istediniz: <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?`,
						},
						expandedSearchText: {
							value: (e) =>
								`"<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>" i\xE7in tam bir e\u015Fle\u015Fme bulamad\u0131k, ancak i\u015Fte benzer bir \u015Fey:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\xD6neriler' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Yaz\u0131m hatalar\u0131n\u0131 kontrol edin.</li><li class="ss__no-results__suggestions__list__option">Gereksiz anahtar kelimeleri kald\u0131r\u0131n (\xF6rn: "\xFCr\xFCnler").</li><li class="ss__no-results__suggestions__list__option">Arad\u0131\u011F\u0131n\u0131z\u0131 tan\u0131mlamak i\xE7in ba\u015Fka kelimeler kullan\u0131n.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': 'G\xF6rsel galerisi' } },
						zoomOutButton: { attributes: { 'aria-label': 'Uzakla\u015Ft\u0131r' } },
						zoomInButton: { attributes: { 'aria-label': 'Yak\u0131nla\u015Ft\u0131r' } },
						closeButton: { attributes: { 'aria-label': 'Galeriyi kapat' } },
						prevButton: { attributes: { 'aria-label': '\xD6nceki g\xF6rsel' } },
						nextButton: { attributes: { 'aria-label': 'Sonraki g\xF6rsel' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': 'H\u0131zl\u0131 bak\u0131\u015F' } },
						closeButton: { attributes: { 'aria-label': 'H\u0131zl\u0131 bak\u0131\u015F\u0131 kapat' } },
						addToCartButton: { value: 'Sepete ekle' },
						moreInfoButton: { value: 'Daha fazla bilgi' },
						loadingText: { value: 'Y\xFCkleniyor\u2026' },
					},
				};
				l.d(a, ['tr', 0, t]);
			},
		},
	]);
})();

//# sourceMappingURL=7088.1cd4ddd0.iframe.bundle.js.map
