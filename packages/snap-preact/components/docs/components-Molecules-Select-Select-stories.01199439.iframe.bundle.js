(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(w, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => E, IconOptions: () => D, Native: () => O, __namedExportsOrder: () => M, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/components/Molecules/Select/Select.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					v = e('./components/src/utilities/snapify.ts'),
					o = e('./components/src/components/Atoms/Icon/paths.tsx');
				const s =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```tsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```tsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```tsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```tsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```tsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```tsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```tsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```tsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```tsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```tsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Select component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `buttonLabel` | The select dropdown button label | `options` (ListOption[]), `selectedOptions` (ListOption[]), `label` (string), `open` (boolean) |\n\n### Example\n\n```tsx\n<Select\n	options={options}\n	lang={{\n		buttonLabel: {\n			value: 'Select an option',\n			attributes: {\n				'aria-label': (data) => `${data.label} dropdown, ${data.options.length} options${data.selectedOptions.length ? `, selected: ${data.selectedOptions[0].label}` : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
					P = {
						title: 'Molecules/Select',
						component: u.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(r.oz, { options: { overrides: { code: a.Z } }, children: s }), (0, t.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(C) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(C, {}) })],
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
							...n.F,
						},
					},
					l = v.p.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
					L = (0, _.PA)(({ args: C, controller: S }) =>
						(0, t.Y)(u.l, {
							...C,
							options: S?.store?.sorting?.options,
							selected: S?.store?.sorting?.current,
							onSelect: (K, Y) => {
								Y && Y?.url?.go();
							},
						})
					),
					E = (C, { loaded: { controller: S } }) => (0, t.Y)(L, { args: C, controller: S });
				(E.loaders = [async () => (await l.search(), { controller: l })]), (E.args = { label: 'Sort By' });
				const O = (C, { loaded: { controller: S } }) => (0, t.Y)(L, { args: C, controller: S });
				(O.loaders = [async () => (await l.search(), { controller: l })]), (O.args = { label: 'Sort By', native: !0 });
				const D = (C) => {
					const S = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(u.l, { ...C, options: S });
				};
				(D.args = { label: 'Layout' }),
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
								...O.parameters?.docs?.source,
							},
						},
					}),
					(D.parameters = {
						...D.parameters,
						docs: {
							...D.parameters?.docs,
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
								...D.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(w, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					u = e.n(r),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/hooks/useA11y.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					D = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(C);
				const K = ({ native: Q, color: d, backgroundColor: p, borderColor: y, theme: h }) =>
						Q
							? (0, _.AH)({})
							: (0, _.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: d || h?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: p || '#fff',
									border: `1px solid ${y || d || h?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					Y = (0, a.PA)((Q) => {
						const d = (0, v.u)(),
							y = { disableA11y: !1, treePath: (0, o.LU)() },
							h = (0, L.v6)('button', d, y, Q),
							{
								content: b,
								children: g,
								disabled: F,
								native: J,
								onClick: H,
								disableA11y: V,
								disableStyles: de,
								className: I,
								internalClassName: $,
								icon: A,
								lang: ne,
								treePath: j,
								style: k,
								styleScript: W,
								themeStyleScript: se,
								...z
							} = h,
							{ overrideElement: R, shouldRenderDefault: q } = (0, M._)('button', h);
						if (!q) return R;
						const le = { icon: { internalClassName: 'ss__button__icon', ...(0, l.s)({ disableStyles: de }), theme: h?.theme, treePath: j } },
							N = {
								...(0, E.Z)(h, K),
								className: u()('ss__button', { 'ss__button--native': J, 'ss__button--disabled': F }, I, $),
								disabled: F,
								onClick: (Z) => !F && H && H(Z),
								...z,
							},
							X = { ref: (Z) => (0, s.iy)(Z) },
							re = {},
							ae = S()(re, ne || {}),
							U = (0, D.u)(ae, {}, { activeBreakpoint: d?.activeBreakpoint }),
							te = !!z.dangerouslySetInnerHTML;
						return b || g || A || ne?.button?.value || te
							? (0, t.Y)(n._, {
									children: J
										? (0, t.FD)('button', {
												...N,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...U.button?.all,
														children: [(0, P.Y)(b, { treePath: j }), (0, P.Y)(g, { treePath: j })],
													}),
													A && (0, t.Y)(O.I, { ...le.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												],
										  })
										: (0, t.FD)('div', {
												...(V ? {} : X),
												role: 'button',
												'aria-disabled': F,
												...N,
												...U.button?.attributes,
												children: [
													b || g || U.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...U.button?.value,
																children: [(0, P.Y)(b, { treePath: j }), (0, P.Y)(g, { treePath: j })],
														  })
														: void 0,
													A && (0, t.Y)(O.I, { ...le.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												],
										  }),
							  })
							: null;
					});
				e.d(c, ['$', 0, Y]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(w, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/compat/dist/compat.module.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					n = e.n(a),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useClickOutside.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					E = e('./components/src/utilities/cloneWithProps.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useA11y.tsx');
				const C = ({ disableOverlay: K }) =>
						(0, u.AH)({
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
					S = (0, v.PA)((K) => {
						const Y = (0, s.u)(),
							d = { startOpen: !1, disableA11y: !1, treePath: (0, P.LU)() },
							p = (0, O.v6)('dropdown', Y, d, K),
							{
								button: y,
								content: h,
								children: b,
								disabled: g,
								open: F,
								toggleOnHover: J,
								onMouseEnter: H,
								onMouseLeave: V,
								disableClick: de,
								onClick: I,
								onToggle: $,
								focusTrapContent: A,
								startOpen: ne,
								disableClickOutside: j,
								disableA11y: k,
								className: W,
								internalClassName: se,
								treePath: z,
								usePortal: R,
							} = p,
							{ overrideElement: q, shouldRenderDefault: le } = (0, L._)('dropdown', p);
						if (!le) return q;
						let x, N;
						const X = F === void 0;
						X ? ([x, N] = (0, r.J0)(ne)) : (x = F);
						const [re, ae] = (0, r.J0)(!1),
							U = (0, r.li)(null),
							te = (0, r.li)(null),
							[Z, ie] = (0, r.J0)({ top: 0, left: 0, width: 0 });
						let B;
						j ||
							(B = (0, l.L)((i) => {
								(R && te.current && te.current.contains(i.target)) || (x && (g || (X && N && N(!1), $ && $(i, !1))));
							})),
							(0, r.vJ)(() => {
								if (R && x) {
									const i = () => {
										if (U.current) {
											const f = U.current.getBoundingClientRect();
											ie({ top: f.bottom + window.scrollY, left: f.left + window.scrollX, width: f.width });
										}
									};
									return (
										i(),
										window.addEventListener('resize', i),
										window.addEventListener('scroll', i, !0),
										() => {
											window.removeEventListener('resize', i), window.removeEventListener('scroll', i, !0);
										}
									);
								}
							}, [R, x]);
						const G = (i, f) => {
								X &&
									N &&
									N((pe) => {
										const me = f ?? !pe;
										return me != pe && $ && $(i, me), me;
									});
							},
							ue = (0, D.Z)(p, C),
							ee = {
								onMouseEnter:
									(J || H) &&
									((i) => {
										re || (J && !g && G(i, !0), H && H(i));
									}),
								onMouseLeave:
									(J || V) &&
									((i) => {
										re || (J && !g && G(i, !1), V && V(i));
									}),
							},
							oe = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (i) => {
									(te.current = i),
										k ||
											(0, M.iy)(i, 0, !!A, (f) => {
												X ? G(f) : I && I(f);
											});
								},
								children: [(0, E.Y)(h, { open: x, toggleOpen: G, treePath: z }), (0, E.Y)(b, { open: x, toggleOpen: G, treePath: z })],
							});
						return (0, t.Y)(o._, {
							children: (0, t.FD)('div', {
								...ue,
								className: n()('ss__dropdown', { 'ss__dropdown--open': x }, W, se),
								ref: B,
								...ee,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (i) => {
											(U.current = i), k || (0, M.iy)(i);
										},
										'aria-expanded': x,
										role: 'button',
										onTouchStart: () => {
											ae(!0);
										},
										onClick: (i) => {
											!g && !de && (G(i), I && I(i)),
												setTimeout(() => {
													ae(!1);
												}, 300);
										},
										children: (0, E.Y)(y, { open: x, toggleOpen: G, treePath: z }),
									}),
									R
										? (h || b) &&
										  (0, _.createPortal)(
												(0, t.Y)('div', {
													className: n()('ss__dropdown__portal', W, se, { 'ss__dropdown__portal--open': x }),
													css: ue.css,
													style: { position: 'absolute', top: Z.top, left: Z.left, width: Z.width, zIndex: 9999, pointerEvents: x ? 'auto' : 'none' },
													children: oe,
												}),
												document.body
										  )
										: (h || b) && oe,
								],
							}),
						});
					});
				e.d(c, ['m', 0, S]);
			},
			'./components/src/components/Molecules/Select/Select.tsx'(w, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					n = e.n(a),
					v = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					O = e('./components/src/components/Atoms/Button/Button.tsx'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = e('./components/src/hooks/useA11y.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(K);
				const Q = ({ color: p, backgroundColor: y, borderColor: h, theme: b, native: g }) =>
						g
							? (0, u.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, u.AH)({
									display: 'inline-flex',
									color: p,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: y || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${h || p || b?.variables?.colors?.primary || '#333'}`,
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
					d = (0, r.PA)((p) => {
						const y = (0, o.u)(),
							b = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, s.LU)() },
							g = (0, l.v6)('select', y, b, p),
							{
								backgroundColor: F,
								borderColor: J,
								color: H,
								clearSelection: V,
								disableClickOutside: de,
								disabled: I,
								hideLabel: $,
								hideLabelOnSelection: A,
								iconColor: ne,
								iconClose: j,
								iconOpen: k,
								label: W,
								native: se,
								onSelect: z,
								selected: R,
								separator: q,
								startOpen: le,
								hideIcon: x,
								hideOptionIcons: N,
								hideOptionLabels: X,
								hideSelection: re,
								stayOpenOnSelection: ae,
								disableStyles: U,
								className: te,
								internalClassName: Z,
								treePath: ie,
							} = g;
						let { options: B } = g;
						const { overrideElement: G, shouldRenderDefault: ue } = (0, S._)('select', g);
						if (!ue) return G;
						const ee = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, P.s)({ disableStyles: U, disabled: I }),
									theme: g?.theme,
									treePath: ie,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, P.s)({ disableStyles: U, disabled: I, color: H, backgroundColor: F, borderColor: J }),
									theme: g?.theme,
									treePath: ie,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, P.s)({ disableStyles: U, color: ne || H, size: '12px' }),
									theme: g?.theme,
									treePath: ie,
								},
							},
							[oe, i] = (0, _.J0)(!!le),
							[f, pe] = (0, _.J0)(R),
							[me] = (0, _.J0)(R);
						try {
							if (R) {
								const m = JSON.stringify(me),
									T = JSON.stringify(R),
									ce = JSON.stringify(f);
								m !== T && T !== ce && pe(R);
							}
						} catch {}
						f && V && (B = [{ label: V, value: '' }, ...B]);
						const ye = (m, T) => {
								T != f && z && z(m, T), pe(T), !ae && i(!1);
							},
							fe = (0, L.Z)(g, Q),
							_e = B.filter((m) => f?.value === m.value),
							Ee = {
								buttonLabel: {
									value: W,
									attributes: {
										'aria-label': `${W} dropdown, ${B.length} options ${_e.length ? `, Currently selected option is ${_e[0].label}` : ''}`,
									},
								},
							},
							be = Y()(Ee, g.lang || {}),
							he = (0, C.u)(be, { options: B, selectedOptions: _e, label: W, open: oe }, { activeBreakpoint: y?.activeBreakpoint });
						return typeof B == 'object' && B?.length
							? (0, t.Y)(v._, {
									children: (0, t.Y)('div', {
										...fe,
										className: n()('ss__select', { 'ss__select--native': se }, { 'ss__select--disabled': I }, te, Z),
										children: se
											? (0, t.FD)(t.FK, {
													children: [
														(W || be.buttonLabel.value) &&
															!$ &&
															!A &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...he.buttonLabel?.all }),
																	q && (0, t.Y)('span', { className: 'ss__select__label__separator', children: q }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: I || void 0,
															onChange: (m) => {
																const T = m.target,
																	ce = T.options[T.selectedIndex],
																	ve = B.filter((ge, Oe) => ge.label == ce.text && (ge.value == ce.value || ge.value == Oe)).pop();
																!I && ye(m, ve);
															},
															children: [
																!f && V && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: V }),
																B.map((m, T) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: f?.value === m.value,
																		value: m.value ?? T,
																		children: m.label,
																	})
																),
															],
														}),
														!x && (0, t.Y)(D.I, { ...ee.icon, name: 'open', ...(typeof k == 'string' ? { icon: k } : k) }),
													],
											  })
											: (0, t.Y)(E.m, {
													...ee.dropdown,
													disableClickOutside: de,
													open: oe,
													onToggle: (m, T) => i((ce) => T ?? !ce),
													onClick: () => i((m) => !m),
													disableA11y: !0,
													button: (0, t.FD)(O.$, {
														...ee.button,
														children: [
															(W || be.buttonLabel.value) &&
																!A &&
																!$ &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...he.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...he.buttonLabel.value }),
																		q && f && (0, t.Y)('span', { className: 'ss__select__label__separator', children: q }),
																	],
																}),
															f &&
																!re &&
																(0, t.FD)(t.FK, {
																	children: [
																		f.icon &&
																			!N &&
																			(0, t.Y)(D.I, {
																				...ee.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof f.icon == 'string' ? { icon: f.icon } : f.icon),
																			}),
																		!X && (0, t.Y)('span', { className: 'ss__select__selection', children: f?.label }),
																	],
																}),
															!x &&
																(0, t.Y)(D.I, {
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
														ref: (m) => (0, M.iy)(m, -1, !0, () => i(!1)),
														children: B.map((m) =>
															(0, t.FD)('li', {
																ref: (T) => (0, M.iy)(T),
																'aria-disabled': m.disabled,
																title: m.label,
																className: n()('ss__select__select__option', { 'ss__select__select__option--selected': f?.value === m.value }),
																onClick: (T) => !I && ye(T, m),
																role: 'option',
																'aria-selected': f?.value === m.value,
																children: [
																	m.icon &&
																		!N &&
																		(0, t.Y)(D.I, {
																			...ee.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${ie} dropdown`,
																			...(typeof m.icon == 'string' ? { icon: m.icon } : m.icon),
																		}),
																	!X && (0, t.Y)('span', { children: m.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
				e.d(c, ['l', 0, d]);
			},
			'./components/src/hooks/useA11y.tsx'(w, c, e) {
				'use strict';
				e.d(c, { iy: () => a });
				const t = 9,
					_ = 27,
					r = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(n, v, o, s) {
					const P = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${P}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = P),
							(l.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					n &&
						!n.attributes?.[r] &&
						(n.setAttribute(r, !0),
						n.setAttribute('tabIndex', `${v || 0}`),
						n.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && n.click();
						}),
						o &&
							n.addEventListener('keydown', function (l) {
								const L = n.querySelectorAll(u),
									E = L[0],
									O = L[L.length - 1];
								if (l.keyCode == _) {
									n.focus(), s && s(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === t) &&
									(l.shiftKey
										? document.activeElement === E && (O.focus(), l.preventDefault())
										: document.activeElement === O && (E.focus(), l.preventDefault()));
							}));
				}
				e.d(c, ['DH', 0, u, 'aZ', 0, r]);
			},
			'./components/src/hooks/useClickOutside.tsx'(w, c, e) {
				'use strict';
				e.d(c, { L: () => _ });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function _(r) {
					const u = (0, t.li)(),
						a = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							u.current = r;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', n), () => document.removeEventListener('click', n);
							function n(v) {
								a.current && u.current && !a.current.contains(v.target) && u.current(v);
							}
						}, []),
						a
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(w, c, e) {
				'use strict';
				const t = (_, r, u) => {
					const a = u ? { ...r, ...u } : r,
						n = {};
					return (
						Object.keys(_).forEach((v) => {
							const o = _ && _[v],
								s = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (s.value = { 'ss-lang': v, dangerouslySetInnerHTML: { __html: o.value(a) } })
										: (s.value = { 'ss-lang': v, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((s.attributes = { 'ss-lang': v }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = o.attributes['aria-label'](a))
											: (s.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](a))
											: (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (s.attributes.title = o.attributes.title(a))
											: (s.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (s.attributes.alt = o.attributes.alt(a)) : (s.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = o.attributes.placeholder(a))
											: (s.attributes.placeholder = o.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': v })),
								(n[v] = s);
						}),
						n
					);
				};
				e.d(c, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(w, c, e) {
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
				e.d(c, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(w, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(_) {
					const r = {};
					return (
						Object.keys(_).map((u) => {
							_[u] !== void 0 && (r[u] = _[u]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/snapify.ts'(w, c, e) {
				'use strict';
				e.d(c, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					L = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					O = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const M = {},
					C = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(p) {
						const y = p.id;
						if (M[y]) return M[y];
						const h = (M[y] = Y({ client: C, controller: p }));
						return (
							h.on('afterStore', async ({ controller: b }, g) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await g();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(p) {
						const y = p.id;
						if (M[y]) return M[y];
						const h = (M[y] = Q({ client: C, controller: p }));
						return (
							h.on('afterStore', async ({ controller: b }, g) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await g();
							}),
							h.init(),
							h
						);
					}
					static search(p) {
						const y = p.id;
						if (M[y]) return M[y];
						const h = (M[y] = K({ client: C, controller: p }));
						return (
							h.on('afterStore', async ({ controller: b }, g) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await g();
							}),
							h.init(),
							h
						);
					}
				}
				function K(d) {
					const p = new s.V(new l.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), P.X);
					return new _.Tp(d.controller, {
						client: new a.K(d.client.globals, d.client.config),
						store: new v.U(d.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new L.E(),
						profiler: new E.U(),
						logger: new O.V(),
						tracker: new D.J(d.client.globals),
					});
				}
				function Y(d) {
					const p = new s.V(new l.E(), P.X).detach(!0);
					return new u.c(d.controller, {
						client: new a.K(d.client.globals, d.client.config),
						store: new o.t(d.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new L.E(),
						profiler: new E.U(),
						logger: new O.V(),
						tracker: new D.J(d.client.globals),
					});
				}
				function Q(d) {
					const p = new s.V(new l.E(), P.X).detach();
					return new r.Z(d.controller, {
						client: new a.K(d.client.globals, d.client.config),
						store: new n.Y(d.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new L.E(),
						profiler: new E.U(),
						logger: new O.V(),
						tracker: new D.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					u = (a) => {
						const n = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								n.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(n.current);
							}, [a.className, a.children, n]),
							(0, t.Y)('code', { ...a, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, u]);
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function c(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (w.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Select-Select-stories.01199439.iframe.bundle.js.map
