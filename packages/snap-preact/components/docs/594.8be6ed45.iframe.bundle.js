'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(os, y, s) {
				s.d(y, { x: () => ds });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					I = s('../../node_modules/classnames/index.js'),
					l = s.n(I),
					r = s('../../node_modules/deepmerge/dist/cjs.js'),
					c = s.n(r),
					v = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					_ = s('./components/src/providers/cache.tsx'),
					n = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = s('./components/src/providers/snap.tsx'),
					P = s('./components/src/providers/treePath.tsx'),
					S = s('./components/src/hooks/useA11y.tsx'),
					G = s('./components/src/hooks/useLang.tsx'),
					j = s('./components/src/hooks/useComponent.tsx'),
					ns = s('./components/src/components/Atoms/Image/Image.tsx'),
					rs = s('./components/src/utilities/cloneWithProps.tsx'),
					as = s('./components/src/utilities/defined.ts'),
					ls = s('./components/src/utilities/mergeProps.ts'),
					z = s('./components/src/utilities/mergeStyles.ts'),
					J = s('../../node_modules/colord/index.mjs'),
					is = s('../../node_modules/colord/plugins/names.mjs');
				(0, J.X$)([is.A]);
				const _s = ({ gapSize: L, columns: m, theme: R, disableOverflowAction: F }) =>
					(0, b.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${m}, 1fr)`,
							gap: L,
							gridAutoRows: '1fr',
							'.ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${m} - ${2 * Math.round((m + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${R?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${m} - ${2 * Math.round((m + 2) / 2)}px)`,
								margin: `0 ${L} ${L} 0`,
								'.ss__grid__option__inner': {
									aspectRatio: '1/1',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									margin: 'auto',
									height: '100%',
									'.ss__image': { aspectRatio: '1/1' },
								},
								'.ss__grid__option__label': { cursor: 'pointer' },
								[`:nth-of-type(${m}n)`]: { marginRight: '0' },
								'&.ss__grid__option--selected': { border: `2px solid ${R?.variables?.colors?.primary || '#333'}` },
								'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
								'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
								'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: '50%',
									width: '90%',
									height: '1px',
									borderTop: '3px solid #eee',
									outline: '1px solid #ffff',
									transform: 'rotate(-45deg)',
								},
								'&.ss__grid__option--dark': { color: '#fff' },
								'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						},
						'.ss__grid__show-more-wrapper': {
							'&:not(.ss__grid__option)': { margin: '8px' },
							'&:hover': { cursor: F ? 'initial !important' : 'pointer !important' },
						},
					});
				function ds(L) {
					const m = (0, n.u)(),
						R = (0, M.uk)(),
						cs = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, P.LU)() },
						C = (0, ls.v6)('grid', m, cs, L),
						{
							titleText: V,
							onSelect: a,
							hideLabels: X,
							disableOverflowAction: A,
							multiSelect: H,
							overflowButton: k,
							columns: T,
							rows: N,
							hideShowLess: Y,
							overflowButtonInGrid: O,
							disabled: Z,
							options: f,
							disableStyles: ms,
							onOverflowButtonClick: Q,
							className: $,
							internalClassName: q,
							treePath: U,
							disableA11y: ss,
							customComponent: es,
						} = C;
					if (es) {
						const t = (0, j.x)(R?.templates?.library.import.component.grid || {}, es);
						if (t) return (0, o.Y)(t, { ...C });
					}
					const hs = { image: { internalClassName: 'ss__grid__image', ...(0, as.s)({ disableStyles: ms }), theme: C?.theme, treePath: U } };
					let g = C.selected;
					const ts = (0, z.Z)(C, _s);
					g && !Array.isArray(g) && (g = [g]);
					const [x, e] = (0, u.J0)(g || []),
						[D] = (0, u.J0)(g || []);
					try {
						if (g) {
							const t = JSON.stringify(D),
								d = JSON.stringify(g),
								h = JSON.stringify(x);
							t !== d && d !== h && e(g);
						}
					} catch {}
					const W = (t, d) => {
							if (H) {
								let h;
								x.find((p) => p.value === d.value)
									? ((h = [...x]),
									  h.splice(
											h.findIndex((p) => p.value === d.value),
											1
									  ))
									: (h = [...x, d]),
									a && a(t, d, h),
									e(h);
							} else a && a(t, d, [d]), e([d]);
						},
						B = N && T ? T * N : f.length,
						E = Math.max(0, f.length - (B - (O ? 1 : 0))),
						[i, gs] = (0, u.J0)(!!E),
						us = () => {
							const t = Y ? i : !0,
								d = { showMoreText: { value: O ? `+ ${E}` : 'Show More' }, showLessText: { value: O ? `- ${E}` : 'Show Less' } },
								h = c()(d, C.lang || {}),
								p = (0, G.u)(h, { limited: i, remainder: E });
							return t && E > 0 && f.length !== B
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${O ? 'ss__grid__option' : ''}`,
										onClick: (K) => {
											!A && gs(!i), Q && Q(K, !!i, E);
										},
										role: 'button',
										ref: (K) => (!ss && !A ? (0, S.iy)(K) : null),
										...(i ? p.showMoreText.attributes : p.showLessText.attributes),
										children: k
											? (0, rs.Y)(k, { limited: i, remainder: E, treePath: U })
											: i
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...p.showMoreText.value })
											: E
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...p.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof f == 'object' && f?.length
						? (0, o.Y)(_._, {
								children: (0, o.FD)('div', {
									...ts,
									className: l()('ss__grid', Z ? 'ss__grid--disabled' : '', $, q),
									children: [
										V && (0, o.Y)('h5', { className: 'ss__grid__title', children: V }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												f.map((t, d) => {
													const h = x.some((w) => w.value == t.value);
													let p = !1;
													const K = t.background?.toLowerCase() || (t.backgroundImageUrl ? null : t.value.toString().toLowerCase());
													if (K)
														try {
															const w = (0, J.Mj)(K);
															w.isValid() && (p = w.isDark());
														} catch {}
													if (!i || f.length == B || d < B - (O ? 1 : 0))
														return (0, o.Y)('div', {
															className: l()('ss__grid__option', {
																'ss__grid__option--selected': h,
																'ss__grid__option--disabled': t?.disabled,
																'ss__grid__option--unavailable': t?.available === !1,
																'ss__grid__option--dark': p,
															}),
															onClick: (w) => !Z && !t?.disabled && W(w, t),
															ref: (w) => (0, S.iy)(w),
															title: t.label || t.value.toString(),
															role: 'option',
															'aria-selected': h,
															'aria-disabled': t.disabled,
															children: (0, o.FD)('div', {
																className: l()('ss__grid__option__inner', `ss__grid__option__inner--${v.p(t.value.toString())}`),
																style: { background: t.background ? t.background : t.backgroundImageUrl ? void 0 : t.value },
																children: [
																	!t.background && t.backgroundImageUrl
																		? (0, o.Y)(ns._, { ...hs.image, src: t.backgroundImageUrl, alt: t.label || t.value.toString() })
																		: null,
																	X ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: t.label || t.value }),
																],
															}),
														});
												}),
												O ? (0, o.Y)(us, {}) : null,
											],
										}),
										O ? null : (0, o.Y)(us, {}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(os, y, s) {
				s.d(y, { l: () => L });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					b = s('../../node_modules/classnames/index.js'),
					u = s.n(b),
					I = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = s('./components/src/providers/cache.tsx'),
					r = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = s('./components/src/providers/snap.tsx'),
					v = s('./components/src/providers/treePath.tsx'),
					_ = s('./components/src/hooks/useDisplaySettings.tsx'),
					n = s('./components/src/hooks/useA11y.tsx'),
					M = s('./components/src/hooks/useComponent.tsx'),
					P = s('./components/src/utilities/defined.ts'),
					S = s('./components/src/utilities/mergeProps.ts'),
					G = s('./components/src/utilities/mergeStyles.ts'),
					j = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					ns = s('./components/src/components/Atoms/Image/Image.tsx'),
					rs = s('../../node_modules/deepmerge/dist/cjs.js'),
					as = s.n(rs),
					ls = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					z = s('../../node_modules/colord/index.mjs'),
					J = s('../../node_modules/colord/plugins/names.mjs'),
					is = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					_s = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				(0, z.X$)([J.A]);
				const ds = ({ theme: m }) =>
					(0, I.AH)({
						'.ss__swatches__slideshow__swatch': {
							boxSizing: 'content-box',
							cursor: 'pointer',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: `1px solid ${m?.variables?.colors?.primary || '#333'}`,
							aspectRatio: '1/1',
							flexDirection: 'column',
							'.ss__swatches__slideshow__swatch__inner': {
								aspectRatio: '1/1',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
							},
							'&.ss__swatches__slideshow__swatch--selected': { border: `2px solid ${m?.variables?.colors?.primary || '#333'}` },
							'&.ss__swatches__slideshow__swatch--disabled:before, &.ss__swatches__slideshow__swatch--unavailable:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: '50%',
								width: '90%',
								height: '1px',
								borderTop: '3px solid #eee',
								outline: '1px solid #ffff',
								transform: 'rotate(-45deg)',
							},
							'&.ss__swatches__slideshow__swatch--disabled': { position: 'relative', cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
							'&.ss__swatches__slideshow__swatch--unavailable': { cursor: 'pointer', opacity: 0.5 },
							'&.ss__swatches__slideshow__swatch--dark': { color: '#fff' },
						},
					});
				function L(m) {
					const R = (0, r.u)(),
						F = (0, c.uk)(),
						cs = (0, v.LU)(),
						C = {
							0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
							768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
							1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
						},
						V = { type: 'slideshow', hideLabels: !0, treePath: cs };
					let a = (0, S.v6)('swatches', R, V, m);
					const X = a.breakpoints || (a.type == 'slideshow' ? C : {}),
						A = (0, _.X)(X);
					if (A && Object.keys(A).length) {
						const e = as()(a?.theme || {}, A?.theme || {}, { arrayMerge: (D, W) => W });
						a = { ...a, ...A, theme: e };
					}
					const {
						onSelect: H,
						disabled: k,
						options: T,
						hideLabels: N,
						disableStyles: Y,
						className: O,
						internalClassName: Z,
						type: f,
						slideshow: ms,
						grid: Q,
						treePath: $,
						customComponent: q,
					} = a;
					if (q) {
						const e = (0, M.x)(F?.templates?.library.import.component.swatches || {}, q);
						if (e) return (0, o.Y)(e, { ...a });
					}
					const U = {
							slideshow: {
								internalClassName: 'ss__swatches__slideshow',
								loop: !1,
								slidesToShow: 6,
								slidesToMove: 1,
								gap: 8,
								showNavigation: !0,
								showPagination: !1,
								autoPlay: !1,
								...ms,
								...(0, P.s)({ breakpoints: X, disableStyles: Y }),
								theme: a?.theme,
								treePath: $,
							},
							grid: {
								internalClassName: 'ss__swatches__grid',
								hideLabels: N,
								overflowButtonInGrid: !0,
								disableOverflowAction: !0,
								rows: 1,
								columns: 6,
								...Q,
								...(0, P.s)({ disableStyles: Y }),
								theme: a?.theme,
								treePath: $,
							},
							image: { internalClassName: 'ss__swatches__image', ...(0, P.s)({ disableStyles: Y }), theme: a?.theme, treePath: $ },
						},
						ss = a.selected,
						es = (0, G.Z)(a, ds),
						[hs, g] = (0, _s.J0)(ss || void 0),
						ts = (e, D) => {
							H && H(e, D), g(D);
						},
						x = [];
					return (
						f == 'slideshow' &&
							T.forEach((e) => {
								const D = e.label,
									W = hs?.value == e.value;
								let B = !1;
								const E = e.background?.toLowerCase() || (e.backgroundImageUrl ? null : e.value?.toString().toLowerCase());
								if (E)
									try {
										const i = (0, z.Mj)(E);
										i.isValid() && (B = i.isDark());
									} catch {}
								x.push({
									onClick: (i) => !k && !e?.disabled && ts(i, e),
									content: (0, o.Y)('div', {
										className: u()('ss__swatches__slideshow__swatch', {
											'ss__swatches__slideshow__swatch--selected': W,
											'ss__swatches__slideshow__swatch--disabled': e?.disabled,
											'ss__swatches__slideshow__swatch--unavailable': e?.available === !1,
											'ss__swatches__slideshow__swatch--dark': B,
										}),
										title: D,
										ref: (i) => (0, n.iy)(i),
										'aria-disabled': e.disabled || e?.available === !1,
										role: 'option',
										'aria-selected': W,
										children: (0, o.FD)('div', {
											className: u()(
												'ss__swatches__slideshow__swatch__inner',
												`ss__swatches__slideshow__swatch__inner--${ls.p(e.value?.toString())}`
											),
											style: { background: e.background ? e.background : e.backgroundImageUrl ? '' : e.value },
											children: [
												!e.background && e.backgroundImageUrl
													? (0, o.Y)(ns._, { ...U.image, src: e.backgroundImageUrl, alt: e.label || e.value?.toString() })
													: null,
												!N && (0, o.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: D || e.value }),
											],
										}),
									}),
								});
							}),
						typeof T == 'object' && T?.length
							? (0, o.Y)(l._, {
									children: (0, o.Y)('div', {
										...es,
										className: u()('ss__swatches', O, Z),
										children:
											f == 'slideshow'
												? (0, o.Y)(is.b, { slides: x, ...U.slideshow })
												: (0, o.Y)(j.x, {
														...U.grid,
														options: T,
														onSelect: (e, D) => {
															!k && ts(e, D);
														},
														selected: ss,
												  }),
									}),
							  })
							: null
					);
				}
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(os, y, s) {
				s.d(y, { I: () => I, r: () => u });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = s('../../node_modules/dequal/dist/index.mjs');
				function u(l) {
					const r = (0, o.li)(l),
						c = (0, o.li)(0);
					return (0, b.j)(l, r.current) || ((r.current = l), (c.current += 1)), (0, o.Kr)(() => r.current, [c.current]);
				}
				function I(l, r) {
					return (0, o.vJ)(l, [u(r)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(os, y, s) {
				s.d(y, { Q: () => l, X: () => I });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					u = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function I(r) {
					if (!r || !Object.keys(r).length) return;
					const [c, v] = (0, o.J0)(l(r));
					let _;
					const n = () => {
						function M() {
							v(l(r));
						}
						(_ = (0, b.s)(() => {
							M();
						}, 50)),
							window.addEventListener('resize', _);
					};
					return (
						(0, o.vJ)(() => (n(), () => window.removeEventListener('resize', _)), []),
						(0, u.I)(() => {
							v(l(r)), n();
						}, [r]),
						c
					);
				}
				const l = (r) => {
					let c;
					const v = window.innerWidth,
						_ = Object.keys(r)
							.map((n) => +n)
							.sort((n, M) => n - M)
							.map((n) => ({ [n]: r[n] }));
					if (_.length) {
						for (let n = 0; n < _.length; n++) {
							const M = _[n],
								P = parseInt(Object.keys(M)[0]);
							if (n + 1 === _.length || (n === 0 && v < P)) {
								c = _[n][P];
								break;
							} else {
								const j = parseInt(Object.keys(_[n + 1])[0]);
								if (v >= P && v < j) {
									c = _[n][P];
									break;
								}
							}
						}
						return c;
					}
					return c;
				};
			},
		},
	]);
})();
