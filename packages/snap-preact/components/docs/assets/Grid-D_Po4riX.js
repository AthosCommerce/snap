import {
	o as Q,
	u as X,
	a as Y,
	m as Z,
	b as ee,
	c as se,
	s as x,
	j as t,
	l as y,
	D as re,
	d as k,
	C as ae,
	n as te,
	p as ie,
	G as le,
	e as oe,
} from './iframe-U9T2Y9ZS.js';
import { e as ne } from './names-Cka5BSlk.js';
import { d as de } from './defined-CdKp_MB-.js';
import { s as A } from './selectionKey-CmN2KTR5.js';
import { I as _e } from './Image-C5uuJXju.js';
import { u as R } from './useA11y-BuGQuOJb.js';
import { u as ce } from './useLang-Dx66cFD0.js';
import { h as ge } from './handleize-xLHhB8k5.js';
le([ne]);
const ue = ({ gapSize: m, columns: i, theme: b, disableOverflowAction: v }) =>
		oe({
			'.ss__grid__options': {
				display: 'flex',
				flexFlow: 'row wrap',
				gridTemplateColumns: `repeat(${i}, 1fr)`,
				gap: m,
				gridAutoRows: '1fr',
				'.ss__grid__option': {
					display: 'flex',
					flexDirection: 'column',
					boxSizing: 'content-box',
					backgroundRepeat: 'no-repeat',
					backgroundSize: `calc(100% / ${i} - ${2 * Math.round((i + 2) / 2)}px)`,
					backgroundPosition: 'center !important',
					justifyContent: 'center',
					alignItems: 'center',
					flex: '0 1 auto',
					border: `1px solid ${b?.variables?.colors?.primary || '#333'}`,
					textAlign: 'center',
					wordBreak: 'break-all',
					padding: '1em 0',
					width: `calc(100% / ${i} - ${2 * Math.round((i + 2) / 2)}px)`,
					margin: `0 ${m} ${m} 0`,
					'.ss__grid__option__inner': {
						aspectRatio: '1/1',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						margin: 'auto',
						height: '100%',
						'.ss__image': { aspectRatio: '1/1' },
					},
					'.ss__grid__option__label': { cursor: 'pointer' },
					[`:nth-of-type(${i}n)`]: { marginRight: '0' },
					'&.ss__grid__option--selected': { border: `2px solid ${b?.variables?.colors?.primary || '#333'}` },
					'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
					'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
					'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
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
					'&.ss__grid__option--dark': { color: '#fff' },
					'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
				},
				'@supports (display: grid)': {
					display: 'grid',
					'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
					'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
					'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
				},
			},
			'.ss__grid__show-more-wrapper': {
				'&:not(.ss__grid__option)': { margin: '8px' },
				'&:hover': { cursor: v ? 'initial !important' : 'pointer !important' },
			},
		}),
	ye = Q((m) => {
		const i = X(),
			v = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: Y() },
			g = Z('grid', i, v, m),
			{
				titleText: S,
				onSelect: p,
				hideLabels: M,
				disableOverflowAction: C,
				multiSelect: j,
				overflowButton: T,
				columns: $,
				rows: N,
				hideShowLess: D,
				overflowButtonInGrid: _,
				disabled: L,
				options: c,
				disableStyles: G,
				onOverflowButtonClick: P,
				className: O,
				internalClassName: U,
				treePath: B,
				disableA11y: E,
			} = g,
			{ overrideElement: z, shouldRenderDefault: K } = ee('grid', g);
		if (!K) return z;
		const F = { image: { internalClassName: 'ss__grid__image', ...de({ disableStyles: G }), theme: g?.theme, treePath: B } };
		let l = g.selected;
		const V = se(g, ue);
		l && !Array.isArray(l) && (l = [l]);
		const [f, w] = x(l || []),
			[W, q] = x(() => A(l));
		if (l) {
			const e = A(l);
			e !== W && (q(e), w(l));
		}
		const H = (e, s) => {
				if (j) {
					let r;
					f.find((a) => a.value === s.value)
						? ((r = [...f]),
						  r.splice(
								r.findIndex((a) => a.value === s.value),
								1
						  ))
						: (r = [...f, s]),
						p && p(e, s, r),
						w(r);
				} else p && p(e, s, [s]), w([s]);
			},
			h = N && $ ? $ * N : c.length,
			n = Math.max(0, c.length - (h - (_ ? 1 : 0))),
			[d, J] = x(!!n),
			I = () => {
				const e = D ? d : !0,
					s = { showMoreText: { value: _ ? `+ ${n}` : 'Show More' }, showLessText: { value: _ ? `- ${n}` : 'Show Less' } },
					r = te(s, g.lang || {}),
					a = ce(r, { limited: d, remainder: n }, { activeBreakpoint: i?.activeBreakpoint });
				return e && n > 0 && c.length !== h
					? t('div', {
							className: `ss__grid__show-more-wrapper ${_ ? 'ss__grid__option' : ''}`,
							onClick: (u) => {
								!C && J(!d), P && P(u, !!d, n);
							},
							role: 'button',
							ref: (u) => (!E && !C ? R(u) : null),
							...(d ? a.showMoreText.attributes : a.showLessText.attributes),
							children: T
								? ie(T, { limited: d, remainder: n, treePath: B })
								: d
								? t('span', { className: 'ss__grid__show-more', ...a.showMoreText.value })
								: n
								? t('span', { className: 'ss__grid__show-less', ...a.showLessText.value })
								: null,
					  })
					: null;
			};
		return typeof c == 'object' && c?.length
			? t(ae, {
					children: y('div', {
						...V,
						className: k('ss__grid', L ? 'ss__grid--disabled' : '', O, U),
						children: [
							S && t('h5', { className: 'ss__grid__title', children: S }),
							y('div', {
								className: 'ss__grid__options',
								children: [
									c.map((e, s) => {
										const r = f.some((o) => o.value == e.value);
										let a = !1;
										const u = e.background?.toLowerCase() || (e.backgroundImageUrl ? null : e.value.toString().toLowerCase());
										if (u)
											try {
												const o = re(u);
												o.isValid() && (a = o.isDark());
											} catch {}
										if (!d || c.length == h || s < h - (_ ? 1 : 0))
											return t('div', {
												className: k('ss__grid__option', {
													'ss__grid__option--selected': r,
													'ss__grid__option--disabled': e?.disabled,
													'ss__grid__option--unavailable': e?.available === !1,
													'ss__grid__option--dark': a,
												}),
												onClick: (o) => !L && !e?.disabled && H(o, e),
												ref: (o) => R(o),
												title: e.label || e.value.toString(),
												role: 'option',
												'aria-selected': r,
												'aria-disabled': e.disabled,
												children: y('div', {
													className: k('ss__grid__option__inner', `ss__grid__option__inner--${ge(e.value.toString())}`),
													style: { background: e.background ? e.background : e.backgroundImageUrl ? void 0 : e.value },
													children: [
														!e.background && e.backgroundImageUrl
															? t(_e, { ...F.image, src: e.backgroundImageUrl, alt: e.label || e.value.toString() })
															: null,
														M ? null : t('label', { className: 'ss__grid__option__label', children: e.label || e.value }),
													],
												}),
											});
									}),
									_ ? t(I, {}) : null,
								],
							}),
							_ ? null : t(I, {}),
						],
					}),
			  })
			: null;
	});
export { ye as G };
