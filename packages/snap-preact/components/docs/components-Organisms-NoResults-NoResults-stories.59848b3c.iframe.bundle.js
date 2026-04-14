(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3471],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(u, a, t) {
				'use strict';
				t.d(a, { p: () => s });
				function s(i) {
					if (typeof i != 'string') return i;
					let n = i.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Organisms/NoResults/NoResults.stories.tsx'(u, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => r, WithRecommendations: () => d, __namedExportsOrder: () => C, default: () => o });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = t('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					m = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const e = `# NoResults

Renders no results verbiage. Props that accept strings in this component will render HTML contained within them.

## Usage

### contentSlot
The \`contentSlot\` prop provides a slot to provide custom content. This can be JSX, string, or stringified HTML. 

\`\`\`jsx
const slot = <div>Nothing found..</div>

<NoResults contentSlot={slot} />
\`\`\`

### hideSuggestions
The \`hideSuggestions\` prop will prevent the suggestions list and title from rendering.

\`\`\`jsx
<NoResults hideSuggestions={true} />
\`\`\`

### hideContactsTitleText
The \`hideContactsTitleText\` prop allows you to hide the contacts title.

\`\`\`jsx
<NoResults hideContactsTitleText={true} />
\`\`\`

### suggestionsTitleText
The \`suggestionsTitleText\` prop allows you to set the inner text of the suggestions title.

\`\`\`jsx
<NoResults suggestionsTitleText={'suggestions'} />
\`\`\`

### hideSuggestionsTitleText
The \`hideSuggestionsTitleText\` prop allows you to hide the suggestions title.

\`\`\`jsx
<NoResults hideSuggestionsTitleText={true} />
\`\`\`

### suggestionsList
The \`suggestionsList\` prop takes an array of strings to render as suggestions 

\`\`\`jsx
const list = [
	\`Check for misspellings.\`,
	\`Remove possible redundant keywords (ie. "products").\`,
	\`Use other words to describe what you are searching for.\`,
],

<NoResults suggestionsList={list} />
\`\`\`

### hideContact
The \`hideContact\` prop will prevent the contact list and title from rendering.

\`\`\`jsx
<NoResults hideContact={true} />
\`\`\`

### contactsTitleText
The \`contactsTitleText\` prop allows you to set the inner text contacts title.

\`\`\`jsx
<NoResults contactsTitleText={'contacts'} />
\`\`\`

### templates
The \`templates\` prop allows you to configure and display product recommendations when no search results are found. This prop accepts an object with a recommendation key, which can enable or customize the recommendation module.

Example usage:


\`\`\`jsx
const templatesConfig = {
    recommendation: {
      enabled: true,
      component: 'Recommendation', // (optional) custom recommendation component name
      resultComponent: 'Result',   // (optional) custom result component name
      config: {                    // (optional) additional configuration for recommendations
        id: 'my-recs-id',
        tag: 'no-results',
      },
    },
  }

<NoResults templates={templatesConfig} />
\`\`\`

### contactsList
The \`contactsList\` prop takes an array of contact objects to render in the contact section. each object takes a title, and content.

\`\`\`jsx
const list = [
			{
				title: \`Address\`,
				content: \`123 Street Address<br />City, State, Zipcode\`,
			},
			{
				title: \`Hours\`,
				content: \`Monday - Saturday, 00:00am - 00:00pm<br />Sunday, 00:00am - 00:00pm\`,
			},
			{
				title: \`Phone\`,
				content: \`<a href="tel:1234567890">123-456-7890</a>\`,
			},
			{
				title: \`Email\`,
				content: \`<a href="mailto:email@site.com">email@site.com</a>\`,
			},
		],

<NoResults contactsList={list} />
\`\`\`
`,
					o = {
						title: 'Organisms/NoResults',
						component: n.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(i.oz, { options: { overrides: { code: m.Z } }, children: e }), (0, s.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(g) => (0, s.Y)('div', { style: { maxWidth: '900px' }, children: (0, s.Y)(g, {}) })],
						argTypes: {
							contentSlot: {
								description: 'Slot for adding custom content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							hideSuggestions: {
								description: 'Hide suggestions',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							suggestionsTitleText: {
								description: 'Suggestions title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Suggestions' } },
								control: { type: 'text' },
							},
							suggestionsList: {
								description: 'list of suggestions to display',
								table: { category: 'Templates Legal', type: { summary: 'string[]' } },
								control: { type: 'object', defaultValue: [] },
							},
							hideContact: {
								description: 'Hide contact section',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideContactsTitleText: {
								description: 'Hide contact section title',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSuggestionsTitleText: {
								description: 'Hide suggestions section title',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							contactsTitleText: {
								description: 'contact section title',
								table: {
									category: 'Templates Legal',
									type: { summary: 'string' },
									defaultValue: { summary: `Still can't find what you're looking for? <a href="/contact-us">Contact us</a>.` },
								},
								control: { type: 'text' },
							},
							contactsList: {
								description: 'list of contact lines to display',
								table: { category: 'Templates Legal', type: { summary: '{ title, content }[]' } },
								control: { type: 'object' },
							},
							templates: {
								description: 'templates to render',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							...l.F,
						},
					},
					r = (g) => (0, s.Y)(n.a, { ...g }),
					d = (g) => (0, s.Y)(n.a, { ...g });
				(d.args = { templates: { recommendation: { enabled: !0 } } }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...r.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const C = ['Default', 'WithRecommendations'];
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(u, a, t) {
				'use strict';
				t.d(a, { a: () => k });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = t('../../node_modules/classnames/index.js'),
					l = t.n(m),
					e = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = t('./components/src/providers/snap.tsx'),
					r = t('./components/src/providers/treePath.tsx'),
					d = t('./components/src/utilities/cloneWithProps.tsx'),
					C = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					U = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					E = t('./components/src/hooks/useComponent.tsx'),
					W = t('./components/src/hooks/useCreateController.tsx'),
					I = t('../../node_modules/deepmerge/dist/cjs.js'),
					B = t.n(I),
					K = t('./components/src/hooks/useLang.tsx');
				const Y = ({}) => (0, n.AH)({}),
					k = (0, i.PA)((w) => {
						const H = (0, e.u)(),
							V = (0, o.uk)(),
							F = (0, r.LU)(),
							z = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: F,
							},
							f = (0, C.v6)('noResults', H, z, w),
							{
								contentSlot: T,
								suggestionsTitleText: R,
								hideSuggestionsTitleText: $,
								hideContactsTitleText: J,
								suggestionsList: h,
								hideContact: Z,
								contactsTitleText: L,
								hideSuggestions: X,
								contactsList: y,
								controller: P,
								templates: b,
								className: G,
								internalClassName: Q,
								treePath: q,
								customComponent: O,
							} = f;
						if (O) {
							const c = (0, E.x)(V?.templates?.library.import.component.noResults || {}, O);
							if (c) return (0, s.Y)(c, { ...f });
						}
						const tt = (0, g.Z)(f, Y),
							j = h && Array.isArray(h) && h.length !== 0,
							D = y && Array.isArray(y) && y.length !== 0;
						let M, N, p;
						if (b?.recommendation?.enabled) {
							const c = b?.recommendation?.component || 'Recommendation',
								_ = (0, o.uk)();
							if (_?.templates) {
								const A = b?.recommendation?.resultComponent || 'Result',
									v = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, b.recommendation.config);
								(v.id = v.id || `search-${v.tag}`),
									(p = (0, W.i)(_, 'recommendation', v)),
									!p?.store?.loaded && !p?.store?.loading && p?.store.error?.type !== 'error' && p?.search(),
									A && _?.templates?.library.import.component.result && (N = (0, E.x)(_?.templates?.library.import.component.result, A)),
									c &&
										_?.templates?.library.import.component.recommendation.default &&
										(M = (0, E.x)(_?.templates?.library.import.component.recommendation.default, c));
							}
						}
						const S = M,
							et = N,
							st = {
								suggestionsTitleText: { value: R },
								suggestionsList: {
									value: `${h ? h.map((c) => `<li class="ss__no-results__suggestions__list__option">${c}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: L },
								contactsList: {
									value: `${
										y
											? y
													.map(
														(c) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${U.p(
																c.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																c.title
															}</h4><p class="ss__no-results__contact__detail__content">${c.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							ot = B()(st, f.lang || {}),
							x = (0, K.u)(ot, { controller: P });
						return (0, s.FD)('div', {
							className: l()('ss__no-results', G, Q),
							...tt,
							children: [
								T &&
									(typeof T == 'string'
										? (0, s.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: T } })
										: (0, s.Y)('div', { className: 'ss__no-results__slot', children: (0, d.Y)(T, { controller: P, treePath: q }) })),
								!X &&
									(R || j) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											R && !$ && (0, s.Y)('h3', { className: 'ss__no-results__suggestions__title', ...x.suggestionsTitleText?.all }),
											j && (0, s.Y)('ul', { className: 'ss__no-results__suggestions__list', ...x.suggestionsList?.all }),
										],
									}),
								!Z &&
									(L || D) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											L && !J && (0, s.Y)('h3', { className: 'ss__no-results__contact__title', ...x.contactsTitleText?.all }),
											D && (0, s.Y)('div', { ...x.contactsList?.all }),
										],
									}),
								S && p?.store?.loaded
									? (0, s.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, s.Y)(S, {
												controller: p,
												title: p.store?.profile?.display?.templateParameters?.title,
												resultComponent: et,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(u, a, t) {
				'use strict';
				t.d(a, { i: () => i });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, m, l) => {
					const [e, o] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							n.getController(l.id)
								.then((r) => {
									o(r);
								})
								.catch(() => {
									n.createController(m, l).then((r) => {
										o(r);
									});
								});
						}, []),
						e
					);
				};
			},
			'./components/src/hooks/useLang.tsx'(u, a, t) {
				'use strict';
				t.d(a, { u: () => s });
				const s = (i, n) => {
					const m = {};
					return (
						Object.keys(i).forEach((l) => {
							const e = i && i[l],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (o.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': l }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](n))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](n))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(n))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(n)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(n))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': l })),
								(m[l] = o);
						}),
						m
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(u, a, t) {
				'use strict';
				t.d(a, { F: () => s });
				const s = {
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
			'./components/src/utilities/storybook.tsx'(u, a, t) {
				'use strict';
				t.d(a, { Z: () => m });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					m = (l) => {
						const e = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(n) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, s.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function a(t) {
					var s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (u.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-NoResults-NoResults-stories.59848b3c.iframe.bundle.js.map
