import { o as j, u as z, m as H, s as $, A as T, y as q, c as O, j as a, l as W, F as D, d as E, C as G, e as J } from './iframe-CXSVAHru.js';
import { l as K, u as Q, A as U } from './useAcRenderedInput-NCzhM3Io.js';
import { d as y } from './defined-CdKp_MB-.js';
import { S as V } from './SearchInput-DJ-VPu5W.js';
import { M as X } from './Modal-4V85zi-h.js';
import { u as Y } from './useA11y-BuGQuOJb.js';
import './preload-helper-PPVm8Dsz.js';
import './types-DqusP3LW.js';
import './useCreateController-CPUKSfyE.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './TermsList-CE2cSemc.js';
import './Terms-irMOQ8EP.js';
import './Facets-DPwV1I2W.js';
import './Facet-BmQbVpPT.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Dropdown-WSImKrUZ.js';
import './useClickOutside-G4DBoznB.js';
import './Button-YZishUF-.js';
import './FacetListOptions-DvX14VIV.js';
import './Checkbox-CXNoFSPC.js';
import './Radio-DY75CPxX.js';
import './FacetHierarchyOptions-Bu5fpnu_.js';
import './FacetPaletteOptions-DW1gB9zo.js';
import './names-Cka5BSlk.js';
import './Image-BTbXUZuZ.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-C5dERDt2.js';
import './FacetSlider-AhnUnnRl.js';
import './Banner-DD7UuHM6.js';
import './withTracking-DWvVsRqK.js';
import './createImpressionObserver-DI1SU3AN.js';
import './FacetsHorizontal-CIi7o8UB.js';
import './Slideout-OFSsF92G.js';
import './Overlay-BCtuQj-C.js';
import './PaginationInfo-BGW1CMBu.js';
import './SearchHeader-BsYBThrg.js';
import './Breadcrumbs-C6qMSVRy.js';
import './LoadMore-U8fNXCqg.js';
import './useIntersection-Dwh_PZ6E.js';
import './Pagination-Dp3xsKuj.js';
import './PerPage-COcGnyzN.js';
import './Select-DAPmdZ4V.js';
import './selectionKey-CmN2KTR5.js';
import './List-DGhdnIhb.js';
import './RadioList-uOtV-0O8.js';
import './SortBy-Ax3RG03i.js';
import './LayoutSelector-C9dw2cSG.js';
import './FilterSummary-D-y17uWR.js';
import './Filter-DHh9Ae_k.js';
import './TabSelection-IWPsXkgZ.js';
import './Results-Hox3H_zi.js';
import './useDisplaySettings-D0_uZPs4.js';
import './ResultTracker-D4h_hXCO.js';
import './InlineBanner-DsZBvWCz.js';
import './Result-BacvSyPr.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './CalloutBadge-CahbTmzQ.js';
import './Rating-Bdkm_1kb.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
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
