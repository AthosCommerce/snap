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

	// radio list styles
	const radioListStyles = css({
		...custom.styles.boxSizing('radioList', props?.treePath, props?.name),
		'&, .ss__radio-list__options-wrapper, .ss__radio-list__title': {
			display: 'block',
		},
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
				lineHeight: 1.5,
				color: variables?.colors?.text,
				gap: `${custom.spacing.x2}px`,
				margin: `0 0 ${custom.spacing.x1}px 0`,
				padding: props?.hideOptionRadios ? `` : `0 0 0 ${radioSpacing}px`,
				'&:last-child': {
					marginBottom: 0,
				},
				'.ss__radio-list__option__label, .ss__radio-list__option__icon': {
					padding: 0,
				},
				'.ss__radio': {
					position: 'absolute',
					top: '1.5px',
					left: 0,
					'&:has(.ss__radio__input)': {
						top: '2.5px',
					},
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
		},
	});

	return radioListStyles;
};

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps, RadioListTemplatesLegalProps> = {
	default: {
		radioList: {
			themeStyleScript: radioListStyleScript,
		},
	},
};
