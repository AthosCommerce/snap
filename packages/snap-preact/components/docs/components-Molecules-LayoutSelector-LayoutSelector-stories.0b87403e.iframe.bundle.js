(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9179],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(K, d, e) {
				'use strict';
				e.d(d, { p: () => t });
				function t(i) {
					if (typeof i != 'string') return i;
					let o = i.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx'(K, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => O, List: () => y, Radio: () => r, __namedExportsOrder: () => B, default: () => l });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts');
				const a = `# LayoutSelector

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
				const l = {
						title: 'Molecules/LayoutSelector',
						component: s.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: o.Z } }, children: a }), (0, t.Y)(i.uY, { story: i.h1 })],
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
							...m.F,
						},
					},
					S = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
						{ label: '4 wide', value: '4 wide' },
						{ label: 'custom', value: 'custom' },
					],
					O = (u) =>
						(0, t.Y)('div', {
							style: { maxWidth: u?.type == 'list' || u?.type == 'dropdown' ? '500px' : '300px' },
							children: (0, t.Y)(s.s, {
								...u,
								onSelect: () => {
									console.log('');
								},
							}),
						});
				O.args = { label: 'Layout', options: S };
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
				y.args = { options: S, label: 'List Layout Selector', type: 'list' };
				const r = (u) =>
					(0, t.Y)('div', {
						style: { maxWidth: u?.type == 'list' || u?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(s.s, {
							...u,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				(r.args = { options: S, label: 'Radio Layout Selector', type: 'radio' }),
					(O.parameters = {
						...O.parameters,
						docs: {
							...O.parameters?.docs,
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
								...O.parameters?.docs?.source,
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
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
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
								...r.parameters?.docs?.source,
							},
						},
					});
				const B = ['Default', 'List', 'Radio'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(K, d, e) {
				'use strict';
				e.d(d, { $: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					m = e.n(o),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useA11y.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					r = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const F = ({ native: b, color: C, backgroundColor: x, borderColor: k, theme: p }) =>
						b
							? (0, i.AH)({})
							: (0, i.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: C || p?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: x || '#fff',
									border: `1px solid ${k || C || p?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					ne = (0, a.PA)((b) => {
						const C = (0, l.u)(),
							k = { disableA11y: !1, treePath: (0, S.LU)() },
							p = (0, B.v6)('button', C, k, b),
							{
								content: T,
								children: v,
								disabled: h,
								native: D,
								onClick: W,
								disableA11y: N,
								disableStyles: z,
								className: w,
								internalClassName: Y,
								icon: M,
								lang: V,
								treePath: L,
								style: H,
								styleScript: Z,
								themeStyleScript: le,
								...X
							} = p,
							{ overrideElement: G, shouldRenderDefault: re } = (0, Q._)('button', p);
						if (!re) return G;
						const ae = { icon: { internalClassName: 'ss__button__icon', ...(0, r.s)({ disableStyles: z }), theme: p?.theme, treePath: L } },
							U = {
								...(0, u.Z)(p, F),
								className: m()('ss__button', { 'ss__button--native': D, 'ss__button--disabled': h }, w, Y),
								disabled: h,
								onClick: (R) => !h && W && W(R),
								...X,
							},
							J = { ref: (R) => (0, O.iy)(R) },
							A = {},
							g = oe()(A, V || {}),
							I = (0, te.u)(g, {}),
							P = !!X.dangerouslySetInnerHTML;
						return T || v || M || V?.button?.value || P
							? (0, t.Y)(s._, {
									children: D
										? (0, t.FD)('button', {
												...U,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...I.button?.all,
														children: [(0, y.Y)(T, { treePath: L }), (0, y.Y)(v, { treePath: L })],
													}),
													M && (0, t.Y)(j.I, { ...ae.icon, ...(typeof M == 'string' ? { icon: M } : M) }),
												],
										  })
										: (0, t.FD)('div', {
												...(N ? {} : J),
												role: 'button',
												'aria-disabled': h,
												...U,
												...I.button?.attributes,
												children: [
													T || v || I.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...I.button?.value,
																children: [(0, y.Y)(T, { treePath: L }), (0, y.Y)(v, { treePath: L })],
														  })
														: void 0,
													M && (0, t.Y)(j.I, { ...ae.icon, ...(typeof M == 'string' ? { icon: M } : M) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(K, d, e) {
				'use strict';
				e.d(d, { m: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/compat/dist/compat.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					s = e.n(a),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useClickOutside.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					j = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/hooks/useA11y.tsx');
				const se = ({ disableOverlay: F }) =>
						(0, m.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: F ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${F ? 'default' : 'pointer'}` },
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
					oe = (0, l.PA)((F) => {
						const ne = (0, O.u)(),
							C = { startOpen: !1, disableA11y: !1, treePath: (0, y.LU)() },
							x = (0, j.v6)('dropdown', ne, C, F),
							{
								button: k,
								content: p,
								children: T,
								disabled: v,
								open: h,
								toggleOnHover: D,
								onMouseEnter: W,
								onMouseLeave: N,
								disableClick: z,
								onClick: w,
								onToggle: Y,
								focusTrapContent: M,
								startOpen: V,
								disableClickOutside: L,
								disableA11y: H,
								className: Z,
								internalClassName: le,
								treePath: X,
								usePortal: G,
							} = x,
							{ overrideElement: re, shouldRenderDefault: ae } = (0, B._)('dropdown', x);
						if (!ae) return re;
						let E, U;
						const J = h === void 0;
						J ? ([E, U] = (0, o.J0)(V)) : (E = h);
						const [A, g] = (0, o.J0)(!1),
							I = (0, o.li)(null),
							P = (0, o.li)(null),
							[R, q] = (0, o.J0)({ top: 0, left: 0, width: 0 });
						let ie;
						L ||
							(ie = (0, r.L)((c) => {
								(G && P.current && P.current.contains(c.target)) || (E && (v || (J && U && U(!1), Y && Y(c, !1))));
							})),
							(0, o.vJ)(() => {
								if (G && E) {
									const c = () => {
										if (I.current) {
											const ee = I.current.getBoundingClientRect();
											q({ top: ee.bottom + window.scrollY, left: ee.left + window.scrollX, width: ee.width });
										}
									};
									return (
										c(),
										window.addEventListener('resize', c),
										window.addEventListener('scroll', c, !0),
										() => {
											window.removeEventListener('resize', c), window.removeEventListener('scroll', c, !0);
										}
									);
								}
							}, [G, E]);
						const n = (c, ee) => {
								J &&
									U &&
									U((de) => {
										const ce = ee ?? !de;
										return ce != de && Y && Y(c, ce), ce;
									});
							},
							f = (0, te.Z)(x, se),
							_ = {
								onMouseEnter:
									(D || W) &&
									((c) => {
										A || (D && !v && n(c, !0), W && W(c));
									}),
								onMouseLeave:
									(D || N) &&
									((c) => {
										A || (D && !v && n(c, !1), N && N(c));
									}),
							},
							$ = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (c) => {
									(P.current = c),
										H ||
											(0, Q.iy)(c, 0, !!M, (ee) => {
												J ? n(ee) : w && w(ee);
											});
								},
								children: [(0, u.Y)(p, { open: E, toggleOpen: n, treePath: X }), (0, u.Y)(T, { open: E, toggleOpen: n, treePath: X })],
							});
						return (0, t.Y)(S._, {
							children: (0, t.FD)('div', {
								...f,
								className: s()('ss__dropdown', { 'ss__dropdown--open': E }, Z, le),
								ref: ie,
								..._,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (c) => {
											(I.current = c), H || (0, Q.iy)(c);
										},
										'aria-expanded': E,
										role: 'button',
										onTouchStart: () => {
											g(!0);
										},
										onClick: (c) => {
											!v && !z && (n(c), w && w(c)),
												setTimeout(() => {
													g(!1);
												}, 300);
										},
										children: (0, u.Y)(k, { open: E, toggleOpen: n, treePath: X }),
									}),
									G
										? (p || T) &&
										  (0, i.createPortal)(
												(0, t.Y)('div', {
													className: s()('ss__dropdown__portal', Z, le, { 'ss__dropdown__portal--open': E }),
													css: f.css,
													style: { position: 'absolute', top: R.top, left: R.left, width: R.width, zIndex: 9999, pointerEvents: E ? 'auto' : 'none' },
													children: $,
												}),
												document.body
										  )
										: (p || T) && $,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(K, d, e) {
				'use strict';
				e.d(d, { S: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					a = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const F = ({ size: b, color: C, theme: x, native: k }) => {
						const p = isNaN(Number(b)) ? b : `${b}px`;
						return k
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: p,
									width: p,
									border: `1px solid ${C || x?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${b} - 30%)`, height: `calc(${b} - 30%)` },
							  });
					},
					ne = (0, s.PA)((b) => {
						const C = (0, r.u)(),
							k = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, B.LU)() },
							p = (0, S.v6)('checkbox', C, k, b),
							{
								checked: T,
								color: v,
								disabled: h,
								icon: D,
								iconColor: W,
								onClick: N,
								size: z,
								startChecked: w,
								native: Y,
								disableA11y: M,
								disableStyles: V,
								className: L,
								internalClassName: H,
								theme: Z,
								treePath: le,
								lang: X,
								style: G,
								styleScript: re,
								themeStyleScript: ae,
								name: E,
								...U
							} = p,
							{ overrideElement: J, shouldRenderDefault: A } = (0, Q._)('checkbox', p);
						if (!A) return J;
						const g = isNaN(Number(z)) ? z : `${z}px`,
							I = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, l.s)({ color: W || v || Z?.variables?.colors?.primary, disableStyles: V, icon: D, size: g && `calc(${g} - 30%)` }),
									theme: p.theme,
									treePath: le,
								},
							};
						let P, R;
						const q = T === void 0;
						q ? ([P, R] = (0, i.J0)(w)) : (P = T);
						const ie = (c) => {
								h || (q && R && R((ee) => !ee), N && N(c));
							},
							n = (0, O.Z)(p, F),
							f = { checkbox: {} },
							_ = oe()(f, X || {}),
							$ = (0, te.u)(_, { checkedState: P, disabled: h });
						return (0, t.Y)(y._, {
							children: Y
								? (0, t.Y)('input', {
										...n,
										className: a()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': h, 'ss__checkbox--active': P }, L, H),
										type: 'checkbox',
										'aria-checked': P,
										onClick: (c) => ie(c),
										disabled: h,
										checked: P,
								  })
								: (0, t.Y)('span', {
										...n,
										className: a()('ss__checkbox', { 'ss__checkbox--disabled': h, 'ss__checkbox--active': P }, L, H),
										onClick: (c) => ie(c),
										ref: (c) => (M ? null : (0, j.iy)(c)),
										'aria-disabled': h,
										role: 'checkbox',
										'aria-checked': P,
										...U,
										...$.checkbox.all,
										children: P
											? (0, t.Y)(u.I, { ...I.icon, ...(typeof D == 'string' ? { icon: D } : D) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(K, d, e) {
				'use strict';
				e.d(d, { B: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					a = e.n(m),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(s),
					S = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					se = e('./components/src/hooks/useA11y.tsx'),
					oe = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ne = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const b = ({ horizontal: x }) =>
						(0, o.AH)({
							display: 'flex',
							flexDirection: x ? 'row' : 'column',
							alignItems: x ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: x ? 'row' : 'column',
								alignItems: x ? 'center' : void 0,
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
						}),
					C = (0, O.PA)((x) => {
						const k = (0, r.u)(),
							T = { treePath: (0, B.LU)() },
							v = (0, j.v6)('list', k, T, x),
							{
								titleText: h,
								onSelect: D,
								native: W,
								multiSelect: N,
								hideOptionLabels: z,
								hideOptionIcons: w,
								hideOptionCheckboxes: Y,
								disabled: M,
								hideTitleText: V,
								options: L,
								requireSelection: H,
								disableStyles: Z,
								className: le,
								internalClassName: X,
								treePath: G,
							} = v,
							{ overrideElement: re, shouldRenderDefault: ae } = (0, F._)('list', v);
						if (!ae) return re;
						let E = v.selected;
						const U = {
								checkbox: { native: W, ...(0, u.s)({ disableStyles: Z }), theme: v?.theme, treePath: G },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, u.s)({ disableStyles: Z }), theme: v?.theme, treePath: G },
							},
							J = (0, te.Z)(v, b);
						E && !Array.isArray(E) && (E = [E]);
						const [A, g] = (0, i.J0)(E || []),
							[I] = (0, i.J0)(E || []);
						try {
							if (E) {
								const n = JSON.stringify(I),
									f = JSON.stringify(E),
									_ = JSON.stringify(A);
								n !== f && f !== _ && g(E);
							}
						} catch {}
						const P = (n, f) => {
								let _;
								N
									? A.find(($) => $.value === f.value)
										? ((_ = [...A]),
										  _.splice(
												_.findIndex(($) => $.value === f.value),
												1
										  ),
										  _.length == 0 && H && (_ = [f]))
										: (_ = [...A, f])
									: !H && A.find(($) => $.value === f.value)
									? (_ = [])
									: (_ = [f]),
									D && D(n, f, _),
									g(_);
							},
							R = {},
							q = l()(R, v.lang || {}),
							ie = (0, oe.u)(q, { options: L, selectedOptions: A });
						return typeof L == 'object' && L?.length
							? (0, t.Y)(y._, {
									children: (0, t.FD)('div', {
										...J,
										className: a()('ss__list', { 'ss__list--native': W, 'ss__list--disabled': M }, le, X),
										children: [
											(h || q?.title?.value) && !V && (0, t.Y)('h5', { className: 'ss__list__title', ...ie.title?.all, children: h }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': h,
												children: L.map((n) => {
													const f = A.some((_) => _.value == n.value);
													return (0, t.FD)('li', {
														className: a()(`ss__list__option ss__list__option--${S.p(n.value?.toString())}`, {
															'ss__list__option--selected': f,
															'ss__list__option--disabled': n?.disabled,
															'ss__list__option--unavailable': n?.available === !1,
														}),
														ref: (_) => (0, se.iy)(_),
														onClick: (_) => !M && !n?.disabled && P(_, n),
														title: n.label,
														role: 'option',
														'aria-selected': f,
														'aria-disabled': n.disabled || n?.available === !1,
														children: [
															!Y && (0, t.Y)(Q.S, { ...U.checkbox, checked: f, disableA11y: !0, 'aria-label': n.label }),
															n.icon && !w && (0, t.Y)(ne.I, { ...U.icon, ...(typeof n.icon == 'string' ? { icon: n.icon } : n.icon) }),
															!z && (n.label || !n.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: n.label || n.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(K, d, e) {
				'use strict';
				e.d(d, { s: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					a = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const F = ({ size: b, native: C }) =>
						C
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
						const C = (0, r.u)(),
							x = (0, B.LU)(),
							k = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: C.variables?.colors.primary || '#000000',
								treePath: x,
							},
							p = (0, S.v6)('radio', C, k, b),
							{
								checked: T,
								color: v,
								disabled: h,
								checkedIcon: D,
								unCheckedIcon: W,
								onClick: N,
								startChecked: z,
								native: w,
								disableA11y: Y,
								disableStyles: M,
								className: V,
								internalClassName: L,
								size: H,
								treePath: Z,
								lang: le,
								style: X,
								styleScript: G,
								themeStyleScript: re,
								name: ae,
								...E
							} = p,
							{ overrideElement: U, shouldRenderDefault: J } = (0, Q._)('radio', p);
						if (!J) return U;
						const A = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, l.s)({ size: H, color: v, disableStyles: M }),
								theme: p.theme,
								treePath: Z,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, l.s)({ size: H, color: v, disableStyles: M }),
								theme: p.theme,
								treePath: Z,
							},
						};
						let g, I;
						const P = T === void 0;
						P ? ([g, I] = (0, i.J0)(z)) : (g = T);
						const R = (_) => {
								h || (P && I && I(($) => !$), N && N(_));
							},
							q = (0, O.Z)(p, F),
							ie = { radio: {} },
							n = oe()(ie, le || {}),
							f = (0, te.u)(n, { disabled: h, checkedState: g });
						return (0, t.Y)(y._, {
							children: w
								? (0, t.Y)('div', {
										className: a()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': h }, V, L),
										...q,
										children: (0, t.Y)('input', {
											className: a()('ss__radio__input'),
											'aria-checked': g,
											type: 'radio',
											onClick: (_) => R(_),
											disabled: h,
											checked: g,
											tabIndex: Y ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...q,
										className: a()('ss__radio', { 'ss__radio--disabled': h, 'ss__radio--active': g }, V, L),
										onClick: (_) => R(_),
										ref: (_) => (Y ? null : (0, j.iy)(_)),
										...f.radio?.all,
										role: 'radio',
										'aria-checked': g,
										'aria-disabled': h,
										...E,
										children: g
											? (0, t.Y)(u.I, { ...A.activeIcon, ...(typeof D == 'string' ? { icon: D } : D) })
											: (0, t.Y)(u.I, { ...A.inactiveIcon, ...(typeof W == 'string' ? { icon: W } : W) }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(K, d, e) {
				'use strict';
				e.d(d, { DH: () => m, aZ: () => o, iy: () => a });
				const t = 9,
					i = 27,
					o = 'ss-a11y',
					m =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(s, l, S, O) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = y),
							(r.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(r);
					}
					s &&
						!s.attributes?.[o] &&
						(s.setAttribute(o, !0),
						s.setAttribute('tabIndex', `${l || 0}`),
						s.addEventListener('keydown', (r) => {
							(r.code === 'Space' || r.code === 'Enter') && s.click();
						}),
						S &&
							s.addEventListener('keydown', function (r) {
								const B = s.querySelectorAll(m),
									u = B[0],
									j = B[B.length - 1];
								if (r.keyCode == i) {
									s.focus(), O && O(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === t) &&
									(r.shiftKey
										? document.activeElement === u && (j.focus(), r.preventDefault())
										: document.activeElement === j && (u.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(K, d, e) {
				'use strict';
				e.d(d, { L: () => i });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function i(o) {
					const m = (0, t.li)(),
						a = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							m.current = o;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', s), () => document.removeEventListener('click', s);
							function s(l) {
								a.current && m.current && !a.current.contains(l.target) && m.current(l);
							}
						}, []),
						a
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(K, d, e) {
				'use strict';
				e.d(d, { u: () => t });
				const t = (i, o) => {
					const m = {};
					return (
						Object.keys(i).forEach((a) => {
							const s = i && i[a],
								l = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (l.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: s.value(o) } })
										: (l.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((l.attributes = { 'ss-lang': a }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = s.attributes['aria-label'](o))
											: (l.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](o))
											: (l.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (l.attributes.title = s.attributes.title(o))
											: (l.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (l.attributes.alt = s.attributes.alt(o)) : (l.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = s.attributes.placeholder(o))
											: (l.attributes.placeholder = s.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': a })),
								(m[a] = l);
						}),
						m
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(K, d, e) {
				'use strict';
				e.d(d, { F: () => t });
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
			'./components/src/utilities/defined.ts'(K, d, e) {
				'use strict';
				e.d(d, { s: () => t });
				function t(i) {
					const o = {};
					return (
						Object.keys(i).map((m) => {
							i[m] !== void 0 && (o[m] = i[m]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(K, d, e) {
				'use strict';
				e.d(d, { Z: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					m = (a) => {
						const s = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								s.current && a.className?.includes('lang-') && !a.className?.includes(o) && window?.Prism?.highlightElement(s.current);
							}, [a.className, a.children, s]),
							(0, t.Y)('code', { ...a, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(K) {
				function d(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (K.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LayoutSelector-LayoutSelector-stories.0b87403e.iframe.bundle.js.map
