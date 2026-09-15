// Russian (Русский)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const ru: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Закрыть автозаполнение',
			attributes: {
				'aria-label': 'Закрыть автозаполнение',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Результаты по запросу "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}" не найдены.</p><p>Попробуйте другой запрос.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Показать ${data?.controller?.store?.pagination.totalResults} ${
					data?.controller?.store?.filters.length > 0 ? 'отфильтрованных ' : ''
				}результат${data?.controller?.store?.pagination?.totalResults == 1 ? '' : 'ов'} по запросу "${
					data?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'История',
		},
		term: {
			attributes: {
				'aria-label': (data) => `элемент ${data.index + 1} из ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Предложения',
		},
		term: {
			attributes: {
				'aria-label': (data) => `элемент ${data.index + 1} из ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'В тренде',
		},
		term: {
			attributes: {
				'aria-label': (data) => `элемент ${data.index + 1} из ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Фильтры',
		},
		applyButtonText: {
			value: 'Применить',
		},
		clearButtonText: {
			value: 'Очистить всё',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Поиск',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Закрыть поиск',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Очистить поиск',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Отправить поиск',
			},
		},
	},
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'Открыть чат',
				title: 'Открыть чат',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Закрыть чат',
				title: 'Закрыть чат',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Открыть чат',
				title: 'Открыть чат',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Закрыть чат',
				title: 'Закрыть чат',
			},
		},
		headerLogo: {
			attributes: {
				alt: 'Логотип чата',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Новый чат',
				title: 'Новый чат',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'История чата',
				title: 'История чата',
			},
		},
		historyTitle: {
			value: 'История',
		},
		historyClearButton: {
			value: 'очистить',
		},
		historyNewChatLabel: {
			value: 'Новый чат',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Подробности беседы',
			},
		},
		inspirationResultTitle: {
			value: 'Сценарии для вдохновения',
		},
		inspirationResultSubtitle: {
			value: 'Выберите стилевое направление для изучения',
		},
		productComparisonTitle: {
			value: 'Сравнение товаров',
		},
		productComparisonSubtitle: {
			value: (data) => `Сравнение ${data?.count ?? ''} товаров`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Сообщения чата',
			},
		},
		newMessagesButton: {
			value: 'Новые сообщения',
		},
		loadingVerbsProductQuery: {
			value: 'Думаю, Ищу, Анализирую, Собираю детали',
		},
		loadingVerbsProductSearch: {
			value: 'Ищу, Просматриваю каталог, Подбираю товары, Отбираю результаты',
		},
		loadingVerbsProductComparison: {
			value: 'Сравниваю, Анализирую, Оцениваю, Взвешиваю варианты',
		},
		loadingVerbsImageSearch: {
			value: 'Анализирую изображение, Распознаю, Ищу, Подбираю совпадения',
		},
		loadingVerbsProductSimilar: {
			value: 'Ищу похожие товары, Ищу, Подбираю, Отбираю',
		},
		loadingVerbsInspirationRequest: {
			value: 'Генерирую идеи, Представляю, Отбираю, Вдохновляю',
		},
		feedbackPrompt: {
			value: 'Как вам пока всё нравится?',
		},
		feedbackThanks: {
			value: 'Спасибо за ваш отзыв',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Нравится',
				title: 'Нравится',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'Не нравится',
				title: 'Не нравится',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Скрыть отзыв',
			},
		},
		comparisonsTitle: {
			value: (data) => `Сравнить товары (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'очистить',
		},
		comparisonsAddText: {
			value: 'Добавить',
		},
		comparisonsCompareButton: {
			value: 'Сравнить',
			attributes: {
				title: 'Сравнить',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `Удалить ${data?.name || 'товар'} из сравнения`,
			},
		},
		chatUnavailableMessage: {
			value: 'Сервис временно недоступен. А пока воспользуйтесь строкой поиска выше, чтобы найти то, что вам нужно!',
		},
		highVolumeMessage: {
			value: 'Чат сейчас недоступен из-за большого количества запросов.',
		},
		highVolumeSubMessage: {
			value: 'А пока воспользуйтесь строкой поиска выше, чтобы найти то, что вам нужно!',
		},
		newSessionButton: {
			value: 'Новая сессия',
		},
		facetsTitle: {
			value: 'Фильтровать по:',
		},
		facetsApplyButton: {
			value: (data) => `Применить (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Очистить фильтры',
		},
		attachmentCompareTitle: {
			value: 'Сравнить эти товары',
		},
		attachmentAskProductTitle: {
			value: 'Спросить об этом товаре',
		},
		attachmentImageSimilarTitle: {
			value: 'Найти товары, похожие на это изображение:',
		},
		attachmentImageName: {
			value: 'Изображение',
		},
		topicDriftScopeMessage: {
			value: 'Я здесь, чтобы помочь вам с покупками',
		},
		topicDriftScopeSubMessage: {
			value: 'Попробуйте спросить о товарах, сравнениях или рекомендациях',
		},
		topicDriftMessage: {
			value: 'Ищете что-то новое?',
		},
		topicDriftSubMessage: {
			value: 'Начать новую сессию для более точной помощи или продолжить в этой?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Скрыть',
			},
		},
		inputPlaceholder: {
			value: 'Введите сообщение...',
		},
		inputPlaceholderAskProduct: {
			value: 'Спросите об этом товаре...',
		},
		inputPlaceholderCompare: {
			value: 'Что вы хотите сравнить?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Спросите о сравниваемых товарах...',
		},
		inputPlaceholderAskImage: {
			value: 'Спросите об этом изображении...',
		},
		inputPlaceholderAddCompare: {
			value: 'Добавьте ещё один товар для сравнения...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Загрузить изображение',
				title: 'Загрузить изображение',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Отправить сообщение',
				title: 'Отправить сообщение',
			},
		},
		dropOverlayText: {
			value: 'Отпустите изображение, чтобы загрузить',
		},
		poweredByText: {
			value: 'Работает на Athos Commerce.',
		},
		disclaimerText: {
			value: 'Помощник на основе ИИ. Может допускать ошибки. Не делитесь личными данными.',
		},
		privacyPolicyLinkText: {
			value: 'Политика конфиденциальности',
		},
		expiredMessage: {
			value: 'Срок действия этого чата истёк. Пожалуйста, начните новый чат.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Думаю',
		},
		searchingVerb: {
			value: 'Ищу',
		},
		analyzingVerb: {
			value: 'Анализирую',
		},
		generatingVerb: {
			value: 'Генерирую',
		},
		processingVerb: {
			value: 'Обрабатываю',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': (data) => `Закрыть ${data?.title ?? ''}`,
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': (data) => `Открыть ${data?.item?.name ?? ''}`,
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': (data) => `Загрузка ${data?.item?.name ?? ''}`,
			},
		},
		removeButton: {
			attributes: {
				'aria-label': (data) => `Удалить ${data?.item?.name ?? ''}`,
			},
		},
		uploadFailedText: {
			value: (data) => `Не удалось загрузить файл - ${data?.item?.name ?? ''}`,
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': (data) => `Искать «${data?.searchTerm ?? ''}»`,
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': (data) => `Открыть ${data?.productName || 'товар'}`,
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'Посмотреть вдохновение',
				title: 'Посмотреть вдохновение',
			},
		},
		closeInspirationButton: {
			value: 'Закрыть вдохновение',
			attributes: {
				'aria-label': 'Закрыть вдохновение',
				title: 'Закрыть вдохновение',
			},
		},
		exploreInspirationButton: {
			value: 'Изучить сценарии для вдохновения',
			attributes: {
				'aria-label': 'Изучить сценарии для вдохновения',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Посмотреть сравнение',
				title: 'Посмотреть сравнение',
			},
		},
		closeComparisonButton: {
			value: 'Закрыть сравнение',
			attributes: {
				'aria-label': 'Закрыть сравнение',
				title: 'Закрыть сравнение',
			},
		},
		exploreComparisonButton: {
			value: 'Изучить данные сравнения',
			attributes: {
				'aria-label': 'Изучить данные сравнения',
			},
		},
		showDetailsButton: {
			value: 'Показать детали',
			attributes: {
				'aria-label': 'Показать детали сравнения',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Вопрос о товаре',
		},
		requestTypeProductComparison: {
			value: 'Сравнение товаров',
		},
		requestTypeProductFilter: {
			value: 'Фильтрация товаров',
		},
		requestTypeProductSearch: {
			value: 'Поиск товаров',
		},
		requestTypeImageSearch: {
			value: 'Поиск по изображению',
		},
		requestTypeProductSimilar: {
			value: 'Поиск похожих товаров',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': (data) => `Посмотреть детали ${data?.attachment?.name ?? ''}`,
				title: (data) => `Посмотреть детали ${data?.attachment?.name ?? ''}`,
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': (data) => (data?.filterOptions?.length ? `Фильтр: ${data.filterOptions[0].facetKey} = ${data.filterOptions[0].label}` : ''),
				title: (data) => (data?.filterOptions?.length ? `Фильтр: ${data.filterOptions[0].facetKey} = ${data.filterOptions[0].label}` : ''),
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': (data) => `Дополнительных фильтров: ${data?.hiddenFacetCount ?? 0}`,
				title: (data) => `Ещё фильтров: ${data?.hiddenFacetCount ?? 0}`,
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'Сравнение товаров',
			attributes: {
				'aria-label': 'Сравнение товаров',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Характеристика',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': (data) => `Посмотреть детали ${data?.productName ?? ''}`,
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Загрузка деталей товара...',
		},
		quickview: {
			attributes: {
				'aria-label': 'Быстрый просмотр',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Закрыть быстрый просмотр',
			},
		},
		backToComparisonButton: {
			value: 'Вернуться к сравнению',
			attributes: {
				'aria-label': 'Вернуться к сравнению',
			},
		},
		backToInspirationButton: {
			value: 'Вернуться к вдохновению',
			attributes: {
				'aria-label': 'Вернуться к вдохновению',
			},
		},
		addToCartButton: {
			value: 'Добавить в корзину',
		},
		moreInfoButton: {
			value: 'Подробнее',
		},
		similarButton: {
			value: 'Похожие',
		},
		discussButton: {
			value: 'Обсудить',
		},
	},
	chatResult: {
		similarButton: {
			value: 'Похожие',
			attributes: {
				'aria-label': (data) => `Показать похожие на ${data?.result?.display?.mappings?.core?.name || 'товар'}`,
			},
		},
		compareButton: {
			value: 'Сравнить',
			attributes: {
				'aria-label': (data) => `Сравнить ${data?.result?.display?.mappings?.core?.name || 'товар'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'Товар'} добавлен в сравнение`,
				title: 'Добавлено в сравнение',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Обсудить ${data?.result?.display?.mappings?.core?.name || 'товар'}`,
				title: 'Обсудить товар',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `Добавить ${data?.result?.display?.mappings?.core?.name || 'товар'} в корзину`,
				title: 'Добавить в корзину',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `Настроить ${data?.result?.display?.mappings?.core?.name || 'товар'}`,
				title: 'Настроить',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `Открыть ${data?.result?.display?.mappings?.core?.name || 'товар'}`,
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Этот товар',
		},
		ctaButtonText: {
			value: 'Добавить всё в корзину',
		},
		ctaButtonSuccessText: {
			value: 'Набор добавлен!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Промежуточный итог за ${data.cartStore.count} товар(ов)`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Пауза' : 'Воспроизвести'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Приостановить слайд-шоу' : 'Возобновить слайд-шоу'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Перейти к группе слайдов ${data.index + 1} из ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Следующие слайды${data.isNextDisabled ? ' (отключено)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Предыдущие слайды${data.isPrevDisabled ? ' (отключено)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Нажмите, чтобы посмотреть ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} из ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Используйте клавиши со стрелками для навигации по слайдам. Нажмите пробел, чтобы приостановить автовоспроизведение. Нажмите Home или End, чтобы перейти к первой или последней группе слайдов.${' '}${
					data.touchDragging && 'На сенсорных устройствах проведите пальцем влево или вправо для навигации.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Сортировать по',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Вкладки результатов',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} результатов` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'На странице',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`раскрывающийся список фильтра ${data?.facet?.field}, в данный момент ${
						data?.selectedFacet?.field === data?.facet?.field ? 'свёрнут' : 'открыт'
					} ${(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' вариантов' : ''}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Текущие фильтры',
		},
		clearAllLabel: {
			value: 'Очистить всё',
		},
	},
	facet: {
		showMoreText: {
			value: 'Показать больше',
		},
		showLessText: {
			value: 'Показать меньше',
		},
		clearAllText: {
			value: 'Очистить всё',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`раскрывающийся список фильтра ${data?.facet?.label}, в данный момент ${data?.facet?.collapsed ? 'свёрнут' : 'открыт'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' вариантов' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Отправить',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`раскрывающийся список ${data?.label}, ${data?.options?.length} вариантов ${
						data?.selectedOptions?.length ? `, выбранный вариант: ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'отключённая' : ''} ${data?.checkedState ? 'выбранная' : 'невыбранная'} радиокнопка`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'перейти на предыдущую страницу',
			},
		},
		next: {
			attributes: {
				'aria-label': 'перейти на следующую страницу',
			},
		},
		first: {
			attributes: {
				'aria-label': 'перейти на первую страницу',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `перейти на последнюю страницу ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `перейти на страницу ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} товаров`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Добавить всё в корзину',
			attributes: {
				'aria-label': 'Добавить всё в корзину',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Добавлено!',
		},
		quickviewButtonText: {
			value: 'Быстрый просмотр',
			attributes: {
				'aria-label': 'Быстрый просмотр',
			},
		},
		discussProductButton: {
			attributes: {
				'aria-label': 'Обсудить этот товар',
				title: 'Обсудить этот товар',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Добавить всё в корзину',
			attributes: {
				'aria-label': 'Добавить всё в корзину',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Добавлено!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Загрузить ещё',
			},
		},
		progressText: {
			value: (data) => `Вы просмотрели ${data?.pagination?.end} из ${data?.pagination?.totalResults} товаров`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Меньше',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `удалить выбранный фильтр ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`ползунок ${data?.facet?.label}, текущее значение ${data?.value}, ${
						data?.facet?.range?.low ? `минимальное значение ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `максимальное значение ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `удалить выбранный фильтр ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `фильтровать по ${data?.facet?.label} - ${data?.value?.label}`
							: `фильтровать по ${data?.value?.label}`
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
							? `удалить выбранный фильтр ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `фильтровать по ${data?.facet?.label} - ${data?.value?.label}`
							: `фильтровать по ${data?.value?.label}`
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
							? `удалить выбранный фильтр ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `фильтровать по ${data?.facet?.label} - ${data?.value?.label}`
							: `фильтровать по ${data?.value?.label}`
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
							? `удалить выбранный фильтр ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `фильтровать по ${data?.facet?.label} - ${data?.value?.label}`
							: `фильтровать по ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Предупреждение:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Информация:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Ошибка:&nbsp;</b>`,
		},
		reloadText: {
			value: `Перезагрузить`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'отключённый' : ''} ${data?.checkedState ? 'отмеченный' : 'неотмеченный'} флажок`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'количество',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'уменьшить количество',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'увеличить количество',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `Показан${data?.pagination?.totalResults == 1 ? '' : 'ы'} результат${data?.pagination?.totalResults == 1 ? '' : 'ы'}
                ${data?.search?.query ? `по запросу <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Сейчас в сетке товаров показано ${data?.pagination?.totalResults} элементов`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `По запросу <em>"${data?.search?.originalQuery?.string}"</em> ничего не найдено, вместо этого показаны результаты по запросу <em>"${data?.search?.query?.string}"</em>.`;
			},
			attributes: {
				'aria-label': (data) =>
					`По запросу ${data?.search?.originalQuery?.string} ничего не найдено, вместо этого показаны результаты по запросу ${data?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    По запросу <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span> ничего не найдено.
                </span>`
						: `<span>Результаты не найдены.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `По запросу ${data?.search?.query?.string} ничего не найдено`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Возможно, вы имели в виду <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `Нам не удалось найти точное совпадение для "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>", но вот что-то похожее:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Предложения`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Проверьте орфографические ошибки.</li><li class="ss__no-results__suggestions__list__option">Удалите лишние ключевые слова (например: "товары").</li><li class="ss__no-results__suggestions__list__option">Используйте другие слова, чтобы описать то, что вы ищете.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Галерея изображений',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Уменьшить масштаб',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Увеличить масштаб',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Закрыть галерею',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Предыдущее изображение',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Следующее изображение',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Быстрый просмотр',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Закрыть быстрый просмотр',
			},
		},
		addToCartButton: {
			value: 'Добавить в корзину',
		},
		moreInfoButton: {
			value: 'Подробнее',
		},
		similarButton: {
			value: 'Похожие',
		},
		discussButton: {
			value: 'Обсудить',
		},
		loadingText: {
			value: 'Загрузка…',
		},
	},
};
