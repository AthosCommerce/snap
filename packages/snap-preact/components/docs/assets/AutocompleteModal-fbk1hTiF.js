import { o as j, u as z, m as H, s as $, A as T, y as q, c as O, j as a, l as W, F as D, d as E, C as G, e as J } from './iframe-0uTqSs9S.js';
import { l as K, u as Q, A as U } from './useAcRenderedInput-D1jL1bgl.js';
import { d as y } from './defined-CdKp_MB-.js';
import { S as V } from './SearchInput-Df-AktE7.js';
import { M as X } from './Modal-B5IHgr9P.js';
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
import './Slideout-DvI7vGOb.js';
import './Overlay-D_0SkdOn.js';
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
const Z = ({ width: c, height: m, theme: b }) => {
		const t = b?.variables;
		return J({
			position: 'fixed',
			left: '0',
			width: '100%',
			height: '100%',
			right: '0',
			top: '0',
			zIndex: 1001,
			'& .ss__autocomplete-modal__inner': {
				position: 'absolute',
				left: 0,
				right: 0,
				top: '10vh',
				maxHeight: m ? 'initial' : '80vh',
				overflow: 'scroll',
				marginLeft: 'auto',
				marginRight: 'auto',
				background: '#fff',
				zIndex: 1001,
				width: c,
				height: m,
				maxWidth: '100vw',
			},
			'& .ss__overlay': { zIndex: 1e3 },
			'& .ss__autocomplete': { position: 'relative' },
			'& .ss__search-input': { margin: '1px' },
			'& .input_wrapper input': { background: '#eee' },
			'& .ss__search-input__button--close-search-icon': { border: 'none' },
			[`@media (max-width: ${t?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
		});
	},
	ge = j((c) => {
		const m = z(),
			t = H('autocompleteModal', m, { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 }, c),
			[I, u] = $(!1),
			N = '';
		let o = t.input,
			p = t.buttonSelector;
		o && typeof o == 'string' && (o = document.querySelector(o)), !p && o && (p = o);
		const {
			layout: d,
			column1: w,
			column2: P,
			column3: k,
			column4: M,
			disableStyles: h,
			overlayColor: A,
			renderInput: _,
			className: B,
			internalClassName: L,
			treePath: n,
			tabManager: s,
		} = t;
		let e = t.controller,
			x = [e];
		s && s.active && ((e = s.active?.controller), (x = s.tabs.map((i) => i.controller)));
		const S = T(null);
		q(() => {
			const i = (tt, F) => {
				e.store.state.focusedInput || u(!1), F();
			};
			return (
				e.eventManager.on('focusChange', i),
				() => {
					e.eventManager.events.focusChange?.remove(i);
				}
			);
		}, [e]);
		const l = () => {
				e.setFocused(), u(!1);
			},
			f = {
				autocompleteLayout: { layout: d, onReset: () => l(), tabManager: s, ...y({ disableStyles: h }), theme: t?.theme, treePath: n },
				modal: {
					internalClassName: 'ss__autocomplete-modal__modal',
					buttonSelector: p,
					onOverlayClick: l,
					overlayColor: A,
					open: I,
					...y({ disableStyles: h }),
					theme: t?.theme,
					treePath: n,
				},
				searchInput: {
					internalClassName: 'ss__autocomplete-modal__search-input ss__autocomplete__search-input',
					submitSearchButton: {
						onClick: () => {
							window.location.href = e.store.state.url.link.href;
						},
					},
					clearSearchButton: { icon: 'close-thin' },
					closeSearchButton: { onClick: () => l(), icon: 'angle-left' },
					inputName: N,
					...y({ disableStyles: h }),
					theme: t?.theme,
					treePath: `${n} modal`,
				},
			},
			v = !!_ && K({ layout: d, column1: w, column2: P, column3: k, column4: M }, 'searchInput'),
			R = O({ ...t, searchInputInLayout: v }, Z);
		let C;
		o && (C = Q({ input: o, controllers: x, renderedInputRef: S, renderInput: !!_, buttonSelector: p, setActive: u }));
		const g = _ ? a(V, { ...f.searchInput, value: e.store.state.input || '', inputRef: S }) : void 0,
			r = { ...t };
		return (
			delete r.width,
			delete r.className,
			delete r.internalClassName,
			delete r.style,
			delete r.styleScript,
			delete r.themeStyleScript,
			d?.length && I
				? a(G, {
						children: a('div', {
							...R,
							className: E('ss__autocomplete-modal', B, L),
							children: a(X, {
								...f.modal,
								children: W('div', {
									className: 'ss__autocomplete-modal__inner',
									ref: (i) => Y(i, 0, !0, l),
									children: [
										g && !v ? g : a(D, {}),
										a(U, { ...r, ...f.autocompleteLayout, input: C, controller: e, searchInputSlot: v ? g : void 0, treePath: `${n} modal` }),
									],
								}),
							}),
						}),
				  })
				: null
		);
	});
export { ge as AutocompleteModal };
