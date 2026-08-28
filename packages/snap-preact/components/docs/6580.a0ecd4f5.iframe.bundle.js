'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6580],
		{
			'./src/Templates/Stores/library/languages/nl.ts'(r, t, a) {
				a.r(t);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'Automatisch aanvullen sluiten', attributes: { 'aria-label': 'Automatisch aanvullen sluiten' } },
						noResultsText: {
							value: (e) =>
								`<p>Geen resultaten gevonden voor "${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}".</p><p>Probeer een andere zoekopdracht.</p>`,
						},
						seeMoreButton: {
							value: (e) =>
								`Bekijk ${e?.controller?.store?.pagination.totalResults} ${e?.controller?.store?.filters.length > 0 ? 'gefilterde ' : ''}resultat${
									e?.controller?.store?.pagination?.totalResults == 1 ? '' : 'en'
								} voor "${e?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: 'Geschiedenis' },
						term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} van ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: 'Suggesties' },
						term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} van ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Trending' },
						term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} van ${e.numberOfTerms}, ${e.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: 'Filters' },
						applyButtonText: { value: 'Toepassen' },
						clearButtonText: { value: 'Alles wissen' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Zoeken' } },
						closeSearchButton: { attributes: { 'aria-label': 'Zoeken sluiten' } },
						clearSearchButton: { attributes: { 'aria-label': 'Zoekopdracht wissen' } },
						submitSearchButton: { attributes: { 'aria-label': 'Zoekopdracht verzenden' } },
					},
					recommendationBundle: {
						seedText: { value: 'Dit product' },
						ctaButtonText: { value: 'Alles aan winkelwagen toevoegen' },
						ctaButtonSuccessText: { value: 'Bundel toegevoegd!' },
						ctaSubtotalTitle: { value: (e) => `Subtotaal voor ${e.cartStore.count} artikelen` },
					},
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'Pauzeren' : 'Afspelen'),
							attributes: { 'aria-label': (e) => (e.isPlaying ? 'Diavoorstelling pauzeren' : 'Diavoorstelling hervatten') },
						},
						paginationButton: { attributes: { 'aria-label': (e) => `Ga naar diagroep ${e.index + 1} van ${e.totalDots}` } },
						nextButton: { attributes: { 'aria-label': (e) => `Volgende dia's${e.isNextDisabled ? ' (uitgeschakeld)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (e) => `Vorige dia's${e.isPrevDisabled ? ' (uitgeschakeld)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (e) => (e.hasClickHandler ? `Klik om ${e.imageAlt} te bekijken` : `${e.imageAlt} ${e.index + 1} van ${e.slidesLength}`),
							},
						},
						srInstructions: {
							value: (e) =>
								`Gebruik de pijltjestoetsen om tussen de dia's te navigeren. Druk op de spatiebalk om automatisch afspelen te pauzeren. Druk op Home of End om naar de eerste of laatste diagroep te gaan. ${
									e.touchDragging && 'Veeg op aanraakapparaten naar links of rechts om te navigeren.'
								}`,
						},
					},
					sortBy: { label: { value: 'Sorteren op' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': 'Resultaattabbladen' } },
						tabButton: {
							attributes: {
								'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} resultaten` : ''}`,
							},
						},
					},
					perPage: { label: { value: 'Per pagina' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`filter-dropdown ${e?.facet?.field}, momenteel ${e?.selectedFacet?.field === e?.facet?.field ? 'ingeklapt' : 'geopend'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' opties' : ''
									}`,
							},
						},
					},
					filterSummary: { title: { value: 'Huidige filters' }, clearAllLabel: { value: 'Alles wissen' } },
					facet: {
						showMoreText: { value: 'Meer weergeven' },
						showLessText: { value: 'Minder weergeven' },
						clearAllText: { value: 'Alles wissen' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`filter-dropdown ${e?.facet?.label}, momenteel ${e?.facet?.collapsed ? 'ingeklapt' : 'geopend'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' opties' : ''
									}`,
							},
						},
						submitRangeButton: { value: 'Verzenden' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (e) =>
									`${e?.label} dropdown, ${e?.options?.length} opties ${
										e?.selectedOptions?.length ? `, momenteel geselecteerde optie is ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) => `${e?.disabled ? 'uitgeschakelde' : ''} ${e?.checkedState ? 'geselecteerde' : 'niet-geselecteerde'} keuzerondje`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': 'ga naar de vorige pagina' } },
						next: { attributes: { 'aria-label': 'ga naar de volgende pagina' } },
						first: { attributes: { 'aria-label': 'ga naar de eerste pagina' } },
						last: { attributes: { 'aria-label': (e) => `ga naar de laatste pagina ${e?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (e) => `ga naar pagina ${e?.page?.number}` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} producten` } },
					result: {
						addToCartButtonText: { value: 'Alles aan winkelwagen toevoegen', attributes: { 'aria-label': 'Alles aan winkelwagen toevoegen' } },
						addToCartButtonSuccessText: { value: 'Toegevoegd!' },
						quickviewButtonText: { value: 'Snelle weergave', attributes: { 'aria-label': 'Snelle weergave' } },
					},
					overlayResult: {
						addToCartButtonText: { value: 'Alles aan winkelwagen toevoegen', attributes: { 'aria-label': 'Alles aan winkelwagen toevoegen' } },
						addToCartButtonSuccessText: { value: 'Toegevoegd!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Meer laden' } },
						progressText: { value: (e) => `U heeft ${e?.pagination?.end} van ${e?.pagination?.totalResults} producten bekeken` },
					},
					grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Minder' } },
					filter: {
						filter: {
							attributes: { 'aria-label': (e) => `${e?.label ? `geselecteerd filter verwijderen ${e?.label} ${e?.value}` : e?.value || ''}` },
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (e) =>
									`${e?.facet?.label} schuifregelaar, huidige waarde ${e?.value}, ${
										e?.facet?.range?.low ? `minimumwaarde ${e?.facet?.range?.low},` : ''
									} ${e?.facet?.range?.high ? `maximumwaarde ${e?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `geselecteerd filter verwijderen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filteren op ${e?.facet?.label} - ${e?.value?.label}`
											: `filteren op ${e?.value?.label}`
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
											? `geselecteerd filter verwijderen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filteren op ${e?.facet?.label} - ${e?.value?.label}`
											: `filteren op ${e?.value?.label}`
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
											? `geselecteerd filter verwijderen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filteren op ${e?.facet?.label} - ${e?.value?.label}`
											: `filteren op ${e?.value?.label}`
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
											? `geselecteerd filter verwijderen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filteren op ${e?.facet?.label} - ${e?.value?.label}`
											: `filteren op ${e?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>Waarschuwing:&nbsp;</b>' },
						infoText: { value: '<b>Informatie:&nbsp;</b>' },
						errorText: { value: '<b>Fout:&nbsp;</b>' },
						reloadText: { value: 'Opnieuw laden' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) => `${e?.disabled ? 'uitgeschakeld' : ''} ${e?.checkedState ? 'aangevinkt' : 'niet aangevinkt'} selectievakje`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': 'aantal' } },
						decrementButton: { attributes: { 'aria-label': 'aantal verlagen' } },
						incrementButton: { attributes: { 'aria-label': 'aantal verhogen' } },
					},
					searchHeader: {
						titleText: {
							value: (e) => `${e?.pagination?.totalResults} resultat${e?.pagination?.totalResults == 1 ? '' : 'en'} weergegeven
                ${e?.search?.query ? `voor <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
							attributes: { 'aria-label': (e) => `Er worden nu ${e?.pagination?.totalResults} items weergegeven in het productraster` },
						},
						correctedQueryText: {
							value: (e) =>
								`Geen resultaten gevonden voor <em>"${e?.search?.originalQuery?.string}"</em>, in plaats daarvan worden resultaten getoond voor <em>"${e?.search?.query?.string}"</em>.`,
							attributes: {
								'aria-label': (e) =>
									`Geen resultaten gevonden voor ${e?.search?.originalQuery?.string}, in plaats daarvan worden resultaten getoond voor ${e?.search?.query?.string}`,
							},
						},
						noResultsText: {
							value: (e) =>
								`${
									e?.search?.query
										? `<span>
                    Geen resultaten gevonden voor <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>.
                </span>`
										: '<span>Geen resultaten gevonden.</span>'
								}`,
							attributes: { 'aria-label': (e) => `Geen resultaten gevonden voor ${e?.search?.query?.string}` },
						},
						didYouMeanText: { value: (e) => `Bedoelde u <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
						expandedSearchText: {
							value: (e) =>
								`We konden geen exacte match vinden voor "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", maar hier is iets soortgelijks:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'Suggesties' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Controleer op spelfouten.</li><li class="ss__no-results__suggestions__list__option">Verwijder overbodige trefwoorden (bijv.: "producten").</li><li class="ss__no-results__suggestions__list__option">Gebruik andere woorden om te beschrijven wat u zoekt.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': 'Afbeeldingengalerij' } },
						zoomOutButton: { attributes: { 'aria-label': 'Uitzoomen' } },
						zoomInButton: { attributes: { 'aria-label': 'Inzoomen' } },
						closeButton: { attributes: { 'aria-label': 'Galerij sluiten' } },
						prevButton: { attributes: { 'aria-label': 'Vorige afbeelding' } },
						nextButton: { attributes: { 'aria-label': 'Volgende afbeelding' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': 'Snelle weergave' } },
						closeButton: { attributes: { 'aria-label': 'Snelle weergave sluiten' } },
						addToCartButton: { value: 'Aan winkelwagen toevoegen' },
						moreInfoButton: { value: 'Meer informatie' },
						loadingText: { value: 'Laden\u2026' },
					},
				};
				a.d(t, ['nl', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=6580.a0ecd4f5.iframe.bundle.js.map
