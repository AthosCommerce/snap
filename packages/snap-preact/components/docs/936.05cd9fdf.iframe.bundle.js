(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[936],
		{
			'../../node_modules/@storybook/blocks/dist/Color-6VNJS4EI.mjs'($, z, C) {
				'use strict';
				C.r(z), C.d(z, { ColorControl: () => Oe, default: () => Et });
				var _ = C('../../node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs'),
					d = C('../../node_modules/preact/compat/dist/compat.module.js'),
					i,
					R,
					r,
					s;
				function t() {
					return (t =
						Object.assign ||
						function (e) {
							for (var n = 1; n < arguments.length; n++) {
								var u = arguments[n];
								for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (e[f] = u[f]);
							}
							return e;
						}).apply(this, arguments);
				}
				function a(e, n) {
					if (e == null) return {};
					var u,
						f,
						m = {},
						h = Object.keys(e);
					for (f = 0; f < h.length; f++) n.indexOf((u = h[f])) >= 0 || (m[u] = e[u]);
					return m;
				}
				function o(e) {
					var n = (0, d.useRef)(e),
						u = (0, d.useRef)(function (f) {
							n.current && n.current(f);
						});
					return (n.current = e), u.current;
				}
				var l = function (e, n, u) {
						return n === void 0 && (n = 0), u === void 0 && (u = 1), e > u ? u : e < n ? n : e;
					},
					c = function (e) {
						return 'touches' in e;
					},
					g = function (e) {
						return (e && e.ownerDocument.defaultView) || self;
					},
					p = function (e, n, u) {
						var f = e.getBoundingClientRect(),
							m = c(n)
								? (function (h, b) {
										for (var v = 0; v < h.length; v++) if (h[v].identifier === b) return h[v];
										return h[0];
								  })(n.touches, u)
								: n;
						return { left: l((m.pageX - (f.left + g(e).pageXOffset)) / f.width), top: l((m.pageY - (f.top + g(e).pageYOffset)) / f.height) };
					},
					y = function (e) {
						!c(e) && e.preventDefault();
					},
					j = d.default.memo(function (e) {
						var n = e.onMove,
							u = e.onKey,
							f = e.onEnd,
							m = a(e, ['onMove', 'onKey', 'onEnd']),
							h = (0, d.useRef)(null),
							b = o(n),
							v = o(u),
							x = o(f),
							k = (0, d.useRef)(null),
							M = (0, d.useRef)(!1),
							w = (0, d.useMemo)(
								function () {
									var ue = function (F) {
											y(F), (c(F) ? F.touches.length > 0 : F.buttons > 0) && h.current ? b(p(h.current, F, k.current)) : (q(!1), x());
										},
										T = function () {
											q(!1), x();
										};
									function q(F) {
										var S = M.current,
											Z = g(h.current),
											ie = F ? Z.addEventListener : Z.removeEventListener;
										ie(S ? 'touchmove' : 'mousemove', ue), ie(S ? 'touchend' : 'mouseup', T);
									}
									return [
										function (F) {
											var S = F.nativeEvent,
												Z = h.current;
											if (
												Z &&
												(y(S),
												!(function (wt, Ct) {
													return Ct && !c(wt);
												})(S, M.current) && Z)
											) {
												if (c(S)) {
													M.current = !0;
													var ie = S.changedTouches || [];
													ie.length && (k.current = ie[0].identifier);
												}
												Z.focus(), b(p(Z, S, k.current)), q(!0);
											}
										},
										function (F) {
											var S = F.which || F.keyCode;
											S < 37 ||
												S > 40 ||
												(F.preventDefault(), v({ left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0, top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0 }));
										},
										function (F) {
											var S = F.which || F.keyCode;
											S >= 37 && S <= 40 && x();
										},
										q,
									];
								},
								[v, b, x]
							),
							E = w[0],
							O = w[1],
							W = w[2],
							oe = w[3];
						return (
							(0, d.useEffect)(
								function () {
									return oe;
								},
								[oe]
							),
							d.default.createElement(
								'div',
								t({}, m, {
									onTouchStart: E,
									onMouseDown: E,
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
						var n = e.color,
							u = e.left,
							f = e.top,
							m = f === void 0 ? 0.5 : f,
							h = I(['react-colorful__pointer', e.className]);
						return d.default.createElement(
							'div',
							{ className: h, style: { top: 100 * m + '%', left: 100 * u + '%' } },
							d.default.createElement('div', { className: 'react-colorful__pointer-fill', style: { backgroundColor: n } })
						);
					},
					H = function (e, n, u) {
						return n === void 0 && (n = 0), u === void 0 && (u = Math.pow(10, n)), Math.round(u * e) / u;
					},
					V = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
					Q = function (e) {
						return me(D(e));
					},
					D = function (e) {
						return (
							e[0] === '#' && (e = e.substring(1)),
							e.length < 6
								? {
										r: parseInt(e[0] + e[0], 16),
										g: parseInt(e[1] + e[1], 16),
										b: parseInt(e[2] + e[2], 16),
										a: e.length === 4 ? H(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
								  }
								: {
										r: parseInt(e.substring(0, 2), 16),
										g: parseInt(e.substring(2, 4), 16),
										b: parseInt(e.substring(4, 6), 16),
										a: e.length === 8 ? H(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
								  }
						);
					},
					de = function (e, n) {
						return n === void 0 && (n = 'deg'), Number(e) * (V[n] || 1);
					},
					fe = function (e) {
						var n = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
							e
						);
						return n
							? A({ h: de(n[1], n[2]), s: Number(n[3]), l: Number(n[4]), a: n[5] === void 0 ? 1 : Number(n[5]) / (n[6] ? 100 : 1) })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					he = fe,
					A = function (e) {
						var n = e.s,
							u = e.l;
						return { h: e.h, s: (n *= (u < 50 ? u : 100 - u) / 100) > 0 ? ((2 * n) / (u + n)) * 100 : 0, v: u + n, a: e.a };
					},
					ae = function (e) {
						return Re(N(e));
					},
					ee = function (e) {
						var n = e.s,
							u = e.v,
							f = e.a,
							m = ((200 - n) * u) / 100;
						return { h: H(e.h), s: H(m > 0 && m < 200 ? ((n * u) / 100 / (m <= 100 ? m : 200 - m)) * 100 : 0), l: H(m / 2), a: H(f, 2) };
					},
					te = function (e) {
						var n = ee(e);
						return 'hsl(' + n.h + ', ' + n.s + '%, ' + n.l + '%)';
					},
					K = function (e) {
						var n = ee(e);
						return 'hsla(' + n.h + ', ' + n.s + '%, ' + n.l + '%, ' + n.a + ')';
					},
					N = function (e) {
						var n = e.h,
							u = e.s,
							f = e.v,
							m = e.a;
						(n = (n / 360) * 6), (u /= 100), (f /= 100);
						var h = Math.floor(n),
							b = f * (1 - u),
							v = f * (1 - (n - h) * u),
							x = f * (1 - (1 - n + h) * u),
							k = h % 6;
						return { r: H(255 * [f, v, b, b, x, f][k]), g: H(255 * [x, f, f, v, b, b][k]), b: H(255 * [b, b, x, f, f, v][k]), a: H(m, 2) };
					},
					B = function (e) {
						var n = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
							e
						);
						return n
							? se({ h: de(n[1], n[2]), s: Number(n[3]), v: Number(n[4]), a: n[5] === void 0 ? 1 : Number(n[5]) / (n[6] ? 100 : 1) })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					U = B,
					le = function (e) {
						var n = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
						return n
							? me({
									r: Number(n[1]) / (n[2] ? 100 / 255 : 1),
									g: Number(n[3]) / (n[4] ? 100 / 255 : 1),
									b: Number(n[5]) / (n[6] ? 100 / 255 : 1),
									a: n[7] === void 0 ? 1 : Number(n[7]) / (n[8] ? 100 : 1),
							  })
							: { h: 0, s: 0, v: 0, a: 1 };
					},
					$e = le,
					ge = function (e) {
						var n = e.toString(16);
						return n.length < 2 ? '0' + n : n;
					},
					Re = function (e) {
						var n = e.r,
							u = e.g,
							f = e.b,
							m = e.a,
							h = m < 1 ? ge(H(255 * m)) : '';
						return '#' + ge(n) + ge(u) + ge(f) + h;
					},
					me = function (e) {
						var n = e.r,
							u = e.g,
							f = e.b,
							m = e.a,
							h = Math.max(n, u, f),
							b = h - Math.min(n, u, f),
							v = b ? (h === n ? (u - f) / b : h === u ? 2 + (f - n) / b : 4 + (n - u) / b) : 0;
						return { h: H(60 * (v < 0 ? v + 6 : v)), s: H(h ? (b / h) * 100 : 0), v: H((h / 255) * 100), a: m };
					},
					se = function (e) {
						return { h: H(e.h), s: H(e.s), v: H(e.v), a: H(e.a, 2) };
					},
					ye = d.default.memo(function (e) {
						var n = e.hue,
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
										u({ h: l(n + 360 * h.left, 0, 360) });
									},
									onEnd: f,
									'aria-label': 'Hue',
									'aria-valuenow': H(n),
									'aria-valuemax': '360',
									'aria-valuemin': '0',
								},
								d.default.createElement(L, { className: 'react-colorful__hue-pointer', left: n / 360, color: te({ h: n, s: 100, v: 100, a: 1 }) })
							)
						);
					}),
					ke = d.default.memo(function (e) {
						var n = e.hsva,
							u = e.onChange,
							f = e.onChangeEnd,
							m = { backgroundColor: te({ h: n.h, s: 100, v: 100, a: 1 }) };
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
										u({ s: l(n.s + 100 * h.left, 0, 100), v: l(n.v - 100 * h.top, 0, 100) });
									},
									onEnd: f,
									'aria-label': 'Color',
									'aria-valuetext': 'Saturation ' + H(n.s) + '%, Brightness ' + H(n.v) + '%',
								},
								d.default.createElement(L, { className: 'react-colorful__saturation-pointer', top: 1 - n.v / 100, left: n.s / 100, color: te(n) })
							)
						);
					}),
					X = function (e, n) {
						if (e === n) return !0;
						for (var u in e) if (e[u] !== n[u]) return !1;
						return !0;
					},
					ne = function (e, n) {
						return e.replace(/\s/g, '') === n.replace(/\s/g, '');
					},
					Ee = function (e, n) {
						return e.toLowerCase() === n.toLowerCase() || X(D(e), D(n));
					};
				function we(e, n, u, f) {
					var m = o(u),
						h = o(f),
						b = (0, d.useState)(function () {
							return e.toHsva(n);
						}),
						v = b[0],
						x = b[1],
						k = (0, d.useRef)({ color: n, hsva: v }),
						M = (0, d.useRef)(!1);
					(0, d.useEffect)(
						function () {
							if (!e.equal(n, k.current.color)) {
								var O = e.toHsva(n);
								(k.current = { hsva: O, color: n }), x(O), (M.current = !1);
							}
						},
						[n, e]
					),
						(0, d.useEffect)(
							function () {
								var O;
								X(v, k.current.hsva) ||
									e.equal((O = e.fromHsva(v)), k.current.color) ||
									((k.current = { hsva: v, color: O }), m(O), (M.current = !0));
							},
							[v, e, m]
						);
					var w = (0, d.useCallback)(function (O) {
							x(function (W) {
								return Object.assign({}, W, O);
							});
						}, []),
						E = (0, d.useCallback)(
							function () {
								M.current && ((M.current = !1), h(k.current.color));
							},
							[h]
						);
					return [v, w, E];
				}
				var Ce,
					Se = typeof window < 'u' ? d.useLayoutEffect : d.useEffect,
					Te = function () {
						return Ce || C.nc;
					},
					Mt = function (e) {
						Ce = e;
					},
					Me = new Map(),
					_e = function (e) {
						Se(function () {
							var n = e.current ? e.current.ownerDocument : document;
							if (n !== void 0 && !Me.has(n)) {
								var u = n.createElement('style');
								(u.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
									Me.set(n, u);
								var f = Te();
								f && u.setAttribute('nonce', f), n.head.appendChild(u);
							}
						}, []);
					},
					J = function (e) {
						var n = e.className,
							u = e.colorModel,
							f = e.color,
							m = f === void 0 ? u.defaultColor : f,
							h = e.onChange,
							b = e.onChangeEnd,
							v = a(e, ['className', 'colorModel', 'color', 'onChange', 'onChangeEnd']),
							x = (0, d.useRef)(null);
						_e(x);
						var k = we(u, m, h, b),
							M = k[0],
							w = k[1],
							E = k[2],
							O = I(['react-colorful', n]);
						return d.default.createElement(
							'div',
							t({}, v, { ref: x, className: O }),
							d.default.createElement(ke, { hsva: M, onChange: w, onChangeEnd: E }),
							d.default.createElement(ye, { hue: M.h, onChange: w, onChangeEnd: E, className: 'react-colorful__last-control' })
						);
					},
					Fe = {
						defaultColor: '000',
						toHsva: Q,
						fromHsva: function (e) {
							return ae({ h: e.h, s: e.s, v: e.v, a: 1 });
						},
						equal: Ee,
					},
					ze = function (e) {
						return d.default.createElement(J, t({}, e, { colorModel: Fe }));
					},
					Pe = function (e) {
						var n = e.className,
							u = e.hsva,
							f = e.onChange,
							m = e.onChangeEnd,
							h = { backgroundImage: 'linear-gradient(90deg, ' + K(Object.assign({}, u, { a: 0 })) + ', ' + K(Object.assign({}, u, { a: 1 })) + ')' },
							b = I(['react-colorful__alpha', n]),
							v = H(100 * u.a);
						return d.default.createElement(
							'div',
							{ className: b },
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
									'aria-valuetext': v + '%',
									'aria-valuenow': v,
									'aria-valuemin': '0',
									'aria-valuemax': '100',
								},
								d.default.createElement(L, { className: 'react-colorful__alpha-pointer', left: u.a, color: K(u) })
							)
						);
					},
					Y = function (e) {
						var n = e.className,
							u = e.colorModel,
							f = e.color,
							m = f === void 0 ? u.defaultColor : f,
							h = e.onChange,
							b = e.onChangeEnd,
							v = a(e, ['className', 'colorModel', 'color', 'onChange', 'onChangeEnd']),
							x = (0, d.useRef)(null);
						_e(x);
						var k = we(u, m, h, b),
							M = k[0],
							w = k[1],
							E = k[2],
							O = I(['react-colorful', n]);
						return d.default.createElement(
							'div',
							t({}, v, { ref: x, className: O }),
							d.default.createElement(ke, { hsva: M, onChange: w, onChangeEnd: E }),
							d.default.createElement(ye, { hue: M.h, onChange: w, onChangeEnd: E }),
							d.default.createElement(Pe, { hsva: M, onChange: w, onChangeEnd: E, className: 'react-colorful__last-control' })
						);
					},
					Le = { defaultColor: '0001', toHsva: Q, fromHsva: ae, equal: Ee },
					_t = function (e) {
						return i.createElement(Y, t({}, e, { colorModel: Le }));
					},
					Be = { defaultColor: { h: 0, s: 0, l: 0, a: 1 }, toHsva: A, fromHsva: ee, equal: X },
					jt = function (e) {
						return i.createElement(Y, t({}, e, { colorModel: Be }));
					},
					qe = { defaultColor: 'hsla(0, 0%, 0%, 1)', toHsva: fe, fromHsva: K, equal: ne },
					We = function (e) {
						return d.default.createElement(Y, t({}, e, { colorModel: qe }));
					},
					Ae = {
						defaultColor: { h: 0, s: 0, l: 0 },
						toHsva: function (e) {
							return A({ h: e.h, s: e.s, l: e.l, a: 1 });
						},
						fromHsva: function (e) {
							return { h: (n = ee(e)).h, s: n.s, l: n.l };
							var n;
						},
						equal: X,
					},
					It = function (e) {
						return i.createElement(J, t({}, e, { colorModel: Ae }));
					},
					Ke = { defaultColor: 'hsl(0, 0%, 0%)', toHsva: he, fromHsva: te, equal: ne },
					Ht = function (e) {
						return i.createElement(J, t({}, e, { colorModel: Ke }));
					},
					Xe = {
						defaultColor: { h: 0, s: 0, v: 0, a: 1 },
						toHsva: function (e) {
							return e;
						},
						fromHsva: se,
						equal: X,
					},
					Nt = function (e) {
						return i.createElement(Y, t({}, e, { colorModel: Xe }));
					},
					Ge = {
						defaultColor: 'hsva(0, 0%, 0%, 1)',
						toHsva: B,
						fromHsva: function (e) {
							var n = se(e);
							return 'hsva(' + n.h + ', ' + n.s + '%, ' + n.v + '%, ' + n.a + ')';
						},
						equal: ne,
					},
					Ot = function (e) {
						return i.createElement(Y, t({}, e, { colorModel: Ge }));
					},
					Ve = {
						defaultColor: { h: 0, s: 0, v: 0 },
						toHsva: function (e) {
							return { h: e.h, s: e.s, v: e.v, a: 1 };
						},
						fromHsva: function (e) {
							var n = se(e);
							return { h: n.h, s: n.s, v: n.v };
						},
						equal: X,
					},
					$t = function (e) {
						return i.createElement(J, t({}, e, { colorModel: Ve }));
					},
					De = {
						defaultColor: 'hsv(0, 0%, 0%)',
						toHsva: U,
						fromHsva: function (e) {
							var n = se(e);
							return 'hsv(' + n.h + ', ' + n.s + '%, ' + n.v + '%)';
						},
						equal: ne,
					},
					Rt = function (e) {
						return i.createElement(J, t({}, e, { colorModel: De }));
					},
					Ue = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: me, fromHsva: N, equal: X },
					St = function (e) {
						return i.createElement(Y, t({}, e, { colorModel: Ue }));
					},
					Je = {
						defaultColor: 'rgba(0, 0, 0, 1)',
						toHsva: le,
						fromHsva: function (e) {
							var n = N(e);
							return 'rgba(' + n.r + ', ' + n.g + ', ' + n.b + ', ' + n.a + ')';
						},
						equal: ne,
					},
					Ye = function (e) {
						return d.default.createElement(Y, t({}, e, { colorModel: Je }));
					},
					Ze = {
						defaultColor: { r: 0, g: 0, b: 0 },
						toHsva: function (e) {
							return me({ r: e.r, g: e.g, b: e.b, a: 1 });
						},
						fromHsva: function (e) {
							return { r: (n = N(e)).r, g: n.g, b: n.b };
							var n;
						},
						equal: X,
					},
					Tt = function (e) {
						return i.createElement(J, t({}, e, { colorModel: Ze }));
					},
					Qe = {
						defaultColor: 'rgb(0, 0, 0)',
						toHsva: $e,
						fromHsva: function (e) {
							var n = N(e);
							return 'rgb(' + n.r + ', ' + n.g + ', ' + n.b + ')';
						},
						equal: ne,
					},
					Ft = function (e) {
						return i.createElement(J, t({}, e, { colorModel: Qe }));
					},
					et = /^#?([0-9A-F]{3,8})$/i,
					tt = function (e) {
						var n = e.color,
							u = n === void 0 ? '' : n,
							f = e.onChange,
							m = e.onBlur,
							h = e.escape,
							b = e.validate,
							v = e.format,
							x = e.process,
							k = a(e, ['color', 'onChange', 'onBlur', 'escape', 'validate', 'format', 'process']),
							M = R(function () {
								return h(u);
							}),
							w = M[0],
							E = M[1],
							O = o(f),
							W = o(m),
							oe = r(
								function (T) {
									var q = h(T.target.value);
									E(q), b(q) && O(x ? x(q) : q);
								},
								[h, x, b, O]
							),
							ue = r(
								function (T) {
									b(T.target.value) || E(h(u)), W(T);
								},
								[u, h, b, W]
							);
						return (
							s(
								function () {
									E(h(u));
								},
								[u, h]
							),
							i.createElement('input', t({}, k, { value: v ? v(w) : w, spellCheck: 'false', onChange: oe, onBlur: ue }))
						);
					},
					je = function (e) {
						return '#' + e;
					},
					zt = function (e) {
						var n = e.prefixed,
							u = e.alpha,
							f = a(e, ['prefixed', 'alpha']),
							m = r(
								function (b) {
									return b.replace(/([^0-9A-F]+)/gi, '').substring(0, u ? 8 : 6);
								},
								[u]
							),
							h = r(
								function (b) {
									return (function (v, x) {
										var k = et.exec(v),
											M = k ? k[1].length : 0;
										return M === 3 || M === 6 || (!!x && M === 4) || (!!x && M === 8);
									})(b, u);
								},
								[u]
							);
						return i.createElement(tt, t({}, f, { escape: m, format: n ? je : void 0, process: je, validate: h }));
					},
					nt = C('../../node_modules/color-convert/index.js'),
					P = C.n(nt),
					rt = C('../../node_modules/lodash/throttle.js'),
					ot = C.n(rt),
					G = C('../../node_modules/@storybook/theming/dist/index.mjs'),
					ce = C('../../node_modules/@storybook/components/dist/index.mjs'),
					at = G.I4.div({ position: 'relative', maxWidth: 250 }),
					lt = (0, G.I4)(ce.kR)({ position: 'absolute', zIndex: 1, top: 4, left: 4 }),
					st = G.I4.div({
						width: 200,
						margin: 5,
						'.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
						'.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
						'.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
					}),
					ct = (0, G.I4)(ce._)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
					ut = G.I4.div({ display: 'grid', gridTemplateColumns: 'repeat(9, 16px)', gap: 6, padding: 3, marginTop: 5, width: 200 }),
					it = G.I4.div(({ theme: e, active: n }) => ({
						width: 16,
						height: 16,
						boxShadow: n ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px` : `${e.appBorderColor} 0 0 0 1px inset`,
						borderRadius: e.appBorderRadius,
					})),
					dt = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
					Ie = ({ value: e, active: n, onClick: u, style: f, ...m }) => {
						let h = `linear-gradient(${e}, ${e}), ${dt}, linear-gradient(#fff, #fff)`;
						return d.default.createElement(it, { ...m, active: n, onClick: u, style: { ...f, backgroundImage: h } });
					},
					ft = (0, G.I4)(ce.lV.Input)(({ theme: e }) => ({
						width: '100%',
						paddingLeft: 30,
						paddingRight: 30,
						boxSizing: 'border-box',
						fontFamily: e.typography.fonts.base,
					})),
					ht = (0, G.I4)(ce.FI)(({ theme: e }) => ({
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
					He = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(He || {}),
					ve = Object.values(He),
					gt = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
					mt = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
					vt = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
					xe = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
					bt = /^\s*#?([0-9a-f]{3})\s*$/i,
					pt = { hex: ze, rgb: Ye, hsl: We },
					be = { hex: 'transparent', rgb: 'rgba(0, 0, 0, 0)', hsl: 'hsla(0, 0%, 0%, 0)' },
					Ne = (e) => {
						let n = e?.match(gt);
						if (!n) return [0, 0, 0, 1];
						let [, u, f, m, h = 1] = n;
						return [u, f, m, h].map(Number);
					},
					re = (e) => {
						if (!e) return;
						let n = !0;
						if (mt.test(e)) {
							let [b, v, x, k] = Ne(e),
								[M, w, E] = P().rgb.hsl([b, v, x]) || [0, 0, 0];
							return {
								valid: n,
								value: e,
								keyword: P().rgb.keyword([b, v, x]),
								colorSpace: 'rgb',
								rgb: e,
								hsl: `hsla(${M}, ${w}%, ${E}%, ${k})`,
								hex: `#${P().rgb.hex([b, v, x]).toLowerCase()}`,
							};
						}
						if (vt.test(e)) {
							let [b, v, x, k] = Ne(e),
								[M, w, E] = P().hsl.rgb([b, v, x]) || [0, 0, 0];
							return {
								valid: n,
								value: e,
								keyword: P().hsl.keyword([b, v, x]),
								colorSpace: 'hsl',
								rgb: `rgba(${M}, ${w}, ${E}, ${k})`,
								hsl: e,
								hex: `#${P().hsl.hex([b, v, x]).toLowerCase()}`,
							};
						}
						let u = e.replace('#', ''),
							f = P().keyword.rgb(u) || P().hex.rgb(u),
							m = P().rgb.hsl(f),
							h = e;
						if ((/[^#a-f0-9]/i.test(e) ? (h = u) : xe.test(e) && (h = `#${u}`), h.startsWith('#'))) n = xe.test(h);
						else
							try {
								P().keyword.hex(h);
							} catch {
								n = !1;
							}
						return {
							valid: n,
							value: h,
							keyword: P().rgb.keyword(f),
							colorSpace: 'hex',
							rgb: `rgba(${f[0]}, ${f[1]}, ${f[2]}, 1)`,
							hsl: `hsla(${m[0]}, ${m[1]}%, ${m[2]}%, 1)`,
							hex: h,
						};
					},
					xt = (e, n, u) => {
						if (!e || !n?.valid) return be[u];
						if (u !== 'hex') return n?.[u] || be[u];
						if (!n.hex.startsWith('#'))
							try {
								return `#${P().keyword.hex(n.hex)}`;
							} catch {
								return be.hex;
							}
						let f = n.hex.match(bt);
						if (!f) return xe.test(n.hex) ? n.hex : be.hex;
						let [m, h, b] = f[1].split('');
						return `#${m}${m}${h}${h}${b}${b}`;
					},
					yt = (e, n) => {
						let [u, f] = (0, d.useState)(e || ''),
							[m, h] = (0, d.useState)(() => re(u)),
							[b, v] = (0, d.useState)(m?.colorSpace || 'hex');
						(0, d.useEffect)(() => {
							let w = e || '',
								E = re(w);
							f(w), h(E), v(E?.colorSpace || 'hex');
						}, [e]);
						let x = (0, d.useMemo)(() => xt(u, m, b).toLowerCase(), [u, m, b]),
							k = (0, d.useCallback)(
								(w) => {
									let E = re(w),
										O = E?.value || w || '';
									f(O), O === '' && (h(void 0), n(void 0)), E && (h(E), v(E.colorSpace), n(E.value));
								},
								[n]
							),
							M = (0, d.useCallback)(() => {
								let w = ve.indexOf(b) + 1;
								w >= ve.length && (w = 0), v(ve[w]);
								let E = m?.[ve[w]] || '';
								f(E), n(E);
							}, [m, b, n]);
						return { value: u, realValue: x, updateValue: k, color: m, colorSpace: b, cycleColorSpace: M };
					},
					pe = (e) => e.replace(/\s*/, '').toLowerCase(),
					kt = (e, n, u) => {
						let [f, m] = (0, d.useState)(n?.valid ? [n] : []);
						(0, d.useEffect)(() => {
							n === void 0 && m([]);
						}, [n]);
						let h = (0, d.useMemo)(
								() =>
									(e || [])
										.map((v) => (typeof v == 'string' ? re(v) : v.title ? { ...re(v.color), keyword: v.title } : re(v.color)))
										.concat(f)
										.filter(Boolean)
										.slice(-27),
								[e, f]
							),
							b = (0, d.useCallback)(
								(v) => {
									v?.valid && (h.some((x) => pe(x[u]) === pe(v[u])) || m((x) => x.concat(v)));
								},
								[u, h]
							);
						return { presets: h, addPreset: b };
					},
					Oe = ({ name: e, value: n, onChange: u, onFocus: f, onBlur: m, presetColors: h, startOpen: b = !1 }) => {
						let v = (0, d.useCallback)(ot()(u, 200), [u]),
							{ value: x, realValue: k, updateValue: M, color: w, colorSpace: E, cycleColorSpace: O } = yt(n, v),
							{ presets: W, addPreset: oe } = kt(h, w, E),
							ue = pt[E];
						return d.default.createElement(
							at,
							null,
							d.default.createElement(
								lt,
								{
									startOpen: b,
									closeOnOutsideClick: !0,
									onVisibleChange: () => oe(w),
									tooltip: d.default.createElement(
										st,
										null,
										d.default.createElement(ue, { color: k === 'transparent' ? '#000000' : k, onChange: M, onFocus: f, onBlur: m }),
										W.length > 0 &&
											d.default.createElement(
												ut,
												null,
												W.map((T, q) =>
													d.default.createElement(
														ce.kR,
														{ key: `${T.value}-${q}`, hasChrome: !1, tooltip: d.default.createElement(ct, { note: T.keyword || T.value }) },
														d.default.createElement(Ie, { value: T[E], active: w && pe(T[E]) === pe(w[E]), onClick: () => M(T.value) })
													)
												)
											)
									),
								},
								d.default.createElement(Ie, { value: k, style: { margin: 4 } })
							),
							d.default.createElement(ft, {
								id: (0, _.Z)(e),
								value: x,
								onChange: (T) => M(T.target.value),
								onFocus: (T) => T.target.select(),
								placeholder: 'Choose color...',
							}),
							x ? d.default.createElement(ht, { icon: 'markup', onClick: O }) : null
						);
					},
					Et = Oe;
			},
			'../../node_modules/color-convert/conversions.js'($, z, C) {
				const _ = C('../../node_modules/color-name/index.js'),
					d = {};
				for (const r of Object.keys(_)) d[_[r]] = r;
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
				$.exports = i;
				for (const r of Object.keys(i)) {
					if (!('channels' in i[r])) throw new Error('missing channels property: ' + r);
					if (!('labels' in i[r])) throw new Error('missing channel labels property: ' + r);
					if (i[r].labels.length !== i[r].channels) throw new Error('channel and label counts mismatch: ' + r);
					const { channels: s, labels: t } = i[r];
					delete i[r].channels,
						delete i[r].labels,
						Object.defineProperty(i[r], 'channels', { value: s }),
						Object.defineProperty(i[r], 'labels', { value: t });
				}
				(i.rgb.hsl = function (r) {
					const s = r[0] / 255,
						t = r[1] / 255,
						a = r[2] / 255,
						o = Math.min(s, t, a),
						l = Math.max(s, t, a),
						c = l - o;
					let g, p;
					l === o ? (g = 0) : s === l ? (g = (t - a) / c) : t === l ? (g = 2 + (a - s) / c) : a === l && (g = 4 + (s - t) / c),
						(g = Math.min(g * 60, 360)),
						g < 0 && (g += 360);
					const y = (o + l) / 2;
					return l === o ? (p = 0) : y <= 0.5 ? (p = c / (l + o)) : (p = c / (2 - l - o)), [g, p * 100, y * 100];
				}),
					(i.rgb.hsv = function (r) {
						let s, t, a, o, l;
						const c = r[0] / 255,
							g = r[1] / 255,
							p = r[2] / 255,
							y = Math.max(c, g, p),
							j = y - Math.min(c, g, p),
							I = function (L) {
								return (y - L) / 6 / j + 1 / 2;
							};
						return (
							j === 0
								? ((o = 0), (l = 0))
								: ((l = j / y),
								  (s = I(c)),
								  (t = I(g)),
								  (a = I(p)),
								  c === y ? (o = a - t) : g === y ? (o = 1 / 3 + s - a) : p === y && (o = 2 / 3 + t - s),
								  o < 0 ? (o += 1) : o > 1 && (o -= 1)),
							[o * 360, l * 100, y * 100]
						);
					}),
					(i.rgb.hwb = function (r) {
						const s = r[0],
							t = r[1];
						let a = r[2];
						const o = i.rgb.hsl(r)[0],
							l = (1 / 255) * Math.min(s, Math.min(t, a));
						return (a = 1 - (1 / 255) * Math.max(s, Math.max(t, a))), [o, l * 100, a * 100];
					}),
					(i.rgb.cmyk = function (r) {
						const s = r[0] / 255,
							t = r[1] / 255,
							a = r[2] / 255,
							o = Math.min(1 - s, 1 - t, 1 - a),
							l = (1 - s - o) / (1 - o) || 0,
							c = (1 - t - o) / (1 - o) || 0,
							g = (1 - a - o) / (1 - o) || 0;
						return [l * 100, c * 100, g * 100, o * 100];
					});
				function R(r, s) {
					return (r[0] - s[0]) ** 2 + (r[1] - s[1]) ** 2 + (r[2] - s[2]) ** 2;
				}
				(i.rgb.keyword = function (r) {
					const s = d[r];
					if (s) return s;
					let t = 1 / 0,
						a;
					for (const o of Object.keys(_)) {
						const l = _[o],
							c = R(r, l);
						c < t && ((t = c), (a = o));
					}
					return a;
				}),
					(i.keyword.rgb = function (r) {
						return _[r];
					}),
					(i.rgb.xyz = function (r) {
						let s = r[0] / 255,
							t = r[1] / 255,
							a = r[2] / 255;
						(s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92),
							(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
							(a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92);
						const o = s * 0.4124 + t * 0.3576 + a * 0.1805,
							l = s * 0.2126 + t * 0.7152 + a * 0.0722,
							c = s * 0.0193 + t * 0.1192 + a * 0.9505;
						return [o * 100, l * 100, c * 100];
					}),
					(i.rgb.lab = function (r) {
						const s = i.rgb.xyz(r);
						let t = s[0],
							a = s[1],
							o = s[2];
						(t /= 95.047),
							(a /= 100),
							(o /= 108.883),
							(t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
							(a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
							(o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116);
						const l = 116 * a - 16,
							c = 500 * (t - a),
							g = 200 * (a - o);
						return [l, c, g];
					}),
					(i.hsl.rgb = function (r) {
						const s = r[0] / 360,
							t = r[1] / 100,
							a = r[2] / 100;
						let o, l, c;
						if (t === 0) return (c = a * 255), [c, c, c];
						a < 0.5 ? (o = a * (1 + t)) : (o = a + t - a * t);
						const g = 2 * a - o,
							p = [0, 0, 0];
						for (let y = 0; y < 3; y++)
							(l = s + (1 / 3) * -(y - 1)),
								l < 0 && l++,
								l > 1 && l--,
								6 * l < 1 ? (c = g + (o - g) * 6 * l) : 2 * l < 1 ? (c = o) : 3 * l < 2 ? (c = g + (o - g) * (2 / 3 - l) * 6) : (c = g),
								(p[y] = c * 255);
						return p;
					}),
					(i.hsl.hsv = function (r) {
						const s = r[0];
						let t = r[1] / 100,
							a = r[2] / 100,
							o = t;
						const l = Math.max(a, 0.01);
						(a *= 2), (t *= a <= 1 ? a : 2 - a), (o *= l <= 1 ? l : 2 - l);
						const c = (a + t) / 2,
							g = a === 0 ? (2 * o) / (l + o) : (2 * t) / (a + t);
						return [s, g * 100, c * 100];
					}),
					(i.hsv.rgb = function (r) {
						const s = r[0] / 60,
							t = r[1] / 100;
						let a = r[2] / 100;
						const o = Math.floor(s) % 6,
							l = s - Math.floor(s),
							c = 255 * a * (1 - t),
							g = 255 * a * (1 - t * l),
							p = 255 * a * (1 - t * (1 - l));
						switch (((a *= 255), o)) {
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
					(i.hsv.hsl = function (r) {
						const s = r[0],
							t = r[1] / 100,
							a = r[2] / 100,
							o = Math.max(a, 0.01);
						let l, c;
						c = (2 - t) * a;
						const g = (2 - t) * o;
						return (l = t * o), (l /= g <= 1 ? g : 2 - g), (l = l || 0), (c /= 2), [s, l * 100, c * 100];
					}),
					(i.hwb.rgb = function (r) {
						const s = r[0] / 360;
						let t = r[1] / 100,
							a = r[2] / 100;
						const o = t + a;
						let l;
						o > 1 && ((t /= o), (a /= o));
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
					(i.cmyk.rgb = function (r) {
						const s = r[0] / 100,
							t = r[1] / 100,
							a = r[2] / 100,
							o = r[3] / 100,
							l = 1 - Math.min(1, s * (1 - o) + o),
							c = 1 - Math.min(1, t * (1 - o) + o),
							g = 1 - Math.min(1, a * (1 - o) + o);
						return [l * 255, c * 255, g * 255];
					}),
					(i.xyz.rgb = function (r) {
						const s = r[0] / 100,
							t = r[1] / 100,
							a = r[2] / 100;
						let o, l, c;
						return (
							(o = s * 3.2406 + t * -1.5372 + a * -0.4986),
							(l = s * -0.9689 + t * 1.8758 + a * 0.0415),
							(c = s * 0.0557 + t * -0.204 + a * 1.057),
							(o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
							(l = l > 0.0031308 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92),
							(c = c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92),
							(o = Math.min(Math.max(0, o), 1)),
							(l = Math.min(Math.max(0, l), 1)),
							(c = Math.min(Math.max(0, c), 1)),
							[o * 255, l * 255, c * 255]
						);
					}),
					(i.xyz.lab = function (r) {
						let s = r[0],
							t = r[1],
							a = r[2];
						(s /= 95.047),
							(t /= 100),
							(a /= 108.883),
							(s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116),
							(t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
							(a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
						const o = 116 * t - 16,
							l = 500 * (s - t),
							c = 200 * (t - a);
						return [o, l, c];
					}),
					(i.lab.xyz = function (r) {
						const s = r[0],
							t = r[1],
							a = r[2];
						let o, l, c;
						(l = (s + 16) / 116), (o = t / 500 + l), (c = l - a / 200);
						const g = l ** 3,
							p = o ** 3,
							y = c ** 3;
						return (
							(l = g > 0.008856 ? g : (l - 16 / 116) / 7.787),
							(o = p > 0.008856 ? p : (o - 16 / 116) / 7.787),
							(c = y > 0.008856 ? y : (c - 16 / 116) / 7.787),
							(o *= 95.047),
							(l *= 100),
							(c *= 108.883),
							[o, l, c]
						);
					}),
					(i.lab.lch = function (r) {
						const s = r[0],
							t = r[1],
							a = r[2];
						let o;
						(o = (Math.atan2(a, t) * 360) / 2 / Math.PI), o < 0 && (o += 360);
						const c = Math.sqrt(t * t + a * a);
						return [s, c, o];
					}),
					(i.lch.lab = function (r) {
						const s = r[0],
							t = r[1],
							o = (r[2] / 360) * 2 * Math.PI,
							l = t * Math.cos(o),
							c = t * Math.sin(o);
						return [s, l, c];
					}),
					(i.rgb.ansi16 = function (r, s = null) {
						const [t, a, o] = r;
						let l = s === null ? i.rgb.hsv(r)[2] : s;
						if (((l = Math.round(l / 50)), l === 0)) return 30;
						let c = 30 + ((Math.round(o / 255) << 2) | (Math.round(a / 255) << 1) | Math.round(t / 255));
						return l === 2 && (c += 60), c;
					}),
					(i.hsv.ansi16 = function (r) {
						return i.rgb.ansi16(i.hsv.rgb(r), r[2]);
					}),
					(i.rgb.ansi256 = function (r) {
						const s = r[0],
							t = r[1],
							a = r[2];
						return s === t && t === a
							? s < 8
								? 16
								: s > 248
								? 231
								: Math.round(((s - 8) / 247) * 24) + 232
							: 16 + 36 * Math.round((s / 255) * 5) + 6 * Math.round((t / 255) * 5) + Math.round((a / 255) * 5);
					}),
					(i.ansi16.rgb = function (r) {
						let s = r % 10;
						if (s === 0 || s === 7) return r > 50 && (s += 3.5), (s = (s / 10.5) * 255), [s, s, s];
						const t = (~~(r > 50) + 1) * 0.5,
							a = (s & 1) * t * 255,
							o = ((s >> 1) & 1) * t * 255,
							l = ((s >> 2) & 1) * t * 255;
						return [a, o, l];
					}),
					(i.ansi256.rgb = function (r) {
						if (r >= 232) {
							const l = (r - 232) * 10 + 8;
							return [l, l, l];
						}
						r -= 16;
						let s;
						const t = (Math.floor(r / 36) / 5) * 255,
							a = (Math.floor((s = r % 36) / 6) / 5) * 255,
							o = ((s % 6) / 5) * 255;
						return [t, a, o];
					}),
					(i.rgb.hex = function (r) {
						const t = (((Math.round(r[0]) & 255) << 16) + ((Math.round(r[1]) & 255) << 8) + (Math.round(r[2]) & 255)).toString(16).toUpperCase();
						return '000000'.substring(t.length) + t;
					}),
					(i.hex.rgb = function (r) {
						const s = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
						if (!s) return [0, 0, 0];
						let t = s[0];
						s[0].length === 3 &&
							(t = t
								.split('')
								.map((g) => g + g)
								.join(''));
						const a = parseInt(t, 16),
							o = (a >> 16) & 255,
							l = (a >> 8) & 255,
							c = a & 255;
						return [o, l, c];
					}),
					(i.rgb.hcg = function (r) {
						const s = r[0] / 255,
							t = r[1] / 255,
							a = r[2] / 255,
							o = Math.max(Math.max(s, t), a),
							l = Math.min(Math.min(s, t), a),
							c = o - l;
						let g, p;
						return (
							c < 1 ? (g = l / (1 - c)) : (g = 0),
							c <= 0 ? (p = 0) : o === s ? (p = ((t - a) / c) % 6) : o === t ? (p = 2 + (a - s) / c) : (p = 4 + (s - t) / c),
							(p /= 6),
							(p %= 1),
							[p * 360, c * 100, g * 100]
						);
					}),
					(i.hsl.hcg = function (r) {
						const s = r[1] / 100,
							t = r[2] / 100,
							a = t < 0.5 ? 2 * s * t : 2 * s * (1 - t);
						let o = 0;
						return a < 1 && (o = (t - 0.5 * a) / (1 - a)), [r[0], a * 100, o * 100];
					}),
					(i.hsv.hcg = function (r) {
						const s = r[1] / 100,
							t = r[2] / 100,
							a = s * t;
						let o = 0;
						return a < 1 && (o = (t - a) / (1 - a)), [r[0], a * 100, o * 100];
					}),
					(i.hcg.rgb = function (r) {
						const s = r[0] / 360,
							t = r[1] / 100,
							a = r[2] / 100;
						if (t === 0) return [a * 255, a * 255, a * 255];
						const o = [0, 0, 0],
							l = (s % 1) * 6,
							c = l % 1,
							g = 1 - c;
						let p = 0;
						switch (Math.floor(l)) {
							case 0:
								(o[0] = 1), (o[1] = c), (o[2] = 0);
								break;
							case 1:
								(o[0] = g), (o[1] = 1), (o[2] = 0);
								break;
							case 2:
								(o[0] = 0), (o[1] = 1), (o[2] = c);
								break;
							case 3:
								(o[0] = 0), (o[1] = g), (o[2] = 1);
								break;
							case 4:
								(o[0] = c), (o[1] = 0), (o[2] = 1);
								break;
							default:
								(o[0] = 1), (o[1] = 0), (o[2] = g);
						}
						return (p = (1 - t) * a), [(t * o[0] + p) * 255, (t * o[1] + p) * 255, (t * o[2] + p) * 255];
					}),
					(i.hcg.hsv = function (r) {
						const s = r[1] / 100,
							t = r[2] / 100,
							a = s + t * (1 - s);
						let o = 0;
						return a > 0 && (o = s / a), [r[0], o * 100, a * 100];
					}),
					(i.hcg.hsl = function (r) {
						const s = r[1] / 100,
							a = (r[2] / 100) * (1 - s) + 0.5 * s;
						let o = 0;
						return a > 0 && a < 0.5 ? (o = s / (2 * a)) : a >= 0.5 && a < 1 && (o = s / (2 * (1 - a))), [r[0], o * 100, a * 100];
					}),
					(i.hcg.hwb = function (r) {
						const s = r[1] / 100,
							t = r[2] / 100,
							a = s + t * (1 - s);
						return [r[0], (a - s) * 100, (1 - a) * 100];
					}),
					(i.hwb.hcg = function (r) {
						const s = r[1] / 100,
							a = 1 - r[2] / 100,
							o = a - s;
						let l = 0;
						return o < 1 && (l = (a - o) / (1 - o)), [r[0], o * 100, l * 100];
					}),
					(i.apple.rgb = function (r) {
						return [(r[0] / 65535) * 255, (r[1] / 65535) * 255, (r[2] / 65535) * 255];
					}),
					(i.rgb.apple = function (r) {
						return [(r[0] / 255) * 65535, (r[1] / 255) * 65535, (r[2] / 255) * 65535];
					}),
					(i.gray.rgb = function (r) {
						return [(r[0] / 100) * 255, (r[0] / 100) * 255, (r[0] / 100) * 255];
					}),
					(i.gray.hsl = function (r) {
						return [0, 0, r[0]];
					}),
					(i.gray.hsv = i.gray.hsl),
					(i.gray.hwb = function (r) {
						return [0, 100, r[0]];
					}),
					(i.gray.cmyk = function (r) {
						return [0, 0, 0, r[0]];
					}),
					(i.gray.lab = function (r) {
						return [r[0], 0, 0];
					}),
					(i.gray.hex = function (r) {
						const s = Math.round((r[0] / 100) * 255) & 255,
							a = ((s << 16) + (s << 8) + s).toString(16).toUpperCase();
						return '000000'.substring(a.length) + a;
					}),
					(i.rgb.gray = function (r) {
						return [((r[0] + r[1] + r[2]) / 3 / 255) * 100];
					});
			},
			'../../node_modules/color-convert/index.js'($, z, C) {
				const _ = C('../../node_modules/color-convert/conversions.js'),
					d = C('../../node_modules/color-convert/route.js'),
					i = {},
					R = Object.keys(_);
				function r(t) {
					const a = function (...o) {
						const l = o[0];
						return l == null ? l : (l.length > 1 && (o = l), t(o));
					};
					return 'conversion' in t && (a.conversion = t.conversion), a;
				}
				function s(t) {
					const a = function (...o) {
						const l = o[0];
						if (l == null) return l;
						l.length > 1 && (o = l);
						const c = t(o);
						if (typeof c == 'object') for (let g = c.length, p = 0; p < g; p++) c[p] = Math.round(c[p]);
						return c;
					};
					return 'conversion' in t && (a.conversion = t.conversion), a;
				}
				R.forEach((t) => {
					(i[t] = {}),
						Object.defineProperty(i[t], 'channels', { value: _[t].channels }),
						Object.defineProperty(i[t], 'labels', { value: _[t].labels });
					const a = d(t);
					Object.keys(a).forEach((l) => {
						const c = a[l];
						(i[t][l] = s(c)), (i[t][l].raw = r(c));
					});
				}),
					($.exports = i);
			},
			'../../node_modules/color-convert/route.js'($, z, C) {
				const _ = C('../../node_modules/color-convert/conversions.js');
				function d() {
					const s = {},
						t = Object.keys(_);
					for (let a = t.length, o = 0; o < a; o++) s[t[o]] = { distance: -1, parent: null };
					return s;
				}
				function i(s) {
					const t = d(),
						a = [s];
					for (t[s].distance = 0; a.length; ) {
						const o = a.pop(),
							l = Object.keys(_[o]);
						for (let c = l.length, g = 0; g < c; g++) {
							const p = l[g],
								y = t[p];
							y.distance === -1 && ((y.distance = t[o].distance + 1), (y.parent = o), a.unshift(p));
						}
					}
					return t;
				}
				function R(s, t) {
					return function (a) {
						return t(s(a));
					};
				}
				function r(s, t) {
					const a = [t[s].parent, s];
					let o = _[t[s].parent][s],
						l = t[s].parent;
					for (; t[l].parent; ) a.unshift(t[l].parent), (o = R(_[t[l].parent][l], o)), (l = t[l].parent);
					return (o.conversion = a), o;
				}
				$.exports = function (s) {
					const t = i(s),
						a = {},
						o = Object.keys(t);
					for (let l = o.length, c = 0; c < l; c++) {
						const g = o[c];
						t[g].parent !== null && (a[g] = r(g, t));
					}
					return a;
				};
			},
			'../../node_modules/color-name/index.js'($) {
				'use strict';
				$.exports = {
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
			'../../node_modules/lodash/_baseTrim.js'($, z, C) {
				var _ = C('../../node_modules/lodash/_trimmedEndIndex.js'),
					d = /^\s+/;
				function i(R) {
					return R && R.slice(0, _(R) + 1).replace(d, '');
				}
				$.exports = i;
			},
			'../../node_modules/lodash/_trimmedEndIndex.js'($) {
				var z = /\s/;
				function C(_) {
					for (var d = _.length; d-- && z.test(_.charAt(d)); );
					return d;
				}
				$.exports = C;
			},
			'../../node_modules/lodash/debounce.js'($, z, C) {
				var _ = C('../../node_modules/lodash/isObject.js'),
					d = C('../../node_modules/lodash/now.js'),
					i = C('../../node_modules/lodash/toNumber.js'),
					R = 'Expected a function',
					r = Math.max,
					s = Math.min;
				function t(a, o, l) {
					var c,
						g,
						p,
						y,
						j,
						I,
						L = 0,
						H = !1,
						V = !1,
						Q = !0;
					if (typeof a != 'function') throw new TypeError(R);
					(o = i(o) || 0),
						_(l) && ((H = !!l.leading), (V = 'maxWait' in l), (p = V ? r(i(l.maxWait) || 0, o) : p), (Q = 'trailing' in l ? !!l.trailing : Q));
					function D(N) {
						var B = c,
							U = g;
						return (c = g = void 0), (L = N), (y = a.apply(U, B)), y;
					}
					function de(N) {
						return (L = N), (j = setTimeout(A, o)), H ? D(N) : y;
					}
					function fe(N) {
						var B = N - I,
							U = N - L,
							le = o - B;
						return V ? s(le, p - U) : le;
					}
					function he(N) {
						var B = N - I,
							U = N - L;
						return I === void 0 || B >= o || B < 0 || (V && U >= p);
					}
					function A() {
						var N = d();
						if (he(N)) return ae(N);
						j = setTimeout(A, fe(N));
					}
					function ae(N) {
						return (j = void 0), Q && c ? D(N) : ((c = g = void 0), y);
					}
					function ee() {
						j !== void 0 && clearTimeout(j), (L = 0), (c = I = g = j = void 0);
					}
					function te() {
						return j === void 0 ? y : ae(d());
					}
					function K() {
						var N = d(),
							B = he(N);
						if (((c = arguments), (g = this), (I = N), B)) {
							if (j === void 0) return de(I);
							if (V) return clearTimeout(j), (j = setTimeout(A, o)), D(I);
						}
						return j === void 0 && (j = setTimeout(A, o)), y;
					}
					return (K.cancel = ee), (K.flush = te), K;
				}
				$.exports = t;
			},
			'../../node_modules/lodash/now.js'($, z, C) {
				var _ = C('../../node_modules/lodash/_root.js'),
					d = function () {
						return _.Date.now();
					};
				$.exports = d;
			},
			'../../node_modules/lodash/throttle.js'($, z, C) {
				var _ = C('../../node_modules/lodash/debounce.js'),
					d = C('../../node_modules/lodash/isObject.js'),
					i = 'Expected a function';
				function R(r, s, t) {
					var a = !0,
						o = !0;
					if (typeof r != 'function') throw new TypeError(i);
					return (
						d(t) && ((a = 'leading' in t ? !!t.leading : a), (o = 'trailing' in t ? !!t.trailing : o)),
						_(r, s, { leading: a, maxWait: s, trailing: o })
					);
				}
				$.exports = R;
			},
			'../../node_modules/lodash/toNumber.js'($, z, C) {
				var _ = C('../../node_modules/lodash/_baseTrim.js'),
					d = C('../../node_modules/lodash/isObject.js'),
					i = C('../../node_modules/lodash/isSymbol.js'),
					R = NaN,
					r = /^[-+]0x[0-9a-f]+$/i,
					s = /^0b[01]+$/i,
					t = /^0o[0-7]+$/i,
					a = parseInt;
				function o(l) {
					if (typeof l == 'number') return l;
					if (i(l)) return R;
					if (d(l)) {
						var c = typeof l.valueOf == 'function' ? l.valueOf() : l;
						l = d(c) ? c + '' : c;
					}
					if (typeof l != 'string') return l === 0 ? l : +l;
					l = _(l);
					var g = s.test(l);
					return g || t.test(l) ? a(l.slice(2), g ? 2 : 8) : r.test(l) ? R : +l;
				}
				$.exports = o;
			},
		},
	]);
})();
