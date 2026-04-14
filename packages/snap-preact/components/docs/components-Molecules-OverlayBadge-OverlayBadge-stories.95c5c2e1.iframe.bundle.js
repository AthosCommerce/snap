(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9907],
		{
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx'(f, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => g, __namedExportsOrder: () => D, default: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					v = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					P = e('./components/src/utilities/componentArgs.ts'),
					C = e('./components/src/utilities/snapify.ts');
				const T = `# OverlayBadge

Renders overlay badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to wrap elements (children) that should have overlay badges.

## Usage
\`\`\`jsx
import { OverlayBadge } from '@athoscommerce/snap-preact/components';
\`\`\`

### children
The required children provided to the component will be wrapped and rendered in a relative div to allow badges to be positioned absolutely. 

\`\`\`jsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### controller
The required \`controller\` prop specifies a reference to the controller.

\`\`\`jsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`jsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`jsx
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

\`\`\`jsx
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

\`\`\`jsx
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

\`\`\`jsx
<OverlayBadge
    limit={3}
    controller={controller}
    result={result}
/>
\`\`\`
`,
					x = {
						title: 'Molecules/OverlayBadge',
						component: v.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(E.oz, { options: { overrides: { code: c.Z } }, children: T }), (0, t.Y)(E.uY, { story: E.h1 })],
									}),
							},
						},
						decorators: [
							(i) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [(0, t.Y)(i, {}), (0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } })],
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
					M = C.p.search({ id: 'OverlayBadge', globals: { siteId: 'atkzs2' } }),
					B = (0, u.PA)(({ args: i, controller: m }) =>
						(0, t.Y)(v.Q, {
							...i,
							controller: m,
							result: m?.store?.results[0],
							children: (0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
						})
					),
					g = (i, { loaded: { controller: m } }) => (0, t.Y)(B, { args: i, controller: m });
				(g.loaders = [
					async () => (
						M.on('afterSearch', ({ response: i }) => {
							(i.search.results[0].badges = [
								{ tag: 'free-shipping', value: 'Free Shipping' },
								{ tag: 'last-one', value: 'Last One!' },
								{ tag: 'on-sale', value: 'On Sale' },
								{ tag: 'save-percent', value: 'Save 30%' },
								{ tag: 'inventory-remaining', value: '1 in stock' },
							]),
								(i.meta = {
									...i.meta,
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
						await M.search(),
						{ controller: M }
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
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(f, r, e) {
				'use strict';
				e.d(r, { z: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					v = e.n(E),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const D = () => (0, u.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					i = (0, c.PA)((m) => {
						const d = (0, C.u)(),
							y = (0, T.uk)(),
							p = { treePath: (0, x.LU)() },
							_ = (0, M.v6)('badgeImage', d, p, m),
							{ label: O, url: o, tag: s, className: n, internalClassName: a, customComponent: l } = _;
						if (l) {
							const U = (0, g.x)(y?.templates?.library.import.component.badgeImage || {}, l);
							if (U) return (0, t.Y)(U, { ..._ });
						}
						const h = (0, B.Z)(_, D);
						return o
							? (0, t.Y)(P._, {
									children: (0, t.Y)('img', {
										...h,
										className: v()('ss__badge-image', `ss__badge-image--${s}`, n, a),
										alt: O || `${s} badge`,
										src: o,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(f, r, e) {
				'use strict';
				e.d(r, { L: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					v = e.n(E),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const D = ({ color: m, colorText: d }) =>
						(0, u.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: m,
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					i = (0, c.PA)((m) => {
						const d = (0, C.u)(),
							y = (0, T.uk)(),
							p = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, x.LU)() },
							_ = (0, M.v6)('badgePill', d, p, m),
							{ value: O, tag: o, className: s, internalClassName: n, customComponent: a } = _;
						if (a) {
							const h = (0, g.x)(y?.templates?.library.import.component.badgePill || {}, a);
							if (h) return (0, t.Y)(h, { ..._ });
						}
						const l = (0, B.Z)(_, D);
						return O
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...l,
										className: v()('ss__badge-pill', `ss__badge-pill--${o}`, s, n),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: O }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(f, r, e) {
				'use strict';
				e.d(r, { Z: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					v = e.n(E),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const D = ({ color: m, colorText: d }) =>
						(0, u.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: m,
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					i = (0, c.PA)((m) => {
						const d = (0, C.u)(),
							y = (0, T.uk)(),
							p = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, x.LU)() },
							_ = (0, M.v6)('badgeRectangle', d, p, m),
							{ value: O, tag: o, className: s, internalClassName: n, customComponent: a } = _;
						if (a) {
							const h = (0, g.x)(y?.templates?.library.import.component.badgeRectangle || {}, a);
							if (h) return (0, t.Y)(h, { ..._ });
						}
						const l = (0, B.Z)(_, D);
						return O
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...l,
										className: v()('ss__badge-rectangle', `ss__badge-rectangle--${o}`, s, n),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: O }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(f, r, e) {
				'use strict';
				e.d(r, { p: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					v = e.n(E),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const D = ({ colorText: m }) =>
						(0, u.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: m,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					i = (0, c.PA)((m) => {
						const d = (0, C.u)(),
							y = (0, T.uk)(),
							p = { colorText: '#000000', treePath: (0, x.LU)() },
							_ = (0, M.v6)('badgeText', d, p, m),
							{ value: O, tag: o, className: s, internalClassName: n, customComponent: a } = _;
						if (a) {
							const h = (0, g.x)(y?.templates?.library.import.component.badgeText || {}, a);
							if (h) return (0, t.Y)(h, { ..._ });
						}
						const l = (0, B.Z)(_, D);
						return O
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...l,
										className: v()('ss__badge-text', `ss__badge-text--${o}`, s, n),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: O }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(f, r, e) {
				'use strict';
				e.d(r, { Q: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					v = e.n(E),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					D = e('./components/src/hooks/useComponent.tsx');
				const i = ({ section: y, top: b, bottom: p, index: _, tag: O }) =>
						(0, u.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: y == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !b && !p ? 'center' : p && !b ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: O,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - _, 1),
							width: '100%',
							height: '100%',
						}),
					m = ({ controller: y }) => {
						const p = y?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let _ = {};
						if (p?.length && p[0]?.length) {
							const O = p.map((s) => `"${s.join(' ')}"`).join(' ');
							_ = {
								gridTemplateColumns: `repeat(${p[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${p.length}, minmax(0, 1fr))`,
								gridTemplateAreas: O,
							};
						}
						return (0, u.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								..._,
							},
						});
					},
					d = (0, c.PA)((y) => {
						const b = (0, C.u)(),
							p = (0, T.uk)(),
							O = { limit: 1, treePath: (0, x.LU)() },
							o = (0, M.v6)('overlayBadge', b, O, y),
							{
								result: s,
								children: n,
								controller: a,
								renderEmpty: l,
								limit: h,
								className: U,
								internalClassName: Y,
								treePath: N,
								customComponent: W,
							} = o;
						if (W) {
							const A = (0, D.x)(p?.templates?.library.import.component.overlayBadge || {}, W);
							if (A) return (0, t.Y)(A, { ...o });
						}
						if (!n) return a?.log?.warn('OverlayBadge component must have children'), null;
						const j = a?.store?.meta;
						if (!j) return a?.log?.warn('Controller must have a meta store'), (0, t.Y)(t.FK, { children: n });
						const w = 'overlay',
							z = { ...g.q, ...(p?.templates?.library.import.component.badge || {}), ...o.componentMap },
							S = j?.badges?.groups?.[w]?.sections
								?.map((A) => {
									const K = j?.data?.badges?.locations[A],
										R = K?.map((I, L) => ({
											tag: I.tag,
											name: I.name,
											top: L == 0,
											bottom: L == K.length - 1,
											badges: s?.display.badges?.atLocation(`${A}/${I.tag}`).slice(0, h),
										})).filter((I) => I.badges?.length);
									return { section: A, slots: R };
								})
								.filter((A) => A.slots?.length),
							$ = (0, B.Z)(o, m);
						return l || S?.length
							? (0, t.Y)(P._, {
									children: (0, t.FD)('div', {
										...$,
										className: v()('ss__overlay-badge', U, Y),
										children: [
											(0, t.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: S.map((A, K) =>
													A.slots?.map((R) => {
														const I = i({ ...o, tag: R.tag, section: A.section, index: K, top: R.top, bottom: R.bottom });
														return (0, t.Y)('div', {
															className: v()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${R.tag}`),
															css: [I],
															children: R.badges.map((L) => {
																const F = (0, D.x)(z, L.component);
																return F ? (0, t.Y)(F, { ...L, ...L.parameters, treePath: N }) : null;
															}),
														});
													})
												),
											}),
											n,
										],
									}),
							  })
							: (0, t.Y)(t.FK, { children: n });
					});
			},
			'./components/src/utilities/componentArgs.ts'(f, r, e) {
				'use strict';
				e.d(r, { F: () => t });
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(f, r, e) {
				'use strict';
				e.d(r, { q: () => c });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					u = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					E = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					v = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const c = { BadgeText: () => t.p, BadgePill: () => u.L, BadgeRectangle: () => E.Z, BadgeImage: () => v.z };
			},
			'./components/src/utilities/snapify.ts'(f, r, e) {
				'use strict';
				e.d(r, { p: () => b });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					c = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					B = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					i = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					m = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					y = { globals: { siteId: 'atkzs2' } };
				class b {
					static recommendation(s) {
						const n = s.id;
						if (d[n]) return d[n];
						const a = (d[n] = _({ client: y, controller: s }));
						return (
							a.on('afterStore', async ({ controller: l }, h) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await h();
							}),
							a.init(),
							a
						);
					}
					static autocomplete(s) {
						const n = s.id;
						if (d[n]) return d[n];
						const a = (d[n] = O({ client: y, controller: s }));
						return (
							a.on('afterStore', async ({ controller: l }, h) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await h();
							}),
							a.init(),
							a
						);
					}
					static search(s) {
						const n = s.id;
						if (d[n]) return d[n];
						const a = (d[n] = p({ client: y, controller: s }));
						return (
							a.on('afterStore', async ({ controller: l }, h) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await h();
							}),
							a.init(),
							a
						);
					}
				}
				function p(o) {
					const s = new x.V(new B.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), M.X);
					return new u.Tp(o.controller, {
						client: new c.K(o.client.globals, o.client.config),
						store: new C.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new g.E(),
						profiler: new D.U(),
						logger: new i.V(),
						tracker: new m.J(o.client.globals),
					});
				}
				function _(o) {
					const s = new x.V(new B.E(), M.X).detach(!0);
					return new v.c(o.controller, {
						client: new c.K(o.client.globals, o.client.config),
						store: new T.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new g.E(),
						profiler: new D.U(),
						logger: new i.V(),
						tracker: new m.J(o.client.globals),
					});
				}
				function O(o) {
					const s = new x.V(new B.E(), M.X).detach();
					return new E.Z(o.controller, {
						client: new c.K(o.client.globals, o.client.config),
						store: new P.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new g.E(),
						profiler: new D.U(),
						logger: new i.V(),
						tracker: new m.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(f, r, e) {
				'use strict';
				e.d(r, { Z: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 'prism-block',
					v = (c) => {
						const P = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								P.current && c.className?.includes('lang-') && !c.className?.includes(E) && window?.Prism?.highlightElement(P.current);
							}, [c.className, c.children, P]),
							(0, t.Y)('code', { ...c, ref: P, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(f) {
				function r(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (f.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-OverlayBadge-OverlayBadge-stories.95c5c2e1.iframe.bundle.js.map
