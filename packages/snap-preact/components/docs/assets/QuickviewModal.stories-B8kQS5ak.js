import { j as n } from './iframe-0uTqSs9S.js';
import { QuickviewModal as a } from './QuickviewModal-B4Oa0ipK.js';
import { R as m } from './readme-CBC6WWb2.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Modal-B5IHgr9P.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-DOEh9Z-W.js';
import './Overlay-D_0SkdOn.js';
import './QuickviewLayout-QwCqeoKE.js';
import './withTracking-Bxgx8W-i.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './useLang-Dx66cFD0.js';
import './useCreateController-D4sbGnnv.js';
import './Slideshow-zOCrnuUn.js';
import './Image-C3O8T0nj.js';
import './Button-CmsiLEAv.js';
import './Gallery-C4bKC_KB.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './CalloutBadge-DXapTNdX.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './ProductDetail-AD5aMGZ8.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-CrQOlxmk.js';
import './Grid-BRtXjrhJ.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-PZ5HrgK2.js';
import './Checkbox-7fOTHZL3.js';
import './Dropdown-CL17qjds.js';
import './QuantityPicker-CV7A7NXQ.js';
import './ProductDetailTable-D2RzjZxv.js';
import './Rating-ERPkfVOZ.js';
function l(e = {}) {
	const i = {
			type: 'quickview',
			store: {
				meta: void 0,
				isOpen: !0,
				loading: !1,
				product: void 0,
				resolvedConfig: void 0,
				error: void 0,
				close: () => {
					i.store.isOpen = !1;
				},
			},
		},
		s = { ...i.store, ...(e.store || {}) };
	return { ...i, ...e, store: s };
}
const c = {
		id: 'sample',
		mappings: {
			core: {
				name: 'Sample Widget',
				imageUrl: 'https://placehold.co/400x400',
				thumbnailImageUrl: 'https://placehold.co/400x400',
				description: '<p>A sample product description. Resize the viewport past 768px to see the two-column desktop layout.</p>',
			},
		},
		attributes: { color: 'red', size: 'M', sku: 'SW-001' },
	},
	u = l({ store: { isOpen: !0, product: c } }),
	d = l({ store: { isOpen: !0, loading: !0, product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} } } }),
	g = l({
		store: {
			isOpen: !0,
			loading: !1,
			product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} },
			error: { message: 'Failed to display quickview' },
		},
	}),
	ae = {
		title: 'Templates/QuickviewModal',
		component: a,
		parameters: { docs: { description: { component: m } } },
		argTypes: {
			quickviewManager: {
				description: 'QuickviewManager exposing `store` ({ isOpen, product, loading, resolvedConfig, error, close }); dismiss via `store.close()`',
				type: { required: !0 },
				table: { type: { summary: 'QuickviewManager' } },
				control: { type: 'none' },
			},
			layout: {
				description: 'Module/column arrangement passed through to `QuickviewLayout` (see the readme for available modules)',
				table: { category: 'Templates Legal', type: { summary: 'ModuleNamesWithColumns[]' }, defaultValue: { summary: "[['c1', 'c2']]" } },
				control: 'none',
			},
			hideBadge: {
				description: 'Render the `slideshow` module without the `OverlayBadge` wrapper',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			column1: {
				description: '`{ layout, width, alignContent }` config for the `c1` column',
				table: {
					category: 'Templates Legal',
					type: { summary: '{ layout?, width?, alignContent? }' },
					defaultValue: { summary: "{ layout: ['slideshow'], width: '45%' }" },
				},
				control: 'none',
			},
			column2: {
				description: '`{ layout, width, alignContent }` config for the `c2` column',
				table: {
					category: 'Templates Legal',
					type: { summary: '{ layout?, width?, alignContent? }' },
					defaultValue: {
						summary:
							"{ layout: [['productDetail.mappings.core.name'], ['calloutBadge'], ['variantSelections'], ['quantityPicker'], ['button.add-to-cart'], ['productDetail.mappings.core.description'], ['productDetailTable'], ['button.more-info']], width: 'auto' }",
					},
				},
				control: 'none',
			},
			column3: {
				description: '`{ layout, width, alignContent }` config for the `c3` column',
				table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
				control: 'none',
			},
			column4: {
				description: '`{ layout, width, alignContent }` config for the `c4` column',
				table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
				control: 'none',
			},
			recommendation: {
				description:
					'Config for `recommendation.<profile>` modules: `{ component?, resultComponent?, config? }`. Profile/tag comes from the module name.',
				table: { type: { summary: '{ component?, resultComponent?, config? }' } },
				control: { type: 'object' },
			},
			lang: {
				description:
					'Custom language keys forwarded to `QuickviewLayout` (`quickview`, `closeButton`, `addToCartButton`, `moreInfoButton`, `loadingText`)',
				table: { type: { summary: 'Partial<QuickviewLayoutLang>' } },
				control: { type: 'object' },
			},
			...p,
		},
	},
	o = { render: (e) => n(a, { ...e, quickviewManager: u }) },
	t = { render: (e) => n(a, { ...e, quickviewManager: d }) },
	r = { render: (e) => n(a, { ...e, quickviewManager: g }) };
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: QuickviewModalProps) => <QuickviewModal {...args} quickviewManager={defaultController} />
}`,
			...o.parameters?.docs?.source,
		},
	},
};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: QuickviewModalProps) => <QuickviewModal {...args} quickviewManager={loadingController} />
}`,
			...t.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: QuickviewModalProps) => <QuickviewModal {...args} quickviewManager={errorController} />
}`,
			...r.parameters?.docs?.source,
		},
	},
};
const ie = ['Default', 'Loading', 'ErrorState'];
export { o as Default, r as ErrorState, t as Loading, ie as __namedExportsOrder, ae as default };
