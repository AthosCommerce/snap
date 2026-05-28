'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[935],
		{
			'./src/create/createRecommendationController.ts'(O, t, o) {
				o.r(t), o.d(t, { default: () => r });
				var s = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = o('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					_ = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					c = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = o('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = o('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = o('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const r = (e, a) => {
					const n = (a?.urlManager || new _.V(new d.E(e.url), c.X)).detach(!0);
					return (
						e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
						new s.c(
							e.controller,
							{
								client: a?.client || new m.K(e.client.globals, e.client.config),
								store: a?.store || new l.t(e.controller, { urlManager: n }),
								urlManager: n,
								eventManager: a?.eventManager || new E.E(),
								profiler: a?.profiler || new M.U(),
								logger: a?.logger || new h.V({ mode: e.mode }),
								tracker: a?.tracker || new P.J(e.client.globals),
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
