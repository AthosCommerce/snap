(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8241],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(x, i, e) {
				'use strict';
				e.d(i, { P: () => s });
				const s = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(x, i, e) {
				'use strict';
				e.d(i, { G: () => n });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(a, o) {
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
					const l = n(a, t.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(t.decimalPlaces, '0'));
					let r = l.join(t.decimalSeparator);
					return t.symbolAfter ? (r = r + t.symbol) : (r = t.symbol + r), r;
				}
				function n(a, o) {
					const t = a.toString(),
						l = t.indexOf('.'),
						r = l == -1 ? t.length : 1 + l + (o || -1);
					return t.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(x, i, e) {
				'use strict';
				e.d(i, { p: () => s });
				function s(n) {
					if (typeof n != 'string') return n;
					let a = n.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(x, i, e) {
				'use strict';
				e.d(i, { x: () => s });
				function s(n, a, o) {
					if (typeof n != 'string' || n.length <= a) return n;
					const t = n.lastIndexOf(' ', a),
						l = t != -1 ? t : a - 1;
					return n.substr(0, l) + (o || '');
				}
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx'(x, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => b, __namedExportsOrder: () => I, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts');
				const r = `# RecommendationEmail

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
										children: [(0, s.Y)(n.oz, { options: { overrides: { code: o.Z } }, children: r }), (0, s.Y)(n.uY, { story: n.h1 })],
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
					v = [
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
					f = l.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } }),
					b = (d, { loaded: { controller: A } }) => (0, s.Y)(a.i, { ...d, controller: A });
				(b.loaders = [
					async () => (
						f.on('init', async ({ controller: d }, A) => {
							(d.store.results = v), d.store.results.forEach((P) => (P.mappings.core.url = 'javascript:void(0);')), await A();
						}),
						await f.init(),
						{ controller: f }
					),
				]),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
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
								...b.parameters?.docs?.source,
							},
						},
					});
				const I = ['Default'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(x, i, e) {
				'use strict';
				e.d(i, { Q: () => K });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					l = e.n(t),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					v = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					T = e('./components/src/types.ts'),
					L = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					S = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					R = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					j = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(m),
					p = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					_ = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const M = () =>
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
					K = (0, a.PA)((G) => {
						const Q = (0, f.u)(),
							J = (0, b.LU)(),
							k = {
								layout: T.V.grid,
								treePath: J,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							g = (0, A.v6)('result', Q, k, G),
							{
								result: C,
								hideBadge: w,
								hideTitle: F,
								hidePricing: H,
								hideImage: X,
								detailSlot: V,
								fallback: $,
								disableStyles: O,
								className: N,
								internalClassName: Y,
								layout: z,
								onClick: Z,
								controller: D,
								hideVariantSelections: oe,
								hideAddToCartButton: ae,
								onAddToCartClick: q,
								addToCartButtonText: le,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: ne,
								hideRating: ie,
								trackingRef: ce,
								treePath: B,
							} = g,
							{ overrideElement: de, shouldRenderDefault: me } = (0, E._)('result', {
								...g,
								customComponent: g.customComponent && g.customComponent !== 'Result' ? g.customComponent : void 0,
							});
						if (!me) return de;
						const h = C?.display?.mappings.core || C?.mappings?.core,
							[pe, ee] = (0, n.J0)(!1),
							U = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: O }),
									theme: g.theme,
									treePath: B,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: O }), theme: g.theme, treePath: B },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: C,
									...(0, d.s)({ disableStyles: O }),
									theme: g.theme,
									treePath: B,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: C,
									controller: D,
									...(0, d.s)({ disableStyles: O }),
									theme: g.theme,
									treePath: B,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: h?.name || '',
									src: h?.imageUrl || '',
									...(0, d.s)({ disableStyles: O, fallback: $ }),
									theme: g.theme,
									treePath: B,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: h?.rating || 0,
									count: Number(h?.ratingCount || 0),
									...(0, d.s)({ disableStyles: O }),
									theme: g.theme,
									treePath: B,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (W) => {
										ee(!0), q && q(W, C), D?.addToCart([C]), setTimeout(() => ee(!1), ne);
									},
									...(0, d.s)({ disableStyles: O }),
									theme: g.theme,
									treePath: B,
								},
							};
						let te = h?.name;
						g.truncateTitle && (te = y.x(h?.name || '', g.truncateTitle.limit, g.truncateTitle.append));
						const ue = (0, P.Z)(g, M),
							fe = { addToCartButtonText: { value: pe ? re : le } },
							ge = u()(fe, g.lang || {}),
							_e = (0, p.u)(ge, { result: C, controller: D }),
							se = !!(h?.msrp && h?.price && h?.price < h?.msrp),
							he = D?.store?.config?.asyncState?.product?.price ? C.state.priceFetched : !0;
						return h
							? (0, s.Y)(v._, {
									children: (0, s.FD)('article', {
										...ue,
										className: l()('ss__result', `ss__result--${z}`, { 'ss__result--sale': se }, N, Y),
										ref: ce,
										children: [
											!X &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: h.url,
														onClick: (W) => {
															Z && Z(W);
														},
														children: w
															? (0, s.Y)(r._, { ...U.image })
															: (0, s.Y)(S.Q, { ...U.overlayBadge, controller: D, children: (0, s.Y)(r._, { ...U.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!w && (0, s.Y)(L.W, { ...U.calloutBadge, controller: D }),
													!F &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: h.url,
																onClick: (W) => {
																	Z && Z(W);
																},
																dangerouslySetInnerHTML: { __html: te || '' },
															}),
														}),
													!ie && (0, s.Y)(R.G, { ...U.rating }),
													!H && he && h.price && h.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: se
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(c.g, { ...U.price, value: h.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(c.g, { ...U.price, value: h.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(c.g, { ...U.price, value: h.price }),
														  })
														: null,
													(0, I.Y)(V, { result: C, treePath: B }),
													!oe && C.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: C.variants?.selections.map((W) => (0, s.Y)(_.m, { ...U.variantSelection, type: W.type, selection: W })),
														  })
														: null,
													!ae &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(j.$, { ...U.button, ..._e.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(x, i, e) {
				'use strict';
				e.d(i, { O: () => T, i: () => S });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					t = e.n(o),
					l = e('../../node_modules/classnames/index.js'),
					r = e.n(l),
					c = e('./components/src/components/Molecules/Result/Result.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/hooks/useComponent.tsx');
				const T = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					L = () => (0, n.AH)({}),
					S = (0, a.PA)((R) => {
						const j = (0, d.u)(),
							m = (0, P.LU)(),
							u = { resultWidth: '240px', name: R.controller?.store?.profile?.tag?.toLowerCase(), treePath: m },
							p = (0, b.v6)('recommendationEmail', j, u, R),
							{ controller: E, results: _, resultWidth: M, treePath: K, disableStyles: G, internalClassName: Q, className: J } = p,
							k = p.resultComponent,
							g = (0, A.uk)(),
							C = typeof k == 'string',
							w = C ? k : '',
							F = g?.templates?.library.import.component.result || {},
							{ ComponentOverride: H, shouldWaitForNamedOverride: X } = (0, y.x)(F, C ? w : void 0),
							V = C ? H : k,
							$ = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, f.s)({ disableStyles: G }), theme: p?.theme, treePath: K },
							},
							O = (0, I.Z)(p, L),
							N = _ || E?.store?.results || [];
						return N.length > 0
							? (0, s.Y)('div', {
									className: r()('ss__recommendation-email', J, Q),
									...O,
									children: N.map((Y, z) =>
										(0, s.Y)(
											'div',
											{
												id: `ss-emailrec${z}`,
												className: r()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: M },
												children: V
													? (0, v.Y)(V, {
															controller: E,
															result: Y,
															email: !0,
															theme: C ? t()(p.theme || {}, { components: { result: { customComponent: k }, image: { lazy: !1 } } }) : p.theme,
															treePath: K,
													  })
													: X
													? null
													: (0, s.Y)(c.Q, { result: Y, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...$.result }),
											},
											z
										)
									),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/types.ts'(x, i, e) {
				'use strict';
				e.d(i, { Q: () => n, V: () => s });
				var s = ((a) => ((a.grid = 'grid'), (a.list = 'list'), a))(s || {}),
					n = ((a) => (
						(a.GRID = 'grid'),
						(a.PALETTE = 'palette'),
						(a.LIST = 'list'),
						(a.SLIDER = 'slider'),
						(a.HIERARCHY = 'hierarchy'),
						(a.TOGGLE = 'toggle'),
						a
					))(n || {});
			},
			'./components/src/utilities/componentArgs.ts'(x, i, e) {
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
			'./components/src/utilities/snapify.ts'(x, i, e) {
				'use strict';
				e.d(i, { p: () => L });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					I = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					A = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					T = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(u) {
						const p = u.id;
						if (y[p]) return y[p];
						const E = (y[p] = R({ client: T, controller: u }));
						return (
							E.on('afterStore', async ({ controller: _ }, M) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await M();
							}),
							E.init(),
							E
						);
					}
					static autocomplete(u) {
						const p = u.id;
						if (y[p]) return y[p];
						const E = (y[p] = j({ client: T, controller: u }));
						return (
							E.on('afterStore', async ({ controller: _ }, M) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await M();
							}),
							E.init(),
							E
						);
					}
					static search(u) {
						const p = u.id;
						if (y[p]) return y[p];
						const E = (y[p] = S({ client: T, controller: u }));
						return (
							E.on('afterStore', async ({ controller: _ }, M) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await M();
							}),
							E.init(),
							E
						);
					}
				}
				function S(m) {
					const u = new v.V(new b.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), f.X);
					return new n.Tp(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new r.U(m.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new I.E(),
						profiler: new d.U(),
						logger: new A.V(),
						tracker: new P.J(m.client.globals),
					});
				}
				function R(m) {
					const u = new v.V(new b.E(), f.X).detach(!0);
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
				function j(m) {
					const u = new v.V(new b.E(), f.X).detach();
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
				e.d(i, { Z: () => o });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					o = (t) => {
						const l = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								l.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(l.current);
							}, [t.className, t.children, l]),
							(0, s.Y)('code', { ...t, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(x, i, e) {
				'use strict';
				e.d(i, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
				function s(n, a) {
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
					var r = {};
					(n.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var v,
							f,
							b = t[this.toHex()];
						if (b) return b;
						if (c?.closest) {
							var I = this.toRgb(),
								d = 1 / 0,
								A = 'black';
							if (!r.length) for (var P in o) r[P] = new n(o[P]).toRgb();
							for (var y in o) {
								var T = ((v = I), (f = r[y]), Math.pow(v.r - f.r, 2) + Math.pow(v.g - f.g, 2) + Math.pow(v.b - f.b, 2));
								T < d && ((d = T), (A = y));
							}
							return A;
						}
					}),
						a.string.push([
							function (c) {
								var v = c.toLowerCase(),
									f = v === 'transparent' ? '#0000' : o[v];
								return f ? new n(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(x, i, e) {
				'use strict';
				e.d(i, { j: () => a });
				var s = Object.prototype.hasOwnProperty;
				function n(o, t, l) {
					for (l of o.keys()) if (a(l, t)) return l;
				}
				function a(o, t) {
					var l, r, c;
					if (o === t) return !0;
					if (o && t && (l = o.constructor) === t.constructor) {
						if (l === Date) return o.getTime() === t.getTime();
						if (l === RegExp) return o.toString() === t.toString();
						if (l === Array) {
							if ((r = o.length) === t.length) for (; r-- && a(o[r], t[r]); );
							return r === -1;
						}
						if (l === Set) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((c = r), (c && typeof c == 'object' && ((c = n(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (l === Map) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((c = r[0]), (c && typeof c == 'object' && ((c = n(t, c)), !c)) || !a(r[1], t.get(c)))) return !1;
							return !0;
						}
						if (l === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (l === DataView) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o[r] === t[r]; );
							return r === -1;
						}
						if (!l || typeof o == 'object') {
							r = 0;
							for (l in o) if ((s.call(o, l) && ++r && !s.call(t, l)) || !(l in t) || !a(o[l], t[l])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (x.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationEmail-RecommendationEmail-stories.c7b573b1.iframe.bundle.js.map
