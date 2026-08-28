// German (Deutsch)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const de: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Autovervollständigung schließen',
			attributes: {
				'aria-label': 'Autovervollständigung schließen',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Keine Ergebnisse gefunden für "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Bitte versuchen Sie eine andere Suche.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`${data?.controller?.store?.pagination.totalResults} ${data?.controller?.store?.filters.length > 0 ? 'gefilterte ' : ''}Ergebnis${
					data?.controller?.store?.pagination?.totalResults == 1 ? '' : 'se'
				} für "${data?.controller?.store?.search?.query?.string}" anzeigen`,
		},
	},
	'terms.history': {
		title: {
			value: 'Verlauf',
		},
		term: {
			attributes: {
				'aria-label': (data) => `Element ${data.index + 1} von ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Vorschläge',
		},
		term: {
			attributes: {
				'aria-label': (data) => `Element ${data.index + 1} von ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Trend',
		},
		term: {
			attributes: {
				'aria-label': (data) => `Element ${data.index + 1} von ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Filter',
		},
		applyButtonText: {
			value: 'Anwenden',
		},
		clearButtonText: {
			value: 'Alle löschen',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Suche',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Suche schließen',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Suche löschen',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Suche absenden',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Dieses Produkt',
		},
		ctaButtonText: {
			value: 'Alle in den Warenkorb legen',
		},
		ctaButtonSuccessText: {
			value: 'Paket hinzugefügt!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Zwischensumme für ${data.cartStore.count} Artikel`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Pause' : 'Abspielen'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Diashow pausieren' : 'Diashow fortsetzen'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Zu Foliengruppe ${data.index + 1} von ${data.totalDots} wechseln`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Nächste Folien${data.isNextDisabled ? ' (deaktiviert)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Vorherige Folien${data.isPrevDisabled ? ' (deaktiviert)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Klicken, um ${data.imageAlt} anzuzeigen` : `${data.imageAlt} ${data.index + 1} von ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Verwenden Sie die Pfeiltasten, um zwischen den Folien zu navigieren. Drücken Sie die Leertaste, um die automatische Wiedergabe zu pausieren. Drücken Sie Pos1 oder Ende, um zur ersten oder letzten Foliengruppe zu springen.${' '}${
					data.touchDragging && 'Wischen Sie auf Touch-Geräten nach links oder rechts, um zu navigieren.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Sortieren nach',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Ergebnis-Tabs',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} Ergebnisse` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'Pro Seite',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`Filter-Dropdown ${data?.facet?.field}, derzeit ${data?.selectedFacet?.field === data?.facet?.field ? 'eingeklappt' : 'geöffnet'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' Optionen' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Aktuelle Filter',
		},
		clearAllLabel: {
			value: 'Alle löschen',
		},
	},
	facet: {
		showMoreText: {
			value: 'Mehr anzeigen',
		},
		showLessText: {
			value: 'Weniger anzeigen',
		},
		clearAllText: {
			value: 'Alle löschen',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`Filter-Dropdown ${data?.facet?.label}, derzeit ${data?.facet?.collapsed ? 'eingeklappt' : 'geöffnet'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' Optionen' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Absenden',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} Dropdown, ${data?.options?.length} Optionen ${
						data?.selectedOptions?.length ? `, derzeit ausgewählte Option ist ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'deaktiviertes' : ''} ${data?.checkedState ? 'ausgewähltes' : 'nicht ausgewähltes'} Optionsfeld`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'Zur vorherigen Seite',
			},
		},
		next: {
			attributes: {
				'aria-label': 'Zur nächsten Seite',
			},
		},
		first: {
			attributes: {
				'aria-label': 'Zur ersten Seite',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `Zur letzten Seite ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `Zur Seite ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} Produkte`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Alle in den Warenkorb legen',
			attributes: {
				'aria-label': 'Alle in den Warenkorb legen',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Hinzugefügt!',
		},
		quickviewButtonText: {
			value: 'Schnellansicht',
			attributes: {
				'aria-label': 'Schnellansicht',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Alle in den Warenkorb legen',
			attributes: {
				'aria-label': 'Alle in den Warenkorb legen',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Hinzugefügt!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Mehr laden',
			},
		},
		progressText: {
			value: (data) => `Sie haben ${data?.pagination?.end} von ${data?.pagination?.totalResults} Produkten angesehen`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Weniger',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `Ausgewählten Filter ${data?.label} ${data?.value} entfernen`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} Schieberegler, aktueller Wert ${data?.value}, ${
						data?.facet?.range?.low ? `Mindestwert ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `Höchstwert ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `Ausgewählten Filter entfernen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `Filtern nach ${data?.facet?.label} - ${data?.value?.label}`
							: `Filtern nach ${data?.value?.label}`
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
							? `Ausgewählten Filter entfernen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `Filtern nach ${data?.facet?.label} - ${data?.value?.label}`
							: `Filtern nach ${data?.value?.label}`
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
							? `Ausgewählten Filter entfernen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `Filtern nach ${data?.facet?.label} - ${data?.value?.label}`
							: `Filtern nach ${data?.value?.label}`
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
							? `Ausgewählten Filter entfernen ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `Filtern nach ${data?.facet?.label} - ${data?.value?.label}`
							: `Filtern nach ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Warnung:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Information:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Fehler:&nbsp;</b>`,
		},
		reloadText: {
			value: `Neu laden`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) =>
					`${data?.disabled ? 'deaktiviertes' : ''} ${data?.checkedState ? 'ausgewähltes' : 'nicht ausgewähltes'} Kontrollkästchen`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'Menge',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'Menge verringern',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'Menge erhöhen',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `${data?.pagination?.totalResults} Ergebnis${data?.pagination?.totalResults == 1 ? '' : 'se'} werden angezeigt
                ${data?.search?.query ? `für <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Es werden jetzt ${data?.pagination?.totalResults} Artikel im Produktraster angezeigt`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `Keine Ergebnisse gefunden für <em>"${data?.search?.originalQuery?.string}"</em>, stattdessen werden Ergebnisse für <em>"${data?.search?.query?.string}"</em> angezeigt.`;
			},
			attributes: {
				'aria-label': (data) =>
					`Keine Ergebnisse gefunden für ${data?.search?.originalQuery?.string}, es werden stattdessen Ergebnisse für ${data?.search?.query?.string} angezeigt`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    Keine Ergebnisse gefunden für <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>Keine Ergebnisse gefunden.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `Keine Ergebnisse gefunden für ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Meinten Sie <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `Wir konnten keine exakte Übereinstimmung für "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>" finden, aber hier ist etwas Ähnliches:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Vorschläge`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Überprüfen Sie auf Rechtschreibfehler.</li><li class="ss__no-results__suggestions__list__option">Entfernen Sie überflüssige Schlüsselwörter (z. B. "Produkte").</li><li class="ss__no-results__suggestions__list__option">Verwenden Sie andere Wörter, um zu beschreiben, wonach Sie suchen.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Bildergalerie',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Verkleinern',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Vergrößern',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Galerie schließen',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Vorheriges Bild',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Nächstes Bild',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Schnellansicht',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Schnellansicht schließen',
			},
		},
		addToCartButton: {
			value: 'In den Warenkorb legen',
		},
		moreInfoButton: {
			value: 'Weitere Informationen',
		},
		loadingText: {
			value: 'Wird geladen…',
		},
	},
};
