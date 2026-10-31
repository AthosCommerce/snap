import { Z as M, n as T, h as L, T as O, L as S, a0 as $, a1 as H, a2 as N, j as B } from './iframe-Bc4KSH0T.js';
import D from './createRecommendationController-Bvk0Nzxj.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-DCG7vrHg.js';
const G = 'production';
class X {
	constructor(i, e, d) {
		if (
			((this.mode = M.production),
			(this.controller = {}),
			(this.uses = []),
			(this.plugins = []),
			(this.middleware = []),
			(this.config = i),
			!this.config)
		)
			throw new Error('Recommendation Instantiator config is required');
		if (
			(this.config.config?.branch || ((this.config.config = this.config.config || {}), (this.config.config.branch = G)),
			!this.config.components || typeof this.config.components != 'object' || !Object.keys(this.config.components).length)
		)
			throw new Error("Recommendation Instantiator config must contain 'components' mapping property");
		if ((!e?.client || !e?.tracker) && !this.config?.client?.globals?.siteId)
			throw new Error('Recommendation Instantiator config must contain a valid config.client.globals.siteId value');
		this.config.mode &&
			Object.values(M).includes(this.config.mode) &&
			((this.mode = this.config.mode),
			this.config?.client?.globals?.siteId &&
				((this.config.client.config = this.config.client.config || {}),
				(this.config.client.config.mode = this.config.client.config.mode || this.mode))),
			(window.athos = window.athos || {}),
			(this.context = T(d || {}, i.context || {})),
			(this.client = e?.client || new L(this.config.client.globals, this.config.client.config)),
			(this.tracker = e?.tracker || new O(this.config.client.globals)),
			(this.logger = e?.logger || new S({ prefix: 'RecommendationInstantiator ', mode: this.mode })),
			(this.quickviewManager = e?.quickviewManager);
		const f = {};
		this.targeter = new $(
			[
				{
					selector: `${
						this.config.selector ||
						'script[type="searchspring/recommend"], script[type="searchspring/personalized-recommendations"], script[type="athos/recommend"], script[type="athos/personalized-recommendations"]'
					}, script[type="searchspring/recommend"][profile="email"], script[type="athos/recommend"][profile="email"]`,
					autoRetarget: !0,
					clickRetarget: !0,
					navigationRetarget: !0,
					emptyTarget: !1,
				},
				{
					selector: 'script[type="searchspring/recommendations"], script[type="athos/recommendations"]',
					autoRetarget: !0,
					clickRetarget: !0,
					navigationRetarget: !0,
					emptyTarget: !1,
				},
			],
			async (g, m) => {
				this.cleanupStaleControllers();
				const r = m,
					n = H(
						[
							'shopperId',
							'shopper',
							'product',
							'products',
							'seed',
							'cart',
							'filters',
							'blockedItems',
							'options',
							'profile',
							'custom',
							'profiles',
							'globals',
						],
						r
					);
				if (n.profiles && n.profiles.length) {
					const s = n.profiles,
						c = n.globals,
						u = {
							...v({
								blockedItems: c?.blockedItems,
								filters: c?.filters,
								cart: c?.cart && q(c.cart),
								products: c?.products,
								shopper: c?.shopper?.id,
								batchId: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
							}),
						};
					s.forEach((l, b) => {
						if (l.selector) {
							const y = { selector: l.selector, autoRetarget: !0, profile: l, order: b };
							let h;
							new $([y], async (a, t, k, p) => {
								if (r.isConnected === !1) {
									t && p?.releaseTargets([t]);
									return;
								}
								if (a.profile?.profile || a.profile?.tag) {
									const R = { ...u, profile: { ...a.profile?.options, order: a.order }, tag: a.profile.tag || a.profile.profile },
										w = T(this.context, v({ globals: c, profile: a.profile }));
									if ((n.custom && (w.custom = T(w.custom, n.custom)), !h)) h = _(this, e || {}, t, w, f, r, R, a, p);
									else {
										const C = await h;
										C && t && P(this, e || {}, C, t, r, a);
									}
								}
							});
						}
					});
				} else {
					const { profile: s, products: c, product: u, seed: l, filters: b, blockedItems: y, options: h, shopper: a, shopperId: t } = n,
						k = [].concat(c || u || l || []),
						p = [a, a?.id, t, t?.id].filter((A) => A && typeof A == 'string').pop(),
						R = { tag: s, ...v({ products: k.length ? k : void 0, cart: n.cart && q(n.cart), shopper: p, filters: b, blockedItems: y, profile: h }) },
						w = r.getAttribute('profile') || '',
						C = r.ownerDocument.createElement('div');
					C.setAttribute('searchspring-recommend', w), r.before(C);
					const j = T(this.context, n);
					new $([{ selector: `[searchspring-recommend="${w}"]`, name: `legacy_${s}_${f[s || ''] || 0}` }], async (A, I, z, x) => {
						if (r.isConnected === !1) {
							I && x?.releaseTargets([I]);
							return;
						}
						_(this, e || {}, I, j, f, r, R, g, x);
					});
				}
			}
		);
	}
	plugin(i, ...e) {
		this.plugins.push({ func: i, args: e });
	}
	on(i, ...e) {
		this.middleware.push({ event: i, func: e });
	}
	use(i) {
		this.uses.push(i);
	}
	cleanupStaleControllers() {
		Object.keys(this.controller).forEach((i) => {
			const e = this.controller[i];
			Object.values(e.targeters).some((g) => g.getTargetedElems().some((m) => (m.isConnected !== !1 && m.getAttribute('ss-controller-id')) === i)) ||
				(Object.keys(e.targeters).forEach((g) => e.targeters[g].destroy()),
				(e.targeters = {}),
				delete this.controller[i],
				window.athos?.controller && delete window.athos.controller[i]);
		});
	}
}
async function _(o, i, e, d, f, g, m, r, n) {
	const { profile: s, batchId: c, cart: u, tag: l } = m,
		b = s?.batched ?? m.batched ?? !0;
	if (!l) {
		o.logger.warn("'tag' is missing from <script> tag, skipping this profile", g);
		return;
	}
	Array.isArray(u) && o.tracker.cookies.cart.set(u);
	const y = T.all([o.config.client?.globals || {}, o.config.config?.globals || {}, m]),
		h = {
			tag: l,
			batched: b ?? o.config.config?.batched ?? !0,
			realtime: !!(d.options?.realtime ?? d.profile?.options?.realtime ?? o.config.config?.realtime),
			batchId: c,
			middleware: o.config.config.middleware,
			plugins: o.config.config.plugins,
			branch: o.config.config?.branch || 'production',
			limit: o.config.config?.limit,
			beacon: o.config.config?.beacon || { enabled: !0 },
			settings: {
				variants: o.config.config?.settings?.variants ?? o.config.config?.variants,
				quickview: o.config.config?.settings?.quickview ?? o.config.config?.quickview,
				searchOnPageShow: o.config.config?.settings?.searchOnPageShow ?? o.config.config?.searchOnPageShow,
			},
			globals: y,
		};
	s?.branch && (h.branch = s?.branch), (f[l] = f[l] + 1 || 1);
	const a = { id: `recommend_${l}_${f[l] - 1}`, ...h },
		t = D(
			{ url: o.config.url, controller: a, context: d, mode: o.config.mode },
			{ client: o.client, tracker: o.tracker, quickviewManager: o.quickviewManager }
		);
	e && e.setAttribute('ss-controller-id', t.id),
		o.uses.forEach((p) => t.use(p)),
		o.plugins.forEach((p) => t.plugin(p.func, ...p.args)),
		o.middleware.forEach((p) => t.on(p.event, ...p.func)),
		(o.controller[t.config.id] = t),
		(window.athos.controller = window.athos.controller || {}),
		(window.athos.controller[t.config.id] = t),
		t.addTargeter(n),
		t.store.loading || (await t.search());
	const k = t.store.profile.display?.templateParameters;
	if (!t.store.error) {
		if (!t.store.profile.display.template) {
			o.logger.error(`profile '${l}' found on the following element is missing a template!
${g?.outerHTML}`);
			return;
		}
		if (!k) {
			o.logger.error(`profile '${l}' found on the following element is missing templateParameters!
${g?.outerHTML}`);
			return;
		}
		return e && (await P(o, i, t, e, g, r)), t;
	}
}
async function P(o, i, e, d, f, g) {
	d && d.setAttribute('ss-controller-id', e.id);
	const m = e.config.tag,
		r = e.store.profile.display?.template?.component;
	if (!r) {
		o.logger.error(`profile '${m}' found on the following element is missing a component!
${f?.outerHTML}`);
		return;
	}
	let n = {},
		s;
	if (
		((n.className = `ss__recommendation-${r.toLowerCase()}`),
		o.config.components[r]?.onTarget?.(g, f, d, e),
		o.config.components[r] && typeof o.config.components[r] == 'function')
	)
		s = await o.config.components[r]();
	else if (o.config.components[r] && typeof o.config.components[r] == 'object') {
		n = o.config.components[r].props || {};
		const c = [];
		c.push(o.config.components[r].component()), (s = (await Promise.all(c))[0]);
	}
	if (!s) {
		o.logger.error(`profile '${m}' found on the following element is expecting component mapping for '${r}' - verify instantiator config.
${f?.outerHTML}`);
		return;
	}
	setTimeout(() => {
		N(B(s, { controller: e, snap: i?.snap, ...n }), d);
	});
}
function q(o) {
	if (typeof o == 'function')
		try {
			const i = o();
			if (Array.isArray(i)) return i;
		} catch {}
	else if (Array.isArray(o)) return o;
	return [];
}
function v(o) {
	const i = {};
	return (
		Object.keys(o).map((e) => {
			o[e] !== void 0 && (i[e] = o[e]);
		}),
		i
	);
}
export { X as RecommendationInstantiator, v as defined };
