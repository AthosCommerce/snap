import {
	o as re,
	u as oe,
	a as ne,
	m as se,
	c as le,
	j as e,
	d as A,
	C as ie,
	f as V,
	e as ce,
	b as me,
	n as Y,
	l as T,
	s as te,
	A as ue,
	y as he,
	F as xe,
	I as Be,
} from './iframe-Bc4KSH0T.js';
import { u as Se } from './useA11y-BuGQuOJb.js';
import { d as n } from './defined-CdKp_MB-.js';
import { u as Pe } from './useClickOutside-CoFEN31h.js';
import { u as ae } from './useLang-Dx66cFD0.js';
import { D as ve } from './Dropdown-tCLF6hwk.js';
import { F as Ce } from './Facet-JzgYSJ_F.js';
import { B as z } from './Button-C4cTOUHA.js';
import { S as Te } from './Slideout-DA0XdRZT.js';
import { P as we } from './PaginationInfo-K-nKWsAd.js';
import { S as ke } from './SearchHeader-CxEO9llg.js';
import { F as Ne } from './Facets-DXg3Av-H.js';
import { B as G } from './Banner-CMX4Y7Vh.js';
import { B as Fe } from './Breadcrumbs-DmxOMnRy.js';
import { L as Le } from './LoadMore-tgvuskFW.js';
import { P as Ie } from './Pagination-CdrYtlrh.js';
import { P as Ae } from './PerPage-DHlasSSl.js';
import { S as ze } from './SortBy-B6sDet1z.js';
import { L as Oe } from './LayoutSelector-CMNTfShJ.js';
import { F as $e } from './FilterSummary-CmmIwfAj.js';
import { T as Ee } from './TabSelection-By3kzuho.js';
const He = ({}) =>
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
	De = re((o) => {
		const b = oe(),
			O = { treePath: ne() },
			a = se('layout', b, O, o),
			{ controller: r, toggleSideBarButton: _, disableStyles: l, className: w, internalClassName: k, layout: $, tabManager: S } = a;
		delete a.treePath;
		const u = le(a, He),
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
				ToggleSideBarButton: { ..._, controller: r, name: 'sidebar-toggle', ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
				TabSelection: { tabManager: S, ...n({ disableStyles: l }), theme: a?.theme, treePath: o.treePath },
			},
			P = _,
			c = r.store.pagination.totalResults > 0;
		function y(m) {
			switch (m) {
				case 'searchHeader':
					return e(ke, { ...s.SearchHeader });
				case 'tabSelection':
					return S ? e(Ee, { ...s.TabSelection, tabManager: S }) : null;
				case 'filterSummary':
					if (c) return e($e, { ...s.FilterSummary });
					break;
				case 'layoutSelector':
					if (c) return e(Oe, { ...s.LayoutSelector });
					break;
				case 'paginationInfo':
					if (c) return e(we, { ...s.PaginationInfo });
					break;
				case 'sortBy':
					if (c) return e(ze, { ...s.SortBy });
					break;
				case 'perPage':
					if (c) return e(Ae, { ...s.PerPage });
					break;
				case 'button.sidebar-toggle':
					if (c) return P && e('div', { className: 'ss__layout__sidebar-toggle-button-wrapper', children: e(z, { ...s.ToggleSideBarButton }) });
					break;
				case 'pagination':
					if (c) return r.store.config.settings?.infinite?.enabled ? e(Le, { ...s.LoadMore }) : e(Ie, { ...s.Pagination });
					break;
				case 'breadcrumbs':
					if (c) return e(Fe, { ...s.Breadcrumbs });
					break;
				case '_':
					return e('div', { className: `ss__layout__separator ss__layout__separator--${h++}` });
				case 'banner.banner':
					return e(G, { ...s.Banner, type: V.BANNER, name: 'banner' });
				case 'banner.footer':
					return e(G, { ...s.Banner, type: V.FOOTER, name: 'footer' });
				case 'banner.header':
					return e(G, { ...s.Banner, type: V.HEADER, name: 'header' });
				case 'banner.left':
					return e(G, { ...s.Banner, type: V.LEFT, name: 'left' });
				case 'facets':
					if (c) return e(Ne, { ...s.Facets });
					break;
				case 'facetsHorizontal':
					if (c) return e(qe, { ...s.Facets });
					break;
				default:
					return null;
			}
		}
		let E = 0,
			h = 0;
		const v = $?.map((m) => {
			if (Array.isArray(m)) {
				const x = m.map((f) => y(f));
				return m.some((f, H) => f !== '_' && x[H]) ? e('div', { className: `ss__layout__row ss__layout__row--${E++}`, children: x }) : null;
			} else return y(m);
		});
		return v?.some(Boolean) ? e(ie, { children: e('div', { ...u, className: A('ss__layout', w, k), children: v }) }) : null;
	}),
	Re = ({ stickyOffset: o }) =>
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
	je = re((o) => {
		const b = oe(),
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
			a = se('sidebar', b, O, o),
			{
				controller: r,
				layout: _,
				hideTitleText: l,
				titleText: w,
				sticky: k,
				hideApplyButton: $,
				hideFooter: S,
				onToggleSidebar: u,
				hideHeader: s,
				hideClearButton: P,
				hideCloseButton: c,
				hideClearButtonText: y,
				hideApplyButtonText: E,
				hideCloseButtonText: h,
				clearButtonText: v,
				applyButtonText: m,
				closeButtonText: x,
				applyButtonIcon: p,
				clearButtonIcon: f,
				closeButtonIcon: H,
				disableStyles: q,
				className: N,
				internalClassName: de,
				treePath: W,
			} = a,
			{ overrideElement: C, shouldRenderDefault: D } = me('sidebar', a);
		if (!D) return C;
		const g = le(a, Re),
			R = Y({ titleText: { value: w }, closeButtonText: { value: x }, applyButtonText: { value: m }, clearButtonText: { value: v } }, a.lang || {}),
			d = ae(R, { controller: r }, { activeBreakpoint: b?.activeBreakpoint }),
			L = {
				Layout: { ...n({ disableStyles: q }), theme: a.theme, treePath: W },
				button: { ...n({ disableStyles: q }), theme: a?.theme, treePath: W },
			},
			B = _?.length;
		return r?.store?.loaded && r?.store?.pagination?.totalResults > 0 && B
			? e(ie, {
					children: T('div', {
						...g,
						className: A('ss__sidebar', N, de, { 'ss__sidebar--sticky': k }),
						children: [
							!s &&
								T('div', {
									className: 'ss__sidebar__header',
									children: [
										l
											? e('div', {})
											: e('h4', {
													className: A('ss__sidebar__title'),
													'aria-atomic': 'true',
													'aria-live': 'polite',
													...d.titleText.all,
													children: w,
											  }),
										!c &&
											e(z, {
												internalClassName: 'ss__sidebar__header__close-button',
												disableStyles: !0,
												onClick: () => u && u(),
												icon: H,
												...L.button,
												name: 'close',
												children: !h && x ? e('span', { ...d.closeButtonText?.all }) : void 0,
											}),
									],
								}),
							e('div', { className: A('ss__sidebar__inner'), children: e(De, { controller: r, layout: _, ...L.Layout }) }),
							!S &&
								T('div', {
									className: 'ss__sidebar__footer',
									children: [
										!$ &&
											e(z, {
												internalClassName: 'ss__sidebar__footer__apply-button',
												icon: p,
												onClick: u ? () => u() : void 0,
												...L.button,
												name: 'apply',
												children: !E && m ? e('span', { ...d.applyButtonText?.all }) : void 0,
											}),
										!P &&
											e(z, {
												internalClassName: 'ss__sidebar__footer__clear-button',
												icon: f,
												onClick: () => {
													r?.urlManager.remove('filter').remove('page').go(), u && u();
												},
												...L.button,
												name: 'clear',
												children: !y && v ? e('span', { ...d.clearButtonText?.all }) : void 0,
											}),
									],
								}),
						],
					}),
			  })
			: null;
	}),
	Me = ({ theme: o }) =>
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
	qe = re((o) => {
		const b = oe(),
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
		let a = se('facetsHorizontal', b, O, o);
		const {
				facets: r,
				limit: _,
				alwaysShowToggleSidebarButton: l,
				hideToggleSidebarButton: w,
				onFacetOptionClick: k,
				showSelectedCount: $,
				hideSelectedCountParenthesis: S,
				clearAllIcon: u,
				showClearAllText: s,
				iconExpand: P,
				clearAllText: c,
				iconCollapse: y,
				toggleSidebarButtonText: E,
				disableStyles: h,
				className: v,
				internalClassName: m,
				controller: x,
				treePath: p,
			} = a,
			f = x?.type !== 'search' ? !1 : a.openFacetsInSidebar,
			{ overrideElement: H, shouldRenderDefault: q } = me('facetsHorizontal', a);
		if (!q) return H;
		const N = (t) => {
				k && k(t);
			},
			W = Y(
				{
					components: {
						facetGridOptions: { onClick: N },
						facetHierarchyOptions: { onClick: N },
						facetListOptions: { onClick: N },
						facetPaletteOptions: { onClick: N },
					},
				},
				a?.theme || {}
			);
		a = { ...a, theme: W };
		let C = r,
			D = !1;
		typeof _ < 'u' && Number.isInteger(_) && r && ((D = r.length > +_), _ > 0 ? (C = r.slice(0, +_)) : _ == 0 && (C = []));
		const [g, F] = te(!1),
			R = !!(!w && (D || l)),
			d = {
				dropdown: {
					internalClassName: 'ss__facets-horizontal__header__dropdown',
					disableClickOutside: !0,
					disableOverlay: !0,
					focusTrapContent: !0,
					...n({ disableStyles: h }),
					theme: a?.theme,
					treePath: p,
				},
				button: { ...n({ disableStyles: h }), theme: a?.theme, treePath: p },
				icon: {
					internalClassName: 'ss__dropdown__button__heading__icon',
					...n({ disableStyles: h }),
					theme: a?.theme,
					treePath: `${p} dropdown button`,
				},
				facet: {
					internalClassName: 'ss__facets-horizontal__content__facet',
					justContent: !0,
					statefulOverflow: R ? !0 : void 0,
					...n({ disableStyles: h }),
					theme: a?.theme,
					treePath: `${p} dropdown`,
				},
				slideout: {
					internalClassName: 'ss__facets-horizontal__slideout',
					onChange: (t) => F(t),
					...n({ disableStyles: h }),
					theme: a?.theme,
					treePath: p,
				},
				sidebar: {
					internalClassName: 'ss__facets-horizontal__sidebar',
					onToggleSidebar: () => F(!1),
					...n({ disableStyles: h }),
					theme: a?.theme,
					treePath: p,
				},
				toggleSidebarButton: { ...n({ disableStyles: h }), theme: a?.theme, treePath: p },
			},
			L = le(a, Me),
			[B, K] = te(void 0),
			Q = Pe(() => {
				B && K(void 0);
			}),
			[U, _e] = te(void 0),
			X = ue(void 0),
			Z = ue(void 0),
			pe = (t) => {
				t.collapsed && (t.toggleCollapse(), (X.current = t)), (Z.current = t.field), _e(t.field), F(!0);
			};
		he(() => {
			if (!U || !g) return;
			const t = Q.current?.querySelector('.ss__facets-horizontal__slideout'),
				i = Array.from(t?.querySelectorAll('.ss__facet') || []).find((I) => I.classList.contains(`ss__facet--${U}`));
			i &&
				(typeof i.scrollIntoView == 'function' && i.scrollIntoView({ block: 'start' }),
				i.querySelector('.ss__facet__header')?.focus({ preventScroll: !0 })),
				_e(void 0);
		}, [U, g]),
			he(() => {
				if (g) return;
				const t = X.current;
				(X.current = void 0), t && !t.collapsed && typeof t.toggleCollapse == 'function' && t.toggleCollapse();
				const i = Z.current;
				(Z.current = void 0),
					i &&
						Array.from(Q.current?.querySelectorAll('.ss__facets-horizontal__header__dropdown') || [])
							.find((ee) => ee.classList.contains(`ss__facets-horizontal__header__dropdown--${i}`))
							?.querySelector('.ss__dropdown__button')
							?.focus();
			}, [g]);
		const fe = Y({ toggleSidebarButtonText: { value: E } }, a.lang || {}),
			ge = ae(fe, { facets: r, sidebarOpenState: g }, { activeBreakpoint: b?.activeBreakpoint }),
			be = ({ sidebarOpenState: t, setSidebarOpenState: i, subProps: I }) =>
				e(z, {
					...I.toggleSidebarButton,
					internalClassName: 'ss__facets-horizontal__header__toggle-sidebar',
					onClick: () => i(!t),
					children: e('span', { ...ge.toggleSidebarButtonText.all }),
				}),
			ye = R || !!f;
		return (C && C?.length > 0) || D
			? e(ie, {
					children: T('div', {
						className: A('ss__facets-horizontal', v, m),
						ref: Q,
						...L,
						children: [
							T('div', {
								className: 'ss__facets-horizontal__header',
								children: [
									C?.map((t) => {
										const i = t?.values?.filter((M) => M?.filtered).length || t?.active?.high !== t?.range?.high || t?.active?.low !== t?.range?.low,
											I = {
												dropdownButton: {
													attributes: {
														'aria-label': `currently ${B?.field === t.field ? 'open' : 'collapsed'} ${t.label} facet dropdown ${
															t.values?.length ? t.values?.length + ' options' : ''
														}`,
													},
												},
												clearAllText: { value: c },
											},
											ee = Y(I, a.lang || {}),
											j = ae(ee, { selectedFacet: B, facet: t }, { activeBreakpoint: b?.activeBreakpoint });
										return e(ve, {
											...d.dropdown,
											internalClassName: A(
												d.dropdown.internalClassName,
												`ss__facets-horizontal__header__dropdown--${t.display}`,
												`ss__facets-horizontal__header__dropdown--${t.field}`
											),
											open: f ? !1 : B?.field === t.field,
											onClick: (M) => {
												if (f) {
													pe(t);
													return;
												}
												B !== t && M.code !== 'Escape' ? K(t) : K(void 0);
											},
											button: T('div', {
												className: 'ss__dropdown__button__heading',
												...j.dropdownButton.attributes,
												children: [
													T('div', {
														className: 'ss__facet__header__inner',
														children: [
															e('span', { ...j.dropdownButton.value, children: t?.label }),
															$ && i && t.type !== 'range'
																? e('span', { className: 'ss__facet__header__selected-count', children: S ? i : `(${i})` })
																: null,
															(j.clearAllText.value || u) && i
																? e(z, {
																		...d.button,
																		internalClassName: 'ss__facet__header__clear-all',
																		name: 'reset-facet',
																		onClick: (M) => {
																			M.stopPropagation(), t?.clear.url.link.onClick();
																		},
																		icon: u || void 0,
																		children: j.clearAllText.value && s ? e('label', { ...j.clearAllText.all }) : null,
																  })
																: e(xe, {}),
														],
													}),
													e(Be, {
														...d.icon,
														...(B?.field === t.field
															? { ...(typeof P == 'string' ? { icon: P } : P) }
															: { ...(typeof y == 'string' ? { icon: y } : y) }),
													}),
												],
											}),
											disableOverlay: !1,
											children: !f && e(Ce, { ...d.facet, facet: t }),
										});
									}),
									R && e(be, { sidebarOpenState: g, setSidebarOpenState: F, subProps: d }),
								],
							}),
							ye &&
								e(Te, {
									...d.slideout,
									active: g,
									children: e('div', {
										className: 'ss__facets-horizontal__slideout__sidebar-wrapper',
										ref: (t) => Se(t, 0, !0, () => F((i) => !i)),
										children: e(je, { ...d.sidebar, controller: x }),
									}),
								}),
						],
					}),
			  })
			: null;
	});
export { qe as F, De as L, je as S };
