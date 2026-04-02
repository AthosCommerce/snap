import { css } from '@emotion/react';
import type { LoadMoreProps, LoadMoreTemplatesLegalProps } from '../../../../components/Molecules/LoadMore';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = (props: LoadMoreProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const borderColor = props?.backgroundColor != custom.colors.gray01 ? custom.utils.darkenColor(props.backgroundColor, 0.25) : custom.colors.gray02;

	// load more styles
	const loadMoreStyles = css({
		...custom.styles.boxSizing('loadMore', props?.treePath, props?.name),
		'&.ss__load-more': {
			'&, .ss__load-more__progress': {
				gap: `${custom.spacing.x2}px`,
			},
			'.ss__load-more__icon': {
				margin: 0,
			},
			'.ss__load-more__progress': {
				'.ss__load-more__progress__indicator': {
					margin: '0 auto',
					border: `1px solid ${borderColor}`,
					...custom.styles.borderRadius(5),
					'.ss__load-more__progress__indicator__bar': {
						margin: '-1px',
					},
				},
				'.ss__load-more__progress__text': {
					color: variables?.colors?.text,
				},
			},
		},
	});

	return loadMoreStyles;
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps, LoadMoreTemplatesLegalProps> = {
	default: {
		loadMore: {
			themeStyleScript: loadMoreStyleScript,
			color: custom.colors.primary,
			backgroundColor: custom.colors.gray01,
		},
		'loadMore icon': {
			color: custom.colors.primary,
		},
		'loadMore button icon': {
			color: 'currentColor',
		},
	},
};
