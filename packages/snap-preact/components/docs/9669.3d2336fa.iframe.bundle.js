'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9669],
		{
			'./src/Templates/Stores/library/languages/hi.ts'(a, e, t) {
				t.r(e);
				const l = {
					recommendation: {},
					autocompleteLayout: {
						facetsTitle: {},
						contentTitle: {},
						closeButton: {
							value: '\u0911\u091F\u094B\u0915\u092E\u094D\u092A\u0932\u0940\u091F \u092C\u0902\u0926 \u0915\u0930\u0947\u0902',
							attributes: {
								'aria-label': '\u0911\u091F\u094B\u0915\u092E\u094D\u092A\u0932\u0940\u091F \u092C\u0902\u0926 \u0915\u0930\u0947\u0902',
							},
						},
						noResultsText: {
							value: (u) =>
								`<p>"${
									u.controller?.store?.search?.originalQuery?.string || u.controller?.store?.search?.query?.string
								}" \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964</p><p>\u0915\u0943\u092A\u092F\u093E \u0915\u094B\u0908 \u0905\u0928\u094D\u092F \u0916\u094B\u091C \u0906\u091C\u093C\u092E\u093E\u090F\u0902\u0964</p>`,
						},
						seeMoreButton: {
							value: (u) =>
								`"${u?.controller?.store?.search?.query?.string}" \u0915\u0947 \u0932\u093F\u090F ${u?.controller?.store?.pagination.totalResults} ${
									u?.controller?.store?.filters.length > 0 ? '\u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u093F\u090F \u0917\u090F ' : ''
								}\u092A\u0930\u093F\u0923\u093E\u092E \u0926\u0947\u0916\u0947\u0902`,
						},
					},
					'terms.history': {
						title: { value: '\u0907\u0924\u093F\u0939\u093E\u0938' },
						term: {
							attributes: {
								'aria-label': (u) =>
									`\u0906\u0907\u091F\u092E ${u.index + 1}, \u0915\u0941\u0932 ${u.numberOfTerms} \u092E\u0947\u0902 \u0938\u0947, ${u.term.value}`,
							},
						},
					},
					'terms.suggestions': {
						title: { value: '\u0938\u0941\u091D\u093E\u0935' },
						term: {
							attributes: {
								'aria-label': (u) =>
									`\u0906\u0907\u091F\u092E ${u.index + 1}, \u0915\u0941\u0932 ${u.numberOfTerms} \u092E\u0947\u0902 \u0938\u0947, ${u.term.value}`,
							},
						},
					},
					'terms.trending': {
						title: { value: '\u091F\u094D\u0930\u0947\u0902\u0921\u093F\u0902\u0917' },
						term: {
							attributes: {
								'aria-label': (u) =>
									`\u0906\u0907\u091F\u092E ${u.index + 1}, \u0915\u0941\u0932 ${u.numberOfTerms} \u092E\u0947\u0902 \u0938\u0947, ${u.term.value}`,
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
						titleText: { value: '\u092B\u093C\u093F\u0932\u094D\u091F\u0930' },
						applyButtonText: { value: '\u0932\u093E\u0917\u0942 \u0915\u0930\u0947\u0902' },
						clearButtonText: { value: '\u0938\u092D\u0940 \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902' },
						closeButtonText: {},
					},
					searchInput: {
						placeholderText: { attributes: { placeholder: '\u0916\u094B\u091C\u0947\u0902' } },
						closeSearchButton: { attributes: { 'aria-label': '\u0916\u094B\u091C \u092C\u0902\u0926 \u0915\u0930\u0947\u0902' } },
						clearSearchButton: { attributes: { 'aria-label': '\u0916\u094B\u091C \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902' } },
						submitSearchButton: { attributes: { 'aria-label': '\u0916\u094B\u091C \u0938\u092C\u092E\u093F\u091F \u0915\u0930\u0947\u0902' } },
					},
					recommendationBundle: {
						seedText: { value: '\u092F\u0939 \u0909\u0924\u094D\u092A\u093E\u0926' },
						ctaButtonText: {
							value: '\u0938\u092D\u0940 \u0915\u094B \u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902',
						},
						ctaButtonSuccessText: { value: '\u092C\u0902\u0921\u0932 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E!' },
						ctaSubtotalTitle: { value: (u) => `${u.cartStore.count} \u0906\u0907\u091F\u092E \u0915\u093E \u0909\u092A-\u092F\u094B\u0917` },
					},
					slideshow: {
						pauseButton: {
							value: (u) => (u.isPlaying ? '\u0930\u094B\u0915\u0947\u0902' : '\u091A\u0932\u093E\u090F\u0902'),
							attributes: {
								'aria-label': (u) =>
									u.isPlaying
										? '\u0938\u094D\u0932\u093E\u0907\u0921\u0936\u094B \u0930\u094B\u0915\u0947\u0902'
										: '\u0938\u094D\u0932\u093E\u0907\u0921\u0936\u094B \u092B\u093F\u0930 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902',
							},
						},
						paginationButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0938\u094D\u0932\u093E\u0907\u0921 \u0938\u092E\u0942\u0939 ${u.index + 1}, \u0915\u0941\u0932 ${
										u.totalDots
									} \u092E\u0947\u0902 \u0938\u0947, \u092A\u0930 \u091C\u093E\u090F\u0902`,
							},
						},
						nextButton: {
							attributes: {
								'aria-label': (u) =>
									`\u0905\u0917\u0932\u0940 \u0938\u094D\u0932\u093E\u0907\u0921${u.isNextDisabled ? ' (\u0905\u0915\u094D\u0937\u092E)' : ''}`,
							},
						},
						prevButton: {
							attributes: {
								'aria-label': (u) =>
									`\u092A\u093F\u091B\u0932\u0940 \u0938\u094D\u0932\u093E\u0907\u0921${u.isPrevDisabled ? ' (\u0905\u0915\u094D\u0937\u092E)' : ''}`,
							},
						},
						slide: {
							attributes: {
								'aria-label': (u) =>
									u.hasClickHandler
										? `${u.imageAlt} \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902`
										: `${u.imageAlt} ${u.index + 1}, \u0915\u0941\u0932 ${u.slidesLength} \u092E\u0947\u0902 \u0938\u0947`,
							},
						},
						srInstructions: {
							value: (u) =>
								`\u0938\u094D\u0932\u093E\u0907\u0921\u094D\u0938 \u0915\u0947 \u092C\u0940\u091A \u0928\u0947\u0935\u093F\u0917\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0910\u0930\u094B \u0915\u0941\u0902\u091C\u093F\u092F\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902\u0964 \u0911\u091F\u094B-\u092A\u094D\u0932\u0947 \u0930\u094B\u0915\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u092A\u0947\u0938 \u092C\u093E\u0930 \u0926\u092C\u093E\u090F\u0902\u0964 \u092A\u0939\u0932\u0947 \u092F\u093E \u0906\u0916\u093F\u0930\u0940 \u0938\u094D\u0932\u093E\u0907\u0921 \u0938\u092E\u0942\u0939 \u092A\u0930 \u091C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F Home \u092F\u093E End \u0915\u0941\u0902\u091C\u0940 \u0926\u092C\u093E\u090F\u0902\u0964 ${
									u.touchDragging &&
									'\u091F\u091A \u0921\u093F\u0935\u093E\u0907\u0938 \u092A\u0930, \u0928\u0947\u0935\u093F\u0917\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u093E\u090F\u0902 \u092F\u093E \u0926\u093E\u090F\u0902 \u0938\u094D\u0935\u093E\u0907\u092A \u0915\u0930\u0947\u0902\u0964'
								}`,
						},
					},
					sortBy: {
						label: {
							value:
								'\u0907\u0938\u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0915\u094D\u0930\u092E\u092C\u0926\u094D\u0927 \u0915\u0930\u0947\u0902',
						},
					},
					tabSelection: {
						tabList: { attributes: { 'aria-label': '\u092A\u0930\u093F\u0923\u093E\u092E \u091F\u0948\u092C' } },
						tabButton: {
							attributes: {
								'aria-label': (u) =>
									`${u.tab.label || u.tab.id}${typeof u.resultCount == 'number' ? `, ${u.resultCount} \u092A\u0930\u093F\u0923\u093E\u092E` : ''}`,
							},
						},
					},
					perPage: { label: { value: '\u092A\u094D\u0930\u0924\u093F \u092A\u0943\u0937\u094D\u0920' } },
					facetsHorizontal: {
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.facet?.field
									} \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0921\u094D\u0930\u0949\u092A\u0921\u093E\u0909\u0928, \u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092E\u0947\u0902 ${
										u?.selectedFacet?.field === u?.facet?.field
											? '\u0938\u0902\u0915\u094D\u0937\u093F\u092A\u094D\u0924'
											: '\u0916\u0941\u0932\u093E'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u0935\u093F\u0915\u0932\u094D\u092A' : ''}`,
							},
						},
					},
					filterSummary: {
						title: { value: '\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092B\u093C\u093F\u0932\u094D\u091F\u0930' },
						clearAllLabel: { value: '\u0938\u092D\u0940 \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902' },
					},
					facet: {
						showMoreText: { value: '\u0905\u0927\u093F\u0915 \u0926\u093F\u0916\u093E\u090F\u0902' },
						showLessText: { value: '\u0915\u092E \u0926\u093F\u0916\u093E\u090F\u0902' },
						clearAllText: { value: '\u0938\u092D\u0940 \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902' },
						dropdownButton: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.facet?.label
									} \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0921\u094D\u0930\u0949\u092A\u0921\u093E\u0909\u0928, \u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092E\u0947\u0902 ${
										u?.facet?.collapsed ? '\u0938\u0902\u0915\u094D\u0937\u093F\u092A\u094D\u0924' : '\u0916\u0941\u0932\u093E'
									} ${u?.facet?.values?.length ? u?.facet?.values?.length + ' \u0935\u093F\u0915\u0932\u094D\u092A' : ''}`,
							},
						},
						submitRangeButton: { value: '\u0938\u092C\u092E\u093F\u091F \u0915\u0930\u0947\u0902' },
					},
					select: {
						buttonLabel: {
							attributes: {
								'aria-label': (u) =>
									`${u?.label} \u0921\u094D\u0930\u0949\u092A\u0921\u093E\u0909\u0928, ${u?.options?.length} \u0935\u093F\u0915\u0932\u094D\u092A ${
										u?.selectedOptions?.length
											? `, \u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092E\u0947\u0902 \u091A\u092F\u0928\u093F\u0924 \u0935\u093F\u0915\u0932\u094D\u092A ${u?.selectedOptions[0].label} \u0939\u0948`
											: ''
									}`,
							},
						},
					},
					radio: {
						radio: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u0905\u0915\u094D\u0937\u092E' : ''} ${
										u?.checkedState ? '\u091A\u092F\u0928\u093F\u0924' : '\u0905\u091A\u092F\u0928\u093F\u0924'
									} \u0930\u0947\u0921\u093F\u092F\u094B \u092C\u091F\u0928`,
							},
						},
					},
					pagination: {
						previous: {
							attributes: { 'aria-label': '\u092A\u093F\u091B\u0932\u0947 \u092A\u0943\u0937\u094D\u0920 \u092A\u0930 \u091C\u093E\u090F\u0902' },
						},
						next: { attributes: { 'aria-label': '\u0905\u0917\u0932\u0947 \u092A\u0943\u0937\u094D\u0920 \u092A\u0930 \u091C\u093E\u090F\u0902' } },
						first: { attributes: { 'aria-label': '\u092A\u0939\u0932\u0947 \u092A\u0943\u0937\u094D\u0920 \u092A\u0930 \u091C\u093E\u090F\u0902' } },
						last: {
							attributes: {
								'aria-label': (u) =>
									`\u0905\u0902\u0924\u093F\u092E \u092A\u0943\u0937\u094D\u0920 ${u?.pagination?.last?.number} \u092A\u0930 \u091C\u093E\u090F\u0902`,
							},
						},
						page: { attributes: { 'aria-label': (u) => `\u092A\u0943\u0937\u094D\u0920 ${u?.page?.number} \u092A\u0930 \u091C\u093E\u090F\u0902` } },
					},
					paginationInfo: { infoText: { value: ({ pagination: u }) => `${u?.totalResults} \u0909\u0924\u094D\u092A\u093E\u0926` } },
					result: {
						addToCartButtonText: {
							value: '\u0938\u092D\u0940 \u0915\u094B \u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902',
							attributes: {
								'aria-label':
									'\u0938\u092D\u0940 \u0915\u094B \u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902',
							},
						},
						addToCartButtonSuccessText: { value: '\u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E!' },
						quickviewButtonText: {
							value: '\u0924\u094D\u0935\u0930\u093F\u0924 \u0926\u0943\u0936\u094D\u092F',
							attributes: { 'aria-label': '\u0924\u094D\u0935\u0930\u093F\u0924 \u0926\u0943\u0936\u094D\u092F' },
						},
					},
					overlayResult: {
						addToCartButtonText: {
							value: '\u0938\u092D\u0940 \u0915\u094B \u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902',
							attributes: {
								'aria-label':
									'\u0938\u092D\u0940 \u0915\u094B \u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902',
							},
						},
						addToCartButtonSuccessText: { value: '\u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E!' },
					},
					loadMore: {
						loadMoreButton: { attributes: { 'aria-label': '\u0905\u0927\u093F\u0915 \u0932\u094B\u0921 \u0915\u0930\u0947\u0902' } },
						progressText: {
							value: (u) =>
								`\u0906\u092A\u0928\u0947 ${u?.pagination?.totalResults} \u092E\u0947\u0902 \u0938\u0947 ${u?.pagination?.end} \u0909\u0924\u094D\u092A\u093E\u0926 \u0926\u0947\u0916\u0947 \u0939\u0948\u0902`,
						},
					},
					grid: { showMoreText: { value: (u) => `+ ${u?.remainder}` }, showLessText: { value: '\u0915\u092E' } },
					filter: {
						filter: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.label
											? `\u091A\u092F\u0928\u093F\u0924 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 ${u?.label} ${u?.value} \u0939\u091F\u093E\u090F\u0902`
											: u?.value || ''
									}`,
							},
						},
					},
					facetSlider: {
						sliderHandle: {
							attributes: {
								'aria-label': (u) =>
									`${
										u?.facet?.label
									} \u0938\u094D\u0932\u093E\u0907\u0921\u0930 \u0939\u0948\u0902\u0921\u0932, \u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092E\u093E\u0928 ${
										u?.value
									}, ${u?.facet?.range?.low ? `\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u092E\u093E\u0928 ${u?.facet?.range?.low},` : ''} ${
										u?.facet?.range?.high ? `\u0905\u0927\u093F\u0915\u0924\u092E \u092E\u093E\u0928 ${u?.facet?.range?.high}` : ''
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
											? `\u091A\u092F\u0928\u093F\u0924 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0939\u091F\u093E\u090F\u0902 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
											: `${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
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
											? `\u091A\u092F\u0928\u093F\u0924 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0939\u091F\u093E\u090F\u0902 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
											: `${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
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
											? `\u091A\u092F\u0928\u093F\u0924 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0939\u091F\u093E\u090F\u0902 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
											: `${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
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
											? `\u091A\u092F\u0928\u093F\u0924 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0939\u091F\u093E\u090F\u0902 ${
													u?.facet?.label || ''
											  } - ${u?.value?.label}`
											: u?.facet?.label
											? `${u?.facet?.label} - ${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
											: `${u?.value?.label} \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0915\u0930\u0947\u0902`
									}`,
							},
						},
					},
					errorHandler: {
						warningText: { value: '<b>\u091A\u0947\u0924\u093E\u0935\u0928\u0940:&nbsp;</b>' },
						infoText: { value: '<b>\u091C\u093E\u0928\u0915\u093E\u0930\u0940:&nbsp;</b>' },
						errorText: { value: '<b>\u0924\u094D\u0930\u0941\u091F\u093F:&nbsp;</b>' },
						reloadText: { value: '\u092A\u0941\u0928\u0903 \u0932\u094B\u0921 \u0915\u0930\u0947\u0902' },
					},
					checkbox: {
						checkbox: {
							attributes: {
								'aria-label': (u) =>
									`${u?.disabled ? '\u0905\u0915\u094D\u0937\u092E' : ''} ${
										u?.checkedState ? '\u091A\u092F\u0928\u093F\u0924' : '\u0905\u091A\u092F\u0928\u093F\u0924'
									} \u091A\u0947\u0915\u092C\u0949\u0915\u094D\u0938`,
							},
						},
					},
					quantityPicker: {
						quantityInput: { attributes: { 'aria-label': '\u092E\u093E\u0924\u094D\u0930\u093E' } },
						decrementButton: { attributes: { 'aria-label': '\u092E\u093E\u0924\u094D\u0930\u093E \u0918\u091F\u093E\u090F\u0902' } },
						incrementButton: { attributes: { 'aria-label': '\u092E\u093E\u0924\u094D\u0930\u093E \u092C\u0922\u093C\u093E\u090F\u0902' } },
					},
					searchHeader: {
						titleText: {
							value: (u) => `${
								u?.pagination?.totalResults
							} \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u093F\u0916\u093E\u090F \u091C\u093E \u0930\u0939\u0947 \u0939\u0948\u0902
                ${
									u?.search?.query
										? `<span class="ss__search-header__results-query">"${u?.search?.query.string}"</span> \u0915\u0947 \u0932\u093F\u090F`
										: ''
								}`,
							attributes: {
								'aria-label': (u) =>
									`\u0909\u0924\u094D\u092A\u093E\u0926 \u0917\u094D\u0930\u093F\u0921 \u092E\u0947\u0902 \u0905\u092D\u0940 ${u?.pagination?.totalResults} \u0906\u0907\u091F\u092E \u0926\u093F\u0916\u093E\u090F \u091C\u093E \u0930\u0939\u0947 \u0939\u0948\u0902`,
							},
						},
						correctedQueryText: {
							value: (u) =>
								`<em>"${u?.search?.originalQuery?.string}"</em> \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E, \u0907\u0938\u0915\u0947 \u092C\u091C\u093E\u092F <em>"${u?.search?.query?.string}"</em> \u0915\u0947 \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u093F\u0916\u093E\u090F \u091C\u093E \u0930\u0939\u0947 \u0939\u0948\u0902\u0964`,
							attributes: {
								'aria-label': (u) =>
									`${u?.search?.originalQuery?.string} \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E, \u0907\u0938\u0915\u0947 \u092C\u091C\u093E\u092F ${u?.search?.query?.string} \u0915\u0947 \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u093F\u0916\u093E\u090F \u091C\u093E \u0930\u0939\u0947 \u0939\u0948\u0902`,
							},
						},
						noResultsText: {
							value: (u) =>
								`${
									u?.search?.query
										? `<span>
                    <span class="ss__search-header__results-query">"${u?.search?.query?.string}"</span> \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964
                </span>`
										: '<span>\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964</span>'
								}`,
							attributes: {
								'aria-label': (u) =>
									`${u?.search?.query?.string} \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E`,
							},
						},
						didYouMeanText: {
							value: (u) =>
								`\u0915\u094D\u092F\u093E \u0906\u092A\u0915\u093E \u092E\u0924\u0932\u092C <a href=${u?.search?.didYouMean?.url.href}>${u?.search?.didYouMean?.string}</a> \u0925\u093E?`,
						},
						expandedSearchText: {
							value: (u) =>
								`\u0939\u092E\u0947\u0902 "<span class="ss__search-header__results-query">${u?.search?.query?.string}</span>" \u0915\u0947 \u0932\u093F\u090F \u092C\u093F\u0932\u094D\u0915\u0941\u0932 \u0938\u091F\u0940\u0915 \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E, \u0932\u0947\u0915\u093F\u0928 \u092F\u0939\u093E\u0902 \u0915\u0941\u091B \u092E\u093F\u0932\u0924\u093E-\u091C\u0941\u0932\u0924\u093E \u0939\u0948:`,
						},
					},
					noResults: {
						suggestionsTitleText: { value: '\u0938\u0941\u091D\u093E\u0935' },
						suggestionsList: {
							value:
								'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">\u0935\u0930\u094D\u0924\u0928\u0940 \u0915\u0940 \u0924\u094D\u0930\u0941\u091F\u093F\u092F\u094B\u0902 \u0915\u0940 \u091C\u093E\u0902\u091A \u0915\u0930\u0947\u0902\u0964</li><li class="ss__no-results__suggestions__list__option">\u0915\u093F\u0938\u0940 \u092D\u0940 \u0905\u0928\u093E\u0935\u0936\u094D\u092F\u0915 \u0915\u0940\u0935\u0930\u094D\u0921 \u0915\u094B \u0939\u091F\u093E\u090F\u0902 (\u091C\u0948\u0938\u0947: "\u0909\u0924\u094D\u092A\u093E\u0926")\u0964</li><li class="ss__no-results__suggestions__list__option">\u0906\u092A \u091C\u094B \u0916\u094B\u091C \u0930\u0939\u0947 \u0939\u0948\u0902 \u0909\u0938\u0947 \u092C\u0924\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u0928\u094D\u092F \u0936\u092C\u094D\u0926\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902\u0964</li></ul>',
						},
					},
					gallery: {
						gallery: { attributes: { 'aria-label': '\u091B\u0935\u093F \u0917\u0948\u0932\u0930\u0940' } },
						zoomOutButton: { attributes: { 'aria-label': '\u091C\u093C\u0942\u092E \u0906\u0909\u091F \u0915\u0930\u0947\u0902' } },
						zoomInButton: { attributes: { 'aria-label': '\u091C\u093C\u0942\u092E \u0907\u0928 \u0915\u0930\u0947\u0902' } },
						closeButton: { attributes: { 'aria-label': '\u0917\u0948\u0932\u0930\u0940 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902' } },
						prevButton: { attributes: { 'aria-label': '\u092A\u093F\u091B\u0932\u0940 \u091B\u0935\u093F' } },
						nextButton: { attributes: { 'aria-label': '\u0905\u0917\u0932\u0940 \u091B\u0935\u093F' } },
					},
					quickviewLayout: {
						quickview: { attributes: { 'aria-label': '\u0924\u094D\u0935\u0930\u093F\u0924 \u0926\u0943\u0936\u094D\u092F' } },
						closeButton: {
							attributes: {
								'aria-label': '\u0924\u094D\u0935\u0930\u093F\u0924 \u0926\u0943\u0936\u094D\u092F \u092C\u0902\u0926 \u0915\u0930\u0947\u0902',
							},
						},
						addToCartButton: { value: '\u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902' },
						moreInfoButton: { value: '\u0905\u0927\u093F\u0915 \u091C\u093E\u0928\u0915\u093E\u0930\u0940' },
						loadingText: { value: '\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948\u2026' },
					},
				};
				t.d(e, ['hi', 0, l]);
			},
		},
	]);
})();

//# sourceMappingURL=9669.3d2336fa.iframe.bundle.js.map
