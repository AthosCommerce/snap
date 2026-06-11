(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1075],
		{
			'./components/src/components/Molecules/Radio/Radio.stories.tsx'(p, i, t) {
				'use strict';
				t.r(i), t.d(i, { Default: () => m, Disabled: () => d, Native: () => o, __namedExportsOrder: () => h, default: () => _ });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = t('./components/src/components/Molecules/Radio/Radio.tsx'),
					c = t('./components/src/components/Atoms/Icon/paths.tsx'),
					r = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const n =
						"# Radio\n\nRenders a native or custom radio.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### native\nThe `native` prop will render an `<input type='radio'>` element.\n\n```tsx\n    <Radio native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n    <Radio checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the radio to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```tsx\n    <Radio startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the radio from being toggled or invoking the `onClick` callback.\n\n```tsx\n    <Radio disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n    <Radio disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom radio size.\n\n```tsx\n    <Radio size={'16px'} />\n```\n\n### color\nThe `color` prop sets the radio border stroke and fill colors.\n\n```tsx\n    <Radio color={'#ffff00'} />\n```\n\n\n### checkedIcon\nThe `checkedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is checked. This only applies if using a custom radio `native={false}`.\n\n```tsx\n    <Radio checkedIcon={'bullet'} />\n```\n\n### unCheckedIcon\nThe `unCheckedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is not pchecked. This only applies if using a custom radio `native={false}`.\n\n```tsx\n    <Radio unCheckedIcon={'bullet-o'} />\n```\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the radio is clicked.\n\n```tsx\n    <Radio onClick={(e)=>{console.log(e)}} />\n```\n",
					_ = {
						title: 'Molecules/Radio',
						component: a.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: n }), (0, s.Y)(l.uY, { story: l.h1 })],
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
								options: [...Object.keys(c.c)],
								control: { type: 'select' },
							},
							unCheckedIcon: {
								description: 'Icon name when radio is unchecked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bullet-o' } },
								options: [...Object.keys(c.c)],
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
							...e.F,
						},
					},
					m = (u) => (0, s.Y)(a.s, { ...u }),
					d = (u) => (0, s.Y)(a.s, { ...u });
				d.args = { checked: !0, disabled: !0 };
				const o = (u) => (0, s.Y)(a.s, { ...u });
				(o.args = { native: !0 }),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: RadioProps) => <Radio {...args} />', ...m.parameters?.docs?.source } },
					}),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: RadioProps) => <Radio {...args} />', ...d.parameters?.docs?.source } },
					}),
					(o.parameters = {
						...o.parameters,
						docs: { ...o.parameters?.docs, source: { originalSource: '(args: RadioProps) => <Radio {...args} />', ...o.parameters?.docs?.source } },
					});
				const h = ['Default', 'Disabled', 'Native'];
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(p, i, t) {
				'use strict';
				t.d(i, { s: () => z });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					r = t.n(c),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					n = t('./components/src/utilities/defined.ts'),
					_ = t('./components/src/utilities/mergeProps.ts'),
					m = t('./components/src/utilities/mergeStyles.ts'),
					d = t('./components/src/providers/cache.tsx'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = t('./components/src/providers/treePath.tsx'),
					u = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = t('./components/src/hooks/useA11y.tsx'),
					W = t('./components/src/hooks/useLang.tsx'),
					N = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Y = t('../../node_modules/deepmerge/dist/cjs.js'),
					V = t.n(Y);
				const w = ({ size: E, native: x }) =>
						x
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: E,
									width: E,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					z = (0, e.PA)((E) => {
						const x = (0, o.u)(),
							F = (0, h.LU)(),
							H = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: x.variables?.colors.primary || '#000000',
								treePath: F,
							},
							g = (0, _.v6)('radio', x, H, E),
							{
								checked: O,
								color: R,
								disabled: f,
								checkedIcon: k,
								unCheckedIcon: C,
								onClick: D,
								startChecked: Z,
								native: $,
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
							} = g,
							{ overrideElement: Q, shouldRenderDefault: X } = (0, N._)('radio', g);
						if (!X) return Q;
						const U = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, n.s)({ size: L, color: R, disableStyles: T }),
								theme: g.theme,
								treePath: j,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, n.s)({ size: L, color: R, disableStyles: T }),
								theme: g.theme,
								treePath: j,
							},
						};
						let y, P;
						const B = O === void 0;
						B ? ([y, P] = (0, l.J0)(Z)) : (y = O);
						const S = (b) => {
								f || (B && P && P((se) => !se), D && D(b));
							},
							K = (0, m.Z)(g, w),
							q = { radio: {} },
							ee = V()(q, G || {}),
							te = (0, W.u)(ee, { disabled: f, checkedState: y });
						return (0, s.Y)(d._, {
							children: $
								? (0, s.Y)('div', {
										className: r()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': f }, M, A),
										...K,
										children: (0, s.Y)('input', {
											className: r()('ss__radio__input'),
											'aria-checked': y,
											type: 'radio',
											onClick: (b) => S(b),
											disabled: f,
											checked: y,
											tabIndex: I ? -1 : 0,
										}),
								  })
								: (0, s.Y)('span', {
										...K,
										className: r()('ss__radio', { 'ss__radio--disabled': f, 'ss__radio--active': y }, M, A),
										onClick: (b) => S(b),
										ref: (b) => (I ? null : (0, v.iy)(b)),
										...te.radio?.all,
										role: 'radio',
										'aria-checked': y,
										'aria-disabled': f,
										...J,
										children: y
											? (0, s.Y)(u.I, { ...U.activeIcon, ...(typeof k == 'string' ? { icon: k } : k) })
											: (0, s.Y)(u.I, { ...U.inactiveIcon, ...(typeof C == 'string' ? { icon: C } : C) }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(p, i, t) {
				'use strict';
				t.d(i, { DH: () => c, aZ: () => a, iy: () => r });
				const s = 9,
					l = 27,
					a = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(e, n, _, m) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = d),
							(o.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					e &&
						!e.attributes?.[a] &&
						(e.setAttribute(a, !0),
						e.setAttribute('tabIndex', `${n || 0}`),
						e.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && e.click();
						}),
						_ &&
							e.addEventListener('keydown', function (o) {
								const h = e.querySelectorAll(c),
									u = h[0],
									v = h[h.length - 1];
								if (o.keyCode == l) {
									e.focus(), m && m(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === s) &&
									(o.shiftKey
										? document.activeElement === u && (v.focus(), o.preventDefault())
										: document.activeElement === v && (u.focus(), o.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(p, i, t) {
				'use strict';
				t.d(i, { u: () => s });
				const s = (l, a) => {
					const c = {};
					return (
						Object.keys(l).forEach((r) => {
							const e = l && l[r],
								n = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: e.value(a) } })
										: (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((n.attributes = { 'ss-lang': r }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = e.attributes['aria-label'](a))
											: (n.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](a))
											: (n.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (n.attributes.title = e.attributes.title(a))
											: (n.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (n.attributes.alt = e.attributes.alt(a)) : (n.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = e.attributes.placeholder(a))
											: (n.attributes.placeholder = e.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': r })),
								(c[r] = n);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(p, i, t) {
				'use strict';
				t.d(i, { F: () => s });
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
			'./components/src/utilities/defined.ts'(p, i, t) {
				'use strict';
				t.d(i, { s: () => s });
				function s(l) {
					const a = {};
					return (
						Object.keys(l).map((c) => {
							l[c] !== void 0 && (a[c] = l[c]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(p, i, t) {
				'use strict';
				t.d(i, { Z: () => c });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					c = (r) => {
						const e = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								e.current && r.className?.includes('lang-') && !r.className?.includes(a) && window?.Prism?.highlightElement(e.current);
							}, [r.className, r.children, e]),
							(0, s.Y)('code', { ...r, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function i(t) {
					var s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (p.exports = i);
			},
		},
	]);
})();
