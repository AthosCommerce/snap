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
		loadingText: {
			value: 'Laden…',
		},
	},
};
