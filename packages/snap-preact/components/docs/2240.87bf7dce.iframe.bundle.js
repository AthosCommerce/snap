'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2240],
		{
			'../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'(z, H, u) {
				u.d(H, { Z: () => _ });
				var l = u('../../node_modules/deepmerge/dist/cjs.js'),
					P = u.n(l),
					N = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Storage/StorageStore.js'),
					S = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					D = u('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					F = u('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/getParams.js'),
					B = u('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js'),
					b = u('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinProductLink.js'),
					R = u('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinBannerLink.js');
				const k = 'ss-autocomplete-input',
					y = 200,
					q = 13,
					I = 27,
					L = 'fallbackQuery',
					U = {
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
				class _ extends D.r {
					constructor(o, { client: t, store: n, urlManager: a, eventManager: d, profiler: g, logger: v, tracker: T }, W) {
						super(o, { client: t, store: n, urlManager: a, eventManager: d, profiler: g, logger: v, tracker: T }, W),
							(this.type = B.k.autocomplete),
							(this.events = {}),
							(this.track = {
								banner: {
									impression: (e) => {
										if (!e) {
											this.log.warn('No banner provided to track.banner.impression');
											return;
										}
										const { responseId: s, uid: i } = e;
										if (this.events[s]) {
											if (this.events?.[s]?.banner?.[i]?.impression) return;
										} else {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const h = { responseId: s, banners: [{ uid: i }], results: [] };
										this.eventManager.fire('track.banner.impression', { controller: this, product: { uid: i }, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: h, siteId: this.config.globals?.siteId }),
											(this.events[s].banner[i] = this.events[s].banner[i] || {}),
											(this.events[s].banner[i].impression = !0);
									},
									click: (e, s) => {
										if (!s) {
											this.log.warn('No banner provided to track.banner.click');
											return;
										}
										const { responseId: i, uid: c } = s;
										if (!this.events[i]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if ((0, R.c)(e)) {
											if (this.events?.[i]?.banner[c]?.clickThrough) return;
											this.track.banner.clickThrough(e, s),
												(this.events[i].banner[c] = this.events[i].banner[c] || {}),
												(this.events[i].banner[c].clickThrough = !0),
												setTimeout(() => {
													this.events[i].banner[c].clickThrough = !1;
												}, b.WG);
										}
									},
									clickThrough: (e, { uid: s, responseId: i }) => {
										if (!s) {
											this.log.warn('No banner uid provided to track.banner.clickThrough');
											return;
										}
										if (!this.events[i]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const h = { responseId: i, banners: [{ uid: s }] };
										this.eventManager.fire('track.banner.clickThrough', { controller: this, event: e, product: { uid: s }, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: h, siteId: this.config.globals?.siteId }),
											(this.events[i].banner[s] = this.events[i].banner[s] || {}),
											(this.events[i].banner[s].clickThrough = !0),
											setTimeout(() => {
												this.events[i].banner[s].clickThrough = !1;
											}, b.WG);
									},
								},
								product: {
									clickThrough: (e, s) => {
										if (!s) {
											this.log.warn('No result provided to track.product.clickThrough');
											return;
										}
										const i = s.responseId;
										if (!this.events[i]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const c = ['product', 'banner'].includes(s.type) ? s.type : 'product',
											h = {
												type: c,
												uid: s.id ? '' + s.id : '',
												...(c === 'product'
													? {
															parentId: s.mappings.core?.parentId ? '' + s.mappings.core?.parentId : '',
															sku: s.mappings.core?.sku ? '' + s.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											p = { responseId: i, results: [h] };
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: s, trackEvent: p }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: p, siteId: this.config.globals?.siteId });
									},
									click: (e, s) => {
										if (!s) {
											this.log.warn('No result provided to track.product.click');
											return;
										}
										const i = s.responseId;
										if (!this.events[i]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (s.type === 'banner' && (0, R.c)(e)) {
											if (this.events?.[i]?.product[s.id]?.inlineBannerClickThrough) return;
											this.track.product.clickThrough(e, s),
												(this.events[i].product[s.id] = this.events[i].product[s.id] || {}),
												(this.events[i].product[s.id].inlineBannerClickThrough = !0),
												setTimeout(() => {
													this.events[i].product[s.id].inlineBannerClickThrough = !1;
												}, b.WG);
										} else if ((0, b.bU)(e, s)) {
											if (this.events?.[i]?.product[s.id]?.productClickThrough) return;
											this.track.product.clickThrough(e, s),
												(this.events[i].product[s.id] = this.events[i].product[s.id] || {}),
												(this.events[i].product[s.id].productClickThrough = !0),
												setTimeout(() => {
													this.events[i].product[s.id].productClickThrough = !1;
												}, b.WG);
										}
									},
									impression: (e) => {
										if (!e) {
											this.log.warn('No result provided to track.product.impression');
											return;
										}
										const s = e.responseId;
										if (this.events[s]) {
											if (this.events?.[s]?.product[e.id]?.impression) return;
										} else {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const i = ['product', 'banner'].includes(e.type) ? e.type : 'product',
											c = {
												type: i,
												uid: e.id ? '' + e.id : '',
												...(i === 'product'
													? {
															parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
															sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											h = { responseId: s, results: [c], banners: [] };
										this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: h, siteId: this.config.globals?.siteId }),
											(this.events[s].product[e.id] = this.events[s].product[e.id] || {}),
											(this.events[s].product[e.id].impression = !0);
									},
									addToCart: (e) => {
										if (!e) {
											this.log.warn('No result provided to track.product.addToCart');
											return;
										}
										const s = e.responseId;
										if (!this.events[s]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const i = { parentId: e.id, uid: e.id, sku: e.mappings.core?.sku, qty: e.quantity || 1, price: Number(e.mappings.core?.price) },
											c = { responseId: s, results: [i] };
										this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: c }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.addToCart({ data: c, siteId: this.config.globals?.siteId });
									},
								},
								redirect: ({ redirectURL: e, responseId: s }) => {
									if (!e) {
										this.log.warn('No redirectURL provided to track.redirect');
										return;
									}
									const i = { responseId: s, redirect: e };
									this.eventManager.fire('track.redirect', { controller: this, redirectURL: e, trackEvent: i }),
										this.config.beacon?.enabled && this.tracker.events.autocomplete.redirect({ data: i, siteId: this.config.globals?.siteId });
								},
							}),
							(this.handlers = {
								input: {
									enterKey: async (e) => {
										if (e.keyCode == q) {
											const s = e.target;
											let i = this.store.services.urlManager;
											for (e.preventDefault(); this.store.loading; ) await w(y);
											this.store.search.correctedQuery && (i = i?.set(L, this.store.search.correctedQuery.string)),
												(i = i?.set('query', s.value)),
												await w(y + 1);
											try {
												await this.eventManager.fire('beforeSubmit', { controller: this, input: s });
											} catch (c) {
												if (c?.message == 'cancelled') {
													this.log.warn("'beforeSubmit' middleware cancelled");
													return;
												} else this.log.error("error in 'beforeSubmit' middleware"), console.error(c);
											}
											window.location.href = i?.href || '';
										}
									},
									escKey: (e) => {
										e.keyCode == I && (e.target.blur(), this.setFocused());
									},
									focus: (e) => {
										e.stopPropagation(),
											setTimeout(() => {
												this.setFocused(e.target);
											});
									},
									formSubmit: async (e) => {
										const s = e.target,
											i = s.querySelector(`input[${k}]`);
										for (e.preventDefault(); this.store.loading; ) await w(y);
										this.store.search.correctedQuery && x(s, L, this.store.search.correctedQuery.string), await w(y + 1);
										try {
											await this.eventManager.fire('beforeSubmit', { controller: this, input: i });
										} catch (c) {
											if (c?.message == 'cancelled') {
												this.log.warn("'beforeSubmit' middleware cancelled");
												return;
											} else this.log.error("error in 'beforeSubmit' middleware"), console.error(c);
										}
										s.submit();
									},
									formElementChange: (e) => {
										const i = e.target?.form,
											c = i?.querySelector(`input[${k}]`);
										if (i && c && this.config.settings?.serializeForm) {
											const h = j(i, function (p) {
												return p != c;
											});
											this.store.setService('urlManager', this.store.services.urlManager.reset().withGlobals(h)),
												this.store.reset(),
												this.config.settings?.trending?.enabled &&
													this.config.settings?.trending?.limit &&
													this.config.settings?.trending?.limit > 0 &&
													this.searchTrending();
										}
									},
									input: (e) => {
										e.isTrusted && this.store.state.focusedInput !== e.target && this.setFocused(e.target);
										const s = e.target.value;
										if (((!this.store.state.input && !s) || this.store.state.input == s) && this.store.loaded) return;
										(this.store.state.source = 'input'),
											(this.store.state.input = s),
											(this.store.merchandising.redirect = ''),
											this.config?.settings?.syncInputs &&
												document.querySelectorAll(this.config.selector).forEach((p) => {
													p.value = s;
												}),
											clearTimeout(this.handlers.input.timeoutDelay);
										const i = this.store.trending?.length && this.config.settings?.trending?.enabled && this.config.settings?.trending?.showResults,
											c = this.store.history?.length && this.config.settings?.history?.enabled && this.config.settings?.history?.showResults;
										this.handlers.input.timeoutDelay = setTimeout(() => {
											s
												? (this.store.state.locks.terms.unlock(),
												  this.store.state.locks.facets.unlock(),
												  this.urlManager.set({ query: this.store.state.input }).go())
												: (this.store.reset(),
												  i ? this.store.trending[0].preview() : c ? this.store.history[0].preview() : this.urlManager.reset().go());
										}, y);
									},
									timeoutDelay: void 0,
								},
								document: {
									click: (e) => {
										const s = document.querySelectorAll(this.config.selector);
										Array.from(s).includes(e.target) || (e.target?.nodeName == 'FORM' && e.target.querySelectorAll(this.config.selector).length)
											? e.stopPropagation()
											: this.setFocused();
									},
								},
							}),
							(this.searchTrending = async (e) => {
								let s;
								const i = this.storage.get('terms');
								if (i && !e?.limit) s = JSON.parse(i);
								else {
									const c = { limit: e?.limit || this.config.settings?.trending?.limit || 5 },
										h = this.profiler.create({ type: 'event', name: 'trending', context: c }).start();
									(s = await this.client.trending(c)),
										h.stop(),
										this.log.profile(h),
										s?.trending.queries?.length && this.storage.set('terms', JSON.stringify(s));
								}
								this.store.updateTrendingTerms(s);
							}),
							(this.search = async () => {
								try {
									if ((this.initialized || (await this.init()), !this.urlManager.state.query)) return;
									const e = this.params;
									if (!e?.search?.query?.string) return;
									(this.store.loading = !0), (this.store.merchandising.redirect = '');
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: e });
									} catch (m) {
										if (m?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), m);
									}
									const s = this.profiler.create({ type: 'event', name: 'search', context: e }).start(),
										{ meta: i, search: c } = await this.client.autocomplete(e);
									s.stop(), this.log.profile(s);
									const h = c.tracking.responseId;
									this.events[h] = this.events[h] || { product: {}, banner: {} };
									const p = this.store.results[0]?.responseId,
										A = p && p === h;
									if (A) {
										const m = Object.keys(this.events[h].product || {}).filter((O) => this.events[h].product?.[O]?.impression);
										this.events[h] = { product: m.reduce((O, Q) => ((O[Q] = { impression: !0 }), O), {}), banner: this.events[h].banner };
									} else this.events[h] = { product: {}, banner: {} };
									const E = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: i, search: c } });
									} catch (m) {
										if (m?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), E.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), m);
									}
									if ((E.stop(), this.log.profile(E), this.store.update({ meta: i, search: c }), !A)) {
										const m = { responseId: h };
										this.config.beacon?.enabled && this.tracker.events.autocomplete.render({ data: m, siteId: this.config.globals?.siteId });
									}
									const C = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: e, response: { meta: i, search: c } });
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
													this.store.error = { code: 429, type: S.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: S.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: S.B.ERROR, message: e.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
										} else
											(this.store.error = { type: S.B.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.addToCart = async (e) => {
								const s = typeof e?.slice == 'function' ? e.slice() : [e];
								if (!e || s.length === 0) {
									this.log.warn('No products provided to autocomplete controller.addToCart');
									return;
								}
								s.forEach((i) => {
									this.track.product.addToCart(i);
								}),
									s.length > 0 && this.eventManager.fire('addToCart', { controller: this, products: s });
							}),
							(this.config = P()(U, this.config)),
							this.config.settings?.trending?.limit &&
								typeof this.config.settings?.trending?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, trending: { enabled: !0, ...this.config.settings.trending } }),
							this.config.settings?.history?.limit &&
								typeof this.config.settings?.history?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, history: { enabled: !0, ...this.config.settings.history } }),
							this.store.setConfig(this.config),
							this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
							(this.storage = new N.t({ type: 'session', key: `athos-controller-${this.config.id}` })),
							this.eventManager.on('afterSearch', async (e, s) => {
								if ((await s(), e.response.search.autocomplete?.query != e.controller.urlManager.state.query)) return !1;
							}),
							this.eventManager.on('beforeSubmit', async (e, s) => {
								if ((await s(), e.controller.store.loading)) return;
								const c = e.controller.store.state.input,
									h = e.controller.store.merchandising?.redirect;
								if (this.config?.settings?.redirects?.merchandising && c && h)
									return (
										this.track.redirect({ redirectURL: h, responseId: e.controller.store.merchandising?.responseId }), (window.location.href = h), !1
									);
								if (this.config?.settings?.redirects?.singleResult) {
									const { results: p } = e.controller.store,
										A = p.filter((C) => C.type == 'product'),
										E = A.length === 1 && A[0].mappings.core?.url;
									if (E) return (window.location.href = E), !1;
								}
							}),
							this.use(this.config);
					}
					get params() {
						const o = this.urlManager.state,
							t = P()({ ...(0, F.j)(o) }, this.config.globals || {}),
							{ userId: n, sessionId: a, pageLoadId: d, shopperId: g } = this.tracker.getContext();
						if (
							((t.tracking = t.tracking || {}),
							(t.tracking.domain = window.location.href),
							n && (t.tracking.userId = n),
							a && (t.tracking.sessionId = a),
							d && (t.tracking.pageLoadId = d),
							this.store.state.input && ((t.search = t.search || {}), (t.search.input = this.store.state.input)),
							this.store.state.source && ((t.search = t.search || {}), (t.search.source = this.store.state.source)),
							!this.config.globals?.personalization?.disabled)
						) {
							const v = this.tracker.cookies.cart.get();
							v.length && ((t.personalization = t.personalization || {}), (t.personalization.cart = v.join(',')));
							const T = this.tracker.cookies.viewed.get();
							T.length && ((t.personalization = t.personalization || {}), (t.personalization.lastViewed = T.join(','))),
								g && ((t.personalization = t.personalization || {}), (t.personalization.shopper = g));
						}
						return t;
					}
					async setFocused(o) {
						if (this.store.state.focusedInput !== o) {
							this.store.state.focusedInput = o;
							try {
								try {
									await this.eventManager.fire('focusChange', { controller: this });
								} catch (t) {
									if (t?.message == 'cancelled') this.log.warn("'focusChange' middleware cancelled");
									else throw (this.log.error("error in 'focusChange' middleware"), t);
								}
							} catch (t) {
								t && console.error(t);
							}
						}
						o?.dispatchEvent(new Event('input'));
					}
					reset() {
						document.querySelectorAll(this.config.selector).forEach((t) => {
							t.value = '';
						}),
							this.store.reset();
					}
					unbind() {
						document.querySelectorAll(`input[${k}]`)?.forEach((t) => {
							t.removeEventListener('input', this.handlers.input.input),
								t.removeEventListener('keydown', this.handlers.input.enterKey),
								t.removeEventListener('keydown', this.handlers.input.escKey),
								t.removeEventListener('focus', this.handlers.input.focus),
								t.form && (t.form.removeEventListener('submit', this.handlers.input.formSubmit), f(t.form, this.handlers.input.formElementChange));
						}),
							document.removeEventListener('click', this.handlers.document.click);
					}
					async bind() {
						this.initialized || (await this.init()),
							this.unbind(),
							document.querySelectorAll(this.config.selector).forEach((t) => {
								t.setAttribute('spellcheck', 'false'),
									t.setAttribute('autocomplete', 'off'),
									t.setAttribute('autocorrect', 'off'),
									t.setAttribute('autocapitalize', 'none'),
									t.setAttribute(k, ''),
									this.config.settings?.bind?.input && t.addEventListener('input', this.handlers.input.input),
									this.config?.settings?.initializeFromUrl && !t.value && this.store.state.input && (t.value = this.store.state.input),
									t.addEventListener('focus', this.handlers.input.focus),
									t.addEventListener('keydown', this.handlers.input.escKey);
								const n = t.form;
								let a;
								if (this.config.action)
									this.config.settings?.bind?.submit && t.addEventListener('keydown', this.handlers.input.enterKey), (a = this.config.action);
								else if (
									n &&
									(this.config.settings?.bind?.submit && n.addEventListener('submit', this.handlers.input.formSubmit),
									(a = n.action || ''),
									this.config.settings?.serializeForm)
								) {
									K(n, this.handlers.input.formElementChange, function (g) {
										return g != t;
									});
									const d = j(n, function (g) {
										return g != t;
									});
									this.store.setService('urlManager', this.urlManager.reset().withGlobals(d));
								}
								a &&
									this.store.setService(
										'urlManager',
										this.store.services.urlManager.withConfig((d) => ({ ...d, urlRoot: a }))
									),
									document.activeElement === t && !this.store.loading && this.setFocused(t);
							}),
							this.config.settings?.trending?.enabled &&
								this.config.settings?.trending?.limit &&
								this.config.settings?.trending?.limit > 0 &&
								!this.store.trending?.length &&
								this.searchTrending(),
							this.config.settings?.disableClickOutside || document.addEventListener('click', this.handlers.document.click);
					}
				}
				function x(r, o, t) {
					const n = document.createElement('input');
					(n.type = 'hidden'), (n.name = o), (n.value = t), r.querySelector(`[type="hidden"][name="${o}"]`)?.remove(), r.append(n);
				}
				async function w(r) {
					return new Promise((o) => {
						window.setTimeout(o, r);
					});
				}
				const M = ['file', 'reset', 'submit', 'button', 'image', 'password'];
				function j(r, o) {
					const t = {};
					if (typeof r == 'object' && r.nodeName == 'FORM')
						for (let n = r.elements.length - 1; n >= 0; n--) {
							const a = r.elements[n];
							(typeof o == 'function' && !o(a)) ||
								(a.name && !M.includes(a.type) && ((a.type != 'checkbox' && a.type != 'radio') || a.checked) && (t[a.name] = a.value));
						}
					return t;
				}
				function K(r, o, t) {
					if (typeof r == 'object' && r.nodeName == 'FORM')
						for (let n = r.elements.length - 1; n >= 0; n--) {
							const a = r.elements[n];
							(typeof t == 'function' && !t(a)) || (a.name && !M.includes(a.type) && a.addEventListener('change', o));
						}
				}
				function f(r, o) {
					if (typeof r == 'object' && r.nodeName == 'FORM')
						for (let t = r.elements.length - 1; t >= 0; t--) {
							const n = r.elements[t];
							n.name && !M.includes(n.type) && n.removeEventListener('change', o);
						}
				}
			},
			'../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'(z, H, u) {
				u.d(H, { Y: () => K });
				var l = u('../../node_modules/mobx/dist/mobx.esm.js'),
					P = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					N = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js'),
					S = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					D = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js'),
					F = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
					B = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
					b = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js'),
					R = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Storage/StorageStore.js');
				class k {
					constructor(r) {
						(this.focusedInput = void 0), (this.input = void 0), (this.source = 'input');
						const { services: o } = r || {};
						(this.locks = { terms: new y(!1), facets: new y(!1) }),
							(this.url = o.urlManager),
							(0, l.Gn)(this, { focusedInput: l.sH, locks: l.sH, input: l.sH, reset: l.XI });
					}
					reset() {
						(this.input = void 0), this.locks.terms.reset(), this.locks.facets.reset();
					}
				}
				class y {
					constructor(r = !1) {
						this.state = this.startState = r;
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
				class q extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(r) {
						const { data: o } = r || {},
							{ autocomplete: t, search: n } = o?.autocomplete || {},
							a = [...(t?.alternatives ? t.alternatives : []).map((g) => g.text)];
						t?.correctedQuery && n?.query && t.correctedQuery.toLowerCase() != n.query.toLowerCase() && a.unshift(t.correctedQuery),
							n?.query && a.unshift(n.query);
						const d = [];
						a.map((g, v) =>
							d.push(
								new I({ ...r, data: { term: { active: v === 0, value: g }, terms: d }, functions: r.functions, state: r.state, type: 'suggested' })
							)
						),
							super(...d);
					}
				}
				class I {
					constructor(r) {
						const { services: o, functions: t, state: n, data: a, type: d } = r || {},
							{ term: g, terms: v } = a || {};
						(this.active = g?.active),
							(this.value = g?.value),
							(this.type = d),
							(this.url = o?.urlManager?.set({ query: this.value })),
							(this.preview = () => {
								t.resetTerms(),
									v.map((T) => {
										T.active = !1;
									}),
									(n.rootState.source = d),
									(this.active = !0),
									n.rootState.locks.terms.lock(),
									n.rootState.locks.facets.unlock(),
									this.url?.set({ query: this.value }).go();
							}),
							(0, l.Gn)(this, { active: l.sH, value: l.sH });
					}
				}
				class L extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(r) {
						const { data: o } = r || {},
							{ queries: t } = o || {},
							n = [];
						t?.map((a) => {
							n.push(new I({ ...r, data: { term: { active: !1, value: a }, terms: n }, functions: r.functions, state: r.state, type: 'historical' }));
						}),
							super(...n);
					}
				}
				class U extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(r) {
						const o = [],
							{ data: t } = r || {},
							{ trending: n } = t?.trending || {};
						n?.queries?.map((a) => {
							o.push(
								new I({
									...r,
									data: { term: { active: !1, value: a.searchQuery }, terms: o },
									functions: r.functions,
									state: r.state,
									type: 'popular',
								})
							);
						}),
							super(...o);
					}
				}
				class _ {
					constructor(r) {
						const { services: o, data: t } = r || {},
							{ search: n, autocomplete: a } = t?.autocomplete || {},
							d = {};
						n?.query && ((this.query = new x(o.urlManager, n.query)), (d.query = l.sH)),
							a?.correctedQuery && ((this.correctedQuery = new x(o.urlManager, a.correctedQuery)), (d.correctedQuery = l.sH)),
							(this.matchType = n?.matchType),
							(d.matchType = l.sH),
							(0, l.Gn)(this, d);
					}
				}
				class x {
					constructor(r, o) {
						(this.string = o), (this.url = r.set({ query: this.string })), (0, l.Gn)(this, { string: l.sH });
					}
				}
				var w = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js');
				class M extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(r) {
						const { services: o, state: t } = r || {},
							n = new w.pC({ ...r, services: { ...o, urlManager: o.urlManager.remove('filter') } });
						n.forEach((a) => {
							a.values?.forEach((d) => {
								d.preview = () => {
									n.map((g) => {
										(g.filtered = !1),
											g.values?.map((v) => {
												v.filtered = !1;
											});
									}),
										(a.filtered = !0),
										(d.filtered = !0),
										t?.autocomplete.locks.facets.lock(),
										d.url.go();
								};
							});
						}),
							super(...n);
					}
				}
				var j = u('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class K extends P.K {
					constructor(r, o) {
						if ((super(r), typeof o != 'object' || typeof o.urlManager?.subscribe != 'function'))
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = o),
							(this.state = new k({ services: this.services })),
							(this.storage = new R.t()),
							(this.trending = []),
							(this.history = []),
							this.initHistory(),
							this.reset(),
							(0, l.Gn)(this, {
								state: l.sH,
								search: l.sH,
								terms: l.sH,
								facets: l.sH,
								filters: l.sH,
								merchandising: l.sH,
								results: l.sH,
								pagination: l.sH,
								sorting: l.sH,
								history: l.sH,
								trending: l.sH,
							});
					}
					get hasQuery() {
						return !!((this.state.input && this.loaded) || this.search.query?.string);
					}
					reset() {
						this.state.reset(), this.update(), this.resetTerms();
					}
					initHistory() {
						const r = this.config.settings?.history?.limit;
						if (r) {
							const o = new N.E({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
							this.history = new L({
								services: this.services,
								functions: {
									resetTerms: () => {
										this.resetTerms();
									},
								},
								state: { rootState: this.state },
								data: { queries: o.getStoredData(r) },
							});
						} else this.history = [];
					}
					resetTerms() {
						this.resetSuggestions(), this.resetTrending(), this.resetHistory();
					}
					resetSuggestions() {
						this.terms?.forEach((r) => (r.active = !1));
					}
					resetTrending() {
						this.trending?.forEach((r) => (r.active = !1));
					}
					resetHistory() {
						this.history?.forEach((r) => (r.active = !1));
					}
					setService(r, o) {
						this.services[r] && o && ((this.services[r] = o), r === 'urlManager' && ((this.state.url = o), this.initHistory()));
					}
					updateTrendingTerms(r) {
						this.trending = new U({
							services: this.services,
							functions: {
								resetTerms: () => {
									this.resetTerms();
								},
							},
							state: { rootState: this.state },
							data: { trending: r },
						});
					}
					update(r) {
						const { meta: o, search: t } = r || {};
						(this.meta = new j.l({ data: { meta: o } })),
							t?.search && (this.state.url = this.services.urlManager = this.services.urlManager.set('query', t.search.query)),
							this.state.locks.terms.locked ||
								((this.terms = new q({
									config: this.config,
									services: this.services,
									functions: {
										resetTerms: () => {
											this.resetTerms();
										},
									},
									state: { rootState: this.state },
									data: { autocomplete: t },
								})),
								t?.autocomplete && this.state.locks.terms.lock()),
							(this.merchandising = new S.W({ data: { search: t } })),
							(this.search = new _({ config: this.config, services: this.services, data: { autocomplete: t } })),
							this.state.locks.facets.locked ||
								(this.facets = new M({
									config: this.config,
									services: this.services,
									stores: { storage: this.storage },
									state: { autocomplete: this.state },
									data: { search: t, meta: this.meta.data },
								})),
							(this.filters = new D.Al({ config: this.config, services: this.services, data: { search: t, meta: this.meta.data } })),
							(this.results = new F.vP({ config: this.config, state: { loaded: this.loaded }, data: { search: t, meta: this.meta.data } })),
							((this.results.length === 0 && !this.trending.filter((n) => n.active).length) || this.terms?.filter((n) => n.active).length) &&
								this.resetTrending(),
							(this.pagination = new B.a3({ services: this.services, data: { search: t, meta: this.meta.data } })),
							(this.sorting = new b.q({ services: this.services, data: { search: t, meta: this.meta.data } })),
							(this.error = void 0),
							(this.loaded = !!t?.pagination);
					}
				}
			},
		},
	]);
})();
