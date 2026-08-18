'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2232],
		{
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'(ue, F, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					f = e.n(W),
					y = e('./components/src/providers/cache.tsx'),
					H = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					J = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/components/Molecules/Select/Select.tsx'),
					b = e('./components/src/components/Molecules/List/List.tsx'),
					Z = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					G = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(L);
				const Q = ({}) => (0, $.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					V = (0, R.PA)((g) => {
						const X = (0, H.u)(),
							k = (0, z.LU)(),
							C = {
								label: 'Layout',
								type: 'dropdown',
								showSingleOption: !1,
								selected: g.options && g.options.length ? g.options[0] : void 0,
								treePath: k,
							},
							_ = (0, T.v6)('layoutSelector', X, C, g),
							{
								options: E,
								selected: x,
								type: c,
								onSelect: l,
								showSingleOption: j,
								hideLabel: w,
								hideOptionLabels: v,
								disableStyles: O,
								className: B,
								internalClassName: p,
								treePath: D,
							} = _;
						let r = _.label;
						const { overrideElement: I, shouldRenderDefault: A } = (0, G._)('layoutSelector', _);
						if (!A) return I;
						const P = {
								Select: { hideOptionLabels: v, ...(0, h.s)({ disableStyles: O }), theme: _?.theme, treePath: D },
								RadioList: { hideOptionLabels: v, ...(0, h.s)({ disableStyles: O }), theme: _?.theme, treePath: D },
								List: {
									multiSelect: !1,
									horizontal: !0,
									hideOptionCheckboxes: !0,
									hideOptionLabels: v,
									requireSelection: !0,
									...(0, h.s)({ disableStyles: O }),
									theme: _?.theme,
									treePath: D,
								},
							},
							u = (0, J.Z)(_, Q),
							K = { label: { value: r } },
							M = S()(K, _.lang || {});
						if ((w && (delete M.label.value, (r = void 0)), v)) {
							const a = E?.filter((i) => !i.icon);
							a?.length && console.warn('Warning - found layout options with no visible label or icon', a);
						}
						return (E && E.length > 1) || (E?.length === 1 && j)
							? (0, s.FD)(y._, {
									children: [
										c?.toLowerCase() == 'dropdown' &&
											(0, s.Y)(U.l, {
												...u,
												className: f()('ss__layout__select', B, p),
												...P.Select,
												label: r,
												options: E,
												selected: x,
												onSelect: (a, i) => {
													l && l(a, i);
												},
												lang: { buttonLabel: M.label },
											}),
										c?.toLowerCase() == 'list' &&
											(0, s.Y)(b.B, {
												...u,
												className: f()('ss__layout__list', B, p),
												...P.List,
												onSelect: (a, i) => {
													l && l(a, i);
												},
												options: E,
												selected: x,
												titleText: r,
												lang: { title: M.label },
											}),
										c?.toLowerCase() == 'radio' &&
											(0, s.Y)(Z.q, {
												...u,
												className: f()('ss__layout__radioList', B, p),
												...P.RadioList,
												onSelect: (a, i) => {
													l && l(a, i);
												},
												options: E,
												selected: x,
												titleText: r,
												lang: { title: M.label },
											}),
									],
							  })
							: null;
					});
				e.d(F, ['s', 0, V]);
			},
			'./components/src/components/Molecules/RadioList/RadioList.tsx'(ue, F, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					W = e.n($),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/providers/cache.tsx'),
					H = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					J = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/utilities/selectionKey.ts'),
					b = e('../../node_modules/preact/compat/dist/compat.module.js'),
					Z = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					G = e('./components/src/hooks/useA11y.tsx'),
					L = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Q = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					V = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(V);
				const X = ({ horizontal: C }) =>
						(0, R.AH)({
							'& .ss__radio-list__options-wrapper': {
								display: 'flex',
								flexDirection: C ? 'row' : 'column',
								alignItems: C ? 'center' : void 0,
								justifyItems: 'flex-start',
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
							},
							'.ss__radio-list__title': { margin: '0px', padding: '5px' },
							'.ss__radio-list__option': {
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								padding: '5px',
								'& .ss__radio-list__option__label, .ss__radio-list__option__icon': { cursor: 'pointer', padding: '0px 0px 0px 5px' },
							},
							'&.ss__radio-list--disabled, .ss__radio-list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'.ss__radio-list__option--selected': { fontWeight: 'bold' },
						}),
					k = (0, f.PA)((C) => {
						const _ = (0, H.u)(),
							x = { treePath: (0, z.LU)() },
							c = (0, T.v6)('radioList', _, x, C),
							{
								titleText: l,
								onSelect: j,
								hideOptionRadios: w,
								hideOptionIcons: v,
								hideOptionLabels: O,
								hideTitleText: B,
								native: p,
								disabled: D,
								selected: r,
								options: I,
								disableStyles: A,
								className: P,
								internalClassName: u,
								treePath: K,
							} = c,
							{ overrideElement: M, shouldRenderDefault: a } = (0, S._)('radioList', c);
						if (!a) return M;
						const i = {
								Radio: {
									internalClassName: 'ss__radio-list__option__radio',
									native: p,
									disableA11y: !0,
									disabled: D,
									...(0, h.s)({ disableStyles: A }),
									theme: c?.theme,
									treePath: K,
								},
								Icon: {
									internalClassName: 'ss__radio-list__option__icon',
									size: '16px',
									...(0, h.s)({ disableStyles: A }),
									theme: c?.theme,
									treePath: K,
								},
							},
							ae = (0, J.Z)(c, X),
							[N, q] = (0, b.useState)(r),
							[te, ie] = (0, b.useState)(() => (0, U.i)(r));
						if (r) {
							const o = (0, U.i)(r);
							o !== te && (ie(o), q(r));
						}
						const ce = (o, n) => {
								j && j(o, n), q(n);
							},
							ee = {},
							oe = g()(ee, c.lang || {}),
							re = (0, L.u)(oe, { options: I, selectedOptions: N }, { activeBreakpoint: _?.activeBreakpoint });
						return typeof I == 'object' && I?.length
							? (0, s.Y)(y._, {
									children: (0, s.FD)('div', {
										...ae,
										className: W()('ss__radio-list', { 'ss__radio-list--native': p, 'ss__radio-list--disabled': D }, P, u),
										children: [
											(l || oe?.title?.value) && !B && (0, s.Y)('h5', { className: 'ss__radio-list__title', ...re.title?.all, children: l }),
											(0, s.Y)('ul', {
												className: 'ss__radio-list__options-wrapper',
												role: 'listbox',
												'aria-label': l,
												children: I.map((o) => {
													const n = N && N.value == o.value;
													return (0, s.FD)('li', {
														className: `ss__radio-list__option ${n ? 'ss__radio-list__option--selected' : ''} ${
															o.disabled ? 'ss__radio-list__option--disabled' : ''
														}`,
														ref: (se) => (0, G.iy)(se),
														onClick: (se) => !D && ce(se, o),
														title: o.label,
														role: 'option',
														'aria-selected': n,
														children: [
															!w && (0, s.Y)(Z.s, { ...i.Radio, checked: n, disableA11y: !0 }),
															o.icon && !v && (0, s.Y)(Q.I, { ...i.Icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
															!O &&
																(o.label || !o.icon) &&
																(0, s.Y)('label', { className: 'ss__radio-list__option__label', children: o.label || o.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(F, ['q', 0, k]);
			},
			'./components/src/components/Molecules/Select/Select.tsx'(ue, F, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					R = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					$ = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					y = e.n(f),
					H = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					J = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/utilities/selectionKey.ts'),
					Z = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					G = e('./components/src/components/Atoms/Button/Button.tsx'),
					L = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					S = e('./components/src/hooks/useA11y.tsx'),
					Q = e('./components/src/hooks/useLang.tsx'),
					V = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('../../node_modules/deepmerge/dist/cjs.js'),
					X = e.n(g);
				const k = ({ color: _, backgroundColor: E, borderColor: x, theme: c, native: l }) =>
						l
							? (0, W.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, W.AH)({
									display: 'inline-flex',
									color: _,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: E || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${x || _ || c?.variables?.colors?.primary || '#333'}`,
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
					C = (0, $.PA)((_) => {
						const E = (0, z.u)(),
							c = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, h.LU)() },
							l = (0, J.v6)('select', E, c, _),
							{
								backgroundColor: j,
								borderColor: w,
								color: v,
								clearSelection: O,
								disableClickOutside: B,
								disabled: p,
								hideLabel: D,
								hideLabelOnSelection: r,
								iconColor: I,
								iconClose: A,
								iconOpen: P,
								label: u,
								native: K,
								onSelect: M,
								selected: a,
								separator: i,
								startOpen: ae,
								hideIcon: N,
								hideOptionIcons: q,
								hideOptionLabels: te,
								hideSelection: ie,
								stayOpenOnSelection: ce,
								disableStyles: ee,
								className: oe,
								internalClassName: re,
								treePath: o,
							} = l;
						let { options: n } = l;
						const { overrideElement: se, shouldRenderDefault: De } = (0, V._)('select', l);
						if (!De) return se;
						const Y = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, T.s)({ disableStyles: ee, disabled: p }),
									theme: l?.theme,
									treePath: o,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, T.s)({ disableStyles: ee, disabled: p, color: v, backgroundColor: j, borderColor: w }),
									theme: l?.theme,
									treePath: o,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, T.s)({ disableStyles: ee, color: I || v, size: '12px' }),
									theme: l?.theme,
									treePath: o,
								},
							},
							[le, ne] = (0, R.J0)(!!ae),
							[d, Pe] = (0, R.J0)(a),
							[ve, Me] = (0, R.J0)(() => (0, b.i)(a));
						if (a) {
							const t = (0, b.i)(a);
							t !== ve && (Me(t), Pe(a));
						}
						d && O && (n = [{ label: O, value: '' }, ...n]);
						const Oe = (t, m) => {
								m != d && M && M(t, m), Pe(m), !ce && ne(!1);
							},
							he = (0, U.Z)(l, k),
							de = n.filter((t) => d?.value === t.value),
							Le = {
								buttonLabel: {
									value: u,
									attributes: {
										'aria-label': `${u} dropdown, ${n.length} options ${de.length ? `, Currently selected option is ${de[0].label}` : ''}`,
									},
								},
							},
							me = X()(Le, l.lang || {}),
							Ee = (0, Q.u)(me, { options: n, selectedOptions: de, label: u, open: le }, { activeBreakpoint: E?.activeBreakpoint });
						return typeof n == 'object' && n?.length
							? (0, s.Y)(H._, {
									children: (0, s.Y)('div', {
										...he,
										className: y()('ss__select', { 'ss__select--native': K }, { 'ss__select--disabled': p }, oe, re),
										children: K
											? (0, s.FD)(s.FK, {
													children: [
														(u || me.buttonLabel.value) &&
															!D &&
															!r &&
															(0, s.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, s.Y)('label', { ...Ee.buttonLabel?.all }),
																	i && (0, s.Y)('span', { className: 'ss__select__label__separator', children: i }),
																],
															}),
														(0, s.FD)('select', {
															className: 'ss__select__select',
															disabled: p || void 0,
															onChange: (t) => {
																const m = t.target,
																	_e = m.options[m.selectedIndex],
																	ge = n.filter((pe, Ce) => pe.label == _e.text && (pe.value == _e.value || pe.value == Ce)).pop();
																!p && Oe(t, ge);
															},
															children: [
																!d && O && (0, s.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: O }),
																n.map((t, m) =>
																	(0, s.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: d?.value === t.value,
																		value: t.value ?? m,
																		children: t.label,
																	})
																),
															],
														}),
														!N && (0, s.Y)(L.I, { ...Y.icon, name: 'open', ...(typeof P == 'string' ? { icon: P } : P) }),
													],
											  })
											: (0, s.Y)(Z.m, {
													...Y.dropdown,
													disableClickOutside: B,
													open: le,
													onToggle: (t, m) => ne((_e) => m ?? !_e),
													onClick: () => ne((t) => !t),
													disableA11y: !0,
													button: (0, s.FD)(G.$, {
														...Y.button,
														children: [
															(u || me.buttonLabel.value) &&
																!r &&
																!D &&
																(0, s.FD)('span', {
																	className: 'ss__select__label',
																	...Ee.buttonLabel.attributes,
																	children: [
																		(0, s.Y)('label', { ...Ee.buttonLabel.value }),
																		i && d && (0, s.Y)('span', { className: 'ss__select__label__separator', children: i }),
																	],
																}),
															d &&
																!ie &&
																(0, s.FD)(s.FK, {
																	children: [
																		d.icon &&
																			!q &&
																			(0, s.Y)(L.I, {
																				...Y.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof d.icon == 'string' ? { icon: d.icon } : d.icon),
																			}),
																		!te && (0, s.Y)('span', { className: 'ss__select__selection', children: d?.label }),
																	],
																}),
															!N &&
																(0, s.Y)(L.I, {
																	...Y.icon,
																	name: le ? 'open' : 'close',
																	...(le ? { ...(typeof A == 'string' ? { icon: A } : A) } : { ...(typeof P == 'string' ? { icon: P } : P) }),
																}),
														],
													}),
													children: (0, s.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof u == 'string' ? u : '',
														ref: (t) => (0, S.iy)(t, -1, !0, () => ne(!1)),
														children: n.map((t) =>
															(0, s.FD)('li', {
																ref: (m) => (0, S.iy)(m),
																'aria-disabled': t.disabled,
																title: t.label,
																className: y()('ss__select__select__option', { 'ss__select__select__option--selected': d?.value === t.value }),
																onClick: (m) => !p && Oe(m, t),
																role: 'option',
																'aria-selected': d?.value === t.value,
																children: [
																	t.icon &&
																		!q &&
																		(0, s.Y)(L.I, {
																			...Y.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${o} dropdown`,
																			...(typeof t.icon == 'string' ? { icon: t.icon } : t.icon),
																		}),
																	!te && (0, s.Y)('span', { children: t.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
				e.d(F, ['l', 0, C]);
			},
		},
	]);
})();
