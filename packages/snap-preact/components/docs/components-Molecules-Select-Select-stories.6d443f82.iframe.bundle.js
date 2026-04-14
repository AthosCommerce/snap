(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7421],
		{
			'./components/src/components/Molecules/Select/Select.stories.tsx'(w, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => E, IconOptions: () => D, Native: () => b, __namedExportsOrder: () => f, default: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/Select/Select.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts'),
					W = e('./components/src/components/Atoms/Icon/paths.tsx');
				const S =
						"# Select\n\nRenders a native or custom select dropdown.\n\n## Sub-components\n- Button\n- Dropdown \n- Icon\n\n## Usage\n```jsx\nimport { Select } from '@athoscommerce/snap-preact/components';\n```\n\n### options\nThe required `options` prop specifies an array of Option Objects to be rendered.\n\n```jsx\n<Select options={controller.store.sorting.options} />\n```\n\n#### Option Object\n\n```js\n{\n	label: 'Price',\n	value: 'asc'\n}\n```\n\n### native\nThe `native` prop will use a native html `<select>` element.\n\n```jsx\n<Select options={controller.store.sorting.options} native={true} />\n```\n\n### disabled\nThe `disabled` prop will disable the select from being toggled or invoking the `onSelect` callback.\n\n```jsx\n<Select options={controller.store.sorting.options} disabled={true} />\n```\n\n### label\nThe `label` prop specifies the label for this select. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} />\n```\n\n### hideLabel\nThe `hideLabel` prop hides the select header label.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} hideLabel={true} />\n```\n\n### separator\nThe `separator` prop is rendered between the `label` prop and the select dropdown. This can be a string or JSX element.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} />\n```\n\n### selected\nThe `selected` prop specifies the currently selected Option object. Specifying this prop relies on external state management.\n\n```jsx\n<Select options={controller.store.sorting.options} selected={controller.store.sorting.options[0]} />\n```\n\n### startOpen\nThe `startOpen` prop will render the dropdown in an open state on the initial render.\n\n```jsx\n<Select options={controller.store.sorting.options} startOpen={true} />\n```\n\n### stayOpenOnSelection\nThe `stayOpenOnSelection` prop will not close the dropdown upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} stayOpenOnSelection={true} />\n```\n\n### hideLabelOnSelection\nThe `hideLabelOnSelection` prop will prevent the `label` and `separator` from being rendered upon making a selection.\n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideLabelOnSelection={true} />\n```\n\n### hideSelection\nThe `hideSelection` prop will prevent the current selection from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideSelection={true} />\n```\n\n### hideIcon\nThe `hideIcon` prop will prevent the icon from rendering in the dropdown button (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideIcon={true} />\n```\n\n### hideOptionIcons\nThe `hideOptionIcons` prop will prevent icons from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionIcons={true} />\n```\n\n### hideOptionLabels\nThe `hideOptionLabels` prop will prevent labels from rendering in the dropdown options (non-native only). \n\n```jsx\n<Select options={controller.store.sorting.options} label={'Sort By'} separator={': '} hideOptionLabels={true} />\n```\n\n### clearSelection\nThe `clearSelection` prop accepts a string value to display as the option that will clear the current selection.\n\n```jsx\n<Select options={controller.store.sorting.options} clearSelection={'clear'} />\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Select options={controller.store.sorting.options} disableClickOutside={true} />\n```\n\n### color\nThe `color` prop sets the dropdown border, text, button, and icon colors.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} />\n```\n\n### borderColor\nThe `borderColor` prop overwrites the `color` prop for the dropdown and button border color.\n\n```jsx\n<Select options={controller.store.sorting.options} color={'#222222'} borderColor={'#cccccc'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop sets the background color of the dropdown and button.\n\n```jsx\n<Select options={controller.store.sorting.options} backgroundColor={'#ffffff'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop.\n\n```jsx\n<Select options={controller.store.sorting.options} iconColor={'#222222'} />\n```\n\n### iconClose\nThe `iconClose` prop is the name of the icon to render when the dropdown is in its open state (non-native usage only).\n\n```jsx\n<Select options={controller.store.sorting.options} iconClose={'angle-up'} />\n```\n\n### iconOpen\nThe `iconOpen` prop is the name of the icon to render when the dropdown is in its closed state.\n\n```jsx\n<Select options={controller.store.sorting.options} iconOpen={'angle-down'} />\n```\n\n### Events\n\n#### onSelect\nThe `onSelect` prop allows for a custom callback function for when a selection has been made.\n\n```jsx\n<Select options={controller.store.sorting.options} onSelect={(e)=>{console.log(e)}} />\n```\n",
					A = {
						title: 'Molecules/Select',
						component: d.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: i.Z } }, children: S }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(y, {}) })],
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
								options: [...Object.keys(W.c)],
								control: { type: 'select' },
							},
							iconClose: {
								defaultValue: 'angle-up',
								description: 'Icon for when select is open',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(W.c)],
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
					T = (0, p.PA)(({ args: y, controller: x }) =>
						(0, t.Y)(d.l, {
							...y,
							options: x?.store?.sorting?.options,
							selected: x?.store?.sorting?.current,
							onSelect: (Z, j) => {
								j && j?.url?.go();
							},
						})
					),
					E = (y, { loaded: { controller: x } }) => (0, t.Y)(T, { args: y, controller: x });
				(E.loaders = [async () => (await n.search(), { controller: n })]), (E.args = { label: 'Sort By' });
				const b = (y, { loaded: { controller: x } }) => (0, t.Y)(T, { args: y, controller: x });
				(b.loaders = [async () => (await n.search(), { controller: n })]), (b.args = { label: 'Sort By', native: !0 });
				const D = (y) => {
					const x = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
					];
					return (0, t.Y)(d.l, { ...y, options: x });
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
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
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
								...b.parameters?.docs?.source,
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
				const f = ['Default', 'Native', 'IconOptions'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(w, c, e) {
				'use strict';
				e.d(c, { $: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					d = e.n(s),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/snap.tsx'),
					S = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useA11y.tsx'),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					f = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useComponent.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					Z = e.n(x),
					j = e('../../node_modules/color/index.js'),
					oe = e.n(j);
				const u = ({ native: g, color: _, backgroundColor: m, borderColor: M, theme: B }) => {
						const L = new (oe())(m || _ || B?.variables?.colors?.primary || void 0).lightness(95);
						return g
							? (0, p.AH)({})
							: (0, p.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: _ || B?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: m || '#fff',
									border: `1px solid ${M || _ || B?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: L.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					h = (0, i.PA)((g) => {
						const _ = (0, r.u)(),
							m = (0, W.uk)(),
							B = { disableA11y: !1, treePath: (0, S.LU)() },
							L = (0, E.v6)('button', _, B, g),
							{
								content: k,
								children: v,
								disabled: H,
								native: G,
								onClick: ne,
								disableA11y: J,
								disableStyles: Q,
								className: $,
								internalClassName: de,
								icon: I,
								lang: se,
								treePath: N,
								customComponent: Y,
								style: V,
								styleScript: q,
								themeStyleScript: pe,
								...O
							} = L;
						if (Y) {
							const F = (0, y.x)(m?.templates?.library.import.component.button || {}, Y);
							if (F) return (0, t.Y)(F, { ...L });
						}
						const U = { icon: { internalClassName: 'ss__button__icon', ...(0, T.s)({ disableStyles: Q }), theme: L?.theme, treePath: N } },
							ee = {
								...(0, b.Z)(L, u),
								className: d()('ss__button', { 'ss__button--native': G, 'ss__button--disabled': H }, $, de),
								disabled: H,
								onClick: (F) => !H && ne && ne(F),
								...O,
							},
							re = { ref: (F) => (0, A.iy)(F) },
							te = {},
							ae = Z()(te, se || {}),
							z = (0, f.u)(ae, {});
						return k || v || I || se?.button?.value
							? (0, t.Y)(o._, {
									children: G
										? (0, t.FD)('button', {
												...ee,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...z.button?.all,
														children: [(0, n.Y)(k, { treePath: N }), (0, n.Y)(v, { treePath: N })],
													}),
													I && (0, t.Y)(D.I, { ...U.icon, ...(typeof I == 'string' ? { icon: I } : I) }),
												],
										  })
										: (0, t.FD)('div', {
												...(J ? {} : re),
												role: 'button',
												'aria-disabled': H,
												...ee,
												...z.button?.attributes,
												children: [
													k || v || z.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...z.button?.value,
																children: [(0, n.Y)(k, { treePath: N }), (0, n.Y)(v, { treePath: N })],
														  })
														: void 0,
													I && (0, t.Y)(D.I, { ...U.icon, ...(typeof I == 'string' ? { icon: I } : I) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(w, c, e) {
				'use strict';
				e.d(c, { m: () => Z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/compat/dist/compat.module.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					n = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/hooks/useClickOutside.tsx'),
					E = e('./components/src/hooks/useComponent.tsx'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useA11y.tsx');
				const x = ({ disableOverlay: j }) =>
						(0, d.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: j ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${j ? 'default' : 'pointer'}` },
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
					Z = (0, r.PA)((j) => {
						const oe = (0, S.u)(),
							u = (0, A.uk)(),
							g = { startOpen: !1, disableA11y: !1, treePath: (0, n.LU)() },
							_ = (0, D.v6)('dropdown', oe, g, j),
							{
								button: m,
								content: M,
								children: B,
								disabled: L,
								open: k,
								toggleOnHover: v,
								onMouseEnter: H,
								onMouseLeave: G,
								disableClick: ne,
								onClick: J,
								onToggle: Q,
								focusTrapContent: $,
								startOpen: de,
								disableClickOutside: I,
								disableA11y: se,
								className: N,
								internalClassName: Y,
								treePath: V,
								usePortal: q,
								customComponent: pe,
							} = _;
						if (pe) {
							const l = (0, E.x)(u?.templates?.library.import.component.dropdown || {}, pe);
							if (l) return (0, t.Y)(l, { ..._ });
						}
						let O, U;
						const le = k === void 0;
						le ? ([O, U] = (0, s.J0)(de)) : (O = k);
						const [ee, re] = (0, s.J0)(!1),
							te = (0, s.li)(null),
							ae = (0, s.li)(null),
							[z, F] = (0, s.J0)({ top: 0, left: 0, width: 0 });
						let ue;
						I ||
							(ue = (0, T.L)((l) => {
								(q && ae.current && ae.current.contains(l.target)) || (O && (L || (le && U && U(!1), Q && Q(l, !1))));
							})),
							(0, s.vJ)(() => {
								if (q && O) {
									const l = () => {
										if (te.current) {
											const K = te.current.getBoundingClientRect();
											F({ top: K.bottom + window.scrollY, left: K.left + window.scrollX, width: K.width });
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
							}, [q, O]);
						const X = (l, K) => {
								le &&
									U &&
									U((ce) => {
										const P = K ?? !ce;
										return P != ce && Q && Q(l, P), P;
									});
							},
							ie = (0, f.Z)(_, x),
							_e = {
								onMouseEnter:
									(v || H) &&
									((l) => {
										ee || (v && !L && X(l, !0), H && H(l));
									}),
								onMouseLeave:
									(v || G) &&
									((l) => {
										ee || (v && !L && X(l, !1), G && G(l));
									}),
							},
							R = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (l) => {
									(ae.current = l),
										se ||
											(0, y.iy)(l, 0, !!$, (K) => {
												le ? X(K) : J && J(K);
											});
								},
								children: [(0, b.Y)(M, { open: O, toggleOpen: X, treePath: V }), (0, b.Y)(B, { open: O, toggleOpen: X, treePath: V })],
							});
						return (0, t.Y)(W._, {
							children: (0, t.FD)('div', {
								...ie,
								className: o()('ss__dropdown', { 'ss__dropdown--open': O }, N, Y),
								ref: ue,
								..._e,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (l) => {
											(te.current = l), se || (0, y.iy)(l);
										},
										'aria-expanded': O,
										role: 'button',
										onTouchStart: () => {
											re(!0);
										},
										onClick: (l) => {
											!L && !ne && (X(l), J && J(l)),
												setTimeout(() => {
													re(!1);
												}, 300);
										},
										children: (0, b.Y)(m, { open: O, toggleOpen: X, treePath: V }),
									}),
									q
										? O &&
										  (M || B) &&
										  (0, p.createPortal)(
												(0, t.Y)('div', {
													className: o()('ss__dropdown__portal', N, Y, { 'ss__dropdown__portal--open': O }),
													css: ie.css,
													style: { position: 'absolute', top: z.top, left: z.left, width: z.width, zIndex: 9999 },
													children: R,
												}),
												document.body
										  )
										: (M || B) && R,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Select/Select.tsx'(w, c, e) {
				'use strict';
				e.d(c, { l: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					r = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					D = e('./components/src/components/Atoms/Button/Button.tsx'),
					f = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					y = e('./components/src/hooks/useA11y.tsx'),
					x = e('./components/src/hooks/useLang.tsx'),
					Z = e('./components/src/hooks/useComponent.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(j),
					u = e('../../node_modules/color/index.js'),
					h = e.n(u);
				const g = ({ color: m, backgroundColor: M, borderColor: B, theme: L, native: k }) => {
						const v = new (h())(M || m || L?.variables?.colors?.primary || void 0).lightness(95);
						return k
							? (0, d.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, d.AH)({
									display: 'inline-flex',
									color: m,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: M || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${B || m || L?.variables?.colors?.primary || '#333'}`,
										'.ss__select__dropdown__button': { alignItems: 'center' },
										'.ss__select__select__option': {
											cursor: 'pointer',
											padding: '6px 8px',
											color: 'initial',
											display: 'flex',
											alignItems: 'center',
											gap: '5px',
											'&.ss__select__select__option--selected': { fontWeight: 'bold' },
											'&:hover': { backgroundColor: v.hex() || '#f8f8f8' },
										},
									},
							  });
					},
					_ = (0, s.PA)((m) => {
						const M = (0, W.u)(),
							B = (0, S.uk)(),
							k = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, A.LU)() },
							v = (0, T.v6)('select', M, k, m),
							{
								backgroundColor: H,
								borderColor: G,
								color: ne,
								clearSelection: J,
								disableClickOutside: Q,
								disabled: $,
								hideLabel: de,
								hideLabelOnSelection: I,
								iconColor: se,
								iconClose: N,
								iconOpen: Y,
								label: V,
								native: q,
								onSelect: pe,
								selected: O,
								separator: U,
								startOpen: le,
								hideIcon: ee,
								hideOptionIcons: re,
								hideOptionLabels: te,
								hideSelection: ae,
								stayOpenOnSelection: z,
								disableStyles: F,
								className: ue,
								internalClassName: X,
								treePath: ie,
								customComponent: _e,
							} = v;
						let { options: R } = v;
						if (_e) {
							const a = (0, Z.x)(B?.templates?.library.import.component.select || {}, _e);
							if (a) return (0, t.Y)(a, { ...v });
						}
						const l = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, n.s)({ disableStyles: F, disabled: $ }),
									theme: v?.theme,
									treePath: ie,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, n.s)({ disableStyles: F, disabled: $, color: ne, backgroundColor: H, borderColor: G }),
									theme: v?.theme,
									treePath: ie,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, n.s)({ disableStyles: F, color: se || ne, size: '12px' }),
									theme: v?.theme,
									treePath: ie,
								},
							},
							[K, ce] = (0, p.J0)(!!le),
							[P, Ee] = (0, p.J0)(O),
							[ve] = (0, p.J0)(O);
						try {
							if (O) {
								const a = JSON.stringify(ve),
									C = JSON.stringify(O),
									me = JSON.stringify(P);
								a !== C && C !== me && Ee(O);
							}
						} catch {}
						P && J && (R = [{ label: J, value: '' }, ...R]);
						const fe = (a, C) => {
								C != P && pe && pe(a, C), Ee(C), !z && ce(!1);
							},
							Oe = (0, E.Z)(v, g),
							be = R.filter((a) => P?.value === a.value),
							Pe = {
								buttonLabel: {
									value: V,
									attributes: {
										'aria-label': `${V} dropdown, ${R.length} options ${be.length ? `, Currently selected option is ${be[0].label}` : ''}`,
									},
								},
							},
							he = oe()(Pe, v.lang || {}),
							ge = (0, x.u)(he, { options: R, selectedOptions: be, label: V, open: K });
						return typeof R == 'object' && R?.length
							? (0, t.Y)(r._, {
									children: (0, t.Y)('div', {
										...Oe,
										className: o()('ss__select', { 'ss__select--native': q }, { 'ss__select--disabled': $ }, ue, X),
										children: q
											? (0, t.FD)(t.FK, {
													children: [
														(V || he.buttonLabel.value) &&
															!de &&
															!I &&
															(0, t.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, t.Y)('label', { ...ge.buttonLabel?.all }),
																	U && (0, t.Y)('span', { className: 'ss__select__label__separator', children: U }),
																],
															}),
														(0, t.FD)('select', {
															className: 'ss__select__select',
															disabled: $ || void 0,
															onChange: (a) => {
																const C = a.target,
																	me = C.options[C.selectedIndex],
																	De = R.filter((ye, Me) => ye.label == me.text && (ye.value == me.value || ye.value == Me)).pop();
																!$ && fe(a, De);
															},
															children: [
																!P && J && (0, t.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: J }),
																R.map((a, C) =>
																	(0, t.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: P?.value === a.value,
																		value: a.value ?? C,
																		children: a.label,
																	})
																),
															],
														}),
														!ee && (0, t.Y)(f.I, { ...l.icon, name: 'open', ...(typeof Y == 'string' ? { icon: Y } : Y) }),
													],
											  })
											: (0, t.Y)(b.m, {
													...l.dropdown,
													disableClickOutside: Q,
													open: K,
													onToggle: (a, C) => ce((me) => C ?? !me),
													onClick: () => ce((a) => !a),
													disableA11y: !0,
													button: (0, t.FD)(D.$, {
														...l.button,
														children: [
															(V || he.buttonLabel.value) &&
																!I &&
																!de &&
																(0, t.FD)('span', {
																	className: 'ss__select__label',
																	...ge.buttonLabel.attributes,
																	children: [
																		(0, t.Y)('label', { ...ge.buttonLabel.value }),
																		U && P && (0, t.Y)('span', { className: 'ss__select__label__separator', children: U }),
																	],
																}),
															P &&
																!ae &&
																(0, t.FD)(t.FK, {
																	children: [
																		P.icon &&
																			!re &&
																			(0, t.Y)(f.I, {
																				...l.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof P.icon == 'string' ? { icon: P.icon } : P.icon),
																			}),
																		!te && (0, t.Y)('span', { className: 'ss__select__selection', children: P?.label }),
																	],
																}),
															!ee &&
																(0, t.Y)(f.I, {
																	...l.icon,
																	name: K ? 'open' : 'close',
																	...(K ? { ...(typeof N == 'string' ? { icon: N } : N) } : { ...(typeof Y == 'string' ? { icon: Y } : Y) }),
																}),
														],
													}),
													children: (0, t.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof V == 'string' ? V : '',
														ref: (a) => (0, y.iy)(a, -1, !0, () => ce(!1)),
														children: R.map((a) =>
															(0, t.FD)('li', {
																ref: (C) => (0, y.iy)(C),
																'aria-disabled': a.disabled,
																title: a.label,
																className: o()('ss__select__select__option', { 'ss__select__select__option--selected': P?.value === a.value }),
																onClick: (C) => !$ && fe(C, a),
																role: 'option',
																'aria-selected': P?.value === a.value,
																children: [
																	a.icon &&
																		!re &&
																		(0, t.Y)(f.I, {
																			...l.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${ie} dropdown`,
																			...(typeof a.icon == 'string' ? { icon: a.icon } : a.icon),
																		}),
																	!te && (0, t.Y)('span', { children: a.label }),
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
				function i(o, r, W, S) {
					const A = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${A}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = A),
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
						W &&
							o.addEventListener('keydown', function (n) {
								const T = o.querySelectorAll(d),
									E = T[0],
									b = T[T.length - 1];
								if (n.keyCode == p) {
									o.focus(), S && S(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === t) &&
									(n.shiftKey
										? document.activeElement === E && (b.focus(), n.preventDefault())
										: document.activeElement === b && (E.focus(), n.preventDefault()));
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
				e.d(c, { p: () => x });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					W = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					T = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					y = { globals: { siteId: 'atkzs2' } };
				class x {
					static recommendation(h) {
						const g = h.id;
						if (f[g]) return f[g];
						const _ = (f[g] = j({ client: y, controller: h }));
						return (
							_.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(h) {
						const g = h.id;
						if (f[g]) return f[g];
						const _ = (f[g] = oe({ client: y, controller: h }));
						return (
							_.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static search(h) {
						const g = h.id;
						if (f[g]) return f[g];
						const _ = (f[g] = Z({ client: y, controller: h }));
						return (
							_.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
				}
				function Z(u) {
					const h = new S.V(new n.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), A.X);
					return new p.Tp(u.controller, {
						client: new i.K(u.client.globals, u.client.config),
						store: new r.U(u.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new T.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new D.J(u.client.globals),
					});
				}
				function j(u) {
					const h = new S.V(new n.E(), A.X).detach(!0);
					return new d.c(u.controller, {
						client: new i.K(u.client.globals, u.client.config),
						store: new W.t(u.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new T.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new D.J(u.client.globals),
					});
				}
				function oe(u) {
					const h = new S.V(new n.E(), A.X).detach();
					return new s.Z(u.controller, {
						client: new i.K(u.client.globals, u.client.config),
						store: new o.Y(u.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new T.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new D.J(u.client.globals),
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

//# sourceMappingURL=components-Molecules-Select-Select-stories.6d443f82.iframe.bundle.js.map
