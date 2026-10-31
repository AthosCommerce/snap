import { o as Q, u as S, a as B, m as R, A as n, y as W, c as D, j as e, d as E, C as I, e as L } from './iframe-Bc4KSH0T.js';
import { d as c } from './defined-CdKp_MB-.js';
import { M as j } from './Modal-Bb71CFe8.js';
import { Q as z, a as $ } from './QuickviewLayout-CR9NOT78.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CoFEN31h.js';
import './Overlay-d1j9-VxC.js';
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
import './QuantityPicker-DIwiiOAU.js';
import './ProductDetailTable-DbeQxRpu.js';
import './Rating-B-yVUDqy.js';
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
