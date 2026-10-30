import { U as m, g as c, r as w, T as g, L as u, P as i, E as p, h as s } from './iframe-U9T2Y9ZS.js';
import { A as M, a as d } from './AutocompleteController-DOm9KL9U.js';
import './preload-helper-PPVm8Dsz.js';
const C = (e, r) => {
	const { globals: l, ...a } = e.url || {};
	let t = (r?.urlManager || new m(new c(a), w)).detach();
	return (
		l?.length && (t = t.withGlobals(Object.fromEntries(l.map(({ param: n, value: o }) => [n, [o]])))),
		e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
		new M(
			e.controller,
			{
				client: r?.client || new s(e.client.globals, e.client.config),
				store: r?.store || new d(e.controller, { urlManager: t }),
				urlManager: t,
				eventManager: r?.eventManager || new p(),
				profiler: r?.profiler || new i(),
				logger: r?.logger || new u({ mode: e.mode }),
				tracker: r?.tracker || new g(e.client.globals),
				quickviewManager: r?.quickviewManager,
			},
			e.context
		)
	);
};
export { C as default };
