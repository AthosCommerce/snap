(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6719],
		{
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx'(g, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => v, __namedExportsOrder: () => T, default: () => x });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					h = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts'),
					t = e('./components/src/types.ts');
				const n = `# Facet Hierarchy Options

Renders a list of hierarchy options.

## Sub-components
- Icon

## Usage
\`\`\`tsx
import { FacetHierarchyOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'hierarchy'. Overrides values passed via the facet prop. 

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`tsx
<FacetHierarchyOptions facet={hierarchyFacet} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet count values.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} hideCount={true} />
\`\`\`

### returnIcon
The \`returnIcon\` prop will set the icon to render for the return levels / options.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} returnIcon={'angle-left'} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`tsx
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

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} valueProps={valueProps} />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`tsx
<FacetHierarchyOptions values={hierarchyFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetHierarchyOptions component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`hierarchyOption\` | Hierarchy option element text/attributes | \`facet\` (ValueFacet), \`value\` (FacetHierarchyValue) |

### Example

\`\`\`tsx
<FacetHierarchyOptions
	values={facet.values}
	lang={{
		hierarchyOption: {
			attributes: {
				'aria-label': (data) => \`\${data.value.filtered ? 'selected' : 'filter by'} \${data.facet?.label} - \${data.value.label}\`,
			},
		},
	}}
/>
\`\`\`
`;
				var M = e('./components/src/components/Atoms/Icon/paths.tsx');
				const x = {
						title: 'Molecules/FacetHierarchyOptions',
						component: i.T,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: l.Z } }, children: n }), (0, o.Y)(s.uY, { story: s.h1 })],
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
								options: [...Object.keys(M.c)],
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
							...h.F,
						},
					},
					O = y.p.search({ id: 'FacetHierarchyOptions', globals: { siteId: 'atkzs2' } }),
					D = (0, c.PA)(({ args: d, controller: E }) => {
						const L = E?.store?.facets
							.filter((A) => A.display === t.Q.HIERARCHY)
							.shift()
							.values.slice(0, 12);
						return (0, o.Y)('div', { style: { maxWidth: d?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(i.T, { ...d, values: L }) });
					}),
					v = (d, { loaded: { controller: E } }) => (0, o.Y)(D, { args: d, controller: E });
				(v.loaders = [async () => (await O.search(), { controller: O })]),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
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
								...v.parameters?.docs?.source,
							},
						},
					});
				const T = ['Default'];
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(g, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					i = e.n(s),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					D = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					d = e.n(T),
					E = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const L = ({ theme: P, horizontal: C, returnIcon: r }) =>
						C
							? (0, c.AH)({
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
											color: P?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[r ? '' : '&:before']: { content: `${r ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: P?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, c.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: P?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[r ? '' : '&:before']: { content: `${r ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: P?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					A = (0, l.PA)((P) => {
						const C = (0, y.u)(),
							u = { treePath: (0, t.LU)() },
							m = (0, M.v6)('facetHierarchyOptions', C, u, P),
							{
								values: f,
								hideCount: _,
								returnIcon: b,
								onClick: j,
								previewOnFocus: U,
								horizontal: H,
								valueProps: K,
								facet: I,
								disableStyles: W,
								treePath: B,
								className: w,
								internalClassName: S,
							} = m,
							{ overrideElement: V, shouldRenderDefault: z } = (0, v._)('facetHierarchyOptions', m);
						if (!z) return V;
						const N = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, n.s)({ disableStyles: W }), theme: m?.theme, treePath: B },
							},
							Y = (0, x.Z)(m, L),
							R = f || I?.refinedValues;
						return R?.length
							? (0, o.Y)(h._, {
									children: (0, o.Y)('div', {
										...Y,
										className: i()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': H }, w, S),
										children: R.map((p) => {
											const $ = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																p.filtered ? `selected ${p.label}` : I?.label ? `filter by ${I?.label} - ${p.label}` : `filter by ${p.label}`
															}`,
														},
													},
												},
												k = d()($, m.lang || {}),
												J = (0, D.u)(k, { facet: I, value: p }, { activeBreakpoint: C?.activeBreakpoint });
											return (0, o.FD)('a', {
												className: i()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': p.filtered },
													{ 'ss__facet-hierarchy-options__option--return': p.history && !p.filtered }
												),
												href: p.url?.link?.href,
												...K,
												onClick: (F) => {
													p.url?.link?.onClick(F), j && j(F);
												},
												...(U ? (0, O.l)(() => p?.preview && p.preview()) : {}),
												...J.hierarchyOption?.all,
												children: [
													b && p.history && !p.filtered && (0, o.Y)(E.I, { ...N.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
													(0, o.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															p.label,
															!_ &&
																p?.count > 0 &&
																!p.filtered &&
																(0, o.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', p.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
				e.d(a, ['T', 0, A]);
			},
			'./components/src/hooks/useLang.tsx'(g, a, e) {
				'use strict';
				const o = (c, s, i) => {
					const l = i ? { ...s, ...i } : s,
						h = {};
					return (
						Object.keys(c).forEach((y) => {
							const t = c && c[y],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': y, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (n.value = { 'ss-lang': y, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': y }),
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
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': y })),
								(h[y] = n);
						}),
						h
					);
				};
				e.d(a, ['u', 0, o]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(g, a, e) {
				'use strict';
				const o = (c, s = { delay: 333, focusElem: !0 }) => {
					let i;
					return {
						onMouseEnter: (l) => {
							clearTimeout(i),
								(i = window.setTimeout(() => {
									s.focusElem && l.target.focus(), c && c();
								}, s.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(i);
						},
					};
				};
				e.d(a, ['l', 0, o]);
			},
			'./components/src/types.ts'(g, a, e) {
				'use strict';
				e.d(a, { Q: () => c, V: () => o });
				var o = ((s) => ((s.grid = 'grid'), (s.list = 'list'), s))(o || {}),
					c = ((s) => (
						(s.GRID = 'grid'),
						(s.PALETTE = 'palette'),
						(s.LIST = 'list'),
						(s.SLIDER = 'slider'),
						(s.HIERARCHY = 'hierarchy'),
						(s.TOGGLE = 'toggle'),
						s
					))(c || {});
			},
			'./components/src/utilities/componentArgs.ts'(g, a, e) {
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
			'./components/src/utilities/defined.ts'(g, a, e) {
				'use strict';
				e.d(a, { s: () => o });
				function o(c) {
					const s = {};
					return (
						Object.keys(c).map((i) => {
							c[i] !== void 0 && (s[i] = c[i]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(g, a, e) {
				'use strict';
				e.d(a, { p: () => L });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					O = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					E = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(u) {
						const m = u.id;
						if (d[m]) return d[m];
						const f = (d[m] = P({ client: E, controller: u }));
						return (
							f.on('afterStore', async ({ controller: _ }, b) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await b();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(u) {
						const m = u.id;
						if (d[m]) return d[m];
						const f = (d[m] = C({ client: E, controller: u }));
						return (
							f.on('afterStore', async ({ controller: _ }, b) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await b();
							}),
							f.init(),
							f
						);
					}
					static search(u) {
						const m = u.id;
						if (d[m]) return d[m];
						const f = (d[m] = A({ client: E, controller: u }));
						return (
							f.on('afterStore', async ({ controller: _ }, b) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await b();
							}),
							f.init(),
							f
						);
					}
				}
				function A(r) {
					const u = new n.V(new x.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), M.X);
					return new c.Tp(r.controller, {
						client: new l.K(r.client.globals, r.client.config),
						store: new y.U(r.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new O.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new T.J(r.client.globals),
					});
				}
				function P(r) {
					const u = new n.V(new x.E(), M.X).detach(!0);
					return new i.c(r.controller, {
						client: new l.K(r.client.globals, r.client.config),
						store: new t.t(r.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new O.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new T.J(r.client.globals),
					});
				}
				function C(r) {
					const u = new n.V(new x.E(), M.X).detach();
					return new s.Z(r.controller, {
						client: new l.K(r.client.globals, r.client.config),
						store: new h.Y(r.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new O.E(),
						profiler: new D.U(),
						logger: new v.V(),
						tracker: new T.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(g, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					i = (l) => {
						const h = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								h.current && l.className?.includes('lang-') && !l.className?.includes(s) && window?.Prism?.highlightElement(h.current);
							}, [l.className, l.children, h]),
							(0, o.Y)('code', { ...l, ref: h, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function a(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (g.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetHierarchyOptions-FacetHierarchyOptions-stories.20327276.iframe.bundle.js.map
