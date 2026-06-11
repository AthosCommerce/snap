'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2232],
		{
			'./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'(Ee, H, e) {
				e.d(H, { s: () => k });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					b = e.n(U),
					K = e('./components/src/providers/cache.tsx'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					N = e('./components/src/utilities/mergeStyles.ts'),
					G = e('./components/src/components/Molecules/Select/Select.tsx'),
					Q = e('./components/src/components/Molecules/List/List.tsx'),
					V = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					X = e.n(j);
				const w = ({}) => (0, z.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					k = (0, R.PA)((x) => {
						const f = (0, Z.u)(),
							q = (0, S.LU)(),
							B = {
								label: 'Layout',
								type: 'dropdown',
								showSingleOption: !1,
								selected: x.options && x.options.length ? x.options[0] : void 0,
								treePath: q,
							},
							c = (0, y.v6)('layoutSelector', f, B, x),
							{
								options: n,
								selected: u,
								type: l,
								onSelect: h,
								showSingleOption: ee,
								hideLabel: Y,
								hideOptionLabels: O,
								disableStyles: I,
								className: r,
								internalClassName: p,
								treePath: P,
							} = c;
						let v = c.label;
						const { overrideElement: W, shouldRenderDefault: M } = (0, C._)('layoutSelector', c);
						if (!M) return W;
						const d = {
								Select: { hideOptionLabels: O, ...(0, T.s)({ disableStyles: I }), theme: c?.theme, treePath: P },
								RadioList: { hideOptionLabels: O, ...(0, T.s)({ disableStyles: I }), theme: c?.theme, treePath: P },
								List: {
									multiSelect: !1,
									horizontal: !0,
									hideOptionCheckboxes: !0,
									hideOptionLabels: O,
									requireSelection: !0,
									...(0, T.s)({ disableStyles: I }),
									theme: c?.theme,
									treePath: P,
								},
							},
							A = (0, N.Z)(c, w),
							F = { label: { value: v } },
							E = X()(F, c.lang || {});
						if ((Y && (delete E.label.value, (v = void 0)), O)) {
							const i = n?.filter((m) => !m.icon);
							i?.length && console.warn('Warning - found layout options with no visible label or icon', i);
						}
						return (n && n.length > 1) || (n?.length === 1 && ee)
							? (0, s.FD)(K._, {
									children: [
										l?.toLowerCase() == 'dropdown' &&
											(0, s.Y)(G.l, {
												...A,
												className: b()('ss__layout__select', r, p),
												...d.Select,
												label: v,
												options: n,
												selected: u,
												onSelect: (i, m) => {
													h && h(i, m);
												},
												lang: { buttonLabel: E.label },
											}),
										l?.toLowerCase() == 'list' &&
											(0, s.Y)(Q.B, {
												...A,
												className: b()('ss__layout__list', r, p),
												...d.List,
												onSelect: (i, m) => {
													h && h(i, m);
												},
												options: n,
												selected: u,
												titleText: v,
												lang: { title: E.label },
											}),
										l?.toLowerCase() == 'radio' &&
											(0, s.Y)(V.q, {
												...A,
												className: b()('ss__layout__radioList', r, p),
												...d.RadioList,
												onSelect: (i, m) => {
													h && h(i, m);
												},
												options: n,
												selected: u,
												titleText: v,
												lang: { title: E.label },
											}),
									],
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/RadioList/RadioList.tsx'(Ee, H, e) {
				e.d(H, { q: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					z = e('../../node_modules/classnames/index.js'),
					U = e.n(z),
					b = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Z = e('./components/src/providers/treePath.tsx'),
					S = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					N = e('../../node_modules/preact/compat/dist/compat.module.js'),
					G = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					Q = e('./components/src/hooks/useA11y.tsx'),
					V = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					X = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(X);
				const k = ({ horizontal: f }) =>
					(0, R.AH)({
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
				function x(f) {
					const q = (0, K.u)(),
						c = { treePath: (0, Z.LU)() },
						n = (0, T.v6)('radioList', q, c, f),
						{
							titleText: u,
							onSelect: l,
							hideOptionRadios: h,
							hideOptionIcons: ee,
							hideOptionLabels: Y,
							hideTitleText: O,
							native: I,
							disabled: r,
							selected: p,
							options: P,
							disableStyles: v,
							className: W,
							internalClassName: M,
							treePath: d,
						} = n,
						{ overrideElement: A, shouldRenderDefault: F } = (0, C._)('radioList', n);
					if (!F) return A;
					const E = {
							Radio: {
								internalClassName: 'ss__radio-list__option__radio',
								native: I,
								disableA11y: !0,
								disabled: r,
								...(0, S.s)({ disableStyles: v }),
								theme: n?.theme,
								treePath: d,
							},
							Icon: {
								internalClassName: 'ss__radio-list__option__icon',
								size: '16px',
								...(0, S.s)({ disableStyles: v }),
								theme: n?.theme,
								treePath: d,
							},
						},
						i = (0, y.Z)(n, k),
						[m, se] = (0, N.useState)(p),
						[oe] = (0, N.useState)(p);
					try {
						if (p) {
							const o = JSON.stringify(oe),
								D = JSON.stringify(p),
								g = JSON.stringify(m);
							o !== D && D !== g && se(p);
						}
					} catch {}
					const ne = (o, D) => {
							l && l(o, D), se(D);
						},
						ae = {},
						le = w()(ae, n.lang || {}),
						te = (0, V.u)(le, { options: P, selectedOptions: m });
					return typeof P == 'object' && P?.length
						? (0, s.Y)(b._, {
								children: (0, s.FD)('div', {
									...i,
									className: U()('ss__radio-list', { 'ss__radio-list--native': I, 'ss__radio-list--disabled': r }, W, M),
									children: [
										(u || le?.title?.value) && !O && (0, s.Y)('h5', { className: 'ss__radio-list__title', ...te.title?.all, children: u }),
										(0, s.Y)('ul', {
											className: 'ss__radio-list__options-wrapper',
											role: 'listbox',
											'aria-label': u,
											children: P.map((o) => {
												const D = m && m.value == o.value;
												return (0, s.FD)('li', {
													className: `ss__radio-list__option ${D ? 'ss__radio-list__option--selected' : ''} ${
														o.disabled ? 'ss__radio-list__option--disabled' : ''
													}`,
													ref: (g) => (0, Q.iy)(g),
													onClick: (g) => !r && ne(g, o),
													title: o.label,
													role: 'option',
													'aria-selected': D,
													children: [
														!h && (0, s.Y)(G.s, { ...E.Radio, checked: D, disableA11y: !0 }),
														o.icon && !ee && (0, s.Y)(j.I, { ...E.Icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
														!Y &&
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
			'./components/src/components/Molecules/Select/Select.tsx'(Ee, H, e) {
				e.d(H, { l: () => q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					R = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					z = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					K = e.n(b),
					Z = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					N = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					Q = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					V = e('./components/src/components/Atoms/Button/Button.tsx'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					X = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					k = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(k);
				const f = ({ color: B, backgroundColor: c, borderColor: n, theme: u, native: l }) =>
						l
							? (0, U.AH)({ '.ss__select__select': { paddingRight: '10px', appearance: 'none', '&::-ms-expand': { display: 'none' } } })
							: (0, U.AH)({
									display: 'inline-flex',
									color: B,
									'&.ss__select--disabled': { opacity: 0.7 },
									'.ss__select__selection__icon': { margin: '0px 5px 0px 0px' },
									'.ss__button__content': { display: 'flex', alignItems: 'center', gap: '5px' },
									'.ss__select__select': {
										position: 'relative',
										zIndex: '10000',
										backgroundColor: c || '#fff',
										listStyle: 'none',
										padding: '0',
										marginTop: '-1px',
										border: `1px solid ${n || B || u?.variables?.colors?.primary || '#333'}`,
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
					q = (0, z.PA)((B) => {
						const c = (0, S.u)(),
							u = { iconOpen: 'angle-down', iconClose: 'angle-up', separator: ': ', startOpen: !1, treePath: (0, T.LU)() },
							l = (0, N.v6)('select', c, u, B),
							{
								backgroundColor: h,
								borderColor: ee,
								color: Y,
								clearSelection: O,
								disableClickOutside: I,
								disabled: r,
								hideLabel: p,
								hideLabelOnSelection: P,
								iconColor: v,
								iconClose: W,
								iconOpen: M,
								label: d,
								native: A,
								onSelect: F,
								selected: E,
								separator: i,
								startOpen: m,
								hideIcon: se,
								hideOptionIcons: oe,
								hideOptionLabels: ne,
								hideSelection: ae,
								stayOpenOnSelection: le,
								disableStyles: te,
								className: o,
								internalClassName: D,
								treePath: g,
							} = l;
						let { options: L } = l;
						const { overrideElement: Oe, shouldRenderDefault: Pe } = (0, w._)('select', l);
						if (!Pe) return Oe;
						const J = {
								dropdown: {
									internalClassName: 'ss__select__dropdown',
									...(0, y.s)({ disableStyles: te, disabled: r }),
									theme: l?.theme,
									treePath: g,
								},
								button: {
									internalClassName: 'ss__select__dropdown__button',
									...(0, y.s)({ disableStyles: te, disabled: r, color: Y, backgroundColor: h, borderColor: ee }),
									theme: l?.theme,
									treePath: g,
								},
								icon: {
									internalClassName: 'ss__select__dropdown__button__icon',
									...(0, y.s)({ disableStyles: te, color: v || Y, size: '12px' }),
									theme: l?.theme,
									treePath: g,
								},
							},
							[_e, ie] = (0, R.J0)(!!m),
							[a, pe] = (0, R.J0)(E),
							[De] = (0, R.J0)(E);
						try {
							if (E) {
								const t = JSON.stringify(De),
									_ = JSON.stringify(E),
									$ = JSON.stringify(a);
								t !== _ && _ !== $ && pe(E);
							}
						} catch {}
						a && O && (L = [{ label: O, value: '' }, ...L]);
						const ue = (t, _) => {
								_ != a && F && F(t, _), pe(_), !le && ie(!1);
							},
							he = (0, G.Z)(l, f),
							ce = L.filter((t) => a?.value === t.value),
							ve = {
								buttonLabel: {
									value: d,
									attributes: {
										'aria-label': `${d} dropdown, ${L.length} options ${ce.length ? `, Currently selected option is ${ce[0].label}` : ''}`,
									},
								},
							},
							re = x()(ve, l.lang || {}),
							de = (0, X.u)(re, { options: L, selectedOptions: ce, label: d, open: _e });
						return typeof L == 'object' && L?.length
							? (0, s.Y)(Z._, {
									children: (0, s.Y)('div', {
										...he,
										className: K()('ss__select', { 'ss__select--native': A }, { 'ss__select--disabled': r }, o, D),
										children: A
											? (0, s.FD)(s.FK, {
													children: [
														(d || re.buttonLabel.value) &&
															!p &&
															!P &&
															(0, s.FD)('span', {
																className: 'ss__select__label',
																children: [
																	(0, s.Y)('label', { ...de.buttonLabel?.all }),
																	i && (0, s.Y)('span', { className: 'ss__select__label__separator', children: i }),
																],
															}),
														(0, s.FD)('select', {
															className: 'ss__select__select',
															disabled: r || void 0,
															onChange: (t) => {
																const _ = t.target,
																	$ = _.options[_.selectedIndex],
																	Me = L.filter((me, ge) => me.label == $.text && (me.value == $.value || me.value == ge)).pop();
																!r && ue(t, Me);
															},
															children: [
																!a && O && (0, s.Y)('option', { className: 'ss__select__select__option', selected: !0, value: '', children: O }),
																L.map((t, _) =>
																	(0, s.Y)('option', {
																		className: 'ss__select__select__option',
																		selected: a?.value === t.value,
																		value: t.value ?? _,
																		children: t.label,
																	})
																),
															],
														}),
														!se && (0, s.Y)(C.I, { ...J.icon, name: 'open', ...(typeof M == 'string' ? { icon: M } : M) }),
													],
											  })
											: (0, s.Y)(Q.m, {
													...J.dropdown,
													disableClickOutside: I,
													open: _e,
													onToggle: (t, _) => ie(($) => _ ?? !$),
													onClick: () => ie((t) => !t),
													disableA11y: !0,
													button: (0, s.FD)(V.$, {
														...J.button,
														children: [
															(d || re.buttonLabel.value) &&
																!P &&
																!p &&
																(0, s.FD)('span', {
																	className: 'ss__select__label',
																	...de.buttonLabel.attributes,
																	children: [
																		(0, s.Y)('label', { ...de.buttonLabel.value }),
																		i && a && (0, s.Y)('span', { className: 'ss__select__label__separator', children: i }),
																	],
																}),
															a &&
																!ae &&
																(0, s.FD)(s.FK, {
																	children: [
																		a.icon &&
																			!oe &&
																			(0, s.Y)(C.I, {
																				...J.icon,
																				className: 'ss__select__selection__icon',
																				name: 'selection',
																				...(typeof a.icon == 'string' ? { icon: a.icon } : a.icon),
																			}),
																		!ne && (0, s.Y)('span', { className: 'ss__select__selection', children: a?.label }),
																	],
																}),
															!se &&
																(0, s.Y)(C.I, {
																	...J.icon,
																	name: _e ? 'open' : 'close',
																	...(_e ? { ...(typeof W == 'string' ? { icon: W } : W) } : { ...(typeof M == 'string' ? { icon: M } : M) }),
																}),
														],
													}),
													children: (0, s.Y)('ul', {
														className: 'ss__select__select',
														role: 'listbox',
														'aria-label': typeof d == 'string' ? d : '',
														ref: (t) => (0, j.iy)(t, -1, !0, () => ie(!1)),
														children: L.map((t) =>
															(0, s.FD)('li', {
																ref: (_) => (0, j.iy)(_),
																'aria-disabled': t.disabled,
																title: t.label,
																className: K()('ss__select__select__option', { 'ss__select__select__option--selected': a?.value === t.value }),
																onClick: (_) => !r && ue(_, t),
																role: 'option',
																'aria-selected': a?.value === t.value,
																children: [
																	t.icon &&
																		!oe &&
																		(0, s.Y)(C.I, {
																			...J.icon,
																			name: 'option',
																			className: 'ss__select__select__option__icon',
																			treePath: `${g} dropdown`,
																			...(typeof t.icon == 'string' ? { icon: t.icon } : t.icon),
																		}),
																	!ne && (0, s.Y)('span', { children: t.label }),
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
