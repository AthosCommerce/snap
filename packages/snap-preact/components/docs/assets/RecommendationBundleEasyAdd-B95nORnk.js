import { o as l, u as c, m as u, c as _, j as h, e as y } from './iframe-Bc4KSH0T.js';
import { d as f } from './defined-CdKp_MB-.js';
import { RecommendationBundle as b } from './RecommendationBundle-DzAnCAPN.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-7OChHsa4.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-4N2aMGfq.js';
import './useA11y-BuGQuOJb.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './Button-C4cTOUHA.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection-C53zN6Qj.js';
import './Result-BzjtDAC1.js';
import './types-DqusP3LW.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './Image-9Pub_w4s.js';
import './CalloutBadge-DSmlH766.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-B-yVUDqy.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './names-Cka5BSlk.js';
import './Slideshow-ChO0chUe.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhbbLEi.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-COjEKXyJ.js';
import './createImpressionObserver-m2TNXj0r.js';
import './RecommendationProfileTracker-D9NFNSF6.js';
import './Carousel-C5sbdqFl.js';
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
