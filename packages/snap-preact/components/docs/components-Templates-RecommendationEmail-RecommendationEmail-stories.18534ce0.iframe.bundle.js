(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8241],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(v, i, t) {
				'use strict';
				t.d(i, { P: () => l });
				const l = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(v, i, t) {
				'use strict';
				t.d(i, { G: () => n });
				var l = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(r, o) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, l.Z)(r, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(v, i, t) {
				'use strict';
				t.d(i, { Z: () => l });
				function l(r, o) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const s = n(r, e.decimalPlaces).split('.');
					(s[0] = s[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (s[1] = (s[1] || '').padEnd(e.decimalPlaces, '0'));
					let a = s.join(e.decimalSeparator);
					return e.symbolAfter ? (a = a + e.symbol) : (a = e.symbol + a), a;
				}
				function n(r, o) {
					const e = r.toString(),
						s = e.indexOf('.'),
						a = s == -1 ? e.length : 1 + s + (o || -1);
					return e.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(v, i, t) {
				'use strict';
				t.d(i, { p: () => l });
				function l(n) {
					if (typeof n != 'string') return n;
					let r = n.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(v, i, t) {
				'use strict';
				t.d(i, { x: () => l });
				function l(n, r, o) {
					if (typeof n != 'string' || n.length <= r) return n;
					const e = n.lastIndexOf(' ', r),
						s = e != -1 ? e : r - 1;
					return n.substr(0, s) + (o || '');
				}
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx'(v, i, t) {
				'use strict';
				t.r(i), t.d(i, { Default: () => _, __namedExportsOrder: () => C, default: () => c });
				var l = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = t('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					o = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts'),
					s = t('./components/src/utilities/snapify.ts');
				const a =
						"# RecommendationEmail\n\nRenders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. \n\nThis component is not intended for front-end display. It is an internal dependency for Email Recommendations.\n\n## Sub-components\n- Result (default)\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the RecommendationController.\n\n```tsx\n<RecommendationEmail controller={controller} />\n```\n\n### results\nAlternatively if a `controller` prop is not provided, the `results` prop specifies a reference to the results store array to use instead.\n\n```tsx\n<RecommendationEmail results={controller.store.results} />\n```\n\n### resultProps\nThe `resultProps` prop allows you to pass additional props to each result component. These props will be spread onto each rendered result, whether using the default `Result` component or a custom component specified by `resultComponent`.\n\n```tsx\n<RecommendationEmail controller={controller} resultProps={{ shortTitles: true }} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows you to specify a custom component to render each result. If not provided, the default `Result` component will be used.\n\nNote: `resultProps` and `{ email: true }` will be spread as props onto each result component that is rendered.\n\n```tsx\nimport { CustomResult } from '../components/CustomResult';\n\n<RecommendationEmail controller={controller} resultComponent={CustomResult} />\n```\n\n### resultWidth\nThe `resultWidth` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.\n\nDefault value: '240px'\n\n```tsx\n<RecommendationEmail controller={controller} resultWidth={'240px'} />\n```\n",
					c = {
						title: 'Templates/RecommendationEmail',
						component: r.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, l.FD)('div', {
										children: [(0, l.Y)(n.oz, { options: { overrides: { code: o.Z } }, children: a }), (0, l.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, l.Y)(h, {})],
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							results: {
								description: 'Results store reference, overrides controller.store.results',
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: {
								description: 'Custom component to render each result',
								type: { required: !1 },
								table: { type: { summary: 'ResultComponent' } },
								control: { type: 'none' },
							},
							resultProps: {
								description: 'Additional props to pass to each result component',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'Partial<ResultProps> | Record<string, any>' } },
								control: { type: 'object' },
							},
							resultWidth: {
								description: 'Width of each result card',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '240px' } },
								control: { type: 'text' },
							},
							...e.F,
						},
					},
					g = [
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955932557678',
							mappings: {
								core: {
									uid: '52955932557678',
									sku: 'VW1982-XBO-IN',
									available: !0,
									name: 'Apex Bottle',
									url: '/products/apex-bottle?variant=52955932557678',
									parentId: '14870399189358',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo.png?v=1762823848',
									price: 20,
									msrp: 25.5,
									rating: 5,
									ratingCount: 237,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo_600x600.png?v=1762823848',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo.png?v=1762823848',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo_600x600.png?v=1762823848',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'studio', 'accessories', 'bottles', 'best-sellers', 'all'],
								color: ['Indigo'],
								product_type_unigram: 'bottle',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo_600x600.png?v=1762823848',
								title: 'Apex Bottle',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955932492142',
							mappings: {
								core: {
									uid: '52955932492142',
									sku: 'VW1982-IBO-LA',
									available: !0,
									name: 'Revive Bottle',
									url: '/products/revive-bottle?variant=52955932492142',
									parentId: '14870399156590',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-bottle-lavender.png?v=1762823984',
									price: 20,
									msrp: 25.5,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-bottle-lavender_600x600.png?v=1762823984',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-bottle-lavender.png?v=1762823984',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-bottle-lavender_600x600.png?v=1762823984',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'studio', 'running', 'accessories', 'bottles', 'all'],
								color: ['Lavender'],
								product_type_unigram: 'bottle',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-bottle-lavender_600x600.png?v=1762823984',
								title: 'Revive Bottle',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '53297940300142',
							mappings: {
								core: {
									uid: '53297940300142',
									sku: 'VW1982-ABO-LA',
									available: !0,
									name: 'Align Bottle - Central Store Arrival',
									url: '/products/align-bottle-central-store-arrival?variant=53297940300142',
									parentId: '14959520219502',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender.png?v=1762813057',
									price: 24,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender.png?v=1762813057',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['frontpage', 'outdoor', 'studio', 'yoga', 'accessories', 'bottles', 'best-sellers', 'all'],
								color: ['Lavender'],
								product_type_unigram: 'bottle',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
								title: 'Align Bottle - Central Store Arrival',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955933737326',
							mappings: {
								core: {
									uid: '52955933737326',
									sku: 'VW1982-MSO-SA',
									available: !0,
									name: 'Momentum Sock',
									url: '/products/momentum-sock?variant=52955933737326',
									parentId: '14870399582574',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-sock-sandstone.png?v=1762810225',
									price: 24,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-sock-sandstone_600x600.png?v=1762810225',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-sock-sandstone.png?v=1762810225',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-sock-sandstone_600x600.png?v=1762810225',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'running', 'socks', 'all'],
								color: ['Sandstone'],
								product_type_unigram: 'sock',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-sock-sandstone_600x600.png?v=1762810225',
								title: 'Momentum Sock',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'black',
										value: 'Black',
										enabled: !0,
										location: 'left/left',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#000000', colorText: '#ffffff' },
									},
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
									{
										tag: 'black-callout',
										value: 'black',
										enabled: !0,
										location: 'callout/callout',
										priority: 1,
										component: 'BadgeRectangle',
										parameters: { color: '#ff0000', colorText: '#000000' },
									},
								],
							},
							id: '52955933278574',
							mappings: {
								core: {
									uid: '52955933278574',
									sku: 'VW1982-VSO-BL',
									available: !0,
									name: 'Elevation Trail Sock',
									url: '/products/elevation-trail-sock?variant=52955933278574',
									parentId: '14870399451502',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-trail-sock-black.png?v=1762811553',
									price: 24,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-trail-sock-black_600x600.png?v=1762811553',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-trail-sock-black.png?v=1762811553',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-trail-sock-black_600x600.png?v=1762811553',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'hiking', 'socks', 'all'],
								color: ['Black'],
								product_type_unigram: 'sock',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-trail-sock-black_600x600.png?v=1762811553',
								title: 'Elevation Trail Sock',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955932983662',
							mappings: {
								core: {
									uid: '52955932983662',
									sku: 'VW1982-ABO-LA',
									available: !0,
									name: 'Align Bottle',
									url: '/products/align-bottle?variant=52955932983662',
									parentId: '14870399353198',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender.png?v=1762813057',
									price: 24,
									msrp: 28,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender.png?v=1762813057',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'studio', 'yoga', 'accessories', 'bottles', 'best-sellers', 'all'],
								color: ['Lavender'],
								product_type_unigram: 'bottle',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
								title: 'Align Bottle',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'black',
										value: 'Black',
										enabled: !0,
										location: 'left/left',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#000000', colorText: '#ffffff' },
									},
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
									{
										tag: 'black-callout',
										value: 'black',
										enabled: !0,
										location: 'callout/callout',
										priority: 1,
										component: 'BadgeRectangle',
										parameters: { color: '#ff0000', colorText: '#000000' },
									},
								],
							},
							id: '52955932623214',
							mappings: {
								core: {
									uid: '52955932623214',
									sku: 'VW1982-XHE-BL',
									available: !0,
									name: 'Apex Headband',
									url: '/products/apex-headband?variant=52955932623214',
									parentId: '14870399222126',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black.png?v=1762823561',
									price: 24,
									rating: 4.5,
									ratingCount: 28,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black_600x600.png?v=1762823561',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black.png?v=1762823561',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black_600x600.png?v=1762823561',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'hiking', 'running', 'workout', 'accessories', 'best-sellers', 'all'],
								color: ['Black'],
								product_type_unigram: 'headband',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black_600x600.png?v=1762823561',
								title: 'Apex Headband',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955932066158',
							mappings: {
								core: {
									uid: '52955932066158',
									sku: 'VW1982-ISO-SA',
									available: !0,
									name: 'Revive Sock',
									url: '/products/revive-sock?variant=52955932066158',
									parentId: '14870399058286',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-sock-sandstone.png?v=1762824828',
									price: 24,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-sock-sandstone_600x600.png?v=1762824828',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-sock-sandstone.png?v=1762824828',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-sock-sandstone_600x600.png?v=1762824828',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['studio', 'hiking', 'running', 'socks', 'all'],
								color: ['Sandstone'],
								product_type_unigram: 'sock',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-sock-sandstone_600x600.png?v=1762824828',
								title: 'Revive Sock',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955931509102',
							mappings: {
								core: {
									uid: '52955931509102',
									sku: 'VW1982-RSO-WH',
									available: !0,
									name: 'Stride Sock',
									url: '/products/stride-sock?variant=52955931509102',
									parentId: '14870398861678',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-sock-white.png?v=1762800072',
									price: 24,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-sock-white_600x600.png?v=1762800072',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-sock-white.png?v=1762800072',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-sock-white_600x600.png?v=1762800072',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'hiking', 'running', 'socks', 'all'],
								color: ['White'],
								product_type_unigram: 'sock',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-sock-white_600x600.png?v=1762800072',
								title: 'Stride Sock',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '53266048254318',
							mappings: {
								core: {
									uid: '53266048254318',
									available: !0,
									name: 'Yoga Bundle (combined)',
									url: '/products/combined-listing-test?variant=53266048254318',
									parentId: '14947788128622',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Jogger_-_Indigo_3a782b8b-63e0-46ab-9d36-362adb3cd157.png?v=1747685137',
									price: 24,
									rating: 3,
									ratingCount: 182,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender.png?v=1762813057',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['his', 'accessories', 'all'],
								product_type_unigram: 'bundle',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_600x600.png?v=1762813057',
								title: 'Yoga Bundle (combined)',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955932361070',
							mappings: {
								core: {
									uid: '52955932361070',
									sku: 'VW1982-IBE-AS',
									available: !0,
									name: 'Revive Beanie',
									url: '/products/revive-beanie?variant=52955932361070',
									parentId: '14870399123822',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-beanie-ash-grey.png?v=1762824459',
									price: 29,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-beanie-ash-grey_600x600.png?v=1762824459',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-beanie-ash-grey.png?v=1762824459',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-beanie-ash-grey_600x600.png?v=1762824459',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'hiking', 'running', 'accessories', 'hats', 'all'],
								color: ['Ash Grey'],
								product_type_unigram: 'beanie',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/revive-beanie-ash-grey_600x600.png?v=1762824459',
								title: 'Revive Beanie',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955931902318',
							mappings: {
								core: {
									uid: '52955931902318',
									sku: 'VW1982-RRG-LA',
									available: !0,
									name: 'Stride Run Gloves',
									url: '/products/stride-run-gloves?variant=52955931902318',
									parentId: '14870398992750',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-run-gloves-lavender.png?v=1762825177',
									price: 34,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-run-gloves-lavender_600x600.png?v=1762825177',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-run-gloves-lavender.png?v=1762825177',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-run-gloves-lavender_600x600.png?v=1762825177',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'running', 'accessories', 'gloves', 'all'],
								color: ['Lavender'],
								product_type_unigram: 'gloves',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-run-gloves-lavender_600x600.png?v=1762825177',
								title: 'Stride Run Gloves',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955933507950',
							mappings: {
								core: {
									uid: '52955933507950',
									sku: 'VW1982-MYM-IN',
									available: !0,
									name: 'Momentum Yoga Mat',
									url: '/products/momentum-yoga-mat?variant=52955933507950',
									parentId: '14870399517038',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-yoga-mat-indigo.png?v=1762810596',
									price: 39,
									msrp: 44,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-yoga-mat-indigo_600x600.png?v=1762810596',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-yoga-mat-indigo.png?v=1762810596',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-yoga-mat-indigo_600x600.png?v=1762810596',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['studio', 'yoga', 'accessories', 'yoga-mats', 'all'],
								color: ['Indigo'],
								product_type_unigram: 'mat',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/momentum-yoga-mat-indigo_600x600.png?v=1762810596',
								title: 'Momentum Yoga Mat',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955933049198',
							mappings: {
								core: {
									uid: '52955933049198',
									sku: 'VW1982-VCA-OL',
									available: !0,
									name: 'Elevation Cap',
									url: '/products/elevation-cap?variant=52955933049198',
									parentId: '14870399385966',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-cap-olive.png?v=1762812661',
									price: 39,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-cap-olive_600x600.png?v=1762812661',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-cap-olive.png?v=1762812661',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-cap-olive_600x600.png?v=1762812661',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['new-arrivals', 'outdoor', 'hiking', 'accessories', 'hats', 'best-sellers', 'all'],
								color: ['Olive'],
								product_type_unigram: 'cap',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-cap-olive_600x600.png?v=1762812661',
								title: 'Elevation Cap',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955932787054',
							mappings: {
								core: {
									uid: '52955932787054',
									sku: 'VW1982-AYM-LA',
									available: !0,
									name: 'Align Yoga Mat',
									url: '/products/align-yoga-mat?variant=52955932787054',
									parentId: '14870399287662',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender.png?v=1762822746',
									price: 39,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender_600x600.png?v=1762822746',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender.png?v=1762822746',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender_600x600.png?v=1762822746',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['studio', 'yoga', 'accessories', 'yoga-mats', 'best-sellers', 'all'],
								color: ['Lavender'],
								product_type_unigram: 'mat',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender_600x600.png?v=1762822746',
								title: 'Align Yoga Mat',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955931640174',
							mappings: {
								core: {
									uid: '52955931640174',
									sku: 'VW1982-RCA-AS',
									available: !0,
									name: 'Stride Cap',
									url: '/products/stride-cap?variant=52955931640174',
									parentId: '14870398894446',
									parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-cap-grey.png?v=1762800059',
									price: 39,
									rating: 5,
									ratingCount: 54,
									imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-cap-grey_600x600.png?v=1762800059',
									secureImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-cap-grey.png?v=1762800059',
									thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-cap-grey_600x600.png?v=1762800059',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['outdoor', 'running', 'accessories', 'hats', 'all'],
								color: ['Ash Grey'],
								product_type_unigram: 'cap',
								ss_image: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/stride-cap-grey_600x600.png?v=1762800059',
								title: 'Stride Cap',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52955933376878',
							mappings: {
								core: {
									uid: '52955933376878',
									sku: 'VW1982-VGL-SA',
									available: !0,
									name: 'Elevation Gloves',
									url: '/products/elevation-gloves?variant=52955933376878',
									parentId: '14870399484270',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-gloves-sandstone_3631880e-e566-4ef9-8dcc-d13df666ad8c.png?v=1762811122',
									price: 44,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-gloves-sandstone_3631880e-e566-4ef9-8dcc-d13df666ad8c_600x600.png?v=1762811122',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-gloves-sandstone_3631880e-e566-4ef9-8dcc-d13df666ad8c.png?v=1762811122',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-gloves-sandstone_3631880e-e566-4ef9-8dcc-d13df666ad8c_600x600.png?v=1762811122',
									brand: 'VersaFitCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['new-arrivals', 'outdoor', 'hiking', 'accessories', 'gloves', 'all'],
								color: ['Sandstone'],
								product_type_unigram: 'gloves',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/elevation-gloves-sandstone_3631880e-e566-4ef9-8dcc-d13df666ad8c_600x600.png?v=1762811122',
								title: 'Elevation Gloves',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'black',
										value: 'Black',
										enabled: !0,
										location: 'left/left',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#000000', colorText: '#ffffff' },
									},
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
									{
										tag: 'black-callout',
										value: 'black',
										enabled: !0,
										location: 'callout/callout',
										priority: 1,
										component: 'BadgeRectangle',
										parameters: { color: '#ff0000', colorText: '#000000' },
									},
								],
							},
							id: '52079547777390',
							mappings: {
								core: {
									uid: '52079547777390',
									sku: 'VW1982-CQZ-BL',
									available: !0,
									name: 'CoreMotion Quarter-Zip',
									url: '/products/coremotion-quarter-zip?variant=52079547777390',
									parentId: '14725172396398',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_CoreMotion_Quarter-Zip_-_Black_50309846-9427-409b-b945-eb4db81c0c19.png?v=1747685222',
									price: 45,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_CoreMotion_Quarter-Zip_-_Black_50309846-9427-409b-b945-eb4db81c0c19_600x600.png?v=1747685222',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_CoreMotion_Quarter-Zip_-_Black_50309846-9427-409b-b945-eb4db81c0c19.png?v=1747685222',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_CoreMotion_Quarter-Zip_-_Black_50309846-9427-409b-b945-eb4db81c0c19_600x600.png?v=1747685222',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['his', 'theirs', 'workout', 'tops', 'sweaters', 'best-sellers', 'all'],
								color: ['Black'],
								product_type_unigram: 'quarterzip',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_CoreMotion_Quarter-Zip_-_Black_50309846-9427-409b-b945-eb4db81c0c19_600x600.png?v=1747685222',
								title: 'CoreMotion Quarter-Zip',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52079545057646',
							mappings: {
								core: {
									uid: '52079545057646',
									sku: 'VW1982-AQZ-AS',
									available: !0,
									name: 'Align Quarter-Zip',
									url: '/products/align-quarter-zip?variant=52079545057646',
									parentId: '14725170823534',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78.png?v=1747685144',
									price: 45,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78_600x600.png?v=1747685144',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78.png?v=1747685144',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78_600x600.png?v=1747685144',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['hers', 'theirs', 'winter-warmth', 'tops', 'sweaters', 'best-sellers', 'all'],
								color: ['Ash Grey'],
								product_type_unigram: 'quarterzip',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78_600x600.png?v=1747685144',
								title: 'Align Quarter-Zip',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52079573696878',
							mappings: {
								core: {
									uid: '52079573696878',
									sku: 'VW1982-ULE-CH',
									available: !0,
									name: 'Studio Legging',
									url: '/products/studio-legging?variant=52079573696878',
									parentId: '14725184192878',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Legging_-_Charcoal_86731d52-9ef2-4663-802a-8935249c5a7c.png?v=1747685734',
									price: 46,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Legging_-_Charcoal_86731d52-9ef2-4663-802a-8935249c5a7c_600x600.png?v=1747685734',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Legging_-_Charcoal_86731d52-9ef2-4663-802a-8935249c5a7c.png?v=1747685734',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Legging_-_Charcoal_86731d52-9ef2-4663-802a-8935249c5a7c_600x600.png?v=1747685734',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['hers', 'winter-warmth', 'studio', 'yoga', 'pants-bottoms', 'leggings', 'all'],
								color: ['Charcoal'],
								product_type_unigram: 'legging',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Legging_-_Charcoal_86731d52-9ef2-4663-802a-8935249c5a7c_600x600.png?v=1747685734',
								title: 'Studio Legging',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52079573401966',
							mappings: {
								core: {
									uid: '52079573401966',
									sku: 'VW1982-UJO-CR',
									available: !0,
									name: 'Studio Jogger',
									url: '/products/studio-jogger?variant=52079573401966',
									parentId: '14725184029038',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Jogger_-_Crimson_7c98af5d-51fe-4d94-9ce3-2f7cd9bea404.png?v=1747685727',
									price: 46,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Jogger_-_Crimson_7c98af5d-51fe-4d94-9ce3-2f7cd9bea404_600x600.png?v=1747685727',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Jogger_-_Crimson_7c98af5d-51fe-4d94-9ce3-2f7cd9bea404.png?v=1747685727',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Jogger_-_Crimson_7c98af5d-51fe-4d94-9ce3-2f7cd9bea404_600x600.png?v=1747685727',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['hers', 'theirs', 'winter-warmth', 'studio', 'pants-bottoms', 'joggers', 'all'],
								color: ['Crimson'],
								product_type_unigram: 'jogger',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Jogger_-_Crimson_7c98af5d-51fe-4d94-9ce3-2f7cd9bea404_600x600.png?v=1747685727',
								title: 'Studio Jogger',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52079545549166',
							mappings: {
								core: {
									uid: '52079545549166',
									sku: 'VW1982-ATE-SL',
									available: !0,
									name: 'Align Tee',
									url: '/products/align-tee?variant=52079545549166',
									parentId: '14725171151214',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05.png?v=1747685157',
									price: 46,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05_600x600.png?v=1747685157',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05.png?v=1747685157',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05_600x600.png?v=1747685157',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['hers', 'theirs', 'summer-sun', 'studio', 'yoga', 'tops', 'tees', 'best-sellers', 'all'],
								color: ['Slate'],
								product_type_unigram: 'tee',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05_600x600.png?v=1747685157',
								title: 'Align Tee',
							},
							custom: {},
							quantity: 1,
						},
						{
							badges: {
								all: [
									{
										tag: 'all-products',
										value: 'All',
										enabled: !0,
										location: 'right/right',
										priority: 1,
										component: 'BadgePill',
										parameters: { color: '#ffffff', colorText: '#ff0000' },
									},
								],
							},
							id: '52079545287022',
							mappings: {
								core: {
									uid: '52079545287022',
									sku: 'VW1982-ATA-WH',
									available: !0,
									name: 'Align Tank',
									url: '/products/align-tank?variant=52079545287022',
									parentId: '14725170987374',
									parentImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d.png?v=1747685150',
									price: 46,
									imageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d_600x600.png?v=1747685150',
									secureImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d.png?v=1747685150',
									thumbnailImageUrl:
										'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d_600x600.png?v=1747685150',
									brand: 'VersaWearCo',
									caption: 'Captions!',
								},
							},
							attributes: {
								collection_handle: ['hers', 'summer-sun', 'studio', 'yoga', 'tops', 'tanks', 'best-sellers', 'all'],
								color: ['White'],
								product_type_unigram: 'tank',
								ss_image:
									'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d_600x600.png?v=1747685150',
								title: 'Align Tank',
							},
							custom: {},
							quantity: 1,
						},
					],
					m = s.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } }),
					_ = (h, { loaded: { controller: x } }) => (0, l.Y)(r.i, { ...h, controller: x });
				(_.loaders = [
					async () => (
						m.on('init', async ({ controller: h }, x) => {
							(h.store.results = g), h.store.results.forEach((A) => (A.mappings.core.url = 'javascript:void(0);')), await x();
						}),
						await m.init(),
						{ controller: m }
					),
				]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationEmailProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationEmail {...props} controller={controller} />;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const C = ['Default'];
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(v, i, t) {
				'use strict';
				t.d(i, { O: () => h, i: () => A });
				var l = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					o = t('../../node_modules/classnames/index.js'),
					e = t.n(o),
					s = t('./components/src/components/Molecules/Result/Result.tsx'),
					a = t('./components/src/utilities/cloneWithProps.tsx'),
					c = t('./components/src/utilities/defined.ts'),
					g = t('./components/src/utilities/mergeProps.ts'),
					m = t('./components/src/utilities/mergeStyles.ts'),
					_ = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = t('./components/src/providers/treePath.tsx');
				const h = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					x = () => (0, n.AH)({}),
					A = (0, r.PA)((b) => {
						const k = (0, _.u)(),
							P = (0, C.LU)(),
							W = { resultWidth: '240px', name: b.controller?.store?.profile?.tag?.toLowerCase(), treePath: P },
							I = (0, g.v6)('recommendationEmail', k, W, b),
							{
								controller: U,
								results: d,
								resultComponent: p,
								resultProps: f,
								resultWidth: y,
								treePath: u,
								disableStyles: E,
								internalClassName: B,
								className: w,
							} = I,
							O = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, c.s)({ disableStyles: E }), theme: I?.theme, treePath: u },
							},
							S = (0, m.Z)(I, x),
							T = d || U?.store?.results || [];
						return T.length > 0
							? (0, l.Y)('div', {
									className: e()('ss__recommendation-email', w, B),
									...S,
									children: T.map((M, R) =>
										(0, l.Y)(
											'div',
											{
												id: `ss-emailrec${R}`,
												className: e()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: y },
												children: p
													? (0, a.Y)(p, { controller: U, result: M, ...f, email: !0, treePath: u })
													: (0, l.Y)(s.Q, { result: M, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...O.result, ...f }),
											},
											R
										)
									),
							  })
							: (0, l.Y)(l.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(v, i, t) {
				'use strict';
				t.d(i, { F: () => l });
				const l = {
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
			'./components/src/utilities/snapify.ts'(v, i, t) {
				'use strict';
				t.d(i, { p: () => P });
				var l = t('../../node_modules/mobx/dist/mobx.esm.js'),
					n = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					s = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					m = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					C = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					A = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, l.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const b = {},
					k = { globals: { siteId: 'atkzs2' } };
				class P {
					static recommendation(p) {
						const f = p.id;
						if (b[f]) return b[f];
						const y = (b[f] = I({ client: k, controller: p }));
						return (
							y.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							y.init(),
							y
						);
					}
					static autocomplete(p) {
						const f = p.id;
						if (b[f]) return b[f];
						const y = (b[f] = U({ client: k, controller: p }));
						return (
							y.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							y.init(),
							y
						);
					}
					static search(p) {
						const f = p.id;
						if (b[f]) return b[f];
						const y = (b[f] = W({ client: k, controller: p }));
						return (
							y.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							y.init(),
							y
						);
					}
				}
				function W(d) {
					const p = new g.V(new _.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), m.X);
					return new n.Tp(d.controller, {
						client: new e.K(d.client.globals, d.client.config),
						store: new a.U(d.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new C.E(),
						profiler: new h.U(),
						logger: new x.V(),
						tracker: new A.J(d.client.globals),
					});
				}
				function I(d) {
					const p = new g.V(new _.E(), m.X).detach(!0);
					return new o.c(d.controller, {
						client: new e.K(d.client.globals, d.client.config),
						store: new c.t(d.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new C.E(),
						profiler: new h.U(),
						logger: new x.V(),
						tracker: new A.J(d.client.globals),
					});
				}
				function U(d) {
					const p = new g.V(new _.E(), m.X).detach();
					return new r.Z(d.controller, {
						client: new e.K(d.client.globals, d.client.config),
						store: new s.Y(d.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new C.E(),
						profiler: new h.U(),
						logger: new x.V(),
						tracker: new A.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, i, t) {
				'use strict';
				t.d(i, { Z: () => o });
				var l = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					o = (e) => {
						const s = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								s.current && e.className?.includes('lang-') && !e.className?.includes(r) && window?.Prism?.highlightElement(s.current);
							}, [e.className, e.children, s]),
							(0, l.Y)('code', { ...e, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(v, i, t) {
				'use strict';
				t.d(i, { A: () => l }), Object.defineProperty(l, 'name', { value: 'default', configurable: !0 });
				function l(n, r) {
					var o = {
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
					for (var s in o) e[o[s]] = s;
					var a = {};
					(n.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var g,
							m,
							_ = e[this.toHex()];
						if (_) return _;
						if (c?.closest) {
							var C = this.toRgb(),
								h = 1 / 0,
								x = 'black';
							if (!a.length) for (var A in o) a[A] = new n(o[A]).toRgb();
							for (var b in o) {
								var k = ((g = C), (m = a[b]), Math.pow(g.r - m.r, 2) + Math.pow(g.g - m.g, 2) + Math.pow(g.b - m.b, 2));
								k < h && ((h = k), (x = b));
							}
							return x;
						}
					}),
						r.string.push([
							function (c) {
								var g = c.toLowerCase(),
									m = g === 'transparent' ? '#0000' : o[g];
								return m ? new n(m).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(v, i, t) {
				'use strict';
				t.d(i, { j: () => r });
				var l = Object.prototype.hasOwnProperty;
				function n(o, e, s) {
					for (s of o.keys()) if (r(s, e)) return s;
				}
				function r(o, e) {
					var s, a, c;
					if (o === e) return !0;
					if (o && e && (s = o.constructor) === e.constructor) {
						if (s === Date) return o.getTime() === e.getTime();
						if (s === RegExp) return o.toString() === e.toString();
						if (s === Array) {
							if ((a = o.length) === e.length) for (; a-- && r(o[a], e[a]); );
							return a === -1;
						}
						if (s === Set) {
							if (o.size !== e.size) return !1;
							for (a of o) if (((c = a), (c && typeof c == 'object' && ((c = n(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (s === Map) {
							if (o.size !== e.size) return !1;
							for (a of o) if (((c = a[0]), (c && typeof c == 'object' && ((c = n(e, c)), !c)) || !r(a[1], e.get(c)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (o = new Uint8Array(o)), (e = new Uint8Array(e));
						else if (s === DataView) {
							if ((a = o.byteLength) === e.byteLength) for (; a-- && o.getInt8(a) === e.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((a = o.byteLength) === e.byteLength) for (; a-- && o[a] === e[a]; );
							return a === -1;
						}
						if (!s || typeof o == 'object') {
							a = 0;
							for (s in o) if ((l.call(o, s) && ++a && !l.call(e, s)) || !(s in e) || !r(o[s], e[s])) return !1;
							return Object.keys(e).length === a;
						}
					}
					return o !== o && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function i(t) {
					var l = new Error("Cannot find module '" + t + "'");
					throw ((l.code = 'MODULE_NOT_FOUND'), l);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (v.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationEmail-RecommendationEmail-stories.18534ce0.iframe.bundle.js.map
