import { o as j, u as z, m as H, s as $, A as T, y as q, c as O, j as a, l as W, F as D, d as E, C as G, e as J } from './iframe-U9T2Y9ZS.js';
import { l as K, u as Q, A as U } from './useAcRenderedInput-BzTiaNHP.js';
import { d as y } from './defined-CdKp_MB-.js';
import { S as V } from './SearchInput-CBuvCU_0.js';
import { M as X } from './Modal-BnFdKWAy.js';
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
