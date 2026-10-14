const t = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: '关闭自动完成', attributes: { 'aria-label': '关闭自动完成' } },
		noResultsText: {
			value: (e) =>
				`<p>未找到"${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}"的结果。</p><p>请尝试其他搜索。</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`查看 ${e?.controller?.store?.pagination.totalResults} 条${e?.controller?.store?.filters.length > 0 ? '已筛选' : ''}结果，关于"${
					e?.controller?.store?.search?.query?.string
				}"`,
		},
	},
	'terms.history': {
		title: { value: '历史记录' },
		term: { attributes: { 'aria-label': (e) => `第 ${e.index + 1} 项，共 ${e.numberOfTerms} 项，${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: '建议' },
		term: { attributes: { 'aria-label': (e) => `第 ${e.index + 1} 项，共 ${e.numberOfTerms} 项，${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: '热门' },
		term: { attributes: { 'aria-label': (e) => `第 ${e.index + 1} 项，共 ${e.numberOfTerms} 项，${e.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: { titleText: { value: '筛选条件' }, applyButtonText: { value: '应用' }, clearButtonText: { value: '清除全部' }, closeButtonText: {} },
	searchInput: {
		placeholderText: { attributes: { placeholder: '搜索' } },
		closeSearchButton: { attributes: { 'aria-label': '关闭搜索' } },
		clearSearchButton: { attributes: { 'aria-label': '清除搜索' } },
		submitSearchButton: { attributes: { 'aria-label': '提交搜索' } },
	},
	recommendationBundle: {
		seedText: { value: '此产品' },
		ctaButtonText: { value: '全部加入购物车' },
		ctaButtonSuccessText: { value: '套装已添加！' },
		ctaSubtotalTitle: { value: (e) => `${e.cartStore.count} 件商品的小计` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? '暂停' : '播放'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? '暂停幻灯片放映' : '继续幻灯片放映') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `转到第 ${e.index + 1} 组幻灯片，共 ${e.totalDots} 组` } },
		nextButton: { attributes: { 'aria-label': (e) => `下一张幻灯片${e.isNextDisabled ? '（已禁用）' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `上一张幻灯片${e.isPrevDisabled ? '（已禁用）' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `点击查看 ${e.imageAlt}` : `${e.imageAlt} 第 ${e.index + 1} 张，共 ${e.slidesLength} 张`),
			},
		},
		srInstructions: {
			value: (e) =>
				`使用方向键在幻灯片之间导航。按空格键暂停自动播放。按 Home 或 End 键跳转到第一组或最后一组幻灯片。 ${
					e.touchDragging && '在触摸设备上，向左或向右滑动即可导航。'
				}`,
		},
	},
	sortBy: { label: { value: '排序方式' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': '结果标签页' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `，${e.resultCount} 条结果` : ''}` },
		},
	},
	perPage: { label: { value: '每页显示' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.field} 筛选下拉菜单，当前${e?.selectedFacet?.field === e?.facet?.field ? '已收起' : '已展开'}，${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' 个选项' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: '当前筛选条件' },
		clearAllLabel: { value: '清除全部', attributes: { 'aria-label': '清除全部' } },
		noFiltersText: { value: '未应用筛选条件' },
	},
	facet: {
		showMoreText: { value: '显示更多' },
		showLessText: { value: '显示较少' },
		clearAllText: { value: '清除全部' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label} 筛选下拉菜单，当前${e?.facet?.collapsed ? '已收起' : '已展开'}，${
						e?.facet?.values?.length ? e?.facet?.values?.length + ' 个选项' : ''
					}`,
			},
		},
		submitRangeButton: { value: '提交' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`${e?.label} 下拉菜单，${e?.options?.length} 个选项${
						e?.selectedOptions?.length ? `，当前选中的选项是 ${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: { radio: { attributes: { 'aria-label': (e) => `${e?.disabled ? '已禁用' : ''} ${e?.checkedState ? '已选中' : '未选中'}的单选按钮` } } },
	pagination: {
		previous: { attributes: { 'aria-label': '转到上一页' } },
		next: { attributes: { 'aria-label': '转到下一页' } },
		first: { attributes: { 'aria-label': '转到第一页' } },
		last: { attributes: { 'aria-label': (e) => `转到最后一页 ${e?.pagination?.last?.number}` } },
		page: { attributes: { 'aria-label': (e) => `转到第 ${e?.page?.number} 页` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} 件产品` } },
	result: {
		addToCartButtonText: { value: '全部加入购物车', attributes: { 'aria-label': '全部加入购物车' } },
		addToCartButtonSuccessText: { value: '已添加！' },
		quickviewButtonText: { value: '快速预览', attributes: { 'aria-label': '快速预览' } },
	},
	overlayResult: {
		addToCartButtonText: { value: '全部加入购物车', attributes: { 'aria-label': '全部加入购物车' } },
		addToCartButtonSuccessText: { value: '已添加！' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': '加载更多' } },
		progressText: { value: (e) => `您已浏览 ${e?.pagination?.end} 件，共 ${e?.pagination?.totalResults} 件产品` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: '收起' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `移除已选筛选条件 ${e?.label} ${e?.value}` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label} 滑块，当前值 ${e?.value}，${e?.facet?.range?.low ? `最小值 ${e?.facet?.range?.low}，` : ''} ${
						e?.facet?.range?.high ? `最大值 ${e?.facet?.range?.high}` : ''
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
							? `移除已选筛选条件 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `按 ${e?.facet?.label} - ${e?.value?.label} 筛选`
							: `按 ${e?.value?.label} 筛选`
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
							? `移除已选筛选条件 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `按 ${e?.facet?.label} - ${e?.value?.label} 筛选`
							: `按 ${e?.value?.label} 筛选`
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
							? `移除已选筛选条件 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `按 ${e?.facet?.label} - ${e?.value?.label} 筛选`
							: `按 ${e?.value?.label} 筛选`
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
							? `移除已选筛选条件 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `按 ${e?.facet?.label} - ${e?.value?.label} 筛选`
							: `按 ${e?.value?.label} 筛选`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>警告：&nbsp;</b>' },
		infoText: { value: '<b>信息：&nbsp;</b>' },
		errorText: { value: '<b>错误：&nbsp;</b>' },
		reloadText: { value: '重新加载' },
	},
	checkbox: { checkbox: { attributes: { 'aria-label': (e) => `${e?.disabled ? '已禁用' : ''} ${e?.checkedState ? '已选中' : '未选中'}的复选框` } } },
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': '数量' } },
		decrementButton: { attributes: { 'aria-label': '减少数量' } },
		incrementButton: { attributes: { 'aria-label': '增加数量' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `显示 ${e?.pagination?.totalResults} 条结果
                ${e?.search?.query ? `，关于 <span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>` : ''}`,
			attributes: { 'aria-label': (e) => `产品网格中当前显示 ${e?.pagination?.totalResults} 项` },
		},
		correctedQueryText: {
			value: (e) => `未找到 <em>"${e?.search?.originalQuery?.string}"</em> 的结果，现改为显示 <em>"${e?.search?.query?.string}"</em> 的结果。`,
			attributes: { 'aria-label': (e) => `未找到 ${e?.search?.originalQuery?.string} 的结果，现改为显示 ${e?.search?.query?.string} 的结果` },
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    未找到 <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span> 的结果。
                </span>`
						: '<span>未找到结果。</span>'
				}`,
			attributes: { 'aria-label': (e) => `未找到 ${e?.search?.query?.string} 的结果` },
		},
		didYouMeanText: { value: (e) => `您是指 <a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>？` },
		expandedSearchText: {
			value: (e) =>
				`我们未能找到与"<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>"完全匹配的结果，但以下是一些相似内容：`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: '建议' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">检查拼写错误。</li><li class="ss__no-results__suggestions__list__option">删除任何多余的关键词（例如："产品"）。</li><li class="ss__no-results__suggestions__list__option">使用其他词语描述您要查找的内容。</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': '图片库' } },
		zoomOutButton: { attributes: { 'aria-label': '缩小' } },
		zoomInButton: { attributes: { 'aria-label': '放大' } },
		closeButton: { attributes: { 'aria-label': '关闭图片库' } },
		prevButton: { attributes: { 'aria-label': '上一张图片' } },
		nextButton: { attributes: { 'aria-label': '下一张图片' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': '快速预览' } },
		closeButton: { attributes: { 'aria-label': '关闭快速预览' } },
		addToCartButton: { value: '加入购物车' },
		moreInfoButton: { value: '更多信息' },
		loadingText: { value: '加载中…' },
	},
};
export { t as zh };
