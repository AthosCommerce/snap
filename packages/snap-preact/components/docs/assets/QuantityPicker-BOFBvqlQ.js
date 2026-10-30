import { o as O, u as R, a as G, m as H, s as v, b as J, c as K, n as U, j as r, l as x, d as b, C as W, e as X } from './iframe-U9T2Y9ZS.js';
import { u as Y } from './useLang-Dx66cFD0.js';
import { d as Z } from './defined-CdKp_MB-.js';
import { B as C } from './Button-rwG4FGUK.js';
const $ = () =>
		X({
			display: 'inline-flex',
			alignItems: 'center',
			gap: '5px',
			'&.ss__quantity-picker--disabled': { opacity: 0.7 },
			'& .ss__quantity-picker__label-wrapper': { display: 'inline-flex', alignItems: 'center' },
			'& .ss__quantity-picker__controls-wrapper': { display: 'inline-flex', alignItems: 'center', gap: '5px' },
			'& .ss__quantity-picker__input': { width: '60px', textAlign: 'center', padding: '5px', boxSizing: 'border-box' },
		}),
	mt = O((P) => {
		const y = R(),
			B = { min: 1, step: 1, treePath: G() },
			l = H('quantityPicker', y, B, P),
			{
				value: h,
				startValue: S,
				min: M,
				max: n,
				step: u,
				disabled: s,
				hideButtons: g,
				label: f,
				onChange: q,
				disableStyles: I,
				className: w,
				internalClassName: T,
				theme: et,
				treePath: L,
				lang: Q,
				style: at,
				styleScript: nt,
				themeStyleScript: st,
				name: it,
				...j
			} = l,
			i = Math.max(0, Math.trunc(M)),
			c = (e) => {
				let t = Math.trunc(e);
				return isNaN(t) && (t = i), (t = Math.max(i, t)), typeof n == 'number' && (t = Math.min(Math.trunc(n), t)), t;
			},
			[V, E] = v(c(S ?? i)),
			k = h === void 0,
			a = k ? V : c(h),
			[m, N] = v(void 0),
			{ overrideElement: z, shouldRenderDefault: A } = J('quantityPicker', l);
		if (!A) return z;
		const p = (e, t) => {
				if (s) return;
				const d = c(t);
				k && E(d), d !== a && q && q(e, d);
			},
			D = K(l, $),
			F = U(
				{
					quantityInput: { attributes: { 'aria-label': 'quantity' } },
					decrementButton: { attributes: { 'aria-label': 'decrease quantity' } },
					incrementButton: { attributes: { 'aria-label': 'increase quantity' } },
				},
				Q || {}
			),
			_ = Y(F, { quantity: a, min: i, max: n, disabled: s }, { activeBreakpoint: y?.activeBreakpoint }),
			o = { button: { internalClassName: 'ss__quantity-picker__button', ...Z({ disableStyles: I }), theme: l.theme, treePath: L } };
		return r(W, {
			children: x('div', {
				...D,
				className: b('ss__quantity-picker', { 'ss__quantity-picker--disabled': s }, w, T),
				...j,
				children: [
					f &&
						r('div', {
							className: 'ss__quantity-picker__label-wrapper',
							children: r('span', { className: 'ss__quantity-picker__label', children: f }),
						}),
					x('div', {
						className: 'ss__quantity-picker__controls-wrapper',
						children: [
							!g &&
								r(C, {
									...o.button,
									name: 'decrement',
									internalClassName: b(o.button.internalClassName, 'ss__quantity-picker__button--decrement'),
									disabled: s || a <= i,
									onClick: (e) => p(e, a - u),
									icon: 'minus-thin',
									..._.decrementButton?.attributes,
								}),
							r('input', {
								className: 'ss__quantity-picker__input',
								type: 'number',
								inputMode: 'numeric',
								min: i,
								max: n,
								step: u,
								value: m ?? a,
								disabled: s,
								onInput: (e) => N(e.target.value),
								onBlur: (e) => {
									if (m !== void 0) {
										const t = parseFloat(m);
										p(e, isNaN(t) ? a : t), N(void 0);
									}
								},
								..._.quantityInput?.all,
							}),
							!g &&
								r(C, {
									...o.button,
									name: 'increment',
									internalClassName: b(o.button.internalClassName, 'ss__quantity-picker__button--increment'),
									disabled: s || (typeof n == 'number' && a >= n),
									onClick: (e) => p(e, a + u),
									icon: 'plus-thin',
									..._.incrementButton?.attributes,
								}),
						],
					}),
				],
			}),
		});
	});
export { mt as Q };
