import { o as O, u as z, a as B, m as E, b as F, c as f, j as s, F as _, d as w, C as L, l as m, I as V, e as C } from './iframe-CXSVAHru.js';
import { f as W } from './fieldNameToComponentName-CjebIDZG.js';
import { d as p } from './defined-CdKp_MB-.js';
import { S as $ } from './Swatches-BAeMNyN2.js';
import { L as A } from './List-DGhdnIhb.js';
import { D as H } from './Dropdown-WSImKrUZ.js';
import { u as g } from './useA11y-BuGQuOJb.js';
const R = () =>
		C({
			'.ss__variant-selection__dropdown': {
				'.ss__dropdown__button': {
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					'.ss__dropdown__button-wrapper': { display: 'flex', gap: '5px' },
				},
			},
		}),
	q = () =>
		C({
			margin: '0px',
			padding: '5px',
			background: 'white',
			zIndex: 10,
			border: '1px solid black',
			'.ss__variant-selection__option': { cursor: 'pointer', position: 'relative' },
			'.ss__variant-selection__option:hover': { fontWeight: 'bold' },
			'.ss__variant-selection__option--selected': { fontWeight: 'bold' },
			'.ss__variant-selection__option--disabled': { pointerEvents: 'none', cursor: 'initial', color: 'red' },
			'.ss__variant-selection__option--disabled, .ss__variant-selection__option--unavailable': { textDecoration: 'line-through', opacity: 0.5 },
		}),
	Y = O((h) => {
		const N = z(),
			S = B(),
			x = { name: W(h.selection.field), treePath: S },
			a = E('variantSelection', N, x, h),
			{ selection: e, onSelect: v, disableStyles: r, className: y, internalClassName: P, treePath: l } = a,
			{ overrideElement: T, shouldRenderDefault: D } = F('variantSelection', a);
		if (!D) return T;
		let i = a.type;
		i || (e.type == 'swatch' ? (i = 'swatches') : (i = 'dropdown'));
		const u = (o, t) => {
				v && v(o, t), e.select(t.value);
			},
			c = {
				dropdown: { internalClassName: 'ss__variant-selection__dropdown', usePortal: !0, ...p({ disableStyles: r }), theme: a?.theme, treePath: l },
				icon: { internalClassName: 'ss__variant-selection__icon', size: '12px', ...p({ disableStyles: r }), theme: a?.theme, treePath: l },
				list: {
					titleText: e.field,
					internalClassName: 'ss__variant-selection__list',
					multiSelect: !1,
					hideOptionCheckboxes: !0,
					onSelect: (o, t) => u(o, t),
					selected: e.selected,
					...p({ disableStyles: r }),
					theme: a?.theme,
					treePath: l,
				},
				swatches: {
					internalClassName: 'ss__variant-selection__swatches',
					onSelect: (o, t) => u(o, t),
					selected: e.selected,
					...p({ disableStyles: r }),
					theme: a?.theme,
					treePath: l,
				},
			},
			j = f(a, R),
			k = f(a, q),
			I = (o) => {
				const { toggleOpen: t } = o;
				return s('ul', {
					...k,
					className: 'ss__variant-selection__options',
					ref: (n) => g(n, -1, !0, () => t()),
					children: e.values.map((n) => {
						const b = e.selected?.value == n.value;
						return s('li', {
							className: w('ss__variant-selection__option', {
								'ss__variant-selection__option--selected': b,
								'ss__variant-selection__option--disabled': n.disabled,
								'ss__variant-selection__option--unavailable': n.available === !1,
							}),
							onClick: (d) => {
								n.disabled || (u(d, n), t?.(d, !1));
							},
							ref: (d) => g(d),
							'aria-selected': b,
							'aria-disabled': n.disabled || n.available === !1,
							children: n.label,
						});
					}),
				});
			};
		return e.values.length
			? s(L, {
					children: s('div', {
						...j,
						className: w('ss__variant-selection', `ss__variant-selection--${i}`, `ss__variant-selection--${e.field}`, y, P),
						children: (() => {
							switch (i) {
								case 'dropdown':
									return s(_, {
										children: s(H, {
											button: s(
												(t) => {
													const { open: n } = t;
													return m(_, {
														children: [
															m('div', {
																className: 'ss__dropdown__button-wrapper',
																children: [
																	s('span', { className: 'ss__dropdown__button-wrapper__label', children: e.label }),
																	e.selected
																		? m('span', { className: 'ss__dropdown__button-wrapper__selection', children: ['(', e.selected.value, ')'] })
																		: null,
																],
															}),
															s(V, { icon: n ? 'angle-up' : 'angle-down', ...c.icon, treePath: t.treePath }),
														],
													});
												},
												{ treePath: l }
											),
											...c.dropdown,
											content: s(I, {}),
										}),
									});
								case 'list':
									return s(_, { children: s(A, { ...c.list, options: e.values }) });
								case 'swatches':
									return s(_, { children: s($, { ...c.swatches, options: e.values }) });
							}
						})(),
					}),
			  })
			: null;
	});
export { Y as V };
