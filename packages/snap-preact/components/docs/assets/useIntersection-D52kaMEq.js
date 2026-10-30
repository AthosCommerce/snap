import { s as o, y as u } from './iframe-U9T2Y9ZS.js';
const b = (e, n = '0px', t = !1) => {
	const [c, i] = o(!1);
	return (
		u(() => {
			const r = new IntersectionObserver(
				([s]) => {
					i(s.isIntersecting), t && s.isIntersecting && r.unobserve(e.current);
				},
				{ rootMargin: n }
			);
			return (
				e.current && r.observe(e.current),
				() => {
					r.unobserve(e.current);
				}
			);
		}, []),
		c
	);
};
export { b as u };
