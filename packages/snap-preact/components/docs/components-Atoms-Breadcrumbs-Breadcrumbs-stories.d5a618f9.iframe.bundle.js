(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8826],
		{
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx'(i, r, e) {
				'use strict';
				e.r(r), e.d(r, { SearchPage: () => d, __namedExportsOrder: () => g, categoryPage: () => m, default: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts');
				const l = `# Breadcrumbs

Renders a list of breadcrumbs. 

## Usage
\`\`\`jsx
import { Breadcrumbs } from '@athoscommerce/snap-preact/components';
\`\`\`

### data
The \`data\` prop specifies an array of breadcrumb objects, or a function that returns an array of breadcrumb objects. The function is passed the controller if available.

#### breadcrumb object 

\`label\` - required, the breadcrumb label
 
\`url\` - optional, the URL of this breadcrumb

\`\`\`js
const breadcrumbs = [
	{ url: '/', label: 'Home' },
	{ url: '/', label: 'Collections' },
	{ url: '/', label: 'Appliances' },
	{ label: 'Fridge' }
]

or 

const breadcrumbsFunction = (controller) => {
	const term = (controller as SearchController).store?.search?.query?.string;
	return [
		{ url: '/', label: 'Home' },
		{ url: '/', label: 'Search' },
		{ label: term }
	]
}

\`\`\`

\`\`\`jsx
<Breadcrumbs separator={'/'} data={breadcrumbs} />
\`\`\`

### separator
The \`separator\` prop spcifies a custom delimiter between each breadcrumb. The default separator is \`'/'\`. This can be a string or a JSX element.

\`\`\`jsx
<Breadcrumbs separator={'>'} data={breadcrumbs} />
\`\`\`


### separatorIcon
The \`separatorIcon\` prop spcifies an icon to render between each breadcrumb. 

\`\`\`jsx
<Breadcrumbs separatorIcon={'angle-right'} data={breadcrumbs} />
\`\`\`
`;
				var y = e('./components/src/components/Atoms/Icon/paths.tsx');
				const h = {
						title: 'Atoms/Breadcrumbs',
						component: a.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(t.oz, { options: { overrides: { code: n.Z } }, children: l }), (0, s.Y)(t.uY, { story: t.h1 })],
									}),
							},
						},
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							data: {
								description: 'Breadcrumb data object',
								table: { type: { summary: 'object | function' }, category: 'Templates Legal' },
								control: { type: 'object' },
							},
							separator: {
								description: 'Breadcrumb delimiter',
								table: { type: { summary: 'string, JSX, or false' }, category: 'Templates Legal', defaultValue: { summary: '>' } },
								control: { type: 'text' },
							},
							separatorIcon: {
								description: 'Separator Icon name',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [...Object.keys(y.c)],
								control: { type: 'select' },
							},
							...c.F,
						},
					},
					m = (u) => (0, s.Y)(a.B, { ...u });
				m.args = { data: [{ url: '/', label: 'Home' }, { url: '/', label: 'Collections' }, { url: '/', label: 'Appliances' }, { label: 'Fridge' }] };
				const d = (u) => (0, s.Y)(a.B, { ...u });
				(d.args = { data: [{ url: '/', label: 'Home' }, { label: 'Search' }] }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: BreadcrumbsProps) => <Breadcrumbs {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: BreadcrumbsProps) => <Breadcrumbs {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const g = ['categoryPage', 'SearchPage'];
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(i, r, e) {
				'use strict';
				e.d(r, { B: () => D });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					n = e.n(a),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/hooks/useComponent.tsx');
				const x = () =>
						(0, t.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					D = (0, c.PA)((P) => {
						const j = (0, y.u)(),
							C = (0, h.uk)(),
							M = {
								separator: '>',
								treePath: (0, m.LU)(),
								data: P.controller
									? (o) => [
											{ label: 'Search' },
											{ label: `Results ${o?.store.search?.query?.string ? `for "${o?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							p = (0, g.v6)('breadcrumbs', j, M, P),
							{
								data: f,
								separator: E,
								separatorIcon: b,
								className: A,
								internalClassName: T,
								controller: I,
								disableStyles: L,
								treePath: U,
								customComponent: v,
							} = p;
						if (v) {
							const o = (0, O.x)(C?.templates?.library.import.component.breadcrumbs || {}, v);
							if (o) return (0, s.Y)(o, { ...p });
						}
						const R = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, d.s)({ disableStyles: L }), theme: p?.theme, treePath: U },
							},
							K = (0, u.Z)(p, x);
						let _;
						return (
							typeof f == 'function' ? (_ = f(I)) : (_ = f),
							_
								? (0, s.Y)(l._, {
										children: (0, s.Y)('div', {
											...K,
											className: n()('ss__breadcrumbs', A, T),
											children: (0, s.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: _.map((o) =>
													(0, s.Y)('li', {
														className: 'ss__breadcrumbs__crumbs__crumb',
														children: o.url ? (0, s.Y)('a', { href: o.url, children: o.label }) : o.label,
													})
												).reduce((o, S) => [
													o,
													(0, s.FD)('li', {
														className: 'ss__breadcrumbs__crumbs__separator',
														children: [
															E !== !1 ? E : (0, s.Y)(s.FK, {}),
															b && (0, s.Y)(B.I, { ...R.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
														],
													}),
													S,
												]),
											}),
										}),
								  })
								: (0, s.Y)(s.FK, {})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(i, r, e) {
				'use strict';
				e.d(r, { F: () => s });
				const s = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/defined.ts'(i, r, e) {
				'use strict';
				e.d(r, { s: () => s });
				function s(t) {
					const a = {};
					return (
						Object.keys(t).map((n) => {
							t[n] !== void 0 && (a[n] = t[n]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(i, r, e) {
				'use strict';
				e.d(r, { Z: () => n });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					n = (c) => {
						const l = (0, t.li)(null);
						return (
							(0, t.vJ)(() => {
								l.current && c.className?.includes('lang-') && !c.className?.includes(a) && window?.Prism?.highlightElement(l.current);
							}, [c.className, c.children, l]),
							(0, s.Y)('code', { ...c, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(i) {
				function r(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (i.exports = r);
			},
		},
	]);
})();
