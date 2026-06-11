(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1249],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(z, v, e) {
				'use strict';
				e.d(v, { P: () => t });
				const t = (c) => c.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(z, v, e) {
				'use strict';
				e.d(v, { p: () => t });
				function t(c) {
					if (typeof c != 'string') return c;
					let w = c.toLowerCase();
					return (w = w.replace(/[^\w\s]/g, '').trim()), (w = w.replace(/\s/g, '-')), w;
				}
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(z, v, e) {
				'use strict';
				e.r(v), e.d(v, { Default: () => n, __namedExportsOrder: () => p, default: () => a });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					w = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					T = e('./components/src/utilities/storybook.tsx'),
					P = e('./components/src/utilities/componentArgs.ts'),
					A = e('./components/src/utilities/snapify.ts'),
					R = e('./components/src/components/Atoms/Icon/paths.tsx');
				const F =
						"# FacetsHorizontal\n\nRenders all facets in a horizontal display. Also incluses MobileSidebar.\n\n## Sub-components\n- Facet\n- Dropdown\n- MobileSidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.\n\n```tsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowFiltersButton\nThe `alwaysShowFiltersButton` prop will always render the button and MobileSidebar, not just when facets are overflowing.\n\n```tsx\n<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideFiltersButton\nThe `hideFiltersButton` specifies wether the filters button should be rendered or not. If true, the button will render when there are more filters to show than the limit prop allows (unless the alwaysShowFiltersButton prop is passed, which will ignore the limit). \n\n```tsx\n<FacetsHorizontal controller={controller} hideFiltersButton={true}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```tsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```",
					a = {
						title: 'Organisms/FacetsHorizontal',
						component: w.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: T.Z } }, children: F }), (0, t.Y)(c.uY, { story: c.h1 })],
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
							...P.F,
						},
					},
					l = A.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					n = (E, { loaded: { controller: h } }) => (0, t.Y)(w.b, { ...E, controller: h });
				(n.loaders = [async () => (await l.search(), { controller: l })]),
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
				const p = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(z, v, e) {
				'use strict';
				e.d(v, { B: () => V });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					w = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					P = e.n(T),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(A),
					F = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					a = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					i = e('./components/src/hooks/useA11y.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					J = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const X = ({ horizontal: d }) =>
					(0, w.AH)({
						display: 'flex',
						flexDirection: d ? 'row' : 'column',
						alignItems: d ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: d ? 'row' : 'column',
							alignItems: d ? 'center' : void 0,
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
				function V(d) {
					const y = (0, l.u)(),
						k = { treePath: (0, n.LU)() },
						f = (0, E.v6)('list', y, k, d),
						{
							titleText: B,
							onSelect: N,
							native: Z,
							multiSelect: q,
							hideOptionLabels: ee,
							hideOptionIcons: te,
							hideOptionCheckboxes: Y,
							disabled: G,
							hideTitleText: Q,
							options: U,
							requireSelection: oe,
							disableStyles: ne,
							className: se,
							internalClassName: ae,
							treePath: o,
						} = f,
						{ overrideElement: s, shouldRenderDefault: u } = (0, I._)('list', f);
					if (!u) return s;
					let r = f.selected;
					const m = {
							checkbox: { native: Z, ...(0, p.s)({ disableStyles: ne }), theme: f?.theme, treePath: o },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, p.s)({ disableStyles: ne }), theme: f?.theme, treePath: o },
						},
						_ = (0, h.Z)(f, X);
					r && !Array.isArray(r) && (r = [r]);
					const [C, S] = (0, c.J0)(r || []),
						[D] = (0, c.J0)(r || []);
					try {
						if (r) {
							const b = JSON.stringify(D),
								L = JSON.stringify(r),
								x = JSON.stringify(C);
							b !== L && L !== x && S(r);
						}
					} catch {}
					const K = (b, L) => {
							let x;
							q
								? C.find((M) => M.value === L.value)
									? ((x = [...C]),
									  x.splice(
											x.findIndex((M) => M.value === L.value),
											1
									  ),
									  x.length == 0 && oe && (x = [L]))
									: (x = [...C, L])
								: !oe && C.find((M) => M.value === L.value)
								? (x = [])
								: (x = [L]),
								N && N(b, L, x),
								S(x);
						},
						W = {},
						H = R()(W, f.lang || {}),
						$ = (0, j.u)(H, { options: U, selectedOptions: C });
					return typeof U == 'object' && U?.length
						? (0, t.Y)(a._, {
								children: (0, t.FD)('div', {
									..._,
									className: P()('ss__list', { 'ss__list--native': Z, 'ss__list--disabled': G }, se, ae),
									children: [
										(B || H?.title?.value) && !Q && (0, t.Y)('h5', { className: 'ss__list__title', ...$.title?.all, children: B }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': B,
											children: U.map((b) => {
												const L = C.some((x) => x.value == b.value);
												return (0, t.FD)('li', {
													className: P()(`ss__list__option ss__list__option--${F.p(b.value?.toString())}`, {
														'ss__list__option--selected': L,
														'ss__list__option--disabled': b?.disabled,
														'ss__list__option--unavailable': b?.available === !1,
													}),
													ref: (x) => (0, i.iy)(x),
													onClick: (x) => !G && !b?.disabled && K(x, b),
													title: b.label,
													role: 'option',
													'aria-selected': L,
													'aria-disabled': b.disabled || b?.available === !1,
													children: [
														!Y && (0, t.Y)(g.S, { ...m.checkbox, checked: L, disableA11y: !0, 'aria-label': b.label }),
														b.icon && !te && (0, t.Y)(J.I, { ...m.icon, ...(typeof b.icon == 'string' ? { icon: b.icon } : b.icon) }),
														!ee && (b.label || !b.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: b.label || b.value }),
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
			'./components/src/utilities/componentArgs.ts'(z, v, e) {
				'use strict';
				e.d(v, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(z, v, e) {
				'use strict';
				e.d(v, { p: () => I });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					w = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					P = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					R = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					F = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					j = { globals: { siteId: 'atkzs2' } };
				class I {
					static recommendation(y) {
						const O = y.id;
						if (i[O]) return i[O];
						const k = (i[O] = X({ client: j, controller: y }));
						return (
							k.on('afterStore', async ({ controller: f }, B) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await B();
							}),
							k.init(),
							k
						);
					}
					static autocomplete(y) {
						const O = y.id;
						if (i[O]) return i[O];
						const k = (i[O] = V({ client: j, controller: y }));
						return (
							k.on('afterStore', async ({ controller: f }, B) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await B();
							}),
							k.init(),
							k
						);
					}
					static search(y) {
						const O = y.id;
						if (i[O]) return i[O];
						const k = (i[O] = J({ client: j, controller: y }));
						return (
							k.on('afterStore', async ({ controller: f }, B) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await B();
							}),
							k.init(),
							k
						);
					}
				}
				function J(d) {
					const y = new a.V(new n.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), l.X);
					return new c.Tp(d.controller, {
						client: new P.K(d.client.globals, d.client.config),
						store: new R.U(d.controller, { urlManager: y }),
						urlManager: y,
						eventManager: new p.E(),
						profiler: new E.U(),
						logger: new h.V(),
						tracker: new g.J(d.client.globals),
					});
				}
				function X(d) {
					const y = new a.V(new n.E(), l.X).detach(!0);
					return new T.c(d.controller, {
						client: new P.K(d.client.globals, d.client.config),
						store: new F.t(d.controller, { urlManager: y }),
						urlManager: y,
						eventManager: new p.E(),
						profiler: new E.U(),
						logger: new h.V(),
						tracker: new g.J(d.client.globals),
					});
				}
				function V(d) {
					const y = new a.V(new n.E(), l.X).detach();
					return new w.Z(d.controller, {
						client: new P.K(d.client.globals, d.client.config),
						store: new A.Y(d.controller, { urlManager: y }),
						urlManager: y,
						eventManager: new p.E(),
						profiler: new E.U(),
						logger: new h.V(),
						tracker: new g.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(z, v, e) {
				'use strict';
				e.d(v, { Z: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const w = 'prism-block',
					T = (P) => {
						const A = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								A.current && P.className?.includes('lang-') && !P.className?.includes(w) && window?.Prism?.highlightElement(A.current);
							}, [P.className, P.children, A]),
							(0, t.Y)('code', { ...P, ref: A, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(z, v, e) {
				'use strict';
				e.d(v, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(c, w) {
					var T = {
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
						P = {};
					for (var A in T) P[T[A]] = A;
					var R = {};
					(c.prototype.toName = function (F) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var a,
							l,
							n = P[this.toHex()];
						if (n) return n;
						if (F?.closest) {
							var p = this.toRgb(),
								E = 1 / 0,
								h = 'black';
							if (!R.length) for (var g in T) R[g] = new c(T[g]).toRgb();
							for (var i in T) {
								var j = ((a = p), (l = R[i]), Math.pow(a.r - l.r, 2) + Math.pow(a.g - l.g, 2) + Math.pow(a.b - l.b, 2));
								j < E && ((E = j), (h = i));
							}
							return h;
						}
					}),
						w.string.push([
							function (F) {
								var a = F.toLowerCase(),
									l = a === 'transparent' ? '#0000' : T[a];
								return l ? new c(l).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(z) {
				function v(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(v.keys = () => []), (v.resolve = v), (v.id = '../../node_modules/memoizerific sync recursive'), (z.exports = v);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(z, v, e) {
				'use strict';
				e.d(v, { d: () => F });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function c() {
					return (
						(c =
							Object.assign ||
							function (a) {
								for (var l = 1; l < arguments.length; l++) {
									var n = arguments[l];
									for (var p in n) Object.prototype.hasOwnProperty.call(n, p) && (a[p] = n[p]);
								}
								return a;
							}),
						c.apply(this, arguments)
					);
				}
				function w(a, l) {
					if (a == null) return {};
					var n = {},
						p = Object.keys(a),
						E,
						h;
					for (h = 0; h < p.length; h++) (E = p[h]), !(l.indexOf(E) >= 0) && (n[E] = a[E]);
					return n;
				}
				var T = function (l) {
						var n = l.getBoundingClientRect();
						return { left: Math.ceil(n.left), width: Math.ceil(n.width) };
					},
					P = function (l) {
						return [].concat(l).sort(function (n, p) {
							return Number(n) - Number(p);
						});
					},
					A = function (l) {
						var n = t.default.useRef(l);
						return (
							(n.current = l),
							t.default.useCallback(function () {
								return n.current;
							}, [])
						);
					},
					R = {
						getPercentageForValue: function (l, n, p) {
							return Math.max(0, Math.min(100, ((l - n) / (p - n)) * 100));
						},
						getValueForClientX: function (l, n, p, E) {
							var h = n.left,
								g = n.width,
								i = (l - h) / g,
								j = (E - p) * i;
							return j + p;
						},
					};
				function F(a) {
					var l = a.interpolator,
						n = l === void 0 ? R : l,
						p = a.tickSize,
						E = p === void 0 ? 10 : p,
						h = a.values,
						g = a.min,
						i = a.max,
						j = a.ticks,
						I = a.steps,
						J = a.onChange,
						X = a.onDrag,
						V = a.stepSize,
						d = t.default.useState(null),
						y = d[0],
						O = d[1],
						k = t.default.useState(),
						f = k[0],
						B = k[1],
						N = A({ activeHandleIndex: y, onChange: J, onDrag: X, values: h, tempValues: f }),
						Z = t.default.useRef(),
						q = t.default.useCallback(
							function (o) {
								var s = T(Z.current);
								return n.getValueForClientX(o, s, g, i);
							},
							[n, i, g]
						),
						ee = t.default.useCallback(
							function (o, s) {
								if (I) {
									var u = I.indexOf(o),
										r = u + s;
									return r >= 0 && r < I.length ? I[r] : o;
								} else {
									var m = o + V * s;
									return m >= g && m <= i ? m : o;
								}
							},
							[i, g, V, I]
						),
						te = t.default.useCallback(
							function (o) {
								var s = g,
									u = i;
								if (I)
									I.forEach(function (r) {
										r <= o && r > s && (s = r), r >= o && r < u && (u = r);
									});
								else {
									for (; s < o && s + V < o; ) s += V;
									u = Math.min(s + V, i);
								}
								return o - s < u - o ? s : u;
							},
							[i, g, V, I]
						),
						Y = t.default.useCallback(
							function (o) {
								var s = N(),
									u = s.activeHandleIndex,
									r = s.onDrag,
									m = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									_ = q(m),
									C = te(_),
									S = [].concat(h.slice(0, u), [C], h.slice(u + 1));
								r ? r(S) : B(S);
							},
							[N, q, te, h]
						),
						G = t.default.useCallback(
							function (o, s) {
								var u = N(),
									r = u.values,
									m = u.onChange,
									_ = m === void 0 ? function () {} : m;
								if (o.keyCode === 37 || o.keyCode === 39) {
									O(s);
									var C = o.keyCode === 37 ? -1 : 1,
										S = ee(r[s], C),
										D = [].concat(r.slice(0, s), [S], r.slice(s + 1)),
										K = P(D);
									_(K);
								}
							},
							[N, ee]
						),
						Q = t.default.useCallback(
							function (o, s) {
								O(s);
								var u = function r(m) {
									var _ = N(),
										C = _.tempValues,
										S = _.values,
										D = _.onChange,
										K = D === void 0 ? function () {} : D,
										W = _.onDrag,
										H = W === void 0 ? function () {} : W;
									document.removeEventListener('mousemove', Y),
										document.removeEventListener('touchmove', Y),
										document.removeEventListener('mouseup', r),
										document.removeEventListener('touchend', r);
									var $ = P(C || S);
									K($), H($), O(null), B();
								};
								document.addEventListener('mousemove', Y),
									document.addEventListener('touchmove', Y),
									document.addEventListener('mouseup', u),
									document.addEventListener('touchend', u);
							},
							[N, Y]
						),
						U = t.default.useCallback(
							function (o) {
								return n.getPercentageForValue(o, g, i);
							},
							[n, i, g]
						),
						oe = t.default.useMemo(
							function () {
								var o = j || I;
								if (!o) {
									for (o = [g]; o[o.length - 1] < i - E; ) o.push(o[o.length - 1] + E);
									o.push(i);
								}
								return o.map(function (s, u) {
									return {
										value: s,
										getTickProps: function (m) {
											var _ = m === void 0 ? {} : m,
												C = _.key,
												S = C === void 0 ? u : C,
												D = _.style,
												K = D === void 0 ? {} : D,
												W = w(_, ['key', 'style']);
											return c({ key: S, style: c({ position: 'absolute', width: 0, left: U(s) + '%', transform: 'translateX(-50%)' }, K) }, W);
										},
									};
								});
							},
							[j, U, i, g, I, E]
						),
						ne = t.default.useMemo(
							function () {
								var o = P(f || h);
								return [].concat(o, [i]).map(function (s, u) {
									return {
										value: s,
										getSegmentProps: function (m) {
											var _ = m === void 0 ? {} : m,
												C = _.key,
												S = C === void 0 ? u : C,
												D = _.style,
												K = D === void 0 ? {} : D,
												W = w(_, ['key', 'style']),
												H = U(o[u - 1] ? o[u - 1] : g),
												$ = U(s) - H;
											return c({ key: S, style: c({ position: 'absolute', left: H + '%', width: $ + '%' }, K) }, W);
										},
									};
								});
							},
							[U, i, g, f, h]
						),
						se = t.default.useMemo(
							function () {
								return (f || h).map(function (o, s) {
									return {
										value: o,
										active: s === y,
										getHandleProps: function (r) {
											var m = r === void 0 ? {} : r,
												_ = m.key,
												C = _ === void 0 ? s : _,
												S = m.ref,
												D = m.innerRef,
												K = m.onKeyDown,
												W = m.onMouseDown,
												H = m.onTouchStart,
												$ = m.style,
												b = $ === void 0 ? {} : $,
												L = w(m, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return c(
												{
													key: C,
													onKeyDown: function (M) {
														M.persist(), G(M, s), K && K(M);
													},
													onMouseDown: function (M) {
														M.persist(), Q(M, s), W && W(M);
													},
													onTouchStart: function (M) {
														M.persist(), Q(M, s), H && H(M);
													},
													role: 'slider',
													'aria-valuemin': g,
													'aria-valuemax': i,
													'aria-valuenow': o,
													style: c(
														{ position: 'absolute', top: '50%', left: U(o) + '%', zIndex: s === y ? '1' : '0', transform: 'translate(-50%, -50%)' },
														b
													),
												},
												L
											);
										},
									};
								});
							},
							[y, U, G, Q, g, i, f, h]
						),
						ae = function (s) {
							var u = s === void 0 ? {} : s,
								r = u.style,
								m = r === void 0 ? {} : r,
								_ = u.ref,
								C = w(u, ['style', 'ref']);
							return c(
								{
									ref: function (D) {
										(Z.current = D), _ && (typeof _ == 'function' ? _(D) : (_.current = D));
									},
									style: c({ position: 'relative', userSelect: 'none' }, m),
								},
								C
							);
						};
					return { activeHandleIndex: y, getTrackProps: ae, ticks: oe, segments: ne, handles: se };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.8b9d6f74.iframe.bundle.js.map
