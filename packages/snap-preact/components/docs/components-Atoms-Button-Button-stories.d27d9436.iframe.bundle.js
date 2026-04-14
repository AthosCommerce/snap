(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1840],
		{
			'./components/src/components/Atoms/Button/Button.stories.tsx'(b, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => u, Disabled: () => d, Native: () => o, __namedExportsOrder: () => y, default: () => g });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Atoms/Button/Button.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const t = `# Button

Renders a native or custom button.

## Usage
\`\`\`jsx
import { Button } from '@athoscommerce/snap-preact/components';
\`\`\`

### content
The \`content\` prop specifies the button text. This can be a string or a JSX element.

\`\`\`jsx
<Button content={"click me!"} />
\`\`\`
 
Or alternatively as children:

\`\`\`jsx
<Button>click me!</Button>
\`\`\`

### disabled
The \`disabled\` prop will disable the button from being clickable.

\`\`\`jsx
<Button content={"click me!"} disabled />
\`\`\`

### native
The \`native\` prop will use a native html \`<button>\` element.

\`\`\`jsx
<Button content={"click me!"} native />
\`\`\`

### backgroundColor
The \`backgroundColor\` prop specifies the button background color.

\`\`\`jsx
<Button content={"click me!"} backgroundColor={'#eeeeee'} />
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon you wish to add to the button content. Note this currently only supports icons from our list of available icons. (see Icon Component for more details)

\`\`\`jsx
<Button content={"click me!"} icon={'cog'} />
\`\`\`

### borderColor
The \`borderColor\` prop specifies the button border color.

\`\`\`jsx
<Button content={"click me!"} borderColor={'#cccccc'} />
\`\`\`
### color
The \`color\` prop specifies the button text color.

\`\`\`jsx
<Button content={"click me!"} color={'#222222'} />
\`\`\`

### disableA11y
The \`disableA11y\` prop specifies a boolean to disable the autoset ally properties.

\`\`\`jsx
<Button content={"click me!"} disableA11y />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when the button is clicked.

\`\`\`jsx
<Button content={"click me!"} onClick={(e)=>{console.log(e)}} />
\`\`\`
`;
				var a = e('./components/src/components/Atoms/Icon/paths.tsx');
				const g = {
						title: 'Atoms/Button',
						component: n.$,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							content: {
								description: 'Content to be displayed in button',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
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
					u = (m) => (0, s.Y)(n.$, { ...m });
				u.args = { content: 'Button' };
				const d = (m) => (0, s.Y)(n.$, { ...m });
				d.args = { content: 'Button', disabled: !0 };
				const o = (m) => (0, s.Y)(n.$, { ...m });
				(o.args = { content: 'Button', native: !0 }),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...u.parameters?.docs?.source } },
					}),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...d.parameters?.docs?.source } },
					}),
					(o.parameters = {
						...o.parameters,
						docs: { ...o.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...o.parameters?.docs?.source } },
					});
				const y = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(b, r, e) {
				'use strict';
				e.d(r, { $: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					c = e.n(n),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useA11y.tsx'),
					o = e('./components/src/utilities/cloneWithProps.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					K = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useComponent.tsx'),
					W = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(W),
					Y = e('../../node_modules/color/index.js'),
					F = e.n(Y);
				const $ = ({ native: T, color: E, backgroundColor: P, borderColor: M, theme: h }) => {
						const _ = new (F())(P || E || h?.variables?.colors?.primary || void 0).lightness(95);
						return T
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: E || h?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: P || '#fff',
									border: `1px solid ${M || E || h?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: _.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					V = (0, i.PA)((T) => {
						const E = (0, a.u)(),
							P = (0, g.uk)(),
							h = { disableA11y: !1, treePath: (0, u.LU)() },
							_ = (0, m.v6)('button', E, h, T),
							{
								content: D,
								children: B,
								disabled: O,
								native: L,
								onClick: j,
								disableA11y: H,
								disableStyles: J,
								className: Z,
								internalClassName: z,
								icon: p,
								lang: I,
								treePath: v,
								customComponent: k,
								style: q,
								styleScript: tt,
								themeStyleScript: et,
								...X
							} = _;
						if (k) {
							const f = (0, S.x)(P?.templates?.library.import.component.button || {}, k);
							if (f) return (0, s.Y)(f, { ..._ });
						}
						const U = { icon: { internalClassName: 'ss__button__icon', ...(0, y.s)({ disableStyles: J }), theme: _?.theme, treePath: v } },
							R = {
								...(0, x.Z)(_, $),
								className: c()('ss__button', { 'ss__button--native': L, 'ss__button--disabled': O }, Z, z),
								disabled: O,
								onClick: (f) => !O && j && j(f),
								...X,
							},
							G = { ref: (f) => (0, d.iy)(f) },
							Q = {},
							w = N()(Q, I || {}),
							C = (0, K.u)(w, {});
						return D || B || p || I?.button?.value
							? (0, s.Y)(t._, {
									children: L
										? (0, s.FD)('button', {
												...R,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...C.button?.all,
														children: [(0, o.Y)(D, { treePath: v }), (0, o.Y)(B, { treePath: v })],
													}),
													p && (0, s.Y)(A.I, { ...U.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  })
										: (0, s.FD)('div', {
												...(H ? {} : G),
												role: 'button',
												'aria-disabled': O,
												...R,
												...C.button?.attributes,
												children: [
													D || B || C.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...C.button?.value,
																children: [(0, o.Y)(D, { treePath: v }), (0, o.Y)(B, { treePath: v })],
														  })
														: void 0,
													p && (0, s.Y)(A.I, { ...U.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(b, r, e) {
				'use strict';
				e.d(r, { DH: () => c, aZ: () => n, iy: () => i });
				const s = 9,
					l = 27,
					n = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(t, a, g, u) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = d),
							(o.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					t &&
						!t.attributes?.[n] &&
						(t.setAttribute(n, !0),
						t.setAttribute('tabIndex', `${a || 0}`),
						t.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && t.click();
						}),
						g &&
							t.addEventListener('keydown', function (o) {
								const y = t.querySelectorAll(c),
									m = y[0],
									x = y[y.length - 1];
								if (o.keyCode == l) {
									t.focus(), u && u(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === s) &&
									(o.shiftKey
										? document.activeElement === m && (x.focus(), o.preventDefault())
										: document.activeElement === x && (m.focus(), o.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(b, r, e) {
				'use strict';
				e.d(r, { u: () => s });
				const s = (l, n) => {
					const c = {};
					return (
						Object.keys(l).forEach((i) => {
							const t = l && l[i],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (a.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(n))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(n)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(n))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': i })),
								(c[i] = a);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, r, e) {
				'use strict';
				e.d(r, { F: () => s });
				const s = {
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
			'./components/src/utilities/defined.ts'(b, r, e) {
				'use strict';
				e.d(r, { s: () => s });
				function s(l) {
					const n = {};
					return (
						Object.keys(l).map((c) => {
							l[c] !== void 0 && (n[c] = l[c]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, r, e) {
				'use strict';
				e.d(r, { Z: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					c = (i) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, s.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function r(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (b.exports = r);
			},
		},
	]);
})();
