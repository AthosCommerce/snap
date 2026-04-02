import { css } from '@emotion/react';
import type { ImageProps, ImageTemplatesLegalProps } from '../../../../components/Atoms/Image';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Image component
const imageStyleScript = (props: ImageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&.ss__result__image': {
			position: 'relative',
			lineHeight: 0,
			height: 0,
			padding: '0 0 100% 0',
			overflow: 'hidden',
			'&, img': {
				display: 'block',
			},
			img: {
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				margin: 'auto',
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				maxHeight: '100%',
				border: 0,
				objectFit: 'contain',
				objectPosition: 'center center',
			},
		},
	});
};

// Image component props
export const image: ThemeComponent<'image', ImageProps, ImageTemplatesLegalProps> = {
	default: {
		image: {
			themeStyleScript: imageStyleScript,
		},
	},
};
