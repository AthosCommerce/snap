import { h } from 'preact';

import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import type { AutocompleteController } from '@athoscommerce/snap-controller';
import type { AutocompleteTermStore } from '@athoscommerce/snap-store-mobx';
import { ComponentProps, StyleScript } from '../../../types';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { createHoverProps } from '../../../toolbox';
import { mergeProps, mergeStyles } from '../../../utilities';
import { Term } from '@athoscommerce/snap-store-mobx';
import { useComponent, useLang } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import type { Lang } from '../../../hooks';
import deepmerge from 'deepmerge';

const defaultStyles: StyleScript<TermsProps> = ({ vertical, theme }) => {
	return css({
		'.ss__terms__title': {
			fontWeight: 'normal',
			margin: 0,
			textTransform: 'uppercase',
			padding: '10px',
			h5: {
				fontSize: '.8em',
				margin: 0,
			},
		},

		'.ss__terms__options': {
			display: 'flex',
			justifyContent: 'space-evenly',
			flexDirection: vertical ? 'column' : 'row',
			flexWrap: 'wrap',
			padding: '0px',

			'.ss__terms__option': {
				listStyle: 'none',
				padding: '10px',
				// flexGrow: vertical  ? '1' : undefined,
				// textAlign: vertical ? 'center' : undefined,
				wordBreak: 'break-all',

				a: {
					display: 'block',
					em: {
						fontStyle: 'normal',
					},
				},

				'&.ss__terms__option--active': {
					a: {
						fontWeight: 'bold',
						color: theme?.variables?.colors?.primary,
					},
				},
			},
		},
	});
};

const escapeRegExp = (string: string): string => {
	return string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const emIfyTerm = (term: string, search: string): string => {
	if (term && search) {
		const match = term.match(escapeRegExp(search));
		if (search && term && match && typeof match.index == 'number') {
			const beforeMatch = term.slice(0, match.index);
			const afterMatch = term.slice(match.index + search.length, term.length);

			return `${beforeMatch ? `<em>${beforeMatch}</em>` : ''}${search}${afterMatch ? `<em>${afterMatch}</em>` : ''}`;
		}
	}

	return `<em>${term}</em>`;
};

export const Terms = observer((properties: TermsProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<TermsProps> = {
		vertical: true,
		previewOnHover: true,
		treePath: globalTreePath,
	};

	const props = mergeProps('terms', globalTheme, defaultProps, properties);
	const { title, onTermClick, limit, previewOnHover, emIfy, className, internalClassName, controller, customComponent } = props;
	const currentInput = controller?.store?.state?.input;
	const terms = props.terms;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.terms || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<TermsProps>(props, defaultStyles);

	const termClickEvent = (e: React.MouseEvent<Element, MouseEvent>, term: Term) => {
		onTermClick && onTermClick(e, term);

		// remove focus from input (close the autocomplete)
		controller?.setFocused && controller?.setFocused();
	};

	const termsToShow = limit ? terms?.slice(0, limit) : terms;

	//initialize lang
	const defaultLang: Partial<TermsLang> = {
		title: {
			value: title,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedTitleLang = useLang({ title: lang.title } as any, {
		controller,
	});

	return termsToShow?.length ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__terms', className, internalClassName)}>
				{title ? (
					<div className="ss__terms__title">
						<h5 {...mergedTitleLang.title.all}></h5>
					</div>
				) : null}
				<ul className="ss__terms__options" aria-label={title}>
					{termsToShow?.map((term, idx) => {
						//initialize lang
						const defaultTermLang = {
							term: {
								value: `${emIfy ? emIfyTerm(term.value, currentInput || '') : term.value}`,
								attributes: {
									'aria-label': `${title ? title : ''} item ${idx + 1} of ${termsToShow.length}, ${term.value}`,
								},
							},
						};
						const termLang = deepmerge(defaultTermLang, props.lang || {});
						const mergedTermLang = useLang({ term: termLang.term } as any, {
							index: idx,
							numberOfTerms: termsToShow.length,
							term: term,
						});

						return (
							<li
								className={classnames('ss__terms__option', {
									'ss__terms__option--active': term.active,
								})}
							>
								<a
									onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => termClickEvent(e, term)}
									href={term.url.href}
									{...(previewOnHover ? createHoverProps(term.preview) : {})}
									{...mergedTermLang.term?.all}
								></a>
							</li>
						);
					})}
				</ul>
			</div>
		</CacheProvider>
	) : null;
});

export type TermsProps = {
	controller: AutocompleteController;
	terms: AutocompleteTermStore;
	lang?: Partial<TermsLang>;
	name?: TermsNames;
} & TermsTemplatesLegalProps &
	ComponentProps<TermsProps>;

export type TermsTemplatesLegalProps = {
	title?: string;
	vertical?: boolean;
	limit?: number;
	onTermClick?: (e: React.MouseEvent<Element, MouseEvent>, term: Term) => void;
	previewOnHover?: boolean;
	emIfy?: boolean;
};

export interface TermsLang {
	term?: Lang<{
		index: number;
		numberOfTerms: number;
		term: Term;
	}>;
	title?: Lang<{
		controller: AutocompleteController;
	}>;
}

export type TermsNames = 'trending' | 'suggestions' | 'history';
