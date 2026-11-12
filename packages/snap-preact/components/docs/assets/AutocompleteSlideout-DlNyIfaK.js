import { o as D, u as M, m as T, A as $, c as q, s as E, y as H, j as s, l as z, F as G, d as J, C as K, e as O } from './iframe-0uTqSs9S.js';
import { l as Q, u as U, A as V } from './useAcRenderedInput-D1jL1bgl.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { S as W } from './SearchInput-Df-AktE7.js';
import { S as X } from './Slideout-DvI7vGOb.js';
import { u as Y } from './useA11y-BuGQuOJb.js';
import './preload-helper-PPVm8Dsz.js';
import './types-DqusP3LW.js';
import './useCreateController-D4sbGnnv.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-DJcYiTSS.js';
import './Terms-C1ILT-Wt.js';
import './Facets-CShzM2lt.js';
import './Facet-DQZMdX7t.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './Button-CmsiLEAv.js';
import './FacetListOptions-BKcb2oXB.js';
import './Checkbox-7fOTHZL3.js';
import './Radio-Cqas9W8s.js';
import './FacetHierarchyOptions-BF9owBak.js';
import './FacetPaletteOptions-HvPNtfKg.js';
import './names-Cka5BSlk.js';
import './Image-C3O8T0nj.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-CGgJIm7v.js';
import './FacetSlider-BBgYI5hi.js';
import './Banner-DZg3U6u9.js';
import './withTracking-Bxgx8W-i.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './FacetsHorizontal-D193PKaF.js';
import './PaginationInfo-DqP8FQYM.js';
import './SearchHeader-BHi0LQRW.js';
import './Breadcrumbs-kqze-Ojn.js';
import './LoadMore-CT03CmWA.js';
import './useIntersection--tMWEcR1.js';
import './Pagination-WVMgHxfy.js';
import './PerPage-D8pMV3P2.js';
import './Select-BGmz8t2_.js';
import './selectionKey-CmN2KTR5.js';
import './List-PZ5HrgK2.js';
import './RadioList-DsDAvIw3.js';
import './SortBy-D1lFQBNp.js';
import './LayoutSelector-Cac-plGG.js';
import './FilterSummary-D4UeoXRA.js';
import './Filter-CgxQ6G_w.js';
import './TabSelection-DwzD6qYJ.js';
import './Results-Cj_dFI-9.js';
import './useDisplaySettings-CrQOlxmk.js';
import './ResultTracker-Cu6M_iF6.js';
import './InlineBanner-c_NbPpya.js';
import './Result-DV0wVcu6.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './CalloutBadge-DXapTNdX.js';
import './Rating-ERPkfVOZ.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './Slideshow-zOCrnuUn.js';
import './Grid-BRtXjrhJ.js';
import './truncate-CqAvmyZI.js';
import './Overlay-D_0SkdOn.js';
const Z = ({}) =>
		O({
			border: '1px solid #eee',
			'& .ss__autocomplete': { position: 'relative' },
			'& .input_wrapper input': { background: '#eee' },
			'& .ss__search-input__button--close-search-icon': { border: 'none' },
		}),
	ye = D((I) => {
		const g = M(),
			t = T(
				'autocompleteSlideout',
				g,
				{
					slideDirection: 'left',
					overlayColor: 'rgba(0,0,0,0.8)',
					layout: [['button.see-more'], ['termsList'], ['tabSelection'], ['content']],
					width: '500px',
					renderInput: !0,
				},
				I
			),
			C = '';
		let e = t.input,
			p = t.buttonSelector;
		e && typeof e == 'string' && (e = document.querySelector(e)), !p && e && (p = e);
		const {
			layout: m,
			column1: N,
			column2: P,
			column3: A,
			column4: w,
			disableStyles: n,
			slideDirection: L,
			overlayColor: k,
			renderInput: a,
			className: x,
			internalClassName: B,
			treePath: l,
			width: R,
			tabManager: i,
		} = t;
		let r = t.controller,
			y = [r];
		i && i.active && ((r = i.active?.controller), (y = i.tabs.map((f) => f.controller)));
		const S = $(null),
			c = () => {
				b(!1), r.setFocused();
			},
			u = {
				autocompleteLayout: { onReset: () => c(), layout: m, tabManager: i, ..._({ disableStyles: n }), theme: t?.theme, treePath: l },
				slideout: {
					width: R,
					rerender: !1,
					overlayColor: k,
					slideDirection: L,
					buttonSelector: p,
					..._({ disableStyles: n }),
					theme: t?.theme,
					treePath: l,
				},
				searchInput: {
					internalClassName: 'ss__autocomplete-slideout__search-input ss__autocomplete__search-input',
					inputName: C,
					submitSearchButton: {
						onClick: () => {
							window.location.href = r.store.state.url.link.href;
						},
					},
					clearSearchButton: { icon: 'close-thin' },
					closeSearchButton: { onClick: () => c(), icon: 'angle-left' },
					..._({ disableStyles: n }),
					treePath: `${l} slideout`,
					theme: t?.theme,
				},
			},
			d = !!a && Q({ layout: m, column1: N, column2: P, column3: A, column4: w }, 'searchInput'),
			j = q({ ...t, searchInputInLayout: d }, Z),
			[F, b] = E(!1);
		let v;
		e &&
			(H(() => {
				e.addEventListener('click', () => b(!0));
			}),
			(v = U({ input: e, controllers: y, renderedInputRef: S, renderInput: !!a, buttonSelector: p })));
		const h = a ? s(W, { ...u.searchInput, value: r.store.state.input || '', inputRef: S }) : void 0,
			o = { ...t };
		return (
			delete o.width,
			delete o.className,
			delete o.internalClassName,
			delete o.style,
			delete o.styleScript,
			delete o.themeStyleScript,
			m?.length
				? s(K, {
						children: s(X, {
							...j,
							...u.slideout,
							className: J('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', x, B),
							active: F,
							children: z('div', {
								className: 'ss__autocomplete-slideout__inner',
								ref: (f) => Y(f, 0, !0, c),
								children: [
									h && !d ? h : s(G, {}),
									s(V, { ...o, ...u.autocompleteLayout, input: v, controller: r, searchInputSlot: d ? h : void 0, treePath: `${l} slideout` }),
								],
							}),
						}),
				  })
				: null
		);
	});
export { ye as AutocompleteSlideout };
