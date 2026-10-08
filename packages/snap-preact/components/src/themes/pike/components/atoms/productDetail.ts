import { css } from '@emotion/react';
import type { ProductDetailProps, ProductDetailTemplatesLegalProps } from '../../../../components/Atoms/ProductDetail';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the ProductDetail component
const productDetailStyleScript = (props: ProductDetailProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// a single product field - base text; rich (html) values drop their outer paragraph margins
	const productDetailStyles = css({
		...custom.styles.baseText(),
		'p:first-of-type': {
			marginTop: 0,
		},
		'p:last-of-type': {
			marginBottom: 0,
		},
	});

	return productDetailStyles;
};

// ProductDetail component props
export const productDetail: ThemeComponent<'productDetail', ProductDetailProps, ProductDetailTemplatesLegalProps> = {
	default: {
		productDetail: {
			themeStyleScript: productDetailStyleScript,
		},
	},
};
