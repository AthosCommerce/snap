import { css } from '@emotion/react';
import type { LoadMoreProps, LoadMoreTemplatesLegalProps } from '../../../../components/Molecules/LoadMore';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = ({ color, theme }: LoadMoreProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__button': {
			'.ss__button__content': {
				display: 'inline-flex',
				alignItems: 'center',
				gap: '5px',
			},
		},
		// with no next page the button stays in place - faded like the theme's other disabled buttons, since the
		// component's 0.7 barely changes an outlined button
		'&.ss__load-more .ss__load-more__button--disabled': {
			opacity: 0.4,
		},

		// the track comes from the `backgroundColor` prop - the component's own selector outweighs this script
		'&.ss__load-more .ss__load-more__progress .ss__load-more__progress__indicator': {
			borderRadius: '2em',
			overflow: 'hidden',
			'.ss__load-more__progress__indicator__bar': {
				background: color || variables?.colors?.primary,
				borderRadius: '2em',
			},
		},
	});
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps, LoadMoreTemplatesLegalProps> = {
	default: {
		loadMore: {
			themeStyleScript: loadMoreStyleScript,
			backgroundColor: custom.colors.gray01,
		},
	},
};
