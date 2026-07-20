(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4785],
		{
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.stories.tsx'(S, m, e) {
				'use strict';
				e.r(m), e.d(m, { Default: () => _, __namedExportsOrder: () => v, default: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					b = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'),
					P = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts'),
					g = e('./components/src/utilities/snapify.ts');
				const B =
					"# AutocompleteFixed\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteFixed component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteFixed components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n- Overlay\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only \u2014 no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### offset\nThe `offset` prop accepts an object to fine-tune the position of the autocomplete modal. It can include `top`, `left`, and `width` properties, each specified as numbers representing pixel adjustments.\n\n```tsx\nconst offset = {\n    top: 10;\n	left: 15;\n	width: 500;\n}\n<AutocompleteFixed controller={controller} input={'#searchInput'} offset={offset} />\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n";
				var O = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const C = {
						title: 'Templates/AutocompleteFixed',
						component: b.f,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: P.Z } }, children: B }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(x) =>
								(0, t.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
										}),
										(0, t.FD)('span', {
											style: { margin: '15px', textAlign: 'center', display: 'block' },
											children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
										}),
										(0, t.Y)(x, {}),
									],
								}),
						],
						argTypes: {
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.0)',
								description: 'Autocomplete overlay color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							buttonSelector: {
								description: 'Autocomplete button selector. (defaults to input)',
								table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							renderInput: {
								defaultValue: !0,
								description: 'render a second input inside autocomplete window that gets auto focused on open.',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							controller: {
								description: 'Autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Autocomplete controller object' } },
								control: { type: 'none' },
							},
							input: {
								description: 'input element reference',
								type: { required: !0 },
								table: { type: { summary: 'Element or String as CSS Selector' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'array of modules to render in specified layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"['c1' | 'c2' | 'c3' | 'c4' | 'Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']",
									},
									defaultValue: { summary: "[['button.see-more'],['termsList'], ['content']]" },
								},
								control: 'none',
							},
							column1: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Terms'],
                    width: '150px'
                }`,
									},
								},
								control: 'none',
							},
							column2: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Facets'],
                    width: '150px'
                }`,
									},
								},
								control: 'none',
							},
							column3: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: [['Content'], ['_', 'SeeMore']],
                    width: 'auto'
                }`,
									},
								},
								control: 'none',
							},
							column4: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
								},
								control: 'none',
							},
							offset: {
								description: 'specifies the offset of the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							width: {
								defaultValue: '500px',
								description: 'Change width of the component',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '500px' } },
								control: { type: 'text' },
							},
							excludeBanners: {
								defaultValue: !1,
								description: 'automatically add merchandising banners',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							facetsTitle: {
								defaultValue: '',
								description: 'Change facets header title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							contentTitle: {
								defaultValue: '',
								description: 'Change content header title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							viewportMaxHeight: {
								defaultValue: !1,
								description: 'Autocomplete fully visible in viewport',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							resultComponent: {
								description: 'Custom result component for the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
								control: { type: 'object' },
							},
							...d.F,
						},
					},
					D = g.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					_ = (x, { loaded: { controller: E } }) => {
						const [y, s] = (0, O.J0)(!1),
							I = [
								{ active: y === 'dress', preview: () => s('dress'), value: 'dress', url: { href: '#' } },
								{ active: y === 'shirt', preview: () => s('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: y === 'shoes', preview: () => s('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: y === 'hat', preview: () => s('hat'), value: 'hat', url: { href: '#' } },
								{ active: y === 'pants', preview: () => s('pants'), value: 'pants', url: { href: '#' } },
								{ active: y === 'socks', preview: () => s('socks'), value: 'socks', url: { href: '#' } },
							];
						E.store.history = I;
						const [L, F] = (0, O.J0)(!1);
						return (
							(0, O.vJ)(() => {
								document.querySelector('#searchInput') && F(!0);
							}, []),
							L ? (0, t.Y)(b.f, { ...x, controller: E, input: E?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(_.loaders = [async () => ({ controller: await D })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteFixedProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  const [termState, setTermState] = useState(false);
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
    url: {
      href: '#'
    } as UrlManager
  }];
  controller.store.history = mockTerms;
  const [inputFound, setInputFound] = useState(false);
  useEffect(() => {
    if (document.querySelector('#searchInput')) {
      setInputFound(true);
    }
  }, []);
  return inputFound ? <AutocompleteFixed {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					d = e.n(P),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/hooks/useClickOutside.tsx'),
					_ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					s = e('./components/src/hooks/useA11y.tsx'),
					I = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					L = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const F = () =>
						(0, b.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					T = (0, g.PA)((w) => {
						const n = (0, O.u)(),
							a = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, C.LU)() },
							r = (0, E.v6)('modal', n, a, w),
							{
								button: c,
								content: i,
								buttonSelector: M,
								children: J,
								disabled: U,
								open: k,
								onClick: f,
								lockScroll: V,
								startOpen: Q,
								disableClickOutside: q,
								disableA11y: $,
								className: X,
								internalClassName: N,
								disableStyles: Z,
								overlayColor: R,
								onOverlayClick: Y,
								treePath: z,
							} = r,
							{ overrideElement: j, shouldRenderDefault: ee } = (0, _._)('modal', r);
						if (!ee) return j;
						const G = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (p) => {
									Y && Y(p), l();
								},
								...(0, x.s)({ disableStyles: Z, color: R }),
								theme: r?.theme,
								treePath: z,
							},
						};
						let h, K;
						const H = k === void 0;
						H ? ([h, K] = (0, u.J0)(Q)) : (h = k);
						let A;
						q ||
							(A = (0, D.L)(() => {
								h && (U || (H && K && K(!1)));
							}));
						const l = () => {
								H && K && K((p) => !p);
							},
							W = (0, y.Z)(r, F);
						return (
							(0, u.vJ)(
								() => (
									h && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[h, V]
							),
							(0, u.vJ)(() => {
								const p = M ? (typeof M == 'string' ? document.querySelector(M) : M) : null,
									te = (0, L.s)(() => {
										setTimeout(() => {
											h && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									oe = (ne) => {
										l(), f && f(ne);
									};
								return (
									p && (U || p.addEventListener('click', oe)),
									window.addEventListener('resize', te),
									() => {
										window.removeEventListener('resize', te), p && p.removeEventListener('click', oe);
									}
								);
							}, []),
							(0, t.Y)(B._, {
								children: (0, t.FD)('div', {
									...W,
									className: d()('ss__modal', { 'ss__modal--open': h }, { 'ss__modal--disabled': U }, X, N),
									ref: A,
									children: [
										!M &&
											c &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (p) => ($ ? null : (0, s.iy)(p)),
												'aria-expanded': h,
												role: 'button',
												onClick: (p) => {
													U || (l(), f && f(p));
												},
												children: (0, v.Y)(c, { open: h, toggleOpen: l, treePath: z }),
											}),
										(i || J) &&
											h &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (p) => ($ ? null : (0, s.iy)(p)),
												children: [(0, v.Y)(i, { open: h, toggleOpen: l, treePath: z }), (0, v.Y)(J, { open: h, toggleOpen: l, treePath: z })],
											}),
										(0, t.Y)(I.h, { ...G.overlay, active: !!h }),
									],
								}),
							})
						);
					});
				e.d(m, ['a', 0, T]);
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					_ = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					v = e('../../node_modules/classnames/index.js'),
					x = e.n(v),
					E = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					y = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					s = e('./components/src/hooks/useA11y.tsx'),
					I = e('./components/src/hooks/useAcRenderedInput.tsx');
				const L = ({ inputBounds: T, offset: w, renderInput: n, width: o }) =>
						(0, P.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							pointerEvents: 'none',
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${w?.left || 0}px)`,
								top: `calc(0px + ${n ? '0px' : `${T.height}px`} + ${w?.top || 0}px)`,
								width: `calc(100% + ${w?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${T.width}px`, height: `${T.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: o,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${T.top || 0}px - ${n ? `${T.height}px` : '0px'} + ${w?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					F = (0, b.PA)((T) => {
						const w = (0, C.u)(),
							n = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							o = (0, g.v6)('autocompleteFixed', w, n, T),
							[a, r] = (0, u.J0)(!1),
							c = '';
						let i = o.input,
							M = o.buttonSelector,
							J;
						i && (typeof i == 'string' && (i = document.querySelector(i)), (J = i?.getAttribute('placeholder'))), !M && i && (M = i);
						const {
								layout: U,
								disableStyles: k,
								controller: f,
								renderInput: V,
								overlayColor: Q,
								className: q,
								internalClassName: $,
								offset: X,
								treePath: N,
							} = o,
							Z = (0, u.li)(null);
						(0, u.vJ)(() => {
							const l = (W, p) => {
								f.store.state.focusedInput || r(!1), p();
							};
							return (
								f.eventManager.on('focusChange', l),
								() => {
									f.eventManager.events.focusChange?.remove(l);
								}
							);
						}, []);
						const R = () => {
								f.setFocused(), r(!1);
							},
							Y = {
								autocompleteLayout: { layout: U, onReset: () => R(), ...(0, d.s)({ disableStyles: k }), theme: o?.theme, treePath: N },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: M,
									lockScroll: !1,
									onOverlayClick: R,
									open: a,
									...(0, d.s)({ overlayColor: Q, disableStyles: k }),
									theme: o?.theme,
									treePath: N,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: J || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = f.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => R() },
									inputName: c,
									...(0, d.s)({ disableStyles: k }),
									theme: o?.theme,
									treePath: `${N} modal`,
								},
							},
							z = (l) => {
								if (l) {
									const W = l.getBoundingClientRect();
									return {
										top: W.top + window.scrollY + (X?.top || 0),
										left: W.left + window.scrollX + (X?.left || 0),
										width: W.width,
										height: W.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[j, ee] = (0, u.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							G = () => {
								const l = z(i);
								(j.height !== l.height || j.left !== l.left || j.top !== l.top || j.width !== l.width) && ee(l);
							};
						G();
						const h = (0, y.s)(() => {
							G();
						}, 10);
						(0, u.vJ)(() => {
							window.addEventListener('resize', h);
						}, []);
						const K = (0, B.Z)({ ...o, inputBounds: j }, L);
						let H;
						i && (H = (0, I.x)({ input: i, controller: f, renderedInputRef: Z, renderInput: !!V, buttonSelector: M, setActive: r }));
						const A = { ...o };
						return (
							delete A.width,
							delete A.className,
							delete A.internalClassName,
							delete A.style,
							delete A.styleScript,
							delete A.themeStyleScript,
							U?.length && a
								? (0, t.Y)(O._, {
										children: (0, t.Y)('div', {
											...K,
											className: x()('ss__autocomplete-fixed', q, $),
											children: (0, t.Y)(_.a, {
												...Y.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (l) => (0, s.iy)(l, 0, !0, R),
													children: [
														V ? (0, t.Y)(E.D, { ...Y.searchInput, value: f.store.state.input || '', inputRef: Z }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, t.Y)(D.h, { ...A, ...Y.autocompleteLayout, input: H, controller: f, treePath: `${N} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
				e.d(m, ['f', 0, F]);
			},
			'./components/src/utilities/componentArgs.ts'(S, m, e) {
				'use strict';
				const t = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				e.d(m, ['F', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(S, m, e) {
				'use strict';
				e.d(m, { p: () => L });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					v = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const s = {},
					I = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(o) {
						const a = o.id;
						if (s[a]) return s[a];
						const r = (s[a] = T({ client: I, controller: o }));
						return (
							r.on('afterStore', async ({ controller: c }, i) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await i();
							}),
							r.init(),
							r
						);
					}
					static autocomplete(o) {
						const a = o.id;
						if (s[a]) return s[a];
						const r = (s[a] = w({ client: I, controller: o }));
						return (
							r.on('afterStore', async ({ controller: c }, i) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await i();
							}),
							r.init(),
							r
						);
					}
					static search(o) {
						const a = o.id;
						if (s[a]) return s[a];
						const r = (s[a] = F({ client: I, controller: o }));
						return (
							r.on('afterStore', async ({ controller: c }, i) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await i();
							}),
							r.init(),
							r
						);
					}
				}
				function F(n) {
					const o = new C.V(new _.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), D.X);
					return new u.Tp(n.controller, {
						client: new d.K(n.client.globals, n.client.config),
						store: new B.U(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new v.E(),
						profiler: new x.U(),
						logger: new E.V(),
						tracker: new y.J(n.client.globals),
					});
				}
				function T(n) {
					const o = new C.V(new _.E(), D.X).detach(!0);
					return new P.c(n.controller, {
						client: new d.K(n.client.globals, n.client.config),
						store: new O.t(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new v.E(),
						profiler: new x.U(),
						logger: new E.V(),
						tracker: new y.J(n.client.globals),
					});
				}
				function w(n) {
					const o = new C.V(new _.E(), D.X).detach();
					return new b.Z(n.controller, {
						client: new d.K(n.client.globals, n.client.config),
						store: new g.Y(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new v.E(),
						profiler: new x.U(),
						logger: new E.V(),
						tracker: new y.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const b = 'prism-block',
					P = (d) => {
						const g = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								g.current && d.className?.includes('lang-') && !d.className?.includes(b) && window?.Prism?.highlightElement(g.current);
							}, [d.className, d.children, g]),
							(0, t.Y)('code', { ...d, ref: g, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(m, ['Z', 0, P]);
			},
			'../../node_modules/memoizerific sync recursive'(S) {
				function m(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(m.keys = () => []), (m.resolve = m), (m.id = '../../node_modules/memoizerific sync recursive'), (S.exports = m);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteFixed-AutocompleteFixed-stories.560b57aa.iframe.bundle.js.map
