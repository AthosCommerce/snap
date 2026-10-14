import { h } from 'preact';
import { useState } from 'preact/hooks';

import { css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';

import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Lang, useLang, useCustomComponentOverride } from '../../../hooks';
import { Button, ButtonProps } from '../../Atoms/Button';

const defaultStyles: StyleScript<QuantityPickerProps> = () => {
	return css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '5px',
		'&.ss__quantity-picker--disabled': {
			opacity: 0.7,
		},
		'& .ss__quantity-picker__label-wrapper': {
			display: 'inline-flex',
			alignItems: 'center',
		},
		'& .ss__quantity-picker__controls-wrapper': {
			display: 'inline-flex',
			alignItems: 'center',
			gap: '5px',
		},
		'& .ss__quantity-picker__input': {
			width: '60px',
			textAlign: 'center',
			padding: '5px',
			boxSizing: 'border-box',
		},
	});
};

export const QuantityPicker = observer((properties: QuantityPickerProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<QuantityPickerProps> = {
		min: 1,
		step: 1,
		treePath: globalTreePath,
	};

	const props = mergeProps('quantityPicker', globalTheme, defaultProps, properties);

	const {
		value,
		startValue,
		min,
		max,
		step,
		disabled,
		hideButtons,
		label,
		onChange,
		disableStyles,
		className,
		internalClassName,
		theme: ______,
		treePath,
		lang,
		style: _,
		styleScript: __,
		themeStyleScript: ___,
		name: ____,
		...additionalProps
	} = props;

	// whole numbers only, never negative, within min/max
	const minimum = Math.max(0, Math.trunc(min!));
	const clamp = (num: number): number => {
		let clamped = Math.trunc(num);
		if (isNaN(clamped)) {
			clamped = minimum;
		}
		clamped = Math.max(minimum, clamped);
		if (typeof max == 'number') {
			clamped = Math.min(Math.trunc(max), clamped);
		}
		return clamped;
	};

	// useState is called unconditionally (rules of hooks): a `value` prop that transitions between
	// undefined and defined across renders must not shift hook order. In controlled mode the
	// internal state is simply ignored and the quantity derives from the prop.
	const [internalQuantity, setQuantityState] = useState<number>(clamp(startValue ?? minimum));
	const stateful = value === undefined;
	const quantity: number = stateful ? internalQuantity : clamp(value);

	// raw input text while typing - committed (clamped) on blur
	const [editingValue, setEditingValue] = useState<string | undefined>(undefined);

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('quantityPicker', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const commit = (e: QuantityPickerChangeEvent, newValue: number) => {
		if (disabled) {
			return;
		}
		const clamped = clamp(newValue);
		if (stateful) {
			setQuantityState(clamped);
		}
		if (clamped !== quantity) {
			onChange && onChange(e, clamped);
		}
	};

	const styling = mergeStyles<QuantityPickerProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		quantityInput: {
			attributes: {
				'aria-label': 'quantity',
			},
		},
		decrementButton: {
			attributes: {
				'aria-label': 'decrease quantity',
			},
		},
		incrementButton: {
			attributes: {
				'aria-label': 'increase quantity',
			},
		},
	};

	//deep merge with props.lang
	const _lang = deepmerge(defaultLang, lang || {});
	const mergedLang = useLang(
		_lang as any,
		{
			quantity,
			min: minimum,
			max,
			disabled,
		},
		{ activeBreakpoint: globalTheme?.activeBreakpoint }
	);

	const subProps: QuantityPickerSubProps = {
		button: {
			// default props
			internalClassName: 'ss__quantity-picker__button',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	return (
		<CacheProvider>
			<div
				{...styling}
				className={classnames('ss__quantity-picker', { 'ss__quantity-picker--disabled': disabled }, className, internalClassName)}
				{...additionalProps}
			>
				{label && (
					<div className="ss__quantity-picker__label-wrapper">
						<span className="ss__quantity-picker__label">{label}</span>
					</div>
				)}
				<div className="ss__quantity-picker__controls-wrapper">
					{!hideButtons && (
						<Button
							{...subProps.button}
							name="decrement"
							internalClassName={classnames(subProps.button.internalClassName, 'ss__quantity-picker__button--decrement')}
							disabled={disabled || quantity <= minimum}
							onClick={(e) => commit(e, quantity - step!)}
							icon={'minus-thin'}
							{...mergedLang.decrementButton?.attributes}
						/>
					)}
					<input
						className="ss__quantity-picker__input"
						type="number"
						inputMode="numeric"
						min={minimum}
						max={max}
						step={step}
						value={editingValue ?? quantity}
						disabled={disabled}
						onInput={(e) => setEditingValue((e.target as HTMLInputElement).value)}
						onBlur={(e) => {
							if (editingValue !== undefined) {
								const parsed = parseFloat(editingValue);
								commit(e, isNaN(parsed) ? quantity : parsed);
								setEditingValue(undefined);
							}
						}}
						{...mergedLang.quantityInput?.all}
					/>
					{!hideButtons && (
						<Button
							{...subProps.button}
							name="increment"
							internalClassName={classnames(subProps.button.internalClassName, 'ss__quantity-picker__button--increment')}
							disabled={disabled || (typeof max == 'number' && quantity >= max)}
							onClick={(e) => commit(e, quantity + step!)}
							icon={'plus-thin'}
							{...mergedLang.incrementButton?.attributes}
						/>
					)}
				</div>
			</div>
		</CacheProvider>
	);
});

interface QuantityPickerSubProps {
	button: Partial<ButtonProps>;
}

type QuantityPickerChangeEvent = React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLInputElement>;

export type QuantityPickerProps = {
	lang?: Partial<QuantityPickerLang>;
	value?: number;
	startValue?: number;
} & QuantityPickerTemplatesLegalProps &
	ComponentProps<QuantityPickerProps>;

export type QuantityPickerTemplatesLegalProps = {
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	hideButtons?: boolean;
	label?: string;
	onChange?: (e: QuantityPickerChangeEvent, value: number) => void;
};

export interface QuantityPickerLang {
	quantityInput: Lang<{
		quantity: number;
		min: number;
		max?: number;
		disabled?: boolean;
	}>;
	decrementButton: Lang<{
		quantity: number;
		min: number;
		max?: number;
		disabled?: boolean;
	}>;
	incrementButton: Lang<{
		quantity: number;
		min: number;
		max?: number;
		disabled?: boolean;
	}>;
}
