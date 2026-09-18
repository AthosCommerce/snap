(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4018],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(h, n, e) {
				'use strict';
				const t = (c) => c.replace(/_/g, '-').toLowerCase();
				e.d(n, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(h, n, e) {
				'use strict';
				e.d(n, { G: () => c });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function c(i, m) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...m };
					return (0, t.Z)(i, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(h, n, e) {
				'use strict';
				e.d(n, { Z: () => t });
				function t(i, m) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...m };
					if (typeof i != 'number' || Number.isNaN(i)) return;
					const a = c(i, s.decimalPlaces).split('.');
					(a[0] = a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (a[1] = (a[1] || '').padEnd(s.decimalPlaces, '0'));
					let l = a.join(s.decimalSeparator);
					return s.symbolAfter ? (l = l + s.symbol) : (l = s.symbol + l), l;
				}
				function c(i, m) {
					const s = i.toString(),
						a = s.indexOf('.'),
						l = a == -1 ? s.length : 1 + a + (m || -1);
					return s.substr(0, l);
				}
			},
			'./components/src/components/Atoms/ProductDetail/ProductDetail.stories.tsx'(h, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => d, Description: () => u, __namedExportsOrder: () => v, default: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# ProductDetail\n\nRenders a single product field \u2014 resolved from an explicit dot-path on the product (e.g. `mappings.core.name` or `attributes.brand`) \u2014 as text or raw HTML. It is the building block behind the Quickview `title` (`productDetail.mappings.core.name`) and `description` (`productDetail.mappings.core.description`) modules and is reused for the value cells of `ProductDetailTable`.\n\n## Usage\n\n```tsx\nimport { ProductDetail } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from. The variant-aware `display` view is preferred, so values stay in sync with the active variant.\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.name'} />\n```\n\n### field\nThe required `field` prop is an explicit dot-path stating where to read the value from \u2014 for example `mappings.core.name` or `attributes.brand`. The path is resolved against the product's `display` view first, then the product itself. Array values render comma-separated; objects fall back to `JSON.stringify`. The component renders `null` when the resolved value is empty.\n\n```tsx\n<ProductDetail result={product} field={'attributes.brand'} />\n```\n\nWhen the field is a core-mapping price (`mappings.core.price`, `mappings.core.msrp`, or the bare `price`/`msrp` keys) and the resolved value is numeric, it is formatted with the `Price` component rather than rendered as plain text. Non-core price fields such as `attributes.price` are left as text.\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.price'} />\n```\n\n### html\nWhen `html` is true the resolved value is rendered via `dangerouslySetInnerHTML` (used for rich descriptions).\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.description'} html={true} />\n```\n\n### name\nThe optional `name` prop drives the `productDetail.<name>` theme selector (the `${module}.${name}` pattern) and the `ss__product-detail--<name>` classname modifier. When omitted the field path's final segment is used, normalized to its component-name form (underscores become dashes, lowercased \u2014 e.g. `color_family` \u2192 `color-family`).\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.name'} name={'name'} />\n```\n",
					l = {
						mappings: { core: { name: 'Sample Product', description: '<p>A rich <strong>HTML</strong> description.</p>' } },
						attributes: { brand: 'Acme', colors: ['Red', 'Blue'] },
					},
					E = {
						title: 'Atoms/ProductDetail',
						component: i.J_,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: m.Z } }, children: a }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						argTypes: {
							result: { description: 'Product to read the field from', type: { required: !1 }, table: { type: { summary: 'Product' } }, control: !1 },
							field: {
								description: 'Explicit dot-path to resolve (e.g. `mappings.core.name` or `attributes.brand`)',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							html: {
								description: 'Render the resolved value as raw HTML',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: 'false' } },
								control: { type: 'boolean' },
							},
							tag: {
								description: 'Extra identifying classname modifier',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							...s.F,
						},
					},
					d = (D) => (0, t.Y)(i.J_, { ...D });
				d.args = { result: l, field: 'mappings.core.name' };
				const u = (D) => (0, t.Y)(i.J_, { ...D });
				(u.args = { result: l, field: 'mappings.core.description', html: !0 }),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: ProductDetailProps) => <ProductDetail {...args} />', ...d.parameters?.docs?.source },
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: { originalSource: '(args: ProductDetailProps) => <ProductDetail {...args} />', ...u.parameters?.docs?.source },
						},
					});
				const v = ['Default', 'Description'];
			},
			'./components/src/components/Atoms/Price/Price.tsx'(h, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					a = e.n(s),
					l = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const L = ({ theme: b }) =>
						(0, m.AH)({ color: b?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					N = (0, c.PA)((b) => {
						const R = (0, E.u)(),
							M = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, d.LU)(),
							},
							O = (0, u.v6)('price', R, M, b),
							{
								lineThrough: K,
								value: o,
								format: r,
								symbol: p,
								decimalPlaces: y,
								padDecimalPlaces: _,
								thousandsSeparator: P,
								decimalSeparator: g,
								symbolAfter: T,
								code: A,
								showCode: C,
								raw: U,
								className: W,
								internalClassName: B,
							} = O,
							{ overrideElement: S, shouldRenderDefault: j } = (0, D._)('price', O);
						if (!j) return S;
						let f;
						o && (f = r ? r(o) : i.G(o, { symbol: '', decimalPlaces: y, padDecimalPlaces: _, thousandsSeparator: P, decimalSeparator: g }));
						const x = (0, v.Z)(O, L);
						return f
							? U
								? (0, t.Y)(t.FK, { children: f })
								: (0, t.Y)(l._, {
										children: (0, t.FD)('span', {
											...x,
											className: a()('ss__price', { 'ss__price--strike': K }, W, B),
											children: [
												!r && p && !T ? (0, t.Y)('span', { className: 'ss__price__symbol', children: p }) : (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: 'ss__price__value', children: f }),
												!r && p && T ? (0, t.Y)('span', { className: 'ss__price__symbol', children: p }) : (0, t.Y)(t.FK, {}),
												!r && C && A
													? (0, t.FD)(t.FK, { children: ['\xA0', (0, t.Y)('span', { className: 'ss__price__code', children: A })] })
													: (0, t.Y)(t.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(n, ['g', 0, N]);
			},
			'./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'(h, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					m = e.n(i),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					N = e('./components/src/components/Atoms/Price/Price.tsx');
				const b = ['price', 'msrp'],
					R = (o) => {
						if (!o) return !1;
						const r = o.split('.'),
							p = r[r.length - 1];
						return b.includes(p) ? (r.length === 1 ? !0 : r[r.length - 2] === 'core' && r[r.length - 3] === 'mappings') : !1;
					},
					I = (o, r) => {
						if (!o || !r) return;
						const p = (_) => r.split('.').reduce((P, g) => (P && typeof P == 'object' ? P[g] : void 0), _),
							y = p(o?.display) ?? p(o);
						if (y !== void 0) return y;
						if (!r.includes('.')) {
							const _ = o?.display?.mappings?.core || o?.mappings?.core,
								P = o?.display?.attributes || o?.attributes;
							return _?.[r] ?? P?.[r];
						}
					},
					M = (o) =>
						o == null
							? ''
							: Array.isArray(o) || (0, a.Fq)(o)
							? Array.from(o)
									.map((r) => (typeof r == 'object' ? JSON.stringify(r) : String(r)))
									.join(', ')
							: typeof o == 'object'
							? JSON.stringify(o)
							: String(o),
					O = () => (0, c.AH)({}),
					K = (0, s.PA)((o) => {
						const r = (0, E.u)(),
							y = { treePath: (0, d.LU)(), name: o.field ? (0, L.P)(o.field.split('.').pop() || '') : void 0 },
							_ = (0, u.v6)('productDetail', r, y, o),
							{ result: P, field: g, name: T, html: A, tag: C, className: U, internalClassName: W } = _,
							{ overrideElement: B, shouldRenderDefault: S } = (0, D._)('productDetail', _);
						if (!S) return B;
						const j = (0, v.Z)(_, O),
							f = I(P, g),
							x = M(f);
						if (!x) return null;
						const $ = R(g) && typeof f == 'number',
							Y = T || g.split('.').pop(),
							F = m()('ss__product-detail', Y && `ss__product-detail--${Y}`, C && `ss__product-detail--${C}`, U, W);
						return (0, t.Y)(l._, {
							children: A
								? (0, t.Y)('div', { ...j, className: F, dangerouslySetInnerHTML: { __html: x } })
								: (0, t.Y)('div', { ...j, className: F, children: $ ? (0, t.Y)(N.g, { value: f, treePath: _.treePath }) : x }),
						});
					});
				e.d(n, ['$I', 0, I, 'J_', 0, K, 'ZI', 0, M]);
			},
			'./components/src/utilities/componentArgs.ts'(h, n, e) {
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
				e.d(n, ['F', 0, t]);
			},
			'./components/src/utilities/storybook.tsx'(h, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					m = (s) => {
						const a = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								a.current && s.className?.includes('lang-') && !s.className?.includes(i) && window?.Prism?.highlightElement(a.current);
							}, [s.className, s.children, a]),
							(0, t.Y)('code', { ...s, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(n, ['Z', 0, m]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function n(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (h.exports = n);
			},
		},
	]);
})();
