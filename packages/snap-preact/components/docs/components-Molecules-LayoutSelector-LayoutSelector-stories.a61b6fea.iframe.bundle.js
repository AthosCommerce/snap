(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9179],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, r, e) {
				'use strict';
				e.d(r, { p: () => t });
				function t(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.stories.tsx'(R, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => a, List: () => y, Radio: () => c, __namedExportsOrder: () => B, default: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts');
				const _ = `# LayoutSelector

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
				var i = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx');
				const h = {
						title: 'Molecules/LayoutSelector',
						component: i.s,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: n.Z } }, children: _ }), (0, t.Y)(l.uY, { story: l.h1 })],
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
							...u.F,
						},
					},
					o = [
						{ label: '1 wide', value: '1 wide', icon: 'square' },
						{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
						{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
						{ label: '4 wide', value: '4 wide' },
						{ label: 'custom', value: 'custom' },
					],
					a = (p) =>
						(0, t.Y)('div', {
							style: { maxWidth: p?.type == 'list' || p?.type == 'dropdown' ? '500px' : '300px' },
							children: (0, t.Y)(i.s, {
								...p,
								onSelect: () => {
									console.log('');
								},
							}),
						});
				a.args = { label: 'Layout', options: o };
				const y = (p) =>
					(0, t.Y)('div', {
						style: { maxWidth: p?.type == 'list' || p?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(i.s, {
							...p,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				y.args = { options: o, label: 'List Layout Selector', type: 'list' };
				const c = (p) =>
					(0, t.Y)('div', {
						style: { maxWidth: p?.type == 'list' || p?.type == 'dropdown' ? '500px' : '300px' },
						children: (0, t.Y)(i.s, {
							...p,
							onSelect: () => {
								console.log('');
							},
						}),
					});
				(c.args = { options: o, label: 'Radio Layout Selector', type: 'radio' }),
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
			'./components/src/components/Atoms/Button/Button.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					u = e.n(n),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/hooks/useA11y.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					N = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const H = ({ native: D, color: P, backgroundColor: Y, borderColor: M, theme: E }) =>
						D
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: P || E?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: Y || '#fff',
									border: `1px solid ${M || P || E?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					V = (0, _.PA)((D) => {
						const P = (0, h.u)(),
							M = { disableA11y: !1, treePath: (0, o.LU)() },
							E = (0, B.v6)('button', P, M, D),
							{
								content: S,
								children: A,
								disabled: m,
								native: O,
								onClick: W,
								disableA11y: j,
								disableStyles: Z,
								className: w,
								internalClassName: F,
								icon: g,
								lang: J,
								treePath: U,
								style: k,
								styleScript: X,
								themeStyleScript: q,
								...G
							} = E,
							{ overrideElement: ee, shouldRenderDefault: ie } = (0, z._)('button', E);
						if (!ie) return ee;
						const ae = { icon: { internalClassName: 'ss__button__icon', ...(0, c.s)({ disableStyles: Z }), theme: E?.theme, treePath: U } },
							f = {
								...(0, p.Z)(E, H),
								className: u()('ss__button', { 'ss__button--native': O, 'ss__button--disabled': m }, w, F),
								disabled: m,
								onClick: (T) => !m && W && W(T),
								...G,
							},
							$ = { ref: (T) => (0, a.iy)(T) },
							Q = {},
							v = oe()(Q, J || {}),
							C = (0, te.u)(v, {}, { activeBreakpoint: P?.activeBreakpoint }),
							b = !!G.dangerouslySetInnerHTML;
						return S || A || g || J?.button?.value || b
							? (0, t.Y)(i._, {
									children: O
										? (0, t.FD)('button', {
												...f,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...C.button?.all,
														children: [(0, y.Y)(S, { treePath: U }), (0, y.Y)(A, { treePath: U })],
													}),
													g && (0, t.Y)(N.I, { ...ae.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
												],
										  })
										: (0, t.FD)('div', {
												...(j ? {} : $),
												role: 'button',
												'aria-disabled': m,
												...f,
												...C.button?.attributes,
												children: [
													S || A || C.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...C.button?.value,
																children: [(0, y.Y)(S, { treePath: U }), (0, y.Y)(A, { treePath: U })],
														  })
														: void 0,
													g && (0, t.Y)(N.I, { ...ae.icon, ...(typeof g == 'string' ? { icon: g } : g) }),
												],
										  }),
							  })
							: null;
					});
				e.d(r, ['$', 0, V]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/compat/dist/compat.module.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					i = e.n(_),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/hooks/useClickOutside.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					N = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					z = e('./components/src/hooks/useA11y.tsx');
				const se = ({ disableOverlay: H }) =>
						(0, u.AH)({
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
					oe = (0, h.PA)((H) => {
						const V = (0, a.u)(),
							P = { startOpen: !1, disableA11y: !1, treePath: (0, y.LU)() },
							Y = (0, N.v6)('dropdown', V, P, H),
							{
								button: M,
								content: E,
								children: S,
								disabled: A,
								open: m,
								toggleOnHover: O,
								onMouseEnter: W,
								onMouseLeave: j,
								disableClick: Z,
								onClick: w,
								onToggle: F,
								focusTrapContent: g,
								startOpen: J,
								disableClickOutside: U,
								disableA11y: k,
								className: X,
								internalClassName: q,
								treePath: G,
								usePortal: ee,
							} = Y,
							{ overrideElement: ie, shouldRenderDefault: ae } = (0, B._)('dropdown', Y);
						if (!ae) return ie;
						let x, f;
						const $ = m === void 0;
						$ ? ([x, f] = (0, n.J0)(J)) : (x = m);
						const [Q, v] = (0, n.J0)(!1),
							C = (0, n.li)(null),
							b = (0, n.li)(null),
							[T, ne] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let le;
						U ||
							(le = (0, c.L)((s) => {
								(ee && b.current && b.current.contains(s.target)) || (x && (A || ($ && f && f(!1), F && F(s, !1))));
							}, !0)),
							(0, n.Nf)(() => {
								if (ee && x) {
									const s = () => {
										if (C.current) {
											const I = C.current.getBoundingClientRect();
											ne({ top: I.bottom + window.scrollY, left: I.left + window.scrollX, width: I.width });
										}
									};
									return (
										s(),
										window.addEventListener('resize', s),
										window.addEventListener('scroll', s, !0),
										() => {
											window.removeEventListener('resize', s), window.removeEventListener('scroll', s, !0);
										}
									);
								}
							}, [ee, x]);
						const K = (s, I) => {
								$ &&
									f &&
									f((de) => {
										const ce = I ?? !de;
										return ce != de && F && F(s, ce), ce;
									});
							},
							re = (0, te.Z)(Y, se),
							d = {
								onMouseEnter:
									(O || W) &&
									((s) => {
										Q || (O && !A && K(s, !0), W && W(s));
									}),
								onMouseLeave:
									(O || j) &&
									((s) => {
										Q || (O && !A && K(s, !1), j && j(s));
									}),
							},
							L = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (s) => {
									(b.current = s),
										k ||
											(0, z.iy)(s, 0, !!g, (I) => {
												$ ? K(I) : w && w(I);
											});
								},
								children: [(0, p.Y)(E, { open: x, toggleOpen: K, treePath: G }), (0, p.Y)(S, { open: x, toggleOpen: K, treePath: G })],
							});
						return (0, t.Y)(o._, {
							children: (0, t.FD)('div', {
								...re,
								className: i()('ss__dropdown', { 'ss__dropdown--open': x }, X, q),
								ref: le,
								...d,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (s) => {
											(C.current = s), k || (0, z.iy)(s);
										},
										'aria-expanded': x,
										role: 'button',
										onTouchStart: () => {
											v(!0);
										},
										onClick: (s) => {
											!A && !Z && (K(s), w && w(s)),
												setTimeout(() => {
													v(!1);
												}, 300);
										},
										children: (0, p.Y)(M, { open: x, toggleOpen: K, treePath: G }),
									}),
									ee
										? (E || S) &&
										  (0, l.createPortal)(
												(0, t.Y)('div', {
													className: V.name ? `ss__theme__${V.name}` : 'ss__theme__global',
													children: (0, t.Y)('div', {
														className: i()('ss__dropdown__portal', X, q, { 'ss__dropdown__portal--open': x }),
														css: re.css,
														style: {
															position: 'absolute',
															top: T.top,
															left: T.left,
															width: T.width,
															zIndex: 10007,
															pointerEvents: x ? 'auto' : 'none',
														},
														children: L,
													}),
												}),
												document.body
										  )
										: (E || S) && L,
								],
							}),
						});
					});
				e.d(r, ['m', 0, oe]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					_ = e.n(u),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('./components/src/utilities/defined.ts'),
					o = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					N = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const H = ({ size: D, color: P, theme: Y, native: M }) => {
						const E = isNaN(Number(D)) ? D : `${D}px`;
						return M
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: E,
									width: E,
									border: `1px solid ${P || Y?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${D} - 30%)`, height: `calc(${D} - 30%)` },
							  });
					},
					V = (0, i.PA)((D) => {
						const P = (0, c.u)(),
							M = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, B.LU)() },
							E = (0, o.v6)('checkbox', P, M, D),
							{
								checked: S,
								color: A,
								disabled: m,
								icon: O,
								iconColor: W,
								onClick: j,
								size: Z,
								startChecked: w,
								native: F,
								disableA11y: g,
								disableStyles: J,
								className: U,
								internalClassName: k,
								theme: X,
								treePath: q,
								lang: G,
								style: ee,
								styleScript: ie,
								themeStyleScript: ae,
								name: x,
								...f
							} = E,
							{ overrideElement: $, shouldRenderDefault: Q } = (0, z._)('checkbox', E);
						if (!Q) return $;
						const v = isNaN(Number(Z)) ? Z : `${Z}px`,
							C = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, h.s)({ color: W || A || X?.variables?.colors?.primary, disableStyles: J, icon: O, size: v && `calc(${v} - 30%)` }),
									theme: E.theme,
									treePath: q,
								},
							};
						let b, T;
						const ne = S === void 0;
						ne ? ([b, T] = (0, l.J0)(w)) : (b = S);
						const le = (s) => {
								m || (ne && T && T((I) => !I), j && j(s));
							},
							K = (0, a.Z)(E, H),
							re = { checkbox: {} },
							d = oe()(re, G || {}),
							L = (0, te.u)(d, { checkedState: b, disabled: m }, { activeBreakpoint: P?.activeBreakpoint });
						return (0, t.Y)(y._, {
							children: F
								? (0, t.Y)('input', {
										...K,
										className: _()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': m, 'ss__checkbox--active': b }, U, k),
										type: 'checkbox',
										'aria-checked': b,
										onClick: (s) => le(s),
										disabled: m,
										checked: b,
								  })
								: (0, t.Y)('span', {
										...K,
										className: _()('ss__checkbox', { 'ss__checkbox--disabled': m, 'ss__checkbox--active': b }, U, k),
										onClick: (s) => le(s),
										ref: (s) => (g ? null : (0, N.iy)(s)),
										'aria-disabled': m,
										role: 'checkbox',
										'aria-checked': b,
										...f,
										...L.checkbox.all,
										children: b
											? (0, t.Y)(p.I, { ...C.icon, ...(typeof O == 'string' ? { icon: O } : O) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(r, ['S', 0, V]);
			},
			'./components/src/components/Molecules/List/List.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					_ = e.n(u),
					i = e('../../node_modules/deepmerge/dist/cjs.js'),
					h = e.n(i),
					o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					N = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					z = e('./components/src/utilities/selectionKey.ts'),
					se = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					oe = e('./components/src/hooks/useA11y.tsx'),
					H = e('./components/src/hooks/useLang.tsx'),
					V = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const P = ({ horizontal: M }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: M ? 'row' : 'column',
							alignItems: M ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: M ? 'row' : 'column',
								alignItems: M ? 'center' : void 0,
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
					Y = (0, a.PA)((M) => {
						const E = (0, c.u)(),
							A = { treePath: (0, B.LU)() },
							m = (0, N.v6)('list', E, A, M),
							{
								titleText: O,
								onSelect: W,
								native: j,
								multiSelect: Z,
								hideOptionLabels: w,
								hideOptionIcons: F,
								hideOptionCheckboxes: g,
								disabled: J,
								hideTitleText: U,
								options: k,
								requireSelection: X,
								disableStyles: q,
								className: G,
								internalClassName: ee,
								treePath: ie,
							} = m,
							{ overrideElement: ae, shouldRenderDefault: x } = (0, V._)('list', m);
						if (!x) return ae;
						let f = m.selected;
						const $ = {
								checkbox: { native: j, ...(0, p.s)({ disableStyles: q }), theme: m?.theme, treePath: ie },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, p.s)({ disableStyles: q }), theme: m?.theme, treePath: ie },
							},
							Q = (0, te.Z)(m, P);
						f && !Array.isArray(f) && (f = [f]);
						const [v, C] = (0, l.J0)(f || []),
							[b, T] = (0, l.J0)(() => (0, z.i)(f));
						if (f) {
							const d = (0, z.i)(f);
							d !== b && (T(d), C(f));
						}
						const ne = (d, L) => {
								let s;
								Z
									? v.find((I) => I.value === L.value)
										? ((s = [...v]),
										  s.splice(
												s.findIndex((I) => I.value === L.value),
												1
										  ),
										  s.length == 0 && X && (s = [L]))
										: (s = [...v, L])
									: !X && v.find((I) => I.value === L.value)
									? (s = [])
									: (s = [L]),
									W && W(d, L, s),
									C(s);
							},
							le = {},
							K = h()(le, m.lang || {}),
							re = (0, H.u)(K, { options: k, selectedOptions: v }, { activeBreakpoint: E?.activeBreakpoint });
						return typeof k == 'object' && k?.length
							? (0, t.Y)(y._, {
									children: (0, t.FD)('div', {
										...Q,
										className: _()('ss__list', { 'ss__list--native': j, 'ss__list--disabled': J }, G, ee),
										children: [
											(O || K?.title?.value) && !U && (0, t.Y)('h5', { className: 'ss__list__title', ...re.title?.all, children: O }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': O,
												children: k.map((d) => {
													const L = v.some((s) => s.value == d.value);
													return (0, t.FD)('li', {
														className: _()(`ss__list__option ss__list__option--${o.p(d.value?.toString())}`, {
															'ss__list__option--selected': L,
															'ss__list__option--disabled': d?.disabled,
															'ss__list__option--unavailable': d?.available === !1,
														}),
														ref: (s) => (0, oe.iy)(s),
														onClick: (s) => !J && !d?.disabled && ne(s, d),
														title: d.label,
														role: 'option',
														'aria-selected': L,
														'aria-disabled': d.disabled || d?.available === !1,
														children: [
															!g && (0, t.Y)(se.S, { ...$.checkbox, checked: L, disableA11y: !0, 'aria-label': d.label }),
															d.icon && !F && (0, t.Y)(D.I, { ...$.icon, ...(typeof d.icon == 'string' ? { icon: d.icon } : d.icon) }),
															!w && (d.label || !d.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: d.label || d.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(r, ['B', 0, Y]);
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					_ = e.n(u),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('./components/src/utilities/defined.ts'),
					o = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					N = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(se);
				const H = ({ size: D, native: P }) =>
						P
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: D,
									width: D,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					V = (0, i.PA)((D) => {
						const P = (0, c.u)(),
							Y = (0, B.LU)(),
							M = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: P.variables?.colors.primary || '#000000',
								treePath: Y,
							},
							E = (0, o.v6)('radio', P, M, D),
							{
								checked: S,
								color: A,
								disabled: m,
								checkedIcon: O,
								unCheckedIcon: W,
								onClick: j,
								startChecked: Z,
								native: w,
								disableA11y: F,
								disableStyles: g,
								className: J,
								internalClassName: U,
								size: k,
								treePath: X,
								lang: q,
								style: G,
								styleScript: ee,
								themeStyleScript: ie,
								name: ae,
								...x
							} = E,
							{ overrideElement: f, shouldRenderDefault: $ } = (0, z._)('radio', E);
						if (!$) return f;
						const Q = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, h.s)({ size: k, color: A, disableStyles: g }),
								theme: E.theme,
								treePath: X,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, h.s)({ size: k, color: A, disableStyles: g }),
								theme: E.theme,
								treePath: X,
							},
						};
						let v, C;
						const b = S === void 0;
						b ? ([v, C] = (0, l.J0)(Z)) : (v = S);
						const T = (d) => {
								m || (b && C && C((L) => !L), j && j(d));
							},
							ne = (0, a.Z)(E, H),
							le = { radio: {} },
							K = oe()(le, q || {}),
							re = (0, te.u)(K, { disabled: m, checkedState: v }, { activeBreakpoint: P?.activeBreakpoint });
						return (0, t.Y)(y._, {
							children: w
								? (0, t.Y)('div', {
										className: _()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': m }, J, U),
										...ne,
										children: (0, t.Y)('input', {
											className: _()('ss__radio__input'),
											'aria-checked': v,
											type: 'radio',
											onClick: (d) => T(d),
											disabled: m,
											checked: v,
											tabIndex: F ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...ne,
										className: _()('ss__radio', { 'ss__radio--disabled': m, 'ss__radio--active': v }, J, U),
										onClick: (d) => T(d),
										ref: (d) => (F ? null : (0, N.iy)(d)),
										...re.radio?.all,
										role: 'radio',
										'aria-checked': v,
										'aria-disabled': m,
										...x,
										children: v
											? (0, t.Y)(p.I, { ...Q.activeIcon, ...(typeof O == 'string' ? { icon: O } : O) })
											: (0, t.Y)(p.I, { ...Q.inactiveIcon, ...(typeof W == 'string' ? { icon: W } : W) }),
								  }),
						});
					});
				e.d(r, ['s', 0, V]);
			},
			'./components/src/hooks/useA11y.tsx'(R, r, e) {
				'use strict';
				e.d(r, { iy: () => _ });
				const t = 9,
					l = 27,
					n = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function _(i, h, o, a) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = y),
							(c.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					i &&
						!i.attributes?.[n] &&
						(i.setAttribute(n, !0),
						i.setAttribute('tabIndex', `${h || 0}`),
						i.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && c.target === i && i.click();
						}),
						o &&
							i.addEventListener('keydown', function (c) {
								const B = i.querySelectorAll(u),
									p = B[0],
									N = B[B.length - 1];
								if (c.keyCode == l) {
									i.focus(), a && a(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === t) &&
									(c.shiftKey
										? document.activeElement === p && (N.focus(), c.preventDefault())
										: document.activeElement === N && (p.focus(), c.preventDefault()));
							}));
				}
				e.d(r, ['DH', 0, u, 'aZ', 0, n]);
			},
			'./components/src/hooks/useClickOutside.tsx'(R, r, e) {
				'use strict';
				e.d(r, { L: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function l(n, u = !1) {
					const _ = (0, t.li)(),
						i = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							_.current = n;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', h, u), () => document.removeEventListener('click', h, u);
							function h(o) {
								i.current && _.current && !i.current.contains(o.target) && _.current(o);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(R, r, e) {
				'use strict';
				const t = (l, n, u) => {
					const _ = u ? { ...n, ...u } : n,
						i = {};
					return (
						Object.keys(l).forEach((h) => {
							const o = l && l[h],
								a = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (a.value = { 'ss-lang': h, dangerouslySetInnerHTML: { __html: o.value(_) } })
										: (a.value = { 'ss-lang': h, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((a.attributes = { 'ss-lang': h }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = o.attributes['aria-label'](_))
											: (a.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](_))
											: (a.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (a.attributes.title = o.attributes.title(_))
											: (a.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (a.attributes.alt = o.attributes.alt(_)) : (a.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = o.attributes.placeholder(_))
											: (a.attributes.placeholder = o.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': h })),
								(i[h] = a);
						}),
						i
					);
				};
				e.d(r, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(R, r, e) {
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
				e.d(r, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(R, r, e) {
				'use strict';
				e.d(r, { s: () => t });
				function t(l) {
					const n = {};
					return (
						Object.keys(l).map((u) => {
							l[u] !== void 0 && (n[u] = l[u]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/selectionKey.ts'(R, r, e) {
				'use strict';
				e.d(r, { i: () => t });
				function t(l) {
					return (l == null ? [] : Array.isArray(l) ? l : [l]).map((u) => `${u?.value}:${u?.label}`).join('|');
				}
			},
			'./components/src/utilities/storybook.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					u = (_) => {
						const i = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								i.current && _.className?.includes('lang-') && !_.className?.includes(n) && window?.Prism?.highlightElement(i.current);
							}, [_.className, _.children, i]),
							(0, t.Y)('code', { ..._, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, u]);
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function r(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (R.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LayoutSelector-LayoutSelector-stories.a61b6fea.iframe.bundle.js.map
