'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6080],
		{
			'./src/create/createAutocompleteController.ts'(u, a, o) {
				o.r(a), o.d(a, { default: () => r });
				var n = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = o('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					_ = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					c = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					p = o('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = o('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					h = o('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const r = (e, t) => {
					const s = (t?.urlManager || new _.V(new d.E(e.url), c.X)).detach();
					return (
						e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
						new n.Z(
							e.controller,
							{
								client: t?.client || new m.K(e.client.globals, e.client.config),
								store: t?.store || new l.Y(e.controller, { urlManager: s }),
								urlManager: s,
								eventManager: t?.eventManager || new E.E(),
								profiler: t?.profiler || new p.U(),
								logger: t?.logger || new M.V({ mode: e.mode }),
								tracker: t?.tracker || new h.J(e.client.globals),
							},
							e.context
						)
					);
				};
				(Object.getOwnPropertyDescriptor(r, 'name') || {}).writable || Object.defineProperty(r, 'name', { value: 'default', configurable: !0 });
			},
		},
	]);
})();
