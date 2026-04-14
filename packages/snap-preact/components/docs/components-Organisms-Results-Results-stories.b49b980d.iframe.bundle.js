(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3715],
		{
			'./components/src/components/Organisms/Results/Results.stories.tsx'(L, h, e) {
				'use strict';
				e.r(h), e.d(h, { Grid: () => _, List: () => m, __namedExportsOrder: () => a, default: () => R });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Organisms/Results/Results.tsx'),
					s = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts'),
					o = e('./components/src/types.ts');
				const c = `# Results

Renders a page of results utilizing \`<Result />\` components.

## Sub-components
- Result

- InlineBanner

- ResultTracker

## Usage
\`\`\`jsx
import { Results } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to the search controller.

\`\`\`jsx
<Results controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`jsx
<Results results={controller.store.results} />
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

<Results results={controller.store.results} controller={controller} resultComponent={CustomResult} />
\`\`\`

### layout
The \`layout\` prop specifies if this result will be rendered in a \`grid\` or \`list\` layout.

\`\`\`jsx
<Results results={controller.store.results} layout={'grid'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display in a grid layout.

\`\`\`jsx
<Results results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display in a grid layout.

\`\`\`jsx
<Results results={controller.store.results} rows={2} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result within a grid layout.

\`\`\`jsx
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

\`\`\`jsx
<Results results={controller.store.results} breakpoints={breakpoints} />
\`\`\`
`,
					R = {
						title: 'Organisms/Results',
						component: i.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(v.oz, { options: { overrides: { code: s.Z } }, children: c }), (0, n.Y)(v.uY, { story: v.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, n.Y)(p, {})],
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
								options: [o.V.grid, o.V.list],
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
							...t.F,
						},
					},
					y = r.p.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
					_ = (p, { loaded: { controller: T } }) =>
						(0, n.Y)('div', {
							style: { maxWidth: p?.layout == 'list' ? '650px' : '800px' },
							children: (0, n.Y)(i.n, { ...p, controller: T, results: T?.store?.results }),
						});
				(_.loaders = [async () => (await y.search(), { controller: y })]), (_.args = { layout: 'grid' });
				const m = (p, { loaded: { controller: T } }) =>
					(0, n.Y)('div', {
						style: { maxWidth: p?.layout == 'list' ? '650px' : '800px' },
						children: (0, n.Y)(i.n, { ...p, controller: T, results: T?.store?.results, layout: o.V.list }),
					});
				(m.loaders = [async () => (await y.search(), { controller: y })]),
					(m.args = { layout: 'list' }),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
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
								..._.parameters?.docs?.source,
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
				const a = ['Grid', 'List'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(L, h, e) {
				'use strict';
				e.d(h, { _: () => P });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					s = e.n(i),
					t = e('./components/src/providers/cache.tsx'),
					r = e('./components/src/providers/controller.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/withTracking.tsx'),
					R = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					a = e('./components/src/hooks/useA11y.tsx'),
					p = e('./components/src/types.ts'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/hooks/useComponent.tsx');
				const C = ({ width: g }) =>
						(0, v.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: g,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					P = (0, r.Bk)(
						(0, c.W)(
							(0, T.PA)((g) => {
								const I = (0, o.u)(),
									x = (0, R.uk)(),
									l = (0, y.LU)(),
									u = { layout: p.V.grid, width: 'auto', treePath: l },
									O = (0, _.v6)('inlineBanner', I, u, g),
									{ banner: d, className: f, internalClassName: M, disableA11y: B, layout: b, onClick: U, customComponent: W } = O;
								if (W) {
									const E = (0, D.x)(x?.templates?.library.import.component.inlineBanner || {}, W);
									if (E) return (0, n.Y)(E, { ...O });
								}
								const K = (0, m.Z)(O, C);
								return d && d.value
									? (0, n.Y)(t._, {
											children: (0, n.Y)('div', {
												onClick: (E) => {
													U && U(E, d);
												},
												role: 'article',
												ref: (E) => {
													B || (0, a.iy)(E), (g.trackingRef.current = E);
												},
												className: s()('ss__inline-banner', `ss__inline-banner--${b}`, f, M),
												...K,
												dangerouslySetInnerHTML: { __html: d.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(L, h, e) {
				'use strict';
				e.d(h, { n: () => f });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					o = e.n(r),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					R = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					y = e('./components/src/components/Molecules/Result/Result.tsx'),
					_ = e('./components/src/types.ts'),
					m = e('./components/src/utilities/cloneWithProps.tsx'),
					a = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/withTracking.tsx'),
					g = e('./components/src/providers/snap.tsx'),
					I = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					l = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					u = e('./components/src/hooks/useComponent.tsx');
				const O = ({ gapSize: M, columns: B }) =>
						(0, v.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: M,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${B}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / B}% - (${B - 1} * ${M} / ${B} ) )`,
								marginRight: M,
								marginBottom: M,
								[`&:nth-of-type(${B}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${B})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					d = (0, P.W)(y.Q),
					f = (0, i.PA)((M) => {
						const B = (0, C.u)(),
							b = (0, g.uk)(),
							U = (0, I.LU)(),
							W = {
								0: { columns: M.columns || 1 },
								540: { columns: M.columns || 2 },
								768: { columns: M.columns || 3 },
								991: { columns: M.columns || 4 },
							},
							K = { results: M.controller?.store?.results, columns: 4, gapSize: '20px', layout: _.V.grid, breakpoints: W, treePath: U };
						let E = (0, p.v6)('results', B, K, M);
						if (!M.theme?.name) {
							const A = (0, x.X)(E?.breakpoints || {}),
								F = o()(E?.theme || {}, A?.theme || {}, { arrayMerge: (Q, Z) => Z });
							E = { ...E, ...A, theme: F };
						}
						const {
							disableStyles: k,
							className: z,
							internalClassName: J,
							layout: $,
							theme: H,
							controller: j,
							treePath: S,
							customComponent: V,
							resultComponent: N,
						} = E;
						if (V) {
							const A = (0, u.x)(b?.templates?.library.import.component.results || {}, V);
							if (A) return (0, n.Y)(A, { ...E });
						}
						const Y = {
							result: { internalClassName: 'ss__results__result', ...(0, a.s)({ disableStyles: k }), theme: E?.theme, treePath: S },
							inlineBanner: {
								controller: j,
								internalClassName: 'ss__results__inline-banner',
								...(0, a.s)({ disableStyles: k }),
								theme: E?.theme,
								treePath: S,
							},
						};
						let w = E.results;
						E?.columns && E?.rows && E.columns > 0 && E.rows > 0 && (w = E.results?.slice(0, E.columns * E.rows));
						const G = (0, T.Z)({ ...E, columns: $ == _.V.list ? 1 : E.columns }, O);
						return w?.length
							? (0, n.Y)(D._, {
									children: (0, n.Y)('div', {
										...G,
										className: t()('ss__results', `ss__results-${E.layout}`, z, J),
										children: w.map((A) =>
											A.type === c.c.BANNER
												? (0, v.n)(R._, { ...Y.inlineBanner, key: A.id, banner: A, layout: E.layout })
												: N && j
												? (0, n.Y)(l.o, {
														result: A,
														controller: j,
														children: (0, m.Y)(N, { key: A.id, controller: j, result: A, theme: H, treePath: S }),
												  })
												: (0, n.Y)(d, { ...Y.result, result: A, layout: E.layout, controller: j }, A.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(L, h, e) {
				'use strict';
				e.d(h, { o: () => y });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const R = { ResultTracker: () => (0, v.AH)({}) },
					y = (0, i.PA)((_) => {
						const m = (0, r.u)(),
							a = (0, o.v6)('resultTracker', m, {}, _),
							p = { impression: !0, click: !0 },
							{ children: T, result: D, track: C, controller: P, className: g, internalClassName: I, disableStyles: x, style: l } = a,
							u = { ...p, ...C },
							{ ref: O, inViewport: d } = (0, c.Q)();
						d && u.impression && P?.track.product.impression(D);
						const f = {};
						return (
							x ? l && (f.css = [l]) : (f.css = [R.ResultTracker(), l]),
							(0, n.Y)('div', {
								className: t()('ss__result-tracker', `ss__${P?.type}-result-tracker`, g, I),
								onClick: (M) => {
									u.click && P?.track.product.click(M, D);
								},
								ref: O,
								...f,
								children: T,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(L, h, e) {
				'use strict';
				e.d(h, { v: () => i });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = 250,
					i = (t, r = {}) => {
						const { rootMargin: o = '0px', fireOnce: c = !1, threshold: R = 0, minVisibleTime: y = 0 } = r,
							[_, m] = (0, n.J0)(!1),
							a = (0, n.li)(null),
							p = (0, n.li)(null),
							[T, D] = (0, n.J0)(0),
							C = (0, n.hb)((P) => {
								(t.current = P), D((g) => g + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								m(!1);
								let P = null,
									g = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										g && (window.clearInterval(g), (g = null));
									},
									x = () => {
										y > 0
											? ((p.current = Date.now()),
											  a.current && window.clearTimeout(a.current),
											  (a.current = window.setTimeout(() => {
													m(!0), c && t.current && P && P.unobserve(t.current);
											  }, y)))
											: (m(!0), c && t.current && P && P.unobserve(t.current));
									},
									l = () => {
										a.current && window.clearTimeout(a.current), (a.current = null), (p.current = null), m(!1);
									};
								return (
									(P = new IntersectionObserver(
										([u]) => {
											u.isIntersecting
												? t.current && s(t.current)
													? (I(), x())
													: (l(),
													  g ||
															(g = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																s(t.current) && (I(), x());
															}, v)))
												: (I(), l());
										},
										{ rootMargin: o, threshold: R }
									)),
									t.current && P.observe(t.current),
									() => {
										m(!1), I(), a.current && window.clearTimeout(a.current), P && t.current && P.unobserve(t.current);
									}
								);
							}, [t, T]),
							{ inViewport: _, updateRef: C }
						);
					};
				function s(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(L, h, e) {
				'use strict';
				e.d(h, { N: () => s, W: () => t });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('./components/src/utilities/createImpressionObserver.ts'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'sstracking';
				function t(r) {
					const o = r;
					return (R) => {
						const { controller: y, result: _, banner: m, type: a, content: p, ...T } = R;
						if (R.trackingRef) return (0, n.Y)(o, { ...R });
						!y && (!a || !p) && console.warn('Warning: No controller provided to withTracking', R),
							!_ && !m && (!a || !p) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: D, inViewport: C, updateRef: P } = (0, v.Q)(),
							g = (_ || m || (a && p?.[a]?.[0]))?.responseId,
							I = (0, i.li)(g),
							x = (0, i.li)(!1);
						I.current !== g && (x.current = !0),
							(0, i.vJ)(() => {
								I.current !== g && ((I.current = g), P(D.current));
							}, [g, P]),
							(0, i.vJ)(() => {
								x.current && !C && (x.current = !1);
							}, [C, g]);
						const l = a && p && !_ && ['search', 'autocomplete'].includes(y?.type || '');
						C && !x.current && (l ? y?.track.banner.impression(p[a][0]) : _?.bundleSeed || y?.track.product.impression(_ || m));
						const u = (0, i.hb)(
							(d) => {
								l ? y?.track.banner.click(d, p[a][0]) : y?.track.product.click(d, _ || m);
							},
							[y, _, m, a, p]
						);
						(0, i.vJ)(() => {
							const d = D.current;
							if (d)
								return (
									d.setAttribute(s, 'true'),
									d.addEventListener('click', u, !0),
									() => {
										d.removeEventListener('click', u, !0);
									}
								);
						}, [u]);
						const O = {
							...T,
							controller: y,
							result: _,
							banner: m,
							type: a,
							content: p,
							trackingRef: (0, i.hb)(
								(d) => {
									P(d);
								},
								[P]
							),
						};
						return (0, n.Y)(o, { ...O });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(L, h, e) {
				'use strict';
				e.d(h, { F: () => n });
				const n = {
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
			'./components/src/utilities/createImpressionObserver.ts'(L, h, e) {
				'use strict';
				e.d(h, { Q: () => t });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const i = 0.7,
					s = 1e3;
				function t(r) {
					const o = (0, n.li)(null),
						{ inViewport: c, updateRef: R } = (0, v.v)(o, { ...r, fireOnce: !0, threshold: i, minVisibleTime: s });
					return { ref: o, inViewport: c, updateRef: R };
				}
			},
			'./components/src/utilities/snapify.ts'(L, h, e) {
				'use strict';
				e.d(h, { p: () => P });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					v = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					R = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					a = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const D = {},
					C = { globals: { siteId: 'atkzs2' } };
				class P {
					static recommendation(u) {
						const O = u.id;
						if (D[O]) return D[O];
						const d = (D[O] = I({ client: C, controller: u }));
						return (
							d.on('afterStore', async ({ controller: f }, M) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await M();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(u) {
						const O = u.id;
						if (D[O]) return D[O];
						const d = (D[O] = x({ client: C, controller: u }));
						return (
							d.on('afterStore', async ({ controller: f }, M) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await M();
							}),
							d.init(),
							d
						);
					}
					static search(u) {
						const O = u.id;
						if (D[O]) return D[O];
						const d = (D[O] = g({ client: C, controller: u }));
						return (
							d.on('afterStore', async ({ controller: f }, M) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await M();
							}),
							d.init(),
							d
						);
					}
				}
				function g(l) {
					const u = new R.V(new _.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), y.X);
					return new v.Tp(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new o.U(l.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new m.E(),
						profiler: new a.U(),
						logger: new p.V(),
						tracker: new T.J(l.client.globals),
					});
				}
				function I(l) {
					const u = new R.V(new _.E(), y.X).detach(!0);
					return new s.c(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new c.t(l.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new m.E(),
						profiler: new a.U(),
						logger: new p.V(),
						tracker: new T.J(l.client.globals),
					});
				}
				function x(l) {
					const u = new R.V(new _.E(), y.X).detach();
					return new i.Z(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new m.E(),
						profiler: new a.U(),
						logger: new p.V(),
						tracker: new T.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(L, h, e) {
				'use strict';
				e.d(h, { Z: () => s });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					s = (t) => {
						const r = (0, v.li)(null);
						return (
							(0, v.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(i) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, n.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(L, h, e) {
				'use strict';
				e.d(h, { j: () => i });
				var n = Object.prototype.hasOwnProperty;
				function v(s, t, r) {
					for (r of s.keys()) if (i(r, t)) return r;
				}
				function i(s, t) {
					var r, o, c;
					if (s === t) return !0;
					if (s && t && (r = s.constructor) === t.constructor) {
						if (r === Date) return s.getTime() === t.getTime();
						if (r === RegExp) return s.toString() === t.toString();
						if (r === Array) {
							if ((o = s.length) === t.length) for (; o-- && i(s[o], t[o]); );
							return o === -1;
						}
						if (r === Set) {
							if (s.size !== t.size) return !1;
							for (o of s) if (((c = o), (c && typeof c == 'object' && ((c = v(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (r === Map) {
							if (s.size !== t.size) return !1;
							for (o of s) if (((c = o[0]), (c && typeof c == 'object' && ((c = v(t, c)), !c)) || !i(o[1], t.get(c)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (s = new Uint8Array(s)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((o = s.byteLength) === t.byteLength) for (; o-- && s.getInt8(o) === t.getInt8(o); );
							return o === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((o = s.byteLength) === t.byteLength) for (; o-- && s[o] === t[o]; );
							return o === -1;
						}
						if (!r || typeof s == 'object') {
							o = 0;
							for (r in s) if ((n.call(s, r) && ++o && !n.call(t, r)) || !(r in t) || !i(s[r], t[r])) return !1;
							return Object.keys(t).length === o;
						}
					}
					return s !== s && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(L) {
				function h(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(h.keys = () => []), (h.resolve = h), (h.id = '../../node_modules/memoizerific sync recursive'), (L.exports = h);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Results-Results-stories.b49b980d.iframe.bundle.js.map
