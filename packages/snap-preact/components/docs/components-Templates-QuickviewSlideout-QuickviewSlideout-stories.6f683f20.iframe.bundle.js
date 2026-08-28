'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5705],
		{
			'./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.stories.tsx'(j, v, e) {
				e.r(v);
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.tsx'),
					g = e('./components/src/utilities/componentArgs.ts'),
					c = e('./components/src/utilities/storybook.tsx'),
					y = e('./components/src/components/Organisms/QuickviewLayout/readme.md');
				function n(i = {}) {
					const M = {
							type: 'quickview',
							store: {
								meta: void 0,
								isOpen: !0,
								loading: !1,
								product: void 0,
								resolvedConfig: void 0,
								error: void 0,
								close: () => {
									M.store.isOpen = !1;
								},
							},
						},
						o = { ...M.store, ...(i.store || {}) };
					return { ...M, ...i, store: o };
				}
				const A = n({
						store: {
							isOpen: !0,
							product: {
								id: 'sample',
								mappings: {
									core: {
										name: 'Sample Widget',
										imageUrl: 'https://placehold.co/400x400',
										thumbnailImageUrl: 'https://placehold.co/400x400',
										description: '<p>A sample product description, rendered in the slideout single-column layout.</p>',
									},
								},
								attributes: { color: 'red', size: 'M', sku: 'SW-001' },
							},
						},
					}),
					f = n({ store: { isOpen: !0, loading: !0, product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} } } }),
					x = n({
						store: {
							isOpen: !0,
							loading: !1,
							product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} },
							error: { message: 'Failed to display quickview' },
						},
					}),
					b = {
						title: 'Templates/QuickviewSlideout',
						component: l.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: c.Z } }, children: y }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						argTypes: {
							quickviewManager: {
								description:
									'QuickviewManager exposing `store` ({ isOpen, product, loading, resolvedConfig, error, close }); dismiss via `store.close()`',
								type: { required: !0 },
								table: { type: { summary: 'QuickviewManager' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Module/column arrangement passed through to `QuickviewLayout` (see the readme for available modules)',
								table: {
									category: 'Templates Legal',
									type: { summary: 'ModuleNamesWithColumns[]' },
									defaultValue: {
										summary:
											"[['slideshow'], ['productDetail.mappings.core.name'], ['calloutBadge'], ['variantSelections'], ['button.add-to-cart', 'button.more-info'], ['productDetail.mappings.core.description'], ['productDetailTable']]",
									},
								},
								control: 'none',
							},
							hideBadge: {
								description: 'Render the `slideshow` module without the `OverlayBadge` wrapper',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							column1: {
								description: '`{ layout, width, alignContent }` config for the `c1` column',
								table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
								control: 'none',
							},
							column2: {
								description: '`{ layout, width, alignContent }` config for the `c2` column',
								table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
								control: 'none',
							},
							column3: {
								description: '`{ layout, width, alignContent }` config for the `c3` column',
								table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
								control: 'none',
							},
							column4: {
								description: '`{ layout, width, alignContent }` config for the `c4` column',
								table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
								control: 'none',
							},
							recommendation: {
								description:
									'Config for `recommendation.<profile>` modules: `{ component?, resultComponent?, config? }`. Profile/tag comes from the module name.',
								table: { type: { summary: '{ component?, resultComponent?, config? }' } },
								control: { type: 'object' },
							},
							slideDirection: {
								description: 'Direction the slideout enters from',
								table: { type: { summary: "'left' | 'right' | 'top' | 'bottom'" }, defaultValue: { summary: 'right' } },
								control: { type: 'select' },
								options: ['left', 'right', 'top', 'bottom'],
							},
							width: {
								description: 'Width of the slideout panel',
								table: { type: { summary: 'string' }, defaultValue: { summary: '500px' } },
								control: { type: 'text' },
							},
							overlayColor: {
								description: 'Color of the overlay behind the slideout',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
								control: { type: 'color' },
							},
							lang: {
								description:
									'Custom language keys forwarded to `QuickviewLayout` (`quickview`, `closeButton`, `addToCartButton`, `moreInfoButton`, `loadingText`)',
								table: { type: { summary: 'Partial<QuickviewLayoutLang>' } },
								control: { type: 'object' },
							},
							...g.F,
						},
						args: {},
					},
					u = (i) => (0, t.Y)(l.S, { ...i, quickviewManager: A });
				u.args = {};
				const d = (i) => (0, t.Y)(l.S, { ...i, quickviewManager: f });
				d.args = {};
				const m = (i) => (0, t.Y)(l.S, { ...i, quickviewManager: x });
				(m.args = {}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: '(args: QuickviewSlideoutProps) => <QuickviewSlideout {...args} quickviewManager={defaultController} />',
								...u.parameters?.docs?.source,
							},
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: '(args: QuickviewSlideoutProps) => <QuickviewSlideout {...args} quickviewManager={loadingController} />',
								...d.parameters?.docs?.source,
							},
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: '(args: QuickviewSlideoutProps) => <QuickviewSlideout {...args} quickviewManager={errorController} />',
								...m.parameters?.docs?.source,
							},
						},
					});
				const w = ['Default', 'Loading', 'ErrorState'];
				e.d(v, ['Default', 0, u, 'ErrorState', 0, m, 'Loading', 0, d, '__namedExportsOrder', 0, w, 'default', 0, b]);
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(j, v, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					y = e.n(c),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useMediaQuery.tsx'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					w = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const i = ({ slideDirection: o, transitionSpeed: W, width: r }) =>
						(0, g.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${o || 'left'} ${W}`,
							left: o == 'left' ? `-${r}` : o != 'right' ? '0' : 'initial',
							right: o == 'right' ? `-${r}` : 'initial',
							bottom: o == 'bottom' ? '-100vh' : 'initial',
							top: o == 'top' ? '-100vh' : o == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: r?.endsWith('%') && parseInt(r.split('%')[0]) > 90 ? r : '90%',
							maxWidth: r,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: o == 'left' || o != 'right' ? '0' : 'initial',
								right: o == 'right' ? '0' : 'initial',
								bottom: o == 'bottom' ? '0' : 'initial',
								top: o == 'top' ? '0' : o == 'bottom' ? 'initial' : '0',
							},
						}),
					M = (0, l.PA)((o) => {
						const W = (0, b.u)(),
							E = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, u.LU)(),
								rerender: !0,
							},
							D = (0, A.v6)('slideout', W, E, o),
							{
								children: Y,
								active: h,
								rerender: L,
								buttonContent: k,
								buttonSelector: T,
								noButtonWrapper: N,
								displayAt: J,
								transitionSpeed: F,
								overlayColor: z,
								onChange: R,
								disableStyles: V,
								className: $,
								internalClassName: Z,
								treePath: S,
							} = D,
							{ overrideElement: U, shouldRenderDefault: H } = (0, m._)('slideout', D);
						if (!H) return U;
						const K = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, P.s)({ disableStyles: V, color: z, transitionSpeed: F }),
									theme: D?.theme,
									treePath: S,
								},
							},
							[a, O] = (0, s.J0)(!!h),
							[X, B] = (0, s.J0)(!!h),
							p = () => {
								const _ = !a;
								a
									? (O(!1),
									  L &&
											setTimeout(() => {
												B(!1);
											}, 250))
									: (O(!0), B(!0)),
									(document.body.style.overflow = _ ? 'hidden' : ''),
									R && R(_);
							};
						(0, s.Nf)(() => {
							B(!!h), O(!!h);
						}, [h]);
						const I = (0, d.U)(J, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = I && a ? 'hidden' : '';
						const Q = (0, f.Z)(D, i);
						return (
							(0, s.vJ)(() => {
								if (T) {
									let _;
									typeof T == 'string' ? (_ = document.querySelector(T)) : (_ = T), _ && _.addEventListener('click', () => p());
								}
							}, []),
							I || !L
								? (0, t.FD)(x._, {
										children: [
											k &&
												(N
													? (0, n.Y)(k, { toggleActive: p, active: a, treePath: S })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => p(),
															children: (0, n.Y)(k, { active: a, treePath: S }),
													  })),
											(0, t.Y)('div', {
												className: y()('ss__slideout', $, Z, { 'ss__slideout--active': a }),
												style: { visibility: L || I ? 'visible' : 'hidden' },
												...Q,
												children: X && (0, n.Y)(Y, { toggleActive: p, active: a, treePath: S }),
											}),
											(0, t.Y)(w.h, { ...K.overlay, active: a, onClick: p }),
										],
								  })
								: null
						);
					});
				e.d(v, ['S', 0, M]);
			},
			'./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.tsx'(j, v, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					y = e.n(c),
					n = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					d = e('./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx');
				const m = () =>
						(0, g.AH)({
							'& .ss__slideout': { zIndex: 10006 },
							'& .ss__slideout__overlay': { zIndex: '10005 !important' },
							'& .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
						}),
					w = (0, l.PA)((i) => {
						const M = (0, P.u)(),
							W = {
								treePath: (0, A.LU)(),
								slideDirection: 'right',
								width: '500px',
								overlayColor: 'rgba(0,0,0,0.8)',
								hideBadge: !1,
								layout: [
									['slideshow'],
									['productDetail.mappings.core.name'],
									['calloutBadge'],
									['variantSelections'],
									['quantityPicker'],
									['button.add-to-cart'],
									['productDetail.mappings.core.description'],
									['productDetailTable'],
									['button.more-info'],
								],
							},
							r = (0, x.v6)('quickviewSlideout', M, W, i),
							{
								quickviewManager: E,
								className: D,
								internalClassName: Y,
								disableStyles: h,
								treePath: L,
								layout: k,
								hideBadge: T,
								column1: N,
								column2: J,
								column3: F,
								column4: z,
								recommendation: R,
								slideDirection: V,
								width: $,
								overlayColor: Z,
								lang: S,
							} = r,
							[U, H] = (0, s.J0)(!1);
						(0, s.vJ)(() => {
							H(!0);
						}, []);
						const K = (0, s.li)(null),
							a = (0, s.li)(null),
							O = (0, s.li)(!1);
						(0, s.vJ)(() => {
							const C = !!E?.store?.isOpen && U;
							C && !O.current
								? ((a.current = document.activeElement || null), K.current?.querySelector('.ss__quickview__close')?.focus())
								: !C && O.current && (a.current?.focus?.(), (a.current = null)),
								(O.current = C);
						});
						const X = (0, b.Z)(r, m);
						if (!E)
							return (
								console.warn('[QuickviewSlideout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const B = E.store,
							p = B.product,
							I = !!B.isOpen && U,
							Q = () => E.close(),
							_ = {
								quickviewLayout: {
									onClose: Q,
									...(0, f.s)({ hideBadge: T, column1: N, column2: J, column3: F, column4: z, recommendation: R, lang: S }),
									...(0, f.s)({ disableStyles: h }),
									theme: r?.theme,
									treePath: L,
								},
								slideout: {
									rerender: !1,
									slideDirection: V,
									width: $,
									overlayColor: Z,
									onChange: (C) => {
										C || Q();
									},
									...(0, f.s)({ disableStyles: h }),
									theme: r?.theme,
									treePath: L,
								},
							},
							G = (0, t.Y)(d.p, { quickviewManager: E, ..._.quickviewLayout, layout: k });
						return (0, t.Y)(n._, {
							children: (0, t.Y)('div', {
								...X,
								ref: K,
								className: y()('ss__quickview-slideout', D, Y),
								onClick: (C) => C.stopPropagation(),
								children: (0, t.Y)(u.S, {
									..._.slideout,
									active: I,
									children: p ? (0, t.Y)(d.n, { quickviewManager: E, product: p, children: G }, `${p.responseId}-${p.id}`) : G,
								}),
							}),
						});
					});
				e.d(v, ['S', 0, w]);
			},
			'./components/src/hooks/useMediaQuery.tsx'(j, v, e) {
				e.d(v, { U: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function s(l, g) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const c = window.matchMedia(l),
						[y, n] = (0, t.J0)(!!c.matches);
					return (
						(0, t.vJ)(() => {
							n(!!c.matches);
							const P = () => n(!!c.matches);
							return (
								c.addListener(P),
								() => {
									g instanceof Function && g(), c.removeListener(P);
								}
							);
						}, [l]),
						y
					);
				}
			},
		},
	]);
})();
