import { css } from '@emotion/react';
import type { GridProps, GridTemplatesLegalProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Grid component
const gridStyleScript = ({ theme }: Partial<GridProps>) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return css({
		'.ss__grid__title': {
			color: roles.structure,
		},
		'.ss__grid__options': {
			'.ss__grid__option': {
				border: `1px solid ${custom.colors.controlBorder}`,
				// rounded like the facet grid options
				borderRadius: '10px',
				// the inner square sizes from the option's height and overflows a capped width
				boxSizing: 'border-box',
				padding: 0,
				overflow: 'hidden',
				'.ss__grid__option__inner': {
					width: '100%',
					height: 'auto',
				},
				'.ss__image': {
					borderRadius: 'inherit',
				},
				'&.ss__grid__option--selected': {
					border: `2px solid ${roles.brand}`,
					fontWeight: 'bold',
				},
				'&.ss__grid__show-more-wrapper': {
					aspectRatio: '1 / 1',
					fontSize: '12px',
				},
			},
		},
		'.ss__grid__show-more-wrapper': {
			'.ss__grid__show-more, .ss__grid__show-less': {
				...custom.styles.activeText(roles.structure),
			},
		},
	});
};

// Grid component props
export const grid: ThemeComponent<'grid', GridProps, GridTemplatesLegalProps> = {
	default: {
		grid: {
			themeStyleScript: gridStyleScript,
			hideShowLess: true,
			overflowButtonInGrid: true,
		},
	},
};
