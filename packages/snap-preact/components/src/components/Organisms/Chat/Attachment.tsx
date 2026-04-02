import { h } from 'preact';
import { jsx } from '@emotion/react';
import { ChatController } from '@athoscommerce/snap-controller';
import { ChatAttachmentFacet, ChatAttachmentImage, ChatAttachmentProduct } from '@athoscommerce/snap-store-mobx';
import { observer } from 'mobx-react-lite';
import { Image } from '../../Atoms/Image';
import classnames from 'classnames';
import { Button } from '../../..';

export const Attachment = observer((properties: AttachmentProps): JSX.Element => {
	const { attachment, controller } = properties;

	const { id } = attachment;

	const type = attachment.type;

	const chatStore = controller.store.currentChat;

	const isLoading = attachment.state === 'loading';
	const hasError = !!attachment.error;

	if (type == 'image') {
		const src = (attachment as ChatAttachmentImage).base64 || (attachment as ChatAttachmentImage).thumbnailUrl;
		const fileName = (attachment as ChatAttachmentImage).fileName || 'Image';

		if (hasError) {
			return (
				<div className={classnames('ss__chat__attachment ss__chat__attachment--image', { error: !!attachment.error })}>
					<div className={'ss__chat__attachment__error-icon'}>⚠</div>
					<div className={'ss__chat__attachment__error-message'}>
						{' '}
						{attachment.error?.message || 'Upload Failed'} - {fileName}
					</div>
					<Button
						className={'ss__chat__attachment__remove'}
						onClick={() => chatStore?.attachments.remove(id)}
						icon={{
							icon: 'close-thin',
							size: '0.6em',
						}}
					/>
				</div>
			);
		}

		return src || isLoading ? (
			<div className={classnames('ss__chat__attachment ss__chat__attachment--image', { error: !!attachment.error })}>
				<div className={'ss__chat__attachment__content'}>
					{src && <Image className={isLoading ? 'loading' : ''} style={{ height: '50px', width: '50px' }} src={src} alt={''} />}
					{isLoading && (
						<div className={'ss__chat__attachment__loading'}>
							<div className={'ss__chat__loading__dot'}></div>
							<div className={'ss__chat__loading__dot'}></div>
							<div className={'ss__chat__loading__dot'}></div>
						</div>
					)}
				</div>
				<div className={'ss__chat__attachment__info'}>{`${fileName}`}</div>
				<Button
					className={'ss__chat__attachment__remove'}
					onClick={() => !isLoading && chatStore?.attachments.remove(id)}
					icon={{
						icon: 'close-thin',
						size: '0.6em',
					}}
				/>
			</div>
		) : (
			<></>
		);
	} else if (type == 'product') {
		const { name, thumbnailUrl, requestType } = attachment;
		return id && requestType !== 'productSimilar' ? (
			<div className={classnames('ss__chat__attachment ss__chat__attachment--product', { error: !!attachment.error })}>
				<div className={'ss__chat__attachment__content'}>
					{thumbnailUrl && <Image style={{ height: '50px', width: '50px' }} src={thumbnailUrl} alt={name} />}
				</div>
				<div
					className={'ss__chat__attachment__info'}
					dangerouslySetInnerHTML={{
						__html: name || '',
					}}
				/>
				<Button
					className={'ss__chat__attachment__remove'}
					onClick={() => chatStore?.attachments.remove(id)}
					icon={{
						icon: 'close-thin',
					}}
				/>
			</div>
		) : (
			<></>
		);
	} else {
		return <></>;
	}
});

interface AttachmentProps {
	attachment: ChatAttachmentImage | ChatAttachmentProduct | ChatAttachmentFacet;
	controller: ChatController;
}
