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
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'Chat öffnen',
				title: 'Chat öffnen',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Chat schließen',
				title: 'Chat schließen',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Chat öffnen',
				title: 'Chat öffnen',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Chat schließen',
				title: 'Chat schließen',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Neuer Chat',
				title: 'Neuer Chat',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Chatverlauf',
				title: 'Chatverlauf',
			},
		},
		historyTitle: {
			value: 'Verlauf',
		},
		historyClearButton: {
			value: 'löschen',
		},
		historyNewChatLabel: {
			value: 'Neuer Chat',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Details zur Unterhaltung',
			},
		},
		inspirationResultTitle: {
			value: 'Inspirationsszenarien',
		},
		inspirationResultSubtitle: {
			value: 'Wählen Sie eine Stilrichtung zum Entdecken',
		},
		productComparisonTitle: {
			value: 'Produktvergleich',
		},
		productComparisonSubtitle: {
			value: (data) => `${data?.count ?? ''} Produkte werden verglichen`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Chatnachrichten',
			},
		},
		newMessagesButton: {
			value: 'Neue Nachrichten',
		},
		loadingVerbsProductQuery: {
			value: 'Denke nach, Suche, Analysiere, Sammle Details',
		},
		loadingVerbsProductSearch: {
			value: 'Suche, Durchstöbere den Katalog, Finde Produkte, Wähle Ergebnisse aus',
		},
		loadingVerbsProductComparison: {
			value: 'Vergleiche, Analysiere, Bewerte, Wäge Optionen ab',
		},
		loadingVerbsImageSearch: {
			value: 'Analysiere das Bild, Identifiziere, Suche, Gleiche ab',
		},
		loadingVerbsProductSimilar: {
			value: 'Finde ähnliche Artikel, Suche, Gleiche ab, Wähle aus',
		},
		loadingVerbsInspirationRequest: {
			value: 'Sammle Ideen, Stelle mir vor, Wähle aus, Inspiriere',
		},
		feedbackPrompt: {
			value: 'Wie gefällt Ihnen Ihr Erlebnis bisher?',
		},
		feedbackThanks: {
			value: 'Vielen Dank für Ihr Feedback',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Gefällt mir',
				title: 'Gefällt mir',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'Gefällt mir nicht',
				title: 'Gefällt mir nicht',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Feedback ausblenden',
			},
		},
		comparisonsTitle: {
			value: (data) => `Produkte vergleichen (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'löschen',
		},
		comparisonsAddText: {
			value: 'Hinzufügen',
		},
		comparisonsCompareButton: {
			value: 'Vergleichen',
			attributes: {
				title: 'Vergleichen',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `${data?.name || 'Produkt'} aus dem Vergleich entfernen`,
			},
		},
		chatUnavailableMessage: {
			value:
				'Der Dienst ist vorübergehend nicht verfügbar. Nutzen Sie in der Zwischenzeit gerne die Suchleiste oben, um zu finden, was Sie brauchen!',
		},
		highVolumeMessage: {
			value: 'Der Chat ist aufgrund hoher Auslastung derzeit nicht verfügbar.',
		},
		highVolumeSubMessage: {
			value: 'Nutzen Sie in der Zwischenzeit gerne die Suchleiste oben, um zu finden, was Sie brauchen!',
		},
		newSessionButton: {
			value: 'Neue Sitzung',
		},
		facetsTitle: {
			value: 'Filtern nach:',
		},
		facetsApplyButton: {
			value: (data) => `Anwenden (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Filter löschen',
		},
		attachmentCompareTitle: {
			value: 'Diese Produkte vergleichen',
		},
		attachmentAskProductTitle: {
			value: 'Zu diesem Produkt fragen',
		},
		attachmentImageSimilarTitle: {
			value: 'Produkte finden, die diesem Bild ähneln:',
		},
		topicDriftScopeMessage: {
			value: 'Ich bin hier, um Ihnen beim Einkaufen zu helfen',
		},
		topicDriftScopeSubMessage: {
			value: 'Fragen Sie nach Produkten, Vergleichen oder Empfehlungen',
		},
		topicDriftMessage: {
			value: 'Suchen Sie etwas Neues?',
		},
		topicDriftSubMessage: {
			value: 'Neue Sitzung für bessere Unterstützung starten oder in dieser weitermachen?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Ausblenden',
			},
		},
		inputPlaceholder: {
			value: 'Geben Sie Ihre Nachricht ein...',
		},
		inputPlaceholderAskProduct: {
			value: 'Fragen Sie zu diesem Produkt...',
		},
		inputPlaceholderCompare: {
			value: 'Was möchten Sie vergleichen?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Fragen Sie zu den verglichenen Produkten...',
		},
		inputPlaceholderAskImage: {
			value: 'Fragen Sie zu diesem Bild...',
		},
		inputPlaceholderAddCompare: {
			value: 'Weiteres Produkt zum Vergleich hinzufügen...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Bild hochladen',
				title: 'Bild hochladen',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Nachricht senden',
				title: 'Nachricht senden',
			},
		},
		dropOverlayText: {
			value: 'Bild zum Hochladen hier ablegen',
		},
		disclaimerText: {
			value: 'KI-gestützter Assistent. Er macht manchmal Fehler. Vermeiden Sie die Weitergabe persönlicher Daten.',
		},
		privacyPolicyLinkText: {
			value: 'Datenschutzerklärung',
		},
		expiredMessage: {
			value: 'Dieser Chat ist abgelaufen. Bitte starten Sie einen neuen Chat.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Denke nach',
		},
		searchingVerb: {
			value: 'Suche',
		},
		analyzingVerb: {
			value: 'Analysiere',
		},
		generatingVerb: {
			value: 'Generiere',
		},
		processingVerb: {
			value: 'Verarbeite',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'Schließen',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': 'Element öffnen',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': 'Element wird geladen',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': 'Element entfernen',
			},
		},
		uploadFailedText: {
			value: 'Hochladen fehlgeschlagen',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'Nach diesem Begriff suchen',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'Produkt öffnen',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'Inspiration anzeigen',
				title: 'Inspiration anzeigen',
			},
		},
		closeInspirationButton: {
			value: 'Inspiration schließen',
			attributes: {
				'aria-label': 'Inspiration schließen',
				title: 'Inspiration schließen',
			},
		},
		exploreInspirationButton: {
			value: 'Inspirationsszenarien entdecken',
			attributes: {
				'aria-label': 'Inspirationsszenarien entdecken',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Vergleich anzeigen',
				title: 'Vergleich anzeigen',
			},
		},
		closeComparisonButton: {
			value: 'Vergleich schließen',
			attributes: {
				'aria-label': 'Vergleich schließen',
				title: 'Vergleich schließen',
			},
		},
		exploreComparisonButton: {
			value: 'Vergleichsdaten erkunden',
			attributes: {
				'aria-label': 'Vergleichsdaten erkunden',
			},
		},
		showDetailsButton: {
			value: 'Details anzeigen',
			attributes: {
				'aria-label': 'Vergleichsdetails anzeigen',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Frage zum Produkt',
		},
		requestTypeProductComparison: {
			value: 'Produkte werden verglichen',
		},
		requestTypeProductFilter: {
			value: 'Produkte werden gefiltert',
		},
		requestTypeProductSearch: {
			value: 'Produkte werden gesucht',
		},
		requestTypeImageSearch: {
			value: 'Suche nach Bild',
		},
		requestTypeProductSimilar: {
			value: 'Ähnliche Produkte werden gesucht',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'Produktdetails anzeigen',
				title: 'Produktdetails anzeigen',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': 'Angewendeter Filter',
				title: 'Angewendeter Filter',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': 'Weitere Filter',
				title: 'Weitere Filter',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Produktvergleich',
			attributes: {
				'aria-label': 'Produktvergleich',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Merkmal',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'Produktdetails anzeigen',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Produktdetails werden geladen...',
		},
		backToComparisonButton: {
			value: 'Zurück zum Vergleich',
			attributes: {
				'aria-label': 'Zurück zum Vergleich',
			},
		},
		backToInspirationButton: {
			value: 'Zurück zur Inspiration',
			attributes: {
				'aria-label': 'Zurück zur Inspiration',
			},
		},
		addToCartButton: {
			value: 'In den Warenkorb legen',
		},
		similarButton: {
			value: 'Ähnliche',
		},
		discussButton: {
			value: 'Besprechen',
		},
		inStockText: {
			value: 'Auf Lager',
		},
		outOfStockText: {
			value: 'Ausverkauft',
		},
		unavailableText: {
			value: 'nicht verfügbar',
		},
		variantsGroup: {
			attributes: {
				'aria-label': 'Variantenauswahl',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': 'Produktinformationen',
			},
		},
	},
	chatResult: {
		similarButton: {
			value: 'Ähnliche',
			attributes: {
				'aria-label': (data) => `Ähnliche zu ${data?.result?.display?.mappings?.core?.name || 'Produkt'} anzeigen`,
			},
		},
		compareButton: {
			value: 'Vergleichen',
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produkt'} vergleichen`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produkt'} zum Vergleich hinzugefügt`,
				title: 'Zum Vergleich hinzugefügt',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Über ${data?.result?.display?.mappings?.core?.name || 'Produkt'} sprechen`,
				title: 'Über das Produkt sprechen',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produkt'} in den Warenkorb legen`,
				title: 'In den Warenkorb legen',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produkt'} konfigurieren`,
				title: 'Konfigurieren',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produkt'} öffnen`,
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
		discussProductButton: {
			attributes: {
				'aria-label': 'Über dieses Produkt sprechen',
				title: 'Über dieses Produkt sprechen',
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
