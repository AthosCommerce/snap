import {
	o as z,
	u as M,
	a as U,
	m as W,
	b as G,
	c as H,
	j as s,
	n as V,
	D as q,
	l as g,
	I as J,
	d as b,
	C as K,
	e as Q,
	G as X,
} from './iframe-Bc4KSH0T.js';
import { e as Y } from './names-Cka5BSlk.js';
import { d as x } from './defined-CdKp_MB-.js';
import { u as Z } from './useLang-Dx66cFD0.js';
import { C as ee } from './Checkbox-4N2aMGfq.js';
import { I as te } from './Image-9Pub_w4s.js';
import { c as oe } from './createHoverProps-B_zlUBHN.js';
import { h as ae } from './handleize-xLHhB8k5.js';
X([Y]);
const se = ({ columns: t, gridSize: n, gapSize: i, horizontal: p, theme: o }) =>
		Q({
			display: 'flex',
			flexFlow: 'row wrap',
			gridTemplateColumns: t ? `repeat(${t}, calc((100% - (${t - 1} * ${i}))/ ${t}))` : `repeat(auto-fill, minmax(${n}, 1fr))`,
			gap: i,
			'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
			'.ss__facet-palette-options__option': {
				width: `calc(100% / ${t} - ${2 * Math.round((t + 2) / 2)}px )`,
				marginRight: i,
				marginBottom: i,
				[`:nth-of-type(${t}n)`]: { marginRight: '0' },
				'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '100%', padding: '2px' },
				'.ss__facet-palette-options__option__palette': {
					paddingTop: 'calc(100% - 2px)',
					border: '1px solid #EBEBEB',
					borderRadius: '100%',
					position: 'relative',
					'.ss__facet-palette-options__icon': {
						position: 'absolute',
						top: 0,
						right: 0,
						left: 0,
						margin: 'auto',
						bottom: 0,
						textAlign: 'center',
						stroke: 'black',
						strokeWidth: '3px',
						strokeLinejoin: 'round',
						opacity: 0,
					},
					'&.ss__facet-palette-options__option__palette--image': { paddingTop: '0', height: 'auto' },
				},
				'.ss__facet-palette-options__option__value': {
					display: 'block',
					textAlign: 'center',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				},
			},
			'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
			'&.ss__facet-palette-options--list': {
				display: 'flex',
				flexDirection: p ? 'row' : 'column',
				'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
				'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
				'.ss__facet-palette-options__option--list': { alignItems: 'center' },
				'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
				'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
			},
			'&.ss__facet-palette-options--grid': {
				'.ss__facet-palette-options__checkbox': { display: 'flex', textAlign: 'center', overflow: 'hidden', margin: 'auto', marginBottom: '5px' },
				'.ss__facet-palette-options__option--filtered': {
					'.ss__facet-palette-options__option__wrapper': {
						borderColor: o?.variables?.colors?.primary || '#333 !important',
						padding: '0px',
						borderWidth: '4px',
					},
				},
				'.ss__facet-palette-options__option': {
					'&:hover': {
						cursor: 'pointer',
						'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
						'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
					},
				},
			},
			'.ss__facet-palette-options__option__value__count': {
				fontSize: '0.8em',
				display: 'block',
				textAlign: 'center',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},
		}),
	fe = z((t) => {
		const n = M(),
			i = U(),
			p = { columns: 4, layout: 'grid', gridSize: '45px', gapSize: t.layout == 'list' ? '2px' : '8px', hideCount: !0, hideCheckbox: !0, treePath: i },
			o = W('facetPaletteOptions', n, p, t),
			{
				values: $,
				hideLabel: u,
				layout: _,
				hideCount: P,
				hideCheckbox: N,
				colorMapping: w,
				hideIcon: O,
				onClick: C,
				previewOnFocus: B,
				valueProps: v,
				facet: r,
				horizontal: I,
				disableStyles: c,
				className: E,
				internalClassName: D,
				treePath: d,
			} = o,
			{ overrideElement: T, shouldRenderDefault: j } = G('facetPaletteOptions', o);
		if (!j) return T;
		I && (o.columns = 0);
		const f = {
				icon: {
					internalClassName: 'ss__facet-palette-options__icon',
					...x({ disableStyles: c, icon: 'close-thin', color: 'white', size: '40%' }),
					theme: o?.theme,
					treePath: d,
				},
				image: { internalClassName: 'ss__facet-palette-options__image', ...x({ disableStyles: c }), theme: o?.theme, treePath: d },
				checkbox: { internalClassName: 'ss__facet-palette-options__checkbox', ...x({ disableStyles: c }), theme: o?.theme, treePath: d },
			},
			A = H(o, se),
			k = $ || r?.values;
		return k?.length
			? s(K, {
					children: s('div', {
						...A,
						className: b('ss__facet-palette-options', `ss__facet-palette-options--${_?.toLowerCase()}`, E, D),
						children: k.map((e) => {
							const R = {
									paletteOption: {
										attributes: {
											'aria-label': `${
												e.filtered
													? `remove selected filter ${r?.label || ''} - ${e.label}`
													: r?.label
													? `filter by ${r?.label} - ${e.label}`
													: `filter by ${e.label}`
											}`,
										},
									},
								},
								S = V(R, o.lang || {}),
								y = Z(S, { facet: r, value: e }, { activeBreakpoint: n?.activeBreakpoint });
							let a;
							w && (a = Object.fromEntries(Object.entries(w).map(([l, F]) => [l.toLowerCase(), F])));
							const m = a && a[e.label.toLowerCase()] && a[e.label.toLowerCase()].background ? a[e.label.toLowerCase()].background : e.value,
								h =
									a && a[e.label.toLowerCase()] && a[e.label.toLowerCase()].backgroundImageUrl ? a[e.label.toLowerCase()].backgroundImageUrl : void 0;
							let L = !1;
							if (m)
								try {
									L = q(m.toLowerCase()).isDark();
								} catch {}
							return g(
								'a',
								{
									className: b(
										'ss__facet-palette-options__option',
										{ 'ss__facet-palette-options__option--filtered': e.filtered },
										{ 'ss__facet-palette-options__option--dark': L },
										`ss__facet-palette-options__option--${_?.toLowerCase()}`
									),
									href: e.url?.link?.href,
									...(u ? { title: e.label } : {}),
									...v,
									onClick: (l) => {
										e.url?.link?.onClick(l), C && C(l);
									},
									'aria-atomic': 'false',
									...(B ? oe(() => e?.preview && e.preview()) : {}),
									...y.paletteOption?.all,
									children: [
										!N && s(ee, { ...f.checkbox, checked: e.filtered, disableA11y: !0, ...y.paletteOption.attributes }),
										s('div', {
											className: 'ss__facet-palette-options__option__wrapper',
											children: g('div', {
												className: b('ss__facet-palette-options__option__palette', `ss__facet-palette-options__option__palette--${ae(e.value)}`, {
													'ss__facet-palette-options__option__palette--image': h,
												}),
												style: { background: m },
												children: [
													h ? s(te, { ...f.image, src: h, alt: e.label || e.value.toString() }) : null,
													!O && e.filtered && _?.toLowerCase() == 'grid' && s(J, { ...f.icon }),
												],
											}),
										}),
										!u &&
											s('span', { className: 'ss__facet-palette-options__option__value', children: a?.[e.label.toLowerCase()]?.label ?? e.label }),
										!P && e?.count > 0 && g('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', e.count, ')'] }),
									],
								},
								e.value
							);
						}),
					}),
			  })
			: null;
	});
export { fe as F };
