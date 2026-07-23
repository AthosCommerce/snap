(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3471],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(u, a, t) {
				'use strict';
				t.d(a, { p: () => s });
				function s(r) {
					if (typeof r != 'string') return r;
					let n = r.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Organisms/NoResults/NoResults.stories.tsx'(u, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => i, WithRecommendations: () => d, __namedExportsOrder: () => v, default: () => o });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = t('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					c = t('./components/src/utilities/storybook.tsx'),
					l = t('./components/src/utilities/componentArgs.ts');
				const e = `# NoResults

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
					o = {
						title: 'Organisms/NoResults',
						component: n.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(r.oz, { options: { overrides: { code: c.Z } }, children: e }), (0, s.Y)(r.uY, { story: r.h1 })],
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
					i = (g) => (0, s.Y)(n.a, { ...g }),
					d = (g) => (0, s.Y)(n.a, { ...g });
				(d.args = { templates: { recommendation: { enabled: !0 } } }),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...i.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const v = ['Default', 'WithRecommendations'];
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(u, a, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					l = t.n(c),
					e = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = t('./components/src/providers/snap.tsx'),
					i = t('./components/src/providers/treePath.tsx'),
					d = t('./components/src/utilities/cloneWithProps.tsx'),
					v = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					N = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					S = t('./components/src/hooks/useCreateController.tsx'),
					j = t('../../node_modules/deepmerge/dist/cjs.js'),
					A = t.n(j),
					W = t('./components/src/hooks/useLang.tsx'),
					L = t('./components/src/hooks/useComponent.tsx'),
					U = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const I = ({}) => (0, n.AH)({}),
					B = (0, r.PA)((K) => {
						const Y = (0, e.u)(),
							y = (0, o.uk)(),
							k = (0, i.LU)(),
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
							T = (0, v.v6)('noResults', Y, w, K),
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
								controller: O,
								templates: b,
								className: $,
								internalClassName: J,
								treePath: Z,
							} = T,
							{ overrideElement: X, shouldRenderDefault: G } = (0, U._)('noResults', T);
						if (!G) return X;
						const Q = (0, g.Z)(T, I),
							P = _ && Array.isArray(_) && _.length !== 0,
							D = h && Array.isArray(h) && h.length !== 0,
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
							const m = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, b?.recommendation?.config);
							(m.id = m.id || `search-${m.tag}`),
								(p = (0, S.i)(y, 'recommendation', m)),
								!p?.store?.loaded && !p?.store?.loading && p?.store.error?.type !== 'error' && p?.search();
						}
						const M = rt,
							ct = it,
							mt = {
								suggestionsTitleText: { value: C },
								suggestionsList: {
									value: `${_ ? _.map((m) => `<li class="ss__no-results__suggestions__list__option">${m}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: E },
								contactsList: {
									value: `${
										h
											? h
													.map(
														(m) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${N.p(
																m.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																m.title
															}</h4><p class="ss__no-results__contact__detail__content">${m.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							ut = A()(mt, T.lang || {}),
							x = (0, W.u)(ut, { controller: O });
						return (0, s.FD)('div', {
							className: l()('ss__no-results', $, J),
							...Q,
							children: [
								f &&
									(typeof f == 'string'
										? (0, s.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: f } })
										: (0, s.Y)('div', { className: 'ss__no-results__slot', children: (0, d.Y)(f, { controller: O, treePath: Z }) })),
								!z &&
									(C || P) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											C && !H && (0, s.Y)('h3', { className: 'ss__no-results__suggestions__title', ...x.suggestionsTitleText?.all }),
											P && (0, s.Y)('ul', { className: 'ss__no-results__suggestions__list', ...x.suggestionsList?.all }),
										],
									}),
								!V &&
									(E || D) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											E && !F && (0, s.Y)('h3', { className: 'ss__no-results__contact__title', ...x.contactsTitleText?.all }),
											D && (0, s.Y)('div', { ...x.contactsList?.all }),
										],
									}),
								M && p?.store?.loaded && !nt && !lt
									? (0, s.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, s.Y)(M, {
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
				t.d(a, ['a', 0, B]);
			},
			'./components/src/hooks/useCreateController.tsx'(u, a, t) {
				'use strict';
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (n, c, l) => {
					const [e, o] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							n.getController(l.id)
								.then((i) => {
									o(i);
								})
								.catch(() => {
									n.createController(c, l).then((i) => {
										o(i);
									});
								});
						}, []),
						e
					);
				};
				t.d(a, ['i', 0, r]);
			},
			'./components/src/hooks/useLang.tsx'(u, a, t) {
				'use strict';
				const s = (r, n) => {
					const c = {};
					return (
						Object.keys(r).forEach((l) => {
							const e = r && r[l],
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
								(c[l] = o);
						}),
						c
					);
				};
				t.d(a, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(u, a, t) {
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
				t.d(a, ['F', 0, s]);
			},
			'./components/src/utilities/storybook.tsx'(u, a, t) {
				'use strict';
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					c = (l) => {
						const e = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(n) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, s.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(a, ['Z', 0, c]);
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function a(t) {
					const s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (u.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-NoResults-NoResults-stories.05ae3397.iframe.bundle.js.map
