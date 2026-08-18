'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(oe, f, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					F = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					N = e('../../node_modules/classnames/index.js'),
					A = e.n(N),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					$ = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/treePath.tsx'),
					J = e('./components/src/hooks/useClickOutside.tsx'),
					H = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					k = e('./components/src/utilities/defined.ts'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/hooks/useA11y.tsx'),
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
					d = (0, Y.PA)((u) => {
						const D = (0, w.u)(),
							K = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, z.LU)() },
							p = (0, Z.v6)('modal', D, K, u),
							{
								button: U,
								content: n,
								buttonSelector: a,
								children: I,
								disabled: v,
								open: x,
								onClick: P,
								lockScroll: g,
								startOpen: q,
								disableClickOutside: ee,
								disableA11y: L,
								className: C,
								internalClassName: O,
								disableStyles: c,
								overlayColor: b,
								onOverlayClick: T,
								treePath: i,
							} = p,
							{ overrideElement: R, shouldRenderDefault: te } = (0, H._)('modal', p);
						if (!te) return R;
						const M = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (t) => {
									T && T(t), _();
								},
								...(0, k.s)({ disableStyles: c, color: b }),
								theme: p?.theme,
								treePath: i,
							},
						};
						let s, h;
						const B = x === void 0;
						B ? ([s, h] = (0, r.J0)(q)) : (s = x);
						let S;
						ee ||
							(S = (0, J.L)(() => {
								s && (v || (B && h && h(!1)));
							}));
						const _ = () => {
								B && h && h((t) => !t);
							},
							m = (0, X.Z)(p, V);
						return (
							(0, r.vJ)(
								() => (
									s && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[s, g]
							),
							(0, r.vJ)(() => {
								const t = a ? (typeof a == 'string' ? document.querySelector(a) : a) : null,
									E = (0, Q.s)(() => {
										setTimeout(() => {
											s && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									j = (se) => {
										_(), P && P(se);
									};
								return (
									t && (v || t.addEventListener('click', j)),
									window.addEventListener('resize', E),
									() => {
										window.removeEventListener('resize', E), t && t.removeEventListener('click', j);
									}
								);
							}, []),
							(0, o.Y)($._, {
								children: (0, o.FD)('div', {
									...m,
									className: A()('ss__modal', { 'ss__modal--open': s }, { 'ss__modal--disabled': v }, C, O),
									ref: S,
									children: [
										!a &&
											U &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (t) => (L ? null : (0, W.iy)(t)),
												'aria-expanded': s,
												role: 'button',
												onClick: (t) => {
													v || (_(), P && P(t));
												},
												children: (0, y.Y)(U, { open: s, toggleOpen: _, treePath: i }),
											}),
										(n || I) &&
											s &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (t) => (L ? null : (0, W.iy)(t)),
												children: [(0, y.Y)(n, { open: s, toggleOpen: _, treePath: i }), (0, y.Y)(I, { open: s, toggleOpen: _, treePath: i })],
											}),
										(0, o.Y)(G.h, { ...M.overlay, active: !!s }),
									],
								}),
							})
						);
					});
				e.d(f, ['a', 0, d]);
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(oe, f, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					F = e('../../node_modules/mobx-react-lite/es/index.js'),
					N = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					w = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					J = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					H = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					y = e('../../node_modules/classnames/index.js'),
					k = e.n(y),
					Z = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					X = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					W = e('./components/src/hooks/useA11y.tsx'),
					G = e('./components/src/hooks/useAcRenderedInput.tsx');
				const Q = ({ inputBounds: d, offset: u, renderInput: D, width: l }) =>
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
								left: `calc(0px + ${u?.left || 0}px)`,
								top: `calc(0px + ${D ? '0px' : `${d.height}px`} + ${u?.top || 0}px)`,
								width: `calc(100% + ${u?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${d.width}px`, height: `${d.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: l,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${d.top || 0}px - ${D ? `${d.height}px` : '0px'} + ${u?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					V = (0, F.PA)((d) => {
						const u = (0, z.u)(),
							D = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							l = (0, Y.v6)('autocompleteFixed', u, D, d),
							[K, p] = (0, r.J0)(!1),
							U = '';
						let n = l.input,
							a = l.buttonSelector,
							I;
						n && (typeof n == 'string' && (n = document.querySelector(n)), (I = n?.getAttribute('placeholder'))), !a && n && (a = n);
						const {
							layout: v,
							disableStyles: x,
							renderInput: P,
							overlayColor: g,
							className: q,
							internalClassName: ee,
							offset: L,
							treePath: C,
							tabManager: O,
						} = l;
						let c = l.controller,
							b = [c];
						O && O.active && ((c = O.active?.controller), (b = O.tabs.map((t) => t.controller)));
						const T = (0, r.li)(null);
						(0, r.vJ)(() => {
							const t = (E, j) => {
								c.store.state.focusedInput || p(!1), j();
							};
							return (
								c.eventManager.on('focusChange', t),
								() => {
									c.eventManager.events.focusChange?.remove(t);
								}
							);
						}, [c]);
						const i = () => {
								c.setFocused(), p(!1);
							},
							R = {
								autocompleteLayout: { layout: v, onReset: () => i(), tabManager: O, ...(0, A.s)({ disableStyles: x }), theme: l?.theme, treePath: C },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: a,
									lockScroll: !1,
									onOverlayClick: i,
									open: K,
									...(0, A.s)({ overlayColor: g, disableStyles: x }),
									theme: l?.theme,
									treePath: C,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: I || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = c.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => i() },
									inputName: U,
									...(0, A.s)({ disableStyles: x }),
									theme: l?.theme,
									treePath: `${C} modal`,
								},
							},
							te = (t) => {
								if (t) {
									const E = t.getBoundingClientRect();
									return {
										top: E.top + window.scrollY + (L?.top || 0),
										left: E.left + window.scrollX + (L?.left || 0),
										width: E.width,
										height: E.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[M, s] = (0, r.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							h = () => {
								const t = te(n);
								(M.height !== t.height || M.left !== t.left || M.top !== t.top || M.width !== t.width) && s(t);
							};
						h();
						const B = (0, X.s)(() => {
							h();
						}, 10);
						(0, r.vJ)(() => {
							window.addEventListener('resize', B);
						}, []);
						const S = (0, $.Z)({ ...l, inputBounds: M }, Q);
						let _;
						n && (_ = (0, G.x)({ input: n, controllers: b, renderedInputRef: T, renderInput: !!P, buttonSelector: a, setActive: p }));
						const m = { ...l };
						return (
							delete m.width,
							delete m.className,
							delete m.internalClassName,
							delete m.style,
							delete m.styleScript,
							delete m.themeStyleScript,
							v?.length && K
								? (0, o.Y)(w._, {
										children: (0, o.Y)('div', {
											...S,
											className: k()('ss__autocomplete-fixed', q, ee),
											children: (0, o.Y)(H.a, {
												...R.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (t) => (0, W.iy)(t, 0, !0, i),
													children: [
														P ? (0, o.Y)(Z.D, { ...R.searchInput, value: c.store.state.input || '', inputRef: T }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, o.Y)(J.h, { ...m, ...R.autocompleteLayout, input: _, controller: c, treePath: `${C} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
				e.d(f, ['f', 0, V]);
			},
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(oe, f, e) {
				e.r(f), e.d(f, { AutocompleteFixed: () => o.f });
				var o = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
