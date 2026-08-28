'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9247],
		{
			'./src/Templates/Stores/library/languages/ru.ts'(a, e, t) {
				t.r(e);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: {
							value:
								'\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435',
							attributes: {
								'aria-label':
									'\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435',
							},
						},
						noResultsText: {
							value: (u) =>
								`<p>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 "${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B.</p><p>\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441.</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ${u?.controller?.store?.pagination.totalResults} ${
									u?.controller?.store?.filters.length > 0
										? '\u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 '
										: ''
								}\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442${
									u?.controller?.store?.pagination?.totalResults == 1 ? '' : '\u043E\u0432'
								} \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 "${u?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: '\u0418\u0441\u0442\u043E\u0440\u0438\u044F' },
						term: {
							attributes: {
								'aria-label': (u) => `\u044D\u043B\u0435\u043C\u0435\u043D\u0442 ${u.index + 1} \u0438\u0437 ${u.numberOfTerms}, ${u.term.value}`,
							},
						},
					},
					'terms.suggestions': {
						title: { value: '\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F' },
						term: {
							attributes: {
								'aria-label': (u) => `\u044D\u043B\u0435\u043C\u0435\u043D\u0442 ${u.index + 1} \u0438\u0437 ${u.numberOfTerms}, ${u.term.value}`,
							},
						},
					},
					'terms.trending': {
						title: { value: '\u0412 \u0442\u0440\u0435\u043D\u0434\u0435' },
						term: {
							attributes: {
								'aria-label': (u) => `\u044D\u043B\u0435\u043C\u0435\u043D\u0442 ${u.index + 1} \u0438\u0437 ${u.numberOfTerms}, ${u.term.value}`,
							},
						},
					},
					button: {},
					search: {},
					searchHorizontal: {},
					searchCollapsible: {},
					list: {},
					radioList: {},
					layoutSelector: { label: {} },
					sidebar: {
						titleText: { value: '\u0424\u0438\u043B\u044C\u0442\u0440\u044B' },
						applyButtonText: { value: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C' },
						clearButtonText: { value: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0451' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: '\u041F\u043E\u0438\u0441\u043A' } },
						closeSearchButton: { attributes: { 'aria-label': '\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0438\u0441\u043A' } },
						clearSearchButton: { attributes: { 'aria-label': '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A' } },
						submitSearchButton: {
							attributes: { 'aria-label': '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A' },
						},
					},
					recommendationBundle: {
						seedText: { value: '\u042D\u0442\u043E\u0442 \u0442\u043E\u0432\u0430\u0440' },
						ctaButtonText: {
							value: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0451 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443',
						},
						ctaButtonSuccessText: { value: '\u041D\u0430\u0431\u043E\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!' },
						ctaSubtotalTitle: {
							value: (u) =>
								`\u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u0438\u0442\u043E\u0433 \u0437\u0430 ${u.cartStore.count} \u0442\u043E\u0432\u0430\u0440(\u043E\u0432)`,
						},
					},
					slideshow: {
						pauseButton: {
							value: (u) =>
								u.isPlaying ? '\u041F\u0430\u0443\u0437\u0430' : '\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438',
							attributes: {
								'aria-label': (u) =>
									u.isPlaying
										? '\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043B\u0430\u0439\u0434-\u0448\u043E\u0443'
										: '\u0412\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043B\u0430\u0439\u0434-\u0448\u043E\u0443',
							},
						},
						paginationButton: {
							attributes: {
								'aria-label': (u) =>
									`\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0433\u0440\u0443\u043F\u043F\u0435 \u0441\u043B\u0430\u0439\u0434\u043E\u0432 ${
										u.index + 1
									} \u0438\u0437 ${u.totalDots}`,
							},
						},
						nextButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u043B\u0430\u0439\u0434\u044B${
										u.isNextDisabled ? ' (\u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E)' : ''
									}`,
							},
						},
						prevButton: {
							attributes: {
								'aria-label': (u) =>
									`\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0441\u043B\u0430\u0439\u0434\u044B${
										u.isPrevDisabled ? ' (\u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E)' : ''
									}`,
							},
						},
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler
										? `\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C ${u.imageAlt}`
										: `${u.imageAlt} ${u.index + 1} \u0438\u0437 ${u.slidesLength}`,
							},
						},
						srInstructions: {
							value: (u) =>
								`\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0441\u043B\u0430\u0439\u0434\u0430\u043C. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 Home \u0438\u043B\u0438 End, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0435\u0440\u0432\u043E\u0439 \u0438\u043B\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u0441\u043B\u0430\u0439\u0434\u043E\u0432. ${
									u.touchDragging &&
									'\u041D\u0430 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 \u043F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0432\u043B\u0435\u0432\u043E \u0438\u043B\u0438 \u0432\u043F\u0440\u0430\u0432\u043E \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438.'
								}`,
						},
					},
					sortBy: { label: { value: '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E' } },
					tabSelection: {
						tabList: {
							attributes: {
								'aria-label': '\u0412\u043A\u043B\u0430\u0434\u043A\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432',
							},
						},
						tabButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.tab.label || u.tab.id}${
										typeof u.resultCount == 'number' ? `, ${u.resultCount} \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432` : ''
									}`,
							},
						},
					},
					perPage: { label: { value: '\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A \u0444\u0438\u043B\u044C\u0442\u0440\u0430 ${
										u?.facet?.field
									}, \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 ${
										u?.selectedFacet?.field === u?.facet?.field
											? '\u0441\u0432\u0451\u0440\u043D\u0443\u0442'
											: '\u043E\u0442\u043A\u0440\u044B\u0442'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432' : ''}`,
							},
						},
					},
					filterSummary: {
						title: { value: '\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B' },
						clearAllLabel: { value: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0451' },
					},
					facet: {
						showMoreText: { value: '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435' },
						showLessText: { value: '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435' },
						clearAllText: { value: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0451' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A \u0444\u0438\u043B\u044C\u0442\u0440\u0430 ${
										u?.facet?.label
									}, \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 ${
										u?.facet?.collapsed ? '\u0441\u0432\u0451\u0440\u043D\u0443\u0442' : '\u043E\u0442\u043A\u0440\u044B\u0442'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432' : ''}`,
							},
						},
						submitRangeButton: { value: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`\u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A ${
										u?.label
									}, ${u?.options?.length} \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 ${
										u?.selectedOptions?.length
											? `, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: ${u?.selectedOptions[0].label}`
											: ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u043E\u0442\u043A\u043B\u044E\u0447\u0451\u043D\u043D\u0430\u044F' : ''} ${
										u?.checkedState
											? '\u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F'
											: '\u043D\u0435\u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F'
									} \u0440\u0430\u0434\u0438\u043E\u043A\u043D\u043E\u043F\u043A\u0430`,
							},
						},
					},
					pagination: {
						previous: {
							attributes: {
								'aria-label':
									'\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443',
							},
						},
						next: {
							attributes: {
								'aria-label':
									'\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443',
							},
						},
						first: {
							attributes: {
								'aria-label':
									'\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443',
							},
						},
						last: {
							attributes: {
								'aria-label': (u) =>
									`\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ${u?.pagination?.last?.number}`,
							},
						},
						page: {
							attributes: {
								'aria-label': (u) =>
									`\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ${u?.page?.number}`,
							},
						},
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `${u?.totalResults} \u0442\u043E\u0432\u0430\u0440\u043E\u0432` } },
					result: {
						addToCartButtonText: {
							value: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0451 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443',
							attributes: {
								'aria-label': '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0451 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443',
							},
						},
						addToCartButtonSuccessText: { value: '\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E!' },
						quickviewButtonText: {
							value: '\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440',
							attributes: { 'aria-label': '\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440' },
						},
					},
					overlayResult: {
						addToCartButtonText: {
							value: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0451 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443',
							attributes: {
								'aria-label': '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0451 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443',
							},
						},
						addToCartButtonSuccessText: { value: '\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451' } },
						progressText: {
							value: (u) =>
								`\u0412\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438 ${u?.pagination?.end} \u0438\u0437 ${u?.pagination?.totalResults} \u0442\u043E\u0432\u0430\u0440\u043E\u0432`,
						},
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: '\u041C\u0435\u043D\u044C\u0448\u0435' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.label
											? `\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 ${u?.label} ${u?.value}`
											: u?.value || ''
									}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`\u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A ${
										u?.facet?.label
									}, \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ${u?.value}, ${
										u?.facet?.range?.low
											? `\u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ${u?.facet?.range?.low},`
											: ''
									} ${
										u?.facet?.range?.high
											? `\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ${u?.facet?.range?.high}`
											: ''
									}`,
							},
						},
					},
					facetPaletteOptions: {
						paletteOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.facet?.label} - ${u?.value?.label}`
											: `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.value?.label}`
									}`,
							},
						},
					},
					facetListOptions: {
						listOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.facet?.label} - ${u?.value?.label}`
											: `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.value?.label}`
									}`,
							},
						},
					},
					facetHierarchyOptions: {
						hierarchyOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.facet?.label} - ${u?.value?.label}`
											: `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.value?.label}`
									}`,
							},
						},
					},
					facetGridOptions: {
						gridOption: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.value?.filtered
											? `\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.facet?.label} - ${u?.value?.label}`
											: `\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E ${u?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:&nbsp;</b>' },
						infoText: { value: '<b>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:&nbsp;</b>' },
						errorText: { value: '<b>\u041E\u0448\u0438\u0431\u043A\u0430:&nbsp;</b>' },
						reloadText: { value: '\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u043E\u0442\u043A\u043B\u044E\u0447\u0451\u043D\u043D\u044B\u0439' : ''} ${
										u?.checkedState
											? '\u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0439'
											: '\u043D\u0435\u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0439'
									} \u0444\u043B\u0430\u0436\u043E\u043A`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': '\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E' } },
						decrementButton: {
							attributes: {
								'aria-label': '\u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E',
							},
						},
						incrementButton: {
							attributes: {
								'aria-label': '\u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E',
							},
						},
					},
					searchHeader: {
						titleText: {
							value: (u) => `\u041F\u043E\u043A\u0430\u0437\u0430\u043D${
								u?.pagination?.totalResults == 1 ? '' : '\u044B'
							} \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442${u?.pagination?.totalResults == 1 ? '' : '\u044B'}
                ${
									u?.search?.query
										? `\u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 <span class="ss__search-header__results-query">"${u?.search?.query.string}"</span>`
										: ''
								}`,
							attributes: {
								'aria-label': (u) =>
									`\u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u0441\u0435\u0442\u043A\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${u?.pagination?.totalResults} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432`,
							},
						},
						correctedQueryText: {
							value: (u) =>
								`\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 <em>"${u?.search?.originalQuery?.string}"</em> \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E, \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 <em>"${u?.search?.query?.string}"</em>.`,
							attributes: {
								'aria-label': (u) =>
									`\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ${u?.search?.originalQuery?.string} \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E, \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ${u?.search?.query?.string}`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    \u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span> \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.
                </span>`
										: '<span>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B.</span>'
								}`,
							attributes: {
								'aria-label': (u) =>
									`\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ${u?.search?.query?.string} \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E`,
							},
						},
						didYouMeanText: {
							value: (u) =>
								`\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0432\u044B \u0438\u043C\u0435\u043B\u0438 \u0432 \u0432\u0438\u0434\u0443 <a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a>?`,
						},
						expandedSearchText: {
							value: (u) =>
								`\u041D\u0430\u043C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0442\u043E\u0447\u043D\u043E\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0434\u043B\u044F "<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>", \u043D\u043E \u0432\u043E\u0442 \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0445\u043E\u0436\u0435\u0435:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438.</li><li class="ss__no-results__suggestions__list__option">\u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u043B\u0438\u0448\u043D\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: "\u0442\u043E\u0432\u0430\u0440\u044B").</li><li class="ss__no-results__suggestions__list__option">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043B\u043E\u0432\u0430, \u0447\u0442\u043E\u0431\u044B \u043E\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u043E, \u0447\u0442\u043E \u0432\u044B \u0438\u0449\u0435\u0442\u0435.</li></ul>',
						},
					},
					gallery: {
						gallery: {
							attributes: {
								'aria-label': '\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439',
							},
						},
						zoomOutButton: {
							attributes: { 'aria-label': '\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431' },
						},
						zoomInButton: {
							attributes: { 'aria-label': '\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431' },
						},
						closeButton: { attributes: { 'aria-label': '\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E' } },
						prevButton: {
							attributes: {
								'aria-label':
									'\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435',
							},
						},
						nextButton: {
							attributes: {
								'aria-label':
									'\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435',
							},
						},
					},
					quickviewLayout: {
						quickview: {
							attributes: { 'aria-label': '\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440' },
						},
						closeButton: {
							attributes: {
								'aria-label':
									'\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440',
							},
						},
						addToCartButton: { value: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443' },
						moreInfoButton: { value: '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435' },
						loadingText: { value: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026' },
					},
				};
				t.d(e, ['ru', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=9247.e9204ed0.iframe.bundle.js.map
