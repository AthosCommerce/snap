(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8241],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(x, i, e) {
				'use strict';
				const s = (r) => r.replace(/_/g, '-').toLowerCase();
				e.d(i, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(x, i, e) {
				'use strict';
				e.d(i, { G: () => r });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function r(a, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(a, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(x, i, e) {
				'use strict';
				e.d(i, { Z: () => s });
				function s(a, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const l = r(a, t.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(t.decimalPlaces, '0'));
					let n = l.join(t.decimalSeparator);
					return t.symbolAfter ? (n = n + t.symbol) : (n = t.symbol + n), n;
				}
				function r(a, o) {
					const t = a.toString(),
						l = t.indexOf('.'),
						n = l == -1 ? t.length : 1 + l + (o || -1);
					return t.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(x, i, e) {
				'use strict';
				e.d(i, { p: () => s });
				function s(r) {
					if (typeof r != 'string') return r;
					let a = r.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(x, i, e) {
				'use strict';
				e.d(i, { x: () => s });
				function s(r, a, o) {
					if (typeof r != 'string' || r.length <= a) return r;
					const t = r.lastIndexOf(' ', a),
						l = t != -1 ? t : a - 1;
					return r.substr(0, l) + (o || '');
				}
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx'(x, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => y, __namedExportsOrder: () => I, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts');
				const n = `# RecommendationEmail

Renders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. 

This component is not intended for front-end display. It is an internal dependency for Email Recommendations.

## Sub-components
- Result (default)

## Usage

### controller
The \`controller\` prop specifies a reference to the RecommendationController.

\`\`\`tsx
<RecommendationEmail controller={controller} />
\`\`\`

### results
Alternatively if a \`controller\` prop is not provided, the \`results\` prop specifies a reference to the results store array to use instead.

\`\`\`tsx
<RecommendationEmail results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop allows you to specify a custom component to render each result. If not provided, the default \`Result\` component will be used.

\`\`\`tsx
import { CustomResult } from '../components/CustomResult';

<RecommendationEmail controller={controller} resultComponent={CustomResult} />
\`\`\`

### resultWidth
The \`resultWidth\` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.

Default value: '240px'

\`\`\`tsx
<RecommendationEmail controller={controller} resultWidth={'240px'} />
\`\`\`
`,
					c = {
						title: 'Templates/RecommendationEmail',
						component: a.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(r.oz, { options: { overrides: { code: o.Z } }, children: n }), (0, s.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, s.Y)(d, {})],
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
							resultWidth: {
								description: 'Width of each result card',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '240px' } },
								control: { type: 'text' },
							},
							...t.F,
						},
					},
					b = [
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
					g = l.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } }),
					y = (d, { loaded: { controller: A } }) => (0, s.Y)(a.i, { ...d, controller: A });
				(y.loaders = [
					async () => (
						g.on('init', async ({ controller: d }, A) => {
							(d.store.results = b), d.store.results.forEach((P) => (P.mappings.core.url = 'javascript:void(0);')), await A();
						}),
						await g.init(),
						{ controller: g }
					),
				]),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
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
								...y.parameters?.docs?.source,
							},
						},
					});
				const I = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(x, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					l = e.n(t),
					n = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					b = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					C = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					U = e('./components/src/types.ts'),
					S = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					w = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					D = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					R = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(m),
					p = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					_ = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const O = () =>
						(0, o.AH)({
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
					j = (0, a.PA)((G) => {
						const K = (0, g.u)(),
							F = (0, y.LU)(),
							L = {
								layout: U.V.grid,
								treePath: F,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							f = (0, A.v6)('result', K, L, G),
							{
								result: h,
								hideBadge: V,
								hideTitle: J,
								hidePricing: H,
								hideImage: $,
								detailSlot: N,
								fallback: X,
								disableStyles: M,
								className: Y,
								internalClassName: z,
								layout: Q,
								onClick: Z,
								controller: W,
								hideVariantSelections: le,
								hideAddToCartButton: ne,
								onAddToCartClick: q,
								addToCartButtonText: re,
								addToCartButtonSuccessText: ie,
								addToCartButtonSuccessTimeout: ce,
								hideRating: de,
								hideQuickviewButton: me,
								onQuickviewClick: ee,
								trackingRef: pe,
								treePath: k,
							} = f,
							{ overrideElement: ue, shouldRenderDefault: fe } = (0, E._)('result', {
								...f,
								customComponent: f.customComponent && f.customComponent !== 'Result' ? f.customComponent : void 0,
							});
						if (!fe) return ue;
						const v = h?.display?.mappings.core || h?.mappings?.core,
							[ge, te] = (0, r.J0)(!1),
							T = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: M }),
									theme: f.theme,
									treePath: k,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: M }), theme: f.theme, treePath: k },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: h,
									...(0, d.s)({ disableStyles: M }),
									theme: f.theme,
									treePath: k,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: h,
									controller: W,
									...(0, d.s)({ disableStyles: M }),
									theme: f.theme,
									treePath: k,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: v?.name || '',
									src: v?.imageUrl || '',
									...(0, d.s)({ disableStyles: M, fallback: X }),
									theme: f.theme,
									treePath: k,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: v?.rating || 0,
									count: Number(v?.ratingCount || 0),
									...(0, d.s)({ disableStyles: M }),
									theme: f.theme,
									treePath: k,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (B) => {
										ee && ee(B, h), W?.quickview(h);
									},
									...(0, d.s)({ disableStyles: M }),
									theme: f.theme,
									treePath: k,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (B) => {
										te(!0), q && q(B, h), W?.addToCart([h]), setTimeout(() => te(!1), ce);
									},
									...(0, d.s)({ disableStyles: M }),
									theme: f.theme,
									treePath: k,
								},
							};
						let se = v?.name;
						f.truncateTitle && (se = C.x(v?.name || '', f.truncateTitle.limit, f.truncateTitle.append));
						const _e = (0, P.Z)(f, O),
							he = { addToCartButtonText: { value: ge ? ie : re }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							ve = u()(he, f.lang || {}),
							oe = (0, p.u)(ve, { result: h, controller: W }, { activeBreakpoint: K?.activeBreakpoint }),
							ae = !!(v?.msrp && v?.price && v?.price < v?.msrp),
							be = W?.store?.config?.asyncState?.product?.price ? h.state.priceFetched : !0;
						return v
							? (0, s.Y)(b._, {
									children: (0, s.FD)('article', {
										..._e,
										className: l()('ss__result', `ss__result--${Q}`, { 'ss__result--sale': ae }, Y, z),
										ref: pe,
										children: [
											!$ &&
												(0, s.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, s.Y)('a', {
															href: v.url,
															onClick: (B) => {
																Z && Z(B);
															},
															children: V
																? (0, s.Y)(n._, { ...T.image })
																: (0, s.Y)(w.Q, { ...T.overlayBadge, controller: W, children: (0, s.Y)(n._, { ...T.image }) }),
														}),
														!me && W?.quickviewManager && (0, s.Y)(R.$, { ...T.quickviewButton, ...oe.quickviewButtonText.attributes }),
													],
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!V && (0, s.Y)(S.W, { ...T.calloutBadge, controller: W }),
													!J &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: v.url,
																onClick: (B) => {
																	Z && Z(B);
																},
																dangerouslySetInnerHTML: { __html: se || '' },
															}),
														}),
													!de && (0, s.Y)(D.G, { ...T.rating }),
													!H && be && v.price && v.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ae
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(c.g, { ...T.price, value: v.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(c.g, { ...T.price, value: v.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(c.g, { ...T.price, value: v.price }),
														  })
														: null,
													(0, I.Y)(N, { result: h, treePath: k }),
													!le && h.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: h.variants?.selections.map((B) => (0, s.Y)(_.m, { ...T.variantSelection, type: B.type, selection: B })),
														  })
														: null,
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(R.$, { ...T.button, ...oe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(i, ['Q', 0, j]);
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(x, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					t = e.n(o),
					l = e('../../node_modules/classnames/index.js'),
					n = e.n(l),
					c = e('./components/src/components/Molecules/Result/Result.tsx'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useComponent.tsx');
				const U = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					S = () => (0, r.AH)({}),
					w = (0, a.PA)((D) => {
						const R = (0, d.u)(),
							m = (0, P.LU)(),
							u = { resultWidth: '240px', name: D.controller?.store?.profile?.tag?.toLowerCase(), treePath: m },
							p = (0, y.v6)('recommendationEmail', R, u, D),
							{ controller: E, results: _, resultWidth: O, treePath: j, disableStyles: G, internalClassName: K, className: F } = p,
							L = p.resultComponent,
							f = (0, A.uk)(),
							h = typeof L == 'string',
							V = h ? L : '',
							J = f?.templates?.library.import.component.result || {},
							{ ComponentOverride: H, shouldWaitForNamedOverride: $ } = (0, C.x)(J, h ? V : void 0),
							N = h ? H : L,
							X = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, g.s)({ disableStyles: G }), theme: p?.theme, treePath: j },
							},
							M = (0, I.Z)(p, S),
							Y = _ || E?.store?.results || [];
						return Y.length > 0
							? (0, s.Y)('div', {
									className: n()('ss__recommendation-email', F, K),
									...M,
									children: Y.map((z, Q) =>
										(0, s.Y)(
											'div',
											{
												id: `ss-emailrec${Q}`,
												className: n()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: O },
												children: N
													? (0, b.Y)(N, {
															controller: E,
															result: z,
															email: !0,
															theme: h ? t()(p.theme || {}, { components: { result: { customComponent: L }, image: { lazy: !1 } } }) : p.theme,
															treePath: j,
													  })
													: $
													? null
													: (0, s.Y)(c.Q, { result: z, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...X.result }),
											},
											Q
										)
									),
							  })
							: (0, s.Y)(s.FK, {});
					});
				e.d(i, ['O', 0, U, 'i', 0, w]);
			},
			'./components/src/types.ts'(x, i, e) {
				'use strict';
				e.d(i, { Q: () => r, V: () => s });
				var s = ((a) => ((a.grid = 'grid'), (a.list = 'list'), a))(s || {}),
					r = ((a) => (
						(a.GRID = 'grid'),
						(a.PALETTE = 'palette'),
						(a.LIST = 'list'),
						(a.SLIDER = 'slider'),
						(a.HIERARCHY = 'hierarchy'),
						(a.TOGGLE = 'toggle'),
						a
					))(r || {});
			},
			'./components/src/utilities/componentArgs.ts'(x, i, e) {
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
				e.d(i, ['F', 0, s]);
			},
			'./components/src/utilities/snapify.ts'(x, i, e) {
				'use strict';
				e.d(i, { p: () => S });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					I = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					A = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const C = {},
					U = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(u) {
						const p = u.id;
						if (C[p]) return C[p];
						const E = (C[p] = D({ client: U, controller: u }));
						return (
							E.on('afterStore', async ({ controller: _ }, O) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await O();
							}),
							E.init(),
							E
						);
					}
					static autocomplete(u) {
						const p = u.id;
						if (C[p]) return C[p];
						const E = (C[p] = R({ client: U, controller: u }));
						return (
							E.on('afterStore', async ({ controller: _ }, O) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await O();
							}),
							E.init(),
							E
						);
					}
					static search(u) {
						const p = u.id;
						if (C[p]) return C[p];
						const E = (C[p] = w({ client: U, controller: u }));
						return (
							E.on('afterStore', async ({ controller: _ }, O) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await O();
							}),
							E.init(),
							E
						);
					}
				}
				function w(m) {
					const u = new b.V(new y.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), g.X);
					return new r.Tp(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new n.U(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new I.E(),
						profiler: new d.U(),
						logger: new A.V(),
						tracker: new P.J(m.client.globals),
					});
				}
				function D(m) {
					const u = new b.V(new y.E(), g.X).detach(!0);
					return new o.c(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new c.t(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new I.E(),
						profiler: new d.U(),
						logger: new A.V(),
						tracker: new P.J(m.client.globals),
					});
				}
				function R(m) {
					const u = new b.V(new y.E(), g.X).detach();
					return new a.Z(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new l.Y(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new I.E(),
						profiler: new d.U(),
						logger: new A.V(),
						tracker: new P.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					o = (t) => {
						const l = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								l.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(l.current);
							}, [t.className, t.children, l]),
							(0, s.Y)('code', { ...t, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, o]);
			},
			'../../node_modules/colord/plugins/names.mjs'(x, i, e) {
				'use strict';
				e.d(i, { A: () => s }), e.dn(s);
				function s(r, a) {
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
						t = {};
					for (var l in o) t[o[l]] = l;
					var n = {};
					(r.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var b,
							g,
							y = t[this.toHex()];
						if (y) return y;
						if (c?.closest) {
							var I = this.toRgb(),
								d = 1 / 0,
								A = 'black';
							if (!n.length) for (var P in o) n[P] = new r(o[P]).toRgb();
							for (var C in o) {
								var U = ((b = I), (g = n[C]), Math.pow(b.r - g.r, 2) + Math.pow(b.g - g.g, 2) + Math.pow(b.b - g.b, 2));
								U < d && ((d = U), (A = C));
							}
							return A;
						}
					}),
						a.string.push([
							function (c) {
								var b = c.toLowerCase(),
									g = b === 'transparent' ? '#0000' : o[b];
								return g ? new r(g).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(x, i, e) {
				'use strict';
				e.d(i, { j: () => a });
				var s = Object.prototype.hasOwnProperty;
				function r(o, t, l) {
					for (l of o.keys()) if (a(l, t)) return l;
				}
				function a(o, t) {
					var l, n, c;
					if (o === t) return !0;
					if (o && t && (l = o.constructor) === t.constructor) {
						if (l === Date) return o.getTime() === t.getTime();
						if (l === RegExp) return o.toString() === t.toString();
						if (l === Array) {
							if ((n = o.length) === t.length) for (; n-- && a(o[n], t[n]); );
							return n === -1;
						}
						if (l === Set) {
							if (o.size !== t.size) return !1;
							for (n of o) if (((c = n), (c && typeof c == 'object' && ((c = r(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (l === Map) {
							if (o.size !== t.size) return !1;
							for (n of o) if (((c = n[0]), (c && typeof c == 'object' && ((c = r(t, c)), !c)) || !a(n[1], t.get(c)))) return !1;
							return !0;
						}
						if (l === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (l === DataView) {
							if ((n = o.byteLength) === t.byteLength) for (; n-- && o.getInt8(n) === t.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((n = o.byteLength) === t.byteLength) for (; n-- && o[n] === t[n]; );
							return n === -1;
						}
						if (!l || typeof o == 'object') {
							n = 0;
							for (l in o) if ((s.call(o, l) && ++n && !s.call(t, l)) || !(l in t) || !a(o[l], t[l])) return !1;
							return Object.keys(t).length === n;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function i(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (x.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationEmail-RecommendationEmail-stories.defd863c.iframe.bundle.js.map
