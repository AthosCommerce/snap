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
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'Sohbeti aç',
				title: 'Sohbeti aç',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Sohbeti kapat',
				title: 'Sohbeti kapat',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Sohbeti aç',
				title: 'Sohbeti aç',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Sohbeti kapat',
				title: 'Sohbeti kapat',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Yeni sohbet',
				title: 'Yeni sohbet',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Sohbet geçmişi',
				title: 'Sohbet geçmişi',
			},
		},
		historyTitle: {
			value: 'Geçmiş',
		},
		historyClearButton: {
			value: 'temizle',
		},
		historyNewChatLabel: {
			value: 'Yeni sohbet',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Görüşme ayrıntıları',
			},
		},
		inspirationResultTitle: {
			value: 'İlham senaryoları',
		},
		inspirationResultSubtitle: {
			value: 'Keşfetmek için bir stil yönü seçin',
		},
		productComparisonTitle: {
			value: 'Ürün karşılaştırması',
		},
		productComparisonSubtitle: {
			value: (data) => `${data?.count ?? ''} ürün karşılaştırılıyor`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Sohbet mesajları',
			},
		},
		newMessagesButton: {
			value: 'Yeni mesajlar',
		},
		loadingVerbsProductQuery: {
			value: 'Düşünüyor, Arıyor, Analiz ediyor, Ayrıntıları topluyor',
		},
		loadingVerbsProductSearch: {
			value: 'Arıyor, Kataloğu tarıyor, Ürünleri buluyor, Sonuçları seçiyor',
		},
		loadingVerbsProductComparison: {
			value: 'Karşılaştırıyor, Analiz ediyor, Değerlendiriyor, Seçenekleri tartıyor',
		},
		loadingVerbsImageSearch: {
			value: 'Görseli analiz ediyor, Tanımlıyor, Arıyor, Eşleştiriyor',
		},
		loadingVerbsProductSimilar: {
			value: 'Benzer ürünleri buluyor, Arıyor, Eşleştiriyor, Seçiyor',
		},
		loadingVerbsInspirationRequest: {
			value: 'Fikir üretiyor, Hayal ediyor, Seçiyor, İlham veriyor',
		},
		feedbackPrompt: {
			value: 'Şimdiye kadarki deneyiminiz nasıl?',
		},
		feedbackThanks: {
			value: 'Geri bildiriminiz için teşekkürler',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Beğendim',
				title: 'Beğendim',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'Beğenmedim',
				title: 'Beğenmedim',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Geri bildirimi kapat',
			},
		},
		comparisonsTitle: {
			value: (data) => `Ürünleri karşılaştır (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'temizle',
		},
		comparisonsAddText: {
			value: 'Ekle',
		},
		comparisonsCompareButton: {
			value: 'Karşılaştır',
			attributes: {
				title: 'Karşılaştır',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `Karşılaştırmadan kaldır: ${data?.name || 'ürün'}`,
			},
		},
		chatUnavailableMessage: {
			value: 'Hizmet geçici olarak kullanılamıyor. Bu sırada ihtiyacınız olanı bulmak için yukarıdaki arama çubuğunu kullanın!',
		},
		highVolumeMessage: {
			value: 'Yoğun talep nedeniyle sohbet şu anda kullanılamıyor.',
		},
		highVolumeSubMessage: {
			value: 'Bu sırada ihtiyacınız olanı bulmak için yukarıdaki arama çubuğunu kullanın!',
		},
		newSessionButton: {
			value: 'Yeni oturum',
		},
		facetsTitle: {
			value: 'Filtrele:',
		},
		facetsApplyButton: {
			value: (data) => `Uygula (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Filtreleri temizle',
		},
		attachmentCompareTitle: {
			value: 'Bu ürünleri karşılaştır',
		},
		attachmentAskProductTitle: {
			value: 'Bu ürün hakkında soru sor',
		},
		attachmentImageSimilarTitle: {
			value: 'Bu görsele benzer ürünleri ara:',
		},
		topicDriftScopeMessage: {
			value: 'Alışverişinizde size yardımcı olmak için buradayım',
		},
		topicDriftScopeSubMessage: {
			value: 'Ürünler, karşılaştırmalar veya öneriler hakkında soru sormayı deneyin',
		},
		topicDriftMessage: {
			value: 'Yeni bir şey mi arıyorsunuz?',
		},
		topicDriftSubMessage: {
			value: 'Daha iyi yardım için yeni bir oturum başlatmak mı, yoksa bu oturuma devam etmek mi istersiniz?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Kapat',
			},
		},
		inputPlaceholder: {
			value: 'Mesajınızı yazın...',
		},
		inputPlaceholderAskProduct: {
			value: 'Bu ürün hakkında soru sorun...',
		},
		inputPlaceholderCompare: {
			value: 'Neyi karşılaştırmak istersiniz?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Karşılaştırılan ürünler hakkında soru sorun...',
		},
		inputPlaceholderAskImage: {
			value: 'Bu görsel hakkında soru sorun...',
		},
		inputPlaceholderAddCompare: {
			value: 'Karşılaştırmak için başka bir ürün ekleyin...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Görsel yükle',
				title: 'Görsel yükle',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Mesaj gönder',
				title: 'Mesaj gönder',
			},
		},
		dropOverlayText: {
			value: 'Yüklemek için görseli bırakın',
		},
		disclaimerText: {
			value: 'Yapay zekâ destekli asistan. Bazen hata yapabilir. Kişisel verilerinizi paylaşmaktan kaçının.',
		},
		privacyPolicyLinkText: {
			value: 'Gizlilik politikası',
		},
		expiredMessage: {
			value: 'Bu sohbetin süresi doldu. Lütfen yeni bir sohbet başlatın.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Düşünüyor',
		},
		searchingVerb: {
			value: 'Arıyor',
		},
		analyzingVerb: {
			value: 'Analiz ediyor',
		},
		generatingVerb: {
			value: 'Oluşturuyor',
		},
		processingVerb: {
			value: 'İşliyor',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'Kapat',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': 'Öğeyi aç',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': 'Öğe yükleniyor',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': 'Öğeyi kaldır',
			},
		},
		uploadFailedText: {
			value: 'Dosya yüklenemedi',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'Bu terimi ara',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'Ürünü aç',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'İlhamı görüntüle',
				title: 'İlhamı görüntüle',
			},
		},
		closeInspirationButton: {
			value: 'İlhamı kapat',
			attributes: {
				'aria-label': 'İlhamı kapat',
				title: 'İlhamı kapat',
			},
		},
		exploreInspirationButton: {
			value: 'İlham senaryolarını keşfet',
			attributes: {
				'aria-label': 'İlham senaryolarını keşfet',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Karşılaştırmayı görüntüle',
				title: 'Karşılaştırmayı görüntüle',
			},
		},
		closeComparisonButton: {
			value: 'Karşılaştırmayı kapat',
			attributes: {
				'aria-label': 'Karşılaştırmayı kapat',
				title: 'Karşılaştırmayı kapat',
			},
		},
		exploreComparisonButton: {
			value: 'Karşılaştırma verilerini keşfet',
			attributes: {
				'aria-label': 'Karşılaştırma verilerini keşfet',
			},
		},
		showDetailsButton: {
			value: 'Ayrıntıları göster',
			attributes: {
				'aria-label': 'Karşılaştırma ayrıntılarını göster',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Ürün hakkında soruluyor',
		},
		requestTypeProductComparison: {
			value: 'Ürünler karşılaştırılıyor',
		},
		requestTypeProductFilter: {
			value: 'Ürünler filtreleniyor',
		},
		requestTypeProductSearch: {
			value: 'Ürünler aranıyor',
		},
		requestTypeImageSearch: {
			value: 'Görselle aranıyor',
		},
		requestTypeProductSimilar: {
			value: 'Benzer ürünler aranıyor',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'Ürün ayrıntılarını görüntüle',
				title: 'Ürün ayrıntılarını görüntüle',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': 'Uygulanan filtre',
				title: 'Uygulanan filtre',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': 'Ek filtreler',
				title: 'Ek filtreler',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Ürün karşılaştırması',
			attributes: {
				'aria-label': 'Ürün karşılaştırması',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Özellik',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'Ürün ayrıntılarını görüntüle',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Ürün ayrıntıları yükleniyor...',
		},
		backToComparisonButton: {
			value: 'Karşılaştırmaya geri dön',
			attributes: {
				'aria-label': 'Karşılaştırmaya geri dön',
			},
		},
		backToInspirationButton: {
			value: 'İlhama geri dön',
			attributes: {
				'aria-label': 'İlhama geri dön',
			},
		},
		addToCartButton: {
			value: 'Sepete ekle',
		},
		similarButton: {
			value: 'Benzerler',
		},
		discussButton: {
			value: 'Sohbet et',
		},
		inStockText: {
			value: 'Stokta',
		},
		outOfStockText: {
			value: 'Stokta yok',
		},
		unavailableText: {
			value: 'kullanılamıyor',
		},
		variantsGroup: {
			attributes: {
				'aria-label': 'Varyant seçimi',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': 'Ürün bilgileri',
			},
		},
	},
	chatResult: {
		similarButton: {
			value: 'Benzerler',
			attributes: {
				'aria-label': (data) => `Benzerlerini göster: ${data?.result?.display?.mappings?.core?.name || 'ürün'}`,
			},
		},
		compareButton: {
			value: 'Karşılaştır',
			attributes: {
				'aria-label': (data) => `Karşılaştır: ${data?.result?.display?.mappings?.core?.name || 'ürün'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Ürün'} karşılaştırmaya eklendi`,
				title: 'Karşılaştırmaya eklendi',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Hakkında sohbet et: ${data?.result?.display?.mappings?.core?.name || 'ürün'}`,
				title: 'Ürün hakkında sohbet et',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `Sepete ekle: ${data?.result?.display?.mappings?.core?.name || 'ürün'}`,
				title: 'Sepete ekle',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `Yapılandır: ${data?.result?.display?.mappings?.core?.name || 'ürün'}`,
				title: 'Yapılandır',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `Aç: ${data?.result?.display?.mappings?.core?.name || 'ürün'}`,
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
			attributes: {
				'aria-label': 'Tümünü sepete ekle',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Eklendi!',
		},
		quickviewButtonText: {
			value: 'Hızlı bakış',
			attributes: {
				'aria-label': 'Hızlı bakış',
			},
		},
		discussProductButton: {
			attributes: {
				'aria-label': 'Bu ürün hakkında sohbet et',
				title: 'Bu ürün hakkında sohbet et',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Tümünü sepete ekle',
			attributes: {
				'aria-label': 'Tümünü sepete ekle',
			},
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
