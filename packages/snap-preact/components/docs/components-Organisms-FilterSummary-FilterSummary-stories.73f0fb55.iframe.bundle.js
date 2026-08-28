(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6175],
		{
			'./components/src/components/Organisms/FilterSummary/FilterSummary.stories.tsx'(C, c, e) {
				'use strict';
				e.r(c), e.d(c, { Regular: () => o, __namedExportsOrder: () => P, customTitle: () => b, default: () => r, noFacetLabel: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					f = e('./components/src/components/Atoms/Icon/paths.tsx'),
					_ = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts'),
					g = e('./components/src/utilities/snapify.ts');
				const s =
						"# Filter Summary\n\nRenders all selected filters including a wrapper with a title and a 'clear all' button. \n\n## Components Used\n- Filter\n## Usage\n```tsx\nimport { FilterSummary } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FilterSummary controller={controller} />\n```\n\n### filters\nThe `filters` prop specifies a reference to the filters store array. If no filters prop is passed in, the component will default to using the filters in controller.store. \n\n```tsx\n<FilterSummary filters={controller.store.filters} />\n```\n\n### title\nThe `title` prop specifies the title of the filter summary wrapper. The default is `'Current Filters'`.\n\n```tsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} />\n```\n\n### hideTitle\nThe `hideTitle` prop will hide the title element.\n\n```tsx\n<FilterSummary filters={controller.store.filters} title={'Current Filters'} hideTitle={true}/>\n```\n### filterIcon\n The `filterIcon` prop specifies the icon to render for each filter. It can be an icon name string, a `Partial<IconProps>` object to override icon props such as `size` and `color`, or `false` to disable the icon.\n\n```tsx\n<FilterSummary filters={controller.store.filters} filterIcon={'close-thin'} />\n```\nor \n```tsx\n<FilterSummary filters={controller.store.filters} filterIcon={{ icon: 'close-thin', size: 14, color: '#eee' }} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon for the 'clear all' button. It can be a string icon name, a `Partial<IconProps>` object to override icon props, or `false` to disable the icon. \n\n```tsx\n<FilterSummary filters={controller.store.filters} clearAllIcon={'close-thin'} />\n```\nor\n```tsx\n<FilterSummary filters={controller.store.filters} clearAllIcon={{ icon: 'close-thin', size: 14, color: '#eee' }} />\n```\n\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel` of the `<Filter />` sub-component.\n\n```tsx\n<FilterSummary filters={controller.store.filters} separator={': '} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop prevents the filter label (selected facet name) from displaying. Only the value selected will be displayed. Use of this prop will nullify the `separator` prop.\n\n```tsx\n<FilterSummary filters={controller.store.filters} hideFacetLabel={true} />\n```\n\n### clearAllLabel\nThe `clearAllLabel` prop is the 'clear all' button text. This is passed to the `<Filter />` sub-component `valueLabel` prop. The default value is `'Clear All'`.\n\n```tsx\n<FilterSummary filters={controller.store.filters} clearAllLabel={'Clear All'} />\n```\n\n### hideClearAll\nThe `hideClearAll` prop prevents the 'clear all' button from rendering.\n\n```tsx\n<FilterSummary filters={controller.store.filters} hideClearAll={true} />\n```\n\n### type\nThe `type` prop determines what layout the filters should be rendered as. Options are `list` or `inline`. `inline` is default.\n\n```tsx\n<FilterSummary filters={controller.store.filters} type={'list'} />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when any of the selected filters are clicked.\n\n```tsx\n<FilterSummary filters={controller.store.filters} onClick={(e, filter) => {console.log(e, filter)}} />\n```\n\n#### onClearAllClick\nThe `onClearAllClick` prop allows for a custom callback function for when the 'clear all' button is clicked.\n\n```tsx\n<FilterSummary filters={controller.store.filters} onClearAllClick={(e) => {console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FilterSummary component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Filter summary section title | `filters` (FilterType[]) |\n| `clearAllLabel` | Clear all filters button text | `label` (string), `value` (string) |\n\n### Example\n\n```tsx\n<FilterSummary\n	filters={controller.store.filters}\n	lang={{\n		title: {\n			value: 'Active Filters',\n		},\n		clearAllLabel: {\n			value: 'Clear All Filters',\n		},\n	}}\n/>\n```\n",
					r = {
						title: 'Organisms/FilterSummary',
						component: _.r,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(d.oz, { options: { overrides: { code: m.Z } }, children: s }), (0, t.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						decorators: [(v) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(v, {}) })],
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller object' } }, control: { type: 'none' } },
							filters: { description: 'Filters object', type: { required: !1 }, table: { type: { summary: 'object' } }, control: { type: 'none' } },
							title: {
								defaultValue: 'Current Filters',
								description: 'Filters object',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Current Filters' } },
								control: { type: 'text' },
							},
							hideTitle: {
								description: 'Hide title',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							hideFacetLabel: {
								description: 'Hide filter facet label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							separator: {
								defaultValue: ':',
								description: 'Filter delimiter',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							hideClearAll: {
								description: 'Hide filter clear all button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							clearAllLabel: {
								defaultValue: 'Clear All',
								description: 'Text to show on clear all filters',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
								control: 'text',
							},
							clearAllIcon: {
								defaultValue: 'close-thin',
								description: 'Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
								options: [...Object.keys(f.c)],
								control: { type: 'select' },
							},
							filterIcon: {
								defaultValue: 'close-thin',
								description: 'Icon name',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
								options: [...Object.keys(f.c)],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Filter click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							type: {
								defaultValue: 'inline',
								description: 'display type',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'inline' } },
								options: ['inline', 'list'],
								control: { type: 'select' },
							},
							onClearAllClick: {
								description: 'Filter clear click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClearAllClick',
							},
							...l.F,
						},
					},
					h = g.p.search({
						id: 'FilterSummary',
						globals: {
							siteId: 'atkzs2',
							filters: [
								{ type: 'value', field: 'color', value: 'Blue' },
								{ type: 'value', field: 'size', value: 'Small' },
							],
						},
					}),
					o = (v, { loaded: { controller: E } }) => (0, t.Y)(_.r, { ...v, controller: E });
				o.loaders = [async () => (await h.search(), { controller: h })];
				const y = (v, { loaded: { controller: E } }) => (0, t.Y)(_.r, { ...v, controller: E });
				(y.loaders = [async () => (await h.search(), { controller: h })]), (y.args = { hideFacetLabel: !0 });
				const b = (v, { loaded: { controller: E } }) => (0, t.Y)(_.r, { ...v, controller: E });
				(b.loaders = [async () => (await h.search(), { controller: h })]),
					(b.args = { title: 'Selected Filters' }),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: {
								originalSource: `(args: FilterSummaryProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <FilterSummary {...args} controller={controller} />`,
								...o.parameters?.docs?.source,
							},
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: FilterSummaryProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <FilterSummary {...args} controller={controller} />`,
								...y.parameters?.docs?.source,
							},
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: {
								originalSource: `(args: FilterSummaryProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <FilterSummary {...args} controller={controller} />`,
								...b.parameters?.docs?.source,
							},
						},
					});
				const P = ['Regular', 'noFacetLabel', 'customTitle'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(C, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					_ = e.n(f),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/utilities/cloneWithProps.tsx'),
					o = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(L);
				const M = ({ native: x, color: a, backgroundColor: i, borderColor: n, theme: u }) =>
						x
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: a || u?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: i || '#fff',
									border: `1px solid ${n || a || u?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					A = (0, m.PA)((x) => {
						const a = (0, g.u)(),
							n = { disableA11y: !1, treePath: (0, s.LU)() },
							u = (0, y.v6)('button', a, n, x),
							{
								content: p,
								children: O,
								disabled: F,
								native: Y,
								onClick: W,
								disableA11y: B,
								disableStyles: U,
								className: V,
								internalClassName: k,
								icon: D,
								lang: N,
								treePath: T,
								style: Z,
								styleScript: H,
								themeStyleScript: R,
								...I
							} = u,
							{ overrideElement: K, shouldRenderDefault: J } = (0, E._)('button', u);
						if (!J) return K;
						const z = { icon: { internalClassName: 'ss__button__icon', ...(0, o.s)({ disableStyles: U }), theme: u?.theme, treePath: T } },
							$ = {
								...(0, b.Z)(u, M),
								className: _()('ss__button', { 'ss__button--native': Y, 'ss__button--disabled': F }, V, k),
								disabled: F,
								onClick: (Q) => !F && W && W(Q),
								...I,
							},
							S = { ref: (Q) => (0, r.iy)(Q) },
							G = {},
							q = j()(G, N || {}),
							X = (0, v.u)(q, {}, { activeBreakpoint: a?.activeBreakpoint }),
							ee = !!I.dangerouslySetInnerHTML;
						return p || O || D || N?.button?.value || ee
							? (0, t.Y)(l._, {
									children: Y
										? (0, t.FD)('button', {
												...$,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...X.button?.all,
														children: [(0, h.Y)(p, { treePath: T }), (0, h.Y)(O, { treePath: T })],
													}),
													D && (0, t.Y)(P.I, { ...z.icon, ...(typeof D == 'string' ? { icon: D } : D) }),
												],
										  })
										: (0, t.FD)('div', {
												...(B ? {} : S),
												role: 'button',
												'aria-disabled': F,
												...$,
												...X.button?.attributes,
												children: [
													p || O || X.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...X.button?.value,
																children: [(0, h.Y)(p, { treePath: T }), (0, h.Y)(O, { treePath: T })],
														  })
														: void 0,
													D && (0, t.Y)(P.I, { ...z.icon, ...(typeof D == 'string' ? { icon: D } : D) }),
												],
										  }),
							  })
							: null;
					});
				e.d(c, ['$', 0, A]);
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(C, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					m = e.n(_),
					l = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					s = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/components/Atoms/Button/Button.tsx'),
					b = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					E = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(E);
				const j = ({}) =>
						(0, f.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					M = (0, d.PA)((A) => {
						const x = (0, h.u)(),
							i = { treePath: (0, o.LU)() },
							n = (0, g.v6)('filter', x, i, A),
							{
								filter: u,
								facetLabel: p,
								valueLabel: O,
								url: F,
								hideFacetLabel: Y,
								onClick: W,
								icon: B,
								separator: U,
								disableStyles: V,
								className: k,
								internalClassName: D,
								treePath: N,
							} = n,
							{ overrideElement: T, shouldRenderDefault: Z } = (0, v._)('filter', n);
						if (!Z) return T;
						const H = u?.url?.link || F?.link,
							R = u?.value.label || O,
							I = u?.facet.label || p,
							K = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, l.s)({ disableStyles: V }), theme: n.theme, treePath: N },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, l.s)({ disableStyles: V, icon: B }),
									theme: n.theme,
									treePath: N,
								},
							},
							J = (0, s.Z)(n, j),
							z = { filter: { attributes: { 'aria-label': I ? `remove selected ${I} filter ${R}` : R } } },
							w = L()(z, n.lang || {}),
							$ = (0, P.u)(w, { label: I, value: R }, { activeBreakpoint: x?.activeBreakpoint });
						return R
							? (0, t.Y)(r._, {
									children: (0, t.Y)('a', {
										...J,
										className: m()('ss__filter', k, D),
										onClick: (S) => {
											H?.onClick && H.onClick(S), W && W(S);
										},
										href: H?.href,
										tabIndex: 0,
										...$.filter?.all,
										children: (0, t.FD)(y.$, {
											...K.button,
											children: [
												(0, t.Y)(b.I, { ...K.icon, ...(typeof B == 'string' ? { icon: B } : B) }),
												!Y &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [I, U && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: U })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: R }),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(c, ['d', 0, M]);
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(C, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					_ = e.n(f),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					s = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useLang.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(v);
				const L = (M) => {
						const A = M.theme?.variables;
						return (0, d.AH)({
							'.ss__filter-summary__title': { fontSize: '1.2em', padding: '6px 0' },
							'.ss__filter-summary__filters': { margin: '5px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' },
							'&.ss__filter-summary--list': {
								'& .ss__filter-summary__clear-all .ss__filter__value': { marginLeft: '5px' },
								'&, .ss__filter-summary__filters': { display: 'block' },
								'.ss__filter-summary__filters': {
									'.ss__filter': {
										display: 'block',
										margin: '0 5px 5px 5px',
										'.ss__filter__button': {
											padding: '0 0 0 0',
											border: 0,
											'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': { backgroundColor: 'transparent' },
											'.ss__button__content': {
												display: 'flex',
												alignItems: 'center',
												'.ss__icon': {
													padding: '4px',
													backgroundColor: '#f8f8f8',
													border: '1px solid black',
													width: '8px',
													height: '8px',
													fill: A?.colors?.primary,
													stroke: A?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					j = (0, m.PA)((M) => {
						const A = (0, o.u)(),
							x = (0, y.LU)(),
							a = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: M.controller?.store?.filters,
								separator: ':',
								treePath: x,
							},
							i = (0, s.v6)('filterSummary', A, a, M),
							{
								filters: n,
								title: u,
								type: p,
								filterIcon: O,
								clearAllIcon: F,
								separator: Y,
								hideFacetLabel: W,
								hideTitle: B,
								clearAllLabel: U,
								hideClearAll: V,
								onClick: k,
								onClearAllClick: D,
								disableStyles: N,
								className: T,
								internalClassName: Z,
								treePath: H,
							} = i,
							{ overrideElement: R, shouldRenderDefault: I } = (0, P._)('filterSummary', i);
						if (!I) return R;
						const K = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, g.s)({ disableStyles: N, separator: Y, hideFacetLabel: W, icon: O }),
									theme: i.theme,
									treePath: H,
								},
							},
							J = (0, r.Z)(i, L),
							z = { title: { value: u }, clearAllLabel: { value: U } },
							w = E()(z, i.lang || {}),
							$ = (0, b.u)(w, { filters: n }, { activeBreakpoint: A?.activeBreakpoint });
						return n?.length
							? (0, t.Y)(h._, {
									children: (0, t.FD)('div', {
										...J,
										className: _()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': p === 'list' },
											{ 'ss__filter-summary--inline': p === 'inline' },
											T,
											Z
										),
										children: [
											!B && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...$.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													n.map((S) => (0, t.Y)(l.d, { ...K.filter, filter: S, onClick: (G) => k && k(G, S) })),
													!V &&
														(0, t.Y)(l.d, {
															...K.filter,
															name: 'clear-all',
															icon: F,
															internalClassName: `${K?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: U,
															onClick: (S) => {
																D && D(S), M.controller?.urlManager.remove('filter').remove('page').go();
															},
															lang: { filter: { attributes: { 'aria-label': U } } },
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['r', 0, j]);
			},
			'./components/src/hooks/useA11y.tsx'(C, c, e) {
				'use strict';
				e.d(c, { iy: () => m });
				const t = 9,
					d = 27,
					f = 'ss-a11y',
					_ =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function m(l, g, s, r) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = h),
							(o.innerHTML = `[${f}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					l &&
						!l.attributes?.[f] &&
						(l.setAttribute(f, !0),
						l.setAttribute('tabIndex', `${g || 0}`),
						l.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && o.target === l && l.click();
						}),
						s &&
							l.addEventListener('keydown', function (o) {
								const y = l.querySelectorAll(_),
									b = y[0],
									P = y[y.length - 1];
								if (o.keyCode == d) {
									l.focus(), r && r(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === t) &&
									(o.shiftKey
										? document.activeElement === b && (P.focus(), o.preventDefault())
										: document.activeElement === P && (b.focus(), o.preventDefault()));
							}));
				}
				e.d(c, ['DH', 0, _, 'aZ', 0, f]);
			},
			'./components/src/hooks/useLang.tsx'(C, c, e) {
				'use strict';
				const t = (d, f, _) => {
					const m = _ ? { ...f, ..._ } : f,
						l = {};
					return (
						Object.keys(d).forEach((g) => {
							const s = d && d[g],
								r = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (r.value = { 'ss-lang': g, dangerouslySetInnerHTML: { __html: s.value(m) } })
										: (r.value = { 'ss-lang': g, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((r.attributes = { 'ss-lang': g }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = s.attributes['aria-label'](m))
											: (r.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](m))
											: (r.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (r.attributes.title = s.attributes.title(m))
											: (r.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (r.attributes.alt = s.attributes.alt(m)) : (r.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = s.attributes.placeholder(m))
											: (r.attributes.placeholder = s.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': g })),
								(l[g] = r);
						}),
						l
					);
				};
				e.d(c, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(C, c, e) {
				'use strict';
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
				e.d(c, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(C, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(d) {
					const f = {};
					return (
						Object.keys(d).map((_) => {
							d[_] !== void 0 && (f[_] = d[_]);
						}),
						f
					);
				}
			},
			'./components/src/utilities/snapify.ts'(C, c, e) {
				'use strict';
				e.d(c, { p: () => j });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					f = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					o = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const E = {},
					L = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(i) {
						const n = i.id;
						if (E[n]) return E[n];
						const u = (E[n] = A({ client: L, controller: i }));
						return (
							u.on('afterStore', async ({ controller: p }, O) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await O();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(i) {
						const n = i.id;
						if (E[n]) return E[n];
						const u = (E[n] = x({ client: L, controller: i }));
						return (
							u.on('afterStore', async ({ controller: p }, O) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await O();
							}),
							u.init(),
							u
						);
					}
					static search(i) {
						const n = i.id;
						if (E[n]) return E[n];
						const u = (E[n] = M({ client: L, controller: i }));
						return (
							u.on('afterStore', async ({ controller: p }, O) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await O();
							}),
							u.init(),
							u
						);
					}
				}
				function M(a) {
					const i = new r.V(new o.E({ settings: { coreType: 'query', corePrefix: a.controller.id } }), h.X);
					return new d.Tp(a.controller, {
						client: new m.K(a.client.globals, a.client.config),
						store: new g.U(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new y.E(),
						profiler: new b.U(),
						logger: new P.V(),
						tracker: new v.J(a.client.globals),
					});
				}
				function A(a) {
					const i = new r.V(new o.E(), h.X).detach(!0);
					return new _.c(a.controller, {
						client: new m.K(a.client.globals, a.client.config),
						store: new s.t(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new y.E(),
						profiler: new b.U(),
						logger: new P.V(),
						tracker: new v.J(a.client.globals),
					});
				}
				function x(a) {
					const i = new r.V(new o.E(), h.X).detach();
					return new f.Z(a.controller, {
						client: new m.K(a.client.globals, a.client.config),
						store: new l.Y(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new y.E(),
						profiler: new b.U(),
						logger: new P.V(),
						tracker: new v.J(a.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const f = 'prism-block',
					_ = (m) => {
						const l = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								l.current && m.className?.includes('lang-') && !m.className?.includes(f) && window?.Prism?.highlightElement(l.current);
							}, [m.className, m.children, l]),
							(0, t.Y)('code', { ...m, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, _]);
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function c(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (C.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FilterSummary-FilterSummary-stories.73f0fb55.iframe.bundle.js.map
