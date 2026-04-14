(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8241],
		{
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx'(b, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => g, __namedExportsOrder: () => x, default: () => r });
				var l = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/utilities/snapify.ts');
				const a =
						"# RecommendationEmail\n\nRenders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. \n\nThis component is not intended for front-end display. It is an internal dependency for Email Recommendations.\n\n## Sub-components\n- Result (default)\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the RecommendationController.\n\n```jsx\n<RecommendationEmail controller={controller} />\n```\n\n### results\nAlternatively if a `controller` prop is not provided, the `results` prop specifies a reference to the results store array to use instead.\n\n```jsx\n<RecommendationEmail results={controller.store.results} />\n```\n\n### resultProps\nThe `resultProps` prop allows you to pass additional props to each result component. These props will be spread onto each rendered result, whether using the default `Result` component or a custom component specified by `resultComponent`.\n\n```jsx\n<RecommendationEmail controller={controller} resultProps={{ shortTitles: true }} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows you to specify a custom component to render each result. If not provided, the default `Result` component will be used.\n\nNote: `resultProps` and `{ email: true }` will be spread as props onto each result component that is rendered.\n\n```jsx\nimport { CustomResult } from '../components/CustomResult';\n\n<RecommendationEmail controller={controller} resultComponent={CustomResult} />\n```\n\n### resultWidth\nThe `resultWidth` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.\n\nDefault value: '240px'\n\n```jsx\n<RecommendationEmail controller={controller} resultWidth={'240px'} />\n```\n",
					r = {
						title: 'Templates/RecommendationEmail',
						component: d.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, l.FD)('div', {
										children: [(0, l.Y)(u.oz, { options: { overrides: { code: o.Z } }, children: a }), (0, l.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, l.Y)(_, {})],
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
							...t.F,
						},
					},
					A = [
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
					v = s.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } }),
					g = (_, { loaded: { controller: y } }) => (0, l.Y)(d.i, { ..._, controller: y });
				(g.loaders = [
					async () => (
						v.on('init', async ({ controller: _ }, y) => {
							(_.store.results = A), _.store.results.forEach((C) => (C.mappings.core.url = 'javascript:void(0);')), await y();
						}),
						await v.init(),
						{ controller: v }
					),
				]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(b, c, e) {
				'use strict';
				e.d(c, { O: () => _, i: () => C });
				var l = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					s = e('./components/src/components/Molecules/Result/Result.tsx'),
					a = e('./components/src/utilities/cloneWithProps.tsx'),
					r = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx');
				const _ = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					y = () => (0, u.AH)({}),
					C = (0, d.PA)((h) => {
						const U = (0, g.u)(),
							W = (0, x.LU)(),
							k = { resultWidth: '240px', name: h.controller?.store?.profile?.tag?.toLowerCase(), treePath: W },
							E = (0, A.v6)('recommendationEmail', U, k, h),
							{
								controller: P,
								results: n,
								resultComponent: i,
								resultProps: p,
								resultWidth: f,
								treePath: m,
								disableStyles: I,
								internalClassName: R,
								className: O,
							} = E,
							S = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, r.s)({ disableStyles: I }), theme: E?.theme, treePath: m },
							},
							D = (0, v.Z)(E, y),
							T = n || P?.store?.results || [];
						return T.length > 0
							? (0, l.Y)('div', {
									className: t()('ss__recommendation-email', O, R),
									...D,
									children: T.map((M, B) =>
										(0, l.Y)(
											'div',
											{
												id: `ss-emailrec${B}`,
												className: t()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: f },
												children: i
													? (0, a.Y)(i, { controller: P, result: M, ...p, email: !0, treePath: m })
													: (0, l.Y)(s.Q, { result: M, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...S.result, ...p }),
											},
											B
										)
									),
							  })
							: (0, l.Y)(l.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(b, c, e) {
				'use strict';
				e.d(c, { F: () => l });
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
			'./components/src/utilities/snapify.ts'(b, c, e) {
				'use strict';
				e.d(c, { p: () => W });
				var l = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, l.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					U = { globals: { siteId: 'atkzs2' } };
				class W {
					static recommendation(i) {
						const p = i.id;
						if (h[p]) return h[p];
						const f = (h[p] = E({ client: U, controller: i }));
						return (
							f.on('afterStore', async ({ controller: m }, I) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await I();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(i) {
						const p = i.id;
						if (h[p]) return h[p];
						const f = (h[p] = P({ client: U, controller: i }));
						return (
							f.on('afterStore', async ({ controller: m }, I) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await I();
							}),
							f.init(),
							f
						);
					}
					static search(i) {
						const p = i.id;
						if (h[p]) return h[p];
						const f = (h[p] = k({ client: U, controller: i }));
						return (
							f.on('afterStore', async ({ controller: m }, I) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await I();
							}),
							f.init(),
							f
						);
					}
				}
				function k(n) {
					const i = new A.V(new g.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), v.X);
					return new u.Tp(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new a.U(n.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new C.J(n.client.globals),
					});
				}
				function E(n) {
					const i = new A.V(new g.E(), v.X).detach(!0);
					return new o.c(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new r.t(n.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new C.J(n.client.globals),
					});
				}
				function P(n) {
					const i = new A.V(new g.E(), v.X).detach();
					return new d.Z(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new s.Y(n.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new x.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new C.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, c, e) {
				'use strict';
				e.d(c, { Z: () => o });
				var l = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 'prism-block',
					o = (t) => {
						const s = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								s.current && t.className?.includes('lang-') && !t.className?.includes(d) && window?.Prism?.highlightElement(s.current);
							}, [t.className, t.children, s]),
							(0, l.Y)('code', { ...t, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(b, c, e) {
				'use strict';
				e.d(c, { j: () => d });
				var l = Object.prototype.hasOwnProperty;
				function u(o, t, s) {
					for (s of o.keys()) if (d(s, t)) return s;
				}
				function d(o, t) {
					var s, a, r;
					if (o === t) return !0;
					if (o && t && (s = o.constructor) === t.constructor) {
						if (s === Date) return o.getTime() === t.getTime();
						if (s === RegExp) return o.toString() === t.toString();
						if (s === Array) {
							if ((a = o.length) === t.length) for (; a-- && d(o[a], t[a]); );
							return a === -1;
						}
						if (s === Set) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((r = a), (r && typeof r == 'object' && ((r = u(t, r)), !r)) || !t.has(r))) return !1;
							return !0;
						}
						if (s === Map) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((r = a[0]), (r && typeof r == 'object' && ((r = u(t, r)), !r)) || !d(a[1], t.get(r)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (s === DataView) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o[a] === t[a]; );
							return a === -1;
						}
						if (!s || typeof o == 'object') {
							a = 0;
							for (s in o) if ((l.call(o, s) && ++a && !l.call(t, s)) || !(s in t) || !d(o[s], t[s])) return !1;
							return Object.keys(t).length === a;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function c(e) {
					var l = new Error("Cannot find module '" + e + "'");
					throw ((l.code = 'MODULE_NOT_FOUND'), l);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (b.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationEmail-RecommendationEmail-stories.507d745b.iframe.bundle.js.map
