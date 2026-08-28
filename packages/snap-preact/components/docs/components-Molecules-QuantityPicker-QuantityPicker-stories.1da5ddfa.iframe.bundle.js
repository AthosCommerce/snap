(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9415],
		{
			'./components/src/components/Molecules/QuantityPicker/QuantityPicker.stories.tsx'(P, i, t) {
				'use strict';
				t.r(i),
					t.d(i, {
						Default: () => e,
						Disabled: () => m,
						HiddenButtons: () => a,
						Label: () => _,
						MinMax: () => s,
						__namedExportsOrder: () => x,
						default: () => p,
					});
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = t('./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx'),
					c = t('./components/src/utilities/storybook.tsx'),
					u = t('./components/src/utilities/componentArgs.ts');
				const o =
						"# QuantityPicker\n\nRenders a numeric quantity input with increment and decrement buttons. The input only accepts whole numbers - typed values are clamped to the `min`/`max` range and decimals are truncated. Values can never be negative.\n\n## Sub-components\n- Button\n\n## Usage\n```tsx\nimport { QuantityPicker } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe `value` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n<QuantityPicker value={quantity} onChange={(e, value) => setQuantity(value)} />\n```\n\n### startValue\nThe `startValue` prop sets the initial value on the first render. Must use internal state by not using the `value` prop.\n\n```tsx\n<QuantityPicker startValue={3} />\n```\n\n### min\nThe `min` prop sets the minimum value (default `1`). The value cannot be decremented or typed below it, and it can never be negative.\n\n```tsx\n<QuantityPicker min={2} />\n```\n\n### max\nThe `max` prop sets the maximum value. The value cannot be incremented or typed above it. No maximum is applied when omitted.\n\n```tsx\n<QuantityPicker max={10} />\n```\n\n### step\nThe `step` prop sets the amount the increment and decrement buttons change the value by (default `1`).\n\n```tsx\n<QuantityPicker step={5} />\n```\n\n### disabled\nThe `disabled` prop disables the input and both buttons and prevents the `onChange` callback from being invoked.\n\n```tsx\n<QuantityPicker disabled={true} />\n```\n\n### label\nThe `label` prop displays a label inline with the buttons and input. No label is rendered when omitted.\n\n```tsx\n<QuantityPicker label={'Quantity'} />\n```\n\n### hideButtons\nThe `hideButtons` prop hides the increment and decrement buttons. The input remains usable and the `onChange` callback is still invoked when typing a new value.\n\n```tsx\n<QuantityPicker hideButtons={true} />\n```\n\n### Events\n\n#### onChange\nThe `onChange` prop allows for a custom callback function for when the value changes - via the buttons or by typing into the input. It is invoked with the event and the new (clamped) value.\n\n```tsx\n<QuantityPicker onChange={(e, value) => {console.log(value)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the QuantityPicker component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `quantityInput` | Input element attributes | `quantity` (number), `min` (number), `max` (number \\| undefined), `disabled` (boolean \\| undefined) |\n| `decrementButton` | Decrement button attributes | `quantity` (number), `min` (number), `max` (number \\| undefined), `disabled` (boolean \\| undefined) |\n| `incrementButton` | Increment button attributes | `quantity` (number), `min` (number), `max` (number \\| undefined), `disabled` (boolean \\| undefined) |\n\n### Example\n\n```tsx\n<QuantityPicker\n	lang={{\n		quantityInput: {\n			attributes: {\n				'aria-label': (data) => `quantity of ${data.quantity}`,\n			},\n		},\n	}}\n/>\n```\n",
					p = {
						title: 'Molecules/QuantityPicker',
						component: r.w,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(l.oz, { options: { overrides: { code: c.Z } }, children: o }), (0, n.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							value: {
								description: 'Quantity value (externally managed state)',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							startValue: {
								description: 'Initial quantity value (internally managed state)',
								table: { type: { summary: 'number' }, defaultValue: { summary: 1 } },
								control: { type: 'number' },
							},
							min: {
								defaultValue: 1,
								description: 'Minimum quantity value - can never be negative',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 1 } },
								control: { type: 'number' },
							},
							max: {
								description: 'Maximum quantity value',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							step: {
								defaultValue: 1,
								description: 'Amount the increment and decrement buttons change the value by',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 1 } },
								control: { type: 'number' },
							},
							disabled: {
								description: 'QuantityPicker is disabled',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideButtons: {
								description: 'Hides the increment and decrement buttons - the input remains usable',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							label: {
								description: 'Label displayed inline with the buttons and input',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							onChange: {
								description: 'Quantity change event handler - invoked with the event and the new value',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onChange',
							},
							...u.F,
						},
					},
					e = (d) => (0, n.Y)(r.w, { ...d }),
					s = (d) => (0, n.Y)(r.w, { ...d });
				s.args = { min: 2, max: 10 };
				const m = (d) => (0, n.Y)(r.w, { ...d });
				m.args = { startValue: 3, disabled: !0 };
				const a = (d) => (0, n.Y)(r.w, { ...d });
				a.args = { startValue: 3, hideButtons: !0 };
				const _ = (d) => (0, n.Y)(r.w, { ...d });
				(_.args = { label: 'Quantity' }),
					(e.parameters = {
						...e.parameters,
						docs: {
							...e.parameters?.docs,
							source: { originalSource: '(args: QuantityPickerProps) => <QuantityPicker {...args} />', ...e.parameters?.docs?.source },
						},
					}),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: { originalSource: '(args: QuantityPickerProps) => <QuantityPicker {...args} />', ...s.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: QuantityPickerProps) => <QuantityPicker {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: { originalSource: '(args: QuantityPickerProps) => <QuantityPicker {...args} />', ...a.parameters?.docs?.source },
						},
					}),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: { originalSource: '(args: QuantityPickerProps) => <QuantityPicker {...args} />', ..._.parameters?.docs?.source },
						},
					});
				const x = ['Default', 'MinMax', 'Disabled', 'HiddenButtons', 'Label'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(P, i, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/classnames/index.js'),
					c = t.n(r),
					u = t('../../node_modules/mobx-react-lite/es/index.js'),
					o = t('./components/src/providers/cache.tsx'),
					p = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					e = t('./components/src/providers/treePath.tsx'),
					s = t('./components/src/hooks/useA11y.tsx'),
					m = t('./components/src/utilities/cloneWithProps.tsx'),
					a = t('./components/src/utilities/defined.ts'),
					_ = t('./components/src/utilities/mergeProps.ts'),
					x = t('./components/src/utilities/mergeStyles.ts'),
					d = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					F = t('./components/src/hooks/useLang.tsx'),
					w = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					R = t('../../node_modules/deepmerge/dist/cjs.js'),
					H = t.n(R);
				const $ = ({ native: O, color: T, backgroundColor: K, borderColor: D, theme: f }) =>
						O
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: T || f?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: K || '#fff',
									border: `1px solid ${D || T || f?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					Z = (0, u.PA)((O) => {
						const T = (0, p.u)(),
							D = { disableA11y: !1, treePath: (0, e.LU)() },
							f = (0, _.v6)('button', T, D, O),
							{
								content: C,
								children: L,
								disabled: h,
								native: B,
								onClick: E,
								disableA11y: Q,
								disableStyles: j,
								className: W,
								internalClassName: z,
								icon: v,
								lang: S,
								treePath: A,
								style: nt,
								styleScript: st,
								themeStyleScript: it,
								...J
							} = f,
							{ overrideElement: at, shouldRenderDefault: ot } = (0, w._)('button', f);
						if (!ot) return at;
						const N = { icon: { internalClassName: 'ss__button__icon', ...(0, a.s)({ disableStyles: j }), theme: f?.theme, treePath: A } },
							I = {
								...(0, x.Z)(f, $),
								className: c()('ss__button', { 'ss__button--native': B, 'ss__button--disabled': h }, W, z),
								disabled: h,
								onClick: (k) => !h && E && E(k),
								...J,
							},
							G = { ref: (k) => (0, s.iy)(k) },
							X = {},
							Y = H()(X, S || {}),
							b = (0, F.u)(Y, {}, { activeBreakpoint: T?.activeBreakpoint }),
							U = !!J.dangerouslySetInnerHTML;
						return C || L || v || S?.button?.value || U
							? (0, n.Y)(o._, {
									children: B
										? (0, n.FD)('button', {
												...I,
												children: [
													(0, n.FD)('span', {
														className: 'ss__button__content',
														...b.button?.all,
														children: [(0, m.Y)(C, { treePath: A }), (0, m.Y)(L, { treePath: A })],
													}),
													v && (0, n.Y)(d.I, { ...N.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  })
										: (0, n.FD)('div', {
												...(Q ? {} : G),
												role: 'button',
												'aria-disabled': h,
												...I,
												...b.button?.attributes,
												children: [
													C || L || b.button?.value
														? (0, n.FD)('span', {
																className: 'ss__button__content',
																...b.button?.value,
																children: [(0, m.Y)(C, { treePath: A }), (0, m.Y)(L, { treePath: A })],
														  })
														: void 0,
													v && (0, n.Y)(d.I, { ...N.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  }),
							  })
							: null;
					});
				t.d(i, ['$', 0, Z]);
			},
			'./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx'(P, i, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					u = t.n(c),
					o = t('../../node_modules/mobx-react-lite/es/index.js'),
					p = t('../../node_modules/deepmerge/dist/cjs.js'),
					e = t.n(p),
					s = t('./components/src/utilities/defined.ts'),
					m = t('./components/src/utilities/mergeProps.ts'),
					a = t('./components/src/utilities/mergeStyles.ts'),
					_ = t('./components/src/providers/cache.tsx'),
					x = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/treePath.tsx'),
					F = t('./components/src/hooks/useLang.tsx'),
					w = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					R = t('./components/src/components/Atoms/Button/Button.tsx');
				const H = () =>
						(0, r.AH)({
							display: 'inline-flex',
							alignItems: 'center',
							gap: '5px',
							'&.ss__quantity-picker--disabled': { opacity: 0.7 },
							'& .ss__quantity-picker__label-wrapper': { display: 'inline-flex', alignItems: 'center' },
							'& .ss__quantity-picker__controls-wrapper': { display: 'inline-flex', alignItems: 'center', gap: '5px' },
							'& .ss__quantity-picker__input': { width: '60px', textAlign: 'center', padding: '5px', boxSizing: 'border-box' },
						}),
					$ = (0, o.PA)((Z) => {
						const O = (0, x.u)(),
							K = { min: 1, step: 1, treePath: (0, d.LU)() },
							D = (0, m.v6)('quantityPicker', O, K, Z),
							{
								value: f,
								startValue: C,
								min: L,
								max: h,
								step: B,
								disabled: E,
								hideButtons: Q,
								label: j,
								onChange: W,
								disableStyles: z,
								className: v,
								internalClassName: S,
								theme: A,
								treePath: nt,
								lang: st,
								style: it,
								styleScript: J,
								themeStyleScript: at,
								name: ot,
								...N
							} = D,
							M = Math.max(0, Math.trunc(L)),
							I = (g) => {
								let y = Math.trunc(g);
								return isNaN(y) && (y = M), (y = Math.max(M, y)), typeof h == 'number' && (y = Math.min(Math.trunc(h), y)), y;
							},
							[G, X] = (0, l.J0)(I(C ?? M)),
							Y = f === void 0,
							b = Y ? G : I(f),
							[U, k] = (0, l.J0)(void 0),
							{ overrideElement: rt, shouldRenderDefault: lt } = (0, w._)('quantityPicker', D);
						if (!lt) return rt;
						const q = (g, y) => {
								if (E) return;
								const et = I(y);
								Y && X(et), et !== b && W && W(g, et);
							},
							ut = (0, a.Z)(D, H),
							ct = {
								quantityInput: { attributes: { 'aria-label': 'quantity' } },
								decrementButton: { attributes: { 'aria-label': 'decrease quantity' } },
								incrementButton: { attributes: { 'aria-label': 'increase quantity' } },
							},
							dt = e()(ct, st || {}),
							tt = (0, F.u)(dt, { quantity: b, min: M, max: h, disabled: E }, { activeBreakpoint: O?.activeBreakpoint }),
							V = { button: { internalClassName: 'ss__quantity-picker__button', ...(0, s.s)({ disableStyles: z }), theme: D.theme, treePath: nt } };
						return (0, n.Y)(_._, {
							children: (0, n.FD)('div', {
								...ut,
								className: u()('ss__quantity-picker', { 'ss__quantity-picker--disabled': E }, v, S),
								...N,
								children: [
									j &&
										(0, n.Y)('div', {
											className: 'ss__quantity-picker__label-wrapper',
											children: (0, n.Y)('span', { className: 'ss__quantity-picker__label', children: j }),
										}),
									(0, n.FD)('div', {
										className: 'ss__quantity-picker__controls-wrapper',
										children: [
											!Q &&
												(0, n.Y)(R.$, {
													...V.button,
													name: 'decrement',
													internalClassName: u()(V.button.internalClassName, 'ss__quantity-picker__button--decrement'),
													disabled: E || b <= M,
													onClick: (g) => q(g, b - B),
													icon: 'minus-thin',
													...tt.decrementButton?.attributes,
												}),
											(0, n.Y)('input', {
												className: 'ss__quantity-picker__input',
												type: 'number',
												inputMode: 'numeric',
												min: M,
												max: h,
												step: B,
												value: U ?? b,
												disabled: E,
												onInput: (g) => k(g.target.value),
												onBlur: (g) => {
													if (U !== void 0) {
														const y = parseFloat(U);
														q(g, isNaN(y) ? b : y), k(void 0);
													}
												},
												...tt.quantityInput?.all,
											}),
											!Q &&
												(0, n.Y)(R.$, {
													...V.button,
													name: 'increment',
													internalClassName: u()(V.button.internalClassName, 'ss__quantity-picker__button--increment'),
													disabled: E || (typeof h == 'number' && b >= h),
													onClick: (g) => q(g, b + B),
													icon: 'plus-thin',
													...tt.incrementButton?.attributes,
												}),
										],
									}),
								],
							}),
						});
					});
				t.d(i, ['w', 0, $]);
			},
			'./components/src/hooks/useA11y.tsx'(P, i, t) {
				'use strict';
				t.d(i, { iy: () => u });
				const n = 9,
					l = 27,
					r = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function u(o, p, e, s) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = m),
							(a.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					o &&
						!o.attributes?.[r] &&
						(o.setAttribute(r, !0),
						o.setAttribute('tabIndex', `${p || 0}`),
						o.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && a.target === o && o.click();
						}),
						e &&
							o.addEventListener('keydown', function (a) {
								const _ = o.querySelectorAll(c),
									x = _[0],
									d = _[_.length - 1];
								if (a.keyCode == l) {
									o.focus(), s && s(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === n) &&
									(a.shiftKey
										? document.activeElement === x && (d.focus(), a.preventDefault())
										: document.activeElement === d && (x.focus(), a.preventDefault()));
							}));
				}
				t.d(i, ['DH', 0, c, 'aZ', 0, r]);
			},
			'./components/src/hooks/useLang.tsx'(P, i, t) {
				'use strict';
				const n = (l, r, c) => {
					const u = c ? { ...r, ...c } : r,
						o = {};
					return (
						Object.keys(l).forEach((p) => {
							const e = l && l[p],
								s = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (s.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: e.value(u) } })
										: (s.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((s.attributes = { 'ss-lang': p }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = e.attributes['aria-label'](u))
											: (s.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](u))
											: (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (s.attributes.title = e.attributes.title(u))
											: (s.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (s.attributes.alt = e.attributes.alt(u)) : (s.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = e.attributes.placeholder(u))
											: (s.attributes.placeholder = e.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': p })),
								(o[p] = s);
						}),
						o
					);
				};
				t.d(i, ['u', 0, n]);
			},
			'./components/src/utilities/componentArgs.ts'(P, i, t) {
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
				t.d(i, ['F', 0, n]);
			},
			'./components/src/utilities/defined.ts'(P, i, t) {
				'use strict';
				t.d(i, { s: () => n });
				function n(l) {
					const r = {};
					return (
						Object.keys(l).map((c) => {
							l[c] !== void 0 && (r[c] = l[c]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(P, i, t) {
				'use strict';
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					c = (u) => {
						const o = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								o.current && u.className?.includes('lang-') && !u.className?.includes(r) && window?.Prism?.highlightElement(o.current);
							}, [u.className, u.children, o]),
							(0, n.Y)('code', { ...u, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(i, ['Z', 0, c]);
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function i(t) {
					const n = new Error("Cannot find module '" + t + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (P.exports = i);
			},
		},
	]);
})();
