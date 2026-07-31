(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9671],
		{
			'./components/src/components/Organisms/TermsList/TermsList.stories.tsx'(D, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => f, __namedExportsOrder: () => x, default: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/components/Organisms/TermsList/TermsList.tsx');
				const g = `# TermsList

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
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: h.Z } }, children: g }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(P) =>
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
										(0, t.Y)(P, {}),
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
					f = (P, { loaded: { controller: b } }) => {
						const [v, d] = (0, s.J0)(!1),
							S = [
								{ active: v === 'dress', preview: () => d('dress'), value: 'dress', url: { href: '#' } },
								{ active: v === 'shirt', preview: () => d('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: v === 'shoes', preview: () => d('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: v === 'hat', preview: () => d('hat'), value: 'hat', url: { href: '#' } },
								{ active: v === 'pants', preview: () => d('pants'), value: 'pants', url: { href: '#' } },
								{ active: v === 'socks', preview: () => d('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								b.bind();
							}),
							(b.store.history = S),
							(0, t.Y)(n.G, { ...P, controller: b })
						);
					};
				(f.args = { retainHistory: !0, retainTrending: !0 }),
					(f.loaders = [async () => ({ controller: await C })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
  const [termState, setTermState] = useState(false);
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
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
								...f.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(D, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					n = e.n(m),
					g = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/hooks/useLang.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(b);
				const d = ({ vertical: u, theme: y }) =>
						(0, h.AH)({
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
								flexDirection: u ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: y?.variables?.colors?.primary } },
								},
							},
						}),
					S = (u) => u?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					R = (u, y) => {
						if (u && y) {
							const o = u.match(S(y));
							if (y && u && o && typeof o.index == 'number') {
								const i = u.slice(0, o.index),
									a = u.slice(o.index + y.length, u.length);
								return `${i ? `<em>${i}</em>` : ''}${y}${a ? `<em>${a}</em>` : ''}`;
							}
						}
						return `<em>${u}</em>`;
					},
					I = (0, c.PA)((u) => {
						const y = (0, E.u)(),
							i = { vertical: !0, previewOnHover: !0, treePath: (0, s.LU)() },
							a = (0, C.v6)('terms', y, i, u),
							{ title: _, onTermClick: p, limit: L, previewOnHover: $, emIfy: z, className: F, internalClassName: J, controller: T } = a,
							k = T?.store?.state?.input,
							w = a.terms,
							{ overrideElement: B, shouldRenderDefault: G } = (0, P._)('terms', a);
						if (!G) return B;
						const j = (0, f.Z)(a, d),
							H = (O, U) => {
								p && p(O, U), T?.setFocused && T?.setFocused();
							},
							A = L ? w?.slice(0, L) : w,
							Z = { title: { value: _ } },
							X = v()(Z, a.lang || {}),
							N = (0, x.u)({ title: X.title }, { controller: T }, { activeBreakpoint: y?.activeBreakpoint });
						return A?.length
							? (0, t.Y)(g._, {
									children: (0, t.FD)('div', {
										...j,
										className: n()('ss__terms', F, J),
										children: [
											_ ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...N.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': _,
												children: A?.map((O, U) => {
													const W = {
															term: {
																value: `${z ? R(O.value, k || '') : O.value}`,
																attributes: { 'aria-label': `${_ || ''} item ${U + 1} of ${A.length}, ${O.value}` },
															},
														},
														K = v()(W, a.lang || {}),
														Y = (0, x.u)({ term: K.term }, { index: U, numberOfTerms: A.length, term: O }, { activeBreakpoint: y?.activeBreakpoint });
													return (0, t.Y)('li', {
														className: n()('ss__terms__option', { 'ss__terms__option--active': O.active }),
														children: (0, t.Y)('a', { onClick: (V) => H(V, O), href: O.url.href, ...($ ? (0, r.l)(O.preview) : {}), ...Y.term?.all }),
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
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					n = e.n(m),
					g = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const b = ({}) =>
						(0, h.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					v = (0, c.PA)((d) => {
						const S = (0, E.u)(),
							R = (0, s.LU)(),
							I = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: R,
							},
							u = (0, f.v6)('termsList', S, I, d),
							{
								layout: y,
								historyTitle: o,
								verticalOptions: i,
								trendingTitle: a,
								suggestionTitle: _,
								retainHistory: p,
								retainTrending: L,
								treePath: $,
								disableStyles: z,
								className: F,
								internalClassName: J,
								controller: T,
							} = u,
							{ overrideElement: k, shouldRenderDefault: w } = (0, r._)('termsList', u);
						if (!w) return k;
						const B = { terms: { vertical: !!i, ...(0, C.s)({ disableStyles: z }), theme: u.theme, treePath: $ } },
							G = (0, x.Z)(u, b),
							j = T?.store.history || [],
							H = T?.store.terms || [],
							A = T?.store.trending || [],
							Z = A?.filter((M) => M.active).pop(),
							X = j?.filter((M) => M.active).pop(),
							{ loaded: N, results: O, state: U } = T?.store;
						let W = !1;
						A?.length && ((L && N) || (!O.length && !U.input)) && (W = !0);
						let K = !1;
						j?.length && ((p && N) || (!O.length && !U.input)) && (K = !0),
							!T.store.state.input && (X || Z) && (j?.length && (K = !0), A?.length && (W = !0));
						const Y = (M) => {
								if (typeof M != 'string') {
									const q = M?.map((Q) => Y(Q));
									return M?.some((Q, ee) => Q !== '_' && q[ee]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if (M == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (M == 'History' && K)
									return (0, t.Y)(P.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: o,
										terms: j,
										controller: T,
										name: 'history',
										limit: T.config.settings?.history?.limit,
										...B.terms,
									});
								if (M == 'Trending' && W)
									return (0, t.Y)(P.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: a,
										terms: A,
										controller: T,
										name: 'trending',
										limit: T.config.settings?.trending?.limit,
										...B.terms,
									});
								if (M == 'Suggestions')
									return H.length
										? (0, t.Y)(P.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: _,
												terms: H,
												controller: T,
												name: 'suggestions',
												...B.terms,
										  })
										: null;
							},
							V = y?.map((M) => Y(M));
						return V?.some(Boolean)
							? (0, t.Y)(g._, { children: (0, t.Y)('div', { ...G, className: n()('ss__terms-list', F, J), children: V }) })
							: null;
					});
				e.d(l, ['G', 0, v]);
			},
			'./components/src/hooks/useLang.tsx'(D, l, e) {
				'use strict';
				const t = (c, h, m) => {
					const n = m ? { ...h, ...m } : h,
						g = {};
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
								(g[E] = r);
						}),
						g
					);
				};
				e.d(l, ['u', 0, t]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(D, l, e) {
				'use strict';
				const t = (c, h = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (n) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									h.focusElem && n.target.focus(), c && c();
								}, h.delay || 333));
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
					const h = {};
					return (
						Object.keys(c).map((m) => {
							c[m] !== void 0 && (h[m] = c[m]);
						}),
						h
					);
				}
			},
			'./components/src/utilities/snapify.ts'(D, l, e) {
				'use strict';
				e.d(l, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					S = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(i) {
						const a = i.id;
						if (d[a]) return d[a];
						const _ = (d[a] = u({ client: S, controller: i }));
						return (
							_.on('afterStore', async ({ controller: p }, L) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await L();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(i) {
						const a = i.id;
						if (d[a]) return d[a];
						const _ = (d[a] = y({ client: S, controller: i }));
						return (
							_.on('afterStore', async ({ controller: p }, L) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await L();
							}),
							_.init(),
							_
						);
					}
					static search(i) {
						const a = i.id;
						if (d[a]) return d[a];
						const _ = (d[a] = I({ client: S, controller: i }));
						return (
							_.on('afterStore', async ({ controller: p }, L) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await L();
							}),
							_.init(),
							_
						);
					}
				}
				function I(o) {
					const i = new r.V(new f.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), C.X);
					return new c.Tp(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new E.U(o.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new P.U(),
						logger: new b.V(),
						tracker: new v.J(o.client.globals),
					});
				}
				function u(o) {
					const i = new r.V(new f.E(), C.X).detach(!0);
					return new m.c(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new s.t(o.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new P.U(),
						logger: new b.V(),
						tracker: new v.J(o.client.globals),
					});
				}
				function y(o) {
					const i = new r.V(new f.E(), C.X).detach();
					return new h.Z(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new g.Y(o.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new P.U(),
						logger: new b.V(),
						tracker: new v.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					m = (n) => {
						const g = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								g.current && n.className?.includes('lang-') && !n.className?.includes(h) && window?.Prism?.highlightElement(g.current);
							}, [n.className, n.children, g]),
							(0, t.Y)('code', { ...n, ref: g, 'data-prismjs-copy': 'Copy' })
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

//# sourceMappingURL=components-Organisms-TermsList-TermsList-stories.4160d985.iframe.bundle.js.map
