(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2165],
		{
			'../../node_modules/@mdx-js/react/lib/index.js'(u, n, o) {
				'use strict';
				o.d(n, { RP: () => s, xA: () => h });
				var i,
					r = o('../../node_modules/preact/compat/dist/compat.module.js');
				const l = r.default.createContext({});
				function p(t) {
					return a;
					function a(c) {
						const m = s(c.components);
						return i.createElement(t, { ...c, allComponents: m });
					}
				}
				function s(t) {
					const a = r.default.useContext(l);
					return r.default.useMemo(() => (typeof t == 'function' ? t(a) : { ...a, ...t }), [a, t]);
				}
				const e = {};
				function h({ components: t, children: a, disableParentContext: c }) {
					let m;
					return c ? (m = typeof t == 'function' ? t({}) : t || e) : (m = s(t)), r.default.createElement(l.Provider, { value: m }, a);
				}
			},
			'./components/src/documentation/Usage/Usage.stories.mdx'(u, n, o) {
				'use strict';
				o.r(n), o.d(n, { __namedExportsOrder: () => g, __page: () => a, default: () => m });
				var i = o('../../node_modules/preact/compat/dist/compat.module.js'),
					r = o('../../node_modules/@mdx-js/react/lib/index.js'),
					l = o('../../node_modules/@storybook/blocks/dist/index.mjs');
				const p =
					"Snap Preact components are designed to be used with the Snap MobX store package `@athoscommerce/snap-store-mobx` .\n\nSnap stores are a dependency for Snap controllers `@athoscommerce/snap-controller`. Snap controllers such as `SearchController` contain a reference to the `SearchStore` that was provided in the `ControllerServices` object named `searchControllerServices` below.\n\nMany component props are tied to the design of the store for ease of use:\n\nIn this example, the `store.pagination` property is provided to the `pagination` prop of the `<Pagination />` component.\n\n\n```js\nimport { SearchController } from '@athoscommerce/snap-controller';\n\nconst searchController = new SearchController(searchConfig, searchControllerServices);\n\nconsole.log(searchController.store)\n```\n\n```js\nimport { Pagination } from '@athoscommerce/snap-preact/components';\n```\n\n```tsx\n<Pagination pagination={searchController.store.pagination} />\n```\n\n<br/>\n\n**Usage examples for each component can be seen in each component's 'Docs'.**\n";
				var s = o('./components/src/utilities/storybook.tsx'),
					e = o('../../node_modules/preact/compat/jsx-runtime.mjs');
				function h(d) {
					const f = Object.assign({ hr: 'hr' }, (0, r.RP)(), d.components);
					return (0, e.FD)(e.FK, {
						children: [
							(0, e.Y)(l.W8, { title: 'Documentation/Usage' }),
							`
`,
							(0, e.Y)('style', {
								children: `
	  .header {
	  	display: flex;
	  	align-items: center;
	  }

	  .header .subtitle {
	  	text-transform: uppercase;
	  	color: #00cee1;
	  }

	  .header img {
	  	width: 300px;
	  	margin-right: 20px;
	  }
  `,
							}),
							`
`,
							(0, e.Y)('div', { class: 'header', children: (0, e.Y)('span', { class: 'subtitle', children: 'SNAP PREACT COMPONENETS' }) }),
							`
`,
							(0, e.Y)(f.hr, {}),
							`
`,
							(0, e.Y)(l.oz, { options: { overrides: { code: s.Z } }, children: p }),
						],
					});
				}
				function t(d = {}) {
					const { wrapper: f } = Object.assign({}, (0, r.RP)(), d.components);
					return f ? (0, e.Y)(f, { ...d, children: (0, e.Y)(h, { ...d }) }) : h(d);
				}
				const a = () => {
					throw new Error('Docs-only story');
				};
				a.parameters = { docsOnly: !0 };
				const c = { title: 'Documentation/Usage', tags: ['stories-mdx'], includeStories: ['__page'] };
				(c.parameters = c.parameters || {}), (c.parameters.docs = { ...(c.parameters.docs || {}), page: t });
				const m = c,
					g = ['__page'];
			},
			'./components/src/utilities/storybook.tsx'(u, n, o) {
				'use strict';
				var i = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = o('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					p = (s) => {
						const e = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								e.current && s.className?.includes('lang-') && !s.className?.includes(l) && window?.Prism?.highlightElement(e.current);
							}, [s.className, s.children, e]),
							(0, i.Y)('code', { ...s, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
				o.d(n, ['Z', 0, p]);
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function n(o) {
					const i = new Error("Cannot find module '" + o + "'");
					throw ((i.code = 'MODULE_NOT_FOUND'), i);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (u.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=documentation-Usage-Usage-stories-mdx.efe335e3.iframe.bundle.js.map
