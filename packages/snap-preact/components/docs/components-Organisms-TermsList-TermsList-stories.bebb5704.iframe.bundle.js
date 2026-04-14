(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9671],
		{
			'./components/src/components/Organisms/TermsList/TermsList.stories.tsx'(M, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => v, __namedExportsOrder: () => x, default: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/components/Organisms/TermsList/TermsList.tsx');
				const s = `# TermsList

Renders a list of terms for autocomplete. 

## Usage

### Controller

The \`controller\` prop specifies a reference to the autocomplete controller.

\`\`\`jsx
<TermsList controller={controller} />
\`\`\`

### layout

The \`layout\` prop is used to determine which terms render and in what layout. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display. Options include 'Trending' | 'Suggestions' | 'History' | '_';

The \`_\` module is used a seperator module to center|left|right justify the other elements in the layout.

\`\`\`jsx
<TermsList controller={controller} layout={[['Trending'], ['Suggestions'], ['History']]}/>
\`\`\`

### horizontal

The \`horizontal\` prop specifies if the terms should be rendered horizontally.

\`\`\`jsx
<TermsList controller={controller} horizontal={true}/>
\`\`\` 

### verticalOptions

The \`verticalOptions\` prop specifies if the terms options should be rendered vertically.

\`\`\`jsx
<TermsList controller={controller} verticalOptions={true}/>
\`\`\` 

### historyTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`jsx
<TermsList controller={controller} historyTitle={'History Terms'}/>
\`\`\`

### suggestionTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`jsx
<TermsList controller={controller} suggestionTitle={'Suggested Terms'}/>
\`\`\`

### trendingTitle

The \`trendingTitle\` prop specifies the title to render above the trending terms.

\`\`\`jsx
<TermsList controller={controller} trendingTitle={'Trending Terms'}/>
\`\`\`


### retainHistory

The \`retainHistory\` prop will cause the history terms to always render. 

\`\`\`jsx
<TermsList controller={controller} retainHistory={true}/>
\`\`\`

### retainTrending

The \`retainTrending\` prop will cause the Trending terms to always render. 

\`\`\`jsx
<TermsList controller={controller} retainTrending={true}/>
\`\`\`
`;
				var a = e('./components/src/utilities/snapify.ts'),
					A = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const b = {
						title: 'Organisms/TermsList',
						component: o.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: m.Z } }, children: s }), (0, t.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [
							(O) =>
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
										(0, t.Y)(O, {}),
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
					D = a.p.autocomplete({
						id: 'Autocomplete-TermsList',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					v = (O, { loaded: { controller: E } }) => {
						const [T, d] = (0, A.J0)(!1),
							L = [
								{ active: T === 'dress', preview: () => d('dress'), value: 'dress', url: { href: '#' } },
								{ active: T === 'shirt', preview: () => d('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: T === 'shoes', preview: () => d('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: T === 'hat', preview: () => d('hat'), value: 'hat', url: { href: '#' } },
								{ active: T === 'pants', preview: () => d('pants'), value: 'pants', url: { href: '#' } },
								{ active: T === 'socks', preview: () => d('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								E.bind();
							}),
							(E.store.history = L),
							(0, t.Y)(o.G, { ...O, controller: E })
						);
					};
				(v.args = { retainHistory: !0, retainTrending: !0 }),
					(v.loaders = [async () => ({ controller: await D })]),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
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
								...v.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(M, l, e) {
				'use strict';
				e.d(l, { i: () => R });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					s = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useComponent.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					d = e.n(T);
				const L = ({ vertical: h, theme: r }) =>
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
								flexDirection: h ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: r?.variables?.colors?.primary } },
								},
							},
						}),
					U = (h) => h?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					I = (h, r) => {
						if (h && r) {
							const n = h.match(U(r));
							if (r && h && n && typeof n.index == 'number') {
								const _ = h.slice(0, n.index),
									p = h.slice(n.index + r.length, h.length);
								return `${_ ? `<em>${_}</em>` : ''}${r}${p ? `<em>${p}</em>` : ''}`;
							}
						}
						return `<em>${h}</em>`;
					},
					R = (0, i.PA)((h) => {
						const r = (0, a.u)(),
							n = (0, A.uk)(),
							p = { vertical: !0, previewOnHover: !0, treePath: (0, b.LU)() },
							c = (0, v.v6)('terms', r, p, h),
							{
								title: P,
								onTermClick: H,
								limit: N,
								previewOnHover: J,
								emIfy: G,
								className: Z,
								internalClassName: X,
								controller: y,
								customComponent: W,
							} = c,
							B = y?.store?.state?.input,
							Y = c.terms;
						if (W) {
							const g = (0, E.x)(n?.templates?.library.import.component.terms || {}, W);
							if (g) return (0, t.Y)(g, { ...c });
						}
						const S = (0, x.Z)(c, L),
							V = (g, j) => {
								H && H(g, j), y?.setFocused && y?.setFocused();
							},
							C = N ? Y?.slice(0, N) : Y,
							k = { title: { value: P } },
							Q = d()(k, c.lang || {}),
							$ = (0, O.u)({ title: Q.title }, { controller: y });
						return C?.length
							? (0, t.Y)(s._, {
									children: (0, t.FD)('div', {
										...S,
										className: o()('ss__terms', Z, X),
										children: [
											P ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...$.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': P,
												children: C?.map((g, j) => {
													const K = {
															term: {
																value: `${G ? I(g.value, B || '') : g.value}`,
																attributes: { 'aria-label': `${P || ''} item ${j + 1} of ${C.length}, ${g.value}` },
															},
														},
														w = d()(K, c.lang || {}),
														z = (0, O.u)({ term: w.term }, { index: j, numberOfTerms: C.length, term: g });
													return (0, t.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': g.active }),
														children: (0, t.Y)('a', { onClick: (F) => V(F, g), href: g.url.href, ...(J ? (0, D.l)(g.preview) : {}), ...z.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(M, l, e) {
				'use strict';
				e.d(l, { G: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					s = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/hooks/useComponent.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const T = ({}) =>
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
					d = (0, i.PA)((L) => {
						const U = (0, a.u)(),
							I = (0, A.uk)(),
							R = (0, b.LU)(),
							h = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: R,
							},
							r = (0, x.v6)('termsList', U, h, L),
							{
								layout: n,
								historyTitle: _,
								verticalOptions: p,
								trendingTitle: c,
								suggestionTitle: P,
								retainHistory: H,
								retainTrending: N,
								treePath: J,
								disableStyles: G,
								className: Z,
								internalClassName: X,
								controller: y,
								customComponent: W,
							} = r;
						if (W) {
							const f = (0, D.x)(I?.templates?.library.import.component.termsList || {}, W);
							if (f) return (0, t.Y)(f, { ...r });
						}
						const B = { terms: { vertical: !!p, ...(0, v.s)({ disableStyles: G }), theme: r.theme, treePath: J } },
							Y = (0, O.Z)(r, T),
							S = y?.store.history || [],
							V = y?.store.terms || [],
							C = y?.store.trending || [],
							k = C?.filter((f) => f.active).pop(),
							Q = S?.filter((f) => f.active).pop(),
							{ loaded: $, results: g, state: j } = y?.store;
						let K = !1;
						C?.length && ((N && $) || (!g.length && !j.input)) && (K = !0);
						let w = !1;
						S?.length && ((H && $) || (!g.length && !j.input)) && (w = !0),
							!y.store.state.input && (Q || k) && (S?.length && (w = !0), C?.length && (K = !0));
						const z = (f) => {
								if (typeof f != 'string') {
									const ee = f?.map((q) => z(q));
									return f?.some((q, te) => q !== '_' && ee[te]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: ee }) : null;
								}
								if (f == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (f == 'History' && w)
									return (0, t.Y)(E.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: _,
										terms: S,
										controller: y,
										name: 'history',
										limit: y.config.settings?.history?.limit,
										...B.terms,
									});
								if (f == 'Trending' && K)
									return (0, t.Y)(E.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: c,
										terms: C,
										controller: y,
										name: 'trending',
										limit: y.config.settings?.trending?.limit,
										...B.terms,
									});
								if (f == 'Suggestions')
									return V.length
										? (0, t.Y)(E.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: P,
												terms: V,
												controller: y,
												name: 'suggestions',
												...B.terms,
										  })
										: null;
							},
							F = n?.map((f) => z(f));
						return F?.some(Boolean)
							? (0, t.Y)(s._, { children: (0, t.Y)('div', { ...Y, className: o()('ss__terms-list', Z, X), children: F }) })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(M, l, e) {
				'use strict';
				e.d(l, { u: () => t });
				const t = (i, m) => {
					const u = {};
					return (
						Object.keys(i).forEach((o) => {
							const s = i && i[o],
								a = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: s.value(m) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = s.attributes['aria-label'](m))
											: (a.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](m))
											: (a.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (a.attributes.title = s.attributes.title(m))
											: (a.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (a.attributes.alt = s.attributes.alt(m)) : (a.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = s.attributes.placeholder(m))
											: (a.attributes.placeholder = s.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(u[o] = a);
						}),
						u
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(M, l, e) {
				'use strict';
				e.d(l, { l: () => t });
				const t = (i, m = { delay: 333, focusElem: !0 }) => {
					let u;
					return {
						onMouseEnter: (o) => {
							clearTimeout(u),
								(u = window.setTimeout(() => {
									m.focusElem && o.target.focus(), i && i();
								}, m.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(u);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(M, l, e) {
				'use strict';
				e.d(l, { F: () => t });
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
			'./components/src/utilities/defined.ts'(M, l, e) {
				'use strict';
				e.d(l, { s: () => t });
				function t(i) {
					const m = {};
					return (
						Object.keys(i).map((u) => {
							i[u] !== void 0 && (m[u] = i[u]);
						}),
						m
					);
				}
			},
			'./components/src/utilities/snapify.ts'(M, l, e) {
				'use strict';
				e.d(l, { p: () => U });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					L = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(n) {
						const _ = n.id;
						if (d[_]) return d[_];
						const p = (d[_] = R({ client: L, controller: n }));
						return (
							p.on('afterStore', async ({ controller: c }, P) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await P();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(n) {
						const _ = n.id;
						if (d[_]) return d[_];
						const p = (d[_] = h({ client: L, controller: n }));
						return (
							p.on('afterStore', async ({ controller: c }, P) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await P();
							}),
							p.init(),
							p
						);
					}
					static search(n) {
						const _ = n.id;
						if (d[_]) return d[_];
						const p = (d[_] = I({ client: L, controller: n }));
						return (
							p.on('afterStore', async ({ controller: c }, P) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await P();
							}),
							p.init(),
							p
						);
					}
				}
				function I(r) {
					const n = new b.V(new v.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), D.X);
					return new i.Tp(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new a.U(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new x.E(),
						profiler: new O.U(),
						logger: new E.V(),
						tracker: new T.J(r.client.globals),
					});
				}
				function R(r) {
					const n = new b.V(new v.E(), D.X).detach(!0);
					return new u.c(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new A.t(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new x.E(),
						profiler: new O.U(),
						logger: new E.V(),
						tracker: new T.J(r.client.globals),
					});
				}
				function h(r) {
					const n = new b.V(new v.E(), D.X).detach();
					return new m.Z(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new s.Y(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new x.E(),
						profiler: new O.U(),
						logger: new E.V(),
						tracker: new T.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, l, e) {
				'use strict';
				e.d(l, { Z: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					u = (o) => {
						const s = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								s.current && o.className?.includes('lang-') && !o.className?.includes(m) && window?.Prism?.highlightElement(s.current);
							}, [o.className, o.children, s]),
							(0, t.Y)('code', { ...o, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (M.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-TermsList-TermsList-stories.bebb5704.iframe.bundle.js.map
