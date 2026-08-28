(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3715],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(w, c, t) {
				'use strict';
				const o = (a) => a.replace(/_/g, '-').toLowerCase();
				t.d(c, ['P', 0, o]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(w, c, t) {
				'use strict';
				t.d(c, { G: () => a });
				var o = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(r, n) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...n };
					return (0, o.Z)(r, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(w, c, t) {
				'use strict';
				t.d(c, { Z: () => o });
				function o(r, n) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...n };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const l = a(r, e.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(e.decimalPlaces, '0'));
					let s = l.join(e.decimalSeparator);
					return e.symbolAfter ? (s = s + e.symbol) : (s = e.symbol + s), s;
				}
				function a(r, n) {
					const e = r.toString(),
						l = e.indexOf('.'),
						s = l == -1 ? e.length : 1 + l + (n || -1);
					return e.substr(0, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(w, c, t) {
				'use strict';
				t.d(c, { p: () => o });
				function o(a) {
					if (typeof a != 'string') return a;
					let r = a.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(w, c, t) {
				'use strict';
				t.d(c, { x: () => o });
				function o(a, r, n) {
					if (typeof a != 'string' || a.length <= r) return a;
					const e = a.lastIndexOf(' ', r),
						l = e != -1 ? e : r - 1;
					return a.substr(0, l) + (n || '');
				}
			},
			'./components/src/components/Organisms/Results/Results.stories.tsx'(w, c, t) {
				'use strict';
				t.r(c), t.d(c, { Grid: () => p, List: () => m, __namedExportsOrder: () => d, default: () => b });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = t('./components/src/components/Organisms/Results/Results.tsx'),
					n = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts'),
					l = t('./components/src/utilities/snapify.ts'),
					s = t('./components/src/types.ts');
				const i = `# Results

Renders a page of results utilizing \`<Result />\` components.

## Sub-components
- Result

- InlineBanner

- ResultTracker

## Usage
\`\`\`tsx
import { Results } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to the search controller.

\`\`\`tsx
<Results controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`tsx
<Results results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`tsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Results results={controller.store.results} controller={controller} resultComponent={CustomResult} />
\`\`\`

### excludeBanners
The \`excludeBanners\` prop specifies whether inline merchandising banners should be omitted from the rendered results.

\`\`\`tsx
<Results results={controller.store.results} excludeBanners={true} />
\`\`\`

### layout
The \`layout\` prop specifies if this result will be rendered in a \`grid\` or \`list\` layout.

\`\`\`tsx
<Results results={controller.store.results} layout={'grid'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display in a grid layout.

\`\`\`tsx
<Results results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display in a grid layout.

\`\`\`tsx
<Results results={controller.store.results} rows={2} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result within a grid layout.

\`\`\`tsx
<Results results={controller.store.results} gapSize={'10px'} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`js
const breakpoints = {
	0: {
		columns: 1,
	},
	540: {
		columns: 2,
	},
	768: {
		columns: 3,
	},
	991: {
		columns: 4,
	},
};
\`\`\`

\`\`\`tsx
<Results results={controller.store.results} breakpoints={breakpoints} />
\`\`\`
`,
					b = {
						title: 'Organisms/Results',
						component: r.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(a.oz, { options: { overrides: { code: n.Z } }, children: i }), (0, o.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(f) => (0, o.Y)(f, {})],
						argTypes: {
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Results layout',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [s.V.grid, s.V.list],
								control: { type: 'select' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid - adding this will put a hard limit on the results',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							breakpoints: {
								defaultValue: { summary: 'Breakpoint object' },
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							excludeBanners: {
								defaultValue: !1,
								description: 'Exclude inline merchandising banners from the results list',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...e.F,
						},
					},
					u = l.p.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
					p = (f, { loaded: { controller: E } }) =>
						(0, o.Y)('div', {
							style: { maxWidth: f?.layout == 'list' ? '650px' : '800px' },
							children: (0, o.Y)(r.n, { ...f, controller: E, results: E?.store?.results }),
						});
				(p.loaders = [async () => (await u.search(), { controller: u })]), (p.args = { layout: 'grid' });
				const m = (f, { loaded: { controller: E } }) =>
					(0, o.Y)('div', {
						style: { maxWidth: f?.layout == 'list' ? '650px' : '800px' },
						children: (0, o.Y)(r.n, { ...f, controller: E, results: E?.store?.results, layout: s.V.list }),
					});
				(m.loaders = [async () => (await u.search(), { controller: u })]),
					(m.args = { layout: 'list' }),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: ResultsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '800px'
  }}>
            <Results {...args} controller={controller} results={controller?.store?.results} />
        </div>;
}`,
								...p.parameters?.docs?.source,
							},
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: ResultsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '800px'
  }}>
            <Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.list} />
        </div>;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const d = ['Grid', 'List'];
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, c, t) {
				'use strict';
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					r = (e, l = {}) => {
						const { rootMargin: s = '0px', fireOnce: i = !1, threshold: b = 0, minVisibleTime: u = 0 } = l,
							[p, m] = (0, o.J0)(!1),
							d = (0, o.li)(null),
							f = (0, o.li)(null),
							[E, y] = (0, o.J0)(0),
							O = (0, o.hb)((v) => {
								(e.current = v), y((R) => R + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								m(!1);
								let v = null,
									R = null;
								if (!window.IntersectionObserver || !e.current) return;
								const P = () => {
										R && (window.clearInterval(R), (R = null));
									},
									x = () => {
										u > 0
											? ((f.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													m(!0), i && e.current && v && v.unobserve(e.current);
											  }, u)))
											: (m(!0), i && e.current && v && v.unobserve(e.current));
									},
									g = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (f.current = null), m(!1);
									};
								return (
									(v = new IntersectionObserver(
										([h]) => {
											h.isIntersecting
												? e.current && n(e.current)
													? (P(), x())
													: (g(),
													  R ||
															(R = window.setInterval(() => {
																if (!e.current) {
																	P();
																	return;
																}
																n(e.current) && (P(), x());
															}, a)))
												: (P(), g());
										},
										{ rootMargin: s, threshold: b }
									)),
									e.current && v.observe(e.current),
									() => {
										m(!1), P(), d.current && window.clearTimeout(d.current), v && e.current && v.unobserve(e.current);
									}
								);
							}, [e, E]),
							{ inViewport: p, updateRef: O }
						);
					};
				function n(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				t.d(c, ['v', 0, r]);
			},
			'./components/src/providers/withTracking.tsx'(w, c, t) {
				'use strict';
				t.d(c, { N: () => n, W: () => e });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('./components/src/utilities/createImpressionObserver.ts'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'sstracking';
				function e(l) {
					const s = l;
					return (b) => {
						const { controller: u, result: p, banner: m, type: d, content: f, ...E } = b;
						if (b.trackingRef) return (0, o.Y)(s, { ...b });
						!u && (!d || !f) && console.warn('Warning: No controller provided to withTracking', b),
							!p && !m && (!d || !f) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: y, inViewport: O, updateRef: v } = (0, a.Q)(),
							R = (p || m || (d && f?.[d]?.[0]))?.responseId,
							P = (0, r.li)(R),
							x = (0, r.li)(!1);
						P.current !== R && (x.current = !0),
							(0, r.vJ)(() => {
								P.current !== R && ((P.current = R), v(y.current));
							}, [R, v]),
							(0, r.vJ)(() => {
								x.current && !O && (x.current = !1);
							}, [O, R]);
						const g = d && f && !p && ['search', 'autocomplete'].includes(u?.type || '');
						O && !x.current && (g ? u?.track.banner.impression(f[d][0]) : p?.bundleSeed || u?.track.product.impression(p || m));
						const h = (0, r.hb)(
							(_) => {
								g ? u?.track.banner.click(_, f[d][0]) : u?.track.product.click(_, p || m);
							},
							[u, p, m, d, f]
						);
						(0, r.vJ)(() => {
							const _ = y.current;
							if (_)
								return (
									_.setAttribute(n, 'true'),
									_.addEventListener('click', h, !0),
									() => {
										_.removeEventListener('click', h, !0);
									}
								);
						}, [h]);
						const k = {
							...E,
							controller: u,
							result: p,
							banner: m,
							type: d,
							content: f,
							trackingRef: (0, r.hb)(
								(_) => {
									v(_);
								},
								[v]
							),
						};
						return (0, o.Y)(s, { ...k });
					};
				}
			},
			'./components/src/types.ts'(w, c, t) {
				'use strict';
				t.d(c, { Q: () => a, V: () => o });
				var o = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(o || {}),
					a = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(a || {});
			},
			'./components/src/utilities/componentArgs.ts'(w, c, t) {
				'use strict';
				const o = {
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
				t.d(c, ['F', 0, o]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(w, c, t) {
				'use strict';
				t.d(c, { Q: () => e });
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					n = 1e3;
				function e(l) {
					const s = (0, o.li)(null),
						{ inViewport: i, updateRef: b } = (0, a.v)(s, { fireOnce: !0, threshold: r, minVisibleTime: n, ...l });
					return { ref: s, inViewport: i, updateRef: b };
				}
			},
			'./components/src/utilities/snapify.ts'(w, c, t) {
				'use strict';
				t.d(c, { p: () => v });
				var o = t('../../node_modules/mobx/dist/mobx.esm.js'),
					a = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					p = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					f = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					O = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(h) {
						const k = h.id;
						if (y[k]) return y[k];
						const _ = (y[k] = P({ client: O, controller: h }));
						return (
							_.on('afterStore', async ({ controller: T }, I) => {
								T.log.debug('controller', T), T.log.debug('store', T.store.toJSON()), await I();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(h) {
						const k = h.id;
						if (y[k]) return y[k];
						const _ = (y[k] = x({ client: O, controller: h }));
						return (
							_.on('afterStore', async ({ controller: T }, I) => {
								T.log.debug('controller', T), T.log.debug('store', T.store.toJSON()), await I();
							}),
							_.init(),
							_
						);
					}
					static search(h) {
						const k = h.id;
						if (y[k]) return y[k];
						const _ = (y[k] = R({ client: O, controller: h }));
						return (
							_.on('afterStore', async ({ controller: T }, I) => {
								T.log.debug('controller', T), T.log.debug('store', T.store.toJSON()), await I();
							}),
							_.init(),
							_
						);
					}
				}
				function R(g) {
					const h = new b.V(new p.E({ settings: { coreType: 'query', corePrefix: g.controller.id } }), u.X);
					return new a.Tp(g.controller, {
						client: new e.K(g.client.globals, g.client.config),
						store: new s.U(g.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new m.E(),
						profiler: new d.U(),
						logger: new f.V(),
						tracker: new E.J(g.client.globals),
					});
				}
				function P(g) {
					const h = new b.V(new p.E(), u.X).detach(!0);
					return new n.c(g.controller, {
						client: new e.K(g.client.globals, g.client.config),
						store: new i.t(g.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new m.E(),
						profiler: new d.U(),
						logger: new f.V(),
						tracker: new E.J(g.client.globals),
					});
				}
				function x(g) {
					const h = new b.V(new p.E(), u.X).detach();
					return new r.Z(g.controller, {
						client: new e.K(g.client.globals, g.client.config),
						store: new l.Y(g.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new m.E(),
						profiler: new d.U(),
						logger: new f.V(),
						tracker: new E.J(g.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, c, t) {
				'use strict';
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					n = (e) => {
						const l = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								l.current && e.className?.includes('lang-') && !e.className?.includes(r) && window?.Prism?.highlightElement(l.current);
							}, [e.className, e.children, l]),
							(0, o.Y)('code', { ...e, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(c, ['Z', 0, n]);
			},
			'../../node_modules/colord/plugins/names.mjs'(w, c, t) {
				'use strict';
				t.d(c, { A: () => o }), t.dn(o);
				function o(a, r) {
					var n = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						e = {};
					for (var l in n) e[n[l]] = l;
					var s = {};
					(a.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var b,
							u,
							p = e[this.toHex()];
						if (p) return p;
						if (i?.closest) {
							var m = this.toRgb(),
								d = 1 / 0,
								f = 'black';
							if (!s.length) for (var E in n) s[E] = new a(n[E]).toRgb();
							for (var y in n) {
								var O = ((b = m), (u = s[y]), Math.pow(b.r - u.r, 2) + Math.pow(b.g - u.g, 2) + Math.pow(b.b - u.b, 2));
								O < d && ((d = O), (f = y));
							}
							return f;
						}
					}),
						r.string.push([
							function (i) {
								var b = i.toLowerCase(),
									u = b === 'transparent' ? '#0000' : n[b];
								return u ? new a(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(w, c, t) {
				'use strict';
				t.d(c, { j: () => r });
				var o = Object.prototype.hasOwnProperty;
				function a(n, e, l) {
					for (l of n.keys()) if (r(l, e)) return l;
				}
				function r(n, e) {
					var l, s, i;
					if (n === e) return !0;
					if (n && e && (l = n.constructor) === e.constructor) {
						if (l === Date) return n.getTime() === e.getTime();
						if (l === RegExp) return n.toString() === e.toString();
						if (l === Array) {
							if ((s = n.length) === e.length) for (; s-- && r(n[s], e[s]); );
							return s === -1;
						}
						if (l === Set) {
							if (n.size !== e.size) return !1;
							for (s of n) if (((i = s), (i && typeof i == 'object' && ((i = a(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (l === Map) {
							if (n.size !== e.size) return !1;
							for (s of n) if (((i = s[0]), (i && typeof i == 'object' && ((i = a(e, i)), !i)) || !r(s[1], e.get(i)))) return !1;
							return !0;
						}
						if (l === ArrayBuffer) (n = new Uint8Array(n)), (e = new Uint8Array(e));
						else if (l === DataView) {
							if ((s = n.byteLength) === e.byteLength) for (; s-- && n.getInt8(s) === e.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((s = n.byteLength) === e.byteLength) for (; s-- && n[s] === e[s]; );
							return s === -1;
						}
						if (!l || typeof n == 'object') {
							s = 0;
							for (l in n) if ((o.call(n, l) && ++s && !o.call(e, l)) || !(l in e) || !r(n[l], e[l])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return n !== n && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function c(t) {
					const o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (w.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Results-Results-stories.1a82934d.iframe.bundle.js.map
