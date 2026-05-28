'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2656],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(le, N, e) {
				e.d(N, { _: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					r = e.n(m),
					o = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/providers/controller.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/withTracking.tsx'),
					h = e('./components/src/providers/snap.tsx'),
					V = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/hooks/useA11y.tsx'),
					O = e('./components/src/types.ts'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('./components/src/hooks/useComponent.tsx');
				const S = ({ width: R }) =>
						(0, T.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: R,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					B = (0, l.Bk)(
						(0, c.W)(
							(0, D.PA)((R) => {
								const H = (0, a.u)(),
									g = (0, h.uk)(),
									P = (0, V.LU)(),
									b = { layout: O.V.grid, width: 'auto', treePath: P },
									F = (0, w.v6)('inlineBanner', H, b, R),
									{ banner: $, className: W, internalClassName: f, disableA11y: U, layout: Z, onClick: ee, customComponent: te } = F;
								if (te) {
									const s = (0, d.x)(g?.templates?.library.import.component.inlineBanner || {}, te);
									if (s) return (0, t.Y)(s, { ...F });
								}
								const ne = (0, L.Z)(F, S);
								return $ && $.value
									? (0, t.Y)(o._, {
											children: (0, t.Y)('div', {
												onClick: (s) => {
													ee && ee(s, $);
												},
												role: 'article',
												ref: (s) => {
													U || (0, Y.iy)(s), R.trackingRef(s);
												},
												className: r()('ss__inline-banner', `ss__inline-banner--${Z}`, W, f),
												...ne,
												dangerouslySetInnerHTML: { __html: $.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(le, N, e) {
				e.d(N, { i: () => H });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					V = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					w = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/hooks/useLang.tsx'),
					O = e('./components/src/hooks/useComponent.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					d = e.n(D);
				const S = ({ vertical: g, theme: P }) =>
						(0, m.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: g ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: P?.variables?.colors?.primary } },
								},
							},
						}),
					B = (g) => g?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					R = (g, P) => {
						if (g && P) {
							const b = g.match(B(P));
							if (P && g && b && typeof b.index == 'number') {
								const F = g.slice(0, b.index),
									$ = g.slice(b.index + P.length, g.length);
								return `${F ? `<em>${F}</em>` : ''}${P}${$ ? `<em>${$}</em>` : ''}`;
							}
						}
						return `<em>${g}</em>`;
					},
					H = (0, T.PA)((g) => {
						const P = (0, a.u)(),
							b = (0, c.uk)(),
							$ = { vertical: !0, previewOnHover: !0, treePath: (0, h.LU)() },
							W = (0, w.v6)('terms', P, $, g),
							{
								title: f,
								onTermClick: U,
								limit: Z,
								previewOnHover: ee,
								emIfy: te,
								className: ne,
								internalClassName: s,
								controller: _,
								customComponent: z,
							} = W,
							n = _?.store?.state?.input,
							Q = W.terms;
						if (z) {
							const p = (0, O.x)(b?.templates?.library.import.component.terms || {}, z);
							if (p) return (0, t.Y)(p, { ...W });
						}
						const M = (0, L.Z)(W, S),
							v = (p, G) => {
								U && U(p, G), _?.setFocused && _?.setFocused();
							},
							u = Z ? Q?.slice(0, Z) : Q,
							A = { title: { value: f } },
							K = d()(A, W.lang || {}),
							J = (0, Y.u)({ title: K.title }, { controller: _ });
						return u?.length
							? (0, t.Y)(l._, {
									children: (0, t.FD)('div', {
										...M,
										className: o()('ss__terms', ne, s),
										children: [
											f ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...J.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': f,
												children: u?.map((p, G) => {
													const C = {
															term: {
																value: `${te ? R(p.value, n || '') : p.value}`,
																attributes: { 'aria-label': `${f || ''} item ${G + 1} of ${u.length}, ${p.value}` },
															},
														},
														oe = d()(C, W.lang || {}),
														X = (0, Y.u)({ term: oe.term }, { index: G, numberOfTerms: u.length, term: p });
													return (0, t.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': p.active }),
														children: (0, t.Y)('a', {
															onClick: (ae) => v(ae, p),
															href: p.url.href,
															...(ee ? (0, V.l)(p.preview) : {}),
															...X.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(le, N, e) {
				e.d(N, { h: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					l = e.n(o),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					c = e.n(a),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					V = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					w = e('./components/src/components/Organisms/Results/Results.tsx'),
					L = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					Y = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/cache.tsx'),
					H = e('./components/src/types.ts'),
					g = e('./components/src/hooks/useLang.tsx'),
					P = e('./components/src/hooks/useA11y.tsx'),
					b = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					F = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					$ = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					W = e('./components/src/components/Atoms/Button/Button.tsx'),
					f = e('./components/src/providers/snap.tsx'),
					U = e('./components/src/hooks/useCreateController.tsx'),
					Z = e('./components/src/hooks/useComponent.tsx');
				function ee(s) {
					let _, z, n;
					if (s?.recommendation?.enabled) {
						const M = s?.recommendation?.component || 'RecommendationGrid',
							v = (0, f.uk)();
						if (v?.templates) {
							const A = s?.recommendation?.resultComponent || 'Result',
								K = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, s.recommendation.config);
							(K.id = K.id || `search-${K.tag}`),
								(n = (0, U.i)(v, 'recommendation', K)),
								!n?.store?.loaded && !n?.store?.loading && n?.store.error?.type !== 'error' && n?.search(),
								A && v?.templates?.library.import.component.result && (z = (0, Z.x)(v?.templates?.library.import.component.result, A)),
								M &&
									v?.templates?.library.import.component.recommendation.default &&
									(_ = (0, Z.x)(v?.templates?.library.import.component.recommendation.default, M));
						}
					}
					return { RecommendationTemplateComponent: _, RecommendationTemplateResultComponent: z, recsController: n };
				}
				const te = ({ controller: s, input: _, viewportMaxHeight: z, width: n, theme: Q, column1: M, column2: v, column3: u, column4: A }) => {
						let K = 0;
						if (_) {
							let p;
							typeof _ == 'string' ? (p = document.querySelector(_)) : (p = _), (K = p?.getBoundingClientRect()?.bottom || 0);
						}
						const J = !!(s.store.search?.query?.string && s.store.results.length === 0);
						return (0, r.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: M?.width == 'auto' ? '1 1 auto' : `1 0 ${M?.width}`,
								maxWidth: M?.width == 'auto' ? 'auto' : M?.width,
								alignContent: M?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: v?.width == 'auto' ? '1 1 auto' : `1 0 ${v?.width}`,
								maxWidth: v?.width == 'auto' ? 'auto' : v?.width,
								alignContent: v?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: u?.width == 'auto' ? '1 1 auto' : `1 0 ${u?.width}`,
								maxWidth: u?.width == 'auto' ? 'auto' : u?.width,
								alignContent: u?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: A?.width == 'auto' ? '1 1 auto' : `1 0 ${A?.width}`,
								maxWidth: A?.width == 'auto' ? 'auto' : A?.width,
								alignContent: A?.alignContent,
							},
							'.ss__autocomplete__column, .ss__autocomplete__row': { minWidth: 0 },
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							flexWrap: 'wrap',
							display: 'flex',
							flexDirection: 'row',
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							maxWidth: n,
							maxHeight: z && K ? `calc(100vh - ${K + 10}px)` : void 0,
							overflowY: 'scroll',
							'.ss__autocomplete__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__autocomplete__column': { display: 'flex', flexDirection: 'column', flexFlow: 'wrap' },
							'.ss__autocomplete__column:empty, .ss__autocomplete__row:empty': { display: 'none' },
							'.ss__autocomplete__separator': { flexGrow: 1, flexShrink: 1 },
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'.ss__autocomplete__terms-wrapper': { background: '#f8f8f8', width: '100%' },
							'.ss__autocomplete__facets': {
								display: 'flex',
								width: 'auto',
								flexDirection: 'column',
								columnGap: '20px',
								padding: '10px',
								overflowY: 'auto',
								'.ss__facets': { display: 'flex', flexDirection: 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__facets-wrapper': { width: '100%' },
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: '1 1 0%',
								flexDirection: 'column',
								justifyContent: 'space-between',
								overflowY: 'auto',
								margin: J ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: J ? 'center' : 'right',
								a: { fontWeight: 'bold', color: Q?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					ne = (0, m.PA)((s) => {
						const _ = (0, B.u)(),
							z = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let n = (0, O.v6)('autocompleteLayout', _, z, s);
						delete n.treePath, n.layout == 'terms' && (n.templates = { recommendation: { enabled: !1 } });
						const Q = (0, S.l)(),
							M = () => {
								E?.setFocused && E?.setFocused();
							},
							v = {
								components: {
									facet: { valueProps: Q },
									facetGridOptions: { onClick: M },
									facetHierarchyOptions: { onClick: M },
									facetListOptions: { onClick: M },
									facetPaletteOptions: { onClick: M },
								},
							};
						if (_?.type !== 'templates') {
							const i = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								x = c().all([i, v, n?.theme || {}], { arrayMerge: (re, y) => y });
							n = { ...n, theme: x };
						} else n.theme = c().all([v, n?.theme || {}], { arrayMerge: (i, x) => x });
						let u = n.input;
						u && typeof u == 'string' && (u = document.querySelector(u));
						const {
							facetsTitle: A,
							contentTitle: K,
							column1: J,
							column2: p,
							column3: G,
							column4: C,
							onReset: oe,
							excludeBanners: X,
							resultComponent: ae,
							templates: I,
							disableStyles: q,
							className: xe,
							internalClassName: ue,
							controller: E,
						} = n;
						let de = n.layout;
						const j = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										E?.setFocused && E.setFocused(), (window.location.href = ye.url.href);
									},
									name: 'see-more',
									...(0, D.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(n.layout == 'terms' || n.layout == 'mini'),
									controller: E,
									...(0, D.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(n.layout == 'terms' || n.layout == 'mini'),
									controller: E,
									...(0, D.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, D.s)({ disableStyles: q }), theme: n.theme, treePath: s.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, D.s)({ disableStyles: q }), theme: n.theme, treePath: s.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, D.s)({ disableStyles: q }), theme: n.theme, treePath: s.treePath },
								results: {
									columns: 3,
									rows: 2,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: ae,
									...(0, D.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, D.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
							},
							{
								search: pe,
								terms: Pe,
								trending: he,
								results: ce,
								merchandising: se,
								pagination: De,
								filters: Ie,
								facets: Me,
								state: ye,
								loading: Te,
								loaded: Le,
							} = E.store,
							fe = E.store.history || [];
						E &&
							typeof u == 'string' &&
							((u = document.querySelector(u)),
							(0, T.vJ)(() => {
								E.bind();
							}, []));
						const We = u === ye.focusedInput && (Pe.length > 0 || he?.length > 0 || fe?.length > 0 || (ye.input && E.store.loaded)),
							Re = () => !!(ce.length > 0 || Object.keys(se.content).length > 0 || pe?.query?.string || Te),
							[Oe, Be] = (0, T.J0)(Re()),
							Ae = () => {
								const i = he?.filter((re) => re.active).pop(),
									x = fe?.filter((re) => re.active).pop();
								i || x || Re() ? Be(!0) : Be(!1);
							};
						(0, T.vJ)(() => {
							Ae();
						}, [he, fe]);
						const Ee = Me.length ? Me.filter((i) => i.display !== H.Q.SLIDER) : [];
						Ae();
						const Ue = (0, d.Z)(n, te),
							Ke = {
								contentTitle: { value: K },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: A },
								noResultsText: {
									value: `<p>No results found for "${pe.originalQuery?.string || pe.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${De.totalResults} ${Ie.length > 0 ? 'filtered' : ''} result${De.totalResults == 1 ? '' : 's'} for "${
										pe.query?.string
									}"`,
								},
							},
							ge = c()(Ke, n.lang || {}),
							ie = (0, g.u)(ge, { controller: E });
						let me, ve, Ce;
						const je = !!(E.store.search?.query?.string && E.store.results.length === 0);
						if (I?.recommendation?.enabled && je) {
							const i = ee(I);
							(ve = i.RecommendationTemplateComponent), (Ce = i.RecommendationTemplateResultComponent), (me = i.recsController);
						}
						const _e = (i) => {
							if (typeof i != 'string') {
								const x = i?.map((y) => _e(y));
								return i.some((y, k) => y !== '_' && x[k]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: x }) : null;
							}
							if (i == 'c1' && J?.layout?.length) {
								const x = J.layout.map((y) => _e(y));
								return J.layout.some((y, k) => (Array.isArray(y) || y !== '_') && !!x[k])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: x })
									: null;
							}
							if (i == 'c2' && p?.layout?.length) {
								const x = p.layout.map((y) => _e(y));
								return p.layout.some((y, k) => (Array.isArray(y) || y !== '_') && !!x[k])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: x })
									: null;
							}
							if (i == 'c3' && G?.layout?.length) {
								const x = G.layout.map((y) => _e(y));
								return G.layout.some((y, k) => (Array.isArray(y) || y !== '_') && !!x[k])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: x })
									: null;
							}
							if (i == 'c4' && C?.layout?.length) {
								const x = C.layout.map((y) => _e(y));
								return C.layout.some((y, k) => (Array.isArray(y) || y !== '_') && !!x[k])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: x })
									: null;
							}
							if (i == 'termsList')
								return !Pe?.length && !fe?.length && !he?.length
									? null
									: (0, t.Y)('div', {
											className: l()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(b.G, { controller: E, ...j.termsList }),
									  });
							if (i == 'terms.history')
								return fe?.length
									? (0, t.Y)(F.i, {
											controller: E,
											terms: E.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: E.config.settings?.history?.limit,
											...j.terms,
											title: 'History',
									  })
									: null;
							if (i == 'terms.trending')
								return he?.length
									? (0, t.Y)(F.i, {
											controller: E,
											terms: E.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: E.config.settings?.trending?.limit,
											...j.terms,
											title: 'Trending',
									  })
									: null;
							if (i == 'terms.suggestions')
								return Pe?.length
									? (0, t.Y)(F.i, {
											controller: E,
											terms: E.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...j.terms,
											title: 'Suggestions',
									  })
									: null;
							if (i == 'facets')
								return Ee.length
									? (0, t.FD)('div', {
											className: l()('ss__autocomplete__facets-wrapper'),
											children: [
												A || ge.facetsTitle.value
													? (0, t.Y)('div', {
															className: l()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ie.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(Y.J, { ...j.facets, facets: Ee }),
														X ? null : (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (i == 'facetsHorizontal')
								return Ee.length
									? (0, t.FD)(t.FK, {
											children: [
												A || ge.facetsTitle.value
													? (0, t.Y)('div', {
															className: l()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ie.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)($.b, { ...j.facetsHorizontal, facets: Ee }),
														X ? null : (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (i == 'content' && Oe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length > 0 || Le
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														X ? null : (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.HEADER, name: 'header' }),
														X ? null : (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.BANNER, name: 'banner' }),
														ce.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(K || ge.contentTitle.value) && ce.length > 0
																			? (0, t.Y)('div', {
																					className: l()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...ie.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(w.n, { results: ce, ...j.results, controller: E }),
																	],
															  })
															: Le
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ie.noResultsText?.all }),
																		ve && me?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(ve, {
																						controller: me,
																						title: me.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Ce,
																						name: 'noResultsRecommendations',
																						treePath: s.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														X ? null : (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (i == 'no-results' && Oe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length == 0 && !Te
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ie.noResultsText?.all }),
														ve && me?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(ve, {
																		controller: me,
																		title: me.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Ce,
																		name: 'noResultsRecommendations',
																		treePath: s.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, t.Y)(t.FK, {}),
								});
							if (i == '_') return (0, t.Y)('div', { className: 'ss__autocomplete__separator' });
							if (i == 'banner.banner') return (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.BANNER, name: 'banner' });
							if (i == 'banner.footer') return (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.FOOTER, name: 'footer' });
							if (i == 'banner.header') return (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.HEADER, name: 'header' });
							if (i == 'banner.left') return (0, t.Y)(L.l, { ...j.banner, content: se.content, type: h.c.LEFT, name: 'left' });
							if (i == 'button.see-more' && Oe && pe?.query?.string && ce.length > 0)
								return (0, t.FD)(W.$, {
									...j.button,
									...ie.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...ie.seeMoreButton.value }), (0, t.Y)(V.I, { ...j.icon })],
								});
						};
						return (
							typeof n.layout == 'string' &&
								(n.layout === 'terms' && (de = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								n.layout === 'mini' && (de = [['termsList'], ['content'], ['_', 'button.see-more']]),
								n.layout === 'standard' && (de = [['c1', 'c2', 'c3']])),
							We && de?.length
								? (0, t.Y)(R._, {
										children: (0, t.FD)('div', {
											...Ue,
											className: l()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': n.layout === 'terms' },
												{ 'ss__autocomplete--mini': n.layout === 'mini' },
												xe,
												ue
											),
											onClick: (i) => i.stopPropagation(),
											ref: (i) => (0, P.iy)(i, 0, !1, oe),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (i) => (0, P.iy)(i),
													onClick: () => n.onReset && n.onReset(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...ie.closeButton?.all,
												}),
												de?.map((i) => _e(i)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(le, N, e) {
				e.d(N, { n: () => W });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(l),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					h = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					V = e('./components/src/components/Molecules/Result/Result.tsx'),
					w = e('./components/src/types.ts'),
					L = e('./components/src/utilities/cloneWithProps.tsx'),
					Y = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/withTracking.tsx'),
					R = e('./components/src/providers/snap.tsx'),
					H = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/hooks/useDisplaySettings.tsx'),
					P = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					b = e('./components/src/hooks/useComponent.tsx');
				const F = ({ gapSize: f, columns: U }) =>
						(0, T.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: f,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${U}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / U}% - (${U - 1} * ${f} / ${U} ) )`,
								marginRight: f,
								marginBottom: f,
								[`&:nth-of-type(${U}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${U})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					$ = (0, B.W)(V.Q),
					W = (0, m.PA)((f) => {
						const U = (0, S.u)(),
							Z = (0, R.uk)(),
							ee = (0, H.LU)(),
							te = {
								0: { columns: f.columns || 1 },
								540: { columns: f.columns || 2 },
								768: { columns: f.columns || 3 },
								991: { columns: f.columns || 4 },
							},
							ne = { results: f.controller?.store?.results, columns: 4, gapSize: '20px', layout: w.V.grid, breakpoints: te, treePath: ee };
						let s = (0, O.v6)('results', U, ne, f);
						if (!(f.theme?.type == 'templates' || U?.type == 'templates')) {
							const C = (0, g.X)(s?.breakpoints || {}),
								oe = a()(s?.theme || {}, C?.theme || {}, { arrayMerge: (X, ae) => ae });
							s = { ...s, ...C, theme: oe };
						}
						const {
							disableStyles: _,
							className: z,
							internalClassName: n,
							layout: Q,
							theme: M,
							controller: v,
							treePath: u,
							customComponent: A,
							resultComponent: K,
						} = s;
						if (A) {
							const C = (0, b.x)(Z?.templates?.library.import.component.results || {}, A);
							if (C) return (0, t.Y)(C, { ...s });
						}
						const J = {
							result: { internalClassName: 'ss__results__result', ...(0, Y.s)({ disableStyles: _ }), theme: s?.theme, treePath: u },
							inlineBanner: {
								controller: v,
								internalClassName: 'ss__results__inline-banner',
								...(0, Y.s)({ disableStyles: _ }),
								theme: s?.theme,
								treePath: u,
							},
						};
						let p = s.results;
						s?.columns && s?.rows && s.columns > 0 && s.rows > 0 && (p = s.results?.slice(0, s.columns * s.rows));
						const G = (0, D.Z)({ ...s, columns: Q == w.V.list ? 1 : s.columns }, F);
						return p?.length
							? (0, t.Y)(d._, {
									children: (0, t.Y)('div', {
										...G,
										className: o()('ss__results', `ss__results-${s.layout}`, z, n),
										children: p.map((C) =>
											C.type === c.c.BANNER
												? (0, T.n)(h._, { ...J.inlineBanner, key: C.id, banner: C, layout: s.layout })
												: K && v
												? (0, t.Y)(P.o, {
														result: C,
														controller: v,
														children: (0, L.Y)(K, { key: C.id, controller: v, result: C, theme: M, treePath: u }),
												  })
												: (0, t.Y)($, { ...J.result, result: C, layout: s.layout, controller: v }, C.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(le, N, e) {
				e.d(N, { G: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					V = e('./components/src/hooks/useComponent.tsx'),
					w = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					Y = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const D = ({}) =>
						(0, m.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					d = (0, T.PA)((S) => {
						const B = (0, a.u)(),
							R = (0, c.uk)(),
							H = (0, h.LU)(),
							g = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: H,
							},
							P = (0, L.v6)('termsList', B, g, S),
							{
								layout: b,
								historyTitle: F,
								verticalOptions: $,
								trendingTitle: W,
								suggestionTitle: f,
								retainHistory: U,
								retainTrending: Z,
								treePath: ee,
								disableStyles: te,
								className: ne,
								internalClassName: s,
								controller: _,
								customComponent: z,
							} = P;
						if (z) {
							const I = (0, V.x)(R?.templates?.library.import.component.termsList || {}, z);
							if (I) return (0, t.Y)(I, { ...P });
						}
						const n = { terms: { vertical: !!$, ...(0, w.s)({ disableStyles: te }), theme: P.theme, treePath: ee } },
							Q = (0, Y.Z)(P, D),
							M = _?.store.history || [],
							v = _?.store.terms || [],
							u = _?.store.trending || [],
							A = u?.filter((I) => I.active).pop(),
							K = M?.filter((I) => I.active).pop(),
							{ loaded: J, results: p, state: G } = _?.store;
						let C = !1;
						u?.length && ((Z && J) || (!p.length && !G.input)) && (C = !0);
						let oe = !1;
						M?.length && ((U && J) || (!p.length && !G.input)) && (oe = !0),
							!_.store.state.input && (K || A) && (M?.length && (oe = !0), u?.length && (C = !0));
						const X = (I) => {
								if (typeof I != 'string') {
									const q = I?.map((ue) => X(ue));
									return I?.some((ue, E) => ue !== '_' && q[E]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if (I == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (I == 'History' && oe)
									return (0, t.Y)(O.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: F,
										terms: M,
										controller: _,
										name: 'history',
										limit: _.config.settings?.history?.limit,
										...n.terms,
									});
								if (I == 'Trending' && C)
									return (0, t.Y)(O.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: W,
										terms: u,
										controller: _,
										name: 'trending',
										limit: _.config.settings?.trending?.limit,
										...n.terms,
									});
								if (I == 'Suggestions')
									return v.length
										? (0, t.Y)(O.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: f,
												terms: v,
												controller: _,
												name: 'suggestions',
												...n.terms,
										  })
										: null;
							},
							ae = b?.map((I) => X(I));
						return ae?.some(Boolean)
							? (0, t.Y)(l._, { children: (0, t.Y)('div', { ...Q, className: o()('ss__terms-list', ne, s), children: ae }) })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(le, N, e) {
				e.d(N, { o: () => V });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const h = { ResultTracker: () => (0, T.AH)({}) },
					V = (0, m.PA)((w) => {
						const L = (0, l.u)(),
							Y = (0, a.v6)('resultTracker', L, {}, w),
							O = { impression: !0, click: !0 },
							{ children: D, result: d, track: S, controller: B, className: R, internalClassName: H, disableStyles: g, style: P } = Y,
							b = { ...O, ...S },
							{ ref: F, inViewport: $ } = (0, c.Q)();
						$ && b.impression && B?.track.product.impression(d);
						const W = {};
						return (
							g ? P && (W.css = [P]) : (W.css = [h.ResultTracker(), P]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${B?.type}-result-tracker`, R, H),
								onClick: (f) => {
									b.click && B?.track.product.click(f, d);
								},
								ref: F,
								...W,
								children: D,
							})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(le, N, e) {
				e.d(N, { x: () => T });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function T({ input: m, controller: r, renderInput: o, buttonSelector: l, renderedInputRef: a, setActive: c }) {
					const [h, V] = (0, t.J0)(m),
						[w, L] = (0, t.J0)(!1),
						Y = () => {
							c && c(!0),
								setTimeout(async () => {
									w ||
										(V(a.current),
										(r.config.selector = `${r.config.selector}, .autocomplete__search-input input`),
										await r.bind(),
										a?.current?.focus()),
										L(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							let O = !1;
							const D = () => {
								O = !1;
							};
							if (o && l) {
								let d;
								if ((typeof l == 'string' ? (d = document.querySelector(l)) : (d = l), d)) {
									const S = () => {
											O = !0;
										},
										B = (g) => {
											(O = !1), g.stopPropagation(), Y();
										},
										R = () => {
											O || Y();
										},
										H = () => Y();
									return (
										d.addEventListener('mousedown', S),
										document.addEventListener('mouseup', D, !0),
										d.addEventListener('click', B),
										d.addEventListener('focus', R),
										d.addEventListener('select', H),
										() => {
											d.removeEventListener('mousedown', S),
												document.removeEventListener('mouseup', D, !0),
												d.removeEventListener('click', B),
												d.removeEventListener('focus', R),
												d.removeEventListener('select', H);
										}
									);
								}
							} else if (c) {
								const d = () => {
										O = !0;
									},
									S = (H) => {
										(O = !1), H.stopPropagation(), c(!0);
									},
									B = () => {
										O || c(!0);
									},
									R = () => c(!0);
								return (
									m.addEventListener('mousedown', d),
									document.addEventListener('mouseup', D, !0),
									m.addEventListener('click', S),
									m.addEventListener('focus', B),
									m.addEventListener('select', R),
									() => {
										m.removeEventListener('mousedown', d),
											document.removeEventListener('mouseup', D, !0),
											m.removeEventListener('click', S),
											m.removeEventListener('focus', B),
											m.removeEventListener('select', R);
									}
								);
							}
						}, []),
						(0, t.vJ)(() => {
							if (m !== h && h) {
								const O = () => {
									m.value = h.value;
								};
								return (
									h.addEventListener('input', O),
									() => {
										h.removeEventListener('input', O);
									}
								);
							}
						}, [h]),
						h
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(le, N, e) {
				e.d(N, { i: () => T });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = (m, r, o) => {
					const [l, a] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							m.getController(o.id)
								.then((c) => {
									a(c);
								})
								.catch(() => {
									m.createController(r, o).then((c) => {
										a(c);
									});
								});
						}, []),
						l
					);
				};
			},
			'../../node_modules/dequal/dist/index.mjs'(le, N, e) {
				e.d(N, { j: () => m });
				var t = Object.prototype.hasOwnProperty;
				function T(r, o, l) {
					for (l of r.keys()) if (m(l, o)) return l;
				}
				function m(r, o) {
					var l, a, c;
					if (r === o) return !0;
					if (r && o && (l = r.constructor) === o.constructor) {
						if (l === Date) return r.getTime() === o.getTime();
						if (l === RegExp) return r.toString() === o.toString();
						if (l === Array) {
							if ((a = r.length) === o.length) for (; a-- && m(r[a], o[a]); );
							return a === -1;
						}
						if (l === Set) {
							if (r.size !== o.size) return !1;
							for (a of r) if (((c = a), (c && typeof c == 'object' && ((c = T(o, c)), !c)) || !o.has(c))) return !1;
							return !0;
						}
						if (l === Map) {
							if (r.size !== o.size) return !1;
							for (a of r) if (((c = a[0]), (c && typeof c == 'object' && ((c = T(o, c)), !c)) || !m(a[1], o.get(c)))) return !1;
							return !0;
						}
						if (l === ArrayBuffer) (r = new Uint8Array(r)), (o = new Uint8Array(o));
						else if (l === DataView) {
							if ((a = r.byteLength) === o.byteLength) for (; a-- && r.getInt8(a) === o.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((a = r.byteLength) === o.byteLength) for (; a-- && r[a] === o[a]; );
							return a === -1;
						}
						if (!l || typeof r == 'object') {
							a = 0;
							for (l in r) if ((t.call(r, l) && ++a && !t.call(o, l)) || !(l in o) || !m(r[l], o[l])) return !1;
							return Object.keys(o).length === a;
						}
					}
					return r !== r && o !== o;
				}
			},
		},
	]);
})();
