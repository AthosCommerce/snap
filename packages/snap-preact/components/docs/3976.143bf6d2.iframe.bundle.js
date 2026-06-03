'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3976],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(n, e, s) {
				s.d(e, { j: () => a });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					r = s('./components/src/providers/cache.tsx'),
					c = s('./components/src/components/Templates/Search/Search.tsx');
				const a = (0, o.PA)((m) =>
					(0, t.Y)(r._, { children: (0, t.Y)(c.v, { ...m, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(n, e, s) {
				s.d(e, { o: () => P });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = s('../../node_modules/mobx-react-lite/es/index.js'),
					c = s('../../node_modules/classnames/index.js'),
					a = s.n(c),
					m = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = s('./components/src/utilities/mergeProps.ts'),
					p = s('./components/src/utilities/createImpressionObserver.ts');
				const T = { ResultTracker: () => (0, o.AH)({}) },
					P = (0, r.PA)((O) => {
						const D = (0, m.u)(),
							M = (0, E.v6)('resultTracker', D, {}, O),
							h = { impression: !0, click: !0 },
							{ children: C, result: d, track: v, controller: l, className: R, internalClassName: x, disableStyles: A, style: _ } = M,
							u = { ...h, ...v },
							{ ref: S, inViewport: j } = (0, p.Q)();
						j && u.impression && l?.track.product.impression(d);
						const i = {};
						return (
							A ? _ && (i.css = [_]) : (i.css = [T.ResultTracker(), _]),
							(0, t.Y)('div', {
								className: a()('ss__result-tracker', `ss__${l?.type}-result-tracker`, R, x),
								onClick: (I) => {
									u.click && l?.track.product.click(I, d);
								},
								ref: S,
								...i,
								children: C,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(n, e, s) {
				s.d(e, { b: () => t });
				const t = (o) => o.replace(/([A-Z])/g, (r) => '-' + r.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchHorizontal.ts'(n, e, s) {
				s.r(e), s.d(e, { SearchHorizontal: () => t.j });
				var t = s('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
		},
	]);
})();
