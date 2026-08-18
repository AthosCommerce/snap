'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7498],
		{
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'(v, r, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					S = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					y = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					B = e('../../node_modules/classnames/index.js'),
					K = e.n(B),
					x = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					U = e('./components/src/hooks/useA11y.tsx'),
					W = e('./components/src/hooks/useAcRenderedInput.tsx');
				const g = ({}) =>
						(0, I.AH)({
							border: '1px solid #eee',
							'& .ss__autocomplete': { position: 'relative' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					j = (0, S.PA)((N) => {
						const b = (0, R.u)(),
							Y = {
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['tabSelection'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							o = (0, C.v6)('autocompleteSlideout', b, Y, N),
							F = '';
						let s = o.input,
							a = o.buttonSelector;
						s && typeof s == 'string' && (s = document.querySelector(s)), !a && s && (a = s);
						const {
							layout: h,
							disableStyles: d,
							slideDirection: J,
							overlayColor: $,
							renderInput: P,
							className: H,
							internalClassName: Z,
							treePath: u,
							width: z,
							tabManager: c,
						} = o;
						let l = o.controller,
							M = [l];
						c && c.active && ((l = c.active?.controller), (M = c.tabs.map((E) => E.controller)));
						const D = (0, m.li)(null),
							i = () => {
								O(!1), l.setFocused();
							},
							p = {
								autocompleteLayout: { onReset: () => i(), layout: h, tabManager: c, ...(0, _.s)({ disableStyles: d }), theme: o?.theme, treePath: u },
								slideout: {
									width: z,
									rerender: !1,
									overlayColor: $,
									slideDirection: J,
									buttonSelector: a,
									...(0, _.s)({ disableStyles: d }),
									theme: o?.theme,
									treePath: u,
								},
								searchInput: {
									internalClassName: 'autocomplete-slideout__search-input  autocomplete__search-input',
									inputName: F,
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => i(), icon: 'angle-left' },
									...(0, _.s)({ disableStyles: d }),
									treePath: `${u} slideout`,
									theme: o?.theme,
								},
							},
							G = (0, L.Z)(o, g),
							[Q, O] = (0, m.J0)(!1);
						let A;
						s &&
							((0, m.vJ)(() => {
								s.addEventListener('click', () => O(!0));
							}),
							(A = (0, W.x)({ input: s, controllers: M, renderedInputRef: D, renderInput: !!P, buttonSelector: a })));
						const n = { ...o };
						return (
							delete n.width,
							delete n.className,
							delete n.internalClassName,
							delete n.style,
							delete n.styleScript,
							delete n.themeStyleScript,
							h?.length
								? (0, t.Y)(f._, {
										children: (0, t.Y)(y.S, {
											...G,
											...p.slideout,
											className: K()('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', H, Z),
											active: Q,
											children: (0, t.FD)('div', {
												className: 'ss__autocomplete-slideout__inner',
												ref: (E) => (0, U.iy)(E, 0, !0, i),
												children: [
													P ? (0, t.Y)(x.D, { ...p.searchInput, value: l.store.state.input || '', inputRef: D }) : (0, t.Y)(t.FK, {}),
													(0, t.Y)(T.h, { ...n, ...p.autocompleteLayout, input: A, controller: l, treePath: `${u} slideout` }),
												],
											}),
										}),
								  })
								: null
						);
					});
				e.d(r, ['o', 0, j]);
			},
			'./src/Templates/Stores/library/components/AutocompleteSlideout.ts'(v, r, e) {
				e.r(r), e.d(r, { AutocompleteSlideout: () => t.o });
				var t = e('./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx');
			},
		},
	]);
})();
