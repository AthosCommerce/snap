(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[421],
		{
			'../../node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs'(d, n, o) {
				'use strict';
				o.d(n, { DocsRenderer: () => e.f });
				var e = o('../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs');
			},
			'../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'(d, n, o) {
				'use strict';
				o.d(n, { f: () => i });
				var e = o('../../node_modules/preact/compat/dist/compat.module.js'),
					m = async (t, s) =>
						new Promise((c) => {
							e.default.render(t, s, () => c(null));
						}),
					a = (t) => {
						e.default.unmountComponentAtNode(t);
					},
					r = o('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = { code: r.XA, a: r.zE, ...r.Sw },
					l = class extends e.Component {
						constructor() {
							super(...arguments), (this.state = { hasError: !1 });
						}
						static getDerivedStateFromError() {
							return { hasError: !0 };
						}
						componentDidCatch(t) {
							let { showException: s } = this.props;
							s(t);
						}
						render() {
							let { hasError: t } = this.state,
								{ children: s } = this.props;
							return t ? null : e.default.createElement(e.default.Fragment, null, s);
						}
					},
					i = class {
						constructor() {
							(this.render = async (t, s, c) => {
								let h = { ...u, ...s?.components },
									p = r.kQ;
								return new Promise((E, f) => {
									o.e(5231)
										.then(o.bind(o, '../../node_modules/@mdx-js/react/index.js'))
										.then(({ MDXProvider: k }) =>
											m(
												e.default.createElement(
													l,
													{ showException: f, key: Math.random() },
													e.default.createElement(k, { components: h }, e.default.createElement(p, { context: t, docsParameter: s }))
												),
												c
											)
										)
										.then(() => E());
								});
							}),
								(this.unmount = (t) => {
									a(t);
								});
						}
					};
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function n(o) {
					const e = new Error("Cannot find module '" + o + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (d.exports = n);
			},
		},
	]);
})();
