(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(B, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => f, IconOptions: () => O, Native: () => E, __namedExportsOrder: () => P, default: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/components/Molecules/Select/Select.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/utilities/snapify.ts'),
					w = e('./components/src/components/Atoms/Icon/paths.tsx');
				const S =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```tsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```tsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```tsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```tsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```tsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```tsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```tsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```tsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```tsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```tsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Select component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `buttonLabel` | The select dropdown button label | `options` (ListOption[]), `selectedOptions` (ListOption[]), `label` (string), `open` (boolean) |\n\n### Example\n\n```tsx\n<Select\n	options={options}\n	lang={{\n		buttonLabel: {\n			value: 'Select an option',\n			attributes: {\n				'aria-label': (data) => `${data.label} dropdown, ${data.options.length} options${data.selectedOptions.length ? `, selected: ${data.selectedOptions[0].label}` : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
					v = {
						title: 'Molecules/Select',
						component: p.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: r.Z } }, children: S }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(D) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(D, {}) })],
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
								options: [...Object.keys(w.c)],
								control: { type: 'select' },
							},
							iconClose: {
								defaultValue: 'angle-up',
								description: 'Icon for when select is open',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(w.c)],
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
							...o.F,
						},
					},
					l = s.p.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
					C = (0, u.PA)(({ args: D, controller: T }) =>
						(0, t.Y)(p.l, {
							...D,
							options: T?.store?.sorting?.options,
							selected: T?.store?.sorting?.current,
							onSelect: (K, Y) => {
								Y && Y?.url?.go();
							},
						})
					),
					f = (D, { loaded: { controller: T } }) => (0, t.Y)(C, { args: D, controller: T });
				(f.loaders = [async () => (await l.search(), { controller: l })]), (f.args = { label: 'Sort By' });
				const E = (D, { loaded: { controller: T } }) => (0, t.Y)(C, { args: D, controller: T });
				(E.loaders = [async () => (await l.search(), { controller: l })]), (E.args = { label: 'Sort By', native: !0 });
				const O = (D) => {
					const T = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(p.l, { ...D, options: T });
				};
				(O.args = { label: 'Layout' }),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
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
					(O.parameters = {
						...O.parameters,
						docs: {
							...O.parameters?.docs,
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
								...O.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(B, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					p = e.n(n),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					w = e('./components/src/providers/treePath.tsx'),
					S = e('./components/src/hooks/useA11y.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/hooks/useLang.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(D);
				const K = ({ native: Q, color: m, backgroundColor: c, borderColor: g, theme: b }) =>
						Q
							? (0, u.AH)({})
							: (0, u.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: m || b?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: c || '#fff',
									border: `1px solid ${g || m || b?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					Y = (0, r.PA)((Q) => {
						const m = (0, s.u)(),
							g = { disableA11y: !1, treePath: (0, w.LU)() },
							b = (0, C.v6)('button', m, g, Q),
							{
								content: _,
								children: h,
								disabled: F,
								native: J,
								onClick: H,
								disableA11y: V,
								disableStyles: de,
								className: A,
								internalClassName: $,
								icon: x,
								lang: ne,
								treePath: j,
								style: k,
								styleScript: W,
								themeStyleScript: se,
								...z
							} = b,
							{ overrideElement: R, shouldRenderDefault: q } = (0, P._)('button', b);
						if (!q) return R;
						const le = { icon: { internalClassName: 'ss__button__icon', ...(0, l.s)({ disableStyles: de }), theme: b?.theme, treePath: j } },
							N = {
								...(0, f.Z)(b, K),
								className: p()('ss__button', { 'ss__button--native': J, 'ss__button--disabled': F }, A, $),
								disabled: F,
								onClick: (Z) => !F && H && H(Z),
								...z,
							},
							X = { ref: (Z) => (0, S.iy)(Z) },
							re = {},
							ae = T()(re, ne || {}),
							U = (0, O.u)(ae, {}),
							te = !!z.dangerouslySetInnerHTML;
						return _ || h || x || ne?.button?.value || te
							? (0, t.Y)(o._, {
									children: J
										? (0, t.FD)('button', {
												...N,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...U.button?.all,
														children: [(0, v.Y)(_, { treePath: j }), (0, v.Y)(h, { treePath: j })],
													}),
													x && (0, t.Y)(E.I, { ...le.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  })
										: (0, t.FD)('div', {
												...(V ? {} : X),
												role: 'button',
												'aria-disabled': F,
												...N,
												...U.button?.attributes,
												children: [
													_ || h || U.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...U.button?.value,
																children: [(0, v.Y)(_, { treePath: j }), (0, v.Y)(h, { treePath: j })],
														  })
														: void 0,
													x && (0, t.Y)(E.I, { ...le.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  }),
							  })
							: null;
					});
				e.d(i, ['$', 0, Y]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(B, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/compat/dist/compat.module.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					w = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useClickOutside.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/hooks/useA11y.tsx');
				const D = ({ disableOverlay: K }) =>
						(0, p.AH)({
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
					T = (0, s.PA)((K) => {
						const Y = (0, S.u)(),
							m = { startOpen: !1, disableA11y: !1, treePath: (0, v.LU)() },
							c = (0, E.v6)('dropdown', Y, m, K),
							{
								button: g,
								content: b,
								children: _,
								disabled: h,
								open: F,
								toggleOnHover: J,
								onMouseEnter: H,
								onMouseLeave: V,
								disableClick: de,
								onClick: A,
								onToggle: $,
								focusTrapContent: x,
								startOpen: ne,
								disableClickOutside: j,
								disableA11y: k,
								className: W,
								internalClassName: se,
								treePath: z,
								usePortal: R,
							} = c,
							{ overrideElement: q, shouldRenderDefault: le } = (0, C._)('dropdown', c);
						if (!le) return q;
						let L, N;
						const X = F === void 0;
						X ? ([L, N] = (0, n.J0)(ne)) : (L = F);
						const [re, ae] = (0, n.J0)(!1),
							U = (0, n.li)(null),
							te = (0, n.li)(null),
							[Z, ie] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let I;
						j ||
							(I = (0, l.L)((a) => {
								(R && te.current && te.current.contains(a.target)) || (L && (h || (X && N && N(!1), $ && $(a, !1))));
							})),
							(0, n.vJ)(() => {
								if (R && L) {
									const a = () => {
										if (U.current) {
											const y = U.current.getBoundingClientRect();
											ie({ top: y.bottom + window.scrollY, left: y.left + window.scrollX, width: y.width });
										}
									};
									return (
										a(),
										window.addEventListener('resize', a),
										window.addEventListener('scroll', a, !0),
										() => {
											window.removeEventListener('resize', a), window.removeEventListener('scroll', a, !0);
										}
									);
								}
							}, [R, L]);
						const G = (a, y) => {
								X &&
									N &&
									N((pe) => {
										const me = y ?? !pe;
										return me != pe && $ && $(a, me), me;
									});
							},
							ue = (0, O.Z)(c, D),
							ee = {
								onMouseEnter:
									(J || H) &&
									((a) => {
										re || (J && !h && G(a, !0), H && H(a));
									}),
								onMouseLeave:
									(J || V) &&
									((a) => {
										re || (J && !h && G(a, !1), V && V(a));
									}),
							},
							oe = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (a) => {
									(te.current = a),
										k ||
											(0, P.iy)(a, 0, !!x, (y) => {
												X ? G(y) : A && A(y);
											});
								},
								children: [(0, f.Y)(b, { open: L, toggleOpen: G, treePath: z }), (0, f.Y)(_, { open: L, toggleOpen: G, treePath: z })],
							});
						return (0, t.Y)(w._, {
							children: (0, t.FD)('div', {
								...ue,
								className: o()('ss__dropdown', { 'ss__dropdown--open': L }, W, se),
								ref: I,
								...ee,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (a) => {
											(U.current = a), k || (0, P.iy)(a);
										},
										'aria-expanded': L,
										role: 'button',
										onTouchStart: () => {
											ae(!0);
										},
										onClick: (a) => {
											!h && !de && (G(a), A && A(a)),
												setTimeout(() => {
													ae(!1);
												}, 300);
										},
										children: (0, f.Y)(g, { open: L, toggleOpen: G, treePath: z }),
									}),
									R
										? (b || _) &&
										  (0, u.createPortal)(
												(0, t.Y)('div', {
													className: o()('ss__dropdown__portal', W, se, { 'ss__dropdown__portal--open': L }),
													css: ue.css,
													style: { position: 'absolute', top: Z.top, left: Z.left, width: Z.width, zIndex: 9999, pointerEvents: L ? 'auto' : 'none' },
													children: oe,
												}),
												document.body
										  )
										: (b || _) && oe,
								],
							}),
						});
					});
				e.d(i, ['m', 0, T]);
			},
			'./components/src/components/Molecules/Select/Select.tsx'(B, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					E = e('./components/src/components/Atoms/Button/Button.tsx'),
					O = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useA11y.tsx'),
					D = e('./components/src/hooks/useLang.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(K);
				const Q = ({ color: c, backgroundColor: g, borderColor: b, theme: _, native: h }) =>
						h
							? (0, p.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, p.AH)({
									display: 'inline-flex',
									color: c,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: g || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${b || c || _?.variables?.colors?.primary || '#333'}`,
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
					m = (0, n.PA)((c) => {
						const g = (0, w.u)(),
							_ = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, S.LU)() },
							h = (0, l.v6)('select', g, _, c),
							{
								backgroundColor: F,
								borderColor: J,
								color: H,
								clearSelection: V,
								disableClickOutside: de,
								disabled: A,
								hideLabel: $,
								hideLabelOnSelection: x,
								iconColor: ne,
								iconClose: j,
								iconOpen: k,
								label: W,
								native: se,
								onSelect: z,
								selected: R,
								separator: q,
								startOpen: le,
								hideIcon: L,
								hideOptionIcons: N,
								hideOptionLabels: X,
								hideSelection: re,
								stayOpenOnSelection: ae,
								disableStyles: U,
								className: te,
								internalClassName: Z,
								treePath: ie,
							} = h;
						let { options: I } = h;
						const { overrideElement: G, shouldRenderDefault: ue } = (0, T._)('select', h);
						if (!ue) return G;
						const ee = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, v.s)({ disableStyles: U, disabled: A }),
									theme: h?.theme,
									treePath: ie,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, v.s)({ disableStyles: U, disabled: A, color: H, backgroundColor: F, borderColor: J }),
									theme: h?.theme,
									treePath: ie,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, v.s)({ disableStyles: U, color: ne || H, size: '12px' }),
									theme: h?.theme,
									treePath: ie,
								},
							},
							[oe, a] = (0, u.J0)(!!le),
							[y, pe] = (0, u.J0)(R),
							[me] = (0, u.J0)(R);
						try {
							if (R) {
								const d = JSON.stringify(me),
									M = JSON.stringify(R),
									ce = JSON.stringify(y);
								d !== M && M !== ce && pe(R);
							}
						} catch {}
						y && V && (I = [{ label: V, value: '' }, ...I]);
						const ye = (d, M) => {
								M != y && z && z(d, M), pe(M), !ae && a(!1);
							},
							fe = (0, C.Z)(h, Q),
							_e = I.filter((d) => y?.value === d.value),
							Ee = {
								buttonLabel: {
									value: W,
									attributes: {
										'aria-label': `${W} dropdown, ${I.length} options ${_e.length ? `, Currently selected option is ${_e[0].label}` : ''}`,
									},
								},
							},
							be = Y()(Ee, h.lang || {}),
							he = (0, D.u)(be, { options: I, selectedOptions: _e, label: W, open: oe });
						return typeof I == 'object' && I?.length
							? (0, t.Y)(s._, {
									children: (0, t.Y)('div', {
										...fe,
										className: o()('ss__select', { 'ss__select--native': se }, { 'ss__select--disabled': A }, te, Z),
										children: se
											? (0, t.FD)(t.FK, {
													children: [
														(W || be.buttonLabel.value) &&
															!$ &&
															!x &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...he.buttonLabel?.all }),
																	q && (0, t.Y)('span', { className: 'ss__select__label__separator', children: q }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: A || void 0,
															onChange: (d) => {
																const M = d.target,
																	ce = M.options[M.selectedIndex],
																	ve = I.filter((ge, Oe) => ge.label == ce.text && (ge.value == ce.value || ge.value == Oe)).pop();
																!A && ye(d, ve);
															},
															children: [
																!y && V && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: V }),
																I.map((d, M) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: y?.value === d.value,
																		value: d.value ?? M,
																		children: d.label,
																	})
																),
															],
														}),
														!L && (0, t.Y)(O.I, { ...ee.icon, name: 'open', ...(typeof k == 'string' ? { icon: k } : k) }),
													],
											  })
											: (0, t.Y)(f.m, {
													...ee.dropdown,
													disableClickOutside: de,
													open: oe,
													onToggle: (d, M) => a((ce) => M ?? !ce),
													onClick: () => a((d) => !d),
													disableA11y: !0,
													button: (0, t.FD)(E.$, {
														...ee.button,
														children: [
															(W || be.buttonLabel.value) &&
																!x &&
																!$ &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...he.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...he.buttonLabel.value }),
																		q && y && (0, t.Y)('span', { className: 'ss__select__label__separator', children: q }),
																	],
																}),
															y &&
																!re &&
																(0, t.FD)(t.FK, {
																	children: [
																		y.icon &&
																			!N &&
																			(0, t.Y)(O.I, {
																				...ee.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof y.icon == 'string' ? { icon: y.icon } : y.icon),
																			}),
																		!X && (0, t.Y)('span', { className: 'ss__select__selection', children: y?.label }),
																	],
																}),
															!L &&
																(0, t.Y)(O.I, {
																	...ee.icon,
																	name: oe ? 'open' : 'close',
																	...(oe ? { ...(typeof j == 'string' ? { icon: j } : j) } : { ...(typeof k == 'string' ? { icon: k } : k) }),
																}),
														],
													}),
													children: (0, t.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof W == 'string' ? W : '',
														ref: (d) => (0, P.iy)(d, -1, !0, () => a(!1)),
														children: I.map((d) =>
															(0, t.FD)('li', {
																ref: (M) => (0, P.iy)(M),
																'aria-disabled': d.disabled,
																title: d.label,
																className: o()('ss__select__select__option', { 'ss__select__select__option--selected': y?.value === d.value }),
																onClick: (M) => !A && ye(M, d),
																role: 'option',
																'aria-selected': y?.value === d.value,
																children: [
																	d.icon &&
																		!N &&
																		(0, t.Y)(O.I, {
																			...ee.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${ie} dropdown`,
																			...(typeof d.icon == 'string' ? { icon: d.icon } : d.icon),
																		}),
																	!X && (0, t.Y)('span', { children: d.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
				e.d(i, ['l', 0, m]);
			},
			'./components/src/hooks/useA11y.tsx'(B, i, e) {
				'use strict';
				e.d(i, { iy: () => r });
				const t = 9,
					u = 27,
					n = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(o, s, w, S) {
					const v = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${v}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = v),
							(l.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					o &&
						!o.attributes?.[n] &&
						(o.setAttribute(n, !0),
						o.setAttribute('tabIndex', `${s || 0}`),
						o.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && o.click();
						}),
						w &&
							o.addEventListener('keydown', function (l) {
								const C = o.querySelectorAll(p),
									f = C[0],
									E = C[C.length - 1];
								if (l.keyCode == u) {
									o.focus(), S && S(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === t) &&
									(l.shiftKey
										? document.activeElement === f && (E.focus(), l.preventDefault())
										: document.activeElement === E && (f.focus(), l.preventDefault()));
							}));
				}
				e.d(i, ['DH', 0, p, 'aZ', 0, n]);
			},
			'./components/src/hooks/useClickOutside.tsx'(B, i, e) {
				'use strict';
				e.d(i, { L: () => u });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function u(n) {
					const p = (0, t.li)(),
						r = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							p.current = n;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', o), () => document.removeEventListener('click', o);
							function o(s) {
								r.current && p.current && !r.current.contains(s.target) && p.current(s);
							}
						}, []),
						r
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(B, i, e) {
				'use strict';
				const t = (u, n) => {
					const p = {};
					return (
						Object.keys(u).forEach((r) => {
							const o = u && u[r],
								s = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (s.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: o.value(n) } })
										: (s.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((s.attributes = { 'ss-lang': r }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = o.attributes['aria-label'](n))
											: (s.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](n))
											: (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (s.attributes.title = o.attributes.title(n))
											: (s.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (s.attributes.alt = o.attributes.alt(n)) : (s.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = o.attributes.placeholder(n))
											: (s.attributes.placeholder = o.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': r })),
								(p[r] = s);
						}),
						p
					);
				};
				e.d(i, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(B, i, e) {
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
			'./components/src/utilities/defined.ts'(B, i, e) {
				'use strict';
				e.d(i, { s: () => t });
				function t(u) {
					const n = {};
					return (
						Object.keys(u).map((p) => {
							u[p] !== void 0 && (n[p] = u[p]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(B, i, e) {
				'use strict';
				e.d(i, { p: () => T });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					w = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					C = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					O = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					D = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(c) {
						const g = c.id;
						if (P[g]) return P[g];
						const b = (P[g] = Y({ client: D, controller: c }));
						return (
							b.on('afterStore', async ({ controller: _ }, h) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await h();
							}),
							b.init(),
							b
						);
					}
					static autocomplete(c) {
						const g = c.id;
						if (P[g]) return P[g];
						const b = (P[g] = Q({ client: D, controller: c }));
						return (
							b.on('afterStore', async ({ controller: _ }, h) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await h();
							}),
							b.init(),
							b
						);
					}
					static search(c) {
						const g = c.id;
						if (P[g]) return P[g];
						const b = (P[g] = K({ client: D, controller: c }));
						return (
							b.on('afterStore', async ({ controller: _ }, h) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await h();
							}),
							b.init(),
							b
						);
					}
				}
				function K(m) {
					const c = new S.V(new l.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), v.X);
					return new u.Tp(m.controller, {
						client: new r.K(m.client.globals, m.client.config),
						store: new s.U(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new C.E(),
						profiler: new f.U(),
						logger: new E.V(),
						tracker: new O.J(m.client.globals),
					});
				}
				function Y(m) {
					const c = new S.V(new l.E(), v.X).detach(!0);
					return new p.c(m.controller, {
						client: new r.K(m.client.globals, m.client.config),
						store: new w.t(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new C.E(),
						profiler: new f.U(),
						logger: new E.V(),
						tracker: new O.J(m.client.globals),
					});
				}
				function Q(m) {
					const c = new S.V(new l.E(), v.X).detach();
					return new n.Z(m.controller, {
						client: new r.K(m.client.globals, m.client.config),
						store: new o.Y(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new C.E(),
						profiler: new f.U(),
						logger: new E.V(),
						tracker: new O.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					p = (r) => {
						const o = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								o.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(o.current);
							}, [r.className, r.children, o]),
							(0, t.Y)('code', { ...r, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, p]);
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function i(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (B.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Select-Select-stories.6a221267.iframe.bundle.js.map
