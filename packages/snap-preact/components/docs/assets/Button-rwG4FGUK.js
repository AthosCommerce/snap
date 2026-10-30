import { o as A, u as D, a as H, m as M, b as w, c as E, d as O, n as R, j as p, l as i, p as c, I as P, C as W, e as C } from './iframe-U9T2Y9ZS.js';
import { u as $ } from './useA11y-BuGQuOJb.js';
import { d as q } from './defined-CdKp_MB-.js';
import { u as z } from './useLang-Dx66cFD0.js';
const F = ({ native: u, color: s, backgroundColor: _, borderColor: d, theme: t }) =>
		u
			? C({})
			: C({
					display: 'inline-flex',
					alignItems: 'center',
					gap: '5px',
					padding: '5px 10px',
					position: 'relative',
					color: s || t?.variables?.colors?.primary,
					outline: 0,
					backgroundColor: _ || '#fff',
					border: `1px solid ${d || s || t?.variables?.colors?.primary || '#333'}`,
					'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
					'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
					'.ss__button__content': { width: '100%' },
					label: { cursor: 'pointer' },
			  }),
	ee = A((u) => {
		const s = D(),
			d = { disableA11y: !1, treePath: H() },
			t = M('button', s, d, u),
			{
				content: o,
				children: a,
				disabled: r,
				native: m,
				onClick: g,
				disableA11y: x,
				disableStyles: S,
				className: N,
				internalClassName: T,
				icon: e,
				lang: h,
				treePath: n,
				style: G,
				styleScript: J,
				themeStyleScript: K,
				...f
			} = t,
			{ overrideElement: L, shouldRenderDefault: k } = w('button', t);
		if (!k) return L;
		const y = { icon: { internalClassName: 'ss__button__icon', ...q({ disableStyles: S }), theme: t?.theme, treePath: n } },
			v = {
				...E(t, F),
				className: O('ss__button', { 'ss__button--native': m, 'ss__button--disabled': r }, N, T),
				disabled: r,
				onClick: (b) => !r && g && g(b),
				...f,
			},
			B = { ref: (b) => $(b) },
			I = R({}, h || {}),
			l = z(I, {}, { activeBreakpoint: s?.activeBreakpoint }),
			j = !!f.dangerouslySetInnerHTML;
		return o || a || e || h?.button?.value || j
			? p(W, {
					children: m
						? i('button', {
								...v,
								children: [
									i('span', { className: 'ss__button__content', ...l.button?.all, children: [c(o, { treePath: n }), c(a, { treePath: n })] }),
									e && p(P, { ...y.icon, ...(typeof e == 'string' ? { icon: e } : e) }),
								],
						  })
						: i('div', {
								...(x ? {} : B),
								role: 'button',
								'aria-disabled': r,
								...v,
								...l.button?.attributes,
								children: [
									o || a || l.button?.value
										? i('span', { className: 'ss__button__content', ...l.button?.value, children: [c(o, { treePath: n }), c(a, { treePath: n })] })
										: void 0,
									e && p(P, { ...y.icon, ...(typeof e == 'string' ? { icon: e } : e) }),
								],
						  }),
			  })
			: null;
	});
export { ee as B };
