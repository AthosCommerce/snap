// Chinese (中文)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const zh: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: '关闭自动完成',
			attributes: {
				'aria-label': '关闭自动完成',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>未找到"${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}"的结果。</p><p>请尝试其他搜索。</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`查看 ${data?.controller?.store?.pagination.totalResults} 条${data?.controller?.store?.filters.length > 0 ? '已筛选' : ''}结果，关于"${
					data?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: {
			value: '历史记录',
		},
		term: {
			attributes: {
				'aria-label': (data) => `第 ${data.index + 1} 项，共 ${data.numberOfTerms} 项，${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: '建议',
		},
		term: {
			attributes: {
				'aria-label': (data) => `第 ${data.index + 1} 项，共 ${data.numberOfTerms} 项，${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: '热门',
		},
		term: {
			attributes: {
				'aria-label': (data) => `第 ${data.index + 1} 项，共 ${data.numberOfTerms} 项，${data.term.value}`,
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
			value: '筛选条件',
		},
		applyButtonText: {
			value: '应用',
		},
		clearButtonText: {
			value: '清除全部',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: '搜索',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': '关闭搜索',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': '清除搜索',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': '提交搜索',
			},
		},
	},
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': '打开聊天',
				title: '打开聊天',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': '关闭聊天',
				title: '关闭聊天',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': '打开聊天',
				title: '打开聊天',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': '关闭聊天',
				title: '关闭聊天',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': '新聊天',
				title: '新聊天',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': '聊天记录',
				title: '聊天记录',
			},
		},
		historyTitle: {
			value: '历史记录',
		},
		historyClearButton: {
			value: '清除',
		},
		historyNewChatLabel: {
			value: '新聊天',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': '对话详情',
			},
		},
		inspirationResultTitle: {
			value: '灵感场景',
		},
		inspirationResultSubtitle: {
			value: '选择一个风格方向进行探索',
		},
		productComparisonTitle: {
			value: '产品比较',
		},
		productComparisonSubtitle: {
			value: (data) => `正在比较 ${data?.count ?? ''} 件产品`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': '聊天消息',
			},
		},
		newMessagesButton: {
			value: '新消息',
		},
		loadingVerbsProductQuery: {
			value: '思考中, 搜索中, 分析中, 收集详情中',
		},
		loadingVerbsProductSearch: {
			value: '搜索中, 浏览目录中, 查找产品中, 挑选结果中',
		},
		loadingVerbsProductComparison: {
			value: '比较中, 分析中, 评估中, 权衡选项中',
		},
		loadingVerbsImageSearch: {
			value: '分析图片中, 识别中, 搜索中, 匹配中',
		},
		loadingVerbsProductSimilar: {
			value: '查找相似产品中, 搜索中, 匹配中, 挑选中',
		},
		loadingVerbsInspirationRequest: {
			value: '生成灵感中, 构想中, 挑选中, 激发灵感中',
		},
		feedbackPrompt: {
			value: '目前的体验如何？',
		},
		feedbackThanks: {
			value: '感谢您的反馈',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': '喜欢',
				title: '喜欢',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': '不喜欢',
				title: '不喜欢',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': '关闭反馈',
			},
		},
		comparisonsTitle: {
			value: (data) => `比较产品 (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: '清除',
		},
		comparisonsAddText: {
			value: '添加',
		},
		comparisonsCompareButton: {
			value: '比较',
			attributes: {
				title: '比较',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `从比较中移除 ${data?.name || '产品'}`,
			},
		},
		chatUnavailableMessage: {
			value: '服务暂时不可用。在此期间，请使用上方的搜索栏查找您需要的商品！',
		},
		highVolumeMessage: {
			value: '由于咨询量较大，聊天暂时不可用。',
		},
		highVolumeSubMessage: {
			value: '在此期间，请使用上方的搜索栏查找您需要的商品！',
		},
		newSessionButton: {
			value: '新会话',
		},
		facetsTitle: {
			value: '筛选条件：',
		},
		facetsApplyButton: {
			value: (data) => `应用 (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: '清除筛选条件',
		},
		attachmentCompareTitle: {
			value: '比较这些产品',
		},
		attachmentAskProductTitle: {
			value: '咨询此产品',
		},
		attachmentImageSimilarTitle: {
			value: '查找与此图片相似的产品：',
		},
		topicDriftScopeMessage: {
			value: '我在这里为您的购物提供帮助',
		},
		topicDriftScopeSubMessage: {
			value: '试试询问产品、比较或推荐',
		},
		topicDriftMessage: {
			value: '在寻找新的东西吗？',
		},
		topicDriftSubMessage: {
			value: '开始新会话以获得更好的帮助，还是继续当前会话？',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': '关闭',
			},
		},
		inputPlaceholder: {
			value: '输入您的消息...',
		},
		inputPlaceholderAskProduct: {
			value: '咨询此产品...',
		},
		inputPlaceholderCompare: {
			value: '您想比较什么？',
		},
		inputPlaceholderComparedProducts: {
			value: '咨询正在比较的产品...',
		},
		inputPlaceholderAskImage: {
			value: '咨询此图片...',
		},
		inputPlaceholderAddCompare: {
			value: '再添加一件产品进行比较...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': '上传图片',
				title: '上传图片',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': '发送消息',
				title: '发送消息',
			},
		},
		dropOverlayText: {
			value: '拖放图片以上传',
		},
		disclaimerText: {
			value: 'AI 驱动的助手，有时可能会出错。请避免分享个人信息。',
		},
		privacyPolicyLinkText: {
			value: '隐私政策',
		},
		expiredMessage: {
			value: '此聊天已过期。请开始新的聊天。',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: '思考中',
		},
		searchingVerb: {
			value: '搜索中',
		},
		analyzingVerb: {
			value: '分析中',
		},
		generatingVerb: {
			value: '生成中',
		},
		processingVerb: {
			value: '处理中',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': '关闭',
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': '打开项目',
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': '正在加载项目',
			},
		},
		removeButton: {
			attributes: {
				'aria-label': '移除项目',
			},
		},
		uploadFailedText: {
			value: '文件上传失败',
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': '搜索此关键词',
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': '打开产品',
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': '查看灵感',
				title: '查看灵感',
			},
		},
		closeInspirationButton: {
			value: '关闭灵感',
			attributes: {
				'aria-label': '关闭灵感',
				title: '关闭灵感',
			},
		},
		exploreInspirationButton: {
			value: '探索灵感场景',
			attributes: {
				'aria-label': '探索灵感场景',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': '查看比较',
				title: '查看比较',
			},
		},
		closeComparisonButton: {
			value: '关闭比较',
			attributes: {
				'aria-label': '关闭比较',
				title: '关闭比较',
			},
		},
		exploreComparisonButton: {
			value: '探索比较数据',
			attributes: {
				'aria-label': '探索比较数据',
			},
		},
		showDetailsButton: {
			value: '显示详情',
			attributes: {
				'aria-label': '显示比较详情',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: '正在咨询产品',
		},
		requestTypeProductComparison: {
			value: '正在比较产品',
		},
		requestTypeProductFilter: {
			value: '正在筛选产品',
		},
		requestTypeProductSearch: {
			value: '正在搜索产品',
		},
		requestTypeImageSearch: {
			value: '正在按图片搜索',
		},
		requestTypeProductSimilar: {
			value: '正在搜索相似产品',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': '查看产品详情',
				title: '查看产品详情',
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': '已应用的筛选条件',
				title: '已应用的筛选条件',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': '更多筛选条件',
				title: '更多筛选条件',
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: '产品比较',
			attributes: {
				'aria-label': '产品比较',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': '特性',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': '查看产品详情',
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: '正在加载产品详情...',
		},
		backToComparisonButton: {
			value: '返回比较',
			attributes: {
				'aria-label': '返回比较',
			},
		},
		backToInspirationButton: {
			value: '返回灵感',
			attributes: {
				'aria-label': '返回灵感',
			},
		},
		addToCartButton: {
			value: '加入购物车',
		},
		similarButton: {
			value: '相似产品',
		},
		discussButton: {
			value: '咨询',
		},
		inStockText: {
			value: '有货',
		},
		outOfStockText: {
			value: '缺货',
		},
		unavailableText: {
			value: '不可用',
		},
		variantsGroup: {
			attributes: {
				'aria-label': '款式选择',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': '产品信息',
			},
		},
	},
	chatResult: {
		similarButton: {
			value: '相似产品',
			attributes: {
				'aria-label': (data) => `显示与 ${data?.result?.display?.mappings?.core?.name || '产品'} 相似的产品`,
			},
		},
		compareButton: {
			value: '比较',
			attributes: {
				'aria-label': (data) => `比较 ${data?.result?.display?.mappings?.core?.name || '产品'}`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '产品'} 已加入比较`,
				title: '已加入比较',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `咨询 ${data?.result?.display?.mappings?.core?.name || '产品'}`,
				title: '咨询产品',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `将 ${data?.result?.display?.mappings?.core?.name || '产品'} 加入购物车`,
				title: '加入购物车',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `配置 ${data?.result?.display?.mappings?.core?.name || '产品'}`,
				title: '配置',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `打开 ${data?.result?.display?.mappings?.core?.name || '产品'}`,
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: '此产品',
		},
		ctaButtonText: {
			value: '全部加入购物车',
		},
		ctaButtonSuccessText: {
			value: '套装已添加！',
		},
		ctaSubtotalTitle: {
			value: (data) => `${data.cartStore.count} 件商品的小计`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? '暂停' : '播放'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? '暂停幻灯片放映' : '继续幻灯片放映'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `转到第 ${data.index + 1} 组幻灯片，共 ${data.totalDots} 组`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `下一张幻灯片${data.isNextDisabled ? '（已禁用）' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `上一张幻灯片${data.isPrevDisabled ? '（已禁用）' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `点击查看 ${data.imageAlt}` : `${data.imageAlt} 第 ${data.index + 1} 张，共 ${data.slidesLength} 张`,
			},
		},
		srInstructions: {
			value: (data) =>
				`使用方向键在幻灯片之间导航。按空格键暂停自动播放。按 Home 或 End 键跳转到第一组或最后一组幻灯片。${' '}${
					data.touchDragging && '在触摸设备上，向左或向右滑动即可导航。'
				}`,
		},
	},
	sortBy: {
		label: {
			value: '排序方式',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': '结果标签页',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `，${data.resultCount} 条结果` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: '每页显示',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.field} 筛选下拉菜单，当前${data?.selectedFacet?.field === data?.facet?.field ? '已收起' : '已展开'}，${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' 个选项' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: '当前筛选条件',
		},
		clearAllLabel: {
			value: '清除全部',
		},
	},
	facet: {
		showMoreText: {
			value: '显示更多',
		},
		showLessText: {
			value: '显示较少',
		},
		clearAllText: {
			value: '清除全部',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} 筛选下拉菜单，当前${data?.facet?.collapsed ? '已收起' : '已展开'}，${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + ' 个选项' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: '提交',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} 下拉菜单，${data?.options?.length} 个选项${
						data?.selectedOptions?.length ? `，当前选中的选项是 ${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? '已禁用' : ''} ${data?.checkedState ? '已选中' : '未选中'}的单选按钮`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': '转到上一页',
			},
		},
		next: {
			attributes: {
				'aria-label': '转到下一页',
			},
		},
		first: {
			attributes: {
				'aria-label': '转到第一页',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `转到最后一页 ${data?.pagination?.last?.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `转到第 ${data?.page?.number} 页`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} 件产品`,
		},
	},
	result: {
		addToCartButtonText: {
			value: '全部加入购物车',
			attributes: {
				'aria-label': '全部加入购物车',
			},
		},
		addToCartButtonSuccessText: {
			value: '已添加！',
		},
		quickviewButtonText: {
			value: '快速预览',
			attributes: {
				'aria-label': '快速预览',
			},
		},
		discussProductButton: {
			attributes: {
				'aria-label': '咨询此商品',
				title: '咨询此商品',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: '全部加入购物车',
			attributes: {
				'aria-label': '全部加入购物车',
			},
		},
		addToCartButtonSuccessText: {
			value: '已添加！',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': '加载更多',
			},
		},
		progressText: {
			value: (data) => `您已浏览 ${data?.pagination?.end} 件，共 ${data?.pagination?.totalResults} 件产品`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: '收起',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `移除已选筛选条件 ${data?.label} ${data?.value}`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} 滑块，当前值 ${data?.value}，${data?.facet?.range?.low ? `最小值 ${data?.facet?.range?.low}，` : ``} ${
						data?.facet?.range?.high ? `最大值 ${data?.facet?.range?.high}` : ``
					}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `移除已选筛选条件 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `按 ${data?.facet?.label} - ${data?.value?.label} 筛选`
							: `按 ${data?.value?.label} 筛选`
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
							? `移除已选筛选条件 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `按 ${data?.facet?.label} - ${data?.value?.label} 筛选`
							: `按 ${data?.value?.label} 筛选`
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
							? `移除已选筛选条件 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `按 ${data?.facet?.label} - ${data?.value?.label} 筛选`
							: `按 ${data?.value?.label} 筛选`
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
							? `移除已选筛选条件 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `按 ${data?.facet?.label} - ${data?.value?.label} 筛选`
							: `按 ${data?.value?.label} 筛选`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>警告：&nbsp;</b>`,
		},
		infoText: {
			value: `<b>信息：&nbsp;</b>`,
		},
		errorText: {
			value: `<b>错误：&nbsp;</b>`,
		},
		reloadText: {
			value: `重新加载`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? '已禁用' : ''} ${data?.checkedState ? '已选中' : '未选中'}的复选框`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': '数量',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': '减少数量',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': '增加数量',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `显示 ${data?.pagination?.totalResults} 条结果
                ${data?.search?.query ? `，关于 <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `产品网格中当前显示 ${data?.pagination?.totalResults} 项`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `未找到 <em>"${data?.search?.originalQuery?.string}"</em> 的结果，现改为显示 <em>"${data?.search?.query?.string}"</em> 的结果。`;
			},
			attributes: {
				'aria-label': (data) => `未找到 ${data?.search?.originalQuery?.string} 的结果，现改为显示 ${data?.search?.query?.string} 的结果`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    未找到 <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span> 的结果。
                </span>`
						: `<span>未找到结果。</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `未找到 ${data?.search?.query?.string} 的结果`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `您是指 <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>？`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `我们未能找到与"<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>"完全匹配的结果，但以下是一些相似内容：`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `建议`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">检查拼写错误。</li><li class="ss__no-results__suggestions__list__option">删除任何多余的关键词（例如："产品"）。</li><li class="ss__no-results__suggestions__list__option">使用其他词语描述您要查找的内容。</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': '图片库',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': '缩小',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': '放大',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': '关闭图片库',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': '上一张图片',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': '下一张图片',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': '快速预览',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': '关闭快速预览',
			},
		},
		addToCartButton: {
			value: '加入购物车',
		},
		moreInfoButton: {
			value: '更多信息',
		},
		loadingText: {
			value: '加载中…',
		},
	},
};
