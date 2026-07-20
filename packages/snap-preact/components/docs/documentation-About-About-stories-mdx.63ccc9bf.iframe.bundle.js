(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3433],
		{
			'../../node_modules/@mdx-js/react/lib/index.js'(u, n, t) {
				'use strict';
				t.d(n, { RP: () => s, xA: () => p });
				var i,
					a = t('../../node_modules/preact/compat/dist/compat.module.js');
				const l = a.default.createContext({});
				function h(o) {
					return r;
					function r(c) {
						const m = s(c.components);
						return i.createElement(o, { ...c, allComponents: m });
					}
				}
				function s(o) {
					const r = a.default.useContext(l);
					return a.default.useMemo(() => (typeof o == 'function' ? o(r) : { ...r, ...o }), [r, o]);
				}
				const e = {};
				function p({ components: o, children: r, disableParentContext: c }) {
					let m;
					return c ? (m = typeof o == 'function' ? o({}) : o || e) : (m = s(o)), a.default.createElement(l.Provider, { value: m }, r);
				}
			},
			'./components/src/documentation/About/About.stories.mdx'(u, n, t) {
				'use strict';
				t.r(n), t.d(n, { __namedExportsOrder: () => f, __page: () => r, default: () => m });
				var i = t('../../node_modules/preact/compat/dist/compat.module.js'),
					a = t('../../node_modules/@mdx-js/react/lib/index.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs');
				const h = `Welcome to the Snap React Component Library! 
This collection of ecommerce components allows you to quickly build and theme a layout for use with Athos' Snap SDK.


### Installation

\`\`\`sh
npm install --save @athoscommerce/snap-preact
\`\`\`

## Atomic Design Methodology
Snap components follow the Atomic design methodology. Components are organized into three levels:

### Atoms
Atom level components are the basic building blocks of an ecommerce layout. This includes components such as Badge, Button, and Icon.

Like atoms in nature they\u2019re fairly abstract and often not terribly useful on their own. However, they\u2019re good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.

### Molecules
Molecule level components utilize one or more atom components to start building the contents of a layout. This includes components such as Pagination, Select, and Slider.

Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

### Organisms
Organisms level components utilize one or more molecule components to start building complex sections of a layout. This includes components such as Autocomplete, Facets, and Results.

Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.`;
				var s = t('./components/src/utilities/storybook.tsx'),
					e = t('../../node_modules/preact/compat/jsx-runtime.mjs');
				function p(d) {
					const g = Object.assign({ hr: 'hr' }, (0, a.RP)(), d.components);
					return (0, e.FD)(e.FK, {
						children: [
							(0, e.Y)(l.W8, { title: 'Documentation/About' }),
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
		color: #00AEEF;
	}

	.header img {
		width: 300px;
		margin-right: 20px;
	}
	`,
							}),
							`
`,
							(0, e.Y)('div', { class: 'header', children: (0, e.Y)('span', { class: 'subtitle', children: 'SNAP PREACT COMPONENTS' }) }),
							`
`,
							(0, e.Y)(g.hr, {}),
							`
`,
							(0, e.Y)(l.oz, { options: { overrides: { code: s.Z } }, children: h }),
						],
					});
				}
				function o(d = {}) {
					const { wrapper: g } = Object.assign({}, (0, a.RP)(), d.components);
					return g ? (0, e.Y)(g, { ...d, children: (0, e.Y)(p, { ...d }) }) : p(d);
				}
				const r = () => {
					throw new Error('Docs-only story');
				};
				r.parameters = { docsOnly: !0 };
				const c = { title: 'Documentation/About', tags: ['stories-mdx'], includeStories: ['__page'] };
				(c.parameters = c.parameters || {}), (c.parameters.docs = { ...(c.parameters.docs || {}), page: o });
				const m = c,
					f = ['__page'];
			},
			'./components/src/utilities/storybook.tsx'(u, n, t) {
				'use strict';
				var i = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					h = (s) => {
						const e = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								e.current && s.className?.includes('lang-') && !s.className?.includes(l) && window?.Prism?.highlightElement(e.current);
							}, [s.className, s.children, e]),
							(0, i.Y)('code', { ...s, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(n, ['Z', 0, h]);
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function n(t) {
					const i = new Error("Cannot find module '" + t + "'");
					throw ((i.code = 'MODULE_NOT_FOUND'), i);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (u.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=documentation-About-About-stories-mdx.63ccc9bf.iframe.bundle.js.map
