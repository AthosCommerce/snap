(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[401],
		{
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx'(I, c, e) {
				'use strict';
				e.r(c), e.d(c, { Grid: () => f, List: () => h, __namedExportsOrder: () => v, default: () => l });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const r = `# RecommendationGrid

Renders a List of results utilizing \`<Result />\` components.

## Sub-components
- Result

## Usage

### controller
The \`controller\` prop specifies a reference to the recommendation controller.

\`\`\`jsx
<RecommendationGrid controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`jsx
<RecommendationGrid results={controller.store.results} />
\`\`\`

### title
The \`title\` prop specifies the title text to render.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} title={'Recommended For You'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display. 

\`\`\`jsx
<RecommendationGrid results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} rows={2} />
\`\`\`

### trim
The \`trim\` prop specifies whether we should trim off excess results in order to have equal rows and columns.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} rows={3} trim={true} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} gapSize={'10px'} />
\`\`\`


### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`jsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationGrid results={controller.store.results} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`typescript
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

\`\`\`jsx
<RecommendationGrid results={controller.store.results} breakpoints={breakpoints} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`jsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<RecommendationGrid results={controller.store.results} resultComponent={CustomResult} />
\`\`\``,
					l = {
						title: 'Templates/RecommendationGrid',
						component: a.q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(p.oz, { options: { overrides: { code: n.Z } }, children: r }), (0, s.Y)(p.uY, { story: p.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, s.Y)(d, {})],
						argTypes: {
							controller: {
								description: 'Controller reference',
								table: { type: { summary: 'Controller' } },
								type: { required: !0 },
								control: { type: 'none' },
							},
							title: {
								description: 'Recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							columns: {
								description: 'Number of columns in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							trim: {
								description: 'trim off extra results based on columns and rows?',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							breakpoints: {
								defaultValue: { summary: 'Breakpoint object' },
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							...t.F,
						},
					},
					E = o.p.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					h = (d, { loaded: { controller: P } }) =>
						(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(a.q, { ...d, controller: P, results: P?.store?.results }) });
				(h.args = { columns: 10, rows: 1 }), (h.loaders = [async () => (await E.search(), { controller: E })]);
				const f = (d, { loaded: { controller: P } }) =>
					(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(a.q, { ...d, controller: P, results: P?.store?.results }) });
				(f.args = { columns: 4 }),
					(f.loaders = [async () => (await E.search(), { controller: E })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: RecommendationGridProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <div style={{
    maxWidth: '1200px'
  }}>
            <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
        </div>;
}`,
								...h.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: RecommendationGridProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <div style={{
    maxWidth: '1200px'
  }}>
            <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
        </div>;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const v = ['List', 'Grid'];
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(I, c, e) {
				'use strict';
				e.d(c, { q: () => u });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(o),
					l = e('./components/src/components/Molecules/Result/Result.tsx'),
					E = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/hooks/useDisplaySettings.tsx'),
					j = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					T = e('../../node_modules/preact/compat/dist/compat.module.js'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					A = e('./components/src/hooks/useIntersection.tsx');
				const i = ({ gapSize: _, columns: O }) =>
						(0, a.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: _,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${O}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					u = (0, p.PA)((_) => {
						const O = (0, P.u)(),
							g = (0, x.LU)(),
							L = {
								results: _.controller?.store?.results,
								gapSize: '20px',
								title: _.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: g,
							},
							k = { name: _.controller?.store?.profile?.tag?.toLowerCase(), ..._ };
						let m = (0, f.v6)('recommendationGrid', O, L, k);
						if (!_.theme?.name) {
							const D = (0, R.X)(m?.breakpoints || {}),
								Z = r()(m?.theme || {}, D?.theme || {}, { arrayMerge: (q, $) => $ });
							m = { ...m, ...D, theme: Z };
						}
						const {
								disableStyles: V,
								title: w,
								resultComponent: B,
								trim: W,
								lazyRender: G,
								className: z,
								internalClassName: N,
								treePath: K,
								theme: Y,
								controller: b,
							} = m,
							U = { enabled: !0, offset: '10%', ...G },
							J = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, h.s)({ disableStyles: V }), theme: m?.theme } };
						let M = m.results || b.store.results;
						if (!m.columns && !m.rows) (m.rows = 1), (m.columns = M.length);
						else if (m.columns && !m.rows) {
							if (((m.rows = Math.floor(M.length / m.columns)), W)) {
								const D = M.length % m.columns;
								M = M.slice(0, M.length - D);
							}
						} else if (m.rows && !m.columns) {
							if (W) {
								const D = M.length % m.rows;
								M = M.slice(0, M.length - D);
							}
							m.columns = Math.ceil(M.length / m.rows);
						} else m?.columns && m?.rows && m.columns > 0 && m.rows > 0 && (M = M?.slice(0, m.columns * m.rows));
						const F = (0, v.Z)(m, i),
							[H, X] = (0, T.useState)(!1),
							S = (0, C.li)(null);
						return (
							(!U?.enabled || (0, A.v)(S, `${U.offset} 0px ${U.offset} 0px`, !0)) && X(!0),
							M?.length
								? (0, s.Y)(d._, {
										children: (0, s.Y)('div', {
											...F,
											ref: S,
											className: t()('ss__recommendation-grid', z, N),
											children: H
												? (0, s.FD)(j.l, {
														controller: b,
														children: [
															w && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: w }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: M.map((D) =>
																	B && b
																		? (0, E.Y)(B, { controller: b, result: D, theme: Y, treePath: K })
																		: (0, s.Y)(y.o, {
																				result: D,
																				controller: b,
																				children: (0, s.Y)(l.Q, { ...J.result, result: D, controller: b, treePath: K }, D.id),
																		  })
																),
															}),
														],
												  })
												: (0, s.Y)(j.l, {
														controller: b,
														children: M.map((D) => (0, s.Y)(y.o, { controller: b, result: D, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(I, c, e) {
				'use strict';
				e.d(c, { l: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					o = e.n(t),
					r = e('./components/src/utilities/mergeStyles.ts');
				const l = () => (0, a.AH)({}),
					E = (0, n.PA)((h) => {
						const { children: f, className: v, internalClassName: d } = h,
							P = (0, p.v2)(f),
							x = (0, r.Z)(h, l);
						return P.length ? (0, s.Y)('div', { className: o()('ss__recommendation-profile-tracker', v, d), ...x, children: f }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(I, c, e) {
				'use strict';
				e.d(c, { o: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, p.AH)({}) },
					h = (0, a.PA)((f) => {
						const v = (0, o.u)(),
							d = (0, r.v6)('resultTracker', v, {}, f),
							P = { impression: !0, click: !0 },
							{ children: x, result: R, track: j, controller: y, className: T, internalClassName: C, disableStyles: A, style: i } = d,
							u = { ...P, ...j },
							{ ref: _, inViewport: O } = (0, l.Q)();
						O && u.impression && y?.track.product.impression(R);
						const g = {};
						return (
							A ? i && (g.css = [i]) : (g.css = [E.ResultTracker(), i]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${y?.type}-result-tracker`, T, C),
								onClick: (L) => {
									u.click && y?.track.product.click(L, R);
								},
								ref: _,
								...g,
								children: x,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(I, c, e) {
				'use strict';
				e.d(c, { v: () => p });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = (a, n = '0px', t = !1) => {
					const [o, r] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const l = new IntersectionObserver(
								([E]) => {
									r(E.isIntersecting), t && E.isIntersecting && l.unobserve(a.current);
								},
								{ rootMargin: n }
							);
							return (
								a.current && l.observe(a.current),
								() => {
									l.unobserve(a.current);
								}
							);
						}, []),
						o
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(I, c, e) {
				'use strict';
				e.d(c, { v: () => a });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 250,
					a = (t, o = {}) => {
						const { rootMargin: r = '0px', fireOnce: l = !1, threshold: E = 0, minVisibleTime: h = 0 } = o,
							[f, v] = (0, s.J0)(!1),
							d = (0, s.li)(null),
							P = (0, s.li)(null),
							[x, R] = (0, s.J0)(0),
							j = (0, s.hb)((y) => {
								(t.current = y), R((T) => T + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								v(!1);
								let y = null,
									T = null;
								if (!window.IntersectionObserver || !t.current) return;
								const C = () => {
										T && (window.clearInterval(T), (T = null));
									},
									A = () => {
										h > 0
											? ((P.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													v(!0), l && t.current && y && y.unobserve(t.current);
											  }, h)))
											: (v(!0), l && t.current && y && y.unobserve(t.current));
									},
									i = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (P.current = null), v(!1);
									};
								return (
									(y = new IntersectionObserver(
										([u]) => {
											u.isIntersecting
												? t.current && n(t.current)
													? (C(), A())
													: (i(),
													  T ||
															(T = window.setInterval(() => {
																if (!t.current) {
																	C();
																	return;
																}
																n(t.current) && (C(), A());
															}, p)))
												: (C(), i());
										},
										{ rootMargin: r, threshold: E }
									)),
									t.current && y.observe(t.current),
									() => {
										v(!1), C(), d.current && window.clearTimeout(d.current), y && t.current && y.unobserve(t.current);
									}
								);
							}, [t, x]),
							{ inViewport: f, updateRef: j }
						);
					};
				function n(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(I, c, e) {
				'use strict';
				e.d(c, { F: () => s });
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
			},
			'./components/src/utilities/createImpressionObserver.ts'(I, c, e) {
				'use strict';
				e.d(c, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					n = 1e3;
				function t(o) {
					const r = (0, s.li)(null),
						{ inViewport: l, updateRef: E } = (0, p.v)(r, { ...o, fireOnce: !0, threshold: a, minVisibleTime: n });
					return { ref: r, inViewport: l, updateRef: E };
				}
			},
			'./components/src/utilities/snapify.ts'(I, c, e) {
				'use strict';
				e.d(c, { p: () => y });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					v = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const R = {},
					j = { globals: { siteId: 'atkzs2' } };
				class y {
					static recommendation(u) {
						const _ = u.id;
						if (R[_]) return R[_];
						const O = (R[_] = C({ client: j, controller: u }));
						return (
							O.on('afterStore', async ({ controller: g }, L) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await L();
							}),
							O.init(),
							O
						);
					}
					static autocomplete(u) {
						const _ = u.id;
						if (R[_]) return R[_];
						const O = (R[_] = A({ client: j, controller: u }));
						return (
							O.on('afterStore', async ({ controller: g }, L) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await L();
							}),
							O.init(),
							O
						);
					}
					static search(u) {
						const _ = u.id;
						if (R[_]) return R[_];
						const O = (R[_] = T({ client: j, controller: u }));
						return (
							O.on('afterStore', async ({ controller: g }, L) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await L();
							}),
							O.init(),
							O
						);
					}
				}
				function T(i) {
					const u = new E.V(new f.E({ settings: { coreType: 'query', corePrefix: i.controller.id } }), h.X);
					return new p.Tp(i.controller, {
						client: new t.K(i.client.globals, i.client.config),
						store: new r.U(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new v.E(),
						profiler: new d.U(),
						logger: new P.V(),
						tracker: new x.J(i.client.globals),
					});
				}
				function C(i) {
					const u = new E.V(new f.E(), h.X).detach(!0);
					return new n.c(i.controller, {
						client: new t.K(i.client.globals, i.client.config),
						store: new l.t(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new v.E(),
						profiler: new d.U(),
						logger: new P.V(),
						tracker: new x.J(i.client.globals),
					});
				}
				function A(i) {
					const u = new E.V(new f.E(), h.X).detach();
					return new a.Z(i.controller, {
						client: new t.K(i.client.globals, i.client.config),
						store: new o.Y(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new v.E(),
						profiler: new d.U(),
						logger: new P.V(),
						tracker: new x.J(i.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(I, c, e) {
				'use strict';
				e.d(c, { Z: () => n });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					n = (t) => {
						const o = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								o.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(o.current);
							}, [t.className, t.children, o]),
							(0, s.Y)('code', { ...t, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(I, c, e) {
				'use strict';
				e.d(c, { j: () => a });
				var s = Object.prototype.hasOwnProperty;
				function p(n, t, o) {
					for (o of n.keys()) if (a(o, t)) return o;
				}
				function a(n, t) {
					var o, r, l;
					if (n === t) return !0;
					if (n && t && (o = n.constructor) === t.constructor) {
						if (o === Date) return n.getTime() === t.getTime();
						if (o === RegExp) return n.toString() === t.toString();
						if (o === Array) {
							if ((r = n.length) === t.length) for (; r-- && a(n[r], t[r]); );
							return r === -1;
						}
						if (o === Set) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((l = r), (l && typeof l == 'object' && ((l = p(t, l)), !l)) || !t.has(l))) return !1;
							return !0;
						}
						if (o === Map) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((l = r[0]), (l && typeof l == 'object' && ((l = p(t, l)), !l)) || !a(r[1], t.get(l)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (o === DataView) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n[r] === t[r]; );
							return r === -1;
						}
						if (!o || typeof n == 'object') {
							r = 0;
							for (o in n) if ((s.call(n, o) && ++r && !s.call(t, o)) || !(o in t) || !a(n[o], t[o])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return n !== n && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function c(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (I.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationGrid-RecommendationGrid-stories.6d827515.iframe.bundle.js.map
