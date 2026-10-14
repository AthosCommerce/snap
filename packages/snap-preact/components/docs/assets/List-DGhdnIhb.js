import { o as $, u as F, a as G, m as H, b as J, c as M, s as y, n as Q, j as r, l as S, I as U, d as C, C as V, e as X } from './iframe-CXSVAHru.js';
import { d as P } from './defined-CdKp_MB-.js';
import { s as k } from './selectionKey-CmN2KTR5.js';
import { u as Y } from './useLang-Dx66cFD0.js';
import { C as Z } from './Checkbox-CXNoFSPC.js';
import { u as z } from './useA11y-BuGQuOJb.js';
import { h as ee } from './handleize-xLHhB8k5.js';
const se = ({ horizontal: i }) =>
		X({
			display: 'flex',
			flexDirection: i ? 'row' : 'column',
			alignItems: i ? 'center' : void 0,
			justifyItems: 'flex-start',
			gap: '5px',
			'.ss__list__options': {
				border: 'none',
				listStyle: 'none',
				padding: '0px',
				margin: '0px',
				display: 'flex',
				flexDirection: i ? 'row' : 'column',
				alignItems: i ? 'center' : void 0,
				justifyItems: 'flex-start',
				gap: '5px',
			},
			'.ss__list__option': {
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				gap: '5px',
				'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
			},
			'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
			'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
			'.ss__list__option--selected': { fontWeight: 'bold' },
		}),
	de = $((i) => {
		const d = F(),
			I = { treePath: G() },
			a = H('list', d, I, i),
			{
				titleText: _,
				onSelect: m,
				native: u,
				multiSelect: N,
				hideOptionLabels: T,
				hideOptionIcons: L,
				hideOptionCheckboxes: j,
				disabled: b,
				hideTitleText: A,
				options: c,
				requireSelection: f,
				disableStyles: p,
				className: O,
				internalClassName: w,
				treePath: h,
			} = a,
			{ overrideElement: D, shouldRenderDefault: B } = J('list', a);
		if (!B) return D;
		let t = a.selected;
		const v = {
				checkbox: { native: u, ...P({ disableStyles: p }), theme: a?.theme, treePath: h },
				icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...P({ disableStyles: p }), theme: a?.theme, treePath: h },
			},
			E = M(a, se);
		t && !Array.isArray(t) && (t = [t]);
		const [n, g] = y(t || []),
			[K, q] = y(() => k(t));
		if (t) {
			const e = k(t);
			e !== K && (q(e), g(t));
		}
		const R = (e, l) => {
				let s;
				N
					? n.find((o) => o.value === l.value)
						? ((s = [...n]),
						  s.splice(
								s.findIndex((o) => o.value === l.value),
								1
						  ),
						  s.length == 0 && f && (s = [l]))
						: (s = [...n, l])
					: !f && n.find((o) => o.value === l.value)
					? (s = [])
					: (s = [l]),
					m && m(e, l, s),
					g(s);
			},
			x = Q({}, a.lang || {}),
			W = Y(x, { options: c, selectedOptions: n }, { activeBreakpoint: d?.activeBreakpoint });
		return typeof c == 'object' && c?.length
			? r(V, {
					children: S('div', {
						...E,
						className: C('ss__list', { 'ss__list--native': u, 'ss__list--disabled': b }, O, w),
						children: [
							(_ || x?.title?.value) && !A && r('h5', { className: 'ss__list__title', ...W.title?.all, children: _ }),
							r('ul', {
								className: 'ss__list__options',
								role: 'listbox',
								'aria-label': _,
								children: c.map((e) => {
									const l = n.some((s) => s.value == e.value);
									return S('li', {
										className: C(`ss__list__option ss__list__option--${ee(e.value?.toString())}`, {
											'ss__list__option--selected': l,
											'ss__list__option--disabled': e?.disabled,
											'ss__list__option--unavailable': e?.available === !1,
										}),
										ref: (s) => z(s),
										onClick: (s) => !b && !e?.disabled && R(s, e),
										title: e.label,
										role: 'option',
										'aria-selected': l,
										'aria-disabled': e.disabled || e?.available === !1,
										children: [
											!j && r(Z, { ...v.checkbox, checked: l, disableA11y: !0, 'aria-label': e.label }),
											e.icon && !L && r(U, { ...v.icon, ...(typeof e.icon == 'string' ? { icon: e.icon } : e.icon) }),
											!T && (e.label || !e.icon) && r('label', { className: 'ss__list__option__label', children: e.label || e.value }),
										],
									});
								}),
							}),
						],
					}),
			  })
			: null;
	});
export { de as L };
