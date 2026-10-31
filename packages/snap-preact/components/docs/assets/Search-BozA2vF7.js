import { s as F, n as I, o as U, u as G, a as J, m as K, A as V, y as E, c as X, j as s, l as M, d as A, C as Y, e as Z } from './iframe-Bc4KSH0T.js';
import { u as ee, F as te } from './useA11y-BuGQuOJb.js';
import { c as H } from './componentNameToClassName-btPHBToT.js';
import { u as oe, S as ae } from './Slideout-DA0XdRZT.js';
import { u as ie } from './useLang-Dx66cFD0.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { T as O } from './Toolbar-vvYI5bhh.js';
import { S as j } from './FacetsHorizontal-DD9MOQMC.js';
import { R as re } from './Results-xmDCY8C2.js';
import { N as se } from './NoResults-C8bWCsNK.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-d1j9-VxC.js';
import './useClickOutside-CoFEN31h.js';
import './Dropdown-tCLF6hwk.js';
import './Facet-JzgYSJ_F.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Button-C4cTOUHA.js';
import './SearchInput-BPIgwblk.js';
import './FacetListOptions-BRsZOoKo.js';
import './Checkbox-4N2aMGfq.js';
import './Radio-CEEJysGh.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-sMDWNmLW.js';
import './FacetPaletteOptions-D2DLl7t9.js';
import './names-Cka5BSlk.js';
import './Image-9Pub_w4s.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-B4YG6F_c.js';
import './FacetSlider-Cclsjvzk.js';
import './PaginationInfo-K-nKWsAd.js';
import './SearchHeader-CxEO9llg.js';
import './Facets-DXg3Av-H.js';
import './Banner-CMX4Y7Vh.js';
import './withTracking-D6kix-j7.js';
import './createImpressionObserver-m2TNXj0r.js';
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
import './useCreateController-DqNcG6uZ.js';
const le = (t, a, m) => {
		const S = t.storage,
			l = S.get(a) || m || void 0,
			[y, p] = F(l);
		return [
			y,
			(e) => {
				S.set(a, e), p(e);
			},
		];
	},
	ne = (t, a) => {
		const m = t?.layoutOptions || [],
			S = (e, i) =>
				!e || !i
					? !1
					: e.value !== void 0 && i.value !== void 0
					? e.value === i.value
					: e.label !== void 0 && i.label !== void 0
					? e.label === i.label
					: !1,
			o = (e) => e && { value: e.value, label: e.label },
			[l, y] = le(t.controller, 'layoutOptions', o(m.filter((e) => e.default).pop()));
		if (!m.length) return;
		const p = m.find((e) => S(e, l));
		l && !p && y(o(m.filter((e) => e.default).pop())),
			(t.theme = t.theme || {}),
			(t.theme.components = {
				...(t.theme.components || {}),
				layoutSelector: {
					options: m,
					onSelect: (e, i) => {
						i && y(o(i));
					},
					selected: p,
				},
			});
		let x = !1;
		if (a.components && t.treePath) {
			const e = t.treePath.split(' ')[0];
			Object.keys(a.components).forEach((i) => {
				const N = (i.includes(',') ? i.split(/\s*,\s*/) : [i]).some((v) => {
					const n = v.split(' '),
						C = n.splice(-1).pop() ?? '',
						[B] = C.split('.');
					return (
						B == 'toolbar' &&
						(n[0] == e ||
							n[0] == `*${e}` ||
							n[0] == `*(M)${e}` ||
							n[0] == `*(T)${e}` ||
							n[0] == `*(D)${e}` ||
							n[0] == `(M)${e}` ||
							n[0] == `(T)${e}` ||
							n[0] == `(D)${e}` ||
							!n.length)
					);
				});
				if (a.components && N) {
					const v = a.components[i];
					v?.layout && v.layout.toString().indexOf('layoutSelector') > -1 && (x = !0);
				}
			});
		}
		p?.overrides && x && (t.theme = I(t.theme, { components: p.overrides.components }));
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
			'.ss__sidebar': { flex: '0 1 auto', width: t.sidebarWidth, '&:empty': { display: 'none' }, [`@media ${m}`]: { width: '100%' } },
			[`.${a}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
		});
	},
	Ct = U((t) => {
		const a = G(),
			m = J(),
			S = {
				toggleSidebarButtonText: 'Filters',
				sidebarWidth: '270px',
				mobileDisplayAt: a?.variables?.breakpoints?.tablet ? `${a.variables?.breakpoints?.tablet}px` : '991px',
				treePath: m,
			},
			o = K(t.alias || 'search', a, S, t),
			{
				disableStyles: l,
				className: y,
				internalClassName: p,
				hideSidebar: x,
				toggleSidebarButtonText: e,
				hideTopToolbar: i,
				tabManager: c,
				hideMiddleToolbar: N,
				hideBottomToolbar: v,
				resultComponent: n,
				hideToggleSidebarButton: C,
				mobileDisplayAt: B,
				toggleSidebarStartClosed: R,
				treePath: u,
				alias: W,
			} = o;
		let d = o.controller,
			r = 'ss__search';
		o.alias && (r = `ss__${H(o.alias)}`), ne(o, a), c && c.active && (d = c.active?.controller);
		const T = d.store,
			b = oe(B ? (typeof B == 'boolean' ? '(min-width: 0px)' : `(max-width: ${B})`) : '(max-width: 0px)'),
			[h, $] = F(W !== 'searchHorizontal' && !R && !b),
			w = V(b),
			k = b && !w.current;
		E(() => {
			w.current = b;
		}),
			E(() => {
				$(b ? !1 : !R);
			}, [b]);
		const q = I({ toggleSidebarButtonText: { value: e } }, o.lang || {}),
			D = ie(q, { filters: T.filters, sidebarOpenState: h }, { activeBreakpoint: a?.activeBreakpoint }),
			z = () =>
				s('div', {
					className: A(`${r}__sidebar-toggle`, h ? `${r}__sidebar-toggle--open` : ''),
					active: h,
					children: s('span', { ...D.toggleSidebarButtonText.all }),
				}),
			P = {
				onClick: () => {
					$(!h),
						setTimeout(() => {
							if (!h) {
								const g = document.querySelector('.ss__sidebar')?.querySelector(te);
								g && g.focus();
							}
						});
				},
				children: !C && T.loaded && (e || D.toggleSidebarButtonText?.value) ? z : void 0,
			},
			f = {
				TopToolbar: {
					name: 'top',
					internalClassName: `${r}__header-section__toolbar--top-toolbar`,
					layout: [['banner.header'], ['searchHeader', '_']],
					toggleSideBarButton: { ...P },
					tabManager: c,
					..._({ disableStyles: l }),
					theme: o.theme,
					treePath: u,
				},
				MiddleToolbar: {
					name: 'middle',
					internalClassName: `${r}__content__toolbar--middle-toolbar`,
					layout: b
						? [['tabSelection'], ['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
						: [['tabSelection'], ['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
					toggleSideBarButton: { ...P },
					tabManager: c,
					..._({ disableStyles: l }),
					theme: o.theme,
					treePath: u,
				},
				BottomToolbar: {
					name: 'bottom',
					internalClassName: `${r}__content__toolbar--bottom-toolbar`,
					layout: [['banner.footer'], ['_', 'pagination', '_']],
					toggleSideBarButton: { ...P },
					tabManager: c,
					..._({ disableStyles: l }),
					theme: o.theme,
					treePath: u,
				},
				Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ..._({ disableStyles: l }), theme: o.theme, treePath: u },
				MobileSidebar: {
					layout: [['filterSummary'], ['facets'], ['banner.left']],
					hideApplyButton: !1,
					hideClearButton: !1,
					hideCloseButton: !1,
					onToggleSidebar: () => $((g) => !g),
					..._({ disableStyles: l }),
					theme: o.theme,
					treePath: `${u} slideout`,
				},
				Results: { resultComponent: n, ..._({ disableStyles: l }), theme: o.theme, treePath: u },
				NoResults: { ..._({ disableStyles: l }), theme: o.theme, treePath: u },
				Slideout: {
					width: o.sidebarWidth,
					internalClassName: `${r}__slideout`,
					onChange: (g) => $(g),
					..._({ disableStyles: l }),
					theme: o.theme,
					treePath: u,
				},
			},
			Q = X(o, me),
			L = d.id;
		return s(Y, {
			children: M('div', {
				...Q,
				className: A(r, y, p, h ? `${r}--sidebar-open` : ''),
				children: [
					s('div', { className: `${r}__header-section`, children: !i && s(O, { ...f.TopToolbar, controller: d }) }),
					M('div', {
						className: `${r}__main-section`,
						children: [
							!x &&
								T.loaded &&
								T.pagination.totalResults > 0 &&
								(b
									? s(ae, {
											...f.Slideout,
											active: k ? !1 : h,
											children: s('div', {
												className: `${r}__sidebar ${r}__slideout__sidebar-wrapper`,
												ref: (g) => ee(g, 0, !0),
												children: s(j, { ...f.MobileSidebar, controller: d }),
											}),
									  })
									: h
									? s('div', { className: `${r}__sidebar`, children: s(j, { ...f.Sidebar, controller: d }) })
									: null),
							M('div', {
								className: A(`${r}__content`),
								...(c?.active ? { id: `ss__tabpanel--${L}`, role: 'tabpanel', 'aria-labelledby': `ss__tab--${L}` } : {}),
								children: [
									!N && s(O, { ...f.MiddleToolbar, controller: d }),
									T.pagination.totalResults
										? s(re, { ...f.Results, controller: d })
										: T.pagination.totalResults === 0 && s(se, { ...f.NoResults, controller: d }),
									!v && s(O, { ...f.BottomToolbar, controller: d }),
								],
							}),
						],
					}),
				],
			}),
		});
	});
export { Ct as Search };
