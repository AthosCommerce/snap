import {
	y as Q,
	j as s,
	o as Ee,
	u as Me,
	x as je,
	a as ze,
	s as de,
	A as j,
	m as Qe,
	b as $e,
	n as Ge,
	z as me,
	c as Ve,
	l as z,
	F as Ke,
	d as Ue,
	C as He,
	e as Je,
	v as Xe,
} from './iframe-CXSVAHru.js';
import { T as Ye } from './withTracking-DWvVsRqK.js';
import { c as Ze } from './createImpressionObserver-DI1SU3AN.js';
import { u as et } from './useLang-Dx66cFD0.js';
import { u as tt } from './useCreateController-CPUKSfyE.js';
import { d as g } from './defined-CdKp_MB-.js';
import { S as it } from './Slideshow-KsKNhuXs.js';
import { B as ee } from './Button-YZishUF-.js';
import { G as st } from './Gallery-Dx1OoM-4.js';
import { u as nt } from './useA11y-BuGQuOJb.js';
import { O as ot } from './OverlayBadge-D2AY0vGx.js';
import { C as at } from './CalloutBadge-CahbTmzQ.js';
import { P as rt } from './ProductDetail-CJRoGv0B.js';
import { V as pe } from './VariantSelection-C5HykCjo.js';
import { f as ct } from './fieldNameToComponentName-CjebIDZG.js';
import { Q as lt } from './QuantityPicker-BOhQIiR3.js';
import { P as ut } from './ProductDetailTable-CoNH0hDZ.js';
function _t({ controller: a, result: r, banner: u, type: l, content: d, track: _ }) {
	a || console.warn('Warning: No controller provided to useTracking'),
		r || console.warn('Warning: No result provided to useTracking'),
		!r && !u && (!l || !d) && console.warn('Warning: No result or banner provided to withTracking');
	const k = { impression: !0, click: !0, ..._ },
		{ ref: T, inViewport: b } = Ze(_?.options);
	return (
		Q(() => {
			b &&
				k.impression &&
				(l && d && !r && ['search', 'autocomplete'].includes(a?.type || '')
					? a?.track.banner.impression(d[l][0])
					: r?.bundleSeed || a?.track.product.impression(r || u));
		}, [b]),
		Q(() => {
			const y = T.current;
			if (y && k.click) {
				const $ = (c) => {
					l && d && !r && ['search', 'autocomplete'].includes(a?.type || '') ? a?.track.banner.click(c, d[l][0]) : a?.track.product.click(c, r || u);
				};
				return (
					y.setAttribute(Ye, 'true'),
					y.addEventListener('click', $),
					() => {
						y.removeEventListener('click', $);
					}
				);
			}
		}, [a, r, u, l, d, k.click, k.impression]),
		{ trackingRef: T }
	);
}
const dt = ({ column1: a, column2: r, column3: u, column4: l }) =>
		Je({
			'& .ss__quickview__content': {
				padding: '48px 20px 20px 20px',
				minWidth: '320px',
				maxWidth: '600px',
				position: 'relative',
				boxSizing: 'border-box',
			},
			'& .ss__quickview__row': {
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'flex-start',
				gap: '24px',
				'& > *': { minWidth: 0, maxWidth: '100%' },
			},
			'& .ss__quickview__column': { display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0, flex: '1 1 100%', maxWidth: '100%' },
			'& .ss__quickview__column.ss__quickview__column--c1': { alignContent: a?.alignContent },
			'& .ss__quickview__column.ss__quickview__column--c2': { alignContent: r?.alignContent },
			'& .ss__quickview__column.ss__quickview__column--c3': { alignContent: u?.alignContent },
			'& .ss__quickview__column.ss__quickview__column--c4': { alignContent: l?.alignContent },
			'& .ss__quickview__column:empty, & .ss__quickview__row:empty': { display: 'none' },
			'& .ss__quickview__separator': { flexGrow: 1, flexShrink: 1 },
			'& .ss__quickview__slideshow': { marginBottom: 0 },
			'& .ss__quickview__title': { fontSize: '1.4em', paddingRight: '32px' },
			'& .ss__quickview__variant': { marginBottom: '12px', '& .ss__slideshow__track--centered': { justifyContent: 'flex-start' } },
			'& .ss__quickview__variant-title': { marginBottom: '6px', fontWeight: 600 },
			'& .ss__quickview__image': {
				display: 'block',
				maxWidth: '100%',
				marginBottom: '12px',
				cursor: 'zoom-in',
				'& img': { display: 'block', maxWidth: '100%' },
			},
			'& .ss__quickview__carousel': {
				'& .ss__slideshow__slide img': { objectFit: 'contain', height: 'auto' },
				'& .ss__slideshow__slide--clickable': { cursor: 'zoom-in' },
				'& .ss__slideshow__navigation .ss__button': { boxSizing: 'content-box', width: 'auto' },
			},
			'& .ss__quickview__variants': { display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' },
			'& .ss__quickview__description': { lineHeight: 1.4 },
			'& .ss__quickview__close': {
				position: 'absolute',
				top: '12px',
				right: '12px',
				background: 'transparent',
				border: 'none',
				fontSize: '1.4em',
				cursor: 'pointer',
				lineHeight: 1,
				zIndex: 1,
			},
			'& .ss__quickview__loading': { padding: '40px', textAlign: 'center', minWidth: '200px' },
			'& .ss__quickview__error': { padding: '40px', textAlign: 'center', minWidth: '200px', color: '#b00020' },
			'@media (min-width: 768px)': {
				'& .ss__quickview__content': { maxWidth: '880px' },
				'& .ss__quickview__column.ss__quickview__column--c1': {
					flex: a?.width == 'auto' ? '1 1 0' : `1 1 ${a?.width}`,
					maxWidth: a?.width == 'auto' ? 'none' : a?.width,
				},
				'& .ss__quickview__column.ss__quickview__column--c2': {
					flex: r?.width == 'auto' ? '1 1 0' : `1 1 ${r?.width}`,
					maxWidth: r?.width == 'auto' ? 'none' : r?.width,
				},
				'& .ss__quickview__column.ss__quickview__column--c3': {
					flex: u?.width == 'auto' ? '1 1 0' : `1 1 ${u?.width}`,
					maxWidth: u?.width == 'auto' ? 'none' : u?.width,
				},
				'& .ss__quickview__column.ss__quickview__column--c4': {
					flex: l?.width == 'auto' ? '1 1 0' : `1 1 ${l?.width}`,
					maxWidth: l?.width == 'auto' ? 'none' : l?.width,
				},
			},
		}),
	mt = (a) => (Array.isArray(a) || Xe(a) ? Array.from(a).filter((r) => typeof r == 'string' && r.length > 0) : []),
	pt = (a, r) => {
		const u = new Set(),
			l = new Set(),
			d = (_) => {
				typeof _ == 'string'
					? _.startsWith('recommendation.')
						? u.add(_.slice(15))
						: _ in r && !l.has(_) && (l.add(_), d(r[_]))
					: Array.isArray(_) && _.forEach(d);
			};
		return d(a), Array.from(u).sort();
	},
	It = ({ quickviewManager: a, product: r, children: u }) => {
		const { trackingRef: l } = _t({ controller: a, result: r, track: { click: !1, options: { threshold: 0 } } });
		return s('div', { className: 'ss__quickview__tracker', ref: l, children: u });
	},
	Pt = Ee((a) => {
		const r = Me(),
			u = je(),
			l = ze(),
			[d, _] = de(!1),
			[k, T] = de(0),
			b = j(!1);
		b.current = d;
		const y = (e) => {
				T(e), _(!0);
			},
			c = Qe('quickviewLayout', r, { treePath: l, hideBadge: !1 }, a),
			{
				quickviewManager: p,
				className: fe,
				internalClassName: he,
				disableStyles: h,
				treePath: v,
				hideBadge: ve,
				column1: W,
				column2: R,
				column3: S,
				column4: I,
				recommendation: G,
			} = c,
			{ overrideElement: ge, shouldRenderDefault: N } = $e('quickview', c),
			P = Ge(
				{
					quickview: { attributes: { 'aria-label': 'Quickview' } },
					closeButton: { attributes: { 'aria-label': 'Close quickview' } },
					addToCartButton: { value: 'Add to Cart' },
					moreInfoButton: { value: 'More info' },
					loadingText: { value: 'Loading…' },
				},
				c.lang || {}
			),
			te = et(P, { quickviewManager: p }),
			n = p?.store?.product,
			q = n?.display?.mappings?.core || n?.mappings?.core,
			C = q?.imageUrl || q?.thumbnailImageUrl,
			L = p?.store?.resolvedConfig?.imagesField,
			we = L ? (Array.isArray(L) ? L : [L]) : ['images', 'ss_images'],
			ke = q,
			ye = n?.display?.attributes || n?.attributes || {},
			B = n?.variants?.active,
			qe = B?.mappings?.core,
			Ce = B?.attributes || {},
			ie = (e, f) => {
				for (const t of we) {
					const i = mt(e?.[t] ?? f?.[t]);
					if (i.length > 1) return i;
				}
				return [];
			},
			se = B ? ie(qe, Ce) : [],
			xe = ie(ke, ye),
			O = B ? (se.length > 1 ? se : []) : xe,
			V = O.length > 1;
		let ne = 0;
		if (B && V && C) {
			const e = O.indexOf(C);
			e >= 0 && (ne = e);
		}
		Q(() => {
			const e = !!p?.store?.isOpen;
			if (!N || !e) return;
			const f = (t) => {
				t.key === 'Escape' && !d && p.close();
			};
			return window.addEventListener('keydown', f), () => window.removeEventListener('keydown', f);
		}, [N, p?.store?.isOpen, d]);
		const F = j(pt(c.layout, { c1: W?.layout, c2: R?.layout, c3: S?.layout, c4: I?.layout })).current,
			D = new Map(),
			E = u,
			K = j(!!E?.templates).current,
			oe = F.length > 0,
			be = K && oe ? G?.component || 'Recommendation' : void 0,
			Ne = K && oe ? G?.resultComponent || 'Result' : void 0,
			Be = me(E?.templates?.library.import.component.result || {}, Ne).ComponentOverride,
			Ae = me(E?.templates?.library.import.component.recommendation.default || {}, be).ComponentOverride;
		for (const e of F) {
			const f = Object.assign({ id: '', tag: e, branch: 'production' }, G?.config);
			(f.tag = e), (f.id = f.id || `quickview-${e}`);
			const t = K ? tt(E, 'recommendation', f) : void 0;
			D.set(e, { Component: Ae, ResultComponent: Be, recsController: t });
		}
		const A = q?.parentId || n?.id,
			Te = F.map((e) => (D.get(e)?.recsController ? e : '')).join(','),
			ae = j(new Map());
		if (
			(Q(() => {
				!N ||
					!A ||
					D.forEach(({ recsController: e }) => {
						e &&
							ae.current.get(e.config.id) !== A &&
							(ae.current.set(e.config.id, A), (e.config.globals = { ...e.config.globals, products: [A] }), e.search());
					});
			}, [N, A, F.join(','), Te]),
			!N)
		)
			return ge;
		const We = Ve(c, dt);
		if (!p)
			return console.warn('[QuickviewLayout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null;
		const U = p.store,
			re = !!U.loading,
			H = U.resolvedConfig?.displayFields,
			Re = typeof H == 'function' ? (n ? H(n) : void 0) : H,
			J = U.error,
			Se = p.sourceController?.store.meta?.data?.facets,
			Ie = (e) => Se?.[e]?.label || e,
			ce = () => {
				p.close(), c.onClose && c.onClose();
			},
			Pe = () => {
				b.current ? _(!1) : ce();
			},
			Le = { className: 'ss__quickview__content', role: 'dialog', 'aria-modal': 'true', ref: (e) => nt(e, 0, !0, Pe), ...te.quickview?.attributes },
			le = q?.name,
			ue = q?.url,
			M = n?.variants?.selections,
			Oe = V ? O : C ? [C] : [],
			X = V ? O : C ? [C] : [],
			_e = X.length === 1,
			Y =
				X.length > 0
					? s(it, {
							className: 'ss__quickview__carousel',
							startIndex: ne,
							slidesToShow: 1,
							slidesToMove: 1,
							showNavigation: !_e,
							overlayNavigation: !0,
							showPagination: !_e,
							loop: !1,
							slides: X.map((e, f) => ({ src: e, alt: le || '', onClick: () => y(f) })),
							theme: c.theme,
							treePath: v,
							...g({ disableStyles: h }),
					  })
					: null,
			x = (e, f) => {
				if (typeof e != 'string') {
					const t = e.map((m) => x(m, f));
					return e.some((m, o) => m !== '_' && t[o])
						? s('div', { className: `ss__quickview__row ss__quickview__row--${f.value++}`, children: t })
						: null;
				}
				if (e == 'c1' && W?.layout?.length) {
					const t = { value: 0 },
						i = W.layout.map((o) => x(o, t));
					return W.layout.some((o, w) => (Array.isArray(o) || o !== '_') && !!i[w])
						? s('div', { className: 'ss__quickview__column ss__quickview__column--c1', children: i })
						: null;
				}
				if (e == 'c2' && R?.layout?.length) {
					const t = { value: 0 },
						i = R.layout.map((o) => x(o, t));
					return R.layout.some((o, w) => (Array.isArray(o) || o !== '_') && !!i[w])
						? s('div', { className: 'ss__quickview__column ss__quickview__column--c2', children: i })
						: null;
				}
				if (e == 'c3' && S?.layout?.length) {
					const t = { value: 0 },
						i = S.layout.map((o) => x(o, t));
					return S.layout.some((o, w) => (Array.isArray(o) || o !== '_') && !!i[w])
						? s('div', { className: 'ss__quickview__column ss__quickview__column--c3', children: i })
						: null;
				}
				if (e == 'c4' && I?.layout?.length) {
					const t = { value: 0 },
						i = I.layout.map((o) => x(o, t));
					return I.layout.some((o, w) => (Array.isArray(o) || o !== '_') && !!i[w])
						? s('div', { className: 'ss__quickview__column ss__quickview__column--c4', children: i })
						: null;
				}
				if (e == 'slideshow')
					return !Y || !n
						? null
						: s('div', {
								className: 'ss__quickview__slideshow',
								children: ve
									? Y
									: s(ot, { result: n, controller: p.sourceController, theme: c.theme, treePath: v, ...g({ disableStyles: h }), children: Y }),
						  });
				if (e == 'calloutBadge' || e.startsWith('calloutBadge.')) {
					if (!n) return null;
					const t = e.startsWith('calloutBadge.') ? e.slice(13) : void 0;
					return s(at, { result: n, theme: c.theme, treePath: v, ...g({ disableStyles: h, tag: t }) });
				}
				if (e.startsWith('productDetail.')) {
					const t = e.slice(14),
						i = t.split('.').pop() || '';
					if (!t || !n) return null;
					const m = i === 'name' ? 'ss__quickview__title' : i === 'description' ? 'ss__quickview__description' : `ss__quickview__${i}`;
					return s(rt, { result: n, field: t, html: i === 'description', className: m, theme: c.theme, treePath: v, ...g({ disableStyles: h }) });
				}
				if (e == 'variantSelections')
					return !M || M.length === 0
						? null
						: s('div', {
								className: 'ss__quickview__variants',
								children: M.map((t) =>
									z(
										'div',
										{
											className: 'ss__quickview__variant',
											children: [
												s('div', { className: 'ss__quickview__variant-title', children: t.label || t.field }),
												s(pe, { selection: t, type: t.type, theme: c.theme, treePath: v, ...g({ disableStyles: h }) }),
											],
										},
										t.field
									)
								),
						  });
				if (e.startsWith('variantSelection.')) {
					const t = e.slice(17),
						i = M?.find((m) => m.field === t || ct(m.field) === t);
					return !t || !i
						? null
						: z('div', {
								className: 'ss__quickview__variant',
								children: [
									s('div', { className: 'ss__quickview__variant-title', children: i.label || i.field }),
									s(pe, { selection: i, type: i.type, theme: c.theme, treePath: v, ...g({ disableStyles: h }) }),
								],
						  });
				}
				if (e == 'button.add-to-cart')
					return n
						? s(ee, {
								name: 'add-to-cart',
								internalClassName: 'ss__quickview__add-to-cart',
								lang: { button: P.addToCartButton },
								onClick: () => n && p.addToCart([n]),
								theme: c.theme,
								treePath: v,
								...g({ disableStyles: h }),
						  })
						: null;
				if (e == 'button.more-info')
					return ue
						? s(ee, {
								name: 'more-info',
								internalClassName: 'ss__quickview__go-to-product',
								lang: { button: P.moreInfoButton },
								onClick: (t) => {
									n && p.track.product.clickThrough(t, n), (window.location.href = ue);
								},
								theme: c.theme,
								treePath: v,
								...g({ disableStyles: h }),
						  })
						: null;
				if (e == 'quantityPicker')
					return n
						? s(lt, {
								internalClassName: 'ss__quickview__quantity-picker',
								value: n.quantity,
								onChange: (t, i) => (n.quantity = i),
								theme: c.theme,
								treePath: v,
								...g({ disableStyles: h }),
						  })
						: null;
				if (e == 'productDetailTable') {
					if (!n) return null;
					const t = (Re || []).map((i) => ({ ...i, label: i.label ?? Ie(i.field) }));
					return s(ut, {
						result: n,
						displayFields: t,
						className: 'ss__quickview__attributes',
						theme: c.theme,
						treePath: v,
						...g({ disableStyles: h }),
					});
				}
				if (e.startsWith('recommendation.')) {
					const t = e.slice(15),
						i = D.get(t),
						m = i?.Component,
						o = i?.recsController;
					return !m || !o?.store?.loaded
						? null
						: s('div', {
								className: 'ss__quickview__recommendations',
								children: s(m, {
									controller: o,
									title: o.store?.profile?.display?.templateParameters?.title,
									resultComponent: i?.ResultComponent,
									name: t,
								}),
						  });
				}
				return e == '_' ? s('div', { className: 'ss__quickview__separator' }) : null;
			};
		let Z = c.layout;
		typeof Z == 'string' && (p.sourceController?.log.warn(`unsupported layout found. ${c.layout}`), (Z = []));
		const Fe = { value: 0 },
			De = s(ee, {
				name: 'close',
				internalClassName: 'ss__quickview__close',
				icon: 'close-thin',
				lang: { button: P.closeButton },
				onClick: () => ce(),
				theme: c.theme,
				treePath: v,
				...g({ disableStyles: h }),
			});
		return s(He, {
			children: s('div', {
				...We,
				className: Ue('ss__quickview', fe, he),
				children:
					J || re || n
						? z('div', {
								...Le,
								children: [
									De,
									J
										? s('div', { className: 'ss__quickview__error', role: 'alert', children: J.message })
										: re
										? s('div', { className: 'ss__quickview__loading', ...te.loadingText?.all })
										: z(Ke, {
												children: [
													Z?.map((e) => x(e, Fe)),
													s(st, {
														images: Oe,
														open: d,
														startIndex: k,
														onClose: () => _(!1),
														alt: le,
														theme: c.theme,
														treePath: v,
														...g({ disableStyles: h }),
													}),
												],
										  }),
								],
						  })
						: null,
			}),
		});
	});
export { It as Q, Pt as a, _t as u };
