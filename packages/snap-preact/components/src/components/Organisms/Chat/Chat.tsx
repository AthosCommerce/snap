import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Button } from '../../Atoms/Button';
import { useRef, useEffect, useMemo } from 'preact/hooks';
import { Slideout } from '../../Molecules/Slideout';
import { Quickview } from './Quickview';
import { MessageUser } from './MessageUser';
import { MessageText } from './MessageText';
import { SuggestedQuestions } from './SuggestedQuestions';
import { Attachment } from './Attachment';
import { Image } from '../../Atoms/Image';
import { ChatLoadingIndicator } from '../../Atoms/ChatLoadingIndicator';
import { FacetsData } from '@athoscommerce/snap-store-mobx';

import { Dropdown, Icon, Overlay, useMediaQuery } from '../../..';
import { ChatInspirationResultMessage } from '../../Molecules/ChatInspirationResultMessage';
import { ChatProductComparisonMessage } from '../../Molecules/ChatProductComparisonMessage/ChatProductComparisonMessage';
import { ChatProductAnswerMessage } from '../../Molecules/ChatProductAnswerMessage/ChatProductAnswerMessage';
import {
	ChatResponseInspirationResultData,
	ChatResponseProductComparisonData,
	ChatResponseProductAnswerData,
	ChatResponseActionsData,
} from '@athoscommerce/snap-client/dist/cjs/Client/transforms/chatResponse';

