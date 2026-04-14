'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5335],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(te, O, e) {
				e.d(O, { a: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					j = e('../../node_modules/classnames/index.js'),
					A = e.n(j),
					N = e('../../node_modules/mobx-react-lite/es/index.js'),
					Y = e('./components/src/providers/cache.tsx'),
					F = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = e('./components/src/providers/snap.tsx'),
					w = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/hooks/useClickOutside.tsx'),
					J = e('./components/src/hooks/useComponent.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					H = e('./components/src/utilities/defined.ts'),
					k = e('./components/src/utilities/mergeProps.ts'),
					Z = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/hooks/useA11y.tsx'),
					X = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const d = () =>
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
					_ = (0, N.PA)((M) => {
						const i = (0, F.u)(),
							B = (0, $.uk)(),
							V = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, w.LU)() },
							D = (0, k.v6)('modal', i, V, M),
							{
								button: n,
								content: h,
								buttonSelector: m,
								children: I,
								disabled: u,
								open: p,
								onClick: E,
								lockScroll: L,
								startOpen: q,
								disableClickOutside: ee,
								disableA11y: T,
								className: f,
								internalClassName: W,
								disableStyles: v,
								overlayColor: g,
								onOverlayClick: K,
								treePath: c,
								customComponent: U,
							} = D;
						if (U) {
							const s = (0, J.x)(B?.templates?.library.import.component.modal || {}, U);
							if (s) return (0, o.Y)(s, { ...D });
						}
						const b = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (s) => {
									K && K(s), t();
								},
								...(0, H.s)({ disableStyles: v, color: g }),
								theme: D?.theme,
								treePath: c,
							},
						};
						let l, P;
						const x = p === void 0;
						x ? ([l, P] = (0, r.J0)(q)) : (l = p);
						let a;
						ee ||
							(a = (0, z.L)(() => {
								l && (u || (x && P && P(!1)));
							}));
						const t = () => {
								x && P && P((s) => !s);
							},
							C = (0, Z.Z)(D, d);
						return (
							(0, r.vJ)(
								() => (
									l && L ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[l, L]
							),
							(0, r.vJ)(() => {
								const s = m ? (typeof m == 'string' ? document.querySelector(m) : m) : null,
									oe = (0, G.s)(() => {
										setTimeout(() => {
											l && L ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									se = (ne) => {
										t(), E && E(ne);
									};
								return (
									s && (u || s.addEventListener('click', se)),
									window.addEventListener('resize', oe),
									() => {
										window.removeEventListener('resize', oe), s && s.removeEventListener('click', se);
									}
								);
							}, []),
							(0, o.Y)(Y._, {
								children: (0, o.FD)('div', {
									...C,
									className: A()('ss__modal', { 'ss__modal--open': l }, { 'ss__modal--disabled': u }, f, W),
									ref: a,
									children: [
										!m &&
											n &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (s) => (T ? null : (0, R.iy)(s)),
												'aria-expanded': l,
												role: 'button',
												onClick: (s) => {
													u || (t(), E && E(s));
												},
												children: (0, y.Y)(n, { open: l, toggleOpen: t, treePath: c }),
											}),
										(h || I) &&
											l &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (s) => (T ? null : (0, R.iy)(s)),
												children: [(0, y.Y)(h, { open: l, toggleOpen: t, treePath: c }), (0, y.Y)(I, { open: l, toggleOpen: t, treePath: c })],
											}),
										(0, o.Y)(X.h, { ...b.overlay, active: !!l }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(te, O, e) {
				e.d(O, { f: () => G });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/mobx-react-lite/es/index.js'),
					j = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = e('./components/src/utilities/defined.ts'),
					N = e('./components/src/utilities/mergeProps.ts'),
					Y = e('./components/src/utilities/mergeStyles.ts'),
					F = e('./components/src/providers/cache.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					w = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					z = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					J = e('../../node_modules/classnames/index.js'),
					y = e.n(J),
					H = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					k = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					Z = e('./components/src/hooks/useA11y.tsx'),
					R = e('./components/src/hooks/useAcRenderedInput.tsx');
				const X = ({ inputBounds: d, offset: _, renderInput: M, width: i }) =>
						(0, j.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${_?.left || 0}px)`,
								top: `calc(0px + ${M ? '0px' : `${d.height}px`} + ${_?.top || 0}px)`,
								width: `calc(100% + ${_?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								'.ss__search-input': { background: '#fff', width: `${d.width}px`, height: `${d.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: i,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${d.top || 0}px - ${M ? `${d.height}px` : '0px'} + ${_?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					G = (0, S.PA)((d) => {
						const _ = (0, $.u)(),
							M = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							i = (0, N.v6)('autocompleteFixed', _, M, d),
							[B, Q] = (0, r.J0)(!1),
							[V, D] = (0, r.J0)('query');
						let n = i.input,
							h = i.buttonSelector,
							m;
						if (n) {
							typeof n == 'string' && (n = document.querySelector(n));
							const t = n?.getAttribute('name');
							t && (D(t), i.renderInput && n.setAttribute('name', '')), (m = n?.getAttribute('placeholder'));
						}
						!h && n && (h = n);
						const {
								layout: I,
								disableStyles: u,
								controller: p,
								renderInput: E,
								overlayColor: L,
								className: q,
								internalClassName: ee,
								offset: T,
								treePath: f,
							} = i,
							W = (0, r.li)(null),
							v = () => {
								p.setFocused(), Q(!1);
							},
							g = {
								autocompleteLayout: { layout: I, onReset: () => v(), ...(0, A.s)({ disableStyles: u }), theme: i?.theme, treePath: f },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: h,
									lockScroll: !1,
									onOverlayClick: v,
									open: B,
									...(0, A.s)({ overlayColor: L, disableStyles: u }),
									theme: i?.theme,
									treePath: f,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: m || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = p.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => v() },
									inputName: V,
									...(0, A.s)({ disableStyles: u }),
									theme: i?.theme,
									treePath: `${f} modal`,
								},
							},
							K = (t) => {
								if (t) {
									const C = t.getBoundingClientRect();
									return {
										top: C.top + window.scrollY + (T?.top || 0),
										left: C.left + window.scrollX + (T?.left || 0),
										width: C.width,
										height: C.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[c, U] = (0, r.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							b = () => {
								const t = K(n);
								(c.height !== t.height || c.left !== t.left || c.top !== t.top || c.width !== t.width) && U(t);
							};
						b();
						const l = (0, k.s)(() => {
							b();
						}, 10);
						(0, r.vJ)(() => {
							window.addEventListener('resize', l);
						}, []);
						const P = (0, Y.Z)({ ...i, inputBounds: c }, X);
						let x;
						n && (x = (0, R.x)({ input: n, controller: p, renderedInputRef: W, renderInput: !!E, buttonSelector: h, setActive: Q }));
						const a = { ...i };
						return (
							delete a.width,
							delete a.className,
							delete a.internalClassName,
							delete a.style,
							delete a.styleScript,
							delete a.themeStyleScript,
							I?.length && B
								? (0, o.Y)(F._, {
										children: (0, o.Y)('div', {
											...P,
											className: y()('ss__autocomplete-fixed', q, ee),
											children: (0, o.Y)(z.a, {
												...g.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (t) => (0, Z.iy)(t, 0, !0, v),
													children: [
														E ? (0, o.Y)(H.D, { ...g.searchInput, value: p.store.state.input || '', inputRef: W }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, o.Y)(w.h, { ...a, ...g.autocompleteLayout, input: x, controller: p, treePath: `${f} modal` }),
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
			'./src/Templates/Stores/library/components/AutocompleteFixed.ts'(te, O, e) {
				e.r(O), e.d(O, { AutocompleteFixed: () => o.f });
				var o = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx');
			},
		},
	]);
})();
