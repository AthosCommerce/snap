(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4055],
		{
			'./components/src/components/Molecules/Result/Result.stories.tsx'(E, d, t) {
				'use strict';
				t.r(d), t.d(d, { Default: () => x, __namedExportsOrder: () => v, default: () => R, hideSections: () => y, truncateTitle: () => T });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = t('./components/src/components/Molecules/Result/Result.tsx'),
					n = t('./components/src/components/Atoms/Image/Image.tsx'),
					e = t('./components/src/utilities/storybook.tsx'),
					r = t('./components/src/utilities/componentArgs.ts'),
					o = t('./components/src/utilities/snapify.ts');
				const c =
					"# Result\n\nRenders a single product card. \n\n## Sub-components\n- Badge\n- Price\n- Image\n\n## Usage\n```jsx\nimport { Result } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```jsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```jsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={() => clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst productDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```jsx\n<Result result={controller.store.results[0]} detailSlot={<productDetails product={controller.store.results[0]/>} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```jsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### width\nThe `width` prop sets the width of this Result.\n\n```jsx\n<Result result={controller.store.results[0]} width={'25%'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```jsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```jsx\n<Result result={controller.store.results[0]} truncateTitle={ limit: 5, append: '...' } />\n```";
				var C = t('./components/src/types.ts');
				const R = {
						title: 'Molecules/Result',
						component: u.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(h.oz, { options: { overrides: { code: e.Z } }, children: c }), (0, s.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						decorators: [(l) => (0, s.Y)(l, {})],
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
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: n.t } },
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
								defaultValue: C.V.grid,
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [C.V.grid, C.V.list],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...r.F,
						},
					},
					_ = o.p.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
					x = (l, { loaded: { controller: b } }) => {
						const g = b?.store?.results[7];
						return (
							(g.display.mappings.core = { ...g.display.mappings.core, rating: 4.5 }),
							(0, s.Y)('div', { style: { maxWidth: l?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(u.Q, { ...l, result: g }) })
						);
					};
				x.loaders = [async () => (await _.search(), { controller: _ })];
				const y = (l, { loaded: { controller: b } }) => {
					const g = b?.store?.results[7];
					return (
						(g.display.mappings.core = { ...g.display.mappings.core, rating: 4.5 }),
						(0, s.Y)('div', { style: { maxWidth: l?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(u.Q, { ...l, result: g }) })
					);
				};
				(y.loaders = [async () => (await _.search(), { controller: _ })]), (y.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
				const T = (l, { loaded: { controller: b } }) => {
					const g = b?.store?.results[7];
					return (
						(g.display.mappings.core = { ...g.display.mappings.core, rating: 4.5 }),
						(0, s.Y)('div', { style: { maxWidth: l?.layout == 'list' ? '650px' : '300px' }, children: (0, s.Y)(u.Q, { ...l, result: g }) })
					);
				};
				(T.loaders = [async () => (await _.search(), { controller: _ })]),
					(T.args = { truncateTitle: { limit: 5, append: '...' } }),
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
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
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
								...y.parameters?.docs?.source,
							},
						},
					}),
					(T.parameters = {
						...T.parameters,
						docs: {
							...T.parameters?.docs,
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
								...T.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default', 'hideSections', 'truncateTitle'];
			},
			'./components/src/utilities/componentArgs.ts'(E, d, t) {
				'use strict';
				t.d(d, { F: () => s });
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
			'./components/src/utilities/snapify.ts'(E, d, t) {
				'use strict';
				t.d(d, { p: () => g });
				var s = t('../../node_modules/mobx/dist/mobx.esm.js'),
					h = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					C = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					R = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const l = {},
					b = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(i) {
						const m = i.id;
						if (l[m]) return l[m];
						const f = (l[m] = P({ client: b, controller: i }));
						return (
							f.on('afterStore', async ({ controller: p }, j) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await j();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(i) {
						const m = i.id;
						if (l[m]) return l[m];
						const f = (l[m] = S({ client: b, controller: i }));
						return (
							f.on('afterStore', async ({ controller: p }, j) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await j();
							}),
							f.init(),
							f
						);
					}
					static search(i) {
						const m = i.id;
						if (l[m]) return l[m];
						const f = (l[m] = w({ client: b, controller: i }));
						return (
							f.on('afterStore', async ({ controller: p }, j) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await j();
							}),
							f.init(),
							f
						);
					}
				}
				function w(a) {
					const i = new C.V(new _.E({ settings: { coreType: 'query', corePrefix: a.controller.id } }), R.X);
					return new h.Tp(a.controller, {
						client: new e.K(a.client.globals, a.client.config),
						store: new o.U(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new y.U(),
						logger: new T.V(),
						tracker: new v.J(a.client.globals),
					});
				}
				function P(a) {
					const i = new C.V(new _.E(), R.X).detach(!0);
					return new n.c(a.controller, {
						client: new e.K(a.client.globals, a.client.config),
						store: new c.t(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new y.U(),
						logger: new T.V(),
						tracker: new v.J(a.client.globals),
					});
				}
				function S(a) {
					const i = new C.V(new _.E(), R.X).detach();
					return new u.Z(a.controller, {
						client: new e.K(a.client.globals, a.client.config),
						store: new r.Y(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new y.U(),
						logger: new T.V(),
						tracker: new v.J(a.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(E, d, t) {
				'use strict';
				t.d(d, { Z: () => n });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					n = (e) => {
						const r = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								r.current && e.className?.includes('lang-') && !e.className?.includes(u) && window?.Prism?.highlightElement(r.current);
							}, [e.className, e.children, r]),
							(0, s.Y)('code', { ...e, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(E, d, t) {
				'use strict';
				t.d(d, { j: () => u });
				var s = Object.prototype.hasOwnProperty;
				function h(n, e, r) {
					for (r of n.keys()) if (u(r, e)) return r;
				}
				function u(n, e) {
					var r, o, c;
					if (n === e) return !0;
					if (n && e && (r = n.constructor) === e.constructor) {
						if (r === Date) return n.getTime() === e.getTime();
						if (r === RegExp) return n.toString() === e.toString();
						if (r === Array) {
							if ((o = n.length) === e.length) for (; o-- && u(n[o], e[o]); );
							return o === -1;
						}
						if (r === Set) {
							if (n.size !== e.size) return !1;
							for (o of n) if (((c = o), (c && typeof c == 'object' && ((c = h(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (r === Map) {
							if (n.size !== e.size) return !1;
							for (o of n) if (((c = o[0]), (c && typeof c == 'object' && ((c = h(e, c)), !c)) || !u(o[1], e.get(c)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (n = new Uint8Array(n)), (e = new Uint8Array(e));
						else if (r === DataView) {
							if ((o = n.byteLength) === e.byteLength) for (; o-- && n.getInt8(o) === e.getInt8(o); );
							return o === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((o = n.byteLength) === e.byteLength) for (; o-- && n[o] === e[o]; );
							return o === -1;
						}
						if (!r || typeof n == 'object') {
							o = 0;
							for (r in n) if ((s.call(n, r) && ++o && !s.call(e, r)) || !(r in e) || !u(n[r], e[r])) return !1;
							return Object.keys(e).length === o;
						}
					}
					return n !== n && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function d(t) {
					var s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (E.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Result-Result-stories.c0f4341a.iframe.bundle.js.map
