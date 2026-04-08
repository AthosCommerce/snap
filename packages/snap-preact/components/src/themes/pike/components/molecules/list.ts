import { css } from '@emotion/react';
import type { ListProps, ListTemplatesLegalProps } from '../../../../components/Molecules/List';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const checkboxSpacing = custom.sizes.icon16 + custom.spacing.x2;

// CSS in JS style script for the List component
const listStyleScript = (props: ListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// shared styles
	const sharedStyles = css({
		...custom.styles.boxSizing('list', props?.treePath, props?.name),
		'&.ss__list--disabled': {
			...custom.styles.disabled(),
		},
		'.ss__list__title, .ss__list__options': {
			width: '100%',
		},
		'.ss__list__title, .ss__list__options .ss__list__option': {
			padding: 0,
		},
		'.ss__list__title': {
			margin: `0 0 ${custom.spacing.x2}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '14px'),
		},
		'.ss__list__options': {
			'.ss__list__option': {
				position: 'relative',
				lineHeight: 1.5,
				color: variables?.colors?.text,
				gap: `${custom.spacing.x2}px`,
				padding: props?.hideOptionCheckboxes ? `` : `0 0 0 ${checkboxSpacing}px`,
				'.ss__list__option__label, .ss__list__option__icon': {
					padding: 0,
				},
				'.ss__checkbox': {
					position: 'absolute',
					top: '1.5px',
					left: 0,
				},
				'.ss__list__option__icon': {
					position: 'relative',
					top: '-1px',
				},
			},
			'.ss__list__option--disabled': {
				...custom.styles.disabled(),
			},
			'.ss__list__option--selected': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
		},
	});

	// list styles
	const listStyles = css([
		sharedStyles,
		{
			'&, .ss__list__options, .ss__list__title': {
				display: 'block',
			},
			'.ss__list__options': {
				'.ss__list__option': {
					margin: `0 0 ${custom.spacing.x1}px 0`,
					'&:last-child': {
						marginBottom: 0,
					},
				},
			},
		},
	]);

	// list horizontal styles
	const listHorizontalStyles = css([
		sharedStyles,
		{
			'&, .ss__list__title': {
				display: 'block',
			},
			'.ss__list__options': {
				flexFlow: 'row wrap',
				gap: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
				'.ss__list__option': {
					flex: '0 1 auto',
					width: `calc((100% - ${custom.spacing.x2}px) / 2)`,
					minWidth: '1px',
					margin: 0,
					'.ss__list__option__label': {
						...custom.styles.textOverflow(),
					},
				},
			},
		},
		{
			[`${custom.utils.getBp(mobileBp)}`]: {
				'.ss__list__options .ss__list__option': {
					width: `calc((100% - ${custom.spacing.x2 * 2}px) / 3)`,
				},
			},
		},
		{
			[`${custom.utils.getBp(tabletBp)}`]: {
				'.ss__list__options .ss__list__option': {
					width: `calc((100% - ${custom.spacing.x2 * 3}px) / 4)`,
				},
			},
		},
	]);

	return props?.horizontal ? listHorizontalStyles : listStyles;
};

// List component props
export const list: ThemeComponent<'list', ListProps, ListTemplatesLegalProps> = {
	default: {
		list: {
			themeStyleScript: listStyleScript,
		},
	},
};
