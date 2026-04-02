import { css } from '@emotion/react';
import type { MobileSidebarProps, MobileSidebarTemplatesLegalProps } from '../../../../components/Organisms/MobileSidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const headerHeight = 60;
const footerHeight = 75;
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the MobileSidebar component
const mobileSidebarStyleScript = (props: MobileSidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const hideHeader = typeof props?.hideHeader == 'boolean' ? props.hideHeader : false;
	const hideFooter = typeof props?.hideFooter == 'boolean' ? props.hideFooter : false;

	// determine inner content height
	let innerHeight = 100;
	if (!hideHeader && !hideFooter) {
		innerHeight = headerHeight + footerHeight;
	} else if (hideHeader && !hideFooter) {
		innerHeight = headerHeight;
	} else if (hideFooter && !hideHeader) {
		innerHeight = footerHeight;
	}

	// mobile sidebar styles
	const mobileSidebarStyles = css({
		...custom.styles.boxSizing('mobileSidebar', props?.treePath, props?.name),
		'.ss__slideout__button .ss__button': {
			'.ss__button__content': {
				textAlign: 'left',
			},
		},
		'.ss__mobile-sidebar__slideout': {
			overflowY: 'hidden',
			padding: 0,
			width: '100%',
			'.ss__mobile-sidebar__content': {
				height: '100%',
				'.ss__mobile-sidebar__header, .ss__mobile-sidebar__footer': {
					padding: `0 ${custom.spacing.x4}px`,
					gap: `${custom.spacing.x2}px`,
					flexFlow: 'row nowrap',
					alignItems: 'center',
				},
				'.ss__mobile-sidebar__header': {
					height: `${headerHeight}px`,
					backgroundColor: activeColor,
					color: fontColor,
					'.ss__mobile-sidebar__header__title': {
						margin: 0,
						fontSize: '18px',
					},
					'.ss__mobile-sidebar__header__close-button': {
						padding: 0,
						margin: '0 0 0 auto',
						width: 'auto',
						height: 'auto',
						lineHeight: '0',
						border: 0,
						backgroundColor: 'transparent',
					},
				},
				'.ss__mobile-sidebar__inner': {
					height: innerHeight == 100 ? `${innerHeight}%` : `calc(100% - ${innerHeight}px)`,
					overflowY: 'auto',
					overflowX: 'hidden',
					...custom.styles.scrollbar(),
					'.ss__layout': {
						overflow: 'hidden',
						display: 'block',
						'& > *': {
							borderBottom: `1px solid ${custom.colors.gray02}`,
							padding: `${custom.spacing.x4}px`,
							'&:last-child': {
								borderBottomWidth: 0,
							},
						},
					},
					'.ss__filter-summary, .ss__facets': {
						padding: 0,
					},
					'.ss__filter-summary .ss__filter-summary__title, .ss__facets .ss__facet .ss__facet__header': {
						margin: 0,
						padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
						borderBottom: `1px solid ${custom.colors.gray01}`,
						backgroundColor: custom.colors.gray01,
						color: variables?.colors?.text,
						fontSize: '14px',
					},
					'.ss__filter-summary .ss__filter-summary__filters, .ss__facets .ss__facet .ss__dropdown__content': {
						padding: `${custom.spacing.x4}px`,
					},
					'.ss__facets .ss__facet': {
						margin: 0,
						'&.ss__facet--collapsed': {
							borderBottom: `1px solid ${custom.colors.gray02}`,
						},
					},
					'.ss__select .ss__dropdown .ss__dropdown__content': {
						zIndex: 6,
					},
					'.ss__select--native': {
						padding: `0 ${custom.spacing.x4}px`,
						borderTop: 0,
						height: '40px',
						lineHeight: '40px',
					},
				},
				'.ss__mobile-sidebar__footer': {
					height: `${footerHeight}px`,
					backgroundColor: custom.colors.white,
					borderTop: `1px solid ${custom.colors.gray02}`,
					'.ss__button': {
						flex: `1 1 0%`,
						'.ss__button__content': {
							width: 'auto',
						},
					},
				},
			},
		},
	});

	return mobileSidebarStyles;
};

// MobileSidebar component props
export const mobileSidebar: ThemeComponent<'mobileSidebar', MobileSidebarProps, MobileSidebarTemplatesLegalProps> = {
	default: {
		mobileSidebar: {
			themeStyleScript: mobileSidebarStyleScript,
			openButtonIcon: custom.icons.filter,
			closeButtonIcon: custom.icons.close,
		},
		'mobileSidebar button.close icon': {
			size: `${custom.sizes.icon16}px`,
		},
		'mobileSidebar facets icon.collapse': {
			color: 'currentColor',
		},
		'mobileSidebar facets icon.expand': {
			color: 'currentColor',
		},
	},
};
