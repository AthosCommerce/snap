'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7410],
		{
			'./src/Templates/Stores/library/languages/pt.ts'(l, a, t) {
				t.r(a);
				const r = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: { value: 'Fechar autocompletar', attributes: { 'aria-label': 'Fechar autocompletar' } },
						noResultsText: {
							value: (e) =>
								`<p>Nenhum resultado encontrado para "${
									e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
								}".</p><p>Tente outra busca.</p>`,
						},
						seeMoreButton: {
							value: (e) =>
								`Ver ${e?.controller?.store?.pagination.totalResults} resultado${e?.controller?.store?.pagination?.totalResults == 1 ? '' : 's'}${
									e?.controller?.store?.filters.length > 0 ? ' filtrados' : ''
								} para "${e?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: 'Hist\xF3rico' },
						term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.suggestions': {
						title: { value: 'Sugest\xF5es' },
						term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
					},
					'terms.trending': {
						title: { value: 'Em alta' },
						term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: 'Filtros' },
						applyButtonText: { value: 'Aplicar' },
						clearButtonText: { value: 'Limpar tudo' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: 'Buscar' } },
						closeSearchButton: { attributes: { 'aria-label': 'Fechar busca' } },
						clearSearchButton: { attributes: { 'aria-label': 'Limpar busca' } },
						submitSearchButton: { attributes: { 'aria-label': 'Enviar busca' } },
					},
					recommendationBundle: {
						seedText: { value: 'Este produto' },
						ctaButtonText: { value: 'Adicionar tudo ao carrinho' },
						ctaButtonSuccessText: { value: 'Pacote adicionado!' },
						ctaSubtotalTitle: { value: (e) => `Subtotal de ${e.cartStore.count} itens` },
					},
					slideshow: {
						pauseButton: {
							value: (e) => (e.isPlaying ? 'Pausar' : 'Reproduzir'),
							attributes: { 'aria-label': (e) => (e.isPlaying ? 'Pausar apresenta\xE7\xE3o de slides' : 'Retomar apresenta\xE7\xE3o de slides') },
						},
						paginationButton: { attributes: { 'aria-label': (e) => `Ir para o grupo de slides ${e.index + 1} de ${e.totalDots}` } },
						nextButton: { attributes: { 'aria-label': (e) => `Pr\xF3ximos slides${e.isNextDisabled ? ' (desativado)' : ''}` } },
						prevButton: { attributes: { 'aria-label': (e) => `Slides anteriores${e.isPrevDisabled ? ' (desativado)' : ''}` } },
						slide: {
							attributes: {
								'aria-label': (e) => (e.hasClickHandler ? `Clique para ver ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} de ${e.slidesLength}`),
							},
						},
						srInstructions: {
							value: (e) =>
								`Use as teclas de seta para navegar entre os slides. Pressione a barra de espa\xE7o para pausar a reprodu\xE7\xE3o autom\xE1tica. Pressione Home ou End para ir para o primeiro ou \xFAltimo grupo de slides. ${
									e.touchDragging && 'Em dispositivos touch, deslize para a esquerda ou direita para navegar.'
								}`,
						},
					},
					sortBy: { label: { value: 'Ordenar por' } },
					tabSelection: {
						tabList: { attributes: { 'aria-label': 'Abas de resultados' } },
						tabButton: {
							attributes: {
								'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} resultados` : ''}`,
							},
						},
					},
					perPage: { label: { value: 'Por p\xE1gina' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`menu suspenso do filtro ${e?.facet?.field}, atualmente ${e?.selectedFacet?.field === e?.facet?.field ? 'recolhido' : 'aberto'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' op\xE7\xF5es' : ''
									}`,
							},
						},
					},
					filterSummary: { title: { value: 'Filtros atuais' }, clearAllLabel: { value: 'Limpar tudo' } },
					facet: {
						showMoreText: { value: 'Mostrar mais' },
						showLessText: { value: 'Mostrar menos' },
						clearAllText: { value: 'Limpar tudo' },
						dropdownButton: {
							attributes: {
								'aria-label': (e) =>
									`menu suspenso do filtro ${e?.facet?.label}, atualmente ${e?.facet?.collapsed ? 'recolhido' : 'aberto'} ${
										e?.facet?.values?.length ? e?.facet?.values?.length + ' op\xE7\xF5es' : ''
									}`,
							},
						},
						submitRangeButton: { value: 'Enviar' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (e) =>
									`menu suspenso ${e?.label}, ${e?.options?.length} op\xE7\xF5es ${
										e?.selectedOptions?.length ? `, op\xE7\xE3o selecionada atualmente \xE9 ${e?.selectedOptions[0].label}` : ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (e) =>
									`bot\xE3o de op\xE7\xE3o ${e?.disabled ? 'desativado' : ''} ${e?.checkedState ? 'selecionado' : 'n\xE3o selecionado'}`,
							},
						},
					},
					pagination: {
						previous: { attributes: { 'aria-label': 'ir para a p\xE1gina anterior' } },
						next: { attributes: { 'aria-label': 'ir para a pr\xF3xima p\xE1gina' } },
						first: { attributes: { 'aria-label': 'ir para a primeira p\xE1gina' } },
						last: { attributes: { 'aria-label': (e) => `ir para a \xFAltima p\xE1gina ${e?.pagination?.last?.number}` } },
						page: { attributes: { 'aria-label': (e) => `ir para a p\xE1gina ${e?.page?.number}` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} produtos` } },
					result: {
						addToCartButtonText: { value: 'Adicionar tudo ao carrinho', attributes: { 'aria-label': 'Adicionar tudo ao carrinho' } },
						addToCartButtonSuccessText: { value: 'Adicionado!' },
						quickviewButtonText: { value: 'Visualiza\xE7\xE3o r\xE1pida', attributes: { 'aria-label': 'Visualiza\xE7\xE3o r\xE1pida' } },
					},
					overlayResult: {
						addToCartButtonText: { value: 'Adicionar tudo ao carrinho', attributes: { 'aria-label': 'Adicionar tudo ao carrinho' } },
						addToCartButtonSuccessText: { value: 'Adicionado!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': 'Carregar mais' } },
						progressText: { value: (e) => `Voc\xEA viu ${e?.pagination?.end} de ${e?.pagination?.totalResults} produtos` },
					},
					grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Menos' } },
					filter: {
						filter: { attributes: { 'aria-label': (e) => `${e?.label ? `remover filtro selecionado ${e?.label} ${e?.value}` : e?.value || ''}` } },
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (e) =>
									`controle deslizante de ${e?.facet?.label}, valor atual ${e?.value}, ${
										e?.facet?.range?.low ? `valor m\xEDnimo ${e?.facet?.range?.low},` : ''
									} ${e?.facet?.range?.high ? `valor m\xE1ximo ${e?.facet?.range?.high}` : ''}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (e) =>
									`${
										e?.value?.filtered
											? `remover filtro selecionado ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrar por ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrar por ${e?.value?.label}`
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
											? `remover filtro selecionado ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrar por ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrar por ${e?.value?.label}`
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
											? `remover filtro selecionado ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrar por ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrar por ${e?.value?.label}`
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
											? `remover filtro selecionado ${e?.facet?.label || ''} - ${e?.value?.label}`
											: e?.facet?.label
											? `filtrar por ${e?.facet?.label} - ${e?.value?.label}`
											: `filtrar por ${e?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>Aviso:&nbsp;</b>' },
						infoText: { value: '<b>Informa\xE7\xE3o:&nbsp;</b>' },
						errorText: { value: '<b>Erro:&nbsp;</b>' },
						reloadText: { value: 'Recarregar' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (e) => `caixa de sele\xE7\xE3o ${e?.disabled ? 'desativada' : ''} ${e?.checkedState ? 'marcada' : 'desmarcada'}`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': 'quantidade' } },
						decrementButton: { attributes: { 'aria-label': 'diminuir quantidade' } },
						incrementButton: { attributes: { 'aria-label': 'aumentar quantidade' } },
					},
					searchHeader: {
						titleText: {
							value: (e) => `Mostrando resultado${e?.pagination?.totalResults == 1 ? '' : 's'}
                ${e?.search?.query ? `para <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
							attributes: { 'aria-label': (e) => `Mostrando agora ${e?.pagination?.totalResults} itens na grade de produtos` },
						},
						correctedQueryText: {
							value: (e) =>
								`Nenhum resultado encontrado para <em>"${e?.search?.originalQuery?.string}"</em>, mostrando resultados para <em>"${e?.search?.query?.string}"</em> em vez disso.`,
							attributes: {
								'aria-label': (e) =>
									`Nenhum resultado encontrado para ${e?.search?.originalQuery?.string}, mostrando resultados para ${e?.search?.query?.string} em vez disso`,
							},
						},
						noResultsText: {
							value: (e) =>
								`${
									e?.search?.query
										? `<span>
                    Nenhum resultado encontrado para <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>.
                </span>`
										: '<span>Nenhum resultado encontrado.</span>'
								}`,
							attributes: { 'aria-label': (e) => `Nenhum resultado encontrado para ${e?.search?.query?.string}` },
						},
						didYouMeanText: { value: (e) => `Voc\xEA quis dizer <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
						expandedSearchText: {
							value: (e) =>
								`N\xE3o conseguimos encontrar uma correspond\xEAncia exata para "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", mas aqui est\xE1 algo parecido:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: 'Sugest\xF5es' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Verifique se h\xE1 erros de digita\xE7\xE3o.</li><li class="ss__no-results__suggestions__list__option">Remova palavras-chave redundantes (ex: "produtos").</li><li class="ss__no-results__suggestions__list__option">Use outras palavras para descrever o que voc\xEA est\xE1 procurando.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': 'Galeria de imagens' } },
						zoomOutButton: { attributes: { 'aria-label': 'Diminuir zoom' } },
						zoomInButton: { attributes: { 'aria-label': 'Aumentar zoom' } },
						closeButton: { attributes: { 'aria-label': 'Fechar galeria' } },
						prevButton: { attributes: { 'aria-label': 'Imagem anterior' } },
						nextButton: { attributes: { 'aria-label': 'Pr\xF3xima imagem' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': 'Visualiza\xE7\xE3o r\xE1pida' } },
						closeButton: { attributes: { 'aria-label': 'Fechar visualiza\xE7\xE3o r\xE1pida' } },
						addToCartButton: { value: 'Adicionar ao carrinho' },
						moreInfoButton: { value: 'Mais informa\xE7\xF5es' },
						loadingText: { value: 'Carregando\u2026' },
					},
				};
				t.d(a, ['pt', 0, r]);
			},
		},
	]);
})();

//# sourceMappingURL=7410.24a73242.iframe.bundle.js.map
