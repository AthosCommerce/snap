import { o as E, u as K, a as $, m as W, b as q, c as z, s as x, n as F, j as i, l as v, I as G, d as H, C as J, e as M } from './iframe-U9T2Y9ZS.js';
import { R as Q } from './Radio-CBQqiZ56.js';
import { d as y } from './defined-CdKp_MB-.js';
import { s as N } from './selectionKey-CmN2KTR5.js';
import { u as U } from './useLang-Dx66cFD0.js';
import { u as V } from './useA11y-BuGQuOJb.js';
const X = ({ horizontal: l }) =>
		M({
			'& .ss__radio-list__options-wrapper': {
				display: 'flex',
				flexDirection: l ? 'row' : 'column',
				alignItems: l ? 'center' : void 0,
				justifyItems: 'flex-start',
				border: 'none',
				listStyle: 'none',
				padding: '0px',
				margin: '0px',
			},
			'.ss__radio-list__title': { margin: '0px', padding: '5px' },
			'.ss__radio-list__option': {
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				padding: '5px',
				'& .ss__radio-list__option__label, .ss__radio-list__option__icon': { cursor: 'pointer', padding: '0px 0px 0px 5px' },
			},
			'&.ss__radio-list--disabled, .ss__radio-list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
			'.ss__radio-list__option--selected': { fontWeight: 'bold' },
		}),
	oe = E((l) => {
		const c = K(),
			P = { treePath: $() },
			s = W('radioList', c, P, l),
			{
				titleText: r,
				onSelect: p,
				hideOptionRadios: S,
				hideOptionIcons: C,
				hideOptionLabels: I,
				hideTitleText: L,
				native: m,
				disabled: n,
				selected: a,
				options: o,
				disableStyles: u,
				className: R,
				internalClassName: T,
				treePath: b,
			} = s,
			{ overrideElement: j, shouldRenderDefault: k } = q('radioList', s);
		if (!k) return j;
		const h = {
				Radio: {
					internalClassName: 'ss__radio-list__option__radio',
					native: m,
					disableA11y: !0,
					disabled: n,
					...y({ disableStyles: u }),
					theme: s?.theme,
					treePath: b,
				},
				Icon: { internalClassName: 'ss__radio-list__option__icon', size: '16px', ...y({ disableStyles: u }), theme: s?.theme, treePath: b },
			},
			O = z(s, X),
			[d, f] = x(a),
			[w, A] = x(() => N(a));
		if (a) {
			const e = N(a);
			e !== w && (A(e), f(a));
		}
		const B = (e, t) => {
				p && p(e, t), f(t);
			},
			g = F({}, s.lang || {}),
			D = U(g, { options: o, selectedOptions: d }, { activeBreakpoint: c?.activeBreakpoint });
		return typeof o == 'object' && o?.length
			? i(J, {
					children: v('div', {
						...O,
						className: H('ss__radio-list', { 'ss__radio-list--native': m, 'ss__radio-list--disabled': n }, R, T),
						children: [
							(r || g?.title?.value) && !L && i('h5', { className: 'ss__radio-list__title', ...D.title?.all, children: r }),
							i('ul', {
								className: 'ss__radio-list__options-wrapper',
								role: 'listbox',
								'aria-label': r,
								children: o.map((e) => {
									const t = d && d.value == e.value;
									return v('li', {
										className: `ss__radio-list__option ${t ? 'ss__radio-list__option--selected' : ''} ${
											e.disabled ? 'ss__radio-list__option--disabled' : ''
										}`,
										ref: (_) => V(_),
										onClick: (_) => !n && B(_, e),
										title: e.label,
										role: 'option',
										'aria-selected': t,
										children: [
											!S && i(Q, { ...h.Radio, checked: t, disableA11y: !0 }),
											e.icon && !C && i(G, { ...h.Icon, ...(typeof e.icon == 'string' ? { icon: e.icon } : e.icon) }),
											!I && (e.label || !e.icon) && i('label', { className: 'ss__radio-list__option__label', children: e.label || e.value }),
										],
									});
								}),
							}),
						],
					}),
			  })
			: null;
	});
export { oe as R };
