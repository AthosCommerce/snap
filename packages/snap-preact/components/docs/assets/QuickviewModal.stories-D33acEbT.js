import { j as n } from './iframe-Bc4KSH0T.js';
import { QuickviewModal as a } from './QuickviewModal-Dcjgka6_.js';
import { R as p } from './readme-Cn4My1Te.js';
import { c as m } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Modal-Bb71CFe8.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CoFEN31h.js';
import './Overlay-d1j9-VxC.js';
import './QuickviewLayout-CR9NOT78.js';
import './withTracking-D6kix-j7.js';
import './createImpressionObserver-m2TNXj0r.js';
import './useLang-Dx66cFD0.js';
import './useCreateController-DqNcG6uZ.js';
import './Slideshow-ChO0chUe.js';
import './Image-9Pub_w4s.js';
import './Button-C4cTOUHA.js';
import './Gallery-CyOD8nQg.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './CalloutBadge-DSmlH766.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './ProductDetail-DckP_cuC.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-7OChHsa4.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhbbLEi.js';
import './Checkbox-4N2aMGfq.js';
import './Dropdown-tCLF6hwk.js';
import './QuantityPicker-DIwiiOAU.js';
import './ProductDetailTable-DbeQxRpu.js';
import './Rating-B-yVUDqy.js';
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
