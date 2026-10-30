import {
	o as re,
	u as _e,
	a as de,
	m as pe,
	b as ue,
	s as w,
	c as me,
	n as be,
	j as s,
	l as c,
	I as y,
	F as R,
	d as W,
	C as he,
	e as q,
} from './iframe-U9T2Y9ZS.js';
import { u as G } from './useA11y-BuGQuOJb.js';
import { d as k } from './defined-CdKp_MB-.js';
import { s as H } from './selectionKey-CmN2KTR5.js';
import { u as ge } from './useLang-Dx66cFD0.js';
import { D as fe } from './Dropdown-Bgi8cN4O.js';
import { B as ve } from './Button-rwG4FGUK.js';
const ye = ({ color: p, backgroundColor: u, borderColor: I, theme: x, native: a }) =>
		a
			? q({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
			: q({
					display: 'inline-flex',
					color: p,
					'&.ss__select--disabled': { opacity: 0.7 },
					'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
					'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
					'.ss__select__select': {
						position: 'relative',
						zIndex: '10000',
						backgroundColor: u || '#fff',
						listStyle: 'none',
						padding: '0',
						marginTop: '-1px',
						border: `1px solid ${I || p || x?.variables?.colors?.primary || '#333'}`,
						'.ss__select__dropdown__button': { alignItems: 'center' },
						'.ss__select__select__option': {
							cursor: 'pointer',
							padding: '6px 8px',
							color: 'initial',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'&.ss__select__select__option--selected': { fontWeight: 'bold' },
							'&:hover': { backgroundColor: '#f8f8f8' },
						},
					},
			  }),
	we = re((p) => {
		const u = _e(),
			x = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: de() },
			a = pe('select', u, x, p),
			{
				backgroundColor: J,
				borderColor: M,
				color: T,
				clearSelection: m,
				disableClickOutside: Q,
				disabled: i,
				hideLabel: $,
				hideLabelOnSelection: B,
				iconColor: U,
				iconClose: C,
				iconOpen: r,
				label: o,
				native: j,
				onSelect: D,
				selected: d,
				separator: b,
				startOpen: V,
				hideIcon: E,
				hideOptionIcons: z,
				hideOptionLabels: A,
				hideSelection: X,
				stayOpenOnSelection: Y,
				disableStyles: N,
				className: Z,
				internalClassName: ee,
				treePath: h,
			} = a;
		let { options: n } = a;
		const { overrideElement: se, shouldRenderDefault: le } = ue('select', a);
		if (!le) return se;
		const _ = {
				dropdown: { internalClassName: 'ss__select__dropdown', ...k({ disableStyles: N, disabled: i }), theme: a?.theme, treePath: h },
				button: {
					internalClassName: 'ss__select__dropdown__button',
					...k({ disableStyles: N, disabled: i, color: T, backgroundColor: J, borderColor: M }),
					theme: a?.theme,
					treePath: h,
				},
				icon: {
					internalClassName: 'ss__select__dropdown__button__icon',
					...k({ disableStyles: N, color: U || T, size: '12px' }),
					theme: a?.theme,
					treePath: h,
				},
			},
			[g, f] = w(!!V),
			[l, F] = w(d),
			[te, ae] = w(() => H(d));
		if (d) {
			const e = H(d);
			e !== te && (ae(e), F(d));
		}
		l && m && (n = [{ label: m, value: '' }, ...n]);
		const K = (e, t) => {
				t != l && D && D(e, t), F(t), !Y && f(!1);
			},
			ne = me(a, ye),
			O = n.filter((e) => l?.value === e.value),
			oe = {
				buttonLabel: {
					value: o,
					attributes: { 'aria-label': `${o} dropdown, ${n.length} options ${O.length ? `, Currently selected option is ${O[0].label}` : ''}` },
				},
			},
			S = be(oe, a.lang || {}),
			L = ge(S, { options: n, selectedOptions: O, label: o, open: g }, { activeBreakpoint: u?.activeBreakpoint });
		return typeof n == 'object' && n?.length
			? s(he, {
					children: s('div', {
						...ne,
						className: W('ss__select', { 'ss__select--native': j }, { 'ss__select--disabled': i }, Z, ee),
						children: j
							? c(R, {
									children: [
										(o || S.buttonLabel.value) &&
											!$ &&
											!B &&
											c('span', {
												className: 'ss__select__label',
												children: [s('label', { ...L.buttonLabel?.all }), b && s('span', { className: 'ss__select__label__separator', children: b })],
											}),
										c('select', {
											className: 'ss__select__select',
											disabled: i || void 0,
											onChange: (e) => {
												const t = e.target,
													v = t.options[t.selectedIndex],
													ce = n.filter((P, ie) => P.label == v.text && (P.value == v.value || P.value == ie)).pop();
												!i && K(e, ce);
											},
											children: [
												!l && m && s('option', { className: 'ss__select__select__option', selected: !0, value: '', children: m }),
												n.map((e, t) =>
													s('option', {
														className: 'ss__select__select__option',
														selected: l?.value === e.value,
														value: e.value ?? t,
														children: e.label,
													})
												),
											],
										}),
										!E && s(y, { ..._.icon, name: 'open', ...(typeof r == 'string' ? { icon: r } : r) }),
									],
							  })
							: s(fe, {
									..._.dropdown,
									disableClickOutside: Q,
									open: g,
									onToggle: (e, t) => f((v) => t ?? !v),
									onClick: () => f((e) => !e),
									disableA11y: !0,
									button: c(ve, {
										..._.button,
										children: [
											(o || S.buttonLabel.value) &&
												!B &&
												!$ &&
												c('span', {
													className: 'ss__select__label',
													...L.buttonLabel.attributes,
													children: [
														s('label', { ...L.buttonLabel.value }),
														b && l && s('span', { className: 'ss__select__label__separator', children: b }),
													],
												}),
											l &&
												!X &&
												c(R, {
													children: [
														l.icon &&
															!z &&
															s(y, {
																..._.icon,
																className: 'ss__select__selection__icon',
																name: 'selection',
																...(typeof l.icon == 'string' ? { icon: l.icon } : l.icon),
															}),
														!A && s('span', { className: 'ss__select__selection', children: l?.label }),
													],
												}),
											!E &&
												s(y, {
													..._.icon,
													name: g ? 'open' : 'close',
													...(g ? { ...(typeof C == 'string' ? { icon: C } : C) } : { ...(typeof r == 'string' ? { icon: r } : r) }),
												}),
										],
									}),
									children: s('ul', {
										className: 'ss__select__select',
										role: 'listbox',
										'aria-label': typeof o == 'string' ? o : '',
										ref: (e) => G(e, -1, !0, () => f(!1)),
										children: n.map((e) =>
											c('li', {
												ref: (t) => G(t),
												'aria-disabled': e.disabled,
												title: e.label,
												className: W('ss__select__select__option', { 'ss__select__select__option--selected': l?.value === e.value }),
												onClick: (t) => !i && K(t, e),
												role: 'option',
												'aria-selected': l?.value === e.value,
												children: [
													e.icon &&
														!z &&
														s(y, {
															..._.icon,
															name: 'option',
															className: 'ss__select__select__option__icon',
															treePath: `${h} dropdown`,
															...(typeof e.icon == 'string' ? { icon: e.icon } : e.icon),
														}),
													!A && s('span', { children: e.label }),
												],
											})
										),
									}),
							  }),
					}),
			  })
			: null;
	});
export { we as S };
