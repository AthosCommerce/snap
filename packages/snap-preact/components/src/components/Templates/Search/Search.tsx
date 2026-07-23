import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Results, ResultsProps } from '../../Organisms/Results';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript, JSXComponent, LayoutSelectorOptions } from '../../../types';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Sidebar, SidebarProps } from '../../Organisms/Sidebar';
import { Toolbar, ToolbarProps } from '../../Organisms/Toolbar';
import { NoResults, NoResultsProps } from '../../Organisms/NoResults';
import { Lang, useLang, useMediaQuery } from '../../../hooks';
import { FOCUSABLE_ELEMENTS } from '../../../hooks/useA11y';
import { SearchFilterStore } from '@athoscommerce/snap-store-mobx';
import deepmerge from 'deepmerge';
import { useLayoutOptions } from '../../../hooks/useLayoutOptions';
import { componentNameToClassName } from '../../../utilities/componentNameToClassName';
import { Slideout, SlideoutProps } from '../../Molecules/Slideout';

const defaultStyles: StyleScript<SearchProps> = (props) => {
	let classNamePrefix = 'ss__search';
	if (props.alias) {
		classNamePrefix = `ss__${componentNameToClassName(props.alias)}`;
	}
	const mobileQuery = props.mobileDisplayAt
		? typeof props.mobileDisplayAt === 'boolean'
			? `(min-width: 0px)`
			: `(max-width: ${props.mobileDisplayAt})`
		: `(max-width: 0px)`;

	return css({
		[`.${classNamePrefix}__header-section`]: {
			marginBottom: '20px',
		},

		[`.${classNamePrefix}__main-section`]: {
			display: 'flex',
			minHeight: '600px',
			gap: '20px',
		},

		'.ss__sidebar': {
			flex: '0 1 auto',
			width: props.sidebarWidth,
			'&:empty': {
				display: 'none',
			},
			[`@media ${mobileQuery}`]: {
				width: '100%',
			},
		},

		[`.${classNamePrefix}__content`]: {
			width: '100%',
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
		},
	});
};

