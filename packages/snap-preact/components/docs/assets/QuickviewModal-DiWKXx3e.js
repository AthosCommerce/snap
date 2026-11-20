import { o as Q, u as S, a as B, m as R, A as n, y as W, c as D, j as e, d as E, C as I, e as L } from './iframe-CBMP6iq3.js';
import { d as c } from './defined-CdKp_MB-.js';
import { M as j } from './Modal-Dy1kPhQ-.js';
import { Q as z, a as $ } from './QuickviewLayout-dicb5kwB.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CYgcb6yY.js';
import './Overlay-DtQ4nwO8.js';
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
import './QuantityPicker-CvLliLMp.js';
import './ProductDetailTable-BwRLYgTi.js';
import './Rating-Bwb5vRVd.js';
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
