(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7383],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.stories.tsx'(y, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => g, __namedExportsOrder: () => x, default: () => P });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const T =
						"# Facet Grid Options\n\nRenders a grid of facet options.\n\n## Usage\n```jsx\nimport { FacetGridOptions } from '@athoscommerce/snap-preact/components';\n```\n\n### values\nThe `values` prop specifies all facet values where the facet type is 'grid'. Overrides values passed via the facet prop. \n\n```jsx\n<FacetGridOptions values={sizeFacet.values} />\n```\n\n### facet\nThe `facet` prop specifies the reference to the facet object in the store.\n\n```jsx\n<FacetGridOptions facet={sizeFacet} />\n```\n\n### columns\nThe `columns` prop is the number of columns the grid should contain. Not applicable if using `horizontal` prop'.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} columns={3} />\n```\n\n### gridSize\nThe `gridSize` prop is the size of each grid item. Does not apply if using `columns` prop.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gridSize={'45px'} columns={0} />\n```\n\n### gapSize\nThe `gapSize` prop is the gap size between rows and columns.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} gapSize={'10px'} />\n```\n\n### horizontal\nThe `horizontal` prop render facet options horizontally.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} horizontal={true} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```jsx\n<Autocomplete>\n	...\n	<FacetGridOptions values={sizeFacet.values} previewOnFocus={true} />\n	...\n</Autocomplete>\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```js\nconst valueProps = {\n	onMouseEnter: (e) => {\n		clearTimeout(delayTimeout);\n		delayTimeout = setTimeout(() => {\n			e.target.focus();\n		}, delayTime);\n	},\n	onMouseLeave: () => {\n		clearTimeout(delayTimeout);\n	},\n}\n```\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} valueProps={valueProps} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when when a facet value is clicked.\n\n```jsx\n<FacetGridOptions values={sizeFacet.values} onClick={(e)=>{console.log(e)}} />\n```\n",
					P = {
						title: 'Molecules/FacetGridOptions',
						component: m.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: a.Z } }, children: T }), (0, o.Y)(c.uY, { story: c.h1 })],
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
					O = r.p.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } }),
					M = (0, u.PA)(({ args: h, controller: b }) => {
						const f = b?.store?.facets.filter((D) => D.field == 'size').pop();
						return (0, o.Y)('div', { style: { maxWidth: h?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(m.S, { ...h, values: f.values }) });
					}),
					g = (h, { loaded: { controller: b } }) => (0, o.Y)(M, { args: h, controller: b });
				(g.loaders = [async () => (await O.search(), { controller: O })]),
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
				const x = ['Default'];
			},
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(y, i, e) {
				'use strict';
				e.d(i, { S: () => A });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					m = e.n(c),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					x = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useComponent.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(b),
					D = e('../../node_modules/color/index.js'),
					j = e.n(D);
				const L = ({ columns: E, gapSize: s, gridSize: l, theme: d }) => {
						const p = d?.variables,
							n = new (j())(p?.colors.primary || void 0),
							v = n.isDark() ? '#fff' : '#000';
						return (0, u.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: E ? `repeat(${E}, 1fr)` : `repeat(auto-fill, minmax(${l}, 1fr))`,
							gap: s,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${n.hex() || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px)`,
								margin: `0 ${s} ${s} 0`,
								[`:nth-of-type(${E}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: n.hex() || '#ccc', color: v || '#333' },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: n.hex() || '#f8f8f8', color: v || '#333' },
								'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						});
					},
					A = (0, a.PA)((E) => {
						const s = (0, r.u)(),
							l = (0, T.uk)(),
							p = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, P.LU)() },
							n = (0, O.v6)('facetGridOptions', s, p, E),
							{
								values: v,
								onClick: F,
								previewOnFocus: I,
								valueProps: z,
								facet: C,
								horizontal: K,
								className: S,
								internalClassName: B,
								customComponent: R,
							} = n;
						if (R) {
							const _ = (0, h.x)(l?.templates?.library.import.component.facetGridOptions || {}, R);
							if (_) return (0, o.Y)(_, { ...n });
						}
						K && (n.columns = 0);
						const W = (0, M.Z)(n, L),
							U = v || C?.refinedValues;
						return U?.length
							? (0, o.Y)(t._, {
									children: (0, o.Y)('div', {
										...W,
										className: m()('ss__facet-grid-options', S, B),
										children: U.map((_) => {
											const G = {
													gridOption: {
														attributes: {
															'aria-label': `${
																_.filtered
																	? `remove selected filter ${C?.label || ''} - ${_.label}`
																	: C?.label
																	? `filter by ${C?.label} - ${_.label}`
																	: `filter by ${_.label}`
															}`,
														},
													},
												},
												V = f()(G, n.lang || {}),
												N = (0, x.u)(V, { facet: C, value: _ });
											return (0, o.Y)('a', {
												className: m()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': _.filtered }),
												href: _.url?.link?.href,
												...z,
												onClick: (w) => {
													_.url?.link?.onClick(w), F && F(w);
												},
												...(I ? (0, g.l)(() => _?.preview && _.preview()) : {}),
												...N.gridOption?.all,
												children: (0, o.Y)('span', {
													className: m()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': _.label.length > 3,
													}),
													children: _.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(y, i, e) {
				'use strict';
				e.d(i, { u: () => o });
				const o = (u, c) => {
					const m = {};
					return (
						Object.keys(u).forEach((a) => {
							const t = u && u[a],
								r = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (r.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value(c) } })
										: (r.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((r.attributes = { 'ss-lang': a }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = t.attributes['aria-label'](c))
											: (r.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](c))
											: (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (r.attributes.title = t.attributes.title(c))
											: (r.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (r.attributes.alt = t.attributes.alt(c)) : (r.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = t.attributes.placeholder(c))
											: (r.attributes.placeholder = t.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': a })),
								(m[a] = r);
						}),
						m
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, i, e) {
				'use strict';
				e.d(i, { l: () => o });
				const o = (u, c = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (a) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									c.focusElem && a.target.focus(), u && u();
								}, c.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, i, e) {
				'use strict';
				e.d(i, { F: () => o });
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
			'./components/src/utilities/snapify.ts'(y, i, e) {
				'use strict';
				e.d(i, { p: () => j });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					D = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(l) {
						const d = l.id;
						if (f[d]) return f[d];
						const p = (f[d] = A({ client: D, controller: l }));
						return (
							p.on('afterStore', async ({ controller: n }, v) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await v();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(l) {
						const d = l.id;
						if (f[d]) return f[d];
						const p = (f[d] = E({ client: D, controller: l }));
						return (
							p.on('afterStore', async ({ controller: n }, v) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await v();
							}),
							p.init(),
							p
						);
					}
					static search(l) {
						const d = l.id;
						if (f[d]) return f[d];
						const p = (f[d] = L({ client: D, controller: l }));
						return (
							p.on('afterStore', async ({ controller: n }, v) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await v();
							}),
							p.init(),
							p
						);
					}
				}
				function L(s) {
					const l = new P.V(new M.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), O.X);
					return new u.Tp(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new r.U(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new g.E(),
						profiler: new x.U(),
						logger: new h.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function A(s) {
					const l = new P.V(new M.E(), O.X).detach(!0);
					return new m.c(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new T.t(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new g.E(),
						profiler: new x.U(),
						logger: new h.V(),
						tracker: new b.J(s.client.globals),
					});
				}
				function E(s) {
					const l = new P.V(new M.E(), O.X).detach();
					return new c.Z(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new g.E(),
						profiler: new x.U(),
						logger: new h.V(),
						tracker: new b.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, i, e) {
				'use strict';
				e.d(i, { Z: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					m = (a) => {
						const t = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								t.current && a.className?.includes('lang-') && !a.className?.includes(c) && window?.Prism?.highlightElement(t.current);
							}, [a.className, a.children, t]),
							(0, o.Y)('code', { ...a, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function i(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (y.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetGridOptions-FacetGridOptions-stories.0d80552f.iframe.bundle.js.map
