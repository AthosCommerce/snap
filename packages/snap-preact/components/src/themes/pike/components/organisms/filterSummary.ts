import { css } from '@emotion/react';
import type { FilterSummaryProps, FilterSummaryTemplatesLegalProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = (props: FilterSummaryProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isSidebar =
		props?.treePath && (props.treePath.includes('sidebar') || props.treePath.includes('mobileSidebar') || props.treePath.includes('storybook'))
			? true
			: false;

	// filter summary styles
	const filterSummaryStyles = isSidebar
		? {
				display: 'block',
		  }
		: {
				display: 'flex',
				alignItems: 'center',
				gap: `${custom.spacing.x2}px`,
		  };

	// header styles
	const headerStyles = isSidebar
		? {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				padding: `0 0 ${custom.spacing.x2}px 0`,
				borderBottom: `2px solid ${variables?.colors?.primary}`,
				...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		  }
		: {
				padding: 0,
				...custom.styles.headerText(variables?.colors?.secondary, '14px'),
		  };

	// shared styles
	const sharedStyles = css({
		width: 'auto',
		...filterSummaryStyles,
		...custom.styles.boxSizing('filterSummary', props?.treePath, props?.name),
		'.ss__filter-summary__title': {
			...headerStyles,
		},
		'.ss__filter-summary__filters': {
			margin: 0,
		},
	});

	// inline filter summary styles
	// note: inline is a grid type summary style
	const inlineFilterSummaryStyles = css([
		sharedStyles,
		{
			'&.ss__filter-summary--inline': {
				'.ss__filter-summary__filters': {
					gap: `${custom.spacing.x2}px`,
					'.ss__filter': {
						'.ss__filter__button': {
							...custom.styles.box('', `${custom.spacing.x1}px ${custom.spacing.x2}px`),
							'.ss__button__content': {
								'.ss__filter__button__icon': {
									marginRight: `${custom.spacing.x1}px`,
								},
							},
						},
					},
				},
			},
		},
	]);

	// list filter summary styles
	const listFilterSummaryStyles = css([
		sharedStyles,
		{
			'&.ss__filter-summary--list': {
				'&, .ss__filter-summary__filters': {
					display: isSidebar ? '' : 'flex',
				},
				'.ss__filter-summary__filters': {
					'.ss__filter': {
						margin: isSidebar ? `0 0 ${custom.spacing.x1}px 0` : 0,
						'&:last-child': {
							marginBottom: isSidebar ? 0 : '',
						},
						'.ss__filter__button': {
							'.ss__button__content': {
								padding: `0 0 0 ${custom.sizes.icon16 + custom.spacing.x2}px`,
								'.ss__filter__button__icon': {
									position: 'absolute',
									top: '1.5px',
									left: 0,
									...custom.styles.box('', '3px'),
									width: `${custom.sizes.icon16}px`,
									height: `${custom.sizes.icon16}px`,
								},
							},
						},
					},
				},
			},
		},
	]);

	return props?.type == 'list' ? listFilterSummaryStyles : inlineFilterSummaryStyles;
};

// FilterSummary component props
export const filterSummary: ThemeComponent<'filterSummary', FilterSummaryProps, FilterSummaryTemplatesLegalProps> = {
	default: {
		filterSummary: {
			themeStyleScript: filterSummaryStyleScript,
			clearAllIcon: custom.icons.close,
			filterIcon: custom.icons.close,
		},
	},
};
