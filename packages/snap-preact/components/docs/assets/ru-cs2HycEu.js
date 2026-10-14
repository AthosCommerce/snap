const t = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'Закрыть автозаполнение', attributes: { 'aria-label': 'Закрыть автозаполнение' } },
		noResultsText: {
			value: (e) =>
				`<p>Результаты по запросу "${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}" не найдены.</p><p>Попробуйте другой запрос.</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`Показать ${e?.controller?.store?.pagination.totalResults} ${e?.controller?.store?.filters.length > 0 ? 'отфильтрованных ' : ''}результат${
					e?.controller?.store?.pagination?.totalResults == 1 ? '' : 'ов'
				} по запросу "${e?.controller?.store?.search?.query?.string}"`,
		},
	},
	'terms.history': {
		title: { value: 'История' },
		term: { attributes: { 'aria-label': (e) => `элемент ${e.index + 1} из ${e.numberOfTerms}, ${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'Предложения' },
		term: { attributes: { 'aria-label': (e) => `элемент ${e.index + 1} из ${e.numberOfTerms}, ${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'В тренде' },
		term: { attributes: { 'aria-label': (e) => `элемент ${e.index + 1} из ${e.numberOfTerms}, ${e.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: {
		titleText: { value: 'Фильтры' },
		applyButtonText: { value: 'Применить' },
		clearButtonText: { value: 'Очистить всё' },
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: { attributes: { placeholder: 'Поиск' } },
		closeSearchButton: { attributes: { 'aria-label': 'Закрыть поиск' } },
		clearSearchButton: { attributes: { 'aria-label': 'Очистить поиск' } },
		submitSearchButton: { attributes: { 'aria-label': 'Отправить поиск' } },
	},
	recommendationBundle: {
		seedText: { value: 'Этот товар' },
		ctaButtonText: { value: 'Добавить всё в корзину' },
		ctaButtonSuccessText: { value: 'Набор добавлен!' },
		ctaSubtotalTitle: { value: (e) => `Промежуточный итог за ${e.cartStore.count} товар(ов)` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? 'Пауза' : 'Воспроизвести'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'Приостановить слайд-шоу' : 'Возобновить слайд-шоу') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `Перейти к группе слайдов ${e.index + 1} из ${e.totalDots}` } },
		nextButton: { attributes: { 'aria-label': (e) => `Следующие слайды${e.isNextDisabled ? ' (отключено)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `Предыдущие слайды${e.isPrevDisabled ? ' (отключено)' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `Нажмите, чтобы посмотреть ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} из ${e.slidesLength}`),
			},
		},
		srInstructions: {
			value: (e) =>
				`Используйте клавиши со стрелками для навигации по слайдам. Нажмите пробел, чтобы приостановить автовоспроизведение. Нажмите Home или End, чтобы перейти к первой или последней группе слайдов. ${
					e.touchDragging && 'На сенсорных устройствах проведите пальцем влево или вправо для навигации.'
				}`,
		},
	},
	sortBy: { label: { value: 'Сортировать по' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'Вкладки результатов' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} результатов` : ''}` },
		},
	},
	perPage: { label: { value: 'На странице' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`раскрывающийся список фильтра ${e?.facet?.field}, в данный момент ${e?.selectedFacet?.field === e?.facet?.field ? 'свёрнут' : 'открыт'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' вариантов' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'Текущие фильтры' },
		clearAllLabel: { value: 'Очистить всё', attributes: { 'aria-label': 'Очистить всё' } },
		noFiltersText: { value: 'Фильтры не применены' },
	},
	facet: {
		showMoreText: { value: 'Показать больше' },
		showLessText: { value: 'Показать меньше' },
		clearAllText: { value: 'Очистить всё' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`раскрывающийся список фильтра ${e?.facet?.label}, в данный момент ${e?.facet?.collapsed ? 'свёрнут' : 'открыт'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' вариантов' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'Отправить' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`раскрывающийся список ${e?.label}, ${e?.options?.length} вариантов ${
						e?.selectedOptions?.length ? `, выбранный вариант: ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: { 'aria-label': (e) => `${e?.disabled ? 'отключённая' : ''} ${e?.checkedState ? 'выбранная' : 'невыбранная'} радиокнопка` },
		},
	},
	pagination: {
		previous: { attributes: { 'aria-label': 'перейти на предыдущую страницу' } },
		next: { attributes: { 'aria-label': 'перейти на следующую страницу' } },
		first: { attributes: { 'aria-label': 'перейти на первую страницу' } },
		last: { attributes: { 'aria-label': (e) => `перейти на последнюю страницу ${e?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (e) => `перейти на страницу ${e?.page?.number}` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} товаров` } },
	result: {
		addToCartButtonText: { value: 'Добавить всё в корзину', attributes: { 'aria-label': 'Добавить всё в корзину' } },
		addToCartButtonSuccessText: { value: 'Добавлено!' },
		quickviewButtonText: { value: 'Быстрый просмотр', attributes: { 'aria-label': 'Быстрый просмотр' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'Добавить всё в корзину', attributes: { 'aria-label': 'Добавить всё в корзину' } },
		addToCartButtonSuccessText: { value: 'Добавлено!' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'Загрузить ещё' } },
		progressText: { value: (e) => `Вы просмотрели ${e?.pagination?.end} из ${e?.pagination?.totalResults} товаров` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'Меньше' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `удалить выбранный фильтр ${e?.label} ${e?.value}` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`ползунок ${e?.facet?.label}, текущее значение ${e?.value}, ${
						e?.facet?.range?.low ? `минимальное значение ${e?.facet?.range?.low},` : ''
					} ${e?.facet?.range?.high ? `максимальное значение ${e?.facet?.range?.high}` : ''}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value?.filtered
							? `удалить выбранный фильтр ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `фильтровать по ${e?.facet?.label} - ${e?.value?.label}`
							: `фильтровать по ${e?.value?.label}`
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
							? `удалить выбранный фильтр ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `фильтровать по ${e?.facet?.label} - ${e?.value?.label}`
							: `фильтровать по ${e?.value?.label}`
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
							? `удалить выбранный фильтр ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `фильтровать по ${e?.facet?.label} - ${e?.value?.label}`
							: `фильтровать по ${e?.value?.label}`
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
							? `удалить выбранный фильтр ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `фильтровать по ${e?.facet?.label} - ${e?.value?.label}`
							: `фильтровать по ${e?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>Предупреждение:&nbsp;</b>' },
		infoText: { value: '<b>Информация:&nbsp;</b>' },
		errorText: { value: '<b>Ошибка:&nbsp;</b>' },
		reloadText: { value: 'Перезагрузить' },
	},
	checkbox: {
		checkbox: {
			attributes: { 'aria-label': (e) => `${e?.disabled ? 'отключённый' : ''} ${e?.checkedState ? 'отмеченный' : 'неотмеченный'} флажок` },
		},
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'количество' } },
		decrementButton: { attributes: { 'aria-label': 'уменьшить количество' } },
		incrementButton: { attributes: { 'aria-label': 'увеличить количество' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `Показан${e?.pagination?.totalResults == 1 ? '' : 'ы'} результат${e?.pagination?.totalResults == 1 ? '' : 'ы'}
                ${e?.search?.query ? `по запросу <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
			attributes: { 'aria-label': (e) => `Сейчас в сетке товаров показано ${e?.pagination?.totalResults} элементов` },
		},
		correctedQueryText: {
			value: (e) =>
				`По запросу <em>"${e?.search?.originalQuery?.string}"</em> ничего не найдено, вместо этого показаны результаты по запросу <em>"${e?.search?.query?.string}"</em>.`,
			attributes: {
				'aria-label': (e) =>
					`По запросу ${e?.search?.originalQuery?.string} ничего не найдено, вместо этого показаны результаты по запросу ${e?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    По запросу <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> ничего не найдено.
                </span>`
						: '<span>Результаты не найдены.</span>'
				}`,
			attributes: { 'aria-label': (e) => `По запросу ${e?.search?.query?.string} ничего не найдено` },
		},
		didYouMeanText: { value: (e) => `Возможно, вы имели в виду <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>?` },
		expandedSearchText: {
			value: (e) =>
				`Нам не удалось найти точное совпадение для "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>", но вот что-то похожее:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'Предложения' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Проверьте орфографические ошибки.</li><li class="ss__no-results__suggestions__list__option">Удалите лишние ключевые слова (например: "товары").</li><li class="ss__no-results__suggestions__list__option">Используйте другие слова, чтобы описать то, что вы ищете.</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'Галерея изображений' } },
		zoomOutButton: { attributes: { 'aria-label': 'Уменьшить масштаб' } },
		zoomInButton: { attributes: { 'aria-label': 'Увеличить масштаб' } },
		closeButton: { attributes: { 'aria-label': 'Закрыть галерею' } },
		prevButton: { attributes: { 'aria-label': 'Предыдущее изображение' } },
		nextButton: { attributes: { 'aria-label': 'Следующее изображение' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'Быстрый просмотр' } },
		closeButton: { attributes: { 'aria-label': 'Закрыть быстрый просмотр' } },
		addToCartButton: { value: 'Добавить в корзину' },
		moreInfoButton: { value: 'Подробнее' },
		loadingText: { value: 'Загрузка…' },
	},
};
export { t as ru };
