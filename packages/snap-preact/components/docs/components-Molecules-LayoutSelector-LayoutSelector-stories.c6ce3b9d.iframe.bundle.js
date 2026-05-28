(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9179],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(U, d, e) {
				'use strict';
				e.d(d, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let o = a.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx'(U, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => b, List: () => D, Radio: () => l, __namedExportsOrder: () => W, default: () => i });
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
					S = [
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
				b.args = { label: 'Layout', options: S };
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
				D.args = { options: S, label: 'List Layout Selector', type: 'list' };
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
				(l.args = { options: S, label: 'Radio Layout Selector', type: 'radio' }),
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
				const W = ['Default', 'List', 'Radio'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(U, d, e) {
				'use strict';
				e.d(d, { $: () => ie });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					_ = e.n(o),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/hooks/useA11y.tsx'),
					l = e('./components/src/utilities/cloneWithProps.tsx'),
					W = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					q = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					oe = e('./components/src/hooks/useLang.tsx'),
					ee = e('./components/src/hooks/useComponent.tsx'),
					ne = e('../../node_modules/deepmerge/dist/cjs.js'),
					le = e.n(ne);
				const z = ({ native: O, color: y, backgroundColor: F, borderColor: J, theme: K }) =>
						O
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: y || K?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: F || '#fff',
									border: `1px solid ${J || y || K?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					ie = (0, r.PA)((O) => {
						const y = (0, i.u)(),
							F = (0, S.uk)(),
							K = { disableA11y: !1, treePath: (0, b.LU)() },
							f = (0, m.v6)('button', y, K, O),
							{
								content: v,
								children: x,
								disabled: h,
								native: M,
								onClick: j,
								disableA11y: H,
								disableStyles: Q,
								className: V,
								internalClassName: k,
								icon: g,
								lang: N,
								treePath: I,
								customComponent: Y,
								style: te,
								styleScript: ae,
								themeStyleScript: Z,
								...$
							} = f;
						if (Y) {
							const p = (0, ee.x)(F?.templates?.library.import.component.button || {}, Y);
							if (p) return (0, t.Y)(p, { ...f });
						}
						const A = { icon: { internalClassName: 'ss__button__icon', ...(0, W.s)({ disableStyles: Q }), theme: f?.theme, treePath: I } },
							X = {
								...(0, B.Z)(f, z),
								className: _()('ss__button', { 'ss__button--native': M, 'ss__button--disabled': h }, V, k),
								disabled: h,
								onClick: (p) => !h && j && j(p),
								...$,
							},
							T = { ref: (p) => (0, D.iy)(p) },
							G = {},
							C = le()(G, N || {}),
							R = (0, oe.u)(C, {});
						return v || x || g || N?.button?.value
							? (0, t.Y)(s._, {
									children: M
										? (0, t.FD)('button', {
												...X,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...R.button?.all,
														children: [(0, l.Y)(v, { treePath: I }), (0, l.Y)(x, { treePath: I })],
													}),
													g && (0, t.Y)(q.I, { ...A.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
												],
										  })
										: (0, t.FD)('div', {
												...(H ? {} : T),
												role: 'button',
												'aria-disabled': h,
												...X,
												...R.button?.attributes,
												children: [
													v || x || R.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...R.button?.value,
																children: [(0, l.Y)(v, { treePath: I }), (0, l.Y)(x, { treePath: I })],
														  })
														: void 0,
													g && (0, t.Y)(q.I, { ...A.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(U, d, e) {
				'use strict';
				e.d(d, { m: () => le });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/compat/dist/compat.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					l = e('./components/src/providers/treePath.tsx'),
					W = e('./components/src/hooks/useClickOutside.tsx'),
					m = e('./components/src/hooks/useComponent.tsx'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					q = e('./components/src/utilities/mergeProps.ts'),
					oe = e('./components/src/utilities/mergeStyles.ts'),
					ee = e('./components/src/hooks/useA11y.tsx');
				const ne = ({ disableOverlay: z }) =>
						(0, _.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: z ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${z ? 'default' : 'pointer'}` },
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
					le = (0, i.PA)((z) => {
						const ie = (0, b.u)(),
							O = (0, D.uk)(),
							F = { startOpen: !1, disableA11y: !1, treePath: (0, l.LU)() },
							J = (0, q.v6)('dropdown', ie, F, z),
							{
								button: K,
								content: f,
								children: v,
								disabled: x,
								open: h,
								toggleOnHover: M,
								onMouseEnter: j,
								onMouseLeave: H,
								disableClick: Q,
								onClick: V,
								onToggle: k,
								focusTrapContent: g,
								startOpen: N,
								disableClickOutside: I,
								disableA11y: Y,
								className: te,
								internalClassName: ae,
								treePath: Z,
								usePortal: $,
								customComponent: A,
							} = J;
						if (A) {
							const n = (0, m.x)(O?.templates?.library.import.component.dropdown || {}, A);
							if (n) return (0, t.Y)(n, { ...J });
						}
						let L, X;
						const T = h === void 0;
						T ? ([L, X] = (0, o.J0)(N)) : (L = h);
						const [G, C] = (0, o.J0)(!1),
							R = (0, o.li)(null),
							p = (0, o.li)(null),
							[w, re] = (0, o.J0)({ top: 0, left: 0, width: 0 });
						let c;
						I ||
							(c = (0, W.L)((n) => {
								($ && p.current && p.current.contains(n.target)) || (L && (x || (T && X && X(!1), k && k(n, !1))));
							})),
							(0, o.vJ)(() => {
								if ($ && L) {
									const n = () => {
										if (R.current) {
											const se = R.current.getBoundingClientRect();
											re({ top: se.bottom + window.scrollY, left: se.left + window.scrollX, width: se.width });
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
							}, [$, L]);
						const u = (n, se) => {
								T &&
									X &&
									X((_e) => {
										const de = se ?? !_e;
										return de != _e && k && k(n, de), de;
									});
							},
							E = (0, oe.Z)(J, ne),
							P = {
								onMouseEnter:
									(M || j) &&
									((n) => {
										G || (M && !x && u(n, !0), j && j(n));
									}),
								onMouseLeave:
									(M || H) &&
									((n) => {
										G || (M && !x && u(n, !1), H && H(n));
									}),
							},
							ce = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (n) => {
									(p.current = n),
										Y ||
											(0, ee.iy)(n, 0, !!g, (se) => {
												T ? u(se) : V && V(se);
											});
								},
								children: [(0, B.Y)(f, { open: L, toggleOpen: u, treePath: Z }), (0, B.Y)(v, { open: L, toggleOpen: u, treePath: Z })],
							});
						return (0, t.Y)(S._, {
							children: (0, t.FD)('div', {
								...E,
								className: s()('ss__dropdown', { 'ss__dropdown--open': L }, te, ae),
								ref: c,
								...P,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (n) => {
											(R.current = n), Y || (0, ee.iy)(n);
										},
										'aria-expanded': L,
										role: 'button',
										onTouchStart: () => {
											C(!0);
										},
										onClick: (n) => {
											!x && !Q && (u(n), V && V(n)),
												setTimeout(() => {
													C(!1);
												}, 300);
										},
										children: (0, B.Y)(K, { open: L, toggleOpen: u, treePath: Z }),
									}),
									$
										? (f || v) &&
										  (0, a.createPortal)(
												(0, t.Y)('div', {
													className: s()('ss__dropdown__portal', te, ae, { 'ss__dropdown__portal--open': L }),
													css: E.css,
													style: { position: 'absolute', top: w.top, left: w.left, width: w.width, zIndex: 9999, pointerEvents: L ? 'auto' : 'none' },
													children: ce,
												}),
												document.body
										  )
										: (f || v) && ce,
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(U, d, e) {
				'use strict';
				e.d(d, { S: () => ie });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					q = e('./components/src/hooks/useA11y.tsx'),
					oe = e('./components/src/hooks/useLang.tsx'),
					ee = e('./components/src/hooks/useComponent.tsx'),
					ne = e('../../node_modules/deepmerge/dist/cjs.js'),
					le = e.n(ne);
				const z = ({ size: O, color: y, theme: F, native: J }) => {
						const K = isNaN(Number(O)) ? O : `${O}px`;
						return J
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: K,
									width: K,
									border: `1px solid ${y || F?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${O} - 30%)`, height: `calc(${O} - 30%)` },
							  });
					},
					ie = (0, s.PA)((O) => {
						const y = (0, l.u)(),
							F = (0, W.uk)(),
							K = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, m.LU)() },
							f = (0, S.v6)('checkbox', y, K, O),
							{
								checked: v,
								color: x,
								disabled: h,
								icon: M,
								iconColor: j,
								onClick: H,
								size: Q,
								startChecked: V,
								native: k,
								disableA11y: g,
								disableStyles: N,
								className: I,
								internalClassName: Y,
								theme: te,
								treePath: ae,
								lang: Z,
								customComponent: $,
								style: A,
								styleScript: L,
								themeStyleScript: X,
								name: T,
								...G
							} = f;
						if ($) {
							const n = (0, ee.x)(F?.templates?.library.import.component.checkbox || {}, $);
							if (n) return (0, t.Y)(n, { ...f });
						}
						const C = isNaN(Number(Q)) ? Q : `${Q}px`,
							R = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: j || x || te?.variables?.colors?.primary, disableStyles: N, icon: M, size: C && `calc(${C} - 30%)` }),
									theme: f.theme,
									treePath: ae,
								},
							};
						let p, w;
						const re = v === void 0;
						re ? ([p, w] = (0, a.J0)(V)) : (p = v);
						const c = (n) => {
								h || (re && w && w((se) => !se), H && H(n));
							},
							u = (0, b.Z)(f, z),
							E = { checkbox: {} },
							P = le()(E, Z || {}),
							ce = (0, oe.u)(P, { checkedState: p, disabled: h });
						return (0, t.Y)(D._, {
							children: k
								? (0, t.Y)('input', {
										...u,
										className: r()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': h, 'ss__checkbox--active': p }, I, Y),
										type: 'checkbox',
										'aria-checked': p,
										onClick: (n) => c(n),
										disabled: h,
										checked: p,
								  })
								: (0, t.Y)('span', {
										...u,
										className: r()('ss__checkbox', { 'ss__checkbox--disabled': h, 'ss__checkbox--active': p }, I, Y),
										onClick: (n) => c(n),
										ref: (n) => (g ? null : (0, q.iy)(n)),
										'aria-disabled': h,
										role: 'checkbox',
										'aria-checked': p,
										...G,
										...ce.checkbox.all,
										children: p
											? (0, t.Y)(B.I, { ...R.icon, ...(typeof M == 'string' ? { icon: M } : M) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(U, d, e) {
				'use strict';
				e.d(d, { B: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(s),
					S = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					b = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/providers/snap.tsx'),
					W = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					q = e('./components/src/utilities/mergeStyles.ts'),
					oe = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					ee = e('./components/src/hooks/useA11y.tsx'),
					ne = e('./components/src/hooks/useLang.tsx'),
					le = e('./components/src/hooks/useComponent.tsx'),
					z = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const ie = ({ horizontal: y }) =>
					(0, o.AH)({
						display: 'flex',
						flexDirection: y ? 'row' : 'column',
						alignItems: y ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: y ? 'row' : 'column',
							alignItems: y ? 'center' : void 0,
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
				function O(y) {
					const F = (0, D.u)(),
						J = (0, l.uk)(),
						f = { treePath: (0, W.LU)() },
						v = (0, B.v6)('list', F, f, y),
						{
							titleText: x,
							onSelect: h,
							native: M,
							multiSelect: j,
							hideOptionLabels: H,
							hideOptionIcons: Q,
							hideOptionCheckboxes: V,
							disabled: k,
							hideTitleText: g,
							options: N,
							requireSelection: I,
							disableStyles: Y,
							className: te,
							internalClassName: ae,
							treePath: Z,
							customComponent: $,
						} = v;
					if ($) {
						const c = (0, le.x)(J?.templates?.library.import.component.list || {}, $);
						if (c) return (0, t.Y)(c, { ...v });
					}
					let A = v.selected;
					const L = {
							checkbox: { native: M, ...(0, m.s)({ disableStyles: Y }), theme: v?.theme, treePath: Z },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, m.s)({ disableStyles: Y }), theme: v?.theme, treePath: Z },
						},
						X = (0, q.Z)(v, ie);
					A && !Array.isArray(A) && (A = [A]);
					const [T, G] = (0, a.J0)(A || []),
						[C] = (0, a.J0)(A || []);
					try {
						if (A) {
							const c = JSON.stringify(C),
								u = JSON.stringify(A),
								E = JSON.stringify(T);
							c !== u && u !== E && G(A);
						}
					} catch {}
					const R = (c, u) => {
							let E;
							j
								? T.find((P) => P.value === u.value)
									? ((E = [...T]),
									  E.splice(
											E.findIndex((P) => P.value === u.value),
											1
									  ),
									  E.length == 0 && I && (E = [u]))
									: (E = [...T, u])
								: !I && T.find((P) => P.value === u.value)
								? (E = [])
								: (E = [u]),
								h && h(c, u, E),
								G(E);
						},
						p = {},
						w = i()(p, v.lang || {}),
						re = (0, ne.u)(w, { options: N, selectedOptions: T });
					return typeof N == 'object' && N?.length
						? (0, t.Y)(b._, {
								children: (0, t.FD)('div', {
									...X,
									className: r()('ss__list', { 'ss__list--native': M, 'ss__list--disabled': k }, te, ae),
									children: [
										(x || w?.title?.value) && !g && (0, t.Y)('h5', { className: 'ss__list__title', ...re.title?.all, children: x }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': x,
											children: N.map((c) => {
												const u = T.some((E) => E.value == c.value);
												return (0, t.FD)('li', {
													className: r()(`ss__list__option ss__list__option--${S.p(c.value?.toString())}`, {
														'ss__list__option--selected': u,
														'ss__list__option--disabled': c?.disabled,
														'ss__list__option--unavailable': c?.available === !1,
													}),
													ref: (E) => (0, ee.iy)(E),
													onClick: (E) => !k && !c?.disabled && R(E, c),
													title: c.label,
													role: 'option',
													'aria-selected': u,
													'aria-disabled': c.disabled || c?.available === !1,
													children: [
														!V && (0, t.Y)(oe.S, { ...L.checkbox, checked: u, disableA11y: !0, 'aria-label': c.label }),
														c.icon && !Q && (0, t.Y)(z.I, { ...L.icon, ...(typeof c.icon == 'string' ? { icon: c.icon } : c.icon) }),
														!H && (c.label || !c.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: c.label || c.value }),
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
			'./components/src/components/Molecules/Radio/Radio.tsx'(U, d, e) {
				'use strict';
				e.d(d, { s: () => ie });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					q = e('./components/src/hooks/useA11y.tsx'),
					oe = e('./components/src/hooks/useLang.tsx'),
					ee = e('./components/src/hooks/useComponent.tsx'),
					ne = e('../../node_modules/deepmerge/dist/cjs.js'),
					le = e.n(ne);
				const z = ({ size: O, native: y }) =>
						y
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: O,
									width: O,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					ie = (0, s.PA)((O) => {
						const y = (0, l.u)(),
							F = (0, W.uk)(),
							J = (0, m.LU)(),
							K = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: y.variables?.colors.primary || '#000000',
								treePath: J,
							},
							f = (0, S.v6)('radio', y, K, O),
							{
								checked: v,
								color: x,
								disabled: h,
								checkedIcon: M,
								unCheckedIcon: j,
								onClick: H,
								startChecked: Q,
								native: V,
								disableA11y: k,
								disableStyles: g,
								className: N,
								internalClassName: I,
								size: Y,
								treePath: te,
								lang: ae,
								customComponent: Z,
								style: $,
								styleScript: A,
								themeStyleScript: L,
								name: X,
								...T
							} = f;
						if (Z) {
							const P = (0, ee.x)(F?.templates?.library.import.component.radio || {}, Z);
							if (P) return (0, t.Y)(P, { ...f });
						}
						const G = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, i.s)({ size: Y, color: x, disableStyles: g }),
								theme: f.theme,
								treePath: te,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, i.s)({ size: Y, color: x, disableStyles: g }),
								theme: f.theme,
								treePath: te,
							},
						};
						let C, R;
						const p = v === void 0;
						p ? ([C, R] = (0, a.J0)(Q)) : (C = v);
						const w = (P) => {
								h || (p && R && R((ce) => !ce), H && H(P));
							},
							re = (0, b.Z)(f, z),
							c = { radio: {} },
							u = le()(c, ae || {}),
							E = (0, oe.u)(u, { disabled: h, checkedState: C });
						return (0, t.Y)(D._, {
							children: V
								? (0, t.Y)('div', {
										className: r()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': h }, N, I),
										...re,
										children: (0, t.Y)('input', {
											className: r()('ss__radio__input'),
											'aria-checked': C,
											type: 'radio',
											onClick: (P) => w(P),
											disabled: h,
											checked: C,
											tabIndex: k ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...re,
										className: r()('ss__radio', { 'ss__radio--disabled': h, 'ss__radio--active': C }, N, I),
										onClick: (P) => w(P),
										ref: (P) => (k ? null : (0, q.iy)(P)),
										...E.radio?.all,
										role: 'radio',
										'aria-checked': C,
										'aria-disabled': h,
										...T,
										children: C
											? (0, t.Y)(B.I, { ...G.activeIcon, ...(typeof M == 'string' ? { icon: M } : M) })
											: (0, t.Y)(B.I, { ...G.inactiveIcon, ...(typeof j == 'string' ? { icon: j } : j) }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(U, d, e) {
				'use strict';
				e.d(d, { DH: () => _, aZ: () => o, iy: () => r });
				const t = 9,
					a = 27,
					o = 'ss-a11y',
					_ =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(s, i, S, b) {
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
						S &&
							s.addEventListener('keydown', function (l) {
								const W = s.querySelectorAll(_),
									m = W[0],
									B = W[W.length - 1];
								if (l.keyCode == a) {
									s.focus(), b && b(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === t) &&
									(l.shiftKey
										? document.activeElement === m && (B.focus(), l.preventDefault())
										: document.activeElement === B && (m.focus(), l.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(U, d, e) {
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
			'./components/src/hooks/useLang.tsx'(U, d, e) {
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
			'./components/src/utilities/componentArgs.ts'(U, d, e) {
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
			'./components/src/utilities/defined.ts'(U, d, e) {
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
			'./components/src/utilities/storybook.tsx'(U, d, e) {
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
			'../../node_modules/memoizerific sync recursive'(U) {
				function d(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (U.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LayoutSelector-LayoutSelector-stories.c6ce3b9d.iframe.bundle.js.map
