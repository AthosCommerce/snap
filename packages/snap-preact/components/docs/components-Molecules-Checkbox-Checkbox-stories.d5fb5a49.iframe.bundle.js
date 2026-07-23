(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9143],
		{
			'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx'(b, c, t) {
				'use strict';
				t.r(c), t.d(c, { Default: () => u, Disabled: () => d, Native: () => o, __namedExportsOrder: () => h, default: () => k });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = t('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					i = t('./components/src/components/Atoms/Icon/paths.tsx'),
					r = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const a =
						"# Checkbox\n\nRenders a native or custom checkbox.\n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Checkbox } from '@athoscommerce/snap-preact/components';\n```\n\n### native\nThe `native` prop will render an `<input type='checkbox'>` element.\n\n```tsx\n<Checkbox native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n<Checkbox checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the checkbox to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```tsx\n<Checkbox startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the checkbox from being toggled or invoking the `onClick` callback.\n\n```tsx\n<Checkbox disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Checkbox disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom checkbox size.\n\n```tsx\n<Checkbox size={'16px'} />\n```\n\n### color\nThe `color` prop sets the checkbox border color and the icon color if the `iconColor` prop is not set.\n\n```tsx\n<Checkbox color={'#ffff00'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop. It will not affect checkbox border color.\n\n```tsx\n<Checkbox iconColor={'#ffff00'} />\n```\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery). This only applies if using a custom checkbox `native={false}`.\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the checkbox is clicked.\n\n```tsx\n<Checkbox onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Checkbox component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `checkbox` | Checkbox element text/attributes | `checkedState` (boolean), `disabled` (boolean) |\n\n### Example\n\n```tsx\n<Checkbox\n	lang={{\n		checkbox: {\n			attributes: {\n				'aria-label': (data) => `checkbox is ${data.checkedState ? 'checked' : 'unchecked'}`,\n			},\n		},\n	}}\n/>\n```\n",
					k = {
						title: 'Molecules/Checkbox',
						component: n.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: a }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							checked: {
								description: 'Checkbox is checked (externally managed state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disabled: {
								description: 'Checkbox is disabled',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							size: {
								defaultValue: '12px',
								description: 'Checkbox size',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '12px' } },
								control: { type: 'text' },
							},
							icon: {
								defaultValue: 'check-thin',
								description: 'Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'check-thin' } },
								options: [...Object.keys(i.c)],
								control: { type: 'select' },
							},
							color: {
								description: 'Checkbox color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							iconColor: {
								description: 'Checkbox icon color. Overwrites color.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							startChecked: {
								description: 'Checkbox is checked initially (internally managed state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							native: {
								description: 'Render as unstyled native checkbox',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Checkbox click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...e.F,
						},
					},
					u = (m) => (0, s.Y)(n.S, { ...m }),
					d = (m) => (0, s.Y)(n.S, { ...m });
				d.args = { checked: !0, disabled: !0 };
				const o = (m) => (0, s.Y)(n.S, { ...m });
				(o.args = { native: !0 }),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...u.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...d.parameters?.docs?.source },
						},
					}),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...o.parameters?.docs?.source },
						},
					});
				const h = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(b, c, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = t('../../node_modules/classnames/index.js'),
					r = t.n(i),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					a = t('./components/src/utilities/defined.ts'),
					k = t('./components/src/utilities/mergeProps.ts'),
					u = t('./components/src/utilities/mergeStyles.ts'),
					d = t('./components/src/providers/cache.tsx'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = t('./components/src/providers/treePath.tsx'),
					m = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = t('./components/src/hooks/useA11y.tsx'),
					R = t('./components/src/hooks/useLang.tsx'),
					B = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = t('../../node_modules/deepmerge/dist/cjs.js'),
					N = t.n(K);
				const W = ({ size: y, color: v, theme: O, native: E }) => {
						const f = isNaN(Number(y)) ? y : `${y}px`;
						return E
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: f,
									width: f,
									border: `1px solid ${v || O?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${y} - 30%)`, height: `calc(${y} - 30%)` },
							  });
					},
					Y = (0, e.PA)((y) => {
						const v = (0, o.u)(),
							E = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, h.LU)() },
							f = (0, k.v6)('checkbox', v, E, y),
							{
								checked: T,
								color: V,
								disabled: _,
								icon: C,
								iconColor: $,
								onClick: M,
								size: P,
								startChecked: z,
								native: F,
								disableA11y: w,
								disableStyles: H,
								className: A,
								internalClassName: L,
								theme: Z,
								treePath: J,
								lang: G,
								style: ae,
								styleScript: ce,
								themeStyleScript: re,
								name: le,
								...Q
							} = f,
							{ overrideElement: X, shouldRenderDefault: q } = (0, B._)('checkbox', f);
						if (!q) return X;
						const I = isNaN(Number(P)) ? P : `${P}px`,
							ee = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, a.s)({ color: $ || V || Z?.variables?.colors?.primary, disableStyles: H, icon: C, size: I && `calc(${I} - 30%)` }),
									theme: f.theme,
									treePath: J,
								},
							};
						let p, D;
						const S = T === void 0;
						S ? ([p, D] = (0, l.J0)(z)) : (p = T);
						const j = (x) => {
								_ || (S && D && D((ne) => !ne), M && M(x));
							},
							U = (0, u.Z)(f, W),
							te = { checkbox: {} },
							oe = N()(te, G || {}),
							se = (0, R.u)(oe, { checkedState: p, disabled: _ });
						return (0, s.Y)(d._, {
							children: F
								? (0, s.Y)('input', {
										...U,
										className: r()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': _, 'ss__checkbox--active': p }, A, L),
										type: 'checkbox',
										'aria-checked': p,
										onClick: (x) => j(x),
										disabled: _,
										checked: p,
								  })
								: (0, s.Y)('span', {
										...U,
										className: r()('ss__checkbox', { 'ss__checkbox--disabled': _, 'ss__checkbox--active': p }, A, L),
										onClick: (x) => j(x),
										ref: (x) => (w ? null : (0, g.iy)(x)),
										'aria-disabled': _,
										role: 'checkbox',
										'aria-checked': p,
										...Q,
										...se.checkbox.all,
										children: p
											? (0, s.Y)(m.I, { ...ee.icon, ...(typeof C == 'string' ? { icon: C } : C) })
											: (0, s.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				t.d(c, ['S', 0, Y]);
			},
			'./components/src/hooks/useA11y.tsx'(b, c, t) {
				'use strict';
				t.d(c, { iy: () => r });
				const s = 9,
					l = 27,
					n = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(e, a, k, u) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = d),
							(o.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					e &&
						!e.attributes?.[n] &&
						(e.setAttribute(n, !0),
						e.setAttribute('tabIndex', `${a || 0}`),
						e.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && e.click();
						}),
						k &&
							e.addEventListener('keydown', function (o) {
								const h = e.querySelectorAll(i),
									m = h[0],
									g = h[h.length - 1];
								if (o.keyCode == l) {
									e.focus(), u && u(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === s) &&
									(o.shiftKey
										? document.activeElement === m && (g.focus(), o.preventDefault())
										: document.activeElement === g && (m.focus(), o.preventDefault()));
							}));
				}
				t.d(c, ['DH', 0, i, 'aZ', 0, n]);
			},
			'./components/src/hooks/useLang.tsx'(b, c, t) {
				'use strict';
				const s = (l, n) => {
					const i = {};
					return (
						Object.keys(l).forEach((r) => {
							const e = l && l[r],
								a = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (a.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (a.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((a.attributes = { 'ss-lang': r }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = e.attributes['aria-label'](n))
											: (a.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](n))
											: (a.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (a.attributes.title = e.attributes.title(n))
											: (a.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (a.attributes.alt = e.attributes.alt(n)) : (a.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = e.attributes.placeholder(n))
											: (a.attributes.placeholder = e.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': r })),
								(i[r] = a);
						}),
						i
					);
				};
				t.d(c, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(b, c, t) {
				'use strict';
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
				t.d(c, ['F', 0, s]);
			},
			'./components/src/utilities/defined.ts'(b, c, t) {
				'use strict';
				t.d(c, { s: () => s });
				function s(l) {
					const n = {};
					return (
						Object.keys(l).map((i) => {
							l[i] !== void 0 && (n[i] = l[i]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(b, c, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					i = (r) => {
						const e = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								e.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(e.current);
							}, [r.className, r.children, e]),
							(0, s.Y)('code', { ...r, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(c, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function c(t) {
					const s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (b.exports = c);
			},
		},
	]);
})();
