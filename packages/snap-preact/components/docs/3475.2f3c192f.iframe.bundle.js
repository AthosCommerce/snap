'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3475],
		{
			'./src/create/createFinderController.ts'(_, C, n) {
				n.r(C), n.d(C, { default: () => j });
				var L = n('../../node_modules/deepmerge/dist/cjs.js'),
					x = n.n(L),
					M = n('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					O = n('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					F = n('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/getParams.js'),
					U = n('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js');
				const T = {
					id: 'finder',
					beacon: { enabled: !0 },
					globals: { pagination: { pageSize: 0 } },
					fields: [],
					persist: { enabled: !1, lockSelections: !0, expiration: 0 },
				};
				class B extends O.r {
					constructor(e, { client: t, store: i, urlManager: a, eventManager: s, profiler: d, logger: p, tracker: y }, g) {
						super(e, { client: t, store: i, urlManager: a, eventManager: s, profiler: d, logger: p, tracker: y }, g),
							(this.type = U.k.finder),
							(this.find = async () => {
								await this.store.save();
								try {
									await this.eventManager.fire('beforeFind', { controller: this }), (window.location.href = this.urlManager.href);
								} catch (r) {
									r?.message == 'cancelled'
										? this.log.warn("'beforeFind' middleware cancelled")
										: (this.log.error("error in 'beforeFind' middleware"), this.log.error(r));
								}
							}),
							(this.reset = () => {
								this.store.reset(), this.urlManager.remove('filter').go(), this.store.setService('urlManager', this.urlManager);
							}),
							(this.search = async () => {
								try {
									if ((this.initialized || (await this.init()), this.store.persisted)) return;
									const r = this.params;
									this.store.loading = !0;
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: r });
									} catch (c) {
										if (c?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), c);
									}
									const m = this.profiler.create({ type: 'event', name: 'search', context: r }).start(),
										{ meta: u, search: f } = await this.client.finder(r);
									m.stop(), this.log.profile(m);
									const o = this.profiler.create({ type: 'event', name: 'afterSearch', context: r }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: r, response: { meta: u, search: f } });
									} catch (c) {
										if (c?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), o.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), c);
									}
									o.stop(), this.log.profile(o), this.store.update({ meta: u, search: f });
									const h = this.profiler.create({ type: 'event', name: 'afterStore', context: r }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: r, response: { meta: u, search: f } });
									} catch (c) {
										if (c?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), h.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), c);
									}
									h.stop(), this.log.profile(h);
								} catch (r) {
									if (r)
										if (r.err && r.fetchDetails) {
											switch (r.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: M.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: M.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: M.B.ERROR, message: r.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(r.err, r.fetchDetails);
										} else
											(this.store.error = { type: M.B.ERROR, message: `Something went wrong... - ${r}` }), this.log.error(r), this.handleError(r);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.config = x()(T, this.config)),
							this.store.setConfig(this.config),
							this.config.url && (this.urlManager = this.urlManager.withConfig((r) => ({ ...r, urlRoot: this.config.url }))),
							this.use(this.config),
							this.store.loadPersisted();
					}
					get params() {
						const e = this.urlManager.state,
							{ userId: t, sessionId: i, pageLoadId: a } = this.tracker.getContext(),
							s = {};
						t && (s.userId = t), i && (s.sessionId = i), a && (s.pageLoadId = a), (s.domain = window.location.href);
						const d = { facets: { include: this.config.fields.map((y) => y.field), autoDrillDown: !1 }, tracking: s };
						return x()({ ...(0, F.j)(e) }, x()(d, this.config.globals));
					}
				}
				var H = n('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					$ = n('../../node_modules/mobx/dist/mobx.esm.js'),
					k = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/StorageStore/StorageStore.js'),
					K = n('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					N = n('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js');
				class J extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(e) {
						const t = e.config,
							{ services: i, data: a, stores: s, state: d } = e || {},
							{ storage: p } = s || {},
							{ search: y, meta: g, selections: r } = a || {},
							{ facets: m } = y || {},
							u = [];
						r?.length
							? t.fields.forEach((f) => {
									const o = r.find((h) => h.facet.field === f.field);
									if (o) {
										const { facet: h, selected: c } = o || {};
										if (h?.hierarchyDelimiter)
											r.forEach((v, S) => {
												const w = f?.levels || h?.values[h?.values.length - 1]?.value.split(h.hierarchyDelimiter),
													b = { index: S, label: f.levels ? w[S] : '', key: `ss-${S}` },
													I = R(t.id, h.field);
												p.set(`${I}.${b.key}.values`, v.data), p.set(`${I}.${b.key}.selected`, v.selected);
												const A = new P({ config: b, services: i, stores: s, state: d, data: { id: t.id, facet: h } });
												t.persist?.lockSelections && (A.disabled = !0),
													v.selected && (i.urlManager = i.urlManager.set(`filter.${v.facet.field}`, v.selected)),
													u.push(A);
											});
										else {
											const v = new E({ config: f, services: i, stores: s, state: d, data: { id: t.id, facet: h } });
											(v.selected = c),
												v.storage.set('selected', c),
												(v.data = h.values),
												c && (i.urlManager = i.urlManager.set(`filter.${h.field}`, c)),
												t.persist?.lockSelections && (v.disabled = !0),
												u.push(v);
										}
									}
							  })
							: m &&
							  g &&
							  (t?.fields &&
									m.sort((f, o) => {
										const h = t.fields.map((c) => c.field);
										return h.indexOf(f.field) - h.indexOf(o.field);
									}),
							  t?.fields?.forEach((f) => {
									let o = m.filter((c) => c.field == f.field).pop();
									if (((o = { ...((g?.facets && g.facets[f.field]) || {}), ...o }), o?.display === 'hierarchy')) {
										const c = o.values?.filter((S) => S.filtered).pop();
										if (c) {
											const S = c.value?.split(o?.hierarchyDelimiter).length;
											o.values = o.values?.filter(
												(w, b) => (w.value && w.value.split(o?.hierarchyDelimiter).length > S) || b == o.values?.length - 1
											);
										}
										(f?.levels || (o?.values && o?.values[o?.values?.length - 1].value?.split(o.hierarchyDelimiter)))?.map((S, w) => {
											const b = { index: w, label: f.levels ? S : '', key: `ss-${w}` };
											u.push(new P({ config: b, services: i, stores: s, state: d, data: { id: t.id, facet: o } }));
										});
									} else u.push(new E({ config: f, services: i, stores: s, state: d, data: { id: t.id, facet: o } }));
							  })),
							super(...u);
					}
				}
				class D {
					constructor(e) {
						(this.filtered = !1), (this.collapsed = !1), (this.display = ''), (this.disabled = !1), (this.selected = ''), (this.custom = {});
						const { config: t, services: i, stores: a, state: s, data: d } = e || {},
							{ storage: p } = a || {},
							{ id: y, facet: g } = d || {},
							{ persisted: r } = s;
						(this.services = i),
							(this.persisted = r),
							(this.id = y),
							(this.config = t),
							(this.facet = g),
							(this.type = g.type),
							(this.field = g.field),
							(this.filtered = g.filtered),
							(this.collapsed = g.collapsed),
							(this.display = g.display),
							(this.label = g.label),
							(this.multiple = g.multiple),
							(this.storage = {
								key: R(this.id, this.field),
								get: function (m) {
									const u = this.key + (m ? `.${m}` : '');
									return p.get(u);
								},
								set: function (m, u) {
									const f = this.key + (m ? `.${m}` : '');
									return p.set(f, u);
								},
							});
					}
					get values() {
						const e = [...(this.data || [])];
						return e.unshift({ filtered: !1, value: '', label: this.config.label || this.label }), e;
					}
				}
				class E extends D {
					constructor(e) {
						super(e);
						const { data: t } = e || {},
							{ facet: i } = t || {};
						this.storage.set('values', i.values);
						const a = this.storage.get();
						(this.data = a.values || []), (this.disabled = !this.values.length), (this.selected = this.disabled ? '' : a.selected || '');
					}
					select(e = '') {
						(this.selected = e),
							this.storage.set('selected', e),
							(this.persisted = !1),
							e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
					}
				}
				class P extends D {
					constructor(e) {
						super(e);
						const { data: t } = e || {},
							{ facet: i } = t || {};
						this.hierarchyDelimiter = i.hierarchyDelimiter;
						let a = this.storage.get();
						if (!a) this.storage.set(`${this.config.key}.values`, i.values), (a = this.storage.get());
						else if (a[this.config.key]?.values) this.selected = a[this.config.key]?.selected || '';
						else {
							const s = this.storage.get(),
								d = Object.keys(s).map((m, u) => `ss-${u}`);
							!d.includes(this.config.key) && d.push(this.config.key);
							const p = Object.keys(s).filter((m) => s[m].selected),
								y = p[p.length - 1],
								g = d.indexOf(this.config.key),
								r = d.indexOf(y);
							r != -1 && g == r + 1 ? this.storage.set(`${this.config.key}.values`, i.values) : (this.disabled = !0);
						}
						this.data = a[this.config.key]?.values || [];
					}
					select(e = '') {
						(this.selected = e), (this.persisted = !1);
						const t = this.config.index,
							i = this.storage.get(),
							a = Object.keys(i).slice(t);
						Object.keys(i)
							.reverse()
							.forEach((s) => {
								s == this.config.key ? this.storage.set(`${s}.selected`, e) : a.includes(s) && this.storage.set(`${s}`, {}),
									(e = e || this.storage.get(`${s}.selected`));
							}),
							e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
					}
				}
				function R(l, e) {
					return `ss-finder-${l}.${e}`;
				}
				var z = n('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class G extends K.K {
					constructor(e, t) {
						if (
							(super(e),
							(this.persisted = !1),
							(this.save = () => {}),
							(this.reset = () => {
								this.config.persist?.enabled && (this.persistedStorage?.clear(), (this.persisted = !1)),
									this.services.urlManager.state.filter && (this.storage.clear(), (this.selections = []), (this.loaded = !1));
							}),
							typeof t != 'object' || typeof t.urlManager?.subscribe != 'function')
						)
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = t),
							this.config.persist?.enabled && (this.persistedStorage = new k.t({ type: 'local', key: `athos-${this.config.id}-persisted` })),
							(this.storage = new k.t()),
							this.update(),
							(0, $.Gn)(this, { selections: $.sH, pagination: $.sH });
					}
					setService(e, t) {
						this.services[e] && t && (this.services[e] = t);
					}
					loadPersisted() {
						if (this.config.persist?.enabled && this.persistedStorage) {
							const e = this.persistedStorage.get('date'),
								t = this.persistedStorage.get('data'),
								i = this.persistedStorage.get('config'),
								a = this.persistedStorage.get('selections'),
								s = this.config.persist.expiration && Date.now() - e > this.config.persist.expiration;
							if (t && a.filter((d) => d.selected).length) {
								const d = JSON.stringify({ ...i, plugins: [], middleware: {} }),
									p = JSON.stringify({ ...this.config, plugins: [], middleware: {} });
								d === p && !s ? (this.update(t, a), (this.persisted = !0), this.services.urlManager.go()) : this.reset();
							}
						}
					}
					update(e, t) {
						const { meta: i, search: a } = e || {};
						(this.error = void 0),
							(this.loaded = !!a?.pagination),
							(this.meta = new z.l({ data: { meta: i || {} } })),
							(this.pagination = new N.a3({ config: this.config, services: this.services, data: { search: a, meta: this.meta.data } })),
							(this.selections = new J({
								config: this.config,
								services: this.services,
								stores: { storage: this.storage },
								state: { persisted: this.persisted },
								data: { search: a, meta: this.meta.data, selections: t || [] },
							})),
							(this.save = () => {
								this.config.persist?.enabled &&
									this.persistedStorage &&
									this?.selections?.filter((s) => s.selected).length &&
									(this.persistedStorage.set('config', this.config),
									this.persistedStorage.set('data', e),
									this.persistedStorage.set('date', Date.now()),
									this.persistedStorage.set(
										'selections',
										this.selections.map((s) => ({ selected: s.selected, data: s.data, facet: s.facet }))
									));
							}),
							(this.error = void 0),
							(this.loaded = !!a?.pagination);
					}
				}
				var V = n('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					W = n('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					X = n('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					Q = n('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					Y = n('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					Z = n('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					q = n('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const j = (l, e) => {
					const t = (e?.urlManager || new V.V(new W.E(l.url), X.X)).detach(!0);
					return (
						l.mode && l.client && ((l.client.config = l.client.config || {}), (l.client.config.mode = l.mode)),
						new B(
							l.controller,
							{
								client: e?.client || new H.K(l.client.globals, l.client.config),
								store: e?.store || new G(l.controller, { urlManager: t }),
								urlManager: t,
								eventManager: e?.eventManager || new Q.E(),
								profiler: e?.profiler || new Y.U(),
								logger: e?.logger || new Z.V({ mode: l.mode }),
								tracker: e?.tracker || new q.J(l.client.globals),
							},
							l.context
						)
					);
				};
				(Object.getOwnPropertyDescriptor(j, 'name') || {}).writable || Object.defineProperty(j, 'name', { value: 'default', configurable: !0 });
			},
		},
	]);
})();
