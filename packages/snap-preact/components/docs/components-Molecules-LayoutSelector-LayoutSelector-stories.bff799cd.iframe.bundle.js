(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9179],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(k, d, e) {
				'use strict';
				e.d(d, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let o = a.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx'(k, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => b, List: () => D, Radio: () => l, __namedExportsOrder: () => B, default: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts');
				const r = `# LayoutSelector

Renders a layout selector to be used with snap templates for changing result layout settings. 

## Sub-components
- Select
- RadioList 
- List


## Usage

### options
The required \`options\` prop specifies an array of layoutOptions to render. When using Snap Templates, overrides can be provided in each option - these overrides will be applied when the option is selected.

\`\`\`jsx
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

\`\`\`jsx

<LayoutSelector onSelect={(e, option) => callback()} options={layoutOptions} />

\`\`\`

### type
The \`type\` prop specifies the type of selector to render. Options are \`'radio'\`, \`'list'\`, or \`'dropdown'\`. Defaults to \`"dropdown"\`.

\`\`\`jsx
<LayoutSelector type={"list"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### selected
The \`selected\` prop specifies the intitially selected option. 

\`\`\`jsx
<LayoutSelector onSelect={(e, option) => callback()} selected={layoutOptions[0]} options={layoutOptions} />
\`\`\`

### label
The \`label\` prop specifies the label to render. Defaults to \`"Layout"\`.

\`\`\`jsx
<LayoutSelector label={"Layout"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### hideLabel
The \`hideLabel\` prop hides the selector label.

\`\`\`jsx
<LayoutSelector hideLabel={true} label={"Layout"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### hideOptionLabels
The \`hideOptionLabels\` prop hides the option labels.

\`\`\`jsx
<LayoutSelector hideOptionLabels={true} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### showSingleOption
The \`showSingleOption\` prop specifies if the component should render if the provided options prop contains a single option. 
\`\`\`jsx
<LayoutSelector showSingleOption={true} onSelect={(e, option) => callback()} options={layoutOptions.slice(0, 1)} />
\`\`\`
`;
				var s = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx');
				const i = {
						title: 'Molecules/LayoutSelector',
						component: s.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(a.oz, { options: { overrides: { code: o.Z } }, children: r }), (0, t.Y)(a.uY, { story: a.h1 })],
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
					b = (m) =>
						(0, t.Y)('div', {
							style: { maxWidth: m?.type == 'list' || m?.type == 'dropdown' ? '500px' : '300px' },
							children: (0, t.Y)(s.s, {
								...m,
								onSelect: () => {
									console.log('');
								},
							}),
						});
				b.args = { label: 'Layout', options: W };
				const D = (m) =>
					(0, t.Y)('div', {
						style: { maxWidth: m?.type == 'list' || m?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(s.s, {
							...m,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				D.args = { options: W, label: 'List Layout Selector', type: 'list' };
				const l = (m) =>
					(0, t.Y)('div', {
						style: { maxWidth: m?.type == 'list' || m?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(s.s, {
							...m,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				(l.args = { options: W, label: 'Radio Layout Selector', type: 'radio' }),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
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
								...b.parameters?.docs?.source,
							},
						},
					}),
					(D.parameters = {
						...D.parameters,
						docs: {
							...D.parameters?.docs,
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
								...D.parameters?.docs?.source,
							},
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
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
								...l.parameters?.docs?.source,
							},
						},
					});
				const B = ['Default', 'List', 'Radio'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(k, d, e) {
				'use strict';
				e.d(d, { $: () => L });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					_ = e.n(o),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/hooks/useA11y.tsx'),
					l = e('./components/src/utilities/cloneWithProps.tsx'),
					B = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					te = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					le = e('./components/src/hooks/useLang.tsx'),
					se = e('./components/src/hooks/useComponent.tsx'),
					ie = e('../../node_modules/deepmerge/dist/cjs.js'),
					ae = e.n(ie),
					V = e('../../node_modules/color/index.js'),
					re = e.n(V);
				const g = ({ native: H, color: T, backgroundColor: N, borderColor: M, theme: h }) => {
						const y = new (re())(N || T || h?.variables?.colors?.primary || void 0).lightness(95);
						return H
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: T || h?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: N || '#fff',
									border: `1px solid ${M || T || h?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: y.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					L = (0, r.PA)((H) => {
						const T = (0, i.u)(),
							N = (0, W.uk)(),
							h = { disableA11y: !1, treePath: (0, b.LU)() },
							y = (0, m.v6)('button', T, h, H),
							{
								content: E,
								children: v,
								disabled: I,
								native: Y,
								onClick: Z,
								disableA11y: X,
								disableStyles: F,
								className: oe,
								internalClassName: $,
								icon: f,
								lang: J,
								treePath: K,
								customComponent: ee,
								style: G,
								styleScript: Q,
								themeStyleScript: j,
								...x
							} = y;
						if (ee) {
							const S = (0, se.x)(N?.templates?.library.import.component.button || {}, ee);
							if (S) return (0, t.Y)(S, { ...y });
						}
						const q = { icon: { internalClassName: 'ss__button__icon', ...(0, B.s)({ disableStyles: F }), theme: y?.theme, treePath: K } },
							w = {
								...(0, U.Z)(y, g),
								className: _()('ss__button', { 'ss__button--native': Y, 'ss__button--disabled': I }, oe, $),
								disabled: I,
								onClick: (S) => !I && Z && Z(S),
								...x,
							},
							C = { ref: (S) => (0, D.iy)(S) },
							z = {},
							O = ae()(z, J || {}),
							A = (0, le.u)(O, {});
						return E || v || f || J?.button?.value
							? (0, t.Y)(s._, {
									children: Y
										? (0, t.FD)('button', {
												...w,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...A.button?.all,
														children: [(0, l.Y)(E, { treePath: K }), (0, l.Y)(v, { treePath: K })],
													}),
													f && (0, t.Y)(te.I, { ...q.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  })
										: (0, t.FD)('div', {
												...(X ? {} : C),
												role: 'button',
												'aria-disabled': I,
												...w,
												...A.button?.attributes,
												children: [
													E || v || A.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...A.button?.value,
																children: [(0, l.Y)(E, { treePath: K }), (0, l.Y)(v, { treePath: K })],
														  })
														: void 0,
													f && (0, t.Y)(te.I, { ...q.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(k, d, e) {
				'use strict';
				e.d(d, { m: () => ae });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/compat/dist/compat.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					l = e('./components/src/providers/treePath.tsx'),
					B = e('./components/src/hooks/useClickOutside.tsx'),
					m = e('./components/src/hooks/useComponent.tsx'),
					U = e('./components/src/utilities/cloneWithProps.tsx'),
					te = e('./components/src/utilities/mergeProps.ts'),
					le = e('./components/src/utilities/mergeStyles.ts'),
					se = e('./components/src/hooks/useA11y.tsx');
				const ie = ({ disableOverlay: V }) =>
						(0, _.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: V ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${V ? 'default' : 'pointer'}` },
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
					ae = (0, i.PA)((V) => {
						const re = (0, b.u)(),
							g = (0, D.uk)(),
							H = { startOpen: !1, disableA11y: !1, treePath: (0, l.LU)() },
							T = (0, te.v6)('dropdown', re, H, V),
							{
								button: N,
								content: M,
								children: h,
								disabled: y,
								open: E,
								toggleOnHover: v,
								onMouseEnter: I,
								onMouseLeave: Y,
								disableClick: Z,
								onClick: X,
								onToggle: F,
								focusTrapContent: oe,
								startOpen: $,
								disableClickOutside: f,
								disableA11y: J,
								className: K,
								internalClassName: ee,
								treePath: G,
								usePortal: Q,
								customComponent: j,
							} = T;
						if (j) {
							const n = (0, m.x)(g?.templates?.library.import.component.dropdown || {}, j);
							if (n) return (0, t.Y)(n, { ...T });
						}
						let x, q;
						const R = E === void 0;
						R ? ([x, q] = (0, o.J0)($)) : (x = E);
						const [w, C] = (0, o.J0)(!1),
							z = (0, o.li)(null),
							O = (0, o.li)(null),
							[A, S] = (0, o.J0)({ top: 0, left: 0, width: 0 });
						let c;
						f ||
							(c = (0, B.L)((n) => {
								(Q && O.current && O.current.contains(n.target)) || (x && (y || (R && q && q(!1), F && F(n, !1))));
							})),
							(0, o.vJ)(() => {
								if (Q && x) {
									const n = () => {
										if (z.current) {
											const ne = z.current.getBoundingClientRect();
											S({ top: ne.bottom + window.scrollY, left: ne.left + window.scrollX, width: ne.width });
										}
									};
									return (
										n(),
										window.addEventListener('resize', n),
										window.addEventListener('scroll', n, !0),
										() => {
											window.removeEventListener('resize', n), window.removeEventListener('scroll', n, !0);
										}
									);
								}
							}, [Q, x]);
						const u = (n, ne) => {
								R &&
									q &&
									q((_e) => {
										const de = ne ?? !_e;
										return de != _e && F && F(n, de), de;
									});
							},
							p = (0, le.Z)(T, ie),
							P = {
								onMouseEnter:
									(v || I) &&
									((n) => {
										w || (v && !y && u(n, !0), I && I(n));
									}),
								onMouseLeave:
									(v || Y) &&
									((n) => {
										w || (v && !y && u(n, !1), Y && Y(n));
									}),
							},
							ce = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (n) => {
									(O.current = n),
										J ||
											(0, se.iy)(n, 0, !!oe, (ne) => {
												R ? u(ne) : X && X(ne);
											});
								},
								children: [(0, U.Y)(M, { open: x, toggleOpen: u, treePath: G }), (0, U.Y)(h, { open: x, toggleOpen: u, treePath: G })],
							});
						return (0, t.Y)(W._, {
							children: (0, t.FD)('div', {
								...p,
								className: s()('ss__dropdown', { 'ss__dropdown--open': x }, K, ee),
								ref: c,
								...P,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (n) => {
											(z.current = n), J || (0, se.iy)(n);
										},
										'aria-expanded': x,
										role: 'button',
										onTouchStart: () => {
											C(!0);
										},
										onClick: (n) => {
											!y && !Z && (u(n), X && X(n)),
												setTimeout(() => {
													C(!1);
												}, 300);
										},
										children: (0, U.Y)(N, { open: x, toggleOpen: u, treePath: G }),
									}),
									Q
										? x &&
										  (M || h) &&
										  (0, a.createPortal)(
												(0, t.Y)('div', {
													className: s()('ss__dropdown__portal', K, ee, { 'ss__dropdown__portal--open': x }),
													css: p.css,
													style: { position: 'absolute', top: A.top, left: A.left, width: A.width, zIndex: 9999 },
													children: ce,
												}),
												document.body
										  )
										: (M || h) && ce,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(k, d, e) {
				'use strict';
				e.d(d, { S: () => re });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/utilities/defined.ts'),
					W = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/hooks/useA11y.tsx'),
					le = e('./components/src/hooks/useLang.tsx'),
					se = e('./components/src/hooks/useComponent.tsx'),
					ie = e('../../node_modules/deepmerge/dist/cjs.js'),
					ae = e.n(ie);
				const V = ({ size: g, color: L, theme: H, native: T }) => {
						const N = isNaN(Number(g)) ? g : `${g}px`;
						return T
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: N,
									width: N,
									border: `1px solid ${L || H?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${g} - 30%)`, height: `calc(${g} - 30%)` },
							  });
					},
					re = (0, s.PA)((g) => {
						const L = (0, l.u)(),
							H = (0, B.uk)(),
							N = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, m.LU)() },
							M = (0, W.v6)('checkbox', L, N, g),
							{
								checked: h,
								color: y,
								disabled: E,
								icon: v,
								iconColor: I,
								onClick: Y,
								size: Z,
								startChecked: X,
								native: F,
								disableA11y: oe,
								disableStyles: $,
								className: f,
								internalClassName: J,
								theme: K,
								treePath: ee,
								lang: G,
								customComponent: Q,
								style: j,
								styleScript: x,
								themeStyleScript: q,
								name: R,
								...w
							} = M;
						if (Q) {
							const n = (0, se.x)(H?.templates?.library.import.component.checkbox || {}, Q);
							if (n) return (0, t.Y)(n, { ...M });
						}
						const C = isNaN(Number(Z)) ? Z : `${Z}px`,
							z = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: I || y || K?.variables?.colors?.primary, disableStyles: $, icon: v, size: C && `calc(${C} - 30%)` }),
									theme: M.theme,
									treePath: ee,
								},
							};
						let O, A;
						const S = h === void 0;
						S ? ([O, A] = (0, a.J0)(X)) : (O = h);
						const c = (n) => {
								E || (S && A && A((ne) => !ne), Y && Y(n));
							},
							u = (0, b.Z)(M, V),
							p = { checkbox: {} },
							P = ae()(p, G || {}),
							ce = (0, le.u)(P, { checkedState: O, disabled: E });
						return (0, t.Y)(D._, {
							children: F
								? (0, t.Y)('input', {
										...u,
										className: r()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': E, 'ss__checkbox--active': O }, f, J),
										type: 'checkbox',
										'aria-checked': O,
										onClick: (n) => c(n),
										disabled: E,
										checked: O,
								  })
								: (0, t.Y)('span', {
										...u,
										className: r()('ss__checkbox', { 'ss__checkbox--disabled': E, 'ss__checkbox--active': O }, f, J),
										onClick: (n) => c(n),
										ref: (n) => (oe ? null : (0, te.iy)(n)),
										'aria-disabled': E,
										role: 'checkbox',
										'aria-checked': O,
										...w,
										...ce.checkbox.all,
										children: O
											? (0, t.Y)(U.I, { ...z.icon, ...(typeof v == 'string' ? { icon: v } : v) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(k, d, e) {
				'use strict';
				e.d(d, { B: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(s),
					W = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					b = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/providers/snap.tsx'),
					B = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					U = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					le = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					se = e('./components/src/hooks/useA11y.tsx'),
					ie = e('./components/src/hooks/useLang.tsx'),
					ae = e('./components/src/hooks/useComponent.tsx'),
					V = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const re = ({ horizontal: L }) =>
					(0, o.AH)({
						display: 'flex',
						flexDirection: L ? 'row' : 'column',
						alignItems: L ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: L ? 'row' : 'column',
							alignItems: L ? 'center' : void 0,
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
				function g(L) {
					const H = (0, D.u)(),
						T = (0, l.uk)(),
						M = { treePath: (0, B.LU)() },
						h = (0, U.v6)('list', H, M, L),
						{
							titleText: y,
							onSelect: E,
							native: v,
							multiSelect: I,
							hideOptionLabels: Y,
							hideOptionIcons: Z,
							hideOptionCheckboxes: X,
							disabled: F,
							hideTitleText: oe,
							options: $,
							requireSelection: f,
							disableStyles: J,
							className: K,
							internalClassName: ee,
							treePath: G,
							customComponent: Q,
						} = h;
					if (Q) {
						const c = (0, ae.x)(T?.templates?.library.import.component.list || {}, Q);
						if (c) return (0, t.Y)(c, { ...h });
					}
					let j = h.selected;
					const x = {
							checkbox: { native: v, ...(0, m.s)({ disableStyles: J }), theme: h?.theme, treePath: G },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, m.s)({ disableStyles: J }), theme: h?.theme, treePath: G },
						},
						q = (0, te.Z)(h, re);
					j && !Array.isArray(j) && (j = [j]);
					const [R, w] = (0, a.J0)(j || []),
						[C] = (0, a.J0)(j || []);
					try {
						if (j) {
							const c = JSON.stringify(C),
								u = JSON.stringify(j),
								p = JSON.stringify(R);
							c !== u && u !== p && w(j);
						}
					} catch {}
					const z = (c, u) => {
							let p;
							I
								? R.find((P) => P.value === u.value)
									? ((p = [...R]),
									  p.splice(
											p.findIndex((P) => P.value === u.value),
											1
									  ),
									  p.length == 0 && f && (p = [u]))
									: (p = [...R, u])
								: !f && R.find((P) => P.value === u.value)
								? (p = [])
								: (p = [u]),
								E && E(c, u, p),
								w(p);
						},
						O = {},
						A = i()(O, h.lang || {}),
						S = (0, ie.u)(A, { options: $, selectedOptions: R });
					return typeof $ == 'object' && $?.length
						? (0, t.Y)(b._, {
								children: (0, t.FD)('div', {
									...q,
									className: r()('ss__list', { 'ss__list--native': v, 'ss__list--disabled': F }, K, ee),
									children: [
										(y || A?.title?.value) && !oe && (0, t.Y)('h5', { className: 'ss__list__title', ...S.title?.all, children: y }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': y,
											children: $.map((c) => {
												const u = R.some((p) => p.value == c.value);
												return (0, t.FD)('li', {
													className: r()(`ss__list__option ss__list__option--${W.p(c.value?.toString())}`, {
														'ss__list__option--selected': u,
														'ss__list__option--disabled': c?.disabled,
														'ss__list__option--unavailable': c?.available === !1,
													}),
													ref: (p) => (0, se.iy)(p),
													onClick: (p) => !F && !c?.disabled && z(p, c),
													title: c.label,
													role: 'option',
													'aria-selected': u,
													'aria-disabled': c.disabled || c?.available === !1,
													children: [
														!X && (0, t.Y)(le.S, { ...x.checkbox, checked: u, disableA11y: !0, 'aria-label': c.label }),
														c.icon && !Z && (0, t.Y)(V.I, { ...x.icon, ...(typeof c.icon == 'string' ? { icon: c.icon } : c.icon) }),
														!Y && (c.label || !c.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: c.label || c.value }),
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
			'./components/src/components/Molecules/Radio/Radio.tsx'(k, d, e) {
				'use strict';
				e.d(d, { s: () => re });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/utilities/defined.ts'),
					W = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/hooks/useA11y.tsx'),
					le = e('./components/src/hooks/useLang.tsx'),
					se = e('./components/src/hooks/useComponent.tsx'),
					ie = e('../../node_modules/deepmerge/dist/cjs.js'),
					ae = e.n(ie);
				const V = ({ size: g, native: L }) =>
						L
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: g,
									width: g,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					re = (0, s.PA)((g) => {
						const L = (0, l.u)(),
							H = (0, B.uk)(),
							T = (0, m.LU)(),
							N = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: L.variables?.colors.primary || '#000000',
								treePath: T,
							},
							M = (0, W.v6)('radio', L, N, g),
							{
								checked: h,
								color: y,
								disabled: E,
								checkedIcon: v,
								unCheckedIcon: I,
								onClick: Y,
								startChecked: Z,
								native: X,
								disableA11y: F,
								disableStyles: oe,
								className: $,
								internalClassName: f,
								size: J,
								treePath: K,
								lang: ee,
								customComponent: G,
								style: Q,
								styleScript: j,
								themeStyleScript: x,
								name: q,
								...R
							} = M;
						if (G) {
							const P = (0, se.x)(H?.templates?.library.import.component.radio || {}, G);
							if (P) return (0, t.Y)(P, { ...M });
						}
						const w = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, i.s)({ size: J, color: y, disableStyles: oe }),
								theme: M.theme,
								treePath: K,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, i.s)({ size: J, color: y, disableStyles: oe }),
								theme: M.theme,
								treePath: K,
							},
						};
						let C, z;
						const O = h === void 0;
						O ? ([C, z] = (0, a.J0)(Z)) : (C = h);
						const A = (P) => {
								E || (O && z && z((ce) => !ce), Y && Y(P));
							},
							S = (0, b.Z)(M, V),
							c = { radio: {} },
							u = ae()(c, ee || {}),
							p = (0, le.u)(u, { disabled: E, checkedState: C });
						return (0, t.Y)(D._, {
							children: X
								? (0, t.Y)('div', {
										className: r()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': E }, $, f),
										...S,
										children: (0, t.Y)('input', {
											className: r()('ss__radio__input'),
											'aria-checked': C,
											type: 'radio',
											onClick: (P) => A(P),
											disabled: E,
											checked: C,
											tabIndex: F ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...S,
										className: r()('ss__radio', { 'ss__radio--disabled': E, 'ss__radio--active': C }, $, f),
										onClick: (P) => A(P),
										ref: (P) => (F ? null : (0, te.iy)(P)),
										...p.radio?.all,
										role: 'radio',
										'aria-checked': C,
										'aria-disabled': E,
										...R,
										children: C
											? (0, t.Y)(U.I, { ...w.activeIcon, ...(typeof v == 'string' ? { icon: v } : v) })
											: (0, t.Y)(U.I, { ...w.inactiveIcon, ...(typeof I == 'string' ? { icon: I } : I) }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(k, d, e) {
				'use strict';
				e.d(d, { DH: () => _, aZ: () => o, iy: () => r });
				const t = 9,
					a = 27,
					o = 'ss-a11y',
					_ =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(s, i, W, b) {
					const D = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${D}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = D),
							(l.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					s &&
						!s.attributes?.[o] &&
						(s.setAttribute(o, !0),
						s.setAttribute('tabIndex', `${i || 0}`),
						s.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && s.click();
						}),
						W &&
							s.addEventListener('keydown', function (l) {
								const B = s.querySelectorAll(_),
									m = B[0],
									U = B[B.length - 1];
								if (l.keyCode == a) {
									s.focus(), b && b(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === t) &&
									(l.shiftKey
										? document.activeElement === m && (U.focus(), l.preventDefault())
										: document.activeElement === U && (m.focus(), l.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(k, d, e) {
				'use strict';
				e.d(d, { L: () => a });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(o) {
					const _ = (0, t.li)(),
						r = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							_.current = o;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', s), () => document.removeEventListener('click', s);
							function s(i) {
								r.current && _.current && !r.current.contains(i.target) && _.current(i);
							}
						}, []),
						r
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(k, d, e) {
				'use strict';
				e.d(d, { u: () => t });
				const t = (a, o) => {
					const _ = {};
					return (
						Object.keys(a).forEach((r) => {
							const s = a && a[r],
								i = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (i.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: s.value(o) } })
										: (i.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((i.attributes = { 'ss-lang': r }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = s.attributes['aria-label'](o))
											: (i.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](o))
											: (i.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (i.attributes.title = s.attributes.title(o))
											: (i.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (i.attributes.alt = s.attributes.alt(o)) : (i.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = s.attributes.placeholder(o))
											: (i.attributes.placeholder = s.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': r })),
								(_[r] = i);
						}),
						_
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(k, d, e) {
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
			'./components/src/utilities/defined.ts'(k, d, e) {
				'use strict';
				e.d(d, { s: () => t });
				function t(a) {
					const o = {};
					return (
						Object.keys(a).map((_) => {
							a[_] !== void 0 && (o[_] = a[_]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(k, d, e) {
				'use strict';
				e.d(d, { Z: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					_ = (r) => {
						const s = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								s.current && r.className?.includes('lang-') && !r.className?.includes(o) && window?.Prism?.highlightElement(s.current);
							}, [r.className, r.children, s]),
							(0, t.Y)('code', { ...r, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(k) {
				function d(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (k.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LayoutSelector-LayoutSelector-stories.bff799cd.iframe.bundle.js.map
