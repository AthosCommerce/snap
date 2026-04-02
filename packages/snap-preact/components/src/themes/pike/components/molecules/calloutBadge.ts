import { css } from '@emotion/react';
import type { CalloutBadgeProps, CalloutBadgeTemplatesLegalProps } from '../../../../components/Molecules/CalloutBadge';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const calloutBadgeStyleScript = (props: CalloutBadgeProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// callout badge styles
	const calloutBadgeStyles = css({
		gap: `${custom.spacing.x2}px`,
		...custom.styles.boxSizing('calloutBadge', props?.treePath, props?.name),
	});

	return calloutBadgeStyles;
};

// CalloutBadge component props
export const calloutBadge: ThemeComponent<'calloutBadge', CalloutBadgeProps, CalloutBadgeTemplatesLegalProps> = {
	default: {
		calloutBadge: {
			themeStyleScript: calloutBadgeStyleScript,
		},
	},
};
