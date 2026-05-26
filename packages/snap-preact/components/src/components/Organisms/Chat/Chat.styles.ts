import { css } from '@emotion/react';
import { Colour } from '../../../utilities';
import { StyleScript } from '../../../types';

export type ChatStyleProps = {
	mobile: boolean;
	offset?: string | number;
	hasSideChat?: boolean;
	footerHeight: number;
	primaryColorBg: string;
	primaryColorFg: string;
	primaryAccentColorBg: string;
	primaryAccentColorFg: string;
	secondaryAccentColorBg: string;
	secondaryAccentColorFg: string;
	position: 'left' | 'right';
};

export const chatDefaultStyles: StyleScript<ChatStyleProps> = ({
	mobile,
	offset,
	hasSideChat,
	footerHeight,
	primaryColorBg,
	primaryColorFg,
	primaryAccentColorBg,
	primaryAccentColorFg,
	secondaryAccentColorBg,
	secondaryAccentColorFg,
	position,
}) => {
	const isRight = position === 'right';
	// horizontal anchor for the root + bubble + suggested questions
	const horizontalAnchor = isRight ? 'right' : 'left';
	const colorPrimary = primaryColorBg;
	const colorPrimaryText = primaryColorFg;
	const colorPrimaryHover = new Colour(primaryColorBg).darkenHex();
	const colorPrimaryAccent = primaryAccentColorBg;
	const colorPrimaryAccentText = primaryAccentColorFg;
	const colorPrimaryAccentHover = new Colour(primaryAccentColorBg).darkenHex();
	const colorSecondaryAccent = secondaryAccentColorBg;
	const colorSecondaryAccentText = secondaryAccentColorFg;
	const colorSecondaryAccentHover = new Colour(secondaryAccentColorBg).darkenHex();
	const offsetValue = offset !== undefined ? (typeof offset === 'number' ? `${offset}px` : offset) : undefined;
	return css({
		position: 'fixed',
		[horizontalAnchor]: '20px',
		bottom: '20px',
		zIndex: 1002,
		color: '#333',

		'@keyframes ss-chat-slide-up': {
			from: { transform: 'translateY(100%)' },
			to: { transform: 'translateY(0)' },
		},

		'.ss__chat__primary': {
			...(mobile
				? { width: '100%', height: '100%' }
				: hasSideChat
				? { flex: '1 1 0', minWidth: 0, maxWidth: 600, height: '70vh' }
				: { width: 600, maxWidth: 'calc(100vw - 60px)', height: '70vh' }),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			overflow: 'hidden',
			order: isRight ? 2 : 1,
			'.ss__chat__header__title': {
				gap: '22px',
			},
			'.ss__chat__messages': {
				padding: '1em',
			},
		},
		'.ss__chat__secondary': {
			...(mobile
				? {
						width: '100%',
						maxWidth: '100%',
						height: `calc(100% - 70px${footerHeight > 0 ? ` - ${footerHeight}px` : ''})`,
						maxHeight: `calc(100% - 70px${footerHeight > 0 ? ` - ${footerHeight}px` : ''})`,
				  }
				: { flex: '1 1 0', minWidth: 0, maxWidth: 600, height: '70vh', maxHeight: '70vh' }),
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			order: isRight ? 1 : 2,
			...(mobile
				? {
						position: 'absolute',
						bottom: footerHeight > 0 ? footerHeight : 0,
						left: 0,
						right: 0,
						zIndex: 10,
						borderTopLeftRadius: '12px',
						borderTopRightRadius: '12px',
						overflow: 'hidden',
						overscrollBehavior: 'contain',
						boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
						background: '#fff',
						willChange: 'transform',
						animation: 'ss-chat-slide-up 0.3s ease-out',
				  }
				: {}),
			'.ss__chat__secondary__drag-handle': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '10px 0 2px',
				background: colorPrimary,
				touchAction: 'none',
				cursor: 'grab',
				'.ss__chat__secondary__drag-handle__indicator': {
					width: '36px',
					height: '4px',
					borderRadius: '2px',
					background: 'rgba(255, 255, 255, 0.4)',
				},
			},
			...(mobile
				? {
						'.ss__chat__header': {
							touchAction: 'none',
							cursor: 'grab',
						},
				  }
				: {}),
			'.ss__chat__header__title': {
				flexDirection: 'column',
				gap: '2px',
				'.ss__chat__header__title__primary': {
					fontWeight: 'bold',
				},
				'.ss__chat__header__title__secondary': {
					fontSize: '80%',
					opacity: 0.85,
				},
			},
			'.ss__chat__messages': {
				background: '#fff!important',
			},
		},

		'.ss__button': {
			border: 'none',
			background: 'none',
			color: 'inherit',
			'&:not(.ss__button--disabled):hover': {
				background: new Colour(colorPrimary).lightenHex(0.85),
			},
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat__bubble': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '20px' : 0,
			[horizontalAnchor]: mobile ? '20px' : 0,
			width: '60px',
			height: '60px',
			borderRadius: '50%',
			background: colorPrimary,
			color: colorPrimaryText,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			fontSize: '24px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			zIndex: 10,
			border: 'none',
			padding: 0,
			font: 'inherit',
			'&:hover': {
				background: colorPrimaryHover,
				transform: 'scale(1.05)',
			},
			'&:focus-visible': {
				outline: `2px solid ${colorPrimary}`,
				outlineOffset: '4px',
			},
			'.ss__icon': {
				height: '33px',
				width: '33px',
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},
		'.ss__chat__suggested-questions': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '90px' : '70px',
			[horizontalAnchor]: mobile ? '20px' : 0,
			display: 'flex',
			flexDirection: 'column',
			gap: '8px',
			width: '250px',
			zIndex: 10,
			'.ss__chat__suggested-questions__item': {
				background: '#fff',
				borderRadius: '12px',
				padding: '12px 16px',
				fontSize: '14px',
				color: '#333',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
				cursor: 'pointer',
				lineHeight: 1.4,
				'&:hover': {
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
				},
			},
		},
		'&.ss__chat--minimized': {
			width: '60px',
			height: '60px',
			minHeight: '60px',
		},
		'&.ss__chat--open': {
			display: 'flex',
			flexDirection: mobile ? 'column' : 'row',
			gap: mobile ? 0 : '12px',
			...(mobile
				? {
						top: offsetValue || 0,
						left: 0,
						right: 0,
						bottom: 0,
						width: '100%',
						height: offsetValue ? `calc(100% - ${offsetValue})` : '100%',
				  }
				: {
						// Hug the content width — two 600px panels + 12px gap — so the
						// container stays anchored to its side instead of stretching to
						// the opposite viewport edge when the side chat opens.
						width: hasSideChat ? 'min(calc(100vw - 60px), 1212px)' : 'auto',
						maxWidth: 'calc(100vw - 60px)',
						maxHeight: 'calc(100vh - 40px)',
				  }),
			'.ss__chat__bubble': {
				display: 'none',
			},
			// At constrained viewport heights (e.g. browser zoom-in) the fixed 70vh panels
			// leave too little room for the messages view once sticky header/footer content
			// is accounted for. Stretch the chat to fill the window minus the offset.
			...(mobile
				? {}
				: {
						'@media (max-height: 800px)': {
							top: offsetValue || 0,
							bottom: 0,
							height: offsetValue ? `calc(100vh - ${offsetValue})` : '100vh',
							maxHeight: offsetValue ? `calc(100vh - ${offsetValue})` : '100vh',
							'.ss__chat__primary': {
								height: '100%',
							},
							'.ss__chat__secondary': {
								height: '100%',
								maxHeight: '100%',
							},
							// The default 90vh cap on chat content would leave unfilled space when
							// the chat stretches to 100vh; primary's justifyContent: flex-end then
							// pushes its content down while secondary stays anchored to the top,
							// making the panels appear misaligned.
							'.ss__chat__content': {
								maxHeight: '100%',
							},
						},
				  }),
		},
		// Welcome state: only the greeting + suggested questions are shown, so let the
		// chat hug its content instead of taking the full 70vh / 100vh used once a
		// conversation has started. Mobile stays fullscreen by design.
		...(mobile
			? {}
			: {
					'&.ss__chat--welcome.ss__chat--open': {
						'.ss__chat__primary': {
							height: 'auto',
						},
						// With an auto-sized panel, the messages container's overflow/maxHeight
						// constraints (and the welcome's minHeight: 100%) resolve against an
						// undefined parent height and produce a stray scrollbar / clipped layout.
						// Let everything flow at its natural size.
						'.ss__chat__messages': {
							overflow: 'visible',
							maxHeight: 'none',
						},
						'.ss__chat__welcome': {
							minHeight: 0,
						},
						'@media (max-height: 800px)': {
							top: 'auto',
							bottom: '20px',
							height: 'auto',
							maxHeight: 'calc(100vh - 40px)',
							'.ss__chat__primary': {
								height: 'auto',
							},
						},
					},
			  }),
		'.ss__chat__header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			fontSize: '16px',
			position: 'relative',
			padding: '10px 15px',
			color: colorPrimaryText,
			background: colorPrimary,
			borderTopLeftRadius: mobile ? 0 : '12px',
			borderTopRightRadius: mobile ? 0 : '12px',

			'.ss__chat__header__title': {
				display: 'flex',
				'.ss__chat__header__title__logo': {
					height: '44px',
					width: 'auto',
				},
				'.ss__chat__header__title__text': {
					display: 'flex',
					flexDirection: 'column',
					'.ss__chat__header__title__text__primary': {
						fontWeight: 'bold',
					},
					'.ss__chat__header__title__text__secondary': {
						fontSize: '80%',
					},
				},
			},

			'.ss__chat__header__buttons': {
				display: 'flex',
				gap: '10px',
				'.ss__button': {
					display: 'flex',
					flexDirection: 'row-reverse',
					padding: '5px',
					border: 0,
					fontSize: '70%',
					'&:hover': {
						backgroundColor: 'transparent',
					},
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
			'.ss__chat__header__dropdown-history': {
				'&.ss__dropdown--open': {
					'.ss__dropdown__button': {
						backgroundColor: '#dddddd33',
						borderRadius: '6px',
					},
				},
				'.ss__dropdown__button': {
					display: 'flex',
					alignItems: 'center',
				},
			},
			'.ss__chat__history': {
				color: '#333',
				position: 'absolute',
				width: 300,
				minHeight: 170,
				top: 6,
				right: 0,
				background: 'white',
				zIndex: 21,
				boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
				borderRadius: '6px',
				display: 'flex',
				flexDirection: 'column',
				gap: 5,
				padding: '10px',
				boxSizing: 'border-box',
				'.ss__chat__history__header': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					h4: {
						margin: 0,
						fontSize: '14px',
					},
					'.ss__chat__history__header__buttons': {
						'.ss__button': {
							fontSize: '14px',
							color: '#333',
							'&:hover': {
								background: 'none',
								color: '#000',
							},
						},
					},
				},
				'.ss__chat__history__chats': {
					display: 'flex',
					flexDirection: 'column',
					gap: 5,
					maxHeight: '300px',
					overflowY: 'auto',
					'.ss__chat__history__chats__chat': {
						'.ss__button': {
							borderRadius: '12px',
							width: '100%',
							border: '1px solid #eee',
							fontSize: '12px',
							display: 'flex',
							flexDirection: 'column',
							boxSizing: 'border-box',
							'.ss__chat__history__chat__button__text': {
								fontWeight: 'bold',
							},
							'.ss__chat__history__chat__button__date': {},
						},
					},
				},
			},
		},
		'.ss__chat__session-feedback': {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: '8px 15px',
			background: new Colour(colorPrimary).darkenHex(0.1),
			color: colorPrimaryText,
			fontSize: '14px',
			'.ss__chat__session-feedback__icon': {
				flex: '0 0 auto',
				display: 'flex',
				alignItems: 'center',
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
			},
			'.ss__chat__session-feedback__label': {
				flex: '1 1 auto',
				whiteSpace: 'nowrap',
			},
			'.ss__chat__session-feedback__actions': {
				display: 'flex',
				gap: '6px',
				alignItems: 'center',
				'> span': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					opacity: 0.85,
					padding: '4px',
					borderRadius: '4px',
					border: '1px solid transparent',
					transition: 'opacity 0.15s ease, border-color 0.15s ease',
					'&:hover': {
						opacity: 1,
					},
				},
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
				'&.ss__chat__session-feedback__actions--rated > span': {
					opacity: 1,
					cursor: 'default',
					'&:hover': {
						borderColor: 'transparent',
					},
				},
			},
			'.ss__chat__session-feedback__close': {
				flex: '0 0 auto',
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				opacity: 0.85,
				transition: 'opacity 0.15s ease',
				'&:hover': {
					opacity: 1,
				},
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
			},
		},
		'.ss__chat__content': {
			background: '#fff',
			maxHeight: mobile ? undefined : '90vh',
			overflow: 'hidden',
			display: 'flex',
			flexDirection: 'column',
			border: `1px solid ${colorPrimary}`,
			borderTop: 'none',
			marginTop: '-1px',
			borderBottomRightRadius: mobile ? 0 : '12px',
			borderBottomLeftRadius: mobile ? 0 : '12px',
			flexGrow: 1,
			position: 'relative',
			'.ss__chat__content__header': {
				// In overlay mode (only applied when messages overflow), the comparisons
				// tray floats over the messages so toggling it doesn't shift the layout
				// or push the latest message out of view. When messages don't overflow,
				// the tray stays in flow so older messages remain reachable above it.
				'&.ss__chat__content__header--overlay': {
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					zIndex: 20,
				},
				// '.ss__chat__attachments': {
				// 	'.ss__chat__attachment': {
				// 		borderRadius: 0,
				// 		borderLeft: 0,
				// 		borderRight: 0,
				// 	},
				// },
				'.ss__chat__content__header__comparisons': {
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5em',
					background: new Colour(colorPrimary).lightenHex(0.95),
					padding: '0.5em 1em',

					'.ss__chat__content__header__comparisons__header': {
						display: 'flex',
						justifyContent: 'space-between',

						'.ss__chat__content__header__comparisons__header__title': {
							fontWeight: 'bold',
							fontSize: '1.2em',
							display: 'flex',
							alignItems: 'center',
							gap: '0.5em',
							'.ss__chat__content__header__comparisons__header__title__icon': {
								background: colorPrimary,
								borderRadius: '50%',
								padding: '5px',
								fill: colorPrimaryText,
								height: '25px',
								width: '25px',
							},
						},
						'.ss__chat__content__header__comparisons__header__actions': {
							'.ss__button': {
								border: 'none',
								background: 'none',
							},
						},
					},
					'.ss__chat__content__header__comparisons__content': {
						display: 'flex',
						gap: '1em',
						alignItems: 'stretch',

						'.ss__chat__content__header__comparisons__content__items': {
							display: 'flex',
							flex: '1 1 calc(100% - 100px)',
							justifyContent: 'space-between',
							gap: '0.5em',
						},

						'.ss__chat__content__header__comparisons__content__comparison': {
							background: '#fff',
							padding: '0.5em',
							borderRadius: '1em',
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5em',
							flex: '0 1 25%',
							position: 'relative',

							'&.ss__chat__content__header__comparisons__content__comparison--placeholder': {
								border: '2px dashed #ddd',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								'.ss__chat__content__header__comparisons__content__comparison--placeholder__text': {
									color: '#999',
									fontStyle: 'italic',
								},
							},

							'.ss__chat__content__header__comparisons__content__comparison__remove': {
								position: 'absolute',
								top: '-3px',
								right: '-3px',
								cursor: 'pointer',
								background: 'red',
								borderRadius: '50%',
								padding: '0.4em',
								height: 20,
								width: 20,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								svg: {
									fill: '#fff',
									stroke: '#fff',
								},
							},
						},

						'.ss__chat__content__header__comparisons__action': {
							display: 'flex',
							alignItems: 'center',
							marginLeft: 'auto',
							flex: '1 1 auto',

							'&.ss__chat__content__header__comparisons__action--hidden': {
								visibility: 'hidden',
							},

							'.ss__button': {
								flexDirection: 'row-reverse',
								borderRadius: '1em',
								padding: '0.5em 1em',
								background: colorPrimary,
								color: colorPrimaryText,
								textAlign: 'center',
								svg: {
									fill: colorPrimaryText,
									stroke: colorPrimaryText,
								},
							},
						},
					},
				},
			},
			'.ss__chat__messages': {
				flex: '1 1 auto',
				overflowY: 'auto',
				overscrollBehavior: 'contain',
				margin: 0,
				maxHeight: '100%',
				background: new Colour(colorPrimary).lightenHex(0.95),

				'.ss__chat__messages__end': {
					height: '1px',
				},
				'.ss__chat__new-messages': {
					position: 'sticky',
					bottom: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '6px',
					margin: '0 auto',
					width: 'fit-content',
					padding: '6px 16px',
					background: colorPrimary,
					color: colorPrimaryText,
					borderRadius: '999px',
					fontSize: '13px',
					fontWeight: 500,
					cursor: 'pointer',
					boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
					zIndex: 5,
					'&:hover': {
						background: colorPrimaryHover,
					},
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
				'.ss__chat__message': {
					marginBottom: '30px',
					ul: {
						margin: 0,
						listStyle: 'inside',
					},
					p: {
						margin: 0,
					},
					thead: {
						backgroundColor: '#eee',
					},
					'tbody tr:nth-child(even)': {
						backgroundColor: '#f5f5f5',
					},
					'table th, table td': {
						padding: '0.2em 0.5em',
					},
					'table + h3': {
						margin: '1em 0 0 0',
						fontSize: '1.3em',
					},
				},
				'.ss__chat__welcome': {
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100%',
					'.ss__chat__welcome__message': {
						fontSize: '15px',
						lineHeight: 1.5,
						color: '#333',
						padding: '2em',
						textAlign: 'left',
					},
					'.ss__chat-suggested-questions': {
						marginTop: 'auto',
						'.ss__chat-suggested-questions__item': {
							padding: '8px 16px',
						},
					},
				},
			},
			'.ss__chat__actions': {
				display: 'flex',
				flexDirection: 'column',
				gap: '6px',
				overflow: 'hidden',
				'.ss__chat__actions__wrap': {
					display: 'flex',
					flexDirection: 'column',
					gap: '6px',
					padding: '8px 10px',
					background: new Colour(colorPrimary).lightenHex(0.95),
					border: `1px solid ${new Colour(colorPrimary).lightenHex(0.85)}`,
					borderRadius: '8px',
				},
				'.ss__chat__actions--title': {
					fontSize: '14px',
					color: '#333',
				},
				'.ss__chat__actions--facets, .ss__chat__actions--suggested': {
					display: 'flex',
					flexDirection: 'row',
					gap: '6px',
					'.ss__button': {
						flex: '0 0 auto',
						background: '#fff',
						border: '1px solid #ddd',
						borderRadius: '999px',
						padding: '3px 10px',
						fontSize: '14px',
						color: '#333',
						'&:hover': {
							background: new Colour(colorPrimary).lightenHex(0.97),
						},
					},
				},
				'.ss__chat__actions--facets': {
					overflowX: 'auto',
					overflowY: 'hidden',
					scrollbarWidth: 'none' as const,
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
				'.ss__chat__actions--suggested': {
					overflowX: 'scroll',
				},
				'.ss__chat__actions__facet': {
					padding: '1px', // make room for outline when focused
					flexShrink: 0,
				},
				'.ss__chat__actions__facets-dropdown': {
					'.ss__dropdown__content': {
						bottom: '0',
						top: 'auto',
						left: '-15px',
						width: mobile ? '100vw' : '600px',
						zIndex: 100,
						background: 'white',
						borderTop: '1px solid #ddd',
					},
				},
			},
			'.ss__chat__facets': {
				'.ss__chat__facets__header': {
					display: 'flex',
					flexDirection: mobile ? 'column' : 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '10px',
					'.ss__chat__facets__header__title': {
						width: mobile ? '100%' : undefined,
						fontSize: '18px',
						fontWeight: 'bold',
						color: '#333',
						order: mobile ? 1 : 0,
						marginTop: mobile ? '10px' : 0,
					},
					'.ss__chat__facets__close': {
						order: mobile ? 0 : 1,
						display: 'flex',
						justifyContent: mobile ? 'center' : 'flex-end',
						'.ss__chat__facets__close__button': {
							width: mobile ? '100px' : '20px',
							borderRadius: mobile ? '4px' : undefined,
							background: mobile ? '#ccc' : 'none',
							padding: '5px',
							flexGrow: 0,
							border: 'none',
							'.ss__icon': {
								display: mobile ? 'none' : 'inline',
							},
						},
					},
				},
				'.ss__chat__facets__wrapper': {
					padding: '10px',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					'.ss__chat__facets__facet': {
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						'.ss__chat__facets__facet__label': {
							fontWeight: 'bold',
							fontSize: '14px',
							marginRight: '10px',
						},
						'.ss__chat__facets__facet__options': {
							display: 'flex',
							gap: '5px',
							overflowX: 'scroll',
							'.ss__chat__facets__facet__options__option': {
								flexGrow: 0,
							},
						},
					},
				},
			},
			'.ss__chat__actions__facets-header': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			},
			'.ss__chat__actions__facets-apply': {
				display: 'flex',
				justifyContent: 'flex-end',
				padding: '0 2px',
				// reserve the slot so toggling the button's visibility doesn't reflow the header
				visibility: 'hidden',
				'&.ss__chat__actions__facets-apply--active': {
					visibility: 'visible',
				},
				'.ss__button': {
					background: colorPrimary,
					color: colorPrimaryText,
					border: 'none',
					borderRadius: '999px',
					padding: '2px 10px',
					fontSize: '12px',
					lineHeight: '1.4',
					cursor: 'pointer',
					'&:not(.ss__button--disabled):hover': {
						background: colorPrimaryHover,
					},
					'&.ss__button--disabled': {
						opacity: 0.5,
						cursor: 'not-allowed',
					},
				},
			},
			'@keyframes ss-chat-dot-pulse': {
				'0%, 80%, 100%': {
					transform: 'scale(0.6)',
					opacity: 0.5,
				},
				'40%': {
					transform: 'scale(1)',
					opacity: 1,
				},
			},
			'.ss__chat__attachment-context': {
				display: 'flex',
				flexDirection: 'column',
				gap: '6px',
				padding: '8px 10px',
				background: new Colour(colorPrimary).lightenHex(0.95),
				border: `1px solid ${new Colour(colorPrimary).lightenHex(0.85)}`,
				borderRadius: '8px',
				'.ss__chat__attachment-context__label': {
					fontSize: '14px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '8px',
					'.ss__chat__attachment-context__label__close': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						flex: '0 0 auto',
					},
				},
				'.ss__chat__attachment-context__items': {
					display: 'flex',
					flexWrap: 'wrap',
					gap: '6px',
				},
				'.ss__chat__attachment-context__item': {
					display: 'flex',
					alignItems: 'center',
					gap: '6px',
					padding: '3px 8px 3px 3px',
					background: '#fff',
					border: '1px solid #ddd',
					borderRadius: '999px',
					maxWidth: 'calc(50% - 3px)',
					position: 'relative',
					'.ss__chat__attachment-context__item__content': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flex: '0 0 auto',
						'.ss__image': {
							width: '30px',
							height: '30px',
							margin: 0,
							img: {
								width: '30px',
								height: '30px',
								borderRadius: '50%',
								objectFit: 'cover',
							},
						},
					},
					'.ss__chat__attachment-context__item__name': {
						fontSize: '14px',
						color: '#333',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						flex: '1 1 auto',
						minWidth: 0,
					},
					'.ss__chat__attachment-context__item__remove': {
						width: '18px',
						height: '18px',
						minWidth: 'auto',
						margin: 0,
						padding: 0,
						background: 'none',
						border: 'none',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						flex: '0 0 auto',
						svg: {
							fill: '#6A7282',
							stroke: '#6A7282',
						},
						'&:hover': {
							svg: {
								fill: '#000',
								stroke: '#000',
							},
						},
					},
					'.ss__chat__attachment-context__item__loading': {
						display: 'flex',
						gap: '3px',
						margin: 0,
						'.ss__chat__loading__dot': {
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							backgroundColor: '#ccc',
							animation: 'ss-chat-dot-pulse 1.4s infinite ease-in-out both',
							'&:nth-of-type(1)': {
								animationDelay: '-0.32s',
							},
							'&:nth-of-type(2)': {
								animationDelay: '-0.16s',
							},
						},
					},
					'&.error': {
						border: '1px solid #dc3545',
						background: '#fff5f5',
						'.ss__chat__attachment-context__item__error-icon': {
							fontSize: '14px',
							color: '#dc3545',
							margin: '0 4px',
							flex: '0 0 auto',
						},
						'.ss__chat__attachment-context__item__error-message': {
							fontSize: '12px',
							color: '#dc3545',
							whiteSpace: 'normal',
							wordBreak: 'break-word',
							flex: '1 1 auto',
							minWidth: 0,
						},
						'.ss__button': {
							svg: {
								fill: '#dc3545',
								stroke: '#dc3545',
							},
						},
					},
					img: {
						'&.loading': {
							opacity: 0.3,
						},
					},
				},
			},
			'.ss__chat__content__footer': {
				padding: '1em',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				flexShrink: 0,
				position: 'relative' as const,
				...(mobile
					? {
							zIndex: 11,
							background: '#fff',
					  }
					: {}),
				'.ss__chat__content__footer__drop-overlay': {
					position: 'absolute' as const,
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '8px',
					borderRadius: '6px',
					border: `2px dashed ${colorPrimary}`,
					backgroundColor: new Colour(colorPrimary).lightenHex(0.9),
					color: colorPrimary,
					fontWeight: 'bold',
					pointerEvents: 'none' as const,
					zIndex: 12,
					svg: {
						fill: colorPrimary,
						stroke: colorPrimary,
					},
				},
			},
			'.ss__chat__topic-drift': {
				display: 'flex',
				alignItems: 'center',
				gap: '12px',
				padding: '12px 16px',
				border: `1px solid ${new Colour(colorPrimary).lightenHex(0.6)}`,
				borderRadius: '8px',
				backgroundColor: '#fff',
				'.ss__chat__topic-drift__icon--info': {
					flex: '0 0 auto',
					fill: colorPrimary,
					stroke: colorPrimary,
					svg: {
						fill: colorPrimary,
						stroke: colorPrimary,
					},
				},
				'.ss__chat__topic-drift__text': {
					flex: '1 1 0%',
					display: 'flex',
					flexDirection: 'column',
					gap: '2px',
					'span:first-of-type': {
						fontWeight: 'bold',
						color: colorPrimary,
						fontSize: '14px',
					},
					'span:last-of-type': {
						color: '#6A7282',
						fontSize: '13px',
					},
				},
				'.ss__chat__topic-drift__button': {
					flex: '0 0 auto',
					backgroundColor: colorPrimary,
					color: colorPrimaryText,
					borderRadius: '6px',
					padding: '8px 14px',
					fontSize: '13px',
					fontWeight: 500,
					cursor: 'pointer',
					whiteSpace: 'nowrap',
					'&:not(.ss__button--disabled):hover': {
						background: colorPrimaryHover,
					},
				},
				'.ss__chat__topic-drift__icon--close': {
					flex: '0 0 auto',
					cursor: 'pointer',
					fill: '#6A7282',
					stroke: '#6A7282',
					svg: {
						fill: '#6A7282',
						stroke: '#6A7282',
					},
				},
			},
			'.ss__chat__input': {
				display: 'flex',
				justifyContent: 'space-between',
				gap: '8px',
				flexShrink: 0,
				'.ss__chat__input__input': {
					flex: '1 1 0%',
					minWidth: 0,
					border: '1px solid #ccc',
					borderRadius: '2em',
					display: 'flex',
					justifyContent: 'space-between',
					overflow: 'auto',
					'input[type="text"]': {
						padding: '0.5em 0',
						margin: '0 0 0 1em',
						flex: '1 0 auto',
						border: 'none',
						'&::placeholder': {
							color: '#999',
							opacity: 0.7,
						},
						'&:focus': {
							outline: 'none',
							borderColor: colorPrimary,
						},
					},
					'.ss__button': {
						margin: '0 0.5em 0 0',
						'&:hover': {
							backgroundColor: 'transparent',
						},
					},
					'input[type="file"]': {
						display: 'none',
					},
				},
				'.ss__chat__input__actions': {
					'.ss__button': {
						backgroundColor: colorPrimary,
						color: colorPrimaryText,
						borderRadius: '50%',
						height: '3em',
						width: '3em',
						cursor: 'pointer',
						justifyContent: 'center',
						boxSizing: 'border-box',
						'&:disabled': {
							opacity: 0.5,
							cursor: 'not-allowed',
						},
						svg: {
							fill: colorPrimaryText,
							stroke: colorPrimaryText,
						},
					},
				},
			},
			'.ss__chat__disclaimer': {
				fontSize: '10px',
				color: '#6A7282',
				textAlign: 'center',
				flexShrink: 0,
			},
			'.ss__chat__result__image__icons__icon--cart': {
				backgroundColor: `${colorPrimaryAccent} !important`,
				svg: {
					fill: `${colorPrimaryAccentText} !important`,
					stroke: `${colorPrimaryAccentText} !important`,
				},
			},
			'.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button': {
				background: `${colorPrimaryAccent} !important`,
				color: `${colorPrimaryAccentText} !important`,
				'&:not(.ss__button--disabled):hover': {
					background: `${colorPrimaryAccentHover} !important`,
				},
			},
			// Secondary accent — applied to the productQuery button (ChatResult inquire icon)
			// and the "Show similar" button (ChatProductQueryMessage). Both elements live in
			// child components but their styling overrides are intentionally scoped here so
			// the Chat-level theme can drive them.
			'.ss__chat__result__image__icons__icon--inquire': {
				backgroundColor: `${colorSecondaryAccent} !important`,
				svg: {
					fill: `${colorSecondaryAccentText} !important`,
					stroke: `${colorSecondaryAccentText} !important`,
				},
			},
			'.ss__chat-product-query-message__header__product__actions__show-similar .ss__button, .ss__chat-product-query-message__header__product__actions__discuss-product .ss__button':
				{
					background: `${colorSecondaryAccent} !important`,
					color: `${colorSecondaryAccentText} !important`,
					border: `1px solid ${colorSecondaryAccentText} !important`,
					'&:not(.ss__button--disabled):hover': {
						background: `${colorSecondaryAccentHover} !important`,
					},
				},
			'.ss__chat__expired': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '12px',
				padding: '16px',
				textAlign: 'center',
				color: '#6A7282',
				'.ss__chat__expired__message': {
					fontSize: '14px',
				},
				'.ss__chat__expired__button': {
					alignSelf: 'center',
				},
			},
		},
	});
};
