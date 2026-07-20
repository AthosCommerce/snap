(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7241],
		{
			'../../node_modules/@mdx-js/react/lib/index.js'(h, o, n) {
				'use strict';
				n.d(o, { RP: () => s, xA: () => u });
				var r,
					l = n('../../node_modules/preact/compat/dist/compat.module.js');
				const m = l.default.createContext({});
				function p(e) {
					return c;
					function c(a) {
						const i = s(a.components);
						return r.createElement(e, { ...a, allComponents: i });
					}
				}
				function s(e) {
					const c = l.default.useContext(m);
					return l.default.useMemo(() => (typeof e == 'function' ? e(c) : { ...c, ...e }), [c, e]);
				}
				const t = {};
				function u({ components: e, children: c, disableParentContext: a }) {
					let i;
					return a ? (i = typeof e == 'function' ? e({}) : e || t) : (i = s(e)), l.default.createElement(m.Provider, { value: i }, c);
				}
			},
			'./components/src/documentation/Theme/Theme.stories.mdx'(h, o, n) {
				'use strict';
				n.r(o), n.d(o, { __namedExportsOrder: () => f, __page: () => c, default: () => i });
				var r = n('../../node_modules/preact/compat/dist/compat.module.js'),
					l = n('../../node_modules/@mdx-js/react/lib/index.js'),
					m = n('../../node_modules/@storybook/blocks/dist/index.mjs');
				const p = `Snap components allows for theming at both the global and component level.

### Theme object
A theme object contains a \`components\` object with one or more objects where the key is the name of the component (lowercase), and the value is an object containing prop keys and values.

For example, this \`globalTheme\` theme object will apply the prop \`color={'blue'}\` for all \`<Button />\` components and \`hideCount={false}\` for all \`<facetListOptions />\` components.

\`\`\`js
const globalTheme = {
	components: {
		button: {
			color: 'blue',
		},
		facetListOptions: {
			hideCount: false,
		},
	},
};
\`\`\`

If a component contains multiple sub-components (ie. Molecule or Organisms), it is also possible to provide sub-component props as follows:

\`\`\`js
const globalTheme = {
	components: {
		facetListOptions: {
			hideCount: false,
			theme: {
				components: {
					checkbox: {
						native: true
					}
				}
			}
		}
	}
};
\`\`\`

The theme object also contains colors used throughout components:

\`\`\`js
const globalTheme = {
	variables: {
		color: {
			primary: '#3A23AD',
			secondary: '#00cee1',
			accent: '#4c3ce2',
			active: {
				foreground: '#333333',
				background: '#f8f6fd',
				accent: '#3A23AD',
			},
			hover: {
				foreground: '#333333',
				background: '#f8f6fd',
				accent: '#3A23AD',
			},
		},
	},
	components: {}
}
\`\`\`

### ThemeProvider
Using a ThemeProvider applies a global theme to all its children components

\`\`\`js
import { ThemeProvider, Button } from '@athoscommerce/snap-preact/components'
\`\`\`

\`\`\`tsx
<ThemeProvider theme={globalTheme}>
	<Button content={'click me!'} />
</ThemeProvider>
\`\`\`

### Component Theme
The \`theme\` prop is available on all components and allows for theming of a single component. 

The component \`theme\` is merged with the global theme, therefore component theme props will overwrite any common props on the global theme object.

In the following example, the \`<Button />\` component will contain \`color={'green'}\` from \`propTheme\` and \`native={true}\` from \`globalTheme\`

\`\`\`js
const globalTheme = {
	components: {
		button: {
			color: 'blue',
			native: true
		},
	},
};
const propTheme = {
	components: {
		button: {
			color: 'green',
		},
	},
};
\`\`\`

\`\`\`tsx

<ThemeProvider theme={globalTheme}>
    <Button content={'click me!'} theme={propTheme} />
</ThemeProvider>
\`\`\`


### Component Style
The \`style\` prop is available on all components and allows for styling of components at the global (via the \`theme\` prop) or the component level (via the \`style\` prop)

Styles are applied to the root element of the component and uses CSS object syntax.

Standard CSS:
\`\`\`css
{
	background-color: red;
	color: #cccccc;
}
\`\`\`

In CSS object syntax, properties are camel case and \`'-'\` are removed:
\`\`\`js
{ 
	backgroundColor: '#ffff00',
	color: '#cccccc',
}
\`\`\`

<!-- TODO: once classnames are standardized, document how to target sub elements -->

Global level styling via \`theme\` prop:

\`\`\`js
const globalTheme = {
	components: {
		button: {
			style: {
				backgroundColor: '#ffff00',
				color: '#cccccc'
			}
		},
	},
};
\`\`\`

\`\`\`tsx
<ThemeProvider theme={globalTheme}>
    <Button content={'click me!'} />
</ThemeProvider>
\`\`\`

Component level styling via \`style\` prop:

\`\`\`js
const buttonStyles = {
	backgroundColor: '#ffff00',
	color: '#cccccc'
};
\`\`\`

\`\`\`tsx
<Button content={'click me!'} style={buttonStyles} />
\`\`\`

### Disable Component Styles
The \`disableStyles\` prop is available on all components and allows for disabling all styles of the component, including any styles being applied at the global or component level. 

This can be done at the global level:

\`\`\`js
const globalTheme = {
	components: {
		button: {
			disableStyles: true,
	},
};
\`\`\`

\`\`\`tsx
<ThemeProvider theme={globalTheme}>
    <Button content={'click me!'} />
</ThemeProvider>
\`\`\`

Or at the component level:

\`\`\`tsx
<Button content={'click me!'} disableStyles={true} />
\`\`\`


### Component Class Names
The \`className\` prop is available on all components and allows for adding a class to the root level class list of a component. 

By default, all components will contain a class name of \`ss-\${componentname}\`, for example \`'ss-button'\`

This can be done at the global level:

\`\`\`js
const globalTheme = {
	components: {
		button: {
			className: 'my-btn-class',
	},
};
\`\`\`

\`\`\`tsx
<ThemeProvider theme={globalTheme}>
    <Button content={'click me!'} />
</ThemeProvider>
\`\`\`

Or at the component level:

\`\`\`tsx
<Button content={'click me!'} className={'my-btn-class'} />
\`\`\`
`;
				var s = n('./components/src/utilities/storybook.tsx'),
					t = n('../../node_modules/preact/compat/jsx-runtime.mjs');
				function u(d) {
					const b = Object.assign({ hr: 'hr' }, (0, l.RP)(), d.components);
					return (0, t.FD)(t.FK, {
						children: [
							(0, t.Y)(m.W8, { title: 'Documentation/Theme' }),
							`
`,
							(0, t.Y)('style', {
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
							(0, t.Y)('div', { class: 'header', children: (0, t.Y)('span', { class: 'subtitle', children: 'SNAP PREACT COMPONENETS' }) }),
							`
`,
							(0, t.Y)(b.hr, {}),
							`
`,
							(0, t.Y)(m.oz, { options: { overrides: { code: s.Z } }, children: p }),
						],
					});
				}
				function e(d = {}) {
					const { wrapper: b } = Object.assign({}, (0, l.RP)(), d.components);
					return b ? (0, t.Y)(b, { ...d, children: (0, t.Y)(u, { ...d }) }) : u(d);
				}
				const c = () => {
					throw new Error('Docs-only story');
				};
				c.parameters = { docsOnly: !0 };
				const a = { title: 'Documentation/Theme', tags: ['stories-mdx'], includeStories: ['__page'] };
				(a.parameters = a.parameters || {}), (a.parameters.docs = { ...(a.parameters.docs || {}), page: e });
				const i = a,
					f = ['__page'];
			},
			'./components/src/utilities/storybook.tsx'(h, o, n) {
				'use strict';
				var r = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					p = (s) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && s.className?.includes('lang-') && !s.className?.includes(m) && window?.Prism?.highlightElement(t.current);
							}, [s.className, s.children, t]),
							(0, r.Y)('code', { ...s, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				n.d(o, ['Z', 0, p]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function o(n) {
					const r = new Error("Cannot find module '" + n + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (h.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=documentation-Theme-Theme-stories-mdx.c82cad16.iframe.bundle.js.map
