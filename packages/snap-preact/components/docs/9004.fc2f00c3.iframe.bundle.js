'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(X, E, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					S = e('../../node_modules/classnames/index.js'),
					C = e.n(S),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					N = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/treePath.tsx'),
					k = e('./components/src/hooks/useClickOutside.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					A = e('./components/src/utilities/cloneWithProps.tsx'),
					H = e('./components/src/utilities/defined.ts'),
					J = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const y = () =>
						(0, b.AH)({
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
					v = (0, j.PA)((I) => {
						const n = (0, Y.u)(),
							L = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, z.LU)() },
							h = (0, J.v6)('modal', n, L, I),
							{
								button: a,
								content: m,
								buttonSelector: c,
								children: M,
								disabled: P,
								open: x,
								onClick: O,
								lockScroll: g,
								startOpen: D,
								disableClickOutside: d,
								disableA11y: l,
								className: W,
								internalClassName: K,
								disableStyles: u,
								overlayColor: R,
								onOverlayClick: U,
								treePath: p,
							} = h,
							{ overrideElement: r, shouldRenderDefault: i } = (0, F._)('modal', h);
						if (!i) return r;
						const w = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (s) => {
									U && U(s), f();
								},
								...(0, H.s)({ disableStyles: u, color: R }),
								theme: h?.theme,
								treePath: p,
							},
						};
						let t, T;
						const V = x === void 0;
						V ? ([t, T] = (0, _.J0)(D)) : (t = x);
						let q;
						d ||
							(q = (0, k.L)(() => {
								t && (P || (V && T && T(!1)));
							}));
						const f = () => {
								V && T && T((s) => !s);
							},
							te = (0, $.Z)(h, y);
						return (
							(0, _.vJ)(
								() => (
									t && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[t, g]
							),
							(0, _.vJ)(() => {
								const s = c ? (typeof c == 'string' ? document.querySelector(c) : c) : null,
									ee = (0, G.s)(() => {
										setTimeout(() => {
											t && g ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									oe = (se) => {
										f(), O && O(se);
									};
								return (
									s && (P || s.addEventListener('click', oe)),
									window.addEventListener('resize', ee),
									() => {
										window.removeEventListener('resize', ee), s && s.removeEventListener('click', oe);
									}
								);
							}, []),
							(0, o.Y)(N._, {
								children: (0, o.FD)('div', {
									...te,
									className: C()('ss__modal', { 'ss__modal--open': t }, { 'ss__modal--disabled': P }, W, K),
									ref: q,
									children: [
										!c &&
											a &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (s) => (l ? null : (0, B.iy)(s)),
												'aria-expanded': t,
												role: 'button',
												onClick: (s) => {
													P || (f(), O && O(s));
												},
												children: (0, A.Y)(a, { open: t, toggleOpen: f, treePath: p }),
											}),
										(m || M) &&
											t &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (s) => (l ? null : (0, B.iy)(s)),
												children: [(0, A.Y)(m, { open: t, toggleOpen: f, treePath: p }), (0, A.Y)(M, { open: t, toggleOpen: f, treePath: p })],
											}),
										(0, o.Y)(Z.h, { ...w.overlay, active: !!t }),
									],
								}),
							})
						);
					});
				e.d(E, ['a', 0, v]);
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(X, E, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					N = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					k = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					F = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					A = e('../../node_modules/classnames/index.js'),
					H = e.n(A),
					J = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					$ = e('./components/src/hooks/useA11y.tsx'),
					B = e('./components/src/hooks/useAcRenderedInput.tsx');
				const Z = ({ width: y, height: v, theme: I }) => {
						const n = I?.variables;
						return (0, S.AH)({
							position: 'fixed',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'& .ss__autocomplete-modal__inner': {
								position: 'absolute',
								left: 0,
								right: 0,
								top: '10vh',
								maxHeight: v ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: y,
								height: v,
								maxWidth: '100vw',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${n?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					G = (0, b.PA)((y) => {
						const v = (0, z.u)(),
							I = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, j.v6)('autocompleteModal', v, I, y),
							[Q, L] = (0, _.J0)(!1),
							h = '';
						let a = n.input,
							m = n.buttonSelector;
						a && typeof a == 'string' && (a = document.querySelector(a)), !m && a && (m = a);
						const {
							layout: c,
							disableStyles: M,
							overlayColor: P,
							renderInput: x,
							className: O,
							internalClassName: g,
							treePath: D,
							tabManager: d,
						} = n;
						let l = n.controller,
							W = [l];
						d && d.active && ((l = d.active?.controller), (W = d.tabs.map((i) => i.controller)));
						const K = (0, _.li)(null);
						(0, _.vJ)(() => {
							const i = (w, t) => {
								l.store.state.focusedInput || L(!1), t();
							};
							return (
								l.eventManager.on('focusChange', i),
								() => {
									l.eventManager.events.focusChange?.remove(i);
								}
							);
						}, [l]);
						const u = () => {
								l.setFocused(), L(!1);
							},
							R = {
								autocompleteLayout: { layout: c, onReset: () => u(), tabManager: d, ...(0, C.s)({ disableStyles: M }), theme: n?.theme, treePath: D },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: m,
									onOverlayClick: u,
									overlayColor: P,
									open: Q,
									...(0, C.s)({ disableStyles: M }),
									theme: n?.theme,
									treePath: D,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => u(), icon: 'angle-left' },
									inputName: h,
									...(0, C.s)({ disableStyles: M }),
									theme: n?.theme,
									treePath: `${D} modal`,
								},
							},
							U = (0, N.Z)(n, Z);
						let p;
						a && (p = (0, B.x)({ input: a, controllers: W, renderedInputRef: K, renderInput: !!x, buttonSelector: m, setActive: L }));
						const r = { ...n };
						return (
							delete r.width,
							delete r.className,
							delete r.internalClassName,
							delete r.style,
							delete r.styleScript,
							delete r.themeStyleScript,
							c?.length && Q
								? (0, o.Y)(Y._, {
										children: (0, o.Y)('div', {
											...U,
											className: H()('ss__autocomplete-modal', O, g),
											children: (0, o.Y)(F.a, {
												...R.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (i) => (0, $.iy)(i, 0, !0, u),
													children: [
														x ? (0, o.Y)(J.D, { ...R.searchInput, value: l.store.state.input || '', inputRef: K }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(k.h, { ...r, ...R.autocompleteLayout, input: p, controller: l, treePath: `${D} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
				e.d(E, ['c', 0, G]);
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(X, E, e) {
				e.r(E), e.d(E, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
