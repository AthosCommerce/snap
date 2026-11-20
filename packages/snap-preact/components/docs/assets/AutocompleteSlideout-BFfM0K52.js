import { o as D, u as M, m as T, A as $, c as q, s as E, y as H, j as s, l as z, F as G, d as J, C as K, e as O } from './iframe-CBMP6iq3.js';
import { l as Q, u as U, A as V } from './useAcRenderedInput-DX2zSthB.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { S as W } from './SearchInput-BVu3wkIZ.js';
import { S as X } from './Slideout-CtsQZp-g.js';
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
import './Overlay-DtQ4nwO8.js';
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
