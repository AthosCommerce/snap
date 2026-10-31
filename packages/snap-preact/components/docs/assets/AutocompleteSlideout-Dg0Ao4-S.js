import { o as D, u as M, m as T, A as $, c as q, s as E, y as H, j as s, l as z, F as G, d as J, C as K, e as O } from './iframe-Bc4KSH0T.js';
import { l as Q, u as U, A as V } from './useAcRenderedInput-DO3-amzD.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { S as W } from './SearchInput-BPIgwblk.js';
import { S as X } from './Slideout-DA0XdRZT.js';
import { u as Y } from './useA11y-BuGQuOJb.js';
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
import './Overlay-d1j9-VxC.js';
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
