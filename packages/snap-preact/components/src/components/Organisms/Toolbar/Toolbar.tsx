import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { SearchController } from '@athoscommerce/snap-controller';
import { Layout, LayoutProps } from '../Layout';
import { ButtonProps } from '../../Atoms/Button';

const defaultStyles: StyleScript<ToolbarProps> = ({}) => {
	return css({});
};

export const Toolbar = observer((properties: ToolbarProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ToolbarProps> = {
		treePath: globalTreePath,
		layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'],
	};

	const props = mergeProps('toolbar', globalTheme, defaultProps, properties);
	const { controller, toggleSideBarButton, disableStyles, className, internalClassName, treePath, layout, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.toolbar || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<ToolbarProps>(props, defaultStyles);

	const subProps: ToolbarSubProps = {
		Layout: {
			// default props
			toggleSideBarButton,
			internalClassName: 'ss__toolbar__layout',
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

	return hasChildrenToRender ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__toolbar', className, internalClassName)}>
				<Layout controller={controller} layout={layout} {...subProps.Layout} />
			</div>
		</CacheProvider>
	) : (
		<></>
	);
});

export type ToolbarProps = {
	controller: SearchController;
	name?: ToolbarNames;
} & ToolbarTemplatesLegalProps &
	ComponentProps<ToolbarProps>;

export type ToolbarTemplatesLegalProps = {
	layout?: (ModuleNames | ModuleNames[])[];
	toggleSideBarButton?: Partial<ButtonProps>;
};

export type ModuleNames =
	| 'searchHeader'
	| 'filterSummary'
	| 'mobileSidebar'
	| 'layoutSelector'
	| 'perPage'
	| 'sortBy'
	| 'pagination'
	| 'paginationInfo'
	| 'breadcrumbs'
	| '_'
	| 'button.sidebar-toggle'
	| 'banner.header'
	| 'banner.banner'
	| 'banner.footer'
	| 'facetsHorizontal';

export type ToolbarNames = 'top' | 'middle' | 'bottom';

interface ToolbarSubProps {
	Layout: Partial<LayoutProps>;
}
