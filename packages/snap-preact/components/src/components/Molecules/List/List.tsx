import { h } from 'preact';

import { useState } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { filters } from '@athoscommerce/snap-toolbox';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, ListOption, StyleScript } from '../../../types';
import { cloneWithProps, defined, mergeProps, mergeStyles } from '../../../utilities';
import { Checkbox, CheckboxProps } from '../Checkbox';
import { Lang, useA11y, useComponent, useLang } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { Icon, IconProps } from '../../Atoms/Icon';

const defaultStyles: StyleScript<ListProps> = ({ horizontal, disableOverflowAction }) => {
	return css({
		display: 'flex',
		flexDirection: horizontal ? 'row' : 'column',
		alignItems: horizontal ? 'center' : undefined,
		justifyItems: 'flex-start',
		gap: '5px',

		'.ss__list__options': {
			border: 'none',
			listStyle: 'none',
			padding: '0px',
			margin: '0px',
			display: 'flex',
			flexDirection: horizontal ? 'row' : 'column',
			alignItems: horizontal ? 'center' : undefined,
			justifyItems: 'flex-start',
			gap: '5px',
		},

		'.ss__list__option': {
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			gap: '5px',

			'.ss__list__option__label , .ss__list__option__icon': {
				cursor: 'pointer',
			},
		},

		'&.ss__list--disabled, .ss__list__option--disabled': {
			cursor: 'none',
			pointerEvents: 'none',
			opacity: 0.5,
		},

		'&.ss__list--disabled, .ss__list__option--unavailable': {
			cursor: 'pointer',
			opacity: 0.5,
		},

		'.ss__list__option--selected': {
			fontWeight: 'bold',
		},

		'.ss__list__show-more-wrapper': {
			'&:not(.ss__list__option)': {
				margin: '8px',
			},
			'&:hover': {
				cursor: disableOverflowAction ? 'initial !important' : 'pointer !important',
			},
		},
	});
};

