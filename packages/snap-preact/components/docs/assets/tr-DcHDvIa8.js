const a = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'Otomatik tamamlamayı kapat', attributes: { 'aria-label': 'Otomatik tamamlamayı kapat' } },
		noResultsText: {
			value: (e) =>
				`<p>"${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}" için sonuç bulunamadı.</p><p>Lütfen başka bir arama deneyin.</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`"${e?.controller?.store?.search?.query?.string}" için ${e?.controller?.store?.pagination.totalResults} ${
					e?.controller?.store?.filters.length > 0 ? 'filtrelenmiş ' : ''
				}sonucu görüntüle`,
		},
	},
	'terms.history': {
		title: { value: 'Geçmiş' },
		term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms} öğeden ${e.index + 1}., ${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'Öneriler' },
		term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms} öğeden ${e.index + 1}., ${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'Trend' },
		term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms} öğeden ${e.index + 1}., ${e.term.value}` } },
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
		clearButtonText: { value: 'Tümünü temizle' },
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: { attributes: { placeholder: 'Ara' } },
		closeSearchButton: { attributes: { 'aria-label': 'Aramayı kapat' } },
		clearSearchButton: { attributes: { 'aria-label': 'Aramayı temizle' } },
		submitSearchButton: { attributes: { 'aria-label': 'Aramayı gönder' } },
	},
	recommendationBundle: {
		seedText: { value: 'Bu ürün' },
		ctaButtonText: { value: 'Tümünü sepete ekle' },
		ctaButtonSuccessText: { value: 'Paket eklendi!' },
		ctaSubtotalTitle: { value: (e) => `${e.cartStore.count} ürün için ara toplam` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? 'Duraklat' : 'Oynat'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'Slayt gösterisini duraklat' : 'Slayt gösterisine devam et') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `${e.totalDots} gruptan ${e.index + 1}. slayt grubuna git` } },
		nextButton: { attributes: { 'aria-label': (e) => `Sonraki slaytlar${e.isNextDisabled ? ' (devre dışı)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `Önceki slaytlar${e.isPrevDisabled ? ' (devre dışı)' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `${e.imageAlt} görmek için tıklayın` : `${e.imageAlt} ${e.slidesLength} slayttan ${e.index + 1}.`),
			},
		},
		srInstructions: {
			value: (e) =>
				`Slaytlar arasında gezinmek için ok tuşlarını kullanın. Otomatik oynatmayı duraklatmak için boşluk tuşuna basın. İlk veya son slayt grubuna gitmek için Home veya End tuşuna basın. ${
					e.touchDragging && 'Dokunmatik cihazlarda gezinmek için sola veya sağa kaydırın.'
				}`,
		},
	},
	sortBy: { label: { value: 'Sıralama ölçütü' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'Sonuç sekmeleri' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} sonuç` : ''}` },
		},
	},
	perPage: { label: { value: 'Sayfa başına' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.field} filtre açılır menüsü, şu anda ${e?.selectedFacet?.field === e?.facet?.field ? 'kapalı' : 'açık'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' seçenek' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'Mevcut filtreler' },
		clearAllLabel: { value: 'Tümünü temizle', attributes: { 'aria-label': 'Tümünü temizle' } },
		noFiltersText: { value: 'Uygulanan filtre yok' },
	},
	facet: {
		showMoreText: { value: 'Daha fazla göster' },
		showLessText: { value: 'Daha az göster' },
		clearAllText: { value: 'Tümünü temizle' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label} filtre açılır menüsü, şu anda ${e?.facet?.collapsed ? 'kapalı' : 'açık'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' seçenek' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'Gönder' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`${e?.label} açılır menüsü, ${e?.options?.length} seçenek ${
						e?.selectedOptions?.length ? `, şu anda seçili seçenek ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: { attributes: { 'aria-label': (e) => `${e?.disabled ? 'devre dışı' : ''} ${e?.checkedState ? 'seçili' : 'seçili değil'} radyo düğmesi` } },
	},
	pagination: {
		previous: { attributes: { 'aria-label': 'önceki sayfaya git' } },
		next: { attributes: { 'aria-label': 'sonraki sayfaya git' } },
		first: { attributes: { 'aria-label': 'ilk sayfaya git' } },
		last: { attributes: { 'aria-label': (e) => `son sayfaya git ${e?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (e) => `${e?.page?.number}. sayfaya git` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} ürün` } },
	result: {
		addToCartButtonText: { value: 'Tümünü sepete ekle', attributes: { 'aria-label': 'Tümünü sepete ekle' } },
		addToCartButtonSuccessText: { value: 'Eklendi!' },
		quickviewButtonText: { value: 'Hızlı bakış', attributes: { 'aria-label': 'Hızlı bakış' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'Tümünü sepete ekle', attributes: { 'aria-label': 'Tümünü sepete ekle' } },
		addToCartButtonSuccessText: { value: 'Eklendi!' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'Daha fazla yükle' } },
		progressText: { value: (e) => `${e?.pagination?.totalResults} üründen ${e?.pagination?.end} tanesini görüntülediniz` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Daha az' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `seçili filtreyi kaldır ${e?.label} ${e?.value}` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label} kaydırıcı tutamacı, geçerli değer ${e?.value}, ${
						e?.facet?.range?.low ? `minimum değer ${e?.facet?.range?.low},` : ''
					} ${e?.facet?.range?.high ? `maksimum değer ${e?.facet?.range?.high}` : ''}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value?.filtered
							? `seçili filtreyi kaldır ${e?.facet?.label || ''} - ${e?.value?.label}`
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
							? `seçili filtreyi kaldır ${e?.facet?.label || ''} - ${e?.value?.label}`
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
							? `seçili filtreyi kaldır ${e?.facet?.label || ''} - ${e?.value?.label}`
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
							? `seçili filtreyi kaldır ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} ile filtrele`
							: `${e?.value?.label} ile filtrele`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>Uyarı:&nbsp;</b>' },
		infoText: { value: '<b>Bilgi:&nbsp;</b>' },
		errorText: { value: '<b>Hata:&nbsp;</b>' },
		reloadText: { value: 'Yeniden yükle' },
	},
	checkbox: {
		checkbox: { attributes: { 'aria-label': (e) => `${e?.disabled ? 'devre dışı' : ''} ${e?.checkedState ? 'işaretli' : 'işaretsiz'} onay kutusu` } },
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'miktar' } },
		decrementButton: { attributes: { 'aria-label': 'miktarı azalt' } },
		incrementButton: { attributes: { 'aria-label': 'miktarı artır' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `${e?.pagination?.totalResults} sonuç gösteriliyor
                ${e?.search?.query ? `<span class="ss__search-header__results-query">"${e?.search?.query.string}"</span> için` : ''}`,
			attributes: { 'aria-label': (e) => `Ürün ızgarasında şu anda ${e?.pagination?.totalResults} öğe gösteriliyor` },
		},
		correctedQueryText: {
			value: (e) =>
				`<em>"${e?.search?.originalQuery?.string}"</em> için sonuç bulunamadı, bunun yerine <em>"${e?.search?.query?.string}"</em> için sonuçlar gösteriliyor.`,
			attributes: {
				'aria-label': (e) =>
					`${e?.search?.originalQuery?.string} için sonuç bulunamadı, bunun yerine ${e?.search?.query?.string} için sonuçlar gösteriliyor`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> için sonuç bulunamadı.
                </span>`
						: '<span>Sonuç bulunamadı.</span>'
				}`,
			attributes: { 'aria-label': (e) => `${e?.search?.query?.string} için sonuç bulunamadı` },
		},
		didYouMeanText: { value: (e) => `Şunu mu demek istediniz: <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
		expandedSearchText: {
			value: (e) =>
				`"<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>" için tam bir eşleşme bulamadık, ancak işte benzer bir şey:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'Öneriler' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Yazım hatalarını kontrol edin.</li><li class="ss__no-results__suggestions__list__option">Gereksiz anahtar kelimeleri kaldırın (örn: "ürünler").</li><li class="ss__no-results__suggestions__list__option">Aradığınızı tanımlamak için başka kelimeler kullanın.</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'Görsel galerisi' } },
		zoomOutButton: { attributes: { 'aria-label': 'Uzaklaştır' } },
		zoomInButton: { attributes: { 'aria-label': 'Yakınlaştır' } },
		closeButton: { attributes: { 'aria-label': 'Galeriyi kapat' } },
		prevButton: { attributes: { 'aria-label': 'Önceki görsel' } },
		nextButton: { attributes: { 'aria-label': 'Sonraki görsel' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'Hızlı bakış' } },
		closeButton: { attributes: { 'aria-label': 'Hızlı bakışı kapat' } },
		addToCartButton: { value: 'Sepete ekle' },
		moreInfoButton: { value: 'Daha fazla bilgi' },
		loadingText: { value: 'Yükleniyor…' },
	},
};
export { a as tr };
