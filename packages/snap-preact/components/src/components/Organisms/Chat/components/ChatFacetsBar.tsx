import { h, RefObject } from 'preact';
import { useRef, useEffect, useState } from 'preact/hooks';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import { ValueFacet, RangeFacet, FacetValue, FacetRangeValue, ChatFacetValue } from '@athoscommerce/snap-store-mobx';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { Colour, defined, mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { useA11y } from '../../../../hooks/useA11y';
import { Button, ButtonProps } from '../../../Atoms/Button';
import { Dropdown, DropdownProps } from '../../../Atoms/Dropdown';
import { Icon, IconProps } from '../../../Atoms/Icon';
import { FacetSlider, FacetSliderProps } from '../../../Molecules/FacetSlider';
import { ChatLang, chatDefaultLang, langTextOf } from '../Chat.lang';

/** Range buckets are identified by their bounds, every other option by its value string.
 * The store takes the shape as-is, so the discriminator never round-trips through a string. */
const facetOptionValue = (option?: FacetValue | FacetRangeValue): ChatFacetValue => {
	if (option && ('low' in option || 'high' in option)) {
		const range = option as FacetRangeValue;
		return { low: range.low, high: range.high };
	}
	return (option as FacetValue)?.value || (option as FacetValue)?.label || '';
};

const facetOptionKey = (value: ChatFacetValue): string => (typeof value === 'string' ? value : `${value.low ?? '*'}:${value.high ?? '*'}`);

const defaultStyles: StyleScript<ChatFacetsBarProps> = ({ primaryColorBg, primaryColorFg }) => {
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '6px',
		overflow: 'hidden',
		'.ss__chat__actions__wrap': {
			display: 'flex',
			flexDirection: 'column',
			gap: '6px',
			padding: '8px 10px',
			background: new Colour(colorPrimary).lightenHex(0.95),
			border: `1px solid ${new Colour(colorPrimary).lightenHex(0.85)}`,
			borderRadius: '8px',
		},
		'.ss__chat__actions--title': {
			fontSize: '14px',
			color: '#333',
		},
		'.ss__chat__actions--facets': {
			display: 'flex',
			flexDirection: 'row',
			gap: '6px',
			overflowX: 'auto',
			overflowY: 'hidden',
			scrollbarWidth: 'none' as const,
			'&::-webkit-scrollbar': {
				display: 'none',
			},
			'.ss__button': {
				flex: '0 0 auto',
				background: '#fff',
				border: '1px solid #ddd',
				borderRadius: '999px',
				padding: '3px 10px',
				fontSize: '14px',
				color: '#333',
				'&:hover': {
					background: new Colour(colorPrimary).lightenHex(0.97),
				},
			},
		},
		'.ss__chat__actions__facet': {
			padding: '1px', // make room for outline when focused
			flexShrink: 0,
		},
		'.ss__chat__actions__facets-header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		'.ss__chat__actions__facets-apply': {
			display: 'flex',
			justifyContent: 'flex-end',
			padding: '0 2px',
			// reserve the slot so toggling the button's visibility doesn't reflow the header
			visibility: 'hidden',
			'&.ss__chat__actions__facets-apply--active': {
				visibility: 'visible',
			},
			'.ss__button': {
				background: colorPrimary,
				color: colorPrimaryText,
				border: 'none',
				borderRadius: '999px',
				padding: '2px 10px',
				fontSize: '12px',
				lineHeight: '1.4',
				cursor: 'pointer',
				'&:not(.ss__button--disabled):hover': {
					background: new Colour(colorPrimary).darkenHex(),
				},
				'&.ss__button--disabled': {
					opacity: 0.5,
					cursor: 'not-allowed',
				},
			},
		},
	});
};

const FacetButton = (props: { label: string; open?: boolean }) => <Button icon={props.open ? 'angle-down' : 'angle-up'}>{props.label}</Button>;

