(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7383],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx'(P, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => v, __namedExportsOrder: () => T, default: () => s });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					p = e('./components/src/utilities/componentArgs.ts'),
					g = e('./components/src/utilities/snapify.ts');
				const t =
						"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```tsx\nimport { FacetGridOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```tsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```tsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```tsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```tsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FacetGridOptions component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `gridOption` | Grid option element text/attributes | `facet` (ValueFacet), `value` (FacetValue) |\n\n### Example\n\n```tsx\n<FacetGridOptions\n	values={facet.values}\n	lang={{\n		gridOption: {\n			attributes: {\n				'aria-label': (data) => `${data.value.filtered ? 'remove' : 'apply'} filter ${data.facet?.label} - ${data.value.label}`,\n			},\n		},\n	}}\n/>\n```\n",
					s = {
						title: 'Molecules/FacetGridOptions',
						component: i.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(u.oz, { options: { overrides: { code: a.Z } }, children: t }), (0, o.Y)(u.uY, { story: u.h1 })],
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
							...p.F,
						},
					},
					x = g.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
					D = (0, d.PA)(({ args: h, controller: O }) => {
						const _ = O?.store?.facets.filter((C) => C.field == 'size').pop();
						return (0, o.Y)('div', { style: { maxWidth: h?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(i.S, { ...h, values: _.values }) });
					}),
					v = (h, { loaded: { controller: O } }) => (0, o.Y)(D, { args: h, controller: O });
				(v.loaders = [async () => (await x.search(), { controller: x })]),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
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
								...v.parameters?.docs?.source,
							},
						},
					});
				const T = ['Default'];
			},
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(P, r, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					i = e.n(u),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					v = e('./components/src/hooks/useLang.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					O = e.n(h);
				const _ = ({ columns: E, gapSize: M, gridSize: A, theme: L }) =>
						(0, d.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: E ? `repeat(${E}, 1fr)` : `repeat(auto-fill, minmax(${A}, 1fr))`,
							gap: M,
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
								width: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px)`,
								margin: `0 ${M} ${M} 0`,
								[`:nth-of-type(${E}n)`]: { marginRight: '0' },
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
					C = (0, a.PA)((E) => {
						const M = (0, g.u)(),
							L = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, t.LU)() },
							n = (0, s.v6)('facetGridOptions', M, L, E),
							{ values: l, onClick: c, previewOnFocus: f, valueProps: m, facet: y, horizontal: w, className: R, internalClassName: U } = n,
							{ overrideElement: I, shouldRenderDefault: z } = (0, T._)('facetGridOptions', n);
						if (!z) return I;
						w && (n.columns = 0);
						const S = (0, x.Z)(n, _),
							F = l || y?.refinedValues;
						return F?.length
							? (0, o.Y)(p._, {
									children: (0, o.Y)('div', {
										...S,
										className: i()('ss__facet-grid-options', R, U),
										children: F.map((b) => {
											const K = {
													gridOption: {
														attributes: {
															'aria-label': `${
																b.filtered
																	? `remove selected filter ${y?.label || ''} - ${b.label}`
																	: y?.label
																	? `filter by ${y?.label} - ${b.label}`
																	: `filter by ${b.label}`
															}`,
														},
													},
												},
												B = O()(K, n.lang || {}),
												W = (0, v.u)(B, { facet: y, value: b }, { activeBreakpoint: M?.activeBreakpoint });
											return (0, o.Y)('a', {
												className: i()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': b.filtered }),
												href: b.url?.link?.href,
												...m,
												onClick: (j) => {
													b.url?.link?.onClick(j), c && c(j);
												},
												...(f ? (0, D.l)(() => b?.preview && b.preview()) : {}),
												...W.gridOption?.all,
												children: (0, o.Y)('span', {
													className: i()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': b.label.length > 3,
													}),
													children: b.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
				e.d(r, ['S', 0, C]);
			},
			'./components/src/hooks/useLang.tsx'(P, r, e) {
				'use strict';
				const o = (d, u, i) => {
					const a = i ? { ...u, ...i } : u,
						p = {};
					return (
						Object.keys(d).forEach((g) => {
							const t = d && d[g],
								s = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (s.value = { 'ss-lang': g, dangerouslySetInnerHTML: { __html: t.value(a) } })
										: (s.value = { 'ss-lang': g, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((s.attributes = { 'ss-lang': g }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = t.attributes['aria-label'](a))
											: (s.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](a))
											: (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (s.attributes.title = t.attributes.title(a))
											: (s.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (s.attributes.alt = t.attributes.alt(a)) : (s.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = t.attributes.placeholder(a))
											: (s.attributes.placeholder = t.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': g })),
								(p[g] = s);
						}),
						p
					);
				};
				e.d(r, ['u', 0, o]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(P, r, e) {
				'use strict';
				const o = (d, u = { delay: 333, focusElem: !0 }) => {
					let i;
					return {
						onMouseEnter: (a) => {
							clearTimeout(i),
								(i = window.setTimeout(() => {
									u.focusElem && a.target.focus(), d && d();
								}, u.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(i);
						},
					};
				};
				e.d(r, ['l', 0, o]);
			},
			'./components/src/utilities/componentArgs.ts'(P, r, e) {
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
				e.d(r, ['F', 0, o]);
			},
			'./components/src/utilities/snapify.ts'(P, r, e) {
				'use strict';
				e.d(r, { p: () => E });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					v = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					O = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					C = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(l) {
						const c = l.id;
						if (_[c]) return _[c];
						const f = (_[c] = A({ client: C, controller: l }));
						return (
							f.on('afterStore', async ({ controller: m }, y) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await y();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(l) {
						const c = l.id;
						if (_[c]) return _[c];
						const f = (_[c] = L({ client: C, controller: l }));
						return (
							f.on('afterStore', async ({ controller: m }, y) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await y();
							}),
							f.init(),
							f
						);
					}
					static search(l) {
						const c = l.id;
						if (_[c]) return _[c];
						const f = (_[c] = M({ client: C, controller: l }));
						return (
							f.on('afterStore', async ({ controller: m }, y) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await y();
							}),
							f.init(),
							f
						);
					}
				}
				function M(n) {
					const l = new s.V(new D.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), x.X);
					return new d.Tp(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new g.U(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new v.E(),
						profiler: new T.U(),
						logger: new h.V(),
						tracker: new O.J(n.client.globals),
					});
				}
				function A(n) {
					const l = new s.V(new D.E(), x.X).detach(!0);
					return new i.c(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new t.t(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new v.E(),
						profiler: new T.U(),
						logger: new h.V(),
						tracker: new O.J(n.client.globals),
					});
				}
				function L(n) {
					const l = new s.V(new D.E(), x.X).detach();
					return new u.Z(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new p.Y(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new v.E(),
						profiler: new T.U(),
						logger: new h.V(),
						tracker: new O.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, r, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					i = (a) => {
						const p = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								p.current && a.className?.includes('lang-') && !a.className?.includes(u) && window?.Prism?.highlightElement(p.current);
							}, [a.className, a.children, p]),
							(0, o.Y)('code', { ...a, ref: p, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function r(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (P.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetGridOptions-FacetGridOptions-stories.5e9c127e.iframe.bundle.js.map
