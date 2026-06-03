'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4980],
		{
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(m, e, s) {
				s.d(e, { o: () => P });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = s('../../node_modules/mobx-react-lite/es/index.js'),
					i = s('../../node_modules/classnames/index.js'),
					u = s.n(i),
					d = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = s('./components/src/utilities/mergeProps.ts'),
					p = s('./components/src/utilities/createImpressionObserver.ts');
				const T = { ResultTracker: () => (0, o.AH)({}) },
					P = (0, r.PA)((O) => {
						const D = (0, d.u)(),
							M = (0, E.v6)('resultTracker', D, {}, O),
							C = { impression: !0, click: !0 },
							{ children: k, result: l, track: v, controller: c, className: R, internalClassName: h, disableStyles: A, style: n } = M,
							_ = { ...C, ...v },
							{ ref: I, inViewport: L } = (0, p.Q)();
						L && _.impression && c?.track.product.impression(l);
						const a = {};
						return (
							A ? n && (a.css = [n]) : (a.css = [T.ResultTracker(), n]),
							(0, t.Y)('div', {
								className: u()('ss__result-tracker', `ss__${c?.type}-result-tracker`, R, h),
								onClick: (f) => {
									_.click && c?.track.product.click(f, l);
								},
								ref: I,
								...a,
								children: k,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(m, e, s) {
				s.d(e, { b: () => t });
				const t = (o) => o.replace(/([A-Z])/g, (r) => '-' + r.toLowerCase());
			},
			'./src/Templates/Stores/library/components/Search.ts'(m, e, s) {
				s.r(e), s.d(e, { Search: () => t.v });
				var t = s('./components/src/components/Templates/Search/Search.tsx');
			},
		},
	]);
})();