// Slider dropdown grows to fill the remaining chat width from its anchor,
// so the price range slider isn't cramped inside a 150px-wide dropdown.
const SliderFacetDropdown = observer(
	(props: {
		facet: RangeFacet;
		label: string;
		controller: ChatController;
		chatRef: RefObject<HTMLDivElement>;
		multiselectFacets?: boolean;
		subProps: ChatFacetsBarSubProps;
	}) => {
		const { facet, label, controller, chatRef, multiselectFacets, subProps } = props;
		const anchorRef = useRef<HTMLDivElement>(null);
		const [width, setWidth] = useState<number | null>(null);

		useEffect(() => {
			const compute = () => {
				if (!anchorRef.current || !chatRef.current) return;
				const anchor = anchorRef.current.getBoundingClientRect();
				const chat = chatRef.current.getBoundingClientRect();
				const remaining = chat.right - anchor.left - 16;
				setWidth(Math.max(220, remaining));
			};
			compute();
			const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(compute) : null;
			if (ro && chatRef.current) ro.observe(chatRef.current);
			window.addEventListener('resize', compute);
			return () => {
				if (ro) ro.disconnect();
				window.removeEventListener('resize', compute);
			};
		}, []);

		return (
			<div ref={anchorRef} className="ss__chat__actions__facet ss__chat__actions__facet--range">
				<Dropdown
					{...subProps.dropdown}
					usePortal
					dropUp
					button={<FacetButton label={label} />}
					style={{
						'.ss__dropdown__content': {
							width: width ? `${width}px` : 'auto',
							background: 'white',
							boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
							borderRadius: '6px',
						},
					}}
				>
					<div className="ss__chat__actions__facet__options">
						<div className="ss__chat__actions__facet__slider" style={{ padding: '12px 16px' }}>
							<FacetSlider
								{...subProps.facetSlider}
								facet={facet}
								onChange={() => {
									if (!multiselectFacets) {
										// FacetSlider fires onChange before its urlManager update; defer
										// so controller.search() reads the updated filter state. Force
										// productSearch with the current filters so a slider tweak doesn't
										// fall through to `general` when hasPendingFacetChanges happens to
										// be false (e.g. the slider returned to the seeded range).
										queueMicrotask(() =>
											controller.search({
												data: { requestType: 'productSearch', searchFilters: controller.store.searchFilters },
											})
										);
									}
								}}
							/>
						</div>
					</div>
				</Dropdown>
			</div>
		);
	}
);

