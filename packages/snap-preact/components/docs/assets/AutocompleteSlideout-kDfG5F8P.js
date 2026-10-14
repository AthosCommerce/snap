import { o as D, u as M, m as T, A as $, c as q, s as E, y as H, j as s, l as z, F as G, d as J, C as K, e as O } from './iframe-CXSVAHru.js';
import { l as Q, u as U, A as V } from './useAcRenderedInput-NCzhM3Io.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { S as W } from './SearchInput-DJ-VPu5W.js';
import { S as X } from './Slideout-OFSsF92G.js';
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
import './Overlay-BCtuQj-C.js';
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
