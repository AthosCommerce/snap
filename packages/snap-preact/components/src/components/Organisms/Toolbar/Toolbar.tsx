import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { useCustomComponentOverride } from '../../../hooks';
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
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ToolbarProps> = {
		treePath: globalTreePath,
		layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'],
	};

	const props = mergeProps('toolbar', globalTheme, defaultProps, properties);
	const { controller, toggleSideBarButton, disableStyles, className, internalClassName, treePath, layout } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('toolbar', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const styling = mergeStyles<ToolbarProps>(props, defaultStyles);

	const subProps: ToolbarSubProps = {
		Layout: {
			// default props
			internalClassName: 'ss__toolbar__layout',
			// inherited props
			...defined({
				toggleSideBarButton,
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
