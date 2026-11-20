import { j as n } from './iframe-CBMP6iq3.js';
import { QuickviewModal as a } from './QuickviewModal-DiWKXx3e.js';
import { R as m } from './readme-CBC6WWb2.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Modal-Dy1kPhQ-.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CYgcb6yY.js';
import './Overlay-DtQ4nwO8.js';
import './QuickviewLayout-dicb5kwB.js';
import './withTracking-CHJH0HXR.js';
import './createImpressionObserver-BETervzW.js';
import './useLang-Dx66cFD0.js';
import './useCreateController-BQWBOW7h.js';
import './Slideshow-DT_s099s.js';
import './Image-DCYn0aso.js';
import './Button-CDadhUc9.js';
import './Gallery-DA4V4UnT.js';
import './OverlayBadge-ByZlAQ-V.js';
import './defaultBadgeComponentMap-ByRaqHv1.js';
import './BadgeImage-qABHGrVa.js';
import './BadgeRectangle-D-DJ5cYF.js';
import './BadgePill-DZ4Tt_po.js';
import './BadgeText-DWl6wYDE.js';
import './CalloutBadge-DoxQ9c-v.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './ProductDetail-BB1rmqbT.js';
import './Price-b0F4x_FF.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxzFXcsF.js';
import './Swatches-ik7K4L0U.js';
import './names-EhrrLUyQ.js';
import './useDisplaySettings-DCCuBpZP.js';
import './Grid-BA6Sqccj.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-Bltyzt-T.js';
import './Checkbox-Bf1jD8rh.js';
import './Dropdown-DmIQwaKA.js';
import './QuantityPicker-CvLliLMp.js';
import './ProductDetailTable-BwRLYgTi.js';
import './Rating-Bwb5vRVd.js';
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
