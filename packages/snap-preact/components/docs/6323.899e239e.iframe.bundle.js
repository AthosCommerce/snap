'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6323],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ie, H, e) {
				e.d(H, { _: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					U = e.n(m),
					K = e('./components/src/providers/cache.tsx'),
					y = e('./components/src/providers/controller.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/withTracking.tsx'),
					c = e('./components/src/providers/snap.tsx'),
					V = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/hooks/useA11y.tsx'),
					E = e('./components/src/types.ts'),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/hooks/useComponent.tsx');
				const j = ({ width: D }) =>
						(0, L.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: D,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					M = (0, y.Bk)(
						(0, v.W)(
							(0, C.PA)((D) => {
								const $ = (0, N.u)(),
									p = (0, c.uk)(),
									h = (0, V.LU)(),
									b = { layout: E.V.grid, width: 'auto', treePath: h },
									S = (0, w.v6)('inlineBanner', $, b, D),
									{ banner: F, className: B, internalClassName: _, disableA11y: A, layout: k, onClick: ee, customComponent: te } = S;
								if (te) {
									const s = (0, a.x)(p?.templates?.library.import.component.inlineBanner || {}, te);
									if (s) return (0, t.Y)(s, { ...S });
								}
								const oe = (0, x.Z)(S, j);
								return F && F.value
									? (0, t.Y)(K._, {
											children: (0, t.Y)('div', {
												onClick: (s) => {
													ee && ee(s, F);
												},
												role: 'article',
												ref: (s) => {
													A || (0, Y.iy)(s), D.trackingRef(s);
												},
												className: U()('ss__inline-banner', `ss__inline-banner--${k}`, B, _),
												...oe,
												dangerouslySetInnerHTML: { __html: F.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(ie, H, e) {
				e.d(H, { i: () => $ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					K = e.n(U),
					y = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/snap.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					V = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					w = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useComponent.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(C);
				const j = ({ vertical: p, theme: h }) =>
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
								flexDirection: p ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: h?.variables?.colors?.primary } },
								},
							},
						}),
					M = (p) => p?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					D = (p, h) => {
						if (p && h) {
							const b = p.match(M(h));
							if (h && p && b && typeof b.index == 'number') {
								const S = p.slice(0, b.index),
									F = p.slice(b.index + h.length, p.length);
								return `${S ? `<em>${S}</em>` : ''}${h}${F ? `<em>${F}</em>` : ''}`;
							}
						}
						return `<em>${p}</em>`;
					},
					$ = (0, L.PA)((p) => {
						const h = (0, N.u)(),
							b = (0, v.uk)(),
							F = { vertical: !0, previewOnHover: !0, treePath: (0, c.LU)() },
							B = (0, w.v6)('terms', h, F, p),
							{
								title: _,
								onTermClick: A,
								limit: k,
								previewOnHover: ee,
								emIfy: te,
								className: oe,
								internalClassName: s,
								controller: r,
								customComponent: z,
							} = B,
							o = r?.store?.state?.input,
							Q = B.terms;
						if (z) {
							const i = (0, E.x)(b?.templates?.library.import.component.terms || {}, z);
							if (i) return (0, t.Y)(i, { ...B });
						}
						const O = (0, x.Z)(B, j),
							u = (i, G) => {
								A && A(i, G), r?.setFocused && r?.setFocused();
							},
							l = k ? Q?.slice(0, k) : Q,
							T = { title: { value: _ } },
							I = a()(T, B.lang || {}),
							J = (0, Y.u)({ title: I.title }, { controller: r });
						return l?.length
							? (0, t.Y)(y._, {
									children: (0, t.FD)('div', {
										...O,
										className: K()('ss__terms', oe, s),
										children: [
											_ ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...J.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': _,
												children: l?.map((i, G) => {
													const g = {
															term: {
																value: `${te ? D(i.value, o || '') : i.value}`,
																attributes: { 'aria-label': `${_ || ''} item ${G + 1} of ${l.length}, ${i.value}` },
															},
														},
														ne = a()(g, B.lang || {}),
														X = (0, Y.u)({ term: ne.term }, { index: G, numberOfTerms: l.length, term: i });
													return (0, t.Y)('li', {
														className: K()('ss__terms__option', { 'ss__terms__option--active': i.active }),
														children: (0, t.Y)('a', {
															onClick: (le) => u(le, i),
															href: i.url.href,
															...(ee ? (0, V.l)(i.preview) : {}),
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
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(ie, H, e) {
				e.d(H, { h: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					K = e('../../node_modules/classnames/index.js'),
					y = e.n(K),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(N),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					V = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					w = e('./components/src/components/Organisms/Results/Results.tsx'),
					x = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					Y = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/cache.tsx'),
					$ = e('./components/src/types.ts'),
					p = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useA11y.tsx'),
					b = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					S = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					F = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					B = e('./components/src/components/Atoms/Button/Button.tsx'),
					_ = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/hooks/useCreateController.tsx'),
					k = e('./components/src/hooks/useComponent.tsx');
				function ee(s) {
					let r, z, o;
					if (s?.recommendation?.enabled) {
						const O = s?.recommendation?.component || 'RecommendationGrid',
							u = (0, _.uk)();
						if (u?.templates) {
							const T = s?.recommendation?.resultComponent || 'Result',
								I = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, s.recommendation.config);
							(I.id = I.id || `search-${I.tag}`),
								(o = (0, A.i)(u, 'recommendation', I)),
								!o?.store?.loaded && !o?.store?.loading && o?.store.error?.type !== 'error' && o?.search(),
								T && u?.templates?.library.import.component.result && (z = (0, k.x)(u?.templates?.library.import.component.result, T)),
								O &&
									u?.templates?.library.import.component.recommendation.default &&
									(r = (0, k.x)(u?.templates?.library.import.component.recommendation.default, O));
						}
					}
					return { RecommendationTemplateComponent: r, RecommendationTemplateResultComponent: z, recsController: o };
				}
				const te = ({ controller: s, input: r, viewportMaxHeight: z, width: o, theme: Q, column1: O, column2: u, column3: l, column4: T }) => {
						let I = 0;
						if (r) {
							let i;
							typeof r == 'string' ? (i = document.querySelector(r)) : (i = r), (I = i?.getBoundingClientRect()?.bottom || 0);
						}
						const J = !!(s.store.search?.query?.string && s.store.results.length === 0);
						return (0, U.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: O?.width == 'auto' ? '1 1 auto' : `1 0 ${O?.width}`,
								maxWidth: O?.width == 'auto' ? 'auto' : O?.width,
								alignContent: O?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: u?.width == 'auto' ? '1 1 auto' : `1 0 ${u?.width}`,
								maxWidth: u?.width == 'auto' ? 'auto' : u?.width,
								alignContent: u?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: l?.width == 'auto' ? '1 1 auto' : `1 0 ${l?.width}`,
								maxWidth: l?.width == 'auto' ? 'auto' : l?.width,
								alignContent: l?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: T?.width == 'auto' ? '1 1 auto' : `1 0 ${T?.width}`,
								maxWidth: T?.width == 'auto' ? 'auto' : T?.width,
								alignContent: T?.alignContent,
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
							maxWidth: o,
							maxHeight: z && I ? `calc(100vh - ${I + 10}px)` : void 0,
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
					oe = (0, m.PA)((s) => {
						const r = (0, M.u)(),
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
						let o = (0, E.v6)('autocompleteLayout', r, z, s);
						delete o.treePath, o.layout == 'terms' && (o.templates = { recommendation: { enabled: !1 } });
						const Q = (0, j.l)(),
							O = () => {
								d?.setFocused && d?.setFocused();
							},
							u = {
								components: {
									facet: { valueProps: Q },
									facetGridOptions: { onClick: O },
									facetHierarchyOptions: { onClick: O },
									facetListOptions: { onClick: O },
									facetPaletteOptions: { onClick: O },
								},
							};
						if (r?.type !== 'templates') {
							const n = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								P = v().all([n, u, o?.theme || {}], { arrayMerge: (re, f) => f });
							o = { ...o, theme: P };
						} else o.theme = v().all([u, o?.theme || {}], { arrayMerge: (n, P) => P });
						let l = o.input;
						l && typeof l == 'string' && (l = document.querySelector(l));
						const {
							facetsTitle: T,
							contentTitle: I,
							column1: J,
							column2: i,
							column3: G,
							column4: g,
							onReset: ne,
							excludeBanners: X,
							resultComponent: le,
							templates: R,
							disableStyles: q,
							className: xe,
							internalClassName: ue,
							controller: d,
						} = o;
						let de = o.layout;
						const W = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										d?.setFocused && d.setFocused(), (window.location.href = ye.url.href);
									},
									name: 'see-more',
									...(0, C.s)({ disableStyles: q }),
									theme: o.theme,
									treePath: s.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(o.layout == 'terms' || o.layout == 'mini'),
									controller: d,
									...(0, C.s)({ disableStyles: q }),
									theme: o.theme,
									treePath: s.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(o.layout == 'terms' || o.layout == 'mini'),
									controller: d,
									...(0, C.s)({ disableStyles: q }),
									theme: o.theme,
									treePath: s.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, C.s)({ disableStyles: q }), theme: o.theme, treePath: s.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, C.s)({ disableStyles: q }), theme: o.theme, treePath: s.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, C.s)({ disableStyles: q }), theme: o.theme, treePath: s.treePath },
								results: {
									columns: 3,
									rows: 2,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: le,
									...(0, C.s)({ disableStyles: q }),
									theme: o.theme,
									treePath: s.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, C.s)({ disableStyles: q }),
									theme: o.theme,
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
								loaded: Re,
							} = d.store,
							fe = d.store.history || [];
						d &&
							typeof l == 'string' &&
							((l = document.querySelector(l)),
							(0, L.vJ)(() => {
								d.bind();
							}, []));
						const We = l === ye.focusedInput && (Pe.length > 0 || he?.length > 0 || fe?.length > 0 || (ye.input && d.store.loaded)),
							Le = () => !!(ce.length > 0 || Object.keys(se.content).length > 0 || pe?.query?.string || Te),
							[Ce, Be] = (0, L.J0)(Le()),
							Ae = () => {
								const n = he?.filter((re) => re.active).pop(),
									P = fe?.filter((re) => re.active).pop();
								n || P || Le() ? Be(!0) : Be(!1);
							};
						(0, L.vJ)(() => {
							Ae();
						}, [he, fe]);
						const Ee = Me.length ? Me.filter((n) => n.display !== $.Q.SLIDER) : [];
						Ae();
						const Ue = (0, a.Z)(o, te),
							Ke = {
								contentTitle: { value: I },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: T },
								noResultsText: {
									value: `<p>No results found for "${pe.originalQuery?.string || pe.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${De.totalResults} ${Ie.length > 0 ? 'filtered' : ''} result${De.totalResults == 1 ? '' : 's'} for "${
										pe.query?.string
									}"`,
								},
							},
							ge = v()(Ke, o.lang || {}),
							ae = (0, p.u)(ge, { controller: d });
						let me, ve, Oe;
						const Ne = !!(d.store.search?.query?.string && d.store.results.length === 0);
						if (R?.recommendation?.enabled && Ne) {
							const n = ee(R);
							(ve = n.RecommendationTemplateComponent), (Oe = n.RecommendationTemplateResultComponent), (me = n.recsController);
						}
						const _e = (n) => {
							if (typeof n != 'string') {
								const P = n?.map((f) => _e(f));
								return n.some((f, Z) => f !== '_' && P[Z]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: P }) : null;
							}
							if (n == 'c1' && J?.layout?.length) {
								const P = J.layout.map((f) => _e(f));
								return J.layout.some((f, Z) => (Array.isArray(f) || f !== '_') && !!P[Z])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: P })
									: null;
							}
							if (n == 'c2' && i?.layout?.length) {
								const P = i.layout.map((f) => _e(f));
								return i.layout.some((f, Z) => (Array.isArray(f) || f !== '_') && !!P[Z])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: P })
									: null;
							}
							if (n == 'c3' && G?.layout?.length) {
								const P = G.layout.map((f) => _e(f));
								return G.layout.some((f, Z) => (Array.isArray(f) || f !== '_') && !!P[Z])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: P })
									: null;
							}
							if (n == 'c4' && g?.layout?.length) {
								const P = g.layout.map((f) => _e(f));
								return g.layout.some((f, Z) => (Array.isArray(f) || f !== '_') && !!P[Z])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: P })
									: null;
							}
							if (n == 'termsList')
								return !Pe?.length && !fe?.length && !he?.length
									? null
									: (0, t.Y)('div', {
											className: y()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(b.G, { controller: d, ...W.termsList }),
									  });
							if (n == 'terms.history')
								return fe?.length
									? (0, t.Y)(S.i, {
											controller: d,
											terms: d.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: d.config.settings?.history?.limit,
											...W.terms,
											title: 'History',
									  })
									: null;
							if (n == 'terms.trending')
								return he?.length
									? (0, t.Y)(S.i, {
											controller: d,
											terms: d.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: d.config.settings?.trending?.limit,
											...W.terms,
											title: 'Trending',
									  })
									: null;
							if (n == 'terms.suggestions')
								return Pe?.length
									? (0, t.Y)(S.i, {
											controller: d,
											terms: d.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...W.terms,
											title: 'Suggestions',
									  })
									: null;
							if (n == 'facets')
								return Ee.length
									? (0, t.FD)('div', {
											className: y()('ss__autocomplete__facets-wrapper'),
											children: [
												T || ge.facetsTitle.value
													? (0, t.Y)('div', {
															className: y()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ae.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(Y.J, { ...W.facets, facets: Ee }),
														X ? null : (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (n == 'facetsHorizontal')
								return Ee.length
									? (0, t.FD)(t.FK, {
											children: [
												T || ge.facetsTitle.value
													? (0, t.Y)('div', {
															className: y()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...ae.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(F.b, { ...W.facetsHorizontal, facets: Ee }),
														X ? null : (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (n == 'content' && Ce)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length > 0 || Re
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														X ? null : (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.HEADER, name: 'header' }),
														X ? null : (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.BANNER, name: 'banner' }),
														ce.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(I || ge.contentTitle.value) && ce.length > 0
																			? (0, t.Y)('div', {
																					className: y()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...ae.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(w.n, { results: ce, ...W.results, controller: d }),
																	],
															  })
															: Re
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ae.noResultsText?.all }),
																		ve && me?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(ve, {
																						controller: me,
																						title: me.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Oe,
																						name: 'noResultsRecommendations',
																						treePath: s.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														X ? null : (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (n == 'no-results' && Ce)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										ce.length == 0 && !Te
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...ae.noResultsText?.all }),
														ve && me?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(ve, {
																		controller: me,
																		title: me.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Oe,
																		name: 'noResultsRecommendations',
																		treePath: s.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, t.Y)(t.FK, {}),
								});
							if (n == '_') return (0, t.Y)('div', { className: 'ss__autocomplete__separator' });
							if (n == 'banner.banner') return (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.BANNER, name: 'banner' });
							if (n == 'banner.footer') return (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.FOOTER, name: 'footer' });
							if (n == 'banner.header') return (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.HEADER, name: 'header' });
							if (n == 'banner.left') return (0, t.Y)(x.l, { ...W.banner, content: se.content, type: c.c.LEFT, name: 'left' });
							if (n == 'button.see-more' && Ce && pe?.query?.string && ce.length > 0)
								return (0, t.FD)(B.$, {
									...W.button,
									...ae.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...ae.seeMoreButton.value }), (0, t.Y)(V.I, { ...W.icon })],
								});
						};
						return (
							typeof o.layout == 'string' &&
								(o.layout === 'terms' && (de = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								o.layout === 'mini' && (de = [['termsList'], ['content'], ['_', 'button.see-more']]),
								o.layout === 'standard' && (de = [['c1', 'c2', 'c3']])),
							We && de?.length
								? (0, t.Y)(D._, {
										children: (0, t.FD)('div', {
											...Ue,
											className: y()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': o.layout === 'terms' },
												{ 'ss__autocomplete--mini': o.layout === 'mini' },
												xe,
												ue
											),
											onClick: (n) => n.stopPropagation(),
											ref: (n) => (0, h.iy)(n, 0, !1, ne),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (n) => (0, h.iy)(n),
													onClick: () => o.onReset && o.onReset(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...ae.closeButton?.all,
												}),
												de?.map((n) => _e(n)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ie, H, e) {
				e.d(H, { n: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/classnames/index.js'),
					K = e.n(U),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(y),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					c = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					V = e('./components/src/components/Molecules/Result/Result.tsx'),
					w = e('./components/src/types.ts'),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					Y = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					a = e('./components/src/providers/cache.tsx'),
					j = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/withTracking.tsx'),
					D = e('./components/src/providers/snap.tsx'),
					$ = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/hooks/useDisplaySettings.tsx'),
					h = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					b = e('./components/src/hooks/useComponent.tsx');
				const S = ({ gapSize: _, columns: A }) =>
						(0, L.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: _,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${A}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / A}% - (${A - 1} * ${_} / ${A} ) )`,
								marginRight: _,
								marginBottom: _,
								[`&:nth-of-type(${A}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${A})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					F = (0, M.W)(V.Q),
					B = (0, m.PA)((_) => {
						const A = (0, j.u)(),
							k = (0, D.uk)(),
							ee = (0, $.LU)(),
							te = {
								0: { columns: _.columns || 1 },
								540: { columns: _.columns || 2 },
								768: { columns: _.columns || 3 },
								991: { columns: _.columns || 4 },
							},
							oe = { results: _.controller?.store?.results, columns: 4, gapSize: '20px', layout: w.V.grid, breakpoints: te, treePath: ee };
						let s = (0, E.v6)('results', A, oe, _);
						if (!(_.theme?.type == 'templates' || A?.type == 'templates')) {
							const g = (0, p.X)(s?.breakpoints || {}),
								ne = N()(s?.theme || {}, g?.theme || {}, { arrayMerge: (X, le) => le });
							s = { ...s, ...g, theme: ne };
						}
						const {
							disableStyles: r,
							className: z,
							internalClassName: o,
							layout: Q,
							theme: O,
							controller: u,
							treePath: l,
							customComponent: T,
							resultComponent: I,
						} = s;
						if (T) {
							const g = (0, b.x)(k?.templates?.library.import.component.results || {}, T);
							if (g) return (0, t.Y)(g, { ...s });
						}
						const J = {
							result: { internalClassName: 'ss__results__result', ...(0, Y.s)({ disableStyles: r }), theme: s?.theme, treePath: l },
							inlineBanner: {
								controller: u,
								internalClassName: 'ss__results__inline-banner',
								...(0, Y.s)({ disableStyles: r }),
								theme: s?.theme,
								treePath: l,
							},
						};
						let i = s.results;
						s?.columns && s?.rows && s.columns > 0 && s.rows > 0 && (i = s.results?.slice(0, s.columns * s.rows));
						const G = (0, C.Z)({ ...s, columns: Q == w.V.list ? 1 : s.columns }, S);
						return i?.length
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...G,
										className: K()('ss__results', `ss__results-${s.layout}`, z, o),
										children: i.map((g) =>
											g.type === v.c.BANNER
												? (0, L.n)(c._, { ...J.inlineBanner, key: g.id, banner: g, layout: s.layout })
												: I && u
												? (0, t.Y)(h.o, {
														result: g,
														controller: u,
														children: (0, x.Y)(I, { key: g.id, controller: u, result: g, theme: O, treePath: l }),
												  })
												: (0, t.Y)(F, { ...J.result, result: g, layout: s.layout, controller: u }, g.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(ie, H, e) {
				e.d(H, { G: () => a });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					K = e.n(U),
					y = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/snap.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					V = e('./components/src/hooks/useComponent.tsx'),
					w = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					Y = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const C = ({}) =>
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
					a = (0, L.PA)((j) => {
						const M = (0, N.u)(),
							D = (0, v.uk)(),
							$ = (0, c.LU)(),
							p = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: $,
							},
							h = (0, x.v6)('termsList', M, p, j),
							{
								layout: b,
								historyTitle: S,
								verticalOptions: F,
								trendingTitle: B,
								suggestionTitle: _,
								retainHistory: A,
								retainTrending: k,
								treePath: ee,
								disableStyles: te,
								className: oe,
								internalClassName: s,
								controller: r,
								customComponent: z,
							} = h;
						if (z) {
							const R = (0, V.x)(D?.templates?.library.import.component.termsList || {}, z);
							if (R) return (0, t.Y)(R, { ...h });
						}
						const o = { terms: { vertical: !!F, ...(0, w.s)({ disableStyles: te }), theme: h.theme, treePath: ee } },
							Q = (0, Y.Z)(h, C),
							O = r?.store.history || [],
							u = r?.store.terms || [],
							l = r?.store.trending || [],
							T = l?.filter((R) => R.active).pop(),
							I = O?.filter((R) => R.active).pop(),
							{ loaded: J, results: i, state: G } = r?.store;
						let g = !1;
						l?.length && ((k && J) || (!i.length && !G.input)) && (g = !0);
						let ne = !1;
						O?.length && ((A && J) || (!i.length && !G.input)) && (ne = !0),
							!r.store.state.input && (I || T) && (O?.length && (ne = !0), l?.length && (g = !0));
						const X = (R) => {
								if (typeof R != 'string') {
									const q = R?.map((ue) => X(ue));
									return R?.some((ue, d) => ue !== '_' && q[d]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if (R == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (R == 'History' && ne)
									return (0, t.Y)(E.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: S,
										terms: O,
										controller: r,
										name: 'history',
										limit: r.config.settings?.history?.limit,
										...o.terms,
									});
								if (R == 'Trending' && g)
									return (0, t.Y)(E.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: B,
										terms: l,
										controller: r,
										name: 'trending',
										limit: r.config.settings?.trending?.limit,
										...o.terms,
									});
								if (R == 'Suggestions')
									return u.length
										? (0, t.Y)(E.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: _,
												terms: u,
												controller: r,
												name: 'suggestions',
												...o.terms,
										  })
										: null;
							},
							le = b?.map((R) => X(R));
						return le?.some(Boolean)
							? (0, t.Y)(y._, { children: (0, t.Y)('div', { ...Q, className: K()('ss__terms-list', oe, s), children: le }) })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(ie, H, e) {
				e.d(H, { o: () => V });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					L = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/classnames/index.js'),
					K = e.n(U),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/createImpressionObserver.ts');
				const c = { ResultTracker: () => (0, L.AH)({}) },
					V = (0, m.PA)((w) => {
						const x = (0, y.u)(),
							Y = (0, N.v6)('resultTracker', x, {}, w),
							E = { impression: !0, click: !0 },
							{ children: C, result: a, track: j, controller: M, className: D, internalClassName: $, disableStyles: p, style: h } = Y,
							b = { ...E, ...j },
							{ ref: S, inViewport: F } = (0, v.Q)();
						F && b.impression && M?.track.product.impression(a);
						const B = {};
						return (
							p ? h && (B.css = [h]) : (B.css = [c.ResultTracker(), h]),
							(0, t.Y)('div', {
								className: K()('ss__result-tracker', `ss__${M?.type}-result-tracker`, D, $),
								onClick: (_) => {
									b.click && M?.track.product.click(_, a);
								},
								ref: S,
								...B,
								children: C,
							})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(ie, H, e) {
				e.d(H, { x: () => L });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function L({ input: m, controller: U, renderInput: K, buttonSelector: y, renderedInputRef: N, setActive: v }) {
					const [c, V] = (0, t.J0)(m),
						[w, x] = (0, t.J0)(!1),
						Y = () => {
							v && v(!0),
								setTimeout(async () => {
									w ||
										(V(N.current),
										(U.config.selector = `${U.config.selector}, .autocomplete__search-input input`),
										await U.bind(),
										N?.current?.focus()),
										x(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							let E = !1;
							const C = () => {
								E = !1;
							};
							if (K && y) {
								let a;
								if ((typeof y == 'string' ? (a = document.querySelector(y)) : (a = y), a)) {
									const j = () => {
											E = !0;
										},
										M = (p) => {
											(E = !1), p.stopPropagation(), Y();
										},
										D = () => {
											E || Y();
										},
										$ = () => Y();
									return (
										a.addEventListener('mousedown', j),
										document.addEventListener('mouseup', C, !0),
										a.addEventListener('click', M),
										a.addEventListener('focus', D),
										a.addEventListener('select', $),
										() => {
											a.removeEventListener('mousedown', j),
												document.removeEventListener('mouseup', C, !0),
												a.removeEventListener('click', M),
												a.removeEventListener('focus', D),
												a.removeEventListener('select', $);
										}
									);
								}
							} else if (v) {
								const a = () => {
										E = !0;
									},
									j = ($) => {
										(E = !1), $.stopPropagation(), v(!0);
									},
									M = () => {
										E || v(!0);
									},
									D = () => v(!0);
								return (
									m.addEventListener('mousedown', a),
									document.addEventListener('mouseup', C, !0),
									m.addEventListener('click', j),
									m.addEventListener('focus', M),
									m.addEventListener('select', D),
									() => {
										m.removeEventListener('mousedown', a),
											document.removeEventListener('mouseup', C, !0),
											m.removeEventListener('click', j),
											m.removeEventListener('focus', M),
											m.removeEventListener('select', D);
									}
								);
							}
						}, []),
						(0, t.vJ)(() => {
							if (m !== c && c) {
								const E = () => {
									m.value = c.value;
								};
								return (
									c.addEventListener('input', E),
									() => {
										c.removeEventListener('input', E);
									}
								);
							}
						}, [c]),
						c
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(ie, H, e) {
				e.d(H, { i: () => L });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const L = (m, U, K) => {
					const [y, N] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							m.getController(K.id)
								.then((v) => {
									N(v);
								})
								.catch(() => {
									m.createController(U, K).then((v) => {
										N(v);
									});
								});
						}, []),
						y
					);
				};
			},
		},
	]);
})();
