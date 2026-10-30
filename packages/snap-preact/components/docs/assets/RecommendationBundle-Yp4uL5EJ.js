import {
	o as le,
	u as Ce,
	m as Be,
	n as z,
	l as $,
	j as r,
	I as ve,
	d as Q,
	s as ye,
	p as ne,
	F as J,
	a as Ze,
	x as et,
	z as tt,
	c as st,
	y as rt,
	A as oe,
	Q as ot,
	C as at,
	e as nt,
} from './iframe-U9T2Y9ZS.js';
import { u as lt } from './useDisplaySettings-9sk5Dt1c.js';
import { u as Ne } from './useLang-Dx66cFD0.js';
import { C as it } from './Checkbox-Dsv4fCi7.js';
import { P as Pe } from './Price-BlC0Ukx2.js';
import { B as ct } from './Button-rwG4FGUK.js';
import { c as ke } from './componentNameToClassName-btPHBToT.js';
import { d as ge } from './defined-CdKp_MB-.js';
import { u as dt } from './useIntersection-D52kaMEq.js';
import { Result as xe } from './Result-Dham3Ici.js';
import { R as ae } from './ResultTracker-D-Jc6Lj4.js';
import { l as Ve, R as Se } from './RecommendationProfileTracker-1483CJFp.js';
import { C as pt } from './Carousel-bRyEtExy.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './formatNumber-C6zKvI-v.js';
import './types-DqusP3LW.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './Image-C5uuJXju.js';
import './CalloutBadge-hFFhia-q.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-DUxc2ffg.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './names-Cka5BSlk.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-9eXTq04g.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './truncate-CqAvmyZI.js';
import './createImpressionObserver-B76-2cq4.js';
const Te = le((n) => {
		const l = Ce(),
			i = Be('bundleSelector', l, { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' }, n),
			{
				children: v,
				checked: h,
				icon: s,
				seedText: a,
				seed: d,
				hideCheckboxes: t,
				onCheck: u,
				title: o,
				className: C,
				internalClassName: g,
				treePath: b,
				classNamePrefix: m,
			} = i,
			y = b?.lastIndexOf(' '),
			R = y !== -1 ? b?.slice(0, y) : b,
			A = {
				icon: { name: 'bundle-selector', internalClassName: `${m}__wrapper__selector__icon`, size: 15, theme: i?.theme, treePath: R },
				checkbox: {
					internalClassName: `${m}__wrapper__selector__result-wrapper__checkbox`,
					checked: h,
					size: '18px',
					onClick: u,
					lang: { checkbox: { attributes: { 'aria-label': h ? `remove product from bundle ${o}` : `add product to bundle ${o}` } } },
					theme: i?.theme,
					treePath: R,
				},
			},
			G = z({}, i.lang || {}),
			W = Ne(G, {}, { activeBreakpoint: l?.activeBreakpoint });
		return $('div', {
			className: Q(`${m}__wrapper__selector`, h ? `${m}__wrapper__selector--selected` : '', a || d ? `${m}__wrapper__selector--seed` : '', C, g),
			children: [
				$('div', {
					className: `${m}__wrapper__selector__result-wrapper`,
					children: [
						!t && r(it, { ...A.checkbox }),
						a && r('div', { className: `${m}__wrapper__selector__result-wrapper__seed-badge`, ...W.seedText?.all }),
						v,
					],
				}),
				s ? r(ve, { ...A.icon, ...(typeof s == 'string' ? { icon: s } : s) }) : void 0,
			],
		});
	}),
	$e = le((n) => {
		const l = { ...n };
		l.onAddToCart = async (m) => {
			await n.onAddToCart(m), o(!0), setTimeout(() => o(!1), n.ctaButtonSuccessTimeout);
		};
		const { ctaSlot: w, cartStore: i, onAddToCart: v, ctaIcon: h, ctaButtonText: s, ctaButtonSuccessText: a, treePath: d, classNamePrefix: t } = l,
			[u, o] = ye(!1);
		l.addedToCart = u;
		const C = {
				icon: { name: 'bundle-cart', internalClassName: `${t}__wrapper__cta__icon`, size: 50, theme: l?.theme, treePath: d },
				subtotalStrike: { name: 'bundle-msrp', theme: l?.theme, treePath: d },
				subtotalPrice: { name: 'bundle-price', theme: l?.theme, treePath: d },
				button: { theme: l?.theme, treePath: d },
			},
			g = z({}, l.lang || {}),
			b = Ne(g, { cartStore: i }, { activeBreakpoint: l?.theme?.activeBreakpoint });
		return r('div', {
			className: `${t}__wrapper__cta`,
			children: w
				? ne(w, l)
				: $(J, {
						children: [
							$('div', {
								className: `${t}__wrapper__cta__subtotal`,
								'aria-atomic': 'false',
								'aria-live': 'polite',
								children: [
									h
										? r('div', {
												className: `${t}__wrapper__cta__subtotal__icon__wrapper`,
												children: r(ve, { ...C.icon, ...(typeof h == 'string' ? { icon: h } : h) }),
										  })
										: null,
									r('span', { className: `${t}__wrapper__cta__subtotal__title`, ...b.ctaSubtotalTitle?.all }),
									$('div', {
										className: `${t}__wrapper__cta__subtotal__prices`,
										children: [
											i.msrp && i.msrp !== i.price
												? $('label', {
														className: `${t}__wrapper__cta__subtotal__strike`,
														children: ['Was ', r(Pe, { ...C.subtotalStrike, lineThrough: !0, value: i.msrp })],
												  })
												: null,
											r('label', { className: `${t}__wrapper__cta__subtotal__price`, children: r(Pe, { ...C.subtotalPrice, value: i.price }) }),
										],
									}),
								],
							}),
							r(ct, {
								...C.button,
								internalClassName: Q(`${t}__wrapper__cta__button`, { [`${t}__wrapper__cta__button--added`]: u }),
								'aria-live': u,
								onClick: (m) => v(m),
								...(u ? b.ctaButtonSuccessText?.all : b.ctaButtonText?.all),
								children: u ? a : s,
							}),
						],
				  }),
		});
	}),
	_t = ({ vertical: n, separatorIcon: l, carousel: w, ctaInline: i, hasSeed: v, hideSeed: h, carouselEnabled: s, limit: a, alias: d }) => {
		let t = 'ss__recommendation-bundle';
		d && (t = `ss__${ke(d)}`);
		const u = w?.slidesPerView;
		return nt({
			...Ve,
			[`.${t}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
			[`.${t}__wrapper__selector--seed`]: { width: `${n ? '100%' : 'auto'}`, margin: `${l ? 'initial' : 'auto !important'}` },
			[`.${t}__wrapper__seed-container`]: { width: n ? '100%' : `calc(100% / ${u + (i ? 1 : 0)})` },
			[`.${t}__wrapper__cta`]: {
				width: n ? '100%' : `${i ? `calc(100% / ${(s ? u : a || 0) + 1})` : '100%'}`,
				textAlign: 'center',
				[`.${t}__wrapper__cta__subtotal__prices`]: { display: 'block' },
				[`.${t}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
			},
			[`.${t}__wrapper__carousel`]: {
				boxSizing: 'border-box',
				width: n ? '100%' : `calc(calc(100% / ${u + (i ? 1 : 0)}) * ${u - (v && !h ? 1 : 0)})`,
			},
			[`.${t}__wrapper--seed-in-carousel`]: {
				[`.${t}__wrapper__cta`]: { width: n ? '100%' : `calc(100% / ${w?.slidesPerView + (i ? 1 : 0)})` },
				[`.${t}__wrapper__carousel`]: {
					width: n ? '100%' : `calc(calc(100% / ${w?.slidesPerView + (i ? 1 : 0)}) * ${w?.slidesPerView})`,
					padding: '0',
				},
			},
			'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': { [`.${t}__wrapper__selector__icon`]: { display: 'none' } },
			'.swiper-slide-visible': { [`.${t}__wrapper__selector__icon`]: { display: 'block' } },
			[`.${t}__wrapper--vertical`]: { flexDirection: 'column' },
			[`.${t}__wrapper__selector`]: {
				alignItems: 'baseline',
				position: 'relative',
				[`&.${t}__wrapper__selector--last`]: { [`.${t}__wrapper__selector__icon`]: { display: 'none' } },
				[`.${t}__wrapper__selector__result-wrapper__seed-badge`]: { position: 'absolute', top: '0', left: '0', zIndex: '1' },
				[`.${t}__wrapper__selector__icon`]: { position: 'absolute', right: '-1em', top: '140px' },
				[`.${t}__wrapper__selector__result-wrapper`]: {
					alignItems: 'center',
					position: 'relative',
					margin: `0px ${5 + (Number(w?.spaceBetween) || 0)}px`,
				},
				[`.${t}__wrapper__selector__result-wrapper__checkbox`]: { position: 'absolute', top: '0', right: '0', zIndex: '101', cursor: 'pointer' },
			},
		});
	},
	ss = le((n) => {
		const l = Ce(),
			w = Ze(),
			v = {
				breakpoints: JSON.parse(
					JSON.stringify({
						0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10, ctaInline: !1 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
					})
				),
				hideCheckboxes: !1,
				separatorIcon: 'plus-thin',
				seedText: 'This Product',
				separatorIconSeedOnly: !0,
				ctaIcon: 'bag',
				ctaButtonText: 'Add All To Cart',
				ctaButtonSuccessText: 'Bundle Added!',
				ctaButtonSuccessTimeout: 2e3,
				ctaInline: !0,
				title: n.controller?.store?.profile?.display?.templateParameters?.title,
				description: n.controller?.store?.profile?.display?.templateParameters?.description,
				treePath: w,
			},
			h = { name: n.controller?.store?.profile?.tag?.toLowerCase(), ...n };
		let s = Be(h.alias || 'recommendationBundle', l, v, h),
			a = 'ss__recommendation-bundle';
		s.alias && (a = `ss__${ke(s.alias)}`);
		let d;
		if (!(n.theme?.type == 'templates' || l?.type == 'templates') && ((d = lt(s.breakpoints)), d && Object.keys(d).length)) {
			const e = z(s?.theme || {}, d?.theme || {}, { arrayMerge: (p, c) => c });
			s = { ...s, ...d, theme: e };
		}
		const {
				title: t,
				description: u,
				controller: o,
				breakpoints: C,
				results: g,
				carousel: b,
				preselectedCount: m,
				separatorIcon: y,
				hideCheckboxes: R,
				limit: A,
				seedText: G,
				vertical: W,
				onAddToCart: ie,
				separatorIconSeedOnly: ce,
				ctaSlot: de,
				hideSeed: F,
				ctaButtonText: H,
				ctaButtonSuccessText: K,
				ctaButtonSuccessTimeout: pe,
				disableStyles: U,
				ctaIcon: _e,
				ctaInline: X,
				hideSeedText: Ie,
				lazyRender: Re,
				className: Ae,
				internalClassName: Ge,
				alias: ze,
				style: ut,
				styleScript: mt,
				themeStyleScript: ht,
				treePath: B,
				...Oe
			} = s,
			O = s.resultComponent,
			Ee = et(),
			E = typeof O == 'string',
			je = E ? O : '',
			Le = Ee?.templates?.library.import.component.result || {},
			{ ComponentOverride: We, shouldWaitForNamedOverride: Y } = tt(Le, E ? je : void 0),
			j = E ? We : O,
			Z = { enabled: !0, offset: '10%', ...Re },
			L = { enabled: !0, loop: !1, spaceBetween: 10, ...b },
			{ seedInCarousel: N, prevButton: Fe, nextButton: qe, hideButtons: Me, loop: ue, spaceBetween: De, pagination: Je } = L,
			q = L.enabled;
		if (!o || o.type !== 'recommendation')
			throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
		let _ = g || o.store?.results;
		A && (_ = _.slice(0, F && _.filter((e) => e.bundleSeed == !0).length ? A + 1 : A));
		const f = o.store.cart;
		if (!f) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
		if (!(g && g.length) && !o.store?.results?.length) return o.log.error('<RecommendationBundle> Component has no results to render!'), null;
		const P = g ? g.filter((e) => e.bundleSeed == !0).pop() : o.store?.results?.filter((e) => e.bundleSeed == !0).pop(),
			Qe = ze == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
			ee = {
				carousel: { loop: ue, internalClassName: 'ss__recommendation__carousel', ...ge({ disableStyles: U }), theme: s?.theme, treePath: B },
				result: { internalClassName: 'ss__recommendation__result', ...Qe, ...ge({ disableStyles: U }), theme: s?.theme, treePath: B },
			},
			te = !!_.filter((e) => e.bundleSeed == !0).length;
		let k = s.carousel?.slidesPerView || s.slidesPerView;
		k ? _.length < Number(k) && (k = _.length) : (k = 2);
		const He = st({ ...s, carousel: { ...L, slidesPerView: k }, hasSeed: te, carouselEnabled: q }, _t),
			me = typeof m == 'number' ? m : q ? k : _.length;
		rt(() => {
			f.reset(),
				me &&
					_?.forEach((e, p) => {
						p < Number(me) && f.addItems([e]);
					});
		}, [_.length]);
		const V = f.items,
			se = { ...C };
		if (q) {
			const e = (p) => {
				const c = p?.slidesPerView || p.slidesPerView || 2,
					S = p?.slidesPerGroup || p.slidesPerGroup || 2;
				let T = c,
					I = S;
				const D = !te || N ? _.length : _.length - 1;
				return D && (D >= c ? ((T = c - (!N && te ? 1 : 0)), N || (I = S - 1 || 1)) : ((T = D), (I = D))), { slidesPerView: T, slidesPerGroup: I };
			};
			if (!(n.theme?.type == 'templates' || l?.type == 'templates'))
				Object.keys(s.breakpoints).forEach((p) => {
					const c = s.breakpoints[p],
						{ slidesPerView: S, slidesPerGroup: T } = e(c);
					se[p] = { ...se[p], slidesPerView: S, slidesPerGroup: T };
				});
			else {
				const { slidesPerView: p, slidesPerGroup: c } = e({ ...L, slidesPerView: k });
				d = { ...L, slidesPerView: p, slidesPerGroup: c };
			}
		}
		const M = (e) => {
				e && (V.findIndex((c) => c.id == e.id) > -1 ? (f.removeItems([e]), f.items.length == 0 && P && f.items.push(P)) : f.addItems([e]));
			},
			he = async (e) => {
				await o.addToCart(V), ie && (await ie(e, V));
			},
			Ke = () => {
				if (re.current) {
					const e = re.current?.base,
						S = we.current?.base?.querySelector(`.swiper-slide-visible .${a}__wrapper__selector`)?.offsetWidth;
					e && (e.style.width = `${S}px`);
				}
			},
			re = oe(),
			we = oe(),
			[Ue, Xe] = ye(!1),
			fe = oe(null);
		(!Z?.enabled || dt(fe, `${Z.offset} 0px ${Z.offset} 0px`, !0)) && Xe(!0);
		const Ye = {
				seedText: { value: G },
				ctaButtonText: { value: H },
				ctaButtonSuccessText: { value: K },
				ctaSubtotalTitle: { value: `Subtotal for ${f.count} items` },
			},
			x = z(Ye, s.lang || {}),
			be = ot(
				() =>
					_.map((e, p) => {
						const c = !!e.bundleSeed,
							S = V.findIndex((I) => I.id == e.id) > -1;
						let T = {
							onCheck: (I) => {
								I.stopPropagation(), M(e);
							},
							checked: S,
							hideCheckboxes: R,
							theme: s.theme,
							icon: ce ? !1 : y,
							className: p + 1 == _.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
							classNamePrefix: a,
							treePath: B,
						};
						return (
							c && (T = { ...T, seedText: G, seed: !0, icon: y, lang: { seedText: x.seedText } }),
							!c || ((N || b?.enabled == !1) && c && !F)
								? r(
										ae,
										{
											controller: o,
											result: e,
											track: { impression: !c },
											children: r(Te, {
												...T,
												children: j
													? ne(j, {
															controller: o,
															theme: E ? z(s.theme || {}, { components: { result: { customComponent: O } } }) : s.theme,
															treePath: B,
															result: e,
															seed: c,
															selected: S,
															onProductSelect: M,
													  })
													: Y
													? null
													: r(xe, { ...ee.result, controller: o, result: e }),
											}),
										},
										e.id
								  )
								: null
						);
					}),
				[_, V, R, ce, y, N, F, Y, j, s.theme, G]
			);
		return (
			Ie && delete x.seedText.value,
			_?.length
				? r(at, {
						children: r('div', {
							...He,
							style: U ? Ve : void 0,
							ref: fe,
							className: Q(a, { [`${a}--stacked`]: !X }, Ae, Ge),
							children: Ue
								? $(Se, {
										controller: o,
										children: [
											t && r('h3', { className: `${a}__title`, children: r('span', { children: t }) }),
											u && r('p', { className: 'ss__recommendation-bundle__description', children: r('span', { children: u }) }),
											$('div', {
												className: Q(`${a}__wrapper`, { [`${a}__wrapper--seed-in-carousel`]: N, [`${a}__wrapper--vertical`]: W }),
												children: [
													q
														? $(J, {
																children: [
																	!N &&
																		!F &&
																		P &&
																		r('div', {
																			className: `${a}__wrapper__seed-container`,
																			children: r(ae, {
																				controller: o,
																				result: P,
																				track: { impression: !1 },
																				children: r(Te, {
																					seedText: G,
																					seed: !0,
																					title: P.display.mappings.core?.name,
																					onCheck: (e) => {
																						e.stopPropagation(), M(P);
																					},
																					checked: V.findIndex((e) => e.id == P.id) > -1,
																					icon: y,
																					hideCheckboxes: R,
																					theme: s.theme,
																					ref: re,
																					treePath: B,
																					classNamePrefix: a,
																					lang: { seedText: x.seedText },
																					children:
																						j && o
																							? ne(j, {
																									controller: o,
																									seed: !0,
																									selected: V.findIndex((e) => e.id == P.id) > -1,
																									onProductSelect: M,
																									result: P,
																									treePath: B,
																									theme: E ? z(s.theme || {}, { components: { result: { customComponent: O } } }) : s.theme,
																							  })
																							: Y
																							? null
																							: r(xe, { ...ee.result, controller: o, result: P }),
																				}),
																			}),
																		}),
																	r('div', {
																		className: `${a}__wrapper__carousel`,
																		children: r(pt, {
																			prevButton: Fe,
																			nextButton: qe,
																			hideButtons: Me,
																			loop: ue,
																			spaceBetween: De,
																			pagination: Je,
																			breakpoints: se,
																			watchSlidesProgress: !0,
																			observer: !0,
																			vertical: W,
																			onResize: () => Ke(),
																			...ee.carousel,
																			...Oe,
																			...d,
																			ref: we,
																			children: be,
																		}),
																	}),
																],
														  })
														: r(J, { children: be }),
													X &&
														r($e, {
															ctaSlot: de,
															cartStore: f,
															onAddToCart: (e) => he(e),
															ctaButtonText: H,
															ctaButtonSuccessText: K,
															ctaButtonSuccessTimeout: pe,
															ctaIcon: _e,
															treePath: B,
															classNamePrefix: a,
															lang: {
																ctaButtonSuccessText: x.ctaButtonSuccessText,
																ctaButtonText: x.ctaButtonText,
																ctaSubtotalTitle: x.ctaSubtotalTitle,
															},
														}),
												],
											}),
											!X &&
												r($e, {
													ctaSlot: de,
													cartStore: f,
													onAddToCart: (e) => he(e),
													ctaButtonText: H,
													ctaButtonSuccessText: K,
													ctaButtonSuccessTimeout: pe,
													ctaIcon: _e,
													treePath: B,
													classNamePrefix: a,
													lang: {
														ctaButtonSuccessText: x.ctaButtonSuccessText,
														ctaButtonText: x.ctaButtonText,
														ctaSubtotalTitle: x.ctaSubtotalTitle,
													},
												}),
										],
								  })
								: r(Se, { controller: o, children: _.map((e) => r(ae, { controller: o, result: e, children: r(J, {}) })) }),
						}),
				  })
				: null
		);
	});
export { ss as RecommendationBundle };
