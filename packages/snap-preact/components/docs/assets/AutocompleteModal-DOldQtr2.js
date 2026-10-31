import { o as j, u as z, m as H, s as $, A as T, y as q, c as O, j as a, l as W, F as D, d as E, C as G, e as J } from './iframe-Bc4KSH0T.js';
import { l as K, u as Q, A as U } from './useAcRenderedInput-DO3-amzD.js';
import { d as y } from './defined-CdKp_MB-.js';
import { S as V } from './SearchInput-BPIgwblk.js';
import { M as X } from './Modal-Bb71CFe8.js';
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
