import { css } from '@emotion/react';
import type { MobileSidebarProps, MobileSidebarTemplatesLegalProps } from '../../../../components/Organisms/MobileSidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the MobileSidebar component
const mobileSidebarStyleScript = (props: MobileSidebarProps) => {
	const variables = props?.theme?.variables;
	const headerHeight = 60;
	const footerHeight = 75;

	return css({
		'.ss__mobile-sidebar__slideout': {
			overflowY: 'hidden',
			padding: 0,
			width: '100%',
			'.ss__mobile-sidebar__content': {
				height: '100%',
				'.ss__mobile-sidebar__header, .ss__mobile-sidebar__footer': {
					padding: `0 ${custom.spacing.x4}px`,
					gap: `${custom.spacing.x2}px`,
					alignItems: 'center',
				},
				'.ss__mobile-sidebar__header': {
					height: `${headerHeight}px`,
					backgroundColor: variables?.colors?.primary,
					color: custom.colors.white,
					'.ss__mobile-sidebar__header__title': {
						margin: 0,
						fontSize: custom.utils.convertPxToEm(18),
					},
					'.ss__mobile-sidebar__header__close-button': {
						padding: 0,
						width: '16px',
						height: '16px',
						lineHeight: '16px',
						'.ss__icon': {
							width: '100%',
							height: '100%',
							lineHeight: 1,
						},
					},
				},
				'.ss__mobile-sidebar__footer': {
					height: `${footerHeight}px`,
					backgroundColor: custom.colors.white,
					borderTop: `1px solid ${custom.colors.gray02}`,
					'.ss__button': {
						flex: `1 1 0%`,
					},
				},
				'.ss__mobile-sidebar__inner': {
					height: `calc(100% - ${headerHeight + footerHeight}px)`,
					overflowY: 'auto',
					overflowX: 'hidden',
					'&::-webkit-scrollbar': {
						width: '8px',
						height: '8px',
					},
					'&::-webkit-scrollbar-track': {
						backgroundColor: custom.colors.gray01,
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: custom.colors.gray02,
					},
					'.ss__layout': {
						overflow: 'hidden',
						display: 'block',
						'& > *': {
							borderBottom: `1px solid ${custom.colors.gray02}`,
							padding: `${custom.spacing.x4}px`,
							'&:last-of-type': {
								borderBottomWidth: 0,
							},
						},
					},
					'.ss__select--native': {
						padding: `0 ${custom.spacing.x4}px`,
						borderTop: 0,
						height: '40px',
						lineHeight: '40px',
					},
					'.ss__filter-summary, .ss__facets': {
						padding: 0,
					},
					'.ss__filter-summary .ss__filter-summary__title, .ss__facets .ss__facet .ss__facet__header': {
						margin: 0,
						padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
						backgroundColor: custom.colors.gray01,
						border: 0,
						fontSize: custom.utils.convertPxToEm(14),
						fontWeight: custom.fonts.weight02,
						color: variables?.colors?.text,
					},
					'.ss__filter-summary .ss__filter-summary__filters, .ss__facets .ss__facet .ss__dropdown__content': {
						padding: `${custom.spacing.x4}px`,
					},
					'.ss__facets .ss__facet': {
						margin: 0,
						width: 'auto',
						'&.ss__facet--collapsed': {
							borderBottom: `1px solid ${custom.colors.gray02}`,
						},
						'.ss__facet__header': {
							'.ss__icon': {
								fill: 'currentColor',
								stroke: 'currentColor',
							},
						},
					},
				},
			},
		},
	});
};

// MobileSidebar component props
export const mobileSidebar: ThemeComponent<'mobileSidebar', MobileSidebarProps, MobileSidebarTemplatesLegalProps> = {
	default: {
		mobileSidebar: {
			themeStyleScript: mobileSidebarStyleScript,
		},
		'mobileSidebar button.close': {
			icon: custom.icons.close,
		},
		'mobileSidebar toolbar filterSummary': {
			title: 'Current Filters',
		},
	},
};
