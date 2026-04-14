'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2232],
		{
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'(Oe, H, e) {
				e.d(H, { s: () => q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					K = e('../../node_modules/classnames/index.js'),
					b = e.n(K),
					S = e('./components/src/providers/cache.tsx'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/snap.tsx'),
					N = e('./components/src/providers/treePath.tsx'),
					B = e('./components/src/utilities/defined.ts'),
					W = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/components/Molecules/Select/Select.tsx'),
					V = e('./components/src/components/Molecules/List/List.tsx'),
					X = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					x = e('./components/src/hooks/useComponent.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(Y);
				const k = ({}) => (0, z.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					q = (0, y.PA)((I) => {
						const f = (0, Z.u)(),
							ee = (0, G.uk)(),
							se = (0, N.LU)(),
							ne = {
								label: 'Layout',
								type: 'dropdown',
								showSingleOption: !1,
								selected: I.options && I.options.length ? I.options[0] : void 0,
								treePath: se,
							},
							_ = (0, W.v6)('layoutSelector', f, ne, I),
							{
								options: n,
								selected: O,
								type: v,
								onSelect: p,
								showSingleOption: m,
								hideLabel: te,
								hideOptionLabels: A,
								disableStyles: g,
								className: E,
								internalClassName: P,
								treePath: a,
								customComponent: R,
							} = _;
						let M = _.label;
						if (R) {
							const i = (0, x.x)(ee?.templates?.library.import.component.layoutSelector || {}, R);
							if (i) return (0, s.Y)(i, { ..._ });
						}
						const U = {
								Select: { hideOptionLabels: A, ...(0, B.s)({ disableStyles: g }), theme: _?.theme, treePath: a },
								RadioList: { hideOptionLabels: A, ...(0, B.s)({ disableStyles: g }), theme: _?.theme, treePath: a },
								List: {
									multiSelect: !1,
									horizontal: !0,
									hideOptionCheckboxes: !0,
									hideOptionLabels: A,
									requireSelection: !0,
									...(0, B.s)({ disableStyles: g }),
									theme: _?.theme,
									treePath: a,
								},
							},
							h = (0, j.Z)(_, k),
							u = { label: { value: M } },
							c = w()(u, _.lang || {});
						if ((te && (delete c.label.value, (M = void 0)), A)) {
							const i = n?.filter((r) => !r.icon);
							i?.length && console.warn('Warning - found layout options with no visible label or icon', i);
						}
						return (n && n.length > 1) || (n?.length === 1 && m)
							? (0, s.FD)(S._, {
									children: [
										v?.toLowerCase() == 'dropdown' &&
											(0, s.Y)(Q.l, {
												...h,
												className: b()('ss__layout__select', E, P),
												...U.Select,
												label: M,
												options: n,
												selected: O,
												onSelect: (i, r) => {
													p && p(i, r);
												},
												lang: { buttonLabel: c.label },
											}),
										v?.toLowerCase() == 'list' &&
											(0, s.Y)(V.B, {
												...h,
												className: b()('ss__layout__list', E, P),
												...U.List,
												onSelect: (i, r) => {
													p && p(i, r);
												},
												options: n,
												selected: O,
												titleText: M,
												lang: { title: c.label },
											}),
										v?.toLowerCase() == 'radio' &&
											(0, s.Y)(X.q, {
												...h,
												className: b()('ss__layout__radioList', E, P),
												...U.RadioList,
												onSelect: (i, r) => {
													p && p(i, r);
												},
												options: n,
												selected: O,
												titleText: M,
												lang: { title: c.label },
											}),
									],
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/RadioList/RadioList.tsx'(Oe, H, e) {
				e.d(H, { q: () => I });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					z = e('../../node_modules/classnames/index.js'),
					K = e.n(z),
					b = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Z = e('./components/src/providers/snap.tsx'),
					G = e('./components/src/providers/treePath.tsx'),
					N = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					j = e('../../node_modules/preact/compat/dist/compat.module.js'),
					Q = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					V = e('./components/src/hooks/useA11y.tsx'),
					X = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useComponent.tsx'),
					Y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					w = e('../../node_modules/deepmerge/dist/cjs.js'),
					k = e.n(w);
				const q = ({ horizontal: f }) =>
					(0, y.AH)({
						'& .ss__radio-list__options-wrapper': {
							display: 'flex',
							flexDirection: f ? 'row' : 'column',
							alignItems: f ? 'center' : void 0,
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
					});
				function I(f) {
					const ee = (0, S.u)(),
						se = (0, Z.uk)(),
						_ = { treePath: (0, G.LU)() },
						n = (0, B.v6)('radioList', ee, _, f),
						{
							titleText: O,
							onSelect: v,
							hideOptionRadios: p,
							hideOptionIcons: m,
							hideOptionLabels: te,
							hideTitleText: A,
							native: g,
							disabled: E,
							selected: P,
							options: a,
							disableStyles: R,
							className: M,
							internalClassName: U,
							treePath: h,
							customComponent: u,
						} = n;
					if (u) {
						const o = (0, x.x)(se?.templates?.library.import.component.radioList || {}, u);
						if (o) return (0, s.Y)(o, { ...n });
					}
					const c = {
							Radio: {
								internalClassName: 'ss__radio-list__option__radio',
								native: g,
								disableA11y: !0,
								disabled: E,
								...(0, N.s)({ disableStyles: R }),
								theme: n?.theme,
								treePath: h,
							},
							Icon: {
								internalClassName: 'ss__radio-list__option__icon',
								size: '16px',
								...(0, N.s)({ disableStyles: R }),
								theme: n?.theme,
								treePath: h,
							},
						},
						i = (0, W.Z)(n, q),
						[r, T] = (0, j.useState)(P),
						[F] = (0, j.useState)(P);
					try {
						if (P) {
							const o = JSON.stringify(F),
								D = JSON.stringify(P),
								C = JSON.stringify(r);
							o !== D && D !== C && T(P);
						}
					} catch {}
					const re = (o, D) => {
							v && v(o, D), T(D);
						},
						le = {},
						oe = k()(le, n.lang || {}),
						_e = (0, X.u)(oe, { options: a, selectedOptions: r });
					return typeof a == 'object' && a?.length
						? (0, s.Y)(b._, {
								children: (0, s.FD)('div', {
									...i,
									className: K()('ss__radio-list', { 'ss__radio-list--native': g, 'ss__radio-list--disabled': E }, M, U),
									children: [
										(O || oe?.title?.value) && !A && (0, s.Y)('h5', { className: 'ss__radio-list__title', ..._e.title?.all, children: O }),
										(0, s.Y)('ul', {
											className: 'ss__radio-list__options-wrapper',
											role: 'listbox',
											'aria-label': O,
											children: a.map((o) => {
												const D = r && r.value == o.value;
												return (0, s.FD)('li', {
													className: `ss__radio-list__option ${D ? 'ss__radio-list__option--selected' : ''} ${
														o.disabled ? 'ss__radio-list__option--disabled' : ''
													}`,
													ref: (C) => (0, V.iy)(C),
													onClick: (C) => !E && re(C, o),
													title: o.label,
													role: 'option',
													'aria-selected': D,
													children: [
														!p && (0, s.Y)(Q.s, { ...c.Radio, checked: D, disableA11y: !0 }),
														o.icon && !m && (0, s.Y)(Y.I, { ...c.Icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
														!te &&
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
				}
			},
			'./components/src/components/Molecules/Select/Select.tsx'(Oe, H, e) {
				e.d(H, { l: () => ne });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					z = e('../../node_modules/mobx-react-lite/es/index.js'),
					K = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					S = e.n(b),
					Z = e('./components/src/providers/cache.tsx'),
					G = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/snap.tsx'),
					B = e('./components/src/providers/treePath.tsx'),
					W = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					Q = e('./components/src/utilities/mergeStyles.ts'),
					V = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					X = e('./components/src/components/Atoms/Button/Button.tsx'),
					x = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Y = e('./components/src/hooks/useA11y.tsx'),
					w = e('./components/src/hooks/useLang.tsx'),
					k = e('./components/src/hooks/useComponent.tsx'),
					q = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(q),
					f = e('../../node_modules/color/index.js'),
					ee = e.n(f);
				const se = ({ color: _, backgroundColor: n, borderColor: O, theme: v, native: p }) => {
						const m = new (ee())(n || _ || v?.variables?.colors?.primary || void 0).lightness(95);
						return p
							? (0, K.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, K.AH)({
									display: 'inline-flex',
									color: _,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: n || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${O || _ || v?.variables?.colors?.primary || '#333'}`,
										'.ss__select__dropdown__button': { alignItems: 'center' },
										'.ss__select__select__option': {
											cursor: 'pointer',
											padding: '6px 8px',
											color: 'initial',
											display: 'flex',
											alignItems: 'center',
											gap: '5px',
											'&.ss__select__select__option--selected': { fontWeight: 'bold' },
											'&:hover': { backgroundColor: m.hex() || '#f8f8f8' },
										},
									},
							  });
					},
					ne = (0, z.PA)((_) => {
						const n = (0, G.u)(),
							O = (0, N.uk)(),
							p = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, B.LU)() },
							m = (0, j.v6)('select', n, p, _),
							{
								backgroundColor: te,
								borderColor: A,
								color: g,
								clearSelection: E,
								disableClickOutside: P,
								disabled: a,
								hideLabel: R,
								hideLabelOnSelection: M,
								iconColor: U,
								iconClose: h,
								iconOpen: u,
								label: c,
								native: i,
								onSelect: r,
								selected: T,
								separator: F,
								startOpen: re,
								hideIcon: le,
								hideOptionIcons: oe,
								hideOptionLabels: _e,
								hideSelection: o,
								stayOpenOnSelection: D,
								disableStyles: C,
								className: ve,
								internalClassName: Me,
								treePath: ie,
								customComponent: Pe,
							} = m;
						let { options: L } = m;
						if (Pe) {
							const t = (0, k.x)(O?.templates?.library.import.component.select || {}, Pe);
							if (t) return (0, s.Y)(t, { ...m });
						}
						const J = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, W.s)({ disableStyles: C, disabled: a }),
									theme: m?.theme,
									treePath: ie,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, W.s)({ disableStyles: C, disabled: a, color: g, backgroundColor: te, borderColor: A }),
									theme: m?.theme,
									treePath: ie,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, W.s)({ disableStyles: C, color: U || g, size: '12px' }),
									theme: m?.theme,
									treePath: ie,
								},
							},
							[ae, ce] = (0, y.J0)(!!re),
							[d, ue] = (0, y.J0)(T),
							[he] = (0, y.J0)(T);
						try {
							if (T) {
								const t = JSON.stringify(he),
									l = JSON.stringify(T),
									$ = JSON.stringify(d);
								t !== l && l !== $ && ue(T);
							}
						} catch {}
						d && E && (L = [{ label: E, value: '' }, ...L]);
						const De = (t, l) => {
								l != d && r && r(t, l), ue(l), !D && ce(!1);
							},
							Le = (0, Q.Z)(m, se),
							de = L.filter((t) => d?.value === t.value),
							ge = {
								buttonLabel: {
									value: c,
									attributes: {
										'aria-label': `${c} dropdown, ${L.length} options ${de.length ? `, Currently selected option is ${de[0].label}` : ''}`,
									},
								},
							},
							me = I()(ge, m.lang || {}),
							pe = (0, w.u)(me, { options: L, selectedOptions: de, label: c, open: ae });
						return typeof L == 'object' && L?.length
							? (0, s.Y)(Z._, {
									children: (0, s.Y)('div', {
										...Le,
										className: S()('ss__select', { 'ss__select--native': i }, { 'ss__select--disabled': a }, ve, Me),
										children: i
											? (0, s.FD)(s.FK, {
													children: [
														(c || me.buttonLabel.value) &&
															!R &&
															!M &&
															(0, s.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, s.Y)('label', { ...pe.buttonLabel?.all }),
																	F && (0, s.Y)('span', { className: 'ss__select__label__separator', children: F }),
																],
															}),
														(0, s.FD)('select', {
															className: 'ss__select__select',
															disabled: a || void 0,
															onChange: (t) => {
																const l = t.target,
																	$ = l.options[l.selectedIndex],
																	Ce = L.filter((Ee, xe) => Ee.label == $.text && (Ee.value == $.value || Ee.value == xe)).pop();
																!a && De(t, Ce);
															},
															children: [
																!d && E && (0, s.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: E }),
																L.map((t, l) =>
																	(0, s.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: d?.value === t.value,
																		value: t.value ?? l,
																		children: t.label,
																	})
																),
															],
														}),
														!le && (0, s.Y)(x.I, { ...J.icon, name: 'open', ...(typeof u == 'string' ? { icon: u } : u) }),
													],
											  })
											: (0, s.Y)(V.m, {
													...J.dropdown,
													disableClickOutside: P,
													open: ae,
													onToggle: (t, l) => ce(($) => l ?? !$),
													onClick: () => ce((t) => !t),
													disableA11y: !0,
													button: (0, s.FD)(X.$, {
														...J.button,
														children: [
															(c || me.buttonLabel.value) &&
																!M &&
																!R &&
																(0, s.FD)('span', {
																	className: 'ss__select__label',
																	...pe.buttonLabel.attributes,
																	children: [
																		(0, s.Y)('label', { ...pe.buttonLabel.value }),
																		F && d && (0, s.Y)('span', { className: 'ss__select__label__separator', children: F }),
																	],
																}),
															d &&
																!o &&
																(0, s.FD)(s.FK, {
																	children: [
																		d.icon &&
																			!oe &&
																			(0, s.Y)(x.I, {
																				...J.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof d.icon == 'string' ? { icon: d.icon } : d.icon),
																			}),
																		!_e && (0, s.Y)('span', { className: 'ss__select__selection', children: d?.label }),
																	],
																}),
															!le &&
																(0, s.Y)(x.I, {
																	...J.icon,
																	name: ae ? 'open' : 'close',
																	...(ae ? { ...(typeof h == 'string' ? { icon: h } : h) } : { ...(typeof u == 'string' ? { icon: u } : u) }),
																}),
														],
													}),
													children: (0, s.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof c == 'string' ? c : '',
														ref: (t) => (0, Y.iy)(t, -1, !0, () => ce(!1)),
														children: L.map((t) =>
															(0, s.FD)('li', {
																ref: (l) => (0, Y.iy)(l),
																'aria-disabled': t.disabled,
																title: t.label,
																className: S()('ss__select__select__option', { 'ss__select__select__option--selected': d?.value === t.value }),
																onClick: (l) => !a && De(l, t),
																role: 'option',
																'aria-selected': d?.value === t.value,
																children: [
																	t.icon &&
																		!oe &&
																		(0, s.Y)(x.I, {
																			...J.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${ie} dropdown`,
																			...(typeof t.icon == 'string' ? { icon: t.icon } : t.icon),
																		}),
																	!_e && (0, s.Y)('span', { children: t.label }),
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
		},
	]);
})();
