import { U as a, g as n, r as l, T as o, L as m, P as c, E as w, h as d } from './iframe-Bc4KSH0T.js';
import { R as i, a as g } from './RecommendationController-DCG7vrHg.js';
import './preload-helper-PPVm8Dsz.js';
const s = (e, r) => {
	const t = (r?.urlManager || new a(new n(e.url), l)).detach(!0);
	return (
		e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
		new i(
			e.controller,
			{
				client: r?.client || new d(e.client.globals, e.client.config),
				store: r?.store || new g(e.controller, { urlManager: t }),
				urlManager: t,
				eventManager: r?.eventManager || new w(),
				profiler: r?.profiler || new c(),
				logger: r?.logger || new m({ mode: e.mode }),
				tracker: r?.tracker || new o(e.client.globals),
				quickviewManager: r?.quickviewManager,
			},
			e.context
		)
	);
};
export { s as default };
