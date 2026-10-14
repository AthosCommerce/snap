import { aI as x, H as E, n as u, aJ as S, aK as V, aF as A, aL as j, aM as B, au as L, D as H, aw as T } from './iframe-CXSVAHru.js';
import './preload-helper-PPVm8Dsz.js';
const M = (t) => [
	{
		description: '',
		controls: [
			{
				type: 'text',
				label: 'SiteId',
				description: 'site id used to connect to the athos service',
				getDisplayState: () => 'disabled',
				getValue: () => t.overrides.config?.siteId ?? t.initial.config.siteId ?? '',
				shouldShowReset: () => typeof t.overrides.config?.siteId < 'u',
				onValueChange: (e) => {
					t.setConfigOverride({ path: ['siteId'], value: e });
				},
				onReset: () => {
					t.setConfigOverride({ path: ['siteId'], value: void 0 });
				},
			},
			{
				type: 'dropdown',
				label: 'Platform',
				description: 'Storefront platform used for the project',
				getDisplayState: () => 'disabled',
				getOptions: () => [
					{
						options: [
							{ label: 'Shopify', value: 'shopify' },
							{ label: 'BigCommerce', value: 'bigCommerce' },
							{ label: 'Magento 2', value: 'magento2' },
							{ label: 'Other', value: 'other' },
						],
					},
				],
				getValue: () => t.overrides.config?.platform || t.initial.config.platform || 'other',
				shouldShowReset: () => {
					const e = t.initial.config.platform || 'other',
						i = t.overrides.config?.platform;
					return typeof i < 'u' && e != i;
				},
				onValueChange: (e) => {
					t.setConfigOverride({ path: ['platform'], value: e });
				},
				onReset: () => {
					t.setConfigOverride({ path: ['platform'], value: void 0 });
				},
			},
			{
				type: 'dropdown',
				label: 'Language',
				description: 'Language used for the project',
				getDisplayState: () => 'visible',
				getOptions: () => [
					{
						options: [
							{ label: 'English', value: 'en' },
							{ label: 'French', value: 'fr' },
							{ label: 'Spanish', value: 'es' },
						],
					},
				],
				getValue: () => t.overrides.config?.language || t.initial.config.language || 'en',
				shouldShowReset: () => {
					const e = t.initial.config.language || 'en',
						i = t.overrides.config?.language;
					return typeof i < 'u' && e != i;
				},
				onValueChange: (e) => {
					t.setConfigOverride({ path: ['language'], value: e });
				},
				onReset: async () => {
					t.setConfigOverride({ path: ['language'], value: void 0 });
				},
			},
			{
				type: 'dropdown',
				label: 'Currency',
				description: 'Currency used for the project',
				getDisplayState: () => 'visible',
				getOptions: () => [{ options: x.map((e) => ({ label: e.toUpperCase(), value: e })) }],
				getValue: () => t.overrides.config?.currency || t.initial.config.currency || 'usd',
				shouldShowReset: () => {
					const e = t.initial.config.currency || 'usd',
						i = t.overrides.config?.currency;
					return typeof i < 'u' && e != i;
				},
				onValueChange: async (e) => {
					t.setConfigOverride({ path: ['currency'], value: e });
				},
				onReset: async () => {
					t.setConfigOverride({ path: ['currency'], value: void 0 });
				},
			},
		],
	},
];
function U(t) {
	return [
		{
			controls: [
				{
					type: 'dropdown',
					label: 'Theme',
					description: 'Theme for styling the templates',
					getDisplayState: () => 'visible',
					getOptions: () => [{ options: Object.keys(t.templatesStore.themes.library).map((r) => ({ value: r })) }],
					getValue: () => t.overrides.theme.extends ?? t.initial.theme.extends ?? 'global',
					shouldShowReset: () => typeof t.overrides.theme.extends < 'u',
					onValueChange: (e) => {
						t.setTheme(e);
					},
					onReset: () => {
						t.setTheme(t.initial.theme.extends);
					},
				},
			],
		},
		{
			title: 'Breakpoints',
			controls: [
				{
					type: 'number',
					label: 'Mobile Breakpoint',
					description: 'Mobile breakpoint for responsive design',
					getDisplayState: () => 'visible',
					getValue: () => t.overrides.theme.variables?.breakpoints?.mobile ?? t.initial.theme.variables?.breakpoints?.mobile ?? '',
					shouldShowReset: () => {
						const e = t.initial.theme.variables?.breakpoints?.mobile,
							i = t.overrides.theme.variables?.breakpoints?.mobile;
						return typeof i < 'u' && e != i;
					},
					onValueChange: (e) => {
						t.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value: e });
					},
					onReset: () => {
						t.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value: void 0 });
					},
				},
				{
					type: 'number',
					label: 'Tablet Breakpoint',
					description: 'Tablet breakpoint for responsive design',
					getDisplayState: () => 'visible',
					getValue: () => t.overrides.theme.variables?.breakpoints?.tablet ?? t.initial.theme.variables?.breakpoints?.tablet ?? '',
					shouldShowReset: () => {
						const e = t.initial.theme.variables?.breakpoints?.tablet,
							i = t.overrides.theme.variables?.breakpoints?.tablet;
						return typeof i < 'u' && e != i;
					},
					onValueChange: (e) => {
						t.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value: e });
					},
					onReset: () => {
						t.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value: void 0 });
					},
				},
				{
					type: 'number',
					label: 'Desktop Breakpoint',
					description: 'Desktop breakpoint for responsive design',
					getDisplayState: () => 'visible',
					getValue: () => t.overrides.theme.variables?.breakpoints?.desktop ?? t.initial.theme.variables?.breakpoints?.desktop ?? '',
					shouldShowReset: () => {
						const e = t.initial.theme.variables?.breakpoints?.desktop,
							i = t.overrides.theme.variables?.breakpoints?.desktop;
						return typeof i < 'u' && e != i;
					},
					onValueChange: (e) => {
						t.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value: e });
					},
					onReset: () => {
						t.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value: void 0 });
					},
				},
			],
		},
		{
			title: 'Colors',
			controls: [
				{
					type: 'color',
					label: 'Primary Color',
					description: 'Primary color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => t.overrides.theme.variables?.colors?.primary ?? t.initial.theme.variables?.colors?.primary ?? '',
					shouldShowReset: () => {
						const e = t.initial.theme.variables?.colors?.primary?.toUpperCase(),
							i = t.overrides.theme.variables?.colors?.primary?.toUpperCase();
						return typeof i < 'u' && e != i;
					},
					onValueChange: E((e) => {
						t.setThemeOverride({ path: ['variables', 'colors', 'primary'], value: e });
					}, 50),
					onReset: () => {
						t.setThemeOverride({ path: ['variables', 'colors', 'primary'], value: void 0 });
					},
				},
				{
					type: 'color',
					label: 'Secondary Color',
					description: 'Secondary color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => t.overrides.theme.variables?.colors?.secondary ?? t.initial.theme.variables?.colors?.secondary ?? '',
					shouldShowReset: () => {
						const e = t.initial.theme.variables?.colors?.secondary?.toUpperCase(),
							i = t.overrides.theme.variables?.colors?.secondary?.toUpperCase();
						return typeof i < 'u' && e != i;
					},
					onValueChange: E((e) => {
						t.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value: e });
					}, 50),
					onReset: () => {
						t.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value: void 0 });
					},
				},
				{
					type: 'color',
					label: 'Accent Color',
					description: 'Accent color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => t.overrides.theme.variables?.colors?.accent ?? t.initial.theme.variables?.colors?.accent ?? '',
					shouldShowReset: () => {
						const e = t.initial.theme.variables?.colors?.accent?.toUpperCase(),
							i = t.overrides.theme.variables?.colors?.accent?.toUpperCase();
						return typeof i < 'u' && e != i;
					},
					onValueChange: E((e) => {
						t.setThemeOverride({ path: ['variables', 'colors', 'accent'], value: e });
					}, 50),
					onReset: () => {
						t.setThemeOverride({ path: ['variables', 'colors', 'accent'], value: void 0 });
					},
				},
			],
		},
	];
}
function N(t) {
	return [
		{
			description: '',
			collapsible: !0,
			controls: [
				{
					type: 'dropdown',
					label: 'Component',
					description: 'Template component to render',
					getValue: (e) => t.templatesStore.targets?.search[e]?.component,
					getOptions: () => [{ options: Object.keys(t.templatesStore.library.components.search).map((i) => ({ value: i })) }],
					shouldShowReset: (e) => {
						const i = t.initial.targets?.search?.[e],
							r = t.overrides.targets?.search?.[e];
						return !!i?.component && !!r?.component && i.component != r.component;
					},
					onValueChange: (e, i) => {
						t.setTargetOverride({ path: ['search', `[${i}]`, 'component'], value: e });
					},
					onReset: (e) => {
						t.setTargetOverride({ path: ['search', `[${e}]`, 'component'], value: void 0 });
					},
				},
			],
		},
	];
}
function J(t) {
	return [
		{
			title: 'Result Display Options',
			description: '',
			collapsible: !0,
			controls: [
				{
					type: 'checkbox',
					label: 'Infinite Scroll',
					description: 'Enable infinite scroll',
					getValue: (e) =>
						e?.store.config.settings?.infinite
							? e.store.config.settings?.infinite?.enabled !== void 0
								? e.store.config.settings.infinite.enabled
								: !0
							: !1,
					shouldShowReset: () => {
						const e = t.initial.controller.search?.infinite,
							i = !!(e?.enabled !== void 0 ? e.enabled : e);
						return t.overrides.controller.search?.infinite?.enabled !== void 0 && i !== t.overrides.controller.search?.infinite?.enabled;
					},
					onValueChange: (e, i) => {
						if (typeof e > 'u' || !i) return;
						const r = t.initial.controller.search?.infinite;
						e == r?.enabled || (e === !1 && !r)
							? t.setControllerOverride({ path: ['infinite'], controller: i })
							: t.setControllerOverride({ path: ['infinite', 'enabled'], value: !!e, controller: i });
					},
					onReset: (e) => {
						e && t.setControllerOverride({ path: ['infinite'], controller: e });
					},
				},
			],
		},
	];
}
function P(t) {
	return [
		{
			description: '',
			collapsible: !0,
			controls: [
				{
					type: 'dropdown',
					label: 'Component',
					description: 'Template component to render',
					getValue: (e) => t.templatesStore.targets?.autocomplete[e]?.component,
					getOptions: () => [{ options: Object.keys(t.templatesStore.library.components.autocomplete).map((i) => ({ value: i })) }],
					shouldShowReset: (e) => {
						const i = t.initial.targets?.autocomplete?.[e],
							r = t.overrides.targets?.autocomplete?.[e];
						return !!i?.component && !!r?.component && i.component != r.component;
					},
					onValueChange: (e, i) => {
						t.setTargetOverride({ path: ['autocomplete', `[${i}]`, 'component'], value: e });
					},
					onReset: (e) => {
						t.setTargetOverride({ path: ['autocomplete', `[${e}]`, 'component'], value: void 0 });
					},
				},
			],
		},
	];
}
function $(t) {
	return [
		{
			title: 'Terms',
			description: '',
			controls: [
				{
					type: 'dropdown',
					label: 'History Terms',
					description: '',
					getOptions: () => [
						{
							options: [
								{ value: 'Disabled' },
								{ value: 1 },
								{ value: 2 },
								{ value: 3 },
								{ value: 4 },
								{ value: 5 },
								{ value: 6 },
								{ value: 7 },
								{ value: 8 },
								{ value: 9 },
								{ value: 10 },
							],
						},
					],
					getValue: (e) => (e?.store.config.settings?.history?.enabled ? e.store.config.settings.history.limit ?? 'Disabled' : 'Disabled'),
					shouldShowReset: () => {
						const e = t.initial.controller.autocomplete?.history,
							i = !!(e?.enabled !== void 0 ? e.enabled : e?.limit && e.limit > 0),
							r = t.overrides.controller.autocomplete?.history;
						if (r?.enabled === void 0 && r?.limit === void 0) return !1;
						const s = !!(r?.enabled !== void 0 ? r.enabled : r?.limit && r.limit > 0);
						return i !== s || e?.limit !== r?.limit;
					},
					onValueChange: (e, i) => {
						if (typeof e > 'u' || !i) return;
						const r = t.initial.controller.autocomplete?.history,
							s = r?.enabled ? r?.limit : 'Disabled';
						e === s
							? t.setControllerOverride({ path: ['history'], controller: i })
							: e === 'Disabled'
							? t.setControllerOverride({ path: ['history'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller: i })
							: t.setControllerOverride({ path: ['history'], value: { enabled: !0, limit: Number(e) }, controller: i }),
							O(i);
					},
					onReset: (e) => {
						e && (t.setControllerOverride({ path: ['history'], controller: e }), O(e));
					},
				},
				{
					type: 'dropdown',
					label: 'Trending Terms',
					description: '',
					getOptions: () => [
						{
							options: [
								{ value: 'Disabled' },
								{ value: 1 },
								{ value: 2 },
								{ value: 3 },
								{ value: 4 },
								{ value: 5 },
								{ value: 6 },
								{ value: 7 },
								{ value: 8 },
								{ value: 9 },
								{ value: 10 },
							],
						},
					],
					getValue: (e) => (e?.store.config.settings?.trending?.enabled ? e.store.config.settings.trending.limit ?? 'Disabled' : 'Disabled'),
					shouldShowReset: () => {
						const e = t.initial.controller.autocomplete?.trending,
							i = !!(e?.enabled !== void 0 ? e.enabled : e?.limit && e.limit > 0),
							r = t.overrides.controller.autocomplete?.trending;
						if (r?.enabled === void 0 && r?.limit === void 0) return !1;
						const s = !!(r?.enabled !== void 0 ? r.enabled : r?.limit && r.limit > 0);
						return i !== s || e?.limit !== r?.limit;
					},
					onValueChange: async (e, i) => {
						if (typeof e > 'u' || !i) return;
						const r = t.initial.controller.autocomplete?.trending,
							s = r?.enabled ? r?.limit : 'Disabled';
						e === s
							? t.setControllerOverride({ path: ['trending'], controller: i })
							: e === 'Disabled'
							? t.setControllerOverride({ path: ['trending'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller: i })
							: t.setControllerOverride({ path: ['trending'], value: { enabled: !0, limit: Number(e) }, controller: i }),
							O(i);
					},
					onReset: (e) => {
						e && (t.setControllerOverride({ path: ['trending'], controller: e }), O(e));
					},
				},
				{
					type: 'dropdown',
					label: 'Initial Results',
					description: '',
					getDisplayState: (e) =>
						e?.store.config.settings?.history?.enabled || e?.store.config.settings?.trending?.enabled ? 'visible' : 'disabled',
					getOptions: (e) => {
						const i = e?.store.config.settings?.history?.enabled,
							r = e?.store.config.settings?.trending?.enabled,
							s = [{ value: 'Disabled' }];
						return i && s.push({ value: 'History' }), r && s.push({ value: 'Trending' }), [{ options: s }];
					},
					getValue: (e) => {
						const i = e?.store.config.settings?.history?.enabled;
						return e?.store.config.settings?.trending?.enabled && e?.store.config.settings?.trending?.showResults
							? 'Trending'
							: i && e?.store.config.settings?.history?.showResults
							? 'History'
							: 'Disabled';
					},
					shouldShowReset: () => {
						const e = t.initial.controller.autocomplete,
							i = e?.history?.enabled && e?.history?.showResults,
							r = e?.trending?.enabled && e?.trending?.showResults,
							s = r ? 'Trending' : i ? 'History' : 'Disabled',
							a = t.overrides.controller.autocomplete,
							n = a?.history?.enabled !== !1 && a?.history?.showResults,
							c = a?.trending?.enabled !== !1 && a?.trending?.showResults,
							d =
								a?.history?.showResults === !1 && a?.trending?.showResults === !1 && (i || r) ? 'Disabled' : c ? 'Trending' : n ? 'History' : void 0;
						return d !== void 0 && s !== d;
					},
					onValueChange: (e, i) => {
						typeof e > 'u' ||
							!i ||
							(t.setControllerOverride({ path: ['history', 'showResults'], value: e === 'History', controller: i }),
							t.setControllerOverride({ path: ['trending', 'showResults'], value: e === 'Trending', controller: i }),
							O(i));
					},
					onReset: (e) => {
						e &&
							(t.setControllerOverride({ path: ['history', 'showResults'], controller: e }),
							t.setControllerOverride({ path: ['trending', 'showResults'], controller: e }),
							O(e));
					},
				},
			],
		},
	];
}
async function O(t) {
	t.reset(), t.store.initHistory();
	const e = t.config.settings?.trending?.enabled || (t.config.settings?.trending && t.config.settings?.trending?.enabled == null),
		i = t.config.settings?.history?.enabled || (t.config.settings?.history && t.config.settings?.history?.enabled == null);
	e
		? (await t.searchTrending({ limit: t.config.settings?.trending?.limit }),
		  t.config.settings?.trending?.showResults && t.store.trending.length && !t.store.results && t.store.trending[0].preview())
		: t.store.updateTrendingTerms({ trending: { queries: [] } }),
		!e && i && t.config.settings?.history?.showResults && t.store.history.length && !t.store.results && t.store.history[0].preview();
}
const F = { breakpoints: { mobile: 600, tablet: 900, desktop: 1200 }, colors: { primary: '#1D4990', secondary: '#6187ae', accent: '#00AEEF' } };
class q {
	constructor({ templatesStore: e }) {
		(this.storedState = { hidden: !1, activeTab: 'configuration' }),
			(this.state = { activeDomSelector: '' }),
			(this.overrides = { config: {}, controller: {}, theme: {}, targets: { search: [], autocomplete: [] } }),
			(this.initial = {
				config: { language: 'en', currency: 'usd' },
				targets: { search: [], autocomplete: [] },
				controller: {},
				theme: { extends: 'base', variables: F },
			}),
			(this.tabs = ['templates', 'configuration']),
			(this.uiAbstractions = {
				templates: { config: M(this), theme: U(this) },
				controllers: { search: J(this), autocomplete: $(this) },
				targets: { search: N(this), autocomplete: P(this) },
			}),
			(this.setThemeOverride = (c) => {
				const { path: o, value: d } = c,
					h = o.reduce((f, l) => f && f[l], this.initial.theme),
					m = k(o, d == h ? void 0 : d);
				(this.overrides.theme = w(u(this.overrides.theme || {}, m || {}))), this.storage.set('overrides.theme', this.overrides.theme);
				const b = u(this.initial.theme || {}, this.overrides.theme || {}),
					C = I(b);
				Object.keys(this.templatesStore.themes.library).forEach((f) => {
					this.templatesStore.themes.library[f].setEditorOverrides(C);
				});
			}),
			(this.setTargetOverride = (c) => {
				const o = c.path;
				let d = c.value;
				const h = o[0];
				let m = -1;
				const b = o.reduce((v, y) => {
						try {
							const p = Number(y.replace(/^\[(\d+)\]$/, '$1'));
							return Number.isNaN(p) ? v && v[y] : ((m = p), v && v[p]);
						} catch (p) {
							console.error('Error accessing path in initial targets:', p);
							return;
						}
					}, this.initial.targets),
					C = k(o, d == b ? void 0 : d),
					f = u(S(this.overrides.targets) || {}, S(C) || {}, { arrayMerge: V });
				(this.overrides.targets = w(f)), this.storage.set('overrides.targets', this.overrides.targets);
				const l = u(S(this.initial.targets) || {}, S(this.overrides.targets) || {}, { arrayMerge: V }),
					g = o[o.length - 1];
				if (g == 'selector' && m > -1) {
					if ((typeof d > 'u' && (d = b), typeof d == 'string' && d.length > 1 && document.querySelector(d))) {
						const v = Object.keys(window.athos.controller[h].targeters)[m];
						if (v) {
							const y = window.athos.controller[h].targeters[v].targets[0].selector,
								p = document.querySelector(y || '');
							if (h == 'search' && p) {
								const R = p.cloneNode(!0);
								(R.innerHTML = ''), p.insertAdjacentElement('afterend', R), p.remove();
							}
							(window.athos.controller[h].targeters[v].targets[0].selector = d), window.athos.controller[h].retarget();
						}
					}
				} else if (g == 'inputSelector' && m > -1) {
					const v = Object.keys(window.athos.controller[h].targeters)[m];
					(window.athos.controller[h].targeters[v].targets[0].props.input = d), window.athos.controller[h].retarget();
				}
				const D = this.templatesStore.targets[h];
				if (D && m != -1) {
					const v = D[m],
						y = l[h][m];
					Object.keys(y).forEach((p) => {
						const R = y[p];
						v.setValue(p, R);
					});
				}
			}),
			(this.templatesStore = e),
			(this.storage = new A({ type: B.local, key: j })),
			(this.storedState = this.storage.get('editor') || this.storedState);
		const { language: i, currency: r, ...s } = e.config?.config || {};
		(this.initial.config = u(this.initial.config, {
			...s,
			...(i ? { language: i.toLowerCase() } : {}),
			...(r ? { currency: r.toLowerCase() } : {}),
		})),
			(this.initial.controller = {}),
			e.config.search?.targets && (this.initial.targets.search = e.config.search?.targets),
			e.config.autocomplete?.targets && (this.initial.targets.autocomplete = e.config.autocomplete?.targets);
		const a = JSON.parse(JSON.stringify(e.config.theme || {}));
		delete a.style, (this.initial.theme = u(this.initial.theme, a));
		const n = this.storage.get('overrides') || {};
		this.setOverrides({
			config: n.config,
			theme: n.theme,
			search: { targets: n.targets?.search, settings: n.controller?.search },
			autocomplete: { targets: n.targets?.autocomplete, settings: n.controller?.autocomplete },
		}),
			this.storage.set('initial', this.initial),
			L(this, { storedState: T, state: T, overrides: T, initial: T, uiAbstractions: T });
	}
	switchTabs(e) {
		(this.storedState.activeTab = e), this.storage.set('editor', this.storedState);
	}
	toggleHide(e) {
		(this.storedState.hidden = e), this.storage.set('editor', this.storedState);
	}
	setOverrides(e) {
		(this.overrides.config = e.config || {}),
			(this.overrides.controller = { search: e.search?.settings, autocomplete: e.autocomplete?.settings }),
			(this.overrides.theme = e.theme || {}),
			(this.overrides.targets = { search: e.search?.targets || [], autocomplete: e.autocomplete?.targets || [] }),
			this.storage.set('overrides.config', this.overrides.config),
			this.storage.set('overrides.controller', this.overrides.controller),
			this.storage.set('overrides.targets', this.overrides.targets);
		const i = this.overrides.config.language || this.initial.config.language,
			r = this.overrides.config.currency || this.initial.config.currency;
		this.templatesStore.setLanguage(i),
			this.templatesStore.setCurrency(r),
			['search', 'autocomplete'].forEach((s) => {
				const a = window.athos?.controller?.[s];
				if (a && this.initial.controller[s]) {
					const n = { ...a.config, settings: JSON.parse(JSON.stringify(this.initial.controller[s])) },
						c = u(n, { settings: this.overrides.controller[s] || {} });
					a.setConfig(c);
				}
			}),
			['search', 'autocomplete'].forEach((s) => {
				const a = this.templatesStore.targets[s],
					n = u(S(this.initial.targets[s]) || [], S(this.overrides.targets[s]) || [], { arrayMerge: V });
				a.forEach((c, o) => {
					const d = n[o];
					d &&
						Object.keys(d).forEach((h) => {
							c.setValue(h, d[h]);
						});
				});
			}),
			this.setTheme(this.overrides.theme.extends ?? this.initial.theme.extends);
	}
	resetOverrides() {
		this.storage.set('overrides', void 0), this.setOverrides({});
	}
	setActiveDomSelector(e) {
		e?.length ? ((this.state.activeDomSelector = e), this.toggleHide(!0)) : ((this.state.activeDomSelector = ''), this.toggleHide(!1));
	}
	setConfigOverride(e) {
		const { path: i, value: r } = e,
			s = i.reduce((c, o) => c && c[o], this.initial.config),
			a = k(i, r == s ? void 0 : r),
			n = w(u(this.overrides.config || {}, a || {}));
		(this.overrides.config = n),
			this.storage.set('overrides.config', n),
			i[0] === 'language'
				? this.templatesStore.setLanguage(r || s).then(() => {
						this.storage.set('overrides.config', n);
				  })
				: i[0] === 'currency' &&
				  this.templatesStore.setCurrency(r || s).then(() => {
						this.storage.set('overrides.config', n);
				  });
	}
	setTheme(e) {
		const i = { extends: e };
		this.initial.theme.extends === e && (i.extends = void 0),
			(this.overrides.theme = u(this.overrides.theme, i)),
			this.storage.set('overrides.theme', this.overrides.theme);
		const r = this.templatesStore.library.themes[e];
		if (r) {
			const n = JSON.parse(JSON.stringify(this.templatesStore.config.theme || {}));
			delete n.style,
				(this.initial.theme.variables = u(r.variables || {}, n.variables || {})),
				Object.keys(this.initial.theme.variables.colors).forEach((c) => {
					const o = this.initial.theme.variables.colors[c],
						d = H(o || '#000');
					this.initial.theme.variables.colors[c] = d.isValid() ? d.toHex() : o;
				}),
				this.storage.set('initial', this.initial);
		}
		const s = u(this.initial.theme || {}, this.overrides.theme || {}),
			a = I(s);
		Object.keys(this.templatesStore.themes.library).forEach((n) => {
			this.templatesStore.themes.library[n].setEditorOverrides(a);
		}),
			Object.keys(this.templatesStore.targets).forEach((n) => {
				if (n == 'recommendation') {
					const c = this.templatesStore.targets.recommendation;
					Object.keys(c).forEach((o) => {
						c[o].forEach((h) => {
							h.setTheme(e, 'library');
						});
					});
				} else
					this.templatesStore.targets[n].forEach((o) => {
						o.setTheme(e, 'library');
					});
			});
	}
	setControllerOverride(e) {
		const { path: i, value: r, controller: s } = e,
			a = s.type,
			n = { [a]: k(i, r) };
		(this.overrides.controller = u(this.overrides.controller || {}, n)),
			(this.overrides.controller = w(this.overrides.controller)),
			this.storage.set(`overrides.controller.${a}`, this.overrides.controller[a]);
		const c = u({ settings: this.initial.controller[a] || {} }, { settings: this.overrides.controller[a] || {} });
		s?.setConfig(c);
	}
	registerController(e) {
		const i = JSON.parse(JSON.stringify(e.config.settings)),
			r = e.type;
		(this.initial.controller[r] = i), this.storage.set(`initial.controller.${r}`, this.initial.controller[r]);
		const s = u(e.config, { settings: this.overrides.controller[r] || {} });
		if ((e.setConfig(s), r === 'autocomplete' && O(e), r === 'search')) {
			const a = e.client.config.globals || {},
				n = e.config.globals?.siteId || a?.siteId || this.templatesStore.config.config?.siteId || '';
			this.initial.config.siteId != n && this.storage.set('overrides.config.siteId', n);
		}
	}
	getTargets() {
		const e = this.templatesStore.targets,
			i = e.search.map((o) => ({ type: 'search', target: o, template: o.component, selector: o.selector })),
			r = e.autocomplete.map((o) => ({ type: 'autocomplete', target: o, template: o.component, selector: o.selector })),
			s = e.recommendation.bundle.map((o) => ({ type: 'recommendation/bundle', target: o, template: o.component, selector: o.selector })),
			a = e.recommendation.default.map((o) => ({ type: 'recommendation/default', target: o, template: o.component, selector: o.selector })),
			n = e.recommendation.email.map((o) => ({ type: 'recommendation/email', target: o, template: o.component, selector: o.selector }));
		return [...i, ...r, ...s, ...a, ...n];
	}
	generateTemplatesConfig(e) {
		const i = (l) =>
				l === void 0 || l === !0
					? { initial: !0, overrides: !0 }
					: l === !1
					? { initial: !1, overrides: !1 }
					: { initial: l.initial ?? !0, overrides: l.overrides ?? !0 },
			r = i(e?.config);
		let s, a, n;
		e?.theme === void 0 || e?.theme === !0
			? ((s = { initial: !0, overrides: !0 }), (a = { initial: !0, overrides: !0 }), (n = { initial: !0, overrides: !0 }))
			: e?.theme === !1
			? ((s = { initial: !1, overrides: !1 }), (a = { initial: !1, overrides: !1 }), (n = { initial: !1, overrides: !1 }))
			: ((s = i(e.theme.extends)), (a = i(e.theme.variables)), (n = i(e.theme.overrides)));
		const c = s.initial || s.overrides || a.initial || a.overrides || n.initial || n.overrides,
			o = JSON.parse(JSON.stringify(this.templatesStore.config));
		delete o.search,
			delete o.autocomplete,
			delete o.recommendation,
			delete o.components,
			r.initial || delete o.config,
			c
				? o.theme && (s.initial || delete o.theme.extends, a.initial || delete o.theme.variables, n.initial || delete o.theme.overrides)
				: delete o.theme;
		const d = {};
		if ((r.overrides && (d.config = this.storage.get('overrides.config') || {}), c)) {
			const l = this.storage.get('overrides.theme') || {},
				g = {};
			s.overrides && l.extends !== void 0 && (g.extends = l.extends),
				a.overrides && l.variables !== void 0 && (g.variables = l.variables),
				n.overrides && l.overrides !== void 0 && (g.overrides = l.overrides),
				Object.keys(g).length && (d.theme = g);
		}
		const h = this.getTargets();
		if (e?.search !== !1) {
			const l = h.filter((g) => g.type === 'search').map((g) => ({ selector: g.selector, component: g.target.component }));
			l.length && (d.search = { targets: l, settings: this.overrides.controller.search || {} });
		}
		if (e?.autocomplete !== !1) {
			const l = h.filter((g) => g.type === 'autocomplete').map((g) => ({ selector: g.selector, component: g.target.component }));
			l.length && (d.autocomplete = { targets: l, settings: this.overrides.controller.autocomplete || {} });
		}
		const m = u(o, d),
			b = w(m);
		e?.unlocked || delete b.unlocked;
		const C = ['unlocked', 'config', 'theme', 'search', 'autocomplete'],
			f = {};
		for (const l of C) l in b && (f[l] = b[l]);
		for (const l of Object.keys(b)) l in f || (f[l] = b[l]);
		return f;
	}
}
function w(t) {
	const e = (i) => {
		if (i === null || typeof i != 'object') return i;
		if (Array.isArray(i))
			return i
				.map((s) => e(s))
				.filter((s) => (s == null ? !1 : typeof s == 'object' ? (Array.isArray(s) ? s.length > 0 : Object.keys(s).length > 0) : !0));
		const r = {};
		return (
			Object.entries(i).forEach(([s, a]) => {
				if (a !== void 0)
					if (a !== null && typeof a == 'object') {
						const n = e(a);
						(Array.isArray(n) ? n.length > 0 : Object.keys(n).length > 0) && (r[s] = n);
					} else r[s] = a;
			}),
			r
		);
	};
	return e(t);
}
function k(t, e) {
	return t
		.slice()
		.reverse()
		.reduce((i, r) => {
			const s = r.match(/^\[(\d+)\]$/);
			if (s) {
				const a = parseInt(s[1], 10),
					n = [];
				return (n[a] = i), n;
			}
			return { [r]: i };
		}, e);
}
function I(t) {
	const { overrides: e, variables: i } = t,
		r = {};
	return (
		i && (r.variables = i),
		e?.default && (r.components = e.default),
		(e?.mobile || e?.tablet || e?.desktop) && (r.responsive = { mobile: e?.mobile, tablet: e?.tablet, desktop: e?.desktop }),
		r
	);
}
export { q as TemplateEditorStore };
