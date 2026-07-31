(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9179],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(K, d, e) {
				'use strict';
				e.d(d, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let o = a.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx'(K, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => n, List: () => f, Radio: () => c, __namedExportsOrder: () => B, default: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/utilities/storybook.tsx'),
					p = e('./components/src/utilities/componentArgs.ts');
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

## Lang

The \`lang\` prop allows you to override translatable text strings used by the LayoutSelector component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`label\` | The selector label text | \`options\` (ListOption[]), \`selectedOptions\` (ListOption[]) |

### Example

\`\`\`tsx
<LayoutSelector
	options={layoutOptions}
	lang={{
		label: {
			value: 'Grid Layout',
		},
	}}
/>
\`\`\`
`;
				var l = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx');
				const v = {
						title: 'Molecules/LayoutSelector',
						component: l.s,
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
							...p.F,
						},
					},
					s = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
						{ label: '4 wide', value: '4 wide' },
						{ label: 'custom', value: 'custom' },
					],
					n = (m) =>
						(0, t.Y)('div', {
							style: { maxWidth: m?.type == 'list' || m?.type == 'dropdown' ? '500px' : '300px' },
							children: (0, t.Y)(l.s, {
								...m,
								onSelect: () => {
									console.log('');
								},
							}),
						});
				n.args = { label: 'Layout', options: s };
				const f = (m) =>
					(0, t.Y)('div', {
						style: { maxWidth: m?.type == 'list' || m?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(l.s, {
							...m,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				f.args = { options: s, label: 'List Layout Selector', type: 'list' };
				const c = (m) =>
					(0, t.Y)('div', {
						style: { maxWidth: m?.type == 'list' || m?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(l.s, {
							...m,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				(c.args = { options: s, label: 'Radio Layout Selector', type: 'radio' }),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
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
								...n.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
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
								...c.parameters?.docs?.source,
							},
						},
					});
				const B = ['Default', 'List', 'Radio'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(K, d, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					p = e.n(o),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/hooks/useA11y.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					k = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const F = ({ native: g, color: b, backgroundColor: C, borderColor: j, theme: E }) =>
						g
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: b || E?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: C || '#fff',
									border: `1px solid ${j || b || E?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					ne = (0, r.PA)((g) => {
						const b = (0, v.u)(),
							j = { disableA11y: !1, treePath: (0, s.LU)() },
							E = (0, B.v6)('button', b, j, g),
							{
								content: I,
								children: O,
								disabled: y,
								native: M,
								onClick: W,
								disableA11y: N,
								disableStyles: z,
								className: H,
								internalClassName: Y,
								icon: x,
								lang: V,
								treePath: A,
								style: w,
								styleScript: Z,
								themeStyleScript: le,
								...X
							} = E,
							{ overrideElement: G, shouldRenderDefault: re } = (0, Q._)('button', E);
						if (!re) return G;
						const ae = { icon: { internalClassName: 'ss__button__icon', ...(0, c.s)({ disableStyles: z }), theme: E?.theme, treePath: A } },
							U = {
								...(0, m.Z)(E, F),
								className: p()('ss__button', { 'ss__button--native': M, 'ss__button--disabled': y }, H, Y),
								disabled: y,
								onClick: (R) => !y && W && W(R),
								...X,
							},
							J = { ref: (R) => (0, n.iy)(R) },
							T = {},
							L = oe()(T, V || {}),
							S = (0, te.u)(L, {}, { activeBreakpoint: b?.activeBreakpoint }),
							D = !!X.dangerouslySetInnerHTML;
						return I || O || x || V?.button?.value || D
							? (0, t.Y)(l._, {
									children: M
										? (0, t.FD)('button', {
												...U,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...S.button?.all,
														children: [(0, f.Y)(I, { treePath: A }), (0, f.Y)(O, { treePath: A })],
													}),
													x && (0, t.Y)(k.I, { ...ae.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  })
										: (0, t.FD)('div', {
												...(N ? {} : J),
												role: 'button',
												'aria-disabled': y,
												...U,
												...S.button?.attributes,
												children: [
													I || O || S.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...S.button?.value,
																children: [(0, f.Y)(I, { treePath: A }), (0, f.Y)(O, { treePath: A })],
														  })
														: void 0,
													x && (0, t.Y)(k.I, { ...ae.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  }),
							  })
							: null;
					});
				e.d(d, ['$', 0, ne]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(K, d, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/compat/dist/compat.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					l = e.n(r),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/hooks/useClickOutside.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					m = e('./components/src/utilities/cloneWithProps.tsx'),
					k = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/hooks/useA11y.tsx');
				const se = ({ disableOverlay: F }) =>
						(0, p.AH)({
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
					oe = (0, v.PA)((F) => {
						const ne = (0, n.u)(),
							b = { startOpen: !1, disableA11y: !1, treePath: (0, f.LU)() },
							C = (0, k.v6)('dropdown', ne, b, F),
							{
								button: j,
								content: E,
								children: I,
								disabled: O,
								open: y,
								toggleOnHover: M,
								onMouseEnter: W,
								onMouseLeave: N,
								disableClick: z,
								onClick: H,
								onToggle: Y,
								focusTrapContent: x,
								startOpen: V,
								disableClickOutside: A,
								disableA11y: w,
								className: Z,
								internalClassName: le,
								treePath: X,
								usePortal: G,
							} = C,
							{ overrideElement: re, shouldRenderDefault: ae } = (0, B._)('dropdown', C);
						if (!ae) return re;
						let h, U;
						const J = y === void 0;
						J ? ([h, U] = (0, o.J0)(V)) : (h = y);
						const [T, L] = (0, o.J0)(!1),
							S = (0, o.li)(null),
							D = (0, o.li)(null),
							[R, q] = (0, o.J0)({ top: 0, left: 0, width: 0 });
						let ie;
						A ||
							(ie = (0, c.L)((_) => {
								(G && D.current && D.current.contains(_.target)) || (h && (O || (J && U && U(!1), Y && Y(_, !1))));
							})),
							(0, o.vJ)(() => {
								if (G && h) {
									const _ = () => {
										if (S.current) {
											const ee = S.current.getBoundingClientRect();
											q({ top: ee.bottom + window.scrollY, left: ee.left + window.scrollX, width: ee.width });
										}
									};
									return (
										_(),
										window.addEventListener('resize', _),
										window.addEventListener('scroll', _, !0),
										() => {
											window.removeEventListener('resize', _), window.removeEventListener('scroll', _, !0);
										}
									);
								}
							}, [G, h]);
						const i = (_, ee) => {
								J &&
									U &&
									U((de) => {
										const ce = ee ?? !de;
										return ce != de && Y && Y(_, ce), ce;
									});
							},
							P = (0, te.Z)(C, se),
							u = {
								onMouseEnter:
									(M || W) &&
									((_) => {
										T || (M && !O && i(_, !0), W && W(_));
									}),
								onMouseLeave:
									(M || N) &&
									((_) => {
										T || (M && !O && i(_, !1), N && N(_));
									}),
							},
							$ = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (_) => {
									(D.current = _),
										w ||
											(0, Q.iy)(_, 0, !!x, (ee) => {
												J ? i(ee) : H && H(ee);
											});
								},
								children: [(0, m.Y)(E, { open: h, toggleOpen: i, treePath: X }), (0, m.Y)(I, { open: h, toggleOpen: i, treePath: X })],
							});
						return (0, t.Y)(s._, {
							children: (0, t.FD)('div', {
								...P,
								className: l()('ss__dropdown', { 'ss__dropdown--open': h }, Z, le),
								ref: ie,
								...u,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (_) => {
											(S.current = _), w || (0, Q.iy)(_);
										},
										'aria-expanded': h,
										role: 'button',
										onTouchStart: () => {
											L(!0);
										},
										onClick: (_) => {
											!O && !z && (i(_), H && H(_)),
												setTimeout(() => {
													L(!1);
												}, 300);
										},
										children: (0, m.Y)(j, { open: h, toggleOpen: i, treePath: X }),
									}),
									G
										? (E || I) &&
										  (0, a.createPortal)(
												(0, t.Y)('div', {
													className: l()('ss__dropdown__portal', Z, le, { 'ss__dropdown__portal--open': h }),
													css: P.css,
													style: { position: 'absolute', top: R.top, left: R.left, width: R.width, zIndex: 9999, pointerEvents: h ? 'auto' : 'none' },
													children: $,
												}),
												document.body
										  )
										: (E || I) && $,
								],
							}),
						});
					});
				e.d(d, ['m', 0, oe]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(K, d, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					r = e.n(p),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/utilities/defined.ts'),
					s = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const F = ({ size: g, color: b, theme: C, native: j }) => {
						const E = isNaN(Number(g)) ? g : `${g}px`;
						return j
							? (0, o.AH)({})
							: (0, o.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: E,
									width: E,
									border: `1px solid ${b || C?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${g} - 30%)`, height: `calc(${g} - 30%)` },
							  });
					},
					ne = (0, l.PA)((g) => {
						const b = (0, c.u)(),
							j = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, B.LU)() },
							E = (0, s.v6)('checkbox', b, j, g),
							{
								checked: I,
								color: O,
								disabled: y,
								icon: M,
								iconColor: W,
								onClick: N,
								size: z,
								startChecked: H,
								native: Y,
								disableA11y: x,
								disableStyles: V,
								className: A,
								internalClassName: w,
								theme: Z,
								treePath: le,
								lang: X,
								style: G,
								styleScript: re,
								themeStyleScript: ae,
								name: h,
								...U
							} = E,
							{ overrideElement: J, shouldRenderDefault: T } = (0, Q._)('checkbox', E);
						if (!T) return J;
						const L = isNaN(Number(z)) ? z : `${z}px`,
							S = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, v.s)({ color: W || O || Z?.variables?.colors?.primary, disableStyles: V, icon: M, size: L && `calc(${L} - 30%)` }),
									theme: E.theme,
									treePath: le,
								},
							};
						let D, R;
						const q = I === void 0;
						q ? ([D, R] = (0, a.J0)(H)) : (D = I);
						const ie = (_) => {
								y || (q && R && R((ee) => !ee), N && N(_));
							},
							i = (0, n.Z)(E, F),
							P = { checkbox: {} },
							u = oe()(P, X || {}),
							$ = (0, te.u)(u, { checkedState: D, disabled: y }, { activeBreakpoint: b?.activeBreakpoint });
						return (0, t.Y)(f._, {
							children: Y
								? (0, t.Y)('input', {
										...i,
										className: r()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': y, 'ss__checkbox--active': D }, A, w),
										type: 'checkbox',
										'aria-checked': D,
										onClick: (_) => ie(_),
										disabled: y,
										checked: D,
								  })
								: (0, t.Y)('span', {
										...i,
										className: r()('ss__checkbox', { 'ss__checkbox--disabled': y, 'ss__checkbox--active': D }, A, w),
										onClick: (_) => ie(_),
										ref: (_) => (x ? null : (0, k.iy)(_)),
										'aria-disabled': y,
										role: 'checkbox',
										'aria-checked': D,
										...U,
										...$.checkbox.all,
										children: D
											? (0, t.Y)(m.I, { ...S.icon, ...(typeof M == 'string' ? { icon: M } : M) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(d, ['S', 0, ne]);
			},
			'./components/src/components/Molecules/List/List.tsx'(K, d, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					r = e.n(p),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(l),
					s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					k = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					se = e('./components/src/hooks/useA11y.tsx'),
					oe = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					ne = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const g = ({ horizontal: C }) =>
						(0, o.AH)({
							display: 'flex',
							flexDirection: C ? 'row' : 'column',
							alignItems: C ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: C ? 'row' : 'column',
								alignItems: C ? 'center' : void 0,
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
					b = (0, n.PA)((C) => {
						const j = (0, c.u)(),
							I = { treePath: (0, B.LU)() },
							O = (0, k.v6)('list', j, I, C),
							{
								titleText: y,
								onSelect: M,
								native: W,
								multiSelect: N,
								hideOptionLabels: z,
								hideOptionIcons: H,
								hideOptionCheckboxes: Y,
								disabled: x,
								hideTitleText: V,
								options: A,
								requireSelection: w,
								disableStyles: Z,
								className: le,
								internalClassName: X,
								treePath: G,
							} = O,
							{ overrideElement: re, shouldRenderDefault: ae } = (0, F._)('list', O);
						if (!ae) return re;
						let h = O.selected;
						const U = {
								checkbox: { native: W, ...(0, m.s)({ disableStyles: Z }), theme: O?.theme, treePath: G },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, m.s)({ disableStyles: Z }), theme: O?.theme, treePath: G },
							},
							J = (0, te.Z)(O, g);
						h && !Array.isArray(h) && (h = [h]);
						const [T, L] = (0, a.J0)(h || []),
							[S] = (0, a.J0)(h || []);
						try {
							if (h) {
								const i = JSON.stringify(S),
									P = JSON.stringify(h),
									u = JSON.stringify(T);
								i !== P && P !== u && L(h);
							}
						} catch {}
						const D = (i, P) => {
								let u;
								N
									? T.find(($) => $.value === P.value)
										? ((u = [...T]),
										  u.splice(
												u.findIndex(($) => $.value === P.value),
												1
										  ),
										  u.length == 0 && w && (u = [P]))
										: (u = [...T, P])
									: !w && T.find(($) => $.value === P.value)
									? (u = [])
									: (u = [P]),
									M && M(i, P, u),
									L(u);
							},
							R = {},
							q = v()(R, O.lang || {}),
							ie = (0, oe.u)(q, { options: A, selectedOptions: T }, { activeBreakpoint: j?.activeBreakpoint });
						return typeof A == 'object' && A?.length
							? (0, t.Y)(f._, {
									children: (0, t.FD)('div', {
										...J,
										className: r()('ss__list', { 'ss__list--native': W, 'ss__list--disabled': x }, le, X),
										children: [
											(y || q?.title?.value) && !V && (0, t.Y)('h5', { className: 'ss__list__title', ...ie.title?.all, children: y }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': y,
												children: A.map((i) => {
													const P = T.some((u) => u.value == i.value);
													return (0, t.FD)('li', {
														className: r()(`ss__list__option ss__list__option--${s.p(i.value?.toString())}`, {
															'ss__list__option--selected': P,
															'ss__list__option--disabled': i?.disabled,
															'ss__list__option--unavailable': i?.available === !1,
														}),
														ref: (u) => (0, se.iy)(u),
														onClick: (u) => !x && !i?.disabled && D(u, i),
														title: i.label,
														role: 'option',
														'aria-selected': P,
														'aria-disabled': i.disabled || i?.available === !1,
														children: [
															!Y && (0, t.Y)(Q.S, { ...U.checkbox, checked: P, disableA11y: !0, 'aria-label': i.label }),
															i.icon && !H && (0, t.Y)(ne.I, { ...U.icon, ...(typeof i.icon == 'string' ? { icon: i.icon } : i.icon) }),
															!z && (i.label || !i.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: i.label || i.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(d, ['B', 0, b]);
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(K, d, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					r = e.n(p),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/utilities/defined.ts'),
					s = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const F = ({ size: g, native: b }) =>
						b
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
					ne = (0, l.PA)((g) => {
						const b = (0, c.u)(),
							C = (0, B.LU)(),
							j = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: b.variables?.colors.primary || '#000000',
								treePath: C,
							},
							E = (0, s.v6)('radio', b, j, g),
							{
								checked: I,
								color: O,
								disabled: y,
								checkedIcon: M,
								unCheckedIcon: W,
								onClick: N,
								startChecked: z,
								native: H,
								disableA11y: Y,
								disableStyles: x,
								className: V,
								internalClassName: A,
								size: w,
								treePath: Z,
								lang: le,
								style: X,
								styleScript: G,
								themeStyleScript: re,
								name: ae,
								...h
							} = E,
							{ overrideElement: U, shouldRenderDefault: J } = (0, Q._)('radio', E);
						if (!J) return U;
						const T = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, v.s)({ size: w, color: O, disableStyles: x }),
								theme: E.theme,
								treePath: Z,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, v.s)({ size: w, color: O, disableStyles: x }),
								theme: E.theme,
								treePath: Z,
							},
						};
						let L, S;
						const D = I === void 0;
						D ? ([L, S] = (0, a.J0)(z)) : (L = I);
						const R = (u) => {
								y || (D && S && S(($) => !$), N && N(u));
							},
							q = (0, n.Z)(E, F),
							ie = { radio: {} },
							i = oe()(ie, le || {}),
							P = (0, te.u)(i, { disabled: y, checkedState: L }, { activeBreakpoint: b?.activeBreakpoint });
						return (0, t.Y)(f._, {
							children: H
								? (0, t.Y)('div', {
										className: r()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': y }, V, A),
										...q,
										children: (0, t.Y)('input', {
											className: r()('ss__radio__input'),
											'aria-checked': L,
											type: 'radio',
											onClick: (u) => R(u),
											disabled: y,
											checked: L,
											tabIndex: Y ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...q,
										className: r()('ss__radio', { 'ss__radio--disabled': y, 'ss__radio--active': L }, V, A),
										onClick: (u) => R(u),
										ref: (u) => (Y ? null : (0, k.iy)(u)),
										...P.radio?.all,
										role: 'radio',
										'aria-checked': L,
										'aria-disabled': y,
										...h,
										children: L
											? (0, t.Y)(m.I, { ...T.activeIcon, ...(typeof M == 'string' ? { icon: M } : M) })
											: (0, t.Y)(m.I, { ...T.inactiveIcon, ...(typeof W == 'string' ? { icon: W } : W) }),
								  }),
						});
					});
				e.d(d, ['s', 0, ne]);
			},
			'./components/src/hooks/useA11y.tsx'(K, d, e) {
				'use strict';
				e.d(d, { iy: () => r });
				const t = 9,
					a = 27,
					o = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(l, v, s, n) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = f),
							(c.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					l &&
						!l.attributes?.[o] &&
						(l.setAttribute(o, !0),
						l.setAttribute('tabIndex', `${v || 0}`),
						l.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && l.click();
						}),
						s &&
							l.addEventListener('keydown', function (c) {
								const B = l.querySelectorAll(p),
									m = B[0],
									k = B[B.length - 1];
								if (c.keyCode == a) {
									l.focus(), n && n(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === t) &&
									(c.shiftKey
										? document.activeElement === m && (k.focus(), c.preventDefault())
										: document.activeElement === k && (m.focus(), c.preventDefault()));
							}));
				}
				e.d(d, ['DH', 0, p, 'aZ', 0, o]);
			},
			'./components/src/hooks/useClickOutside.tsx'(K, d, e) {
				'use strict';
				e.d(d, { L: () => a });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(o) {
					const p = (0, t.li)(),
						r = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							p.current = o;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', l), () => document.removeEventListener('click', l);
							function l(v) {
								r.current && p.current && !r.current.contains(v.target) && p.current(v);
							}
						}, []),
						r
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(K, d, e) {
				'use strict';
				const t = (a, o, p) => {
					const r = p ? { ...o, ...p } : o,
						l = {};
					return (
						Object.keys(a).forEach((v) => {
							const s = a && a[v],
								n = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (n.value = { 'ss-lang': v, dangerouslySetInnerHTML: { __html: s.value(r) } })
										: (n.value = { 'ss-lang': v, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((n.attributes = { 'ss-lang': v }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = s.attributes['aria-label'](r))
											: (n.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](r))
											: (n.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (n.attributes.title = s.attributes.title(r))
											: (n.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (n.attributes.alt = s.attributes.alt(r)) : (n.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = s.attributes.placeholder(r))
											: (n.attributes.placeholder = s.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': v })),
								(l[v] = n);
						}),
						l
					);
				};
				e.d(d, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(K, d, e) {
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
				e.d(d, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(K, d, e) {
				'use strict';
				e.d(d, { s: () => t });
				function t(a) {
					const o = {};
					return (
						Object.keys(a).map((p) => {
							a[p] !== void 0 && (o[p] = a[p]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(K, d, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					p = (r) => {
						const l = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								l.current && r.className?.includes('lang-') && !r.className?.includes(o) && window?.Prism?.highlightElement(l.current);
							}, [r.className, r.children, l]),
							(0, t.Y)('code', { ...r, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(d, ['Z', 0, p]);
			},
			'../../node_modules/memoizerific sync recursive'(K) {
				function d(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (K.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LayoutSelector-LayoutSelector-stories.a2cbc8d2.iframe.bundle.js.map
