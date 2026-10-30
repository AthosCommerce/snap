import { o as l, u as c, m as u, c as _, j as h, e as y } from './iframe-U9T2Y9ZS.js';
import { d as f } from './defined-CdKp_MB-.js';
import { RecommendationBundle as b } from './RecommendationBundle-Yp4uL5EJ.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-9sk5Dt1c.js';
import './useLang-Dx66cFD0.js';
import './Checkbox-Dsv4fCi7.js';
import './useA11y-BuGQuOJb.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './Button-rwG4FGUK.js';
import './componentNameToClassName-btPHBToT.js';
import './useIntersection-D52kaMEq.js';
import './Result-Dham3Ici.js';
import './types-DqusP3LW.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './Image-C5uuJXju.js';
import './CalloutBadge-hFFhia-q.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-DUxc2ffg.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './names-Cka5BSlk.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-9eXTq04g.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './truncate-CqAvmyZI.js';
import './ResultTracker-D-Jc6Lj4.js';
import './createImpressionObserver-B76-2cq4.js';
import './RecommendationProfileTracker-1483CJFp.js';
import './Carousel-bRyEtExy.js';
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
