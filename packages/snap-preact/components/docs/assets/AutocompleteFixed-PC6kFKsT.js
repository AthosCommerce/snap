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
} from './iframe-Bc4KSH0T.js';
import { l as ot, u as rt, A as it } from './useAcRenderedInput-DO3-amzD.js';
import { d as I } from './defined-CdKp_MB-.js';
import { S as pt } from './SearchInput-BPIgwblk.js';
import { M as st } from './Modal-Bb71CFe8.js';
import { u as nt } from './useA11y-BuGQuOJb.js';
import './preload-helper-PPVm8Dsz.js';
import './types-DqusP3LW.js';
import './useCreateController-DqNcG6uZ.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-B1GwaprV.js';
import './Terms-DheA4fhR.js';
import './Facets-DXg3Av-H.js';
import './Facet-JzgYSJ_F.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './Button-C4cTOUHA.js';
import './FacetListOptions-BRsZOoKo.js';
import './Checkbox-4N2aMGfq.js';
import './Radio-CEEJysGh.js';
import './FacetHierarchyOptions-sMDWNmLW.js';
import './FacetPaletteOptions-D2DLl7t9.js';
import './names-Cka5BSlk.js';
import './Image-9Pub_w4s.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-B4YG6F_c.js';
import './FacetSlider-Cclsjvzk.js';
import './Banner-CMX4Y7Vh.js';
import './withTracking-D6kix-j7.js';
import './createImpressionObserver-m2TNXj0r.js';
import './FacetsHorizontal-DD9MOQMC.js';
import './Slideout-DA0XdRZT.js';
import './Overlay-d1j9-VxC.js';
import './PaginationInfo-K-nKWsAd.js';
import './SearchHeader-CxEO9llg.js';
import './Breadcrumbs-DmxOMnRy.js';
import './LoadMore-tgvuskFW.js';
import './useIntersection-C53zN6Qj.js';
import './Pagination-CdrYtlrh.js';
import './PerPage-DHlasSSl.js';
import './Select-C5jrZYxP.js';
import './selectionKey-CmN2KTR5.js';
import './List-DGhbbLEi.js';
import './RadioList-mYVU-cPs.js';
import './SortBy-B6sDet1z.js';
import './LayoutSelector-CMNTfShJ.js';
import './FilterSummary-CmmIwfAj.js';
import './Filter-CBA1sOCL.js';
import './TabSelection-By3kzuho.js';
import './Results-xmDCY8C2.js';
import './useDisplaySettings-7OChHsa4.js';
import './ResultTracker-COjEKXyJ.js';
import './InlineBanner-BArbY9cG.js';
import './Result-BzjtDAC1.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './CalloutBadge-DSmlH766.js';
import './Rating-B-yVUDqy.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './Slideshow-ChO0chUe.js';
import './Grid-BgRdvrCD.js';
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
