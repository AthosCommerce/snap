import { o as M, u as R, a as j, m as z, s as W, y as w, A as a, c as $, j as t, d as A, C as F, e as G } from './iframe-CXSVAHru.js';
import { d as c } from './defined-CdKp_MB-.js';
import { S as H } from './Slideout-OFSsF92G.js';
import { Q as J, a as K } from './QuickviewLayout-DTGbyD06.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-BCtuQj-C.js';
import './useA11y-BuGQuOJb.js';
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
import './useClickOutside-G4DBoznB.js';
import './QuantityPicker-BOhQIiR3.js';
import './ProductDetailTable-CoNH0hDZ.js';
import './Rating-Bdkm_1kb.js';
const U = () =>
		G({
			'& .ss__slideout': { zIndex: 10006 },
			'& .ss__slideout__overlay': { zIndex: '10005 !important' },
			'& .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
		}),
	Re = M((g) => {
		const k = R(),
			y = {
				treePath: j(),
				slideDirection: 'right',
				width: '500px',
				overlayColor: 'rgba(0,0,0,0.8)',
				hideBadge: !1,
				layout: [
					['slideshow'],
					['productDetail.mappings.core.name'],
					['calloutBadge'],
					['variantSelections'],
					['quantityPicker'],
					['button.add-to-cart'],
					['productDetail.mappings.core.description'],
					['productDetailTable'],
					['button.more-info'],
				],
			},
			i = z('quickviewSlideout', k, y, g),
			{
				quickviewManager: o,
				className: _,
				internalClassName: P,
				disableStyles: l,
				treePath: u,
				layout: q,
				hideBadge: b,
				column1: S,
				column2: C,
				column3: T,
				column4: x,
				recommendation: N,
				slideDirection: Q,
				width: B,
				overlayColor: D,
				lang: O,
			} = i,
			[m, E] = W(!1);
		w(() => {
			E(!0);
		}, []);
		const p = a(null),
			s = a(null),
			n = a(!1);
		w(() => {
			const e = !!o?.store?.isOpen && m;
			e && !n.current
				? ((s.current = document.activeElement || null), p.current?.querySelector('.ss__quickview__close')?.focus())
				: !e && n.current && (s.current?.focus?.(), (s.current = null)),
				(n.current = e);
		});
		const I = $(i, U);
		if (!o)
			return console.warn('[QuickviewSlideout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null;
		const d = o.store,
			r = d.product,
			L = !!d.isOpen && m,
			h = () => o.close(),
			v = {
				quickviewLayout: {
					onClose: h,
					...c({ hideBadge: b, column1: S, column2: C, column3: T, column4: x, recommendation: N, lang: O }),
					...c({ disableStyles: l }),
					theme: i?.theme,
					treePath: u,
				},
				slideout: {
					rerender: !1,
					slideDirection: Q,
					width: B,
					overlayColor: D,
					onChange: (e) => {
						e || h();
					},
					...c({ disableStyles: l }),
					theme: i?.theme,
					treePath: u,
				},
			},
			f = t(K, { quickviewManager: o, ...v.quickviewLayout, layout: q });
		return t(F, {
			children: t('div', {
				...I,
				ref: p,
				className: A('ss__quickview-slideout', _, P),
				onClick: (e) => e.stopPropagation(),
				children: t(H, {
					...v.slideout,
					active: L,
					children: r ? t(J, { quickviewManager: o, product: r, children: f }, `${r.responseId}-${r.id}`) : f,
				}),
			}),
		});
	});
export { Re as QuickviewSlideout };
