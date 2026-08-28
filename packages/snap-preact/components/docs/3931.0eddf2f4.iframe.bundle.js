'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3931],
		{
			'./src/Templates/Stores/library/languages/it.ts'(l, t, a) {
				a.r(t);
				const i = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'Chiudi completamento automatico', attributes: { 'aria-label': 'Chiudi completamento automatico' } },
						noResultsText: {
							value: (e) =>
								`<p>Nessun risultato trovato per "${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}".</p><p>Prova con un'altra ricerca.</p>`,
						},
						seeMoreButton: {
							value: (e) =>
								`Visualizza ${e?.controller?.store?.pagination.totalResults} risultat${
									e?.controller?.store?.pagination?.totalResults == 1 ? 'o' : 'i'
								}${e?.controller?.store?.filters.length > 0 ? ' filtrati' : ''} per "${e?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: 'Cronologia' },
						term: { attributes: { 'aria-label': (e) => `elemento ${e.index + 1} di ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: 'Suggerimenti' },
						term: { attributes: { 'aria-label': (e) => `elemento ${e.index + 1} di ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Di tendenza' },
						term: { attributes: { 'aria-label': (e) => `elemento ${e.index + 1} di ${e.numberOfTerms}, ${e.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: 'Filtri' },
						applyButtonText: { value: 'Applica' },
						clearButtonText: { value: 'Cancella tutto' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Cerca' } },
						closeSearchButton: { attributes: { 'aria-label': 'Chiudi ricerca' } },
						clearSearchButton: { attributes: { 'aria-label': 'Cancella ricerca' } },
						submitSearchButton: { attributes: { 'aria-label': 'Invia ricerca' } },
					},
					recommendationBundle: {
						seedText: { value: 'Questo prodotto' },
						ctaButtonText: { value: 'Aggiungi tutto al carrello' },
						ctaButtonSuccessText: { value: 'Pacchetto aggiunto!' },
						ctaSubtotalTitle: { value: (e) => `Subtotale per ${e.cartStore.count} articoli` },
					},
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'Pausa' : 'Riproduci'),
							attributes: { 'aria-label': (e) => (e.isPlaying ? 'Metti in pausa la presentazione' : 'Riprendi la presentazione') },
						},
						paginationButton: { attributes: { 'aria-label': (e) => `Vai al gruppo di diapositive ${e.index + 1} di ${e.totalDots}` } },
						nextButton: { attributes: { 'aria-label': (e) => `Diapositive successive${e.isNextDisabled ? ' (disabilitato)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (e) => `Diapositive precedenti${e.isPrevDisabled ? ' (disabilitato)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (e) =>
									e.hasClickHandler ? `Clicca per visualizzare ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} di ${e.slidesLength}`,
							},
						},
						srInstructions: {
							value: (e) =>
								`Usa i tasti freccia per navigare tra le diapositive. Premi la barra spaziatrice per mettere in pausa la riproduzione automatica. Premi Home o Fine per andare al primo o all'ultimo gruppo di diapositive. ${
									e.touchDragging && 'Sui dispositivi touch, scorri a sinistra o a destra per navigare.'
								}`,
						},
					},
					sortBy: { label: { value: 'Ordina per' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': 'Schede dei risultati' } },
						tabButton: {
							attributes: {
								'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} risultati` : ''}`,
							},
						},
					},
					perPage: { label: { value: 'Per pagina' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`menu a tendina del filtro ${e?.facet?.field}, attualmente ${e?.selectedFacet?.field === e?.facet?.field ? 'chiuso' : 'aperto'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' opzioni' : ''
									}`,
							},
						},
					},
					filterSummary: { title: { value: 'Filtri attuali' }, clearAllLabel: { value: 'Cancella tutto' } },
					facet: {
						showMoreText: { value: 'Mostra di pi\xF9' },
						showLessText: { value: 'Mostra di meno' },
						clearAllText: { value: 'Cancella tutto' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`menu a tendina del filtro ${e?.facet?.label}, attualmente ${e?.facet?.collapsed ? 'chiuso' : 'aperto'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' opzioni' : ''
									}`,
							},
						},
						submitRangeButton: { value: 'Invia' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (e) =>
									`menu a tendina ${e?.label}, ${e?.options?.length} opzioni ${
										e?.selectedOptions?.length ? `, l'opzione attualmente selezionata \xE8 ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) =>
									`pulsante di opzione ${e?.disabled ? 'disabilitato' : ''} ${e?.checkedState ? 'selezionato' : 'non selezionato'}`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': 'vai alla pagina precedente' } },
						next: { attributes: { 'aria-label': 'vai alla pagina successiva' } },
						first: { attributes: { 'aria-label': 'vai alla prima pagina' } },
						last: { attributes: { 'aria-label': (e) => `vai all'ultima pagina ${e?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (e) => `vai alla pagina ${e?.page?.number}` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} prodotti` } },
					result: {
						addToCartButtonText: { value: 'Aggiungi tutto al carrello', attributes: { 'aria-label': 'Aggiungi tutto al carrello' } },
						addToCartButtonSuccessText: { value: 'Aggiunto!' },
						quickviewButtonText: { value: 'Anteprima rapida', attributes: { 'aria-label': 'Anteprima rapida' } },
					},
					overlayResult: {
						addToCartButtonText: { value: 'Aggiungi tutto al carrello', attributes: { 'aria-label': 'Aggiungi tutto al carrello' } },
						addToCartButtonSuccessText: { value: 'Aggiunto!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Carica altro' } },
						progressText: { value: (e) => `Hai visualizzato ${e?.pagination?.end} di ${e?.pagination?.totalResults} prodotti` },
					},
					grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Meno' } },
					filter: {
						filter: { attributes: { 'aria-label': (e) => `${e?.label ? `rimuovi filtro selezionato ${e?.label} ${e?.value}` : e?.value || ''}` } },
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (e) =>
									`cursore di ${e?.facet?.label}, valore attuale ${e?.value}, ${
										e?.facet?.range?.low ? `valore minimo ${e?.facet?.range?.low},` : ''
									} ${e?.facet?.range?.high ? `valore massimo ${e?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `rimuovi filtro selezionato ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtra per ${e?.facet?.label} - ${e?.value?.label}`
											: `filtra per ${e?.value?.label}`
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
											? `rimuovi filtro selezionato ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtra per ${e?.facet?.label} - ${e?.value?.label}`
											: `filtra per ${e?.value?.label}`
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
											? `rimuovi filtro selezionato ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtra per ${e?.facet?.label} - ${e?.value?.label}`
											: `filtra per ${e?.value?.label}`
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
											? `rimuovi filtro selezionato ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtra per ${e?.facet?.label} - ${e?.value?.label}`
											: `filtra per ${e?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>Avviso:&nbsp;</b>' },
						infoText: { value: '<b>Informazione:&nbsp;</b>' },
						errorText: { value: '<b>Errore:&nbsp;</b>' },
						reloadText: { value: 'Ricarica' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) =>
									`casella di controllo ${e?.disabled ? 'disabilitata' : ''} ${e?.checkedState ? 'selezionata' : 'non selezionata'}`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': 'quantit\xE0' } },
						decrementButton: { attributes: { 'aria-label': 'diminuisci quantit\xE0' } },
						incrementButton: { attributes: { 'aria-label': 'aumenta quantit\xE0' } },
					},
					searchHeader: {
						titleText: {
							value: (e) => `Visualizzazione di ${e?.pagination?.totalResults} risultat${e?.pagination?.totalResults == 1 ? 'o' : 'i'}
                ${e?.search?.query ? `per <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
							attributes: { 'aria-label': (e) => `Vengono ora visualizzati ${e?.pagination?.totalResults} articoli nella griglia dei prodotti` },
						},
						correctedQueryText: {
							value: (e) =>
								`Nessun risultato trovato per <em>"${e?.search?.originalQuery?.string}"</em>, vengono mostrati invece i risultati per <em>"${e?.search?.query?.string}"</em>.`,
							attributes: {
								'aria-label': (e) =>
									`Nessun risultato trovato per ${e?.search?.originalQuery?.string}, vengono mostrati invece i risultati per ${e?.search?.query?.string}`,
							},
						},
						noResultsText: {
							value: (e) =>
								`${
									e?.search?.query
										? `<span>
                    Nessun risultato trovato per <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>.
                </span>`
										: '<span>Nessun risultato trovato.</span>'
								}`,
							attributes: { 'aria-label': (e) => `Nessun risultato trovato per ${e?.search?.query?.string}` },
						},
						didYouMeanText: { value: (e) => `Forse cercavi <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
						expandedSearchText: {
							value: (e) =>
								`Non siamo riusciti a trovare una corrispondenza esatta per "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", ma ecco qualcosa di simile:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'Suggerimenti' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Controlla eventuali errori di ortografia.</li><li class="ss__no-results__suggestions__list__option">Rimuovi eventuali parole chiave ridondanti (es: "prodotti").</li><li class="ss__no-results__suggestions__list__option">Usa altre parole per descrivere ci\xF2 che stai cercando.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': 'Galleria immagini' } },
						zoomOutButton: { attributes: { 'aria-label': 'Riduci zoom' } },
						zoomInButton: { attributes: { 'aria-label': 'Aumenta zoom' } },
						closeButton: { attributes: { 'aria-label': 'Chiudi galleria' } },
						prevButton: { attributes: { 'aria-label': 'Immagine precedente' } },
						nextButton: { attributes: { 'aria-label': 'Immagine successiva' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': 'Anteprima rapida' } },
						closeButton: { attributes: { 'aria-label': "Chiudi l'anteprima rapida" } },
						addToCartButton: { value: 'Aggiungi al carrello' },
						moreInfoButton: { value: 'Maggiori informazioni' },
						loadingText: { value: 'Caricamento\u2026' },
					},
				};
				a.d(t, ['it', 0, i]);
			},
		},
	]);
})();

//# sourceMappingURL=3931.0eddf2f4.iframe.bundle.js.map
