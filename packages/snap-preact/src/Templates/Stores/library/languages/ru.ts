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
		},
		addToCartButtonSuccessText: {
			value: 'Добавлено!',
		},
		quickviewButtonText: {
			value: 'Быстрый просмотр',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Добавить всё в корзину',
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
		// contactsTitleText: {
		// 	value: `Vous ne trouvez toujours pas ce que vous cherchez? <a href="/contact-us">Contactez-nous</a>.`,
		// },
		// contactsList: {
		// 	value: `<div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Adresse</h4>
		//                 <p class="ss__no-results__contact__detail__content">123 Adresse Ville, État, Code postal</p>
		//             </div>
		//             <div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Heures</h4>
		//                 <p class="ss__no-results__contact__detail__content">Lundi - Samedi, 00:00am - 00:00pm Samedi, 00:00am - 00:00pm</p>
		//             </div>
		//             <div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Téléphone</h4>
		//                 <p class="ss__no-results__contact__detail__content"><a href="tel:1234567890">123-456-7890</a></p>
		//             </div>
		//             <div class='ss__no-results__contact__detail'>
		//                 <h4 class="ss__no-results__contact__detail__title">Email</h4>
		//                 <p class="ss__no-results__contact__detail__content"><a href="mailto:email@site.com">email@site.com</a></p>
		//             </div>`,
		// },
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
		loadingText: {
			value: 'Загрузка…',
		},
	},
};
