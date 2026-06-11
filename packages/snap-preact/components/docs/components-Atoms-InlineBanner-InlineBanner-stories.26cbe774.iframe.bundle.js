(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[54],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.stories.tsx'(D, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => n, __namedExportsOrder: () => m, default: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					f = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts');
				const b =
					"# Inline Banner\n\n## Usage\n```tsx\nimport { InlineBanner } from '@athoscommerce/snap-preact/components';\n```\n\n### banner\nThe `banner` prop specifies a reference to an inline banner object from the `content` object.\n\n```tsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} />\n```\n\n### width\nThe `width` prop specifies the width of the inline banner.\n\n```tsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} width={'300px'} />\n```\n\n### layout\nThe `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.\n\n```tsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} layout={'grid'} />\n```\n\n\n### onClick\nThe `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.\n\n```js\nconst CustomBannerClick = (e, banner) => {\n    console.log('You Clicked a banner!' , e)\n};\n```\n\n```tsx\n<InlineBanner banner={controller?.store?.merchandising?.content.inline[0]} onClick={CustomBannerClick} />\n```";
				var O = e('./components/src/types.ts');
				const h = {
						title: 'Atoms/InlineBanner',
						component: o._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(E.oz, { options: { overrides: { code: f.Z } }, children: b }), (0, s.Y)(E.uY, { story: E.h1 })],
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
								defaultValue: O.V.grid,
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [O.V.grid, O.V.list],
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
					d = l.p.search({ id: 'InlineBanner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
					n = (r, { loaded: { controller: _ } }) => {
						const M = _?.store?.results?.filter((v) => v.type === 'banner').pop();
						return M && (0, s.Y)(o._, { ...r, banner: M });
					};
				(n.loaders = [async () => (await d.search(), { controller: d })]),
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
				const m = ['Default'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(D, a, e) {
				'use strict';
				e.d(a, { _: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					f = e.n(o),
					t = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/providers/controller.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/withTracking.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/hooks/useA11y.tsx'),
					r = e('./components/src/types.ts'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const v = ({ width: p }) =>
						(0, E.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: p,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					T = (0, l.Bk)(
						(0, O.W)(
							(0, _.PA)((p) => {
								const g = (0, b.u)(),
									P = (0, h.LU)(),
									C = { layout: r.V.grid, width: 'auto', treePath: P },
									c = (0, d.v6)('inlineBanner', g, C, p),
									{ banner: i, className: y, internalClassName: u, disableA11y: I, layout: B, onClick: x } = c,
									{ overrideElement: R, shouldRenderDefault: L } = (0, M._)('inlineBanner', c);
								if (!L) return R;
								const j = (0, n.Z)(c, v);
								return i && i.value
									? (0, s.Y)(t._, {
											children: (0, s.Y)('div', {
												onClick: (A) => {
													x && x(A, i);
												},
												role: 'article',
												ref: (A) => {
													I || (0, m.iy)(A), p.trackingRef(A);
												},
												className: f()('ss__inline-banner', `ss__inline-banner--${B}`, y, u),
												...j,
												dangerouslySetInnerHTML: { __html: i.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/hooks/useA11y.tsx'(D, a, e) {
				'use strict';
				e.d(a, { DH: () => f, aZ: () => o, iy: () => t });
				const s = 9,
					E = 27,
					o = 'ss-a11y',
					f =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function t(l, b, O, h) {
					const d = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${d}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = d),
							(n.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					l &&
						!l.attributes?.[o] &&
						(l.setAttribute(o, !0),
						l.setAttribute('tabIndex', `${b || 0}`),
						l.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && l.click();
						}),
						O &&
							l.addEventListener('keydown', function (n) {
								const m = l.querySelectorAll(f),
									r = m[0],
									_ = m[m.length - 1];
								if (n.keyCode == E) {
									l.focus(), h && h(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === s) &&
									(n.shiftKey
										? document.activeElement === r && (_.focus(), n.preventDefault())
										: document.activeElement === _ && (r.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(D, a, e) {
				'use strict';
				e.d(a, { v: () => o });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 250,
					o = (t, l = {}) => {
						const { rootMargin: b = '0px', fireOnce: O = !1, threshold: h = 0, minVisibleTime: d = 0 } = l,
							[n, m] = (0, s.J0)(!1),
							r = (0, s.li)(null),
							_ = (0, s.li)(null),
							[M, v] = (0, s.J0)(0),
							T = (0, s.hb)((p) => {
								(t.current = p), v((g) => g + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								m(!1);
								let p = null,
									g = null;
								if (!window.IntersectionObserver || !t.current) return;
								const P = () => {
										g && (window.clearInterval(g), (g = null));
									},
									C = () => {
										d > 0
											? ((_.current = Date.now()),
											  r.current && window.clearTimeout(r.current),
											  (r.current = window.setTimeout(() => {
													m(!0), O && t.current && p && p.unobserve(t.current);
											  }, d)))
											: (m(!0), O && t.current && p && p.unobserve(t.current));
									},
									c = () => {
										r.current && window.clearTimeout(r.current), (r.current = null), (_.current = null), m(!1);
									};
								return (
									(p = new IntersectionObserver(
										([i]) => {
											i.isIntersecting
												? t.current && f(t.current)
													? (P(), C())
													: (c(),
													  g ||
															(g = window.setInterval(() => {
																if (!t.current) {
																	P();
																	return;
																}
																f(t.current) && (P(), C());
															}, E)))
												: (P(), c());
										},
										{ rootMargin: b, threshold: h }
									)),
									t.current && p.observe(t.current),
									() => {
										m(!1), P(), r.current && window.clearTimeout(r.current), p && t.current && p.unobserve(t.current);
									}
								);
							}, [t, M]),
							{ inViewport: n, updateRef: T }
						);
					};
				function f(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(D, a, e) {
				'use strict';
				e.d(a, { N: () => f, W: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('./components/src/utilities/createImpressionObserver.ts'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const f = 'sstracking';
				function t(l) {
					const b = l;
					return (h) => {
						const { controller: d, result: n, banner: m, type: r, content: _, ...M } = h;
						if (h.trackingRef) return (0, s.Y)(b, { ...h });
						!d && (!r || !_) && console.warn('Warning: No controller provided to withTracking', h),
							!n && !m && (!r || !_) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: v, inViewport: T, updateRef: p } = (0, E.Q)(),
							g = (n || m || (r && _?.[r]?.[0]))?.responseId,
							P = (0, o.li)(g),
							C = (0, o.li)(!1);
						P.current !== g && (C.current = !0),
							(0, o.vJ)(() => {
								P.current !== g && ((P.current = g), p(v.current));
							}, [g, p]),
							(0, o.vJ)(() => {
								C.current && !T && (C.current = !1);
							}, [T, g]);
						const c = r && _ && !n && ['search', 'autocomplete'].includes(d?.type || '');
						T && !C.current && (c ? d?.track.banner.impression(_[r][0]) : n?.bundleSeed || d?.track.product.impression(n || m));
						const i = (0, o.hb)(
							(u) => {
								c ? d?.track.banner.click(u, _[r][0]) : d?.track.product.click(u, n || m);
							},
							[d, n, m, r, _]
						);
						(0, o.vJ)(() => {
							const u = v.current;
							if (u)
								return (
									u.setAttribute(f, 'true'),
									u.addEventListener('click', i, !0),
									() => {
										u.removeEventListener('click', i, !0);
									}
								);
						}, [i]);
						const y = {
							...M,
							controller: d,
							result: n,
							banner: m,
							type: r,
							content: _,
							trackingRef: (0, o.hb)(
								(u) => {
									p(u);
								},
								[p]
							),
						};
						return (0, s.Y)(b, { ...y });
					};
				}
			},
			'./components/src/types.ts'(D, a, e) {
				'use strict';
				e.d(a, { Q: () => E, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					E = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(E || {});
			},
			'./components/src/utilities/componentArgs.ts'(D, a, e) {
				'use strict';
				e.d(a, { F: () => s });
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
			'./components/src/utilities/createImpressionObserver.ts'(D, a, e) {
				'use strict';
				e.d(a, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					f = 1e3;
				function t(l) {
					const b = (0, s.li)(null),
						{ inViewport: O, updateRef: h } = (0, E.v)(b, { ...l, fireOnce: !0, threshold: o, minVisibleTime: f });
					return { ref: b, inViewport: O, updateRef: h };
				}
			},
			'./components/src/utilities/snapify.ts'(D, a, e) {
				'use strict';
				e.d(a, { p: () => p });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					r = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					_ = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					T = { globals: { siteId: 'atkzs2' } };
				class p {
					static recommendation(i) {
						const y = i.id;
						if (v[y]) return v[y];
						const u = (v[y] = P({ client: T, controller: i }));
						return (
							u.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(i) {
						const y = i.id;
						if (v[y]) return v[y];
						const u = (v[y] = C({ client: T, controller: i }));
						return (
							u.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							u.init(),
							u
						);
					}
					static search(i) {
						const y = i.id;
						if (v[y]) return v[y];
						const u = (v[y] = g({ client: T, controller: i }));
						return (
							u.on('afterStore', async ({ controller: I }, B) => {
								I.log.debug('controller', I), I.log.debug('store', I.store.toJSON()), await B();
							}),
							u.init(),
							u
						);
					}
				}
				function g(c) {
					const i = new h.V(new n.E({ settings: { coreType: 'query', corePrefix: c.controller.id } }), d.X);
					return new E.Tp(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new b.U(c.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new m.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new M.J(c.client.globals),
					});
				}
				function P(c) {
					const i = new h.V(new n.E(), d.X).detach(!0);
					return new f.c(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new O.t(c.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new m.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new M.J(c.client.globals),
					});
				}
				function C(c) {
					const i = new h.V(new n.E(), d.X).detach();
					return new o.Z(c.controller, {
						client: new t.K(c.client.globals, c.client.config),
						store: new l.Y(c.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new m.E(),
						profiler: new r.U(),
						logger: new _.V(),
						tracker: new M.J(c.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, a, e) {
				'use strict';
				e.d(a, { Z: () => f });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					f = (t) => {
						const l = (0, E.li)(null);
						return (
							(0, E.vJ)(() => {
								l.current && t.className?.includes('lang-') && !t.className?.includes(o) && window?.Prism?.highlightElement(l.current);
							}, [t.className, t.children, l]),
							(0, s.Y)('code', { ...t, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (D.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-InlineBanner-InlineBanner-stories.26cbe774.iframe.bundle.js.map
