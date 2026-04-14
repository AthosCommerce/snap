'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3833],
		{
			'./src/Templates/Stores/TemplateEditor/TemplateEditorStore.ts'(j, b, h) {
				h.r(b), h.d(b, { TemplateEditorStore: () => E });
				var f = h('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Storage/StorageStore.js'),
					g = h('../../node_modules/mobx/dist/mobx.esm.js'),
					O = h('../../node_modules/color/index.js'),
					C = h.n(O),
					S = h('../../node_modules/deepmerge/dist/cjs.js'),
					c = h.n(S),
					T = h('./src/Templates/Stores/TemplateStore.ts');
				const R = (t) => [
					{
						description: '',
						controls: [
							{
								type: 'text',
								label: 'SiteId',
								description: 'site id used to connect to the athos service',
								getDisplayState: () => 'disabled',
								getValue: () => t.overrides.config.siteId ?? t.initial.config.siteId ?? '',
								shouldShowReset: () => typeof t.overrides.config.siteId < 'u',
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
								getValue: () => t.overrides.config.platform || t.initial.config.platform || 'other',
								shouldShowReset: () => typeof t.overrides.config.platform < 'u',
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
								getValue: () => t.overrides.config.language || t.initial.config.language || 'en',
								shouldShowReset: () => typeof t.overrides.config.language < 'u',
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
								getOptions: () => [
									{
										options: [
											{ label: 'USD', value: 'usd' },
											{ label: 'EUR', value: 'eur' },
											{ label: 'AUD', value: 'aud' },
										],
									},
								],
								getValue: () => t.overrides.config.currency || t.initial.config.currency || 'usd',
								shouldShowReset: () => typeof t.overrides.config.currency < 'u',
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
				var v = h('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				function w(t) {
					return [
						{
							controls: [
								{
									type: 'dropdown',
									label: 'Theme',
									description: 'Theme for styling the templates',
									getDisplayState: () => 'visible',
									getOptions: () => [{ options: Object.keys(t.templatesStore.themes.library).map((s) => ({ value: s })) }],
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
									shouldShowReset: () => typeof t.overrides.theme.variables?.breakpoints?.mobile < 'u',
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
									shouldShowReset: () => typeof t.overrides.theme.variables?.breakpoints?.tablet < 'u',
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
									shouldShowReset: () => typeof t.overrides.theme.variables?.breakpoints?.desktop < 'u',
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
									label: 'Text Color',
									description: 'Text color for the theme',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.colors?.text ?? t.initial.theme.variables?.colors?.text ?? '',
									shouldShowReset: () => typeof t.overrides.theme.variables?.colors?.text < 'u',
									onValueChange: (0, v.s)((e) => {
										t.setThemeOverride({ path: ['variables', 'colors', 'text'], value: e });
									}, 50),
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'colors', 'text'], value: void 0 });
									},
								},
								{
									type: 'color',
									label: 'Primary Color',
									description: 'Primary color for the theme',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.colors?.primary ?? t.initial.theme.variables?.colors?.primary ?? '',
									shouldShowReset: () => typeof t.overrides.theme.variables?.colors?.primary < 'u',
									onValueChange: (0, v.s)((e) => {
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
									shouldShowReset: () => typeof t.overrides.theme.variables?.colors?.secondary < 'u',
									onValueChange: (0, v.s)((e) => {
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
									shouldShowReset: () =>
										!!t.overrides.theme.variables?.colors?.accent &&
										t.overrides.theme.variables?.colors?.accent !== t.initial.theme.variables?.colors?.accent,
									onValueChange: (0, v.s)((e) => {
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
				function D(t) {
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
										typeof e > 'u' || !i || t.setControllerOverride({ path: ['infinite', 'enabled'], value: !!e, controller: i });
									},
									onReset: (e) => {
										e && t.setControllerOverride({ path: ['infinite'], controller: e });
									},
								},
							],
						},
					];
				}
				function V(t) {
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
											s = t.overrides.controller.autocomplete?.history,
											o = s?.enabled !== void 0;
										return (o && i !== o) || e?.limit !== s?.limit;
									},
									onValueChange: (e, i) => {
										if (typeof e > 'u' || !i) return;
										const s = t.initial.controller.autocomplete?.history,
											o = s?.enabled ? s?.limit : 'Disabled';
										e === 'Disabled' && o !== 'Disabled'
											? t.setControllerOverride({ path: ['history'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller: i })
											: e !== 'Disabled' && o === 'Disabled'
											? t.setControllerOverride({ path: ['history'], value: { enabled: !0, limit: Number(e) }, controller: i })
											: t.setControllerOverride({ path: ['history'], value: { enabled: void 0, limit: void 0, showResults: void 0 }, controller: i }),
											u(i);
									},
									onReset: (e) => {
										if (!e) return;
										const i = { enabled: void 0, limit: void 0, showResults: void 0 };
										t.initial.controller.autocomplete?.history?.enabled && delete i.showResults,
											t.setControllerOverride({ path: ['history'], value: i, controller: e }),
											u(e);
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
											s = t.overrides.controller.autocomplete?.trending,
											o = s?.enabled !== void 0;
										return o && (i !== o || e?.limit !== s?.limit);
									},
									onValueChange: async (e, i) => {
										if (typeof e > 'u' || !i) return;
										const s = t.initial.controller.autocomplete?.trending,
											o = s?.enabled ? s?.limit : 'Disabled';
										e === 'Disabled' && o !== 'Disabled'
											? t.setControllerOverride({ path: ['trending'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller: i })
											: e !== 'Disabled' && o === 'Disabled'
											? t.setControllerOverride({ path: ['trending'], value: { enabled: !0, limit: Number(e) }, controller: i })
											: e !== 'Disabled' && o !== e
											? t.setControllerOverride({ path: ['trending'], value: { enabled: !0, limit: Number(e) }, controller: i })
											: t.setControllerOverride({
													path: ['trending'],
													value: { enabled: void 0, limit: void 0, showResults: void 0 },
													controller: i,
											  }),
											u(i);
									},
									onReset: (e) => {
										if (!e) return;
										const i = { enabled: void 0, limit: void 0, showResults: void 0 };
										t.initial.controller.autocomplete?.trending?.enabled && delete i.showResults,
											t.setControllerOverride({ path: ['trending'], value: i, controller: e }),
											u(e);
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
											s = e?.store.config.settings?.trending?.enabled,
											o = [{ value: 'Disabled' }];
										return i && o.push({ value: 'History' }), s && o.push({ value: 'Trending' }), [{ options: o }];
									},
									getValue: (e) =>
										e?.store.config.settings?.trending?.showResults
											? 'Trending'
											: e?.store.config.settings?.history?.showResults
											? 'History'
											: 'Disabled',
									shouldShowReset: () => {
										let e = 'Disabled';
										const i = t.initial.controller.autocomplete;
										i?.trending?.showResults && i?.trending?.enabled !== !1
											? (e = 'Trending')
											: i?.history?.showResults && i?.history?.enabled !== !1 && (e = 'History');
										let s = 'Disabled';
										const o = t.overrides.controller.autocomplete;
										return (
											o?.trending?.showResults && o?.trending?.enabled !== !1
												? (s = 'Trending')
												: o?.history?.showResults && o?.history?.enabled !== !1 && (s = 'History'),
											e !== s
										);
									},
									onValueChange: (e, i) => {
										typeof e > 'u' ||
											!i ||
											(e === 'Disabled'
												? (t.setControllerOverride({ path: ['history', 'showResults'], controller: i }),
												  t.setControllerOverride({ path: ['trending', 'showResults'], controller: i }))
												: e === 'History'
												? (t.setControllerOverride({ path: ['history', 'showResults'], value: !0, controller: i }),
												  t.setControllerOverride({ path: ['trending', 'showResults'], controller: i }))
												: e === 'Trending' &&
												  (t.setControllerOverride({ path: ['history', 'showResults'], controller: i }),
												  t.setControllerOverride({ path: ['trending', 'showResults'], value: !0, controller: i })),
											u(i));
									},
									onReset: (e) => {
										e &&
											(t.setControllerOverride({ path: ['history', 'showResults'], controller: e }),
											t.setControllerOverride({ path: ['trending', 'showResults'], controller: e }),
											u(e));
									},
								},
							],
						},
					];
				}
				async function u(t) {
					t.reset(), t.store.initHistory();
					const e = t.config.settings?.trending?.enabled || (t.config.settings?.trending && t.config.settings?.trending?.enabled == null),
						i = t.config.settings?.history?.enabled || (t.config.settings?.history && t.config.settings?.history?.enabled == null);
					e
						? (await t.searchTrending({ limit: t.config.settings?.trending?.limit }),
						  t.config.settings?.trending?.showResults && t.store.trending.length && !t.store.results && t.store.trending[0].preview())
						: t.store.updateTrendingTerms({ trending: { queries: [] } }),
						!e && i && t.config.settings?.history?.showResults && t.store.history.length && !t.store.results && t.store.history[0].preview();
				}
				const k = {
					breakpoints: { mobile: 600, tablet: 900, desktop: 1200 },
					colors: { text: '#333333', primary: '#1D4990', secondary: '#6187ae', accent: '#00AEEF' },
				};
				class E {
					constructor({ templatesStore: e }) {
						(this.state = { hidden: !1, activeTab: 'configuration' }),
							(this.overrides = { config: {}, controller: {}, theme: {} }),
							(this.initial = { config: { language: 'en', currency: 'usd' }, controller: {}, theme: { extends: 'base', variables: k } }),
							(this.tabs = ['templates', 'configuration']),
							(this.uiAbstractions = { templates: { config: R(this), theme: w(this) }, controllers: { search: D(this), autocomplete: V(this) } }),
							(this.setThemeOverride = (s) => {
								const { path: o, value: n } = s,
									a = o.reduce((l, y) => l && l[y], this.initial.theme),
									d = p(o, n == a ? void 0 : n);
								(this.overrides.theme = m(c()(this.overrides.theme || {}, d))), this.storage.set('overrides.theme', this.overrides.theme);
								const r = c()(this.initial.theme || {}, this.overrides.theme || {});
								Object.keys(this.templatesStore.themes.library).forEach((l) => {
									this.templatesStore.themes.library[l].setEditorOverrides({ variables: r.variables || {} });
								});
							}),
							(this.templatesStore = e),
							(this.storage = new f.t({ type: f.e.local, key: T.NG })),
							(this.state = this.storage.get('editor') || this.state),
							(this.overrides = this.storage.get('overrides') || this.overrides),
							(this.overrides.config = this.overrides.config || {}),
							(this.overrides.controller = this.overrides.controller || {}),
							(this.overrides.theme = this.overrides.theme || {}),
							(this.initial.config = c()(this.initial.config, e.config.config)),
							(this.initial.controller = {});
						const i = JSON.parse(JSON.stringify(e.config.theme || {}));
						delete i.style,
							delete i.overrides,
							(this.initial.theme = c()(this.initial.theme, i)),
							Object.keys(this.initial.theme.variables.colors).forEach((s) => {
								const o = this.initial.theme.variables.colors[s];
								this.initial.theme.variables.colors[s] = C()(o).hex();
							}),
							this.setTheme(this.overrides.theme.extends ?? this.initial.theme.extends),
							this.setThemeOverride({ path: [], value: void 0 }),
							this.storage.set('initial', this.initial),
							(0, g.Gn)(this, { state: g.sH, overrides: g.sH, initial: g.sH, uiAbstractions: g.sH });
					}
					switchTabs(e) {
						(this.state.activeTab = e), this.storage.set('editor', this.state);
					}
					toggleHide(e) {
						(this.state.hidden = e), this.storage.set('editor', this.state);
					}
					setConfigOverride(e) {
						const { path: i, value: s } = e,
							o = i.reduce((d, r) => d && d[r], this.initial.config),
							n = p(i, s == o ? void 0 : s),
							a = m(c()(this.overrides.config || {}, n));
						(this.overrides.config = a),
							this.storage.set('overrides.config', a),
							i[0] === 'language'
								? this.templatesStore.setLanguage(s || o).then(() => {
										this.storage.set('overrides.config', a);
								  })
								: i[0] === 'currency' &&
								  this.templatesStore.setCurrency(s || o).then(() => {
										this.storage.set('overrides.config', a);
								  });
					}
					setTheme(e) {
						const i = { extends: e };
						this.initial.theme.extends === e && (i.extends = void 0),
							(this.overrides.theme = c()(this.overrides.theme, i)),
							this.storage.set('overrides.theme', this.overrides.theme),
							Object.keys(this.templatesStore.targets).forEach((s) => {
								if (s == 'recommendation') {
									const o = this.templatesStore.targets[s];
									Object.keys(o).forEach((n) => {
										const a = o[n];
										Object.keys(a).forEach((d) => {
											a[d].setTheme(e, 'library');
										});
									});
								} else {
									const o = this.templatesStore.targets[s];
									Object.keys(o).forEach((n) => {
										o[n].setTheme(e, 'library');
									});
								}
							});
					}
					setControllerOverride(e) {
						const { path: i, value: s, controller: o } = e,
							n = o.type,
							a = { [n]: p(i, s) };
						(this.overrides.controller = c()(this.overrides.controller || {}, a)),
							(this.overrides.controller = m(this.overrides.controller)),
							this.storage.set(`overrides.controller.${n}`, this.overrides.controller[n]);
						const d = c()({ settings: this.initial.controller[n] || {} }, { settings: this.overrides.controller[n] || {} });
						o?.setConfig(d);
					}
					registerController(e) {
						const i = JSON.parse(JSON.stringify(e.config.settings)),
							s = e.type;
						(this.initial.controller[s] = i), this.storage.set(`initial.controller.${s}`, this.initial.controller[s]);
						const o = c()(e.config, { settings: this.overrides.controller[s] || {} });
						if ((e.setConfig(o), s === 'autocomplete' && u(e), s === 'search')) {
							const n = e.client.config.globals || {},
								a = e.config.globals?.siteId || n?.siteId || this.templatesStore.config.config.siteId || '';
							this.initial.config.siteId != a && this.storage.set('overrides.config.siteId', a);
						}
					}
					getTargets() {
						const e = this.templatesStore.targets,
							i = Object.keys(e.search || {}).map((r) => ({ type: 'search', target: r, template: e.search[r], selector: e.search[r].selector })),
							s = Object.keys(e.autocomplete || {}).map((r) => ({
								type: 'autocomplete',
								target: r,
								template: e.autocomplete[r],
								selector: e.autocomplete[r].selector,
							})),
							o = Object.keys(e.recommendation.bundle || {}).map((r) => ({
								type: 'recommendation/bundle',
								target: r,
								template: e.recommendation.bundle[r],
								selector: e.recommendation.bundle[r].selector,
							})),
							n = Object.keys(e.recommendation.default || {}).map((r) => ({
								type: 'recommendation/default',
								target: r,
								template: e.recommendation.default[r],
								selector: e.recommendation.default[r].selector,
							})),
							a = Object.keys(e.recommendation.email || {}).map((r) => ({
								type: 'recommendation/email',
								target: r,
								template: e.recommendation.email[r],
								selector: e.recommendation.email[r].selector,
							}));
						return [...i, ...s, ...o, ...n, ...a];
					}
					generateTemplatesConfig() {
						const e = JSON.parse(JSON.stringify(this.templatesStore.config));
						delete e.search, delete e.autocomplete, delete e.recommendation, delete e.components;
						const i = this.storage.get('overrides.config') || {},
							s = this.storage.get('overrides.theme') || {},
							o = { config: i, theme: s },
							n = this.getTargets(),
							a = n.filter((l) => l.type === 'search').map((l) => ({ selector: l.selector, component: l.template.component })),
							d = n.filter((l) => l.type === 'autocomplete').map((l) => ({ selector: l.selector, component: l.template.component }));
						return (
							a.length && (o.search = { targets: a, settings: this.overrides.controller.search || {} }),
							d.length && (o.autocomplete = { targets: d, settings: this.overrides.controller.autocomplete || {} }),
							{ ...c()(e, o), unlocked: !1 }
						);
					}
				}
				function m(t) {
					const e = (i) => {
						if (i === null || typeof i != 'object') return i;
						const s = {};
						return (
							Object.entries(i).forEach(([o, n]) => {
								if (n !== void 0)
									if (n !== null && typeof n == 'object') {
										const a = e(n);
										Object.keys(a).length > 0 && (s[o] = a);
									} else s[o] = n;
							}),
							s
						);
					};
					return e(t);
				}
				function p(t, e) {
					return t
						.slice()
						.reverse()
						.reduce((i, s, o) => (o === 0 ? { [s]: e } : { [s]: i }), {});
				}
			},
		},
	]);
})();
