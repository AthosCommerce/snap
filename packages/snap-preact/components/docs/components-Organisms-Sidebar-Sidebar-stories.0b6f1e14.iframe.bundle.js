(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7583],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(F, p, e) {
				'use strict';
				const t = (s) => s.replace(/_/g, '-').toLowerCase();
				e.d(p, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(F, p, e) {
				'use strict';
				e.d(p, { p: () => t });
				function t(s) {
					if (typeof s != 'string') return s;
					let d = s.toLowerCase();
					return (d = d.replace(/[^\w\s]/g, '').trim()), (d = d.replace(/\s/g, '-')), d;
				}
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx'(F, p, e) {
				'use strict';
				e.r(p), e.d(p, { Default: () => o, __namedExportsOrder: () => x, default: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					v = e('./components/src/utilities/storybook.tsx'),
					h = e('./components/src/utilities/componentArgs.ts'),
					b = e('./components/src/utilities/snapify.ts');
				const I =
					"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n- Button\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Sidebar controller={controller} />\n```\n\n### layout \nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;\n\n```tsx\n<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>\n```\n\n### hideTitleText\nThe `hideTitleText` prop will disable the sidebar title from rendering.\n\n```tsx\n<Sidebar controller={controller} hideTitleText />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```tsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### sticky\nThe `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.\n\n```tsx\n<Sidebar controller={controller} sticky={true} />\n```\n\n### stickyOffset\nThe `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.\n\n```tsx\n<Sidebar controller={controller} stickyOffset={50} />\n```\n\n### hideHeader\nThe `hideHeader` prop will disable the sidebar header from rendering. \n\n```tsx\n<Sidebar controller={controller} hideHeader />\n```\n\n### hideCloseButton\nThe `hideCloseButton` prop will disable the close Button component from rendering.\n\n```tsx\n<Sidebar controller={controller} hideCloseButton />\n```\n\n### closeButtonIcon \nThe `closeButtonIcon` prop specifies the name of an icon to add to the close sidebar button.\n\n```tsx\n<Sidebar controller={controller} closeButtonIcon={'close'} />\n```\n\n### closeButtonText\nThe `closeButtonText` prop will change the inner text of the sidebar close button.\n\n```tsx\n<Sidebar controller={controller} closeButtonText={'Close Sidebar'} />\n```\n\n### hideFooter\nThe `hideFooter` prop will disable the sidebar footer from rendering. \n\n```tsx\n<Sidebar controller={controller} hideFooter />\n```\n\n### hideApplyButton\nThe `hideApplyButton` prop will disable the apply Button component from rendering.\n\n```tsx\n<Sidebar controller={controller} hideApplyButton />\n```\n\n### applyButtonText\nThe `applyButtonText` prop will change the inner text of the apply Button component.\n\n```tsx\n<Sidebar controller={controller} applyButtonText={'Apply Changes'} />\n```\n\n### applyButtonIcon \nThe `applyButtonIcon` prop specifies the name of an icon to add to the sidebar apply filters button.\n\n```tsx\n<Sidebar controller={controller} applyButtonIcon={'cog'} />\n```\n\n### hideClearButton\nThe `hideClearButton` prop will disable the clear all Button component from rendering.\n\n```tsx\n<Sidebar controller={controller} hideClearButton />\n```\n\n### clearButtonText\nThe `clearButtonText` prop will change the inner text of the clear all Button component.\n\n```tsx\n<Sidebar controller={controller} clearButtonText={'Start Over'} />\n```\n\n### clearButtonIcon \nThe `clearButtonIcon` prop specifies the name of an icon to add to the sidebar clear all filters button.\n\n```tsx\n<Sidebar controller={controller} clearButtonIcon={'close'} />\n```\n\n### hideClearButtonText \nThe `hideClearButtonText` prop hides the clear button text.\n\n```tsx\n<Sidebar controller={controller} clearButtonText={'start over'} hideClearButtonText={true} />\n```\n\n### hideApplyButtonText \nThe `hideApplyButtonText` prop hides the apply button text.\n\n```tsx\n<Sidebar controller={controller} applyButtonText={'Apply Changes'} hideApplyButtonText={true} />\n```\n\n### hideCloseButtonText \nThe `hideCloseButtonText` prop hides the close button text.\n\n```tsx\n<Sidebar controller={controller} closeButtonText={'close'} hideCloseButtonText={true} />\n```\n\n### onToggleSidebar\nThe `onToggleSidebar` prop specifies a callback function that is invoked when the close, apply, or clear button is clicked. Typically used to toggle the sidebar open/closed state.\n\n```tsx\n<Sidebar controller={controller} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Sidebar component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `titleText` | Sidebar heading text | `controller` (SearchController) |\n\n### Example\n\n```tsx\n<Sidebar\n	controller={controller}\n	lang={{\n		titleText: {\n			value: 'Refine By',\n		},\n	}}\n/>\n```\n";
				var a = e('./components/src/components/Atoms/Icon/paths.tsx');
				const n = {
						title: 'Organisms/Sidebar',
						component: d.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: v.Z } }, children: I }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(O) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(O, {}) })],
						argTypes: {
							controller: {
								description: 'Search controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'specifies the layout of the sidebar',
								table: {
									category: 'Templates Legal',
									type: {
										summary: "['filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_']",
									},
									defaultValue: { summary: "[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]" },
								},
								control: 'none',
							},
							titleText: {
								description: 'Text to render in the sidebar title',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
								control: { type: 'text' },
							},
							hideTitleText: {
								defaultValue: !1,
								description: 'hides the sidebar title component',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							sticky: {
								description: 'specifies if the sidebar should be sticky',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							stickyOffset: {
								description: 'specifies the offset of the sidebar when sticky is true',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideHeader: {
								description: 'hides the sidebar header',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideClearButtonText: {
								description: 'hides the clear button text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideApplyButtonText: {
								description: 'hides the apply button text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCloseButtonText: {
								description: 'hides the close button text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCloseButton: {
								description: 'hides the close sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							closeButtonIcon: {
								description: 'Icon to render in the close sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
								options: [...Object.keys(a.c)],
								control: { type: 'select' },
							},
							closeButtonText: {
								description: 'Text to render in the close sidebar button',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							hideFooter: {
								description: 'hides the sidebar footer',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideApplyButton: {
								description: 'hides the apply facets button component',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							applyButtonText: {
								description: 'Text to render in the apply facets button',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Apply' } },
								control: { type: 'text' },
							},
							applyButtonIcon: {
								description: 'Icon to render in the apply facets button',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [...Object.keys(a.c)],
								control: { type: 'select' },
							},
							hideClearButton: {
								description: 'hides the clear all filters button component',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							clearButtonText: {
								description: 'Text to render in the clear all facets button',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
								control: { type: 'text' },
							},
							clearButtonIcon: {
								description: 'Icon to render in the clear filters button',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [...Object.keys(a.c)],
								control: { type: 'select' },
							},
							onToggleSidebar: {
								description: 'Callback function invoked when the close, apply, or clear button is clicked',
								table: { type: { summary: '() => void' } },
								action: 'onToggleSidebar',
							},
							...h.F,
						},
					},
					i = b.p.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } }),
					o = (O, { loaded: { controller: D } }) => (0, t.Y)(d.B, { ...O, controller: D });
				(o.loaders = [async () => (await i.search(), { controller: i })]),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: {
								originalSource: `(args: SidebarProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Sidebar {...args} controller={controller} />;
}`,
								...o.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/hooks/useA11y.tsx'),
					i = e('./components/src/utilities/cloneWithProps.tsx'),
					o = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = e('./components/src/hooks/useLang.tsx'),
					_ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(N);
				const Z = ({ native: k, color: g, backgroundColor: T, borderColor: M, theme: y }) =>
						k
							? (0, s.AH)({})
							: (0, s.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: g || y?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: T || '#fff',
									border: `1px solid ${M || g || y?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					z = (0, h.PA)((k) => {
						const g = (0, I.u)(),
							M = { disableA11y: !1, treePath: (0, a.LU)() },
							y = (0, x.v6)('button', g, M, k),
							{
								content: L,
								children: U,
								disabled: A,
								native: j,
								onClick: J,
								disableA11y: X,
								disableStyles: te,
								className: $,
								internalClassName: G,
								icon: w,
								lang: H,
								treePath: Q,
								style: oe,
								styleScript: re,
								themeStyleScript: ae,
								...r
							} = y,
							{ overrideElement: l, shouldRenderDefault: C } = (0, _._)('button', y);
						if (!C) return l;
						const E = { icon: { internalClassName: 'ss__button__icon', ...(0, o.s)({ disableStyles: te }), theme: y?.theme, treePath: Q } },
							m = {
								...(0, O.Z)(y, Z),
								className: v()('ss__button', { 'ss__button--native': j, 'ss__button--disabled': A }, $, G),
								disabled: A,
								onClick: (Y) => !A && J && J(Y),
								...r,
							},
							f = { ref: (Y) => (0, n.iy)(Y) },
							V = {},
							S = W()(V, H || {}),
							K = (0, B.u)(S, {}, { activeBreakpoint: g?.activeBreakpoint }),
							R = !!r.dangerouslySetInnerHTML;
						return L || U || w || H?.button?.value || R
							? (0, t.Y)(b._, {
									children: j
										? (0, t.FD)('button', {
												...m,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...K.button?.all,
														children: [(0, i.Y)(L, { treePath: Q }), (0, i.Y)(U, { treePath: Q })],
													}),
													w && (0, t.Y)(D.I, { ...E.icon, ...(typeof w == 'string' ? { icon: w } : w) }),
												],
										  })
										: (0, t.FD)('div', {
												...(X ? {} : f),
												role: 'button',
												'aria-disabled': A,
												...m,
												...K.button?.attributes,
												children: [
													L || U || K.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...K.button?.value,
																children: [(0, i.Y)(L, { treePath: Q }), (0, i.Y)(U, { treePath: Q })],
														  })
														: void 0,
													w && (0, t.Y)(D.I, { ...E.icon, ...(typeof w == 'string' ? { icon: w } : w) }),
												],
										  }),
							  })
							: null;
					});
				e.d(p, ['$', 0, z]);
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/compat/dist/compat.module.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					b = e.n(h),
					I = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					o = e('./components/src/hooks/useClickOutside.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('./components/src/utilities/cloneWithProps.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useA11y.tsx');
				const N = ({ disableOverlay: Z }) =>
						(0, v.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: Z ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${Z ? 'default' : 'pointer'}` },
							'.ss__dropdown__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
					W = (0, I.PA)((Z) => {
						const z = (0, n.u)(),
							g = { startOpen: !1, disableA11y: !1, treePath: (0, i.LU)() },
							T = (0, D.v6)('dropdown', z, g, Z),
							{
								button: M,
								content: y,
								children: L,
								disabled: U,
								open: A,
								toggleOnHover: j,
								onMouseEnter: J,
								onMouseLeave: X,
								disableClick: te,
								onClick: $,
								onToggle: G,
								focusTrapContent: w,
								startOpen: H,
								disableClickOutside: Q,
								disableA11y: oe,
								className: re,
								internalClassName: ae,
								treePath: r,
								usePortal: l,
							} = T,
							{ overrideElement: C, shouldRenderDefault: E } = (0, x._)('dropdown', T);
						if (!E) return C;
						let u, m;
						const f = A === void 0;
						f ? ([u, m] = (0, d.J0)(H)) : (u = A);
						const [V, S] = (0, d.J0)(!1),
							K = (0, d.li)(null),
							R = (0, d.li)(null),
							[Y, se] = (0, d.J0)({ top: 0, left: 0, width: 0 });
						let le;
						Q ||
							(le = (0, o.L)((c) => {
								(l && R.current && R.current.contains(c.target)) || (u && (U || (f && m && m(!1), G && G(c, !1))));
							}, !0)),
							(0, d.Nf)(() => {
								if (l && u) {
									const c = () => {
										if (K.current) {
											const ee = K.current.getBoundingClientRect();
											se({ top: ee.bottom + window.scrollY, left: ee.left + window.scrollX, width: ee.width });
										}
									};
									return (
										c(),
										window.addEventListener('resize', c),
										window.addEventListener('scroll', c, !0),
										() => {
											window.removeEventListener('resize', c), window.removeEventListener('scroll', c, !0);
										}
									);
								}
							}, [l, u]);
						const ne = (c, ee) => {
								f &&
									m &&
									m((de) => {
										const ce = ee ?? !de;
										return ce != de && G && G(c, ce), ce;
									});
							},
							ie = (0, B.Z)(T, N),
							P = {
								onMouseEnter:
									(j || J) &&
									((c) => {
										V || (j && !U && ne(c, !0), J && J(c));
									}),
								onMouseLeave:
									(j || X) &&
									((c) => {
										V || (j && !U && ne(c, !1), X && X(c));
									}),
							},
							q = (0, t.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (c) => {
									(R.current = c),
										oe ||
											(0, _.iy)(c, 0, !!w, (ee) => {
												f ? ne(ee) : $ && $(ee);
											});
								},
								children: [(0, O.Y)(y, { open: u, toggleOpen: ne, treePath: r }), (0, O.Y)(L, { open: u, toggleOpen: ne, treePath: r })],
							});
						return (0, t.Y)(a._, {
							children: (0, t.FD)('div', {
								...ie,
								className: b()('ss__dropdown', { 'ss__dropdown--open': u }, re, ae),
								ref: le,
								...P,
								children: [
									(0, t.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (c) => {
											(K.current = c), oe || (0, _.iy)(c);
										},
										'aria-expanded': u,
										role: 'button',
										onTouchStart: () => {
											S(!0);
										},
										onClick: (c) => {
											!U && !te && (ne(c), $ && $(c)),
												setTimeout(() => {
													S(!1);
												}, 300);
										},
										children: (0, O.Y)(M, { open: u, toggleOpen: ne, treePath: r }),
									}),
									l
										? (y || L) &&
										  (0, s.createPortal)(
												(0, t.Y)('div', {
													className: z.name ? `ss__theme__${z.name}` : 'ss__theme__global',
													children: (0, t.Y)('div', {
														className: b()('ss__dropdown__portal', re, ae, { 'ss__dropdown__portal--open': u }),
														css: ie.css,
														style: {
															position: 'absolute',
															top: Y.top,
															left: Y.left,
															width: Y.width,
															zIndex: 10007,
															pointerEvents: u ? 'auto' : 'none',
														},
														children: q,
													}),
												}),
												document.body
										  )
										: (y || L) && q,
								],
							}),
						});
					});
				e.d(p, ['m', 0, W]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					h = e.n(v),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/mergeProps.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = '//cdn.athoscommerce.net/snap/images/fallback.png',
					D = ({ height: _ }) =>
						(0, d.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: _ || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					B = (0, b.PA)((_) => {
						const N = (0, a.u)(),
							W = (0, n.LU)(),
							Z = { fallback: O, lazy: !0, treePath: W },
							z = (0, i.v6)('image', N, Z, _),
							{
								alt: k,
								src: g,
								fallback: T,
								title: M,
								hoverSrc: y,
								lazy: L,
								onMouseOver: U,
								onMouseOut: A,
								onError: j,
								onLoad: J,
								onClick: X,
								onPointerDown: te,
								onPointerMove: $,
								onPointerUp: G,
								onPointerLeave: w,
								className: H,
								internalClassName: Q,
								draggable: oe,
							} = z,
							{ overrideElement: re, shouldRenderDefault: ae } = (0, x._)('image', z);
						if (!ae) return re;
						const [r, l] = (0, s.J0)(!1),
							[C, E] = (0, s.J0)(!1),
							u = (0, s.li)('');
						(0, s.vJ)(() => {
							u.current = g;
						}),
							u.current && u.current != g && l(!1);
						const m = (0, o.Z)(z, D);
						return (0, t.Y)(I._, {
							children: (0, t.Y)('div', {
								...m,
								className: h()('ss__image', { 'ss__image--hidden': !r }, H, Q),
								children: (0, t.Y)('img', {
									src: (C ? y : g) || T,
									alt: k,
									title: M || k,
									loading: L ? 'lazy' : void 0,
									onLoad: (f) => {
										l(!0), J && J(f);
									},
									onClick: (f) => X && X(f),
									onError: (f) => {
										(f.target.src = T || ''), j && j(f);
									},
									onMouseOver: (f) => {
										y && E(!0), U && U(f);
									},
									onMouseOut: (f) => {
										y && E(!1), A && A(f);
									},
									onPointerDown: (f) => {
										te && te(f);
									},
									onPointerMove: (f) => {
										$ && $(f);
									},
									onPointerUp: (f) => {
										G && G(f);
									},
									onPointerLeave: (f) => {
										w && w(f);
									},
									draggable: oe,
								}),
							}),
						});
					});
				e.d(p, ['_', 0, B, 't', 0, O]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					h = e.n(v),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					D = e('./components/src/hooks/useA11y.tsx'),
					B = e('./components/src/hooks/useLang.tsx'),
					_ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(N);
				const Z = ({ size: k, color: g, theme: T, native: M }) => {
						const y = isNaN(Number(k)) ? k : `${k}px`;
						return M
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: y,
									width: y,
									border: `1px solid ${g || T?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${k} - 30%)`, height: `calc(${k} - 30%)` },
							  });
					},
					z = (0, b.PA)((k) => {
						const g = (0, o.u)(),
							M = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, x.LU)() },
							y = (0, a.v6)('checkbox', g, M, k),
							{
								checked: L,
								color: U,
								disabled: A,
								icon: j,
								iconColor: J,
								onClick: X,
								size: te,
								startChecked: $,
								native: G,
								disableA11y: w,
								disableStyles: H,
								className: Q,
								internalClassName: oe,
								theme: re,
								treePath: ae,
								lang: r,
								style: l,
								styleScript: C,
								themeStyleScript: E,
								name: u,
								...m
							} = y,
							{ overrideElement: f, shouldRenderDefault: V } = (0, _._)('checkbox', y);
						if (!V) return f;
						const S = isNaN(Number(te)) ? te : `${te}px`,
							K = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, I.s)({ color: J || U || re?.variables?.colors?.primary, disableStyles: H, icon: j, size: S && `calc(${S} - 30%)` }),
									theme: y.theme,
									treePath: ae,
								},
							};
						let R, Y;
						const se = L === void 0;
						se ? ([R, Y] = (0, s.J0)($)) : (R = L);
						const le = (c) => {
								A || (se && Y && Y((ee) => !ee), X && X(c));
							},
							ne = (0, n.Z)(y, Z),
							ie = { checkbox: {} },
							P = W()(ie, r || {}),
							q = (0, B.u)(P, { checkedState: R, disabled: A }, { activeBreakpoint: g?.activeBreakpoint });
						return (0, t.Y)(i._, {
							children: G
								? (0, t.Y)('input', {
										...ne,
										className: h()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': A, 'ss__checkbox--active': R }, Q, oe),
										type: 'checkbox',
										'aria-checked': R,
										onClick: (c) => le(c),
										disabled: A,
										checked: R,
								  })
								: (0, t.Y)('span', {
										...ne,
										className: h()('ss__checkbox', { 'ss__checkbox--disabled': A, 'ss__checkbox--active': R }, Q, oe),
										onClick: (c) => le(c),
										ref: (c) => (w ? null : (0, D.iy)(c)),
										'aria-disabled': A,
										role: 'checkbox',
										'aria-checked': R,
										...m,
										...q.checkbox.all,
										children: R
											? (0, t.Y)(O.I, { ...K.icon, ...(typeof j == 'string' ? { icon: j } : j) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(p, ['S', 0, z]);
			},
			'./components/src/components/Molecules/List/List.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					h = e.n(v),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(b),
					a = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/utilities/selectionKey.ts'),
					N = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					W = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/hooks/useLang.tsx'),
					z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					k = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const g = ({ horizontal: M }) =>
						(0, d.AH)({
							display: 'flex',
							flexDirection: M ? 'row' : 'column',
							alignItems: M ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: M ? 'row' : 'column',
								alignItems: M ? 'center' : void 0,
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
						}),
					T = (0, n.PA)((M) => {
						const y = (0, o.u)(),
							U = { treePath: (0, x.LU)() },
							A = (0, D.v6)('list', y, U, M),
							{
								titleText: j,
								onSelect: J,
								native: X,
								multiSelect: te,
								hideOptionLabels: $,
								hideOptionIcons: G,
								hideOptionCheckboxes: w,
								disabled: H,
								hideTitleText: Q,
								options: oe,
								requireSelection: re,
								disableStyles: ae,
								className: r,
								internalClassName: l,
								treePath: C,
							} = A,
							{ overrideElement: E, shouldRenderDefault: u } = (0, z._)('list', A);
						if (!u) return E;
						let m = A.selected;
						const f = {
								checkbox: { native: X, ...(0, O.s)({ disableStyles: ae }), theme: A?.theme, treePath: C },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, O.s)({ disableStyles: ae }), theme: A?.theme, treePath: C },
							},
							V = (0, B.Z)(A, g);
						m && !Array.isArray(m) && (m = [m]);
						const [S, K] = (0, s.J0)(m || []),
							[R, Y] = (0, s.J0)(() => (0, _.i)(m));
						if (m) {
							const P = (0, _.i)(m);
							P !== R && (Y(P), K(m));
						}
						const se = (P, q) => {
								let c;
								te
									? S.find((ee) => ee.value === q.value)
										? ((c = [...S]),
										  c.splice(
												c.findIndex((ee) => ee.value === q.value),
												1
										  ),
										  c.length == 0 && re && (c = [q]))
										: (c = [...S, q])
									: !re && S.find((ee) => ee.value === q.value)
									? (c = [])
									: (c = [q]),
									J && J(P, q, c),
									K(c);
							},
							le = {},
							ne = I()(le, A.lang || {}),
							ie = (0, Z.u)(ne, { options: oe, selectedOptions: S }, { activeBreakpoint: y?.activeBreakpoint });
						return typeof oe == 'object' && oe?.length
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										...V,
										className: h()('ss__list', { 'ss__list--native': X, 'ss__list--disabled': H }, r, l),
										children: [
											(j || ne?.title?.value) && !Q && (0, t.Y)('h5', { className: 'ss__list__title', ...ie.title?.all, children: j }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': j,
												children: oe.map((P) => {
													const q = S.some((c) => c.value == P.value);
													return (0, t.FD)('li', {
														className: h()(`ss__list__option ss__list__option--${a.p(P.value?.toString())}`, {
															'ss__list__option--selected': q,
															'ss__list__option--disabled': P?.disabled,
															'ss__list__option--unavailable': P?.available === !1,
														}),
														ref: (c) => (0, W.iy)(c),
														onClick: (c) => !H && !P?.disabled && se(c, P),
														title: P.label,
														role: 'option',
														'aria-selected': q,
														'aria-disabled': P.disabled || P?.available === !1,
														children: [
															!w && (0, t.Y)(N.S, { ...f.checkbox, checked: q, disableA11y: !0, 'aria-label': P.label }),
															P.icon && !G && (0, t.Y)(k.I, { ...f.icon, ...(typeof P.icon == 'string' ? { icon: P.icon } : P.icon) }),
															!$ && (P.label || !P.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: P.label || P.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(p, ['B', 0, T]);
			},
			'./components/src/hooks/useA11y.tsx'(F, p, e) {
				'use strict';
				e.d(p, { iy: () => h });
				const t = 9,
					s = 27,
					d = 'ss-a11y',
					v =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function h(b, I, a, n) {
					const i = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${i}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = i),
							(o.innerHTML = `[${d}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					b &&
						!b.attributes?.[d] &&
						(b.setAttribute(d, !0),
						b.setAttribute('tabIndex', `${I || 0}`),
						b.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && o.target === b && b.click();
						}),
						a &&
							b.addEventListener('keydown', function (o) {
								const x = b.querySelectorAll(v),
									O = x[0],
									D = x[x.length - 1];
								if (o.keyCode == s) {
									b.focus(), n && n(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === t) &&
									(o.shiftKey
										? document.activeElement === O && (D.focus(), o.preventDefault())
										: document.activeElement === D && (O.focus(), o.preventDefault()));
							}));
				}
				e.d(p, ['DH', 0, v, 'aZ', 0, d]);
			},
			'./components/src/hooks/useClickOutside.tsx'(F, p, e) {
				'use strict';
				e.d(p, { L: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function s(d, v = !1) {
					const h = (0, t.li)(),
						b = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							h.current = d;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', I, v), () => document.removeEventListener('click', I, v);
							function I(a) {
								b.current && h.current && !b.current.contains(a.target) && h.current(a);
							}
						}, []),
						b
					);
				}
			},
			'./components/src/hooks/useLang.tsx'(F, p, e) {
				'use strict';
				const t = (s, d, v) => {
					const h = v ? { ...d, ...v } : d,
						b = {};
					return (
						Object.keys(s).forEach((I) => {
							const a = s && s[I],
								n = {};
							a &&
								(a?.value &&
									(typeof a.value == 'function'
										? (n.value = { 'ss-lang': I, dangerouslySetInnerHTML: { __html: a.value(h) } })
										: (n.value = { 'ss-lang': I, dangerouslySetInnerHTML: { __html: a.value } })),
								a?.attributes &&
									Object.keys(a?.attributes).length &&
									((n.attributes = { 'ss-lang': I }),
									a?.attributes?.['aria-label'] &&
										(typeof a.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = a.attributes['aria-label'](h))
											: (n.attributes['aria-label'] = a.attributes['aria-label'])),
									a?.attributes?.['aria-valuetext'] &&
										(typeof a.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = a.attributes['aria-valuetext'](h))
											: (n.attributes['aria-valuetext'] = a.attributes['aria-valuetext'])),
									a?.attributes?.title &&
										(typeof a.attributes?.title == 'function'
											? (n.attributes.title = a.attributes.title(h))
											: (n.attributes.title = a.attributes.title)),
									a?.attributes?.alt &&
										(typeof a.attributes?.alt == 'function' ? (n.attributes.alt = a.attributes.alt(h)) : (n.attributes.alt = a.attributes.alt)),
									a?.attributes?.placeholder &&
										(typeof a.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = a.attributes.placeholder(h))
											: (n.attributes.placeholder = a.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': I })),
								(b[I] = n);
						}),
						b
					);
				};
				e.d(p, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(F, p, e) {
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
				e.d(p, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(F, p, e) {
				'use strict';
				e.d(p, { s: () => t });
				function t(s) {
					const d = {};
					return (
						Object.keys(s).map((v) => {
							s[v] !== void 0 && (d[v] = s[v]);
						}),
						d
					);
				}
			},
			'./components/src/utilities/selectionKey.ts'(F, p, e) {
				'use strict';
				e.d(p, { i: () => t });
				function t(s) {
					return (s == null ? [] : Array.isArray(s) ? s : [s]).map((v) => `${v?.value}:${v?.label}`).join('|');
				}
			},
			'./components/src/utilities/snapify.ts'(F, p, e) {
				'use strict';
				e.d(p, { p: () => W });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					h = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					i = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					o = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					D = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					B = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					N = { globals: { siteId: 'atkzs2' } };
				class W {
					static recommendation(T) {
						const M = T.id;
						if (_[M]) return _[M];
						const y = (_[M] = z({ client: N, controller: T }));
						return (
							y.on('afterStore', async ({ controller: L }, U) => {
								L.log.debug('controller', L), L.log.debug('store', L.store.toJSON()), await U();
							}),
							y.init(),
							y
						);
					}
					static autocomplete(T) {
						const M = T.id;
						if (_[M]) return _[M];
						const y = (_[M] = k({ client: N, controller: T }));
						return (
							y.on('afterStore', async ({ controller: L }, U) => {
								L.log.debug('controller', L), L.log.debug('store', L.store.toJSON()), await U();
							}),
							y.init(),
							y
						);
					}
					static search(T) {
						const M = T.id;
						if (_[M]) return _[M];
						const y = (_[M] = Z({ client: N, controller: T }));
						return (
							y.on('afterStore', async ({ controller: L }, U) => {
								L.log.debug('controller', L), L.log.debug('store', L.store.toJSON()), await U();
							}),
							y.init(),
							y
						);
					}
				}
				function Z(g) {
					const T = new n.V(new o.E({ settings: { coreType: 'query', corePrefix: g.controller.id } }), i.X);
					return new s.Tp(g.controller, {
						client: new h.K(g.client.globals, g.client.config),
						store: new I.U(g.controller, { urlManager: T }),
						urlManager: T,
						eventManager: new x.E(),
						profiler: new O.U(),
						logger: new D.V(),
						tracker: new B.J(g.client.globals),
					});
				}
				function z(g) {
					const T = new n.V(new o.E(), i.X).detach(!0);
					return new v.c(g.controller, {
						client: new h.K(g.client.globals, g.client.config),
						store: new a.t(g.controller, { urlManager: T }),
						urlManager: T,
						eventManager: new x.E(),
						profiler: new O.U(),
						logger: new D.V(),
						tracker: new B.J(g.client.globals),
					});
				}
				function k(g) {
					const T = new n.V(new o.E(), i.X).detach();
					return new d.Z(g.controller, {
						client: new h.K(g.client.globals, g.client.config),
						store: new b.Y(g.controller, { urlManager: T }),
						urlManager: T,
						eventManager: new x.E(),
						profiler: new O.U(),
						logger: new D.V(),
						tracker: new B.J(g.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					v = (h) => {
						const b = (0, s.li)(null);
						return (
							(0, s.vJ)(() => {
								b.current && h.className?.includes('lang-') && !h.className?.includes(d) && window?.Prism?.highlightElement(b.current);
							}, [h.className, h.children, b]),
							(0, t.Y)('code', { ...h, ref: b, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(p, ['Z', 0, v]);
			},
			'../../node_modules/colord/plugins/names.mjs'(F, p, e) {
				'use strict';
				e.d(p, { A: () => t }), e.dn(t);
				function t(s, d) {
					var v = {
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
						h = {};
					for (var b in v) h[v[b]] = b;
					var I = {};
					(s.prototype.toName = function (a) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var n,
							i,
							o = h[this.toHex()];
						if (o) return o;
						if (a?.closest) {
							var x = this.toRgb(),
								O = 1 / 0,
								D = 'black';
							if (!I.length) for (var B in v) I[B] = new s(v[B]).toRgb();
							for (var _ in v) {
								var N = ((n = x), (i = I[_]), Math.pow(n.r - i.r, 2) + Math.pow(n.g - i.g, 2) + Math.pow(n.b - i.b, 2));
								N < O && ((O = N), (D = _));
							}
							return D;
						}
					}),
						d.string.push([
							function (a) {
								var n = a.toLowerCase(),
									i = n === 'transparent' ? '#0000' : v[n];
								return i ? new s(i).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(F) {
				function p(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (F.exports = p);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(F, p, e) {
				'use strict';
				e.d(p, { d: () => a });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function s() {
					return (
						(s =
							Object.assign ||
							function (n) {
								for (var i = 1; i < arguments.length; i++) {
									var o = arguments[i];
									for (var x in o) Object.prototype.hasOwnProperty.call(o, x) && (n[x] = o[x]);
								}
								return n;
							}),
						s.apply(this, arguments)
					);
				}
				function d(n, i) {
					if (n == null) return {};
					var o = {},
						x = Object.keys(n),
						O,
						D;
					for (D = 0; D < x.length; D++) (O = x[D]), !(i.indexOf(O) >= 0) && (o[O] = n[O]);
					return o;
				}
				var v = function (i) {
						var o = i.getBoundingClientRect();
						return { left: Math.ceil(o.left), width: Math.ceil(o.width) };
					},
					h = function (i) {
						return [].concat(i).sort(function (o, x) {
							return Number(o) - Number(x);
						});
					},
					b = function (i) {
						var o = t.default.useRef(i);
						return (
							(o.current = i),
							t.default.useCallback(function () {
								return o.current;
							}, [])
						);
					},
					I = {
						getPercentageForValue: function (i, o, x) {
							return Math.max(0, Math.min(100, ((i - o) / (x - o)) * 100));
						},
						getValueForClientX: function (i, o, x, O) {
							var D = o.left,
								B = o.width,
								_ = (i - D) / B,
								N = (O - x) * _;
							return N + x;
						},
					};
				function a(n) {
					var i = n.interpolator,
						o = i === void 0 ? I : i,
						x = n.tickSize,
						O = x === void 0 ? 10 : x,
						D = n.values,
						B = n.min,
						_ = n.max,
						N = n.ticks,
						W = n.steps,
						Z = n.onChange,
						z = n.onDrag,
						k = n.stepSize,
						g = t.default.useState(null),
						T = g[0],
						M = g[1],
						y = t.default.useState(),
						L = y[0],
						U = y[1],
						A = b({ activeHandleIndex: T, onChange: Z, onDrag: z, values: D, tempValues: L }),
						j = t.default.useRef(),
						J = t.default.useCallback(
							function (r) {
								var l = v(j.current);
								return o.getValueForClientX(r, l, B, _);
							},
							[o, _, B]
						),
						X = t.default.useCallback(
							function (r, l) {
								if (W) {
									var C = W.indexOf(r),
										E = C + l;
									return E >= 0 && E < W.length ? W[E] : r;
								} else {
									var u = r + k * l;
									return u >= B && u <= _ ? u : r;
								}
							},
							[_, B, k, W]
						),
						te = t.default.useCallback(
							function (r) {
								var l = B,
									C = _;
								if (W)
									W.forEach(function (E) {
										E <= r && E > l && (l = E), E >= r && E < C && (C = E);
									});
								else {
									for (; l < r && l + k < r; ) l += k;
									C = Math.min(l + k, _);
								}
								return r - l < C - r ? l : C;
							},
							[_, B, k, W]
						),
						$ = t.default.useCallback(
							function (r) {
								var l = A(),
									C = l.activeHandleIndex,
									E = l.onDrag,
									u = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
									m = J(u),
									f = te(m),
									V = [].concat(D.slice(0, C), [f], D.slice(C + 1));
								E ? E(V) : U(V);
							},
							[A, J, te, D]
						),
						G = t.default.useCallback(
							function (r, l) {
								var C = A(),
									E = C.values,
									u = C.onChange,
									m = u === void 0 ? function () {} : u;
								if (r.keyCode === 37 || r.keyCode === 39) {
									M(l);
									var f = r.keyCode === 37 ? -1 : 1,
										V = X(E[l], f),
										S = [].concat(E.slice(0, l), [V], E.slice(l + 1)),
										K = h(S);
									m(K);
								}
							},
							[A, X]
						),
						w = t.default.useCallback(
							function (r, l) {
								M(l);
								var C = function E(u) {
									var m = A(),
										f = m.tempValues,
										V = m.values,
										S = m.onChange,
										K = S === void 0 ? function () {} : S,
										R = m.onDrag,
										Y = R === void 0 ? function () {} : R;
									document.removeEventListener('mousemove', $),
										document.removeEventListener('touchmove', $),
										document.removeEventListener('mouseup', E),
										document.removeEventListener('touchend', E);
									var se = h(f || V);
									K(se), Y(se), M(null), U();
								};
								document.addEventListener('mousemove', $),
									document.addEventListener('touchmove', $),
									document.addEventListener('mouseup', C),
									document.addEventListener('touchend', C);
							},
							[A, $]
						),
						H = t.default.useCallback(
							function (r) {
								return o.getPercentageForValue(r, B, _);
							},
							[o, _, B]
						),
						Q = t.default.useMemo(
							function () {
								var r = N || W;
								if (!r) {
									for (r = [B]; r[r.length - 1] < _ - O; ) r.push(r[r.length - 1] + O);
									r.push(_);
								}
								return r.map(function (l, C) {
									return {
										value: l,
										getTickProps: function (u) {
											var m = u === void 0 ? {} : u,
												f = m.key,
												V = f === void 0 ? C : f,
												S = m.style,
												K = S === void 0 ? {} : S,
												R = d(m, ['key', 'style']);
											return s({ key: V, style: s({ position: 'absolute', width: 0, left: H(l) + '%', transform: 'translateX(-50%)' }, K) }, R);
										},
									};
								});
							},
							[N, H, _, B, W, O]
						),
						oe = t.default.useMemo(
							function () {
								var r = h(L || D);
								return [].concat(r, [_]).map(function (l, C) {
									return {
										value: l,
										getSegmentProps: function (u) {
											var m = u === void 0 ? {} : u,
												f = m.key,
												V = f === void 0 ? C : f,
												S = m.style,
												K = S === void 0 ? {} : S,
												R = d(m, ['key', 'style']),
												Y = H(r[C - 1] ? r[C - 1] : B),
												se = H(l) - Y;
											return s({ key: V, style: s({ position: 'absolute', left: Y + '%', width: se + '%' }, K) }, R);
										},
									};
								});
							},
							[H, _, B, L, D]
						),
						re = t.default.useMemo(
							function () {
								return (L || D).map(function (r, l) {
									return {
										value: r,
										active: l === T,
										getHandleProps: function (E) {
											var u = E === void 0 ? {} : E,
												m = u.key,
												f = m === void 0 ? l : m,
												V = u.ref,
												S = u.innerRef,
												K = u.onKeyDown,
												R = u.onMouseDown,
												Y = u.onTouchStart,
												se = u.style,
												le = se === void 0 ? {} : se,
												ne = d(u, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return s(
												{
													key: f,
													onKeyDown: function (P) {
														P.persist(), G(P, l), K && K(P);
													},
													onMouseDown: function (P) {
														P.persist(), w(P, l), R && R(P);
													},
													onTouchStart: function (P) {
														P.persist(), w(P, l), Y && Y(P);
													},
													role: 'slider',
													'aria-valuemin': B,
													'aria-valuemax': _,
													'aria-valuenow': r,
													style: s(
														{ position: 'absolute', top: '50%', left: H(r) + '%', zIndex: l === T ? '1' : '0', transform: 'translate(-50%, -50%)' },
														le
													),
												},
												ne
											);
										},
									};
								});
							},
							[T, H, G, w, B, _, L, D]
						),
						ae = function (l) {
							var C = l === void 0 ? {} : l,
								E = C.style,
								u = E === void 0 ? {} : E,
								m = C.ref,
								f = d(C, ['style', 'ref']);
							return s(
								{
									ref: function (S) {
										(j.current = S), m && (typeof m == 'function' ? m(S) : (m.current = S));
									},
									style: s({ position: 'relative', userSelect: 'none' }, u),
								},
								f
							);
						};
					return { activeHandleIndex: T, getTrackProps: ae, ticks: Q, segments: oe, handles: re };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Sidebar-Sidebar-stories.0b6f1e14.iframe.bundle.js.map
