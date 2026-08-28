'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(se, D, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					F = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					N = e('../../node_modules/classnames/index.js'),
					I = e.n(N),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/treePath.tsx'),
					J = e('./components/src/hooks/useClickOutside.tsx'),
					k = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					H = e('./components/src/utilities/defined.ts'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/hooks/useA11y.tsx'),
					G = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					Q = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const V = () =>
						(0, F.AH)({
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
					d = (0, Y.PA)((p) => {
						const x = (0, w.u)(),
							U = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, z.LU)() },
							h = (0, Z.v6)('modal', x, U, p),
							{
								button: b,
								content: l,
								buttonSelector: a,
								children: T,
								disabled: P,
								open: C,
								onClick: O,
								lockScroll: A,
								startOpen: q,
								disableClickOutside: ee,
								disableA11y: L,
								className: y,
								internalClassName: f,
								disableStyles: r,
								overlayColor: S,
								onOverlayClick: R,
								treePath: _,
							} = h,
							{ overrideElement: B, shouldRenderDefault: te } = (0, k._)('modal', h);
						if (!te) return B;
						const M = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (n) => {
									R && R(n), m();
								},
								...(0, H.s)({ disableStyles: r, color: S }),
								theme: h?.theme,
								treePath: _,
							},
						};
						let s, E;
						const W = C === void 0;
						W ? ([s, E] = (0, i.J0)(q)) : (s = C);
						let j;
						ee ||
							(j = (0, J.L)(() => {
								s && (P || (W && E && E(!1)));
							}));
						const m = () => {
								W && E && E((n) => !n);
							},
							u = (0, X.Z)(h, V);
						(0, i.vJ)(
							() => (
								s && A ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[s, A]
						);
						const t = (0, i.li)(s),
							v = (0, i.li)(A);
						return (
							(t.current = s),
							(v.current = A),
							(0, i.vJ)(() => {
								const n = a ? (typeof a == 'string' ? document.querySelector(a) : a) : null;
								let ne = !1,
									oe;
								const le = (0, Q.s)(() => {
										clearTimeout(oe),
											(oe = setTimeout(() => {
												ne || (t.current && v.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									ce = (re) => {
										m(), O && O(re);
									};
								return (
									n && (P || n.addEventListener('click', ce)),
									window.addEventListener('resize', le),
									() => {
										(ne = !0), clearTimeout(oe), window.removeEventListener('resize', le), n && n.removeEventListener('click', ce);
									}
								);
							}, []),
							(0, o.Y)($._, {
								children: (0, o.FD)('div', {
									...u,
									className: I()('ss__modal', { 'ss__modal--open': s }, { 'ss__modal--disabled': P }, y, f),
									ref: j,
									children: [
										!a &&
											b &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (n) => (L ? null : (0, K.iy)(n)),
												'aria-expanded': s,
												role: 'button',
												onClick: (n) => {
													P || (m(), O && O(n));
												},
												children: (0, g.Y)(b, { open: s, toggleOpen: m, treePath: _ }),
											}),
										(l || T) &&
											s &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (n) => (L ? null : (0, K.iy)(n)),
												children: [(0, g.Y)(l, { open: s, toggleOpen: m, treePath: _ }), (0, g.Y)(T, { open: s, toggleOpen: m, treePath: _ })],
											}),
										(0, o.Y)(G.h, { ...M.overlay, active: !!s }),
									],
								}),
							})
						);
					});
				e.d(D, ['a', 0, d]);
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(se, D, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					F = e('../../node_modules/mobx-react-lite/es/index.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					I = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					w = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					J = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					k = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					g = e('../../node_modules/classnames/index.js'),
					H = e.n(g),
					Z = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					X = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					K = e('./components/src/hooks/useA11y.tsx'),
					G = e('./components/src/hooks/useAcRenderedInput.tsx');
				const Q = ({ inputBounds: d, offset: p, renderInput: x, width: c }) =>
						(0, N.AH)({
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
								left: `calc(0px + ${p?.left || 0}px)`,
								top: `calc(0px + ${x ? '0px' : `${d.height}px`} + ${p?.top || 0}px)`,
								width: `calc(100% + ${p?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${d.width}px`, height: `${d.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: c,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${d.top || 0}px - ${x ? `${d.height}px` : '0px'} + ${p?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					V = (0, F.PA)((d) => {
						const p = (0, z.u)(),
							x = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							c = (0, Y.v6)('autocompleteFixed', p, x, d),
							[U, h] = (0, i.J0)(!1),
							b = '';
						let l = c.input,
							a = c.buttonSelector,
							T;
						l && (typeof l == 'string' && (l = document.querySelector(l)), (T = l?.getAttribute('placeholder'))), !a && l && (a = l);
						const {
							layout: P,
							disableStyles: C,
							renderInput: O,
							overlayColor: A,
							className: q,
							internalClassName: ee,
							offset: L,
							treePath: y,
							tabManager: f,
						} = c;
						let r = c.controller,
							S = [r];
						f && f.active && ((r = f.active?.controller), (S = f.tabs.map((t) => t.controller)));
						const R = (0, i.li)(null);
						(0, i.vJ)(() => {
							const t = (v, n) => {
								r.store.state.focusedInput || h(!1), n();
							};
							return (
								r.eventManager.on('focusChange', t),
								() => {
									r.eventManager.events.focusChange?.remove(t);
								}
							);
						}, [r]);
						const _ = () => {
								r.setFocused(), h(!1);
							},
							B = {
								autocompleteLayout: { layout: P, onReset: () => _(), tabManager: f, ...(0, I.s)({ disableStyles: C }), theme: c?.theme, treePath: y },
								modal: {
									internalClassName: 'ss__autocomplete-fixed__modal',
									buttonSelector: a,
									lockScroll: !1,
									onOverlayClick: _,
									open: U,
									...(0, I.s)({ overlayColor: A, disableStyles: C }),
									theme: c?.theme,
									treePath: y,
								},
								searchInput: {
									internalClassName: 'ss__autocomplete-fixed__search-input ss__autocomplete__search-input',
									placeholderText: T || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = r.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => _() },
									inputName: b,
									...(0, I.s)({ disableStyles: C }),
									theme: c?.theme,
									treePath: `${y} modal`,
								},
							},
							te = (t) => {
								if (t) {
									const v = t.getBoundingClientRect();
									return {
										top: v.top + window.scrollY + (L?.top || 0),
										left: v.left + window.scrollX + (L?.left || 0),
										width: v.width,
										height: v.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[M, s] = (0, i.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							E = () => {
								const t = te(l);
								(M.height !== t.height || M.left !== t.left || M.top !== t.top || M.width !== t.width) && s(t);
							};
						E();
						const W = (0, X.s)(() => {
							E();
						}, 10);
						(0, i.vJ)(() => {
							window.addEventListener('resize', W);
						}, []);
						const j = (0, $.Z)({ ...c, inputBounds: M }, Q);
						let m;
						l && (m = (0, G.x)({ input: l, controllers: S, renderedInputRef: R, renderInput: !!O, buttonSelector: a, setActive: h }));
						const u = { ...c };
						return (
							delete u.width,
							delete u.className,
							delete u.internalClassName,
							delete u.style,
							delete u.styleScript,
							delete u.themeStyleScript,
							P?.length && U
								? (0, o.Y)(w._, {
										children: (0, o.Y)('div', {
											...j,
											className: H()('ss__autocomplete-fixed', q, ee),
											children: (0, o.Y)(k.a, {
												...B.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (t) => (0, K.iy)(t, 0, !0, _),
													children: [
														O ? (0, o.Y)(Z.D, { ...B.searchInput, value: r.store.state.input || '', inputRef: R }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, o.Y)(J.h, { ...u, ...B.autocompleteLayout, input: m, controller: r, treePath: `${y} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
				e.d(D, ['f', 0, V]);
			},
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(se, D, e) {
				e.r(D), e.d(D, { AutocompleteFixed: () => o.f });
				var o = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
