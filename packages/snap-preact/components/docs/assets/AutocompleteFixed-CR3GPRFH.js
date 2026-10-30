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
} from './iframe-U9T2Y9ZS.js';
import { l as ot, u as rt, A as it } from './useAcRenderedInput-BzTiaNHP.js';
import { d as I } from './defined-CdKp_MB-.js';
import { S as pt } from './SearchInput-CBuvCU_0.js';
import { M as st } from './Modal-BnFdKWAy.js';
import { u as nt } from './useA11y-BuGQuOJb.js';
import './preload-helper-PPVm8Dsz.js';
import './types-DqusP3LW.js';
import './useCreateController-B8azvRjq.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-CMxULoaE.js';
import './Terms-B39jsyt0.js';
import './Facets-B-EVV1pK.js';
import './Facet-HxPfd-CW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './Button-rwG4FGUK.js';
import './FacetListOptions-DXiMkJ6r.js';
import './Checkbox-Dsv4fCi7.js';
import './Radio-CBQqiZ56.js';
import './FacetHierarchyOptions-DNUnpz6e.js';
import './FacetPaletteOptions-8YWwPWlW.js';
import './names-Cka5BSlk.js';
import './Image-C5uuJXju.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions--7mFlBiQ.js';
import './FacetSlider-FfvPprOV.js';
import './Banner-D10o1Oav.js';
import './withTracking-B-gE0m0K.js';
import './createImpressionObserver-B76-2cq4.js';
import './FacetsHorizontal-B68XtXsV.js';
import './Slideout-xOZDsJn4.js';
import './Overlay-BH_wZt84.js';
import './PaginationInfo-Bg650W-a.js';
import './SearchHeader-DMztF-MS.js';
import './Breadcrumbs-BMN0fsvC.js';
import './LoadMore-CrQlsgeP.js';
import './useIntersection-D52kaMEq.js';
import './Pagination-DoORxBwJ.js';
import './PerPage-2HjLiwSz.js';
import './Select-HVXhT1EH.js';
import './selectionKey-CmN2KTR5.js';
import './List-9eXTq04g.js';
import './RadioList-Dpb6I9cR.js';
import './SortBy-Blw6YrBp.js';
import './LayoutSelector-CDjnVls8.js';
import './FilterSummary-h_KJo5Qw.js';
import './Filter-xKdvsRSa.js';
import './TabSelection-Cf26zrT4.js';
import './Results-3aWkZgbC.js';
import './useDisplaySettings-9sk5Dt1c.js';
import './ResultTracker-D-Jc6Lj4.js';
import './InlineBanner-07q-1VCg.js';
import './Result-Dham3Ici.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './CalloutBadge-hFFhia-q.js';
import './Rating-DUxc2ffg.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
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
