import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const fr: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'fermer la saisie semi-automatique',
			attributes: {
				'aria-label': 'fermer la saisie semi-automatique',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Aucun résultat trouvé pour "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Veuillez essayer une autre recherche.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Voir ${data?.controller?.store?.pagination.totalResults} ${data?.controller?.store?.filters.length > 0 ? 'filtré' : ''} résultat${
					data?.controller?.store?.pagination?.totalResults == 1 ? '' : 's'
				} pour "${data?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'Histoire',
		},
		term: {
			attributes: {
				'aria-label': (data) => `article ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Suggestions',
		},
		term: {
			attributes: {
				'aria-label': (data) => `article ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Tendance',
		},
		term: {
			attributes: {
				'aria-label': (data) => `article ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Filtres',
		},
		applyButtonText: {
			value: 'Appliquer',
		},
		clearButtonText: {
			value: 'Tout effacer',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Recherche',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Fermer la recherche',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Effacer la recherche',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Soumettre Rechercher',
			},
		},
		chatButton: {
			attributes: {
				'aria-label': 'Ouvrir le chat',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Ouvrir le chat',
				title: 'Ouvrir le chat',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Fermer le chat',
				title: 'Fermer le chat',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Nouveau chat',
				title: 'Nouveau chat',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Historique du chat',
				title: 'Historique du chat',
			},
		},
		historyTitle: {
			value: 'Historique',
		},
		historyClearButton: {
			value: 'effacer',
		},
		historyNewChatLabel: {
			value: 'Nouveau chat',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Détails de la conversation',
			},
		},
		inspirationResultTitle: {
			value: "Scénarios d'inspiration",
		},
		inspirationResultSubtitle: {
			value: 'Choisissez une direction de style à explorer',
		},
		productComparisonTitle: {
			value: 'Comparaison de produits',
		},
		productComparisonSubtitle: {
			value: (data) => `Comparaison de ${data?.count ?? ''} produits`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Messages du chat',
			},
		},
		newMessagesButton: {
			value: 'Nouveaux messages',
		},
		loadingVerbsProductQuery: {
			value: 'Réflexion, Recherche, Analyse, Collecte des détails',
		},
		loadingVerbsProductSearch: {
			value: 'Recherche, Parcours du catalogue, Découverte de produits, Sélection des résultats',
		},
		loadingVerbsProductComparison: {
			value: 'Comparaison, Analyse, Évaluation, Examen des options',
		},
		loadingVerbsImageSearch: {
			value: "Analyse de l'image, Identification, Recherche, Correspondance",
		},
		loadingVerbsProductSimilar: {
			value: "Découverte d'articles similaires, Recherche, Correspondance, Sélection",
		},
		loadingVerbsInspirationRequest: {
			value: 'Remue-méninges, Imagination, Sélection, Inspiration',
		},
		feedbackPrompt: {
			value: "Comment se passe votre expérience jusqu'à présent ?",
		},
		feedbackThanks: {
			value: 'Merci pour votre retour',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': "J'aime",
				title: "J'aime",
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': "Je n'aime pas",
				title: "Je n'aime pas",
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Ignorer le retour',
			},
		},
		comparisonsTitle: {
			value: (data) => `Comparer les produits (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'effacer',
		},
		comparisonsAddText: {
			value: 'Ajouter',
		},
		comparisonsCompareButton: {
			value: 'Comparer',
			attributes: {
				title: 'Comparer',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `Supprimer ${data?.name || 'le produit'} de la comparaison`,
			},
		},
		chatUnavailableMessage: {
			value:
				'Le service est temporairement indisponible. En attendant, utilisez la barre de recherche ci-dessus pour trouver ce dont vous avez besoin !',
		},
		highVolumeMessage: {
			value: "Le chat est actuellement indisponible en raison d'un volume élevé de demandes.",
		},
		highVolumeSubMessage: {
			value: 'En attendant, utilisez la barre de recherche ci-dessus pour trouver ce dont vous avez besoin !',
		},
		newSessionButton: {
			value: 'Nouvelle session',
		},
		facetsTitle: {
			value: 'Filtrer par :',
		},
		facetsApplyButton: {
			value: (data) => `Appliquer (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Effacer les filtres',
		},
		attachmentCompareTitle: {
			value: 'Comparer ces produits',
		},
		attachmentAskProductTitle: {
			value: 'Poser une question sur ce produit',
		},
		attachmentImageSimilarTitle: {
			value: 'Trouver des produits similaires à cette image :',
		},
		topicDriftScopeMessage: {
			value: 'Je suis là pour vous aider dans vos achats',
		},
		topicDriftScopeSubMessage: {
			value: 'Essayez de poser des questions sur les produits, les comparaisons ou les recommandations',
		},
		topicDriftMessage: {
			value: 'Vous cherchez quelque chose de nouveau ?',
		},
		topicDriftSubMessage: {
			value: 'Démarrer une nouvelle session pour une meilleure assistance, ou continuer dans celle-ci ?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Ignorer',
			},
		},
		inputPlaceholder: {
			value: 'Saisissez votre message...',
		},
		inputPlaceholderAskProduct: {
			value: 'Posez une question sur ce produit...',
		},
		inputPlaceholderCompare: {
			value: 'Que souhaitez-vous comparer ?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Posez une question sur les produits comparés...',
		},
		inputPlaceholderAskImage: {
			value: 'Posez une question sur cette image...',
		},
		inputPlaceholderAddCompare: {
			value: 'Ajoutez un autre produit à comparer...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Importer une image',
				title: 'Importer une image',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Envoyer le message',
				title: 'Envoyer le message',
			},
		},
		dropOverlayText: {
			value: "Déposez l'image pour l'importer",
		},
		disclaimerText: {
			value: "Assistant alimenté par l'IA. Il peut parfois faire des erreurs. Évitez de partager des données personnelles.",
		},
		privacyPolicyLinkText: {
			value: 'Politique de confidentialité',
		},
		expiredMessage: {
			value: 'Ce chat a expiré. Veuillez démarrer un nouveau chat.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Réflexion',
		},
		searchingVerb: {
			value: 'Recherche',
		},
		analyzingVerb: {
			value: 'Analyse',
		},
		generatingVerb: {
			value: 'Génération',
		},
		processingVerb: {
			value: 'Traitement',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'Fermer',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': "Ouvrir l'élément",
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': "Chargement de l'élément",
			},
		},
		removeButton: {
			attributes: {
				'aria-label': "Supprimer l'élément",
			},
		},
		uploadFailedText: {
			value: "Échec de l'importation",
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'Rechercher ce terme',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'Ouvrir le produit',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': "Voir l'inspiration",
				title: "Voir l'inspiration",
			},
		},
		closeInspirationButton: {
			value: "Fermer l'inspiration",
			attributes: {
				'aria-label': "Fermer l'inspiration",
				title: "Fermer l'inspiration",
			},
		},
		exploreInspirationButton: {
			value: "Explorer les scénarios d'inspiration",
			attributes: {
				'aria-label': "Explorer les scénarios d'inspiration",
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Voir la comparaison',
				title: 'Voir la comparaison',
			},
		},
		closeComparisonButton: {
			value: 'Fermer la comparaison',
			attributes: {
				'aria-label': 'Fermer la comparaison',
				title: 'Fermer la comparaison',
			},
		},
		exploreComparisonButton: {
			value: 'Explorer les données de comparaison',
			attributes: {
				'aria-label': 'Explorer les données de comparaison',
			},
		},
		showDetailsButton: {
			value: 'Afficher les détails',
			attributes: {
				'aria-label': 'Afficher les détails de la comparaison',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Question sur le produit',
		},
		requestTypeProductComparison: {
			value: 'Comparaison de produits',
		},
		requestTypeProductFilter: {
			value: 'Filtrage des produits',
		},
		requestTypeProductSearch: {
			value: 'Recherche de produits',
		},
		requestTypeImageSearch: {
			value: 'Recherche par image',
		},
		requestTypeProductSimilar: {
			value: 'Recherche de produits similaires',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'Voir les détails du produit',
				title: 'Voir les détails du produit',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': 'Filtre appliqué',
				title: 'Filtre appliqué',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': 'Filtres supplémentaires',
				title: 'Filtres supplémentaires',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Comparaison de produits',
			attributes: {
				'aria-label': 'Comparaison de produits',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Caractéristique',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'Voir les détails du produit',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Chargement des détails du produit...',
		},
		backToComparisonButton: {
			value: 'Retour à la comparaison',
			attributes: {
				'aria-label': 'Retour à la comparaison',
			},
		},
		backToInspirationButton: {
			value: "Retour à l'inspiration",
			attributes: {
				'aria-label': "Retour à l'inspiration",
			},
		},
		addToCartButton: {
			value: 'Ajouter au panier',
		},
		similarButton: {
			value: 'Similaires',
		},
		discussButton: {
			value: 'Discuter',
		},
		inStockText: {
			value: 'En stock',
		},
		outOfStockText: {
			value: 'Rupture de stock',
		},
		unavailableText: {
			value: 'indisponible',
		},
		variantsGroup: {
			attributes: {
				'aria-label': 'Sélection de variantes',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': 'Informations sur le produit',
			},
		},
	},
	chatResult: {
		similarButton: {
			value: 'Similaires',
			attributes: {
				'aria-label': (data) => `Afficher les produits similaires à ${data?.result?.display?.mappings?.core?.name || 'ce produit'}`,
			},
		},
		compareButton: {
			value: 'Comparer',
			attributes: {
				'aria-label': (data) => `Comparer ${data?.result?.display?.mappings?.core?.name || 'le produit'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produit'} ajouté à la comparaison`,
				title: 'Ajouté à la comparaison',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Discuter de ${data?.result?.display?.mappings?.core?.name || 'ce produit'}`,
				title: 'Discuter du produit',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `Ajouter ${data?.result?.display?.mappings?.core?.name || 'le produit'} au panier`,
				title: 'Ajouter au panier',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `Configurer ${data?.result?.display?.mappings?.core?.name || 'le produit'}`,
				title: 'Configurer',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `Ouvrir ${data?.result?.display?.mappings?.core?.name || 'le produit'}`,
			},
		},
	},
	result: {
		discussProductButton: {
			attributes: {
				'aria-label': 'Discuter de ce produit',
				title: 'Discuter de ce produit',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Ce produit',
		},
		ctaButtonText: {
			value: 'Ajouter tout au panier',
		},
		ctaButtonSuccessText: {
			value: 'Offre groupée ajoutée!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Sous-total pour ${data.cartStore.count} articles`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'pausa' : 'Jouer'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Mettre le diaporama en pause' : 'Reprendre le diaporama'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Accéder au groupe de diapositives ${data.index + 1} de ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Diapositives suivantes${data.isNextDisabled ? ' (désactivé)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Diapositives précédentes${data.isPrevDisabled ? ' (désactivé)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Cliquez pour afficher ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} de ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Utilisez les touches fléchées pour naviguer entre les diapositives. Appuyez sur la barre d'espace pour mettre la lecture automatique en pause. Appuyez sur la touche Début ou Fin pour accéder au premier ou au dernier groupe de diapositives.${' '}${
					data.touchDragging && 'Sur les appareils tactiles, balayez vers la gauche ou vers la droite pour naviguer.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Trier Par',
		},
	},
	perPage: {
		label: {
			value: 'Par page',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`actuellement ${data?.selectedFacet?.field === data?.facet?.field ? 'effondré' : 'ouvrir'} ${
						data?.facet?.field
					} liste déroulante des facettes ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' choix' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Filtres Actuels',
		},
		clearAllLabel: {
			value: 'Tout effacer',
		},
	},
	facet: {
		showMoreText: {
			value: 'Afficher Plus',
		},
		showLessText: {
			value: 'Montrer Moins',
		},
		clearAllText: {
			value: 'Tout Effacer',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`actuellement ${data?.facet?.collapsed ? 'effondré' : 'ouvrir'} ${data?.facet?.label} liste déroulante des facettes ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' choix' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Soumettre',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} dérouler, ${data?.options?.length} choix ${
						data?.selectedOptions?.length ? `, L'option actuellement sélectionnée est ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'désactivé' : ''} ${data?.checkedState ? 'à carreaux' : 'décoché'} bouton radio`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'aller à la page précédente',
			},
		},
		next: {
			attributes: {
				'aria-label': 'aller à la page suivante',
			},
		},
		first: {
			attributes: {
				'aria-label': 'aller à la première page',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `aller à la dernière page ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `aller à la page ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} produits`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Tout ajouter au panier',
		},
		addToCartButtonSuccessText: {
			value: 'Ajouté !',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Tout ajouter au panier',
		},
		addToCartButtonSuccessText: {
			value: 'Ajouté !',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Charger plus',
			},
		},
		progressText: {
			value: (data) => `Vous avez consulté ${data?.pagination?.end} de ${data?.pagination?.totalResults} produits`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Moins',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `supprimer la sélection ${data?.label} filtre ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} bouton curseur, valeur actuelle ${data?.value}, ${
						data?.facet?.range?.low ? `valeur minimale ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `valeur maximale ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrer par ${data?.value?.label}`
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
							? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrer par ${data?.value?.label}`
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
							? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrer par ${data?.value?.label}`
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
							? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrer par ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Avertissement:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Informations:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Erreur:&nbsp;</b>`,
		},
		reloadText: {
			value: `Recharger`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'désactivé' : ''} ${data?.checkedState ? 'à carreaux' : 'décoché'} case à cocher`,
			},
		},
	},
	// toggle: {
	// 	toggleSwitch: {
	// 		attributes: {
	// 			'aria-label': (data) =>
	// 				`currently ${data?.toggledState ? 'selected' : 'not selected'} toggle switch ${data?.label ? `for ${data?.label}` : ''} `,
	// 		},
	// 	},
	// },
	// terms: {
	// 	term: {
	// 		value: (data) => `${data?.term?.value}`,
	// 		attributes: {
	// 			'aria-label': (data) => `item ${(data?.index || 0) + 1} of ${data?.numberOfTerms}, ${data?.term?.value}`,
	// 		},
	// 	},
	// },
	searchHeader: {
		titleText: {
			value: (data) => {
				return `Montrant résultat${data?.pagination?.totalResults == 1 ? '' : 's'} 
                ${data?.search?.query ? `pour <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Affichage maintenant de ${data?.pagination?.totalResults} éléments dans la grille de produits`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `Aucun résultat trouvé pour <em>"${data?.search?.originalQuery?.string}"</em>, montrant les résultats pour <em>"${data?.search?.query?.string}"</em> plutôt.`;
			},
			attributes: {
				'aria-label': (data) =>
					`Aucun résultat trouvé pour ${data?.search?.originalQuery?.string}, safficher les résultats pour ${data?.search?.query?.string} à la place`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    Aucun résultat pour <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span> trouvée.
                </span>`
						: `<span>Aucun résultat trouvé.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `Aucun résultat trouvé pour ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Vouliez-vous dire <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `Nous n'avons pas pu trouver de correspondance exacte pour "<span className="ss__search-header__results-query">${data?.search?.query?.string}</span>", mais voici quelque chose de similaire:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Suggestions`,
		},
		suggestionsList: {
			value:
				'<ul className="ss__no-results__suggestions__list"><li className="ss__no-results__suggestions__list__option">Vérifiez les fautes d’orthographe.</li><li className="ss__no-results__suggestions__list__option">Supprimez les éventuels mots-clés redondants (ie: "produits").</li><li className="ss__no-results__suggestions__list__option">Utilisez d\'autres mots pour décrire ce que vous recherchez.</li></ul>',
		},
		// contactsTitleText: {
		// 	value: `Vous ne trouvez toujours pas ce que vous cherchez? <a href="/contact-us">Contactez-nous</a>.`,
		// },
		// contactsList: {
		// 	value: `<div className='ss__no-results__contact__detail'>
		//                 <h4 className="ss__no-results__contact__detail__title">Adresse</h4>
		//                 <p className="ss__no-results__contact__detail__content">123 Adresse Ville, État, Code postal</p>
		//             </div>
		//             <div className='ss__no-results__contact__detail'>
		//                 <h4 className="ss__no-results__contact__detail__title">Heures</h4>
		//                 <p className="ss__no-results__contact__detail__content">Lundi - Samedi, 00:00am - 00:00pm Samedi, 00:00am - 00:00pm</p>
		//             </div>
		//             <div className='ss__no-results__contact__detail'>
		//                 <h4 className="ss__no-results__contact__detail__title">Téléphone</h4>
		//                 <p className="ss__no-results__contact__detail__content"><a href="tel:1234567890">123-456-7890</a></p>
		//             </div>
		//             <div className='ss__no-results__contact__detail'>
		//                 <h4 className="ss__no-results__contact__detail__title">Email</h4>
		//                 <p className="ss__no-results__contact__detail__content"><a href="mailto:email@site.com">email@site.com</a></p>
		//             </div>`,
		// },
	},
};