export const Search = observer((properties: SearchProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<SearchProps> = {
		toggleSidebarButtonText: 'Filters',
		sidebarWidth: '270px',
		mobileDisplayAt: globalTheme?.variables?.breakpoints?.tablet ? `${globalTheme.variables?.breakpoints?.tablet}px` : '991px',
		treePath: globalTreePath,
	};

	const props = mergeProps(properties.alias || 'search', globalTheme, defaultProps, properties);

	const {
		disableStyles,
		className,
		internalClassName,
		controller,
		hideSidebar,
		toggleSidebarButtonText,
		hideTopToolbar,
		hideMiddleToolbar,
		hideBottomToolbar,
		resultComponent,
		hideToggleSidebarButton,
		mobileDisplayAt,
		toggleSidebarStartClosed,
		treePath,
		alias,
	} = props;

	let classNamePrefix = 'ss__search';
	if (props.alias) {
		classNamePrefix = `ss__${componentNameToClassName(props.alias)}`;
	}

	// handle selected layoutOptions - must always call to preserve hook order
	useLayoutOptions(props, globalTheme);

	const store = controller.store;

	const isMobile = useMediaQuery(
		mobileDisplayAt ? (typeof mobileDisplayAt == 'boolean' ? `(min-width: 0px)` : `(max-width: ${mobileDisplayAt})`) : `(max-width: 0px)`
	);

	const [sidebarOpenState, setSidebarOpenState] = useState(Boolean(alias !== 'searchHorizontal' && !toggleSidebarStartClosed && !isMobile));

	// Track previous isMobile value to detect transitions and suppress slideout overlay animation occuring during resize to mobile.
	const prevIsMobileRef = useRef(isMobile);
	const justTransitionedToMobile = isMobile && !prevIsMobileRef.current;

	useEffect(() => {
		prevIsMobileRef.current = isMobile;
	});

	useEffect(() => {
		if (isMobile) {
			// if we are on mobile, we want to close the slideout to start.
			setSidebarOpenState(false);
		} else {
			if (toggleSidebarStartClosed) {
				setSidebarOpenState(false);
			} else {
				setSidebarOpenState(true);
			}
		}
	}, [isMobile]);

	//initialize lang
	const defaultLang: Partial<SearchLang> = {
		toggleSidebarButtonText: {
			value: toggleSidebarButtonText,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, { filters: store.filters, sidebarOpenState: sidebarOpenState });

	const ToggleSidebar = () => {
		return (
			<div
				className={classnames(`${classNamePrefix}__sidebar-toggle`, sidebarOpenState ? `${classNamePrefix}__sidebar-toggle--open` : '')}
				// @ts-ignore - this is fine.
				active={sidebarOpenState}
			>
				<span {...mergedLang.toggleSidebarButtonText.all}></span>
			</div>
		);
	};

	const toggleSidebarButtonProps = {
		onClick: () => {
			setSidebarOpenState(!sidebarOpenState);
			// need the timeout to allow the sidebar to open before focusing the first available element.
			setTimeout(() => {
				// focus the first available elem when toggling the sidebar open.
				if (!sidebarOpenState) {
					const firstAvailableElemToFocus = document.querySelector('.ss__sidebar')?.querySelector(FOCUSABLE_ELEMENTS) as HTMLElement;
					if (firstAvailableElemToFocus) {
						firstAvailableElemToFocus.focus();
					}
				}
			});
		},
		children:
			!hideToggleSidebarButton && store.loaded && (toggleSidebarButtonText || mergedLang.toggleSidebarButtonText?.value) ? ToggleSidebar : undefined,
	};
	const subProps: SearchSubProps = {
		TopToolbar: {
			// default props
			name: 'top',
			internalClassName: `${classNamePrefix}__header-section__toolbar--top-toolbar`,
			layout: [['banner.header'], ['searchHeader', '_']],
			toggleSideBarButton: { ...toggleSidebarButtonProps },
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		MiddleToolbar: {
			// default props
			name: 'middle',
			internalClassName: `${classNamePrefix}__content__toolbar--middle-toolbar`,
			layout: isMobile
				? [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
				: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
			toggleSideBarButton: { ...toggleSidebarButtonProps },
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		BottomToolbar: {
			// default props
			name: 'bottom',
			internalClassName: `${classNamePrefix}__content__toolbar--bottom-toolbar`,
			layout: [['banner.footer'], ['_', 'pagination', '_']],
			toggleSideBarButton: { ...toggleSidebarButtonProps },
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		Sidebar: {
			// default props
			layout: [['filterSummary'], ['facets'], ['banner.left']],
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		MobileSidebar: {
			// default props
			layout: [['filterSummary'], ['facets'], ['banner.left']],
			hideApplyButton: false,
			hideClearButton: false,
			hideCloseButton: false,
			onToggleSidebar: () => setSidebarOpenState((prev) => !prev),
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		Results: {
			// default props
			resultComponent: resultComponent,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		NoResults: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		Slideout: {
			// default props
			width: props.sidebarWidth,
			internalClassName: `${classNamePrefix}__slideout`,
			onChange: (active: boolean) => setSidebarOpenState(active),
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<SearchProps>(props, defaultStyles);

	return (
		<CacheProvider>
			<div
				{...styling}
				className={classnames(classNamePrefix, className, internalClassName, sidebarOpenState ? `${classNamePrefix}--sidebar-open` : '')}
			>
				<div className={`${classNamePrefix}__header-section`}>{!hideTopToolbar && <Toolbar {...subProps.TopToolbar} controller={controller} />}</div>
				<div className={`${classNamePrefix}__main-section`}>
					{!hideSidebar &&
						store.loaded &&
						store.pagination.totalResults > 0 &&
						(isMobile ? (
							<Slideout {...subProps.Slideout} active={justTransitionedToMobile ? false : sidebarOpenState}>
								<div className={`${classNamePrefix}__sidebar`}>
									<Sidebar {...subProps.MobileSidebar} controller={controller} />
								</div>
							</Slideout>
						) : sidebarOpenState ? (
							<div className={`${classNamePrefix}__sidebar`}>
								<Sidebar {...subProps.Sidebar} controller={controller} />
							</div>
						) : null)}
					<div className={classnames(`${classNamePrefix}__content`)}>
						{!hideMiddleToolbar && <Toolbar {...subProps.MiddleToolbar} controller={controller} />}

						{store.pagination.totalResults ? (
							<Results {...subProps.Results} controller={controller} />
						) : (
							store.pagination.totalResults === 0 && <NoResults {...subProps.NoResults} controller={controller} />
						)}

						{!hideBottomToolbar && <Toolbar {...subProps.BottomToolbar} controller={controller} />}
					</div>
				</div>
			</div>
		</CacheProvider>
	);
});

export type SearchProps = {
	controller: SearchController;
	lang?: Partial<SearchLang>;
	alias?: 'searchCollapsible' | 'searchHorizontal';
	resultComponent?: JSXComponent | JSX.Element;
} & Omit<SearchTemplatesLegalProps, 'resultComponent'> &
	Omit<ComponentProps, 'customComponent'>;

export type SearchTemplatesLegalProps = {
	resultComponent?: string;
	mobileDisplayAt?: string | boolean;
	hideSidebar?: boolean;
	sidebarWidth?: string;
	hideTopToolbar?: boolean;
	hideMiddleToolbar?: boolean;
	hideBottomToolbar?: boolean;
	toggleSidebarButtonText?: string;
	toggleSidebarStartClosed?: boolean;
	hideToggleSidebarButton?: boolean;
	layoutOptions?: LayoutSelectorOptions;
};

export interface SearchLang {
	toggleSidebarButtonText?: Lang<{ filters: SearchFilterStore; sidebarOpenState: boolean }>;
}

interface SearchSubProps {
	Results: Partial<ResultsProps>;
	NoResults: Partial<NoResultsProps>;
	Sidebar: Partial<SidebarProps>;
	MobileSidebar: Partial<SidebarProps>;
	TopToolbar: Partial<ToolbarProps>;
	MiddleToolbar: Partial<ToolbarProps>;
	BottomToolbar: Partial<ToolbarProps>;
	Slideout: Partial<SlideoutProps>;
}
