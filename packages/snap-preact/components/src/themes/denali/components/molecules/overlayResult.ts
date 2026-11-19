import { css } from '@emotion/react';
import type { OverlayResultProps, OverlayResultTemplatesLegalProps } from '../../../../components/Molecules/OverlayResult';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the OverlayResult component
const overlayResultStyleScript = ({ theme }: OverlayResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({
		// rounded like the Result component's images - the component's overflow: hidden clips the image and the overlay to the corners
		borderRadius: '20px',
		// the pill keeps its light fill on the dark overlay - its text stays dark instead of inheriting the overlay's white
		'.ss__overlay-result__details .ss__variant-selection__dropdown .ss__dropdown__button': {
			color: custom.colors.black,
		},
	});
};

// OverlayResult component props
export const overlayResult: ThemeComponent<'overlayResult', OverlayResultProps, OverlayResultTemplatesLegalProps> = {
	default: {
		overlayResult: {
			themeStyleScript: overlayResultStyleScript,
		},
	},
};
