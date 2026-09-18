// Vietnamese (Tiếng Việt)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const vi: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'Đóng tự động hoàn thành',
			attributes: {
				'aria-label': 'Đóng tự động hoàn thành',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>Không tìm thấy kết quả nào cho "${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}".</p><p>Vui lòng thử tìm kiếm khác.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`Xem ${data?.controller?.store?.pagination.totalResults} kết quả${data?.controller?.store?.filters.length > 0 ? ' đã lọc' : ''} cho "${
					data?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: {
			value: 'Lịch sử',
		},
		term: {
			attributes: {
				'aria-label': (data) => `mục ${data.index + 1} trong ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: 'Gợi ý',
		},
		term: {
			attributes: {
				'aria-label': (data) => `mục ${data.index + 1} trong ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'Xu hướng',
		},
		term: {
			attributes: {
				'aria-label': (data) => `mục ${data.index + 1} trong ${data.numberOfTerms}, ${data.term.value}`,
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
			value: 'Bộ lọc',
		},
		applyButtonText: {
			value: 'Áp dụng',
		},
		clearButtonText: {
			value: 'Xóa tất cả',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: 'Tìm kiếm',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Đóng tìm kiếm',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Xóa tìm kiếm',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Gửi tìm kiếm',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'Sản phẩm này',
		},
		ctaButtonText: {
			value: 'Thêm tất cả vào giỏ hàng',
		},
		ctaButtonSuccessText: {
			value: 'Đã thêm combo!',
		},
		ctaSubtotalTitle: {
			value: (data) => `Tạm tính cho ${data.cartStore.count} sản phẩm`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? 'Tạm dừng' : 'Phát'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'Tạm dừng trình chiếu' : 'Tiếp tục trình chiếu'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `Đi tới nhóm slide ${data.index + 1} trong ${data.totalDots}`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `Slide tiếp theo${data.isNextDisabled ? ' (đã tắt)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `Slide trước${data.isPrevDisabled ? ' (đã tắt)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `Nhấp để xem ${data.imageAlt}` : `${data.imageAlt} ${data.index + 1} trong ${data.slidesLength}`,
			},
		},
		srInstructions: {
			value: (data) =>
				`Sử dụng các phím mũi tên để di chuyển giữa các slide. Nhấn phím cách để tạm dừng tự động phát. Nhấn Home hoặc End để đi tới nhóm slide đầu tiên hoặc cuối cùng.${' '}${
					data.touchDragging && 'Trên thiết bị cảm ứng, vuốt sang trái hoặc phải để di chuyển.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: 'Sắp xếp theo',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': 'Các tab kết quả',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, ${data.resultCount} kết quả` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: 'Mỗi trang',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`menu thả xuống bộ lọc ${data?.facet?.field}, hiện đang ${data?.selectedFacet?.field === data?.facet?.field ? 'thu gọn' : 'mở'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' lựa chọn' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: 'Bộ lọc hiện tại',
		},
		clearAllLabel: {
			value: 'Xóa tất cả',
		},
	},
	facet: {
		showMoreText: {
			value: 'Xem thêm',
		},
		showLessText: {
			value: 'Thu gọn',
		},
		clearAllText: {
			value: 'Xóa tất cả',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`menu thả xuống bộ lọc ${data?.facet?.label}, hiện đang ${data?.facet?.collapsed ? 'thu gọn' : 'mở'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' lựa chọn' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: 'Gửi',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`menu thả xuống ${data?.label}, ${data?.options?.length} lựa chọn ${
						data?.selectedOptions?.length ? `, tùy chọn đang được chọn là ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `nút chọn ${data?.disabled ? 'đã tắt' : ''} ${data?.checkedState ? 'đã chọn' : 'chưa chọn'}`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': 'đến trang trước',
			},
		},
		next: {
			attributes: {
				'aria-label': 'đến trang sau',
			},
		},
		first: {
			attributes: {
				'aria-label': 'đến trang đầu tiên',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `đến trang cuối cùng ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `đến trang ${data?.page?.number}`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} sản phẩm`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'Thêm tất cả vào giỏ hàng',
			attributes: {
				'aria-label': 'Thêm tất cả vào giỏ hàng',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Đã thêm!',
		},
		quickviewButtonText: {
			value: 'Xem nhanh',
			attributes: {
				'aria-label': 'Xem nhanh',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'Thêm tất cả vào giỏ hàng',
			attributes: {
				'aria-label': 'Thêm tất cả vào giỏ hàng',
			},
		},
		addToCartButtonSuccessText: {
			value: 'Đã thêm!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'Tải thêm',
			},
		},
		progressText: {
			value: (data) => `Bạn đã xem ${data?.pagination?.end} trong ${data?.pagination?.totalResults} sản phẩm`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: 'Thu gọn',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `xóa bộ lọc đã chọn ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`thanh trượt ${data?.facet?.label}, giá trị hiện tại ${data?.value}, ${
						data?.facet?.range?.low ? `giá trị tối thiểu ${data?.facet?.range?.low},` : ``
					} ${data?.facet?.range?.high ? `giá trị tối đa ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `xóa bộ lọc đã chọn ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `lọc theo ${data?.facet?.label} - ${data?.value?.label}`
							: `lọc theo ${data?.value?.label}`
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
							? `xóa bộ lọc đã chọn ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `lọc theo ${data?.facet?.label} - ${data?.value?.label}`
							: `lọc theo ${data?.value?.label}`
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
							? `xóa bộ lọc đã chọn ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `lọc theo ${data?.facet?.label} - ${data?.value?.label}`
							: `lọc theo ${data?.value?.label}`
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
							? `xóa bộ lọc đã chọn ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `lọc theo ${data?.facet?.label} - ${data?.value?.label}`
							: `lọc theo ${data?.value?.label}`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>Cảnh báo:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>Thông tin:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>Lỗi:&nbsp;</b>`,
		},
		reloadText: {
			value: `Tải lại`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `hộp kiểm ${data?.disabled ? 'đã tắt' : ''} ${data?.checkedState ? 'đã chọn' : 'chưa chọn'}`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': 'số lượng',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'giảm số lượng',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'tăng số lượng',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `Đang hiển thị ${data?.pagination?.totalResults} kết quả
                ${data?.search?.query ? `cho <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `Hiện đang hiển thị ${data?.pagination?.totalResults} mục trong lưới sản phẩm`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `Không tìm thấy kết quả nào cho <em>"${data?.search?.originalQuery?.string}"</em>, thay vào đó đang hiển thị kết quả cho <em>"${data?.search?.query?.string}"</em>.`;
			},
			attributes: {
				'aria-label': (data) =>
					`Không tìm thấy kết quả nào cho ${data?.search?.originalQuery?.string}, thay vào đó đang hiển thị kết quả cho ${data?.search?.query?.string}`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    Không tìm thấy kết quả nào cho <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.
                </span>`
						: `<span>Không tìm thấy kết quả nào.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `Không tìm thấy kết quả nào cho ${data?.search?.query?.string}`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `Có phải bạn muốn tìm <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `Chúng tôi không thể tìm thấy kết quả khớp chính xác cho "<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>", nhưng đây là một số kết quả tương tự:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `Gợi ý`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">Kiểm tra lỗi chính tả.</li><li class="ss__no-results__suggestions__list__option">Xóa các từ khóa dư thừa (ví dụ: "sản phẩm").</li><li class="ss__no-results__suggestions__list__option">Dùng từ khác để mô tả những gì bạn đang tìm kiếm.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': 'Thư viện ảnh',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': 'Thu nhỏ',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': 'Phóng to',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Đóng thư viện',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': 'Ảnh trước',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': 'Ảnh tiếp theo',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'Xem nhanh',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Đóng xem nhanh',
			},
		},
		addToCartButton: {
			value: 'Thêm vào giỏ hàng',
		},
		moreInfoButton: {
			value: 'Thêm thông tin',
		},
		loadingText: {
			value: 'Đang tải…',
		},
	},
};
