import {
	o as F,
	u as G,
	a as H,
	m as J,
	b as M,
	s as Q,
	A as W,
	c as X,
	n as Y,
	j as n,
	l as T,
	d as Z,
	C as ee,
	e as te,
} from './iframe-0uTqSs9S.js';
import { u as ae } from './useLang-Dx66cFD0.js';
import { d as b } from './defined-CdKp_MB-.js';
import { B as S } from './Button-CmsiLEAv.js';
const ne = ({ theme: a }) =>
		te({
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			border: `1px solid ${a?.variables?.colors?.primary || '#ccc'}`,
			'& .ss__icon': { padding: '5px' },
			'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
			'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
			'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
		}),
	ie = F((a) => {
		const _ = G(),
			s = { placeholderText: 'Search', treePath: H(), submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } },
			t = J('searchInput', _, s, a);
		(t.submitSearchButton = { ...s.submitSearchButton, ...t.submitSearchButton, ...a?.submitSearchButton }),
			(t.clearSearchButton = { ...s.clearSearchButton, ...t.clearSearchButton, ...a?.clearSearchButton }),
			(t.closeSearchButton = { ...s.closeSearchButton, ...t.closeSearchButton, ...a?.closeSearchButton });
		const {
				placeholderText: P,
				value: B,
				defaultValue: I,
				submitSearchButton: r,
				closeSearchButton: g,
				clearSearchButton: o,
				hideSubmitSearchButton: V,
				hideClearSearchButton: j,
				hideCloseSearchButton: w,
				inputRef: c,
				inputName: E,
				onChange: C,
				onClick: f,
				onKeyDown: v,
				onKeyUp: x,
				onSubmit: l,
				disabled: u,
				disableStyles: m,
				className: K,
				internalClassName: L,
				treePath: d,
			} = t,
			{ overrideElement: R, shouldRenderDefault: D } = M('searchInput', t);
		if (!D) return R;
		const y = B === void 0,
			[U, z] = Q(I || ''),
			k = y ? U : B,
			i = y ? z : void 0,
			A = W(null),
			N = c || A,
			p = {
				submitSearchButton: {
					...r,
					internalClassName: 'ss__search-input__button--submit-search-button',
					name: 'submit-search',
					onClick: (e) => {
						r?.onClick && r.onClick(e), !u && l && l(e, N.current?.value ?? '');
					},
					...b({ disableStyles: m }),
					theme: t?.theme,
					treePath: d,
				},
				clearSearchButton: {
					...o,
					internalClassName: 'ss__search-input__button--clear-search-button',
					name: 'clear-search',
					onClick: (e) => {
						c?.current && (((c?.current).value = ''), (c?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
							i && i(''),
							o?.onClick && o.onClick(e);
					},
					...b({ disableStyles: m }),
					theme: t?.theme,
					treePath: d,
				},
				closeSearchButton: {
					...g,
					internalClassName: 'ss__search-input__button--close-search-button',
					name: 'close-search',
					...b({ disableStyles: m }),
					theme: t?.theme,
					treePath: d,
				},
			},
			O = X(t, ne),
			$ = Y(
				{
					placeholderText: { attributes: { placeholder: P } },
					closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
					clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
					submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
				},
				t.lang || {}
			),
			h = ae($, {}, { activeBreakpoint: _?.activeBreakpoint });
		return n(ee, {
			children: T('div', {
				...O,
				className: Z('ss__search-input', { 'ss__input--disabled': u }, K, L),
				onClick: (e) => !u && f && f(e),
				children: [
					!w && g && n(S, { ...p.closeSearchButton, ...h.closeSearchButton.all }),
					n('input', {
						type: 'text',
						className: 'ss__search-input__input',
						...h.placeholderText.attributes,
						value: k,
						name: E,
						ref: N,
						onKeyDown: (e) => {
							v && v(e);
							const q = ('isComposing' in e && e.isComposing === !0) || e.keyCode === 229;
							l && e.key === 'Enter' && !q && l(e, e.currentTarget.value);
						},
						onKeyUp: (e) => x && x(e),
						onChange: (e) => {
							i && i(e.target.value || ''), C && C(e);
						},
						disabled: u,
					}),
					T('div', {
						className: 'ss__search-input__icons',
						children: [
							!j && o && k?.length ? n(S, { ...p.clearSearchButton, ...h.clearSearchButton.all }) : null,
							!V && r && n(S, { ...p.submitSearchButton, ...h.submitSearchButton.all }),
						],
					}),
				],
			}),
		});
	});
export { ie as S };
