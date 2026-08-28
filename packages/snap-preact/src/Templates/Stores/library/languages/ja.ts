// Japanese (日本語)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const ja: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: 'オートコンプリートを閉じる',
			attributes: {
				'aria-label': 'オートコンプリートを閉じる',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>"${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}"の検索結果が見つかりませんでした。</p><p>別のキーワードでお試しください。</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`"${data?.controller?.store?.search?.query?.string}"の${data?.controller?.store?.filters.length > 0 ? '絞り込み' : ''}検索結果 ${
					data?.controller?.store?.pagination.totalResults
				} 件を表示`,
		},
	},
	'terms.history': {
		title: {
			value: '履歴',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms}件中${data.index + 1}件目、${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: '候補',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms}件中${data.index + 1}件目、${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: 'トレンド',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms}件中${data.index + 1}件目、${data.term.value}`,
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
			value: '絞り込み',
		},
		applyButtonText: {
			value: '適用',
		},
		clearButtonText: {
			value: 'すべてクリア',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: '検索',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': '検索を閉じる',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': '検索をクリア',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': '検索を実行',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: 'この商品',
		},
		ctaButtonText: {
			value: 'すべてカートに追加',
		},
		ctaButtonSuccessText: {
			value: 'セットを追加しました！',
		},
		ctaSubtotalTitle: {
			value: (data) => `${data.cartStore.count} 点の小計`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? '一時停止' : '再生'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? 'スライドショーを一時停止' : 'スライドショーを再開'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `${data.totalDots}グループ中${data.index + 1}番目のスライドグループに移動`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `次のスライド${data.isNextDisabled ? '（無効）' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `前のスライド${data.isPrevDisabled ? '（無効）' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `クリックして${data.imageAlt}を表示` : `${data.imageAlt} ${data.slidesLength}枚中${data.index + 1}枚目`,
			},
		},
		srInstructions: {
			value: (data) =>
				`矢印キーでスライド間を移動できます。スペースキーで自動再生を一時停止します。Home キーまたは End キーで最初または最後のスライドグループに移動します。${' '}${
					data.touchDragging && 'タッチデバイスでは、左右にスワイプして移動できます。'
				}`,
		},
	},
	sortBy: {
		label: {
			value: '並び替え',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': '結果タブ',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `、${data.resultCount}件の結果` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: '表示件数',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.field}フィルタードロップダウン、現在${data?.selectedFacet?.field === data?.facet?.field ? '折りたたみ' : '展開'}中 ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + '個の選択肢' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: '現在のフィルター',
		},
		clearAllLabel: {
			value: 'すべてクリア',
		},
	},
	facet: {
		showMoreText: {
			value: 'もっと見る',
		},
		showLessText: {
			value: '表示を減らす',
		},
		clearAllText: {
			value: 'すべてクリア',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label}フィルタードロップダウン、現在${data?.facet?.collapsed ? '折りたたみ' : '展開'}中 ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + '個の選択肢' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: '送信',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label}ドロップダウン、${data?.options?.length}個の選択肢${
						data?.selectedOptions?.length ? `、現在選択中のオプションは${data?.selectedOptions[0].label}` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? '無効化された' : ''}${data?.checkedState ? '選択済みの' : '未選択の'}ラジオボタン`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': '前のページに移動',
			},
		},
		next: {
			attributes: {
				'aria-label': '次のページに移動',
			},
		},
		first: {
			attributes: {
				'aria-label': '最初のページに移動',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `最後のページ ${data?.pagination?.last?.number} に移動`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `${data?.page?.number}ページ目に移動`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `${pagination?.totalResults} 件の商品`,
		},
	},
	result: {
		addToCartButtonText: {
			value: 'すべてカートに追加',
			attributes: {
				'aria-label': 'すべてカートに追加',
			},
		},
		addToCartButtonSuccessText: {
			value: '追加しました！',
		},
		quickviewButtonText: {
			value: 'クイックビュー',
			attributes: {
				'aria-label': 'クイックビュー',
			},
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: 'すべてカートに追加',
			attributes: {
				'aria-label': 'すべてカートに追加',
			},
		},
		addToCartButtonSuccessText: {
			value: '追加しました！',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': 'もっと読み込む',
			},
		},
		progressText: {
			value: (data) => `${data?.pagination?.totalResults} 件中 ${data?.pagination?.end} 件を表示済み`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: '閉じる',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `選択中のフィルター ${data?.label} ${data?.value} を削除`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label}スライダーハンドル、現在の値 ${data?.value}、${
						data?.facet?.range?.low ? `最小値 ${data?.facet?.range?.low}、` : ``
					} ${data?.facet?.range?.high ? `最大値 ${data?.facet?.range?.high}` : ``}`,
			},
		},
	},
	facetPaletteOptions: {
		paletteOption: {
			attributes: {
				'aria-label': (data) =>
					`${
						data?.value?.filtered
							? `選択中のフィルターを削除 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} で絞り込む`
							: `${data?.value?.label} で絞り込む`
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
							? `選択中のフィルターを削除 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} で絞り込む`
							: `${data?.value?.label} で絞り込む`
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
							? `選択中のフィルターを削除 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} で絞り込む`
							: `${data?.value?.label} で絞り込む`
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
							? `選択中のフィルターを削除 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label} で絞り込む`
							: `${data?.value?.label} で絞り込む`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>警告：&nbsp;</b>`,
		},
		infoText: {
			value: `<b>情報：&nbsp;</b>`,
		},
		errorText: {
			value: `<b>エラー：&nbsp;</b>`,
		},
		reloadText: {
			value: `再読み込み`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? '無効化された' : ''}${data?.checkedState ? '選択済みの' : '未選択の'}チェックボックス`,
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
				'aria-label': '数量を減らす',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': '数量を増やす',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `${data?.pagination?.totalResults} 件の結果を表示
                ${data?.search?.query ? `<span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>の検索結果` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `商品グリッドに ${data?.pagination?.totalResults} 件のアイテムを表示中`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `<em>"${data?.search?.originalQuery?.string}"</em>の検索結果が見つからなかったため、代わりに<em>"${data?.search?.query?.string}"</em>の検索結果を表示しています。`;
			},
			attributes: {
				'aria-label': (data) =>
					`${data?.search?.originalQuery?.string}の検索結果が見つからなかったため、代わりに${data?.search?.query?.string}の検索結果を表示しています`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>の検索結果が見つかりませんでした。
                </span>`
						: `<span>検索結果が見つかりませんでした。</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `${data?.search?.query?.string}の検索結果が見つかりませんでした`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `もしかして<a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>ですか？`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `"<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>"に完全に一致する結果は見つかりませんでしたが、類似の結果は次のとおりです：`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `候補`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">スペルミスがないか確認してください。</li><li class="ss__no-results__suggestions__list__option">余分なキーワード（例："商品"）を削除してください。</li><li class="ss__no-results__suggestions__list__option">別の言葉でお探しの内容を表現してみてください。</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': '画像ギャラリー',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': '縮小',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': '拡大',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'ギャラリーを閉じる',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': '前の画像',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': '次の画像',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': 'クイックビュー',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'クイックビューを閉じる',
			},
		},
		addToCartButton: {
			value: 'カートに追加',
		},
		moreInfoButton: {
			value: '詳細情報',
		},
		loadingText: {
			value: '読み込み中…',
		},
	},
};
