import { o as Q, u as C, a as L, m as j, b as D, c as H, n as k, j as a, d as s, l as n, F as d, C as w, e as B } from './iframe-CXSVAHru.js';
import { u as E } from './useLang-Dx66cFD0.js';
const F = () => B({}),
	A = Q((t) => {
		const c = C(),
			m = L(),
			o = t.controller?.store.merchandising.landingPage || t.merchandising?.landingPage,
			l = t.controller?.store.pagination || t.pagination,
			e = t.controller?.store.search || t.query,
			x = {
				titleText: `Search result${l?.totalResults == 1 ? '' : 's'} ${
					e?.query ? `for "<span class="ss__search-header__results-query">${e.query.string}</span>"` : ''
				}`,
				correctedQueryText: `No results found for "<em>${e?.originalQuery?.string}</em>", showing results for "<em>${e?.query?.string}</em>" instead.`,
				didYouMeanText: `Did you mean <a href=${e?.didYouMean?.url.href}>${e?.didYouMean?.string}</a>?`,
				noResultsText: `${
					e?.query
						? `<span>
			No results for "<span class="ss__search-header__results-query">${e.query.string}</span>" found.
		</span>`
						: '<span>No results found.</span>'
				}`,
				expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${e?.query?.string}</span>", but here's something similar:`,
				treePath: m,
			},
			i = j('searchHeader', c, x, t),
			{
				className: T,
				internalClassName: g,
				titleText: p,
				subtitleText: u,
				correctedQueryText: y,
				noResultsText: v,
				didYouMeanText: f,
				expandedSearchText: N,
				hideTitleText: b,
				hideSubtitleText: S,
				hideCorrectedQueryText: q,
				hideNoResultsText: $,
				hideExpandedSearchText: h,
				hideDidYouMeanText: P,
			} = i,
			{ overrideElement: R, shouldRenderDefault: M } = D('searchHeader', i);
		if (!M) return R;
		const Y = H(i, F),
			_ = k(
				{
					titleText: { value: p },
					subtitleText: { value: u },
					correctedQueryText: { value: y },
					noResultsText: { value: v },
					didYouMeanText: { value: f },
					expandedSearchText: { value: N },
				},
				i.lang || {}
			),
			r = E(_, { pagination: l, search: e }, { activeBreakpoint: c?.activeBreakpoint });
		return a(w, {
			children: a('header', {
				...Y,
				className: s('ss__search-header', T, g),
				children: o
					? a('h3', { className: s('ss__search-header__title', 'ss__search-header__title--landing-page'), children: o.title })
					: n(d, {
							children: [
								l?.totalResults
									? n(d, {
											children: [
												!h && e?.matchType && e.matchType == 'expanded'
													? a('h3', {
															className: s('ss__search-header__title', 'ss__search-header__title--expanded'),
															'aria-atomic': 'true',
															'aria-live': 'polite',
															...r.expandedSearchText?.all,
													  })
													: a(d, {}),
												!b &&
													(e?.matchType !== 'expanded' || h) &&
													a('h3', {
														className: s('ss__search-header__title', 'ss__search-header__title--results'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...r.titleText?.all,
													}),
												e?.originalQuery &&
													!q &&
													a('h5', {
														className: s('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...r.correctedQueryText?.all,
													}),
											],
									  })
									: l?.totalResults === 0 &&
									  n('div', {
											className: 'ss__search-header__no-results-wrapper',
											children: [
												!$ &&
													a('h3', {
														className: s('ss__search-header__title', 'ss__search-header__title--no-results'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...r.noResultsText?.all,
													}),
												e?.didYouMean &&
													!P &&
													a('h5', {
														className: s('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...r.didYouMeanText?.all,
													}),
											],
									  }),
								(u || _.subtitleText.value) &&
									!S &&
									a('h5', { className: s('ss__search-header__subtitle'), 'aria-atomic': 'true', 'aria-live': 'polite', ...r.subtitleText?.all }),
							],
					  }),
			}),
		});
	});
export { A as S };
