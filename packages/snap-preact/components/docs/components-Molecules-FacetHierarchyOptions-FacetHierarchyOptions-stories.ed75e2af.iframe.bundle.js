(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6719],
		{
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx'(y, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => f, __namedExportsOrder: () => x, default: () => P });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					c = e('./components/src/utilities/snapify.ts'),
					T = e('./components/src/types.ts');
				const O = `# Facet Hierarchy Options

Renders a list of hierarchy options.

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { FacetHierarchyOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'hierarchy'. Overrides values passed via the facet prop. 

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`jsx
<FacetHierarchyOptions facet={hierarchyFacet} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet count values.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} hideCount={true} />
\`\`\`

### returnIcon
The \`returnIcon\` prop will set the icon to render for the return levels / options.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} returnIcon={'angle-left'} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`jsx
<Autocomplete>
    ...
	<FacetHierarchyOptions values={hierarchyFacet.values} previewOnFocus={true} />
    ...
</Autocomplete>
\`\`\`


### valueProps
The \`valueProps\` prop will be spread onto each value's \`<a>\` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

\`\`\`js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
\`\`\`

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} valueProps={valueProps} />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`jsx
<FacetHierarchyOptions values={hierarchyFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`
`;
				var b = e('./components/src/components/Atoms/Icon/paths.tsx');
				const P = {
						title: 'Molecules/FacetHierarchyOptions',
						component: u.T,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(o.oz, { options: { overrides: { code: i.Z } }, children: O }), (0, s.Y)(o.uY, { story: o.h1 })],
									}),
							},
						},
						argTypes: {
							values: {
								description: 'Facet.values store reference',
								type: { required: !1 },
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							facet: {
								description: 'Facet store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							returnIcon: {
								description: 'return Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [...Object.keys(b.c)],
								control: { type: 'select' },
							},
							hideCount: {
								defaultValue: !1,
								description: 'Hide facet option count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
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
					E = c.p.search({ id: 'FacetHierarchyOptions', globals: { siteId: 'atkzs2' } }),
					M = (0, a.PA)(({ args: d, controller: v }) => {
						const C = v?.store?.facets
							.filter((j) => j.display === T.Q.HIERARCHY)
							.shift()
							.values.slice(0, 12);
						return (0, s.Y)('div', { style: { maxWidth: d?.horizontal ? '1200px' : '500px' }, children: (0, s.Y)(u.T, { ...d, values: C }) });
					}),
					f = (d, { loaded: { controller: v } }) => (0, s.Y)(M, { args: d, controller: v });
				(f.loaders = [async () => (await E.search(), { controller: E })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: FacetHierarchyOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableFacetHierarchyOptions args={args} controller={controller} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(y, n, e) {
				'use strict';
				e.d(n, { T: () => I });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					u = e.n(o),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useComponent.tsx'),
					d = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(d),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const j = ({ theme: g, horizontal: l, returnIcon: r }) =>
						l
							? (0, a.AH)({
									display: 'flex',
									flexWrap: 'wrap',
									'& .ss__facet-hierarchy-options__option': {
										margin: '0 5px 5px 0',
										padding: '6px',
										textDecoration: 'none',
										flex: '0 1 auto',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: g?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[r ? '' : '&:before']: { content: `${r ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: g?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, a.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: g?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[r ? '' : '&:before']: { content: `${r ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: g?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					I = (0, i.PA)((g) => {
						const l = (0, c.u)(),
							r = (0, T.uk)(),
							h = { treePath: (0, O.LU)() },
							p = (0, P.v6)('facetHierarchyOptions', l, h, g),
							{
								values: D,
								hideCount: K,
								returnIcon: L,
								onClick: R,
								previewOnFocus: W,
								horizontal: B,
								valueProps: w,
								facet: A,
								disableStyles: S,
								treePath: V,
								className: z,
								internalClassName: N,
								customComponent: U,
							} = p;
						if (U) {
							const m = (0, x.x)(r?.templates?.library.import.component.facetHierarchyOptions || {}, U);
							if (m) return (0, s.Y)(m, { ...p });
						}
						const Y = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, b.s)({ disableStyles: S }), theme: p?.theme, treePath: V },
							},
							$ = (0, E.Z)(p, j),
							F = D || A?.refinedValues;
						return F?.length
							? (0, s.Y)(t._, {
									children: (0, s.Y)('div', {
										...$,
										className: u()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': B }, z, N),
										children: F.map((m) => {
											const k = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																m.filtered ? `selected ${m.label}` : A?.label ? `filter by ${A?.label} - ${m.label}` : `filter by ${m.label}`
															}`,
														},
													},
												},
												J = v()(k, p.lang || {}),
												G = (0, f.u)(J, { facet: A, value: m });
											return (0, s.FD)('a', {
												className: u()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': m.filtered },
													{ 'ss__facet-hierarchy-options__option--return': m.history && !m.filtered }
												),
												href: m.url?.link?.href,
												...w,
												onClick: (H) => {
													m.url?.link?.onClick(H), R && R(H);
												},
												...(W ? (0, M.l)(() => m?.preview && m.preview()) : {}),
												...G.hierarchyOption?.all,
												children: [
													L && m.history && !m.filtered && (0, s.Y)(C.I, { ...Y.icon, ...(typeof L == 'string' ? { icon: L } : L) }),
													(0, s.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															m.label,
															!K &&
																m?.count > 0 &&
																!m.filtered &&
																(0, s.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', m.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(y, n, e) {
				'use strict';
				e.d(n, { u: () => s });
				const s = (a, o) => {
					const u = {};
					return (
						Object.keys(a).forEach((i) => {
							const t = a && a[i],
								c = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (c.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(o) } })
										: (c.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((c.attributes = { 'ss-lang': i }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (c.attributes['aria-label'] = t.attributes['aria-label'](o))
											: (c.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (c.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](o))
											: (c.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (c.attributes.title = t.attributes.title(o))
											: (c.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (c.attributes.alt = t.attributes.alt(o)) : (c.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (c.attributes.placeholder = t.attributes.placeholder(o))
											: (c.attributes.placeholder = t.attributes.placeholder))),
								(c.all = { ...c.value, ...c.attributes, 'ss-lang': i })),
								(u[i] = c);
						}),
						u
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, n, e) {
				'use strict';
				e.d(n, { l: () => s });
				const s = (a, o = { delay: 333, focusElem: !0 }) => {
					let u;
					return {
						onMouseEnter: (i) => {
							clearTimeout(u),
								(u = window.setTimeout(() => {
									o.focusElem && i.target.focus(), a && a();
								}, o.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(u);
						},
					};
				};
			},
			'./components/src/types.ts'(y, n, e) {
				'use strict';
				e.d(n, { Q: () => a, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					a = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(a || {});
			},
			'./components/src/utilities/componentArgs.ts'(y, n, e) {
				'use strict';
				e.d(n, { F: () => s });
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
			'./components/src/utilities/defined.ts'(y, n, e) {
				'use strict';
				e.d(n, { s: () => s });
				function s(a) {
					const o = {};
					return (
						Object.keys(a).map((u) => {
							a[u] !== void 0 && (o[u] = a[u]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/snapify.ts'(y, n, e) {
				'use strict';
				e.d(n, { p: () => C });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					v = { globals: { siteId: 'atkzs2' } };
				class C {
					static recommendation(r) {
						const _ = r.id;
						if (d[_]) return d[_];
						const h = (d[_] = I({ client: v, controller: r }));
						return (
							h.on('afterStore', async ({ controller: p }, D) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await D();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(r) {
						const _ = r.id;
						if (d[_]) return d[_];
						const h = (d[_] = g({ client: v, controller: r }));
						return (
							h.on('afterStore', async ({ controller: p }, D) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await D();
							}),
							h.init(),
							h
						);
					}
					static search(r) {
						const _ = r.id;
						if (d[_]) return d[_];
						const h = (d[_] = j({ client: v, controller: r }));
						return (
							h.on('afterStore', async ({ controller: p }, D) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await D();
							}),
							h.init(),
							h
						);
					}
				}
				function j(l) {
					const r = new O.V(new P.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), b.X);
					return new a.Tp(l.controller, {
						client: new i.K(l.client.globals, l.client.config),
						store: new c.U(l.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new E.E(),
						profiler: new M.U(),
						logger: new f.V(),
						tracker: new x.J(l.client.globals),
					});
				}
				function I(l) {
					const r = new O.V(new P.E(), b.X).detach(!0);
					return new u.c(l.controller, {
						client: new i.K(l.client.globals, l.client.config),
						store: new T.t(l.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new E.E(),
						profiler: new M.U(),
						logger: new f.V(),
						tracker: new x.J(l.client.globals),
					});
				}
				function g(l) {
					const r = new O.V(new P.E(), b.X).detach();
					return new o.Z(l.controller, {
						client: new i.K(l.client.globals, l.client.config),
						store: new t.Y(l.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new E.E(),
						profiler: new M.U(),
						logger: new f.V(),
						tracker: new x.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, n, e) {
				'use strict';
				e.d(n, { Z: () => u });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					u = (i) => {
						const t = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								t.current && i.className?.includes('lang-') && !i.className?.includes(o) && window?.Prism?.highlightElement(t.current);
							}, [i.className, i.children, t]),
							(0, s.Y)('code', { ...i, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function n(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (y.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetHierarchyOptions-FacetHierarchyOptions-stories.ed75e2af.iframe.bundle.js.map
