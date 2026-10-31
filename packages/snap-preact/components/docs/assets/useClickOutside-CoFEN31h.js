import { A as i, y as u } from './iframe-Bc4KSH0T.js';
function l(o, t = !1) {
	const e = i(),
		n = i();
	return (
		u(() => {
			e.current = o;
		}),
		u(() => {
			return document.addEventListener('click', r, t), () => document.removeEventListener('click', r, t);
			function r(c) {
				n.current && e.current && !n.current.contains(c.target) && e.current(c);
			}
		}, []),
		n
	);
}
export { l as u };
