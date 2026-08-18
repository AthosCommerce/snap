'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[594],
		{
			'./components/src/components/Molecules/Grid/Grid.tsx'(F, D, s) {
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = s('../../node_modules/classnames/index.js'),
					a = s.n(f),
					l = s('../../node_modules/deepmerge/dist/cjs.js'),
					d = s.n(l),
					M = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					r = s('../../node_modules/mobx-react-lite/es/index.js'),
					n = s('./components/src/providers/cache.tsx'),
					g = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = s('./components/src/providers/treePath.tsx'),
					j = s('./components/src/hooks/useA11y.tsx'),
					J = s('./components/src/hooks/useLang.tsx'),
					k = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					ts = s('./components/src/components/Atoms/Image/Image.tsx'),
					os = s('./components/src/utilities/cloneWithProps.tsx'),
					ns = s('./components/src/utilities/defined.ts'),
					ls = s('./components/src/utilities/mergeProps.ts'),
					V = s('./components/src/utilities/mergeStyles.ts'),
					X = s('./components/src/utilities/selectionKey.ts'),
					H = s('../../node_modules/colord/index.mjs'),
					as = s('../../node_modules/colord/plugins/names.mjs');
				(0, H.X$)([as.A]);
				const rs = ({ gapSize: O, columns: E, theme: N, disableOverflowAction: $ }) =>
						(0, c.AH)({
							'.ss__grid__options': {
								display: 'flex',
								flexFlow: 'row wrap',
								gridTemplateColumns: `repeat(${E}, 1fr)`,
								gap: O,
								gridAutoRows: '1fr',
								'.ss__grid__option': {
									display: 'flex',
									flexDirection: 'column',
									boxSizing: 'content-box',
									backgroundRepeat: 'no-repeat',
									backgroundSize: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px)`,
									backgroundPosition: 'center !important',
									justifyContent: 'center',
									alignItems: 'center',
									flex: '0 1 auto',
									border: `1px solid ${N?.variables?.colors?.primary || '#333'}`,
									textAlign: 'center',
									wordBreak: 'break-all',
									padding: '1em 0',
									width: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px)`,
									margin: `0 ${O} ${O} 0`,
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
									[`:nth-of-type(${E}n)`]: { marginRight: '0' },
									'&.ss__grid__option--selected': { border: `2px solid ${N?.variables?.colors?.primary || '#333'}` },
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
								'&:hover': { cursor: $ ? 'initial !important' : 'pointer !important' },
							},
						}),
					is = (0, r.PA)((O) => {
						const E = (0, g.u)(),
							$ = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, b.LU)() },
							y = (0, ls.v6)('grid', E, $, O),
							{
								titleText: i,
								onSelect: L,
								hideLabels: B,
								disableOverflowAction: Y,
								multiSelect: Z,
								overflowButton: T,
								columns: G,
								rows: R,
								hideShowLess: _s,
								overflowButtonInGrid: w,
								disabled: z,
								options: C,
								disableStyles: ds,
								onOverflowButtonClick: U,
								className: cs,
								internalClassName: ms,
								treePath: K,
								disableA11y: Q,
							} = y,
							{ overrideElement: hs, shouldRenderDefault: us } = (0, k._)('grid', y);
						if (!us) return hs;
						const gs = { image: { internalClassName: 'ss__grid__image', ...(0, ns.s)({ disableStyles: ds }), theme: y?.theme, treePath: K } };
						let m = y.selected;
						const q = (0, V.Z)(y, rs);
						m && !Array.isArray(m) && (m = [m]);
						const [e, h] = (0, _.J0)(m || []),
							[W, ss] = (0, _.J0)(() => (0, X.i)(m));
						if (m) {
							const o = (0, X.i)(m);
							o !== W && (ss(o), h(m));
						}
						const es = (o, v) => {
								if (Z) {
									let p;
									e.find((P) => P.value === v.value)
										? ((p = [...e]),
										  p.splice(
												p.findIndex((P) => P.value === v.value),
												1
										  ))
										: (p = [...e, v]),
										L && L(o, v, p),
										h(p);
								} else L && L(o, v, [v]), h([v]);
							},
							u = R && G ? G * R : C.length,
							I = Math.max(0, C.length - (u - (w ? 1 : 0))),
							[A, vs] = (0, _.J0)(!!I),
							Es = () => {
								const o = _s ? A : !0,
									v = { showMoreText: { value: w ? `+ ${I}` : 'Show More' }, showLessText: { value: w ? `- ${I}` : 'Show Less' } },
									p = d()(v, y.lang || {}),
									P = (0, J.u)(p, { limited: A, remainder: I }, { activeBreakpoint: E?.activeBreakpoint });
								return o && I > 0 && C.length !== u
									? (0, t.Y)('div', {
											className: `ss__grid__show-more-wrapper ${w ? 'ss__grid__option' : ''}`,
											onClick: (S) => {
												!Y && vs(!A), U && U(S, !!A, I);
											},
											role: 'button',
											ref: (S) => (!Q && !Y ? (0, j.iy)(S) : null),
											...(A ? P.showMoreText.attributes : P.showLessText.attributes),
											children: T
												? (0, os.Y)(T, { limited: A, remainder: I, treePath: K })
												: A
												? (0, t.Y)('span', { className: 'ss__grid__show-more', ...P.showMoreText.value })
												: I
												? (0, t.Y)('span', { className: 'ss__grid__show-less', ...P.showLessText.value })
												: null,
									  })
									: null;
							};
						return typeof C == 'object' && C?.length
							? (0, t.Y)(n._, {
									children: (0, t.FD)('div', {
										...q,
										className: a()('ss__grid', z ? 'ss__grid--disabled' : '', cs, ms),
										children: [
											i && (0, t.Y)('h5', { className: 'ss__grid__title', children: i }),
											(0, t.FD)('div', {
												className: 'ss__grid__options',
												children: [
													C.map((o, v) => {
														const p = e.some((x) => x.value == o.value);
														let P = !1;
														const S = o.background?.toLowerCase() || (o.backgroundImageUrl ? null : o.value.toString().toLowerCase());
														if (S)
															try {
																const x = (0, H.Mj)(S);
																x.isValid() && (P = x.isDark());
															} catch {}
														if (!A || C.length == u || v < u - (w ? 1 : 0))
															return (0, t.Y)('div', {
																className: a()('ss__grid__option', {
																	'ss__grid__option--selected': p,
																	'ss__grid__option--disabled': o?.disabled,
																	'ss__grid__option--unavailable': o?.available === !1,
																	'ss__grid__option--dark': P,
																}),
																onClick: (x) => !z && !o?.disabled && es(x, o),
																ref: (x) => (0, j.iy)(x),
																title: o.label || o.value.toString(),
																role: 'option',
																'aria-selected': p,
																'aria-disabled': o.disabled,
																children: (0, t.FD)('div', {
																	className: a()('ss__grid__option__inner', `ss__grid__option__inner--${M.p(o.value.toString())}`),
																	style: { background: o.background ? o.background : o.backgroundImageUrl ? void 0 : o.value },
																	children: [
																		!o.background && o.backgroundImageUrl
																			? (0, t.Y)(ts._, { ...gs.image, src: o.backgroundImageUrl, alt: o.label || o.value.toString() })
																			: null,
																		B ? null : (0, t.Y)('label', { className: 'ss__grid__option__label', children: o.label || o.value }),
																	],
																}),
															});
													}),
													w ? (0, t.Y)(Es, {}) : null,
												],
											}),
											w ? null : (0, t.Y)(Es, {}),
										],
									}),
							  })
							: null;
					});
				s.d(D, ['x', 0, is]);
			},
			'./components/src/components/Molecules/Swatches/Swatches.tsx'(F, D, s) {
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = s('../../node_modules/classnames/index.js'),
					_ = s.n(c),
					f = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = s('./components/src/providers/cache.tsx'),
					l = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = s('./components/src/providers/treePath.tsx'),
					M = s('./components/src/hooks/useDisplaySettings.tsx'),
					r = s('./components/src/hooks/useA11y.tsx'),
					n = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = s('./components/src/utilities/defined.ts'),
					b = s('./components/src/utilities/mergeProps.ts'),
					j = s('./components/src/utilities/mergeStyles.ts'),
					J = s('./components/src/components/Molecules/Grid/Grid.tsx'),
					k = s('./components/src/components/Atoms/Image/Image.tsx'),
					ts = s('../../node_modules/mobx-react-lite/es/index.js'),
					os = s('../../node_modules/deepmerge/dist/cjs.js'),
					ns = s.n(os),
					ls = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					V = s('../../node_modules/colord/index.mjs'),
					X = s('../../node_modules/colord/plugins/names.mjs'),
					H = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					as = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				(0, V.X$)([X.A]);
				const rs = ({ theme: O }) =>
						(0, f.AH)({
							'.ss__swatches__slideshow__swatch': {
								boxSizing: 'content-box',
								cursor: 'pointer',
								backgroundRepeat: 'no-repeat',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: `1px solid ${O?.variables?.colors?.primary || '#333'}`,
								aspectRatio: '1/1',
								flexDirection: 'column',
								'.ss__swatches__slideshow__swatch__inner': {
									aspectRatio: '1/1',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: '100%',
								},
								'&.ss__swatches__slideshow__swatch--selected': { border: `2px solid ${O?.variables?.colors?.primary || '#333'}` },
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
					is = (0, ts.PA)((O) => {
						const E = (0, l.u)(),
							N = (0, d.LU)(),
							$ = {
								0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
								768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
								1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
							},
							y = { type: 'slideshow', hideLabels: !0, treePath: N };
						let i = (0, b.v6)('swatches', E, y, O);
						const L = i.breakpoints || (i.type == 'slideshow' ? $ : {}),
							B = (0, M.X)(L);
						if (B && Object.keys(B).length) {
							const e = ns()(i?.theme || {}, B?.theme || {}, { arrayMerge: (h, W) => W });
							i = { ...i, ...B, theme: e };
						}
						const {
								onSelect: Y,
								disabled: Z,
								options: T,
								hideLabels: G,
								disableStyles: R,
								className: _s,
								internalClassName: w,
								type: z,
								slideshow: C,
								grid: ds,
								treePath: U,
							} = i,
							{ overrideElement: cs, shouldRenderDefault: ms } = (0, n._)('swatches', i);
						if (!ms) return cs;
						const K = {
								slideshow: {
									internalClassName: 'ss__swatches__slideshow',
									loop: !1,
									slidesToShow: 6,
									slidesToMove: 1,
									gap: 8,
									showNavigation: !0,
									showPagination: !1,
									autoPlay: !1,
									...C,
									...(0, g.s)({ breakpoints: L, disableStyles: R }),
									theme: i?.theme,
									treePath: U,
								},
								grid: {
									internalClassName: 'ss__swatches__grid',
									hideLabels: G,
									overflowButtonInGrid: !0,
									disableOverflowAction: !0,
									rows: 1,
									columns: 6,
									...ds,
									...(0, g.s)({ disableStyles: R }),
									theme: i?.theme,
									treePath: U,
								},
								image: { internalClassName: 'ss__swatches__image', ...(0, g.s)({ disableStyles: R }), theme: i?.theme, treePath: U },
							},
							Q = i.selected,
							hs = (0, j.Z)(i, rs),
							[us, gs] = (0, as.J0)(Q || void 0),
							m = (e, h) => {
								Y && Y(e, h), gs(h);
							},
							q = [];
						return (
							z == 'slideshow' &&
								T.forEach((e) => {
									const h = e.label,
										W = us?.value == e.value;
									let ss = !1;
									const es = e.background?.toLowerCase() || (e.backgroundImageUrl ? null : e.value?.toString().toLowerCase());
									if (es)
										try {
											const u = (0, V.Mj)(es);
											u.isValid() && (ss = u.isDark());
										} catch {}
									q.push({
										onClick: (u) => !Z && !e?.disabled && m(u, e),
										content: (0, t.Y)('div', {
											className: _()('ss__swatches__slideshow__swatch', {
												'ss__swatches__slideshow__swatch--selected': W,
												'ss__swatches__slideshow__swatch--disabled': e?.disabled,
												'ss__swatches__slideshow__swatch--unavailable': e?.available === !1,
												'ss__swatches__slideshow__swatch--dark': ss,
											}),
											title: h,
											ref: (u) => (0, r.iy)(u),
											'aria-disabled': e.disabled || e?.available === !1,
											role: 'option',
											'aria-selected': W,
											children: (0, t.FD)('div', {
												className: _()(
													'ss__swatches__slideshow__swatch__inner',
													`ss__swatches__slideshow__swatch__inner--${ls.p(e.value?.toString())}`
												),
												style: { background: e.background ? e.background : e.backgroundImageUrl ? '' : e.value },
												children: [
													!e.background && e.backgroundImageUrl
														? (0, t.Y)(k._, { ...K.image, src: e.backgroundImageUrl, alt: e.label || e.value?.toString() })
														: null,
													!G && (0, t.Y)('span', { className: 'ss__swatches__slideshow__swatch__value', children: h || e.value }),
												],
											}),
										}),
									});
								}),
							typeof T == 'object' && T?.length
								? (0, t.Y)(a._, {
										children: (0, t.Y)('div', {
											...hs,
											className: _()('ss__swatches', _s, w),
											children:
												z == 'slideshow'
													? (0, t.Y)(H.b, { slides: q, ...K.slideshow })
													: (0, t.Y)(J.x, {
															...K.grid,
															options: T,
															onSelect: (e, h) => {
																!Z && m(e, h);
															},
															selected: Q,
													  }),
										}),
								  })
								: null
						);
					});
				s.d(D, ['l', 0, is]);
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(F, D, s) {
				s.d(D, { I: () => f, r: () => _ });
				var t = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = s('../../node_modules/dequal/dist/index.mjs');
				function _(a) {
					const l = (0, t.li)(a),
						d = (0, t.li)(0);
					return (0, c.j)(a, l.current) || ((l.current = a), (d.current += 1)), (0, t.Kr)(() => l.current, [d.current]);
				}
				function f(a, l) {
					return (0, t.vJ)(a, [_(l)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(F, D, s) {
				s.d(D, { X: () => f });
				var t = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					_ = s('./components/src/hooks/useDeepCompareEffect.tsx');
				function f(l) {
					if (!l || !Object.keys(l).length) return;
					const [d, M] = (0, t.J0)(a(l));
					let r;
					const n = () => {
						function g() {
							M(a(l));
						}
						(r = (0, c.s)(() => {
							g();
						}, 50)),
							window.addEventListener('resize', r);
					};
					return (
						(0, t.vJ)(() => (n(), () => window.removeEventListener('resize', r)), []),
						(0, _.I)(() => {
							M(a(l)), n();
						}, [l]),
						d
					);
				}
				const a = (l) => {
					let d;
					const M = window.innerWidth,
						r = Object.keys(l)
							.map((n) => +n)
							.sort((n, g) => n - g)
							.map((n) => ({ [n]: l[n] }));
					if (r.length) {
						for (let n = 0; n < r.length; n++) {
							const g = r[n],
								b = parseInt(Object.keys(g)[0]);
							if (n + 1 === r.length || (n === 0 && M < b)) {
								d = r[n][b];
								break;
							} else {
								const k = parseInt(Object.keys(r[n + 1])[0]);
								if (M >= b && M < k) {
									d = r[n][b];
									break;
								}
							}
						}
						return d;
					}
					return d;
				};
				s.d(D, ['Q', 0, a]);
			},
			'./components/src/utilities/selectionKey.ts'(F, D, s) {
				s.d(D, { i: () => t });
				function t(c) {
					return (c == null ? [] : Array.isArray(c) ? c : [c]).map((f) => `${f?.value}:${f?.label}`).join('|');
				}
			},
		},
	]);
})();
