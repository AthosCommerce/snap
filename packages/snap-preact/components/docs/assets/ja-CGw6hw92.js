const t = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: { value: 'オートコンプリートを閉じる', attributes: { 'aria-label': 'オートコンプリートを閉じる' } },
		noResultsText: {
			value: (e) =>
				`<p>"${
					e.controller?.store?.search?.originalQuery?.string || e.controller?.store?.search?.query?.string
				}"の検索結果が見つかりませんでした。</p><p>別のキーワードでお試しください。</p>`,
		},
		seeMoreButton: {
			value: (e) =>
				`"${e?.controller?.store?.search?.query?.string}"の${e?.controller?.store?.filters.length > 0 ? '絞り込み' : ''}検索結果 ${
					e?.controller?.store?.pagination.totalResults
				} 件を表示`,
		},
	},
	'terms.history': {
		title: { value: '履歴' },
		term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms}件中${e.index + 1}件目、${e.term.value}` } },
	},
	'terms.suggestions': {
		title: { value: '候補' },
		term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms}件中${e.index + 1}件目、${e.term.value}` } },
	},
	'terms.trending': {
		title: { value: 'トレンド' },
		term: { attributes: { 'aria-label': (e) => `${e.numberOfTerms}件中${e.index + 1}件目、${e.term.value}` } },
	},
	button: {},
	search: {},
	searchHorizontal: {},
	searchCollapsible: {},
	list: {},
	radioList: {},
	layoutSelector: { label: {} },
	sidebar: { titleText: { value: '絞り込み' }, applyButtonText: { value: '適用' }, clearButtonText: { value: 'すべてクリア' }, closeButtonText: {} },
	searchInput: {
		placeholderText: { attributes: { placeholder: '検索' } },
		closeSearchButton: { attributes: { 'aria-label': '検索を閉じる' } },
		clearSearchButton: { attributes: { 'aria-label': '検索をクリア' } },
		submitSearchButton: { attributes: { 'aria-label': '検索を実行' } },
	},
	recommendationBundle: {
		seedText: { value: 'この商品' },
		ctaButtonText: { value: 'すべてカートに追加' },
		ctaButtonSuccessText: { value: 'セットを追加しました！' },
		ctaSubtotalTitle: { value: (e) => `${e.cartStore.count} 点の小計` },
	},
	slideshow: {
		pauseButton: {
			value: (e) => (e.isPlaying ? '一時停止' : '再生'),
			attributes: { 'aria-label': (e) => (e.isPlaying ? 'スライドショーを一時停止' : 'スライドショーを再開') },
		},
		paginationButton: { attributes: { 'aria-label': (e) => `${e.totalDots}グループ中${e.index + 1}番目のスライドグループに移動` } },
		nextButton: { attributes: { 'aria-label': (e) => `次のスライド${e.isNextDisabled ? '（無効）' : ''}` } },
		prevButton: { attributes: { 'aria-label': (e) => `前のスライド${e.isPrevDisabled ? '（無効）' : ''}` } },
		slide: {
			attributes: {
				'aria-label': (e) => (e.hasClickHandler ? `クリックして${e.imageAlt}を表示` : `${e.imageAlt} ${e.slidesLength}枚中${e.index + 1}枚目`),
			},
		},
		srInstructions: {
			value: (e) =>
				`矢印キーでスライド間を移動できます。スペースキーで自動再生を一時停止します。Home キーまたは End キーで最初または最後のスライドグループに移動します。 ${
					e.touchDragging && 'タッチデバイスでは、左右にスワイプして移動できます。'
				}`,
		},
	},
	sortBy: { label: { value: '並び替え' } },
	tabSelection: {
		tabList: { attributes: { 'aria-label': '結果タブ' } },
		tabButton: {
			attributes: { 'aria-label': (e) => `${e.tab.label || e.tab.id}${typeof e.resultCount == 'number' ? `、${e.resultCount}件の結果` : ''}` },
		},
	},
	perPage: { label: { value: '表示件数' } },
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.field}フィルタードロップダウン、現在${e?.selectedFacet?.field === e?.facet?.field ? '折りたたみ' : '展開'}中 ${
						e?.facet?.values?.length ? e?.facet?.values?.length + '個の選択肢' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: { value: '現在のフィルター' },
		clearAllLabel: { value: 'すべてクリア', attributes: { 'aria-label': 'すべてクリア' } },
		noFiltersText: { value: 'フィルターは適用されていません' },
	},
	facet: {
		showMoreText: { value: 'もっと見る' },
		showLessText: { value: '表示を減らす' },
		clearAllText: { value: 'すべてクリア' },
		dropdownButton: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label}フィルタードロップダウン、現在${e?.facet?.collapsed ? '折りたたみ' : '展開'}中 ${
						e?.facet?.values?.length ? e?.facet?.values?.length + '個の選択肢' : ''
					}`,
			},
		},
		submitRangeButton: { value: '送信' },
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (e) =>
					`${e?.label}ドロップダウン、${e?.options?.length}個の選択肢${
						e?.selectedOptions?.length ? `、現在選択中のオプションは${e?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: { attributes: { 'aria-label': (e) => `${e?.disabled ? '無効化された' : ''}${e?.checkedState ? '選択済みの' : '未選択の'}ラジオボタン` } },
	},
	pagination: {
		previous: { attributes: { 'aria-label': '前のページに移動' } },
		next: { attributes: { 'aria-label': '次のページに移動' } },
		first: { attributes: { 'aria-label': '最初のページに移動' } },
		last: { attributes: { 'aria-label': (e) => `最後のページ ${e?.pagination?.last?.number} に移動` } },
		page: { attributes: { 'aria-label': (e) => `${e?.page?.number}ページ目に移動` } },
	},
	paginationInfo: { infoText: { value: ({ pagination: e }) => `${e?.totalResults} 件の商品` } },
	result: {
		addToCartButtonText: { value: 'すべてカートに追加', attributes: { 'aria-label': 'すべてカートに追加' } },
		addToCartButtonSuccessText: { value: '追加しました！' },
		quickviewButtonText: { value: 'クイックビュー', attributes: { 'aria-label': 'クイックビュー' } },
	},
	overlayResult: {
		addToCartButtonText: { value: 'すべてカートに追加', attributes: { 'aria-label': 'すべてカートに追加' } },
		addToCartButtonSuccessText: { value: '追加しました！' },
	},
	loadMore: {
		loadMoreButton: { attributes: { 'aria-label': 'もっと読み込む' } },
		progressText: { value: (e) => `${e?.pagination?.totalResults} 件中 ${e?.pagination?.end} 件を表示済み` },
	},
	grid: { showMoreText: { value: (e) => `+ ${e?.remainder}` }, showLessText: { value: '閉じる' } },
	filter: { filter: { attributes: { 'aria-label': (e) => `${e?.label ? `選択中のフィルター ${e?.label} ${e?.value} を削除` : e?.value || ''}` } } },
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (e) =>
					`${e?.facet?.label}スライダーハンドル、現在の値 ${e?.value}、${e?.facet?.range?.low ? `最小値 ${e?.facet?.range?.low}、` : ''} ${
						e?.facet?.range?.high ? `最大値 ${e?.facet?.range?.high}` : ''
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
							? `選択中のフィルターを削除 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} で絞り込む`
							: `${e?.value?.label} で絞り込む`
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
							? `選択中のフィルターを削除 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} で絞り込む`
							: `${e?.value?.label} で絞り込む`
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
							? `選択中のフィルターを削除 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} で絞り込む`
							: `${e?.value?.label} で絞り込む`
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
							? `選択中のフィルターを削除 ${e?.facet?.label || ''} - ${e?.value?.label}`
							: e?.facet?.label
							? `${e?.facet?.label} - ${e?.value?.label} で絞り込む`
							: `${e?.value?.label} で絞り込む`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: { value: '<b>警告：&nbsp;</b>' },
		infoText: { value: '<b>情報：&nbsp;</b>' },
		errorText: { value: '<b>エラー：&nbsp;</b>' },
		reloadText: { value: '再読み込み' },
	},
	checkbox: {
		checkbox: {
			attributes: { 'aria-label': (e) => `${e?.disabled ? '無効化された' : ''}${e?.checkedState ? '選択済みの' : '未選択の'}チェックボックス` },
		},
	},
	quantityPicker: {
		quantityInput: { attributes: { 'aria-label': '数量' } },
		decrementButton: { attributes: { 'aria-label': '数量を減らす' } },
		incrementButton: { attributes: { 'aria-label': '数量を増やす' } },
	},
	searchHeader: {
		titleText: {
			value: (e) => `${e?.pagination?.totalResults} 件の結果を表示
                ${e?.search?.query ? `<span class="ss__search-header__results-query">"${e?.search?.query.string}"</span>の検索結果` : ''}`,
			attributes: { 'aria-label': (e) => `商品グリッドに ${e?.pagination?.totalResults} 件のアイテムを表示中` },
		},
		correctedQueryText: {
			value: (e) =>
				`<em>"${e?.search?.originalQuery?.string}"</em>の検索結果が見つからなかったため、代わりに<em>"${e?.search?.query?.string}"</em>の検索結果を表示しています。`,
			attributes: {
				'aria-label': (e) =>
					`${e?.search?.originalQuery?.string}の検索結果が見つからなかったため、代わりに${e?.search?.query?.string}の検索結果を表示しています`,
			},
		},
		noResultsText: {
			value: (e) =>
				`${
					e?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${e?.search?.query?.string}"</span>の検索結果が見つかりませんでした。
                </span>`
						: '<span>検索結果が見つかりませんでした。</span>'
				}`,
			attributes: { 'aria-label': (e) => `${e?.search?.query?.string}の検索結果が見つかりませんでした` },
		},
		didYouMeanText: { value: (e) => `もしかして<a href=${e?.search?.didYouMean?.url.href}>${e?.search?.didYouMean?.string}</a>ですか？` },
		expandedSearchText: {
			value: (e) =>
				`"<span class="ss__search-header__results-query">${e?.search?.query?.string}</span>"に完全に一致する結果は見つかりませんでしたが、類似の結果は次のとおりです：`,
		},
	},
	noResults: {
		suggestionsTitleText: { value: '候補' },
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">スペルミスがないか確認してください。</li><li class="ss__no-results__suggestions__list__option">余分なキーワード（例："商品"）を削除してください。</li><li class="ss__no-results__suggestions__list__option">別の言葉でお探しの内容を表現してみてください。</li></ul>',
		},
	},
	gallery: {
		gallery: { attributes: { 'aria-label': '画像ギャラリー' } },
		zoomOutButton: { attributes: { 'aria-label': '縮小' } },
		zoomInButton: { attributes: { 'aria-label': '拡大' } },
		closeButton: { attributes: { 'aria-label': 'ギャラリーを閉じる' } },
		prevButton: { attributes: { 'aria-label': '前の画像' } },
		nextButton: { attributes: { 'aria-label': '次の画像' } },
	},
	quickviewLayout: {
		quickview: { attributes: { 'aria-label': 'クイックビュー' } },
		closeButton: { attributes: { 'aria-label': 'クイックビューを閉じる' } },
		addToCartButton: { value: 'カートに追加' },
		moreInfoButton: { value: '詳細情報' },
		loadingText: { value: '読み込み中…' },
	},
};
export { t as ja };
