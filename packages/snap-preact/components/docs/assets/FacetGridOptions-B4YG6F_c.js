import { o as k, u as v, a as P, m as O, b as N, c as T, j as s, n as R, d as n, C as B, e as F } from './iframe-Bc4KSH0T.js';
import { u as S } from './useLang-Dx66cFD0.js';
import { c as j } from './createHoverProps-B_zlUBHN.js';
const z = ({ columns: o, gapSize: t, gridSize: l, theme: a }) =>
		F({
			display: 'flex',
			flexFlow: 'row wrap',
			gridTemplateColumns: o ? `repeat(${o}, 1fr)` : `repeat(auto-fill, minmax(${l}, 1fr))`,
			gap: t,
			gridAutoRows: '1fr',
			'& .ss__facet-grid-options__option': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: '0 1 auto',
				border: '1px solid',
				borderColor: a?.variables?.colors?.primary || 'initial',
				textAlign: 'center',
				wordBreak: 'break-all',
				boxSizing: 'border-box',
				padding: '1em 0',
				width: `calc(100% / ${o} - ${2 * Math.round((o + 2) / 2)}px)`,
				margin: `0 ${t} ${t} 0`,
				[`:nth-of-type(${o}n)`]: { marginRight: '0' },
				'&.ss__facet-grid-options__option--filtered': { background: '#ccc', color: '#333' },
				'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: '#f8f8f8', color: '#333' },
				'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
			},
			'@supports (display: grid)': {
				display: 'grid',
				'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
				'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
				'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
			},
		}),
	V = k((o) => {
		const t = v(),
			a = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: P() },
			r = O('facetGridOptions', t, a, o),
			{ values: f, onClick: d, previewOnFocus: _, valueProps: g, facet: i, horizontal: m, className: u, internalClassName: b } = r,
			{ overrideElement: h, shouldRenderDefault: x } = N('facetGridOptions', r);
		if (!x) return h;
		m && (r.columns = 0);
		const w = T(r, z),
			p = f || i?.refinedValues;
		return p?.length
			? s(B, {
					children: s('div', {
						...w,
						className: n('ss__facet-grid-options', u, b),
						children: p.map((e) => {
							const y = {
									gridOption: {
										attributes: {
											'aria-label': `${
												e.filtered
													? `remove selected filter ${i?.label || ''} - ${e.label}`
													: i?.label
													? `filter by ${i?.label} - ${e.label}`
													: `filter by ${e.label}`
											}`,
										},
									},
								},
								C = R(y, r.lang || {}),
								$ = S(C, { facet: i, value: e }, { activeBreakpoint: t?.activeBreakpoint });
							return s('a', {
								className: n('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': e.filtered }),
								href: e.url?.link?.href,
								...g,
								onClick: (c) => {
									e.url?.link?.onClick(c), d && d(c);
								},
								...(_ ? j(() => e?.preview && e.preview()) : {}),
								...$.gridOption?.all,
								children: s('span', {
									className: n('ss__facet-grid-options__option__value', { 'ss__facet-grid-options__option__value--smaller': e.label.length > 3 }),
									children: e.label,
								}),
							});
						}),
					}),
			  })
			: null;
	});
export { V as F };
