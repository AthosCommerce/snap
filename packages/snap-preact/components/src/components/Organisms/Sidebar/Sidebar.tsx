import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { SearchController } from '@athoscommerce/snap-controller';
import { Layout, LayoutProps } from '../Layout';
import deepmerge from 'deepmerge';
import { Lang, useLang, useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

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
	});
};

export const Sidebar = observer((properties: SidebarProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<SidebarProps> = {
		titleText: 'Filters',
		treePath: globalTreePath,
		layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']],
	};

	const props = mergeProps('sidebar', globalTheme, defaultProps, properties);

	const { controller, layout, hideTitleText, titleText, sticky, disableStyles, className, internalClassName, treePath, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.sidebar || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<SidebarProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		titleText: {
			value: titleText,
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
	};

	const hasChildrenToRender = layout?.length;
	return controller?.store?.loaded && controller?.store?.pagination?.totalResults > 0 && hasChildrenToRender ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__sidebar', className, internalClassName, { 'ss__sidebar--sticky': sticky })}>
				{!hideTitleText ? (
					<h4 className={classnames('ss__sidebar__title')} aria-atomic="true" aria-live="polite" {...mergedLang.titleText.all}>
						{titleText}
					</h4>
				) : (
					<></>
				)}

				<div className={classnames('ss__sidebar__inner')}>
					<Layout controller={controller} layout={layout} {...subProps.Layout} />
				</div>
			</div>
		</CacheProvider>
	) : null;
});

export type SideBarModuleNames = 'filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_';

export type SidebarProps = {
	controller: SearchController;
	lang?: Partial<SidebarLang>;
} & SidebarTemplatesLegalProps &
	ComponentProps<SidebarProps>;

export type SidebarTemplatesLegalProps = {
	layout?: SideBarModuleNames[] | SideBarModuleNames[][];
	titleText?: string;
	hideTitleText?: boolean;
	sticky?: boolean;
	stickyOffset?: number;
};

export interface SidebarLang {
	titleText: Lang<{
		controller: SearchController;
	}>;
}

interface SidebarSubProps {
	Layout: Partial<LayoutProps>;
}
