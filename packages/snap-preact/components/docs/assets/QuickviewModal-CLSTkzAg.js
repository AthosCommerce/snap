import { o as Q, u as S, a as B, m as R, A as n, y as W, c as D, j as e, d as E, C as I, e as L } from './iframe-U9T2Y9ZS.js';
import { d as c } from './defined-CdKp_MB-.js';
import { M as j } from './Modal-BnFdKWAy.js';
import { Q as z, a as $ } from './QuickviewLayout-B1fIhm_w.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-DeMSpwd-.js';
import './Overlay-BH_wZt84.js';
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
import './QuantityPicker-BOFBvqlQ.js';
import './ProductDetailTable-BBj9lfhe.js';
import './Rating-DUxc2ffg.js';
const A = () =>
		L({
			position: 'absolute',
			width: 0,
			height: 0,
			'&.ss__quickview-modal .ss__modal__content': {
				position: 'fixed !important',
				top: '50% !important',
				left: '50% !important',
				transform: 'translate(-50%, -50%) !important',
				minWidth: 'auto',
				maxWidth: '90vw',
				maxHeight: '90vh',
				width: 'auto',
				overflow: 'auto',
				zIndex: 10006,
				boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
				borderRadius: '4px',
			},
			'&.ss__quickview-modal .ss__modal__overlay': { zIndex: '10005 !important' },
			'@media (max-width: 767px)': {
				'&.ss__quickview-modal .ss__modal__content': { width: '100vw', maxWidth: '100vw', borderRadius: 0 },
				'&.ss__quickview-modal .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
			},
		}),
	Bo = Q((v) => {
		const _ = S(),
			f = {
				treePath: B(),
				hideBadge: !1,
				layout: [['c1', 'c2']],
				column1: { layout: ['slideshow'], width: '45%' },
				column2: {
					layout: [
						['productDetail.mappings.core.name'],
						['calloutBadge'],
						['variantSelections'],
						['quantityPicker'],
						['button.add-to-cart'],
						['productDetail.mappings.core.description'],
						['productDetailTable'],
						['button.more-info'],
					],
					width: 'auto',
				},
			},
			i = R('quickviewModal', _, f, v),
			{
				quickviewManager: o,
				className: k,
				internalClassName: g,
				disableStyles: m,
				treePath: l,
				layout: y,
				hideBadge: q,
				column1: x,
				column2: b,
				column3: P,
				column4: M,
				recommendation: C,
				lang: T,
			} = i,
			p = n(null),
			a = n(null),
			s = n(!1);
		W(() => {
			const t = !!o?.store?.isOpen;
			t && !s.current
				? ((a.current = document.activeElement || null), p.current?.querySelector('.ss__quickview__close')?.focus())
				: !t && s.current && (a.current?.focus?.(), (a.current = null)),
				(s.current = t);
		});
		const N = D(i, A);
		if (!o)
			return console.warn('[QuickviewModal] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null;
		const u = o.store,
			r = u.product,
			O = !!u.isOpen,
			d = () => o.close(),
			h = {
				quickviewLayout: {
					onClose: d,
					...c({ hideBadge: q, column1: x, column2: b, column3: P, column4: M, recommendation: C, lang: T }),
					...c({ disableStyles: m }),
					theme: i?.theme,
					treePath: l,
				},
				modal: { onOverlayClick: d, ...c({ disableStyles: m }), theme: i?.theme, treePath: l },
			},
			w = e($, { quickviewManager: o, ...h.quickviewLayout, layout: y });
		return e(I, {
			children: e('div', {
				...N,
				ref: p,
				className: E('ss__quickview-modal', k, g),
				onClick: (t) => t.stopPropagation(),
				children: e(j, { ...h.modal, open: O, children: r ? e(z, { quickviewManager: o, product: r, children: w }, `${r.responseId}-${r.id}`) : w }),
			}),
		});
	});
export { Bo as QuickviewModal };
