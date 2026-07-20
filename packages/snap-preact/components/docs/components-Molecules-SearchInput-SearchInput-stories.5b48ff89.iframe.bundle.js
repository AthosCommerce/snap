(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2407],
		{
			'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx'(_, s, t) {
				'use strict';
				t.r(s), t.d(s, { Default: () => d, __namedExportsOrder: () => y, default: () => o });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = t('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					i = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const e = `# SearchInput

Renders an input element

## Sub-components
- Button

## Usage
\`\`\`tsx
import { SearchInput } from '@athoscommerce/snap-preact/components';
\`\`\`
\`\`\`tsx
<SearchInput onChange={handleChange} placeholderText={"placeholder text"}/>
\`\`\`

### value
The \`value\` prop sets the input value if externally managed.

\`\`\`tsx
<SearchInput value={'dress'} placeholderText={"placeholder text"} />
\`\`\`

### placeholderText
The \`placeholderText\` prop sets the input placeholder text. 

\`\`\`tsx
<SearchInput placeholderText={"placeholder text"} />
\`\`\`

### inputName
The \`inputName\` prop sets the input name attribute value. 

\`\`\`tsx
<SearchInput inputName={"query"} />
\`\`\`

### onChange
The \`onChange\` prop is invoked when the input's value has been changed. 

\`\`\`tsx
<SearchInput onChange={handleChange} />
\`\`\`

### onKeyUp
The \`onKeyUp\` prop is invoked on keyUp on the input. 

\`\`\`tsx
<SearchInput onKeyUp={handleChange} />
\`\`\`

### onKeyDown
The \`onKeyDown\` prop is invoked keyDown on the input

\`\`\`tsx
<SearchInput onKeyDown={handleChange} />
\`\`\`

### onClick
The \`onClick\` prop is invoked on click of anything in the component. Wrapper, input or icon. 

\`\`\`tsx
<SearchInput onClick={handleChange} />
\`\`\`

### submitSearchButton
The \`submitSearchButton\` prop specifies props to pass to the submit search button component. Takes any \`Button\` component props. 

\`\`\`tsx

const buttonProps = {
    icon: 'search',
    onClick: () => func
};

<SearchInput submitSearchButton={buttonProps} />
\`\`\`

### clearSearchButton
The \`clearSearchButton\` prop specifies props to pass to the clear search button component. Takes any \`Button\` component props. Note this button only renders if there is a value to clear. 

\`\`\`tsx

const buttonProps = {
    icon: 'close-thin',
    onClick: () => func
};

<SearchInput clearSearchButton={buttonProps} />
\`\`\`

### closeSearchButton
The \`closeSearchButton\` prop specifies props to pass to the close search button component. Takes any \`Button\` component props. 

\`\`\`tsx

const buttonProps = {
    icon: 'angle-left',
    onClick: () => func
};

<SearchInput closeSearchButton={buttonProps} />
\`\`\`

### hideSubmitSearchButton
The \`hideSubmitSearchButton\` prop hides the submit search button.

\`\`\`tsx
<SearchInput hideSubmitSearchButton={true} />
\`\`\`

### hideClearSearchButton
The \`hideClearSearchButton\` prop hides the clear search button.

\`\`\`tsx
<SearchInput hideClearSearchButton={true} />
\`\`\`

### hideCloseSearchButton
The \`hideCloseSearchButton\` prop hides the close search button.

\`\`\`tsx
<SearchInput hideCloseSearchButton={true} />
\`\`\`

### inputRef
The \`inputRef\` prop specifies a ref to set on the input element. To be accessed in a parent component.

\`\`\`tsx
const renderedInputRef = useRef(null);
useEffect(() => {
    console.log(renderedInputRef)
},[])

<SearchInput inputRef={renderedInputRef} />
\`\`\`
`,
					o = {
						title: 'Molecules/SearchInput',
						component: a.D,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(r.oz, { options: { overrides: { code: i.Z } }, children: e }), (0, n.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, n.Y)('div', { style: { maxWidth: '500px' }, children: (0, n.Y)(p, {}) })],
						argTypes: {
							value: {
								defaultValue: '',
								type: { required: !0 },
								description: 'sets the value for the input',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onChange: {
								description: 'OnChange Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onChange',
							},
							onKeyUp: {
								description: 'OnKeyUp Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onKeyUp',
							},
							onKeyDown: {
								description: 'OnKeyDown Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onKeyDown',
							},
							onClick: {
								description: 'OnClick Callback',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							submitSearchButton: {
								description: 'Button component props for submit search button',
								table: { category: 'Templates Legal', type: { summary: "{ icon: 'search-thin' }" } },
								control: { type: 'object' },
							},
							clearSearchButton: {
								description: 'Button component props for clear search button',
								table: { category: 'Templates Legal', type: { summary: "{ icon: 'close-thin' }" } },
								control: { type: 'object' },
							},
							closeSearchButton: {
								description: 'Button component props for close search button',
								table: { category: 'Templates Legal', type: { summary: '{}' } },
								control: { type: 'object' },
							},
							placeholderText: {
								defaultValue: 'Search',
								description: 'Display placeholder text',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Search' } },
								control: { type: 'text' },
							},
							inputName: {
								description: 'sets the name attribute for the input',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							disabled: {
								description: 'boolean to set disabled attribute',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							hideSubmitSearchButton: {
								description: 'hides the submit search button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							hideClearSearchButton: {
								description: 'hides the clear search button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							hideCloseSearchButton: {
								description: 'hides the close search button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							...l.F,
						},
					},
					d = (p) => (0, n.Y)(a.D, { ...p });
				(d.args = { submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } }),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(_, s, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					i = t.n(a),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/treePath.tsx'),
					y = t('./components/src/hooks/useA11y.tsx'),
					p = t('./components/src/utilities/cloneWithProps.tsx'),
					c = t('./components/src/utilities/defined.ts'),
					S = t('./components/src/utilities/mergeProps.ts'),
					f = t('./components/src/utilities/mergeStyles.ts'),
					v = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					$ = t('./components/src/hooks/useLang.tsx'),
					H = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Z = t('../../node_modules/deepmerge/dist/cjs.js'),
					z = t.n(Z);
				const J = ({ native: L, color: A, backgroundColor: B, borderColor: u, theme: b }) =>
						L
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: A || b?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: B || '#fff',
									border: `1px solid ${u || A || b?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					E = (0, l.PA)((L) => {
						const A = (0, o.u)(),
							u = { disableA11y: !1, treePath: (0, d.LU)() },
							b = (0, S.v6)('button', A, u, L),
							{
								content: x,
								children: P,
								disabled: C,
								native: D,
								onClick: W,
								disableA11y: G,
								disableStyles: Q,
								className: I,
								internalClassName: X,
								icon: m,
								lang: K,
								treePath: g,
								style: w,
								styleScript: N,
								themeStyleScript: k,
								...Y
							} = b,
							{ overrideElement: q, shouldRenderDefault: U } = (0, H._)('button', b);
						if (!U) return q;
						const F = { icon: { internalClassName: 'ss__button__icon', ...(0, c.s)({ disableStyles: Q }), theme: b?.theme, treePath: g } },
							T = {
								...(0, f.Z)(b, J),
								className: i()('ss__button', { 'ss__button--native': D, 'ss__button--disabled': C }, I, X),
								disabled: C,
								onClick: (j) => !C && W && W(j),
								...Y,
							},
							O = { ref: (j) => (0, y.iy)(j) },
							nt = {},
							R = z()(nt, K || {}),
							M = (0, $.u)(R, {}),
							tt = !!Y.dangerouslySetInnerHTML;
						return x || P || m || K?.button?.value || tt
							? (0, n.Y)(e._, {
									children: D
										? (0, n.FD)('button', {
												...T,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...M.button?.all,
														children: [(0, p.Y)(x, { treePath: g }), (0, p.Y)(P, { treePath: g })],
													}),
													m && (0, n.Y)(v.I, { ...F.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  })
										: (0, n.FD)('div', {
												...(G ? {} : O),
												role: 'button',
												'aria-disabled': C,
												...T,
												...M.button?.attributes,
												children: [
													x || P || M.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...M.button?.value,
																children: [(0, p.Y)(x, { treePath: g }), (0, p.Y)(P, { treePath: g })],
														  })
														: void 0,
													m && (0, n.Y)(v.I, { ...F.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  }),
							  })
							: null;
					});
				t.d(s, ['$', 0, E]);
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(_, s, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					i = t.n(a),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					o = t('./components/src/utilities/mergeProps.ts'),
					d = t('./components/src/utilities/mergeStyles.ts'),
					y = t('./components/src/providers/cache.tsx'),
					p = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = t('./components/src/providers/treePath.tsx'),
					S = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = t('./components/src/components/Atoms/Button/Button.tsx'),
					v = t('../../node_modules/deepmerge/dist/cjs.js'),
					$ = t.n(v),
					H = t('./components/src/hooks/useLang.tsx'),
					Z = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const z = ({ theme: E }) =>
						(0, r.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${E?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					J = (0, l.PA)((E) => {
						const L = (0, p.u)(),
							B = {
								placeholderText: 'Search',
								treePath: (0, c.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							u = (0, o.v6)('searchInput', L, B, E);
						(u.submitSearchButton = { ...B.submitSearchButton, ...u.submitSearchButton, ...E?.submitSearchButton }),
							(u.clearSearchButton = { ...B.clearSearchButton, ...u.clearSearchButton, ...E?.clearSearchButton }),
							(u.closeSearchButton = { ...B.closeSearchButton, ...u.closeSearchButton, ...E?.closeSearchButton });
						const {
								placeholderText: b,
								value: x,
								submitSearchButton: P,
								closeSearchButton: C,
								clearSearchButton: D,
								hideSubmitSearchButton: W,
								hideClearSearchButton: G,
								hideCloseSearchButton: Q,
								inputRef: I,
								inputName: X,
								onChange: m,
								onClick: K,
								onKeyDown: g,
								onKeyUp: w,
								disabled: N,
								disableStyles: k,
								className: Y,
								internalClassName: q,
								treePath: U,
							} = u,
							{ overrideElement: F, shouldRenderDefault: et } = (0, Z._)('searchInput', u);
						if (!et) return F;
						let T, O;
						x === void 0 ? ([T, O] = (0, S.J0)('')) : (T = x);
						const R = {
								submitSearchButton: {
									...P,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, e.s)({ disableStyles: k }),
									theme: u?.theme,
									treePath: U,
								},
								clearSearchButton: {
									...D,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (h) => {
										I?.current && (((I?.current).value = ''), (I?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											O && O(''),
											D?.onClick && D.onClick(h);
									},
									...(0, e.s)({ disableStyles: k }),
									theme: u?.theme,
									treePath: U,
								},
								closeSearchButton: {
									...C,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, e.s)({ disableStyles: k }),
									theme: u?.theme,
									treePath: U,
								},
							},
							M = (0, d.Z)(u, z),
							tt = {
								placeholderText: { attributes: { placeholder: b } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							j = $()(tt, u.lang || {}),
							V = (0, H.u)(j, {});
						return (0, n.Y)(y._, {
							children: (0, n.FD)('div', {
								...M,
								className: i()('ss__search-input', { 'ss__input--disabled': N }, Y, q),
								onClick: (h) => !N && K && K(h),
								children: [
									!Q && C && (0, n.Y)(f.$, { ...R.closeSearchButton, ...V.closeSearchButton.all }),
									(0, n.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...V.placeholderText.attributes,
										value: T,
										name: X,
										ref: I,
										onKeyDown: (h) => g && g(h),
										onKeyUp: (h) => w && w(h),
										onChange: (h) => {
											O && O(h.target.value || ''), m && m(h);
										},
										disabled: N,
									}),
									(0, n.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											!G && D && T?.length ? (0, n.Y)(f.$, { ...R.clearSearchButton, ...V.clearSearchButton.all }) : null,
											!W && P && (0, n.Y)(f.$, { ...R.submitSearchButton, ...V.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
				t.d(s, ['D', 0, J]);
			},
			'./components/src/hooks/useA11y.tsx'(_, s, t) {
				'use strict';
				t.d(s, { iy: () => l });
				const n = 9,
					r = 27,
					a = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, o, d, y) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = p),
							(c.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					e &&
						!e.attributes?.[a] &&
						(e.setAttribute(a, !0),
						e.setAttribute('tabIndex', `${o || 0}`),
						e.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && e.click();
						}),
						d &&
							e.addEventListener('keydown', function (c) {
								const S = e.querySelectorAll(i),
									f = S[0],
									v = S[S.length - 1];
								if (c.keyCode == r) {
									e.focus(), y && y(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === n) &&
									(c.shiftKey
										? document.activeElement === f && (v.focus(), c.preventDefault())
										: document.activeElement === v && (f.focus(), c.preventDefault()));
							}));
				}
				t.d(s, ['DH', 0, i, 'aZ', 0, a]);
			},
			'./components/src/hooks/useLang.tsx'(_, s, t) {
				'use strict';
				const n = (r, a) => {
					const i = {};
					return (
						Object.keys(r).forEach((l) => {
							const e = r && r[l],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value(a) } })
										: (o.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': l }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](a))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](a))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(a))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(a)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(a))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': l })),
								(i[l] = o);
						}),
						i
					);
				};
				t.d(s, ['u', 0, n]);
			},
			'./components/src/utilities/componentArgs.ts'(_, s, t) {
				'use strict';
				const n = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				t.d(s, ['F', 0, n]);
			},
			'./components/src/utilities/defined.ts'(_, s, t) {
				'use strict';
				t.d(s, { s: () => n });
				function n(r) {
					const a = {};
					return (
						Object.keys(r).map((i) => {
							r[i] !== void 0 && (a[i] = r[i]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(_, s, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					i = (l) => {
						const e = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(a) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, n.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(s, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function s(t) {
					const n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (_.exports = s);
			},
		},
	]);
})();
