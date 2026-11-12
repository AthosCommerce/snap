import { o as c, u as d, m as _, c as u, j as f, e as b } from './iframe-0uTqSs9S.js';
import { d as g } from './defined-CdKp_MB-.js';
import { RecommendationBundle as y } from './RecommendationBundle-CIaWZLgO.js';
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
const h = () =>
		b({
			'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
			'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
		}),
	r = 'recommendationBundleVertical',
	at = c((o) => {
		const e = d(),
			t = { name: o.controller?.store?.profile?.tag?.toLowerCase(), ...o },
			{ treePath: m, disableStyles: i, controller: p, style: S, styleScript: B, themeStyleScript: P, ...n } = t,
			s = {
				recommendationBundle: {
					ctaInline: !1,
					carousel: { enabled: !1 },
					separatorIcon: !1,
					alias: r,
					...g({ disableStyles: i }),
					theme: t?.theme,
					treePath: m,
				},
			},
			a = _(r, e, {}, t),
			l = u(a, h);
		return f(y, { controller: p, ...l, ...s.recommendationBundle, ...n });
	});
export { at as RecommendationBundleVertical };
