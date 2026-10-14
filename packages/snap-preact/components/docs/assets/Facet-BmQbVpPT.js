import {
	o as re,
	u as le,
	a as oe,
	m as ce,
	b as _e,
	s as W,
	y as Q,
	c as pe,
	n as ue,
	j as s,
	l as C,
	F as X,
	I as Z,
	d as ee,
	C as fe,
	p as q,
	e as de,
} from './iframe-CXSVAHru.js';
import { F as T } from './types-DqusP3LW.js';
import { u as te } from './useA11y-BuGQuOJb.js';
import { f as he } from './fieldNameToComponentName-CjebIDZG.js';
import { d } from './defined-CdKp_MB-.js';
import { u as me } from './useLang-Dx66cFD0.js';
import { D as ge } from './Dropdown-WSImKrUZ.js';
import { B as ae } from './Button-YZishUF-.js';
import { S as ve } from './SearchInput-DJ-VPu5W.js';
import { F as we } from './FacetListOptions-DvX14VIV.js';
import { F as be } from './FacetHierarchyOptions-Bu5fpnu_.js';
import { F as ye } from './FacetPaletteOptions-DW1gB9zo.js';
import { F as xe } from './FacetGridOptions-C5dERDt2.js';
import { F as Ce } from './FacetSlider-AhnUnnRl.js';
const Te = ({ disableCollapse: w, color: b, theme: o }) =>
		de({
			width: '100%',
			margin: '0 0 20px 0',
			'& .ss__facet__header': {
				cursor: w ? void 0 : 'pointer',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				color: b || o?.variables?.colors?.primary,
				border: 'none',
				borderBottom: `2px solid ${o?.variables?.colors?.primary || '#ccc'}`,
				padding: '6px 0',
				'& .ss__facet__header__inner': { display: 'flex' },
			},
			'& .ss__facet__header__clear-all': {
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				marginLeft: '10px',
				border: 'none',
				padding: '0',
				color: b || o?.variables?.colors?.primary,
				'&:hover': { textDecoration: 'underline' },
				'& .ss__icon': { marginLeft: '5px' },
			},
			'& .ss__facet__options': { marginTop: '8px', maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' },
			'& .ss__facet__show-more-less': { display: 'block', margin: '8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
			'& .ss__search-input': { margin: '16px 0 0 0', '.ss__search-input__button--submit-search-button': { pointerEvents: 'none' } },
			'& .ss__facet__header__selected-count': { margin: '0px 5px' },
			'.ss__facet__range-inputs': { display: 'flex', flexDirection: 'column', '.ss__facet__range-inputs__separator': { margin: '5px' } },
			'.ss__facet__range-inputs__row': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				'&.ss__facet__range-inputs__row--button-wrapper': { justifyContent: 'center', '.ss__facet__range-input__button--submit': { margin: '10px' } },
			},
			'.ss__facet__range-input': {
				flexDirection: 'row',
				display: 'flex',
				border: `1px solid ${o?.variables?.colors?.secondary || '#ccc'}`,
				backgroundColor: 'white',
				alignItems: 'center',
				'.ss__facet__range-input__prefix': { padding: '0 5px' },
				'.ss__facet__range-input__input': { width: '100%', border: 'none', minHeight: '35px' },
			},
		}),
	Me = re((w) => {
		const b = le(),
			V = {
				limit: 12,
				disableOverflow: !1,
				iconCollapse: 'angle-up',
				iconExpand: 'angle-down',
				showMoreText: 'Show More',
				showLessText: 'Show Less',
				iconOverflowMore: 'plus',
				iconOverflowLess: 'minus',
				clearAllText: 'Clear All',
				rangeInputsSubmitButtonText: 'Submit',
				rangeInputsSeparatorText: ' - ',
				searchable: !1,
				treePath: oe(),
				name: he(w.facet.field),
			};
		let a = ce('facet', b, V, w);
		const N = [T.LIST, T.GRID, T.PALETTE],
			t = () => {
				const r = a.facet?.display;
				return a.displayType && N.includes(r) && N.includes(a.displayType) ? a.displayType : r;
			};
		let y = t();
		a.display && a.display[y] && (a = { ...a, ...a.display[y] }),
			a.fields && a.fields[a.facet?.field] && (a = { ...a, ...a.fields[a.facet?.field] }),
			(y = t());
		const {
				disableCollapse: F,
				facet: e,
				iconCollapse: P,
				iconExpand: A,
				limit: p,
				statefulOverflow: S,
				disableOverflow: z,
				iconColor: M,
				color: H,
				previewOnFocus: h,
				valueProps: m,
				showSelectedCount: Y,
				hideSelectedCountParenthesis: K,
				clearAllIcon: D,
				showClearAllText: j,
				justContent: U,
				horizontal: B,
				disableStyles: i,
				className: I,
				internalClassName: k,
				treePath: l,
			} = a,
			{ overrideElement: g, shouldRenderDefault: x } = _e('facet', a);
		if (!x) return g;
		const _ = {
			dropdown: {
				internalClassName: 'ss__facet__dropdown',
				disableClickOutside: !0,
				disableOverlay: !0,
				...d({ disableStyles: i }),
				theme: a?.theme,
				treePath: l,
			},
			icon: {
				internalClassName: 'ss__facet__dropdown__icon',
				size: '12px',
				fill: M || H,
				...d({ disableStyles: i }),
				theme: a?.theme,
				treePath: `${l} dropdown`,
			},
			button: { ...d({ disableStyles: i }), theme: a?.theme, treePath: `${l} dropdown` },
			showMoreLessIcon: {
				internalClassName: 'ss__facet__show-more-less__icon',
				size: '10px',
				fill: M || H,
				...d({ disableStyles: i }),
				theme: a?.theme,
				treePath: l,
			},
			facetHierarchyOptions: {
				internalClassName: 'ss__facet__facet-hierarchy-options',
				...d({ disableStyles: i, previewOnFocus: h, valueProps: m, horizontal: B }),
				theme: a?.theme,
				treePath: l,
			},
			facetListOptions: {
				internalClassName: 'ss__facet__facet-list-options',
				...d({ disableStyles: i, previewOnFocus: h, valueProps: m, horizontal: B }),
				theme: a?.theme,
				treePath: l,
			},
			facetGridOptions: {
				internalClassName: 'ss__facet__facet-grid-options',
				...d({ disableStyles: i, previewOnFocus: h, valueProps: m, horizontal: B }),
				theme: a?.theme,
				treePath: l,
			},
			facetPaletteOptions: {
				internalClassName: 'ss__facet__facet-palette-options',
				...d({ disableStyles: i, previewOnFocus: h, valueProps: m, horizontal: B }),
				theme: a?.theme,
				treePath: l,
			},
			facetSlider: { internalClassName: 'ss__facet__facet-slider', ...d({ disableStyles: i }), theme: a?.theme, treePath: l },
			searchInput: {
				internalClassName: 'ss__facet__search-input',
				clearSearchButton: {
					onClick: () => {
						e?.search && (e.search.input = '');
					},
				},
				submitSearchButton: { disableA11y: !0 },
				...d({ disableStyles: i }),
				theme: a?.theme,
				treePath: l,
			},
		};
		let O;
		function E(r) {
			return r.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		}
		const [u, R] = W();
		if (
			(Q(() => {
				S &&
					R({
						enabled: !1,
						limited: !0,
						limit: 0,
						remaining: void 0,
						setLimit: function (f) {
							f != this.limit && ((this.enabled = !0), (this.limit = f), this.calculate());
						},
						toggle: function (f) {
							typeof f < 'u' ? (this.limited = f) : (this.limited = !this.limited), this.calculate();
						},
						calculate: function () {
							if (this.limit > 0) {
								const f = e?.values?.length - this.limit;
								f > 0 && !e?.search?.input ? ((this.enabled = !0), this.limited ? (this.remaining = f) : (this.remaining = 0)) : (this.enabled = !1);
							}
							R({ ...this });
						},
					});
			}, []),
			e?.overflow && p && Number.isInteger(p) && !z)
		)
			if (S) {
				let r = e?.values || [];
				if (e?.search?.input) {
					const f = new RegExp(E(e?.search?.input), 'i');
					r = e?.values.filter((ie) => String(ie?.label || '').match(f));
				}
				u?.enabled && u?.limited && (r = r.slice(0, u?.limit)), u?.limit !== p && u?.setLimit(p), (O = r);
			} else e.overflow?.setLimit(p), (O = e?.refinedValues);
		else e?.overflow && Number.isInteger(p) ? (O = e?.values.slice(0, p)) : (O = e?.values);
		const v = pe(a, Te),
			n = {
				allowableTypes: w.treePath?.includes('autocomplete') ? [] : ['list', 'grid', 'palette'],
				searchFilter: (r) => {
					e?.search && (e.search.input = r.target.value);
				},
			};
		let c = !0;
		e.display == T.TOGGLE && e && e?.values.length !== 1 && (c = !1);
		const $ = { limitedValues: O, overflowState: u, searchableFacet: n, subProps: _, className: I, internalClassName: k, ...a, displayType: y },
			se = {
				showMoreText: { value: $.showMoreText },
				showLessText: { value: $.showLessText },
				dropdownButton: {
					attributes: {
						'aria-label': `currently ${e?.collapsed ? 'collapsed' : 'open'} ${e.label} facet dropdown ${
							e.values?.length ? e.values?.length + ' options' : ''
						}`,
					},
				},
				clearAllText: { value: $.clearAllText },
				submitRangeButton: { value: $.rangeInputsSubmitButtonText },
			},
			ne = ue(se, a.lang || {}),
			L = me(ne, { facet: e }, { activeBreakpoint: b?.activeBreakpoint }),
			G = e?.values?.filter((r) => r?.filtered).length || e?.active?.high !== e?.range?.high || e?.active?.low !== e?.range?.low;
		return e && c
			? s(fe, {
					children: s('div', {
						...v,
						className: ee(
							'ss__facet',
							`ss__facet--${e.field}`,
							`${e.collapsed ? 'ss__facet--collapsed' : ''}`,
							I,
							k,
							`${y ? `ss__facet--${y}` : ''}`,
							(S ? u?.remaining : (e?.overflow?.remaining || 0) > 0) || e?.display == 'slider' ? '' : 'ss__facet--showing-all'
						),
						children: U
							? s(J, { ...$, mergedLang: L })
							: s(ge, {
									..._.dropdown,
									open: F || !e?.collapsed,
									onClick: () => !F && e.toggleCollapse && e?.toggleCollapse(),
									disableA11y: !0,
									button: C('div', {
										className: 'ss__facet__header',
										ref: (r) => te(r, F ? -1 : 0),
										role: 'heading',
										'aria-level': 3,
										...L.dropdownButton.attributes,
										children: [
											C('span', {
												className: 'ss__facet__header__inner',
												children: [
													s('span', { ...L.dropdownButton.value, children: e?.label }),
													Y && G && e.type !== 'range'
														? s('span', { className: 'ss__facet__header__selected-count', children: K ? G : `(${G})` })
														: null,
													(L.clearAllText.value || D) && G
														? s(ae, {
																..._.button,
																internalClassName: 'ss__facet__header__clear-all',
																name: 'reset-facet',
																onClick: (r) => {
																	r.stopPropagation(), e?.clear.url.link.onClick();
																},
																icon: D || void 0,
																children: L.clearAllText.value && j ? s('label', { ...L.clearAllText.all }) : null,
														  })
														: s(X, {}),
												],
											}),
											!F &&
												s(Z, {
													..._.icon,
													...(e?.collapsed ? { ...(typeof A == 'string' ? { icon: A } : A) } : { ...(typeof P == 'string' ? { icon: P } : P) }),
													name: e?.collapsed ? 'expand' : 'collapse',
												}),
										],
									}),
									children: s(J, { ...$, mergedLang: L }),
							  }),
					}),
			  })
			: null;
	}),
	J = (w) => {
		const {
				searchableFacet: b,
				subProps: o,
				className: V,
				internalClassName: a,
				limitedValues: N,
				facet: t,
				statefulOverflow: y,
				limit: F,
				overflowSlot: e,
				optionsSlot: P,
				searchable: A,
				iconOverflowMore: p,
				iconOverflowLess: S,
				disableOverflow: z,
				previewOnFocus: M,
				rangeInputs: H,
				rangeInputsPrefix: h,
				rangeInputsInheritDefaultValues: m,
				rangeInputsSeparatorText: Y,
				rangeInputsSubmitOnBlur: K,
				hideRangeInputsSubmitButton: D,
				justContent: j,
				valueProps: U,
				hideShowMoreLessText: B,
				treePath: i,
				mergedLang: I,
				displayType: k,
			} = w,
			[l, g] = W(m && t.type === 'range' ? t?.range?.low : void 0),
			[x, _] = W(m && t.type === 'range' ? t?.range?.high : void 0);
		Q(() => {
			m && t.type === 'range' && t?.active?.high !== x && _(t?.active?.high), m && t.type === 'range' && t?.active?.low !== l && g(t?.active?.low);
		}, [t]);
		const O = (n) => {
				g(n[0]), _(n[1]);
			},
			E = () => {
				if (t?.services?.urlManager && typeof l == 'number' && Number.isFinite(l) && typeof x == 'number' && Number.isFinite(x)) {
					let n = l,
						c = x;
					c < n && ((n = x), (c = l), g(n), _(c)),
						t?.range?.low !== void 0 && n < t?.range?.low && ((n = t?.range?.low), g(n)),
						t?.range?.high !== void 0 && n > t?.range?.high && ((n = t?.range?.high), g(n)),
						t?.range?.low !== void 0 && c < t?.range?.low && ((c = t?.range?.low), _(c)),
						t?.range?.high !== void 0 && c > t?.range?.high && ((c = t?.range?.high), _(c)),
						t.services.urlManager.remove('page').set(`filter.${t.field}`, { low: n, high: c }).go();
				}
			},
			u = (n) => {
				n.key === 'Enter' && E();
			},
			R = () => {
				K && E();
			};
		let v;
		return (
			y ? (v = w.overflowState) : (v = t.overflow),
			C(X, {
				children: [
					A &&
						b.allowableTypes.includes(k) &&
						s(ve, { ...o.searchInput, onChange: b.searchFilter, placeholderText: `Search ${t.label}`, treePath: i }),
					s('div', {
						className: ee('ss__facet__options', j ? V : '', j ? a : ''),
						children: (() => {
							if (P) return q(P, { facet: t, valueProps: U, limit: F, previewOnFocus: M, treePath: i });
							switch (k) {
								case T.SLIDER:
									return s(Ce, { ...o.facetSlider, onChange: O, facet: t, treePath: i });
								case T.GRID:
									return s(xe, { ...o.facetGridOptions, values: N, facet: t, treePath: i });
								case T.PALETTE:
									return s(ye, { ...o.facetPaletteOptions, values: N, facet: t, treePath: i });
								case T.HIERARCHY:
									return s(be, { ...o.facetHierarchyOptions, values: N, facet: t, treePath: i });
								default:
									return s(we, { ...o.facetListOptions, values: N, facet: t, treePath: i });
							}
						})(),
					}),
					H &&
						(t.type === 'range' || t.type === 'range-buckets') &&
						C('div', {
							className: 'ss__facet__range-inputs',
							children: [
								C('div', {
									className: 'ss__facet__range-inputs__row',
									children: [
										C('div', {
											className: 'ss__facet__range-input ss__facet__range-input--low',
											children: [
												h && s('span', { className: 'ss__facet__range-input__prefix', children: h }),
												s('input', {
													type: 'number',
													className: 'ss__facet__range-input__input',
													value: l,
													onInput: (n) => (n.currentTarget.value ? g(Number(n.currentTarget.value)) : g(void 0)),
													onKeyUp: u,
													onBlur: R,
												}),
											],
										}),
										s('span', { className: 'ss__facet__range-inputs__separator', children: Y }),
										C('div', {
											className: 'ss__facet__range-input ss__facet__range-input--high',
											children: [
												h && s('span', { className: 'ss__facet__range-input__prefix', children: h }),
												s('input', {
													type: 'number',
													className: 'ss__facet__range-input__input',
													value: x,
													onInput: (n) => (n.currentTarget.value ? _(Number(n.currentTarget.value)) : _(void 0)),
													onKeyUp: u,
													onBlur: R,
												}),
											],
										}),
									],
								}),
								!D &&
									s('div', {
										className: 'ss__facet__range-inputs__row ss__facet__range-inputs__row--button-wrapper',
										children: s(ae, {
											internalClassName: 'ss__facet__range-input__button--submit',
											onClick: E,
											children: I.submitRangeButton.value ? s('label', { ...I.submitRangeButton.all }) : null,
										}),
									}),
							],
						}),
					!z &&
						v?.enabled &&
						s('div', {
							className: 'ss__facet__show-more-less',
							'aria-live': 'polite',
							onClick: () => v?.toggle(),
							ref: (n) => te(n),
							children: e
								? q(e, { facet: t, treePath: i })
								: C(X, {
										children: [
											s(Z, {
												...o.showMoreLessIcon,
												treePath: i,
												name: (v?.remaining || 0) > 0 ? 'overflow-more' : 'overflow-less',
												...((v?.remaining || 0) > 0
													? { ...(typeof p == 'string' ? { icon: p } : p) }
													: { ...(typeof S == 'string' ? { icon: S } : S) }),
											}),
											!B && s('span', { ...((v?.remaining || 0) > 0 ? I.showMoreText?.all : I.showLessText?.all) }),
										],
								  }),
						}),
				],
			})
		);
	};
export { Me as F };
