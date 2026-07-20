(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[936],
		{
			'../../node_modules/@storybook/blocks/dist/Color-6VNJS4EI.mjs'(R, z, C) {
				'use strict';
				C.r(z), C.d(z, { ColorControl: () => Ne, default: () => kt });
				var _ = C('../../node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs'),
					d = C('../../node_modules/preact/compat/dist/compat.module.js'),
					i,
					$,
					n,
					s;
				function t() {
					return (t =
						Object.assign ||
						function (e) {
							for (var o = 1; o < arguments.length; o++) {
								var u = arguments[o];
								for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (e[f] = u[f]);
							}
							return e;
						}).apply(this, arguments);
				}
				function a(e, o) {
					if (e == null) return {};
					var u,
						f,
						m = {},
						h = Object.keys(e);
					for (f = 0; f < h.length; f++) o.indexOf((u = h[f])) >= 0 || (m[u] = e[u]);
					return m;
				}
				function r(e) {
					var o = (0, d.useRef)(e),
						u = (0, d.useRef)(function (f) {
							o.current && o.current(f);
						});
					return (o.current = e), u.current;
				}
				var l = function (e, o, u) {
						return o === void 0 && (o = 0), u === void 0 && (u = 1), e > u ? u : e < o ? o : e;
					},
					c = function (e) {
						return 'touches' in e;
					},
					g = function (e) {
						return (e && e.ownerDocument.defaultView) || self;
					},
					p = function (e, o, u) {
						var f = e.getBoundingClientRect(),
							m = c(o)
								? (function (h, v) {
										for (var b = 0; b < h.length; b++) if (h[b].identifier === v) return h[b];
										return h[0];
								  })(o.touches, u)
								: o;
						return { left: l((m.pageX - (f.left + g(e).pageXOffset)) / f.width), top: l((m.pageY - (f.top + g(e).pageYOffset)) / f.height) };
					},
					y = function (e) {
						!c(e) && e.preventDefault();
					},
					j = d.default.memo(function (e) {
						var o = e.onMove,
							u = e.onKey,
							f = e.onEnd,
							m = a(e, ['onMove', 'onKey', 'onEnd']),
							h = (0, d.useRef)(null),
							v = r(o),
							b = r(u),
							x = r(f),
							k = (0, d.useRef)(null),
							M = (0, d.useRef)(!1),
							E = (0, d.useMemo)(
								function () {
									var re = function (F) {
											y(F), (c(F) ? F.touches.length > 0 : F.buttons > 0) && h.current ? v(p(h.current, F, k.current)) : (B(!1), x());
										},
										T = function () {
											B(!1), x();
										};
									function B(F) {
										var S = M.current,
											U = g(h.current),
											oe = F ? U.addEventListener : U.removeEventListener;
										oe(S ? 'touchmove' : 'mousemove', re), oe(S ? 'touchend' : 'mouseup', T);
									}
									return [
										function (F) {
											var S = F.nativeEvent,
												U = h.current;
											if (
												U &&
												(y(S),
												!(function (wt, Et) {
													return Et && !c(wt);
												})(S, M.current) && U)
											) {
												if (c(S)) {
													M.current = !0;
													var oe = S.changedTouches || [];
													oe.length && (k.current = oe[0].identifier);
												}
												U.focus(), v(p(U, S, k.current)), B(!0);
											}
										},
										function (F) {
											var S = F.which || F.keyCode;
											S < 37 ||
												S > 40 ||
												(F.preventDefault(), b({ left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0, top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0 }));
										},
										function (F) {
											var S = F.which || F.keyCode;
											S >= 37 && S <= 40 && x();
										},
										B,
									];
								},
								[b, v, x]
							),
							w = E[0],
							O = E[1],
							W = E[2],
							Q = E[3];
						return (
							(0, d.useEffect)(
								function () {
									return Q;
								},
								[Q]
							),
							d.default.createElement(
								'div',
								t({}, m, {
									onTouchStart: w,
									onMouseDown: w,
									className: 'react-colorful__interactive',
									ref: h,
									onKeyDown: O,
									onKeyUp: W,
									tabIndex: 0,
									role: 'slider',
								})
							)
						);
					}),
					I = function (e) {
						return e.filter(Boolean).join(' ');
					},
					L = function (e) {
						var o = e.color,
							u = e.left,
							f = e.top,
							m = f === void 0 ? 0.5 : f,
							h = I(['react-colorful__pointer', e.className]);
						return d.default.createElement(
							'div',
							{ className: h, style: { top: 100 * m + '%', left: 100 * u + '%' } },
							d.default.createElement('div', { className: 'react-colorful__pointer-fill', style: { backgroundColor: o } })
						);
					},
					N = function (e, o, u) {
						return o === void 0 && (o = 0), u === void 0 && (u = Math.pow(10, o)), Math.round(u * e) / u;
					},
					K = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
					ee = function (e) {
						return ve(X(e));
					},
					X = function (e) {
						return (
							e[0] === '#' && (e = e.substring(1)),
							e.length < 6
								? {
										r: parseInt(e[0] + e[0], 16),
										g: parseInt(e[1] + e[1], 16),
										b: parseInt(e[2] + e[2], 16),
										a: e.length === 4 ? N(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
								  }
								: {
										r: parseInt(e.substring(0, 2), 16),
										g: parseInt(e.substring(2, 4), 16),
										b: parseInt(e.substring(4, 6), 16),
										a: e.length === 8 ? N(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
								  }
						);
					},
					ae = function (e, o) {
						return o === void 0 && (o = 'deg'), Number(e) * (K[o] || 1);
					},
					he = function (e) {
						var o = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
							e
						);
						return o
							? J({ h: ae(o[1], o[2]), s: Number(o[3]), l: Number(o[4]), a: o[5] === void 0 ? 1 : Number(o[5]) / (o[6] ? 100 : 1) })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					ge = null,
					J = function (e) {
						var o = e.s,
							u = e.l;
						return { h: e.h, s: (o *= (u < 50 ? u : 100 - u) / 100) > 0 ? ((2 * o) / (u + o)) * 100 : 0, v: u + o, a: e.a };
					},
					le = function (e) {
						return He(H(e));
					},
					se = function (e) {
						var o = e.s,
							u = e.v,
							f = e.a,
							m = ((200 - o) * u) / 100;
						return { h: N(e.h), s: N(m > 0 && m < 200 ? ((o * u) / 100 / (m <= 100 ? m : 200 - m)) * 100 : 0), l: N(m / 2), a: N(f, 2) };
					},
					te = function (e) {
						var o = se(e);
						return 'hsl(' + o.h + ', ' + o.s + '%, ' + o.l + '%)';
					},
					q = function (e) {
						var o = se(e);
						return 'hsla(' + o.h + ', ' + o.s + '%, ' + o.l + '%, ' + o.a + ')';
					},
					H = function (e) {
						var o = e.h,
							u = e.s,
							f = e.v,
							m = e.a;
						(o = (o / 360) * 6), (u /= 100), (f /= 100);
						var h = Math.floor(o),
							v = f * (1 - u),
							b = f * (1 - (o - h) * u),
							x = f * (1 - (1 - o + h) * u),
							k = h % 6;
						return { r: N(255 * [f, b, v, v, x, f][k]), g: N(255 * [x, f, f, b, v, v][k]), b: N(255 * [v, v, x, f, f, b][k]), a: N(m, 2) };
					},
					A = function (e) {
						var o = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
							e
						);
						return o
							? Oe({ h: ae(o[1], o[2]), s: Number(o[3]), v: Number(o[4]), a: o[5] === void 0 ? 1 : Number(o[5]) / (o[6] ? 100 : 1) })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					Y = null,
					ce = function (e) {
						var o = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
						return o
							? ve({
									r: Number(o[1]) / (o[2] ? 100 / 255 : 1),
									g: Number(o[3]) / (o[4] ? 100 / 255 : 1),
									b: Number(o[5]) / (o[6] ? 100 / 255 : 1),
									a: o[7] === void 0 ? 1 : Number(o[7]) / (o[8] ? 100 : 1),
							  })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					Ct = null,
					ue = function (e) {
						var o = e.toString(16);
						return o.length < 2 ? '0' + o : o;
					},
					He = function (e) {
						var o = e.r,
							u = e.g,
							f = e.b,
							m = e.a,
							h = m < 1 ? ue(N(255 * m)) : '';
						return '#' + ue(o) + ue(u) + ue(f) + h;
					},
					ve = function (e) {
						var o = e.r,
							u = e.g,
							f = e.b,
							m = e.a,
							h = Math.max(o, u, f),
							v = h - Math.min(o, u, f),
							b = v ? (h === o ? (u - f) / v : h === u ? 2 + (f - o) / v : 4 + (o - u) / v) : 0;
						return { h: N(60 * (b < 0 ? b + 6 : b)), s: N(h ? (v / h) * 100 : 0), v: N((h / 255) * 100), a: m };
					},
					Oe = function (e) {
						return { h: N(e.h), s: N(e.s), v: N(e.v), a: N(e.a, 2) };
					},
					be = d.default.memo(function (e) {
						var o = e.hue,
							u = e.onChange,
							f = e.onChangeEnd,
							m = I(['react-colorful__hue', e.className]);
						return d.default.createElement(
							'div',
							{ className: m },
							d.default.createElement(
								j,
								{
									onMove: function (h) {
										u({ h: 360 * h.left });
									},
									onKey: function (h) {
										u({ h: l(o + 360 * h.left, 0, 360) });
									},
									onEnd: f,
									'aria-label': 'Hue',
									'aria-valuenow': N(o),
									'aria-valuemax': '360',
									'aria-valuemin': '0',
								},
								d.default.createElement(L, { className: 'react-colorful__hue-pointer', left: o / 360, color: te({ h: o, s: 100, v: 100, a: 1 }) })
							)
						);
					}),
					pe = d.default.memo(function (e) {
						var o = e.hsva,
							u = e.onChange,
							f = e.onChangeEnd,
							m = { backgroundColor: te({ h: o.h, s: 100, v: 100, a: 1 }) };
						return d.default.createElement(
							'div',
							{ className: 'react-colorful__saturation', style: m },
							d.default.createElement(
								j,
								{
									onMove: function (h) {
										u({ s: 100 * h.left, v: 100 - 100 * h.top });
									},
									onKey: function (h) {
										u({ s: l(o.s + 100 * h.left, 0, 100), v: l(o.v - 100 * h.top, 0, 100) });
									},
									onEnd: f,
									'aria-label': 'Color',
									'aria-valuetext': 'Saturation ' + N(o.s) + '%, Brightness ' + N(o.v) + '%',
								},
								d.default.createElement(L, { className: 'react-colorful__saturation-pointer', top: 1 - o.v / 100, left: o.s / 100, color: te(o) })
							)
						);
					}),
					xe = function (e, o) {
						if (e === o) return !0;
						for (var u in e) if (e[u] !== o[u]) return !1;
						return !0;
					},
					ye = function (e, o) {
						return e.replace(/\s/g, '') === o.replace(/\s/g, '');
					},
					Re = function (e, o) {
						return e.toLowerCase() === o.toLowerCase() || xe(X(e), X(o));
					};
				function ke(e, o, u, f) {
					var m = r(u),
						h = r(f),
						v = (0, d.useState)(function () {
							return e.toHsva(o);
						}),
						b = v[0],
						x = v[1],
						k = (0, d.useRef)({ color: o, hsva: b }),
						M = (0, d.useRef)(!1);
					(0, d.useEffect)(
						function () {
							if (!e.equal(o, k.current.color)) {
								var O = e.toHsva(o);
								(k.current = { hsva: O, color: o }), x(O), (M.current = !1);
							}
						},
						[o, e]
					),
						(0, d.useEffect)(
							function () {
								var O;
								xe(b, k.current.hsva) ||
									e.equal((O = e.fromHsva(b)), k.current.color) ||
									((k.current = { hsva: b, color: O }), m(O), (M.current = !0));
							},
							[b, e, m]
						);
					var E = (0, d.useCallback)(function (O) {
							x(function (W) {
								return Object.assign({}, W, O);
							});
						}, []),
						w = (0, d.useCallback)(
							function () {
								M.current && ((M.current = !1), h(k.current.color));
							},
							[h]
						);
					return [b, E, w];
				}
				var we,
					$e = typeof window < 'u' ? d.useLayoutEffect : d.useEffect,
					Se = function () {
						return we || C.nc;
					},
					Mt = function (e) {
						we = e;
					},
					Ee = new WeakMap(),
					Ce = function (e) {
						$e(function () {
							var o = e.current;
							if (typeof document < 'u' && o) {
								var u = o.getRootNode ? o.getRootNode() : o.ownerDocument,
									f = u && ('head' in u || 'host' in u) ? u : o.ownerDocument;
								if (!Ee.has(f)) {
									var m = 'head' in f ? f.head : f,
										h = (m.ownerDocument || document).createElement('style');
									h.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`;
									var v = Se();
									v && h.setAttribute('nonce', v), Ee.set(f, h), m.appendChild(h);
								}
							}
						}, []);
					},
					G = function (e) {
						var o = e.className,
							u = e.colorModel,
							f = e.color,
							m = f === void 0 ? u.defaultColor : f,
							h = e.onChange,
							v = e.onChangeEnd,
							b = a(e, ['className', 'colorModel', 'color', 'onChange', 'onChangeEnd']),
							x = (0, d.useRef)(null);
						Ce(x);
						var k = ke(u, m, h, v),
							M = k[0],
							E = k[1],
							w = k[2],
							O = I(['react-colorful', o]);
						return d.default.createElement(
							'div',
							t({}, b, { ref: x, className: O }),
							d.default.createElement(pe, { hsva: M, onChange: E, onChangeEnd: w }),
							d.default.createElement(be, { hue: M.h, onChange: E, onChangeEnd: w, className: 'react-colorful__last-control' })
						);
					},
					Te = {
						defaultColor: '000',
						toHsva: ee,
						fromHsva: function (e) {
							return le({ h: e.h, s: e.s, v: e.v, a: 1 });
						},
						equal: Re,
					},
					Fe = function (e) {
						return d.default.createElement(G, t({}, e, { colorModel: Te }));
					},
					ze = function (e) {
						var o = e.className,
							u = e.hsva,
							f = e.onChange,
							m = e.onChangeEnd,
							h = { backgroundImage: 'linear-gradient(90deg, ' + q(Object.assign({}, u, { a: 0 })) + ', ' + q(Object.assign({}, u, { a: 1 })) + ')' },
							v = I(['react-colorful__alpha', o]),
							b = N(100 * u.a);
						return d.default.createElement(
							'div',
							{ className: v },
							d.default.createElement('div', { className: 'react-colorful__alpha-gradient', style: h }),
							d.default.createElement(
								j,
								{
									onMove: function (x) {
										f({ a: x.left });
									},
									onKey: function (x) {
										f({ a: l(u.a + x.left) });
									},
									onEnd: m,
									'aria-label': 'Alpha',
									'aria-valuetext': b + '%',
									'aria-valuenow': b,
									'aria-valuemin': '0',
									'aria-valuemax': '100',
								},
								d.default.createElement(L, { className: 'react-colorful__alpha-pointer', left: u.a, color: q(u) })
							)
						);
					},
					V = function (e) {
						var o = e.className,
							u = e.colorModel,
							f = e.color,
							m = f === void 0 ? u.defaultColor : f,
							h = e.onChange,
							v = e.onChangeEnd,
							b = a(e, ['className', 'colorModel', 'color', 'onChange', 'onChangeEnd']),
							x = (0, d.useRef)(null);
						Ce(x);
						var k = ke(u, m, h, v),
							M = k[0],
							E = k[1],
							w = k[2],
							O = I(['react-colorful', o]);
						return d.default.createElement(
							'div',
							t({}, b, { ref: x, className: O }),
							d.default.createElement(pe, { hsva: M, onChange: E, onChangeEnd: w }),
							d.default.createElement(be, { hue: M.h, onChange: E, onChangeEnd: w }),
							d.default.createElement(ze, { hsva: M, onChange: E, onChangeEnd: w, className: 'react-colorful__last-control' })
						);
					},
					Pe = null,
					_t = function (e) {
						return i.createElement(V, t({}, e, { colorModel: Pe }));
					},
					Le = null,
					jt = function (e) {
						return i.createElement(V, t({}, e, { colorModel: Le }));
					},
					Be = { defaultColor: 'hsla(0, 0%, 0%, 1)', toHsva: he, fromHsva: q, equal: ye },
					Ae = function (e) {
						return d.default.createElement(V, t({}, e, { colorModel: Be }));
					},
					We = null,
					It = function (e) {
						return i.createElement(G, t({}, e, { colorModel: We }));
					},
					qe = null,
					Nt = function (e) {
						return i.createElement(G, t({}, e, { colorModel: qe }));
					},
					De = null,
					Ht = function (e) {
						return i.createElement(V, t({}, e, { colorModel: De }));
					},
					Ke = null,
					Ot = function (e) {
						return i.createElement(V, t({}, e, { colorModel: Ke }));
					},
					Xe = null,
					Rt = function (e) {
						return i.createElement(G, t({}, e, { colorModel: Xe }));
					},
					Ge = null,
					$t = function (e) {
						return i.createElement(G, t({}, e, { colorModel: Ge }));
					},
					Ve = null,
					St = function (e) {
						return i.createElement(V, t({}, e, { colorModel: Ve }));
					},
					Ue = {
						defaultColor: 'rgba(0, 0, 0, 1)',
						toHsva: ce,
						fromHsva: function (e) {
							var o = H(e);
							return 'rgba(' + o.r + ', ' + o.g + ', ' + o.b + ', ' + o.a + ')';
						},
						equal: ye,
					},
					Je = function (e) {
						return d.default.createElement(V, t({}, e, { colorModel: Ue }));
					},
					Ye = null,
					Tt = function (e) {
						return i.createElement(G, t({}, e, { colorModel: Ye }));
					},
					Ze = null,
					Ft = function (e) {
						return i.createElement(G, t({}, e, { colorModel: Ze }));
					},
					Qe = /^#?([0-9A-F]{3,8})$/i,
					et = function (e) {
						var o = e.color,
							u = o === void 0 ? '' : o,
							f = e.onChange,
							m = e.onBlur,
							h = e.escape,
							v = e.validate,
							b = e.format,
							x = e.process,
							k = a(e, ['color', 'onChange', 'onBlur', 'escape', 'validate', 'format', 'process']),
							M = $(function () {
								return h(u);
							}),
							E = M[0],
							w = M[1],
							O = r(f),
							W = r(m),
							Q = n(
								function (T) {
									var B = h(T.target.value);
									w(B), v(B) && O(x ? x(B) : B);
								},
								[h, x, v, O]
							),
							re = n(
								function (T) {
									v(T.target.value) || w(h(u)), W(T);
								},
								[u, h, v, W]
							);
						return (
							s(
								function () {
									w(h(u));
								},
								[u, h]
							),
							i.createElement('input', t({}, k, { value: b ? b(E) : E, spellCheck: 'false', onChange: Q, onBlur: re }))
						);
					},
					Me = function (e) {
						return '#' + e;
					},
					zt = function (e) {
						var o = e.prefixed,
							u = e.alpha,
							f = a(e, ['prefixed', 'alpha']),
							m = n(
								function (v) {
									return v.replace(/([^0-9A-F]+)/gi, '').substring(0, u ? 8 : 6);
								},
								[u]
							),
							h = n(
								function (v) {
									return (function (b, x) {
										var k = Qe.exec(b),
											M = k ? k[1].length : 0;
										return M === 3 || M === 6 || (!!x && M === 4) || (!!x && M === 8);
									})(v, u);
								},
								[u]
							);
						return i.createElement(et, t({}, f, { escape: m, format: o ? Me : void 0, process: Me, validate: h }));
					},
					tt = C('../../node_modules/color-convert/index.js'),
					P = C.n(tt),
					nt = C('../../node_modules/lodash/throttle.js'),
					rt = C.n(nt),
					D = C('../../node_modules/@storybook/theming/dist/index.mjs'),
					ne = C('../../node_modules/@storybook/components/dist/index.mjs'),
					ot = D.I4.div({ position: 'relative', maxWidth: 250 }),
					at = (0, D.I4)(ne.kR)({ position: 'absolute', zIndex: 1, top: 4, left: 4 }),
					lt = D.I4.div({
						width: 200,
						margin: 5,
						'.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
						'.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
						'.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
					}),
					st = (0, D.I4)(ne._)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
					ct = D.I4.div({ display: 'grid', gridTemplateColumns: 'repeat(9, 16px)', gap: 6, padding: 3, marginTop: 5, width: 200 }),
					ut = D.I4.div(({ theme: e, active: o }) => ({
						width: 16,
						height: 16,
						boxShadow: o ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px` : `${e.appBorderColor} 0 0 0 1px inset`,
						borderRadius: e.appBorderRadius,
					})),
					it = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
					_e = ({ value: e, active: o, onClick: u, style: f, ...m }) => {
						let h = `linear-gradient(${e}, ${e}), ${it}, linear-gradient(#fff, #fff)`;
						return d.default.createElement(ut, { ...m, active: o, onClick: u, style: { ...f, backgroundImage: h } });
					},
					dt = (0, D.I4)(ne.lV.Input)(({ theme: e }) => ({
						width: '100%',
						paddingLeft: 30,
						paddingRight: 30,
						boxSizing: 'border-box',
						fontFamily: e.typography.fonts.base,
					})),
					ft = (0, D.I4)(ne.FI)(({ theme: e }) => ({
						position: 'absolute',
						zIndex: 1,
						top: 6,
						right: 7,
						width: 20,
						height: 20,
						padding: 4,
						boxSizing: 'border-box',
						cursor: 'pointer',
						color: e.input.color,
					})),
					je = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(je || {}),
					ie = Object.values(je),
					ht = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
					gt = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
					mt = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
					me = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
					vt = /^\s*#?([0-9a-f]{3})\s*$/i,
					bt = { hex: Fe, rgb: Je, hsl: Ae },
					de = { hex: 'transparent', rgb: 'rgba(0, 0, 0, 0)', hsl: 'hsla(0, 0%, 0%, 0)' },
					Ie = (e) => {
						let o = e?.match(ht);
						if (!o) return [0, 0, 0, 1];
						let [, u, f, m, h = 1] = o;
						return [u, f, m, h].map(Number);
					},
					Z = (e) => {
						if (!e) return;
						let o = !0;
						if (gt.test(e)) {
							let [v, b, x, k] = Ie(e),
								[M, E, w] = P().rgb.hsl([v, b, x]) || [0, 0, 0];
							return {
								valid: o,
								value: e,
								keyword: P().rgb.keyword([v, b, x]),
								colorSpace: 'rgb',
								rgb: e,
								hsl: `hsla(${M}, ${E}%, ${w}%, ${k})`,
								hex: `#${P().rgb.hex([v, b, x]).toLowerCase()}`,
							};
						}
						if (mt.test(e)) {
							let [v, b, x, k] = Ie(e),
								[M, E, w] = P().hsl.rgb([v, b, x]) || [0, 0, 0];
							return {
								valid: o,
								value: e,
								keyword: P().hsl.keyword([v, b, x]),
								colorSpace: 'hsl',
								rgb: `rgba(${M}, ${E}, ${w}, ${k})`,
								hsl: e,
								hex: `#${P().hsl.hex([v, b, x]).toLowerCase()}`,
							};
						}
						let u = e.replace('#', ''),
							f = P().keyword.rgb(u) || P().hex.rgb(u),
							m = P().rgb.hsl(f),
							h = e;
						if ((/[^#a-f0-9]/i.test(e) ? (h = u) : me.test(e) && (h = `#${u}`), h.startsWith('#'))) o = me.test(h);
						else
							try {
								P().keyword.hex(h);
							} catch {
								o = !1;
							}
						return {
							valid: o,
							value: h,
							keyword: P().rgb.keyword(f),
							colorSpace: 'hex',
							rgb: `rgba(${f[0]}, ${f[1]}, ${f[2]}, 1)`,
							hsl: `hsla(${m[0]}, ${m[1]}%, ${m[2]}%, 1)`,
							hex: h,
						};
					},
					pt = (e, o, u) => {
						if (!e || !o?.valid) return de[u];
						if (u !== 'hex') return o?.[u] || de[u];
						if (!o.hex.startsWith('#'))
							try {
								return `#${P().keyword.hex(o.hex)}`;
							} catch {
								return de.hex;
							}
						let f = o.hex.match(vt);
						if (!f) return me.test(o.hex) ? o.hex : de.hex;
						let [m, h, v] = f[1].split('');
						return `#${m}${m}${h}${h}${v}${v}`;
					},
					xt = (e, o) => {
						let [u, f] = (0, d.useState)(e || ''),
							[m, h] = (0, d.useState)(() => Z(u)),
							[v, b] = (0, d.useState)(m?.colorSpace || 'hex');
						(0, d.useEffect)(() => {
							let E = e || '',
								w = Z(E);
							f(E), h(w), b(w?.colorSpace || 'hex');
						}, [e]);
						let x = (0, d.useMemo)(() => pt(u, m, v).toLowerCase(), [u, m, v]),
							k = (0, d.useCallback)(
								(E) => {
									let w = Z(E),
										O = w?.value || E || '';
									f(O), O === '' && (h(void 0), o(void 0)), w && (h(w), b(w.colorSpace), o(w.value));
								},
								[o]
							),
							M = (0, d.useCallback)(() => {
								let E = ie.indexOf(v) + 1;
								E >= ie.length && (E = 0), b(ie[E]);
								let w = m?.[ie[E]] || '';
								f(w), o(w);
							}, [m, v, o]);
						return { value: u, realValue: x, updateValue: k, color: m, colorSpace: v, cycleColorSpace: M };
					},
					fe = (e) => e.replace(/\s*/, '').toLowerCase(),
					yt = (e, o, u) => {
						let [f, m] = (0, d.useState)(o?.valid ? [o] : []);
						(0, d.useEffect)(() => {
							o === void 0 && m([]);
						}, [o]);
						let h = (0, d.useMemo)(
								() =>
									(e || [])
										.map((b) => (typeof b == 'string' ? Z(b) : b.title ? { ...Z(b.color), keyword: b.title } : Z(b.color)))
										.concat(f)
										.filter(Boolean)
										.slice(-27),
								[e, f]
							),
							v = (0, d.useCallback)(
								(b) => {
									b?.valid && (h.some((x) => fe(x[u]) === fe(b[u])) || m((x) => x.concat(b)));
								},
								[u, h]
							);
						return { presets: h, addPreset: v };
					},
					Ne = ({ name: e, value: o, onChange: u, onFocus: f, onBlur: m, presetColors: h, startOpen: v = !1 }) => {
						let b = (0, d.useCallback)(rt()(u, 200), [u]),
							{ value: x, realValue: k, updateValue: M, color: E, colorSpace: w, cycleColorSpace: O } = xt(o, b),
							{ presets: W, addPreset: Q } = yt(h, E, w),
							re = bt[w];
						return d.default.createElement(
							ot,
							null,
							d.default.createElement(
								at,
								{
									startOpen: v,
									closeOnOutsideClick: !0,
									onVisibleChange: () => Q(E),
									tooltip: d.default.createElement(
										lt,
										null,
										d.default.createElement(re, { color: k === 'transparent' ? '#000000' : k, onChange: M, onFocus: f, onBlur: m }),
										W.length > 0 &&
											d.default.createElement(
												ct,
												null,
												W.map((T, B) =>
													d.default.createElement(
														ne.kR,
														{ key: `${T.value}-${B}`, hasChrome: !1, tooltip: d.default.createElement(st, { note: T.keyword || T.value }) },
														d.default.createElement(_e, { value: T[w], active: E && fe(T[w]) === fe(E[w]), onClick: () => M(T.value) })
													)
												)
											)
									),
								},
								d.default.createElement(_e, { value: k, style: { margin: 4 } })
							),
							d.default.createElement(dt, {
								id: (0, _.Z)(e),
								value: x,
								onChange: (T) => M(T.target.value),
								onFocus: (T) => T.target.select(),
								placeholder: 'Choose color...',
							}),
							x ? d.default.createElement(ft, { icon: 'markup', onClick: O }) : null
						);
					},
					kt = Ne;
			},
			'../../node_modules/color-convert/conversions.js'(R, z, C) {
				const _ = C('../../node_modules/color-name/index.js'),
					d = {};
				for (const n of Object.keys(_)) d[_[n]] = n;
				const i = {
					rgb: { channels: 3, labels: 'rgb' },
					hsl: { channels: 3, labels: 'hsl' },
					hsv: { channels: 3, labels: 'hsv' },
					hwb: { channels: 3, labels: 'hwb' },
					cmyk: { channels: 4, labels: 'cmyk' },
					xyz: { channels: 3, labels: 'xyz' },
					lab: { channels: 3, labels: 'lab' },
					lch: { channels: 3, labels: 'lch' },
					hex: { channels: 1, labels: ['hex'] },
					keyword: { channels: 1, labels: ['keyword'] },
					ansi16: { channels: 1, labels: ['ansi16'] },
					ansi256: { channels: 1, labels: ['ansi256'] },
					hcg: { channels: 3, labels: ['h', 'c', 'g'] },
					apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
					gray: { channels: 1, labels: ['gray'] },
				};
				R.exports = i;
				for (const n of Object.keys(i)) {
					if (!('channels' in i[n])) throw new Error('missing channels property: ' + n);
					if (!('labels' in i[n])) throw new Error('missing channel labels property: ' + n);
					if (i[n].labels.length !== i[n].channels) throw new Error('channel and label counts mismatch: ' + n);
					const { channels: s, labels: t } = i[n];
					delete i[n].channels,
						delete i[n].labels,
						Object.defineProperty(i[n], 'channels', { value: s }),
						Object.defineProperty(i[n], 'labels', { value: t });
				}
				(i.rgb.hsl = function (n) {
					const s = n[0] / 255,
						t = n[1] / 255,
						a = n[2] / 255,
						r = Math.min(s, t, a),
						l = Math.max(s, t, a),
						c = l - r;
					let g, p;
					l === r ? (g = 0) : s === l ? (g = (t - a) / c) : t === l ? (g = 2 + (a - s) / c) : a === l && (g = 4 + (s - t) / c),
						(g = Math.min(g * 60, 360)),
						g < 0 && (g += 360);
					const y = (r + l) / 2;
					return l === r ? (p = 0) : y <= 0.5 ? (p = c / (l + r)) : (p = c / (2 - l - r)), [g, p * 100, y * 100];
				}),
					(i.rgb.hsv = function (n) {
						let s, t, a, r, l;
						const c = n[0] / 255,
							g = n[1] / 255,
							p = n[2] / 255,
							y = Math.max(c, g, p),
							j = y - Math.min(c, g, p),
							I = function (L) {
								return (y - L) / 6 / j + 1 / 2;
							};
						return (
							j === 0
								? ((r = 0), (l = 0))
								: ((l = j / y),
								  (s = I(c)),
								  (t = I(g)),
								  (a = I(p)),
								  c === y ? (r = a - t) : g === y ? (r = 1 / 3 + s - a) : p === y && (r = 2 / 3 + t - s),
								  r < 0 ? (r += 1) : r > 1 && (r -= 1)),
							[r * 360, l * 100, y * 100]
						);
					}),
					(i.rgb.hwb = function (n) {
						const s = n[0],
							t = n[1];
						let a = n[2];
						const r = i.rgb.hsl(n)[0],
							l = (1 / 255) * Math.min(s, Math.min(t, a));
						return (a = 1 - (1 / 255) * Math.max(s, Math.max(t, a))), [r, l * 100, a * 100];
					}),
					(i.rgb.cmyk = function (n) {
						const s = n[0] / 255,
							t = n[1] / 255,
							a = n[2] / 255,
							r = Math.min(1 - s, 1 - t, 1 - a),
							l = (1 - s - r) / (1 - r) || 0,
							c = (1 - t - r) / (1 - r) || 0,
							g = (1 - a - r) / (1 - r) || 0;
						return [l * 100, c * 100, g * 100, r * 100];
					});
				function $(n, s) {
					return (n[0] - s[0]) ** 2 + (n[1] - s[1]) ** 2 + (n[2] - s[2]) ** 2;
				}
				(i.rgb.keyword = function (n) {
					const s = d[n];
					if (s) return s;
					let t = 1 / 0,
						a;
					for (const r of Object.keys(_)) {
						const l = _[r],
							c = $(n, l);
						c < t && ((t = c), (a = r));
					}
					return a;
				}),
					(i.keyword.rgb = function (n) {
						return _[n];
					}),
					(i.rgb.xyz = function (n) {
						let s = n[0] / 255,
							t = n[1] / 255,
							a = n[2] / 255;
						(s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92),
							(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
							(a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92);
						const r = s * 0.4124 + t * 0.3576 + a * 0.1805,
							l = s * 0.2126 + t * 0.7152 + a * 0.0722,
							c = s * 0.0193 + t * 0.1192 + a * 0.9505;
						return [r * 100, l * 100, c * 100];
					}),
					(i.rgb.lab = function (n) {
						const s = i.rgb.xyz(n);
						let t = s[0],
							a = s[1],
							r = s[2];
						(t /= 95.047),
							(a /= 100),
							(r /= 108.883),
							(t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
							(a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
							(r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116);
						const l = 116 * a - 16,
							c = 500 * (t - a),
							g = 200 * (a - r);
						return [l, c, g];
					}),
					(i.hsl.rgb = function (n) {
						const s = n[0] / 360,
							t = n[1] / 100,
							a = n[2] / 100;
						let r, l, c;
						if (t === 0) return (c = a * 255), [c, c, c];
						a < 0.5 ? (r = a * (1 + t)) : (r = a + t - a * t);
						const g = 2 * a - r,
							p = [0, 0, 0];
						for (let y = 0; y < 3; y++)
							(l = s + (1 / 3) * -(y - 1)),
								l < 0 && l++,
								l > 1 && l--,
								6 * l < 1 ? (c = g + (r - g) * 6 * l) : 2 * l < 1 ? (c = r) : 3 * l < 2 ? (c = g + (r - g) * (2 / 3 - l) * 6) : (c = g),
								(p[y] = c * 255);
						return p;
					}),
					(i.hsl.hsv = function (n) {
						const s = n[0];
						let t = n[1] / 100,
							a = n[2] / 100,
							r = t;
						const l = Math.max(a, 0.01);
						(a *= 2), (t *= a <= 1 ? a : 2 - a), (r *= l <= 1 ? l : 2 - l);
						const c = (a + t) / 2,
							g = a === 0 ? (2 * r) / (l + r) : (2 * t) / (a + t);
						return [s, g * 100, c * 100];
					}),
					(i.hsv.rgb = function (n) {
						const s = n[0] / 60,
							t = n[1] / 100;
						let a = n[2] / 100;
						const r = Math.floor(s) % 6,
							l = s - Math.floor(s),
							c = 255 * a * (1 - t),
							g = 255 * a * (1 - t * l),
							p = 255 * a * (1 - t * (1 - l));
						switch (((a *= 255), r)) {
							case 0:
								return [a, p, c];
							case 1:
								return [g, a, c];
							case 2:
								return [c, a, p];
							case 3:
								return [c, g, a];
							case 4:
								return [p, c, a];
							case 5:
								return [a, c, g];
						}
					}),
					(i.hsv.hsl = function (n) {
						const s = n[0],
							t = n[1] / 100,
							a = n[2] / 100,
							r = Math.max(a, 0.01);
						let l, c;
						c = (2 - t) * a;
						const g = (2 - t) * r;
						return (l = t * r), (l /= g <= 1 ? g : 2 - g), (l = l || 0), (c /= 2), [s, l * 100, c * 100];
					}),
					(i.hwb.rgb = function (n) {
						const s = n[0] / 360;
						let t = n[1] / 100,
							a = n[2] / 100;
						const r = t + a;
						let l;
						r > 1 && ((t /= r), (a /= r));
						const c = Math.floor(6 * s),
							g = 1 - a;
						(l = 6 * s - c), (c & 1) !== 0 && (l = 1 - l);
						const p = t + l * (g - t);
						let y, j, I;
						switch (c) {
							default:
							case 6:
							case 0:
								(y = g), (j = p), (I = t);
								break;
							case 1:
								(y = p), (j = g), (I = t);
								break;
							case 2:
								(y = t), (j = g), (I = p);
								break;
							case 3:
								(y = t), (j = p), (I = g);
								break;
							case 4:
								(y = p), (j = t), (I = g);
								break;
							case 5:
								(y = g), (j = t), (I = p);
								break;
						}
						return [y * 255, j * 255, I * 255];
					}),
					(i.cmyk.rgb = function (n) {
						const s = n[0] / 100,
							t = n[1] / 100,
							a = n[2] / 100,
							r = n[3] / 100,
							l = 1 - Math.min(1, s * (1 - r) + r),
							c = 1 - Math.min(1, t * (1 - r) + r),
							g = 1 - Math.min(1, a * (1 - r) + r);
						return [l * 255, c * 255, g * 255];
					}),
					(i.xyz.rgb = function (n) {
						const s = n[0] / 100,
							t = n[1] / 100,
							a = n[2] / 100;
						let r, l, c;
						return (
							(r = s * 3.2406 + t * -1.5372 + a * -0.4986),
							(l = s * -0.9689 + t * 1.8758 + a * 0.0415),
							(c = s * 0.0557 + t * -0.204 + a * 1.057),
							(r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92),
							(l = l > 0.0031308 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92),
							(c = c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92),
							(r = Math.min(Math.max(0, r), 1)),
							(l = Math.min(Math.max(0, l), 1)),
							(c = Math.min(Math.max(0, c), 1)),
							[r * 255, l * 255, c * 255]
						);
					}),
					(i.xyz.lab = function (n) {
						let s = n[0],
							t = n[1],
							a = n[2];
						(s /= 95.047),
							(t /= 100),
							(a /= 108.883),
							(s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116),
							(t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
							(a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
						const r = 116 * t - 16,
							l = 500 * (s - t),
							c = 200 * (t - a);
						return [r, l, c];
					}),
					(i.lab.xyz = function (n) {
						const s = n[0],
							t = n[1],
							a = n[2];
						let r, l, c;
						(l = (s + 16) / 116), (r = t / 500 + l), (c = l - a / 200);
						const g = l ** 3,
							p = r ** 3,
							y = c ** 3;
						return (
							(l = g > 0.008856 ? g : (l - 16 / 116) / 7.787),
							(r = p > 0.008856 ? p : (r - 16 / 116) / 7.787),
							(c = y > 0.008856 ? y : (c - 16 / 116) / 7.787),
							(r *= 95.047),
							(l *= 100),
							(c *= 108.883),
							[r, l, c]
						);
					}),
					(i.lab.lch = function (n) {
						const s = n[0],
							t = n[1],
							a = n[2];
						let r;
						(r = (Math.atan2(a, t) * 360) / 2 / Math.PI), r < 0 && (r += 360);
						const c = Math.sqrt(t * t + a * a);
						return [s, c, r];
					}),
					(i.lch.lab = function (n) {
						const s = n[0],
							t = n[1],
							r = (n[2] / 360) * 2 * Math.PI,
							l = t * Math.cos(r),
							c = t * Math.sin(r);
						return [s, l, c];
					}),
					(i.rgb.ansi16 = function (n, s = null) {
						const [t, a, r] = n;
						let l = s === null ? i.rgb.hsv(n)[2] : s;
						if (((l = Math.round(l / 50)), l === 0)) return 30;
						let c = 30 + ((Math.round(r / 255) << 2) | (Math.round(a / 255) << 1) | Math.round(t / 255));
						return l === 2 && (c += 60), c;
					}),
					(i.hsv.ansi16 = function (n) {
						return i.rgb.ansi16(i.hsv.rgb(n), n[2]);
					}),
					(i.rgb.ansi256 = function (n) {
						const s = n[0],
							t = n[1],
							a = n[2];
						return s === t && t === a
							? s < 8
								? 16
								: s > 248
								? 231
								: Math.round(((s - 8) / 247) * 24) + 232
							: 16 + 36 * Math.round((s / 255) * 5) + 6 * Math.round((t / 255) * 5) + Math.round((a / 255) * 5);
					}),
					(i.ansi16.rgb = function (n) {
						let s = n % 10;
						if (s === 0 || s === 7) return n > 50 && (s += 3.5), (s = (s / 10.5) * 255), [s, s, s];
						const t = (~~(n > 50) + 1) * 0.5,
							a = (s & 1) * t * 255,
							r = ((s >> 1) & 1) * t * 255,
							l = ((s >> 2) & 1) * t * 255;
						return [a, r, l];
					}),
					(i.ansi256.rgb = function (n) {
						if (n >= 232) {
							const l = (n - 232) * 10 + 8;
							return [l, l, l];
						}
						n -= 16;
						let s;
						const t = (Math.floor(n / 36) / 5) * 255,
							a = (Math.floor((s = n % 36) / 6) / 5) * 255,
							r = ((s % 6) / 5) * 255;
						return [t, a, r];
					}),
					(i.rgb.hex = function (n) {
						const t = (((Math.round(n[0]) & 255) << 16) + ((Math.round(n[1]) & 255) << 8) + (Math.round(n[2]) & 255)).toString(16).toUpperCase();
						return '000000'.substring(t.length) + t;
					}),
					(i.hex.rgb = function (n) {
						const s = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
						if (!s) return [0, 0, 0];
						let t = s[0];
						s[0].length === 3 &&
							(t = t
								.split('')
								.map((g) => g + g)
								.join(''));
						const a = parseInt(t, 16),
							r = (a >> 16) & 255,
							l = (a >> 8) & 255,
							c = a & 255;
						return [r, l, c];
					}),
					(i.rgb.hcg = function (n) {
						const s = n[0] / 255,
							t = n[1] / 255,
							a = n[2] / 255,
							r = Math.max(Math.max(s, t), a),
							l = Math.min(Math.min(s, t), a),
							c = r - l;
						let g, p;
						return (
							c < 1 ? (g = l / (1 - c)) : (g = 0),
							c <= 0 ? (p = 0) : r === s ? (p = ((t - a) / c) % 6) : r === t ? (p = 2 + (a - s) / c) : (p = 4 + (s - t) / c),
							(p /= 6),
							(p %= 1),
							[p * 360, c * 100, g * 100]
						);
					}),
					(i.hsl.hcg = function (n) {
						const s = n[1] / 100,
							t = n[2] / 100,
							a = t < 0.5 ? 2 * s * t : 2 * s * (1 - t);
						let r = 0;
						return a < 1 && (r = (t - 0.5 * a) / (1 - a)), [n[0], a * 100, r * 100];
					}),
					(i.hsv.hcg = function (n) {
						const s = n[1] / 100,
							t = n[2] / 100,
							a = s * t;
						let r = 0;
						return a < 1 && (r = (t - a) / (1 - a)), [n[0], a * 100, r * 100];
					}),
					(i.hcg.rgb = function (n) {
						const s = n[0] / 360,
							t = n[1] / 100,
							a = n[2] / 100;
						if (t === 0) return [a * 255, a * 255, a * 255];
						const r = [0, 0, 0],
							l = (s % 1) * 6,
							c = l % 1,
							g = 1 - c;
						let p = 0;
						switch (Math.floor(l)) {
							case 0:
								(r[0] = 1), (r[1] = c), (r[2] = 0);
								break;
							case 1:
								(r[0] = g), (r[1] = 1), (r[2] = 0);
								break;
							case 2:
								(r[0] = 0), (r[1] = 1), (r[2] = c);
								break;
							case 3:
								(r[0] = 0), (r[1] = g), (r[2] = 1);
								break;
							case 4:
								(r[0] = c), (r[1] = 0), (r[2] = 1);
								break;
							default:
								(r[0] = 1), (r[1] = 0), (r[2] = g);
						}
						return (p = (1 - t) * a), [(t * r[0] + p) * 255, (t * r[1] + p) * 255, (t * r[2] + p) * 255];
					}),
					(i.hcg.hsv = function (n) {
						const s = n[1] / 100,
							t = n[2] / 100,
							a = s + t * (1 - s);
						let r = 0;
						return a > 0 && (r = s / a), [n[0], r * 100, a * 100];
					}),
					(i.hcg.hsl = function (n) {
						const s = n[1] / 100,
							a = (n[2] / 100) * (1 - s) + 0.5 * s;
						let r = 0;
						return a > 0 && a < 0.5 ? (r = s / (2 * a)) : a >= 0.5 && a < 1 && (r = s / (2 * (1 - a))), [n[0], r * 100, a * 100];
					}),
					(i.hcg.hwb = function (n) {
						const s = n[1] / 100,
							t = n[2] / 100,
							a = s + t * (1 - s);
						return [n[0], (a - s) * 100, (1 - a) * 100];
					}),
					(i.hwb.hcg = function (n) {
						const s = n[1] / 100,
							a = 1 - n[2] / 100,
							r = a - s;
						let l = 0;
						return r < 1 && (l = (a - r) / (1 - r)), [n[0], r * 100, l * 100];
					}),
					(i.apple.rgb = function (n) {
						return [(n[0] / 65535) * 255, (n[1] / 65535) * 255, (n[2] / 65535) * 255];
					}),
					(i.rgb.apple = function (n) {
						return [(n[0] / 255) * 65535, (n[1] / 255) * 65535, (n[2] / 255) * 65535];
					}),
					(i.gray.rgb = function (n) {
						return [(n[0] / 100) * 255, (n[0] / 100) * 255, (n[0] / 100) * 255];
					}),
					(i.gray.hsl = function (n) {
						return [0, 0, n[0]];
					}),
					(i.gray.hsv = i.gray.hsl),
					(i.gray.hwb = function (n) {
						return [0, 100, n[0]];
					}),
					(i.gray.cmyk = function (n) {
						return [0, 0, 0, n[0]];
					}),
					(i.gray.lab = function (n) {
						return [n[0], 0, 0];
					}),
					(i.gray.hex = function (n) {
						const s = Math.round((n[0] / 100) * 255) & 255,
							a = ((s << 16) + (s << 8) + s).toString(16).toUpperCase();
						return '000000'.substring(a.length) + a;
					}),
					(i.rgb.gray = function (n) {
						return [((n[0] + n[1] + n[2]) / 3 / 255) * 100];
					});
			},
			'../../node_modules/color-convert/index.js'(R, z, C) {
				const _ = C('../../node_modules/color-convert/conversions.js'),
					d = C('../../node_modules/color-convert/route.js'),
					i = {},
					$ = Object.keys(_);
				function n(t) {
					const a = function (...r) {
						const l = r[0];
						return l == null ? l : (l.length > 1 && (r = l), t(r));
					};
					return 'conversion' in t && (a.conversion = t.conversion), a;
				}
				function s(t) {
					const a = function (...r) {
						const l = r[0];
						if (l == null) return l;
						l.length > 1 && (r = l);
						const c = t(r);
						if (typeof c == 'object') for (let g = c.length, p = 0; p < g; p++) c[p] = Math.round(c[p]);
						return c;
					};
					return 'conversion' in t && (a.conversion = t.conversion), a;
				}
				$.forEach((t) => {
					(i[t] = {}),
						Object.defineProperty(i[t], 'channels', { value: _[t].channels }),
						Object.defineProperty(i[t], 'labels', { value: _[t].labels });
					const a = d(t);
					Object.keys(a).forEach((l) => {
						const c = a[l];
						(i[t][l] = s(c)), (i[t][l].raw = n(c));
					});
				}),
					(R.exports = i);
			},
			'../../node_modules/color-convert/route.js'(R, z, C) {
				const _ = C('../../node_modules/color-convert/conversions.js');
				function d() {
					const s = {},
						t = Object.keys(_);
					for (let a = t.length, r = 0; r < a; r++) s[t[r]] = { distance: -1, parent: null };
					return s;
				}
				function i(s) {
					const t = d(),
						a = [s];
					for (t[s].distance = 0; a.length; ) {
						const r = a.pop(),
							l = Object.keys(_[r]);
						for (let c = l.length, g = 0; g < c; g++) {
							const p = l[g],
								y = t[p];
							y.distance === -1 && ((y.distance = t[r].distance + 1), (y.parent = r), a.unshift(p));
						}
					}
					return t;
				}
				function $(s, t) {
					return function (a) {
						return t(s(a));
					};
				}
				function n(s, t) {
					const a = [t[s].parent, s];
					let r = _[t[s].parent][s],
						l = t[s].parent;
					for (; t[l].parent; ) a.unshift(t[l].parent), (r = $(_[t[l].parent][l], r)), (l = t[l].parent);
					return (r.conversion = a), r;
				}
				R.exports = function (s) {
					const t = i(s),
						a = {},
						r = Object.keys(t);
					for (let l = r.length, c = 0; c < l; c++) {
						const g = r[c];
						t[g].parent !== null && (a[g] = n(g, t));
					}
					return a;
				};
			},
			'../../node_modules/color-name/index.js'(R) {
				'use strict';
				R.exports = {
					aliceblue: [240, 248, 255],
					antiquewhite: [250, 235, 215],
					aqua: [0, 255, 255],
					aquamarine: [127, 255, 212],
					azure: [240, 255, 255],
					beige: [245, 245, 220],
					bisque: [255, 228, 196],
					black: [0, 0, 0],
					blanchedalmond: [255, 235, 205],
					blue: [0, 0, 255],
					blueviolet: [138, 43, 226],
					brown: [165, 42, 42],
					burlywood: [222, 184, 135],
					cadetblue: [95, 158, 160],
					chartreuse: [127, 255, 0],
					chocolate: [210, 105, 30],
					coral: [255, 127, 80],
					cornflowerblue: [100, 149, 237],
					cornsilk: [255, 248, 220],
					crimson: [220, 20, 60],
					cyan: [0, 255, 255],
					darkblue: [0, 0, 139],
					darkcyan: [0, 139, 139],
					darkgoldenrod: [184, 134, 11],
					darkgray: [169, 169, 169],
					darkgreen: [0, 100, 0],
					darkgrey: [169, 169, 169],
					darkkhaki: [189, 183, 107],
					darkmagenta: [139, 0, 139],
					darkolivegreen: [85, 107, 47],
					darkorange: [255, 140, 0],
					darkorchid: [153, 50, 204],
					darkred: [139, 0, 0],
					darksalmon: [233, 150, 122],
					darkseagreen: [143, 188, 143],
					darkslateblue: [72, 61, 139],
					darkslategray: [47, 79, 79],
					darkslategrey: [47, 79, 79],
					darkturquoise: [0, 206, 209],
					darkviolet: [148, 0, 211],
					deeppink: [255, 20, 147],
					deepskyblue: [0, 191, 255],
					dimgray: [105, 105, 105],
					dimgrey: [105, 105, 105],
					dodgerblue: [30, 144, 255],
					firebrick: [178, 34, 34],
					floralwhite: [255, 250, 240],
					forestgreen: [34, 139, 34],
					fuchsia: [255, 0, 255],
					gainsboro: [220, 220, 220],
					ghostwhite: [248, 248, 255],
					gold: [255, 215, 0],
					goldenrod: [218, 165, 32],
					gray: [128, 128, 128],
					green: [0, 128, 0],
					greenyellow: [173, 255, 47],
					grey: [128, 128, 128],
					honeydew: [240, 255, 240],
					hotpink: [255, 105, 180],
					indianred: [205, 92, 92],
					indigo: [75, 0, 130],
					ivory: [255, 255, 240],
					khaki: [240, 230, 140],
					lavender: [230, 230, 250],
					lavenderblush: [255, 240, 245],
					lawngreen: [124, 252, 0],
					lemonchiffon: [255, 250, 205],
					lightblue: [173, 216, 230],
					lightcoral: [240, 128, 128],
					lightcyan: [224, 255, 255],
					lightgoldenrodyellow: [250, 250, 210],
					lightgray: [211, 211, 211],
					lightgreen: [144, 238, 144],
					lightgrey: [211, 211, 211],
					lightpink: [255, 182, 193],
					lightsalmon: [255, 160, 122],
					lightseagreen: [32, 178, 170],
					lightskyblue: [135, 206, 250],
					lightslategray: [119, 136, 153],
					lightslategrey: [119, 136, 153],
					lightsteelblue: [176, 196, 222],
					lightyellow: [255, 255, 224],
					lime: [0, 255, 0],
					limegreen: [50, 205, 50],
					linen: [250, 240, 230],
					magenta: [255, 0, 255],
					maroon: [128, 0, 0],
					mediumaquamarine: [102, 205, 170],
					mediumblue: [0, 0, 205],
					mediumorchid: [186, 85, 211],
					mediumpurple: [147, 112, 219],
					mediumseagreen: [60, 179, 113],
					mediumslateblue: [123, 104, 238],
					mediumspringgreen: [0, 250, 154],
					mediumturquoise: [72, 209, 204],
					mediumvioletred: [199, 21, 133],
					midnightblue: [25, 25, 112],
					mintcream: [245, 255, 250],
					mistyrose: [255, 228, 225],
					moccasin: [255, 228, 181],
					navajowhite: [255, 222, 173],
					navy: [0, 0, 128],
					oldlace: [253, 245, 230],
					olive: [128, 128, 0],
					olivedrab: [107, 142, 35],
					orange: [255, 165, 0],
					orangered: [255, 69, 0],
					orchid: [218, 112, 214],
					palegoldenrod: [238, 232, 170],
					palegreen: [152, 251, 152],
					paleturquoise: [175, 238, 238],
					palevioletred: [219, 112, 147],
					papayawhip: [255, 239, 213],
					peachpuff: [255, 218, 185],
					peru: [205, 133, 63],
					pink: [255, 192, 203],
					plum: [221, 160, 221],
					powderblue: [176, 224, 230],
					purple: [128, 0, 128],
					rebeccapurple: [102, 51, 153],
					red: [255, 0, 0],
					rosybrown: [188, 143, 143],
					royalblue: [65, 105, 225],
					saddlebrown: [139, 69, 19],
					salmon: [250, 128, 114],
					sandybrown: [244, 164, 96],
					seagreen: [46, 139, 87],
					seashell: [255, 245, 238],
					sienna: [160, 82, 45],
					silver: [192, 192, 192],
					skyblue: [135, 206, 235],
					slateblue: [106, 90, 205],
					slategray: [112, 128, 144],
					slategrey: [112, 128, 144],
					snow: [255, 250, 250],
					springgreen: [0, 255, 127],
					steelblue: [70, 130, 180],
					tan: [210, 180, 140],
					teal: [0, 128, 128],
					thistle: [216, 191, 216],
					tomato: [255, 99, 71],
					turquoise: [64, 224, 208],
					violet: [238, 130, 238],
					wheat: [245, 222, 179],
					white: [255, 255, 255],
					whitesmoke: [245, 245, 245],
					yellow: [255, 255, 0],
					yellowgreen: [154, 205, 50],
				};
			},
			'../../node_modules/lodash/_baseTrim.js'(R, z, C) {
				var _ = C('../../node_modules/lodash/_trimmedEndIndex.js'),
					d = /^\s+/;
				function i($) {
					return $ && $.slice(0, _($) + 1).replace(d, '');
				}
				R.exports = i;
			},
			'../../node_modules/lodash/_trimmedEndIndex.js'(R) {
				var z = /\s/;
				function C(_) {
					for (var d = _.length; d-- && z.test(_.charAt(d)); );
					return d;
				}
				R.exports = C;
			},
			'../../node_modules/lodash/debounce.js'(R, z, C) {
				var _ = C('../../node_modules/lodash/isObject.js'),
					d = C('../../node_modules/lodash/now.js'),
					i = C('../../node_modules/lodash/toNumber.js'),
					$ = 'Expected a function',
					n = Math.max,
					s = Math.min;
				function t(a, r, l) {
					var c,
						g,
						p,
						y,
						j,
						I,
						L = 0,
						N = !1,
						K = !1,
						ee = !0;
					if (typeof a != 'function') throw new TypeError($);
					(r = i(r) || 0),
						_(l) && ((N = !!l.leading), (K = 'maxWait' in l), (p = K ? n(i(l.maxWait) || 0, r) : p), (ee = 'trailing' in l ? !!l.trailing : ee));
					function X(H) {
						var A = c,
							Y = g;
						return (c = g = void 0), (L = H), (y = a.apply(Y, A)), y;
					}
					function ae(H) {
						return (L = H), (j = setTimeout(J, r)), N ? X(H) : y;
					}
					function he(H) {
						var A = H - I,
							Y = H - L,
							ce = r - A;
						return K ? s(ce, p - Y) : ce;
					}
					function ge(H) {
						var A = H - I,
							Y = H - L;
						return I === void 0 || A >= r || A < 0 || (K && Y >= p);
					}
					function J() {
						var H = d();
						if (ge(H)) return le(H);
						j = setTimeout(J, he(H));
					}
					function le(H) {
						return (j = void 0), ee && c ? X(H) : ((c = g = void 0), y);
					}
					function se() {
						j !== void 0 && clearTimeout(j), (L = 0), (c = I = g = j = void 0);
					}
					function te() {
						return j === void 0 ? y : le(d());
					}
					function q() {
						var H = d(),
							A = ge(H);
						if (((c = arguments), (g = this), (I = H), A)) {
							if (j === void 0) return ae(I);
							if (K) return clearTimeout(j), (j = setTimeout(J, r)), X(I);
						}
						return j === void 0 && (j = setTimeout(J, r)), y;
					}
					return (q.cancel = se), (q.flush = te), q;
				}
				R.exports = t;
			},
			'../../node_modules/lodash/now.js'(R, z, C) {
				var _ = C('../../node_modules/lodash/_root.js'),
					d = function () {
						return _.Date.now();
					};
				R.exports = d;
			},
			'../../node_modules/lodash/throttle.js'(R, z, C) {
				var _ = C('../../node_modules/lodash/debounce.js'),
					d = C('../../node_modules/lodash/isObject.js'),
					i = 'Expected a function';
				function $(n, s, t) {
					var a = !0,
						r = !0;
					if (typeof n != 'function') throw new TypeError(i);
					return (
						d(t) && ((a = 'leading' in t ? !!t.leading : a), (r = 'trailing' in t ? !!t.trailing : r)),
						_(n, s, { leading: a, maxWait: s, trailing: r })
					);
				}
				R.exports = $;
			},
			'../../node_modules/lodash/toNumber.js'(R, z, C) {
				var _ = C('../../node_modules/lodash/_baseTrim.js'),
					d = C('../../node_modules/lodash/isObject.js'),
					i = C('../../node_modules/lodash/isSymbol.js'),
					$ = NaN,
					n = /^[-+]0x[0-9a-f]+$/i,
					s = /^0b[01]+$/i,
					t = /^0o[0-7]+$/i,
					a = parseInt;
				function r(l) {
					if (typeof l == 'number') return l;
					if (i(l)) return $;
					if (d(l)) {
						var c = typeof l.valueOf == 'function' ? l.valueOf() : l;
						l = d(c) ? c + '' : c;
					}
					if (typeof l != 'string') return l === 0 ? l : +l;
					l = _(l);
					var g = s.test(l);
					return g || t.test(l) ? a(l.slice(2), g ? 2 : 8) : n.test(l) ? $ : +l;
				}
				R.exports = r;
			},
		},
	]);
})();
