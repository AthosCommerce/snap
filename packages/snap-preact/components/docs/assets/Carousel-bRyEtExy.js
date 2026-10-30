import {
	b9 as Ne,
	s as te,
	A as F,
	y as oe,
	M as V,
	_ as st,
	ab as $e,
	o as rt,
	u as nt,
	a as at,
	m as lt,
	n as ot,
	b as dt,
	c as ct,
	j as q,
	l as ft,
	I as Le,
	d as ge,
	p as ut,
	C as pt,
	e as mt,
} from './iframe-U9T2Y9ZS.js';
import { u as gt } from './useDisplaySettings-9sk5Dt1c.js';
import { d as ht } from './defined-CdKp_MB-.js';
function Ie(t) {
	return t !== null && typeof t == 'object' && 'constructor' in t && t.constructor === Object;
}
function Ce(t, e) {
	t === void 0 && (t = {}),
		e === void 0 && (e = {}),
		Object.keys(e).forEach((i) => {
			typeof t[i] > 'u' ? (t[i] = e[i]) : Ie(e[i]) && Ie(t[i]) && Object.keys(e[i]).length > 0 && Ce(t[i], e[i]);
		});
}
const Ve = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: '' },
	querySelector() {
		return null;
	},
	querySelectorAll() {
		return [];
	},
	getElementById() {
		return null;
	},
	createEvent() {
		return { initEvent() {} };
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return [];
			},
		};
	},
	createElementNS() {
		return {};
	},
	importNode() {
		return null;
	},
	location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
};
function J() {
	const t = typeof document < 'u' ? document : {};
	return Ce(t, Ve), t;
}
const vt = {
	document: Ve,
	navigator: { userAgent: '' },
	location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this;
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return '';
			},
		};
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {};
	},
	requestAnimationFrame(t) {
		return typeof setTimeout > 'u' ? (t(), null) : setTimeout(t, 0);
	},
	cancelAnimationFrame(t) {
		typeof setTimeout > 'u' || clearTimeout(t);
	},
};
function R() {
	const t = typeof window < 'u' ? window : {};
	return Ce(t, vt), t;
}
function U(t) {
	return (
		t === void 0 && (t = ''),
		t
			.trim()
			.split(' ')
			.filter((e) => !!e.trim())
	);
}
function wt(t) {
	const e = t;
	Object.keys(e).forEach((i) => {
		try {
			e[i] = null;
		} catch {}
		try {
			delete e[i];
		} catch {}
	});
}
function de(t, e) {
	return e === void 0 && (e = 0), setTimeout(t, e);
}
function ce() {
	return Date.now();
}
function bt(t) {
	const e = R();
	let i;
	return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
}
function St(t, e) {
	e === void 0 && (e = 'x');
	const i = R();
	let s, n, r;
	const o = bt(t);
	return (
		i.WebKitCSSMatrix
			? ((n = o.transform || o.webkitTransform),
			  n.split(',').length > 6 &&
					(n = n
						.split(', ')
						.map((l) => l.replace(',', '.'))
						.join(', ')),
			  (r = new i.WebKitCSSMatrix(n === 'none' ? '' : n)))
			: ((r =
					o.MozTransform ||
					o.OTransform ||
					o.MsTransform ||
					o.msTransform ||
					o.transform ||
					o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
			  (s = r.toString().split(','))),
		e === 'x' && (i.WebKitCSSMatrix ? (n = r.m41) : s.length === 16 ? (n = parseFloat(s[12])) : (n = parseFloat(s[4]))),
		e === 'y' && (i.WebKitCSSMatrix ? (n = r.m42) : s.length === 16 ? (n = parseFloat(s[13])) : (n = parseFloat(s[5]))),
		n || 0
	);
}
function ne(t) {
	return typeof t == 'object' && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === 'Object';
}
function xt(t) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u' ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
}
function H() {
	const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		e = ['__proto__', 'constructor', 'prototype'];
	for (let i = 1; i < arguments.length; i += 1) {
		const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
		if (s != null && !xt(s)) {
			const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
			for (let r = 0, o = n.length; r < o; r += 1) {
				const l = n[r],
					a = Object.getOwnPropertyDescriptor(s, l);
				a !== void 0 &&
					a.enumerable &&
					(ne(t[l]) && ne(s[l])
						? s[l].__swiper__
							? (t[l] = s[l])
							: H(t[l], s[l])
						: !ne(t[l]) && ne(s[l])
						? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : H(t[l], s[l]))
						: (t[l] = s[l]));
			}
		}
	}
	return t;
}
function ae(t, e, i) {
	t.style.setProperty(e, i);
}
function Re(t) {
	let { swiper: e, targetPosition: i, side: s } = t;
	const n = R(),
		r = -e.translate;
	let o = null,
		l;
	const a = e.params.speed;
	(e.wrapperEl.style.scrollSnapType = 'none'), n.cancelAnimationFrame(e.cssModeFrameID);
	const p = i > r ? 'next' : 'prev',
		c = (v, h) => (p === 'next' && v >= h) || (p === 'prev' && v <= h),
		u = () => {
			(l = new Date().getTime()), o === null && (o = l);
			const v = Math.max(Math.min((l - o) / a, 1), 0),
				h = 0.5 - Math.cos(v * Math.PI) / 2;
			let w = r + h * (i - r);
			if ((c(w, i) && (w = i), e.wrapperEl.scrollTo({ [s]: w }), c(w, i))) {
				(e.wrapperEl.style.overflow = 'hidden'),
					(e.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [s]: w });
					}),
					n.cancelAnimationFrame(e.cssModeFrameID);
				return;
			}
			e.cssModeFrameID = n.requestAnimationFrame(u);
		};
	u();
}
function j(t, e) {
	return e === void 0 && (e = ''), [...t.children].filter((i) => i.matches(e));
}
function fe(t) {
	try {
		console.warn(t);
		return;
	} catch {}
}
function ee(t, e) {
	e === void 0 && (e = []);
	const i = document.createElement(t);
	return i.classList.add(...(Array.isArray(e) ? e : U(e))), i;
}
function yt(t) {
	const e = R(),
		i = J(),
		s = t.getBoundingClientRect(),
		n = i.body,
		r = t.clientTop || n.clientTop || 0,
		o = t.clientLeft || n.clientLeft || 0,
		l = t === e ? e.scrollY : t.scrollTop,
		a = t === e ? e.scrollX : t.scrollLeft;
	return { top: s.top + l - r, left: s.left + a - o };
}
function Et(t, e) {
	const i = [];
	for (; t.previousElementSibling; ) {
		const s = t.previousElementSibling;
		e ? s.matches(e) && i.push(s) : i.push(s), (t = s);
	}
	return i;
}
function Tt(t, e) {
	const i = [];
	for (; t.nextElementSibling; ) {
		const s = t.nextElementSibling;
		e ? s.matches(e) && i.push(s) : i.push(s), (t = s);
	}
	return i;
}
function K(t, e) {
	return R().getComputedStyle(t, null).getPropertyValue(e);
}
function se(t) {
	let e = t,
		i;
	if (e) {
		for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1);
		return i;
	}
}
function Fe(t, e) {
	const i = [];
	let s = t.parentElement;
	for (; s; ) e ? s.matches(e) && i.push(s) : i.push(s), (s = s.parentElement);
	return i;
}
function ye(t, e, i) {
	const s = R();
	return (
		t[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
		parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')) +
		parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom'))
	);
}
function D(t) {
	return (Array.isArray(t) ? t : [t]).filter((e) => !!e);
}
let he;
function Ct() {
	const t = R(),
		e = J();
	return {
		smoothScroll: e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
		touch: !!('ontouchstart' in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
	};
}
function He() {
	return he || (he = Ct()), he;
}
let ve;
function Pt(t) {
	let { userAgent: e } = t === void 0 ? {} : t;
	const i = He(),
		s = R(),
		n = s.navigator.platform,
		r = e || s.navigator.userAgent,
		o = { ios: !1, android: !1 },
		l = s.screen.width,
		a = s.screen.height,
		p = r.match(/(Android);?[\s\/]+([\d.]+)?/);
	let c = r.match(/(iPad).*OS\s([\d_]+)/);
	const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
		v = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		h = n === 'Win32';
	let w = n === 'MacIntel';
	const S = [
		'1024x1366',
		'1366x1024',
		'834x1194',
		'1194x834',
		'834x1112',
		'1112x834',
		'768x1024',
		'1024x768',
		'820x1180',
		'1180x820',
		'810x1080',
		'1080x810',
	];
	return (
		!c && w && i.touch && S.indexOf(`${l}x${a}`) >= 0 && ((c = r.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (w = !1)),
		p && !h && ((o.os = 'android'), (o.android = !0)),
		(c || v || u) && ((o.os = 'ios'), (o.ios = !0)),
		o
	);
}
function je(t) {
	return t === void 0 && (t = {}), ve || (ve = Pt(t)), ve;
}
let we;
function Mt() {
	const t = R(),
		e = je();
	let i = !1;
	function s() {
		const l = t.navigator.userAgent.toLowerCase();
		return l.indexOf('safari') >= 0 && l.indexOf('chrome') < 0 && l.indexOf('android') < 0;
	}
	if (s()) {
		const l = String(t.navigator.userAgent);
		if (l.includes('Version/')) {
			const [a, p] = l
				.split('Version/')[1]
				.split(' ')[0]
				.split('.')
				.map((c) => Number(c));
			i = a < 16 || (a === 16 && p < 2);
		}
	}
	const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
		r = s(),
		o = r || (n && e.ios);
	return { isSafari: i || r, needPerspectiveFix: i, need3dFix: o, isWebView: n };
}
function Lt() {
	return we || (we = Mt()), we;
}
function It(t) {
	let { swiper: e, on: i, emit: s } = t;
	const n = R();
	let r = null,
		o = null;
	const l = () => {
			!e || e.destroyed || !e.initialized || (s('beforeResize'), s('resize'));
		},
		a = () => {
			!e ||
				e.destroyed ||
				!e.initialized ||
				((r = new ResizeObserver((u) => {
					o = n.requestAnimationFrame(() => {
						const { width: v, height: h } = e;
						let w = v,
							S = h;
						u.forEach((C) => {
							let { contentBoxSize: d, contentRect: m, target: b } = C;
							(b && b !== e.el) || ((w = m ? m.width : (d[0] || d).inlineSize), (S = m ? m.height : (d[0] || d).blockSize));
						}),
							(w !== v || S !== h) && l();
					});
				})),
				r.observe(e.el));
		},
		p = () => {
			o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
		},
		c = () => {
			!e || e.destroyed || !e.initialized || s('orientationchange');
		};
	i('init', () => {
		if (e.params.resizeObserver && typeof n.ResizeObserver < 'u') {
			a();
			return;
		}
		n.addEventListener('resize', l), n.addEventListener('orientationchange', c);
	}),
		i('destroy', () => {
			p(), n.removeEventListener('resize', l), n.removeEventListener('orientationchange', c);
		});
}
function Ot(t) {
	let { swiper: e, extendParams: i, on: s, emit: n } = t;
	const r = [],
		o = R(),
		l = function (c, u) {
			u === void 0 && (u = {});
			const v = o.MutationObserver || o.WebkitMutationObserver,
				h = new v((w) => {
					if (e.__preventObserver__) return;
					if (w.length === 1) {
						n('observerUpdate', w[0]);
						return;
					}
					const S = function () {
						n('observerUpdate', w[0]);
					};
					o.requestAnimationFrame ? o.requestAnimationFrame(S) : o.setTimeout(S, 0);
				});
			h.observe(c, {
				attributes: typeof u.attributes > 'u' ? !0 : u.attributes,
				childList: typeof u.childList > 'u' ? !0 : u.childList,
				characterData: typeof u.characterData > 'u' ? !0 : u.characterData,
			}),
				r.push(h);
		},
		a = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const c = Fe(e.hostEl);
					for (let u = 0; u < c.length; u += 1) l(c[u]);
				}
				l(e.hostEl, { childList: e.params.observeSlideChildren }), l(e.wrapperEl, { attributes: !1 });
			}
		},
		p = () => {
			r.forEach((c) => {
				c.disconnect();
			}),
				r.splice(0, r.length);
		};
	i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), s('init', a), s('destroy', p);
}
var zt = {
	on(t, e, i) {
		const s = this;
		if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s;
		const n = i ? 'unshift' : 'push';
		return (
			t.split(' ').forEach((r) => {
				s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
			}),
			s
		);
	},
	once(t, e, i) {
		const s = this;
		if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s;
		function n() {
			s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
			for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
			e.apply(s, o);
		}
		return (n.__emitterProxy = e), s.on(t, n, i);
	},
	onAny(t, e) {
		const i = this;
		if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i;
		const s = e ? 'unshift' : 'push';
		return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
	},
	offAny(t) {
		const e = this;
		if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
		const i = e.eventsAnyListeners.indexOf(t);
		return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
	},
	off(t, e) {
		const i = this;
		return (
			!i.eventsListeners ||
				i.destroyed ||
				!i.eventsListeners ||
				t.split(' ').forEach((s) => {
					typeof e > 'u'
						? (i.eventsListeners[s] = [])
						: i.eventsListeners[s] &&
						  i.eventsListeners[s].forEach((n, r) => {
								(n === e || (n.__emitterProxy && n.__emitterProxy === e)) && i.eventsListeners[s].splice(r, 1);
						  });
				}),
			i
		);
	},
	emit() {
		const t = this;
		if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
		let e, i, s;
		for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
		return (
			typeof r[0] == 'string' || Array.isArray(r[0])
				? ((e = r[0]), (i = r.slice(1, r.length)), (s = t))
				: ((e = r[0].events), (i = r[0].data), (s = r[0].context || t)),
			i.unshift(s),
			(Array.isArray(e) ? e : e.split(' ')).forEach((a) => {
				t.eventsAnyListeners &&
					t.eventsAnyListeners.length &&
					t.eventsAnyListeners.forEach((p) => {
						p.apply(s, [a, ...i]);
					}),
					t.eventsListeners &&
						t.eventsListeners[a] &&
						t.eventsListeners[a].forEach((p) => {
							p.apply(s, i);
						});
			}),
			t
		);
	},
};
function At() {
	const t = this;
	let e, i;
	const s = t.el;
	typeof t.params.width < 'u' && t.params.width !== null ? (e = t.params.width) : (e = s.clientWidth),
		typeof t.params.height < 'u' && t.params.height !== null ? (i = t.params.height) : (i = s.clientHeight),
		!((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
			((e = e - parseInt(K(s, 'padding-left') || 0, 10) - parseInt(K(s, 'padding-right') || 0, 10)),
			(i = i - parseInt(K(s, 'padding-top') || 0, 10) - parseInt(K(s, 'padding-bottom') || 0, 10)),
			Number.isNaN(e) && (e = 0),
			Number.isNaN(i) && (i = 0),
			Object.assign(t, { width: e, height: i, size: t.isHorizontal() ? e : i }));
}
function _t() {
	const t = this;
	function e(T, I) {
		return parseFloat(T.getPropertyValue(t.getDirectionLabel(I)) || 0);
	}
	const i = t.params,
		{ wrapperEl: s, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: l } = t,
		a = t.virtual && i.virtual.enabled,
		p = a ? t.virtual.slides.length : t.slides.length,
		c = j(n, `.${t.params.slideClass}, swiper-slide`),
		u = a ? t.virtual.slides.length : c.length;
	let v = [];
	const h = [],
		w = [];
	let S = i.slidesOffsetBefore;
	typeof S == 'function' && (S = i.slidesOffsetBefore.call(t));
	let C = i.slidesOffsetAfter;
	typeof C == 'function' && (C = i.slidesOffsetAfter.call(t));
	const d = t.snapGrid.length,
		m = t.slidesGrid.length;
	let b = i.spaceBetween,
		E = -S,
		P = 0,
		A = 0;
	if (typeof r > 'u') return;
	typeof b == 'string' && b.indexOf('%') >= 0 ? (b = (parseFloat(b.replace('%', '')) / 100) * r) : typeof b == 'string' && (b = parseFloat(b)),
		(t.virtualSize = -b),
		c.forEach((T) => {
			o ? (T.style.marginLeft = '') : (T.style.marginRight = ''), (T.style.marginBottom = ''), (T.style.marginTop = '');
		}),
		i.centeredSlides && i.cssMode && (ae(s, '--swiper-centered-offset-before', ''), ae(s, '--swiper-centered-offset-after', ''));
	const k = i.grid && i.grid.rows > 1 && t.grid;
	k ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
	let L;
	const M =
		i.slidesPerView === 'auto' && i.breakpoints && Object.keys(i.breakpoints).filter((T) => typeof i.breakpoints[T].slidesPerView < 'u').length > 0;
	for (let T = 0; T < u; T += 1) {
		L = 0;
		let I;
		if ((c[T] && (I = c[T]), k && t.grid.updateSlide(T, I, c), !(c[T] && K(I, 'display') === 'none'))) {
			if (i.slidesPerView === 'auto') {
				M && (c[T].style[t.getDirectionLabel('width')] = '');
				const x = getComputedStyle(I),
					f = I.style.transform,
					g = I.style.webkitTransform;
				if ((f && (I.style.transform = 'none'), g && (I.style.webkitTransform = 'none'), i.roundLengths))
					L = t.isHorizontal() ? ye(I, 'width') : ye(I, 'height');
				else {
					const y = e(x, 'width'),
						O = e(x, 'padding-left'),
						N = e(x, 'padding-right'),
						G = e(x, 'margin-left'),
						z = e(x, 'margin-right'),
						$ = x.getPropertyValue('box-sizing');
					if ($ && $ === 'border-box') L = y + G + z;
					else {
						const { clientWidth: W, offsetWidth: pe } = I;
						L = y + O + N + G + z + (pe - W);
					}
				}
				f && (I.style.transform = f), g && (I.style.webkitTransform = g), i.roundLengths && (L = Math.floor(L));
			} else
				(L = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
					i.roundLengths && (L = Math.floor(L)),
					c[T] && (c[T].style[t.getDirectionLabel('width')] = `${L}px`);
			c[T] && (c[T].swiperSlideSize = L),
				w.push(L),
				i.centeredSlides
					? ((E = E + L / 2 + P / 2 + b),
					  P === 0 && T !== 0 && (E = E - r / 2 - b),
					  T === 0 && (E = E - r / 2 - b),
					  Math.abs(E) < 1 / 1e3 && (E = 0),
					  i.roundLengths && (E = Math.floor(E)),
					  A % i.slidesPerGroup === 0 && v.push(E),
					  h.push(E))
					: (i.roundLengths && (E = Math.floor(E)),
					  (A - Math.min(t.params.slidesPerGroupSkip, A)) % t.params.slidesPerGroup === 0 && v.push(E),
					  h.push(E),
					  (E = E + L + b)),
				(t.virtualSize += L + b),
				(P = L),
				(A += 1);
		}
	}
	if (
		((t.virtualSize = Math.max(t.virtualSize, r) + C),
		o && l && (i.effect === 'slide' || i.effect === 'coverflow') && (s.style.width = `${t.virtualSize + b}px`),
		i.setWrapperSize && (s.style[t.getDirectionLabel('width')] = `${t.virtualSize + b}px`),
		k && t.grid.updateWrapperSize(L, v),
		!i.centeredSlides)
	) {
		const T = [];
		for (let I = 0; I < v.length; I += 1) {
			let x = v[I];
			i.roundLengths && (x = Math.floor(x)), v[I] <= t.virtualSize - r && T.push(x);
		}
		(v = T), Math.floor(t.virtualSize - r) - Math.floor(v[v.length - 1]) > 1 && v.push(t.virtualSize - r);
	}
	if (a && i.loop) {
		const T = w[0] + b;
		if (i.slidesPerGroup > 1) {
			const I = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
				x = T * i.slidesPerGroup;
			for (let f = 0; f < I; f += 1) v.push(v[v.length - 1] + x);
		}
		for (let I = 0; I < t.virtual.slidesBefore + t.virtual.slidesAfter; I += 1)
			i.slidesPerGroup === 1 && v.push(v[v.length - 1] + T), h.push(h[h.length - 1] + T), (t.virtualSize += T);
	}
	if ((v.length === 0 && (v = [0]), b !== 0)) {
		const T = t.isHorizontal() && o ? 'marginLeft' : t.getDirectionLabel('marginRight');
		c.filter((I, x) => (!i.cssMode || i.loop ? !0 : x !== c.length - 1)).forEach((I) => {
			I.style[T] = `${b}px`;
		});
	}
	if (i.centeredSlides && i.centeredSlidesBounds) {
		let T = 0;
		w.forEach((x) => {
			T += x + (b || 0);
		}),
			(T -= b);
		const I = T - r;
		v = v.map((x) => (x <= 0 ? -S : x > I ? I + C : x));
	}
	if (i.centerInsufficientSlides) {
		let T = 0;
		if (
			(w.forEach((I) => {
				T += I + (b || 0);
			}),
			(T -= b),
			T < r)
		) {
			const I = (r - T) / 2;
			v.forEach((x, f) => {
				v[f] = x - I;
			}),
				h.forEach((x, f) => {
					h[f] = x + I;
				});
		}
	}
	if ((Object.assign(t, { slides: c, snapGrid: v, slidesGrid: h, slidesSizesGrid: w }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)) {
		ae(s, '--swiper-centered-offset-before', `${-v[0]}px`), ae(s, '--swiper-centered-offset-after', `${t.size / 2 - w[w.length - 1] / 2}px`);
		const T = -t.snapGrid[0],
			I = -t.slidesGrid[0];
		(t.snapGrid = t.snapGrid.map((x) => x + T)), (t.slidesGrid = t.slidesGrid.map((x) => x + I));
	}
	if (
		(u !== p && t.emit('slidesLengthChange'),
		v.length !== d && (t.params.watchOverflow && t.checkOverflow(), t.emit('snapGridLengthChange')),
		h.length !== m && t.emit('slidesGridLengthChange'),
		i.watchSlidesProgress && t.updateSlidesOffset(),
		t.emit('slidesUpdated'),
		!a && !i.cssMode && (i.effect === 'slide' || i.effect === 'fade'))
	) {
		const T = `${i.containerModifierClass}backface-hidden`,
			I = t.el.classList.contains(T);
		u <= i.maxBackfaceHiddenSlides ? I || t.el.classList.add(T) : I && t.el.classList.remove(T);
	}
}
function Dt(t) {
	const e = this,
		i = [],
		s = e.virtual && e.params.virtual.enabled;
	let n = 0,
		r;
	typeof t == 'number' ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
	const o = (l) => (s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l]);
	if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
		if (e.params.centeredSlides)
			(e.visibleSlides || []).forEach((l) => {
				i.push(l);
			});
		else
			for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
				const l = e.activeIndex + r;
				if (l > e.slides.length && !s) break;
				i.push(o(l));
			}
	else i.push(o(e.activeIndex));
	for (r = 0; r < i.length; r += 1)
		if (typeof i[r] < 'u') {
			const l = i[r].offsetHeight;
			n = l > n ? l : n;
		}
	(n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function kt() {
	const t = this,
		e = t.slides,
		i = t.isElement ? (t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop) : 0;
	for (let s = 0; s < e.length; s += 1)
		e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment();
}
function Bt(t) {
	t === void 0 && (t = (this && this.translate) || 0);
	const e = this,
		i = e.params,
		{ slides: s, rtlTranslate: n, snapGrid: r } = e;
	if (s.length === 0) return;
	typeof s[0].swiperSlideOffset > 'u' && e.updateSlidesOffset();
	let o = -t;
	n && (o = t),
		s.forEach((a) => {
			a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass);
		}),
		(e.visibleSlidesIndexes = []),
		(e.visibleSlides = []);
	let l = i.spaceBetween;
	typeof l == 'string' && l.indexOf('%') >= 0 ? (l = (parseFloat(l.replace('%', '')) / 100) * e.size) : typeof l == 'string' && (l = parseFloat(l));
	for (let a = 0; a < s.length; a += 1) {
		const p = s[a];
		let c = p.swiperSlideOffset;
		i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
		const u = (o + (i.centeredSlides ? e.minTranslate() : 0) - c) / (p.swiperSlideSize + l),
			v = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) / (p.swiperSlideSize + l),
			h = -(o - c),
			w = h + e.slidesSizesGrid[a],
			S = h >= 0 && h <= e.size - e.slidesSizesGrid[a];
		((h >= 0 && h < e.size - 1) || (w > 1 && w <= e.size) || (h <= 0 && w >= e.size)) &&
			(e.visibleSlides.push(p), e.visibleSlidesIndexes.push(a), s[a].classList.add(i.slideVisibleClass)),
			S && s[a].classList.add(i.slideFullyVisibleClass),
			(p.progress = n ? -u : u),
			(p.originalProgress = n ? -v : v);
	}
}
function Gt(t) {
	const e = this;
	if (typeof t > 'u') {
		const c = e.rtlTranslate ? -1 : 1;
		t = (e && e.translate && e.translate * c) || 0;
	}
	const i = e.params,
		s = e.maxTranslate() - e.minTranslate();
	let { progress: n, isBeginning: r, isEnd: o, progressLoop: l } = e;
	const a = r,
		p = o;
	if (s === 0) (n = 0), (r = !0), (o = !0);
	else {
		n = (t - e.minTranslate()) / s;
		const c = Math.abs(t - e.minTranslate()) < 1,
			u = Math.abs(t - e.maxTranslate()) < 1;
		(r = c || n <= 0), (o = u || n >= 1), c && (n = 0), u && (n = 1);
	}
	if (i.loop) {
		const c = e.getSlideIndexByData(0),
			u = e.getSlideIndexByData(e.slides.length - 1),
			v = e.slidesGrid[c],
			h = e.slidesGrid[u],
			w = e.slidesGrid[e.slidesGrid.length - 1],
			S = Math.abs(t);
		S >= v ? (l = (S - v) / w) : (l = (S + w - h) / w), l > 1 && (l -= 1);
	}
	Object.assign(e, { progress: n, progressLoop: l, isBeginning: r, isEnd: o }),
		(i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && e.updateSlidesProgress(t),
		r && !a && e.emit('reachBeginning toEdge'),
		o && !p && e.emit('reachEnd toEdge'),
		((a && !r) || (p && !o)) && e.emit('fromEdge'),
		e.emit('progress', n);
}
function Nt() {
	const t = this,
		{ slides: e, params: i, slidesEl: s, activeIndex: n } = t,
		r = t.virtual && i.virtual.enabled,
		o = t.grid && i.grid && i.grid.rows > 1,
		l = (u) => j(s, `.${i.slideClass}${u}, swiper-slide${u}`)[0];
	e.forEach((u) => {
		u.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
	});
	let a, p, c;
	if (r)
		if (i.loop) {
			let u = n - t.virtual.slidesBefore;
			u < 0 && (u = t.virtual.slides.length + u),
				u >= t.virtual.slides.length && (u -= t.virtual.slides.length),
				(a = l(`[data-swiper-slide-index="${u}"]`));
		} else a = l(`[data-swiper-slide-index="${n}"]`);
	else
		o
			? ((a = e.filter((u) => u.column === n)[0]), (c = e.filter((u) => u.column === n + 1)[0]), (p = e.filter((u) => u.column === n - 1)[0]))
			: (a = e[n]);
	a &&
		(a.classList.add(i.slideActiveClass),
		o
			? (c && c.classList.add(i.slideNextClass), p && p.classList.add(i.slidePrevClass))
			: ((c = Tt(a, `.${i.slideClass}, swiper-slide`)[0]),
			  i.loop && !c && (c = e[0]),
			  c && c.classList.add(i.slideNextClass),
			  (p = Et(a, `.${i.slideClass}, swiper-slide`)[0]),
			  i.loop && !p === 0 && (p = e[e.length - 1]),
			  p && p.classList.add(i.slidePrevClass))),
		t.emitSlidesClasses();
}
const le = (t, e) => {
		if (!t || t.destroyed || !t.params) return;
		const i = () => (t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`),
			s = e.closest(i());
		if (s) {
			let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
			!n &&
				t.isElement &&
				(s.shadowRoot
					? (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
					: requestAnimationFrame(() => {
							s.shadowRoot && ((n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`)), n && n.remove());
					  })),
				n && n.remove();
		}
	},
	be = (t, e) => {
		if (!t.slides[e]) return;
		const i = t.slides[e].querySelector('[loading="lazy"]');
		i && i.removeAttribute('loading');
	},
	Ee = (t) => {
		if (!t || t.destroyed || !t.params) return;
		let e = t.params.lazyPreloadPrevNext;
		const i = t.slides.length;
		if (!i || !e || e < 0) return;
		e = Math.min(e, i);
		const s = t.params.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
			n = t.activeIndex;
		if (t.params.grid && t.params.grid.rows > 1) {
			const o = n,
				l = [o - e];
			l.push(...Array.from({ length: e }).map((a, p) => o + s + p)),
				t.slides.forEach((a, p) => {
					l.includes(a.column) && be(t, p);
				});
			return;
		}
		const r = n + s - 1;
		if (t.params.rewind || t.params.loop)
			for (let o = n - e; o <= r + e; o += 1) {
				const l = ((o % i) + i) % i;
				(l < n || l > r) && be(t, l);
			}
		else for (let o = Math.max(n - e, 0); o <= Math.min(r + e, i - 1); o += 1) o !== n && (o > r || o < n) && be(t, o);
	};
