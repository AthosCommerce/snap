(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4055],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(C, i, e) {
				'use strict';
				e.d(i, { P: () => s });
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(C, i, e) {
				'use strict';
				e.d(i, { G: () => l });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(o, r) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...r };
					return (0, s.Z)(o, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(C, i, e) {
				'use strict';
				e.d(i, { Z: () => s });
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
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(C, i, e) {
				'use strict';
				e.d(i, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let o = l.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(C, i, e) {
				'use strict';
				e.d(i, { x: () => s });
				function s(l, o, r) {
					if (typeof l != 'string' || l.length <= o) return l;
					const t = l.lastIndexOf(' ', o),
						n = t != -1 ? t : o - 1;
					return l.substr(0, n) + (r || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.stories.tsx'(C, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => x, __namedExportsOrder: () => R, default: () => T, hideSections: () => u, truncateTitle: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Molecules/Result/Result.tsx'),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					t = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const c =
					"# Result\n\nRenders a single product card. \n\n## Sub-components\n- Badge\n- CalloutBadge\n- Rating\n- Button\n- VariantSelection\n- Price\n- Image\n\n## Usage\n```tsx\nimport { Result } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```tsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst productDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```tsx\n<Result result={controller.store.results[0]} detailSlot={<ProductDetails product={controller.store.results[0]} />} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```tsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```tsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```tsx\n<Result result={controller.store.results[0]} truncateTitle={{ limit: 5, append: '...' }} />\n```";
				var g = e('./components/src/types.ts');
				const T = {
						title: 'Molecules/Result',
						component: o.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: t.Z } }, children: c }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, s.Y)(d, {})],
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							hideBadge: {
								description: 'Hide badge',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideVariantSelections: {
								description: 'Hide variant Selections',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideTitle: {
								description: 'Hide title',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hidePricing: {
								description: 'Hide pricing',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideImage: {
								description: 'Hide image',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideRating: {
								description: 'Hide ratings',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hideAddToCartButton: {
								description: 'Hide add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							addToCartButtonText: {
								description: 'add to cart button text',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							addToCartButtonSuccessText: {
								description: 'add to cart button text to show after adding to cart',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							addToCartButtonSuccessTimeout: {
								description: 'time in ms to show the success button text before reverting back to standard text',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							onAddToCartClick: {
								description: 'function to run on add to cart button click',
								table: { category: 'Templates Legal', type: { summary: 'function' }, defaultValue: { summary: 'Add To Cart' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							detailSlot: {
								description: 'Slot for more product details (under price)',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							fallback: {
								defaultValue: '',
								description: 'Fallback image url',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: r.t } },
								control: { type: 'text' },
							},
							truncateTitle: {
								defaultValue: {},
								description: 'truncate title options object',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							layout: {
								description: 'Results layout',
								defaultValue: g.V.grid,
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [g.V.grid, g.V.list],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...n.F,
						},
					},
					E = a.p.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
					x = (d, { loaded: { controller: P } }) => {
						const v = P?.store?.results[7];
						return (
							(v.display.mappings.core = { ...v.display.mappings.core, rating: 4.5 }),
							(0, s.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(o.Q, { ...d, result: v }) })
						);
					};
				x.loaders = [async () => (await E.search(), { controller: E })];
				const u = (d, { loaded: { controller: P } }) => {
					const v = P?.store?.results[7];
					return (
						(v.display.mappings.core = { ...v.display.mappings.core, rating: 4.5 }),
						(0, s.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(o.Q, { ...d, result: v }) })
					);
				};
				(u.loaders = [async () => (await E.search(), { controller: E })]), (u.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
				const h = (d, { loaded: { controller: P } }) => {
					const v = P?.store?.results[7];
					return (
						(v.display.mappings.core = { ...v.display.mappings.core, rating: 4.5 }),
						(0, s.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(o.Q, { ...d, result: v }) })
					);
				};
				(h.loaders = [async () => (await E.search(), { controller: E })]),
					(h.args = { truncateTitle: { limit: 5, append: '...' } }),
					(x.parameters = {
						...x.parameters,
						docs: {
							...x.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const resultToUse = controller?.store?.results[7] as Product;
  //force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
  resultToUse.display.mappings.core = {
    ...resultToUse.display.mappings.core,
    rating: 4.5
  };
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '300px'
  }}>
            <Result {...args} result={resultToUse} />
        </div>;
}`,
								...x.parameters?.docs?.source,
							},
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const resultToUse = controller?.store?.results[7] as Product;
  //force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
  resultToUse.display.mappings.core = {
    ...resultToUse.display.mappings.core,
    rating: 4.5
  };
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '300px'
  }}>
            <Result {...args} result={resultToUse} />
        </div>;
}`,
								...u.parameters?.docs?.source,
							},
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const resultToUse = controller?.store?.results[7] as Product;
  //force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
  resultToUse.display.mappings.core = {
    ...resultToUse.display.mappings.core,
    rating: 4.5
  };
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '300px'
  }}>
            <Result {...args} result={resultToUse} />
        </div>;
}`,
								...h.parameters?.docs?.source,
							},
						},
					});
				const R = ['Default', 'hideSections', 'truncateTitle'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => z });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					n = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					g = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					d = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					P = e('./components/src/types.ts'),
					v = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					I = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					j = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					k = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(m),
					y = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const S = () =>
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
						const J = (0, T.u)(),
							F = (0, E.LU)(),
							Q = {
								layout: P.V.grid,
								treePath: F,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							_ = (0, h.v6)('result', J, Q, H),
							{
								result: O,
								hideBadge: W,
								hideTitle: G,
								hidePricing: Z,
								hideImage: X,
								detailSlot: $,
								fallback: q,
								disableStyles: L,
								className: ee,
								internalClassName: te,
								layout: se,
								onClick: U,
								controller: w,
								hideVariantSelections: re,
								hideAddToCartButton: oe,
								onAddToCartClick: K,
								addToCartButtonText: ne,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: le,
								hideRating: ie,
								trackingRef: ce,
								treePath: B,
							} = _,
							{ overrideElement: de, shouldRenderDefault: ue } = (0, M._)('result', {
								..._,
								customComponent: _.customComponent && _.customComponent !== 'Result' ? _.customComponent : void 0,
							});
						if (!ue) return de;
						const f = O?.display?.mappings.core || O?.mappings?.core,
							[me, N] = (0, l.J0)(!1),
							D = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, u.s)({ disableStyles: L }),
									theme: _.theme,
									treePath: B,
								},
								price: { internalClassName: 'ss__result__price', ...(0, u.s)({ disableStyles: L }), theme: _.theme, treePath: B },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: O,
									...(0, u.s)({ disableStyles: L }),
									theme: _.theme,
									treePath: B,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: O,
									controller: w,
									...(0, u.s)({ disableStyles: L }),
									theme: _.theme,
									treePath: B,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: f?.name || '',
									src: f?.imageUrl || '',
									...(0, u.s)({ disableStyles: L, fallback: q }),
									theme: _.theme,
									treePath: B,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: f?.rating || 0,
									count: Number(f?.ratingCount || 0),
									...(0, u.s)({ disableStyles: L }),
									theme: _.theme,
									treePath: B,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (A) => {
										N(!0), K && K(A, O), w?.addToCart([O]), setTimeout(() => N(!1), le);
									},
									...(0, u.s)({ disableStyles: L }),
									theme: _.theme,
									treePath: B,
								},
							};
						let V = f?.name;
						_.truncateTitle && (V = d.x(f?.name || '', _.truncateTitle.limit, _.truncateTitle.append));
						const pe = (0, R.Z)(_, S),
							fe = { addToCartButtonText: { value: me ? ae : ne } },
							ge = p()(fe, _.lang || {}),
							_e = (0, y.u)(ge, { result: O, controller: w }),
							Y = !!(f?.msrp && f?.price && f?.price < f?.msrp),
							he = w?.store?.config?.asyncState?.product?.price ? O.state.priceFetched : !0;
						return f
							? (0, s.Y)(g._, {
									children: (0, s.FD)('article', {
										...pe,
										className: n()('ss__result', `ss__result--${se}`, { 'ss__result--sale': Y }, ee, te),
										ref: ce,
										children: [
											!X &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: f.url,
														onClick: (A) => {
															U && U(A);
														},
														children: W
															? (0, s.Y)(a._, { ...D.image })
															: (0, s.Y)(I.Q, { ...D.overlayBadge, controller: w, children: (0, s.Y)(a._, { ...D.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!W && (0, s.Y)(v.W, { ...D.calloutBadge, controller: w }),
													!G &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: f.url,
																onClick: (A) => {
																	U && U(A);
																},
																dangerouslySetInnerHTML: { __html: V || '' },
															}),
														}),
													!ie && (0, s.Y)(j.G, { ...D.rating }),
													!Z && he && f.price && f.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: Y
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(c.g, { ...D.price, value: f.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(c.g, { ...D.price, value: f.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(c.g, { ...D.price, value: f.price }),
														  })
														: null,
													(0, x.Y)($, { result: O, treePath: B }),
													!re && O.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: O.variants?.selections.map((A) => (0, s.Y)(b.m, { ...D.variantSelection, type: A.type, selection: A })),
														  })
														: null,
													!oe &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(k.$, { ...D.button, ..._e.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => l, V: () => s });
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
			'./components/src/utilities/componentArgs.ts'(C, i, e) {
				'use strict';
				e.d(i, { F: () => s });
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
			},
			'./components/src/utilities/snapify.ts'(C, i, e) {
				'use strict';
				e.d(i, { p: () => v });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					R = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					P = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(p) {
						const y = p.id;
						if (d[y]) return d[y];
						const M = (d[y] = j({ client: P, controller: p }));
						return (
							M.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							M.init(),
							M
						);
					}
					static autocomplete(p) {
						const y = p.id;
						if (d[y]) return d[y];
						const M = (d[y] = k({ client: P, controller: p }));
						return (
							M.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							M.init(),
							M
						);
					}
					static search(p) {
						const y = p.id;
						if (d[y]) return d[y];
						const M = (d[y] = I({ client: P, controller: p }));
						return (
							M.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							M.init(),
							M
						);
					}
				}
				function I(m) {
					const p = new g.V(new E.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), T.X);
					return new l.Tp(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new a.U(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new x.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new R.J(m.client.globals),
					});
				}
				function j(m) {
					const p = new g.V(new E.E(), T.X).detach(!0);
					return new r.c(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new c.t(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new x.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new R.J(m.client.globals),
					});
				}
				function k(m) {
					const p = new g.V(new E.E(), T.X).detach();
					return new o.Z(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new n.Y(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new x.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new R.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, i, e) {
				'use strict';
				e.d(i, { Z: () => r });
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
			},
			'../../node_modules/colord/plugins/names.mjs'(C, i, e) {
				'use strict';
				e.d(i, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
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
					(l.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var g,
							T,
							E = t[this.toHex()];
						if (E) return E;
						if (c?.closest) {
							var x = this.toRgb(),
								u = 1 / 0,
								h = 'black';
							if (!a.length) for (var R in r) a[R] = new l(r[R]).toRgb();
							for (var d in r) {
								var P = ((g = x), (T = a[d]), Math.pow(g.r - T.r, 2) + Math.pow(g.g - T.g, 2) + Math.pow(g.b - T.b, 2));
								P < u && ((u = P), (h = d));
							}
							return h;
						}
					}),
						o.string.push([
							function (c) {
								var g = c.toLowerCase(),
									T = g === 'transparent' ? '#0000' : r[g];
								return T ? new l(T).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(C, i, e) {
				'use strict';
				e.d(i, { j: () => o });
				var s = Object.prototype.hasOwnProperty;
				function l(r, t, n) {
					for (n of r.keys()) if (o(n, t)) return n;
				}
				function o(r, t) {
					var n, a, c;
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
							for (a of r) if (((c = a), (c && typeof c == 'object' && ((c = l(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (n === Map) {
							if (r.size !== t.size) return !1;
							for (a of r) if (((c = a[0]), (c && typeof c == 'object' && ((c = l(t, c)), !c)) || !o(a[1], t.get(c)))) return !1;
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
			'../../node_modules/memoizerific sync recursive'(C) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (C.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Result-Result-stories.d91993a3.iframe.bundle.js.map
