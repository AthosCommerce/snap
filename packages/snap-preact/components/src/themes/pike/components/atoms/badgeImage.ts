import { css } from '@emotion/react';
import type { BadgeImageProps, BadgeImageTemplatesLegalProps } from '../../../../components/Atoms/BadgeImage';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeImage component
const badgeImageStyleScript = (props: BadgeImageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// badge image styles
	const badgeImageStyles = css({
		lineHeight: 0,
		...custom.styles.boxSizing('badgeImage', props?.treePath, props?.name),
	});

	return badgeImageStyles;
};

// BadgeImage component props
export const badgeImage: ThemeComponent<'badgeImage', BadgeImageProps, BadgeImageTemplatesLegalProps> = {
	default: {
		badgeImage: {
			themeStyleScript: badgeImageStyleScript,
		},
	},
};
