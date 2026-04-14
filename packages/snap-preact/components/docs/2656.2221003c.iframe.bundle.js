'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2656],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(le, W, e) {
				e.d(W, { _: () => J });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					r = e.n(d),
					o = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/providers/controller.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/withTracking.tsx'),
					g = e('./components/src/providers/snap.tsx'),
					w = e('./components/src/providers/treePath.tsx'),
					S = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/hooks/useA11y.tsx'),
					x = e('./components/src/types.ts'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/hooks/useComponent.tsx');
				const V = ({ width: b }) =>
						(0, D.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: b,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					J = (0, l.Bk)(
						(0, c.W)(
							(0, M.PA)((b) => {
								const Z = (0, a.u)(),
									O = (0, g.uk)(),
									E = (0, w.LU)(),
									K = { layout: x.V.grid, width: 'auto', treePath: E },
									j = (0, S.v6)('inlineBanner', Z, K, b),
									{ banner: N, className: A, internalClassName: h, disableA11y: Y, layout: Q, onClick: ee, customComponent: te } = j;
								if (te) {
									const s = (0, z.x)(O?.templates?.library.import.component.inlineBanner || {}, te);
									if (s) return (0, t.Y)(s, { ...j });
								}
								const oe = (0, T.Z)(j, V);
								return N && N.value
									? (0, t.Y)(o._, {
											children: (0, t.Y)('div', {
												onClick: (s) => {
													ee && ee(s, N);
												},
												role: 'article',
												ref: (s) => {
													Y || (0, U.iy)(s), (b.trackingRef.current = s);
												},
												className: r()('ss__inline-banner', `ss__inline-banner--${Q}`, A, h),
												...oe,
												dangerouslySetInnerHTML: { __html: N.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(le, W, e) {
				e.d(W, { i: () => Z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useComponent.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					z = e.n(M);
				const V = ({ vertical: O, theme: E }) =>
						(0, d.AH)({
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
								flexDirection: O ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: E?.variables?.colors?.primary } },
								},
							},
						}),
					J = (O) => O?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					b = (O, E) => {
						if (O && E) {
							const K = O.match(J(E));
							if (E && O && K && typeof K.index == 'number') {
								const j = O.slice(0, K.index),
									N = O.slice(K.index + E.length, O.length);
								return `${j ? `<em>${j}</em>` : ''}${E}${N ? `<em>${N}</em>` : ''}`;
							}
						}
						return `<em>${O}</em>`;
					},
					Z = (0, D.PA)((O) => {
						const E = (0, a.u)(),
							K = (0, c.uk)(),
							N = { vertical: !0, previewOnHover: !0, treePath: (0, g.LU)() },
							A = (0, S.v6)('terms', E, N, O),
							{
								title: h,
								onTermClick: Y,
								limit: Q,
								previewOnHover: ee,
								emIfy: te,
								className: oe,
								internalClassName: s,
								controller: m,
								customComponent: F,
							} = A,
							n = m?.store?.state?.input,
							k = A.terms;
						if (F) {
							const u = (0, x.x)(K?.templates?.library.import.component.terms || {}, F);
							if (u) return (0, t.Y)(u, { ...A });
						}
						const C = (0, T.Z)(A, V),
							f = (u, H) => {
								Y && Y(u, H), m?.setFocused && m?.setFocused();
							},
							_ = Q ? k?.slice(0, Q) : k,
							R = { title: { value: h } },
							B = z()(R, A.lang || {}),
							$ = (0, U.u)({ title: B.title }, { controller: m });
						return _?.length
							? (0, t.Y)(l._, {
									children: (0, t.FD)('div', {
										...C,
										className: o()('ss__terms', oe, s),
										children: [
											h ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...$.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': h,
												children: _?.map((u, H) => {
													const P = {
															term: {
																value: `${te ? b(u.value, n || '') : u.value}`,
																attributes: { 'aria-label': `${h || ''} item ${H + 1} of ${_.length}, ${u.value}` },
															},
														},
														se = z()(P, A.lang || {}),
														X = (0, U.u)({ term: se.term }, { index: H, numberOfTerms: _.length, term: u });
													return (0, t.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': u.active }),
														children: (0, t.Y)('a', {
															onClick: (ae) => f(ae, u),
															href: u.url.href,
															...(ee ? (0, w.l)(u.preview) : {}),
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
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(le, W, e) {
				e.d(W, { h: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					l = e.n(o),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					c = e.n(a),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					w = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					S = e('./components/src/components/Organisms/Results/Results.tsx'),
					T = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					U = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					x = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/defined.ts'),
					z = e('./components/src/utilities/mergeStyles.ts'),
					V = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					J = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/cache.tsx'),
					Z = e('./components/src/types.ts'),
					O = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					j = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					N = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					A = e('./components/src/components/Atoms/Button/Button.tsx'),
					h = e('./components/src/providers/snap.tsx'),
					Y = e('./components/src/hooks/useCreateController.tsx'),
					Q = e('./components/src/hooks/useComponent.tsx');
				function ee(s) {
					let m, F, n;
					if (s?.recommendation?.enabled) {
						const C = s?.recommendation?.component || 'RecommendationGrid',
							f = (0, h.uk)();
						if (f?.templates) {
							const R = s?.recommendation?.resultComponent || 'Result',
								B = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, s.recommendation.config);
							(B.id = B.id || `search-${B.tag}`),
								(n = (0, Y.i)(f, 'recommendation', B)),
								!n?.store?.loaded && !n?.store?.loading && n?.store.error?.type !== 'error' && n?.search(),
								R && f?.templates?.library.import.component.result && (F = (0, Q.x)(f?.templates?.library.import.component.result, R)),
								C &&
									f?.templates?.library.import.component.recommendation.default &&
									(m = (0, Q.x)(f?.templates?.library.import.component.recommendation.default, C));
						}
					}
					return { RecommendationTemplateComponent: m, RecommendationTemplateResultComponent: F, recsController: n };
				}
				const te = ({ controller: s, input: m, viewportMaxHeight: F, width: n, theme: k, column1: C, column2: f, column3: _, column4: R }) => {
						let B = 0;
						if (m) {
							let u;
							typeof m == 'string' ? (u = document.querySelector(m)) : (u = m), (B = u?.getBoundingClientRect()?.bottom || 0);
						}
						const $ = !!(s.store.search?.query?.string && s.store.results.length === 0);
						return (0, r.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: C?.width == 'auto' ? '1 1 auto' : `1 0 ${C?.width}`,
								maxWidth: C?.width == 'auto' ? 'auto' : C?.width,
								alignContent: C?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: f?.width == 'auto' ? '1 1 auto' : `1 0 ${f?.width}`,
								maxWidth: f?.width == 'auto' ? 'auto' : f?.width,
								alignContent: f?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: _?.width == 'auto' ? '1 1 auto' : `1 0 ${_?.width}`,
								maxWidth: _?.width == 'auto' ? 'auto' : _?.width,
								alignContent: _?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: R?.width == 'auto' ? '1 1 auto' : `1 0 ${R?.width}`,
								maxWidth: R?.width == 'auto' ? 'auto' : R?.width,
								alignContent: R?.alignContent,
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
							maxHeight: F && B ? `calc(100vh - ${B + 10}px)` : void 0,
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
								margin: $ ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: $ ? 'center' : 'right',
								a: { fontWeight: 'bold', color: k?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					oe = (0, d.PA)((s) => {
						const m = (0, J.u)(),
							F = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let n = (0, x.v6)('autocompleteLayout', m, F, s);
						delete n.treePath, n.layout == 'terms' && (n.templates = { recommendation: { enabled: !1 } });
						const k = (0, V.l)(),
							C = () => {
								p?.setFocused && p?.setFocused();
							},
							f = {
								components: {
									facet: { valueProps: k },
									facetGridOptions: { onClick: C },
									facetHierarchyOptions: { onClick: C },
									facetListOptions: { onClick: C },
									facetPaletteOptions: { onClick: C },
								},
							};
						if (m?.name) n.theme = c().all([f, n?.theme || {}], { arrayMerge: (i, y) => y });
						else {
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
								y = c().all([i, f, n?.theme || {}], { arrayMerge: (re, v) => v });
							n = { ...n, theme: y };
						}
						let _ = n.input;
						_ && typeof _ == 'string' && (_ = document.querySelector(_));
						const {
							facetsTitle: R,
							contentTitle: B,
							column1: $,
							column2: u,
							column3: H,
							column4: P,
							onReset: se,
							excludeBanners: X,
							resultComponent: ae,
							templates: L,
							disableStyles: q,
							className: Ce,
							internalClassName: ue,
							controller: p,
						} = n;
						let de = n.layout;
						const I = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										p?.setFocused && p.setFocused(), (window.location.href = ye.url.href);
									},
									name: 'see-more',
									...(0, M.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(n.layout == 'terms' || n.layout == 'mini'),
									controller: p,
									...(0, M.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(n.layout == 'terms' || n.layout == 'mini'),
									controller: p,
									...(0, M.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, M.s)({ disableStyles: q }), theme: n.theme, treePath: s.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, M.s)({ disableStyles: q }), theme: n.theme, treePath: s.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, M.s)({ disableStyles: q }), theme: n.theme, treePath: s.treePath },
								results: {
									columns: 3,
									rows: 2,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: ae,
									...(0, M.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, M.s)({ disableStyles: q }),
									theme: n.theme,
									treePath: s.treePath,
								},
							},
							{
								search: pe,
								terms: Pe,
								trending: he,
								results: ce,
								merchandising: ne,
								pagination: De,
								filters: We,
								facets: Te,
								state: ye,
								loading: Me,
								loaded: Re,
							} = p.store,
							fe = p.store.history || [];
						p &&
							typeof _ == 'string' &&
							((_ = document.querySelector(_)),
							(0, D.vJ)(() => {
								p.bind();
							}, []));
						const Ue = _ === ye.focusedInput && (Pe.length > 0 || he?.length > 0 || fe?.length > 0 || (ye.input && p.store.loaded)),
							Le = () => !!(ce.length > 0 || Object.keys(ne.content).length > 0 || pe?.query?.string || Me),
							[Oe, Ae] = (0, D.J0)(Le()),
							Be = () => {
								const i = he?.filter((re) => re.active).pop(),
									y = fe?.filter((re) => re.active).pop();
								i || y || Le() ? Ae(!0) : Ae(!1);
							};
						(0, D.vJ)(() => {
							Be();
						}, [he, fe]);
						const Ee = Te.length ? Te.filter((i) => i.display !== Z.Q.SLIDER) : [];
						Be();
						const Ke = (0, z.Z)(n, te),
							Ie = () => {
								p.setFocused(), se && se();
							},
							je = {
								contentTitle: { value: B },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: R },
								noResultsText: {
									value: `<p>No results found for "${pe.originalQuery?.string || pe.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${De.totalResults} ${We.length > 0 ? 'filtered' : ''} result${De.totalResults == 1 ? '' : 's'} for "${
										pe.query?.string
									}"`,
								},
							},
							ve = c()(je, n.lang || {}),
							ie = (0, O.u)(ve, { controller: p });
						let me, ge, xe;
						const Ne = !!(p.store.search?.query?.string && p.store.results.length === 0);
						if (L?.recommendation?.enabled && Ne) {
							const i = ee(L);
							(ge = i.RecommendationTemplateComponent), (xe = i.RecommendationTemplateResultComponent), (me = i.recsController);
						}
						const _e = (i) => {
							if (typeof i != 'string') {
								const y = i?.map((v) => _e(v));
								return i.some((v, G) => v !== '_' && y[G]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: y }) : null;
							}
							if (i == 'c1' && $?.layout?.length) {
								const y = $.layout.map((v) => _e(v));
								return $.layout.some((v, G) => (Array.isArray(v) || v !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: y })
									: null;
							}
							if (i == 'c2' && u?.layout?.length) {
								const y = u.layout.map((v) => _e(v));
								return u.layout.some((v, G) => (Array.isArray(v) || v !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: y })
									: null;
							}
							if (i == 'c3' && H?.layout?.length) {
								const y = H.layout.map((v) => _e(v));
								return H.layout.some((v, G) => (Array.isArray(v) || v !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: y })
									: null;
							}
							if (i == 'c4' && P?.layout?.length) {
								const y = P.layout.map((v) => _e(v));
								return P.layout.some((v, G) => (Array.isArray(v) || v !== '_') && !!y[G])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: y })
									: null;
							}
							if (i == 'termsList')
								return !Pe?.length && !fe?.length && !he?.length
									? null
									: (0, t.Y)('div', {
											className: l()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(K.G, { controller: p, ...I.termsList }),
									  });
							if (i == 'terms.history')
								return fe?.length
									? (0, t.Y)(j.i, {
											controller: p,
											terms: p.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: p.config.settings?.history?.limit,
											...I.terms,
											title: 'History',
									  })
									: null;
							if (i == 'terms.trending')
								return he?.length
									? (0, t.Y)(j.i, {
											controller: p,
											terms: p.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: p.config.settings?.trending?.limit,
											...I.terms,
											title: 'Trending',
									  })
									: null;
							if (i == 'terms.suggestions')
								return Pe?.length
									? (0, t.Y)(j.i, {
											controller: p,
											terms: p.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...I.terms,
											title: 'Suggestions',
									  })
									: null;
							if (i == 'facets')
								return Ee.length
									? (0, t.FD)('div', {
											className: l()('ss__autocomplete__facets-wrapper'),
											children: [
												R || ve.facetsTitle.value
													? (0, t.Y)('div', {
															className: l()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ie.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(U.J, { ...I.facets, facets: Ee }),
														X ? null : (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (i == 'facetsHorizontal')
								return Ee.length
									? (0, t.FD)(t.FK, {
											children: [
												R || ve.facetsTitle.value
													? (0, t.Y)('div', {
															className: l()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ie.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(N.b, { ...I.facetsHorizontal, facets: Ee }),
														X ? null : (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (i == 'content' && Oe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length > 0 || Re
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														X ? null : (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.HEADER, name: 'header' }),
														X ? null : (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.BANNER, name: 'banner' }),
														ce.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(B || ve.contentTitle.value) && ce.length > 0
																			? (0, t.Y)('div', {
																					className: l()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...ie.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(S.n, { results: ce, ...I.results, controller: p }),
																	],
															  })
															: Re
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ie.noResultsText?.all }),
																		ge && me?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(ge, {
																						controller: me,
																						title: me.store?.profile?.display?.templateParameters?.title,
																						resultComponent: xe,
																						name: 'noResultsRecommendations',
																						treePath: s.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														X ? null : (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (i == 'no-results' && Oe)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length == 0 && !Me
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ie.noResultsText?.all }),
														ge && me?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(ge, {
																		controller: me,
																		title: me.store?.profile?.display?.templateParameters?.title,
																		resultComponent: xe,
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
							if (i == 'banner.banner') return (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.BANNER, name: 'banner' });
							if (i == 'banner.footer') return (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.FOOTER, name: 'footer' });
							if (i == 'banner.header') return (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.HEADER, name: 'header' });
							if (i == 'banner.left') return (0, t.Y)(T.l, { ...I.banner, content: ne.content, type: g.c.LEFT, name: 'left' });
							if (i == 'button.see-more' && Oe && pe?.query?.string && ce.length > 0)
								return (0, t.FD)(A.$, {
									...I.button,
									...ie.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...ie.seeMoreButton.value }), (0, t.Y)(w.I, { ...I.icon })],
								});
						};
						return (
							typeof n.layout == 'string' &&
								(n.layout === 'terms' && (de = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								n.layout === 'mini' && (de = [['termsList'], ['content'], ['_', 'button.see-more']]),
								n.layout === 'standard' && (de = [['c1', 'c2', 'c3']])),
							Ue && de?.length
								? (0, t.Y)(b._, {
										children: (0, t.FD)('div', {
											...Ke,
											className: l()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': n.layout === 'terms' },
												{ 'ss__autocomplete--mini': n.layout === 'mini' },
												Ce,
												ue
											),
											onClick: (i) => i.stopPropagation(),
											ref: (i) => (0, E.iy)(i, 0, !1, Ie),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (i) => (0, E.iy)(i),
													onClick: () => Ie(),
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
			'./components/src/components/Organisms/Results/Results.tsx'(le, W, e) {
				e.d(W, { n: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(l),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					g = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					w = e('./components/src/components/Molecules/Result/Result.tsx'),
					S = e('./components/src/types.ts'),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					U = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					z = e('./components/src/providers/cache.tsx'),
					V = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					J = e('./components/src/providers/withTracking.tsx'),
					b = e('./components/src/providers/snap.tsx'),
					Z = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useDisplaySettings.tsx'),
					E = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					K = e('./components/src/hooks/useComponent.tsx');
				const j = ({ gapSize: h, columns: Y }) =>
						(0, D.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: h,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${Y}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / Y}% - (${Y - 1} * ${h} / ${Y} ) )`,
								marginRight: h,
								marginBottom: h,
								[`&:nth-of-type(${Y}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${Y})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					N = (0, J.W)(w.Q),
					A = (0, d.PA)((h) => {
						const Y = (0, V.u)(),
							Q = (0, b.uk)(),
							ee = (0, Z.LU)(),
							te = {
								0: { columns: h.columns || 1 },
								540: { columns: h.columns || 2 },
								768: { columns: h.columns || 3 },
								991: { columns: h.columns || 4 },
							},
							oe = { results: h.controller?.store?.results, columns: 4, gapSize: '20px', layout: S.V.grid, breakpoints: te, treePath: ee };
						let s = (0, x.v6)('results', Y, oe, h);
						if (!h.theme?.name) {
							const P = (0, O.X)(s?.breakpoints || {}),
								se = a()(s?.theme || {}, P?.theme || {}, { arrayMerge: (X, ae) => ae });
							s = { ...s, ...P, theme: se };
						}
						const {
							disableStyles: m,
							className: F,
							internalClassName: n,
							layout: k,
							theme: C,
							controller: f,
							treePath: _,
							customComponent: R,
							resultComponent: B,
						} = s;
						if (R) {
							const P = (0, K.x)(Q?.templates?.library.import.component.results || {}, R);
							if (P) return (0, t.Y)(P, { ...s });
						}
						const $ = {
							result: { internalClassName: 'ss__results__result', ...(0, U.s)({ disableStyles: m }), theme: s?.theme, treePath: _ },
							inlineBanner: {
								controller: f,
								internalClassName: 'ss__results__inline-banner',
								...(0, U.s)({ disableStyles: m }),
								theme: s?.theme,
								treePath: _,
							},
						};
						let u = s.results;
						s?.columns && s?.rows && s.columns > 0 && s.rows > 0 && (u = s.results?.slice(0, s.columns * s.rows));
						const H = (0, M.Z)({ ...s, columns: k == S.V.list ? 1 : s.columns }, j);
						return u?.length
							? (0, t.Y)(z._, {
									children: (0, t.Y)('div', {
										...H,
										className: o()('ss__results', `ss__results-${s.layout}`, F, n),
										children: u.map((P) =>
											P.type === c.c.BANNER
												? (0, D.n)(g._, { ...$.inlineBanner, key: P.id, banner: P, layout: s.layout })
												: B && f
												? (0, t.Y)(E.o, {
														result: P,
														controller: f,
														children: (0, T.Y)(B, { key: P.id, controller: f, result: P, theme: C, treePath: _ }),
												  })
												: (0, t.Y)(N, { ...$.result, result: P, layout: s.layout, controller: f }, P.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(le, W, e) {
				e.d(W, { G: () => z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useComponent.tsx'),
					S = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const M = ({}) =>
						(0, d.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					z = (0, D.PA)((V) => {
						const J = (0, a.u)(),
							b = (0, c.uk)(),
							Z = (0, g.LU)(),
							O = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: Z,
							},
							E = (0, T.v6)('termsList', J, O, V),
							{
								layout: K,
								historyTitle: j,
								verticalOptions: N,
								trendingTitle: A,
								suggestionTitle: h,
								retainHistory: Y,
								retainTrending: Q,
								treePath: ee,
								disableStyles: te,
								className: oe,
								internalClassName: s,
								controller: m,
								customComponent: F,
							} = E;
						if (F) {
							const L = (0, w.x)(b?.templates?.library.import.component.termsList || {}, F);
							if (L) return (0, t.Y)(L, { ...E });
						}
						const n = { terms: { vertical: !!N, ...(0, S.s)({ disableStyles: te }), theme: E.theme, treePath: ee } },
							k = (0, U.Z)(E, M),
							C = m?.store.history || [],
							f = m?.store.terms || [],
							_ = m?.store.trending || [],
							R = _?.filter((L) => L.active).pop(),
							B = C?.filter((L) => L.active).pop(),
							{ loaded: $, results: u, state: H } = m?.store;
						let P = !1;
						_?.length && ((Q && $) || (!u.length && !H.input)) && (P = !0);
						let se = !1;
						C?.length && ((Y && $) || (!u.length && !H.input)) && (se = !0),
							!m.store.state.input && (B || R) && (C?.length && (se = !0), _?.length && (P = !0));
						const X = (L) => {
								if (typeof L != 'string') {
									const q = L?.map((ue) => X(ue));
									return L?.some((ue, p) => ue !== '_' && q[p]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if (L == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (L == 'History' && se)
									return (0, t.Y)(x.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: j,
										terms: C,
										controller: m,
										name: 'history',
										limit: m.config.settings?.history?.limit,
										...n.terms,
									});
								if (L == 'Trending' && P)
									return (0, t.Y)(x.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: A,
										terms: _,
										controller: m,
										name: 'trending',
										limit: m.config.settings?.trending?.limit,
										...n.terms,
									});
								if (L == 'Suggestions')
									return f.length
										? (0, t.Y)(x.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: h,
												terms: f,
												controller: m,
												name: 'suggestions',
												...n.terms,
										  })
										: null;
							},
							ae = K?.map((L) => X(L));
						return ae?.some(Boolean)
							? (0, t.Y)(l._, { children: (0, t.Y)('div', { ...k, className: o()('ss__terms-list', oe, s), children: ae }) })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(le, W, e) {
				e.d(W, { o: () => w });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const g = { ResultTracker: () => (0, D.AH)({}) },
					w = (0, d.PA)((S) => {
						const T = (0, l.u)(),
							U = (0, a.v6)('resultTracker', T, {}, S),
							x = { impression: !0, click: !0 },
							{ children: M, result: z, track: V, controller: J, className: b, internalClassName: Z, disableStyles: O, style: E } = U,
							K = { ...x, ...V },
							{ ref: j, inViewport: N } = (0, c.Q)();
						N && K.impression && J?.track.product.impression(z);
						const A = {};
						return (
							O ? E && (A.css = [E]) : (A.css = [g.ResultTracker(), E]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${J?.type}-result-tracker`, b, Z),
								onClick: (h) => {
									K.click && J?.track.product.click(h, z);
								},
								ref: j,
								...A,
								children: M,
							})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(le, W, e) {
				e.d(W, { x: () => D });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function D({ input: d, controller: r, renderInput: o, buttonSelector: l, renderedInputRef: a, setActive: c }) {
					const [g, w] = (0, t.J0)(d),
						[S, T] = (0, t.J0)(!1),
						U = () => {
							c && c(!0),
								setTimeout(async () => {
									S || (w(a.current), (r.config.selector = '.autocomplete__search-input input'), await r.bind(), a?.current?.focus()), T(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (o && l) {
								let x;
								typeof l == 'string' ? (x = document.querySelector(l)) : (x = l),
									x &&
										(x.addEventListener('click', (M) => {
											M.stopPropagation(), U();
										}),
										x.addEventListener('focus', () => U()),
										x.addEventListener('select', () => U()));
							} else
								c &&
									(d.addEventListener('click', (x) => {
										x.stopPropagation(), c(!0);
									}),
									d.addEventListener('focus', () => c(!0)),
									d.addEventListener('select', () => c(!0)));
						}, []),
						(0, t.vJ)(() => {
							d !== g &&
								g?.addEventListener('input', () => {
									d.value = g.value;
								});
						}, [g]),
						g
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(le, W, e) {
				e.d(W, { i: () => D });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const D = (d, r, o) => {
					const [l, a] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							d.getController(o.id)
								.then((c) => {
									a(c);
								})
								.catch(() => {
									d.createController(r, o).then((c) => {
										a(c);
									});
								});
						}, []),
						l
					);
				};
			},
			'../../node_modules/dequal/dist/index.mjs'(le, W, e) {
				e.d(W, { j: () => d });
				var t = Object.prototype.hasOwnProperty;
				function D(r, o, l) {
					for (l of r.keys()) if (d(l, o)) return l;
				}
				function d(r, o) {
					var l, a, c;
					if (r === o) return !0;
					if (r && o && (l = r.constructor) === o.constructor) {
						if (l === Date) return r.getTime() === o.getTime();
						if (l === RegExp) return r.toString() === o.toString();
						if (l === Array) {
							if ((a = r.length) === o.length) for (; a-- && d(r[a], o[a]); );
							return a === -1;
						}
						if (l === Set) {
							if (r.size !== o.size) return !1;
							for (a of r) if (((c = a), (c && typeof c == 'object' && ((c = D(o, c)), !c)) || !o.has(c))) return !1;
							return !0;
						}
						if (l === Map) {
							if (r.size !== o.size) return !1;
							for (a of r) if (((c = a[0]), (c && typeof c == 'object' && ((c = D(o, c)), !c)) || !d(a[1], o.get(c)))) return !1;
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
							for (l in r) if ((t.call(r, l) && ++a && !t.call(o, l)) || !(l in o) || !d(r[l], o[l])) return !1;
							return Object.keys(o).length === a;
						}
					}
					return r !== r && o !== o;
				}
			},
		},
	]);
})();
