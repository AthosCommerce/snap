'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5497],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.stories.tsx'(_, l, e) {
				e.r(l), e.d(l, { Default: () => t, NoResults: () => a, __namedExportsOrder: () => b, default: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/snapify.ts'),
					m = e('./components/src/components/Templates/Search/readme.md'),
					d = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
				const h = {
						title: 'Templates/SearchCollapsible',
						component: d.x,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(r.oz, { options: { overrides: { code: i.Z } }, children: m }), (0, o.Y)(r.uY, { story: r.h1 })],
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
					u = n.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					y = n.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					t = (s, { loaded: { controller: p } }) => (0, o.Y)(d.x, { ...s, controller: p });
				t.loaders = [async () => (await u.search(), { controller: u })];
				const a = (s, { loaded: { controller: p } }) => (0, o.Y)(d.x, { ...s, controller: p });
				(a.loaders = [async () => (await y.search(), { controller: y })]),
					(t.parameters = {
						...t.parameters,
						docs: {
							...t.parameters?.docs,
							source: {
								originalSource: `(args: SearchCollapsibleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchCollapsible {...args} controller={controller} />;
}`,
								...t.parameters?.docs?.source,
							},
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: {
								originalSource: `(args: SearchCollapsibleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchCollapsible {...args} controller={controller} />;
}`,
								...a.parameters?.docs?.source,
							},
						},
					});
				const b = ['Default', 'NoResults'];
			},
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(_, l, e) {
				e.d(l, { x: () => n });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					i = e('./components/src/components/Templates/Search/Search.tsx');
				const n = (0, r.PA)((m) => (0, o.Y)(c._, { children: (0, o.Y)(i.v, { ...m, alias: 'searchCollapsible' }) }));
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-SearchCollapsible-SearchCollapsible-stories.866edccb.iframe.bundle.js.map
