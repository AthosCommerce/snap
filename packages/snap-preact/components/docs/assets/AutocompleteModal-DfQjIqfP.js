import { o as j, u as z, m as H, s as $, A as T, y as q, c as O, j as a, l as W, F as D, d as E, C as G, e as J } from './iframe-CBMP6iq3.js';
import { l as K, u as Q, A as U } from './useAcRenderedInput-DX2zSthB.js';
import { d as y } from './defined-CdKp_MB-.js';
import { S as V } from './SearchInput-BVu3wkIZ.js';
import { M as X } from './Modal-Dy1kPhQ-.js';
import { u as Y } from './useA11y-BuGQuOJb.js';
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
