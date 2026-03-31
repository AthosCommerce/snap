import { css } from '@emotion/react';
import type { BadgeTextProps, BadgeTextTemplatesLegalProps } from '../../../../components/Atoms/BadgeText';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeText component
const badgeTextStyleScript = (props: BadgeTextProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// badge text styles
	const badgeTextStyles = css({
		padding: 0,
		...custom.styles.boxSizing('badgeText', props?.treePath, props?.name),
		span: {
			...custom.styles.badgeText(12),
		},
	});

	return badgeTextStyles;
};

// BadgeText component props
export const badgeText: ThemeComponent<'badgeText', BadgeTextProps, BadgeTextTemplatesLegalProps> = {
	default: {
		badgeText: {
			themeStyleScript: badgeTextStyleScript,
		},
	},
};