export const ChatFacetsBar = observer((properties: ChatFacetsBarProps): JSX.Element | null => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatFacetsBarProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatFacetsBar', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller, chatRef, multiselectFacets, primaryColorBg, primaryColorFg, disableStyles, treePath } = props;
	const { store } = controller;
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;

	const subProps: ChatFacetsBarSubProps = {
		dropdown: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		facetSlider: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		button: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		icon: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const mergedLang = useLang(
		{
			facetsTitle: lang.facetsTitle!,
		} as any,
		{ controller }
	);

	const styling = mergeStyles<ChatFacetsBarProps>(props, defaultStyles);

	const getFacetButtonLabel = (facet: ValueFacet | RangeFacet): string => {
		const base = facet.label || facet.field;

		// Slider facets show the active low-high range in the button when narrowed.
		if (facet.type === 'range') {
			const rangeFacet = facet as RangeFacet;
			const active = rangeFacet.active;
			const range = rangeFacet.range;
			if (active && range && (active.low !== range.low || active.high !== range.high)) {
				return `${base} (${active.low ?? '*'}-${active.high ?? '*'})`;
			}
			return base;
		}

		// Count current selections from the urlManager (source of truth for live state).
		// `value.filtered` reflects the server's snapshot at response time and goes stale
		// once the user deselects locally.
		const applied = ((facet as ValueFacet).values || []).filter((value) => {
			if (!value) return false;
			return controller.store.isFacetSelected(facet.field, facetOptionValue(value));
		}).length;

		return applied > 0 ? `${base} (${applied})` : base;
	};

	const toggleFacetOption = (field: string, optionValue: ChatFacetValue): void => {
		// Non-multiselect: clicking an already-selected value toggles it off.
		// `addFacet` is idempotent against an existing urlManager value, so without
		// the toggle the state wouldn't change, `hasPendingFacetChanges` would stay
		// false, and the params getter would fall through to `general`.
		if (controller.store.isFacetSelected(field, optionValue)) {
			controller.store.removeFacet(field, optionValue);
		} else {
			controller.store.addFacet({
				key: field,
				value: optionValue,
			});
		}
	};

	const renderFacetOption = (facet: ValueFacet, optionValue: ChatFacetValue, label: string | undefined): JSX.Element => {
		const optionKey = facetOptionKey(optionValue);
		if (multiselectFacets) {
			const isSelected = controller.store.isFacetSelected(facet.field, optionValue);
			return (
				<div
					key={optionKey}
					className="ss__chat__actions__facet__option--checkbox"
					role="checkbox"
					aria-checked={isSelected}
					aria-label={label}
					ref={(e) => useA11y(e)}
					onClick={() => {
						if (isSelected) {
							controller.store.removeFacet(facet.field, optionValue);
						} else {
							controller.store.addFacet({
								key: facet.field,
								value: optionValue,
							});
						}
					}}
				>
					<div
						className={classnames('ss__chat__actions__facet__option__checkbox', {
							'ss__chat__actions__facet__option__checkbox--checked': isSelected,
						})}
					>
						{isSelected && <Icon {...subProps.icon} icon="check-thin" size="10px" />}
					</div>
					<span className="ss__chat__actions__facet__option__label">{label}</span>
				</div>
			);
		}
		return (
			<Button
				key={optionKey}
				className={classnames({
					'ss__chat__actions__facet__option--selected': controller.store.isFacetSelected(facet.field, optionValue),
				})}
				onClick={() => {
					toggleFacetOption(facet.field, optionValue);
					// Force productSearch with the current filter state rather than relying
					// on the params getter's hasPendingFacetChanges promotion — a facet click
					// in the chat is unambiguously a search intent.
					controller.search({
						data: { requestType: 'productSearch', searchFilters: controller.store.searchFilters },
					});
				}}
			>
				{label}
			</Button>
		);
	};

	if (!store.facets || store.facets.length === 0) {
		return null;
	}

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat__actions', className, internalClassName)}>
				<div className="ss__chat__actions__wrap">
					<div className="ss__chat__actions__facets-header">
						<div className="ss__chat__actions--title" {...mergedLang.facetsTitle?.all}></div>
						{multiselectFacets && store.hasPendingFacetChanges && (
							<div className={'ss__chat__actions__facets-apply ss__chat__actions__facets-apply--active'}>
								<Button
									onClick={() => {
										controller.search();
									}}
								>
									{store.pendingFacetCount > 0
										? langTextOf(lang.facetsApplyButton, { count: store.pendingFacetCount })
										: langTextOf(lang.facetsClearButton)}
								</Button>
							</div>
						)}
					</div>
					<div className="ss__chat__actions--facets">
						{store.facets.slice(0, 10).map((facet: ValueFacet | RangeFacet) => {
							// range/slider facets render via FacetSlider; everything else needs at least one value to be useful
							if (facet.type !== 'range' && !(facet as ValueFacet).values?.length) return null;
							if (facet.type === 'range') {
								return (
									<SliderFacetDropdown
										key={facet.field}
										facet={facet as RangeFacet}
										label={getFacetButtonLabel(facet)}
										controller={controller}
										chatRef={chatRef}
										multiselectFacets={multiselectFacets}
										subProps={subProps}
									/>
								);
							}
							return (
								<div className={`ss__chat__actions__facet ss__chat__actions__facet--${facet.type}`} key={facet.field}>
									<Dropdown
										{...subProps.dropdown}
										usePortal
										dropUp
										boundaryRef={chatRef}
										button={<FacetButton label={getFacetButtonLabel(facet)} />}
										style={{
											'.ss__dropdown__content': {
												width: '150px',
												maxHeight: '200px',
												overflowY: 'auto',
												background: 'white',
												boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
												borderRadius: '6px',
												...(multiselectFacets
													? {
															'.ss__chat__actions__facet__option--checkbox': {
																display: 'flex',
																alignItems: 'center',
																gap: '8px',
																padding: '6px 10px',
																cursor: 'pointer',
																width: '100%',
																boxSizing: 'border-box' as const,
																background: '#fff',
																border: 'none',
																borderBottom: '1px solid #f0f0f0',
																'&:hover': {
																	background: new Colour(colorPrimary).lightenHex(0.95),
																},
																'&:last-child': {
																	borderBottom: 'none',
																},
																'.ss__chat__actions__facet__option__checkbox': {
																	width: '16px',
																	height: '16px',
																	borderRadius: '3px',
																	border: '2px solid #ccc',
																	display: 'flex',
																	alignItems: 'center',
																	justifyContent: 'center',
																	flexShrink: 0,
																	'&.ss__chat__actions__facet__option__checkbox--checked': {
																		background: colorPrimary,
																		borderColor: colorPrimary,
																		color: colorPrimaryText,
																		svg: {
																			fill: colorPrimaryText,
																			stroke: colorPrimaryText,
																		},
																	},
																},
																'.ss__chat__actions__facet__option__label': {
																	fontSize: '14px',
																	color: '#333',
																	flex: '1 1 auto',
																	textAlign: 'left' as const,
																},
															},
													  }
													: {
															'.ss__button': {
																width: '100%',
																border: 'none',
																borderRadius: 0,
																boxSizing: 'border-box',
																background: '#fff',
																'&:hover': {
																	background: new Colour(colorPrimary).lightenHex(0.95),
																},
																'&.ss__chat__actions__facet__option--selected': {
																	fontWeight: 'bold',
																},
															},
													  }),
											},
										}}
									>
										<div className="ss__chat__actions__facet__options">
											{(facet as ValueFacet).values.map((option) => renderFacetOption(facet as ValueFacet, facetOptionValue(option), option?.label))}
										</div>
									</Dropdown>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</CacheProvider>
	);
});

export type ChatFacetsBarProps = {
	controller: ChatController;
	chatRef: RefObject<HTMLDivElement>;
	multiselectFacets?: boolean;
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
} & ComponentProps<ChatFacetsBarProps>;

interface ChatFacetsBarSubProps {
	dropdown: Partial<DropdownProps>;
	facetSlider: Partial<FacetSliderProps>;
	button: Partial<ButtonProps>;
	icon: Partial<IconProps>;
}
