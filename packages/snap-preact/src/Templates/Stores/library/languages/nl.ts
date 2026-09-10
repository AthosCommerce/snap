// Dutch (Nederlands)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const nl: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Automatisch aanvullen sluiten',
			attributes: {
				'aria-label': 'Automatisch aanvullen sluiten',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Geen resultaten gevonden voor "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Probeer een andere zoekopdracht.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Bekijk ${data?.controller?.store?.pagination.totalResults} ${data?.controller?.store?.filters.length > 0 ? 'gefilterde ' : ''}resultat${
					data?.controller?.store?.pagination?.totalResults == 1 ? '' : 'en'
				} voor "${data?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'Geschiedenis',
		},
		term: {
			attributes: {
				'aria-label': (data) => `item ${data.index + 1} van ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Suggesties',
		},
		term: {
			attributes: {
				'aria-label': (data) => `item ${data.index + 1} van ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Trending',
		},
		term: {
			attributes: {
				'aria-label': (data) => `item ${data.index + 1} van ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Filters',
		},
		applyButtonText: {
			value: 'Toepassen',
		},
		clearButtonText: {
			value: 'Alles wissen',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Zoeken',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Zoeken sluiten',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Zoekopdracht wissen',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Zoekopdracht verzenden',
			},
		},
	},
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'Chat openen',
				title: 'Chat openen',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Chat sluiten',
				title: 'Chat sluiten',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Chat openen',
				title: 'Chat openen',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Chat sluiten',
				title: 'Chat sluiten',
			},
		},
		headerLogo: {
			attributes: {
				alt: 'Chatlogo',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Nieuwe chat',
				title: 'Nieuwe chat',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Chatgeschiedenis',
				title: 'Chatgeschiedenis',
			},
		},
		historyTitle: {
			value: 'Geschiedenis',
		},
		historyClearButton: {
			value: 'wissen',
		},
		historyNewChatLabel: {
			value: 'Nieuwe chat',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Gespreksdetails',
			},
		},
		inspirationResultTitle: {
			value: "Inspiratiescenario's",
		},
		inspirationResultSubtitle: {
			value: 'Kies een stijlrichting om te verkennen',
		},
		productComparisonTitle: {
			value: 'Productvergelijking',
		},
		productComparisonSubtitle: {
			value: (data) => `${data?.count ?? ''} producten worden vergeleken`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Chatberichten',
			},
		},
		newMessagesButton: {
			value: 'Nieuwe berichten',
		},
		loadingVerbsProductQuery: {
			value: 'Nadenken, Zoeken, Analyseren, Details verzamelen',
		},
		loadingVerbsProductSearch: {
			value: 'Zoeken, Catalogus doorbladeren, Producten vinden, Resultaten selecteren',
		},
		loadingVerbsProductComparison: {
			value: 'Vergelijken, Analyseren, Evalueren, Opties afwegen',
		},
		loadingVerbsImageSearch: {
			value: 'Afbeelding analyseren, Identificeren, Zoeken, Matchen',
		},
		loadingVerbsProductSimilar: {
			value: 'Vergelijkbare artikelen vinden, Zoeken, Matchen, Selecteren',
		},
		loadingVerbsInspirationRequest: {
			value: 'Brainstormen, Verbeelden, Selecteren, Inspireren',
		},
		feedbackPrompt: {
			value: 'Hoe is uw ervaring tot nu toe?',
		},
		feedbackThanks: {
			value: 'Bedankt voor uw feedback',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Vind ik goed',
				title: 'Vind ik goed',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'Vind ik niet goed',
				title: 'Vind ik niet goed',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Feedback sluiten',
			},
		},
		comparisonsTitle: {
			value: (data) => `Producten vergelijken (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'wissen',
		},
		comparisonsAddText: {
			value: 'Toevoegen',
		},
		comparisonsCompareButton: {
			value: 'Vergelijken',
			attributes: {
				title: 'Vergelijken',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `${data?.name || 'product'} uit de vergelijking verwijderen`,
			},
		},
		chatUnavailableMessage: {
			value: 'De service is tijdelijk niet beschikbaar. Gebruik in de tussentijd gerust de zoekbalk hierboven om te vinden wat u zoekt!',
		},
		highVolumeMessage: {
			value: 'De chat is momenteel niet beschikbaar vanwege grote drukte.',
		},
		highVolumeSubMessage: {
			value: 'Gebruik in de tussentijd gerust de zoekbalk hierboven om te vinden wat u zoekt!',
		},
		newSessionButton: {
			value: 'Nieuwe sessie',
		},
		facetsTitle: {
			value: 'Filteren op:',
		},
		facetsApplyButton: {
			value: (data) => `Toepassen (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Filters wissen',
		},
		attachmentCompareTitle: {
			value: 'Deze producten vergelijken',
		},
		attachmentAskProductTitle: {
			value: 'Vraag stellen over dit product',
		},
		attachmentImageSimilarTitle: {
			value: 'Producten zoeken die op deze afbeelding lijken:',
		},
		attachmentImageName: {
			value: 'Afbeelding',
		},
		topicDriftScopeMessage: {
			value: 'Ik ben er om u te helpen met winkelen',
		},
		topicDriftScopeSubMessage: {
			value: 'Stel een vraag over producten, vergelijkingen of aanbevelingen',
		},
		topicDriftMessage: {
			value: 'Op zoek naar iets nieuws?',
		},
		topicDriftSubMessage: {
			value: 'Een nieuwe sessie starten voor betere hulp, of doorgaan in deze sessie?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Sluiten',
			},
		},
		inputPlaceholder: {
			value: 'Typ uw bericht...',
		},
		inputPlaceholderAskProduct: {
			value: 'Stel een vraag over dit product...',
		},
		inputPlaceholderCompare: {
			value: 'Wat wilt u vergelijken?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Stel een vraag over de vergeleken producten...',
		},
		inputPlaceholderAskImage: {
			value: 'Stel een vraag over deze afbeelding...',
		},
		inputPlaceholderAddCompare: {
			value: 'Voeg nog een product toe om te vergelijken...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Afbeelding uploaden',
				title: 'Afbeelding uploaden',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Bericht verzenden',
				title: 'Bericht verzenden',
			},
		},
		dropOverlayText: {
			value: 'Sleep de afbeelding hierheen om te uploaden',
		},
		poweredByText: {
			value: 'Mogelijk gemaakt door Athos Commerce.',
		},
		disclaimerText: {
			value: 'AI-assistent. Maakt soms fouten. Deel geen persoonlijke gegevens.',
		},
		privacyPolicyLinkText: {
			value: 'Privacybeleid',
		},
		expiredMessage: {
			value: 'Deze chat is verlopen. Start een nieuwe chat.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Nadenken',
		},
		searchingVerb: {
			value: 'Zoeken',
		},
		analyzingVerb: {
			value: 'Analyseren',
		},
		generatingVerb: {
			value: 'Genereren',
		},
		processingVerb: {
			value: 'Verwerken',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': (data) => `${data?.title ?? ''} sluiten`,
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': (data) => `${data?.item?.name ?? ''} openen`,
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': (data) => `${data?.item?.name ?? ''} wordt geladen`,
			},
		},
		removeButton: {
			attributes: {
				'aria-label': (data) => `${data?.item?.name ?? ''} verwijderen`,
			},
		},
		uploadFailedText: {
			value: (data) => `Uploaden mislukt - ${data?.item?.name ?? ''}`,
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': (data) => `Zoeken op "${data?.searchTerm ?? ''}"`,
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': (data) => `${data?.productName || 'product'} openen`,
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'Inspiratie bekijken',
				title: 'Inspiratie bekijken',
			},
		},
		closeInspirationButton: {
			value: 'Inspiratie sluiten',
			attributes: {
				'aria-label': 'Inspiratie sluiten',
				title: 'Inspiratie sluiten',
			},
		},
		exploreInspirationButton: {
			value: "Inspiratiescenario's verkennen",
			attributes: {
				'aria-label': "Inspiratiescenario's verkennen",
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Vergelijking bekijken',
				title: 'Vergelijking bekijken',
			},
		},
		closeComparisonButton: {
			value: 'Vergelijking sluiten',
			attributes: {
				'aria-label': 'Vergelijking sluiten',
				title: 'Vergelijking sluiten',
			},
		},
		exploreComparisonButton: {
			value: 'Vergelijkingsgegevens verkennen',
			attributes: {
				'aria-label': 'Vergelijkingsgegevens verkennen',
			},
		},
		showDetailsButton: {
			value: 'Details weergeven',
			attributes: {
				'aria-label': 'Vergelijkingsdetails weergeven',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Vraag over het product',
		},
		requestTypeProductComparison: {
			value: 'Producten vergelijken',
		},
		requestTypeProductFilter: {
			value: 'Producten filteren',
		},
		requestTypeProductSearch: {
			value: 'Producten zoeken',
		},
		requestTypeImageSearch: {
			value: 'Zoeken op afbeelding',
		},
		requestTypeProductSimilar: {
			value: 'Vergelijkbare producten zoeken',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': (data) => `Details van ${data?.attachment?.name ?? ''} bekijken`,
				title: (data) => `Details van ${data?.attachment?.name ?? ''} bekijken`,
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': (data) => (data?.filterOptions?.length ? `Filter: ${data.filterOptions[0].facetKey} = ${data.filterOptions[0].label}` : ''),
				title: (data) => (data?.filterOptions?.length ? `Filter: ${data.filterOptions[0].facetKey} = ${data.filterOptions[0].label}` : ''),
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': (data) => `${data?.hiddenFacetCount ?? 0} extra filters`,
				title: (data) => `${data?.hiddenFacetCount ?? 0} filters meer`,
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Productvergelijking',
			attributes: {
				'aria-label': 'Productvergelijking',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Kenmerk',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': (data) => `Details van ${data?.productName ?? ''} bekijken`,
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Productdetails worden geladen...',
		},
		quickview: {
			attributes: {
				'aria-label': 'Snelle weergave',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Snelle weergave sluiten',
			},
		},
		backToComparisonButton: {
			value: 'Terug naar de vergelijking',
			attributes: {
				'aria-label': 'Terug naar de vergelijking',
			},
		},
		backToInspirationButton: {
			value: 'Terug naar de inspiratie',
			attributes: {
				'aria-label': 'Terug naar de inspiratie',
			},
		},
		addToCartButton: {
			value: 'Aan winkelwagen toevoegen',
		},
		moreInfoButton: {
			value: 'Meer informatie',
		},
		similarButton: {
			value: 'Vergelijkbaar',
		},
		discussButton: {
			value: 'Bespreken',
		},
	},
	chatResult: {
		similarButton: {
			value: 'Vergelijkbaar',
			attributes: {
				'aria-label': (data) => `Producten tonen die lijken op ${data?.result?.display?.mappings?.core?.name || 'product'}`,
			},
		},
		compareButton: {
			value: 'Vergelijken',
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'product'} vergelijken`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Product'} toegevoegd aan de vergelijking`,
				title: 'Toegevoegd aan de vergelijking',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Over ${data?.result?.display?.mappings?.core?.name || 'product'} praten`,
				title: 'Over dit product praten',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'product'} aan winkelwagen toevoegen`,
				title: 'Aan winkelwagen toevoegen',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'product'} configureren`,
				title: 'Configureren',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'product'} openen`,
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Dit product',
		},
		ctaButtonText: {
			value: 'Alles aan winkelwagen toevoegen',
		},
		ctaButtonSuccessText: {
			value: 'Bundel toegevoegd!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Subtotaal voor ${data.cartStore.count} artikelen`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Pauzeren' : 'Afspelen'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Diavoorstelling pauzeren' : 'Diavoorstelling hervatten'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Ga naar diagroep ${data.index + 1} van ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Volgende dia's${data.isNextDisabled ? ' (uitgeschakeld)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Vorige dia's${data.isPrevDisabled ? ' (uitgeschakeld)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Klik om ${data.imageAlt} te bekijken` : `${data.imageAlt} ${data.index + 1} van ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Gebruik de pijltjestoetsen om tussen de dia's te navigeren. Druk op de spatiebalk om automatisch afspelen te pauzeren. Druk op Home of End om naar de eerste of laatste diagroep te gaan.${' '}${
					data.touchDragging && 'Veeg op aanraakapparaten naar links of rechts om te navigeren.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Sorteren op',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Resultaattabbladen',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} resultaten` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'Per pagina',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`filter-dropdown ${data?.facet?.field}, momenteel ${data?.selectedFacet?.field === data?.facet?.field ? 'ingeklapt' : 'geopend'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' opties' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Huidige filters',
		},
		clearAllLabel: {
			value: 'Alles wissen',
		},
	},
	facet: {
		showMoreText: {
			value: 'Meer weergeven',
		},
		showLessText: {
			value: 'Minder weergeven',
		},
		clearAllText: {
			value: 'Alles wissen',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`filter-dropdown ${data?.facet?.label}, momenteel ${data?.facet?.collapsed ? 'ingeklapt' : 'geopend'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' opties' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Verzenden',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} dropdown, ${data?.options?.length} opties ${
						data?.selectedOptions?.length ? `, momenteel geselecteerde optie is ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) =>
					`${data?.disabled ? 'uitgeschakelde' : ''} ${data?.checkedState ? 'geselecteerde' : 'niet-geselecteerde'} keuzerondje`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'ga naar de vorige pagina',
			},
		},
		next: {
			attributes: {
				'aria-label': 'ga naar de volgende pagina',
			},
		},
		first: {
			attributes: {
				'aria-label': 'ga naar de eerste pagina',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `ga naar de laatste pagina ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `ga naar pagina ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} producten`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Alles aan winkelwagen toevoegen',
			attributes: {
				'aria-label': 'Alles aan winkelwagen toevoegen',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Toegevoegd!',
		},
		quickviewButtonText: {
			value: 'Snelle weergave',
			attributes: {
				'aria-label': 'Snelle weergave',
			},
		},
		discussProductButton: {
			attributes: {
				'aria-label': 'Over dit product praten',
				title: 'Over dit product praten',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Alles aan winkelwagen toevoegen',
			attributes: {
				'aria-label': 'Alles aan winkelwagen toevoegen',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Toegevoegd!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Meer laden',
			},
		},
		progressText: {
			value: (data) => `U heeft ${data?.pagination?.end} van ${data?.pagination?.totalResults} producten bekeken`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Minder',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `geselecteerd filter verwijderen ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} schuifregelaar, huidige waarde ${data?.value}, ${
						data?.facet?.range?.low ? `minimumwaarde ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `maximumwaarde ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `geselecteerd filter verwijderen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filteren op ${data?.facet?.label} - ${data?.value?.label}`
							: `filteren op ${data?.value?.label}`
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
							? `geselecteerd filter verwijderen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filteren op ${data?.facet?.label} - ${data?.value?.label}`
							: `filteren op ${data?.value?.label}`
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
							? `geselecteerd filter verwijderen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filteren op ${data?.facet?.label} - ${data?.value?.label}`
							: `filteren op ${data?.value?.label}`
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
							? `geselecteerd filter verwijderen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filteren op ${data?.facet?.label} - ${data?.value?.label}`
							: `filteren op ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Waarschuwing:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Informatie:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Fout:&nbsp;</b>`,
		},
		reloadText: {
			value: `Opnieuw laden`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'uitgeschakeld' : ''} ${data?.checkedState ? 'aangevinkt' : 'niet aangevinkt'} selectievakje`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'aantal',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'aantal verlagen',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'aantal verhogen',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `${data?.pagination?.totalResults} resultat${data?.pagination?.totalResults == 1 ? '' : 'en'} weergegeven
                ${data?.search?.query ? `voor <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Er worden nu ${data?.pagination?.totalResults} items weergegeven in het productraster`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `Geen resultaten gevonden voor <em>"${data?.search?.originalQuery?.string}"</em>, in plaats daarvan worden resultaten getoond voor <em>"${data?.search?.query?.string}"</em>.`;
			},
			attributes: {
				'aria-label': (data) =>
					`Geen resultaten gevonden voor ${data?.search?.originalQuery?.string}, in plaats daarvan worden resultaten getoond voor ${data?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    Geen resultaten gevonden voor <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>Geen resultaten gevonden.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `Geen resultaten gevonden voor ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Bedoelde u <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `We konden geen exacte match vinden voor "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>", maar hier is iets soortgelijks:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Suggesties`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Controleer op spelfouten.</li><li class="ss__no-results__suggestions__list__option">Verwijder overbodige trefwoorden (bijv.: "producten").</li><li class="ss__no-results__suggestions__list__option">Gebruik andere woorden om te beschrijven wat u zoekt.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Afbeeldingengalerij',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Uitzoomen',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Inzoomen',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Galerij sluiten',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Vorige afbeelding',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Volgende afbeelding',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Snelle weergave',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Snelle weergave sluiten',
			},
		},
		addToCartButton: {
			value: 'Aan winkelwagen toevoegen',
		},
		moreInfoButton: {
			value: 'Meer informatie',
		},
		similarButton: {
			value: 'Vergelijkbaar',
		},
		discussButton: {
			value: 'Bespreken',
		},
		loadingText: {
			value: 'Laden…',
		},
	},
};
