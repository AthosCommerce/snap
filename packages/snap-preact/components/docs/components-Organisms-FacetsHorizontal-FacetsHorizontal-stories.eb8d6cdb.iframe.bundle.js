(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1249],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(U, g, e) {
				'use strict';
				e.d(g, { P: () => t });
				const t = (i) => i.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(U, g, e) {
				'use strict';
				e.d(g, { p: () => t });
				function t(i) {
					if (typeof i != 'string') return i;
					let c = i.toLowerCase();
					return (c = c.replace(/[^\w\s]/g, '').trim()), (c = c.replace(/\s/g, '-')), c;
				}
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(U, g, e) {
				'use strict';
				e.r(g), e.d(g, { Default: () => n, __namedExportsOrder: () => y, default: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					k = e('./components/src/utilities/storybook.tsx'),
					w = e('./components/src/utilities/componentArgs.ts'),
					A = e('./components/src/utilities/snapify.ts'),
					R = e('./components/src/components/Atoms/Icon/paths.tsx');
				const B =
						"# FacetsHorizontal\n\nRenders all facets in a horizontal display. Also incluses MobileSidebar.\n\n## Sub-components\n- Facet\n- Dropdown\n- MobileSidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.\n\n```tsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowFiltersButton\nThe `alwaysShowFiltersButton` prop will always render the button and MobileSidebar, not just when facets are overflowing.\n\n```tsx\n<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideFiltersButton\nThe `hideFiltersButton` specifies wether the filters button should be rendered or not. If true, the button will render when there are more filters to show than the limit prop allows (unless the alwaysShowFiltersButton prop is passed, which will ignore the limit). \n\n```tsx\n<FacetsHorizontal controller={controller} hideFiltersButton={true}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```tsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```",
					r = {
						title: 'Organisms/FacetsHorizontal',
						component: c.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: k.Z } }, children: B }), (0, t.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(E) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(E, {}) })],
						argTypes: {
							facets: {
								description: 'Facets store reference',
								type: { required: !1 },
								table: { type: { summary: 'Facets store object' } },
								control: { type: 'none' },
							},
							limit: {
								description: 'Maximum number of facets to display',
								defaultValue: 6,
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 6 } },
								control: { type: 'number' },
							},
							alwaysShowFiltersButton: {
								defaultValue: !1,
								description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideFiltersButton: {
								defaultValue: !1,
								description: 'Hide the filters button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onFacetOptionClick: {
								description: 'Callback function for when a facet option is clicked',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onFacetOptionClick',
							},
							showSelectedCount: {
								description: 'shows the number of selected options within the facet headers',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSelectedCountParenthesis: {
								description: 'specifies if the parenthesis should render around the selected count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							showClearAllText: {
								description: 'specifies if the clear all text should render',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							clearAllText: {
								description: 'text to show in the clear all link',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
								control: { type: 'text' },
							},
							clearAllIcon: {
								description: 'Icon to show in the clear all link',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								options: [...Object.keys(R.c)],
								control: { type: 'select' },
							},
							iconExpand: {
								description: 'Icon for when facet is collapsed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(R.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(R.c)],
								control: { type: 'select' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							...w.F,
						},
					},
					a = A.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					n = (E, { loaded: { controller: b } }) => (0, t.Y)(c.b, { ...E, controller: b });
				(n.loaders = [async () => (await a.search(), { controller: a })]),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: {
								originalSource: `(args: FacetsHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <FacetsHorizontal {...args} controller={controller} />;
}`,
								...n.parameters?.docs?.source,
							},
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(U, g, e) {
				'use strict';
				e.d(g, { B: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					k = e('../../node_modules/classnames/index.js'),
					w = e.n(k),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(A),
					B = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					r = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					X = e('./components/src/hooks/useComponent.tsx'),
					G = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const W = ({ horizontal: m }) =>
					(0, c.AH)({
						display: 'flex',
						flexDirection: m ? 'row' : 'column',
						alignItems: m ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: m ? 'row' : 'column',
							alignItems: m ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					});
				function C(m) {
					const x = (0, a.u)(),
						L = (0, n.uk)(),
						V = { treePath: (0, y.LU)() },
						I = (0, b.v6)('list', x, V, m),
						{
							titleText: Y,
							onSelect: Z,
							native: Q,
							multiSelect: te,
							hideOptionLabels: $,
							hideOptionIcons: oe,
							hideOptionCheckboxes: q,
							disabled: z,
							hideTitleText: re,
							options: J,
							requireSelection: ne,
							disableStyles: se,
							className: o,
							internalClassName: s,
							treePath: f,
							customComponent: u,
						} = I;
					if (u) {
						const h = (0, X.x)(L?.templates?.library.import.component.list || {}, u);
						if (h) return (0, t.Y)(h, { ...I });
					}
					let l = I.selected;
					const _ = {
							checkbox: { native: Q, ...(0, E.s)({ disableStyles: se }), theme: I?.theme, treePath: f },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, E.s)({ disableStyles: se }), theme: I?.theme, treePath: f },
						},
						D = (0, v.Z)(I, W);
					l && !Array.isArray(l) && (l = [l]);
					const [O, M] = (0, i.J0)(l || []),
						[F] = (0, i.J0)(l || []);
					try {
						if (l) {
							const h = JSON.stringify(F),
								T = JSON.stringify(l),
								p = JSON.stringify(O);
							h !== T && T !== p && M(l);
						}
					} catch {}
					const K = (h, T) => {
							let p;
							te
								? O.find((ee) => ee.value === T.value)
									? ((p = [...O]),
									  p.splice(
											p.findIndex((ee) => ee.value === T.value),
											1
									  ),
									  p.length == 0 && ne && (p = [T]))
									: (p = [...O, T])
								: !ne && O.find((ee) => ee.value === T.value)
								? (p = [])
								: (p = [T]),
								Z && Z(h, T, p),
								M(p);
						},
						N = {},
						H = R()(N, I.lang || {}),
						ae = (0, S.u)(H, { options: J, selectedOptions: O });
					return typeof J == 'object' && J?.length
						? (0, t.Y)(r._, {
								children: (0, t.FD)('div', {
									...D,
									className: w()('ss__list', { 'ss__list--native': Q, 'ss__list--disabled': z }, o, s),
									children: [
										(Y || H?.title?.value) && !re && (0, t.Y)('h5', { className: 'ss__list__title', ...ae.title?.all, children: Y }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': Y,
											children: J.map((h) => {
												const T = O.some((p) => p.value == h.value);
												return (0, t.FD)('li', {
													className: w()(`ss__list__option ss__list__option--${B.p(h.value?.toString())}`, {
														'ss__list__option--selected': T,
														'ss__list__option--disabled': h?.disabled,
														'ss__list__option--unavailable': h?.available === !1,
													}),
													ref: (p) => (0, j.iy)(p),
													onClick: (p) => !z && !h?.disabled && K(p, h),
													title: h.label,
													role: 'option',
													'aria-selected': T,
													'aria-disabled': h.disabled || h?.available === !1,
													children: [
														!q && (0, t.Y)(d.S, { ..._.checkbox, checked: T, disableA11y: !0, 'aria-label': h.label }),
														h.icon && !oe && (0, t.Y)(G.I, { ..._.icon, ...(typeof h.icon == 'string' ? { icon: h.icon } : h.icon) }),
														!$ && (h.label || !h.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: h.label || h.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/types.ts'(U, g, e) {
				'use strict';
				e.d(g, { Q: () => i, V: () => t });
				var t = ((c) => ((c.grid = 'grid'), (c.list = 'list'), c))(t || {}),
					i = ((c) => (
						(c.GRID = 'grid'),
						(c.PALETTE = 'palette'),
						(c.LIST = 'list'),
						(c.SLIDER = 'slider'),
						(c.HIERARCHY = 'hierarchy'),
						(c.TOGGLE = 'toggle'),
						c
					))(i || {});
			},
			'./components/src/utilities/componentArgs.ts'(U, g, e) {
				'use strict';
				e.d(g, { F: () => t });
				const t = {
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
			},
			'./components/src/utilities/snapify.ts'(U, g, e) {
				'use strict';
				e.d(g, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					k = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					w = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					R = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					j = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(m) {
						const x = m.id;
						if (d[x]) return d[x];
						const L = (d[x] = G({ client: j, controller: m }));
						return (
							L.on('afterStore', async ({ controller: P }, V) => {
								P.log.debug('controller', P), P.log.debug('store', P.store.toJSON()), await V();
							}),
							L.init(),
							L
						);
					}
					static autocomplete(m) {
						const x = m.id;
						if (d[x]) return d[x];
						const L = (d[x] = W({ client: j, controller: m }));
						return (
							L.on('afterStore', async ({ controller: P }, V) => {
								P.log.debug('controller', P), P.log.debug('store', P.store.toJSON()), await V();
							}),
							L.init(),
							L
						);
					}
					static search(m) {
						const x = m.id;
						if (d[x]) return d[x];
						const L = (d[x] = X({ client: j, controller: m }));
						return (
							L.on('afterStore', async ({ controller: P }, V) => {
								P.log.debug('controller', P), P.log.debug('store', P.store.toJSON()), await V();
							}),
							L.init(),
							L
						);
					}
				}
				function X(C) {
					const m = new r.V(new n.E({ settings: { coreType: 'query', corePrefix: C.controller.id } }), a.X);
					return new i.Tp(C.controller, {
						client: new w.K(C.client.globals, C.client.config),
						store: new R.U(C.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new y.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new v.J(C.client.globals),
					});
				}
				function G(C) {
					const m = new r.V(new n.E(), a.X).detach(!0);
					return new k.c(C.controller, {
						client: new w.K(C.client.globals, C.client.config),
						store: new B.t(C.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new y.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new v.J(C.client.globals),
					});
				}
				function W(C) {
					const m = new r.V(new n.E(), a.X).detach();
					return new c.Z(C.controller, {
						client: new w.K(C.client.globals, C.client.config),
						store: new A.Y(C.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new y.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new v.J(C.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(U, g, e) {
				'use strict';
				e.d(g, { Z: () => k });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					k = (w) => {
						const A = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								A.current && w.className?.includes('lang-') && !w.className?.includes(c) && window?.Prism?.highlightElement(A.current);
							}, [w.className, w.children, A]),
							(0, t.Y)('code', { ...w, ref: A, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(U, g, e) {
				'use strict';
				e.d(g, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(i, c) {
					var k = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						w = {};
					for (var A in k) w[k[A]] = A;
					var R = {};
					(i.prototype.toName = function (B) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var r,
							a,
							n = w[this.toHex()];
						if (n) return n;
						if (B?.closest) {
							var y = this.toRgb(),
								E = 1 / 0,
								b = 'black';
							if (!R.length) for (var v in k) R[v] = new i(k[v]).toRgb();
							for (var d in k) {
								var j = ((r = y), (a = R[d]), Math.pow(r.r - a.r, 2) + Math.pow(r.g - a.g, 2) + Math.pow(r.b - a.b, 2));
								j < E && ((E = j), (b = d));
							}
							return b;
						}
					}),
						c.string.push([
							function (B) {
								var r = B.toLowerCase(),
									a = r === 'transparent' ? '#0000' : k[r];
								return a ? new i(a).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(U) {
				function g(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(g.keys = () => []), (g.resolve = g), (g.id = '../../node_modules/memoizerific sync recursive'), (U.exports = g);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(U, g, e) {
				'use strict';
				e.d(g, { d: () => B });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function i() {
					return (
						(i =
							Object.assign ||
							function (r) {
								for (var a = 1; a < arguments.length; a++) {
									var n = arguments[a];
									for (var y in n) Object.prototype.hasOwnProperty.call(n, y) && (r[y] = n[y]);
								}
								return r;
							}),
						i.apply(this, arguments)
					);
				}
				function c(r, a) {
					if (r == null) return {};
					var n = {},
						y = Object.keys(r),
						E,
						b;
					for (b = 0; b < y.length; b++) (E = y[b]), !(a.indexOf(E) >= 0) && (n[E] = r[E]);
					return n;
				}
				var k = function (a) {
						var n = a.getBoundingClientRect();
						return { left: Math.ceil(n.left), width: Math.ceil(n.width) };
					},
					w = function (a) {
						return [].concat(a).sort(function (n, y) {
							return Number(n) - Number(y);
						});
					},
					A = function (a) {
						var n = t.default.useRef(a);
						return (
							(n.current = a),
							t.default.useCallback(function () {
								return n.current;
							}, [])
						);
					},
					R = {
						getPercentageForValue: function (a, n, y) {
							return Math.max(0, Math.min(100, ((a - n) / (y - n)) * 100));
						},
						getValueForClientX: function (a, n, y, E) {
							var b = n.left,
								v = n.width,
								d = (a - b) / v,
								j = (E - y) * d;
							return j + y;
						},
					};
				function B(r) {
					var a = r.interpolator,
						n = a === void 0 ? R : a,
						y = r.tickSize,
						E = y === void 0 ? 10 : y,
						b = r.values,
						v = r.min,
						d = r.max,
						j = r.ticks,
						S = r.steps,
						X = r.onChange,
						G = r.onDrag,
						W = r.stepSize,
						C = t.default.useState(null),
						m = C[0],
						x = C[1],
						L = t.default.useState(),
						P = L[0],
						V = L[1],
						I = A({ activeHandleIndex: m, onChange: X, onDrag: G, values: b, tempValues: P }),
						Y = t.default.useRef(),
						Z = t.default.useCallback(
							function (o) {
								var s = k(Y.current);
								return n.getValueForClientX(o, s, v, d);
							},
							[n, d, v]
						),
						Q = t.default.useCallback(
							function (o, s) {
								if (S) {
									var f = S.indexOf(o),
										u = f + s;
									return u >= 0 && u < S.length ? S[u] : o;
								} else {
									var l = o + W * s;
									return l >= v && l <= d ? l : o;
								}
							},
							[d, v, W, S]
						),
						te = t.default.useCallback(
							function (o) {
								var s = v,
									f = d;
								if (S)
									S.forEach(function (u) {
										u <= o && u > s && (s = u), u >= o && u < f && (f = u);
									});
								else {
									for (; s < o && s + W < o; ) s += W;
									f = Math.min(s + W, d);
								}
								return o - s < f - o ? s : f;
							},
							[d, v, W, S]
						),
						$ = t.default.useCallback(
							function (o) {
								var s = I(),
									f = s.activeHandleIndex,
									u = s.onDrag,
									l = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									_ = Z(l),
									D = te(_),
									O = [].concat(b.slice(0, f), [D], b.slice(f + 1));
								u ? u(O) : V(O);
							},
							[I, Z, te, b]
						),
						oe = t.default.useCallback(
							function (o, s) {
								var f = I(),
									u = f.values,
									l = f.onChange,
									_ = l === void 0 ? function () {} : l;
								if (o.keyCode === 37 || o.keyCode === 39) {
									x(s);
									var D = o.keyCode === 37 ? -1 : 1,
										O = Q(u[s], D),
										M = [].concat(u.slice(0, s), [O], u.slice(s + 1)),
										F = w(M);
									_(F);
								}
							},
							[I, Q]
						),
						q = t.default.useCallback(
							function (o, s) {
								x(s);
								var f = function u(l) {
									var _ = I(),
										D = _.tempValues,
										O = _.values,
										M = _.onChange,
										F = M === void 0 ? function () {} : M,
										K = _.onDrag,
										N = K === void 0 ? function () {} : K;
									document.removeEventListener('mousemove', $),
										document.removeEventListener('touchmove', $),
										document.removeEventListener('mouseup', u),
										document.removeEventListener('touchend', u);
									var H = w(D || O);
									F(H), N(H), x(null), V();
								};
								document.addEventListener('mousemove', $),
									document.addEventListener('touchmove', $),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[I, $]
						),
						z = t.default.useCallback(
							function (o) {
								return n.getPercentageForValue(o, v, d);
							},
							[n, d, v]
						),
						re = t.default.useMemo(
							function () {
								var o = j || S;
								if (!o) {
									for (o = [v]; o[o.length - 1] < d - E; ) o.push(o[o.length - 1] + E);
									o.push(d);
								}
								return o.map(function (s, f) {
									return {
										value: s,
										getTickProps: function (l) {
											var _ = l === void 0 ? {} : l,
												D = _.key,
												O = D === void 0 ? f : D,
												M = _.style,
												F = M === void 0 ? {} : M,
												K = c(_, ['key', 'style']);
											return i({ key: O, style: i({ position: 'absolute', width: 0, left: z(s) + '%', transform: 'translateX(-50%)' }, F) }, K);
										},
									};
								});
							},
							[j, z, d, v, S, E]
						),
						J = t.default.useMemo(
							function () {
								var o = w(P || b);
								return [].concat(o, [d]).map(function (s, f) {
									return {
										value: s,
										getSegmentProps: function (l) {
											var _ = l === void 0 ? {} : l,
												D = _.key,
												O = D === void 0 ? f : D,
												M = _.style,
												F = M === void 0 ? {} : M,
												K = c(_, ['key', 'style']),
												N = z(o[f - 1] ? o[f - 1] : v),
												H = z(s) - N;
											return i({ key: O, style: i({ position: 'absolute', left: N + '%', width: H + '%' }, F) }, K);
										},
									};
								});
							},
							[z, d, v, P, b]
						),
						ne = t.default.useMemo(
							function () {
								return (P || b).map(function (o, s) {
									return {
										value: o,
										active: s === m,
										getHandleProps: function (u) {
											var l = u === void 0 ? {} : u,
												_ = l.key,
												D = _ === void 0 ? s : _,
												O = l.ref,
												M = l.innerRef,
												F = l.onKeyDown,
												K = l.onMouseDown,
												N = l.onTouchStart,
												H = l.style,
												ae = H === void 0 ? {} : H,
												h = c(l, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return i(
												{
													key: D,
													onKeyDown: function (p) {
														p.persist(), oe(p, s), F && F(p);
													},
													onMouseDown: function (p) {
														p.persist(), q(p, s), K && K(p);
													},
													onTouchStart: function (p) {
														p.persist(), q(p, s), N && N(p);
													},
													role: 'slider',
													'aria-valuemin': v,
													'aria-valuemax': d,
													'aria-valuenow': o,
													style: i(
														{ position: 'absolute', top: '50%', left: z(o) + '%', zIndex: s === m ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ae
													),
												},
												h
											);
										},
									};
								});
							},
							[m, z, oe, q, v, d, P, b]
						),
						se = function (s) {
							var f = s === void 0 ? {} : s,
								u = f.style,
								l = u === void 0 ? {} : u,
								_ = f.ref,
								D = c(f, ['style', 'ref']);
							return i(
								{
									ref: function (M) {
										(Y.current = M), _ && (typeof _ == 'function' ? _(M) : (_.current = M));
									},
									style: i({ position: 'relative', userSelect: 'none' }, l),
								},
								D
							);
						};
					return { activeHandleIndex: m, getTrackProps: se, ticks: re, segments: J, handles: ne };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.eb8d6cdb.iframe.bundle.js.map
