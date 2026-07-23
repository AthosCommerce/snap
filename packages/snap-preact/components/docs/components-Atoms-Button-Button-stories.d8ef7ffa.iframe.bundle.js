(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1840],
		{
			'./components/src/components/Atoms/Button/Button.stories.tsx'(b, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => d, Disabled: () => u, Native: () => n, __namedExportsOrder: () => y, default: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Atoms/Button/Button.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const t = `# Button

Renders a native or custom button.

## Usage
\`\`\`tsx
import { Button } from '@athoscommerce/snap-preact/components';
\`\`\`

### content
The \`content\` prop specifies the button text. This can be a string or a JSX element.

\`\`\`tsx
<Button content={"click me!"} />
\`\`\`
 
Or alternatively as children:

\`\`\`tsx
<Button>click me!</Button>
\`\`\`

### disabled
The \`disabled\` prop will disable the button from being clickable.

\`\`\`tsx
<Button content={"click me!"} disabled />
\`\`\`

### native
The \`native\` prop will use a native html \`<button>\` element.

\`\`\`tsx
<Button content={"click me!"} native />
\`\`\`

### backgroundColor
The \`backgroundColor\` prop specifies the button background color.

\`\`\`tsx
<Button content={"click me!"} backgroundColor={'#eeeeee'} />
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon you wish to add to the button content. Note this currently only supports icons from our list of available icons. (see Icon Component for more details)

\`\`\`tsx
<Button content={"click me!"} icon={'cog'} />
\`\`\`

### borderColor
The \`borderColor\` prop specifies the button border color.

\`\`\`tsx
<Button content={"click me!"} borderColor={'#cccccc'} />
\`\`\`
### color
The \`color\` prop specifies the button text color.

\`\`\`tsx
<Button content={"click me!"} color={'#222222'} />
\`\`\`

### disableA11y
The \`disableA11y\` prop specifies a boolean to disable the autoset ally properties.

\`\`\`tsx
<Button content={"click me!"} disableA11y />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when the button is clicked.

\`\`\`tsx
<Button content={"click me!"} onClick={(e)=>{console.log(e)}} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the Button component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`button\` | Button element text/attributes | _(none)_ |

### Example

\`\`\`tsx
<Button
	content={"click me!"}
	lang={{
		button: {
			attributes: {
				'aria-label': 'Click this button',
			},
		},
	}}
/>
\`\`\`
`;
				var a = e('./components/src/components/Atoms/Icon/paths.tsx');
				const _ = {
						title: 'Atoms/Button',
						component: s.$,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, o.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							content: { description: 'Content to be displayed in button', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							children: {
								description: 'Content to be displayed in button (using children)',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable button',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Button click event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							color: {
								description: 'Button text color',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'color' },
							},
							icon: {
								description: 'Button Icon name',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [...Object.keys(a.c)],
								control: { type: 'select' },
							},
							backgroundColor: {
								description: 'Button background color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#fff' } },
								control: { type: 'color' },
							},
							borderColor: {
								description: 'Button border color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#333' } },
								control: { type: 'color' },
							},
							native: {
								description: 'Render as unstyled native button',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...i.F,
						},
					},
					d = (m) => (0, o.Y)(s.$, { ...m });
				d.args = { content: 'Button' };
				const u = (m) => (0, o.Y)(s.$, { ...m });
				u.args = { content: 'Button', disabled: !0 };
				const n = (m) => (0, o.Y)(s.$, { ...m });
				(n.args = { content: 'Button', native: !0 }),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...d.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...u.parameters?.docs?.source } },
					}),
					(n.parameters = {
						...n.parameters,
						docs: { ...n.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...n.parameters?.docs?.source } },
					});
				const y = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(b, r, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					c = e.n(s),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useA11y.tsx'),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					U = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					R = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(R);
				const W = ({ native: P, color: v, backgroundColor: T, borderColor: C, theme: f }) =>
						P
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: v || f?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: T || '#fff',
									border: `1px solid ${C || v || f?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					N = (0, i.PA)((P) => {
						const v = (0, a.u)(),
							C = { disableA11y: !1, treePath: (0, _.LU)() },
							f = (0, y.v6)('button', v, C, P),
							{
								content: E,
								children: x,
								disabled: B,
								native: A,
								onClick: L,
								disableA11y: Y,
								disableStyles: F,
								className: $,
								internalClassName: H,
								icon: p,
								lang: M,
								treePath: h,
								style: G,
								styleScript: Q,
								themeStyleScript: q,
								...I
							} = f,
							{ overrideElement: V, shouldRenderDefault: J } = (0, U._)('button', f);
						if (!J) return V;
						const k = { icon: { internalClassName: 'ss__button__icon', ...(0, n.s)({ disableStyles: F }), theme: f?.theme, treePath: h } },
							j = {
								...(0, m.Z)(f, W),
								className: c()('ss__button', { 'ss__button--native': A, 'ss__button--disabled': B }, $, H),
								disabled: B,
								onClick: (O) => !B && L && L(O),
								...I,
							},
							Z = { ref: (O) => (0, d.iy)(O) },
							z = {},
							X = K()(z, M || {}),
							D = (0, S.u)(X, {}),
							w = !!I.dangerouslySetInnerHTML;
						return E || x || p || M?.button?.value || w
							? (0, o.Y)(t._, {
									children: A
										? (0, o.FD)('button', {
												...j,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...D.button?.all,
														children: [(0, u.Y)(E, { treePath: h }), (0, u.Y)(x, { treePath: h })],
													}),
													p && (0, o.Y)(g.I, { ...k.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  })
										: (0, o.FD)('div', {
												...(Y ? {} : Z),
												role: 'button',
												'aria-disabled': B,
												...j,
												...D.button?.attributes,
												children: [
													E || x || D.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...D.button?.value,
																children: [(0, u.Y)(E, { treePath: h }), (0, u.Y)(x, { treePath: h })],
														  })
														: void 0,
													p && (0, o.Y)(g.I, { ...k.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  }),
							  })
							: null;
					});
				e.d(r, ['$', 0, N]);
			},
			'./components/src/hooks/useA11y.tsx'(b, r, e) {
				'use strict';
				e.d(r, { iy: () => i });
				const o = 9,
					l = 27,
					s = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(t, a, _, d) {
					const u = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${u}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = u),
							(n.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${a || 0}`),
						t.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && t.click();
						}),
						_ &&
							t.addEventListener('keydown', function (n) {
								const y = t.querySelectorAll(c),
									m = y[0],
									g = y[y.length - 1];
								if (n.keyCode == l) {
									t.focus(), d && d(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === o) &&
									(n.shiftKey
										? document.activeElement === m && (g.focus(), n.preventDefault())
										: document.activeElement === g && (m.focus(), n.preventDefault()));
							}));
				}
				e.d(r, ['DH', 0, c, 'aZ', 0, s]);
			},
			'./components/src/hooks/useLang.tsx'(b, r, e) {
				'use strict';
				const o = (l, s) => {
					const c = {};
					return (
						Object.keys(l).forEach((i) => {
							const t = l && l[i],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(s))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(s)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(s))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': i })),
								(c[i] = a);
						}),
						c
					);
				};
				e.d(r, ['u', 0, o]);
			},
			'./components/src/utilities/componentArgs.ts'(b, r, e) {
				'use strict';
				const o = {
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
				e.d(r, ['F', 0, o]);
			},
			'./components/src/utilities/defined.ts'(b, r, e) {
				'use strict';
				e.d(r, { s: () => o });
				function o(l) {
					const s = {};
					return (
						Object.keys(l).map((c) => {
							l[c] !== void 0 && (s[c] = l[c]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, r, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (i) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, o.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, c]);
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function r(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (b.exports = r);
			},
		},
	]);
})();
