const t = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'إغلاق الإكمال التلقائي', attributes: { 'aria-label': 'إغلاق الإكمال التلقائي' } },
		noResultsText: {
			value: (e) =>
				`<p>لم يتم العثور على نتائج لـ "${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}".</p><p>يرجى تجربة بحث آخر.</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`عرض ${e?.controller?.store?.pagination.totalResults} نتيجة${e?.controller?.store?.filters.length > 0 ? ' مُصفّاة' : ''} لـ "${
					e?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: { value: 'السجل' },
		term: { attributes: { 'aria-label': (e) => `العنصر ${e.index + 1} من ${e.numberOfTerms}، ${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'اقتراحات' },
		term: { attributes: { 'aria-label': (e) => `العنصر ${e.index + 1} من ${e.numberOfTerms}، ${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'الأكثر رواجاً' },
		term: { attributes: { 'aria-label': (e) => `العنصر ${e.index + 1} من ${e.numberOfTerms}، ${e.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: { titleText: { value: 'الفلاتر' }, applyButtonText: { value: 'تطبيق' }, clearButtonText: { value: 'مسح الكل' }, closeButtonText: {} },
	searchInput: {
		placeholderText: { attributes: { placeholder: 'بحث' } },
		closeSearchButton: { attributes: { 'aria-label': 'إغلاق البحث' } },
		clearSearchButton: { attributes: { 'aria-label': 'مسح البحث' } },
		submitSearchButton: { attributes: { 'aria-label': 'إرسال البحث' } },
	},
	recommendationBundle: {
		seedText: { value: 'هذا المنتج' },
		ctaButtonText: { value: 'إضافة الكل إلى السلة' },
		ctaButtonSuccessText: { value: 'تمت إضافة الحزمة!' },
		ctaSubtotalTitle: { value: (e) => `المجموع الفرعي لـ ${e.cartStore.count} عناصر` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? 'إيقاف مؤقت' : 'تشغيل'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'إيقاف عرض الشرائح مؤقتاً' : 'استئناف عرض الشرائح') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `الانتقال إلى مجموعة الشرائح ${e.index + 1} من ${e.totalDots}` } },
		nextButton: { attributes: { 'aria-label': (e) => `الشرائح التالية${e.isNextDisabled ? ' (معطّل)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `الشرائح السابقة${e.isPrevDisabled ? ' (معطّل)' : ''}` } },
		slide: {
			attributes: { 'aria-label': (e) => (e.hasClickHandler ? `انقر لعرض ${e.imageAlt}` : `${e.imageAlt} ${e.index + 1} من ${e.slidesLength}`) },
		},
		srInstructions: {
			value: (e) =>
				`استخدم مفاتيح الأسهم للتنقل بين الشرائح. اضغط على شريط المسافة لإيقاف التشغيل التلقائي مؤقتاً. اضغط على مفتاح Home أو End للانتقال إلى مجموعة الشرائح الأولى أو الأخيرة. ${
					e.touchDragging && 'على الأجهزة اللمسية، اسحب لليمين أو لليسار للتنقل.'
				}`,
		},
	},
	sortBy: { label: { value: 'ترتيب حسب' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'علامات تبويب النتائج' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `، ${e.resultCount} نتائج` : ''}` },
		},
	},
	perPage: { label: { value: 'لكل صفحة' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`القائمة المنسدلة لفلتر ${e?.facet?.field} حالياً ${e?.selectedFacet?.field === e?.facet?.field ? 'مطوية' : 'مفتوحة'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' خيار' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'الفلاتر الحالية' },
		clearAllLabel: { value: 'مسح الكل', attributes: { 'aria-label': 'مسح الكل' } },
		noFiltersText: { value: 'لم يتم تطبيق أي فلاتر' },
	},
	facet: {
		showMoreText: { value: 'عرض المزيد' },
		showLessText: { value: 'عرض أقل' },
		clearAllText: { value: 'مسح الكل' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`القائمة المنسدلة لفلتر ${e?.facet?.label} حالياً ${e?.facet?.collapsed ? 'مطوية' : 'مفتوحة'} ${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' خيار' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'إرسال' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`القائمة المنسدلة ${e?.label}، ${e?.options?.length} خيار ${
						e?.selectedOptions?.length ? `، الخيار المحدد حالياً هو ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: { radio: { attributes: { 'aria-label': (e) => `زر راديو ${e?.disabled ? 'معطّل' : ''} ${e?.checkedState ? 'محدد' : 'غير محدد'}` } } },
	pagination: {
		previous: { attributes: { 'aria-label': 'الانتقال إلى الصفحة السابقة' } },
		next: { attributes: { 'aria-label': 'الانتقال إلى الصفحة التالية' } },
		first: { attributes: { 'aria-label': 'الانتقال إلى الصفحة الأولى' } },
		last: { attributes: { 'aria-label': (e) => `الانتقال إلى الصفحة الأخيرة ${e?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (e) => `الانتقال إلى الصفحة ${e?.page?.number}` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} منتج` } },
	result: {
		addToCartButtonText: { value: 'إضافة الكل إلى السلة', attributes: { 'aria-label': 'إضافة الكل إلى السلة' } },
		addToCartButtonSuccessText: { value: 'تمت الإضافة!' },
		quickviewButtonText: { value: 'عرض سريع', attributes: { 'aria-label': 'عرض سريع' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'إضافة الكل إلى السلة', attributes: { 'aria-label': 'إضافة الكل إلى السلة' } },
		addToCartButtonSuccessText: { value: 'تمت الإضافة!' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'تحميل المزيد' } },
		progressText: { value: (e) => `لقد شاهدت ${e?.pagination?.end} من ${e?.pagination?.totalResults} منتج` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: 'أقل' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `إزالة الفلتر المحدد ${e?.label} ${e?.value}` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`مقبض شريط تمرير ${e?.facet?.label}، القيمة الحالية ${e?.value}، ${e?.facet?.range?.low ? `القيمة الدنيا ${e?.facet?.range?.low}،` : ''} ${
						e?.facet?.range?.high ? `القيمة القصوى ${e?.facet?.range?.high}` : ''
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
							? `إزالة الفلتر المحدد ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `تصفية حسب ${e?.facet?.label} - ${e?.value?.label}`
							: `تصفية حسب ${e?.value?.label}`
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
							? `إزالة الفلتر المحدد ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `تصفية حسب ${e?.facet?.label} - ${e?.value?.label}`
							: `تصفية حسب ${e?.value?.label}`
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
							? `إزالة الفلتر المحدد ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `تصفية حسب ${e?.facet?.label} - ${e?.value?.label}`
							: `تصفية حسب ${e?.value?.label}`
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
							? `إزالة الفلتر المحدد ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `تصفية حسب ${e?.facet?.label} - ${e?.value?.label}`
							: `تصفية حسب ${e?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>تحذير:&nbsp;</b>' },
		infoText: { value: '<b>معلومات:&nbsp;</b>' },
		errorText: { value: '<b>خطأ:&nbsp;</b>' },
		reloadText: { value: 'إعادة التحميل' },
	},
	checkbox: {
		checkbox: { attributes: { 'aria-label': (e) => `مربع اختيار ${e?.disabled ? 'معطّل' : ''} ${e?.checkedState ? 'محدد' : 'غير محدد'}` } },
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'الكمية' } },
		decrementButton: { attributes: { 'aria-label': 'إنقاص الكمية' } },
		incrementButton: { attributes: { 'aria-label': 'زيادة الكمية' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `عرض ${e?.pagination?.totalResults} نتيجة
                ${e?.search?.query ? `لـ <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
			attributes: { 'aria-label': (e) => `يتم الآن عرض ${e?.pagination?.totalResults} عنصر في شبكة المنتجات` },
		},
		correctedQueryText: {
			value: (e) =>
				`لم يتم العثور على نتائج لـ <em>"${e?.search?.originalQuery?.string}"</em>، وتُعرض بدلاً منها نتائج <em>"${e?.search?.query?.string}"</em>.`,
			attributes: {
				'aria-label': (e) => `لم يتم العثور على نتائج لـ ${e?.search?.originalQuery?.string}، وتُعرض بدلاً منها نتائج ${e?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    لم يتم العثور على نتائج لـ <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>.
                </span>`
						: '<span>لم يتم العثور على نتائج.</span>'
				}`,
			attributes: { 'aria-label': (e) => `لم يتم العثور على نتائج لـ ${e?.search?.query?.string}` },
		},
		didYouMeanText: { value: (e) => `هل تقصد <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>؟` },
		expandedSearchText: {
			value: (e) =>
				`لم نتمكن من العثور على تطابق تام لـ "<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>"، ولكن إليك شيء مشابه:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'اقتراحات' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">تحقق من الأخطاء الإملائية.</li><li class="ss__no-results__suggestions__list__option">احذف أي كلمات مفتاحية زائدة (مثل: "منتجات").</li><li class="ss__no-results__suggestions__list__option">استخدم كلمات أخرى لوصف ما تبحث عنه.</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'معرض الصور' } },
		zoomOutButton: { attributes: { 'aria-label': 'تصغير' } },
		zoomInButton: { attributes: { 'aria-label': 'تكبير' } },
		closeButton: { attributes: { 'aria-label': 'إغلاق المعرض' } },
		prevButton: { attributes: { 'aria-label': 'الصورة السابقة' } },
		nextButton: { attributes: { 'aria-label': 'الصورة التالية' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'عرض سريع' } },
		closeButton: { attributes: { 'aria-label': 'إغلاق العرض السريع' } },
		addToCartButton: { value: 'إضافة إلى السلة' },
		moreInfoButton: { value: 'مزيد من المعلومات' },
		loadingText: { value: 'جارٍ التحميل…' },
	},
};
export { t as ar };
