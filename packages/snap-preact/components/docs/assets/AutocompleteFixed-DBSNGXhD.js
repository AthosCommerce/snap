import {
	o as X,
	u as D,
	m as G,
	s as k,
	A as J,
	y as B,
	j as s,
	c as K,
	l as Q,
	F as U,
	d as V,
	C as Z,
	H as tt,
	e as et,
} from './iframe-0uTqSs9S.js';
import { l as ot, u as rt, A as it } from './useAcRenderedInput-D1jL1bgl.js';
import { d as I } from './defined-CdKp_MB-.js';
import { S as pt } from './SearchInput-Df-AktE7.js';
import { M as st } from './Modal-B5IHgr9P.js';
import { u as nt } from './useA11y-BuGQuOJb.js';
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
const lt = ({ inputBounds: i, offset: n, renderInput: _, searchInputInLayout: e, width: u }) => {
		const l = !!_ && !e;
		return et({
			position: 'absolute',
			left: '0',
			width: '100%',
			height: '100%',
			right: '0',
			top: '0',
			zIndex: 1001,
			pointerEvents: 'none',
			'.ss__autocomplete-fixed__inner': {
				position: 'absolute',
				left: `calc(0px + ${n?.left || 0}px)`,
				top: `calc(0px + ${_ ? '0px' : `${i.height}px`} + ${n?.top || 0}px)`,
				width: `calc(100% + ${n?.width || 0}px)`,
				zIndex: 1001,
				maxWidth: '100vw',
				pointerEvents: 'auto',
				'& > .ss__search-input': { background: '#fff', width: `${i.width}px`, height: `${i.height}px`, border: '0px' },
			},
			'.ss__autocomplete-fixed__inner__layout-wrapper': {
				width: u,
				overflowY: 'scroll',
				maxHeight: `calc(90vh - ${i.top || 0}px - ${l ? `${i.height}px` : '0px'} + ${n?.top || 0}px)`,
			},
			'.ss__search-input__button--close-search-icon': { border: 'none' },
		});
	},
	$e = X((i) => {
		const n = D(),
			e = G('autocompleteFixed', n, { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' }, i),
			[u, l] = k(!1),
			F = '';
		let o = e.input,
			d = e.buttonSelector,
			C;
		o && (typeof o == 'string' && (o = document.querySelector(o)), (C = o?.getAttribute('placeholder'))), !d && o && (d = o);
		const {
			layout: x,
			column1: L,
			column2: M,
			column3: R,
			column4: z,
			disableStyles: g,
			renderInput: v,
			overlayColor: H,
			className: T,
			internalClassName: j,
			offset: S,
			treePath: h,
			tabManager: a,
		} = e;
		let r = e.controller,
			$ = [r];
		a && a.active && ((r = a.active?.controller), ($ = a.tabs.map((t) => t.controller)));
		const N = J(null);
		B(() => {
			const t = (c, W) => {
				r.store.state.focusedInput || l(!1), W();
			};
			return (
				r.eventManager.on('focusChange', t),
				() => {
					r.eventManager.events.focusChange?.remove(t);
				}
			);
		}, [r]);
		const f = () => {
				r.setFocused(), l(!1);
			},
			w = {
				autocompleteLayout: { layout: x, onReset: () => f(), tabManager: a, ...I({ disableStyles: g }), theme: e?.theme, treePath: h },
				modal: {
					internalClassName: 'ss__autocomplete-fixed__modal',
					buttonSelector: d,
					lockScroll: !1,
					onOverlayClick: f,
					open: u,
					...I({ overlayColor: H, disableStyles: g }),
					theme: e?.theme,
					treePath: h,
				},
				searchInput: {
					internalClassName: 'ss__autocomplete-fixed__search-input ss__autocomplete__search-input',
					placeholderText: C || void 0,
					submitSearchButton: {
						onClick: () => {
							window.location.href = r.store.state.url.link.href;
						},
					},
					clearSearchButton: { icon: 'close-thin' },
					closeSearchButton: { onClick: () => f() },
					inputName: F,
					...I({ disableStyles: g }),
					theme: e?.theme,
					treePath: `${h} modal`,
				},
			},
			E = (t) => {
				if (t) {
					const c = t.getBoundingClientRect();
					return { top: c.top + window.scrollY + (S?.top || 0), left: c.left + window.scrollX + (S?.left || 0), width: c.width, height: c.height };
				} else return { top: 0, left: 0, width: 0, height: 0 };
			},
			[m, Y] = k({ top: 0, left: 0, width: 0, height: 0 }),
			P = () => {
				const t = E(o);
				(m.height !== t.height || m.left !== t.left || m.top !== t.top || m.width !== t.width) && Y(t);
			};
		P();
		const q = tt(() => {
			P();
		}, 10);
		B(() => {
			window.addEventListener('resize', q);
		}, []);
		const y = !!v && ot({ layout: x, column1: L, column2: M, column3: R, column4: z }, 'searchInput'),
			b = v ? s(pt, { ...w.searchInput, value: r.store.state.input || '', inputRef: N }) : void 0,
			O = K({ ...e, inputBounds: m, searchInputInLayout: y }, lt);
		let A;
		o && (A = rt({ input: o, controllers: $, renderedInputRef: N, renderInput: !!v, buttonSelector: d, setActive: l }));
		const p = { ...e };
		return (
			delete p.width,
			delete p.className,
			delete p.internalClassName,
			delete p.style,
			delete p.styleScript,
			delete p.themeStyleScript,
			x?.length && u
				? s(Z, {
						children: s('div', {
							...O,
							className: V('ss__autocomplete-fixed', T, j),
							children: s(st, {
								...w.modal,
								children: Q('div', {
									className: 'ss__autocomplete-fixed__inner',
									ref: (t) => nt(t, 0, !0, f),
									children: [
										b && !y ? b : s(U, {}),
										s('div', {
											className: 'ss__autocomplete-fixed__inner__layout-wrapper',
											children: s(it, {
												...p,
												...w.autocompleteLayout,
												input: A,
												controller: r,
												searchInputSlot: y ? b : void 0,
												treePath: `${h} modal`,
											}),
										}),
									],
								}),
							}),
						}),
				  })
				: null
		);
	});
export { $e as AutocompleteFixed };
