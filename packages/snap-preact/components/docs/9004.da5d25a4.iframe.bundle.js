'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(V, u, e) {
				e.d(u, { a: () => D });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					M = e.n(U),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('./components/src/providers/cache.tsx'),
					j = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/snap.tsx'),
					Y = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/hooks/useClickOutside.tsx'),
					k = e('./components/src/hooks/useComponent.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					F = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					J = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/hooks/useA11y.tsx'),
					$ = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					O = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const p = () =>
						(0, K.AH)({
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
					D = (0, b.PA)((n) => {
						const L = (0, j.u)(),
							T = (0, N.uk)(),
							Z = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, Y.LU)() },
							s = (0, H.v6)('modal', L, Z, n),
							{
								button: m,
								content: f,
								buttonSelector: r,
								children: R,
								disabled: a,
								open: C,
								onClick: E,
								lockScroll: A,
								startOpen: v,
								disableClickOutside: B,
								disableA11y: c,
								className: y,
								internalClassName: G,
								disableStyles: g,
								overlayColor: i,
								onOverlayClick: d,
								treePath: W,
								customComponent: w,
							} = s;
						if (w) {
							const t = (0, k.x)(T?.templates?.library.import.component.modal || {}, w);
							if (t) return (0, o.Y)(t, { ...s });
						}
						const te = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (t) => {
									d && d(t), h();
								},
								...(0, F.s)({ disableStyles: g, color: i }),
								theme: s?.theme,
								treePath: W,
							},
						};
						let l, I;
						const Q = C === void 0;
						Q ? ([l, I] = (0, _.J0)(v)) : (l = C);
						let q;
						B ||
							(q = (0, z.L)(() => {
								l && (a || (Q && I && I(!1)));
							}));
						const h = () => {
								Q && I && I((t) => !t);
							},
							se = (0, J.Z)(s, p);
						return (
							(0, _.vJ)(
								() => (
									l && A ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[l, A]
							),
							(0, _.vJ)(() => {
								const t = r ? (typeof r == 'string' ? document.querySelector(r) : r) : null,
									ee = (0, O.s)(() => {
										setTimeout(() => {
											l && A ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									oe = (ne) => {
										h(), E && E(ne);
									};
								return (
									t && (a || t.addEventListener('click', oe)),
									window.addEventListener('resize', ee),
									() => {
										window.removeEventListener('resize', ee), t && t.removeEventListener('click', oe);
									}
								);
							}, []),
							(0, o.Y)(S._, {
								children: (0, o.FD)('div', {
									...se,
									className: M()('ss__modal', { 'ss__modal--open': l }, { 'ss__modal--disabled': a }, y, G),
									ref: q,
									children: [
										!r &&
											m &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (t) => (c ? null : (0, x.iy)(t)),
												'aria-expanded': l,
												role: 'button',
												onClick: (t) => {
													a || (h(), E && E(t));
												},
												children: (0, P.Y)(m, { open: l, toggleOpen: h, treePath: W }),
											}),
										(f || R) &&
											l &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (t) => (c ? null : (0, x.iy)(t)),
												children: [(0, P.Y)(f, { open: l, toggleOpen: h, treePath: W }), (0, P.Y)(R, { open: l, toggleOpen: h, treePath: W })],
											}),
										(0, o.Y)($.h, { ...te.overlay, active: !!l }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(V, u, e) {
				e.d(u, { c: () => $ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					z = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					k = e('../../node_modules/classnames/index.js'),
					P = e.n(k),
					F = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					H = e('./components/src/hooks/useA11y.tsx'),
					J = e('./components/src/hooks/useAcRenderedInput.tsx');
				const x = ({ width: O, height: p, theme: D }) => {
						const n = D?.variables;
						return (0, U.AH)({
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
								maxHeight: p ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: O,
								height: p,
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
					$ = (0, K.PA)((O) => {
						const p = (0, N.u)(),
							D = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, b.v6)('autocompleteModal', p, D, O),
							[L, T] = (0, _.J0)(!1),
							[X, Z] = (0, _.J0)('query');
						let s = n.input,
							m = n.buttonSelector;
						if (s) {
							typeof s == 'string' && (s = document.querySelector(s));
							const d = s?.getAttribute('name');
							d && (Z(d), n.renderInput && s.setAttribute('name', ''));
						}
						!m && s && (m = s);
						const {
								layout: f,
								disableStyles: r,
								overlayColor: R,
								controller: a,
								renderInput: C,
								className: E,
								internalClassName: A,
								treePath: v,
							} = n,
							B = (0, _.li)(null),
							c = () => {
								a.setFocused(), T(!1);
							},
							y = {
								autocompleteLayout: { layout: f, onReset: () => c(), ...(0, M.s)({ disableStyles: r }), theme: n?.theme, treePath: v },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: m,
									onOverlayClick: () => c(),
									overlayColor: R,
									open: L,
									...(0, M.s)({ disableStyles: r }),
									theme: n?.theme,
									treePath: v,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = a.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => c(), icon: 'angle-left' },
									inputName: X,
									...(0, M.s)({ disableStyles: r }),
									theme: n?.theme,
									treePath: `${v} modal`,
								},
							},
							G = (0, S.Z)(n, x);
						let g;
						s && (g = (0, J.x)({ input: s, controller: a, renderedInputRef: B, renderInput: !!C, buttonSelector: m, setActive: T }));
						const i = { ...n };
						return (
							delete i.width,
							delete i.className,
							delete i.internalClassName,
							delete i.style,
							delete i.styleScript,
							delete i.themeStyleScript,
							f?.length && L
								? (0, o.Y)(j._, {
										children: (0, o.Y)('div', {
											...G,
											className: P()('ss__autocomplete-modal', E, A),
											children: (0, o.Y)(z.a, {
												...y.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (d) => (0, H.iy)(d, 0, !0, c),
													children: [
														C ? (0, o.Y)(F.D, { ...y.searchInput, value: a.store.state.input || '', inputRef: B }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(Y.h, { ...i, ...y.autocompleteLayout, input: g, controller: a, treePath: `${v} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(V, u, e) {
				e.r(u), e.d(u, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
