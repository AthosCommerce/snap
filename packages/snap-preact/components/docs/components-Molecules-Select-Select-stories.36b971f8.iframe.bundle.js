(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(w, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => E, IconOptions: () => P, Native: () => g, __namedExportsOrder: () => v, default: () => S });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/Select/Select.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts'),
					K = e('./components/src/components/Atoms/Icon/paths.tsx');
				const L =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```tsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```tsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```tsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```tsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```tsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```tsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```tsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```tsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```tsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```tsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```tsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```tsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```tsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```tsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n",
					S = {
						title: 'Molecules/Select',
						component: d.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: i.Z } }, children: L }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(f) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(f, {}) })],
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
								options: [...Object.keys(K.c)],
								control: { type: 'select' },
							},
							iconClose: {
								defaultValue: 'angle-up',
								description: 'Icon for when select is open',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(K.c)],
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
					n = r.p.search({ id: 'Select', globals: { siteId: 'atkzs2' } }),
					C = (0, p.PA)(({ args: f, controller: T }) =>
						(0, t.Y)(d.l, {
							...f,
							options: T?.store?.sorting?.options,
							selected: T?.store?.sorting?.current,
							onSelect: (q, B) => {
								B && B?.url?.go();
							},
						})
					),
					E = (f, { loaded: { controller: T } }) => (0, t.Y)(C, { args: f, controller: T });
				(E.loaders = [async () => (await n.search(), { controller: n })]), (E.args = { label: 'Sort By' });
				const g = (f, { loaded: { controller: T } }) => (0, t.Y)(C, { args: f, controller: T });
				(g.loaders = [async () => (await n.search(), { controller: n })]), (g.args = { label: 'Sort By', native: !0 });
				const P = (f) => {
					const T = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(d.l, { ...f, options: T });
				};
				(P.args = { label: 'Layout' }),
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
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					}),
					(P.parameters = {
						...P.parameters,
						docs: {
							...P.parameters?.docs,
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
								...P.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(w, c, e) {
				'use strict';
				e.d(c, { $: () => te });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					d = e.n(s),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/snap.tsx'),
					L = e('./components/src/providers/treePath.tsx'),
					S = e('./components/src/hooks/useA11y.tsx'),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('./components/src/hooks/useLang.tsx'),
					f = e('./components/src/hooks/useComponent.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(T);
				const B = ({ native: m, color: u, backgroundColor: _, borderColor: y, theme: b }) =>
						m
							? (0, p.AH)({})
							: (0, p.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: u || b?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: _ || '#fff',
									border: `1px solid ${y || u || b?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					te = (0, i.PA)((m) => {
						const u = (0, r.u)(),
							_ = (0, K.uk)(),
							b = { disableA11y: !1, treePath: (0, L.LU)() },
							D = (0, E.v6)('button', u, b, m),
							{
								content: W,
								children: O,
								disabled: z,
								native: X,
								onClick: Z,
								disableA11y: F,
								disableStyles: de,
								className: U,
								internalClassName: G,
								icon: A,
								lang: re,
								treePath: Y,
								customComponent: j,
								style: V,
								styleScript: ae,
								themeStyleScript: oe,
								...N
							} = D;
						if (j) {
							const I = (0, f.x)(_?.templates?.library.import.component.button || {}, j);
							if (I) return (0, t.Y)(I, { ...D });
						}
						const J = { icon: { internalClassName: 'ss__button__icon', ...(0, C.s)({ disableStyles: de }), theme: D?.theme, treePath: Y } },
							k = {
								...(0, g.Z)(D, B),
								className: d()('ss__button', { 'ss__button--native': X, 'ss__button--disabled': z }, U, G),
								disabled: z,
								onClick: (I) => !z && Z && Z(I),
								...N,
							},
							Q = { ref: (I) => (0, S.iy)(I) },
							ne = {},
							ie = q()(ne, re || {}),
							H = (0, v.u)(ie, {});
						return W || O || A || re?.button?.value
							? (0, t.Y)(o._, {
									children: X
										? (0, t.FD)('button', {
												...k,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...H.button?.all,
														children: [(0, n.Y)(W, { treePath: Y }), (0, n.Y)(O, { treePath: Y })],
													}),
													A && (0, t.Y)(P.I, { ...J.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												],
										  })
										: (0, t.FD)('div', {
												...(F ? {} : Q),
												role: 'button',
												'aria-disabled': z,
												...k,
												...H.button?.attributes,
												children: [
													W || O || H.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...H.button?.value,
																children: [(0, n.Y)(W, { treePath: Y }), (0, n.Y)(O, { treePath: Y })],
														  })
														: void 0,
													A && (0, t.Y)(P.I, { ...J.icon, ...(typeof A == 'string' ? { icon: A } : A) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(w, c, e) {
				'use strict';
				e.d(c, { m: () => q });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/compat/dist/compat.module.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					K = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/snap.tsx'),
					n = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useClickOutside.tsx'),
					E = e('./components/src/hooks/useComponent.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useA11y.tsx');
				const T = ({ disableOverlay: B }) =>
						(0, d.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: B ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${B ? 'default' : 'pointer'}` },
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
					q = (0, r.PA)((B) => {
						const te = (0, L.u)(),
							m = (0, S.uk)(),
							_ = { startOpen: !1, disableA11y: !1, treePath: (0, n.LU)() },
							y = (0, P.v6)('dropdown', te, _, B),
							{
								button: b,
								content: D,
								children: W,
								disabled: O,
								open: z,
								toggleOnHover: X,
								onMouseEnter: Z,
								onMouseLeave: F,
								disableClick: de,
								onClick: U,
								onToggle: G,
								focusTrapContent: A,
								startOpen: re,
								disableClickOutside: Y,
								disableA11y: j,
								className: V,
								internalClassName: ae,
								treePath: oe,
								usePortal: N,
								customComponent: J,
							} = y;
						if (J) {
							const l = (0, E.x)(m?.templates?.library.import.component.dropdown || {}, J);
							if (l) return (0, t.Y)(l, { ...y });
						}
						let x, k;
						const Q = z === void 0;
						Q ? ([x, k] = (0, s.J0)(re)) : (x = z);
						const [ne, ie] = (0, s.J0)(!1),
							H = (0, s.li)(null),
							I = (0, s.li)(null),
							[pe, _e] = (0, s.J0)({ top: 0, left: 0, width: 0 });
						let se;
						Y ||
							(se = (0, C.L)((l) => {
								(N && I.current && I.current.contains(l.target)) || (x && (O || (Q && k && k(!1), G && G(l, !1))));
							})),
							(0, s.vJ)(() => {
								if (N && x) {
									const l = () => {
										if (H.current) {
											const h = H.current.getBoundingClientRect();
											_e({ top: h.bottom + window.scrollY, left: h.left + window.scrollX, width: h.width });
										}
									};
									return (
										l(),
										window.addEventListener('resize', l),
										window.addEventListener('scroll', l, !0),
										() => {
											window.removeEventListener('resize', l), window.removeEventListener('scroll', l, !0);
										}
									);
								}
							}, [N, x]);
						const $ = (l, h) => {
								Q &&
									k &&
									k((me) => {
										const ue = h ?? !me;
										return ue != me && G && G(l, ue), ue;
									});
							},
							R = (0, v.Z)(y, T),
							ee = {
								onMouseEnter:
									(X || Z) &&
									((l) => {
										ne || (X && !O && $(l, !0), Z && Z(l));
									}),
								onMouseLeave:
									(X || F) &&
									((l) => {
										ne || (X && !O && $(l, !1), F && F(l));
									}),
							},
							le = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (l) => {
									(I.current = l),
										j ||
											(0, f.iy)(l, 0, !!A, (h) => {
												Q ? $(h) : U && U(h);
											});
								},
								children: [(0, g.Y)(D, { open: x, toggleOpen: $, treePath: oe }), (0, g.Y)(W, { open: x, toggleOpen: $, treePath: oe })],
							});
						return (0, t.Y)(K._, {
							children: (0, t.FD)('div', {
								...R,
								className: o()('ss__dropdown', { 'ss__dropdown--open': x }, V, ae),
								ref: se,
								...ee,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (l) => {
											(H.current = l), j || (0, f.iy)(l);
										},
										'aria-expanded': x,
										role: 'button',
										onTouchStart: () => {
											ie(!0);
										},
										onClick: (l) => {
											!O && !de && ($(l), U && U(l)),
												setTimeout(() => {
													ie(!1);
												}, 300);
										},
										children: (0, g.Y)(b, { open: x, toggleOpen: $, treePath: oe }),
									}),
									N
										? (D || W) &&
										  (0, p.createPortal)(
												(0, t.Y)('div', {
													className: o()('ss__dropdown__portal', V, ae, { 'ss__dropdown__portal--open': x }),
													css: R.css,
													style: {
														position: 'absolute',
														top: pe.top,
														left: pe.left,
														width: pe.width,
														zIndex: 9999,
														pointerEvents: x ? 'auto' : 'none',
													},
													children: le,
												}),
												document.body
										  )
										: (D || W) && le,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Select/Select.tsx'(w, c, e) {
				'use strict';
				e.d(c, { l: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					r = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					S = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					P = e('./components/src/components/Atoms/Button/Button.tsx'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					f = e('./components/src/hooks/useA11y.tsx'),
					T = e('./components/src/hooks/useLang.tsx'),
					q = e('./components/src/hooks/useComponent.tsx'),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					te = e.n(B);
				const m = ({ color: _, backgroundColor: y, borderColor: b, theme: D, native: W }) =>
						W
							? (0, d.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, d.AH)({
									display: 'inline-flex',
									color: _,
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
										border: `1px solid ${b || _ || D?.variables?.colors?.primary || '#333'}`,
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
					u = (0, s.PA)((_) => {
						const y = (0, K.u)(),
							b = (0, L.uk)(),
							W = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, S.LU)() },
							O = (0, C.v6)('select', y, W, _),
							{
								backgroundColor: z,
								borderColor: X,
								color: Z,
								clearSelection: F,
								disableClickOutside: de,
								disabled: U,
								hideLabel: G,
								hideLabelOnSelection: A,
								iconColor: re,
								iconClose: Y,
								iconOpen: j,
								label: V,
								native: ae,
								onSelect: oe,
								selected: N,
								separator: J,
								startOpen: x,
								hideIcon: k,
								hideOptionIcons: Q,
								hideOptionLabels: ne,
								hideSelection: ie,
								stayOpenOnSelection: H,
								disableStyles: I,
								className: pe,
								internalClassName: _e,
								treePath: se,
								customComponent: $,
							} = O;
						let { options: R } = O;
						if ($) {
							const a = (0, q.x)(b?.templates?.library.import.component.select || {}, $);
							if (a) return (0, t.Y)(a, { ...O });
						}
						const ee = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, n.s)({ disableStyles: I, disabled: U }),
									theme: O?.theme,
									treePath: se,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, n.s)({ disableStyles: I, disabled: U, color: Z, backgroundColor: z, borderColor: X }),
									theme: O?.theme,
									treePath: se,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, n.s)({ disableStyles: I, color: re || Z, size: '12px' }),
									theme: O?.theme,
									treePath: se,
								},
							},
							[le, l] = (0, p.J0)(!!x),
							[h, me] = (0, p.J0)(N),
							[ue] = (0, p.J0)(N);
						try {
							if (N) {
								const a = JSON.stringify(ue),
									M = JSON.stringify(N),
									ce = JSON.stringify(h);
								a !== M && M !== ce && me(N);
							}
						} catch {}
						h && F && (R = [{ label: F, value: '' }, ...R]);
						const fe = (a, M) => {
								M != h && oe && oe(a, M), me(M), !H && l(!1);
							},
							Ee = (0, E.Z)(O, m),
							be = R.filter((a) => h?.value === a.value),
							ve = {
								buttonLabel: {
									value: V,
									attributes: {
										'aria-label': `${V} dropdown, ${R.length} options ${be.length ? `, Currently selected option is ${be[0].label}` : ''}`,
									},
								},
							},
							he = te()(ve, O.lang || {}),
							ge = (0, T.u)(he, { options: R, selectedOptions: be, label: V, open: le });
						return typeof R == 'object' && R?.length
							? (0, t.Y)(r._, {
									children: (0, t.Y)('div', {
										...Ee,
										className: o()('ss__select', { 'ss__select--native': ae }, { 'ss__select--disabled': U }, pe, _e),
										children: ae
											? (0, t.FD)(t.FK, {
													children: [
														(V || he.buttonLabel.value) &&
															!G &&
															!A &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...ge.buttonLabel?.all }),
																	J && (0, t.Y)('span', { className: 'ss__select__label__separator', children: J }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: U || void 0,
															onChange: (a) => {
																const M = a.target,
																	ce = M.options[M.selectedIndex],
																	Oe = R.filter((ye, Pe) => ye.label == ce.text && (ye.value == ce.value || ye.value == Pe)).pop();
																!U && fe(a, Oe);
															},
															children: [
																!h && F && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: F }),
																R.map((a, M) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: h?.value === a.value,
																		value: a.value ?? M,
																		children: a.label,
																	})
																),
															],
														}),
														!k && (0, t.Y)(v.I, { ...ee.icon, name: 'open', ...(typeof j == 'string' ? { icon: j } : j) }),
													],
											  })
											: (0, t.Y)(g.m, {
													...ee.dropdown,
													disableClickOutside: de,
													open: le,
													onToggle: (a, M) => l((ce) => M ?? !ce),
													onClick: () => l((a) => !a),
													disableA11y: !0,
													button: (0, t.FD)(P.$, {
														...ee.button,
														children: [
															(V || he.buttonLabel.value) &&
																!A &&
																!G &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...ge.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...ge.buttonLabel.value }),
																		J && h && (0, t.Y)('span', { className: 'ss__select__label__separator', children: J }),
																	],
																}),
															h &&
																!ie &&
																(0, t.FD)(t.FK, {
																	children: [
																		h.icon &&
																			!Q &&
																			(0, t.Y)(v.I, {
																				...ee.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof h.icon == 'string' ? { icon: h.icon } : h.icon),
																			}),
																		!ne && (0, t.Y)('span', { className: 'ss__select__selection', children: h?.label }),
																	],
																}),
															!k &&
																(0, t.Y)(v.I, {
																	...ee.icon,
																	name: le ? 'open' : 'close',
																	...(le ? { ...(typeof Y == 'string' ? { icon: Y } : Y) } : { ...(typeof j == 'string' ? { icon: j } : j) }),
																}),
														],
													}),
													children: (0, t.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof V == 'string' ? V : '',
														ref: (a) => (0, f.iy)(a, -1, !0, () => l(!1)),
														children: R.map((a) =>
															(0, t.FD)('li', {
																ref: (M) => (0, f.iy)(M),
																'aria-disabled': a.disabled,
																title: a.label,
																className: o()('ss__select__select__option', { 'ss__select__select__option--selected': h?.value === a.value }),
																onClick: (M) => !U && fe(M, a),
																role: 'option',
																'aria-selected': h?.value === a.value,
																children: [
																	a.icon &&
																		!Q &&
																		(0, t.Y)(v.I, {
																			...ee.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${se} dropdown`,
																			...(typeof a.icon == 'string' ? { icon: a.icon } : a.icon),
																		}),
																	!ne && (0, t.Y)('span', { children: a.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(w, c, e) {
				'use strict';
				e.d(c, { DH: () => d, aZ: () => s, iy: () => i });
				const t = 9,
					p = 27,
					s = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(o, r, K, L) {
					const S = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${S}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = S),
							(n.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					o &&
						!o.attributes?.[s] &&
						(o.setAttribute(s, !0),
						o.setAttribute('tabIndex', `${r || 0}`),
						o.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && o.click();
						}),
						K &&
							o.addEventListener('keydown', function (n) {
								const C = o.querySelectorAll(d),
									E = C[0],
									g = C[C.length - 1];
								if (n.keyCode == p) {
									o.focus(), L && L(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === t) &&
									(n.shiftKey
										? document.activeElement === E && (g.focus(), n.preventDefault())
										: document.activeElement === g && (E.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(w, c, e) {
				'use strict';
				e.d(c, { L: () => p });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function p(s) {
					const d = (0, t.li)(),
						i = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							d.current = s;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', o), () => document.removeEventListener('click', o);
							function o(r) {
								i.current && d.current && !i.current.contains(r.target) && d.current(r);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(w, c, e) {
				'use strict';
				e.d(c, { u: () => t });
				const t = (p, s) => {
					const d = {};
					return (
						Object.keys(p).forEach((i) => {
							const o = p && p[i],
								r = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (r.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: o.value(s) } })
										: (r.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((r.attributes = { 'ss-lang': i }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = o.attributes['aria-label'](s))
											: (r.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](s))
											: (r.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (r.attributes.title = o.attributes.title(s))
											: (r.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (r.attributes.alt = o.attributes.alt(s)) : (r.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = o.attributes.placeholder(s))
											: (r.attributes.placeholder = o.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': i })),
								(d[i] = r);
						}),
						d
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(w, c, e) {
				'use strict';
				e.d(c, { F: () => t });
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
			},
			'./components/src/utilities/defined.ts'(w, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(p) {
					const s = {};
					return (
						Object.keys(p).map((d) => {
							p[d] !== void 0 && (s[d] = p[d]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(w, c, e) {
				'use strict';
				e.d(c, { p: () => T });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					K = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					C = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					f = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(u) {
						const _ = u.id;
						if (v[_]) return v[_];
						const y = (v[_] = B({ client: f, controller: u }));
						return (
							y.on('afterStore', async ({ controller: b }, D) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await D();
							}),
							y.init(),
							y
						);
					}
					static autocomplete(u) {
						const _ = u.id;
						if (v[_]) return v[_];
						const y = (v[_] = te({ client: f, controller: u }));
						return (
							y.on('afterStore', async ({ controller: b }, D) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await D();
							}),
							y.init(),
							y
						);
					}
					static search(u) {
						const _ = u.id;
						if (v[_]) return v[_];
						const y = (v[_] = q({ client: f, controller: u }));
						return (
							y.on('afterStore', async ({ controller: b }, D) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await D();
							}),
							y.init(),
							y
						);
					}
				}
				function q(m) {
					const u = new L.V(new n.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), S.X);
					return new p.Tp(m.controller, {
						client: new i.K(m.client.globals, m.client.config),
						store: new r.U(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new C.E(),
						profiler: new E.U(),
						logger: new g.V(),
						tracker: new P.J(m.client.globals),
					});
				}
				function B(m) {
					const u = new L.V(new n.E(), S.X).detach(!0);
					return new d.c(m.controller, {
						client: new i.K(m.client.globals, m.client.config),
						store: new K.t(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new C.E(),
						profiler: new E.U(),
						logger: new g.V(),
						tracker: new P.J(m.client.globals),
					});
				}
				function te(m) {
					const u = new L.V(new n.E(), S.X).detach();
					return new s.Z(m.controller, {
						client: new i.K(m.client.globals, m.client.config),
						store: new o.Y(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new C.E(),
						profiler: new E.U(),
						logger: new g.V(),
						tracker: new P.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, c, e) {
				'use strict';
				e.d(c, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					d = (i) => {
						const o = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								o.current && i.className?.includes('lang-') && !i.className?.includes(s) && window?.Prism?.highlightElement(o.current);
							}, [i.className, i.children, o]),
							(0, t.Y)('code', { ...i, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function c(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (w.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Select-Select-stories.36b971f8.iframe.bundle.js.map
