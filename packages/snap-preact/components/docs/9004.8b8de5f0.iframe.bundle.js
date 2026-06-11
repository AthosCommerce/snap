'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(V, p, e) {
				e.d(p, { a: () => E });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					B = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					D = e.n(W),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/treePath.tsx'),
					j = e('./components/src/hooks/useClickOutside.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					Y = e('./components/src/utilities/defined.ts'),
					z = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
					F = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					H = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const C = () =>
						(0, B.AH)({
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
					E = (0, K.PA)((A) => {
						const n = (0, b.u)(),
							y = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, S.LU)() },
							v = (0, z.v6)('modal', n, y, A),
							{
								button: l,
								content: m,
								buttonSelector: i,
								children: h,
								disabled: M,
								open: a,
								onClick: d,
								lockScroll: I,
								startOpen: $,
								disableClickOutside: P,
								disableA11y: L,
								className: u,
								internalClassName: x,
								disableStyles: Z,
								overlayColor: g,
								onOverlayClick: r,
								treePath: c,
							} = v,
							{ overrideElement: X, shouldRenderDefault: G } = (0, N._)('modal', v);
						if (!G) return X;
						const oe = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (t) => {
									r && r(t), O();
								},
								...(0, Y.s)({ disableStyles: Z, color: g }),
								theme: v?.theme,
								treePath: c,
							},
						};
						let s, R;
						const Q = a === void 0;
						Q ? ([s, R] = (0, _.J0)($)) : (s = a);
						let w;
						P ||
							(w = (0, j.L)(() => {
								s && (M || (Q && R && R(!1)));
							}));
						const O = () => {
								Q && R && R((t) => !t);
							},
							te = (0, k.Z)(v, C);
						return (
							(0, _.vJ)(
								() => (
									s && I ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[s, I]
							),
							(0, _.vJ)(() => {
								const t = i ? (typeof i == 'string' ? document.querySelector(i) : i) : null,
									q = (0, H.s)(() => {
										setTimeout(() => {
											s && I ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									ee = (se) => {
										O(), d && d(se);
									};
								return (
									t && (M || t.addEventListener('click', ee)),
									window.addEventListener('resize', q),
									() => {
										window.removeEventListener('resize', q), t && t.removeEventListener('click', ee);
									}
								);
							}, []),
							(0, o.Y)(U._, {
								children: (0, o.FD)('div', {
									...te,
									className: D()('ss__modal', { 'ss__modal--open': s }, { 'ss__modal--disabled': M }, u, x),
									ref: w,
									children: [
										!i &&
											l &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (t) => (L ? null : (0, T.iy)(t)),
												'aria-expanded': s,
												role: 'button',
												onClick: (t) => {
													M || (O(), d && d(t));
												},
												children: (0, f.Y)(l, { open: s, toggleOpen: O, treePath: c }),
											}),
										(m || h) &&
											s &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (t) => (L ? null : (0, T.iy)(t)),
												children: [(0, f.Y)(m, { open: s, toggleOpen: O, treePath: c }), (0, f.Y)(h, { open: s, toggleOpen: O, treePath: c })],
											}),
										(0, o.Y)(F.h, { ...oe.overlay, active: !!s }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(V, p, e) {
				e.d(p, { c: () => H });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					B = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('./components/src/utilities/defined.ts'),
					K = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					N = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					f = e('../../node_modules/classnames/index.js'),
					Y = e.n(f),
					z = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					k = e('./components/src/hooks/useA11y.tsx'),
					T = e('./components/src/hooks/useAcRenderedInput.tsx');
				const F = ({ width: C, height: E, theme: A }) => {
						const n = A?.variables;
						return (0, W.AH)({
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
								maxHeight: E ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: C,
								height: E,
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
					H = (0, B.PA)((C) => {
						const E = (0, S.u)(),
							A = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, K.v6)('autocompleteModal', E, A, C),
							[J, y] = (0, _.J0)(!1),
							v = '';
						let l = n.input,
							m = n.buttonSelector;
						l && typeof l == 'string' && (l = document.querySelector(l)), !m && l && (m = l);
						const {
								layout: i,
								disableStyles: h,
								overlayColor: M,
								controller: a,
								renderInput: d,
								className: I,
								internalClassName: $,
								treePath: P,
							} = n,
							L = (0, _.li)(null);
						(0, _.vJ)(() => {
							const c = (X, G) => {
								a.store.state.focusedInput || y(!1), G();
							};
							return (
								a.eventManager.on('focusChange', c),
								() => {
									a.eventManager.events.focusChange?.remove(c);
								}
							);
						}, []);
						const u = () => {
								a.setFocused(), y(!1);
							},
							x = {
								autocompleteLayout: { layout: i, onReset: () => u(), ...(0, D.s)({ disableStyles: h }), theme: n?.theme, treePath: P },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: m,
									onOverlayClick: u,
									overlayColor: M,
									open: J,
									...(0, D.s)({ disableStyles: h }),
									theme: n?.theme,
									treePath: P,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = a.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => u(), icon: 'angle-left' },
									inputName: v,
									...(0, D.s)({ disableStyles: h }),
									theme: n?.theme,
									treePath: `${P} modal`,
								},
							},
							Z = (0, U.Z)(n, F);
						let g;
						l && (g = (0, T.x)({ input: l, controller: a, renderedInputRef: L, renderInput: !!d, buttonSelector: m, setActive: y }));
						const r = { ...n };
						return (
							delete r.width,
							delete r.className,
							delete r.internalClassName,
							delete r.style,
							delete r.styleScript,
							delete r.themeStyleScript,
							i?.length && J
								? (0, o.Y)(b._, {
										children: (0, o.Y)('div', {
											...Z,
											className: Y()('ss__autocomplete-modal', I, $),
											children: (0, o.Y)(N.a, {
												...x.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (c) => (0, k.iy)(c, 0, !0, u),
													children: [
														d ? (0, o.Y)(z.D, { ...x.searchInput, value: a.store.state.input || '', inputRef: L }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(j.h, { ...r, ...x.autocompleteLayout, input: g, controller: a, treePath: `${P} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(V, p, e) {
				e.r(p), e.d(p, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