const defaultStyles: StyleScript<{ mobile: boolean }> = ({ mobile }) => {
	const colorPrimary = '#253B80';
	return css({
		position: 'fixed',
		left: '20px',
		bottom: '20px',
		zIndex: 1002,
		color: '#333',

		'.ss__chat__primary': {
			width: mobile ? '100%' : '40%',
			maxWidth: 600,
			height: mobile ? '100%' : 'auto',
			minHeight: '60vh',
			maxHeight: mobile ? '100%' : 'calc(100vh - 40px)',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			overflow: 'hidden',
			order: 1,
			'.ss__chat__header__title': {
				gap: '22px',
			},
		},
		'.ss__chat__secondary': {
			width: mobile ? '100%' : '40%',
			maxWidth: mobile ? '100%' : 600,
			maxHeight: mobile ? '80%' : 'calc(100vh - 40px)',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			order: 2,
			...(mobile
				? {
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 10,
						borderTopLeftRadius: '12px',
						borderTopRightRadius: '12px',
						overflow: 'hidden',
						boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
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
				background: '#dfeaf6',
			},
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat__bubble': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '20px' : 0,
			left: mobile ? '20px' : 0,
			width: '60px',
			height: '60px',
			borderRadius: '50%',
			background: colorPrimary,
			color: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			fontSize: '24px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			zIndex: 10,
			'&:hover': {
				background: '#0052a3',
				transform: 'scale(1.05)',
			},
			'.ss__icon': {
				height: '33px',
				width: '33px',
				fill: '#fff',
				stroke: '#fff',
			},
		},
		'.ss__chat__suggested-questions': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '90px' : '70px',
			left: mobile ? '20px' : 0,
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
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
				cursor: 'pointer',
				lineHeight: 1.4,
				'&:hover': {
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
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
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						width: '100%',
						height: '100%',
				  }
				: {
						width: 'calc(100vw - 60px)',
						maxHeight: 'calc(100vh - 40px)',
				  }),
			'.ss__chat__bubble': {
				display: 'none',
			},
		},
		'.ss__chat__header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			fontSize: '16px',
			position: 'relative',
			padding: '10px 15px',
			color: '#fff',
			background: colorPrimary,
			borderTopLeftRadius: mobile ? 0 : '12px',
			borderTopRightRadius: mobile ? 0 : '12px',

			'.ss__chat__header__title': {
				display: 'flex',
				'.ss__chat__header__title__logo': {
					height: '44px',
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
						fill: '#fff',
						stroke: '#fff',
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
				zIndex: 2,
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
					flexDirection: 'column-reverse',
					gap: 5,
					'.ss__chat__history__chats__chat': {
						'.ss__button': {
							borderRadius: '12px',
							width: '100%',
							border: '1px solid #eee',
							fontSize: '12px',
							display: 'flex',
							flexDirection: 'column',
							boxSizing: 'border-box',
							'.ss__chat__history__chat__button__text': {},
							'.ss__chat__history__chat__button__date': {
								fontSize: '70%',
							},
						},
					},
				},
			},
		},
		'.ss__chat__content': {
			background: '#fff',
			maxHeight: mobile ? undefined : '90vh',
			overflow: 'hidden',
			display: 'flex',
			flexDirection: 'column',
			border: '1px solid #0066cc',
			borderTop: 'none',
			marginTop: '-1px',
			borderBottomRightRadius: mobile ? 0 : '12px',
			borderBottomLeftRadius: mobile ? 0 : '12px',
			flexGrow: 1,
			'.ss__chat__content__header': {
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
					gap: '1em',
					background: '#f4f4ff',
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
								fill: '#fff',
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
							gap: '1em',
							flex: '1 1 calc(100% - 100px)',
							justifyContent: 'space-between',
						},

						'.ss__chat__content__header__comparisons__content__comparison': {
							background: '#fff',
							padding: '0.5em',
							borderRadius: '1em',
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5em',
							flex: '0 1 20%',
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
								color: '#fff',
								textAlign: 'center',
								svg: {
									fill: '#fff',
									stroke: '#fff',
								},
							},
						},
					},
				},
			},
			'.ss__chat__messages': {
				flex: '1 1 auto',
				overflowY: 'auto',
				margin: 0,
				padding: '20px',
				maxHeight: '100%',
				background: '#f9fafc',

				'.ss__chat__messages__end': {
					height: '1px',
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
					height: '100%',
					'.ss__chat__welcome__message': {
						fontSize: '15px',
						lineHeight: 1.5,
						color: '#333',
						marginBottom: '20px',
					},
					'.ss__chat__suggestions': {
						marginTop: 'auto',
					},
				},
			},
			'.ss__chat__actions': {
				'.ss__button': {
					border: '1px solid #eee',
					borderRadius: '12px',
				},
				'.ss__chat__actions--facets, .ss__chat__actions--suggested': {
					display: 'inline-flex',
					gap: 5,
					flexDirection: 'row',
					paddingBottom: '10px',
					'.ss__button': {
						flex: '1 0 auto',
					},
				},
				'.ss__chat__actions--suggested': {
					overflowX: 'scroll',
				},
				'.ss__chat__actions__facet': {
					'.ss__dropdown__content': {
						width: '150px',
						bottom: '33px',
						top: 'auto',
						zIndex: 100,
						background: 'white',
						boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
						borderRadius: '6px',
						'.ss__button': {
							width: '100%',
							border: 'none',
							borderRadius: 0,
							boxSizing: 'border-box',
						},
					},
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
			'.ss__chat__attachments': {
				display: 'flex',
				gap: '8px',
				flexWrap: 'wrap',
				'.ss__chat__attachment': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					border: '1px solid #ddd',
					borderRadius: '12px',
					padding: '4px',
					backgroundColor: '#f9f9f9',
					'&.ss__chat__attachment--facet': {
						paddingRight: '15px',
					},
					'&.ss__chat__attachment--product': {
						width: '100%',
					},
					'&.ss__chat__attachment--image': {
						width: '100%',
					},
					'&.error': {
						border: '1px solid #dc3545',
						backgroundColor: '#fff5f5',
						width: '100%',
						'.ss__chat__attachment__error-icon': {
							fontSize: '24px',
							margin: '0 6px',
							color: '#dc3545',
						},
						'.ss__chat__attachment__error-message': {
							fontSize: '11px',
							color: '#dc3545',
							textAlign: 'center',
							lineHeight: 1.2,
							flexGrow: 1,
						},
						'.ss__button': {
							svg: {
								fill: '#dc3545',
								stroke: '#dc3545',
							},
						},
					},
					'.ss__chat__attachment__info': {
						padding: '0.5em 1em',
						flexGrow: 1,
					},
					'.ss__chat__attachment__content': {
						position: 'relative',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						'.ss__image': {
							margin: '0 10px',
						},
					},
					'.ss__chat__attachment__error': {
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '4px',
						padding: '8px',
					},
					'.ss__chat__attachment__loading': {
						margin: '0 10px',
						display: 'flex',
						gap: '4px',
						'.ss__chat__loading__dot': {
							width: '8px',
							height: '8px',
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
					img: {
						borderRadius: '12px',
						'&.loading': {
							opacity: 0.3,
						},
					},
					'.ss__chat__attachment__remove': {
						width: '33px',
						height: '33px',
						background: 'none',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						padding: '0',
						margin: '16px',
						minWidth: 'auto',
						svg: {
							fill: '#333',
							stroke: '#333',
						},
						'&:hover': {
							svg: {
								fill: '#000',
								stroke: '#000',
							},
						},
					},
				},
				'.ss__chat__error': {
					fontSize: '12px',
					color: '#666',
					width: '100%',
					textAlign: 'right',
				},
				'.ss__chat__attachments__info': {
					fontSize: '12px',
					color: '#666',
					width: '100%',
					textAlign: 'right',
				},
			},
			'.ss__chat__content__footer': {
				padding: '1em',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
			},
			// TODO: to be added in future
			// '.ss__chat__topic-drift': {
			// 	display: 'flex',
			// 	alignItems: 'center',
			// 	gap: '12px',
			// 	padding: '12px 16px',
			// 	border: '1px solid #93C5FD',
			// 	borderRadius: '8px',
			// 	backgroundColor: '#fff',
			// 	'.ss__chat__topic-drift__icon--info': {
			// 		flex: '0 0 auto',
			// 		fill: colorPrimary,
			// 		stroke: colorPrimary,
			// 		svg: {
			// 			fill: colorPrimary,
			// 			stroke: colorPrimary,
			// 		},
			// 	},
			// 	'.ss__chat__topic-drift__text': {
			// 		flex: '1 1 0%',
			// 		display: 'flex',
			// 		flexDirection: 'column',
			// 		gap: '2px',
			// 		'span:first-of-type': {
			// 			fontWeight: 'bold',
			// 			color: colorPrimary,
			// 			fontSize: '14px',
			// 		},
			// 		'span:last-of-type': {
			// 			color: '#6A7282',
			// 			fontSize: '13px',
			// 		},
			// 	},
			// 	'.ss__chat__topic-drift__button': {
			// 		flex: '0 0 auto',
			// 		backgroundColor: colorPrimary,
			// 		color: '#fff',
			// 		borderRadius: '6px',
			// 		padding: '8px 14px',
			// 		fontSize: '13px',
			// 		fontWeight: 500,
			// 		cursor: 'pointer',
			// 		whiteSpace: 'nowrap',
			// 		'&:not(.ss__button--disabled):hover': {
			// 			background: '#1a2a5c',
			// 		},
			// 	},
			// 	'.ss__chat__topic-drift__icon--close': {
			// 		flex: '0 0 auto',
			// 		cursor: 'pointer',
			// 		fill: '#6A7282',
			// 		stroke: '#6A7282',
			// 		svg: {
			// 			fill: '#6A7282',
			// 			stroke: '#6A7282',
			// 		},
			// 	},
			// },
			'.ss__chat__input': {
				display: 'flex',
				justifyContent: 'space-between',
				gap: '8px',
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
						'&::placeholder': {
							color: '#999',
							opacity: 0.7,
						},
						'&:focus': {
							outline: 'none',
							borderColor: '#0066cc',
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
						borderRadius: '50%',
						height: '3em',
						width: '3em',
						cursor: 'pointer',
						justifyContent: 'center',
						'&:disabled': {
							opacity: 0.5,
							cursor: 'not-allowed',
						},
						svg: {
							fill: '#fff',
							stroke: '#fff',
						},
					},
				},
			},
			'.ss__chat__disclaimer': {
				fontSize: '10px',
				color: '#6A7282',
				textAlign: 'center',
			},
		},
	});
};

