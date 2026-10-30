import {
	A as R,
	y as W,
	o as Y,
	u as q,
	a as G,
	m as H,
	b as J,
	d as N,
	c as K,
	s as Q,
	n as U,
	j as r,
	l as u,
	F as B,
	I as C,
	C as X,
	e as Z,
	t as z,
} from './iframe-U9T2Y9ZS.js';
import { d as I } from './defined-CdKp_MB-.js';
import { u as ee } from './useIntersection-D52kaMEq.js';
import { u as oe } from './useLang-Dx66cFD0.js';
import { B as se } from './Button-rwG4FGUK.js';
const te = (o, a) => {
		const n = R(o);
		(n.current = o),
			W(() => {
				const i = setTimeout(() => {
					n.current();
				}, a);
				return () => {
					clearTimeout(i);
				};
			}, [o, a]);
	},
	re = ({ pagination: o, progressIndicatorWidth: a, progressIndicatorSize: n, color: i, backgroundColor: s, theme: d }) =>
		Z({
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '20px',
			'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
			'& .ss__load-more__button--hidden': { display: 'none' },
			'& .ss__button': { alignItems: 'center' },
			'& .ss__load-more__icon': {
				marginLeft: '5px',
				animation: `${z({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
			},
			'&.ss__load-more': {
				'& .ss__load-more__progress': {
					display: 'flex',
					flexDirection: 'column',
					gap: '5px',
					'& .ss__load-more__progress__indicator': {
						width: a,
						background: s || d?.variables?.colors?.secondary || '#f8f8f8',
						borderRadius: n,
						'& .ss__load-more__progress__indicator__bar': {
							width: o ? `${(o.end / o.totalResults) * 100}%` : '',
							background: i || d?.variables?.colors?.primary || '#ccc',
							borderRadius: n,
							height: n,
						},
					},
					'& .ss__load-more__progress__text': { textAlign: 'center' },
				},
			},
		}),
	ce = Y((o) => {
		const a = q(),
			i = {
				loadMoreText: 'Load More',
				loadingLocation: 'button',
				loadingIcon: 'spinner',
				progressIndicatorWidth: '300px',
				progressIndicatorSize: '5px',
				treePath: G(),
			},
			s = H('loadMore', a, i, o),
			{
				pagination: d,
				controller: h,
				onClick: b,
				autoFetch: m,
				intersectionOffset: k,
				loading: x,
				loadMoreText: g,
				hideProgressIndicator: v,
				hideProgressText: y,
				loadingLocation: c,
				loadingIcon: t,
				disableStyles: P,
				className: D,
				internalClassName: F,
				treePath: L,
			} = s,
			{ overrideElement: w, shouldRenderDefault: $ } = J('loadMore', s);
		if (!$) return w;
		const e = d || h?.store?.pagination,
			l = typeof x == 'boolean' ? x : h?.store?.loading,
			j = (l && c === 'button') || !e?.next,
			p = {
				button: {
					internalClassName: N(
						'ss__load-more__button',
						{ 'ss__load-more__button--hidden': l && c === 'outside' },
						{ 'ss__load-more__button--disabled': j }
					),
					...I({ disableStyles: P }),
					theme: s?.theme,
					treePath: L,
				},
				icon: { internalClassName: 'ss__load-more__icon', ...I({ disableStyles: P }), theme: s?.theme, treePath: L },
			};
		if (!e) return null;
		const A = K({ ...s, pagination: e }, re),
			T = {};
		if (m) {
			const _ = R(null);
			T.ref = _;
			const S = ee(_, k || '0px'),
				[V, M] = Q(!0);
			l
				? M(!0)
				: te(() => {
						M(!1);
				  }, 500),
				S && e.next && !V && e.next.url.go({ history: 'replace' });
		}
		const E = {
				loadMoreButton: { value: g, attributes: { 'aria-label': g } },
				progressText: { value: `You've viewed ${e?.end} of ${e?.totalResults} products` },
			},
			O = U(E, s.lang || {}),
			f = oe(O, { pagination: e }, { activeBreakpoint: a?.activeBreakpoint });
		return e.totalResults
			? r(X, {
					children: u('div', {
						...A,
						...T,
						className: N('ss__load-more', { 'ss__load-more--loading': l }, { 'ss__load-more--autoFetch': m }, D, F),
						children: [
							!m &&
								u(B, {
									children: [
										u(se, {
											onClick: (_) => {
												e.next?.url.go({ history: 'replace' }), b && b(_);
											},
											...p.button,
											...f.loadMoreButton.attributes,
											children: [
												r('span', { ...f.loadMoreButton.value, children: g }),
												t && l && c === 'button' ? r(C, { ...p.icon, ...(typeof t == 'string' ? { icon: t } : t) }) : null,
											],
										}),
										t && l && c === 'outside' && r(C, { ...p.icon, ...(typeof t == 'string' ? { icon: t } : t) }),
									],
								}),
							(!v || !y) &&
								r('div', {
									className: 'ss__load-more__progress',
									children: u(B, {
										children: [
											!v &&
												r('div', {
													className: 'ss__load-more__progress__indicator',
													children: r('div', { className: 'ss__load-more__progress__indicator__bar' }),
												}),
											!y &&
												r('div', {
													'aria-atomic': 'true',
													'aria-live': 'polite',
													className: 'ss__load-more__progress__text',
													...f.progressText?.all,
												}),
										],
									}),
								}),
						],
					}),
			  })
			: null;
	});
export { ce as L, te as u };
