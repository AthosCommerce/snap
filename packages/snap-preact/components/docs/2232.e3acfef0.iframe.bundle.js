'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2232],
		{
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'(Ee, H, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					T = e.n(U),
					K = e('./components/src/providers/cache.tsx'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					Q = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/components/Molecules/Select/Select.tsx'),
					V = e('./components/src/components/Molecules/List/List.tsx'),
					X = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(N);
				const k = ({}) => (0, z.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					q = (0, b.PA)((I) => {
						const ee = (0, Z.u)(),
							f = (0, G.LU)(),
							A = {
								label: 'Layout',
								type: 'dropdown',
								showSingleOption: !1,
								selected: I.options && I.options.length ? I.options[0] : void 0,
								treePath: f,
							},
							d = (0, y.v6)('layoutSelector', ee, A, I),
							{
								options: p,
								selected: c,
								type: n,
								onSelect: D,
								showSingleOption: se,
								hideLabel: j,
								hideOptionLabels: h,
								disableStyles: B,
								className: m,
								internalClassName: M,
								treePath: u,
							} = d;
						let O = d.label;
						const { overrideElement: R, shouldRenderDefault: g } = (0, x._)('layoutSelector', d);
						if (!g) return R;
						const E = {
								Select: { hideOptionLabels: h, ...(0, C.s)({ disableStyles: B }), theme: d?.theme, treePath: u },
								RadioList: { hideOptionLabels: h, ...(0, C.s)({ disableStyles: B }), theme: d?.theme, treePath: u },
								List: {
									multiSelect: !1,
									horizontal: !0,
									hideOptionCheckboxes: !0,
									hideOptionLabels: h,
									requireSelection: !0,
									...(0, C.s)({ disableStyles: B }),
									theme: d?.theme,
									treePath: u,
								},
							},
							L = (0, Q.Z)(d, k),
							Y = { label: { value: O } },
							P = w()(Y, d.lang || {});
						if ((j && (delete P.label.value, (O = void 0)), h)) {
							const _ = p?.filter((v) => !v.icon);
							_?.length && console.warn('Warning - found layout options with no visible label or icon', _);
						}
						return (p && p.length > 1) || (p?.length === 1 && se)
							? (0, s.FD)(K._, {
									children: [
										n?.toLowerCase() == 'dropdown' &&
											(0, s.Y)(S.l, {
												...L,
												className: T()('ss__layout__select', m, M),
												...E.Select,
												label: O,
												options: p,
												selected: c,
												onSelect: (_, v) => {
													D && D(_, v);
												},
												lang: { buttonLabel: P.label },
											}),
										n?.toLowerCase() == 'list' &&
											(0, s.Y)(V.B, {
												...L,
												className: T()('ss__layout__list', m, M),
												...E.List,
												onSelect: (_, v) => {
													D && D(_, v);
												},
												options: p,
												selected: c,
												titleText: O,
												lang: { title: P.label },
											}),
										n?.toLowerCase() == 'radio' &&
											(0, s.Y)(X.q, {
												...L,
												className: T()('ss__layout__radioList', m, M),
												...E.RadioList,
												onSelect: (_, v) => {
													D && D(_, v);
												},
												options: p,
												selected: c,
												titleText: O,
												lang: { title: P.label },
											}),
									],
							  })
							: null;
					});
				e.d(H, ['s', 0, q]);
			},
			'./components/src/components/Molecules/RadioList/RadioList.tsx'(Ee, H, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					z = e('../../node_modules/classnames/index.js'),
					U = e.n(z),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					K = e('./components/src/providers/cache.tsx'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					Q = e('./components/src/utilities/mergeStyles.ts'),
					S = e('../../node_modules/preact/compat/dist/compat.module.js'),
					V = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					X = e('./components/src/hooks/useA11y.tsx'),
					x = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					w = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('../../node_modules/deepmerge/dist/cjs.js'),
					q = e.n(k);
				const I = ({ horizontal: f }) =>
						(0, b.AH)({
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
						}),
					ee = (0, T.PA)((f) => {
						const A = (0, Z.u)(),
							p = { treePath: (0, G.LU)() },
							c = (0, y.v6)('radioList', A, p, f),
							{
								titleText: n,
								onSelect: D,
								hideOptionRadios: se,
								hideOptionIcons: j,
								hideOptionLabels: h,
								hideTitleText: B,
								native: m,
								disabled: M,
								selected: u,
								options: O,
								disableStyles: R,
								className: g,
								internalClassName: E,
								treePath: L,
							} = c,
							{ overrideElement: Y, shouldRenderDefault: P } = (0, N._)('radioList', c);
						if (!P) return Y;
						const _ = {
								Radio: {
									internalClassName: 'ss__radio-list__option__radio',
									native: m,
									disableA11y: !0,
									disabled: M,
									...(0, C.s)({ disableStyles: R }),
									theme: c?.theme,
									treePath: L,
								},
								Icon: {
									internalClassName: 'ss__radio-list__option__icon',
									size: '16px',
									...(0, C.s)({ disableStyles: R }),
									theme: c?.theme,
									treePath: L,
								},
							},
							v = (0, Q.Z)(c, I),
							[W, te] = (0, S.useState)(u),
							[oe] = (0, S.useState)(u);
						try {
							if (u) {
								const o = JSON.stringify(oe),
									r = JSON.stringify(u),
									a = JSON.stringify(W);
								o !== r && r !== a && te(u);
							}
						} catch {}
						const _e = (o, r) => {
								D && D(o, r), te(r);
							},
							ae = {},
							F = q()(ae, c.lang || {}),
							ie = (0, x.u)(F, { options: O, selectedOptions: W });
						return typeof O == 'object' && O?.length
							? (0, s.Y)(K._, {
									children: (0, s.FD)('div', {
										...v,
										className: U()('ss__radio-list', { 'ss__radio-list--native': m, 'ss__radio-list--disabled': M }, g, E),
										children: [
											(n || F?.title?.value) && !B && (0, s.Y)('h5', { className: 'ss__radio-list__title', ...ie.title?.all, children: n }),
											(0, s.Y)('ul', {
												className: 'ss__radio-list__options-wrapper',
												role: 'listbox',
												'aria-label': n,
												children: O.map((o) => {
													const r = W && W.value == o.value;
													return (0, s.FD)('li', {
														className: `ss__radio-list__option ${r ? 'ss__radio-list__option--selected' : ''} ${
															o.disabled ? 'ss__radio-list__option--disabled' : ''
														}`,
														ref: (a) => (0, X.iy)(a),
														onClick: (a) => !M && _e(a, o),
														title: o.label,
														role: 'option',
														'aria-selected': r,
														children: [
															!se && (0, s.Y)(V.s, { ..._.Radio, checked: r, disableA11y: !0 }),
															o.icon && !j && (0, s.Y)(w.I, { ..._.Icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
															!h &&
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
				e.d(H, ['q', 0, ee]);
			},
			'./components/src/components/Molecules/Select/Select.tsx'(Ee, H, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					z = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					K = e.n(T),
					Z = e('./components/src/providers/cache.tsx'),
					G = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					Q = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					V = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					X = e('./components/src/components/Atoms/Button/Button.tsx'),
					x = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					N = e('./components/src/hooks/useA11y.tsx'),
					w = e('./components/src/hooks/useLang.tsx'),
					k = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					q = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(q);
				const ee = ({ color: A, backgroundColor: d, borderColor: p, theme: c, native: n }) =>
						n
							? (0, U.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, U.AH)({
									display: 'inline-flex',
									color: A,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: d || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${p || A || c?.variables?.colors?.primary || '#333'}`,
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
					f = (0, z.PA)((A) => {
						const d = (0, G.u)(),
							c = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, C.LU)() },
							n = (0, Q.v6)('select', d, c, A),
							{
								backgroundColor: D,
								borderColor: se,
								color: j,
								clearSelection: h,
								disableClickOutside: B,
								disabled: m,
								hideLabel: M,
								hideLabelOnSelection: u,
								iconColor: O,
								iconClose: R,
								iconOpen: g,
								label: E,
								native: L,
								onSelect: Y,
								selected: P,
								separator: _,
								startOpen: v,
								hideIcon: W,
								hideOptionIcons: te,
								hideOptionLabels: oe,
								hideSelection: _e,
								stayOpenOnSelection: ae,
								disableStyles: F,
								className: ie,
								internalClassName: o,
								treePath: r,
							} = n;
						let { options: a } = n;
						const { overrideElement: Oe, shouldRenderDefault: Pe } = (0, k._)('select', n);
						if (!Pe) return Oe;
						const J = {
								dropdown: { internalClassName: 'ss__select__dropdown', ...(0, y.s)({ disableStyles: F, disabled: m }), theme: n?.theme, treePath: r },
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, y.s)({ disableStyles: F, disabled: m, color: j, backgroundColor: D, borderColor: se }),
									theme: n?.theme,
									treePath: r,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, y.s)({ disableStyles: F, color: O || j, size: '12px' }),
									theme: n?.theme,
									treePath: r,
								},
							},
							[ne, le] = (0, b.J0)(!!v),
							[i, pe] = (0, b.J0)(P),
							[De] = (0, b.J0)(P);
						try {
							if (P) {
								const t = JSON.stringify(De),
									l = JSON.stringify(P),
									$ = JSON.stringify(i);
								t !== l && l !== $ && pe(P);
							}
						} catch {}
						i && h && (a = [{ label: h, value: '' }, ...a]);
						const ue = (t, l) => {
								l != i && Y && Y(t, l), pe(l), !ae && le(!1);
							},
							he = (0, S.Z)(n, ee),
							ce = a.filter((t) => i?.value === t.value),
							ve = {
								buttonLabel: {
									value: E,
									attributes: {
										'aria-label': `${E} dropdown, ${a.length} options ${ce.length ? `, Currently selected option is ${ce[0].label}` : ''}`,
									},
								},
							},
							re = I()(ve, n.lang || {}),
							de = (0, w.u)(re, { options: a, selectedOptions: ce, label: E, open: ne });
						return typeof a == 'object' && a?.length
							? (0, s.Y)(Z._, {
									children: (0, s.Y)('div', {
										...he,
										className: K()('ss__select', { 'ss__select--native': L }, { 'ss__select--disabled': m }, ie, o),
										children: L
											? (0, s.FD)(s.FK, {
													children: [
														(E || re.buttonLabel.value) &&
															!M &&
															!u &&
															(0, s.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, s.Y)('label', { ...de.buttonLabel?.all }),
																	_ && (0, s.Y)('span', { className: 'ss__select__label__separator', children: _ }),
																],
															}),
														(0, s.FD)('select', {
															className: 'ss__select__select',
															disabled: m || void 0,
															onChange: (t) => {
																const l = t.target,
																	$ = l.options[l.selectedIndex],
																	Me = a.filter((me, ge) => me.label == $.text && (me.value == $.value || me.value == ge)).pop();
																!m && ue(t, Me);
															},
															children: [
																!i && h && (0, s.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: h }),
																a.map((t, l) =>
																	(0, s.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: i?.value === t.value,
																		value: t.value ?? l,
																		children: t.label,
																	})
																),
															],
														}),
														!W && (0, s.Y)(x.I, { ...J.icon, name: 'open', ...(typeof g == 'string' ? { icon: g } : g) }),
													],
											  })
											: (0, s.Y)(V.m, {
													...J.dropdown,
													disableClickOutside: B,
													open: ne,
													onToggle: (t, l) => le(($) => l ?? !$),
													onClick: () => le((t) => !t),
													disableA11y: !0,
													button: (0, s.FD)(X.$, {
														...J.button,
														children: [
															(E || re.buttonLabel.value) &&
																!u &&
																!M &&
																(0, s.FD)('span', {
																	className: 'ss__select__label',
																	...de.buttonLabel.attributes,
																	children: [
																		(0, s.Y)('label', { ...de.buttonLabel.value }),
																		_ && i && (0, s.Y)('span', { className: 'ss__select__label__separator', children: _ }),
																	],
																}),
															i &&
																!_e &&
																(0, s.FD)(s.FK, {
																	children: [
																		i.icon &&
																			!te &&
																			(0, s.Y)(x.I, {
																				...J.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof i.icon == 'string' ? { icon: i.icon } : i.icon),
																			}),
																		!oe && (0, s.Y)('span', { className: 'ss__select__selection', children: i?.label }),
																	],
																}),
															!W &&
																(0, s.Y)(x.I, {
																	...J.icon,
																	name: ne ? 'open' : 'close',
																	...(ne ? { ...(typeof R == 'string' ? { icon: R } : R) } : { ...(typeof g == 'string' ? { icon: g } : g) }),
																}),
														],
													}),
													children: (0, s.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof E == 'string' ? E : '',
														ref: (t) => (0, N.iy)(t, -1, !0, () => le(!1)),
														children: a.map((t) =>
															(0, s.FD)('li', {
																ref: (l) => (0, N.iy)(l),
																'aria-disabled': t.disabled,
																title: t.label,
																className: K()('ss__select__select__option', { 'ss__select__select__option--selected': i?.value === t.value }),
																onClick: (l) => !m && ue(l, t),
																role: 'option',
																'aria-selected': i?.value === t.value,
																children: [
																	t.icon &&
																		!te &&
																		(0, s.Y)(x.I, {
																			...J.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${r} dropdown`,
																			...(typeof t.icon == 'string' ? { icon: t.icon } : t.icon),
																		}),
																	!oe && (0, s.Y)('span', { children: t.label }),
																],
															})
														),
													}),
											  }),
									}),
							  })
							: null;
					});
				e.d(H, ['l', 0, f]);
			},
		},
	]);
})();
