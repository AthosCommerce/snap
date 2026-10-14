const t = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'fermer la saisie semi-automatique', attributes: { 'aria-label': 'fermer la saisie semi-automatique' } },
		noResultsText: {
			value: (e) =>
				`<p>Aucun résultat trouvé pour "${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}".</p><p>Veuillez essayer une autre recherche.</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`Voir ${e?.controller?.store?.pagination.totalResults} ${e?.controller?.store?.filters.length > 0 ? 'filtré' : ''} résultat${
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
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: {
		titleText: { value: 'Filtres' },
		applyButtonText: { value: 'Appliquer' },
		clearButtonText: { value: 'Tout effacer' },
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: { attributes: { placeholder: 'Recherche' } },
		closeSearchButton: { attributes: { 'aria-label': 'Fermer la recherche' } },
		clearSearchButton: { attributes: { 'aria-label': 'Effacer la recherche' } },
		submitSearchButton: { attributes: { 'aria-label': 'Soumettre Rechercher' } },
	},
	recommendationBundle: {
		seedText: { value: 'Ce produit' },
		ctaButtonText: { value: 'Ajouter tout au panier' },
		ctaButtonSuccessText: { value: 'Offre groupée ajoutée!' },
		ctaSubtotalTitle: { value: (e) => `Sous-total pour ${e.cartStore.count} articles` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? 'pausa' : 'Jouer'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'Mettre le diaporama en pause' : 'Reprendre le diaporama') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `Accéder au groupe de diapositives ${e.index + 1} de ${e.totalDots}` } },
		nextButton: { attributes: { 'aria-label': (e) => `Diapositives suivantes${e.isNextDisabled ? ' (désactivé)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `Diapositives précédentes${e.isPrevDisabled ? ' (désactivé)' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `Cliquez pour afficher ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} de ${e.slidesLength}`),
			},
		},
		srInstructions: {
			value: (e) =>
				`Utilisez les touches fléchées pour naviguer entre les diapositives. Appuyez sur la barre d'espace pour mettre la lecture automatique en pause. Appuyez sur la touche Début ou Fin pour accéder au premier ou au dernier groupe de diapositives. ${
					e.touchDragging && 'Sur les appareils tactiles, balayez vers la gauche ou vers la droite pour naviguer.'
				}`,
		},
	},
	sortBy: { label: { value: 'Trier Par' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'Onglets de résultats' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} résultats` : ''}` },
		},
	},
	perPage: { label: { value: 'Par page' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`actuellement ${e?.selectedFacet?.field === e?.facet?.field ? 'effondré' : 'ouvrir'} ${e?.facet?.field} liste déroulante des facettes ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' choix' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'Filtres Actuels' },
		clearAllLabel: { value: 'Tout effacer', attributes: { 'aria-label': 'Tout effacer' } },
		noFiltersText: { value: 'Aucun filtre appliqué' },
	},
	facet: {
		showMoreText: { value: 'Afficher Plus' },
		showLessText: { value: 'Montrer Moins' },
		clearAllText: { value: 'Tout Effacer' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`actuellement ${e?.facet?.collapsed ? 'effondré' : 'ouvrir'} ${e?.facet?.label} liste déroulante des facettes ${
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
					`${e?.label} dérouler, ${e?.options?.length} choix ${
						e?.selectedOptions?.length ? `, L'option actuellement sélectionnée est ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: { attributes: { 'aria-label': (e) => `${e?.disabled ? 'désactivé' : ''} ${e?.checkedState ? 'à carreaux' : 'décoché'} bouton radio` } },
	},
	pagination: {
		previous: { attributes: { 'aria-label': 'aller à la page précédente' } },
		next: { attributes: { 'aria-label': 'aller à la page suivante' } },
		first: { attributes: { 'aria-label': 'aller à la première page' } },
		last: { attributes: { 'aria-label': (e) => `aller à la dernière page ${e?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (e) => `aller à la page ${e?.page?.number}` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} produits` } },
	result: {
		addToCartButtonText: { value: 'Tout ajouter au panier', attributes: { 'aria-label': 'Tout ajouter au panier' } },
		addToCartButtonSuccessText: { value: 'Ajouté !' },
		quickviewButtonText: { value: 'Aperçu rapide', attributes: { 'aria-label': 'Aperçu rapide' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'Tout ajouter au panier', attributes: { 'aria-label': 'Tout ajouter au panier' } },
		addToCartButtonSuccessText: { value: 'Ajouté !' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'Charger plus' } },
		progressText: { value: (e) => `Vous avez consulté ${e?.pagination?.end} de ${e?.pagination?.totalResults} produits` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Moins' } },
	filter: {
		filter: { attributes: { 'aria-label': (e) => `${e?.label ? `supprimer la sélection ${e?.label} filtre ${e?.value}` : e?.value || ''}` } },
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
							? `supprimer le filtre sélectionné ${e?.facet?.label || ''} - ${e?.value?.label}`
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
							? `supprimer le filtre sélectionné ${e?.facet?.label || ''} - ${e?.value?.label}`
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
							? `supprimer le filtre sélectionné ${e?.facet?.label || ''} - ${e?.value?.label}`
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
							? `supprimer le filtre sélectionné ${e?.facet?.label || ''} - ${e?.value?.label}`
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
			attributes: { 'aria-label': (e) => `${e?.disabled ? 'désactivé' : ''} ${e?.checkedState ? 'à carreaux' : 'décoché'} case à cocher` },
		},
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'quantité' } },
		decrementButton: { attributes: { 'aria-label': 'diminuer la quantité' } },
		incrementButton: { attributes: { 'aria-label': 'augmenter la quantité' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `Montrant résultat${e?.pagination?.totalResults == 1 ? '' : 's'} 
                ${e?.search?.query ? `pour <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
			attributes: { 'aria-label': (e) => `Affichage maintenant de ${e?.pagination?.totalResults} éléments dans la grille de produits` },
		},
		correctedQueryText: {
			value: (e) =>
				`Aucun résultat trouvé pour <em>"${e?.search?.originalQuery?.string}"</em>, montrant les résultats pour <em>"${e?.search?.query?.string}"</em> plutôt.`,
			attributes: {
				'aria-label': (e) =>
					`Aucun résultat trouvé pour ${e?.search?.originalQuery?.string}, safficher les résultats pour ${e?.search?.query?.string} à la place`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    Aucun résultat pour <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> trouvée.
                </span>`
						: '<span>Aucun résultat trouvé.</span>'
				}`,
			attributes: { 'aria-label': (e) => `Aucun résultat trouvé pour ${e?.search?.query?.string}` },
		},
		didYouMeanText: { value: (e) => `Vouliez-vous dire <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
		expandedSearchText: {
			value: (e) =>
				`Nous n'avons pas pu trouver de correspondance exacte pour "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", mais voici quelque chose de similaire:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'Suggestions' },
		suggestionsList: {
			value: `<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Vérifiez les fautes d’orthographe.</li><li class="ss__no-results__suggestions__list__option">Supprimez les éventuels mots-clés redondants (ie: "produits").</li><li class="ss__no-results__suggestions__list__option">Utilisez d'autres mots pour décrire ce que vous recherchez.</li></ul>`,
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': "Galerie d'images" } },
		zoomOutButton: { attributes: { 'aria-label': 'Zoom arrière' } },
		zoomInButton: { attributes: { 'aria-label': 'Zoom avant' } },
		closeButton: { attributes: { 'aria-label': 'Fermer la galerie' } },
		prevButton: { attributes: { 'aria-label': 'Image précédente' } },
		nextButton: { attributes: { 'aria-label': 'Image suivante' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'Aperçu rapide' } },
		closeButton: { attributes: { 'aria-label': "Fermer l'aperçu rapide" } },
		addToCartButton: { value: 'Ajouter au panier' },
		moreInfoButton: { value: "Plus d'informations" },
		loadingText: { value: 'Chargement…' },
	},
};
export { t as fr };
