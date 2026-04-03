import { h } from 'preact';
import { useState } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';

import { Facet, FacetProps } from '../Facet';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { SearchController, AutocompleteController } from '@athoscommerce/snap-controller';
import type { RangeFacet, ValueFacet } from '@athoscommerce/snap-store-mobx';
import type { IndividualFacetType } from '../Facets/Facets';
import { MobileSidebar, MobileSidebarProps } from '../MobileSidebar';
import { Lang, useClickOutside, useComponent, useLang } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { Dropdown, DropdownProps } from '../../Atoms/Dropdown';
import { Icon, IconProps, IconType } from '../../Atoms/Icon';
import { Button, ButtonProps } from '../../Atoms/Button';

const defaultStyles: StyleScript<FacetsHorizontalProps> = ({ theme }) => {
	return css({
		margin: '10px 0px',

		'& .ss__facets-horizontal__header': {
			display: 'flex',
			flexWrap: 'wrap',
			gap: '10px',

			'& .ss__mobile-sidebar': {
				margin: '0 10px',
			},

			'& .ss__facet__header__inner': {
				display: 'flex',
			},

			'& .ss__facet__header__selected-count': {
				margin: '0px 5px',
			},

			'& .ss__facet__header__clear-all': {
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				marginLeft: '10px',
				border: 'none',
				padding: '0',
				color: theme?.variables?.colors?.primary,
				'&:hover': {
					cursor: 'pointer',
					textDecoration: 'underline',
					background: 'none',
				},
				'& .ss__icon': {
					marginLeft: '5px',
				},
			},

			'& .ss__facets-horizontal__header__dropdown': {
				margin: '0 0 10px 0',
				'.ss__dropdown__button': {
					display: 'flex',
				},

				'& .ss__dropdown__button__heading': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '5px 10px',
					flexShrink: '0',
					gap: '10px',
				},

				'&.ss__dropdown--open': {
					'& .ss__dropdown__button__heading': {
						'& .ss__icon': {},
					},
					'& .ss__dropdown__content': {
						padding: '10px',
						minWidth: '160px',
						width: 'max-content',
						maxHeight: '500px',
						overflowY: 'auto',
						zIndex: 1000,
					},
				},
			},
		},
		'& .ss__facet__show-more-less': {
			display: 'block',
			margin: '8px 8px 0 8px',
			cursor: 'pointer',
			'& .ss__icon': {
				marginRight: '8px',
			},
		},
	});
};

