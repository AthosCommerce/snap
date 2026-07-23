(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7383],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx'(O, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => f, __namedExportsOrder: () => M, default: () => P });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const C =
						"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```tsx\nimport { FacetGridOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```tsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```tsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```tsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FacetGridOptions component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `gridOption` | Grid option element text/attributes | `facet` (ValueFacet), `value` (FacetValue) |\n\n### Example\n\n```tsx\n<FacetGridOptions\n	values={facet.values}\n	lang={{\n		gridOption: {\n			attributes: {\n				'aria-label': (data) => `${data.value.filtered ? 'remove' : 'apply'} filter ${data.facet?.label} - ${data.value.label}`,\n			},\n		},\n	}}\n/>\n```\n",
					P = {
						title: 'Molecules/FacetGridOptions',
						component: c.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: C }), (0, o.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(g) => (0, o.Y)(g, {})],
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
					E = n.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
					x = (0, d.PA)(({ args: g, controller: b }) => {
						const p = b?.store?.facets.filter((D) => D.field == 'size').pop();
						return (0, o.Y)('div', { style: { maxWidth: g?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(c.S, { ...g, values: p.values }) });
					}),
					f = (g, { loaded: { controller: b } }) => (0, o.Y)(x, { args: g, controller: b });
				(f.loaders = [async () => (await E.search(), { controller: E })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(O, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					c = e.n(l),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(g);
				const p = ({ columns: y, gapSize: T, gridSize: A, theme: L }) =>
						(0, d.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: y ? `repeat(${y}, 1fr)` : `repeat(auto-fill, minmax(${A}, 1fr))`,
							gap: T,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: '1px solid',
								borderColor: L?.variables?.colors?.primary || 'initial',
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${y} - ${2 * Math.round((y + 2) / 2)}px)`,
								margin: `0 ${T} ${T} 0`,
								[`:nth-of-type(${y}n)`]: { marginRight: '0' },
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
					D = (0, r.PA)((y) => {
						const T = (0, n.u)(),
							L = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, C.LU)() },
							s = (0, P.v6)('facetGridOptions', T, L, y),
							{ values: i, onClick: m, previewOnFocus: _, valueProps: u, facet: v, horizontal: w, className: R, internalClassName: U } = s,
							{ overrideElement: I, shouldRenderDefault: z } = (0, M._)('facetGridOptions', s);
						if (!z) return I;
						w && (s.columns = 0);
						const S = (0, E.Z)(s, p),
							F = i || v?.refinedValues;
						return F?.length
							? (0, o.Y)(t._, {
									children: (0, o.Y)('div', {
										...S,
										className: c()('ss__facet-grid-options', R, U),
										children: F.map((h) => {
											const K = {
													gridOption: {
														attributes: {
															'aria-label': `${
																h.filtered
																	? `remove selected filter ${v?.label || ''} - ${h.label}`
																	: v?.label
																	? `filter by ${v?.label} - ${h.label}`
																	: `filter by ${h.label}`
															}`,
														},
													},
												},
												B = b()(K, s.lang || {}),
												W = (0, f.u)(B, { facet: v, value: h });
											return (0, o.Y)('a', {
												className: c()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': h.filtered }),
												href: h.url?.link?.href,
												...u,
												onClick: (j) => {
													h.url?.link?.onClick(j), m && m(j);
												},
												...(_ ? (0, x.l)(() => h?.preview && h.preview()) : {}),
												...W.gridOption?.all,
												children: (0, o.Y)('span', {
													className: c()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': h.label.length > 3,
													}),
													children: h.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
				e.d(a, ['S', 0, D]);
			},
			'./components/src/hooks/useLang.tsx'(O, a, e) {
				'use strict';
				const o = (d, l) => {
					const c = {};
					return (
						Object.keys(d).forEach((r) => {
							const t = d && d[r],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(l))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(l)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(l))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': r })),
								(c[r] = n);
						}),
						c
					);
				};
				e.d(a, ['u', 0, o]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(O, a, e) {
				'use strict';
				const o = (d, l = { delay: 333, focusElem: !0 }) => {
					let c;
					return {
						onMouseEnter: (r) => {
							clearTimeout(c),
								(c = window.setTimeout(() => {
									l.focusElem && r.target.focus(), d && d();
								}, l.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(c);
						},
					};
				};
				e.d(a, ['l', 0, o]);
			},
			'./components/src/utilities/componentArgs.ts'(O, a, e) {
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
				e.d(a, ['F', 0, o]);
			},
			'./components/src/utilities/snapify.ts'(O, a, e) {
				'use strict';
				e.d(a, { p: () => y });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					D = { globals: { siteId: 'atkzs2' } };
				class y {
					static recommendation(i) {
						const m = i.id;
						if (p[m]) return p[m];
						const _ = (p[m] = A({ client: D, controller: i }));
						return (
							_.on('afterStore', async ({ controller: u }, v) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(i) {
						const m = i.id;
						if (p[m]) return p[m];
						const _ = (p[m] = L({ client: D, controller: i }));
						return (
							_.on('afterStore', async ({ controller: u }, v) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static search(i) {
						const m = i.id;
						if (p[m]) return p[m];
						const _ = (p[m] = T({ client: D, controller: i }));
						return (
							_.on('afterStore', async ({ controller: u }, v) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
				}
				function T(s) {
					const i = new P.V(new x.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), E.X);
					return new d.Tp(s.controller, {
						client: new r.K(s.client.globals, s.client.config),
						store: new n.U(s.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new g.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function A(s) {
					const i = new P.V(new x.E(), E.X).detach(!0);
					return new c.c(s.controller, {
						client: new r.K(s.client.globals, s.client.config),
						store: new C.t(s.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new g.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function L(s) {
					const i = new P.V(new x.E(), E.X).detach();
					return new l.Z(s.controller, {
						client: new r.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new g.V(),
						tracker: new b.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					c = (r) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(l) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, o.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, c]);
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function a(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (O.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetGridOptions-FacetGridOptions-stories.9742c653.iframe.bundle.js.map
