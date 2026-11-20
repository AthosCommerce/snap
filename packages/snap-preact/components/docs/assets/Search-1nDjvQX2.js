import { s as F, n as I, o as U, u as G, a as J, m as K, A as V, y as E, c as X, j as r, l as M, d as A, C as Y, e as Z } from './iframe-CBMP6iq3.js';
import { u as ee, F as te } from './useA11y-BuGQuOJb.js';
import { c as H } from './componentNameToClassName-btPHBToT.js';
import { u as oe, S as ae } from './Slideout-CtsQZp-g.js';
import { u as ie } from './useLang-Dx66cFD0.js';
import { d as g } from './defined-CdKp_MB-.js';
import { T as O } from './Toolbar-BaxQK2PY.js';
import { S as j } from './FacetsHorizontal-DH3KG3vc.js';
import { R as re } from './Results-B1aDgLlz.js';
import { N as se } from './NoResults-Cdj3V8ha.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-DtQ4nwO8.js';
import './useClickOutside-CYgcb6yY.js';
import './Dropdown-DmIQwaKA.js';
import './Facet-OlUlVoFY.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Button-CDadhUc9.js';
import './SearchInput-BVu3wkIZ.js';
import './FacetListOptions-C5czvGqf.js';
import './Checkbox-Bf1jD8rh.js';
import './Radio-DA80vQT3.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-Dfanjq4X.js';
import './FacetPaletteOptions-CM1X0ghd.js';
import './names-EhrrLUyQ.js';
import './Image-DCYn0aso.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-CU4I08jo.js';
import './FacetSlider-BLr0dnSi.js';
import './PaginationInfo-Bm3Wp1aX.js';
import './SearchHeader-BJ-rDmC6.js';
import './Facets-C4kyNZhV.js';
import './Banner-DLjUyzNk.js';
import './withTracking-CHJH0HXR.js';
import './createImpressionObserver-BETervzW.js';
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
import './useCreateController-BQWBOW7h.js';
const le = (t, a, m) => {
		const _ = t.storage,
			s = _.get(a) || m || void 0,
			[S, p] = F(s);
		return [
			S,
			(e) => {
				_.set(a, e), p(e);
			},
		];
	},
	ne = (t, a) => {
		const m = t?.layoutOptions || [],
			_ = (e, l) =>
				!e || !l
					? !1
					: e.value !== void 0 && l.value !== void 0
					? e.value === l.value
					: e.label !== void 0 && l.label !== void 0
					? e.label === l.label
					: !1,
			o = (e) => e && { value: e.value, label: e.label },
			[s, S] = le(t.controller, 'layoutOptions', o(m.filter((e) => e.default).pop()));
		if (!m.length) return;
		const p = m.find((e) => _(e, s));
		s && !p && S(o(m.filter((e) => e.default).pop())),
			(t.theme = t.theme || {}),
			(t.theme.components = {
				...(t.theme.components || {}),
				layoutSelector: {
					options: m,
					onSelect: (e, l) => {
						l && S(o(l));
					},
					selected: p,
				},
			});
		let B = !1;
		if (a.components && t.treePath) {
			const e = t.treePath.split(' ')[0],
				[l] = e.split('.');
			Object.keys(a.components).forEach((n) => {
				const C = (n.includes(',') ? n.split(/\s*,\s*/) : [n]).some((y) => {
					const v = y.replace(/^\*?(\([MTD]\))?/, '').split(' '),
						$ = v.splice(-1).pop() ?? '',
						[N] = $.split('.');
					return N == 'toolbar' && (!v.length || v[0] == l || v[0] == e);
				});
				if (a.components && C) {
					const y = a.components[n];
					y?.layout && y.layout.toString().indexOf('layoutSelector') > -1 && (B = !0);
				}
			});
		}
		p?.overrides && B && (t.theme = I(t.theme, { components: p.overrides.components }));
	},
	me = (t) => {
		let a = 'ss__search';
		t.alias && (a = `ss__${H(t.alias)}`);
		const m = t.mobileDisplayAt
			? typeof t.mobileDisplayAt == 'boolean'
				? '(min-width: 0px)'
				: `(max-width: ${t.mobileDisplayAt})`
			: '(max-width: 0px)';
		return Z({
			[`.${a}__header-section`]: { marginBottom: '20px' },
			[`.${a}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
			[`.${a}__sidebar .ss__sidebar`]: {
				flex: '0 1 auto',
				width: t.sidebarWidth,
				'&:empty': { display: 'none' },
				[`@media ${m}`]: { width: '100%' },
			},
			[`.${a}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
		});
	},
	Ct = U((t) => {
		const a = G(),
			m = J(),
			_ = {
				toggleSidebarButtonText: 'Filters',
				sidebarWidth: '270px',
				mobileDisplayAt: a?.variables?.breakpoints?.tablet ? `${a.variables?.breakpoints?.tablet}px` : '991px',
				treePath: m,
			},
			o = K(t.alias || 'search', a, _, t),
			{
				disableStyles: s,
				className: S,
				internalClassName: p,
				hideSidebar: B,
				toggleSidebarButtonText: e,
				hideTopToolbar: l,
				tabManager: n,
				hideMiddleToolbar: R,
				hideBottomToolbar: C,
				resultComponent: y,
				hideToggleSidebarButton: v,
				mobileDisplayAt: $,
				toggleSidebarStartClosed: N,
				treePath: c,
				alias: W,
			} = o;
		let d = o.controller,
			i = 'ss__search';
		o.alias && (i = `ss__${H(o.alias)}`), ne(o, a), n && n.active && (d = n.active?.controller);
		const T = d.store,
			u = oe($ ? (typeof $ == 'boolean' ? '(min-width: 0px)' : `(max-width: ${$})`) : '(max-width: 0px)'),
			[b, x] = F(W !== 'searchHorizontal' && !N && !u),
			w = V(u),
			k = u && !w.current;
		E(() => {
			w.current = u;
		}),
			E(() => {
				x(u ? !1 : !N);
			}, [u]);
		const q = I({ toggleSidebarButtonText: { value: e } }, o.lang || {}),
			L = ie(q, { filters: T.filters, sidebarOpenState: b }, { activeBreakpoint: a?.activeBreakpoint }),
			z = () =>
				r('div', {
					className: A(`${i}__sidebar-toggle`, b ? `${i}__sidebar-toggle--open` : ''),
					active: b,
					children: r('span', { ...L.toggleSidebarButtonText.all }),
				}),
			P = {
				onClick: () => {
					x(!b),
						setTimeout(() => {
							if (!b) {
								const f = document.querySelector('.ss__sidebar')?.querySelector(te);
								f && f.focus();
							}
						});
				},
				children: !v && T.loaded && (e || L.toggleSidebarButtonText?.value) ? z : void 0,
			},
			h = {
				TopToolbar: {
					name: 'top',
					internalClassName: `${i}__header-section__toolbar--top-toolbar`,
					layout: [['banner.header'], ['searchHeader', '_']],
					toggleSideBarButton: { ...P },
					tabManager: n,
					...g({ disableStyles: s }),
					theme: o.theme,
					treePath: c,
				},
				MiddleToolbar: {
					name: 'middle',
					internalClassName: `${i}__content__toolbar--middle-toolbar`,
					layout: u
						? [['tabSelection'], ['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
						: [['tabSelection'], ['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
					toggleSideBarButton: { ...P },
					tabManager: n,
					...g({ disableStyles: s }),
					theme: o.theme,
					treePath: c,
				},
				BottomToolbar: {
					name: 'bottom',
					internalClassName: `${i}__content__toolbar--bottom-toolbar`,
					layout: [['banner.footer'], ['_', 'pagination', '_']],
					toggleSideBarButton: { ...P },
					tabManager: n,
					...g({ disableStyles: s }),
					theme: o.theme,
					treePath: c,
				},
				Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...g({ disableStyles: s }), theme: o.theme, treePath: c },
				MobileSidebar: {
					layout: [['filterSummary'], ['facets'], ['banner.left']],
					hideApplyButton: !1,
					hideClearButton: !1,
					hideCloseButton: !1,
					onToggleSidebar: () => x((f) => !f),
					...g({ disableStyles: s }),
					theme: o.theme,
					treePath: `${c} slideout`,
				},
				Results: { resultComponent: y, ...g({ disableStyles: s }), theme: o.theme, treePath: c },
				NoResults: { ...g({ disableStyles: s }), theme: o.theme, treePath: c },
				Slideout: {
					width: o.sidebarWidth,
					internalClassName: `${i}__slideout`,
					onChange: (f) => x(f),
					...g({ disableStyles: s }),
					theme: o.theme,
					treePath: c,
				},
			},
			Q = X(o, me),
			D = d.id;
		return r(Y, {
			children: M('div', {
				...Q,
				className: A(i, S, p, b ? `${i}--sidebar-open` : ''),
				children: [
					r('div', { className: `${i}__header-section`, children: !l && r(O, { ...h.TopToolbar, controller: d }) }),
					M('div', {
						className: `${i}__main-section`,
						children: [
							!B &&
								T.loaded &&
								T.pagination.totalResults > 0 &&
								(u
									? r(ae, {
											...h.Slideout,
											active: k ? !1 : b,
											children: r('div', {
												className: `${i}__sidebar ${i}__slideout__sidebar-wrapper`,
												ref: (f) => ee(f, 0, !0),
												children: r(j, { ...h.MobileSidebar, controller: d }),
											}),
									  })
									: b
									? r('div', { className: `${i}__sidebar`, children: r(j, { ...h.Sidebar, controller: d }) })
									: null),
							M('div', {
								className: A(`${i}__content`),
								...(n?.active ? { id: `ss__tabpanel--${D}`, role: 'tabpanel', 'aria-labelledby': `ss__tab--${D}` } : {}),
								children: [
									!R && r(O, { ...h.MiddleToolbar, controller: d }),
									T.pagination.totalResults
										? r(re, { ...h.Results, controller: d })
										: T.pagination.totalResults === 0 && r(se, { ...h.NoResults, controller: d }),
									!C && r(O, { ...h.BottomToolbar, controller: d }),
								],
							}),
						],
					}),
				],
			}),
		});
	});
export { Ct as Search };
