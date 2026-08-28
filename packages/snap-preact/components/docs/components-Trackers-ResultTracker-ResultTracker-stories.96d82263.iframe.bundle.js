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
				function l(n, r) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...r };
					return (0, s.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(P, c, e) {
				'use strict';
				e.d(c, { Z: () => s });
				function s(n, r) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...r };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const o = l(n, t.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(t.decimalPlaces, '0'));
					let a = o.join(t.decimalSeparator);
					return t.symbolAfter ? (a = a + t.symbol) : (a = t.symbol + a), a;
				}
				function l(n, r) {
					const t = n.toString(),
						o = t.indexOf('.'),
						a = o == -1 ? t.length : 1 + o + (r || -1);
					return t.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(P, c, e) {
				'use strict';
				e.d(c, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(P, c, e) {
				'use strict';
				e.d(c, { x: () => s });
				function s(l, n, r) {
					if (typeof l != 'string' || l.length <= n) return l;
					const t = l.lastIndexOf(' ', n),
						o = t != -1 ? t : n - 1;
					return l.substr(0, o) + (r || '');
				}
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.stories.tsx'(P, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => h, __namedExportsOrder: () => y, default: () => _ });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const o =
					"# ResultTracker\n\nAdds impression, render and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\nAlternatively, the `withTracking` HoC can also be used to track the same events. It also removes the additional `div` element that ResultTracker adds.\n\n## Usage\n```tsx\nimport { ResultTracker } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `render`, `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```tsx\n<ResultTracker controller={controller} result={result} track={{ render: false, impression: false }}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n";
				var a = e('./components/src/utilities/snapify.ts'),
					i = e('./components/src/components/Molecules/Result/Result.tsx');
				const _ = {
						title: 'Trackers/ResultTracker',
						component: n.o,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: o }), (0, s.Y)(l.uY, { story: l.h1 })],
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
					h = (d, { loaded: { controller: O } }) => {
						const M = O?.store?.results[0];
						return (0, s.Y)(n.o, { ...d, controller: O, result: M, children: (0, s.Y)(i.Q, { result: M }) });
					};
				(h.loaders = [async () => (await f.search(), { controller: f })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					});
				const y = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					o = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					_ = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					k = e('./components/src/types.ts'),
					E = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					C = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					x = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					B = e('./components/src/components/Atoms/Button/Button.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					m = e.n(u),
					v = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					p = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const w = () =>
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
								'& .ss__result__quickview': {
									position: 'absolute',
									bottom: '10px',
									right: '10px',
									display: 'flex',
									background: 'transparent',
									border: 0,
									padding: '5px',
									cursor: 'pointer',
								},
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
					Q = (0, n.PA)(($) => {
						const K = (0, f.u)(),
							F = (0, h.LU)(),
							G = {
								layout: k.V.grid,
								treePath: F,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							T = (0, O.v6)('result', K, G, $),
							{
								result: D,
								hideBadge: W,
								hideTitle: Z,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: j,
								className: se,
								internalClassName: re,
								layout: ne,
								onClick: S,
								controller: U,
								hideVariantSelections: oe,
								hideAddToCartButton: ae,
								onAddToCartClick: N,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ce,
								addToCartButtonSuccessTimeout: ie,
								hideRating: de,
								hideQuickviewButton: ue,
								onQuickviewClick: V,
								trackingRef: me,
								treePath: L,
							} = T,
							{ overrideElement: _e, shouldRenderDefault: fe } = (0, R._)('result', {
								...T,
								customComponent: T.customComponent && T.customComponent !== 'Result' ? T.customComponent : void 0,
							});
						if (!fe) return _e;
						const b = D?.display?.mappings.core || D?.mappings?.core,
							[pe, Y] = (0, l.J0)(!1),
							I = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: j }),
									theme: T.theme,
									treePath: L,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: j }), theme: T.theme, treePath: L },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: D,
									...(0, d.s)({ disableStyles: j }),
									theme: T.theme,
									treePath: L,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: D,
									controller: U,
									...(0, d.s)({ disableStyles: j }),
									theme: T.theme,
									treePath: L,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: b?.name || '',
									src: b?.imageUrl || '',
									...(0, d.s)({ disableStyles: j, fallback: te }),
									theme: T.theme,
									treePath: L,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: b?.rating || 0,
									count: Number(b?.ratingCount || 0),
									...(0, d.s)({ disableStyles: j }),
									theme: T.theme,
									treePath: L,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (A) => {
										V && V(A, D), U?.quickview(D);
									},
									...(0, d.s)({ disableStyles: j }),
									theme: T.theme,
									treePath: L,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (A) => {
										Y(!0), N && N(A, D), U?.addToCart([D]), setTimeout(() => Y(!1), ie);
									},
									...(0, d.s)({ disableStyles: j }),
									theme: T.theme,
									treePath: L,
								},
							};
						let z = b?.name;
						T.truncateTitle && (z = g.x(b?.name || '', T.truncateTitle.limit, T.truncateTitle.append));
						const he = (0, M.Z)(T, w),
							ge = { addToCartButtonText: { value: pe ? ce : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Ee = m()(ge, T.lang || {}),
							H = (0, v.u)(Ee, { result: D, controller: U }, { activeBreakpoint: K?.activeBreakpoint }),
							J = !!(b?.msrp && b?.price && b?.price < b?.msrp),
							ve = U?.store?.config?.asyncState?.product?.price ? D.state.priceFetched : !0;
						return b
							? (0, s.Y)(_._, {
									children: (0, s.FD)('article', {
										...he,
										className: o()('ss__result', `ss__result--${ne}`, { 'ss__result--sale': J }, se, re),
										ref: me,
										children: [
											!q &&
												(0, s.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, s.Y)('a', {
															href: b.url,
															onClick: (A) => {
																S && S(A);
															},
															children: W
																? (0, s.Y)(a._, { ...I.image })
																: (0, s.Y)(C.Q, { ...I.overlayBadge, controller: U, children: (0, s.Y)(a._, { ...I.image }) }),
														}),
														!ue && U?.quickviewManager && (0, s.Y)(B.$, { ...I.quickviewButton, ...H.quickviewButtonText.attributes }),
													],
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!W && (0, s.Y)(E.W, { ...I.calloutBadge, controller: U }),
													!Z &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: b.url,
																onClick: (A) => {
																	S && S(A);
																},
																dangerouslySetInnerHTML: { __html: z || '' },
															}),
														}),
													!de && (0, s.Y)(x.G, { ...I.rating }),
													!X && ve && b.price && b.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: J
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ...I.price, value: b.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ...I.price, value: b.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ...I.price, value: b.price }),
														  })
														: null,
													(0, y.Y)(ee, { result: D, treePath: L }),
													!oe && D.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: D.variants?.selections.map((A) => (0, s.Y)(p.m, { ...I.variantSelection, type: A.type, selection: A })),
														  })
														: null,
													!ae &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(B.$, { ...I.button, ...H.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['Q', 0, Q]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					t = e.n(r),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const _ = { ResultTracker: () => (0, l.AH)({}) },
					f = (0, n.PA)((h) => {
						const y = (0, o.u)(),
							d = (0, a.v6)('resultTracker', y, {}, h),
							O = { impression: !0, click: !0 },
							{ children: M, result: g, track: k, controller: E, className: C, internalClassName: x, disableStyles: B, style: u } = d,
							m = { ...O, ...k },
							{ ref: v, inViewport: R } = (0, i.Q)();
						R && m.impression && E?.track.product.impression(g);
						const p = {};
						return (
							B ? u && (p.css = [u]) : (p.css = [_.ResultTracker(), u]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${E?.type}-result-tracker`, C, x),
								onClick: (w) => {
									m.click && E?.track.product.click(w, g);
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
					n = (t, o = {}) => {
						const { rootMargin: a = '0px', fireOnce: i = !1, threshold: _ = 0, minVisibleTime: f = 0 } = o,
							[h, y] = (0, s.J0)(!1),
							d = (0, s.li)(null),
							O = (0, s.li)(null),
							[M, g] = (0, s.J0)(0),
							k = (0, s.hb)((E) => {
								(t.current = E), g((C) => C + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								y(!1);
								let E = null,
									C = null;
								if (!window.IntersectionObserver || !t.current) return;
								const x = () => {
										C && (window.clearInterval(C), (C = null));
									},
									B = () => {
										f > 0
											? ((O.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													y(!0), i && t.current && E && E.unobserve(t.current);
											  }, f)))
											: (y(!0), i && t.current && E && E.unobserve(t.current));
									},
									u = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (O.current = null), y(!1);
									};
								return (
									(E = new IntersectionObserver(
										([m]) => {
											m.isIntersecting
												? t.current && r(t.current)
													? (x(), B())
													: (u(),
													  C ||
															(C = window.setInterval(() => {
																if (!t.current) {
																	x();
																	return;
																}
																r(t.current) && (x(), B());
															}, l)))
												: (x(), u());
										},
										{ rootMargin: a, threshold: _ }
									)),
									t.current && E.observe(t.current),
									() => {
										y(!1), x(), d.current && window.clearTimeout(d.current), E && t.current && E.unobserve(t.current);
									}
								);
							}, [t, M]),
							{ inViewport: h, updateRef: k }
						);
					};
				function r(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(c, ['v', 0, n]);
			},
			'./components/src/types.ts'(P, c, e) {
				'use strict';
				e.d(c, { Q: () => l, V: () => s });
				var s = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(s || {}),
					l = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
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
				const n = 0.7,
					r = 1e3;
				function t(o) {
					const a = (0, s.li)(null),
						{ inViewport: i, updateRef: _ } = (0, l.v)(a, { fireOnce: !0, threshold: n, minVisibleTime: r, ...o });
					return { ref: a, inViewport: i, updateRef: _ };
				}
			},
			'./components/src/utilities/snapify.ts'(P, c, e) {
				'use strict';
				e.d(c, { p: () => E });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					O = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					k = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(m) {
						const v = m.id;
						if (g[v]) return g[v];
						const R = (g[v] = x({ client: k, controller: m }));
						return (
							R.on('afterStore', async ({ controller: p }, w) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await w();
							}),
							R.init(),
							R
						);
					}
					static autocomplete(m) {
						const v = m.id;
						if (g[v]) return g[v];
						const R = (g[v] = B({ client: k, controller: m }));
						return (
							R.on('afterStore', async ({ controller: p }, w) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await w();
							}),
							R.init(),
							R
						);
					}
					static search(m) {
						const v = m.id;
						if (g[v]) return g[v];
						const R = (g[v] = C({ client: k, controller: m }));
						return (
							R.on('afterStore', async ({ controller: p }, w) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await w();
							}),
							R.init(),
							R
						);
					}
				}
				function C(u) {
					const m = new _.V(new h.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), f.X);
					return new l.Tp(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new a.U(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new y.E(),
						profiler: new d.U(),
						logger: new O.V(),
						tracker: new M.J(u.client.globals),
					});
				}
				function x(u) {
					const m = new _.V(new h.E(), f.X).detach(!0);
					return new r.c(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new i.t(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new y.E(),
						profiler: new d.U(),
						logger: new O.V(),
						tracker: new M.J(u.client.globals),
					});
				}
				function B(u) {
					const m = new _.V(new h.E(), f.X).detach();
					return new n.Z(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new o.Y(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new y.E(),
						profiler: new d.U(),
						logger: new O.V(),
						tracker: new M.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, c, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					r = (t) => {
						const o = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								o.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(o.current);
							}, [t.className, t.children, o]),
							(0, s.Y)('code', { ...t, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, r]);
			},
			'../../node_modules/colord/plugins/names.mjs'(P, c, e) {
				'use strict';
				e.d(c, { A: () => s }), e.dn(s);
				function s(l, n) {
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
					for (var o in r) t[r[o]] = o;
					var a = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var _,
							f,
							h = t[this.toHex()];
						if (h) return h;
						if (i?.closest) {
							var y = this.toRgb(),
								d = 1 / 0,
								O = 'black';
							if (!a.length) for (var M in r) a[M] = new l(r[M]).toRgb();
							for (var g in r) {
								var k = ((_ = y), (f = a[g]), Math.pow(_.r - f.r, 2) + Math.pow(_.g - f.g, 2) + Math.pow(_.b - f.b, 2));
								k < d && ((d = k), (O = g));
							}
							return O;
						}
					}),
						n.string.push([
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
				e.d(c, { j: () => n });
				var s = Object.prototype.hasOwnProperty;
				function l(r, t, o) {
					for (o of r.keys()) if (n(o, t)) return o;
				}
				function n(r, t) {
					var o, a, i;
					if (r === t) return !0;
					if (r && t && (o = r.constructor) === t.constructor) {
						if (o === Date) return r.getTime() === t.getTime();
						if (o === RegExp) return r.toString() === t.toString();
						if (o === Array) {
							if ((a = r.length) === t.length) for (; a-- && n(r[a], t[a]); );
							return a === -1;
						}
						if (o === Set) {
							if (r.size !== t.size) return !1;
							for (a of r) if (((i = a), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (r.size !== t.size) return !1;
							for (a of r) if (((i = a[0]), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !n(a[1], t.get(i)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (r = new Uint8Array(r)), (t = new Uint8Array(t));
						else if (o === DataView) {
							if ((a = r.byteLength) === t.byteLength) for (; a-- && r.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((a = r.byteLength) === t.byteLength) for (; a-- && r[a] === t[a]; );
							return a === -1;
						}
						if (!o || typeof r == 'object') {
							a = 0;
							for (o in r) if ((s.call(r, o) && ++a && !s.call(t, o)) || !(o in t) || !n(r[o], t[o])) return !1;
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

//# sourceMappingURL=components-Trackers-ResultTracker-ResultTracker-stories.96d82263.iframe.bundle.js.map
