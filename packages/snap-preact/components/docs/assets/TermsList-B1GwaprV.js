import { o as G, u as M, a as W, m as q, b as z, c as F, j as s, d as I, C as J, e as K } from './iframe-Bc4KSH0T.js';
import { T as c } from './Terms-DheA4fhR.js';
import { d as Q } from './defined-CdKp_MB-.js';
const U = ({}) =>
		K({
			display: 'flex',
			flexDirection: 'row',
			background: '#f8f8f8',
			width: 'auto',
			flexWrap: 'wrap',
			'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
			'.ss__terms-list__row:empty': { display: 'none' },
			'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
		}),
	tt = G((y) => {
		const T = M(),
			v = W(),
			r = q(
				'termsList',
				T,
				{
					layout: [['Suggestions'], ['Trending'], ['History']],
					historyTitle: 'Recent Searches',
					trendingTitle: 'Popular Searches',
					suggestionTitle: 'Search Suggestions',
					treePath: v,
				},
				y
			),
			{
				layout: w,
				historyTitle: x,
				verticalOptions: C,
				trendingTitle: P,
				suggestionTitle: S,
				retainHistory: N,
				retainTrending: b,
				treePath: H,
				disableStyles: D,
				className: L,
				internalClassName: j,
				controller: e,
			} = r,
			{ overrideElement: k, shouldRenderDefault: A } = z('termsList', r);
		if (!A) return k;
		const o = { terms: { vertical: !!C, ...Q({ disableStyles: D }), theme: r.theme, treePath: H } },
			B = F(r, U),
			i = e?.store.history || [],
			g = e?.store.terms || [],
			n = e?.store.trending || [],
			O = n?.filter((t) => t.active).pop(),
			R = i?.filter((t) => t.active).pop(),
			{ loaded: u, results: f, state: h } = e?.store;
		let l = !1;
		n?.length && ((b && u) || (!f.length && !h.input)) && (l = !0);
		let a = !1;
		i?.length && ((N && u) || (!f.length && !h.input)) && (a = !0),
			!e.store.state.input && (R || O) && (i?.length && (a = !0), n?.length && (l = !0));
		const _ = (t) => {
				if (typeof t != 'string') {
					const p = t?.map((m) => _(m));
					return t?.some((m, E) => m !== '_' && p[E]) ? s('div', { className: 'ss__terms-list__row', children: p }) : null;
				}
				if (t == '_') return s('div', { className: 'ss__terms-list__separator' });
				if (t == 'History' && a)
					return s(c, {
						internalClassName: 'ss__terms-list__terms--history',
						title: x,
						terms: i,
						controller: e,
						name: 'history',
						limit: e.config.settings?.history?.limit,
						...o.terms,
					});
				if (t == 'Trending' && l)
					return s(c, {
						internalClassName: 'ss__terms-list__terms--trending',
						title: P,
						terms: n,
						controller: e,
						name: 'trending',
						limit: e.config.settings?.trending?.limit,
						...o.terms,
					});
				if (t == 'Suggestions')
					return g.length
						? s(c, { internalClassName: 'ss__terms-list__terms--suggestions', title: S, terms: g, controller: e, name: 'suggestions', ...o.terms })
						: null;
			},
			d = w?.map((t) => _(t));
		return d?.some(Boolean) ? s(J, { children: s('div', { ...B, className: I('ss__terms-list', L, j), children: d }) }) : null;
	});
export { tt as T };
