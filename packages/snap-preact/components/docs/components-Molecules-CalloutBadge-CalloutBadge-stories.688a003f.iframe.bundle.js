(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7191],
		{
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx'(y, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => _, __namedExportsOrder: () => h, default: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					P = e('./components/src/utilities/componentArgs.ts'),
					x = e('./components/src/utilities/snapify.ts');
				const B = `# CalloutBadge

Renders callout badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to display callout badges.

## Usage
\`\`\`jsx
import { CalloutBadge } from '@athoscommerce/snap-preact/components';
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`jsx
<CalloutBadge result={result} />
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`jsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
\`\`\`

The \`componentMap\` also supports async functions for dynamic importing of badges.

\`\`\`jsx
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
/>
\`\`\`

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element \`ss__callout-badge\` to render.

\`\`\`jsx
<CalloutBadge
    renderEmpty
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
\`\`\`

### limit
The callout badge slot will by default only render a single badge, but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the callout slot. The order of the stack is determined by the ASD badge configuration.

\`\`\`jsx
<CalloutBadge
    limit={3}
    result={result} 
/>
\`\`\`

### tag
The \`tag\` prop specifies the location name of this callout location, the default value is \`callout\`. 

\`\`\`jsx
<CalloutBadge tag={'callout'} result={result} />
\`\`\`
`,
					D = {
						title: 'Molecules/CalloutBadge',
						component: E.W,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: m.Z } }, children: B }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(c) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [
										(0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
										(0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } }),
										(0, t.Y)(c, {}),
									],
								}),
						],
						argTypes: {
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							componentMap: {
								description: 'Component map containing custom badge component',
								table: { type: { summary: 'object' }, category: 'Templates Legal' },
								control: { type: 'object' },
							},
							renderEmpty: {
								description: 'Render wrapper element even when there are no badges',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							limit: {
								description: 'Number of badges per slot',
								table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: '1' } },
								control: { type: 'number' },
							},
							tag: {
								description: 'Callout location tag',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'callout' } },
								control: { type: 'text' },
							},
							...P.F,
						},
					},
					M = x.p.search({ id: 'CalloutBadge', globals: { siteId: 'atkzs2' } }),
					C = (0, g.PA)(({ args: c, controller: d }) => (0, t.Y)(E.W, { ...c, result: d?.store?.results[0] })),
					_ = (c, { loaded: { controller: d } }) => (0, t.Y)(C, { args: c, controller: d });
				(_.loaders = [
					async () => (
						M.on('afterSearch', ({ response: c }) => {
							(c.search.results[0].badges = [
								{ tag: 'free-shipping', value: 'Free Shipping' },
								{ tag: 'last-one', value: 'Last One!' },
								{ tag: 'on-sale', value: 'On Sale' },
								{ tag: 'save-percent', value: 'Save 30%' },
								{ tag: 'inventory-remaining', value: '1 in stock' },
							]),
								(c.meta = {
									...c.meta,
									badges: {
										locations: {
											left: [{ tag: 'left', name: 'Left' }],
											right: [{ tag: 'right', name: 'Right' }],
											callout: [{ tag: 'callout', name: 'Callout' }],
										},
										tags: {
											'free-shipping': {
												location: 'callout/callout',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#1d4990', colorText: '#FFFFFF' },
											},
											'last-one': {
												location: 'callout/callout',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#515151', colorText: '#FFFFFF' },
											},
											'inventory-remaining': {
												location: 'callout/callout',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#382F5A', colorText: '#FFFFFF' },
											},
											'on-sale': {
												location: 'left/left',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
											},
											'save-percent': {
												location: 'left/left',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#8F6CF6', colorText: '#FFFFFF' },
											},
										},
									},
								});
						}),
						await M.search(),
						{ controller: M }
					),
				]),
					(_.args = { tag: 'callout' }),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: CalloutBadgeProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableCalloutBadge args={args} controller={controller} />;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const h = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(y, n, e) {
				'use strict';
				e.d(n, { z: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useComponent.tsx');
				const h = () => (0, g.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					c = (0, m.PA)((d) => {
						const i = (0, x.u)(),
							T = (0, B.uk)(),
							A = { treePath: (0, D.LU)() },
							p = (0, M.v6)('badgeImage', i, A, d),
							{ label: v, url: o, tag: s, className: r, internalClassName: l, customComponent: a } = p;
						if (a) {
							const b = (0, _.x)(T?.templates?.library.import.component.badgeImage || {}, a);
							if (b) return (0, t.Y)(b, { ...p });
						}
						const O = (0, C.Z)(p, h);
						return o
							? (0, t.Y)(P._, {
									children: (0, t.Y)('img', {
										...O,
										className: E()('ss__badge-image', `ss__badge-image--${s}`, r, l),
										alt: v || `${s} badge`,
										src: o,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(y, n, e) {
				'use strict';
				e.d(n, { L: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useComponent.tsx');
				const h = ({ color: d, colorText: i }) =>
						(0, g.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: d,
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					c = (0, m.PA)((d) => {
						const i = (0, x.u)(),
							T = (0, B.uk)(),
							A = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, D.LU)() },
							p = (0, M.v6)('badgePill', i, A, d),
							{ value: v, tag: o, className: s, internalClassName: r, customComponent: l } = p;
						if (l) {
							const O = (0, _.x)(T?.templates?.library.import.component.badgePill || {}, l);
							if (O) return (0, t.Y)(O, { ...p });
						}
						const a = (0, C.Z)(p, h);
						return v
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...a,
										className: E()('ss__badge-pill', `ss__badge-pill--${o}`, s, r),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: v }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(y, n, e) {
				'use strict';
				e.d(n, { Z: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useComponent.tsx');
				const h = ({ color: d, colorText: i }) =>
						(0, g.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: d,
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					c = (0, m.PA)((d) => {
						const i = (0, x.u)(),
							T = (0, B.uk)(),
							A = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, D.LU)() },
							p = (0, M.v6)('badgeRectangle', i, A, d),
							{ value: v, tag: o, className: s, internalClassName: r, customComponent: l } = p;
						if (l) {
							const O = (0, _.x)(T?.templates?.library.import.component.badgeRectangle || {}, l);
							if (O) return (0, t.Y)(O, { ...p });
						}
						const a = (0, C.Z)(p, h);
						return v
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...a,
										className: E()('ss__badge-rectangle', `ss__badge-rectangle--${o}`, s, r),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: v }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(y, n, e) {
				'use strict';
				e.d(n, { p: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useComponent.tsx');
				const h = ({ colorText: d }) =>
						(0, g.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					c = (0, m.PA)((d) => {
						const i = (0, x.u)(),
							T = (0, B.uk)(),
							A = { colorText: '#000000', treePath: (0, D.LU)() },
							p = (0, M.v6)('badgeText', i, A, d),
							{ value: v, tag: o, className: s, internalClassName: r, customComponent: l } = p;
						if (l) {
							const O = (0, _.x)(T?.templates?.library.import.component.badgeText || {}, l);
							if (O) return (0, t.Y)(O, { ...p });
						}
						const a = (0, C.Z)(p, h);
						return v
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...a,
										className: E()('ss__badge-text', `ss__badge-text--${o}`, s, r),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: v }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(y, n, e) {
				'use strict';
				e.d(n, { W: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					h = e('./components/src/hooks/useComponent.tsx');
				const c = () => (0, g.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					d = (0, m.PA)((i) => {
						const T = (0, x.u)(),
							f = (0, B.uk)(),
							p = { tag: 'callout', limit: 1, treePath: (0, D.LU)() },
							v = (0, M.v6)('calloutBadge', T, p, i),
							{ result: o, tag: s, renderEmpty: r, limit: l, className: a, internalClassName: O, treePath: b, customComponent: I } = v;
						if (I) {
							const R = (0, h.x)(f?.templates?.library.import.component.calloutBadge || {}, I);
							if (R) return (0, t.Y)(R, { ...v });
						}
						const W = { ..._.q, ...(f?.templates?.library.import.component.badge || {}), ...v.componentMap },
							K = (0, C.Z)(v, c),
							L = o?.display.badges?.atLocation(s).slice(0, l);
						return r || L?.length
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...K,
										className: E()('ss__callout-badge', `ss__callout-badge--${s?.replace('/', '-')}`, a, O),
										children: L.map((R) => {
											const U = (0, h.x)(W, R.component);
											return U ? (0, t.Y)(U, { ...R, ...R.parameters, treePath: b }) : null;
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(y, n, e) {
				'use strict';
				e.d(n, { F: () => t });
				const t = {
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(y, n, e) {
				'use strict';
				e.d(n, { q: () => m });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					g = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					u = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					E = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const m = { BadgeText: () => t.p, BadgePill: () => g.L, BadgeRectangle: () => u.Z, BadgeImage: () => E.z };
			},
			'./components/src/utilities/snapify.ts'(y, n, e) {
				'use strict';
				e.d(n, { p: () => f });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					c = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					d = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					T = { globals: { siteId: 'atkzs2' } };
				class f {
					static recommendation(s) {
						const r = s.id;
						if (i[r]) return i[r];
						const l = (i[r] = p({ client: T, controller: s }));
						return (
							l.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							l.init(),
							l
						);
					}
					static autocomplete(s) {
						const r = s.id;
						if (i[r]) return i[r];
						const l = (i[r] = v({ client: T, controller: s }));
						return (
							l.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							l.init(),
							l
						);
					}
					static search(s) {
						const r = s.id;
						if (i[r]) return i[r];
						const l = (i[r] = A({ client: T, controller: s }));
						return (
							l.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							l.init(),
							l
						);
					}
				}
				function A(o) {
					const s = new D.V(new C.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), M.X);
					return new g.Tp(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new x.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new _.E(),
						profiler: new h.U(),
						logger: new c.V(),
						tracker: new d.J(o.client.globals),
					});
				}
				function p(o) {
					const s = new D.V(new C.E(), M.X).detach(!0);
					return new E.c(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new B.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new _.E(),
						profiler: new h.U(),
						logger: new c.V(),
						tracker: new d.J(o.client.globals),
					});
				}
				function v(o) {
					const s = new D.V(new C.E(), M.X).detach();
					return new u.Z(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new P.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new _.E(),
						profiler: new h.U(),
						logger: new c.V(),
						tracker: new d.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, n, e) {
				'use strict';
				e.d(n, { Z: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					E = (m) => {
						const P = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								P.current && m.className?.includes('lang-') && !m.className?.includes(u) && window?.Prism?.highlightElement(P.current);
							}, [m.className, m.children, P]),
							(0, t.Y)('code', { ...m, ref: P, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function n(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (y.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-CalloutBadge-CalloutBadge-stories.688a003f.iframe.bundle.js.map
