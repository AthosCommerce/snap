import { o as M, u as R, a as j, m as z, s as W, y as w, A as a, c as $, j as t, d as A, C as F, e as G } from './iframe-Bc4KSH0T.js';
import { d as c } from './defined-CdKp_MB-.js';
import { S as H } from './Slideout-DA0XdRZT.js';
import { Q as J, a as K } from './QuickviewLayout-CR9NOT78.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-d1j9-VxC.js';
import './useA11y-BuGQuOJb.js';
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
import './useClickOutside-CoFEN31h.js';
import './QuantityPicker-DIwiiOAU.js';
import './ProductDetailTable-DbeQxRpu.js';
import './Rating-B-yVUDqy.js';
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
