(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7191],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(y, n, e) {
				'use strict';
				const t = (i) => i.replace(/_/g, '-').toLowerCase();
				e.d(n, ['P', 0, t]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx'(y, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => m, __namedExportsOrder: () => v, default: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					P = e('./components/src/utilities/componentArgs.ts'),
					x = e('./components/src/utilities/snapify.ts');
				const T = `# CalloutBadge

Renders callout badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to display callout badges.

## Usage
\`\`\`tsx
import { CalloutBadge } from '@athoscommerce/snap-preact/components';
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`tsx
<CalloutBadge result={result} />
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`tsx
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

\`\`\`tsx
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

\`\`\`tsx
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

\`\`\`tsx
<CalloutBadge
    limit={3}
    result={result} 
/>
\`\`\`

### tag
The \`tag\` prop specifies the location name of this callout location, the default value is \`callout\`. 

When a custom \`tag\` is provided it also becomes the component \`name\`, so named theme selectors (e.g. \`'calloutBadge.callout-secondary'\`) can target that instance. Default usage (no \`tag\` prop) remains unnamed.

\`\`\`tsx
<CalloutBadge tag={'callout'} result={result} />
\`\`\`
`,
					O = {
						title: 'Molecules/CalloutBadge',
						component: E.W,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: l.Z } }, children: T }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(s) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [
										(0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
										(0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } }),
										(0, t.Y)(s, {}),
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
								description: 'Callout location tag; a custom tag also names the component so `calloutBadge.<tag>` theme selectors can target it',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'callout' } },
								control: { type: 'text' },
							},
							...P.F,
						},
					},
					h = x.p.search({ id: 'CalloutBadge', globals: { siteId: 'atkzs2' } }),
					M = (0, i.PA)(({ args: s, controller: c }) => (0, t.Y)(E.W, { ...s, result: c?.store?.results[0] })),
					m = (s, { loaded: { controller: c } }) => (0, t.Y)(M, { args: s, controller: c });
				(m.loaders = [
					async () => (
						h.on('afterSearch', ({ response: s }) => {
							(s.search.results[0].badges = [
								{ tag: 'free-shipping', value: 'Free Shipping' },
								{ tag: 'last-one', value: 'Last One!' },
								{ tag: 'on-sale', value: 'On Sale' },
								{ tag: 'save-percent', value: 'Save 30%' },
								{ tag: 'inventory-remaining', value: '1 in stock' },
							]),
								(s.meta = {
									...s.meta,
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
						await h.search(),
						{ controller: h }
					),
				]),
					(m.args = { tag: 'callout' }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
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
								...m.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(y, n, e) {
				'use strict';
				e.d(n, { z: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = () => (0, i.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					v = (0, l.PA)((s) => {
						const c = (0, x.u)(),
							f = { treePath: (0, T.LU)() },
							g = (0, O.v6)('badgeImage', c, f, s),
							{ label: _, url: C, tag: B, className: o, internalClassName: a } = g,
							{ overrideElement: r, shouldRenderDefault: d } = (0, M._)('badgeImage', g);
						if (!d) return r;
						const p = (0, h.Z)(g, m);
						return C
							? (0, t.Y)(P._, {
									children: (0, t.Y)('img', {
										...p,
										className: E()('ss__badge-image', `ss__badge-image--${B}`, o, a),
										alt: _ || `${B} badge`,
										src: C,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(y, n, e) {
				'use strict';
				e.d(n, { L: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = ({ color: s, colorText: c }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: s,
							color: c,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					v = (0, l.PA)((s) => {
						const c = (0, x.u)(),
							f = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, T.LU)() },
							g = (0, O.v6)('badgePill', c, f, s),
							{ value: _, tag: C, className: B, internalClassName: o } = g,
							{ overrideElement: a, shouldRenderDefault: r } = (0, M._)('badgePill', g);
						if (!r) return a;
						const d = (0, h.Z)(g, m);
						return _
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...d,
										className: E()('ss__badge-pill', `ss__badge-pill--${C}`, B, o),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: _ }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(y, n, e) {
				'use strict';
				e.d(n, { Z: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = ({ color: s, colorText: c }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: s,
							color: c,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					v = (0, l.PA)((s) => {
						const c = (0, x.u)(),
							f = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, T.LU)() },
							g = (0, O.v6)('badgeRectangle', c, f, s),
							{ value: _, tag: C, className: B, internalClassName: o } = g,
							{ overrideElement: a, shouldRenderDefault: r } = (0, M._)('badgeRectangle', g);
						if (!r) return a;
						const d = (0, h.Z)(g, m);
						return _
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...d,
										className: E()('ss__badge-rectangle', `ss__badge-rectangle--${C}`, B, o),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: _ }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(y, n, e) {
				'use strict';
				e.d(n, { p: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = ({ colorText: s }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: s,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					v = (0, l.PA)((s) => {
						const c = (0, x.u)(),
							f = { colorText: '#000000', treePath: (0, T.LU)() },
							g = (0, O.v6)('badgeText', c, f, s),
							{ value: _, tag: C, className: B, internalClassName: o } = g,
							{ overrideElement: a, shouldRenderDefault: r } = (0, M._)('badgeText', g);
						if (!r) return a;
						const d = (0, h.Z)(g, m);
						return _
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...d,
										className: E()('ss__badge-text', `ss__badge-text--${C}`, B, o),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: _ }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(y, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					v = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					s = e('./components/src/hooks/useComponent.tsx'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = () => (0, i.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					f = ({ badge: _, badgeComponentMap: C, treePath: B }) => {
						const { ComponentOverride: o } = (0, s.x)(C, _.component);
						return o ? (0, t.Y)(o, { ..._, ..._.parameters, treePath: B }) : null;
					},
					g = (0, l.PA)((_) => {
						const C = (0, x.u)(),
							B = (0, T.uk)(),
							o = (0, O.LU)(),
							a = { name: _.tag ? (0, v.P)(_.tag) : void 0, tag: 'callout', limit: 1, treePath: o },
							r = (0, h.v6)('calloutBadge', C, a, _),
							{ result: d, tag: p, renderEmpty: A, limit: L, className: I, internalClassName: U, treePath: W } = r,
							{ overrideElement: K, shouldRenderDefault: j } = (0, c._)('calloutBadge', r);
						if (!j) return K;
						const S = { ...m.q, ...(B?.templates?.library.import.component.badge || {}), ...r.componentMap },
							F = (0, M.Z)(r, D),
							R = d?.display?.badges?.atLocation(p).slice(0, L);
						return A || R?.length
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...F,
										className: E()('ss__callout-badge', `ss__callout-badge--${p?.replace('/', '-')}`, I, U),
										children: R.map((b, N) => (0, t.Y)(f, { badge: b, badgeComponentMap: S, treePath: W }, `${b.component}-${N}`)),
									}),
							  })
							: null;
					});
				e.d(n, ['W', 0, g]);
			},
			'./components/src/utilities/componentArgs.ts'(y, n, e) {
				'use strict';
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
				e.d(n, ['F', 0, t]);
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(y, n, e) {
				'use strict';
				e.d(n, { q: () => l });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					i = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					u = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					E = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const l = { BadgeText: () => t.p, BadgePill: () => i.L, BadgeRectangle: () => u.Z, BadgeImage: () => E.z };
			},
			'./components/src/utilities/snapify.ts'(y, n, e) {
				'use strict';
				e.d(n, { p: () => g });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					s = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					c = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const D = {},
					f = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(a) {
						const r = a.id;
						if (D[r]) return D[r];
						const d = (D[r] = C({ client: f, controller: a }));
						return (
							d.on('afterStore', async ({ controller: p }, A) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await A();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(a) {
						const r = a.id;
						if (D[r]) return D[r];
						const d = (D[r] = B({ client: f, controller: a }));
						return (
							d.on('afterStore', async ({ controller: p }, A) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await A();
							}),
							d.init(),
							d
						);
					}
					static search(a) {
						const r = a.id;
						if (D[r]) return D[r];
						const d = (D[r] = _({ client: f, controller: a }));
						return (
							d.on('afterStore', async ({ controller: p }, A) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await A();
							}),
							d.init(),
							d
						);
					}
				}
				function _(o) {
					const a = new O.V(new M.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), h.X);
					return new i.Tp(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new x.U(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new m.E(),
						profiler: new v.U(),
						logger: new s.V(),
						tracker: new c.J(o.client.globals),
					});
				}
				function C(o) {
					const a = new O.V(new M.E(), h.X).detach(!0);
					return new E.c(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new T.t(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new m.E(),
						profiler: new v.U(),
						logger: new s.V(),
						tracker: new c.J(o.client.globals),
					});
				}
				function B(o) {
					const a = new O.V(new M.E(), h.X).detach();
					return new u.Z(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new P.Y(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new m.E(),
						profiler: new v.U(),
						logger: new s.V(),
						tracker: new c.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					E = (l) => {
						const P = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								P.current && l.className?.includes('lang-') && !l.className?.includes(u) && window?.Prism?.highlightElement(P.current);
							}, [l.className, l.children, P]),
							(0, t.Y)('code', { ...l, ref: P, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(n, ['Z', 0, E]);
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function n(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (y.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-CalloutBadge-CalloutBadge-stories.fd7ac809.iframe.bundle.js.map
