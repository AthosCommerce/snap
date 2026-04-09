import { css } from '@emotion/react';
import type { AutocompleteLayoutProps } from '../../../../components/Organisms/AutocompleteLayout';
import { custom } from '../../custom';

// static variables
const headerSelectors =
	'.ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__button--see-more .ss__button__content, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__title';
const activeSelectors =
	'.ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__button--see-more:hover .ss__button__content';

// CSS in JS style script for the Autocomplete Layout component
export const autocompleteSharedStyleScript = (props: AutocompleteLayoutProps, template: string) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop as number;
	const tabletBp = variables?.breakpoints?.tablet as number;
	const mobileBp = variables?.breakpoints?.mobile as number;

	// determine template being used
	const isFixed = template == 'autocompleteFixed';
	const isModal = template == 'autocompleteModal';
	const isSlideout = template == 'autocompleteSlideout';

	// get autocomplete layout
	const acLayout = props?.layout ? props.layout : 'standard';

	// shared styles
	const sharedStyles = css({
		padding: isSlideout ? 0 : `${custom.spacing.x4}px`,
		gap: `${custom.spacing.x4}px`,
		border: isSlideout ? 0 : `1px solid ${custom.colors.gray02}`,
		backgroundColor: custom.colors.white,
		'div, p, .ss__button': {
			fontSize: '12px',
		},
		'div:not(.ss__button, .ss__rating__icons, .ss__rating__icons .ss__rating__stars .ss__rating__stars__star), p': {
			lineHeight: 1.5,
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
			...custom.styles.headerText(variables?.colors?.secondary, '14px'),
			lineHeight: 1.2,
		},
		[activeSelectors]: {
			...custom.styles.activeText(variables?.colors?.primary),
		},
	});

	// shared layout styles
	const sharedLayoutStyles = css({
		alignContent: 'flex-start',
		'& > .ss__autocomplete__row': {
			flex: isSlideout ? `1 1 100%` : `1 1 calc(100% + ${custom.spacing.x8}px)`,
			minWidth: '1px',
			padding: isSlideout ? `0 0 ${custom.spacing.x4}px 0` : `0 ${custom.spacing.x4}px ${custom.spacing.x4}px ${custom.spacing.x4}px`,
			margin: isSlideout ? 0 : `0 -${custom.spacing.x4}px`,
			borderBottom: `1px solid ${custom.colors.gray02}`,
			'&:last-child': {
				borderBottomWidth: 0,
				paddingBottom: 0,
			},
		},
	});

	// shared tablet styles
	const sharedDesktopStyles = css({
		[headerSelectors]: {
			fontSize: '16px',
		},
		'.ss__terms-list .ss__terms .ss__terms__options .ss__terms__option a': {
			fontSize: '16px',
		},
	});

	// terms wrapper styles
	const termsWrapperStyles = css({
		'.ss__autocomplete__terms-wrapper': {
			backgroundColor: 'transparent',
		},
	});

	// facets styles
	const facetsStyles = css({
		'.ss__autocomplete__facets': {
			padding: 0,
			'.ss__facets': {
				flexFlow: 'row nowrap',
				gap: `${custom.spacing.x4}px`,
				'.ss__facet': {
					flex: '1 1 0%',
					margin: 0,
					'.ss__facet__header': {
						borderBottom: 0,
					},
					'.ss__facet__options': {
						'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
							padding: 0,
							margin: `0 0 ${custom.spacing.x1}px 0`,
							fontSize: '12px',
							'&:last-child': {
								marginBottom: 0,
							},
						},
						'.ss__facet__facet-grid-options .ss__facet-grid-options__option': {
							display: 'flex',
						},
					},
				},
			},
			'.ss__banner': {
				display: 'none',
				margin: `${custom.spacing.x4}px 0 0 0`,
			},
		},
	});

	// content styles
	const contentStyles = css({
		'.ss__autocomplete__content': {
			overflow: 'visible',
			'.ss__autocomplete__content-inner': {
				padding: 0,
				'& > *': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
				},
			},
		},
	});

	// results layout styles
	const resultsLayoutStyles = css({
		overflowY: isFixed ? 'auto' : 'hidden',
		overflowX: 'hidden',
		maxHeight: isFixed ? '54vh' : '',
		...custom.styles.scrollbar(),
	});

	// results styles
	const resultsStyles = css({
		'.ss__autocomplete__content__results': {
			'.ss__results': {
				...resultsLayoutStyles,
			},
			'.ss__results .ss__result.ss__result--grid': {
				...custom.styles.resultCompact('grid', '', 12),
			},
			'.ss__results .ss__result.ss__result--list': {
				...custom.styles.resultCompact('', '0 0 80px', 12),
			},
		},
	});

	// mobile results styles
	const resultsSmallStyles = css({
		'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
			{
				gridTemplateColumns: 'repeat(2, 1fr)',
				[`& > *:nth-child(n + ${isSlideout ? 5 : 3})`]: {
					display: 'none',
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
					fontSize: '14px',
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
				'.ss__recommendation-grid__results .ss__result.ss__result--grid': {
					...custom.styles.resultCompact('grid', '', 12),
				},
				'.ss__recommendation-grid__results .ss__result.ss__result--list': {
					...custom.styles.resultCompact('', '0 0 80px', 12),
				},
			},
		},
	});

	// see more styles
	const seeMoreStyles = css({
		'.ss__autocomplete__button--see-more': {
			order: -1,
			padding: 0,
			height: 'auto',
			lineHeight: 1,
			'&, &:hover': {
				backgroundColor: 'transparent',
				border: 0,
			},
			'.ss__button__content': {
				margin: 0,
			},
		},
	});

	// see more mobile styles
	const seeMoreMobileStyles = css({
		'.ss__autocomplete__button--see-more': {
			order: 0,
		},
	});

	// standard styles
	const standardStyles = css([
		sharedStyles,
		{
			alignContent: 'flex-start',
			'& > .ss__autocomplete__row': {
				gap: `${custom.spacing.x4}px`,
				flexWrap: 'wrap',
				'.ss__autocomplete__column': {
					alignContent: 'flex-start',
					minWidth: '1px',
					maxWidth: 'none',
					flex: isSlideout ? `1 1 100%` : `1 1 calc(100% + ${custom.spacing.x8}px)`,
					margin: `0 -${custom.spacing.x4}px`,
					padding: `0 ${custom.spacing.x4}px`,
					paddingBottom: `${custom.spacing.x4}px`,
					borderBottom: `1px solid ${custom.colors.gray02}`,
					'&:last-child': {
						paddingBottom: 0,
						borderBottomWidth: 0,
					},
					'.ss__autocomplete__row:has(.ss__autocomplete__button--see-more)': {
						minWidth: '1px',
						flex: '1 1 100%',
						padding: `${custom.spacing.x4}px ${custom.spacing.x4}px 0 ${custom.spacing.x4}px`,
						margin: `0 -${custom.spacing.x4}px`,
						borderTop: `1px solid ${custom.colors.gray02}`,
					},
				},
			},
		},
		termsWrapperStyles,
		facetsStyles,
		contentStyles,
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
				'.ss__autocomplete__content__results .ss__results.ss__results-list': {
					gap: `${custom.spacing.x2}px`,
				},
			},
		},
		{
			[`${custom.utils.getBp(custom.breakpoints.small, 'max')}`]: {
				...resultsSmallStyles,
			},
		},
		{
			[`${custom.utils.getBp(mobileBp)}`]: {
				...seeMoreMobileStyles,
			},
		},
		{
			[`${custom.utils.getBp(tabletBp)}`]: {
				'& > .ss__autocomplete__row': {
					'.ss__autocomplete__column': {
						flex: '1 1 0%',
						paddingBottom: 0,
						borderBottomWidth: 0,
						'&:has(.ss__autocomplete__terms-wrapper)': {
							flex: isSlideout ? `1 1 100%` : `1 1 calc(100% + ${custom.spacing.x8}px)`,
							paddingBottom: `${custom.spacing.x4}px`,
							borderBottomWidth: '1px',
						},
						'&:has(.ss__autocomplete__facets-wrapper)': {
							flex: `0 0 ${isModal ? 300 : 200}px`,
						},
						'.ss__autocomplete__row:has(.ss__autocomplete__button--see-more)': {
							borderTop: 0,
							padding: 0,
							margin: 0,
						},
					},
				},
				'.ss__autocomplete__facets': {
					'.ss__facets': {
						flexWrap: 'wrap',
						'.ss__facet': {
							flex: '1 1 100%',
						},
					},
					'.ss__banner': {
						display: 'block',
					},
				},
			},
		},
		{
			[`${custom.utils.getBp(desktopBp)}`]: {
				'&': sharedDesktopStyles,
				'& > .ss__autocomplete__row': {
					'.ss__autocomplete__column': {
						'&:has(.ss__autocomplete__terms-wrapper)': {
							paddingBottom: 0,
							borderBottomWidth: 0,
						},
						'&:has(.ss__autocomplete__terms-wrapper), &:has(.ss__autocomplete__facets-wrapper)': {
							flex: `0 0 ${isModal ? 250 : 220}px`,
						},
					},
				},
				'.ss__autocomplete__content__results .ss__results': {
					maxHeight: isFixed ? '60vh' : '',
				},
			},
		},
	]);

	// mini styles
	const miniStyles = css([
		sharedStyles,
		sharedLayoutStyles,
		termsWrapperStyles,
		contentStyles,
		{
			'.ss__autocomplete__content .ss__autocomplete__content-inner > *:last-child': {
				marginBottom: 0,
			},
		},
		resultsStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
				'.ss__autocomplete__content__results .ss__results.ss__results-list': {
					gap: `${custom.spacing.x2}px`,
				},
			},
		},
		{
			[`${custom.utils.getBp(custom.breakpoints.small, 'max')}`]: {
				...resultsSmallStyles,
			},
		},
		{
			[`${custom.utils.getBp(mobileBp)}`]: {
				...seeMoreMobileStyles,
			},
		},
		{
			[`${custom.utils.getBp(desktopBp)}`]: {
				'&': sharedDesktopStyles,
			},
		},
	]);

	// terms styles
	const termsStyles = css([
		sharedStyles,
		sharedLayoutStyles,
		termsWrapperStyles,
		contentStyles,
		noResultsStyles,
		seeMoreStyles,
		{
			[`${custom.utils.getBp(mobileBp)}`]: {
				...seeMoreMobileStyles,
			},
		},
		{
			[`${custom.utils.getBp(desktopBp)}`]: {
				'&': sharedDesktopStyles,
				'.ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__text p': {
					fontSize: '16px',
				},
			},
		},
	]);

	if (acLayout == 'terms') {
		return termsStyles;
	} else if (acLayout == 'mini') {
		return miniStyles;
	} else {
		return standardStyles;
	}
};
