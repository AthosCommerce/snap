import {
	o as re,
	u as oe,
	a as ne,
	m as se,
	c as le,
	j as e,
	d as k,
	C as ie,
	f as W,
	J as xe,
	e as ce,
	b as me,
	n as G,
	l as w,
	s as te,
	A as ue,
	y as he,
	F as Be,
	I as Se,
} from './iframe-0uTqSs9S.js';
import { u as Pe } from './useA11y-BuGQuOJb.js';
import { d as n } from './defined-CdKp_MB-.js';
import { u as ve } from './useClickOutside-DOEh9Z-W.js';
import { u as ae } from './useLang-Dx66cFD0.js';
import { D as Ce } from './Dropdown-CL17qjds.js';
import { F as Te } from './Facet-DQZMdX7t.js';
import { B as z } from './Button-CmsiLEAv.js';
import { S as we } from './Slideout-DvI7vGOb.js';
import { P as ke } from './PaginationInfo-DqP8FQYM.js';
import { S as Ne } from './SearchHeader-BHi0LQRW.js';
import { F as Fe } from './Facets-CShzM2lt.js';
import { B as V } from './Banner-DZg3U6u9.js';
import { B as Ie } from './Breadcrumbs-kqze-Ojn.js';
import { L as Le } from './LoadMore-CT03CmWA.js';
import { P as Ae } from './Pagination-WVMgHxfy.js';
import { P as ze } from './PerPage-D8pMV3P2.js';
import { S as Oe } from './SortBy-D1lFQBNp.js';
import { L as $e } from './LayoutSelector-Cac-plGG.js';
import { F as Ee } from './FilterSummary-D4UeoXRA.js';
import { S as He } from './SearchInput-Df-AktE7.js';
import { T as De } from './TabSelection-DwzD6qYJ.js';
const Re = ({}) =>
		ce({
			display: 'flex',
			alignItems: 'center',
			flexWrap: 'wrap',
			gap: '10px',
			'.ss__layout__separator': { flex: '1 1 auto' },
			'.ss__layout__row:empty': { display: 'none' },
			'.ss__layout__row': {
				display: 'flex',
				alignItems: 'center',
				flexWrap: 'wrap',
				flexBasis: '100%',
				minWidth: '100%',
				gap: '10px',
				'& > div:only-child': { width: '100%' },
			},
		}),
	Me = re((o) => {
		const x = oe(),
			O = { treePath: ne() },
			a = se('layout', x, O, o),
			{ controller: r, toggleSideBarButton: h, disableStyles: l, className: N, internalClassName: F, layout: $, tabManager: B } = a;
		delete a.treePath;
		const m = le(a, Re),
			s = {
				Banner: { controller: r, content: r.store.merchandising.content, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				SearchHeader: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				FilterSummary: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				LayoutSelector: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				Breadcrumbs: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				Facets: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				FacetsHorizontal: { ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				Pagination: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				PaginationInfo: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				LoadMore: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				SortBy: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				PerPage: { controller: r, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				ToggleSideBarButton: { ...h, controller: r, name: 'sidebar-toggle', ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				TabSelection: { tabManager: B, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				SearchInput: {
					internalClassName: 'ss__layout__search-input',
					onSubmit: (p, u) => {
						const _ = u.trim();
						_ &&
							(r.urlManager.remove('page').remove('filter').set('query', _).go(),
							B?.tabs.forEach((i) => {
								i.controller == r || (!i.prefetch && !i.controller.store.loaded) || (i.controller.urlManager.refresh(), i.controller.search());
							}));
					},
					...n({ disableStyles: l }),
					theme: a?.theme,
					treePath: o.treePath,
				},
			},
			v = h,
			d = r.store.pagination.totalResults > 0;
		function S(p) {
			switch (p) {
				case 'searchHeader':
					return e(Ne, { ...s.SearchHeader });
				case 'tabSelection':
					return B ? e(De, { ...s.TabSelection, tabManager: B }) : null;
				case 'searchInput': {
					const u = r.urlManager.state.query;
					return xe(He, { ...s.SearchInput, key: u, defaultValue: u });
				}
				case 'filterSummary':
					if (d) return e(Ee, { ...s.FilterSummary });
					break;
				case 'layoutSelector':
					if (d) return e($e, { ...s.LayoutSelector });
					break;
				case 'paginationInfo':
					if (d) return e(ke, { ...s.PaginationInfo });
					break;
				case 'sortBy':
					if (d) return e(Oe, { ...s.SortBy });
					break;
				case 'perPage':
					if (d) return e(ze, { ...s.PerPage });
					break;
				case 'button.sidebar-toggle':
					if (d) return v && e('div', { className: 'ss__layout__sidebar-toggle-button-wrapper', children: e(z, { ...s.ToggleSideBarButton }) });
					break;
				case 'pagination':
					if (d) return r.store.config.settings?.infinite?.enabled ? e(Le, { ...s.LoadMore }) : e(Ae, { ...s.Pagination });
					break;
				case 'breadcrumbs':
					if (d) return e(Ie, { ...s.Breadcrumbs });
					break;
				case '_':
					return e('div', { className: `ss__layout__separator ss__layout__separator--${f++}` });
				case 'banner.banner':
					return e(V, { ...s.Banner, type: W.BANNER, name: 'banner' });
				case 'banner.footer':
					return e(V, { ...s.Banner, type: W.FOOTER, name: 'footer' });
				case 'banner.header':
					return e(V, { ...s.Banner, type: W.HEADER, name: 'header' });
				case 'banner.left':
					return e(V, { ...s.Banner, type: W.LEFT, name: 'left' });
				case 'facets':
					if (d) return e(Fe, { ...s.Facets });
					break;
				case 'facetsHorizontal':
					if (d) return e(Ve, { ...s.Facets });
					break;
				default:
					return null;
			}
		}
		let E = 0,
			f = 0;
		const I = $?.map((p) => {
			if (Array.isArray(p)) {
				const u = p.map((i) => S(i));
				return p.some((i, H) => i !== '_' && u[H]) ? e('div', { className: `ss__layout__row ss__layout__row--${E++}`, children: u }) : null;
			} else return S(p);
		});
		return I?.some(Boolean) ? e(ie, { children: e('div', { ...m, className: k('ss__layout', N, F), children: I }) }) : null;
	}),
	je = ({ stickyOffset: o }) =>
		ce({
			'&.ss__sidebar--sticky': { position: 'sticky', top: o || 0 },
			'& .ss__facets': { width: '100%' },
			'& .ss__sidebar__header': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'baseline',
				'& .ss__sidebar__title, & .ss__sidebar__header__close-button': { margin: '15px 0' },
				'& .ss__sidebar__header__close-button': { cursor: 'pointer' },
			},
			'& .ss__sidebar__footer': { display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'row' },
		}),
	qe = re((o) => {
		const x = oe(),
			O = {
				titleText: 'Filters',
				clearButtonText: 'Clear All',
				applyButtonText: 'Apply',
				closeButtonIcon: 'close-thin',
				hideApplyButton: !0,
				hideClearButton: !0,
				hideCloseButton: !0,
				treePath: ne(),
				layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']],
			},
			a = se('sidebar', x, O, o),
			{
				controller: r,
				layout: h,
				hideTitleText: l,
				titleText: N,
				sticky: F,
				hideApplyButton: $,
				hideFooter: B,
				onToggleSidebar: m,
				hideHeader: s,
				hideClearButton: v,
				hideClearButtonWithoutFilters: d,
				hideCloseButton: S,
				hideClearButtonText: E,
				hideApplyButtonText: f,
				hideCloseButtonText: I,
				clearButtonText: p,
				applyButtonText: u,
				closeButtonText: _,
				applyButtonIcon: i,
				clearButtonIcon: H,
				closeButtonIcon: Y,
				disableStyles: C,
				className: de,
				internalClassName: K,
				treePath: P,
			} = a,
			{ overrideElement: D, shouldRenderDefault: y } = me('sidebar', a);
		if (!y) return D;
		const T = le(a, je),
			b = G({ titleText: { value: N }, closeButtonText: { value: _ }, applyButtonText: { value: u }, clearButtonText: { value: p } }, a.lang || {}),
			L = ae(b, { controller: r }, { activeBreakpoint: x?.activeBreakpoint }),
			g = {
				Layout: { ...n({ disableStyles: C }), theme: a.theme, treePath: P },
				button: { ...n({ disableStyles: C }), theme: a?.theme, treePath: P },
			},
			R = h?.length;
		return r?.store?.loaded && r?.store?.pagination?.totalResults > 0 && R
			? e(ie, {
					children: w('div', {
						...T,
						className: k('ss__sidebar', de, K, { 'ss__sidebar--sticky': F }),
						children: [
							!s &&
								w('div', {
									className: 'ss__sidebar__header',
									children: [
										l
											? e('div', {})
											: e('h4', {
													className: k('ss__sidebar__title'),
													'aria-atomic': 'true',
													'aria-live': 'polite',
													...L.titleText.all,
													children: N,
											  }),
										!S &&
											e(z, {
												internalClassName: 'ss__sidebar__header__close-button',
												disableStyles: !0,
												onClick: () => m && m(),
												icon: Y,
												...g.button,
												name: 'close',
												children: !I && _ ? e('span', { ...L.closeButtonText?.all }) : void 0,
											}),
									],
								}),
							e('div', { className: k('ss__sidebar__inner'), children: e(Me, { controller: r, layout: h, ...g.Layout }) }),
							!B &&
								w('div', {
									className: 'ss__sidebar__footer',
									children: [
										!$ &&
											e(z, {
												internalClassName: 'ss__sidebar__footer__apply-button',
												icon: i,
												onClick: m ? () => m() : void 0,
												...g.button,
												name: 'apply',
												children: !f && u ? e('span', { ...L.applyButtonText?.all }) : void 0,
											}),
										!v &&
											!(d && !Object.keys(r?.urlManager?.state?.filter || {}).length) &&
											e(z, {
												internalClassName: 'ss__sidebar__footer__clear-button',
												icon: H,
												onClick: () => {
													r?.urlManager.remove('filter').remove('page').go(), m && m();
												},
												...g.button,
												name: 'clear',
												children: !E && p ? e('span', { ...L.clearButtonText?.all }) : void 0,
											}),
									],
								}),
						],
					}),
			  })
			: null;
	}),
	We = ({ theme: o }) =>
		ce({
			margin: '10px 0px',
			'& .ss__facets-horizontal__header': {
				display: 'flex',
				flexWrap: 'wrap',
				gap: '10px',
				'& .ss__facet__header__inner': { display: 'flex' },
				'& .ss__facet__header__selected-count': { margin: '0px 5px' },
				'& .ss__facet__header__clear-all': {
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					marginLeft: '10px',
					border: 'none',
					padding: '0',
					color: o?.variables?.colors?.primary,
					'&:hover': { cursor: 'pointer', textDecoration: 'underline', background: 'none' },
					'& .ss__icon': { marginLeft: '5px' },
				},
				'& .ss__facets-horizontal__header__dropdown': {
					margin: '0 0 10px 0',
					'.ss__dropdown__button': { display: 'flex' },
					'& .ss__dropdown__button__heading': {
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '5px 10px',
						flexShrink: '0',
						gap: '10px',
					},
					'&.ss__dropdown--open': {
						'& .ss__dropdown__button__heading': { '& .ss__icon': {} },
						'& .ss__dropdown__content': {
							padding: '10px',
							minWidth: '160px',
							width: 'max-content',
							maxHeight: '500px',
							overflowY: 'auto',
							zIndex: 1e3,
						},
					},
				},
			},
			'& .ss__facet__show-more-less': { display: 'block', margin: '8px 8px 0 8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
		}),
	Ve = re((o) => {
		const x = oe(),
			J = ne(),
			O = {
				limit: 6,
				iconCollapse: 'angle-down',
				iconExpand: 'angle-up',
				clearAllText: 'Clear All',
				toggleSidebarButtonText: 'Filters',
				facets: o.controller?.store?.facets,
				treePath: J,
			};
		let a = se('facetsHorizontal', x, O, o);
		const {
				facets: r,
				limit: h,
				alwaysShowToggleSidebarButton: l,
				hideToggleSidebarButton: N,
				onFacetOptionClick: F,
				showSelectedCount: $,
				hideSelectedCountParenthesis: B,
				clearAllIcon: m,
				showClearAllText: s,
				iconExpand: v,
				clearAllText: d,
				iconCollapse: S,
				toggleSidebarButtonText: E,
				disableStyles: f,
				className: I,
				internalClassName: p,
				controller: u,
				treePath: _,
			} = a,
			i = u?.type !== 'search' ? !1 : a.openFacetsInSidebar,
			{ overrideElement: H, shouldRenderDefault: Y } = me('facetsHorizontal', a);
		if (!Y) return H;
		const C = (t) => {
				F && F(t);
			},
			K = G(
				{
					components: {
						facetGridOptions: { onClick: C },
						facetHierarchyOptions: { onClick: C },
						facetListOptions: { onClick: C },
						facetPaletteOptions: { onClick: C },
					},
				},
				a?.theme || {}
			);
		a = { ...a, theme: K };
		let P = r,
			D = !1;
		typeof h < 'u' && Number.isInteger(h) && r && ((D = r.length > +h), h > 0 ? (P = r.slice(0, +h)) : h == 0 && (P = []));
		const [y, T] = te(!1),
			q = !!(!N && (D || l)),
			b = {
				dropdown: {
					internalClassName: 'ss__facets-horizontal__header__dropdown',
					disableClickOutside: !0,
					disableOverlay: !0,
					focusTrapContent: !0,
					...n({ disableStyles: f }),
					theme: a?.theme,
					treePath: _,
				},
				button: { ...n({ disableStyles: f }), theme: a?.theme, treePath: _ },
				icon: {
					internalClassName: 'ss__dropdown__button__heading__icon',
					...n({ disableStyles: f }),
					theme: a?.theme,
					treePath: `${_} dropdown button`,
				},
				facet: {
					internalClassName: 'ss__facets-horizontal__content__facet',
					justContent: !0,
					statefulOverflow: q ? !0 : void 0,
					...n({ disableStyles: f }),
					theme: a?.theme,
					treePath: `${_} dropdown`,
				},
				slideout: {
					internalClassName: 'ss__facets-horizontal__slideout',
					onChange: (t) => T(t),
					...n({ disableStyles: f }),
					theme: a?.theme,
					treePath: _,
				},
				sidebar: {
					internalClassName: 'ss__facets-horizontal__sidebar',
					onToggleSidebar: () => T(!1),
					...n({ disableStyles: f }),
					theme: a?.theme,
					treePath: _,
				},
				toggleSidebarButton: { name: 'sidebar-toggle', ...n({ disableStyles: f }), theme: a?.theme, treePath: _ },
			},
			L = le(a, We),
			[g, R] = te(void 0),
			Q = ve(() => {
				g && R(void 0);
			}),
			[U, _e] = te(void 0),
			X = ue(void 0),
			Z = ue(void 0),
			pe = (t) => {
				t.collapsed && (t.toggleCollapse(), (X.current = t)), (Z.current = t.field), _e(t.field), T(!0);
			};
		he(() => {
			if (!U || !y) return;
			const t = Q.current?.querySelector('.ss__facets-horizontal__slideout'),
				c = Array.from(t?.querySelectorAll('.ss__facet') || []).find((A) => A.classList.contains(`ss__facet--${U}`));
			c &&
				(typeof c.scrollIntoView == 'function' && c.scrollIntoView({ block: 'start' }),
				c.querySelector('.ss__facet__header')?.focus({ preventScroll: !0 })),
				_e(void 0);
		}, [U, y]),
			he(() => {
				if (y) return;
				const t = X.current;
				(X.current = void 0), t && !t.collapsed && typeof t.toggleCollapse == 'function' && t.toggleCollapse();
				const c = Z.current;
				(Z.current = void 0),
					c &&
						Array.from(Q.current?.querySelectorAll('.ss__facets-horizontal__header__dropdown') || [])
							.find((ee) => ee.classList.contains(`ss__facets-horizontal__header__dropdown--${c}`))
							?.querySelector('.ss__dropdown__button')
							?.focus();
			}, [y]);
		const fe = G({ toggleSidebarButtonText: { value: E } }, a.lang || {}),
			ge = ae(fe, { facets: r, sidebarOpenState: y }, { activeBreakpoint: x?.activeBreakpoint }),
			be = ({ sidebarOpenState: t, setSidebarOpenState: c, subProps: A }) =>
				e(z, {
					...A.toggleSidebarButton,
					internalClassName: 'ss__facets-horizontal__header__toggle-sidebar',
					onClick: () => c(!t),
					children: e('div', {
						className: k('ss__facets-horizontal__header__toggle-sidebar__inner', { 'ss__facets-horizontal__header__toggle-sidebar__inner--open': t }),
						active: t,
						children: e('span', { ...ge.toggleSidebarButtonText.all }),
					}),
				}),
			ye = q || !!i;
		return (P && P?.length > 0) || D
			? e(ie, {
					children: w('div', {
						className: k('ss__facets-horizontal', I, p),
						ref: Q,
						...L,
						children: [
							w('div', {
								className: 'ss__facets-horizontal__header',
								children: [
									P?.map((t) => {
										const c = t?.values?.filter((j) => j?.filtered).length || t?.active?.high !== t?.range?.high || t?.active?.low !== t?.range?.low,
											A = {
												dropdownButton: {
													attributes: {
														'aria-label': `currently ${g?.field === t.field ? 'open' : 'collapsed'} ${t.label} facet dropdown ${
															t.values?.length ? t.values?.length + ' options' : ''
														}`,
													},
												},
												clearAllText: { value: d },
											},
											ee = G(A, a.lang || {}),
											M = ae(ee, { selectedFacet: g, facet: t }, { activeBreakpoint: x?.activeBreakpoint });
										return e(Ce, {
											...b.dropdown,
											internalClassName: k(
												b.dropdown.internalClassName,
												`ss__facets-horizontal__header__dropdown--${t.display}`,
												`ss__facets-horizontal__header__dropdown--${t.field}`
											),
											open: i ? !1 : g?.field === t.field,
											onClick: (j) => {
												if (i) {
													pe(t);
													return;
												}
												g !== t && j.code !== 'Escape' ? R(t) : R(void 0);
											},
											button: w('div', {
												className: 'ss__dropdown__button__heading',
												...M.dropdownButton.attributes,
												children: [
													w('div', {
														className: 'ss__facet__header__inner',
														children: [
															e('span', { ...M.dropdownButton.value, children: t?.label }),
															$ && c && t.type !== 'range'
																? e('span', { className: 'ss__facet__header__selected-count', children: B ? c : `(${c})` })
																: null,
															(M.clearAllText.value || m) && c
																? e(z, {
																		...b.button,
																		internalClassName: 'ss__facet__header__clear-all',
																		name: 'reset-facet',
																		onClick: (j) => {
																			j.stopPropagation(), t?.clear.url.link.onClick();
																		},
																		icon: m || void 0,
																		children: M.clearAllText.value && s ? e('label', { ...M.clearAllText.all }) : null,
																  })
																: e(Be, {}),
														],
													}),
													e(Se, {
														...b.icon,
														...(g?.field === t.field
															? { ...(typeof v == 'string' ? { icon: v } : v) }
															: { ...(typeof S == 'string' ? { icon: S } : S) }),
													}),
												],
											}),
											disableOverlay: !1,
											children: !i && e(Te, { ...b.facet, facet: t }),
										});
									}),
									q && e(be, { sidebarOpenState: y, setSidebarOpenState: T, subProps: b }),
								],
							}),
							ye &&
								e(we, {
									...b.slideout,
									active: y,
									children: e('div', {
										className: 'ss__facets-horizontal__slideout__sidebar-wrapper',
										ref: (t) => Pe(t, 0, !0, () => T((c) => !c)),
										children: e(qe, { ...b.sidebar, controller: u }),
									}),
								}),
						],
					}),
			  })
			: null;
	});
export { Ve as F, Me as L, qe as S };
