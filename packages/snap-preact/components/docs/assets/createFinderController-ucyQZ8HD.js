import {
	ax as P,
	aF as $,
	au as L,
	ay as F,
	aG as A,
	aw as x,
	aA as O,
	aB as T,
	B as b,
	aE as q,
	aH as H,
	n as C,
	aI as z,
	U as B,
	g as N,
	r as U,
	T as G,
	L as J,
	P as K,
	E as W,
	h as Q,
} from './iframe-Bc4KSH0T.js';
import './preload-helper-PPVm8Dsz.js';
class V extends Array {
	static get [Symbol.species]() {
		return Array;
	}
	constructor(e) {
		const s = e.config,
			{ services: r, data: t, stores: i, state: l } = e || {},
			{ storage: h } = i || {},
			{ search: f, meta: n, selections: c } = t || {},
			{ facets: p } = f || {},
			m = [];
		c?.length
			? s.fields.forEach((g) => {
					const o = c.find((d) => d.facet.field === g.field);
					if (o) {
						const { facet: d, selected: v } = o || {};
						if (d?.hierarchyDelimiter)
							c.forEach((u, y) => {
								const S = g?.levels || d?.values[d?.values.length - 1]?.value.split(d.hierarchyDelimiter),
									w = { index: y, label: g.levels ? S[y] : '', key: `ss-${y}` },
									k = R(s.id, d.field);
								h.set(`${k}.${w.key}.values`, u.data), h.set(`${k}.${w.key}.selected`, u.selected);
								const M = new E({ config: w, services: r, stores: i, state: l, data: { id: s.id, facet: d } });
								s.persist?.lockSelections && (M.disabled = !0),
									u.selected && (r.urlManager = r.urlManager.set(`filter.${u.facet.field}`, u.selected)),
									m.push(M);
							});
						else {
							const u = new D({ config: g, services: r, stores: i, state: l, data: { id: s.id, facet: d } });
							(u.selected = v),
								u.storage.set('selected', v),
								(u.data = d.values),
								v && (r.urlManager = r.urlManager.set(`filter.${d.field}`, v)),
								s.persist?.lockSelections && (u.disabled = !0),
								m.push(u);
						}
					}
			  })
			: p &&
			  n &&
			  (s?.fields &&
					p.sort((g, o) => {
						const d = s.fields.map((v) => v.field);
						return d.indexOf(g.field) - d.indexOf(o.field);
					}),
			  s?.fields?.forEach((g) => {
					let o = p.filter((v) => v.field == g.field).pop();
					if (((o = { ...((n?.facets && n.facets[g.field]) || {}), ...o }), o?.display === 'hierarchy')) {
						const v = o.values?.filter((y) => y.filtered).pop();
						if (v) {
							const y = v.value?.split(o?.hierarchyDelimiter).length;
							o.values = o.values?.filter((S, w) => (S.value && S.value.split(o?.hierarchyDelimiter).length > y) || w == o.values?.length - 1);
						}
						(g?.levels || (o?.values && o?.values[o?.values?.length - 1].value?.split(o.hierarchyDelimiter)))?.map((y, S) => {
							const w = { index: S, label: g.levels ? y : '', key: `ss-${S}` };
							m.push(new E({ config: w, services: r, stores: i, state: l, data: { id: s.id, facet: o } }));
						});
					} else m.push(new D({ config: g, services: r, stores: i, state: l, data: { id: s.id, facet: o } }));
			  })),
			super(...m);
	}
}
class I {
	constructor(e) {
		(this.filtered = !1), (this.collapsed = !1), (this.display = ''), (this.disabled = !1), (this.selected = ''), (this.custom = {});
		const { config: s, services: r, stores: t, state: i, data: l } = e || {},
			{ storage: h } = t || {},
			{ id: f, facet: n } = l || {},
			{ persisted: c } = i;
		(this.services = r),
			(this.persisted = c),
			(this.id = f),
			(this.config = s),
			(this.facet = n),
			(this.type = n.type),
			(this.field = n.field),
			(this.filtered = n.filtered),
			(this.collapsed = n.collapsed),
			(this.display = n.display),
			(this.label = n.label),
			(this.multiple = n.multiple),
			(this.storage = {
				key: R(this.id, this.field),
				get: function (p) {
					const m = this.key + (p ? `.${p}` : '');
					return h.get(m);
				},
				set: function (p, m) {
					const g = this.key + (p ? `.${p}` : '');
					return h.set(g, m);
				},
			});
	}
	get values() {
		const e = [...(this.data || [])];
		return e.unshift({ filtered: !1, value: '', label: this.config.label || this.label }), e;
	}
}
class D extends I {
	constructor(e) {
		super(e);
		const { data: s } = e || {},
			{ facet: r } = s || {};
		this.storage.set('values', r.values);
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
class E extends I {
	constructor(e) {
		super(e);
		const { data: s } = e || {},
			{ facet: r } = s || {};
		this.hierarchyDelimiter = r.hierarchyDelimiter;
		let t = this.storage.get();
		if (!t) this.storage.set(`${this.config.key}.values`, r.values), (t = this.storage.get());
		else if (t[this.config.key]?.values) this.selected = t[this.config.key]?.selected || '';
		else {
			const i = this.storage.get(),
				l = Object.keys(i).map((p, m) => `ss-${m}`);
			!l.includes(this.config.key) && l.push(this.config.key);
			const h = Object.keys(i).filter((p) => i[p].selected),
				f = h[h.length - 1],
				n = l.indexOf(this.config.key),
				c = l.indexOf(f);
			c != -1 && n == c + 1 ? this.storage.set(`${this.config.key}.values`, r.values) : (this.disabled = !0);
		}
		this.data = t[this.config.key]?.values || [];
	}
	select(e = '') {
		(this.selected = e), (this.persisted = !1);
		const s = this.config.index,
			r = this.storage.get(),
			t = Object.keys(r).slice(s);
		Object.keys(r)
			.reverse()
			.forEach((i) => {
				i == this.config.key ? this.storage.set(`${i}.selected`, e) : t.includes(i) && this.storage.set(`${i}`, {}),
					(e = e || this.storage.get(`${i}.selected`));
			}),
			e ? this.services.urlManager.set(`filter.${this.field}`, e).go() : this.services.urlManager.remove(`filter.${this.field}`).go();
	}
}
function R(a, e) {
	return `ss-finder-${a}.${e}`;
}
class X extends P {
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
			this.config.persist?.enabled && (this.persistedStorage = new $({ type: 'local', key: `athos-${this.config.id}-persisted` })),
			(this.storage = new $()),
			this.update(),
			L(this, { selections: x, pagination: x });
	}
	setService(e, s) {
		this.services[e] && s && (this.services[e] = s);
	}
	loadPersisted() {
		if (this.config.persist?.enabled && this.persistedStorage) {
			const e = this.persistedStorage.get('date'),
				s = this.persistedStorage.get('data'),
				r = this.persistedStorage.get('config'),
				t = this.persistedStorage.get('selections'),
				i = this.config.persist.expiration && Date.now() - e > this.config.persist.expiration;
			if (s && t.filter((l) => l.selected).length) {
				const l = JSON.stringify({ ...r, plugins: [], middleware: {} }),
					h = JSON.stringify({ ...this.config, plugins: [], middleware: {} });
				l === h && !i ? (this.update(s, t), (this.persisted = !0), this.services.urlManager.go()) : this.reset();
			}
		}
	}
	update(e, s) {
		const { meta: r, search: t } = e || {};
		(this.error = void 0),
			(this.loaded = !!t?.pagination),
			(this.meta = new F({ data: { meta: r || {} } })),
			(this.pagination = new A({ config: this.config, services: this.services, data: { search: t, meta: this.meta.data } })),
			(this.selections = new V({
				config: this.config,
				services: this.services,
				stores: { storage: this.storage },
				state: { persisted: this.persisted },
				data: { search: t, meta: this.meta.data, selections: s || [] },
			})),
			(this.save = () => {
				this.config.persist?.enabled &&
					this.persistedStorage &&
					this?.selections?.filter((i) => i.selected).length &&
					(this.persistedStorage.set('config', this.config),
					this.persistedStorage.set('data', e),
					this.persistedStorage.set('date', Date.now()),
					this.persistedStorage.set(
						'selections',
						this.selections.map((i) => ({ selected: i.selected, data: i.data, facet: i.facet }))
					));
			}),
			(this.error = void 0),
			(this.loaded = !!t?.pagination);
	}
}
const Y = {
	id: 'finder',
	beacon: { enabled: !0 },
	globals: { pagination: { pageSize: 0 } },
	fields: [],
	persist: { enabled: !1, lockSelections: !0, expiration: 0 },
};
class Z extends O {
	constructor(e, s, r) {
		super(e, s, r),
			(this.type = T.finder),
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
					} catch (c) {
						if (c?.message == 'cancelled') {
							this.log.warn("'beforeSearch' middleware cancelled");
							return;
						} else throw (this.log.error("error in 'beforeSearch' middleware"), c);
					}
					const i = this.profiler.create({ type: 'event', name: 'search', context: t }).start(),
						{ meta: l, search: h } = await this.client.finder(t);
					i.stop(), this.log.profile(i);
					const f = this.profiler.create({ type: 'event', name: 'afterSearch', context: t }).start();
					try {
						await this.eventManager.fire('afterSearch', { controller: this, request: t, response: { meta: l, search: h } });
					} catch (c) {
						if (c?.message == 'cancelled') {
							this.log.warn("'afterSearch' middleware cancelled"), f.stop();
							return;
						} else throw (this.log.error("error in 'afterSearch' middleware"), c);
					}
					f.stop(), this.log.profile(f), this.store.update({ meta: l, search: h });
					const n = this.profiler.create({ type: 'event', name: 'afterStore', context: t }).start();
					try {
						await this.eventManager.fire('afterStore', { controller: this, request: t, response: { meta: l, search: h } });
					} catch (c) {
						if (c?.message == 'cancelled') {
							this.log.warn("'afterStore' middleware cancelled"), n.stop();
							return;
						} else throw (this.log.error("error in 'afterStore' middleware"), c);
					}
					n.stop(), this.log.profile(n);
				} catch (t) {
					if (t)
						if (t.err && t.fetchDetails) {
							switch (t.fetchDetails.status) {
								case 429: {
									this.store.error = { code: 429, type: b.WARNING, message: 'Too many requests try again later' };
									break;
								}
								case 500: {
									this.store.error = { code: 500, type: b.ERROR, message: 'Invalid Search Request or Service Unavailable' };
									break;
								}
								default: {
									this.store.error = { type: b.ERROR, message: t.err.message };
									break;
								}
							}
							this.log.error(this.store.error), this.handleError(t.err, t.fetchDetails);
						} else (this.store.error = { type: b.ERROR, message: `Something went wrong... - ${t}` }), this.log.error(t), this.handleError(t);
				} finally {
					this.store.loading = !1;
				}
			}),
			(this.config = q(Y, this.config)),
			this.store.setConfig(this.config),
			this.config.url && (this.urlManager = this.urlManager.withConfig((t) => ({ ...t, urlRoot: this.config.url }))),
			this.use(this.config),
			this.store.loadPersisted();
	}
	get params() {
		const e = this.urlManager.state,
			{ userId: s, sessionId: r, pageLoadId: t } = this.tracker.getContext(),
			i = {};
		s && (i.userId = s), r && (i.sessionId = r), t && (i.pageLoadId = t), (i.domain = window.location.href);
		const l = { facets: { include: this.config.fields.map((f) => f.field), autoDrillDown: !1 }, tracking: i };
		if (!this.config.globals?.personalization?.disabled) {
			const f = H(this.tracker.cookies.searched.get(this.config.globals?.siteId));
			f && (l.personalization = { lastSearches: f });
		}
		return C({ ...z(e) }, C(l, this.config.globals));
	}
}
const ee = (a, e) => {
	const s = (e?.urlManager || new B(new N(a.url), U)).detach(!0);
	return (
		a.mode && a.client && ((a.client.config = a.client.config || {}), (a.client.config.mode = a.mode)),
		new Z(
			a.controller,
			{
				client: e?.client || new Q(a.client.globals, a.client.config),
				store: e?.store || new X(a.controller, { urlManager: s }),
				urlManager: s,
				eventManager: e?.eventManager || new W(),
				profiler: e?.profiler || new K(),
				logger: e?.logger || new J({ mode: a.mode }),
				tracker: e?.tracker || new G(a.client.globals),
			},
			a.context
		)
	);
};
export { ee as default };
