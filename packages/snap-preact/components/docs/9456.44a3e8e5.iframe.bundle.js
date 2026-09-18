'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9456],
		{
			'../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'(w, u, o) {
				o.d(u, { c: () => y });
				var i = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/mergeControllerConfig.js'),
					p = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					f = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					g = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js'),
					v = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinProductLink.js');
				const b = { id: 'recommend', beacon: { enabled: !0 }, tag: '', batched: !0, realtime: !1, globals: {} };
				class y extends f.r {
					constructor(a, m, l) {
						if (
							(super(a, m, l),
							(this.type = g.k.recommendation),
							(this.beaconType = 'recommendations'),
							(this.events = {}),
							(this.track = {
								product: {
									clickThrough: (e, t, s) => {
										if (!t) {
											this.log.warn('No result provided to track.product.clickThrough');
											return;
										}
										const r = t.responseId;
										if (!this.events[r]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (this.events[r]?.product[t.id]?.productClickThrough) return;
										const n = ['product', 'banner'].includes(t.type) ? t.type : 'product',
											c = {
												type: n,
												uid: t.id ? '' + t.id : '',
												...(n === 'product'
													? {
															parentId: t.mappings.core?.parentId ? '' + t.mappings.core?.parentId : '',
															sku: t.mappings.core?.sku ? '' + t.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											d = { tag: this.store.profile.tag, responseId: r, results: [c], ...(s?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: t, trackEvent: d }),
											this.config.beacon?.enabled &&
												this.tracker.events[this.beaconType].clickThrough({ data: d, siteId: this.config.globals?.siteId }),
											(this.events[r].product[t.id] = this.events[r].product[t.id] || {}),
											(this.events[r].product[t.id].productClickThrough = !0);
									},
									click: (e, t, s) => {
										if (!t) {
											this.log.warn('No result provided to track.product.click');
											return;
										}
										const r = t.responseId;
										if (!this.events[r]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (t.type === 'banner') {
											if (this.events[r]?.product[t.id]?.inlineBannerClickThrough) return;
											this.track.product.clickThrough(e, t, s),
												(this.events[r].product[t.id] = this.events[r].product[t.id] || {}),
												(this.events[r].product[t.id].inlineBannerClickThrough = !0),
												setTimeout(() => {
													this.events[r].product[t.id].inlineBannerClickThrough = !1;
												}, 1e3);
										} else if ((0, v.b)(e, t)) {
											if (this.events?.[r]?.product[t.id]?.productClickThrough) return;
											this.track.product.clickThrough(e, t, s),
												(this.events[r].product[t.id] = this.events[r].product[t.id] || {}),
												(this.events[r].product[t.id].productClickThrough = !0),
												setTimeout(() => {
													this.events[r].product[t.id].productClickThrough = !1;
												}, 1e3);
										}
									},
									impression: (e, t) => {
										if (!e) {
											this.log.warn('No result provided to track.product.impression');
											return;
										}
										const s = e.responseId,
											r = t?.quickView ? 'quickviewImpression' : 'impression';
										if (this.events[s]) {
											if (this.events[s]?.product[e.id]?.[r]) return;
										} else {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const n = ['product', 'banner'].includes(e.type) ? e.type : 'product',
											c = {
												type: n,
												uid: e.id ? '' + e.id : '',
												...(n === 'product'
													? {
															parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
															sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											d = { tag: this.store.profile.tag, responseId: s, results: [c], banners: [], ...(t?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: d }),
											this.config.beacon?.enabled &&
												this.tracker.events[this.beaconType].impression({ data: d, siteId: this.config.globals?.siteId }),
											(this.events[s].product[e.id] = this.events[s].product[e.id] || {}),
											(this.events[s].product[e.id][r] = !0);
									},
									addToCart: (e, t) => {
										if (!e) {
											this.log.warn('No result provided to track.product.addToCart');
											return;
										}
										const s = e.responseId;
										if (!this.events[s]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const r = {
												parentId: e.display.mappings.core?.parentId ? '' + e.display.mappings.core?.parentId : '',
												uid: e.display.mappings.core?.uid || e.display.id,
												sku: e.display.mappings.core?.sku,
												qty: e.quantity || 1,
												price: Number(e.display.mappings.core?.price) || 0,
											},
											n = { responseId: s, tag: this.store.profile.tag, results: [r], ...(t?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: n }),
											this.config.beacon?.enabled && this.tracker.events[this.beaconType].addToCart({ data: n, siteId: this.config.globals?.siteId });
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
									} catch (h) {
										if (h?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), h);
									}
									const t = this.profiler.create({ type: 'event', name: 'search', context: e }).start(),
										{ meta: s, profile: r, results: n, responseId: c } = await this.client.recommend(e);
									t.stop(), this.log.profile(t), (this.events[c] = this.events[c] || { product: {} });
									const d = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: s, profile: r, results: n } });
									} catch (h) {
										if (h?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), d.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), h);
									}
									d.stop(),
										this.log.profile(d),
										this.store.update({ meta: s, profile: r, results: n, responseId: c }),
										(this.beaconType = this.store.profile.type === 'bundle' ? 'bundles' : 'recommendations');
									const E = { responseId: c, tag: this.store.profile.tag };
									this.config.beacon?.enabled && this.tracker.events[this.beaconType].render({ data: E, siteId: this.config.globals?.siteId });
									const k = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
									try {
										await this.eventManager.fire('afterStore', {
											controller: this,
											request: e,
											response: { meta: s, profile: r, results: n, responseId: c },
										});
									} catch (h) {
										if (h?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), k.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), h);
									}
									k.stop(), this.log.profile(k);
								} catch (e) {
									if (e)
										if (e.err && e.fetchDetails) {
											switch (e.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: p.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: p.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: p.B.ERROR, message: e.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
										} else
											(this.store.error = { type: p.B.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.addToCart = async (e, t) => {
								const s = typeof e?.slice == 'function' ? e.slice() : [e];
								if (!e || s.length === 0) {
									this.log.warn('No products provided to recommendation controller.addToCart');
									return;
								}
								s.forEach((r) => {
									this.track.product.addToCart(r, t);
								}),
									s.length > 0 && (await this.eventManager.fire('addToCart', { controller: this, products: s }));
							}),
							!a.tag)
						)
							throw new Error('Invalid config passed to RecommendationController. The "tag" attribute is required.');
						a.settings?.searchOnPageShow !== !1 &&
							window.addEventListener('pageshow', (e) => {
								e.persisted && !this.store.error && this.store.loaded && !this.store.loading && this.search();
							}),
							(this.config = (0, i.N)(b, this.config)),
							this.store.setConfig(this.config),
							this.use(this.config);
					}
					get params() {
						const a = {
								tag: this.config.tag,
								batched: this.config.batched,
								branch: this.config.branch || 'production',
								batchId: this.config.batchId,
								...this.config.globals,
							},
							{ shopperId: m } = this.tracker.getContext();
						if ((m && (a.shopper = m), !a.siteId || a.siteId == this.tracker.getGlobals().siteId)) {
							const l = this.tracker.cookies.cart.get(),
								e = this.tracker.cookies.viewed.get();
							l?.length && (a.cart = l), e?.length && (a.lastViewed = e);
						}
						return a;
					}
				}
			},
			'../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'(w, u, o) {
				o.d(u, { t: () => m });
				var i = o('../../node_modules/mobx/dist/mobx.esm.js'),
					p = o('../../node_modules/deepmerge/dist/cjs.js'),
					f = o.n(p),
					g = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					v = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
					b = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js');
				class y {
					constructor() {
						(this.items = []), (0, i.Gn)(this, { items: i.sH, price: i.EW, count: i.EW, msrp: i.EW }), (this.eventManager = new b.E());
					}
					on(e, ...t) {
						this.eventManager.on(e, ...t);
					}
					get count() {
						let e = 0;
						return (
							this.items.forEach((t) => {
								e += t.quantity;
							}),
							e
						);
					}
					get price() {
						let e = 0;
						return (
							this.items.forEach((t) => {
								e = (e * 100 + +(+((t.display.mappings.core?.price || 0) * 100) * t.quantity)) / 100 || 0;
							}),
							e
						);
					}
					get msrp() {
						let e = 0;
						return (
							this.items.forEach((t) => {
								e =
									(e * 100 + +((+((t.display.mappings.core?.msrp || 0) * 100) || +((t.display.mappings.core?.price || 0) * 100) || 0) * t.quantity)) /
										100 || 0;
							}),
							e
						);
					}
					addItems(e) {
						e.forEach((t) => {
							this.items.findIndex((r) => r.id == t.id) == -1 && this.items.push(t);
						}),
							this.eventManager.fire('addItems', { cart: this, items: e });
					}
					removeItems(e) {
						const t = [...this.items];
						e.forEach((s) => {
							const r = t.findIndex((n) => n.id == s.id);
							r > -1 && (t.splice(r, 1), t.length == 0 && this.eventManager.fire('emptied', { cart: this }));
						}),
							(this.items = t),
							this.eventManager.fire('removeItems', { cart: this, items: e });
					}
					reset() {
						(this.items = []), this.eventManager.fire('reset', { cart: this });
					}
				}
				class I {
					constructor(e) {
						(this.display = {}), (this.type = 'default');
						const { data: t } = e || {},
							{ profile: s } = t?.profile || {};
						if (s?.tag) {
							if (!s.display.template) throw new Error(`Recommendation Profile Store found a profile without a set template: ${s.tag}`);
							(this.tag = s.tag),
								(this.placement = s.placement),
								(this.display = s.display),
								(this.type = s.isBundle ? 'bundle' : 'default'),
								(0, i.Gn)(this, { tag: i.sH, placement: i.sH, display: i.sH, type: i.sH });
						}
					}
				}
				var a = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class m extends g.K {
					constructor(e, t) {
						if (
							(super(e),
							(this.loaded = !1),
							(this.profile = {}),
							(this.results = []),
							typeof t != 'object' || typeof t.urlManager?.subscribe != 'function')
						)
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = t), (0, i.Gn)(this, { profile: i.sH, results: i.sH });
					}
					reset() {
						(this.error = void 0), (this.loaded = !1), (this.profile = {}), (this.results = []);
					}
					update(e) {
						const { meta: t, profile: s, results: r } = e || {};
						(this.error = void 0),
							(this.meta = new a.l({ data: { meta: t } })),
							(this.profile = new I({ data: { profile: { profile: s } } })),
							this.profile.type == 'bundle' &&
								((this.config.settings = f()(this.config.settings || {}, { variants: { autoSelect: !0 } })), (this.cart = new y())),
							(this.results = new v.vP({
								config: this.config,
								state: { loaded: this.loaded },
								data: { search: { results: r, tracking: { responseId: e.responseId } }, meta: this.meta.data },
							})),
							(this.loaded = !!s);
					}
				}
			},
		},
	]);
})();
