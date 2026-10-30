import { o as D, u as M, m as T, A as $, c as q, s as E, y as H, j as s, l as z, F as G, d as J, C as K, e as O } from './iframe-U9T2Y9ZS.js';
import { l as Q, u as U, A as V } from './useAcRenderedInput-BzTiaNHP.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { S as W } from './SearchInput-CBuvCU_0.js';
import { S as X } from './Slideout-xOZDsJn4.js';
import { u as Y } from './useA11y-BuGQuOJb.js';
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
import './Overlay-BH_wZt84.js';
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
