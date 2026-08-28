'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6496],
		{
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(ae, F, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/preact/compat/dist/compat.module.js'),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					f = e.n(P),
					B = e('../../node_modules/mobx-react-lite/es/index.js'),
					K = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/treePath.tsx'),
					V = e('./components/src/hooks/useClickOutside.tsx'),
					Q = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					U = e('./components/src/utilities/cloneWithProps.tsx'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useA11y.tsx');
				const se = ({ disableOverlay: j }) =>
						(0, R.AH)({
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
					te = (0, B.PA)((j) => {
						const $ = (0, W.u)(),
							L = { startOpen: !1, disableA11y: !1, treePath: (0, G.LU)() },
							S = (0, q.v6)('dropdown', $, L, j),
							{
								button: D,
								content: u,
								children: r,
								disabled: n,
								open: l,
								toggleOnHover: a,
								onMouseEnter: N,
								onMouseLeave: I,
								disableClick: O,
								onClick: k,
								onToggle: Y,
								focusTrapContent: T,
								startOpen: w,
								disableClickOutside: g,
								disableA11y: x,
								className: H,
								internalClassName: J,
								treePath: d,
								usePortal: i,
							} = S,
							{ overrideElement: c, shouldRenderDefault: oe } = (0, Q._)('dropdown', S);
						if (!oe) return c;
						let _, m;
						const z = l === void 0;
						z ? ([_, m] = (0, E.J0)(w)) : (_ = l);
						const [le, A] = (0, E.J0)(!1),
							X = (0, E.li)(null),
							v = (0, E.li)(null),
							[Z, ie] = (0, E.J0)({ top: 0, left: 0, width: 0 });
						let ne;
						g ||
							(ne = (0, V.L)((s) => {
								(i && v.current && v.current.contains(s.target)) || (_ && (n || (z && m && m(!1), Y && Y(s, !1))));
							}, !0)),
							(0, E.Nf)(() => {
								if (i && _) {
									const s = () => {
										if (X.current) {
											const h = X.current.getBoundingClientRect();
											ie({ top: h.bottom + window.scrollY, left: h.left + window.scrollX, width: h.width });
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
							}, [i, _]);
						const M = (s, h) => {
								z &&
									m &&
									m((re) => {
										const ce = h ?? !re;
										return ce != re && Y && Y(s, ce), ce;
									});
							},
							_e = (0, ee.Z)(S, se),
							o = {
								onMouseEnter:
									(a || N) &&
									((s) => {
										le || (a && !n && M(s, !0), N && N(s));
									}),
								onMouseLeave:
									(a || I) &&
									((s) => {
										le || (a && !n && M(s, !1), I && I(s));
									}),
							},
							p = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (s) => {
									(v.current = s),
										x ||
											(0, y.iy)(s, 0, !!T, (h) => {
												z ? M(h) : k && k(h);
											});
								},
								children: [(0, U.Y)(u, { open: _, toggleOpen: M, treePath: d }), (0, U.Y)(r, { open: _, toggleOpen: M, treePath: d })],
							});
						return (0, t.Y)(K._, {
							children: (0, t.FD)('div', {
								..._e,
								className: f()('ss__dropdown', { 'ss__dropdown--open': _ }, H, J),
								ref: ne,
								...o,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (s) => {
											(X.current = s), x || (0, y.iy)(s);
										},
										'aria-expanded': _,
										role: 'button',
										onTouchStart: () => {
											A(!0);
										},
										onClick: (s) => {
											!n && !O && (M(s), k && k(s)),
												setTimeout(() => {
													A(!1);
												}, 300);
										},
										children: (0, U.Y)(D, { open: _, toggleOpen: M, treePath: d }),
									}),
									i
										? (u || r) &&
										  (0, b.createPortal)(
												(0, t.Y)('div', {
													className: $.name ? `ss__theme__${$.name}` : 'ss__theme__global',
													children: (0, t.Y)('div', {
														className: f()('ss__dropdown__portal', H, J, { 'ss__dropdown__portal--open': _ }),
														css: _e.css,
														style: {
															position: 'absolute',
															top: Z.top,
															left: Z.left,
															width: Z.width,
															zIndex: 10007,
															pointerEvents: _ ? 'auto' : 'none',
														},
														children: p,
													}),
												}),
												document.body
										  )
										: (u || r) && p,
								],
							}),
						});
					});
				e.d(F, ['m', 0, te]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(ae, F, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					P = e.n(R),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/utilities/defined.ts'),
					K = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					G = e('./components/src/providers/cache.tsx'),
					V = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Q = e('./components/src/providers/treePath.tsx'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					q = e('./components/src/hooks/useA11y.tsx'),
					ee = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					te = e.n(se);
				const j = ({ size: C, color: L, theme: S, native: D }) => {
						const u = isNaN(Number(C)) ? C : `${C}px`;
						return D
							? (0, E.AH)({})
							: (0, E.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: u,
									width: u,
									border: `1px solid ${L || S?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${C} - 30%)`, height: `calc(${C} - 30%)` },
							  });
					},
					$ = (0, f.PA)((C) => {
						const L = (0, V.u)(),
							D = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, Q.LU)() },
							u = (0, K.v6)('checkbox', L, D, C),
							{
								checked: r,
								color: n,
								disabled: l,
								icon: a,
								iconColor: N,
								onClick: I,
								size: O,
								startChecked: k,
								native: Y,
								disableA11y: T,
								disableStyles: w,
								className: g,
								internalClassName: x,
								theme: H,
								treePath: J,
								lang: d,
								style: i,
								styleScript: c,
								themeStyleScript: oe,
								name: _,
								...m
							} = u,
							{ overrideElement: z, shouldRenderDefault: le } = (0, y._)('checkbox', u);
						if (!le) return z;
						const A = isNaN(Number(O)) ? O : `${O}px`,
							X = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, B.s)({ color: N || n || H?.variables?.colors?.primary, disableStyles: w, icon: a, size: A && `calc(${A} - 30%)` }),
									theme: u.theme,
									treePath: J,
								},
							};
						let v, Z;
						const ie = r === void 0;
						ie ? ([v, Z] = (0, b.J0)(k)) : (v = r);
						const ne = (s) => {
								l || (ie && Z && Z((h) => !h), I && I(s));
							},
							M = (0, W.Z)(u, j),
							_e = { checkbox: {} },
							o = te()(_e, d || {}),
							p = (0, ee.u)(o, { checkedState: v, disabled: l }, { activeBreakpoint: L?.activeBreakpoint });
						return (0, t.Y)(G._, {
							children: Y
								? (0, t.Y)('input', {
										...M,
										className: P()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': l, 'ss__checkbox--active': v }, g, x),
										type: 'checkbox',
										'aria-checked': v,
										onClick: (s) => ne(s),
										disabled: l,
										checked: v,
								  })
								: (0, t.Y)('span', {
										...M,
										className: P()('ss__checkbox', { 'ss__checkbox--disabled': l, 'ss__checkbox--active': v }, g, x),
										onClick: (s) => ne(s),
										ref: (s) => (T ? null : (0, q.iy)(s)),
										'aria-disabled': l,
										role: 'checkbox',
										'aria-checked': v,
										...m,
										...p.checkbox.all,
										children: v
											? (0, t.Y)(U.I, { ...X.icon, ...(typeof a == 'string' ? { icon: a } : a) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(F, ['S', 0, $]);
			},
			'./components/src/components/Molecules/List/List.tsx'(ae, F, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					P = e.n(R),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					B = e.n(f),
					K = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					W = e('../../node_modules/mobx-react-lite/es/index.js'),
					G = e('./components/src/providers/cache.tsx'),
					V = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Q = e('./components/src/providers/treePath.tsx'),
					U = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/utilities/selectionKey.ts'),
					se = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					te = e('./components/src/hooks/useA11y.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					$ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const L = ({ horizontal: D }) =>
						(0, E.AH)({
							display: 'flex',
							flexDirection: D ? 'row' : 'column',
							alignItems: D ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: D ? 'row' : 'column',
								alignItems: D ? 'center' : void 0,
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
					S = (0, W.PA)((D) => {
						const u = (0, V.u)(),
							n = { treePath: (0, Q.LU)() },
							l = (0, q.v6)('list', u, n, D),
							{
								titleText: a,
								onSelect: N,
								native: I,
								multiSelect: O,
								hideOptionLabels: k,
								hideOptionIcons: Y,
								hideOptionCheckboxes: T,
								disabled: w,
								hideTitleText: g,
								options: x,
								requireSelection: H,
								disableStyles: J,
								className: d,
								internalClassName: i,
								treePath: c,
							} = l,
							{ overrideElement: oe, shouldRenderDefault: _ } = (0, $._)('list', l);
						if (!_) return oe;
						let m = l.selected;
						const z = {
								checkbox: { native: I, ...(0, U.s)({ disableStyles: J }), theme: l?.theme, treePath: c },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, U.s)({ disableStyles: J }), theme: l?.theme, treePath: c },
							},
							le = (0, ee.Z)(l, L);
						m && !Array.isArray(m) && (m = [m]);
						const [A, X] = (0, b.J0)(m || []),
							[v, Z] = (0, b.J0)(() => (0, y.i)(m));
						if (m) {
							const o = (0, y.i)(m);
							o !== v && (Z(o), X(m));
						}
						const ie = (o, p) => {
								let s;
								O
									? A.find((h) => h.value === p.value)
										? ((s = [...A]),
										  s.splice(
												s.findIndex((h) => h.value === p.value),
												1
										  ),
										  s.length == 0 && H && (s = [p]))
										: (s = [...A, p])
									: !H && A.find((h) => h.value === p.value)
									? (s = [])
									: (s = [p]),
									N && N(o, p, s),
									X(s);
							},
							ne = {},
							M = B()(ne, l.lang || {}),
							_e = (0, j.u)(M, { options: x, selectedOptions: A }, { activeBreakpoint: u?.activeBreakpoint });
						return typeof x == 'object' && x?.length
							? (0, t.Y)(G._, {
									children: (0, t.FD)('div', {
										...le,
										className: P()('ss__list', { 'ss__list--native': I, 'ss__list--disabled': w }, d, i),
										children: [
											(a || M?.title?.value) && !g && (0, t.Y)('h5', { className: 'ss__list__title', ..._e.title?.all, children: a }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': a,
												children: x.map((o) => {
													const p = A.some((s) => s.value == o.value);
													return (0, t.FD)('li', {
														className: P()(`ss__list__option ss__list__option--${K.p(o.value?.toString())}`, {
															'ss__list__option--selected': p,
															'ss__list__option--disabled': o?.disabled,
															'ss__list__option--unavailable': o?.available === !1,
														}),
														ref: (s) => (0, te.iy)(s),
														onClick: (s) => !w && !o?.disabled && ie(s, o),
														title: o.label,
														role: 'option',
														'aria-selected': p,
														'aria-disabled': o.disabled || o?.available === !1,
														children: [
															!T && (0, t.Y)(se.S, { ...z.checkbox, checked: p, disableA11y: !0, 'aria-label': o.label }),
															o.icon && !Y && (0, t.Y)(C.I, { ...z.icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
															!k && (o.label || !o.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: o.label || o.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(F, ['B', 0, S]);
			},
			'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'(ae, F, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					P = e.n(R),
					f = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					W = e('./components/src/utilities/defined.ts'),
					G = e('./components/src/utilities/mergeProps.ts'),
					V = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/components/Molecules/List/List.tsx'),
					U = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					q = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					ee = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					y = e('./components/src/hooks/useA11y.tsx'),
					se = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					te = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const j = () =>
						(0, E.AH)({
							'.ss__variant-selection__dropdown': {
								'.ss__dropdown__button': {
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									'.ss__dropdown__button-wrapper': { display: 'flex', gap: '5px' },
								},
							},
						}),
					$ = () =>
						(0, E.AH)({
							margin: '0px',
							padding: '5px',
							background: 'white',
							zIndex: 10,
							border: '1px solid black',
							'.ss__variant-selection__option': { cursor: 'pointer', position: 'relative' },
							'.ss__variant-selection__option:hover': { fontWeight: 'bold' },
							'.ss__variant-selection__option--selected': { fontWeight: 'bold' },
							'.ss__variant-selection__option--disabled': { pointerEvents: 'none', cursor: 'initial', color: 'red' },
							'.ss__variant-selection__option--disabled, .ss__variant-selection__option--unavailable': {
								textDecoration: 'line-through',
								opacity: 0.5,
							},
						}),
					C = (0, b.PA)((L) => {
						const S = (0, B.u)(),
							D = (0, K.LU)(),
							u = { name: (0, te.P)(L.selection.field), treePath: D },
							r = (0, G.v6)('variantSelection', S, u, L),
							{ selection: n, onSelect: l, disableStyles: a, className: N, internalClassName: I, treePath: O } = r,
							{ overrideElement: k, shouldRenderDefault: Y } = (0, se._)('variantSelection', r);
						if (!Y) return k;
						let T = r.type;
						T || (n.type == 'swatch' ? (T = 'swatches') : (T = 'dropdown'));
						const w = (d, i) => {
								l && l(d, i), n.select(i.value);
							},
							g = {
								dropdown: {
									internalClassName: 'ss__variant-selection__dropdown',
									usePortal: !0,
									...(0, W.s)({ disableStyles: a }),
									theme: r?.theme,
									treePath: O,
								},
								icon: {
									internalClassName: 'ss__variant-selection__icon',
									size: '12px',
									...(0, W.s)({ disableStyles: a }),
									theme: r?.theme,
									treePath: O,
								},
								list: {
									titleText: n.field,
									internalClassName: 'ss__variant-selection__list',
									multiSelect: !1,
									hideOptionCheckboxes: !0,
									onSelect: (d, i) => w(d, i),
									selected: n.selected,
									...(0, W.s)({ disableStyles: a }),
									theme: r?.theme,
									treePath: O,
								},
								swatches: {
									internalClassName: 'ss__variant-selection__swatches',
									onSelect: (d, i) => w(d, i),
									selected: n.selected,
									...(0, W.s)({ disableStyles: a }),
									theme: r?.theme,
									treePath: O,
								},
							},
							x = (0, V.Z)(r, j),
							H = (0, V.Z)(r, $),
							J = (d) => {
								const { toggleOpen: i } = d;
								return (0, t.Y)('ul', {
									...H,
									className: 'ss__variant-selection__options',
									ref: (c) => (0, y.iy)(c, -1, !0, () => i()),
									children: n.values.map((c) => {
										const oe = n.selected?.value == c.value;
										return (0, t.Y)('li', {
											className: P()('ss__variant-selection__option', {
												'ss__variant-selection__option--selected': oe,
												'ss__variant-selection__option--disabled': c.disabled,
												'ss__variant-selection__option--unavailable': c.available === !1,
											}),
											onClick: (_) => {
												c.disabled || (w(_, c), i?.(_, !1));
											},
											ref: (_) => (0, y.iy)(_),
											'aria-selected': oe,
											'aria-disabled': c.disabled || c.available === !1,
											children: c.label,
										});
									}),
								});
							};
						return n.values.length
							? (0, t.Y)(f._, {
									children: (0, t.Y)('div', {
										...x,
										className: P()('ss__variant-selection', `ss__variant-selection--${T}`, `ss__variant-selection--${n.field}`, N, I),
										children: (() => {
											switch (T) {
												case 'dropdown':
													return (0, t.Y)(t.FK, {
														children: (() => {
															const d = (i) => {
																const { open: c } = i;
																return (0, t.FD)(t.FK, {
																	children: [
																		(0, t.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, t.Y)('span', { className: 'ss__dropdown__button-wrapper__label', children: n.label }),
																				n.selected
																					? (0, t.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', n.selected.value, ')'],
																					  })
																					: null,
																			],
																		}),
																		(0, t.Y)(ee.I, { icon: c ? 'angle-up' : 'angle-down', ...g.icon, treePath: i.treePath }),
																	],
																});
															};
															return (0, t.Y)(q.m, { button: (0, t.Y)(d, { treePath: O }), ...g.dropdown, content: (0, t.Y)(J, {}) });
														})(),
													});
												case 'list':
													return (0, t.Y)(t.FK, { children: (0, t.Y)(Q.B, { ...g.list, options: n.values }) });
												case 'swatches':
													return (0, t.Y)(t.FK, { children: (0, t.Y)(U.l, { ...g.swatches, options: n.values }) });
											}
										})(),
									}),
							  })
							: null;
					});
				e.d(F, ['m', 0, C]);
			},
			'./components/src/hooks/useClickOutside.tsx'(ae, F, e) {
				e.d(F, { L: () => b });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function b(E, R = !1) {
					const P = (0, t.li)(),
						f = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							P.current = E;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', B, R), () => document.removeEventListener('click', B, R);
							function B(K) {
								f.current && P.current && !f.current.contains(K.target) && P.current(K);
							}
						}, []),
						f
					);
				}
			},
		},
	]);
})();
