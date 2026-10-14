import {
	o as q,
	u as G,
	x as J,
	a as K,
	m as Q,
	b as V,
	c as X,
	z as C,
	n as Y,
	l as _,
	j as s,
	p as Z,
	d as ee,
	e as te,
} from './iframe-CXSVAHru.js';
import { u as se } from './useCreateController-CPUKSfyE.js';
import { u as oe } from './useLang-Dx66cFD0.js';
import { h as ne } from './handleize-xLHhB8k5.js';
const ae = ({}) => te({}),
	de = q((R) => {
		const p = G(),
			a = J(),
			f = K(),
			l = Q(
				'noResults',
				p,
				{
					suggestionsTitleText: 'Suggestions',
					suggestionsList: [
						'Check for misspellings.',
						'Remove possible redundant keywords (ie. "products").',
						'Use other words to describe what you are searching for.',
					],
					templates: { recommendation: { enabled: !0 } },
					treePath: f,
				},
				R
			),
			{
				contentSlot: i,
				suggestionsTitleText: c,
				hideSuggestionsTitleText: N,
				hideContactsTitleText: x,
				suggestionsList: o,
				hideContact: y,
				contactsTitleText: d,
				hideSuggestions: b,
				contactsList: n,
				controller: g,
				templates: r,
				className: L,
				internalClassName: P,
				treePath: S,
			} = l,
			{ overrideElement: $, shouldRenderDefault: j } = V('noResults', l);
		if (!j) return $;
		const O = X(l, ae),
			h = o && Array.isArray(o) && o.length !== 0,
			T = n && Array.isArray(n) && n.length !== 0,
			u = !!r?.recommendation?.enabled,
			W = u ? r?.recommendation?.component || 'Recommendation' : void 0,
			k = u ? String(r?.recommendation?.resultComponent || 'Result') : void 0,
			A = a?.templates?.library.import.component.recommendation.default || {},
			E = a?.templates?.library.import.component.result || {},
			{ ComponentOverride: F, shouldWaitForNamedOverride: w } = C(A, W),
			{ ComponentOverride: B, shouldWaitForNamedOverride: M } = C(E, k),
			z = F,
			D = B;
		let t;
		if (u && a?.templates) {
			const e = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, r?.recommendation?.config);
			(e.id = e.id || `search-${e.tag}`),
				(t = se(a, 'recommendation', e)),
				!t?.store?.loaded && !t?.store?.loading && t?.store.error?.type !== 'error' && t?.search();
		}
		const v = z,
			H = D,
			I = {
				suggestionsTitleText: { value: c },
				suggestionsList: {
					value: `${o ? o.map((e) => `<li class="ss__no-results__suggestions__list__option">${e}</li>`).join('') : void 0}
			`,
				},
				contactsTitleText: { value: d },
				contactsList: {
					value: `${
						n
							? n
									.map(
										(e) =>
											`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${ne(
												e.title
											)}'><h4 class="ss__no-results__contact__detail__title">${e.title}</h4><p class="ss__no-results__contact__detail__content">${
												e.content
											}</p></div>`
									)
									.join('')
							: void 0
					}`,
				},
			},
			U = Y(I, l.lang || {}),
			m = oe(U, { controller: g }, { activeBreakpoint: p?.activeBreakpoint });
		return _('div', {
			className: ee('ss__no-results', L, P),
			...O,
			children: [
				i &&
					(typeof i == 'string'
						? s('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: i } })
						: s('div', { className: 'ss__no-results__slot', children: Z(i, { controller: g, treePath: S }) })),
				!b &&
					(c || h) &&
					_('div', {
						className: 'ss__no-results__suggestions',
						children: [
							c && !N && s('h3', { className: 'ss__no-results__suggestions__title', ...m.suggestionsTitleText?.all }),
							h && s('ul', { className: 'ss__no-results__suggestions__list', ...m.suggestionsList?.all }),
						],
					}),
				!y &&
					(d || T) &&
					_('div', {
						className: 'ss__no-results__contact',
						children: [
							d && !x && s('h3', { className: 'ss__no-results__contact__title', ...m.contactsTitleText?.all }),
							T && s('div', { ...m.contactsList?.all }),
						],
					}),
				v && t?.store?.loaded && !w && !M
					? s('div', {
							className: 'ss__no-results__recommendations',
							children: s(v, {
								controller: t,
								title: t.store?.profile?.display?.templateParameters?.title,
								resultComponent: H,
								name: 'noResultsRecommendations',
							}),
					  })
					: null,
			],
		});
	});
export { de as N };