export const Chat = observer((properties: ChatProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const isMobile = useMediaQuery('(max-width: 767px)');

	const defaultProps: Partial<ChatProps> = {
		treePath: globalTreePath,
		logo: 'https://cdn.athoscommerce.net/snap/images/Athos%20Commerce_Icon_white.svg',
		title: 'Athos AI Assistant',
		subtitle: 'Ready to assist you',
	};

	let props = mergeProps('facets', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller, logo, title, subtitle } = props;
	const { store } = controller;

	const themeDefaults: Theme = {
		components: {},
	};

	// merge deeply the themeDefaults with the theme props and the displaySettings theme props (do not merge arrays, but replace them)
	const theme = deepmerge(themeDefaults, props?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

	props = {
		...props,
		theme,
	};

	const fileInputRef = useRef<HTMLInputElement>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messagesContainerRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	// Auto-scroll to bottom when new messages are added or chat state changes
	useEffect(() => {
		// if (store.open && messagesContainerRef.current) {
		// 	messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
		// }

		if (store.open) {
			scrollToBottom();
		}
	}, [store.currentChat?.chat.length, store.loading, store.open]);

	// const subProps: ChatSubProps = {};

	const styling = mergeStyles<{ mobile: boolean }>({ mobile: isMobile }, defaultStyles);

	const HistoryButton = (props: { disabled?: boolean; open?: boolean }) => (
		<Button
			className="ss__chat__header__button--history"
			disabled={props.disabled}
			icon={{
				icon: 'history',
				title: 'Chat History',
			}}
		/>
	);

	const HistoryPopup = (props: { toggleOpen?: () => void }) => (
		<div className="ss__chat__history">
			<div className="ss__chat__history__header">
				<h4>History</h4>
				<div className="ss__chat__history__header__buttons">
					<Button
						content="clear"
						onClick={() => {
							controller.store.reset();
							controller.search();
							props.toggleOpen && props.toggleOpen();
						}}
					/>
				</div>
			</div>
			{store.chats.length > 0 ? (
				<div className="ss__chat__history__chats">
					{store.chats.map((chat) => (
						<div key={chat.id} className="ss__chat__history__chats__chat">
							<Button
								className="ss__chat__history__chat__button"
								onClick={() => {
									controller.store.switchChat(chat.id);
								}}
								disabled={chat.id === store.currentChatId}
							>
								<div className="ss__chat__history__chat__button__text">
									{/* {chat.chat.length > 1 ? filters.truncate(chat.chat[1].text, 50) : `New Chat`} */}
								</div>
								<div className="ss__chat__history__chat__button__date">{chat.createdAt.toLocaleString()}</div>
							</Button>
						</div>
					))}
				</div>
			) : null}
		</div>
	);

	// const FacetButton = (props: { label: string; open?: boolean }) => <Button icon={props.open ? 'angle-down' : 'angle-up'}>{props.label}</Button>;

	const FacetsPopup = (props: { action: FacetsData; toggleOpen?: () => void }) => (
		<div className="ss__chat__facets">
			<div className="ss__chat__facets__header">
				<div className="ss__chat__facets__close">
					<Button icon="close-thin" className="ss__chat__facets__close__button" onClick={props.toggleOpen} />
				</div>
				<div className="ss__chat__facets__header__title">Filter Results</div>
			</div>
			<div className="ss__chat__facets__wrapper">
				{/* {props.action.data.map((facet, idx) => (
					<div className="ss__chat__facets__facet" key={idx}>
						<div className="ss__chat__facets__facet__label">{facet.label}</div>
						<div className="ss__chat__facets__facet__options">
							{facet.options?.map((option) => (
								<Button
									className="ss__chat__facets__facet__options__option"
									key={option.key}
									onClick={() => {
										controller.store.addFacet({
											key: facet.key,
											facetLabel: facet.label,
											value: option.key,
											label: option.label,
											count: option.count,
										});
										controller.search();
									}}
								>
									{option.label}
								</Button>
							))}
						</div>
					</div>
				))} */}
			</div>
		</div>
	);

	// TODO: if starting a new chat and it's expired, this button would then disappear
	if (!controller.store.chatEnabled) {
		return <></>;
	}

	const activeMessage = store.currentChat?.activeMessage;
	const shouldShowSideChat = activeMessage && ['inspirationResult', 'productComparison', 'productAnswer'].includes(activeMessage?.messageType);
	const requestType = store.currentChat?.requestType;
	const loadingVerbs = useMemo(() => {
		switch (requestType) {
			case 'productQuery':
				return ['Thinking', 'Searching', 'Analyzing', 'Gathering details'];
			case 'productSearch':
				return ['Searching', 'Browsing catalog', 'Finding products', 'Curating results'];
			case 'productComparison':
				return ['Comparing', 'Analyzing', 'Evaluating', 'Weighing options'];
			case 'imageSearch':
				return ['Analyzing image', 'Identifying', 'Searching', 'Matching'];
			case 'productSimilar':
				return ['Finding similar items', 'Searching', 'Matching', 'Curating'];
			case 'inspirationRequest':
				return ['Brainstorming', 'Imagining', 'Curating', 'Inspiring'];
			case 'general':
			default:
				return undefined;
		}
	}, [requestType]);

	return (
		<CacheProvider>
			<>
				<div
					className={classnames(
						'ss__chat',
						{
							'ss__chat--open': store.open,
							'ss__chat--minimized': !store.open,
						},
						className,
						internalClassName
					)}
					{...styling}
				>
					{!store.open && !store.currentChat && store.suggestedQuestions?.length > 0 && (
						<div className="ss__chat__suggested-questions">
							{store.suggestedQuestions.map((question, index) => (
								<div
									key={index}
									className="ss__chat__suggested-questions__item"
									onClick={() => {
										controller.openChat(question);
									}}
								>
									{question}
								</div>
							))}
						</div>
					)}
					<div className={'ss__chat__bubble'} onClick={() => controller.handlers.button.click()}>
						<Icon icon="chat" title="Open Chat" />
					</div>
					{store.open && shouldShowSideChat && activeMessage ? (
						<div className={classnames('ss__chat__secondary')}>
							<div className={'ss__chat__header'}>
								<div className="ss__chat__header__title">
									<div className="ss__chat__header__title__primary">
										{(
											{
												inspirationResult: 'Inspiration Scenarios',
												productComparison: 'Product Comparison',
												productAnswer: 'Product Information',
											} as any
										)[activeMessage.messageType] || null}
									</div>
									<div className="ss__chat__header__title__secondary">
										{(
											{
												inspirationResult: 'Choose a style direction to explore',
												productComparison: `Comparing ${
													(activeMessage as ChatResponseProductComparisonData)?.comparisonData?.features.length
												} products`,
												productAnswer: 'Complete product details',
											} as any
										)[activeMessage.messageType] || null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									<Button
										className="ss__chat__header__button--close"
										icon={{ icon: 'close2', title: 'Close Chat' }}
										onClick={() => console.log('TODO: Close side chat action')}
									/>
								</div>
							</div>
							<div className="ss__chat__content">
								<div className={'ss__chat__messages'}>
									{/* TODO add ref? */}
									{(
										{
											inspirationResult: (
												<ChatInspirationResultMessage chatItem={activeMessage as ChatResponseInspirationResultData} controller={controller} />
											),
											productComparison: (
												<ChatProductComparisonMessage chatItem={activeMessage as ChatResponseProductComparisonData} controller={controller} />
											),
											productAnswer: <ChatProductAnswerMessage chatItem={activeMessage as ChatResponseProductAnswerData} controller={controller} />,
										} as any
									)[activeMessage.messageType] || null}
								</div>
							</div>
						</div>
					) : null}
					{store.open ? (
						<div className={'ss__chat__primary'}>
							<div className={'ss__chat__header'}>
								<div className="ss__chat__header__title">
									{logo ? <img className="ss__chat__header__title__logo" src={logo} /> : null}
									<div className="ss__chat__header__title__text">
										{title ? <div className="ss__chat__header__title__text__primary">{title}</div> : null}
										{subtitle ? <div className="ss__chat__header__title__text__secondary">{subtitle}</div> : null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									{/* <Button
										className="ss__chat__header__button--new"
										icon={{ icon: 'inspire', title: 'Inspire' }}
										onClick={() => {
											controller.inspirationRequest();
										}}
										content={'Inspire'}
									/> */}
									<Button
										// disabled={store.currentChat?.chat && store.currentChat.chat.length <= 1}
										className="ss__chat__header__button--new"
										icon={{ icon: controller.store.initChatLoading ? 'spinner' : 'plus2', title: 'New Chat' }}
										onClick={() => controller.startNewChat()}
									/>
									{store.chats.length > 1 && (
										<Dropdown
											disabled={store.chats.length == 1 && store.currentChat && store.currentChat.chat.length <= 1}
											className="ss__chat__header__dropdown-history"
											button={<HistoryButton />}
										>
											<HistoryPopup />
										</Dropdown>
									)}
									<Button
										className="ss__chat__header__button--close"
										icon={{ icon: 'close2', title: 'Close Chat' }}
										onClick={() => controller.handlers.button.click()}
									/>
								</div>
							</div>
							<div className="ss__chat__content">
								<div className="ss__chat__content__header">
									{/* <div className="ss__chat__attachments">
									{store.currentChat?.attachments.attached
										.filter((item) => item.state === 'active')
										.map((item) => (
											<Attachment key={item.id} attachment={item} controller={controller} />
										))}
								</div> */}
									{store.currentChat?.comparisons.compared && store.currentChat.comparisons.compared.length > 0 && (
										<div className={'ss__chat__content__header__comparisons'}>
											<div className={'ss__chat__content__header__comparisons__header'}>
												<div className={'ss__chat__content__header__comparisons__header__title'}>
													<Icon className={'ss__chat__content__header__comparisons__header__title__icon'} icon={'clipboard'} />
													<span className={'ss__chat__content__header__comparisons__header__title__text'}>
														Compare Products ({store.currentChat?.comparisons.compared.length}/{store.currentChat?.comparisons.maxItems})
													</span>
												</div>
												<div className={'ss__chat__content__header__comparisons__header__actions'}>
													<Button onClick={() => store.currentChat?.comparisons.reset()}>clear</Button>
												</div>
											</div>
											<div className={'ss__chat__content__header__comparisons__content'}>
												<div className={'ss__chat__content__header__comparisons__content__items'}>
													{Array.from({ length: store.currentChat?.comparisons.maxItems }).map((_, index) => {
														const comparisonItem = store.currentChat?.comparisons.compared[index];
														console.log('comparisonItem', comparisonItem);
														return (
															<div
																className={classnames('ss__chat__content__header__comparisons__content__comparison', {
																	'ss__chat__content__header__comparisons__content__comparison--placeholder': !comparisonItem,
																})}
																key={index}
															>
																{comparisonItem ? (
																	<>
																		<Image
																			// onClick={() => {
																			// 	controller?.viewProduct(product as any);
																			// }}
																			alt={comparisonItem?.result.mappings?.core?.name || ''}
																			src={comparisonItem?.result.mappings?.core?.imageUrl || ''}
																		/>
																		<div
																			className="ss__chat__content__header__comparisons__content__comparison__remove"
																			onClick={() => {
																				store.currentChat?.comparisons.remove(comparisonItem.result.id);
																			}}
																		>
																			<Icon icon={'close-thin'} size={'12px'} />
																		</div>
																	</>
																) : (
																	<>
																		<Icon icon={'plus-thin'} />
																		<div className={'ss__chat__content__header__comparisons__content__comparison--placeholder__text'}>Add</div>
																	</>
																)}
															</div>
														);
													})}
												</div>
												<div
													className={classnames('ss__chat__content__header__comparisons__action', {
														'ss__chat__content__header__comparisons__action--hidden': (store.currentChat?.comparisons.compared.length || 0) < 2,
													})}
												>
													<Button onClick={() => controller.search()} icon={{ icon: 'compare', title: 'Compare' }}>
														Compare
													</Button>
												</div>
											</div>
										</div>
									)}
								</div>
								<div className={'ss__chat__messages'} ref={messagesContainerRef}>
									{(!store.currentChat?.chat || store.currentChat.chat.length === 0) && store.welcomeMessage && (
										<div className="ss__chat__welcome">
											<div className="ss__chat__welcome__message">{store.welcomeMessage}</div>
											<SuggestedQuestions questions={store.suggestedQuestions} controller={controller} />
										</div>
									)}
									{store.currentChat?.chat.map((chatItem, index) => (
										<div key={index} className="ss__chat__message">
											{{
												user: <MessageUser chatItem={chatItem} controller={controller} />,
												text: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												content: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												productSearchResult: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												inspirationResult: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												productAnswer: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												productComparison: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												productRecommendation: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												actions: <SuggestedQuestions actions={(chatItem as unknown as ChatResponseActionsData).actions} controller={controller} />,
												error_response: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
												topic_drift: null,
											}[chatItem.messageType] || null}
										</div>
									))}
									<div className="ss__chat__messages__end" ref={messagesEndRef} />
								</div>
								<ChatLoadingIndicator loading={store.loading} verbs={loadingVerbs} />
								{!store.currentChat?.isExpired ? (
									<div className="ss__chat__content__footer">
										{store.error && <div className="ss__chat__error">{store.error.message}</div>}
										{store.currentChat?.actions && store.currentChat.actions.length > 0 && (
											<div className={'ss__chat__actions'}>
												{store.currentChat?.actions.map((action, index) => (
													<div className="ss__chat__actions__wrap" key={index}>
														{{
															facets: (
																<div className="ss__chat__actions--facets">
																	<Dropdown
																		className="ss__chat__actions__facets-dropdown"
																		button={
																			<Button className="ss__chat__actions__facets" icon="filters2">
																				Filters
																			</Button>
																		}
																	>
																		<FacetsPopup action={action as FacetsData} />
																	</Dropdown>
																	{/* {(action as FacetsData).data.map((facet, idx) => (
																	<div className="ss__chat__actions__facet" key={idx}>
																		<Dropdown key={facet.key} button={<FacetButton label={facet.label} />}>
																			<div className="ss__chat__actions__facet__options">
																				{facet.options?.map((option) => (
																					<Button
																						key={option.key}
																						onClick={() => {
																							controller.store.addFacet({
																								key: facet.key,
																								facetLabel: facet.label,
																								value: option.key,
																								label: option.label,
																								count: option.count,
																							});
																							controller.search();
																						}}
																					>
																						{option.label}
																					</Button>
																				))}
																			</div>
																		</Dropdown>
																	</div>
																))} */}
																</div>
															),
															actions: (
																<div className="ss__chat__actions--suggested">
																	{/* {(action as ActionsData).data.map((act, idx) => (
																	<Button
																		key={idx}
																		onClick={() => {
																			controller.store.inputValue = act.message;
																			controller.search();
																		}}
																	>
																		{act.message}
																	</Button>
																))} */}
																</div>
															),
														}[action.type] || null}
													</div>
												))}
											</div>
										)}
										{store.currentChat?.attachments.attached && store.currentChat.attachments.attached.length > 0 && (
											<div className={'ss__chat__attachments'}>
												{store.currentChat?.attachments.attached
													.filter((item) => item.state === 'attached' || item.state === 'loading')
													.map((item) => (
														<Attachment key={item.id} attachment={item} controller={controller} />
													))}
												{store.currentChat?.attachments.attached.length === 2 &&
												store.currentChat?.attachments.attached.every((item) => item.type === 'product') ? (
													<div className={'ss__chat__attachments__info'}>Compare products (max: 2)</div>
												) : null}
												{store.currentChat?.attachments.attached.length === 1 &&
												store.currentChat?.attachments.attached.every((item) => item.type === 'product') ? (
													<div className={'ss__chat__attachments__info'}>Ask questions about this product</div>
												) : null}
												{store.currentChat?.attachments.attached.length === 1 &&
												store.currentChat?.attachments.attached.every((item) => item.type === 'image' && !item.error) ? (
													<div className={'ss__chat__attachments__info'}>Find products similar to this image</div>
												) : null}
											</div>
										)}

										{/* {store.currentChat?.topicDrift ? (
												<div className={'ss__chat__topic-drift'}>
													<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'}/>
													<div className={'ss__chat__topic-drift__text'}>
														<span>It seems you're asking a different question</span>
														<span>{store.currentChat?.topicDrift.messageForDrift || 'Would you like to start a new session for better assistance?'}</span>
													</div>
													<Button 
														className={'ss__chat__topic-drift__button'}
														onClick={() => store.currentChat?.handleTopicDrift(store.currentChat?.topicDrift)}
													>New Session</Button>
													<Icon icon="close-thin" size="14px" className={'ss__chat__topic-drift__icon--close'}/>
												</div>
											) : null} */}
										<div className={'ss__chat__input'}>
											<div className={'ss__chat__input__input'}>
												<input
													type="text"
													name="ss-chat-input"
													placeholder="Type your message..."
													onKeyUp={(e) => controller.handlers.input.input(e as any)}
													onKeyDown={(e) => controller.handlers.input.enterKey(e as any)}
													value={controller.store.inputValue}
												/>
												{store.features.imageSearch.enabled && (
													<>
														<Button
															className={'ss__chat__upload-button'}
															disabled={store.currentChat?.attachments.attached.some((attachment) => attachment.state === 'loading') || store.blocked}
															onClick={() => fileInputRef.current?.click()}
															icon={{ icon: 'image', title: 'Upload Image' }}
														/>
														<input
															ref={fileInputRef}
															onChange={async (e) => {
																await controller.upload(e.target.files);
																// reset value
																e.target.value = '';
															}}
															multiple={true}
															type="file"
															accept="image/*"
															className="ss__chat__input__input__file"
														/>
													</>
												)}
											</div>
											<div className={'ss__chat__input__actions'}>
												<Button
													className="ss__chat__send-button"
													icon={{ icon: 'send', title: 'Send Message' }}
													disabled={store.blocked}
													onClick={() => controller.search()}
												/>
											</div>
										</div>
										<div className={'ss__chat__disclaimer'}>
											<i>
												Powered by Athos Commerce. AI-powered assistant. It sometimes make mistakes. Avoid sharing personal data.{' '}
												<a href="https://athoscommerce.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
													Privacy Policy
												</a>
											</i>
										</div>
									</div>
								) : (
									<div>This chat is expired. Please start a new chat.</div>
								)}
							</div>
						</div>
					) : null}
				</div>
				<Overlay style={{ zIndex: 1001 }} color="transparent" active={store.open} onClick={() => controller.handlers.button.click()} />
				<Slideout
					slideDirection="right"
					buttonSelector={'.ss__chat__result__detail-slot__more-info-button, .ss__chat__result__detail-slot__image'}
					width="450px"
				>
					<Quickview result={store.quickViewResult} controller={controller} />
				</Slideout>
			</>
		</CacheProvider>
	);
});

export interface ChatProps extends ComponentProps {
	controller: ChatController;
	logo: string;
	title: string;
	subtitle?: string;
}
