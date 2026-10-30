import { s as F, n as I, o as U, u as G, a as J, m as K, A as V, y as E, c as X, j as s, l as M, d as A, C as Y, e as Z } from './iframe-U9T2Y9ZS.js';
import { u as ee, F as te } from './useA11y-BuGQuOJb.js';
import { c as H } from './componentNameToClassName-btPHBToT.js';
import { u as oe, S as ae } from './Slideout-xOZDsJn4.js';
import { u as ie } from './useLang-Dx66cFD0.js';
import { d as _ } from './defined-CdKp_MB-.js';
import { T as O } from './Toolbar-CNU8uQG3.js';
import { S as j } from './FacetsHorizontal-B68XtXsV.js';
import { R as re } from './Results-3aWkZgbC.js';
import { N as se } from './NoResults-BrPIS2mH.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-BH_wZt84.js';
import './useClickOutside-DeMSpwd-.js';
import './Dropdown-Bgi8cN4O.js';
import './Facet-HxPfd-CW.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Button-rwG4FGUK.js';
import './SearchInput-CBuvCU_0.js';
import './FacetListOptions-DXiMkJ6r.js';
import './Checkbox-Dsv4fCi7.js';
import './Radio-CBQqiZ56.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-DNUnpz6e.js';
import './FacetPaletteOptions-8YWwPWlW.js';
import './names-Cka5BSlk.js';
import './Image-C5uuJXju.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions--7mFlBiQ.js';
import './FacetSlider-FfvPprOV.js';
import './PaginationInfo-Bg650W-a.js';
import './SearchHeader-DMztF-MS.js';
import './Facets-B-EVV1pK.js';
import './Banner-D10o1Oav.js';
import './withTracking-B-gE0m0K.js';
import './createImpressionObserver-B76-2cq4.js';
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
import './useCreateController-B8azvRjq.js';
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
