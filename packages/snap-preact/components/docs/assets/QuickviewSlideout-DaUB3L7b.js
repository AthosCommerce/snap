import { o as M, u as R, a as j, m as z, s as W, y as w, A as a, c as $, j as t, d as A, C as F, e as G } from './iframe-CBMP6iq3.js';
import { d as c } from './defined-CdKp_MB-.js';
import { S as H } from './Slideout-CtsQZp-g.js';
import { Q as J, a as K } from './QuickviewLayout-dicb5kwB.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-DtQ4nwO8.js';
import './useA11y-BuGQuOJb.js';
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
import './useClickOutside-CYgcb6yY.js';
import './QuantityPicker-CvLliLMp.js';
import './ProductDetailTable-BwRLYgTi.js';
import './Rating-Bwb5vRVd.js';
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
