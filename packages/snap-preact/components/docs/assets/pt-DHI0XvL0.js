const a = {
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
		title: { value: 'Histórico' },
		term: { attributes: { 'aria-label': (e) => `item ${e.index + 1} de ${e.numberOfTerms}, ${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'Sugestões' },
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
	sidebar: { titleText: { value: 'Filtros' }, applyButtonText: { value: 'Aplicar' }, clearButtonText: { value: 'Limpar tudo' }, closeButtonText: {} },
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
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'Pausar apresentação de slides' : 'Retomar apresentação de slides') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `Ir para o grupo de slides ${e.index + 1} de ${e.totalDots}` } },
		nextButton: { attributes: { 'aria-label': (e) => `Próximos slides${e.isNextDisabled ? ' (desativado)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `Slides anteriores${e.isPrevDisabled ? ' (desativado)' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `Clique para ver ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} de ${e.slidesLength}`),
			},
		},
		srInstructions: {
			value: (e) =>
				`Use as teclas de seta para navegar entre os slides. Pressione a barra de espaço para pausar a reprodução automática. Pressione Home ou End para ir para o primeiro ou último grupo de slides. ${
					e.touchDragging && 'Em dispositivos touch, deslize para a esquerda ou direita para navegar.'
				}`,
		},
	},
	sortBy: { label: { value: 'Ordenar por' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'Abas de resultados' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} resultados` : ''}` },
		},
	},
	perPage: { label: { value: 'Por página' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`menu suspenso do filtro ${e?.facet?.field}, atualmente ${e?.selectedFacet?.field === e?.facet?.field ? 'recolhido' : 'aberto'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' opções' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'Filtros atuais' },
		clearAllLabel: { value: 'Limpar tudo', attributes: { 'aria-label': 'Limpar tudo' } },
		noFiltersText: { value: 'Nenhum filtro aplicado' },
	},
	facet: {
		showMoreText: { value: 'Mostrar mais' },
		showLessText: { value: 'Mostrar menos' },
		clearAllText: { value: 'Limpar tudo' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`menu suspenso do filtro ${e?.facet?.label}, atualmente ${e?.facet?.collapsed ? 'recolhido' : 'aberto'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' opções' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'Enviar' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`menu suspenso ${e?.label}, ${e?.options?.length} opções ${
						e?.selectedOptions?.length ? `, opção selecionada atualmente é ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: { 'aria-label': (e) => `botão de opção ${e?.disabled ? 'desativado' : ''} ${e?.checkedState ? 'selecionado' : 'não selecionado'}` },
		},
	},
	pagination: {
		previous: { attributes: { 'aria-label': 'ir para a página anterior' } },
		next: { attributes: { 'aria-label': 'ir para a próxima página' } },
		first: { attributes: { 'aria-label': 'ir para a primeira página' } },
		last: { attributes: { 'aria-label': (e) => `ir para a última página ${e?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (e) => `ir para a página ${e?.page?.number}` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} produtos` } },
	result: {
		addToCartButtonText: { value: 'Adicionar tudo ao carrinho', attributes: { 'aria-label': 'Adicionar tudo ao carrinho' } },
		addToCartButtonSuccessText: { value: 'Adicionado!' },
		quickviewButtonText: { value: 'Visualização rápida', attributes: { 'aria-label': 'Visualização rápida' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'Adicionar tudo ao carrinho', attributes: { 'aria-label': 'Adicionar tudo ao carrinho' } },
		addToCartButtonSuccessText: { value: 'Adicionado!' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'Carregar mais' } },
		progressText: { value: (e) => `Você viu ${e?.pagination?.end} de ${e?.pagination?.totalResults} produtos` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Menos' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `remover filtro selecionado ${e?.label} ${e?.value}` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`controle deslizante de ${e?.facet?.label}, valor atual ${e?.value}, ${
						e?.facet?.range?.low ? `valor mínimo ${e?.facet?.range?.low},` : ''
					} ${e?.facet?.range?.high ? `valor máximo ${e?.facet?.range?.high}` : ''}`,
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
		infoText: { value: '<b>Informação:&nbsp;</b>' },
		errorText: { value: '<b>Erro:&nbsp;</b>' },
		reloadText: { value: 'Recarregar' },
	},
	checkbox: {
		checkbox: {
			attributes: { 'aria-label': (e) => `caixa de seleção ${e?.disabled ? 'desativada' : ''} ${e?.checkedState ? 'marcada' : 'desmarcada'}` },
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
		didYouMeanText: { value: (e) => `Você quis dizer <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
		expandedSearchText: {
			value: (e) =>
				`Não conseguimos encontrar uma correspondência exata para "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", mas aqui está algo parecido:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'Sugestões' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Verifique se há erros de digitação.</li><li class="ss__no-results__suggestions__list__option">Remova palavras-chave redundantes (ex: "produtos").</li><li class="ss__no-results__suggestions__list__option">Use outras palavras para descrever o que você está procurando.</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'Galeria de imagens' } },
		zoomOutButton: { attributes: { 'aria-label': 'Diminuir zoom' } },
		zoomInButton: { attributes: { 'aria-label': 'Aumentar zoom' } },
		closeButton: { attributes: { 'aria-label': 'Fechar galeria' } },
		prevButton: { attributes: { 'aria-label': 'Imagem anterior' } },
		nextButton: { attributes: { 'aria-label': 'Próxima imagem' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'Visualização rápida' } },
		closeButton: { attributes: { 'aria-label': 'Fechar visualização rápida' } },
		addToCartButton: { value: 'Adicionar ao carrinho' },
		moreInfoButton: { value: 'Mais informações' },
		loadingText: { value: 'Carregando…' },
	},
};
export { a as pt };
