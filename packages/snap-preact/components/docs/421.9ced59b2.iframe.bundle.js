(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[421],
		{
			'../../node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs'(d, n, t) {
				'use strict';
				t.d(n, { DocsRenderer: () => e.f });
				var e = t('../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs');
			},
			'../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'(d, n, t) {
				'use strict';
				t.d(n, { f: () => i });
				var e = t('../../node_modules/preact/compat/dist/compat.module.js'),
					m = async (o, s) =>
						new Promise((c) => {
							e.default.render(o, s, () => c(null));
						}),
					a = (o) => {
						e.default.unmountComponentAtNode(o);
					},
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = { code: r.XA, a: r.zE, ...r.Sw },
					l = class extends e.Component {
						constructor() {
							super(...arguments), (this.state = { hasError: !1 });
						}
						static getDerivedStateFromError() {
							return { hasError: !0 };
						}
						componentDidCatch(o) {
							let { showException: s } = this.props;
							s(o);
						}
						render() {
							let { hasError: o } = this.state,
								{ children: s } = this.props;
							return o ? null : e.default.createElement(e.default.Fragment, null, s);
						}
					},
					i = class {
						constructor() {
							(this.render = async (o, s, c) => {
								let h = { ...u, ...s?.components },
									p = r.kQ;
								return new Promise((E, f) => {
									t.e(5231)
										.then(() => t('../../node_modules/@mdx-js/react/index.js'))
										.then(({ MDXProvider: k }) =>
											m(
												e.default.createElement(
													l,
													{ showException: f, key: Math.random() },
													e.default.createElement(k, { components: h }, e.default.createElement(p, { context: o, docsParameter: s }))
												),
												c
											)
										)
										.then(() => E());
								});
							}),
								(this.unmount = (o) => {
									a(o);
								});
						}
					};
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function n(t) {
					const e = new Error("Cannot find module '" + t + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (d.exports = n);
			},
		},
	]);
})();
