import {
	b2 as N,
	au as m,
	aw as h,
	b3 as L,
	ax as F,
	aF as C,
	b4 as P,
	ay as z,
	b5 as Q,
	b6 as x,
	az as O,
	aG as U,
	b7 as D,
	aA as j,
	aB as B,
	b8 as E,
	aC as y,
	aD as K,
	B as b,
	aE as V,
	n as H,
	aH as _,
} from './iframe-CXSVAHru.js';
class $ extends Array {
	static get [Symbol.species]() {
		return Array;
	}
	constructor(i) {
		const { services: s, state: o } = i || {},
			e = new N({ ...i, services: { ...s, urlManager: s.urlManager.remove('filter') } });
		e.forEach((t) => {
			t.values?.forEach((r) => {
				r.preview = () => {
					e.map((n) => {
						(n.filtered = !1),
							n.values?.map((a) => {
								a.filtered = !1;
							});
					}),
						(t.filtered = !0),
						(r.filtered = !0),
						o?.autocomplete.locks.facets.lock(),
						r.url.go();
				};
			});
		}),
			super(...e);
	}
}
class Y {
	constructor(i) {
		const { services: s, data: o } = i || {},
			{ search: e, autocomplete: t } = o?.autocomplete || {},
			r = {};
		e?.query && ((this.query = new S(s.urlManager, e.query)), (r.query = h)),
			t?.correctedQuery && ((this.correctedQuery = new S(s.urlManager, t.correctedQuery)), (r.correctedQuery = h)),
			e?.subject && ((this.subject = new S(s.urlManager, e.subject)), (r.subject = h)),
			(this.matchType = e?.matchType),
			(r.matchType = h),
			m(this, r);
	}
}
class S {
	constructor(i, s) {
		(this.string = s), (this.url = i.set({ query: this.string })), m(this, { string: h });
	}
}
class G {
	constructor(i) {
		(this.focusedInput = void 0), (this.input = void 0), (this.source = 'input');
		const { services: s } = i || {};
		(this.locks = { terms: new M(!1), facets: new M(!1) }), (this.url = s.urlManager), m(this, { focusedInput: h, locks: h, input: h, reset: L });
	}
	reset() {
		(this.input = void 0), this.locks.terms.reset(), this.locks.facets.reset();
	}
}
class M {
	constructor(i = !1) {
		this.state = this.startState = i;
	}
	reset() {
		this.state = this.startState;
	}
	get locked() {
		return this.state;
	}
	lock() {
		this.state = !0;
	}
	unlock() {
		this.state = !1;
	}
}
class W extends Array {
	static get [Symbol.species]() {
		return Array;
	}
	constructor(i) {
		const { data: s } = i || {},
			{ autocomplete: o, search: e } = s?.autocomplete || {},
			t = [...(o?.alternatives ? o.alternatives : []).map((n) => n.text)];
		o?.correctedQuery && e?.query && o.correctedQuery.toLowerCase() != e.query.toLowerCase() && t.unshift(o.correctedQuery),
			e?.query && t.unshift(e.query);
		const r = [];
		t.map((n, a) =>
			r.push(new T({ ...i, data: { term: { active: a === 0, value: n }, terms: r }, functions: i.functions, state: i.state, type: 'suggested' }))
		),
			super(...r);
	}
}
class T {
	constructor(i) {
		const { services: s, functions: o, state: e, data: t, type: r } = i || {},
			{ term: n, terms: a } = t || {};
		(this.active = n?.active),
			(this.value = n?.value),
			(this.type = r),
			(this.url = s?.urlManager?.set({ query: this.value })),
			(this.preview = () => {
				o.resetTerms(),
					a.map((l) => {
						l.active = !1;
					}),
					(e.rootState.source = r),
					(this.active = !0),
					e.rootState.locks.terms.lock(),
					e.rootState.locks.facets.unlock(),
					this.url?.set({ query: this.value }).go();
			}),
			m(this, { active: h, value: h });
	}
}
class J extends Array {
	static get [Symbol.species]() {
		return Array;
	}
	constructor(i) {
		const s = [],
			{ data: o } = i || {},
			{ trending: e } = o?.trending || {};
		e?.queries?.map((t) => {
			s.push(
				new T({ ...i, data: { term: { active: !1, value: t.searchQuery }, terms: s }, functions: i.functions, state: i.state, type: 'popular' })
			);
		}),
			super(...s);
	}
}
class X extends Array {
	static get [Symbol.species]() {
		return Array;
	}
	constructor(i) {
		const { data: s } = i || {},
			{ queries: o } = s || {},
			e = [];
		o?.map((t) => {
			e.push(new T({ ...i, data: { term: { active: !1, value: t }, terms: e }, functions: i.functions, state: i.state, type: 'historical' }));
		}),
			super(...e);
	}
}
class oe extends F {
	constructor(i, s) {
		if ((super(i), typeof s != 'object' || typeof s.urlManager?.subscribe != 'function'))
			throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
		(this.services = s),
			(this.state = new G({ services: this.services })),
			(this.storage = new C()),
			(this.trending = []),
			(this.history = []),
			this.initHistory(),
			this.reset(),
			m(this, {
				state: h,
				search: h,
				terms: h,
				facets: h,
				filters: h,
				merchandising: h,
				results: h,
				pagination: h,
				sorting: h,
				history: h,
				trending: h,
			});
	}
	get hasQuery() {
		return !!((this.state.input && this.loaded) || this.search.query?.string);
	}
	reset() {
		this.state.reset(), this.update(), this.resetTerms();
	}
	initHistory() {
		const i = this.config.settings?.history?.limit;
		if (i && this.config.settings?.history?.enabled !== !1) {
			const s = new P({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
			this.history = new X({
				services: this.services,
				functions: {
					resetTerms: () => {
						this.resetTerms();
					},
				},
				state: { rootState: this.state },
				data: { queries: s.getStoredData(i) },
			});
		} else this.history = [];
	}
	resetTerms() {
		this.resetSuggestions(), this.resetTrending(), this.resetHistory();
	}
	resetSuggestions() {
		this.terms?.forEach((i) => (i.active = !1));
	}
	resetTrending() {
		this.trending?.forEach((i) => (i.active = !1));
	}
	resetHistory() {
		this.history?.forEach((i) => (i.active = !1));
	}
	setService(i, s) {
		this.services[i] &&
			s &&
			((this.services[i] = s),
			i === 'urlManager' &&
				((this.state.url = s),
				this.history?.forEach((o) => {
					o.url = s.set({ query: o.value });
				})));
	}
	updateTrendingTerms(i) {
		this.trending = new J({
			services: this.services,
			functions: {
				resetTerms: () => {
					this.resetTerms();
				},
			},
			state: { rootState: this.state },
			data: { trending: i },
		});
	}
	update(i) {
		const { meta: s, search: o } = i || {};
		(this.meta = new z({ data: { meta: s } })),
			o?.search && (this.state.url = this.services.urlManager = this.services.urlManager.set('query', o.search.query)),
			this.state.locks.terms.locked ||
				((this.terms = new W({
					config: this.config,
					services: this.services,
					functions: {
						resetTerms: () => {
							this.resetTerms();
						},
					},
					state: { rootState: this.state },
					data: { autocomplete: o },
				})),
				o?.autocomplete && this.state.locks.terms.lock()),
			(this.merchandising = new Q({ data: { search: o } })),
			(this.search = new Y({ config: this.config, services: this.services, data: { autocomplete: o } })),
			this.state.locks.facets.locked ||
				(this.facets = new $({
					config: this.config,
					services: this.services,
					stores: { storage: this.storage },
					state: { autocomplete: this.state },
					data: { search: o, meta: this.meta.data },
				})),
			(this.filters = new x({ config: this.config, services: this.services, data: { search: o, meta: this.meta.data } })),
			(this.results = new O({ config: this.config, state: { loaded: this.loaded }, data: { search: o, meta: this.meta.data } })),
			((this.results.length === 0 && !this.trending.filter((e) => e.active).length) || this.terms?.filter((e) => e.active).length) &&
				this.resetTrending(),
			(this.pagination = new U({ services: this.services, data: { search: o, meta: this.meta.data } })),
			(this.sorting = new D({ services: this.services, data: { search: o, meta: this.meta.data } })),
			(this.error = void 0),
			(this.loaded = !!o?.pagination);
	}
}
const k = 'ss-autocomplete-input',
	p = 200,
	Z = 13,
	ee = 27,
	q = 'fallbackQuery',
	te = {
		id: 'autocomplete',
		selector: '',
		action: '',
		globals: {},
		beacon: { enabled: !0 },
		settings: {
			initializeFromUrl: !0,
			syncInputs: !0,
			serializeForm: !1,
			facets: { trim: !0, pinFiltered: !0 },
			redirects: { merchandising: !0, singleResult: !1 },
			bind: { input: !0, submit: !0 },
		},
	};
class ae extends j {
	constructor(i, s, o) {
		super(i, s, o),
			(this.type = B.autocomplete),
			(this.events = {}),
			(this.track = {
				banner: {
					impression: (e) => {
						if (!e) {
							this.log.warn('No banner provided to track.banner.impression');
							return;
						}
						const { responseId: t, uid: r } = e;
						if (this.events[t]) {
							if (this.events?.[t]?.banner?.[r]?.impression) return;
						} else {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						const a = { responseId: t, banners: [{ uid: r }], results: [] };
						this.eventManager.fire('track.banner.impression', { controller: this, product: { uid: r }, trackEvent: a }),
							this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: a, siteId: this.config.globals?.siteId }),
							(this.events[t].banner[r] = this.events[t].banner[r] || {}),
							(this.events[t].banner[r].impression = !0);
					},
					click: (e, t) => {
						if (!t) {
							this.log.warn('No banner provided to track.banner.click');
							return;
						}
						const { responseId: r, uid: n } = t;
						if (!this.events[r]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						if (E(e)) {
							if (this.events?.[r]?.banner[n]?.clickThrough) return;
							this.track.banner.clickThrough(e, t),
								(this.events[r].banner[n] = this.events[r].banner[n] || {}),
								(this.events[r].banner[n].clickThrough = !0),
								setTimeout(() => {
									this.events[r].banner[n].clickThrough = !1;
								}, y);
						}
					},
					clickThrough: (e, { uid: t, responseId: r }) => {
						if (!t) {
							this.log.warn('No banner uid provided to track.banner.clickThrough');
							return;
						}
						if (!this.events[r]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						const a = { responseId: r, banners: [{ uid: t }] };
						this.eventManager.fire('track.banner.clickThrough', { controller: this, event: e, product: { uid: t }, trackEvent: a }),
							this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: a, siteId: this.config.globals?.siteId }),
							(this.events[r].banner[t] = this.events[r].banner[t] || {}),
							(this.events[r].banner[t].clickThrough = !0),
							setTimeout(() => {
								this.events[r].banner[t].clickThrough = !1;
							}, y);
					},
				},
				product: {
					clickThrough: (e, t, r) => {
						if (!t) {
							this.log.warn('No result provided to track.product.clickThrough');
							return;
						}
						const n = t.responseId;
						if (!this.events[n]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						const a = ['product', 'banner'].includes(t.type) ? t.type : 'product',
							l = {
								type: a,
								uid: t.id ? '' + t.id : '',
								...(a === 'product'
									? {
											parentId: t.mappings.core?.parentId ? '' + t.mappings.core?.parentId : '',
											sku: t.mappings.core?.sku ? '' + t.mappings.core?.sku : void 0,
									  }
									: {}),
							},
							d = { responseId: n, results: [l], ...(r?.quickView ? { quickView: !0 } : {}) };
						this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: t, trackEvent: d }),
							this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: d, siteId: this.config.globals?.siteId });
					},
					click: (e, t, r) => {
						if (!t) {
							this.log.warn('No result provided to track.product.click');
							return;
						}
						const n = t.responseId;
						if (!this.events[n]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						if (t.type === 'banner' && E(e)) {
							if (this.events?.[n]?.product[t.id]?.inlineBannerClickThrough) return;
							this.track.product.clickThrough(e, t, r),
								(this.events[n].product[t.id] = this.events[n].product[t.id] || {}),
								(this.events[n].product[t.id].inlineBannerClickThrough = !0),
								setTimeout(() => {
									this.events[n].product[t.id].inlineBannerClickThrough = !1;
								}, y);
						} else if (K(e, t)) {
							if (this.events?.[n]?.product[t.id]?.productClickThrough) return;
							this.track.product.clickThrough(e, t, r),
								(this.events[n].product[t.id] = this.events[n].product[t.id] || {}),
								(this.events[n].product[t.id].productClickThrough = !0),
								setTimeout(() => {
									this.events[n].product[t.id].productClickThrough = !1;
								}, y);
						}
					},
					impression: (e, t) => {
						if (!e) {
							this.log.warn('No result provided to track.product.impression');
							return;
						}
						const r = e.responseId,
							n = t?.quickView ? 'quickviewImpression' : 'impression';
						if (this.events[r]) {
							if (this.events?.[r]?.product[e.id]?.[n]) return;
						} else {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						const a = ['product', 'banner'].includes(e.type) ? e.type : 'product',
							l = {
								type: a,
								uid: e.id ? '' + e.id : '',
								...(a === 'product'
									? {
											parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
											sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
									  }
									: {}),
							},
							d = { responseId: r, results: [l], banners: [], ...(t?.quickView ? { quickView: !0 } : {}) };
						this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: d }),
							this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: d, siteId: this.config.globals?.siteId }),
							(this.events[r].product[e.id] = this.events[r].product[e.id] || {}),
							(this.events[r].product[e.id][n] = !0);
					},
					addToCart: (e, t) => {
						if (!e) {
							this.log.warn('No result provided to track.product.addToCart');
							return;
						}
						const r = e.responseId;
						if (!this.events[r]) {
							this.log.warn('No responseId found in controller, ensure correct controller is used');
							return;
						}
						const n = {
								parentId: e.display.mappings.core?.parentId ? '' + e.display.mappings.core?.parentId : '',
								uid: e.display.mappings.core?.uid || e.display.id,
								sku: e.display.mappings.core?.sku,
								qty: e.quantity || 1,
								price: Number(e.display.mappings.core?.price) || 0,
							},
							a = { responseId: r, results: [n], ...(t?.quickView ? { quickView: !0 } : {}) };
						this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: a }),
							this.config.beacon?.enabled && this.tracker.events.autocomplete.addToCart({ data: a, siteId: this.config.globals?.siteId });
					},
				},
				redirect: ({ redirectURL: e, responseId: t }) => {
					if (!e) {
						this.log.warn('No redirectURL provided to track.redirect');
						return;
					}
					const r = { responseId: t, redirect: e };
					this.eventManager.fire('track.redirect', { controller: this, redirectURL: e, trackEvent: r }),
						this.config.beacon?.enabled && this.tracker.events.autocomplete.redirect({ data: r, siteId: this.config.globals?.siteId });
				},
			}),
			(this.handlers = {
				input: {
					enterKey: async (e) => {
						if (e.keyCode == Z) {
							const t = e.target;
							let r = this.store.services.urlManager;
							for (e.preventDefault(); this.store.loading; ) await w(p);
							this.store.search.correctedQuery && (r = r?.set(q, this.store.search.correctedQuery.string)),
								(r = r?.set('query', t.value)),
								await w(p + 1);
							try {
								await this.eventManager.fire('beforeSubmit', { controller: this, input: t });
							} catch (n) {
								if (n?.message == 'cancelled') {
									this.log.warn("'beforeSubmit' middleware cancelled");
									return;
								} else this.log.error("error in 'beforeSubmit' middleware"), console.error(n);
							}
							window.location.href = r?.href || '';
						}
					},
					escKey: (e) => {
						e.keyCode == ee && (e.target.blur(), this.setFocused());
					},
					focus: (e) => {
						e.stopPropagation(),
							setTimeout(() => {
								this.setFocused(e.target);
							});
					},
					formSubmit: async (e) => {
						const t = e.target,
							r = t.querySelector(`input[${k}]`);
						for (e.preventDefault(); this.store.loading; ) await w(p);
						this.store.search.correctedQuery && se(t, q, this.store.search.correctedQuery.string), await w(p + 1);
						try {
							await this.eventManager.fire('beforeSubmit', { controller: this, input: r });
						} catch (n) {
							if (n?.message == 'cancelled') {
								this.log.warn("'beforeSubmit' middleware cancelled");
								return;
							} else this.log.error("error in 'beforeSubmit' middleware"), console.error(n);
						}
						t.submit();
					},
					formElementChange: (e) => {
						const r = e.target?.form,
							n = r?.querySelector(`input[${k}]`);
						if (r && n && this.config.settings?.serializeForm) {
							const a = A(r, function (l) {
								return l != n;
							});
							this.store.setService('urlManager', this.store.services.urlManager.reset().withGlobals(a)),
								this.store.reset(),
								this.config.settings?.trending?.enabled &&
									this.config.settings?.trending?.limit &&
									this.config.settings?.trending?.limit > 0 &&
									this.searchTrending();
						}
					},
					input: (e) => {
						e.isTrusted && this.store.state.focusedInput !== e.target && this.setFocused(e.target);
						const t = e.target.value;
						if (((!this.store.state.input && !t) || this.store.state.input == t) && this.store.loaded) return;
						(this.store.state.source = 'input'),
							(this.store.state.input = t),
							(this.store.merchandising.redirect = ''),
							this.config?.settings?.syncInputs &&
								document.querySelectorAll(this.config.selector).forEach((l) => {
									l.value = t;
								}),
							clearTimeout(this.handlers.input.timeoutDelay);
						const r = this.store.trending?.length && this.config.settings?.trending?.enabled && this.config.settings?.trending?.showResults,
							n = this.store.history?.length && this.config.settings?.history?.enabled && this.config.settings?.history?.showResults;
						this.handlers.input.timeoutDelay = setTimeout(() => {
							t
								? (this.store.state.locks.terms.unlock(),
								  this.store.state.locks.facets.unlock(),
								  this.urlManager.set({ query: this.store.state.input }).go())
								: (this.store.reset(), r ? this.store.trending[0].preview() : n ? this.store.history[0].preview() : this.urlManager.reset().go());
						}, p);
					},
					timeoutDelay: void 0,
				},
				document: {
					click: (e) => {
						const t = document.querySelectorAll(this.config.selector);
						Array.from(t).includes(e.target) || (e.target?.nodeName == 'FORM' && e.target.querySelectorAll(this.config.selector).length)
							? e.stopPropagation()
							: this.setFocused();
					},
				},
			}),
			(this.searchTrending = async (e) => {
				let t;
				const r = this.storage.get('terms');
				if (r && !e?.limit) t = JSON.parse(r);
				else {
					const n = { limit: e?.limit || this.config.settings?.trending?.limit || 5 },
						a = this.profiler.create({ type: 'event', name: 'trending', context: n }).start();
					(t = await this.client.trending(n)),
						a.stop(),
						this.log.profile(a),
						t?.trending.queries?.length && this.storage.set('terms', JSON.stringify(t));
				}
				this.store.updateTrendingTerms(t);
			}),
			(this.search = async () => {
				try {
					if ((this.initialized || (await this.init()), !this.urlManager.state.query)) return;
					const e = this.params;
					if (!e?.search?.query?.string) return;
					(this.store.loading = !0), (this.store.merchandising.redirect = '');
					try {
						await this.eventManager.fire('beforeSearch', { controller: this, request: e });
					} catch (u) {
						if (u?.message == 'cancelled') {
							this.log.warn("'beforeSearch' middleware cancelled");
							return;
						} else throw (this.log.error("error in 'beforeSearch' middleware"), u);
					}
					const t = this.profiler.create({ type: 'event', name: 'search', context: e }).start(),
						{ meta: r, search: n } = await this.client.autocomplete(e);
					t.stop(), this.log.profile(t);
					const a = n.tracking.responseId;
					this.events[a] = this.events[a] || { product: {}, banner: {} };
					const l = this.store.results[0]?.responseId,
						d = l && l === a;
					if (d) {
						const u = Object.keys(this.events[a].product || {}).filter((v) => this.events[a].product?.[v]?.impression);
						this.events[a] = { product: u.reduce((v, R) => ((v[R] = { impression: !0 }), v), {}), banner: this.events[a].banner };
					} else this.events[a] = { product: {}, banner: {} };
					const g = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
					try {
						await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: r, search: n } });
					} catch (u) {
						if (u?.message == 'cancelled') {
							this.log.warn("'afterSearch' middleware cancelled"), g.stop();
							return;
						} else throw (this.log.error("error in 'afterSearch' middleware"), u);
					}
					if ((g.stop(), this.log.profile(g), this.store.update({ meta: r, search: n }), !d)) {
						const u = { responseId: a };
						this.config.beacon?.enabled && this.tracker.events.autocomplete.render({ data: u, siteId: this.config.globals?.siteId });
					}
					const f = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
					try {
						await this.eventManager.fire('afterStore', { controller: this, request: e, response: { meta: r, search: n } });
					} catch (u) {
						if (u?.message == 'cancelled') {
							this.log.warn("'afterStore' middleware cancelled"), f.stop();
							return;
						} else throw (this.log.error("error in 'afterStore' middleware"), u);
					}
					f.stop(), this.log.profile(f);
				} catch (e) {
					if (e)
						if (e.err && e.fetchDetails) {
							switch (e.fetchDetails.status) {
								case 429: {
									this.store.error = { code: 429, type: b.WARNING, message: 'Too many requests try again later' };
									break;
								}
								case 500: {
									this.store.error = { code: 500, type: b.ERROR, message: 'Invalid Search Request or Service Unavailable' };
									break;
								}
								default: {
									this.store.error = { type: b.ERROR, message: e.err.message };
									break;
								}
							}
							this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
						} else (this.store.error = { type: b.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
				} finally {
					this.store.loading = !1;
				}
			}),
			(this.addToCart = async (e, t) => {
				const r = typeof e?.slice == 'function' ? e.slice() : [e];
				if (!e || r.length === 0) {
					this.log.warn('No products provided to autocomplete controller.addToCart');
					return;
				}
				r.forEach((n) => {
					this.track.product.addToCart(n, t);
				}),
					r.length > 0 && (await this.eventManager.fire('addToCart', { controller: this, products: r }));
			}),
			(this.config = V(te, this.config)),
			this.config.settings?.trending?.limit &&
				typeof this.config.settings?.trending?.enabled > 'u' &&
				(this.config.settings = { ...this.config.settings, trending: { enabled: !0, ...this.config.settings.trending } }),
			this.config.settings?.history?.limit &&
				typeof this.config.settings?.history?.enabled > 'u' &&
				(this.config.settings = { ...this.config.settings, history: { enabled: !0, ...this.config.settings.history } }),
			this.store.setConfig(this.config),
			this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
			(this.storage = new C({ type: 'session', key: `athos-controller-${this.config.id}` })),
			this.eventManager.on('afterSearch', async (e, t) => {
				if ((await t(), e.response.search.autocomplete?.query != e.controller.urlManager.state.query)) return !1;
			}),
			this.eventManager.on('beforeSubmit', async (e, t) => {
				if ((await t(), e.controller.store.loading)) return;
				const n = e.controller.store.state.input,
					a = e.controller.store.merchandising?.redirect;
				if (this.config?.settings?.redirects?.merchandising && n && a)
					return this.track.redirect({ redirectURL: a, responseId: e.controller.store.merchandising?.responseId }), (window.location.href = a), !1;
				if (this.config?.settings?.redirects?.singleResult) {
					const { results: l } = e.controller.store,
						d = l.filter((f) => f.type == 'product'),
						g = d.length === 1 && d[0].mappings.core?.url;
					if (g) return (window.location.href = g), !1;
				}
			}),
			this.use(this.config);
	}
	get params() {
		const i = this.urlManager.state,
			s = H({ ..._(i) }, this.config.globals || {}),
			{ userId: o, sessionId: e, pageLoadId: t, shopperId: r } = this.tracker.getContext();
		if (
			((s.tracking = s.tracking || {}),
			(s.tracking.domain = window.location.href),
			o && (s.tracking.userId = o),
			e && (s.tracking.sessionId = e),
			t && (s.tracking.pageLoadId = t),
			this.store.state.input && ((s.search = s.search || {}), (s.search.input = this.store.state.input)),
			this.store.state.source && ((s.search = s.search || {}), (s.search.source = this.store.state.source)),
			!this.config.globals?.personalization?.disabled)
		) {
			const n = this.tracker.cookies.cart.get();
			n.length && ((s.personalization = s.personalization || {}), (s.personalization.cart = n.join(',')));
			const a = this.tracker.cookies.viewed.get();
			a.length && ((s.personalization = s.personalization || {}), (s.personalization.lastViewed = a.join(','))),
				r && ((s.personalization = s.personalization || {}), (s.personalization.shopper = r));
		}
		return s;
	}
	async setFocused(i) {
		if (this.store.state.focusedInput !== i) {
			this.store.state.focusedInput = i;
			try {
				try {
					await this.eventManager.fire('focusChange', { controller: this });
				} catch (s) {
					if (s?.message == 'cancelled') this.log.warn("'focusChange' middleware cancelled");
					else throw (this.log.error("error in 'focusChange' middleware"), s);
				}
			} catch (s) {
				s && console.error(s);
			}
		}
		i?.dispatchEvent(new Event('input'));
	}
	reset() {
		document.querySelectorAll(this.config.selector).forEach((s) => {
			s.value = '';
		}),
			this.store.reset();
	}
	unbind() {
		document.querySelectorAll(`input[${k}]`)?.forEach((s) => {
			s.removeEventListener('input', this.handlers.input.input),
				s.removeEventListener('keydown', this.handlers.input.enterKey),
				s.removeEventListener('keydown', this.handlers.input.escKey),
				s.removeEventListener('focus', this.handlers.input.focus),
				s.form && (s.form.removeEventListener('submit', this.handlers.input.formSubmit), ie(s.form, this.handlers.input.formElementChange));
		}),
			document.removeEventListener('click', this.handlers.document.click);
	}
	async bind() {
		this.initialized || (await this.init()),
			this.unbind(),
			document.querySelectorAll(this.config.selector).forEach((s) => {
				s.setAttribute('spellcheck', 'false'),
					s.setAttribute('autocomplete', 'off'),
					s.setAttribute('autocorrect', 'off'),
					s.setAttribute('autocapitalize', 'none'),
					s.setAttribute(k, ''),
					this.config.settings?.bind?.input && s.addEventListener('input', this.handlers.input.input),
					this.config?.settings?.initializeFromUrl && !s.value && this.store.state.input && (s.value = this.store.state.input),
					s.addEventListener('focus', this.handlers.input.focus),
					s.addEventListener('keydown', this.handlers.input.escKey);
				const o = s.form;
				let e;
				if (this.config.action)
					this.config.settings?.bind?.submit && s.addEventListener('keydown', this.handlers.input.enterKey), (e = this.config.action);
				else if (o) {
					if (
						(this.config.settings?.bind?.submit && o.addEventListener('submit', this.handlers.input.formSubmit),
						(e = o.action || ''),
						this.config.settings?.serializeForm)
					) {
						re(o, this.handlers.input.formElementChange, function (r) {
							return r != s;
						});
						const t = A(o, function (r) {
							return r != s;
						});
						this.store.setService('urlManager', this.urlManager.reset().withGlobals(t));
					}
				} else
					this.config.settings?.bind?.submit &&
						this.log.warn(
							"Missing form action url! Input element is not inside a <form> and no 'action' URL is configured. Enter key will not submit. Set the 'action' url in the config to enable submission.",
							s
						);
				e &&
					this.store.setService(
						'urlManager',
						this.store.services.urlManager.withConfig((t) => ({ ...t, urlRoot: e }))
					),
					document.activeElement === s && !this.store.loading && this.setFocused(s);
			}),
			this.config.settings?.trending?.enabled &&
				this.config.settings?.trending?.limit &&
				this.config.settings?.trending?.limit > 0 &&
				!this.store.trending?.length &&
				this.searchTrending(),
			this.config.settings?.disableClickOutside || document.addEventListener('click', this.handlers.document.click);
	}
}
function se(c, i, s) {
	const o = document.createElement('input');
	(o.type = 'hidden'), (o.name = i), (o.value = s), c.querySelector(`[type="hidden"][name="${i}"]`)?.remove(), c.append(o);
}
async function w(c) {
	return new Promise((i) => {
		window.setTimeout(i, c);
	});
}
const I = ['file', 'reset', 'submit', 'button', 'image', 'password'];
function A(c, i) {
	const s = {};
	if (typeof c == 'object' && c.nodeName == 'FORM')
		for (let o = c.elements.length - 1; o >= 0; o--) {
			const e = c.elements[o];
			(typeof i == 'function' && !i(e)) ||
				(e.name && !I.includes(e.type) && ((e.type != 'checkbox' && e.type != 'radio') || e.checked) && (s[e.name] = e.value));
		}
	return s;
}
function re(c, i, s) {
	if (typeof c == 'object' && c.nodeName == 'FORM')
		for (let o = c.elements.length - 1; o >= 0; o--) {
			const e = c.elements[o];
			(typeof s == 'function' && !s(e)) || (e.name && !I.includes(e.type) && e.addEventListener('change', i));
		}
}
function ie(c, i) {
	if (typeof c == 'object' && c.nodeName == 'FORM')
		for (let s = c.elements.length - 1; s >= 0; s--) {
			const o = c.elements[s];
			o.name && !I.includes(o.type) && o.removeEventListener('change', i);
		}
}
export { ae as A, oe as a };
