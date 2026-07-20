(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8826],
		{
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.stories.tsx'(i, t, e) {
				'use strict';
				e.r(t), e.d(t, { SearchPage: () => d, __namedExportsOrder: () => g, categoryPage: () => m, default: () => y });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts');
				const l = `# Breadcrumbs

Renders a list of breadcrumbs. 

## Usage
\`\`\`tsx
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

\`\`\`tsx
<Breadcrumbs separator={'/'} data={breadcrumbs} />
\`\`\`

### separator
The \`separator\` prop spcifies a custom delimiter between each breadcrumb. The default separator is \`'/'\`. This can be a string or a JSX element.

\`\`\`tsx
<Breadcrumbs separator={'>'} data={breadcrumbs} />
\`\`\`


### separatorIcon
The \`separatorIcon\` prop spcifies an icon to render between each breadcrumb. 

\`\`\`tsx
<Breadcrumbs separatorIcon={'angle-right'} data={breadcrumbs} />
\`\`\`
`;
				var h = e('./components/src/components/Atoms/Icon/paths.tsx');
				const y = {
						title: 'Atoms/Breadcrumbs',
						component: o.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(r.oz, { options: { overrides: { code: a.Z } }, children: l }), (0, s.Y)(r.uY, { story: r.h1 })],
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
								options: [...Object.keys(h.c)],
								control: { type: 'select' },
							},
							...n.F,
						},
					},
					m = (u) => (0, s.Y)(o.B, { ...u });
				m.args = { data: [{ url: '/', label: 'Home' }, { url: '/', label: 'Collections' }, { url: '/', label: 'Appliances' }, { label: 'Fridge' }] };
				const d = (u) => (0, s.Y)(o.B, { ...u });
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
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(i, t, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					a = e.n(o),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = () =>
						(0, r.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					v = (0, n.PA)((P) => {
						const x = (0, h.u)(),
							D = {
								separator: '>',
								treePath: (0, y.LU)(),
								data: P.controller
									? (c) => [
											{ label: 'Search' },
											{ label: `Results ${c?.store.search?.query?.string ? `for "${c?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							p = (0, d.v6)('breadcrumbs', x, D, P),
							{ data: f, separator: E, separatorIcon: b, className: C, internalClassName: j, controller: M, disableStyles: A, treePath: T } = p,
							{ overrideElement: I, shouldRenderDefault: L } = (0, B._)('breadcrumbs', p);
						if (!L) return I;
						const R = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, m.s)({ disableStyles: A }), theme: p?.theme, treePath: T },
							},
							U = (0, g.Z)(p, O);
						let _;
						return (
							typeof f == 'function' ? (_ = f(M)) : (_ = f),
							_
								? (0, s.Y)(l._, {
										children: (0, s.Y)('div', {
											...U,
											className: a()('ss__breadcrumbs', C, j),
											children: (0, s.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: _.map((c) =>
													(0, s.Y)('li', {
														className: 'ss__breadcrumbs__crumbs__crumb',
														children: c.url ? (0, s.Y)('a', { href: c.url, children: c.label }) : c.label,
													})
												).reduce((c, S) => [
													c,
													(0, s.FD)('li', {
														className: 'ss__breadcrumbs__crumbs__separator',
														children: [
															E !== !1 ? E : (0, s.Y)(s.FK, {}),
															b && (0, s.Y)(u.I, { ...R.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
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
				e.d(t, ['B', 0, v]);
			},
			'./components/src/utilities/componentArgs.ts'(i, t, e) {
				'use strict';
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
				e.d(t, ['F', 0, s]);
			},
			'./components/src/utilities/defined.ts'(i, t, e) {
				'use strict';
				e.d(t, { s: () => s });
				function s(r) {
					const o = {};
					return (
						Object.keys(r).map((a) => {
							r[a] !== void 0 && (o[a] = r[a]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(i, t, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					a = (n) => {
						const l = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								l.current && n.className?.includes('lang-') && !n.className?.includes(o) && window?.Prism?.highlightElement(l.current);
							}, [n.className, n.children, l]),
							(0, s.Y)('code', { ...n, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(t, ['Z', 0, a]);
			},
			'../../node_modules/memoizerific sync recursive'(i) {
				function t(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(t.keys = () => []), (t.resolve = t), (t.id = '../../node_modules/memoizerific sync recursive'), (i.exports = t);
			},
		},
	]);
})();
