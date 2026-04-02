(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7643],
		{
			'./components/src/components/Trackers/ResultTracker/ResultTracker.stories.tsx'(M, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => f, __namedExportsOrder: () => g, default: () => R });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = t('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					r = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const s =
					"# ResultTracker\n\nAdds impression, render and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\nAlternatively, the `withTracking` HoC can also be used to track the same events. It also removes the additional `div` element that ResultTracker adds.\n\n## Usage\n```jsx\nimport { ResultTracker } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```jsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```jsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```jsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `render`, `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```jsx\n<ResultTracker controller={controller} result={result} track={{ render: false, impression: false }}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n";
				var n = t('./components/src/utilities/snapify.ts'),
					c = t('./components/src/components/Molecules/Result/Result.tsx');
				const R = {
						title: 'Trackers/ResultTracker',
						component: u.o,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(_.oz, { options: { overrides: { code: r.Z } }, children: s }), (0, o.Y)(_.uY, { story: _.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, o.Y)('div', { style: { maxWidth: '250px' }, children: (0, o.Y)(m, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							...e.F,
						},
					},
					y = n.p.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } }),
					f = (m, { loaded: { controller: v } }) => {
						const P = v?.store?.results[0];
						return (0, o.Y)(u.o, { ...m, controller: v, result: P, children: (0, o.Y)(c.Q, { result: P }) });
					};
				(f.loaders = [async () => (await y.search(), { controller: y })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(props: ResultTrackerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const firstResult = controller?.store?.results[0] as Product;
  return <ResultTracker {...props} controller={controller} result={firstResult}>
            <Result result={firstResult} />
        </ResultTracker>;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(M, a, t) {
				'use strict';
				t.d(a, { o: () => y });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = t('../../node_modules/mobx-react-lite/es/index.js'),
					r = t('../../node_modules/classnames/index.js'),
					e = t.n(r),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = t('./components/src/utilities/mergeProps.ts'),
					c = t('./components/src/utilities/createImpressionObserver.ts');
				const R = { ResultTracker: () => (0, _.AH)({}) },
					y = (0, u.PA)((f) => {
						const g = (0, s.u)(),
							m = (0, n.v6)('resultTracker', g, {}, f),
							v = { impression: !0, click: !0 },
							{ children: P, result: E, track: D, controller: p, className: O, internalClassName: k, disableStyles: j, style: l } = m,
							i = { ...v, ...D },
							{ ref: h, inViewport: T } = (0, c.Q)();
						T && i.impression && p?.track.product.impression(E);
						const d = {};
						return (
							j ? l && (d.css = [l]) : (d.css = [R.ResultTracker(), l]),
							(0, o.Y)('div', {
								className: e()('ss__result-tracker', `ss__${p?.type}-result-tracker`, O, k),
								onClick: (I) => {
									i.click && p?.track.product.click(I, E);
								},
								ref: h,
								...d,
								children: P,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(M, a, t) {
				'use strict';
				t.d(a, { v: () => u });
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 250,
					u = (e, s = {}) => {
						const { rootMargin: n = '0px', fireOnce: c = !1, threshold: R = 0, minVisibleTime: y = 0 } = s,
							[f, g] = (0, o.J0)(!1),
							m = (0, o.li)(null),
							v = (0, o.li)(null),
							[P, E] = (0, o.J0)(0),
							D = (0, o.hb)((p) => {
								(e.current = p), E((O) => O + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								g(!1);
								let p = null,
									O = null;
								if (!window.IntersectionObserver || !e.current) return;
								const k = () => {
										O && (window.clearInterval(O), (O = null));
									},
									j = () => {
										y > 0
											? ((v.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													g(!0), c && e.current && p && p.unobserve(e.current);
											  }, y)))
											: (g(!0), c && e.current && p && p.unobserve(e.current));
									},
									l = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (v.current = null), g(!1);
									};
								return (
									(p = new IntersectionObserver(
										([i]) => {
											i.isIntersecting
												? e.current && r(e.current)
													? (k(), j())
													: (l(),
													  O ||
															(O = window.setInterval(() => {
																if (!e.current) {
																	k();
																	return;
																}
																r(e.current) && (k(), j());
															}, _)))
												: (k(), l());
										},
										{ rootMargin: n, threshold: R }
									)),
									e.current && p.observe(e.current),
									() => {
										g(!1), k(), m.current && window.clearTimeout(m.current), p && e.current && p.unobserve(e.current);
									}
								);
							}, [e, P]),
							{ inViewport: f, updateRef: D }
						);
					};
				function r(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(M, a, t) {
				'use strict';
				t.d(a, { F: () => o });
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
			},
			'./components/src/utilities/createImpressionObserver.ts'(M, a, t) {
				'use strict';
				t.d(a, { Q: () => e });
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const u = 0.7,
					r = 1e3;
				function e(s) {
					const n = (0, o.li)(null),
						{ inViewport: c, updateRef: R } = (0, _.v)(n, { ...s, fireOnce: !0, threshold: u, minVisibleTime: r });
					return { ref: n, inViewport: c, updateRef: R };
				}
			},
			'./components/src/utilities/snapify.ts'(M, a, t) {
				'use strict';
				t.d(a, { p: () => p });
				var o = t('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					s = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					R = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					m = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const E = {},
					D = { globals: { siteId: 'atkzs2' } };
				class p {
					static recommendation(i) {
						const h = i.id;
						if (E[h]) return E[h];
						const T = (E[h] = k({ client: D, controller: i }));
						return (
							T.on('afterStore', async ({ controller: d }, I) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await I();
							}),
							T.init(),
							T
						);
					}
					static autocomplete(i) {
						const h = i.id;
						if (E[h]) return E[h];
						const T = (E[h] = j({ client: D, controller: i }));
						return (
							T.on('afterStore', async ({ controller: d }, I) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await I();
							}),
							T.init(),
							T
						);
					}
					static search(i) {
						const h = i.id;
						if (E[h]) return E[h];
						const T = (E[h] = O({ client: D, controller: i }));
						return (
							T.on('afterStore', async ({ controller: d }, I) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await I();
							}),
							T.init(),
							T
						);
					}
				}
				function O(l) {
					const i = new R.V(new f.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), y.X);
					return new _.Tp(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new n.U(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new m.U(),
						logger: new v.V(),
						tracker: new P.J(l.client.globals),
					});
				}
				function k(l) {
					const i = new R.V(new f.E(), y.X).detach(!0);
					return new r.c(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new c.t(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new m.U(),
						logger: new v.V(),
						tracker: new P.J(l.client.globals),
					});
				}
				function j(l) {
					const i = new R.V(new f.E(), y.X).detach();
					return new u.Z(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new s.Y(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new m.U(),
						logger: new v.V(),
						tracker: new P.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, a, t) {
				'use strict';
				t.d(a, { Z: () => r });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					r = (e) => {
						const s = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								s.current && e.className?.includes('lang-') && !e.className?.includes(u) && window?.Prism?.highlightElement(s.current);
							}, [e.className, e.children, s]),
							(0, o.Y)('code', { ...e, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(M, a, t) {
				'use strict';
				t.d(a, { j: () => u });
				var o = Object.prototype.hasOwnProperty;
				function _(r, e, s) {
					for (s of r.keys()) if (u(s, e)) return s;
				}
				function u(r, e) {
					var s, n, c;
					if (r === e) return !0;
					if (r && e && (s = r.constructor) === e.constructor) {
						if (s === Date) return r.getTime() === e.getTime();
						if (s === RegExp) return r.toString() === e.toString();
						if (s === Array) {
							if ((n = r.length) === e.length) for (; n-- && u(r[n], e[n]); );
							return n === -1;
						}
						if (s === Set) {
							if (r.size !== e.size) return !1;
							for (n of r) if (((c = n), (c && typeof c == 'object' && ((c = _(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (s === Map) {
							if (r.size !== e.size) return !1;
							for (n of r) if (((c = n[0]), (c && typeof c == 'object' && ((c = _(e, c)), !c)) || !u(n[1], e.get(c)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (r = new Uint8Array(r)), (e = new Uint8Array(e));
						else if (s === DataView) {
							if ((n = r.byteLength) === e.byteLength) for (; n-- && r.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((n = r.byteLength) === e.byteLength) for (; n-- && r[n] === e[n]; );
							return n === -1;
						}
						if (!s || typeof r == 'object') {
							n = 0;
							for (s in r) if ((o.call(r, s) && ++n && !o.call(e, s)) || !(s in e) || !u(r[s], e[s])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return r !== r && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function a(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (M.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Trackers-ResultTracker-ResultTracker-stories.12651899.iframe.bundle.js.map
