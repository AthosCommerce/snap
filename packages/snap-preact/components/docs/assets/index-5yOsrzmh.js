import { u as z, a as C, m as T, b as O, s as p, c as E, l as c, j as r, I as b, F as I, d as D, e as M } from './iframe-CXSVAHru.js';
import { d as H } from './defined-CdKp_MB-.js';
import './preload-helper-PPVm8Dsz.js';
const W = ({ componentTheme: o }) =>
		M({
			width: '360px',
			height: '120px',
			overflow: 'hidden',
			fontSize: '14px',
			position: 'fixed',
			zIndex: '9999',
			cursor: 'auto',
			bottom: '50px',
			right: 0,
			padding: '0 5px',
			background: o.main.background,
			color: o.main.color,
			border: o.main.border,
			borderTopLeftRadius: '10px',
			borderBottomLeftRadius: '10px',
			boxShadow: o.main.boxShadow,
			transition: 'height ease 0.2s, right ease 0.5s 0.2s',
			'&.ss__branch-override--collapsed': {
				transition: 'height ease 0.5s 0.5s, right ease 0.5s',
				right: '-323px',
				height: '50px',
				cursor: 'pointer',
			},
			'.ss__branch-override__top': {
				padding: '10px 5px',
				background: o.top.background,
				borderBottom: o.top.border,
				'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
				'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', paddingTop: '7px', cursor: 'pointer' },
				'.ss__branch-override__top__button': {
					borderRadius: '5px',
					padding: '6px',
					height: '100%',
					lineHeight: '14px',
					textAlign: 'center',
					cursor: 'pointer',
					fontSize: '10px',
					border: o.top.button.border,
					color: o.top.button.color,
					float: 'right',
					marginRight: '14px',
				},
			},
			'.ss__branch-override__bottom': {
				padding: '10px 15px',
				fontSize: '12px',
				'.ss__branch-override__bottom__left': {
					fontWeight: 'bold',
					fontStyle: o.bottom.branch.style,
					color: o.bottom.branch.color,
					fontSize: '14px',
					lineHeight: '20px',
					display: 'inline-flex',
					alignItems: 'center',
					maxWidth: '180px',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					svg: { marginRight: '10px' },
				},
				'.ss__branch-override__bottom__right': {
					float: 'right',
					fontStyle: 'italic',
					color: o.bottom.additional.color,
					fontSize: '12px',
					lineHeight: '20px',
				},
				'.ss__branch-override__bottom__content': { marginTop: '10px' },
			},
		}),
	j = {
		class: 'ss__branch-override--dark',
		main: { border: '0', background: 'rgba(26, 29, 36, 0.9)', color: '#fff', boxShadow: '' },
		top: {
			border: '1px solid #454c5f',
			logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
			button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
			close: { fill: '#fff' },
		},
		bottom: {
			content: 'Preview functionality may differ from production.',
			branch: { color: '#fff', style: 'italic' },
			additional: { color: '#fff' },
		},
	},
	B = {
		class: 'ss__branch-override--light',
		main: { border: '0', background: 'rgba(29, 73, 144, 0.9)', color: '#fff', boxShadow: '' },
		top: {
			border: '1px solid #3c78d7',
			logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
			button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
			close: { fill: '#fff' },
		},
		bottom: {
			content: 'Preview functionality may differ from production.',
			branch: { color: '#fff', style: 'italic' },
			additional: { color: '#fff' },
		},
	},
	V = {
		class: 'ss__branch-override--error',
		main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: '' },
		top: {
			border: '1px solid #e50b0b',
			logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
			button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
			close: { fill: '#fff' },
		},
		bottom: {
			content: 'Incorrect branch name or branch no longer exists.',
			branch: { color: '#fff', style: 'italic' },
			additional: { color: '#fff' },
		},
	},
	s = { darkTheme: j, lightTheme: B, failureTheme: V },
	G = (o) => {
		const m = z(),
			g = { treePath: C() },
			i = T('branchOverride', m, g, o),
			{ branch: n, details: l, error: a, className: x, internalClassName: v, darkMode: d, disableStyles: u, onRemoveClick: h, treePath: w } = i,
			{ overrideElement: k, shouldRenderDefault: y } = O('branchOverride', i);
		if (!y) return k;
		const _ = {
				icon: {
					internalClassName: 'ss__branch-override__bottom__left__icon',
					size: '12px',
					...H({ disableStyles: u }),
					theme: i?.theme,
					treePath: w,
				},
			},
			S = typeof d == 'boolean' ? d : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
			[t, P] = p(S ? 'darkTheme' : 'lightTheme'),
			[N, f] = p(0);
		a && P('failureTheme');
		const R = E({ ...i, componentTheme: s[t] }, W);
		return (l || a) && n
			? c('div', {
					className: D('ss__branch-override', s[t].class, { 'ss__branch-override--collapsed': N }, x, v),
					...R,
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), f(0);
					},
					children: [
						c('div', {
							className: 'ss__branch-override__top',
							children: [
								r('img', { className: 'ss__branch-override__top__logo', src: s[t].top.logo.src }),
								r('div', {
									className: 'ss__branch-override__top__collapse',
									onClick: (e) => {
										e.preventDefault(), e.stopPropagation(), f(1);
									},
									children: r(b, { size: '18px', color: s[t].top.close.fill, ..._.icon, icon: 'close-thin' }),
								}),
								r('div', {
									className: 'ss__branch-override__top__button',
									onClick: (e) => {
										e.preventDefault(), e.stopPropagation(), h && h(e, n);
									},
									children: s[t].top.button.content,
								}),
							],
						}),
						c('div', {
							className: 'ss__branch-override__bottom',
							children: [
								r('span', {
									className: 'ss__branch-override__bottom__left',
									children: a
										? c(I, {
												children: [
													r(b, { size: '12px', color: s[t].bottom.branch.color, ..._.icon, icon: 'warn' }),
													r('span', { children: a.message }),
												],
										  })
										: n,
								}),
								r('span', { className: 'ss__branch-override__bottom__right', children: a ? n : l?.lastModified }),
								r('div', { className: 'ss__branch-override__bottom__content', children: a?.description || s[t].bottom.content }),
							],
						}),
					],
			  })
			: null;
	};
export { G as BranchOverride };
