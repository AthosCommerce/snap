'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5379],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(Y, d, t) {
				t.d(d, { P: () => s });
				const s = (r) => r.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(Y, d, t) {
				t.d(d, { p: () => s });
				function s(r) {
					if (typeof r != 'string') return r;
					let n = r.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Atoms/Button/Button.tsx'(Y, d, t) {
				t.d(d, { $: () => F });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					l = t.n(n),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					H = t('./components/src/providers/snap.tsx'),
					B = t('./components/src/providers/treePath.tsx'),
					R = t('./components/src/hooks/useA11y.tsx'),
					a = t('./components/src/utilities/cloneWithProps.tsx'),
					L = t('./components/src/utilities/defined.ts'),
					g = t('./components/src/utilities/mergeProps.ts'),
					C = t('./components/src/utilities/mergeStyles.ts'),
					Z = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					U = t('./components/src/hooks/useLang.tsx'),
					w = t('./components/src/hooks/useComponent.tsx'),
					V = t('../../node_modules/deepmerge/dist/cjs.js'),
					X = t.n(V);
				const K = ({ native: E, color: M, backgroundColor: x, borderColor: T, theme: v }) =>
						E
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: M || v?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: x || '#fff',
									border: `1px solid ${T || M || v?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					F = (0, c.PA)((E) => {
						const M = (0, i.u)(),
							x = (0, H.uk)(),
							v = { disableA11y: !1, treePath: (0, B.LU)() },
							P = (0, g.v6)('button', M, v, E),
							{
								content: h,
								children: O,
								disabled: u,
								native: f,
								onClick: y,
								disableA11y: W,
								disableStyles: $,
								className: I,
								internalClassName: j,
								icon: p,
								lang: G,
								treePath: b,
								customComponent: A,
								style: Q,
								styleScript: m,
								themeStyleScript: st,
								...z
							} = P;
						if (A) {
							const _ = (0, w.x)(x?.templates?.library.import.component.button || {}, A);
							if (_) return (0, s.Y)(_, { ...P });
						}
						const ot = { icon: { internalClassName: 'ss__button__icon', ...(0, L.s)({ disableStyles: $ }), theme: P?.theme, treePath: b } },
							J = {
								...(0, C.Z)(P, K),
								className: l()('ss__button', { 'ss__button--native': f, 'ss__button--disabled': u }, I, j),
								disabled: u,
								onClick: (_) => !u && y && y(_),
								...z,
							},
							q = { ref: (_) => (0, R.iy)(_) },
							nt = {},
							tt = X()(nt, G || {}),
							k = (0, U.u)(tt, {});
						return h || O || p || G?.button?.value
							? (0, s.Y)(e._, {
									children: f
										? (0, s.FD)('button', {
												...J,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...k.button?.all,
														children: [(0, a.Y)(h, { treePath: b }), (0, a.Y)(O, { treePath: b })],
													}),
													p && (0, s.Y)(Z.I, { ...ot.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  })
										: (0, s.FD)('div', {
												...(W ? {} : q),
												role: 'button',
												'aria-disabled': u,
												...J,
												...k.button?.attributes,
												children: [
													h || O || k.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...k.button?.value,
																children: [(0, a.Y)(h, { treePath: b }), (0, a.Y)(O, { treePath: b })],
														  })
														: void 0,
													p && (0, s.Y)(Z.I, { ...ot.icon, ...(typeof p == 'string' ? { icon: p } : p) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(Y, d, t) {
				t.d(d, { m: () => X });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/compat/dist/compat.module.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					e = t.n(c),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					H = t('./components/src/providers/cache.tsx'),
					B = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = t('./components/src/providers/snap.tsx'),
					a = t('./components/src/providers/treePath.tsx'),
					L = t('./components/src/hooks/useClickOutside.tsx'),
					g = t('./components/src/hooks/useComponent.tsx'),
					C = t('./components/src/utilities/cloneWithProps.tsx'),
					Z = t('./components/src/utilities/mergeProps.ts'),
					U = t('./components/src/utilities/mergeStyles.ts'),
					w = t('./components/src/hooks/useA11y.tsx');
				const V = ({ disableOverlay: K }) =>
						(0, l.AH)({
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
					X = (0, i.PA)((K) => {
						const F = (0, B.u)(),
							E = (0, R.uk)(),
							x = { startOpen: !1, disableA11y: !1, treePath: (0, a.LU)() },
							T = (0, Z.v6)('dropdown', F, x, K),
							{
								button: v,
								content: P,
								children: h,
								disabled: O,
								open: u,
								toggleOnHover: f,
								onMouseEnter: y,
								onMouseLeave: W,
								disableClick: $,
								onClick: I,
								onToggle: j,
								focusTrapContent: p,
								startOpen: G,
								disableClickOutside: b,
								disableA11y: A,
								className: Q,
								internalClassName: m,
								treePath: st,
								usePortal: z,
								customComponent: ot,
							} = T;
						if (ot) {
							const o = (0, g.x)(E?.templates?.library.import.component.dropdown || {}, ot);
							if (o) return (0, s.Y)(o, { ...T });
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
							(it = (0, L.L)((o) => {
								(z && _.current && _.current.contains(o.target)) || (D && (O || (q && J && J(!1), j && j(o, !1))));
							})),
							(0, n.vJ)(() => {
								if (z && D) {
									const o = () => {
										if (k.current) {
											const N = k.current.getBoundingClientRect();
											rt({ top: N.bottom + window.scrollY, left: N.left + window.scrollX, width: N.width });
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
							}, [z, D]);
						const S = (o, N) => {
								q &&
									J &&
									J((dt) => {
										const _t = N ?? !dt;
										return _t != dt && j && j(o, _t), _t;
									});
							},
							at = (0, U.Z)(T, V),
							ct = {
								onMouseEnter:
									(f || y) &&
									((o) => {
										nt || (f && !O && S(o, !0), y && y(o));
									}),
								onMouseLeave:
									(f || W) &&
									((o) => {
										nt || (f && !O && S(o, !1), W && W(o));
									}),
							},
							lt = (0, s.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (o) => {
									(_.current = o),
										A ||
											(0, w.iy)(o, 0, !!p, (N) => {
												q ? S(N) : I && I(N);
											});
								},
								children: [(0, C.Y)(P, { open: D, toggleOpen: S, treePath: st }), (0, C.Y)(h, { open: D, toggleOpen: S, treePath: st })],
							});
						return (0, s.Y)(H._, {
							children: (0, s.FD)('div', {
								...at,
								className: e()('ss__dropdown', { 'ss__dropdown--open': D }, Q, m),
								ref: it,
								...ct,
								children: [
									(0, s.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (o) => {
											(k.current = o), A || (0, w.iy)(o);
										},
										'aria-expanded': D,
										role: 'button',
										onTouchStart: () => {
											tt(!0);
										},
										onClick: (o) => {
											!O && !$ && (S(o), I && I(o)),
												setTimeout(() => {
													tt(!1);
												}, 300);
										},
										children: (0, C.Y)(v, { open: D, toggleOpen: S, treePath: st }),
									}),
									z
										? (P || h) &&
										  (0, r.createPortal)(
												(0, s.Y)('div', {
													className: e()('ss__dropdown__portal', Q, m, { 'ss__dropdown__portal--open': D }),
													css: at.css,
													style: {
														position: 'absolute',
														top: et.top,
														left: et.left,
														width: et.width,
														zIndex: 9999,
														pointerEvents: D ? 'auto' : 'none',
													},
													children: lt,
												}),
												document.body
										  )
										: (P || h) && lt,
								],
							}),
						});
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(Y, d, t) {
				t.d(d, { _: () => Z, t: () => g });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					H = t('./components/src/providers/snap.tsx'),
					B = t('./components/src/providers/treePath.tsx'),
					R = t('./components/src/utilities/mergeProps.ts'),
					a = t('./components/src/utilities/mergeStyles.ts'),
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
				function Z(U) {
					const w = (0, i.u)(),
						V = (0, H.uk)(),
						X = (0, B.LU)(),
						K = { fallback: g, lazy: !0, treePath: X },
						F = (0, R.v6)('image', w, K, U),
						{
							alt: E,
							src: M,
							fallback: x,
							title: T,
							hoverSrc: v,
							lazy: P,
							onMouseOver: h,
							onMouseOut: O,
							onError: u,
							onLoad: f,
							onClick: y,
							className: W,
							internalClassName: $,
							customComponent: I,
						} = F;
					if (I) {
						const m = (0, L.x)(V?.templates?.library.import.component.image || {}, I);
						if (m) return (0, s.Y)(m, { ...F });
					}
					const [j, p] = (0, r.J0)(!1),
						[G, b] = (0, r.J0)(!1),
						A = (0, r.li)('');
					(0, r.vJ)(() => {
						A.current = M;
					}),
						A.current && A.current != M && p(!1);
					const Q = (0, a.Z)(F, C);
					return (0, s.Y)(e._, {
						children: (0, s.Y)('div', {
							...Q,
							className: c()('ss__image', { 'ss__image--hidden': !j }, W, $),
							children: (0, s.Y)('img', {
								src: (G ? v : M) || x,
								alt: E,
								title: T || E,
								loading: P ? 'lazy' : void 0,
								onLoad: (m) => {
									p(!0), f && f(m);
								},
								onClick: (m) => y && y(m),
								onError: (m) => {
									(m.target.src = x || ''), u && u(m);
								},
								onMouseOver: (m) => {
									v && b(!0), h && h(m);
								},
								onMouseOut: (m) => {
									v && b(!1), O && O(m);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(Y, d, t) {
				t.d(d, { S: () => F });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/utilities/defined.ts'),
					H = t('./components/src/utilities/mergeProps.ts'),
					B = t('./components/src/utilities/mergeStyles.ts'),
					R = t('./components/src/providers/cache.tsx'),
					a = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = t('./components/src/providers/snap.tsx'),
					g = t('./components/src/providers/treePath.tsx'),
					C = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					Z = t('./components/src/hooks/useA11y.tsx'),
					U = t('./components/src/hooks/useLang.tsx'),
					w = t('./components/src/hooks/useComponent.tsx'),
					V = t('../../node_modules/deepmerge/dist/cjs.js'),
					X = t.n(V);
				const K = ({ size: E, color: M, theme: x, native: T }) => {
						const v = isNaN(Number(E)) ? E : `${E}px`;
						return T
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: v,
									width: v,
									border: `1px solid ${M || x?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${E} - 30%)`, height: `calc(${E} - 30%)` },
							  });
					},
					F = (0, e.PA)((E) => {
						const M = (0, a.u)(),
							x = (0, L.uk)(),
							v = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, g.LU)() },
							P = (0, H.v6)('checkbox', M, v, E),
							{
								checked: h,
								color: O,
								disabled: u,
								icon: f,
								iconColor: y,
								onClick: W,
								size: $,
								startChecked: I,
								native: j,
								disableA11y: p,
								disableStyles: G,
								className: b,
								internalClassName: A,
								theme: Q,
								treePath: m,
								lang: st,
								customComponent: z,
								style: ot,
								styleScript: D,
								themeStyleScript: J,
								name: q,
								...nt
							} = P;
						if (z) {
							const o = (0, w.x)(x?.templates?.library.import.component.checkbox || {}, z);
							if (o) return (0, s.Y)(o, { ...P });
						}
						const tt = isNaN(Number($)) ? $ : `${$}px`,
							k = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: y || O || Q?.variables?.colors?.primary, disableStyles: G, icon: f, size: tt && `calc(${tt} - 30%)` }),
									theme: P.theme,
									treePath: m,
								},
							};
						let _, et;
						const rt = h === void 0;
						rt ? ([_, et] = (0, r.J0)(I)) : (_ = h);
						const it = (o) => {
								u || (rt && et && et((N) => !N), W && W(o));
							},
							S = (0, B.Z)(P, K),
							at = { checkbox: {} },
							ct = X()(at, st || {}),
							lt = (0, U.u)(ct, { checkedState: _, disabled: u });
						return (0, s.Y)(R._, {
							children: j
								? (0, s.Y)('input', {
										...S,
										className: c()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': _ }, b, A),
										type: 'checkbox',
										'aria-checked': _,
										onClick: (o) => it(o),
										disabled: u,
										checked: _,
								  })
								: (0, s.Y)('span', {
										...S,
										className: c()('ss__checkbox', { 'ss__checkbox--disabled': u, 'ss__checkbox--active': _ }, b, A),
										onClick: (o) => it(o),
										ref: (o) => (p ? null : (0, Z.iy)(o)),
										'aria-disabled': u,
										role: 'checkbox',
										'aria-checked': _,
										...nt,
										...lt.checkbox.all,
										children: _
											? (0, s.Y)(C.I, { ...k.icon, ...(typeof f == 'string' ? { icon: f } : f) })
											: (0, s.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(Y, d, t) {
				t.d(d, { DH: () => l, aZ: () => n, iy: () => c });
				const s = 9,
					r = 27,
					n = 'ss-a11y',
					l =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(e, i, H, B) {
					const R = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${R}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = R),
							(a.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					e &&
						!e.attributes?.[n] &&
						(e.setAttribute(n, !0),
						e.setAttribute('tabIndex', `${i || 0}`),
						e.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && e.click();
						}),
						H &&
							e.addEventListener('keydown', function (a) {
								const L = e.querySelectorAll(l),
									g = L[0],
									C = L[L.length - 1];
								if (a.keyCode == r) {
									e.focus(), B && B(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === s) &&
									(a.shiftKey
										? document.activeElement === g && (C.focus(), a.preventDefault())
										: document.activeElement === C && (g.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(Y, d, t) {
				t.d(d, { L: () => r });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				function r(n) {
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
			'./components/src/hooks/useLang.tsx'(Y, d, t) {
				t.d(d, { u: () => s });
				const s = (r, n) => {
					const l = {};
					return (
						Object.keys(r).forEach((c) => {
							const e = r && r[c],
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
			'./components/src/utilities/defined.ts'(Y, d, t) {
				t.d(d, { s: () => s });
				function s(r) {
					const n = {};
					return (
						Object.keys(r).map((l) => {
							r[l] !== void 0 && (n[l] = r[l]);
						}),
						n
					);
				}
			},
		},
	]);
})();
