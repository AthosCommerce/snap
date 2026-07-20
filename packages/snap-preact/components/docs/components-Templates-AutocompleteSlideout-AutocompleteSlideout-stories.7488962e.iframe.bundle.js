(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7845],
		{
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.stories.tsx'(x, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => m, __namedExportsOrder: () => w, default: () => v });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'),
					g = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/snapify.ts');
				const A =
					"# AutocompleteSlideout\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteSlideout component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteSlideout components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- Slideout\n- SearchInput\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only \u2014 no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### slideDirection\nThe `slideDirection` prop sets the direction that the slideout slides in. Defaults to `left`. Available values are `left`, `right`, `top`, & `bottom`.\n\n```tsx\n<AutocompleteSlideout controller={controller} input={'#searchInput'} slideDirection={'right'} />\n```\n";
				var T = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = {
						title: 'Templates/AutocompleteSlideout',
						component: _.o,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(u.oz, { options: { overrides: { code: g.Z } }, children: A }), (0, o.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(h) =>
								(0, o.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, o.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
										}),
										(0, o.FD)('span', {
											style: { margin: '15px', textAlign: 'center', display: 'block' },
											children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
										}),
										(0, o.Y)(h, {}),
									],
								}),
						],
						argTypes: {
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.0)',
								description: 'Slideout overlay color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							slideDirection: {
								defaultValue: 'left',
								description: 'Slideout slide direction',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'left' } },
								control: { type: 'text' },
							},
							buttonSelector: {
								description: 'Slideout button selector. (defaults to input)',
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
							resultComponent: {
								description: 'Custom result component for the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
								control: { type: 'object' },
							},
							...i.F,
						},
					},
					S = p.p.autocomplete({
						id: 'AutocompleteSlideout',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					m = (h, { loaded: { controller: y } }) => {
						const [d, s] = (0, T.J0)(!1),
							b = [
								{ active: d === 'dress', preview: () => s('dress'), value: 'dress', url: { href: '#' } },
								{ active: d === 'shirt', preview: () => s('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: d === 'shoes', preview: () => s('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: d === 'hat', preview: () => s('hat'), value: 'hat', url: { href: '#' } },
								{ active: d === 'pants', preview: () => s('pants'), value: 'pants', url: { href: '#' } },
								{ active: d === 'socks', preview: () => s('socks'), value: 'socks', url: { href: '#' } },
							];
						y.store.history = b;
						const [M, D] = (0, T.J0)(!1);
						return (
							(0, T.vJ)(() => {
								document.querySelector('#searchInput') && D(!0);
							}, []),
							M ? (0, o.Y)(_.o, { ...h, controller: y, input: y?.config.selector }) : (0, o.Y)(o.FK, {})
						);
					};
				(m.loaders = [async () => ({ controller: await S })]),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteSlideoutProps, {
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
  return inputFound ? <AutocompleteSlideout {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const w = ['Default'];
			},
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'(x, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					m = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					w = e('../../node_modules/classnames/index.js'),
					h = e.n(w),
					y = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					d = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/hooks/useAcRenderedInput.tsx');
				const b = ({}) =>
						(0, g.AH)({
							border: '1px solid #eee',
							'& .ss__autocomplete': { position: 'relative' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					M = (0, _.PA)((D) => {
						const O = (0, v.u)(),
							B = {
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							t = (0, p.v6)('autocompleteSlideout', O, B, D),
							r = '';
						let n = t.input,
							c = t.buttonSelector;
						n && typeof n == 'string' && (n = document.querySelector(n)), !c && n && (c = n);
						const {
								layout: l,
								disableStyles: f,
								slideDirection: F,
								controller: P,
								overlayColor: W,
								renderInput: j,
								className: V,
								internalClassName: k,
								treePath: I,
								width: N,
							} = t,
							U = (0, u.li)(null),
							C = () => {
								R(!1), P.setFocused();
							},
							L = {
								autocompleteLayout: { onReset: () => C(), layout: l, ...(0, i.s)({ disableStyles: f }), theme: t?.theme, treePath: I },
								slideout: {
									width: N,
									rerender: !1,
									overlayColor: W,
									slideDirection: F,
									buttonSelector: c,
									...(0, i.s)({ disableStyles: f }),
									theme: t?.theme,
									treePath: I,
								},
								searchInput: {
									internalClassName: 'autocomplete-slideout__search-input  autocomplete__search-input',
									inputName: r,
									submitSearchButton: {
										onClick: () => {
											window.location.href = P.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => C(), icon: 'angle-left' },
									...(0, i.s)({ disableStyles: f }),
									treePath: `${I} slideout`,
									theme: t?.theme,
								},
							},
							Y = (0, A.Z)(t, b),
							[J, R] = (0, u.J0)(!1);
						let K;
						n &&
							((0, u.vJ)(() => {
								n.addEventListener('click', () => R(!0));
							}),
							(K = (0, s.x)({ input: n, controller: P, renderedInputRef: U, renderInput: !!j, buttonSelector: c })));
						const E = { ...t };
						return (
							delete E.width,
							delete E.className,
							delete E.internalClassName,
							delete E.style,
							delete E.styleScript,
							delete E.themeStyleScript,
							l?.length
								? (0, o.Y)(T._, {
										children: (0, o.Y)(m.S, {
											...Y,
											...L.slideout,
											className: h()('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', V, k),
											active: J,
											children: (0, o.FD)('div', {
												className: 'ss__autocomplete-slideout__inner',
												ref: (z) => (0, d.iy)(z, 0, !0, C),
												children: [
													j ? (0, o.Y)(y.D, { ...L.searchInput, value: P.store.state.input || '', inputRef: U }) : (0, o.Y)(o.FK, {}),
													(0, o.Y)(S.h, { ...E, ...L.autocompleteLayout, input: K, controller: P, treePath: `${I} slideout` }),
												],
											}),
										}),
								  })
								: null
						);
					});
				e.d(a, ['o', 0, M]);
			},
			'./components/src/utilities/componentArgs.ts'(x, a, e) {
				'use strict';
				const o = {
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
				e.d(a, ['F', 0, o]);
			},
			'./components/src/utilities/snapify.ts'(x, a, e) {
				'use strict';
				e.d(a, { p: () => M });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					m = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					w = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					d = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const s = {},
					b = { globals: { siteId: 'atkzs2' } };
				class M {
					static recommendation(r) {
						const n = r.id;
						if (s[n]) return s[n];
						const c = (s[n] = O({ client: b, controller: r }));
						return (
							c.on('afterStore', async ({ controller: l }, f) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await f();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(r) {
						const n = r.id;
						if (s[n]) return s[n];
						const c = (s[n] = B({ client: b, controller: r }));
						return (
							c.on('afterStore', async ({ controller: l }, f) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await f();
							}),
							c.init(),
							c
						);
					}
					static search(r) {
						const n = r.id;
						if (s[n]) return s[n];
						const c = (s[n] = D({ client: b, controller: r }));
						return (
							c.on('afterStore', async ({ controller: l }, f) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await f();
							}),
							c.init(),
							c
						);
					}
				}
				function D(t) {
					const r = new v.V(new m.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), S.X);
					return new u.Tp(t.controller, {
						client: new i.K(t.client.globals, t.client.config),
						store: new A.U(t.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new w.E(),
						profiler: new h.U(),
						logger: new y.V(),
						tracker: new d.J(t.client.globals),
					});
				}
				function O(t) {
					const r = new v.V(new m.E(), S.X).detach(!0);
					return new g.c(t.controller, {
						client: new i.K(t.client.globals, t.client.config),
						store: new T.t(t.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new w.E(),
						profiler: new h.U(),
						logger: new y.V(),
						tracker: new d.J(t.client.globals),
					});
				}
				function B(t) {
					const r = new v.V(new m.E(), S.X).detach();
					return new _.Z(t.controller, {
						client: new i.K(t.client.globals, t.client.config),
						store: new p.Y(t.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new w.E(),
						profiler: new h.U(),
						logger: new y.V(),
						tracker: new d.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					g = (i) => {
						const p = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								p.current && i.className?.includes('lang-') && !i.className?.includes(_) && window?.Prism?.highlightElement(p.current);
							}, [i.className, i.children, p]),
							(0, o.Y)('code', { ...i, ref: p, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, g]);
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function a(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (x.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteSlideout-AutocompleteSlideout-stories.7488962e.iframe.bundle.js.map
