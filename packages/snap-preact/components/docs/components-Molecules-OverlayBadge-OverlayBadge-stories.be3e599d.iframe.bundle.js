(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9907],
		{
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx'(T, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => g, __namedExportsOrder: () => D, default: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					P = e('./components/src/utilities/componentArgs.ts'),
					B = e('./components/src/utilities/snapify.ts');
				const f = `# OverlayBadge

Renders overlay badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to wrap elements (children) that should have overlay badges.

## Usage
\`\`\`tsx
import { OverlayBadge } from '@athoscommerce/snap-preact/components';
\`\`\`

### children
The required children provided to the component will be wrapped and rendered in a relative div to allow badges to be positioned absolutely. 

\`\`\`tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### controller
The required \`controller\` prop specifies a reference to the controller.

\`\`\`tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`tsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

The \`componentMap\` also supports async functions for dynamic importing of badges.

\`\`\`tsx
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element \`ss__overlay-badge\` to render.

\`\`\`tsx
<OverlayBadge
    renderEmpty
    controller={controller}
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### limit
The overlay badge will by default only render a single badge per overlay slot (left and right by default), but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the overlay slots. The order of the stack is determined by the ASD badge configuration.

\`\`\`tsx
<OverlayBadge
    limit={3}
    controller={controller}
    result={result}
/>
\`\`\`
`,
					M = {
						title: 'Molecules/OverlayBadge',
						component: E.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: l.Z } }, children: f }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(n) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [(0, t.Y)(n, {}), (0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } })],
								}),
						],
						argTypes: {
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							children: {
								description: 'Overlay content to be displayed',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
							},
							componentMap: {
								description: 'Component map containing custom badge component',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							renderEmpty: {
								description: 'Render wrapper element even when there are no badges',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							limit: {
								description: 'Number of badges per slot',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: '1' } },
								control: { type: 'number' },
							},
							...P.F,
						},
					},
					h = B.p.search({ id: 'OverlayBadge', globals: { siteId: 'atkzs2' } }),
					y = (0, p.PA)(({ args: n, controller: d }) =>
						(0, t.Y)(E.Q, {
							...n,
							controller: d,
							result: d?.store?.results[0],
							children: (0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
						})
					),
					g = (n, { loaded: { controller: d } }) => (0, t.Y)(y, { args: n, controller: d });
				(g.loaders = [
					async () => (
						h.on('afterSearch', ({ response: n }) => {
							(n.search.results[0].badges = [
								{ tag: 'free-shipping', value: 'Free Shipping' },
								{ tag: 'last-one', value: 'Last One!' },
								{ tag: 'on-sale', value: 'On Sale' },
								{ tag: 'save-percent', value: 'Save 30%' },
								{ tag: 'inventory-remaining', value: '1 in stock' },
							]),
								(n.meta = {
									...n.meta,
									badges: {
										locations: {
											left: [{ tag: 'left', name: 'Left' }],
											right: [{ tag: 'right', name: 'Right' }],
											callout: [{ tag: 'callout', name: 'Callout' }],
										},
										tags: {
											'free-shipping': {
												location: 'left/left',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#1d4990', colorText: '#FFFFFF' },
											},
											'last-one': {
												location: 'left/left',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#515151', colorText: '#FFFFFF' },
											},
											'inventory-remaining': {
												location: 'left/left',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#382F5A', colorText: '#FFFFFF' },
											},
											'on-sale': {
												location: 'right/right',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
											},
											'save-percent': {
												location: 'right/right',
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
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: OverlayBadgeProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableOverlayBadge args={args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const D = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(T, a, e) {
				'use strict';
				e.d(a, { z: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = () => (0, p.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					D = (0, l.PA)((n) => {
						const d = (0, B.u)(),
							C = { treePath: (0, f.LU)() },
							v = (0, M.v6)('badgeImage', d, C, n),
							{ label: i, url: O, tag: m, className: o, internalClassName: s } = v,
							{ overrideElement: r, shouldRenderDefault: c } = (0, y._)('badgeImage', v);
						if (!c) return r;
						const _ = (0, h.Z)(v, g);
						return O
							? (0, t.Y)(P._, {
									children: (0, t.Y)('img', {
										..._,
										className: E()('ss__badge-image', `ss__badge-image--${m}`, o, s),
										alt: i || `${m} badge`,
										src: O,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(T, a, e) {
				'use strict';
				e.d(a, { L: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = ({ color: n, colorText: d }) =>
						(0, p.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: n,
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					D = (0, l.PA)((n) => {
						const d = (0, B.u)(),
							C = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							v = (0, M.v6)('badgePill', d, C, n),
							{ value: i, tag: O, className: m, internalClassName: o } = v,
							{ overrideElement: s, shouldRenderDefault: r } = (0, y._)('badgePill', v);
						if (!r) return s;
						const c = (0, h.Z)(v, g);
						return i
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...c,
										className: E()('ss__badge-pill', `ss__badge-pill--${O}`, m, o),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(T, a, e) {
				'use strict';
				e.d(a, { Z: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = ({ color: n, colorText: d }) =>
						(0, p.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: n,
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					D = (0, l.PA)((n) => {
						const d = (0, B.u)(),
							C = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							v = (0, M.v6)('badgeRectangle', d, C, n),
							{ value: i, tag: O, className: m, internalClassName: o } = v,
							{ overrideElement: s, shouldRenderDefault: r } = (0, y._)('badgeRectangle', v);
						if (!r) return s;
						const c = (0, h.Z)(v, g);
						return i
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...c,
										className: E()('ss__badge-rectangle', `ss__badge-rectangle--${O}`, m, o),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(T, a, e) {
				'use strict';
				e.d(a, { p: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = ({ colorText: n }) =>
						(0, p.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: n,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					D = (0, l.PA)((n) => {
						const d = (0, B.u)(),
							C = { colorText: '#000000', treePath: (0, f.LU)() },
							v = (0, M.v6)('badgeText', d, C, n),
							{ value: i, tag: O, className: m, internalClassName: o } = v,
							{ overrideElement: s, shouldRenderDefault: r } = (0, y._)('badgeText', v);
						if (!r) return s;
						const c = (0, h.Z)(v, g);
						return i
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...c,
										className: E()('ss__badge-text', `ss__badge-text--${O}`, m, o),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(T, a, e) {
				'use strict';
				e.d(a, { Q: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					D = e('./components/src/hooks/useComponent.tsx'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const d = ({ section: i, top: O, bottom: m, index: o, tag: s }) =>
						(0, p.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: i == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !O && !m ? 'center' : m && !O ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: s,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - o, 1),
							width: '100%',
							height: '100%',
						}),
					x = ({ controller: i }) => {
						const m = i?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let o = {};
						if (m?.length && m[0]?.length) {
							const s = m.map((c) => `"${c.join(' ')}"`).join(' ');
							o = {
								gridTemplateColumns: `repeat(${m[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${m.length}, minmax(0, 1fr))`,
								gridTemplateAreas: s,
							};
						}
						return (0, p.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...o,
							},
						});
					},
					C = ({ badge: i, badgeComponentMap: O, treePath: m }) => {
						const { ComponentOverride: o } = (0, D.x)(O, i.component);
						return o ? (0, t.Y)(o, { ...i, ...i.parameters, treePath: m }) : null;
					},
					v = (0, l.PA)((i) => {
						const O = (0, B.u)(),
							m = (0, f.uk)(),
							s = { limit: 1, treePath: (0, M.LU)() },
							r = (0, h.v6)('overlayBadge', O, s, i),
							{ result: c, children: _, controller: b, renderEmpty: j, limit: S, className: F, internalClassName: N, treePath: Y } = r,
							{ overrideElement: w, shouldRenderDefault: $ } = (0, n._)('overlayBadge', r);
						if (!$) return w;
						if (!_) return b?.log?.warn('OverlayBadge component must have children'), null;
						const K = b?.store?.meta;
						if (!K) return b?.log?.warn('Controller must have a meta store'), (0, t.Y)(t.FK, { children: _ });
						const z = 'overlay',
							V = { ...g.q, ...(m?.templates?.library.import.component.badge || {}), ...r.componentMap },
							W = K?.badges?.groups?.[z]?.sections
								?.map((A) => {
									const U = K?.data?.badges?.locations[A],
										R = U?.map((I, L) => ({
											tag: I.tag,
											name: I.name,
											top: L == 0,
											bottom: L == U.length - 1,
											badges: c?.display.badges?.atLocation(`${A}/${I.tag}`).slice(0, S),
										})).filter((I) => I.badges?.length);
									return { section: A, slots: R };
								})
								.filter((A) => A.slots?.length),
							Z = (0, y.Z)(r, x);
						return j || W?.length
							? (0, t.Y)(P._, {
									children: (0, t.FD)('div', {
										...Z,
										className: E()('ss__overlay-badge', F, N),
										children: [
											(0, t.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: W.map((A, U) =>
													A.slots?.map((R) => {
														const I = d({ ...r, tag: R.tag, section: A.section, index: U, top: R.top, bottom: R.bottom });
														return (0, t.Y)(
															'div',
															{
																className: E()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${R.tag}`),
																css: [I],
																children: R.badges.map((L, J) =>
																	(0, t.Y)(C, { badge: L, badgeComponentMap: V, treePath: Y }, `${R.tag}-${L.component}-${J}`)
																),
															},
															`${A.section}-${R.tag}`
														);
													})
												),
											}),
											_,
										],
									}),
							  })
							: (0, t.Y)(t.FK, { children: _ });
					});
			},
			'./components/src/utilities/componentArgs.ts'(T, a, e) {
				'use strict';
				e.d(a, { F: () => t });
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(T, a, e) {
				'use strict';
				e.d(a, { q: () => l });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					p = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					u = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					E = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const l = { BadgeText: () => t.p, BadgePill: () => p.L, BadgeRectangle: () => u.Z, BadgeImage: () => E.z };
			},
			'./components/src/utilities/snapify.ts'(T, a, e) {
				'use strict';
				e.d(a, { p: () => v });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					n = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					d = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const x = {},
					C = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(s) {
						const r = s.id;
						if (x[r]) return x[r];
						const c = (x[r] = O({ client: C, controller: s }));
						return (
							c.on('afterStore', async ({ controller: _ }, b) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await b();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(s) {
						const r = s.id;
						if (x[r]) return x[r];
						const c = (x[r] = m({ client: C, controller: s }));
						return (
							c.on('afterStore', async ({ controller: _ }, b) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await b();
							}),
							c.init(),
							c
						);
					}
					static search(s) {
						const r = s.id;
						if (x[r]) return x[r];
						const c = (x[r] = i({ client: C, controller: s }));
						return (
							c.on('afterStore', async ({ controller: _ }, b) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await b();
							}),
							c.init(),
							c
						);
					}
				}
				function i(o) {
					const s = new M.V(new y.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), h.X);
					return new p.Tp(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new B.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new g.E(),
						profiler: new D.U(),
						logger: new n.V(),
						tracker: new d.J(o.client.globals),
					});
				}
				function O(o) {
					const s = new M.V(new y.E(), h.X).detach(!0);
					return new E.c(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new f.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new g.E(),
						profiler: new D.U(),
						logger: new n.V(),
						tracker: new d.J(o.client.globals),
					});
				}
				function m(o) {
					const s = new M.V(new y.E(), h.X).detach();
					return new u.Z(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new P.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new g.E(),
						profiler: new D.U(),
						logger: new n.V(),
						tracker: new d.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, a, e) {
				'use strict';
				e.d(a, { Z: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					E = (l) => {
						const P = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								P.current && l.className?.includes('lang-') && !l.className?.includes(u) && window?.Prism?.highlightElement(P.current);
							}, [l.className, l.children, P]),
							(0, t.Y)('code', { ...l, ref: P, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (T.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-OverlayBadge-OverlayBadge-stories.be3e599d.iframe.bundle.js.map
