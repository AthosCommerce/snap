import { y as a, A as l, Q as p, s as d, H as w } from './iframe-Bc4KSH0T.js';
var y = Object.prototype.hasOwnProperty;
function g(e, t, i) {
	for (i of e.keys()) if (u(i, t)) return i;
}
function u(e, t) {
	var i, n, r;
	if (e === t) return !0;
	if (e && t && (i = e.constructor) === t.constructor) {
		if (i === Date) return e.getTime() === t.getTime();
		if (i === RegExp) return e.toString() === t.toString();
		if (i === Array) {
			if ((n = e.length) === t.length) for (; n-- && u(e[n], t[n]); );
			return n === -1;
		}
		if (i === Set) {
			if (e.size !== t.size) return !1;
			for (n of e) if (((r = n), (r && typeof r == 'object' && ((r = g(t, r)), !r)) || !t.has(r))) return !1;
			return !0;
		}
		if (i === Map) {
			if (e.size !== t.size) return !1;
			for (n of e) if (((r = n[0]), (r && typeof r == 'object' && ((r = g(t, r)), !r)) || !u(n[1], t.get(r)))) return !1;
			return !0;
		}
		if (i === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
		else if (i === DataView) {
			if ((n = e.byteLength) === t.byteLength) for (; n-- && e.getInt8(n) === t.getInt8(n); );
			return n === -1;
		}
		if (ArrayBuffer.isView(e)) {
			if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
			return n === -1;
		}
		if (!i || typeof e == 'object') {
			n = 0;
			for (i in e) if ((y.call(e, i) && ++n && !y.call(t, i)) || !(i in t) || !u(e[i], t[i])) return !1;
			return Object.keys(t).length === n;
		}
	}
	return e !== e && t !== t;
}
function m(e) {
	const t = l(e),
		i = l(0);
	return u(e, t.current) || ((t.current = e), (i.current += 1)), p(() => t.current, [i.current]);
}
function z(e, t) {
	return a(e, [m(t)]);
}
function o(e) {
	if (!e || !Object.keys(e).length) return;
	const [t, i] = d(f(e));
	let n;
	const r = () => {
		function s() {
			i(f(e));
		}
		(n = w(() => {
			s();
		}, 50)),
			window.addEventListener('resize', n);
	};
	return (
		a(() => (r(), () => window.removeEventListener('resize', n)), []),
		z(() => {
			i(f(e)), r();
		}, [e]),
		t
	);
}
const f = (e) => {
	let t;
	const i = window.innerWidth,
		n = Object.keys(e)
			.map((r) => +r)
			.sort((r, s) => r - s)
			.map((r) => ({ [r]: e[r] }));
	if (n.length) {
		for (let r = 0; r < n.length; r++) {
			const s = n[r],
				c = parseInt(Object.keys(s)[0]);
			if (r + 1 === n.length || (r === 0 && i < c)) {
				t = n[r][c];
				break;
			} else {
				const h = parseInt(Object.keys(n[r + 1])[0]);
				if (i >= c && i < h) {
					t = n[r][c];
					break;
				}
			}
		}
		return t;
	}
	return t;
};
export { z as a, m as b, f as g, o as u };
