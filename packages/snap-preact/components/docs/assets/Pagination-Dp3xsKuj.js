import {
	o as Q,
	u as U,
	a as V,
	m as X,
	b as Y,
	c as Z,
	n as x,
	j as e,
	l as p,
	I as N,
	d as i,
	F as l,
	C as aa,
	e as ea,
} from './iframe-CXSVAHru.js';
import { d as sa } from './defined-CdKp_MB-.js';
import { u as k } from './useLang-Dx66cFD0.js';
const ta = () =>
		ea({
			'& .ss__pagination__page': {
				padding: '5px',
				display: 'inline-block',
				minHeight: '1em',
				minWidth: '1em',
				textAlign: 'center',
				'&.ss__pagination__page--active': { fontWeight: 'bold' },
				'&:hover:not(.ss__pagination__page--active)': {},
			},
		}),
	oa = Q((B) => {
		const o = U(),
			L = { pages: 5, treePath: V() },
			t = X('pagination', o, L, B),
			{
				pagination: C,
				controller: y,
				pages: T,
				pagesLeft: c,
				pagesRight: _,
				hideFirst: F,
				hideLast: I,
				persistFirst: j,
				persistLast: R,
				hideEllipsis: u,
				hidePages: S,
				hideNext: E,
				hidePrev: W,
				nextButton: m,
				prevButton: d,
				firstButton: h,
				lastButton: b,
				ellipsisContent: v,
				disableStyles: $,
				className: z,
				internalClassName: A,
				treePath: D,
			} = t,
			{ overrideElement: H, shouldRenderDefault: O } = Y('pagination', t);
		if (!O) return H;
		const f = { icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...sa({ disableStyles: $ }), theme: t?.theme, treePath: D } },
			a = C || y?.store?.pagination,
			q = Number.isInteger(c) && Number.isInteger(_) ? [c, _] : [T],
			g = a?.getPages(...q),
			n = g?.map((s) => s.number),
			w = Z(t, ta),
			G = {
				previous: { attributes: { 'aria-label': 'go to previous page' } },
				next: { attributes: { 'aria-label': 'go to next page' } },
				first: { attributes: { 'aria-label': 'go to first page' } },
				last: { attributes: { 'aria-label': `go to last page ${a?.last.number}` } },
			},
			J = x(G, t.lang || {}),
			r = k(J, { pagination: a }, { activeBreakpoint: o?.activeBreakpoint });
		return n && n.length > 1 && a?.totalResults
			? e(aa, {
					children: e('div', {
						...w,
						className: i('ss__pagination', z, A),
						children: p('nav', {
							role: 'navigation',
							'aria-label': 'Pagination',
							children: [
								a.previous &&
									!W &&
									e('a', {
										...a.previous.url.link,
										className: i('ss__pagination__page', 'ss__pagination__page--previous'),
										...r.previous?.all,
										children: d || e(N, { ...f.icon, icon: 'angle-left', name: 'prev' }),
									}),
								(!n.includes(a.first.number) || (j && a.page !== a.first.number)) &&
									!F &&
									p(l, {
										children: [
											e('a', {
												...a.first.url.link,
												className: i('ss__pagination__page', 'ss__pagination__page--first'),
												...r.first?.all,
												children: h || a.first.number,
											}),
											!n.includes(2) && !u && e('span', { children: v ?? e(l, { children: '…' }) }),
										],
									}),
								!S &&
									g &&
									g.map((s) => {
										const K = { page: { attributes: { 'aria-label': `go to page ${s.number}` } } },
											M = x(K, t.lang || {}),
											P = k(M, { pagination: a, page: s }, { activeBreakpoint: o?.activeBreakpoint });
										return s.active
											? e('span', {
													className: i('ss__pagination__page', 'ss__pagination__page--active'),
													...P.page?.all,
													'aria-current': 'true',
													'aria-live': 'polite',
													children: s.number,
											  })
											: e('a', { ...s.url.link, className: 'ss__pagination__page', ...P.page?.all, children: s.number });
									}),
								(!n.includes(a.last.number) || (R && a.page !== a.last.number)) &&
									!I &&
									p(l, {
										children: [
											!n.includes(a.totalPages - 1) && !u && e('span', { children: v ?? e(l, { children: '…' }) }),
											e('a', {
												...a.last.url.link,
												className: i('ss__pagination__page', 'ss__pagination__page--last'),
												...r.last?.all,
												children: b || a.last.number,
											}),
										],
									}),
								a.next &&
									!E &&
									e('a', {
										...a.next.url.link,
										className: i('ss__pagination__page', 'ss__pagination__page--next'),
										...r.next?.all,
										children: m || e(N, { ...f.icon, icon: 'angle-right', name: 'next' }),
									}),
							],
						}),
					}),
			  })
			: null;
	});
export { oa as P };
