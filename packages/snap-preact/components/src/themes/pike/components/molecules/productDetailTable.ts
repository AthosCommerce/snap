import { css } from '@emotion/react';
import type { ProductDetailTableProps, ProductDetailTableTemplatesLegalProps } from '../../../../components/Molecules/ProductDetailTable';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the ProductDetailTable component
const productDetailTableStyleScript = (props: ProductDetailTableProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// label / value rows on gray02 rules - labels are bold (like filter labels), not uppercase
	const productDetailTableStyles = css({
		...custom.styles.baseText(),
		tr: {
			borderBottom: `1px solid ${custom.colors.gray02}`,
		},
		'th, td': {
			padding: `${custom.spacing.x2}px 0`,
		},
		th: {
			paddingRight: `${custom.spacing.x4}px`,
			fontSize: 'inherit',
			fontWeight: custom.fonts.weight01,
			color: 'inherit',
			textTransform: 'none',
			letterSpacing: 'normal',
		},
		td: {
			color: 'inherit',
			'p:first-of-type': {
				marginTop: 0,
			},
			'p:last-of-type': {
				marginBottom: 0,
			},
		},
	});

	return productDetailTableStyles;
};

// ProductDetailTable component props
export const productDetailTable: ThemeComponent<'productDetailTable', ProductDetailTableProps, ProductDetailTableTemplatesLegalProps> = {
	default: {
		productDetailTable: {
			themeStyleScript: productDetailTableStyleScript,
		},
	},
};
