'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6558],
		{
			'./src/Templates/Stores/library/languages/es.ts'(r, a, t) {
				t.r(a), t.d(a, { es: () => l });
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'Cerrar Autocompletar', attributes: { 'aria-label': 'Cerrar Autocompletar' } },
						noResultsText: {
							value: (e) =>
								`<p>No se encontraron resultados para "${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}".</p><p>Por favor intenta otra b\xFAsqueda.</p>`,
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
						term: {
							value: (e) => `${e.term.value}`,
							attributes: { 'aria-label': (e) => `art\xEDculo ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` },
						},
					},
					'terms.suggestions': {
						title: { value: 'Sugerido' },
						term: {
							value: (e) => `${e.term.value}`,
							attributes: { 'aria-label': (e) => `art\xEDculo ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` },
						},
					},
					'terms.trending': {
						title: { value: 'Tendencia' },
						term: {
							value: (e) => `${e.term.value}`,
							attributes: { 'aria-label': (e) => `art\xEDculo ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` },
						},
					},
					button: {},
					search: {},
					list: {},
					radioList: {},
					layoutSelector: { label: { value: 'Disposici\xF3n' } },
					perPage: { label: { value: 'Por P\xE1gina' } },
					sidebar: { titleText: { value: 'Filtros' } },
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Buscar' } },
						closeSearchButton: { attributes: { 'aria-label': 'Cerrar b\xFAsqueda' } },
						clearSearchButton: { attributes: { 'aria-label': 'Borrar b\xFAsqueda' } },
						submitSearchButton: { attributes: { 'aria-label': 'Enviar b\xFAsqueda' } },
					},
					recommendationBundle: {
						seedText: { value: 'Este producto' },
						ctaButtonText: { value: 'Agregar todo al carrito' },
						ctaButtonSuccessText: { value: '\xA1Paquete agregado!' },
						ctaSubtotalTitle: { value: (e) => `Subtotal para ${e.cartStore.count} art\xEDculos` },
					},
					result: { addToCartButtonText: { value: 'A\xF1adir todo al carrito' }, addToCartButtonSuccessText: { value: '\xA1Agregado!' } },
					overlayResult: { addToCartButtonText: { value: 'A\xF1adir todo al carrito' }, addToCartButtonSuccessText: { value: '\xA1Agregado!' } },
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'Pausa' : 'Jugar'),
							attributes: {
								'aria-label': (e) => (e.isPlaying ? 'Pausar presentaci\xF3n de diapositivas' : 'Reanudar presentaci\xF3n de diapositivas'),
							},
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
								`Utiliza las teclas de flecha para navegar por las diapositivas. Pulsa la barra espaciadora para pausar la reproducci\xF3n autom\xE1tica. Pulsa Inicio o Fin para ir al primer o \xFAltimo grupo de diapositivas. ${
									e.touchDragging && 'Desliza el dedo hacia la izquierda o hacia la derecha para navegar en dispositivos t\xE1ctiles'
								}`,
						},
					},
					sortBy: { label: { value: 'Clasificar por' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`actualmente ${e?.selectedFacet?.field === e?.facet.field ? 'colapsado' : 'abierto'} el men\xFA desplegable del filtro ${
										e?.facet.field
									} ${(e?.facet).values?.length ? (e?.facet).values?.length + ' opciones' : ''}`,
							},
						},
					},
					filterSummary: { title: { value: 'Filtros actuales' }, clearAllLabel: { value: 'Borrar Todo' } },
					facet: {
						showMoreText: { value: 'ver m\xE1s' },
						showLessText: { value: 'ver menos' },
						clearAllText: { value: 'borrar todo' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`actualmente ${e?.facet?.collapsed ? 'colapsado' : 'abierto'} el men\xFA desplegable del filtro ${e?.facet.label} ${
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
									`${e?.label} men\xFA desplegable, ${e?.options.length} opciones ${
										e?.selectedOptions.length ? `, opci\xF3n actualmente seleccionada: ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'deshabilitado' : ''} ${e?.checkedState ? 'seleccionado' : 'no seleccionado'} bot\xF3n de radio`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': 'P\xE1gina anterior' } },
						next: { attributes: { 'aria-label': 'Siguiente p\xE1gina' } },
						first: { attributes: { 'aria-label': 'Primera p\xE1gina' } },
						last: { attributes: { 'aria-label': (e) => `Ir a la p\xE1gina anterior ${e?.pagination.last.number}` } },
						page: { attributes: { 'aria-label': (e) => `ir a la p\xE1gina ${e?.page?.number}` } },
					},
					paginationInfo: {
						infoText: {
							value: (e) =>
								`${e?.pagination?.multiplePages ? `${e?.pagination?.begin} - ${e?.pagination?.end} de` : ''} ${
									e?.pagination?.totalResults
								} resultado${e?.pagination?.totalResults == 1 ? '' : 's'}`,
							attributes: {
								'aria-label': (e) =>
									`mostrando ${e?.pagination?.multiplePages ? `${e?.pagination?.begin} - ${e?.pagination?.end} de` : ''} ${
										e?.pagination?.totalResults
									} resultado${e?.pagination?.totalResults == 1 ? '' : 's'}`,
							},
						},
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Cargar m\xE1s' } },
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
									`Deslizador de ${e?.facet.label}, valor actual ${e?.value}, ${
										e?.facet.range?.low ? `valor m\xEDnimo ${e?.facet.range?.low},` : ''
									} ${e?.facet.range?.high ? `valor m\xE1ximo ${e?.facet.range?.high}` : ''}`,
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
						infoText: { value: '<b>Informaci\xF3n:&nbsp;</b>' },
						errorText: { value: '<b>Error:&nbsp;</b>' },
						reloadText: { value: 'Recargar' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) =>
									`${e?.disabled ? 'deshabilitado' : ''} ${e?.checkedState ? 'seleccionado' : 'no seleccionado'} casilla de verificaci\xF3n`,
							},
						},
					},
					searchHeader: {
						titleText: {
							value: (e) => `Mostrando resultado${e?.pagination?.totalResults == 1 ? '' : 's'} 
                ${e?.search?.query ? `para <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>` : ''}`,
							attributes: { 'aria-label': (e) => `Mostrando ahora ${e?.pagination?.totalResults} art\xEDculos en la cuadr\xEDcula de productos` },
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
						didYouMeanText: { value: (e) => `\xBFQuiso decir <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
						expandedSearchText: {
							value: (e) =>
								`No pudimos encontrar una coincidencia exacta para "<span className="ss__search-header__results-query">${e?.search?.query?.string}</span>", pero aqu\xED hay algo similar:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'Sugerencias' },
						suggestionsList: {
							value:
								'<ul className="ss__no-results__suggestions__list"><li className="ss__no-results__suggestions__list__option">Verifica si hay errores de ortograf\xEDa.</li><li className="ss__no-results__suggestions__list__option">Elimina palabras clave redundantes (ej. "productos").</li><li className="ss__no-results__suggestions__list__option">Usa otros t\xE9rminos para describir lo que est\xE1s buscando.</li></ul>',
						},
						contactsTitleText: { value: '\xBFA\xFAn no encuentras lo que buscas? <a href="/contact-us">Cont\xE1ctanos</a>.' },
						contactsList: {
							value: `<div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Direcci\xF3n</h4>
                        <p className="ss__no-results__contact__detail__content">123 Calle Direcci\xF3n, Ciudad, Estado, C\xF3digo Postal</p>
                    </div>
                    <div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Horario</h4>
                        <p className="ss__no-results__contact__detail__content">Lunes a S\xE1bado, 00:00am - 00:00pm Domingo, 00:00am - 00:00pm</p>
                    </div>
                    <div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Tel\xE9fono</h4>
                        <p className="ss__no-results__contact__detail__content"><a href="tel:1234567890">123-456-7890</a></p>
                    </div>
                    <div className='ss__no-results__contact__detail'>
                        <h4 className="ss__no-results__contact__detail__title">Correo Electr\xF3nico</h4>
                        <p className="ss__no-results__contact__detail__content"><a href="mailto:email@site.com">email@site.com</a></p>
                    </div>`,
						},
					},
				};
			},
		},
	]);
})();

//# sourceMappingURL=6558.2117e41c.iframe.bundle.js.map
