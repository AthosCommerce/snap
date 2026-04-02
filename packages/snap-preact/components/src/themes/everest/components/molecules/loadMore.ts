import { css } from '@emotion/react';
import type { LoadMoreProps, LoadMoreTemplatesLegalProps } from '../../../../components/Molecules/LoadMore';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = (props: LoadMoreProps) => {
	const variables = props?.theme?.variables;
	const indicatorColor = new Color(props?.backgroundColor || custom.colors.gray01 || undefined);
	const indicatorBorderColor = new Color(props?.backgroundColor || custom.colors.gray02 || undefined);
	const barColor = new Color(props?.color || variables?.colors?.primary || undefined);

	return css({
		'&.ss__load-more': {
			'&, .ss__load-more__progress': {
				gap: `${custom.spacing.x2}px`,
			},
			'& > .ss__load-more__icon': {
				fill: variables?.colors?.primary,
				stroke: variables?.colors?.primary,
			},
			'.ss__button': {
				'.ss__button__content': {
					display: 'flex',
					alignItems: 'center',
				},
			},
			'.ss__load-more__progress': {
				'.ss__load-more__progress__indicator': {
					backgroundColor: indicatorColor.hex(),
					border: `1px solid ${indicatorBorderColor}`,
					'.ss__load-more__progress__indicator__bar': {
						backgroundColor: barColor.hex(),
						margin: '-1px',
					},
				},
				'.ss__load-more__progress__text': {
					color: variables?.colors?.text,
				},
			},
		},
	});
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps, LoadMoreTemplatesLegalProps> = {
	default: {
		loadMore: {
			themeStyleScript: loadMoreStyleScript,
		},
	},
};
