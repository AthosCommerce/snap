import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, withTracking, withController, useSnap } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

import { BannerContent, ContentType } from '@athoscommerce/snap-store-mobx';
import type { AutocompleteController, SearchController } from '@athoscommerce/snap-controller';
import { ComponentProps, StyleScript } from '../../../types';
import { useCallback } from 'preact/hooks';

const defaultStyles: StyleScript<BannerProps> = () => {
	return css({
		' *': {
			boxSizing: 'border-box',
		},
		'& iframe, img': {
			maxWidth: '100%',
			height: 'auto',
		},
	});
};

export const Banner = withController<any>(
	observer((properties: BannerProps) => {
		const globalTheme: Theme = useTheme();
		const snap = useSnap();
		const globalTreePath = useTreePath();
		const defaultProps: Partial<BannerProps> = {
			treePath: globalTreePath,
		};

		const props = mergeProps('banner', globalTheme, defaultProps, properties);

		const { controller, type, className, internalClassName, customComponent } = props;
		const content = props.content || controller?.store?.merchandising.content;

		if (customComponent) {
			const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.banner || {}, customComponent);
			if (ComponentOverride) {
				return <ComponentOverride {...props} />;
			}
		}

		if (type === ContentType.INLINE) {
			console.warn(`BannerType '${ContentType.INLINE}' is not supported in <Banner /> component`);
			return null;
		}

		const styling = mergeStyles<BannerProps>(props, defaultStyles);

		const banner = content?.[type]?.[0];
		const value = banner?.value;
		if (!type || !value) {
			return null;
		}
		const Content = useCallback(
			withTracking((trackingProps) => {
				return (
					<div
						className={classnames('ss__banner', `ss__banner--${type}`, className, internalClassName)}
						{...styling}
						ref={trackingProps.trackingRef}
						dangerouslySetInnerHTML={{
							__html: typeof value === 'string' ? value : value.join(''),
						}}
					/>
				);
			}),
			[value, type]
		);

		return (
			<CacheProvider>
				<Content {...props} />
			</CacheProvider>
		);
	})
);

export type BannerProps = {
	controller?: SearchController | AutocompleteController;
	name?: BannerNames;
} & BannerTemplatesLegalProps &
	ComponentProps<BannerProps>;

export type BannerTemplatesLegalProps = {
	content?: BannerContent;
	type: ContentType;
};

export type BannerNames = 'left' | 'header' | 'banner' | 'footer';
