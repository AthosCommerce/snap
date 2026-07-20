'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7498],
		{
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'(M, c, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					A = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					R = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					T = e('../../node_modules/classnames/index.js'),
					f = e.n(T),
					y = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					B = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/hooks/useAcRenderedInput.tsx');
				const x = ({}) =>
						(0, A.AH)({
							border: '1px solid #eee',
							'& .ss__autocomplete': { position: 'relative' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					U = (0, O.PA)((W) => {
						const g = (0, C.u)(),
							j = {
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							s = (0, v.v6)('autocompleteSlideout', g, j, W),
							N = '';
						let o = s.input,
							r = s.buttonSelector;
						o && typeof o == 'string' && (o = document.querySelector(o)), !r && o && (r = o);
						const {
								layout: p,
								disableStyles: _,
								slideDirection: Y,
								controller: l,
								overlayColor: b,
								renderInput: E,
								className: F,
								internalClassName: J,
								treePath: u,
								width: $,
							} = s,
							h = (0, a.li)(null),
							i = () => {
								P(!1), l.setFocused();
							},
							d = {
								autocompleteLayout: { onReset: () => i(), layout: p, ...(0, m.s)({ disableStyles: _ }), theme: s?.theme, treePath: u },
								slideout: {
									width: $,
									rerender: !1,
									overlayColor: b,
									slideDirection: Y,
									buttonSelector: r,
									...(0, m.s)({ disableStyles: _ }),
									theme: s?.theme,
									treePath: u,
								},
								searchInput: {
									internalClassName: 'autocomplete-slideout__search-input  autocomplete__search-input',
									inputName: N,
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => i(), icon: 'angle-left' },
									...(0, m.s)({ disableStyles: _ }),
									treePath: `${u} slideout`,
									theme: s?.theme,
								},
							},
							H = (0, S.Z)(s, x),
							[Z, P] = (0, a.J0)(!1);
						let D;
						o &&
							((0, a.vJ)(() => {
								o.addEventListener('click', () => P(!0));
							}),
							(D = (0, K.x)({ input: o, controller: l, renderedInputRef: h, renderInput: !!E, buttonSelector: r })));
						const n = { ...s };
						return (
							delete n.width,
							delete n.className,
							delete n.internalClassName,
							delete n.style,
							delete n.styleScript,
							delete n.themeStyleScript,
							p?.length
								? (0, t.Y)(I._, {
										children: (0, t.Y)(R.S, {
											...H,
											...d.slideout,
											className: f()('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', F, J),
											active: Z,
											children: (0, t.FD)('div', {
												className: 'ss__autocomplete-slideout__inner',
												ref: (z) => (0, B.iy)(z, 0, !0, i),
												children: [
													E ? (0, t.Y)(y.D, { ...d.searchInput, value: l.store.state.input || '', inputRef: h }) : (0, t.Y)(t.FK, {}),
													(0, t.Y)(L.h, { ...n, ...d.autocompleteLayout, input: D, controller: l, treePath: `${u} slideout` }),
												],
											}),
										}),
								  })
								: null
						);
					});
				e.d(c, ['o', 0, U]);
			},
			'./src/Templates/Stores/library/components/AutocompleteSlideout.ts'(M, c, e) {
				e.r(c), e.d(c, { AutocompleteSlideout: () => t.o });
				var t = e('./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx');
			},
		},
	]);
})();
