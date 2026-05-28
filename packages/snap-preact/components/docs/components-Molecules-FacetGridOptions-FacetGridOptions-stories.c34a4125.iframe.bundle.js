(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7383],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx'(y, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => g, __namedExportsOrder: () => M, default: () => O });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/utilities/snapify.ts');
				const C =
						"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```tsx\nimport { FacetGridOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```tsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```tsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```tsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n",
					O = {
						title: 'Molecules/FacetGridOptions',
						component: m.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(i.oz, { options: { overrides: { code: n.Z } }, children: C }), (0, o.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, o.Y)(h, {})],
						argTypes: {
							values: {
								description: 'Facet.values store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet values store array' } },
								control: { type: 'none' },
							},
							facet: {
								description: 'Facet store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in grid. Not applicable if using horizontal prop',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							gridSize: {
								defaultValue: '45px',
								description: 'Size of each grid item. Does not apply if using `columns` prop',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '45px' } },
								control: { type: 'text' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
							},
							horizontal: {
								defaultValue: !1,
								description: 'Render facet options horizontally',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							previewOnFocus: {
								description: 'Invoke facet value preview upon focus',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							valueProps: {
								description: 'Object of facet value props',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'none' },
							},
							onClick: {
								description: 'Facet option click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...t.F,
						},
					},
					E = s.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
					P = (0, d.PA)(({ args: h, controller: v }) => {
						const _ = v?.store?.facets.filter((x) => x.field == 'size').pop();
						return (0, o.Y)('div', { style: { maxWidth: h?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(m.S, { ...h, values: _.values }) });
					}),
					g = (h, { loaded: { controller: v } }) => (0, o.Y)(P, { args: h, controller: v });
				(g.loaders = [async () => (await E.search(), { controller: E })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: FacetGridOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableFacetGridOptions args={args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(y, a, e) {
				'use strict';
				e.d(a, { S: () => j });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					m = e.n(i),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					M = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useComponent.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(v);
				const x = ({ columns: b, gapSize: D, gridSize: L, theme: r }) =>
						(0, d.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: b ? `repeat(${b}, 1fr)` : `repeat(auto-fill, minmax(${L}, 1fr))`,
							gap: D,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: '1px solid',
								borderColor: r?.variables?.colors?.primary || 'initial',
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${b} - ${2 * Math.round((b + 2) / 2)}px)`,
								margin: `0 ${D} ${D} 0`,
								[`:nth-of-type(${b}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: '#ccc', color: '#333' },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: '#f8f8f8', color: '#333' },
								'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						}),
					j = (0, n.PA)((b) => {
						const D = (0, s.u)(),
							L = (0, C.uk)(),
							c = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, O.LU)() },
							l = (0, E.v6)('facetGridOptions', D, c, b),
							{
								values: f,
								onClick: u,
								previewOnFocus: T,
								valueProps: U,
								facet: A,
								horizontal: I,
								className: z,
								internalClassName: S,
								customComponent: F,
							} = l;
						if (F) {
							const p = (0, h.x)(L?.templates?.library.import.component.facetGridOptions || {}, F);
							if (p) return (0, o.Y)(p, { ...l });
						}
						I && (l.columns = 0);
						const K = (0, P.Z)(l, x),
							w = f || A?.refinedValues;
						return w?.length
							? (0, o.Y)(t._, {
									children: (0, o.Y)('div', {
										...K,
										className: m()('ss__facet-grid-options', z, S),
										children: w.map((p) => {
											const B = {
													gridOption: {
														attributes: {
															'aria-label': `${
																p.filtered
																	? `remove selected filter ${A?.label || ''} - ${p.label}`
																	: A?.label
																	? `filter by ${A?.label} - ${p.label}`
																	: `filter by ${p.label}`
															}`,
														},
													},
												},
												W = _()(B, l.lang || {}),
												G = (0, M.u)(W, { facet: A, value: p });
											return (0, o.Y)('a', {
												className: m()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': p.filtered }),
												href: p.url?.link?.href,
												...U,
												onClick: (R) => {
													p.url?.link?.onClick(R), u && u(R);
												},
												...(T ? (0, g.l)(() => p?.preview && p.preview()) : {}),
												...G.gridOption?.all,
												children: (0, o.Y)('span', {
													className: m()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': p.label.length > 3,
													}),
													children: p.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(y, a, e) {
				'use strict';
				e.d(a, { u: () => o });
				const o = (d, i) => {
					const m = {};
					return (
						Object.keys(d).forEach((n) => {
							const t = d && d[n],
								s = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (s.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: t.value(i) } })
										: (s.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((s.attributes = { 'ss-lang': n }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = t.attributes['aria-label'](i))
											: (s.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](i))
											: (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (s.attributes.title = t.attributes.title(i))
											: (s.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (s.attributes.alt = t.attributes.alt(i)) : (s.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = t.attributes.placeholder(i))
											: (s.attributes.placeholder = t.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': n })),
								(m[n] = s);
						}),
						m
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, a, e) {
				'use strict';
				e.d(a, { l: () => o });
				const o = (d, i = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (n) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									i.focusElem && n.target.focus(), d && d();
								}, i.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, a, e) {
				'use strict';
				e.d(a, { F: () => o });
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
			'./components/src/utilities/snapify.ts'(y, a, e) {
				'use strict';
				e.d(a, { p: () => j });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					x = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(c) {
						const l = c.id;
						if (_[l]) return _[l];
						const f = (_[l] = D({ client: x, controller: c }));
						return (
							f.on('afterStore', async ({ controller: u }, T) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await T();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(c) {
						const l = c.id;
						if (_[l]) return _[l];
						const f = (_[l] = L({ client: x, controller: c }));
						return (
							f.on('afterStore', async ({ controller: u }, T) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await T();
							}),
							f.init(),
							f
						);
					}
					static search(c) {
						const l = c.id;
						if (_[l]) return _[l];
						const f = (_[l] = b({ client: x, controller: c }));
						return (
							f.on('afterStore', async ({ controller: u }, T) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await T();
							}),
							f.init(),
							f
						);
					}
				}
				function b(r) {
					const c = new O.V(new P.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), E.X);
					return new d.Tp(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new s.U(r.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function D(r) {
					const c = new O.V(new P.E(), E.X).detach(!0);
					return new m.c(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new C.t(r.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function L(r) {
					const c = new O.V(new P.E(), E.X).detach();
					return new i.Z(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new g.E(),
						profiler: new M.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, a, e) {
				'use strict';
				e.d(a, { Z: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					m = (n) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && n.className?.includes('lang-') && !n.className?.includes(i) && window?.Prism?.highlightElement(t.current);
							}, [n.className, n.children, t]),
							(0, o.Y)('code', { ...n, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function a(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (y.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetGridOptions-FacetGridOptions-stories.c34a4125.iframe.bundle.js.map
