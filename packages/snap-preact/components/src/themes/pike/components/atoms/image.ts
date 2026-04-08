import { css } from '@emotion/react';
import type { ImageProps, ImageTemplatesLegalProps } from '../../../../components/Atoms/Image';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Image component
const imageStyleScript = (props: ImageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// image styles
	const imageStyles = css({
		...custom.styles.boxSizing('image', props?.treePath, props?.name),
		'&, img': {
			lineHeight: 0,
		},
		img: {
			border: 0,
		},
	});

	return imageStyles;
};

// Image component props
export const image: ThemeComponent<'image', ImageProps, ImageTemplatesLegalProps> = {
	default: {
		image: {
			themeStyleScript: imageStyleScript,
		},
	},
};
