import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import { Product } from '@athoscommerce/snap-store-mobx';
import { ChatController } from '@athoscommerce/snap-controller';
import { Button } from '../../Atoms/Button';
import { Quickview } from './Quickview';

const modalStyles = css({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: 10010,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'.ss__chat-quickview-modal__backdrop': {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'rgba(0, 0, 0, 0.5)',
	},

	'.ss__chat-quickview-modal__content': {
		position: 'relative',
		background: '#fff',
		borderRadius: '12px',
		boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
		maxWidth: '500px',
		width: '90%',
		maxHeight: '80vh',
		overflowY: 'auto',
		zIndex: 1,

		'.ss__chat-quickview-modal__header': {
			display: 'flex',
			justifyContent: 'flex-end',
			padding: '8px 8px 0',
			position: 'sticky',
			top: 0,
			zIndex: 2,

			'.ss__button': {
				background: 'rgba(255, 255, 255, 0.9)',
				border: 'none',
				borderRadius: '50%',
				width: '32px',
				height: '32px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				'&:hover': {
					background: '#f0f0f0',
				},
			},
		},

		'.ss__chat-quickview-modal__body': {
			padding: '0 16px 16px',
		},
	},
});

export const ChatProductQuickviewModal = observer((props: ChatProductQuickviewModalProps): JSX.Element | null => {
	const { result, controller, onClose } = props;

	if (!result || !result.id) {
		return null;
	}

	return (
		<div className="ss__chat-quickview-modal" css={modalStyles}>
			<div className="ss__chat-quickview-modal__backdrop" onClick={onClose} />
			<div className="ss__chat-quickview-modal__content">
				<div className="ss__chat-quickview-modal__header">
					<Button className="ss__chat-quickview-modal__close" icon={{ icon: 'close-thin', size: '14px' }} onClick={onClose} />
				</div>
				<div className="ss__chat-quickview-modal__body">
					<Quickview result={result} controller={controller} />
				</div>
			</div>
		</div>
	);
});

export interface ChatProductQuickviewModalProps {
	result: Product;
	controller: ChatController;
	onClose: () => void;
}
