(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1805],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(M, r, e) {
				'use strict';
				const t = (a) => a.replace(/_/g, '-').toLowerCase();
				e.d(r, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(M, r, e) {
				'use strict';
				e.d(r, { G: () => a });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(l, m) {
					const o = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...m };
					return (0, t.Z)(l, o);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(M, r, e) {
				'use strict';
				e.d(r, { Z: () => t });
				function t(l, m) {
					const o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...m };
					if (typeof l != 'number' || Number.isNaN(l)) return;
					const i = a(l, o.decimalPlaces).split('.');
					(i[0] = i[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + o.thousandsSeparator)),
						o.decimalPlaces > 0 && o.padDecimalPlaces && (i[1] = (i[1] || '').padEnd(o.decimalPlaces, '0'));
					let u = i.join(o.decimalSeparator);
					return o.symbolAfter ? (u = u + o.symbol) : (u = o.symbol + u), u;
				}
				function a(l, m) {
					const o = l.toString(),
						i = o.indexOf('.'),
						u = i == -1 ? o.length : 1 + i + (m || -1);
					return o.substr(0, u);
				}
			},
			'./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.stories.tsx'(M, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => E, __namedExportsOrder: () => A, default: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const i =
						"# ProductDetailTable\n\nRenders a two-column table of product details (label / value), one row per configured detail. It is the component behind the Quickview `productDetailTable` module. Values resolve from an explicit dot-path when given (e.g. `attributes.brand`) or fall back to `mappings.core` first, then `attributes`, for bare field keys.\n\n## Usage\n\n```tsx\nimport { ProductDetailTable } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from.\n\n### displayFields\nThe `displayFields` prop is the ordered list of fields to display as label / value rows. Each entry is an object with:\n\n- `field` (required) \u2014 an explicit dot-path (e.g. `attributes.brand`) or a bare field key (resolved against `mappings.core` then `attributes`).\n- `label` (optional) \u2014 the display label; falls back to the raw field key.\n- `type` (optional) \u2014 how to render the resolved value:\n  - `'text'` (default) \u2014 plain text via `ProductDetail`; arrays render comma-separated.\n  - `'price'` \u2014 the `Price` component (formatted currency).\n  - `'rating'` \u2014 the `Rating` component (star display).\n  - `'image'` \u2014 the `Image` component (arrays use the first entry).\n  - `'html'` \u2014 rich HTML via `ProductDetail`'s `html` mode.\n\n  When a typed value doesn't fit its type (e.g. a non-numeric `price`), the value falls back to text rendering.\n\nOnly fields that resolve to a non-empty value are rendered; if none do, the component renders `null` (display fields are opt-in).\n\n```tsx\n<ProductDetailTable\n	result={product}\n	displayFields={[\n		{ field: 'brand', label: 'Brand' },\n		{ field: 'material', label: 'Material' },\n		{ field: 'price', label: 'Price', type: 'price' },\n		{ field: 'rating', label: 'Rating', type: 'rating' },\n	]}\n/>\n```\n",
					u = {
						mappings: {
							core: {
								name: 'Sample Product',
								price: 19.99,
								thumbnailImageUrl:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647.png?v=1747685130&width=1920',
							},
						},
						attributes: { brand: 'Acme', material: 'Cotton', colors: ['Red', 'Blue'], rating: 4.5 },
					},
					T = {
						title: 'Molecules/ProductDetailTable',
						component: l.X,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(a.oz, { options: { overrides: { code: m.Z } }, children: i }), (0, t.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						argTypes: {
							result: { description: 'Product to read the fields from', table: { type: { summary: 'Product' } }, control: !1 },
							displayFields: {
								description: 'Ordered fields to display as label / value rows: field, optional label, and optional render type',
								table: { type: { summary: 'DisplayFieldConfig[]' }, category: 'Templates Legal' },
								control: { type: 'object' },
							},
							...o.F,
						},
					},
					E = (C) => (0, t.Y)(l.X, { ...C });
				(E.args = {
					result: u,
					displayFields: [
						{ field: 'brand', label: 'Brand' },
						{ field: 'material', label: 'Material' },
						{ field: 'colors', label: 'Colors' },
						{ field: 'price', label: 'Price', type: 'price' },
						{ field: 'rating', label: 'Rating', type: 'rating' },
						{ field: 'thumbnailImageUrl', label: 'Image', type: 'image' },
					],
				}),
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
							source: { originalSource: '(args: ProductDetailTableProps) => <ProductDetailTable {...args} />', ...E.parameters?.docs?.source },
						},
					});
				const A = ['Default'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					o = e.n(m),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const j = '//cdn.athoscommerce.net/snap/images/fallback.png',
					y = ({ height: b }) =>
						(0, l.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: b || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					I = (0, i.PA)((b) => {
						const F = (0, T.u)(),
							H = (0, E.LU)(),
							R = { fallback: j, lazy: !0, treePath: H },
							h = (0, A.v6)('image', F, R, b),
							{
								alt: s,
								src: n,
								fallback: p,
								title: g,
								hoverSrc: d,
								lazy: f,
								onMouseOver: v,
								onMouseOut: L,
								onError: N,
								onLoad: x,
								onClick: S,
								onPointerDown: Y,
								onPointerMove: U,
								onPointerUp: c,
								onPointerLeave: B,
								className: _,
								internalClassName: O,
								draggable: K,
							} = h,
							{ overrideElement: D, shouldRenderDefault: $ } = (0, W._)('image', h);
						if (!$) return D;
						const [z, V] = (0, a.J0)(!1),
							[G, J] = (0, a.J0)(!1),
							Z = (0, a.li)('');
						(0, a.vJ)(() => {
							Z.current = n;
						}),
							Z.current && Z.current != n && V(!1);
						const X = (0, C.Z)(h, y);
						return (0, t.Y)(u._, {
							children: (0, t.Y)('div', {
								...X,
								className: o()('ss__image', { 'ss__image--hidden': !z }, _, O),
								children: (0, t.Y)('img', {
									src: (G ? d : n) || p,
									alt: s,
									title: g || s,
									loading: f ? 'lazy' : void 0,
									onLoad: (P) => {
										V(!0), x && x(P);
									},
									onClick: (P) => S && S(P),
									onError: (P) => {
										(P.target.src = p || ''), N && N(P);
									},
									onMouseOver: (P) => {
										d && J(!0), v && v(P);
									},
									onMouseOut: (P) => {
										d && J(!1), L && L(P);
									},
									onPointerDown: (P) => {
										Y && Y(P);
									},
									onPointerMove: (P) => {
										U && U(P);
									},
									onPointerUp: (P) => {
										c && c(P);
									},
									onPointerLeave: (P) => {
										B && B(P);
									},
									draggable: K,
								}),
							}),
						});
					});
				e.d(r, ['_', 0, I, 't', 0, j]);
			},
			'./components/src/components/Atoms/Price/Price.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					i = e.n(o),
					u = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const j = ({ theme: I }) =>
						(0, m.AH)({ color: I?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					y = (0, a.PA)((I) => {
						const b = (0, T.u)(),
							H = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, E.LU)(),
							},
							R = (0, A.v6)('price', b, H, I),
							{
								lineThrough: h,
								value: s,
								format: n,
								symbol: p,
								decimalPlaces: g,
								padDecimalPlaces: d,
								thousandsSeparator: f,
								decimalSeparator: v,
								symbolAfter: L,
								raw: N,
								className: x,
								internalClassName: S,
							} = R,
							{ overrideElement: Y, shouldRenderDefault: U } = (0, W._)('price', R);
						if (!U) return Y;
						let c;
						s && (c = n ? n(s) : l.G(s, { symbol: '', decimalPlaces: g, padDecimalPlaces: d, thousandsSeparator: f, decimalSeparator: v }));
						const B = (0, C.Z)(R, j);
						return c
							? N
								? (0, t.Y)(t.FK, { children: c })
								: (0, t.Y)(u._, {
										children: (0, t.FD)('span', {
											...B,
											className: i()('ss__price', { 'ss__price--strike': h }, x, S),
											children: [
												!n && p && !L ? (0, t.Y)('span', { className: 'ss__price__symbol', children: p }) : (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: 'ss__price__value', children: c }),
												!n && p && L ? (0, t.Y)('span', { className: 'ss__price__symbol', children: p }) : (0, t.Y)(t.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(r, ['g', 0, y]);
			},
			'./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					m = e.n(l),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					y = e('./components/src/components/Atoms/Price/Price.tsx');
				const I = ['price', 'msrp'],
					b = (s) => {
						if (!s) return !1;
						const n = s.split('.'),
							p = n[n.length - 1];
						return I.includes(p) ? (n.length === 1 ? !0 : n[n.length - 2] === 'core' && n[n.length - 3] === 'mappings') : !1;
					},
					F = (s, n) => {
						if (!s || !n) return;
						const p = (d) => n.split('.').reduce((f, v) => (f && typeof f == 'object' ? f[v] : void 0), d),
							g = p(s?.display) ?? p(s);
						if (g !== void 0) return g;
						if (!n.includes('.')) {
							const d = s?.display?.mappings?.core || s?.mappings?.core,
								f = s?.display?.attributes || s?.attributes;
							return d?.[n] ?? f?.[n];
						}
					},
					H = (s) =>
						s == null
							? ''
							: Array.isArray(s) || (0, i.Fq)(s)
							? Array.from(s)
									.map((n) => (typeof n == 'object' ? JSON.stringify(n) : String(n)))
									.join(', ')
							: typeof s == 'object'
							? JSON.stringify(s)
							: String(s),
					R = () => (0, a.AH)({}),
					h = (0, o.PA)((s) => {
						const n = (0, T.u)(),
							g = { treePath: (0, E.LU)(), name: s.field ? (0, j.P)(s.field.split('.').pop() || '') : void 0 },
							d = (0, A.v6)('productDetail', n, g, s),
							{ result: f, field: v, name: L, html: N, tag: x, className: S, internalClassName: Y } = d,
							{ overrideElement: U, shouldRenderDefault: c } = (0, W._)('productDetail', d);
						if (!c) return U;
						const B = (0, C.Z)(d, R),
							_ = F(f, v),
							O = H(_);
						if (!O) return null;
						const K = b(v) && typeof _ == 'number',
							D = L || v.split('.').pop(),
							$ = m()('ss__product-detail', D && `ss__product-detail--${D}`, x && `ss__product-detail--${x}`, S, Y);
						return (0, t.Y)(u._, {
							children: N
								? (0, t.Y)('div', { ...B, className: $, dangerouslySetInnerHTML: { __html: O } })
								: (0, t.Y)('div', { ...B, className: $, children: K ? (0, t.Y)(y.g, { value: _, treePath: d.treePath }) : O }),
						});
					});
				e.d(r, ['$I', 0, F, 'J_', 0, h, 'ZI', 0, H]);
			},
			'./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					m = e.n(l),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					y = e('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'),
					I = e('./components/src/components/Atoms/Price/Price.tsx'),
					b = e('./components/src/components/Atoms/Image/Image.tsx'),
					F = e('./components/src/components/Molecules/Rating/Rating.tsx');
				const H = () =>
						(0, a.AH)({
							width: '100%',
							borderCollapse: 'collapse',
							fontSize: '0.9em',
							'& tr': { borderBottom: '1px solid #eee' },
							'& tr:last-of-type': { borderBottom: 'none' },
							'& th, & td': { padding: '10px 0', textAlign: 'left', verticalAlign: 'top' },
							'& th': {
								width: '40%',
								paddingRight: '16px',
								fontWeight: 500,
								color: '#666',
								textTransform: 'uppercase',
								fontSize: '0.85em',
								letterSpacing: '0.02em',
							},
							'& td': {
								color: '#1a1a1a',
								'& .ss__rating': { justifyContent: 'flex-start' },
								'& .ss__image': { alignItems: 'flex-start', '& img': { maxHeight: '100px' } },
							},
						}),
					R = (0, o.PA)((h) => {
						const s = (0, T.u)(),
							p = { treePath: (0, E.LU)() },
							g = (0, C.v6)('productDetailTable', s, p, h),
							{ result: d, displayFields: f, disableStyles: v, className: L, internalClassName: N, treePath: x } = g,
							{ overrideElement: S, shouldRenderDefault: Y } = (0, j._)('productDetailTable', g);
						if (!Y) return S;
						const U = (0, W.Z)(g, H),
							c = (f || []).filter((_) => (0, y.ZI)((0, y.$I)(d, _.field)) !== '');
						if (c.length === 0) return null;
						const B = (_) => {
							const O = (0, y.$I)(d, _.field),
								K = { theme: g.theme, treePath: x, ...(0, A.s)({ disableStyles: v }) };
							switch (_.type) {
								case 'price': {
									const D = Number(O);
									if (!isNaN(D)) return (0, t.Y)(I.g, { value: D, ...K });
									break;
								}
								case 'rating': {
									const D = Number(O);
									if (!isNaN(D)) return (0, t.Y)(F.G, { value: D, ...K });
									break;
								}
								case 'image': {
									const D = Array.isArray(O) || (0, i.Fq)(O) ? Array.from(O)[0] : O;
									if (typeof D == 'string' && D) return (0, t.Y)(b._, { src: D, alt: _.label || _.field, ...K });
									break;
								}
								case 'html':
									return (0, t.Y)(y.J_, { result: d, field: _.field, html: !0, ...K });
							}
							return (0, t.Y)(y.J_, { result: d, field: _.field, ...K });
						};
						return (0, t.Y)(u._, {
							children: (0, t.Y)('table', {
								...U,
								className: m()('ss__product-detail-table', L, N),
								children: (0, t.Y)('tbody', {
									children: c.map((_, O) =>
										(0, t.FD)(
											'tr',
											{ children: [(0, t.Y)('th', { scope: 'row', children: _.label ?? _.field }), (0, t.Y)('td', { children: B(_) })] },
											`${_.field}-${O}`
										)
									),
								}),
							}),
						});
					});
				e.d(r, ['X', 0, R]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					o = e.n(m),
					i = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const y = () =>
						(0, l.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							'& .ss__rating__icons': { position: 'relative' },
							'& .ss__rating__stars': {
								width: '100%',
								display: 'inline-grid',
								gridTemplateColumns: '20% 20% 20% 20% 20%',
								'&.ss__rating__stars--full': { position: 'absolute', top: 0, left: 0 },
								'&.ss__rating__stars--empty': { position: 'relative' },
							},
							'& .ss__rating__stars__star': { overflow: 'hidden' },
							'& .ss__icon': { maxWidth: 'max-content' },
						}),
					I = (0, a.PA)((b) => {
						const F = (0, u.u)(),
							R = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, T.LU)() },
							h = (0, A.v6)('rating', F, R, b),
							{
								alwaysRender: s,
								count: n,
								text: p,
								disablePartialFill: g,
								emptyIcon: d,
								fullIcon: f,
								disableStyles: v,
								className: L,
								internalClassName: N,
								treePath: x,
							} = h,
							{ overrideElement: S, shouldRenderDefault: Y } = (0, j._)('rating', h);
						if (!Y) return S;
						const U = {
							fullIcon: { name: 'star--full', ...(0, E.s)({ disableStyles: v }), theme: h?.theme, treePath: x },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, E.s)({ disableStyles: v }), theme: h?.theme, treePath: x },
						};
						let c = h.value;
						isNaN(c) && (c = Number(c) || 0), c < 0 && (c = 0), c > 5 && (c = 5);
						const B = (0, C.Z)(h, y),
							_ = g ? Math.floor(c) : Math.ceil(c);
						return s || c || n
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										className: o()('ss__rating', L, N),
										...B,
										children: [
											(0, t.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, t.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, t.Y)(W.I, { ...U.emptyIcon, ...(typeof d == 'string' ? { icon: d } : d) }),
															})
														),
													}),
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(_)].map((O, K) => {
															let D = 100;
															return (
																K + 1 == _ && !g && c % 1 != 0 && (D = (c % 1 || 1) * 100),
																(0, t.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${D}%` },
																	children: (0, t.Y)(W.I, { ...U.fullIcon, ...(typeof f == 'string' ? { icon: f } : f) }),
																})
															);
														}),
													}),
												],
											}),
											n ? (0, t.FD)('span', { className: 'ss__rating__count', children: ['(', n, ')'] }) : (0, t.Y)(t.FK, {}),
											p ? (0, t.Y)('span', { className: 'ss__rating__text', children: p }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(r, ['G', 0, I]);
			},
			'./components/src/utilities/componentArgs.ts'(M, r, e) {
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
				e.d(r, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(M, r, e) {
				'use strict';
				e.d(r, { s: () => t });
				function t(a) {
					const l = {};
					return (
						Object.keys(a).map((m) => {
							a[m] !== void 0 && (l[m] = a[m]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(M, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					m = (o) => {
						const i = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								i.current && o.className?.includes('lang-') && !o.className?.includes(l) && window?.Prism?.highlightElement(i.current);
							}, [o.className, o.children, i]),
							(0, t.Y)('code', { ...o, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, m]);
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function r(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (M.exports = r);
			},
		},
	]);
})();
