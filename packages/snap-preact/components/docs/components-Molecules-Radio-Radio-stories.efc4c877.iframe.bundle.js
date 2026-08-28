(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1075],
		{
			'./components/src/components/Molecules/Radio/Radio.stories.tsx'(h, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => s, Disabled: () => m, Native: () => o, __namedExportsOrder: () => b, default: () => t });
				var a = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					d = e('./components/src/components/Atoms/Icon/paths.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts');
				const u =
						"# Radio\n\nRenders a native or custom radio.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### native\nThe `native` prop will render an `<input type='radio'>` element.\n\n```tsx\n    <Radio native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n    <Radio checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the radio to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```tsx\n    <Radio startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the radio from being toggled or invoking the `onClick` callback.\n\n```tsx\n    <Radio disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n    <Radio disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom radio size.\n\n```tsx\n    <Radio size={'16px'} />\n```\n\n### color\nThe `color` prop sets the radio border stroke and fill colors.\n\n```tsx\n    <Radio color={'#ffff00'} />\n```\n\n\n### checkedIcon\nThe `checkedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is checked. This only applies if using a custom radio `native={false}`.\n\n```tsx\n    <Radio checkedIcon={'bullet'} />\n```\n\n### unCheckedIcon\nThe `unCheckedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is not pchecked. This only applies if using a custom radio `native={false}`.\n\n```tsx\n    <Radio unCheckedIcon={'bullet-o'} />\n```\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the radio is clicked.\n\n```tsx\n    <Radio onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Radio component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `radio` | Radio element text/attributes | `disabled` (boolean), `checkedState` (boolean) |\n\n### Example\n\n```tsx\n<Radio\n	lang={{\n		radio: {\n			attributes: {\n				'aria-label': (data) => `radio option is ${data.checkedState ? 'selected' : 'not selected'}`,\n			},\n		},\n	}}\n/>\n```\n",
					t = {
						title: 'Molecules/Radio',
						component: r.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, a.FD)('div', {
										children: [(0, a.Y)(c.oz, { options: { overrides: { code: l.Z } }, children: u }), (0, a.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						argTypes: {
							checked: {
								description: 'Radio is checked (externally managed state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disabled: {
								description: 'Radio is disabled',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							size: {
								defaultValue: '20px',
								description: 'Radio size',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							checkedIcon: {
								description: 'Icon name when radio is checked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bullet' } },
								options: [...Object.keys(d.c)],
								control: { type: 'select' },
							},
							unCheckedIcon: {
								description: 'Icon name when radio is unchecked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bullet-o' } },
								options: [...Object.keys(d.c)],
								control: { type: 'select' },
							},
							color: {
								description: 'Radio color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							startChecked: {
								description: 'Radio is checked initially (internally managed state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							native: {
								description: 'Render as unstyled native radio',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Radio click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...n.F,
						},
					},
					s = (p) => (0, a.Y)(r.s, { ...p }),
					m = (p) => (0, a.Y)(r.s, { ...p });
				m.args = { checked: !0, disabled: !0 };
				const o = (p) => (0, a.Y)(r.s, { ...p });
				(o.args = { native: !0 }),
					(s.parameters = {
						...s.parameters,
						docs: { ...s.parameters?.docs, source: { originalSource: '(args: RadioProps) => <Radio {...args} />', ...s.parameters?.docs?.source } },
					}),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: RadioProps) => <Radio {...args} />', ...m.parameters?.docs?.source } },
					}),
					(o.parameters = {
						...o.parameters,
						docs: { ...o.parameters?.docs, source: { originalSource: '(args: RadioProps) => <Radio {...args} />', ...o.parameters?.docs?.source } },
					});
				const b = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(h, i, e) {
				'use strict';
				var a = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					l = e.n(d),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/utilities/defined.ts'),
					t = e('./components/src/utilities/mergeProps.ts'),
					s = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					E = e('./components/src/hooks/useA11y.tsx'),
					W = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					V = e.n(Y);
				const w = ({ size: x, native: g }) =>
						g
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: x,
									width: x,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					z = (0, n.PA)((x) => {
						const g = (0, o.u)(),
							F = (0, b.LU)(),
							H = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: g.variables?.colors.primary || '#000000',
								treePath: F,
							},
							v = (0, t.v6)('radio', g, H, x),
							{
								checked: P,
								color: D,
								disabled: _,
								checkedIcon: k,
								unCheckedIcon: C,
								onClick: O,
								startChecked: $,
								native: Z,
								disableA11y: I,
								disableStyles: T,
								className: M,
								internalClassName: A,
								size: L,
								treePath: j,
								lang: G,
								style: oe,
								styleScript: ae,
								themeStyleScript: ne,
								name: ie,
								...J
							} = v,
							{ overrideElement: Q, shouldRenderDefault: X } = (0, N._)('radio', v);
						if (!X) return Q;
						const B = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, u.s)({ size: L, color: D, disableStyles: T }),
								theme: v.theme,
								treePath: j,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, u.s)({ size: L, color: D, disableStyles: T }),
								theme: v.theme,
								treePath: j,
							},
						};
						let y, R;
						const S = P === void 0;
						S ? ([y, R] = (0, c.J0)($)) : (y = P);
						const U = (f) => {
								_ || (S && R && R((se) => !se), O && O(f));
							},
							K = (0, s.Z)(v, w),
							q = { radio: {} },
							ee = V()(q, G || {}),
							te = (0, W.u)(ee, { disabled: _, checkedState: y }, { activeBreakpoint: g?.activeBreakpoint });
						return (0, a.Y)(m._, {
							children: Z
								? (0, a.Y)('div', {
										className: l()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': _ }, M, A),
										...K,
										children: (0, a.Y)('input', {
											className: l()('ss__radio__input'),
											'aria-checked': y,
											type: 'radio',
											onClick: (f) => U(f),
											disabled: _,
											checked: y,
											tabIndex: I ? -1 : 0,
										}),
								  })
								: (0, a.Y)('span', {
										...K,
										className: l()('ss__radio', { 'ss__radio--disabled': _, 'ss__radio--active': y }, M, A),
										onClick: (f) => U(f),
										ref: (f) => (I ? null : (0, E.iy)(f)),
										...te.radio?.all,
										role: 'radio',
										'aria-checked': y,
										'aria-disabled': _,
										...J,
										children: y
											? (0, a.Y)(p.I, { ...B.activeIcon, ...(typeof k == 'string' ? { icon: k } : k) })
											: (0, a.Y)(p.I, { ...B.inactiveIcon, ...(typeof C == 'string' ? { icon: C } : C) }),
								  }),
						});
					});
				e.d(i, ['s', 0, z]);
			},
			'./components/src/hooks/useA11y.tsx'(h, i, e) {
				'use strict';
				e.d(i, { iy: () => l });
				const a = 9,
					c = 27,
					r = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(n, u, t, s) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = m),
							(o.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					n &&
						!n.attributes?.[r] &&
						(n.setAttribute(r, !0),
						n.setAttribute('tabIndex', `${u || 0}`),
						n.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && o.target === n && n.click();
						}),
						t &&
							n.addEventListener('keydown', function (o) {
								const b = n.querySelectorAll(d),
									p = b[0],
									E = b[b.length - 1];
								if (o.keyCode == c) {
									n.focus(), s && s(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === a) &&
									(o.shiftKey
										? document.activeElement === p && (E.focus(), o.preventDefault())
										: document.activeElement === E && (p.focus(), o.preventDefault()));
							}));
				}
				e.d(i, ['DH', 0, d, 'aZ', 0, r]);
			},
			'./components/src/hooks/useLang.tsx'(h, i, e) {
				'use strict';
				const a = (c, r, d) => {
					const l = d ? { ...r, ...d } : r,
						n = {};
					return (
						Object.keys(c).forEach((u) => {
							const t = c && c[u],
								s = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (s.value = { 'ss-lang': u, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (s.value = { 'ss-lang': u, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((s.attributes = { 'ss-lang': u }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (s.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (s.attributes.title = t.attributes.title(l))
											: (s.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (s.attributes.alt = t.attributes.alt(l)) : (s.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = t.attributes.placeholder(l))
											: (s.attributes.placeholder = t.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': u })),
								(n[u] = s);
						}),
						n
					);
				};
				e.d(i, ['u', 0, a]);
			},
			'./components/src/utilities/componentArgs.ts'(h, i, e) {
				'use strict';
				const a = {
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
				e.d(i, ['F', 0, a]);
			},
			'./components/src/utilities/defined.ts'(h, i, e) {
				'use strict';
				e.d(i, { s: () => a });
				function a(c) {
					const r = {};
					return (
						Object.keys(c).map((d) => {
							c[d] !== void 0 && (r[d] = c[d]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(h, i, e) {
				'use strict';
				var a = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					d = (l) => {
						const n = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								n.current && l.className?.includes('lang-') && !l.className?.includes(r) && window?.Prism?.highlightElement(n.current);
							}, [l.className, l.children, n]),
							(0, a.Y)('code', { ...l, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, d]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function i(e) {
					const a = new Error("Cannot find module '" + e + "'");
					throw ((a.code = 'MODULE_NOT_FOUND'), a);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (h.exports = i);
			},
		},
	]);
})();
