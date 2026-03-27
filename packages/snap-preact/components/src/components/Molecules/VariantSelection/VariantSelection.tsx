import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, ListOption, StyleScript } from '../../../types';
import type { VariantSelection as VariantSelectionType } from '@athoscommerce/snap-store-mobx';
import { List, ListProps } from '../List';
import { Swatches, SwatchesProps } from '../Swatches';
import { Dropdown, DropdownProps } from '../../Atoms/Dropdown';
import { Icon, IconProps } from '../../Atoms/Icon';
import { useA11y, useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { fieldNameToComponentName } from '@athoscommerce/snap-toolbox';

const defaultStyles: StyleScript<VariantSelectionProps> = () => {
	return css({
		'.ss__variant-selection__dropdown': {
			'.ss__dropdown__button': {
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				'.ss__dropdown__button-wrapper': {
					display: 'flex',
					gap: '5px',
				},
			},
		},
	});
};

const dropdownContentStyles: StyleScript<VariantSelectionProps> = () => {
	return css({
		margin: '0px',
		padding: '5px',
		background: 'white',
		zIndex: 10,
		border: '1px solid black',

		'.ss__variant-selection__option': {
			cursor: 'pointer',
			position: 'relative',
		},

		'.ss__variant-selection__option:hover': {
			fontWeight: 'bold',
		},

		'.ss__variant-selection__option--selected': {
			fontWeight: 'bold',
		},

		'.ss__variant-selection__option--disabled': {
			pointerEvents: 'none',
			cursor: 'initial',
			color: 'red',
		},

		'.ss__variant-selection__option--disabled, .ss__variant-selection__option--unavailable': {
			textDecoration: 'line-through',
			opacity: 0.5,
		},
	});
};

export const VariantSelection = observer((properties: VariantSelectionProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<VariantSelectionProps> = {
		// default props
		name: fieldNameToComponentName(properties.selection.field),
		treePath: globalTreePath,
	};

	const props = mergeProps('variantSelection', globalTheme, defaultProps, properties);

	const { selection, onSelect, disableStyles, className, internalClassName, treePath, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.variantSelection || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	let type = props.type;
	if (!type) {
		if (selection.type == 'swatch') {
			type = 'swatches';
		} else {
			type = 'dropdown';
		}
	}

	const onSelectHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>, option: ListOption) => {
		if (onSelect) {
			onSelect(e, option);
		}

		selection.select(option.value as string);
	};

	const subProps: VariantSelectionSubProps = {
		dropdown: {
			internalClassName: 'ss__variant-selection__dropdown',
			usePortal: true,
			// TODO: label doesnt exist on dropdown?
			// label: selection.label || selection.field,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		icon: {
			// default props
			internalClassName: 'ss__variant-selection__icon',
			size: '12px',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		list: {
			titleText: selection.field,
			internalClassName: 'ss__variant-selection__list',
			multiSelect: false,
			hideOptionCheckboxes: true,
			onSelect: (e, option) => onSelectHandler(e, option),
			selected: selection.selected,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		swatches: {
			internalClassName: 'ss__variant-selection__swatches',
			onSelect: (e, option) => onSelectHandler(e, option),
			selected: selection.selected,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<VariantSelectionProps>(props, defaultStyles);
	//since the dropdown is rendered in a portal, it needs its own emotion styles
	const dropdownStyles = mergeStyles<VariantSelectionProps>(props, dropdownContentStyles);

	const DropdownContent = (props: any) => {
		const { toggleOpen } = props;
		return (
			<ul {...dropdownStyles} className="ss__variant-selection__options" ref={(e) => useA11y(e, -1, true, () => toggleOpen())}>
				{selection.values.map((val: any) => {
					const selected = selection.selected?.value == val.value;
					return (
						<li
							className={classnames(`ss__variant-selection__option`, {
								'ss__variant-selection__option--selected': selected,
								'ss__variant-selection__option--disabled': val.disabled,
								'ss__variant-selection__option--unavailable': val.available === false,
							})}
							onClick={(e) => !val.disabled && onSelectHandler(e, val)}
							ref={(e) => useA11y(e)}
							aria-selected={selected}
							aria-disabled={val.disabled || val.available === false}
						>
							{val.label}
						</li>
					);
				})}
			</ul>
		);
	};
	return selection.values.length ? (
		<CacheProvider>
			<div
				{...styling}
				className={classnames(
					'ss__variant-selection',
					`ss__variant-selection--${type}`,
					`ss__variant-selection--${selection.field}`,
					className,
					internalClassName
				)}
			>
				{(() => {
					switch (type) {
						case 'dropdown':
							return (
								<>
									{(() => {
										//todo prettify the button
										const Button = (props: any) => {
											const { open } = props;
											return (
												<>
													<div className="ss__dropdown__button-wrapper">
														<span className="ss__dropdown__button-wrapper__label">{selection.label}</span>

														{selection.selected ? (
															<span className="ss__dropdown__button-wrapper__selection">({selection.selected.value})</span>
														) : null}
													</div>
													<Icon icon={open ? 'angle-up' : 'angle-down'} {...subProps.icon} treePath={props.treePath} />
												</>
											);
										};

										return <Dropdown button={<Button treePath={treePath} />} {...subProps.dropdown} content={<DropdownContent />} />;
									})()}
								</>
							);
						case 'list':
							return (
								<>
									{(() => {
										return <List {...subProps.list} options={selection.values} />;
									})()}
								</>
							);
						case 'swatches':
							return (
								<>
									{(() => {
										return <Swatches {...subProps.swatches} options={selection.values} />;
									})()}
								</>
							);
					}
				})()}
			</div>
		</CacheProvider>
	) : null;
});

interface VariantSelectionSubProps {
	dropdown: Partial<DropdownProps>;
	icon: Partial<IconProps>;
	list: Partial<ListProps>;
	swatches: Partial<SwatchesProps>;
}

export type VariantSelectionProps = {
	selection: VariantSelectionType;
} & VariantSelectionTemplatesLegalProps &
	ComponentProps<VariantSelectionProps>;

export type VariantSelectionTemplatesLegalProps = {
	type?: 'dropdown' | 'swatches' | 'list';
	onSelect?: (e: React.MouseEvent<HTMLElement, MouseEvent>, option: ListOption) => void;
};
