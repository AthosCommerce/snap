import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useSnap, useTreePath } from '../../../providers';
import { ComponentProps, ComponentMap, StyleScript } from '../../../types';
import { defaultBadgeComponentMap, mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src/Templates';

const defaultStyles: StyleScript<CalloutBadgeProps> = () => {
	return css({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '5px',
	});
};

export const CalloutBadge = observer((properties: CalloutBadgeProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<CalloutBadgeProps> = {
		// default props
		tag: 'callout',
		limit: 1,
		treePath: globalTreePath,
	};

	const props = mergeProps('calloutBadge', globalTheme, defaultProps, properties);

	const { result, tag, renderEmpty, limit, className, internalClassName, treePath, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.calloutBadge || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const badgeComponentMap = {
		...defaultBadgeComponentMap,
		...((snap as SnapTemplates)?.templates?.library.import.component.badge || {}),
		...props.componentMap,
	};

	const styling = mergeStyles<CalloutBadgeProps>(props, defaultStyles);

	const badges = result?.display?.badges?.atLocation(tag).slice(0, limit);

	if (renderEmpty || badges?.length) {
		return (
			<CacheProvider>
				<div {...styling} className={classnames('ss__callout-badge', `ss__callout-badge--${tag?.replace('/', '-')}`, className, internalClassName)}>
					{badges.map((badge) => {
						const BadgeComponent = useComponent(badgeComponentMap, badge.component);
						if (!BadgeComponent) {
							return null;
						}
						return <BadgeComponent {...badge} {...badge.parameters} treePath={treePath} />;
					})}
				</div>
			</CacheProvider>
		);
	}
	return null;
});

export type CalloutBadgeProps = {
	result: Product;
} & CalloutBadgeTemplatesLegalProps &
	ComponentProps<CalloutBadgeProps>;
export type CalloutBadgeTemplatesLegalProps = {
	tag?: string;
	renderEmpty?: boolean;
	componentMap?: ComponentMap;
	limit?: number;
};
