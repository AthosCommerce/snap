import { ac as r, ad as e, ae as a, af as s, ag as c } from './iframe-U9T2Y9ZS.js';
import './preload-helper-PPVm8Dsz.js';
const i =
	"Snap Preact components are designed to be used with the Snap MobX store package `@athoscommerce/snap-store-mobx` .\n\nSnap stores are a dependency for Snap controllers `@athoscommerce/snap-controller`. Snap controllers such as `SearchController` contain a reference to the `SearchStore` that was provided in the `ControllerServices` object named `searchControllerServices` below.\n\nMany component props are tied to the design of the store for ease of use:\n\nIn this example, the `store.pagination` property is provided to the `pagination` prop of the `<Pagination />` component.\n\n\n```js\nimport { SearchController } from '@athoscommerce/snap-controller';\n\nconst searchController = new SearchController(searchConfig, searchControllerServices);\n\nconsole.log(searchController.store)\n```\n\n```js\nimport { Pagination } from '@athoscommerce/snap-preact/components';\n```\n\n```tsx\n<Pagination pagination={searchController.store.pagination} />\n```\n\n<br/>\n\n**Usage examples for each component can be seen in each component's 'Docs'.**\n";
function t(n) {
	const o = { hr: 'hr', ...r(), ...n.components };
	return e(c, {
		children: [
			e(a, { title: 'Documentation/Usage' }),
			`
`,
			e('style', {
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
			e('div', { className: 'header', children: e('span', { className: 'subtitle', children: 'SNAP PREACT COMPONENETS' }) }),
			`
`,
			e(o.hr, {}),
			`
`,
			e(s, { children: i }),
		],
	});
}
function p(n = {}) {
	const { wrapper: o } = { ...r(), ...n.components };
	return o ? e(o, { ...n, children: e(t, { ...n }) }) : t(n);
}
export { p as default };
