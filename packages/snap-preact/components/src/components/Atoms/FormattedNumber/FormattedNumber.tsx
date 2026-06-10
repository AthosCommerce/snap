import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import { filters } from '@athoscommerce/snap-toolbox';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useNamedComponentOverride } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<FormattedNumberProps> = () => {
	return css({});
};

export function FormattedNumber(properties: FormattedNumberProps) {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<FormattedNumberProps> = {
		symbol: '',
		decimalPlaces: 3,
		padDecimalPlaces: true,
		thousandsSeparator: '',
		decimalSeparator: '.',
		symbolAfter: true,
		treePath: globalTreePath,
	};

	const props = mergeProps('formattedNumber', globalTheme, defaultProps, properties);

	const {
		value,
		symbol,
		decimalPlaces,
		padDecimalPlaces,
		thousandsSeparator,
		decimalSeparator,
		symbolAfter,
		className,
		internalClassName,
		raw,
		customComponent,
	} = props;

	const overrideComponentMap = (snap as SnapTemplates)?.templates?.library.import.component.formattedNumber || {};
	const { ComponentOverride, shouldWaitForNamedOverride } = useNamedComponentOverride(overrideComponentMap, customComponent);

	if (shouldWaitForNamedOverride) {
		return null;
	}

	if (customComponent && ComponentOverride) {
		return <ComponentOverride {...props} customComponent={undefined} />;
	}

	const formattedNumber = filters.formatNumber(value, {
		symbol,
		decimalPlaces,
		padDecimalPlaces,
		thousandsSeparator,
		decimalSeparator,
		symbolAfter,
	});

	const styling = mergeStyles<FormattedNumberProps>(props, defaultStyles);

	return raw ? (
		<>{formattedNumber}</>
	) : (
		<CacheProvider>
			<span className={classnames('ss__formatted-number', className, internalClassName)} {...styling}>
				{formattedNumber}
			</span>
		</CacheProvider>
	);
}

export type FormattedNumberProps = FormattedNumberTemplatesLegalProps & ComponentProps<FormattedNumberProps>;

export type FormattedNumberTemplatesLegalProps = {
	value: number;
	symbol?: string;
	decimalPlaces?: number;
	padDecimalPlaces?: boolean;
	thousandsSeparator?: string;
	decimalSeparator?: string;
	symbolAfter?: boolean;
	raw?: boolean;
};
