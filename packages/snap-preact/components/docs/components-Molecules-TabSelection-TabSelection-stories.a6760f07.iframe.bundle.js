(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2563],
		{
			'./components/src/components/Molecules/TabSelection/TabSelection.stories.tsx'(D, i, t) {
				'use strict';
				t.r(i), t.d(i, { Default: () => g, __namedExportsOrder: () => y, default: () => n });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = t('./components/src/components/Molecules/TabSelection/TabSelection.tsx'),
					p = t('./components/src/utilities/storybook.tsx'),
					d = t('./components/src/utilities/componentArgs.ts'),
					l = t('./components/src/utilities/snapify.ts'),
					h = t('./src/Templates/Stores/TabManagerStore.ts');
				const e =
						"# TabSelection\n\nRenders a set of tabs for switching between the catalogs configured in the TabManagerStore. Each tab is bound to its own controller, and selecting one makes that controller's results the active set.\n\n## Sub-components\n- Button\n\n## Usage\n\n### tabManager\nThe required `tabManager` prop specifies a reference to the `TabManagerStore`. Nothing is rendered without it, or when it contains no tabs.\n\nWhen using Snap Templates the `tabManager` is created for you from the `tabs` config and passed down through the layout, so it rarely needs to be provided by hand.\n\n```tsx\n<TabSelection tabManager={tabManager} />\n```\n\n### titleText\nThe `titleText` prop renders an `h4` heading above the tabs. No heading is rendered unless it, or a `lang.title` value, is set.\n\n```tsx\n<TabSelection tabManager={tabManager} titleText={'Search In'} />\n```\n\n### showResultCount\nThe `showResultCount` prop displays the number of results each tab returned next to its label. Counts only appear once a tab's controller has loaded, so tabs configured with `prefetch: false` show no count until they are selected. Default: `true`\n\n```tsx\n<TabSelection tabManager={tabManager} showResultCount={false} />\n```\n\n### enableEmptyTabs\nBy default a tab whose controller returned zero results is rendered disabled, so shoppers are not sent to an empty result set. Setting `enableEmptyTabs` to `true` leaves those tabs selectable. Default: `false`\n\nThe currently active tab is never disabled, even when it has no results.\n\nTabs that have not loaded yet are not treated as empty - their result count is unknown, so they stay enabled.\n\n```tsx\n<TabSelection tabManager={tabManager} enableEmptyTabs={true} />\n```\n\n### onTabClick\nThe `onTabClick` prop specifies a callback invoked with the click event and the clicked tab. It fires before the tab is made active, and does not prevent the switch.\n\n```tsx\n<TabSelection tabManager={tabManager} onTabClick={(e, tab) => console.log('tab selected', tab.id)} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the TabSelection component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Heading text/attributes | `tabManager` (TabManagerStore) |\n| `tabList` | Tab list container attributes | `tabManager` (TabManagerStore) |\n| `tabButton` | Individual tab text/attributes | `tab` (Tab), `resultCount` (number \\| undefined), `active` (boolean) |\n\n### Example\n\n```tsx\n<TabSelection\n	tabManager={tabManager}\n	titleText={'Search In'}\n	lang={{\n		title: {\n			value: 'Search across our catalogs',\n		},\n		tabList: {\n			attributes: {\n				'aria-label': 'Catalogs',\n			},\n		},\n		tabButton: {\n			value: (data) => `${data.tab.label || data.tab.id}${data.active ? ' (viewing)' : ''}`,\n			attributes: {\n				'aria-label': (data) => `${data.tab.label || data.tab.id}, ${data.resultCount} results`,\n			},\n		},\n	}}\n/>\n```\n\n",
					n = {
						title: 'Molecules/TabSelection',
						component: _.E,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(u.oz, { options: { overrides: { code: p.Z } }, children: e }), (0, s.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						argTypes: {
							tabManager: {
								description: 'Tab manager store reference',
								table: { type: { summary: 'tab manager store object' } },
								control: { type: 'none' },
							},
							titleText: {
								description: 'Heading rendered above the tabs',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							showResultCount: {
								description: 'Display the result count alongside each tab label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							enableEmptyTabs: {
								description: 'Keep tabs with no results selectable',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onTabClick: {
								description: 'Tab click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function(e: Event, tab: Tab)' } },
								control: { type: 'none' },
								action: 'onTabClick',
							},
							...d.F,
						},
					},
					v = [
						{ id: 'TabSelectionProducts', siteId: 'atkzs2', param: 'products', label: 'Products' },
						{ id: 'TabSelectionSale', siteId: 'atkzs2', param: 'sale', label: 'Sale' },
					],
					o = v.map((E) => l.p.search({ id: E.id, globals: { siteId: E.siteId } })),
					g = (E, { loaded: { tabManager: O } }) => (0, s.Y)(_.E, { ...E, tabManager: O });
				(g.loaders = [async () => (await Promise.all(o.map((E) => E.search())), { tabManager: new h.E(v, o) })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: TabSelectionProps, {
  loaded: {
    tabManager
  }
}: {
  loaded: {
    tabManager: TabManagerStore;
  };
}) => {
  return <TabSelection {...args} tabManager={tabManager} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(D, i, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = t('../../node_modules/classnames/index.js'),
					p = t.n(_),
					d = t('../../node_modules/mobx-react-lite/es/index.js'),
					l = t('./components/src/providers/cache.tsx'),
					h = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					e = t('./components/src/providers/treePath.tsx'),
					n = t('./components/src/hooks/useA11y.tsx'),
					v = t('./components/src/utilities/cloneWithProps.tsx'),
					o = t('./components/src/utilities/defined.ts'),
					g = t('./components/src/utilities/mergeProps.ts'),
					y = t('./components/src/utilities/mergeStyles.ts'),
					E = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = t('./components/src/hooks/useLang.tsx'),
					M = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					x = t('../../node_modules/deepmerge/dist/cjs.js'),
					U = t.n(x);
				const K = ({ native: I, color: r, backgroundColor: a, borderColor: c, theme: m }) =>
						I
							? (0, u.AH)({})
							: (0, u.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: r || m?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: a || '#fff',
									border: `1px solid ${c || r || m?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					L = (0, d.PA)((I) => {
						const r = (0, h.u)(),
							c = { disableA11y: !1, treePath: (0, e.LU)() },
							m = (0, g.v6)('button', r, c, I),
							{
								content: b,
								children: T,
								disabled: A,
								native: W,
								onClick: N,
								disableA11y: H,
								disableStyles: V,
								className: k,
								internalClassName: z,
								icon: P,
								lang: w,
								treePath: S,
								style: Q,
								styleScript: q,
								themeStyleScript: J,
								...f
							} = m,
							{ overrideElement: C, shouldRenderDefault: j } = (0, M._)('button', m);
						if (!j) return C;
						const Y = { icon: { internalClassName: 'ss__button__icon', ...(0, o.s)({ disableStyles: V }), theme: m?.theme, treePath: S } },
							B = {
								...(0, y.Z)(m, K),
								className: p()('ss__button', { 'ss__button--native': W, 'ss__button--disabled': A }, k, z),
								disabled: A,
								onClick: (G) => !A && N && N(G),
								...f,
							},
							Z = { ref: (G) => (0, n.iy)(G) },
							X = {},
							$ = U()(X, w || {}),
							R = (0, O.u)($, {}, { activeBreakpoint: r?.activeBreakpoint }),
							tt = !!f.dangerouslySetInnerHTML;
						return b || T || P || w?.button?.value || tt
							? (0, s.Y)(l._, {
									children: W
										? (0, s.FD)('button', {
												...B,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...R.button?.all,
														children: [(0, v.Y)(b, { treePath: S }), (0, v.Y)(T, { treePath: S })],
													}),
													P && (0, s.Y)(E.I, { ...Y.icon, ...(typeof P == 'string' ? { icon: P } : P) }),
												],
										  })
										: (0, s.FD)('div', {
												...(H ? {} : Z),
												role: 'button',
												'aria-disabled': A,
												...B,
												...R.button?.attributes,
												children: [
													b || T || R.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...R.button?.value,
																children: [(0, v.Y)(b, { treePath: S }), (0, v.Y)(T, { treePath: S })],
														  })
														: void 0,
													P && (0, s.Y)(E.I, { ...Y.icon, ...(typeof P == 'string' ? { icon: P } : P) }),
												],
										  }),
							  })
							: null;
					});
				t.d(i, ['$', 0, L]);
			},
			'./components/src/components/Molecules/TabSelection/TabSelection.tsx'(D, i, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = t('../../node_modules/classnames/index.js'),
					p = t.n(_),
					d = t('../../node_modules/mobx-react-lite/es/index.js'),
					l = t('../../node_modules/deepmerge/dist/cjs.js'),
					h = t.n(l),
					e = t('./components/src/providers/cache.tsx'),
					n = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = t('./components/src/providers/treePath.tsx'),
					o = t('./components/src/utilities/defined.ts'),
					g = t('./components/src/utilities/mergeProps.ts'),
					y = t('./components/src/utilities/mergeStyles.ts'),
					E = t('./components/src/hooks/useLang.tsx'),
					O = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = t('./components/src/components/Atoms/Button/Button.tsx');
				const x = () =>
						(0, u.AH)({
							'.ss__tab-selection__title': { textAlign: 'center' },
							'.ss__tab-selection__tabs': {
								display: 'flex',
								gap: '10px',
								textAlign: 'center',
								alignItems: 'center',
								alignContent: 'center',
								justifyContent: 'center',
							},
							'.ss__tab-selection__button--active': { fontWeight: 'bold' },
							'.ss__tab-selection__button__count': { marginLeft: '5px' },
						}),
					U = (0, d.PA)((K) => {
						const L = (0, n.u)(),
							r = { treePath: (0, v.LU)(), showResultCount: !0, enableEmptyTabs: !1 },
							a = (0, g.v6)('tabSelection', L, r, K),
							{
								tabManager: c,
								titleText: m,
								showResultCount: b,
								enableEmptyTabs: T,
								onTabClick: A,
								disableStyles: W,
								className: N,
								internalClassName: H,
								treePath: V,
							} = a,
							{ overrideElement: k, shouldRenderDefault: z } = (0, O._)('tabSelection', a);
						if (!z) return k;
						if (!c || !c.tabs?.length) return null;
						const P = { button: { ...(0, o.s)({ disableStyles: W }), theme: a.theme, treePath: V } };
						function w(f) {
							const C = f.store;
							return C?.loaded ? C.pagination?.totalResults : void 0;
						}
						const S = (0, y.Z)(a, x),
							Q = { title: { value: m }, tabList: { attributes: { 'aria-label': 'Result tabs' } } },
							q = h()(Q, { title: a.lang?.title || {}, tabList: a.lang?.tabList || {} }),
							J = (0, E.u)(q, { tabManager: c }, { activeBreakpoint: L?.activeBreakpoint });
						return (0, s.Y)(e._, {
							children: (0, s.FD)('div', {
								...S,
								className: p()('ss__tab-selection', N, H),
								children: [
									m || a.lang?.title?.value ? (0, s.Y)('h4', { className: 'ss__tab-selection__title', ...J.title?.all }) : null,
									(0, s.Y)('div', {
										className: 'ss__tab-selection__tabs',
										role: 'tablist',
										...J.tabList?.attributes,
										children: c.tabs.map((f) => {
											const C = c.active?.id === f.id,
												j = w(f.controller),
												Y = !T && !C && j === 0,
												F = f.label || f.id,
												B = b ? j : void 0,
												Z = { tabButton: { value: F, attributes: { 'aria-label': typeof B == 'number' ? `${F}, ${B} results` : F } } },
												X = h()(Z, { tabButton: a.lang?.tabButton || {} }),
												$ = (0, E.u)(X, { tab: f, resultCount: j, active: C }, { activeBreakpoint: L?.activeBreakpoint });
											return (0, s.FD)(
												M.$,
												{
													...P.button,
													internalClassName: p()('ss__tab-selection__button', `ss__tab-selection__button--${f.id}`, {
														'ss__tab-selection__button--active': C,
													}),
													disabled: Y,
													role: 'tab',
													'aria-selected': C,
													...$.tabButton?.attributes,
													onClick: (R) => {
														A && A(R, f), c.setActive(f.id);
													},
													children: [
														(0, s.Y)('span', { className: 'ss__tab-selection__button__label', ...$.tabButton?.value }),
														typeof B == 'number'
															? (0, s.FD)('span', { className: 'ss__tab-selection__button__count', children: ['(', B, ')'] })
															: null,
													],
												},
												f.id
											);
										}),
									}),
								],
							}),
						});
					});
				t.d(i, ['E', 0, U]);
			},
			'./components/src/hooks/useA11y.tsx'(D, i, t) {
				'use strict';
				t.d(i, { iy: () => d });
				const s = 9,
					u = 27,
					_ = 'ss-a11y',
					p =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function d(l, h, e, n) {
					const v = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${v}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = v),
							(o.innerHTML = `[${_}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					l &&
						!l.attributes?.[_] &&
						(l.setAttribute(_, !0),
						l.setAttribute('tabIndex', `${h || 0}`),
						l.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && o.target === l && l.click();
						}),
						e &&
							l.addEventListener('keydown', function (o) {
								const g = l.querySelectorAll(p),
									y = g[0],
									E = g[g.length - 1];
								if (o.keyCode == u) {
									l.focus(), n && n(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === s) &&
									(o.shiftKey
										? document.activeElement === y && (E.focus(), o.preventDefault())
										: document.activeElement === E && (y.focus(), o.preventDefault()));
							}));
				}
				t.d(i, ['DH', 0, p, 'aZ', 0, _]);
			},
			'./components/src/hooks/useLang.tsx'(D, i, t) {
				'use strict';
				const s = (u, _, p) => {
					const d = p ? { ..._, ...p } : _,
						l = {};
					return (
						Object.keys(u).forEach((h) => {
							const e = u && u[h],
								n = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (n.value = { 'ss-lang': h, dangerouslySetInnerHTML: { __html: e.value(d) } })
										: (n.value = { 'ss-lang': h, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((n.attributes = { 'ss-lang': h }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = e.attributes['aria-label'](d))
											: (n.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](d))
											: (n.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (n.attributes.title = e.attributes.title(d))
											: (n.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (n.attributes.alt = e.attributes.alt(d)) : (n.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = e.attributes.placeholder(d))
											: (n.attributes.placeholder = e.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': h })),
								(l[h] = n);
						}),
						l
					);
				};
				t.d(i, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(D, i, t) {
				'use strict';
				const s = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				t.d(i, ['F', 0, s]);
			},
			'./components/src/utilities/defined.ts'(D, i, t) {
				'use strict';
				t.d(i, { s: () => s });
				function s(u) {
					const _ = {};
					return (
						Object.keys(u).map((p) => {
							u[p] !== void 0 && (_[p] = u[p]);
						}),
						_
					);
				}
			},
			'./components/src/utilities/snapify.ts'(D, i, t) {
				'use strict';
				t.d(i, { p: () => U });
				var s = t('../../node_modules/mobx/dist/mobx.esm.js'),
					u = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					h = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					e = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					n = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					o = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					O = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const M = {},
					x = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(a) {
						const c = a.id;
						if (M[c]) return M[c];
						const m = (M[c] = L({ client: x, controller: a }));
						return (
							m.on('afterStore', async ({ controller: b }, T) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await T();
							}),
							m.init(),
							m
						);
					}
					static autocomplete(a) {
						const c = a.id;
						if (M[c]) return M[c];
						const m = (M[c] = I({ client: x, controller: a }));
						return (
							m.on('afterStore', async ({ controller: b }, T) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await T();
							}),
							m.init(),
							m
						);
					}
					static search(a) {
						const c = a.id;
						if (M[c]) return M[c];
						const m = (M[c] = K({ client: x, controller: a }));
						return (
							m.on('afterStore', async ({ controller: b }, T) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await T();
							}),
							m.init(),
							m
						);
					}
				}
				function K(r) {
					const a = new n.V(new o.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), v.X);
					return new u.Tp(r.controller, {
						client: new d.K(r.client.globals, r.client.config),
						store: new h.U(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new O.J(r.client.globals),
					});
				}
				function L(r) {
					const a = new n.V(new o.E(), v.X).detach(!0);
					return new p.c(r.controller, {
						client: new d.K(r.client.globals, r.client.config),
						store: new e.t(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new O.J(r.client.globals),
					});
				}
				function I(r) {
					const a = new n.V(new o.E(), v.X).detach();
					return new _.Z(r.controller, {
						client: new d.K(r.client.globals, r.client.config),
						store: new l.Y(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new g.E(),
						profiler: new y.U(),
						logger: new E.V(),
						tracker: new O.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, i, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					p = (d) => {
						const l = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								l.current && d.className?.includes('lang-') && !d.className?.includes(_) && window?.Prism?.highlightElement(l.current);
							}, [d.className, d.children, l]),
							(0, s.Y)('code', { ...d, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(i, ['Z', 0, p]);
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function i(t) {
					const s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (D.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-TabSelection-TabSelection-stories.a6760f07.iframe.bundle.js.map
