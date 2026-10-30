import { o as w, u as S, a as j, m as R, b as F, c as A, j as t, l, I as p, F as u, d as M, C as D, e as E } from './iframe-U9T2Y9ZS.js';
import { d as h } from './defined-CdKp_MB-.js';
const O = () =>
		E({
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'& .ss__rating__icons': { position: 'relative' },
			'& .ss__rating__stars': {
				width: '100%',
				display: 'inline-grid',
				gridTemplateColumns: '20% 20% 20% 20% 20%',
				'&.ss__rating__stars--full': { position: 'absolute', top: 0, left: 0 },
				'&.ss__rating__stars--empty': { position: 'relative' },
			},
			'& .ss__rating__stars__star': { overflow: 'hidden' },
			'& .ss__icon': { maxWidth: 'max-content' },
		}),
	z = w((f) => {
		const y = S(),
			N = { fullIcon: 'star', emptyIcon: 'star-o', treePath: j() },
			a = R('rating', y, N, f),
			{
				alwaysRender: v,
				count: e,
				text: i,
				disablePartialFill: _,
				emptyIcon: r,
				fullIcon: n,
				disableStyles: o,
				className: I,
				internalClassName: b,
				treePath: c,
			} = a,
			{ overrideElement: P, shouldRenderDefault: x } = F('rating', a);
		if (!x) return P;
		const m = {
			fullIcon: { name: 'star--full', ...h({ disableStyles: o }), theme: a?.theme, treePath: c },
			emptyIcon: { name: 'star--empty', color: '#ccc', ...h({ disableStyles: o }), theme: a?.theme, treePath: c },
		};
		let s = a.value;
		isNaN(s) && (s = Number(s) || 0), s < 0 && (s = 0), s > 5 && (s = 5);
		const C = A(a, O),
			d = _ ? Math.floor(s) : Math.ceil(s);
		return v || s || e
			? t(D, {
					children: l('div', {
						className: M('ss__rating', I, b),
						...C,
						children: [
							l('div', {
								className: 'ss__rating__icons',
								children: [
									t('div', {
										className: 'ss__rating__stars ss__rating__stars--empty',
										children: [...Array(5)].map(() =>
											t('span', {
												className: 'ss__rating__stars__star ss__rating__stars__star--empty',
												children: t(p, { ...m.emptyIcon, ...(typeof r == 'string' ? { icon: r } : r) }),
											})
										),
									}),
									t('div', {
										className: 'ss__rating__stars ss__rating__stars--full',
										children: [...Array(d)].map(($, T) => {
											let g = 100;
											return (
												T + 1 == d && !_ && s % 1 != 0 && (g = (s % 1 || 1) * 100),
												t('span', {
													className: 'ss__rating__stars__star ss__rating__stars__star--full',
													style: { width: `${g}%` },
													children: t(p, { ...m.fullIcon, ...(typeof n == 'string' ? { icon: n } : n) }),
												})
											);
										}),
									}),
								],
							}),
							e ? l('span', { className: 'ss__rating__count', children: ['(', e, ')'] }) : t(u, {}),
							i ? t('span', { className: 'ss__rating__text', children: i }) : t(u, {}),
						],
					}),
			  })
			: null;
	});
export { z as R };
