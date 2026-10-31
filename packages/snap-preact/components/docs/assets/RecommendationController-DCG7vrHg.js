import {
	au as m,
	E as w,
	av as u,
	aw as p,
	ax as y,
	ay as b,
	n as I,
	az as T,
	aA as C,
	aB as S,
	aC as v,
	aD as E,
	B as l,
	aE as q,
} from './iframe-Bc4KSH0T.js';
class M {
	constructor() {
		(this.items = []), m(this, { items: p, price: u, count: u, msrp: u }), (this.eventManager = new w());
	}
	on(r, ...i) {
		this.eventManager.on(r, ...i);
	}
	get count() {
		let r = 0;
		return (
			this.items.forEach((i) => {
				r += i.quantity;
			}),
			r
		);
	}
	get price() {
		let r = 0;
		return (
			this.items.forEach((i) => {
				r = (r * 100 + +(+((i.display.mappings.core?.price || 0) * 100) * i.quantity)) / 100 || 0;
			}),
			r
		);
	}
	get msrp() {
		let r = 0;
		return (
			this.items.forEach((i) => {
				r =
					(r * 100 + +((+((i.display.mappings.core?.msrp || 0) * 100) || +((i.display.mappings.core?.price || 0) * 100) || 0) * i.quantity)) / 100 ||
					0;
			}),
			r
		);
	}
	addItems(r) {
		r.forEach((i) => {
			this.items.findIndex((e) => e.id == i.id) == -1 && this.items.push(i);
		}),
			this.eventManager.fire('addItems', { cart: this, items: r });
	}
	removeItems(r) {
		const i = [...this.items];
		r.forEach((a) => {
			const e = i.findIndex((t) => t.id == a.id);
			e > -1 && (i.splice(e, 1), i.length == 0 && this.eventManager.fire('emptied', { cart: this }));
		}),
			(this.items = i),
			this.eventManager.fire('removeItems', { cart: this, items: r });
	}
	reset() {
		(this.items = []), this.eventManager.fire('reset', { cart: this });
	}
}
class R {
	constructor(r) {
		(this.display = {}), (this.type = 'default');
		const { data: i } = r || {},
			{ profile: a } = i?.profile || {};
		if (a?.tag) {
			if (!a.display.template) throw new Error(`Recommendation Profile Store found a profile without a set template: ${a.tag}`);
			(this.tag = a.tag),
				(this.placement = a.placement),
				(this.display = a.display),
				(this.type = a.isBundle ? 'bundle' : 'default'),
				m(this, { tag: p, placement: p, display: p, type: p });
		}
	}
}
class P extends y {
	constructor(r, i) {
		if (
			(super(r), (this.loaded = !1), (this.profile = {}), (this.results = []), typeof i != 'object' || typeof i.urlManager?.subscribe != 'function')
		)
			throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
		(this.services = i), m(this, { profile: p, results: p });
	}
	reset() {
		(this.error = void 0), (this.loaded = !1), (this.profile = {}), (this.results = []);
	}
	update(r) {
		const { meta: i, profile: a, results: e } = r || {};
		(this.error = void 0),
			(this.meta = new b({ data: { meta: i } })),
			(this.profile = new R({ data: { profile: { profile: a } } })),
			this.profile.type == 'bundle' &&
				((this.config.settings = I(this.config.settings || {}, { variants: { autoSelect: !0 } })), (this.cart = new M())),
			(this.results = new T({
				config: this.config,
				state: { loaded: this.loaded },
				data: { search: { results: e, tracking: { responseId: r.responseId } }, meta: this.meta.data },
			})),
			(this.loaded = !!a);
	}
}
const x = { id: 'recommend', beacon: { enabled: !0 }, tag: '', batched: !0, realtime: !1, globals: {} };
class V extends C {
	constructor(r, i, a) {
		if (
			(super(r, i, a),
			(this.type = S.recommendation),
			(this.beaconType = 'recommendations'),
			(this.events = {}),
			(this.track = {
				product: {
					clickThrough: (e, t, o) => {
						if (!t) {
							this.log.warn('No result provided to track.product.clickThrough');
							return;
						}
						const s = t.responseId;
						if (!this.events[s]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						if (this.events[s]?.product[t.id]?.productClickThrough) return;
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
							d = { tag: this.store.profile.tag, responseId: s, results: [c], ...(o?.quickView ? { quickView: !0 } : {}) };
						this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: t, trackEvent: d }),
							this.config.beacon?.enabled && this.tracker.events[this.beaconType].clickThrough({ data: d, siteId: this.config.globals?.siteId }),
							(this.events[s].product[t.id] = this.events[s].product[t.id] || {}),
							(this.events[s].product[t.id].productClickThrough = !0);
					},
					click: (e, t, o) => {
						if (!t) {
							this.log.warn('No result provided to track.product.click');
							return;
						}
						const s = t.responseId;
						if (!this.events[s]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						if (t.type === 'banner') {
							if (this.events[s]?.product[t.id]?.inlineBannerClickThrough) return;
							this.track.product.clickThrough(e, t, o),
								(this.events[s].product[t.id] = this.events[s].product[t.id] || {}),
								(this.events[s].product[t.id].inlineBannerClickThrough = !0),
								setTimeout(() => {
									this.events[s].product[t.id].inlineBannerClickThrough = !1;
								}, v);
						} else if (E(e, t)) {
							if (this.events?.[s]?.product[t.id]?.productClickThrough) return;
							this.track.product.clickThrough(e, t, o),
								(this.events[s].product[t.id] = this.events[s].product[t.id] || {}),
								(this.events[s].product[t.id].productClickThrough = !0),
								setTimeout(() => {
									this.events[s].product[t.id].productClickThrough = !1;
								}, v);
						}
					},
					impression: (e, t) => {
						if (!e) {
							this.log.warn('No result provided to track.product.impression');
							return;
						}
						const o = e.responseId,
							s = t?.quickView ? 'quickviewImpression' : 'impression';
						if (this.events[o]) {
							if (this.events[o]?.product[e.id]?.[s]) return;
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
							d = { tag: this.store.profile.tag, responseId: o, results: [c], banners: [], ...(t?.quickView ? { quickView: !0 } : {}) };
						this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: d }),
							this.config.beacon?.enabled && this.tracker.events[this.beaconType].impression({ data: d, siteId: this.config.globals?.siteId }),
							(this.events[o].product[e.id] = this.events[o].product[e.id] || {}),
							(this.events[o].product[e.id][s] = !0);
					},
					addToCart: (e, t) => {
						if (!e) {
							this.log.warn('No result provided to track.product.addToCart');
							return;
						}
						const o = e.responseId;
						if (!this.events[o]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						const s = {
								parentId: e.display.mappings.core?.parentId ? '' + e.display.mappings.core?.parentId : '',
								uid: e.display.mappings.core?.uid || e.display.id,
								sku: e.display.mappings.core?.sku,
								qty: e.quantity || 1,
								price: Number(e.display.mappings.core?.price) || 0,
							},
							n = { responseId: o, tag: this.store.profile.tag, results: [s], ...(t?.quickView ? { quickView: !0 } : {}) };
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
						{ meta: o, profile: s, results: n, responseId: c } = await this.client.recommend(e);
					t.stop(), this.log.profile(t), (this.events[c] = this.events[c] || { product: {} });
					const d = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
					try {
						await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: o, profile: s, results: n } });
					} catch (h) {
						if (h?.message == 'cancelled') {
							this.log.warn("'afterSearch' middleware cancelled"), d.stop();
							return;
						} else throw (this.log.error("error in 'afterSearch' middleware"), h);
					}
					d.stop(),
						this.log.profile(d),
						this.store.update({ meta: o, profile: s, results: n, responseId: c }),
						(this.beaconType = this.store.profile.type === 'bundle' ? 'bundles' : 'recommendations');
					const k = { responseId: c, tag: this.store.profile.tag };
					this.config.beacon?.enabled && this.tracker.events[this.beaconType].render({ data: k, siteId: this.config.globals?.siteId });
					const g = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
					try {
						await this.eventManager.fire('afterStore', {
							controller: this,
							request: e,
							response: { meta: o, profile: s, results: n, responseId: c },
						});
					} catch (h) {
						if (h?.message == 'cancelled') {
							this.log.warn("'afterStore' middleware cancelled"), g.stop();
							return;
						} else throw (this.log.error("error in 'afterStore' middleware"), h);
					}
					g.stop(), this.log.profile(g);
				} catch (e) {
					if (e)
						if (e.err && e.fetchDetails) {
							switch (e.fetchDetails.status) {
								case 429: {
									this.store.error = { code: 429, type: l.WARNING, message: 'Too many requests try again later' };
									break;
								}
								case 500: {
									this.store.error = { code: 500, type: l.ERROR, message: 'Invalid Search Request or Service Unavailable' };
									break;
								}
								default: {
									this.store.error = { type: l.ERROR, message: e.err.message };
									break;
								}
							}
							this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
						} else (this.store.error = { type: l.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
				} finally {
					this.store.loading = !1;
				}
			}),
			(this.addToCart = async (e, t) => {
				const o = typeof e?.slice == 'function' ? e.slice() : [e];
				if (!e || o.length === 0) {
					this.log.warn('No products provided to recommendation controller.addToCart');
					return;
				}
				o.forEach((s) => {
					this.track.product.addToCart(s, t);
				}),
					o.length > 0 && (await this.eventManager.fire('addToCart', { controller: this, products: o }));
			}),
			!r.tag)
		)
			throw new Error('Invalid config passed to RecommendationController. The "tag" attribute is required.');
		r.settings?.searchOnPageShow !== !1 &&
			window.addEventListener('pageshow', (e) => {
				e.persisted && !this.store.error && this.store.loaded && !this.store.loading && this.search();
			}),
			(this.config = q(x, this.config)),
			this.store.setConfig(this.config),
			this.use(this.config);
	}
	get params() {
		const r = {
				tag: this.config.tag,
				batched: this.config.batched,
				branch: this.config.branch || 'production',
				batchId: this.config.batchId,
				...this.config.globals,
			},
			{ shopperId: i } = this.tracker.getContext();
		if ((i && (r.shopper = i), !r.siteId || r.siteId == this.tracker.getGlobals().siteId)) {
			const e = this.tracker.cookies.cart.get(),
				t = this.tracker.cookies.viewed.get();
			e?.length && (r.cart = e), t?.length && (r.lastViewed = t);
		}
		const a = this.tracker.cookies.searched.get(r.siteId);
		return a?.length && (r.lastSearches = a), r;
	}
}
export { V as R, P as a };