export const FacetsHorizontal = observer((properties: FacetsHorizontalProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<FacetsHorizontalProps> = {
		limit: 6,
		iconCollapse: 'angle-up',
		iconExpand: 'angle-down',
		clearAllText: 'Clear All',
		facets: properties.controller?.store?.facets,
		treePath: globalTreePath,
	};

	let props = mergeProps('facetsHorizontal', globalTheme, defaultProps, properties);

	const {
		facets,
		limit,
		alwaysShowFiltersButton,
		hideFiltersButton,
		onFacetOptionClick,
		showSelectedCount,
		hideSelectedCountParenthesis,
		clearAllIcon,
		showClearAllText,
		iconExpand,
		clearAllText,
		iconCollapse,
		disableStyles,
		className,
		internalClassName,
		controller,
		treePath,
		customComponent,
	} = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.facetsHorizontal || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const facetClickEvent = (e: React.MouseEvent<Element, MouseEvent>) => {
		onFacetOptionClick && onFacetOptionClick(e);
	};

	const themeDefaults: Theme = {
		components: {
			facetGridOptions: {
				onClick: facetClickEvent,
			},
			facetHierarchyOptions: {
				onClick: facetClickEvent,
			},
			facetListOptions: {
				onClick: facetClickEvent,
			},
			facetPaletteOptions: {
				onClick: facetClickEvent,
			},
		},
	};

	// merge deeply the themeDefaults with the theme prop
	const theme = deepmerge(themeDefaults, props?.theme || {});

	props = {
		...props,
		theme,
	};

	let facetsToShow = facets;
	let isOverflowing = false;

	if (typeof limit != 'undefined' && Number.isInteger(limit) && facets) {
		isOverflowing = facets.length > +limit;
		if (limit > 0) {
			facetsToShow = facets.slice(0, +limit);
		} else if (limit == 0) {
			facetsToShow = [];
		}
	}

	const subProps: FacetsHorizontalSubProps = {
		dropdown: {
			// default props
			internalClassName: 'ss__facets-horizontal__header__dropdown',
			disableClickOutside: true,
			disableOverlay: true,
			focusTrapContent: true,
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
			// default props
			internalClassName: 'ss__dropdown__button__heading__icon',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath: `${treePath} dropdown button`,
		},
		facet: {
			// default props
			internalClassName: `ss__facets-horizontal__content__facet`,
			justContent: true,
			// this should be turned on if there is ever a filters button rendering.
			statefulOverflow: !hideFiltersButton && (isOverflowing || alwaysShowFiltersButton) ? true : undefined,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath: `${treePath} dropdown`,
		},
		MobileSidebar: {
			// default props
			internalClassName: 'ss__facets-horizontal__header__mobile-sidebar',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<FacetsHorizontalProps>(props, defaultStyles);

	const [selectedFacet, setSelectedFacet] = useState<IndividualFacetType | undefined>(undefined);

	const innerRef = useClickOutside(() => {
		selectedFacet && setSelectedFacet(undefined);
	});

	//todo investigate keyboard navigation here when overlay prop is true/false
	return (facetsToShow && facetsToShow?.length > 0) || isOverflowing ? (
		<CacheProvider>
			<div
				className={classnames('ss__facets-horizontal', className, internalClassName)}
				ref={innerRef as React.LegacyRef<HTMLDivElement>}
				{...styling}
			>
				<div className="ss__facets-horizontal__header">
					{facetsToShow?.map((facet: IndividualFacetType) => {
						const selectedCount =
							(facet as ValueFacet)?.values?.filter((value) => value?.filtered).length ||
							(facet as RangeFacet)?.active?.high !== (facet as RangeFacet)?.range?.high ||
							(facet as RangeFacet)?.active?.low !== (facet as RangeFacet)?.range?.low;

						//initialize lang
						const defaultLang = {
							dropdownButton: {
								attributes: {
									'aria-label': `currently ${selectedFacet?.field === facet.field ? 'open' : 'collapsed'} ${facet.label} facet dropdown ${
										(facet as ValueFacet).values?.length ? (facet as ValueFacet).values?.length + ' options' : ''
									}`,
								},
							},
							clearAllText: {
								value: clearAllText,
							},
						};

						//deep merge with props.lang
						const lang = deepmerge(defaultLang, props.lang || {});
						const mergedLang = useLang(lang as any, {
							selectedFacet,
							facet,
						});

						return (
							<Dropdown
								{...subProps.dropdown}
								internalClassName={classnames(
									subProps.dropdown.internalClassName,
									`ss__facets-horizontal__header__dropdown--${facet.display}`,
									`ss__facets-horizontal__header__dropdown--${facet.field}`
								)}
								open={selectedFacet?.field === facet.field}
								onClick={(e) => {
									// @ts-ignore - this is a workaround for the fact that selectedFacet is not defined when the onclick is triggered by the escape key.
									if (selectedFacet !== facet && e.code !== 'Escape') {
										setSelectedFacet(facet);
									} else {
										setSelectedFacet(undefined);
									}
								}}
								button={
									<div className="ss__dropdown__button__heading" {...mergedLang.dropdownButton.attributes}>
										<div className="ss__facet__header__inner">
											<span {...mergedLang.dropdownButton.value}>{facet?.label}</span>

											{showSelectedCount && selectedCount && facet.type !== 'range' ? (
												<span className="ss__facet__header__selected-count">
													{hideSelectedCountParenthesis ? selectedCount : `(${selectedCount})`}
												</span>
											) : null}
											{(mergedLang.clearAllText.value || clearAllIcon) && selectedCount ? (
												<Button
													{...subProps.button}
													internalClassName="ss__facet__header__clear-all"
													name={'reset-facet'}
													onClick={(e) => {
														e.stopPropagation();
														facet?.clear.url.link.onClick();
													}}
													icon={clearAllIcon ? clearAllIcon : undefined}
												>
													{mergedLang.clearAllText.value && showClearAllText ? <label {...mergedLang.clearAllText.all}></label> : null}
												</Button>
											) : (
												<></>
											)}
										</div>

										<Icon
											{...subProps.icon}
											{...(selectedFacet?.field === facet.field
												? { ...(typeof iconExpand == 'string' ? { icon: iconExpand } : (iconExpand as Partial<IconProps>)) }
												: { ...(typeof iconCollapse == 'string' ? { icon: iconCollapse } : (iconCollapse as Partial<IconProps>)) })}
										/>
									</div>
								}
								disableOverlay={false}
							>
								<Facet {...subProps.facet} facet={facet} />
							</Dropdown>
						);
					})}
					{!hideFiltersButton && (isOverflowing || alwaysShowFiltersButton) && (
						<MobileSidebar controller={controller as any} {...subProps.MobileSidebar}></MobileSidebar>
					)}
				</div>
			</div>
		</CacheProvider>
	) : null;
});

interface FacetsHorizontalSubProps {
	dropdown: Partial<DropdownProps>;
	icon: Partial<IconProps>;
	facet: Partial<FacetProps>;
	MobileSidebar: Partial<MobileSidebarProps>;
	button: Partial<ButtonProps>;
}

export type FacetsHorizontalProps = {
	facets?: IndividualFacetType[];
	lang?: Partial<FacetsHorizontalLang>;
	controller?: SearchController | AutocompleteController;
} & FacetsHorizontalTemplatesLegalProps &
	ComponentProps<FacetsHorizontalProps>;

export type FacetsHorizontalTemplatesLegalProps = {
	showSelectedCount?: boolean;
	hideSelectedCountParenthesis?: boolean;
	clearAllText?: string;
	showClearAllText?: boolean;
	clearAllIcon?: IconType | Partial<IconProps>;

	limit?: number;
	alwaysShowFiltersButton?: boolean;
	hideFiltersButton?: boolean;
	iconCollapse?: IconType | Partial<IconProps>;
	iconExpand?: IconType | Partial<IconProps>;
	onFacetOptionClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

export interface FacetsHorizontalLang {
	dropdownButton: Lang<{
		selectedFacet: IndividualFacetType;
		facet: IndividualFacetType;
	}>;
}
