import { css } from '@emotion/react';
import type { NoResultsProps, NoResultsTemplatesLegalProps } from '../../../../components/Organisms/NoResults';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the NoResults component
const noResultsStyleScript = (props: NoResultsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// no results styles
	const noResultsStyles = css({
		...custom.styles.boxSizing('noResults', props?.treePath, props?.name),
		'& > *:not(.ss__no-results__recommendations)': {
			'h1, h2, h3, h4, h5, h6, ul': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
			},
			'h1, h2, h3, h4, h5, h6, .ss__no-results__recommendations .ss__recommendation .ss__recommendation__title': {
				...custom.styles.headerText(variables?.colors?.secondary, '20px'),
			},
			'ul li, p': {
				...custom.styles.baseText(variables?.colors?.text),
			},
			a: {
				color: variables?.colors?.primary,
				'&:hover': {
					color: variables?.colors?.secondary,
				},
			},
			ul: {
				padding: 0,
				marginLeft: `${custom.spacing.x8}px`,
				listStyle: 'none',
				li: {
					listStyle: 'disc',
					margin: `0 0 ${custom.spacing.x1}px 0`,
					'&:last-child': {
						marginBottom: 0,
					},
				},
			},
		},
		'.ss__no-results__contact': {
			'.ss__no-results__contact__title': {
				...custom.styles.baseText(variables?.colors?.text),
				fontWeight: 'normal',
			},
		},
		'.ss__no-results__recommendations': {
			'.ss__recommendation': {
				margin: `${custom.spacing.x4}px 0`,
				'.ss__recommendation__title': {
					fontSize: '20px',
				},
			},
		},
	});

	return noResultsStyles;
};

// NoResults component props
export const noResults: ThemeComponent<'noResults', NoResultsProps, NoResultsTemplatesLegalProps> = {
	default: {
		noResults: {
			themeStyleScript: noResultsStyleScript,
			contactsTitleText: `Still can't find what you're looking for? <a href="/contact-us">Contact us</a>.`,
		},
	},
};
