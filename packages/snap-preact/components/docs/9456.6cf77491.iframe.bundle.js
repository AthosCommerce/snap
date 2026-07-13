'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9456],
		{
			'../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'(M, v, i) {
				i.d(v, { c: () => w });
				var n = i('../../node_modules/deepmerge/dist/cjs.js'),
					b = i.n(n),
					g = i('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					y = i('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					I = i('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js'),
					u = i('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinProductLink.js');
				const k = { id: 'recommend', beacon: { enabled: !0 }, tag: '', batched: !0, realtime: !1, globals: {} };
				class w extends y.r {
					constructor(c, { client: f, store: r, urlManager: s, eventManager: a, profiler: h, logger: E, tracker: R }, P) {
						if (
							(super(c, { client: f, store: r, urlManager: s, eventManager: a, profiler: h, logger: E, tracker: R }, P),
							(this.type = I.k.recommendation),
							(this.beaconType = 'recommendations'),
							(this.events = {}),
							(this.track = {
								product: {
									clickThrough: (e, t) => {
										if (!t) {
											this.log.warn('No result provided to track.product.clickThrough');
											return;
										}
										const o = t.responseId;
										if (!this.events[o]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (this.events[o]?.product[t.id]?.productClickThrough) return;
										const d = ['product', 'banner'].includes(t.type) ? t.type : 'product',
											p = {
												type: d,
												uid: t.id ? '' + t.id : '',
												...(d === 'product'
													? {
															parentId: t.mappings.core?.parentId ? '' + t.mappings.core?.parentId : '',
															sku: t.mappings.core?.sku ? '' + t.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											l = { tag: this.store.profile.tag, responseId: o, results: [p] };
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: t, trackEvent: l }),
											this.config.beacon?.enabled &&
												this.tracker.events[this.beaconType].clickThrough({ data: l, siteId: this.config.globals?.siteId }),
											(this.events[o].product[t.id] = this.events[o].product[t.id] || {}),
											(this.events[o].product[t.id].productClickThrough = !0);
									},
									click: (e, t) => {
										if (!t) {
											this.log.warn('No result provided to track.product.click');
											return;
										}
										const o = t.responseId;
										if (!this.events[o]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (t.type === 'banner') {
											if (this.events[o]?.product[t.id]?.inlineBannerClickThrough) return;
											this.track.product.clickThrough(e, t),
												(this.events[o].product[t.id] = this.events[o].product[t.id] || {}),
												(this.events[o].product[t.id].inlineBannerClickThrough = !0),
												setTimeout(() => {
													this.events[o].product[t.id].inlineBannerClickThrough = !1;
												}, u.WG);
										} else if ((0, u.bU)(e, t)) {
											if (this.events?.[o]?.product[t.id]?.productClickThrough) return;
											this.track.product.clickThrough(e, t),
												(this.events[o].product[t.id] = this.events[o].product[t.id] || {}),
												(this.events[o].product[t.id].productClickThrough = !0),
												setTimeout(() => {
													this.events[o].product[t.id].productClickThrough = !1;
												}, u.WG);
										}
									},
									impression: (e) => {
										if (!e) {
											this.log.warn('No result provided to track.product.impression');
											return;
										}
										const t = e.responseId;
										if (this.events[t]) {
											if (this.events[t]?.product[e.id]?.impression) return;
										} else {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const o = ['product', 'banner'].includes(e.type) ? e.type : 'product',
											d = {
												type: o,
												uid: e.id ? '' + e.id : '',
												...(o === 'product'
													? {
															parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
															sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											p = { tag: this.store.profile.tag, responseId: t, results: [d], banners: [] };
										this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: p }),
											this.config.beacon?.enabled &&
												this.tracker.events[this.beaconType].impression({ data: p, siteId: this.config.globals?.siteId }),
											(this.events[t].product[e.id] = this.events[t].product[e.id] || {}),
											(this.events[t].product[e.id].impression = !0);
									},
									addToCart: (e) => {
										if (!e) {
											this.log.warn('No result provided to track.product.addToCart');
											return;
										}
										const t = e.responseId;
										if (!this.events[t]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const o = {
												parentId: e.display.mappings.core?.parentId ? '' + e.display.mappings.core?.parentId : '',
												uid: e.display.mappings.core?.uid || e.display.id,
												sku: e.display.mappings.core?.sku,
												qty: e.quantity || 1,
												price: Number(e.display.mappings.core?.price) || 0,
											},
											d = { responseId: t, tag: this.store.profile.tag, results: [o] };
										this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: d }),
											this.config.beacon?.enabled && this.tracker.events[this.beaconType].addToCart({ data: d, siteId: this.config.globals?.siteId });
									},
								},
							}),
							(this.search = async () => {
								try {
									this.initialized || (await this.init());
									const e = this.params;
									this.store.loading = !0;
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: e });
									} catch (m) {
										if (m?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), m);
									}
									const t = this.profiler.create({ type: 'event', name: 'search', context: e }).start(),
										{ meta: o, profile: d, results: p, responseId: l } = await this.client.recommend(e);
									t.stop(), this.log.profile(t), (this.events[l] = this.events[l] || { product: {} });
									const T = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: o, profile: d, results: p } });
									} catch (m) {
										if (m?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), T.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), m);
									}
									T.stop(),
										this.log.profile(T),
										this.store.update({ meta: o, profile: d, results: p, responseId: l }),
										(this.beaconType = this.store.profile.type === 'bundle' ? 'bundles' : 'recommendations');
									const x = { responseId: l, tag: this.store.profile.tag };
									this.config.beacon?.enabled && this.tracker.events[this.beaconType].render({ data: x, siteId: this.config.globals?.siteId });
									const C = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
									try {
										await this.eventManager.fire('afterStore', {
											controller: this,
											request: e,
											response: { meta: o, profile: d, results: p, responseId: l },
										});
									} catch (m) {
										if (m?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), C.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), m);
									}
									C.stop(), this.log.profile(C);
								} catch (e) {
									if (e)
										if (e.err && e.fetchDetails) {
											switch (e.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: g.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: g.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: g.B.ERROR, message: e.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
										} else
											(this.store.error = { type: g.B.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.addToCart = async (e) => {
								const t = typeof e?.slice == 'function' ? e.slice() : [e];
								if (!e || t.length === 0) {
									this.log.warn('No products provided to recommendation controller.addToCart');
									return;
								}
								t.forEach((o) => {
									this.track.product.addToCart(o);
								}),
									t.length > 0 && (await this.eventManager.fire('addToCart', { controller: this, products: t }));
							}),
							!c.tag)
						)
							throw new Error('Invalid config passed to RecommendationController. The "tag" attribute is required.');
						c.settings?.searchOnPageShow !== !1 &&
							window.addEventListener('pageshow', (e) => {
								e.persisted && !this.store.error && this.store.loaded && !this.store.loading && this.search();
							}),
							(this.config = b()(k, this.config)),
							this.store.setConfig(this.config),
							this.use(this.config);
					}
					get params() {
						const c = {
								tag: this.config.tag,
								batched: this.config.batched,
								branch: this.config.branch || 'production',
								batchId: this.config.batchId,
								...this.config.globals,
							},
							{ shopperId: f } = this.tracker.getContext();
						if ((f && (c.shopper = f), !c.siteId || c.siteId == this.tracker.getGlobals().siteId)) {
							const r = this.tracker.cookies.cart.get(),
								s = this.tracker.cookies.viewed.get();
							r?.length && (c.cart = r), s?.length && (c.lastViewed = s);
						}
						return c;
					}
				}
			},
			'../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'(M, v, i) {
				i.d(v, { t: () => c });
				var n = i('../../node_modules/mobx/dist/mobx.esm.js'),
					b = i('../../node_modules/deepmerge/dist/cjs.js'),
					g = i.n(b),
					y = i('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					I = i('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
					u = i('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js');
				class k {
					constructor() {
						(this.items = []), (0, n.Gn)(this, { items: n.sH, price: n.EW, count: n.EW, msrp: n.EW }), (this.eventManager = new u.E());
					}
					on(r, ...s) {
						this.eventManager.on(r, ...s);
					}
					get count() {
						let r = 0;
						return (
							this.items.forEach((s) => {
								r += s.quantity;
							}),
							r
						);
					}
					get price() {
						let r = 0;
						return (
							this.items.forEach((s) => {
								r = (r * 100 + +(+((s.display.mappings.core?.price || 0) * 100) * s.quantity)) / 100 || 0;
							}),
							r
						);
					}
					get msrp() {
						let r = 0;
						return (
							this.items.forEach((s) => {
								r =
									(r * 100 + +((+((s.display.mappings.core?.msrp || 0) * 100) || +((s.display.mappings.core?.price || 0) * 100) || 0) * s.quantity)) /
										100 || 0;
							}),
							r
						);
					}
					addItems(r) {
						r.forEach((s) => {
							this.items.findIndex((h) => h.id == s.id) == -1 && this.items.push(s);
						}),
							this.eventManager.fire('addItems', { cart: this, items: r });
					}
					removeItems(r) {
						const s = [...this.items];
						r.forEach((a) => {
							const h = s.findIndex((E) => E.id == a.id);
							h > -1 && (s.splice(h, 1), s.length == 0 && this.eventManager.fire('emptied', { cart: this }));
						}),
							(this.items = s),
							this.eventManager.fire('removeItems', { cart: this, items: r });
					}
					reset() {
						(this.items = []), this.eventManager.fire('reset', { cart: this });
					}
				}
				class w {
					constructor(r) {
						(this.display = {}), (this.type = 'default');
						const { data: s } = r || {},
							{ profile: a } = s?.profile || {};
						if (a?.tag) {
							if (!a.display.template) throw new Error(`Recommendation Profile Store found a profile without a set template: ${a.tag}`);
							(this.tag = a.tag),
								(this.placement = a.placement),
								(this.display = a.display),
								(this.type = a.isBundle ? 'bundle' : 'default'),
								(0, n.Gn)(this, { tag: n.sH, placement: n.sH, display: n.sH, type: n.sH });
						}
					}
				}
				var S = i('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class c extends y.K {
					constructor(r, s) {
						if (
							(super(r),
							(this.loaded = !1),
							(this.profile = {}),
							(this.results = []),
							typeof s != 'object' || typeof s.urlManager?.subscribe != 'function')
						)
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = s), (0, n.Gn)(this, { profile: n.sH, results: n.sH });
					}
					reset() {
						(this.error = void 0), (this.loaded = !1), (this.profile = {}), (this.results = []);
					}
					update(r) {
						const { meta: s, profile: a, results: h } = r || {};
						(this.error = void 0),
							(this.meta = new S.l({ data: { meta: s } })),
							(this.profile = new w({ data: { profile: { profile: a } } })),
							this.profile.type == 'bundle' &&
								((this.config.settings = g()(this.config.settings || {}, { variants: { autoSelect: !0 } })), (this.cart = new k())),
							(this.results = new I.vP({
								config: this.config,
								state: { loaded: this.loaded },
								data: { search: { results: h, tracking: { responseId: r.responseId } }, meta: this.meta.data },
							})),
							(this.loaded = !!a);
					}
				}
			},
		},
	]);
})();
