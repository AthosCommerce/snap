import { o as j, u as F, a as A, m as B, b as D, c as V, j as i, n as W, l as u, d as b, C as E, e as H } from './iframe-CXSVAHru.js';
import { C as I } from './Checkbox-CXNoFSPC.js';
import { d as g } from './defined-CdKp_MB-.js';
import { u as q } from './useLang-Dx66cFD0.js';
import { R as G } from './Radio-DY75CPxX.js';
import { c as J } from './createHoverProps-B_zlUBHN.js';
const K = ({ horizontal: t, theme: a, hideCheckbox: l }) =>
		H({
			display: t ? 'flex' : void 0,
			flexWrap: t ? 'wrap' : void 0,
			'& .ss__facet-list-options__option': {
				display: t ? void 0 : 'flex',
				alignItems: t ? void 0 : 'center',
				flex: t ? '0 1 auto' : void 0,
				padding: '6px',
				textDecoration: 'none',
				'&:hover': { cursor: 'pointer' },
				'&.ss__facet-list-options__option--filtered': { fontWeight: 'bold', color: a?.variables?.colors?.primary },
				'& .ss__facet-list-options__option__value': {
					marginLeft: l ? '' : '8px',
					'& .ss__facet-list-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
				},
			},
		}),
	z = j((t) => {
		const a = F(),
			l = A(),
			x = { hideCheckbox: !!t.horizontal, treePath: l },
			s = B('facetListOptions', a, x, t),
			{
				values: C,
				hideCheckbox: r,
				hideCount: k,
				onClick: c,
				previewOnFocus: v,
				hideCountParenthesis: y,
				respectSingleSelect: P,
				valueProps: N,
				facet: o,
				disableStyles: p,
				className: O,
				internalClassName: L,
				treePath: _,
			} = s,
			{ overrideElement: $, shouldRenderDefault: S } = D('facetListOptions', s);
		if (!S) return $;
		let d = !1;
		P && o?.multiple == 'single' && (d = !0);
		const f = {
				checkbox: { internalClassName: 'ss__facet-list-options__checkbox', ...g({ disableStyles: p }), theme: s?.theme, treePath: _ },
				radio: { internalClassName: 'ss__facet-list-options__radio', ...g({ disableStyles: p }), theme: s?.theme, treePath: _ },
			},
			w = V(s, K),
			m = C || o?.refinedValues;
		return m?.length
			? i(E, {
					children: i('div', {
						...w,
						className: b('ss__facet-list-options', O, L),
						children: m.map((e) => {
							const R = {
									listOption: {
										attributes: {
											'aria-label': `${
												e.filtered
													? `remove selected filter ${o?.label || ''} - ${e.label}`
													: o?.label
													? `filter by ${o?.label} - ${e.label}`
													: `filter by ${e.label}`
											}`,
										},
									},
								},
								T = W(R, s.lang || {}),
								n = q(T, { facet: o, value: e }, { activeBreakpoint: a?.activeBreakpoint });
							return u('a', {
								className: b('ss__facet-list-options__option', { 'ss__facet-list-options__option--filtered': e.filtered }),
								href: e.url?.link?.href,
								...N,
								onClick: (h) => {
									e.url?.link?.onClick(h), c && c(h);
								},
								...(v ? J(() => e?.preview && e.preview()) : {}),
								...n.listOption?.all,
								children: [
									d
										? !r && i(G, { ...f.radio, checked: e.filtered, disableA11y: !0, ...n.listOption.attributes })
										: !r && i(I, { ...f.checkbox, checked: e.filtered, disableA11y: !0, ...n.listOption.attributes }),
									u('span', {
										className: 'ss__facet-list-options__option__value',
										children: [
											i('span', { className: 'ss__facet-list-options__option__value__label', children: e.label }),
											!k &&
												e?.count > 0 &&
												i('span', { className: 'ss__facet-list-options__option__value__count', children: y ? `${e.count}` : `(${e.count})` }),
										],
									}),
								],
							});
						}),
					}),
			  })
			: null;
	});
export { z as F };
