import { LangComponents } from '../../../../../components/src';
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';

export const es: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Cerrar Autocompletar',
			attributes: {
				'aria-label': 'Cerrar Autocompletar',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>No se encontraron resultados para "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Por favor intenta otra búsqueda.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Ver ${data?.controller?.store?.pagination.totalResults} ${data?.controller?.store?.filters.length > 0 ? 'filtrado' : ''} resultado${
					data?.controller?.store?.pagination?.totalResults == 1 ? '' : 's'
				} para "${data?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'Historia',
		},
		term: {
			value: (data) => `${data.term.value}`,
			attributes: {
				'aria-label': (data) => `artículo ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Sugerido',
		},
		term: {
			value: (data) => `${data.term.value}`,
			attributes: {
				'aria-label': (data) => `artículo ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Tendencia',
		},
		term: {
			value: (data) => `${data.term.value}`,
			attributes: {
				'aria-label': (data) => `artículo ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
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
		label: {
			value: 'Disposición',
		},
	},
	perPage: {
		label: {
			value: 'Por Página',
		},
	},
	sidebar: {
		titleText: {
			value: 'Filtros',
		},
		applyButtonText: {
			value: 'Aplicar',
		},
		clearButtonText: {
			value: 'Borrar todo',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Buscar',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Cerrar búsqueda',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Borrar búsqueda',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Enviar búsqueda',
			},
		},
		chatButton: {
			attributes: {
				'aria-label': 'Abrir chat',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Abrir chat',
				title: 'Abrir chat',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Cerrar chat',
				title: 'Cerrar chat',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Nuevo chat',
				title: 'Nuevo chat',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Historial del chat',
				title: 'Historial del chat',
			},
		},
		historyTitle: {
			value: 'Historial',
		},
		historyClearButton: {
			value: 'borrar',
		},
		historyNewChatLabel: {
			value: 'Nuevo chat',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Detalles de la conversación',
			},
		},
		inspirationResultTitle: {
			value: 'Escenarios de inspiración',
		},
		inspirationResultSubtitle: {
			value: 'Elige una dirección de estilo para explorar',
		},
		productComparisonTitle: {
			value: 'Comparación de productos',
		},
		productComparisonSubtitle: {
			value: (data) => `Comparando ${data?.count ?? ''} productos`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Mensajes del chat',
			},
		},
		newMessagesButton: {
			value: 'Mensajes nuevos',
		},
		loadingVerbsProductQuery: {
			value: 'Pensando, Buscando, Analizando, Reuniendo detalles',
		},
		loadingVerbsProductSearch: {
			value: 'Buscando, Explorando el catálogo, Encontrando productos, Seleccionando resultados',
		},
		loadingVerbsProductComparison: {
			value: 'Comparando, Analizando, Evaluando, Sopesando opciones',
		},
		loadingVerbsImageSearch: {
			value: 'Analizando la imagen, Identificando, Buscando, Emparejando',
		},
		loadingVerbsProductSimilar: {
			value: 'Encontrando artículos similares, Buscando, Emparejando, Seleccionando',
		},
		loadingVerbsInspirationRequest: {
			value: 'Generando ideas, Imaginando, Seleccionando, Inspirando',
		},
		feedbackPrompt: {
			value: '¿Cómo va tu experiencia hasta ahora?',
		},
		feedbackThanks: {
			value: 'Gracias por tus comentarios',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Me gusta',
				title: 'Me gusta',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'No me gusta',
				title: 'No me gusta',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Descartar comentarios',
			},
		},
		comparisonsTitle: {
			value: (data) => `Comparar productos (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'borrar',
		},
		comparisonsAddText: {
			value: 'Agregar',
		},
		comparisonsCompareButton: {
			value: 'Comparar',
			attributes: {
				title: 'Comparar',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `Eliminar ${data?.name || 'producto'} de la comparación`,
			},
		},
		chatUnavailableMessage: {
			value: 'El servicio no está disponible temporalmente. Mientras tanto, ¡usa la barra de búsqueda de arriba para encontrar lo que necesitas!',
		},
		highVolumeMessage: {
			value: 'El chat no está disponible en este momento debido al alto volumen de consultas.',
		},
		highVolumeSubMessage: {
			value: 'Mientras tanto, ¡usa la barra de búsqueda de arriba para encontrar lo que necesitas!',
		},
		newSessionButton: {
			value: 'Nueva sesión',
		},
		facetsTitle: {
			value: 'Filtrar por:',
		},
		facetsApplyButton: {
			value: (data) => `Aplicar (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Borrar filtros',
		},
		attachmentCompareTitle: {
			value: 'Comparar estos productos',
		},
		attachmentAskProductTitle: {
			value: 'Preguntar sobre este producto',
		},
		attachmentImageSimilarTitle: {
			value: 'Buscar productos similares a esta imagen:',
		},
		topicDriftScopeMessage: {
			value: 'Estoy aquí para ayudarte con tus compras',
		},
		topicDriftScopeSubMessage: {
			value: 'Prueba a preguntar sobre productos, comparaciones o recomendaciones',
		},
		topicDriftMessage: {
			value: '¿Buscas algo nuevo?',
		},
		topicDriftSubMessage: {
			value: '¿Inicias una nueva sesión para una mejor asistencia o continúas en esta?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Descartar',
			},
		},
		inputPlaceholder: {
			value: 'Escribe tu mensaje...',
		},
		inputPlaceholderAskProduct: {
			value: 'Pregunta sobre este producto...',
		},
		inputPlaceholderCompare: {
			value: '¿Qué te gustaría comparar?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Pregunta sobre los productos comparados...',
		},
		inputPlaceholderAskImage: {
			value: 'Pregunta sobre esta imagen...',
		},
		inputPlaceholderAddCompare: {
			value: 'Agrega otro producto para comparar...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Subir imagen',
				title: 'Subir imagen',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Enviar mensaje',
				title: 'Enviar mensaje',
			},
		},
		dropOverlayText: {
			value: 'Suelta la imagen para subirla',
		},
		disclaimerText: {
			value: 'Asistente impulsado por IA. A veces comete errores. Evita compartir datos personales.',
		},
		privacyPolicyLinkText: {
			value: 'Política de privacidad',
		},
		expiredMessage: {
			value: 'Este chat ha expirado. Por favor inicia un nuevo chat.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Pensando',
		},
		searchingVerb: {
			value: 'Buscando',
		},
		analyzingVerb: {
			value: 'Analizando',
		},
		generatingVerb: {
			value: 'Generando',
		},
		processingVerb: {
			value: 'Procesando',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'Cerrar',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': 'Abrir elemento',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': 'Cargando elemento',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': 'Eliminar elemento',
			},
		},
		uploadFailedText: {
			value: 'Error al subir el archivo',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'Buscar este término',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'Abrir producto',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'Ver inspiración',
				title: 'Ver inspiración',
			},
		},
		closeInspirationButton: {
			value: 'Cerrar inspiración',
			attributes: {
				'aria-label': 'Cerrar inspiración',
				title: 'Cerrar inspiración',
			},
		},
		exploreInspirationButton: {
			value: 'Explorar escenarios de inspiración',
			attributes: {
				'aria-label': 'Explorar escenarios de inspiración',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Ver comparación',
				title: 'Ver comparación',
			},
		},
		closeComparisonButton: {
			value: 'Cerrar comparación',
			attributes: {
				'aria-label': 'Cerrar comparación',
				title: 'Cerrar comparación',
			},
		},
		exploreComparisonButton: {
			value: 'Explorar datos de comparación',
			attributes: {
				'aria-label': 'Explorar datos de comparación',
			},
		},
		showDetailsButton: {
			value: 'Mostrar detalles',
			attributes: {
				'aria-label': 'Mostrar detalles de la comparación',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Preguntando sobre el producto',
		},
		requestTypeProductComparison: {
			value: 'Comparando productos',
		},
		requestTypeProductFilter: {
			value: 'Filtrando productos',
		},
		requestTypeProductSearch: {
			value: 'Buscando productos',
		},
		requestTypeImageSearch: {
			value: 'Buscando por imagen',
		},
		requestTypeProductSimilar: {
			value: 'Buscando productos similares',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'Ver detalles del producto',
				title: 'Ver detalles del producto',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': 'Filtro aplicado',
				title: 'Filtro aplicado',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': 'Filtros adicionales',
				title: 'Filtros adicionales',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Comparación de productos',
			attributes: {
				'aria-label': 'Comparación de productos',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Característica',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'Ver detalles del producto',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Cargando detalles del producto...',
		},
		backToComparisonButton: {
			value: 'Volver a la comparación',
			attributes: {
				'aria-label': 'Volver a la comparación',
			},
		},
		backToInspirationButton: {
			value: 'Volver a la inspiración',
			attributes: {
				'aria-label': 'Volver a la inspiración',
			},
		},
		addToCartButton: {
			value: 'Agregar al carrito',
		},
		similarButton: {
			value: 'Similares',
		},
		discussButton: {
			value: 'Consultar',
		},
		inStockText: {
			value: 'En stock',
		},
		outOfStockText: {
			value: 'Agotado',
		},
		unavailableText: {
			value: 'no disponible',
		},
		variantsGroup: {
			attributes: {
				'aria-label': 'Selección de variantes',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': 'Información del producto',
			},
		},
	},
	chatResult: {
		similarButton: {
			value: 'Similares',
			attributes: {
				'aria-label': (data) => `Mostrar similares a ${data?.result?.display?.mappings?.core?.name || 'producto'}`,
			},
		},
		compareButton: {
			value: 'Comparar',
			attributes: {
				'aria-label': (data) => `Comparar ${data?.result?.display?.mappings?.core?.name || 'producto'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Producto'} agregado a la comparación`,
				title: 'Agregado a la comparación',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Consultar sobre ${data?.result?.display?.mappings?.core?.name || 'producto'}`,
				title: 'Consultar producto',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `Agregar ${data?.result?.display?.mappings?.core?.name || 'producto'} al carrito`,
				title: 'Agregar al carrito',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `Configurar ${data?.result?.display?.mappings?.core?.name || 'producto'}`,
				title: 'Configurar',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `Abrir ${data?.result?.display?.mappings?.core?.name || 'producto'}`,
			},
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Añadir todo al carrito',
		},
		addToCartButtonSuccessText: {
			value: '¡Agregado!',
		},
		discussProductButton: {
			attributes: {
				'aria-label': 'Consultar sobre este producto',
				title: 'Consultar sobre este producto',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Este producto',
		},
		ctaButtonText: {
			value: 'Agregar todo al carrito',
		},
		ctaButtonSuccessText: {
			value: '¡Paquete agregado!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Subtotal para ${data.cartStore.count} artículos`,
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Añadir todo al carrito',
		},
		addToCartButtonSuccessText: {
			value: '¡Agregado!',
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Pausa' : 'Jugar'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Pausar presentación de diapositivas' : 'Reanudar presentación de diapositivas'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Ir al grupo de diapositivas ${data.index + 1} de ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Siguientes diapositivas${data.isNextDisabled ? ' (desactivado)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Diapositivas anteriores${data.isPrevDisabled ? ' (desactivado)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Haz clic para ver ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} de ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Utiliza las teclas de flecha para navegar por las diapositivas. Pulsa la barra espaciadora para pausar la reproducción automática. Pulsa Inicio o Fin para ir al primer o último grupo de diapositivas.${' '}${
					data.touchDragging && 'Desliza el dedo hacia la izquierda o hacia la derecha para navegar en dispositivos táctiles'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Clasificar por',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`actualmente ${data?.selectedFacet?.field === data?.facet.field ? 'colapsado' : 'abierto'} el menú desplegable del filtro ${
						data?.facet.field
					} ${(data?.facet as ValueFacet).values?.length ? (data?.facet as ValueFacet).values?.length + ' opciones' : ''}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Filtros actuales',
		},
		clearAllLabel: {
			value: 'Borrar Todo',
		},
	},
	facet: {
		showMoreText: {
			value: 'ver más',
		},
		showLessText: {
			value: 'ver menos',
		},
		clearAllText: {
			value: 'borrar todo',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`actualmente ${data?.facet?.collapsed ? 'colapsado' : 'abierto'} el menú desplegable del filtro ${data?.facet.label} ${
						(data?.facet as ValueFacet).values?.length ? (data?.facet as ValueFacet).values.length + ' opciones' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Entregar',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} menú desplegable, ${data?.options.length} opciones ${
						data?.selectedOptions.length ? `, opción actualmente seleccionada: ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'deshabilitado' : ''} ${data?.checkedState ? 'seleccionado' : 'no seleccionado'} botón de radio`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'Página anterior',
			},
		},
		next: {
			attributes: {
				'aria-label': 'Siguiente página',
			},
		},
		first: {
			attributes: {
				'aria-label': 'Primera página',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `Ir a la página anterior ${data?.pagination.last.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `ir a la página ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			value: (data) =>
				`${data?.pagination?.multiplePages ? `${data?.pagination?.begin} - ${data?.pagination?.end} de` : ''} ${
					data?.pagination?.totalResults
				} resultado${data?.pagination?.totalResults == 1 ? '' : 's'}`,
			attributes: {
				'aria-label': (data) =>
					`mostrando ${data?.pagination?.multiplePages ? `${data?.pagination?.begin} - ${data?.pagination?.end} de` : ''} ${
						data?.pagination?.totalResults
					} resultado${data?.pagination?.totalResults == 1 ? '' : 's'}`,
			},
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Cargar más',
			},
		},
		progressText: {
			value: (data) => `Has visto ${data?.pagination?.end} de ${data?.pagination?.totalResults} productos`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Menos',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `eliminar filtro seleccionado ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`Deslizador de ${data?.facet.label}, valor actual ${data?.value}, ${
						data?.facet.range?.low ? `valor mínimo ${data?.facet.range?.low},` : ''
					} ${data?.facet.range?.high ? `valor máximo ${data?.facet.range?.high}` : ''}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value.filtered
							? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
							: `filtrar por ${data?.value.label}`
					}`,
			},
		},
	},
	facetListOptions: {
		listOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value.filtered
							? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
							: `filtrar por ${data?.value.label}`
					}`,
			},
		},
	},
	facetHierarchyOptions: {
		hierarchyOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value.filtered
							? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
							: `filtrar por ${data?.value.label}`
					}`,
			},
		},
	},
	facetGridOptions: {
		gridOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value.filtered
							? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
							: `filtrar por ${data?.value.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Advertencia:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Información:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Error:&nbsp;</b>`,
		},
		reloadText: {
			value: `Recargar`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) =>
					`${data?.disabled ? 'deshabilitado' : ''} ${data?.checkedState ? 'seleccionado' : 'no seleccionado'} casilla de verificación`,
			},
		},
	},
	// toggle: {
	// 	toggleSwitch: {
	// 		attributes: {
	// 			'aria-label': (data) =>
	// 				`actualmente ${data?.toggledState ? 'seleccionado' : 'no seleccionado'} interruptor ${
	// 					data?.label ? `para ${data?.label}` : ''
	// 				}`,
	// 		},
	// 	},
	// },
	// terms: {
	// 	term: {
	// 		value: (data) => `${data?.term.value}`,
	// 		attributes: {
	// 			'aria-label': (data) => `elemento ${(data?.index || 0) + 1} de ${data?.numberOfTerms}, ${data?.term.value}`,
	// 		},
	// 	},
	// },
	searchHeader: {
		titleText: {
			value: (data) => {
				return `Mostrando resultado${data?.pagination?.totalResults == 1 ? '' : 's'} 
                ${data?.search?.query ? `para <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Mostrando ahora ${data?.pagination?.totalResults} artículos en la cuadrícula de productos`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `No se encontraron resultados para <em>"${data?.search?.originalQuery?.string}"</em>, mostrando resultados para <em>"${data?.search?.query?.string}"</em> en su lugar.`;
			},
			attributes: {
				'aria-label': (data) =>
					`No se encontraron resultados para ${data?.search?.originalQuery?.string}, mostrando resultados para ${data?.search?.query?.string} en su lugar`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    No se encontraron resultados para <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>No se encontraron resultados.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `No se encontraron resultados para ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `¿Quiso decir <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `No pudimos encontrar una coincidencia exacta para "<span className="ss__search-header__results-query">${data?.search?.query?.string}</span>", pero aquí hay algo similar:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Sugerencias`,
		},
		suggestionsList: {
			value:
				'<ul className="ss__no-results__suggestions__list"><li className="ss__no-results__suggestions__list__option">Verifica si hay errores de ortografía.</li><li className="ss__no-results__suggestions__list__option">Elimina palabras clave redundantes (ej. "productos").</li><li className="ss__no-results__suggestions__list__option">Usa otros términos para describir lo que estás buscando.</li></ul>',
		},
		contactsTitleText: {
			value: `¿Aún no encuentras lo que buscas? <a href="/contact-us">Contáctanos</a>.`,
		},
		contactsList: {
			value: `<div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Dirección</h4>
                        <p className="ss__no-results__contact__detail__content">123 Calle Dirección, Ciudad, Estado, Código Postal</p>
                    </div>
                    <div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Horario</h4>
                        <p className="ss__no-results__contact__detail__content">Lunes a Sábado, 00:00am - 00:00pm Domingo, 00:00am - 00:00pm</p>
                    </div>
                    <div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Teléfono</h4>
                        <p className="ss__no-results__contact__detail__content"><a href="tel:1234567890">123-456-7890</a></p>
                    </div>
                    <div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Correo Electrónico</h4>
                        <p className="ss__no-results__contact__detail__content"><a href="mailto:email@site.com">email@site.com</a></p>
                    </div>`,
		},
	},
};
