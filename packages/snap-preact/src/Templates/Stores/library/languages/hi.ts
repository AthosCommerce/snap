// Hindi (हिन्दी)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const hi: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'ऑटोकम्पलीट बंद करें',
			attributes: {
				'aria-label': 'ऑटोकम्पलीट बंद करें',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>"${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}" के लिए कोई परिणाम नहीं मिला।</p><p>कृपया कोई अन्य खोज आज़माएं।</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`"${data?.controller?.store?.search?.query?.string}" के लिए ${data?.controller?.store?.pagination.totalResults} ${
					data?.controller?.store?.filters.length > 0 ? 'फ़िल्टर किए गए ' : ''
				}परिणाम देखें`,
		},
	},
	'terms.history': {
		title: {
			value: 'इतिहास',
		},
		term: {
			attributes: {
				'aria-label': (data) => `आइटम ${data.index + 1}, कुल ${data.numberOfTerms} में से, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'सुझाव',
		},
		term: {
			attributes: {
				'aria-label': (data) => `आइटम ${data.index + 1}, कुल ${data.numberOfTerms} में से, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'ट्रेंडिंग',
		},
		term: {
			attributes: {
				'aria-label': (data) => `आइटम ${data.index + 1}, कुल ${data.numberOfTerms} में से, ${data.term.value}`,
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
			value: 'फ़िल्टर',
		},
		applyButtonText: {
			value: 'लागू करें',
		},
		clearButtonText: {
			value: 'सभी साफ़ करें',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'खोजें',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'खोज बंद करें',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'खोज साफ़ करें',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'खोज सबमिट करें',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'यह उत्पाद',
		},
		ctaButtonText: {
			value: 'सभी को कार्ट में जोड़ें',
		},
		ctaButtonSuccessText: {
			value: 'बंडल जोड़ा गया!',
		},
		ctaSubtotalTitle: {
			value: (data) => `${data.cartStore.count} आइटम का उप-योग`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'रोकें' : 'चलाएं'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'स्लाइडशो रोकें' : 'स्लाइडशो फिर से शुरू करें'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `स्लाइड समूह ${data.index + 1}, कुल ${data.totalDots} में से, पर जाएं`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `अगली स्लाइड${data.isNextDisabled ? ' (अक्षम)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `पिछली स्लाइड${data.isPrevDisabled ? ' (अक्षम)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `${data.imageAlt} देखने के लिए क्लिक करें` : `${data.imageAlt} ${data.index + 1}, कुल ${data.slidesLength} में से`,
			},
		},
		srInstructions: {
			value: (data) =>
				`स्लाइड्स के बीच नेविगेट करने के लिए ऐरो कुंजियों का उपयोग करें। ऑटो-प्ले रोकने के लिए स्पेस बार दबाएं। पहले या आखिरी स्लाइड समूह पर जाने के लिए Home या End कुंजी दबाएं।${' '}${
					data.touchDragging && 'टच डिवाइस पर, नेविगेट करने के लिए बाएं या दाएं स्वाइप करें।'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'इसके अनुसार क्रमबद्ध करें',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'परिणाम टैब',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} परिणाम` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'प्रति पृष्ठ',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.field} फ़िल्टर ड्रॉपडाउन, वर्तमान में ${data?.selectedFacet?.field === data?.facet?.field ? 'संक्षिप्त' : 'खुला'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' विकल्प' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'वर्तमान फ़िल्टर',
		},
		clearAllLabel: {
			value: 'सभी साफ़ करें',
		},
	},
	facet: {
		showMoreText: {
			value: 'अधिक दिखाएं',
		},
		showLessText: {
			value: 'कम दिखाएं',
		},
		clearAllText: {
			value: 'सभी साफ़ करें',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} फ़िल्टर ड्रॉपडाउन, वर्तमान में ${data?.facet?.collapsed ? 'संक्षिप्त' : 'खुला'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' विकल्प' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'सबमिट करें',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} ड्रॉपडाउन, ${data?.options?.length} विकल्प ${
						data?.selectedOptions?.length ? `, वर्तमान में चयनित विकल्प ${data?.selectedOptions[0].label} है` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'अक्षम' : ''} ${data?.checkedState ? 'चयनित' : 'अचयनित'} रेडियो बटन`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'पिछले पृष्ठ पर जाएं',
			},
		},
		next: {
			attributes: {
				'aria-label': 'अगले पृष्ठ पर जाएं',
			},
		},
		first: {
			attributes: {
				'aria-label': 'पहले पृष्ठ पर जाएं',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `अंतिम पृष्ठ ${data?.pagination?.last?.number} पर जाएं`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `पृष्ठ ${data?.page?.number} पर जाएं`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} उत्पाद`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'सभी को कार्ट में जोड़ें',
		},
		addToCartButtonSuccessText: {
			value: 'जोड़ा गया!',
		},
		quickviewButtonText: {
			value: 'त्वरित दृश्य',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'सभी को कार्ट में जोड़ें',
		},
		addToCartButtonSuccessText: {
			value: 'जोड़ा गया!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'अधिक लोड करें',
			},
		},
		progressText: {
			value: (data) => `आपने ${data?.pagination?.totalResults} में से ${data?.pagination?.end} उत्पाद देखे हैं`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'कम',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `चयनित फ़िल्टर ${data?.label} ${data?.value} हटाएं`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} स्लाइडर हैंडल, वर्तमान मान ${data?.value}, ${
						data?.facet?.range?.low ? `न्यूनतम मान ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `अधिकतम मान ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `चयनित फ़िल्टर हटाएं ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} के अनुसार फ़िल्टर करें`
							: `${data?.value?.label} के अनुसार फ़िल्टर करें`
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
							? `चयनित फ़िल्टर हटाएं ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} के अनुसार फ़िल्टर करें`
							: `${data?.value?.label} के अनुसार फ़िल्टर करें`
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
							? `चयनित फ़िल्टर हटाएं ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} के अनुसार फ़िल्टर करें`
							: `${data?.value?.label} के अनुसार फ़िल्टर करें`
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
							? `चयनित फ़िल्टर हटाएं ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} के अनुसार फ़िल्टर करें`
							: `${data?.value?.label} के अनुसार फ़िल्टर करें`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>चेतावनी:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>जानकारी:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>त्रुटि:&nbsp;</b>`,
		},
		reloadText: {
			value: `पुनः लोड करें`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? 'अक्षम' : ''} ${data?.checkedState ? 'चयनित' : 'अचयनित'} चेकबॉक्स`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'मात्रा',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'मात्रा घटाएं',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'मात्रा बढ़ाएं',
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
				return `${data?.pagination?.totalResults} परिणाम दिखाए जा रहे हैं
                ${data?.search?.query ? `<span class="ss__search-header__results-query">"${data?.search?.query.string}"</span> के लिए` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `उत्पाद ग्रिड में अभी ${data?.pagination?.totalResults} आइटम दिखाए जा रहे हैं`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `<em>"${data?.search?.originalQuery?.string}"</em> के लिए कोई परिणाम नहीं मिला, इसके बजाय <em>"${data?.search?.query?.string}"</em> के परिणाम दिखाए जा रहे हैं।`;
			},
			attributes: {
				'aria-label': (data) =>
					`${data?.search?.originalQuery?.string} के लिए कोई परिणाम नहीं मिला, इसके बजाय ${data?.search?.query?.string} के परिणाम दिखाए जा रहे हैं`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span> के लिए कोई परिणाम नहीं मिला।
                </span>`
						: `<span>कोई परिणाम नहीं मिला।</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `${data?.search?.query?.string} के लिए कोई परिणाम नहीं मिला`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `क्या आपका मतलब <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a> था?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `हमें "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>" के लिए बिल्कुल सटीक मेल नहीं मिला, लेकिन यहां कुछ मिलता-जुलता है:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `सुझाव`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">वर्तनी की त्रुटियों की जांच करें।</li><li class="ss__no-results__suggestions__list__option">किसी भी अनावश्यक कीवर्ड को हटाएं (जैसे: "उत्पाद")।</li><li class="ss__no-results__suggestions__list__option">आप जो खोज रहे हैं उसे बताने के लिए अन्य शब्दों का उपयोग करें।</li></ul>',
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
				'aria-label': 'छवि गैलरी',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'ज़ूम आउट करें',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'ज़ूम इन करें',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'गैलरी बंद करें',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'पिछली छवि',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'अगली छवि',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'त्वरित दृश्य',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'त्वरित दृश्य बंद करें',
			},
		},
		addToCartButton: {
			value: 'कार्ट में जोड़ें',
		},
		moreInfoButton: {
			value: 'अधिक जानकारी',
		},
		loadingText: {
			value: 'लोड हो रहा है…',
		},
	},
};
