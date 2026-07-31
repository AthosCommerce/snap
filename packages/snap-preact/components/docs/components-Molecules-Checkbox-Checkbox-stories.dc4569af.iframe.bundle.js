(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9143],
		{
			'./components/src/components/Molecules/Checkbox/Checkbox.stories.tsx'(h, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => o, Disabled: () => m, Native: () => s, __namedExportsOrder: () => y, default: () => t });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					d = e('./components/src/components/Atoms/Icon/paths.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts');
				const u =
						"# Checkbox\n\nRenders a native or custom checkbox.\n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Checkbox } from '@athoscommerce/snap-preact/components';\n```\n\n### native\nThe `native` prop will render an `<input type='checkbox'>` element.\n\n```tsx\n<Checkbox native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n<Checkbox checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the checkbox to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```tsx\n<Checkbox startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the checkbox from being toggled or invoking the `onClick` callback.\n\n```tsx\n<Checkbox disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Checkbox disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom checkbox size.\n\n```tsx\n<Checkbox size={'16px'} />\n```\n\n### color\nThe `color` prop sets the checkbox border color and the icon color if the `iconColor` prop is not set.\n\n```tsx\n<Checkbox color={'#ffff00'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop. It will not affect checkbox border color.\n\n```tsx\n<Checkbox iconColor={'#ffff00'} />\n```\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery). This only applies if using a custom checkbox `native={false}`.\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the checkbox is clicked.\n\n```tsx\n<Checkbox onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Checkbox component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `checkbox` | Checkbox element text/attributes | `checkedState` (boolean), `disabled` (boolean) |\n\n### Example\n\n```tsx\n<Checkbox\n	lang={{\n		checkbox: {\n			attributes: {\n				'aria-label': (data) => `checkbox is ${data.checkedState ? 'checked' : 'unchecked'}`,\n			},\n		},\n	}}\n/>\n```\n",
					t = {
						title: 'Molecules/Checkbox',
						component: r.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(i.oz, { options: { overrides: { code: l.Z } }, children: u }), (0, n.Y)(i.uY, { story: i.h1 })],
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
								options: [...Object.keys(d.c)],
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
							...c.F,
						},
					},
					o = (p) => (0, n.Y)(r.S, { ...p }),
					m = (p) => (0, n.Y)(r.S, { ...p });
				m.args = { checked: !0, disabled: !0 };
				const s = (p) => (0, n.Y)(r.S, { ...p });
				(s.args = { native: !0 }),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...o.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: { originalSource: '(args: CheckboxProps) => <Checkbox {...args} />', ...s.parameters?.docs?.source },
						},
					});
				const y = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(h, a, e) {
				'use strict';
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					l = e.n(d),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/utilities/defined.ts'),
					t = e('./components/src/utilities/mergeProps.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = e('./components/src/hooks/useA11y.tsx'),
					U = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(K);
				const W = ({ size: f, color: C, theme: O, native: E }) => {
						const x = isNaN(Number(f)) ? f : `${f}px`;
						return E
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: x,
									width: x,
									border: `1px solid ${C || O?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${f} - 30%)`, height: `calc(${f} - 30%)` },
							  });
					},
					Y = (0, c.PA)((f) => {
						const C = (0, s.u)(),
							E = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, y.LU)() },
							x = (0, t.v6)('checkbox', C, E, f),
							{
								checked: T,
								color: V,
								disabled: k,
								icon: v,
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
							} = x,
							{ overrideElement: X, shouldRenderDefault: q } = (0, R._)('checkbox', x);
						if (!q) return X;
						const I = isNaN(Number(P)) ? P : `${P}px`,
							ee = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, u.s)({ color: $ || V || Z?.variables?.colors?.primary, disableStyles: H, icon: v, size: I && `calc(${I} - 30%)` }),
									theme: x.theme,
									treePath: J,
								},
							};
						let b, D;
						const S = T === void 0;
						S ? ([b, D] = (0, i.J0)(z)) : (b = T);
						const j = (_) => {
								k || (S && D && D((ne) => !ne), M && M(_));
							},
							B = (0, o.Z)(x, W),
							te = { checkbox: {} },
							oe = N()(te, G || {}),
							se = (0, U.u)(oe, { checkedState: b, disabled: k }, { activeBreakpoint: C?.activeBreakpoint });
						return (0, n.Y)(m._, {
							children: F
								? (0, n.Y)('input', {
										...B,
										className: l()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': b }, A, L),
										type: 'checkbox',
										'aria-checked': b,
										onClick: (_) => j(_),
										disabled: k,
										checked: b,
								  })
								: (0, n.Y)('span', {
										...B,
										className: l()('ss__checkbox', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': b }, A, L),
										onClick: (_) => j(_),
										ref: (_) => (w ? null : (0, g.iy)(_)),
										'aria-disabled': k,
										role: 'checkbox',
										'aria-checked': b,
										...Q,
										...se.checkbox.all,
										children: b
											? (0, n.Y)(p.I, { ...ee.icon, ...(typeof v == 'string' ? { icon: v } : v) })
											: (0, n.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(a, ['S', 0, Y]);
			},
			'./components/src/hooks/useA11y.tsx'(h, a, e) {
				'use strict';
				e.d(a, { iy: () => l });
				const n = 9,
					i = 27,
					r = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(c, u, t, o) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = m),
							(s.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					c &&
						!c.attributes?.[r] &&
						(c.setAttribute(r, !0),
						c.setAttribute('tabIndex', `${u || 0}`),
						c.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && c.click();
						}),
						t &&
							c.addEventListener('keydown', function (s) {
								const y = c.querySelectorAll(d),
									p = y[0],
									g = y[y.length - 1];
								if (s.keyCode == i) {
									c.focus(), o && o(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === n) &&
									(s.shiftKey
										? document.activeElement === p && (g.focus(), s.preventDefault())
										: document.activeElement === g && (p.focus(), s.preventDefault()));
							}));
				}
				e.d(a, ['DH', 0, d, 'aZ', 0, r]);
			},
			'./components/src/hooks/useLang.tsx'(h, a, e) {
				'use strict';
				const n = (i, r, d) => {
					const l = d ? { ...r, ...d } : r,
						c = {};
					return (
						Object.keys(i).forEach((u) => {
							const t = i && i[u],
								o = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (o.value = { 'ss-lang': u, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (o.value = { 'ss-lang': u, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((o.attributes = { 'ss-lang': u }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (o.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (o.attributes.title = t.attributes.title(l))
											: (o.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (o.attributes.alt = t.attributes.alt(l)) : (o.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = t.attributes.placeholder(l))
											: (o.attributes.placeholder = t.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': u })),
								(c[u] = o);
						}),
						c
					);
				};
				e.d(a, ['u', 0, n]);
			},
			'./components/src/utilities/componentArgs.ts'(h, a, e) {
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
				e.d(a, ['F', 0, n]);
			},
			'./components/src/utilities/defined.ts'(h, a, e) {
				'use strict';
				e.d(a, { s: () => n });
				function n(i) {
					const r = {};
					return (
						Object.keys(i).map((d) => {
							i[d] !== void 0 && (r[d] = i[d]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(h, a, e) {
				'use strict';
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					d = (l) => {
						const c = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								c.current && l.className?.includes('lang-') && !l.className?.includes(r) && window?.Prism?.highlightElement(c.current);
							}, [l.className, l.children, c]),
							(0, n.Y)('code', { ...l, ref: c, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, d]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function a(e) {
					const n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (h.exports = a);
			},
		},
	]);
})();
