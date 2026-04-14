(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9235],
		{
			'./components/src/components/Molecules/Terms/Terms.stories.tsx'(T, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => f, __namedExportsOrder: () => O, default: () => M });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/utilities/storybook.tsx'),
					h = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const t = `# Terms

Renders a list of terms for autocomplete. 

## Usage

### Controller

The \`controller\` prop specifies a reference to the autocomplete controller.

\`\`\`jsx
<Terms controller={controller} terms={terms}/>
\`\`\`

### Terms

The \`terms\` prop specifies a reference to an autocomplete term store.

\`\`\`jsx
<Terms controller={controller} terms={terms} />
\`\`\`

### title

The \`title\` prop is will display the given text above the terms area. The default value is blank. 

\`\`\`jsx
<Terms controller={controller} terms={terms} title={'Suggestions'}/>
\`\`\`

### vertical

The \`vertical\` prop is will specifies if the terms should render vertically.

\`\`\`jsx
<Terms controller={controller} terms={terms} vertical={true}/>
\`\`\`

### limit

The \`limit\` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  

\`\`\`jsx
<Terms controller={controller} terms={terms} limit={4}/>
\`\`\`

### previewOnHover

The \`previewOnFocus\` prop will invoke the \`term.preview()\` method when the value has been hovered over.

\`\`\`jsx
<Terms controller={controller} terms={terms} previewOnHover={true}/>
\`\`\`

### emify

The \`emify\` will automatically wrap non-matching characters within the term with an \`<em>\` element for different styling purposes. 

\`\`\`jsx
<Terms controller={controller} terms={terms} emify={true}/>
\`\`\`

### onTermClick

The \`onTermClick\` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. 

\`\`\`jsx
<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>
\`\`\`
`;
				var a = e('./components/src/utilities/snapify.ts'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = {
						title: 'Molecules/Terms',
						component: o.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(u.oz, { options: { overrides: { code: d.Z } }, children: t }), (0, r.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [(E) => (0, r.Y)(E, {})],
						argTypes: {
							controller: {
								description: 'autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'autocomplete controller object' } },
								control: { type: 'none' },
							},
							terms: {
								description: 'autocomplete term store reference',
								type: { required: !0 },
								table: { type: { summary: 'autocomplete term store object' } },
								control: { type: 'none' },
							},
							title: {
								description: 'terms title',
								type: { required: !1 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							limit: {
								description: 'adjust the number of terms to show',
								type: { required: !1 },
								table: { type: { summary: 'number' }, category: 'Templates Legal' },
								control: { type: 'number' },
							},
							previewOnHover: {
								description: 'invoke term preview upon focus',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							emIfy: {
								description: 'highlight the query matched section of the term',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
								control: { type: 'boolean' },
							},
							onTermClick: {
								description: 'custom onClick event handler for Terms',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onTermClick',
							},
							vertical: {
								description: 'boolean to adjust if each term should render in a vertically',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							...h.F,
						},
					},
					P = a.p.autocomplete({
						id: 'Autocomplete-Terms',
						selector: '#searchInput2',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					f = (E, { loaded: { controller: b } }) => {
						const [g, m] = (0, D.J0)(!1),
							x = [
								{ active: g === 'dress', preview: () => m('dress'), value: 'dress', url: { href: '#' } },
								{ active: g === 'shirt', preview: () => m('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: g === 'shoes', preview: () => m('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: g === 'hat', preview: () => m('hat'), value: 'hat', url: { href: '#' } },
								{ active: g === 'pants', preview: () => m('pants'), value: 'pants', url: { href: '#' } },
								{ active: g === 'socks', preview: () => m('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								b.bind();
							}),
							(0, r.Y)('div', { style: { maxWidth: E?.vertical ? '500px' : '1200px' }, children: (0, r.Y)(o.i, { ...E, controller: b, terms: x }) })
						);
					};
				(f.loaders = [async () => ({ controller: await P })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: TermsProps, {
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
  return <div style={{
    maxWidth: args?.vertical ? '500px' : '1200px'
  }}>
            <Terms {...args} controller={controller} terms={mockTerms} />
        </div>;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(T, c, e) {
				'use strict';
				e.d(c, { i: () => A });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					o = e.n(h),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useComponent.tsx'),
					g = e('../../node_modules/deepmerge/dist/cjs.js'),
					m = e.n(g);
				const x = ({ vertical: _, theme: s }) =>
						(0, d.AH)({
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
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: s?.variables?.colors?.primary } },
								},
							},
						}),
					U = (_) => _?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					w = (_, s) => {
						if (_ && s) {
							const n = _.match(U(s));
							if (s && _ && n && typeof n.index == 'number') {
								const i = _.slice(0, n.index),
									p = _.slice(n.index + s.length, _.length);
								return `${i ? `<em>${i}</em>` : ''}${s}${p ? `<em>${p}</em>` : ''}`;
							}
						}
						return `<em>${_}</em>`;
					},
					A = (0, u.PA)((_) => {
						const s = (0, a.u)(),
							n = (0, D.uk)(),
							p = { vertical: !0, previewOnHover: !0, treePath: (0, M.LU)() },
							l = (0, f.v6)('terms', s, p, _),
							{
								title: y,
								onTermClick: S,
								limit: I,
								previewOnHover: K,
								emIfy: B,
								className: k,
								internalClassName: N,
								controller: C,
								customComponent: R,
							} = l,
							Y = C?.store?.state?.input,
							W = l.terms;
						if (R) {
							const v = (0, b.x)(n?.templates?.library.import.component.terms || {}, R);
							if (v) return (0, r.Y)(v, { ...l });
						}
						const $ = (0, O.Z)(l, x),
							H = (v, L) => {
								S && S(v, L), C?.setFocused && C?.setFocused();
							},
							j = I ? W?.slice(0, I) : W,
							V = { title: { value: y } },
							F = m()(V, l.lang || {}),
							J = (0, E.u)({ title: F.title }, { controller: C });
						return j?.length
							? (0, r.Y)(t._, {
									children: (0, r.FD)('div', {
										...$,
										className: o()('ss__terms', k, N),
										children: [
											y ? (0, r.Y)('div', { className: 'ss__terms__title', children: (0, r.Y)('h5', { ...J.title.all }) }) : null,
											(0, r.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': y,
												children: j?.map((v, L) => {
													const z = {
															term: {
																value: `${B ? w(v.value, Y || '') : v.value}`,
																attributes: { 'aria-label': `${y || ''} item ${L + 1} of ${j.length}, ${v.value}` },
															},
														},
														Z = m()(z, l.lang || {}),
														X = (0, E.u)({ term: Z.term }, { index: L, numberOfTerms: j.length, term: v });
													return (0, r.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': v.active }),
														children: (0, r.Y)('a', { onClick: (G) => H(G, v), href: v.url.href, ...(K ? (0, P.l)(v.preview) : {}), ...X.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(T, c, e) {
				'use strict';
				e.d(c, { u: () => r });
				const r = (u, d) => {
					const h = {};
					return (
						Object.keys(u).forEach((o) => {
							const t = u && u[o],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(d) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](d))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](d))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(d))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(d)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(d))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(h[o] = a);
						}),
						h
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(T, c, e) {
				'use strict';
				e.d(c, { l: () => r });
				const r = (u, d = { delay: 333, focusElem: !0 }) => {
					let h;
					return {
						onMouseEnter: (o) => {
							clearTimeout(h),
								(h = window.setTimeout(() => {
									d.focusElem && o.target.focus(), u && u();
								}, d.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(h);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(T, c, e) {
				'use strict';
				e.d(c, { F: () => r });
				const r = {
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
			'./components/src/utilities/snapify.ts'(T, c, e) {
				'use strict';
				e.d(c, { p: () => U });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					O = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					x = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(n) {
						const i = n.id;
						if (m[i]) return m[i];
						const p = (m[i] = A({ client: x, controller: n }));
						return (
							p.on('afterStore', async ({ controller: l }, y) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await y();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(n) {
						const i = n.id;
						if (m[i]) return m[i];
						const p = (m[i] = _({ client: x, controller: n }));
						return (
							p.on('afterStore', async ({ controller: l }, y) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await y();
							}),
							p.init(),
							p
						);
					}
					static search(n) {
						const i = n.id;
						if (m[i]) return m[i];
						const p = (m[i] = w({ client: x, controller: n }));
						return (
							p.on('afterStore', async ({ controller: l }, y) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await y();
							}),
							p.init(),
							p
						);
					}
				}
				function w(s) {
					const n = new M.V(new f.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), P.X);
					return new u.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new a.U(s.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new O.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new g.J(s.client.globals),
					});
				}
				function A(s) {
					const n = new M.V(new f.E(), P.X).detach(!0);
					return new h.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new D.t(s.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new O.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new g.J(s.client.globals),
					});
				}
				function _(s) {
					const n = new M.V(new f.E(), P.X).detach();
					return new d.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new O.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new g.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, c, e) {
				'use strict';
				e.d(c, { Z: () => h });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					h = (o) => {
						const t = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(d) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, r.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function c(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (T.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Terms-Terms-stories.dc6e2795.iframe.bundle.js.map
