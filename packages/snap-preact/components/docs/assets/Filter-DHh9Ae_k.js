import { o as j, u as F, a as S, m as D, b as R, c as $, n as z, j as s, l as d, I as A, d as E, C as O, e as W } from './iframe-CXSVAHru.js';
import { d as h } from './defined-CdKp_MB-.js';
import { u as q } from './useLang-Dx66cFD0.js';
import { B as w } from './Button-YZishUF-.js';
const G = ({}) =>
		W({
			textDecoration: 'none',
			display: 'inline-flex',
			'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
			'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
		}),
	U = j((p) => {
		const i = F(),
			g = { treePath: S() },
			e = D('filter', i, g, p),
			{
				filter: n,
				facetLabel: v,
				valueLabel: C,
				url: x,
				hideFacetLabel: k,
				onClick: o,
				icon: a,
				separator: c,
				disableStyles: _,
				className: N,
				internalClassName: P,
				treePath: m,
			} = e,
			{ overrideElement: y, shouldRenderDefault: L } = R('filter', e);
		if (!L) return y;
		const r = n?.url?.link || x?.link,
			t = n?.value.label || C,
			l = n?.facet.label || v,
			f = {
				button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...h({ disableStyles: _ }), theme: e.theme, treePath: m },
				icon: {
					icon: 'close-thin',
					internalClassName: 'ss__filter__button__icon',
					size: '10px',
					...h({ disableStyles: _, icon: a }),
					theme: e.theme,
					treePath: m,
				},
			},
			T = $(e, G),
			B = { filter: { attributes: { 'aria-label': l ? `remove selected ${l} filter ${t}` : t } } },
			I = z(B, e.lang || {}),
			u = q(I, { label: l, value: t }, { activeBreakpoint: i?.activeBreakpoint });
		return t
			? s(O, {
					children: s('a', {
						...T,
						className: E('ss__filter', N, P),
						onClick: (b) => {
							r?.onClick && r.onClick(b), o && o(b);
						},
						href: r?.href,
						tabIndex: 0,
						...u.filter?.attributes,
						children: d(w, {
							...f.button,
							children: [
								s(A, { ...f.icon, ...(typeof a == 'string' ? { icon: a } : a) }),
								!k &&
									d('span', {
										className: 'ss__filter__label',
										children: [l, c && s('span', { className: 'ss__filter__label__separator', children: c })],
									}),
								s('span', { className: 'ss__filter__value', ...u.filter?.value, children: t }),
							],
						}),
					}),
			  })
			: null;
	});
export { U as F };
