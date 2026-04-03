import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { Theme, useTheme, CacheProvider, useTreePath, withController, withTracking, useSnap } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import type { Banner } from '@athoscommerce/snap-store-mobx';
import { useA11y } from '../../../hooks/useA11y';
import { ComponentProps, StyleScript, ResultsLayout } from '../../../types';
import { observer } from 'mobx-react-lite';
import { AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<InlineBannerProps> = ({ width }) => {
	return css({
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: width,
		'&.ss__inline-banner--grid': {
			flexDirection: 'column',
		},
		'&.ss__inline-banner--list': {
			flexDirection: 'row',
			display: 'block',
			width: '100%',
		},
		'& iframe': {
			maxWidth: '100%',
		},
	});
};

export const InlineBanner = withController<any>(
	withTracking(
		observer((properties: InlineBannerProps) => {
			const globalTheme: Theme = useTheme();
			const snap = useSnap();
			const globalTreePath = useTreePath();

			const defaultProps: Partial<InlineBannerProps> = {
				layout: ResultsLayout.grid,
				width: 'auto',
				treePath: globalTreePath,
			};

			const props = mergeProps('inlineBanner', globalTheme, defaultProps, properties);

			const { banner, className, internalClassName, disableA11y, layout, onClick, customComponent } = props;

			if (customComponent) {
				const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.inlineBanner || {}, customComponent);
				if (ComponentOverride) {
					return <ComponentOverride {...props} />;
				}
			}

			const styling = mergeStyles<InlineBannerProps>(props, defaultStyles);

			return banner && banner.value ? (
				<CacheProvider>
					<div
						onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
							onClick && onClick(e, banner);
						}}
						role={'article'}
						ref={(e) => {
							!disableA11y ? useA11y(e) : null;
							// @ts-ignore - gets it from withTracking HOC
							properties.trackingRef.current = e;
						}}
						className={classnames('ss__inline-banner', `ss__inline-banner--${layout}`, className, internalClassName)}
						{...styling}
						dangerouslySetInnerHTML={{
							__html: banner.value,
						}}
					/>
				</CacheProvider>
			) : null;
		})
	)
);

export type InlineBannerProps = {
	controller?: SearchController | AutocompleteController | RecommendationController;
	banner: Banner;
} & InlineBannerTemplatesLegalProps &
	ComponentProps<InlineBannerProps>;

export type InlineBannerTemplatesLegalProps = {
	width?: string;
	layout?: keyof typeof ResultsLayout | ResultsLayout;
	onClick?: (e: React.MouseEvent, banner: Banner) => void;
	disableA11y?: boolean;
};
