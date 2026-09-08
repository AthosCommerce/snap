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
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'चैट खोलें',
				title: 'चैट खोलें',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'चैट बंद करें',
				title: 'चैट बंद करें',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'चैट खोलें',
				title: 'चैट खोलें',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'चैट बंद करें',
				title: 'चैट बंद करें',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'नई चैट',
				title: 'नई चैट',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'चैट इतिहास',
				title: 'चैट इतिहास',
			},
		},
		historyTitle: {
			value: 'इतिहास',
		},
		historyClearButton: {
			value: 'साफ़ करें',
		},
		historyNewChatLabel: {
			value: 'नई चैट',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'बातचीत का विवरण',
			},
		},
		inspirationResultTitle: {
			value: 'प्रेरणा परिदृश्य',
		},
		inspirationResultSubtitle: {
			value: 'एक्सप्लोर करने के लिए कोई स्टाइल दिशा चुनें',
		},
		productComparisonTitle: {
			value: 'उत्पाद तुलना',
		},
		productComparisonSubtitle: {
			value: (data) => `${data?.count ?? ''} उत्पादों की तुलना की जा रही है`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'चैट संदेश',
			},
		},
		newMessagesButton: {
			value: 'नए संदेश',
		},
		loadingVerbsProductQuery: {
			value: 'सोच रहे हैं, खोज रहे हैं, विश्लेषण कर रहे हैं, विवरण जुटा रहे हैं',
		},
		loadingVerbsProductSearch: {
			value: 'खोज रहे हैं, कैटलॉग देख रहे हैं, उत्पाद ढूंढ रहे हैं, परिणाम चुन रहे हैं',
		},
		loadingVerbsProductComparison: {
			value: 'तुलना कर रहे हैं, विश्लेषण कर रहे हैं, मूल्यांकन कर रहे हैं, विकल्पों को तौल रहे हैं',
		},
		loadingVerbsImageSearch: {
			value: 'छवि का विश्लेषण कर रहे हैं, पहचान रहे हैं, खोज रहे हैं, मेल ढूंढ रहे हैं',
		},
		loadingVerbsProductSimilar: {
			value: 'समान उत्पाद ढूंढ रहे हैं, खोज रहे हैं, मेल ढूंढ रहे हैं, चुन रहे हैं',
		},
		loadingVerbsInspirationRequest: {
			value: 'विचार बना रहे हैं, कल्पना कर रहे हैं, चुन रहे हैं, प्रेरित कर रहे हैं',
		},
		feedbackPrompt: {
			value: 'अब तक आपका अनुभव कैसा रहा?',
		},
		feedbackThanks: {
			value: 'आपकी प्रतिक्रिया के लिए धन्यवाद',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'पसंद आया',
				title: 'पसंद आया',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'पसंद नहीं आया',
				title: 'पसंद नहीं आया',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'प्रतिक्रिया खारिज करें',
			},
		},
		comparisonsTitle: {
			value: (data) => `उत्पादों की तुलना करें (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'साफ़ करें',
		},
		comparisonsAddText: {
			value: 'जोड़ें',
		},
		comparisonsCompareButton: {
			value: 'तुलना करें',
			attributes: {
				title: 'तुलना करें',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `${data?.name || 'उत्पाद'} को तुलना से हटाएं`,
			},
		},
		chatUnavailableMessage: {
			value: 'सेवा अस्थायी रूप से उपलब्ध नहीं है। इस बीच, अपनी ज़रूरत की चीज़ ढूंढने के लिए ऊपर दिए गए खोज बार का उपयोग करें!',
		},
		highVolumeMessage: {
			value: 'बहुत अधिक अनुरोधों के कारण चैट अभी उपलब्ध नहीं है।',
		},
		highVolumeSubMessage: {
			value: 'इस बीच, अपनी ज़रूरत की चीज़ ढूंढने के लिए ऊपर दिए गए खोज बार का उपयोग करें!',
		},
		newSessionButton: {
			value: 'नया सत्र',
		},
		facetsTitle: {
			value: 'फ़िल्टर करें:',
		},
		facetsApplyButton: {
			value: (data) => `लागू करें (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'फ़िल्टर साफ़ करें',
		},
		attachmentCompareTitle: {
			value: 'इन उत्पादों की तुलना करें',
		},
		attachmentAskProductTitle: {
			value: 'इस उत्पाद के बारे में पूछें',
		},
		attachmentImageSimilarTitle: {
			value: 'इस छवि से मिलते-जुलते उत्पाद खोजें:',
		},
		topicDriftScopeMessage: {
			value: 'मैं आपकी खरीदारी में मदद के लिए यहां हूं',
		},
		topicDriftScopeSubMessage: {
			value: 'उत्पादों, तुलनाओं या सिफ़ारिशों के बारे में पूछकर देखें',
		},
		topicDriftMessage: {
			value: 'कुछ नया खोज रहे हैं?',
		},
		topicDriftSubMessage: {
			value: 'बेहतर सहायता के लिए नया सत्र शुरू करें या इसी सत्र में जारी रखें?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'खारिज करें',
			},
		},
		inputPlaceholder: {
			value: 'अपना संदेश लिखें...',
		},
		inputPlaceholderAskProduct: {
			value: 'इस उत्पाद के बारे में पूछें...',
		},
		inputPlaceholderCompare: {
			value: 'आप किसकी तुलना करना चाहेंगे?',
		},
		inputPlaceholderComparedProducts: {
			value: 'तुलना किए गए उत्पादों के बारे में पूछें...',
		},
		inputPlaceholderAskImage: {
			value: 'इस छवि के बारे में पूछें...',
		},
		inputPlaceholderAddCompare: {
			value: 'तुलना के लिए एक और उत्पाद जोड़ें...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'छवि अपलोड करें',
				title: 'छवि अपलोड करें',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'संदेश भेजें',
				title: 'संदेश भेजें',
			},
		},
		dropOverlayText: {
			value: 'अपलोड करने के लिए छवि यहां छोड़ें',
		},
		disclaimerText: {
			value: 'AI-संचालित सहायक। कभी-कभी गलतियां कर सकता है। व्यक्तिगत जानकारी साझा करने से बचें।',
		},
		privacyPolicyLinkText: {
			value: 'गोपनीयता नीति',
		},
		expiredMessage: {
			value: 'यह चैट समाप्त हो गई है। कृपया नई चैट शुरू करें।',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'सोच रहे हैं',
		},
		searchingVerb: {
			value: 'खोज रहे हैं',
		},
		analyzingVerb: {
			value: 'विश्लेषण कर रहे हैं',
		},
		generatingVerb: {
			value: 'बना रहे हैं',
		},
		processingVerb: {
			value: 'प्रोसेस कर रहे हैं',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'बंद करें',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': 'आइटम खोलें',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': 'आइटम लोड हो रहा है',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': 'आइटम हटाएं',
			},
		},
		uploadFailedText: {
			value: 'फ़ाइल अपलोड नहीं हो सकी',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'इस शब्द को खोजें',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'उत्पाद खोलें',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'प्रेरणा देखें',
				title: 'प्रेरणा देखें',
			},
		},
		closeInspirationButton: {
			value: 'प्रेरणा बंद करें',
			attributes: {
				'aria-label': 'प्रेरणा बंद करें',
				title: 'प्रेरणा बंद करें',
			},
		},
		exploreInspirationButton: {
			value: 'प्रेरणा परिदृश्य एक्सप्लोर करें',
			attributes: {
				'aria-label': 'प्रेरणा परिदृश्य एक्सप्लोर करें',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'तुलना देखें',
				title: 'तुलना देखें',
			},
		},
		closeComparisonButton: {
			value: 'तुलना बंद करें',
			attributes: {
				'aria-label': 'तुलना बंद करें',
				title: 'तुलना बंद करें',
			},
		},
		exploreComparisonButton: {
			value: 'तुलना डेटा एक्सप्लोर करें',
			attributes: {
				'aria-label': 'तुलना डेटा एक्सप्लोर करें',
			},
		},
		showDetailsButton: {
			value: 'विवरण दिखाएं',
			attributes: {
				'aria-label': 'तुलना का विवरण दिखाएं',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'उत्पाद के बारे में पूछ रहे हैं',
		},
		requestTypeProductComparison: {
			value: 'उत्पादों की तुलना कर रहे हैं',
		},
		requestTypeProductFilter: {
			value: 'उत्पाद फ़िल्टर कर रहे हैं',
		},
		requestTypeProductSearch: {
			value: 'उत्पाद खोज रहे हैं',
		},
		requestTypeImageSearch: {
			value: 'छवि से खोज रहे हैं',
		},
		requestTypeProductSimilar: {
			value: 'समान उत्पाद खोज रहे हैं',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'उत्पाद विवरण देखें',
				title: 'उत्पाद विवरण देखें',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': 'लागू फ़िल्टर',
				title: 'लागू फ़िल्टर',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': 'अतिरिक्त फ़िल्टर',
				title: 'अतिरिक्त फ़िल्टर',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'उत्पाद तुलना',
			attributes: {
				'aria-label': 'उत्पाद तुलना',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'विशेषता',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'उत्पाद विवरण देखें',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'उत्पाद विवरण लोड हो रहा है...',
		},
		backToComparisonButton: {
			value: 'तुलना पर वापस जाएं',
			attributes: {
				'aria-label': 'तुलना पर वापस जाएं',
			},
		},
		backToInspirationButton: {
			value: 'प्रेरणा पर वापस जाएं',
			attributes: {
				'aria-label': 'प्रेरणा पर वापस जाएं',
			},
		},
		addToCartButton: {
			value: 'कार्ट में जोड़ें',
		},
		moreInfoButton: {
			value: 'अधिक जानकारी',
		},
		similarButton: {
			value: 'समान',
		},
		discussButton: {
			value: 'चर्चा करें',
		},
	},
	chatResult: {
		similarButton: {
			value: 'समान',
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} के समान दिखाएं`,
			},
		},
		compareButton: {
			value: 'तुलना करें',
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} की तुलना करें`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} तुलना में जोड़ा गया`,
				title: 'तुलना में जोड़ा गया',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} पर चर्चा करें`,
				title: 'उत्पाद पर चर्चा करें',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} को कार्ट में जोड़ें`,
				title: 'कार्ट में जोड़ें',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} कॉन्फ़िगर करें`,
				title: 'कॉन्फ़िगर करें',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || 'उत्पाद'} खोलें`,
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
			attributes: {
				'aria-label': 'सभी को कार्ट में जोड़ें',
			},
		},
		addToCartButtonSuccessText: {
			value: 'जोड़ा गया!',
		},
		quickviewButtonText: {
			value: 'त्वरित दृश्य',
			attributes: {
				'aria-label': 'त्वरित दृश्य',
			},
		},
		discussProductButton: {
			attributes: {
				'aria-label': 'इस उत्पाद पर चर्चा करें',
				title: 'इस उत्पाद पर चर्चा करें',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'सभी को कार्ट में जोड़ें',
			attributes: {
				'aria-label': 'सभी को कार्ट में जोड़ें',
			},
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
		similarButton: {
			value: 'समान',
		},
		discussButton: {
			value: 'चर्चा करें',
		},
		loadingText: {
			value: 'लोड हो रहा है…',
		},
	},
};
