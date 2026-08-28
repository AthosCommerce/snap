// Turkish (Türkçe)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const tr: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Otomatik tamamlamayı kapat',
			attributes: {
				'aria-label': 'Otomatik tamamlamayı kapat',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>"${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}" için sonuç bulunamadı.</p><p>Lütfen başka bir arama deneyin.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`"${data?.controller?.store?.search?.query?.string}" için ${data?.controller?.store?.pagination.totalResults} ${
					data?.controller?.store?.filters.length > 0 ? 'filtrelenmiş ' : ''
				}sonucu görüntüle`,
		},
	},
	'terms.history': {
		title: {
			value: 'Geçmiş',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms} öğeden ${data.index + 1}., ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Öneriler',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms} öğeden ${data.index + 1}., ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Trend',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms} öğeden ${data.index + 1}., ${data.term.value}`,
			},
		},
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: {
		label: {},
	},
	sidebar: {
		titleText: {
			value: 'Filtreler',
		},
		applyButtonText: {
			value: 'Uygula',
		},
		clearButtonText: {
			value: 'Tümünü temizle',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Ara',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Aramayı kapat',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Aramayı temizle',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Aramayı gönder',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Bu ürün',
		},
		ctaButtonText: {
			value: 'Tümünü sepete ekle',
		},
		ctaButtonSuccessText: {
			value: 'Paket eklendi!',
		},
		ctaSubtotalTitle: {
			value: (data) => `${data.cartStore.count} ürün için ara toplam`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Duraklat' : 'Oynat'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Slayt gösterisini duraklat' : 'Slayt gösterisine devam et'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `${data.totalDots} gruptan ${data.index + 1}. slayt grubuna git`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Sonraki slaytlar${data.isNextDisabled ? ' (devre dışı)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Önceki slaytlar${data.isPrevDisabled ? ' (devre dışı)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `${data.imageAlt} görmek için tıklayın` : `${data.imageAlt} ${data.slidesLength} slayttan ${data.index + 1}.`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Slaytlar arasında gezinmek için ok tuşlarını kullanın. Otomatik oynatmayı duraklatmak için boşluk tuşuna basın. İlk veya son slayt grubuna gitmek için Home veya End tuşuna basın.${' '}${
					data.touchDragging && 'Dokunmatik cihazlarda gezinmek için sola veya sağa kaydırın.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Sıralama ölçütü',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Sonuç sekmeleri',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} sonuç` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'Sayfa başına',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.field} filtre açılır menüsü, şu anda ${data?.selectedFacet?.field === data?.facet?.field ? 'kapalı' : 'açık'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' seçenek' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Mevcut filtreler',
		},
		clearAllLabel: {
			value: 'Tümünü temizle',
		},
	},
	facet: {
		showMoreText: {
			value: 'Daha fazla göster',
		},
		showLessText: {
			value: 'Daha az göster',
		},
		clearAllText: {
			value: 'Tümünü temizle',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} filtre açılır menüsü, şu anda ${data?.facet?.collapsed ? 'kapalı' : 'açık'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' seçenek' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Gönder',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} açılır menüsü, ${data?.options?.length} seçenek ${
						data?.selectedOptions?.length ? `, şu anda seçili seçenek ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'devre dışı' : ''} ${data?.checkedState ? 'seçili' : 'seçili değil'} radyo düğmesi`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'önceki sayfaya git',
			},
		},
		next: {
			attributes: {
				'aria-label': 'sonraki sayfaya git',
			},
		},
		first: {
			attributes: {
				'aria-label': 'ilk sayfaya git',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `son sayfaya git ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `${data?.page?.number}. sayfaya git`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} ürün`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Tümünü sepete ekle',
		},
		addToCartButtonSuccessText: {
			value: 'Eklendi!',
		},
		quickviewButtonText: {
			value: 'Hızlı bakış',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Tümünü sepete ekle',
		},
		addToCartButtonSuccessText: {
			value: 'Eklendi!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Daha fazla yükle',
			},
		},
		progressText: {
			value: (data) => `${data?.pagination?.totalResults} üründen ${data?.pagination?.end} tanesini görüntülediniz`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Daha az',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `seçili filtreyi kaldır ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} kaydırıcı tutamacı, geçerli değer ${data?.value}, ${
						data?.facet?.range?.low ? `minimum değer ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `maksimum değer ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `seçili filtreyi kaldır ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} ile filtrele`
							: `${data?.value?.label} ile filtrele`
					}`,
			},
		},
	},
	facetListOptions: {
		listOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `seçili filtreyi kaldır ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} ile filtrele`
							: `${data?.value?.label} ile filtrele`
					}`,
			},
		},
	},
	facetHierarchyOptions: {
		hierarchyOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `seçili filtreyi kaldır ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} ile filtrele`
							: `${data?.value?.label} ile filtrele`
					}`,
			},
		},
	},
	facetGridOptions: {
		gridOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `seçili filtreyi kaldır ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} ile filtrele`
							: `${data?.value?.label} ile filtrele`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Uyarı:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Bilgi:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Hata:&nbsp;</b>`,
		},
		reloadText: {
			value: `Yeniden yükle`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'devre dışı' : ''} ${data?.checkedState ? 'işaretli' : 'işaretsiz'} onay kutusu`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'miktar',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'miktarı azalt',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'miktarı artır',
			},
		},
	},
	// toggle: {
	// 	toggleSwitch: {
	// 		attributes: {
	// 			'aria-label': (data) =>
	// 				`currently ${data?.toggledState ? 'selected' : 'not selected'} toggle switch ${data?.label ? `for ${data?.label}` : ''} `,
	// 		},
	// 	},
	// },
	// terms: {
	// 	term: {
	// 		value: (data) => `${data?.term?.value}`,
	// 		attributes: {
	// 			'aria-label': (data) => `item ${(data?.index || 0) + 1} of ${data?.numberOfTerms}, ${data?.term?.value}`,
	// 		},
	// 	},
	// },
	searchHeader: {
		titleText: {
			value: (data) => {
				return `${data?.pagination?.totalResults} sonuç gösteriliyor
                ${data?.search?.query ? `<span class="ss__search-header__results-query">"${data?.search?.query.string}"</span> için` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Ürün ızgarasında şu anda ${data?.pagination?.totalResults} öğe gösteriliyor`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `<em>"${data?.search?.originalQuery?.string}"</em> için sonuç bulunamadı, bunun yerine <em>"${data?.search?.query?.string}"</em> için sonuçlar gösteriliyor.`;
			},
			attributes: {
				'aria-label': (data) =>
					`${data?.search?.originalQuery?.string} için sonuç bulunamadı, bunun yerine ${data?.search?.query?.string} için sonuçlar gösteriliyor`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span> için sonuç bulunamadı.
                </span>`
						: `<span>Sonuç bulunamadı.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `${data?.search?.query?.string} için sonuç bulunamadı`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Şunu mu demek istediniz: <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `"<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>" için tam bir eşleşme bulamadık, ancak işte benzer bir şey:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Öneriler`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Yazım hatalarını kontrol edin.</li><li class="ss__no-results__suggestions__list__option">Gereksiz anahtar kelimeleri kaldırın (örn: "ürünler").</li><li class="ss__no-results__suggestions__list__option">Aradığınızı tanımlamak için başka kelimeler kullanın.</li></ul>',
		},
		// contactsTitleText: {
		// 	value: `Vous ne trouvez toujours pas ce que vous cherchez? <a href="/contact-us">Contactez-nous</a>.`,
		// },
		// contactsList: {
		// 	value: `<div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Adresse</h4>
		//                 <p class="ss__no-results__contact__detail__content">123 Adresse Ville, État, Code postal</p>
		//             </div>
		//             <div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Heures</h4>
		//                 <p class="ss__no-results__contact__detail__content">Lundi - Samedi, 00:00am - 00:00pm Samedi, 00:00am - 00:00pm</p>
		//             </div>
		//             <div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Téléphone</h4>
		//                 <p class="ss__no-results__contact__detail__content"><a href="tel:1234567890">123-456-7890</a></p>
		//             </div>
		//             <div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Email</h4>
		//                 <p class="ss__no-results__contact__detail__content"><a href="mailto:email@site.com">email@site.com</a></p>
		//             </div>`,
		// },
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Görsel galerisi',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Uzaklaştır',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Yakınlaştır',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Galeriyi kapat',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Önceki görsel',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Sonraki görsel',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Hızlı bakış',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Hızlı bakışı kapat',
			},
		},
		addToCartButton: {
			value: 'Sepete ekle',
		},
		moreInfoButton: {
			value: 'Daha fazla bilgi',
		},
		loadingText: {
			value: 'Yükleniyor…',
		},
	},
};
