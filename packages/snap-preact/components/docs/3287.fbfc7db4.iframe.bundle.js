'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3287],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'($e, ne, v) {
				v.d(ne, { l: () => Se });
				var x = v('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					q = v('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ae = v('../../node_modules/mobx-react-lite/es/index.js'),
					se = v('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					re = v('../../node_modules/classnames/index.js'),
					I = v.n(re),
					p = v('../../node_modules/preact/compat/dist/compat.module.js');
				function C() {
					return (
						(C =
							Object.assign ||
							function (r) {
								for (var l = 1; l < arguments.length; l++) {
									var e = arguments[l];
									for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
								}
								return r;
							}),
						C.apply(this, arguments)
					);
				}
				function K(r, l) {
					if (r == null) return {};
					var e = {},
						i = Object.keys(r),
						h,
						n;
					for (n = 0; n < i.length; n++) (h = i[n]), !(l.indexOf(h) >= 0) && (e[h] = r[h]);
					return e;
				}
				var oe = function (l) {
						var e = l.getBoundingClientRect();
						return { left: Math.ceil(e.left), width: Math.ceil(e.width) };
					},
					Q = function (l) {
						return [].concat(l).sort(function (e, i) {
							return Number(e) - Number(i);
						});
					},
					le = function (l) {
						var e = p.default.useRef(l);
						return (
							(e.current = l),
							p.default.useCallback(function () {
								return e.current;
							}, [])
						);
					},
					ie = {
						getPercentageForValue: function (l, e, i) {
							return Math.max(0, Math.min(100, ((l - e) / (i - e)) * 100));
						},
						getValueForClientX: function (l, e, i, h) {
							var n = e.left,
								c = e.width,
								t = (l - n) / c,
								_ = (h - i) * t;
							return _ + i;
						},
					};
				function ce(r) {
					var l = r.interpolator,
						e = l === void 0 ? ie : l,
						i = r.tickSize,
						h = i === void 0 ? 10 : i,
						n = r.values,
						c = r.min,
						t = r.max,
						_ = r.ticks,
						k = r.steps,
						Y = r.onChange,
						O = r.onDrag,
						j = r.stepSize,
						B = p.default.useState(null),
						L = B[0],
						$ = B[1],
						H = p.default.useState(),
						R = H[0],
						G = H[1],
						D = le({ activeHandleIndex: L, onChange: Y, onDrag: O, values: n, tempValues: R }),
						A = p.default.useRef(),
						J = p.default.useCallback(
							function (a) {
								var s = oe(A.current);
								return e.getValueForClientX(a, s, c, t);
							},
							[e, t, c]
						),
						U = p.default.useCallback(
							function (a, s) {
								if (k) {
									var f = k.indexOf(a),
										d = f + s;
									return d >= 0 && d < k.length ? k[d] : a;
								} else {
									var m = a + j * s;
									return m >= c && m <= t ? m : a;
								}
							},
							[t, c, j, k]
						),
						W = p.default.useCallback(
							function (a) {
								var s = c,
									f = t;
								if (k)
									k.forEach(function (d) {
										d <= a && d > s && (s = d), d >= a && d < f && (f = d);
									});
								else {
									for (; s < a && s + j < a; ) s += j;
									f = Math.min(s + j, t);
								}
								return a - s < f - a ? s : f;
							},
							[t, c, j, k]
						),
						N = p.default.useCallback(
							function (a) {
								var s = D(),
									f = s.activeHandleIndex,
									d = s.onDrag,
									m = a.type === 'touchmove' ? a.changedTouches[0].clientX : a.clientX,
									g = J(m),
									b = W(g),
									S = [].concat(n.slice(0, f), [b], n.slice(f + 1));
								d ? d(S) : G(S);
							},
							[D, J, W, n]
						),
						Z = p.default.useCallback(
							function (a, s) {
								var f = D(),
									d = f.values,
									m = f.onChange,
									g = m === void 0 ? function () {} : m;
								if (a.keyCode === 37 || a.keyCode === 39) {
									$(s);
									var b = a.keyCode === 37 ? -1 : 1,
										S = U(d[s], b),
										y = [].concat(d.slice(0, s), [S], d.slice(s + 1)),
										P = Q(y);
									g(P);
								}
							},
							[D, U]
						),
						u = p.default.useCallback(
							function (a, s) {
								$(s);
								var f = function d(m) {
									var g = D(),
										b = g.tempValues,
										S = g.values,
										y = g.onChange,
										P = y === void 0 ? function () {} : y,
										V = g.onDrag,
										z = V === void 0 ? function () {} : V;
									document.removeEventListener('mousemove', N),
										document.removeEventListener('touchmove', N),
										document.removeEventListener('mouseup', d),
										document.removeEventListener('touchend', d);
									var E = Q(b || S);
									P(E), z(E), $(null), G();
								};
								document.addEventListener('mousemove', N),
									document.addEventListener('touchmove', N),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[D, N]
						),
						o = p.default.useCallback(
							function (a) {
								return e.getPercentageForValue(a, c, t);
							},
							[e, t, c]
						),
						M = p.default.useMemo(
							function () {
								var a = _ || k;
								if (!a) {
									for (a = [c]; a[a.length - 1] < t - h; ) a.push(a[a.length - 1] + h);
									a.push(t);
								}
								return a.map(function (s, f) {
									return {
										value: s,
										getTickProps: function (m) {
											var g = m === void 0 ? {} : m,
												b = g.key,
												S = b === void 0 ? f : b,
												y = g.style,
												P = y === void 0 ? {} : y,
												V = K(g, ['key', 'style']);
											return C({ key: S, style: C({ position: 'absolute', width: 0, left: o(s) + '%', transform: 'translateX(-50%)' }, P) }, V);
										},
									};
								});
							},
							[_, o, t, c, k, h]
						),
						F = p.default.useMemo(
							function () {
								var a = Q(R || n);
								return [].concat(a, [t]).map(function (s, f) {
									return {
										value: s,
										getSegmentProps: function (m) {
											var g = m === void 0 ? {} : m,
												b = g.key,
												S = b === void 0 ? f : b,
												y = g.style,
												P = y === void 0 ? {} : y,
												V = K(g, ['key', 'style']),
												z = o(a[f - 1] ? a[f - 1] : c),
												E = o(s) - z;
											return C({ key: S, style: C({ position: 'absolute', left: z + '%', width: E + '%' }, P) }, V);
										},
									};
								});
							},
							[o, t, c, R, n]
						),
						X = p.default.useMemo(
							function () {
								return (R || n).map(function (a, s) {
									return {
										value: a,
										active: s === L,
										getHandleProps: function (d) {
											var m = d === void 0 ? {} : d,
												g = m.key,
												b = g === void 0 ? s : g,
												S = m.ref,
												y = m.innerRef,
												P = m.onKeyDown,
												V = m.onMouseDown,
												z = m.onTouchStart,
												E = m.style,
												we = E === void 0 ? {} : E,
												Ce = K(m, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return C(
												{
													key: b,
													onKeyDown: function (w) {
														w.persist(), Z(w, s), P && P(w);
													},
													onMouseDown: function (w) {
														w.persist(), u(w, s), V && V(w);
													},
													onTouchStart: function (w) {
														w.persist(), u(w, s), z && z(w);
													},
													role: 'slider',
													'aria-valuemin': c,
													'aria-valuemax': t,
													'aria-valuenow': a,
													style: C(
														{ position: 'absolute', top: '50%', left: o(a) + '%', zIndex: s === L ? '1' : '0', transform: 'translate(-50%, -50%)' },
														we
													),
												},
												Ce
											);
										},
									};
								});
							},
							[L, o, Z, u, c, t, R, n]
						),
						T = function (s) {
							var f = s === void 0 ? {} : s,
								d = f.style,
								m = d === void 0 ? {} : d,
								g = f.ref,
								b = K(f, ['style', 'ref']);
							return C(
								{
									ref: function (y) {
										(A.current = y), g && (typeof g == 'function' ? g(y) : (g.current = y));
									},
									style: C({ position: 'relative', userSelect: 'none' }, m),
								},
								b
							);
						};
					return { activeHandleIndex: L, getTrackProps: T, ticks: M, segments: F, handles: X };
				}
				var ue = v('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					de = v('./components/src/providers/snap.tsx'),
					fe = v('./components/src/providers/treePath.tsx'),
					me = v('./components/src/providers/cache.tsx'),
					ge = v('./components/src/utilities/mergeProps.ts'),
					ve = v('./components/src/utilities/mergeStyles.ts');
				function he(r, l) {
					for (var e = []; l > 0; e[--l] = r);
					return e.join('');
				}
				function ee(...r) {
					for (var l = 0, e, i = r[l++], h = [], n, c, t, _; i; ) {
						if ((n = /^[^\x25]+/.exec(i))) h.push(n[0]);
						else if ((n = /^\x25{2}/.exec(i))) h.push('%');
						else if ((n = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(i))) {
							if ((e = r[n[1] || l++]) == null || e == null) throw 'Too few arguments.';
							if (/[^s]/.test(n[7]) && typeof e != 'number') throw 'Expecting number but found ' + typeof e;
							switch (n[7]) {
								case 'b':
									e = e.toString(2);
									break;
								case 'c':
									e = String.fromCharCode(e);
									break;
								case 'd':
									e = parseInt(e);
									break;
								case 'e':
									e = n[6] ? e.toExponential(n[6]) : e.toExponential();
									break;
								case 'f':
									e = n[6] ? parseFloat(e).toFixed(n[6]) : parseFloat(e);
									break;
								case 'o':
									e = e.toString(8);
									break;
								case 's':
									e = (e = String(e)) && n[6] ? e.substring(0, n[6]) : e;
									break;
								case 'u':
									e = Math.abs(e);
									break;
								case 'x':
									e = e.toString(16);
									break;
								case 'X':
									e = e.toString(16).toUpperCase();
									break;
							}
							(e = /[def]/.test(n[7]) && n[2] && e > 0 ? '+' + e : e),
								(t = n[3] ? (n[3] == '0' ? '0' : n[3].charAt(1)) : ' '),
								(_ = n[5] - String(e).length),
								(c = n[5] ? he(t, _) : ''),
								h.push(n[4] ? e + c : c + e);
						} else throw 'Huh ?!';
						i = i.substring(n[0].length);
					}
					return h.join('');
				}
				var pe = v('./components/src/hooks/useComponent.tsx'),
					_e = v('./components/src/hooks/useLang.tsx'),
					be = v('./components/src/hooks/useA11y.tsx'),
					ye = v('../../node_modules/deepmerge/dist/cjs.js'),
					xe = v.n(ye);
				const ke = ({
						railColor: r,
						trackColor: l,
						handleColor: e,
						valueTextColor: i,
						handleDraggingColor: h,
						showTicks: n,
						stickyHandleLabel: c,
						tickTextColor: t,
						theme: _,
					}) =>
						(0, se.AH)({
							display: 'flex',
							flexDirection: 'column',
							marginTop: '5px',
							marginBottom: n && c ? '20px' : n || c ? '10px' : '5px',
							'& .ss__facet-slider__slider': {
								position: 'relative',
								display: 'inline-block',
								height: '8px',
								width: 'calc(100% - 2rem)',
								margin: c ? '1rem' : '0 1rem',
								top: '10px',
							},
							'& .ss__facet-slider__tick': {
								'&:before': {
									content: "''",
									position: 'absolute',
									left: '0',
									background: 'rgba(0, 0, 0, 0.2)',
									height: '5px',
									width: '2px',
									transform: 'translate(-50%, 0.7rem)',
								},
								'& .ss__facet-slider__tick__label': {
									position: 'absolute',
									fontSize: '0.6rem',
									color: t,
									top: '100%',
									transform: 'translate(-50%, 1.2rem)',
									whiteSpace: 'nowrap',
								},
							},
							'& .ss__facet-slider__rail': { background: r || _?.variables?.colors?.primary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: l || _?.variables?.colors?.secondary || '#ccc', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: e || _?.variables?.colors?.primary || '#333',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '1.6rem',
										height: '1.6rem',
										borderRadius: '100%',
										fontSize: '0.7rem',
										whiteSpace: 'nowrap',
										color: i || 'initial',
										fontWeight: 'normal',
										transform: 'translateY(0) scale(0.9)',
										transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
										position: 'relative',
										cursor: 'pointer',
										'&:after': {
											backgroundColor: '#ffffff',
											width: '30%',
											height: '30%',
											top: '0',
											bottom: '0',
											left: '0',
											content: '""',
											position: 'absolute',
											right: '0',
											borderRadius: '12px',
											margin: 'auto',
											cursor: 'pointer',
										},
										'&.ss__facet-slider__handle--active': {
											background: h || e || _?.variables?.colors?.primary || '#000',
											'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
										},
										'& label.ss__facet-slider__handle__label': {
											display: 'inline-block',
											marginTop: n && !c ? '35px' : '20px',
											'&.ss__facet-slider__handle__label--pinleft': { left: '0px' },
											'&.ss__facet-slider__handle__label--pinright': { right: '0px' },
											'&.ss__facet-slider__handle__label--sticky': {
												position: 'absolute',
												top: '-20px',
												fontFamily: 'Roboto, Helvetica, Arial',
												fontSize: '14px',
												marginTop: '0px',
											},
										},
									},
								},
							},
							'& .ss__facet-slider__labels': {
								textAlign: 'center',
								marginTop: n && !c ? '40px' : '20px',
								color: i,
								'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
							},
						}),
					Se = (0, ae.PA)((r) => {
						const l = (0, ue.u)(),
							e = (0, de.uk)(),
							i = (0, fe.LU)(),
							h = { tickSize: r.facet?.step ? r.facet?.step * 10 : 20, treePath: i },
							n = (0, ge.v6)('facetSlider', l, h, r),
							{
								showTicks: c,
								facet: t,
								stickyHandleLabel: _,
								separateHandles: k,
								onChange: Y,
								onDrag: O,
								className: j,
								internalClassName: B,
								customComponent: L,
							} = n;
						if (L) {
							const u = (0, pe.x)(e?.templates?.library.import.component.facetSlider || {}, L);
							if (u) return (0, x.Y)(u, { ...n });
						}
						let { tickSize: $ } = n;
						isNaN(Number($)) || Number($) <= 0 ? ($ = r.facet?.step ? r.facet?.step * 10 : 20) : ($ = Number($));
						const [H, R] = (0, q.J0)([t.active?.low, t.active?.high]),
							[G, D] = (0, q.J0)([t.active?.low, t.active?.high]),
							A = (u) => {
								if (!k || !t.step) return u;
								const [o, M] = u,
									F = t.range?.low,
									X = t.range?.high,
									T = t.step;
								return o === M ? (M + T <= X ? [o, M + T] : o - T >= F ? [o - T, M] : u) : u;
							};
						(((t.active?.low || t.active?.low === 0) && t.active?.high && H[0] != t.active?.low) || H[1] != t.active?.high) &&
							(D([t.active?.low, t.active?.high]), R([t.active?.low, t.active?.high]));
						const {
								getTrackProps: J,
								ticks: U,
								segments: W,
								handles: N,
							} = ce({
								values: G,
								onChange: (u) => {
									const o = A(u);
									D(o),
										Y && Y(o),
										t?.services?.urlManager &&
											(o[0] == t.range.low && o[1] == t.range.high
												? t.services.urlManager.remove('page').remove(`filter.${t.field}`).go()
												: t.services.urlManager.remove('page').set(`filter.${t.field}`, { low: o[0], high: o[1] }).go()),
										Y && Y(u);
								},
								onDrag: (u) => {
									const o = A(u);
									D(o), O && O(o);
								},
								min: t.range?.low,
								max: t.range?.high,
								stepSize: t.step,
								tickSize: $,
							}),
							Z = (0, ve.Z)(n, ke);
						return t.range && t.active && t.step
							? (0, x.Y)(me._, {
									children: (0, x.FD)('div', {
										className: I()('ss__facet-slider', j, B),
										...J(),
										...Z,
										children: [
											(0, x.FD)('div', {
												className: 'ss__facet-slider__slider',
												children: [
													c &&
														U.map(({ value: u, getTickProps: o }) =>
															(0, x.Y)('div', {
																className: 'ss__facet-slider__tick',
																...o(),
																children: (0, x.Y)('div', { className: 'ss__facet-slider__tick__label', children: u }),
															})
														),
													W.map(({ getSegmentProps: u }, o) =>
														(0, x.Y)('div', { className: `${o === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...u() })
													),
													(0, x.Y)('div', {
														className: 'ss__facet-slider__handles',
														children: N.map(({ value: u, active: o, getHandleProps: M }, F) => {
															const X = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${t.label} button, current value ${u}, ${t.range?.low ? `min value ${t.range?.low},` : ''} ${
																				t.range?.high ? `max value ${t.range?.high}` : ''
																			}`,
																		},
																	},
																},
																T = xe()(X, n.lang || {}),
																a = (0, _e.u)(T, { facet: t, value: u });
															return (0, x.Y)('button', {
																type: 'button',
																...M({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...a.sliderHandle?.all,
																ref: (s) => (0, be.iy)(s),
																children: (0, x.Y)('div', {
																	className: I()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': o }),
																	children:
																		_ &&
																		(0, x.Y)('label', {
																			className: I()(
																				'ss__facet-slider__handle__label',
																				'ss__facet-slider__handle__label--sticky',
																				`ss__facet-slider__handle__label--${F}`,
																				{ 'ss__facet-slider__handle__label--pinleft': F == 0 && u == t?.range?.low },
																				{ 'ss__facet-slider__handle__label--pinright': F == 1 && u == t?.range?.high }
																			),
																			children: ee(t.formatValue, u),
																		}),
																}),
															});
														}),
													}),
												],
											}),
											!_ &&
												(0, x.Y)('div', {
													className: 'ss__facet-slider__labels',
													children: N.map(({ value: u }, o) =>
														(0, x.Y)('label', {
															className: I()('ss__facet-slider__label', `ss__facet-slider__label--${o}`),
															children: ee(t.formatValue, u),
														})
													),
												}),
										],
									}),
							  })
							: null;
					});
			},
		},
	]);
})();
