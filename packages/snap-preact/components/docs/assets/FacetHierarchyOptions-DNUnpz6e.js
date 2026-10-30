import { o as w, u as z, a as H, m as j, b as D, c as F, j as n, n as W, l as c, I as B, d as h, C as R, e as f } from './iframe-U9T2Y9ZS.js';
import { d as V } from './defined-CdKp_MB-.js';
import { u as E } from './useLang-Dx66cFD0.js';
import { c as I } from './createHoverProps-B_zlUBHN.js';
const q = ({ theme: o, horizontal: s, returnIcon: r }) =>
		s
			? f({
					display: 'flex',
					flexWrap: 'wrap',
					'& .ss__facet-hierarchy-options__option': {
						margin: '0 5px 5px 0',
						padding: '6px',
						textDecoration: 'none',
						flex: '0 1 auto',
						'&:hover': { cursor: 'pointer' },
						'&.ss__facet-hierarchy-options__option--filtered': {
							fontWeight: 'bold',
							color: o?.variables?.colors?.primary,
							marginRight: '2em',
							'&:hover': { cursor: 'default', background: 'unset' },
						},
						'&.ss__facet-hierarchy-options__option--return': {
							'.ss__icon': { padding: '0 0 0 2px' },
							[r ? '' : '&:before']: { content: `${r ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: o?.variables?.colors?.primary },
						},
						'& .ss__facet-hierarchy-options__option__value': {
							'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
						},
					},
			  })
			: f({
					'& .ss__facet-hierarchy-options__option': {
						display: 'flex',
						padding: '6px 0',
						textDecoration: 'none',
						alignItems: 'center',
						'&:hover': { cursor: 'pointer' },
						'&.ss__facet-hierarchy-options__option--filtered': {
							fontWeight: 'bold',
							color: o?.variables?.colors?.primary,
							'&:hover': { cursor: 'default', background: 'unset' },
							'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
						},
						'&.ss__facet-hierarchy-options__option--return': {
							'.ss__icon': { padding: '0 0 0 2px' },
							[r ? '' : '&:before']: { content: `${r ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: o?.variables?.colors?.primary },
						},
						'& .ss__facet-hierarchy-options__option__value': {
							marginLeft: '8px',
							'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
						},
					},
			  }),
	M = w((o) => {
		const s = z(),
			d = { treePath: H() },
			t = j('facetHierarchyOptions', s, d, o),
			{
				values: y,
				hideCount: m,
				returnIcon: a,
				onClick: _,
				previewOnFocus: u,
				horizontal: g,
				valueProps: b,
				facet: i,
				disableStyles: x,
				treePath: P,
				className: v,
				internalClassName: C,
			} = t,
			{ overrideElement: k, shouldRenderDefault: N } = D('facetHierarchyOptions', t);
		if (!N) return k;
		const L = { icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...V({ disableStyles: x }), theme: t?.theme, treePath: P } },
			O = F(t, q),
			p = y || i?.refinedValues;
		return p?.length
			? n(R, {
					children: n('div', {
						...O,
						className: h('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': g }, v, C),
						children: p.map((e) => {
							const $ = {
									hierarchyOption: {
										attributes: {
											'aria-label': `${
												e.filtered ? `selected ${e.label}` : i?.label ? `filter by ${i?.label} - ${e.label}` : `filter by ${e.label}`
											}`,
										},
									},
								},
								S = W($, t.lang || {}),
								T = E(S, { facet: i, value: e }, { activeBreakpoint: s?.activeBreakpoint });
							return c('a', {
								className: h(
									'ss__facet-hierarchy-options__option',
									{ 'ss__facet-hierarchy-options__option--filtered': e.filtered },
									{ 'ss__facet-hierarchy-options__option--return': e.history && !e.filtered }
								),
								href: e.url?.link?.href,
								...b,
								onClick: (l) => {
									e.url?.link?.onClick(l), _ && _(l);
								},
								...(u ? I(() => e?.preview && e.preview()) : {}),
								...T.hierarchyOption?.all,
								children: [
									a && e.history && !e.filtered && n(B, { ...L.icon, ...(typeof a == 'string' ? { icon: a } : a) }),
									c('span', {
										className: 'ss__facet-hierarchy-options__option__value',
										children: [
											e.label,
											!m &&
												e?.count > 0 &&
												!e.filtered &&
												c('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', e.count, ')'] }),
										],
									}),
								],
							});
						}),
					}),
			  })
			: null;
	});
export { M as F };
