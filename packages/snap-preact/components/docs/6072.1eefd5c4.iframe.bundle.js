'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[935, 6072],
		{
			'./src/Instantiators/RecommendationInstantiator.tsx'(V, A, t) {
				t.d(A, { RecommendationInstantiator: () => u });
				var j = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = t('../../node_modules/preact/dist/preact.module.js'),
					U = t('../../node_modules/deepmerge/dist/cjs.js'),
					M = t.n(U),
					R = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/DomTargeter/DomTargeter.js'),
					v = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/getContext/getContext.js'),
					y = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/types.js'),
					B = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					K = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js'),
					w = t('./src/create/createRecommendationController.ts');
				const i = 'production';
				class u {
					constructor(r, e, h) {
						if (
							((this.mode = y.$.production),
							(this.controller = {}),
							(this.uses = []),
							(this.plugins = []),
							(this.middleware = []),
							(this.config = r),
							!this.config)
						)
							throw new Error('Recommendation Instantiator config is required');
						if (
							(this.config.config?.branch || ((this.config.config = this.config.config || {}), (this.config.config.branch = i)),
							!this.config.components || typeof this.config.components != 'object' || !Object.keys(this.config.components).length)
						)
							throw new Error("Recommendation Instantiator config must contain 'components' mapping property");
						if ((!e?.client || !e?.tracker) && !this.config?.client?.globals?.siteId)
							throw new Error('Recommendation Instantiator config must contain a valid config.client.globals.siteId value');
						this.config.mode &&
							Object.values(y.$).includes(this.config.mode) &&
							((this.mode = this.config.mode),
							this.config?.client?.globals?.siteId &&
								((this.config.client.config = this.config.client.config || {}),
								(this.config.client.config.mode = this.config.client.config.mode || this.mode))),
							(window.athos = window.athos || {}),
							(this.context = M()(h || {}, r.context || {})),
							(this.client = e?.client || new B.K(this.config.client.globals, this.config.client.config)),
							(this.tracker = e?.tracker || new x.J(this.config.client.globals)),
							(this.logger = e?.logger || new K.V({ prefix: 'RecommendationInstantiator ', mode: this.mode }));
						const f = {};
						this.targeter = new R.b(
							[
								{
									selector: `${
										this.config.selector ||
										'script[type="searchspring/recommend"], script[type="searchspring/personalized-recommendations"], script[type="athos/recommend"], script[type="athos/personalized-recommendations"]'
									}, script[type="searchspring/recommend"][profile="email"], script[type="athos/recommend"][profile="email"]`,
									autoRetarget: !0,
									clickRetarget: !0,
									navigationRetarget: !0,
									emptyTarget: !1,
								},
								{
									selector: 'script[type="searchspring/recommendations"], script[type="athos/recommendations"]',
									autoRetarget: !0,
									clickRetarget: !0,
									navigationRetarget: !0,
									emptyTarget: !1,
								},
							],
							async (p, _) => {
								this.cleanupStaleControllers();
								const s = _,
									c = (0, v.S)(
										[
											'shopperId',
											'shopper',
											'product',
											'products',
											'seed',
											'cart',
											'filters',
											'blockedItems',
											'options',
											'profile',
											'custom',
											'profiles',
											'globals',
										],
										s
									);
								if (c.profiles && c.profiles.length) {
									const a = c.profiles,
										l = c.globals,
										C = {
											...$({
												blockedItems: l?.blockedItems,
												filters: l?.filters,
												cart: l?.cart && X(l.cart),
												products: l?.products,
												shopper: l?.shopper?.id,
												batchId: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
											}),
										};
									a.forEach((m, T) => {
										if (m.selector) {
											const O = { selector: m.selector, autoRetarget: !0, profile: m, order: T };
											let E;
											new R.b([O], async (d, n, b, g) => {
												if (s.isConnected === !1) {
													n && g?.releaseTargets([n]);
													return;
												}
												if (d.profile?.profile || d.profile?.tag) {
													const k = { ...C, profile: { ...d.profile?.options, order: d.order }, tag: d.profile.tag || d.profile.profile },
														P = M()(this.context, $({ globals: l, profile: d.profile }));
													if ((c.custom && (P.custom = M()(P.custom, c.custom)), !E)) E = D(this, e || {}, n, P, f, s, k, d, g);
													else {
														const I = await E;
														I && n && W(this, e || {}, I, n, s, d);
													}
												}
											});
										}
									});
								} else {
									const { profile: a, products: l, product: C, seed: m, filters: T, blockedItems: O, options: E, shopper: d, shopperId: n } = c,
										b = [].concat(l || C || m || []),
										g = [d, d?.id, n, n?.id].filter((H) => H && typeof H == 'string').pop(),
										k = {
											tag: a,
											...$({ products: b.length ? b : void 0, cart: c.cart && X(c.cart), shopper: g, filters: T, blockedItems: O, profile: E }),
										},
										P = s.getAttribute('profile') || '',
										I = s.ownerDocument.createElement('div');
									I.setAttribute('searchspring-recommend', P), s.before(I);
									const G = M()(this.context, c);
									new R.b([{ selector: `[searchspring-recommend="${P}"]`, name: `legacy_${a}_${f[a || ''] || 0}` }], async (H, S, z, N) => {
										if (s.isConnected === !1) {
											S && N?.releaseTargets([S]);
											return;
										}
										D(this, e || {}, S, G, f, s, k, p, N);
									});
								}
							}
						);
					}
					plugin(r, ...e) {
						this.plugins.push({ func: r, args: e });
					}
					on(r, ...e) {
						this.middleware.push({ event: r, func: e });
					}
					use(r) {
						this.uses.push(r);
					}
					cleanupStaleControllers() {
						Object.keys(this.controller).forEach((r) => {
							const e = this.controller[r];
							Object.values(e.targeters).some((p) =>
								p.getTargetedElems().some((_) => (_.isConnected !== !1 && _.getAttribute('ss-controller-id')) === r)
							) ||
								(Object.keys(e.targeters).forEach((p) => e.targeters[p].destroy()),
								(e.targeters = {}),
								delete this.controller[r],
								window.athos?.controller && delete window.athos.controller[r]);
						});
					}
				}
				async function D(o, r, e, h, f, p, _, s, c) {
					const { profile: a, batchId: l, cart: C, tag: m } = _,
						T = a?.batched ?? _.batched ?? !0;
					if (!m) {
						o.logger.warn("'tag' is missing from <script> tag, skipping this profile", p);
						return;
					}
					Array.isArray(C) && o.tracker.cookies.cart.set(C);
					const O = M().all([o.config.client?.globals || {}, o.config.config?.globals || {}, _]),
						E = {
							tag: m,
							batched: T ?? o.config.config?.batched ?? !0,
							realtime: !!(h.options?.realtime ?? h.profile?.options?.realtime ?? o.config.config?.realtime),
							batchId: l,
							middleware: o.config.config.middleware,
							plugins: o.config.config.plugins,
							branch: o.config.config?.branch || 'production',
							limit: o.config.config?.limit,
							beacon: o.config.config?.beacon || { enabled: !0 },
							settings: { variants: o.config.config?.variants },
							globals: O,
						};
					a?.branch && (E.branch = a?.branch), (f[m] = f[m] + 1 || 1);
					const d = { id: `recommend_${m}_${f[m] - 1}`, ...E },
						n = (0, w.default)({ url: o.config.url, controller: d, context: h, mode: o.config.mode }, { client: o.client, tracker: o.tracker });
					e && e.setAttribute('ss-controller-id', n.id),
						o.uses.forEach((g) => n.use(g)),
						o.plugins.forEach((g) => n.plugin(g.func, ...g.args)),
						o.middleware.forEach((g) => n.on(g.event, ...g.func)),
						(o.controller[n.config.id] = n),
						(window.athos.controller = window.athos.controller || {}),
						(window.athos.controller[n.config.id] = n),
						n.addTargeter(c),
						n.store.loading || (await n.search());
					const b = n.store.profile.display?.templateParameters;
					if (!n.store.error) {
						if (!n.store.profile.display.template) {
							o.logger.error(`profile '${m}' found on the following element is missing a template!
${p?.outerHTML}`);
							return;
						}
						if (!b) {
							o.logger.error(`profile '${m}' found on the following element is missing templateParameters!
${p?.outerHTML}`);
							return;
						}
						return e && (await W(o, r, n, e, p, s)), n;
					}
				}
				async function W(o, r, e, h, f, p) {
					h && h.setAttribute('ss-controller-id', e.id);
					const _ = e.config.tag,
						s = e.store.profile.display?.template?.component;
					if (!s) {
						o.logger.error(`profile '${_}' found on the following element is missing a component!
${f?.outerHTML}`);
						return;
					}
					let c = {},
						a;
					if (
						((c.className = `ss__recommendation-${s.toLowerCase()}`),
						o.config.components[s]?.onTarget?.(p, f, h, e),
						o.config.components[s] && typeof o.config.components[s] == 'function')
					)
						a = await o.config.components[s]();
					else if (o.config.components[s] && typeof o.config.components[s] == 'object') {
						c = o.config.components[s].props || {};
						const l = [];
						l.push(o.config.components[s].component()), (a = (await Promise.all(l))[0]);
					}
					if (!a) {
						o.logger.error(`profile '${_}' found on the following element is expecting component mapping for '${s}' - verify instantiator config.
${f?.outerHTML}`);
						return;
					}
					setTimeout(() => {
						(0, L.XX)((0, j.Y)(a, { controller: e, snap: r?.snap, ...c }), h);
					});
				}
				function X(o) {
					if (typeof o == 'function')
						try {
							const r = o();
							if (Array.isArray(r)) return r;
						} catch {}
					else if (Array.isArray(o)) return o;
					return [];
				}
				function $(o) {
					const r = {};
					return (
						Object.keys(o).map((e) => {
							o[e] !== void 0 && (r[e] = o[e]);
						}),
						r
					);
				}
			},
			'./src/create/createRecommendationController.ts'(V, A, t) {
				t.r(A);
				var j = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					L = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					U = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					R = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					B = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					K = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const w = (i, u) => {
					const D = (u?.urlManager || new M.V(new v.E(i.url), R.X)).detach(!0);
					return (
						i.mode && i.client && ((i.client.config = i.client.config || {}), (i.client.config.mode = i.mode)),
						new j.c(
							i.controller,
							{
								client: u?.client || new L.K(i.client.globals, i.client.config),
								store: u?.store || new U.t(i.controller, { urlManager: D }),
								urlManager: D,
								eventManager: u?.eventManager || new y.E(),
								profiler: u?.profiler || new B.U(),
								logger: u?.logger || new K.V({ mode: i.mode }),
								tracker: u?.tracker || new x.J(i.client.globals),
							},
							i.context
						)
					);
				};
				t.dn(w), t.d(A, ['default', 0, w]);
			},
		},
	]);
})();

//# sourceMappingURL=6072.1eefd5c4.iframe.bundle.js.map
