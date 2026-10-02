import { css } from '@emotion/react';
import type { RadioListProps, RadioListTemplatesLegalProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const radioSpacing = custom.sizes.icon16 + custom.spacing.x2;

// CSS in JS style script for the RadioList component
const radioListStyleScript = (props: RadioListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		'&.ss__radio-list--disabled': {
			...custom.styles.disabled(),
		},
		'.ss__radio-list__title, .ss__radio-list__options-wrapper': {
			width: '100%',
		},
		'.ss__radio-list__title, .ss__radio-list__options-wrapper .ss__radio-list__option': {
			padding: 0,
		},
		'.ss__radio-list__title': {
			margin: `0 0 ${custom.spacing.x2}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '14px'),
		},
		'.ss__radio-list__options-wrapper': {
			'.ss__radio-list__option': {
				position: 'relative',
				...custom.styles.baseText(),
				gap: `${custom.spacing.x2}px`,
				padding: props?.hideOptionRadios ? `` : `0 0 0 ${radioSpacing}px`,
				'.ss__radio-list__option__label, .ss__radio-list__option__icon': {
					padding: 0,
				},
				'.ss__radio': {
					position: 'absolute',
					top: '2.5px',
					left: 0,
				},
				'.ss__radio-list__option__icon': {
					position: 'relative',
					top: '-1px',
				},
			},
			'.ss__radio-list__option--disabled': {
				...custom.styles.disabled(),
			},
			'.ss__radio-list__option--selected': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			// icon-only options have no checkbox, label or bold text to show selection - mute the rest
			...(props?.hideOptionRadios && props?.hideOptionLabels
				? { '.ss__radio-list__option:not(.ss__radio-list__option--selected) .ss__radio-list__option__icon': { fill: custom.colors.gray04 } }
				: {}),
		},
	});

	// list styles
	const radioListStyles = css([
		sharedStyles,
		{
			'&, .ss__radio-list__options-wrapper, .ss__radio-list__title': {
				display: 'block',
			},
			'.ss__radio-list__options-wrapper': {
				'.ss__radio-list__option': {
					margin: `0 0 ${custom.spacing.x1}px 0`,
					'&:last-child': {
						marginBottom: 0,
					},
				},
			},
		},
	]);

	// list horizontal styles
	const radioListHorizontalStyles = css([
		sharedStyles,
		{
			'&, .ss__radio-list__title': {
				display: 'block',
			},
			'.ss__radio-list__options-wrapper': {
				// icon-only options sit inline - label columns would spread them apart
				...(props?.hideOptionLabels
					? { display: 'flex', flexFlow: 'row wrap', gap: `${custom.spacing.x1}px ${custom.spacing.x2}px` }
					: custom.styles.columns()),
				'.ss__radio-list__option': {
					minWidth: '1px',
					margin: 0,
					'.ss__radio-list__option__label': {
						...custom.styles.textOverflow(),
					},
				},
			},
		},
	]);

	return props?.horizontal ? radioListHorizontalStyles : radioListStyles;
};

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps, RadioListTemplatesLegalProps> = {
	default: {
		radioList: {
			themeStyleScript: radioListStyleScript,
		},
	},
};
