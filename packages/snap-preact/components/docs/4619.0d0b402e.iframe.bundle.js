'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4619],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(a, o, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/providers/cache.tsx'),
					r = e('./components/src/components/Templates/Search/Search.tsx');
				const c = (0, t.PA)((m) =>
					(0, s.Y)(n._, { children: (0, s.Y)(r.v, { ...m, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
				e.d(o, ['j', 0, c]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(a, o, e) {
				const s = (t) => t.replace(/([A-Z])/g, (n) => '-' + n.toLowerCase());
				e.d(o, ['b', 0, s]);
			},
			'./src/Templates/Stores/library/components/SearchHorizontal.ts'(a, o, e) {
				e.r(o), e.d(o, { SearchHorizontal: () => s.j });
				var s = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
		},
	]);
})();
