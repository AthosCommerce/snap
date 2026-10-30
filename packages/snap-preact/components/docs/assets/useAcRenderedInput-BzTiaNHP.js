import {
	x as Te,
	z as de,
	o as Ne,
	u as Le,
	m as Ee,
	n as te,
	y as V,
	s as ne,
	c as Pe,
	j as t,
	l as T,
	d as H,
	C as Be,
	f as L,
	F as fe,
	I as ke,
	e as Se,
	A as Fe,
} from './iframe-U9T2Y9ZS.js';
import { F as Oe } from './types-DqusP3LW.js';
import { u as Ie } from './useCreateController-B8azvRjq.js';
import { d as E } from './defined-CdKp_MB-.js';
import { u as Ae } from './useLang-Dx66cFD0.js';
import { u as he } from './useA11y-BuGQuOJb.js';
import { c as $e } from './createHoverProps-B_zlUBHN.js';
import { T as De } from './TermsList-CMxULoaE.js';
import { T as oe } from './Terms-B39jsyt0.js';
import { F as He } from './Facets-B-EVV1pK.js';
import { B as P } from './Banner-D10o1Oav.js';
import { F as We } from './FacetsHorizontal-B68XtXsV.js';
import { R as ze } from './Results-3aWkZgbC.js';
import { T as Me } from './TabSelection-Cf26zrT4.js';
import { B as qe } from './Button-rwG4FGUK.js';
function je(n) {
	let d, N, e;
	const g = Te(),
		l = !!n?.recommendation?.enabled,
		c = l ? n?.recommendation?.component || 'RecommendationGrid' : void 0,
		i = l ? n?.recommendation?.resultComponent || 'Result' : void 0,
		p = g?.templates?.library.import.component.recommendation.default || {},
		C = g?.templates?.library.import.component.result || {},
		{ ComponentOverride: w, shouldWaitForNamedOverride: v } = de(p, c),
		{ ComponentOverride: x, shouldWaitForNamedOverride: u } = de(C, i);
	if (l && ((d = v ? void 0 : w), (N = u ? void 0 : x), g?.templates)) {
		const s = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, n.recommendation.config);
		(s.id = s.id || `search-${s.tag}`),
			(e = Ie(g, 'recommendation', s)),
			!e?.store?.loaded && !e?.store?.loading && e?.store.error?.type !== 'error' && e?.search();
	}
	return { RecommendationTemplateComponent: d, RecommendationTemplateResultComponent: N, recsController: e };
}
const Ge = ({ controller: n, input: d, viewportMaxHeight: N, width: e, theme: g, column1: l, column2: c, column3: i, column4: p }) => {
		let C = 0;
		if (d) {
			let v;
			typeof d == 'string' ? (v = document.querySelector(d)) : (v = d), (C = v?.getBoundingClientRect()?.bottom || 0);
		}
		const w = !!(n.store.search?.query?.string && n.store.results.length === 0);
		return Se({
			'.ss__autocomplete__column.ss__autocomplete__column--c1': {
				flex: l?.width == 'auto' ? '1 1 0' : `1 0 ${l?.width}`,
				maxWidth: l?.width == 'auto' ? 'none' : l?.width,
				alignContent: l?.alignContent,
			},
			'.ss__autocomplete__column.ss__autocomplete__column--c2': {
				flex: c?.width == 'auto' ? '1 1 0' : `1 0 ${c?.width}`,
				maxWidth: c?.width == 'auto' ? 'none' : c?.width,
				alignContent: c?.alignContent,
			},
			'.ss__autocomplete__column.ss__autocomplete__column--c3': {
				flex: i?.width == 'auto' ? '1 1 0' : `1 0 ${i?.width}`,
				maxWidth: i?.width == 'auto' ? 'none' : i?.width,
				alignContent: i?.alignContent,
			},
			'.ss__autocomplete__column.ss__autocomplete__column--c4': {
				flex: p?.width == 'auto' ? '1 1 0' : `1 0 ${p?.width}`,
				maxWidth: p?.width == 'auto' ? 'none' : p?.width,
				alignContent: p?.alignContent,
			},
			'.ss__autocomplete__column, .ss__autocomplete__row': { minWidth: 0 },
			'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
			flexWrap: 'wrap',
			display: 'flex',
			flexDirection: 'row',
			position: 'absolute',
			zIndex: '10002',
			border: '1px solid #ebebeb',
			background: '#ffffff',
			maxWidth: e,
			maxHeight: N && C ? `calc(100vh - ${C + 10}px)` : void 0,
			overflowY: 'scroll',
			'.ss__autocomplete__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
			'.ss__autocomplete__column': { display: 'flex', flexDirection: 'column', flexFlow: 'wrap' },
			'.ss__autocomplete__column:empty, .ss__autocomplete__row:empty': { display: 'none' },
			'.ss__autocomplete__separator': { flexGrow: 1, flexShrink: 1 },
			'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
			'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
			'.ss__autocomplete__terms-wrapper': { background: '#f8f8f8', width: '100%' },
			'.ss__autocomplete__facets': {
				display: 'flex',
				width: 'auto',
				flexDirection: 'column',
				columnGap: '20px',
				padding: '10px',
				overflowY: 'auto',
				'.ss__facets': { display: 'flex', flexDirection: 'column', columnGap: '20px' },
				'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
					{ paddingLeft: 0 },
				'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
				'.ss__facet-palette-options__icon': { display: 'none' },
			},
			'.ss__autocomplete__facets-wrapper': { width: '100%' },
			'.ss__autocomplete__search-input-wrapper': { width: '100%' },
			'.ss__autocomplete__content': {
				display: 'flex',
				flex: '1 1 0%',
				flexDirection: 'column',
				justifyContent: 'space-between',
				overflowY: 'auto',
				margin: w ? '0 auto' : void 0,
				'.ss__autocomplete__content-inner': { padding: '10px' },
				'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
			},
			'.ss__banner': { 'iframe, img': { maxWidth: '100%', height: 'auto' } },
			'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
			'.ss__banner.ss__banner--footer': { margin: '10px 0' },
			'.ss__autocomplete__button--see-more': {
				padding: '10px',
				height: 'min-content',
				textAlign: w ? 'center' : 'right',
				a: { fontWeight: 'bold', color: g?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
			},
		});
	},
	rt = Ne((n) => {
		const d = Le();
		let e = Ee(
			'autocompleteLayout',
			d,
			{
				facetsTitle: '',
				contentTitle: '',
				layout: [['c1', 'c2', 'c3']],
				column1: { layout: ['termsList'], width: '150px' },
				column2: { layout: ['facets'], width: '150px' },
				column3: { layout: [['tabSelection'], ['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
				width: '100%',
				templates: { recommendation: { enabled: !0 } },
			},
			n
		);
		delete e.treePath, e.layout == 'terms' && (e.templates = { recommendation: { enabled: !1 } });
		const g = $e(),
			l = () => {
				a?.setFocused && a?.setFocused();
			},
			c = {
				components: {
					facet: { valueProps: g },
					facetGridOptions: { onClick: l },
					facetHierarchyOptions: { onClick: l },
					facetListOptions: { onClick: l },
					facetPaletteOptions: { onClick: l },
				},
			};
		if (d?.type !== 'templates') {
			const o = {
					components: {
						facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
						facetGridOptions: { columns: 3 },
						facetHierarchyOptions: { hideCount: !0 },
						facetListOptions: { hideCheckbox: !0, hideCount: !0 },
						facetPaletteOptions: { hideLabel: !0, columns: 3 },
						result: { hideBadge: !0, hideVariantSelections: !0 },
					},
				},
				S = te.all([o, c, e?.theme || {}], { arrayMerge: (h, _) => _ });
			e = { ...e, theme: S };
		} else e.theme = te.all([c, e?.theme || {}], { arrayMerge: (o, S) => S });
		let i = e.input;
		i && typeof i == 'string' && (i = document.querySelector(i));
		const {
			facetsTitle: p,
			contentTitle: C,
			column1: w,
			column2: v,
			column3: x,
			column4: u,
			onReset: y,
			excludeBanners: s,
			resultComponent: F,
			templates: B,
			disableStyles: f,
			className: $,
			internalClassName: Q,
			controller: a,
			tabManager: W,
			searchInputSlot: J,
		} = e;
		let z = e.layout;
		const m = {
				button: {
					internalClassName: 'ss__autocomplete__button--see-more',
					onClick: () => {
						a?.setFocused && a.setFocused(), (window.location.href = X.url.href);
					},
					name: 'see-more',
					...E({ disableStyles: f }),
					theme: e.theme,
					treePath: n.treePath,
				},
				termsList: {
					internalClassName: 'ss__autocomplete__terms-list',
					verticalOptions: !(e.layout == 'terms' || e.layout == 'mobile'),
					controller: a,
					...E({ disableStyles: f }),
					theme: e.theme,
					treePath: n.treePath,
				},
				terms: {
					internalClassName: 'ss__autocomplete__terms',
					vertical: !(e.layout == 'terms' || e.layout == 'mobile'),
					controller: a,
					...E({ disableStyles: f }),
					theme: e.theme,
					treePath: n.treePath,
				},
				facets: { name: 'autocomplete', limit: 3, ...E({ disableStyles: f }), theme: e.theme, treePath: n.treePath },
				facetsHorizontal: { name: 'autocomplete', controller: a, ...E({ disableStyles: f }), theme: e.theme, treePath: n.treePath },
				banner: { internalClassName: 'ss__autocomplete__banner', ...E({ disableStyles: f }), theme: e.theme, treePath: n.treePath },
				results: {
					columns: 3,
					rows: 2,
					excludeBanners: s,
					internalClassName: 'ss__autocomplete__results',
					resultComponent: F,
					...E({ disableStyles: f }),
					theme: e.theme,
					treePath: n.treePath,
				},
				icon: {
					internalClassName: 'ss__autocomplete__icon',
					icon: 'angle-right',
					size: '10px',
					...E({ disableStyles: f }),
					theme: e.theme,
					treePath: n.treePath,
				},
				tabSelection: { tabManager: W, ...E({ disableStyles: f }), theme: e.theme, treePath: n.treePath },
			},
			{
				search: M,
				terms: K,
				trending: q,
				results: O,
				merchandising: R,
				pagination: se,
				filters: ve,
				facets: ae,
				state: X,
				loading: le,
				loaded: re,
			} = a.store,
			j = a.store.history || [];
		a &&
			typeof i == 'string' &&
			((i = document.querySelector(i)),
			V(() => {
				a.bind();
			}, []));
		const ce = i === X.focusedInput && !!(K.length > 0 || q?.length > 0 || j?.length > 0 || (X.input && a.store.loaded)),
			be = ce || !!J,
			ie = () => !!(O.length > 0 || Object.keys(R.content).length > 0 || M?.query?.string || le),
			[Z, me] = ne(ie()),
			ue = () => {
				const o = q?.filter((h) => h.active).pop(),
					S = j?.filter((h) => h.active).pop();
				o || S || ie() ? me(!0) : me(!1);
			};
		V(() => {
			ue();
		}, [q, j]);
		const Y = ae.length ? ae.filter((o) => o.display !== Oe.SLIDER) : [];
		ue();
		const Ce = Pe(e, Ge),
			_e = W?.active?.controller.id,
			we = {
				contentTitle: { value: C },
				closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
				facetsTitle: { value: p },
				noResultsText: { value: `<p>No results found for "${M.originalQuery?.string || M.query?.string}".</p><p>Please try another search.</p>` },
				seeMoreButton: {
					value: `See ${se.totalResults} ${ve.length > 0 ? 'filtered' : ''} result${se.totalResults == 1 ? '' : 's'} for "${M.query?.string}"`,
				},
			},
			U = te(we, e.lang || {}),
			k = Ae(U, { controller: a }, { activeBreakpoint: d?.activeBreakpoint });
		let I, G, ee;
		const xe = !!(a.store.search?.query?.string && a.store.results.length === 0);
		if (B?.recommendation?.enabled && xe) {
			const o = je(B);
			(G = o.RecommendationTemplateComponent), (ee = o.RecommendationTemplateResultComponent), (I = o.recsController);
		}
		let pe = !1;
		const D = (o, S) => {
			if (typeof o != 'string') {
				const h = o?.map((A) => D(A, S));
				return o.some((A, r) => A !== '_' && h[r])
					? t('div', { className: `ss__autocomplete__row ss__autocomplete__row--${S.value++}`, children: h })
					: null;
			}
			if (o == 'c1' && w?.layout?.length) {
				const h = { value: 0 },
					_ = w.layout.map((r) => D(r, h));
				return w.layout.some((r, b) => (Array.isArray(r) || r !== '_') && !!_[b])
					? t('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: _ })
					: null;
			}
			if (o == 'c2' && v?.layout?.length) {
				const h = { value: 0 },
					_ = v.layout.map((r) => D(r, h));
				return v.layout.some((r, b) => (Array.isArray(r) || r !== '_') && !!_[b])
					? t('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: _ })
					: null;
			}
			if (o == 'c3' && x?.layout?.length) {
				const h = { value: 0 },
					_ = x.layout.map((r) => D(r, h));
				return x.layout.some((r, b) => (Array.isArray(r) || r !== '_') && !!_[b])
					? t('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: _ })
					: null;
			}
			if (o == 'c4' && u?.layout?.length) {
				const h = { value: 0 },
					_ = u.layout.map((r) => D(r, h));
				return u.layout.some((r, b) => (Array.isArray(r) || r !== '_') && !!_[b])
					? t('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: _ })
					: null;
			}
			return o == 'searchInput'
				? !J || pe
					? null
					: ((pe = !0), t('div', { className: 'ss__autocomplete__search-input-wrapper', children: J }))
				: o !== '_' && !ce
				? null
				: o == 'termsList'
				? !K?.length && !j?.length && !q?.length
					? null
					: t('div', { className: H('ss__autocomplete__terms-wrapper'), children: t(De, { controller: a, ...m.termsList }) })
				: o == 'terms.history'
				? j?.length
					? t(oe, {
							controller: a,
							terms: a.store.history,
							className: 'ss__terms-list__terms--history',
							name: 'history',
							limit: a.config.settings?.history?.limit,
							...m.terms,
							title: 'History',
					  })
					: null
				: o == 'terms.trending'
				? q?.length
					? t(oe, {
							controller: a,
							terms: a.store.trending,
							className: 'ss__terms-list__terms--trending',
							name: 'trending',
							limit: a.config.settings?.trending?.limit,
							...m.terms,
							title: 'Trending',
					  })
					: null
				: o == 'terms.suggestions'
				? K?.length
					? t(oe, {
							controller: a,
							terms: a.store.terms,
							className: 'ss__terms-list__terms--suggestions',
							name: 'suggestions',
							...m.terms,
							title: 'Suggestions',
					  })
					: null
				: o == 'facets'
				? Y.length
					? T('div', {
							className: H('ss__autocomplete__facets-wrapper'),
							children: [
								p || U.facetsTitle.value
									? t('div', {
											className: H('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
											children: t('h5', { ...k.facetsTitle?.all }),
									  })
									: null,
								T('div', {
									className: 'ss__autocomplete__facets',
									children: [t(He, { ...m.facets, facets: Y }), s ? null : t(P, { ...m.banner, content: R.content, type: L.LEFT, name: 'left' })],
								}),
							],
					  })
					: null
				: o == 'facetsHorizontal'
				? Y.length
					? T(fe, {
							children: [
								p || U.facetsTitle.value
									? t('div', {
											className: H('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
											children: t('h5', { ...k.facetsTitle?.all }),
									  })
									: null,
								T('div', {
									className: 'ss__autocomplete__facets',
									children: [
										t(We, { ...m.facetsHorizontal, facets: Y }),
										s ? null : t(P, { ...m.banner, content: R.content, type: L.LEFT, name: 'left' }),
									],
								}),
							],
					  })
					: null
				: o == 'content' && Z
				? t('div', {
						className: 'ss__autocomplete__content',
						children:
							O.length > 0 || re
								? T('div', {
										className: 'ss__autocomplete__content-inner',
										children: [
											s ? null : t(P, { ...m.banner, content: R.content, type: L.HEADER, name: 'header' }),
											s ? null : t(P, { ...m.banner, content: R.content, type: L.BANNER, name: 'banner' }),
											O.length > 0
												? T('div', {
														className: 'ss__autocomplete__content__results',
														children: [
															(C || U.contentTitle.value) && O.length > 0
																? t('div', {
																		className: H('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																		children: t('h5', { ...k.contentTitle?.all }),
																  })
																: null,
															t(ze, { results: O, ...m.results, controller: a }),
														],
												  })
												: re
												? T('div', {
														className: 'ss__autocomplete__content__no-results',
														children: [
															t('div', { className: 'ss__autocomplete__content__no-results__text', ...k.noResultsText?.all }),
															G && I?.store?.loaded
																? t('div', {
																		className: 'ss__autocomplete__content__no-results__recommendations',
																		children: t(G, {
																			controller: I,
																			title: I.store?.profile?.display?.templateParameters?.title,
																			resultComponent: ee,
																			name: 'noResultsRecommendations',
																			treePath: n.treePath,
																		}),
																  })
																: null,
														],
												  })
												: null,
											s ? null : t(P, { ...m.banner, content: R.content, type: L.FOOTER, name: 'footer' }),
										],
								  })
								: null,
				  })
				: o == 'no-results' && Z
				? t('div', {
						className: 'ss__autocomplete__content',
						children:
							O.length == 0 && !le
								? T('div', {
										className: 'ss__autocomplete__content__no-results',
										children: [
											t('div', { className: 'ss__autocomplete__content__no-results__text', ...k.noResultsText?.all }),
											G && I?.store?.loaded
												? t('div', {
														className: 'ss__autocomplete__content__no-results__recommendations',
														children: t(G, {
															controller: I,
															title: I.store?.profile?.display?.templateParameters?.title,
															resultComponent: ee,
															name: 'noResultsRecommendations',
															treePath: n.treePath,
														}),
												  })
												: null,
										],
								  })
								: t(fe, {}),
				  })
				: o == 'tabSelection'
				? W
					? t(Me, { ...m.tabSelection, tabManager: W })
					: null
				: o == '_'
				? t('div', { className: 'ss__autocomplete__separator' })
				: o == 'banner.banner'
				? t(P, { ...m.banner, content: R.content, type: L.BANNER, name: 'banner' })
				: o == 'banner.footer'
				? t(P, { ...m.banner, content: R.content, type: L.FOOTER, name: 'footer' })
				: o == 'banner.header'
				? t(P, { ...m.banner, content: R.content, type: L.HEADER, name: 'header' })
				: o == 'banner.left'
				? t(P, { ...m.banner, content: R.content, type: L.LEFT, name: 'left' })
				: o == 'button.see-more' && Z && M?.query?.string && O.length > 0
				? T(qe, { ...m.button, ...k.seeMoreButton.attributes, children: [t('span', { ...k.seeMoreButton.value }), t(ke, { ...m.icon })] })
				: null;
		};
		(z = typeof e.layout == 'string' ? ye[e.layout] : e.layout),
			typeof e.layout == 'string' && !z && (a.log.warn(`unsupported layout found. ${e.layout}`), (z = []));
		const Re = { value: 0 };
		return be && z?.length
			? t(Be, {
					children: T('div', {
						...Ce,
						className: H(
							'ss__autocomplete',
							{ 'ss__autocomplete--terms': e.layout === 'terms' },
							{ 'ss__autocomplete--mobile': e.layout === 'mobile' },
							{ 'ss__autocomplete--desktop': e.layout === 'desktop' },
							{ 'ss__autocomplete--tablet': e.layout === 'tablet' },
							$,
							Q
						),
						onClick: (o) => o.stopPropagation(),
						ref: (o) => he(o, 0, !1, y),
						...(W?.active ? { id: `ss__tabpanel--${_e}`, role: 'tabpanel', 'aria-labelledby': `ss__tab--${_e}` } : {}),
						children: [
							t('span', {
								role: 'link',
								ref: (o) => he(o),
								onClick: () => e.onReset && e.onReset(),
								className: 'ss__autocomplete__close-button',
								style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
								...k.closeButton?.all,
							}),
							z.map((o) => D(o, Re)),
						],
					}),
			  })
			: null;
	}),
	ye = {
		terms: [['termsList'], ['no-results'], ['_', 'button.see-more']],
		mobile: [['termsList'], ['content'], ['_', 'button.see-more']],
		tablet: [['c1', 'c3']],
		desktop: [['c1', 'c2', 'c3']],
	};
function ct({ layout: n, column1: d, column2: N, column3: e, column4: g }, l) {
	const c = { c1: d, c2: N, c3: e, c4: g };
	return ((typeof n == 'string' ? ye[n] : n)?.flat() || []).some((p) => p === l || !!c[p]?.layout.flat().includes(l));
}
const ge = '.ss__autocomplete__search-input input';
function it({ input: n, controllers: d, renderInput: N, buttonSelector: e, renderedInputRef: g, setActive: l }) {
	const [c, i] = ne(n),
		[p, C] = ne(!1),
		w = Fe(null),
		v = async (u) => {
			for (const y of u) y.config.selector.includes(ge) || (y.config.selector = `${y.config.selector}, ${ge}`), (w.current = y), await y.bind();
		},
		x = () => {
			l && l(!0),
				setTimeout(async () => {
					p || (i(g.current), await v(d), g?.current?.focus()), C(!0);
				});
		};
	return (
		V(() => {
			let u = !1;
			const y = () => {
				u = !1;
			};
			if (N && e) {
				let s;
				if ((typeof e == 'string' ? (s = document.querySelector(e)) : (s = e), s)) {
					const F = () => {
							u = !0;
						},
						B = (Q) => {
							(u = !1), Q.stopPropagation(), x();
						},
						f = () => {
							u || x();
						},
						$ = () => x();
					return (
						s.addEventListener('mousedown', F),
						document.addEventListener('mouseup', y, !0),
						s.addEventListener('click', B),
						s.addEventListener('focus', f),
						s.addEventListener('select', $),
						() => {
							s.removeEventListener('mousedown', F),
								document.removeEventListener('mouseup', y, !0),
								s.removeEventListener('click', B),
								s.removeEventListener('focus', f),
								s.removeEventListener('select', $);
						}
					);
				}
			} else if (l) {
				const s = () => {
						u = !0;
					},
					F = ($) => {
						(u = !1), $.stopPropagation(), l(!0);
					},
					B = () => {
						u || l(!0);
					},
					f = () => l(!0);
				return (
					n.addEventListener('mousedown', s),
					document.addEventListener('mouseup', y, !0),
					n.addEventListener('click', F),
					n.addEventListener('focus', B),
					n.addEventListener('select', f),
					() => {
						n.removeEventListener('mousedown', s),
							document.removeEventListener('mouseup', y, !0),
							n.removeEventListener('click', F),
							n.removeEventListener('focus', B),
							n.removeEventListener('select', f);
					}
				);
			}
		}, []),
		V(() => {
			if (n !== c && c) {
				const u = () => {
					n.value = c.value;
				};
				return (
					c.addEventListener('input', u),
					() => {
						c.removeEventListener('input', u);
					}
				);
			}
		}, [c]),
		c
	);
}
export { rt as A, ct as l, it as u };
