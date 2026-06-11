'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(ts, b, s) {
				s.d(b, { x: () => is });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					I = s('../../node_modules/classnames/index.js'),
					r = s.n(I),
					l = s('../../node_modules/deepmerge/dist/cjs.js'),
					c = s.n(l),
					f = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					_ = s('./components/src/providers/cache.tsx'),
					n = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = s('./components/src/providers/treePath.tsx'),
					M = s('./components/src/hooks/useA11y.tsx'),
					G = s('./components/src/hooks/useLang.tsx'),
					z = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					W = s('./components/src/components/Atoms/Image/Image.tsx'),
					os = s('./components/src/utilities/cloneWithProps.tsx'),
					ns = s('./components/src/utilities/defined.ts'),
					ls = s('./components/src/utilities/mergeProps.ts'),
					J = s('./components/src/utilities/mergeStyles.ts'),
					F = s('../../node_modules/colord/index.mjs'),
					as = s('../../node_modules/colord/plugins/names.mjs');
				(0, F.X$)([as.A]);
				const rs = ({ gapSize: L, columns: m, theme: S, disableOverflowAction: K }) =>
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
							'&:hover': { cursor: K ? 'initial !important' : 'pointer !important' },
						},
					});
				function is(L) {
					const m = (0, n.u)(),
						K = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, g.LU)() },
						C = (0, ls.v6)('grid', m, K, L),
						{
							titleText: V,
							onSelect: a,
							hideLabels: X,
							disableOverflowAction: A,
							multiSelect: H,
							overflowButton: j,
							columns: T,
							rows: k,
							hideShowLess: N,
							overflowButtonInGrid: O,
							disabled: Z,
							options: P,
							disableStyles: _s,
							onOverflowButtonClick: Q,
							className: $,
							internalClassName: ds,
							treePath: q,
							disableA11y: Y,
						} = C,
						{ overrideElement: ss, shouldRenderDefault: cs } = (0, z._)('grid', C);
					if (!cs) return ss;
					const ms = { image: { internalClassName: 'ss__grid__image', ...(0, ns.s)({ disableStyles: _s }), theme: C?.theme, treePath: q } };
					let E = C.selected;
					const es = (0, J.Z)(C, rs);
					E && !Array.isArray(E) && (E = [E]);
					const [x, e] = (0, u.J0)(E || []),
						[D] = (0, u.J0)(E || []);
					try {
						if (E) {
							const t = JSON.stringify(D),
								d = JSON.stringify(E),
								h = JSON.stringify(x);
							t !== d && d !== h && e(E);
						}
					} catch {}
					const B = (t, d) => {
							if (H) {
								let h;
								x.find((v) => v.value === d.value)
									? ((h = [...x]),
									  h.splice(
											h.findIndex((v) => v.value === d.value),
											1
									  ))
									: (h = [...x, d]),
									a && a(t, d, h),
									e(h);
							} else a && a(t, d, [d]), e([d]);
						},
						R = k && T ? T * k : P.length,
						p = Math.max(0, P.length - (R - (O ? 1 : 0))),
						[i, us] = (0, u.J0)(!!p),
						hs = () => {
							const t = N ? i : !0,
								d = { showMoreText: { value: O ? `+ ${p}` : 'Show More' }, showLessText: { value: O ? `- ${p}` : 'Show Less' } },
								h = c()(d, C.lang || {}),
								v = (0, G.u)(h, { limited: i, remainder: p });
							return t && p > 0 && P.length !== R
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${O ? 'ss__grid__option' : ''}`,
										onClick: (U) => {
											!A && us(!i), Q && Q(U, !!i, p);
										},
										role: 'button',
										ref: (U) => (!Y && !A ? (0, M.iy)(U) : null),
										...(i ? v.showMoreText.attributes : v.showLessText.attributes),
										children: j
											? (0, os.Y)(j, { limited: i, remainder: p, treePath: q })
											: i
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...v.showMoreText.value })
											: p
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...v.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof P == 'object' && P?.length
						? (0, o.Y)(_._, {
								children: (0, o.FD)('div', {
									...es,
									className: r()('ss__grid', Z ? 'ss__grid--disabled' : '', $, ds),
									children: [
										V && (0, o.Y)('h5', { className: 'ss__grid__title', children: V }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												P.map((t, d) => {
													const h = x.some((w) => w.value == t.value);
													let v = !1;
													const U = t.background?.toLowerCase() || (t.backgroundImageUrl ? null : t.value.toString().toLowerCase());
													if (U)
														try {
															const w = (0, F.Mj)(U);
															w.isValid() && (v = w.isDark());
														} catch {}
													if (!i || P.length == R || d < R - (O ? 1 : 0))
														return (0, o.Y)('div', {
															className: r()('ss__grid__option', {
																'ss__grid__option--selected': h,
																'ss__grid__option--disabled': t?.disabled,
																'ss__grid__option--unavailable': t?.available === !1,
																'ss__grid__option--dark': v,
															}),
															onClick: (w) => !Z && !t?.disabled && B(w, t),
															ref: (w) => (0, M.iy)(w),
															title: t.label || t.value.toString(),
															role: 'option',
															'aria-selected': h,
															'aria-disabled': t.disabled,
															children: (0, o.FD)('div', {
																className: r()('ss__grid__option__inner', `ss__grid__option__inner--${f.p(t.value.toString())}`),
																style: { background: t.background ? t.background : t.backgroundImageUrl ? void 0 : t.value },
																children: [
																	!t.background && t.backgroundImageUrl
																		? (0, o.Y)(W._, { ...ms.image, src: t.backgroundImageUrl, alt: t.label || t.value.toString() })
																		: null,
																	X ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: t.label || t.value }),
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
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(ts, b, s) {
				s.d(b, { l: () => L });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = s('../../node_modules/classnames/index.js'),
					u = s.n(y),
					I = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = s('./components/src/providers/cache.tsx'),
					l = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = s('./components/src/providers/treePath.tsx'),
					f = s('./components/src/hooks/useDisplaySettings.tsx'),
					_ = s('./components/src/hooks/useA11y.tsx'),
					n = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = s('./components/src/utilities/defined.ts'),
					M = s('./components/src/utilities/mergeProps.ts'),
					G = s('./components/src/utilities/mergeStyles.ts'),
					z = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					W = s('./components/src/components/Atoms/Image/Image.tsx'),
					os = s('../../node_modules/deepmerge/dist/cjs.js'),
					ns = s.n(os),
					ls = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					J = s('../../node_modules/colord/index.mjs'),
					F = s('../../node_modules/colord/plugins/names.mjs'),
					as = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					rs = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				(0, J.X$)([F.A]);
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
					const S = (0, l.u)(),
						K = (0, c.LU)(),
						C = {
							0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
							768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
							1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
						},
						V = { type: 'slideshow', hideLabels: !0, treePath: K };
					let a = (0, M.v6)('swatches', S, V, m);
					const X = a.breakpoints || (a.type == 'slideshow' ? C : {}),
						A = (0, f.X)(X);
					if (A && Object.keys(A).length) {
						const e = ns()(a?.theme || {}, A?.theme || {}, { arrayMerge: (D, B) => B });
						a = { ...a, ...A, theme: e };
					}
					const {
							onSelect: H,
							disabled: j,
							options: T,
							hideLabels: k,
							disableStyles: N,
							className: O,
							internalClassName: Z,
							type: P,
							slideshow: _s,
							grid: Q,
							treePath: $,
						} = a,
						{ overrideElement: ds, shouldRenderDefault: q } = (0, n._)('swatches', a);
					if (!q) return ds;
					const Y = {
							slideshow: {
								internalClassName: 'ss__swatches__slideshow',
								loop: !1,
								slidesToShow: 6,
								slidesToMove: 1,
								gap: 8,
								showNavigation: !0,
								showPagination: !1,
								autoPlay: !1,
								..._s,
								...(0, g.s)({ breakpoints: X, disableStyles: N }),
								theme: a?.theme,
								treePath: $,
							},
							grid: {
								internalClassName: 'ss__swatches__grid',
								hideLabels: k,
								overflowButtonInGrid: !0,
								disableOverflowAction: !0,
								rows: 1,
								columns: 6,
								...Q,
								...(0, g.s)({ disableStyles: N }),
								theme: a?.theme,
								treePath: $,
							},
							image: { internalClassName: 'ss__swatches__image', ...(0, g.s)({ disableStyles: N }), theme: a?.theme, treePath: $ },
						},
						ss = a.selected,
						cs = (0, G.Z)(a, is),
						[ms, E] = (0, rs.J0)(ss || void 0),
						es = (e, D) => {
							H && H(e, D), E(D);
						},
						x = [];
					return (
						P == 'slideshow' &&
							T.forEach((e) => {
								const D = e.label,
									B = ms?.value == e.value;
								let R = !1;
								const p = e.background?.toLowerCase() || (e.backgroundImageUrl ? null : e.value?.toString().toLowerCase());
								if (p)
									try {
										const i = (0, J.Mj)(p);
										i.isValid() && (R = i.isDark());
									} catch {}
								x.push({
									onClick: (i) => !j && !e?.disabled && es(i, e),
									content: (0, o.Y)('div', {
										className: u()('ss__swatches__slideshow__swatch', {
											'ss__swatches__slideshow__swatch--selected': B,
											'ss__swatches__slideshow__swatch--disabled': e?.disabled,
											'ss__swatches__slideshow__swatch--unavailable': e?.available === !1,
											'ss__swatches__slideshow__swatch--dark': R,
										}),
										title: D,
										ref: (i) => (0, _.iy)(i),
										'aria-disabled': e.disabled || e?.available === !1,
										role: 'option',
										'aria-selected': B,
										children: (0, o.FD)('div', {
											className: u()(
												'ss__swatches__slideshow__swatch__inner',
												`ss__swatches__slideshow__swatch__inner--${ls.p(e.value?.toString())}`
											),
											style: { background: e.background ? e.background : e.backgroundImageUrl ? '' : e.value },
											children: [
												!e.background && e.backgroundImageUrl
													? (0, o.Y)(W._, { ...Y.image, src: e.backgroundImageUrl, alt: e.label || e.value?.toString() })
													: null,
												!k && (0, o.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: D || e.value }),
											],
										}),
									}),
								});
							}),
						typeof T == 'object' && T?.length
							? (0, o.Y)(r._, {
									children: (0, o.Y)('div', {
										...cs,
										className: u()('ss__swatches', O, Z),
										children:
											P == 'slideshow'
												? (0, o.Y)(as.b, { slides: x, ...Y.slideshow })
												: (0, o.Y)(z.x, {
														...Y.grid,
														options: T,
														onSelect: (e, D) => {
															!j && es(e, D);
														},
														selected: ss,
												  }),
									}),
							  })
							: null
					);
				}
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(ts, b, s) {
				s.d(b, { I: () => I, r: () => u });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = s('../../node_modules/dequal/dist/index.mjs');
				function u(r) {
					const l = (0, o.li)(r),
						c = (0, o.li)(0);
					return (0, y.j)(r, l.current) || ((l.current = r), (c.current += 1)), (0, o.Kr)(() => l.current, [c.current]);
				}
				function I(r, l) {
					return (0, o.vJ)(r, [u(l)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(ts, b, s) {
				s.d(b, { Q: () => r, X: () => I });
				var o = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					u = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function I(l) {
					if (!l || !Object.keys(l).length) return;
					const [c, f] = (0, o.J0)(r(l));
					let _;
					const n = () => {
						function g() {
							f(r(l));
						}
						(_ = (0, y.s)(() => {
							g();
						}, 50)),
							window.addEventListener('resize', _);
					};
					return (
						(0, o.vJ)(() => (n(), () => window.removeEventListener('resize', _)), []),
						(0, u.I)(() => {
							f(r(l)), n();
						}, [l]),
						c
					);
				}
				const r = (l) => {
					let c;
					const f = window.innerWidth,
						_ = Object.keys(l)
							.map((n) => +n)
							.sort((n, g) => n - g)
							.map((n) => ({ [n]: l[n] }));
					if (_.length) {
						for (let n = 0; n < _.length; n++) {
							const g = _[n],
								M = parseInt(Object.keys(g)[0]);
							if (n + 1 === _.length || (n === 0 && f < M)) {
								c = _[n][M];
								break;
							} else {
								const W = parseInt(Object.keys(_[n + 1])[0]);
								if (f >= M && f < W) {
									c = _[n][M];
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
