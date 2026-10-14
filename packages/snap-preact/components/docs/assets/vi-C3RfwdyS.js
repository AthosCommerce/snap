const e = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'Đóng tự động hoàn thành', attributes: { 'aria-label': 'Đóng tự động hoàn thành' } },
		noResultsText: {
			value: (t) =>
				`<p>Không tìm thấy kết quả nào cho "${
					t.controller?.store?.search?.originalQuery?.string || t.controller?.store?.search?.query?.string
				}".</p><p>Vui lòng thử tìm kiếm khác.</p>`,
		},
		seeMoreButton: {
			value: (t) =>
				`Xem ${t?.controller?.store?.pagination.totalResults} kết quả${t?.controller?.store?.filters.length > 0 ? ' đã lọc' : ''} cho "${
					t?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: { value: 'Lịch sử' },
		term: { attributes: { 'aria-label': (t) => `mục ${t.index + 1} trong ${t.numberOfTerms}, ${t.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: 'Gợi ý' },
		term: { attributes: { 'aria-label': (t) => `mục ${t.index + 1} trong ${t.numberOfTerms}, ${t.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'Xu hướng' },
		term: { attributes: { 'aria-label': (t) => `mục ${t.index + 1} trong ${t.numberOfTerms}, ${t.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: { titleText: { value: 'Bộ lọc' }, applyButtonText: { value: 'Áp dụng' }, clearButtonText: { value: 'Xóa tất cả' }, closeButtonText: {} },
	searchInput: {
		placeholderText: { attributes: { placeholder: 'Tìm kiếm' } },
		closeSearchButton: { attributes: { 'aria-label': 'Đóng tìm kiếm' } },
		clearSearchButton: { attributes: { 'aria-label': 'Xóa tìm kiếm' } },
		submitSearchButton: { attributes: { 'aria-label': 'Gửi tìm kiếm' } },
	},
	recommendationBundle: {
		seedText: { value: 'Sản phẩm này' },
		ctaButtonText: { value: 'Thêm tất cả vào giỏ hàng' },
		ctaButtonSuccessText: { value: 'Đã thêm combo!' },
		ctaSubtotalTitle: { value: (t) => `Tạm tính cho ${t.cartStore.count} sản phẩm` },
	},
	slideshow: {
		pauseButton: {
			value: (t) => (t.isPlaying ? 'Tạm dừng' : 'Phát'),
			attributes: { 'aria-label': (t) => (t.isPlaying ? 'Tạm dừng trình chiếu' : 'Tiếp tục trình chiếu') },
		},
		paginationButton: { attributes: { 'aria-label': (t) => `Đi tới nhóm slide ${t.index + 1} trong ${t.totalDots}` } },
		nextButton: { attributes: { 'aria-label': (t) => `Slide tiếp theo${t.isNextDisabled ? ' (đã tắt)' : ''}` } },
		prevButton: { attributes: { 'aria-label': (t) => `Slide trước${t.isPrevDisabled ? ' (đã tắt)' : ''}` } },
		slide: {
			attributes: { 'aria-label': (t) => (t.hasClickHandler ? `Nhấp để xem ${t.imageAlt}` : `${t.imageAlt} ${t.index + 1} trong ${t.slidesLength}`) },
		},
		srInstructions: {
			value: (t) =>
				`Sử dụng các phím mũi tên để di chuyển giữa các slide. Nhấn phím cách để tạm dừng tự động phát. Nhấn Home hoặc End để đi tới nhóm slide đầu tiên hoặc cuối cùng. ${
					t.touchDragging && 'Trên thiết bị cảm ứng, vuốt sang trái hoặc phải để di chuyển.'
				}`,
		},
	},
	sortBy: { label: { value: 'Sắp xếp theo' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': 'Các tab kết quả' } },
		tabButton: {
			attributes: { 'aria-label': (t) => `${t.tab.label || t.tab.id}${typeof t.resultCount == 'number' ? `, ${t.resultCount} kết quả` : ''}` },
		},
	},
	perPage: { label: { value: 'Mỗi trang' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (t) =>
					`menu thả xuống bộ lọc ${t?.facet?.field}, hiện đang ${t?.selectedFacet?.field === t?.facet?.field ? 'thu gọn' : 'mở'} ${
						t?.facet?.values?.length ? t?.facet?.values?.length + ' lựa chọn' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: 'Bộ lọc hiện tại' },
		clearAllLabel: { value: 'Xóa tất cả', attributes: { 'aria-label': 'Xóa tất cả' } },
		noFiltersText: { value: 'Không có bộ lọc nào được áp dụng' },
	},
	facet: {
		showMoreText: { value: 'Xem thêm' },
		showLessText: { value: 'Thu gọn' },
		clearAllText: { value: 'Xóa tất cả' },
		dropdownButton: {
			attributes: {
				'aria-label': (t) =>
					`menu thả xuống bộ lọc ${t?.facet?.label}, hiện đang ${t?.facet?.collapsed ? 'thu gọn' : 'mở'} ${
						t?.facet?.values?.length ? t?.facet?.values?.length + ' lựa chọn' : ''
					}`,
			},
		},
		submitRangeButton: { value: 'Gửi' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (t) =>
					`menu thả xuống ${t?.label}, ${t?.options?.length} lựa chọn ${
						t?.selectedOptions?.length ? `, tùy chọn đang được chọn là ${t?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: { radio: { attributes: { 'aria-label': (t) => `nút chọn ${t?.disabled ? 'đã tắt' : ''} ${t?.checkedState ? 'đã chọn' : 'chưa chọn'}` } } },
	pagination: {
		previous: { attributes: { 'aria-label': 'đến trang trước' } },
		next: { attributes: { 'aria-label': 'đến trang sau' } },
		first: { attributes: { 'aria-label': 'đến trang đầu tiên' } },
		last: { attributes: { 'aria-label': (t) => `đến trang cuối cùng ${t?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (t) => `đến trang ${t?.page?.number}` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: t }) => `${t?.totalResults} sản phẩm` } },
	result: {
		addToCartButtonText: { value: 'Thêm tất cả vào giỏ hàng', attributes: { 'aria-label': 'Thêm tất cả vào giỏ hàng' } },
		addToCartButtonSuccessText: { value: 'Đã thêm!' },
		quickviewButtonText: { value: 'Xem nhanh', attributes: { 'aria-label': 'Xem nhanh' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'Thêm tất cả vào giỏ hàng', attributes: { 'aria-label': 'Thêm tất cả vào giỏ hàng' } },
		addToCartButtonSuccessText: { value: 'Đã thêm!' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'Tải thêm' } },
		progressText: { value: (t) => `Bạn đã xem ${t?.pagination?.end} trong ${t?.pagination?.totalResults} sản phẩm` },
	},
	grid: { showMoreText: { value: (t) => `+ ${t?.remainder}` }, showLessText: { value: 'Thu gọn' } },
	filter: { filter: { attributes: { 'aria-label': (t) => `${t?.label ? `xóa bộ lọc đã chọn ${t?.label} ${t?.value}` : t?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (t) =>
					`thanh trượt ${t?.facet?.label}, giá trị hiện tại ${t?.value}, ${
						t?.facet?.range?.low ? `giá trị tối thiểu ${t?.facet?.range?.low},` : ''
					} ${t?.facet?.range?.high ? `giá trị tối đa ${t?.facet?.range?.high}` : ''}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (t) =>
					`${
						t?.value?.filtered
							? `xóa bộ lọc đã chọn ${t?.facet?.label || ''} - ${t?.value?.label}`
							: t?.facet?.label
							? `lọc theo ${t?.facet?.label} - ${t?.value?.label}`
							: `lọc theo ${t?.value?.label}`
					}`,
			},
		},
	},
	facetListOptions: {
		listOption: {
			attributes: {
				'aria-label': (t) =>
					`${
						t?.value?.filtered
							? `xóa bộ lọc đã chọn ${t?.facet?.label || ''} - ${t?.value?.label}`
							: t?.facet?.label
							? `lọc theo ${t?.facet?.label} - ${t?.value?.label}`
							: `lọc theo ${t?.value?.label}`
					}`,
			},
		},
	},
	facetHierarchyOptions: {
		hierarchyOption: {
			attributes: {
				'aria-label': (t) =>
					`${
						t?.value?.filtered
							? `xóa bộ lọc đã chọn ${t?.facet?.label || ''} - ${t?.value?.label}`
							: t?.facet?.label
							? `lọc theo ${t?.facet?.label} - ${t?.value?.label}`
							: `lọc theo ${t?.value?.label}`
					}`,
			},
		},
	},
	facetGridOptions: {
		gridOption: {
			attributes: {
				'aria-label': (t) =>
					`${
						t?.value?.filtered
							? `xóa bộ lọc đã chọn ${t?.facet?.label || ''} - ${t?.value?.label}`
							: t?.facet?.label
							? `lọc theo ${t?.facet?.label} - ${t?.value?.label}`
							: `lọc theo ${t?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>Cảnh báo:&nbsp;</b>' },
		infoText: { value: '<b>Thông tin:&nbsp;</b>' },
		errorText: { value: '<b>Lỗi:&nbsp;</b>' },
		reloadText: { value: 'Tải lại' },
	},
	checkbox: {
		checkbox: { attributes: { 'aria-label': (t) => `hộp kiểm ${t?.disabled ? 'đã tắt' : ''} ${t?.checkedState ? 'đã chọn' : 'chưa chọn'}` } },
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': 'số lượng' } },
		decrementButton: { attributes: { 'aria-label': 'giảm số lượng' } },
		incrementButton: { attributes: { 'aria-label': 'tăng số lượng' } },
	},
	searchHeader: {
		titleText: {
			value: (t) => `Đang hiển thị ${t?.pagination?.totalResults} kết quả
                ${t?.search?.query ? `cho <span class="ss__search-header__results-query">"${t?.search?.query.string}"</span>` : ''}`,
			attributes: { 'aria-label': (t) => `Hiện đang hiển thị ${t?.pagination?.totalResults} mục trong lưới sản phẩm` },
		},
		correctedQueryText: {
			value: (t) =>
				`Không tìm thấy kết quả nào cho <em>"${t?.search?.originalQuery?.string}"</em>, thay vào đó đang hiển thị kết quả cho <em>"${t?.search?.query?.string}"</em>.`,
			attributes: {
				'aria-label': (t) =>
					`Không tìm thấy kết quả nào cho ${t?.search?.originalQuery?.string}, thay vào đó đang hiển thị kết quả cho ${t?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (t) =>
				`${
					t?.search?.query
						? `<span>
                    Không tìm thấy kết quả nào cho <span class="ss__search-header__results-query">"${t?.search?.query?.string}"</span>.
                </span>`
						: '<span>Không tìm thấy kết quả nào.</span>'
				}`,
			attributes: { 'aria-label': (t) => `Không tìm thấy kết quả nào cho ${t?.search?.query?.string}` },
		},
		didYouMeanText: { value: (t) => `Có phải bạn muốn tìm <a href=${t?.search?.didYouMean?.url.href}>${t?.search?.didYouMean?.string}</a>?` },
		expandedSearchText: {
			value: (t) =>
				`Chúng tôi không thể tìm thấy kết quả khớp chính xác cho "<span class="ss__search-header__results-query">${t?.search?.query?.string}</span>", nhưng đây là một số kết quả tương tự:`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: 'Gợi ý' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Kiểm tra lỗi chính tả.</li><li class="ss__no-results__suggestions__list__option">Xóa các từ khóa dư thừa (ví dụ: "sản phẩm").</li><li class="ss__no-results__suggestions__list__option">Dùng từ khác để mô tả những gì bạn đang tìm kiếm.</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': 'Thư viện ảnh' } },
		zoomOutButton: { attributes: { 'aria-label': 'Thu nhỏ' } },
		zoomInButton: { attributes: { 'aria-label': 'Phóng to' } },
		closeButton: { attributes: { 'aria-label': 'Đóng thư viện' } },
		prevButton: { attributes: { 'aria-label': 'Ảnh trước' } },
		nextButton: { attributes: { 'aria-label': 'Ảnh tiếp theo' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'Xem nhanh' } },
		closeButton: { attributes: { 'aria-label': 'Đóng xem nhanh' } },
		addToCartButton: { value: 'Thêm vào giỏ hàng' },
		moreInfoButton: { value: 'Thêm thông tin' },
		loadingText: { value: 'Đang tải…' },
	},
};
export { e as vi };
