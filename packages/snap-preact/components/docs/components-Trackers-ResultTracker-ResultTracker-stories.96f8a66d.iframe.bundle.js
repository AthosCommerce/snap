(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7643],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(P, c, e) {
				'use strict';
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(c, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(P, c, e) {
				'use strict';
				e.d(c, { G: () => l });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(o, r) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...r };
					return (0, s.Z)(o, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(P, c, e) {
				'use strict';
				e.d(c, { Z: () => s });
				function s(o, r) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...r };
					if (typeof o != 'number' || Number.isNaN(o)) return;
					const n = l(o, t.decimalPlaces).split('.');
					(n[0] = n[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (n[1] = (n[1] || '').padEnd(t.decimalPlaces, '0'));
					let a = n.join(t.decimalSeparator);
					return t.symbolAfter ? (a = a + t.symbol) : (a = t.symbol + a), a;
				}
				function l(o, r) {
					const t = o.toString(),
						n = t.indexOf('.'),
						a = n == -1 ? t.length : 1 + n + (r || -1);
					return t.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(P, c, e) {
				'use strict';
				e.d(c, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let o = l.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(P, c, e) {
				'use strict';
				e.d(c, { x: () => s });
				function s(l, o, r) {
					if (typeof l != 'string' || l.length <= o) return l;
					const t = l.lastIndexOf(' ', o),
						n = t != -1 ? t : o - 1;
					return l.substr(0, n) + (r || '');
				}
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.stories.tsx'(P, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => g, __namedExportsOrder: () => b, default: () => _ });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const n =
					"# ResultTracker\n\nAdds impression, render and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\nAlternatively, the `withTracking` HoC can also be used to track the same events. It also removes the additional `div` element that ResultTracker adds.\n\n## Usage\n```tsx\nimport { ResultTracker } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `render`, `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```tsx\n<ResultTracker controller={controller} result={result} track={{ render: false, impression: false }}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n";
				var a = e('./components/src/utilities/snapify.ts'),
					i = e('./components/src/components/Molecules/Result/Result.tsx');
				const _ = {
						title: 'Trackers/ResultTracker',
						component: o.o,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: n }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, s.Y)('div', { style: { maxWidth: '250px' }, children: (0, s.Y)(d, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							...t.F,
						},
					},
					f = a.p.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } }),
					g = (d, { loaded: { controller: O } }) => {
						const M = O?.store?.results[0];
						return (0, s.Y)(o.o, { ...d, controller: O, result: M, children: (0, s.Y)(i.Q, { result: M }) });
					};
				(g.loaders = [async () => (await f.search(), { controller: f })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(props: ResultTrackerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const firstResult = controller?.store?.results[0] as Product;
  return <ResultTracker {...props} controller={controller} result={firstResult}>
            <Result result={firstResult} />
        </ResultTracker>;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const b = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					n = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					_ = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					C = e('./components/src/types.ts'),
					E = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					D = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					x = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					B = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(m),
					v = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					p = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const k = () =>
						(0, r.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					z = (0, o.PA)((H) => {
						const J = (0, f.u)(),
							G = (0, g.LU)(),
							Q = {
								layout: C.V.grid,
								treePath: G,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							y = (0, O.v6)('result', J, Q, H),
							{
								result: I,
								hideBadge: K,
								hideTitle: Z,
								hidePricing: $,
								hideImage: F,
								detailSlot: X,
								fallback: q,
								disableStyles: j,
								className: ee,
								internalClassName: te,
								layout: se,
								onClick: S,
								controller: U,
								hideVariantSelections: re,
								hideAddToCartButton: oe,
								onAddToCartClick: W,
								addToCartButtonText: ne,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: le,
								hideRating: ce,
								trackingRef: ie,
								treePath: L,
							} = y,
							{ overrideElement: de, shouldRenderDefault: me } = (0, R._)('result', {
								...y,
								customComponent: y.customComponent && y.customComponent !== 'Result' ? y.customComponent : void 0,
							});
						if (!me) return de;
						const T = I?.display?.mappings.core || I?.mappings?.core,
							[ue, N] = (0, l.J0)(!1),
							A = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: L,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: j }), theme: y.theme, treePath: L },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: I,
									...(0, d.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: L,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: I,
									controller: U,
									...(0, d.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: L,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: T?.name || '',
									src: T?.imageUrl || '',
									...(0, d.s)({ disableStyles: j, fallback: q }),
									theme: y.theme,
									treePath: L,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: T?.rating || 0,
									count: Number(T?.ratingCount || 0),
									...(0, d.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: L,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (w) => {
										N(!0), W && W(w, I), U?.addToCart([I]), setTimeout(() => N(!1), le);
									},
									...(0, d.s)({ disableStyles: j }),
									theme: y.theme,
									treePath: L,
								},
							};
						let Y = T?.name;
						y.truncateTitle && (Y = h.x(T?.name || '', y.truncateTitle.limit, y.truncateTitle.append));
						const _e = (0, M.Z)(y, k),
							fe = { addToCartButtonText: { value: ue ? ae : ne } },
							pe = u()(fe, y.lang || {}),
							ge = (0, v.u)(pe, { result: I, controller: U }),
							V = !!(T?.msrp && T?.price && T?.price < T?.msrp),
							he = U?.store?.config?.asyncState?.product?.price ? I.state.priceFetched : !0;
						return T
							? (0, s.Y)(_._, {
									children: (0, s.FD)('article', {
										..._e,
										className: n()('ss__result', `ss__result--${se}`, { 'ss__result--sale': V }, ee, te),
										ref: ie,
										children: [
											!F &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: T.url,
														onClick: (w) => {
															S && S(w);
														},
														children: K
															? (0, s.Y)(a._, { ...A.image })
															: (0, s.Y)(D.Q, { ...A.overlayBadge, controller: U, children: (0, s.Y)(a._, { ...A.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!K && (0, s.Y)(E.W, { ...A.calloutBadge, controller: U }),
													!Z &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: T.url,
																onClick: (w) => {
																	S && S(w);
																},
																dangerouslySetInnerHTML: { __html: Y || '' },
															}),
														}),
													!ce && (0, s.Y)(x.G, { ...A.rating }),
													!$ && he && T.price && T.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: V
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ...A.price, value: T.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ...A.price, value: T.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ...A.price, value: T.price }),
														  })
														: null,
													(0, b.Y)(X, { result: I, treePath: L }),
													!re && I.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: I.variants?.selections.map((w) => (0, s.Y)(p.m, { ...A.variantSelection, type: w.type, selection: w })),
														  })
														: null,
													!oe &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(B.$, { ...A.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['Q', 0, z]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					t = e.n(r),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const _ = { ResultTracker: () => (0, l.AH)({}) },
					f = (0, o.PA)((g) => {
						const b = (0, n.u)(),
							d = (0, a.v6)('resultTracker', b, {}, g),
							O = { impression: !0, click: !0 },
							{ children: M, result: h, track: C, controller: E, className: D, internalClassName: x, disableStyles: B, style: m } = d,
							u = { ...O, ...C },
							{ ref: v, inViewport: R } = (0, i.Q)();
						R && u.impression && E?.track.product.impression(h);
						const p = {};
						return (
							B ? m && (p.css = [m]) : (p.css = [_.ResultTracker(), m]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${E?.type}-result-tracker`, D, x),
								onClick: (k) => {
									u.click && E?.track.product.click(k, h);
								},
								ref: v,
								...p,
								children: M,
							})
						);
					});
				e.d(c, ['o', 0, f]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 250,
					o = (t, n = {}) => {
						const { rootMargin: a = '0px', fireOnce: i = !1, threshold: _ = 0, minVisibleTime: f = 0 } = n,
							[g, b] = (0, s.J0)(!1),
							d = (0, s.li)(null),
							O = (0, s.li)(null),
							[M, h] = (0, s.J0)(0),
							C = (0, s.hb)((E) => {
								(t.current = E), h((D) => D + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								b(!1);
								let E = null,
									D = null;
								if (!window.IntersectionObserver || !t.current) return;
								const x = () => {
										D && (window.clearInterval(D), (D = null));
									},
									B = () => {
										f > 0
											? ((O.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													b(!0), i && t.current && E && E.unobserve(t.current);
											  }, f)))
											: (b(!0), i && t.current && E && E.unobserve(t.current));
									},
									m = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (O.current = null), b(!1);
									};
								return (
									(E = new IntersectionObserver(
										([u]) => {
											u.isIntersecting
												? t.current && r(t.current)
													? (x(), B())
													: (m(),
													  D ||
															(D = window.setInterval(() => {
																if (!t.current) {
																	x();
																	return;
																}
																r(t.current) && (x(), B());
															}, l)))
												: (x(), m());
										},
										{ rootMargin: a, threshold: _ }
									)),
									t.current && E.observe(t.current),
									() => {
										b(!1), x(), d.current && window.clearTimeout(d.current), E && t.current && E.unobserve(t.current);
									}
								);
							}, [t, M]),
							{ inViewport: g, updateRef: C }
						);
					};
				function r(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(c, ['v', 0, o]);
			},
			'./components/src/types.ts'(P, c, e) {
				'use strict';
				e.d(c, { Q: () => l, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					l = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(P, c, e) {
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
				e.d(c, ['F', 0, s]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(P, c, e) {
				'use strict';
				e.d(c, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					r = 1e3;
				function t(n) {
					const a = (0, s.li)(null),
						{ inViewport: i, updateRef: _ } = (0, l.v)(a, { ...n, fireOnce: !0, threshold: o, minVisibleTime: r });
					return { ref: a, inViewport: i, updateRef: _ };
				}
			},
			'./components/src/utilities/snapify.ts'(P, c, e) {
				'use strict';
				e.d(c, { p: () => E });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					O = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					C = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(u) {
						const v = u.id;
						if (h[v]) return h[v];
						const R = (h[v] = x({ client: C, controller: u }));
						return (
							R.on('afterStore', async ({ controller: p }, k) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await k();
							}),
							R.init(),
							R
						);
					}
					static autocomplete(u) {
						const v = u.id;
						if (h[v]) return h[v];
						const R = (h[v] = B({ client: C, controller: u }));
						return (
							R.on('afterStore', async ({ controller: p }, k) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await k();
							}),
							R.init(),
							R
						);
					}
					static search(u) {
						const v = u.id;
						if (h[v]) return h[v];
						const R = (h[v] = D({ client: C, controller: u }));
						return (
							R.on('afterStore', async ({ controller: p }, k) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await k();
							}),
							R.init(),
							R
						);
					}
				}
				function D(m) {
					const u = new _.V(new g.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), f.X);
					return new l.Tp(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new a.U(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new b.E(),
						profiler: new d.U(),
						logger: new O.V(),
						tracker: new M.J(m.client.globals),
					});
				}
				function x(m) {
					const u = new _.V(new g.E(), f.X).detach(!0);
					return new r.c(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new i.t(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new b.E(),
						profiler: new d.U(),
						logger: new O.V(),
						tracker: new M.J(m.client.globals),
					});
				}
				function B(m) {
					const u = new _.V(new g.E(), f.X).detach();
					return new o.Z(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new n.Y(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new b.E(),
						profiler: new d.U(),
						logger: new O.V(),
						tracker: new M.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					r = (t) => {
						const n = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								n.current && t.className?.includes('lang-') && !t.className?.includes(o) && window?.Prism?.highlightElement(n.current);
							}, [t.className, t.children, n]),
							(0, s.Y)('code', { ...t, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, r]);
			},
			'../../node_modules/colord/plugins/names.mjs'(P, c, e) {
				'use strict';
				e.d(c, { A: () => s }), e.dn(s);
				function s(l, o) {
					var r = {
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
						t = {};
					for (var n in r) t[r[n]] = n;
					var a = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var _,
							f,
							g = t[this.toHex()];
						if (g) return g;
						if (i?.closest) {
							var b = this.toRgb(),
								d = 1 / 0,
								O = 'black';
							if (!a.length) for (var M in r) a[M] = new l(r[M]).toRgb();
							for (var h in r) {
								var C = ((_ = b), (f = a[h]), Math.pow(_.r - f.r, 2) + Math.pow(_.g - f.g, 2) + Math.pow(_.b - f.b, 2));
								C < d && ((d = C), (O = h));
							}
							return O;
						}
					}),
						o.string.push([
							function (i) {
								var _ = i.toLowerCase(),
									f = _ === 'transparent' ? '#0000' : r[_];
								return f ? new l(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(P, c, e) {
				'use strict';
				e.d(c, { j: () => o });
				var s = Object.prototype.hasOwnProperty;
				function l(r, t, n) {
					for (n of r.keys()) if (o(n, t)) return n;
				}
				function o(r, t) {
					var n, a, i;
					if (r === t) return !0;
					if (r && t && (n = r.constructor) === t.constructor) {
						if (n === Date) return r.getTime() === t.getTime();
						if (n === RegExp) return r.toString() === t.toString();
						if (n === Array) {
							if ((a = r.length) === t.length) for (; a-- && o(r[a], t[a]); );
							return a === -1;
						}
						if (n === Set) {
							if (r.size !== t.size) return !1;
							for (a of r) if (((i = a), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (n === Map) {
							if (r.size !== t.size) return !1;
							for (a of r) if (((i = a[0]), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !o(a[1], t.get(i)))) return !1;
							return !0;
						}
						if (n === ArrayBuffer) (r = new Uint8Array(r)), (t = new Uint8Array(t));
						else if (n === DataView) {
							if ((a = r.byteLength) === t.byteLength) for (; a-- && r.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((a = r.byteLength) === t.byteLength) for (; a-- && r[a] === t[a]; );
							return a === -1;
						}
						if (!n || typeof r == 'object') {
							a = 0;
							for (n in r) if ((s.call(r, n) && ++a && !s.call(t, n)) || !(n in t) || !o(r[n], t[n])) return !1;
							return Object.keys(t).length === a;
						}
					}
					return r !== r && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function c(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (P.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Trackers-ResultTracker-ResultTracker-stories.96f8a66d.iframe.bundle.js.map
