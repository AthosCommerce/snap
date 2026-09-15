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
	chatButton: {
		openChatButton: {
			attributes: {
				'aria-label': 'チャットを開く',
				title: 'チャットを開く',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'チャットを閉じる',
				title: 'チャットを閉じる',
			},
		},
	},
	chat: {
		openChatButton: {
			attributes: {
				'aria-label': 'チャットを開く',
				title: 'チャットを開く',
			},
		},
		closeChatButton: {
			attributes: {
				'aria-label': 'チャットを閉じる',
				title: 'チャットを閉じる',
			},
		},
		headerLogo: {
			attributes: {
				alt: 'チャットのロゴ',
			},
		},
		newChatButton: {
			attributes: {
				'aria-label': '新しいチャット',
				title: '新しいチャット',
			},
		},
		chatHistoryButton: {
			attributes: {
				'aria-label': 'チャット履歴',
				title: 'チャット履歴',
			},
		},
		historyTitle: {
			value: '履歴',
		},
		historyClearButton: {
			value: 'クリア',
		},
		historyNewChatLabel: {
			value: '新しいチャット',
		},
		sideChatRegionLabel: {
			attributes: {
				'aria-label': '会話の詳細',
			},
		},
		inspirationResultTitle: {
			value: 'インスピレーションシーン',
		},
		inspirationResultSubtitle: {
			value: '探索したいスタイルの方向性を選んでください',
		},
		productComparisonTitle: {
			value: '商品比較',
		},
		productComparisonSubtitle: {
			value: (data) => `${data?.count ?? ''} 件の商品を比較中`,
		},
		chatMessagesLabel: {
			attributes: {
				'aria-label': 'チャットメッセージ',
			},
		},
		newMessagesButton: {
			value: '新着メッセージ',
		},
		loadingVerbsProductQuery: {
			value: '思考中, 検索中, 分析中, 詳細を収集中',
		},
		loadingVerbsProductSearch: {
			value: '検索中, カタログを探索中, 商品を検索中, 結果を選定中',
		},
		loadingVerbsProductComparison: {
			value: '比較中, 分析中, 評価中, 選択肢を検討中',
		},
		loadingVerbsImageSearch: {
			value: '画像を分析中, 識別中, 検索中, 照合中',
		},
		loadingVerbsProductSimilar: {
			value: '類似商品を検索中, 検索中, 照合中, 選定中',
		},
		loadingVerbsInspirationRequest: {
			value: 'アイデアを生成中, 発想中, 選定中, インスピレーションを準備中',
		},
		feedbackPrompt: {
			value: 'これまでの体験はいかがですか？',
		},
		feedbackThanks: {
			value: 'フィードバックをありがとうございます',
		},
		feedbackThumbsUpButton: {
			attributes: {
				'aria-label': '高評価',
				title: '高評価',
			},
		},
		feedbackThumbsDownButton: {
			attributes: {
				'aria-label': '低評価',
				title: '低評価',
			},
		},
		feedbackDismissButton: {
			attributes: {
				'aria-label': 'フィードバックを閉じる',
			},
		},
		comparisonsTitle: {
			value: (data) => `商品を比較 (${data?.count ?? 0}/${data?.max ?? 0})`,
		},
		comparisonsClearButton: {
			value: 'クリア',
		},
		comparisonsAddText: {
			value: '追加',
		},
		comparisonsCompareButton: {
			value: '比較',
			attributes: {
				title: '比較',
			},
		},
		comparisonsRemoveButton: {
			attributes: {
				'aria-label': (data) => `${data?.name || '商品'}を比較から削除`,
			},
		},
		chatUnavailableMessage: {
			value: 'サービスは一時的にご利用いただけません。それまでの間は、上部の検索バーでお探しの商品を見つけてください！',
		},
		highVolumeMessage: {
			value: '現在アクセスが集中しているため、チャットをご利用いただけません。',
		},
		highVolumeSubMessage: {
			value: 'それまでの間は、上部の検索バーでお探しの商品を見つけてください！',
		},
		newSessionButton: {
			value: '新しいセッション',
		},
		facetsTitle: {
			value: '絞り込み条件：',
		},
		facetsApplyButton: {
			value: (data) => `適用 (${data?.count ?? 0})`,
		},
		facetsClearButton: {
			value: 'フィルターをクリア',
		},
		attachmentCompareTitle: {
			value: 'これらの商品を比較',
		},
		attachmentAskProductTitle: {
			value: 'この商品について質問',
		},
		attachmentImageSimilarTitle: {
			value: 'この画像に似た商品を検索：',
		},
		attachmentImageName: {
			value: '画像',
		},
		topicDriftScopeMessage: {
			value: 'お買い物のお手伝いをします',
		},
		topicDriftScopeSubMessage: {
			value: '商品、比較、おすすめについてお尋ねください',
		},
		topicDriftMessage: {
			value: '新しいものをお探しですか？',
		},
		topicDriftSubMessage: {
			value: 'より的確なサポートのために新しいセッションを開始しますか？それともこのまま続けますか？',
		},
		topicDriftDismissButton: {
			attributes: {
				'aria-label': '閉じる',
			},
		},
		inputPlaceholder: {
			value: 'メッセージを入力...',
		},
		inputPlaceholderAskProduct: {
			value: 'この商品について質問...',
		},
		inputPlaceholderCompare: {
			value: '何を比較しますか？',
		},
		inputPlaceholderComparedProducts: {
			value: '比較中の商品について質問...',
		},
		inputPlaceholderAskImage: {
			value: 'この画像について質問...',
		},
		inputPlaceholderAddCompare: {
			value: '比較する商品をもう1つ追加...',
		},
		uploadImageButton: {
			attributes: {
				'aria-label': '画像をアップロード',
				title: '画像をアップロード',
			},
		},
		sendMessageButton: {
			attributes: {
				'aria-label': 'メッセージを送信',
				title: 'メッセージを送信',
			},
		},
		dropOverlayText: {
			value: '画像をドロップしてアップロード',
		},
		poweredByText: {
			value: 'Athos Commerce 提供。',
		},
		disclaimerText: {
			value: 'AIアシスタントです。誤った回答をすることがあります。個人情報の共有はお控えください。',
		},
		privacyPolicyLinkText: {
			value: 'プライバシーポリシー',
		},
		expiredMessage: {
			value: 'このチャットは期限切れです。新しいチャットを開始してください。',
		},
	},
	chatLoadingIndicator: {
		thinkingVerb: {
			value: '思考中',
		},
		searchingVerb: {
			value: '検索中',
		},
		analyzingVerb: {
			value: '分析中',
		},
		generatingVerb: {
			value: '生成中',
		},
		processingVerb: {
			value: '処理中',
		},
	},
	chatAttachmentContext: {
		closeButton: {
			attributes: {
				'aria-label': (data) => `${data?.title ?? ''}を閉じる`,
			},
		},
		openItemButton: {
			attributes: {
				'aria-label': (data) => `${data?.item?.name ?? ''}を開く`,
			},
		},
		loadingIndicator: {
			attributes: {
				'aria-label': (data) => `${data?.item?.name ?? ''}を読み込み中`,
			},
		},
		removeButton: {
			attributes: {
				'aria-label': (data) => `${data?.item?.name ?? ''}を削除`,
			},
		},
		uploadFailedText: {
			value: (data) => `ファイルのアップロードに失敗しました - ${data?.item?.name ?? ''}`,
		},
	},
	chatInspirationResultMessage: {
		searchQueryButton: {
			attributes: {
				'aria-label': (data) => `「${data?.searchTerm ?? ''}」で検索`,
			},
		},
		openProductButton: {
			attributes: {
				'aria-label': (data) => `${data?.productName || '商品'}を開く`,
			},
		},
	},
	chatMessageText: {
		viewInspirationButton: {
			attributes: {
				'aria-label': 'インスピレーションを表示',
				title: 'インスピレーションを表示',
			},
		},
		closeInspirationButton: {
			value: 'インスピレーションを閉じる',
			attributes: {
				'aria-label': 'インスピレーションを閉じる',
				title: 'インスピレーションを閉じる',
			},
		},
		exploreInspirationButton: {
			value: 'インスピレーションシーンを探索',
			attributes: {
				'aria-label': 'インスピレーションシーンを探索',
			},
		},
		viewComparisonButton: {
			attributes: {
				'aria-label': '比較を表示',
				title: '比較を表示',
			},
		},
		closeComparisonButton: {
			value: '比較を閉じる',
			attributes: {
				'aria-label': '比較を閉じる',
				title: '比較を閉じる',
			},
		},
		exploreComparisonButton: {
			value: '比較データを探索',
			attributes: {
				'aria-label': '比較データを探索',
			},
		},
		showDetailsButton: {
			value: '詳細を表示',
			attributes: {
				'aria-label': '比較の詳細を表示',
			},
		},
	},
	chatMessageUser: {
		requestTypeProductQuery: {
			value: '商品について質問中',
		},
		requestTypeProductComparison: {
			value: '商品を比較中',
		},
		requestTypeProductFilter: {
			value: '商品を絞り込み中',
		},
		requestTypeProductSearch: {
			value: '商品を検索中',
		},
		requestTypeImageSearch: {
			value: '画像で検索中',
		},
		requestTypeProductSimilar: {
			value: '類似商品を検索中',
		},
		productAttachmentButton: {
			attributes: {
				'aria-label': (data) => `${data?.attachment?.name ?? ''}の詳細を表示`,
				title: (data) => `${data?.attachment?.name ?? ''}の詳細を表示`,
			},
		},
		facetAttachment: {
			attributes: {
				'aria-label': (data) => (data?.filterOptions?.length ? `フィルター: ${data.filterOptions[0].facetKey} = ${data.filterOptions[0].label}` : ''),
				title: (data) => (data?.filterOptions?.length ? `フィルター: ${data.filterOptions[0].facetKey} = ${data.filterOptions[0].label}` : ''),
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': (data) => `その他${data?.hiddenFacetCount ?? 0}件のフィルター`,
				title: (data) => `他${data?.hiddenFacetCount ?? 0}件のフィルター`,
			},
		},
	},
	chatProductComparisonMessage: {
		comparisonTable: {
			value: '商品比較',
			attributes: {
				'aria-label': '商品比較',
			},
		},
		featureColumnHeader: {
			attributes: {
				'aria-label': '特徴',
			},
		},
		viewProductButton: {
			attributes: {
				'aria-label': (data) => `${data?.productName ?? ''}の詳細を表示`,
			},
		},
	},
	chatProductQueryMessage: {
		loadingText: {
			value: '商品の詳細を読み込み中...',
		},
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
		backToComparisonButton: {
			value: '比較に戻る',
			attributes: {
				'aria-label': '比較に戻る',
			},
		},
		backToInspirationButton: {
			value: 'インスピレーションに戻る',
			attributes: {
				'aria-label': 'インスピレーションに戻る',
			},
		},
		addToCartButton: {
			value: 'カートに追加',
		},
		moreInfoButton: {
			value: '詳細情報',
		},
		similarButton: {
			value: '類似商品',
		},
		discussButton: {
			value: '相談する',
		},
	},
	chatResult: {
		similarButton: {
			value: '類似商品',
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}の類似商品を表示`,
			},
		},
		compareButton: {
			value: '比較',
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}を比較`,
			},
		},
		addedToComparisonButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}を比較に追加しました`,
				title: '比較に追加済み',
			},
		},
		discussButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}について相談する`,
				title: '商品について相談する',
			},
		},
		addToCartButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}をカートに追加`,
				title: 'カートに追加',
			},
		},
		configureButton: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}を設定`,
				title: '設定',
			},
		},
		productLink: {
			attributes: {
				'aria-label': (data) => `${data?.result?.display?.mappings?.core?.name || '商品'}を開く`,
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
		discussProductButton: {
			attributes: {
				'aria-label': 'この商品について相談する',
				title: 'この商品について相談する',
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
		similarButton: {
			value: '類似商品',
		},
		discussButton: {
			value: '相談する',
		},
		loadingText: {
			value: '読み込み中…',
		},
	},
};
