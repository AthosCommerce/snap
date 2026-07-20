'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8595],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx'(_, l, e) {
				e.r(l);
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/snapify.ts'),
					m = e('./components/src/components/Templates/Search/readme.md'),
					d = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
				const h = {
						title: 'Templates/SearchHorizontal',
						component: d.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(a.oz, { options: { overrides: { code: i.Z } }, children: m }), (0, o.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(s) => (0, o.Y)('div', { style: { maxWidth: '1200px' }, children: (0, o.Y)(s, {}) })],
						argTypes: {
							controller: {
								description: 'Search Controller Reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							hideTopToolbar: {
								defaultValue: !1,
								description: 'prevents the top Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideMiddleToolbar: {
								defaultValue: !1,
								description: 'prevents the middle Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideBottomToolbar: {
								defaultValue: !1,
								description: 'prevents the bottom Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							toggleSidebarButtonText: {
								description: 'Text to render in the toggle Sidebar button.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							toggleSidebarStartClosed: {
								defaultValue: !1,
								description: 'determines if the sidebar toggle should start closed',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideToggleSidebarButton: {
								defaultValue: !1,
								description: 'hide the toggle Sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							mobileDisplayAt: {
								defaultValue: '',
								description:
									'specifies a CSS media query for when the Sidebar component should render in mobile view, which will render in a slideout',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							hideSidebar: {
								defaultValue: !1,
								description: 'prevents the sidebar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							layoutOptions: {
								description: 'Options for layout selection',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'ListOption[]' } },
								control: { type: 'object' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							...c.F,
						},
					},
					p = n.p.search({ id: 'search', globals: { siteId: 'atkzs2' } }),
					y = n.p.search({ id: 'noresults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					t = (s, { loaded: { controller: u } }) => (0, o.Y)(d.j, { ...s, controller: u });
				t.loaders = [async () => (await p.search(), { controller: p })];
				const r = (s, { loaded: { controller: u } }) => (0, o.Y)(d.j, { ...s, controller: u });
				(r.loaders = [async () => (await y.search(), { controller: y })]),
					(t.parameters = {
						...t.parameters,
						docs: {
							...t.parameters?.docs,
							source: {
								originalSource: `(args: SearchHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHorizontal {...args} controller={controller} />;
}`,
								...t.parameters?.docs?.source,
							},
						},
					}),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: {
								originalSource: `(args: SearchHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHorizontal {...args} controller={controller} />;
}`,
								...r.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default', 'NoResults'];
				e.d(l, ['Default', 0, t, 'NoResults', 0, r, '__namedExportsOrder', 0, g, 'default', 0, h]);
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(_, l, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					i = e('./components/src/components/Templates/Search/Search.tsx');
				const n = (0, a.PA)((m) =>
					(0, o.Y)(c._, { children: (0, o.Y)(i.v, { ...m, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
				e.d(l, ['j', 0, n]);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-SearchHorizontal-SearchHorizontal-stories.e8376753.iframe.bundle.js.map
