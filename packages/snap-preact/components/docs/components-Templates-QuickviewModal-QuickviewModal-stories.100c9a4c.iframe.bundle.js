'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2341],
		{
			'./components/src/components/Templates/QuickviewModal/QuickviewModal.stories.tsx'(G, h, e) {
				e.r(h);
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Templates/QuickviewModal/QuickviewModal.tsx'),
					T = e('./components/src/utilities/componentArgs.ts'),
					x = e('./components/src/utilities/storybook.tsx'),
					k = e('./components/src/components/Organisms/QuickviewLayout/readme.md');
				function m(a = {}) {
					const p = {
							type: 'quickview',
							store: {
								meta: void 0,
								isOpen: !0,
								loading: !1,
								product: void 0,
								resolvedConfig: void 0,
								error: void 0,
								close: () => {
									p.store.isOpen = !1;
								},
							},
						},
						U = { ...p.store, ...(a.store || {}) };
					return { ...p, ...a, store: U };
				}
				const A = m({
						store: {
							isOpen: !0,
							product: {
								id: 'sample',
								mappings: {
									core: {
										name: 'Sample Widget',
										imageUrl: 'https://placehold.co/400x400',
										thumbnailImageUrl: 'https://placehold.co/400x400',
										description: '<p>A sample product description. Resize the viewport past 768px to see the two-column desktop layout.</p>',
									},
								},
								attributes: { color: 'red', size: 'M', sku: 'SW-001' },
							},
						},
					}),
					u = m({ store: { isOpen: !0, loading: !0, product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} } } }),
					B = m({
						store: {
							isOpen: !0,
							loading: !1,
							product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} },
							error: { message: 'Failed to display quickview' },
						},
					}),
					_ = {
						title: 'Templates/QuickviewModal',
						component: c._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: x.Z } }, children: k }), (0, o.Y)(s.uY, { story: s.h1 })],
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
								table: { category: 'Templates Legal', type: { summary: 'ModuleNamesWithColumns[]' } },
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
							lang: {
								description:
									'Custom language keys forwarded to `QuickviewLayout` (`quickview`, `closeButton`, `addToCartButton`, `moreInfoButton`, `loadingText`)',
								table: { type: { summary: 'Partial<QuickviewLayoutLang>' } },
								control: { type: 'object' },
							},
							...T.F,
						},
						args: {},
					},
					i = (a) => (0, o.Y)(c._, { ...a, quickviewManager: A });
				i.args = {};
				const r = (a) => (0, o.Y)(c._, { ...a, quickviewManager: u });
				r.args = {};
				const l = (a) => (0, o.Y)(c._, { ...a, quickviewManager: B });
				(l.args = {}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: '(args: QuickviewModalProps) => <QuickviewModal {...args} quickviewManager={defaultController} />',
								...i.parameters?.docs?.source,
							},
						},
					}),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: {
								originalSource: '(args: QuickviewModalProps) => <QuickviewModal {...args} quickviewManager={loadingController} />',
								...r.parameters?.docs?.source,
							},
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: '(args: QuickviewModalProps) => <QuickviewModal {...args} quickviewManager={errorController} />',
								...l.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default', 'Loading', 'ErrorState'];
				e.d(h, ['Default', 0, i, 'ErrorState', 0, l, 'Loading', 0, r, '__namedExportsOrder', 0, O, 'default', 0, _]);
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(G, h, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					x = e.n(T),
					k = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useClickOutside.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useA11y.tsx'),
					a = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					p = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const U = () =>
						(0, c.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					H = (0, k.PA)((y) => {
						const d = (0, I.u)(),
							J = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, A.LU)() },
							v = (0, r.v6)('modal', d, J, y),
							{
								button: R,
								content: K,
								buttonSelector: E,
								children: Q,
								disabled: P,
								open: S,
								onClick: f,
								lockScroll: D,
								startOpen: Z,
								disableClickOutside: j,
								disableA11y: C,
								className: W,
								internalClassName: $,
								disableStyles: Y,
								overlayColor: w,
								onOverlayClick: N,
								treePath: g,
							} = v,
							{ overrideElement: z, shouldRenderDefault: F } = (0, B._)('modal', v);
						if (!F) return z;
						const M = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (n) => {
									N && N(n), L();
								},
								...(0, i.s)({ disableStyles: Y, color: w }),
								theme: v?.theme,
								treePath: g,
							},
						};
						let t, b;
						const V = S === void 0;
						V ? ([t, b] = (0, s.J0)(Z)) : (t = S);
						let ee;
						j ||
							(ee = (0, u.L)(() => {
								t && (P || (V && b && b(!1)));
							}));
						const L = () => {
								V && b && b((n) => !n);
							},
							re = (0, l.Z)(v, U);
						(0, s.vJ)(
							() => (
								t && D ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[t, D]
						);
						const oe = (0, s.li)(t),
							te = (0, s.li)(D);
						return (
							(oe.current = t),
							(te.current = D),
							(0, s.vJ)(() => {
								const n = E ? (typeof E == 'string' ? document.querySelector(E) : E) : null;
								let se = !1,
									X;
								const ne = (0, p.s)(() => {
										clearTimeout(X),
											(X = setTimeout(() => {
												se || (oe.current && te.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									ae = (ie) => {
										L(), f && f(ie);
									};
								return (
									n && (P || n.addEventListener('click', ae)),
									window.addEventListener('resize', ne),
									() => {
										(se = !0), clearTimeout(X), window.removeEventListener('resize', ne), n && n.removeEventListener('click', ae);
									}
								);
							}, []),
							(0, o.Y)(m._, {
								children: (0, o.FD)('div', {
									...re,
									className: x()('ss__modal', { 'ss__modal--open': t }, { 'ss__modal--disabled': P }, W, $),
									ref: ee,
									children: [
										!E &&
											R &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (n) => (C ? null : (0, O.iy)(n)),
												'aria-expanded': t,
												role: 'button',
												onClick: (n) => {
													P || (L(), f && f(n));
												},
												children: (0, _.Y)(R, { open: t, toggleOpen: L, treePath: g }),
											}),
										(K || Q) &&
											t &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (n) => (C ? null : (0, O.iy)(n)),
												children: [(0, _.Y)(K, { open: t, toggleOpen: L, treePath: g }), (0, _.Y)(Q, { open: t, toggleOpen: L, treePath: g })],
											}),
										(0, o.Y)(a.h, { ...M.overlay, active: !!t }),
									],
								}),
							})
						);
					});
				e.d(h, ['a', 0, H]);
			},
			'./components/src/components/Templates/QuickviewModal/QuickviewModal.tsx'(G, h, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = e('../../node_modules/classnames/index.js'),
					k = e.n(x),
					m = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					r = e('./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx');
				const l = () =>
						(0, T.AH)({
							position: 'absolute',
							width: 0,
							height: 0,
							'&.ss__quickview-modal .ss__modal__content': {
								position: 'fixed !important',
								top: '50% !important',
								left: '50% !important',
								transform: 'translate(-50%, -50%) !important',
								minWidth: 'auto',
								maxWidth: '90vw',
								maxHeight: '90vh',
								width: 'auto',
								overflow: 'auto',
								zIndex: 10006,
								boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
								borderRadius: '4px',
							},
							'&.ss__quickview-modal .ss__modal__overlay': { zIndex: '10005 !important' },
							'@media (max-width: 767px)': {
								'&.ss__quickview-modal .ss__modal__content': { width: '100vw', maxWidth: '100vw', borderRadius: 0 },
								'&.ss__quickview-modal .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
							},
						}),
					O = (0, c.PA)((a) => {
						const p = (0, I.u)(),
							H = {
								treePath: (0, A.LU)(),
								hideBadge: !1,
								layout: [['c1', 'c2']],
								column1: { layout: ['slideshow'], width: '45%' },
								column2: {
									layout: [
										['productDetail.mappings.core.name'],
										['calloutBadge'],
										['variantSelections'],
										['quantityPicker'],
										['button.add-to-cart'],
										['productDetail.mappings.core.description'],
										['productDetailTable'],
										['button.more-info'],
									],
									width: 'auto',
								},
							},
							y = (0, B.v6)('quickviewModal', p, H, a),
							{
								quickviewManager: d,
								className: q,
								internalClassName: J,
								disableStyles: v,
								treePath: R,
								layout: K,
								hideBadge: E,
								column1: Q,
								column2: P,
								column3: S,
								column4: f,
								recommendation: D,
								lang: Z,
							} = y,
							j = (0, s.li)(null),
							C = (0, s.li)(null),
							W = (0, s.li)(!1);
						(0, s.vJ)(() => {
							const M = !!d?.store?.isOpen;
							M && !W.current
								? ((C.current = document.activeElement || null), j.current?.querySelector('.ss__quickview__close')?.focus())
								: !M && W.current && (C.current?.focus?.(), (C.current = null)),
								(W.current = M);
						});
						const $ = (0, _.Z)(y, l);
						if (!d)
							return (
								console.warn('[QuickviewModal] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const Y = d.store,
							w = Y.product,
							N = !!Y.isOpen,
							g = () => d.close(),
							z = {
								quickviewLayout: {
									onClose: g,
									...(0, u.s)({ hideBadge: E, column1: Q, column2: P, column3: S, column4: f, recommendation: D, lang: Z }),
									...(0, u.s)({ disableStyles: v }),
									theme: y?.theme,
									treePath: R,
								},
								modal: { onOverlayClick: g, ...(0, u.s)({ disableStyles: v }), theme: y?.theme, treePath: R },
							},
							F = (0, o.Y)(r.p, { quickviewManager: d, ...z.quickviewLayout, layout: K });
						return (0, o.Y)(m._, {
							children: (0, o.Y)('div', {
								...$,
								ref: j,
								className: k()('ss__quickview-modal', q, J),
								onClick: (M) => M.stopPropagation(),
								children: (0, o.Y)(i.a, {
									...z.modal,
									open: N,
									children: w ? (0, o.Y)(r.n, { quickviewManager: d, product: w, children: F }, `${w.responseId}-${w.id}`) : F,
								}),
							}),
						});
					});
				e.d(h, ['_', 0, O]);
			},
		},
	]);
})();
