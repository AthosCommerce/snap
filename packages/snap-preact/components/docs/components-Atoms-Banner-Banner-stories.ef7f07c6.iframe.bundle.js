(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4188],
		{
			'./components/src/components/Atoms/Banner/Banner.stories.tsx'(b, _, e) {
				'use strict';
				e.r(_), e.d(_, { Footer: () => l, Header: () => c, Left: () => o, Secondary: () => r, __namedExportsOrder: () => E, default: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts');
				const M =
						"# Banner\n\nRenders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. \n\nThis `Banner` component does not support inline banners. See `InlineBanner` component below.\n\n## Usage\n```jsx\nimport { Banner } from '@athoscommerce/snap-preact/components';\n```\n\n### content\nThe required `content` prop specifies an object of banners returned from the athos API.\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n### type\nThe required `type` prop specifies the banner type to render from the `content` object.\n\nBanner Types include `header`, `footer`, `left`, and `banner`. \n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'footer'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'left'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'banner'} />\n```",
					D = {
						title: 'Atoms/Banner',
						component: m.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(y.oz, { options: { overrides: { code: O.Z } }, children: M }), (0, t.Y)(y.uY, { story: y.h1 })],
									}),
							},
						},
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							content: {
								description: 'Banner content store reference',
								type: { required: !0 },
								table: { type: { summary: 'banner content store object' }, category: 'Templates Legal' },
								control: { type: 'none' },
							},
							type: {
								description: 'Banner position type',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: ['header', 'footer', 'left', 'inline', 'banner'],
								control: { type: 'select' },
							},
							...n.F,
						},
					},
					d = f.p.search({ id: 'Banner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					c = (v, { loaded: { controller: i } }) => (0, t.Y)(m.l, { ...v, content: i?.store?.merchandising?.content });
				(c.loaders = [async () => (await d.search(), { controller: d })]), (c.args = { type: 'header' });
				const l = (v, { loaded: { controller: i } }) => (0, t.Y)(m.l, { ...v, content: i?.store?.merchandising?.content });
				(l.loaders = [async () => (await d.search(), { controller: d })]), (l.args = { type: 'footer' });
				const r = (v, { loaded: { controller: i } }) => (0, t.Y)(m.l, { ...v, content: i?.store?.merchandising?.content });
				(r.loaders = [async () => (await d.search(), { controller: d })]), (r.args = { type: 'banner' });
				const o = (v, { loaded: { controller: i } }) => (0, t.Y)(m.l, { ...v, content: i?.store?.merchandising?.content });
				(o.loaders = [async () => (await d.search(), { controller: d })]),
					(o.args = { type: 'left' }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...c.parameters?.docs?.source,
							},
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...l.parameters?.docs?.source,
							},
						},
					}),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...r.parameters?.docs?.source,
							},
						},
					}),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: {
								originalSource: `(args: BannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Banner {...args} content={controller?.store?.merchandising?.content} />`,
								...o.parameters?.docs?.source,
							},
						},
					});
				const E = ['Header', 'Footer', 'Secondary', 'Left'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(b, _, e) {
				'use strict';
				e.d(_, { l: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					n = e.n(O),
					f = e('./components/src/providers/cache.tsx'),
					M = e('./components/src/providers/controller.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/withTracking.tsx'),
					c = e('./components/src/providers/snap.tsx'),
					l = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/utilities/mergeProps.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/hooks/useComponent.tsx'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					g = (0, M.Bk)(
						(0, y.PA)((P) => {
							const I = (0, D.u)(),
								B = (0, c.uk)(),
								a = { treePath: (0, l.LU)() },
								p = (0, r.v6)('banner', I, a, P),
								{ controller: u, type: h, className: C, internalClassName: L, customComponent: x } = p,
								j = p.content || u?.store?.merchandising.content;
							if (x) {
								const R = (0, E.x)(B?.templates?.library.import.component.banner || {}, x);
								if (R) return (0, t.Y)(R, { ...p });
							}
							if (h === v.c.INLINE) return console.warn(`BannerType '${v.c.INLINE}' is not supported in <Banner /> component`), null;
							const U = (0, o.Z)(p, T),
								A = j?.[h]?.[0]?.value;
							if (!h || !A) return null;
							const S = (0, i.hb)(
								(0, d.W)((R) =>
									(0, t.Y)('div', {
										className: n()('ss__banner', `ss__banner--${h}`, C, L),
										...U,
										ref: R.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof A == 'string' ? A : A.join('') },
									})
								),
								[A, h]
							);
							return (0, t.Y)(f._, { children: (0, t.Y)(S, { ...p }) });
						})
					);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(b, _, e) {
				'use strict';
				e.d(_, { v: () => m });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const y = 250,
					m = (n, f = {}) => {
						const { rootMargin: M = '0px', fireOnce: D = !1, threshold: d = 0, minVisibleTime: c = 0 } = f,
							[l, r] = (0, t.J0)(!1),
							o = (0, t.li)(null),
							E = (0, t.li)(null),
							[v, i] = (0, t.J0)(0),
							T = (0, t.hb)((g) => {
								(n.current = g), i((P) => P + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								r(!1);
								let g = null,
									P = null;
								if (!window.IntersectionObserver || !n.current) return;
								const I = () => {
										P && (window.clearInterval(P), (P = null));
									},
									B = () => {
										c > 0
											? ((E.current = Date.now()),
											  o.current && window.clearTimeout(o.current),
											  (o.current = window.setTimeout(() => {
													r(!0), D && n.current && g && g.unobserve(n.current);
											  }, c)))
											: (r(!0), D && n.current && g && g.unobserve(n.current));
									},
									s = () => {
										o.current && window.clearTimeout(o.current), (o.current = null), (E.current = null), r(!1);
									};
								return (
									(g = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? n.current && O(n.current)
													? (I(), B())
													: (s(),
													  P ||
															(P = window.setInterval(() => {
																if (!n.current) {
																	I();
																	return;
																}
																O(n.current) && (I(), B());
															}, y)))
												: (I(), s());
										},
										{ rootMargin: M, threshold: d }
									)),
									n.current && g.observe(n.current),
									() => {
										r(!1), I(), o.current && window.clearTimeout(o.current), g && n.current && g.unobserve(n.current);
									}
								);
							}, [n, v]),
							{ inViewport: l, updateRef: T }
						);
					};
				function O(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(b, _, e) {
				'use strict';
				e.d(_, { N: () => O, W: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = 'sstracking';
				function n(f) {
					const M = f;
					return (d) => {
						const { controller: c, result: l, banner: r, type: o, content: E, ...v } = d;
						if (d.trackingRef) return (0, t.Y)(M, { ...d });
						!c && (!o || !E) && console.warn('Warning: No controller provided to withTracking', d),
							!l && !r && (!o || !E) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: i, inViewport: T, updateRef: g } = (0, y.Q)(),
							P = (l || r || (o && E?.[o]?.[0]))?.responseId,
							I = (0, m.li)(P),
							B = (0, m.li)(!1);
						I.current !== P && (B.current = !0),
							(0, m.vJ)(() => {
								I.current !== P && ((I.current = P), g(i.current));
							}, [P, g]),
							(0, m.vJ)(() => {
								B.current && !T && (B.current = !1);
							}, [T, P]);
						const s = o && E && !l && ['search', 'autocomplete'].includes(c?.type || '');
						T && !B.current && (s ? c?.track.banner.impression(E[o][0]) : l?.bundleSeed || c?.track.product.impression(l || r));
						const a = (0, m.hb)(
							(u) => {
								s ? c?.track.banner.click(u, E[o][0]) : c?.track.product.click(u, l || r);
							},
							[c, l, r, o, E]
						);
						(0, m.vJ)(() => {
							const u = i.current;
							if (u)
								return (
									u.setAttribute(O, 'true'),
									u.addEventListener('click', a, !0),
									() => {
										u.removeEventListener('click', a, !0);
									}
								);
						}, [a]);
						const p = {
							...v,
							controller: c,
							result: l,
							banner: r,
							type: o,
							content: E,
							trackingRef: (0, m.hb)(
								(u) => {
									g(u);
								},
								[g]
							),
						};
						return (0, t.Y)(M, { ...p });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(b, _, e) {
				'use strict';
				e.d(_, { F: () => t });
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
			'./components/src/utilities/createImpressionObserver.ts'(b, _, e) {
				'use strict';
				e.d(_, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					O = 1e3;
				function n(f) {
					const M = (0, t.li)(null),
						{ inViewport: D, updateRef: d } = (0, y.v)(M, { ...f, fireOnce: !0, threshold: m, minVisibleTime: O });
					return { ref: M, inViewport: D, updateRef: d };
				}
			},
			'./components/src/utilities/snapify.ts'(b, _, e) {
				'use strict';
				e.d(_, { p: () => g });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					y = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					r = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					o = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					T = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(a) {
						const p = a.id;
						if (i[p]) return i[p];
						const u = (i[p] = I({ client: T, controller: a }));
						return (
							u.on('afterStore', async ({ controller: h }, C) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(a) {
						const p = a.id;
						if (i[p]) return i[p];
						const u = (i[p] = B({ client: T, controller: a }));
						return (
							u.on('afterStore', async ({ controller: h }, C) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
					static search(a) {
						const p = a.id;
						if (i[p]) return i[p];
						const u = (i[p] = P({ client: T, controller: a }));
						return (
							u.on('afterStore', async ({ controller: h }, C) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
				}
				function P(s) {
					const a = new d.V(new l.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), c.X);
					return new y.Tp(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new M.U(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new r.E(),
						profiler: new o.U(),
						logger: new E.V(),
						tracker: new v.J(s.client.globals),
					});
				}
				function I(s) {
					const a = new d.V(new l.E(), c.X).detach(!0);
					return new O.c(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new D.t(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new r.E(),
						profiler: new o.U(),
						logger: new E.V(),
						tracker: new v.J(s.client.globals),
					});
				}
				function B(s) {
					const a = new d.V(new l.E(), c.X).detach();
					return new m.Z(s.controller, {
						client: new n.K(s.client.globals, s.client.config),
						store: new f.Y(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new r.E(),
						profiler: new o.U(),
						logger: new E.V(),
						tracker: new v.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, _, e) {
				'use strict';
				e.d(_, { Z: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					O = (n) => {
						const f = (0, y.li)(null);
						return (
							(0, y.vJ)(() => {
								f.current && n.className?.includes('lang-') && !n.className?.includes(m) && window?.Prism?.highlightElement(f.current);
							}, [n.className, n.children, f]),
							(0, t.Y)('code', { ...n, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function _(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(_.keys = () => []), (_.resolve = _), (_.id = '../../node_modules/memoizerific sync recursive'), (b.exports = _);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Banner-Banner-stories.ef7f07c6.iframe.bundle.js.map
