'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8488],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(fe, G, e) {
				e.d(G, { S: () => ae });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					D = e.n($),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					V = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					q = e('./components/src/providers/snap.tsx'),
					ee = e('./components/src/providers/treePath.tsx'),
					J = e('./components/src/utilities/mergeProps.ts'),
					te = e('./components/src/utilities/mergeStyles.ts'),
					se = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					Z = e('./components/src/hooks/useLang.tsx'),
					H = e('./components/src/hooks/useComponent.tsx'),
					F = e('../../node_modules/deepmerge/dist/cjs.js'),
					Q = e.n(F),
					C = e('../../node_modules/color/index.js'),
					oe = e.n(C);
				const ne = ({ columns: p, gapSize: m, gridSize: P, theme: k }) => {
						const S = k?.variables,
							i = new (oe())(S?.colors.primary || void 0),
							h = i.isDark() ? '#fff' : '#000';
						return (0, M.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: p ? `repeat(${p}, 1fr)` : `repeat(auto-fill, minmax(${P}, 1fr))`,
							gap: m,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${i.hex() || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${p} - ${2 * Math.round((p + 2) / 2)}px)`,
								margin: `0 ${m} ${m} 0`,
								[`:nth-of-type(${p}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: i.hex() || '#ccc', color: h || '#333' },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: i.hex() || '#f8f8f8', color: h || '#333' },
								'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						});
					},
					ae = (0, K.PA)((p) => {
						const m = (0, w.u)(),
							P = (0, q.uk)(),
							S = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, ee.LU)() },
							i = (0, J.v6)('facetGridOptions', m, S, p),
							{
								values: h,
								onClick: A,
								previewOnFocus: x,
								valueProps: L,
								facet: d,
								horizontal: j,
								className: z,
								internalClassName: u,
								customComponent: b,
							} = i;
						if (b) {
							const _ = (0, H.x)(P?.templates?.library.import.component.facetGridOptions || {}, b);
							if (_) return (0, t.Y)(_, { ...i });
						}
						j && (i.columns = 0);
						const l = (0, te.Z)(i, ne),
							y = h || d?.refinedValues;
						return y?.length
							? (0, t.Y)(V._, {
									children: (0, t.Y)('div', {
										...l,
										className: D()('ss__facet-grid-options', z, u),
										children: y.map((_) => {
											const a = {
													gridOption: {
														attributes: {
															'aria-label': `${
																_.filtered
																	? `remove selected filter ${d?.label || ''} - ${_.label}`
																	: d?.label
																	? `filter by ${d?.label} - ${_.label}`
																	: `filter by ${_.label}`
															}`,
														},
													},
												},
												s = Q()(a, i.lang || {}),
												o = (0, Z.u)(s, { facet: d, value: _ });
											return (0, t.Y)('a', {
												className: D()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': _.filtered }),
												href: _.url?.link?.href,
												...L,
												onClick: (f) => {
													_.url?.link?.onClick(f), A && A(f);
												},
												...(x ? (0, se.l)(() => _?.preview && _.preview()) : {}),
												...o.gridOption?.all,
												children: (0, t.Y)('span', {
													className: D()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': _.label.length > 3,
													}),
													children: _.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(fe, G, e) {
				e.d(G, { T: () => ae });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					D = e.n($),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					V = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					q = e('./components/src/providers/snap.tsx'),
					ee = e('./components/src/providers/treePath.tsx'),
					J = e('./components/src/utilities/defined.ts'),
					te = e('./components/src/utilities/mergeProps.ts'),
					se = e('./components/src/utilities/mergeStyles.ts'),
					Z = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					H = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useComponent.tsx'),
					Q = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(Q),
					oe = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const ne = ({ theme: p, horizontal: m, returnIcon: P }) =>
						m
							? (0, M.AH)({
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
											color: p?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[P ? '' : '&:before']: { content: `${P ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: p?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, M.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: p?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[P ? '' : '&:before']: { content: `${P ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: p?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					ae = (0, K.PA)((p) => {
						const m = (0, w.u)(),
							P = (0, q.uk)(),
							S = { treePath: (0, ee.LU)() },
							i = (0, te.v6)('facetHierarchyOptions', m, S, p),
							{
								values: h,
								hideCount: A,
								returnIcon: x,
								onClick: L,
								previewOnFocus: d,
								horizontal: j,
								valueProps: z,
								facet: u,
								disableStyles: b,
								treePath: l,
								className: y,
								internalClassName: _,
								customComponent: a,
							} = i;
						if (a) {
							const r = (0, F.x)(P?.templates?.library.import.component.facetHierarchyOptions || {}, a);
							if (r) return (0, t.Y)(r, { ...i });
						}
						const s = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, J.s)({ disableStyles: b }), theme: i?.theme, treePath: l },
							},
							o = (0, se.Z)(i, ne),
							f = h || u?.refinedValues;
						return f?.length
							? (0, t.Y)(V._, {
									children: (0, t.Y)('div', {
										...o,
										className: D()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': j }, y, _),
										children: f.map((r) => {
											const v = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																r.filtered ? `selected ${r.label}` : u?.label ? `filter by ${u?.label} - ${r.label}` : `filter by ${r.label}`
															}`,
														},
													},
												},
												R = C()(v, i.lang || {}),
												c = (0, H.u)(R, { facet: u, value: r });
											return (0, t.FD)('a', {
												className: D()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': r.filtered },
													{ 'ss__facet-hierarchy-options__option--return': r.history && !r.filtered }
												),
												href: r.url?.link?.href,
												...z,
												onClick: (B) => {
													r.url?.link?.onClick(B), L && L(B);
												},
												...(d ? (0, Z.l)(() => r?.preview && r.preview()) : {}),
												...c.hierarchyOption?.all,
												children: [
													x && r.history && !r.filtered && (0, t.Y)(oe.I, { ...s.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
													(0, t.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															r.label,
															!A &&
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
			'./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'(fe, G, e) {
				e.d(G, { C: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					D = e.n($),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					V = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					q = e('./components/src/providers/snap.tsx'),
					ee = e('./components/src/providers/treePath.tsx'),
					J = e('./components/src/utilities/defined.ts'),
					te = e('./components/src/utilities/mergeProps.ts'),
					se = e('./components/src/utilities/mergeStyles.ts'),
					Z = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					H = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					F = e('./components/src/hooks/useLang.tsx'),
					Q = e('./components/src/hooks/useComponent.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(C),
					ne = e('./components/src/components/Molecules/Radio/Radio.tsx');
				const ae = ({ horizontal: m, theme: P, hideCheckbox: k }) =>
						(0, M.AH)({
							display: m ? 'flex' : void 0,
							flexWrap: m ? 'wrap' : void 0,
							'& .ss__facet-list-options__option': {
								display: m ? void 0 : 'flex',
								alignItems: m ? void 0 : 'center',
								flex: m ? '0 1 auto' : void 0,
								padding: '6px',
								textDecoration: 'none',
								'&:hover': { cursor: 'pointer' },
								'&.ss__facet-list-options__option--filtered': { fontWeight: 'bold', color: P?.variables?.colors?.primary },
								'& .ss__facet-list-options__option__value': {
									marginLeft: k ? '' : '8px',
									'& .ss__facet-list-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
								},
							},
						}),
					p = (0, K.PA)((m) => {
						const P = (0, w.u)(),
							k = (0, q.uk)(),
							S = (0, ee.LU)(),
							i = { hideCheckbox: !!m.horizontal, treePath: S },
							h = (0, te.v6)('facetListOptions', P, i, m),
							{
								values: A,
								hideCheckbox: x,
								hideCount: L,
								onClick: d,
								previewOnFocus: j,
								hideCountParenthesis: z,
								respectSingleSelect: u,
								valueProps: b,
								facet: l,
								disableStyles: y,
								className: _,
								internalClassName: a,
								treePath: s,
								customComponent: o,
							} = h;
						if (o) {
							const c = (0, Q.x)(k?.templates?.library.import.component.facetListOptions || {}, o);
							if (c) return (0, t.Y)(c, { ...h });
						}
						let f = !1;
						u && l?.multiple == 'single' && (f = !0);
						const r = {
								checkbox: { internalClassName: 'ss__facet-list-options__checkbox', ...(0, J.s)({ disableStyles: y }), theme: h?.theme, treePath: s },
								radio: { internalClassName: 'ss__facet-list-options__radio', ...(0, J.s)({ disableStyles: y }), theme: h?.theme, treePath: s },
							},
							v = (0, se.Z)(h, ae),
							R = A || l?.refinedValues;
						return R?.length
							? (0, t.Y)(V._, {
									children: (0, t.Y)('div', {
										...v,
										className: D()('ss__facet-list-options', _, a),
										children: R.map((c) => {
											const B = {
													listOption: {
														attributes: {
															'aria-label': `${
																c.filtered
																	? `remove selected filter ${l?.label || ''} - ${c.label}`
																	: l?.label
																	? `filter by ${l?.label} - ${c.label}`
																	: `filter by ${c.label}`
															}`,
														},
													},
												},
												ie = oe()(B, h.lang || {}),
												U = (0, F.u)(ie, { facet: l, value: c });
											return (0, t.FD)('a', {
												className: D()('ss__facet-list-options__option', { 'ss__facet-list-options__option--filtered': c.filtered }),
												href: c.url?.link?.href,
												...b,
												onClick: (I) => {
													c.url?.link?.onClick(I), d && d(I);
												},
												...(j ? (0, H.l)(() => c?.preview && c.preview()) : {}),
												...U.listOption?.all,
												children: [
													f
														? !x && (0, t.Y)(ne.s, { ...r.radio, checked: c.filtered, disableA11y: !0, ...U.listOption.attributes })
														: !x && (0, t.Y)(Z.S, { ...r.checkbox, checked: c.filtered, disableA11y: !0, ...U.listOption.attributes }),
													(0, t.FD)('span', {
														className: 'ss__facet-list-options__option__value',
														children: [
															(0, t.Y)('span', { className: 'ss__facet-list-options__option__value__label', children: c.label }),
															!L &&
																c?.count > 0 &&
																(0, t.Y)('span', {
																	className: 'ss__facet-list-options__option__value__count',
																	children: z ? `${c.count}` : `(${c.count})`,
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
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(fe, G, e) {
				e.d(G, { P: () => S });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					D = e.n($),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					V = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					w = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					J = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					te = e('./components/src/providers/cache.tsx'),
					se = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Z = e('./components/src/providers/snap.tsx'),
					H = e('./components/src/providers/treePath.tsx'),
					F = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					Q = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					oe = e('./components/src/hooks/useComponent.tsx'),
					ne = e('../../node_modules/deepmerge/dist/cjs.js'),
					ae = e.n(ne),
					p = e('../../node_modules/color/index.js'),
					m = e.n(p),
					P = e('./components/src/components/Atoms/Image/Image.tsx');
				const k = ({ columns: i, gridSize: h, gapSize: A, horizontal: x, theme: L }) =>
						(0, M.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: i ? `repeat(${i}, calc((100% - (${i - 1} * ${A}))/ ${i}))` : `repeat(auto-fill, minmax(${h}, 1fr))`,
							gap: A,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${i} - ${2 * Math.round((i + 2) / 2)}px )`,
								marginRight: A,
								marginBottom: A,
								[`:nth-of-type(${i}n)`]: { marginRight: '0' },
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
								flexDirection: x ? 'row' : 'column',
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
										borderColor: L?.variables?.colors?.primary || '#333 !important',
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
					S = (0, K.PA)((i) => {
						const h = (0, se.u)(),
							A = (0, Z.uk)(),
							x = (0, H.LU)(),
							L = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: i.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: x,
							},
							d = (0, q.v6)('facetPaletteOptions', h, L, i),
							{
								values: j,
								hideLabel: z,
								layout: u,
								hideCount: b,
								hideCheckbox: l,
								colorMapping: y,
								hideIcon: _,
								onClick: a,
								previewOnFocus: s,
								valueProps: o,
								facet: f,
								horizontal: r,
								disableStyles: v,
								className: R,
								internalClassName: c,
								treePath: B,
								customComponent: ie,
							} = d;
						if (ie) {
							const n = (0, oe.x)(A?.templates?.library.import.component.facetPaletteOptions || {}, ie);
							if (n) return (0, t.Y)(n, { ...d });
						}
						r && (d.columns = 0);
						const U = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, w.s)({ disableStyles: v, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: d?.theme,
									treePath: B,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, w.s)({ disableStyles: v }), theme: d?.theme, treePath: B },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, w.s)({ disableStyles: v }),
									theme: d?.theme,
									treePath: B,
								},
							},
							I = (0, ee.Z)(d, k),
							N = j || f?.values;
						return N?.length
							? (0, t.Y)(te._, {
									children: (0, t.Y)('div', {
										...I,
										className: D()('ss__facet-palette-options', `ss__facet-palette-options--${u?.toLowerCase()}`, R, c),
										children: N.map((n) => {
											const ce = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																n.filtered
																	? `remove selected filter ${f?.label || ''} - ${n.label}`
																	: f?.label
																	? `filter by ${f?.label} - ${n.label}`
																	: `filter by ${n.label}`
															}`,
														},
													},
												},
												he = ae()(ce, d.lang || {}),
												ue = (0, C.u)(he, { facet: f, value: n });
											let W;
											y && (W = Object.fromEntries(Object.entries(y).map(([g, _e]) => [g.toLowerCase(), _e])));
											const E = W && W[n.label.toLowerCase()] && W[n.label.toLowerCase()].background ? W[n.label.toLowerCase()].background : n.value,
												T =
													W && W[n.label.toLowerCase()] && W[n.label.toLowerCase()].backgroundImageUrl
														? W[n.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let X = !1;
											if (E)
												try {
													X = new (m())(E.toLowerCase()).isDark();
												} catch {}
											return (0, t.FD)(
												'a',
												{
													className: D()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': n.filtered },
														{ 'ss__facet-palette-options__option--dark': X },
														`ss__facet-palette-options__option--${u?.toLowerCase()}`
													),
													href: n.url?.link?.href,
													...(z ? { title: n.label } : {}),
													...o,
													onClick: (g) => {
														n.url?.link?.onClick(g), a && a(g);
													},
													'aria-atomic': 'false',
													...(s ? (0, F.l)(() => n?.preview && n.preview()) : {}),
													...ue.paletteOption?.all,
													children: [
														!l && (0, t.Y)(Q.S, { ...U.checkbox, checked: n.filtered, disableA11y: !0, ...ue.paletteOption.attributes }),
														(0, t.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, t.FD)('div', {
																className: D()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${V.p(n.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': T }
																),
																style: { background: E },
																children: [
																	T ? (0, t.Y)(P._, { ...U.image, src: T, alt: n.label || n.value.toString() }) : null,
																	!_ && n.filtered && u?.toLowerCase() == 'grid' && (0, t.Y)(J.I, { ...U.icon }),
																],
															}),
														}),
														!z &&
															(0, t.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: W?.[n.label.toLowerCase()]?.label ?? n.label,
															}),
														!b &&
															n?.count > 0 &&
															(0, t.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', n.count, ')'] }),
													],
												},
												n.value
											);
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(fe, G, e) {
				e.d(G, { s: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					K = e.n(D),
					V = e('../../node_modules/mobx-react-lite/es/index.js'),
					w = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					J = e('./components/src/providers/cache.tsx'),
					te = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					se = e('./components/src/providers/snap.tsx'),
					Z = e('./components/src/providers/treePath.tsx'),
					H = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					F = e('./components/src/hooks/useA11y.tsx'),
					Q = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/hooks/useComponent.tsx'),
					oe = e('../../node_modules/deepmerge/dist/cjs.js'),
					ne = e.n(oe);
				const ae = ({ size: m, native: P }) =>
						P
							? (0, $.AH)({})
							: (0, $.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: m,
									width: m,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					p = (0, V.PA)((m) => {
						const P = (0, te.u)(),
							k = (0, se.uk)(),
							S = (0, Z.LU)(),
							i = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: P.variables?.colors.primary || '#000000',
								treePath: S,
							},
							h = (0, q.v6)('radio', P, i, m),
							{
								checked: A,
								color: x,
								disabled: L,
								checkedIcon: d,
								unCheckedIcon: j,
								onClick: z,
								startChecked: u,
								native: b,
								disableA11y: l,
								disableStyles: y,
								className: _,
								internalClassName: a,
								size: s,
								treePath: o,
								lang: f,
								customComponent: r,
								style: v,
								styleScript: R,
								themeStyleScript: c,
								name: B,
								...ie
							} = h;
						if (r) {
							const T = (0, C.x)(k?.templates?.library.import.component.radio || {}, r);
							if (T) return (0, t.Y)(T, { ...h });
						}
						const U = {
							activeIcon: {
								name: 'active',
								internalClassName: 'ss__radio__icon',
								...(0, w.s)({ size: s, color: x, disableStyles: y }),
								theme: h.theme,
								treePath: o,
							},
							inactiveIcon: {
								name: 'inactive',
								internalClassName: 'ss__radio__icon',
								...(0, w.s)({ size: s, color: x, disableStyles: y }),
								theme: h.theme,
								treePath: o,
							},
						};
						let I, N;
						const n = A === void 0;
						n ? ([I, N] = (0, M.J0)(u)) : (I = A);
						const ce = (T) => {
								L || (n && N && N((X) => !X), z && z(T));
							},
							he = (0, ee.Z)(h, ae),
							ue = { radio: {} },
							W = ne()(ue, f || {}),
							E = (0, Q.u)(W, { disabled: L, checkedState: I });
						return (0, t.Y)(J._, {
							children: b
								? (0, t.Y)('div', {
										className: K()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': L }, _, a),
										...he,
										children: (0, t.Y)('input', {
											className: K()('ss__radio__input'),
											'aria-checked': I,
											type: 'radio',
											onClick: (T) => ce(T),
											disabled: L,
											checked: I,
											tabIndex: l ? -1 : 0,
										}),
								  })
								: (0, t.Y)('span', {
										...he,
										className: K()('ss__radio', { 'ss__radio--disabled': L, 'ss__radio--active': I }, _, a),
										onClick: (T) => ce(T),
										ref: (T) => (l ? null : (0, F.iy)(T)),
										...E.radio?.all,
										role: 'radio',
										'aria-checked': I,
										'aria-disabled': L,
										...ie,
										children: I
											? (0, t.Y)(H.I, { ...U.activeIcon, ...(typeof d == 'string' ? { icon: d } : d) })
											: (0, t.Y)(H.I, { ...U.inactiveIcon, ...(typeof j == 'string' ? { icon: j } : j) }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(fe, G, e) {
				e.d(G, { D: () => ae });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					$ = e('../../node_modules/classnames/index.js'),
					D = e.n($),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					V = e('./components/src/utilities/defined.ts'),
					w = e('./components/src/utilities/mergeProps.ts'),
					q = e('./components/src/utilities/mergeStyles.ts'),
					ee = e('./components/src/providers/cache.tsx'),
					J = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					te = e('./components/src/providers/snap.tsx'),
					se = e('./components/src/providers/treePath.tsx'),
					Z = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					H = e('./components/src/components/Atoms/Button/Button.tsx'),
					F = e('../../node_modules/deepmerge/dist/cjs.js'),
					Q = e.n(F),
					C = e('./components/src/hooks/useLang.tsx'),
					oe = e('./components/src/hooks/useComponent.tsx');
				const ne = ({ theme: p }) =>
						(0, M.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${p?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					ae = (0, K.PA)((p) => {
						const m = (0, J.u)(),
							P = (0, te.uk)(),
							S = {
								placeholderText: 'Search',
								treePath: (0, se.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							i = (0, w.v6)('searchInput', m, S, p);
						(i.submitSearchButton = { ...S.submitSearchButton, ...i.submitSearchButton, ...p?.submitSearchButton }),
							(i.clearSearchButton = { ...S.clearSearchButton, ...i.clearSearchButton, ...p?.clearSearchButton }),
							(i.closeSearchButton = { ...S.closeSearchButton, ...i.closeSearchButton, ...p?.closeSearchButton });
						const {
							placeholderText: h,
							value: A,
							submitSearchButton: x,
							closeSearchButton: L,
							clearSearchButton: d,
							inputRef: j,
							inputName: z,
							onChange: u,
							onClick: b,
							onKeyDown: l,
							onKeyUp: y,
							disabled: _,
							disableStyles: a,
							className: s,
							internalClassName: o,
							treePath: f,
							customComponent: r,
						} = i;
						if (r) {
							const n = (0, oe.x)(P?.templates?.library.import.component.searchInput || {}, r);
							if (n) return (0, t.Y)(n, { ...i });
						}
						let v, R;
						A === void 0 ? ([v, R] = (0, Z.J0)('')) : (v = A);
						const B = {
								submitSearchButton: {
									...x,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, V.s)({ disableStyles: a }),
									theme: i?.theme,
									treePath: f,
								},
								clearSearchButton: {
									...d,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (n) => {
										j?.current && (((j?.current).value = ''), (j?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											R && R(''),
											d?.onClick && d.onClick(n);
									},
									...(0, V.s)({ disableStyles: a }),
									theme: i?.theme,
									treePath: f,
								},
								closeSearchButton: {
									...L,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, V.s)({ disableStyles: a }),
									theme: i?.theme,
									treePath: f,
								},
							},
							ie = (0, q.Z)(i, ne),
							U = {
								placeholderText: { attributes: { placeholder: h } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							I = Q()(U, i.lang || {}),
							N = (0, C.u)(I, {});
						return (0, t.Y)(ee._, {
							children: (0, t.FD)('div', {
								...ie,
								className: D()('ss__search-input', { 'ss__input--disabled': _ }, s, o),
								onClick: (n) => !_ && b && b(n),
								children: [
									L && (0, t.Y)(H.$, { ...B.closeSearchButton, ...N.closeSearchButton.all }),
									(0, t.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...N.placeholderText.attributes,
										value: v,
										name: z,
										ref: j,
										onKeyDown: (n) => l && l(n),
										onKeyUp: (n) => y && y(n),
										onChange: (n) => {
											R && R(n.target.value || ''), u && u(n);
										},
										disabled: _,
									}),
									(0, t.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											d && v?.length ? (0, t.Y)(H.$, { ...B.clearSearchButton, ...N.clearSearchButton.all }) : null,
											x && (0, t.Y)(H.$, { ...B.submitSearchButton, ...N.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/components/Organisms/Facet/Facet.tsx'(fe, G, e) {
				e.d(G, { s: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					K = e.n(D),
					V = e('../../node_modules/mobx-react-lite/es/index.js'),
					w = e('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'),
					q = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					ee = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					J = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					te = e('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					se = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					Z = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					H = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					F = e('./components/src/types.ts'),
					Q = e('./components/src/utilities/cloneWithProps.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					oe = e('./components/src/utilities/mergeProps.ts'),
					ne = e('./components/src/utilities/mergeStyles.ts'),
					ae = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/snap.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					k = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					i = e('./components/src/hooks/useComponent.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(h),
					x = e('./components/src/components/Atoms/Button/Button.tsx'),
					L = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const d = ({ disableCollapse: u, color: b, theme: l }) =>
						(0, $.AH)({
							width: '100%',
							margin: '0 0 20px 0',
							'& .ss__facet__header': {
								cursor: u ? void 0 : 'pointer',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								color: b || l?.variables?.colors?.primary,
								border: 'none',
								borderBottom: `2px solid ${l?.variables?.colors?.secondary || '#ccc'}`,
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
								color: b || l?.variables?.colors?.primary,
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
								border: `1px solid ${l?.variables?.colors?.secondary || '#ccc'}`,
								backgroundColor: 'white',
								alignItems: 'center',
								'.ss__facet__range-input__prefix': { padding: '0 5px' },
								'.ss__facet__range-input__input': { width: '100%', border: 'none', minHeight: '35px' },
							},
						}),
					j = (0, V.PA)((u) => {
						const b = (0, p.u)(),
							l = (0, m.uk)(),
							_ = {
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
								treePath: (0, P.LU)(),
								name: (0, L.P)(u.facet.field),
							};
						let a = (0, oe.v6)('facet', b, _, u);
						a.display && a.display[a.facet?.display] && (a = { ...a, ...a.display[a.facet?.display] }),
							a.fields && a.fields[a.facet?.field] && (a = { ...a, ...a.fields[a.facet?.field] });
						const {
							disableCollapse: s,
							facet: o,
							iconCollapse: f,
							iconExpand: r,
							limit: v,
							statefulOverflow: R,
							disableOverflow: c,
							iconColor: B,
							color: ie,
							previewOnFocus: U,
							valueProps: I,
							showSelectedCount: N,
							hideSelectedCountParenthesis: n,
							clearAllIcon: ce,
							showClearAllText: he,
							justContent: ue,
							horizontal: W,
							disableStyles: E,
							className: T,
							internalClassName: X,
							treePath: g,
							customComponent: _e,
						} = a;
						if (_e) {
							const Y = (0, i.x)(l?.templates?.library.import.component.facet || {}, _e);
							if (Y) return (0, t.Y)(Y, { ...a });
						}
						const re = {
							dropdown: {
								internalClassName: 'ss__facet__dropdown',
								disableClickOutside: !0,
								disableOverlay: !0,
								...(0, C.s)({ disableStyles: E }),
								theme: a?.theme,
								treePath: g,
							},
							icon: {
								internalClassName: 'ss__facet__dropdown__icon',
								size: '12px',
								fill: B || ie,
								...(0, C.s)({ disableStyles: E }),
								theme: a?.theme,
								treePath: `${g} dropdown`,
							},
							button: { ...(0, C.s)({ disableStyles: E }), theme: a?.theme, treePath: `${g} dropdown` },
							showMoreLessIcon: {
								internalClassName: 'ss__facet__show-more-less__icon',
								size: '10px',
								fill: B || ie,
								...(0, C.s)({ disableStyles: E }),
								theme: a?.theme,
								treePath: g,
							},
							facetHierarchyOptions: {
								internalClassName: 'ss__facet__facet-hierarchy-options',
								...(0, C.s)({ disableStyles: E, previewOnFocus: U, valueProps: I, horizontal: W }),
								theme: a?.theme,
								treePath: g,
							},
							facetListOptions: {
								internalClassName: 'ss__facet__facet-list-options',
								...(0, C.s)({ disableStyles: E, previewOnFocus: U, valueProps: I, horizontal: W }),
								theme: a?.theme,
								treePath: g,
							},
							facetGridOptions: {
								internalClassName: 'ss__facet__facet-grid-options',
								...(0, C.s)({ disableStyles: E, previewOnFocus: U, valueProps: I, horizontal: W }),
								theme: a?.theme,
								treePath: g,
							},
							facetPaletteOptions: {
								internalClassName: 'ss__facet__facet-palette-options',
								...(0, C.s)({ disableStyles: E, previewOnFocus: U, valueProps: I, horizontal: W }),
								theme: a?.theme,
								treePath: g,
							},
							facetSlider: { internalClassName: 'ss__facet__facet-slider', ...(0, C.s)({ disableStyles: E }), theme: a?.theme, treePath: g },
							searchInput: { internalClassName: 'ss__facet__search-input', ...(0, C.s)({ disableStyles: E }), theme: a?.theme, treePath: g },
						};
						let Ee;
						function Oe(Y) {
							return Y.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
						}
						const [de, pe] = (0, M.J0)();
						if (
							((0, M.vJ)(() => {
								R &&
									pe({
										enabled: !1,
										limited: !0,
										limit: 0,
										remaining: void 0,
										setLimit: function (me) {
											me != this.limit && ((this.enabled = !0), (this.limit = me), this.calculate());
										},
										toggle: function (me) {
											typeof me < 'u' ? (this.limited = me) : (this.limited = !this.limited), this.calculate();
										},
										calculate: function () {
											if (this.limit > 0) {
												const me = o?.values?.length - this.limit;
												me > 0 && !o?.search?.input
													? ((this.enabled = !0), this.limited ? (this.remaining = me) : (this.remaining = 0))
													: (this.enabled = !1);
											}
											pe({ ...this });
										},
									});
							}, []),
							o?.overflow && v && Number.isInteger(v) && !c)
						)
							if (R) {
								let Y = o?.values || [];
								if (o?.search?.input) {
									const me = new RegExp(Oe(o?.search?.input), 'i');
									Y = o?.values.filter((xe) => String(xe?.label || '').match(me));
								}
								de?.enabled && de?.limited && (Y = Y.slice(0, de?.limit)), de?.limit !== v && de?.setLimit(v), (Ee = Y);
							} else o.overflow?.setLimit(v), (Ee = o?.refinedValues);
						else o?.overflow && Number.isInteger(v) ? (Ee = o?.values.slice(0, v)) : (Ee = o?.values);
						const O = (0, ne.Z)(a, d),
							le = {
								allowableTypes: u.treePath?.includes('autocomplete') ? [] : ['list', 'grid', 'palette'],
								searchFilter: (Y) => {
									o?.search && (o.search.input = Y.target.value);
								},
							};
						let De = !0;
						o.display == F.Q.TOGGLE && o && o?.values.length !== 1 && (De = !1);
						const ge = { limitedValues: Ee, overflowState: de, searchableFacet: le, subProps: re, className: T, internalClassName: X, ...a },
							Me = {
								showMoreText: { value: ge.showMoreText },
								showLessText: { value: ge.showLessText },
								dropdownButton: {
									attributes: {
										'aria-label': `currently ${o?.collapsed ? 'collapsed' : 'open'} ${o.label} facet dropdown ${
											o.values?.length ? o.values?.length + ' options' : ''
										}`,
									},
								},
								clearAllText: { value: ge.clearAllText },
								submitRangeButton: { value: ge.rangeInputsSubmitButtonText },
							},
							Ce = A()(Me, a.lang || {}),
							Pe = (0, S.u)(Ce, { facet: o }),
							ve = o?.values?.filter((Y) => Y?.filtered).length || o?.active?.high !== o?.range?.high || o?.active?.low !== o?.range?.low;
						return o && De
							? (0, t.Y)(ae._, {
									children: (0, t.Y)('div', {
										...O,
										className: K()(
											'ss__facet',
											`ss__facet--${o.field}`,
											`${o.collapsed ? 'ss__facet--collapsed' : ''}`,
											T,
											X,
											`${o.display ? `ss__facet--${o.display}` : ''}`,
											(R ? de?.remaining : (o?.overflow?.remaining || 0) > 0) || o?.display == 'slider' ? '' : 'ss__facet--showing-all'
										),
										children: ue
											? (0, t.Y)(z, { ...ge, mergedLang: Pe })
											: (0, t.Y)(H.m, {
													...re.dropdown,
													open: s || !o?.collapsed,
													onClick: () => !s && o.toggleCollapse && o?.toggleCollapse(),
													disableA11y: !0,
													button: (0, t.FD)('div', {
														className: 'ss__facet__header',
														ref: (Y) => (0, k.iy)(Y, s ? -1 : 0),
														role: 'heading',
														'aria-level': 3,
														...Pe.dropdownButton.attributes,
														children: [
															(0, t.FD)('span', {
																className: 'ss__facet__header__inner',
																children: [
																	(0, t.Y)('span', { ...Pe.dropdownButton.value, children: o?.label }),
																	N && ve && o.type !== 'range'
																		? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: n ? ve : `(${ve})` })
																		: null,
																	(Pe.clearAllText.value || ce) && ve
																		? (0, t.Y)(x.$, {
																				...re.button,
																				internalClassName: 'ss__facet__header__clear-all',
																				name: 'reset-facet',
																				onClick: (Y) => {
																					Y.stopPropagation(), o?.clear.url.link.onClick();
																				},
																				icon: ce || void 0,
																				children: Pe.clearAllText.value && he ? (0, t.Y)('label', { ...Pe.clearAllText.all }) : null,
																		  })
																		: (0, t.Y)(t.FK, {}),
																],
															}),
															!s &&
																(0, t.Y)(Z.I, {
																	...re.icon,
																	...(o?.collapsed
																		? { ...(typeof r == 'string' ? { icon: r } : r) }
																		: { ...(typeof f == 'string' ? { icon: f } : f) }),
																	name: o?.collapsed ? 'expand' : 'collapse',
																}),
														],
													}),
													children: (0, t.Y)(z, { ...ge, mergedLang: Pe }),
											  }),
									}),
							  })
							: null;
					}),
					z = (u) => {
						const {
								searchableFacet: b,
								subProps: l,
								className: y,
								internalClassName: _,
								limitedValues: a,
								facet: s,
								statefulOverflow: o,
								limit: f,
								overflowSlot: r,
								optionsSlot: v,
								searchable: R,
								iconOverflowMore: c,
								iconOverflowLess: B,
								disableOverflow: ie,
								previewOnFocus: U,
								rangeInputs: I,
								rangeInputsPrefix: N,
								rangeInputsInheritDefaultValues: n,
								rangeInputsSeparatorText: ce,
								justContent: he,
								valueProps: ue,
								hideShowMoreLessText: W,
								treePath: E,
								mergedLang: T,
							} = u,
							[X, g] = (0, M.J0)(n && s.type === 'range' ? s?.range?.low : void 0),
							[_e, re] = (0, M.J0)(n && s.type === 'range' ? s?.range?.high : void 0);
						(0, M.vJ)(() => {
							n && s.type === 'range' && s?.active?.high !== _e && re(s?.active?.high),
								n && s.type === 'range' && s?.active?.low !== X && g(s?.active?.low);
						}, [s]);
						const Ee = (O) => {
								g(O[0]), re(O[1]);
							},
							Oe = (O) => {
								O.key === 'Enter' && typeof X == 'number' && typeof _e == 'number' && de.current?.base?.click();
							},
							de = (0, M.li)();
						let pe;
						return (
							o ? (pe = u.overflowState) : (pe = s.overflow),
							(0, t.FD)(t.FK, {
								children: [
									R &&
										b.allowableTypes.includes(s.display) &&
										(0, t.Y)(se.D, { ...l.searchInput, onChange: b.searchFilter, placeholderText: `Search ${s.label}`, treePath: E }),
									(0, t.Y)('div', {
										className: K()('ss__facet__options', he ? y : '', he ? _ : ''),
										children: (() => {
											if (v) return (0, Q.Y)(v, { facet: s, valueProps: ue, limit: f, previewOnFocus: U, treePath: E });
											switch (s?.display) {
												case F.Q.SLIDER:
													return (0, t.Y)(te.l, { ...l.facetSlider, onChange: Ee, facet: s, treePath: E });
												case F.Q.GRID:
													return (0, t.Y)(q.S, { ...l.facetGridOptions, values: a, facet: s, treePath: E });
												case F.Q.PALETTE:
													return (0, t.Y)(ee.P, { ...l.facetPaletteOptions, values: a, facet: s, treePath: E });
												case F.Q.HIERARCHY:
													return (0, t.Y)(J.T, { ...l.facetHierarchyOptions, values: a, facet: s, treePath: E });
												default:
													return (0, t.Y)(w.C, { ...l.facetListOptions, values: a, facet: s, treePath: E });
											}
										})(),
									}),
									I &&
										(s.type === 'range' || s.type === 'range-buckets') &&
										(0, t.FD)('div', {
											className: 'ss__facet__range-inputs',
											children: [
												(0, t.FD)('div', {
													className: 'ss__facet__range-inputs__row',
													children: [
														(0, t.FD)('div', {
															className: 'ss__facet__range-input ss__facet__range-input--low',
															children: [
																N && (0, t.Y)('span', { className: 'ss__facet__range-input__prefix', children: N }),
																(0, t.Y)('input', {
																	type: 'number',
																	className: 'ss__facet__range-input__input',
																	value: X,
																	onInput: (O) => (O.currentTarget.value ? g(Number(O.currentTarget.value)) : g(void 0)),
																	onKeyUp: Oe,
																}),
															],
														}),
														(0, t.Y)('span', { className: 'ss__facet__range-inputs__separator', children: ce }),
														(0, t.FD)('div', {
															className: 'ss__facet__range-input ss__facet__range-input--high',
															children: [
																N && (0, t.Y)('span', { className: 'ss__facet__range-input__prefix', children: N }),
																(0, t.Y)('input', {
																	type: 'number',
																	className: 'ss__facet__range-input__input',
																	value: _e,
																	onInput: (O) => (O.currentTarget.value ? re(Number(O.currentTarget.value)) : re(void 0)),
																	onKeyUp: Oe,
																}),
															],
														}),
													],
												}),
												(0, t.Y)('div', {
													className: 'ss__facet__range-inputs__row ss__facet__range-inputs__row--button-wrapper',
													children: (0, t.Y)(x.$, {
														internalClassName: 'ss__facet__range-input__button--submit',
														ref: de,
														onClick: () => {
															if (s?.services?.urlManager && typeof X == 'number' && typeof _e == 'number') {
																let O = X,
																	le = _e;
																le < O && ((O = _e), (le = X), g(O), re(le)),
																	s?.range?.low !== void 0 && O < s?.range?.low && ((O = s?.range?.low), g(O)),
																	s?.range?.high !== void 0 && O > s?.range?.high && ((O = s?.range?.high), g(O)),
																	s?.range?.low !== void 0 && le < s?.range?.low && ((le = s?.range?.low), re(le)),
																	s?.range?.high !== void 0 && le > s?.range?.high && ((le = s?.range?.high), re(le)),
																	s.services.urlManager.remove('page').set(`filter.${s.field}`, { low: O, high: le }).go();
															}
														},
														children: T.submitRangeButton.value ? (0, t.Y)('label', { ...T.submitRangeButton.all }) : null,
													}),
												}),
											],
										}),
									!ie &&
										pe?.enabled &&
										(0, t.Y)('div', {
											className: 'ss__facet__show-more-less',
											'aria-live': 'polite',
											onClick: () => pe?.toggle(),
											ref: (O) => (0, k.iy)(O),
											children: r
												? (0, Q.Y)(r, { facet: s, treePath: E })
												: (0, t.FD)(t.FK, {
														children: [
															(0, t.Y)(Z.I, {
																...l.showMoreLessIcon,
																treePath: E,
																name: (pe?.remaining || 0) > 0 ? 'overflow-more' : 'overflow-less',
																...((pe?.remaining || 0) > 0
																	? { ...(typeof c == 'string' ? { icon: c } : c) }
																	: { ...(typeof B == 'string' ? { icon: B } : B) }),
															}),
															!W && (0, t.Y)('span', { ...((pe?.remaining || 0) > 0 ? T.showMoreText?.all : T.showLessText?.all) }),
														],
												  }),
										}),
								],
							})
						);
					};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(fe, G, e) {
				e.d(G, { l: () => t });
				const t = (M, $ = { delay: 333, focusElem: !0 }) => {
					let D;
					return {
						onMouseEnter: (K) => {
							clearTimeout(D),
								(D = window.setTimeout(() => {
									$.focusElem && K.target.focus(), M && M();
								}, $.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(D);
						},
					};
				};
			},
		},
	]);
})();
