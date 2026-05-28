(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2407],
		{
			'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx'(_, r, t) {
				'use strict';
				t.r(r), t.d(r, { Default: () => d, __namedExportsOrder: () => b, default: () => o });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = t('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					u = t('./components/src/utilities/storybook.tsx'),
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
										children: [(0, n.Y)(c.oz, { options: { overrides: { code: u.Z } }, children: e }), (0, n.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, n.Y)('div', { style: { maxWidth: '500px' }, children: (0, n.Y)(h, {}) })],
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
					d = (h) => (0, n.Y)(a.D, { ...h });
				(d.args = { submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } }),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const b = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(_, r, t) {
				'use strict';
				t.d(r, { $: () => f });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					u = t.n(a),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/snap.tsx'),
					b = t('./components/src/providers/treePath.tsx'),
					h = t('./components/src/hooks/useA11y.tsx'),
					s = t('./components/src/utilities/cloneWithProps.tsx'),
					v = t('./components/src/utilities/defined.ts'),
					T = t('./components/src/utilities/mergeProps.ts'),
					y = t('./components/src/utilities/mergeStyles.ts'),
					k = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					H = t('./components/src/hooks/useLang.tsx'),
					Z = t('./components/src/hooks/useComponent.tsx'),
					z = t('../../node_modules/deepmerge/dist/cjs.js'),
					J = t.n(z);
				const G = ({ native: U, color: I, backgroundColor: N, borderColor: S, theme: i }) =>
						U
							? (0, c.AH)({})
							: (0, c.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: I || i?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: N || '#fff',
									border: `1px solid ${S || I || i?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					f = (0, l.PA)((U) => {
						const I = (0, o.u)(),
							N = (0, d.uk)(),
							i = { disableA11y: !1, treePath: (0, b.LU)() },
							M = (0, T.v6)('button', I, i, U),
							{
								content: x,
								children: B,
								disabled: P,
								native: C,
								onClick: Y,
								disableA11y: Q,
								disableStyles: X,
								className: L,
								internalClassName: w,
								icon: m,
								lang: R,
								treePath: E,
								customComponent: j,
								style: F,
								styleScript: V,
								themeStyleScript: et,
								...q
							} = M;
						if (j) {
							const g = (0, Z.x)(N?.templates?.library.import.component.button || {}, j);
							if (g) return (0, n.Y)(g, { ...M });
						}
						const A = { icon: { internalClassName: 'ss__button__icon', ...(0, v.s)({ disableStyles: X }), theme: M?.theme, treePath: E } },
							D = {
								...(0, y.Z)(M, G),
								className: u()('ss__button', { 'ss__button--native': C, 'ss__button--disabled': P }, L, w),
								disabled: P,
								onClick: (g) => !P && Y && Y(g),
								...q,
							},
							O = { ref: (g) => (0, h.iy)(g) },
							nt = {},
							W = J()(nt, R || {}),
							K = (0, H.u)(W, {});
						return x || B || m || R?.button?.value
							? (0, n.Y)(e._, {
									children: C
										? (0, n.FD)('button', {
												...D,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...K.button?.all,
														children: [(0, s.Y)(x, { treePath: E }), (0, s.Y)(B, { treePath: E })],
													}),
													m && (0, n.Y)(k.I, { ...A.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  })
										: (0, n.FD)('div', {
												...(Q ? {} : O),
												role: 'button',
												'aria-disabled': P,
												...D,
												...K.button?.attributes,
												children: [
													x || B || K.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...K.button?.value,
																children: [(0, s.Y)(x, { treePath: E }), (0, s.Y)(B, { treePath: E })],
														  })
														: void 0,
													m && (0, n.Y)(k.I, { ...A.icon, ...(typeof m == 'string' ? { icon: m } : m) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(_, r, t) {
				'use strict';
				t.d(r, { D: () => G });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					u = t.n(a),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					o = t('./components/src/utilities/mergeProps.ts'),
					d = t('./components/src/utilities/mergeStyles.ts'),
					b = t('./components/src/providers/cache.tsx'),
					h = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = t('./components/src/providers/snap.tsx'),
					v = t('./components/src/providers/treePath.tsx'),
					T = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = t('./components/src/components/Atoms/Button/Button.tsx'),
					k = t('../../node_modules/deepmerge/dist/cjs.js'),
					H = t.n(k),
					Z = t('./components/src/hooks/useLang.tsx'),
					z = t('./components/src/hooks/useComponent.tsx');
				const J = ({ theme: f }) =>
						(0, c.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${f?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					G = (0, l.PA)((f) => {
						const U = (0, h.u)(),
							I = (0, s.uk)(),
							S = {
								placeholderText: 'Search',
								treePath: (0, v.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							i = (0, o.v6)('searchInput', U, S, f);
						(i.submitSearchButton = { ...S.submitSearchButton, ...i.submitSearchButton, ...f?.submitSearchButton }),
							(i.clearSearchButton = { ...S.clearSearchButton, ...i.clearSearchButton, ...f?.clearSearchButton }),
							(i.closeSearchButton = { ...S.closeSearchButton, ...i.closeSearchButton, ...f?.closeSearchButton });
						const {
							placeholderText: M,
							value: x,
							submitSearchButton: B,
							closeSearchButton: P,
							clearSearchButton: C,
							hideSubmitSearchButton: Y,
							hideClearSearchButton: Q,
							hideCloseSearchButton: X,
							inputRef: L,
							inputName: w,
							onChange: m,
							onClick: R,
							onKeyDown: E,
							onKeyUp: j,
							disabled: F,
							disableStyles: V,
							className: et,
							internalClassName: q,
							treePath: A,
							customComponent: tt,
						} = i;
						if (tt) {
							const p = (0, z.x)(I?.templates?.library.import.component.searchInput || {}, tt);
							if (p) return (0, n.Y)(p, { ...i });
						}
						let D, O;
						x === void 0 ? ([D, O] = (0, T.J0)('')) : (D = x);
						const W = {
								submitSearchButton: {
									...B,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, e.s)({ disableStyles: V }),
									theme: i?.theme,
									treePath: A,
								},
								clearSearchButton: {
									...C,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (p) => {
										L?.current && (((L?.current).value = ''), (L?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											O && O(''),
											C?.onClick && C.onClick(p);
									},
									...(0, e.s)({ disableStyles: V }),
									theme: i?.theme,
									treePath: A,
								},
								closeSearchButton: {
									...P,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, e.s)({ disableStyles: V }),
									theme: i?.theme,
									treePath: A,
								},
							},
							K = (0, d.Z)(i, J),
							g = {
								placeholderText: { attributes: { placeholder: M } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							ot = H()(g, i.lang || {}),
							$ = (0, Z.u)(ot, {});
						return (0, n.Y)(b._, {
							children: (0, n.FD)('div', {
								...K,
								className: u()('ss__search-input', { 'ss__input--disabled': F }, et, q),
								onClick: (p) => !F && R && R(p),
								children: [
									!X && P && (0, n.Y)(y.$, { ...W.closeSearchButton, ...$.closeSearchButton.all }),
									(0, n.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...$.placeholderText.attributes,
										value: D,
										name: w,
										ref: L,
										onKeyDown: (p) => E && E(p),
										onKeyUp: (p) => j && j(p),
										onChange: (p) => {
											O && O(p.target.value || ''), m && m(p);
										},
										disabled: F,
									}),
									(0, n.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											!Q && C && D?.length ? (0, n.Y)(y.$, { ...W.clearSearchButton, ...$.clearSearchButton.all }) : null,
											!Y && B && (0, n.Y)(y.$, { ...W.submitSearchButton, ...$.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(_, r, t) {
				'use strict';
				t.d(r, { DH: () => u, aZ: () => a, iy: () => l });
				const n = 9,
					c = 27,
					a = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, o, d, b) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = h),
							(s.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					e &&
						!e.attributes?.[a] &&
						(e.setAttribute(a, !0),
						e.setAttribute('tabIndex', `${o || 0}`),
						e.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && e.click();
						}),
						d &&
							e.addEventListener('keydown', function (s) {
								const v = e.querySelectorAll(u),
									T = v[0],
									y = v[v.length - 1];
								if (s.keyCode == c) {
									e.focus(), b && b(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === n) &&
									(s.shiftKey
										? document.activeElement === T && (y.focus(), s.preventDefault())
										: document.activeElement === y && (T.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(_, r, t) {
				'use strict';
				t.d(r, { u: () => n });
				const n = (c, a) => {
					const u = {};
					return (
						Object.keys(c).forEach((l) => {
							const e = c && c[l],
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
								(u[l] = o);
						}),
						u
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(_, r, t) {
				'use strict';
				t.d(r, { F: () => n });
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
			},
			'./components/src/utilities/defined.ts'(_, r, t) {
				'use strict';
				t.d(r, { s: () => n });
				function n(c) {
					const a = {};
					return (
						Object.keys(c).map((u) => {
							c[u] !== void 0 && (a[u] = c[u]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(_, r, t) {
				'use strict';
				t.d(r, { Z: () => u });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					u = (l) => {
						const e = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(a) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, n.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function r(t) {
					var n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (_.exports = r);
			},
		},
	]);
})();
