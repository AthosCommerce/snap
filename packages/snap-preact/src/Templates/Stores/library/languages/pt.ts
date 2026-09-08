// Portuguese (Português)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const pt: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Fechar autocompletar',
			attributes: {
				'aria-label': 'Fechar autocompletar',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Nenhum resultado encontrado para "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Tente outra busca.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Ver ${data?.controller?.store?.pagination.totalResults} resultado${data?.controller?.store?.pagination?.totalResults == 1 ? '' : 's'}${
					data?.controller?.store?.filters.length > 0 ? ' filtrados' : ''
				} para "${data?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'Histórico',
		},
		term: {
			attributes: {
				'aria-label': (data) => `item ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Sugestões',
		},
		term: {
			attributes: {
				'aria-label': (data) => `item ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Em alta',
		},
		term: {
			attributes: {
				'aria-label': (data) => `item ${data.index + 1} de ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Filtros',
		},
		applyButtonText: {
			value: 'Aplicar',
		},
		clearButtonText: {
			value: 'Limpar tudo',
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
				'aria-label': 'Fechar busca',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Limpar busca',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Enviar busca',
			},
		},
	},
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'Abrir chat',
				title: 'Abrir chat',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Fechar chat',
				title: 'Fechar chat',
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
				'aria-label': 'Fechar chat',
				title: 'Fechar chat',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Novo chat',
				title: 'Novo chat',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Histórico do chat',
				title: 'Histórico do chat',
			},
		},
		historyTitle: {
			value: 'Histórico',
		},
		historyClearButton: {
			value: 'limpar',
		},
		historyNewChatLabel: {
			value: 'Novo chat',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Detalhes da conversa',
			},
		},
		inspirationResultTitle: {
			value: 'Cenários de inspiração',
		},
		inspirationResultSubtitle: {
			value: 'Escolha uma direção de estilo para explorar',
		},
		productComparisonTitle: {
			value: 'Comparação de produtos',
		},
		productComparisonSubtitle: {
			value: (data) => `Comparando ${data?.count ?? ''} produtos`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Mensagens do chat',
			},
		},
		newMessagesButton: {
			value: 'Novas mensagens',
		},
		loadingVerbsProductQuery: {
			value: 'Pensando, Buscando, Analisando, Reunindo detalhes',
		},
		loadingVerbsProductSearch: {
			value: 'Buscando, Explorando o catálogo, Encontrando produtos, Selecionando resultados',
		},
		loadingVerbsProductComparison: {
			value: 'Comparando, Analisando, Avaliando, Ponderando opções',
		},
		loadingVerbsImageSearch: {
			value: 'Analisando a imagem, Identificando, Buscando, Encontrando correspondências',
		},
		loadingVerbsProductSimilar: {
			value: 'Encontrando itens similares, Buscando, Combinando, Selecionando',
		},
		loadingVerbsInspirationRequest: {
			value: 'Gerando ideias, Imaginando, Selecionando, Inspirando',
		},
		feedbackPrompt: {
			value: 'Como está sendo sua experiência até agora?',
		},
		feedbackThanks: {
			value: 'Obrigado pelo seu feedback',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Gostei',
				title: 'Gostei',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'Não gostei',
				title: 'Não gostei',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Dispensar feedback',
			},
		},
		comparisonsTitle: {
			value: (data) => `Comparar produtos (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'limpar',
		},
		comparisonsAddText: {
			value: 'Adicionar',
		},
		comparisonsCompareButton: {
			value: 'Comparar',
			attributes: {
				title: 'Comparar',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `Remover ${data?.name || 'produto'} da comparação`,
			},
		},
		chatUnavailableMessage: {
			value: 'O serviço está temporariamente indisponível. Enquanto isso, use a barra de busca acima para encontrar o que você precisa!',
		},
		highVolumeMessage: {
			value: 'O chat está indisponível no momento devido ao alto volume de solicitações.',
		},
		highVolumeSubMessage: {
			value: 'Enquanto isso, use a barra de busca acima para encontrar o que você precisa!',
		},
		newSessionButton: {
			value: 'Nova sessão',
		},
		facetsTitle: {
			value: 'Filtrar por:',
		},
		facetsApplyButton: {
			value: (data) => `Aplicar (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Limpar filtros',
		},
		attachmentCompareTitle: {
			value: 'Comparar estes produtos',
		},
		attachmentAskProductTitle: {
			value: 'Perguntar sobre este produto',
		},
		attachmentImageSimilarTitle: {
			value: 'Buscar produtos similares a esta imagem:',
		},
		topicDriftScopeMessage: {
			value: 'Estou aqui para ajudar com suas compras',
		},
		topicDriftScopeSubMessage: {
			value: 'Experimente perguntar sobre produtos, comparações ou recomendações',
		},
		topicDriftMessage: {
			value: 'Procurando algo novo?',
		},
		topicDriftSubMessage: {
			value: 'Iniciar uma nova sessão para uma melhor assistência ou continuar nesta?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Dispensar',
			},
		},
		inputPlaceholder: {
			value: 'Digite sua mensagem...',
		},
		inputPlaceholderAskProduct: {
			value: 'Pergunte sobre este produto...',
		},
		inputPlaceholderCompare: {
			value: 'O que você gostaria de comparar?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Pergunte sobre os produtos comparados...',
		},
		inputPlaceholderAskImage: {
			value: 'Pergunte sobre esta imagem...',
		},
		inputPlaceholderAddCompare: {
			value: 'Adicione outro produto para comparar...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Enviar imagem',
				title: 'Enviar imagem',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Enviar mensagem',
				title: 'Enviar mensagem',
			},
		},
		dropOverlayText: {
			value: 'Solte a imagem para enviar',
		},
		disclaimerText: {
			value: 'Assistente com inteligência artificial. Pode cometer erros. Evite compartilhar dados pessoais.',
		},
		privacyPolicyLinkText: {
			value: 'Política de privacidade',
		},
		expiredMessage: {
			value: 'Este chat expirou. Por favor, inicie um novo chat.',
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
			value: 'Analisando',
		},
		generatingVerb: {
			value: 'Gerando',
		},
		processingVerb: {
			value: 'Processando',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'Fechar',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': 'Abrir item',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': 'Carregando item',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': 'Remover item',
			},
		},
		uploadFailedText: {
			value: 'Falha ao enviar o arquivo',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'Buscar este termo',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'Abrir produto',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'Ver inspiração',
				title: 'Ver inspiração',
			},
		},
		closeInspirationButton: {
			value: 'Fechar inspiração',
			attributes: {
				'aria-label': 'Fechar inspiração',
				title: 'Fechar inspiração',
			},
		},
		exploreInspirationButton: {
			value: 'Explorar cenários de inspiração',
			attributes: {
				'aria-label': 'Explorar cenários de inspiração',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Ver comparação',
				title: 'Ver comparação',
			},
		},
		closeComparisonButton: {
			value: 'Fechar comparação',
			attributes: {
				'aria-label': 'Fechar comparação',
				title: 'Fechar comparação',
			},
		},
		exploreComparisonButton: {
			value: 'Explorar dados da comparação',
			attributes: {
				'aria-label': 'Explorar dados da comparação',
			},
		},
		showDetailsButton: {
			value: 'Mostrar detalhes',
			attributes: {
				'aria-label': 'Mostrar detalhes da comparação',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Perguntando sobre o produto',
		},
		requestTypeProductComparison: {
			value: 'Comparando produtos',
		},
		requestTypeProductFilter: {
			value: 'Filtrando produtos',
		},
		requestTypeProductSearch: {
			value: 'Buscando produtos',
		},
		requestTypeImageSearch: {
			value: 'Buscando por imagem',
		},
		requestTypeProductSimilar: {
			value: 'Buscando produtos similares',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'Ver detalhes do produto',
				title: 'Ver detalhes do produto',
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
				'aria-label': 'Filtros adicionais',
				title: 'Filtros adicionais',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Comparação de produtos',
			attributes: {
				'aria-label': 'Comparação de produtos',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Característica',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'Ver detalhes do produto',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Carregando detalhes do produto...',
		},
		backToComparisonButton: {
			value: 'Voltar para a comparação',
			attributes: {
				'aria-label': 'Voltar para a comparação',
			},
		},
		backToInspirationButton: {
			value: 'Voltar para a inspiração',
			attributes: {
				'aria-label': 'Voltar para a inspiração',
			},
		},
		addToCartButton: {
			value: 'Adicionar ao carrinho',
		},
		similarButton: {
			value: 'Similares',
		},
		discussButton: {
			value: 'Conversar',
		},
		inStockText: {
			value: 'Em estoque',
		},
		outOfStockText: {
			value: 'Esgotado',
		},
		unavailableText: {
			value: 'indisponível',
		},
		variantsGroup: {
			attributes: {
				'aria-label': 'Seleção de variantes',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': 'Informações do produto',
			},
		},
	},
	chatResult: {
		similarButton: {
			value: 'Similares',
			attributes: {
				'aria-label': (data) => `Mostrar similares a ${data?.result?.display?.mappings?.core?.name || 'produto'}`,
			},
		},
		compareButton: {
			value: 'Comparar',
			attributes: {
				'aria-label': (data) => `Comparar ${data?.result?.display?.mappings?.core?.name || 'produto'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Produto'} adicionado à comparação`,
				title: 'Adicionado à comparação',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Conversar sobre ${data?.result?.display?.mappings?.core?.name || 'produto'}`,
				title: 'Conversar sobre o produto',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `Adicionar ${data?.result?.display?.mappings?.core?.name || 'produto'} ao carrinho`,
				title: 'Adicionar ao carrinho',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `Configurar ${data?.result?.display?.mappings?.core?.name || 'produto'}`,
				title: 'Configurar',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `Abrir ${data?.result?.display?.mappings?.core?.name || 'produto'}`,
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Este produto',
		},
		ctaButtonText: {
			value: 'Adicionar tudo ao carrinho',
		},
		ctaButtonSuccessText: {
			value: 'Pacote adicionado!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Subtotal de ${data.cartStore.count} itens`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Pausar' : 'Reproduzir'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Pausar apresentação de slides' : 'Retomar apresentação de slides'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Ir para o grupo de slides ${data.index + 1} de ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Próximos slides${data.isNextDisabled ? ' (desativado)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Slides anteriores${data.isPrevDisabled ? ' (desativado)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Clique para ver ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} de ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Use as teclas de seta para navegar entre os slides. Pressione a barra de espaço para pausar a reprodução automática. Pressione Home ou End para ir para o primeiro ou último grupo de slides.${' '}${
					data.touchDragging && 'Em dispositivos touch, deslize para a esquerda ou direita para navegar.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Ordenar por',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Abas de resultados',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} resultados` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'Por página',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`menu suspenso do filtro ${data?.facet?.field}, atualmente ${data?.selectedFacet?.field === data?.facet?.field ? 'recolhido' : 'aberto'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' opções' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Filtros atuais',
		},
		clearAllLabel: {
			value: 'Limpar tudo',
		},
	},
	facet: {
		showMoreText: {
			value: 'Mostrar mais',
		},
		showLessText: {
			value: 'Mostrar menos',
		},
		clearAllText: {
			value: 'Limpar tudo',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`menu suspenso do filtro ${data?.facet?.label}, atualmente ${data?.facet?.collapsed ? 'recolhido' : 'aberto'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' opções' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Enviar',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`menu suspenso ${data?.label}, ${data?.options?.length} opções ${
						data?.selectedOptions?.length ? `, opção selecionada atualmente é ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `botão de opção ${data?.disabled ? 'desativado' : ''} ${data?.checkedState ? 'selecionado' : 'não selecionado'}`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'ir para a página anterior',
			},
		},
		next: {
			attributes: {
				'aria-label': 'ir para a próxima página',
			},
		},
		first: {
			attributes: {
				'aria-label': 'ir para a primeira página',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `ir para a última página ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `ir para a página ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} produtos`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Adicionar tudo ao carrinho',
			attributes: {
				'aria-label': 'Adicionar tudo ao carrinho',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Adicionado!',
		},
		quickviewButtonText: {
			value: 'Visualização rápida',
			attributes: {
				'aria-label': 'Visualização rápida',
			},
		},
		discussProductButton: {
			attributes: {
				'aria-label': 'Conversar sobre este produto',
				title: 'Conversar sobre este produto',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Adicionar tudo ao carrinho',
			attributes: {
				'aria-label': 'Adicionar tudo ao carrinho',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Adicionado!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Carregar mais',
			},
		},
		progressText: {
			value: (data) => `Você viu ${data?.pagination?.end} de ${data?.pagination?.totalResults} produtos`,
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
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `remover filtro selecionado ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`controle deslizante de ${data?.facet?.label}, valor atual ${data?.value}, ${
						data?.facet?.range?.low ? `valor mínimo ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `valor máximo ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `remover filtro selecionado ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrar por ${data?.value?.label}`
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
							? `remover filtro selecionado ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrar por ${data?.value?.label}`
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
							? `remover filtro selecionado ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrar por ${data?.value?.label}`
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
							? `remover filtro selecionado ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `filtrar por ${data?.facet?.label} - ${data?.value?.label}`
							: `filtrar por ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Aviso:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Informação:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Erro:&nbsp;</b>`,
		},
		reloadText: {
			value: `Recarregar`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `caixa de seleção ${data?.disabled ? 'desativada' : ''} ${data?.checkedState ? 'marcada' : 'desmarcada'}`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'quantidade',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'diminuir quantidade',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'aumentar quantidade',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `Mostrando resultado${data?.pagination?.totalResults == 1 ? '' : 's'}
                ${data?.search?.query ? `para <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Mostrando agora ${data?.pagination?.totalResults} itens na grade de produtos`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `Nenhum resultado encontrado para <em>"${data?.search?.originalQuery?.string}"</em>, mostrando resultados para <em>"${data?.search?.query?.string}"</em> em vez disso.`;
			},
			attributes: {
				'aria-label': (data) =>
					`Nenhum resultado encontrado para ${data?.search?.originalQuery?.string}, mostrando resultados para ${data?.search?.query?.string} em vez disso`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    Nenhum resultado encontrado para <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>Nenhum resultado encontrado.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `Nenhum resultado encontrado para ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Você quis dizer <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `Não conseguimos encontrar uma correspondência exata para "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>", mas aqui está algo parecido:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Sugestões`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Verifique se há erros de digitação.</li><li class="ss__no-results__suggestions__list__option">Remova palavras-chave redundantes (ex: "produtos").</li><li class="ss__no-results__suggestions__list__option">Use outras palavras para descrever o que você está procurando.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Galeria de imagens',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Diminuir zoom',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Aumentar zoom',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Fechar galeria',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Imagem anterior',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Próxima imagem',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Visualização rápida',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Fechar visualização rápida',
			},
		},
		addToCartButton: {
			value: 'Adicionar ao carrinho',
		},
		moreInfoButton: {
			value: 'Mais informações',
		},
		loadingText: {
			value: 'Carregando…',
		},
	},
};
