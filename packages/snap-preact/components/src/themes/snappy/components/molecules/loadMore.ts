import { css } from '@emotion/react';
import type { LoadMoreProps, LoadMoreTemplatesLegalProps } from '../../../../components/Molecules/LoadMore';
import Color from 'color';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = ({ color, backgroundColor, theme }: LoadMoreProps) => {
	const variables = theme?.variables;

	const barColour = new Color(color || variables?.colors.accent || undefined);
	const backgroundColour = backgroundColor ? new Color(backgroundColor || undefined) : barColour.lightness(90);

	return css({
		'.ss__button': {
			'.ss__button__content': {
				display: 'inline-flex',
				alignItems: 'center',
				gap: '5px',
			},
		},

		'.ss__load-more__progress': {
			'.ss__load-more__progress__indicator': {
				background: backgroundColour.hex(),
				'.ss__load-more__progress__indicator__bar': {
					background: barColour.hex(),
				},
			},
		},
	});
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps, LoadMoreTemplatesLegalProps> = {
	default: {
		loadMore: {
			themeStyleScript: loadMoreStyleScript,
		},
	},
};
