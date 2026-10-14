import { o as F, u as O, a as q, m as G, b as H, s as J, c as K, n as M, j as t, d, I as P, C as Q, e as N } from './iframe-CXSVAHru.js';
import { u as U } from './useA11y-BuGQuOJb.js';
import { d as S } from './defined-CdKp_MB-.js';
import { u as V } from './useLang-Dx66cFD0.js';
const W = ({ size: r, native: i }) =>
		i
			? N({})
			: N({
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: r,
					width: r,
					cursor: 'pointer',
					'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
			  }),
	oe = F((r) => {
		const i = O(),
			x = q(),
			L = {
				size: '20px',
				startChecked: !1,
				disableA11y: !1,
				checkedIcon: 'bullet',
				unCheckedIcon: 'bullet-o',
				color: i.variables?.colors.primary || '#000000',
				treePath: x,
			},
			o = G('radio', i, L, r),
			{
				checked: _,
				color: m,
				disabled: s,
				checkedIcon: n,
				unCheckedIcon: c,
				onClick: u,
				startChecked: T,
				native: j,
				disableA11y: h,
				disableStyles: p,
				className: f,
				internalClassName: k,
				size: v,
				treePath: b,
				lang: A,
				style: X,
				styleScript: Y,
				themeStyleScript: Z,
				name: $,
				...R
			} = o,
			{ overrideElement: B, shouldRenderDefault: w } = H('radio', o);
		if (!w) return B;
		const g = {
			activeIcon: {
				name: 'active',
				internalClassName: 'ss__radio__icon',
				...S({ size: v, color: m, disableStyles: p }),
				theme: o.theme,
				treePath: b,
			},
			inactiveIcon: {
				name: 'inactive',
				internalClassName: 'ss__radio__icon',
				...S({ size: v, color: m, disableStyles: p }),
				theme: o.theme,
				treePath: b,
			},
		};
		let e, l;
		const y = _ === void 0;
		y ? ([e, l] = J(T)) : (e = _);
		const C = (a) => {
				s || (y && l && l((E) => !E), u && u(a));
			},
			I = K(o, W),
			z = M({ radio: {} }, A || {}),
			D = V(z, { disabled: s, checkedState: e }, { activeBreakpoint: i?.activeBreakpoint });
		return t(Q, {
			children: j
				? t('div', {
						className: d('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': s }, f, k),
						...I,
						children: t('input', {
							className: d('ss__radio__input'),
							'aria-checked': e,
							type: 'radio',
							onClick: (a) => C(a),
							disabled: s,
							checked: e,
							tabIndex: h ? -1 : 0,
						}),
				  })
				: t('span', {
						...I,
						className: d('ss__radio', { 'ss__radio--disabled': s, 'ss__radio--active': e }, f, k),
						onClick: (a) => C(a),
						ref: (a) => (h ? null : U(a)),
						...D.radio?.all,
						role: 'radio',
						'aria-checked': e,
						'aria-disabled': s,
						...R,
						children: e
							? t(P, { ...g.activeIcon, ...(typeof n == 'string' ? { icon: n } : n) })
							: t(P, { ...g.inactiveIcon, ...(typeof c == 'string' ? { icon: c } : c) }),
				  }),
		});
	});
export { oe as R };
