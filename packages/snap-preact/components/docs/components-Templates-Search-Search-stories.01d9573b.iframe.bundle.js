'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8907],
		{
			'./components/src/components/Templates/Search/Search.stories.tsx'(b, c, e) {
				e.r(c);
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/snapify.ts'),
					y = e('./components/src/components/Templates/Search/readme.md'),
					l = e('./components/src/components/Templates/Search/Search.tsx');
				const h = {
						title: 'Templates/Search',
						component: l.v,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: p.Z } }, children: y }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(r) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(r, {}) })],
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
									'specifies a Boolean or CSS media query for when the Sidebar component should render in mobile view, which will render in a slideout',
								table: { category: 'Templates Legal', type: { summary: 'string | boolean' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							sidebarWidth: {
								defaultValue: '270px',
								description: 'CSS width of the sidebar',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '270px' } },
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
							...u.F,
						},
					},
					i = d.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					m = d.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					o = (r, { loaded: { controller: n } }) => (0, t.Y)(l.v, { ...r, controller: n });
				o.loaders = [async () => (await i.search(), { controller: i })];
				const a = (r, { loaded: { controller: n } }) => (0, t.Y)(l.v, { ...r, controller: n });
				(a.loaders = [async () => (await m.search(), { controller: m })]),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...o.parameters?.docs?.source,
							},
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...a.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default', 'NoResults'];
				e.d(c, ['Default', 0, o, 'NoResults', 0, a, '__namedExportsOrder', 0, g, 'default', 0, h]);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Search-Search-stories.01d9573b.iframe.bundle.js.map
