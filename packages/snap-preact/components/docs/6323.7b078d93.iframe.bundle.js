'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6323],
		{
			'./components/src/components/Molecules/Terms/Terms.tsx'(he, z, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					j = t('../../node_modules/mobx-react-lite/es/index.js'),
					U = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = t('../../node_modules/classnames/index.js'),
					R = t.n(p),
					B = t('./components/src/providers/cache.tsx'),
					N = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = t('./components/src/providers/treePath.tsx'),
					n = t('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					Y = t('./components/src/utilities/mergeProps.ts'),
					X = t('./components/src/utilities/mergeStyles.ts'),
					x = t('./components/src/hooks/useLang.tsx'),
					k = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					q = t('../../node_modules/deepmerge/dist/cjs.js'),
					P = t.n(q);
				const J = ({ vertical: r, theme: _ }) =>
						(0, U.AH)({
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
								flexDirection: r ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: _?.variables?.colors?.primary } },
								},
							},
						}),
					v = (r) => r?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					T = (r, _) => {
						if (r && _) {
							const O = r.match(v(_));
							if (_ && r && O && typeof O.index == 'number') {
								const I = r.slice(0, O.index),
									y = r.slice(O.index + _.length, r.length);
								return `${I ? `<em>${I}</em>` : ''}${_}${y ? `<em>${y}</em>` : ''}`;
							}
						}
						return `<em>${r}</em>`;
					},
					h = (0, j.PA)((r) => {
						const _ = (0, N.u)(),
							I = { vertical: !0, previewOnHover: !0, treePath: (0, b.LU)() },
							y = (0, Y.v6)('terms', _, I, r),
							{ title: G, onTermClick: oe, limit: ne, previewOnHover: ae, emIfy: ie, className: re, internalClassName: ce, controller: C } = y,
							me = C?.store?.state?.input,
							l = y.terms,
							{ overrideElement: E, shouldRenderDefault: K } = (0, k._)('terms', y);
						if (!K) return E;
						const s = (0, X.Z)(y, J),
							S = (d, D) => {
								oe && oe(d, D), C?.setFocused && C?.setFocused();
							},
							m = ne ? l?.slice(0, ne) : l,
							A = { title: { value: G } },
							f = P()(A, y.lang || {}),
							L = (0, x.u)({ title: f.title }, { controller: C }, { activeBreakpoint: _?.activeBreakpoint });
						return m?.length
							? (0, e.Y)(B._, {
									children: (0, e.FD)('div', {
										...s,
										className: R()('ss__terms', re, ce),
										children: [
											G ? (0, e.Y)('div', { className: 'ss__terms__title', children: (0, e.Y)('h5', { ...L.title.all }) }) : null,
											(0, e.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': G,
												children: m?.map((d, D) => {
													const M = {
															term: {
																value: `${ie ? T(d.value, me || '') : d.value}`,
																attributes: { 'aria-label': `${G || ''} item ${D + 1} of ${m.length}, ${d.value}` },
															},
														},
														F = P()(M, y.lang || {}),
														$ = (0, x.u)({ term: F.term }, { index: D, numberOfTerms: m.length, term: d }, { activeBreakpoint: _?.activeBreakpoint });
													return (0, e.Y)('li', {
														className: R()('ss__terms__option', { 'ss__terms__option--active': d.active }),
														children: (0, e.Y)('a', {
															onClick: (ee) => S(ee, d),
															href: d.url.href,
															...(ae ? (0, n.l)(d.preview) : {}),
															...$.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				t.d(z, ['i', 0, h]);
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(he, z, t) {
				t.d(z, { h: () => me });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					j = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					U = t('../../node_modules/mobx-react-lite/es/index.js'),
					p = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = t('../../node_modules/classnames/index.js'),
					B = t.n(R),
					N = t('../../node_modules/deepmerge/dist/cjs.js'),
					b = t.n(N),
					n = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					Y = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					X = t('./components/src/components/Organisms/Results/Results.tsx'),
					x = t('./components/src/components/Atoms/Banner/Banner.tsx'),
					k = t('./components/src/components/Organisms/Facets/Facets.tsx'),
					q = t('./components/src/utilities/mergeProps.ts'),
					P = t('./components/src/utilities/defined.ts'),
					J = t('./components/src/utilities/mergeStyles.ts'),
					v = t('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					T = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = t('./components/src/providers/cache.tsx'),
					r = t('./components/src/types.ts'),
					_ = t('./components/src/hooks/useLang.tsx'),
					O = t('./components/src/hooks/useA11y.tsx'),
					I = t('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					y = t('./components/src/components/Molecules/Terms/Terms.tsx'),
					G = t('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					oe = t('./components/src/components/Atoms/Button/Button.tsx'),
					ne = t('./components/src/components/Molecules/TabSelection/TabSelection.tsx'),
					ae = t('./components/src/providers/snap.tsx'),
					ie = t('./components/src/hooks/useCreateController.tsx'),
					re = t('./components/src/hooks/useComponent.tsx');
				function ce(l) {
					let E, K, s;
					const S = (0, ae.uk)(),
						m = !!l?.recommendation?.enabled,
						A = m ? l?.recommendation?.component || 'RecommendationGrid' : void 0,
						f = m ? l?.recommendation?.resultComponent || 'Result' : void 0,
						L = S?.templates?.library.import.component.recommendation.default || {},
						d = S?.templates?.library.import.component.result || {},
						{ ComponentOverride: D, shouldWaitForNamedOverride: M } = (0, re.x)(L, A),
						{ ComponentOverride: F, shouldWaitForNamedOverride: $ } = (0, re.x)(d, f);
					if (m && ((E = M ? void 0 : D), (K = $ ? void 0 : F), S?.templates)) {
						const a = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, l.recommendation.config);
						(a.id = a.id || `search-${a.tag}`),
							(s = (0, ie.i)(S, 'recommendation', a)),
							!s?.store?.loaded && !s?.store?.loading && s?.store.error?.type !== 'error' && s?.search();
					}
					return { RecommendationTemplateComponent: E, RecommendationTemplateResultComponent: K, recsController: s };
				}
				const C = ({ controller: l, input: E, viewportMaxHeight: K, width: s, theme: S, column1: m, column2: A, column3: f, column4: L }) => {
						let d = 0;
						if (E) {
							let M;
							typeof E == 'string' ? (M = document.querySelector(E)) : (M = E), (d = M?.getBoundingClientRect()?.bottom || 0);
						}
						const D = !!(l.store.search?.query?.string && l.store.results.length === 0);
						return (0, p.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: m?.width == 'auto' ? '1 1 0' : `1 0 ${m?.width}`,
								maxWidth: m?.width == 'auto' ? 'none' : m?.width,
								alignContent: m?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: A?.width == 'auto' ? '1 1 0' : `1 0 ${A?.width}`,
								maxWidth: A?.width == 'auto' ? 'none' : A?.width,
								alignContent: A?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: f?.width == 'auto' ? '1 1 0' : `1 0 ${f?.width}`,
								maxWidth: f?.width == 'auto' ? 'none' : f?.width,
								alignContent: f?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: L?.width == 'auto' ? '1 1 0' : `1 0 ${L?.width}`,
								maxWidth: L?.width == 'auto' ? 'none' : L?.width,
								alignContent: L?.alignContent,
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
							maxWidth: s,
							maxHeight: K && d ? `calc(100vh - ${d + 10}px)` : void 0,
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
								margin: D ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner': { 'iframe, img': { maxWidth: '100%', height: 'auto' } },
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: D ? 'center' : 'right',
								a: { fontWeight: 'bold', color: S?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					me = (0, U.PA)((l) => {
						const E = (0, T.u)(),
							K = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['tabSelection'], ['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let s = (0, q.v6)('autocompleteLayout', E, K, l);
						delete s.treePath, s.layout == 'terms' && (s.templates = { recommendation: { enabled: !1 } });
						const S = (0, v.l)(),
							m = () => {
								i?.setFocused && i?.setFocused();
							},
							A = {
								components: {
									facet: { valueProps: S },
									facetGridOptions: { onClick: m },
									facetHierarchyOptions: { onClick: m },
									facetListOptions: { onClick: m },
									facetPaletteOptions: { onClick: m },
								},
							};
						if (E?.type !== 'templates') {
							const o = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								u = b().all([o, A, s?.theme || {}], { arrayMerge: (Z, c) => c });
							s = { ...s, theme: u };
						} else s.theme = b().all([A, s?.theme || {}], { arrayMerge: (o, u) => u });
						let f = s.input;
						f && typeof f == 'string' && (f = document.querySelector(f));
						const {
							facetsTitle: L,
							contentTitle: d,
							column1: D,
							column2: M,
							column3: F,
							column4: $,
							onReset: ee,
							excludeBanners: a,
							resultComponent: fe,
							templates: ye,
							disableStyles: W,
							className: Ce,
							internalClassName: Ne,
							controller: i,
							tabManager: Ee,
						} = s;
						let Q = s.layout;
						const g = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										i?.setFocused && i.setFocused(), (window.location.href = Pe.url.href);
									},
									name: 'see-more',
									...(0, P.s)({ disableStyles: W }),
									theme: s.theme,
									treePath: l.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(s.layout == 'terms' || s.layout == 'mobile'),
									controller: i,
									...(0, P.s)({ disableStyles: W }),
									theme: s.theme,
									treePath: l.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(s.layout == 'terms' || s.layout == 'mobile'),
									controller: i,
									...(0, P.s)({ disableStyles: W }),
									theme: s.theme,
									treePath: l.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, P.s)({ disableStyles: W }), theme: s.theme, treePath: l.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, P.s)({ disableStyles: W }), theme: s.theme, treePath: l.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, P.s)({ disableStyles: W }), theme: s.theme, treePath: l.treePath },
								results: {
									columns: 3,
									rows: 2,
									excludeBanners: a,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: fe,
									...(0, P.s)({ disableStyles: W }),
									theme: s.theme,
									treePath: l.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, P.s)({ disableStyles: W }),
									theme: s.theme,
									treePath: l.treePath,
								},
								tabSelection: { tabManager: Ee, ...(0, P.s)({ disableStyles: W }), theme: s.theme, treePath: l.treePath },
							},
							{
								search: ue,
								terms: xe,
								trending: de,
								results: te,
								merchandising: H,
								pagination: Le,
								filters: Ye,
								facets: De,
								state: Pe,
								loading: Re,
								loaded: be,
							} = i.store,
							_e = i.store.history || [];
						i &&
							typeof f == 'string' &&
							((f = document.querySelector(f)),
							(0, j.vJ)(() => {
								i.bind();
							}, []));
						const Ie = f === Pe.focusedInput && (xe.length > 0 || de?.length > 0 || _e?.length > 0 || (Pe.input && i.store.loaded)),
							Me = () => !!(te.length > 0 || Object.keys(H.content).length > 0 || ue?.query?.string || Re),
							[Te, Be] = (0, j.J0)(Me()),
							Ae = () => {
								const o = de?.filter((Z) => Z.active).pop(),
									u = _e?.filter((Z) => Z.active).pop();
								o || u || Me() ? Be(!0) : Be(!1);
							};
						(0, j.vJ)(() => {
							Ae();
						}, [de, _e]);
						const ge = De.length ? De.filter((o) => o.display !== r.Q.SLIDER) : [];
						Ae();
						const Se = (0, J.Z)(s, C),
							We = {
								contentTitle: { value: d },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: L },
								noResultsText: {
									value: `<p>No results found for "${ue.originalQuery?.string || ue.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${Le.totalResults} ${Ye.length > 0 ? 'filtered' : ''} result${Le.totalResults == 1 ? '' : 's'} for "${
										ue.query?.string
									}"`,
								},
							},
							ve = b()(We, s.lang || {}),
							V = (0, _.u)(ve, { controller: i }, { activeBreakpoint: E?.activeBreakpoint });
						let se, pe, Oe;
						const we = !!(i.store.search?.query?.string && i.store.results.length === 0);
						if (ye?.recommendation?.enabled && we) {
							const o = ce(ye);
							(pe = o.RecommendationTemplateComponent), (Oe = o.RecommendationTemplateResultComponent), (se = o.recsController);
						}
						const le = (o) => {
							if (typeof o != 'string') {
								const u = o?.map((c) => le(c));
								return o.some((c, w) => c !== '_' && u[w]) ? (0, e.Y)('div', { className: 'ss__autocomplete__row', children: u }) : null;
							}
							if (o == 'c1' && D?.layout?.length) {
								const u = D.layout.map((c) => le(c));
								return D.layout.some((c, w) => (Array.isArray(c) || c !== '_') && !!u[w])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: u })
									: null;
							}
							if (o == 'c2' && M?.layout?.length) {
								const u = M.layout.map((c) => le(c));
								return M.layout.some((c, w) => (Array.isArray(c) || c !== '_') && !!u[w])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: u })
									: null;
							}
							if (o == 'c3' && F?.layout?.length) {
								const u = F.layout.map((c) => le(c));
								return F.layout.some((c, w) => (Array.isArray(c) || c !== '_') && !!u[w])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: u })
									: null;
							}
							if (o == 'c4' && $?.layout?.length) {
								const u = $.layout.map((c) => le(c));
								return $.layout.some((c, w) => (Array.isArray(c) || c !== '_') && !!u[w])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: u })
									: null;
							}
							if (o == 'termsList')
								return !xe?.length && !_e?.length && !de?.length
									? null
									: (0, e.Y)('div', {
											className: B()('ss__autocomplete__terms-wrapper'),
											children: (0, e.Y)(I.G, { controller: i, ...g.termsList }),
									  });
							if (o == 'terms.history')
								return _e?.length
									? (0, e.Y)(y.i, {
											controller: i,
											terms: i.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: i.config.settings?.history?.limit,
											...g.terms,
											title: 'History',
									  })
									: null;
							if (o == 'terms.trending')
								return de?.length
									? (0, e.Y)(y.i, {
											controller: i,
											terms: i.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: i.config.settings?.trending?.limit,
											...g.terms,
											title: 'Trending',
									  })
									: null;
							if (o == 'terms.suggestions')
								return xe?.length
									? (0, e.Y)(y.i, {
											controller: i,
											terms: i.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...g.terms,
											title: 'Suggestions',
									  })
									: null;
							if (o == 'facets')
								return ge.length
									? (0, e.FD)('div', {
											className: B()('ss__autocomplete__facets-wrapper'),
											children: [
												L || ve.facetsTitle.value
													? (0, e.Y)('div', {
															className: B()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, e.Y)('h5', { ...V.facetsTitle?.all }),
													  })
													: null,
												(0, e.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, e.Y)(k.J, { ...g.facets, facets: ge }),
														a ? null : (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (o == 'facetsHorizontal')
								return ge.length
									? (0, e.FD)(e.FK, {
											children: [
												L || ve.facetsTitle.value
													? (0, e.Y)('div', {
															className: B()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, e.Y)('h5', { ...V.facetsTitle?.all }),
													  })
													: null,
												(0, e.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, e.Y)(G.b, { ...g.facetsHorizontal, facets: ge }),
														a ? null : (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (o == 'content' && Te)
								return (0, e.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										te.length > 0 || be
											? (0, e.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														a ? null : (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.HEADER, name: 'header' }),
														a ? null : (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.BANNER, name: 'banner' }),
														te.length > 0
															? (0, e.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(d || ve.contentTitle.value) && te.length > 0
																			? (0, e.Y)('div', {
																					className: B()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, e.Y)('h5', { ...V.contentTitle?.all }),
																			  })
																			: null,
																		(0, e.Y)(X.n, { results: te, ...g.results, controller: i }),
																	],
															  })
															: be
															? (0, e.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...V.noResultsText?.all }),
																		pe && se?.store?.loaded
																			? (0, e.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, e.Y)(pe, {
																						controller: se,
																						title: se.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Oe,
																						name: 'noResultsRecommendations',
																						treePath: l.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														a ? null : (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (o == 'no-results' && Te)
								return (0, e.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										te.length == 0 && !Re
											? (0, e.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...V.noResultsText?.all }),
														pe && se?.store?.loaded
															? (0, e.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, e.Y)(pe, {
																		controller: se,
																		title: se.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Oe,
																		name: 'noResultsRecommendations',
																		treePath: l.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, e.Y)(e.FK, {}),
								});
							if (o == 'tabSelection') return Ee ? (0, e.Y)(ne.E, { ...g.tabSelection, tabManager: Ee }) : null;
							if (o == '_') return (0, e.Y)('div', { className: 'ss__autocomplete__separator' });
							if (o == 'banner.banner') return (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.BANNER, name: 'banner' });
							if (o == 'banner.footer') return (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.FOOTER, name: 'footer' });
							if (o == 'banner.header') return (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.HEADER, name: 'header' });
							if (o == 'banner.left') return (0, e.Y)(x.l, { ...g.banner, content: H.content, type: n.c.LEFT, name: 'left' });
							if (o == 'button.see-more' && Te && ue?.query?.string && te.length > 0)
								return (0, e.FD)(oe.$, {
									...g.button,
									...V.seeMoreButton.attributes,
									children: [(0, e.Y)('span', { ...V.seeMoreButton.value }), (0, e.Y)(Y.I, { ...g.icon })],
								});
						};
						return (
							typeof s.layout == 'string' &&
								(s.layout === 'terms' && (Q = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								s.layout === 'mobile' && (Q = [['termsList'], ['content'], ['_', 'button.see-more']]),
								s.layout === 'tablet' && (Q = [['c1', 'c3']]),
								s.layout === 'desktop' && (Q = [['c1', 'c2', 'c3']])),
							typeof Q == 'string' && (i.log.warn(`unsupported layout found. ${s.layout}`), (Q = [])),
							Ie && Q?.length
								? (0, e.Y)(h._, {
										children: (0, e.FD)('div', {
											...Se,
											className: B()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': s.layout === 'terms' },
												{ 'ss__autocomplete--mobile': s.layout === 'mobile' },
												{ 'ss__autocomplete--desktop': s.layout === 'desktop' },
												{ 'ss__autocomplete--tablet': s.layout === 'tablet' },
												Ce,
												Ne
											),
											onClick: (o) => o.stopPropagation(),
											ref: (o) => (0, O.iy)(o, 0, !1, ee),
											children: [
												(0, e.Y)('span', {
													role: 'link',
													ref: (o) => (0, O.iy)(o),
													onClick: () => s.onReset && s.onReset(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...V.closeButton?.all,
												}),
												Q?.map((o) => le(o)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(he, z, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					j = t('../../node_modules/mobx-react-lite/es/index.js'),
					U = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = t('../../node_modules/classnames/index.js'),
					R = t.n(p),
					B = t('./components/src/providers/cache.tsx'),
					N = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = t('./components/src/providers/treePath.tsx'),
					n = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Y = t('./components/src/utilities/defined.ts'),
					X = t('./components/src/utilities/mergeProps.ts'),
					x = t('./components/src/utilities/mergeStyles.ts'),
					k = t('./components/src/components/Molecules/Terms/Terms.tsx');
				const q = ({}) =>
						(0, U.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					P = (0, j.PA)((J) => {
						const v = (0, N.u)(),
							T = (0, b.LU)(),
							h = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: T,
							},
							r = (0, X.v6)('termsList', v, h, J),
							{
								layout: _,
								historyTitle: O,
								verticalOptions: I,
								trendingTitle: y,
								suggestionTitle: G,
								retainHistory: oe,
								retainTrending: ne,
								treePath: ae,
								disableStyles: ie,
								className: re,
								internalClassName: ce,
								controller: C,
							} = r,
							{ overrideElement: me, shouldRenderDefault: l } = (0, n._)('termsList', r);
						if (!l) return me;
						const E = { terms: { vertical: !!I, ...(0, Y.s)({ disableStyles: ie }), theme: r.theme, treePath: ae } },
							K = (0, x.Z)(r, q),
							s = C?.store.history || [],
							S = C?.store.terms || [],
							m = C?.store.trending || [],
							A = m?.filter((a) => a.active).pop(),
							f = s?.filter((a) => a.active).pop(),
							{ loaded: L, results: d, state: D } = C?.store;
						let M = !1;
						m?.length && ((ne && L) || (!d.length && !D.input)) && (M = !0);
						let F = !1;
						s?.length && ((oe && L) || (!d.length && !D.input)) && (F = !0),
							!C.store.state.input && (f || A) && (s?.length && (F = !0), m?.length && (M = !0));
						const $ = (a) => {
								if (typeof a != 'string') {
									const fe = a?.map((W) => $(W));
									return a?.some((W, Ce) => W !== '_' && fe[Ce]) ? (0, e.Y)('div', { className: 'ss__terms-list__row', children: fe }) : null;
								}
								if (a == '_') return (0, e.Y)('div', { className: 'ss__terms-list__separator' });
								if (a == 'History' && F)
									return (0, e.Y)(k.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: O,
										terms: s,
										controller: C,
										name: 'history',
										limit: C.config.settings?.history?.limit,
										...E.terms,
									});
								if (a == 'Trending' && M)
									return (0, e.Y)(k.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: y,
										terms: m,
										controller: C,
										name: 'trending',
										limit: C.config.settings?.trending?.limit,
										...E.terms,
									});
								if (a == 'Suggestions')
									return S.length
										? (0, e.Y)(k.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: G,
												terms: S,
												controller: C,
												name: 'suggestions',
												...E.terms,
										  })
										: null;
							},
							ee = _?.map((a) => $(a));
						return ee?.some(Boolean)
							? (0, e.Y)(B._, { children: (0, e.Y)('div', { ...K, className: R()('ss__terms-list', re, ce), children: ee }) })
							: null;
					});
				t.d(z, ['G', 0, P]);
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(he, z, t) {
				t.d(z, { x: () => U });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const j = '.ss__autocomplete__search-input input';
				function U({ input: p, controllers: R, renderInput: B, buttonSelector: N, renderedInputRef: b, setActive: n }) {
					const [Y, X] = (0, e.J0)(p),
						[x, k] = (0, e.J0)(!1),
						q = (0, e.li)(null),
						P = async (v) => {
							for (const T of v) T.config.selector.includes(j) || (T.config.selector = `${T.config.selector}, ${j}`), (q.current = T), await T.bind();
						},
						J = () => {
							n && n(!0),
								setTimeout(async () => {
									x || (X(b.current), await P(R), b?.current?.focus()), k(!0);
								});
						};
					return (
						(0, e.vJ)(() => {
							let v = !1;
							const T = () => {
								v = !1;
							};
							if (B && N) {
								let h;
								if ((typeof N == 'string' ? (h = document.querySelector(N)) : (h = N), h)) {
									const r = () => {
											v = !0;
										},
										_ = (y) => {
											(v = !1), y.stopPropagation(), J();
										},
										O = () => {
											v || J();
										},
										I = () => J();
									return (
										h.addEventListener('mousedown', r),
										document.addEventListener('mouseup', T, !0),
										h.addEventListener('click', _),
										h.addEventListener('focus', O),
										h.addEventListener('select', I),
										() => {
											h.removeEventListener('mousedown', r),
												document.removeEventListener('mouseup', T, !0),
												h.removeEventListener('click', _),
												h.removeEventListener('focus', O),
												h.removeEventListener('select', I);
										}
									);
								}
							} else if (n) {
								const h = () => {
										v = !0;
									},
									r = (I) => {
										(v = !1), I.stopPropagation(), n(!0);
									},
									_ = () => {
										v || n(!0);
									},
									O = () => n(!0);
								return (
									p.addEventListener('mousedown', h),
									document.addEventListener('mouseup', T, !0),
									p.addEventListener('click', r),
									p.addEventListener('focus', _),
									p.addEventListener('select', O),
									() => {
										p.removeEventListener('mousedown', h),
											document.removeEventListener('mouseup', T, !0),
											p.removeEventListener('click', r),
											p.removeEventListener('focus', _),
											p.removeEventListener('select', O);
									}
								);
							}
						}, []),
						(0, e.vJ)(() => {
							if (p !== Y && Y) {
								const v = () => {
									p.value = Y.value;
								};
								return (
									Y.addEventListener('input', v),
									() => {
										Y.removeEventListener('input', v);
									}
								);
							}
						}, [Y]),
						Y
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(he, z, t) {
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const j = (U, p, R) => {
					const [B, N] = (0, e.J0)(void 0);
					return (
						(0, e.vJ)(() => {
							U.getController(R.id)
								.then((b) => {
									N(b);
								})
								.catch(async () => {
									let b = R;
									if (p === 'recommendation' && !R.plugins && !R.middleware)
										try {
											const n = await U.getInstantiator('recommendation');
											b = { ...R, plugins: n.config.config.plugins, middleware: n.config.config.middleware };
										} catch {}
									try {
										const n = await U.createController(p, b);
										N(n);
									} catch (n) {
										console.error(`useCreateController: failed to create controller "${R.id}"`, n);
									}
								});
						}, []),
						B
					);
				};
				t.d(z, ['i', 0, j]);
			},
		},
	]);
})();
