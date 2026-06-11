'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(ee, O, e) {
				e.d(O, { a: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					j = e('../../node_modules/classnames/index.js'),
					I = e.n(j),
					F = e('../../node_modules/mobx-react-lite/es/index.js'),
					N = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useClickOutside.tsx'),
					z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					J = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					X = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const G = () =>
						(0, S.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					_ = (0, F.PA)((m) => {
						const M = (0, Y.u)(),
							R = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, $.LU)() },
							u = (0, H.v6)('modal', M, R, m),
							{
								button: B,
								content: l,
								buttonSelector: a,
								children: L,
								disabled: p,
								open: f,
								onClick: c,
								lockScroll: D,
								startOpen: Q,
								disableClickOutside: V,
								disableA11y: W,
								className: K,
								internalClassName: x,
								disableStyles: U,
								overlayColor: h,
								onOverlayClick: C,
								treePath: A,
							} = u,
							{ overrideElement: E, shouldRenderDefault: q } = (0, z._)('modal', u);
						if (!q) return E;
						const b = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (s) => {
									C && C(s), t();
								},
								...(0, J.s)({ disableStyles: U, color: h }),
								theme: u?.theme,
								treePath: A,
							},
						};
						let n, v;
						const y = f === void 0;
						y ? ([n, v] = (0, d.J0)(Q)) : (n = f);
						let r;
						V ||
							(r = (0, w.L)(() => {
								n && (p || (y && v && v(!1)));
							}));
						const t = () => {
								y && v && v((s) => !s);
							},
							P = (0, k.Z)(u, G);
						return (
							(0, d.vJ)(
								() => (
									n && D ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[n, D]
							),
							(0, d.vJ)(() => {
								const s = a ? (typeof a == 'string' ? document.querySelector(a) : a) : null,
									te = (0, X.s)(() => {
										setTimeout(() => {
											n && D ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									oe = (se) => {
										t(), c && c(se);
									};
								return (
									s && (p || s.addEventListener('click', oe)),
									window.addEventListener('resize', te),
									() => {
										window.removeEventListener('resize', te), s && s.removeEventListener('click', oe);
									}
								);
							}, []),
							(0, o.Y)(N._, {
								children: (0, o.FD)('div', {
									...P,
									className: I()('ss__modal', { 'ss__modal--open': n }, { 'ss__modal--disabled': p }, K, x),
									ref: r,
									children: [
										!a &&
											B &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (s) => (W ? null : (0, T.iy)(s)),
												'aria-expanded': n,
												role: 'button',
												onClick: (s) => {
													p || (t(), c && c(s));
												},
												children: (0, g.Y)(B, { open: n, toggleOpen: t, treePath: A }),
											}),
										(l || L) &&
											n &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (s) => (W ? null : (0, T.iy)(s)),
												children: [(0, g.Y)(l, { open: n, toggleOpen: t, treePath: A }), (0, g.Y)(L, { open: n, toggleOpen: t, treePath: A })],
											}),
										(0, o.Y)(Z.h, { ...b.overlay, active: !!n }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(ee, O, e) {
				e.d(O, { f: () => G });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/mobx-react-lite/es/index.js'),
					j = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					I = e('./components/src/utilities/defined.ts'),
					F = e('./components/src/utilities/mergeProps.ts'),
					N = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/providers/cache.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					w = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					z = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					g = e('../../node_modules/classnames/index.js'),
					J = e.n(g),
					H = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					k = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					T = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/hooks/useAcRenderedInput.tsx');
				const X = ({ inputBounds: _, offset: m, renderInput: M, width: i }) =>
						(0, j.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							pointerEvents: 'none',
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${m?.left || 0}px)`,
								top: `calc(0px + ${M ? '0px' : `${_.height}px`} + ${m?.top || 0}px)`,
								width: `calc(100% + ${m?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${_.width}px`, height: `${_.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: i,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${_.top || 0}px - ${M ? `${_.height}px` : '0px'} + ${m?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					G = (0, S.PA)((_) => {
						const m = (0, $.u)(),
							M = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							i = (0, F.v6)('autocompleteFixed', m, M, _),
							[R, u] = (0, d.J0)(!1),
							B = '';
						let l = i.input,
							a = i.buttonSelector,
							L;
						l && (typeof l == 'string' && (l = document.querySelector(l)), (L = l?.getAttribute('placeholder'))), !a && l && (a = l);
						const {
								layout: p,
								disableStyles: f,
								controller: c,
								renderInput: D,
								overlayColor: Q,
								className: V,
								internalClassName: W,
								offset: K,
								treePath: x,
							} = i,
							U = (0, d.li)(null);
						(0, d.vJ)(() => {
							const t = (P, s) => {
								c.store.state.focusedInput || u(!1), s();
							};
							return (
								c.eventManager.on('focusChange', t),
								() => {
									c.eventManager.events.focusChange?.remove(t);
								}
							);
						}, []);
						const h = () => {
								c.setFocused(), u(!1);
							},
							C = {
								autocompleteLayout: { layout: p, onReset: () => h(), ...(0, I.s)({ disableStyles: f }), theme: i?.theme, treePath: x },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: a,
									lockScroll: !1,
									onOverlayClick: h,
									open: R,
									...(0, I.s)({ overlayColor: Q, disableStyles: f }),
									theme: i?.theme,
									treePath: x,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: L || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = c.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => h() },
									inputName: B,
									...(0, I.s)({ disableStyles: f }),
									theme: i?.theme,
									treePath: `${x} modal`,
								},
							},
							A = (t) => {
								if (t) {
									const P = t.getBoundingClientRect();
									return {
										top: P.top + window.scrollY + (K?.top || 0),
										left: P.left + window.scrollX + (K?.left || 0),
										width: P.width,
										height: P.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[E, q] = (0, d.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							b = () => {
								const t = A(l);
								(E.height !== t.height || E.left !== t.left || E.top !== t.top || E.width !== t.width) && q(t);
							};
						b();
						const n = (0, k.s)(() => {
							b();
						}, 10);
						(0, d.vJ)(() => {
							window.addEventListener('resize', n);
						}, []);
						const v = (0, N.Z)({ ...i, inputBounds: E }, X);
						let y;
						l && (y = (0, Z.x)({ input: l, controller: c, renderedInputRef: U, renderInput: !!D, buttonSelector: a, setActive: u }));
						const r = { ...i };
						return (
							delete r.width,
							delete r.className,
							delete r.internalClassName,
							delete r.style,
							delete r.styleScript,
							delete r.themeStyleScript,
							p?.length && R
								? (0, o.Y)(Y._, {
										children: (0, o.Y)('div', {
											...v,
											className: J()('ss__autocomplete-fixed', V, W),
											children: (0, o.Y)(z.a, {
												...C.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (t) => (0, T.iy)(t, 0, !0, h),
													children: [
														D ? (0, o.Y)(H.D, { ...C.searchInput, value: c.store.state.input || '', inputRef: U }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, o.Y)(w.h, { ...r, ...C.autocompleteLayout, input: y, controller: c, treePath: `${x} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(ee, O, e) {
				e.r(O), e.d(O, { AutocompleteFixed: () => o.f });
				var o = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
