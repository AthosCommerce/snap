const t = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'ऑटोकम्पलीट बंद करें', attributes: { 'aria-label': 'ऑटोकम्पलीट बंद करें' } },
		noResultsText: {
			value: (e) =>
				`<p>"${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}" के लिए कोई परिणाम नहीं मिला।</p><p>कृपया कोई अन्य खोज आज़माएं।</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`"${e?.controller?.store?.search?.query?.string}" के लिए ${e?.controller?.store?.pagination.totalResults} ${
					e?.controller?.store?.filters.length > 0 ? 'फ़िल्टर किए गए ' : ''
				}परिणाम देखें`,
		},
	},
	'terms.history': {
		title: { value: 'इतिहास' },
		term: { attributes: { 'aria-label': (e) => `आइटम ${e.index + 1}, कुल ${e.numberOfTerms} में से, ${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'सुझाव' },
		term: { attributes: { 'aria-label': (e) => `आइटम ${e.index + 1}, कुल ${e.numberOfTerms} में से, ${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'ट्रेंडिंग' },
		term: { attributes: { 'aria-label': (e) => `आइटम ${e.index + 1}, कुल ${e.numberOfTerms} में से, ${e.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: {
		titleText: { value: 'फ़िल्टर' },
		applyButtonText: { value: 'लागू करें' },
		clearButtonText: { value: 'सभी साफ़ करें' },
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: { attributes: { placeholder: 'खोजें' } },
		closeSearchButton: { attributes: { 'aria-label': 'खोज बंद करें' } },
		clearSearchButton: { attributes: { 'aria-label': 'खोज साफ़ करें' } },
		submitSearchButton: { attributes: { 'aria-label': 'खोज सबमिट करें' } },
	},
	recommendationBundle: {
		seedText: { value: 'यह उत्पाद' },
		ctaButtonText: { value: 'सभी को कार्ट में जोड़ें' },
		ctaButtonSuccessText: { value: 'बंडल जोड़ा गया!' },
		ctaSubtotalTitle: { value: (e) => `${e.cartStore.count} आइटम का उप-योग` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? 'रोकें' : 'चलाएं'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'स्लाइडशो रोकें' : 'स्लाइडशो फिर से शुरू करें') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `स्लाइड समूह ${e.index + 1}, कुल ${e.totalDots} में से, पर जाएं` } },
		nextButton: { attributes: { 'aria-label': (e) => `अगली स्लाइड${e.isNextDisabled ? ' (अक्षम)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `पिछली स्लाइड${e.isPrevDisabled ? ' (अक्षम)' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) =>
					e.hasClickHandler ? `${e.imageAlt} देखने के लिए क्लिक करें` : `${e.imageAlt} ${e.index + 1}, कुल ${e.slidesLength} में से`,
			},
		},
		srInstructions: {
			value: (e) =>
				`स्लाइड्स के बीच नेविगेट करने के लिए ऐरो कुंजियों का उपयोग करें। ऑटो-प्ले रोकने के लिए स्पेस बार दबाएं। पहले या आखिरी स्लाइड समूह पर जाने के लिए Home या End कुंजी दबाएं। ${
					e.touchDragging && 'टच डिवाइस पर, नेविगेट करने के लिए बाएं या दाएं स्वाइप करें।'
				}`,
		},
	},
	sortBy: { label: { value: 'इसके अनुसार क्रमबद्ध करें' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'परिणाम टैब' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `, ${e.resultCount} परिणाम` : ''}` },
		},
	},
	perPage: { label: { value: 'प्रति पृष्ठ' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.field} फ़िल्टर ड्रॉपडाउन, वर्तमान में ${e?.selectedFacet?.field === e?.facet?.field ? 'संक्षिप्त' : 'खुला'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' विकल्प' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'वर्तमान फ़िल्टर' },
		clearAllLabel: { value: 'सभी साफ़ करें', attributes: { 'aria-label': 'सभी साफ़ करें' } },
		noFiltersText: { value: 'कोई फ़िल्टर लागू नहीं है' },
	},
	facet: {
		showMoreText: { value: 'अधिक दिखाएं' },
		showLessText: { value: 'कम दिखाएं' },
		clearAllText: { value: 'सभी साफ़ करें' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label} फ़िल्टर ड्रॉपडाउन, वर्तमान में ${e?.facet?.collapsed ? 'संक्षिप्त' : 'खुला'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' विकल्प' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'सबमिट करें' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`${e?.label} ड्रॉपडाउन, ${e?.options?.length} विकल्प ${
						e?.selectedOptions?.length ? `, वर्तमान में चयनित विकल्प ${e?.selectedOptions[0].label} है` : ''
					}`,
			},
		},
	},
	radio: { radio: { attributes: { 'aria-label': (e) => `${e?.disabled ? 'अक्षम' : ''} ${e?.checkedState ? 'चयनित' : 'अचयनित'} रेडियो बटन` } } },
	pagination: {
		previous: { attributes: { 'aria-label': 'पिछले पृष्ठ पर जाएं' } },
		next: { attributes: { 'aria-label': 'अगले पृष्ठ पर जाएं' } },
		first: { attributes: { 'aria-label': 'पहले पृष्ठ पर जाएं' } },
		last: { attributes: { 'aria-label': (e) => `अंतिम पृष्ठ ${e?.pagination?.last?.number} पर जाएं` } },
		page: { attributes: { 'aria-label': (e) => `पृष्ठ ${e?.page?.number} पर जाएं` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} उत्पाद` } },
	result: {
		addToCartButtonText: { value: 'सभी को कार्ट में जोड़ें', attributes: { 'aria-label': 'सभी को कार्ट में जोड़ें' } },
		addToCartButtonSuccessText: { value: 'जोड़ा गया!' },
		quickviewButtonText: { value: 'त्वरित दृश्य', attributes: { 'aria-label': 'त्वरित दृश्य' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'सभी को कार्ट में जोड़ें', attributes: { 'aria-label': 'सभी को कार्ट में जोड़ें' } },
		addToCartButtonSuccessText: { value: 'जोड़ा गया!' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'अधिक लोड करें' } },
		progressText: { value: (e) => `आपने ${e?.pagination?.totalResults} में से ${e?.pagination?.end} उत्पाद देखे हैं` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'कम' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `चयनित फ़िल्टर ${e?.label} ${e?.value} हटाएं` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label} स्लाइडर हैंडल, वर्तमान मान ${e?.value}, ${e?.facet?.range?.low ? `न्यूनतम मान ${e?.facet?.range?.low},` : ''} ${
						e?.facet?.range?.high ? `अधिकतम मान ${e?.facet?.range?.high}` : ''
					}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (e) =>
					`${
						e?.value?.filtered
							? `चयनित फ़िल्टर हटाएं ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} के अनुसार फ़िल्टर करें`
							: `${e?.value?.label} के अनुसार फ़िल्टर करें`
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
							? `चयनित फ़िल्टर हटाएं ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} के अनुसार फ़िल्टर करें`
							: `${e?.value?.label} के अनुसार फ़िल्टर करें`
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
							? `चयनित फ़िल्टर हटाएं ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} के अनुसार फ़िल्टर करें`
							: `${e?.value?.label} के अनुसार फ़िल्टर करें`
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
							? `चयनित फ़िल्टर हटाएं ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} के अनुसार फ़िल्टर करें`
							: `${e?.value?.label} के अनुसार फ़िल्टर करें`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>चेतावनी:&nbsp;</b>' },
		infoText: { value: '<b>जानकारी:&nbsp;</b>' },
		errorText: { value: '<b>त्रुटि:&nbsp;</b>' },
		reloadText: { value: 'पुनः लोड करें' },
	},
	checkbox: { checkbox: { attributes: { 'aria-label': (e) => `${e?.disabled ? 'अक्षम' : ''} ${e?.checkedState ? 'चयनित' : 'अचयनित'} चेकबॉक्स` } } },
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'मात्रा' } },
		decrementButton: { attributes: { 'aria-label': 'मात्रा घटाएं' } },
		incrementButton: { attributes: { 'aria-label': 'मात्रा बढ़ाएं' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `${e?.pagination?.totalResults} परिणाम दिखाए जा रहे हैं
                ${e?.search?.query ? `<span class="ss__search-header__results-query">"${e?.search?.query.string}"</span> के लिए` : ''}`,
			attributes: { 'aria-label': (e) => `उत्पाद ग्रिड में अभी ${e?.pagination?.totalResults} आइटम दिखाए जा रहे हैं` },
		},
		correctedQueryText: {
			value: (e) =>
				`<em>"${e?.search?.originalQuery?.string}"</em> के लिए कोई परिणाम नहीं मिला, इसके बजाय <em>"${e?.search?.query?.string}"</em> के परिणाम दिखाए जा रहे हैं।`,
			attributes: {
				'aria-label': (e) =>
					`${e?.search?.originalQuery?.string} के लिए कोई परिणाम नहीं मिला, इसके बजाय ${e?.search?.query?.string} के परिणाम दिखाए जा रहे हैं`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> के लिए कोई परिणाम नहीं मिला।
                </span>`
						: '<span>कोई परिणाम नहीं मिला।</span>'
				}`,
			attributes: { 'aria-label': (e) => `${e?.search?.query?.string} के लिए कोई परिणाम नहीं मिला` },
		},
		didYouMeanText: { value: (e) => `क्या आपका मतलब <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a> था?` },
		expandedSearchText: {
			value: (e) =>
				`हमें "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>" के लिए बिल्कुल सटीक मेल नहीं मिला, लेकिन यहां कुछ मिलता-जुलता है:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'सुझाव' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">वर्तनी की त्रुटियों की जांच करें।</li><li class="ss__no-results__suggestions__list__option">किसी भी अनावश्यक कीवर्ड को हटाएं (जैसे: "उत्पाद")।</li><li class="ss__no-results__suggestions__list__option">आप जो खोज रहे हैं उसे बताने के लिए अन्य शब्दों का उपयोग करें।</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'छवि गैलरी' } },
		zoomOutButton: { attributes: { 'aria-label': 'ज़ूम आउट करें' } },
		zoomInButton: { attributes: { 'aria-label': 'ज़ूम इन करें' } },
		closeButton: { attributes: { 'aria-label': 'गैलरी बंद करें' } },
		prevButton: { attributes: { 'aria-label': 'पिछली छवि' } },
		nextButton: { attributes: { 'aria-label': 'अगली छवि' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'त्वरित दृश्य' } },
		closeButton: { attributes: { 'aria-label': 'त्वरित दृश्य बंद करें' } },
		addToCartButton: { value: 'कार्ट में जोड़ें' },
		moreInfoButton: { value: 'अधिक जानकारी' },
		loadingText: { value: 'लोड हो रहा है…' },
	},
};
export { t as hi };
