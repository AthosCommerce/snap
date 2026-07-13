'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7642],
		{
			'./components/src/components/Atoms/Button/Button.tsx'(X, m, t) {
				t.d(m, { $: () => F });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					c = t.n(n),
					_ = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					H = t('./components/src/providers/treePath.tsx'),
					B = t('./components/src/hooks/useA11y.tsx'),
					D = t('./components/src/utilities/cloneWithProps.tsx'),
					r = t('./components/src/utilities/defined.ts'),
					A = t('./components/src/utilities/mergeProps.ts'),
					M = t('./components/src/utilities/mergeStyles.ts'),
					g = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					w = t('./components/src/hooks/useLang.tsx'),
					L = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Q = t('../../node_modules/deepmerge/dist/cjs.js'),
					q = t.n(Q);
				const U = ({ native: E, color: h, backgroundColor: x, borderColor: T, theme: l }) =>
						E
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: h || l?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: x || '#fff',
									border: `1px solid ${T || h || l?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					F = (0, _.PA)((E) => {
						const h = (0, i.u)(),
							T = { disableA11y: !1, treePath: (0, H.LU)() },
							l = (0, A.v6)('button', h, T, E),
							{
								content: b,
								children: f,
								disabled: u,
								native: p,
								onClick: y,
								disableA11y: I,
								disableStyles: $,
								className: K,
								internalClassName: W,
								icon: v,
								lang: z,
								treePath: C,
								style: Z,
								styleScript: G,
								themeStyleScript: J,
								...j
							} = l,
							{ overrideElement: d, shouldRenderDefault: nt } = (0, L._)('button', l);
						if (!nt) return d;
						const st = { icon: { internalClassName: 'ss__button__icon', ...(0, r.s)({ disableStyles: $ }), theme: l?.theme, treePath: C } },
							k = {
								...(0, M.Z)(l, U),
								className: c()('ss__button', { 'ss__button--native': p, 'ss__button--disabled': u }, K, W),
								disabled: u,
								onClick: (R) => !u && y && y(R),
								...j,
							},
							V = { ref: (R) => (0, B.iy)(R) },
							et = {},
							tt = q()(et, z || {}),
							S = (0, w.u)(tt, {}),
							P = !!j.dangerouslySetInnerHTML;
						return b || f || v || z?.button?.value || P
							? (0, s.Y)(e._, {
									children: p
										? (0, s.FD)('button', {
												...k,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...S.button?.all,
														children: [(0, D.Y)(b, { treePath: C }), (0, D.Y)(f, { treePath: C })],
													}),
													v && (0, s.Y)(g.I, { ...st.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  })
										: (0, s.FD)('div', {
												...(I ? {} : V),
												role: 'button',
												'aria-disabled': u,
												...k,
												...S.button?.attributes,
												children: [
													b || f || S.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...S.button?.value,
																children: [(0, D.Y)(b, { treePath: C }), (0, D.Y)(f, { treePath: C })],
														  })
														: void 0,
													v && (0, s.Y)(g.I, { ...st.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(X, m, t) {
				t.d(m, { m: () => q });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/compat/dist/compat.module.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = t('../../node_modules/classnames/index.js'),
					e = t.n(_),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					H = t('./components/src/providers/cache.tsx'),
					B = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = t('./components/src/providers/treePath.tsx'),
					r = t('./components/src/hooks/useClickOutside.tsx'),
					A = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = t('./components/src/utilities/cloneWithProps.tsx'),
					g = t('./components/src/utilities/mergeProps.ts'),
					w = t('./components/src/utilities/mergeStyles.ts'),
					L = t('./components/src/hooks/useA11y.tsx');
				const Q = ({ disableOverlay: U }) =>
						(0, c.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: U ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${U ? 'default' : 'pointer'}` },
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
					q = (0, i.PA)((U) => {
						const F = (0, B.u)(),
							h = { startOpen: !1, disableA11y: !1, treePath: (0, D.LU)() },
							x = (0, g.v6)('dropdown', F, h, U),
							{
								button: T,
								content: l,
								children: b,
								disabled: f,
								open: u,
								toggleOnHover: p,
								onMouseEnter: y,
								onMouseLeave: I,
								disableClick: $,
								onClick: K,
								onToggle: W,
								focusTrapContent: v,
								startOpen: z,
								disableClickOutside: C,
								disableA11y: Z,
								className: G,
								internalClassName: J,
								treePath: j,
								usePortal: d,
							} = x,
							{ overrideElement: nt, shouldRenderDefault: st } = (0, A._)('dropdown', x);
						if (!st) return nt;
						let O, k;
						const V = u === void 0;
						V ? ([O, k] = (0, n.J0)(z)) : (O = u);
						const [et, tt] = (0, n.J0)(!1),
							S = (0, n.li)(null),
							P = (0, n.li)(null),
							[R, it] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let ot;
						C ||
							(ot = (0, r.L)((o) => {
								(d && P.current && P.current.contains(o.target)) || (O && (f || (V && k && k(!1), W && W(o, !1))));
							})),
							(0, n.vJ)(() => {
								if (d && O) {
									const o = () => {
										if (S.current) {
											const Y = S.current.getBoundingClientRect();
											it({ top: Y.bottom + window.scrollY, left: Y.left + window.scrollX, width: Y.width });
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
							}, [d, O]);
						const N = (o, Y) => {
								V &&
									k &&
									k((_t) => {
										const ct = Y ?? !_t;
										return ct != _t && W && W(o, ct), ct;
									});
							},
							rt = (0, w.Z)(x, Q),
							lt = {
								onMouseEnter:
									(p || y) &&
									((o) => {
										et || (p && !f && N(o, !0), y && y(o));
									}),
								onMouseLeave:
									(p || I) &&
									((o) => {
										et || (p && !f && N(o, !1), I && I(o));
									}),
							},
							at = (0, s.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (o) => {
									(P.current = o),
										Z ||
											(0, L.iy)(o, 0, !!v, (Y) => {
												V ? N(Y) : K && K(Y);
											});
								},
								children: [(0, M.Y)(l, { open: O, toggleOpen: N, treePath: j }), (0, M.Y)(b, { open: O, toggleOpen: N, treePath: j })],
							});
						return (0, s.Y)(H._, {
							children: (0, s.FD)('div', {
								...rt,
								className: e()('ss__dropdown', { 'ss__dropdown--open': O }, G, J),
								ref: ot,
								...lt,
								children: [
									(0, s.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (o) => {
											(S.current = o), Z || (0, L.iy)(o);
										},
										'aria-expanded': O,
										role: 'button',
										onTouchStart: () => {
											tt(!0);
										},
										onClick: (o) => {
											!f && !$ && (N(o), K && K(o)),
												setTimeout(() => {
													tt(!1);
												}, 300);
										},
										children: (0, M.Y)(T, { open: O, toggleOpen: N, treePath: j }),
									}),
									d
										? (l || b) &&
										  (0, a.createPortal)(
												(0, s.Y)('div', {
													className: e()('ss__dropdown__portal', G, J, { 'ss__dropdown__portal--open': O }),
													css: rt.css,
													style: { position: 'absolute', top: R.top, left: R.left, width: R.width, zIndex: 9999, pointerEvents: O ? 'auto' : 'none' },
													children: at,
												}),
												document.body
										  )
										: (l || b) && at,
								],
							}),
						});
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(X, m, t) {
				t.d(m, { _: () => w, t: () => M });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					_ = t.n(c),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/providers/cache.tsx'),
					H = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = t('./components/src/providers/treePath.tsx'),
					D = t('./components/src/utilities/mergeProps.ts'),
					r = t('./components/src/utilities/mergeStyles.ts'),
					A = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = '//cdn.athoscommerce.net/snap/images/fallback.png',
					g = ({ height: L }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: L || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					w = (0, e.PA)((L) => {
						const Q = (0, H.u)(),
							q = (0, B.LU)(),
							U = { fallback: M, lazy: !0, treePath: q },
							F = (0, D.v6)('image', Q, U, L),
							{
								alt: E,
								src: h,
								fallback: x,
								title: T,
								hoverSrc: l,
								lazy: b,
								onMouseOver: f,
								onMouseOut: u,
								onError: p,
								onLoad: y,
								onClick: I,
								className: $,
								internalClassName: K,
							} = F,
							{ overrideElement: W, shouldRenderDefault: v } = (0, A._)('image', F);
						if (!v) return W;
						const [z, C] = (0, a.J0)(!1),
							[Z, G] = (0, a.J0)(!1),
							J = (0, a.li)('');
						(0, a.vJ)(() => {
							J.current = h;
						}),
							J.current && J.current != h && C(!1);
						const j = (0, r.Z)(F, g);
						return (0, s.Y)(i._, {
							children: (0, s.Y)('div', {
								...j,
								className: _()('ss__image', { 'ss__image--hidden': !z }, $, K),
								children: (0, s.Y)('img', {
									src: (Z ? l : h) || x,
									alt: E,
									title: T || E,
									loading: b ? 'lazy' : void 0,
									onLoad: (d) => {
										C(!0), y && y(d);
									},
									onClick: (d) => I && I(d),
									onError: (d) => {
										(d.target.src = x || ''), p && p(d);
									},
									onMouseOver: (d) => {
										l && G(!0), f && f(d);
									},
									onMouseOut: (d) => {
										l && G(!1), u && u(d);
									},
								}),
							}),
						});
					});
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(X, m, t) {
				t.d(m, { S: () => F });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					_ = t.n(c),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/utilities/defined.ts'),
					H = t('./components/src/utilities/mergeProps.ts'),
					B = t('./components/src/utilities/mergeStyles.ts'),
					D = t('./components/src/providers/cache.tsx'),
					r = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = t('./components/src/providers/treePath.tsx'),
					M = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = t('./components/src/hooks/useA11y.tsx'),
					w = t('./components/src/hooks/useLang.tsx'),
					L = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Q = t('../../node_modules/deepmerge/dist/cjs.js'),
					q = t.n(Q);
				const U = ({ size: E, color: h, theme: x, native: T }) => {
						const l = isNaN(Number(E)) ? E : `${E}px`;
						return T
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: l,
									width: l,
									border: `1px solid ${h || x?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${E} - 30%)`, height: `calc(${E} - 30%)` },
							  });
					},
					F = (0, e.PA)((E) => {
						const h = (0, r.u)(),
							T = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, A.LU)() },
							l = (0, H.v6)('checkbox', h, T, E),
							{
								checked: b,
								color: f,
								disabled: u,
								icon: p,
								iconColor: y,
								onClick: I,
								size: $,
								startChecked: K,
								native: W,
								disableA11y: v,
								disableStyles: z,
								className: C,
								internalClassName: Z,
								theme: G,
								treePath: J,
								lang: j,
								style: d,
								styleScript: nt,
								themeStyleScript: st,
								name: O,
								...k
							} = l,
							{ overrideElement: V, shouldRenderDefault: et } = (0, L._)('checkbox', l);
						if (!et) return V;
						const tt = isNaN(Number($)) ? $ : `${$}px`,
							S = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: y || f || G?.variables?.colors?.primary, disableStyles: z, icon: p, size: tt && `calc(${tt} - 30%)` }),
									theme: l.theme,
									treePath: J,
								},
							};
						let P, R;
						const it = b === void 0;
						it ? ([P, R] = (0, a.J0)(K)) : (P = b);
						const ot = (o) => {
								u || (it && R && R((Y) => !Y), I && I(o));
							},
							N = (0, B.Z)(l, U),
							rt = { checkbox: {} },
							lt = q()(rt, j || {}),
							at = (0, w.u)(lt, { checkedState: P, disabled: u });
						return (0, s.Y)(D._, {
							children: W
								? (0, s.Y)('input', {
										...N,
										className: _()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': P }, C, Z),
										type: 'checkbox',
										'aria-checked': P,
										onClick: (o) => ot(o),
										disabled: u,
										checked: P,
								  })
								: (0, s.Y)('span', {
										...N,
										className: _()('ss__checkbox', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': P }, C, Z),
										onClick: (o) => ot(o),
										ref: (o) => (v ? null : (0, g.iy)(o)),
										'aria-disabled': u,
										role: 'checkbox',
										'aria-checked': P,
										...k,
										...at.checkbox.all,
										children: P
											? (0, s.Y)(M.I, { ...S.icon, ...(typeof p == 'string' ? { icon: p } : p) })
											: (0, s.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(X, m, t) {
				t.d(m, { DH: () => c, aZ: () => n, iy: () => _ });
				const s = 9,
					a = 27,
					n = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function _(e, i, H, B) {
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
						H &&
							e.addEventListener('keydown', function (r) {
								const A = e.querySelectorAll(c),
									M = A[0],
									g = A[A.length - 1];
								if (r.keyCode == a) {
									e.focus(), B && B(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === s) &&
									(r.shiftKey
										? document.activeElement === M && (g.focus(), r.preventDefault())
										: document.activeElement === g && (M.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(X, m, t) {
				t.d(m, { L: () => a });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(n) {
					const c = (0, s.li)(),
						_ = (0, s.li)();
					return (
						(0, s.vJ)(() => {
							c.current = n;
						}),
						(0, s.vJ)(() => {
							return document.addEventListener('click', e), () => document.removeEventListener('click', e);
							function e(i) {
								_.current && c.current && !_.current.contains(i.target) && c.current(i);
							}
						}, []),
						_
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(X, m, t) {
				t.d(m, { u: () => s });
				const s = (a, n) => {
					const c = {};
					return (
						Object.keys(a).forEach((_) => {
							const e = a && a[_],
								i = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (i.value = { 'ss-lang': _, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (i.value = { 'ss-lang': _, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((i.attributes = { 'ss-lang': _ }),
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
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': _ })),
								(c[_] = i);
						}),
						c
					);
				};
			},
			'./components/src/utilities/defined.ts'(X, m, t) {
				t.d(m, { s: () => s });
				function s(a) {
					const n = {};
					return (
						Object.keys(a).map((c) => {
							a[c] !== void 0 && (n[c] = a[c]);
						}),
						n
					);
				}
			},
		},
	]);
})();
