(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9235],
		{
			'./components/src/components/Molecules/Terms/Terms.stories.tsx'(M, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => b, __namedExportsOrder: () => O, default: () => s });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const v =
					"# Terms\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Terms controller={controller} terms={terms}/>\n```\n\n### Terms\n\nThe `terms` prop specifies a reference to an autocomplete term store.\n\n```tsx\n<Terms controller={controller} terms={terms} />\n```\n\n### title\n\nThe `title` prop is will display the given text above the terms area. The default value is blank. \n\n```tsx\n<Terms controller={controller} terms={terms} title={'Suggestions'}/>\n```\n\n### vertical\n\nThe `vertical` prop is will specifies if the terms should render vertically.\n\n```tsx\n<Terms controller={controller} terms={terms} vertical={true}/>\n```\n\n### limit\n\nThe `limit` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  \n\n```tsx\n<Terms controller={controller} terms={terms} limit={4}/>\n```\n\n### previewOnHover\n\nThe `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.\n\n```tsx\n<Terms controller={controller} terms={terms} previewOnHover={true}/>\n```\n\n### emify\n\nThe `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. \n\n```tsx\n<Terms controller={controller} terms={terms} emify={true}/>\n```\n\n### onTermClick\n\nThe `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. \n\n```tsx\n<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Terms component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Title text above the terms list | `controller` (AutocompleteController) |\n| `term` | Individual term text/attributes | `index` (number), `numberOfTerms` (number), `term` (Term) |\n\n### Example\n\n```tsx\n<Terms\n	controller={controller}\n	terms={terms}\n	lang={{\n		title: {\n			value: 'Suggestions',\n		},\n		term: {\n			attributes: {\n				'aria-label': (data) => `suggestion ${data.index + 1} of ${data.numberOfTerms}, ${data.term.value}`,\n			},\n		},\n	}}\n/>\n```\n";
				var T = e('./components/src/utilities/snapify.ts'),
					t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = {
						title: 'Molecules/Terms',
						component: n.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(i.oz, { options: { overrides: { code: h.Z } }, children: v }), (0, r.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, r.Y)(y, {})],
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
							..._.F,
						},
					},
					D = T.p.autocomplete({
						id: 'Autocomplete-Terms',
						selector: '#searchInput2',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					b = (y, { loaded: { controller: P } }) => {
						const [f, m] = (0, t.J0)(!1),
							C = [
								{ active: f === 'dress', preview: () => m('dress'), value: 'dress', url: { href: '#' } },
								{ active: f === 'shirt', preview: () => m('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: f === 'shoes', preview: () => m('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: f === 'hat', preview: () => m('hat'), value: 'hat', url: { href: '#' } },
								{ active: f === 'pants', preview: () => m('pants'), value: 'pants', url: { href: '#' } },
								{ active: f === 'socks', preview: () => m('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								P.bind();
							}),
							(0, r.Y)('div', { style: { maxWidth: y?.vertical ? '500px' : '1200px' }, children: (0, r.Y)(n.i, { ...y, controller: P, terms: C }) })
						);
					};
				(b.loaders = [async () => ({ controller: await D })]),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
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
								...b.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(M, c, e) {
				'use strict';
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					n = e.n(_),
					v = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(P);
				const m = ({ vertical: p, theme: g }) =>
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
								flexDirection: p ? 'column' : 'row',
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
					C = (p) => p?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					U = (p, g) => {
						if (p && g) {
							const o = p.match(C(g));
							if (g && p && o && typeof o.index == 'number') {
								const l = p.slice(0, o.index),
									a = p.slice(o.index + g.length, p.length);
								return `${l ? `<em>${l}</em>` : ''}${g}${a ? `<em>${a}</em>` : ''}`;
							}
						}
						return `<em>${p}</em>`;
					},
					A = (0, i.PA)((p) => {
						const g = (0, T.u)(),
							l = { vertical: !0, previewOnHover: !0, treePath: (0, t.LU)() },
							a = (0, D.v6)('terms', g, l, p),
							{ title: u, onTermClick: d, limit: x, previewOnHover: I, emIfy: R, className: B, internalClassName: K, controller: L } = a,
							W = L?.store?.state?.input,
							S = a.terms,
							{ overrideElement: k, shouldRenderDefault: $ } = (0, y._)('terms', a);
						if (!$) return k;
						const N = (0, b.Z)(a, m),
							Y = (E, w) => {
								d && d(E, w), L?.setFocused && L?.setFocused();
							},
							j = x ? S?.slice(0, x) : S,
							H = { title: { value: u } },
							V = f()(H, a.lang || {}),
							F = (0, O.u)({ title: V.title }, { controller: L }, { activeBreakpoint: g?.activeBreakpoint });
						return j?.length
							? (0, r.Y)(v._, {
									children: (0, r.FD)('div', {
										...N,
										className: n()('ss__terms', B, K),
										children: [
											u ? (0, r.Y)('div', { className: 'ss__terms__title', children: (0, r.Y)('h5', { ...F.title.all }) }) : null,
											(0, r.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': u,
												children: j?.map((E, w) => {
													const J = {
															term: {
																value: `${R ? U(E.value, W || '') : E.value}`,
																attributes: { 'aria-label': `${u || ''} item ${w + 1} of ${j.length}, ${E.value}` },
															},
														},
														z = f()(J, a.lang || {}),
														Z = (0, O.u)({ term: z.term }, { index: w, numberOfTerms: j.length, term: E }, { activeBreakpoint: g?.activeBreakpoint });
													return (0, r.Y)('li', {
														className: n()('ss__terms__option', { 'ss__terms__option--active': E.active }),
														children: (0, r.Y)('a', { onClick: (X) => Y(X, E), href: E.url.href, ...(I ? (0, s.l)(E.preview) : {}), ...Z.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['i', 0, A]);
			},
			'./components/src/hooks/useLang.tsx'(M, c, e) {
				'use strict';
				const r = (i, h, _) => {
					const n = _ ? { ...h, ..._ } : h,
						v = {};
					return (
						Object.keys(i).forEach((T) => {
							const t = i && i[T],
								s = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (s.value = { 'ss-lang': T, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (s.value = { 'ss-lang': T, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((s.attributes = { 'ss-lang': T }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (s.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (s.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (s.attributes.title = t.attributes.title(n))
											: (s.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (s.attributes.alt = t.attributes.alt(n)) : (s.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = t.attributes.placeholder(n))
											: (s.attributes.placeholder = t.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': T })),
								(v[T] = s);
						}),
						v
					);
				};
				e.d(c, ['u', 0, r]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(M, c, e) {
				'use strict';
				const r = (i, h = { delay: 333, focusElem: !0 }) => {
					let _;
					return {
						onMouseEnter: (n) => {
							clearTimeout(_),
								(_ = window.setTimeout(() => {
									h.focusElem && n.target.focus(), i && i();
								}, h.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(_);
						},
					};
				};
				e.d(c, ['l', 0, r]);
			},
			'./components/src/utilities/componentArgs.ts'(M, c, e) {
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
				e.d(c, ['F', 0, r]);
			},
			'./components/src/utilities/snapify.ts'(M, c, e) {
				'use strict';
				e.d(c, { p: () => U });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					O = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					C = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(l) {
						const a = l.id;
						if (m[a]) return m[a];
						const u = (m[a] = p({ client: C, controller: l }));
						return (
							u.on('afterStore', async ({ controller: d }, x) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(l) {
						const a = l.id;
						if (m[a]) return m[a];
						const u = (m[a] = g({ client: C, controller: l }));
						return (
							u.on('afterStore', async ({ controller: d }, x) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
					static search(l) {
						const a = l.id;
						if (m[a]) return m[a];
						const u = (m[a] = A({ client: C, controller: l }));
						return (
							u.on('afterStore', async ({ controller: d }, x) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
				}
				function A(o) {
					const l = new s.V(new b.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), D.X);
					return new i.Tp(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new T.U(o.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new O.E(),
						profiler: new y.U(),
						logger: new P.V(),
						tracker: new f.J(o.client.globals),
					});
				}
				function p(o) {
					const l = new s.V(new b.E(), D.X).detach(!0);
					return new _.c(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new t.t(o.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new O.E(),
						profiler: new y.U(),
						logger: new P.V(),
						tracker: new f.J(o.client.globals),
					});
				}
				function g(o) {
					const l = new s.V(new b.E(), D.X).detach();
					return new h.Z(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new v.Y(o.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new O.E(),
						profiler: new y.U(),
						logger: new P.V(),
						tracker: new f.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, c, e) {
				'use strict';
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					_ = (n) => {
						const v = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								v.current && n.className?.includes('lang-') && !n.className?.includes(h) && window?.Prism?.highlightElement(v.current);
							}, [n.className, n.children, v]),
							(0, r.Y)('code', { ...n, ref: v, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, _]);
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function c(e) {
					const r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (M.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Terms-Terms-stories.8dfa4b8a.iframe.bundle.js.map
