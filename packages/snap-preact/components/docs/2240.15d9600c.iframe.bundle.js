'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2240],
		{
			'../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'(_, P, d) {
				d.d(P, { Z: () => w });
				var l = d('../../node_modules/deepmerge/dist/cjs.js'),
					R = d.n(l),
					L = d('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/mergeControllerConfig.js'),
					y = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					j = d('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/StorageStore/StorageStore.js'),
					O = d('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					x = d('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/getParams.js'),
					q = d('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js'),
					D = d('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinProductLink.js'),
					I = d('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinBannerLink.js');
				const p = 'ss-autocomplete-input',
					v = 200,
					k = 13,
					N = 27,
					M = 'fallbackQuery',
					H = {
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
				class w extends O.r {
					constructor(n, s, c) {
						super(n, s, c),
							(this.type = q.k.autocomplete),
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
										const h = { responseId: t, banners: [{ uid: r }], results: [] };
										this.eventManager.fire('track.banner.impression', { controller: this, product: { uid: r }, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: h, siteId: this.config.globals?.siteId }),
											(this.events[t].banner[r] = this.events[t].banner[r] || {}),
											(this.events[t].banner[r].impression = !0);
									},
									click: (e, t) => {
										if (!t) {
											this.log.warn('No banner provided to track.banner.click');
											return;
										}
										const { responseId: r, uid: i } = t;
										if (!this.events[r]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if ((0, I.c)(e)) {
											if (this.events?.[r]?.banner[i]?.clickThrough) return;
											this.track.banner.clickThrough(e, t),
												(this.events[r].banner[i] = this.events[r].banner[i] || {}),
												(this.events[r].banner[i].clickThrough = !0),
												setTimeout(() => {
													this.events[r].banner[i].clickThrough = !1;
												}, 1e3);
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
										const h = { responseId: r, banners: [{ uid: t }] };
										this.eventManager.fire('track.banner.clickThrough', { controller: this, event: e, product: { uid: t }, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: h, siteId: this.config.globals?.siteId }),
											(this.events[r].banner[t] = this.events[r].banner[t] || {}),
											(this.events[r].banner[t].clickThrough = !0),
											setTimeout(() => {
												this.events[r].banner[t].clickThrough = !1;
											}, 1e3);
									},
								},
								product: {
									clickThrough: (e, t, r) => {
										if (!t) {
											this.log.warn('No result provided to track.product.clickThrough');
											return;
										}
										const i = t.responseId;
										if (!this.events[i]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const h = ['product', 'banner'].includes(t.type) ? t.type : 'product',
											u = {
												type: h,
												uid: t.id ? '' + t.id : '',
												...(h === 'product'
													? {
															parentId: t.mappings.core?.parentId ? '' + t.mappings.core?.parentId : '',
															sku: t.mappings.core?.sku ? '' + t.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											f = { responseId: i, results: [u], ...(r?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: t, trackEvent: f }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: f, siteId: this.config.globals?.siteId });
									},
									click: (e, t, r) => {
										if (!t) {
											this.log.warn('No result provided to track.product.click');
											return;
										}
										const i = t.responseId;
										if (!this.events[i]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (t.type === 'banner' && (0, I.c)(e)) {
											if (this.events?.[i]?.product[t.id]?.inlineBannerClickThrough) return;
											this.track.product.clickThrough(e, t, r),
												(this.events[i].product[t.id] = this.events[i].product[t.id] || {}),
												(this.events[i].product[t.id].inlineBannerClickThrough = !0),
												setTimeout(() => {
													this.events[i].product[t.id].inlineBannerClickThrough = !1;
												}, 1e3);
										} else if ((0, D.b)(e, t)) {
											if (this.events?.[i]?.product[t.id]?.productClickThrough) return;
											this.track.product.clickThrough(e, t, r),
												(this.events[i].product[t.id] = this.events[i].product[t.id] || {}),
												(this.events[i].product[t.id].productClickThrough = !0),
												setTimeout(() => {
													this.events[i].product[t.id].productClickThrough = !1;
												}, 1e3);
										}
									},
									impression: (e, t) => {
										if (!e) {
											this.log.warn('No result provided to track.product.impression');
											return;
										}
										const r = e.responseId,
											i = t?.quickView ? 'quickviewImpression' : 'impression';
										if (this.events[r]) {
											if (this.events?.[r]?.product[e.id]?.[i]) return;
										} else {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const h = ['product', 'banner'].includes(e.type) ? e.type : 'product',
											u = {
												type: h,
												uid: e.id ? '' + e.id : '',
												...(h === 'product'
													? {
															parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
															sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											f = { responseId: r, results: [u], banners: [], ...(t?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: f }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: f, siteId: this.config.globals?.siteId }),
											(this.events[r].product[e.id] = this.events[r].product[e.id] || {}),
											(this.events[r].product[e.id][i] = !0);
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
										const i = {
												parentId: e.display.mappings.core?.parentId ? '' + e.display.mappings.core?.parentId : '',
												uid: e.display.mappings.core?.uid || e.display.id,
												sku: e.display.mappings.core?.sku,
												qty: e.quantity || 1,
												price: Number(e.display.mappings.core?.price) || 0,
											},
											h = { responseId: r, results: [i], ...(t?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: h }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.addToCart({ data: h, siteId: this.config.globals?.siteId });
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
										if (e.keyCode == k) {
											const t = e.target;
											let r = this.store.services.urlManager;
											for (e.preventDefault(); this.store.loading; ) await b(v);
											this.store.search.correctedQuery && (r = r?.set(M, this.store.search.correctedQuery.string)),
												(r = r?.set('query', t.value)),
												await b(v + 1);
											try {
												await this.eventManager.fire('beforeSubmit', { controller: this, input: t });
											} catch (i) {
												if (i?.message == 'cancelled') {
													this.log.warn("'beforeSubmit' middleware cancelled");
													return;
												} else this.log.error("error in 'beforeSubmit' middleware"), console.error(i);
											}
											window.location.href = r?.href || '';
										}
									},
									escKey: (e) => {
										e.keyCode == N && (e.target.blur(), this.setFocused());
									},
									focus: (e) => {
										e.stopPropagation(),
											setTimeout(() => {
												this.setFocused(e.target);
											});
									},
									formSubmit: async (e) => {
										const t = e.target,
											r = t.querySelector(`input[${p}]`);
										for (e.preventDefault(); this.store.loading; ) await b(v);
										this.store.search.correctedQuery && F(t, M, this.store.search.correctedQuery.string), await b(v + 1);
										try {
											await this.eventManager.fire('beforeSubmit', { controller: this, input: r });
										} catch (i) {
											if (i?.message == 'cancelled') {
												this.log.warn("'beforeSubmit' middleware cancelled");
												return;
											} else this.log.error("error in 'beforeSubmit' middleware"), console.error(i);
										}
										t.submit();
									},
									formElementChange: (e) => {
										const r = e.target?.form,
											i = r?.querySelector(`input[${p}]`);
										if (r && i && this.config.settings?.serializeForm) {
											const h = A(r, function (u) {
												return u != i;
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
										const t = e.target.value;
										if (((!this.store.state.input && !t) || this.store.state.input == t) && this.store.loaded) return;
										(this.store.state.source = 'input'),
											(this.store.state.input = t),
											(this.store.merchandising.redirect = ''),
											this.config?.settings?.syncInputs &&
												document.querySelectorAll(this.config.selector).forEach((u) => {
													u.value = t;
												}),
											clearTimeout(this.handlers.input.timeoutDelay);
										const r = this.store.trending?.length && this.config.settings?.trending?.enabled && this.config.settings?.trending?.showResults,
											i = this.store.history?.length && this.config.settings?.history?.enabled && this.config.settings?.history?.showResults;
										this.handlers.input.timeoutDelay = setTimeout(() => {
											t
												? (this.store.state.locks.terms.unlock(),
												  this.store.state.locks.facets.unlock(),
												  this.urlManager.set({ query: this.store.state.input }).go())
												: (this.store.reset(),
												  r ? this.store.trending[0].preview() : i ? this.store.history[0].preview() : this.urlManager.reset().go());
										}, v);
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
									const i = { limit: e?.limit || this.config.settings?.trending?.limit || 5 },
										h = this.profiler.create({ type: 'event', name: 'trending', context: i }).start();
									(t = await this.client.trending(i)),
										h.stop(),
										this.log.profile(h),
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
									} catch (g) {
										if (g?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), g);
									}
									const t = this.profiler.create({ type: 'event', name: 'search', context: e }).start(),
										{ meta: r, search: i } = await this.client.autocomplete(e);
									t.stop(), this.log.profile(t);
									const h = i.tracking.responseId;
									this.events[h] = this.events[h] || { product: {}, banner: {} };
									const u = this.store.results[0]?.responseId,
										f = u && u === h;
									if (f) {
										const g = Object.keys(this.events[h].product || {}).filter((C) => this.events[h].product?.[C]?.impression);
										this.events[h] = { product: g.reduce((C, B) => ((C[B] = { impression: !0 }), C), {}), banner: this.events[h].banner };
									} else this.events[h] = { product: {}, banner: {} };
									const S = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: r, search: i } });
									} catch (g) {
										if (g?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), S.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), g);
									}
									if ((S.stop(), this.log.profile(S), this.store.update({ meta: r, search: i }), !f)) {
										const g = { responseId: h };
										this.config.beacon?.enabled && this.tracker.events.autocomplete.render({ data: g, siteId: this.config.globals?.siteId });
									}
									const T = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: e, response: { meta: r, search: i } });
									} catch (g) {
										if (g?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), T.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), g);
									}
									T.stop(), this.log.profile(T);
								} catch (e) {
									if (e)
										if (e.err && e.fetchDetails) {
											switch (e.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: y.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: y.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: y.B.ERROR, message: e.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(e.err, e.fetchDetails);
										} else
											(this.store.error = { type: y.B.ERROR, message: `Something went wrong... - ${e}` }), this.log.error(e), this.handleError(e);
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
								r.forEach((i) => {
									this.track.product.addToCart(i, t);
								}),
									r.length > 0 && (await this.eventManager.fire('addToCart', { controller: this, products: r }));
							}),
							(this.config = (0, L.N)(H, this.config)),
							this.config.settings?.trending?.limit &&
								typeof this.config.settings?.trending?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, trending: { enabled: !0, ...this.config.settings.trending } }),
							this.config.settings?.history?.limit &&
								typeof this.config.settings?.history?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, history: { enabled: !0, ...this.config.settings.history } }),
							this.store.setConfig(this.config),
							this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
							(this.storage = new j.t({ type: 'session', key: `athos-controller-${this.config.id}` })),
							this.eventManager.on('afterSearch', async (e, t) => {
								if ((await t(), e.response.search.autocomplete?.query != e.controller.urlManager.state.query)) return !1;
							}),
							this.eventManager.on('beforeSubmit', async (e, t) => {
								if ((await t(), e.controller.store.loading)) return;
								const i = e.controller.store.state.input,
									h = e.controller.store.merchandising?.redirect;
								if (this.config?.settings?.redirects?.merchandising && i && h)
									return (
										this.track.redirect({ redirectURL: h, responseId: e.controller.store.merchandising?.responseId }), (window.location.href = h), !1
									);
								if (this.config?.settings?.redirects?.singleResult) {
									const { results: u } = e.controller.store,
										f = u.filter((T) => T.type == 'product'),
										S = f.length === 1 && f[0].mappings.core?.url;
									if (S) return (window.location.href = S), !1;
								}
							}),
							this.use(this.config);
					}
					get params() {
						const n = this.urlManager.state,
							s = R()({ ...(0, x.j)(n) }, this.config.globals || {}),
							{ userId: c, sessionId: e, pageLoadId: t, shopperId: r } = this.tracker.getContext();
						if (
							((s.tracking = s.tracking || {}),
							(s.tracking.domain = window.location.href),
							c && (s.tracking.userId = c),
							e && (s.tracking.sessionId = e),
							t && (s.tracking.pageLoadId = t),
							this.store.state.input && ((s.search = s.search || {}), (s.search.input = this.store.state.input)),
							this.store.state.source && ((s.search = s.search || {}), (s.search.source = this.store.state.source)),
							!this.config.globals?.personalization?.disabled)
						) {
							const i = this.tracker.cookies.cart.get();
							i.length && ((s.personalization = s.personalization || {}), (s.personalization.cart = i.join(',')));
							const h = this.tracker.cookies.viewed.get();
							h.length && ((s.personalization = s.personalization || {}), (s.personalization.lastViewed = h.join(','))),
								r && ((s.personalization = s.personalization || {}), (s.personalization.shopper = r));
						}
						return s;
					}
					async setFocused(n) {
						if (this.store.state.focusedInput !== n) {
							this.store.state.focusedInput = n;
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
						n?.dispatchEvent(new Event('input'));
					}
					reset() {
						document.querySelectorAll(this.config.selector).forEach((s) => {
							s.value = '';
						}),
							this.store.reset();
					}
					unbind() {
						document.querySelectorAll(`input[${p}]`)?.forEach((s) => {
							s.removeEventListener('input', this.handlers.input.input),
								s.removeEventListener('keydown', this.handlers.input.enterKey),
								s.removeEventListener('keydown', this.handlers.input.escKey),
								s.removeEventListener('focus', this.handlers.input.focus),
								s.form && (s.form.removeEventListener('submit', this.handlers.input.formSubmit), a(s.form, this.handlers.input.formElementChange));
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
									s.setAttribute(p, ''),
									this.config.settings?.bind?.input && s.addEventListener('input', this.handlers.input.input),
									this.config?.settings?.initializeFromUrl && !s.value && this.store.state.input && (s.value = this.store.state.input),
									s.addEventListener('focus', this.handlers.input.focus),
									s.addEventListener('keydown', this.handlers.input.escKey);
								const c = s.form;
								let e;
								if (this.config.action)
									this.config.settings?.bind?.submit && s.addEventListener('keydown', this.handlers.input.enterKey), (e = this.config.action);
								else if (c) {
									if (
										(this.config.settings?.bind?.submit && c.addEventListener('submit', this.handlers.input.formSubmit),
										(e = c.action || ''),
										this.config.settings?.serializeForm)
									) {
										m(c, this.handlers.input.formElementChange, function (r) {
											return r != s;
										});
										const t = A(c, function (r) {
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
				function F(o, n, s) {
					const c = document.createElement('input');
					(c.type = 'hidden'), (c.name = n), (c.value = s), o.querySelector(`[type="hidden"][name="${n}"]`)?.remove(), o.append(c);
				}
				async function b(o) {
					return new Promise((n) => {
						window.setTimeout(n, o);
					});
				}
				const E = ['file', 'reset', 'submit', 'button', 'image', 'password'];
				function A(o, n) {
					const s = {};
					if (typeof o == 'object' && o.nodeName == 'FORM')
						for (let c = o.elements.length - 1; c >= 0; c--) {
							const e = o.elements[c];
							(typeof n == 'function' && !n(e)) ||
								(e.name && !E.includes(e.type) && ((e.type != 'checkbox' && e.type != 'radio') || e.checked) && (s[e.name] = e.value));
						}
					return s;
				}
				function m(o, n, s) {
					if (typeof o == 'object' && o.nodeName == 'FORM')
						for (let c = o.elements.length - 1; c >= 0; c--) {
							const e = o.elements[c];
							(typeof s == 'function' && !s(e)) || (e.name && !E.includes(e.type) && e.addEventListener('change', n));
						}
				}
				function a(o, n) {
					if (typeof o == 'object' && o.nodeName == 'FORM')
						for (let s = o.elements.length - 1; s >= 0; s--) {
							const c = o.elements[s];
							c.name && !E.includes(c.type) && c.removeEventListener('change', n);
						}
				}
			},
			'../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'(_, P, d) {
				d.d(P, { Y: () => A });
				var l = d('../../node_modules/mobx/dist/mobx.esm.js'),
					R = d('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/StorageStore/StorageStore.js'),
					L = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					y = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js'),
					j = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					O = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js'),
					x = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
					q = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
					D = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js');
				class I {
					constructor(a) {
						(this.focusedInput = void 0), (this.input = void 0), (this.source = 'input');
						const { services: o } = a || {};
						(this.locks = { terms: new p(!1), facets: new p(!1) }),
							(this.url = o.urlManager),
							(0, l.Gn)(this, { focusedInput: l.sH, locks: l.sH, input: l.sH, reset: l.XI });
					}
					reset() {
						(this.input = void 0), this.locks.terms.reset(), this.locks.facets.reset();
					}
				}
				class p {
					constructor(a = !1) {
						this.state = this.startState = a;
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
				class v extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(a) {
						const { data: o } = a || {},
							{ autocomplete: n, search: s } = o?.autocomplete || {},
							c = [...(n?.alternatives ? n.alternatives : []).map((t) => t.text)];
						n?.correctedQuery && s?.query && n.correctedQuery.toLowerCase() != s.query.toLowerCase() && c.unshift(n.correctedQuery),
							s?.query && c.unshift(s.query);
						const e = [];
						c.map((t, r) =>
							e.push(
								new k({ ...a, data: { term: { active: r === 0, value: t }, terms: e }, functions: a.functions, state: a.state, type: 'suggested' })
							)
						),
							super(...e);
					}
				}
				class k {
					constructor(a) {
						const { services: o, functions: n, state: s, data: c, type: e } = a || {},
							{ term: t, terms: r } = c || {};
						(this.active = t?.active),
							(this.value = t?.value),
							(this.type = e),
							(this.url = o?.urlManager?.set({ query: this.value })),
							(this.preview = () => {
								n.resetTerms(),
									r.map((i) => {
										i.active = !1;
									}),
									(s.rootState.source = e),
									(this.active = !0),
									s.rootState.locks.terms.lock(),
									s.rootState.locks.facets.unlock(),
									this.url?.set({ query: this.value }).go();
							}),
							(0, l.Gn)(this, { active: l.sH, value: l.sH });
					}
				}
				class N extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(a) {
						const { data: o } = a || {},
							{ queries: n } = o || {},
							s = [];
						n?.map((c) => {
							s.push(new k({ ...a, data: { term: { active: !1, value: c }, terms: s }, functions: a.functions, state: a.state, type: 'historical' }));
						}),
							super(...s);
					}
				}
				class M extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(a) {
						const o = [],
							{ data: n } = a || {},
							{ trending: s } = n?.trending || {};
						s?.queries?.map((c) => {
							o.push(
								new k({
									...a,
									data: { term: { active: !1, value: c.searchQuery }, terms: o },
									functions: a.functions,
									state: a.state,
									type: 'popular',
								})
							);
						}),
							super(...o);
					}
				}
				class H {
					constructor(a) {
						const { services: o, data: n } = a || {},
							{ search: s, autocomplete: c } = n?.autocomplete || {},
							e = {};
						s?.query && ((this.query = new w(o.urlManager, s.query)), (e.query = l.sH)),
							c?.correctedQuery && ((this.correctedQuery = new w(o.urlManager, c.correctedQuery)), (e.correctedQuery = l.sH)),
							s?.subject && ((this.subject = new w(o.urlManager, s.subject)), (e.subject = l.sH)),
							(this.matchType = s?.matchType),
							(e.matchType = l.sH),
							(0, l.Gn)(this, e);
					}
				}
				class w {
					constructor(a, o) {
						(this.string = o), (this.url = a.set({ query: this.string })), (0, l.Gn)(this, { string: l.sH });
					}
				}
				var F = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js');
				class b extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(a) {
						const { services: o, state: n } = a || {},
							s = new F.pC({ ...a, services: { ...o, urlManager: o.urlManager.remove('filter') } });
						s.forEach((c) => {
							c.values?.forEach((e) => {
								e.preview = () => {
									s.map((t) => {
										(t.filtered = !1),
											t.values?.map((r) => {
												r.filtered = !1;
											});
									}),
										(c.filtered = !0),
										(e.filtered = !0),
										n?.autocomplete.locks.facets.lock(),
										e.url.go();
								};
							});
						}),
							super(...s);
					}
				}
				var E = d('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class A extends L.K {
					constructor(a, o) {
						if ((super(a), typeof o != 'object' || typeof o.urlManager?.subscribe != 'function'))
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = o),
							(this.state = new I({ services: this.services })),
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
						const a = this.config.settings?.history?.limit;
						if (a && this.config.settings?.history?.enabled !== !1) {
							const o = new y.E({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
							this.history = new N({
								services: this.services,
								functions: {
									resetTerms: () => {
										this.resetTerms();
									},
								},
								state: { rootState: this.state },
								data: { queries: o.getStoredData(a) },
							});
						} else this.history = [];
					}
					resetTerms() {
						this.resetSuggestions(), this.resetTrending(), this.resetHistory();
					}
					resetSuggestions() {
						this.terms?.forEach((a) => (a.active = !1));
					}
					resetTrending() {
						this.trending?.forEach((a) => (a.active = !1));
					}
					resetHistory() {
						this.history?.forEach((a) => (a.active = !1));
					}
					setService(a, o) {
						this.services[a] &&
							o &&
							((this.services[a] = o),
							a === 'urlManager' &&
								((this.state.url = o),
								this.history?.forEach((n) => {
									n.url = o.set({ query: n.value });
								})));
					}
					updateTrendingTerms(a) {
						this.trending = new M({
							services: this.services,
							functions: {
								resetTerms: () => {
									this.resetTerms();
								},
							},
							state: { rootState: this.state },
							data: { trending: a },
						});
					}
					update(a) {
						const { meta: o, search: n } = a || {};
						(this.meta = new E.l({ data: { meta: o } })),
							n?.search && (this.state.url = this.services.urlManager = this.services.urlManager.set('query', n.search.query)),
							this.state.locks.terms.locked ||
								((this.terms = new v({
									config: this.config,
									services: this.services,
									functions: {
										resetTerms: () => {
											this.resetTerms();
										},
									},
									state: { rootState: this.state },
									data: { autocomplete: n },
								})),
								n?.autocomplete && this.state.locks.terms.lock()),
							(this.merchandising = new j.W({ data: { search: n } })),
							(this.search = new H({ config: this.config, services: this.services, data: { autocomplete: n } })),
							this.state.locks.facets.locked ||
								(this.facets = new b({
									config: this.config,
									services: this.services,
									stores: { storage: this.storage },
									state: { autocomplete: this.state },
									data: { search: n, meta: this.meta.data },
								})),
							(this.filters = new O.Al({ config: this.config, services: this.services, data: { search: n, meta: this.meta.data } })),
							(this.results = new x.vP({ config: this.config, state: { loaded: this.loaded }, data: { search: n, meta: this.meta.data } })),
							((this.results.length === 0 && !this.trending.filter((s) => s.active).length) || this.terms?.filter((s) => s.active).length) &&
								this.resetTrending(),
							(this.pagination = new q.a3({ services: this.services, data: { search: n, meta: this.meta.data } })),
							(this.sorting = new D.q({ services: this.services, data: { search: n, meta: this.meta.data } })),
							(this.error = void 0),
							(this.loaded = !!n?.pagination);
					}
				}
			},
		},
	]);
})();
