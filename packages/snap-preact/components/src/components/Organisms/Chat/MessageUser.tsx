import { ChatController } from '@athoscommerce/snap-controller';
import { observer } from 'mobx-react-lite';
import { Image } from '../../Atoms/Image';
import { marked } from 'marked';
import { Icon } from '../../Atoms/Icon';
import { css, StyleScript } from '../../..';
import { mergeStyles } from '../../../utilities';

const defaultStyles: StyleScript<MessageUserProps> = () => {
	return css({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginLeft: '40px',
		gap: '10px',
		'.ss__chat__message-user__text': {
			padding: '0.5em 1em',
			borderRadius: '12px',
			borderBottomRightRadius: '3px',
			backgroundColor: '#000',
			color: '#fff',
			alignSelf: 'flex-end',
		},
		'.ss__chat__message-user__attachments': {
			listStyleType: 'none',
			padding: 0,
			margin: 0,
			display: 'flex',
			gap: '8px',
			flexWrap: 'nowrap',
			justifyContent: 'flex-end',
			'.ss__chat__message-user__attachment__product, .ss__chat__message-user__attachment__image, .ss__chat__message-user__attachment__facet': {
				width: '40px',
				height: '40px',
				borderRadius: '50%',
				border: '2px solid #eee',
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'.ss__image': {
					aspectRatio: '1 / 1',
					width: '100%',
					height: '100%',
				},
				'.ss__icon': {
					display: 'flex',
				},
			},
		},
	});
};

export const MessageUser = observer((props: MessageUserProps) => {
	const { controller, chatItem } = props;
	const { store } = controller;
	const styling = mergeStyles<MessageUserProps>(props, defaultStyles);

	return (
		<div className="ss__chat__message-user" {...styling}>
			<ul className="ss__chat__message-user__attachments">
				{chatItem.attachments?.length
					? chatItem.attachments?.map((attachmentId: string) => {
							const attachment = store.currentChat?.attachments.get(attachmentId);
							switch (attachment?.type) {
								case 'image':
									return (
										<li className="ss__chat__message-user__attachment__image" key={attachment.id}>
											<Image style={{ height: '200px', width: '200px' }} src={attachment.base64 || attachment.thumbnailUrl || ''} alt={''}></Image>
										</li>
									);
								case 'product':
									return (
										<li className="ss__chat__message-user__attachment__product" key={attachment.id}>
											<Image style={{ height: '200px', width: '200px' }} src={attachment.thumbnailUrl || ''} alt={attachment.name}></Image>
											{/* <div className="ss__chat__message-user__attachment__product__name">{attachment.name}</div> */}
										</li>
									);
								case 'facet':
									return (
										<li className="ss__chat__message-user__attachment__facet" key={attachment.id}>
											<Icon title={`Filter: ${attachment.facetLabel} = ${attachment.label}`} icon="filter-funnel" size={27} />
										</li>
									);
								default:
									return null;
							}
					  })
					: null}
			</ul>
			{chatItem.text ? (
				<div className="ss__chat__message-user__text" dangerouslySetInnerHTML={{ __html: marked.parse(chatItem.text) as string }}></div>
			) : null}
		</div>
	);
});

interface MessageUserProps {
	chatItem: any;
	controller: ChatController;
}
