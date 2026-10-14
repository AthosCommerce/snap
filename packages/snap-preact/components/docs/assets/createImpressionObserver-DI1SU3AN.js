import { s as w, A as l, q as S, y as h } from './iframe-CXSVAHru.js';
const y = 250,
	R = (e, s = {}) => {
		const { rootMargin: o = '0px', fireOnce: u = !1, threshold: v = 0, minVisibleTime: I = 0 } = s,
			[m, i] = w(!1),
			n = l(null),
			a = l(null),
			[V, p] = w(0),
			T = S((t) => {
				(e.current = t), p((r) => r + 1);
			}, []);
		return (
			h(() => {
				i(!1);
				let t = null,
					r = null;
				if (!window.IntersectionObserver || !e.current) return;
				const c = () => {
						r && (window.clearInterval(r), (r = null));
					},
					b = () => {
						I > 0
							? ((a.current = Date.now()),
							  n.current && window.clearTimeout(n.current),
							  (n.current = window.setTimeout(() => {
									i(!0), u && e.current && t && t.unobserve(e.current);
							  }, I)))
							: (i(!0), u && e.current && t && t.unobserve(e.current));
					},
					d = () => {
						n.current && window.clearTimeout(n.current), (n.current = null), (a.current = null), i(!1);
					};
				return (
					(t = new IntersectionObserver(
						([O]) => {
							O.isIntersecting
								? e.current && f(e.current)
									? (c(), b())
									: (d(),
									  r ||
											(r = window.setInterval(() => {
												if (!e.current) {
													c();
													return;
												}
												f(e.current) && (c(), b());
											}, y)))
								: (c(), d());
						},
						{ rootMargin: o, threshold: v }
					)),
					e.current && t.observe(e.current),
					() => {
						i(!1), c(), n.current && window.clearTimeout(n.current), t && e.current && t.unobserve(e.current);
					}
				);
			}, [e, V]),
			{ inViewport: m, updateRef: T }
		);
	};
function f(e) {
	return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
}
const L = 0.7,
	_ = 1e3;
function P(e) {
	const s = l(null),
		{ inViewport: o, updateRef: u } = R(s, { fireOnce: !0, threshold: L, minVisibleTime: _, ...e });
	return { ref: s, inViewport: o, updateRef: u };
}
export { P as c, R as u };
