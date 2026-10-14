import { j as n } from './iframe-CXSVAHru.js';
import { QuickviewModal as a } from './QuickviewModal-DnhJRh3G.js';
import { R as p } from './readme-Cn4My1Te.js';
import { c as m } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Modal-4V85zi-h.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-G4DBoznB.js';
import './Overlay-BCtuQj-C.js';
import './QuickviewLayout-DTGbyD06.js';
import './withTracking-DWvVsRqK.js';
import './createImpressionObserver-DI1SU3AN.js';
import './useLang-Dx66cFD0.js';
import './useCreateController-CPUKSfyE.js';
import './Slideshow-KsKNhuXs.js';
import './Image-BTbXUZuZ.js';
import './Button-YZishUF-.js';
import './Gallery-Dx1OoM-4.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './CalloutBadge-CahbTmzQ.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './ProductDetail-CJRoGv0B.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-D0_uZPs4.js';
import './Grid-gPB0UN_F.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhdnIhb.js';
import './Checkbox-CXNoFSPC.js';
import './Dropdown-WSImKrUZ.js';
import './QuantityPicker-BOhQIiR3.js';
import './ProductDetailTable-CoNH0hDZ.js';
import './Rating-Bdkm_1kb.js';
function s(e = {}) {
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
		l = { ...i.store, ...(e.store || {}) };
	return { ...i, ...e, store: l };
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
	u = s({ store: { isOpen: !0, product: c } }),
	d = s({ store: { isOpen: !0, loading: !0, product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} } } }),
	g = s({
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
		parameters: { docs: { description: { component: p } } },
		argTypes: {
			quickviewManager: {
				description: 'QuickviewManager exposing `store` ({ isOpen, product, loading, resolvedConfig, error, close }); dismiss via `store.close()`',
				type: { required: !0 },
				table: { type: { summary: 'QuickviewManager' } },
				control: { type: 'none' },
			},
			layout: {
				description: 'Module/column arrangement passed through to `QuickviewLayout` (see the readme for available modules)',
				table: { category: 'Templates Legal', type: { summary: 'ModuleNamesWithColumns[]' } },
				control: 'none',
			},
			hideBadge: {
				description: 'Render the `slideshow` module without the `OverlayBadge` wrapper',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			column1: {
				description: '`{ layout, width, alignContent }` config for the `c1` column',
				table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
				control: 'none',
			},
			column2: {
				description: '`{ layout, width, alignContent }` config for the `c2` column',
				table: { category: 'Templates Legal', type: { summary: '{ layout?, width?, alignContent? }' } },
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
			...m,
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
