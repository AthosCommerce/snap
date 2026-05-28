'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8488],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(fe, Z, e) {
				e.d(Z, { S: () => ie });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Y = e('../../node_modules/classnames/index.js'),
					O = e.n(Y),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					Q = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					se = e('./components/src/providers/snap.tsx'),
					oe = e('./components/src/providers/treePath.tsx'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ne = e('./components/src/utilities/mergeStyles.ts'),
					ae = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					ee = e('./components/src/hooks/useLang.tsx'),
					G = e('./components/src/hooks/useComponent.tsx'),
					$ = e('../../node_modules/deepmerge/dist/cjs.js'),
					te = e.n($);
				const x = ({ columns: b, gapSize: F, gridSize: f, theme: m }) =>
						(0, C.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: b ? `repeat(${b}, 1fr)` : `repeat(auto-fill, minmax(${f}, 1fr))`,
							gap: F,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: '1px solid',
								borderColor: m?.variables?.colors?.primary || 'initial',
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${b} - ${2 * Math.round((b + 2) / 2)}px)`,
								margin: `0 ${F} ${F} 0`,
								[`:nth-of-type(${b}n)`]: { marginRight: '0' },
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
					ie = (0, R.PA)((b) => {
						const F = (0, z.u)(),
							f = (0, se.uk)(),
							v = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, oe.LU)() },
							U = (0, q.v6)('facetGridOptions', F, v, b),
							{
								values: E,
								onClick: _,
								previewOnFocus: d,
								valueProps: w,
								facet: h,
								horizontal: p,
								className: A,
								internalClassName: V,
								customComponent: W,
							} = U;
						if (W) {
							const a = (0, G.x)(f?.templates?.library.import.component.facetGridOptions || {}, W);
							if (a) return (0, t.Y)(a, { ...U });
						}
						p && (U.columns = 0);
						const M = (0, ne.Z)(U, x),
							D = E || h?.refinedValues;
						return D?.length
							? (0, t.Y)(Q._, {
									children: (0, t.Y)('div', {
										...M,
										className: O()('ss__facet-grid-options', A, V),
										children: D.map((a) => {
											const H = {
													gridOption: {
														attributes: {
															'aria-label': `${
																a.filtered
																	? `remove selected filter ${h?.label || ''} - ${a.label}`
																	: h?.label
																	? `filter by ${h?.label} - ${a.label}`
																	: `filter by ${a.label}`
															}`,
														},
													},
												},
												K = te()(H, U.lang || {}),
												n = (0, ee.u)(K, { facet: h, value: a });
											return (0, t.Y)('a', {
												className: O()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': a.filtered }),
												href: a.url?.link?.href,
												...w,
												onClick: (o) => {
													a.url?.link?.onClick(o), _ && _(o);
												},
												...(d ? (0, ae.l)(() => a?.preview && a.preview()) : {}),
												...n.gridOption?.all,
												children: (0, t.Y)('span', {
													className: O()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': a.label.length > 3,
													}),
													children: a.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(fe, Z, e) {
				e.d(Z, { T: () => F });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Y = e('../../node_modules/classnames/index.js'),
					O = e.n(Y),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					Q = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					se = e('./components/src/providers/snap.tsx'),
					oe = e('./components/src/providers/treePath.tsx'),
					q = e('./components/src/utilities/defined.ts'),
					ne = e('./components/src/utilities/mergeProps.ts'),
					ae = e('./components/src/utilities/mergeStyles.ts'),
					ee = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					G = e('./components/src/hooks/useLang.tsx'),
					$ = e('./components/src/hooks/useComponent.tsx'),
					te = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(te),
					ie = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const b = ({ theme: f, horizontal: m, returnIcon: v }) =>
						m
							? (0, C.AH)({
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
											color: f?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[v ? '' : '&:before']: { content: `${v ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: f?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, C.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: f?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[v ? '' : '&:before']: { content: `${v ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: f?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					F = (0, R.PA)((f) => {
						const m = (0, z.u)(),
							v = (0, se.uk)(),
							E = { treePath: (0, oe.LU)() },
							_ = (0, ne.v6)('facetHierarchyOptions', m, E, f),
							{
								values: d,
								hideCount: w,
								returnIcon: h,
								onClick: p,
								previewOnFocus: A,
								horizontal: V,
								valueProps: W,
								facet: M,
								disableStyles: D,
								treePath: a,
								className: H,
								internalClassName: K,
								customComponent: n,
							} = _;
						if (n) {
							const r = (0, $.x)(v?.templates?.library.import.component.facetHierarchyOptions || {}, n);
							if (r) return (0, t.Y)(r, { ..._ });
						}
						const o = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, q.s)({ disableStyles: D }), theme: _?.theme, treePath: a },
							},
							s = (0, ae.Z)(_, b),
							B = d || M?.refinedValues;
						return B?.length
							? (0, t.Y)(Q._, {
									children: (0, t.Y)('div', {
										...s,
										className: O()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': V }, H, K),
										children: B.map((r) => {
											const y = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																r.filtered ? `selected ${r.label}` : M?.label ? `filter by ${M?.label} - ${r.label}` : `filter by ${r.label}`
															}`,
														},
													},
												},
												k = x()(y, _.lang || {}),
												l = (0, G.u)(k, { facet: M, value: r });
											return (0, t.FD)('a', {
												className: O()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': r.filtered },
													{ 'ss__facet-hierarchy-options__option--return': r.history && !r.filtered }
												),
												href: r.url?.link?.href,
												...W,
												onClick: (I) => {
													r.url?.link?.onClick(I), p && p(I);
												},
												...(A ? (0, ee.l)(() => r?.preview && r.preview()) : {}),
												...l.hierarchyOption?.all,
												children: [
													h && r.history && !r.filtered && (0, t.Y)(ie.I, { ...o.icon, ...(typeof h == 'string' ? { icon: h } : h) }),
													(0, t.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															r.label,
															!w &&
																r?.count > 0 &&
																!r.filtered &&
																(0, t.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', r.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'(fe, Z, e) {
				e.d(Z, { C: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Y = e('../../node_modules/classnames/index.js'),
					O = e.n(Y),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					Q = e('./components/src/providers/cache.tsx'),
					z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					se = e('./components/src/providers/snap.tsx'),
					oe = e('./components/src/providers/treePath.tsx'),
					q = e('./components/src/utilities/defined.ts'),
					ne = e('./components/src/utilities/mergeProps.ts'),
					ae = e('./components/src/utilities/mergeStyles.ts'),
					ee = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					G = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					$ = e('./components/src/hooks/useLang.tsx'),
					te = e('./components/src/hooks/useComponent.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					ie = e.n(x),
					b = e('./components/src/components/Molecules/Radio/Radio.tsx');
				const F = ({ horizontal: m, theme: v, hideCheckbox: U }) =>
						(0, C.AH)({
							display: m ? 'flex' : void 0,
							flexWrap: m ? 'wrap' : void 0,
							'& .ss__facet-list-options__option': {
								display: m ? void 0 : 'flex',
								alignItems: m ? void 0 : 'center',
								flex: m ? '0 1 auto' : void 0,
								padding: '6px',
								textDecoration: 'none',
								'&:hover': { cursor: 'pointer' },
								'&.ss__facet-list-options__option--filtered': { fontWeight: 'bold', color: v?.variables?.colors?.primary },
								'& .ss__facet-list-options__option__value': {
									marginLeft: U ? '' : '8px',
									'& .ss__facet-list-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
								},
							},
						}),
					f = (0, R.PA)((m) => {
						const v = (0, z.u)(),
							U = (0, se.uk)(),
							E = (0, oe.LU)(),
							_ = { hideCheckbox: !!m.horizontal, treePath: E },
							d = (0, ne.v6)('facetListOptions', v, _, m),
							{
								values: w,
								hideCheckbox: h,
								hideCount: p,
								onClick: A,
								previewOnFocus: V,
								hideCountParenthesis: W,
								respectSingleSelect: M,
								valueProps: D,
								facet: a,
								disableStyles: H,
								className: K,
								internalClassName: n,
								treePath: o,
								customComponent: s,
							} = d;
						if (s) {
							const l = (0, te.x)(U?.templates?.library.import.component.facetListOptions || {}, s);
							if (l) return (0, t.Y)(l, { ...d });
						}
						let B = !1;
						M && a?.multiple == 'single' && (B = !0);
						const r = {
								checkbox: { internalClassName: 'ss__facet-list-options__checkbox', ...(0, q.s)({ disableStyles: H }), theme: d?.theme, treePath: o },
								radio: { internalClassName: 'ss__facet-list-options__radio', ...(0, q.s)({ disableStyles: H }), theme: d?.theme, treePath: o },
							},
							y = (0, ae.Z)(d, F),
							k = w || a?.refinedValues;
						return k?.length
							? (0, t.Y)(Q._, {
									children: (0, t.Y)('div', {
										...y,
										className: O()('ss__facet-list-options', K, n),
										children: k.map((l) => {
											const I = {
													listOption: {
														attributes: {
															'aria-label': `${
																l.filtered
																	? `remove selected filter ${a?.label || ''} - ${l.label}`
																	: a?.label
																	? `filter by ${a?.label} - ${l.label}`
																	: `filter by ${l.label}`
															}`,
														},
													},
												},
												S = ie()(I, d.lang || {}),
												J = (0, $.u)(S, { facet: a, value: l });
											return (0, t.FD)('a', {
												className: O()('ss__facet-list-options__option', { 'ss__facet-list-options__option--filtered': l.filtered }),
												href: l.url?.link?.href,
												...D,
												onClick: (P) => {
													l.url?.link?.onClick(P), A && A(P);
												},
												...(V ? (0, G.l)(() => l?.preview && l.preview()) : {}),
												...J.listOption?.all,
												children: [
													B
														? !h && (0, t.Y)(b.s, { ...r.radio, checked: l.filtered, disableA11y: !0, ...J.listOption.attributes })
														: !h && (0, t.Y)(ee.S, { ...r.checkbox, checked: l.filtered, disableA11y: !0, ...J.listOption.attributes }),
													(0, t.FD)('span', {
														className: 'ss__facet-list-options__option__value',
														children: [
															(0, t.Y)('span', { className: 'ss__facet-list-options__option__value__label', children: l.label }),
															!p &&
																l?.count > 0 &&
																(0, t.Y)('span', {
																	className: 'ss__facet-list-options__option__value__count',
																	children: W ? `${l.count}` : `(${l.count})`,
																}),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(fe, Z, e) {
				e.d(Z, { P: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Y = e('../../node_modules/classnames/index.js'),
					O = e.n(Y),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					Q = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					z = e('./components/src/utilities/defined.ts'),
					se = e('./components/src/utilities/mergeProps.ts'),
					oe = e('./components/src/utilities/mergeStyles.ts'),
					q = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ne = e('./components/src/providers/cache.tsx'),
					ae = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ee = e('./components/src/providers/snap.tsx'),
					G = e('./components/src/providers/treePath.tsx'),
					$ = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					te = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					x = e('./components/src/hooks/useLang.tsx'),
					ie = e('./components/src/hooks/useComponent.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					F = e.n(b),
					f = e('../../node_modules/colord/index.mjs'),
					m = e('./components/src/components/Atoms/Image/Image.tsx');
				const v = ({ columns: E, gridSize: _, gapSize: d, horizontal: w, theme: h }) =>
						(0, C.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: E ? `repeat(${E}, calc((100% - (${E - 1} * ${d}))/ ${E}))` : `repeat(auto-fill, minmax(${_}, 1fr))`,
							gap: d,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${E} - ${2 * Math.round((E + 2) / 2)}px )`,
								marginRight: d,
								marginBottom: d,
								[`:nth-of-type(${E}n)`]: { marginRight: '0' },
								'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '100%', padding: '2px' },
								'.ss__facet-palette-options__option__palette': {
									paddingTop: 'calc(100% - 2px)',
									border: '1px solid #EBEBEB',
									borderRadius: '100%',
									position: 'relative',
									'.ss__facet-palette-options__icon': {
										position: 'absolute',
										top: 0,
										right: 0,
										left: 0,
										margin: 'auto',
										bottom: 0,
										textAlign: 'center',
										stroke: 'black',
										strokeWidth: '3px',
										strokeLinejoin: 'round',
										opacity: 0,
									},
									'&.ss__facet-palette-options__option__palette--image': { paddingTop: '0', height: 'auto' },
								},
								'.ss__facet-palette-options__option__value': {
									display: 'block',
									textAlign: 'center',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								},
							},
							'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
							'&.ss__facet-palette-options--list': {
								display: 'flex',
								flexDirection: w ? 'row' : 'column',
								'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
								'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
								'.ss__facet-palette-options__option--list': { alignItems: 'center' },
								'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
								'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
							},
							'&.ss__facet-palette-options--grid': {
								'.ss__facet-palette-options__checkbox': {
									display: 'flex',
									textAlign: 'center',
									overflow: 'hidden',
									margin: 'auto',
									marginBottom: '5px',
								},
								'.ss__facet-palette-options__option--filtered': {
									'.ss__facet-palette-options__option__wrapper': {
										borderColor: h?.variables?.colors?.primary || '#333 !important',
										padding: '0px',
										borderWidth: '4px',
									},
								},
								'.ss__facet-palette-options__option': {
									'&:hover': {
										cursor: 'pointer',
										'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
										'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
									},
								},
							},
							'.ss__facet-palette-options__option__value__count': {
								fontSize: '0.8em',
								display: 'block',
								textAlign: 'center',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							},
						}),
					U = (0, R.PA)((E) => {
						const _ = (0, ae.u)(),
							d = (0, ee.uk)(),
							w = (0, G.LU)(),
							h = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: E.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: w,
							},
							p = (0, se.v6)('facetPaletteOptions', _, h, E),
							{
								values: A,
								hideLabel: V,
								layout: W,
								hideCount: M,
								hideCheckbox: D,
								colorMapping: a,
								hideIcon: H,
								onClick: K,
								previewOnFocus: n,
								valueProps: o,
								facet: s,
								horizontal: B,
								disableStyles: r,
								className: y,
								internalClassName: k,
								treePath: l,
								customComponent: I,
							} = p;
						if (I) {
							const i = (0, ie.x)(d?.templates?.library.import.component.facetPaletteOptions || {}, I);
							if (i) return (0, t.Y)(i, { ...p });
						}
						B && (p.columns = 0);
						const S = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, z.s)({ disableStyles: r, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: p?.theme,
									treePath: l,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, z.s)({ disableStyles: r }), theme: p?.theme, treePath: l },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, z.s)({ disableStyles: r }),
									theme: p?.theme,
									treePath: l,
								},
							},
							J = (0, oe.Z)(p, v),
							P = A || s?.values;
						return P?.length
							? (0, t.Y)(ne._, {
									children: (0, t.Y)('div', {
										...J,
										className: O()('ss__facet-palette-options', `ss__facet-palette-options--${W?.toLowerCase()}`, y, k),
										children: P.map((i) => {
											const re = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																i.filtered
																	? `remove selected filter ${s?.label || ''} - ${i.label}`
																	: s?.label
																	? `filter by ${s?.label} - ${i.label}`
																	: `filter by ${i.label}`
															}`,
														},
													},
												},
												le = F()(re, p.lang || {}),
												X = (0, x.u)(le, { facet: s, value: i });
											let c;
											a && (c = Object.fromEntries(Object.entries(a).map(([j, T]) => [j.toLowerCase(), T])));
											const _e = c && c[i.label.toLowerCase()] && c[i.label.toLowerCase()].background ? c[i.label.toLowerCase()].background : i.value,
												u =
													c && c[i.label.toLowerCase()] && c[i.label.toLowerCase()].backgroundImageUrl
														? c[i.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let L = !1;
											if (_e)
												try {
													L = (0, f.Mj)(_e.toLowerCase()).isDark();
												} catch {}
											return (0, t.FD)(
												'a',
												{
													className: O()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': i.filtered },
														{ 'ss__facet-palette-options__option--dark': L },
														`ss__facet-palette-options__option--${W?.toLowerCase()}`
													),
													href: i.url?.link?.href,
													...(V ? { title: i.label } : {}),
													...o,
													onClick: (j) => {
														i.url?.link?.onClick(j), K && K(j);
													},
													'aria-atomic': 'false',
													...(n ? (0, $.l)(() => i?.preview && i.preview()) : {}),
													...X.paletteOption?.all,
													children: [
														!D && (0, t.Y)(te.S, { ...S.checkbox, checked: i.filtered, disableA11y: !0, ...X.paletteOption.attributes }),
														(0, t.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, t.FD)('div', {
																className: O()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${Q.p(i.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': u }
																),
																style: { background: _e },
																children: [
																	u ? (0, t.Y)(m._, { ...S.image, src: u, alt: i.label || i.value.toString() }) : null,
																	!H && i.filtered && W?.toLowerCase() == 'grid' && (0, t.Y)(q.I, { ...S.icon }),
																],
															}),
														}),
														!V &&
															(0, t.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: c?.[i.label.toLowerCase()]?.label ?? i.label,
															}),
														!M &&
															i?.count > 0 &&
															(0, t.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', i.count, ')'] }),
													],
												},
												i.value
											);
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(fe, Z, e) {
				e.d(Z, { s: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					R = e.n(O),
					Q = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/utilities/defined.ts'),
					se = e('./components/src/utilities/mergeProps.ts'),
					oe = e('./components/src/utilities/mergeStyles.ts'),
					q = e('./components/src/providers/cache.tsx'),
					ne = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ae = e('./components/src/providers/snap.tsx'),
					ee = e('./components/src/providers/treePath.tsx'),
					G = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					$ = e('./components/src/hooks/useA11y.tsx'),
					te = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useComponent.tsx'),
					ie = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(ie);
				const F = ({ size: m, native: v }) =>
						v
							? (0, Y.AH)({})
							: (0, Y.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: m,
									width: m,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					f = (0, Q.PA)((m) => {
						const v = (0, ne.u)(),
							U = (0, ae.uk)(),
							E = (0, ee.LU)(),
							_ = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: v.variables?.colors.primary || '#000000',
								treePath: E,
							},
							d = (0, se.v6)('radio', v, _, m),
							{
								checked: w,
								color: h,
								disabled: p,
								checkedIcon: A,
								unCheckedIcon: V,
								onClick: W,
								startChecked: M,
								native: D,
								disableA11y: a,
								disableStyles: H,
								className: K,
								internalClassName: n,
								size: o,
								treePath: s,
								lang: B,
								customComponent: r,
								style: y,
								styleScript: k,
								themeStyleScript: l,
								name: I,
								...S
							} = d;
						if (r) {
							const L = (0, x.x)(U?.templates?.library.import.component.radio || {}, r);
							if (L) return (0, t.Y)(L, { ...d });
						}
						const J = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, z.s)({ size: o, color: h, disableStyles: H }),
								theme: d.theme,
								treePath: s,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, z.s)({ size: o, color: h, disableStyles: H }),
								theme: d.theme,
								treePath: s,
							},
						};
						let P, i;
						const re = w === void 0;
						re ? ([P, i] = (0, C.J0)(M)) : (P = w);
						const le = (L) => {
								p || (re && i && i((j) => !j), W && W(L));
							},
							X = (0, oe.Z)(d, F),
							c = { radio: {} },
							_e = b()(c, B || {}),
							u = (0, te.u)(_e, { disabled: p, checkedState: P });
						return (0, t.Y)(q._, {
							children: D
								? (0, t.Y)('div', {
										className: R()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': p }, K, n),
										...X,
										children: (0, t.Y)('input', {
											className: R()('ss__radio__input'),
											'aria-checked': P,
											type: 'radio',
											onClick: (L) => le(L),
											disabled: p,
											checked: P,
											tabIndex: a ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...X,
										className: R()('ss__radio', { 'ss__radio--disabled': p, 'ss__radio--active': P }, K, n),
										onClick: (L) => le(L),
										ref: (L) => (a ? null : (0, $.iy)(L)),
										...u.radio?.all,
										role: 'radio',
										'aria-checked': P,
										'aria-disabled': p,
										...S,
										children: P
											? (0, t.Y)(G.I, { ...J.activeIcon, ...(typeof A == 'string' ? { icon: A } : A) })
											: (0, t.Y)(G.I, { ...J.inactiveIcon, ...(typeof V == 'string' ? { icon: V } : V) }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(fe, Z, e) {
				e.d(Z, { D: () => F });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Y = e('../../node_modules/classnames/index.js'),
					O = e.n(Y),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					Q = e('./components/src/utilities/defined.ts'),
					z = e('./components/src/utilities/mergeProps.ts'),
					se = e('./components/src/utilities/mergeStyles.ts'),
					oe = e('./components/src/providers/cache.tsx'),
					q = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ne = e('./components/src/providers/snap.tsx'),
					ae = e('./components/src/providers/treePath.tsx'),
					ee = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					G = e('./components/src/components/Atoms/Button/Button.tsx'),
					$ = e('../../node_modules/deepmerge/dist/cjs.js'),
					te = e.n($),
					x = e('./components/src/hooks/useLang.tsx'),
					ie = e('./components/src/hooks/useComponent.tsx');
				const b = ({ theme: f }) =>
						(0, C.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${f?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					F = (0, R.PA)((f) => {
						const m = (0, q.u)(),
							v = (0, ne.uk)(),
							E = {
								placeholderText: 'Search',
								treePath: (0, ae.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							_ = (0, z.v6)('searchInput', m, E, f);
						(_.submitSearchButton = { ...E.submitSearchButton, ..._.submitSearchButton, ...f?.submitSearchButton }),
							(_.clearSearchButton = { ...E.clearSearchButton, ..._.clearSearchButton, ...f?.clearSearchButton }),
							(_.closeSearchButton = { ...E.closeSearchButton, ..._.closeSearchButton, ...f?.closeSearchButton });
						const {
							placeholderText: d,
							value: w,
							submitSearchButton: h,
							closeSearchButton: p,
							clearSearchButton: A,
							hideSubmitSearchButton: V,
							hideClearSearchButton: W,
							hideCloseSearchButton: M,
							inputRef: D,
							inputName: a,
							onChange: H,
							onClick: K,
							onKeyDown: n,
							onKeyUp: o,
							disabled: s,
							disableStyles: B,
							className: r,
							internalClassName: y,
							treePath: k,
							customComponent: l,
						} = _;
						if (l) {
							const c = (0, ie.x)(v?.templates?.library.import.component.searchInput || {}, l);
							if (c) return (0, t.Y)(c, { ..._ });
						}
						let I, S;
						w === void 0 ? ([I, S] = (0, ee.J0)('')) : (I = w);
						const P = {
								submitSearchButton: {
									...h,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, Q.s)({ disableStyles: B }),
									theme: _?.theme,
									treePath: k,
								},
								clearSearchButton: {
									...A,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (c) => {
										D?.current && (((D?.current).value = ''), (D?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											S && S(''),
											A?.onClick && A.onClick(c);
									},
									...(0, Q.s)({ disableStyles: B }),
									theme: _?.theme,
									treePath: k,
								},
								closeSearchButton: {
									...p,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, Q.s)({ disableStyles: B }),
									theme: _?.theme,
									treePath: k,
								},
							},
							i = (0, se.Z)(_, b),
							re = {
								placeholderText: { attributes: { placeholder: d } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							le = te()(re, _.lang || {}),
							X = (0, x.u)(le, {});
						return (0, t.Y)(oe._, {
							children: (0, t.FD)('div', {
								...i,
								className: O()('ss__search-input', { 'ss__input--disabled': s }, r, y),
								onClick: (c) => !s && K && K(c),
								children: [
									!M && p && (0, t.Y)(G.$, { ...P.closeSearchButton, ...X.closeSearchButton.all }),
									(0, t.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...X.placeholderText.attributes,
										value: I,
										name: a,
										ref: D,
										onKeyDown: (c) => n && n(c),
										onKeyUp: (c) => o && o(c),
										onChange: (c) => {
											S && S(c.target.value || ''), H && H(c);
										},
										disabled: s,
									}),
									(0, t.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											!W && A && I?.length ? (0, t.Y)(G.$, { ...P.clearSearchButton, ...X.clearSearchButton.all }) : null,
											!V && h && (0, t.Y)(G.$, { ...P.submitSearchButton, ...X.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/components/Organisms/Facet/Facet.tsx'(fe, Z, e) {
				e.d(Z, { s: () => V });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					R = e.n(O),
					Q = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'),
					se = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					oe = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					q = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					ne = e('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					ae = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					ee = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					G = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					$ = e('./components/src/types.ts'),
					te = e('./components/src/utilities/cloneWithProps.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					ie = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					F = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/snap.tsx'),
					v = e('./components/src/providers/treePath.tsx'),
					U = e('./components/src/hooks/useA11y.tsx'),
					E = e('./components/src/hooks/useLang.tsx'),
					_ = e('./components/src/hooks/useComponent.tsx'),
					d = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(d),
					h = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const A = ({ disableCollapse: M, color: D, theme: a }) =>
						(0, Y.AH)({
							width: '100%',
							margin: '0 0 20px 0',
							'& .ss__facet__header': {
								cursor: M ? void 0 : 'pointer',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								color: D || a?.variables?.colors?.primary,
								border: 'none',
								borderBottom: `2px solid ${a?.variables?.colors?.primary || '#ccc'}`,
								padding: '6px 0',
								'& .ss__facet__header__inner': { display: 'flex' },
							},
							'& .ss__facet__header__clear-all': {
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								marginLeft: '10px',
								border: 'none',
								padding: '0',
								color: D || a?.variables?.colors?.primary,
								'&:hover': { textDecoration: 'underline' },
								'& .ss__icon': { marginLeft: '5px' },
							},
							'& .ss__facet__options': { marginTop: '8px', maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' },
							'& .ss__facet__show-more-less': { display: 'block', margin: '8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
							'& .ss__search-input': { margin: '16px 0 0 0' },
							'& .ss__facet__header__selected-count': { margin: '0px 5px' },
							'.ss__facet__range-inputs': { display: 'flex', flexDirection: 'column', '.ss__facet__range-inputs__separator': { margin: '5px' } },
							'.ss__facet__range-inputs__row': {
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								'&.ss__facet__range-inputs__row--button-wrapper': {
									justifyContent: 'center',
									'.ss__facet__range-input__button--submit': { margin: '10px' },
								},
							},
							'.ss__facet__range-input': {
								flexDirection: 'row',
								display: 'flex',
								border: `1px solid ${a?.variables?.colors?.secondary || '#ccc'}`,
								backgroundColor: 'white',
								alignItems: 'center',
								'.ss__facet__range-input__prefix': { padding: '0 5px' },
								'.ss__facet__range-input__input': { width: '100%', border: 'none', minHeight: '35px' },
							},
						}),
					V = (0, Q.PA)((M) => {
						const D = (0, f.u)(),
							a = (0, m.uk)(),
							K = {
								limit: 12,
								disableOverflow: !1,
								iconCollapse: 'angle-up',
								iconExpand: 'angle-down',
								showMoreText: 'Show More',
								showLessText: 'Show Less',
								iconOverflowMore: 'plus',
								iconOverflowLess: 'minus',
								clearAllText: 'Clear All',
								rangeInputsSubmitButtonText: 'Submit',
								rangeInputsSeparatorText: ' - ',
								searchable: !1,
								treePath: (0, v.LU)(),
								name: (0, p.P)(M.facet.field),
							};
						let n = (0, ie.v6)('facet', D, K, M);
						n.display && n.display[n.facet?.display] && (n = { ...n, ...n.display[n.facet?.display] }),
							n.fields && n.fields[n.facet?.field] && (n = { ...n, ...n.fields[n.facet?.field] });
						const {
							disableCollapse: o,
							facet: s,
							iconCollapse: B,
							iconExpand: r,
							limit: y,
							statefulOverflow: k,
							disableOverflow: l,
							iconColor: I,
							color: S,
							previewOnFocus: J,
							valueProps: P,
							showSelectedCount: i,
							hideSelectedCountParenthesis: re,
							clearAllIcon: le,
							showClearAllText: X,
							justContent: c,
							horizontal: _e,
							disableStyles: u,
							className: L,
							internalClassName: j,
							treePath: T,
							customComponent: ue,
						} = n;
						if (ue) {
							const N = (0, _.x)(a?.templates?.library.import.component.facet || {}, ue);
							if (N) return (0, t.Y)(N, { ...n });
						}
						const ce = {
							dropdown: {
								internalClassName: 'ss__facet__dropdown',
								disableClickOutside: !0,
								disableOverlay: !0,
								...(0, x.s)({ disableStyles: u }),
								theme: n?.theme,
								treePath: T,
							},
							icon: {
								internalClassName: 'ss__facet__dropdown__icon',
								size: '12px',
								fill: I || S,
								...(0, x.s)({ disableStyles: u }),
								theme: n?.theme,
								treePath: `${T} dropdown`,
							},
							button: { ...(0, x.s)({ disableStyles: u }), theme: n?.theme, treePath: `${T} dropdown` },
							showMoreLessIcon: {
								internalClassName: 'ss__facet__show-more-less__icon',
								size: '10px',
								fill: I || S,
								...(0, x.s)({ disableStyles: u }),
								theme: n?.theme,
								treePath: T,
							},
							facetHierarchyOptions: {
								internalClassName: 'ss__facet__facet-hierarchy-options',
								...(0, x.s)({ disableStyles: u, previewOnFocus: J, valueProps: P, horizontal: _e }),
								theme: n?.theme,
								treePath: T,
							},
							facetListOptions: {
								internalClassName: 'ss__facet__facet-list-options',
								...(0, x.s)({ disableStyles: u, previewOnFocus: J, valueProps: P, horizontal: _e }),
								theme: n?.theme,
								treePath: T,
							},
							facetGridOptions: {
								internalClassName: 'ss__facet__facet-grid-options',
								...(0, x.s)({ disableStyles: u, previewOnFocus: J, valueProps: P, horizontal: _e }),
								theme: n?.theme,
								treePath: T,
							},
							facetPaletteOptions: {
								internalClassName: 'ss__facet__facet-palette-options',
								...(0, x.s)({ disableStyles: u, previewOnFocus: J, valueProps: P, horizontal: _e }),
								theme: n?.theme,
								treePath: T,
							},
							facetSlider: { internalClassName: 'ss__facet__facet-slider', ...(0, x.s)({ disableStyles: u }), theme: n?.theme, treePath: T },
							searchInput: { internalClassName: 'ss__facet__search-input', ...(0, x.s)({ disableStyles: u }), theme: n?.theme, treePath: T },
						};
						let Ee;
						function Oe(N) {
							return N.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
						}
						const [pe, me] = (0, C.J0)();
						if (
							((0, C.vJ)(() => {
								k &&
									me({
										enabled: !1,
										limited: !0,
										limit: 0,
										remaining: void 0,
										setLimit: function (he) {
											he != this.limit && ((this.enabled = !0), (this.limit = he), this.calculate());
										},
										toggle: function (he) {
											typeof he < 'u' ? (this.limited = he) : (this.limited = !this.limited), this.calculate();
										},
										calculate: function () {
											if (this.limit > 0) {
												const he = s?.values?.length - this.limit;
												he > 0 && !s?.search?.input
													? ((this.enabled = !0), this.limited ? (this.remaining = he) : (this.remaining = 0))
													: (this.enabled = !1);
											}
											me({ ...this });
										},
									});
							}, []),
							s?.overflow && y && Number.isInteger(y) && !l)
						)
							if (k) {
								let N = s?.values || [];
								if (s?.search?.input) {
									const he = new RegExp(Oe(s?.search?.input), 'i');
									N = s?.values.filter((xe) => String(xe?.label || '').match(he));
								}
								pe?.enabled && pe?.limited && (N = N.slice(0, pe?.limit)), pe?.limit !== y && pe?.setLimit(y), (Ee = N);
							} else s.overflow?.setLimit(y), (Ee = s?.refinedValues);
						else s?.overflow && Number.isInteger(y) ? (Ee = s?.values.slice(0, y)) : (Ee = s?.values);
						const g = (0, b.Z)(n, A),
							de = {
								allowableTypes: M.treePath?.includes('autocomplete') ? [] : ['list', 'grid', 'palette'],
								searchFilter: (N) => {
									s?.search && (s.search.input = N.target.value);
								},
							};
						let Me = !0;
						s.display == $.Q.TOGGLE && s && s?.values.length !== 1 && (Me = !1);
						const ge = { limitedValues: Ee, overflowState: pe, searchableFacet: de, subProps: ce, className: L, internalClassName: j, ...n },
							De = {
								showMoreText: { value: ge.showMoreText },
								showLessText: { value: ge.showLessText },
								dropdownButton: {
									attributes: {
										'aria-label': `currently ${s?.collapsed ? 'collapsed' : 'open'} ${s.label} facet dropdown ${
											s.values?.length ? s.values?.length + ' options' : ''
										}`,
									},
								},
								clearAllText: { value: ge.clearAllText },
								submitRangeButton: { value: ge.rangeInputsSubmitButtonText },
							},
							Ce = w()(De, n.lang || {}),
							Pe = (0, E.u)(Ce, { facet: s }),
							ve = s?.values?.filter((N) => N?.filtered).length || s?.active?.high !== s?.range?.high || s?.active?.low !== s?.range?.low;
						return s && Me
							? (0, t.Y)(F._, {
									children: (0, t.Y)('div', {
										...g,
										className: R()(
											'ss__facet',
											`ss__facet--${s.field}`,
											`${s.collapsed ? 'ss__facet--collapsed' : ''}`,
											L,
											j,
											`${s.display ? `ss__facet--${s.display}` : ''}`,
											(k ? pe?.remaining : (s?.overflow?.remaining || 0) > 0) || s?.display == 'slider' ? '' : 'ss__facet--showing-all'
										),
										children: c
											? (0, t.Y)(W, { ...ge, mergedLang: Pe })
											: (0, t.Y)(G.m, {
													...ce.dropdown,
													open: o || !s?.collapsed,
													onClick: () => !o && s.toggleCollapse && s?.toggleCollapse(),
													disableA11y: !0,
													button: (0, t.FD)('div', {
														className: 'ss__facet__header',
														ref: (N) => (0, U.iy)(N, o ? -1 : 0),
														role: 'heading',
														'aria-level': 3,
														...Pe.dropdownButton.attributes,
														children: [
															(0, t.FD)('span', {
																className: 'ss__facet__header__inner',
																children: [
																	(0, t.Y)('span', { ...Pe.dropdownButton.value, children: s?.label }),
																	i && ve && s.type !== 'range'
																		? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: re ? ve : `(${ve})` })
																		: null,
																	(Pe.clearAllText.value || le) && ve
																		? (0, t.Y)(h.$, {
																				...ce.button,
																				internalClassName: 'ss__facet__header__clear-all',
																				name: 'reset-facet',
																				onClick: (N) => {
																					N.stopPropagation(), s?.clear.url.link.onClick();
																				},
																				icon: le || void 0,
																				children: Pe.clearAllText.value && X ? (0, t.Y)('label', { ...Pe.clearAllText.all }) : null,
																		  })
																		: (0, t.Y)(t.FK, {}),
																],
															}),
															!o &&
																(0, t.Y)(ee.I, {
																	...ce.icon,
																	...(s?.collapsed
																		? { ...(typeof r == 'string' ? { icon: r } : r) }
																		: { ...(typeof B == 'string' ? { icon: B } : B) }),
																	name: s?.collapsed ? 'expand' : 'collapse',
																}),
														],
													}),
													children: (0, t.Y)(W, { ...ge, mergedLang: Pe }),
											  }),
									}),
							  })
							: null;
					}),
					W = (M) => {
						const {
								searchableFacet: D,
								subProps: a,
								className: H,
								internalClassName: K,
								limitedValues: n,
								facet: o,
								statefulOverflow: s,
								limit: B,
								overflowSlot: r,
								optionsSlot: y,
								searchable: k,
								iconOverflowMore: l,
								iconOverflowLess: I,
								disableOverflow: S,
								previewOnFocus: J,
								rangeInputs: P,
								rangeInputsPrefix: i,
								rangeInputsInheritDefaultValues: re,
								rangeInputsSeparatorText: le,
								justContent: X,
								valueProps: c,
								hideShowMoreLessText: _e,
								treePath: u,
								mergedLang: L,
							} = M,
							[j, T] = (0, C.J0)(re && o.type === 'range' ? o?.range?.low : void 0),
							[ue, ce] = (0, C.J0)(re && o.type === 'range' ? o?.range?.high : void 0);
						(0, C.vJ)(() => {
							re && o.type === 'range' && o?.active?.high !== ue && ce(o?.active?.high),
								re && o.type === 'range' && o?.active?.low !== j && T(o?.active?.low);
						}, [o]);
						const Ee = (g) => {
								T(g[0]), ce(g[1]);
							},
							Oe = (g) => {
								g.key === 'Enter' && typeof j == 'number' && typeof ue == 'number' && pe.current?.base?.click();
							},
							pe = (0, C.li)();
						let me;
						return (
							s ? (me = M.overflowState) : (me = o.overflow),
							(0, t.FD)(t.FK, {
								children: [
									k &&
										D.allowableTypes.includes(o.display) &&
										(0, t.Y)(ae.D, { ...a.searchInput, onChange: D.searchFilter, placeholderText: `Search ${o.label}`, treePath: u }),
									(0, t.Y)('div', {
										className: R()('ss__facet__options', X ? H : '', X ? K : ''),
										children: (() => {
											if (y) return (0, te.Y)(y, { facet: o, valueProps: c, limit: B, previewOnFocus: J, treePath: u });
											switch (o?.display) {
												case $.Q.SLIDER:
													return (0, t.Y)(ne.l, { ...a.facetSlider, onChange: Ee, facet: o, treePath: u });
												case $.Q.GRID:
													return (0, t.Y)(se.S, { ...a.facetGridOptions, values: n, facet: o, treePath: u });
												case $.Q.PALETTE:
													return (0, t.Y)(oe.P, { ...a.facetPaletteOptions, values: n, facet: o, treePath: u });
												case $.Q.HIERARCHY:
													return (0, t.Y)(q.T, { ...a.facetHierarchyOptions, values: n, facet: o, treePath: u });
												default:
													return (0, t.Y)(z.C, { ...a.facetListOptions, values: n, facet: o, treePath: u });
											}
										})(),
									}),
									P &&
										(o.type === 'range' || o.type === 'range-buckets') &&
										(0, t.FD)('div', {
											className: 'ss__facet__range-inputs',
											children: [
												(0, t.FD)('div', {
													className: 'ss__facet__range-inputs__row',
													children: [
														(0, t.FD)('div', {
															className: 'ss__facet__range-input ss__facet__range-input--low',
															children: [
																i && (0, t.Y)('span', { className: 'ss__facet__range-input__prefix', children: i }),
																(0, t.Y)('input', {
																	type: 'number',
																	className: 'ss__facet__range-input__input',
																	value: j,
																	onInput: (g) => (g.currentTarget.value ? T(Number(g.currentTarget.value)) : T(void 0)),
																	onKeyUp: Oe,
																}),
															],
														}),
														(0, t.Y)('span', { className: 'ss__facet__range-inputs__separator', children: le }),
														(0, t.FD)('div', {
															className: 'ss__facet__range-input ss__facet__range-input--high',
															children: [
																i && (0, t.Y)('span', { className: 'ss__facet__range-input__prefix', children: i }),
																(0, t.Y)('input', {
																	type: 'number',
																	className: 'ss__facet__range-input__input',
																	value: ue,
																	onInput: (g) => (g.currentTarget.value ? ce(Number(g.currentTarget.value)) : ce(void 0)),
																	onKeyUp: Oe,
																}),
															],
														}),
													],
												}),
												(0, t.Y)('div', {
													className: 'ss__facet__range-inputs__row ss__facet__range-inputs__row--button-wrapper',
													children: (0, t.Y)(h.$, {
														internalClassName: 'ss__facet__range-input__button--submit',
														ref: pe,
														onClick: () => {
															if (o?.services?.urlManager && typeof j == 'number' && typeof ue == 'number') {
																let g = j,
																	de = ue;
																de < g && ((g = ue), (de = j), T(g), ce(de)),
																	o?.range?.low !== void 0 && g < o?.range?.low && ((g = o?.range?.low), T(g)),
																	o?.range?.high !== void 0 && g > o?.range?.high && ((g = o?.range?.high), T(g)),
																	o?.range?.low !== void 0 && de < o?.range?.low && ((de = o?.range?.low), ce(de)),
																	o?.range?.high !== void 0 && de > o?.range?.high && ((de = o?.range?.high), ce(de)),
																	o.services.urlManager.remove('page').set(`filter.${o.field}`, { low: g, high: de }).go();
															}
														},
														children: L.submitRangeButton.value ? (0, t.Y)('label', { ...L.submitRangeButton.all }) : null,
													}),
												}),
											],
										}),
									!S &&
										me?.enabled &&
										(0, t.Y)('div', {
											className: 'ss__facet__show-more-less',
											'aria-live': 'polite',
											onClick: () => me?.toggle(),
											ref: (g) => (0, U.iy)(g),
											children: r
												? (0, te.Y)(r, { facet: o, treePath: u })
												: (0, t.FD)(t.FK, {
														children: [
															(0, t.Y)(ee.I, {
																...a.showMoreLessIcon,
																treePath: u,
																name: (me?.remaining || 0) > 0 ? 'overflow-more' : 'overflow-less',
																...((me?.remaining || 0) > 0
																	? { ...(typeof l == 'string' ? { icon: l } : l) }
																	: { ...(typeof I == 'string' ? { icon: I } : I) }),
															}),
															!_e && (0, t.Y)('span', { ...((me?.remaining || 0) > 0 ? L.showMoreText?.all : L.showLessText?.all) }),
														],
												  }),
										}),
								],
							})
						);
					};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(fe, Z, e) {
				e.d(Z, { l: () => t });
				const t = (C, Y = { delay: 333, focusElem: !0 }) => {
					let O;
					return {
						onMouseEnter: (R) => {
							clearTimeout(O),
								(O = window.setTimeout(() => {
									Y.focusElem && R.target.focus(), C && C();
								}, Y.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(O);
						},
					};
				};
			},
		},
	]);
})();
