'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6080],
		{
			'./src/create/createAutocompleteController.ts'(D, r, o) {
				o.r(r);
				var m = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					l = o('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					_ = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					c = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					M = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = o('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = o('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					u = o('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const s = (e, a) => {
					const { globals: n, ...g } = e.url || {};
					let t = (a?.urlManager || new c.V(new E.E(g), d.X)).detach();
					return (
						n?.length && (t = t.withGlobals(Object.fromEntries(n.map(({ param: P, value: O }) => [P, [O]])))),
						e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
						new m.Z(
							e.controller,
							{
								client: a?.client || new l.K(e.client.globals, e.client.config),
								store: a?.store || new _.Y(e.controller, { urlManager: t }),
								urlManager: t,
								eventManager: a?.eventManager || new M.E(),
								profiler: a?.profiler || new h.U(),
								logger: a?.logger || new p.V({ mode: e.mode }),
								tracker: a?.tracker || new u.J(e.client.globals),
								quickviewManager: a?.quickviewManager,
							},
							e.context
						)
					);
				};
				o.dn(s), o.d(r, ['default', 0, s]);
			},
		},
	]);
})();
