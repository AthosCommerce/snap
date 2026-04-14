import { h } from 'preact';

import { filters } from '@athoscommerce/snap-toolbox';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { FormattedNumberProps } from '../FormattedNumber/FormattedNumber';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<PriceProps> = ({ theme }) => {
	return css({
		color: theme?.variables?.colors?.primary,
		'&.ss__price--strike': {
			textDecoration: 'line-through',
			color: 'initial',
		},
	});
};

export function Price(properties: PriceProps) {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
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
		symbol,
		decimalPlaces,
		padDecimalPlaces,
		thousandsSeparator,
		decimalSeparator,
		symbolAfter,
		raw,
		className,
		internalClassName,
		customComponent,
	} = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.price || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	let formattedPrice: string | undefined;
	if (value) {
		formattedPrice = filters.currency(value, {
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
					{symbol && !symbolAfter ? <span className={'ss__price__symbol'}>{symbol}</span> : <></>}
					<span className={'ss__price__value'}>{formattedPrice}</span>
					{symbol && symbolAfter ? <span className={'ss__price__symbol'}>{symbol}</span> : <></>}
				</span>
			</CacheProvider>
		);
	} else {
		return null;
	}
}

export type PriceProps = PriceTemplatesLegalProps & ComponentProps<PriceProps>;
export interface PriceTemplatesLegalProps extends Omit<FormattedNumberProps, 'value' | 'themeStyleScript'> {
	value?: number;
	lineThrough?: boolean;
}

export type PriceNames = 'price' | 'msrp' | 'bundle-price' | 'bundle-msrp';
