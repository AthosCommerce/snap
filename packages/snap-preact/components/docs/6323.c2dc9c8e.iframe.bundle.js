'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6323],
		{
			'./components/src/components/Molecules/Terms/Terms.tsx'(ge, k, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					j = t('../../node_modules/mobx-react-lite/es/index.js'),
					U = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = t('../../node_modules/classnames/index.js'),
					D = t.n(d),
					A = t('./components/src/providers/cache.tsx'),
					Y = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = t('./components/src/providers/treePath.tsx'),
					n = t('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					I = t('./components/src/utilities/mergeProps.ts'),
					q = t('./components/src/utilities/mergeStyles.ts'),
					x = t('./components/src/hooks/useLang.tsx'),
					J = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					ee = t('../../node_modules/deepmerge/dist/cjs.js'),
					P = t.n(ee);
				const G = ({ vertical: r, theme: u }) =>
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
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: u?.variables?.colors?.primary } },
								},
							},
						}),
					g = (r) => r?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					T = (r, u) => {
						if (r && u) {
							const O = r.match(g(u));
							if (u && r && O && typeof O.index == 'number') {
								const w = r.slice(0, O.index),
									y = r.slice(O.index + u.length, r.length);
								return `${w ? `<em>${w}</em>` : ''}${u}${y ? `<em>${y}</em>` : ''}`;
							}
						}
						return `<em>${r}</em>`;
					},
					p = (0, j.PA)((r) => {
						const u = (0, Y.u)(),
							w = { vertical: !0, previewOnHover: !0, treePath: (0, b.LU)() },
							y = (0, I.v6)('terms', u, w, r),
							{ title: Z, onTermClick: re, limit: le, previewOnHover: ce, emIfy: me, className: ae, internalClassName: ue, controller: C } = y,
							_e = C?.store?.state?.input,
							l = y.terms,
							{ overrideElement: E, shouldRenderDefault: $ } = (0, J._)('terms', y);
						if (!$) return E;
						const s = (0, q.Z)(y, G),
							S = (m, L) => {
								re && re(m, L), C?.setFocused && C?.setFocused();
							},
							c = le ? l?.slice(0, le) : l,
							N = { title: { value: Z } },
							h = P()(N, y.lang || {}),
							R = (0, x.u)({ title: h.title }, { controller: C }, { activeBreakpoint: u?.activeBreakpoint });
						return c?.length
							? (0, e.Y)(A._, {
									children: (0, e.FD)('div', {
										...s,
										className: D()('ss__terms', ae, ue),
										children: [
											Z ? (0, e.Y)('div', { className: 'ss__terms__title', children: (0, e.Y)('h5', { ...R.title.all }) }) : null,
											(0, e.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': Z,
												children: c?.map((m, L) => {
													const M = {
															term: {
																value: `${me ? T(m.value, _e || '') : m.value}`,
																attributes: { 'aria-label': `${Z || ''} item ${L + 1} of ${c.length}, ${m.value}` },
															},
														},
														F = P()(M, y.lang || {}),
														H = (0, x.u)({ term: F.term }, { index: L, numberOfTerms: c.length, term: m }, { activeBreakpoint: u?.activeBreakpoint });
													return (0, e.Y)('li', {
														className: D()('ss__terms__option', { 'ss__terms__option--active': m.active }),
														children: (0, e.Y)('a', {
															onClick: (te) => S(te, m),
															href: m.url.href,
															...(ce ? (0, n.l)(m.preview) : {}),
															...H.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				t.d(k, ['i', 0, p]);
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(ge, k, t) {
				t.d(k, { h: () => _e });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					j = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					U = t('../../node_modules/mobx-react-lite/es/index.js'),
					d = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = t('../../node_modules/classnames/index.js'),
					A = t.n(D),
					Y = t('../../node_modules/deepmerge/dist/cjs.js'),
					b = t.n(Y),
					n = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					I = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					q = t('./components/src/components/Organisms/Results/Results.tsx'),
					x = t('./components/src/components/Atoms/Banner/Banner.tsx'),
					J = t('./components/src/components/Organisms/Facets/Facets.tsx'),
					ee = t('./components/src/utilities/mergeProps.ts'),
					P = t('./components/src/utilities/defined.ts'),
					G = t('./components/src/utilities/mergeStyles.ts'),
					g = t('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					T = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = t('./components/src/providers/cache.tsx'),
					r = t('./components/src/types.ts'),
					u = t('./components/src/hooks/useLang.tsx'),
					O = t('./components/src/hooks/useA11y.tsx'),
					w = t('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					y = t('./components/src/components/Molecules/Terms/Terms.tsx'),
					Z = t('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					re = t('./components/src/components/Atoms/Button/Button.tsx'),
					le = t('./components/src/components/Molecules/TabSelection/TabSelection.tsx'),
					ce = t('./components/src/providers/snap.tsx'),
					me = t('./components/src/hooks/useCreateController.tsx'),
					ae = t('./components/src/hooks/useComponent.tsx');
				function ue(l) {
					let E, $, s;
					const S = (0, ce.uk)(),
						c = !!l?.recommendation?.enabled,
						N = c ? l?.recommendation?.component || 'RecommendationGrid' : void 0,
						h = c ? l?.recommendation?.resultComponent || 'Result' : void 0,
						R = S?.templates?.library.import.component.recommendation.default || {},
						m = S?.templates?.library.import.component.result || {},
						{ ComponentOverride: L, shouldWaitForNamedOverride: M } = (0, ae.x)(R, N),
						{ ComponentOverride: F, shouldWaitForNamedOverride: H } = (0, ae.x)(m, h);
					if (c && ((E = M ? void 0 : L), ($ = H ? void 0 : F), S?.templates)) {
						const a = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, l.recommendation.config);
						(a.id = a.id || `search-${a.tag}`),
							(s = (0, me.i)(S, 'recommendation', a)),
							!s?.store?.loaded && !s?.store?.loading && s?.store.error?.type !== 'error' && s?.search();
					}
					return { RecommendationTemplateComponent: E, RecommendationTemplateResultComponent: $, recsController: s };
				}
				const C = ({ controller: l, input: E, viewportMaxHeight: $, width: s, theme: S, column1: c, column2: N, column3: h, column4: R }) => {
						let m = 0;
						if (E) {
							let M;
							typeof E == 'string' ? (M = document.querySelector(E)) : (M = E), (m = M?.getBoundingClientRect()?.bottom || 0);
						}
						const L = !!(l.store.search?.query?.string && l.store.results.length === 0);
						return (0, d.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: c?.width == 'auto' ? '1 1 0' : `1 0 ${c?.width}`,
								maxWidth: c?.width == 'auto' ? 'none' : c?.width,
								alignContent: c?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: N?.width == 'auto' ? '1 1 0' : `1 0 ${N?.width}`,
								maxWidth: N?.width == 'auto' ? 'none' : N?.width,
								alignContent: N?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: h?.width == 'auto' ? '1 1 0' : `1 0 ${h?.width}`,
								maxWidth: h?.width == 'auto' ? 'none' : h?.width,
								alignContent: h?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: R?.width == 'auto' ? '1 1 0' : `1 0 ${R?.width}`,
								maxWidth: R?.width == 'auto' ? 'none' : R?.width,
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
							maxWidth: s,
							maxHeight: $ && m ? `calc(100vh - ${m + 10}px)` : void 0,
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
								margin: L ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner': { 'iframe, img': { maxWidth: '100%', height: 'auto' } },
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: L ? 'center' : 'right',
								a: { fontWeight: 'bold', color: S?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					_e = (0, U.PA)((l) => {
						const E = (0, T.u)(),
							$ = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['tabSelection'], ['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let s = (0, ee.v6)('autocompleteLayout', E, $, l);
						delete s.treePath, s.layout == 'terms' && (s.templates = { recommendation: { enabled: !1 } });
						const S = (0, g.l)(),
							c = () => {
								i?.setFocused && i?.setFocused();
							},
							N = {
								components: {
									facet: { valueProps: S },
									facetGridOptions: { onClick: c },
									facetHierarchyOptions: { onClick: c },
									facetListOptions: { onClick: c },
									facetPaletteOptions: { onClick: c },
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
								X = b().all([o, N, s?.theme || {}], { arrayMerge: (B, v) => v });
							s = { ...s, theme: X };
						} else s.theme = b().all([N, s?.theme || {}], { arrayMerge: (o, X) => X });
						let h = s.input;
						h && typeof h == 'string' && (h = document.querySelector(h));
						const {
							facetsTitle: R,
							contentTitle: m,
							column1: L,
							column2: M,
							column3: F,
							column4: H,
							onReset: te,
							excludeBanners: a,
							resultComponent: ve,
							templates: Ee,
							disableStyles: W,
							className: xe,
							internalClassName: Ie,
							controller: i,
							tabManager: Pe,
						} = s;
						let Q = s.layout;
						const f = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										i?.setFocused && i.setFocused(), (window.location.href = Oe.url.href);
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
									resultComponent: ve,
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
								tabSelection: { tabManager: Pe, ...(0, P.s)({ disableStyles: W }), theme: s.theme, treePath: l.treePath },
							},
							{
								search: de,
								terms: Te,
								trending: pe,
								results: se,
								merchandising: z,
								pagination: De,
								filters: we,
								facets: be,
								state: Oe,
								loading: Me,
								loaded: Be,
							} = i.store,
							he = i.store.history || [];
						i &&
							typeof h == 'string' &&
							((h = document.querySelector(h)),
							(0, j.vJ)(() => {
								i.bind();
							}, []));
						const Se = h === Oe.focusedInput && (Te.length > 0 || pe?.length > 0 || he?.length > 0 || (Oe.input && i.store.loaded)),
							Ae = () => !!(se.length > 0 || Object.keys(z.content).length > 0 || de?.query?.string || Me),
							[Re, Ne] = (0, j.J0)(Ae()),
							Ye = () => {
								const o = pe?.filter((B) => B.active).pop(),
									X = he?.filter((B) => B.active).pop();
								o || X || Ae() ? Ne(!0) : Ne(!1);
							};
						(0, j.vJ)(() => {
							Ye();
						}, [pe, he]);
						const ye = be.length ? be.filter((o) => o.display !== r.Q.SLIDER) : [];
						Ye();
						const We = (0, G.Z)(s, C),
							je = {
								contentTitle: { value: m },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: R },
								noResultsText: {
									value: `<p>No results found for "${de.originalQuery?.string || de.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${De.totalResults} ${we.length > 0 ? 'filtered' : ''} result${De.totalResults == 1 ? '' : 's'} for "${
										de.query?.string
									}"`,
								},
							},
							Ce = b()(je, s.lang || {}),
							V = (0, u.u)(Ce, { controller: i }, { activeBreakpoint: E?.activeBreakpoint });
						let oe, fe, Le;
						const Fe = !!(i.store.search?.query?.string && i.store.results.length === 0);
						if (Ee?.recommendation?.enabled && Fe) {
							const o = ue(Ee);
							(fe = o.RecommendationTemplateComponent), (Le = o.RecommendationTemplateResultComponent), (oe = o.recsController);
						}
						const ie = (o, X) => {
							if (typeof o != 'string') {
								const B = o?.map((ne) => ie(ne, X));
								return o.some((ne, _) => ne !== '_' && B[_])
									? (0, e.Y)('div', { className: `ss__autocomplete__row ss__autocomplete__row--${X.value++}`, children: B })
									: null;
							}
							if (o == 'c1' && L?.layout?.length) {
								const B = { value: 0 },
									v = L.layout.map((_) => ie(_, B));
								return L.layout.some((_, K) => (Array.isArray(_) || _ !== '_') && !!v[K])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: v })
									: null;
							}
							if (o == 'c2' && M?.layout?.length) {
								const B = { value: 0 },
									v = M.layout.map((_) => ie(_, B));
								return M.layout.some((_, K) => (Array.isArray(_) || _ !== '_') && !!v[K])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: v })
									: null;
							}
							if (o == 'c3' && F?.layout?.length) {
								const B = { value: 0 },
									v = F.layout.map((_) => ie(_, B));
								return F.layout.some((_, K) => (Array.isArray(_) || _ !== '_') && !!v[K])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: v })
									: null;
							}
							if (o == 'c4' && H?.layout?.length) {
								const B = { value: 0 },
									v = H.layout.map((_) => ie(_, B));
								return H.layout.some((_, K) => (Array.isArray(_) || _ !== '_') && !!v[K])
									? (0, e.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: v })
									: null;
							}
							if (o == 'termsList')
								return !Te?.length && !he?.length && !pe?.length
									? null
									: (0, e.Y)('div', {
											className: A()('ss__autocomplete__terms-wrapper'),
											children: (0, e.Y)(w.G, { controller: i, ...f.termsList }),
									  });
							if (o == 'terms.history')
								return he?.length
									? (0, e.Y)(y.i, {
											controller: i,
											terms: i.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: i.config.settings?.history?.limit,
											...f.terms,
											title: 'History',
									  })
									: null;
							if (o == 'terms.trending')
								return pe?.length
									? (0, e.Y)(y.i, {
											controller: i,
											terms: i.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: i.config.settings?.trending?.limit,
											...f.terms,
											title: 'Trending',
									  })
									: null;
							if (o == 'terms.suggestions')
								return Te?.length
									? (0, e.Y)(y.i, {
											controller: i,
											terms: i.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...f.terms,
											title: 'Suggestions',
									  })
									: null;
							if (o == 'facets')
								return ye.length
									? (0, e.FD)('div', {
											className: A()('ss__autocomplete__facets-wrapper'),
											children: [
												R || Ce.facetsTitle.value
													? (0, e.Y)('div', {
															className: A()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, e.Y)('h5', { ...V.facetsTitle?.all }),
													  })
													: null,
												(0, e.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, e.Y)(J.J, { ...f.facets, facets: ye }),
														a ? null : (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (o == 'facetsHorizontal')
								return ye.length
									? (0, e.FD)(e.FK, {
											children: [
												R || Ce.facetsTitle.value
													? (0, e.Y)('div', {
															className: A()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, e.Y)('h5', { ...V.facetsTitle?.all }),
													  })
													: null,
												(0, e.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, e.Y)(Z.b, { ...f.facetsHorizontal, facets: ye }),
														a ? null : (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (o == 'content' && Re)
								return (0, e.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										se.length > 0 || Be
											? (0, e.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														a ? null : (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.HEADER, name: 'header' }),
														a ? null : (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.BANNER, name: 'banner' }),
														se.length > 0
															? (0, e.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(m || Ce.contentTitle.value) && se.length > 0
																			? (0, e.Y)('div', {
																					className: A()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, e.Y)('h5', { ...V.contentTitle?.all }),
																			  })
																			: null,
																		(0, e.Y)(q.n, { results: se, ...f.results, controller: i }),
																	],
															  })
															: Be
															? (0, e.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...V.noResultsText?.all }),
																		fe && oe?.store?.loaded
																			? (0, e.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, e.Y)(fe, {
																						controller: oe,
																						title: oe.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Le,
																						name: 'noResultsRecommendations',
																						treePath: l.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														a ? null : (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (o == 'no-results' && Re)
								return (0, e.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										se.length == 0 && !Me
											? (0, e.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...V.noResultsText?.all }),
														fe && oe?.store?.loaded
															? (0, e.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, e.Y)(fe, {
																		controller: oe,
																		title: oe.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Le,
																		name: 'noResultsRecommendations',
																		treePath: l.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, e.Y)(e.FK, {}),
								});
							if (o == 'tabSelection') return Pe ? (0, e.Y)(le.E, { ...f.tabSelection, tabManager: Pe }) : null;
							if (o == '_') return (0, e.Y)('div', { className: 'ss__autocomplete__separator' });
							if (o == 'banner.banner') return (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.BANNER, name: 'banner' });
							if (o == 'banner.footer') return (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.FOOTER, name: 'footer' });
							if (o == 'banner.header') return (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.HEADER, name: 'header' });
							if (o == 'banner.left') return (0, e.Y)(x.l, { ...f.banner, content: z.content, type: n.c.LEFT, name: 'left' });
							if (o == 'button.see-more' && Re && de?.query?.string && se.length > 0)
								return (0, e.FD)(re.$, {
									...f.button,
									...V.seeMoreButton.attributes,
									children: [(0, e.Y)('span', { ...V.seeMoreButton.value }), (0, e.Y)(I.I, { ...f.icon })],
								});
						};
						typeof s.layout == 'string' &&
							(s.layout === 'terms' && (Q = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
							s.layout === 'mobile' && (Q = [['termsList'], ['content'], ['_', 'button.see-more']]),
							s.layout === 'tablet' && (Q = [['c1', 'c3']]),
							s.layout === 'desktop' && (Q = [['c1', 'c2', 'c3']])),
							typeof Q == 'string' && (i.log.warn(`unsupported layout found. ${s.layout}`), (Q = []));
						const Ue = { value: 0 };
						return Se && Q?.length
							? (0, e.Y)(p._, {
									children: (0, e.FD)('div', {
										...We,
										className: A()(
											'ss__autocomplete',
											{ 'ss__autocomplete--terms': s.layout === 'terms' },
											{ 'ss__autocomplete--mobile': s.layout === 'mobile' },
											{ 'ss__autocomplete--desktop': s.layout === 'desktop' },
											{ 'ss__autocomplete--tablet': s.layout === 'tablet' },
											xe,
											Ie
										),
										onClick: (o) => o.stopPropagation(),
										ref: (o) => (0, O.iy)(o, 0, !1, te),
										children: [
											(0, e.Y)('span', {
												role: 'link',
												ref: (o) => (0, O.iy)(o),
												onClick: () => s.onReset && s.onReset(),
												className: 'ss__autocomplete__close-button',
												style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
												...V.closeButton?.all,
											}),
											Q?.map((o) => ie(o, Ue)),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(ge, k, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					j = t('../../node_modules/mobx-react-lite/es/index.js'),
					U = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = t('../../node_modules/classnames/index.js'),
					D = t.n(d),
					A = t('./components/src/providers/cache.tsx'),
					Y = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = t('./components/src/providers/treePath.tsx'),
					n = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					I = t('./components/src/utilities/defined.ts'),
					q = t('./components/src/utilities/mergeProps.ts'),
					x = t('./components/src/utilities/mergeStyles.ts'),
					J = t('./components/src/components/Molecules/Terms/Terms.tsx');
				const ee = ({}) =>
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
					P = (0, j.PA)((G) => {
						const g = (0, Y.u)(),
							T = (0, b.LU)(),
							p = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: T,
							},
							r = (0, q.v6)('termsList', g, p, G),
							{
								layout: u,
								historyTitle: O,
								verticalOptions: w,
								trendingTitle: y,
								suggestionTitle: Z,
								retainHistory: re,
								retainTrending: le,
								treePath: ce,
								disableStyles: me,
								className: ae,
								internalClassName: ue,
								controller: C,
							} = r,
							{ overrideElement: _e, shouldRenderDefault: l } = (0, n._)('termsList', r);
						if (!l) return _e;
						const E = { terms: { vertical: !!w, ...(0, I.s)({ disableStyles: me }), theme: r.theme, treePath: ce } },
							$ = (0, x.Z)(r, ee),
							s = C?.store.history || [],
							S = C?.store.terms || [],
							c = C?.store.trending || [],
							N = c?.filter((a) => a.active).pop(),
							h = s?.filter((a) => a.active).pop(),
							{ loaded: R, results: m, state: L } = C?.store;
						let M = !1;
						c?.length && ((le && R) || (!m.length && !L.input)) && (M = !0);
						let F = !1;
						s?.length && ((re && R) || (!m.length && !L.input)) && (F = !0),
							!C.store.state.input && (h || N) && (s?.length && (F = !0), c?.length && (M = !0));
						const H = (a) => {
								if (typeof a != 'string') {
									const ve = a?.map((W) => H(W));
									return a?.some((W, xe) => W !== '_' && ve[xe]) ? (0, e.Y)('div', { className: 'ss__terms-list__row', children: ve }) : null;
								}
								if (a == '_') return (0, e.Y)('div', { className: 'ss__terms-list__separator' });
								if (a == 'History' && F)
									return (0, e.Y)(J.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: O,
										terms: s,
										controller: C,
										name: 'history',
										limit: C.config.settings?.history?.limit,
										...E.terms,
									});
								if (a == 'Trending' && M)
									return (0, e.Y)(J.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: y,
										terms: c,
										controller: C,
										name: 'trending',
										limit: C.config.settings?.trending?.limit,
										...E.terms,
									});
								if (a == 'Suggestions')
									return S.length
										? (0, e.Y)(J.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: Z,
												terms: S,
												controller: C,
												name: 'suggestions',
												...E.terms,
										  })
										: null;
							},
							te = u?.map((a) => H(a));
						return te?.some(Boolean)
							? (0, e.Y)(A._, { children: (0, e.Y)('div', { ...$, className: D()('ss__terms-list', ae, ue), children: te }) })
							: null;
					});
				t.d(k, ['G', 0, P]);
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(ge, k, t) {
				t.d(k, { x: () => U });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const j = '.ss__autocomplete__search-input input';
				function U({ input: d, controllers: D, renderInput: A, buttonSelector: Y, renderedInputRef: b, setActive: n }) {
					const [I, q] = (0, e.J0)(d),
						[x, J] = (0, e.J0)(!1),
						ee = (0, e.li)(null),
						P = async (g) => {
							for (const T of g)
								T.config.selector.includes(j) || (T.config.selector = `${T.config.selector}, ${j}`), (ee.current = T), await T.bind();
						},
						G = () => {
							n && n(!0),
								setTimeout(async () => {
									x || (q(b.current), await P(D), b?.current?.focus()), J(!0);
								});
						};
					return (
						(0, e.vJ)(() => {
							let g = !1;
							const T = () => {
								g = !1;
							};
							if (A && Y) {
								let p;
								if ((typeof Y == 'string' ? (p = document.querySelector(Y)) : (p = Y), p)) {
									const r = () => {
											g = !0;
										},
										u = (y) => {
											(g = !1), y.stopPropagation(), G();
										},
										O = () => {
											g || G();
										},
										w = () => G();
									return (
										p.addEventListener('mousedown', r),
										document.addEventListener('mouseup', T, !0),
										p.addEventListener('click', u),
										p.addEventListener('focus', O),
										p.addEventListener('select', w),
										() => {
											p.removeEventListener('mousedown', r),
												document.removeEventListener('mouseup', T, !0),
												p.removeEventListener('click', u),
												p.removeEventListener('focus', O),
												p.removeEventListener('select', w);
										}
									);
								}
							} else if (n) {
								const p = () => {
										g = !0;
									},
									r = (w) => {
										(g = !1), w.stopPropagation(), n(!0);
									},
									u = () => {
										g || n(!0);
									},
									O = () => n(!0);
								return (
									d.addEventListener('mousedown', p),
									document.addEventListener('mouseup', T, !0),
									d.addEventListener('click', r),
									d.addEventListener('focus', u),
									d.addEventListener('select', O),
									() => {
										d.removeEventListener('mousedown', p),
											document.removeEventListener('mouseup', T, !0),
											d.removeEventListener('click', r),
											d.removeEventListener('focus', u),
											d.removeEventListener('select', O);
									}
								);
							}
						}, []),
						(0, e.vJ)(() => {
							if (d !== I && I) {
								const g = () => {
									d.value = I.value;
								};
								return (
									I.addEventListener('input', g),
									() => {
										I.removeEventListener('input', g);
									}
								);
							}
						}, [I]),
						I
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(ge, k, t) {
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const j = (U, d, D) => {
					const [A, Y] = (0, e.J0)(void 0);
					return (
						(0, e.vJ)(() => {
							U.getController(D.id)
								.then((b) => {
									Y(b);
								})
								.catch(async () => {
									let b = D;
									if (d === 'recommendation' && !D.plugins && !D.middleware)
										try {
											const n = await U.getInstantiator('recommendation');
											b = { ...D, plugins: n.config.config.plugins, middleware: n.config.config.middleware };
										} catch {}
									try {
										const n = await U.createController(d, b);
										Y(n);
									} catch (n) {
										console.error(`useCreateController: failed to create controller "${D.id}"`, n);
									}
								});
						}, []),
						A
					);
				};
				t.d(k, ['i', 0, j]);
			},
		},
	]);
})();
