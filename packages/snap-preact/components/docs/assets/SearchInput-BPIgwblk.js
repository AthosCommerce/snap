import { o as R, u as U, a as V, m as z, b as O, s as $, c as q, n as A, j as n, l as y, d as F, C as G, e as H } from './iframe-Bc4KSH0T.js';
import { u as J } from './useLang-Dx66cFD0.js';
import { d } from './defined-CdKp_MB-.js';
import { B as p } from './Button-C4cTOUHA.js';
const M = ({ theme: a }) =>
		H({
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			border: `1px solid ${a?.variables?.colors?.primary || '#ccc'}`,
			'& .ss__icon': { padding: '5px' },
			'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
			'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
			'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
		}),
	ae = R((a) => {
		const S = U(),
			r = { placeholderText: 'Search', treePath: V(), submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } },
			e = z('searchInput', S, r, a);
		(e.submitSearchButton = { ...r.submitSearchButton, ...e.submitSearchButton, ...a?.submitSearchButton }),
			(e.clearSearchButton = { ...r.clearSearchButton, ...e.clearSearchButton, ...a?.clearSearchButton }),
			(e.closeSearchButton = { ...r.closeSearchButton, ...e.closeSearchButton, ...a?.closeSearchButton });
		const {
				placeholderText: N,
				value: _,
				submitSearchButton: B,
				closeSearchButton: g,
				clearSearchButton: c,
				hideSubmitSearchButton: P,
				hideClearSearchButton: T,
				hideCloseSearchButton: k,
				inputRef: o,
				inputName: I,
				onChange: f,
				onClick: C,
				onKeyDown: x,
				onKeyUp: v,
				disabled: i,
				disableStyles: h,
				className: j,
				internalClassName: w,
				treePath: m,
			} = e,
			{ overrideElement: K, shouldRenderDefault: L } = O('searchInput', e);
		if (!L) return K;
		let l, s;
		_ === void 0 ? ([l, s] = $('')) : (l = _);
		const b = {
				submitSearchButton: {
					...B,
					internalClassName: 'ss__search-input__button--submit-search-button',
					name: 'submit-search',
					...d({ disableStyles: h }),
					theme: e?.theme,
					treePath: m,
				},
				clearSearchButton: {
					...c,
					internalClassName: 'ss__search-input__button--clear-search-button',
					name: 'clear-search',
					onClick: (t) => {
						o?.current && (((o?.current).value = ''), (o?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
							s && s(''),
							c?.onClick && c.onClick(t);
					},
					...d({ disableStyles: h }),
					theme: e?.theme,
					treePath: m,
				},
				closeSearchButton: {
					...g,
					internalClassName: 'ss__search-input__button--close-search-button',
					name: 'close-search',
					...d({ disableStyles: h }),
					theme: e?.theme,
					treePath: m,
				},
			},
			D = q(e, M),
			E = A(
				{
					placeholderText: { attributes: { placeholder: N } },
					closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
					clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
					submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
				},
				e.lang || {}
			),
			u = J(E, {}, { activeBreakpoint: S?.activeBreakpoint });
		return n(G, {
			children: y('div', {
				...D,
				className: F('ss__search-input', { 'ss__input--disabled': i }, j, w),
				onClick: (t) => !i && C && C(t),
				children: [
					!k && g && n(p, { ...b.closeSearchButton, ...u.closeSearchButton.all }),
					n('input', {
						type: 'text',
						className: 'ss__search-input__input',
						...u.placeholderText.attributes,
						value: l,
						name: I,
						ref: o,
						onKeyDown: (t) => x && x(t),
						onKeyUp: (t) => v && v(t),
						onChange: (t) => {
							s && s(t.target.value || ''), f && f(t);
						},
						disabled: i,
					}),
					y('div', {
						className: 'ss__search-input__icons',
						children: [
							!T && c && l?.length ? n(p, { ...b.clearSearchButton, ...u.clearSearchButton.all }) : null,
							!P && B && n(p, { ...b.submitSearchButton, ...u.submitSearchButton.all }),
						],
					}),
				],
			}),
		});
	});
export { ae as S };
