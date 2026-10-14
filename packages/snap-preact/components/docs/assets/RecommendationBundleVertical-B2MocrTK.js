import { o as c, u as d, m as _, c as u, j as f, e as b } from './iframe-CXSVAHru.js';
import { d as g } from './defined-CdKp_MB-.js';
import { RecommendationBundle as y } from './RecommendationBundle-0wDv-fmh.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-D0_uZPs4.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-CXNoFSPC.js';
import './useA11y-BuGQuOJb.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './Button-YZishUF-.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection-Dwh_PZ6E.js';
import './Result-BacvSyPr.js';
import './types-DqusP3LW.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './Image-BTbXUZuZ.js';
import './CalloutBadge-CahbTmzQ.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-Bdkm_1kb.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './names-Cka5BSlk.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhdnIhb.js';
import './Dropdown-WSImKrUZ.js';
import './useClickOutside-G4DBoznB.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-D4h_hXCO.js';
import './createImpressionObserver-DI1SU3AN.js';
import './RecommendationProfileTracker-CJc76sRj.js';
import './Carousel-cDEo0lz5.js';
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
