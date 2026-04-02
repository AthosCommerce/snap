// import { css } from '@emotion/react';
import type { SwatchesProps, SwatchesTemplatesLegalProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';
// // CSS in JS style script for the Swatches component
// const swatchesStyleScript = () => {
// };

// Swatches component props
export const swatches: ThemeComponent<'swatches', SwatchesProps, SwatchesTemplatesLegalProps> = {
	default: {
		swatches: {
			// themeStyleScript: swatchesStyleScript,
		},
	},
};
