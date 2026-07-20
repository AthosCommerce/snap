'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(ts, w, s) {
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					I = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = s('../../node_modules/classnames/index.js'),
					r = s.n(y),
					l = s('../../node_modules/deepmerge/dist/cjs.js'),
					c = s.n(l),
					P = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					_ = s('../../node_modules/mobx-react-lite/es/index.js'),
					n = s('./components/src/providers/cache.tsx'),
					g = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = s('./components/src/providers/treePath.tsx'),
					W = s('./components/src/hooks/useA11y.tsx'),
					z = s('./components/src/hooks/useLang.tsx'),
					K = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					os = s('./components/src/components/Atoms/Image/Image.tsx'),
					ns = s('./components/src/utilities/cloneWithProps.tsx'),
					ls = s('./components/src/utilities/defined.ts'),
					as = s('./components/src/utilities/mergeProps.ts'),
					J = s('./components/src/utilities/mergeStyles.ts'),
					F = s('../../node_modules/colord/index.mjs'),
					rs = s('../../node_modules/colord/plugins/names.mjs');
				(0, F.X$)([rs.A]);
				const is = ({ gapSize: L, columns: m, theme: S, disableOverflowAction: j }) =>
						(0, I.AH)({
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
									border: `1px solid ${S?.variables?.colors?.primary || '#333'}`,
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
									'&.ss__grid__option--selected': { border: `2px solid ${S?.variables?.colors?.primary || '#333'}` },
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
								'&:hover': { cursor: j ? 'initial !important' : 'pointer !important' },
							},
						}),
					_s = (0, _.PA)((L) => {
						const m = (0, g.u)(),
							j = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, C.LU)() },
							x = (0, as.v6)('grid', m, j, L),
							{
								titleText: V,
								onSelect: a,
								hideLabels: X,
								disableOverflowAction: A,
								multiSelect: H,
								overflowButton: k,
								columns: T,
								rows: N,
								hideShowLess: $,
								overflowButtonInGrid: M,
								disabled: Z,
								options: D,
								disableStyles: ds,
								onOverflowButtonClick: Q,
								className: Y,
								internalClassName: cs,
								treePath: q,
								disableA11y: G,
							} = x,
							{ overrideElement: ss, shouldRenderDefault: ms } = (0, K._)('grid', x);
						if (!ms) return ss;
						const hs = { image: { internalClassName: 'ss__grid__image', ...(0, ls.s)({ disableStyles: ds }), theme: x?.theme, treePath: q } };
						let E = x.selected;
						const es = (0, J.Z)(x, is);
						E && !Array.isArray(E) && (E = [E]);
						const [b, e] = (0, u.J0)(E || []),
							[f] = (0, u.J0)(E || []);
						try {
							if (E) {
								const t = JSON.stringify(f),
									d = JSON.stringify(E),
									h = JSON.stringify(b);
								t !== d && d !== h && e(E);
							}
						} catch {}
						const B = (t, d) => {
								if (H) {
									let h;
									b.find((p) => p.value === d.value)
										? ((h = [...b]),
										  h.splice(
												h.findIndex((p) => p.value === d.value),
												1
										  ))
										: (h = [...b, d]),
										a && a(t, d, h),
										e(h);
								} else a && a(t, d, [d]), e([d]);
							},
							R = N && T ? T * N : D.length,
							v = Math.max(0, D.length - (R - (M ? 1 : 0))),
							[i, gs] = (0, u.J0)(!!v),
							us = () => {
								const t = $ ? i : !0,
									d = { showMoreText: { value: M ? `+ ${v}` : 'Show More' }, showLessText: { value: M ? `- ${v}` : 'Show Less' } },
									h = c()(d, x.lang || {}),
									p = (0, z.u)(h, { limited: i, remainder: v });
								return t && v > 0 && D.length !== R
									? (0, o.Y)('div', {
											className: `ss__grid__show-more-wrapper ${M ? 'ss__grid__option' : ''}`,
											onClick: (U) => {
												!A && gs(!i), Q && Q(U, !!i, v);
											},
											role: 'button',
											ref: (U) => (!G && !A ? (0, W.iy)(U) : null),
											...(i ? p.showMoreText.attributes : p.showLessText.attributes),
											children: k
												? (0, ns.Y)(k, { limited: i, remainder: v, treePath: q })
												: i
												? (0, o.Y)('span', { className: 'ss__grid__show-more', ...p.showMoreText.value })
												: v
												? (0, o.Y)('span', { className: 'ss__grid__show-less', ...p.showLessText.value })
												: null,
									  })
									: null;
							};
						return typeof D == 'object' && D?.length
							? (0, o.Y)(n._, {
									children: (0, o.FD)('div', {
										...es,
										className: r()('ss__grid', Z ? 'ss__grid--disabled' : '', Y, cs),
										children: [
											V && (0, o.Y)('h5', { className: 'ss__grid__title', children: V }),
											(0, o.FD)('div', {
												className: 'ss__grid__options',
												children: [
													D.map((t, d) => {
														const h = b.some((O) => O.value == t.value);
														let p = !1;
														const U = t.background?.toLowerCase() || (t.backgroundImageUrl ? null : t.value.toString().toLowerCase());
														if (U)
															try {
																const O = (0, F.Mj)(U);
																O.isValid() && (p = O.isDark());
															} catch {}
														if (!i || D.length == R || d < R - (M ? 1 : 0))
															return (0, o.Y)('div', {
																className: r()('ss__grid__option', {
																	'ss__grid__option--selected': h,
																	'ss__grid__option--disabled': t?.disabled,
																	'ss__grid__option--unavailable': t?.available === !1,
																	'ss__grid__option--dark': p,
																}),
																onClick: (O) => !Z && !t?.disabled && B(O, t),
																ref: (O) => (0, W.iy)(O),
																title: t.label || t.value.toString(),
																role: 'option',
																'aria-selected': h,
																'aria-disabled': t.disabled,
																children: (0, o.FD)('div', {
																	className: r()('ss__grid__option__inner', `ss__grid__option__inner--${P.p(t.value.toString())}`),
																	style: { background: t.background ? t.background : t.backgroundImageUrl ? void 0 : t.value },
																	children: [
																		!t.background && t.backgroundImageUrl
																			? (0, o.Y)(os._, { ...hs.image, src: t.backgroundImageUrl, alt: t.label || t.value.toString() })
																			: null,
																		X ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: t.label || t.value }),
																	],
																}),
															});
													}),
													M ? (0, o.Y)(us, {}) : null,
												],
											}),
											M ? null : (0, o.Y)(us, {}),
										],
									}),
							  })
							: null;
					});
				s.d(w, ['x', 0, _s]);
			},
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(ts, w, s) {
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					I = s('../../node_modules/classnames/index.js'),
					u = s.n(I),
					y = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = s('./components/src/providers/cache.tsx'),
					l = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = s('./components/src/providers/treePath.tsx'),
					P = s('./components/src/hooks/useDisplaySettings.tsx'),
					_ = s('./components/src/hooks/useA11y.tsx'),
					n = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = s('./components/src/utilities/defined.ts'),
					C = s('./components/src/utilities/mergeProps.ts'),
					W = s('./components/src/utilities/mergeStyles.ts'),
					z = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					K = s('./components/src/components/Atoms/Image/Image.tsx'),
					os = s('../../node_modules/mobx-react-lite/es/index.js'),
					ns = s('../../node_modules/deepmerge/dist/cjs.js'),
					ls = s.n(ns),
					as = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					J = s('../../node_modules/colord/index.mjs'),
					F = s('../../node_modules/colord/plugins/names.mjs'),
					rs = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					is = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				(0, J.X$)([F.A]);
				const _s = ({ theme: m }) =>
						(0, y.AH)({
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
						}),
					L = (0, os.PA)((m) => {
						const S = (0, l.u)(),
							j = (0, c.LU)(),
							x = {
								0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
								768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
								1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
							},
							V = { type: 'slideshow', hideLabels: !0, treePath: j };
						let a = (0, C.v6)('swatches', S, V, m);
						const X = a.breakpoints || (a.type == 'slideshow' ? x : {}),
							A = (0, P.X)(X);
						if (A && Object.keys(A).length) {
							const e = ls()(a?.theme || {}, A?.theme || {}, { arrayMerge: (f, B) => B });
							a = { ...a, ...A, theme: e };
						}
						const {
								onSelect: H,
								disabled: k,
								options: T,
								hideLabels: N,
								disableStyles: $,
								className: M,
								internalClassName: Z,
								type: D,
								slideshow: ds,
								grid: Q,
								treePath: Y,
							} = a,
							{ overrideElement: cs, shouldRenderDefault: q } = (0, n._)('swatches', a);
						if (!q) return cs;
						const G = {
								slideshow: {
									internalClassName: 'ss__swatches__slideshow',
									loop: !1,
									slidesToShow: 6,
									slidesToMove: 1,
									gap: 8,
									showNavigation: !0,
									showPagination: !1,
									autoPlay: !1,
									...ds,
									...(0, g.s)({ breakpoints: X, disableStyles: $ }),
									theme: a?.theme,
									treePath: Y,
								},
								grid: {
									internalClassName: 'ss__swatches__grid',
									hideLabels: N,
									overflowButtonInGrid: !0,
									disableOverflowAction: !0,
									rows: 1,
									columns: 6,
									...Q,
									...(0, g.s)({ disableStyles: $ }),
									theme: a?.theme,
									treePath: Y,
								},
								image: { internalClassName: 'ss__swatches__image', ...(0, g.s)({ disableStyles: $ }), theme: a?.theme, treePath: Y },
							},
							ss = a.selected,
							ms = (0, W.Z)(a, _s),
							[hs, E] = (0, is.J0)(ss || void 0),
							es = (e, f) => {
								H && H(e, f), E(f);
							},
							b = [];
						return (
							D == 'slideshow' &&
								T.forEach((e) => {
									const f = e.label,
										B = hs?.value == e.value;
									let R = !1;
									const v = e.background?.toLowerCase() || (e.backgroundImageUrl ? null : e.value?.toString().toLowerCase());
									if (v)
										try {
											const i = (0, J.Mj)(v);
											i.isValid() && (R = i.isDark());
										} catch {}
									b.push({
										onClick: (i) => !k && !e?.disabled && es(i, e),
										content: (0, o.Y)('div', {
											className: u()('ss__swatches__slideshow__swatch', {
												'ss__swatches__slideshow__swatch--selected': B,
												'ss__swatches__slideshow__swatch--disabled': e?.disabled,
												'ss__swatches__slideshow__swatch--unavailable': e?.available === !1,
												'ss__swatches__slideshow__swatch--dark': R,
											}),
											title: f,
											ref: (i) => (0, _.iy)(i),
											'aria-disabled': e.disabled || e?.available === !1,
											role: 'option',
											'aria-selected': B,
											children: (0, o.FD)('div', {
												className: u()(
													'ss__swatches__slideshow__swatch__inner',
													`ss__swatches__slideshow__swatch__inner--${as.p(e.value?.toString())}`
												),
												style: { background: e.background ? e.background : e.backgroundImageUrl ? '' : e.value },
												children: [
													!e.background && e.backgroundImageUrl
														? (0, o.Y)(K._, { ...G.image, src: e.backgroundImageUrl, alt: e.label || e.value?.toString() })
														: null,
													!N && (0, o.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: f || e.value }),
												],
											}),
										}),
									});
								}),
							typeof T == 'object' && T?.length
								? (0, o.Y)(r._, {
										children: (0, o.Y)('div', {
											...ms,
											className: u()('ss__swatches', M, Z),
											children:
												D == 'slideshow'
													? (0, o.Y)(rs.b, { slides: b, ...G.slideshow })
													: (0, o.Y)(z.x, {
															...G.grid,
															options: T,
															onSelect: (e, f) => {
																!k && es(e, f);
															},
															selected: ss,
													  }),
										}),
								  })
								: null
						);
					});
				s.d(w, ['l', 0, L]);
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(ts, w, s) {
				s.d(w, { I: () => y, r: () => u });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					I = s('../../node_modules/dequal/dist/index.mjs');
				function u(r) {
					const l = (0, o.li)(r),
						c = (0, o.li)(0);
					return (0, I.j)(r, l.current) || ((l.current = r), (c.current += 1)), (0, o.Kr)(() => l.current, [c.current]);
				}
				function y(r, l) {
					return (0, o.vJ)(r, [u(l)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(ts, w, s) {
				s.d(w, { X: () => y });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					I = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					u = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function y(l) {
					if (!l || !Object.keys(l).length) return;
					const [c, P] = (0, o.J0)(r(l));
					let _;
					const n = () => {
						function g() {
							P(r(l));
						}
						(_ = (0, I.s)(() => {
							g();
						}, 50)),
							window.addEventListener('resize', _);
					};
					return (
						(0, o.vJ)(() => (n(), () => window.removeEventListener('resize', _)), []),
						(0, u.I)(() => {
							P(r(l)), n();
						}, [l]),
						c
					);
				}
				const r = (l) => {
					let c;
					const P = window.innerWidth,
						_ = Object.keys(l)
							.map((n) => +n)
							.sort((n, g) => n - g)
							.map((n) => ({ [n]: l[n] }));
					if (_.length) {
						for (let n = 0; n < _.length; n++) {
							const g = _[n],
								C = parseInt(Object.keys(g)[0]);
							if (n + 1 === _.length || (n === 0 && P < C)) {
								c = _[n][C];
								break;
							} else {
								const K = parseInt(Object.keys(_[n + 1])[0]);
								if (P >= C && P < K) {
									c = _[n][C];
									break;
								}
							}
						}
						return c;
					}
					return c;
				};
				s.d(w, ['Q', 0, r]);
			},
		},
	]);
})();
