import { o as I, u as D, a as M, m as O, b as W, c as q, n as g, j as l, l as c, d as p, C as z, e as F } from './iframe-CXSVAHru.js';
import { d as G } from './defined-CdKp_MB-.js';
import { u as h } from './useLang-Dx66cFD0.js';
import { B as H } from './Button-YZishUF-.js';
const J = () =>
		F({
			'.ss__tab-selection__title': { textAlign: 'center' },
			'.ss__tab-selection__tabs': {
				display: 'flex',
				gap: '10px',
				textAlign: 'center',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
			},
			'.ss__tab-selection__button--active': { fontWeight: 'bold' },
			'.ss__tab-selection__button__count': { marginLeft: '5px' },
		}),
	Z = I((f) => {
		const o = D(),
			v = { treePath: M(), showResultCount: !0, enableEmptyTabs: !1 },
			e = O('tabSelection', o, v, f),
			{
				tabManager: a,
				titleText: u,
				showResultCount: C,
				enableEmptyTabs: L,
				onTabClick: b,
				disableStyles: T,
				className: y,
				internalClassName: B,
				treePath: x,
			} = e,
			{ overrideElement: N, shouldRenderDefault: P } = W('tabSelection', e);
		if (!P) return N;
		if (!a || !a.tabs?.length) return null;
		const S = { button: { ...G({ disableStyles: T }), theme: e.theme, treePath: x } };
		function k(t) {
			const s = t.store;
			return s?.loaded ? s.pagination?.totalResults : void 0;
		}
		const R = q(e, J),
			$ = g(
				{ title: { value: u }, tabList: { attributes: { 'aria-label': 'Search result tabs' } } },
				{ title: e.lang?.title || {}, tabList: e.lang?.tabList || {} }
			),
			_ = h($, { tabManager: a }, { activeBreakpoint: o?.activeBreakpoint });
		return l(z, {
			children: c('div', {
				...R,
				className: p('ss__tab-selection', y, B),
				children: [
					u || e.lang?.title?.value ? l('h4', { className: 'ss__tab-selection__title', ..._.title?.all }) : null,
					l('div', {
						className: 'ss__tab-selection__tabs',
						role: 'tablist',
						..._.tabList?.attributes,
						children: a.tabs.map((t) => {
							const s = a.active?.id === t.id,
								i = k(t.controller),
								j = !L && !s && i === 0,
								r = t.label || t.id,
								n = C ? i : void 0,
								d = t.controller.id.replace(/\s+/g, '-'),
								A = { tabButton: { value: r, attributes: { 'aria-label': typeof n == 'number' ? `${r}, ${n} results` : r } } },
								E = g(A, { tabButton: e.lang?.tabButton || {} }),
								m = h(E, { tab: t, resultCount: i, active: s }, { activeBreakpoint: o?.activeBreakpoint });
							return c(
								H,
								{
									...S.button,
									internalClassName: p('ss__tab-selection__button', `ss__tab-selection__button--${t.id}`, { 'ss__tab-selection__button--active': s }),
									disabled: j,
									id: `ss__tab--${d}`,
									role: 'tab',
									'aria-selected': s,
									'aria-controls': `ss__tabpanel--${d}`,
									...m.tabButton?.attributes,
									onClick: (w) => {
										b && b(w, t), a.setActive(t.id);
									},
									children: [
										l('span', { className: 'ss__tab-selection__button__label', ...m.tabButton?.value }),
										typeof n == 'number' ? c('span', { className: 'ss__tab-selection__button__count', children: ['(', n, ')'] }) : null,
									],
								},
								t.id
							);
						}),
					}),
				],
			}),
		});
	});
export { Z as T };
