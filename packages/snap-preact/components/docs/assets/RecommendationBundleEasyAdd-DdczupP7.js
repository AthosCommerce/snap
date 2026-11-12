import { o as l, u as c, m as u, c as _, j as h, e as y } from './iframe-0uTqSs9S.js';
import { d as f } from './defined-CdKp_MB-.js';
import { RecommendationBundle as b } from './RecommendationBundle-CIaWZLgO.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-CrQOlxmk.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-7fOTHZL3.js';
import './useA11y-BuGQuOJb.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './Button-CmsiLEAv.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection--tMWEcR1.js';
import './Result-DV0wVcu6.js';
import './types-DqusP3LW.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './Image-C3O8T0nj.js';
import './CalloutBadge-DXapTNdX.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-ERPkfVOZ.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './names-Cka5BSlk.js';
import './Slideshow-zOCrnuUn.js';
import './Grid-BRtXjrhJ.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-PZ5HrgK2.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-Cu6M_iF6.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './RecommendationProfileTracker-BY3nS6Ea.js';
import './Carousel-CwyRxZ5C.js';
const g = () => y({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
	e = 'recommendationBundleEasyAdd',
	at = l((o) => {
		const r = c(),
			t = { name: o.controller?.store?.profile?.tag?.toLowerCase(), ...o },
			{ treePath: m, disableStyles: i, controller: p, style: B, styleScript: S, themeStyleScript: x, ...s } = t,
			n = {
				recommendationBundle: {
					hideCheckboxes: !0,
					seedText: '',
					ctaButtonText: 'Add Both',
					ctaInline: !1,
					hideSeed: !0,
					alias: e,
					limit: 1,
					carousel: { enabled: !1 },
					separatorIcon: !1,
					...f({ disableStyles: i }),
					theme: t?.theme,
					treePath: m,
				},
			},
			a = u(e, r, {}, t),
			d = _(a, g);
		return h(b, { controller: p, ...d, ...n.recommendationBundle, ...s });
	});
export { at as RecommendationBundleEasyAdd };
