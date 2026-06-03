(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[401],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(O, c, e) {
				'use strict';
				e.d(c, { P: () => s });
				const s = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(O, c, e) {
				'use strict';
				e.d(c, { G: () => a });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(l, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(l, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(O, c, e) {
				'use strict';
				e.d(c, { Z: () => s });
				function s(l, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof l != 'number' || Number.isNaN(l)) return;
					const n = a(l, t.decimalPlaces).split('.');
					(n[0] = n[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (n[1] = (n[1] || '').padEnd(t.decimalPlaces, '0'));
					let r = n.join(t.decimalSeparator);
					return t.symbolAfter ? (r = r + t.symbol) : (r = t.symbol + r), r;
				}
				function a(l, o) {
					const t = l.toString(),
						n = t.indexOf('.'),
						r = n == -1 ? t.length : 1 + n + (o || -1);
					return t.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(O, c, e) {
				'use strict';
				e.d(c, { p: () => s });
				function s(a) {
					if (typeof a != 'string') return a;
					let l = a.toLowerCase();
					return (l = l.replace(/[^\w\s]/g, '').trim()), (l = l.replace(/\s/g, '-')), l;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(O, c, e) {
				'use strict';
				e.d(c, { x: () => s });
				function s(a, l, o) {
					if (typeof a != 'string' || a.length <= l) return a;
					const t = a.lastIndexOf(' ', l),
						n = t != -1 ? t : l - 1;
					return a.substr(0, n) + (o || '');
				}
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx'(O, c, e) {
				'use strict';
				e.r(c), e.d(c, { Grid: () => g, List: () => d, __namedExportsOrder: () => E, default: () => i });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const r = `# RecommendationGrid

Renders a List of results utilizing \`<Result />\` components.

## Sub-components
- Result

## Usage

### controller
The \`controller\` prop specifies a reference to the recommendation controller.

\`\`\`tsx
<RecommendationGrid controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`tsx
<RecommendationGrid results={controller.store.results} />
\`\`\`

### title
The \`title\` prop specifies the title text to render.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} title={'Recommended For You'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display. 

\`\`\`tsx
<RecommendationGrid results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} rows={2} />
\`\`\`

### trim
The \`trim\` prop specifies whether we should trim off excess results in order to have equal rows and columns.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} rows={3} trim={true} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} gapSize={'10px'} />
\`\`\`


### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
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

\`\`\`tsx
<RecommendationGrid results={controller.store.results} breakpoints={breakpoints} />
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

<RecommendationGrid results={controller.store.results} resultComponent={CustomResult} />
\`\`\``,
					i = {
						title: 'Templates/RecommendationGrid',
						component: l.q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(a.oz, { options: { overrides: { code: o.Z } }, children: r }), (0, s.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, s.Y)(_, {})],
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
					m = n.p.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					d = (_, { loaded: { controller: y } }) =>
						(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(l.q, { ..._, controller: y, results: y?.store?.results }) });
				(d.args = { columns: 10, rows: 1 }), (d.loaders = [async () => (await m.search(), { controller: m })]);
				const g = (_, { loaded: { controller: y } }) =>
					(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(l.q, { ..._, controller: y, results: y?.store?.results }) });
				(g.args = { columns: 4 }),
					(g.loaders = [async () => (await m.search(), { controller: m })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
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
								...d.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const E = ['List', 'Grid'];
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(O, c, e) {
				'use strict';
				e.d(c, { q: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					n = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(n),
					i = e('./components/src/components/Molecules/Result/Result.tsx'),
					m = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useDisplaySettings.tsx'),
					D = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					v = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					x = e('../../node_modules/preact/compat/dist/compat.module.js'),
					w = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					L = e('./components/src/hooks/useIntersection.tsx');
				const u = ({ gapSize: h, columns: R }) =>
						(0, l.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: h,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${R}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					p = (0, a.PA)((h) => {
						const R = (0, y.u)(),
							b = (0, T.LU)(),
							C = {
								results: h.controller?.store?.results,
								gapSize: '20px',
								title: h.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: b,
							},
							S = { name: h.controller?.store?.profile?.tag?.toLowerCase(), ...h };
						let f = (0, g.v6)('recommendationGrid', R, C, S);
						if (!(h.theme?.type == 'templates' || R?.type == 'templates')) {
							const I = (0, P.X)(f?.breakpoints || {}),
								$ = r()(f?.theme || {}, I?.theme || {}, { arrayMerge: (q, X) => X });
							f = { ...f, ...I, theme: $ };
						}
						const {
								disableStyles: N,
								title: k,
								resultComponent: U,
								trim: B,
								lazyRender: V,
								className: z,
								internalClassName: G,
								treePath: W,
								theme: Y,
								controller: j,
							} = f,
							A = { enabled: !0, offset: '10%', ...V },
							J = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, d.s)({ disableStyles: N }), theme: f?.theme } };
						let M = f.results || j.store.results;
						if (!f.columns && !f.rows) (f.rows = 1), (f.columns = M.length);
						else if (f.columns && !f.rows) {
							if (((f.rows = Math.floor(M.length / f.columns)), B)) {
								const I = M.length % f.columns;
								M = M.slice(0, M.length - I);
							}
						} else if (f.rows && !f.columns) {
							if (B) {
								const I = M.length % f.rows;
								M = M.slice(0, M.length - I);
							}
							f.columns = Math.ceil(M.length / f.rows);
						} else f?.columns && f?.rows && f.columns > 0 && f.rows > 0 && (M = M?.slice(0, f.columns * f.rows));
						const F = (0, E.Z)(f, u),
							[H, Z] = (0, x.useState)(!1),
							K = (0, w.li)(null);
						return (
							(!A?.enabled || (0, L.v)(K, `${A.offset} 0px ${A.offset} 0px`, !0)) && Z(!0),
							M?.length
								? (0, s.Y)(_._, {
										children: (0, s.Y)('div', {
											...F,
											ref: K,
											className: t()('ss__recommendation-grid', z, G),
											children: H
												? (0, s.FD)(D.l, {
														controller: j,
														children: [
															k && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: k }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: M.map((I) =>
																	U && j
																		? (0, m.Y)(U, { controller: j, result: I, theme: Y, treePath: W })
																		: (0, s.Y)(v.o, {
																				result: I,
																				controller: j,
																				children: (0, s.Y)(i.Q, { ...J.result, result: I, controller: j, treePath: W }, I.id),
																		  })
																),
															}),
														],
												  })
												: (0, s.Y)(D.l, {
														controller: j,
														children: M.map((I) => (0, s.Y)(v.o, { controller: j, result: I, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(O, c, e) {
				'use strict';
				e.d(c, { l: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					n = e.n(t),
					r = e('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, l.AH)({}),
					m = (0, o.PA)((d) => {
						const { children: g, className: E, internalClassName: _ } = d,
							y = (0, a.v2)(g),
							T = (0, r.Z)(d, i);
						return y.length ? (0, s.Y)('div', { className: n()('ss__recommendation-profile-tracker', E, _), ...T, children: g }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(O, c, e) {
				'use strict';
				e.d(c, { o: () => d });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const m = { ResultTracker: () => (0, a.AH)({}) },
					d = (0, l.PA)((g) => {
						const E = (0, n.u)(),
							_ = (0, r.v6)('resultTracker', E, {}, g),
							y = { impression: !0, click: !0 },
							{ children: T, result: P, track: D, controller: v, className: x, internalClassName: w, disableStyles: L, style: u } = _,
							p = { ...y, ...D },
							{ ref: h, inViewport: R } = (0, i.Q)();
						R && p.impression && v?.track.product.impression(P);
						const b = {};
						return (
							L ? u && (b.css = [u]) : (b.css = [m.ResultTracker(), u]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${v?.type}-result-tracker`, x, w),
								onClick: (C) => {
									p.click && v?.track.product.click(C, P);
								},
								ref: h,
								...b,
								children: T,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(O, c, e) {
				'use strict';
				e.d(c, { v: () => a });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = (l, o = '0px', t = !1) => {
					const [n, r] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const i = new IntersectionObserver(
								([m]) => {
									r(m.isIntersecting), t && m.isIntersecting && i.unobserve(l.current);
								},
								{ rootMargin: o }
							);
							return (
								l.current && i.observe(l.current),
								() => {
									i.unobserve(l.current);
								}
							);
						}, []),
						n
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(O, c, e) {
				'use strict';
				e.d(c, { v: () => l });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					l = (t, n = {}) => {
						const { rootMargin: r = '0px', fireOnce: i = !1, threshold: m = 0, minVisibleTime: d = 0 } = n,
							[g, E] = (0, s.J0)(!1),
							_ = (0, s.li)(null),
							y = (0, s.li)(null),
							[T, P] = (0, s.J0)(0),
							D = (0, s.hb)((v) => {
								(t.current = v), P((x) => x + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								E(!1);
								let v = null,
									x = null;
								if (!window.IntersectionObserver || !t.current) return;
								const w = () => {
										x && (window.clearInterval(x), (x = null));
									},
									L = () => {
										d > 0
											? ((y.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													E(!0), i && t.current && v && v.unobserve(t.current);
											  }, d)))
											: (E(!0), i && t.current && v && v.unobserve(t.current));
									},
									u = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (y.current = null), E(!1);
									};
								return (
									(v = new IntersectionObserver(
										([p]) => {
											p.isIntersecting
												? t.current && o(t.current)
													? (w(), L())
													: (u(),
													  x ||
															(x = window.setInterval(() => {
																if (!t.current) {
																	w();
																	return;
																}
																o(t.current) && (w(), L());
															}, a)))
												: (w(), u());
										},
										{ rootMargin: r, threshold: m }
									)),
									t.current && v.observe(t.current),
									() => {
										E(!1), w(), _.current && window.clearTimeout(_.current), v && t.current && v.unobserve(t.current);
									}
								);
							}, [t, T]),
							{ inViewport: g, updateRef: D }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(O, c, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(O, c, e) {
				'use strict';
				e.d(c, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const l = 0.7,
					o = 1e3;
				function t(n) {
					const r = (0, s.li)(null),
						{ inViewport: i, updateRef: m } = (0, a.v)(r, { ...n, fireOnce: !0, threshold: l, minVisibleTime: o });
					return { ref: r, inViewport: i, updateRef: m };
				}
			},
			'./components/src/utilities/snapify.ts'(O, c, e) {
				'use strict';
				e.d(c, { p: () => v });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					m = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					D = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(p) {
						const h = p.id;
						if (P[h]) return P[h];
						const R = (P[h] = w({ client: D, controller: p }));
						return (
							R.on('afterStore', async ({ controller: b }, C) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await C();
							}),
							R.init(),
							R
						);
					}
					static autocomplete(p) {
						const h = p.id;
						if (P[h]) return P[h];
						const R = (P[h] = L({ client: D, controller: p }));
						return (
							R.on('afterStore', async ({ controller: b }, C) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await C();
							}),
							R.init(),
							R
						);
					}
					static search(p) {
						const h = p.id;
						if (P[h]) return P[h];
						const R = (P[h] = x({ client: D, controller: p }));
						return (
							R.on('afterStore', async ({ controller: b }, C) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await C();
							}),
							R.init(),
							R
						);
					}
				}
				function x(u) {
					const p = new m.V(new g.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), d.X);
					return new a.Tp(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new r.U(u.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new E.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new T.J(u.client.globals),
					});
				}
				function w(u) {
					const p = new m.V(new g.E(), d.X).detach(!0);
					return new o.c(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new i.t(u.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new E.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new T.J(u.client.globals),
					});
				}
				function L(u) {
					const p = new m.V(new g.E(), d.X).detach();
					return new l.Z(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new n.Y(u.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new E.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new T.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, c, e) {
				'use strict';
				e.d(c, { Z: () => o });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					o = (t) => {
						const n = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								n.current && t.className?.includes('lang-') && !t.className?.includes(l) && window?.Prism?.highlightElement(n.current);
							}, [t.className, t.children, n]),
							(0, s.Y)('code', { ...t, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(O, c, e) {
				'use strict';
				e.d(c, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
				function s(a, l) {
					var o = {
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
						t = {};
					for (var n in o) t[o[n]] = n;
					var r = {};
					(a.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var m,
							d,
							g = t[this.toHex()];
						if (g) return g;
						if (i?.closest) {
							var E = this.toRgb(),
								_ = 1 / 0,
								y = 'black';
							if (!r.length) for (var T in o) r[T] = new a(o[T]).toRgb();
							for (var P in o) {
								var D = ((m = E), (d = r[P]), Math.pow(m.r - d.r, 2) + Math.pow(m.g - d.g, 2) + Math.pow(m.b - d.b, 2));
								D < _ && ((_ = D), (y = P));
							}
							return y;
						}
					}),
						l.string.push([
							function (i) {
								var m = i.toLowerCase(),
									d = m === 'transparent' ? '#0000' : o[m];
								return d ? new a(d).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(O, c, e) {
				'use strict';
				e.d(c, { j: () => l });
				var s = Object.prototype.hasOwnProperty;
				function a(o, t, n) {
					for (n of o.keys()) if (l(n, t)) return n;
				}
				function l(o, t) {
					var n, r, i;
					if (o === t) return !0;
					if (o && t && (n = o.constructor) === t.constructor) {
						if (n === Date) return o.getTime() === t.getTime();
						if (n === RegExp) return o.toString() === t.toString();
						if (n === Array) {
							if ((r = o.length) === t.length) for (; r-- && l(o[r], t[r]); );
							return r === -1;
						}
						if (n === Set) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((i = r), (i && typeof i == 'object' && ((i = a(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (n === Map) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((i = r[0]), (i && typeof i == 'object' && ((i = a(t, i)), !i)) || !l(r[1], t.get(i)))) return !1;
							return !0;
						}
						if (n === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (n === DataView) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o[r] === t[r]; );
							return r === -1;
						}
						if (!n || typeof o == 'object') {
							r = 0;
							for (n in o) if ((s.call(o, n) && ++r && !s.call(t, n)) || !(n in t) || !l(o[n], t[n])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function c(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (O.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationGrid-RecommendationGrid-stories.a4fc9757.iframe.bundle.js.map
