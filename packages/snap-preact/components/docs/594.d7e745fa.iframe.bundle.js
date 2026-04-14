'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(ss, b, s) {
				s.d(b, { x: () => is });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
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
					K = s('./components/src/hooks/useA11y.tsx'),
					$ = s('./components/src/hooks/useLang.tsx'),
					S = s('./components/src/hooks/useComponent.tsx'),
					es = s('./components/src/components/Atoms/Image/Image.tsx'),
					ts = s('./components/src/utilities/cloneWithProps.tsx'),
					os = s('./components/src/utilities/defined.ts'),
					ns = s('./components/src/utilities/mergeProps.ts'),
					rs = s('./components/src/utilities/mergeStyles.ts'),
					as = s('../../node_modules/color/index.js'),
					ls = s.n(as);
				const _s = ({ gapSize: L, columns: m, theme: R, disableOverflowAction: G }) =>
					(0, y.AH)({
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
							'&:hover': { cursor: G ? 'initial !important' : 'pointer !important' },
						},
					});
				function is(L) {
					const m = (0, n.u)(),
						R = (0, M.uk)(),
						ds = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, P.LU)() },
						w = (0, ns.v6)('grid', m, ds, L),
						{
							titleText: z,
							onSelect: a,
							hideLabels: J,
							disableOverflowAction: A,
							multiSelect: F,
							overflowButton: k,
							columns: T,
							rows: j,
							hideShowLess: N,
							overflowButtonInGrid: O,
							disabled: H,
							options: f,
							disableStyles: cs,
							onOverflowButtonClick: V,
							className: Y,
							internalClassName: X,
							treePath: U,
							disableA11y: Z,
							customComponent: Q,
						} = w;
					if (Q) {
						const t = (0, S.x)(R?.templates?.library.import.component.grid || {}, Q);
						if (t) return (0, o.Y)(t, { ...w });
					}
					const ms = { image: { internalClassName: 'ss__grid__image', ...(0, os.s)({ disableStyles: cs }), theme: w?.theme, treePath: U } };
					let g = w.selected;
					const q = (0, rs.Z)(w, _s);
					g && !Array.isArray(g) && (g = [g]);
					const [C, e] = (0, u.J0)(g || []),
						[D] = (0, u.J0)(g || []);
					try {
						if (g) {
							const t = JSON.stringify(D),
								d = JSON.stringify(g),
								h = JSON.stringify(C);
							t !== d && d !== h && e(g);
						}
					} catch {}
					const W = (t, d) => {
							if (F) {
								let h;
								C.find((E) => E.value === d.value)
									? ((h = [...C]),
									  h.splice(
											h.findIndex((E) => E.value === d.value),
											1
									  ))
									: (h = [...C, d]),
									a && a(t, d, h),
									e(h);
							} else a && a(t, d, [d]), e([d]);
						},
						B = j && T ? T * j : f.length,
						i = Math.max(0, f.length - (B - (O ? 1 : 0))),
						[x, us] = (0, u.J0)(!!i),
						hs = () => {
							const t = N ? x : !0,
								d = { showMoreText: { value: O ? `+ ${i}` : 'Show More' }, showLessText: { value: O ? `- ${i}` : 'Show Less' } },
								h = c()(d, w.lang || {}),
								E = (0, $.u)(h, { limited: x, remainder: i });
							return t && i > 0 && f.length !== B
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${O ? 'ss__grid__option' : ''}`,
										onClick: (p) => {
											!A && us(!x), V && V(p, !!x, i);
										},
										role: 'button',
										ref: (p) => (!Z && !A ? (0, K.iy)(p) : null),
										...(x ? E.showMoreText.attributes : E.showLessText.attributes),
										children: k
											? (0, ts.Y)(k, { limited: x, remainder: i, treePath: U })
											: x
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...E.showMoreText.value })
											: i
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...E.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof f == 'object' && f?.length
						? (0, o.Y)(_._, {
								children: (0, o.FD)('div', {
									...q,
									className: l()('ss__grid', H ? 'ss__grid--disabled' : '', Y, X),
									children: [
										z && (0, o.Y)('h5', { className: 'ss__grid__title', children: z }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												f.map((t, d) => {
													const h = C.some((p) => p.value == t.value);
													let E = !1;
													try {
														E = new (ls())(
															t.background ? t.background.toLowerCase() : t.backgroundImageUrl ? '' : t.value.toString().toLowerCase()
														).isDark();
													} catch {}
													if (!x || f.length == B || d < B - (O ? 1 : 0))
														return (0, o.Y)('div', {
															className: l()('ss__grid__option', {
																'ss__grid__option--selected': h,
																'ss__grid__option--disabled': t?.disabled,
																'ss__grid__option--unavailable': t?.available === !1,
																'ss__grid__option--dark': E,
															}),
															onClick: (p) => !H && !t?.disabled && W(p, t),
															ref: (p) => (0, K.iy)(p),
															title: t.label || t.value.toString(),
															role: 'option',
															'aria-selected': h,
															'aria-disabled': t.disabled,
															children: (0, o.FD)('div', {
																className: l()('ss__grid__option__inner', `ss__grid__option__inner--${v.p(t.value.toString())}`),
																style: { background: t.background ? t.background : t.backgroundImageUrl ? void 0 : t.value },
																children: [
																	!t.background && t.backgroundImageUrl
																		? (0, o.Y)(es._, { ...ms.image, src: t.backgroundImageUrl, alt: t.label || t.value.toString() })
																		: null,
																	J ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: t.label || t.value }),
																],
															}),
														});
												}),
												O ? (0, o.Y)(hs, {}) : null,
											],
										}),
										O ? null : (0, o.Y)(hs, {}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(ss, b, s) {
				s.d(b, { l: () => L });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = s('../../node_modules/classnames/index.js'),
					u = s.n(y),
					I = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = s('./components/src/providers/cache.tsx'),
					r = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = s('./components/src/providers/snap.tsx'),
					v = s('./components/src/providers/treePath.tsx'),
					_ = s('./components/src/hooks/useDisplaySettings.tsx'),
					n = s('./components/src/hooks/useA11y.tsx'),
					M = s('./components/src/hooks/useComponent.tsx'),
					P = s('./components/src/utilities/defined.ts'),
					K = s('./components/src/utilities/mergeProps.ts'),
					$ = s('./components/src/utilities/mergeStyles.ts'),
					S = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					es = s('./components/src/components/Atoms/Image/Image.tsx'),
					ts = s('../../node_modules/deepmerge/dist/cjs.js'),
					os = s.n(ts),
					ns = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					rs = s('../../node_modules/color/index.js'),
					as = s.n(rs),
					ls = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					_s = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const is = ({ theme: m }) =>
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
						G = (0, c.uk)(),
						ds = (0, v.LU)(),
						w = {
							0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
							768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
							1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
						},
						z = { type: 'slideshow', hideLabels: !0, treePath: ds };
					let a = (0, K.v6)('swatches', R, z, m);
					const J = a.breakpoints || (a.type == 'slideshow' ? w : {}),
						A = (0, _.X)(J);
					if (A && Object.keys(A).length) {
						const e = os()(a?.theme || {}, A?.theme || {}, { arrayMerge: (D, W) => W });
						a = { ...a, ...A, theme: e };
					}
					const {
						onSelect: F,
						disabled: k,
						options: T,
						hideLabels: j,
						disableStyles: N,
						className: O,
						internalClassName: H,
						type: f,
						slideshow: cs,
						grid: V,
						treePath: Y,
						customComponent: X,
					} = a;
					if (X) {
						const e = (0, M.x)(G?.templates?.library.import.component.swatches || {}, X);
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
								...cs,
								...(0, P.s)({ breakpoints: J, disableStyles: N }),
								theme: a?.theme,
								treePath: Y,
							},
							grid: {
								internalClassName: 'ss__swatches__grid',
								hideLabels: j,
								overflowButtonInGrid: !0,
								disableOverflowAction: !0,
								rows: 1,
								columns: 6,
								...V,
								...(0, P.s)({ disableStyles: N }),
								theme: a?.theme,
								treePath: Y,
							},
							image: { internalClassName: 'ss__swatches__image', ...(0, P.s)({ disableStyles: N }), theme: a?.theme, treePath: Y },
						},
						Z = a.selected,
						Q = (0, $.Z)(a, is),
						[ms, g] = (0, _s.J0)(Z || void 0),
						q = (e, D) => {
							F && F(e, D), g(D);
						},
						C = [];
					return (
						f == 'slideshow' &&
							T.forEach((e) => {
								const D = e.label,
									W = ms?.value == e.value;
								let B = !1;
								try {
									B = new (as())(e.background ? e.background.toLowerCase() : e.backgroundImageUrl ? '' : e.value.toString().toLowerCase()).isDark();
								} catch {}
								C.push({
									onClick: (i) => !k && !e?.disabled && q(i, e),
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
												`ss__swatches__slideshow__swatch__inner--${ns.p(e.value?.toString())}`
											),
											style: { background: e.background ? e.background : e.backgroundImageUrl ? '' : e.value },
											children: [
												!e.background && e.backgroundImageUrl
													? (0, o.Y)(es._, { ...U.image, src: e.backgroundImageUrl, alt: e.label || e.value?.toString() })
													: null,
												!j && (0, o.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: D || e.value }),
											],
										}),
									}),
								});
							}),
						typeof T == 'object' && T?.length
							? (0, o.Y)(l._, {
									children: (0, o.Y)('div', {
										...Q,
										className: u()('ss__swatches', O, H),
										children:
											f == 'slideshow'
												? (0, o.Y)(ls.b, { slides: C, ...U.slideshow })
												: (0, o.Y)(S.x, {
														...U.grid,
														options: T,
														onSelect: (e, D) => {
															!k && q(e, D);
														},
														selected: Z,
												  }),
									}),
							  })
							: null
					);
				}
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(ss, b, s) {
				s.d(b, { I: () => I, r: () => u });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = s('../../node_modules/dequal/dist/index.mjs');
				function u(l) {
					const r = (0, o.li)(l),
						c = (0, o.li)(0);
					return (0, y.j)(l, r.current) || ((r.current = l), (c.current += 1)), (0, o.Kr)(() => r.current, [c.current]);
				}
				function I(l, r) {
					return (0, o.vJ)(l, [u(r)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(ss, b, s) {
				s.d(b, { Q: () => l, X: () => I });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					u = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function I(r) {
					if (!r || !Object.keys(r).length) return;
					const [c, v] = (0, o.J0)(l(r));
					let _;
					const n = () => {
						function M() {
							v(l(r));
						}
						(_ = (0, y.s)(() => {
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
								const S = parseInt(Object.keys(_[n + 1])[0]);
								if (v >= P && v < S) {
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
