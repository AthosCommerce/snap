const a = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'Cerrar Autocompletar', attributes: { 'aria-label': 'Cerrar Autocompletar' } },
		noResultsText: {
			value: (e) =>
				`<p>No se encontraron resultados para "${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}".</p><p>Por favor intenta otra búsqueda.</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`Ver ${e?.controller?.store?.pagination.totalResults} ${e?.controller?.store?.filters.length > 0 ? 'filtrado' : ''} resultado${
					e?.controller?.store?.pagination?.totalResults == 1 ? '' : 's'
				} para "${e?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: { value: 'Historia' },
		term: { value: (e) => `${e.term.value}`, attributes: { 'aria-label': (e) => `artículo ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'Sugerido' },
		term: { value: (e) => `${e.term.value}`, attributes: { 'aria-label': (e) => `artículo ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'Tendencia' },
		term: { value: (e) => `${e.term.value}`, attributes: { 'aria-label': (e) => `artículo ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: { value: 'Disposición' } },
	perPage: { label: { value: 'Por Página' } },
	sidebar: { titleText: { value: 'Filtros' }, applyButtonText: { value: 'Aplicar' }, clearButtonText: { value: 'Borrar todo' }, closeButtonText: {} },
	searchInput: {
		placeholderText: { attributes: { placeholder: 'Buscar' } },
		closeSearchButton: { attributes: { 'aria-label': 'Cerrar búsqueda' } },
		clearSearchButton: { attributes: { 'aria-label': 'Borrar búsqueda' } },
		submitSearchButton: { attributes: { 'aria-label': 'Enviar búsqueda' } },
	},
	recommendationBundle: {
		seedText: { value: 'Este producto' },
		ctaButtonText: { value: 'Agregar todo al carrito' },
		ctaButtonSuccessText: { value: '¡Paquete agregado!' },
		ctaSubtotalTitle: { value: (e) => `Subtotal para ${e.cartStore.count} artículos` },
	},
	result: {
		addToCartButtonText: { value: 'Añadir todo al carrito', attributes: { 'aria-label': 'Añadir todo al carrito' } },
		addToCartButtonSuccessText: { value: '¡Agregado!' },
		quickviewButtonText: { value: 'Vista rápida', attributes: { 'aria-label': 'Vista rápida' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'Añadir todo al carrito', attributes: { 'aria-label': 'Añadir todo al carrito' } },
		addToCartButtonSuccessText: { value: '¡Agregado!' },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? 'Pausa' : 'Jugar'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'Pausar presentación de diapositivas' : 'Reanudar presentación de diapositivas') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `Ir al grupo de diapositivas ${e.index + 1} de ${e.totalDots}` } },
		nextButton: { attributes: { 'aria-label': (e) => `Siguientes diapositivas${e.isNextDisabled ? ' (desactivado)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `Diapositivas anteriores${e.isPrevDisabled ? ' (desactivado)' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `Haz clic para ver ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} de ${e.slidesLength}`),
			},
		},
		srInstructions: {
			value: (e) =>
				`Utiliza las teclas de flecha para navegar por las diapositivas. Pulsa la barra espaciadora para pausar la reproducción automática. Pulsa Inicio o Fin para ir al primer o último grupo de diapositivas. ${
					e.touchDragging && 'Desliza el dedo hacia la izquierda o hacia la derecha para navegar en dispositivos táctiles'
				}`,
		},
	},
	sortBy: { label: { value: 'Clasificar por' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'Pestañas de resultados' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} resultados` : ''}` },
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`actualmente ${e?.selectedFacet?.field === e?.facet.field ? 'colapsado' : 'abierto'} el menú desplegable del filtro ${e?.facet.field} ${
						(e?.facet).values?.length ? (e?.facet).values?.length + ' opciones' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'Filtros actuales' },
		clearAllLabel: { value: 'Borrar Todo', attributes: { 'aria-label': 'Borrar Todo' } },
		noFiltersText: { value: 'No se han aplicado filtros' },
	},
	facet: {
		showMoreText: { value: 'ver más' },
		showLessText: { value: 'ver menos' },
		clearAllText: { value: 'borrar todo' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`actualmente ${e?.facet?.collapsed ? 'colapsado' : 'abierto'} el menú desplegable del filtro ${e?.facet.label} ${
						(e?.facet).values?.length ? (e?.facet).values.length + ' opciones' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'Entregar' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`${e?.label} menú desplegable, ${e?.options.length} opciones ${
						e?.selectedOptions.length ? `, opción actualmente seleccionada: ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (e) => `${e?.disabled ? 'deshabilitado' : ''} ${e?.checkedState ? 'seleccionado' : 'no seleccionado'} botón de radio`,
			},
		},
	},
	pagination: {
		previous: { attributes: { 'aria-label': 'Página anterior' } },
		next: { attributes: { 'aria-label': 'Siguiente página' } },
		first: { attributes: { 'aria-label': 'Primera página' } },
		last: { attributes: { 'aria-label': (e) => `Ir a la página anterior ${e?.pagination.last.number}` } },
		page: { attributes: { 'aria-label': (e) => `ir a la página ${e?.page?.number}` } },
	},
	paginationInfo: {
		infoText: {
			value: (e) =>
				`${e?.pagination?.multiplePages ? `${e?.pagination?.begin} - ${e?.pagination?.end} de` : ''} ${e?.pagination?.totalResults} resultado${
					e?.pagination?.totalResults == 1 ? '' : 's'
				}`,
			attributes: {
				'aria-label': (e) =>
					`mostrando ${e?.pagination?.multiplePages ? `${e?.pagination?.begin} - ${e?.pagination?.end} de` : ''} ${
						e?.pagination?.totalResults
					} resultado${e?.pagination?.totalResults == 1 ? '' : 's'}`,
			},
		},
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'Cargar más' } },
		progressText: { value: (e) => `Has visto ${e?.pagination?.end} de ${e?.pagination?.totalResults} productos` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Menos' } },
	filter: {
		filter: { attributes: { 'aria-label': (e) => `${e?.label ? `eliminar filtro seleccionado ${e?.label} ${e?.value}` : e?.value || ''}` } },
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`Deslizador de ${e?.facet.label}, valor actual ${e?.value}, ${e?.facet.range?.low ? `valor mínimo ${e?.facet.range?.low},` : ''} ${
						e?.facet.range?.high ? `valor máximo ${e?.facet.range?.high}` : ''
					}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value.filtered
							? `eliminar filtro seleccionado ${e?.facet?.label || ''} - ${e?.value.label}`
							: e?.facet?.label
							? `filtrar por ${e?.facet?.label} - ${e?.value.label}`
							: `filtrar por ${e?.value.label}`
					}`,
			},
		},
	},
	facetListOptions: {
		listOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value.filtered
							? `eliminar filtro seleccionado ${e?.facet?.label || ''} - ${e?.value.label}`
							: e?.facet?.label
							? `filtrar por ${e?.facet?.label} - ${e?.value.label}`
							: `filtrar por ${e?.value.label}`
					}`,
			},
		},
	},
	facetHierarchyOptions: {
		hierarchyOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value.filtered
							? `eliminar filtro seleccionado ${e?.facet?.label || ''} - ${e?.value.label}`
							: e?.facet?.label
							? `filtrar por ${e?.facet?.label} - ${e?.value.label}`
							: `filtrar por ${e?.value.label}`
					}`,
			},
		},
	},
	facetGridOptions: {
		gridOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value.filtered
							? `eliminar filtro seleccionado ${e?.facet?.label || ''} - ${e?.value.label}`
							: e?.facet?.label
							? `filtrar por ${e?.facet?.label} - ${e?.value.label}`
							: `filtrar por ${e?.value.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>Advertencia:&nbsp;</b>' },
		infoText: { value: '<b>Información:&nbsp;</b>' },
		errorText: { value: '<b>Error:&nbsp;</b>' },
		reloadText: { value: 'Recargar' },
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (e) => `${e?.disabled ? 'deshabilitado' : ''} ${e?.checkedState ? 'seleccionado' : 'no seleccionado'} casilla de verificación`,
			},
		},
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'cantidad' } },
		decrementButton: { attributes: { 'aria-label': 'disminuir la cantidad' } },
		incrementButton: { attributes: { 'aria-label': 'aumentar la cantidad' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `Mostrando resultado${e?.pagination?.totalResults == 1 ? '' : 's'} 
                ${e?.search?.query ? `para <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>` : ''}`,
			attributes: { 'aria-label': (e) => `Mostrando ahora ${e?.pagination?.totalResults} artículos en la cuadrícula de productos` },
		},
		correctedQueryText: {
			value: (e) =>
				`No se encontraron resultados para <em>"${e?.search?.originalQuery?.string}"</em>, mostrando resultados para <em>"${e?.search?.query?.string}"</em> en su lugar.`,
			attributes: {
				'aria-label': (e) =>
					`No se encontraron resultados para ${e?.search?.originalQuery?.string}, mostrando resultados para ${e?.search?.query?.string} en su lugar`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    No se encontraron resultados para <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>.
                </span>`
						: '<span>No se encontraron resultados.</span>'
				}`,
			attributes: { 'aria-label': (e) => `No se encontraron resultados para ${e?.search?.query?.string}` },
		},
		didYouMeanText: { value: (e) => `¿Quiso decir <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
		expandedSearchText: {
			value: (e) =>
				`No pudimos encontrar una coincidencia exacta para "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", pero aquí hay algo similar:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'Sugerencias' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Verifica si hay errores de ortografía.</li><li class="ss__no-results__suggestions__list__option">Elimina palabras clave redundantes (ej. "productos").</li><li class="ss__no-results__suggestions__list__option">Usa otros términos para describir lo que estás buscando.</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'Galería de imágenes' } },
		zoomOutButton: { attributes: { 'aria-label': 'Alejar' } },
		zoomInButton: { attributes: { 'aria-label': 'Acercar' } },
		closeButton: { attributes: { 'aria-label': 'Cerrar galería' } },
		prevButton: { attributes: { 'aria-label': 'Imagen anterior' } },
		nextButton: { attributes: { 'aria-label': 'Imagen siguiente' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'Vista rápida' } },
		closeButton: { attributes: { 'aria-label': 'Cerrar vista rápida' } },
		addToCartButton: { value: 'Añadir al carrito' },
		moreInfoButton: { value: 'Más información' },
		loadingText: { value: 'Cargando…' },
	},
};
export { a as es };