export function List(properties: ListProps) {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ListProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('list', globalTheme, defaultProps, properties);

	const {
		titleText,
		onSelect,
		native,
		multiSelect,
		hideOptionLabels,
		hideOptionIcons,
		hideOptionCheckboxes,
		disabled,
		hideTitleText,
		options,
		requireSelection,
		columns,
		rows,
		hideShowLess,
		disableOverflowAction,
		overflowButton,
		overflowButtonInGrid,
		onOverflowButtonClick,
		disableA11y,
		disableStyles,
		className,
		internalClassName,
		treePath,
		customComponent,
	} = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.list || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	let selected = props.selected;

	const subProps: ListSubProps = {
		checkbox: {
			// default props
			native: native,
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
			internalClassName: 'ss__list__option__icon',
			size: '16px',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ListProps>(props, defaultStyles);

	if (selected && !Array.isArray(selected)) {
		selected = [selected];
	}

	// selection state
	const [selection, setSelection] = useState((selected as ListOption[]) || []);

	// original selection state
	const [originalSelected] = useState((selected as ListOption[]) || []);
	// reset selection if 'selected' prop changes
	try {
		if (selected) {
			const originalSelectedstr = JSON.stringify(originalSelected);
			const selectedstr = JSON.stringify(selected);
			const selectionstr = JSON.stringify(selection);
			if (originalSelectedstr !== selectedstr && selectedstr !== selectionstr) {
				setSelection(selected);
			}
		}
	} catch (e) {
		// noop
	}

	const makeSelection = (e: React.MouseEvent<HTMLElement>, option: ListOption) => {
		let newArray: ListOption[];

		if (multiSelect) {
			if (selection.find((select) => select.value === option.value)) {
				newArray = [...selection];

				newArray.splice(
					newArray.findIndex((select) => select.value === option.value),
					1
				);

				if (newArray.length == 0 && requireSelection) {
					newArray = [option];
				}
			} else {
				newArray = [...selection, option];
			}
		} else {
			if (!requireSelection && selection.find((select) => select.value === option.value)) {
				newArray = [];
			} else {
				newArray = [option];
			}
		}

		if (onSelect) {
			onSelect(e, option, newArray);
		}

		setSelection(newArray);
	};

	//initialize lang
	const defaultLang = {};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		options,
		selectedOptions: selection,
	});

	const limit = rows && columns ? columns * rows : options.length;
	const remainder = Math.max(0, options.length - (limit - (overflowButtonInGrid ? 1 : 0)));

	const [limited, setLimited] = useState<boolean>(!!remainder);

	const OverflowButtonElem = () => {
		const showButton = hideShowLess ? limited : true;

		//initialize lang
		const defaultOverflowLang = {
			showMoreText: {
				value: overflowButtonInGrid ? `+ ${remainder}` : 'Show More',
			},
			showLessText: {
				value: overflowButtonInGrid ? `- ${remainder}` : 'Show Less',
			},
		};

		//deep merge with props.lang
		const overflowLang = deepmerge(defaultOverflowLang, props.lang || {});
		const mergedOverflowLang = useLang(overflowLang as any, {
			limited,
			remainder,
		});

		return showButton && remainder > 0 && options.length !== limit ? (
			<div
				className={`ss__list__show-more-wrapper ${overflowButtonInGrid ? 'ss__list__option' : ''}`}
				onClick={(e) => {
					!disableOverflowAction && setLimited(!limited);
					onOverflowButtonClick && onOverflowButtonClick(e, Boolean(limited), remainder);
				}}
				role={'button'}
				ref={(e) => (!disableA11y && !disableOverflowAction ? useA11y(e) : null)}
				{...(limited ? mergedOverflowLang.showMoreText.attributes : mergedOverflowLang.showLessText.attributes)}
			>
				{overflowButton ? (
					cloneWithProps(overflowButton, { limited, remainder, treePath })
				) : limited ? (
					<span className={'ss__list__show-more'} {...mergedOverflowLang.showMoreText.value}></span>
				) : remainder ? (
					<span className={'ss__list__show-less'} {...mergedOverflowLang.showLessText.value}></span>
				) : null}
			</div>
		) : null;
	};

	return typeof options == 'object' && options?.length ? (
		<CacheProvider>
			<div
				{...styling}
				className={classnames('ss__list', { 'ss__list--native': native, 'ss__list--disabled': disabled }, className, internalClassName)}
			>
				{(titleText || lang?.title?.value) && !hideTitleText && (
					<h5 className="ss__list__title" {...mergedLang.title?.all}>
						{titleText}
					</h5>
				)}

				<ul className={`ss__list__options`} role="listbox" aria-label={titleText}>
					{options.map((option: ListOption, idx: number) => {
						const selected = selection.some((select: ListOption) => select.value == option.value);

						if (!limited || options.length == limit || idx < limit - (overflowButtonInGrid ? 1 : 0)) {
							return (
								<li
									className={classnames(`ss__list__option ss__list__option--${filters.handleize(option.value?.toString())}`, {
										'ss__list__option--selected': selected,
										'ss__list__option--disabled': option?.disabled,
										'ss__list__option--unavailable': option?.available === false,
									})}
									ref={(e) => useA11y(e)}
									onClick={(e) => !disabled && !option?.disabled && makeSelection(e as any, option)}
									title={option.label}
									role="option"
									aria-selected={selected}
									aria-disabled={option.disabled || option?.available === false}
								>
									{!hideOptionCheckboxes && <Checkbox {...subProps.checkbox} checked={selected} disableA11y={true} aria-label={option.label} />}

									{option.icon && !hideOptionIcons && (
										<Icon {...subProps.icon} {...(typeof option.icon == 'string' ? { icon: option.icon } : (option.icon as Partial<IconProps>))} />
									)}

									{!hideOptionLabels && (option.label || !option.icon) && (
										<label className="ss__list__option__label">{option.label || option.value}</label>
									)}
								</li>
							);
						}
					})}
					{overflowButtonInGrid ? <OverflowButtonElem /> : null}
				</ul>

				{!overflowButtonInGrid ? <OverflowButtonElem /> : null}
			</div>
		</CacheProvider>
	) : null;
}

export type ListProps = {
	lang?: Partial<ListLang>;
} & ListTemplatesLegalProps &
	ComponentProps<ListProps>;

export type ListTemplatesLegalProps = {
	options: ListOption[];
	multiSelect?: boolean;
	hideOptionCheckboxes?: boolean;
	hideOptionLabels?: boolean;
	hideOptionIcons?: boolean;
	onSelect?: (e: React.MouseEvent<HTMLElement>, option: ListOption, selected: ListOption[]) => void;
	titleText?: string;
	hideTitleText?: boolean;
	disabled?: boolean;
	horizontal?: boolean;
	native?: boolean;
	selected?: ListOption | ListOption[];
	requireSelection?: boolean;
	columns?: number;
	rows?: number;
	hideShowLess?: boolean;
	disableOverflowAction?: boolean;
	overflowButton?: JSX.Element;
	overflowButtonInGrid?: boolean;
	onOverflowButtonClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, status: boolean, remainder: number) => void;
	disableA11y?: boolean;
};

export interface ListLang {
	title?: Lang<{
		options: ListOption[];
		selectedOptions: ListOption[];
	}>;
	showMoreText?: Lang<{
		limited: boolean;
		remainder: number;
	}>;
	showLessText?: Lang<{
		limited: boolean;
		remainder: number;
	}>;
}

interface ListSubProps {
	checkbox: Partial<CheckboxProps>;
	icon: Partial<IconProps>;
}
