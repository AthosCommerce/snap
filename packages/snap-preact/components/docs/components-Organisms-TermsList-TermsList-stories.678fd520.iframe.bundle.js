(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9671],
		{
			'./components/src/components/Organisms/TermsList/TermsList.stories.tsx'(D, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => y, __namedExportsOrder: () => x, default: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/components/Organisms/TermsList/TermsList.tsx');
				const h = `# TermsList

Renders a list of terms for autocomplete. 

## Usage

### Controller

The \`controller\` prop specifies a reference to the autocomplete controller.

\`\`\`tsx
<TermsList controller={controller} />
\`\`\`

### layout

The \`layout\` prop is used to determine which terms render and in what layout. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display. Options include 'Trending' | 'Suggestions' | 'History' | '_';

The \`_\` module is used a seperator module to center|left|right justify the other elements in the layout.

\`\`\`tsx
<TermsList controller={controller} layout={[['Trending'], ['Suggestions'], ['History']]}/>
\`\`\`

### horizontal

The \`horizontal\` prop specifies if the terms should be rendered horizontally.

\`\`\`tsx
<TermsList controller={controller} horizontal={true}/>
\`\`\` 

### verticalOptions

The \`verticalOptions\` prop specifies if the terms options should be rendered vertically.

\`\`\`tsx
<TermsList controller={controller} verticalOptions={true}/>
\`\`\` 

### historyTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`tsx
<TermsList controller={controller} historyTitle={'History Terms'}/>
\`\`\`

### suggestionTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`tsx
<TermsList controller={controller} suggestionTitle={'Suggested Terms'}/>
\`\`\`

### trendingTitle

The \`trendingTitle\` prop specifies the title to render above the trending terms.

\`\`\`tsx
<TermsList controller={controller} trendingTitle={'Trending Terms'}/>
\`\`\`


### retainHistory

The \`retainHistory\` prop will cause the history terms to always render. 

\`\`\`tsx
<TermsList controller={controller} retainHistory={true}/>
\`\`\`

### retainTrending

The \`retainTrending\` prop will cause the Trending terms to always render. 

\`\`\`tsx
<TermsList controller={controller} retainTrending={true}/>
\`\`\`
`;
				var E = e('./components/src/utilities/snapify.ts'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = {
						title: 'Organisms/TermsList',
						component: n.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: g.Z } }, children: h }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(M) =>
								(0, t.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb', marginBottom: '20px' },
										}),
										(0, t.Y)(M, {}),
									],
								}),
						],
						argTypes: {
							controller: {
								description: 'autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'autocomplete controller object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'array of modules to render in specified order',
								table: {
									category: 'Templates Legal',
									type: { summary: "['History' | 'Trending' | 'Suggestions' | '_']" },
									defaultValue: { summary: "[['Suggestions'], ['Trending'], ['History']]" },
								},
								control: 'none',
							},
							historyTitle: {
								description: 'history terms title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Recent Searches' } },
								control: { type: 'text' },
							},
							verticalOptions: {
								description: 'boolean to specify if the terms should be displayed vertically',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: void 0 } },
								control: { type: 'boolean' },
							},
							suggestionTitle: {
								description: 'suggested terms title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Search Suggestions' } },
								control: { type: 'text' },
							},
							trendingTitle: {
								description: 'trending terms title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Popular Searches' } },
								control: { type: 'text' },
							},
							retainHistory: {
								description: 'boolean to specify if the history terms should always be rendered',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							retainTrending: {
								description: 'boolean to specify if the trending terms should always be rendered',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...m.F,
						},
					},
					C = E.p.autocomplete({
						id: 'Autocomplete-TermsList',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					y = (M, { loaded: { controller: b } }) => {
						const [f, u] = (0, s.J0)(''),
							S = [
								{ active: f === 'dress', preview: () => u('dress'), value: 'dress', type: 'suggested', url: { href: '#' } },
								{ active: f === 'shirt', preview: () => u('shirt'), value: 'shirt', type: 'suggested', url: { href: '#' } },
								{ active: f === 'shoes', preview: () => u('shoes'), value: 'shoes', type: 'suggested', url: { href: '#' } },
								{ active: f === 'hat', preview: () => u('hat'), value: 'hat', type: 'suggested', url: { href: '#' } },
								{ active: f === 'pants', preview: () => u('pants'), value: 'pants', type: 'suggested', url: { href: '#' } },
								{ active: f === 'socks', preview: () => u('socks'), value: 'socks', type: 'suggested', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								b.bind();
							}),
							(b.store.history = S),
							(0, t.Y)(n.G, { ...M, controller: b })
						);
					};
				(y.args = { retainHistory: !0, retainTrending: !0 }),
					(y.loaders = [async () => ({ controller: await C })]),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: TermsListProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  const [termState, setTermState] = useState('');
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
    type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
    url: {
      href: '#'
    } as UrlManager
  }];
  setTimeout(() => {
    controller.bind();
  });
  controller.store.history = mockTerms;
  return <TermsList {...args} controller={controller} />;
}`,
								...y.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(D, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					n = e.n(m),
					h = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(b);
				const u = ({ vertical: d, theme: v }) =>
						(0, g.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: d ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: v?.variables?.colors?.primary } },
								},
							},
						}),
					S = (d) => d?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					j = (d, v) => {
						if (d && v) {
							const o = d.match(S(v));
							if (v && d && o && typeof o.index == 'number') {
								const i = d.slice(0, o.index),
									a = d.slice(o.index + v.length, d.length);
								return `${i ? `<em>${i}</em>` : ''}${v}${a ? `<em>${a}</em>` : ''}`;
							}
						}
						return `<em>${d}</em>`;
					},
					I = (0, c.PA)((d) => {
						const v = (0, E.u)(),
							i = { vertical: !0, previewOnHover: !0, treePath: (0, s.LU)() },
							a = (0, C.v6)('terms', v, i, d),
							{ title: p, onTermClick: _, limit: L, previewOnHover: $, emIfy: z, className: F, internalClassName: J, controller: T } = a,
							k = T?.store?.state?.input,
							w = a.terms,
							{ overrideElement: B, shouldRenderDefault: G } = (0, M._)('terms', a);
						if (!G) return B;
						const R = (0, y.Z)(a, u),
							H = (P, U) => {
								_ && _(P, U), T?.setFocused && T?.setFocused();
							},
							A = L ? w?.slice(0, L) : w,
							Z = { title: { value: p } },
							X = f()(Z, a.lang || {}),
							N = (0, x.u)({ title: X.title }, { controller: T }, { activeBreakpoint: v?.activeBreakpoint });
						return A?.length
							? (0, t.Y)(h._, {
									children: (0, t.FD)('div', {
										...R,
										className: n()('ss__terms', F, J),
										children: [
											p ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...N.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': p,
												children: A?.map((P, U) => {
													const W = {
															term: {
																value: `${z ? j(P.value, k || '') : P.value}`,
																attributes: { 'aria-label': `${p || ''} item ${U + 1} of ${A.length}, ${P.value}` },
															},
														},
														K = f()(W, a.lang || {}),
														Y = (0, x.u)({ term: K.term }, { index: U, numberOfTerms: A.length, term: P }, { activeBreakpoint: v?.activeBreakpoint });
													return (0, t.Y)('li', {
														className: n()('ss__terms__option', { 'ss__terms__option--active': P.active }),
														children: (0, t.Y)('a', { onClick: (V) => H(V, P), href: P.url.href, ...($ ? (0, r.l)(P.preview) : {}), ...Y.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(l, ['i', 0, I]);
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(D, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					n = e.n(m),
					h = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const b = ({}) =>
						(0, g.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					f = (0, c.PA)((u) => {
						const S = (0, E.u)(),
							j = (0, s.LU)(),
							I = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: j,
							},
							d = (0, y.v6)('termsList', S, I, u),
							{
								layout: v,
								historyTitle: o,
								verticalOptions: i,
								trendingTitle: a,
								suggestionTitle: p,
								retainHistory: _,
								retainTrending: L,
								treePath: $,
								disableStyles: z,
								className: F,
								internalClassName: J,
								controller: T,
							} = d,
							{ overrideElement: k, shouldRenderDefault: w } = (0, r._)('termsList', d);
						if (!w) return k;
						const B = { terms: { vertical: !!i, ...(0, C.s)({ disableStyles: z }), theme: d.theme, treePath: $ } },
							G = (0, x.Z)(d, b),
							R = T?.store.history || [],
							H = T?.store.terms || [],
							A = T?.store.trending || [],
							Z = A?.filter((O) => O.active).pop(),
							X = R?.filter((O) => O.active).pop(),
							{ loaded: N, results: P, state: U } = T?.store;
						let W = !1;
						A?.length && ((L && N) || (!P.length && !U.input)) && (W = !0);
						let K = !1;
						R?.length && ((_ && N) || (!P.length && !U.input)) && (K = !0),
							!T.store.state.input && (X || Z) && (R?.length && (K = !0), A?.length && (W = !0));
						const Y = (O) => {
								if (typeof O != 'string') {
									const q = O?.map((Q) => Y(Q));
									return O?.some((Q, ee) => Q !== '_' && q[ee]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if (O == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (O == 'History' && K)
									return (0, t.Y)(M.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: o,
										terms: R,
										controller: T,
										name: 'history',
										limit: T.config.settings?.history?.limit,
										...B.terms,
									});
								if (O == 'Trending' && W)
									return (0, t.Y)(M.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: a,
										terms: A,
										controller: T,
										name: 'trending',
										limit: T.config.settings?.trending?.limit,
										...B.terms,
									});
								if (O == 'Suggestions')
									return H.length
										? (0, t.Y)(M.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: p,
												terms: H,
												controller: T,
												name: 'suggestions',
												...B.terms,
										  })
										: null;
							},
							V = v?.map((O) => Y(O));
						return V?.some(Boolean)
							? (0, t.Y)(h._, { children: (0, t.Y)('div', { ...G, className: n()('ss__terms-list', F, J), children: V }) })
							: null;
					});
				e.d(l, ['G', 0, f]);
			},
			'./components/src/hooks/useLang.tsx'(D, l, e) {
				'use strict';
				const t = (c, g, m) => {
					const n = m ? { ...g, ...m } : g,
						h = {};
					return (
						Object.keys(c).forEach((E) => {
							const s = c && c[E],
								r = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (r.value = { 'ss-lang': E, dangerouslySetInnerHTML: { __html: s.value(n) } })
										: (r.value = { 'ss-lang': E, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((r.attributes = { 'ss-lang': E }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = s.attributes['aria-label'](n))
											: (r.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](n))
											: (r.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (r.attributes.title = s.attributes.title(n))
											: (r.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (r.attributes.alt = s.attributes.alt(n)) : (r.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = s.attributes.placeholder(n))
											: (r.attributes.placeholder = s.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': E })),
								(h[E] = r);
						}),
						h
					);
				};
				e.d(l, ['u', 0, t]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(D, l, e) {
				'use strict';
				const t = (c, g = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (n) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									g.focusElem && n.target.focus(), c && c();
								}, g.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
				e.d(l, ['l', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(D, l, e) {
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
				e.d(l, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(D, l, e) {
				'use strict';
				e.d(l, { s: () => t });
				function t(c) {
					const g = {};
					return (
						Object.keys(c).map((m) => {
							c[m] !== void 0 && (g[m] = c[m]);
						}),
						g
					);
				}
			},
			'./components/src/utilities/snapify.ts'(D, l, e) {
				'use strict';
				e.d(l, { p: () => j });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					S = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(i) {
						const a = i.id;
						if (u[a]) return u[a];
						const p = (u[a] = d({ client: S, controller: i }));
						return (
							p.on('afterStore', async ({ controller: _ }, L) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await L();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(i) {
						const a = i.id;
						if (u[a]) return u[a];
						const p = (u[a] = v({ client: S, controller: i }));
						return (
							p.on('afterStore', async ({ controller: _ }, L) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await L();
							}),
							p.init(),
							p
						);
					}
					static search(i) {
						const a = i.id;
						if (u[a]) return u[a];
						const p = (u[a] = I({ client: S, controller: i }));
						return (
							p.on('afterStore', async ({ controller: _ }, L) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await L();
							}),
							p.init(),
							p
						);
					}
				}
				function I(o) {
					const i = new r.V(new y.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), C.X);
					return new c.Tp(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new E.U(o.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new M.U(),
						logger: new b.V(),
						tracker: new f.J(o.client.globals),
					});
				}
				function d(o) {
					const i = new r.V(new y.E(), C.X).detach(!0);
					return new m.c(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new s.t(o.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new M.U(),
						logger: new b.V(),
						tracker: new f.J(o.client.globals),
					});
				}
				function v(o) {
					const i = new r.V(new y.E(), C.X).detach();
					return new g.Z(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new h.Y(o.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new M.U(),
						logger: new b.V(),
						tracker: new f.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 'prism-block',
					m = (n) => {
						const h = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								h.current && n.className?.includes('lang-') && !n.className?.includes(g) && window?.Prism?.highlightElement(h.current);
							}, [n.className, n.children, h]),
							(0, t.Y)('code', { ...n, ref: h, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, m]);
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function l(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (D.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-TermsList-TermsList-stories.678fd520.iframe.bundle.js.map
