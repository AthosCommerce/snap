'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2232],
		{
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'(Oe, H, e) {
				e.d(H, { s: () => q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					R = e.n(U),
					K = e('./components/src/providers/cache.tsx'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/snap.tsx'),
					S = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					N = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/components/Molecules/Select/Select.tsx'),
					V = e('./components/src/components/Molecules/List/List.tsx'),
					X = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					g = e('./components/src/hooks/useComponent.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					k = e.n(j);
				const w = ({}) => (0, z.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					q = (0, A.PA)((C) => {
						const x = (0, Z.u)(),
							ee = (0, G.uk)(),
							I = (0, S.LU)(),
							Y = {
								label: 'Layout',
								type: 'dropdown',
								showSingleOption: !1,
								selected: C.options && C.options.length ? C.options[0] : void 0,
								treePath: I,
							},
							r = (0, b.v6)('layoutSelector', x, Y, C),
							{
								options: l,
								selected: O,
								type: a,
								onSelect: M,
								showSingleOption: se,
								hideLabel: F,
								hideOptionLabels: u,
								disableStyles: f,
								className: d,
								internalClassName: p,
								treePath: P,
								customComponent: y,
							} = r;
						let D = r.label;
						if (y) {
							const n = (0, g.x)(ee?.templates?.library.import.component.layoutSelector || {}, y);
							if (n) return (0, s.Y)(n, { ...r });
						}
						const E = {
								Select: { hideOptionLabels: u, ...(0, T.s)({ disableStyles: f }), theme: r?.theme, treePath: P },
								RadioList: { hideOptionLabels: u, ...(0, T.s)({ disableStyles: f }), theme: r?.theme, treePath: P },
								List: {
									multiSelect: !1,
									horizontal: !0,
									hideOptionCheckboxes: !0,
									hideOptionLabels: u,
									requireSelection: !0,
									...(0, T.s)({ disableStyles: f }),
									theme: r?.theme,
									treePath: P,
								},
							},
							m = (0, N.Z)(r, w),
							B = { label: { value: D } },
							h = k()(B, r.lang || {});
						if ((F && (delete h.label.value, (D = void 0)), u)) {
							const n = l?.filter((i) => !i.icon);
							n?.length && console.warn('Warning - found layout options with no visible label or icon', n);
						}
						return (l && l.length > 1) || (l?.length === 1 && se)
							? (0, s.FD)(K._, {
									children: [
										a?.toLowerCase() == 'dropdown' &&
											(0, s.Y)(Q.l, {
												...m,
												className: R()('ss__layout__select', d, p),
												...E.Select,
												label: D,
												options: l,
												selected: O,
												onSelect: (n, i) => {
													M && M(n, i);
												},
												lang: { buttonLabel: h.label },
											}),
										a?.toLowerCase() == 'list' &&
											(0, s.Y)(V.B, {
												...m,
												className: R()('ss__layout__list', d, p),
												...E.List,
												onSelect: (n, i) => {
													M && M(n, i);
												},
												options: l,
												selected: O,
												titleText: D,
												lang: { title: h.label },
											}),
										a?.toLowerCase() == 'radio' &&
											(0, s.Y)(X.q, {
												...m,
												className: R()('ss__layout__radioList', d, p),
												...E.RadioList,
												onSelect: (n, i) => {
													M && M(n, i);
												},
												options: l,
												selected: O,
												titleText: D,
												lang: { title: h.label },
											}),
									],
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/RadioList/RadioList.tsx'(Oe, H, e) {
				e.d(H, { q: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					z = e('../../node_modules/classnames/index.js'),
					U = e.n(z),
					R = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Z = e('./components/src/providers/snap.tsx'),
					G = e('./components/src/providers/treePath.tsx'),
					S = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					N = e('../../node_modules/preact/compat/dist/compat.module.js'),
					Q = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					V = e('./components/src/hooks/useA11y.tsx'),
					X = e('./components/src/hooks/useLang.tsx'),
					g = e('./components/src/hooks/useComponent.tsx'),
					j = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(k);
				const q = ({ horizontal: x }) =>
					(0, A.AH)({
						'& .ss__radio-list__options-wrapper': {
							display: 'flex',
							flexDirection: x ? 'row' : 'column',
							alignItems: x ? 'center' : void 0,
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
				function C(x) {
					const ee = (0, K.u)(),
						I = (0, Z.uk)(),
						r = { treePath: (0, G.LU)() },
						l = (0, T.v6)('radioList', ee, r, x),
						{
							titleText: O,
							onSelect: a,
							hideOptionRadios: M,
							hideOptionIcons: se,
							hideOptionLabels: F,
							hideTitleText: u,
							native: f,
							disabled: d,
							selected: p,
							options: P,
							disableStyles: y,
							className: D,
							internalClassName: E,
							treePath: m,
							customComponent: B,
						} = l;
					if (B) {
						const o = (0, g.x)(I?.templates?.library.import.component.radioList || {}, B);
						if (o) return (0, s.Y)(o, { ...l });
					}
					const h = {
							Radio: {
								internalClassName: 'ss__radio-list__option__radio',
								native: f,
								disableA11y: !0,
								disabled: d,
								...(0, S.s)({ disableStyles: y }),
								theme: l?.theme,
								treePath: m,
							},
							Icon: {
								internalClassName: 'ss__radio-list__option__icon',
								size: '16px',
								...(0, S.s)({ disableStyles: y }),
								theme: l?.theme,
								treePath: m,
							},
						},
						n = (0, b.Z)(l, q),
						[i, te] = (0, N.useState)(p),
						[oe] = (0, N.useState)(p);
					try {
						if (p) {
							const o = JSON.stringify(oe),
								v = JSON.stringify(p),
								W = JSON.stringify(i);
							o !== v && v !== W && te(p);
						}
					} catch {}
					const ne = (o, v) => {
							a && a(o, v), te(v);
						},
						le = {},
						ie = w()(le, l.lang || {}),
						re = (0, X.u)(ie, { options: P, selectedOptions: i });
					return typeof P == 'object' && P?.length
						? (0, s.Y)(R._, {
								children: (0, s.FD)('div', {
									...n,
									className: U()('ss__radio-list', { 'ss__radio-list--native': f, 'ss__radio-list--disabled': d }, D, E),
									children: [
										(O || ie?.title?.value) && !u && (0, s.Y)('h5', { className: 'ss__radio-list__title', ...re.title?.all, children: O }),
										(0, s.Y)('ul', {
											className: 'ss__radio-list__options-wrapper',
											role: 'listbox',
											'aria-label': O,
											children: P.map((o) => {
												const v = i && i.value == o.value;
												return (0, s.FD)('li', {
													className: `ss__radio-list__option ${v ? 'ss__radio-list__option--selected' : ''} ${
														o.disabled ? 'ss__radio-list__option--disabled' : ''
													}`,
													ref: (W) => (0, V.iy)(W),
													onClick: (W) => !d && ne(W, o),
													title: o.label,
													role: 'option',
													'aria-selected': v,
													children: [
														!M && (0, s.Y)(Q.s, { ...h.Radio, checked: v, disableA11y: !0 }),
														o.icon && !se && (0, s.Y)(j.I, { ...h.Icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
														!F &&
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
				e.d(H, { l: () => ee });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					A = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					z = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					K = e.n(R),
					Z = e('./components/src/providers/cache.tsx'),
					G = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/snap.tsx'),
					T = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					N = e('./components/src/utilities/mergeProps.ts'),
					Q = e('./components/src/utilities/mergeStyles.ts'),
					V = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					X = e('./components/src/components/Atoms/Button/Button.tsx'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					k = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useComponent.tsx'),
					q = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(q);
				const x = ({ color: I, backgroundColor: Y, borderColor: r, theme: l, native: O }) =>
						O
							? (0, U.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, U.AH)({
									display: 'inline-flex',
									color: I,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: Y || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${r || I || l?.variables?.colors?.primary || '#333'}`,
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
					ee = (0, z.PA)((I) => {
						const Y = (0, G.u)(),
							r = (0, S.uk)(),
							O = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, T.LU)() },
							a = (0, N.v6)('select', Y, O, I),
							{
								backgroundColor: M,
								borderColor: se,
								color: F,
								clearSelection: u,
								disableClickOutside: f,
								disabled: d,
								hideLabel: p,
								hideLabelOnSelection: P,
								iconColor: y,
								iconClose: D,
								iconOpen: E,
								label: m,
								native: B,
								onSelect: h,
								selected: n,
								separator: i,
								startOpen: te,
								hideIcon: oe,
								hideOptionIcons: ne,
								hideOptionLabels: le,
								hideSelection: ie,
								stayOpenOnSelection: re,
								disableStyles: o,
								className: v,
								internalClassName: W,
								treePath: _e,
								customComponent: ue,
							} = a;
						let { options: L } = a;
						if (ue) {
							const t = (0, w.x)(r?.templates?.library.import.component.select || {}, ue);
							if (t) return (0, s.Y)(t, { ...a });
						}
						const J = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, b.s)({ disableStyles: o, disabled: d }),
									theme: a?.theme,
									treePath: _e,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, b.s)({ disableStyles: o, disabled: d, color: F, backgroundColor: M, borderColor: se }),
									theme: a?.theme,
									treePath: _e,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, b.s)({ disableStyles: o, color: y || F, size: '12px' }),
									theme: a?.theme,
									treePath: _e,
								},
							},
							[ae, ce] = (0, A.J0)(!!te),
							[c, Pe] = (0, A.J0)(n),
							[ve] = (0, A.J0)(n);
						try {
							if (n) {
								const t = JSON.stringify(ve),
									_ = JSON.stringify(n),
									$ = JSON.stringify(c);
								t !== _ && _ !== $ && Pe(n);
							}
						} catch {}
						c && u && (L = [{ label: u, value: '' }, ...L]);
						const De = (t, _) => {
								_ != c && h && h(t, _), Pe(_), !re && ce(!1);
							},
							Me = (0, Q.Z)(a, x),
							de = L.filter((t) => c?.value === t.value),
							he = {
								buttonLabel: {
									value: m,
									attributes: {
										'aria-label': `${m} dropdown, ${L.length} options ${de.length ? `, Currently selected option is ${de[0].label}` : ''}`,
									},
								},
							},
							me = C()(he, a.lang || {}),
							pe = (0, k.u)(me, { options: L, selectedOptions: de, label: m, open: ae });
						return typeof L == 'object' && L?.length
							? (0, s.Y)(Z._, {
									children: (0, s.Y)('div', {
										...Me,
										className: K()('ss__select', { 'ss__select--native': B }, { 'ss__select--disabled': d }, v, W),
										children: B
											? (0, s.FD)(s.FK, {
													children: [
														(m || me.buttonLabel.value) &&
															!p &&
															!P &&
															(0, s.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, s.Y)('label', { ...pe.buttonLabel?.all }),
																	i && (0, s.Y)('span', { className: 'ss__select__label__separator', children: i }),
																],
															}),
														(0, s.FD)('select', {
															className: 'ss__select__select',
															disabled: d || void 0,
															onChange: (t) => {
																const _ = t.target,
																	$ = _.options[_.selectedIndex],
																	Le = L.filter((Ee, ge) => Ee.label == $.text && (Ee.value == $.value || Ee.value == ge)).pop();
																!d && De(t, Le);
															},
															children: [
																!c && u && (0, s.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: u }),
																L.map((t, _) =>
																	(0, s.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: c?.value === t.value,
																		value: t.value ?? _,
																		children: t.label,
																	})
																),
															],
														}),
														!oe && (0, s.Y)(g.I, { ...J.icon, name: 'open', ...(typeof E == 'string' ? { icon: E } : E) }),
													],
											  })
											: (0, s.Y)(V.m, {
													...J.dropdown,
													disableClickOutside: f,
													open: ae,
													onToggle: (t, _) => ce(($) => _ ?? !$),
													onClick: () => ce((t) => !t),
													disableA11y: !0,
													button: (0, s.FD)(X.$, {
														...J.button,
														children: [
															(m || me.buttonLabel.value) &&
																!P &&
																!p &&
																(0, s.FD)('span', {
																	className: 'ss__select__label',
																	...pe.buttonLabel.attributes,
																	children: [
																		(0, s.Y)('label', { ...pe.buttonLabel.value }),
																		i && c && (0, s.Y)('span', { className: 'ss__select__label__separator', children: i }),
																	],
																}),
															c &&
																!ie &&
																(0, s.FD)(s.FK, {
																	children: [
																		c.icon &&
																			!ne &&
																			(0, s.Y)(g.I, {
																				...J.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof c.icon == 'string' ? { icon: c.icon } : c.icon),
																			}),
																		!le && (0, s.Y)('span', { className: 'ss__select__selection', children: c?.label }),
																	],
																}),
															!oe &&
																(0, s.Y)(g.I, {
																	...J.icon,
																	name: ae ? 'open' : 'close',
																	...(ae ? { ...(typeof D == 'string' ? { icon: D } : D) } : { ...(typeof E == 'string' ? { icon: E } : E) }),
																}),
														],
													}),
													children: (0, s.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof m == 'string' ? m : '',
														ref: (t) => (0, j.iy)(t, -1, !0, () => ce(!1)),
														children: L.map((t) =>
															(0, s.FD)('li', {
																ref: (_) => (0, j.iy)(_),
																'aria-disabled': t.disabled,
																title: t.label,
																className: K()('ss__select__select__option', { 'ss__select__select__option--selected': c?.value === t.value }),
																onClick: (_) => !d && De(_, t),
																role: 'option',
																'aria-selected': c?.value === t.value,
																children: [
																	t.icon &&
																		!ne &&
																		(0, s.Y)(g.I, {
																			...J.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${_e} dropdown`,
																			...(typeof t.icon == 'string' ? { icon: t.icon } : t.icon),
																		}),
																	!le && (0, s.Y)('span', { children: t.label }),
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
