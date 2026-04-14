(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2407],
		{
			'./components/src/components/Molecules/SearchInput/SearchInput.stories.tsx'(b, r, t) {
				'use strict';
				t.r(r), t.d(r, { Default: () => m, __namedExportsOrder: () => v, default: () => o });
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
\`\`\`jsx
import { SearchInput } from '@athoscommerce/snap-preact/components';
\`\`\`
\`\`\`jsx
<SearchInput onChange={handleChange} placeholderText={"placeholder text"}/>
\`\`\`

### value
The \`value\` prop sets the input value if externally managed.

\`\`\`jsx
<SearchInput value={'dress'} placeholderText={"placeholder text"} />
\`\`\`

### placeholderText
The \`placeholderText\` prop sets the input placeholder text. 

\`\`\`jsx
<SearchInput placeholderText={"placeholder text"} />
\`\`\`

### inputName
The \`inputName\` prop sets the input name attribute value. 

\`\`\`jsx
<SearchInput inputName={"query"} />
\`\`\`

### onChange
The \`onChange\` prop is invoked when the input's value has been changed. 

\`\`\`jsx
<SearchInput onChange={handleChange} />
\`\`\`

### onKeyUp
The \`onKeyUp\` prop is invoked on keyUp on the input. 

\`\`\`jsx
<SearchInput onKeyUp={handleChange} />
\`\`\`

### onKeyDown
The \`onKeyDown\` prop is invoked keyDown on the input

\`\`\`jsx
<SearchInput onKeyDown={handleChange} />
\`\`\`

### onClick
The \`onClick\` prop is invoked on click of anything in the component. Wrapper, input or icon. 

\`\`\`jsx
<SearchInput onClick={handleChange} />
\`\`\`

### submitSearchButton
The \`submitSearchButton\` prop specifies props to pass to the submit search button component. Takes any \`Button\` component props. 

\`\`\`jsx

const buttonProps = {
    icon: 'search',
    onClick: () => func
};

<SearchInput submitSearchButton={buttonProps} />
\`\`\`

### clearSearchButton
The \`clearSearchButton\` prop specifies props to pass to the clear search button component. Takes any \`Button\` component props. Note this button only renders if there is a value to clear. 

\`\`\`jsx

const buttonProps = {
    icon: 'close-thin',
    onClick: () => func
};

<SearchInput clearSearchButton={buttonProps} />
\`\`\`

### closeSearchButton
The \`closeSearchButton\` prop specifies props to pass to the close search button component. Takes any \`Button\` component props. 

\`\`\`jsx

const buttonProps = {
    icon: 'angle-left',
    onClick: () => func
};

<SearchInput closeSearchButton={buttonProps} />
\`\`\`

### inputRef
The \`inputRef\` prop specifies a ref to set on the input element. To be accessed in a parent component.

\`\`\`jsx
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
							...l.F,
						},
					},
					m = (h) => (0, n.Y)(a.D, { ...h });
				(m.args = { submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: SearchInputProps) => <SearchInput {...args} />', ...m.parameters?.docs?.source },
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(b, r, t) {
				'use strict';
				t.d(r, { $: () => w });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					u = t.n(a),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = t('./components/src/providers/snap.tsx'),
					v = t('./components/src/providers/treePath.tsx'),
					h = t('./components/src/hooks/useA11y.tsx'),
					s = t('./components/src/utilities/cloneWithProps.tsx'),
					D = t('./components/src/utilities/defined.ts'),
					B = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					U = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					Z = t('./components/src/hooks/useLang.tsx'),
					z = t('./components/src/hooks/useComponent.tsx'),
					J = t('../../node_modules/deepmerge/dist/cjs.js'),
					G = t.n(J),
					Q = t('../../node_modules/color/index.js'),
					P = t.n(Q);
				const X = ({ native: R, color: _, backgroundColor: i, borderColor: W, theme: x }) => {
						const y = new (P())(i || _ || x?.variables?.colors?.primary || void 0).lightness(95);
						return R
							? (0, c.AH)({})
							: (0, c.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: _ || x?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: i || '#fff',
									border: `1px solid ${W || _ || x?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: y.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					w = (0, l.PA)((R) => {
						const _ = (0, o.u)(),
							i = (0, m.uk)(),
							x = { disableA11y: !1, treePath: (0, v.LU)() },
							y = (0, B.v6)('button', _, x, R),
							{
								content: C,
								children: f,
								disabled: E,
								native: N,
								onClick: A,
								disableA11y: k,
								disableStyles: Y,
								className: F,
								internalClassName: K,
								icon: d,
								lang: V,
								treePath: O,
								customComponent: S,
								style: q,
								styleScript: j,
								themeStyleScript: T,
								...et
							} = y;
						if (S) {
							const L = (0, z.x)(i?.templates?.library.import.component.button || {}, S);
							if (L) return (0, n.Y)(L, { ...y });
						}
						const M = { icon: { internalClassName: 'ss__button__icon', ...(0, D.s)({ disableStyles: Y }), theme: y?.theme, treePath: O } },
							$ = {
								...(0, g.Z)(y, X),
								className: u()('ss__button', { 'ss__button--native': N, 'ss__button--disabled': E }, F, K),
								disabled: E,
								onClick: (L) => !E && A && A(L),
								...et,
							},
							tt = { ref: (L) => (0, h.iy)(L) },
							I = {},
							p = G()(I, V || {}),
							H = (0, Z.u)(p, {});
						return C || f || d || V?.button?.value
							? (0, n.Y)(e._, {
									children: N
										? (0, n.FD)('button', {
												...$,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...H.button?.all,
														children: [(0, s.Y)(C, { treePath: O }), (0, s.Y)(f, { treePath: O })],
													}),
													d && (0, n.Y)(U.I, { ...M.icon, ...(typeof d == 'string' ? { icon: d } : d) }),
												],
										  })
										: (0, n.FD)('div', {
												...(k ? {} : tt),
												role: 'button',
												'aria-disabled': E,
												...$,
												...H.button?.attributes,
												children: [
													C || f || H.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...H.button?.value,
																children: [(0, s.Y)(C, { treePath: O }), (0, s.Y)(f, { treePath: O })],
														  })
														: void 0,
													d && (0, n.Y)(U.I, { ...M.icon, ...(typeof d == 'string' ? { icon: d } : d) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(b, r, t) {
				'use strict';
				t.d(r, { D: () => Q });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = t('../../node_modules/classnames/index.js'),
					u = t.n(a),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					o = t('./components/src/utilities/mergeProps.ts'),
					m = t('./components/src/utilities/mergeStyles.ts'),
					v = t('./components/src/providers/cache.tsx'),
					h = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = t('./components/src/providers/snap.tsx'),
					D = t('./components/src/providers/treePath.tsx'),
					B = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = t('./components/src/components/Atoms/Button/Button.tsx'),
					U = t('../../node_modules/deepmerge/dist/cjs.js'),
					Z = t.n(U),
					z = t('./components/src/hooks/useLang.tsx'),
					J = t('./components/src/hooks/useComponent.tsx');
				const G = ({ theme: P }) =>
						(0, c.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${P?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					Q = (0, l.PA)((P) => {
						const X = (0, h.u)(),
							w = (0, s.uk)(),
							_ = {
								placeholderText: 'Search',
								treePath: (0, D.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							i = (0, o.v6)('searchInput', X, _, P);
						(i.submitSearchButton = { ..._.submitSearchButton, ...i.submitSearchButton, ...P?.submitSearchButton }),
							(i.clearSearchButton = { ..._.clearSearchButton, ...i.clearSearchButton, ...P?.clearSearchButton }),
							(i.closeSearchButton = { ..._.closeSearchButton, ...i.closeSearchButton, ...P?.closeSearchButton });
						const {
							placeholderText: W,
							value: x,
							submitSearchButton: y,
							closeSearchButton: C,
							clearSearchButton: f,
							inputRef: E,
							inputName: N,
							onChange: A,
							onClick: k,
							onKeyDown: Y,
							onKeyUp: F,
							disabled: K,
							disableStyles: d,
							className: V,
							internalClassName: O,
							treePath: S,
							customComponent: q,
						} = i;
						if (q) {
							const p = (0, J.x)(w?.templates?.library.import.component.searchInput || {}, q);
							if (p) return (0, n.Y)(p, { ...i });
						}
						let j, T;
						x === void 0 ? ([j, T] = (0, B.J0)('')) : (j = x);
						const M = {
								submitSearchButton: {
									...y,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, e.s)({ disableStyles: d }),
									theme: i?.theme,
									treePath: S,
								},
								clearSearchButton: {
									...f,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (p) => {
										E?.current && (((E?.current).value = ''), (E?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											T && T(''),
											f?.onClick && f.onClick(p);
									},
									...(0, e.s)({ disableStyles: d }),
									theme: i?.theme,
									treePath: S,
								},
								closeSearchButton: {
									...C,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, e.s)({ disableStyles: d }),
									theme: i?.theme,
									treePath: S,
								},
							},
							nt = (0, m.Z)(i, G),
							$ = {
								placeholderText: { attributes: { placeholder: W } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							tt = Z()($, i.lang || {}),
							I = (0, z.u)(tt, {});
						return (0, n.Y)(v._, {
							children: (0, n.FD)('div', {
								...nt,
								className: u()('ss__search-input', { 'ss__input--disabled': K }, V, O),
								onClick: (p) => !K && k && k(p),
								children: [
									C && (0, n.Y)(g.$, { ...M.closeSearchButton, ...I.closeSearchButton.all }),
									(0, n.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...I.placeholderText.attributes,
										value: j,
										name: N,
										ref: E,
										onKeyDown: (p) => Y && Y(p),
										onKeyUp: (p) => F && F(p),
										onChange: (p) => {
											T && T(p.target.value || ''), A && A(p);
										},
										disabled: K,
									}),
									(0, n.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											f && j?.length ? (0, n.Y)(g.$, { ...M.clearSearchButton, ...I.clearSearchButton.all }) : null,
											y && (0, n.Y)(g.$, { ...M.submitSearchButton, ...I.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, r, t) {
				'use strict';
				t.d(r, { DH: () => u, aZ: () => a, iy: () => l });
				const n = 9,
					c = 27,
					a = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, o, m, v) {
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
						m &&
							e.addEventListener('keydown', function (s) {
								const D = e.querySelectorAll(u),
									B = D[0],
									g = D[D.length - 1];
								if (s.keyCode == c) {
									e.focus(), v && v(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === n) &&
									(s.shiftKey
										? document.activeElement === B && (g.focus(), s.preventDefault())
										: document.activeElement === g && (B.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(b, r, t) {
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
			'./components/src/utilities/componentArgs.ts'(b, r, t) {
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
			'./components/src/utilities/defined.ts'(b, r, t) {
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
			'./components/src/utilities/storybook.tsx'(b, r, t) {
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
			'../../node_modules/memoizerific sync recursive'(b) {
				function r(t) {
					var n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (b.exports = r);
			},
		},
	]);
})();
