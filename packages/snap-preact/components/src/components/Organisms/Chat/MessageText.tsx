import { observer } from 'mobx-react-lite';
import { Icon } from '../../Atoms/Icon';
import { ResultsDisplay } from './ResultsDisplay';
import { marked } from 'marked';
import { ChatController } from '@athoscommerce/snap-controller';
import { css, StyleScript } from '../../..';
import { mergeStyles } from '../../../utilities';

const defaultStyles: StyleScript<MessageTextProps> = () => {
	return css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		gap: '5px',
		background: '#fff',
		padding: '1em',
		borderRadius: '1em',
		borderBottomLeftRadius: '3px',

		'.ss__chat__message-text__text-wrapper': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			'.ss__chat__message-text__text-wrapper__text': {
				alignSelf: 'flex-end',
			},
		},
		'.ss__chat__message-text__text-wrapper__feedback': {
			display: 'flex',
			alignItems: 'flex-end',
			gap: '10px',
			svg: {
				cursor: 'pointer',
			},
		},
		'.ss__chat__message-text__results': {
			marginTop: '12px',
			'.swiper-container': {
				alignItems: 'center',
				gap: '5px',
				'.swiper-wrapper': {},
				'.swiper-scrollbar': {
					position: 'static',
					width: '95%',
					height: '6px',
					borderRadius: '6px',
					'.swiper-scrollbar-drag': {
						borderRadius: '6px',
					},
				},
				'.swiper-pagination-lock': {
					display: 'none !important',
				},
			},
			'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
				svg: {
					fill: '#0066cc',
					stroke: '#0066cc',
				},
			},
		},
		'.ss__chat__message-text__facets': {
			display: 'flex',
			flexWrap: 'wrap',
			gap: '10px',
			margin: '10px 0 0 0',

			'.ss__chat__message-text__facets__facet': {
				display: 'flex',
				gap: '5px',
				alignItems: 'baseline',
				label: {
					fontWeight: 'bold',
				},
			},
		},
	});
};

export const MessageText = observer((props: MessageTextProps) => {
	const { controller, chatItem, scrollToBottom } = props;

	const feedbackEntry = controller.store.currentChat?.feedbacks.find((fb) => fb.messageId === chatItem.id);

	const styling = mergeStyles<MessageTextProps>(props, defaultStyles);

	return (
		<div className="ss__chat__message-text" {...styling}>
			{chatItem.text && (
				<div className="ss__chat__message-text__text-wrapper">
					<div
						className="ss__chat__message-text__text-wrapper__text"
						dangerouslySetInnerHTML={{ __html: marked.parse(chatItem.text) as string }}
					></div>
				</div>
			)}
			{chatItem?.collectFeedback ? (
				<div className="ss__chat__message-text__text-wrapper__feedback">
					<span onClick={() => controller.feedback(chatItem, 'UP')}>
						<Icon icon={'thumbs-up'} title={'Thumbs Up'} color={feedbackEntry?.rating === 'UP' ? '#000' : '#aaa'} />
					</span>
					<span onClick={() => controller.feedback(chatItem, 'DOWN')}>
						<Icon icon={'thumbs-down'} title={'Thumbs Down'} color={feedbackEntry?.rating === 'DOWN' ? '#000' : '#aaa'} />
					</span>
				</div>
			) : null}
			{chatItem && <ResultsDisplay controller={controller} chatItem={chatItem} scrollToBottom={scrollToBottom} />}
			{/* <FacetsDisplay controller={controller} chatItem={chatItem} scrollToBottom={scrollToBottom} /> */}
		</div>
	);
});

// const FacetsDisplay = observer((props: MessageProps) => {
// 	const { chatItem, controller } = props;
// 	const { facets } = chatItem;

// 	if (!facets || facets.length === 0) {
// 		return null;
// 	}

// 	return (
// 		<div className="ss__chat__message-text__facets">
// 			{facets.map((facet: any) => (
// 				<span key={facet.key} className="ss__chat__message-text__facets__facet">
// 					<label>{facet.label}:</label>
// 					{facet.options.map((option: any) => (
// 						<Button
// 							key={option.key}
// 							onClick={() => {
// 								controller.store.sendFacet({
// 									key: facet.key,
// 									facetLabel: facet.label,
// 									value: option.key,
// 									label: option.label,
// 									count: option.count,
// 								});
// 							}}
// 						>
// 							{option.label}
// 						</Button>
// 					))}
// 				</span>
// 			))}
// 		</div>
// 	);
// });

export interface MessageTextProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
}
