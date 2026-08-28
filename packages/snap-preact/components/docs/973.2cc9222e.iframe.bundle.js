'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[973],
		{
			'./src/Templates/Stores/library/languages/de.ts'(n, t, l) {
				l.r(t);
				const r = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'Autovervollst\xE4ndigung schlie\xDFen', attributes: { 'aria-label': 'Autovervollst\xE4ndigung schlie\xDFen' } },
						noResultsText: {
							value: (e) =>
								`<p>Keine Ergebnisse gefunden f\xFCr "${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}".</p><p>Bitte versuchen Sie eine andere Suche.</p>`,
						},
						seeMoreButton: {
							value: (e) =>
								`${e?.controller?.store?.pagination.totalResults} ${e?.controller?.store?.filters.length > 0 ? 'gefilterte ' : ''}Ergebnis${
									e?.controller?.store?.pagination?.totalResults == 1 ? '' : 'se'
								} f\xFCr "${e?.controller?.store?.search?.query?.string}" anzeigen`,
						},
					},
					'terms.history': {
						title: { value: 'Verlauf' },
						term: { attributes: { 'aria-label': (e) => `Element ${e.index + 1} von ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: 'Vorschl\xE4ge' },
						term: { attributes: { 'aria-label': (e) => `Element ${e.index + 1} von ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Trend' },
						term: { attributes: { 'aria-label': (e) => `Element ${e.index + 1} von ${e.numberOfTerms}, ${e.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: 'Filter' },
						applyButtonText: { value: 'Anwenden' },
						clearButtonText: { value: 'Alle l\xF6schen' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Suche' } },
						closeSearchButton: { attributes: { 'aria-label': 'Suche schlie\xDFen' } },
						clearSearchButton: { attributes: { 'aria-label': 'Suche l\xF6schen' } },
						submitSearchButton: { attributes: { 'aria-label': 'Suche absenden' } },
					},
					recommendationBundle: {
						seedText: { value: 'Dieses Produkt' },
						ctaButtonText: { value: 'Alle in den Warenkorb legen' },
						ctaButtonSuccessText: { value: 'Paket hinzugef\xFCgt!' },
						ctaSubtotalTitle: { value: (e) => `Zwischensumme f\xFCr ${e.cartStore.count} Artikel` },
					},
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'Pause' : 'Abspielen'),
							attributes: { 'aria-label': (e) => (e.isPlaying ? 'Diashow pausieren' : 'Diashow fortsetzen') },
						},
						paginationButton: { attributes: { 'aria-label': (e) => `Zu Foliengruppe ${e.index + 1} von ${e.totalDots} wechseln` } },
						nextButton: { attributes: { 'aria-label': (e) => `N\xE4chste Folien${e.isNextDisabled ? ' (deaktiviert)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (e) => `Vorherige Folien${e.isPrevDisabled ? ' (deaktiviert)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (e) =>
									e.hasClickHandler ? `Klicken, um ${e.imageAlt} anzuzeigen` : `${e.imageAlt} ${e.index + 1} von ${e.slidesLength}`,
							},
						},
						srInstructions: {
							value: (e) =>
								`Verwenden Sie die Pfeiltasten, um zwischen den Folien zu navigieren. Dr\xFCcken Sie die Leertaste, um die automatische Wiedergabe zu pausieren. Dr\xFCcken Sie Pos1 oder Ende, um zur ersten oder letzten Foliengruppe zu springen. ${
									e.touchDragging && 'Wischen Sie auf Touch-Ger\xE4ten nach links oder rechts, um zu navigieren.'
								}`,
						},
					},
					sortBy: { label: { value: 'Sortieren nach' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': 'Ergebnis-Tabs' } },
						tabButton: {
							attributes: {
								'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} Ergebnisse` : ''}`,
							},
						},
					},
					perPage: { label: { value: 'Pro Seite' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`Filter-Dropdown ${e?.facet?.field}, derzeit ${e?.selectedFacet?.field === e?.facet?.field ? 'eingeklappt' : 'ge\xF6ffnet'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' Optionen' : ''
									}`,
							},
						},
					},
					filterSummary: { title: { value: 'Aktuelle Filter' }, clearAllLabel: { value: 'Alle l\xF6schen' } },
					facet: {
						showMoreText: { value: 'Mehr anzeigen' },
						showLessText: { value: 'Weniger anzeigen' },
						clearAllText: { value: 'Alle l\xF6schen' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`Filter-Dropdown ${e?.facet?.label}, derzeit ${e?.facet?.collapsed ? 'eingeklappt' : 'ge\xF6ffnet'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' Optionen' : ''
									}`,
							},
						},
						submitRangeButton: { value: 'Absenden' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (e) =>
									`${e?.label} Dropdown, ${e?.options?.length} Optionen ${
										e?.selectedOptions?.length ? `, derzeit ausgew\xE4hlte Option ist ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'deaktiviertes' : ''} ${e?.checkedState ? 'ausgew\xE4hltes' : 'nicht ausgew\xE4hltes'} Optionsfeld`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': 'Zur vorherigen Seite' } },
						next: { attributes: { 'aria-label': 'Zur n\xE4chsten Seite' } },
						first: { attributes: { 'aria-label': 'Zur ersten Seite' } },
						last: { attributes: { 'aria-label': (e) => `Zur letzten Seite ${e?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (e) => `Zur Seite ${e?.page?.number}` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} Produkte` } },
					result: {
						addToCartButtonText: { value: 'Alle in den Warenkorb legen', attributes: { 'aria-label': 'Alle in den Warenkorb legen' } },
						addToCartButtonSuccessText: { value: 'Hinzugef\xFCgt!' },
						quickviewButtonText: { value: 'Schnellansicht', attributes: { 'aria-label': 'Schnellansicht' } },
					},
					overlayResult: {
						addToCartButtonText: { value: 'Alle in den Warenkorb legen', attributes: { 'aria-label': 'Alle in den Warenkorb legen' } },
						addToCartButtonSuccessText: { value: 'Hinzugef\xFCgt!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Mehr laden' } },
						progressText: { value: (e) => `Sie haben ${e?.pagination?.end} von ${e?.pagination?.totalResults} Produkten angesehen` },
					},
					grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Weniger' } },
					filter: {
						filter: {
							attributes: { 'aria-label': (e) => `${e?.label ? `Ausgew\xE4hlten Filter ${e?.label} ${e?.value} entfernen` : e?.value || ''}` },
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (e) =>
									`${e?.facet?.label} Schieberegler, aktueller Wert ${e?.value}, ${
										e?.facet?.range?.low ? `Mindestwert ${e?.facet?.range?.low},` : ''
									} ${e?.facet?.range?.high ? `H\xF6chstwert ${e?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `Ausgew\xE4hlten Filter entfernen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `Filtern nach ${e?.facet?.label} - ${e?.value?.label}`
											: `Filtern nach ${e?.value?.label}`
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
											? `Ausgew\xE4hlten Filter entfernen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `Filtern nach ${e?.facet?.label} - ${e?.value?.label}`
											: `Filtern nach ${e?.value?.label}`
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
											? `Ausgew\xE4hlten Filter entfernen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `Filtern nach ${e?.facet?.label} - ${e?.value?.label}`
											: `Filtern nach ${e?.value?.label}`
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
											? `Ausgew\xE4hlten Filter entfernen ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `Filtern nach ${e?.facet?.label} - ${e?.value?.label}`
											: `Filtern nach ${e?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>Warnung:&nbsp;</b>' },
						infoText: { value: '<b>Information:&nbsp;</b>' },
						errorText: { value: '<b>Fehler:&nbsp;</b>' },
						reloadText: { value: 'Neu laden' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'deaktiviertes' : ''} ${e?.checkedState ? 'ausgew\xE4hltes' : 'nicht ausgew\xE4hltes'} Kontrollk\xE4stchen`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': 'Menge' } },
						decrementButton: { attributes: { 'aria-label': 'Menge verringern' } },
						incrementButton: { attributes: { 'aria-label': 'Menge erh\xF6hen' } },
					},
					searchHeader: {
						titleText: {
							value: (e) => `${e?.pagination?.totalResults} Ergebnis${e?.pagination?.totalResults == 1 ? '' : 'se'} werden angezeigt
                ${e?.search?.query ? `f\xFCr <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
							attributes: { 'aria-label': (e) => `Es werden jetzt ${e?.pagination?.totalResults} Artikel im Produktraster angezeigt` },
						},
						correctedQueryText: {
							value: (e) =>
								`Keine Ergebnisse gefunden f\xFCr <em>"${e?.search?.originalQuery?.string}"</em>, stattdessen werden Ergebnisse f\xFCr <em>"${e?.search?.query?.string}"</em> angezeigt.`,
							attributes: {
								'aria-label': (e) =>
									`Keine Ergebnisse gefunden f\xFCr ${e?.search?.originalQuery?.string}, es werden stattdessen Ergebnisse f\xFCr ${e?.search?.query?.string} angezeigt`,
							},
						},
						noResultsText: {
							value: (e) =>
								`${
									e?.search?.query
										? `<span>
                    Keine Ergebnisse gefunden f\xFCr <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>.
                </span>`
										: '<span>Keine Ergebnisse gefunden.</span>'
								}`,
							attributes: { 'aria-label': (e) => `Keine Ergebnisse gefunden f\xFCr ${e?.search?.query?.string}` },
						},
						didYouMeanText: { value: (e) => `Meinten Sie <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
						expandedSearchText: {
							value: (e) =>
								`Wir konnten keine exakte \xDCbereinstimmung f\xFCr "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>" finden, aber hier ist etwas \xC4hnliches:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'Vorschl\xE4ge' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\xDCberpr\xFCfen Sie auf Rechtschreibfehler.</li><li class="ss__no-results__suggestions__list__option">Entfernen Sie \xFCberfl\xFCssige Schl\xFCsselw\xF6rter (z. B. "Produkte").</li><li class="ss__no-results__suggestions__list__option">Verwenden Sie andere W\xF6rter, um zu beschreiben, wonach Sie suchen.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': 'Bildergalerie' } },
						zoomOutButton: { attributes: { 'aria-label': 'Verkleinern' } },
						zoomInButton: { attributes: { 'aria-label': 'Vergr\xF6\xDFern' } },
						closeButton: { attributes: { 'aria-label': 'Galerie schlie\xDFen' } },
						prevButton: { attributes: { 'aria-label': 'Vorheriges Bild' } },
						nextButton: { attributes: { 'aria-label': 'N\xE4chstes Bild' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': 'Schnellansicht' } },
						closeButton: { attributes: { 'aria-label': 'Schnellansicht schlie\xDFen' } },
						addToCartButton: { value: 'In den Warenkorb legen' },
						moreInfoButton: { value: 'Weitere Informationen' },
						loadingText: { value: 'Wird geladen\u2026' },
					},
				};
				l.d(t, ['de', 0, r]);
			},
		},
	]);
})();

//# sourceMappingURL=973.2cc9222e.iframe.bundle.js.map
