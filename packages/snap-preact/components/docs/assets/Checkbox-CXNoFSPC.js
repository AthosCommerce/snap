import { o as F, u as O, a as R, m as q, b as G, s as H, c as J, n as K, j as o, d as y, I as M, C as Q, e as g } from './iframe-CXSVAHru.js';
import { u as U } from './useA11y-BuGQuOJb.js';
import { d as V } from './defined-CdKp_MB-.js';
import { u as W } from './useLang-Dx66cFD0.js';
const X = ({ size: s, color: i, theme: d, native: r }) => {
		const c = isNaN(Number(s)) ? s : `${s}px`;
		return r
			? g({})
			: g({
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: c,
					width: c,
					border: `1px solid ${i || d?.variables?.colors?.primary || '#333'}`,
					'&.ss__checkbox--disabled': { opacity: 0.7 },
					'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${s} - 30%)`, height: `calc(${s} - 30%)` },
			  });
	},
	le = F((s) => {
		const i = O(),
			r = { size: '12px', startChecked: !1, disableA11y: !1, treePath: R() },
			c = q('checkbox', i, r, s),
			{
				checked: _,
				color: C,
				disabled: t,
				icon: l,
				iconColor: v,
				onClick: b,
				size: n,
				startChecked: N,
				native: P,
				disableA11y: S,
				disableStyles: $,
				className: m,
				internalClassName: p,
				theme: T,
				treePath: L,
				lang: j,
				style: Y,
				styleScript: Z,
				themeStyleScript: ee,
				name: se,
				...A
			} = c,
			{ overrideElement: I, shouldRenderDefault: w } = G('checkbox', c);
		if (!w) return I;
		const k = isNaN(Number(n)) ? n : `${n}px`,
			B = {
				icon: {
					internalClassName: 'ss__checkbox__icon',
					icon: 'check-thin',
					...V({ color: v || C || T?.variables?.colors?.primary, disableStyles: $, icon: l, size: k && `calc(${k} - 30%)` }),
					theme: c.theme,
					treePath: L,
				},
			};
		let e, h;
		const u = _ === void 0;
		u ? ([e, h] = H(N)) : (e = _);
		const x = (a) => {
				t || (u && h && h((E) => !E), b && b(a));
			},
			f = J(c, X),
			z = K({ checkbox: {} }, j || {}),
			D = W(z, { checkedState: e, disabled: t }, { activeBreakpoint: i?.activeBreakpoint });
		return o(Q, {
			children: P
				? o('input', {
						...f,
						className: y('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': t, 'ss__checkbox--active': e }, m, p),
						type: 'checkbox',
						'aria-checked': e,
						onClick: (a) => x(a),
						disabled: t,
						checked: e,
				  })
				: o('span', {
						...f,
						className: y('ss__checkbox', { 'ss__checkbox--disabled': t, 'ss__checkbox--active': e }, m, p),
						onClick: (a) => x(a),
						ref: (a) => (S ? null : U(a)),
						'aria-disabled': t,
						role: 'checkbox',
						'aria-checked': e,
						...A,
						...D.checkbox.all,
						children: e ? o(M, { ...B.icon, ...(typeof l == 'string' ? { icon: l } : l) }) : o('span', { className: 'ss__checkbox__empty' }),
				  }),
		});
	});
export { le as C };
