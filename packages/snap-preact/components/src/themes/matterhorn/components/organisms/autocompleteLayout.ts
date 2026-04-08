import { css } from '@emotion/react';
import type { AutocompleteLayoutProps, AutocompleteLayoutTemplatesLegalProps } from '../../../../components/Organisms/AutocompleteLayout';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Autocomplete Layout component
const autocompleteLayoutStyleScript = (props: AutocompleteLayoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const textSelectors = 'a, div, p';
	const headerSelectors =
		'.ss__terms-list .ss__terms .ss__terms__title h5, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__button--see-more .ss__button__content, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__title';
	const activeSelectors =
		'.ss__terms-list .ss__terms .ss__terms__options .ss__terms__option.ss__terms__option--active a, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__button--see-more:hover .ss__button__content';

	// get autocomplete layout
	const acLayout = props?.layout ? props.layout : 'standard';

	// shared autocomplete styles
	const sharedStyles = css({
		alignContent: acLayout == 'standard' ? 'normal' : 'flex-start',
		border: `1px solid ${custom.colors.gray02}`,
		backgroundColor: custom.colors.white,
		[textSelectors]: {
			fontSize: custom.utils.convertPxToEm(acLayout == 'terms' ? 15 : 12),
			lineHeight: 1.5,
			color: variables?.colors?.text,
		},
		a: {
			display: 'block',
		},
		'ul, ul li': {
			padding: 0,
			margin: 0,
			listStyle: 'none',
		},
		'.ss__banner': {
			img: {
				maxWidth: '100%',
				maxHeight: '150px',
				height: 'auto',
			},
		},
		[headerSelectors]: {
			margin: `0 0 ${custom.spacing.x4}px 0`,
			padding: 0,
			fontSize: custom.utils.convertPxToEm(acLayout == 'terms' ? 17 : 16),
			fontWeight: custom.fonts.weight02,
			lineHeight: 1.2,
			color: variables?.colors?.secondary,
		},
		[activeSelectors]: {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
		},
		'.ss__autocomplete__row, .ss__autocomplete__column': {
			'.ss__search-input': {
				background: 'transparent',
				width: 'auto',
				height: '30px',
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
		},
		'.ss__autocomplete__column': {
			alignContent: 'flex-start',
			minWidth: '1px',
		},
	});
	const sharedTabletStyles = css({
		alignContent: 'flex-start',
		[textSelectors]: {
			fontSize: acLayout == 'terms' ? custom.utils.convertPxToEm(12) : '',
		},
		[headerSelectors]: {
			fontSize: custom.utils.convertPxToEm(14),
		},
	});

	// terms wrapper styles
	const termsWrapperStyles = css({
		'.ss__autocomplete__terms-wrapper': {
			backgroundColor: 'transparent',
			padding: `${custom.spacing.x4}px`,
		},
	});

	// facets styles
	const facetsStyles = css({
		'.ss__autocomplete__facets-wrapper': {
			padding: `${custom.spacing.x4}px`,
		},
		'.ss__autocomplete__facets': {
			padding: 0,
			'.ss__facets': {
				'.ss__facet': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
					'&:last-of-type': {
						marginBottom: 0,
					},
					'&.ss__facet--showing-all': {
						'.ss__facet__options': {
							maxHeight: 'none',
							overflow: 'visible',
							padding: 0,
						},
					},
					'.ss__facet__header': {
						borderBottom: 0,
						'.ss__facet__header__inner': {
							fontSize: 'inherit',
							fontWeight: 'inherit',
							color: 'inherit',
						},
					},
					'.ss__facet__options': {
						'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
							padding: 0,
							margin: `0 0 ${custom.spacing.x1}px 0`,
							'&:last-of-type': {
								marginBottom: 0,
							},
						},
					},
				},
			},
		},
	});

	// content styles
	const contentStyles = css({
		'.ss__autocomplete__column:has(.ss__autocomplete__content)': {
			alignContent: 'flex-start',
		},
		'.ss__autocomplete__content': {
			overflow: 'visible',
			justifyContent: 'flex-start',
			padding: `${custom.spacing.x4}px`,
			borderTop: `1px solid ${custom.colors.gray02}`,
			'.ss__autocomplete__content-inner': {
				padding: 0,
			},
		},
	});

	// results layout styles
	const resultsLayoutStyles = css({
		gap: `${custom.spacing.x4}px`,
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: '75vh',
		'&::-webkit-scrollbar': {
			width: '8px',
			height: '8px',
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: custom.colors.gray01,
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: custom.colors.gray02,
		},
		'.ss__result': {
			'.ss__result__details': {
				gap: `${custom.spacing.x1}px`,
				'.ss__result__details__pricing': {
					'.ss__result__price': {
						fontSize: custom.utils.convertPxToEm(14),
					},
					'.ss__price--strike': {
						fontSize: custom.utils.convertPxToEm(12),
					},
				},
			},
		},
	});

	// results styles
	const resultsStyles = css({
		'.ss__autocomplete__content__results': {
			'.ss__results': {
				...resultsLayoutStyles,
			},
		},
	});

	// no results styles
	const noResultsStyles = css({
		'.ss__autocomplete__content__no-results': {
			'.ss__autocomplete__content__no-results__text': {
				p: {
					display: 'inline',
					margin: 0,
					padding: 0,
					'& ~ p': {
						paddingLeft: '4px',
					},
				},
			},
			'.ss__autocomplete__content__no-results__recommendations': {
				'.ss__recommendation-grid': {
					margin: `${custom.spacing.x4}px 0 0 0`,
				},
				'.ss__recommendation-grid__title': {
					textAlign: 'left',
				},
				'.ss__recommendation-grid__results': {
					...resultsLayoutStyles,
				},
			},
		},
	});

	// see more styles
	const seeMoreStyles = css({
		'.ss__autocomplete__button--see-more': {
			padding: `${custom.spacing.x4}px`,
			paddingTop: 0,
			height: 'auto',
			'&, &:hover': {
				backgroundColor: 'transparent',
				border: 0,
			},
			'.ss__button__content': {
				margin: 0,
				'.ss__icon': {
					position: 'relative',
					top: '0.5px',
					margin: `0 0 0 ${custom.spacing.x1}px`,
				},
			},
		},
	});
	const seeMoreTabletStyles = css({
		order: -1,
		textAlign: 'left',
		'.ss__button__content': {
			'.ss__icon': {
				top: '1.5px',
			},
		},
	});

	// standard styles
	const standardStyles = css([
		sharedStyles,
		{
			'.ss__autocomplete__column': {
				'&:has(.ss__autocomplete__terms-wrapper)': {
					flex: '1 0 200px',
					maxWidth: '200px',
				},
				'&:has(.ss__autocomplete__facets-wrapper)': {
					flex: '1 0 200px',
					maxWidth: '200px',
					marginRight: `-${custom.spacing.x4}px`,
				},
			},
			'.ss__autocomplete__terms-wrapper': {
				backgroundColor: custom.colors.gray01,
				height: '100%',
			},
			'.ss__terms-list': {
				display: 'block',
				'.ss__terms-list__row': {
					'&:first-of-type .ss__terms .ss__terms__title': {
						marginTop: `${custom.spacing.x2}px`,
					},
					'&:last-of-type .ss__terms .ss__terms__options': {
						marginBottom: `${custom.spacing.x2}px`,
					},
				},
				'.ss__terms': {
					'.ss__terms__title': {
						h5: {
							margin: 0,
							padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
						},
					},
					'.ss__terms__options': {
						display: 'block',
						margin: 0,
						'.ss__terms__option': {
							a: {
								padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
							},
						},
						'.ss__terms__option--active': {
							backgroundColor: custom.colors.white,
						},
					},
				},
			},
		},
		facetsStyles,
		contentStyles,
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
				'.ss__autocomplete__row:has(.ss__autocomplete__column)': {
					display: 'block',
					'.ss__autocomplete__column': {
						width: '100%',
						maxWidth: 'none',
					},
				},
				'.ss__autocomplete__column': {
					'&:has(.ss__autocomplete__facets-wrapper)': {
						marginRight: 0,
					},
				},
				'.ss__autocomplete__terms-wrapper': {
					backgroundColor: 'transparent',
					padding: `${custom.spacing.x4}px`,
				},
				'.ss__terms-list': {
					display: 'flex',
					'.ss__terms-list__row': {
						'&:first-of-type .ss__terms .ss__terms__title': {
							marginTop: 0,
						},
						'&:last-of-type .ss__terms .ss__terms__options': {
							marginBottom: 0,
						},
					},
					'.ss__terms': {
						'.ss__terms__title': {
							h5: {
								padding: 0,
								margin: `0 0 ${custom.spacing.x4}px 0`,
							},
						},
						'.ss__terms__options': {
							display: 'flex',
							'.ss__terms__option': {
								a: {
									padding: 0,
								},
							},
						},
					},
				},
				'.ss__autocomplete__facets-wrapper': {
					borderTop: `1px solid ${custom.colors.gray02}`,
				},
				'.ss__autocomplete__facets': {
					'.ss__facets': {
						gap: `0 ${custom.spacing.x4}px`,
						flexFlow: 'row nowrap',
						minWidth: '1px',
						'.ss__facet': {
							flex: '1 1 0%',
							minWidth: '1px',
							'&, &:last-of-type': {
								margin: 0,
							},
						},
					},
				},
				'.ss__autocomplete__button--see-more': {
					...seeMoreTabletStyles,
				},
			},
		},
	]);

	// mini styles
	const miniStyles = css([
		sharedStyles,
		termsWrapperStyles,
		contentStyles,
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
				'.ss__autocomplete__button--see-more': {
					...seeMoreTabletStyles,
				},
			},
		},
		{
			[`@media (max-width: ${custom.breakpoints.small}px)`]: {
				'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
					{
						gridTemplateColumns: `repeat(2, 1fr)`,
					},
			},
		},
	]);

	// terms styles
	const termsStyles = css([
		sharedStyles,
		termsWrapperStyles,
		contentStyles,
		{
			'.ss__autocomplete__content__no-results': {
				'.ss__autocomplete__content__no-results__text': {
					p: {
						display: 'inline',
						margin: 0,
						padding: 0,
						fontSize: custom.utils.convertPxToEm(14),
						'& ~ p': {
							paddingLeft: '4px',
						},
					},
				},
			},
		},
		seeMoreStyles,
		{
			[`@media (max-width: ${tabletBp}px)`]: {
				'&': sharedTabletStyles,
				'.ss__autocomplete__content__no-results': {
					'.ss__autocomplete__content__no-results__text': {
						p: {
							fontSize: custom.utils.convertPxToEm(12),
						},
					},
				},
				'.ss__autocomplete__button--see-more': {
					...seeMoreTabletStyles,
				},
			},
		},
	]);

	// return autocomplete styles
	if (acLayout == 'terms') {
		return termsStyles;
	} else if (acLayout == 'mini') {
		return miniStyles;
	} else {
		return standardStyles;
	}
};

// Autocomplete Layout component props
export const autocompleteLayout: ThemeComponent<'autocompleteLayout', AutocompleteLayoutProps, AutocompleteLayoutTemplatesLegalProps> = {
	default: {
		autocompleteLayout: {
			themeStyleScript: autocompleteLayoutStyleScript,
			contentTitle: 'Product Suggestions',
		},
	},
};
