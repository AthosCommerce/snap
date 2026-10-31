import {
	o as U,
	u as W,
	a as q,
	m as G,
	b as J,
	s as K,
	c as Q,
	n as X,
	j as e,
	l as u,
	F as Z,
	p as $,
	d as ee,
	C as te,
	e as ae,
} from './iframe-Bc4KSH0T.js';
import { d as n } from './defined-CdKp_MB-.js';
import { u as re } from './useLang-Dx66cFD0.js';
import { O as se } from './OverlayBadge-BuHm4cAU.js';
import { I as x } from './Image-9Pub_w4s.js';
import { C as oe } from './CalloutBadge-DSmlH766.js';
import { R as le } from './Rating-B-yVUDqy.js';
import { P as v } from './Price-BreE7qNQ.js';
import { V as ie } from './VariantSelection-BH5mZvcl.js';
import { B as ne } from './Button-C4cTOUHA.js';
import { t as _e } from './truncate-CqAvmyZI.js';
import './preload-helper-PPVm8Dsz.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './formatNumber-C6zKvI-v.js';
import './Swatches-BkfGTCkC.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-7OChHsa4.js';
import './Slideshow-ChO0chUe.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './useA11y-BuGQuOJb.js';
import './handleize-xLHhB8k5.js';
import './List-DGhbbLEi.js';
import './Checkbox-4N2aMGfq.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
const de = (p) => {
		const { overlayBackground: m, disableSlide: _ } = p;
		return ae({
			position: 'relative',
			overflow: 'hidden',
			'& .ss__overlay-result__image-wrapper': {
				position: 'relative',
				width: '100%',
				'& .ss__overlay-result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
				'& .ss__overlay-result__image': { display: 'block', width: '100%', objectFit: 'cover' },
			},
			'& .ss__overlay-result__details': {
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				width: '100%',
				boxSizing: 'border-box',
				padding: '18px 10px 10px',
				background: m,
				color: '#fff',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'flex-start',
				textAlign: 'left',
				transform: 'translateY(0)',
				transition: _ ? 'none' : 'transform 260ms ease',
				'& .ss__overlay-result__details__title': { marginBottom: '4px', '& a': { color: 'inherit', textDecoration: 'none' } },
				'& .ss__overlay-result__details__pricing': {
					marginBottom: '4px',
					'& .ss__overlay-result__price': { color: '#fff', fontSize: '1.3em' },
					'& .ss__price--strike': { color: 'rgba(255,255,255,0.7)', fontSize: '0.9em' },
				},
				'& .ss__overlay-result__rating': { marginBottom: '4px' },
				'& .ss__overlay-result__button--addToCart': { marginTop: '6px' },
				'& .ss__overlay-result__details__extra': {
					display: 'grid',
					gridTemplateRows: _ ? '1fr' : '0fr',
					opacity: _ ? 1 : 0,
					transform: _ ? 'translateY(0)' : 'translateY(1px)',
					transition: _ ? 'none' : 'grid-template-rows 260ms ease, opacity 220ms ease, transform 260ms ease',
					width: '100%',
					'& .ss__overlay-result__details__extra-inner': { overflow: 'hidden', minHeight: 0 },
				},
			},
			'&:hover .ss__overlay-result__details': { transform: 'translateY(0)' },
			'&:hover .ss__overlay-result__details .ss__overlay-result__details__extra': { gridTemplateRows: '1fr', opacity: 1, transform: 'translateY(0)' },
			'&:focus-within .ss__overlay-result__details': { transform: 'translateY(0)' },
			'&:focus-within .ss__overlay-result__details .ss__overlay-result__details__extra': {
				gridTemplateRows: '1fr',
				opacity: 1,
				transform: 'translateY(0)',
			},
			'@media (hover: none)': {
				'& .ss__overlay-result__details .ss__overlay-result__details__extra': { gridTemplateRows: '1fr', opacity: 1, transform: 'translateY(0)' },
			},
		});
	},
	Me = U((p) => {
		const m = W(),
			b = {
				treePath: q(),
				addToCartButtonText: 'Add To Cart',
				addToCartButtonSuccessText: 'Added!',
				addToCartButtonSuccessTimeout: 2e3,
				hideAddToCartButton: !0,
				overlayBackground: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
			},
			a = G('overlayResult', m, b, p),
			{
				result: r,
				hideBadge: g,
				hideTitle: B,
				hidePricing: N,
				hideImage: S,
				detailSlot: w,
				fallback: k,
				disableStyles: l,
				className: P,
				internalClassName: R,
				onClick: c,
				controller: d,
				hideVariantSelections: Y,
				hideAddToCartButton: A,
				onAddToCartClick: h,
				addToCartButtonText: y,
				addToCartButtonSuccessText: O,
				addToCartButtonSuccessTimeout: j,
				hideRating: I,
				trackingRef: L,
				treePath: o,
			} = a,
			{ overrideElement: F, shouldRenderDefault: z } = J('overlayResult', {
				...a,
				customComponent:
					!o?.split(' ')?.includes('result') && a.customComponent && a.customComponent !== 'OverlayResult' ? a.customComponent : void 0,
			});
		if (!z) return F;
		const t = r?.display?.mappings.core || r?.mappings?.core,
			[D, f] = K(!1),
			s = {
				variantSelection: { internalClassName: 'ss__overlay-result__variant-selection', ...n({ disableStyles: l }), theme: a.theme, treePath: o },
				price: { internalClassName: 'ss__overlay-result__price', ...n({ disableStyles: l }), theme: a.theme, treePath: o },
				calloutBadge: { internalClassName: 'ss__overlay-result__callout-badge', result: r, ...n({ disableStyles: l }), theme: a.theme, treePath: o },
				overlayBadge: {
					internalClassName: 'ss__overlay-result__overlay-badge',
					result: r,
					controller: d,
					...n({ disableStyles: l }),
					theme: a.theme,
					treePath: o,
				},
				image: {
					internalClassName: 'ss__overlay-result__image',
					alt: t?.name || '',
					src: t?.imageUrl || '',
					...n({ disableStyles: l, fallback: k }),
					theme: a.theme,
					treePath: o,
				},
				rating: {
					internalClassName: 'ss__overlay-result__rating',
					value: t?.rating || 0,
					count: Number(t?.ratingCount || 0),
					...n({ disableStyles: l }),
					theme: a.theme,
					treePath: o,
				},
				button: {
					internalClassName: 'ss__overlay-result__button--addToCart',
					onClick: (i) => {
						f(!0), h && h(i, r), d?.addToCart([r]), setTimeout(() => f(!1), j);
					},
					...n({ disableStyles: l }),
					theme: a.theme,
					treePath: o,
				},
			};
		let C = t?.name;
		a.truncateTitle && (C = _e(t?.name || '', a.truncateTitle.limit, a.truncateTitle.append));
		const V = Q(a, de),
			H = X({ addToCartButtonText: { value: D ? O : y } }, a.lang || {}),
			E = re(H, { result: r, controller: d }, { activeBreakpoint: m?.activeBreakpoint }),
			T = !!(t?.msrp && t?.price && t?.price < t?.msrp),
			M = d?.store?.config?.asyncState?.product?.price ? r.state.priceFetched : !0;
		return t
			? e(te, {
					children: u('article', {
						...V,
						className: ee('ss__overlay-result', { 'ss__overlay-result--sale': T }, P, R),
						ref: L,
						children: [
							!S &&
								e('div', {
									className: 'ss__overlay-result__image-wrapper',
									children: e('a', {
										href: t.url,
										onClick: (i) => {
											c && c(i);
										},
										children: g ? e(x, { ...s.image }) : e(se, { ...s.overlayBadge, controller: d, children: e(x, { ...s.image }) }),
									}),
								}),
							u('div', {
								className: 'ss__overlay-result__details',
								children: [
									!B &&
										e('div', {
											className: 'ss__overlay-result__details__title',
											children: e('a', {
												href: t.url,
												onClick: (i) => {
													c && c(i);
												},
												dangerouslySetInnerHTML: { __html: C || '' },
											}),
										}),
									e('div', {
										className: 'ss__overlay-result__details__extra',
										children: u('div', {
											className: 'ss__overlay-result__details__extra-inner',
											children: [
												!g && e(oe, { ...s.calloutBadge, controller: d }),
												!I && e(le, { ...s.rating }),
												!N && M && t.price && t.price > 0
													? e('div', {
															className: 'ss__overlay-result__details__pricing',
															children: T
																? u(Z, {
																		children: [
																			e(v, { ...s.price, value: t.msrp, lineThrough: !0, name: 'msrp' }),
																			' ',
																			e(v, { ...s.price, value: t.price, name: 'price' }),
																		],
																  })
																: e(v, { ...s.price, value: t.price }),
													  })
													: null,
												$(w, { result: r, treePath: o }),
												!Y && r.variants?.selections.length
													? e('div', {
															className: 'ss__overlay-result__details__variant-selection',
															children: r.variants?.selections.map((i) => e(ie, { ...s.variantSelection, selection: i })),
													  })
													: null,
												!A &&
													e('div', {
														className: 'ss__overlay-result__add-to-cart-wrapper',
														children: e(ne, { ...s.button, content: y, ...E.addToCartButtonText.all }),
													}),
											],
										}),
									}),
								],
							}),
						],
					}),
			  })
			: null;
	});
export { Me as OverlayResult };
