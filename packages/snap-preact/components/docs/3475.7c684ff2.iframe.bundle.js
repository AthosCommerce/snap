'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3475],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(c, s, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/components/Templates/Search/Search.tsx');
				const n = (0, a.PA)((r) => (0, o.Y)(t._, { children: (0, o.Y)(l.v, { ...r, alias: 'searchCollapsible' }) }));
				e.d(s, ['x', 0, n]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(c, s, e) {
				const o = (a) => a.replace(/([A-Z])/g, (t) => '-' + t.toLowerCase());
				e.d(s, ['b', 0, o]);
			},
			'./src/Templates/Stores/library/components/SearchCollapsible.ts'(c, s, e) {
				e.r(s), e.d(s, { SearchCollapsible: () => o.x });
				var o = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
			},
		},
	]);
})();
