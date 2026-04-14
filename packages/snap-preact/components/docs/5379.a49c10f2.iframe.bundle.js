'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5379],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(F, d, t) {
				t.d(d, { P: () => s });
				const s = (r) => r.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(F, d, t) {
				t.d(d, { p: () => s });
				function s(r) {
					if (typeof r != 'string') return r;
					let n = r.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Atoms/Button/Button.tsx'(F, d, t) {
				t.d(d, { $: () => k });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					l = t.n(n),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = t('./components/src/providers/snap.tsx'),
					U = t('./components/src/providers/treePath.tsx'),
					K = t('./components/src/hooks/useA11y.tsx'),
					a = t('./components/src/utilities/cloneWithProps.tsx'),
					T = t('./components/src/utilities/defined.ts'),
					y = t('./components/src/utilities/mergeProps.ts'),
					C = t('./components/src/utilities/mergeStyles.ts'),
					Z = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					W = t('./components/src/hooks/useLang.tsx'),
					w = t('./components/src/hooks/useComponent.tsx'),
					X = t('../../node_modules/deepmerge/dist/cjs.js'),
					Q = t.n(X),
					j = t('../../node_modules/color/index.js'),
					z = t.n(j);
				const O = ({ native: x, color: D, backgroundColor: v, borderColor: M, theme: P }) => {
						const p = new (z())(v || D || P?.variables?.colors?.primary || void 0).lightness(95);
						return x
							? (0, r.AH)({})
							: (0, r.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: D || P?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: v || '#fff',
									border: `1px solid ${M || D || P?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: p.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					k = (0, c.PA)((x) => {
						const D = (0, i.u)(),
							v = (0, $.uk)(),
							P = { disableA11y: !1, treePath: (0, U.LU)() },
							p = (0, y.v6)('button', D, P, x),
							{
								content: m,
								children: u,
								disabled: b,
								native: I,
								onClick: S,
								disableA11y: B,
								disableStyles: N,
								className: G,
								internalClassName: q,
								icon: E,
								lang: A,
								treePath: L,
								customComponent: _,
								style: ot,
								styleScript: V,
								themeStyleScript: rt,
								...f
							} = p;
						if (_) {
							const R = (0, w.x)(v?.templates?.library.import.component.button || {}, _);
							if (R) return (0, s.Y)(R, { ...p });
						}
						const J = { icon: { internalClassName: 'ss__button__icon', ...(0, T.s)({ disableStyles: N }), theme: p?.theme, treePath: L } },
							tt = {
								...(0, C.Z)(p, O),
								className: l()('ss__button', { 'ss__button--native': I, 'ss__button--disabled': b }, G, q),
								disabled: b,
								onClick: (R) => !b && S && S(R),
								...f,
							},
							et = { ref: (R) => (0, K.iy)(R) },
							st = {},
							h = Q()(st, A || {}),
							g = (0, W.u)(h, {});
						return m || u || E || A?.button?.value
							? (0, s.Y)(e._, {
									children: I
										? (0, s.FD)('button', {
												...tt,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...g.button?.all,
														children: [(0, a.Y)(m, { treePath: L }), (0, a.Y)(u, { treePath: L })],
													}),
													E && (0, s.Y)(Z.I, { ...J.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  })
										: (0, s.FD)('div', {
												...(B ? {} : et),
												role: 'button',
												'aria-disabled': b,
												...tt,
												...g.button?.attributes,
												children: [
													m || u || g.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...g.button?.value,
																children: [(0, a.Y)(m, { treePath: L }), (0, a.Y)(u, { treePath: L })],
														  })
														: void 0,
													E && (0, s.Y)(Z.I, { ...J.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(F, d, t) {
				t.d(d, { m: () => Q });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/compat/dist/compat.module.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					e = t.n(c),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					$ = t('./components/src/providers/cache.tsx'),
					U = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = t('./components/src/providers/snap.tsx'),
					a = t('./components/src/providers/treePath.tsx'),
					T = t('./components/src/hooks/useClickOutside.tsx'),
					y = t('./components/src/hooks/useComponent.tsx'),
					C = t('./components/src/utilities/cloneWithProps.tsx'),
					Z = t('./components/src/utilities/mergeProps.ts'),
					W = t('./components/src/utilities/mergeStyles.ts'),
					w = t('./components/src/hooks/useA11y.tsx');
				const X = ({ disableOverlay: j }) =>
						(0, l.AH)({
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
					Q = (0, i.PA)((j) => {
						const z = (0, U.u)(),
							O = (0, K.uk)(),
							x = { startOpen: !1, disableA11y: !1, treePath: (0, a.LU)() },
							D = (0, Z.v6)('dropdown', z, x, j),
							{
								button: v,
								content: M,
								children: P,
								disabled: p,
								open: m,
								toggleOnHover: u,
								onMouseEnter: b,
								onMouseLeave: I,
								disableClick: S,
								onClick: B,
								onToggle: N,
								focusTrapContent: G,
								startOpen: q,
								disableClickOutside: E,
								disableA11y: A,
								className: L,
								internalClassName: _,
								treePath: ot,
								usePortal: V,
								customComponent: rt,
							} = D;
						if (rt) {
							const o = (0, y.x)(O?.templates?.library.import.component.dropdown || {}, rt);
							if (o) return (0, s.Y)(o, { ...D });
						}
						let f, J;
						const nt = m === void 0;
						nt ? ([f, J] = (0, n.J0)(q)) : (f = m);
						const [tt, et] = (0, n.J0)(!1),
							st = (0, n.li)(null),
							h = (0, n.li)(null),
							[g, R] = (0, n.J0)({ top: 0, left: 0, width: 0 });
						let it;
						E ||
							(it = (0, T.L)((o) => {
								(V && h.current && h.current.contains(o.target)) || (f && (p || (nt && J && J(!1), N && N(o, !1))));
							})),
							(0, n.vJ)(() => {
								if (V && f) {
									const o = () => {
										if (st.current) {
											const H = st.current.getBoundingClientRect();
											R({ top: H.bottom + window.scrollY, left: H.left + window.scrollX, width: H.width });
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
							}, [V, f]);
						const Y = (o, H) => {
								nt &&
									J &&
									J((dt) => {
										const _t = H ?? !dt;
										return _t != dt && N && N(o, _t), _t;
									});
							},
							at = (0, W.Z)(D, X),
							ct = {
								onMouseEnter:
									(u || b) &&
									((o) => {
										tt || (u && !p && Y(o, !0), b && b(o));
									}),
								onMouseLeave:
									(u || I) &&
									((o) => {
										tt || (u && !p && Y(o, !1), I && I(o));
									}),
							},
							lt = (0, s.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (o) => {
									(h.current = o),
										A ||
											(0, w.iy)(o, 0, !!G, (H) => {
												nt ? Y(H) : B && B(H);
											});
								},
								children: [(0, C.Y)(M, { open: f, toggleOpen: Y, treePath: ot }), (0, C.Y)(P, { open: f, toggleOpen: Y, treePath: ot })],
							});
						return (0, s.Y)($._, {
							children: (0, s.FD)('div', {
								...at,
								className: e()('ss__dropdown', { 'ss__dropdown--open': f }, L, _),
								ref: it,
								...ct,
								children: [
									(0, s.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (o) => {
											(st.current = o), A || (0, w.iy)(o);
										},
										'aria-expanded': f,
										role: 'button',
										onTouchStart: () => {
											et(!0);
										},
										onClick: (o) => {
											!p && !S && (Y(o), B && B(o)),
												setTimeout(() => {
													et(!1);
												}, 300);
										},
										children: (0, C.Y)(v, { open: f, toggleOpen: Y, treePath: ot }),
									}),
									V
										? f &&
										  (M || P) &&
										  (0, r.createPortal)(
												(0, s.Y)('div', {
													className: e()('ss__dropdown__portal', L, _, { 'ss__dropdown__portal--open': f }),
													css: at.css,
													style: { position: 'absolute', top: g.top, left: g.left, width: g.width, zIndex: 9999 },
													children: lt,
												}),
												document.body
										  )
										: (M || P) && lt,
								],
							}),
						});
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(F, d, t) {
				t.d(d, { _: () => Z, t: () => y });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('./components/src/providers/cache.tsx'),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = t('./components/src/providers/snap.tsx'),
					U = t('./components/src/providers/treePath.tsx'),
					K = t('./components/src/utilities/mergeProps.ts'),
					a = t('./components/src/utilities/mergeStyles.ts'),
					T = t('./components/src/hooks/useComponent.tsx');
				const y = '//cdn.athoscommerce.net/snap/images/fallback.png',
					C = ({ height: W }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: W || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function Z(W) {
					const w = (0, i.u)(),
						X = (0, $.uk)(),
						Q = (0, U.LU)(),
						j = { fallback: y, lazy: !0, treePath: Q },
						z = (0, K.v6)('image', w, j, W),
						{
							alt: O,
							src: k,
							fallback: x,
							title: D,
							hoverSrc: v,
							lazy: M,
							onMouseOver: P,
							onMouseOut: p,
							onError: m,
							onLoad: u,
							onClick: b,
							className: I,
							internalClassName: S,
							customComponent: B,
						} = z;
					if (B) {
						const _ = (0, T.x)(X?.templates?.library.import.component.image || {}, B);
						if (_) return (0, s.Y)(_, { ...z });
					}
					const [N, G] = (0, r.J0)(!1),
						[q, E] = (0, r.J0)(!1),
						A = (0, r.li)('');
					(0, r.vJ)(() => {
						A.current = k;
					}),
						A.current && A.current != k && G(!1);
					const L = (0, a.Z)(z, C);
					return (0, s.Y)(e._, {
						children: (0, s.Y)('div', {
							...L,
							className: c()('ss__image', { 'ss__image--hidden': !N }, I, S),
							children: (0, s.Y)('img', {
								src: (q ? v : k) || x,
								alt: O,
								title: D || O,
								loading: M ? 'lazy' : void 0,
								onLoad: (_) => {
									G(!0), u && u(_);
								},
								onClick: (_) => b && b(_),
								onError: (_) => {
									(_.target.src = x || ''), m && m(_);
								},
								onMouseOver: (_) => {
									v && E(!0), P && P(_);
								},
								onMouseOut: (_) => {
									v && E(!1), p && p(_);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(F, d, t) {
				t.d(d, { S: () => z });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/classnames/index.js'),
					c = t.n(l),
					e = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('./components/src/utilities/defined.ts'),
					$ = t('./components/src/utilities/mergeProps.ts'),
					U = t('./components/src/utilities/mergeStyles.ts'),
					K = t('./components/src/providers/cache.tsx'),
					a = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = t('./components/src/providers/snap.tsx'),
					y = t('./components/src/providers/treePath.tsx'),
					C = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					Z = t('./components/src/hooks/useA11y.tsx'),
					W = t('./components/src/hooks/useLang.tsx'),
					w = t('./components/src/hooks/useComponent.tsx'),
					X = t('../../node_modules/deepmerge/dist/cjs.js'),
					Q = t.n(X);
				const j = ({ size: O, color: k, theme: x, native: D }) => {
						const v = isNaN(Number(O)) ? O : `${O}px`;
						return D
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: v,
									width: v,
									border: `1px solid ${k || x?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${O} - 30%)`, height: `calc(${O} - 30%)` },
							  });
					},
					z = (0, e.PA)((O) => {
						const k = (0, a.u)(),
							x = (0, T.uk)(),
							v = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, y.LU)() },
							M = (0, $.v6)('checkbox', k, v, O),
							{
								checked: P,
								color: p,
								disabled: m,
								icon: u,
								iconColor: b,
								onClick: I,
								size: S,
								startChecked: B,
								native: N,
								disableA11y: G,
								disableStyles: q,
								className: E,
								internalClassName: A,
								theme: L,
								treePath: _,
								lang: ot,
								customComponent: V,
								style: rt,
								styleScript: f,
								themeStyleScript: J,
								name: nt,
								...tt
							} = M;
						if (V) {
							const o = (0, w.x)(x?.templates?.library.import.component.checkbox || {}, V);
							if (o) return (0, s.Y)(o, { ...M });
						}
						const et = isNaN(Number(S)) ? S : `${S}px`,
							st = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, i.s)({ color: b || p || L?.variables?.colors?.primary, disableStyles: q, icon: u, size: et && `calc(${et} - 30%)` }),
									theme: M.theme,
									treePath: _,
								},
							};
						let h, g;
						const R = P === void 0;
						R ? ([h, g] = (0, r.J0)(B)) : (h = P);
						const it = (o) => {
								m || (R && g && g((H) => !H), I && I(o));
							},
							Y = (0, U.Z)(M, j),
							at = { checkbox: {} },
							ct = Q()(at, ot || {}),
							lt = (0, W.u)(ct, { checkedState: h, disabled: m });
						return (0, s.Y)(K._, {
							children: N
								? (0, s.Y)('input', {
										...Y,
										className: c()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': m, 'ss__checkbox--active': h }, E, A),
										type: 'checkbox',
										'aria-checked': h,
										onClick: (o) => it(o),
										disabled: m,
										checked: h,
								  })
								: (0, s.Y)('span', {
										...Y,
										className: c()('ss__checkbox', { 'ss__checkbox--disabled': m, 'ss__checkbox--active': h }, E, A),
										onClick: (o) => it(o),
										ref: (o) => (G ? null : (0, Z.iy)(o)),
										'aria-disabled': m,
										role: 'checkbox',
										'aria-checked': h,
										...tt,
										...lt.checkbox.all,
										children: h
											? (0, s.Y)(C.I, { ...st.icon, ...(typeof u == 'string' ? { icon: u } : u) })
											: (0, s.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(F, d, t) {
				t.d(d, { DH: () => l, aZ: () => n, iy: () => c });
				const s = 9,
					r = 27,
					n = 'ss-a11y',
					l =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(e, i, $, U) {
					const K = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${K}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = K),
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
						$ &&
							e.addEventListener('keydown', function (a) {
								const T = e.querySelectorAll(l),
									y = T[0],
									C = T[T.length - 1];
								if (a.keyCode == r) {
									e.focus(), U && U(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === s) &&
									(a.shiftKey
										? document.activeElement === y && (C.focus(), a.preventDefault())
										: document.activeElement === C && (y.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(F, d, t) {
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
			'./components/src/hooks/useLang.tsx'(F, d, t) {
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
			'./components/src/utilities/defined.ts'(F, d, t) {
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
