'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(w, E, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					S = e('../../node_modules/classnames/index.js'),
					A = e.n(S),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					N = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					k = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/hooks/useClickOutside.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					H = e('./components/src/utilities/defined.ts'),
					J = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const I = () =>
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
					v = (0, j.PA)((L) => {
						const n = (0, Y.u)(),
							x = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, k.LU)() },
							h = (0, J.v6)('modal', n, x, L),
							{
								button: a,
								content: m,
								buttonSelector: i,
								children: M,
								disabled: P,
								open: T,
								onClick: O,
								lockScroll: D,
								startOpen: f,
								disableClickOutside: d,
								disableA11y: l,
								className: W,
								internalClassName: K,
								disableStyles: u,
								overlayColor: R,
								onOverlayClick: U,
								treePath: p,
							} = h,
							{ overrideElement: c, shouldRenderDefault: _ } = (0, F._)('modal', h);
						if (!_) return c;
						const q = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (s) => {
									U && U(s), C();
								},
								...(0, H.s)({ disableStyles: u, color: R }),
								theme: h?.theme,
								treePath: p,
							},
						};
						let t, g;
						const V = T === void 0;
						V ? ([t, g] = (0, r.J0)(f)) : (t = T);
						let ee;
						d ||
							(ee = (0, z.L)(() => {
								t && (P || (V && g && g(!1)));
							}));
						const C = () => {
								V && g && g((s) => !s);
							},
							ae = (0, $.Z)(h, I);
						(0, r.vJ)(
							() => (
								t && D ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[t, D]
						);
						const oe = (0, r.li)(t),
							te = (0, r.li)(D);
						return (
							(oe.current = t),
							(te.current = D),
							(0, r.vJ)(() => {
								const s = i ? (typeof i == 'string' ? document.querySelector(i) : i) : null;
								let se = !1,
									X;
								const ne = (0, G.s)(() => {
										clearTimeout(X),
											(X = setTimeout(() => {
												se || (oe.current && te.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									le = (re) => {
										C(), O && O(re);
									};
								return (
									s && (P || s.addEventListener('click', le)),
									window.addEventListener('resize', ne),
									() => {
										(se = !0), clearTimeout(X), window.removeEventListener('resize', ne), s && s.removeEventListener('click', le);
									}
								);
							}, []),
							(0, o.Y)(N._, {
								children: (0, o.FD)('div', {
									...ae,
									className: A()('ss__modal', { 'ss__modal--open': t }, { 'ss__modal--disabled': P }, W, K),
									ref: ee,
									children: [
										!i &&
											a &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (s) => (l ? null : (0, B.iy)(s)),
												'aria-expanded': t,
												role: 'button',
												onClick: (s) => {
													P || (C(), O && O(s));
												},
												children: (0, y.Y)(a, { open: t, toggleOpen: C, treePath: p }),
											}),
										(m || M) &&
											t &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (s) => (l ? null : (0, B.iy)(s)),
												children: [(0, y.Y)(m, { open: t, toggleOpen: C, treePath: p }), (0, y.Y)(M, { open: t, toggleOpen: C, treePath: p })],
											}),
										(0, o.Y)(Z.h, { ...q.overlay, active: !!t }),
									],
								}),
							})
						);
					});
				e.d(E, ['a', 0, v]);
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(w, E, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					N = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/providers/cache.tsx'),
					k = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					F = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					y = e('../../node_modules/classnames/index.js'),
					H = e.n(y),
					J = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					$ = e('./components/src/hooks/useA11y.tsx'),
					B = e('./components/src/hooks/useAcRenderedInput.tsx');
				const Z = ({ width: I, height: v, theme: L }) => {
						const n = L?.variables;
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
								width: I,
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
					G = (0, b.PA)((I) => {
						const v = (0, k.u)(),
							L = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, j.v6)('autocompleteModal', v, L, I),
							[Q, x] = (0, r.J0)(!1),
							h = '';
						let a = n.input,
							m = n.buttonSelector;
						a && typeof a == 'string' && (a = document.querySelector(a)), !m && a && (m = a);
						const {
							layout: i,
							disableStyles: M,
							overlayColor: P,
							renderInput: T,
							className: O,
							internalClassName: D,
							treePath: f,
							tabManager: d,
						} = n;
						let l = n.controller,
							W = [l];
						d && d.active && ((l = d.active?.controller), (W = d.tabs.map((_) => _.controller)));
						const K = (0, r.li)(null);
						(0, r.vJ)(() => {
							const _ = (q, t) => {
								l.store.state.focusedInput || x(!1), t();
							};
							return (
								l.eventManager.on('focusChange', _),
								() => {
									l.eventManager.events.focusChange?.remove(_);
								}
							);
						}, [l]);
						const u = () => {
								l.setFocused(), x(!1);
							},
							R = {
								autocompleteLayout: { layout: i, onReset: () => u(), tabManager: d, ...(0, A.s)({ disableStyles: M }), theme: n?.theme, treePath: f },
								modal: {
									internalClassName: 'ss__autocomplete-modal__modal',
									buttonSelector: m,
									onOverlayClick: u,
									overlayColor: P,
									open: Q,
									...(0, A.s)({ disableStyles: M }),
									theme: n?.theme,
									treePath: f,
								},
								searchInput: {
									internalClassName: 'ss__autocomplete-modal__search-input ss__autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => u(), icon: 'angle-left' },
									inputName: h,
									...(0, A.s)({ disableStyles: M }),
									theme: n?.theme,
									treePath: `${f} modal`,
								},
							},
							U = (0, N.Z)(n, Z);
						let p;
						a && (p = (0, B.x)({ input: a, controllers: W, renderedInputRef: K, renderInput: !!T, buttonSelector: m, setActive: x }));
						const c = { ...n };
						return (
							delete c.width,
							delete c.className,
							delete c.internalClassName,
							delete c.style,
							delete c.styleScript,
							delete c.themeStyleScript,
							i?.length && Q
								? (0, o.Y)(Y._, {
										children: (0, o.Y)('div', {
											...U,
											className: H()('ss__autocomplete-modal', O, D),
											children: (0, o.Y)(F.a, {
												...R.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (_) => (0, $.iy)(_, 0, !0, u),
													children: [
														T ? (0, o.Y)(J.D, { ...R.searchInput, value: l.store.state.input || '', inputRef: K }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(z.h, { ...c, ...R.autocompleteLayout, input: p, controller: l, treePath: `${f} modal` }),
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
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(w, E, e) {
				e.r(E), e.d(E, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
