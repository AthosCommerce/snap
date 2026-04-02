import { css } from '@emotion/react';
import type { BadgeRectangleProps, BadgeRectangleTemplatesLegalProps } from '../../../../components/Atoms/BadgeRectangle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the BadgeRectangle component
const badgeRectangleStyleScript = (props: BadgeRectangleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// badge rectangle styles
	const badgeRectangleStyles = css({
		padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
		...custom.styles.boxSizing('badgeRectangle', props?.treePath, props?.name),
		span: {
			...custom.styles.badgeText(12),
		},
	});

	return badgeRectangleStyles;
};

// BadgeRectangle component props
export const badgeRectangle: ThemeComponent<'badgeRectangle', BadgeRectangleProps, BadgeRectangleTemplatesLegalProps> = {
	default: {
		badgeRectangle: {
			themeStyleScript: badgeRectangleStyleScript,
		},
	},
};
