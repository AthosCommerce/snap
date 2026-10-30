import {
	o as R,
	u as U,
	a as V,
	m as E,
	n as O,
	b as $,
	c as z,
	s as M,
	D as W,
	j as l,
	l as q,
	d as h,
	C as F,
	e as H,
	G as J,
} from './iframe-U9T2Y9ZS.js';
import { e as K } from './names-Cka5BSlk.js';
import { u as Q } from './useDisplaySettings-9sk5Dt1c.js';
import { d as w } from './defined-CdKp_MB-.js';
import { I as X } from './Image-C5uuJXju.js';
import { S as Y } from './Slideshow-DqC6sQhv.js';
import { G as Z } from './Grid-D_Po4riX.js';
import { u as ss } from './useA11y-BuGQuOJb.js';
import { h as es } from './handleize-xLHhB8k5.js';
J([K]);
const as = ({ theme: r }) =>
		H({
			'.ss__swatches__slideshow__swatch': {
				boxSizing: 'content-box',
				cursor: 'pointer',
				backgroundRepeat: 'no-repeat',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				border: `1px solid ${r?.variables?.colors?.primary || '#333'}`,
				aspectRatio: '1/1',
				flexDirection: 'column',
				'.ss__swatches__slideshow__swatch__inner': {
					aspectRatio: '1/1',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				},
				'&.ss__swatches__slideshow__swatch--selected': { border: `2px solid ${r?.variables?.colors?.primary || '#333'}` },
				'&.ss__swatches__slideshow__swatch--disabled:before, &.ss__swatches__slideshow__swatch--unavailable:before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					top: '50%',
					width: '90%',
					height: '1px',
					borderTop: '3px solid #eee',
					outline: '1px solid #ffff',
					transform: 'rotate(-45deg)',
				},
				'&.ss__swatches__slideshow__swatch--disabled': { position: 'relative', cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
				'&.ss__swatches__slideshow__swatch--unavailable': { cursor: 'pointer', opacity: 0.5 },
				'&.ss__swatches__slideshow__swatch--dark': { color: '#fff' },
			},
		}),
	ws = R((r) => {
		const P = U(),
			C = V(),
			x = {
				0: { carousel: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 } },
				768: { carousel: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 } },
				1200: { carousel: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 } },
			};
		let e = E('swatches', P, { type: 'slideshow', hideLabels: !0, treePath: C }, r);
		const u = e.breakpoints || (e.type == 'slideshow' ? x : {}),
			o = Q(u);
		if (o && Object.keys(o).length) {
			const s = O(e?.theme || {}, o?.theme || {}, { arrayMerge: (a, c) => c });
			e = { ...e, ...o, theme: s };
		}
		const {
				onSelect: m,
				disabled: b,
				options: i,
				hideLabels: f,
				disableStyles: d,
				className: N,
				internalClassName: I,
				type: g,
				slideshow: j,
				grid: D,
				treePath: _,
			} = e,
			{ overrideElement: G, shouldRenderDefault: T } = $('swatches', e);
		if (!T) return G;
		const n = {
				slideshow: {
					internalClassName: 'ss__swatches__slideshow',
					loop: !1,
					slideWidth: 20,
					slidesToMove: 1,
					gap: 8,
					showNavigation: !0,
					showPagination: !1,
					autoPlay: !1,
					...j,
					...w({ breakpoints: u, disableStyles: d }),
					theme: e?.theme,
					treePath: _,
				},
				grid: {
					internalClassName: 'ss__swatches__grid',
					hideLabels: f,
					overflowButtonInGrid: !0,
					disableOverflowAction: !0,
					rows: 1,
					columns: 6,
					...D,
					...w({ disableStyles: d }),
					theme: e?.theme,
					treePath: _,
				},
				image: { internalClassName: 'ss__swatches__image', ...w({ disableStyles: d }), theme: e?.theme, treePath: _ },
			},
			p = e.selected,
			A = z(e, as),
			[B, L] = M(p || void 0),
			v = (s, a) => {
				m && m(s, a), L(a);
			},
			y = [];
		return (
			g == 'slideshow' &&
				i.forEach((s) => {
					const a = s.label,
						c = B?.value == s.value;
					let k = !1;
					const S = s.background?.toLowerCase() || (s.backgroundImageUrl ? null : s.value?.toString().toLowerCase());
					if (S)
						try {
							const t = W(S);
							t.isValid() && (k = t.isDark());
						} catch {}
					y.push({
						onClick: (t) => !b && !s?.disabled && v(t, s),
						content: l('div', {
							className: h('ss__swatches__slideshow__swatch', {
								'ss__swatches__slideshow__swatch--selected': c,
								'ss__swatches__slideshow__swatch--disabled': s?.disabled,
								'ss__swatches__slideshow__swatch--unavailable': s?.available === !1,
								'ss__swatches__slideshow__swatch--dark': k,
							}),
							title: a,
							ref: (t) => ss(t),
							'aria-disabled': s.disabled || s?.available === !1,
							role: 'option',
							'aria-selected': c,
							children: q('div', {
								className: h('ss__swatches__slideshow__swatch__inner', `ss__swatches__slideshow__swatch__inner--${es(s.value?.toString())}`),
								style: { background: s.background ? s.background : s.backgroundImageUrl ? '' : s.value },
								children: [
									!s.background && s.backgroundImageUrl ? l(X, { ...n.image, src: s.backgroundImageUrl, alt: s.label || s.value?.toString() }) : null,
									!f && l('span', { className: 'ss__swatches__slideshow__swatch__value', children: a || s.value }),
								],
							}),
						}),
					});
				}),
			typeof i == 'object' && i?.length
				? l(F, {
						children: l('div', {
							...A,
							className: h('ss__swatches', N, I),
							children:
								g == 'slideshow'
									? l(Y, { slides: y, ...n.slideshow })
									: l(Z, {
											...n.grid,
											options: i,
											onSelect: (s, a) => {
												!b && v(s, a);
											},
											selected: p,
									  }),
						}),
				  })
				: null
		);
	});
export { ws as S };
