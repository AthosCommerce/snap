import {
	M as b,
	o as ae,
	u as re,
	a as ne,
	m as se,
	b as oe,
	s as Z,
	c as ie,
	j as $,
	l as ee,
	n as le,
	d as U,
	C as ce,
	e as ue,
} from './iframe-CXSVAHru.js';
import { u as fe } from './useLang-Dx66cFD0.js';
import { u as de } from './useA11y-BuGQuOJb.js';
function ge(s, o) {
	for (var e = []; o > 0; e[--o] = s);
	return e.join('');
}
function te(...s) {
	for (var o = 0, e, l = s[o++], h = [], a, t, f, y; l; ) {
		if ((a = /^[^\x25]+/.exec(l))) h.push(a[0]);
		else if ((a = /^\x25{2}/.exec(l))) h.push('%');
		else if ((a = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(l))) {
			if ((e = s[a[1] || o++]) == null || e == null) throw 'Too few arguments.';
			if (/[^s]/.test(a[7]) && typeof e != 'number') throw 'Expecting number but found ' + typeof e;
			switch (a[7]) {
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
					e = a[6] ? e.toExponential(a[6]) : e.toExponential();
					break;
				case 'f':
					e = a[6] ? parseFloat(e).toFixed(a[6]) : parseFloat(e);
					break;
				case 'o':
					e = e.toString(8);
					break;
				case 's':
					e = (e = String(e)) && a[6] ? e.substring(0, a[6]) : e;
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
			(e = /[def]/.test(a[7]) && a[2] && e > 0 ? '+' + e : e),
				(f = a[3] ? (a[3] == '0' ? '0' : a[3].charAt(1)) : ' '),
				(y = a[5] - String(e).length),
				(t = a[5] ? ge(f, y) : ''),
				h.push(a[4] ? e + t : t + e);
		} else throw 'Huh ?!';
		l = l.substring(a[0].length);
	}
	return h.join('');
}
function V() {
	return (
		(V =
			Object.assign ||
			function (s) {
				for (var o = 1; o < arguments.length; o++) {
					var e = arguments[o];
					for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (s[l] = e[l]);
				}
				return s;
			}),
		V.apply(this, arguments)
	);
}
function Y(s, o) {
	if (s == null) return {};
	var e = {},
		l = Object.keys(s),
		h,
		a;
	for (a = 0; a < l.length; a++) (h = l[a]), !(o.indexOf(h) >= 0) && (e[h] = s[h]);
	return e;
}
var _e = function (o) {
		var e = o.getBoundingClientRect();
		return { left: Math.ceil(e.left), width: Math.ceil(e.width) };
	},
	J = function (o) {
		return [].concat(o).sort(function (e, l) {
			return Number(e) - Number(l);
		});
	},
	he = function (o) {
		var e = b.useRef(o);
		return (
			(e.current = o),
			b.useCallback(function () {
				return e.current;
			}, [])
		);
	},
	ve = {
		getPercentageForValue: function (o, e, l) {
			return Math.max(0, Math.min(100, ((o - e) / (l - e)) * 100));
		},
		getValueForClientX: function (o, e, l, h) {
			var a = e.left,
				t = e.width,
				f = (o - a) / t,
				y = (h - l) * f;
			return y + l;
		},
	};
function pe(s) {
	var o = s.interpolator,
		e = o === void 0 ? ve : o,
		l = s.tickSize,
		h = l === void 0 ? 10 : l,
		a = s.values,
		t = s.min,
		f = s.max,
		y = s.ticks,
		p = s.steps,
		A = s.onChange,
		q = s.onDrag,
		N = s.stepSize,
		K = b.useState(null),
		T = K[0],
		x = K[1],
		j = b.useState(),
		R = j[0],
		O = j[1],
		S = he({ activeHandleIndex: T, onChange: A, onDrag: q, values: a, tempValues: R }),
		X = b.useRef(),
		B = b.useCallback(
			function (r) {
				var n = _e(X.current);
				return e.getValueForClientX(r, n, t, f);
			},
			[e, f, t]
		),
		I = b.useCallback(
			function (r, n) {
				if (p) {
					var u = p.indexOf(r),
						c = u + n;
					return c >= 0 && c < p.length ? p[c] : r;
				} else {
					var d = r + N * n;
					return d >= t && d <= f ? d : r;
				}
			},
			[f, t, N, p]
		),
		G = b.useCallback(
			function (r) {
				var n = t,
					u = f;
				if (p)
					p.forEach(function (c) {
						c <= r && c > n && (n = c), c >= r && c < u && (u = c);
					});
				else {
					for (; n < r && n + N < r; ) n += N;
					u = Math.min(n + N, f);
				}
				return r - n < u - r ? n : u;
			},
			[f, t, N, p]
		),
		P = b.useCallback(
			function (r) {
				var n = S(),
					u = n.activeHandleIndex,
					c = n.onDrag,
					d = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
					_ = B(d),
					m = G(_),
					k = [].concat(a.slice(0, u), [m], a.slice(u + 1));
				c ? c(k) : O(k);
			},
			[S, B, G, a]
		),
		W = b.useCallback(
			function (r, n) {
				var u = S(),
					c = u.values,
					d = u.onChange,
					_ = d === void 0 ? function () {} : d;
				if (r.keyCode === 37 || r.keyCode === 39) {
					x(n);
					var m = r.keyCode === 37 ? -1 : 1,
						k = I(c[n], m),
						v = [].concat(c.slice(0, n), [k], c.slice(n + 1)),
						C = J(v);
					_(C);
				}
			},
			[S, I]
		),
		g = b.useCallback(
			function (r, n) {
				x(n);
				var u = function c(d) {
					var _ = S(),
						m = _.tempValues,
						k = _.values,
						v = _.onChange,
						C = v === void 0 ? function () {} : v,
						D = _.onDrag,
						F = D === void 0 ? function () {} : D;
					document.removeEventListener('mousemove', P),
						document.removeEventListener('touchmove', P),
						document.removeEventListener('mouseup', c),
						document.removeEventListener('touchend', c);
					var z = J(m || k);
					C(z), F(z), x(null), O();
				};
				document.addEventListener('mousemove', P),
					document.addEventListener('touchmove', P),
					document.addEventListener('mouseup', u),
					document.addEventListener('touchend', u);
			},
			[S, P]
		),
		i = b.useCallback(
			function (r) {
				return e.getPercentageForValue(r, t, f);
			},
			[e, f, t]
		),
		L = b.useMemo(
			function () {
				var r = y || p;
				if (!r) {
					for (r = [t]; r[r.length - 1] < f - h; ) r.push(r[r.length - 1] + h);
					r.push(f);
				}
				return r.map(function (n, u) {
					return {
						value: n,
						getTickProps: function (d) {
							var _ = d === void 0 ? {} : d,
								m = _.key,
								k = m === void 0 ? u : m,
								v = _.style,
								C = v === void 0 ? {} : v,
								D = Y(_, ['key', 'style']);
							return V({ key: k, style: V({ position: 'absolute', width: 0, left: i(n) + '%', transform: 'translateX(-50%)' }, C) }, D);
						},
					};
				});
			},
			[y, i, f, t, p, h]
		),
		E = b.useMemo(
			function () {
				var r = J(R || a);
				return [].concat(r, [f]).map(function (n, u) {
					return {
						value: n,
						getSegmentProps: function (d) {
							var _ = d === void 0 ? {} : d,
								m = _.key,
								k = m === void 0 ? u : m,
								v = _.style,
								C = v === void 0 ? {} : v,
								D = Y(_, ['key', 'style']),
								F = i(r[u - 1] ? r[u - 1] : t),
								z = i(n) - F;
							return V({ key: k, style: V({ position: 'absolute', left: F + '%', width: z + '%' }, C) }, D);
						},
					};
				});
			},
			[i, f, t, R, a]
		),
		H = b.useMemo(
			function () {
				return (R || a).map(function (r, n) {
					return {
						value: r,
						active: n === T,
						getHandleProps: function (c) {
							var d = c === void 0 ? {} : c,
								_ = d.key,
								m = _ === void 0 ? n : _;
							d.ref, d.innerRef;
							var k = d.onKeyDown,
								v = d.onMouseDown,
								C = d.onTouchStart,
								D = d.style,
								F = D === void 0 ? {} : D,
								z = Y(d, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
							return V(
								{
									key: m,
									onKeyDown: function (w) {
										w.persist(), W(w, n), k && k(w);
									},
									onMouseDown: function (w) {
										w.persist(), g(w, n), v && v(w);
									},
									onTouchStart: function (w) {
										w.persist(), g(w, n), C && C(w);
									},
									role: 'slider',
									'aria-valuemin': t,
									'aria-valuemax': f,
									'aria-valuenow': r,
									style: V(
										{ position: 'absolute', top: '50%', left: i(r) + '%', zIndex: n === T ? '1' : '0', transform: 'translate(-50%, -50%)' },
										F
									),
								},
								z
							);
						},
					};
				});
			},
			[T, i, W, g, t, f, R, a]
		),
		M = function (n) {
			var u = n === void 0 ? {} : n,
				c = u.style,
				d = c === void 0 ? {} : c,
				_ = u.ref,
				m = Y(u, ['style', 'ref']);
			return V(
				{
					ref: function (v) {
						(X.current = v), _ && (typeof _ == 'function' ? _(v) : (_.current = v));
					},
					style: V({ position: 'relative', userSelect: 'none' }, d),
				},
				m
			);
		};
	return { activeHandleIndex: T, getTrackProps: M, ticks: L, segments: E, handles: H };
}
const me = ({
		railColor: s,
		trackColor: o,
		handleColor: e,
		valueTextColor: l,
		handleDraggingColor: h,
		showTicks: a,
		stickyHandleLabel: t,
		tickTextColor: f,
		theme: y,
	}) =>
		ue({
			display: 'flex',
			flexDirection: 'column',
			marginTop: '5px',
			marginBottom: a && t ? '20px' : a || t ? '10px' : '5px',
			'& .ss__facet-slider__slider': {
				position: 'relative',
				display: 'inline-block',
				height: '8px',
				width: 'calc(100% - 2rem)',
				margin: t ? '1rem' : '0 1rem',
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
					color: f,
					top: '100%',
					transform: 'translate(-50%, 1.2rem)',
					whiteSpace: 'nowrap',
				},
			},
			'& .ss__facet-slider__rail': { background: s || y?.variables?.colors?.primary || '#333', height: '100%' },
			'& .ss__facet-slider__segment': { background: o || y?.variables?.colors?.secondary || '#ccc', height: '100%' },
			'& .ss__facet-slider__handles': {
				textAlign: 'center',
				'& button': {
					'& .ss__facet-slider__handle': {
						background: e || y?.variables?.colors?.primary || '#333',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '1.6rem',
						height: '1.6rem',
						borderRadius: '100%',
						fontSize: '0.7rem',
						whiteSpace: 'nowrap',
						color: l || 'initial',
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
							background: h || e || y?.variables?.colors?.primary || '#000',
							'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
						},
						'& label.ss__facet-slider__handle__label': {
							display: 'inline-block',
							marginTop: a && !t ? '35px' : '20px',
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
				marginTop: a && !t ? '40px' : '20px',
				color: l,
				'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
			},
		}),
	we = ae((s) => {
		const o = re(),
			e = ne(),
			l = { tickSize: s.facet?.step ? s.facet?.step * 10 : 20, treePath: e },
			h = se('facetSlider', o, l, s),
			{ showTicks: a, facet: t, stickyHandleLabel: f, separateHandles: y, onChange: p, onDrag: A, className: q, internalClassName: N } = h,
			{ overrideElement: K, shouldRenderDefault: T } = oe('facetSlider', h);
		if (!T) return K;
		let { tickSize: x } = h;
		isNaN(Number(x)) || Number(x) <= 0 ? (x = s.facet?.step ? s.facet?.step * 10 : 20) : (x = Number(x));
		const [j, R] = Z([t.active?.low, t.active?.high]),
			[O, S] = Z([t.active?.low, t.active?.high]),
			X = (g) => {
				if (!y || !t.step) return g;
				const [i, L] = g,
					E = t.range?.low,
					H = t.range?.high,
					M = t.step;
				return i === L ? (L + M <= H ? [i, L + M] : i - M >= E ? [i - M, L] : g) : g;
			};
		(((t.active?.low || t.active?.low === 0) && t.active?.high && j[0] != t.active?.low) || j[1] != t.active?.high) &&
			(S([t.active?.low, t.active?.high]), R([t.active?.low, t.active?.high]));
		const {
				getTrackProps: B,
				ticks: I,
				segments: G,
				handles: P,
			} = pe({
				values: O,
				onChange: (g) => {
					const i = X(g);
					S(i),
						p && p(i),
						t?.services?.urlManager &&
							(i[0] == t.range.low && i[1] == t.range.high
								? t.services.urlManager.remove('page').remove(`filter.${t.field}`).go()
								: t.services.urlManager.remove('page').set(`filter.${t.field}`, { low: i[0], high: i[1] }).go()),
						p && p(g);
				},
				onDrag: (g) => {
					const i = X(g);
					S(i), A && A(i);
				},
				min: t.range?.low,
				max: t.range?.high,
				stepSize: t.step,
				tickSize: x,
			}),
			W = ie(h, me);
		return t.range && t.active && t.step
			? $(ce, {
					children: ee('div', {
						className: U('ss__facet-slider', q, N),
						...B(),
						...W,
						children: [
							ee('div', {
								className: 'ss__facet-slider__slider',
								children: [
									a &&
										I.map(({ value: g, getTickProps: i }) =>
											$('div', {
												className: 'ss__facet-slider__tick',
												...i(),
												children: $('div', { className: 'ss__facet-slider__tick__label', children: g }),
											})
										),
									G.map(({ getSegmentProps: g }, i) =>
										$('div', { className: `${i === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...g() })
									),
									$('div', {
										className: 'ss__facet-slider__handles',
										children: P.map(({ value: g, active: i, getHandleProps: L }, E) => {
											const H = {
													sliderHandle: {
														attributes: {
															'aria-label': `${t.label} button, current value ${g}, ${t.range?.low ? `min value ${t.range?.low},` : ''} ${
																t.range?.high ? `max value ${t.range?.high}` : ''
															}`,
														},
													},
												},
												M = le(H, h.lang || {}),
												r = fe(M, { facet: t, value: g }, { activeBreakpoint: o?.activeBreakpoint });
											return $('button', {
												type: 'button',
												...L({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
												...r.sliderHandle?.all,
												ref: (n) => de(n),
												children: $('div', {
													className: U('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': i }),
													children:
														f &&
														$('label', {
															className: U(
																'ss__facet-slider__handle__label',
																'ss__facet-slider__handle__label--sticky',
																`ss__facet-slider__handle__label--${E}`,
																{ 'ss__facet-slider__handle__label--pinleft': E == 0 && g == t?.range?.low },
																{ 'ss__facet-slider__handle__label--pinright': E == 1 && g == t?.range?.high }
															),
															children: te(t.formatValue, g),
														}),
												}),
											});
										}),
									}),
								],
							}),
							!f &&
								$('div', {
									className: 'ss__facet-slider__labels',
									children: P.map(({ value: g }, i) =>
										$('label', { className: U('ss__facet-slider__label', `ss__facet-slider__label--${i}`), children: te(t.formatValue, g) })
									),
								}),
						],
					}),
			  })
			: null;
	});
export { we as F };
