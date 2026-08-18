(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(w, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => y, IconOptions: () => x, Native: () => E, __namedExportsOrder: () => v, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Molecules/Select/Select.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts'),
					o = e('./components/src/components/Atoms/Icon/paths.tsx');
				const r =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```tsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```tsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```tsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```tsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```tsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```tsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```tsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```tsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```tsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```tsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Select component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `buttonLabel` | The select dropdown button label | `options` (ListOption[]), `selectedOptions` (ListOption[]), `label` (string), `open` (boolean) |\n\n### Example\n\n```tsx\n<Select\n	options={options}\n	lang={{\n		buttonLabel: {\n			value: 'Select an option',\n			attributes: {\n				'aria-label': (data) => `${data.label} dropdown, ${data.options.length} options${data.selectedOptions.length ? `, selected: ${data.selectedOptions[0].label}` : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
					P = {
						title: 'Molecules/Select',
						component: c.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: d.Z } }, children: r }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(O) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(O, {}) })],
						argTypes: {
							options: {
								description: 'Select options from store reference',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'Array of Option objects' } },
								control: { type: 'none' },
							},
							selected: {
								description: 'Current selected options from store reference',
								table: { category: 'Templates Legal', type: { summary: 'Option object' } },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable select',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							label: {
								description: 'Header label',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							hideLabel: {
								description: 'hide the Header label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							clearSelection: {
								description: 'Unselect label',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							hideLabelOnSelection: {
								description: 'Hide label when selection has been made (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSelection: {
								description: 'Hide the current selection in the dropdown button (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideIcon: {
								description: 'Hide the icon in the dropdown button (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionIcons: {
								description: 'Hide the icon in the options (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionLabels: {
								description: 'Hide the label in the options (non-native only)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							separator: {
								defaultValue: ': ',
								description: 'Select delimiter',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: ': ' } },
								control: { type: 'text' },
							},
							color: { description: 'Select color', table: { category: 'Templates Legal', type: { summary: 'string' } }, control: { type: 'color' } },
							borderColor: {
								description: 'Select border color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							backgroundColor: {
								description: 'Select background color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							iconColor: {
								description: 'Select icon color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#333' } },
								control: { type: 'color' },
							},
							iconOpen: {
								defaultValue: 'angle-down',
								description: 'Icon for when select is closed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(o.c)],
								control: { type: 'select' },
							},
							iconClose: {
								defaultValue: 'angle-up',
								description: 'Icon for when select is open',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(o.c)],
								control: { type: 'select' },
							},
							stayOpenOnSelection: {
								defaultValue: !1,
								description: 'Keep dropdown open when an option is selected',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							startOpen: {
								defaultValue: !1,
								description: 'Open on initial render',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							native: {
								defaultValue: !1,
								description: 'Use native select element',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								defaultValue: !1,
								description: 'Ignore clicks outside of element',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onSelect: {
								description: 'Select onSelect event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onSelect',
							},
							...l.F,
						},
					},
					a = f.p.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
					L = (0, n.PA)(({ args: O, controller: S }) =>
						(0, t.Y)(c.l, {
							...O,
							options: S?.store?.sorting?.options,
							selected: S?.store?.sorting?.current,
							onSelect: (K, N) => {
								N && N?.url?.go();
							},
						})
					),
					y = (O, { loaded: { controller: S } }) => (0, t.Y)(L, { args: O, controller: S });
				(y.loaders = [async () => (await a.search(), { controller: a })]), (y.args = { label: 'Sort By' });
				const E = (O, { loaded: { controller: S } }) => (0, t.Y)(L, { args: O, controller: S });
				(E.loaders = [async () => (await a.search(), { controller: a })]), (E.args = { label: 'Sort By', native: !0 });
				const x = (O) => {
					const S = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(c.l, { ...O, options: S });
				};
				(x.args = { label: 'Layout' }),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: SelectProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableSelect args={args} controller={controller} />;
}`,
								...y.parameters?.docs?.source,
							},
						},
					}),
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
							source: {
								originalSource: `(args: SelectProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableSelect args={args} controller={controller} />;
}`,
								...E.parameters?.docs?.source,
							},
						},
					}),
					(x.parameters = {
						...x.parameters,
						docs: {
							...x.parameters?.docs,
							source: {
								originalSource: `(args: SelectProps) => {
  const iconOptions: ListOption[] = [{
    label: '1 wide',
    value: '1 wide',
    icon: 'square'
  }, {
    label: '2 wide',
    value: '2 wide',
    icon: {
      icon: 'layout-large'
    }
  }, {
    label: '3 wide',
    value: '3 wide',
    icon: {
      icon: 'layout-grid'
    }
  }];
  return <Select {...args} options={iconOptions} />;
}`,
								...x.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(w, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					c = e.n(s),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useA11y.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					a = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					x = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(O);
				const K = ({ native: q, color: u, backgroundColor: b, borderColor: g, theme: _ }) =>
						q
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: u || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: b || '#fff',
									border: `1px solid ${g || u || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					N = (0, d.PA)((q) => {
						const u = (0, f.u)(),
							g = { disableA11y: !1, treePath: (0, o.LU)() },
							_ = (0, L.v6)('button', u, g, q),
							{
								content: h,
								children: D,
								disabled: M,
								native: k,
								onClick: ee,
								disableA11y: te,
								disableStyles: oe,
								className: ne,
								internalClassName: R,
								icon: I,
								lang: se,
								treePath: F,
								style: le,
								styleScript: Y,
								themeStyleScript: j,
								...$
							} = _,
							{ overrideElement: H, shouldRenderDefault: J } = (0, v._)('button', _);
						if (!J) return H;
						const z = { icon: { internalClassName: 'ss__button__icon', ...(0, a.s)({ disableStyles: oe }), theme: _?.theme, treePath: F } },
							W = {
								...(0, y.Z)(_, K),
								className: c()('ss__button', { 'ss__button--native': k, 'ss__button--disabled': M }, ne, R),
								disabled: M,
								onClick: (G) => !M && ee && ee(G),
								...$,
							},
							X = { ref: (G) => (0, r.iy)(G) },
							re = {},
							ie = S()(re, se || {}),
							V = (0, x.u)(ie, {}, { activeBreakpoint: u?.activeBreakpoint }),
							Z = !!$.dangerouslySetInnerHTML;
						return h || D || I || se?.button?.value || Z
							? (0, t.Y)(l._, {
									children: k
										? (0, t.FD)('button', {
												...W,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...V.button?.all,
														children: [(0, P.Y)(h, { treePath: F }), (0, P.Y)(D, { treePath: F })],
													}),
													I && (0, t.Y)(E.I, { ...z.icon, ...(typeof I == 'string' ? { icon: I } : I) }),
												],
										  })
										: (0, t.FD)('div', {
												...(te ? {} : X),
												role: 'button',
												'aria-disabled': M,
												...W,
												...V.button?.attributes,
												children: [
													h || D || V.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...V.button?.value,
																children: [(0, P.Y)(h, { treePath: F }), (0, P.Y)(D, { treePath: F })],
														  })
														: void 0,
													I && (0, t.Y)(E.I, { ...z.icon, ...(typeof I == 'string' ? { icon: I } : I) }),
												],
										  }),
							  })
							: null;
					});
				e.d(i, ['$', 0, N]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(w, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/compat/dist/compat.module.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					l = e.n(d),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/hooks/useClickOutside.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/hooks/useA11y.tsx');
				const O = ({ disableOverlay: K }) =>
						(0, c.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: K ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${K ? 'default' : 'pointer'}` },
							'.ss__dropdown__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
					S = (0, f.PA)((K) => {
						const N = (0, r.u)(),
							u = { startOpen: !1, disableA11y: !1, treePath: (0, P.LU)() },
							b = (0, E.v6)('dropdown', N, u, K),
							{
								button: g,
								content: _,
								children: h,
								disabled: D,
								open: M,
								toggleOnHover: k,
								onMouseEnter: ee,
								onMouseLeave: te,
								disableClick: oe,
								onClick: ne,
								onToggle: R,
								focusTrapContent: I,
								startOpen: se,
								disableClickOutside: F,
								disableA11y: le,
								className: Y,
								internalClassName: j,
								treePath: $,
								usePortal: H,
							} = b,
							{ overrideElement: J, shouldRenderDefault: z } = (0, L._)('dropdown', b);
						if (!z) return J;
						let A, W;
						const X = M === void 0;
						X ? ([A, W] = (0, s.J0)(se)) : (A = M);
						const [re, ie] = (0, s.J0)(!1),
							V = (0, s.li)(null),
							Z = (0, s.li)(null),
							[G, ue] = (0, s.J0)({ top: 0, left: 0, width: 0 });
						let ae;
						F ||
							(ae = (0, a.L)((p) => {
								(H && Z.current && Z.current.contains(p.target)) || (A && (D || (X && W && W(!1), R && R(p, !1))));
							})),
							(0, s.vJ)(() => {
								if (H && A) {
									const p = () => {
										if (V.current) {
											const U = V.current.getBoundingClientRect();
											ue({ top: U.bottom + window.scrollY, left: U.left + window.scrollX, width: U.width });
										}
									};
									return (
										p(),
										window.addEventListener('resize', p),
										window.addEventListener('scroll', p, !0),
										() => {
											window.removeEventListener('resize', p), window.removeEventListener('scroll', p, !0);
										}
									);
								}
							}, [H, A]);
						const C = (p, U) => {
								X &&
									W &&
									W((T) => {
										const ce = U ?? !T;
										return ce != T && R && R(p, ce), ce;
									});
							},
							de = (0, x.Z)(b, O),
							me = {
								onMouseEnter:
									(k || ee) &&
									((p) => {
										re || (k && !D && C(p, !0), ee && ee(p));
									}),
								onMouseLeave:
									(k || te) &&
									((p) => {
										re || (k && !D && C(p, !1), te && te(p));
									}),
							},
							Q = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (p) => {
									(Z.current = p),
										le ||
											(0, v.iy)(p, 0, !!I, (U) => {
												X ? C(U) : ne && ne(U);
											});
								},
								children: [(0, y.Y)(_, { open: A, toggleOpen: C, treePath: $ }), (0, y.Y)(h, { open: A, toggleOpen: C, treePath: $ })],
							});
						return (0, t.Y)(o._, {
							children: (0, t.FD)('div', {
								...de,
								className: l()('ss__dropdown', { 'ss__dropdown--open': A }, Y, j),
								ref: ae,
								...me,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (p) => {
											(V.current = p), le || (0, v.iy)(p);
										},
										'aria-expanded': A,
										role: 'button',
										onTouchStart: () => {
											ie(!0);
										},
										onClick: (p) => {
											!D && !oe && (C(p), ne && ne(p)),
												setTimeout(() => {
													ie(!1);
												}, 300);
										},
										children: (0, y.Y)(g, { open: A, toggleOpen: C, treePath: $ }),
									}),
									H
										? (_ || h) &&
										  (0, n.createPortal)(
												(0, t.Y)('div', {
													className: l()('ss__dropdown__portal', Y, j, { 'ss__dropdown__portal--open': A }),
													css: de.css,
													style: { position: 'absolute', top: G.top, left: G.left, width: G.width, zIndex: 9999, pointerEvents: A ? 'auto' : 'none' },
													children: Q,
												}),
												document.body
										  )
										: (_ || h) && Q,
								],
							}),
						});
					});
				e.d(i, ['m', 0, S]);
			},
			'./components/src/components/Molecules/Select/Select.tsx'(w, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					l = e.n(d),
					f = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/utilities/selectionKey.ts'),
					E = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					x = e('./components/src/components/Atoms/Button/Button.tsx'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(N);
				const u = ({ color: g, backgroundColor: _, borderColor: h, theme: D, native: M }) =>
						M
							? (0, c.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, c.AH)({
									display: 'inline-flex',
									color: g,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: _ || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${h || g || D?.variables?.colors?.primary || '#333'}`,
										'.ss__select__dropdown__button': { alignItems: 'center' },
										'.ss__select__select__option': {
											cursor: 'pointer',
											padding: '6px 8px',
											color: 'initial',
											display: 'flex',
											alignItems: 'center',
											gap: '5px',
											'&.ss__select__select__option--selected': { fontWeight: 'bold' },
											'&:hover': { backgroundColor: '#f8f8f8' },
										},
									},
							  }),
					b = (0, s.PA)((g) => {
						const _ = (0, o.u)(),
							D = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, r.LU)() },
							M = (0, a.v6)('select', _, D, g),
							{
								backgroundColor: k,
								borderColor: ee,
								color: te,
								clearSelection: oe,
								disableClickOutside: ne,
								disabled: R,
								hideLabel: I,
								hideLabelOnSelection: se,
								iconColor: F,
								iconClose: le,
								iconOpen: Y,
								label: j,
								native: $,
								onSelect: H,
								selected: J,
								separator: z,
								startOpen: A,
								hideIcon: W,
								hideOptionIcons: X,
								hideOptionLabels: re,
								hideSelection: ie,
								stayOpenOnSelection: V,
								disableStyles: Z,
								className: G,
								internalClassName: ue,
								treePath: ae,
							} = M;
						let { options: C } = M;
						const { overrideElement: de, shouldRenderDefault: me } = (0, K._)('select', M);
						if (!me) return de;
						const Q = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, P.s)({ disableStyles: Z, disabled: R }),
									theme: M?.theme,
									treePath: ae,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, P.s)({ disableStyles: Z, disabled: R, color: te, backgroundColor: k, borderColor: ee }),
									theme: M?.theme,
									treePath: ae,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, P.s)({ disableStyles: Z, color: F || te, size: '12px' }),
									theme: M?.theme,
									treePath: ae,
								},
							},
							[p, U] = (0, n.J0)(!!A),
							[T, ce] = (0, n.J0)(J),
							[fe, Ee] = (0, n.J0)(() => (0, y.i)(J));
						if (J) {
							const m = (0, y.i)(J);
							m !== fe && (Ee(m), ce(J));
						}
						T && oe && (C = [{ label: oe, value: '' }, ...C]);
						const ye = (m, B) => {
								B != T && H && H(m, B), ce(B), !V && U(!1);
							},
							ve = (0, L.Z)(M, u),
							_e = C.filter((m) => T?.value === m.value),
							Oe = {
								buttonLabel: {
									value: j,
									attributes: {
										'aria-label': `${j} dropdown, ${C.length} options ${_e.length ? `, Currently selected option is ${_e[0].label}` : ''}`,
									},
								},
							},
							be = q()(Oe, M.lang || {}),
							he = (0, S.u)(be, { options: C, selectedOptions: _e, label: j, open: p }, { activeBreakpoint: _?.activeBreakpoint });
						return typeof C == 'object' && C?.length
							? (0, t.Y)(f._, {
									children: (0, t.Y)('div', {
										...ve,
										className: l()('ss__select', { 'ss__select--native': $ }, { 'ss__select--disabled': R }, G, ue),
										children: $
											? (0, t.FD)(t.FK, {
													children: [
														(j || be.buttonLabel.value) &&
															!I &&
															!se &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...he.buttonLabel?.all }),
																	z && (0, t.Y)('span', { className: 'ss__select__label__separator', children: z }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: R || void 0,
															onChange: (m) => {
																const B = m.target,
																	pe = B.options[B.selectedIndex],
																	Pe = C.filter((ge, De) => ge.label == pe.text && (ge.value == pe.value || ge.value == De)).pop();
																!R && ye(m, Pe);
															},
															children: [
																!T && oe && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: oe }),
																C.map((m, B) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: T?.value === m.value,
																		value: m.value ?? B,
																		children: m.label,
																	})
																),
															],
														}),
														!W && (0, t.Y)(v.I, { ...Q.icon, name: 'open', ...(typeof Y == 'string' ? { icon: Y } : Y) }),
													],
											  })
											: (0, t.Y)(E.m, {
													...Q.dropdown,
													disableClickOutside: ne,
													open: p,
													onToggle: (m, B) => U((pe) => B ?? !pe),
													onClick: () => U((m) => !m),
													disableA11y: !0,
													button: (0, t.FD)(x.$, {
														...Q.button,
														children: [
															(j || be.buttonLabel.value) &&
																!se &&
																!I &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...he.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...he.buttonLabel.value }),
																		z && T && (0, t.Y)('span', { className: 'ss__select__label__separator', children: z }),
																	],
																}),
															T &&
																!ie &&
																(0, t.FD)(t.FK, {
																	children: [
																		T.icon &&
																			!X &&
																			(0, t.Y)(v.I, {
																				...Q.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof T.icon == 'string' ? { icon: T.icon } : T.icon),
																			}),
																		!re && (0, t.Y)('span', { className: 'ss__select__selection', children: T?.label }),
																	],
																}),
															!W &&
																(0, t.Y)(v.I, {
																	...Q.icon,
																	name: p ? 'open' : 'close',
																	...(p ? { ...(typeof le == 'string' ? { icon: le } : le) } : { ...(typeof Y == 'string' ? { icon: Y } : Y) }),
																}),
														],
													}),
													children: (0, t.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof j == 'string' ? j : '',
														ref: (m) => (0, O.iy)(m, -1, !0, () => U(!1)),
														children: C.map((m) =>
															(0, t.FD)('li', {
																ref: (B) => (0, O.iy)(B),
																'aria-disabled': m.disabled,
																title: m.label,
																className: l()('ss__select__select__option', { 'ss__select__select__option--selected': T?.value === m.value }),
																onClick: (B) => !R && ye(B, m),
																role: 'option',
																'aria-selected': T?.value === m.value,
																children: [
																	m.icon &&
																		!X &&
																		(0, t.Y)(v.I, {
																			...Q.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${ae} dropdown`,
																			...(typeof m.icon == 'string' ? { icon: m.icon } : m.icon),
																		}),
																	!re && (0, t.Y)('span', { children: m.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
				e.d(i, ['l', 0, b]);
			},
			'./components/src/hooks/useA11y.tsx'(w, i, e) {
				'use strict';
				e.d(i, { iy: () => d });
				const t = 9,
					n = 27,
					s = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function d(l, f, o, r) {
					const P = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${P}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = P),
							(a.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					l &&
						!l.attributes?.[s] &&
						(l.setAttribute(s, !0),
						l.setAttribute('tabIndex', `${f || 0}`),
						l.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && l.click();
						}),
						o &&
							l.addEventListener('keydown', function (a) {
								const L = l.querySelectorAll(c),
									y = L[0],
									E = L[L.length - 1];
								if (a.keyCode == n) {
									l.focus(), r && r(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === t) &&
									(a.shiftKey
										? document.activeElement === y && (E.focus(), a.preventDefault())
										: document.activeElement === E && (y.focus(), a.preventDefault()));
							}));
				}
				e.d(i, ['DH', 0, c, 'aZ', 0, s]);
			},
			'./components/src/hooks/useClickOutside.tsx'(w, i, e) {
				'use strict';
				e.d(i, { L: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function n(s) {
					const c = (0, t.li)(),
						d = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							c.current = s;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', l), () => document.removeEventListener('click', l);
							function l(f) {
								d.current && c.current && !d.current.contains(f.target) && c.current(f);
							}
						}, []),
						d
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(w, i, e) {
				'use strict';
				const t = (n, s, c) => {
					const d = c ? { ...s, ...c } : s,
						l = {};
					return (
						Object.keys(n).forEach((f) => {
							const o = n && n[f],
								r = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (r.value = { 'ss-lang': f, dangerouslySetInnerHTML: { __html: o.value(d) } })
										: (r.value = { 'ss-lang': f, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((r.attributes = { 'ss-lang': f }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = o.attributes['aria-label'](d))
											: (r.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](d))
											: (r.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (r.attributes.title = o.attributes.title(d))
											: (r.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (r.attributes.alt = o.attributes.alt(d)) : (r.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = o.attributes.placeholder(d))
											: (r.attributes.placeholder = o.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': f })),
								(l[f] = r);
						}),
						l
					);
				};
				e.d(i, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(w, i, e) {
				'use strict';
				const t = {
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
				e.d(i, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(w, i, e) {
				'use strict';
				e.d(i, { s: () => t });
				function t(n) {
					const s = {};
					return (
						Object.keys(n).map((c) => {
							n[c] !== void 0 && (s[c] = n[c]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/selectionKey.ts'(w, i, e) {
				'use strict';
				e.d(i, { i: () => t });
				function t(n) {
					return (n == null ? [] : Array.isArray(n) ? n : [n]).map((c) => `${c?.value}:${c?.label}`).join('|');
				}
			},
			'./components/src/utilities/snapify.ts'(w, i, e) {
				'use strict';
				e.d(i, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					L = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					O = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(b) {
						const g = b.id;
						if (v[g]) return v[g];
						const _ = (v[g] = N({ client: O, controller: b }));
						return (
							_.on('afterStore', async ({ controller: h }, D) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await D();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(b) {
						const g = b.id;
						if (v[g]) return v[g];
						const _ = (v[g] = q({ client: O, controller: b }));
						return (
							_.on('afterStore', async ({ controller: h }, D) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await D();
							}),
							_.init(),
							_
						);
					}
					static search(b) {
						const g = b.id;
						if (v[g]) return v[g];
						const _ = (v[g] = K({ client: O, controller: b }));
						return (
							_.on('afterStore', async ({ controller: h }, D) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await D();
							}),
							_.init(),
							_
						);
					}
				}
				function K(u) {
					const b = new r.V(new a.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), P.X);
					return new n.Tp(u.controller, {
						client: new d.K(u.client.globals, u.client.config),
						store: new f.U(u.controller, { urlManager: b }),
						urlManager: b,
						eventManager: new L.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new x.J(u.client.globals),
					});
				}
				function N(u) {
					const b = new r.V(new a.E(), P.X).detach(!0);
					return new c.c(u.controller, {
						client: new d.K(u.client.globals, u.client.config),
						store: new o.t(u.controller, { urlManager: b }),
						urlManager: b,
						eventManager: new L.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new x.J(u.client.globals),
					});
				}
				function q(u) {
					const b = new r.V(new a.E(), P.X).detach();
					return new s.Z(u.controller, {
						client: new d.K(u.client.globals, u.client.config),
						store: new l.Y(u.controller, { urlManager: b }),
						urlManager: b,
						eventManager: new L.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new x.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (d) => {
						const l = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								l.current && d.className?.includes('lang-') && !d.className?.includes(s) && window?.Prism?.highlightElement(l.current);
							}, [d.className, d.children, l]),
							(0, t.Y)('code', { ...d, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, c]);
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function i(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (w.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Select-Select-stories.8d928f52.iframe.bundle.js.map
