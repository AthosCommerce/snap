'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[697],
		{
			'./src/Templates/Stores/library/languages/ar.ts'(a, e, t) {
				t.r(e);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: {
							value: '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A',
							attributes: {
								'aria-label':
									'\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A',
							},
						},
						noResultsText: {
							value: (u) =>
								`<p>\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 "${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}".</p><p>\u064A\u0631\u062C\u0649 \u062A\u062C\u0631\u0628\u0629 \u0628\u062D\u062B \u0622\u062E\u0631.</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`\u0639\u0631\u0636 ${u?.controller?.store?.pagination.totalResults} \u0646\u062A\u064A\u062C\u0629${
									u?.controller?.store?.filters.length > 0 ? ' \u0645\u064F\u0635\u0641\u0651\u0627\u0629' : ''
								} \u0644\u0640 "${u?.controller?.store?.search?.query?.string}"`,
						},
					},
					'terms.history': {
						title: { value: '\u0627\u0644\u0633\u062C\u0644' },
						term: {
							attributes: {
								'aria-label': (u) => `\u0627\u0644\u0639\u0646\u0635\u0631 ${u.index + 1} \u0645\u0646 ${u.numberOfTerms}\u060C ${u.term.value}`,
							},
						},
					},
					'terms.suggestions': {
						title: { value: '\u0627\u0642\u062A\u0631\u0627\u062D\u0627\u062A' },
						term: {
							attributes: {
								'aria-label': (u) => `\u0627\u0644\u0639\u0646\u0635\u0631 ${u.index + 1} \u0645\u0646 ${u.numberOfTerms}\u060C ${u.term.value}`,
							},
						},
					},
					'terms.trending': {
						title: { value: '\u0627\u0644\u0623\u0643\u062B\u0631 \u0631\u0648\u0627\u062C\u0627\u064B' },
						term: {
							attributes: {
								'aria-label': (u) => `\u0627\u0644\u0639\u0646\u0635\u0631 ${u.index + 1} \u0645\u0646 ${u.numberOfTerms}\u060C ${u.term.value}`,
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
						titleText: { value: '\u0627\u0644\u0641\u0644\u0627\u062A\u0631' },
						applyButtonText: { value: '\u062A\u0637\u0628\u064A\u0642' },
						clearButtonText: { value: '\u0645\u0633\u062D \u0627\u0644\u0643\u0644' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: '\u0628\u062D\u062B' } },
						closeSearchButton: { attributes: { 'aria-label': '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0628\u062D\u062B' } },
						clearSearchButton: { attributes: { 'aria-label': '\u0645\u0633\u062D \u0627\u0644\u0628\u062D\u062B' } },
						submitSearchButton: { attributes: { 'aria-label': '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u062D\u062B' } },
					},
					recommendationBundle: {
						seedText: { value: '\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u062C' },
						ctaButtonText: { value: '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629' },
						ctaButtonSuccessText: { value: '\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062D\u0632\u0645\u0629!' },
						ctaSubtotalTitle: {
							value: (u) =>
								`\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064A \u0644\u0640 ${u.cartStore.count} \u0639\u0646\u0627\u0635\u0631`,
						},
					},
					slideshow: {
						pauseButton: {
							value: (u) => (u.isPlaying ? '\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A' : '\u062A\u0634\u063A\u064A\u0644'),
							attributes: {
								'aria-label': (u) =>
									u.isPlaying
										? '\u0625\u064A\u0642\u0627\u0641 \u0639\u0631\u0636 \u0627\u0644\u0634\u0631\u0627\u0626\u062D \u0645\u0624\u0642\u062A\u0627\u064B'
										: '\u0627\u0633\u062A\u0626\u0646\u0627\u0641 \u0639\u0631\u0636 \u0627\u0644\u0634\u0631\u0627\u0626\u062D',
							},
						},
						paginationButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0634\u0631\u0627\u0626\u062D ${
										u.index + 1
									} \u0645\u0646 ${u.totalDots}`,
							},
						},
						nextButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0634\u0631\u0627\u0626\u062D \u0627\u0644\u062A\u0627\u0644\u064A\u0629${
										u.isNextDisabled ? ' (\u0645\u0639\u0637\u0651\u0644)' : ''
									}`,
							},
						},
						prevButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0634\u0631\u0627\u0626\u062D \u0627\u0644\u0633\u0627\u0628\u0642\u0629${
										u.isPrevDisabled ? ' (\u0645\u0639\u0637\u0651\u0644)' : ''
									}`,
							},
						},
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler
										? `\u0627\u0646\u0642\u0631 \u0644\u0639\u0631\u0636 ${u.imageAlt}`
										: `${u.imageAlt} ${u.index + 1} \u0645\u0646 ${u.slidesLength}`,
							},
						},
						srInstructions: {
							value: (u) =>
								`\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0646\u0642\u0644 \u0628\u064A\u0646 \u0627\u0644\u0634\u0631\u0627\u0626\u062D. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0634\u0631\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u0645\u0624\u0642\u062A\u0627\u064B. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D Home \u0623\u0648 End \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0634\u0631\u0627\u0626\u062D \u0627\u0644\u0623\u0648\u0644\u0649 \u0623\u0648 \u0627\u0644\u0623\u062E\u064A\u0631\u0629. ${
									u.touchDragging &&
									'\u0639\u0644\u0649 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0644\u0645\u0633\u064A\u0629\u060C \u0627\u0633\u062D\u0628 \u0644\u0644\u064A\u0645\u064A\u0646 \u0623\u0648 \u0644\u0644\u064A\u0633\u0627\u0631 \u0644\u0644\u062A\u0646\u0642\u0644.'
								}`,
						},
					},
					sortBy: { label: { value: '\u062A\u0631\u062A\u064A\u0628 \u062D\u0633\u0628' } },
					tabSelection: {
						tabList: {
							attributes: {
								'aria-label': '\u0639\u0644\u0627\u0645\u0627\u062A \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u0646\u062A\u0627\u0626\u062C',
							},
						},
						tabButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.tab.label || u.tab.id}${typeof u.resultCount == 'number' ? `\u060C ${u.resultCount} \u0646\u062A\u0627\u0626\u062C` : ''}`,
							},
						},
					},
					perPage: { label: { value: '\u0644\u0643\u0644 \u0635\u0641\u062D\u0629' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062F\u0644\u0629 \u0644\u0641\u0644\u062A\u0631 ${
										u?.facet?.field
									} \u062D\u0627\u0644\u064A\u0627\u064B ${
										u?.selectedFacet?.field === u?.facet?.field ? '\u0645\u0637\u0648\u064A\u0629' : '\u0645\u0641\u062A\u0648\u062D\u0629'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u062E\u064A\u0627\u0631' : ''}`,
							},
						},
					},
					filterSummary: {
						title: { value: '\u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629' },
						clearAllLabel: { value: '\u0645\u0633\u062D \u0627\u0644\u0643\u0644' },
					},
					facet: {
						showMoreText: { value: '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F' },
						showLessText: { value: '\u0639\u0631\u0636 \u0623\u0642\u0644' },
						clearAllText: { value: '\u0645\u0633\u062D \u0627\u0644\u0643\u0644' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062F\u0644\u0629 \u0644\u0641\u0644\u062A\u0631 ${
										u?.facet?.label
									} \u062D\u0627\u0644\u064A\u0627\u064B ${
										u?.facet?.collapsed ? '\u0645\u0637\u0648\u064A\u0629' : '\u0645\u0641\u062A\u0648\u062D\u0629'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u062E\u064A\u0627\u0631' : ''}`,
							},
						},
						submitRangeButton: { value: '\u0625\u0631\u0633\u0627\u0644' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062F\u0644\u0629 ${u?.label}\u060C ${
										u?.options?.length
									} \u062E\u064A\u0627\u0631 ${
										u?.selectedOptions?.length
											? `\u060C \u0627\u0644\u062E\u064A\u0627\u0631 \u0627\u0644\u0645\u062D\u062F\u062F \u062D\u0627\u0644\u064A\u0627\u064B \u0647\u0648 ${u?.selectedOptions[0].label}`
											: ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`\u0632\u0631 \u0631\u0627\u062F\u064A\u0648 ${u?.disabled ? '\u0645\u0639\u0637\u0651\u0644' : ''} ${
										u?.checkedState ? '\u0645\u062D\u062F\u062F' : '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'
									}`,
							},
						},
					},
					pagination: {
						previous: {
							attributes: {
								'aria-label':
									'\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629',
							},
						},
						next: {
							attributes: {
								'aria-label':
									'\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629',
							},
						},
						first: {
							attributes: {
								'aria-label':
									'\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u0648\u0644\u0649',
							},
						},
						last: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629 ${u?.pagination?.last?.number}`,
							},
						},
						page: {
							attributes: {
								'aria-label': (u) =>
									`\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 ${u?.page?.number}`,
							},
						},
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `${u?.totalResults} \u0645\u0646\u062A\u062C` } },
					result: {
						addToCartButtonText: {
							value: '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629',
							attributes: {
								'aria-label': '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629',
							},
						},
						addToCartButtonSuccessText: { value: '\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629!' },
						quickviewButtonText: {
							value: '\u0639\u0631\u0636 \u0633\u0631\u064A\u0639',
							attributes: { 'aria-label': '\u0639\u0631\u0636 \u0633\u0631\u064A\u0639' },
						},
					},
					overlayResult: {
						addToCartButtonText: {
							value: '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629',
							attributes: {
								'aria-label': '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629',
							},
						},
						addToCartButtonSuccessText: { value: '\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': '\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0632\u064A\u062F' } },
						progressText: {
							value: (u) =>
								`\u0644\u0642\u062F \u0634\u0627\u0647\u062F\u062A ${u?.pagination?.end} \u0645\u0646 ${u?.pagination?.totalResults} \u0645\u0646\u062A\u062C`,
						},
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: '\u0623\u0642\u0644' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.label
											? `\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F ${u?.label} ${u?.value}`
											: u?.value || ''
									}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`\u0645\u0642\u0628\u0636 \u0634\u0631\u064A\u0637 \u062A\u0645\u0631\u064A\u0631 ${
										u?.facet?.label
									}\u060C \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 ${u?.value}\u060C ${
										u?.facet?.range?.low
											? `\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u062F\u0646\u064A\u0627 ${u?.facet?.range?.low}\u060C`
											: ''
									} ${
										u?.facet?.range?.high ? `\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0642\u0635\u0648\u0649 ${u?.facet?.range?.high}` : ''
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
											? `\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.facet?.label} - ${u?.value?.label}`
											: `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.value?.label}`
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
											? `\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.facet?.label} - ${u?.value?.label}`
											: `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.value?.label}`
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
											? `\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.facet?.label} - ${u?.value?.label}`
											: `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.value?.label}`
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
											? `\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.facet?.label} - ${u?.value?.label}`
											: `\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 ${u?.value?.label}`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>\u062A\u062D\u0630\u064A\u0631:&nbsp;</b>' },
						infoText: { value: '<b>\u0645\u0639\u0644\u0648\u0645\u0627\u062A:&nbsp;</b>' },
						errorText: { value: '<b>\u062E\u0637\u0623:&nbsp;</b>' },
						reloadText: { value: '\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`\u0645\u0631\u0628\u0639 \u0627\u062E\u062A\u064A\u0627\u0631 ${u?.disabled ? '\u0645\u0639\u0637\u0651\u0644' : ''} ${
										u?.checkedState ? '\u0645\u062D\u062F\u062F' : '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F'
									}`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': '\u0627\u0644\u0643\u0645\u064A\u0629' } },
						decrementButton: { attributes: { 'aria-label': '\u0625\u0646\u0642\u0627\u0635 \u0627\u0644\u0643\u0645\u064A\u0629' } },
						incrementButton: { attributes: { 'aria-label': '\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0643\u0645\u064A\u0629' } },
					},
					searchHeader: {
						titleText: {
							value: (u) => `\u0639\u0631\u0636 ${u?.pagination?.totalResults} \u0646\u062A\u064A\u062C\u0629
                ${u?.search?.query ? `\u0644\u0640 <span class="ss__search-header__results-query">"${u?.search?.query.string}"</span>` : ''}`,
							attributes: {
								'aria-label': (u) =>
									`\u064A\u062A\u0645 \u0627\u0644\u0622\u0646 \u0639\u0631\u0636 ${u?.pagination?.totalResults} \u0639\u0646\u0635\u0631 \u0641\u064A \u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A`,
							},
						},
						correctedQueryText: {
							value: (u) =>
								`\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 <em>"${u?.search?.originalQuery?.string}"</em>\u060C \u0648\u062A\u064F\u0639\u0631\u0636 \u0628\u062F\u0644\u0627\u064B \u0645\u0646\u0647\u0627 \u0646\u062A\u0627\u0626\u062C <em>"${u?.search?.query?.string}"</em>.`,
							attributes: {
								'aria-label': (u) =>
									`\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 ${u?.search?.originalQuery?.string}\u060C \u0648\u062A\u064F\u0639\u0631\u0636 \u0628\u062F\u0644\u0627\u064B \u0645\u0646\u0647\u0627 \u0646\u062A\u0627\u0626\u062C ${u?.search?.query?.string}`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span>.
                </span>`
										: '<span>\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C.</span>'
								}`,
							attributes: {
								'aria-label': (u) =>
									`\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 ${u?.search?.query?.string}`,
							},
						},
						didYouMeanText: {
							value: (u) =>
								`\u0647\u0644 \u062A\u0642\u0635\u062F <a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a>\u061F`,
						},
						expandedSearchText: {
							value: (u) =>
								`\u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062A\u0637\u0627\u0628\u0642 \u062A\u0627\u0645 \u0644\u0640 "<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>"\u060C \u0648\u0644\u0643\u0646 \u0625\u0644\u064A\u0643 \u0634\u064A\u0621 \u0645\u0634\u0627\u0628\u0647:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\u0627\u0642\u062A\u0631\u0627\u062D\u0627\u062A' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0625\u0645\u0644\u0627\u0626\u064A\u0629.</li><li class="ss__no-results__suggestions__list__option">\u0627\u062D\u0630\u0641 \u0623\u064A \u0643\u0644\u0645\u0627\u062A \u0645\u0641\u062A\u0627\u062D\u064A\u0629 \u0632\u0627\u0626\u062F\u0629 (\u0645\u062B\u0644: "\u0645\u0646\u062A\u062C\u0627\u062A").</li><li class="ss__no-results__suggestions__list__option">\u0627\u0633\u062A\u062E\u062F\u0645 \u0643\u0644\u0645\u0627\u062A \u0623\u062E\u0631\u0649 \u0644\u0648\u0635\u0641 \u0645\u0627 \u062A\u0628\u062D\u062B \u0639\u0646\u0647.</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': '\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631' } },
						zoomOutButton: { attributes: { 'aria-label': '\u062A\u0635\u063A\u064A\u0631' } },
						zoomInButton: { attributes: { 'aria-label': '\u062A\u0643\u0628\u064A\u0631' } },
						closeButton: { attributes: { 'aria-label': '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u0639\u0631\u0636' } },
						prevButton: { attributes: { 'aria-label': '\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629' } },
						nextButton: { attributes: { 'aria-label': '\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': '\u0639\u0631\u0636 \u0633\u0631\u064A\u0639' } },
						closeButton: {
							attributes: { 'aria-label': '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0633\u0631\u064A\u0639' },
						},
						addToCartButton: { value: '\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629' },
						moreInfoButton: { value: '\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A' },
						loadingText: { value: '\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u2026' },
					},
				};
				t.d(e, ['ar', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=697.2a8f5897.iframe.bundle.js.map
