'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5127],
		{
			'./components/src/utilities/componentNameToClassName.ts'(o, s, e) {
				const c = (a) => a.replace(/([A-Z])/g, (t) => '-' + t.toLowerCase());
				e.d(s, ['b', 0, c]);
			},
			'./src/Templates/Stores/library/components/Search.ts'(o, s, e) {
				e.r(s), e.d(s, { Search: () => c.v });
				var c = e('./components/src/components/Templates/Search/Search.tsx');
			},
		},
	]);
})();
