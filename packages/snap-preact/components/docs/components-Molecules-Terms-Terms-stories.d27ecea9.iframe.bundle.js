(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9235],
		{
			'./components/src/components/Molecules/Terms/Terms.stories.tsx'(M, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => E, __namedExportsOrder: () => O, default: () => r });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const v =
					"# Terms\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Terms controller={controller} terms={terms}/>\n```\n\n### Terms\n\nThe `terms` prop specifies a reference to an autocomplete term store.\n\n```tsx\n<Terms controller={controller} terms={terms} />\n```\n\n### title\n\nThe `title` prop is will display the given text above the terms area. The default value is blank. \n\n```tsx\n<Terms controller={controller} terms={terms} title={'Suggestions'}/>\n```\n\n### vertical\n\nThe `vertical` prop is will specifies if the terms should render vertically.\n\n```tsx\n<Terms controller={controller} terms={terms} vertical={true}/>\n```\n\n### limit\n\nThe `limit` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  \n\n```tsx\n<Terms controller={controller} terms={terms} limit={4}/>\n```\n\n### previewOnHover\n\nThe `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.\n\n```tsx\n<Terms controller={controller} terms={terms} previewOnHover={true}/>\n```\n\n### emify\n\nThe `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. \n\n```tsx\n<Terms controller={controller} terms={terms} emify={true}/>\n```\n\n### onTermClick\n\nThe `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. \n\n```tsx\n<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Terms component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Title text above the terms list | `controller` (AutocompleteController) |\n| `term` | Individual term text/attributes | `index` (number), `numberOfTerms` (number), `term` (Term) |\n\n### Example\n\n```tsx\n<Terms\n	controller={controller}\n	terms={terms}\n	lang={{\n		title: {\n			value: 'Suggestions',\n		},\n		term: {\n			attributes: {\n				'aria-label': (data) => `suggestion ${data.index + 1} of ${data.numberOfTerms}, ${data.term.value}`,\n			},\n		},\n	}}\n/>\n```\n";
				var y = e('./components/src/utilities/snapify.ts'),
					t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = {
						title: 'Molecules/Terms',
						component: n.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(i.oz, { options: { overrides: { code: h.Z } }, children: v }), (0, s.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(T) => (0, s.Y)(T, {})],
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
					D = y.p.autocomplete({
						id: 'Autocomplete-Terms',
						selector: '#searchInput2',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					E = (T, { loaded: { controller: P } }) => {
						const [g, m] = (0, t.J0)(''),
							C = [
								{ active: g === 'dress', preview: () => m('dress'), value: 'dress', type: 'suggested', url: { href: '#' } },
								{ active: g === 'shirt', preview: () => m('shirt'), value: 'shirt', type: 'suggested', url: { href: '#' } },
								{ active: g === 'shoes', preview: () => m('shoes'), value: 'shoes', type: 'suggested', url: { href: '#' } },
								{ active: g === 'hat', preview: () => m('hat'), value: 'hat', type: 'suggested', url: { href: '#' } },
								{ active: g === 'pants', preview: () => m('pants'), value: 'pants', type: 'suggested', url: { href: '#' } },
								{ active: g === 'socks', preview: () => m('socks'), value: 'socks', type: 'suggested', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								P.bind();
							}),
							(0, s.Y)('div', { style: { maxWidth: T?.vertical ? '500px' : '1200px' }, children: (0, s.Y)(n.i, { ...T, controller: P, terms: C }) })
						);
					};
				(E.loaders = [async () => ({ controller: await D })]),
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
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
  return <div style={{
    maxWidth: args?.vertical ? '500px' : '1200px'
  }}>
            <Terms {...args} controller={controller} terms={mockTerms} />
        </div>;
}`,
								...E.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(M, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					n = e.n(_),
					v = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useLang.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(P);
				const m = ({ vertical: p, theme: f }) =>
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
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: f?.variables?.colors?.primary } },
								},
							},
						}),
					C = (p) => p?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					j = (p, f) => {
						if (p && f) {
							const o = p.match(C(f));
							if (f && p && o && typeof o.index == 'number') {
								const l = p.slice(0, o.index),
									a = p.slice(o.index + f.length, p.length);
								return `${l ? `<em>${l}</em>` : ''}${f}${a ? `<em>${a}</em>` : ''}`;
							}
						}
						return `<em>${p}</em>`;
					},
					w = (0, i.PA)((p) => {
						const f = (0, y.u)(),
							l = { vertical: !0, previewOnHover: !0, treePath: (0, t.LU)() },
							a = (0, D.v6)('terms', f, l, p),
							{ title: u, onTermClick: d, limit: x, previewOnHover: R, emIfy: I, className: B, internalClassName: K, controller: S } = a,
							W = S?.store?.state?.input,
							U = a.terms,
							{ overrideElement: k, shouldRenderDefault: $ } = (0, T._)('terms', a);
						if (!$) return k;
						const N = (0, E.Z)(a, m),
							Y = (b, L) => {
								d && d(b, L), S?.setFocused && S?.setFocused();
							},
							A = x ? U?.slice(0, x) : U,
							H = { title: { value: u } },
							V = g()(H, a.lang || {}),
							F = (0, O.u)({ title: V.title }, { controller: S }, { activeBreakpoint: f?.activeBreakpoint });
						return A?.length
							? (0, s.Y)(v._, {
									children: (0, s.FD)('div', {
										...N,
										className: n()('ss__terms', B, K),
										children: [
											u ? (0, s.Y)('div', { className: 'ss__terms__title', children: (0, s.Y)('h5', { ...F.title.all }) }) : null,
											(0, s.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': u,
												children: A?.map((b, L) => {
													const J = {
															term: {
																value: `${I ? j(b.value, W || '') : b.value}`,
																attributes: { 'aria-label': `${u || ''} item ${L + 1} of ${A.length}, ${b.value}` },
															},
														},
														z = g()(J, a.lang || {}),
														Z = (0, O.u)({ term: z.term }, { index: L, numberOfTerms: A.length, term: b }, { activeBreakpoint: f?.activeBreakpoint });
													return (0, s.Y)('li', {
														className: n()('ss__terms__option', { 'ss__terms__option--active': b.active }),
														children: (0, s.Y)('a', { onClick: (X) => Y(X, b), href: b.url.href, ...(R ? (0, r.l)(b.preview) : {}), ...Z.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['i', 0, w]);
			},
			'./components/src/hooks/useLang.tsx'(M, c, e) {
				'use strict';
				const s = (i, h, _) => {
					const n = _ ? { ...h, ..._ } : h,
						v = {};
					return (
						Object.keys(i).forEach((y) => {
							const t = i && i[y],
								r = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (r.value = { 'ss-lang': y, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (r.value = { 'ss-lang': y, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((r.attributes = { 'ss-lang': y }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (r.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (r.attributes.title = t.attributes.title(n))
											: (r.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (r.attributes.alt = t.attributes.alt(n)) : (r.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = t.attributes.placeholder(n))
											: (r.attributes.placeholder = t.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': y })),
								(v[y] = r);
						}),
						v
					);
				};
				e.d(c, ['u', 0, s]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(M, c, e) {
				'use strict';
				const s = (i, h = { delay: 333, focusElem: !0 }) => {
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
				e.d(c, ['l', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(M, c, e) {
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
				e.d(c, ['F', 0, s]);
			},
			'./components/src/utilities/snapify.ts'(M, c, e) {
				'use strict';
				e.d(c, { p: () => j });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					O = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					C = { globals: { siteId: 'atkzs2' } };
				class j {
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
						const u = (m[a] = f({ client: C, controller: l }));
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
						const u = (m[a] = w({ client: C, controller: l }));
						return (
							u.on('afterStore', async ({ controller: d }, x) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await x();
							}),
							u.init(),
							u
						);
					}
				}
				function w(o) {
					const l = new r.V(new E.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), D.X);
					return new i.Tp(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new y.U(o.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new O.E(),
						profiler: new T.U(),
						logger: new P.V(),
						tracker: new g.J(o.client.globals),
					});
				}
				function p(o) {
					const l = new r.V(new E.E(), D.X).detach(!0);
					return new _.c(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new t.t(o.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new O.E(),
						profiler: new T.U(),
						logger: new P.V(),
						tracker: new g.J(o.client.globals),
					});
				}
				function f(o) {
					const l = new r.V(new E.E(), D.X).detach();
					return new h.Z(o.controller, {
						client: new n.K(o.client.globals, o.client.config),
						store: new v.Y(o.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new O.E(),
						profiler: new T.U(),
						logger: new P.V(),
						tracker: new g.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					_ = (n) => {
						const v = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								v.current && n.className?.includes('lang-') && !n.className?.includes(h) && window?.Prism?.highlightElement(v.current);
							}, [n.className, n.children, v]),
							(0, s.Y)('code', { ...n, ref: v, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, _]);
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function c(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (M.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Terms-Terms-stories.d27ecea9.iframe.bundle.js.map
