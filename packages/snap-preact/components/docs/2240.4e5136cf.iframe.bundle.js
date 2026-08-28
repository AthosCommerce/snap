'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2240],
		{
			'../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'(F, P, l) {
				l.d(P, { Z: () => N });
				var h = l('../../node_modules/deepmerge/dist/cjs.js'),
					T = l.n(h),
					p = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					R = l('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/StorageStore/StorageStore.js'),
					L = l('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					j = l('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/getParams.js'),
					q = l('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js'),
					x = l('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinProductLink.js'),
					I = l('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/isClickWithinBannerLink.js');
				const v = 'ss-autocomplete-input',
					f = 200,
					O = 13,
					S = 27,
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
				class N extends L.r {
					constructor(n, s, a) {
						super(n, s, a),
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
										const c = { responseId: t, banners: [{ uid: r }], results: [] };
										this.eventManager.fire('track.banner.impression', { controller: this, product: { uid: r }, trackEvent: c }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: c, siteId: this.config.globals?.siteId }),
											(this.events[t].banner[r] = this.events[t].banner[r] || {}),
											(this.events[t].banner[r].impression = !0);
									},
									click: (e, t) => {
										if (!t) {
											this.log.warn('No banner provided to track.banner.click');
											return;
										}
										const { responseId: r, uid: o } = t;
										if (!this.events[r]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if ((0, I.c)(e)) {
											if (this.events?.[r]?.banner[o]?.clickThrough) return;
											this.track.banner.clickThrough(e, t),
												(this.events[r].banner[o] = this.events[r].banner[o] || {}),
												(this.events[r].banner[o].clickThrough = !0),
												setTimeout(() => {
													this.events[r].banner[o].clickThrough = !1;
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
										const c = { responseId: r, banners: [{ uid: t }] };
										this.eventManager.fire('track.banner.clickThrough', { controller: this, event: e, product: { uid: t }, trackEvent: c }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: c, siteId: this.config.globals?.siteId }),
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
										const o = t.responseId;
										if (!this.events[o]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const c = ['product', 'banner'].includes(t.type) ? t.type : 'product',
											d = {
												type: c,
												uid: t.id ? '' + t.id : '',
												...(c === 'product'
													? {
															parentId: t.mappings.core?.parentId ? '' + t.mappings.core?.parentId : '',
															sku: t.mappings.core?.sku ? '' + t.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											m = { responseId: o, results: [d], ...(r?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: t, trackEvent: m }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.clickThrough({ data: m, siteId: this.config.globals?.siteId });
									},
									click: (e, t, r) => {
										if (!t) {
											this.log.warn('No result provided to track.product.click');
											return;
										}
										const o = t.responseId;
										if (!this.events[o]) {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										if (t.type === 'banner' && (0, I.c)(e)) {
											if (this.events?.[o]?.product[t.id]?.inlineBannerClickThrough) return;
											this.track.product.clickThrough(e, t, r),
												(this.events[o].product[t.id] = this.events[o].product[t.id] || {}),
												(this.events[o].product[t.id].inlineBannerClickThrough = !0),
												setTimeout(() => {
													this.events[o].product[t.id].inlineBannerClickThrough = !1;
												}, 1e3);
										} else if ((0, x.b)(e, t)) {
											if (this.events?.[o]?.product[t.id]?.productClickThrough) return;
											this.track.product.clickThrough(e, t, r),
												(this.events[o].product[t.id] = this.events[o].product[t.id] || {}),
												(this.events[o].product[t.id].productClickThrough = !0),
												setTimeout(() => {
													this.events[o].product[t.id].productClickThrough = !1;
												}, 1e3);
										}
									},
									impression: (e, t) => {
										if (!e) {
											this.log.warn('No result provided to track.product.impression');
											return;
										}
										const r = e.responseId,
											o = t?.quickView ? 'quickviewImpression' : 'impression';
										if (this.events[r]) {
											if (this.events?.[r]?.product[e.id]?.[o]) return;
										} else {
											this.log.warn('No responseId found in controller, ensure correct controller is used');
											return;
										}
										const c = ['product', 'banner'].includes(e.type) ? e.type : 'product',
											d = {
												type: c,
												uid: e.id ? '' + e.id : '',
												...(c === 'product'
													? {
															parentId: e.mappings.core?.parentId ? '' + e.mappings.core?.parentId : '',
															sku: e.mappings.core?.sku ? '' + e.mappings.core?.sku : void 0,
													  }
													: {}),
											},
											m = { responseId: r, results: [d], banners: [], ...(t?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.impression', { controller: this, product: e, trackEvent: m }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.impression({ data: m, siteId: this.config.globals?.siteId }),
											(this.events[r].product[e.id] = this.events[r].product[e.id] || {}),
											(this.events[r].product[e.id][o] = !0);
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
										const o = {
												parentId: e.display.mappings.core?.parentId ? '' + e.display.mappings.core?.parentId : '',
												uid: e.display.mappings.core?.uid || e.display.id,
												sku: e.display.mappings.core?.sku,
												qty: e.quantity || 1,
												price: Number(e.display.mappings.core?.price) || 0,
											},
											c = { responseId: r, results: [o], ...(t?.quickView ? { quickView: !0 } : {}) };
										this.eventManager.fire('track.product.addToCart', { controller: this, product: e, trackEvent: c }),
											this.config.beacon?.enabled && this.tracker.events.autocomplete.addToCart({ data: c, siteId: this.config.globals?.siteId });
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
										if (e.keyCode == O) {
											const t = e.target;
											let r = this.store.services.urlManager;
											for (e.preventDefault(); this.store.loading; ) await y(f);
											this.store.search.correctedQuery && (r = r?.set(M, this.store.search.correctedQuery.string)),
												(r = r?.set('query', t.value)),
												await y(f + 1);
											try {
												await this.eventManager.fire('beforeSubmit', { controller: this, input: t });
											} catch (o) {
												if (o?.message == 'cancelled') {
													this.log.warn("'beforeSubmit' middleware cancelled");
													return;
												} else this.log.error("error in 'beforeSubmit' middleware"), console.error(o);
											}
											window.location.href = r?.href || '';
										}
									},
									escKey: (e) => {
										e.keyCode == S && (e.target.blur(), this.setFocused());
									},
									focus: (e) => {
										e.stopPropagation(),
											setTimeout(() => {
												this.setFocused(e.target);
											});
									},
									formSubmit: async (e) => {
										const t = e.target,
											r = t.querySelector(`input[${v}]`);
										for (e.preventDefault(); this.store.loading; ) await y(f);
										this.store.search.correctedQuery && k(t, M, this.store.search.correctedQuery.string), await y(f + 1);
										try {
											await this.eventManager.fire('beforeSubmit', { controller: this, input: r });
										} catch (o) {
											if (o?.message == 'cancelled') {
												this.log.warn("'beforeSubmit' middleware cancelled");
												return;
											} else this.log.error("error in 'beforeSubmit' middleware"), console.error(o);
										}
										t.submit();
									},
									formElementChange: (e) => {
										const r = e.target?.form,
											o = r?.querySelector(`input[${v}]`);
										if (r && o && this.config.settings?.serializeForm) {
											const c = A(r, function (d) {
												return d != o;
											});
											this.store.setService('urlManager', this.store.services.urlManager.reset().withGlobals(c)),
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
												document.querySelectorAll(this.config.selector).forEach((d) => {
													d.value = t;
												}),
											clearTimeout(this.handlers.input.timeoutDelay);
										const r = this.store.trending?.length && this.config.settings?.trending?.enabled && this.config.settings?.trending?.showResults,
											o = this.store.history?.length && this.config.settings?.history?.enabled && this.config.settings?.history?.showResults;
										this.handlers.input.timeoutDelay = setTimeout(() => {
											t
												? (this.store.state.locks.terms.unlock(),
												  this.store.state.locks.facets.unlock(),
												  this.urlManager.set({ query: this.store.state.input }).go())
												: (this.store.reset(),
												  r ? this.store.trending[0].preview() : o ? this.store.history[0].preview() : this.urlManager.reset().go());
										}, f);
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
									const o = { limit: e?.limit || this.config.settings?.trending?.limit || 5 },
										c = this.profiler.create({ type: 'event', name: 'trending', context: o }).start();
									(t = await this.client.trending(o)),
										c.stop(),
										this.log.profile(c),
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
										{ meta: r, search: o } = await this.client.autocomplete(e);
									t.stop(), this.log.profile(t);
									const c = o.tracking.responseId;
									this.events[c] = this.events[c] || { product: {}, banner: {} };
									const d = this.store.results[0]?.responseId,
										m = d && d === c;
									if (m) {
										const u = Object.keys(this.events[c].product || {}).filter((C) => this.events[c].product?.[C]?.impression);
										this.events[c] = { product: u.reduce((C, B) => ((C[B] = { impression: !0 }), C), {}), banner: this.events[c].banner };
									} else this.events[c] = { product: {}, banner: {} };
									const b = this.profiler.create({ type: 'event', name: 'afterSearch', context: e }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: e, response: { meta: r, search: o } });
									} catch (u) {
										if (u?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), b.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), u);
									}
									if ((b.stop(), this.log.profile(b), this.store.update({ meta: r, search: o }), !m)) {
										const u = { responseId: c };
										this.config.beacon?.enabled && this.tracker.events.autocomplete.render({ data: u, siteId: this.config.globals?.siteId });
									}
									const E = this.profiler.create({ type: 'event', name: 'afterStore', context: e }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: e, response: { meta: r, search: o } });
									} catch (u) {
										if (u?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), E.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), u);
									}
									E.stop(), this.log.profile(E);
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
								const r = typeof e?.slice == 'function' ? e.slice() : [e];
								if (!e || r.length === 0) {
									this.log.warn('No products provided to autocomplete controller.addToCart');
									return;
								}
								r.forEach((o) => {
									this.track.product.addToCart(o, t);
								}),
									r.length > 0 && (await this.eventManager.fire('addToCart', { controller: this, products: r }));
							}),
							(this.config = T()(H, this.config)),
							this.config.settings?.trending?.limit &&
								typeof this.config.settings?.trending?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, trending: { enabled: !0, ...this.config.settings.trending } }),
							this.config.settings?.history?.limit &&
								typeof this.config.settings?.history?.enabled > 'u' &&
								(this.config.settings = { ...this.config.settings, history: { enabled: !0, ...this.config.settings.history } }),
							this.store.setConfig(this.config),
							this.config.settings.initializeFromUrl && ((this.store.state.input = this.urlManager.state.query), this.urlManager.reset().go()),
							(this.storage = new R.t({ type: 'session', key: `athos-controller-${this.config.id}` })),
							this.eventManager.on('afterSearch', async (e, t) => {
								if ((await t(), e.response.search.autocomplete?.query != e.controller.urlManager.state.query)) return !1;
							}),
							this.eventManager.on('beforeSubmit', async (e, t) => {
								if ((await t(), e.controller.store.loading)) return;
								const o = e.controller.store.state.input,
									c = e.controller.store.merchandising?.redirect;
								if (this.config?.settings?.redirects?.merchandising && o && c)
									return (
										this.track.redirect({ redirectURL: c, responseId: e.controller.store.merchandising?.responseId }), (window.location.href = c), !1
									);
								if (this.config?.settings?.redirects?.singleResult) {
									const { results: d } = e.controller.store,
										m = d.filter((E) => E.type == 'product'),
										b = m.length === 1 && m[0].mappings.core?.url;
									if (b) return (window.location.href = b), !1;
								}
							}),
							this.use(this.config);
					}
					get params() {
						const n = this.urlManager.state,
							s = T()({ ...(0, j.j)(n) }, this.config.globals || {}),
							{ userId: a, sessionId: e, pageLoadId: t, shopperId: r } = this.tracker.getContext();
						if (
							((s.tracking = s.tracking || {}),
							(s.tracking.domain = window.location.href),
							a && (s.tracking.userId = a),
							e && (s.tracking.sessionId = e),
							t && (s.tracking.pageLoadId = t),
							this.store.state.input && ((s.search = s.search || {}), (s.search.input = this.store.state.input)),
							this.store.state.source && ((s.search = s.search || {}), (s.search.source = this.store.state.source)),
							!this.config.globals?.personalization?.disabled)
						) {
							const o = this.tracker.cookies.cart.get();
							o.length && ((s.personalization = s.personalization || {}), (s.personalization.cart = o.join(',')));
							const c = this.tracker.cookies.viewed.get();
							c.length && ((s.personalization = s.personalization || {}), (s.personalization.lastViewed = c.join(','))),
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
						document.querySelectorAll(`input[${v}]`)?.forEach((s) => {
							s.removeEventListener('input', this.handlers.input.input),
								s.removeEventListener('keydown', this.handlers.input.enterKey),
								s.removeEventListener('keydown', this.handlers.input.escKey),
								s.removeEventListener('focus', this.handlers.input.focus),
								s.form && (s.form.removeEventListener('submit', this.handlers.input.formSubmit), g(s.form, this.handlers.input.formElementChange));
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
									s.setAttribute(v, ''),
									this.config.settings?.bind?.input && s.addEventListener('input', this.handlers.input.input),
									this.config?.settings?.initializeFromUrl && !s.value && this.store.state.input && (s.value = this.store.state.input),
									s.addEventListener('focus', this.handlers.input.focus),
									s.addEventListener('keydown', this.handlers.input.escKey);
								const a = s.form;
								let e;
								if (this.config.action)
									this.config.settings?.bind?.submit && s.addEventListener('keydown', this.handlers.input.enterKey), (e = this.config.action);
								else if (a) {
									if (
										(this.config.settings?.bind?.submit && a.addEventListener('submit', this.handlers.input.formSubmit),
										(e = a.action || ''),
										this.config.settings?.serializeForm)
									) {
										D(a, this.handlers.input.formElementChange, function (r) {
											return r != s;
										});
										const t = A(a, function (r) {
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
				function k(i, n, s) {
					const a = document.createElement('input');
					(a.type = 'hidden'), (a.name = n), (a.value = s), i.querySelector(`[type="hidden"][name="${n}"]`)?.remove(), i.append(a);
				}
				async function y(i) {
					return new Promise((n) => {
						window.setTimeout(n, i);
					});
				}
				const w = ['file', 'reset', 'submit', 'button', 'image', 'password'];
				function A(i, n) {
					const s = {};
					if (typeof i == 'object' && i.nodeName == 'FORM')
						for (let a = i.elements.length - 1; a >= 0; a--) {
							const e = i.elements[a];
							(typeof n == 'function' && !n(e)) ||
								(e.name && !w.includes(e.type) && ((e.type != 'checkbox' && e.type != 'radio') || e.checked) && (s[e.name] = e.value));
						}
					return s;
				}
				function D(i, n, s) {
					if (typeof i == 'object' && i.nodeName == 'FORM')
						for (let a = i.elements.length - 1; a >= 0; a--) {
							const e = i.elements[a];
							(typeof s == 'function' && !s(e)) || (e.name && !w.includes(e.type) && e.addEventListener('change', n));
						}
				}
				function g(i, n) {
					if (typeof i == 'object' && i.nodeName == 'FORM')
						for (let s = i.elements.length - 1; s >= 0; s--) {
							const a = i.elements[s];
							a.name && !w.includes(a.type) && a.removeEventListener('change', n);
						}
				}
			},
			'../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'(F, P, l) {
				l.d(P, { Y: () => D });
				var h = l('../../node_modules/mobx/dist/mobx.esm.js'),
					T = l('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/StorageStore/StorageStore.js'),
					p = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					R = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchHistoryStore.js'),
					L = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					j = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchFilterStore.js'),
					q = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchResultStore.js'),
					x = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js'),
					I = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchSortingStore.js');
				class v {
					constructor(i) {
						(this.focusedInput = void 0), (this.input = void 0), (this.source = 'input');
						const { services: n } = i || {};
						(this.locks = { terms: new f(!1), facets: new f(!1) }),
							(this.url = n.urlManager),
							(0, h.Gn)(this, { focusedInput: h.sH, locks: h.sH, input: h.sH, reset: h.XI });
					}
					reset() {
						(this.input = void 0), this.locks.terms.reset(), this.locks.facets.reset();
					}
				}
				class f {
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
				class O extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(i) {
						const { data: n } = i || {},
							{ autocomplete: s, search: a } = n?.autocomplete || {},
							e = [...(s?.alternatives ? s.alternatives : []).map((r) => r.text)];
						s?.correctedQuery && a?.query && s.correctedQuery.toLowerCase() != a.query.toLowerCase() && e.unshift(s.correctedQuery),
							a?.query && e.unshift(a.query);
						const t = [];
						e.map((r, o) =>
							t.push(
								new S({ ...i, data: { term: { active: o === 0, value: r }, terms: t }, functions: i.functions, state: i.state, type: 'suggested' })
							)
						),
							super(...t);
					}
				}
				class S {
					constructor(i) {
						const { services: n, functions: s, state: a, data: e, type: t } = i || {},
							{ term: r, terms: o } = e || {};
						(this.active = r?.active),
							(this.value = r?.value),
							(this.type = t),
							(this.url = n?.urlManager?.set({ query: this.value })),
							(this.preview = () => {
								s.resetTerms(),
									o.map((c) => {
										c.active = !1;
									}),
									(a.rootState.source = t),
									(this.active = !0),
									a.rootState.locks.terms.lock(),
									a.rootState.locks.facets.unlock(),
									this.url?.set({ query: this.value }).go();
							}),
							(0, h.Gn)(this, { active: h.sH, value: h.sH });
					}
				}
				class M extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(i) {
						const { data: n } = i || {},
							{ queries: s } = n || {},
							a = [];
						s?.map((e) => {
							a.push(new S({ ...i, data: { term: { active: !1, value: e }, terms: a }, functions: i.functions, state: i.state, type: 'historical' }));
						}),
							super(...a);
					}
				}
				class H extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(i) {
						const n = [],
							{ data: s } = i || {},
							{ trending: a } = s?.trending || {};
						a?.queries?.map((e) => {
							n.push(
								new S({
									...i,
									data: { term: { active: !1, value: e.searchQuery }, terms: n },
									functions: i.functions,
									state: i.state,
									type: 'popular',
								})
							);
						}),
							super(...n);
					}
				}
				class N {
					constructor(i) {
						const { services: n, data: s } = i || {},
							{ search: a, autocomplete: e } = s?.autocomplete || {},
							t = {};
						a?.query && ((this.query = new k(n.urlManager, a.query)), (t.query = h.sH)),
							e?.correctedQuery && ((this.correctedQuery = new k(n.urlManager, e.correctedQuery)), (t.correctedQuery = h.sH)),
							a?.subject && ((this.subject = new k(n.urlManager, a.subject)), (t.subject = h.sH)),
							(this.matchType = a?.matchType),
							(t.matchType = h.sH),
							(0, h.Gn)(this, t);
					}
				}
				class k {
					constructor(i, n) {
						(this.string = n), (this.url = i.set({ query: this.string })), (0, h.Gn)(this, { string: h.sH });
					}
				}
				var y = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchFacetStore.js');
				class w extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(i) {
						const { services: n, state: s } = i || {},
							a = new y.pC({ ...i, services: { ...n, urlManager: n.urlManager.remove('filter') } });
						a.forEach((e) => {
							e.values?.forEach((t) => {
								t.preview = () => {
									a.map((r) => {
										(r.filtered = !1),
											r.values?.map((o) => {
												o.filtered = !1;
											});
									}),
										(e.filtered = !0),
										(t.filtered = !0),
										s?.autocomplete.locks.facets.lock(),
										t.url.go();
								};
							});
						}),
							super(...a);
					}
				}
				var A = l('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class D extends p.K {
					constructor(i, n) {
						if ((super(i), typeof n != 'object' || typeof n.urlManager?.subscribe != 'function'))
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = n),
							(this.state = new v({ services: this.services })),
							(this.storage = new T.t()),
							(this.trending = []),
							(this.history = []),
							this.initHistory(),
							this.reset(),
							(0, h.Gn)(this, {
								state: h.sH,
								search: h.sH,
								terms: h.sH,
								facets: h.sH,
								filters: h.sH,
								merchandising: h.sH,
								results: h.sH,
								pagination: h.sH,
								sorting: h.sH,
								history: h.sH,
								trending: h.sH,
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
							const n = new R.E({ services: this.services, config: { id: this.config.id, globals: this.config.globals } });
							this.history = new M({
								services: this.services,
								functions: {
									resetTerms: () => {
										this.resetTerms();
									},
								},
								state: { rootState: this.state },
								data: { queries: n.getStoredData(i) },
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
					setService(i, n) {
						this.services[i] &&
							n &&
							((this.services[i] = n),
							i === 'urlManager' &&
								((this.state.url = n),
								this.history?.forEach((s) => {
									s.url = n.set({ query: s.value });
								})));
					}
					updateTrendingTerms(i) {
						this.trending = new H({
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
						const { meta: n, search: s } = i || {};
						(this.meta = new A.l({ data: { meta: n } })),
							s?.search && (this.state.url = this.services.urlManager = this.services.urlManager.set('query', s.search.query)),
							this.state.locks.terms.locked ||
								((this.terms = new O({
									config: this.config,
									services: this.services,
									functions: {
										resetTerms: () => {
											this.resetTerms();
										},
									},
									state: { rootState: this.state },
									data: { autocomplete: s },
								})),
								s?.autocomplete && this.state.locks.terms.lock()),
							(this.merchandising = new L.W({ data: { search: s } })),
							(this.search = new N({ config: this.config, services: this.services, data: { autocomplete: s } })),
							this.state.locks.facets.locked ||
								(this.facets = new w({
									config: this.config,
									services: this.services,
									stores: { storage: this.storage },
									state: { autocomplete: this.state },
									data: { search: s, meta: this.meta.data },
								})),
							(this.filters = new j.Al({ config: this.config, services: this.services, data: { search: s, meta: this.meta.data } })),
							(this.results = new q.vP({ config: this.config, state: { loaded: this.loaded }, data: { search: s, meta: this.meta.data } })),
							((this.results.length === 0 && !this.trending.filter((a) => a.active).length) || this.terms?.filter((a) => a.active).length) &&
								this.resetTrending(),
							(this.pagination = new x.a3({ services: this.services, data: { search: s, meta: this.meta.data } })),
							(this.sorting = new I.q({ services: this.services, data: { search: s, meta: this.meta.data } })),
							(this.error = void 0),
							(this.loaded = !!s?.pagination);
					}
				}
			},
		},
	]);
})();
