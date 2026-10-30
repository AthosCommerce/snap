import { o as M, u as R, a as j, m as z, s as W, y as w, A as a, c as $, j as t, d as A, C as F, e as G } from './iframe-U9T2Y9ZS.js';
import { d as c } from './defined-CdKp_MB-.js';
import { S as H } from './Slideout-xOZDsJn4.js';
import { Q as J, a as K } from './QuickviewLayout-B1fIhm_w.js';
import './preload-helper-PPVm8Dsz.js';
import './Overlay-BH_wZt84.js';
import './useA11y-BuGQuOJb.js';
import './withTracking-B-gE0m0K.js';
import './createImpressionObserver-B76-2cq4.js';
import './useLang-Dx66cFD0.js';
import './useCreateController-B8azvRjq.js';
import './Slideshow-DqC6sQhv.js';
import './Image-C5uuJXju.js';
import './Button-rwG4FGUK.js';
import './Gallery-DdKfCiTB.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './CalloutBadge-hFFhia-q.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './ProductDetail-CHIUhkMw.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-9sk5Dt1c.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-9eXTq04g.js';
import './Checkbox-Dsv4fCi7.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './QuantityPicker-BOFBvqlQ.js';
import './ProductDetailTable-BBj9lfhe.js';
import './Rating-DUxc2ffg.js';
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
