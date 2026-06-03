'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7642],
		{
			'./components/src/components/Atoms/Button/Button.tsx'(V, p, t) {
				t.d(p, { $: () => H });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					c = t.n(n),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = t('./components/src/providers/snap.tsx'),
					B = t('./components/src/providers/treePath.tsx'),
					R = t('./components/src/hooks/useA11y.tsx'),
					r = t('./components/src/utilities/cloneWithProps.tsx'),
					L = t('./components/src/utilities/defined.ts'),
					g = t('./components/src/utilities/mergeProps.ts'),
					C = t('./components/src/utilities/mergeStyles.ts'),
					z = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					U = t('./components/src/hooks/useLang.tsx'),
					Z = t('./components/src/hooks/useComponent.tsx'),
					X = t('../../node_modules/deepmerge/dist/cjs.js'),
					Q = t.n(X);
				const K = ({ native: m, color: M, backgroundColor: x, borderColor: y, theme: v }) =>
						m
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: M || v?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: x || '#fff',
									border: `1px solid ${y || M || v?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					H = (0, l.PA)((m) => {
						const M = (0, i.u)(),
							x = (0, Y.uk)(),
							v = { disableA11y: !1, treePath: (0, B.LU)() },
							P = (0, g.v6)('button', M, v, m),
							{
								content: h,
								children: O,
								disabled: u,
								native: f,
								onClick: T,
								disableA11y: W,
								disableStyles: F,
								className: I,
								internalClassName: j,
								icon: E,
								lang: G,
								treePath: b,
								customComponent: A,
								style: w,
								styleScript: d,
								themeStyleScript: st,
								...$
							} = P;
						if (A) {
							const _ = (0, Z.x)(x?.templates?.library.import.component.button || {}, A);
							if (_) return (0, o.Y)(_, { ...P });
						}
						const ot = { icon: { internalClassName: 'ss__button__icon', ...(0, L.s)({ disableStyles: F }), theme: P?.theme, treePath: b } },
							J = {
								...(0, C.Z)(P, K),
								className: c()('ss__button', { 'ss__button--native': f, 'ss__button--disabled': u }, I, j),
								disabled: u,
								onClick: (_) => !u && T && T(_),
								...$,
							},
							q = { ref: (_) => (0, R.iy)(_) },
							nt = {},
							tt = Q()(nt, G || {}),
							k = (0, U.u)(tt, {});
						return h || O || E || G?.button?.value
							? (0, o.Y)(e._, {
									children: f
										? (0, o.FD)('button', {
												...J,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...k.button?.all,
														children: [(0, r.Y)(h, { treePath: b }), (0, r.Y)(O, { treePath: b })],
													}),
													E && (0, o.Y)(z.I, { ...ot.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  })
										: (0, o.FD)('div', {
												...(W ? {} : q),
												role: 'button',
												'aria-disabled': u,
												...J,
												...k.button?.attributes,
												children: [
													h || O || k.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...k.button?.value,
																children: [(0, r.Y)(h, { treePath: b }), (0, r.Y)(O, { treePath: b })],
														  })
														: void 0,
													E && (0, o.Y)(z.I, { ...ot.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(V, p, t) {
				t.d(p, { m: () => Q });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/compat/dist/compat.module.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					e = t.n(l),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					Y = t('./components/src/providers/cache.tsx'),
					B = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = t('./components/src/providers/snap.tsx'),
					r = t('./components/src/providers/treePath.tsx'),
					L = t('./components/src/hooks/useClickOutside.tsx'),
					g = t('./components/src/hooks/useComponent.tsx'),
					C = t('./components/src/utilities/cloneWithProps.tsx'),
					z = t('./components/src/utilities/mergeProps.ts'),
					U = t('./components/src/utilities/mergeStyles.ts'),
					Z = t('./components/src/hooks/useA11y.tsx');
				const X = ({ disableOverlay: K }) =>
						(0, c.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: K ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${K ? 'default' : 'pointer'}` },
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
					Q = (0, i.PA)((K) => {
						const H = (0, B.u)(),
							m = (0, R.uk)(),
							x = { startOpen: !1, disableA11y: !1, treePath: (0, r.LU)() },
							y = (0, z.v6)('dropdown', H, x, K),
							{
								button: v,
								content: P,
								children: h,
								disabled: O,
								open: u,
								toggleOnHover: f,
								onMouseEnter: T,
								onMouseLeave: W,
								disableClick: F,
								onClick: I,
								onToggle: j,
								focusTrapContent: E,
								startOpen: G,
								disableClickOutside: b,
								disableA11y: A,
								className: w,
								internalClassName: d,
								treePath: st,
								usePortal: $,
								customComponent: ot,
							} = y;
						if (ot) {
							const s = (0, g.x)(m?.templates?.library.import.component.dropdown || {}, ot);
							if (s) return (0, o.Y)(s, { ...y });
						}
						let D, J;
						const q = u === void 0;
						q ? ([D, J] = (0, n.J0)(G)) : (D = u);
						const [nt, tt] = (0, n.J0)(!1),
							k = (0, n.li)(null),
							_ = (0, n.li)(null),
							[et, rt] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let it;
						b ||
							(it = (0, L.L)((s) => {
								($ && _.current && _.current.contains(s.target)) || (D && (O || (q && J && J(!1), j && j(s, !1))));
							})),
							(0, n.vJ)(() => {
								if ($ && D) {
									const s = () => {
										if (k.current) {
											const N = k.current.getBoundingClientRect();
											rt({ top: N.bottom + window.scrollY, left: N.left + window.scrollX, width: N.width });
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
							}, [$, D]);
						const S = (s, N) => {
								q &&
									J &&
									J((dt) => {
										const _t = N ?? !dt;
										return _t != dt && j && j(s, _t), _t;
									});
							},
							at = (0, U.Z)(y, X),
							lt = {
								onMouseEnter:
									(f || T) &&
									((s) => {
										nt || (f && !O && S(s, !0), T && T(s));
									}),
								onMouseLeave:
									(f || W) &&
									((s) => {
										nt || (f && !O && S(s, !1), W && W(s));
									}),
							},
							ct = (0, o.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (s) => {
									(_.current = s),
										A ||
											(0, Z.iy)(s, 0, !!E, (N) => {
												q ? S(N) : I && I(N);
											});
								},
								children: [(0, C.Y)(P, { open: D, toggleOpen: S, treePath: st }), (0, C.Y)(h, { open: D, toggleOpen: S, treePath: st })],
							});
						return (0, o.Y)(Y._, {
							children: (0, o.FD)('div', {
								...at,
								className: e()('ss__dropdown', { 'ss__dropdown--open': D }, w, d),
								ref: it,
								...lt,
								children: [
									(0, o.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (s) => {
											(k.current = s), A || (0, Z.iy)(s);
										},
										'aria-expanded': D,
										role: 'button',
										onTouchStart: () => {
											tt(!0);
										},
										onClick: (s) => {
											!O && !F && (S(s), I && I(s)),
												setTimeout(() => {
													tt(!1);
												}, 300);
										},
										children: (0, C.Y)(v, { open: D, toggleOpen: S, treePath: st }),
									}),
									$
										? (P || h) &&
										  (0, a.createPortal)(
												(0, o.Y)('div', {
													className: e()('ss__dropdown__portal', w, d, { 'ss__dropdown__portal--open': D }),
													css: at.css,
													style: {
														position: 'absolute',
														top: et.top,
														left: et.left,
														width: et.width,
														zIndex: 9999,
														pointerEvents: D ? 'auto' : 'none',
													},
													children: ct,
												}),
												document.body
										  )
										: (P || h) && ct,
								],
							}),
						});
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(V, p, t) {
				t.d(p, { _: () => z, t: () => g });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					l = t.n(c),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = t('./components/src/providers/snap.tsx'),
					B = t('./components/src/providers/treePath.tsx'),
					R = t('./components/src/utilities/mergeProps.ts'),
					r = t('./components/src/utilities/mergeStyles.ts'),
					L = t('./components/src/hooks/useComponent.tsx');
				const g = '//cdn.athoscommerce.net/snap/images/fallback.png',
					C = ({ height: U }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: U || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function z(U) {
					const Z = (0, i.u)(),
						X = (0, Y.uk)(),
						Q = (0, B.LU)(),
						K = { fallback: g, lazy: !0, treePath: Q },
						H = (0, R.v6)('image', Z, K, U),
						{
							alt: m,
							src: M,
							fallback: x,
							title: y,
							hoverSrc: v,
							lazy: P,
							onMouseOver: h,
							onMouseOut: O,
							onError: u,
							onLoad: f,
							onClick: T,
							className: W,
							internalClassName: F,
							customComponent: I,
						} = H;
					if (I) {
						const d = (0, L.x)(X?.templates?.library.import.component.image || {}, I);
						if (d) return (0, o.Y)(d, { ...H });
					}
					const [j, E] = (0, a.J0)(!1),
						[G, b] = (0, a.J0)(!1),
						A = (0, a.li)('');
					(0, a.vJ)(() => {
						A.current = M;
					}),
						A.current && A.current != M && E(!1);
					const w = (0, r.Z)(H, C);
					return (0, o.Y)(e._, {
						children: (0, o.Y)('div', {
							...w,
							className: l()('ss__image', { 'ss__image--hidden': !j }, W, F),
							children: (0, o.Y)('img', {
								src: (G ? v : M) || x,
								alt: m,
								title: y || m,
								loading: P ? 'lazy' : void 0,
								onLoad: (d) => {
									E(!0), f && f(d);
								},
								onClick: (d) => T && T(d),
								onError: (d) => {
									(d.target.src = x || ''), u && u(d);
								},
								onMouseOver: (d) => {
									v && b(!0), h && h(d);
								},
								onMouseOut: (d) => {
									v && b(!1), O && O(d);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(V, p, t) {
				t.d(p, { S: () => H });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					l = t.n(c),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/utilities/defined.ts'),
					Y = t('./components/src/utilities/mergeProps.ts'),
					B = t('./components/src/utilities/mergeStyles.ts'),
					R = t('./components/src/providers/cache.tsx'),
					r = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = t('./components/src/providers/snap.tsx'),
					g = t('./components/src/providers/treePath.tsx'),
					C = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					z = t('./components/src/hooks/useA11y.tsx'),
					U = t('./components/src/hooks/useLang.tsx'),
					Z = t('./components/src/hooks/useComponent.tsx'),
					X = t('../../node_modules/deepmerge/dist/cjs.js'),
					Q = t.n(X);
				const K = ({ size: m, color: M, theme: x, native: y }) => {
						const v = isNaN(Number(m)) ? m : `${m}px`;
						return y
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: v,
									width: v,
									border: `1px solid ${M || x?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${m} - 30%)`, height: `calc(${m} - 30%)` },
							  });
					},
					H = (0, e.PA)((m) => {
						const M = (0, r.u)(),
							x = (0, L.uk)(),
							v = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, g.LU)() },
							P = (0, Y.v6)('checkbox', M, v, m),
							{
								checked: h,
								color: O,
								disabled: u,
								icon: f,
								iconColor: T,
								onClick: W,
								size: F,
								startChecked: I,
								native: j,
								disableA11y: E,
								disableStyles: G,
								className: b,
								internalClassName: A,
								theme: w,
								treePath: d,
								lang: st,
								customComponent: $,
								style: ot,
								styleScript: D,
								themeStyleScript: J,
								name: q,
								...nt
							} = P;
						if ($) {
							const s = (0, Z.x)(x?.templates?.library.import.component.checkbox || {}, $);
							if (s) return (0, o.Y)(s, { ...P });
						}
						const tt = isNaN(Number(F)) ? F : `${F}px`,
							k = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: T || O || w?.variables?.colors?.primary, disableStyles: G, icon: f, size: tt && `calc(${tt} - 30%)` }),
									theme: P.theme,
									treePath: d,
								},
							};
						let _, et;
						const rt = h === void 0;
						rt ? ([_, et] = (0, a.J0)(I)) : (_ = h);
						const it = (s) => {
								u || (rt && et && et((N) => !N), W && W(s));
							},
							S = (0, B.Z)(P, K),
							at = { checkbox: {} },
							lt = Q()(at, st || {}),
							ct = (0, U.u)(lt, { checkedState: _, disabled: u });
						return (0, o.Y)(R._, {
							children: j
								? (0, o.Y)('input', {
										...S,
										className: l()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': _ }, b, A),
										type: 'checkbox',
										'aria-checked': _,
										onClick: (s) => it(s),
										disabled: u,
										checked: _,
								  })
								: (0, o.Y)('span', {
										...S,
										className: l()('ss__checkbox', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': _ }, b, A),
										onClick: (s) => it(s),
										ref: (s) => (E ? null : (0, z.iy)(s)),
										'aria-disabled': u,
										role: 'checkbox',
										'aria-checked': _,
										...nt,
										...ct.checkbox.all,
										children: _
											? (0, o.Y)(C.I, { ...k.icon, ...(typeof f == 'string' ? { icon: f } : f) })
											: (0, o.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(V, p, t) {
				t.d(p, { DH: () => c, aZ: () => n, iy: () => l });
				const o = 9,
					a = 27,
					n = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, i, Y, B) {
					const R = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${R}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = R),
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
								const L = e.querySelectorAll(c),
									g = L[0],
									C = L[L.length - 1];
								if (r.keyCode == a) {
									e.focus(), B && B(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === o) &&
									(r.shiftKey
										? document.activeElement === g && (C.focus(), r.preventDefault())
										: document.activeElement === C && (g.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(V, p, t) {
				t.d(p, { L: () => a });
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(n) {
					const c = (0, o.li)(),
						l = (0, o.li)();
					return (
						(0, o.vJ)(() => {
							c.current = n;
						}),
						(0, o.vJ)(() => {
							return document.addEventListener('click', e), () => document.removeEventListener('click', e);
							function e(i) {
								l.current && c.current && !l.current.contains(i.target) && c.current(i);
							}
						}, []),
						l
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(V, p, t) {
				t.d(p, { u: () => o });
				const o = (a, n) => {
					const c = {};
					return (
						Object.keys(a).forEach((l) => {
							const e = a && a[l],
								i = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (i.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (i.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((i.attributes = { 'ss-lang': l }),
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
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': l })),
								(c[l] = i);
						}),
						c
					);
				};
			},
			'./components/src/utilities/defined.ts'(V, p, t) {
				t.d(p, { s: () => o });
				function o(a) {
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
