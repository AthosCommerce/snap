import { ComponentChildren, h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useSnap, useTreePath } from '../../../providers';
import { ComponentProps, ComponentMap, StyleScript } from '../../../types';
import { defaultBadgeComponentMap, mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import type { AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src/Templates';

const defaultBadgeStyles: StyleScript<OverlayBadgeProps & { index: number; top: boolean; bottom: boolean; section: string; tag: string }> = ({
	section,
	top,
	bottom,
	index,
	tag,
}) => {
	return css({
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: section == 'right' ? 'flex-end' : 'flex-start',
		justifyContent: !top && !bottom ? 'center' : bottom && !top ? 'flex-end' : 'flex-start',
		gap: '0.5em',
		gridArea: tag,
		boxSizing: 'border-box',
		zIndex: Math.max(100 - index, 1),
		width: '100%',
		height: '100%',
	});
};

const defaultStyles: StyleScript<OverlayBadgeProps> = ({ controller }) => {
	const group = 'overlay';
	const grid = controller?.store?.meta?.badges?.groups?.[group]?.grid;
	let gridProperties = {};
	if (grid?.length && grid[0]?.length) {
		const gridTemplateAreas = grid.map((row: string[]) => `"${row.join(' ')}"`).join(' ');
		const columns = grid[0].length;
		gridProperties = {
			gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
			gridTemplateRows: `repeat(${grid.length}, minmax(0, 1fr))`,
			gridTemplateAreas,
		};
	}

	return css({
		position: 'relative',

		'& .ss__overlay-badge__grid-wrapper': {
			pointerEvents: 'none',
			display: 'grid',
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...gridProperties,
		},
	});
};

export const OverlayBadge = observer((properties: OverlayBadgeProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<OverlayBadgeProps> = {
		limit: 1,
		treePath: globalTreePath,
	};

	const props = mergeProps('overlayBadge', globalTheme, defaultProps, properties);

	const { result, children, controller, renderEmpty, limit, className, internalClassName, treePath, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.overlayBadge || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	if (!children) {
		controller?.log?.warn('OverlayBadge component must have children');
		return null;
	}

	const meta = controller?.store?.meta;
	if (!meta) {
		controller?.log?.warn('Controller must have a meta store');
		return <>{children}</>;
	}
	const group = 'overlay';

	const badgeComponentMap = {
		...defaultBadgeComponentMap,
		...((snap as SnapTemplates)?.templates?.library.import.component.badge || {}),
		...props.componentMap,
	};

	const sections = meta?.badges?.groups?.[group]?.sections;

	// build locations and filter out the locations that have no badges in them to prevent rendering
	const locations = sections
		?.map((section) => {
			const sectionSlots = meta?.data?.badges?.locations[section as keyof typeof meta.data.badges.locations];
			const slots = sectionSlots
				?.map((slot, index) => ({
					tag: slot.tag,
					name: slot.name,
					top: index == 0,
					bottom: index == sectionSlots.length - 1,
					badges: result?.display.badges?.atLocation(`${section}/${slot.tag}`).slice(0, limit),
				}))
				.filter((slot) => slot.badges?.length);

			return {
				section,
				slots,
			};
		})
		.filter((location) => location.slots?.length);

	const styling = mergeStyles<OverlayBadgeProps>(props, defaultStyles);

	if (renderEmpty || locations?.length) {
		return (
			<CacheProvider>
				<div {...styling} className={classnames('ss__overlay-badge', className, internalClassName)}>
					<div className="ss__overlay-badge__grid-wrapper">
						{locations.map((location, index) => {
							return location.slots?.map((slot) => {
								const badgeStyles = defaultBadgeStyles({
									...props,
									tag: slot.tag,
									section: location.section,
									index,
									top: slot.top,
									bottom: slot.bottom,
								});
								return (
									<div
										className={classnames('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${slot.tag}`)}
										css={[badgeStyles]}
									>
										{slot.badges.map((badge) => {
											const BadgeComponent = useComponent(badgeComponentMap, badge.component);
											if (!BadgeComponent) {
												return null;
											}

											return <BadgeComponent {...badge} {...badge.parameters} treePath={treePath} />;
										})}
									</div>
								);
							});
						})}
					</div>
					{children}
				</div>
			</CacheProvider>
		);
	}

	return <>{children}</>;
});

export type OverlayBadgeProps = {
	result: Product;
	controller: SearchController | AutocompleteController | RecommendationController;
} & OverlayBadgeTemplatesLegalProps &
	ComponentProps<OverlayBadgeProps>;

export type OverlayBadgeTemplatesLegalProps = {
	renderEmpty?: boolean;
	limit?: number;
	children: ComponentChildren;
	componentMap?: ComponentMap;
};
