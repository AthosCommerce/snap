(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4188],
		{
			'./components/src/components/Atoms/Banner/Banner.stories.tsx'(B, _, e) {
				'use strict';
				e.r(_), e.d(_, { Footer: () => l, Header: () => c, Left: () => o, Secondary: () => s, __namedExportsOrder: () => h, default: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts');
				const M =
						"# Banner\n\nRenders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. \n\nThis `Banner` component does not support inline banners. See `InlineBanner` component below.\n\n## Usage\n```tsx\nimport { Banner } from '@athoscommerce/snap-preact/components';\n```\n\n### content\nThe required `content` prop specifies an object of banners returned from the athos API.\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n### type\nThe required `type` prop specifies the banner type to render from the `content` object.\n\nBanner Types include `header`, `footer`, `left`, and `banner`. \n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'footer'} />\n```\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'left'} />\n```\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'banner'} />\n```",
					D = {
						title: 'Atoms/Banner',
						component: m.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(P.oz, { options: { overrides: { code: O.Z } }, children: M }), (0, t.Y)(P.uY, { story: P.h1 })],
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
				const s = (v, { loaded: { controller: i } }) => (0, t.Y)(m.l, { ...v, content: i?.store?.merchandising?.content });
				(s.loaders = [async () => (await d.search(), { controller: d })]), (s.args = { type: 'banner' });
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
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
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
								...s.parameters?.docs?.source,
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
				const h = ['Header', 'Footer', 'Secondary', 'Left'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(B, _, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					n = e.n(O),
					f = e('./components/src/providers/cache.tsx'),
					M = e('./components/src/providers/controller.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/withTracking.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/mergeProps.ts'),
					s = e('./components/src/utilities/mergeStyles.ts'),
					o = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					T = (0, M.Bk)(
						(0, P.PA)((E) => {
							const g = (0, D.u)(),
								b = { treePath: (0, c.LU)() },
								r = (0, l.v6)('banner', g, b, E),
								{ controller: a, type: p, className: u, internalClassName: y } = r,
								C = r.content || a?.store?.merchandising.content,
								{ overrideElement: A, shouldRenderDefault: x } = (0, o._)('banner', r);
							if (!x) return A;
							if (p === h.c.INLINE) return console.warn(`BannerType '${h.c.INLINE}' is not supported in <Banner /> component`), null;
							const L = (0, s.Z)(r, i),
								R = C?.[p]?.[0]?.value;
							if (!p || !R) return null;
							const j = (0, v.hb)(
								(0, d.W)((U) =>
									(0, t.Y)('div', {
										className: n()('ss__banner', `ss__banner--${p}`, u, y),
										...L,
										ref: U.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof R == 'string' ? R : R.join('') },
									})
								),
								[R, p]
							);
							return (0, t.Y)(f._, { children: (0, t.Y)(j, { ...r }) });
						})
					);
				e.d(_, ['l', 0, T]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, _, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = 250,
					m = (n, f = {}) => {
						const { rootMargin: M = '0px', fireOnce: D = !1, threshold: d = 0, minVisibleTime: c = 0 } = f,
							[l, s] = (0, t.J0)(!1),
							o = (0, t.li)(null),
							h = (0, t.li)(null),
							[v, i] = (0, t.J0)(0),
							T = (0, t.hb)((E) => {
								(n.current = E), i((g) => g + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								s(!1);
								let E = null,
									g = null;
								if (!window.IntersectionObserver || !n.current) return;
								const I = () => {
										g && (window.clearInterval(g), (g = null));
									},
									b = () => {
										c > 0
											? ((h.current = Date.now()),
											  o.current && window.clearTimeout(o.current),
											  (o.current = window.setTimeout(() => {
													s(!0), D && n.current && E && E.unobserve(n.current);
											  }, c)))
											: (s(!0), D && n.current && E && E.unobserve(n.current));
									},
									r = () => {
										o.current && window.clearTimeout(o.current), (o.current = null), (h.current = null), s(!1);
									};
								return (
									(E = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? n.current && O(n.current)
													? (I(), b())
													: (r(),
													  g ||
															(g = window.setInterval(() => {
																if (!n.current) {
																	I();
																	return;
																}
																O(n.current) && (I(), b());
															}, P)))
												: (I(), r());
										},
										{ rootMargin: M, threshold: d }
									)),
									n.current && E.observe(n.current),
									() => {
										s(!1), I(), o.current && window.clearTimeout(o.current), E && n.current && E.unobserve(n.current);
									}
								);
							}, [n, v]),
							{ inViewport: l, updateRef: T }
						);
					};
				function O(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(_, ['v', 0, m]);
			},
			'./components/src/providers/withTracking.tsx'(B, _, e) {
				'use strict';
				e.d(_, { N: () => O, W: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = 'sstracking';
				function n(f) {
					const M = f;
					return (d) => {
						const { controller: c, result: l, banner: s, type: o, content: h, ...v } = d;
						if (d.trackingRef) return (0, t.Y)(M, { ...d });
						!c && (!o || !h) && console.warn('Warning: No controller provided to withTracking', d),
							!l && !s && (!o || !h) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: i, inViewport: T, updateRef: E } = (0, P.Q)(),
							g = (l || s || (o && h?.[o]?.[0]))?.responseId,
							I = (0, m.li)(g),
							b = (0, m.li)(!1);
						I.current !== g && (b.current = !0),
							(0, m.vJ)(() => {
								I.current !== g && ((I.current = g), E(i.current));
							}, [g, E]),
							(0, m.vJ)(() => {
								b.current && !T && (b.current = !1);
							}, [T, g]);
						const r = o && h && !l && ['search', 'autocomplete'].includes(c?.type || '');
						T && !b.current && (r ? c?.track.banner.impression(h[o][0]) : l?.bundleSeed || c?.track.product.impression(l || s));
						const a = (0, m.hb)(
							(u) => {
								r ? c?.track.banner.click(u, h[o][0]) : c?.track.product.click(u, l || s);
							},
							[c, l, s, o, h]
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
							banner: s,
							type: o,
							content: h,
							trackingRef: (0, m.hb)(
								(u) => {
									E(u);
								},
								[E]
							),
						};
						return (0, t.Y)(M, { ...p });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(B, _, e) {
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
				e.d(_, ['F', 0, t]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(B, _, e) {
				'use strict';
				e.d(_, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					P = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					O = 1e3;
				function n(f) {
					const M = (0, t.li)(null),
						{ inViewport: D, updateRef: d } = (0, P.v)(M, { ...f, fireOnce: !0, threshold: m, minVisibleTime: O });
					return { ref: M, inViewport: D, updateRef: d };
				}
			},
			'./components/src/utilities/snapify.ts'(B, _, e) {
				'use strict';
				e.d(_, { p: () => E });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					s = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					o = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					T = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(a) {
						const p = a.id;
						if (i[p]) return i[p];
						const u = (i[p] = I({ client: T, controller: a }));
						return (
							u.on('afterStore', async ({ controller: y }, C) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(a) {
						const p = a.id;
						if (i[p]) return i[p];
						const u = (i[p] = b({ client: T, controller: a }));
						return (
							u.on('afterStore', async ({ controller: y }, C) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
					static search(a) {
						const p = a.id;
						if (i[p]) return i[p];
						const u = (i[p] = g({ client: T, controller: a }));
						return (
							u.on('afterStore', async ({ controller: y }, C) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await C();
							}),
							u.init(),
							u
						);
					}
				}
				function g(r) {
					const a = new d.V(new l.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), c.X);
					return new P.Tp(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new M.U(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new s.E(),
						profiler: new o.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function I(r) {
					const a = new d.V(new l.E(), c.X).detach(!0);
					return new O.c(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new D.t(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new s.E(),
						profiler: new o.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function b(r) {
					const a = new d.V(new l.E(), c.X).detach();
					return new m.Z(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new f.Y(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new s.E(),
						profiler: new o.U(),
						logger: new h.V(),
						tracker: new v.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, _, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					O = (n) => {
						const f = (0, P.li)(null);
						return (
							(0, P.vJ)(() => {
								f.current && n.className?.includes('lang-') && !n.className?.includes(m) && window?.Prism?.highlightElement(f.current);
							}, [n.className, n.children, f]),
							(0, t.Y)('code', { ...n, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(_, ['Z', 0, O]);
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function _(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(_.keys = () => []), (_.resolve = _), (_.id = '../../node_modules/memoizerific sync recursive'), (B.exports = _);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Banner-Banner-stories.a6827851.iframe.bundle.js.map
