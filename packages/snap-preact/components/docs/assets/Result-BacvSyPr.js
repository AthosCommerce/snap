import {
	o as G,
	u as J,
	a as K,
	m as X,
	b as Y,
	s as Z,
	c as ee,
	n as te,
	j as s,
	l as c,
	F as se,
	p as ae,
	d as re,
	C as ie,
	e as oe,
} from './iframe-CXSVAHru.js';
import { R as le } from './types-DqusP3LW.js';
import { d as u } from './defined-CdKp_MB-.js';
import { u as ne } from './useLang-Dx66cFD0.js';
import { O as ue } from './OverlayBadge-D2AY0vGx.js';
import { I as x } from './Image-BTbXUZuZ.js';
import { B } from './Button-YZishUF-.js';
import { C as me } from './CalloutBadge-CahbTmzQ.js';
import { R as ce } from './Rating-Bdkm_1kb.js';
import { P as d } from './Price-hlxD57mt.js';
import { V as de } from './VariantSelection-C5HykCjo.js';
import { t as _e } from './truncate-CqAvmyZI.js';
import './preload-helper-PPVm8Dsz.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './useA11y-BuGQuOJb.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './formatNumber-C6zKvI-v.js';
import './Swatches-BAeMNyN2.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-D0_uZPs4.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhdnIhb.js';
import './Checkbox-CXNoFSPC.js';
import './Dropdown-WSImKrUZ.js';
import './useClickOutside-G4DBoznB.js';
const pe = () =>
		oe({
			'&.ss__result--grid': { display: 'flex', flexDirection: 'column', '& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' } },
			'&.ss__result--list': {
				display: 'flex',
				flexDirection: 'row',
				'& .ss__result__image-wrapper': { flex: '0 0 33%' },
				'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
			},
			'& .ss__result__image-wrapper': {
				position: 'relative',
				'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
				'& .ss__result__quickview': {
					position: 'absolute',
					bottom: '10px',
					right: '10px',
					display: 'flex',
					background: 'transparent',
					border: 0,
					padding: '5px',
					cursor: 'pointer',
				},
			},
			'& .ss__result__details': {
				padding: '10px',
				textAlign: 'center',
				'& .ss__result__details__title': { marginBottom: '10px' },
				'& .ss__result__details__pricing': {
					marginBottom: '10px',
					'& .ss__result__price': { fontSize: '1.2em' },
					'& .ss__price--strike': { fontSize: '80%' },
				},
			},
		}),
	Ge = G((k) => {
		const _ = J(),
			b = K(),
			y = {
				layout: le.grid,
				treePath: b,
				addToCartButtonText: 'Add To Cart',
				addToCartButtonSuccessText: 'Added!',
				addToCartButtonSuccessTimeout: 2e3,
				hideAddToCartButton: !0,
				hideRating: !0,
				hideQuickviewButton: !0,
			},
			e = X('result', _, y, k),
			{
				result: a,
				hideBadge: p,
				hideTitle: N,
				hidePricing: w,
				hideImage: S,
				detailSlot: P,
				fallback: q,
				disableStyles: l,
				className: R,
				internalClassName: A,
				layout: L,
				onClick: m,
				controller: n,
				hideVariantSelections: I,
				hideAddToCartButton: O,
				onAddToCartClick: g,
				addToCartButtonText: Q,
				addToCartButtonSuccessText: V,
				addToCartButtonSuccessTimeout: j,
				hideRating: z,
				hideQuickviewButton: D,
				onQuickviewClick: h,
				trackingRef: F,
				treePath: o,
			} = e,
			{ overrideElement: H, shouldRenderDefault: M } = Y('result', {
				...e,
				customComponent: e.customComponent && e.customComponent !== 'Result' ? e.customComponent : void 0,
			});
		if (!M) return H;
		const t = a?.display?.mappings.core || a?.mappings?.core,
			[E, C] = Z(!1),
			r = {
				variantSelection: { internalClassName: 'ss__result__variant-selection', ...u({ disableStyles: l }), theme: e.theme, treePath: o },
				price: { internalClassName: 'ss__result__price', ...u({ disableStyles: l }), theme: e.theme, treePath: o },
				calloutBadge: { internalClassName: 'ss__result__callout-badge', result: a, ...u({ disableStyles: l }), theme: e.theme, treePath: o },
				overlayBadge: {
					internalClassName: 'ss__result__overlay-badge',
					result: a,
					controller: n,
					...u({ disableStyles: l }),
					theme: e.theme,
					treePath: o,
				},
				image: {
					internalClassName: 'ss__result__image',
					alt: t?.name || '',
					src: t?.imageUrl || '',
					...u({ disableStyles: l, fallback: q }),
					theme: e.theme,
					treePath: o,
				},
				rating: {
					internalClassName: 'ss__result__rating',
					value: t?.rating || 0,
					count: Number(t?.ratingCount || 0),
					...u({ disableStyles: l }),
					theme: e.theme,
					treePath: o,
				},
				quickviewButton: {
					name: 'quickview',
					internalClassName: 'ss__result__quickview',
					icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
					onClick: (i) => {
						h && h(i, a), n?.quickview(a);
					},
					...u({ disableStyles: l }),
					theme: e.theme,
					treePath: o,
				},
				button: {
					internalClassName: 'ss__result__button--addToCart',
					onClick: (i) => {
						C(!0), g && g(i, a), n?.addToCart([a]), setTimeout(() => C(!1), j);
					},
					...u({ disableStyles: l }),
					theme: e.theme,
					treePath: o,
				},
			};
		let f = t?.name;
		e.truncateTitle && (f = _e(t?.name || '', e.truncateTitle.limit, e.truncateTitle.append));
		const U = ee(e, pe),
			W = te({ addToCartButtonText: { value: E ? V : Q }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } }, e.lang || {}),
			v = ne(W, { result: a, controller: n }, { activeBreakpoint: _?.activeBreakpoint }),
			T = !!(t?.msrp && t?.price && t?.price < t?.msrp),
			$ = n?.store?.config?.asyncState?.product?.price ? a.state.priceFetched : !0;
		return t
			? s(ie, {
					children: c('article', {
						...U,
						className: re('ss__result', `ss__result--${L}`, { 'ss__result--sale': T }, R, A),
						ref: F,
						children: [
							!S &&
								c('div', {
									className: 'ss__result__image-wrapper',
									children: [
										s('a', {
											href: t.url,
											onClick: (i) => {
												m && m(i);
											},
											children: p ? s(x, { ...r.image }) : s(ue, { ...r.overlayBadge, controller: n, children: s(x, { ...r.image }) }),
										}),
										!D && n?.quickviewManager && s(B, { ...r.quickviewButton, ...v.quickviewButtonText.attributes }),
									],
								}),
							c('div', {
								className: 'ss__result__details',
								children: [
									!p && s(me, { ...r.calloutBadge, controller: n }),
									!N &&
										s('div', {
											className: 'ss__result__details__title',
											children: s('a', {
												href: t.url,
												onClick: (i) => {
													m && m(i);
												},
												dangerouslySetInnerHTML: { __html: f || '' },
											}),
										}),
									!z && s(ce, { ...r.rating }),
									!w && $ && t.price && t.price > 0
										? s('div', {
												className: 'ss__result__details__pricing',
												children: T
													? c(se, {
															children: [
																s(d, { ...r.price, value: t.msrp, lineThrough: !0, name: 'msrp' }),
																' ',
																s(d, { ...r.price, value: t.price, name: 'price' }),
															],
													  })
													: s(d, { ...r.price, value: t.price }),
										  })
										: null,
									ae(P, { result: a, treePath: o }),
									!I && a.variants?.selections.length
										? s('div', {
												className: 'ss__result__details__variant-selection',
												children: a.variants?.selections.map((i) => s(de, { ...r.variantSelection, type: i.type, selection: i })),
										  })
										: null,
									!O && s('div', { className: 'ss__result__add-to-cart-wrapper', children: s(B, { ...r.button, ...v.addToCartButtonText.all }) }),
								],
							}),
						],
					}),
			  })
			: null;
	});
export { Ge as Result };
