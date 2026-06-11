(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9179],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(U, c, e) {
				'use strict';
				e.d(c, { p: () => t });
				function t(l) {
					if (typeof l != 'string') return l;
					let o = l.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx'(U, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => P, List: () => y, Radio: () => a, __namedExportsOrder: () => I, default: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts');
				const i = `# LayoutSelector

Renders a layout selector to be used with snap templates for changing result layout settings. 

## Sub-components
- Select
- RadioList 
- List


## Usage

### options
The required \`options\` prop specifies an array of layoutOptions to render. When using Snap Templates, overrides can be provided in each option - these overrides will be applied when the option is selected.

\`\`\`tsx
const layoutOptions = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'results': {
					columns: 2,
				},
			},
		},
	},
],

<LayoutSelector options={layoutOptions} />
\`\`\`

### onSelect
The required \`onSelect\` sets the callback function for when a selection has been made. the function will be passed the click event and the selected option. 

\`\`\`tsx

<LayoutSelector onSelect={(e, option) => callback()} options={layoutOptions} />

\`\`\`

### type
The \`type\` prop specifies the type of selector to render. Options are \`'radio'\`, \`'list'\`, or \`'dropdown'\`. Defaults to \`"dropdown"\`.

\`\`\`tsx
<LayoutSelector type={"list"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### selected
The \`selected\` prop specifies the intitially selected option. 

\`\`\`tsx
<LayoutSelector onSelect={(e, option) => callback()} selected={layoutOptions[0]} options={layoutOptions} />
\`\`\`

### label
The \`label\` prop specifies the label to render. Defaults to \`"Layout"\`.

\`\`\`tsx
<LayoutSelector label={"Layout"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### hideLabel
The \`hideLabel\` prop hides the selector label.

\`\`\`tsx
<LayoutSelector hideLabel={true} label={"Layout"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### hideOptionLabels
The \`hideOptionLabels\` prop hides the option labels.

\`\`\`tsx
<LayoutSelector hideOptionLabels={true} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### showSingleOption
The \`showSingleOption\` prop specifies if the component should render if the provided options prop contains a single option. 
\`\`\`tsx
<LayoutSelector showSingleOption={true} onSelect={(e, option) => callback()} options={layoutOptions.slice(0, 1)} />
\`\`\`
`;
				var s = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx');
				const n = {
						title: 'Molecules/LayoutSelector',
						component: s.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: o.Z } }, children: i }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							options: {
								description: 'layoutOptions to render',
								type: { required: !0 },
								table: { type: { summary: 'layoutOptions to render' } },
								control: { type: 'object' },
							},
							onSelect: {
								description: 'onSelect event handler',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'onSelect event handler' } },
								control: { type: 'none' },
							},
							type: {
								description: 'type of Select to render.',
								table: { category: 'Templates Legal', type: { summary: '"dropdown" | "list" | "radio"' }, defaultValue: { summary: 'dropdown' } },
								options: ['dropdown', 'list', 'radio'],
								control: { type: 'select' },
							},
							label: {
								description: 'Header label',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							hideLabel: {
								defaultValue: !1,
								description: 'hide selector label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideOptionLabels: {
								defaultValue: !1,
								description: 'hide option labels',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							selected: { description: 'currently selected option', table: { type: { summary: 'Option object' } }, control: { type: 'none' } },
							showSingleOption: {
								defaultValue: !1,
								description: 'specifies if the component should render if the provided options prop contains a single option',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							..._.F,
						},
					},
					W = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
						{ label: '4 wide', value: '4 wide' },
						{ label: 'custom', value: 'custom' },
					],
					P = (u) =>
						(0, t.Y)('div', {
							style: { maxWidth: u?.type == 'list' || u?.type == 'dropdown' ? '500px' : '300px' },
							children: (0, t.Y)(s.s, {
								...u,
								onSelect: () => {
									console.log('');
								},
							}),
						});
				P.args = { label: 'Layout', options: W };
				const y = (u) =>
					(0, t.Y)('div', {
						style: { maxWidth: u?.type == 'list' || u?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(s.s, {
							...u,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				y.args = { options: W, label: 'List Layout Selector', type: 'list' };
				const a = (u) =>
					(0, t.Y)('div', {
						style: { maxWidth: u?.type == 'list' || u?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(s.s, {
							...u,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				(a.args = { options: W, label: 'Radio Layout Selector', type: 'radio' }),
					(P.parameters = {
						...P.parameters,
						docs: {
							...P.parameters?.docs,
							source: {
								originalSource: `(args: LayoutSelectorProps) => {
  return <div style={{
    maxWidth: args?.type == 'list' || args?.type == 'dropdown' ? '500px' : '300px'
  }}>
            <LayoutSelector {...args} onSelect={() => {
      console.log('');
    }} />
        </div>;
}`,
								...P.parameters?.docs?.source,
							},
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: LayoutSelectorProps) => {
  return <div style={{
    maxWidth: args?.type == 'list' || args?.type == 'dropdown' ? '500px' : '300px'
  }}>
            <LayoutSelector {...args} onSelect={() => {
      console.log('');
    }} />
        </div>;
}`,
								...y.parameters?.docs?.source,
							},
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: {
								originalSource: `(args: LayoutSelectorProps) => {
  return <div style={{
    maxWidth: args?.type == 'list' || args?.type == 'dropdown' ? '500px' : '300px'
  }}>
            <LayoutSelector {...args} onSelect={() => {
      console.log('');
    }} />
        </div>;
}`,
								...a.parameters?.docs?.source,
							},
						},
					});
				const I = ['Default', 'List', 'Radio'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(U, c, e) {
				'use strict';
				e.d(c, { $: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					_ = e.n(o),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useA11y.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					a = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					G = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const H = ({ native: b, color: v, backgroundColor: F, borderColor: J, theme: m }) =>
						b
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: v || m?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: F || '#fff',
									border: `1px solid ${J || v || m?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					ne = (0, i.PA)((b) => {
						const v = (0, n.u)(),
							J = { disableA11y: !1, treePath: (0, W.LU)() },
							m = (0, I.v6)('button', v, J, b),
							{
								content: f,
								children: g,
								disabled: h,
								native: D,
								onClick: K,
								disableA11y: w,
								disableStyles: X,
								className: $,
								internalClassName: j,
								icon: x,
								lang: k,
								treePath: R,
								style: z,
								styleScript: Q,
								themeStyleScript: le,
								...V
							} = m,
							{ overrideElement: q, shouldRenderDefault: ae } = (0, G._)('button', m);
						if (!ae) return q;
						const S = { icon: { internalClassName: 'ss__button__icon', ...(0, a.s)({ disableStyles: X }), theme: m?.theme, treePath: R } },
							N = {
								...(0, u.Z)(m, H),
								className: _()('ss__button', { 'ss__button--native': D, 'ss__button--disabled': h }, $, j),
								disabled: h,
								onClick: (A) => !h && K && K(A),
								...V,
							},
							L = { ref: (A) => (0, P.iy)(A) },
							Z = {},
							C = oe()(Z, k || {}),
							B = (0, te.u)(C, {}),
							O = !!V.dangerouslySetInnerHTML;
						return f || g || x || k?.button?.value || O
							? (0, t.Y)(s._, {
									children: D
										? (0, t.FD)('button', {
												...N,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...B.button?.all,
														children: [(0, y.Y)(f, { treePath: R }), (0, y.Y)(g, { treePath: R })],
													}),
													x && (0, t.Y)(Y.I, { ...S.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  })
										: (0, t.FD)('div', {
												...(w ? {} : L),
												role: 'button',
												'aria-disabled': h,
												...N,
												...B.button?.attributes,
												children: [
													f || g || B.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...B.button?.value,
																children: [(0, y.Y)(f, { treePath: R }), (0, y.Y)(g, { treePath: R })],
														  })
														: void 0,
													x && (0, t.Y)(Y.I, { ...S.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(U, c, e) {
				'use strict';
				e.d(c, { m: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/compat/dist/compat.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					s = e.n(i),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/hooks/useClickOutside.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					G = e('./components/src/hooks/useA11y.tsx');
				const se = ({ disableOverlay: H }) =>
						(0, _.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: H ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${H ? 'default' : 'pointer'}` },
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
					oe = (0, n.PA)((H) => {
						const ne = (0, P.u)(),
							v = { startOpen: !1, disableA11y: !1, treePath: (0, y.LU)() },
							F = (0, Y.v6)('dropdown', ne, v, H),
							{
								button: J,
								content: m,
								children: f,
								disabled: g,
								open: h,
								toggleOnHover: D,
								onMouseEnter: K,
								onMouseLeave: w,
								disableClick: X,
								onClick: $,
								onToggle: j,
								focusTrapContent: x,
								startOpen: k,
								disableClickOutside: R,
								disableA11y: z,
								className: Q,
								internalClassName: le,
								treePath: V,
								usePortal: q,
							} = F,
							{ overrideElement: ae, shouldRenderDefault: S } = (0, I._)('dropdown', F);
						if (!S) return ae;
						let M, N;
						const L = h === void 0;
						L ? ([M, N] = (0, o.J0)(k)) : (M = h);
						const [Z, C] = (0, o.J0)(!1),
							B = (0, o.li)(null),
							O = (0, o.li)(null),
							[A, ie] = (0, o.J0)({ top: 0, left: 0, width: 0 });
						let d;
						R ||
							(d = (0, a.L)((r) => {
								(q && O.current && O.current.contains(r.target)) || (M && (g || (L && N && N(!1), j && j(r, !1))));
							})),
							(0, o.vJ)(() => {
								if (q && M) {
									const r = () => {
										if (B.current) {
											const ee = B.current.getBoundingClientRect();
											ie({ top: ee.bottom + window.scrollY, left: ee.left + window.scrollX, width: ee.width });
										}
									};
									return (
										r(),
										window.addEventListener('resize', r),
										window.addEventListener('scroll', r, !0),
										() => {
											window.removeEventListener('resize', r), window.removeEventListener('scroll', r, !0);
										}
									);
								}
							}, [q, M]);
						const p = (r, ee) => {
								L &&
									N &&
									N((de) => {
										const ce = ee ?? !de;
										return ce != de && j && j(r, ce), ce;
									});
							},
							E = (0, te.Z)(F, se),
							T = {
								onMouseEnter:
									(D || K) &&
									((r) => {
										Z || (D && !g && p(r, !0), K && K(r));
									}),
								onMouseLeave:
									(D || w) &&
									((r) => {
										Z || (D && !g && p(r, !1), w && w(r));
									}),
							},
							re = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (r) => {
									(O.current = r),
										z ||
											(0, G.iy)(r, 0, !!x, (ee) => {
												L ? p(ee) : $ && $(ee);
											});
								},
								children: [(0, u.Y)(m, { open: M, toggleOpen: p, treePath: V }), (0, u.Y)(f, { open: M, toggleOpen: p, treePath: V })],
							});
						return (0, t.Y)(W._, {
							children: (0, t.FD)('div', {
								...E,
								className: s()('ss__dropdown', { 'ss__dropdown--open': M }, Q, le),
								ref: d,
								...T,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (r) => {
											(B.current = r), z || (0, G.iy)(r);
										},
										'aria-expanded': M,
										role: 'button',
										onTouchStart: () => {
											C(!0);
										},
										onClick: (r) => {
											!g && !X && (p(r), $ && $(r)),
												setTimeout(() => {
													C(!1);
												}, 300);
										},
										children: (0, u.Y)(J, { open: M, toggleOpen: p, treePath: V }),
									}),
									q
										? (m || f) &&
										  (0, l.createPortal)(
												(0, t.Y)('div', {
													className: s()('ss__dropdown__portal', Q, le, { 'ss__dropdown__portal--open': M }),
													css: E.css,
													style: { position: 'absolute', top: A.top, left: A.left, width: A.width, zIndex: 9999, pointerEvents: M ? 'auto' : 'none' },
													children: re,
												}),
												document.body
										  )
										: (m || f) && re,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(U, c, e) {
				'use strict';
				e.d(c, { S: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					i = e.n(_),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					W = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Y = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					G = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const H = ({ size: b, color: v, theme: F, native: J }) => {
						const m = isNaN(Number(b)) ? b : `${b}px`;
						return J
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: m,
									width: m,
									border: `1px solid ${v || F?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${b} - 30%)`, height: `calc(${b} - 30%)` },
							  });
					},
					ne = (0, s.PA)((b) => {
						const v = (0, a.u)(),
							J = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, I.LU)() },
							m = (0, W.v6)('checkbox', v, J, b),
							{
								checked: f,
								color: g,
								disabled: h,
								icon: D,
								iconColor: K,
								onClick: w,
								size: X,
								startChecked: $,
								native: j,
								disableA11y: x,
								disableStyles: k,
								className: R,
								internalClassName: z,
								theme: Q,
								treePath: le,
								lang: V,
								style: q,
								styleScript: ae,
								themeStyleScript: S,
								name: M,
								...N
							} = m,
							{ overrideElement: L, shouldRenderDefault: Z } = (0, G._)('checkbox', m);
						if (!Z) return L;
						const C = isNaN(Number(X)) ? X : `${X}px`,
							B = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, n.s)({ color: K || g || Q?.variables?.colors?.primary, disableStyles: k, icon: D, size: C && `calc(${C} - 30%)` }),
									theme: m.theme,
									treePath: le,
								},
							};
						let O, A;
						const ie = f === void 0;
						ie ? ([O, A] = (0, l.J0)($)) : (O = f);
						const d = (r) => {
								h || (ie && A && A((ee) => !ee), w && w(r));
							},
							p = (0, P.Z)(m, H),
							E = { checkbox: {} },
							T = oe()(E, V || {}),
							re = (0, te.u)(T, { checkedState: O, disabled: h });
						return (0, t.Y)(y._, {
							children: j
								? (0, t.Y)('input', {
										...p,
										className: i()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': h, 'ss__checkbox--active': O }, R, z),
										type: 'checkbox',
										'aria-checked': O,
										onClick: (r) => d(r),
										disabled: h,
										checked: O,
								  })
								: (0, t.Y)('span', {
										...p,
										className: i()('ss__checkbox', { 'ss__checkbox--disabled': h, 'ss__checkbox--active': O }, R, z),
										onClick: (r) => d(r),
										ref: (r) => (x ? null : (0, Y.iy)(r)),
										'aria-disabled': h,
										role: 'checkbox',
										'aria-checked': O,
										...N,
										...re.checkbox.all,
										children: O
											? (0, t.Y)(u.I, { ...B.icon, ...(typeof D == 'string' ? { icon: D } : D) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(U, c, e) {
				'use strict';
				e.d(c, { B: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					i = e.n(_),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					n = e.n(s),
					W = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					P = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					Y = e('./components/src/utilities/mergeStyles.ts'),
					te = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					G = e('./components/src/hooks/useA11y.tsx'),
					se = e('./components/src/hooks/useLang.tsx'),
					oe = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					H = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const ne = ({ horizontal: v }) =>
					(0, o.AH)({
						display: 'flex',
						flexDirection: v ? 'row' : 'column',
						alignItems: v ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: v ? 'row' : 'column',
							alignItems: v ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					});
				function b(v) {
					const F = (0, y.u)(),
						m = { treePath: (0, a.LU)() },
						f = (0, u.v6)('list', F, m, v),
						{
							titleText: g,
							onSelect: h,
							native: D,
							multiSelect: K,
							hideOptionLabels: w,
							hideOptionIcons: X,
							hideOptionCheckboxes: $,
							disabled: j,
							hideTitleText: x,
							options: k,
							requireSelection: R,
							disableStyles: z,
							className: Q,
							internalClassName: le,
							treePath: V,
						} = f,
						{ overrideElement: q, shouldRenderDefault: ae } = (0, oe._)('list', f);
					if (!ae) return q;
					let S = f.selected;
					const M = {
							checkbox: { native: D, ...(0, I.s)({ disableStyles: z }), theme: f?.theme, treePath: V },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, I.s)({ disableStyles: z }), theme: f?.theme, treePath: V },
						},
						N = (0, Y.Z)(f, ne);
					S && !Array.isArray(S) && (S = [S]);
					const [L, Z] = (0, l.J0)(S || []),
						[C] = (0, l.J0)(S || []);
					try {
						if (S) {
							const d = JSON.stringify(C),
								p = JSON.stringify(S),
								E = JSON.stringify(L);
							d !== p && p !== E && Z(S);
						}
					} catch {}
					const B = (d, p) => {
							let E;
							K
								? L.find((T) => T.value === p.value)
									? ((E = [...L]),
									  E.splice(
											E.findIndex((T) => T.value === p.value),
											1
									  ),
									  E.length == 0 && R && (E = [p]))
									: (E = [...L, p])
								: !R && L.find((T) => T.value === p.value)
								? (E = [])
								: (E = [p]),
								h && h(d, p, E),
								Z(E);
						},
						O = {},
						A = n()(O, f.lang || {}),
						ie = (0, se.u)(A, { options: k, selectedOptions: L });
					return typeof k == 'object' && k?.length
						? (0, t.Y)(P._, {
								children: (0, t.FD)('div', {
									...N,
									className: i()('ss__list', { 'ss__list--native': D, 'ss__list--disabled': j }, Q, le),
									children: [
										(g || A?.title?.value) && !x && (0, t.Y)('h5', { className: 'ss__list__title', ...ie.title?.all, children: g }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': g,
											children: k.map((d) => {
												const p = L.some((E) => E.value == d.value);
												return (0, t.FD)('li', {
													className: i()(`ss__list__option ss__list__option--${W.p(d.value?.toString())}`, {
														'ss__list__option--selected': p,
														'ss__list__option--disabled': d?.disabled,
														'ss__list__option--unavailable': d?.available === !1,
													}),
													ref: (E) => (0, G.iy)(E),
													onClick: (E) => !j && !d?.disabled && B(E, d),
													title: d.label,
													role: 'option',
													'aria-selected': p,
													'aria-disabled': d.disabled || d?.available === !1,
													children: [
														!$ && (0, t.Y)(te.S, { ...M.checkbox, checked: p, disableA11y: !0, 'aria-label': d.label }),
														d.icon && !X && (0, t.Y)(H.I, { ...M.icon, ...(typeof d.icon == 'string' ? { icon: d.icon } : d.icon) }),
														!w && (d.label || !d.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: d.label || d.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(U, c, e) {
				'use strict';
				e.d(c, { s: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					i = e.n(_),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					W = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Y = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					G = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const H = ({ size: b, native: v }) =>
						v
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: b,
									width: b,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					ne = (0, s.PA)((b) => {
						const v = (0, a.u)(),
							F = (0, I.LU)(),
							J = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: v.variables?.colors.primary || '#000000',
								treePath: F,
							},
							m = (0, W.v6)('radio', v, J, b),
							{
								checked: f,
								color: g,
								disabled: h,
								checkedIcon: D,
								unCheckedIcon: K,
								onClick: w,
								startChecked: X,
								native: $,
								disableA11y: j,
								disableStyles: x,
								className: k,
								internalClassName: R,
								size: z,
								treePath: Q,
								lang: le,
								style: V,
								styleScript: q,
								themeStyleScript: ae,
								name: S,
								...M
							} = m,
							{ overrideElement: N, shouldRenderDefault: L } = (0, G._)('radio', m);
						if (!L) return N;
						const Z = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, n.s)({ size: z, color: g, disableStyles: x }),
								theme: m.theme,
								treePath: Q,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, n.s)({ size: z, color: g, disableStyles: x }),
								theme: m.theme,
								treePath: Q,
							},
						};
						let C, B;
						const O = f === void 0;
						O ? ([C, B] = (0, l.J0)(X)) : (C = f);
						const A = (T) => {
								h || (O && B && B((re) => !re), w && w(T));
							},
							ie = (0, P.Z)(m, H),
							d = { radio: {} },
							p = oe()(d, le || {}),
							E = (0, te.u)(p, { disabled: h, checkedState: C });
						return (0, t.Y)(y._, {
							children: $
								? (0, t.Y)('div', {
										className: i()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': h }, k, R),
										...ie,
										children: (0, t.Y)('input', {
											className: i()('ss__radio__input'),
											'aria-checked': C,
											type: 'radio',
											onClick: (T) => A(T),
											disabled: h,
											checked: C,
											tabIndex: j ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...ie,
										className: i()('ss__radio', { 'ss__radio--disabled': h, 'ss__radio--active': C }, k, R),
										onClick: (T) => A(T),
										ref: (T) => (j ? null : (0, Y.iy)(T)),
										...E.radio?.all,
										role: 'radio',
										'aria-checked': C,
										'aria-disabled': h,
										...M,
										children: C
											? (0, t.Y)(u.I, { ...Z.activeIcon, ...(typeof D == 'string' ? { icon: D } : D) })
											: (0, t.Y)(u.I, { ...Z.inactiveIcon, ...(typeof K == 'string' ? { icon: K } : K) }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(U, c, e) {
				'use strict';
				e.d(c, { DH: () => _, aZ: () => o, iy: () => i });
				const t = 9,
					l = 27,
					o = 'ss-a11y',
					_ =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(s, n, W, P) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = y),
							(a.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					s &&
						!s.attributes?.[o] &&
						(s.setAttribute(o, !0),
						s.setAttribute('tabIndex', `${n || 0}`),
						s.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && s.click();
						}),
						W &&
							s.addEventListener('keydown', function (a) {
								const I = s.querySelectorAll(_),
									u = I[0],
									Y = I[I.length - 1];
								if (a.keyCode == l) {
									s.focus(), P && P(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === t) &&
									(a.shiftKey
										? document.activeElement === u && (Y.focus(), a.preventDefault())
										: document.activeElement === Y && (u.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(U, c, e) {
				'use strict';
				e.d(c, { L: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function l(o) {
					const _ = (0, t.li)(),
						i = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							_.current = o;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', s), () => document.removeEventListener('click', s);
							function s(n) {
								i.current && _.current && !i.current.contains(n.target) && _.current(n);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(U, c, e) {
				'use strict';
				e.d(c, { u: () => t });
				const t = (l, o) => {
					const _ = {};
					return (
						Object.keys(l).forEach((i) => {
							const s = l && l[i],
								n = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (n.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: s.value(o) } })
										: (n.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((n.attributes = { 'ss-lang': i }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = s.attributes['aria-label'](o))
											: (n.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](o))
											: (n.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (n.attributes.title = s.attributes.title(o))
											: (n.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (n.attributes.alt = s.attributes.alt(o)) : (n.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = s.attributes.placeholder(o))
											: (n.attributes.placeholder = s.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': i })),
								(_[i] = n);
						}),
						_
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(U, c, e) {
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
			'./components/src/utilities/defined.ts'(U, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(l) {
					const o = {};
					return (
						Object.keys(l).map((_) => {
							l[_] !== void 0 && (o[_] = l[_]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(U, c, e) {
				'use strict';
				e.d(c, { Z: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					_ = (i) => {
						const s = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								s.current && i.className?.includes('lang-') && !i.className?.includes(o) && window?.Prism?.highlightElement(s.current);
							}, [i.className, i.children, s]),
							(0, t.Y)('code', { ...i, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(U) {
				function c(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (U.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LayoutSelector-LayoutSelector-stories.e678d7ac.iframe.bundle.js.map
