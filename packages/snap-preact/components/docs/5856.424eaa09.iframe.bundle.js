'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5856],
		{
			'./src/create/createFinderController.ts'(_, j, a) {
				a.r(j), a.d(j, { default: () => R });
				var L = a('../../node_modules/deepmerge/dist/cjs.js'),
					x = a.n(L),
					b = a('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					F = a('../../node_modules/@athoscommerce/snap-controller/dist/esm/Abstract/AbstractController.js'),
					U = a('../../node_modules/@athoscommerce/snap-controller/dist/esm/utils/getParams.js'),
					T = a('../../node_modules/@athoscommerce/snap-controller/dist/esm/types.js');
				const B = {
					id: 'finder',
					beacon: { enabled: !0 },
					globals: { pagination: { pageSize: 0 } },
					fields: [],
					persist: { enabled: !1, lockSelections: !0, expiration: 0 },
				};
				class H extends F.r {
					constructor(e, s, i) {
						super(e, s, i),
							(this.type = T.k.finder),
							(this.find = async () => {
								await this.store.save();
								try {
									await this.eventManager.fire('beforeFind', { controller: this }), (window.location.href = this.urlManager.href);
								} catch (t) {
									t?.message == 'cancelled'
										? this.log.warn("'beforeFind' middleware cancelled")
										: (this.log.error("error in 'beforeFind' middleware"), this.log.error(t));
								}
							}),
							(this.reset = () => {
								this.store.reset(), this.urlManager.remove('filter').go(), this.store.setService('urlManager', this.urlManager);
							}),
							(this.search = async () => {
								try {
									if ((this.initialized || (await this.init()), this.store.persisted)) return;
									const t = this.params;
									this.store.loading = !0;
									try {
										await this.eventManager.fire('beforeSearch', { controller: this, request: t });
									} catch (d) {
										if (d?.message == 'cancelled') {
											this.log.warn("'beforeSearch' middleware cancelled");
											return;
										} else throw (this.log.error("error in 'beforeSearch' middleware"), d);
									}
									const r = this.profiler.create({ type: 'event', name: 'search', context: t }).start(),
										{ meta: l, search: h } = await this.client.finder(t);
									r.stop(), this.log.profile(r);
									const p = this.profiler.create({ type: 'event', name: 'afterSearch', context: t }).start();
									try {
										await this.eventManager.fire('afterSearch', { controller: this, request: t, response: { meta: l, search: h } });
									} catch (d) {
										if (d?.message == 'cancelled') {
											this.log.warn("'afterSearch' middleware cancelled"), p.stop();
											return;
										} else throw (this.log.error("error in 'afterSearch' middleware"), d);
									}
									p.stop(), this.log.profile(p), this.store.update({ meta: l, search: h });
									const c = this.profiler.create({ type: 'event', name: 'afterStore', context: t }).start();
									try {
										await this.eventManager.fire('afterStore', { controller: this, request: t, response: { meta: l, search: h } });
									} catch (d) {
										if (d?.message == 'cancelled') {
											this.log.warn("'afterStore' middleware cancelled"), c.stop();
											return;
										} else throw (this.log.error("error in 'afterStore' middleware"), d);
									}
									c.stop(), this.log.profile(c);
								} catch (t) {
									if (t)
										if (t.err && t.fetchDetails) {
											switch (t.fetchDetails.status) {
												case 429: {
													this.store.error = { code: 429, type: b.B.WARNING, message: 'Too many requests try again later' };
													break;
												}
												case 500: {
													this.store.error = { code: 500, type: b.B.ERROR, message: 'Invalid Search Request or Service Unavailable' };
													break;
												}
												default: {
													this.store.error = { type: b.B.ERROR, message: t.err.message };
													break;
												}
											}
											this.log.error(this.store.error), this.handleError(t.err, t.fetchDetails);
										} else
											(this.store.error = { type: b.B.ERROR, message: `Something went wrong... - ${t}` }), this.log.error(t), this.handleError(t);
								} finally {
									this.store.loading = !1;
								}
							}),
							(this.config = x()(B, this.config)),
							this.store.setConfig(this.config),
							this.config.url && (this.urlManager = this.urlManager.withConfig((t) => ({ ...t, urlRoot: this.config.url }))),
							this.use(this.config),
							this.store.loadPersisted();
					}
					get params() {
						const e = this.urlManager.state,
							{ userId: s, sessionId: i, pageLoadId: t } = this.tracker.getContext(),
							r = {};
						s && (r.userId = s), i && (r.sessionId = i), t && (r.pageLoadId = t), (r.domain = window.location.href);
						const l = { facets: { include: this.config.fields.map((p) => p.field), autoDrillDown: !1 }, tracking: r };
						return x()({ ...(0, U.j)(e) }, x()(l, this.config.globals));
					}
				}
				var O = a('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					$ = a('../../node_modules/mobx/dist/mobx.esm.js'),
					C = a('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/StorageStore/StorageStore.js'),
					K = a('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Abstract/AbstractStore.js'),
					N = a('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchPaginationStore.js');
				class J extends Array {
					static get [Symbol.species]() {
						return Array;
					}
					constructor(e) {
						const s = e.config,
							{ services: i, data: t, stores: r, state: l } = e || {},
							{ storage: h } = r || {},
							{ search: p, meta: c, selections: d } = t || {},
							{ facets: m } = p || {},
							v = [];
						d?.length
							? s.fields.forEach((g) => {
									const n = d.find((f) => f.facet.field === g.field);
									if (n) {
										const { facet: f, selected: y } = n || {};
										if (f?.hierarchyDelimiter)
											d.forEach((u, S) => {
												const w = g?.levels || f?.values[f?.values.length - 1]?.value.split(f.hierarchyDelimiter),
													M = { index: S, label: g.levels ? w[S] : '', key: `ss-${S}` },
													I = P(s.id, f.field);
												h.set(`${I}.${M.key}.values`, u.data), h.set(`${I}.${M.key}.selected`, u.selected);
												const A = new E({ config: M, services: i, stores: r, state: l, data: { id: s.id, facet: f } });
												s.persist?.lockSelections && (A.disabled = !0),
													u.selected && (i.urlManager = i.urlManager.set(`filter.${u.facet.field}`, u.selected)),
													v.push(A);
											});
										else {
											const u = new D({ config: g, services: i, stores: r, state: l, data: { id: s.id, facet: f } });
											(u.selected = y),
												u.storage.set('selected', y),
												(u.data = f.values),
												y && (i.urlManager = i.urlManager.set(`filter.${f.field}`, y)),
												s.persist?.lockSelections && (u.disabled = !0),
												v.push(u);
										}
									}
							  })
							: m &&
							  c &&
							  (s?.fields &&
									m.sort((g, n) => {
										const f = s.fields.map((y) => y.field);
										return f.indexOf(g.field) - f.indexOf(n.field);
									}),
							  s?.fields?.forEach((g) => {
									let n = m.filter((y) => y.field == g.field).pop();
									if (((n = { ...((c?.facets && c.facets[g.field]) || {}), ...n }), n?.display === 'hierarchy')) {
										const y = n.values?.filter((S) => S.filtered).pop();
										if (y) {
											const S = y.value?.split(n?.hierarchyDelimiter).length;
											n.values = n.values?.filter(
												(w, M) => (w.value && w.value.split(n?.hierarchyDelimiter).length > S) || M == n.values?.length - 1
											);
										}
										(g?.levels || (n?.values && n?.values[n?.values?.length - 1].value?.split(n.hierarchyDelimiter)))?.map((S, w) => {
											const M = { index: w, label: g.levels ? S : '', key: `ss-${w}` };
											v.push(new E({ config: M, services: i, stores: r, state: l, data: { id: s.id, facet: n } }));
										});
									} else v.push(new D({ config: g, services: i, stores: r, state: l, data: { id: s.id, facet: n } }));
							  })),
							super(...v);
					}
				}
				class k {
					constructor(e) {
						(this.filtered = !1), (this.collapsed = !1), (this.display = ''), (this.disabled = !1), (this.selected = ''), (this.custom = {});
						const { config: s, services: i, stores: t, state: r, data: l } = e || {},
							{ storage: h } = t || {},
							{ id: p, facet: c } = l || {},
							{ persisted: d } = r;
						(this.services = i),
							(this.persisted = d),
							(this.id = p),
							(this.config = s),
							(this.facet = c),
							(this.type = c.type),
							(this.field = c.field),
							(this.filtered = c.filtered),
							(this.collapsed = c.collapsed),
							(this.display = c.display),
							(this.label = c.label),
							(this.multiple = c.multiple),
							(this.storage = {
								key: P(this.id, this.field),
								get: function (m) {
									const v = this.key + (m ? `.${m}` : '');
									return h.get(v);
								},
								set: function (m, v) {
									const g = this.key + (m ? `.${m}` : '');
									return h.set(g, v);
								},
							});
					}
					get values() {
						const e = [...(this.data || [])];
						return e.unshift({ filtered: !1, value: '', label: this.config.label || this.label }), e;
					}
				}
				class D extends k {
					constructor(e) {
						super(e);
						const { data: s } = e || {},
							{ facet: i } = s || {};
						this.storage.set('values', i.values);
						const t = this.storage.get();
						(this.data = t.values || []), (this.disabled = !this.values.length), (this.selected = this.disabled ? '' : t.selected || '');
					}
					select(e = '') {
						(this.selected = e),
							this.storage.set('selected', e),
							(this.persisted = !1),
							e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
					}
				}
				class E extends k {
					constructor(e) {
						super(e);
						const { data: s } = e || {},
							{ facet: i } = s || {};
						this.hierarchyDelimiter = i.hierarchyDelimiter;
						let t = this.storage.get();
						if (!t) this.storage.set(`${this.config.key}.values`, i.values), (t = this.storage.get());
						else if (t[this.config.key]?.values) this.selected = t[this.config.key]?.selected || '';
						else {
							const r = this.storage.get(),
								l = Object.keys(r).map((m, v) => `ss-${v}`);
							!l.includes(this.config.key) && l.push(this.config.key);
							const h = Object.keys(r).filter((m) => r[m].selected),
								p = h[h.length - 1],
								c = l.indexOf(this.config.key),
								d = l.indexOf(p);
							d != -1 && c == d + 1 ? this.storage.set(`${this.config.key}.values`, i.values) : (this.disabled = !0);
						}
						this.data = t[this.config.key]?.values || [];
					}
					select(e = '') {
						(this.selected = e), (this.persisted = !1);
						const s = this.config.index,
							i = this.storage.get(),
							t = Object.keys(i).slice(s);
						Object.keys(i)
							.reverse()
							.forEach((r) => {
								r == this.config.key ? this.storage.set(`${r}.selected`, e) : t.includes(r) && this.storage.set(`${r}`, {}),
									(e = e || this.storage.get(`${r}.selected`));
							}),
							e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
					}
				}
				function P(o, e) {
					return `ss-finder-${o}.${e}`;
				}
				var z = a('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Meta/MetaStore.js');
				class G extends K.K {
					constructor(e, s) {
						if (
							(super(e),
							(this.persisted = !1),
							(this.save = () => {}),
							(this.reset = () => {
								this.config.persist?.enabled && (this.persistedStorage?.clear(), (this.persisted = !1)),
									this.services.urlManager.state.filter && (this.storage.clear(), (this.selections = []), (this.loaded = !1));
							}),
							typeof s != 'object' || typeof s.urlManager?.subscribe != 'function')
						)
							throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
						(this.services = s),
							this.config.persist?.enabled && (this.persistedStorage = new C.t({ type: 'local', key: `athos-${this.config.id}-persisted` })),
							(this.storage = new C.t()),
							this.update(),
							(0, $.Gn)(this, { selections: $.sH, pagination: $.sH });
					}
					setService(e, s) {
						this.services[e] && s && (this.services[e] = s);
					}
					loadPersisted() {
						if (this.config.persist?.enabled && this.persistedStorage) {
							const e = this.persistedStorage.get('date'),
								s = this.persistedStorage.get('data'),
								i = this.persistedStorage.get('config'),
								t = this.persistedStorage.get('selections'),
								r = this.config.persist.expiration && Date.now() - e > this.config.persist.expiration;
							if (s && t.filter((l) => l.selected).length) {
								const l = JSON.stringify({ ...i, plugins: [], middleware: {} }),
									h = JSON.stringify({ ...this.config, plugins: [], middleware: {} });
								l === h && !r ? (this.update(s, t), (this.persisted = !0), this.services.urlManager.go()) : this.reset();
							}
						}
					}
					update(e, s) {
						const { meta: i, search: t } = e || {};
						(this.error = void 0),
							(this.loaded = !!t?.pagination),
							(this.meta = new z.l({ data: { meta: i || {} } })),
							(this.pagination = new N.a3({ config: this.config, services: this.services, data: { search: t, meta: this.meta.data } })),
							(this.selections = new J({
								config: this.config,
								services: this.services,
								stores: { storage: this.storage },
								state: { persisted: this.persisted },
								data: { search: t, meta: this.meta.data, selections: s || [] },
							})),
							(this.save = () => {
								this.config.persist?.enabled &&
									this.persistedStorage &&
									this?.selections?.filter((r) => r.selected).length &&
									(this.persistedStorage.set('config', this.config),
									this.persistedStorage.set('data', e),
									this.persistedStorage.set('date', Date.now()),
									this.persistedStorage.set(
										'selections',
										this.selections.map((r) => ({ selected: r.selected, data: r.data, facet: r.facet }))
									));
							}),
							(this.error = void 0),
							(this.loaded = !!t?.pagination);
					}
				}
				var V = a('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					W = a('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					X = a('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					Q = a('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					Y = a('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					Z = a('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					q = a('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const R = (o, e) => {
					const s = (e?.urlManager || new V.V(new W.E(o.url), X.X)).detach(!0);
					return (
						o.mode && o.client && ((o.client.config = o.client.config || {}), (o.client.config.mode = o.mode)),
						new H(
							o.controller,
							{
								client: e?.client || new O.K(o.client.globals, o.client.config),
								store: e?.store || new G(o.controller, { urlManager: s }),
								urlManager: s,
								eventManager: e?.eventManager || new Q.E(),
								profiler: e?.profiler || new Y.U(),
								logger: e?.logger || new Z.V({ mode: o.mode }),
								tracker: e?.tracker || new q.J(o.client.globals),
							},
							o.context
						)
					);
				};
				a.dn(R);
			},
		},
	]);
})();
