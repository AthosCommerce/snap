import { o as R, u as z, a as D, m as E, b as M, c as W, n as $, j as t, l as d, d as q, C as G, e as H } from './iframe-U9T2Y9ZS.js';
import { d as J } from './defined-CdKp_MB-.js';
import { u as p } from './useLang-Dx66cFD0.js';
import { F as g } from './Filter-xKdvsRSa.js';
const K = (e) => {
		const l = e.theme?.variables;
		return H({
			'.ss__filter-summary__title': { fontSize: '1.2em', padding: '6px 0' },
			'.ss__filter-summary__filters': { margin: '5px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' },
			'.ss__filter-summary__no-filters': { margin: '5px 0' },
			'&.ss__filter-summary--list': {
				'& .ss__filter-summary__clear-all .ss__filter__value': { marginLeft: '5px' },
				'&, .ss__filter-summary__filters': { display: 'block' },
				'.ss__filter-summary__filters': {
					'.ss__filter': {
						display: 'block',
						margin: '0 5px 5px 5px',
						'.ss__filter__button': {
							padding: '0 0 0 0',
							border: 0,
							'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': { backgroundColor: 'transparent' },
							'.ss__button__content': {
								display: 'flex',
								alignItems: 'center',
								'.ss__icon': {
									padding: '4px',
									backgroundColor: '#f8f8f8',
									border: '1px solid black',
									width: '8px',
									height: '8px',
									fill: l?.colors?.primary,
									stroke: l?.colors?.primary,
									marginRight: '0px',
								},
							},
						},
					},
				},
			},
		});
	},
	Z = R((e) => {
		const l = z(),
			h = D(),
			y = {
				title: 'Current Filters',
				type: 'inline',
				clearAllLabel: 'Clear All',
				noFiltersText: 'No filters applied',
				hideNoFiltersText: !0,
				clearAllIcon: 'close-thin',
				filterIcon: 'close-thin',
				filters: e.controller?.store?.filters,
				separator: ':',
				treePath: h,
			},
			s = E('filterSummary', l, y, e),
			{
				filters: r,
				title: b,
				type: o,
				filterIcon: x,
				clearAllIcon: v,
				separator: C,
				hideFacetLabel: F,
				hideTitle: N,
				clearAllLabel: m,
				hideClearAll: T,
				noFiltersText: k,
				hideNoFiltersText: L,
				onClick: _,
				onClearAllClick: c,
				disableStyles: A,
				className: P,
				internalClassName: S,
				treePath: I,
			} = s,
			{ overrideElement: j, shouldRenderDefault: w } = M('filterSummary', s);
		if (!w) return j;
		const i = {
				filter: {
					name: 'filter',
					internalClassName: 'ss__filter-summary__filter',
					...J({ disableStyles: A, separator: C, hideFacetLabel: F, icon: x }),
					theme: s.theme,
					treePath: I,
				},
			},
			B = W(s, K),
			n = $({ title: { value: b }, clearAllLabel: { value: m }, noFiltersText: { value: k } }, s.lang || {}),
			f = { activeBreakpoint: l?.activeBreakpoint },
			u = { ...p({ title: n.title }, { filters: r }, f), ...p({ noFiltersText: n.noFiltersText }, { controller: e.controller }, f) };
		return !r?.length && L
			? null
			: t(G, {
					children: d('div', {
						...B,
						className: q(
							'ss__filter-summary',
							{ 'ss__filter-summary--list': o === 'list' },
							{ 'ss__filter-summary--inline': o === 'inline' },
							{ 'ss__filter-summary--no-filters': !r?.length },
							P,
							S
						),
						children: [
							!N && t('div', { className: 'ss__filter-summary__title', ...u.title?.all }),
							r?.length
								? d('div', {
										className: 'ss__filter-summary__filters',
										children: [
											r.map((a) => t(g, { ...i.filter, filter: a, onClick: (O) => _ && _(O, a) })),
											!T &&
												t(g, {
													...i.filter,
													name: 'clear-all',
													icon: v,
													internalClassName: `${i?.filter?.internalClassName} ss__filter-summary__clear-all`,
													hideFacetLabel: !0,
													valueLabel: m,
													onClick: (a) => {
														c && c(a), e.controller?.urlManager.remove('filter').remove('page').go();
													},
													lang: { filter: n.clearAllLabel },
												}),
										],
								  })
								: t('div', { className: 'ss__filter-summary__no-filters', ...u.noFiltersText?.all }),
						],
					}),
			  });
	});
export { Z as F };
