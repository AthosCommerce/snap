// Arabic (العربية)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const ar: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'إغلاق الإكمال التلقائي',
			attributes: {
				'aria-label': 'إغلاق الإكمال التلقائي',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>لم يتم العثور على نتائج لـ "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>يرجى تجربة بحث آخر.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`عرض ${data?.controller?.store?.pagination.totalResults} نتيجة${data?.controller?.store?.filters.length > 0 ? ' مُصفّاة' : ''} لـ "${
					data?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'السجل',
		},
		term: {
			attributes: {
				'aria-label': (data) => `العنصر ${data.index + 1} من ${data.numberOfTerms}، ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'اقتراحات',
		},
		term: {
			attributes: {
				'aria-label': (data) => `العنصر ${data.index + 1} من ${data.numberOfTerms}، ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'الأكثر رواجاً',
		},
		term: {
			attributes: {
				'aria-label': (data) => `العنصر ${data.index + 1} من ${data.numberOfTerms}، ${data.term.value}`,
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
			value: 'الفلاتر',
		},
		applyButtonText: {
			value: 'تطبيق',
		},
		clearButtonText: {
			value: 'مسح الكل',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'بحث',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'إغلاق البحث',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'مسح البحث',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'إرسال البحث',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'هذا المنتج',
		},
		ctaButtonText: {
			value: 'إضافة الكل إلى السلة',
		},
		ctaButtonSuccessText: {
			value: 'تمت إضافة الحزمة!',
		},
		ctaSubtotalTitle: {
			value: (data) => `المجموع الفرعي لـ ${data.cartStore.count} عناصر`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'إيقاف مؤقت' : 'تشغيل'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'إيقاف عرض الشرائح مؤقتاً' : 'استئناف عرض الشرائح'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `الانتقال إلى مجموعة الشرائح ${data.index + 1} من ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `الشرائح التالية${data.isNextDisabled ? ' (معطّل)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `الشرائح السابقة${data.isPrevDisabled ? ' (معطّل)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) => (data.hasClickHandler ? `انقر لعرض ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} من ${data.slidesLength}`),
			},
		},
		srInstructions: {
			value: (data) =>
				`استخدم مفاتيح الأسهم للتنقل بين الشرائح. اضغط على شريط المسافة لإيقاف التشغيل التلقائي مؤقتاً. اضغط على مفتاح Home أو End للانتقال إلى مجموعة الشرائح الأولى أو الأخيرة.${' '}${
					data.touchDragging && 'على الأجهزة اللمسية، اسحب لليمين أو لليسار للتنقل.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'ترتيب حسب',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'علامات تبويب النتائج',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `، ${data.resultCount} نتائج` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'لكل صفحة',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`القائمة المنسدلة لفلتر ${data?.facet?.field} حالياً ${data?.selectedFacet?.field === data?.facet?.field ? 'مطوية' : 'مفتوحة'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' خيار' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'الفلاتر الحالية',
		},
		clearAllLabel: {
			value: 'مسح الكل',
		},
	},
	facet: {
		showMoreText: {
			value: 'عرض المزيد',
		},
		showLessText: {
			value: 'عرض أقل',
		},
		clearAllText: {
			value: 'مسح الكل',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`القائمة المنسدلة لفلتر ${data?.facet?.label} حالياً ${data?.facet?.collapsed ? 'مطوية' : 'مفتوحة'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' خيار' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'إرسال',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`القائمة المنسدلة ${data?.label}، ${data?.options?.length} خيار ${
						data?.selectedOptions?.length ? `، الخيار المحدد حالياً هو ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `زر راديو ${data?.disabled ? 'معطّل' : ''} ${data?.checkedState ? 'محدد' : 'غير محدد'}`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'الانتقال إلى الصفحة السابقة',
			},
		},
		next: {
			attributes: {
				'aria-label': 'الانتقال إلى الصفحة التالية',
			},
		},
		first: {
			attributes: {
				'aria-label': 'الانتقال إلى الصفحة الأولى',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `الانتقال إلى الصفحة الأخيرة ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `الانتقال إلى الصفحة ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} منتج`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'إضافة الكل إلى السلة',
		},
		addToCartButtonSuccessText: {
			value: 'تمت الإضافة!',
		},
		quickviewButtonText: {
			value: 'عرض سريع',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'إضافة الكل إلى السلة',
		},
		addToCartButtonSuccessText: {
			value: 'تمت الإضافة!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'تحميل المزيد',
			},
		},
		progressText: {
			value: (data) => `لقد شاهدت ${data?.pagination?.end} من ${data?.pagination?.totalResults} منتج`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'أقل',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `إزالة الفلتر المحدد ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`مقبض شريط تمرير ${data?.facet?.label}، القيمة الحالية ${data?.value}، ${
						data?.facet?.range?.low ? `القيمة الدنيا ${data?.facet?.range?.low}،` : ``
					} ${data?.facet?.range?.high ? `القيمة القصوى ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `إزالة الفلتر المحدد ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `تصفية حسب ${data?.facet?.label} - ${data?.value?.label}`
							: `تصفية حسب ${data?.value?.label}`
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
							? `إزالة الفلتر المحدد ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `تصفية حسب ${data?.facet?.label} - ${data?.value?.label}`
							: `تصفية حسب ${data?.value?.label}`
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
							? `إزالة الفلتر المحدد ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `تصفية حسب ${data?.facet?.label} - ${data?.value?.label}`
							: `تصفية حسب ${data?.value?.label}`
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
							? `إزالة الفلتر المحدد ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `تصفية حسب ${data?.facet?.label} - ${data?.value?.label}`
							: `تصفية حسب ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>تحذير:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>معلومات:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>خطأ:&nbsp;</b>`,
		},
		reloadText: {
			value: `إعادة التحميل`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `مربع اختيار ${data?.disabled ? 'معطّل' : ''} ${data?.checkedState ? 'محدد' : 'غير محدد'}`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'الكمية',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'إنقاص الكمية',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'زيادة الكمية',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `عرض ${data?.pagination?.totalResults} نتيجة
                ${data?.search?.query ? `لـ <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `يتم الآن عرض ${data?.pagination?.totalResults} عنصر في شبكة المنتجات`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `لم يتم العثور على نتائج لـ <em>"${data?.search?.originalQuery?.string}"</em>، وتُعرض بدلاً منها نتائج <em>"${data?.search?.query?.string}"</em>.`;
			},
			attributes: {
				'aria-label': (data) =>
					`لم يتم العثور على نتائج لـ ${data?.search?.originalQuery?.string}، وتُعرض بدلاً منها نتائج ${data?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    لم يتم العثور على نتائج لـ <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>لم يتم العثور على نتائج.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `لم يتم العثور على نتائج لـ ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `هل تقصد <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>؟`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `لم نتمكن من العثور على تطابق تام لـ "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>"، ولكن إليك شيء مشابه:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `اقتراحات`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">تحقق من الأخطاء الإملائية.</li><li class="ss__no-results__suggestions__list__option">احذف أي كلمات مفتاحية زائدة (مثل: "منتجات").</li><li class="ss__no-results__suggestions__list__option">استخدم كلمات أخرى لوصف ما تبحث عنه.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'معرض الصور',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'تصغير',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'تكبير',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'إغلاق المعرض',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'الصورة السابقة',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'الصورة التالية',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'عرض سريع',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'إغلاق العرض السريع',
			},
		},
		addToCartButton: {
			value: 'إضافة إلى السلة',
		},
		moreInfoButton: {
			value: 'مزيد من المعلومات',
		},
		loadingText: {
			value: 'جارٍ التحميل…',
		},
	},
};
