import { observer } from 'mobx-react-lite';
import { ChatController } from '@athoscommerce/snap-controller';
import { Icon } from '../../Atoms/Icon';
import { css, StyleScript } from '../../..';
import { mergeStyles } from '../../../utilities';
import type { ChatResponseActionsData } from '@athoscommerce/snap-client/dist/cjs/Client/transforms/chatResponse';

const defaultStyles: StyleScript<SuggestedQuestionsProps> = () => {
	const colorPrimary = '#253B80';
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		'.ss__chat__suggestions__item': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: '12px',
			background: '#fff',
			border: '1px solid #eee',
			borderRadius: '12px',
			padding: '14px 16px',
			cursor: 'pointer',
			fontSize: '14px',
			color: '#333',
			'&:hover': {
				borderColor: '#ccc',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
			},
			'.ss__chat__suggestions__item__text': {
				flex: 1,
				fontWeight: 500,
			},
			'.ss__chat__suggestions__item__icon': {
				width: '30px',
				height: '30px',
				background: colorPrimary,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
				svg: {
					fill: '#fff',
					stroke: '#fff',
				},
			},
		},
	});
};

export const SuggestedQuestions = observer((props: SuggestedQuestionsProps) => {
	const { controller, questions, actions } = props;
	const styling = mergeStyles<SuggestedQuestionsProps>(props, defaultStyles);

	const items: string[] = questions ?? actions?.map((action: { message: string }) => action.message) ?? [];

	if (items.length === 0) {
		return null;
	}

	return (
		<div className="ss__chat__suggestions" {...styling}>
			{items.map((item, index) => (
				<div
					key={index}
					className="ss__chat__suggestions__item"
					onClick={() => {
						controller.openChat(item);
					}}
				>
					<span className="ss__chat__suggestions__item__text">{item}</span>
					<span className="ss__chat__suggestions__item__icon">
						<Icon icon="chat" />
					</span>
				</div>
			))}
		</div>
	);
});

interface SuggestedQuestionsProps {
	questions?: string[];
	actions?: ChatResponseActionsData['actions'];
	controller: ChatController;
}
