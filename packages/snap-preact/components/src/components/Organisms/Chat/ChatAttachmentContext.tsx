import { h } from 'preact';
import { jsx } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { Image } from '../../Atoms/Image';
import { Button } from '../../Atoms/Button';
import { Icon } from '../../Atoms/Icon';

export type ChatAttachmentContextItem = {
	id: string;
	name: string;
	imageUrl?: string;
	isLoading?: boolean;
	hasError?: boolean;
	errorMessage?: string;
	onRemove?: () => void;
};

export type ChatAttachmentContextProps = {
	title: string;
	items: ChatAttachmentContextItem[];
	onClose?: () => void;
};

export const ChatAttachmentContext = observer((props: ChatAttachmentContextProps): JSX.Element => {
	const { title, items, onClose } = props;

	if (!items || items.length === 0) {
		return <></>;
	}

	return (
		<div className={'ss__chat__attachment-context'}>
			<div className={'ss__chat__attachment-context__label'}>
				<span>{title}</span>
				{onClose && (
					<div className={'ss__chat__attachment-context__label__close'} onClick={onClose}>
						<Icon icon={'close-thin'} size={'12px'} />
					</div>
				)}
			</div>
			<div className={'ss__chat__attachment-context__items'}>
				{items.map((item) => (
					<div key={item.id} className={classnames('ss__chat__attachment-context__item', { error: item.hasError })}>
						{item.hasError ? (
							<>
								<div className={'ss__chat__attachment-context__item__error-icon'}>⚠</div>
								<div className={'ss__chat__attachment-context__item__error-message'}>
									{item.errorMessage || 'Upload Failed'} - {item.name}
								</div>
							</>
						) : (
							<>
								<div className={'ss__chat__attachment-context__item__content'}>
									{item.imageUrl && <Image className={item.isLoading ? 'loading' : ''} src={item.imageUrl} alt={item.name} />}
									{item.isLoading && (
										<div className={'ss__chat__attachment-context__item__loading'}>
											<div className={'ss__chat__loading__dot'}></div>
											<div className={'ss__chat__loading__dot'}></div>
											<div className={'ss__chat__loading__dot'}></div>
										</div>
									)}
								</div>
								<div className={'ss__chat__attachment-context__item__name'} title={item.name} dangerouslySetInnerHTML={{ __html: item.name }} />
							</>
						)}
						{item.onRemove && (
							<Button
								className={'ss__chat__attachment-context__item__remove'}
								onClick={() => !item.isLoading && item.onRemove?.()}
								icon={{
									icon: 'close-thin',
									size: '0.6em',
								}}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
});
