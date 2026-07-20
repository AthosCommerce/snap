(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6719],
		{
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.stories.tsx'(y, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => f, __namedExportsOrder: () => D, default: () => M });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					c = e('./components/src/utilities/snapify.ts'),
					T = e('./components/src/types.ts');
				const O = `# Facet Hierarchy Options

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
`;
				var P = e('./components/src/components/Atoms/Icon/paths.tsx');
				const M = {
						title: 'Molecules/FacetHierarchyOptions',
						component: i.T,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(o.oz, { options: { overrides: { code: l.Z } }, children: O }), (0, s.Y)(o.uY, { story: o.h1 })],
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
								options: [...Object.keys(P.c)],
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
					x = (0, a.PA)(({ args: d, controller: g }) => {
						const C = g?.store?.facets
							.filter((L) => L.display === T.Q.HIERARCHY)
							.shift()
							.values.slice(0, 12);
						return (0, s.Y)('div', { style: { maxWidth: d?.horizontal ? '1200px' : '500px' }, children: (0, s.Y)(i.T, { ...d, values: C }) });
					}),
					f = (d, { loaded: { controller: g } }) => (0, s.Y)(x, { args: d, controller: g });
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
				const D = ['Default'];
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(y, r, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					i = e.n(o),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					x = e('./components/src/hooks/useLang.tsx'),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					d = e.n(D),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const C = ({ theme: b, horizontal: A, returnIcon: n }) =>
						A
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
											color: b?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[n ? '' : '&:before']: { content: `${n ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: b?.variables?.colors?.primary },
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
											color: b?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[n ? '' : '&:before']: { content: `${n ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: b?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					L = (0, l.PA)((b) => {
						const A = (0, c.u)(),
							u = { treePath: (0, T.LU)() },
							m = (0, P.v6)('facetHierarchyOptions', A, u, b),
							{
								values: h,
								hideCount: _,
								returnIcon: v,
								onClick: j,
								previewOnFocus: F,
								horizontal: H,
								valueProps: K,
								facet: I,
								disableStyles: W,
								treePath: B,
								className: w,
								internalClassName: S,
							} = m,
							{ overrideElement: V, shouldRenderDefault: z } = (0, f._)('facetHierarchyOptions', m);
						if (!z) return V;
						const N = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, O.s)({ disableStyles: W }), theme: m?.theme, treePath: B },
							},
							Y = (0, M.Z)(m, C),
							R = h || I?.refinedValues;
						return R?.length
							? (0, s.Y)(t._, {
									children: (0, s.Y)('div', {
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
												J = (0, x.u)(k, { facet: I, value: p });
											return (0, s.FD)('a', {
												className: i()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': p.filtered },
													{ 'ss__facet-hierarchy-options__option--return': p.history && !p.filtered }
												),
												href: p.url?.link?.href,
												...K,
												onClick: (U) => {
													p.url?.link?.onClick(U), j && j(U);
												},
												...(F ? (0, E.l)(() => p?.preview && p.preview()) : {}),
												...J.hierarchyOption?.all,
												children: [
													v && p.history && !p.filtered && (0, s.Y)(g.I, { ...N.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
													(0, s.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															p.label,
															!_ &&
																p?.count > 0 &&
																!p.filtered &&
																(0, s.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', p.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
				e.d(r, ['T', 0, L]);
			},
			'./components/src/hooks/useLang.tsx'(y, r, e) {
				'use strict';
				const s = (a, o) => {
					const i = {};
					return (
						Object.keys(a).forEach((l) => {
							const t = a && a[l],
								c = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (c.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: t.value(o) } })
										: (c.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((c.attributes = { 'ss-lang': l }),
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
								(c.all = { ...c.value, ...c.attributes, 'ss-lang': l })),
								(i[l] = c);
						}),
						i
					);
				};
				e.d(r, ['u', 0, s]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, r, e) {
				'use strict';
				const s = (a, o = { delay: 333, focusElem: !0 }) => {
					let i;
					return {
						onMouseEnter: (l) => {
							clearTimeout(i),
								(i = window.setTimeout(() => {
									o.focusElem && l.target.focus(), a && a();
								}, o.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(i);
						},
					};
				};
				e.d(r, ['l', 0, s]);
			},
			'./components/src/types.ts'(y, r, e) {
				'use strict';
				e.d(r, { Q: () => a, V: () => s });
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
			'./components/src/utilities/componentArgs.ts'(y, r, e) {
				'use strict';
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
				e.d(r, ['F', 0, s]);
			},
			'./components/src/utilities/defined.ts'(y, r, e) {
				'use strict';
				e.d(r, { s: () => s });
				function s(a) {
					const o = {};
					return (
						Object.keys(a).map((i) => {
							a[i] !== void 0 && (o[i] = a[i]);
						}),
						o
					);
				}
			},
			'./components/src/utilities/snapify.ts'(y, r, e) {
				'use strict';
				e.d(r, { p: () => C });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					g = { globals: { siteId: 'atkzs2' } };
				class C {
					static recommendation(u) {
						const m = u.id;
						if (d[m]) return d[m];
						const h = (d[m] = b({ client: g, controller: u }));
						return (
							h.on('afterStore', async ({ controller: _ }, v) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await v();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(u) {
						const m = u.id;
						if (d[m]) return d[m];
						const h = (d[m] = A({ client: g, controller: u }));
						return (
							h.on('afterStore', async ({ controller: _ }, v) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await v();
							}),
							h.init(),
							h
						);
					}
					static search(u) {
						const m = u.id;
						if (d[m]) return d[m];
						const h = (d[m] = L({ client: g, controller: u }));
						return (
							h.on('afterStore', async ({ controller: _ }, v) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await v();
							}),
							h.init(),
							h
						);
					}
				}
				function L(n) {
					const u = new O.V(new M.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), P.X);
					return new a.Tp(n.controller, {
						client: new l.K(n.client.globals, n.client.config),
						store: new c.U(n.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new D.J(n.client.globals),
					});
				}
				function b(n) {
					const u = new O.V(new M.E(), P.X).detach(!0);
					return new i.c(n.controller, {
						client: new l.K(n.client.globals, n.client.config),
						store: new T.t(n.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new D.J(n.client.globals),
					});
				}
				function A(n) {
					const u = new O.V(new M.E(), P.X).detach();
					return new o.Z(n.controller, {
						client: new l.K(n.client.globals, n.client.config),
						store: new t.Y(n.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new x.U(),
						logger: new f.V(),
						tracker: new D.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, r, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					i = (l) => {
						const t = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								t.current && l.className?.includes('lang-') && !l.className?.includes(o) && window?.Prism?.highlightElement(t.current);
							}, [l.className, l.children, t]),
							(0, s.Y)('code', { ...l, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function r(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (y.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetHierarchyOptions-FacetHierarchyOptions-stories.ab4a7e5d.iframe.bundle.js.map
