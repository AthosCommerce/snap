import { o as Q, u as S, a as B, m as R, A as n, y as W, c as D, j as e, d as E, C as I, e as L } from './iframe-0uTqSs9S.js';
import { d as c } from './defined-CdKp_MB-.js';
import { M as j } from './Modal-B5IHgr9P.js';
import { Q as z, a as $ } from './QuickviewLayout-QwCqeoKE.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-DOEh9Z-W.js';
import './Overlay-D_0SkdOn.js';
import './withTracking-Bxgx8W-i.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './useLang-Dx66cFD0.js';
import './useCreateController-D4sbGnnv.js';
import './Slideshow-zOCrnuUn.js';
import './Image-C3O8T0nj.js';
import './Button-CmsiLEAv.js';
import './Gallery-C4bKC_KB.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './CalloutBadge-DXapTNdX.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './ProductDetail-AD5aMGZ8.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-CrQOlxmk.js';
import './Grid-BRtXjrhJ.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-PZ5HrgK2.js';
import './Checkbox-7fOTHZL3.js';
import './Dropdown-CL17qjds.js';
import './QuantityPicker-CV7A7NXQ.js';
import './ProductDetailTable-D2RzjZxv.js';
import './Rating-ERPkfVOZ.js';
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
