import { o as c, u as d, m as _, c as u, j as f, e as b } from './iframe-CBMP6iq3.js';
import { d as g } from './defined-CdKp_MB-.js';
import { RecommendationBundle as y } from './RecommendationBundle-DfKytv54.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-DCCuBpZP.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-Bf1jD8rh.js';
import './useA11y-BuGQuOJb.js';
import './Price-b0F4x_FF.js';
import './formatNumber-C6zKvI-v.js';
import './Button-CDadhUc9.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection-1a9oca-F.js';
import './Result-C3mmRPuX.js';
import './types-DqusP3LW.js';
import './OverlayBadge-ByZlAQ-V.js';
import './defaultBadgeComponentMap-ByRaqHv1.js';
import './BadgeImage-qABHGrVa.js';
import './BadgeRectangle-D-DJ5cYF.js';
import './BadgePill-DZ4Tt_po.js';
import './BadgeText-DWl6wYDE.js';
import './Image-DCYn0aso.js';
import './CalloutBadge-DoxQ9c-v.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-Bwb5vRVd.js';
import './VariantSelection-BxzFXcsF.js';
import './Swatches-ik7K4L0U.js';
import './names-EhrrLUyQ.js';
import './Slideshow-DT_s099s.js';
import './Grid-BA6Sqccj.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-Bltyzt-T.js';
import './Dropdown-DmIQwaKA.js';
import './useClickOutside-CYgcb6yY.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-CBy-MeUe.js';
import './createImpressionObserver-BETervzW.js';
import './RecommendationProfileTracker-BWihLUwH.js';
import './Carousel-CTiSXyXD.js';
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
