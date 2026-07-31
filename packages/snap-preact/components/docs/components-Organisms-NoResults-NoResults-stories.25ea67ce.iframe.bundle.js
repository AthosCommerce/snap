(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3471],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(d, n, t) {
				'use strict';
				t.d(n, { p: () => s });
				function s(r) {
					if (typeof r != 'string') return r;
					let a = r.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'./components/src/components/Organisms/NoResults/NoResults.stories.tsx'(d, n, t) {
				'use strict';
				t.r(n), t.d(n, { Default: () => e, WithRecommendations: () => o, __namedExportsOrder: () => v, default: () => c });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = t('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					m = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const i = `# NoResults

Renders no results verbiage. Props that accept strings in this component will render HTML contained within them.

## Usage

### contentSlot
The \`contentSlot\` prop provides a slot to provide custom content. This can be JSX, string, or stringified HTML. 

\`\`\`tsx
const slot = <div>Nothing found..</div>

<NoResults contentSlot={slot} />
\`\`\`

### hideSuggestions
The \`hideSuggestions\` prop will prevent the suggestions list and title from rendering.

\`\`\`tsx
<NoResults hideSuggestions={true} />
\`\`\`

### hideContactsTitleText
The \`hideContactsTitleText\` prop allows you to hide the contacts title.

\`\`\`tsx
<NoResults hideContactsTitleText={true} />
\`\`\`

### suggestionsTitleText
The \`suggestionsTitleText\` prop allows you to set the inner text of the suggestions title.

\`\`\`tsx
<NoResults suggestionsTitleText={'suggestions'} />
\`\`\`

### hideSuggestionsTitleText
The \`hideSuggestionsTitleText\` prop allows you to hide the suggestions title.

\`\`\`tsx
<NoResults hideSuggestionsTitleText={true} />
\`\`\`

### suggestionsList
The \`suggestionsList\` prop takes an array of strings to render as suggestions 

\`\`\`tsx
const list = [
	\`Check for misspellings.\`,
	\`Remove possible redundant keywords (ie. "products").\`,
	\`Use other words to describe what you are searching for.\`,
],

<NoResults suggestionsList={list} />
\`\`\`

### hideContact
The \`hideContact\` prop will prevent the contact list and title from rendering.

\`\`\`tsx
<NoResults hideContact={true} />
\`\`\`

### contactsTitleText
The \`contactsTitleText\` prop allows you to set the inner text contacts title.

\`\`\`tsx
<NoResults contactsTitleText={'contacts'} />
\`\`\`

### templates
The \`templates\` prop allows you to configure and display product recommendations when no search results are found. This prop accepts an object with a recommendation key, which can enable or customize the recommendation module.

Example usage:


\`\`\`tsx
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

\`\`\`tsx
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

## Lang

The \`lang\` prop allows you to override translatable text strings used by the NoResults component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`suggestionsTitleText\` | Suggestions section title | \`controller\` (SearchController) |
| \`suggestionsList\` | Suggestions list HTML content | \`controller\` (SearchController) |
| \`contactsTitleText\` | Contact info section title | \`controller\` (SearchController) |
| \`contactsList\` | Contact info list HTML content | \`controller\` (SearchController) |

### Example

\`\`\`tsx
<NoResults
	controller={controller}
	lang={{
		suggestionsTitleText: {
			value: 'Try searching for:',
		},
		contactsTitleText: {
			value: 'Need help? Contact us:',
		},
	}}
/>
\`\`\`
`,
					c = {
						title: 'Organisms/NoResults',
						component: a.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(r.oz, { options: { overrides: { code: m.Z } }, children: i }), (0, s.Y)(r.uY, { story: r.h1 })],
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
					e = (g) => (0, s.Y)(a.a, { ...g }),
					o = (g) => (0, s.Y)(a.a, { ...g });
				(o.args = { templates: { recommendation: { enabled: !0 } } }),
					(e.parameters = {
						...e.parameters,
						docs: {
							...e.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...e.parameters?.docs?.source },
						},
					}),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...o.parameters?.docs?.source },
						},
					});
				const v = ['Default', 'WithRecommendations'];
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(d, n, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = t('../../node_modules/classnames/index.js'),
					l = t.n(m),
					i = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = t('./components/src/providers/snap.tsx'),
					e = t('./components/src/providers/treePath.tsx'),
					o = t('./components/src/utilities/cloneWithProps.tsx'),
					v = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					S = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					j = t('./components/src/hooks/useCreateController.tsx'),
					A = t('../../node_modules/deepmerge/dist/cjs.js'),
					W = t.n(A),
					U = t('./components/src/hooks/useLang.tsx'),
					L = t('./components/src/hooks/useComponent.tsx'),
					I = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const B = ({}) => (0, a.AH)({}),
					K = (0, r.PA)((Y) => {
						const O = (0, i.u)(),
							y = (0, c.uk)(),
							k = (0, e.LU)(),
							w = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: k,
							},
							T = (0, v.v6)('noResults', O, w, Y),
							{
								contentSlot: f,
								suggestionsTitleText: C,
								hideSuggestionsTitleText: H,
								hideContactsTitleText: F,
								suggestionsList: _,
								hideContact: V,
								contactsTitleText: E,
								hideSuggestions: z,
								contactsList: h,
								controller: P,
								templates: b,
								className: $,
								internalClassName: J,
								treePath: Z,
							} = T,
							{ overrideElement: X, shouldRenderDefault: G } = (0, I._)('noResults', T);
						if (!G) return X;
						const Q = (0, g.Z)(T, B),
							D = _ && Array.isArray(_) && _.length !== 0,
							M = h && Array.isArray(h) && h.length !== 0,
							R = !!b?.recommendation?.enabled,
							q = R ? b?.recommendation?.component || 'Recommendation' : void 0,
							tt = R ? String(b?.recommendation?.resultComponent || 'Result') : void 0,
							et = y?.templates?.library.import.component.recommendation.default || {},
							st = y?.templates?.library.import.component.result || {},
							{ ComponentOverride: ot, shouldWaitForNamedOverride: nt } = (0, L.x)(et, q),
							{ ComponentOverride: at, shouldWaitForNamedOverride: lt } = (0, L.x)(st, tt),
							rt = ot,
							it = at;
						let p;
						if (R && y?.templates) {
							const u = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, b?.recommendation?.config);
							(u.id = u.id || `search-${u.tag}`),
								(p = (0, j.i)(y, 'recommendation', u)),
								!p?.store?.loaded && !p?.store?.loading && p?.store.error?.type !== 'error' && p?.search();
						}
						const N = rt,
							ct = it,
							mt = {
								suggestionsTitleText: { value: C },
								suggestionsList: {
									value: `${_ ? _.map((u) => `<li class="ss__no-results__suggestions__list__option">${u}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: E },
								contactsList: {
									value: `${
										h
											? h
													.map(
														(u) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${S.p(
																u.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																u.title
															}</h4><p class="ss__no-results__contact__detail__content">${u.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							ut = W()(mt, T.lang || {}),
							x = (0, U.u)(ut, { controller: P }, { activeBreakpoint: O?.activeBreakpoint });
						return (0, s.FD)('div', {
							className: l()('ss__no-results', $, J),
							...Q,
							children: [
								f &&
									(typeof f == 'string'
										? (0, s.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: f } })
										: (0, s.Y)('div', { className: 'ss__no-results__slot', children: (0, o.Y)(f, { controller: P, treePath: Z }) })),
								!z &&
									(C || D) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											C && !H && (0, s.Y)('h3', { className: 'ss__no-results__suggestions__title', ...x.suggestionsTitleText?.all }),
											D && (0, s.Y)('ul', { className: 'ss__no-results__suggestions__list', ...x.suggestionsList?.all }),
										],
									}),
								!V &&
									(E || M) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											E && !F && (0, s.Y)('h3', { className: 'ss__no-results__contact__title', ...x.contactsTitleText?.all }),
											M && (0, s.Y)('div', { ...x.contactsList?.all }),
										],
									}),
								N && p?.store?.loaded && !nt && !lt
									? (0, s.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, s.Y)(N, {
												controller: p,
												title: p.store?.profile?.display?.templateParameters?.title,
												resultComponent: ct,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
				t.d(n, ['a', 0, K]);
			},
			'./components/src/hooks/useCreateController.tsx'(d, n, t) {
				'use strict';
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (a, m, l) => {
					const [i, c] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							a.getController(l.id)
								.then((e) => {
									c(e);
								})
								.catch(() => {
									a.createController(m, l).then((e) => {
										c(e);
									});
								});
						}, []),
						i
					);
				};
				t.d(n, ['i', 0, r]);
			},
			'./components/src/hooks/useLang.tsx'(d, n, t) {
				'use strict';
				const s = (r, a, m) => {
					const l = m ? { ...a, ...m } : a,
						i = {};
					return (
						Object.keys(r).forEach((c) => {
							const e = r && r[c],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: e.value(l) } })
										: (o.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': c }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](l))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](l))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(l))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(l)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(l))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': c })),
								(i[c] = o);
						}),
						i
					);
				};
				t.d(n, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(d, n, t) {
				'use strict';
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
				t.d(n, ['F', 0, s]);
			},
			'./components/src/utilities/storybook.tsx'(d, n, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					m = (l) => {
						const i = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								i.current && l.className?.includes('lang-') && !l.className?.includes(a) && window?.Prism?.highlightElement(i.current);
							}, [l.className, l.children, i]),
							(0, s.Y)('code', { ...l, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(n, ['Z', 0, m]);
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function n(t) {
					const s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (d.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-NoResults-NoResults-stories.25ea67ce.iframe.bundle.js.map
