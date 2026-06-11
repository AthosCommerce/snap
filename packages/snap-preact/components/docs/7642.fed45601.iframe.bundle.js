'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7642],
		{
			'./components/src/components/Atoms/Button/Button.tsx'(G, E, t) {
				t.d(E, { $: () => Z });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					l = t.n(n),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = t('./components/src/providers/treePath.tsx'),
					R = t('./components/src/hooks/useA11y.tsx'),
					D = t('./components/src/utilities/cloneWithProps.tsx'),
					r = t('./components/src/utilities/defined.ts'),
					C = t('./components/src/utilities/mergeProps.ts'),
					x = t('./components/src/utilities/mergeStyles.ts'),
					L = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = t('./components/src/hooks/useLang.tsx'),
					z = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					V = t('../../node_modules/deepmerge/dist/cjs.js'),
					X = t.n(V);
				const A = ({ native: m, color: M, backgroundColor: y, borderColor: b, theme: _ }) =>
						m
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: M || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: y || '#fff',
									border: `1px solid ${b || M || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					Z = (0, c.PA)((m) => {
						const M = (0, i.u)(),
							b = { disableA11y: !1, treePath: (0, Y.LU)() },
							_ = (0, C.v6)('button', M, b, m),
							{
								content: P,
								children: f,
								disabled: u,
								native: p,
								onClick: T,
								disableA11y: U,
								disableStyles: H,
								className: K,
								internalClassName: W,
								icon: v,
								lang: F,
								treePath: g,
								style: $,
								styleScript: J,
								themeStyleScript: Q,
								...d
							} = _,
							{ overrideElement: q, shouldRenderDefault: nt } = (0, z._)('button', _);
						if (!nt) return q;
						const st = { icon: { internalClassName: 'ss__button__icon', ...(0, r.s)({ disableStyles: H }), theme: _?.theme, treePath: g } },
							j = {
								...(0, x.Z)(_, A),
								className: l()('ss__button', { 'ss__button--native': p, 'ss__button--disabled': u }, K, W),
								disabled: u,
								onClick: (I) => !u && T && T(I),
								...d,
							},
							w = { ref: (I) => (0, R.iy)(I) },
							et = {},
							tt = X()(et, F || {}),
							k = (0, B.u)(tt, {}),
							h = !!d.dangerouslySetInnerHTML;
						return P || f || v || F?.button?.value || h
							? (0, s.Y)(e._, {
									children: p
										? (0, s.FD)('button', {
												...j,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...k.button?.all,
														children: [(0, D.Y)(P, { treePath: g }), (0, D.Y)(f, { treePath: g })],
													}),
													v && (0, s.Y)(L.I, { ...st.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  })
										: (0, s.FD)('div', {
												...(U ? {} : w),
												role: 'button',
												'aria-disabled': u,
												...j,
												...k.button?.attributes,
												children: [
													P || f || k.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...k.button?.value,
																children: [(0, D.Y)(P, { treePath: g }), (0, D.Y)(f, { treePath: g })],
														  })
														: void 0,
													v && (0, s.Y)(L.I, { ...st.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(G, E, t) {
				t.d(E, { m: () => X });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/compat/dist/compat.module.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					e = t.n(c),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					Y = t('./components/src/providers/cache.tsx'),
					R = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = t('./components/src/providers/treePath.tsx'),
					r = t('./components/src/hooks/useClickOutside.tsx'),
					C = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					x = t('./components/src/utilities/cloneWithProps.tsx'),
					L = t('./components/src/utilities/mergeProps.ts'),
					B = t('./components/src/utilities/mergeStyles.ts'),
					z = t('./components/src/hooks/useA11y.tsx');
				const V = ({ disableOverlay: A }) =>
						(0, l.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: A ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${A ? 'default' : 'pointer'}` },
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
					X = (0, i.PA)((A) => {
						const Z = (0, R.u)(),
							M = { startOpen: !1, disableA11y: !1, treePath: (0, D.LU)() },
							y = (0, L.v6)('dropdown', Z, M, A),
							{
								button: b,
								content: _,
								children: P,
								disabled: f,
								open: u,
								toggleOnHover: p,
								onMouseEnter: T,
								onMouseLeave: U,
								disableClick: H,
								onClick: K,
								onToggle: W,
								focusTrapContent: v,
								startOpen: F,
								disableClickOutside: g,
								disableA11y: $,
								className: J,
								internalClassName: Q,
								treePath: d,
								usePortal: q,
							} = y,
							{ overrideElement: nt, shouldRenderDefault: st } = (0, C._)('dropdown', y);
						if (!st) return nt;
						let O, j;
						const w = u === void 0;
						w ? ([O, j] = (0, n.J0)(F)) : (O = u);
						const [et, tt] = (0, n.J0)(!1),
							k = (0, n.li)(null),
							h = (0, n.li)(null),
							[I, it] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let ot;
						g ||
							(ot = (0, r.L)((o) => {
								(q && h.current && h.current.contains(o.target)) || (O && (f || (w && j && j(!1), W && W(o, !1))));
							})),
							(0, n.vJ)(() => {
								if (q && O) {
									const o = () => {
										if (k.current) {
											const N = k.current.getBoundingClientRect();
											it({ top: N.bottom + window.scrollY, left: N.left + window.scrollX, width: N.width });
										}
									};
									return (
										o(),
										window.addEventListener('resize', o),
										window.addEventListener('scroll', o, !0),
										() => {
											window.removeEventListener('resize', o), window.removeEventListener('scroll', o, !0);
										}
									);
								}
							}, [q, O]);
						const S = (o, N) => {
								w &&
									j &&
									j((_t) => {
										const ct = N ?? !_t;
										return ct != _t && W && W(o, ct), ct;
									});
							},
							rt = (0, B.Z)(y, V),
							lt = {
								onMouseEnter:
									(p || T) &&
									((o) => {
										et || (p && !f && S(o, !0), T && T(o));
									}),
								onMouseLeave:
									(p || U) &&
									((o) => {
										et || (p && !f && S(o, !1), U && U(o));
									}),
							},
							at = (0, s.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (o) => {
									(h.current = o),
										$ ||
											(0, z.iy)(o, 0, !!v, (N) => {
												w ? S(N) : K && K(N);
											});
								},
								children: [(0, x.Y)(_, { open: O, toggleOpen: S, treePath: d }), (0, x.Y)(P, { open: O, toggleOpen: S, treePath: d })],
							});
						return (0, s.Y)(Y._, {
							children: (0, s.FD)('div', {
								...rt,
								className: e()('ss__dropdown', { 'ss__dropdown--open': O }, J, Q),
								ref: ot,
								...lt,
								children: [
									(0, s.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (o) => {
											(k.current = o), $ || (0, z.iy)(o);
										},
										'aria-expanded': O,
										role: 'button',
										onTouchStart: () => {
											tt(!0);
										},
										onClick: (o) => {
											!f && !H && (S(o), K && K(o)),
												setTimeout(() => {
													tt(!1);
												}, 300);
										},
										children: (0, x.Y)(b, { open: O, toggleOpen: S, treePath: d }),
									}),
									q
										? (_ || P) &&
										  (0, a.createPortal)(
												(0, s.Y)('div', {
													className: e()('ss__dropdown__portal', J, Q, { 'ss__dropdown__portal--open': O }),
													css: rt.css,
													style: { position: 'absolute', top: I.top, left: I.left, width: I.width, zIndex: 9999, pointerEvents: O ? 'auto' : 'none' },
													children: at,
												}),
												document.body
										  )
										: (_ || P) && at,
								],
							}),
						});
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(G, E, t) {
				t.d(E, { _: () => L, t: () => C });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = t('./components/src/providers/treePath.tsx'),
					R = t('./components/src/utilities/mergeProps.ts'),
					D = t('./components/src/utilities/mergeStyles.ts'),
					r = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const C = '//cdn.athoscommerce.net/snap/images/fallback.png',
					x = ({ height: B }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: B || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function L(B) {
					const z = (0, i.u)(),
						V = (0, Y.LU)(),
						X = { fallback: C, lazy: !0, treePath: V },
						A = (0, R.v6)('image', z, X, B),
						{
							alt: Z,
							src: m,
							fallback: M,
							title: y,
							hoverSrc: b,
							lazy: _,
							onMouseOver: P,
							onMouseOut: f,
							onError: u,
							onLoad: p,
							onClick: T,
							className: U,
							internalClassName: H,
						} = A,
						{ overrideElement: K, shouldRenderDefault: W } = (0, r._)('image', A);
					if (!W) return K;
					const [v, F] = (0, a.J0)(!1),
						[g, $] = (0, a.J0)(!1),
						J = (0, a.li)('');
					(0, a.vJ)(() => {
						J.current = m;
					}),
						J.current && J.current != m && F(!1);
					const Q = (0, D.Z)(A, x);
					return (0, s.Y)(e._, {
						children: (0, s.Y)('div', {
							...Q,
							className: c()('ss__image', { 'ss__image--hidden': !v }, U, H),
							children: (0, s.Y)('img', {
								src: (g ? b : m) || M,
								alt: Z,
								title: y || Z,
								loading: _ ? 'lazy' : void 0,
								onLoad: (d) => {
									F(!0), p && p(d);
								},
								onClick: (d) => T && T(d),
								onError: (d) => {
									(d.target.src = M || ''), u && u(d);
								},
								onMouseOver: (d) => {
									b && $(!0), P && P(d);
								},
								onMouseOut: (d) => {
									b && $(!1), f && f(d);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(G, E, t) {
				t.d(E, { S: () => Z });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/utilities/defined.ts'),
					Y = t('./components/src/utilities/mergeProps.ts'),
					R = t('./components/src/utilities/mergeStyles.ts'),
					D = t('./components/src/providers/cache.tsx'),
					r = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = t('./components/src/providers/treePath.tsx'),
					x = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					L = t('./components/src/hooks/useA11y.tsx'),
					B = t('./components/src/hooks/useLang.tsx'),
					z = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					V = t('../../node_modules/deepmerge/dist/cjs.js'),
					X = t.n(V);
				const A = ({ size: m, color: M, theme: y, native: b }) => {
						const _ = isNaN(Number(m)) ? m : `${m}px`;
						return b
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: _,
									width: _,
									border: `1px solid ${M || y?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${m} - 30%)`, height: `calc(${m} - 30%)` },
							  });
					},
					Z = (0, e.PA)((m) => {
						const M = (0, r.u)(),
							b = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, C.LU)() },
							_ = (0, Y.v6)('checkbox', M, b, m),
							{
								checked: P,
								color: f,
								disabled: u,
								icon: p,
								iconColor: T,
								onClick: U,
								size: H,
								startChecked: K,
								native: W,
								disableA11y: v,
								disableStyles: F,
								className: g,
								internalClassName: $,
								theme: J,
								treePath: Q,
								lang: d,
								style: q,
								styleScript: nt,
								themeStyleScript: st,
								name: O,
								...j
							} = _,
							{ overrideElement: w, shouldRenderDefault: et } = (0, z._)('checkbox', _);
						if (!et) return w;
						const tt = isNaN(Number(H)) ? H : `${H}px`,
							k = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: T || f || J?.variables?.colors?.primary, disableStyles: F, icon: p, size: tt && `calc(${tt} - 30%)` }),
									theme: _.theme,
									treePath: Q,
								},
							};
						let h, I;
						const it = P === void 0;
						it ? ([h, I] = (0, a.J0)(K)) : (h = P);
						const ot = (o) => {
								u || (it && I && I((N) => !N), U && U(o));
							},
							S = (0, R.Z)(_, A),
							rt = { checkbox: {} },
							lt = X()(rt, d || {}),
							at = (0, B.u)(lt, { checkedState: h, disabled: u });
						return (0, s.Y)(D._, {
							children: W
								? (0, s.Y)('input', {
										...S,
										className: c()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': h }, g, $),
										type: 'checkbox',
										'aria-checked': h,
										onClick: (o) => ot(o),
										disabled: u,
										checked: h,
								  })
								: (0, s.Y)('span', {
										...S,
										className: c()('ss__checkbox', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': h }, g, $),
										onClick: (o) => ot(o),
										ref: (o) => (v ? null : (0, L.iy)(o)),
										'aria-disabled': u,
										role: 'checkbox',
										'aria-checked': h,
										...j,
										...at.checkbox.all,
										children: h
											? (0, s.Y)(x.I, { ...k.icon, ...(typeof p == 'string' ? { icon: p } : p) })
											: (0, s.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(G, E, t) {
				t.d(E, { DH: () => l, aZ: () => n, iy: () => c });
				const s = 9,
					a = 27,
					n = 'ss-a11y',
					l =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(e, i, Y, R) {
					const D = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${D}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = D),
							(r.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(r);
					}
					e &&
						!e.attributes?.[n] &&
						(e.setAttribute(n, !0),
						e.setAttribute('tabIndex', `${i || 0}`),
						e.addEventListener('keydown', (r) => {
							(r.code === 'Space' || r.code === 'Enter') && e.click();
						}),
						Y &&
							e.addEventListener('keydown', function (r) {
								const C = e.querySelectorAll(l),
									x = C[0],
									L = C[C.length - 1];
								if (r.keyCode == a) {
									e.focus(), R && R(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === s) &&
									(r.shiftKey
										? document.activeElement === x && (L.focus(), r.preventDefault())
										: document.activeElement === L && (x.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(G, E, t) {
				t.d(E, { L: () => a });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(n) {
					const l = (0, s.li)(),
						c = (0, s.li)();
					return (
						(0, s.vJ)(() => {
							l.current = n;
						}),
						(0, s.vJ)(() => {
							return document.addEventListener('click', e), () => document.removeEventListener('click', e);
							function e(i) {
								c.current && l.current && !c.current.contains(i.target) && l.current(i);
							}
						}, []),
						c
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(G, E, t) {
				t.d(E, { u: () => s });
				const s = (a, n) => {
					const l = {};
					return (
						Object.keys(a).forEach((c) => {
							const e = a && a[c],
								i = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((i.attributes = { 'ss-lang': c }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = e.attributes['aria-label'](n))
											: (i.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](n))
											: (i.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (i.attributes.title = e.attributes.title(n))
											: (i.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (i.attributes.alt = e.attributes.alt(n)) : (i.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = e.attributes.placeholder(n))
											: (i.attributes.placeholder = e.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': c })),
								(l[c] = i);
						}),
						l
					);
				};
			},
			'./components/src/utilities/defined.ts'(G, E, t) {
				t.d(E, { s: () => s });
				function s(a) {
					const n = {};
					return (
						Object.keys(a).map((l) => {
							a[l] !== void 0 && (n[l] = a[l]);
						}),
						n
					);
				}
			},
		},
	]);
})();
