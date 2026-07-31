(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2407],
		{
			'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx'(_, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => e, __namedExportsOrder: () => o, default: () => d });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = t('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					u = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const s = `# SearchInput

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

## Lang

The \`lang\` prop allows you to override translatable text strings used by the SearchInput component. Lang entries for this component primarily use \`attributes\` to set HTML attributes like \`placeholder\` and \`aria-label\`.

| Lang Key | Description | Attributes |
|---|---|---|
| \`placeholderText\` | Search input placeholder | \`placeholder\` |
| \`closeSearchButton\` | Close search button | \`aria-label\` |
| \`clearSearchButton\` | Clear search button | \`aria-label\` |
| \`submitSearchButton\` | Submit search button | \`aria-label\` |

### Example

\`\`\`tsx
<SearchInput
	lang={{
		placeholderText: {
			attributes: {
				placeholder: 'Search our store...',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Close search',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Clear search input',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Submit search',
			},
		},
	}}
/>
\`\`\`
`,
					d = {
						title: 'Molecules/SearchInput',
						component: i.D,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(r.oz, { options: { overrides: { code: u.Z } }, children: s }), (0, n.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, n.Y)('div', { style: { maxWidth: '500px' }, children: (0, n.Y)(m, {}) })],
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
					e = (m) => (0, n.Y)(i.D, { ...m });
				(e.args = { submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } }),
					(e.parameters = {
						...e.parameters,
						docs: {
							...e.parameters?.docs,
							source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...e.parameters?.docs?.source },
						},
					});
				const o = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(_, a, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = t('../../node_modules/classnames/index.js'),
					u = t.n(i),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('./components/src/providers/cache.tsx'),
					d = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					e = t('./components/src/providers/treePath.tsx'),
					o = t('./components/src/hooks/useA11y.tsx'),
					m = t('./components/src/utilities/cloneWithProps.tsx'),
					c = t('./components/src/utilities/defined.ts'),
					S = t('./components/src/utilities/mergeProps.ts'),
					f = t('./components/src/utilities/mergeStyles.ts'),
					v = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					H = t('./components/src/hooks/useLang.tsx'),
					$ = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Z = t('../../node_modules/deepmerge/dist/cjs.js'),
					z = t.n(Z);
				const J = ({ native: I, color: M, backgroundColor: B, borderColor: p, theme: y }) =>
						I
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: M || y?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: B || '#fff',
									border: `1px solid ${p || M || y?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					E = (0, l.PA)((I) => {
						const M = (0, d.u)(),
							p = { disableA11y: !1, treePath: (0, e.LU)() },
							y = (0, S.v6)('button', M, p, I),
							{
								content: x,
								children: C,
								disabled: D,
								native: P,
								onClick: W,
								disableA11y: G,
								disableStyles: Q,
								className: L,
								internalClassName: X,
								icon: h,
								lang: K,
								treePath: g,
								style: w,
								styleScript: k,
								themeStyleScript: N,
								...Y
							} = y,
							{ overrideElement: q, shouldRenderDefault: U } = (0, $._)('button', y);
						if (!U) return q;
						const F = { icon: { internalClassName: 'ss__button__icon', ...(0, c.s)({ disableStyles: Q }), theme: y?.theme, treePath: g } },
							T = {
								...(0, f.Z)(y, J),
								className: u()('ss__button', { 'ss__button--native': P, 'ss__button--disabled': D }, L, X),
								disabled: D,
								onClick: (j) => !D && W && W(j),
								...Y,
							},
							O = { ref: (j) => (0, o.iy)(j) },
							nt = {},
							R = z()(nt, K || {}),
							A = (0, H.u)(R, {}, { activeBreakpoint: M?.activeBreakpoint }),
							tt = !!Y.dangerouslySetInnerHTML;
						return x || C || h || K?.button?.value || tt
							? (0, n.Y)(s._, {
									children: P
										? (0, n.FD)('button', {
												...T,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...A.button?.all,
														children: [(0, m.Y)(x, { treePath: g }), (0, m.Y)(C, { treePath: g })],
													}),
													h && (0, n.Y)(v.I, { ...F.icon, ...(typeof h == 'string' ? { icon: h } : h) }),
												],
										  })
										: (0, n.FD)('div', {
												...(G ? {} : O),
												role: 'button',
												'aria-disabled': D,
												...T,
												...A.button?.attributes,
												children: [
													x || C || A.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...A.button?.value,
																children: [(0, m.Y)(x, { treePath: g }), (0, m.Y)(C, { treePath: g })],
														  })
														: void 0,
													h && (0, n.Y)(v.I, { ...F.icon, ...(typeof h == 'string' ? { icon: h } : h) }),
												],
										  }),
							  })
							: null;
					});
				t.d(a, ['$', 0, E]);
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(_, a, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = t('../../node_modules/classnames/index.js'),
					u = t.n(i),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('./components/src/utilities/defined.ts'),
					d = t('./components/src/utilities/mergeProps.ts'),
					e = t('./components/src/utilities/mergeStyles.ts'),
					o = t('./components/src/providers/cache.tsx'),
					m = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = t('./components/src/providers/treePath.tsx'),
					S = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = t('./components/src/components/Atoms/Button/Button.tsx'),
					v = t('../../node_modules/deepmerge/dist/cjs.js'),
					H = t.n(v),
					$ = t('./components/src/hooks/useLang.tsx'),
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
						const I = (0, m.u)(),
							B = {
								placeholderText: 'Search',
								treePath: (0, c.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							p = (0, d.v6)('searchInput', I, B, E);
						(p.submitSearchButton = { ...B.submitSearchButton, ...p.submitSearchButton, ...E?.submitSearchButton }),
							(p.clearSearchButton = { ...B.clearSearchButton, ...p.clearSearchButton, ...E?.clearSearchButton }),
							(p.closeSearchButton = { ...B.closeSearchButton, ...p.closeSearchButton, ...E?.closeSearchButton });
						const {
								placeholderText: y,
								value: x,
								submitSearchButton: C,
								closeSearchButton: D,
								clearSearchButton: P,
								hideSubmitSearchButton: W,
								hideClearSearchButton: G,
								hideCloseSearchButton: Q,
								inputRef: L,
								inputName: X,
								onChange: h,
								onClick: K,
								onKeyDown: g,
								onKeyUp: w,
								disabled: k,
								disableStyles: N,
								className: Y,
								internalClassName: q,
								treePath: U,
							} = p,
							{ overrideElement: F, shouldRenderDefault: et } = (0, Z._)('searchInput', p);
						if (!et) return F;
						let T, O;
						x === void 0 ? ([T, O] = (0, S.J0)('')) : (T = x);
						const R = {
								submitSearchButton: {
									...C,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, s.s)({ disableStyles: N }),
									theme: p?.theme,
									treePath: U,
								},
								clearSearchButton: {
									...P,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (b) => {
										L?.current && (((L?.current).value = ''), (L?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											O && O(''),
											P?.onClick && P.onClick(b);
									},
									...(0, s.s)({ disableStyles: N }),
									theme: p?.theme,
									treePath: U,
								},
								closeSearchButton: {
									...D,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, s.s)({ disableStyles: N }),
									theme: p?.theme,
									treePath: U,
								},
							},
							A = (0, e.Z)(p, z),
							tt = {
								placeholderText: { attributes: { placeholder: y } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							j = H()(tt, p.lang || {}),
							V = (0, $.u)(j, {}, { activeBreakpoint: I?.activeBreakpoint });
						return (0, n.Y)(o._, {
							children: (0, n.FD)('div', {
								...A,
								className: u()('ss__search-input', { 'ss__input--disabled': k }, Y, q),
								onClick: (b) => !k && K && K(b),
								children: [
									!Q && D && (0, n.Y)(f.$, { ...R.closeSearchButton, ...V.closeSearchButton.all }),
									(0, n.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...V.placeholderText.attributes,
										value: T,
										name: X,
										ref: L,
										onKeyDown: (b) => g && g(b),
										onKeyUp: (b) => w && w(b),
										onChange: (b) => {
											O && O(b.target.value || ''), h && h(b);
										},
										disabled: k,
									}),
									(0, n.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											!G && P && T?.length ? (0, n.Y)(f.$, { ...R.clearSearchButton, ...V.clearSearchButton.all }) : null,
											!W && C && (0, n.Y)(f.$, { ...R.submitSearchButton, ...V.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
				t.d(a, ['D', 0, J]);
			},
			'./components/src/hooks/useA11y.tsx'(_, a, t) {
				'use strict';
				t.d(a, { iy: () => l });
				const n = 9,
					r = 27,
					i = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(s, d, e, o) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = m),
							(c.innerHTML = `[${i}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					s &&
						!s.attributes?.[i] &&
						(s.setAttribute(i, !0),
						s.setAttribute('tabIndex', `${d || 0}`),
						s.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && s.click();
						}),
						e &&
							s.addEventListener('keydown', function (c) {
								const S = s.querySelectorAll(u),
									f = S[0],
									v = S[S.length - 1];
								if (c.keyCode == r) {
									s.focus(), o && o(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === n) &&
									(c.shiftKey
										? document.activeElement === f && (v.focus(), c.preventDefault())
										: document.activeElement === v && (f.focus(), c.preventDefault()));
							}));
				}
				t.d(a, ['DH', 0, u, 'aZ', 0, i]);
			},
			'./components/src/hooks/useLang.tsx'(_, a, t) {
				'use strict';
				const n = (r, i, u) => {
					const l = u ? { ...i, ...u } : i,
						s = {};
					return (
						Object.keys(r).forEach((d) => {
							const e = r && r[d],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: e.value(l) } })
										: (o.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': d }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](l))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](l))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(l))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(l)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(l))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': d })),
								(s[d] = o);
						}),
						s
					);
				};
				t.d(a, ['u', 0, n]);
			},
			'./components/src/utilities/componentArgs.ts'(_, a, t) {
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
				t.d(a, ['F', 0, n]);
			},
			'./components/src/utilities/defined.ts'(_, a, t) {
				'use strict';
				t.d(a, { s: () => n });
				function n(r) {
					const i = {};
					return (
						Object.keys(r).map((u) => {
							r[u] !== void 0 && (i[u] = r[u]);
						}),
						i
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(_, a, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					u = (l) => {
						const s = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								s.current && l.className?.includes('lang-') && !l.className?.includes(i) && window?.Prism?.highlightElement(s.current);
							}, [l.className, l.children, s]),
							(0, n.Y)('code', { ...l, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(a, ['Z', 0, u]);
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function a(t) {
					const n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (_.exports = a);
			},
		},
	]);
})();
