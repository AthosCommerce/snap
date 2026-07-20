(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9671],
		{
			'./components/src/components/Organisms/TermsList/TermsList.stories.tsx'(M, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => g, __namedExportsOrder: () => b, default: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/components/Organisms/TermsList/TermsList.tsx');
				const t = `# TermsList

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
				var a = e('./components/src/utilities/snapify.ts'),
					A = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const x = {
						title: 'Organisms/TermsList',
						component: o.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(c.oz, { options: { overrides: { code: m.Z } }, children: t }), (0, s.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(v) =>
								(0, s.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, s.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb', marginBottom: '20px' },
										}),
										(0, s.Y)(v, {}),
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
							...u.F,
						},
					},
					L = a.p.autocomplete({
						id: 'Autocomplete-TermsList',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					g = (v, { loaded: { controller: O } }) => {
						const [f, d] = (0, A.J0)(!1),
							C = [
								{ active: f === 'dress', preview: () => d('dress'), value: 'dress', url: { href: '#' } },
								{ active: f === 'shirt', preview: () => d('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: f === 'shoes', preview: () => d('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: f === 'hat', preview: () => d('hat'), value: 'hat', url: { href: '#' } },
								{ active: f === 'pants', preview: () => d('pants'), value: 'pants', url: { href: '#' } },
								{ active: f === 'socks', preview: () => d('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								O.bind();
							}),
							(O.store.history = C),
							(0, s.Y)(o.G, { ...v, controller: O })
						);
					};
				(g.args = { retainHistory: !0, retainTrending: !0 }),
					(g.loaders = [async () => ({ controller: await L })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const b = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(M, l, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(O);
				const d = ({ vertical: _, theme: T }) =>
						(0, m.AH)({
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
								flexDirection: _ ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: T?.variables?.colors?.primary } },
								},
							},
						}),
					C = (_) => _?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					R = (_, T) => {
						if (_ && T) {
							const r = _.match(C(T));
							if (T && _ && r && typeof r.index == 'number') {
								const i = _.slice(0, r.index),
									n = _.slice(r.index + T.length, _.length);
								return `${i ? `<em>${i}</em>` : ''}${T}${n ? `<em>${n}</em>` : ''}`;
							}
						}
						return `<em>${_}</em>`;
					},
					I = (0, c.PA)((_) => {
						const T = (0, a.u)(),
							i = { vertical: !0, previewOnHover: !0, treePath: (0, A.LU)() },
							n = (0, L.v6)('terms', T, i, _),
							{ title: p, onTermClick: h, limit: D, previewOnHover: $, emIfy: z, className: F, internalClassName: J, controller: y } = n,
							G = y?.store?.state?.input,
							w = n.terms,
							{ overrideElement: W, shouldRenderDefault: Z } = (0, v._)('terms', n);
						if (!Z) return W;
						const j = (0, g.Z)(n, d),
							H = (E, U) => {
								h && h(E, U), y?.setFocused && y?.setFocused();
							},
							S = D ? w?.slice(0, D) : w,
							X = { title: { value: p } },
							k = f()(X, n.lang || {}),
							N = (0, b.u)({ title: k.title }, { controller: y });
						return S?.length
							? (0, s.Y)(t._, {
									children: (0, s.FD)('div', {
										...j,
										className: o()('ss__terms', F, J),
										children: [
											p ? (0, s.Y)('div', { className: 'ss__terms__title', children: (0, s.Y)('h5', { ...N.title.all }) }) : null,
											(0, s.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': p,
												children: S?.map((E, U) => {
													const B = {
															term: {
																value: `${z ? R(E.value, G || '') : E.value}`,
																attributes: { 'aria-label': `${p || ''} item ${U + 1} of ${S.length}, ${E.value}` },
															},
														},
														K = f()(B, n.lang || {}),
														Y = (0, b.u)({ term: K.term }, { index: U, numberOfTerms: S.length, term: E });
													return (0, s.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': E.active }),
														children: (0, s.Y)('a', { onClick: (V) => H(V, E), href: E.url.href, ...($ ? (0, x.l)(E.preview) : {}), ...Y.term?.all }),
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
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(M, l, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const O = ({}) =>
						(0, m.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					f = (0, c.PA)((d) => {
						const C = (0, a.u)(),
							R = (0, A.LU)(),
							I = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: R,
							},
							_ = (0, g.v6)('termsList', C, I, d),
							{
								layout: T,
								historyTitle: r,
								verticalOptions: i,
								trendingTitle: n,
								suggestionTitle: p,
								retainHistory: h,
								retainTrending: D,
								treePath: $,
								disableStyles: z,
								className: F,
								internalClassName: J,
								controller: y,
							} = _,
							{ overrideElement: G, shouldRenderDefault: w } = (0, x._)('termsList', _);
						if (!w) return G;
						const W = { terms: { vertical: !!i, ...(0, L.s)({ disableStyles: z }), theme: _.theme, treePath: $ } },
							Z = (0, b.Z)(_, O),
							j = y?.store.history || [],
							H = y?.store.terms || [],
							S = y?.store.trending || [],
							X = S?.filter((P) => P.active).pop(),
							k = j?.filter((P) => P.active).pop(),
							{ loaded: N, results: E, state: U } = y?.store;
						let B = !1;
						S?.length && ((D && N) || (!E.length && !U.input)) && (B = !0);
						let K = !1;
						j?.length && ((h && N) || (!E.length && !U.input)) && (K = !0),
							!y.store.state.input && (k || X) && (j?.length && (K = !0), S?.length && (B = !0));
						const Y = (P) => {
								if (typeof P != 'string') {
									const q = P?.map((Q) => Y(Q));
									return P?.some((Q, ee) => Q !== '_' && q[ee]) ? (0, s.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if (P == '_') return (0, s.Y)('div', { className: 'ss__terms-list__separator' });
								if (P == 'History' && K)
									return (0, s.Y)(v.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: r,
										terms: j,
										controller: y,
										name: 'history',
										limit: y.config.settings?.history?.limit,
										...W.terms,
									});
								if (P == 'Trending' && B)
									return (0, s.Y)(v.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: n,
										terms: S,
										controller: y,
										name: 'trending',
										limit: y.config.settings?.trending?.limit,
										...W.terms,
									});
								if (P == 'Suggestions')
									return H.length
										? (0, s.Y)(v.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: p,
												terms: H,
												controller: y,
												name: 'suggestions',
												...W.terms,
										  })
										: null;
							},
							V = T?.map((P) => Y(P));
						return V?.some(Boolean)
							? (0, s.Y)(t._, { children: (0, s.Y)('div', { ...Z, className: o()('ss__terms-list', F, J), children: V }) })
							: null;
					});
				e.d(l, ['G', 0, f]);
			},
			'./components/src/hooks/useLang.tsx'(M, l, e) {
				'use strict';
				const s = (c, m) => {
					const u = {};
					return (
						Object.keys(c).forEach((o) => {
							const t = c && c[o],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(m) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](m))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](m))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(m))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(m)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(m))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(u[o] = a);
						}),
						u
					);
				};
				e.d(l, ['u', 0, s]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(M, l, e) {
				'use strict';
				const s = (c, m = { delay: 333, focusElem: !0 }) => {
					let u;
					return {
						onMouseEnter: (o) => {
							clearTimeout(u),
								(u = window.setTimeout(() => {
									m.focusElem && o.target.focus(), c && c();
								}, m.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(u);
						},
					};
				};
				e.d(l, ['l', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(M, l, e) {
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
				e.d(l, ['F', 0, s]);
			},
			'./components/src/utilities/defined.ts'(M, l, e) {
				'use strict';
				e.d(l, { s: () => s });
				function s(c) {
					const m = {};
					return (
						Object.keys(c).map((u) => {
							c[u] !== void 0 && (m[u] = c[u]);
						}),
						m
					);
				}
			},
			'./components/src/utilities/snapify.ts'(M, l, e) {
				'use strict';
				e.d(l, { p: () => R });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					L = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					O = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					C = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(i) {
						const n = i.id;
						if (d[n]) return d[n];
						const p = (d[n] = _({ client: C, controller: i }));
						return (
							p.on('afterStore', async ({ controller: h }, D) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await D();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(i) {
						const n = i.id;
						if (d[n]) return d[n];
						const p = (d[n] = T({ client: C, controller: i }));
						return (
							p.on('afterStore', async ({ controller: h }, D) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await D();
							}),
							p.init(),
							p
						);
					}
					static search(i) {
						const n = i.id;
						if (d[n]) return d[n];
						const p = (d[n] = I({ client: C, controller: i }));
						return (
							p.on('afterStore', async ({ controller: h }, D) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await D();
							}),
							p.init(),
							p
						);
					}
				}
				function I(r) {
					const i = new x.V(new g.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), L.X);
					return new c.Tp(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new a.U(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new b.E(),
						profiler: new v.U(),
						logger: new O.V(),
						tracker: new f.J(r.client.globals),
					});
				}
				function _(r) {
					const i = new x.V(new g.E(), L.X).detach(!0);
					return new u.c(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new A.t(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new b.E(),
						profiler: new v.U(),
						logger: new O.V(),
						tracker: new f.J(r.client.globals),
					});
				}
				function T(r) {
					const i = new x.V(new g.E(), L.X).detach();
					return new m.Z(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new b.E(),
						profiler: new v.U(),
						logger: new O.V(),
						tracker: new f.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, l, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					u = (o) => {
						const t = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(m) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, s.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, u]);
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function l(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (M.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-TermsList-TermsList-stories.8add5b03.iframe.bundle.js.map
