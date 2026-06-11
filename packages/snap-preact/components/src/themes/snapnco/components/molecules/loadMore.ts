import { css } from '@emotion/react';
import type { LoadMoreProps, LoadMoreTemplatesLegalProps } from '../../../../components/Molecules/LoadMore';
import { colord } from 'colord';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = ({ color, backgroundColor, theme }: LoadMoreProps) => {
	const variables = theme?.variables;

	const barColour = colord(color || variables?.colors.accent || '#000000');
	const backgroundColour = backgroundColor ? colord(backgroundColor) : setLightness(barColour.toHex(), 90);

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
				background: backgroundColour.toHex(),
				'.ss__load-more__progress__indicator__bar': {
					background: barColour.toHex(),
				},
			},
		},
	});
};

const setLightness = (colorValue: string, lightness: number) => {
	const hsl = colord(colorValue).toHsl();
	return colord({ ...hsl, l: lightness });
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps, LoadMoreTemplatesLegalProps> = {
	default: {
		loadMore: {
			themeStyleScript: loadMoreStyleScript,
		},
	},
};
