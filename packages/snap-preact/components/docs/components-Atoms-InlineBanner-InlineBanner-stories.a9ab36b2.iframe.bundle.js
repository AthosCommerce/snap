(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[54],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.stories.tsx'(D, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => n, __namedExportsOrder: () => d, default: () => v });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					g = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const O =
					"# Inline Banner\n\n## Usage\n```jsx\nimport { InlineBanner } from '@athoscommerce/snap-preact/components';\n```\n\n### banner\nThe `banner` prop specifies a reference to an inline banner object from the `content` object.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} />\n```\n\n### width\nThe `width` prop specifies the width of the inline banner.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} width={'300px'} />\n```\n\n### layout\nThe `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} layout={'grid'} />\n```\n\n\n### onClick\nThe `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.\n\n```js\nconst CustomBannerClick = (e, banner) => {\n    console.log('You Clicked a banner!' , e)\n};\n```\n\n```jsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} onClick={CustomBannerClick} />\n```";
				var P = e('./components/src/types.ts');
				const v = {
						title: 'Atoms/InlineBanner',
						component: o._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(p.oz, { options: { overrides: { code: g.Z } }, children: O }), (0, s.Y)(p.uY, { story: p.h1 })],
									}),
							},
						},
						argTypes: {
							banner: {
								description: 'Banner object reference',
								type: { required: !0 },
								table: { type: { summary: 'inline banner store object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Banner layout',
								defaultValue: P.V.grid,
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [P.V.grid, P.V.list],
								control: { type: 'select' },
							},
							width: {
								description: 'InlineBanner width',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							...t.F,
						},
						decorators: [
							(r) =>
								(0, s.Y)('div', { style: { width: '220px', height: '300px', position: 'relative' }, children: (0, s.Y)(r, { height: '200px' }) }),
						],
					},
					u = a.p.search({ id: 'InlineBanner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					n = (r, { loaded: { controller: _ } }) => {
						const M = _?.store?.results?.filter((y) => y.type === 'banner').pop();
						return M && (0, s.Y)(o._, { ...r, banner: M });
					};
				(n.loaders = [async () => (await u.search(), { controller: u })]),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: {
								originalSource: `(args: InlineBannerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const inlineBanners = controller?.store?.results?.filter(result => result.type === 'banner').pop() as Banner;
  return inlineBanners && <InlineBanner {...args} banner={inlineBanners} />;
}`,
								...n.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(D, i, e) {
				'use strict';
				e.d(i, { _: () => f });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					g = e.n(o),
					t = e('./components/src/providers/cache.tsx'),
					a = e('./components/src/providers/controller.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/withTracking.tsx'),
					v = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/hooks/useA11y.tsx'),
					_ = e('./components/src/types.ts'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/hooks/useComponent.tsx');
				const T = ({ width: E }) =>
						(0, p.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: E,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					f = (0, a.Bk)(
						(0, P.W)(
							(0, M.PA)((E) => {
								const b = (0, O.u)(),
									C = (0, v.uk)(),
									c = (0, u.LU)(),
									m = { layout: _.V.grid, width: 'auto', treePath: c },
									h = (0, n.v6)('inlineBanner', b, m, E),
									{ banner: l, className: I, internalClassName: B, disableA11y: L, layout: j, onClick: x, customComponent: R } = h;
								if (R) {
									const A = (0, y.x)(C?.templates?.library.import.component.inlineBanner || {}, R);
									if (A) return (0, s.Y)(A, { ...h });
								}
								const U = (0, d.Z)(h, T);
								return l && l.value
									? (0, s.Y)(t._, {
											children: (0, s.Y)('div', {
												onClick: (A) => {
													x && x(A, l);
												},
												role: 'article',
												ref: (A) => {
													L || (0, r.iy)(A), (E.trackingRef.current = A);
												},
												className: g()('ss__inline-banner', `ss__inline-banner--${j}`, I, B),
												...U,
												dangerouslySetInnerHTML: { __html: l.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/hooks/useA11y.tsx'(D, i, e) {
				'use strict';
				e.d(i, { DH: () => g, aZ: () => o, iy: () => t });
				const s = 9,
					p = 27,
					o = 'ss-a11y',
					g =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function t(a, O, P, v) {
					const u = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${u}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = u),
							(n.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					a &&
						!a.attributes?.[o] &&
						(a.setAttribute(o, !0),
						a.setAttribute('tabIndex', `${O || 0}`),
						a.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && a.click();
						}),
						P &&
							a.addEventListener('keydown', function (n) {
								const d = a.querySelectorAll(g),
									r = d[0],
									_ = d[d.length - 1];
								if (n.keyCode == p) {
									a.focus(), v && v(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === s) &&
									(n.shiftKey
										? document.activeElement === r && (_.focus(), n.preventDefault())
										: document.activeElement === _ && (r.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(D, i, e) {
				'use strict';
				e.d(i, { v: () => o });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 250,
					o = (t, a = {}) => {
						const { rootMargin: O = '0px', fireOnce: P = !1, threshold: v = 0, minVisibleTime: u = 0 } = a,
							[n, d] = (0, s.J0)(!1),
							r = (0, s.li)(null),
							_ = (0, s.li)(null),
							[M, y] = (0, s.J0)(0),
							T = (0, s.hb)((f) => {
								(t.current = f), y((E) => E + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								d(!1);
								let f = null,
									E = null;
								if (!window.IntersectionObserver || !t.current) return;
								const b = () => {
										E && (window.clearInterval(E), (E = null));
									},
									C = () => {
										u > 0
											? ((_.current = Date.now()),
											  r.current && window.clearTimeout(r.current),
											  (r.current = window.setTimeout(() => {
													d(!0), P && t.current && f && f.unobserve(t.current);
											  }, u)))
											: (d(!0), P && t.current && f && f.unobserve(t.current));
									},
									c = () => {
										r.current && window.clearTimeout(r.current), (r.current = null), (_.current = null), d(!1);
									};
								return (
									(f = new IntersectionObserver(
										([m]) => {
											m.isIntersecting
												? t.current && g(t.current)
													? (b(), C())
													: (c(),
													  E ||
															(E = window.setInterval(() => {
																if (!t.current) {
																	b();
																	return;
																}
																g(t.current) && (b(), C());
															}, p)))
												: (b(), c());
										},
										{ rootMargin: O, threshold: v }
									)),
									t.current && f.observe(t.current),
									() => {
										d(!1), b(), r.current && window.clearTimeout(r.current), f && t.current && f.unobserve(t.current);
									}
								);
							}, [t, M]),
							{ inViewport: n, updateRef: T }
						);
					};
				function g(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(D, i, e) {
				'use strict';
				e.d(i, { N: () => g, W: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('./components/src/utilities/createImpressionObserver.ts'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 'sstracking';
				function t(a) {
					const O = a;
					return (v) => {
						const { controller: u, result: n, banner: d, type: r, content: _, ...M } = v;
						if (v.trackingRef) return (0, s.Y)(O, { ...v });
						!u && (!r || !_) && console.warn('Warning: No controller provided to withTracking', v),
							!n && !d && (!r || !_) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: y, inViewport: T, updateRef: f } = (0, p.Q)(),
							E = (n || d || (r && _?.[r]?.[0]))?.responseId,
							b = (0, o.li)(E),
							C = (0, o.li)(!1);
						b.current !== E && (C.current = !0),
							(0, o.vJ)(() => {
								b.current !== E && ((b.current = E), f(y.current));
							}, [E, f]),
							(0, o.vJ)(() => {
								C.current && !T && (C.current = !1);
							}, [T, E]);
						const c = r && _ && !n && ['search', 'autocomplete'].includes(u?.type || '');
						T && !C.current && (c ? u?.track.banner.impression(_[r][0]) : n?.bundleSeed || u?.track.product.impression(n || d));
						const m = (0, o.hb)(
							(l) => {
								c ? u?.track.banner.click(l, _[r][0]) : u?.track.product.click(l, n || d);
							},
							[u, n, d, r, _]
						);
						(0, o.vJ)(() => {
							const l = y.current;
							if (l)
								return (
									l.setAttribute(g, 'true'),
									l.addEventListener('click', m, !0),
									() => {
										l.removeEventListener('click', m, !0);
									}
								);
						}, [m]);
						const h = {
							...M,
							controller: u,
							result: n,
							banner: d,
							type: r,
							content: _,
							trackingRef: (0, o.hb)(
								(l) => {
									f(l);
								},
								[f]
							),
						};
						return (0, s.Y)(O, { ...h });
					};
				}
			},
			'./components/src/types.ts'(D, i, e) {
				'use strict';
				e.d(i, { Q: () => p, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					p = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(p || {});
			},
			'./components/src/utilities/componentArgs.ts'(D, i, e) {
				'use strict';
				e.d(i, { F: () => s });
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
			},
			'./components/src/utilities/createImpressionObserver.ts'(D, i, e) {
				'use strict';
				e.d(i, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					g = 1e3;
				function t(a) {
					const O = (0, s.li)(null),
						{ inViewport: P, updateRef: v } = (0, p.v)(O, { ...a, fireOnce: !0, threshold: o, minVisibleTime: g });
					return { ref: O, inViewport: P, updateRef: v };
				}
			},
			'./components/src/utilities/snapify.ts'(D, i, e) {
				'use strict';
				e.d(i, { p: () => f });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					r = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					_ = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					T = { globals: { siteId: 'atkzs2' } };
				class f {
					static recommendation(m) {
						const h = m.id;
						if (y[h]) return y[h];
						const l = (y[h] = b({ client: T, controller: m }));
						return (
							l.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							l.init(),
							l
						);
					}
					static autocomplete(m) {
						const h = m.id;
						if (y[h]) return y[h];
						const l = (y[h] = C({ client: T, controller: m }));
						return (
							l.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							l.init(),
							l
						);
					}
					static search(m) {
						const h = m.id;
						if (y[h]) return y[h];
						const l = (y[h] = E({ client: T, controller: m }));
						return (
							l.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							l.init(),
							l
						);
					}
				}
				function E(c) {
					const m = new v.V(new n.E({ settings: { coreType: 'query', corePrefix: c.controller.id } }), u.X);
					return new p.Tp(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new O.U(c.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new d.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new M.J(c.client.globals),
					});
				}
				function b(c) {
					const m = new v.V(new n.E(), u.X).detach(!0);
					return new g.c(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new P.t(c.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new d.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new M.J(c.client.globals),
					});
				}
				function C(c) {
					const m = new v.V(new n.E(), u.X).detach();
					return new o.Z(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new a.Y(c.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new d.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new M.J(c.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, i, e) {
				'use strict';
				e.d(i, { Z: () => g });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					g = (t) => {
						const a = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								a.current && t.className?.includes('lang-') && !t.className?.includes(o) && window?.Prism?.highlightElement(a.current);
							}, [t.className, t.children, a]),
							(0, s.Y)('code', { ...t, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (D.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-InlineBanner-InlineBanner-stories.a9ab36b2.iframe.bundle.js.map
