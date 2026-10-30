const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f || (m.f = ['./iframe-U9T2Y9ZS.js', './preload-helper-PPVm8Dsz.js', './iframe-BJvBuwiH.css'])
) => i.map((i) => d[i]);
import { _ as i } from './preload-helper-PPVm8Dsz.js';
import { ak as u, al as d, M as t, am as h, an as p, ao as E, ap as x, aq as _ } from './iframe-U9T2Y9ZS.js';
var D = async (e, r) =>
		new Promise((n) => {
			u(e, r, () => n(null));
		}),
	v = (e) => {
		d(e);
	},
	M = { code: E, a: p, ...h },
	w = class extends _ {
		constructor() {
			super(...arguments), (this.state = { hasError: !1 });
		}
		static getDerivedStateFromError() {
			return { hasError: !0 };
		}
		componentDidCatch(e) {
			let { showException: r } = this.props;
			r(e);
		}
		render() {
			let { hasError: e } = this.state,
				{ children: r } = this.props;
			return e ? null : t.createElement(t.Fragment, null, r);
		}
	},
	P = class {
		constructor() {
			(this.render = async (e, r, n) => {
				let a = { ...M, ...r?.components },
					s = x;
				return new Promise((c, m) => {
					i(
						async () => {
							const { MDXProvider: o } = await import('./iframe-U9T2Y9ZS.js').then((l) => l.ba);
							return { MDXProvider: o };
						},
						__vite__mapDeps([0, 1, 2]),
						import.meta.url
					)
						.then(({ MDXProvider: o }) =>
							D(
								t.createElement(
									w,
									{ showException: m, key: Math.random() },
									t.createElement(o, { components: a }, t.createElement(s, { context: e, docsParameter: r }))
								),
								n
							)
						)
						.then(() => c());
				});
			}),
				(this.unmount = (e) => {
					v(e);
				});
		}
	};
export { P as DocsRenderer, M as defaultComponents };
