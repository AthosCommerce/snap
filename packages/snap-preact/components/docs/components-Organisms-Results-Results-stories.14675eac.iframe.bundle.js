(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3715],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(T, i, e) {
				'use strict';
				e.d(i, { P: () => n });
				const n = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(T, i, e) {
				'use strict';
				e.d(i, { G: () => a });
				var n = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(l, s) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...s };
					return (0, n.Z)(l, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(T, i, e) {
				'use strict';
				e.d(i, { Z: () => n });
				function n(l, s) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...s };
					if (typeof l != 'number' || Number.isNaN(l)) return;
					const r = a(l, t.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(t.decimalPlaces, '0'));
					let o = r.join(t.decimalSeparator);
					return t.symbolAfter ? (o = o + t.symbol) : (o = t.symbol + o), o;
				}
				function a(l, s) {
					const t = l.toString(),
						r = t.indexOf('.'),
						o = r == -1 ? t.length : 1 + r + (s || -1);
					return t.substr(0, o);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(T, i, e) {
				'use strict';
				e.d(i, { p: () => n });
				function n(a) {
					if (typeof a != 'string') return a;
					let l = a.toLowerCase();
					return (l = l.replace(/[^\w\s]/g, '').trim()), (l = l.replace(/\s/g, '-')), l;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(T, i, e) {
				'use strict';
				e.d(i, { x: () => n });
				function n(a, l, s) {
					if (typeof a != 'string' || a.length <= l) return a;
					const t = a.lastIndexOf(' ', l),
						r = t != -1 ? t : l - 1;
					return a.substr(0, r) + (s || '');
				}
			},
			'./components/src/components/Organisms/Results/Results.stories.tsx'(T, i, e) {
				'use strict';
				e.r(i), e.d(i, { Grid: () => _, List: () => f, __namedExportsOrder: () => u, default: () => y });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Organisms/Results/Results.tsx'),
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
					y = {
						title: 'Organisms/Results',
						component: l.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(a.oz, { options: { overrides: { code: s.Z } }, children: c }), (0, n.Y)(a.uY, { story: a.h1 })],
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
					m = r.p.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
					_ = (p, { loaded: { controller: M } }) =>
						(0, n.Y)('div', {
							style: { maxWidth: p?.layout == 'list' ? '650px' : '800px' },
							children: (0, n.Y)(l.n, { ...p, controller: M, results: M?.store?.results }),
						});
				(_.loaders = [async () => (await m.search(), { controller: m })]), (_.args = { layout: 'grid' });
				const f = (p, { loaded: { controller: M } }) =>
					(0, n.Y)('div', {
						style: { maxWidth: p?.layout == 'list' ? '650px' : '800px' },
						children: (0, n.Y)(l.n, { ...p, controller: M, results: M?.store?.results, layout: o.V.list }),
					});
				(f.loaders = [async () => (await m.search(), { controller: m })]),
					(f.args = { layout: 'list' }),
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
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					});
				const u = ['Grid', 'List'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(T, i, e) {
				'use strict';
				e.d(i, { _: () => v });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					t = e('./components/src/providers/cache.tsx'),
					r = e('./components/src/providers/controller.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/withTracking.tsx'),
					y = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/hooks/useA11y.tsx'),
					p = e('./components/src/types.ts'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/hooks/useComponent.tsx');
				const x = ({ width: b }) =>
						(0, a.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: b,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					v = (0, r.Bk)(
						(0, c.W)(
							(0, M.PA)((b) => {
								const C = (0, o.u)(),
									I = (0, y.uk)(),
									d = (0, m.LU)(),
									h = { layout: p.V.grid, width: 'auto', treePath: d },
									O = (0, _.v6)('inlineBanner', C, h, b),
									{ banner: g, className: D, internalClassName: R, disableA11y: L, layout: k, onClick: w, customComponent: j } = O;
								if (j) {
									const E = (0, P.x)(I?.templates?.library.import.component.inlineBanner || {}, j);
									if (E) return (0, n.Y)(E, { ...O });
								}
								const U = (0, f.Z)(O, x);
								return g && g.value
									? (0, n.Y)(t._, {
											children: (0, n.Y)('div', {
												onClick: (E) => {
													w && w(E, g);
												},
												role: 'article',
												ref: (E) => {
													L || (0, u.iy)(E), b.trackingRef(E);
												},
												className: s()('ss__inline-banner', `ss__inline-banner--${k}`, D, R),
												...U,
												dangerouslySetInnerHTML: { __html: g.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(T, i, e) {
				'use strict';
				e.d(i, { n: () => D });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					o = e.n(r),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					y = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					m = e('./components/src/components/Molecules/Result/Result.tsx'),
					_ = e('./components/src/types.ts'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/withTracking.tsx'),
					b = e('./components/src/providers/snap.tsx'),
					C = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/hooks/useDisplaySettings.tsx'),
					d = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					h = e('./components/src/hooks/useComponent.tsx');
				const O = ({ gapSize: R, columns: L }) =>
						(0, a.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: R,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${L}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / L}% - (${L - 1} * ${R} / ${L} ) )`,
								marginRight: R,
								marginBottom: R,
								[`&:nth-of-type(${L}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${L})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					g = (0, v.W)(m.Q),
					D = (0, l.PA)((R) => {
						const L = (0, x.u)(),
							k = (0, b.uk)(),
							w = (0, C.LU)(),
							j = {
								0: { columns: R.columns || 1 },
								540: { columns: R.columns || 2 },
								768: { columns: R.columns || 3 },
								991: { columns: R.columns || 4 },
							},
							U = { results: R.controller?.store?.results, columns: 4, gapSize: '20px', layout: _.V.grid, breakpoints: j, treePath: w };
						let E = (0, p.v6)('results', L, U, R);
						if (!(R.theme?.type == 'templates' || L?.type == 'templates')) {
							const A = (0, I.X)(E?.breakpoints || {}),
								Z = o()(E?.theme || {}, A?.theme || {}, { arrayMerge: (X, F) => F });
							E = { ...E, ...A, theme: Z };
						}
						const {
							disableStyles: S,
							className: z,
							internalClassName: J,
							layout: $,
							theme: H,
							controller: B,
							treePath: W,
							customComponent: N,
							resultComponent: V,
						} = E;
						if (N) {
							const A = (0, h.x)(k?.templates?.library.import.component.results || {}, N);
							if (A) return (0, n.Y)(A, { ...E });
						}
						const Y = {
							result: { internalClassName: 'ss__results__result', ...(0, u.s)({ disableStyles: S }), theme: E?.theme, treePath: W },
							inlineBanner: {
								controller: B,
								internalClassName: 'ss__results__inline-banner',
								...(0, u.s)({ disableStyles: S }),
								theme: E?.theme,
								treePath: W,
							},
						};
						let K = E.results;
						E?.columns && E?.rows && E.columns > 0 && E.rows > 0 && (K = E.results?.slice(0, E.columns * E.rows));
						const G = (0, M.Z)({ ...E, columns: $ == _.V.list ? 1 : E.columns }, O);
						return K?.length
							? (0, n.Y)(P._, {
									children: (0, n.Y)('div', {
										...G,
										className: t()('ss__results', `ss__results-${E.layout}`, z, J),
										children: K.map((A) =>
											A.type === c.c.BANNER
												? (0, a.n)(y._, { ...Y.inlineBanner, key: A.id, banner: A, layout: E.layout })
												: V && B
												? (0, n.Y)(d.o, {
														result: A,
														controller: B,
														children: (0, f.Y)(V, { key: A.id, controller: B, result: A, theme: H, treePath: W }),
												  })
												: (0, n.Y)(g, { ...Y.result, result: A, layout: E.layout, controller: B }, A.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(T, i, e) {
				'use strict';
				e.d(i, { o: () => m });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const y = { ResultTracker: () => (0, a.AH)({}) },
					m = (0, l.PA)((_) => {
						const f = (0, r.u)(),
							u = (0, o.v6)('resultTracker', f, {}, _),
							p = { impression: !0, click: !0 },
							{ children: M, result: P, track: x, controller: v, className: b, internalClassName: C, disableStyles: I, style: d } = u,
							h = { ...p, ...x },
							{ ref: O, inViewport: g } = (0, c.Q)();
						g && h.impression && v?.track.product.impression(P);
						const D = {};
						return (
							I ? d && (D.css = [d]) : (D.css = [y.ResultTracker(), d]),
							(0, n.Y)('div', {
								className: t()('ss__result-tracker', `ss__${v?.type}-result-tracker`, b, C),
								onClick: (R) => {
									h.click && v?.track.product.click(R, P);
								},
								ref: O,
								...D,
								children: M,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(T, i, e) {
				'use strict';
				e.d(i, { v: () => l });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					l = (t, r = {}) => {
						const { rootMargin: o = '0px', fireOnce: c = !1, threshold: y = 0, minVisibleTime: m = 0 } = r,
							[_, f] = (0, n.J0)(!1),
							u = (0, n.li)(null),
							p = (0, n.li)(null),
							[M, P] = (0, n.J0)(0),
							x = (0, n.hb)((v) => {
								(t.current = v), P((b) => b + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								f(!1);
								let v = null,
									b = null;
								if (!window.IntersectionObserver || !t.current) return;
								const C = () => {
										b && (window.clearInterval(b), (b = null));
									},
									I = () => {
										m > 0
											? ((p.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													f(!0), c && t.current && v && v.unobserve(t.current);
											  }, m)))
											: (f(!0), c && t.current && v && v.unobserve(t.current));
									},
									d = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (p.current = null), f(!1);
									};
								return (
									(v = new IntersectionObserver(
										([h]) => {
											h.isIntersecting
												? t.current && s(t.current)
													? (C(), I())
													: (d(),
													  b ||
															(b = window.setInterval(() => {
																if (!t.current) {
																	C();
																	return;
																}
																s(t.current) && (C(), I());
															}, a)))
												: (C(), d());
										},
										{ rootMargin: o, threshold: y }
									)),
									t.current && v.observe(t.current),
									() => {
										f(!1), C(), u.current && window.clearTimeout(u.current), v && t.current && v.unobserve(t.current);
									}
								);
							}, [t, M]),
							{ inViewport: _, updateRef: x }
						);
					};
				function s(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(T, i, e) {
				'use strict';
				e.d(i, { N: () => s, W: () => t });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('./components/src/utilities/createImpressionObserver.ts'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'sstracking';
				function t(r) {
					const o = r;
					return (y) => {
						const { controller: m, result: _, banner: f, type: u, content: p, ...M } = y;
						if (y.trackingRef) return (0, n.Y)(o, { ...y });
						!m && (!u || !p) && console.warn('Warning: No controller provided to withTracking', y),
							!_ && !f && (!u || !p) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: P, inViewport: x, updateRef: v } = (0, a.Q)(),
							b = (_ || f || (u && p?.[u]?.[0]))?.responseId,
							C = (0, l.li)(b),
							I = (0, l.li)(!1);
						C.current !== b && (I.current = !0),
							(0, l.vJ)(() => {
								C.current !== b && ((C.current = b), v(P.current));
							}, [b, v]),
							(0, l.vJ)(() => {
								I.current && !x && (I.current = !1);
							}, [x, b]);
						const d = u && p && !_ && ['search', 'autocomplete'].includes(m?.type || '');
						x && !I.current && (d ? m?.track.banner.impression(p[u][0]) : _?.bundleSeed || m?.track.product.impression(_ || f));
						const h = (0, l.hb)(
							(g) => {
								d ? m?.track.banner.click(g, p[u][0]) : m?.track.product.click(g, _ || f);
							},
							[m, _, f, u, p]
						);
						(0, l.vJ)(() => {
							const g = P.current;
							if (g)
								return (
									g.setAttribute(s, 'true'),
									g.addEventListener('click', h, !0),
									() => {
										g.removeEventListener('click', h, !0);
									}
								);
						}, [h]);
						const O = {
							...M,
							controller: m,
							result: _,
							banner: f,
							type: u,
							content: p,
							trackingRef: (0, l.hb)(
								(g) => {
									v(g);
								},
								[v]
							),
						};
						return (0, n.Y)(o, { ...O });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(T, i, e) {
				'use strict';
				e.d(i, { F: () => n });
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
			'./components/src/utilities/createImpressionObserver.ts'(T, i, e) {
				'use strict';
				e.d(i, { Q: () => t });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const l = 0.7,
					s = 1e3;
				function t(r) {
					const o = (0, n.li)(null),
						{ inViewport: c, updateRef: y } = (0, a.v)(o, { ...r, fireOnce: !0, threshold: l, minVisibleTime: s });
					return { ref: o, inViewport: c, updateRef: y };
				}
			},
			'./components/src/utilities/snapify.ts'(T, i, e) {
				'use strict';
				e.d(i, { p: () => v });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					x = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(h) {
						const O = h.id;
						if (P[O]) return P[O];
						const g = (P[O] = C({ client: x, controller: h }));
						return (
							g.on('afterStore', async ({ controller: D }, R) => {
								D.log.debug('controller', D), D.log.debug('store', D.store.toJSON()), await R();
							}),
							g.init(),
							g
						);
					}
					static autocomplete(h) {
						const O = h.id;
						if (P[O]) return P[O];
						const g = (P[O] = I({ client: x, controller: h }));
						return (
							g.on('afterStore', async ({ controller: D }, R) => {
								D.log.debug('controller', D), D.log.debug('store', D.store.toJSON()), await R();
							}),
							g.init(),
							g
						);
					}
					static search(h) {
						const O = h.id;
						if (P[O]) return P[O];
						const g = (P[O] = b({ client: x, controller: h }));
						return (
							g.on('afterStore', async ({ controller: D }, R) => {
								D.log.debug('controller', D), D.log.debug('store', D.store.toJSON()), await R();
							}),
							g.init(),
							g
						);
					}
				}
				function b(d) {
					const h = new y.V(new _.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), m.X);
					return new a.Tp(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new o.U(d.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new f.E(),
						profiler: new u.U(),
						logger: new p.V(),
						tracker: new M.J(d.client.globals),
					});
				}
				function C(d) {
					const h = new y.V(new _.E(), m.X).detach(!0);
					return new s.c(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new c.t(d.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new f.E(),
						profiler: new u.U(),
						logger: new p.V(),
						tracker: new M.J(d.client.globals),
					});
				}
				function I(d) {
					const h = new y.V(new _.E(), m.X).detach();
					return new l.Z(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new r.Y(d.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new f.E(),
						profiler: new u.U(),
						logger: new p.V(),
						tracker: new M.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, i, e) {
				'use strict';
				e.d(i, { Z: () => s });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					s = (t) => {
						const r = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(l) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, n.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(T, i, e) {
				'use strict';
				e.d(i, { A: () => n }), Object.defineProperty(n, 'name', { value: 'default', configurable: !0 });
				function n(a, l) {
					var s = {
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
					for (var r in s) t[s[r]] = r;
					var o = {};
					(a.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var y,
							m,
							_ = t[this.toHex()];
						if (_) return _;
						if (c?.closest) {
							var f = this.toRgb(),
								u = 1 / 0,
								p = 'black';
							if (!o.length) for (var M in s) o[M] = new a(s[M]).toRgb();
							for (var P in s) {
								var x = ((y = f), (m = o[P]), Math.pow(y.r - m.r, 2) + Math.pow(y.g - m.g, 2) + Math.pow(y.b - m.b, 2));
								x < u && ((u = x), (p = P));
							}
							return p;
						}
					}),
						l.string.push([
							function (c) {
								var y = c.toLowerCase(),
									m = y === 'transparent' ? '#0000' : s[y];
								return m ? new a(m).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(T, i, e) {
				'use strict';
				e.d(i, { j: () => l });
				var n = Object.prototype.hasOwnProperty;
				function a(s, t, r) {
					for (r of s.keys()) if (l(r, t)) return r;
				}
				function l(s, t) {
					var r, o, c;
					if (s === t) return !0;
					if (s && t && (r = s.constructor) === t.constructor) {
						if (r === Date) return s.getTime() === t.getTime();
						if (r === RegExp) return s.toString() === t.toString();
						if (r === Array) {
							if ((o = s.length) === t.length) for (; o-- && l(s[o], t[o]); );
							return o === -1;
						}
						if (r === Set) {
							if (s.size !== t.size) return !1;
							for (o of s) if (((c = o), (c && typeof c == 'object' && ((c = a(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (r === Map) {
							if (s.size !== t.size) return !1;
							for (o of s) if (((c = o[0]), (c && typeof c == 'object' && ((c = a(t, c)), !c)) || !l(o[1], t.get(c)))) return !1;
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
							for (r in s) if ((n.call(s, r) && ++o && !n.call(t, r)) || !(r in t) || !l(s[r], t[r])) return !1;
							return Object.keys(t).length === o;
						}
					}
					return s !== s && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function i(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (T.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Results-Results-stories.14675eac.iframe.bundle.js.map
