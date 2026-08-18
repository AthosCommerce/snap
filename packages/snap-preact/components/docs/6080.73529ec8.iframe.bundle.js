'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6080],
		{
			'./src/create/createAutocompleteController.ts'(D, s, o) {
				o.r(s);
				var m = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					l = o('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					_ = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					c = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = o('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = o('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = o('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const r = (e, t) => {
					const { globals: n, ...u } = e.url || {};
					let a = (t?.urlManager || new c.V(new E.E(u), d.X)).detach();
					return (
						n?.length && (a = a.withGlobals(Object.fromEntries(n.map(({ param: O, value: g }) => [O, [g]])))),
						e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
						new m.Z(
							e.controller,
							{
								client: t?.client || new l.K(e.client.globals, e.client.config),
								store: t?.store || new _.Y(e.controller, { urlManager: a }),
								urlManager: a,
								eventManager: t?.eventManager || new h.E(),
								profiler: t?.profiler || new M.U(),
								logger: t?.logger || new p.V({ mode: e.mode }),
								tracker: t?.tracker || new P.J(e.client.globals),
							},
							e.context
						)
					);
				};
				o.dn(r), o.d(s, ['default', 0, r]);
			},
		},
	]);
})();
