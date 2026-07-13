'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7298],
		{
			'./src/Templates/Stores/library/languages/fr.ts'(a, t, r) {
				r.r(t), r.d(t, { fr: () => l });
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'fermer la saisie semi-automatique', attributes: { 'aria-label': 'fermer la saisie semi-automatique' } },
						noResultsText: {
							value: (e) =>
								`<p>Aucun r\xE9sultat trouv\xE9 pour "${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}".</p><p>Veuillez essayer une autre recherche.</p>`,
						},
						seeMoreButton: {
							value: (e) =>
								`Voir ${e?.controller?.store?.pagination.totalResults} ${e?.controller?.store?.filters.length > 0 ? 'filtr\xE9' : ''} r\xE9sultat${
									e?.controller?.store?.pagination?.totalResults == 1 ? '' : 's'
								} pour "${e?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: 'Histoire' },
						term: { attributes: { 'aria-label': (e) => `article ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: 'Suggestions' },
						term: { attributes: { 'aria-label': (e) => `article ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Tendance' },
						term: { attributes: { 'aria-label': (e) => `article ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
					},
					button: {},
					search: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: { titleText: { value: 'Filtres' } },
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Recherche' } },
						closeSearchButton: { attributes: { 'aria-label': 'Fermer la recherche' } },
						clearSearchButton: { attributes: { 'aria-label': 'Effacer la recherche' } },
						submitSearchButton: { attributes: { 'aria-label': 'Soumettre Rechercher' } },
					},
					recommendationBundle: {
						seedText: { value: 'Ce produit' },
						ctaButtonText: { value: 'Ajouter tout au panier' },
						ctaButtonSuccessText: { value: 'Offre group\xE9e ajout\xE9e!' },
						ctaSubtotalTitle: { value: (e) => `Sous-total pour ${e.cartStore.count} articles` },
					},
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'pausa' : 'Jouer'),
							attributes: { 'aria-label': (e) => (e.isPlaying ? 'Mettre le diaporama en pause' : 'Reprendre le diaporama') },
						},
						paginationButton: { attributes: { 'aria-label': (e) => `Acc\xE9der au groupe de diapositives ${e.index + 1} de ${e.totalDots}` } },
						nextButton: { attributes: { 'aria-label': (e) => `Diapositives suivantes${e.isNextDisabled ? ' (d\xE9sactiv\xE9)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (e) => `Diapositives pr\xE9c\xE9dentes${e.isPrevDisabled ? ' (d\xE9sactiv\xE9)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (e) =>
									e.hasClickHandler ? `Cliquez pour afficher ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} de ${e.slidesLength}`,
							},
						},
						srInstructions: {
							value: (e) =>
								`Utilisez les touches fl\xE9ch\xE9es pour naviguer entre les diapositives. Appuyez sur la barre d'espace pour mettre la lecture automatique en pause. Appuyez sur la touche D\xE9but ou Fin pour acc\xE9der au premier ou au dernier groupe de diapositives. ${
									e.touchDragging && 'Sur les appareils tactiles, balayez vers la gauche ou vers la droite pour naviguer.'
								}`,
						},
					},
					sortBy: { label: { value: 'Trier Par' } },
					perPage: { label: { value: 'Par page' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`actuellement ${e?.selectedFacet?.field === e?.facet?.field ? 'effondr\xE9' : 'ouvrir'} ${
										e?.facet?.field
									} liste d\xE9roulante des facettes ${e?.facet?.values?.length ? e?.facet?.values?.length + ' choix' : ''}`,
							},
						},
					},
					filterSummary: { title: { value: 'Filtres Actuels' }, clearAllLabel: { value: 'Tout effacer' } },
					facet: {
						showMoreText: { value: 'Afficher Plus' },
						showLessText: { value: 'Montrer Moins' },
						clearAllText: { value: 'Tout Effacer' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`actuellement ${e?.facet?.collapsed ? 'effondr\xE9' : 'ouvrir'} ${e?.facet?.label} liste d\xE9roulante des facettes ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' choix' : ''
									}`,
							},
						},
						submitRangeButton: { value: 'Soumettre' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (e) =>
									`${e?.label} d\xE9rouler, ${e?.options?.length} choix ${
										e?.selectedOptions?.length ? `, L'option actuellement s\xE9lectionn\xE9e est ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) => `${e?.disabled ? 'd\xE9sactiv\xE9' : ''} ${e?.checkedState ? '\xE0 carreaux' : 'd\xE9coch\xE9'} bouton radio`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': 'aller \xE0 la page pr\xE9c\xE9dente' } },
						next: { attributes: { 'aria-label': 'aller \xE0 la page suivante' } },
						first: { attributes: { 'aria-label': 'aller \xE0 la premi\xE8re page' } },
						last: { attributes: { 'aria-label': (e) => `aller \xE0 la derni\xE8re page ${e?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (e) => `aller \xE0 la page ${e?.page?.number}` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} produits` } },
					result: { addToCartButtonText: { value: 'Tout ajouter au panier' }, addToCartButtonSuccessText: { value: 'Ajout\xE9 !' } },
					overlayResult: { addToCartButtonText: { value: 'Tout ajouter au panier' }, addToCartButtonSuccessText: { value: 'Ajout\xE9 !' } },
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Charger plus' } },
						progressText: { value: (e) => `Vous avez consult\xE9 ${e?.pagination?.end} de ${e?.pagination?.totalResults} produits` },
					},
					grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Moins' } },
					filter: {
						filter: {
							attributes: { 'aria-label': (e) => `${e?.label ? `supprimer la s\xE9lection ${e?.label} filtre ${e?.value}` : e?.value || ''}` },
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (e) =>
									`${e?.facet?.label} bouton curseur, valeur actuelle ${e?.value}, ${
										e?.facet?.range?.low ? `valeur minimale ${e?.facet?.range?.low},` : ''
									} ${e?.facet?.range?.high ? `valeur maximale ${e?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `supprimer le filtre s\xE9lectionn\xE9 ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrer par ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrer par ${e?.value?.label}`
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
											? `supprimer le filtre s\xE9lectionn\xE9 ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrer par ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrer par ${e?.value?.label}`
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
											? `supprimer le filtre s\xE9lectionn\xE9 ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrer par ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrer par ${e?.value?.label}`
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
											? `supprimer le filtre s\xE9lectionn\xE9 ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrer par ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrer par ${e?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>Avertissement:&nbsp;</b>' },
						infoText: { value: '<b>Informations:&nbsp;</b>' },
						errorText: { value: '<b>Erreur:&nbsp;</b>' },
						reloadText: { value: 'Recharger' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'd\xE9sactiv\xE9' : ''} ${e?.checkedState ? '\xE0 carreaux' : 'd\xE9coch\xE9'} case \xE0 cocher`,
							},
						},
					},
					searchHeader: {
						titleText: {
							value: (e) => `Montrant r\xE9sultat${e?.pagination?.totalResults == 1 ? '' : 's'} 
                ${e?.search?.query ? `pour <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
							attributes: { 'aria-label': (e) => `Affichage maintenant de ${e?.pagination?.totalResults} \xE9l\xE9ments dans la grille de produits` },
						},
						correctedQueryText: {
							value: (e) =>
								`Aucun r\xE9sultat trouv\xE9 pour <em>"${e?.search?.originalQuery?.string}"</em>, montrant les r\xE9sultats pour <em>"${e?.search?.query?.string}"</em> plut\xF4t.`,
							attributes: {
								'aria-label': (e) =>
									`Aucun r\xE9sultat trouv\xE9 pour ${e?.search?.originalQuery?.string}, safficher les r\xE9sultats pour ${e?.search?.query?.string} \xE0 la place`,
							},
						},
						noResultsText: {
							value: (e) =>
								`${
									e?.search?.query
										? `<span>
                    Aucun r\xE9sultat pour <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> trouv\xE9e.
                </span>`
										: '<span>Aucun r\xE9sultat trouv\xE9.</span>'
								}`,
							attributes: { 'aria-label': (e) => `Aucun r\xE9sultat trouv\xE9 pour ${e?.search?.query?.string}` },
						},
						didYouMeanText: { value: (e) => `Vouliez-vous dire <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
						expandedSearchText: {
							value: (e) =>
								`Nous n'avons pas pu trouver de correspondance exacte pour "<span className="ss__search-header__results-query">${e?.search?.query?.string}</span>", mais voici quelque chose de similaire:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'Suggestions' },
						suggestionsList: {
							value: `<ul className="ss__no-results__suggestions__list"><li className="ss__no-results__suggestions__list__option">V\xE9rifiez les fautes d\u2019orthographe.</li><li className="ss__no-results__suggestions__list__option">Supprimez les \xE9ventuels mots-cl\xE9s redondants (ie: "produits").</li><li className="ss__no-results__suggestions__list__option">Utilisez d'autres mots pour d\xE9crire ce que vous recherchez.</li></ul>`,
						},
					},
				};
			},
		},
	]);
})();

//# sourceMappingURL=7298.c3a1ca75.iframe.bundle.js.map
