// Italian (Italiano)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const it: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Chiudi completamento automatico',
			attributes: {
				'aria-label': 'Chiudi completamento automatico',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Nessun risultato trovato per "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Prova con un'altra ricerca.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Visualizza ${data?.controller?.store?.pagination.totalResults} risultat${
					data?.controller?.store?.pagination?.totalResults == 1 ? 'o' : 'i'
				}${data?.controller?.store?.filters.length > 0 ? ' filtrati' : ''} per "${data?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'Cronologia',
		},
		term: {
			attributes: {
				'aria-label': (data) => `elemento ${data.index + 1} di ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Suggerimenti',
		},
		term: {
			attributes: {
				'aria-label': (data) => `elemento ${data.index + 1} di ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Di tendenza',
		},
		term: {
			attributes: {
				'aria-label': (data) => `elemento ${data.index + 1} di ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Filtri',
		},
		applyButtonText: {
			value: 'Applica',
		},
		clearButtonText: {
			value: 'Cancella tutto',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Cerca',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Chiudi ricerca',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Cancella ricerca',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Invia ricerca',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Questo prodotto',
		},
		ctaButtonText: {
			value: 'Aggiungi tutto al carrello',
		},
		ctaButtonSuccessText: {
			value: 'Pacchetto aggiunto!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Subtotale per ${data.cartStore.count} articoli`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Pausa' : 'Riproduci'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Metti in pausa la presentazione' : 'Riprendi la presentazione'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Vai al gruppo di diapositive ${data.index + 1} di ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Diapositive successive${data.isNextDisabled ? ' (disabilitato)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Diapositive precedenti${data.isPrevDisabled ? ' (disabilitato)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Clicca per visualizzare ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} di ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Usa i tasti freccia per navigare tra le diapositive. Premi la barra spaziatrice per mettere in pausa la riproduzione automatica. Premi Home o Fine per andare al primo o all'ultimo gruppo di diapositive.${' '}${
					data.touchDragging && 'Sui dispositivi touch, scorri a sinistra o a destra per navigare.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Ordina per',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Schede dei risultati',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} risultati` : ''}`,
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
					`menu a tendina del filtro ${data?.facet?.field}, attualmente ${data?.selectedFacet?.field === data?.facet?.field ? 'chiuso' : 'aperto'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' opzioni' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Filtri attuali',
		},
		clearAllLabel: {
			value: 'Cancella tutto',
		},
	},
	facet: {
		showMoreText: {
			value: 'Mostra di più',
		},
		showLessText: {
			value: 'Mostra di meno',
		},
		clearAllText: {
			value: 'Cancella tutto',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`menu a tendina del filtro ${data?.facet?.label}, attualmente ${data?.facet?.collapsed ? 'chiuso' : 'aperto'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' opzioni' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Invia',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`menu a tendina ${data?.label}, ${data?.options?.length} opzioni ${
						data?.selectedOptions?.length ? `, l'opzione attualmente selezionata è ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) =>
					`pulsante di opzione ${data?.disabled ? 'disabilitato' : ''} ${data?.checkedState ? 'selezionato' : 'non selezionato'}`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'vai alla pagina precedente',
			},
		},
		next: {
			attributes: {
				'aria-label': 'vai alla pagina successiva',
			},
		},
		first: {
			attributes: {
				'aria-label': 'vai alla prima pagina',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `vai all'ultima pagina ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `vai alla pagina ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} prodotti`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Aggiungi tutto al carrello',
		},
		addToCartButtonSuccessText: {
			value: 'Aggiunto!',
		},
		quickviewButtonText: {
			value: 'Anteprima rapida',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Aggiungi tutto al carrello',
		},
		addToCartButtonSuccessText: {
			value: 'Aggiunto!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Carica altro',
			},
		},
		progressText: {
			value: (data) => `Hai visualizzato ${data?.pagination?.end} di ${data?.pagination?.totalResults} prodotti`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Meno',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `rimuovi filtro selezionato ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`cursore di ${data?.facet?.label}, valore attuale ${data?.value}, ${
						data?.facet?.range?.low ? `valore minimo ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `valore massimo ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `rimuovi filtro selezionato ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtra per ${data?.facet?.label} - ${data?.value?.label}`
							: `filtra per ${data?.value?.label}`
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
							? `rimuovi filtro selezionato ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtra per ${data?.facet?.label} - ${data?.value?.label}`
							: `filtra per ${data?.value?.label}`
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
							? `rimuovi filtro selezionato ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtra per ${data?.facet?.label} - ${data?.value?.label}`
							: `filtra per ${data?.value?.label}`
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
							? `rimuovi filtro selezionato ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtra per ${data?.facet?.label} - ${data?.value?.label}`
							: `filtra per ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Avviso:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Informazione:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Errore:&nbsp;</b>`,
		},
		reloadText: {
			value: `Ricarica`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) =>
					`casella di controllo ${data?.disabled ? 'disabilitata' : ''} ${data?.checkedState ? 'selezionata' : 'non selezionata'}`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'quantità',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'diminuisci quantità',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'aumenta quantità',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `Visualizzazione di ${data?.pagination?.totalResults} risultat${data?.pagination?.totalResults == 1 ? 'o' : 'i'}
                ${data?.search?.query ? `per <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Vengono ora visualizzati ${data?.pagination?.totalResults} articoli nella griglia dei prodotti`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `Nessun risultato trovato per <em>"${data?.search?.originalQuery?.string}"</em>, vengono mostrati invece i risultati per <em>"${data?.search?.query?.string}"</em>.`;
			},
			attributes: {
				'aria-label': (data) =>
					`Nessun risultato trovato per ${data?.search?.originalQuery?.string}, vengono mostrati invece i risultati per ${data?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    Nessun risultato trovato per <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>Nessun risultato trovato.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `Nessun risultato trovato per ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Forse cercavi <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `Non siamo riusciti a trovare una corrispondenza esatta per "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>", ma ecco qualcosa di simile:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Suggerimenti`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Controlla eventuali errori di ortografia.</li><li class="ss__no-results__suggestions__list__option">Rimuovi eventuali parole chiave ridondanti (es: "prodotti").</li><li class="ss__no-results__suggestions__list__option">Usa altre parole per descrivere ciò che stai cercando.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Galleria immagini',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Riduci zoom',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Aumenta zoom',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Chiudi galleria',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Immagine precedente',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Immagine successiva',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Anteprima rapida',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': "Chiudi l'anteprima rapida",
			},
		},
		addToCartButton: {
			value: 'Aggiungi al carrello',
		},
		moreInfoButton: {
			value: 'Maggiori informazioni',
		},
		loadingText: {
			value: 'Caricamento…',
		},
	},
};
