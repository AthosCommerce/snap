(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9235],
		{
			'./components/src/components/Molecules/Terms/Terms.stories.tsx'(y, m, e) {
				'use strict';
				e.r(m), e.d(m, { Default: () => f, __namedExportsOrder: () => E, default: () => P });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/utilities/storybook.tsx'),
					h = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const t =
					"# Terms\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Terms controller={controller} terms={terms}/>\n```\n\n### Terms\n\nThe `terms` prop specifies a reference to an autocomplete term store.\n\n```tsx\n<Terms controller={controller} terms={terms} />\n```\n\n### title\n\nThe `title` prop is will display the given text above the terms area. The default value is blank. \n\n```tsx\n<Terms controller={controller} terms={terms} title={'Suggestions'}/>\n```\n\n### vertical\n\nThe `vertical` prop is will specifies if the terms should render vertically.\n\n```tsx\n<Terms controller={controller} terms={terms} vertical={true}/>\n```\n\n### limit\n\nThe `limit` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  \n\n```tsx\n<Terms controller={controller} terms={terms} limit={4}/>\n```\n\n### previewOnHover\n\nThe `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.\n\n```tsx\n<Terms controller={controller} terms={terms} previewOnHover={true}/>\n```\n\n### emify\n\nThe `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. \n\n```tsx\n<Terms controller={controller} terms={terms} emify={true}/>\n```\n\n### onTermClick\n\nThe `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. \n\n```tsx\n<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Terms component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Title text above the terms list | `controller` (AutocompleteController) |\n| `term` | Individual term text/attributes | `index` (number), `numberOfTerms` (number), `term` (Term) |\n\n### Example\n\n```tsx\n<Terms\n	controller={controller}\n	terms={terms}\n	lang={{\n		title: {\n			value: 'Suggestions',\n		},\n		term: {\n			attributes: {\n				'aria-label': (data) => `suggestion ${data.index + 1} of ${data.numberOfTerms}, ${data.term.value}`,\n			},\n		},\n	}}\n/>\n```\n";
				var a = e('./components/src/utilities/snapify.ts'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = {
						title: 'Molecules/Terms',
						component: o.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(i.oz, { options: { overrides: { code: u.Z } }, children: t }), (0, r.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(T) => (0, r.Y)(T, {})],
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
					x = a.p.autocomplete({
						id: 'Autocomplete-Terms',
						selector: '#searchInput2',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					f = (T, { loaded: { controller: M } }) => {
						const [v, c] = (0, C.J0)(!1),
							D = [
								{ active: v === 'dress', preview: () => c('dress'), value: 'dress', url: { href: '#' } },
								{ active: v === 'shirt', preview: () => c('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: v === 'shoes', preview: () => c('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: v === 'hat', preview: () => c('hat'), value: 'hat', url: { href: '#' } },
								{ active: v === 'pants', preview: () => c('pants'), value: 'pants', url: { href: '#' } },
								{ active: v === 'socks', preview: () => c('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								M.bind();
							}),
							(0, r.Y)('div', { style: { maxWidth: T?.vertical ? '500px' : '1200px' }, children: (0, r.Y)(o.i, { ...T, controller: M, terms: D }) })
						);
					};
				(f.loaders = [async () => ({ controller: await x })]),
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
				const E = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(y, m, e) {
				'use strict';
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					o = e.n(h),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/hooks/useLang.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(M);
				const c = ({ vertical: _, theme: g }) =>
						(0, u.AH)({
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
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: g?.variables?.colors?.primary } },
								},
							},
						}),
					D = (_) => _?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					U = (_, g) => {
						if (_ && g) {
							const s = _.match(D(g));
							if (g && _ && s && typeof s.index == 'number') {
								const l = _.slice(0, s.index),
									n = _.slice(s.index + g.length, _.length);
								return `${l ? `<em>${l}</em>` : ''}${g}${n ? `<em>${n}</em>` : ''}`;
							}
						}
						return `<em>${_}</em>`;
					},
					A = (0, i.PA)((_) => {
						const g = (0, a.u)(),
							l = { vertical: !0, previewOnHover: !0, treePath: (0, C.LU)() },
							n = (0, x.v6)('terms', g, l, _),
							{ title: d, onTermClick: p, limit: O, previewOnHover: I, emIfy: R, className: K, internalClassName: W, controller: L } = n,
							B = L?.store?.state?.input,
							S = n.terms,
							{ overrideElement: k, shouldRenderDefault: $ } = (0, T._)('terms', n);
						if (!$) return k;
						const N = (0, f.Z)(n, c),
							Y = (b, w) => {
								p && p(b, w), L?.setFocused && L?.setFocused();
							},
							j = O ? S?.slice(0, O) : S,
							H = { title: { value: d } },
							V = v()(H, n.lang || {}),
							F = (0, E.u)({ title: V.title }, { controller: L });
						return j?.length
							? (0, r.Y)(t._, {
									children: (0, r.FD)('div', {
										...N,
										className: o()('ss__terms', K, W),
										children: [
											d ? (0, r.Y)('div', { className: 'ss__terms__title', children: (0, r.Y)('h5', { ...F.title.all }) }) : null,
											(0, r.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': d,
												children: j?.map((b, w) => {
													const J = {
															term: {
																value: `${R ? U(b.value, B || '') : b.value}`,
																attributes: { 'aria-label': `${d || ''} item ${w + 1} of ${j.length}, ${b.value}` },
															},
														},
														z = v()(J, n.lang || {}),
														Z = (0, E.u)({ term: z.term }, { index: w, numberOfTerms: j.length, term: b });
													return (0, r.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': b.active }),
														children: (0, r.Y)('a', { onClick: (X) => Y(X, b), href: b.url.href, ...(I ? (0, P.l)(b.preview) : {}), ...Z.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(m, ['i', 0, A]);
			},
			'./components/src/hooks/useLang.tsx'(y, m, e) {
				'use strict';
				const r = (i, u) => {
					const h = {};
					return (
						Object.keys(i).forEach((o) => {
							const t = i && i[o],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(u) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](u))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](u))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(u))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(u)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(u))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(h[o] = a);
						}),
						h
					);
				};
				e.d(m, ['u', 0, r]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(y, m, e) {
				'use strict';
				const r = (i, u = { delay: 333, focusElem: !0 }) => {
					let h;
					return {
						onMouseEnter: (o) => {
							clearTimeout(h),
								(h = window.setTimeout(() => {
									u.focusElem && o.target.focus(), i && i();
								}, u.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(h);
						},
					};
				};
				e.d(m, ['l', 0, r]);
			},
			'./components/src/utilities/componentArgs.ts'(y, m, e) {
				'use strict';
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
				e.d(m, ['F', 0, r]);
			},
			'./components/src/utilities/snapify.ts'(y, m, e) {
				'use strict';
				e.d(m, { p: () => U });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const c = {},
					D = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(l) {
						const n = l.id;
						if (c[n]) return c[n];
						const d = (c[n] = _({ client: D, controller: l }));
						return (
							d.on('afterStore', async ({ controller: p }, O) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await O();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(l) {
						const n = l.id;
						if (c[n]) return c[n];
						const d = (c[n] = g({ client: D, controller: l }));
						return (
							d.on('afterStore', async ({ controller: p }, O) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await O();
							}),
							d.init(),
							d
						);
					}
					static search(l) {
						const n = l.id;
						if (c[n]) return c[n];
						const d = (c[n] = A({ client: D, controller: l }));
						return (
							d.on('afterStore', async ({ controller: p }, O) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await O();
							}),
							d.init(),
							d
						);
					}
				}
				function A(s) {
					const l = new P.V(new f.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), x.X);
					return new i.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new a.U(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new E.E(),
						profiler: new T.U(),
						logger: new M.V(),
						tracker: new v.J(s.client.globals),
					});
				}
				function _(s) {
					const l = new P.V(new f.E(), x.X).detach(!0);
					return new h.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new C.t(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new E.E(),
						profiler: new T.U(),
						logger: new M.V(),
						tracker: new v.J(s.client.globals),
					});
				}
				function g(s) {
					const l = new P.V(new f.E(), x.X).detach();
					return new u.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new t.Y(s.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new E.E(),
						profiler: new T.U(),
						logger: new M.V(),
						tracker: new v.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, m, e) {
				'use strict';
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					h = (o) => {
						const t = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(u) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, r.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(m, ['Z', 0, h]);
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function m(e) {
					const r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(m.keys = () => []), (m.resolve = m), (m.id = '../../node_modules/memoizerific sync recursive'), (y.exports = m);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Terms-Terms-stories.d7b26abb.iframe.bundle.js.map
