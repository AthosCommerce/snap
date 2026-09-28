import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';

import { Facet, FacetProps } from '../Facet';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { SearchController, AutocompleteController } from '@athoscommerce/snap-controller';
import type { RangeFacet, ValueFacet } from '@athoscommerce/snap-store-mobx';
import type { IndividualFacetType } from '../Facets/Facets';
import { Lang, useClickOutside, useLang, useCustomComponentOverride } from '../../../hooks';
import { Dropdown, DropdownProps } from '../../Atoms/Dropdown';
import { Icon, IconProps, IconType } from '../../Atoms/Icon';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Slideout, SlideoutProps } from '../../Molecules/Slideout';
import { Sidebar, SidebarProps } from '../Sidebar';

const defaultStyles: StyleScript<FacetsHorizontalProps> = ({ theme }) => {
	return css({
		margin: '10px 0px',

		'& .ss__facets-horizontal__header': {
			display: 'flex',
			flexWrap: 'wrap',
			gap: '10px',

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
	const globalTreePath = useTreePath();

	const defaultProps: Partial<FacetsHorizontalProps> = {
		limit: 6,
		iconCollapse: 'angle-down',
		iconExpand: 'angle-up',
		clearAllText: 'Clear All',
		toggleSidebarButtonText: 'Filters',
		facets: properties.controller?.store?.facets,
		treePath: globalTreePath,
	};

	let props = mergeProps('facetsHorizontal', globalTheme, defaultProps, properties);

	const {
		facets,
		limit,
		alwaysShowToggleSidebarButton,
		hideToggleSidebarButton,
		openFacetsInSidebar,
		onFacetOptionClick,
		showSelectedCount,
		hideSelectedCountParenthesis,
		clearAllIcon,
		showClearAllText,
		iconExpand,
		clearAllText,
		iconCollapse,
		toggleSidebarButtonText,
		disableStyles,
		className,
		internalClassName,
		controller,
		treePath,
	} = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('facetsHorizontal', props);

	if (!shouldRenderDefault) {
		return overrideElement;
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

	const [sidebarOpenState, setSidebarOpenState] = useState(false);

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
			statefulOverflow: !hideToggleSidebarButton && (isOverflowing || alwaysShowToggleSidebarButton) ? true : undefined,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath: `${treePath} dropdown`,
		},
		slideout: {
			// default props
			internalClassName: 'ss__facets-horizontal__slideout',
			onChange: (active: boolean) => setSidebarOpenState(active),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		sidebar: {
			// default props
			internalClassName: 'ss__facets-horizontal__sidebar',
			onToggleSidebar: () => setSidebarOpenState(false),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		toggleSidebarButton: {
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

	// facet field to scroll into view once the slideout renders
	const [sidebarFacetField, setSidebarFacetField] = useState<string | undefined>(undefined);

	// facet expanded by a header click; collapsed again when the sidebar closes
	const autoOpenedFacet = useRef<IndividualFacetType | undefined>(undefined);
	// field of the header that opened the sidebar; focus returns to it when the sidebar closes
	const openerField = useRef<string | undefined>(undefined);

	const openFacetInSidebar = (facet: IndividualFacetType) => {
		// expand the facet so it renders open in the sidebar
		if (facet.collapsed && typeof facet.toggleCollapse == 'function') {
			facet.toggleCollapse();
			autoOpenedFacet.current = facet;
		}
		openerField.current = facet.field;
		setSidebarFacetField(facet.field);
		setSidebarOpenState(true);
	};

	useEffect(() => {
		if (!sidebarFacetField || !sidebarOpenState) return;

		// slideout content is already mounted; match by class so field names need no CSS escaping
		const slideoutElem = innerRef.current?.querySelector('.ss__facets-horizontal__slideout');
		const facetElem = Array.from(slideoutElem?.querySelectorAll('.ss__facet') || []).find((elem) =>
			elem.classList.contains(`ss__facet--${sidebarFacetField}`)
		);

		if (facetElem) {
			if (typeof facetElem.scrollIntoView == 'function') {
				facetElem.scrollIntoView({ block: 'start' });
			}
			// move focus into the sidebar so keyboard navigation continues from the opened facet
			facetElem.querySelector<HTMLElement>('.ss__facet__header')?.focus({ preventScroll: true });
		}

		setSidebarFacetField(undefined);
	}, [sidebarFacetField, sidebarOpenState]);

	useEffect(() => {
		if (sidebarOpenState) return;

		// re-collapse the auto-opened facet (slideout content is already unmounted, so nothing flickers)
		const facet = autoOpenedFacet.current;
		autoOpenedFacet.current = undefined;
		if (facet && !facet.collapsed && typeof facet.toggleCollapse == 'function') {
			facet.toggleCollapse();
		}

		// return focus to the header that opened the sidebar
		const field = openerField.current;
		openerField.current = undefined;
		if (field) {
			const headerDropdown = Array.from(innerRef.current?.querySelectorAll('.ss__facets-horizontal__header__dropdown') || []).find((elem) =>
				elem.classList.contains(`ss__facets-horizontal__header__dropdown--${field}`)
			);
			headerDropdown?.querySelector<HTMLElement>('.ss__dropdown__button')?.focus();
		}
	}, [sidebarOpenState]);

	// close the sidebar on Escape while it is open
	useEffect(() => {
		if (!sidebarOpenState) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' || e.key === 'Esc') {
				setSidebarOpenState(false);
			}
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [sidebarOpenState]);

	//initialize lang
	const defaultLang: Partial<FacetsHorizontalLang> = {
		toggleSidebarButtonText: {
			value: toggleSidebarButtonText,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(
		lang as any,
		{ facets: facets, sidebarOpenState: sidebarOpenState },
		{ activeBreakpoint: globalTheme?.activeBreakpoint }
	);

	const ToggleSidebarButton = ({ sidebarOpenState, setSidebarOpenState, subProps }: any) => {
		return (
			<Button
				{...subProps.toggleSidebarButton}
				internalClassName="ss__facets-horizontal__header__toggle-sidebar"
				onClick={() => setSidebarOpenState(!sidebarOpenState)}
			>
				<span {...mergedLang.toggleSidebarButtonText.all}></span>
			</Button>
		);
	};

	const renderToggleSidebarButton = Boolean(!hideToggleSidebarButton && (isOverflowing || alwaysShowToggleSidebarButton));
	// the slideout is also needed when facet headers open the sidebar
	const renderSlideout = renderToggleSidebarButton || Boolean(openFacetsInSidebar);

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
						const mergedLang = useLang(
							lang as any,
							{
								selectedFacet,
								facet,
							},
							{ activeBreakpoint: globalTheme?.activeBreakpoint }
						);

						return (
							<Dropdown
								{...subProps.dropdown}
								internalClassName={classnames(
									subProps.dropdown.internalClassName,
									`ss__facets-horizontal__header__dropdown--${facet.display}`,
									`ss__facets-horizontal__header__dropdown--${facet.field}`
								)}
								open={openFacetsInSidebar ? false : selectedFacet?.field === facet.field}
								onClick={(e) => {
									if (openFacetsInSidebar) {
										openFacetInSidebar(facet);
										return;
									}
									// @ts-ignore - escape key closes the dropdown
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
								{!openFacetsInSidebar && <Facet {...subProps.facet} facet={facet} />}
							</Dropdown>
						);
					})}
					{renderToggleSidebarButton && (
						<ToggleSidebarButton sidebarOpenState={sidebarOpenState} setSidebarOpenState={setSidebarOpenState} subProps={subProps} />
					)}
				</div>
				{renderSlideout && (
					<Slideout {...subProps.slideout} active={sidebarOpenState}>
						<Sidebar {...subProps.sidebar} controller={controller as SearchController} />
					</Slideout>
				)}
			</div>
		</CacheProvider>
	) : null;
});

interface FacetsHorizontalSubProps {
	dropdown: Partial<DropdownProps>;
	icon: Partial<IconProps>;
	facet: Partial<FacetProps>;
	button: Partial<ButtonProps>;
	slideout: Partial<SlideoutProps>;
	sidebar: Partial<SidebarProps>;
	toggleSidebarButton: Partial<ButtonProps>;
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
	alwaysShowToggleSidebarButton?: boolean;
	hideToggleSidebarButton?: boolean;
	openFacetsInSidebar?: boolean;
	iconCollapse?: IconType | Partial<IconProps>;
	iconExpand?: IconType | Partial<IconProps>;
	toggleSidebarButtonText?: string;
	onFacetOptionClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

export interface FacetsHorizontalLang {
	dropdownButton: Lang<{
		selectedFacet: IndividualFacetType;
		facet: IndividualFacetType;
	}>;
	toggleSidebarButtonText?: Lang<{ facets: IndividualFacetType[]; sidebarOpenState: boolean }>;
}
