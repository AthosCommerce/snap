(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4785],
		{
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.stories.tsx'(j, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => _, __namedExportsOrder: () => I, default: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					T = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'),
					P = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					g = e('./components/src/utilities/snapify.ts');
				const U =
					"# AutocompleteFixed\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteFixed component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteFixed components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n- Overlay\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### offset\nThe `offset` prop accepts an object to fine-tune the position of the autocomplete modal. It can include `top`, `left`, and `width` properties, each specified as numbers representing pixel adjustments.\n\n```jsx\nconst offset = {\n    top: 10;\n	left: 15;\n	width: 500;\n}\n<AutocompleteFixed controller={controller} input={'#searchInput'} offset={offset} />\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n";
				var O = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const C = {
						title: 'Templates/AutocompleteFixed',
						component: T.f,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: P.Z } }, children: U }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(f) =>
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
										(0, t.Y)(f, {}),
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
							...m.F,
						},
					},
					D = g.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					_ = (f, { loaded: { controller: x } }) => {
						const [y, s] = (0, O.J0)(!1),
							b = [
								{ active: y === 'dress', preview: () => s('dress'), value: 'dress', url: { href: '#' } },
								{ active: y === 'shirt', preview: () => s('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: y === 'shoes', preview: () => s('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: y === 'hat', preview: () => s('hat'), value: 'hat', url: { href: '#' } },
								{ active: y === 'pants', preview: () => s('pants'), value: 'pants', url: { href: '#' } },
								{ active: y === 'socks', preview: () => s('socks'), value: 'socks', url: { href: '#' } },
							];
						x.store.history = b;
						const [R, F] = (0, O.J0)(!1);
						return (
							(0, O.vJ)(() => {
								document.querySelector('#searchInput') && F(!0);
							}, []),
							R ? (0, t.Y)(T.f, { ...f, controller: x, input: x?.config.selector }) : (0, t.Y)(t.FK, {})
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
				const I = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(j, l, e) {
				'use strict';
				e.d(l, { a: () => w });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					m = e.n(P),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/hooks/useClickOutside.tsx'),
					I = e('./components/src/hooks/useComponent.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					s = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/hooks/useA11y.tsx'),
					R = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					F = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const E = () =>
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
					w = (0, g.PA)((n) => {
						const o = (0, O.u)(),
							a = (0, C.uk)(),
							i = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, D.LU)() },
							v = (0, y.v6)('modal', o, i, n),
							{
								button: p,
								content: K,
								buttonSelector: S,
								children: H,
								disabled: B,
								open: L,
								onClick: W,
								lockScroll: J,
								startOpen: ee,
								disableClickOutside: te,
								disableA11y: $,
								className: V,
								internalClassName: Z,
								disableStyles: k,
								overlayColor: X,
								onOverlayClick: G,
								treePath: M,
								customComponent: Q,
							} = v;
						if (Q) {
							const u = (0, I.x)(a?.templates?.library.import.component.modal || {}, Q);
							if (u) return (0, t.Y)(u, { ...v });
						}
						const q = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (u) => {
									G && G(u), r();
								},
								...(0, x.s)({ disableStyles: k, color: X }),
								theme: v?.theme,
								treePath: M,
							},
						};
						let h, N;
						const Y = L === void 0;
						Y ? ([h, N] = (0, c.J0)(ee)) : (h = L);
						let A;
						te ||
							(A = (0, _.L)(() => {
								h && (B || (Y && N && N(!1)));
							}));
						const r = () => {
								Y && N && N((u) => !u);
							},
							z = (0, s.Z)(v, E);
						return (
							(0, c.vJ)(
								() => (
									h && J ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[h, J]
							),
							(0, c.vJ)(() => {
								const u = S ? (typeof S == 'string' ? document.querySelector(S) : S) : null,
									oe = (0, F.s)(() => {
										setTimeout(() => {
											h && J ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									ne = (se) => {
										r(), W && W(se);
									};
								return (
									u && (B || u.addEventListener('click', ne)),
									window.addEventListener('resize', oe),
									() => {
										window.removeEventListener('resize', oe), u && u.removeEventListener('click', ne);
									}
								);
							}, []),
							(0, t.Y)(U._, {
								children: (0, t.FD)('div', {
									...z,
									className: m()('ss__modal', { 'ss__modal--open': h }, { 'ss__modal--disabled': B }, V, Z),
									ref: A,
									children: [
										!S &&
											p &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (u) => ($ ? null : (0, b.iy)(u)),
												'aria-expanded': h,
												role: 'button',
												onClick: (u) => {
													B || (r(), W && W(u));
												},
												children: (0, f.Y)(p, { open: h, toggleOpen: r, treePath: M }),
											}),
										(K || H) &&
											h &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (u) => ($ ? null : (0, b.iy)(u)),
												children: [(0, f.Y)(K, { open: h, toggleOpen: r, treePath: M }), (0, f.Y)(H, { open: h, toggleOpen: r, treePath: M })],
											}),
										(0, t.Y)(R.h, { ...q.overlay, active: !!h }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(j, l, e) {
				'use strict';
				e.d(l, { f: () => F });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					_ = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					I = e('../../node_modules/classnames/index.js'),
					f = e.n(I),
					x = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					y = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					s = e('./components/src/hooks/useA11y.tsx'),
					b = e('./components/src/hooks/useAcRenderedInput.tsx');
				const R = ({ inputBounds: E, offset: w, renderInput: n, width: o }) =>
						(0, P.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${w?.left || 0}px)`,
								top: `calc(0px + ${n ? '0px' : `${E.height}px`} + ${w?.top || 0}px)`,
								width: `calc(100% + ${w?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								'.ss__search-input': { background: '#fff', width: `${E.width}px`, height: `${E.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: o,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${E.top || 0}px - ${n ? `${E.height}px` : '0px'} + ${w?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					F = (0, T.PA)((E) => {
						const w = (0, C.u)(),
							n = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							o = (0, g.v6)('autocompleteFixed', w, n, E),
							[a, d] = (0, c.J0)(!1),
							[i, v] = (0, c.J0)('query');
						let p = o.input,
							K = o.buttonSelector,
							S;
						if (p) {
							typeof p == 'string' && (p = document.querySelector(p));
							const r = p?.getAttribute('name');
							r && (v(r), o.renderInput && p.setAttribute('name', '')), (S = p?.getAttribute('placeholder'));
						}
						!K && p && (K = p);
						const {
								layout: H,
								disableStyles: B,
								controller: L,
								renderInput: W,
								overlayColor: J,
								className: ee,
								internalClassName: te,
								offset: $,
								treePath: V,
							} = o,
							Z = (0, c.li)(null),
							k = () => {
								L.setFocused(), d(!1);
							},
							X = {
								autocompleteLayout: { layout: H, onReset: () => k(), ...(0, m.s)({ disableStyles: B }), theme: o?.theme, treePath: V },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: K,
									lockScroll: !1,
									onOverlayClick: k,
									open: a,
									...(0, m.s)({ overlayColor: J, disableStyles: B }),
									theme: o?.theme,
									treePath: V,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: S || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = L.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => k() },
									inputName: i,
									...(0, m.s)({ disableStyles: B }),
									theme: o?.theme,
									treePath: `${V} modal`,
								},
							},
							G = (r) => {
								if (r) {
									const z = r.getBoundingClientRect();
									return {
										top: z.top + window.scrollY + ($?.top || 0),
										left: z.left + window.scrollX + ($?.left || 0),
										width: z.width,
										height: z.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[M, Q] = (0, c.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							q = () => {
								const r = G(p);
								(M.height !== r.height || M.left !== r.left || M.top !== r.top || M.width !== r.width) && Q(r);
							};
						q();
						const h = (0, y.s)(() => {
							q();
						}, 10);
						(0, c.vJ)(() => {
							window.addEventListener('resize', h);
						}, []);
						const N = (0, U.Z)({ ...o, inputBounds: M }, R);
						let Y;
						p && (Y = (0, b.x)({ input: p, controller: L, renderedInputRef: Z, renderInput: !!W, buttonSelector: K, setActive: d }));
						const A = { ...o };
						return (
							delete A.width,
							delete A.className,
							delete A.internalClassName,
							delete A.style,
							delete A.styleScript,
							delete A.themeStyleScript,
							H?.length && a
								? (0, t.Y)(O._, {
										children: (0, t.Y)('div', {
											...N,
											className: f()('ss__autocomplete-fixed', ee, te),
											children: (0, t.Y)(_.a, {
												...X.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (r) => (0, s.iy)(r, 0, !0, k),
													children: [
														W ? (0, t.Y)(x.D, { ...X.searchInput, value: L.store.state.input || '', inputRef: Z }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, t.Y)(D.h, { ...A, ...X.autocompleteLayout, input: Y, controller: L, treePath: `${V} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(j, l, e) {
				'use strict';
				e.d(l, { F: () => t });
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
			},
			'./components/src/utilities/snapify.ts'(j, l, e) {
				'use strict';
				e.d(l, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					I = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const s = {},
					b = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(o) {
						const a = o.id;
						if (s[a]) return s[a];
						const d = (s[a] = E({ client: b, controller: o }));
						return (
							d.on('afterStore', async ({ controller: i }, v) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await v();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(o) {
						const a = o.id;
						if (s[a]) return s[a];
						const d = (s[a] = w({ client: b, controller: o }));
						return (
							d.on('afterStore', async ({ controller: i }, v) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await v();
							}),
							d.init(),
							d
						);
					}
					static search(o) {
						const a = o.id;
						if (s[a]) return s[a];
						const d = (s[a] = F({ client: b, controller: o }));
						return (
							d.on('afterStore', async ({ controller: i }, v) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await v();
							}),
							d.init(),
							d
						);
					}
				}
				function F(n) {
					const o = new C.V(new _.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), D.X);
					return new c.Tp(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new U.U(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new I.E(),
						profiler: new f.U(),
						logger: new x.V(),
						tracker: new y.J(n.client.globals),
					});
				}
				function E(n) {
					const o = new C.V(new _.E(), D.X).detach(!0);
					return new P.c(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new O.t(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new I.E(),
						profiler: new f.U(),
						logger: new x.V(),
						tracker: new y.J(n.client.globals),
					});
				}
				function w(n) {
					const o = new C.V(new _.E(), D.X).detach();
					return new T.Z(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new g.Y(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new I.E(),
						profiler: new f.U(),
						logger: new x.V(),
						tracker: new y.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(j, l, e) {
				'use strict';
				e.d(l, { Z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = 'prism-block',
					P = (m) => {
						const g = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								g.current && m.className?.includes('lang-') && !m.className?.includes(T) && window?.Prism?.highlightElement(g.current);
							}, [m.className, m.children, g]),
							(0, t.Y)('code', { ...m, ref: g, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(j) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (j.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteFixed-AutocompleteFixed-stories.052de32f.iframe.bundle.js.map
