import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { filters } from '@athoscommerce/snap-toolbox';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { FormattedNumberProps } from '../FormattedNumber/FormattedNumber';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useCustomComponentOverride } from '../../../hooks';

const defaultStyles: StyleScript<PriceProps> = ({ theme }) => {
	return css({
		color: theme?.variables?.colors?.primary,
		'&.ss__price--strike': {
			textDecoration: 'line-through',
			color: 'initial',
		},
	});
};

export const Price = observer((properties: PriceProps) => {
	const globalTheme = useTheme() as Theme;
	const globalTreePath = useTreePath();

	const defaultProps: Partial<PriceProps> = {
		symbol: '$',
		decimalPlaces: 2,
		padDecimalPlaces: true,
		thousandsSeparator: ',',
		decimalSeparator: '.',
		symbolAfter: false,
		lineThrough: false,
		treePath: globalTreePath,
	};

	const props = mergeProps('price', globalTheme, defaultProps, properties);

	const {
		lineThrough,
		value,
		format,
		symbol,
		decimalPlaces,
		padDecimalPlaces,
		thousandsSeparator,
		decimalSeparator,
		symbolAfter,
		raw,
		className,
		internalClassName,
	} = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('price', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	let formattedPrice: string | undefined;
	if (value) {
		formattedPrice = format
			? format(value)
			: filters.currency(value, {
					symbol: '',
					decimalPlaces,
					padDecimalPlaces,
					thousandsSeparator,
					decimalSeparator,
			  });
	}

	const styling = mergeStyles<PriceProps>(props, defaultStyles);

	if (formattedPrice) {
		return raw ? (
			<>{formattedPrice}</>
		) : (
			<CacheProvider>
				<span {...styling} className={classnames('ss__price', { 'ss__price--strike': lineThrough }, className, internalClassName)}>
					{!format && symbol && !symbolAfter ? <span className={'ss__price__symbol'}>{symbol}</span> : <></>}
					<span className={'ss__price__value'}>{formattedPrice}</span>
					{!format && symbol && symbolAfter ? <span className={'ss__price__symbol'}>{symbol}</span> : <></>}
				</span>
			</CacheProvider>
		);
	} else {
		return null;
	}
});

export type PriceProps = PriceTemplatesLegalProps & ComponentProps<PriceProps>;
export interface PriceTemplatesLegalProps extends Omit<FormattedNumberProps, 'value' | 'themeStyleScript'> {
	value?: number;
	lineThrough?: boolean;
	format?: (number: number | string) => string;
}

export type PriceNames = 'price' | 'msrp' | 'bundle-price' | 'bundle-msrp';
