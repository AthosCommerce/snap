(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4055],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(x, i, t) {
				'use strict';
				t.d(i, { P: () => s });
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(x, i, t) {
				'use strict';
				t.d(i, { G: () => l });
				var s = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(a, r) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...r };
					return (0, s.Z)(a, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(x, i, t) {
				'use strict';
				t.d(i, { Z: () => s });
				function s(a, r) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...r };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const o = l(a, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let n = o.join(e.decimalSeparator);
					return e.symbolAfter ? (n = n + e.symbol) : (n = e.symbol + n), n;
				}
				function l(a, r) {
					const e = a.toString(),
						o = e.indexOf('.'),
						n = o == -1 ? e.length : 1 + o + (r || -1);
					return e.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(x, i, t) {
				'use strict';
				t.d(i, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let a = l.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(x, i, t) {
				'use strict';
				t.d(i, { x: () => s });
				function s(l, a, r) {
					if (typeof l != 'string' || l.length <= a) return l;
					const e = l.lastIndexOf(' ', a),
						o = e != -1 ? e : a - 1;
					return l.substr(0, o) + (r || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.stories.tsx'(x, i, t) {
				'use strict';
				t.r(i), t.d(i, { Default: () => w, __namedExportsOrder: () => E, default: () => b, hideSections: () => f, truncateTitle: () => g });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = t('./components/src/components/Molecules/Result/Result.tsx'),
					r = t('./components/src/components/Atoms/Image/Image.tsx'),
					e = t('./components/src/utilities/storybook.tsx'),
					o = t('./components/src/utilities/componentArgs.ts'),
					n = t('./components/src/utilities/snapify.ts');
				const c =
					"# Result\n\nRenders a single product card. \n\n## Sub-components\n- Badge\n- Price\n- Image\n\n## Usage\n```tsx\nimport { Result } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```tsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={() => clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst productDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```tsx\n<Result result={controller.store.results[0]} detailSlot={<productDetails product={controller.store.results[0]/>} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```tsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### width\nThe `width` prop sets the width of this Result.\n\n```tsx\n<Result result={controller.store.results[0]} width={'25%'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```tsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```tsx\n<Result result={controller.store.results[0]} truncateTitle={ limit: 5, append: '...' } />\n```";
				var p = t('./components/src/types.ts');
				const b = {
						title: 'Molecules/Result',
						component: a.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: e.Z } }, children: c }), (0, s.Y)(l.uY, { story: l.h1 })],
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
								defaultValue: p.V.grid,
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [p.V.grid, p.V.list],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...o.F,
						},
					},
					_ = n.p.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
					w = (d, { loaded: { controller: v } }) => {
						const T = v?.store?.results[7];
						return (
							(T.display.mappings.core = { ...T.display.mappings.core, rating: 4.5 }),
							(0, s.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(a.Q, { ...d, result: T }) })
						);
					};
				w.loaders = [async () => (await _.search(), { controller: _ })];
				const f = (d, { loaded: { controller: v } }) => {
					const T = v?.store?.results[7];
					return (
						(T.display.mappings.core = { ...T.display.mappings.core, rating: 4.5 }),
						(0, s.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(a.Q, { ...d, result: T }) })
					);
				};
				(f.loaders = [async () => (await _.search(), { controller: _ })]), (f.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
				const g = (d, { loaded: { controller: v } }) => {
					const T = v?.store?.results[7];
					return (
						(T.display.mappings.core = { ...T.display.mappings.core, rating: 4.5 }),
						(0, s.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(a.Q, { ...d, result: T }) })
					);
				};
				(g.loaders = [async () => (await _.search(), { controller: _ })]),
					(g.args = { truncateTitle: { limit: 5, append: '...' } }),
					(w.parameters = {
						...w.parameters,
						docs: {
							...w.parameters?.docs,
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
								...w.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const E = ['Default', 'hideSections', 'truncateTitle'];
			},
			'./components/src/utilities/componentArgs.ts'(x, i, t) {
				'use strict';
				t.d(i, { F: () => s });
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
			'./components/src/utilities/snapify.ts'(x, i, t) {
				'use strict';
				t.d(i, { p: () => T });
				var s = t('../../node_modules/mobx/dist/mobx.esm.js'),
					l = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					p = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					w = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					f = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					v = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(m) {
						const h = m.id;
						if (d[h]) return d[h];
						const C = (d[h] = k({ client: v, controller: m }));
						return (
							C.on('afterStore', async ({ controller: y }, P) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await P();
							}),
							C.init(),
							C
						);
					}
					static autocomplete(m) {
						const h = m.id;
						if (d[h]) return d[h];
						const C = (d[h] = S({ client: v, controller: m }));
						return (
							C.on('afterStore', async ({ controller: y }, P) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await P();
							}),
							C.init(),
							C
						);
					}
					static search(m) {
						const h = m.id;
						if (d[h]) return d[h];
						const C = (d[h] = R({ client: v, controller: m }));
						return (
							C.on('afterStore', async ({ controller: y }, P) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await P();
							}),
							C.init(),
							C
						);
					}
				}
				function R(u) {
					const m = new p.V(new _.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), b.X);
					return new l.Tp(u.controller, {
						client: new e.K(u.client.globals, u.client.config),
						store: new n.U(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new w.E(),
						profiler: new f.U(),
						logger: new g.V(),
						tracker: new E.J(u.client.globals),
					});
				}
				function k(u) {
					const m = new p.V(new _.E(), b.X).detach(!0);
					return new r.c(u.controller, {
						client: new e.K(u.client.globals, u.client.config),
						store: new c.t(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new w.E(),
						profiler: new f.U(),
						logger: new g.V(),
						tracker: new E.J(u.client.globals),
					});
				}
				function S(u) {
					const m = new p.V(new _.E(), b.X).detach();
					return new a.Z(u.controller, {
						client: new e.K(u.client.globals, u.client.config),
						store: new o.Y(u.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new w.E(),
						profiler: new f.U(),
						logger: new g.V(),
						tracker: new E.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, i, t) {
				'use strict';
				t.d(i, { Z: () => r });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					r = (e) => {
						const o = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								o.current && e.className?.includes('lang-') && !e.className?.includes(a) && window?.Prism?.highlightElement(o.current);
							}, [e.className, e.children, o]),
							(0, s.Y)('code', { ...e, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(x, i, t) {
				'use strict';
				t.d(i, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
				function s(l, a) {
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
						e = {};
					for (var o in r) e[r[o]] = o;
					var n = {};
					(l.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var p,
							b,
							_ = e[this.toHex()];
						if (_) return _;
						if (c?.closest) {
							var w = this.toRgb(),
								f = 1 / 0,
								g = 'black';
							if (!n.length) for (var E in r) n[E] = new l(r[E]).toRgb();
							for (var d in r) {
								var v = ((p = w), (b = n[d]), Math.pow(p.r - b.r, 2) + Math.pow(p.g - b.g, 2) + Math.pow(p.b - b.b, 2));
								v < f && ((f = v), (g = d));
							}
							return g;
						}
					}),
						a.string.push([
							function (c) {
								var p = c.toLowerCase(),
									b = p === 'transparent' ? '#0000' : r[p];
								return b ? new l(b).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(x, i, t) {
				'use strict';
				t.d(i, { j: () => a });
				var s = Object.prototype.hasOwnProperty;
				function l(r, e, o) {
					for (o of r.keys()) if (a(o, e)) return o;
				}
				function a(r, e) {
					var o, n, c;
					if (r === e) return !0;
					if (r && e && (o = r.constructor) === e.constructor) {
						if (o === Date) return r.getTime() === e.getTime();
						if (o === RegExp) return r.toString() === e.toString();
						if (o === Array) {
							if ((n = r.length) === e.length) for (; n-- && a(r[n], e[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (r.size !== e.size) return !1;
							for (n of r) if (((c = n), (c && typeof c == 'object' && ((c = l(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (o === Map) {
							if (r.size !== e.size) return !1;
							for (n of r) if (((c = n[0]), (c && typeof c == 'object' && ((c = l(e, c)), !c)) || !a(n[1], e.get(c)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (r = new Uint8Array(r)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((n = r.byteLength) === e.byteLength) for (; n-- && r.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((n = r.byteLength) === e.byteLength) for (; n-- && r[n] === e[n]; );
							return n === -1;
						}
						if (!o || typeof r == 'object') {
							n = 0;
							for (o in r) if ((s.call(r, o) && ++n && !s.call(e, o)) || !(o in e) || !a(r[o], e[o])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return r !== r && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function i(t) {
					var s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (x.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Result-Result-stories.a711506f.iframe.bundle.js.map
