'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3650],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(c, e, s) {
				s.d(e, { x: () => a });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					r = s('./components/src/providers/cache.tsx'),
					n = s('./components/src/components/Templates/Search/Search.tsx');
				const a = (0, o.PA)((l) => (0, t.Y)(r._, { children: (0, t.Y)(n.v, { ...l, alias: 'searchCollapsible' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(c, e, s) {
				s.d(e, { o: () => T });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = s('../../node_modules/mobx-react-lite/es/index.js'),
					n = s('../../node_modules/classnames/index.js'),
					a = s.n(n),
					l = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = s('./components/src/utilities/mergeProps.ts'),
					E = s('./components/src/utilities/createImpressionObserver.ts');
				const C = { ResultTracker: () => (0, o.AH)({}) },
					T = (0, r.PA)((P) => {
						const O = (0, l.u)(),
							D = (0, u.v6)('resultTracker', O, {}, P),
							M = { impression: !0, click: !0 },
							{ children: h, result: d, track: v, controller: m, className: x, internalClassName: R, disableStyles: A, style: _ } = D,
							p = { ...M, ...v },
							{ ref: S, inViewport: I } = (0, E.Q)();
						I && p.impression && m?.track.product.impression(d);
						const i = {};
						return (
							A ? _ && (i.css = [_]) : (i.css = [C.ResultTracker(), _]),
							(0, t.Y)('div', {
								className: a()('ss__result-tracker', `ss__${m?.type}-result-tracker`, x, R),
								onClick: (L) => {
									p.click && m?.track.product.click(L, d);
								},
								ref: S,
								...i,
								children: h,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(c, e, s) {
				s.d(e, { b: () => t });
				const t = (o) => o.replace(/([A-Z])/g, (r) => '-' + r.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchCollapsible.ts'(c, e, s) {
				s.r(e), s.d(e, { SearchCollapsible: () => t.x });
				var t = s('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
			},
		},
	]);
})();
