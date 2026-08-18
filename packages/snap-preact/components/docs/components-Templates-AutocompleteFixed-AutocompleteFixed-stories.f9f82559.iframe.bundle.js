(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4785],
		{
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.stories.tsx'(F, m, e) {
				'use strict';
				e.r(m), e.d(m, { Default: () => h, __namedExportsOrder: () => g, default: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					T = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'),
					A = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts');
				const U =
					"# AutocompleteFixed\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteFixed component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteFixed components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n- Overlay\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only \u2014 no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### offset\nThe `offset` prop accepts an object to fine-tune the position of the autocomplete modal. It can include `top`, `left`, and `width` properties, each specified as numbers representing pixel adjustments.\n\n```tsx\nconst offset = {\n    top: 10;\n	left: 15;\n	width: 500;\n}\n<AutocompleteFixed controller={controller} input={'#searchInput'} offset={offset} />\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n";
				var P = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = {
						title: 'Templates/AutocompleteFixed',
						component: T.f,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: A.Z } }, children: U }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(v) =>
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
										(0, t.Y)(v, {}),
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
					C = y.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					h = (v, { loaded: { controller: x } }) => {
						const [_, r] = (0, P.J0)(!1),
							D = [
								{ active: _ === 'dress', preview: () => r('dress'), value: 'dress', url: { href: '#' } },
								{ active: _ === 'shirt', preview: () => r('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: _ === 'shoes', preview: () => r('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: _ === 'hat', preview: () => r('hat'), value: 'hat', url: { href: '#' } },
								{ active: _ === 'pants', preview: () => r('pants'), value: 'pants', url: { href: '#' } },
								{ active: _ === 'socks', preview: () => r('socks'), value: 'socks', url: { href: '#' } },
							];
						x.store.history = D;
						const [R, j] = (0, P.J0)(!1);
						return (
							(0, P.vJ)(() => {
								document.querySelector('#searchInput') && j(!0);
							}, []),
							R ? (0, t.Y)(T.f, { ...v, controller: x, input: x?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(h.loaders = [async () => ({ controller: await C })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(F, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = e('../../node_modules/classnames/index.js'),
					d = e.n(A),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useClickOutside.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/hooks/useA11y.tsx'),
					D = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					R = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const j = () =>
						(0, T.AH)({
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
					E = (0, y.PA)((b) => {
						const s = (0, P.u)(),
							a = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, O.LU)() },
							l = (0, x.v6)('modal', s, a, b),
							{
								button: c,
								content: i,
								buttonSelector: w,
								children: z,
								disabled: K,
								open: N,
								onClick: W,
								lockScroll: H,
								startOpen: ee,
								disableClickOutside: te,
								disableA11y: J,
								className: Y,
								internalClassName: k,
								disableStyles: f,
								overlayColor: G,
								onOverlayClick: $,
								treePath: M,
							} = l,
							{ overrideElement: X, shouldRenderDefault: oe } = (0, h._)('modal', l);
						if (!oe) return X;
						const V = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (n) => {
									$ && $(n), I();
								},
								...(0, v.s)({ disableStyles: f, color: G }),
								theme: l?.theme,
								treePath: M,
							},
						};
						let p, B;
						const Z = N === void 0;
						Z ? ([p, B] = (0, u.J0)(ee)) : (p = N);
						let Q;
						te ||
							(Q = (0, C.L)(() => {
								p && (K || (Z && B && B(!1)));
							}));
						const I = () => {
								Z && B && B((n) => !n);
							},
							S = (0, _.Z)(l, j);
						return (
							(0, u.vJ)(
								() => (
									p && H ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[p, H]
							),
							(0, u.vJ)(() => {
								const n = w ? (typeof w == 'string' ? document.querySelector(w) : w) : null,
									L = (0, R.s)(() => {
										setTimeout(() => {
											p && H ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									q = (ne) => {
										I(), W && W(ne);
									};
								return (
									n && (K || n.addEventListener('click', q)),
									window.addEventListener('resize', L),
									() => {
										window.removeEventListener('resize', L), n && n.removeEventListener('click', q);
									}
								);
							}, []),
							(0, t.Y)(U._, {
								children: (0, t.FD)('div', {
									...S,
									className: d()('ss__modal', { 'ss__modal--open': p }, { 'ss__modal--disabled': K }, Y, k),
									ref: Q,
									children: [
										!w &&
											c &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (n) => (J ? null : (0, r.iy)(n)),
												'aria-expanded': p,
												role: 'button',
												onClick: (n) => {
													K || (I(), W && W(n));
												},
												children: (0, g.Y)(c, { open: p, toggleOpen: I, treePath: M }),
											}),
										(i || z) &&
											p &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (n) => (J ? null : (0, r.iy)(n)),
												children: [(0, g.Y)(i, { open: p, toggleOpen: I, treePath: M }), (0, g.Y)(z, { open: p, toggleOpen: I, treePath: M })],
											}),
										(0, t.Y)(D.h, { ...V.overlay, active: !!p }),
									],
								}),
							})
						);
					});
				e.d(m, ['a', 0, E]);
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(F, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					A = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					h = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					g = e('../../node_modules/classnames/index.js'),
					v = e.n(g),
					x = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					_ = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					r = e('./components/src/hooks/useA11y.tsx'),
					D = e('./components/src/hooks/useAcRenderedInput.tsx');
				const R = ({ inputBounds: E, offset: b, renderInput: s, width: o }) =>
						(0, A.AH)({
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
								left: `calc(0px + ${b?.left || 0}px)`,
								top: `calc(0px + ${s ? '0px' : `${E.height}px`} + ${b?.top || 0}px)`,
								width: `calc(100% + ${b?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${E.width}px`, height: `${E.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: o,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${E.top || 0}px - ${s ? `${E.height}px` : '0px'} + ${b?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					j = (0, T.PA)((E) => {
						const b = (0, O.u)(),
							s = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							o = (0, y.v6)('autocompleteFixed', b, s, E),
							[a, l] = (0, u.J0)(!1),
							c = '';
						let i = o.input,
							w = o.buttonSelector,
							z;
						i && (typeof i == 'string' && (i = document.querySelector(i)), (z = i?.getAttribute('placeholder'))), !w && i && (w = i);
						const {
							layout: K,
							disableStyles: N,
							renderInput: W,
							overlayColor: H,
							className: ee,
							internalClassName: te,
							offset: J,
							treePath: Y,
							tabManager: k,
						} = o;
						let f = o.controller,
							G = [f];
						k && k.active && ((f = k.active?.controller), (G = k.tabs.map((n) => n.controller)));
						const $ = (0, u.li)(null);
						(0, u.vJ)(() => {
							const n = (L, q) => {
								f.store.state.focusedInput || l(!1), q();
							};
							return (
								f.eventManager.on('focusChange', n),
								() => {
									f.eventManager.events.focusChange?.remove(n);
								}
							);
						}, [f]);
						const M = () => {
								f.setFocused(), l(!1);
							},
							X = {
								autocompleteLayout: { layout: K, onReset: () => M(), tabManager: k, ...(0, d.s)({ disableStyles: N }), theme: o?.theme, treePath: Y },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: w,
									lockScroll: !1,
									onOverlayClick: M,
									open: a,
									...(0, d.s)({ overlayColor: H, disableStyles: N }),
									theme: o?.theme,
									treePath: Y,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: z || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = f.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => M() },
									inputName: c,
									...(0, d.s)({ disableStyles: N }),
									theme: o?.theme,
									treePath: `${Y} modal`,
								},
							},
							oe = (n) => {
								if (n) {
									const L = n.getBoundingClientRect();
									return {
										top: L.top + window.scrollY + (J?.top || 0),
										left: L.left + window.scrollX + (J?.left || 0),
										width: L.width,
										height: L.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[V, p] = (0, u.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							B = () => {
								const n = oe(i);
								(V.height !== n.height || V.left !== n.left || V.top !== n.top || V.width !== n.width) && p(n);
							};
						B();
						const Z = (0, _.s)(() => {
							B();
						}, 10);
						(0, u.vJ)(() => {
							window.addEventListener('resize', Z);
						}, []);
						const Q = (0, U.Z)({ ...o, inputBounds: V }, R);
						let I;
						i && (I = (0, D.x)({ input: i, controllers: G, renderedInputRef: $, renderInput: !!W, buttonSelector: w, setActive: l }));
						const S = { ...o };
						return (
							delete S.width,
							delete S.className,
							delete S.internalClassName,
							delete S.style,
							delete S.styleScript,
							delete S.themeStyleScript,
							K?.length && a
								? (0, t.Y)(P._, {
										children: (0, t.Y)('div', {
											...Q,
											className: v()('ss__autocomplete-fixed', ee, te),
											children: (0, t.Y)(h.a, {
												...X.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (n) => (0, r.iy)(n, 0, !0, M),
													children: [
														W ? (0, t.Y)(x.D, { ...X.searchInput, value: f.store.state.input || '', inputRef: $ }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, t.Y)(C.h, { ...S, ...X.autocompleteLayout, input: I, controller: f, treePath: `${Y} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
				e.d(m, ['f', 0, j]);
			},
			'./components/src/utilities/componentArgs.ts'(F, m, e) {
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
			'./components/src/utilities/snapify.ts'(F, m, e) {
				'use strict';
				e.d(m, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					A = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					_ = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const r = {},
					D = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(o) {
						const a = o.id;
						if (r[a]) return r[a];
						const l = (r[a] = E({ client: D, controller: o }));
						return (
							l.on('afterStore', async ({ controller: c }, i) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await i();
							}),
							l.init(),
							l
						);
					}
					static autocomplete(o) {
						const a = o.id;
						if (r[a]) return r[a];
						const l = (r[a] = b({ client: D, controller: o }));
						return (
							l.on('afterStore', async ({ controller: c }, i) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await i();
							}),
							l.init(),
							l
						);
					}
					static search(o) {
						const a = o.id;
						if (r[a]) return r[a];
						const l = (r[a] = j({ client: D, controller: o }));
						return (
							l.on('afterStore', async ({ controller: c }, i) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await i();
							}),
							l.init(),
							l
						);
					}
				}
				function j(s) {
					const o = new O.V(new h.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), C.X);
					return new u.Tp(s.controller, {
						client: new d.K(s.client.globals, s.client.config),
						store: new U.U(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new g.E(),
						profiler: new v.U(),
						logger: new x.V(),
						tracker: new _.J(s.client.globals),
					});
				}
				function E(s) {
					const o = new O.V(new h.E(), C.X).detach(!0);
					return new A.c(s.controller, {
						client: new d.K(s.client.globals, s.client.config),
						store: new P.t(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new g.E(),
						profiler: new v.U(),
						logger: new x.V(),
						tracker: new _.J(s.client.globals),
					});
				}
				function b(s) {
					const o = new O.V(new h.E(), C.X).detach();
					return new T.Z(s.controller, {
						client: new d.K(s.client.globals, s.client.config),
						store: new y.Y(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new g.E(),
						profiler: new v.U(),
						logger: new x.V(),
						tracker: new _.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(F, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = 'prism-block',
					A = (d) => {
						const y = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								y.current && d.className?.includes('lang-') && !d.className?.includes(T) && window?.Prism?.highlightElement(y.current);
							}, [d.className, d.children, y]),
							(0, t.Y)('code', { ...d, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(m, ['Z', 0, A]);
			},
			'../../node_modules/memoizerific sync recursive'(F) {
				function m(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(m.keys = () => []), (m.resolve = m), (m.id = '../../node_modules/memoizerific sync recursive'), (F.exports = m);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteFixed-AutocompleteFixed-stories.f9f82559.iframe.bundle.js.map
