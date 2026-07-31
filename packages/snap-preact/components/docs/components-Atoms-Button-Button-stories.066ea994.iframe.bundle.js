(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1840],
		{
			'./components/src/components/Atoms/Button/Button.stories.tsx'(y, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => o, Disabled: () => d, Native: () => s, __namedExportsOrder: () => f, default: () => e });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = t('./components/src/components/Atoms/Button/Button.tsx'),
					u = t('./components/src/utilities/storybook.tsx'),
					c = t('./components/src/utilities/componentArgs.ts');
				const r = `# Button

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
				var m = t('./components/src/components/Atoms/Icon/paths.tsx');
				const e = {
						title: 'Atoms/Button',
						component: i.$,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(l.oz, { options: { overrides: { code: u.Z } }, children: r }), (0, n.Y)(l.uY, { story: l.h1 })],
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
								options: [...Object.keys(m.c)],
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
							...c.F,
						},
					},
					o = (p) => (0, n.Y)(i.$, { ...p });
				o.args = { content: 'Button' };
				const d = (p) => (0, n.Y)(i.$, { ...p });
				d.args = { content: 'Button', disabled: !0 };
				const s = (p) => (0, n.Y)(i.$, { ...p });
				(s.args = { content: 'Button', native: !0 }),
					(o.parameters = {
						...o.parameters,
						docs: { ...o.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...o.parameters?.docs?.source } },
					}),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...d.parameters?.docs?.source } },
					}),
					(s.parameters = {
						...s.parameters,
						docs: { ...s.parameters?.docs, source: { originalSource: '(args: ButtonProps) => <Button {...args} />', ...s.parameters?.docs?.source } },
					});
				const f = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(y, a, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = t('../../node_modules/classnames/index.js'),
					u = t.n(i),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					r = t('./components/src/providers/cache.tsx'),
					m = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					e = t('./components/src/providers/treePath.tsx'),
					o = t('./components/src/hooks/useA11y.tsx'),
					d = t('./components/src/utilities/cloneWithProps.tsx'),
					s = t('./components/src/utilities/defined.ts'),
					f = t('./components/src/utilities/mergeProps.ts'),
					p = t('./components/src/utilities/mergeStyles.ts'),
					g = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					S = t('./components/src/hooks/useLang.tsx'),
					U = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					R = t('../../node_modules/deepmerge/dist/cjs.js'),
					K = t.n(R);
				const W = ({ native: P, color: h, backgroundColor: T, borderColor: C, theme: _ }) =>
						P
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: h || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: T || '#fff',
									border: `1px solid ${C || h || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					N = (0, c.PA)((P) => {
						const h = (0, m.u)(),
							C = { disableA11y: !1, treePath: (0, e.LU)() },
							_ = (0, f.v6)('button', h, C, P),
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
								icon: b,
								lang: M,
								treePath: v,
								style: G,
								styleScript: Q,
								themeStyleScript: q,
								...I
							} = _,
							{ overrideElement: V, shouldRenderDefault: J } = (0, U._)('button', _);
						if (!J) return V;
						const k = { icon: { internalClassName: 'ss__button__icon', ...(0, s.s)({ disableStyles: F }), theme: _?.theme, treePath: v } },
							j = {
								...(0, p.Z)(_, W),
								className: u()('ss__button', { 'ss__button--native': A, 'ss__button--disabled': B }, $, H),
								disabled: B,
								onClick: (O) => !B && L && L(O),
								...I,
							},
							Z = { ref: (O) => (0, o.iy)(O) },
							z = {},
							X = K()(z, M || {}),
							D = (0, S.u)(X, {}, { activeBreakpoint: h?.activeBreakpoint }),
							w = !!I.dangerouslySetInnerHTML;
						return E || x || b || M?.button?.value || w
							? (0, n.Y)(r._, {
									children: A
										? (0, n.FD)('button', {
												...j,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...D.button?.all,
														children: [(0, d.Y)(E, { treePath: v }), (0, d.Y)(x, { treePath: v })],
													}),
													b && (0, n.Y)(g.I, { ...k.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
												],
										  })
										: (0, n.FD)('div', {
												...(Y ? {} : Z),
												role: 'button',
												'aria-disabled': B,
												...j,
												...D.button?.attributes,
												children: [
													E || x || D.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...D.button?.value,
																children: [(0, d.Y)(E, { treePath: v }), (0, d.Y)(x, { treePath: v })],
														  })
														: void 0,
													b && (0, n.Y)(g.I, { ...k.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
												],
										  }),
							  })
							: null;
					});
				t.d(a, ['$', 0, N]);
			},
			'./components/src/hooks/useA11y.tsx'(y, a, t) {
				'use strict';
				t.d(a, { iy: () => c });
				const n = 9,
					l = 27,
					i = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(r, m, e, o) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = d),
							(s.innerHTML = `[${i}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					r &&
						!r.attributes?.[i] &&
						(r.setAttribute(i, !0),
						r.setAttribute('tabIndex', `${m || 0}`),
						r.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && r.click();
						}),
						e &&
							r.addEventListener('keydown', function (s) {
								const f = r.querySelectorAll(u),
									p = f[0],
									g = f[f.length - 1];
								if (s.keyCode == l) {
									r.focus(), o && o(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === n) &&
									(s.shiftKey
										? document.activeElement === p && (g.focus(), s.preventDefault())
										: document.activeElement === g && (p.focus(), s.preventDefault()));
							}));
				}
				t.d(a, ['DH', 0, u, 'aZ', 0, i]);
			},
			'./components/src/hooks/useLang.tsx'(y, a, t) {
				'use strict';
				const n = (l, i, u) => {
					const c = u ? { ...i, ...u } : i,
						r = {};
					return (
						Object.keys(l).forEach((m) => {
							const e = l && l[m],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': m, dangerouslySetInnerHTML: { __html: e.value(c) } })
										: (o.value = { 'ss-lang': m, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': m }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](c))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](c))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(c))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(c)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(c))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': m })),
								(r[m] = o);
						}),
						r
					);
				};
				t.d(a, ['u', 0, n]);
			},
			'./components/src/utilities/componentArgs.ts'(y, a, t) {
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
			'./components/src/utilities/defined.ts'(y, a, t) {
				'use strict';
				t.d(a, { s: () => n });
				function n(l) {
					const i = {};
					return (
						Object.keys(l).map((u) => {
							l[u] !== void 0 && (i[u] = l[u]);
						}),
						i
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(y, a, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					u = (c) => {
						const r = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								r.current && c.className?.includes('lang-') && !c.className?.includes(i) && window?.Prism?.highlightElement(r.current);
							}, [c.className, c.children, r]),
							(0, n.Y)('code', { ...c, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(a, ['Z', 0, u]);
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function a(t) {
					const n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (y.exports = a);
			},
		},
	]);
})();
