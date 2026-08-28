// Korean (한국어)
import type { ValueFacet } from '@athoscommerce/snap-store-mobx';
import { LangComponents } from '../../../../../components/src';

export const ko: LangComponents = {
	recommendation: {},
	autocompleteLayout: {
		facetsTitle: {},
		contentTitle: {},
		closeButton: {
			value: '자동완성 닫기',
			attributes: {
				'aria-label': '자동완성 닫기',
			},
		},
		noResultsText: {
			value: (data) =>
				`<p>"${
					data.controller?.store?.search?.originalQuery?.string || data.controller?.store?.search?.query?.string
				}"에 대한 검색 결과가 없습니다.</p><p>다른 검색어를 시도해 보세요.</p>`,
		},
		seeMoreButton: {
			value: (data) =>
				`"${data?.controller?.store?.search?.query?.string}"에 대한 ${data?.controller?.store?.filters.length > 0 ? '필터링된 ' : ''}결과 ${
					data?.controller?.store?.pagination.totalResults
				}개 보기`,
		},
	},
	'terms.history': {
		title: {
			value: '기록',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms}개 중 ${data.index + 1}번째 항목, ${data.term.value}`,
			},
		},
	},
	'terms.suggestions': {
		title: {
			value: '추천 검색어',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms}개 중 ${data.index + 1}번째 항목, ${data.term.value}`,
			},
		},
	},
	'terms.trending': {
		title: {
			value: '인기 검색어',
		},
		term: {
			attributes: {
				'aria-label': (data) => `${data.numberOfTerms}개 중 ${data.index + 1}번째 항목, ${data.term.value}`,
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
			value: '필터',
		},
		applyButtonText: {
			value: '적용',
		},
		clearButtonText: {
			value: '모두 지우기',
		},
		closeButtonText: {},
	},
	searchInput: {
		placeholderText: {
			attributes: {
				placeholder: '검색',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': '검색 닫기',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': '검색어 지우기',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': '검색 제출',
			},
		},
	},
	recommendationBundle: {
		seedText: {
			value: '이 제품',
		},
		ctaButtonText: {
			value: '모두 장바구니에 담기',
		},
		ctaButtonSuccessText: {
			value: '번들이 추가되었습니다!',
		},
		ctaSubtotalTitle: {
			value: (data) => `${data.cartStore.count}개 항목 소계`,
		},
	},
	slideshow: {
		pauseButton: {
			value: (data) => (data.isPlaying ? '일시정지' : '재생'),
			attributes: {
				'aria-label': (data) => (data.isPlaying ? '슬라이드쇼 일시정지' : '슬라이드쇼 재개'),
			},
		},
		paginationButton: {
			attributes: {
				'aria-label': (data) => `${data.totalDots}개 중 ${data.index + 1}번째 슬라이드 그룹으로 이동`,
			},
		},
		nextButton: {
			attributes: {
				'aria-label': (data) => `다음 슬라이드${data.isNextDisabled ? ' (비활성화됨)' : ''}`,
			},
		},
		prevButton: {
			attributes: {
				'aria-label': (data) => `이전 슬라이드${data.isPrevDisabled ? ' (비활성화됨)' : ''}`,
			},
		},
		slide: {
			attributes: {
				'aria-label': (data) =>
					data.hasClickHandler ? `클릭하여 ${data.imageAlt} 보기` : `${data.imageAlt} ${data.slidesLength}개 중 ${data.index + 1}번째`,
			},
		},
		srInstructions: {
			value: (data) =>
				`화살표 키를 사용하여 슬라이드 간을 이동하세요. 스페이스바를 눌러 자동 재생을 일시정지합니다. Home 또는 End 키를 눌러 첫 번째 또는 마지막 슬라이드 그룹으로 이동합니다.${' '}${
					data.touchDragging && '터치 기기에서는 왼쪽 또는 오른쪽으로 스와이프하여 이동할 수 있습니다.'
				}`,
		},
	},
	sortBy: {
		label: {
			value: '정렬 기준',
		},
	},
	tabSelection: {
		tabList: {
			attributes: {
				'aria-label': '결과 탭',
			},
		},
		tabButton: {
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}${typeof data.resultCount == 'number' ? `, 결과 ${data.resultCount}개` : ''}`,
			},
		},
	},
	perPage: {
		label: {
			value: '페이지당 표시 개수',
		},
	},
	facetsHorizontal: {
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.field} 필터 드롭다운, 현재 ${data?.selectedFacet?.field === data?.facet?.field ? '접힘' : '펼쳐짐'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + '개 선택 항목' : ''
					}`,
			},
		},
	},
	filterSummary: {
		title: {
			value: '현재 필터',
		},
		clearAllLabel: {
			value: '모두 지우기',
		},
	},
	facet: {
		showMoreText: {
			value: '더 보기',
		},
		showLessText: {
			value: '간략히 보기',
		},
		clearAllText: {
			value: '모두 지우기',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} 필터 드롭다운, 현재 ${data?.facet?.collapsed ? '접힘' : '펼쳐짐'} ${
						(data?.facet as ValueFacet)?.values?.length ? (data?.facet as ValueFacet)?.values?.length + '개 선택 항목' : ''
					}`,
			},
		},
		submitRangeButton: {
			value: '제출',
		},
	},
	select: {
		buttonLabel: {
			attributes: {
				'aria-label': (data) =>
					`${data?.label} 드롭다운, 선택 항목 ${data?.options?.length}개 ${
						data?.selectedOptions?.length ? `, 현재 선택된 옵션은 ${data?.selectedOptions[0].label}입니다` : ''
					}`,
			},
		},
	},
	radio: {
		radio: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? '비활성화된' : ''} ${data?.checkedState ? '선택된' : '선택되지 않은'} 라디오 버튼`,
			},
		},
	},
	pagination: {
		previous: {
			attributes: {
				'aria-label': '이전 페이지로 이동',
			},
		},
		next: {
			attributes: {
				'aria-label': '다음 페이지로 이동',
			},
		},
		first: {
			attributes: {
				'aria-label': '첫 페이지로 이동',
			},
		},
		last: {
			attributes: {
				'aria-label': (data) => `마지막 페이지 ${data?.pagination?.last?.number}로 이동`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `${data?.page?.number}페이지로 이동`,
			},
		},
	},
	paginationInfo: {
		infoText: {
			// TODO: add begin & end range here
			value: ({ pagination }) => `제품 ${pagination?.totalResults}개`,
		},
	},
	result: {
		addToCartButtonText: {
			value: '모두 장바구니에 담기',
		},
		addToCartButtonSuccessText: {
			value: '추가되었습니다!',
		},
		quickviewButtonText: {
			value: '빠른 보기',
		},
	},
	overlayResult: {
		addToCartButtonText: {
			value: '모두 장바구니에 담기',
		},
		addToCartButtonSuccessText: {
			value: '추가되었습니다!',
		},
	},
	loadMore: {
		loadMoreButton: {
			attributes: {
				'aria-label': '더 불러오기',
			},
		},
		progressText: {
			value: (data) => `${data?.pagination?.totalResults}개 중 ${data?.pagination?.end}개를 확인했습니다`,
		},
	},
	grid: {
		showMoreText: {
			value: (data) => `+ ${data?.remainder}`,
		},
		showLessText: {
			value: '접기',
		},
	},
	filter: {
		filter: {
			attributes: {
				'aria-label': (data) => `${!data?.label ? data?.value || '' : `선택된 필터 ${data?.label} ${data?.value} 제거`}`,
			},
		},
	},
	facetSlider: {
		sliderHandle: {
			attributes: {
				'aria-label': (data) =>
					`${data?.facet?.label} 슬라이더 핸들, 현재 값 ${data?.value}, ${data?.facet?.range?.low ? `최솟값 ${data?.facet?.range?.low},` : ``} ${
						data?.facet?.range?.high ? `최댓값 ${data?.facet?.range?.high}` : ``
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
							? `선택된 필터 제거 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label}로 필터링`
							: `${data?.value?.label}로 필터링`
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
							? `선택된 필터 제거 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label}로 필터링`
							: `${data?.value?.label}로 필터링`
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
							? `선택된 필터 제거 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label}로 필터링`
							: `${data?.value?.label}로 필터링`
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
							? `선택된 필터 제거 ${data?.facet?.label || ''} - ${data?.value?.label}`
							: data?.facet?.label
							? `${data?.facet?.label} - ${data?.value?.label}로 필터링`
							: `${data?.value?.label}로 필터링`
					}`,
			},
		},
	},
	errorHandler: {
		warningText: {
			value: `<b>경고:&nbsp;</b>`,
		},
		infoText: {
			value: `<b>정보:&nbsp;</b>`,
		},
		errorText: {
			value: `<b>오류:&nbsp;</b>`,
		},
		reloadText: {
			value: `다시 불러오기`,
		},
	},
	checkbox: {
		checkbox: {
			attributes: {
				'aria-label': (data) => `${data?.disabled ? '비활성화된' : ''} ${data?.checkedState ? '선택된' : '선택되지 않은'} 체크박스`,
			},
		},
	},
	quantityPicker: {
		quantityInput: {
			attributes: {
				'aria-label': '수량',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': '수량 감소',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': '수량 증가',
			},
		},
	},
	searchHeader: {
		titleText: {
			value: (data) => {
				return `결과 ${data?.pagination?.totalResults}개 표시 중
                ${data?.search?.query ? `<span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>에 대한` : ''}`;
			},
			attributes: {
				'aria-label': (data) => `제품 그리드에 ${data?.pagination?.totalResults}개 항목을 표시하고 있습니다`,
			},
		},
		correctedQueryText: {
			value: (data) => {
				return `<em>"${data?.search?.originalQuery?.string}"</em>에 대한 결과를 찾을 수 없어 대신 <em>"${data?.search?.query?.string}"</em>에 대한 결과를 표시합니다.`;
			},
			attributes: {
				'aria-label': (data) =>
					`${data?.search?.originalQuery?.string}에 대한 결과를 찾을 수 없어 대신 ${data?.search?.query?.string}에 대한 결과를 표시합니다`,
			},
		},
		noResultsText: {
			value: (data) => {
				return `${
					data?.search?.query
						? `<span>
                    <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>에 대한 결과를 찾을 수 없습니다.
                </span>`
						: `<span>결과를 찾을 수 없습니다.</span>`
				}`;
			},
			attributes: {
				'aria-label': (data) => `${data?.search?.query?.string}에 대한 결과를 찾을 수 없습니다`,
			},
		},
		didYouMeanText: {
			value: (data) => {
				return `혹시 <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>을(를) 찾으셨나요?`;
			},
		},
		expandedSearchText: {
			value: (data) => {
				return `"<span class="ss__search-header__results-query">${data?.search?.query?.string}</span>"에 대한 정확히 일치하는 결과를 찾을 수 없었지만, 비슷한 결과는 다음과 같습니다:`;
			},
		},
	},
	noResults: {
		suggestionsTitleText: {
			value: `추천 검색어`,
		},
		suggestionsList: {
			value:
				'<ul class="ss__no-results__suggestions__list"><li class="ss__no-results__suggestions__list__option">철자가 틀리지 않았는지 확인하세요.</li><li class="ss__no-results__suggestions__list__option">불필요한 키워드(예: "제품")를 제거하세요.</li><li class="ss__no-results__suggestions__list__option">찾으시는 내용을 다른 단어로 표현해 보세요.</li></ul>',
		},
	},
	gallery: {
		gallery: {
			attributes: {
				'aria-label': '이미지 갤러리',
			},
		},
		zoomOutButton: {
			attributes: {
				'aria-label': '축소',
			},
		},
		zoomInButton: {
			attributes: {
				'aria-label': '확대',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': '갤러리 닫기',
			},
		},
		prevButton: {
			attributes: {
				'aria-label': '이전 이미지',
			},
		},
		nextButton: {
			attributes: {
				'aria-label': '다음 이미지',
			},
		},
	},
	quickviewLayout: {
		quickview: {
			attributes: {
				'aria-label': '빠른 보기',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': '빠른 보기 닫기',
			},
		},
		addToCartButton: {
			value: '장바구니에 담기',
		},
		moreInfoButton: {
			value: '자세히 보기',
		},
		loadingText: {
			value: '로딩 중…',
		},
	},
};
