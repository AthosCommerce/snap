import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { SearchController } from '@athoscommerce/snap-controller';
import { Layout, LayoutProps } from '../Layout';
import deepmerge from 'deepmerge';
import { Lang, useLang, useCustomComponentOverride } from '../../../hooks';
import { Button, ButtonProps } from '../../Atoms/Button';
import { IconProps, IconType } from '../../Atoms/Icon';

const defaultStyles: StyleScript<SidebarProps> = ({ stickyOffset }) => {
	return css({
		// need sticky styles using new sticky prop
		'&.ss__sidebar--sticky': {
			position: 'sticky',
			top: stickyOffset || 0,
		},

		'& .ss__facets': {
			width: '100%',
		},

		'& .ss__sidebar__header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'baseline',

			'& .ss__sidebar__header__close-button': {
				cursor: 'pointer',
			},
		},
		'& .ss__sidebar__footer': {
			display: 'flex',
			gap: '10px',
			justifyContent: 'center',
			flexDirection: 'row',
		},
	});
};

export const Sidebar = observer((properties: SidebarProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<SidebarProps> = {
		titleText: 'Filters',
		clearButtonText: 'Clear All',
		applyButtonText: 'Apply',
		closeButtonIcon: 'close-thin',
		hideApplyButton: true,
		hideClearButton: true,
		hideCloseButton: true,
		treePath: globalTreePath,
		layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']],
	};

	const props = mergeProps('sidebar', globalTheme, defaultProps, properties);

	const {
		controller,
		layout,
		hideTitleText,
		titleText,
		sticky,
		hideApplyButton,
		hideFooter,
		onToggleSidebar,
		hideHeader,
		hideClearButton,
		hideCloseButton,
		hideClearButtonText,
		hideApplyButtonText,
		hideCloseButtonText,
		clearButtonText,
		applyButtonText,
		closeButtonText,
		applyButtonIcon,
		clearButtonIcon,
		closeButtonIcon,
		disableStyles,
		className,
		internalClassName,
		treePath,
	} = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('sidebar', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const styling = mergeStyles<SidebarProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		titleText: {
			value: titleText,
		},
		closeButtonText: {
			value: closeButtonText,
		},
		applyButtonText: {
			value: applyButtonText,
		},
		clearButtonText: {
			value: clearButtonText,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		controller: controller,
	});

	const subProps: SidebarSubProps = {
		Layout: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		button: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const hasChildrenToRender = layout?.length;
	return controller?.store?.loaded && controller?.store?.pagination?.totalResults > 0 && hasChildrenToRender ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__sidebar', className, internalClassName, { 'ss__sidebar--sticky': sticky })}>
				{!hideHeader && (
					<div className="ss__sidebar__header">
						{!hideTitleText ? (
							<h4 className={classnames('ss__sidebar__title')} aria-atomic="true" aria-live="polite" {...mergedLang.titleText.all}>
								{titleText}
							</h4>
						) : (
							<div></div>
						)}

						{!hideCloseButton && (
							<Button
								internalClassName="ss__sidebar__header__close-button"
								disableStyles={true}
								onClick={() => onToggleSidebar && onToggleSidebar()}
								icon={closeButtonIcon}
								{...subProps.button}
								name={'close'}
							>
								{!hideCloseButtonText && closeButtonText ? <span {...mergedLang.closeButtonText?.all}></span> : undefined}
							</Button>
						)}
					</div>
				)}

				<div className={classnames('ss__sidebar__inner')}>
					<Layout controller={controller} layout={layout} {...subProps.Layout} />
				</div>

				{!hideFooter && (
					<div className="ss__sidebar__footer">
						{!hideApplyButton && (
							<Button
								internalClassName="ss__sidebar__footer__apply-button"
								icon={applyButtonIcon}
								onClick={onToggleSidebar ? () => onToggleSidebar() : undefined}
								{...subProps.button}
								name={'apply'}
							>
								{!hideApplyButtonText && applyButtonText ? <span {...mergedLang.applyButtonText?.all}></span> : undefined}
							</Button>
						)}
						{!hideClearButton && (
							<Button
								internalClassName="ss__sidebar__footer__clear-button"
								icon={clearButtonIcon}
								onClick={() => {
									controller?.urlManager.remove('filter').remove('page').go();
									onToggleSidebar && (() => onToggleSidebar())();
								}}
								{...subProps.button}
								name={'clear'}
							>
								{!hideClearButtonText && clearButtonText ? <span {...mergedLang.clearButtonText?.all}></span> : undefined}
							</Button>
						)}
					</div>
				)}
			</div>
		</CacheProvider>
	) : null;
});

export type SideBarModuleNames = 'filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_';

export type SidebarProps = {
	controller: SearchController;
	lang?: Partial<SidebarLang>;
	onToggleSidebar?: () => void;
} & SidebarTemplatesLegalProps &
	ComponentProps<SidebarProps>;

export type SidebarTemplatesLegalProps = {
	layout?: SideBarModuleNames[] | SideBarModuleNames[][];
	titleText?: string;
	hideTitleText?: boolean;
	sticky?: boolean;
	stickyOffset?: number;
	hideHeader?: boolean;
	hideFooter?: boolean;
	hideApplyButton?: boolean;
	hideClearButton?: boolean;
	hideCloseButton?: boolean;
	hideClearButtonText?: boolean;
	hideApplyButtonText?: boolean;
	hideCloseButtonText?: boolean;
	clearButtonText?: string;
	applyButtonText?: string;
	closeButtonText?: string;
	applyButtonIcon?: IconType | Partial<IconProps>;
	clearButtonIcon?: IconType | Partial<IconProps>;
	closeButtonIcon?: IconType | Partial<IconProps>;
};

export interface SidebarLang {
	titleText: Lang<{
		controller: SearchController;
	}>;
	closeButtonText: Lang<{
		controller: SearchController;
	}>;
	applyButtonText: Lang<{
		controller: SearchController;
	}>;
	clearButtonText: Lang<{
		controller: SearchController;
	}>;
}

interface SidebarSubProps {
	Layout: Partial<LayoutProps>;
	button: Partial<ButtonProps>;
}
