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
} from './iframe-CBMP6iq3.js';
import { l as ot, u as rt, A as it } from './useAcRenderedInput-DX2zSthB.js';
import { d as I } from './defined-CdKp_MB-.js';
import { S as pt } from './SearchInput-BVu3wkIZ.js';
import { M as st } from './Modal-Dy1kPhQ-.js';
import { u as nt } from './useA11y-BuGQuOJb.js';
import './preload-helper-PPVm8Dsz.js';
import './types-DqusP3LW.js';
import './useCreateController-BQWBOW7h.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-zG2S9TW5.js';
import './Terms-DRn7mtm4.js';
import './Facets-C4kyNZhV.js';
import './Facet-OlUlVoFY.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-DmIQwaKA.js';
import './useClickOutside-CYgcb6yY.js';
import './Button-CDadhUc9.js';
import './FacetListOptions-C5czvGqf.js';
import './Checkbox-Bf1jD8rh.js';
import './Radio-DA80vQT3.js';
import './FacetHierarchyOptions-Dfanjq4X.js';
import './FacetPaletteOptions-CM1X0ghd.js';
import './names-EhrrLUyQ.js';
import './Image-DCYn0aso.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-CU4I08jo.js';
import './FacetSlider-BLr0dnSi.js';
import './Banner-DLjUyzNk.js';
import './withTracking-CHJH0HXR.js';
import './createImpressionObserver-BETervzW.js';
import './FacetsHorizontal-DH3KG3vc.js';
import './Slideout-CtsQZp-g.js';
import './Overlay-DtQ4nwO8.js';
import './PaginationInfo-Bm3Wp1aX.js';
import './SearchHeader-BJ-rDmC6.js';
import './Breadcrumbs-BuWqUEto.js';
import './LoadMore-CNxAASBD.js';
import './useIntersection-1a9oca-F.js';
import './Pagination-Cdia9LPj.js';
import './PerPage-D-S0QYLC.js';
import './Select-BDZKe8EB.js';
import './selectionKey-CmN2KTR5.js';
import './List-Bltyzt-T.js';
import './RadioList-BIeJdfUA.js';
import './SortBy-25Mi-IK9.js';
import './LayoutSelector-2vULcprm.js';
import './FilterSummary-BaUEEzJF.js';
import './Filter-CbO2rp-4.js';
import './TabSelection-DxmQAwWT.js';
import './Results-B1aDgLlz.js';
import './useDisplaySettings-DCCuBpZP.js';
import './ResultTracker-CBy-MeUe.js';
import './InlineBanner-BCcK0SOs.js';
import './Result-C3mmRPuX.js';
import './OverlayBadge-ByZlAQ-V.js';
import './defaultBadgeComponentMap-ByRaqHv1.js';
import './BadgeImage-qABHGrVa.js';
import './BadgeRectangle-D-DJ5cYF.js';
import './BadgePill-DZ4Tt_po.js';
import './BadgeText-DWl6wYDE.js';
import './CalloutBadge-DoxQ9c-v.js';
import './Rating-Bwb5vRVd.js';
import './Price-b0F4x_FF.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxzFXcsF.js';
import './Swatches-ik7K4L0U.js';
import './Slideshow-DT_s099s.js';
import './Grid-BA6Sqccj.js';
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
