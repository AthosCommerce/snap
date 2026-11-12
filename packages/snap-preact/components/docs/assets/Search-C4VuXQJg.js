import { s as F, n as I, o as U, u as G, a as J, m as K, A as V, y as E, c as X, j as r, l as M, d as A, C as Y, e as Z } from './iframe-0uTqSs9S.js';
import { u as ee, F as te } from './useA11y-BuGQuOJb.js';
import { c as H } from './componentNameToClassName-btPHBToT.js';
import { u as oe, S as ae } from './Slideout-DvI7vGOb.js';
import { u as ie } from './useLang-Dx66cFD0.js';
import { d as g } from './defined-CdKp_MB-.js';
import { T as O } from './Toolbar-BZ7mMkfh.js';
import { S as j } from './FacetsHorizontal-D193PKaF.js';
import { R as re } from './Results-Cj_dFI-9.js';
import { N as se } from './NoResults-CKY9kuuO.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-D_0SkdOn.js';
import './useClickOutside-DOEh9Z-W.js';
import './Dropdown-CL17qjds.js';
import './Facet-DQZMdX7t.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Button-CmsiLEAv.js';
import './SearchInput-Df-AktE7.js';
import './FacetListOptions-BKcb2oXB.js';
import './Checkbox-7fOTHZL3.js';
import './Radio-Cqas9W8s.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-BF9owBak.js';
import './FacetPaletteOptions-HvPNtfKg.js';
import './names-Cka5BSlk.js';
import './Image-C3O8T0nj.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-CGgJIm7v.js';
import './FacetSlider-BBgYI5hi.js';
import './PaginationInfo-DqP8FQYM.js';
import './SearchHeader-BHi0LQRW.js';
import './Facets-CShzM2lt.js';
import './Banner-DZg3U6u9.js';
import './withTracking-Bxgx8W-i.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './Breadcrumbs-kqze-Ojn.js';
import './LoadMore-CT03CmWA.js';
import './useIntersection--tMWEcR1.js';
import './Pagination-WVMgHxfy.js';
import './PerPage-D8pMV3P2.js';
import './Select-BGmz8t2_.js';
import './selectionKey-CmN2KTR5.js';
import './List-PZ5HrgK2.js';
import './RadioList-DsDAvIw3.js';
import './SortBy-D1lFQBNp.js';
import './LayoutSelector-Cac-plGG.js';
import './FilterSummary-D4UeoXRA.js';
import './Filter-CgxQ6G_w.js';
import './TabSelection-DwzD6qYJ.js';
import './useDisplaySettings-CrQOlxmk.js';
import './ResultTracker-Cu6M_iF6.js';
import './InlineBanner-c_NbPpya.js';
import './Result-DV0wVcu6.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './CalloutBadge-DXapTNdX.js';
import './Rating-ERPkfVOZ.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './Slideshow-zOCrnuUn.js';
import './Grid-BRtXjrhJ.js';
import './truncate-CqAvmyZI.js';
import './useCreateController-D4sbGnnv.js';
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