function $t(t) {
	const { slidesGrid: e, params: i } = t,
		s = t.rtlTranslate ? t.translate : -t.translate;
	let n;
	for (let r = 0; r < e.length; r += 1)
		typeof e[r + 1] < 'u'
			? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
				? (n = r)
				: s >= e[r] && s < e[r + 1] && (n = r + 1)
			: s >= e[r] && (n = r);
	return i.normalizeSlideIndex && (n < 0 || typeof n > 'u') && (n = 0), n;
}
function Vt(t) {
	const e = this,
		i = e.rtlTranslate ? e.translate : -e.translate,
		{ snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: l } = e;
	let a = t,
		p;
	const c = (h) => {
		let w = h - e.virtual.slidesBefore;
		return w < 0 && (w = e.virtual.slides.length + w), w >= e.virtual.slides.length && (w -= e.virtual.slides.length), w;
	};
	if ((typeof a > 'u' && (a = $t(e)), s.indexOf(i) >= 0)) p = s.indexOf(i);
	else {
		const h = Math.min(n.slidesPerGroupSkip, a);
		p = h + Math.floor((a - h) / n.slidesPerGroup);
	}
	if ((p >= s.length && (p = s.length - 1), a === r && !e.params.loop)) {
		p !== l && ((e.snapIndex = p), e.emit('snapIndexChange'));
		return;
	}
	if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
		e.realIndex = c(a);
		return;
	}
	const u = e.grid && n.grid && n.grid.rows > 1;
	let v;
	if (e.virtual && n.virtual.enabled && n.loop) v = c(a);
	else if (u) {
		const h = e.slides.filter((S) => S.column === a)[0];
		let w = parseInt(h.getAttribute('data-swiper-slide-index'), 10);
		Number.isNaN(w) && (w = Math.max(e.slides.indexOf(h), 0)), (v = Math.floor(w / n.grid.rows));
	} else if (e.slides[a]) {
		const h = e.slides[a].getAttribute('data-swiper-slide-index');
		h ? (v = parseInt(h, 10)) : (v = a);
	} else v = a;
	Object.assign(e, { previousSnapIndex: l, snapIndex: p, previousRealIndex: o, realIndex: v, previousIndex: r, activeIndex: a }),
		e.initialized && Ee(e),
		e.emit('activeIndexChange'),
		e.emit('snapIndexChange'),
		(e.initialized || e.params.runCallbacksOnInit) && (o !== v && e.emit('realIndexChange'), e.emit('slideChange'));
}
function Rt(t, e) {
	const i = this,
		s = i.params;
	let n = t.closest(`.${s.slideClass}, swiper-slide`);
	!n &&
		i.isElement &&
		e &&
		e.length > 1 &&
		e.includes(t) &&
		[...e.slice(e.indexOf(t) + 1, e.length)].forEach((l) => {
			!n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l);
		});
	let r = !1,
		o;
	if (n) {
		for (let l = 0; l < i.slides.length; l += 1)
			if (i.slides[l] === n) {
				(r = !0), (o = l);
				break;
			}
	}
	if (n && r)
		(i.clickedSlide = n),
			i.virtual && i.params.virtual.enabled ? (i.clickedIndex = parseInt(n.getAttribute('data-swiper-slide-index'), 10)) : (i.clickedIndex = o);
	else {
		(i.clickedSlide = void 0), (i.clickedIndex = void 0);
		return;
	}
	s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
}
var Ft = {
	updateSize: At,
	updateSlides: _t,
	updateAutoHeight: Dt,
	updateSlidesOffset: kt,
	updateSlidesProgress: Bt,
	updateProgress: Gt,
	updateSlidesClasses: Nt,
	updateActiveIndex: Vt,
	updateClickedSlide: Rt,
};
function Ht(t) {
	t === void 0 && (t = this.isHorizontal() ? 'x' : 'y');
	const e = this,
		{ params: i, rtlTranslate: s, translate: n, wrapperEl: r } = e;
	if (i.virtualTranslate) return s ? -n : n;
	if (i.cssMode) return n;
	let o = St(r, t);
	return (o += e.cssOverflowAdjustment()), s && (o = -o), o || 0;
}
function jt(t, e) {
	const i = this,
		{ rtlTranslate: s, params: n, wrapperEl: r, progress: o } = i;
	let l = 0,
		a = 0;
	const p = 0;
	i.isHorizontal() ? (l = s ? -t : t) : (a = t),
		n.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
		(i.previousTranslate = i.translate),
		(i.translate = i.isHorizontal() ? l : a),
		n.cssMode
			? (r[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -l : -a)
			: n.virtualTranslate ||
			  (i.isHorizontal() ? (l -= i.cssOverflowAdjustment()) : (a -= i.cssOverflowAdjustment()),
			  (r.style.transform = `translate3d(${l}px, ${a}px, ${p}px)`));
	let c;
	const u = i.maxTranslate() - i.minTranslate();
	u === 0 ? (c = 0) : (c = (t - i.minTranslate()) / u), c !== o && i.updateProgress(t), i.emit('setTranslate', i.translate, e);
}
function Wt() {
	return -this.snapGrid[0];
}
function qt() {
	return -this.snapGrid[this.snapGrid.length - 1];
}
function Yt(t, e, i, s, n) {
	t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
	const r = this,
		{ params: o, wrapperEl: l } = r;
	if (r.animating && o.preventInteractionOnTransition) return !1;
	const a = r.minTranslate(),
		p = r.maxTranslate();
	let c;
	if ((s && t > a ? (c = a) : s && t < p ? (c = p) : (c = t), r.updateProgress(c), o.cssMode)) {
		const u = r.isHorizontal();
		if (e === 0) l[u ? 'scrollLeft' : 'scrollTop'] = -c;
		else {
			if (!r.support.smoothScroll) return Re({ swiper: r, targetPosition: -c, side: u ? 'left' : 'top' }), !0;
			l.scrollTo({ [u ? 'left' : 'top']: -c, behavior: 'smooth' });
		}
		return !0;
	}
	return (
		e === 0
			? (r.setTransition(0), r.setTranslate(c), i && (r.emit('beforeTransitionStart', e, n), r.emit('transitionEnd')))
			: (r.setTransition(e),
			  r.setTranslate(c),
			  i && (r.emit('beforeTransitionStart', e, n), r.emit('transitionStart')),
			  r.animating ||
					((r.animating = !0),
					r.onTranslateToWrapperTransitionEnd ||
						(r.onTranslateToWrapperTransitionEnd = function (v) {
							!r ||
								r.destroyed ||
								(v.target === this &&
									(r.wrapperEl.removeEventListener('transitionend', r.onTranslateToWrapperTransitionEnd),
									(r.onTranslateToWrapperTransitionEnd = null),
									delete r.onTranslateToWrapperTransitionEnd,
									i && r.emit('transitionEnd')));
						}),
					r.wrapperEl.addEventListener('transitionend', r.onTranslateToWrapperTransitionEnd))),
		!0
	);
}
var Xt = { getTranslate: Ht, setTranslate: jt, minTranslate: Wt, maxTranslate: qt, translateTo: Yt };
function Ut(t, e) {
	const i = this;
	i.params.cssMode || ((i.wrapperEl.style.transitionDuration = `${t}ms`), (i.wrapperEl.style.transitionDelay = t === 0 ? '0ms' : '')),
		i.emit('setTransition', t, e);
}
function We(t) {
	let { swiper: e, runCallbacks: i, direction: s, step: n } = t;
	const { activeIndex: r, previousIndex: o } = e;
	let l = s;
	if ((l || (r > o ? (l = 'next') : r < o ? (l = 'prev') : (l = 'reset')), e.emit(`transition${n}`), i && r !== o)) {
		if (l === 'reset') {
			e.emit(`slideResetTransition${n}`);
			return;
		}
		e.emit(`slideChangeTransition${n}`), l === 'next' ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
	}
}
function Kt(t, e) {
	t === void 0 && (t = !0);
	const i = this,
		{ params: s } = i;
	s.cssMode || (s.autoHeight && i.updateAutoHeight(), We({ swiper: i, runCallbacks: t, direction: e, step: 'Start' }));
}
function Jt(t, e) {
	t === void 0 && (t = !0);
	const i = this,
		{ params: s } = i;
	(i.animating = !1), !s.cssMode && (i.setTransition(0), We({ swiper: i, runCallbacks: t, direction: e, step: 'End' }));
}
var Zt = { setTransition: Ut, transitionStart: Kt, transitionEnd: Jt };
function Qt(t, e, i, s, n) {
	t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == 'string' && (t = parseInt(t, 10));
	const r = this;
	let o = t;
	o < 0 && (o = 0);
	const { params: l, snapGrid: a, slidesGrid: p, previousIndex: c, activeIndex: u, rtlTranslate: v, wrapperEl: h, enabled: w } = r;
	if ((r.animating && l.preventInteractionOnTransition) || (!w && !s && !n) || r.destroyed) return !1;
	const S = Math.min(r.params.slidesPerGroupSkip, o);
	let C = S + Math.floor((o - S) / r.params.slidesPerGroup);
	C >= a.length && (C = a.length - 1);
	const d = -a[C];
	if (l.normalizeSlideIndex)
		for (let b = 0; b < p.length; b += 1) {
			const E = -Math.floor(d * 100),
				P = Math.floor(p[b] * 100),
				A = Math.floor(p[b + 1] * 100);
			typeof p[b + 1] < 'u' ? (E >= P && E < A - (A - P) / 2 ? (o = b) : E >= P && E < A && (o = b + 1)) : E >= P && (o = b);
		}
	if (
		r.initialized &&
		o !== u &&
		((!r.allowSlideNext && (v ? d > r.translate && d > r.minTranslate() : d < r.translate && d < r.minTranslate())) ||
			(!r.allowSlidePrev && d > r.translate && d > r.maxTranslate() && (u || 0) !== o))
	)
		return !1;
	o !== (c || 0) && i && r.emit('beforeSlideChangeStart'), r.updateProgress(d);
	let m;
	if ((o > u ? (m = 'next') : o < u ? (m = 'prev') : (m = 'reset'), (v && -d === r.translate) || (!v && d === r.translate)))
		return (
			r.updateActiveIndex(o),
			l.autoHeight && r.updateAutoHeight(),
			r.updateSlidesClasses(),
			l.effect !== 'slide' && r.setTranslate(d),
			m !== 'reset' && (r.transitionStart(i, m), r.transitionEnd(i, m)),
			!1
		);
	if (l.cssMode) {
		const b = r.isHorizontal(),
			E = v ? d : -d;
		if (e === 0) {
			const P = r.virtual && r.params.virtual.enabled;
			P && ((r.wrapperEl.style.scrollSnapType = 'none'), (r._immediateVirtual = !0)),
				P && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
					? ((r._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							h[b ? 'scrollLeft' : 'scrollTop'] = E;
					  }))
					: (h[b ? 'scrollLeft' : 'scrollTop'] = E),
				P &&
					requestAnimationFrame(() => {
						(r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1);
					});
		} else {
			if (!r.support.smoothScroll) return Re({ swiper: r, targetPosition: E, side: b ? 'left' : 'top' }), !0;
			h.scrollTo({ [b ? 'left' : 'top']: E, behavior: 'smooth' });
		}
		return !0;
	}
	return (
		r.setTransition(e),
		r.setTranslate(d),
		r.updateActiveIndex(o),
		r.updateSlidesClasses(),
		r.emit('beforeTransitionStart', e, s),
		r.transitionStart(i, m),
		e === 0
			? r.transitionEnd(i, m)
			: r.animating ||
			  ((r.animating = !0),
			  r.onSlideToWrapperTransitionEnd ||
					(r.onSlideToWrapperTransitionEnd = function (E) {
						!r ||
							r.destroyed ||
							(E.target === this &&
								(r.wrapperEl.removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
								(r.onSlideToWrapperTransitionEnd = null),
								delete r.onSlideToWrapperTransitionEnd,
								r.transitionEnd(i, m)));
					}),
			  r.wrapperEl.addEventListener('transitionend', r.onSlideToWrapperTransitionEnd)),
		!0
	);
}
function ei(t, e, i, s) {
	t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == 'string' && (t = parseInt(t, 10));
	const n = this;
	if (n.destroyed) return;
	const r = n.grid && n.params.grid && n.params.grid.rows > 1;
	let o = t;
	if (n.params.loop)
		if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
		else {
			let l;
			if (r) {
				const v = o * n.params.grid.rows;
				l = n.slides.filter((h) => h.getAttribute('data-swiper-slide-index') * 1 === v)[0].column;
			} else l = n.getSlideIndexByData(o);
			const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
				{ centeredSlides: p } = n.params;
			let c = n.params.slidesPerView;
			c === 'auto' ? (c = n.slidesPerViewDynamic()) : ((c = Math.ceil(parseFloat(n.params.slidesPerView, 10))), p && c % 2 === 0 && (c = c + 1));
			let u = a - l < c;
			if ((p && (u = u || l < Math.ceil(c / 2)), u)) {
				const v = p ? (l < n.activeIndex ? 'prev' : 'next') : l - n.activeIndex - 1 < n.params.slidesPerView ? 'next' : 'prev';
				n.loopFix({
					direction: v,
					slideTo: !0,
					activeSlideIndex: v === 'next' ? l + 1 : l - a + 1,
					slideRealIndex: v === 'next' ? n.realIndex : void 0,
				});
			}
			if (r) {
				const v = o * n.params.grid.rows;
				o = n.slides.filter((h) => h.getAttribute('data-swiper-slide-index') * 1 === v)[0].column;
			} else o = n.getSlideIndexByData(o);
		}
	return (
		requestAnimationFrame(() => {
			n.slideTo(o, e, i, s);
		}),
		n
	);
}
function ti(t, e, i) {
	t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
	const s = this,
		{ enabled: n, params: r, animating: o } = s;
	if (!n || s.destroyed) return s;
	let l = r.slidesPerGroup;
	r.slidesPerView === 'auto' && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic('current', !0), 1));
	const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
		p = s.virtual && r.virtual.enabled;
	if (r.loop) {
		if (o && !p && r.loopPreventsSliding) return !1;
		if ((s.loopFix({ direction: 'next' }), (s._clientLeft = s.wrapperEl.clientLeft), s.activeIndex === s.slides.length - 1 && r.cssMode))
			return (
				requestAnimationFrame(() => {
					s.slideTo(s.activeIndex + a, t, e, i);
				}),
				!0
			);
	}
	return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i);
}
function ii(t, e, i) {
	t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
	const s = this,
		{ params: n, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: a, animating: p } = s;
	if (!a || s.destroyed) return s;
	const c = s.virtual && n.virtual.enabled;
	if (n.loop) {
		if (p && !c && n.loopPreventsSliding) return !1;
		s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft);
	}
	const u = l ? s.translate : -s.translate;
	function v(d) {
		return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
	}
	const h = v(u),
		w = r.map((d) => v(d));
	let S = r[w.indexOf(h) - 1];
	if (typeof S > 'u' && n.cssMode) {
		let d;
		r.forEach((m, b) => {
			h >= m && (d = b);
		}),
			typeof d < 'u' && (S = r[d > 0 ? d - 1 : d]);
	}
	let C = 0;
	if (
		(typeof S < 'u' &&
			((C = o.indexOf(S)),
			C < 0 && (C = s.activeIndex - 1),
			n.slidesPerView === 'auto' &&
				n.slidesPerGroup === 1 &&
				n.slidesPerGroupAuto &&
				((C = C - s.slidesPerViewDynamic('previous', !0) + 1), (C = Math.max(C, 0)))),
		n.rewind && s.isBeginning)
	) {
		const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
		return s.slideTo(d, t, e, i);
	} else if (n.loop && s.activeIndex === 0 && n.cssMode)
		return (
			requestAnimationFrame(() => {
				s.slideTo(C, t, e, i);
			}),
			!0
		);
	return s.slideTo(C, t, e, i);
}
function si(t, e, i) {
	t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
	const s = this;
	if (!s.destroyed) return s.slideTo(s.activeIndex, t, e, i);
}
function ri(t, e, i, s) {
	t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
	const n = this;
	if (n.destroyed) return;
	let r = n.activeIndex;
	const o = Math.min(n.params.slidesPerGroupSkip, r),
		l = o + Math.floor((r - o) / n.params.slidesPerGroup),
		a = n.rtlTranslate ? n.translate : -n.translate;
	if (a >= n.snapGrid[l]) {
		const p = n.snapGrid[l],
			c = n.snapGrid[l + 1];
		a - p > (c - p) * s && (r += n.params.slidesPerGroup);
	} else {
		const p = n.snapGrid[l - 1],
			c = n.snapGrid[l];
		a - p <= (c - p) * s && (r -= n.params.slidesPerGroup);
	}
	return (r = Math.max(r, 0)), (r = Math.min(r, n.slidesGrid.length - 1)), n.slideTo(r, t, e, i);
}
function ni() {
	const t = this;
	if (t.destroyed) return;
	const { params: e, slidesEl: i } = t,
		s = e.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : e.slidesPerView;
	let n = t.clickedIndex,
		r;
	const o = t.isElement ? 'swiper-slide' : `.${e.slideClass}`;
	if (e.loop) {
		if (t.animating) return;
		(r = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
			e.centeredSlides
				? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2
					? (t.loopFix(),
					  (n = t.getSlideIndex(j(i, `${o}[data-swiper-slide-index="${r}"]`)[0])),
					  de(() => {
							t.slideTo(n);
					  }))
					: t.slideTo(n)
				: n > t.slides.length - s
				? (t.loopFix(),
				  (n = t.getSlideIndex(j(i, `${o}[data-swiper-slide-index="${r}"]`)[0])),
				  de(() => {
						t.slideTo(n);
				  }))
				: t.slideTo(n);
	} else t.slideTo(n);
}
var ai = { slideTo: Qt, slideToLoop: ei, slideNext: ti, slidePrev: ii, slideReset: si, slideToClosest: ri, slideToClickedSlide: ni };
function li(t) {
	const e = this,
		{ params: i, slidesEl: s } = e;
	if (!i.loop || (e.virtual && e.params.virtual.enabled)) return;
	const n = () => {
			j(s, `.${i.slideClass}, swiper-slide`).forEach((u, v) => {
				u.setAttribute('data-swiper-slide-index', v);
			});
		},
		r = e.grid && i.grid && i.grid.rows > 1,
		o = i.slidesPerGroup * (r ? i.grid.rows : 1),
		l = e.slides.length % o !== 0,
		a = r && e.slides.length % i.grid.rows !== 0,
		p = (c) => {
			for (let u = 0; u < c; u += 1) {
				const v = e.isElement ? ee('swiper-slide', [i.slideBlankClass]) : ee('div', [i.slideClass, i.slideBlankClass]);
				e.slidesEl.append(v);
			}
		};
	if (l) {
		if (i.loopAddBlankSlides) {
			const c = o - (e.slides.length % o);
			p(c), e.recalcSlides(), e.updateSlides();
		} else
			fe(
				'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			);
		n();
	} else if (a) {
		if (i.loopAddBlankSlides) {
			const c = i.grid.rows - (e.slides.length % i.grid.rows);
			p(c), e.recalcSlides(), e.updateSlides();
		} else
			fe(
				'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			);
		n();
	} else n();
	e.loopFix({ slideRealIndex: t, direction: i.centeredSlides ? void 0 : 'next' });
}
function oi(t) {
	let {
		slideRealIndex: e,
		slideTo: i = !0,
		direction: s,
		setTranslate: n,
		activeSlideIndex: r,
		byController: o,
		byMousewheel: l,
	} = t === void 0 ? {} : t;
	const a = this;
	if (!a.params.loop) return;
	a.emit('beforeLoopFix');
	const { slides: p, allowSlidePrev: c, allowSlideNext: u, slidesEl: v, params: h } = a,
		{ centeredSlides: w } = h;
	if (((a.allowSlidePrev = !0), (a.allowSlideNext = !0), a.virtual && h.virtual.enabled)) {
		i &&
			(!h.centeredSlides && a.snapIndex === 0
				? a.slideTo(a.virtual.slides.length, 0, !1, !0)
				: h.centeredSlides && a.snapIndex < h.slidesPerView
				? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
				: a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
			(a.allowSlidePrev = c),
			(a.allowSlideNext = u),
			a.emit('loopFix');
		return;
	}
	let S = h.slidesPerView;
	S === 'auto' ? (S = a.slidesPerViewDynamic()) : ((S = Math.ceil(parseFloat(h.slidesPerView, 10))), w && S % 2 === 0 && (S = S + 1));
	const C = h.slidesPerGroupAuto ? S : h.slidesPerGroup;
	let d = C;
	d % C !== 0 && (d += C - (d % C)), (d += h.loopAdditionalSlides), (a.loopedSlides = d);
	const m = a.grid && h.grid && h.grid.rows > 1;
	p.length < S + d
		? fe(
				'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
		  )
		: m && h.grid.fill === 'row' && fe('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
	const b = [],
		E = [];
	let P = a.activeIndex;
	typeof r > 'u' ? (r = a.getSlideIndex(p.filter((f) => f.classList.contains(h.slideActiveClass))[0])) : (P = r);
	const A = s === 'next' || !s,
		k = s === 'prev' || !s;
	let L = 0,
		M = 0;
	const T = m ? Math.ceil(p.length / h.grid.rows) : p.length,
		x = (m ? p[r].column : r) + (w && typeof n > 'u' ? -S / 2 + 0.5 : 0);
	if (x < d) {
		L = Math.max(d - x, C);
		for (let f = 0; f < d - x; f += 1) {
			const g = f - Math.floor(f / T) * T;
			if (m) {
				const y = T - g - 1;
				for (let O = p.length - 1; O >= 0; O -= 1) p[O].column === y && b.push(O);
			} else b.push(T - g - 1);
		}
	} else if (x + S > T - d) {
		M = Math.max(x - (T - d * 2), C);
		for (let f = 0; f < M; f += 1) {
			const g = f - Math.floor(f / T) * T;
			m
				? p.forEach((y, O) => {
						y.column === g && E.push(O);
				  })
				: E.push(g);
		}
	}
	if (
		((a.__preventObserver__ = !0),
		requestAnimationFrame(() => {
			a.__preventObserver__ = !1;
		}),
		k &&
			b.forEach((f) => {
				(p[f].swiperLoopMoveDOM = !0), v.prepend(p[f]), (p[f].swiperLoopMoveDOM = !1);
			}),
		A &&
			E.forEach((f) => {
				(p[f].swiperLoopMoveDOM = !0), v.append(p[f]), (p[f].swiperLoopMoveDOM = !1);
			}),
		a.recalcSlides(),
		h.slidesPerView === 'auto'
			? a.updateSlides()
			: m &&
			  ((b.length > 0 && k) || (E.length > 0 && A)) &&
			  a.slides.forEach((f, g) => {
					a.grid.updateSlide(g, f, a.slides);
			  }),
		h.watchSlidesProgress && a.updateSlidesOffset(),
		i)
	) {
		if (b.length > 0 && k) {
			if (typeof e > 'u') {
				const f = a.slidesGrid[P],
					y = a.slidesGrid[P + L] - f;
				l
					? a.setTranslate(a.translate - y)
					: (a.slideTo(P + Math.ceil(L), 0, !1, !0),
					  n &&
							((a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - y),
							(a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - y)));
			} else if (n) {
				const f = m ? b.length / h.grid.rows : b.length;
				a.slideTo(a.activeIndex + f, 0, !1, !0), (a.touchEventsData.currentTranslate = a.translate);
			}
		} else if (E.length > 0 && A)
			if (typeof e > 'u') {
				const f = a.slidesGrid[P],
					y = a.slidesGrid[P - M] - f;
				l
					? a.setTranslate(a.translate - y)
					: (a.slideTo(P - M, 0, !1, !0),
					  n &&
							((a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - y),
							(a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - y)));
			} else {
				const f = m ? E.length / h.grid.rows : E.length;
				a.slideTo(a.activeIndex - f, 0, !1, !0);
			}
	}
	if (((a.allowSlidePrev = c), (a.allowSlideNext = u), a.controller && a.controller.control && !o)) {
		const f = { slideRealIndex: e, direction: s, setTranslate: n, activeSlideIndex: r, byController: !0 };
		Array.isArray(a.controller.control)
			? a.controller.control.forEach((g) => {
					!g.destroyed && g.params.loop && g.loopFix({ ...f, slideTo: g.params.slidesPerView === h.slidesPerView ? i : !1 });
			  })
			: a.controller.control instanceof a.constructor &&
			  a.controller.control.params.loop &&
			  a.controller.control.loopFix({ ...f, slideTo: a.controller.control.params.slidesPerView === h.slidesPerView ? i : !1 });
	}
	a.emit('loopFix');
}
function di() {
	const t = this,
		{ params: e, slidesEl: i } = t;
	if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
	t.recalcSlides();
	const s = [];
	t.slides.forEach((n) => {
		const r = typeof n.swiperSlideIndex > 'u' ? n.getAttribute('data-swiper-slide-index') * 1 : n.swiperSlideIndex;
		s[r] = n;
	}),
		t.slides.forEach((n) => {
			n.removeAttribute('data-swiper-slide-index');
		}),
		s.forEach((n) => {
			i.append(n);
		}),
		t.recalcSlides(),
		t.slideTo(t.realIndex, 0);
}
var ci = { loopCreate: li, loopFix: oi, loopDestroy: di };
function fi(t) {
	const e = this;
	if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return;
	const i = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl;
	e.isElement && (e.__preventObserver__ = !0),
		(i.style.cursor = 'move'),
		(i.style.cursor = t ? 'grabbing' : 'grab'),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1;
			});
}
function ui() {
	const t = this;
	(t.params.watchOverflow && t.isLocked) ||
		t.params.cssMode ||
		(t.isElement && (t.__preventObserver__ = !0),
		(t[t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
		t.isElement &&
			requestAnimationFrame(() => {
				t.__preventObserver__ = !1;
			}));
}
var pi = { setGrabCursor: fi, unsetGrabCursor: ui };
function mi(t, e) {
	e === void 0 && (e = this);
	function i(s) {
		if (!s || s === J() || s === R()) return null;
		s.assignedSlot && (s = s.assignedSlot);
		const n = s.closest(t);
		return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
	}
	return i(e);
}
function Oe(t, e, i) {
	const s = R(),
		{ params: n } = t,
		r = n.edgeSwipeDetection,
		o = n.edgeSwipeThreshold;
	return r && (i <= o || i >= s.innerWidth - o) ? (r === 'prevent' ? (e.preventDefault(), !0) : !1) : !0;
}
function gi(t) {
	const e = this,
		i = J();
	let s = t;
	s.originalEvent && (s = s.originalEvent);
	const n = e.touchEventsData;
	if (s.type === 'pointerdown') {
		if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
		n.pointerId = s.pointerId;
	} else s.type === 'touchstart' && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
	if (s.type === 'touchstart') {
		Oe(e, s, s.targetTouches[0].pageX);
		return;
	}
	const { params: r, touches: o, enabled: l } = e;
	if (!l || (!r.simulateTouch && s.pointerType === 'mouse') || (e.animating && r.preventInteractionOnTransition)) return;
	!e.animating && r.cssMode && r.loop && e.loopFix();
	let a = s.target;
	if (
		(r.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(a)) ||
		('which' in s && s.which === 3) ||
		('button' in s && s.button > 0) ||
		(n.isTouched && n.isMoved)
	)
		return;
	const p = !!r.noSwipingClass && r.noSwipingClass !== '',
		c = s.composedPath ? s.composedPath() : s.path;
	p && s.target && s.target.shadowRoot && c && (a = c[0]);
	const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
		v = !!(s.target && s.target.shadowRoot);
	if (r.noSwiping && (v ? mi(u, a) : a.closest(u))) {
		e.allowClick = !0;
		return;
	}
	if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
	(o.currentX = s.pageX), (o.currentY = s.pageY);
	const h = o.currentX,
		w = o.currentY;
	if (!Oe(e, s, h)) return;
	Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
		(o.startX = h),
		(o.startY = w),
		(n.touchStartTime = ce()),
		(e.allowClick = !0),
		e.updateSize(),
		(e.swipeDirection = void 0),
		r.threshold > 0 && (n.allowThresholdMove = !1);
	let S = !0;
	a.matches(n.focusableElements) && ((S = !1), a.nodeName === 'SELECT' && (n.isTouched = !1)),
		i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== a && i.activeElement.blur();
	const C = S && e.allowTouchMove && r.touchStartPreventDefault;
	(r.touchStartForcePreventDefault || C) && !a.isContentEditable && s.preventDefault(),
		r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
		e.emit('touchStart', s);
}
function hi(t) {
	const e = J(),
		i = this,
		s = i.touchEventsData,
		{ params: n, touches: r, rtlTranslate: o, enabled: l } = i;
	if (!l || (!n.simulateTouch && t.pointerType === 'mouse')) return;
	let a = t;
	if ((a.originalEvent && (a = a.originalEvent), a.type === 'pointermove' && (s.touchId !== null || a.pointerId !== s.pointerId))) return;
	let p;
	if (a.type === 'touchmove') {
		if (((p = [...a.changedTouches].filter((P) => P.identifier === s.touchId)[0]), !p || p.identifier !== s.touchId)) return;
	} else p = a;
	if (!s.isTouched) {
		s.startMoving && s.isScrolling && i.emit('touchMoveOpposite', a);
		return;
	}
	const c = p.pageX,
		u = p.pageY;
	if (a.preventedByNestedSwiper) {
		(r.startX = c), (r.startY = u);
		return;
	}
	if (!i.allowTouchMove) {
		a.target.matches(s.focusableElements) || (i.allowClick = !1),
			s.isTouched && (Object.assign(r, { startX: c, startY: u, currentX: c, currentY: u }), (s.touchStartTime = ce()));
		return;
	}
	if (n.touchReleaseOnEdges && !n.loop) {
		if (i.isVertical()) {
			if ((u < r.startY && i.translate <= i.maxTranslate()) || (u > r.startY && i.translate >= i.minTranslate())) {
				(s.isTouched = !1), (s.isMoved = !1);
				return;
			}
		} else if ((c < r.startX && i.translate <= i.maxTranslate()) || (c > r.startX && i.translate >= i.minTranslate())) return;
	}
	if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
		(s.isMoved = !0), (i.allowClick = !1);
		return;
	}
	s.allowTouchCallbacks && i.emit('touchMove', a), (r.previousX = r.currentX), (r.previousY = r.currentY), (r.currentX = c), (r.currentY = u);
	const v = r.currentX - r.startX,
		h = r.currentY - r.startY;
	if (i.params.threshold && Math.sqrt(v ** 2 + h ** 2) < i.params.threshold) return;
	if (typeof s.isScrolling > 'u') {
		let P;
		(i.isHorizontal() && r.currentY === r.startY) || (i.isVertical() && r.currentX === r.startX)
			? (s.isScrolling = !1)
			: v * v + h * h >= 25 &&
			  ((P = (Math.atan2(Math.abs(h), Math.abs(v)) * 180) / Math.PI), (s.isScrolling = i.isHorizontal() ? P > n.touchAngle : 90 - P > n.touchAngle));
	}
	if (
		(s.isScrolling && i.emit('touchMoveOpposite', a),
		typeof s.startMoving > 'u' && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
		s.isScrolling)
	) {
		s.isTouched = !1;
		return;
	}
	if (!s.startMoving) return;
	(i.allowClick = !1), !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
	let w = i.isHorizontal() ? v : h,
		S = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
	n.oneWayMovement && ((w = Math.abs(w) * (o ? 1 : -1)), (S = Math.abs(S) * (o ? 1 : -1))),
		(r.diff = w),
		(w *= n.touchRatio),
		o && ((w = -w), (S = -S));
	const C = i.touchesDirection;
	(i.swipeDirection = w > 0 ? 'prev' : 'next'), (i.touchesDirection = S > 0 ? 'prev' : 'next');
	const d = i.params.loop && !n.cssMode,
		m = (i.touchesDirection === 'next' && i.allowSlideNext) || (i.touchesDirection === 'prev' && i.allowSlidePrev);
	if (!s.isMoved) {
		if ((d && m && i.loopFix({ direction: i.swipeDirection }), (s.startTranslate = i.getTranslate()), i.setTransition(0), i.animating)) {
			const P = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
			i.wrapperEl.dispatchEvent(P);
		}
		(s.allowMomentumBounce = !1),
			n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
			i.emit('sliderFirstMove', a);
	}
	if ((new Date().getTime(), s.isMoved && s.allowThresholdMove && C !== i.touchesDirection && d && m && Math.abs(w) >= 1)) {
		Object.assign(r, { startX: c, startY: u, currentX: c, currentY: u, startTranslate: s.currentTranslate }),
			(s.loopSwapReset = !0),
			(s.startTranslate = s.currentTranslate);
		return;
	}
	i.emit('sliderMove', a), (s.isMoved = !0), (s.currentTranslate = w + s.startTranslate);
	let b = !0,
		E = n.resistanceRatio;
	if (
		(n.touchReleaseOnEdges && (E = 0),
		w > 0
			? (d &&
					m &&
					s.allowThresholdMove &&
					s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) &&
					i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
			  s.currentTranslate > i.minTranslate() &&
					((b = !1), n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + w) ** E)))
			: w < 0 &&
			  (d &&
					m &&
					s.allowThresholdMove &&
					s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) &&
					i.loopFix({
						direction: 'next',
						setTranslate: !0,
						activeSlideIndex: i.slides.length - (n.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10))),
					}),
			  s.currentTranslate < i.maxTranslate() &&
					((b = !1), n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - w) ** E))),
		b && (a.preventedByNestedSwiper = !0),
		!i.allowSlideNext && i.swipeDirection === 'next' && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
		!i.allowSlidePrev && i.swipeDirection === 'prev' && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
		!i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate),
		n.threshold > 0)
	)
		if (Math.abs(w) > n.threshold || s.allowThresholdMove) {
			if (!s.allowThresholdMove) {
				(s.allowThresholdMove = !0),
					(r.startX = r.currentX),
					(r.startY = r.currentY),
					(s.currentTranslate = s.startTranslate),
					(r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
				return;
			}
		} else {
			s.currentTranslate = s.startTranslate;
			return;
		}
	!n.followFinger ||
		n.cssMode ||
		(((n.freeMode && n.freeMode.enabled && i.freeMode) || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()),
		n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
		i.updateProgress(s.currentTranslate),
		i.setTranslate(s.currentTranslate));
}
function vi(t) {
	const e = this,
		i = e.touchEventsData;
	let s = t;
	s.originalEvent && (s = s.originalEvent);
	let n;
	if (s.type === 'touchend' || s.type === 'touchcancel') {
		if (((n = [...s.changedTouches].filter((P) => P.identifier === i.touchId)[0]), !n || n.identifier !== i.touchId)) return;
	} else {
		if (i.touchId !== null || s.pointerId !== i.pointerId) return;
		n = s;
	}
	if (
		['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(s.type) &&
		!(['pointercancel', 'contextmenu'].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))
	)
		return;
	(i.pointerId = null), (i.touchId = null);
	const { params: o, touches: l, rtlTranslate: a, slidesGrid: p, enabled: c } = e;
	if (!c || (!o.simulateTouch && s.pointerType === 'mouse')) return;
	if ((i.allowTouchCallbacks && e.emit('touchEnd', s), (i.allowTouchCallbacks = !1), !i.isTouched)) {
		i.isMoved && o.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1);
		return;
	}
	o.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
	const u = ce(),
		v = u - i.touchStartTime;
	if (e.allowClick) {
		const P = s.path || (s.composedPath && s.composedPath());
		e.updateClickedSlide((P && P[0]) || s.target, P),
			e.emit('tap click', s),
			v < 300 && u - i.lastClickTime < 300 && e.emit('doubleTap doubleClick', s);
	}
	if (
		((i.lastClickTime = ce()),
		de(() => {
			e.destroyed || (e.allowClick = !0);
		}),
		!i.isTouched ||
			!i.isMoved ||
			!e.swipeDirection ||
			(l.diff === 0 && !i.loopSwapReset) ||
			(i.currentTranslate === i.startTranslate && !i.loopSwapReset))
	) {
		(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
		return;
	}
	(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
	let h;
	if ((o.followFinger ? (h = a ? e.translate : -e.translate) : (h = -i.currentTranslate), o.cssMode)) return;
	if (o.freeMode && o.freeMode.enabled) {
		e.freeMode.onTouchEnd({ currentPos: h });
		return;
	}
	const w = h >= -e.maxTranslate() && !e.params.loop;
	let S = 0,
		C = e.slidesSizesGrid[0];
	for (let P = 0; P < p.length; P += P < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
		const A = P < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
		typeof p[P + A] < 'u'
			? (w || (h >= p[P] && h < p[P + A])) && ((S = P), (C = p[P + A] - p[P]))
			: (w || h >= p[P]) && ((S = P), (C = p[p.length - 1] - p[p.length - 2]));
	}
	let d = null,
		m = null;
	o.rewind &&
		(e.isBeginning ? (m = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1) : e.isEnd && (d = 0));
	const b = (h - p[S]) / C,
		E = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
	if (v > o.longSwipesMs) {
		if (!o.longSwipes) {
			e.slideTo(e.activeIndex);
			return;
		}
		e.swipeDirection === 'next' && (b >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? d : S + E) : e.slideTo(S)),
			e.swipeDirection === 'prev' &&
				(b > 1 - o.longSwipesRatio ? e.slideTo(S + E) : m !== null && b < 0 && Math.abs(b) > o.longSwipesRatio ? e.slideTo(m) : e.slideTo(S));
	} else {
		if (!o.shortSwipes) {
			e.slideTo(e.activeIndex);
			return;
		}
		e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
			? s.target === e.navigation.nextEl
				? e.slideTo(S + E)
				: e.slideTo(S)
			: (e.swipeDirection === 'next' && e.slideTo(d !== null ? d : S + E), e.swipeDirection === 'prev' && e.slideTo(m !== null ? m : S));
	}
}
function ze() {
	const t = this,
		{ params: e, el: i } = t;
	if (i && i.offsetWidth === 0) return;
	e.breakpoints && t.setBreakpoint();
	const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = t,
		o = t.virtual && t.params.virtual.enabled;
	(t.allowSlideNext = !0), (t.allowSlidePrev = !0), t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
	const l = o && e.loop;
	(e.slidesPerView === 'auto' || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !l
		? t.slideTo(t.slides.length - 1, 0, !1, !0)
		: t.params.loop && !o
		? t.slideToLoop(t.realIndex, 0, !1, !0)
		: t.slideTo(t.activeIndex, 0, !1, !0),
		t.autoplay &&
			t.autoplay.running &&
			t.autoplay.paused &&
			(clearTimeout(t.autoplay.resizeTimeout),
			(t.autoplay.resizeTimeout = setTimeout(() => {
				t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
			}, 500))),
		(t.allowSlidePrev = n),
		(t.allowSlideNext = s),
		t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function wi(t) {
	const e = this;
	e.enabled &&
		(e.allowClick ||
			(e.params.preventClicks && t.preventDefault(),
			e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
}
function bi() {
	const t = this,
		{ wrapperEl: e, rtlTranslate: i, enabled: s } = t;
	if (!s) return;
	(t.previousTranslate = t.translate),
		t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop),
		t.translate === 0 && (t.translate = 0),
		t.updateActiveIndex(),
		t.updateSlidesClasses();
	let n;
	const r = t.maxTranslate() - t.minTranslate();
	r === 0 ? (n = 0) : (n = (t.translate - t.minTranslate()) / r),
		n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
		t.emit('setTranslate', t.translate, !1);
}
function Si(t) {
	const e = this;
	le(e, t.target), !(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) && e.update();
}
function xi() {
	const t = this;
	t.documentTouchHandlerProceeded || ((t.documentTouchHandlerProceeded = !0), t.params.touchReleaseOnEdges && (t.el.style.touchAction = 'auto'));
}
const qe = (t, e) => {
	const i = J(),
		{ params: s, el: n, wrapperEl: r, device: o } = t,
		l = !!s.nested,
		a = e === 'on' ? 'addEventListener' : 'removeEventListener',
		p = e;
	i[a]('touchstart', t.onDocumentTouchStart, { passive: !1, capture: l }),
		n[a]('touchstart', t.onTouchStart, { passive: !1 }),
		n[a]('pointerdown', t.onTouchStart, { passive: !1 }),
		i[a]('touchmove', t.onTouchMove, { passive: !1, capture: l }),
		i[a]('pointermove', t.onTouchMove, { passive: !1, capture: l }),
		i[a]('touchend', t.onTouchEnd, { passive: !0 }),
		i[a]('pointerup', t.onTouchEnd, { passive: !0 }),
		i[a]('pointercancel', t.onTouchEnd, { passive: !0 }),
		i[a]('touchcancel', t.onTouchEnd, { passive: !0 }),
		i[a]('pointerout', t.onTouchEnd, { passive: !0 }),
		i[a]('pointerleave', t.onTouchEnd, { passive: !0 }),
		i[a]('contextmenu', t.onTouchEnd, { passive: !0 }),
		(s.preventClicks || s.preventClicksPropagation) && n[a]('click', t.onClick, !0),
		s.cssMode && r[a]('scroll', t.onScroll),
		s.updateOnWindowResize
			? t[p](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', ze, !0)
			: t[p]('observerUpdate', ze, !0),
		n[a]('load', t.onLoad, { capture: !0 });
};
function yi() {
	const t = this,
		{ params: e } = t;
	(t.onTouchStart = gi.bind(t)),
		(t.onTouchMove = hi.bind(t)),
		(t.onTouchEnd = vi.bind(t)),
		(t.onDocumentTouchStart = xi.bind(t)),
		e.cssMode && (t.onScroll = bi.bind(t)),
		(t.onClick = wi.bind(t)),
		(t.onLoad = Si.bind(t)),
		qe(t, 'on');
}
function Ei() {
	qe(this, 'off');
}
var Ti = { attachEvents: yi, detachEvents: Ei };
const Ae = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Ci() {
	const t = this,
		{ realIndex: e, initialized: i, params: s, el: n } = t,
		r = s.breakpoints;
	if (!r || (r && Object.keys(r).length === 0)) return;
	const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
	if (!o || t.currentBreakpoint === o) return;
	const a = (o in r ? r[o] : void 0) || t.originalParams,
		p = Ae(t, s),
		c = Ae(t, a),
		u = s.enabled;
	p && !c
		? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses())
		: !p &&
		  c &&
		  (n.classList.add(`${s.containerModifierClass}grid`),
		  ((a.grid.fill && a.grid.fill === 'column') || (!a.grid.fill && s.grid.fill === 'column')) &&
				n.classList.add(`${s.containerModifierClass}grid-column`),
		  t.emitContainerClasses()),
		['navigation', 'pagination', 'scrollbar'].forEach((d) => {
			if (typeof a[d] > 'u') return;
			const m = s[d] && s[d].enabled,
				b = a[d] && a[d].enabled;
			m && !b && t[d].disable(), !m && b && t[d].enable();
		});
	const v = a.direction && a.direction !== s.direction,
		h = s.loop && (a.slidesPerView !== s.slidesPerView || v),
		w = s.loop;
	v && i && t.changeDirection(), H(t.params, a);
	const S = t.params.enabled,
		C = t.params.loop;
	Object.assign(t, { allowTouchMove: t.params.allowTouchMove, allowSlideNext: t.params.allowSlideNext, allowSlidePrev: t.params.allowSlidePrev }),
		u && !S ? t.disable() : !u && S && t.enable(),
		(t.currentBreakpoint = o),
		t.emit('_beforeBreakpoint', a),
		i && (h ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !w && C ? (t.loopCreate(e), t.updateSlides()) : w && !C && t.loopDestroy()),
		t.emit('breakpoint', a);
}
function Pi(t, e, i) {
	if ((e === void 0 && (e = 'window'), !t || (e === 'container' && !i))) return;
	let s = !1;
	const n = R(),
		r = e === 'window' ? n.innerHeight : i.clientHeight,
		o = Object.keys(t).map((l) => {
			if (typeof l == 'string' && l.indexOf('@') === 0) {
				const a = parseFloat(l.substr(1));
				return { value: r * a, point: l };
			}
			return { value: l, point: l };
		});
	o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
	for (let l = 0; l < o.length; l += 1) {
		const { point: a, value: p } = o[l];
		e === 'window' ? n.matchMedia(`(min-width: ${p}px)`).matches && (s = a) : p <= i.clientWidth && (s = a);
	}
	return s || 'max';
}
var Mi = { setBreakpoint: Ci, getBreakpoint: Pi };
function Li(t, e) {
	const i = [];
	return (
		t.forEach((s) => {
			typeof s == 'object'
				? Object.keys(s).forEach((n) => {
						s[n] && i.push(e + n);
				  })
				: typeof s == 'string' && i.push(e + s);
		}),
		i
	);
}
function Ii() {
	const t = this,
		{ classNames: e, params: i, rtl: s, el: n, device: r } = t,
		o = Li(
			[
				'initialized',
				i.direction,
				{ 'free-mode': t.params.freeMode && i.freeMode.enabled },
				{ autoheight: i.autoHeight },
				{ rtl: s },
				{ grid: i.grid && i.grid.rows > 1 },
				{ 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
				{ android: r.android },
				{ ios: r.ios },
				{ 'css-mode': i.cssMode },
				{ centered: i.cssMode && i.centeredSlides },
				{ 'watch-progress': i.watchSlidesProgress },
			],
			i.containerModifierClass
		);
	e.push(...o), n.classList.add(...e), t.emitContainerClasses();
}
function Oi() {
	const t = this,
		{ el: e, classNames: i } = t;
	e.classList.remove(...i), t.emitContainerClasses();
}
var zi = { addClasses: Ii, removeClasses: Oi };
function Ai() {
	const t = this,
		{ isLocked: e, params: i } = t,
		{ slidesOffsetBefore: s } = i;
	if (s) {
		const n = t.slides.length - 1,
			r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
		t.isLocked = t.size > r;
	} else t.isLocked = t.snapGrid.length === 1;
	i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
		i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
		e && e !== t.isLocked && (t.isEnd = !1),
		e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock');
}
var _i = { checkOverflow: Ai },
	Te = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		swiperElementNodeName: 'SWIPER-CONTAINER',
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: 'swiper',
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-blank',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideFullyVisibleClass: 'swiper-slide-fully-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	};
function Di(t, e) {
	return function (s) {
		s === void 0 && (s = {});
		const n = Object.keys(s)[0],
			r = s[n];
		if (typeof r != 'object' || r === null) {
			H(e, s);
			return;
		}
		if (
			(t[n] === !0 && (t[n] = { enabled: !0 }),
			n === 'navigation' && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0),
			['pagination', 'scrollbar'].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0),
			!(n in t && 'enabled' in r))
		) {
			H(e, s);
			return;
		}
		typeof t[n] == 'object' && !('enabled' in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = { enabled: !1 }), H(e, s);
	};
}
const Se = {
		eventsEmitter: zt,
		update: Ft,
		translate: Xt,
		transition: Zt,
		slide: ai,
		loop: ci,
		grabCursor: pi,
		events: Ti,
		breakpoints: Mi,
		checkOverflow: _i,
		classes: zi,
	},
	xe = {};
let Pe = class Y {
	constructor() {
		let e, i;
		for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
		n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === 'Object' ? (i = n[0]) : ([e, i] = n),
			i || (i = {}),
			(i = H({}, i)),
			e && !i.el && (i.el = e);
		const o = J();
		if (i.el && typeof i.el == 'string' && o.querySelectorAll(i.el).length > 1) {
			const c = [];
			return (
				o.querySelectorAll(i.el).forEach((u) => {
					const v = H({}, i, { el: u });
					c.push(new Y(v));
				}),
				c
			);
		}
		const l = this;
		(l.__swiper__ = !0),
			(l.support = He()),
			(l.device = je({ userAgent: i.userAgent })),
			(l.browser = Lt()),
			(l.eventsListeners = {}),
			(l.eventsAnyListeners = []),
			(l.modules = [...l.__modules__]),
			i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
		const a = {};
		l.modules.forEach((c) => {
			c({ params: i, swiper: l, extendParams: Di(i, a), on: l.on.bind(l), once: l.once.bind(l), off: l.off.bind(l), emit: l.emit.bind(l) });
		});
		const p = H({}, Te, a);
		return (
			(l.params = H({}, p, xe, i)),
			(l.originalParams = H({}, l.params)),
			(l.passedParams = H({}, i)),
			l.params &&
				l.params.on &&
				Object.keys(l.params.on).forEach((c) => {
					l.on(c, l.params.on[c]);
				}),
			l.params && l.params.onAny && l.onAny(l.params.onAny),
			Object.assign(l, {
				enabled: l.params.enabled,
				el: e,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return l.params.direction === 'horizontal';
				},
				isVertical() {
					return l.params.direction === 'vertical';
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
				},
				allowSlideNext: l.params.allowSlideNext,
				allowSlidePrev: l.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: l.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null,
				},
				allowClick: !0,
				allowTouchMove: l.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			l.emit('_swiper'),
			l.params.init && l.init(),
			l
		);
	}
	getDirectionLabel(e) {
		return this.isHorizontal()
			? e
			: {
					width: 'height',
					'margin-top': 'margin-left',
					'margin-bottom ': 'margin-right',
					'margin-left': 'margin-top',
					'margin-right': 'margin-bottom',
					'padding-left': 'padding-top',
					'padding-right': 'padding-bottom',
					marginRight: 'marginBottom',
			  }[e];
	}
	getSlideIndex(e) {
		const { slidesEl: i, params: s } = this,
			n = j(i, `.${s.slideClass}, swiper-slide`),
			r = se(n[0]);
		return se(e) - r;
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === e)[0]);
	}
	recalcSlides() {
		const e = this,
			{ slidesEl: i, params: s } = e;
		e.slides = j(i, `.${s.slideClass}, swiper-slide`);
	}
	enable() {
		const e = this;
		e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
	}
	disable() {
		const e = this;
		e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
	}
	setProgress(e, i) {
		const s = this;
		e = Math.min(Math.max(e, 0), 1);
		const n = s.minTranslate(),
			o = (s.maxTranslate() - n) * e + n;
		s.translateTo(o, typeof i > 'u' ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses();
	}
	emitContainerClasses() {
		const e = this;
		if (!e.params._emitClasses || !e.el) return;
		const i = e.el.className.split(' ').filter((s) => s.indexOf('swiper') === 0 || s.indexOf(e.params.containerModifierClass) === 0);
		e.emit('_containerClasses', i.join(' '));
	}
	getSlideClasses(e) {
		const i = this;
		return i.destroyed
			? ''
			: e.className
					.split(' ')
					.filter((s) => s.indexOf('swiper-slide') === 0 || s.indexOf(i.params.slideClass) === 0)
					.join(' ');
	}
	emitSlidesClasses() {
		const e = this;
		if (!e.params._emitClasses || !e.el) return;
		const i = [];
		e.slides.forEach((s) => {
			const n = e.getSlideClasses(s);
			i.push({ slideEl: s, classNames: n }), e.emit('_slideClass', s, n);
		}),
			e.emit('_slideClasses', i);
	}
	slidesPerViewDynamic(e, i) {
		e === void 0 && (e = 'current'), i === void 0 && (i = !1);
		const s = this,
			{ params: n, slides: r, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: p } = s;
		let c = 1;
		if (typeof n.slidesPerView == 'number') return n.slidesPerView;
		if (n.centeredSlides) {
			let u = r[p] ? Math.ceil(r[p].swiperSlideSize) : 0,
				v;
			for (let h = p + 1; h < r.length; h += 1) r[h] && !v && ((u += Math.ceil(r[h].swiperSlideSize)), (c += 1), u > a && (v = !0));
			for (let h = p - 1; h >= 0; h -= 1) r[h] && !v && ((u += r[h].swiperSlideSize), (c += 1), u > a && (v = !0));
		} else if (e === 'current') for (let u = p + 1; u < r.length; u += 1) (i ? o[u] + l[u] - o[p] < a : o[u] - o[p] < a) && (c += 1);
		else for (let u = p - 1; u >= 0; u -= 1) o[p] - o[u] < a && (c += 1);
		return c;
	}
	update() {
		const e = this;
		if (!e || e.destroyed) return;
		const { snapGrid: i, params: s } = e;
		s.breakpoints && e.setBreakpoint(),
			[...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
				o.complete && le(e, o);
			}),
			e.updateSize(),
			e.updateSlides(),
			e.updateProgress(),
			e.updateSlidesClasses();
		function n() {
			const o = e.rtlTranslate ? e.translate * -1 : e.translate,
				l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
			e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
		}
		let r;
		if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
		else {
			if ((s.slidesPerView === 'auto' || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
				const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
				r = e.slideTo(o.length - 1, 0, !1, !0);
			} else r = e.slideTo(e.activeIndex, 0, !1, !0);
			r || n();
		}
		s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit('update');
	}
	changeDirection(e, i) {
		i === void 0 && (i = !0);
		const s = this,
			n = s.params.direction;
		return (
			e || (e = n === 'horizontal' ? 'vertical' : 'horizontal'),
			e === n ||
				(e !== 'horizontal' && e !== 'vertical') ||
				(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
				s.el.classList.add(`${s.params.containerModifierClass}${e}`),
				s.emitContainerClasses(),
				(s.params.direction = e),
				s.slides.forEach((r) => {
					e === 'vertical' ? (r.style.width = '') : (r.style.height = '');
				}),
				s.emit('changeDirection'),
				i && s.update()),
			s
		);
	}
	changeLanguageDirection(e) {
		const i = this;
		(i.rtl && e === 'rtl') ||
			(!i.rtl && e === 'ltr') ||
			((i.rtl = e === 'rtl'),
			(i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
			i.rtl
				? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
				: (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
			i.update());
	}
	mount(e) {
		const i = this;
		if (i.mounted) return !0;
		let s = e || i.params.el;
		if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1;
		(s.swiper = i),
			s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
		const n = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`;
		let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : j(s, n())[0];
		return (
			!o &&
				i.params.createElements &&
				((o = ee('div', i.params.wrapperClass)),
				s.append(o),
				j(s, `.${i.params.slideClass}`).forEach((l) => {
					o.append(l);
				})),
			Object.assign(i, {
				el: s,
				wrapperEl: o,
				slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
				hostEl: i.isElement ? s.parentNode.host : s,
				mounted: !0,
				rtl: s.dir.toLowerCase() === 'rtl' || K(s, 'direction') === 'rtl',
				rtlTranslate: i.params.direction === 'horizontal' && (s.dir.toLowerCase() === 'rtl' || K(s, 'direction') === 'rtl'),
				wrongRTL: K(o, 'display') === '-webkit-box',
			}),
			!0
		);
	}
	init(e) {
		const i = this;
		if (i.initialized || i.mount(e) === !1) return i;
		i.emit('beforeInit'),
			i.params.breakpoints && i.setBreakpoint(),
			i.addClasses(),
			i.updateSize(),
			i.updateSlides(),
			i.params.watchOverflow && i.checkOverflow(),
			i.params.grabCursor && i.enabled && i.setGrabCursor(),
			i.params.loop && i.virtual && i.params.virtual.enabled
				? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0)
				: i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
			i.params.loop && i.loopCreate(),
			i.attachEvents();
		const n = [...i.el.querySelectorAll('[loading="lazy"]')];
		return (
			i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
			n.forEach((r) => {
				r.complete
					? le(i, r)
					: r.addEventListener('load', (o) => {
							le(i, o.target);
					  });
			}),
			Ee(i),
			(i.initialized = !0),
			Ee(i),
			i.emit('init'),
			i.emit('afterInit'),
			i
		);
	}
	destroy(e, i) {
		e === void 0 && (e = !0), i === void 0 && (i = !0);
		const s = this,
			{ params: n, el: r, wrapperEl: o, slides: l } = s;
		return (
			typeof s.params > 'u' ||
				s.destroyed ||
				(s.emit('beforeDestroy'),
				(s.initialized = !1),
				s.detachEvents(),
				n.loop && s.loopDestroy(),
				i &&
					(s.removeClasses(),
					r.removeAttribute('style'),
					o.removeAttribute('style'),
					l &&
						l.length &&
						l.forEach((a) => {
							a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
								a.removeAttribute('style'),
								a.removeAttribute('data-swiper-slide-index');
						})),
				s.emit('destroy'),
				Object.keys(s.eventsListeners).forEach((a) => {
					s.off(a);
				}),
				e !== !1 && ((s.el.swiper = null), wt(s)),
				(s.destroyed = !0)),
			null
		);
	}
	static extendDefaults(e) {
		H(xe, e);
	}
	static get extendedDefaults() {
		return xe;
	}
	static get defaults() {
		return Te;
	}
	static installModule(e) {
		Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
		const i = Y.prototype.__modules__;
		typeof e == 'function' && i.indexOf(e) < 0 && i.push(e);
	}
	static use(e) {
		return Array.isArray(e) ? (e.forEach((i) => Y.installModule(i)), Y) : (Y.installModule(e), Y);
	}
};
Object.keys(Se).forEach((t) => {
	Object.keys(Se[t]).forEach((e) => {
		Pe.prototype[e] = Se[t][e];
	});
});
Pe.use([It, Ot]);
const Ye = [
	'eventsPrefix',
	'injectStyles',
	'injectStylesUrls',
	'modules',
	'init',
	'_direction',
	'oneWayMovement',
	'swiperElementNodeName',
	'touchEventsTarget',
	'initialSlide',
	'_speed',
	'cssMode',
	'updateOnWindowResize',
	'resizeObserver',
	'nested',
	'focusableElements',
	'_enabled',
	'_width',
	'_height',
	'preventInteractionOnTransition',
	'userAgent',
	'url',
	'_edgeSwipeDetection',
	'_edgeSwipeThreshold',
	'_freeMode',
	'_autoHeight',
	'setWrapperSize',
	'virtualTranslate',
	'_effect',
	'breakpoints',
	'breakpointsBase',
	'_spaceBetween',
	'_slidesPerView',
	'maxBackfaceHiddenSlides',
	'_grid',
	'_slidesPerGroup',
	'_slidesPerGroupSkip',
	'_slidesPerGroupAuto',
	'_centeredSlides',
	'_centeredSlidesBounds',
	'_slidesOffsetBefore',
	'_slidesOffsetAfter',
	'normalizeSlideIndex',
	'_centerInsufficientSlides',
	'_watchOverflow',
	'roundLengths',
	'touchRatio',
	'touchAngle',
	'simulateTouch',
	'_shortSwipes',
	'_longSwipes',
	'longSwipesRatio',
	'longSwipesMs',
	'_followFinger',
	'allowTouchMove',
	'_threshold',
	'touchMoveStopPropagation',
	'touchStartPreventDefault',
	'touchStartForcePreventDefault',
	'touchReleaseOnEdges',
	'uniqueNavElements',
	'_resistance',
	'_resistanceRatio',
	'_watchSlidesProgress',
	'_grabCursor',
	'preventClicks',
	'preventClicksPropagation',
	'_slideToClickedSlide',
	'_loop',
	'loopAdditionalSlides',
	'loopAddBlankSlides',
	'loopPreventsSliding',
	'_rewind',
	'_allowSlidePrev',
	'_allowSlideNext',
	'_swipeHandler',
	'_noSwiping',
	'noSwipingClass',
	'noSwipingSelector',
	'passiveListeners',
	'containerModifierClass',
	'slideClass',
	'slideActiveClass',
	'slideVisibleClass',
	'slideFullyVisibleClass',
	'slideNextClass',
	'slidePrevClass',
	'slideBlankClass',
	'wrapperClass',
	'lazyPreloaderClass',
	'lazyPreloadPrevNext',
	'runCallbacksOnInit',
	'observer',
	'observeParents',
	'observeSlideChildren',
	'a11y',
	'_autoplay',
	'_controller',
	'coverflowEffect',
	'cubeEffect',
	'fadeEffect',
	'flipEffect',
	'creativeEffect',
	'cardsEffect',
	'hashNavigation',
	'history',
	'keyboard',
	'mousewheel',
	'_navigation',
	'_pagination',
	'parallax',
	'_scrollbar',
	'_thumbs',
	'virtual',
	'zoom',
	'control',
];
function Z(t) {
	return typeof t == 'object' && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === 'Object' && !t.__swiper__;
}
function Q(t, e) {
	const i = ['__proto__', 'constructor', 'prototype'];
	Object.keys(e)
		.filter((s) => i.indexOf(s) < 0)
		.forEach((s) => {
			typeof t[s] > 'u'
				? (t[s] = e[s])
				: Z(e[s]) && Z(t[s]) && Object.keys(e[s]).length > 0
				? e[s].__swiper__
					? (t[s] = e[s])
					: Q(t[s], e[s])
				: (t[s] = e[s]);
		});
}
function Xe(t) {
	return t === void 0 && (t = {}), t.navigation && typeof t.navigation.nextEl > 'u' && typeof t.navigation.prevEl > 'u';
}
function Ue(t) {
	return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > 'u';
}
function Ke(t) {
	return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > 'u';
}
function Je(t) {
	t === void 0 && (t = '');
	const e = t
			.split(' ')
			.map((s) => s.trim())
			.filter((s) => !!s),
		i = [];
	return (
		e.forEach((s) => {
			i.indexOf(s) < 0 && i.push(s);
		}),
		i.join(' ')
	);
}
function ki(t) {
	return t === void 0 && (t = ''), t ? (t.includes('swiper-wrapper') ? t : `swiper-wrapper ${t}`) : 'swiper-wrapper';
}
function Bi(t) {
	let { swiper: e, slides: i, passedParams: s, changedParams: n, nextEl: r, prevEl: o, scrollbarEl: l, paginationEl: a } = t;
	const p = n.filter((M) => M !== 'children' && M !== 'direction' && M !== 'wrapperClass'),
		{ params: c, pagination: u, navigation: v, scrollbar: h, virtual: w, thumbs: S } = e;
	let C, d, m, b, E, P, A, k;
	n.includes('thumbs') && s.thumbs && s.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (C = !0),
		n.includes('controller') && s.controller && s.controller.control && c.controller && !c.controller.control && (d = !0),
		n.includes('pagination') && s.pagination && (s.pagination.el || a) && (c.pagination || c.pagination === !1) && u && !u.el && (m = !0),
		n.includes('scrollbar') && s.scrollbar && (s.scrollbar.el || l) && (c.scrollbar || c.scrollbar === !1) && h && !h.el && (b = !0),
		n.includes('navigation') &&
			s.navigation &&
			(s.navigation.prevEl || o) &&
			(s.navigation.nextEl || r) &&
			(c.navigation || c.navigation === !1) &&
			v &&
			!v.prevEl &&
			!v.nextEl &&
			(E = !0);
	const L = (M) => {
		e[M] &&
			(e[M].destroy(),
			M === 'navigation'
				? (e.isElement && (e[M].prevEl.remove(), e[M].nextEl.remove()),
				  (c[M].prevEl = void 0),
				  (c[M].nextEl = void 0),
				  (e[M].prevEl = void 0),
				  (e[M].nextEl = void 0))
				: (e.isElement && e[M].el.remove(), (c[M].el = void 0), (e[M].el = void 0)));
	};
	n.includes('loop') && e.isElement && (c.loop && !s.loop ? (P = !0) : !c.loop && s.loop ? (A = !0) : (k = !0)),
		p.forEach((M) => {
			if (Z(c[M]) && Z(s[M]))
				Object.assign(c[M], s[M]), (M === 'navigation' || M === 'pagination' || M === 'scrollbar') && 'enabled' in s[M] && !s[M].enabled && L(M);
			else {
				const T = s[M];
				(T === !0 || T === !1) && (M === 'navigation' || M === 'pagination' || M === 'scrollbar') ? T === !1 && L(M) : (c[M] = s[M]);
			}
		}),
		p.includes('controller') &&
			!d &&
			e.controller &&
			e.controller.control &&
			c.controller &&
			c.controller.control &&
			(e.controller.control = c.controller.control),
		n.includes('children') && i && w && c.virtual.enabled
			? ((w.slides = i), w.update(!0))
			: n.includes('virtual') && w && c.virtual.enabled && (i && (w.slides = i), w.update(!0)),
		n.includes('children') && i && c.loop && (k = !0),
		C && S.init() && S.update(!0),
		d && (e.controller.control = c.controller.control),
		m &&
			(e.isElement &&
				(!a || typeof a == 'string') &&
				((a = document.createElement('div')), a.classList.add('swiper-pagination'), a.part.add('pagination'), e.el.appendChild(a)),
			a && (c.pagination.el = a),
			u.init(),
			u.render(),
			u.update()),
		b &&
			(e.isElement &&
				(!l || typeof l == 'string') &&
				((l = document.createElement('div')), l.classList.add('swiper-scrollbar'), l.part.add('scrollbar'), e.el.appendChild(l)),
			l && (c.scrollbar.el = l),
			h.init(),
			h.updateSize(),
			h.setTranslate()),
		E &&
			(e.isElement &&
				((!r || typeof r == 'string') &&
					((r = document.createElement('div')),
					r.classList.add('swiper-button-next'),
					(r.innerHTML = e.hostEl.constructor.nextButtonSvg),
					r.part.add('button-next'),
					e.el.appendChild(r)),
				(!o || typeof o == 'string') &&
					((o = document.createElement('div')),
					o.classList.add('swiper-button-prev'),
					(o.innerHTML = e.hostEl.constructor.prevButtonSvg),
					o.part.add('button-prev'),
					e.el.appendChild(o))),
			r && (c.navigation.nextEl = r),
			o && (c.navigation.prevEl = o),
			v.init(),
			v.update()),
		n.includes('allowSlideNext') && (e.allowSlideNext = s.allowSlideNext),
		n.includes('allowSlidePrev') && (e.allowSlidePrev = s.allowSlidePrev),
		n.includes('direction') && e.changeDirection(s.direction, !1),
		(P || k) && e.loopDestroy(),
		(A || k) && e.loopCreate(),
		e.update();
}
function Gi(t, e) {
	t === void 0 && (t = {}), e === void 0 && (e = !0);
	const i = { on: {} },
		s = {},
		n = {};
	Q(i, Te), (i._emitClasses = !0), (i.init = !1);
	const r = {},
		o = Ye.map((a) => a.replace(/_/, '')),
		l = Object.assign({}, t);
	return (
		Object.keys(l).forEach((a) => {
			typeof t[a] > 'u' ||
				(o.indexOf(a) >= 0
					? Z(t[a])
						? ((i[a] = {}), (n[a] = {}), Q(i[a], t[a]), Q(n[a], t[a]))
						: ((i[a] = t[a]), (n[a] = t[a]))
					: a.search(/on[A-Z]/) === 0 && typeof t[a] == 'function'
					? e
						? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
						: (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
					: (r[a] = t[a]));
		}),
		['navigation', 'pagination', 'scrollbar'].forEach((a) => {
			i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a];
		}),
		{ params: i, passedParams: n, rest: r, events: s }
	);
}
function Ni(t, e) {
	let { el: i, nextEl: s, prevEl: n, paginationEl: r, scrollbarEl: o, swiper: l } = t;
	Xe(e) &&
		s &&
		n &&
		((l.params.navigation.nextEl = s),
		(l.originalParams.navigation.nextEl = s),
		(l.params.navigation.prevEl = n),
		(l.originalParams.navigation.prevEl = n)),
		Ue(e) && r && ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
		Ke(e) && o && ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
		l.init(i);
}
function $i(t, e, i, s, n) {
	const r = [];
	if (!e) return r;
	const o = (a) => {
		r.indexOf(a) < 0 && r.push(a);
	};
	if (i && s) {
		const a = s.map(n),
			p = i.map(n);
		a.join('') !== p.join('') && o('children'), s.length !== i.length && o('children');
	}
	return (
		Ye.filter((a) => a[0] === '_')
			.map((a) => a.replace(/_/, ''))
			.forEach((a) => {
				if (a in t && a in e)
					if (Z(t[a]) && Z(e[a])) {
						const p = Object.keys(t[a]),
							c = Object.keys(e[a]);
						p.length !== c.length
							? o(a)
							: (p.forEach((u) => {
									t[a][u] !== e[a][u] && o(a);
							  }),
							  c.forEach((u) => {
									t[a][u] !== e[a][u] && o(a);
							  }));
					} else t[a] !== e[a] && o(a);
			}),
		r
	);
}
const Vi = (t) => {
	!t ||
		t.destroyed ||
		!t.params.virtual ||
		(t.params.virtual && !t.params.virtual.enabled) ||
		(t.updateSlides(),
		t.updateProgress(),
		t.updateSlidesClasses(),
		t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate());
};
function ue() {
	return (
		(ue = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
					}
					return t;
			  }),
		ue.apply(this, arguments)
	);
}
function Ze(t) {
	return t.type && t.type.displayName && t.type.displayName.includes('SwiperSlide');
}
function Qe(t) {
	const e = [];
	return (
		V.Children.toArray(t).forEach((i) => {
			Ze(i) ? e.push(i) : i.props && i.props.children && Qe(i.props.children).forEach((s) => e.push(s));
		}),
		e
	);
}
function Ri(t) {
	const e = [],
		i = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
	return (
		V.Children.toArray(t).forEach((s) => {
			if (Ze(s)) e.push(s);
			else if (s.props && s.props.slot && i[s.props.slot]) i[s.props.slot].push(s);
			else if (s.props && s.props.children) {
				const n = Qe(s.props.children);
				n.length > 0 ? n.forEach((r) => e.push(r)) : i['container-end'].push(s);
			} else i['container-end'].push(s);
		}),
		{ slides: e, slots: i }
	);
}
function Fi(t, e, i) {
	if (!i) return null;
	const s = (c) => {
			let u = c;
			return c < 0 ? (u = e.length + c) : u >= e.length && (u = u - e.length), u;
		},
		n = t.isHorizontal() ? { [t.rtlTranslate ? 'right' : 'left']: `${i.offset}px` } : { top: `${i.offset}px` },
		{ from: r, to: o } = i,
		l = t.params.loop ? -e.length : 0,
		a = t.params.loop ? e.length * 2 : e.length,
		p = [];
	for (let c = l; c < a; c += 1) c >= r && c <= o && p.push(e[s(c)]);
	return p.map((c, u) => V.cloneElement(c, { swiper: t, style: n, key: c.props.virtualIndex || c.key || `slide-${u}` }));
}
function ie(t, e) {
	return typeof window > 'u' ? oe(t, e) : st(t, e);
}
const _e = $e(null),
	Hi = $e(null),
	et = Ne(function (t, e) {
		let { className: i, tag: s = 'div', wrapperTag: n = 'div', children: r, onSwiper: o, ...l } = t === void 0 ? {} : t,
			a = !1;
		const [p, c] = te('swiper'),
			[u, v] = te(null),
			[h, w] = te(!1),
			S = F(!1),
			C = F(null),
			d = F(null),
			m = F(null),
			b = F(null),
			E = F(null),
			P = F(null),
			A = F(null),
			k = F(null),
			{ params: L, passedParams: M, rest: T, events: I } = Gi(l),
			{ slides: x, slots: f } = Ri(r),
			g = () => {
				w(!h);
			};
		Object.assign(L.on, {
			_containerClasses(z, $) {
				c($);
			},
		});
		const y = () => {
			Object.assign(L.on, I), (a = !0);
			const z = { ...L };
			if ((delete z.wrapperClass, (d.current = new Pe(z)), d.current.virtual && d.current.params.virtual.enabled)) {
				d.current.virtual.slides = x;
				const $ = { cache: !1, slides: x, renderExternal: v, renderExternalUpdate: !1 };
				Q(d.current.params.virtual, $), Q(d.current.originalParams.virtual, $);
			}
		};
		C.current || y(), d.current && d.current.on('_beforeBreakpoint', g);
		const O = () => {
				a ||
					!I ||
					!d.current ||
					Object.keys(I).forEach((z) => {
						d.current.on(z, I[z]);
					});
			},
			N = () => {
				!I ||
					!d.current ||
					Object.keys(I).forEach((z) => {
						d.current.off(z, I[z]);
					});
			};
		oe(() => () => {
			d.current && d.current.off('_beforeBreakpoint', g);
		}),
			oe(() => {
				!S.current && d.current && (d.current.emitSlidesClasses(), (S.current = !0));
			}),
			ie(() => {
				if ((e && (e.current = C.current), !!C.current))
					return (
						d.current.destroyed && y(),
						Ni({ el: C.current, nextEl: E.current, prevEl: P.current, paginationEl: A.current, scrollbarEl: k.current, swiper: d.current }, L),
						o && !d.current.destroyed && o(d.current),
						() => {
							d.current && !d.current.destroyed && d.current.destroy(!0, !1);
						}
					);
			}, []),
			ie(() => {
				O();
				const z = $i(M, m.current, x, b.current, ($) => $.key);
				return (
					(m.current = M),
					(b.current = x),
					z.length &&
						d.current &&
						!d.current.destroyed &&
						Bi({
							swiper: d.current,
							slides: x,
							passedParams: M,
							changedParams: z,
							nextEl: E.current,
							prevEl: P.current,
							scrollbarEl: k.current,
							paginationEl: A.current,
						}),
					() => {
						N();
					}
				);
			}),
			ie(() => {
				Vi(d.current);
			}, [u]);
		function G() {
			return L.virtual ? Fi(d.current, x, u) : x.map((z, $) => V.cloneElement(z, { swiper: d.current, swiperSlideIndex: $ }));
		}
		return V.createElement(
			s,
			ue({ ref: C, className: Je(`${p}${i ? ` ${i}` : ''}`) }, T),
			V.createElement(
				Hi.Provider,
				{ value: d.current },
				f['container-start'],
				V.createElement(n, { className: ki(L.wrapperClass) }, f['wrapper-start'], G(), f['wrapper-end']),
				Xe(L) &&
					V.createElement(
						V.Fragment,
						null,
						V.createElement('div', { ref: P, className: 'swiper-button-prev' }),
						V.createElement('div', { ref: E, className: 'swiper-button-next' })
					),
				Ke(L) && V.createElement('div', { ref: k, className: 'swiper-scrollbar' }),
				Ue(L) && V.createElement('div', { ref: A, className: 'swiper-pagination' }),
				f['container-end']
			)
		);
	});
et.displayName = 'Swiper';
const tt = Ne(function (t, e) {
	let {
		tag: i = 'div',
		children: s,
		className: n = '',
		swiper: r,
		zoom: o,
		lazy: l,
		virtualIndex: a,
		swiperSlideIndex: p,
		...c
	} = t === void 0 ? {} : t;
	const u = F(null),
		[v, h] = te('swiper-slide'),
		[w, S] = te(!1);
	function C(E, P, A) {
		P === u.current && h(A);
	}
	ie(() => {
		if ((typeof p < 'u' && (u.current.swiperSlideIndex = p), e && (e.current = u.current), !(!u.current || !r))) {
			if (r.destroyed) {
				v !== 'swiper-slide' && h('swiper-slide');
				return;
			}
			return (
				r.on('_slideClass', C),
				() => {
					r && r.off('_slideClass', C);
				}
			);
		}
	}),
		ie(() => {
			r && u.current && !r.destroyed && h(r.getSlideClasses(u.current));
		}, [r]);
	const d = {
			isActive: v.indexOf('swiper-slide-active') >= 0,
			isVisible: v.indexOf('swiper-slide-visible') >= 0,
			isPrev: v.indexOf('swiper-slide-prev') >= 0,
			isNext: v.indexOf('swiper-slide-next') >= 0,
		},
		m = () => (typeof s == 'function' ? s(d) : s),
		b = () => {
			S(!0);
		};
	return V.createElement(
		i,
		ue({ ref: u, className: Je(`${v}${n ? ` ${n}` : ''}`), 'data-swiper-slide-index': a, onLoad: b }, c),
		o &&
			V.createElement(
				_e.Provider,
				{ value: d },
				V.createElement(
					'div',
					{ className: 'swiper-zoom-container', 'data-swiper-zoom': typeof o == 'number' ? o : void 0 },
					m(),
					l && !w && V.createElement('div', { className: 'swiper-lazy-preloader' })
				)
			),
		!o && V.createElement(_e.Provider, { value: d }, m(), l && !w && V.createElement('div', { className: 'swiper-lazy-preloader' }))
	);
});
tt.displayName = 'SwiperSlide';
function Me(t, e, i, s) {
	return (
		t.params.createElements &&
			Object.keys(s).forEach((n) => {
				if (!i[n] && i.auto === !0) {
					let r = j(t.el, `.${s[n]}`)[0];
					r || ((r = ee('div', s[n])), (r.className = s[n]), t.el.append(r)), (i[n] = r), (e[n] = r);
				}
			}),
		i
	);
}
function De(t) {
	let { swiper: e, extendParams: i, on: s, emit: n } = t;
	i({
		navigation: {
			nextEl: null,
			prevEl: null,
			hideOnClick: !1,
			disabledClass: 'swiper-button-disabled',
			hiddenClass: 'swiper-button-hidden',
			lockClass: 'swiper-button-lock',
			navigationDisabledClass: 'swiper-navigation-disabled',
		},
	}),
		(e.navigation = { nextEl: null, prevEl: null });
	function r(w) {
		let S;
		return w && typeof w == 'string' && e.isElement && ((S = e.el.querySelector(w)), S)
			? S
			: (w &&
					(typeof w == 'string' && (S = [...document.querySelectorAll(w)]),
					e.params.uniqueNavElements && typeof w == 'string' && S.length > 1 && e.el.querySelectorAll(w).length === 1 && (S = e.el.querySelector(w))),
			  w && !S ? w : S);
	}
	function o(w, S) {
		const C = e.params.navigation;
		(w = D(w)),
			w.forEach((d) => {
				d &&
					(d.classList[S ? 'add' : 'remove'](...C.disabledClass.split(' ')),
					d.tagName === 'BUTTON' && (d.disabled = S),
					e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? 'add' : 'remove'](C.lockClass));
			});
	}
	function l() {
		const { nextEl: w, prevEl: S } = e.navigation;
		if (e.params.loop) {
			o(S, !1), o(w, !1);
			return;
		}
		o(S, e.isBeginning && !e.params.rewind), o(w, e.isEnd && !e.params.rewind);
	}
	function a(w) {
		w.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n('navigationPrev'));
	}
	function p(w) {
		w.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n('navigationNext'));
	}
	function c() {
		const w = e.params.navigation;
		if (
			((e.params.navigation = Me(e, e.originalParams.navigation, e.params.navigation, {
				nextEl: 'swiper-button-next',
				prevEl: 'swiper-button-prev',
			})),
			!(w.nextEl || w.prevEl))
		)
			return;
		let S = r(w.nextEl),
			C = r(w.prevEl);
		Object.assign(e.navigation, { nextEl: S, prevEl: C }), (S = D(S)), (C = D(C));
		const d = (m, b) => {
			m && m.addEventListener('click', b === 'next' ? p : a), !e.enabled && m && m.classList.add(...w.lockClass.split(' '));
		};
		S.forEach((m) => d(m, 'next')), C.forEach((m) => d(m, 'prev'));
	}
	function u() {
		let { nextEl: w, prevEl: S } = e.navigation;
		(w = D(w)), (S = D(S));
		const C = (d, m) => {
			d.removeEventListener('click', m === 'next' ? p : a), d.classList.remove(...e.params.navigation.disabledClass.split(' '));
		};
		w.forEach((d) => C(d, 'next')), S.forEach((d) => C(d, 'prev'));
	}
	s('init', () => {
		e.params.navigation.enabled === !1 ? h() : (c(), l());
	}),
		s('toEdge fromEdge lock unlock', () => {
			l();
		}),
		s('destroy', () => {
			u();
		}),
		s('enable disable', () => {
			let { nextEl: w, prevEl: S } = e.navigation;
			if (((w = D(w)), (S = D(S)), e.enabled)) {
				l();
				return;
			}
			[...w, ...S].filter((C) => !!C).forEach((C) => C.classList.add(e.params.navigation.lockClass));
		}),
		s('click', (w, S) => {
			let { nextEl: C, prevEl: d } = e.navigation;
			(C = D(C)), (d = D(d));
			const m = S.target;
			if (e.params.navigation.hideOnClick && !d.includes(m) && !C.includes(m)) {
				if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === m || e.pagination.el.contains(m))) return;
				let b;
				C.length
					? (b = C[0].classList.contains(e.params.navigation.hiddenClass))
					: d.length && (b = d[0].classList.contains(e.params.navigation.hiddenClass)),
					n(b === !0 ? 'navigationShow' : 'navigationHide'),
					[...C, ...d].filter((E) => !!E).forEach((E) => E.classList.toggle(e.params.navigation.hiddenClass));
			}
		});
	const v = () => {
			e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), c(), l();
		},
		h = () => {
			e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), u();
		};
	Object.assign(e.navigation, { enable: v, disable: h, update: l, init: c, destroy: u });
}
function X(t) {
	return (
		t === void 0 && (t = ''),
		`.${t
			.trim()
			.replace(/([\.:!+\/])/g, '\\$1')
			.replace(/ /g, '.')}`
	);
}
function ke(t) {
	let { swiper: e, extendParams: i, on: s, emit: n } = t;
	const r = 'swiper-pagination';
	i({
		pagination: {
			el: null,
			bulletElement: 'span',
			clickable: !1,
			hideOnClick: !1,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: !1,
			type: 'bullets',
			dynamicBullets: !1,
			dynamicMainBullets: 1,
			formatFractionCurrent: (d) => d,
			formatFractionTotal: (d) => d,
			bulletClass: `${r}-bullet`,
			bulletActiveClass: `${r}-bullet-active`,
			modifierClass: `${r}-`,
			currentClass: `${r}-current`,
			totalClass: `${r}-total`,
			hiddenClass: `${r}-hidden`,
			progressbarFillClass: `${r}-progressbar-fill`,
			progressbarOppositeClass: `${r}-progressbar-opposite`,
			clickableClass: `${r}-clickable`,
			lockClass: `${r}-lock`,
			horizontalClass: `${r}-horizontal`,
			verticalClass: `${r}-vertical`,
			paginationDisabledClass: `${r}-disabled`,
		},
	}),
		(e.pagination = { el: null, bullets: [] });
	let o,
		l = 0;
	function a() {
		return !e.params.pagination.el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0);
	}
	function p(d, m) {
		const { bulletActiveClass: b } = e.params.pagination;
		d &&
			((d = d[`${m === 'prev' ? 'previous' : 'next'}ElementSibling`]),
			d && (d.classList.add(`${b}-${m}`), (d = d[`${m === 'prev' ? 'previous' : 'next'}ElementSibling`]), d && d.classList.add(`${b}-${m}-${m}`)));
	}
	function c(d) {
		const m = d.target.closest(X(e.params.pagination.bulletClass));
		if (!m) return;
		d.preventDefault();
		const b = se(m) * e.params.slidesPerGroup;
		if (e.params.loop) {
			if (e.realIndex === b) return;
			e.slideToLoop(b);
		} else e.slideTo(b);
	}
	function u() {
		const d = e.rtl,
			m = e.params.pagination;
		if (a()) return;
		let b = e.pagination.el;
		b = D(b);
		let E, P;
		const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
			k = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length;
		if (
			(e.params.loop
				? ((P = e.previousRealIndex || 0), (E = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex))
				: typeof e.snapIndex < 'u'
				? ((E = e.snapIndex), (P = e.previousSnapIndex))
				: ((P = e.previousIndex || 0), (E = e.activeIndex || 0)),
			m.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
		) {
			const L = e.pagination.bullets;
			let M, T, I;
			if (
				(m.dynamicBullets &&
					((o = ye(L[0], e.isHorizontal() ? 'width' : 'height')),
					b.forEach((x) => {
						x.style[e.isHorizontal() ? 'width' : 'height'] = `${o * (m.dynamicMainBullets + 4)}px`;
					}),
					m.dynamicMainBullets > 1 &&
						P !== void 0 &&
						((l += E - (P || 0)), l > m.dynamicMainBullets - 1 ? (l = m.dynamicMainBullets - 1) : l < 0 && (l = 0)),
					(M = Math.max(E - l, 0)),
					(T = M + (Math.min(L.length, m.dynamicMainBullets) - 1)),
					(I = (T + M) / 2)),
				L.forEach((x) => {
					const f = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((g) => `${m.bulletActiveClass}${g}`)]
						.map((g) => (typeof g == 'string' && g.includes(' ') ? g.split(' ') : g))
						.flat();
					x.classList.remove(...f);
				}),
				b.length > 1)
			)
				L.forEach((x) => {
					const f = se(x);
					f === E ? x.classList.add(...m.bulletActiveClass.split(' ')) : e.isElement && x.setAttribute('part', 'bullet'),
						m.dynamicBullets &&
							(f >= M && f <= T && x.classList.add(...`${m.bulletActiveClass}-main`.split(' ')), f === M && p(x, 'prev'), f === T && p(x, 'next'));
				});
			else {
				const x = L[E];
				if (
					(x && x.classList.add(...m.bulletActiveClass.split(' ')),
					e.isElement &&
						L.forEach((f, g) => {
							f.setAttribute('part', g === E ? 'bullet-active' : 'bullet');
						}),
					m.dynamicBullets)
				) {
					const f = L[M],
						g = L[T];
					for (let y = M; y <= T; y += 1) L[y] && L[y].classList.add(...`${m.bulletActiveClass}-main`.split(' '));
					p(f, 'prev'), p(g, 'next');
				}
			}
			if (m.dynamicBullets) {
				const x = Math.min(L.length, m.dynamicMainBullets + 4),
					f = (o * x - o) / 2 - I * o,
					g = d ? 'right' : 'left';
				L.forEach((y) => {
					y.style[e.isHorizontal() ? g : 'top'] = `${f}px`;
				});
			}
		}
		b.forEach((L, M) => {
			if (
				(m.type === 'fraction' &&
					(L.querySelectorAll(X(m.currentClass)).forEach((T) => {
						T.textContent = m.formatFractionCurrent(E + 1);
					}),
					L.querySelectorAll(X(m.totalClass)).forEach((T) => {
						T.textContent = m.formatFractionTotal(k);
					})),
				m.type === 'progressbar')
			) {
				let T;
				m.progressbarOpposite ? (T = e.isHorizontal() ? 'vertical' : 'horizontal') : (T = e.isHorizontal() ? 'horizontal' : 'vertical');
				const I = (E + 1) / k;
				let x = 1,
					f = 1;
				T === 'horizontal' ? (x = I) : (f = I),
					L.querySelectorAll(X(m.progressbarFillClass)).forEach((g) => {
						(g.style.transform = `translate3d(0,0,0) scaleX(${x}) scaleY(${f})`), (g.style.transitionDuration = `${e.params.speed}ms`);
					});
			}
			m.type === 'custom' && m.renderCustom
				? ((L.innerHTML = m.renderCustom(e, E + 1, k)), M === 0 && n('paginationRender', L))
				: (M === 0 && n('paginationRender', L), n('paginationUpdate', L)),
				e.params.watchOverflow && e.enabled && L.classList[e.isLocked ? 'add' : 'remove'](m.lockClass);
		});
	}
	function v() {
		const d = e.params.pagination;
		if (a()) return;
		const m =
			e.virtual && e.params.virtual.enabled
				? e.virtual.slides.length
				: e.grid && e.params.grid.rows > 1
				? e.slides.length / Math.ceil(e.params.grid.rows)
				: e.slides.length;
		let b = e.pagination.el;
		b = D(b);
		let E = '';
		if (d.type === 'bullets') {
			let P = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
			e.params.freeMode && e.params.freeMode.enabled && P > m && (P = m);
			for (let A = 0; A < P; A += 1)
				d.renderBullet
					? (E += d.renderBullet.call(e, A, d.bulletClass))
					: (E += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${d.bulletClass}"></${d.bulletElement}>`);
		}
		d.type === 'fraction' &&
			(d.renderFraction
				? (E = d.renderFraction.call(e, d.currentClass, d.totalClass))
				: (E = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
			d.type === 'progressbar' &&
				(d.renderProgressbar ? (E = d.renderProgressbar.call(e, d.progressbarFillClass)) : (E = `<span class="${d.progressbarFillClass}"></span>`)),
			(e.pagination.bullets = []),
			b.forEach((P) => {
				d.type !== 'custom' && (P.innerHTML = E || ''), d.type === 'bullets' && e.pagination.bullets.push(...P.querySelectorAll(X(d.bulletClass)));
			}),
			d.type !== 'custom' && n('paginationRender', b[0]);
	}
	function h() {
		e.params.pagination = Me(e, e.originalParams.pagination, e.params.pagination, { el: 'swiper-pagination' });
		const d = e.params.pagination;
		if (!d.el) return;
		let m;
		typeof d.el == 'string' && e.isElement && (m = e.el.querySelector(d.el)),
			!m && typeof d.el == 'string' && (m = [...document.querySelectorAll(d.el)]),
			m || (m = d.el),
			!(!m || m.length === 0) &&
				(e.params.uniqueNavElements &&
					typeof d.el == 'string' &&
					Array.isArray(m) &&
					m.length > 1 &&
					((m = [...e.el.querySelectorAll(d.el)]), m.length > 1 && (m = m.filter((b) => Fe(b, '.swiper')[0] === e.el)[0])),
				Array.isArray(m) && m.length === 1 && (m = m[0]),
				Object.assign(e.pagination, { el: m }),
				(m = D(m)),
				m.forEach((b) => {
					d.type === 'bullets' && d.clickable && b.classList.add(...(d.clickableClass || '').split(' ')),
						b.classList.add(d.modifierClass + d.type),
						b.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
						d.type === 'bullets' &&
							d.dynamicBullets &&
							(b.classList.add(`${d.modifierClass}${d.type}-dynamic`), (l = 0), d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
						d.type === 'progressbar' && d.progressbarOpposite && b.classList.add(d.progressbarOppositeClass),
						d.clickable && b.addEventListener('click', c),
						e.enabled || b.classList.add(d.lockClass);
				}));
	}
	function w() {
		const d = e.params.pagination;
		if (a()) return;
		let m = e.pagination.el;
		m &&
			((m = D(m)),
			m.forEach((b) => {
				b.classList.remove(d.hiddenClass),
					b.classList.remove(d.modifierClass + d.type),
					b.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
					d.clickable && (b.classList.remove(...(d.clickableClass || '').split(' ')), b.removeEventListener('click', c));
			})),
			e.pagination.bullets && e.pagination.bullets.forEach((b) => b.classList.remove(...d.bulletActiveClass.split(' ')));
	}
	s('changeDirection', () => {
		if (!e.pagination || !e.pagination.el) return;
		const d = e.params.pagination;
		let { el: m } = e.pagination;
		(m = D(m)),
			m.forEach((b) => {
				b.classList.remove(d.horizontalClass, d.verticalClass), b.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
			});
	}),
		s('init', () => {
			e.params.pagination.enabled === !1 ? C() : (h(), v(), u());
		}),
		s('activeIndexChange', () => {
			typeof e.snapIndex > 'u' && u();
		}),
		s('snapIndexChange', () => {
			u();
		}),
		s('snapGridLengthChange', () => {
			v(), u();
		}),
		s('destroy', () => {
			w();
		}),
		s('enable disable', () => {
			let { el: d } = e.pagination;
			d && ((d = D(d)), d.forEach((m) => m.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)));
		}),
		s('lock unlock', () => {
			u();
		}),
		s('click', (d, m) => {
			const b = m.target,
				E = D(e.pagination.el);
			if (e.params.pagination.el && e.params.pagination.hideOnClick && E && E.length > 0 && !b.classList.contains(e.params.pagination.bulletClass)) {
				if (e.navigation && ((e.navigation.nextEl && b === e.navigation.nextEl) || (e.navigation.prevEl && b === e.navigation.prevEl))) return;
				const P = E[0].classList.contains(e.params.pagination.hiddenClass);
				n(P === !0 ? 'paginationShow' : 'paginationHide'), E.forEach((A) => A.classList.toggle(e.params.pagination.hiddenClass));
			}
		});
	const S = () => {
			e.el.classList.remove(e.params.pagination.paginationDisabledClass);
			let { el: d } = e.pagination;
			d && ((d = D(d)), d.forEach((m) => m.classList.remove(e.params.pagination.paginationDisabledClass))), h(), v(), u();
		},
		C = () => {
			e.el.classList.add(e.params.pagination.paginationDisabledClass);
			let { el: d } = e.pagination;
			d && ((d = D(d)), d.forEach((m) => m.classList.add(e.params.pagination.paginationDisabledClass))), w();
		};
	Object.assign(e.pagination, { enable: S, disable: C, render: v, update: u, init: h, destroy: w });
}
function Be(t) {
	let { swiper: e, extendParams: i, on: s, emit: n } = t;
	const r = J();
	let o = !1,
		l = null,
		a = null,
		p,
		c,
		u,
		v;
	i({
		scrollbar: {
			el: null,
			dragSize: 'auto',
			hide: !1,
			draggable: !1,
			snapOnRelease: !0,
			lockClass: 'swiper-scrollbar-lock',
			dragClass: 'swiper-scrollbar-drag',
			scrollbarDisabledClass: 'swiper-scrollbar-disabled',
			horizontalClass: 'swiper-scrollbar-horizontal',
			verticalClass: 'swiper-scrollbar-vertical',
		},
	}),
		(e.scrollbar = { el: null, dragEl: null });
	function h() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return;
		const { scrollbar: x, rtlTranslate: f } = e,
			{ dragEl: g, el: y } = x,
			O = e.params.scrollbar,
			N = e.params.loop ? e.progressLoop : e.progress;
		let G = c,
			z = (u - c) * N;
		f ? ((z = -z), z > 0 ? ((G = c - z), (z = 0)) : -z + c > u && (G = u + z)) : z < 0 ? ((G = c + z), (z = 0)) : z + c > u && (G = u - z),
			e.isHorizontal()
				? ((g.style.transform = `translate3d(${z}px, 0, 0)`), (g.style.width = `${G}px`))
				: ((g.style.transform = `translate3d(0px, ${z}px, 0)`), (g.style.height = `${G}px`)),
			O.hide &&
				(clearTimeout(l),
				(y.style.opacity = 1),
				(l = setTimeout(() => {
					(y.style.opacity = 0), (y.style.transitionDuration = '400ms');
				}, 1e3)));
	}
	function w(x) {
		!e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${x}ms`);
	}
	function S() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return;
		const { scrollbar: x } = e,
			{ dragEl: f, el: g } = x;
		(f.style.width = ''),
			(f.style.height = ''),
			(u = e.isHorizontal() ? g.offsetWidth : g.offsetHeight),
			(v = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0))),
			e.params.scrollbar.dragSize === 'auto' ? (c = u * v) : (c = parseInt(e.params.scrollbar.dragSize, 10)),
			e.isHorizontal() ? (f.style.width = `${c}px`) : (f.style.height = `${c}px`),
			v >= 1 ? (g.style.display = 'none') : (g.style.display = ''),
			e.params.scrollbar.hide && (g.style.opacity = 0),
			e.params.watchOverflow && e.enabled && x.el.classList[e.isLocked ? 'add' : 'remove'](e.params.scrollbar.lockClass);
	}
	function C(x) {
		return e.isHorizontal() ? x.clientX : x.clientY;
	}
	function d(x) {
		const { scrollbar: f, rtlTranslate: g } = e,
			{ el: y } = f;
		let O;
		(O = (C(x) - yt(y)[e.isHorizontal() ? 'left' : 'top'] - (p !== null ? p : c / 2)) / (u - c)), (O = Math.max(Math.min(O, 1), 0)), g && (O = 1 - O);
		const N = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * O;
		e.updateProgress(N), e.setTranslate(N), e.updateActiveIndex(), e.updateSlidesClasses();
	}
	function m(x) {
		const f = e.params.scrollbar,
			{ scrollbar: g, wrapperEl: y } = e,
			{ el: O, dragEl: N } = g;
		(o = !0),
			(p = x.target === N ? C(x) - x.target.getBoundingClientRect()[e.isHorizontal() ? 'left' : 'top'] : null),
			x.preventDefault(),
			x.stopPropagation(),
			(y.style.transitionDuration = '100ms'),
			(N.style.transitionDuration = '100ms'),
			d(x),
			clearTimeout(a),
			(O.style.transitionDuration = '0ms'),
			f.hide && (O.style.opacity = 1),
			e.params.cssMode && (e.wrapperEl.style['scroll-snap-type'] = 'none'),
			n('scrollbarDragStart', x);
	}
	function b(x) {
		const { scrollbar: f, wrapperEl: g } = e,
			{ el: y, dragEl: O } = f;
		o &&
			(x.preventDefault ? x.preventDefault() : (x.returnValue = !1),
			d(x),
			(g.style.transitionDuration = '0ms'),
			(y.style.transitionDuration = '0ms'),
			(O.style.transitionDuration = '0ms'),
			n('scrollbarDragMove', x));
	}
	function E(x) {
		const f = e.params.scrollbar,
			{ scrollbar: g, wrapperEl: y } = e,
			{ el: O } = g;
		o &&
			((o = !1),
			e.params.cssMode && ((e.wrapperEl.style['scroll-snap-type'] = ''), (y.style.transitionDuration = '')),
			f.hide &&
				(clearTimeout(a),
				(a = de(() => {
					(O.style.opacity = 0), (O.style.transitionDuration = '400ms');
				}, 1e3))),
			n('scrollbarDragEnd', x),
			f.snapOnRelease && e.slideToClosest());
	}
	function P(x) {
		const { scrollbar: f, params: g } = e,
			y = f.el;
		if (!y) return;
		const O = y,
			N = g.passiveListeners ? { passive: !1, capture: !1 } : !1,
			G = g.passiveListeners ? { passive: !0, capture: !1 } : !1;
		if (!O) return;
		const z = x === 'on' ? 'addEventListener' : 'removeEventListener';
		O[z]('pointerdown', m, N), r[z]('pointermove', b, N), r[z]('pointerup', E, G);
	}
	function A() {
		!e.params.scrollbar.el || !e.scrollbar.el || P('on');
	}
	function k() {
		!e.params.scrollbar.el || !e.scrollbar.el || P('off');
	}
	function L() {
		const { scrollbar: x, el: f } = e;
		e.params.scrollbar = Me(e, e.originalParams.scrollbar, e.params.scrollbar, { el: 'swiper-scrollbar' });
		const g = e.params.scrollbar;
		if (!g.el) return;
		let y;
		if ((typeof g.el == 'string' && e.isElement && (y = e.el.querySelector(g.el)), !y && typeof g.el == 'string')) {
			if (((y = r.querySelectorAll(g.el)), !y.length)) return;
		} else y || (y = g.el);
		e.params.uniqueNavElements && typeof g.el == 'string' && y.length > 1 && f.querySelectorAll(g.el).length === 1 && (y = f.querySelector(g.el)),
			y.length > 0 && (y = y[0]),
			y.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
		let O;
		y && ((O = y.querySelector(X(e.params.scrollbar.dragClass))), O || ((O = ee('div', e.params.scrollbar.dragClass)), y.append(O))),
			Object.assign(x, { el: y, dragEl: O }),
			g.draggable && A(),
			y && y.classList[e.enabled ? 'remove' : 'add'](...U(e.params.scrollbar.lockClass));
	}
	function M() {
		const x = e.params.scrollbar,
			f = e.scrollbar.el;
		f && f.classList.remove(...U(e.isHorizontal() ? x.horizontalClass : x.verticalClass)), k();
	}
	s('changeDirection', () => {
		if (!e.scrollbar || !e.scrollbar.el) return;
		const x = e.params.scrollbar;
		let { el: f } = e.scrollbar;
		(f = D(f)),
			f.forEach((g) => {
				g.classList.remove(x.horizontalClass, x.verticalClass), g.classList.add(e.isHorizontal() ? x.horizontalClass : x.verticalClass);
			});
	}),
		s('init', () => {
			e.params.scrollbar.enabled === !1 ? I() : (L(), S(), h());
		}),
		s('update resize observerUpdate lock unlock changeDirection', () => {
			S();
		}),
		s('setTranslate', () => {
			h();
		}),
		s('setTransition', (x, f) => {
			w(f);
		}),
		s('enable disable', () => {
			const { el: x } = e.scrollbar;
			x && x.classList[e.enabled ? 'remove' : 'add'](...U(e.params.scrollbar.lockClass));
		}),
		s('destroy', () => {
			M();
		});
	const T = () => {
			e.el.classList.remove(...U(e.params.scrollbar.scrollbarDisabledClass)),
				e.scrollbar.el && e.scrollbar.el.classList.remove(...U(e.params.scrollbar.scrollbarDisabledClass)),
				L(),
				S(),
				h();
		},
		I = () => {
			e.el.classList.add(...U(e.params.scrollbar.scrollbarDisabledClass)),
				e.scrollbar.el && e.scrollbar.el.classList.add(...U(e.params.scrollbar.scrollbarDisabledClass)),
				M();
		};
	Object.assign(e.scrollbar, { enable: T, disable: I, updateSize: S, setTranslate: h, init: L, destroy: M });
}
function Ge(t) {
	let { swiper: e, extendParams: i, on: s } = t;
	i({
		a11y: {
			enabled: !0,
			notificationClass: 'swiper-notification',
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide {{index}}',
			slideLabelMessage: '{{index}} / {{slidesLength}}',
			containerMessage: null,
			containerRoleDescriptionMessage: null,
			itemRoleDescriptionMessage: null,
			slideRole: 'group',
			id: null,
		},
	}),
		(e.a11y = { clicked: !1 });
	let n = null;
	function r(f) {
		const g = n;
		g.length !== 0 && ((g.innerHTML = ''), (g.innerHTML = f));
	}
	function o(f) {
		const g = () => Math.round(16 * Math.random()).toString(16);
		return 'x'.repeat(f).replace(/x/g, g);
	}
	function l(f) {
		(f = D(f)),
			f.forEach((g) => {
				g.setAttribute('tabIndex', '0');
			});
	}
	function a(f) {
		(f = D(f)),
			f.forEach((g) => {
				g.setAttribute('tabIndex', '-1');
			});
	}
	function p(f, g) {
		(f = D(f)),
			f.forEach((y) => {
				y.setAttribute('role', g);
			});
	}
	function c(f, g) {
		(f = D(f)),
			f.forEach((y) => {
				y.setAttribute('aria-roledescription', g);
			});
	}
	function u(f, g) {
		(f = D(f)),
			f.forEach((y) => {
				y.setAttribute('aria-controls', g);
			});
	}
	function v(f, g) {
		(f = D(f)),
			f.forEach((y) => {
				y.setAttribute('aria-label', g);
			});
	}
	function h(f, g) {
		(f = D(f)),
			f.forEach((y) => {
				y.setAttribute('id', g);
			});
	}
	function w(f, g) {
		(f = D(f)),
			f.forEach((y) => {
				y.setAttribute('aria-live', g);
			});
	}
	function S(f) {
		(f = D(f)),
			f.forEach((g) => {
				g.setAttribute('aria-disabled', !0);
			});
	}
	function C(f) {
		(f = D(f)),
			f.forEach((g) => {
				g.setAttribute('aria-disabled', !1);
			});
	}
	function d(f) {
		if (f.keyCode !== 13 && f.keyCode !== 32) return;
		const g = e.params.a11y,
			y = f.target;
		(e.pagination &&
			e.pagination.el &&
			(y === e.pagination.el || e.pagination.el.contains(f.target)) &&
			!f.target.matches(X(e.params.pagination.bulletClass))) ||
			(e.navigation &&
				e.navigation.nextEl &&
				y === e.navigation.nextEl &&
				((e.isEnd && !e.params.loop) || e.slideNext(), e.isEnd ? r(g.lastSlideMessage) : r(g.nextSlideMessage)),
			e.navigation &&
				e.navigation.prevEl &&
				y === e.navigation.prevEl &&
				((e.isBeginning && !e.params.loop) || e.slidePrev(), e.isBeginning ? r(g.firstSlideMessage) : r(g.prevSlideMessage)),
			e.pagination && y.matches(X(e.params.pagination.bulletClass)) && y.click());
	}
	function m() {
		if (e.params.loop || e.params.rewind || !e.navigation) return;
		const { nextEl: f, prevEl: g } = e.navigation;
		g && (e.isBeginning ? (S(g), a(g)) : (C(g), l(g))), f && (e.isEnd ? (S(f), a(f)) : (C(f), l(f)));
	}
	function b() {
		return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
	}
	function E() {
		return b() && e.params.pagination.clickable;
	}
	function P() {
		const f = e.params.a11y;
		b() &&
			e.pagination.bullets.forEach((g) => {
				e.params.pagination.clickable &&
					(l(g), e.params.pagination.renderBullet || (p(g, 'button'), v(g, f.paginationBulletMessage.replace(/\{\{index\}\}/, se(g) + 1)))),
					g.matches(X(e.params.pagination.bulletActiveClass)) ? g.setAttribute('aria-current', 'true') : g.removeAttribute('aria-current');
			});
	}
	const A = (f, g, y) => {
			l(f), f.tagName !== 'BUTTON' && (p(f, 'button'), f.addEventListener('keydown', d)), v(f, y), u(f, g);
		},
		k = () => {
			e.a11y.clicked = !0;
		},
		L = () => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					e.destroyed || (e.a11y.clicked = !1);
				});
			});
		},
		M = (f) => {
			if (e.a11y.clicked) return;
			const g = f.target.closest(`.${e.params.slideClass}, swiper-slide`);
			if (!g || !e.slides.includes(g)) return;
			const y = e.slides.indexOf(g) === e.activeIndex,
				O = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(g);
			y ||
				O ||
				(f.sourceCapabilities && f.sourceCapabilities.firesTouchEvents) ||
				(e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0), e.slideTo(e.slides.indexOf(g), 0));
		},
		T = () => {
			const f = e.params.a11y;
			f.itemRoleDescriptionMessage && c(e.slides, f.itemRoleDescriptionMessage), f.slideRole && p(e.slides, f.slideRole);
			const g = e.slides.length;
			f.slideLabelMessage &&
				e.slides.forEach((y, O) => {
					const N = e.params.loop ? parseInt(y.getAttribute('data-swiper-slide-index'), 10) : O,
						G = f.slideLabelMessage.replace(/\{\{index\}\}/, N + 1).replace(/\{\{slidesLength\}\}/, g);
					v(y, G);
				});
		},
		I = () => {
			const f = e.params.a11y;
			e.el.append(n);
			const g = e.el;
			f.containerRoleDescriptionMessage && c(g, f.containerRoleDescriptionMessage), f.containerMessage && v(g, f.containerMessage);
			const y = e.wrapperEl,
				O = f.id || y.getAttribute('id') || `swiper-wrapper-${o(16)}`,
				N = e.params.autoplay && e.params.autoplay.enabled ? 'off' : 'polite';
			h(y, O), w(y, N), T();
			let { nextEl: G, prevEl: z } = e.navigation ? e.navigation : {};
			(G = D(G)),
				(z = D(z)),
				G && G.forEach(($) => A($, O, f.nextSlideMessage)),
				z && z.forEach(($) => A($, O, f.prevSlideMessage)),
				E() &&
					D(e.pagination.el).forEach((W) => {
						W.addEventListener('keydown', d);
					}),
				e.el.addEventListener('focus', M, !0),
				e.el.addEventListener('pointerdown', k, !0),
				e.el.addEventListener('pointerup', L, !0);
		};
	function x() {
		n && n.remove();
		let { nextEl: f, prevEl: g } = e.navigation ? e.navigation : {};
		(f = D(f)),
			(g = D(g)),
			f && f.forEach((y) => y.removeEventListener('keydown', d)),
			g && g.forEach((y) => y.removeEventListener('keydown', d)),
			E() &&
				D(e.pagination.el).forEach((O) => {
					O.removeEventListener('keydown', d);
				}),
			e.el.removeEventListener('focus', M, !0),
			e.el.removeEventListener('pointerdown', k, !0),
			e.el.removeEventListener('pointerup', L, !0);
	}
	s('beforeInit', () => {
		(n = ee('span', e.params.a11y.notificationClass)), n.setAttribute('aria-live', 'assertive'), n.setAttribute('aria-atomic', 'true');
	}),
		s('afterInit', () => {
			e.params.a11y.enabled && I();
		}),
		s('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
			e.params.a11y.enabled && T();
		}),
		s('fromEdge toEdge afterInit lock unlock', () => {
			e.params.a11y.enabled && m();
		}),
		s('paginationUpdate', () => {
			e.params.a11y.enabled && P();
		}),
		s('destroy', () => {
			e.params.a11y.enabled && x();
		});
}
const ji = ({ vertical: t, theme: e }) =>
		mt({
			display: 'flex',
			maxWidth: '100%',
			maxHeight: t ? '100%' : void 0,
			margin: 0,
			padding: 0,
			overflow: 'hidden',
			'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
			'&.ss__carousel-vertical': {
				flexDirection: 'column',
				'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
				'.swiper-container': { flexDirection: 'row' },
				'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
				'.swiper-pagination-bullet': { margin: '4px' },
			},
			'.swiper-pagination-bullet-active': { background: e?.variables?.colors?.primary || 'inherit' },
			'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
			},
			'.ss__carousel__next, .ss__carousel__prev': {
				padding: '5px',
				cursor: 'pointer',
				lineHeight: 0,
				'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
			},
			'.swiper': {
				display: 'flex',
				flexDirection: 'column',
				marginLeft: 'auto',
				marginRight: 'auto',
				position: 'relative',
				overflow: 'hidden',
				listStyle: 'none',
				padding: 0,
				zIndex: '1',
				width: '100%',
			},
			'.swiper-vertical > .swiper-wrapper': { flexDirection: 'column' },
			'.swiper-wrapper': {
				order: 0,
				position: 'relative',
				width: '100%',
				height: '100%',
				zIndex: '1',
				display: 'flex',
				transitionProperty: 'transform',
				boxSizing: 'content-box',
			},
			'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
			'.swiper-pagination': { display: 'flex', justifyContent: 'center', marginTop: '10px', width: '100%', order: 1, transition: '.3s opacity' },
			'.swiper-pagination-bullet': {
				width: '8px',
				height: '8px',
				display: 'inline-block',
				borderRadius: '50%',
				background: '#000',
				opacity: '.2',
				cursor: 'pointer',
				margin: '0 4px',
				'&.swiper-pagination-bullet-active': { opacity: '0.8', background: e?.variables?.colors?.primary || '#000' },
			},
			'.swiper-slide-invisible-blank': { visibility: 'hidden' },
			'.swiper-horizontal': { touchAction: 'pan-y' },
			'.swiper-vertical': { touchAction: 'pan-x' },
			'.swiper-scrollbar': {
				position: 'absolute',
				bottom: '0',
				left: '0',
				width: '100%',
				height: '2px',
				backgroundColor: '#d9d9d9',
				'&:empty': { display: 'none' },
				'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: e?.variables?.colors?.primary || '#000' },
			},
		}),
	Wi = {
		0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
		480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
		768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
		1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
		1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
	},
	qi = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
	Ki = rt((t) => {
		const e = nt(),
			i = at(),
			s = {
				breakpoints: t.vertical ? JSON.parse(JSON.stringify(qi)) : JSON.parse(JSON.stringify(Wi)),
				pagination: !1,
				navigation: !0,
				slidesPerGroup: !t.breakpoints || !Object.keys(t.breakpoints).length ? 5 : void 0,
				slidesPerView: !t.breakpoints || !Object.keys(t.breakpoints).length ? 5 : void 0,
				spaceBetween: 10,
				loop: !0,
				autoAdjustSlides: !1,
				treePath: i,
			};
		let n = lt('carousel', e, s, t),
			r;
		if (
			!(t.theme?.type == 'templates' || e?.type == 'templates') &&
			n.breakpoints &&
			(Object.keys(n.breakpoints).forEach((_) => {
				const B = n.breakpoints[_];
				B.slidesPerView && (B.slidesPerView = Number(B.slidesPerView) || 1), B.slidesPerGroup && (B.slidesPerGroup = Number(B.slidesPerGroup) || 1);
			}),
			(r = gt(n.breakpoints)),
			r && Object.keys(r).length)
		) {
			const _ = ot(n?.theme || {}, r?.theme || {}, { arrayMerge: (B, re) => re });
			n.autoAdjustSlides && n.children.length < r.slidesPerView && ((r.slidesPerView = n.children.length), (r.slidesPerGroup = n.children.length)),
				(n = { ...n, ...r, theme: _ });
		}
		const {
				children: o,
				loop: l,
				nextButton: a,
				prevButton: p,
				hideButtons: c,
				vertical: u,
				onInit: v,
				onBeforeInit: h,
				onAfterInit: w,
				onNextButtonClick: S,
				onPrevButtonClick: C,
				onClick: d,
				disableStyles: m,
				style: b,
				styleScript: E,
				themeStyleScript: P,
				modules: A,
				className: k,
				internalClassName: L,
				treePath: M,
				...T
			} = n,
			{ overrideElement: I, shouldRenderDefault: x } = dt('carousel', n);
		if (!x) return I;
		let f = n.pagination,
			g = n.navigation,
			y = n.scrollbar;
		const O = { icon: { internalClassName: 'ss__carousel__icon', ...ht({ disableStyles: m }), theme: n.theme, treePath: M } },
			N = Array.isArray(A) ? [De, ke, Be, Ge].concat(A) : [De, ke, Be, Ge],
			G = N.filter((_, B) => N.indexOf(_) === B),
			z = F(null),
			$ = F(null),
			W = F(null),
			pe = ct(n, ji);
		oe(() => {
			if (W.current) {
				const B = W.current.querySelector('.swiper');
				B?.classList.add('swiper-container', 'swiper-container-pointer-events'),
					B?.classList.contains('swiper-vertical') && B.classList.add('swiper-container-vertical'),
					B?.classList.contains('swiper-horizontal') && B.classList.add('swiper-container-horizontal');
			}
			me();
		}, [t]),
			f && (typeof f == 'object' ? (f = { clickable: !0, ...f }) : (f = { clickable: !0 })),
			g &&
				(typeof g == 'object'
					? (g = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...g })
					: (g = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
			y && (typeof y == 'object' ? (y = { enabled: !0, ...y }) : (y = { enabled: !0 }));
		const me = () => {
			if (W.current) {
				const B = W.current?.querySelectorAll('.swiper-slide-visible');
				B.forEach((re, it) => {
					re.classList.remove('swiper-last-visible-slide'), it == B.length - 1 && re.classList.add('swiper-last-visible-slide');
				});
			}
		};
		return (
			delete T.breakpoints,
			o?.length
				? q(pt, {
						children: ft('div', {
							ref: W,
							...pe,
							className: ge('ss__carousel', u ? 'ss__carousel-vertical' : '', k, L),
							children: [
								g !== !1 &&
									q('div', {
										className: ge('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': c }),
										children: q('div', {
											className: 'ss__carousel__prev',
											ref: z,
											onClick: C && ((_) => C(_)),
											children: p || q(Le, { icon: u ? 'angle-up' : 'angle-left', ...O.icon, name: 'prev' }),
										}),
									}),
								q(et, {
									centerInsufficientSlides: !0,
									onBeforeInit: (_) => {
										g &&
											_.params.navigation &&
											((_.params.navigation.prevEl = z.current ? z.current : void 0), (_.params.navigation.nextEl = $.current ? $.current : void 0)),
											h && h(_);
									},
									onInit: (_) => {
										v && v(_);
									},
									onAfterInit: (_) => {
										g &&
											_.navigation &&
											((_.navigation.onPrevClick = (B) => {
												B.preventDefault(), !(_.isBeginning && !_.params.loop && !_.params.rewind) && (_.slidePrev(), _.emit('navigationPrev'));
											}),
											(_.navigation.onNextClick = (B) => {
												B.preventDefault(), !(_.isEnd && !_.params.loop && !_.params.rewind) && (_.slideNext(), _.emit('navigationNext'));
											})),
											w && w(_);
									},
									onClick: (_, B) => {
										d && d(_, B);
									},
									direction: u ? 'vertical' : 'horizontal',
									loop: l,
									threshold: 7,
									loopAddBlankSlides: !1,
									modules: G,
									...T,
									...r,
									controller: void 0,
									navigation: g,
									pagination: f,
									scrollbar: y,
									onResize: (_) => {
										T.onResize && T.onResize(), _.updateSlidesClasses(), me();
									},
									onTransitionEnd: () => {
										T.onTransitionEnd && T.onTransitionEnd(), me();
									},
									children: o.map((_) => (_ != null ? q(tt, { children: ut(_, { treePath: M }) }) : null)),
								}),
								g !== !1 &&
									q('div', {
										className: ge('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': c }),
										children: q('div', {
											className: 'ss__carousel__next',
											ref: $,
											onClick: S && ((_) => S(_)),
											children: a || q(Le, { icon: u ? 'angle-down' : 'angle-right', ...O.icon, name: 'next' }),
										}),
									}),
							],
						}),
				  })
				: null
		);
	});
export { Ki as C, qi as a, Wi as d };
