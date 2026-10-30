import { o as b, s as N, n as T, l as o, j as a, I as p, d as $, F as m, u as x, m as S, c as v, e as y } from './iframe-U9T2Y9ZS.js';
import { c as B } from './componentNameToClassName-btPHBToT.js';
import { u as C } from './useLang-Dx66cFD0.js';
import { I } from './Image-C5uuJXju.js';
import { P as h } from './Price-BlC0Ukx2.js';
import { B as k } from './Button-rwG4FGUK.js';
import { d as L } from './defined-CdKp_MB-.js';
import { RecommendationBundle as A } from './RecommendationBundle-Yp4uL5EJ.js';
const j = () =>
		y({
			'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
				display: 'flex',
				'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
				'.ss__result__details': { textAlign: 'left' },
			},
			'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
			'.ss__recommendation-bundle-list__wrapper': { order: '3' },
			'.ss__recommendation-bundle-list__wrapper__cta': {
				order: '2',
				'.ss__button': { cursor: 'pointer' },
				'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
				'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': { top: '50%', position: 'absolute', right: '-0.5em' },
				'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
				'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
			},
		}),
	d = 'recommendationBundleList',
	R = b((e) => {
		const r = x(),
			t = { name: e.controller?.store?.profile?.tag?.toLowerCase(), ...e },
			{ treePath: s, disableStyles: l, controller: _, style: u, styleScript: i, themeStyleScript: n, ...c } = t,
			f = {
				recommendationBundle: {
					seedText: '',
					ctaInline: !1,
					limit: 5,
					preselectedCount: 2,
					carousel: { enabled: !1, seedInCarousel: !0 },
					ctaSlot: (P) => a(z, { ...P }),
					vertical: !0,
					separatorIcon: !1,
					alias: d,
					...L({ disableStyles: l }),
					theme: t?.theme,
					treePath: s,
				},
			},
			w = S(d, r, {}, t),
			g = v(w, j);
		return a(A, { controller: _, ...g, ...f.recommendationBundle, ...c });
	}),
	z = b((e) => {
		const r = e.cartStore,
			t = `ss__${B(d)}`;
		e.onAddToCart = (n) => {
			l(!0), e.onAddToCart(n), setTimeout(() => l(!1), e.ctaButtonSuccessTimeout);
		};
		const [s, l] = N(!1);
		e.addedToCart = s;
		const _ = {
				image: { theme: e?.theme, treePath: e.treePath },
				separatorIcon: {
					name: 'bundle-cart-separator',
					className: `${t}__wrapper__cta__icon--separator`,
					icon: 'plus',
					size: 12,
					theme: e?.theme,
					treePath: e.treePath,
				},
				icon: { name: 'bundle-cart', className: `${t}__wrapper__cta__icon`, size: 50, theme: e?.theme, treePath: e.treePath },
				subtotalStrike: { name: 'bundle-msrp', className: `${t}__wrapper__cta__price--strike`, theme: e?.theme, treePath: e.treePath },
				subtotalPrice: { className: `${t}__wrapper__cta__price`, name: 'bundle-price', theme: e?.theme, treePath: e.treePath },
				button: { className: `${t}__wrapper__cta__button`, theme: e?.theme, treePath: e.treePath },
			},
			u = T({}, e.lang || {}),
			i = C(u, {}, { activeBreakpoint: e?.theme?.activeBreakpoint });
		return o(m, {
			children: [
				o('div', {
					className: `${t}__wrapper__cta__inner`,
					children: [
						a('div', {
							className: `${t}__wrapper__cta__inner__images`,
							children: r.items.map((n) => {
								const c = n.display.mappings.core;
								return o('div', {
									className: `${t}__wrapper__cta__inner__image-wrapper`,
									children: [
										a('a', { href: c.url, children: a(I, { src: c.thumbnailImageUrl, alt: c.name, lazy: !1 }) }),
										a(p, { ..._.separatorIcon }),
									],
								});
							}),
						}),
						o('div', {
							className: `${t}__wrapper__cta__subtotal`,
							'aria-atomic': 'false',
							'aria-live': 'polite',
							children: [
								e.ctaIcon
									? a('div', {
											className: `${t}__wrapper__cta__subtotal__icon__wrapper`,
											children: a(p, { ..._.icon, ...(typeof e.ctaIcon == 'string' ? { icon: e.ctaIcon } : e.ctaIcon) }),
									  })
									: a(m, {}),
								a('span', { className: `${t}__wrapper__cta__subtotal__title`, children: `Subtotal for ${r.count} items` }),
								o('div', {
									className: `${t}__wrapper__cta__subtotal__prices`,
									children: [
										r.msrp && r.msrp !== r.price
											? o('label', {
													className: `${t}__wrapper__cta__subtotal__strike`,
													children: ['Was ', a(h, { ..._.subtotalStrike, lineThrough: !0, value: r.msrp })],
											  })
											: a(m, {}),
										a('label', { className: `${t}__wrapper__cta__subtotal__price`, children: a(h, { ..._.subtotalPrice, value: r.price }) }),
									],
								}),
							],
						}),
					],
				}),
				a('div', {
					className: `${t}__cta__button__wrapper`,
					children: a(k, {
						..._.button,
						disabled: r.items.length == 0,
						disableStyles: !0,
						internalClassName: $(`${t}__cta__button`, { [`${t}__cta__button--added`]: s }),
						'aria-live': s,
						onClick: (n) => e.onAddToCart(n),
						...(s ? i.ctaButtonSuccessText?.all : i.ctaButtonText?.all),
						children: e.addedToCart ? e.ctaButtonSuccessText : e.ctaButtonText,
					}),
				}),
			],
		});
	}),
	G = Object.freeze(Object.defineProperty({ __proto__: null, RecommendationBundleList: R }, Symbol.toStringTag, { value: 'Module' }));
export { z as C, R, G as a };
