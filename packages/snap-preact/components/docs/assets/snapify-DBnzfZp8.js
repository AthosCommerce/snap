import { U as c, g as i, r as w, T as u, L as g, P as d, E as m, h as S, S as b, i as p, k as M } from './iframe-Bc4KSH0T.js';
import { R as f, a as h } from './RecommendationController-DCG7vrHg.js';
import { A as k, a as y } from './AutocompleteController-BKsvVDGS.js';
M({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
const l = {},
	s = { globals: { siteId: 'atkzs2' } };
class x {
	static recommendation(r) {
		const t = r.id;
		if (l[t]) return l[t];
		const o = (l[t] = v({ client: s, controller: r }));
		return (
			o.on('afterStore', async ({ controller: n }, a) => {
				n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await a();
			}),
			o.init(),
			o
		);
	}
	static autocomplete(r) {
		const t = r.id;
		if (l[t]) return l[t];
		const o = (l[t] = A({ client: s, controller: r }));
		return (
			o.on('afterStore', async ({ controller: n }, a) => {
				n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await a();
			}),
			o.init(),
			o
		);
	}
	static search(r) {
		const t = r.id;
		if (l[t]) return l[t];
		const o = (l[t] = C({ client: s, controller: r }));
		return (
			o.on('afterStore', async ({ controller: n }, a) => {
				n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await a();
			}),
			o.init(),
			o
		);
	}
}
function C(e) {
	const r = new c(new i({ settings: { coreType: 'query', corePrefix: e.controller.id } }), w);
	return new b(e.controller, {
		client: new S(e.client.globals, e.client.config),
		store: new p(e.controller, { urlManager: r }),
		urlManager: r,
		eventManager: new m(),
		profiler: new d(),
		logger: new g(),
		tracker: new u(e.client.globals),
	});
}
function v(e) {
	const r = new c(new i(), w).detach(!0);
	return new f(e.controller, {
		client: new S(e.client.globals, e.client.config),
		store: new h(e.controller, { urlManager: r }),
		urlManager: r,
		eventManager: new m(),
		profiler: new d(),
		logger: new g(),
		tracker: new u(e.client.globals),
	});
}
function A(e) {
	const r = new c(new i(), w).detach();
	return new k(e.controller, {
		client: new S(e.client.globals, e.client.config),
		store: new y(e.controller, { urlManager: r }),
		urlManager: r,
		eventManager: new m(),
		profiler: new d(),
		logger: new g(),
		tracker: new u(e.client.globals),
	});
}
export { x as S };
