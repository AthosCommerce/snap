import { css } from '@emotion/react';
import type { SkeletonProps, SkeletonTemplatesLegalProps } from '../../../../components/Atoms/Skeleton';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Skeleton component
const skeletonStyleScript = (props: SkeletonProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// skeleton styles
	const skeletonStyles = css({
		...custom.styles.boxSizing('skeleton', props?.treePath, props?.name),
	});

	return skeletonStyles;
};

// Skeleton component props
export const skeleton: ThemeComponent<'skeleton', SkeletonProps, SkeletonTemplatesLegalProps> = {
	default: {
		skeleton: {
			themeStyleScript: skeletonStyleScript,
			backgroundColor: custom.colors.gray01,
			animatedColor: custom.colors.gray02,
		},
	},
};
