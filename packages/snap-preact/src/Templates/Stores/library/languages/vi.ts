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
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'Mở trò chuyện',
				title: 'Mở trò chuyện',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Đóng trò chuyện',
				title: 'Đóng trò chuyện',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'Mở trò chuyện',
				title: 'Mở trò chuyện',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'Đóng trò chuyện',
				title: 'Đóng trò chuyện',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': 'Cuộc trò chuyện mới',
				title: 'Cuộc trò chuyện mới',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'Lịch sử trò chuyện',
				title: 'Lịch sử trò chuyện',
			},
		},
		historyTitle: {
			value: 'Lịch sử',
		},
		historyClearButton: {
			value: 'xóa',
		},
		historyNewChatLabel: {
			value: 'Cuộc trò chuyện mới',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': 'Chi tiết cuộc trò chuyện',
			},
		},
		inspirationResultTitle: {
			value: 'Kịch bản cảm hứng',
		},
		inspirationResultSubtitle: {
			value: 'Chọn một hướng phong cách để khám phá',
		},
		productComparisonTitle: {
			value: 'So sánh sản phẩm',
		},
		productComparisonSubtitle: {
			value: (data) => `Đang so sánh ${data?.count ?? ''} sản phẩm`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'Tin nhắn trò chuyện',
			},
		},
		newMessagesButton: {
			value: 'Tin nhắn mới',
		},
		loadingVerbsProductQuery: {
			value: 'Đang suy nghĩ, Đang tìm kiếm, Đang phân tích, Đang thu thập thông tin',
		},
		loadingVerbsProductSearch: {
			value: 'Đang tìm kiếm, Đang duyệt danh mục, Đang tìm sản phẩm, Đang chọn kết quả',
		},
		loadingVerbsProductComparison: {
			value: 'Đang so sánh, Đang phân tích, Đang đánh giá, Đang cân nhắc các lựa chọn',
		},
		loadingVerbsImageSearch: {
			value: 'Đang phân tích hình ảnh, Đang nhận diện, Đang tìm kiếm, Đang đối chiếu',
		},
		loadingVerbsProductSimilar: {
			value: 'Đang tìm sản phẩm tương tự, Đang tìm kiếm, Đang đối chiếu, Đang chọn lọc',
		},
		loadingVerbsInspirationRequest: {
			value: 'Đang tạo ý tưởng, Đang hình dung, Đang chọn lọc, Đang gợi cảm hứng',
		},
		feedbackPrompt: {
			value: 'Trải nghiệm của bạn đến giờ thế nào?',
		},
		feedbackThanks: {
			value: 'Cảm ơn phản hồi của bạn',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': 'Thích',
				title: 'Thích',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': 'Không thích',
				title: 'Không thích',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'Bỏ qua phản hồi',
			},
		},
		comparisonsTitle: {
			value: (data) => `So sánh sản phẩm (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'xóa',
		},
		comparisonsAddText: {
			value: 'Thêm',
		},
		comparisonsCompareButton: {
			value: 'So sánh',
			attributes: {
				title: 'So sánh',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `Xóa ${data?.name || 'sản phẩm'} khỏi so sánh`,
			},
		},
		chatUnavailableMessage: {
			value: 'Dịch vụ tạm thời không khả dụng. Trong lúc này, hãy dùng thanh tìm kiếm ở trên để tìm những gì bạn cần!',
		},
		highVolumeMessage: {
			value: 'Trò chuyện hiện không khả dụng do lượng yêu cầu quá lớn.',
		},
		highVolumeSubMessage: {
			value: 'Trong lúc này, hãy dùng thanh tìm kiếm ở trên để tìm những gì bạn cần!',
		},
		newSessionButton: {
			value: 'Phiên mới',
		},
		facetsTitle: {
			value: 'Lọc theo:',
		},
		facetsApplyButton: {
			value: (data) => `Áp dụng (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'Xóa bộ lọc',
		},
		attachmentCompareTitle: {
			value: 'So sánh các sản phẩm này',
		},
		attachmentAskProductTitle: {
			value: 'Hỏi về sản phẩm này',
		},
		attachmentImageSimilarTitle: {
			value: 'Tìm sản phẩm tương tự với hình ảnh này:',
		},
		topicDriftScopeMessage: {
			value: 'Tôi ở đây để hỗ trợ bạn mua sắm',
		},
		topicDriftScopeSubMessage: {
			value: 'Hãy thử hỏi về sản phẩm, so sánh hoặc gợi ý',
		},
		topicDriftMessage: {
			value: 'Bạn đang tìm điều gì mới?',
		},
		topicDriftSubMessage: {
			value: 'Bắt đầu phiên mới để được hỗ trợ tốt hơn hay tiếp tục phiên này?',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': 'Bỏ qua',
			},
		},
		inputPlaceholder: {
			value: 'Nhập tin nhắn của bạn...',
		},
		inputPlaceholderAskProduct: {
			value: 'Hỏi về sản phẩm này...',
		},
		inputPlaceholderCompare: {
			value: 'Bạn muốn so sánh gì?',
		},
		inputPlaceholderComparedProducts: {
			value: 'Hỏi về các sản phẩm đang so sánh...',
		},
		inputPlaceholderAskImage: {
			value: 'Hỏi về hình ảnh này...',
		},
		inputPlaceholderAddCompare: {
			value: 'Thêm một sản phẩm khác để so sánh...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': 'Tải ảnh lên',
				title: 'Tải ảnh lên',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'Gửi tin nhắn',
				title: 'Gửi tin nhắn',
			},
		},
		dropOverlayText: {
			value: 'Thả ảnh vào đây để tải lên',
		},
		disclaimerText: {
			value: 'Trợ lý được hỗ trợ bởi AI. Đôi khi có thể mắc lỗi. Tránh chia sẻ thông tin cá nhân.',
		},
		privacyPolicyLinkText: {
			value: 'Chính sách bảo mật',
		},
		expiredMessage: {
			value: 'Cuộc trò chuyện này đã hết hạn. Vui lòng bắt đầu cuộc trò chuyện mới.',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: 'Đang suy nghĩ',
		},
		searchingVerb: {
			value: 'Đang tìm kiếm',
		},
		analyzingVerb: {
			value: 'Đang phân tích',
		},
		generatingVerb: {
			value: 'Đang tạo',
		},
		processingVerb: {
			value: 'Đang xử lý',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': 'Đóng',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': 'Mở mục',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': 'Đang tải mục',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': 'Xóa mục',
			},
		},
		uploadFailedText: {
			value: 'Tải tệp lên không thành công',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': 'Tìm kiếm cụm từ này',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': 'Mở sản phẩm',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'Xem cảm hứng',
				title: 'Xem cảm hứng',
			},
		},
		closeInspirationButton: {
			value: 'Đóng cảm hứng',
			attributes: {
				'aria-label': 'Đóng cảm hứng',
				title: 'Đóng cảm hứng',
			},
		},
		exploreInspirationButton: {
			value: 'Khám phá kịch bản cảm hứng',
			attributes: {
				'aria-label': 'Khám phá kịch bản cảm hứng',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': 'Xem so sánh',
				title: 'Xem so sánh',
			},
		},
		closeComparisonButton: {
			value: 'Đóng so sánh',
			attributes: {
				'aria-label': 'Đóng so sánh',
				title: 'Đóng so sánh',
			},
		},
		exploreComparisonButton: {
			value: 'Khám phá dữ liệu so sánh',
			attributes: {
				'aria-label': 'Khám phá dữ liệu so sánh',
			},
		},
		showDetailsButton: {
			value: 'Hiển thị chi tiết',
			attributes: {
				'aria-label': 'Hiển thị chi tiết so sánh',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: 'Đang hỏi về sản phẩm',
		},
		requestTypeProductComparison: {
			value: 'Đang so sánh sản phẩm',
		},
		requestTypeProductFilter: {
			value: 'Đang lọc sản phẩm',
		},
		requestTypeProductSearch: {
			value: 'Đang tìm sản phẩm',
		},
		requestTypeImageSearch: {
			value: 'Đang tìm bằng hình ảnh',
		},
		requestTypeProductSimilar: {
			value: 'Đang tìm sản phẩm tương tự',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': 'Xem chi tiết sản phẩm',
				title: 'Xem chi tiết sản phẩm',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': 'Bộ lọc đã áp dụng',
				title: 'Bộ lọc đã áp dụng',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': 'Bộ lọc bổ sung',
				title: 'Bộ lọc bổ sung',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: 'So sánh sản phẩm',
			attributes: {
				'aria-label': 'So sánh sản phẩm',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': 'Tính năng',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': 'Xem chi tiết sản phẩm',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: 'Đang tải chi tiết sản phẩm...',
		},
		backToComparisonButton: {
			value: 'Quay lại so sánh',
			attributes: {
				'aria-label': 'Quay lại so sánh',
			},
		},
		backToInspirationButton: {
			value: 'Quay lại cảm hứng',
			attributes: {
				'aria-label': 'Quay lại cảm hứng',
			},
		},
		addToCartButton: {
			value: 'Thêm vào giỏ hàng',
		},
		moreInfoButton: {
			value: 'Thêm thông tin',
		},
		similarButton: {
			value: 'Tương tự',
		},
		discussButton: {
			value: 'Thảo luận',
		},
	},
	chatResult: {
		similarButton: {
			value: 'Tương tự',
			attributes: {
				'aria-label': (data) => `Hiển thị sản phẩm tương tự với ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'}`,
			},
		},
		compareButton: {
			value: 'So sánh',
			attributes: {
				'aria-label': (data) => `So sánh ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `Đã thêm ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'} vào so sánh`,
				title: 'Đã thêm vào so sánh',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `Thảo luận về ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'}`,
				title: 'Thảo luận về sản phẩm',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `Thêm ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'} vào giỏ hàng`,
				title: 'Thêm vào giỏ hàng',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `Tùy chỉnh ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'}`,
				title: 'Tùy chỉnh',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `Mở ${data?.result?.display?.mappings?.core?.name || 'sản phẩm'}`,
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
		discussProductButton: {
			attributes: {
				'aria-label': 'Thảo luận về sản phẩm này',
				title: 'Thảo luận về sản phẩm này',
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
		similarButton: {
			value: 'Tương tự',
		},
		discussButton: {
			value: 'Thảo luận',
		},
		loadingText: {
			value: 'Đang tải…',
		},
	},
};
