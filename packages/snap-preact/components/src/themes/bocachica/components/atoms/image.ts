import { css } from '@emotion/react';
import type { ImageProps, ImageTemplatesLegalProps } from '../../../../components/Atoms/Image';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Image component
const imageStyleScript = ({ theme }: ImageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Image component props
export const image: ThemeComponent<'image', ImageProps, ImageTemplatesLegalProps> = {
	default: {
		image: {
			themeStyleScript: imageStyleScript,
		},
	},
};
