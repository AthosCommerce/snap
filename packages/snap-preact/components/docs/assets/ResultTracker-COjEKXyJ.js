import { o as b, u as g, m as y, j as N, d as R, e as _ } from './iframe-Bc4KSH0T.js';
import { c as h } from './createImpressionObserver-m2TNXj0r.js';
const v = { ResultTracker: () => _({}) },
	j = b((a) => {
		const o = g(),
			l = y('resultTracker', o, {}, a),
			i = { impression: !0, click: !0 },
			{ children: n, result: c, track: m, controller: s, className: k, internalClassName: u, disableStyles: p, style: e } = l,
			t = { ...i, ...m },
			{ ref: d, inViewport: f } = h();
		f && t.impression && s?.track.product.impression(c);
		const r = {};
		return (
			p ? e && (r.css = [e]) : (r.css = [v.ResultTracker(), e]),
			N('div', {
				className: R('ss__result-tracker', `ss__${s?.type}-result-tracker`, k, u),
				onClick: (T) => {
					t.click && s?.track.product.click(T, c);
				},
				ref: d,
				...r,
				children: n,
			})
		);
	});
export { j as R };
